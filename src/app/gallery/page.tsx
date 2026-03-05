import Link from 'next/link';

export const metadata = {
  title: 'Gallery | XY Sculpt',
  description: 'Before and after photos showcasing our natural-looking results from cosmetic procedures for men.',
};

const GALLERY_ITEMS = [
  { procedure: 'Gynecomastia Correction', note: 'Results may vary.' },
  { procedure: 'Liposuction & Body Contouring', note: 'Results may vary.' },
  { procedure: 'Eyelid Surgery', note: 'Results may vary.' },
  { procedure: 'Rhinoplasty', note: 'Results may vary.' },
  { procedure: 'Jawline Contouring', note: 'Results may vary.' },
  { procedure: 'Neck Refinement', note: 'Results may vary.' },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <h1>Gallery</h1>
        <p>Real results from real patients. See the natural-looking outcomes we deliver.</p>
      </section>

      {/* Gallery Intro */}
      <section className="gallery-intro">
        <h2>Our Results Speak for Themselves</h2>
        <p>
          We pride ourselves on delivering natural-looking results that enhance your appearance without looking overdone. Each procedure is customized to your unique anatomy and goals.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.procedure} className="gallery-item">
            <div className="gallery-item__placeholder">📷</div>
            <div className="gallery-item__body">
              <h3>{item.procedure}</h3>
              <p>{item.note}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Want to See What&apos;s Possible for You?</h2>
        <p>Schedule a consultation and we&apos;ll discuss your specific goals and show you customized projections.</p>
        <Link href="/contact" className="hero-cta">
          Book Your Consultation
        </Link>
      </section>
    </main>
  );
}
