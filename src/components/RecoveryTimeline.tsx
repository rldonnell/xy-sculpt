'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RECOVERY, type RecoveryPlan } from '@/lib/recovery';

/*
 * Homepage recovery timeline. Pick a procedure, drag along a log-scale
 * year-one axis, and see where a typical patient is at that point.
 * Data comes from src/lib/recovery.ts, the same source the procedure
 * pages use, so the two can't drift apart.
 */

const PLANS: RecoveryPlan[] = [RECOVERY.etching, RECOVERY.gynecomastia, RECOVERY.tummyTuck];
const MAX_DAY = 365;
const STEPS = 1000;

// Log scale: day 1 sits at 0, day 365 at 1, so the busy first weeks get room.
const pos = (day: number) => Math.log(Math.max(day, 1)) / Math.log(MAX_DAY);
const dayAt = (step: number) => Math.max(1, Math.round(Math.exp((step / STEPS) * Math.log(MAX_DAY))));
const stepAt = (day: number) => Math.round(pos(day) * STEPS);

const TICKS: { day: number; label: string; minor?: boolean }[] = [
  { day: 1, label: 'Day 1' },
  { day: 7, label: 'Week 1' },
  { day: 14, label: 'Week 2', minor: true },
  { day: 30, label: 'Month 1', minor: true },
  { day: 90, label: 'Month 3' },
  { day: 180, label: 'Month 6', minor: true },
  { day: 365, label: 'Year 1' },
];

function dayLabel(day: number) {
  if (day < 7) return `Day ${day}`;
  if (day < 60) return `Week ${Math.ceil(day / 7)}`;
  if (day < 335) return `Month ${Math.round(day / 30.4)}`;
  return 'One year';
}

const pct = (n: number) => `${(n * 100).toFixed(3)}%`;

export default function RecoveryTimeline() {
  const [planIndex, setPlanIndex] = useState(0);
  const [step, setStep] = useState(stepAt(7));

  const plan = PLANS[planIndex];
  const day = dayAt(step);
  // The stage in effect: the latest one that has started by this day.
  const stageIndex = plan.timeline.reduce((acc, s, i) => (s.from <= day ? i : acc), 0);
  const stage = plan.timeline[stageIndex];
  const inStage = day <= stage.to;

  return (
    <div className="rt">
      <div className="rt-tabs" role="group" aria-label="Choose a procedure">
        {PLANS.map((p, i) => (
          <button key={p.id} type="button" aria-pressed={i === planIndex} onClick={() => setPlanIndex(i)}>
            {p.name}
          </button>
        ))}
      </div>

      <div className="rt-track-wrap">
        <div className="rt-track">
          <div className="rt-rail" />
          <div className="rt-progress" style={{ width: pct(step / STEPS) }} />
          {plan.timeline.map((s, i) => {
            const left = pos(s.from);
            const width = Math.max(pos(s.to) - left, 0);
            return (
              <div
                key={`${plan.id}-${s.when}`}
                className={`rt-band${i === stageIndex ? ' is-active' : ''}${i <= stageIndex ? ' is-past' : ''}`}
                style={{ left: pct(left), width: width ? pct(width) : undefined }}
              >
                <span className="rt-band-dot" />
              </div>
            );
          })}
          {TICKS.map(t => (
            <div key={t.day} className={`rt-tick${t.minor ? ' is-minor' : ''}`} style={{ left: pct(pos(t.day)) }}>
              <span>{t.label}</span>
            </div>
          ))}
          <input
            className="rt-range"
            type="range"
            min={0}
            max={STEPS}
            value={step}
            onChange={e => setStep(Number(e.target.value))}
            aria-label="Time after surgery"
            aria-valuetext={`${dayLabel(day)}: ${stage.when}`}
          />
        </div>
      </div>
      <p className="rt-hint">Drag the marker along the first year</p>

      <div className="rt-card" key={`${plan.id}-${stageIndex}`} aria-live="polite">
        <div className="rt-card-now">
          <span className="rt-card-day">{dayLabel(day)}</span>
          <span className="rt-card-proc">after {plan.name.toLowerCase()}</span>
        </div>
        <div className="rt-card-body">
          <div className="rt-card-when">{inStage ? stage.when : `After ${stage.when.toLowerCase()}`}</div>
          <p>{stage.text}</p>
          <Link href={plan.href} className="proc-link">
            Full {plan.name.toLowerCase()} recovery plan
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
      <p className="rt-note">Typical timelines for healthy patients. Your own plan, and when you are cleared for each step, is set by Dr. Moein at your follow-up visits.</p>
    </div>
  );
}
