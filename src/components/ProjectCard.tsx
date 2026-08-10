import type { Project } from '../lib/github';

type Props = {
  project: Project;
};

function formatUpdated(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';

  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

function ProjectCard({ project }: Props) {
  const updated = formatUpdated(project.pushedAt);
  const description =
    project.description ||
    'No description yet — add one on the GitHub repository.';

  return (
    <article className="group rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-400">
      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
        {project.title}
      </h3>
      <p
        className={`mt-2 text-sm leading-relaxed ${
          project.description ? 'text-neutral-500' : 'text-neutral-400 italic'
        }`}
      >
        {description}
      </p>

      {(updated || project.stars > 0) && (
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-neutral-400">
          {updated && <span>Updated {updated}</span>}
          {project.stars > 0 && <span>★ {project.stars}</span>}
        </div>
      )}

      {project.tech.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex gap-4 text-sm">
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-neutral-900 underline-offset-4 hover:underline"
          >
            Live Demo
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline"
        >
          Repo
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
