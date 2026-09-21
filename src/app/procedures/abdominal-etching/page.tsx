import type { Metadata } from 'next';
import ContentRow from '@/components/ContentRow';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Abdominal Etching | AbEtch+ | XYSculptMD',
  description: 'HD VASER abdominal etching refined with targeted dermal fillers for visible muscle definition. Dr. Babak Moein’s signature male body sculpting procedure in Beverly Hills.',
};

const XY_DIFF = [
  { them: 'Etching alone, flat definition', us: 'Etching + filler-refined muscle lines' },
  { them: 'Standard lipo technique', us: 'HD VASER, calibrated to male fat distribution' },
  { them: 'Ab etching offered as one of many services', us: 'Dr. Moein’s most-performed, most-refined procedure' },
];

const FAQ_ITEMS = [
  {
    question: 'How is this different from regular liposuction?',
    answer: 'Standard lipo removes fat broadly. Etching is precision work along your specific muscle lines, then refined with fillers — it’s sculpting, not just fat removal.',
  },
  {
    question: 'Do I need to already have visible abs?',
    answer: 'Some existing muscle tone helps, but Dr. Moein evaluates each patient individually during a private consultation.',
  },
  {
    question: 'Can this be combined with other procedures?',
    answer: 'Yes — commonly paired with Male Liposuction 360 or Gynecomastia Surgery in a single session.',
  },
];

export default function AbdominalEtchingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="hero-kicker" style={{ justifyContent: 'center' }}>AbEtch+</div>
        <h1>His Favorite Procedure. <em>His Sharpest Skill.</em></h1>
        <p>HD VASER etching along your natural muscle lines, refined with targeted fillers for definition most surgeons can&apos;t produce.</p>
        <div className="cta-row" style={{ justifyContent: 'center', marginTop: 32 }}>
          <a href="/#contact" className="btn btn-primary">Book Your Conversation</a>
          <a href="/gallery" className="btn btn-outline">View Ab Etching Results</a>
        </div>
      </section>

      <ContentRow
        title="Why This Is Dr. Moein's Signature Procedure"
        text="In his own words: etching gets you most of the way there, but fillers are how you take it another level — sharpening the muscle definition that etching alone leaves flat. It's a specialized technique, and one he's fully mastered and comfortable with. Few practices in Los Angeles combine etching with filler refinement this way, which is exactly what makes the result read as sculpted rather than simply “thin.”"
        imageSrc="/hero-model.jpg"
        imageAlt="Abdominal etching result, HD VASER and filler-refined definition"
      />

      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 28px 56px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 16, fontWeight: 700 }}>What It Involves</h2>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: 20, marginBottom: 16 }}>
          <li><strong style={{ color: 'var(--text)' }}>HD VASER liposuction</strong>, which removes fat along the natural lines of the rectus abdominis and obliques to expose the muscle structure underneath</li>
          <li><strong style={{ color: 'var(--text)' }}>Targeted dermal fillers</strong>, used to accentuate and sharpen the definition etching alone leaves flat</li>
        </ul>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 14 }}>
          Draft note: exact filler product/technique and whether it&apos;s done same-session or as a follow-up needs Dr. Moein&apos;s confirmation before this goes live.
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
          Good candidates are close to their goal weight, in reasonably good shape already, with a stable BMI and no major abdominal scarring. This procedure sculpts and defines existing muscle — it isn&apos;t a weight-loss treatment.
        </p>
        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 14, marginBottom: 32 }}>
          Draft note: candidacy criteria above are a placeholder and need Dr. Moein&apos;s confirmation.
        </p>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 16, fontWeight: 700 }}>Recovery</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          Most patients return to light activity within a few days and see initial definition within a few weeks, with final results settling over 3 to 6 months as swelling resolves.
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
            <p>Discuss your goals with Dr. Moein and see if AbEtch+ is right for you.</p>
            <a href="tel:+13104558020" className="btn btn-primary">Book Your Conversation</a>
            <div className="phone">Or call directly: (310) 455-8020</div>
          </div>
        </div>
      </section>
    </main>
  );
}
