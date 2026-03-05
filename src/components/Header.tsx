'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          XY<span>SCULPT</span><span className="brand-md">MD</span>
          <span className="brand-tag">Male Plastic Surgery</span>
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          <Link href="/#procedures" onClick={() => setOpen(false)}>Procedures</Link>
          <Link href="/#results" onClick={() => setOpen(false)}>Results</Link>
          <Link href="/#doctor" onClick={() => setOpen(false)}>Dr. Moein</Link>
          <Link href="/#faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/#resources" onClick={() => setOpen(false)}>Resources</Link>
        </nav>

        <div className="header-right">
          <a href="tel:+13104558020" className="header-phone">(310) 455-8020</a>
          <Link href="/#contact" className="btn btn-primary header-cta">Book Consultation</Link>
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 24, height: 24 }}>
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 24, height: 24 }}>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
