import { marked } from 'marked';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE, physicianSchema } from '@/lib/site';

/** Inline markdown (bold, italics, links) for copy strings. */
const md = (s: string) => ({ __html: marked.parseInline(s) as string });
const mdBlock = (s: string) => ({ __html: marked.parse(s) as string });
const plain = (s: string) => s.replace(/\*\*|\*|\[([^\]]+)\]\([^)]+\)/g, '$1');

export interface ProcedureContent {
  slug: string;
  name: string;
  kicker: string;
  h1Lead: string;
  h1Em: string;
  sub: string;
  quickAnswer: string;
  facts: { label: string; value: string }[];
  /** Long-form article sections. Body is markdown. */
  sections: { id?: string; title: string; body: string }[];
  /** Optional card grid (anatomy, types, grades, severity). */
  cards?: { kicker: string; title: string; intro?: string; items: { label: string; sub: string; text: string }[] };
  diff?: { them: string; us: string }[];
  steps: { intro: string; items: { title: string; text: string }[] };
  candidacy: string[];
  timeline: { when: string; text: string }[];
  cost?: { title: string; body: string; drivers: { title: string; text: string }[] };
  faq: { question: string; answer: string }[];
  reviewed: string;
  related?: { label: string; href: string }[];
  ctaLine: string;
}

const Check = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const Minus = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
    <circle cx="12" cy="12" r="10" /><path d="M8 12h8" />
  </svg>
);

export default function ProcedureTemplate({ c }: { c: ProcedureContent }) {
  const url = `${SITE.url}/procedures/${c.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalWebPage'],
        '@id': `${url}#webpage`,
        url,
        name: `${c.name} | ${SITE.name}`,
        about: { '@id': `${url}#procedure` },
        lastReviewed: c.reviewed,
        reviewedBy: { '@id': `${SITE.url}/#physician` },
      },
      {
        '@type': 'MedicalProcedure',
        '@id': `${url}#procedure`,
        name: c.name,
        procedureType: 'Surgical',
        description: plain(c.quickAnswer),
      },
      physicianSchema,
      {
        '@type': 'FAQPage',
        mainEntity: c.faq.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: plain(f.answer) },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Procedures', item: `${SITE.url}/procedures` },
          { '@type': 'ListItem', position: 3, name: c.name, item: url },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="hero-kicker" style={{ justifyContent: 'center' }}>{c.kicker}</div>
        <h1>{c.h1Lead} <em>{c.h1Em}</em></h1>
        <p>{c.sub}</p>
        <div className="cta-row" style={{ justifyContent: 'center', marginTop: 32, marginBottom: 0 }}>
          <a href="/contact" className="btn btn-primary">Book Private Consultation</a>
        </div>
      </section>

      {/* Quick answer + facts */}
      <section className="pt-quick">
        <div className="wrap pt-quick-grid">
          <div className="pt-quick-card">
            <div className="section-kicker">Quick Answer</div>
            <p dangerouslySetInnerHTML={md(c.quickAnswer)} />
          </div>
          <dl className="pt-facts">
            {c.facts.map(f => (
              <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {/* Article */}
      <section className="pt-article-wrap">
        <article className="pt-article">
          {c.sections.map(s => (
            <div key={s.title} id={s.id}>
              <h2>{s.title}</h2>
              <div dangerouslySetInnerHTML={mdBlock(s.body)} />
            </div>
          ))}
        </article>
      </section>

      {/* Cards */}
      {c.cards && (
        <section className="pt-cards">
          <div className="wrap">
            <div className="section-kicker">{c.cards.kicker}</div>
            <h2 className="section-title">{c.cards.title}</h2>
            {c.cards.intro && <p className="section-desc">{c.cards.intro}</p>}
            <div className="pt-card-grid">
              {c.cards.items.map(it => (
                <div key={it.label} className="pt-card">
                  <div className="pt-card-sub">{it.sub}</div>
                  <h3>{it.label}</h3>
                  <p>{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Difference */}
      {c.diff && (
        <section className="diff-section">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <div className="section-kicker" style={{ justifyContent: 'center' }}><span />The XY Difference</div>
            </div>
            <div className="diff-box">
              <div className="diff-side them">
                <h4>General Practice</h4>
                {c.diff.map((r, i) => <div key={i} className="diff-row"><Minus /> {r.them}</div>)}
              </div>
              <div className="diff-vs">VS</div>
              <div className="diff-side us">
                <h4>{SITE.name}</h4>
                {c.diff.map((r, i) => <div key={i} className="diff-row"><Check /> {r.us}</div>)}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Steps */}
      <section className="pt-steps-section">
        <div className="wrap">
          <div className="section-kicker">How It&apos;s Performed</div>
          <h2 className="section-title">Step by <em>Step</em></h2>
          <p className="section-desc">{c.steps.intro}</p>
          <div className="pt-steps">
            {c.steps.items.map((s, i) => (
              <div key={s.title} className="a-step">
                <div className="a-step-num">{String(i + 1).padStart(2, '0')}</div>
                <div><h3>{s.title}</h3><p>{s.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidacy + Recovery */}
      <section className="pt-two">
        <div className="wrap pt-two-grid">
          <div>
            <div className="section-kicker">Candidacy</div>
            <h2 className="pt-h2">Are You a <em>Candidate?</em></h2>
            <ul className="pt-cand">
              {c.candidacy.map(x => <li key={x}><Check /> <span>{x}</span></li>)}
            </ul>
            <p className="pt-note">The best way to confirm candidacy is a private consultation with {SITE.doctor.short}.</p>
          </div>
          <div>
            <div className="section-kicker">Recovery</div>
            <h2 className="pt-h2">Recovery <em>Timeline</em></h2>
            <ol className="pt-timeline">
              {c.timeline.map(t => (
                <li key={t.when}><span className="pt-when">{t.when}</span><span>{t.text}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Cost */}
      {c.cost && (
        <section className="pt-cost">
          <div className="wrap">
            <div className="section-kicker">Cost &amp; Financing</div>
            <h2 className="section-title">{c.cost.title}</h2>
            <div className="pt-cost-body" dangerouslySetInnerHTML={mdBlock(c.cost.body)} />
            <div className="pt-card-grid">
              {c.cost.drivers.map(d => (
                <div key={d.title} className="pt-card"><h3>{d.title}</h3><p>{d.text}</p></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="section-kicker" style={{ justifyContent: 'center' }}><span />FAQ</div>
            <div className="section-title">Frequently Asked <em>Questions</em></div>
          </div>
          <FAQAccordion items={c.faq} />
        </div>
      </section>

      {/* Medical review */}
      <section className="pt-review-wrap">
        <div className="wrap">
          <div className="pt-review">
            <div className="pt-review-badge">BM</div>
            <div>
              <div className="pt-review-title">Medically reviewed by {SITE.doctor.withCreds}</div>
              <p>Board certified in General Surgery; Diplomate, American Board of Cosmetic Surgery. Fellow, American College of Surgeons. Reviewed {c.reviewed}.</p>
              <p className="pt-disclaimer">This page is for educational purposes only and is not medical advice. Individual results vary and all surgery carries risk. A personal consultation with {SITE.doctor.short} is required before any procedure.</p>
              {c.related && (
                <div className="pt-related">
                  {c.related.map(r => <a key={r.href} href={r.href}>{r.label} &rarr;</a>)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta" id="contact">
        <div className="wrap">
          <div className="cta-card">
            <h2>Schedule Your Private <em>Consultation</em></h2>
            <p>{c.ctaLine}</p>
            <a href="/contact" className="btn btn-primary">Book Private Consultation</a>
            <div className="phone">Or call directly: <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
