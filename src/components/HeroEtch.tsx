/*
 * Gold "etching" lines drawn over the hero photo: the six-pack, chest and
 * oblique lines an HD VASER etch sculpts. Coordinates are in the photo's own
 * 800x800 pixel space (the mobile file is the same shot at 500x500), so the
 * overlay stays registered at every size as long as the photo is shown
 * square with object-fit: cover. If the hero photo is ever replaced, these
 * paths have to be redrawn to match the new body.
 *
 * Pure SVG + CSS: draws in once on load, then settles to a faint trace.
 */

const LINES: string[] = [
  // chest: lower borders of both pecs
  'M132 522 C168 540 214 552 258 548',
  'M270 548 C318 556 380 546 424 520 C440 508 452 490 458 470',
  // linea alba down to the navel
  'M262 556 C256 600 246 650 234 702',
  // rectus edges
  'M172 562 C168 610 170 660 178 712',
  'M330 562 C332 612 328 664 318 718',
  // tendinous intersections
  'M174 588 C200 596 230 598 258 592',
  'M258 592 C282 596 306 594 330 588',
  'M171 648 C196 656 222 658 248 654',
  'M248 654 C272 658 300 656 327 650',
  // serratus
  'M424 548 L446 560',
  'M430 578 L452 588',
  'M434 608 L454 616',
  // V-lines
  'M178 740 C190 764 206 784 222 800',
  'M318 744 C304 768 290 786 276 800',
];

const NODES: [number, number][] = [
  [262, 556], [258, 592], [248, 654], [234, 702],
];

export default function HeroEtch() {
  return (
    <svg className="hero-etch" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {LINES.map((d, i) => (
        <path key={i} d={d} pathLength={1} className="he-line" style={{ ['--i' as string]: i }} />
      ))}
      {NODES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3.5} className="he-node" style={{ ['--i' as string]: i }} />
      ))}
    </svg>
  );
}
