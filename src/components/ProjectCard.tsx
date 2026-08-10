import Link from 'next/link';
import type { Project } from '../data/projects';

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <article className="group rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-400">
      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        {project.description}
      </p>
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
      {(project.href || project.repo) && (
        <div className="mt-4 flex gap-4 text-sm">
          {project.href && (
            <Link
              href={project.href}
              className="font-medium text-neutral-900 underline-offset-4 hover:underline"
            >
              View
            </Link>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline"
            >
              Repo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
