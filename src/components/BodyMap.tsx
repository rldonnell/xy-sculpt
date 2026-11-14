'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/*
 * Body map procedure picker for the homepage "Male Makeover" section.
 * A blueprint-style line drawing of a classical male torso (front and back).
 * Hover or tap an area to see the procedure that sculpts it. The list beside
 * the drawing carries the same choices for keyboard and screen-reader users,
 * so the SVG itself is decorative (aria-hidden).
 *
 * Facts shown per procedure come from the procedure pages and homepage FAQ.
 * If prices or recovery times change there, change them here too.
 */

type View = 'front' | 'back';
type RegionId = 'chest' | 'abs' | 'lower' | 'flanks' | 'glutes';

interface Region {
  id: RegionId;
  num: string;
  area: string;
  view: View | 'both';
  title: string;
  desc: string;
  facts: string[];
  href: string;
}

const REGIONS: Region[] = [
  {
    id: 'chest', num: '01', area: 'Chest', view: 'front',
    title: 'Gynecomastia Surgery',
    desc: 'Eliminate excess chest tissue and sculpt a flat, masculine chest contour. Dr. Moein’s technique combines gland excision with VASER precision for natural-looking results.',
    facts: ['From about $4,500', 'Desk work in 5 to 7 days'],
    href: '/procedures/gynecomastia',
  },
  {
    id: 'abs', num: '02', area: 'Abdomen', view: 'front',
    title: 'Abdominal Etching',
    desc: 'HD VASER liposuction used as sculpture to reveal the six-pack, obliques, and serratus, then refined with targeted filler for definition etching alone can’t reach.',
    facts: ['From $6,500', 'Desk work in 5 to 7 days'],
    href: '/procedures/abdominal-etching',
  },
  {
    id: 'lower', num: '03', area: 'Lower abdomen', view: 'front',
    title: 'Male Tummy Tuck',
    desc: 'Remove excess skin and tighten the abdominal wall for a firmer, flatter midsection. Customized for the male frame with incisions designed for minimal visibility.',
    facts: ['2 to 3 weeks off desk work'],
    href: '/procedures/male-tummy-tuck',
  },
  {
    id: 'flanks', num: '04', area: 'Flanks & back', view: 'both',
    title: 'Male Liposuction 360',
    desc: 'Full-circumference fat removal targeting the abdomen, flanks, back, and chest. Creates a proportional, V-shaped torso silhouette.',
    facts: ['Awake or general anesthesia'],
    href: '/procedures/abdominal-etching#etching-vs-liposuction',
  },
  {
    id: 'glutes', num: '05', area: 'Glutes', view: 'back',
    title: 'Male Butt Lift',
    desc: 'Fat-transfer sculpting calibrated to male proportions: an athletic, upward contour rather than a curvier female shape. Often paired with lipo 360 or ab etching.',
    facts: ['Often paired with Lipo 360'],
    href: '/procedures/male-butt-lift',
  },
];

/* ── Drawing ──
 * viewBox 0 0 400 500, centre line x = 200. Left-side paths are written once
 * and mirrored. Paths use only absolute commands with "x y" pairs, so
 * mirroring is a matter of flipping every x. */
const mirror = (d: string) =>
  d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, x, y) => `${400 - Number(x)} ${y}`);
const both = (d: string) => [d, mirror(d)];

const SIDE = 'M182 48 L178 80 C152 92 114 96 94 110 C76 124 72 150 78 176 C84 194 94 204 104 214 C108 258 114 298 124 334 C129 352 131 370 128 386 C125 412 130 442 144 472';

const FRONT_LINES = [
  ...both(SIDE),
  'M182 48 C192 53 208 53 218 48',                     // neck cut
  'M144 472 C172 486 228 486 256 472',
  ...both('M184 54 C190 66 194 76 198 86'),            // neck muscle
  ...both('M182 88 C160 94 130 96 104 106'),           // collarbone
  ...both('M94 112 C108 128 114 150 110 178'),         // deltoid edge
  ...both('M120 138 C112 166 118 192 134 202 C154 212 180 208 200 198'), // pec
  ...both('M118 214 L132 222'),                        // serratus
  ...both('M121 230 L136 238'),
  ...both('M125 246 L140 252'),
  ...both('M164 212 C158 260 158 330 166 410'),        // rectus edge
  ...both('M164 246 C178 250 190 250 200 248'),        // tendinous lines
  ...both('M161 284 C176 288 190 288 200 286'),
  ...both('M161 322 C176 326 190 326 200 324'),
  ...both('M128 252 C138 300 146 340 156 378'),        // external oblique
  ...both('M140 372 C156 404 178 436 198 458'),        // V-line
  'M200 200 L200 440',                                 // linea alba
  'M197 352 C197 347 203 347 203 352 C203 357 197 357 197 352', // navel
];

const BACK_LINES = [
  ...both(SIDE),
  'M182 48 C192 53 208 53 218 48',
  'M144 474 C172 492 228 492 256 474',
  ...both('M182 56 C184 82 158 96 104 108'),           // upper trapezius
  ...both('M200 92 L150 122 L200 244'),                // trapezius diamond
  ...both('M150 128 C138 150 138 186 154 202 C166 192 172 160 170 134 C164 128 156 126 150 128'), // shoulder blade
  ...both('M104 214 C130 262 170 300 200 318'),        // lat edge
  ...both('M186 300 C182 340 184 368 190 394'),        // spinal erectors
  ...both('M200 404 C196 440 188 466 170 480'),        // glute inner edge
  ...both('M146 472 C156 482 168 484 180 480'),        // glute crease
  ...both('M184 392 C184 389 188 389 188 392 C188 395 184 395 184 392'), // dimple
  'M200 62 L200 404',                                  // spine
];

const FLANK_LEFT = 'M104 214 C108 258 114 298 124 334 C129 352 131 370 128 386 L150 380 C152 340 156 280 160 220 C140 214 120 212 104 214 Z';

const FRONT_REGIONS: { id: RegionId; d: string; marker: [number, number] }[] = [
  { id: 'chest', d: 'M118 134 C150 122 182 124 200 128 C218 124 250 122 282 134 C290 162 286 190 266 202 C246 212 220 208 200 198 C180 208 154 212 134 202 C114 190 110 162 118 134 Z', marker: [156, 168] },
  { id: 'abs', d: 'M164 212 C180 206 220 206 236 212 C242 260 242 310 238 344 L162 344 C158 310 158 260 164 212 Z', marker: [181, 266] },
  { id: 'lower', d: 'M162 344 L238 344 C236 380 230 404 222 424 C214 442 206 452 200 456 C194 452 186 442 178 424 C170 404 164 380 162 344 Z', marker: [200, 398] },
  { id: 'flanks', d: `${FLANK_LEFT} ${mirror(FLANK_LEFT)}`, marker: [136, 300] },
];

const BACK_REGIONS: typeof FRONT_REGIONS = [
  { id: 'flanks', d: `${FLANK_LEFT} ${mirror(FLANK_LEFT)} M160 300 C180 296 220 296 240 300 L238 384 C220 390 180 390 162 384 Z`, marker: [200, 344] },
  { id: 'glutes', d: 'M128 388 C160 382 186 388 200 400 C214 388 240 382 272 388 C276 430 268 466 240 478 C222 484 208 478 200 468 C192 478 178 484 160 478 C132 466 124 430 128 388 Z', marker: [238, 432] },
];

function Figure({
  view, lines, regions, active, onPick, label,
}: {
  view: View;
  lines: string[];
  regions: typeof FRONT_REGIONS;
  active: RegionId;
  onPick: (id: RegionId) => void;
  label: string;
}) {
  const numOf = (id: RegionId) => REGIONS.find(r => r.id === id)!.num;
  return (
    <svg className={`bm-svg bm-face bm-${view}`} viewBox="0 0 400 500" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={`bm-grid-${view}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0 L0 0 0 20" fill="none" className="bm-gridline" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill={`url(#bm-grid-${view})`} />
      <line x1="200" y1="14" x2="200" y2="492" className="bm-axis" />
      <text x="16" y="24" className="bm-caption">{label}</text>
      <text x="384" y="24" className="bm-caption" textAnchor="end">XY / {view === 'front' ? 'A' : 'P'}</text>

      {regions.map(r => (
        <path
          key={r.id}
          d={r.d}
          className={`bm-region${active === r.id ? ' is-active' : ''}`}
          onMouseEnter={() => onPick(r.id)}
          onClick={() => onPick(r.id)}
        />
      ))}

      <g className="bm-lines">
        {lines.map((d, i) => (
          <path key={i} d={d} pathLength={1} className="bm-line" style={{ ['--i' as string]: i % 12 }} />
        ))}
      </g>

      {regions.map(r => (
        <g
          key={`m-${r.id}`}
          className={`bm-marker${active === r.id ? ' is-active' : ''}`}
          transform={`translate(${r.marker[0]} ${r.marker[1]})`}
          onClick={() => onPick(r.id)}
        >
          <circle r="13" className="bm-marker-ring" />
          <circle r="10" className="bm-marker-dot" />
          <text y="3.5" textAnchor="middle" className="bm-marker-num">{numOf(r.id)}</text>
        </g>
      ))}
    </svg>
  );
}

export default function BodyMap() {
  const [active, setActive] = useState<RegionId>('abs');
  const [view, setView] = useState<View>('front');
  const [armed, setArmed] = useState(false);
  const [drawn, setDrawn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Draw the lines in once the map scrolls into view. Lines are only hidden
  // after JS has run ("armed"), so the drawing never goes missing without it.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setArmed(true);
    if (!('IntersectionObserver' in window)) { setDrawn(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setDrawn(true); io.disconnect(); }
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pick = (id: RegionId) => {
    setActive(id);
    const r = REGIONS.find(x => x.id === id)!;
    if (r.view !== 'both' && r.view !== view) setView(r.view);
  };

  const switchView = (v: View) => {
    setView(v);
    const r = REGIONS.find(x => x.id === active)!;
    if (r.view !== 'both' && r.view !== v) setActive(v === 'back' ? 'glutes' : 'abs');
  };

  const current = REGIONS.find(r => r.id === active)!;

  return (
    <div ref={ref} className={`bodymap${armed ? ' is-armed' : ''}${drawn ? ' is-drawn' : ''}`}>
      <div className="bm-figure">
        <div className="bm-toggle" role="group" aria-label="Body view">
          {(['front', 'back'] as View[]).map(v => (
            <button key={v} type="button" aria-pressed={view === v} onClick={() => switchView(v)}>
              {v === 'front' ? 'Front' : 'Back'}
            </button>
          ))}
        </div>
        <div className="bm-stage">
          <div className={`bm-card${view === 'back' ? ' is-back' : ''}`}>
            <Figure view="front" label="FIG. 01 — ANTERIOR" lines={FRONT_LINES} regions={FRONT_REGIONS} active={active} onPick={pick} />
            <Figure view="back" label="FIG. 02 — POSTERIOR" lines={BACK_LINES} regions={BACK_REGIONS} active={active} onPick={pick} />
          </div>
        </div>
        <p className="bm-hint">Tap an area to see the procedure that sculpts it.</p>
      </div>

      <div className="bm-panel">
        <ul className="bm-list" aria-label="Choose an area">
          {REGIONS.map(r => (
            <li key={r.id}>
              <button
                type="button"
                className={`bm-item${active === r.id ? ' is-active' : ''}`}
                aria-pressed={active === r.id}
                onClick={() => pick(r.id)}
              >
                <span className="bm-item-num">{r.num}</span>
                <span className="bm-item-area">{r.area}</span>
                <span className="bm-item-proc">{r.title}</span>
              </button>
            </li>
          ))}
        </ul>

        <article className="bm-detail" key={current.id} aria-live="polite">
          <div className="bm-detail-kicker">Area {current.num} / {current.area}</div>
          <h3>{current.title}</h3>
          <p>{current.desc}</p>
          <ul className="bm-facts">
            {current.facts.map(f => <li key={f}>{f}</li>)}
          </ul>
          <Link href={current.href} className="proc-link">
            Learn More
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </article>
      </div>
    </div>
  );
}
