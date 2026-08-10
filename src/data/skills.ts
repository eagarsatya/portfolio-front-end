export type Skill = {
  name: string;
  icon?: 'react' | 'nodejs' | 'github' | 'vuejs' | 'gitlab' | 'dotnet' | 'sql';
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Currently Learning',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
    ],
  },
  {
    title: 'Proficient At',
    skills: [
      { name: 'GitHub', icon: 'github' },
      { name: 'Vue.js', icon: 'vuejs' },
      { name: 'GitLab', icon: 'gitlab' },
      { name: '.NET', icon: 'dotnet' },
      { name: 'SQL', icon: 'sql' },
    ],
  },
];
