import GHLForm from '@/components/GHLForm';

export const metadata = {
  title: 'Book a Confidential Consultation | XY Sculpt',
  description: 'Schedule a confidential male cosmetic surgery consultation at XY Sculpt. No pressure — honest conversation about your goals with board-certified surgeons.',
  alternates: { canonical: 'https://xsculptmd.com/contact' },
  openGraph: {
    title: 'Book a Confidential Consultation | XY Sculpt',
    description: 'Schedule your consultation with our board-certified male cosmetic surgeons.',
    url: 'https://xsculptmd.com/contact',
  },
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
          <p><a href="mailto:consult@xsculptmd.com">consult@xsculptmd.com</a></p>
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
