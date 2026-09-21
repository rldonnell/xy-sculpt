import type { Metadata } from 'next';
import ContentRow from '@/components/ContentRow';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Male Butt Lift | XYSculptMD',
  description: 'A fat-transfer butt lift calibrated to male proportions — athletic and upward, not curvier feminine volume. Dr. Babak Moein, Beverly Hills.',
};

const XY_DIFF = [
  { them: 'Technique borrowed from female BBL', us: 'Contour planned around the male ideal from the start' },
  { them: 'Generic "more volume" goal', us: 'Athletic, upward shape calibrated to male proportions' },
  { them: 'Treated as a standalone procedure', us: 'Often paired with lipo 360 or ab etching using the same harvested fat' },
];

const FAQ_ITEMS = [
  {
    question: 'Is this the same as a female BBL?',
    answer: 'The underlying fat-transfer technique is similar, but the goal is different — a male-proportioned, athletic contour rather than a curvier female shape.',
  },
  {
    question: 'Can this be combined with other procedures?',
    answer: 'Yes — commonly paired with Male Liposuction 360 or Abdominal Etching, since the donor fat often comes from the same treatment areas.',
  },
  {
    question: 'How much fat survives the graft?',
    answer: 'Survival rates vary by patient. Dr. Moein will walk you through what to expect for your specific case during a private consultation.',
  },
];

export default function MaleButtLiftPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>A Male Butt Lift, <em>Built for Male Proportions</em></h1>
        <p>Fat-transfer sculpting calibrated to the male ideal — athletic and upward, not curvier feminine volume.</p>
        <div className="cta-row" style={{ justifyContent: 'center', marginTop: 32 }}>
          <a href="/#contact" className="btn btn-primary">Book Your Conversation</a>
          <a href="/gallery" className="btn btn-outline">View Results</a>
        </div>
      </section>

      <ContentRow
        title="Why Male Anatomy Changes the Approach"
        text="Most butt lift content online is written for a female aesthetic: more curve, more hip-to-waist contrast, rounder volume. The male ideal is different — an athletic, upward, more square contour that works with existing muscle tone rather than adding curviness. Dr. Moein's approach starts from that male-specific target, not a female technique adapted after the fact."
        imageSrc="/hero-model.jpg"
        imageAlt="Male butt lift result, athletic male-proportioned contour"
      />

      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 28px 56px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 16, fontWeight: 700 }}>What It Involves</h2>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: 20, marginBottom: 16 }}>
          <li><strong style={{ color: 'var(--text)' }}>Fat transfer</strong>: fat is harvested from areas like the flanks, abdomen, or back — often the same areas treated in HD lipo or ab etching — and grafted into the glutes for a natural, athletic lift</li>
          <li><strong style={{ color: 'var(--text)' }}>Male-specific shaping</strong>: placement and volume are calibrated for a more square, upward contour instead of a rounder, curvier result</li>
        </ul>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          Commonly combined with Male Liposuction 360 or Abdominal Etching in a single session, since fat harvested from the torso can be used for the graft.
        </p>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 14, marginTop: 16 }}>
          Draft note: Dr. Moein&apos;s specific technique (harvest areas, fat-only vs. implants) needs his confirmation before this goes live.
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
          Good candidates have enough donor fat in the flanks, abdomen, or back for a meaningful graft, are in stable health, and are not using the procedure as a weight-loss method.
        </p>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 14, marginBottom: 32 }}>
          Draft note: candidacy criteria above are a placeholder and need Dr. Moein&apos;s confirmation.
        </p>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 16, fontWeight: 700 }}>Recovery</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          Most patients avoid direct sitting pressure on the area for the first two to three weeks, with final results settling over several months as some grafted fat is naturally reabsorbed.
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
            <p>Discuss a male-proportioned butt lift with Dr. Moein.</p>
            <a href="tel:+13104558020" className="btn btn-primary">Book Your Conversation</a>
            <div className="phone">Or call directly: (310) 455-8020</div>
          </div>
        </div>
      </section>
    </main>
  );
}
