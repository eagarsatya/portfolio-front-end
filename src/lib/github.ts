import 'server-only';

export type Project = {
  name: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  homepage: string | null;
  stars: number;
  pushedAt: string;
  featured: boolean;
};

type GitHubRepo = {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
  topics?: string[];
  owner: {
    login: string;
  };
};

type PinnedReposResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: Array<{ name?: string } | null>;
      };
    };
  };
  errors?: unknown;
};

const CONTROL_TOPICS = new Set(['portfolio', 'featured']);
const REVALIDATE_SECONDS = 3600;
const CACHE_TAG = 'github-repos';

function getUsername() {
  return process.env.GITHUB_USERNAME ?? 'eagarsatya';
}

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'portfolio-front-end',
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

function prettifyTitle(name: string): string {
  if (name.includes('-') || name.includes('_')) {
    return name
      .split(/[-_]/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  return name;
}

function normalizeHomepage(homepage: string | null | undefined): string | null {
  if (!homepage?.trim()) return null;
  const value = homepage.trim();
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

async function fetchLanguages(owner: string, repo: string): Promise<string[]> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/languages`,
      {
        headers: getHeaders(),
        next: { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
      }
    );

    if (!res.ok) return [];

    const data = (await res.json()) as Record<string, number>;
    return Object.entries(data)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([lang]) => lang);
  } catch {
    return [];
  }
}

async function fetchPinnedRepoNames(username: string): Promise<string[]> {
  if (!process.env.GITHUB_TOKEN) return [];

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        ...getHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query($login: String!) {
            user(login: $login) {
              pinnedItems(first: 6, types: [REPOSITORY]) {
                nodes {
                  ... on Repository {
                    name
                  }
                }
              }
            }
          }
        `,
        variables: { login: username },
      }),
      next: { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
    });

    if (!res.ok) {
      console.error(
        `GitHub pinned repos fetch failed: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const json = (await res.json()) as PinnedReposResponse;

    if (json.errors) {
      console.error('GitHub pinned repos GraphQL errors:', json.errors);
      return [];
    }

    return (json.data?.user?.pinnedItems?.nodes ?? [])
      .map((node) => node?.name)
      .filter((name): name is string => Boolean(name));
  } catch (error) {
    console.error('Failed to load pinned GitHub repos:', error);
    return [];
  }
}

function applyCuration(
  repos: GitHubRepo[],
  pinnedNames: string[] = []
): GitHubRepo[] {
  const username = getUsername().toLowerCase();
  const pinnedSet = new Set(pinnedNames.map((name) => name.toLowerCase()));

  let filtered = repos.filter(
    (repo) =>
      !repo.fork &&
      !repo.archived &&
      !repo.private &&
      repo.name.toLowerCase() !== username
  );

  const hasPortfolioTopic = filtered.some((repo) =>
    (repo.topics ?? []).includes('portfolio')
  );

  if (hasPortfolioTopic) {
    filtered = filtered.filter(
      (repo) =>
        (repo.topics ?? []).includes('portfolio') ||
        pinnedSet.has(repo.name.toLowerCase())
    );
  }

  return filtered;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const username = getUsername();
    const [res, pinnedNames] = await Promise.all([
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed&direction=desc`,
        {
          headers: getHeaders(),
          next: { revalidate: REVALIDATE_SECONDS, tags: [CACHE_TAG] },
        }
      ),
      fetchPinnedRepoNames(username),
    ]);

    if (!res.ok) {
      console.error(`GitHub repos fetch failed: ${res.status} ${res.statusText}`);
      return [];
    }

    const repos = (await res.json()) as GitHubRepo[];
    const curated = applyCuration(repos, pinnedNames);
    const pinnedSet = new Set(pinnedNames.map((name) => name.toLowerCase()));
    const hasPinned = pinnedSet.size > 0;

    const hasFeaturedTopic = curated.some((repo) =>
      (repo.topics ?? []).includes('featured')
    );

    const withLanguages = await Promise.all(
      curated.map(async (repo) => {
        const languages = await fetchLanguages(repo.owner.login, repo.name);
        const languageTags =
          languages.length > 0
            ? languages
            : repo.language
              ? [repo.language]
              : [];

        const topicTags = (repo.topics ?? []).filter(
          (topic) => !CONTROL_TOPICS.has(topic)
        );

        const tech = Array.from(new Set([...languageTags, ...topicTags]));

        const featured = hasPinned
          ? pinnedSet.has(repo.name.toLowerCase())
          : hasFeaturedTopic
            ? (repo.topics ?? []).includes('featured')
            : false;

        return {
          name: repo.name,
          title: prettifyTitle(repo.name),
          description: repo.description?.trim() ?? '',
          tech,
          repoUrl: repo.html_url,
          homepage: normalizeHomepage(repo.homepage),
          stars: repo.stargazers_count,
          pushedAt: repo.pushed_at,
          featured,
        } satisfies Project;
      })
    );

    if (!hasPinned && !hasFeaturedTopic) {
      withLanguages
        .slice()
        .sort(
          (a, b) =>
            new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime()
        )
        .slice(0, 2)
        .forEach((project) => {
          project.featured = true;
        });
    }

    return withLanguages.sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;

      if (hasPinned) {
        const aPin = pinnedNames.findIndex(
          (name) => name.toLowerCase() === a.name.toLowerCase()
        );
        const bPin = pinnedNames.findIndex(
          (name) => name.toLowerCase() === b.name.toLowerCase()
        );

        if (aPin !== -1 || bPin !== -1) {
          if (aPin === -1) return 1;
          if (bPin === -1) return -1;
          if (aPin !== bPin) return aPin - bPin;
        }
      }

      if (a.stars !== b.stars) return b.stars - a.stars;
      return new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime();
    });
  } catch (error) {
    console.error('Failed to load GitHub projects:', error);
    return [];
  }
}

export { CACHE_TAG as GITHUB_REPOS_CACHE_TAG };
