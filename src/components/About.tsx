import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faGithub,
  faVuejs,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { skillGroups } from '../data/skills';

const iconMap: Record<string, IconDefinition> = {
  react: faReact,
  nodejs: faNodeJs,
  github: faGithub,
  vuejs: faVuejs,
  gitlab: faGitlab,
  dotnet: faCode,
  sql: faDatabase,
};

function About() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          src="/profile.jpg"
          alt="Eagar Satya"
          width={120}
          height={120}
          className="h-28 w-28 rounded-full border border-neutral-200 object-cover"
          priority
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            About
          </h1>
          <p className="mt-1 text-lg text-neutral-500">
            Thomas More &ldquo;Eagar Satya&rdquo;
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            Lead Developer at{' '}
            <span className="font-medium text-neutral-900">
              PT. Accelist Lentera Indonesia
            </span>
            . I care about clear code, solid systems, and shipping work that
            lasts.
          </p>
        </div>
      </section>

      {skillGroups.map((group) => (
        <section key={group.title}>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
            {group.title}
          </h2>
          <p className="mt-1 text-sm text-neutral-500">
            {group.title === 'Currently Learning'
              ? 'Tools and stacks I am actively leveling up.'
              : 'Technologies I use day to day with confidence.'}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {group.skills.map((skill) => {
              const icon = skill.icon ? iconMap[skill.icon] : null;
              return (
                <li
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3.5 py-1.5 text-sm text-neutral-700"
                >
                  {icon && (
                    <FontAwesomeIcon
                      icon={icon}
                      className="h-4 w-4 text-neutral-500"
                    />
                  )}
                  {skill.name}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default About;
