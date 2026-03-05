import Link from 'next/link';

export const metadata = {
  title: 'Male Cosmetic Surgery Procedures | XY Sculpt',
  description: 'Explore our full range of cosmetic procedures designed specifically for men: gynecomastia correction, liposuction, eyelid surgery, rhinoplasty, jawline contouring & non-surgical treatments.',
  alternates: { canonical: 'https://xsculptmd.com/procedures' },
  openGraph: {
    title: 'Male Cosmetic Surgery Procedures | XY Sculpt',
    description: 'Full range of cosmetic procedures designed for men. Gynecomastia, liposuction, facial refinement & more.',
    url: 'https://xsculptmd.com/procedures',
  },
};

const proceduresSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Male Cosmetic Surgery Procedures',
  url: 'https://xsculptmd.com/procedures',
  description: 'Full range of cosmetic procedures designed specifically for men.',
  mainEntity: [
    {
      '@type': 'MedicalProcedure',
      name: 'Gynecomastia Surgery (Male Breast Reduction)',
      procedureType: 'Surgical',
      description: 'Address enlarged breast tissue with precision and confidence. Our most popular procedure, designed with male anatomy in mind.',
      bodyLocation: 'Chest',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Liposuction & Body Contouring',
      procedureType: 'Surgical',
      description: 'Sculpt and define your physique. Remove stubborn fat deposits and enhance muscle definition for a more athletic appearance.',
      bodyLocation: 'Abdomen, Flanks, Chest',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Eyelid Surgery (Blepharoplasty)',
      procedureType: 'Surgical',
      description: 'Open up your eyes and reduce signs of fatigue. Subtle refinements that make a noticeable impact.',
      bodyLocation: 'Eyes',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Rhinoplasty',
      procedureType: 'Surgical',
      description: 'Refine your profile with a nose procedure tailored to male proportions. Natural-looking results that complement your features.',
      bodyLocation: 'Nose',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Jawline & Neck Contouring',
      procedureType: 'Surgical',
      description: 'Enhance definition and create a stronger jaw profile. Strengthen your appearance with precision techniques.',
      bodyLocation: 'Jaw, Neck',
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Non-Surgical Treatments',
      procedureType: 'Noninvasive',
      description: 'Botox, fillers, and Sculptra for subtle enhancement without downtime. Perfect for maintaining a natural appearance.',
      bodyLocation: 'Face',
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(proceduresSchema) }}
      />
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
