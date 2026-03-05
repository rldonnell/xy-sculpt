import Link from 'next/link';

export const metadata = {
  title: 'About Our Board-Certified Male Cosmetic Surgeons',
  description: 'Meet the board-certified surgeons at XY Sculpt. 15+ years specializing in male cosmetic surgery with a commitment to natural results, discretion, and personalized care.',
  alternates: { canonical: 'https://xsculptmd.com/about' },
  openGraph: {
    title: 'About Our Board-Certified Male Cosmetic Surgeons | XY Sculpt',
    description: 'Meet the team behind XY Sculpt. 15+ years specializing in male cosmetic surgery.',
    url: 'https://xsculptmd.com/about',
  },
};

const VALUES = [
  {
    title: 'Discretion',
    description: 'Your privacy is paramount. We maintain the highest standards of confidentiality and create a judgment-free environment.',
  },
  {
    title: 'Natural Results',
    description: 'We enhance your features, not transform them. Our goal is to help you look like the best version of yourself.',
  },
  {
    title: 'Male-Focused Expertise',
    description: 'Specialized knowledge of male anatomy and aesthetics. We understand what looks right on men.',
  },
  {
    title: 'Personalized Care',
    description: 'Every face and body is unique. Your treatment plan is customized to your individual goals and proportions.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <h1>About XY Sculpt</h1>
        <p>Expertise, discretion, and confidence in every procedure.</p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <h2>Our Story</h2>
        <p>
          XY Sculpt was founded on a simple idea: men deserve the same access to excellent cosmetic care as anyone else, but with an approach tailored to their unique needs and concerns.
        </p>
        <p>
          Our founding surgeon, with over 15 years of specialized experience in male aesthetics, recognized a gap in the market. Men weren&apos;t looking for dramatic transformations—they wanted subtle, confident enhancements that would help them feel more like themselves.
        </p>
        <p>
          We&apos;ve built our practice around this principle. Every member of our team shares a commitment to understanding the male perspective on cosmetic enhancement. We listen, we educate, and we deliver results that speak for themselves.
        </p>
        <p>
          Board-certified and continuously training in the latest techniques, we combine medical precision with an artistic eye. The result? Procedures that look natural, feel right, and give you the confidence you&apos;re looking for.
        </p>

        {/* Values Grid */}
        <h2>Our Values</h2>
        <div className="about-values">
          {VALUES.map((value) => (
            <div key={value.title} className="about-value">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Intro */}
        <h2>Meet Our Team</h2>
        <p>
          Our surgeons and staff are dedicated to providing you with the highest level of care. We invest in ongoing education, maintain strict safety standards, and treat every patient with respect and professionalism.
        </p>
        <p>
          When you come to XY, you&apos;re working with experts who understand not just the technical aspects of cosmetic surgery, but the emotional journey of choosing to enhance your appearance.
        </p>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Take the Next Step?</h2>
        <p>Schedule a confidential consultation and let&apos;s discuss your goals.</p>
        <Link href="/contact" className="hero-cta">
          Book Your Consultation
        </Link>
      </section>
    </main>
  );
}
