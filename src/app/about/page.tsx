import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Moein | XYSculptMD – Male Plastic Surgery',
  description: 'Learn about Dr. Babak Moein — board-certified surgeon specializing exclusively in male plastic surgery with 15+ years of experience in Beverly Hills.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>About Dr. Babak <em>Moein</em></h1>
        <p>Board-certified surgeon specializing exclusively in male aesthetics.</p>
      </section>

      <div className="about-content">
        <h2>A Career Dedicated to Male Aesthetics</h2>
        <p>
          Dr. Babak Moein is a board-certified surgeon who has dedicated his career to understanding and enhancing the male physique.
          With over 15 years of surgical experience and thousands of successful procedures, he brings an unmatched level of expertise
          to every consultation and operation.
        </p>
        <p>
          Based in Beverly Hills, California, Dr. Moein founded XYSculptMD with a singular mission: to create a practice built
          entirely around the unique needs of men. From body contouring to facial rejuvenation, every technique is adapted for
          male anatomy — thicker skin, different fat distribution, and the desire for results that look natural, not &quot;done.&quot;
        </p>

        <h2>Education &amp; Credentials</h2>
        <p>
          Dr. Moein completed his surgical training at top-tier medical institutions and holds board certification in cosmetic
          surgery. He is a fellow of the American College of Surgeons and an active member of several professional organizations
          dedicated to advancing surgical techniques for men.
        </p>
        <p>
          He regularly attends national and international conferences to stay at the forefront of surgical innovation, including
          advancements in VASER liposuction, Morpheus8, Renuvion, and minimally invasive body contouring technologies.
        </p>

        <h2>Philosophy</h2>
        <p>
          Dr. Moein believes that men deserve the same level of personalized, expert aesthetic care that has long been available
          to women. His approach is built on three pillars: precision, discretion, and results. Every surgical plan is custom-built
          to the individual — no templates, no one-size-fits-all.
        </p>
        <p>
          &quot;Most men don&apos;t want to look different. They want to look like the best version of themselves.
          That&apos;s the standard I hold myself to with every procedure.&quot;
        </p>

        <h2>The XYSculptMD Difference</h2>
        <p>
          Unlike general cosmetic practices that treat men as an afterthought, XYSculptMD was purpose-built for the male patient.
          From the waiting room to the operating room, every detail is designed with men in mind — efficient appointments,
          straightforward communication, and a no-pressure environment focused on results.
        </p>
      </div>
    </main>
  );
}
