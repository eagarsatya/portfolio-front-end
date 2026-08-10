import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '../lib/github';
import ProjectCard from './ProjectCard';

async function Home() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="space-y-16">
      <section className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <Image
          src="/profile.jpg"
          alt="Eagar Satya"
          width={128}
          height={128}
          className="h-28 w-28 rounded-full border border-neutral-200 object-cover sm:h-32 sm:w-32"
          priority
        />
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Eagar Satya
          </h1>
          <p className="mt-2 text-base text-neutral-500">
            Lead Developer @ PT. Accelist Lentera Indonesia
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            I build reliable products with clean architecture — clear systems,
            thoughtful solutions, and work that lasts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-md border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              View projects
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
            Featured work
          </h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            See all
          </Link>
        </div>
        {featured.length === 0 ? (
          <p className="text-sm text-neutral-500">
            Featured projects will appear here once GitHub repos load.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
