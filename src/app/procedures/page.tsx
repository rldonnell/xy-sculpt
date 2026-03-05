import Link from 'next/link';

export const metadata = {
  title: 'Procedures | XY Sculpt',
  description: 'Explore our full range of cosmetic procedures designed specifically for men, from gynecomastia correction to facial refinement.',
};

const PROCEDURES = [
  {
    icon: '♂️',
    title: 'Gynecomastia (Male Breast Reduction)',
    description: 'Address enlarged breast tissue with precision and confidence. Our most popular procedure, designed with male anatomy in mind.',
    href: '#',
    popular: true,
  },
  {
    icon: '💪',
    title: 'Liposuction & Body Contouring',
    description: 'Sculpt and define your physique. Remove stubborn fat deposits and enhance muscle definition for a more athletic appearance.',
    href: '#',
  },
  {
    icon: '👁️',
    title: 'Eyelid Surgery (Blepharoplasty)',
    description: 'Open up your eyes and reduce signs of fatigue. Subtle refinements that make a noticeable impact.',
    href: '#',
  },
  {
    icon: '👃',
    title: 'Rhinoplasty',
    description: 'Refine your profile with a nose procedure tailored to male proportions. Natural-looking results that complement your features.',
    href: '#',
  },
  {
    icon: '⬇️',
    title: 'Jawline & Neck Contouring',
    description: 'Enhance definition and create a stronger jaw profile. Strengthen your appearance with precision techniques.',
    href: '#',
  },
  {
    icon: '✨',
    title: 'Non-Surgical Treatments',
    description: 'Botox, fillers, and Sculptra for subtle enhancement without downtime. Perfect for maintaining a natural appearance.',
    href: '#',
  },
];

export default function ProceduresPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <h1>Our Procedures</h1>
        <p>A full range of cosmetic treatments designed with male aesthetics in mind.</p>
      </section>

      {/* Procedures Grid */}
      <section className="procedures-section">
        <div className="procedures-grid">
          {PROCEDURES.map((proc) => (
            <div
              key={proc.title}
              className={`procedure-card ${proc.popular ? 'procedure-card--popular' : ''}`}
            >
              <div className="procedure-card__icon">{proc.icon}</div>
              <div className="procedure-card__body">
                <h3>{proc.title}</h3>
                <p>{proc.description}</p>
                <Link href={proc.href} className="procedure-card__link">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Not Sure Which Procedure Is Right for You?</h2>
        <p>Schedule a consultation with our team. We&apos;ll help you understand your options and create a personalized plan.</p>
        <Link href="/contact" className="hero-cta">
          Book Your Consultation
        </Link>
      </section>
    </main>
  );
}
