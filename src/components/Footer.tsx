import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              XY<span>SCULPT</span><span className="brand-md">MD</span>
            </div>
            <p>Premier male plastic surgery in Beverly Hills. A practice of Moein Surgical Arts.</p>
            <a href="tel:+13104558020">(310) 455-8020</a>
          </div>

          <div className="footer-col">
            <h4>Body</h4>
            <Link href="/#procedures">Liposuction</Link>
            <Link href="/#procedures">Gynecomastia</Link>
            <Link href="/#procedures">Tummy Tuck</Link>
            <Link href="/#procedures">Body Contouring</Link>
          </div>

          <div className="footer-col">
            <h4>Face &amp; Neck</h4>
            <Link href="/#procedures">Facelift</Link>
            <Link href="/#procedures">Neck Lift</Link>
            <Link href="/#procedures">Rhinoplasty</Link>
          </div>

          <div className="footer-col">
            <h4>Non-Surgical</h4>
            <Link href="/#procedures">Morpheus8</Link>
            <Link href="/#procedures">Renuvion</Link>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#resources">Financing</Link>
            <Link href="/#resources">Patient Forms</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} XYSculptMD. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/hipaa">HIPAA Notice</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
