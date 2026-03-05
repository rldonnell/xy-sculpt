import Link from 'next/link';

export const metadata = {
  title: 'Why Men Choose Us | XY Sculpt',
  description: 'Discover why more men are choosing cosmetic procedures designed with male aesthetics and discretion in mind.',
};

const REASONS = [
  {
    title: 'Reduced Stigma',
    description: 'Cosmetic procedures for men are more common and accepted than ever. You\'re not alone in wanting to look and feel your best.',
  },
  {
    title: 'Remote Work & Video Calls',
    description: 'More time on camera than ever. A subtle enhancement can boost confidence during Zoom calls and presentations.',
  },
  {
    title: 'Natural-Looking Results',
    description: 'We specialize in subtle, masculine enhancements. You\'ll look refreshed and confident—not like you\'ve had work done.',
  },
  {
    title: 'Male-Specific Expertise',
    description: 'We understand male anatomy, proportions, and aesthetics. Your results will complement your masculine features.',
  },
  {
    title: 'Discreet & Private',
    description: 'Private consultations, flexible scheduling, and confidential records. Your privacy is completely protected.',
  },
  {
    title: 'Fast Recovery Options',
    description: 'Many procedures offer minimal downtime. Return to your routine with minimal disruption.',
  },
];

export default function ForMenPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <h1>Why Men Choose XY Sculpt</h1>
        <p>The rise of male cosmetic procedures—and why we&apos;re here to help.</p>
      </section>

      {/* For Men Section */}
      <section className="for-men-section">
        <h2>Cosmetic Surgery for Men is Changing</h2>
        <p>
          The landscape of male cosmetic procedures has shifted dramatically in recent years. What was once considered taboo is now mainstream, with increasing numbers of men choosing subtle enhancements to boost their confidence.
        </p>

        {/* Reasons Grid */}
        <div className="for-men-reasons">
          {REASONS.map((reason) => (
            <div key={reason.title} className="for-men-reason">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Explore Your Options?</h2>
        <p>Start with a confidential consultation. No pressure, just honest conversation about your goals.</p>
        <Link href="/contact" className="hero-cta">
          Schedule Your Consultation
        </Link>
      </section>
    </main>
  );
}
