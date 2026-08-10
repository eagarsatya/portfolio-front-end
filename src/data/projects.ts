export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Portfolio Front-End',
    description:
      'Personal portfolio site built with Next.js, React, and Tailwind — showcasing work, stacks, and socials.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    href: '/',
    repo: 'https://github.com/eagarsatya',
    featured: true,
  },
  {
    title: 'Spotify Playlist Explorer',
    description:
      'OAuth-powered playlist viewer that connects to Spotify and lists private playlists.',
    tech: ['Next.js', 'Spotify API', 'OAuth'],
    href: '/spotify',
    featured: true,
  },
  {
    title: 'Internal Tools Suite',
    description:
      'Placeholder for lead-dev work at Accelist — replace with a real project when ready.',
    tech: ['.NET', 'SQL', 'Vue.js'],
    featured: false,
  },
];
