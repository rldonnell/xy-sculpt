import Link from 'next/link';
import { SITE, addressOneLine } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-mark">
              XY<span>SCULPT</span><span className="brand-md">MD</span>
            </div>
            <p>The architecture of the male form. Abdominal etching and male body sculpting by {SITE.doctor.withCreds}.</p>
            <p style={{ marginTop: 12 }}>{addressOneLine}<br /><a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a><br />{SITE.hours}</p>
          </div>
          <div className="footer-col">
            <h4>Procedures</h4>
            <Link href="/procedures/abdominal-etching">Abdominal Etching</Link>
            <Link href="/procedures/gynecomastia">Gynecomastia</Link>
            <Link href="/procedures/male-tummy-tuck">Male Tummy Tuck</Link>
            <Link href="/procedures/male-facial-rejuvenation">Male Facial Rejuvenation</Link>
            <Link href="/procedures/male-butt-lift">Male Butt Lift</Link>
            <Link href="/procedures/abdominal-etching#etching-vs-liposuction">Male Lipo 360</Link>
          </div>
          <div className="footer-col">
            <h4>Learn</h4>
            <Link href="/blog/six-pack-surgery-los-angeles">Six-Pack Surgery Guide</Link>
            <Link href="/blog/male-plastic-surgery-los-angeles-guide">Male Plastic Surgery Guide</Link>
            <Link href="/blog/gynecomastia-surgery-cost-los-angeles">Gynecomastia Cost</Link>
            <Link href="/blog">All Articles</Link>
          </div>
          <div className="footer-col">
            <h4>Practice</h4>
            <Link href="/about">About Dr. Moein</Link>
            <Link href="/for-men">Why Men Choose Us</Link>
            <Link href="/contact">Book Consultation</Link>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="/#resources">Financing</Link>
            <Link href="/#resources">Patient Forms</Link>
            <Link href="/#resources">Traveling Patients</Link>
            <a href="https://gynecomastiala.com">GynecomastiaLA</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy">&copy; {new Date().getFullYear()} XYSculptMD. All rights reserved. A practice of Moein Surgical Arts. Content is educational and not medical advice; individual results vary.</div>
          <div className="legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
