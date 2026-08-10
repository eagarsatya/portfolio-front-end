import { getProjects } from '../lib/github';
import ProjectCard from './ProjectCard';

async function Projects() {
  const projects = await getProjects();
  const username = process.env.GITHUB_USERNAME ?? 'eagarsatya';
  const profileUrl = `https://github.com/${username}`;

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Projects
          </h1>
          <p className="mt-2 max-w-xl text-base text-neutral-500">
            Public repositories from GitHub, refreshed automatically.
          </p>
        </div>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline"
        >
          See all on GitHub
        </a>
      </header>

      {projects.length === 0 ? (
        <div className="rounded-lg border border-neutral-200 p-6 text-sm text-neutral-500">
          <p>Couldn&apos;t load repos right now.</p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-medium text-neutral-900 underline-offset-4 hover:underline"
          >
            Visit my GitHub profile
          </a>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
