import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gynecomastia Surgery | XYSculptMD',
  description: 'Restore a flat, masculine chest contour. Dr. Babak Moein combines liposuction with gland excision for natural, scar-minimal results.',
};

export default function GynecomastiaPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>A Flat, Masculine <em>Chest Contour</em></h1>
        <p>Dr. Moein combines liposuction with gland excision for natural results, no visible scarring.</p>
        <div className="cta-row" style={{ justifyContent: 'center', marginTop: 32 }}>
          <a href="/#contact" className="btn btn-primary">Book Your Conversation</a>
        </div>
      </section>

      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '56px 28px' }}>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 18, marginBottom: 16 }}>
          Gynecomastia is one of Dr. Moein&apos;s core specialties, with hundreds of cases performed. His technique combines VASER-precision liposuction with gland excision to eliminate excess chest tissue and restore a flat, masculine contour, with incisions designed to stay virtually unnoticeable.
        </p>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 18 }}>
          For a deeper look at gynecomastia grades and types, before-and-after results, and detailed recovery guidance, visit Dr. Moein&apos;s dedicated gynecomastia site.
        </p>
        <div style={{ marginTop: 32 }}>
          <a href="https://gynecomastiala.com" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            View Full Gynecomastia Resource
          </a>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="wrap">
          <div className="cta-card">
            <h2>Schedule a Private <em>Consultation</em></h2>
            <p>Discuss gynecomastia surgery with Dr. Moein.</p>
            <a href="tel:+13104558020" className="btn btn-primary">Book Your Conversation</a>
            <div className="phone">Or call directly: (310) 455-8020</div>
          </div>
        </div>
      </section>
    </main>
  );
}
