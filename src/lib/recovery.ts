/**
 * Single source of truth for recovery timelines.
 * Used by each procedure page's "Recovery timeline" list and by the
 * homepage recovery timeline (src/components/RecoveryTimeline.tsx).
 * `from` and `to` are days after surgery and only drive the homepage scale;
 * `when` is the label shown to visitors. Keep the two in agreement.
 */

export interface RecoveryStage {
  when: string;
  text: string;
  from: number;
  to: number;
}

export interface RecoveryPlan {
  id: string;
  name: string;
  href: string;
  timeline: RecoveryStage[];
}

export const RECOVERY = {
  etching: {
    id: 'etching',
    name: 'Abdominal Etching',
    href: '/procedures/abdominal-etching',
    timeline: [
      { when: 'Days 1 to 3', from: 1, to: 3, text: 'Rest with the compression garment and foam in place. Soreness and drainage are expected and normal.' },
      { when: 'Days 5 to 7', from: 5, to: 7, text: 'Most men return to desk work. Compression is worn 24/7.' },
      { when: 'Weeks 2 to 3', from: 14, to: 21, text: 'Light cardio and daily activity resume as cleared; swelling begins to settle.' },
      { when: 'Weeks 4 to 6', from: 28, to: 42, text: 'Compression steps down, with a gradual return to core and full training around six weeks.' },
      { when: '3 to 6 months', from: 90, to: 180, text: 'Final definition emerges as deep swelling fully resolves and the etched lines sharpen.' },
    ],
  },
  gynecomastia: {
    id: 'gynecomastia',
    name: 'Gynecomastia Surgery',
    href: '/procedures/gynecomastia',
    timeline: [
      { when: 'Days 1 to 3', from: 1, to: 3, text: 'Rest at home. Compression vest worn 24/7. Mild soreness managed with medication; light walking encouraged.' },
      { when: 'Days 5 to 7', from: 5, to: 7, text: 'Most men return to desk work and driving (once off prescription pain medication).' },
      { when: 'Weeks 2 to 4', from: 14, to: 28, text: 'Light activity resumes. Swelling steadily subsides and the chest contour begins to settle.' },
      { when: 'Weeks 4 to 6', from: 28, to: 42, text: 'Gradual return to chest and upper-body workouts. Compression vest typically worn through week 6.' },
      { when: '3 to 6 months', from: 90, to: 180, text: 'Final contour and full skin retraction; incision lines continue to fade.' },
    ],
  },
  tummyTuck: {
    id: 'tummy-tuck',
    name: 'Male Tummy Tuck',
    href: '/procedures/male-tummy-tuck',
    timeline: [
      { when: 'Days 1 to 3', from: 1, to: 3, text: 'Rest with limited bending. Compression garment worn; walk bent slightly forward at first, straightening over several days.' },
      { when: 'Days 10 to 14', from: 10, to: 14, text: 'Driving resumes once off pain medication and able to react safely.' },
      { when: 'Weeks 2 to 3', from: 14, to: 21, text: 'Most men return to desk work (longer for physically demanding jobs).' },
      { when: 'Week 6', from: 42, to: 42, text: 'Compression garment typically worn full-time through six weeks; light activity increases.' },
      { when: 'Weeks 8 to 10', from: 56, to: 70, text: 'Gradual return to core training and strenuous activity as cleared.' },
      { when: '6 to 12 months', from: 180, to: 365, text: 'Final result and complete scar maturation.' },
    ],
  },
} satisfies Record<string, RecoveryPlan>;
