'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

/**
 * Sticky site header with navigation.
 * Customize: logo URL, site name, and nav items.
 * Includes mobile hamburger menu.
 */

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Procedures', href: '/procedures' },
  { label: 'About', href: '/about' },
  { label: 'For Men', href: '/for-men' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo">
          {/* Replace with client logo: <img src="/logo.jpg" alt="Site Name" /> */}
          <span className="site-header__logo-text">
            <span className="site-header__logo-accent">XY</span> Sculpt
          </span>
        </Link>

        <button
          className="site-header__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <nav className={`site-header__nav ${mobileOpen ? 'site-header__nav--open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`site-header__nav-link ${pathname === item.href ? 'site-header__nav-link--active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="site-header__cta"
            onClick={() => setMobileOpen(false)}
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
