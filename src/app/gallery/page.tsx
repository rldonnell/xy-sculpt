import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Results Gallery | XYSculptMD – Male Plastic Surgery',
  description: 'Before and after results from XYSculptMD are coming soon.',
  // Placeholder page: keep it out of search until real, consented photos are in.
  robots: { index: false, follow: true },
};

const GALLERY_ITEMS = [
  { title: 'Liposuction – Abdomen & Flanks', caption: 'Athletic male, age 34' },
  { title: 'Gynecomastia Correction', caption: 'Grade II gynecomastia, age 28' },
  { title: 'Male Tummy Tuck', caption: 'Post weight loss, age 42' },
  { title: 'Body Contouring – Full Torso', caption: 'Multi-area sculpting, age 38' },
  { title: 'Abdominal Etching', caption: 'HD VASER etching + filler refinement' },
  { title: 'VASER Liposuction – Chest', caption: 'Hi-def sculpting, age 29' },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Results <em>Gallery</em></h1>
        <p>Before-and-after photos are coming soon.</p>
      </section>

      <div className="gallery-intro">
        <p>This gallery is being prepared. Every case will name the procedures performed, and individual results vary.</p>
      </div>

      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item, i) => (
          <div key={i} className="gallery-item">
            <div className="gallery-item__placeholder">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: 40, height: 40 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <div className="gallery-item__body">
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
