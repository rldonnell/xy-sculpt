import Link from 'next/link';
import ContentRow from '@/components/ContentRow';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE, physicianSchema } from '@/lib/site';

export const metadata = {
  title: { absolute: 'Abdominal Etching Los Angeles | The Architecture of the Male Form | XYSculptMD' },
  description: 'Abdominal etching and male body sculpting in Los Angeles by double board certified surgeon Dr. Babak Moein: HD VASER etching refined with filler, gynecomastia, male tummy tuck, and male butt lift.',
  alternates: { canonical: '/' },
};

const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalBusiness', 'MedicalClinic'],
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      description: 'Abdominal etching and male body sculpting by Dr. Babak Moein, MD, FACS: HD VASER etching refined with filler, plus male tummy tuck, male butt lift, male liposuction 360, and gynecomastia surgery. Century City, Los Angeles.',
      telephone: SITE.phone.tel,
      priceRange: '$$$$',
      medicalSpecialty: 'PlasticSurgery',
      address: physicianSchema.address,
      employee: { '@id': `${SITE.url}/#physician` },
      parentOrganization: { '@type': 'MedicalOrganization', name: 'Moein Surgical Arts', url: 'https://moeinsurgicalarts.com' },
      availableService: [
        { '@type': 'MedicalProcedure', name: 'Abdominal Etching', procedureType: 'Surgical' },
        { '@type': 'MedicalProcedure', name: 'Gynecomastia Surgery', procedureType: 'Surgical' },
        { '@type': 'MedicalProcedure', name: 'Male Tummy Tuck', procedureType: 'Surgical' },
        { '@type': 'MedicalProcedure', name: 'Diastasis Recti Repair', procedureType: 'Surgical' },
        { '@type': 'MedicalProcedure', name: 'Male Butt Lift', procedureType: 'Surgical' },
        { '@type': 'MedicalProcedure', name: 'Male Liposuction 360', procedureType: 'Surgical' },
        { '@type': 'MedicalProcedure', name: 'Male Facial Rejuvenation', procedureType: 'Noninvasive' },
      ],
    },
    physicianSchema,
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': `${SITE.url}/#organization` },
    },
  ],
};

const PROCEDURES = [
  { num: '01', title: 'Male Tummy Tuck', desc: 'Remove excess skin and tighten the abdominal wall for a firmer, flatter midsection. Customized for the male frame with incisions designed for minimal visibility.', href: '/procedures/male-tummy-tuck' },
  { num: '02', title: 'Male Butt Lift', desc: 'Fat-transfer sculpting calibrated to male proportions \u2014 an athletic, upward contour rather than a curvier female shape. Often paired with lipo 360 or ab etching.', href: '/procedures/male-butt-lift' },
  { num: '03', title: 'Male Liposuction 360', desc: 'Full-circumference fat removal targeting the abdomen, flanks, back, and chest. Creates a proportional, V-shaped torso silhouette with awake or general anesthesia options.', href: '/procedures/abdominal-etching#etching-vs-liposuction' },
  { num: '04', title: 'Gynecomastia Surgery', desc: 'Eliminate excess chest tissue and sculpt a flat, masculine chest contour. Dr. Moein\u2019s technique combines gland excision with VASER precision for natural-looking results.', href: '/procedures/gynecomastia' },
];

const RESULTS = [
  { alt: 'Ab etching and gynecomastia surgery', image: '/results/ab-etching-gynecomastia-surgery-before-after.webp', width: 1200, height: 802 },
  { alt: '360 liposuction and tummy tuck, front view', image: '/results/360-liposuction-tummy-tuck-front-before-after.webp', width: 1200, height: 800 },
  { alt: '360 liposuction and tummy tuck, side view', image: '/results/360-liposuction-tummy-tuck-side-before-after.webp', width: 1200, height: 800 },
  { alt: 'Tummy tuck, gynecomastia surgery, and liposuction with ab etching', image: '/results/tummy-tuck-gynecomastia-liposuction-ab-etching-before-after.webp', width: 1200, height: 800 },
  { alt: 'Ab etching, liposuction, and excess skin removal', image: '/results/ab-etching-liposuction-excess-skin-removal-before-after.webp', width: 1200, height: 800 },
  { alt: 'Tummy tuck and liposuction', image: '/results/tummy-tuck-liposuction-before-after.webp', width: 1200, height: 800 },
];

const TESTIMONIALS = [
  { quote: 'Dr. Moein is a great gyno doctor! Knowledgeable, thoughtful, and informative. The staff is also very friendly. The results exceeded my expectations.', author: 'Arash B.', role: 'Gynecomastia Patient' },
  { quote: 'Dr. Babak has performed a successful gynecomastia operation for me. He is a very kind doctor. Professional with experience who is considerate and diligent.', author: 'Eric P.', role: 'Gynecomastia Patient' },
  { quote: 'Professional with experience who respects the patient\u2019s wishes and does not pressure them to receive services they did not request. Strongly advised!', author: 'Lavone C.', role: 'Body Contouring Patient' },
];

const FAQ_ITEMS = [
  { question: 'Is male plastic surgery different from female plastic surgery?', answer: 'Yes, significantly. Male anatomy has different fat distribution, thicker skin, stronger muscle attachments, and different aesthetic ideals: V-shaped torso lines and flat chest contours rather than curves. At XYSculptMD every technique is calibrated to male anatomy, not adapted from female procedures.' },
  { question: 'How discreet is the consultation process?', answer: 'Completely private. Our Century City location is a professional medical building with private parking and discreet entry. Consultations are one-on-one with Dr. Moein, and all communications are fully confidential.' },
  { question: 'What is abdominal etching, and am I a candidate?', answer: 'Abdominal etching is high-definition VASER liposuction used as sculpture, revealing the six-pack, obliques, and serratus. Dr. Moein refines the result with targeted filler (AbEtch+). The best candidates are lean-to-athletic men near their goal weight; it is not a weight-loss procedure.' },
  { question: 'What is recovery like?', answer: 'It depends on the procedure. Most men return to desk work in 5 to 7 days after abdominal etching or gynecomastia surgery, and in 2 to 3 weeks after a tummy tuck. Final results develop over 3 to 6 months as swelling resolves. Dr. Moein provides direct 24/7 access during recovery.' },
  { question: 'How do I get an accurate price quote?', answer: `During your private consultation, Dr. Moein performs a clinical evaluation and provides an itemized, all-inclusive quote. Abdominal etching starts at $6,500 and gynecomastia surgery at about $4,500. Financing is available through ${SITE.financing}.` },
  { question: 'Can I combine multiple procedures?', answer: 'Yes. Many men combine procedures for a complete transformation in a single session and recovery period. Common combinations are gynecomastia surgery with ab etching, or Lipo 360 with etching and skin tightening.' },
];

const INSIGHTS = [
  { title: 'Six-Pack Surgery: Ab Etching Cost, Results & Recovery', desc: 'What abdominal etching costs in Los Angeles, who is a candidate, and what recovery really looks like.', href: '/blog/six-pack-surgery-los-angeles' },
  { title: 'Male Plastic Surgery in Los Angeles: The Complete Guide', desc: 'The procedures men ask about most, how they differ from female surgery, and how to choose a surgeon.', href: '/blog/male-plastic-surgery-los-angeles-guide' },
  { title: 'Male Liposuction in Los Angeles: HD VASER vs. Traditional', desc: 'Why ultrasonic VASER changes what liposuction can do for the male torso.', href: '/blog/male-liposuction-los-angeles' },
];

const RESOURCES = [
  { title: 'Financing', desc: 'We believe cost should never stand between you and the results you want. Flexible payment plans available.', items: [`${SITE.financing}`, '0% interest plans available (with approval)', 'All-inclusive pricing with no hidden fees', 'Free financing consultation'] },
  { title: 'Patient Forms', desc: 'Save time on your visit by completing your paperwork in advance. Download, fill out, and bring to your consultation.', items: ['New patient intake form', 'Medical history questionnaire', 'Pre-operative instructions', 'Post-operative care guides'] },
  { title: 'E-Books & Guides', desc: 'Free educational resources to help you understand your options and make an informed decision.', items: ['The Men\u2019s Guide to Body Sculpting', 'Gynecomastia: What Every Man Should Know', 'VASER HD Lipo Explained', 'Recovery Timeline & What to Expect'] },
  { title: 'Videos', desc: 'Watch real procedure explanations, patient testimonials, and behind-the-scenes content from Dr. Moein.', items: ['Procedure walkthrough videos', 'Patient transformation stories', 'Dr. Moein Q&A sessions', 'Technology and technique deep dives'] },
  { title: 'Traveling Patients', desc: 'Coming from out of town? We make it seamless. Our concierge team handles logistics so you can focus on your results.', items: ['Virtual consultations available', 'Preferred hotel and recovery suite partners', 'Airport transportation coordination', 'Condensed consultation + surgery scheduling'] },
  { title: 'FAQ & Support', desc: 'Still have questions? Our team is available to help you every step of the way, before and after your procedure.', items: ['24/7 direct line to Dr. Moein post-op', 'Insurance and billing questions', 'Procedure comparison guides', 'Schedule a call with our patient coordinator'] },
];

const ArrowIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 14, height: 14 }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ShieldIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ClockIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PinIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const MinusCircleIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
    <circle cx="12" cy="12" r="10" /><path d="M8 12h8" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="hero-kicker">Abdominal Etching &amp; Male Body Sculpting &middot; Los Angeles</div>
              <h1>The Architecture<br /><em>of the</em> Male Form.</h1>
              <p className="hero-eyebrow-sub">Los Angeles&apos;s standard for abdominal etching.</p>
              <p className="sub">
                Double board certified surgeon <strong>Dr. Babak Moein</strong> combines HD VASER etching with targeted filler refinement to sharpen muscle definition most surgeons can&apos;t produce. A practice dedicated exclusively to men.
              </p>
              <div className="cta-row">
                <a href="/procedures/abdominal-etching" className="btn btn-primary">Explore Abdominal Etching</a>
                <a href="/contact" className="btn btn-outline">Book Private Consultation</a>
              </div>
              <div className="trust-row">
                <div className="trust-item"><ShieldIcon /> Double Board Certified &middot; FACS</div>
                <div className="trust-item"><ClockIcon /> {SITE.stats.years} Years Experience</div>
                <div className="trust-item"><PinIcon /> Century City, Los Angeles</div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <picture>
                  <source srcSet="/hero-model-mobile.webp" media="(max-width: 600px)" type="image/webp" />
                  <source srcSet="/hero-model.webp" type="image/webp" />
                  <img
                    className="hero-img"
                    src="/hero-model.jpg"
                    alt="The architecture of the male form: defined chest, shoulders and abdomen"
                    width={800}
                    height={800}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="hero-stats-float">
                <div className="hsf-item"><span className="hsf-num">{SITE.stats.years}</span><span className="hsf-label">Years</span></div>
                <div className="hsf-divider" />
                <div className="hsf-item"><span className="hsf-num">{SITE.stats.maleProcedures}</span><span className="hsf-label">Male Procedures</span></div>
                <div className="hsf-divider" />
                <div className="hsf-item"><span className="hsf-num">2x</span><span className="hsf-label">Board Certified</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SIGNATURE PROCEDURE SPOTLIGHT ═══ */}
      <ContentRow
        title="Why Abdominal Etching Is the Procedure He's Built His Practice Around"
        text="Etching gets you most of the way there, but fillers are how you take it another level, sharpening the muscle definition that etching alone leaves flat. It's a specialized technique, and one Dr. Moein has fully mastered. Few practices in Los Angeles combine HD VASER etching with filler refinement this way, which is exactly what separates a sculpted result from a simply thin one."
        imageSrc="/ab-etching-patient.jpg"
        imageAlt="Abdominal etching result showing defined six-pack and obliques"
        caption="Actual patient of Dr. Moein. AI used to smudge his tattoos."
      />
      <div style={{ textAlign: 'center', marginTop: -24, marginBottom: 56 }}>
        <a href="/procedures/abdominal-etching" className="btn btn-outline">See the Full Abdominal Etching Procedure</a>
      </div>

      {/* ═══ PROCEDURES ═══ */}
      <section className="procedures" id="procedures">
        <div className="wrap">
          <div className="section-kicker">Beyond Abdominal Etching</div>
          <div className="section-title">The Male <em>Makeover</em></div>
          <p className="section-desc proc-intro">Abdominal etching is the foundation, but most men want the complete picture: a tighter midsection, a more masculine silhouette, and results that hold up long after recovery. Dr. Moein built the Male Makeover around that goal, pairing etching with the torso procedures that complement it most, often combined in a single session and a single recovery. Below are the four components that make it up.</p>
          <div className="proc-grid">
            {PROCEDURES.map(proc => (
              proc.href ? (
                <Link key={proc.num} href={proc.href} className="proc-card" style={{ textDecoration: 'none' }}>
                  <div className="proc-num">{proc.num}</div>
                  <h3>{proc.title}</h3>
                  <p>{proc.desc}</p>
                  <span className="proc-link">Learn More <ArrowIcon /></span>
                </Link>
              ) : (
                <div key={proc.num} className="proc-card">
                  <div className="proc-num">{proc.num}</div>
                  <h3>{proc.title}</h3>
                  <p>{proc.desc}</p>
                  <span className="proc-link">Learn More <ArrowIcon /></span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ═══ APPROACH ═══ */}
      <section className="approach">
        <div className="wrap">
          <div className="approach-grid">
            <div>
              <div className="section-kicker">Our Approach</div>
              <div className="section-title">Built for <em>Results</em></div>
              <p className="section-desc" style={{ marginBottom: 40 }}>
                From consultation to recovery, every step is designed around the male patient experience.
              </p>
              <div className="approach-steps">
                <div className="a-step">
                  <div className="a-step-num">01</div>
                  <div>
                    <h3>Private Consultation</h3>
                    <p>A candid, no-pressure conversation about your goals. Dr. Moein evaluates your anatomy and designs a custom surgical plan. In-person or virtual options available.</p>
                  </div>
                </div>
                <div className="a-step">
                  <div className="a-step-num">02</div>
                  <div>
                    <h3>Precision Surgery</h3>
                    <p>Performed at Beverly Century Surgical Center, a private, accredited facility in Century City, using VASER ultrasound and Renuvion skin tightening. Awake or general anesthesia based on your plan.</p>
                  </div>
                </div>
                <div className="a-step">
                  <div className="a-step-num">03</div>
                  <div>
                    <h3>Guided Recovery</h3>
                    <p>24/7 direct access to Dr. Moein throughout your recovery. All-inclusive care packages with no surprise charges. Most patients return to work within days.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="approach-visual">
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Advanced Technology</h3>
              <div className="tech-grid">
                <div className="tech-item">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: 32, height: 32, color: 'var(--accent)', margin: '0 auto 12px' }}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                  <h4>VASER Lipo</h4>
                  <p>Ultrasound precision fat removal</p>
                </div>
                <div className="tech-item">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: 32, height: 32, color: 'var(--accent)', margin: '0 auto 12px' }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                  <h4>Renuvion J-Plasma</h4>
                  <p>RF + helium skin tightening</p>
                </div>
                <div className="tech-item">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: 32, height: 32, color: 'var(--accent)', margin: '0 auto 12px' }}><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="9" /></svg>
                  <h4>HD Sculpting</h4>
                  <p>Muscle definition protocols</p>
                </div>
                <div className="tech-item">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: 32, height: 32, color: 'var(--accent)', margin: '0 auto 12px' }}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                  <h4>Filler Refinement</h4>
                  <p>AbEtch+ muscle projection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESULTS ═══ */}
      <section className="results" id="results">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="section-kicker" style={{ justifyContent: 'center' }}>
              <span />Before &amp; After
            </div>
            <div className="section-title">Real Patients. <em>Real Results.</em></div>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              See the transformations Dr. Moein achieves for his male patients. Every result shown is an actual patient of our practice.
            </p>
          </div>
          <div className="results-strip">
            {RESULTS.map((r, i) => (
              <div key={i} className="result-card">
                <img
                  src={r.image}
                  alt={`${r.alt} before and after, XYSculptMD patient`}
                  width={r.width}
                  height={r.height}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/gallery" className="btn btn-outline">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ═══ DOCTOR ═══ */}
      <section className="doctor" id="doctor">
        <div className="wrap">
          <div className="section-kicker">Your Surgeon</div>
          <div className="section-title">Meet Dr. Babak <em>Moein</em></div>
          <div className="doctor-grid">
            <div className="doctor-photo">
              <picture>
                <source srcSet="/dr-moein.webp" type="image/webp" />
                <img
                  src="/dr-moein.jpg"
                  alt="Dr. Babak Moein, MD, FACS"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="doctor-content">
              <h3>Dr. Babak Moein, MD, FACS</h3>
              <div className="title">Double Board Certified Surgeon &middot; Dedicated Entirely to Men</div>
              <p className="bio">
                Dr. Babak Moein is <strong>double board certified in General Surgery and Cosmetic Surgery</strong>, a Fellow of the American College of Surgeons, and double-fellowship trained in Laparoscopic Minimally Invasive Surgery and Cosmetic Surgery, with <strong>over 20 years of surgical experience</strong>.
              </p>
              <p className="bio">
                XYSculptMD represents a deliberate commitment: surgery focused entirely on men, from a physician who understands the male body, male psychology, and what men want from surgery. Having performed <strong>over 2,000 procedures on male patients</strong>, from HD VASER etching to gynecomastia correction and complete torso transformations, Dr. Moein personally performs every procedure and provides direct 24/7 access during recovery.
              </p>
              <div className="cred-grid">
                <div className="cred-item">
                  <div className="cred-icon"><ShieldIcon /></div>
                  <span>American Board of General Surgery</span>
                </div>
                <div className="cred-item">
                  <div className="cred-icon"><ShieldIcon /></div>
                  <span>American Board of Cosmetic Surgery</span>
                </div>
                <div className="cred-item">
                  <div className="cred-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c6 3 12 0 12 0v-5" /></svg>
                  </div>
                  <span>Georgetown &amp; UCLA Trained</span>
                </div>
                <div className="cred-item">
                  <div className="cred-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" /></svg>
                  </div>
                  <span>AAAHC-Certified Surgery Center</span>
                </div>
              </div>
              <a href="/about" className="btn btn-primary">Meet Dr. Moein</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DIFFERENTIATOR ═══ */}
      <section className="diff-section">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="section-kicker" style={{ justifyContent: 'center' }}><span />Why XYSculptMD</div>
            <div className="section-title">Not All Surgeons Understand <em>Men</em></div>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Male anatomy requires a fundamentally different approach: thicker skin, different fat distribution, stronger muscle attachments, masculine aesthetic goals. XYSculptMD was built for this.
            </p>
          </div>
          <div className="diff-box">
            <div className="diff-side them">
              <h4>General Practice</h4>
              <div className="diff-row"><MinusCircleIcon /> Same techniques used for men and women</div>
              <div className="diff-row"><MinusCircleIcon /> Standard liposuction without HD sculpting</div>
              <div className="diff-row"><MinusCircleIcon /> Gynecomastia treated as a side procedure</div>
              <div className="diff-row"><MinusCircleIcon /> Single board certification, cosmetic only</div>
              <div className="diff-row"><MinusCircleIcon /> Limited male-specific before and after results</div>
              <div className="diff-row"><MinusCircleIcon /> Waiting rooms designed for female patients</div>
            </div>
            <div className="diff-vs">VS</div>
            <div className="diff-side us">
              <h4>XYSculptMD</h4>
              <div className="diff-row"><CheckIcon /> Every technique and incision plan calibrated for the male body, never adapted from female procedures</div>
              <div className="diff-row"><CheckIcon /> VASER + Renuvion for HD muscle definition: etched abs, chest borders, back sculpting</div>
              <div className="diff-row"><CheckIcon /> Gynecomastia is a core specialty with hundreds of cases</div>
              <div className="diff-row"><CheckIcon /> Double board certified in General and Cosmetic Surgery, FACS</div>
              <div className="diff-row"><CheckIcon /> Male-only results across every procedure</div>
              <div className="diff-row"><CheckIcon /> Private parking, discreet entry, and one-on-one consultations in Century City</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="testimonials">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="section-kicker" style={{ justifyContent: 'center' }}><span />Reviews</div>
            <div className="section-title">What Our <em>Patients</em> Say</div>
          </div>
          <div className="test-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="test-card">
                <div className="test-stars">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="test-quote">{t.quote}</p>
                <div className="test-author">{t.author}</div>
                <div className="test-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSIGHTS ═══ */}
      <section className="insights">
        <div className="wrap">
          <div className="section-kicker">The Male Aesthetics Journal</div>
          <div className="section-title">Latest Insights <em>from Dr. Moein</em></div>
          <div className="insights-grid">
            {INSIGHTS.map(p => (
              <Link key={p.href} href={p.href} className="insight-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="proc-link">Read Article <ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="faq" id="faq">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="section-kicker" style={{ justifyContent: 'center' }}><span />FAQ</div>
            <div className="section-title">Common <em>Questions</em></div>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ═══ RESOURCES ═══ */}
      <section className="resources" id="resources">
        <div className="wrap">
          <div className="section-kicker">Resources</div>
          <div className="section-title">Everything You Need to <em>Prepare</em></div>
          <p className="section-desc">From financing options to patient forms and educational guides, we make it easy to plan your transformation.</p>
          <div className="resources-grid">
            {RESOURCES.map((r, i) => (
              <div key={i} className="resource-card">
                <div className="resource-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ width: 24, height: 24 }}>
                    <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <ul>
                  {r.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="final-cta" id="contact">
        <div className="wrap">
          <div className="cta-card">
            <h2>Ready to Look Like the <em>Man You Feel?</em></h2>
            <p>Schedule a private, no-pressure consultation with Dr. Moein. Discuss your goals, see before-and-after results, and get a custom surgical plan with transparent pricing. Serving Los Angeles, Beverly Hills, Santa Monica, and patients traveling from beyond.</p>
            <a href="/contact" className="btn btn-primary">Book Private Consultation</a>
            <div className="phone">Or call directly: <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
