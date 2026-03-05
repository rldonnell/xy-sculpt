import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Results Gallery | XYSculptMD – Male Plastic Surgery',
  description: 'View before and after results from real XYSculptMD patients. See the transformations achieved by Dr. Moein.',
};

const GALLERY_ITEMS = [
  { title: 'Liposuction – Abdomen & Flanks', caption: 'Athletic male, age 34' },
  { title: 'Gynecomastia Correction', caption: 'Grade II gynecomastia, age 28' },
  { title: 'Male Tummy Tuck', caption: 'Post weight loss, age 42' },
  { title: 'Body Contouring – Full Torso', caption: 'Multi-area sculpting, age 38' },
  { title: 'Male Facelift', caption: 'Lower face and jawline, age 55' },
  { title: 'Neck Lift', caption: 'Submental liposuction + platysmaplasty, age 48' },
  { title: 'Rhinoplasty', caption: 'Dorsal hump reduction, age 31' },
  { title: 'Morpheus8 – Face', caption: 'Skin tightening, age 44' },
  { title: 'VASER Liposuction – Chest', caption: 'Hi-def sculpting, age 29' },
];

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Results <em>Gallery</em></h1>
        <p>Real patients. Real results. Every transformation backed by surgical precision.</p>
      </section>

      <div className="gallery-intro">
        <p>Browse before-and-after results from XYSculptMD patients. Each case is unique — results shown represent actual surgical outcomes.</p>
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
