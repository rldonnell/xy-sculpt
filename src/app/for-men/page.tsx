import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Men Choose XYSculptMD | Male Plastic Surgery',
  description: 'Discover why more men are choosing XYSculptMD for plastic surgery — a practice designed exclusively around the male anatomy, goals, and experience.',
};

const REASONS = [
  {
    title: 'Male-Specific Expertise',
    desc: 'Every procedure is adapted for male anatomy — broader frames, thicker skin, different fat distribution patterns. No cookie-cutter techniques borrowed from female aesthetics.',
  },
  {
    title: 'Discreet & Efficient',
    desc: 'We understand that privacy matters. Our practice is designed for minimal wait times, private consultations, and discreet recovery planning.',
  },
  {
    title: 'Natural-Looking Results',
    desc: 'Men don\'t want to look "done" — they want to look like themselves, just better. Dr. Moein\'s techniques prioritize subtle, powerful transformation.',
  },
  {
    title: 'Advanced Technology',
    desc: 'VASER liposuction, Morpheus8, Renuvion — we use the most advanced tools available to deliver precision results with faster recovery times.',
  },
  {
    title: 'Transparent Pricing',
    desc: 'No surprises, no hidden fees. We provide clear, itemized pricing so you can make informed decisions without pressure.',
  },
  {
    title: 'Comprehensive Aftercare',
    desc: 'Your transformation doesn\'t end in the OR. We provide detailed recovery protocols, follow-up appointments, and ongoing support throughout your healing journey.',
  },
];

export default function ForMenPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Designed for <em>Men</em></h1>
        <p>Why more men are choosing a practice built exclusively around their needs.</p>
      </section>

      <section className="for-men-section">
        <h2>Why XYSculptMD?</h2>
        <p>General cosmetic practices treat male patients as an afterthought. We built our entire practice around you.</p>
        <div className="for-men-reasons">
          {REASONS.map((r, i) => (
            <div key={i} className="for-men-reason">
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="wrap">
          <div className="cta-card">
            <h2>Ready to Take the <em>First Step?</em></h2>
            <p>Schedule a private, no-pressure consultation with Dr. Moein.</p>
            <a href="tel:+13104558020" className="btn btn-primary">Book Consultation</a>
            <div className="phone">Or call directly: (310) 455-8020</div>
          </div>
        </div>
      </section>
    </main>
  );
}
