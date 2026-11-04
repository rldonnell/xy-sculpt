import type { Metadata } from 'next';
import ProcedureTemplate, { type ProcedureContent } from '@/components/ProcedureTemplate';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Male Tummy Tuck & Diastasis Recti Repair Los Angeles',
  description: 'Male abdominoplasty and diastasis recti repair in Los Angeles. Flat abdomen, muscle repair, and excess skin removal planned for male anatomy by double board certified surgeon Dr. Babak Moein.',
  alternates: { canonical: '/procedures/male-tummy-tuck' },
};

const c: ProcedureContent = {
  slug: 'male-tummy-tuck',
  name: 'Male Tummy Tuck & Diastasis Recti Repair',
  kicker: 'Male Abdominoplasty',
  h1Lead: 'A Flat, Tight Abdomen.',
  h1Em: 'Built for the Male Frame.',
  sub: 'Excess skin removed, separated muscles repaired, and incisions placed low to stay hidden on a male body.',
  quickAnswer:
    'A male tummy tuck (abdominoplasty) removes excess abdominal skin and fat and **repairs separated abdominal muscles** to create a flat, firm, masculine midsection, something liposuction alone cannot do. At XYSculptMD in Los Angeles it is performed by Dr. Babak Moein, MD, FACS, who is double board certified in General and Cosmetic Surgery. Most men take 2 to 3 weeks off desk work, with final results at 6 to 12 months.',
  facts: [
    { label: 'Surgeon', value: SITE.doctor.withCreds },
    { label: 'Location', value: SITE.address.facility },
    { label: 'Anesthesia', value: 'General' },
    { label: 'Desk work', value: '2 to 3 weeks' },
    { label: 'Full training', value: '8 to 10 weeks' },
    { label: 'Final result', value: '6 to 12 months' },
  ],
  sections: [
    {
      title: 'What is a male tummy tuck?',
      body:
        'A male tummy tuck, or **abdominoplasty**, removes excess skin and fat from the abdomen and **repairs separated abdominal muscles** to create a flat, taut, masculine midsection. It addresses two things liposuction cannot: **loose skin** and **diastasis recti** (muscle separation). It is among the most dramatic transformations in male plastic surgery.',
    },
    {
      title: 'Who is it for?',
      body:
        '- **Loose or excess abdominal skin**, most often after significant or post-bariatric weight loss, or from age-related skin laxity.\n- **Diastasis recti**: separated rectus muscles that create a soft, rounded abdomen no amount of training corrects. When there is no excess skin to remove, this can often be repaired on its own through a shorter incision (see below).\n- **Stubborn lower-abdominal fat**, usually combined with HD VASER liposuction of the flanks and upper abdomen for a complete result.',
    },
    {
      id: 'diastasis-recti',
      title: 'Diastasis recti in men',
      body:
        'Diastasis recti is a **separation of the rectus abdominis muscles along the midline**. The two six-pack muscles are joined by a band of connective tissue called the linea alba. When sustained pressure stretches that band, it thins and widens, and the muscles drift apart. A gap wider than roughly **2 cm** is considered a true diastasis.\n\nNothing is torn, which is exactly why it frustrates men who train. The wall is intact but slack, so the abdomen pushes forward against a midline that no longer holds tension. The result is a **rounded, protruding abdomen in a man who is otherwise lean**, a shape that does not respond to training, dieting, or liposuction.\n\nIt is widely discussed as a postpartum condition, which is why it goes undiagnosed in men for years. In men the drivers are **visceral fat** pushing from behind the muscle wall, **weight cycling**, **heavy lifting with poor bracing**, chronic straining, prior abdominal surgery, and anabolic steroid or growth-hormone use.\n\nThe tell is the shape of the effort: men often respond with more crunches, and the abdomen gets *more* prominent. Lying on your back with knees bent, press your fingers into the midline above the navel and lift your head. A ridge rising along the midline, or fingers sinking into a soft channel, suggests a separation.',
    },
    {
      title: 'Diastasis recti or a hernia?',
      body:
        'This distinction changes whether the problem is cosmetic or medical. **Diastasis** is a stretched but continuous midline. **A hernia** is a genuine hole in the fascia that tissue can push through, and it can become a surgical emergency. From the outside they can look nearly identical, and they often occur together at the navel.\n\nDr. Moein evaluates for both on exam and, when the picture is unclear, with ultrasound or CT. When a hernia is present it is repaired in the same operation. **Abdominal wall repair is core general surgery**, and Dr. Moein is board certified in it. That is not a marketing line; it is the reason a man with a midline bulge should be seen by someone qualified to tell the cosmetic problem from the medical one.',
    },
    {
      title: 'How the muscle repair works, and when it becomes a tummy tuck',
      body:
        'The repair is called **plication**: the stretched linea alba is folded and sutured, usually in two layers, drawing the muscles back to the midline. The abdomen flattens immediately and the **waist narrows**.\n\nPlication does not remove skin. Men with good skin tone can often have the repair through a **shorter, lower incision without skin excision**. If there is loose, hanging skin, the repair is done as part of a full tummy tuck, with the muscle plication and skin removal performed together through the same low incision. Which approach fits you is settled at consultation, not assumed in advance.\n\nTwo honest limits: **visceral fat cannot be surgically removed**, so a man with a large visceral component gets a firmer, flatter wall but not a flat profile until that fat comes down. And significant weight regain or returning to heavy lifting too early puts the same pressure back on the midline.',
    },
    {
      title: 'Why XYSculptMD for a male tummy tuck',
      body:
        'Dr. Babak Moein, MD, FACS is **double board certified in General Surgery and Cosmetic Surgery** and a Fellow of the American College of Surgeons. For abdominal wall work that combination is the point: the general-surgery side covers hernia and fascial repair, and the cosmetic side covers what the abdomen looks like afterward. The goal is a **flat, hard, masculine midsection with a defined waist**, and the scar is placed low within the natural hairline. Post-weight-loss patients can coordinate the weight-loss side with Dr. Moein’s bariatric practice, Healthy Life Bariatrics.',
    },
  ],
  cards: {
    kicker: 'Types',
    title: 'Matching the Technique to Your Anatomy',
    intro: 'The right approach depends on how much excess skin you have and whether the muscles have separated.',
    items: [
      { label: 'Diastasis Repair Only', sub: 'Good skin tone', text: 'Muscle plication through a shorter, lower incision for men whose problem is muscular rather than loose skin.' },
      { label: 'Mini', sub: 'Lower abdomen only', text: 'For excess skin and laxity limited to below the navel, with a shorter scar and faster recovery.' },
      { label: 'Full / Standard', sub: 'Whole abdomen + muscle repair', text: 'Removes excess skin across the abdomen and tightens the rectus muscles. The most common male abdominoplasty.' },
      { label: 'Extended', sub: 'Abdomen + flanks', text: 'Extends around the flanks for men with more circumferential skin, often after larger weight loss.' },
      { label: 'Fleur-de-lis', sub: 'Post-massive weight loss', text: 'Adds a vertical incision to remove horizontal excess skin after major or bariatric weight loss.' },
      { label: 'Diastasis + Hernia', sub: 'Umbilical or ventral', text: 'A true fascial defect repaired in the same operation as the plication. This is where general-surgery training matters most.' },
    ],
  },
  diff: [
    { them: 'Female abdominoplasty technique adapted for men', us: 'Incision and repair planned around male fat and skin patterns from the start' },
    { them: 'Diastasis repair bundled into a full tuck by default', us: 'Shorter-incision repair when there is no skin to remove' },
    { them: 'Hernia evaluation left to someone else', us: 'Board certified general surgeon evaluates and repairs hernias in the same operation' },
    { them: 'Treated as a standalone procedure', us: 'Combined with etching or Lipo 360 for definition, not just a flatter contour' },
  ],
  steps: {
    intro: 'A male tummy tuck is performed under general anesthesia at an accredited surgical center. It is the most involved of the body-contouring procedures.',
    items: [
      { title: 'Consultation & planning', text: 'Dr. Moein assesses skin excess, muscle separation, hernia, and fat, then selects the technique and scar plan.' },
      { title: 'Anesthesia', text: 'Performed under general anesthesia for comfort and safety.' },
      { title: 'Skin & fat removal', text: 'Excess lower-abdominal skin and fat are removed through a low incision placed within the natural hairline.' },
      { title: 'Muscle repair (plication)', text: 'Separated rectus muscles are sutured back together, narrowing the waist and flattening the abdomen. Any hernia is repaired at the same time.' },
      { title: 'Liposuction (often combined)', text: 'HD VASER liposuction of the flanks and upper abdomen refines the lateral contour in the same session.' },
      { title: 'Closure & recovery', text: 'The incision is closed low and hidden, and compression plus a staged recovery plan support healing.' },
    ],
  },
  candidacy: [
    'Men with loose, excess abdominal skin after major weight loss',
    'Post-bariatric patients completing their body contouring',
    'Men with diastasis recti: a rounded abdomen that persists despite training and low body fat',
    'Those frustrated by skin folds that won’t respond to exercise',
    'Men seeking a combined abdomen and flank correction',
  ],
  timeline: [
    { when: 'Days 1 to 3', text: 'Rest with limited bending. Compression garment worn; walk bent slightly forward at first, straightening over several days.' },
    { when: 'Days 10 to 14', text: 'Driving resumes once off pain medication and able to react safely.' },
    { when: 'Weeks 2 to 3', text: 'Most men return to desk work (longer for physically demanding jobs).' },
    { when: 'Week 6', text: 'Compression garment typically worn full-time through six weeks; light activity increases.' },
    { when: 'Weeks 8 to 10', text: 'Gradual return to core training and strenuous activity as cleared.' },
    { when: '6 to 12 months', text: 'Final result and complete scar maturation.' },
  ],
  cost: {
    title: 'What Does a Male Tummy Tuck Cost?',
    body: `A male tummy tuck at XYSculptMD is **quoted per patient and all-inclusive**. The price depends on the technique, whether muscle or hernia repair is needed, and whether liposuction is combined. Your exact quote is set at consultation.\n\nPricing includes the surgeon’s fee, facility, anesthesia, compression garments, and follow-up care. A diastasis-only repair or mini tummy tuck costs less than a full or extended abdominoplasty. Financing is available through ${SITE.financing}.`,
    drivers: [
      { title: 'Technique', text: 'Diastasis-only and mini are the most straightforward; full, extended, and fleur-de-lis are progressively more involved.' },
      { title: 'Muscle & hernia repair', text: 'Repairing separated muscles, and any hernia, adds to the procedure.' },
      { title: 'Combined liposuction', text: 'Adding HD VASER liposuction to the flanks and upper abdomen for a complete contour.' },
      { title: 'Extent of skin removal', text: 'Post-massive-weight-loss cases needing more skin excision are more complex.' },
    ],
  },
  faq: [
    { question: 'Who needs a male tummy tuck instead of liposuction?', answer: 'Liposuction removes fat but cannot tighten loose skin or repair separated muscles. A tummy tuck is for men with excess or loose abdominal skin, often after major weight loss or aging, or with diastasis recti. Many men combine both.' },
    { question: 'What is diastasis recti, and can it be fixed without a full tummy tuck?', answer: 'Diastasis recti is a separation of the rectus muscles down the midline, creating a bulge that exercise cannot correct. It is repaired by suturing the muscles back together (plication). If you have good skin tone and no excess skin, this can often be done through a shorter, lower incision without a full tummy tuck.' },
    { question: 'Is my bulge diastasis recti or a hernia?', answer: 'They can look identical and often occur together. Diastasis is a stretched but intact midline; a hernia is a true hole in the fascia. Dr. Moein, a board certified general surgeon, evaluates for both on exam and with imaging when needed, and repairs a hernia in the same operation.' },
    { question: 'Where is the scar placed on men?', answer: 'Dr. Moein places the incision low, within the natural pubic hairline, where it is easily hidden by underwear or swimwear. Scar placement is planned individually to keep it as concealed as possible.' },
    { question: 'How long is recovery?', answer: 'Recovery is the most involved of the body-contouring procedures. Most men take 2 to 3 weeks off desk work (longer for physical jobs), avoid strenuous activity and core training for 8 to 10 weeks, and see the final result with mature scars at 6 to 12 months.' },
    { question: 'Can I combine a tummy tuck with liposuction or ab etching?', answer: 'Yes. The most comprehensive male abdominal transformation combines abdominoplasty with HD VASER liposuction of the flanks and upper abdomen in one session: a flat lower abdomen plus a defined, tapered waistline. Etching can be added for visible muscle definition.' },
    { question: 'Is a male tummy tuck good after bariatric or major weight loss?', answer: 'Yes. Men after major weight loss often have significant excess skin that only skin removal can address. Depending on the pattern, a full, extended, or fleur-de-lis tummy tuck restores a flat, firm abdomen. Dr. Moein’s bariatric practice, Healthy Life Bariatrics, coordinates on the weight-loss side.' },
  ],
  reviewed: 'November 2026',
  related: [
    { label: 'Male Tummy Tuck Before & After', href: '/blog/male-tummy-tuck-before-and-after' },
    { label: 'Abdominal Etching', href: '/procedures/abdominal-etching' },
  ],
  ctaLine: 'Discuss a male tummy tuck or diastasis repair with Dr. Moein, a board certified general and cosmetic surgeon.',
};

export default function MaleTummyTuckPage() {
  return <ProcedureTemplate c={c} />;
}
