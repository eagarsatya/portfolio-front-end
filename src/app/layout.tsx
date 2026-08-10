import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Eagar Satya — Lead Developer',
    template: '%s · Eagar Satya',
  },
  description:
    'Portfolio of Eagar Satya — Lead Developer at PT. Accelist Lentera Indonesia. Stacks, skills, and projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-neutral-900">
        <Nav />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
