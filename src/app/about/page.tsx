import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Moein | XYSculptMD – Male Plastic Surgery',
  description: 'Dr. Babak Moein, MD, FACS: double board certified in General and Cosmetic Surgery, 20+ years of experience, over 2,000 male procedures. Century City, Los Angeles.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <h1>About Dr. Babak <em>Moein</em></h1>
        <p>Double board certified surgeon, dedicated entirely to men.</p>
      </section>

      <div className="about-content">
        <h2>A Career Dedicated to Male Aesthetics</h2>
        <p>
          Dr. Babak Moein, MD, FACS is double board certified in General Surgery and Cosmetic Surgery, a Fellow of the American
          College of Surgeons, and double-fellowship trained in Laparoscopic Minimally Invasive Surgery and Cosmetic Surgery, with
          over 20 years of surgical experience. Having performed over 2,000 procedures on male patients, he brings deep male-specific
          surgical expertise to every consultation and operation.
        </p>
        <p>
          Based in Century City, Los Angeles, Dr. Moein built XYSculptMD as a deliberate commitment: surgery focused entirely on
          men, from a physician who understands the male body, male psychology, and what men want from surgery. From abdominal
          etching to gynecomastia correction, every technique is adapted for male anatomy: thicker skin, different fat distribution,
          and the desire for results that look natural, not &quot;done.&quot;
        </p>

        <h2>Education &amp; Credentials</h2>
        <p>
          Dr. Moein is certified by both the American Board of General Surgery and the American Board of Cosmetic Surgery, and is a
          Fellow of the American College of Surgeons. His general-surgery training matters most in abdominal wall work such as
          diastasis recti and hernia repair; his cosmetic training shapes what the result looks like afterward.
        </p>
        <p>
          He regularly attends national and international conferences to stay at the forefront of surgical innovation, including
          advancements in VASER liposuction, Renuvion, and minimally invasive body contouring technologies.
        </p>

        <h2>Philosophy</h2>
        <p>
          Dr. Moein believes that men deserve the same level of personalized, expert aesthetic care that has long been available
          to women. His approach is built on three pillars: precision, discretion, and results. Every surgical plan is custom-built
          to the individual. No templates, no one-size-fits-all.
        </p>
        <p>
          &quot;Most men don&apos;t want to look different. They want to look like the best version of themselves.
          That&apos;s the standard I hold myself to with every procedure.&quot;
        </p>

        <h2>The XYSculptMD Difference</h2>
        <p>
          Unlike general cosmetic practices that treat men as an afterthought, XYSculptMD was purpose-built for the male patient.
          From the waiting room to the operating room, every detail is designed with men in mind: efficient appointments,
          straightforward communication, and a no-pressure environment focused on results.
        </p>
      </div>
    </main>
  );
}
