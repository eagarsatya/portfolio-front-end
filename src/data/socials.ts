export type Social = {
  name: string;
  href: string;
  icon:
    | 'facebook'
    | 'twitter'
    | 'github'
    | 'gitlab'
    | 'spotify'
    | 'discord'
    | 'linkedin'
    | 'youtube'
    | 'instagram'
    | 'steam';
  external?: boolean;
  className: string;
};

export const socials: Social[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/eagar.satya',
    icon: 'facebook',
    external: true,
    className: 'social-facebook',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/eagarsatya',
    icon: 'twitter',
    external: true,
    className: 'social-twitter',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/eagarsatya',
    icon: 'github',
    external: true,
    className: 'social-github',
  },
  {
    name: 'GitLab',
    href: 'https://gitlab.com',
    icon: 'gitlab',
    external: true,
    className: 'social-gitlab',
  },
  {
    name: 'Spotify',
    href: '/spotify',
    icon: 'spotify',
    external: false,
    className: 'social-spotify',
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/u7mMmn8Nfb',
    icon: 'discord',
    external: true,
    className: 'social-discord',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eagarsatya',
    icon: 'linkedin',
    external: true,
    className: 'social-linkedin',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCyCxqOHhLvjphUfUXr_AW9g',
    icon: 'youtube',
    external: true,
    className: 'social-youtube',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/eagarsatya',
    icon: 'instagram',
    external: true,
    className: 'social-instagram',
  },
  {
    name: 'Steam',
    href: 'https://steamcommunity.com/id/extallofakind/',
    icon: 'steam',
    external: true,
    className: 'social-steam',
  },
];
