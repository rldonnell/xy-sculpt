import type { Metadata } from 'next';
import { SITE, addressOneLine } from '@/lib/site';

/*
 * DRAFT written by P5 from how the site works today (GoHighLevel form,
 * Vercel hosting, no ad pixels or session recording). It must be reviewed by
 * the practice's counsel before launch, and updated whenever tracking,
 * forms or vendors change. See MAINTENANCE-LEDGER.md.
 */

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How XYSculptMD collects, uses, and protects the information you share through this website.',
  alternates: { canonical: '/privacy' },
};

const list = { margin: '0 0 1.2em 1.2em', listStyle: 'disc' } as const;

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>Privacy <em>Policy</em></h1>
        <p>Last updated November 2026</p>
      </section>

      <article className="post">
        <div className="post__content">
          <p>This policy explains what information {SITE.name} (the surgical practice of {SITE.doctor.withCreds}) collects through this website, how we use it, and the choices you have. It covers this website only. Your medical records as a patient are protected under California and federal medical privacy law and are not covered by this website policy.</p>

          <h2>Information you give us</h2>
          <p>When you use our consultation form, call, or email us, you may share your name, email address, phone number, and details about the procedures you are interested in or your health. Please share only what you are comfortable sending; we will discuss medical details with you privately.</p>

          <h2>Information collected automatically</h2>
          <ul style={list}>
            <li>Our hosting provider records standard technical information (such as IP address, browser type, and pages requested) to deliver and secure the site.</li>
            <li>If you arrive from an advertisement or campaign link, the form records the campaign tags in that link (such as utm source, gclid, or fbclid) so we know which campaign brought you to us.</li>
            <li>This site does not currently use third-party advertising pixels, session-recording tools, or live chat. If that changes, we will update this policy first.</li>
          </ul>

          <h2>How we use it</h2>
          <ul style={list}>
            <li>To respond to you, schedule your consultation, and provide the services you ask for.</li>
            <li>To understand which of our campaigns are working.</li>
            <li>To keep the site secure and working properly, and to meet legal obligations.</li>
          </ul>
          <p>We do not sell your personal information, and we do not share it with third parties for their own advertising. We do not use anything you tell us about your health for marketing without your separate written authorization.</p>

          <h2>Who we share it with</h2>
          <p>We share information only with service providers who help us run the practice: our patient-communication and scheduling platform (which hosts the consultation form) and our website host. We may also disclose information when the law requires it.</p>

          <h2>Patient photos and reviews</h2>
          <p>We never publish a patient&apos;s photos, name, or comments without that patient&apos;s signed written authorization, which the patient may revoke at any time for future use.</p>

          <h2>Your choices and California rights</h2>
          <p>You can ask us to tell you what information we hold about you from this website, to correct it, or to delete it, and you can ask us to stop contacting you at any time. California residents also have rights under the California Confidentiality of Medical Information Act and other state law. To make a request, contact us using the details below. We will not treat you differently for exercising these rights.</p>

          <h2>Security and retention</h2>
          <p>We use reasonable administrative, technical, and physical safeguards to protect your information, and keep it only as long as needed for the purposes above or as the law requires. No method of transmission over the internet is completely secure.</p>

          <h2>Children</h2>
          <p>This site is not directed to anyone under 18, and we do not knowingly collect information from minors through it.</p>

          <h2>Contact us</h2>
          <p>{SITE.name}, {addressOneLine}. Phone <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a>.</p>
        </div>
      </article>
    </main>
  );
}
