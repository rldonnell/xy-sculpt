import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE, addressOneLine } from '@/lib/site';

/*
 * DRAFT written by P5. Must be reviewed by the practice's counsel before
 * launch. See MAINTENANCE-LEDGER.md.
 */

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for using the XYSculptMD website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Terms of <em>Use</em></h1>
        <p>Last updated November 2026</p>
      </section>

      <article className="post">
        <div className="post__content">
          <p>By using this website, operated by {SITE.name}, you agree to these terms. If you do not agree, please do not use the site.</p>

          <h2>Information only, not medical advice</h2>
          <p>Everything on this site, including procedure descriptions, recovery timelines, and articles, is general information. It is not medical advice and is not a substitute for an in-person consultation. Using this site, or sending us a message through it, does not create a doctor-patient relationship. Whether a procedure is right for you can only be decided after a consultation and examination with {SITE.doctor.full}.</p>

          <h2>Results and recovery</h2>
          <p>Every patient is different. Results, recovery times, and risks vary, and the results shown on this site may not occur for you. Recovery timelines describe typical experiences; your own plan is set by your surgeon.</p>

          <h2>Pricing</h2>
          <p>Prices on this site are typical ranges, not quotes. Your price depends on your anatomy, the areas treated, and the technique, and is confirmed in writing after your consultation.</p>

          <h2>Emergencies</h2>
          <p>Do not use this website or the consultation form for urgent medical needs. If you have a medical emergency, call 911.</p>

          <h2>Your privacy</h2>
          <p>Our <Link href="/privacy">Privacy Policy</Link> explains how we handle information you share through the site.</p>

          <h2>Content and links</h2>
          <p>The text, images, and design of this site belong to {SITE.name} or its licensors and may not be copied for commercial use without permission. Links to other websites are provided for convenience; we are not responsible for their content.</p>

          <h2>Limitation of liability</h2>
          <p>The site is provided as is. To the extent the law allows, {SITE.name} is not liable for any loss arising from your use of the site or reliance on its general information.</p>

          <h2>Governing law and changes</h2>
          <p>These terms are governed by the laws of the State of California. We may update them from time to time; the date above shows the latest version.</p>

          <h2>Contact us</h2>
          <p>{SITE.name}, {addressOneLine}. Phone <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a>.</p>
        </div>
      </article>
    </main>
  );
}
