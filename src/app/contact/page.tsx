import type { Metadata } from 'next';
import GHLForm from '@/components/GHLForm';

export const metadata: Metadata = {
  title: 'Contact | XYSculptMD – Male Plastic Surgery',
  description: 'Schedule a private consultation with Dr. Babak Moein. Contact XYSculptMD in Beverly Hills for male plastic surgery inquiries.',
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
          <p><a href="tel:+13104558020" style={{ color: 'var(--accent)' }}>(310) 455-8020</a></p>
        </div>
        <div className="contact-info__item">
          <h3>Location</h3>
          <p>Beverly Hills, California</p>
        </div>
        <div className="contact-info__item">
          <h3>Hours</h3>
          <p>Mon – Fri: 9am – 5pm</p>
        </div>
      </div>
    </main>
  );
}
