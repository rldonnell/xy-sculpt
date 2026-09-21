import type { Metadata } from 'next';
import ContentRow from '@/components/ContentRow';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Male Tummy Tuck | XYSculptMD',
  description: 'A firmer, flatter midsection built for the male frame. Skin removal, muscle wall repair, and incision placement planned around male anatomy by Dr. Babak Moein.',
};

const XY_DIFF = [
  { them: 'Female abdominoplasty technique adapted for men', us: 'Incision and repair planned around male fat and skin patterns from the start' },
  { them: 'Treated as a standalone procedure', us: 'Can be combined with etching or lipo 360 for definition, not just a flatter contour' },
];

const FAQ_ITEMS = [
  {
    question: 'How is this different from liposuction?',
    answer: 'Liposuction removes fat. A tummy tuck removes excess skin and repairs the muscle wall — for patients with loose skin or muscle separation, lipo alone won’t fix that.',
  },
  {
    question: 'Can this be combined with ab etching?',
    answer: 'Yes, for patients who want both a flatter midsection and visible muscle definition in the same recovery period.',
  },
  {
    question: 'Will there be a visible scar?',
    answer: 'Incision is typically placed low, designed to be covered by underwear or swimwear.',
  },
];

export default function MaleTummyTuckPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>A Firmer, Flatter Midsection <em>Built for the Male Frame</em></h1>
        <p>Excess skin removed, the abdominal wall tightened, incisions placed to stay minimally visible on a male body.</p>
        <div className="cta-row" style={{ justifyContent: 'center', marginTop: 32 }}>
          <a href="/#contact" className="btn btn-primary">Book Your Conversation</a>
          <a href="/gallery" className="btn btn-outline">View Results</a>
        </div>
      </section>

      <ContentRow
        title="Why the Male Frame Changes the Approach"
        text="Men typically carry fat and loose skin differently than women after weight loss or aging — more concentrated around the upper abdomen and flanks, with a different muscle separation (diastasis recti) pattern. Incision placement and muscle repair are planned around that, not a technique borrowed from female abdominoplasty."
        imageSrc="/hero-model.jpg"
        imageAlt="Male tummy tuck result, muscle wall repair and skin removal"
        reverse
      />

      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 28px 56px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 16, fontWeight: 700 }}>What It Involves</h2>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: 20, marginBottom: 16 }}>
          <li><strong style={{ color: 'var(--text)' }}>Skin removal</strong>: excess, loose skin is removed for a flatter contour</li>
          <li><strong style={{ color: 'var(--text)' }}>Muscle wall repair</strong>: separated abdominal muscles (diastasis recti) are tightened and repaired</li>
          <li><strong style={{ color: 'var(--text)' }}>Incision placement</strong>: positioned to stay minimally visible, planned around the male frame</li>
        </ul>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          Can be combined with Male Liposuction 360 or Abdominal Etching for patients who want muscle definition addressed in the same procedure.
        </p>
      </section>

      <section className="diff-section">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="section-kicker" style={{ justifyContent: 'center' }}><span />The XY Difference</div>
          </div>
          <div className="diff-box">
            <div className="diff-side them">
              <h4>General Practice</h4>
              {XY_DIFF.map((row, i) => <div key={i} className="diff-row">{row.them}</div>)}
            </div>
            <div className="diff-vs">VS</div>
            <div className="diff-side us">
              <h4>XYSculptMD</h4>
              {XY_DIFF.map((row, i) => <div key={i} className="diff-row">{row.us}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '56px 28px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 16, fontWeight: 700 }}>Am I a Candidate?</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 12 }}>
          Good candidates have significant loose skin or muscle separation that diet and exercise can&apos;t resolve on their own, are at a stable weight, and are in good general health.
        </p>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 14, marginBottom: 32 }}>
          Draft note: candidacy criteria above are a placeholder and need Dr. Moein&apos;s confirmation.
        </p>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 16, fontWeight: 700 }}>Recovery</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          Most patients need one to two weeks away from work, avoid strenuous activity for several weeks, and see final results settle over a few months as swelling resolves.
        </p>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 14 }}>
          Draft note: recovery timeline above is a placeholder and needs Dr. Moein&apos;s confirmation.
        </p>
      </section>

      <section className="faq">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="section-kicker" style={{ justifyContent: 'center' }}><span />FAQ</div>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="wrap">
          <div className="cta-card">
            <h2>Schedule a Private <em>Consultation</em></h2>
            <p>Discuss a male-specific tummy tuck with Dr. Moein.</p>
            <a href="tel:+13104558020" className="btn btn-primary">Book Your Conversation</a>
            <div className="phone">Or call directly: (310) 455-8020</div>
          </div>
        </div>
      </section>
    </main>
  );
}
