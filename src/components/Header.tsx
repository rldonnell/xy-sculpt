'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Procedures', href: '/#procedures' },
  { label: 'Results', href: '/#results' },
  { label: 'Dr. Moein', href: '/#doctor' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Resources', href: '/#resources' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll for header shrink effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);

    // For anchor links (/#section), if we're already on the homepage, smooth scroll
    if (href.startsWith('/#')) {
      const hash = href.slice(1); // e.g. #procedures
      if (pathname === '/') {
        e.preventDefault();
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      // If not on homepage, the browser will navigate to / then scroll to the hash
    }
  };

  const isActive = (href: string) => {
    if (href === '/blog') return pathname.startsWith('/blog');
    return false;
  };

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="brand">
          <div className="brand-mark">
            XY<span>SCULPT</span><span className="brand-md">MD</span>
          </div>
          <div className="brand-tag">Male Plastic<br />Surgery</div>
        </Link>

        <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? 'nav-active' : ''}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={pathname === '/' ? '#contact' : '/#contact'}
            className="btn btn-primary"
            onClick={(e) => handleNavClick(e, pathname === '/' ? '/#contact' : '/#contact')}
          >
            Book a Conversation
          </a>
        </nav>

        <a href="tel:+13104558020" className="nav-phone">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          (310) 455-8020
        </a>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
