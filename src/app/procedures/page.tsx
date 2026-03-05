import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Procedures | XYSculptMD – Male Plastic Surgery',
  description: 'Explore our full range of male plastic surgery procedures — liposuction, gynecomastia, tummy tuck, facelift, rhinoplasty, and advanced non-surgical treatments.',
};

const PROCEDURES = [
  {
    title: 'Male Liposuction',
    desc: 'Precision fat removal sculpted for the male frame. Target the chest, abdomen, flanks, and chin with techniques designed for masculine contours and minimal downtime.',
    href: '/#procedures',
  },
  {
    title: 'Gynecomastia Surgery',
    desc: 'Restore a flat, masculine chest. Dr. Moein combines liposuction with gland excision for natural results — no visible scarring.',
    href: '/#procedures',
  },
  {
    title: 'Male Tummy Tuck',
    desc: 'Remove excess skin and tighten the abdominal wall for a firmer, flatter midsection. Customized for the male frame with incisions designed for minimal visibility.',
    href: '/#procedures',
  },
  {
    title: 'Body Contouring',
    desc: 'Comprehensive body sculpting that addresses multiple areas in a single session. Ideal after major weight loss or for refining your overall physique.',
    href: '/#procedures',
  },
  {
    title: 'Male Facelift',
    desc: 'Tighten sagging skin and redefine the jawline without looking "done." Techniques adapted for male skin thickness and hairline preservation.',
    href: '/#procedures',
  },
  {
    title: 'Neck Lift',
    desc: 'Eliminate the double chin and turkey neck. Restore a sharp, defined jawline that conveys strength and vitality.',
    href: '/#procedures',
  },
  {
    title: 'Rhinoplasty',
    desc: 'Reshape and refine the nose while maintaining masculine proportions. Functional and aesthetic correction in one procedure.',
    href: '/#procedures',
  },
  {
    title: 'Morpheus8',
    desc: 'Radiofrequency microneedling that tightens skin and reduces fat without surgery. Ideal for the face, neck, and body with minimal downtime.',
    href: '/#procedures',
  },
  {
    title: 'Renuvion',
    desc: 'Helium plasma skin tightening for areas that need a lift without a full surgical procedure. Often paired with liposuction for enhanced results.',
    href: '/#procedures',
  },
];

export default function ProceduresPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Our <em>Procedures</em></h1>
        <p>Every technique engineered for the male anatomy — broader shoulders, thicker skin, different fat distribution.</p>
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
            <a href="tel:+13104558020" className="btn btn-primary">Book Consultation</a>
            <div className="phone">Or call directly: (310) 455-8020</div>
          </div>
        </div>
      </section>
    </main>
  );
}
