import type { Metadata } from 'next';
import Socials from '../../components/Social';

export const metadata: Metadata = {
  title: 'Socials',
};

export default function SocialPage() {
  return <Socials />;
}
