import GHLForm from '@/components/GHLForm';

export const metadata = {
  title: 'Book Your Consultation | XY Sculpt',
  description: 'Schedule a confidential consultation with our team. No pressure—just honest conversation about your goals.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <h1>Book Your Consultation</h1>
        <p>Let&apos;s discuss your goals in a confidential, judgment-free environment.</p>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-form-card">
          <h2>Get in Touch</h2>
          <p>
            Fill out the form below and we&apos;ll reach out to confirm your appointment. All information is kept strictly confidential.
          </p>
          <GHLForm />
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="contact-info__item">
          <h3>Phone</h3>
          <p><a href="tel:+1234567890">(123) 456-7890</a></p>
        </div>
        <div className="contact-info__item">
          <h3>Email</h3>
          <p><a href="mailto:consult@xysculpt.com">consult@xysculpt.com</a></p>
        </div>
        <div className="contact-info__item">
          <h3>Office Hours</h3>
          <p>Mon–Fri: 9am–6pm</p>
          <p>Sat: 10am–4pm (By Appt)</p>
        </div>
      </section>
    </main>
  );
}
