import type { Metadata } from 'next';
import Projects from '../../components/Projects';

export const metadata: Metadata = {
  title: 'Projects',
};

export const revalidate = 3600;

export default function ProjectsPage() {
  return <Projects />;
}
