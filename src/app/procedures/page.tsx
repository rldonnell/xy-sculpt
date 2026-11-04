import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Procedures | XYSculptMD – Male Plastic Surgery',
  description: 'Male body sculpting procedures in Los Angeles: abdominal etching, gynecomastia surgery, male tummy tuck, male facial rejuvenation, male butt lift, and Lipo 360.',
};

const PROCEDURES = [
  { title: 'Abdominal Etching (AbEtch+)', desc: 'HD VASER six-pack sculpting refined with targeted filler for visible muscle definition. Dr. Moein’s signature procedure.', href: '/procedures/abdominal-etching' },
  { title: 'Gynecomastia Surgery', desc: 'Gland excision plus VASER liposuction for a flat, masculine chest, tailored to your grade.', href: '/procedures/gynecomastia' },
  { title: 'Male Tummy Tuck', desc: 'Remove excess skin and repair the abdominal wall for a firmer, flatter midsection, with incisions placed low.', href: '/procedures/male-tummy-tuck' },
  { title: 'Male Facial Rejuvenation', desc: 'Minimally invasive procedures that take years off your appearance, define your masculine jawline, and minimize recovery time.', href: '/procedures/male-facial-rejuvenation' },
  { title: 'Male Butt Lift', desc: 'Fat-transfer sculpting calibrated to male proportions: athletic and upward, not curvier feminine volume.', href: '/procedures/male-butt-lift' },
  { title: 'Male Liposuction 360', desc: 'Full-circumference HD VASER fat removal across the abdomen, flanks, back, and chest for a V-shaped torso. Often paired with etching.', href: '/procedures/abdominal-etching#etching-vs-liposuction' },
];

export default function ProceduresPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Our <em>Procedures</em></h1>
        <p>Every technique engineered for male anatomy: broader frames, thicker skin, different fat distribution.</p>
      </section>

      <div className="procedures-grid">
        {PROCEDURES.map((proc, i) => (
          <Link key={i} href={proc.href} className="procedure-card" style={{ textDecoration: 'none' }}>
            <div style={{ padding: 28 }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text)', marginBottom: 10, fontWeight: 700 }}>{proc.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{proc.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="final-cta" id="contact">
        <div className="wrap">
          <div className="cta-card">
            <h2>Ready to Explore Your <em>Options?</em></h2>
            <p>Schedule a private consultation to discuss which procedures are right for your goals.</p>
            <a href="/contact" className="btn btn-primary">Book Private Consultation</a>
            <div className="phone">Or call directly: <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
