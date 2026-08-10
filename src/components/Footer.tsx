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

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-200">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-500">
          © {year} Eagar Satya
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {socials.map((social) => {
            const icon = iconMap[social.icon];
            const className = `text-neutral-400 transition-colors ${social.className}`;

            if (social.external) {
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={className}
                >
                  <FontAwesomeIcon icon={icon} className="h-5 w-5" />
                </a>
              );
            }

            return (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className={className}
              >
                <FontAwesomeIcon icon={icon} className="h-5 w-5" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
