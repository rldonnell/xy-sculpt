import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-mark">
              XY<span>SCULPT</span><span className="brand-md">MD</span>
            </div>
            <p>Male plastic surgery and body sculpting by Dr. Babak Moein, MD, FACS. Beverly Hills, Los Angeles, CA.</p>
          </div>
          <div className="footer-col">
            <h4>Body</h4>
            <Link href="/procedures">Gynecomastia</Link>
            <Link href="/procedures">HD Lipo &amp; VASER</Link>
            <Link href="/procedures">Ab Etching</Link>
            <Link href="/procedures">Male Tummy Tuck</Link>
            <Link href="/procedures">Male Lipo 360</Link>
            <Link href="/procedures">Body Lift</Link>
          </div>
          <div className="footer-col">
            <h4>Face &amp; Neck</h4>
            <Link href="/procedures">Skin Tightening</Link>
            <Link href="/procedures">Eyelid Surgery</Link>
            <Link href="/procedures">Chin &amp; Jaw Definition</Link>
            <Link href="/procedures">Rhinoplasty</Link>
          </div>
          <div className="footer-col">
            <h4>Non-Surgical</h4>
            <Link href="/procedures">Morpheus8</Link>
            <Link href="/procedures">Renuvion</Link>
            <Link href="/procedures">Dermal Fillers</Link>
            <Link href="/procedures">Hair Restoration</Link>
            <Link href="/procedures">Exosomes</Link>
            <Link href="/procedures">PRP Treatment</Link>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <a href="#resources">Financing</a>
            <a href="#resources">Patient Forms</a>
            <a href="#resources">E-Books &amp; Guides</a>
            <a href="#resources">Videos</a>
            <a href="#resources">Traveling Patients</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy">&copy; {new Date().getFullYear()} XYSculptMD. All rights reserved. A practice of Moein Surgical Arts.</div>
          <div className="legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <a href="#">HIPAA Notice</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
