import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          Projects
        </h1>
        <p className="mt-2 max-w-xl text-base text-neutral-500">
          Selected work and experiments. Replace the placeholders with your
          real portfolio pieces.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
