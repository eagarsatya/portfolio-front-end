'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/social', label: 'Socials' },
  { href: '/spotify', label: 'Spotify' },
];

function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="group">
          <span className="text-base font-semibold tracking-tight text-neutral-900">
            Eagar Satya
          </span>
          <span className="mt-0.5 block text-xs text-neutral-500 group-hover:text-neutral-700">
            Lead Developer
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? 'font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="border-t border-neutral-200 px-6 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.href} className="py-2">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm ${
                  isActive(link.href)
                    ? 'font-medium text-neutral-900'
                    : 'text-neutral-500'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Nav;
