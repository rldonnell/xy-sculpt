import type { Metadata } from 'next';
import GHLForm from '@/components/GHLForm';
import { SITE, addressOneLine } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact | XYSculptMD – Male Plastic Surgery',
  description: 'Schedule a private consultation with Dr. Babak Moein. Contact XYSculptMD in Century City, Los Angeles, for abdominal etching and male body sculpting.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Get in <em>Touch</em></h1>
        <p>Schedule a private consultation or ask us anything. No pressure, ever.</p>
      </section>

      <div className="contact-form-section">
        <div className="contact-form-card">
          <GHLForm />
        </div>
      </div>

      <div className="contact-info">
        <div className="contact-info__item">
          <h3>Phone</h3>
          <p><a href={`tel:${SITE.phone.tel}`} style={{ color: 'var(--accent)' }}>{SITE.phone.display}</a></p>
        </div>
        <div className="contact-info__item">
          <h3>Location</h3>
          <p>{addressOneLine}</p>
        </div>
        <div className="contact-info__item">
          <h3>Hours</h3>
          <p>{SITE.hours}</p>
        </div>
      </div>
    </main>
  );
}
