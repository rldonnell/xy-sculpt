import Link from 'next/link';
import ContentRow from '@/components/ContentRow';

export const metadata = {
  title: 'XY Sculpt | Expert Cosmetic Care for Men',
  description: 'Discreet, personalized cosmetic sculpting designed exclusively for men. Board-certified expertise, natural-looking results.',
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-banner__content">
          <h1>Confidence, Refined.</h1>
          <p className="hero-banner__subtitle">
            Expert cosmetic sculpting designed exclusively for men. Discreet, personalized care with results that look natural.
          </p>
          <Link href="/contact" className="hero-cta">
            Schedule Your Consultation
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stats-bar__inner">
          <div className="stats-bar__item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stats-bar__item">
            <h3>5000+</h3>
            <p>Procedures</p>
          </div>
          <div className="stats-bar__item">
            <h3>Board</h3>
            <p>Certified</p>
          </div>
          <div className="stats-bar__item">
            <h3>98%</h3>
            <p>Satisfaction</p>
          </div>
        </div>
      </section>

      {/* About the Practice */}
      <ContentRow
        imageSrc="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=400&fit=crop"
        imageAlt="Board-certified surgeon at XY Sculpt"
        title="Why Choose XY Sculpt?"
        text="At XY Sculpt, we understand the unique aesthetic goals of men. With over 15 years of specialized experience, we've perfected the art of enhancing male features while maintaining natural, masculine results. Our approach is discreet, professional, and focused entirely on helping you feel confident in your own skin."
        reverse
      />

      <ContentRow
        imageSrc="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop"
        imageAlt="Modern procedure suite at XY Sculpt"
        title="Specialized Procedures"
        text="From gynecomastia correction to facial refinement, we offer a full range of procedures tailored to male anatomy. Each treatment is customized to your goals and designed to enhance rather than change who you are."
      />

      <ContentRow
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
        imageAlt="Private consultation office"
        title="Your Privacy Matters"
        text="We've created a discreet, professional environment where you can discuss your goals openly without judgment. Private consultation rooms, flexible scheduling, and confidential records mean you're always in control of your experience."
        reverse
      />

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Enhance Your Confidence?</h2>
        <p>Start with a confidential consultation. We&apos;ll discuss your goals and create a personalized treatment plan.</p>
        <Link href="/contact" className="hero-cta">
          Book Your Consultation Today
        </Link>
      </section>
    </main>
  );
}
