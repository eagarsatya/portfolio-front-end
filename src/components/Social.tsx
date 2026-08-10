import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareGithub,
  faGitlab,
  faSpotify,
  faDiscord,
  faLinkedin,
  faYoutube,
  faSquareInstagram,
  faSquareSteam,
} from '@fortawesome/free-brands-svg-icons';
import { socials } from '../data/socials';

const iconMap = {
  facebook: faSquareFacebook,
  twitter: faSquareTwitter,
  github: faSquareGithub,
  gitlab: faGitlab,
  spotify: faSpotify,
  discord: faDiscord,
  linkedin: faLinkedin,
  youtube: faYoutube,
  instagram: faSquareInstagram,
  steam: faSquareSteam,
};

function Socials() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          Socials
        </h1>
        <p className="mt-2 max-w-xl text-base text-neutral-500">
          Find me across the web. Icons pick up their brand color on hover.
        </p>
      </header>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {socials.map((social) => {
          const icon = iconMap[social.icon];
          const className = `flex flex-col items-center gap-3 rounded-lg border border-neutral-200 p-5 text-neutral-400 transition-colors hover:border-neutral-400 ${social.className}`;

          const content = (
            <>
              <FontAwesomeIcon icon={icon} className="h-20 w-20" />
              <span className="text-xs font-medium text-neutral-600">
                {social.name}
              </span>
            </>
          );

          return (
            <li key={social.name}>
              {social.external ? (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <Link href={social.href} className={className}>
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Socials;
