import Link from 'next/link';

/**
 * Site footer with navigation links and copyright.
 * Customize: footer links, copyright text.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <h3>XY Sculpt</h3>
          <p>Expert cosmetic sculpting designed exclusively for men.</p>
        </div>
        <div className="site-footer__links">
          <div className="site-footer__column">
            <h4>Navigation</h4>
            <Link href="/">Home</Link>
            <Link href="/procedures">Procedures</Link>
            <Link href="/about">About</Link>
            <Link href="/for-men">For Men</Link>
          </div>
          <div className="site-footer__column">
            <h4>More</h4>
            <Link href="/gallery">Gallery</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <p className="site-footer__copyright">
          &copy; {new Date().getFullYear()} XY Sculpt. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
