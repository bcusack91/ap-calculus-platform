import type { DeckFigurePlacement } from './index'

/**
 * Laboratory Methods & Separations (MCAT C/P) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (a two-phase partition
 * channel and a schematic GC trace, a TLC plate with measured distances, a 2D
 * gel, a pH strip with a protein focusing from both sides, an RCF-vs-RPM
 * parabola, a plain tube beside a gradient tube, a cuvette and a standard
 * curve, transmitted-light bars drawn to scale, two schematic UV spectra and a
 * purity number line) — no textbook, prep-company or AAMC figure was copied.
 * The Biotechnology, Amino Acids, Biochem Foundations and Organelles decks
 * already draw the agarose gel, the blot family, the four protein-separation
 * schematics, the pH 7 native gel and the four-tube fractionation series, so
 * those views are not repeated here.
 *
 * The only numbers drawn are the lesson's own: TLC 3.0 cm / 7.5 cm = 0.40 and
 * a second spot at Rf 0.80 (6.0 cm); pentane / hexane / octane bp 36 / 69 /
 * 126 °C; pI 5.0 at pH 8.0; RCF = 1.118×10⁻⁵·r·RPM² with r = 8 cm, 10,000 RPM
 * → 8,944 g (and ×4 for doubled RPM); the standard curve 2 / 4 / 6 µM → A =
 * 0.10 / 0.20 / 0.30, unknown 0.25 → 5 µM, ε = 5×10⁴ M⁻¹cm⁻¹; the 0.40 → 0.20
 * dilution; T = 1 / 0.1 / 0.01 → A = 0 / 1 / 2; A₂₆₀/A₂₈₀ 1.8 / 2.0 / 1.5.
 * Every curve shape (GC peaks, the charge curve, spectra) is illustrative or
 * schematic and its caption says so.
 *
 * Colours: the faster / less-retained / net-negative / nucleic-acid item is
 * BLUE (fig-accent), the slower / more-retained / net-positive / protein item
 * RED (fig-accent-2), guides and asides grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same coloured group. Marker
 * ids are unique per figure (arr-lab-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A double-headed arrow (the marker is auto-start-reverse, so one marker serves both ends). */
const DARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 2.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-start="url(#${marker})" marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A stroked path (curve) in the current colour. */
const CURVE = (d: string, sw = 3.5, dashed = false) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${dashed ? ' stroke-dasharray="8 6"' : ''}/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

/** A tinted, outlined circle (a molecule or spot) in the current colour. */
const BALL = (cx: number, cy: number, r: number) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>`

/** An x-axis and a y-axis from the origin, both arrow-tipped. */
const AXES = (ox: number, oy: number, xEnd: number, yTop: number, marker: string) =>
  `${ARR(ox, oy, xEnd, oy, marker, 2.5)}${ARR(ox, oy, ox, yTop, marker, 2.5)}`

/** Sample f on [t0, t1] into n+1 screen points via the two scale functions. */
const sample = (f: (t: number) => number, t0: number, t1: number, n: number, toX: (t: number) => number, toY: (v: number) => number): [number, number][] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const t = t0 + ((t1 - t0) * i) / n
    return [toX(t), toY(f(t))]
  })

/** Polyline path data through the points. */
const poly = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')

/** A Gaussian bump of height h centred at c with width s. */
const bump = (h: number, c: number, s: number) => (x: number) => h * Math.exp(-(((x - c) / s) ** 2))

/* 1 — Partition between the phases, and a GC trace with the lesson's alkanes (lead, 1000×460).
   GC: x in screen px, peaks at 620 / 750 / 890 (pentane / hexane / octane), heights illustrative. */
const gcPeaks = [bump(210, 620, 11), bump(190, 750, 11), bump(170, 890, 11)]
const chromSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lab-chrom')}</defs>
${T(255, 40, 20, 'stronger hold on the stationary phase = slower', 'middle', '700')}
<rect x="40" y="70" width="430" height="90" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>
<g class="fig-muted">
<defs>${ARROW('arr-lab-chrom-m')}</defs>
<rect x="40" y="160" width="430" height="55" rx="8" fill="currentColor" fill-opacity="0.35"/>
${T(82, 94, 16, 'mobile phase (moves)')}
${ARR(250, 89, 350, 89, 'arr-lab-chrom-m', 2.5)}
${LINE(70, 72, 70, 213, 2, true)}
</g>
${T(275, 197, 16, 'stationary phase (fixed)', 'middle')}
<g class="fig-accent">
<defs>${ARROW('arr-lab-chrom-b')}</defs>
${ARR(78, 128, 378, 128, 'arr-lab-chrom-b', 2.5, true)}
${BALL(398, 128, 15)}
${T(40, 252, 18, 'weak hold → carried far, elutes first', 'start', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-lab-chrom-r')}</defs>
${ARR(78, 152, 140, 152, 'arr-lab-chrom-r', 2.5, true)}
${BALL(160, 158, 15)}
${T(40, 282, 18, 'strong hold → lags behind', 'start', '700')}
</g>
${T(40, 330, 17, 'pick the property that differs:', 'start', '700')}
${T(40, 358, 17, 'polarity → TLC, column, HPLC')}
${T(40, 384, 17, 'volatility → GC  ·  size → size-exclusion')}
${T(40, 410, 17, 'charge → ion-exchange  ·  binding → affinity')}
<g class="fig-muted">${LINE(505, 30, 505, 440, 1.5)}</g>
${T(760, 40, 20, 'GC on a nonpolar column', 'middle', '700')}
${AXES(545, 380, 975, 70, 'arr-lab-chrom')}
${T(551, 66, 15, 'detector signal')}
${T(971, 405, 15, 'retention time', 'end')}
<g class="fig-accent">${CURVE(poly(sample((x) => gcPeaks.reduce((s, f) => s + f(x), 0), 548, 965, 140, (x) => x, (v) => 380 - v)), 3)}</g>
${T(620, 136, 17, 'pentane', 'middle', '700')}${T(620, 158, 15, 'bp 36 °C', 'middle')}
${T(750, 156, 17, 'hexane', 'middle', '700')}${T(750, 178, 15, 'bp 69 °C', 'middle')}
${T(890, 176, 17, 'octane', 'middle', '700')}${T(890, 198, 15, 'bp 126 °C', 'middle')}
${T(760, 432, 16, 'lowest bp spends most time in the gas → elutes first', 'middle')}
</svg>`

/* 2 — A normal-phase TLC plate with the lesson's distances (lead, 1000×460).
   42 px per cm: baseline y = 395, front 7.5 cm → y = 80, spot 1 3.0 cm → y = 269, spot 2 6.0 cm → y = 143. */
const tlcSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<rect x="70" y="50" width="240" height="375" rx="10" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<defs>${ARROW('arr-lab-tlc-m')}</defs>
${LINE(70, 80, 445, 80, 2, true)}
${T(190, 72, 15, 'solvent front', 'middle')}
${LINE(70, 395, 445, 395, 2, true)}
${T(190, 416, 15, 'baseline (origin)', 'middle')}
<circle class="fig-bg" cx="140" cy="395" r="5" stroke="currentColor" stroke-width="2"/>
<circle class="fig-bg" cx="230" cy="395" r="5" stroke="currentColor" stroke-width="2"/>
${DARR(445, 393, 445, 82, 'arr-lab-tlc-m')}
${T(445, 68, 16, '7.5 cm', 'middle', '700')}
<line x1="495" y1="30" x2="495" y2="440" stroke="currentColor" stroke-width="1.5"/>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-lab-tlc-r')}</defs>
<ellipse cx="140" cy="269" rx="20" ry="12" fill="currentColor" fill-opacity="0.85"/>
${T(140, 300, 15, 'spot 1', 'middle', '700')}
${LINE(162, 269, 345, 269, 1.5, true)}
${DARR(345, 393, 345, 271, 'arr-lab-tlc-r')}
${T(345, 257, 16, '3.0 cm', 'middle', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-lab-tlc-b')}</defs>
<ellipse cx="230" cy="143" rx="20" ry="12" fill="currentColor" fill-opacity="0.85"/>
${T(230, 174, 15, 'spot 2', 'middle', '700')}
${LINE(252, 143, 395, 143, 1.5, true)}
${DARR(395, 393, 395, 145, 'arr-lab-tlc-b')}
${T(395, 131, 16, '6.0 cm', 'middle', '700')}
</g>
${T(520, 70, 21, 'Rf = spot distance / front distance', 'start', '700')}
<g class="fig-accent-2">
${T(520, 125, 20, 'spot 1: 3.0 / 7.5 = 0.40', 'start', '700')}
${T(520, 152, 17, 'binds the polar silica → the MORE polar one')}
</g>
<g class="fig-accent">
${T(520, 200, 20, 'spot 2: 6.0 / 7.5 = 0.80', 'start', '700')}
${T(520, 227, 17, 'less polar → carried farther by the solvent')}
</g>
${T(520, 280, 18, 'always 0 ≤ Rf ≤ 1')}
${T(520, 308, 18, 'normal phase: nonpolar travels farthest')}
<g class="fig-muted">
${T(520, 356, 16, 'Rf ≈ 0, stuck at the baseline → too polar')}
${T(520, 380, 16, 'for that solvent: a MORE polar mobile phase')}
${T(520, 404, 16, 'competes it off the plate and raises Rf')}
</g>
</svg>`

/* 3 — A 2D gel: IEF across, SDS-PAGE down; two spots at one height, different pI (lead, 1000×460) */
const gel2dSpots: [number, number][] = [[170, 130], [262, 150], [410, 118], [380, 312], [190, 342], [300, 382], [440, 368], [160, 250], [440, 170]]
const gel2dSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="${120 + 45 * i}" y="40" width="45" height="28" fill="currentColor" fill-opacity="${(0.1 + 0.08 * i).toFixed(2)}"/>`).join('')}
</g>
<rect x="120" y="40" width="360" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
${T(120, 30, 15, 'low pH')}
${T(480, 30, 15, 'high pH', 'end')}
${T(300, 30, 16, '1st: IEF → by pI', 'middle', '700')}
<rect x="120" y="85" width="360" height="335" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<defs>${ARROW('arr-lab-2d-m')}</defs>
${ARR(100, 95, 100, 410, 'arr-lab-2d-m', 2.5)}
${LINE(130, 230, 470, 230, 1.5, true)}
${T(470, 220, 15, 'same size', 'end')}
${gel2dSpots.map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="14" ry="8" fill="currentColor" fill-opacity="0.7"/>`).join('')}
</g>
${T(88, 110, 15, 'large', 'end')}
${T(88, 405, 15, 'small', 'end')}
${T(88, 236, 15, '2nd:', 'end', '700')}
${T(88, 256, 15, 'SDS-', 'end')}
${T(88, 276, 15, 'PAGE', 'end')}
${T(88, 296, 15, '(size)', 'end')}
<g class="fig-accent">
<ellipse cx="330" cy="230" rx="16" ry="9" fill="currentColor" fill-opacity="0.9"/>
${T(330, 258, 14, 'unmodified', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-lab-2d-r')}</defs>
<ellipse cx="240" cy="230" rx="16" ry="9" fill="currentColor" fill-opacity="0.9"/>
${T(240, 258, 14, 'lower pI', 'middle', '700')}
<path d="M318 214 C300 190 266 190 252 210" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lab-2d-r)"/>
${T(285, 182, 15, '+ phosphate', 'middle', '700')}
</g>
${T(530, 80, 21, 'two independent properties', 'start', '700')}
${T(530, 116, 18, 'across: IEF — each stops where pH = pI')}
${T(530, 144, 18, 'down: SDS-PAGE — small runs farthest')}
${T(530, 198, 19, 'same height → same size (MW)', 'start', '700')}
${T(530, 228, 19, 'different column → different pI', 'start', '700')}
<g class="fig-accent-2">
${T(530, 280, 18, 'phosphorylated isoform: extra − charge')}
${T(530, 306, 18, '→ lower pI → shifts to the acidic side')}
</g>
<g class="fig-muted">
${T(530, 356, 16, 'spots that co-migrate in one dimension')}
${T(530, 380, 16, 'split apart in the other')}
${T(530, 418, 15, 'spot positions illustrative')}
</g>
</svg>`

/* 4 — Isoelectric focusing: a protein with pI 5.0 runs to pH 5 from either side (lead, 1000×460).
   pH axis x = 60 + 70·(pH − 3), pH 3 … 10; charge curve y = 130 + 55·tanh((pH − 5)/1.1) (illustrative). */
const iefX = (pH: number) => 60 + 70 * (pH - 3)
const iefSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lab-ief')}</defs>
${ARR(60, 195, 60, 45, 'arr-lab-ief', 2.5)}
${T(66, 44, 15, 'net charge')}
<g class="fig-muted">
${LINE(60, 130, 560, 130, 1.5, true)}
${T(566, 135, 14, '0')}
${LINE(590, 30, 590, 440, 1.5)}
</g>
${CURVE(poly(sample((pH) => 130 + 55 * Math.tanh((pH - 5) / 1.1), 3, 10, 70, iefX, (v) => v)))}
${DOT(iefX(5), 130)}
${T(210, 120, 16, 'pI = 5.0', 'start', '700')}
<g class="fig-accent-2">${T(75, 110, 16, 'net +', 'start', '700')}</g>
<g class="fig-accent">${T(480, 165, 16, 'net −', 'start', '700')}</g>
${T(40, 215, 14, 'pH', 'end')}
${[3, 4, 5, 6, 7, 8, 9, 10].map((p) => T(iefX(p), 215, 14, String(p), 'middle')).join('')}
<g class="fig-muted"><rect x="60" y="225" width="490" height="40" rx="6" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/></g>
<rect x="${iefX(5) - 4}" y="227" width="8" height="36" fill="currentColor"/>
<g class="fig-accent">
<defs>${ARROW('arr-lab-ief-b')}</defs>
${ARR(iefX(8) - 16, 245, iefX(5) + 14, 245, 'arr-lab-ief-b', 3)}
${BALL(iefX(8), 245, 12)}
${T(iefX(8), 251, 17, '−', 'middle', '700')}
${T(iefX(8), 292, 15, 'starts at pH 8.0: net −', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-lab-ief-r')}</defs>
${ARR(iefX(3.5) + 16, 245, iefX(5) - 12, 245, 'arr-lab-ief-r', 3)}
${BALL(iefX(3.5), 245, 12)}
${T(iefX(3.5), 251, 17, '+', 'middle', '700')}
${T(iefX(3.5), 292, 15, 'below pI: net +', 'middle', '700')}
</g>
${T(60, 332, 17, '(+) anode · acidic end', 'start', '700')}
${T(550, 332, 17, 'basic end · cathode (−)', 'end', '700')}
${T(60, 380, 18, 'both run toward pH 5.0 and stop there: net 0', 'start', '700')}
<g class="fig-muted">${T(60, 410, 15, 'charge curve illustrative')}</g>
<g class="fig-accent">${T(615, 70, 19, 'pH &gt; pI → net − → to the anode (+)', 'start', '700')}</g>
<g class="fig-accent-2">${T(615, 104, 19, 'pH &lt; pI → net + → to the cathode (−)', 'start', '700')}</g>
${T(615, 138, 19, 'pH = pI → net 0 → stops', 'start', '700')}
${T(615, 192, 18, 'IEF: a pH gradient between the electrodes;')}
${T(615, 218, 18, 'each protein runs until pH = its own pI')}
${T(615, 268, 18, 'drift past the pI → recharged → pushed back')}
${T(615, 294, 18, '→ a sharp, focused band', 'start', '700')}
<g class="fig-muted">
${T(615, 344, 16, 'quiz case: pI 5.0 in a pH 8.0 buffer →')}
${T(615, 368, 16, 'net negative, migrates to the anode')}
</g>
</svg>`

/* 5 — RCF against RPM for the lesson's 8 cm rotor, and what speeds sedimentation (lead, 1000×460).
   x = 100 + 20 px per 1,000 RPM; y = 390 − RCF/120. */
const rcf = (rpm: number) => 1.118e-5 * 8 * rpm * rpm
const rx = (rpm: number) => 100 + rpm / 50
const ry = (g: number) => 390 - g / 120
const sedSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lab-sed')}</defs>
${AXES(100, 390, 540, 50, 'arr-lab-sed')}
${T(106, 46, 15, 'RCF (× g)')}
${T(548, 395, 15, 'RPM')}
<g class="fig-muted">
${LINE(rx(10000), 390, rx(10000), ry(rcf(10000)), 1.5, true)}
${LINE(100, ry(rcf(10000)), rx(10000), ry(rcf(10000)), 1.5, true)}
${LINE(rx(20000), 390, rx(20000), ry(rcf(20000)), 1.5, true)}
${LINE(100, ry(rcf(20000)), rx(20000), ry(rcf(20000)), 1.5, true)}
${LINE(590, 30, 590, 440, 1.5)}
</g>
${LINE(rx(10000), 386, rx(10000), 394, 2)}${T(rx(10000), 412, 14, '10,000', 'middle')}
${LINE(rx(20000), 386, rx(20000), 394, 2)}${T(rx(20000), 412, 14, '20,000', 'middle')}
${T(94, ry(rcf(10000)) + 5, 14, '8,944', 'end')}
${T(94, ry(rcf(20000)) + 5, 14, '35,776', 'end')}
<g class="fig-accent">
${CURVE(poly(sample(rcf, 0, 21000, 60, rx, ry)))}
${DOT(rx(10000), ry(rcf(10000)))}${DOT(rx(20000), ry(rcf(20000)))}
${T(400, 270, 16, 'r = 8 cm', 'start', '700')}
</g>
${T(312, 340, 16, '10,000 RPM → 8,944 g', 'start', '700')}
<g class="fig-accent-2">${T(488, 80, 16, '20,000 RPM → 4 × 8,944 = 35,776 g', 'end', '700')}</g>
${T(615, 70, 20, 'v ∝ (ρₚ − ρₘ) · rₚ² · ω²', 'start', '700')}
${T(615, 106, 17, 'bigger particle (radius rₚ²) → faster')}
${T(615, 132, 17, 'denser than the medium → faster')}
${T(615, 158, 17, 'faster spin (ω²) → faster')}
${T(615, 198, 17, 'ρₚ = ρₘ → no net push: it stops', 'start', '700')}
<g class="fig-muted">${T(615, 222, 15, 'the isopycnic point')}</g>
${T(615, 272, 19, 'RCF = 1.118×10⁻⁵ · r · RPM²', 'start', '700')}
${T(615, 300, 17, 'rotor r = 8 cm, 10,000 RPM → 8,944 g')}
<g class="fig-accent-2">${T(615, 326, 17, 'double the RPM → 4 × the force', 'start', '700')}</g>
<g class="fig-muted">
${T(615, 370, 15, 'quote g, not RPM: RPM means nothing')}
${T(615, 390, 15, 'without the rotor radius')}
</g>
</svg>`

/* 6 — Differential vs density-gradient: a plain tube with a pellet, a gradient tube with bands (replace-table, 560×440) */
const tube = (x0: number, x1: number) => `M${x0} 70 L${x0} 290 Q${x0} 325 ${(x0 + x1) / 2} 325 Q${x1} 325 ${x1} 290 L${x1} 70`
const twoTechSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(130, 40, 18, 'Differential', 'middle', '700')}
${T(410, 40, 18, 'Density gradient', 'middle', '700')}
<path d="${tube(80, 180)} Z" fill="currentColor" fill-opacity="0.07"/>
<g class="fig-accent"><path d="M84 300 Q84 321 130 321 Q176 321 176 300 Q130 290 84 300 Z" fill="currentColor" fill-opacity="0.85"/></g>
<g class="fig-muted">
${[0, 1, 2, 3, 4].map((i) => `<rect x="361" y="${80 + 42 * i}" width="98" height="42" fill="currentColor" fill-opacity="${(0.06 + 0.08 * i).toFixed(2)}"/>`).join('')}
<path d="M361 290 Q361 323 410 323 Q459 323 459 290 Z" fill="currentColor" fill-opacity="0.46"/>
<defs>${ARROW('arr-lab-two-m')}</defs>
${ARR(492, 90, 492, 300, 'arr-lab-two-m', 2)}
</g>
${CURVE(tube(80, 180), 2.5)}
${CURVE(tube(360, 460), 2.5)}
${T(196, 150, 15, 'supernatant')}
${LINE(150, 146, 190, 146, 1.5)}
<g class="fig-accent">${T(196, 312, 15, 'pellet', 'start', '700')}</g>
<g class="fig-accent"><rect x="362" y="128" width="96" height="7" rx="2" fill="currentColor"/></g>
<g class="fig-accent-2"><rect x="362" y="196" width="96" height="7" rx="2" fill="currentColor"/></g>
<rect x="362" y="252" width="96" height="7" rx="2" fill="currentColor"/>
${T(500, 92, 14, 'low ρ')}
${T(500, 304, 14, 'high ρ')}
${T(130, 358, 15, 'uniform medium', 'middle')}
${T(130, 380, 15, 'size (then density)', 'middle', '700')}
${T(410, 358, 15, 'CsCl or sucrose', 'middle')}
${T(410, 380, 15, 'density ONLY', 'middle', '700')}
${T(130, 414, 14, 'pellets at stepwise higher speed', 'middle')}
${T(410, 414, 14, 'each bands where ρ = ρ(medium)', 'middle')}
</svg>`

/* 7 — Beer–Lambert: the cuvette, and the lesson's standard curve (lead, 1000×460).
   graph x = 600 + 50·c (µM), y = 380 − 900·A */
const blX = (c: number) => 600 + 50 * c
const blY = (a: number) => 380 - 900 * a
const beerSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lab-beer')}</defs>
${ARR(40, 120, 135, 120, 'arr-lab-beer', 7)}
${T(75, 102, 19, 'I₀', 'middle', '700')}
<rect x="145" y="60" width="100" height="120" rx="4" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
${[[165, 80], [200, 92], [228, 74], [175, 112], [215, 130], [160, 150], [232, 160], [195, 162], [185, 138], [225, 105]].map(([x, y]) => DOT(x, y, 5)).join('')}
</g>
${T(195, 48, 15, 'solute at concentration c', 'middle')}
${ARR(255, 120, 360, 120, 'arr-lab-beer', 3)}
${T(305, 102, 19, 'I', 'middle', '700')}
<rect x="370" y="90" width="110" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>
${T(425, 126, 16, 'detector', 'middle')}
<g class="fig-muted">
<defs>${ARROW('arr-lab-beer-m')}</defs>
${DARR(147, 202, 243, 202, 'arr-lab-beer-m', 2)}
${LINE(555, 30, 555, 440, 1.5)}
</g>
${T(195, 228, 16, 'path length l (cm)', 'middle')}
${T(40, 285, 26, 'A = ε · l · c', 'start', '700')}
${T(40, 320, 16, 'ε = molar absorptivity (M⁻¹cm⁻¹), fixed at one λ')}
${T(40, 345, 16, 'l = path length (cm)  ·  c = concentration (M)')}
<g class="fig-accent">${T(40, 380, 16, 'A ∝ c: dilute 2-fold → A 0.40 → 0.20', 'start', '700')}</g>
${T(40, 410, 16, 'here εl = 0.05 µM⁻¹ → ε = 5×10⁴ M⁻¹cm⁻¹')}
<g class="fig-muted">${T(40, 438, 15, 'linear only up to A ≈ 1: above that, dilute and remeasure')}</g>
${T(790, 28, 16, 'standards: 2, 4, 6 µM → A = 0.10, 0.20, 0.30', 'middle', '700')}
${AXES(600, 380, 975, 50, 'arr-lab-beer')}
${T(606, 50, 15, 'A')}
${T(975, 405, 15, 'c (µM)', 'end')}
${[2, 4, 6].map((c) => `${LINE(blX(c), 376, blX(c), 384, 2)}${T(blX(c), 400, 14, String(c), 'middle')}`).join('')}
${[0.1, 0.2, 0.3].map((a) => `${LINE(596, blY(a), 604, blY(a), 2)}${T(592, blY(a) + 5, 14, a.toFixed(2), 'end')}`).join('')}
${LINE(blX(0), blY(0), blX(7), blY(0.35), 3.5)}
${[2, 4, 6].map((c) => DOT(blX(c), blY(c * 0.05), 7)).join('')}
${T(615, 90, 16, 'slope = εl = 0.05 µM⁻¹', 'start', '700')}
<g class="fig-accent">
${LINE(600, blY(0.25), blX(5), blY(0.25), 2, true)}
${LINE(blX(5), blY(0.25), blX(5), 380, 2, true)}
<circle class="fig-bg" cx="${blX(5)}" cy="${blY(0.25)}" r="7" stroke="currentColor" stroke-width="3"/>
${T(blX(5), 400, 14, '5', 'middle', '700')}
${T(592, blY(0.25) + 5, 14, '0.25', 'end', '700')}
${T(790, 440, 16, 'unknown A = 0.25 → c = 0.25 / 0.05 = 5 µM', 'middle', '700')}
</g>
</svg>`

/* 8 — Absorbance vs transmittance: transmitted light drawn to scale for A = 0, 1, 2 (lead, 1000×460).
   bar length = 360 px × T */
const transRow = (y: number, a: string, t: number, label: string, cls: string) =>
  `${T(40, y + 20, 20, a, 'start', '700')}
<g class="${cls}"><rect x="150" y="${y}" width="${Math.max(360 * t, 3).toFixed(1)}" height="28" rx="${t > 0.05 ? 4 : 1}" fill="currentColor" fill-opacity="0.8"/></g>
<rect x="150" y="${y}" width="360" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>
${T(150, y - 10, 16, label)}`
const transSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(275, 40, 19, 'light that gets through, drawn to scale', 'middle', '700')}
${transRow(95, 'A = 0', 1, 'T = 1 (100%)', 'fig-accent')}
${transRow(195, 'A = 1', 0.1, 'T = 0.1 (10%)', 'fig-accent')}
${transRow(295, 'A = 2', 0.01, 'T = 0.01 (1%) — a sliver', 'fig-accent')}
<g class="fig-muted">
<defs>${ARROW('arr-lab-trans-m')}</defs>
${ARR(540, 128, 540, 190, 'arr-lab-trans-m', 2)}
${ARR(540, 228, 540, 290, 'arr-lab-trans-m', 2)}
${T(550, 164, 15, '÷10')}
${T(550, 264, 15, '÷10')}
${LINE(595, 30, 595, 440, 1.5)}
</g>
${T(40, 375, 18, 'each +1 in A = 10× less light through', 'start', '700')}
<g class="fig-muted">${T(40, 405, 16, 'A = 2 lets only 1% of the light reach the detector')}</g>
${T(620, 70, 22, 'A = −log₁₀ T = −log₁₀(I/I₀)', 'start', '700')}
${T(620, 120, 19, 'T = 1 (100%) → A = 0')}
${T(620, 150, 19, 'T = 0.1 (10%) → A = 1')}
${T(620, 180, 19, 'T = 0.01 (1%) → A = 2')}
<g class="fig-accent">${T(620, 228, 19, 'equivalently T = 10⁻ᴬ', 'start', '700')}</g>
${T(620, 276, 18, 'A rises in step with c (Beer–Lambert);')}
${T(620, 302, 18, 'T shrinks by a factor of 10 per unit A')}
<g class="fig-muted">
${T(620, 350, 16, 'A is unitless — a logarithmic scale')}
${T(620, 374, 16, 'dashed outline = 100% of I₀')}
</g>
</svg>`

/* 9 — A₂₆₀ and A₂₈₀: two schematic spectra and the purity number line (lead, 1000×460).
   λ axis x = 90 + 4.78·(λ − 230) for 230 … 320 nm; ratio line x = 620 + 485.7·(ratio − 1.4). */
const lx = (nm: number) => 90 + 4.78 * (nm - 230)
const rq = (r: number) => 620 + 485.7 * (r - 1.4)
const hooksSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lab-hook')}</defs>
${AXES(70, 380, 560, 60, 'arr-lab-hook')}
${T(76, 56, 15, 'absorbance')}
${T(560, 405, 15, 'wavelength (nm)', 'end')}
<g class="fig-muted">
${LINE(lx(260), 380, lx(260), 140, 1.5, true)}
${LINE(lx(280), 380, lx(280), 140, 1.5, true)}
${LINE(590, 30, 590, 440, 1.5)}
</g>
${T(lx(260), 402, 15, '260', 'middle', '700')}
${T(lx(280), 402, 15, '280', 'middle', '700')}
<g class="fig-accent">
${CURVE(poly(sample(bump(250, 260, 18), 230, 320, 90, lx, (v) => 380 - v)))}
${T(lx(260), 94, 17, 'nucleic acid: peak 260', 'middle', '700')}
${T(lx(260), 116, 15, '(the aromatic bases)', 'middle')}
</g>
<g class="fig-accent-2">
${CURVE(poly(sample(bump(110, 280, 14), 230, 320, 90, lx, (v) => 380 - v)))}
${T(345, 236, 17, 'protein: peak 280', 'start', '700')}
${T(345, 256, 15, '(Trp, Tyr)')}
</g>
<g class="fig-muted">${T(315, 440, 15, 'schematic, not a real spectrum', 'middle')}</g>
${T(620, 70, 21, 'purity check: A₂₆₀ / A₂₈₀', 'start', '700')}
${LINE(rq(1.4), 170, rq(2.1), 170, 2.5)}
${[1.5, 1.6, 1.7, 1.8, 1.9, 2.0].map((r) => LINE(rq(r), 164, rq(r), 176, 2)).join('')}
<g class="fig-accent">
${DOT(rq(1.8), 170, 8)}${T(rq(1.8), 150, 16, '1.8', 'middle', '700')}${T(rq(1.8), 200, 15, 'pure DNA', 'middle', '700')}
${DOT(rq(2.0), 170, 8)}${T(rq(2.0), 150, 16, '2.0', 'middle', '700')}${T(rq(2.0), 200, 15, 'pure RNA', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-lab-hook-r')}</defs>
${DOT(rq(1.5), 170, 8)}${T(rq(1.5), 150, 16, '1.5', 'middle', '700')}
${ARR(rq(1.75), 222, rq(1.53), 222, 'arr-lab-hook-r', 2.5)}
${T(rq(1.5), 248, 15, 'protein contamination', 'start', '700')}
</g>
${T(620, 296, 18, 'protein absorbs at 280 → raises A₂₈₀')}
<g class="fig-accent-2">${T(620, 322, 18, '→ the ratio DROPS below 1.8', 'start', '700')}</g>
${T(620, 366, 18, 'RNA pushes it UP toward 2.0')}
<g class="fig-muted">${T(620, 404, 16, 'concentration alone leaves the ratio unchanged')}</g>
</svg>`

export const mcatLabMethodsFigures: DeckFigurePlacement[] = [
  {
    at: 'Major Chromatography Types',
    mode: 'lead',
    figure: {
      svg: chromSvg,
      alt:
        'Left: a channel split into a mobile phase on top (flowing to the right) and a grey stationary phase below, with a dashed start line. A blue molecule that barely interacts with the stationary phase has been carried far along in the mobile phase — weak hold, carried far, elutes first; a red molecule stuck at the stationary surface has barely moved — strong hold, lags behind. Title: stronger hold on the stationary phase = slower. Below: pick the property that differs — polarity: TLC, column, HPLC; volatility: GC; size: size-exclusion; charge: ion-exchange; binding: affinity. Right: a schematic gas-chromatography trace of detector signal against retention time on a nonpolar column, with three peaks in order pentane (bp 36 °C), hexane (bp 69 °C), octane (bp 126 °C) — the lowest boiling point spends most time in the gas and elutes first.',
      caption: 'Every chromatography is a tug-of-war between the phases; on GC the lesson’s alkanes come off in boiling-point order (peak shapes illustrative).',
    },
    blocks: [
      '- More affinity for the **stationary** phase = slower; match the column to the property that differs',
      '- GC (nonpolar column): lowest bp elutes first — pentane (36 °C) → hexane (69 °C) → octane (126 °C)',
    ],
  },
  {
    at: 'Retention Factor',
    mode: 'lead',
    figure: {
      svg: tlcSvg,
      alt:
        'A normal-phase (polar silica) TLC plate. A dashed baseline near the bottom holds two small open origin marks; a dashed solvent front near the top is 7.5 cm above the baseline. Spot 1 (red) has travelled 3.0 cm; spot 2 (blue) has travelled 6.0 cm, each distance shown by a double arrow measured from the baseline. Right column: Rf = spot distance / front distance; spot 1: 3.0 / 7.5 = 0.40 — it binds the polar silica, so it is the more polar compound; spot 2: 6.0 / 7.5 = 0.80 — less polar, carried farther by the solvent; Rf is always between 0 and 1; on normal phase the nonpolar compound travels farthest; a compound stuck at the baseline (Rf ≈ 0) is too polar for that solvent, and a more polar mobile phase competes it off the plate and raises its Rf.',
      caption: 'The lesson’s TLC example measured on the plate: 3.0 cm over a 7.5 cm front gives Rf 0.40, the more polar of the two spots.',
    },
    blocks: [
      '- $R_f = 3.0/7.5 = 0.40$ vs $R_f = 0.80$: on polar silica, the lower $R_f$ is the **more polar** compound',
      '- Stuck at the baseline ($R_f \\approx 0$)? Too polar for the solvent — a more polar mobile phase raises it',
    ],
  },
  {
    at: 'Key Variants',
    mode: 'lead',
    figure: {
      svg: gel2dSvg,
      alt:
        'A two-dimensional gel. Along the top, an IEF strip shaded from low pH on the left to high pH on the right — the first dimension, separating by pI. Down the left side, an arrow from large to small — the second dimension, SDS-PAGE, separating by size. Grey spots are scattered over the gel. Two highlighted spots sit at exactly the same height on a dashed line labelled same size: a blue unmodified protein and, to its left on the acidic side, a red spot labelled lower pI, with a red arrow from blue to red labelled + phosphate. Right column: two independent properties; across, IEF, each protein stops where pH = pI; down, SDS-PAGE, small runs farthest; same height means same size (MW), a different column means a different pI; a phosphorylated isoform carries extra negative charge, so its pI is lower and it shifts to the acidic side; spots that co-migrate in one dimension split apart in the other; spot positions illustrative.',
      caption: 'A 2D gel separates on pI across and size down, so a phosphorylated isoform shows up as a same-height spot shifted toward low pH (positions illustrative).',
    },
    blocks: [
      '- 2D gel = IEF (by **pI**) then SDS-PAGE (by **size**): same height = same MW, different column = different pI',
      '- Phosphorylation adds − charge → lower pI → a same-size spot shifted to the acidic side',
    ],
  },
  {
    at: 'Isoelectric Point (pI)',
    mode: 'lead',
    figure: {
      svg: iefSvg,
      alt:
        'Top left: an illustrative net-charge curve for a protein against pH, positive (red, net +) at low pH, crossing zero at a dot labelled pI = 5.0, and negative (blue, net −) at high pH. Below it, on the same pH scale from 3 to 10, an isoelectric-focusing strip with the anode (+) at the acidic end on the left and the cathode (−) at the basic end on the right. A dark band sits at pH 5.0. A blue molecule marked − starts at pH 8.0 (net negative) with an arrow running left toward the band; a red molecule marked + starts below the pI (net positive) with an arrow running right toward the band. Both run toward pH 5.0 and stop there with net charge 0. Right column: pH > pI → net − → to the anode (+); pH < pI → net + → to the cathode (−); pH = pI → net 0 → stops; IEF puts a pH gradient between the electrodes and each protein runs until pH equals its own pI; a protein that drifts past its pI is recharged and pushed back, giving a sharp focused band; the quiz case, pI 5.0 in a pH 8.0 buffer, is net negative and migrates to the anode.',
      caption: 'Isoelectric focusing: from either side a protein is charged toward its pI and stops there, so pI 5.0 focuses into one sharp band at pH 5.0 (charge curve illustrative).',
    },
    blocks: [
      '- pH > pI → net − → anode (+); pH < pI → net + → cathode (−); pH = pI → net 0, stops',
      '- In IEF every protein runs until the local pH equals its pI — and is pushed back if it drifts past',
    ],
  },
  {
    at: 'Sedimentation Logic',
    mode: 'lead',
    figure: {
      svg: sedSvg,
      alt:
        'Left: a graph of RCF (× g) against RPM for a rotor of radius 8 cm — a blue parabola. A dot at 10,000 RPM reads 8,944 g; a second dot at 20,000 RPM reads 4 × 8,944 = 35,776 g, with dashed guides to both axes: doubling the RPM quadruples the force. Right column: v ∝ (ρp − ρm) · rp² · ω²; a bigger particle (radius rp squared) sediments faster, so does one denser than the medium, and a faster spin (ω²); when ρp = ρm there is no net push and the particle stops — the isopycnic point; RCF = 1.118×10⁻⁵ · r · RPM², so a rotor of r = 8 cm at 10,000 RPM gives 8,944 g and double the RPM gives 4 × the force; quote g, not RPM, because RPM means nothing without the rotor radius.',
      caption: 'The lesson’s rotor (r = 8 cm): 10,000 RPM gives 8,944 g, and because RCF grows with RPM², doubling the speed quadruples the force.',
    },
    blocks: [
      '- $v \\propto (\\rho_p - \\rho_m)\\,r_p^2\\,\\omega^2$: larger/denser sinks faster; stops at $\\rho_p = \\rho_m$',
      '- RCF $= 1.118\\times10^{-5}\\,r\\,(\\text{RPM})^2$: 8 cm at 10,000 RPM ≈ 8,944 g; double RPM → 4× force',
    ],
  },
  {
    at: 'Two Major Techniques',
    mode: 'replace-table',
    figure: {
      svg: twoTechSvg,
      alt:
        'Two centrifuge tubes side by side. Left, Differential: a uniform medium with a blue pellet at the bottom and the supernatant above; it separates by size (then density) in a uniform medium, giving pellets at stepwise higher speed. Right, Density gradient: the tube is shaded from light (low density) at the top to dark (high density) at the bottom — CsCl or sucrose — and three thin bands sit at different heights; it separates by density only, each particle banding where its density equals the medium’s.',
      caption: 'Differential spins pellet the biggest particles first in a uniform medium; a density gradient bands each particle at its own buoyant density, whatever its size.',
    },
    blocks: [
      '- **Differential:** no gradient; spin, keep the supernatant, spin faster → sequential pellets',
      '- **Density-gradient (isopycnic):** CsCl or sucrose; each particle bands at its own buoyant density',
      '- Isopycnic separation is by **density only** — size does not decide where a band sits',
    ],
  },
  {
    at: 'Beer–Lambert Law',
    mode: 'lead',
    figure: {
      svg: beerSvg,
      alt:
        'Left: a light beam I₀ enters a cuvette holding solute at concentration c; a thinner beam I leaves and reaches a detector; a double arrow under the cuvette marks the path length l in cm. Below: A = ε · l · c, where ε is the molar absorptivity (M⁻¹cm⁻¹), fixed at one wavelength, l the path length (cm) and c the concentration (M); A is proportional to c, so diluting 2-fold takes A from 0.40 to 0.20; here εl = 0.05 µM⁻¹, so ε = 5×10⁴ M⁻¹cm⁻¹; linear only up to A ≈ 1 — above that, dilute and remeasure. Right: the lesson’s standard curve, A against c in µM, a straight line through the origin and three standards at 2, 4 and 6 µM reading 0.10, 0.20 and 0.30, slope = εl = 0.05 µM⁻¹. A blue dashed reading from A = 0.25 across to the line and down gives c = 5 µM: unknown A = 0.25 → c = 0.25 / 0.05 = 5 µM.',
      caption: 'Beer–Lambert as a cuvette and a calibration line: the lesson’s standards give a slope of 0.05 per µM, so an unknown at A = 0.25 is 5 µM.',
    },
    blocks: [
      '- $A = \\varepsilon l c$: absorbance is **linear** in concentration and path length (valid up to $A \\approx 1$)',
      '- Standard curve: slope $= \\varepsilon l = 0.05$ µM⁻¹, so $A = 0.25$ → $c = 0.25/0.05 = 5$ µM',
    ],
  },
  {
    at: 'Absorbance vs. Transmittance',
    mode: 'lead',
    figure: {
      svg: transSvg,
      alt:
        'Three horizontal bars showing the light that gets through, drawn to scale inside a dashed outline that represents 100% of I₀. A = 0: the bar fills the outline, T = 1 (100%). A = 1: the bar is one tenth as long, T = 0.1 (10%). A = 2: only a sliver, T = 0.01 (1%). Grey arrows between rows are labelled ÷10. Below: each +1 in A means 10× less light through; A = 2 lets only 1% of the light reach the detector. Right column: A = −log₁₀ T = −log₁₀(I/I₀); T = 1 (100%) → A = 0; T = 0.1 (10%) → A = 1; T = 0.01 (1%) → A = 2; equivalently T = 10⁻ᴬ; A rises in step with c (Beer–Lambert), while T shrinks by a factor of 10 per unit of A; A is unitless, a logarithmic scale.',
      caption: 'Absorbance is a log scale: each unit of A cuts the transmitted light tenfold, so A = 2 lets only 1% through.',
    },
    blocks: [
      '- $A = -\\log_{10} T$, so $T = 10^{-A}$: T = 1 → A = 0, T = 0.1 → A = 1, T = 0.01 → A = 2',
      '- Each unit of absorbance = a **10×** drop in transmitted light',
    ],
  },
  {
    at: 'Biochemistry Hooks',
    mode: 'lead',
    figure: {
      svg: hooksSvg,
      alt:
        'Left: schematic absorbance spectra against wavelength in nm (not real spectra). A tall blue curve peaks at 260 nm — nucleic acid, from the aromatic bases; a lower red curve peaks at 280 nm — protein, from Trp and Tyr. Dashed lines mark 260 and 280. Right: a number line for the purity ratio A₂₆₀ / A₂₈₀ with blue dots at 1.8 (pure DNA) and 2.0 (pure RNA) and a red dot at 1.5, with a red arrow pointing toward lower values labelled protein contamination. Text: protein absorbs at 280 and raises A₂₈₀, so the ratio drops below 1.8; RNA pushes it up toward 2.0; concentration alone leaves the ratio unchanged.',
      caption: 'Nucleic acids absorb at 260 nm, proteins at 280 nm — so the A₂₆₀/A₂₈₀ ratio reads purity: 1.8 DNA, 2.0 RNA, lower means protein (spectra schematic).',
    },
    blocks: [
      '- $A_{260}$: nucleic acids (bases) · $A_{280}$: proteins (Trp, Tyr)',
      '- $A_{260}/A_{280}$ ≈ 1.8 pure DNA, ≈ 2.0 pure RNA; lower (e.g. 1.5) → protein contamination',
    ],
  },
]
