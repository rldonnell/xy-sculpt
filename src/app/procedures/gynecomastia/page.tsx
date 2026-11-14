import type { Metadata } from 'next';
import ProcedureTemplate, { type ProcedureContent } from '@/components/ProcedureTemplate';
import { SITE } from '@/lib/site';
import { RECOVERY } from '@/lib/recovery';

export const metadata: Metadata = {
  title: 'Gynecomastia Surgery Los Angeles | Male Breast Reduction',
  description: 'Gynecomastia surgery in Los Angeles for all grades: gland excision plus VASER liposuction by double board certified surgeon Dr. Babak Moein. Cost, grades, recovery.',
  alternates: { canonical: '/procedures/gynecomastia' },
};

const c: ProcedureContent = {
  slug: 'gynecomastia',
  name: 'Gynecomastia Surgery',
  kicker: 'Male Breast Reduction · All Grades',
  h1Lead: 'Gynecomastia Surgery:',
  h1Em: 'A Flat, Masculine Chest.',
  sub: 'Gland excision plus VASER liposuction, tailored to your grade, with incisions placed to heal discreetly.',
  quickAnswer:
    'Gynecomastia surgery removes excess **glandular tissue and fat** from the male chest to create a flatter, firmer, more masculine contour. At XYSculptMD in Los Angeles it is performed by Dr. Babak Moein, MD, FACS, using gland excision plus VASER liposuction. Most men return to desk work in 5 to 7 days, with final results at 3 to 6 months.',
  facts: [
    { label: 'Surgeon', value: SITE.doctor.withCreds },
    { label: 'Location', value: SITE.address.facility },
    { label: 'Anesthesia', value: 'General or MAC' },
    { label: 'Surgery time', value: '1 to 2 hours' },
    { label: 'Desk work', value: '5 to 7 days' },
    { label: 'Starting at', value: '$4,500 all-inclusive' },
  ],
  sections: [
    {
      title: 'What is gynecomastia?',
      body:
        'Gynecomastia is the enlargement of male breast tissue, and an estimated **1 in 3 men** experience it at some point. It is caused by excess **glandular tissue**, fat, or both, often driven by hormonal shifts, certain medications, or lifestyle factors. It is common and benign, but it rarely responds to diet or exercise once true glandular tissue is present, and it can significantly affect confidence and comfort.\n\n**Gynecomastia surgery**, also called male breast reduction, removes the excess gland and fat to restore a flat, firm, masculine chest.',
    },
    {
      title: 'Fat or gland? Why the difference matters',
      body:
        '- **True gynecomastia** is firm glandular tissue beneath the nipple. It does **not** shrink with weight loss and must be surgically removed.\n- **Pseudogynecomastia** is soft chest fat from weight gain. It may improve with fat reduction, but often coexists with glandular tissue.\n\nThey can look identical from the outside but are treated very differently. A chest that still looks puffy despite training is usually true gynecomastia.',
    },
    {
      title: 'Why men choose surgery',
      body:
        'For most men with glandular gynecomastia, surgery is the only lasting solution. The goals are simple and life-changing: **a flatter, firmer chest**, confidence without a shirt at the beach or gym, and clothing that fits the way it should. Because glandular tissue does not return, the result is permanent with a stable weight.',
    },
    {
      title: 'Why XYSculptMD for gynecomastia in Los Angeles',
      body:
        'Dr. Babak Moein, MD, FACS is **double board certified in General Surgery and Cosmetic Surgery**, a Fellow of the American College of Surgeons, and has performed hundreds of gynecomastia procedures across all grades, from a mild glandular button to severe cases requiring skin work. Gynecomastia is such a core focus that he runs a dedicated specialist site, **[GynecomastiaLA.com](https://gynecomastiala.com)**, with grade-by-grade galleries and in-depth guides.',
    },
  ],
  cards: {
    kicker: 'Grades',
    title: 'The Grades of Gynecomastia',
    intro: 'The grade determines the technique, and it is the first thing Dr. Moein assesses.',
    items: [
      { label: 'Grade I', sub: 'Mild', text: 'A small amount of glandular tissue around the areola, with no excess skin. Often treated with direct gland excision alone.' },
      { label: 'Grade II', sub: 'Moderate', text: 'More diffuse enlargement extending beyond the areola, with little to no skin excess. Usually gland excision plus VASER liposuction.' },
      { label: 'Grade III', sub: 'Moderate to severe', text: 'Significant enlargement with mild skin laxity and early sagging. Gland excision, liposuction, and Renuvion skin tightening as needed.' },
      { label: 'Grade IV', sub: 'Severe', text: 'Marked enlargement with substantial excess skin. May require skin excision and, in the most severe cases, nipple repositioning.' },
    ],
  },
  diff: [
    { them: 'Liposuction-only approach that leaves gland behind', us: 'Gland excision plus VASER for a truly flat chest' },
    { them: 'One technique for every chest', us: 'Technique tailored to your grade, I through IV' },
    { them: 'Gynecomastia treated as a side procedure', us: 'A core specialty with hundreds of cases' },
  ],
  steps: {
    intro: 'Gynecomastia surgery is an outpatient procedure, typically 1 to 2 hours depending on grade.',
    items: [
      { title: 'Evaluation & planning', text: 'Dr. Moein examines the chest to distinguish glandular tissue from fat, assigns a grade, and reviews any hormonal or medication factors.' },
      { title: 'Anesthesia', text: 'Performed under general anesthesia or monitored anesthesia care at an accredited surgical center.' },
      { title: 'VASER liposuction', text: 'Ultrasonic VASER liposuction removes the fatty component and refines the chest and flank contour.' },
      { title: 'Gland excision', text: 'Firm glandular tissue that liposuction cannot remove is excised through a small incision at the areolar border.' },
      { title: 'Skin tightening (if needed)', text: 'For higher grades, Renuvion or skin excision addresses laxity so the chest re-drapes flat.' },
      { title: 'Compression & recovery', text: 'A compression vest is applied to control swelling and support the new contour during healing.' },
    ],
  },
  candidacy: [
    'Men with puffy, enlarged, or asymmetrical nipples or chest',
    'Men with glandular gynecomastia, grades I through IV',
    'Men who avoid removing their shirt at the beach or gym',
    'Those with excess chest fat unresponsive to exercise',
    'Men with skin laxity needing periareolar or extended correction',
  ],
  timeline: RECOVERY.gynecomastia.timeline,
  cost: {
    title: 'What Does Gynecomastia Surgery Cost?',
    body: `Gynecomastia surgery at XYSculptMD **starts at approximately $4,500** and ranges to **$12,500+, all-inclusive**, depending on grade and technique. Pricing includes the surgeon’s fee, facility, anesthesia, compression garments, and one year of follow-up care. Your exact quote is set at consultation after your grade is assessed. Financing is available through ${SITE.financing}.`,
    drivers: [
      { title: 'Grade & technique', text: 'Grade I to II is the most straightforward; Grade III to IV with skin work is more complex.' },
      { title: 'VASER component', text: 'Cases needing VASER for a fatty component in addition to gland excision cost more but produce a better contour.' },
      { title: 'Skin tightening', text: 'Renuvion or skin excision for laxity at higher grades adds to the procedure.' },
    ],
  },
  faq: [
    { question: 'Is it fat or gynecomastia?', answer: 'True gynecomastia is firm glandular tissue that does not shrink with diet or exercise and usually requires surgical removal. Pseudogynecomastia is soft chest fat, which can improve with fat reduction alone. Dr. Moein distinguishes the two with a clinical exam, and the difference changes the treatment entirely.' },
    { question: 'Is gynecomastia surgery painful?', answer: 'Most patients describe discomfort rather than pain. Both general anesthesia and monitored anesthesia care are available, and pain is managed with medication. Most men return to light activity within a few days.' },
    { question: 'Is gynecomastia surgery covered by insurance?', answer: 'Sometimes, but usually not. Insurers may cover it when it is medically necessary, with documented pain, skin breakdown, or confirmed glandular tissue, but cosmetic and pseudogynecomastia cases are typically not covered. Our team can help with medical-necessity documentation.' },
    { question: 'How much does gynecomastia surgery cost in Los Angeles?', answer: `At XYSculptMD, gynecomastia surgery starts around $4,500 and ranges to $12,500+ all-inclusive, depending on grade and whether VASER liposuction and skin tightening are needed. Financing through ${SITE.financing} is available.` },
    { question: 'Will gynecomastia come back after surgery?', answer: 'Recurrence is rare once glandular tissue is removed, because gland does not regenerate. It can return if driven by ongoing factors: significant weight gain, certain medications, anabolic steroids, or a new hormonal imbalance.' },
    { question: 'Will there be visible scars?', answer: 'Incisions are small and placed at the natural border of the areola, where they heal discreetly. Higher grades that require skin removal involve additional incisions, which Dr. Moein plans to stay as hidden as possible.' },
    { question: 'When can I work out again?', answer: 'Light activity and walking start immediately. Most men resume general exercise at 2 to 3 weeks and chest training gradually from 4 to 6 weeks, once cleared at follow-up.' },
    { question: 'Can I combine gynecomastia surgery with ab etching?', answer: 'Yes. Gynecomastia correction with abdominal etching is one of the most common combinations, giving a flat chest and a defined core in a single session and recovery.' },
  ],
  reviewed: 'November 2026',
  related: [
    { label: 'Gynecomastia Surgery Cost in LA', href: '/blog/gynecomastia-surgery-cost-los-angeles' },
    { label: 'Is Gynecomastia Surgery Covered by Insurance?', href: '/blog/is-gynecomastia-surgery-covered-by-insurance' },
    { label: 'GynecomastiaLA.com', href: 'https://gynecomastiala.com' },
  ],
  ctaLine: 'Find out your grade and the right technique in a private consultation with Dr. Moein.',
};

export default function GynecomastiaPage() {
  return <ProcedureTemplate c={c} />;
}
