export type Skill = {
  name: string;
  icon?:
    | 'react'
    | 'nodejs'
    | 'github'
    | 'vuejs'
    | 'gitlab'
    | 'dotnet'
    | 'sql'
    | 'nextjs'
    | 'postgresql'
    | 'redis'
    | 'kafka'
    | 'typesense';
};

export const skills: Skill[] = [
  { name: '.NET', icon: 'dotnet' },
  { name: 'SQL', icon: 'sql' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Kafka', icon: 'kafka' },
  { name: 'Typesense', icon: 'typesense' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Vue.js', icon: 'vuejs' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'GitHub', icon: 'github' },
  { name: 'GitLab', icon: 'gitlab' },
];
