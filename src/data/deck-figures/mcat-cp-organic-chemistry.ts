import type { DeckFigurePlacement } from './index'

/**
 * Organic Chemistry (survey) (MCAT C/P) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * The dedicated decks draw the functional-group gallery, pKa ladder and
 * unsaturation (Functional Groups); the isomer tree, chirality, R/S, Fischer
 * and E/Z (Stereochemistry); the four mechanisms, energy diagrams, leaving
 * groups and solvents (Substitution & Elimination); addition vs acyl
 * substitution, the reactivity ladder, enolates, aldol and the oxidation
 * ladder (Carbonyls); IR/NMR/MS (Spectroscopy). So this 7-part survey draws
 * DIFFERENT views from its own sections: the 2ⁿ stereoisomer square, the
 * lesson's R/S worked example, the substrate-first mechanism tree, the
 * NaBH₄-vs-LiAlH₄ reach chart, the derivative interconversions as downhill
 * moves, Hückel's rule as a π-electron count line, EAS directing on two
 * rings, the two worked NMR spectra, and the Lys/His/Glu charge-vs-pH bars.
 *
 * Structures drawn as skeletal/line drawings: the R/S worked-example carbon
 * (Cl, OH, CH₃, H), benzene, the cyclopentadienyl anion, and a generic
 * monosubstituted benzene (twice). Everything else is a labelled box.
 * Numbers shown are the lesson's own (atomic numbers 17/8/6/1; 3.6 and 1.2
 * ppm; pKa 4.1, ≈ 6, 10.5; pH 7.4).
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. Arrowheads: each coloured arrow has its marker
 * defined inside the same coloured group; marker ids are unique
 * (arr-oc-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Rounded box with a centred label (one line). */
const box = (cx: number, cy: number, w: number, h: number, label: string, size = 18, weight = 700, opacity = 0.08) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy + size * 0.36}" font-size="${size}" font-weight="${weight}" text-anchor="middle" fill="currentColor">${label}</text>`

/** Rounded box with two centred lines (bold title, smaller subtitle). */
const box2 = (cx: number, cy: number, w: number, h: number, l1: string, l2: string, s1 = 18, s2 = 14, opacity = 0.08) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy - 3}" font-size="${s1}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text><text x="${cx}" y="${cy + s2 + 5}" font-size="${s2}" text-anchor="middle" fill="currentColor">${l2}</text>`

/** Empty rounded rectangle (x, y = top-left). */
const rbox = (x: number, y: number, w: number, h: number, opacity = 0.08, sw = 2.5) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="${sw}"/>`

const txt = (x: number, y: number, size: number, s: string, attrs = '') =>
  `<text x="${x}" y="${y}" font-size="${size}"${attrs} fill="currentColor">${s}</text>`
const ctext = (x: number, y: number, size: number, s: string, attrs = '') => txt(x, y, size, s, ` text-anchor="middle"${attrs}`)
const rtext = (x: number, y: number, size: number, s: string, attrs = '') => txt(x, y, size, s, ` text-anchor="end"${attrs}`)
const bold = ' font-weight="700"'
const line = (x1: number, y1: number, x2: number, y2: number, marker?: string, w = 2.5, extra = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
/** Line with arrowheads at both ends. */
const dline = (x1: number, y1: number, x2: number, y2: number, marker: string, w = 2.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${w}" marker-start="url(#${marker})" marker-end="url(#${marker})"/>`
/** Open path (elbows, arcs), optional arrowhead. */
const path = (d: string, marker?: string, w = 2.5, extra = '') =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
const dot = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`
const panel = (x: number, y: number, w: number, h: number) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>`
const r1 = (n: number) => Math.round(n * 10) / 10

/** Ring vertices: n-gon of radius r, vertex 0 at angle `rot` degrees (−90 = top), clockwise on screen. */
const ringPts = (cx: number, cy: number, r: number, n: number, rot = -90) =>
  Array.from({ length: n }, (_, i) => {
    const a = ((rot + (i * 360) / n) * Math.PI) / 180
    return [r1(cx + r * Math.cos(a)), r1(cy + r * Math.sin(a))] as const
  })
/**
 * Skeletal ring: polygon edges plus an inner second line on each edge index in
 * `doubles` (edge i joins vertex i and vertex i+1).
 */
const ring = (cx: number, cy: number, r: number, n: number, doubles: number[], w = 3) => {
  const p = ringPts(cx, cy, r, n)
  const poly = `<polygon points="${p.map(([x, y]) => `${x},${y}`).join(' ')}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linejoin="round"/>`
  const inner = doubles
    .map((i) => {
      const [x1, y1] = p[i]
      const [x2, y2] = p[(i + 1) % n]
      const k = 0.2
      return line(r1(x1 + (cx - x1) * k), r1(y1 + (cy - y1) * k), r1(x2 + (cx - x2) * k), r1(y2 + (cy - y2) * k), undefined, w)
    })
    .join('')
  return poly + inner
}

/* 1 — Two stereocentres, four stereoisomers (lead, 1000×460) */
const stereoSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 36, 22, 'Two stereocentres: 2ⁿ = 2² = 4 stereoisomers', bold)}
<g class="fig-muted">${txt(40, 62, 16, '2,3,4-trihydroxybutanal — C2 and C3 each carry four different groups')}</g>
${box(150, 130, 180, 60, '2R, 3R', 22)}${box(450, 130, 180, 60, '2S, 3S', 22)}
${box(150, 330, 180, 60, '2R, 3S', 22)}${box(450, 330, 180, 60, '2S, 3R', 22)}
<g class="fig-accent-2"><defs>${ARROW('arr-oc-st-r')}</defs>
${dline(246, 130, 354, 130, 'arr-oc-st-r', 3)}${ctext(300, 112, 17, 'enantiomers', bold)}
${dline(246, 330, 354, 330, 'arr-oc-st-r', 3)}${ctext(300, 312, 17, 'enantiomers', bold)}</g>
<g class="fig-muted">${ctext(300, 154, 14, 'mirror images')}${ctext(300, 354, 14, 'mirror images')}</g>
<g class="fig-accent"><defs>${ARROW('arr-oc-st-b')}</defs>
${dline(150, 166, 150, 294, 'arr-oc-st-b', 3)}${dline(450, 166, 450, 294, 'arr-oc-st-b', 3)}
${dline(246, 166, 354, 294, 'arr-oc-st-b', 2)}${dline(354, 166, 246, 294, 'arr-oc-st-b', 2)}
<rect x="244" y="216" width="112" height="28" rx="6" class="fig-bg" stroke="none"/>
${ctext(300, 236, 16, 'diastereomers', bold)}
${rtext(140, 236, 16, 'diastereomers', bold)}${txt(460, 236, 16, 'diastereomers', bold)}</g>
<g class="fig-muted">${panel(600, 86, 370, 290)}</g>
${ctext(785, 118, 19, 'Read the pair', bold)}
<g class="fig-accent-2">${txt(620, 158, 17, 'Flip EVERY centre → enantiomers', bold)}</g>
<g class="fig-muted">${txt(620, 181, 15, 'same properties, opposite optical rotation')}</g>
<g class="fig-accent">${txt(620, 222, 17, 'Flip SOME, not all → diastereomers', bold)}</g>
<g class="fig-muted">${txt(620, 245, 15, 'different physical properties')}</g>
${txt(620, 290, 17, 'Meso: two identical halves', bold)}
<g class="fig-muted">${txt(620, 313, 15, 'make 2R,3S and 2S,3R one achiral molecule')}${txt(620, 336, 15, '→ only 3 stereoisomers, not 4')}</g>
${box(500, 422, 920, 44, 'Here the two ends differ (CHO vs CH₂OH): no internal mirror plane, so all 2² = 4 exist', 17, 700, 0.06)}
</svg>`

/* 2 — R/S, the lesson's worked example (lead, 1000×460) */
const hash = (x: number, yTop: number, yBottom: number) =>
  Array.from({ length: 7 }, (_, i) => {
    const y = r1(yBottom - (i * (yBottom - yTop)) / 6)
    const h = r1(2 + i * 2.3)
    return line(x - h, y, x + h, y, undefined, 2.5)
  }).join('')
const prio = (cx: number, cy: number, n: string) =>
  `<circle cx="${cx}" cy="${cy}" r="15" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>${ctext(cx, cy + 6, 17, n, bold)}`
const rsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 36, 22, 'R or S? The lesson’s example, step by step', bold)}
${ctext(250, 259, 26, 'C', bold)}
${line(232, 250, 162, 250, undefined, 3)}${ctext(138, 259, 26, 'Cl', bold)}
${line(268, 250, 338, 250, undefined, 3)}${ctext(376, 259, 26, 'CH₃', bold)}
${line(250, 270, 250, 330, undefined, 3)}${ctext(250, 362, 26, 'OH', bold)}
${hash(250, 166, 230)}${ctext(250, 152, 26, 'H', bold)}
<g class="fig-accent-2">${prio(138, 212, '1')}${prio(300, 360, '2')}${prio(376, 212, '3')}</g>
<g class="fig-muted">${prio(292, 146, '4')}${txt(312, 152, 14, 'dash = behind the page')}</g>
<g class="fig-accent"><defs>${ARROW('arr-oc-rs')}</defs>
${path('M128 285 C 140 450, 360 450, 372 285', 'arr-oc-rs', 3.5)}
${ctext(250, 446, 18, '1 → 2 → 3 runs counterclockwise', bold)}</g>
<g class="fig-muted">${panel(510, 62, 460, 300)}</g>
<g class="fig-accent-2">${prio(546, 106, '1')}${prio(546, 196, '2')}${prio(546, 286, '3')}</g>
${txt(574, 104, 18, 'Rank by atomic number', bold)}
<g class="fig-muted">${txt(574, 128, 16, 'Cl (17) > O (8) > C (6) > H (1)')}</g>
${txt(574, 194, 18, 'Point the lowest priority away', bold)}
<g class="fig-muted">${txt(574, 218, 16, 'H already sits on the dash, behind the page')}</g>
${txt(574, 284, 18, 'Trace 1 → 2 → 3', bold)}
<g class="fig-muted">${txt(574, 308, 16, 'clockwise = R  ·  counterclockwise = S')}</g>
<g class="fig-accent">${box(740, 408, 460, 56, 'Cl → OH → CH₃ turns counterclockwise: S', 20, 700, 0.1)}</g>
</svg>`

/* 3 — Substitution vs elimination: substrate first (replace-table, 560×440) */
const mechBox = (cx: number, cy: number, w: number, h: number, head: string, lines: string[], hs = 20) =>
  `${rbox(cx - w / 2, cy - h / 2, w, h, 0.1)}${ctext(cx, cy - h / 2 + hs + 6, hs, head, bold)}${lines
    .map((l, i) => ctext(cx, cy - h / 2 + hs + 26 + i * 17, 13, l))
    .join('')}`
const treeSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-oc-tr')}</defs>
${txt(16, 28, 18, 'Which mechanism? Read the substrate first', bold)}
${box(280, 66, 180, 38, 'Substrate?', 18)}
${line(240, 85, 110, 122, 'arr-oc-tr', 2.5)}${line(280, 85, 280, 122, 'arr-oc-tr', 2.5)}${line(320, 85, 450, 122, 'arr-oc-tr', 2.5)}
${box(95, 145, 156, 38, 'methyl / 1°', 17)}${box(280, 145, 160, 38, '2°', 17)}${box(465, 145, 156, 38, '3° (no SN2)', 17)}
${line(95, 164, 95, 196, 'arr-oc-tr', 2.5)}${line(280, 164, 280, 196, 'arr-oc-tr', 2.5)}${line(465, 164, 465, 190, 'arr-oc-tr', 2.5)}
<g class="fig-accent">${mechBox(95, 252, 160, 106, 'SN2', ['strong Nu⁻', 'polar aprotic', '1 step, backside', '→ inversion'])}</g>
<g class="fig-muted">${rbox(188, 199, 184, 106, 0.06)}</g>
${ctext(280, 222, 15, 'the reagent decides', bold)}
${ctext(280, 246, 13, 'strong base + heat → E2')}${ctext(280, 266, 13, 'strong Nu⁻, aprotic → SN2')}${ctext(280, 286, 13, 'weak, protic → SN1/E1')}
<g class="fig-accent-2">${mechBox(465, 231, 150, 76, 'E2', ['strong base', 'anti-periplanar'], 18)}</g>
${mechBox(465, 322, 150, 88, 'SN1 / E1', ['weak Nu/base, protic', 'carbocation → racemic', 'heat favours E1'], 17)}
${path('M543 145 L 553 145 L 553 322 L 545 322', 'arr-oc-tr', 2.5)}
<g class="fig-muted">${line(16, 382, 544, 382, undefined, 1.5)}</g>
${txt(16, 404, 14, 'rate = k[RX][Nu] → SN2 or E2: one concerted step', bold)}
${txt(16, 428, 14, 'rate = k[RX] → SN1 or E1: the carbocation forms first', bold)}
</svg>`

/* 4 — Reducing agents: how far each one reaches (lead, 1000×460) */
const COLS = [130, 290, 520, 680, 840]
const GROUPS: Array<[string, string]> = [
  ['Aldehyde', 'R–CHO'],
  ['Ketone', 'R–CO–R′'],
  ['Ester', 'R–COO–R′'],
  ['Acid', 'R–COOH'],
  ['Amide', 'R–CONH₂'],
]
const PRODUCTS: Array<[string, string]> = [
  ['1° alcohol', ''],
  ['2° alcohol', ''],
  ['1° alcohol', '+ R′OH'],
  ['1° alcohol', ''],
  ['amine', 'C=O → CH₂'],
]
const reduceSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 34, 22, 'Reducing agents — how far down the carbonyls each one reaches', bold)}
<g class="fig-muted">${ctext(210, 62, 15, 'aldehydes and ketones')}${ctext(680, 62, 15, 'acid derivatives and acids')}</g>
${GROUPS.map(([n, f], i) => box2(COLS[i], 110, 150, 64, n, f, 19, 15)).join('')}
<g class="fig-accent">${rbox(55, 168, 310, 48, 0.15)}${ctext(210, 199, 20, 'NaBH₄ · mild', bold)}</g>
<g class="fig-muted">${[2, 3, 4].map((i) => ctext(COLS[i], 198, 16, '✗ no reaction', bold)).join('')}</g>
<g class="fig-accent-2">${rbox(55, 234, 860, 48, 0.15)}${ctext(485, 265, 20, 'LiAlH₄ · strong — reduces every carbonyl here', bold)}</g>
<g class="fig-muted"><defs>${ARROW('arr-oc-red')}</defs>${COLS.map((x) => line(x, 288, x, 304, 'arr-oc-red', 2)).join('')}</g>
${PRODUCTS.map(([p, s], i) => ctext(COLS[i], 326, 17, p, bold) + (s ? `<g class="fig-muted">${ctext(COLS[i], 347, 14, s)}</g>` : '')).join('')}
${box2(485, 408, 920, 60, 'Keto-ester CH₃COCH₂COOCH₃ + NaBH₄: only the ketone becomes a 2° alcohol', 'LiAlH₄ would reduce the ester too — pick mild for selectivity, strong to reduce everything', 18, 15, 0.06)}
</svg>`

/* 5 — Derivative interconversions run downhill (lead, 1000×460) */
const LADDER: Array<[string, string]> = [
  ['Acid halide', 'leaves Cl⁻ — excellent'],
  ['Anhydride', 'leaves RCOO⁻ — good'],
  ['Ester', 'leaves RO⁻ — moderate'],
  ['Amide', 'leaves NH₂⁻ — terrible'],
  ['Carboxylate', 'the floor of the ladder'],
]
const interSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 34, 22, 'Interconversions only run downhill — toward a worse leaving group', bold)}
<g class="fig-muted"><defs>${ARROW('arr-oc-in-m')}</defs>${line(52, 82, 52, 398, 'arr-oc-in-m', 3)}
${ctext(200, 66, 14, 'most reactive', bold)}${ctext(200, 432, 14, 'least reactive', bold)}</g>
${LADDER.map(([n, s], i) => box2(200, 100 + i * 70, 230, 52, n, s, 18, 14)).join('')}
<g class="fig-accent"><defs>${ARROW('arr-oc-in')}</defs>
${path('M317 104 C 400 104, 400 236, 320 236', 'arr-oc-in', 3)}${txt(392, 176, 16, '+ R′OH', bold)}
${path('M317 246 C 400 246, 400 300, 320 300', 'arr-oc-in', 3)}${txt(392, 282, 16, '+ amine', bold)}
${path('M317 90 L 545 90 Q 560 90 560 105 L 560 304 Q 560 320 545 320 L 320 320', 'arr-oc-in', 3)}
${rtext(548, 196, 16, '+ R′NH₂', bold)}</g>
<g class="fig-muted">${rtext(548, 216, 14, 'peptide bond in lab')}</g>
<g class="fig-muted">${panel(600, 62, 370, 214)}</g>
${ctext(785, 92, 18, 'Breaking an ester', bold)}
${txt(620, 130, 16, 'ester + H₂O (acid or base)', bold)}
${txt(640, 154, 16, '→ carboxylic acid + ROH')}
<g class="fig-muted">${txt(640, 174, 14, 'hydrolysis')}</g>
${txt(620, 212, 16, 'ester + NaOH', bold)}
${txt(640, 236, 16, '→ carboxylate + ROH')}
<g class="fig-muted">${txt(640, 256, 14, 'saponification — soap making')}</g>
<g class="fig-accent-2">${rbox(600, 292, 370, 104, 0.08)}
${txt(620, 322, 17, 'Biochemistry: thioesters', bold)}</g>
${txt(620, 348, 15, 'acyl-CoA derivatives sit above esters:')}
${txt(620, 370, 15, 'the weak C–S bond makes them reactive')}
<g class="fig-muted">${txt(600, 432, 15, 'every step: a worse leaving group replaces a better one')}</g>
</svg>`

/* 6 — Hückel's rule as a π-electron count (lead, 1000×460) */
const px = (k: number) => 100 + (k - 2) * 65
const huckelSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 34, 22, 'Hückel: count the ring’s π electrons — 2, 6, 10 … are aromatic', bold)}
<g class="fig-accent">${ring(240, 160, 50, 6, [0, 2, 4])}</g>
${ctext(240, 240, 16, 'benzene', bold)}<g class="fig-muted">${ctext(240, 260, 14, '3 C=C → 6 π')}</g>
<g class="fig-accent">${ring(400, 166, 44, 5, [1, 3])}
${dot(393, 108, 3.5)}${dot(407, 108, 3.5)}
<circle cx="428" cy="112" r="11" fill="none" stroke="currentColor" stroke-width="2"/>${ctext(428, 117, 16, '−', bold)}</g>
${ctext(400, 240, 16, 'cyclopentadienyl anion', bold)}<g class="fig-muted">${ctext(400, 260, 14, '2 C=C + lone pair → 6 π')}</g>
<g class="fig-accent-2">${rbox(500, 118, 170, 96, 0.08)}${ctext(585, 146, 16, 'cyclooctatetraene', bold)}${ctext(585, 170, 15, '8 π electrons')}${ctext(585, 194, 15, 'anti-aromatic if planar', bold)}</g>
<g class="fig-muted">${line(250, 272, px(6) - 4, 310, undefined, 2, ' stroke-dasharray="5 5"')}${line(400, 272, px(6) + 4, 310, undefined, 2, ' stroke-dasharray="5 5"')}${line(560, 216, px(8) + 2, 310, undefined, 2, ' stroke-dasharray="5 5"')}</g>
${line(60, 320, 650, 320, undefined, 3)}
${[2, 4, 6, 8, 10].map((k) => line(px(k), 312, px(k), 328, undefined, 3) + ctext(px(k), 350, 18, String(k), bold)).join('')}
<g class="fig-muted">${txt(60, 300, 14, 'π electrons in the ring')}</g>
<g class="fig-accent">${[2, 6, 10].map((k, n) => ctext(px(k), 374, 15, 'aromatic', bold) + ctext(px(k), 394, 14, `n = ${n}`)).join('')}</g>
<g class="fig-accent-2">${[4, 8].map((k) => ctext(px(k), 374, 15, 'anti-aromatic', bold) + ctext(px(k), 394, 14, 'if planar')).join('')}</g>
<g class="fig-muted">${panel(690, 58, 280, 214)}</g>
${ctext(830, 90, 18, 'Aromatic needs all three', bold)}
<g class="fig-accent">${[130, 178, 226].map((y) => ctext(716, y, 20, '✓', bold)).join('')}</g>
${txt(736, 130, 16, 'a ring, flat (planar)')}
${txt(736, 178, 16, 'conjugated all the way round')}
${txt(736, 226, 16, '4n + 2 π electrons')}
${box2(830, 330, 280, 84, 'Cycloheptatriene (neutral)', 'one sp³ carbon breaks the loop', 16, 15, 0.06)}
<g class="fig-muted">${ctext(830, 396, 15, '→ nonaromatic, despite 6 π')}</g>
<g class="fig-muted">${txt(60, 436, 15, 'fail the count with 4n (4, 8 …) while flat and conjugated → anti-aromatic, destabilised')}</g>
</svg>`

/* 7 — EAS directing on two rings (replace-table, 560×440) */
const POS: Array<[number, string]> = [
  [1, 'o'],
  [2, 'm'],
  [3, 'p'],
  [4, 'm'],
  [5, 'o'],
]
const easRing = (cx: number, cy: number, sub: string, hit: string[], cls: string) => {
  const r = 55
  const marks = POS.map(([i, l]) => {
    const a = ((-90 + i * 60) * Math.PI) / 180
    const x = r1(cx + (r + 24) * Math.cos(a))
    const y = r1(cy + (r + 24) * Math.sin(a))
    return hit.includes(l)
      ? `<g class="${cls}"><circle cx="${x}" cy="${y}" r="14" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>${ctext(x, y + 6, 17, l, bold)}</g>`
      : `<g class="fig-muted">${ctext(x, y + 6, 17, l)}</g>`
  }).join('')
  return `${ring(cx, cy, r, 6, [1, 3, 5])}${line(cx, cy - r, cx, cy - r - 30, undefined, 3)}${ctext(cx, cy - r - 38, 16, sub, bold)}${marks}`
}
const easSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${txt(16, 28, 18, 'Where does E⁺ go? The substituent decides', bold)}
${easRing(140, 180, '–OH, –NH₂, –OR, alkyl', ['o', 'p'], 'fig-accent')}
${easRing(420, 180, '–NO₂, –CF₃', ['m'], 'fig-accent-2')}
<g class="fig-accent">${ctext(140, 300, 17, 'activating → ortho/para', bold)}</g>
<g class="fig-muted">${ctext(140, 320, 14, 'faster: stabilises the sigma complex')}</g>
<g class="fig-accent-2">${ctext(420, 300, 17, 'deactivating → meta', bold)}</g>
<g class="fig-muted">${ctext(420, 320, 14, 'slower: destabilises it')}</g>
${box2(280, 384, 528, 66, 'Halogens (–Cl, –Br): the exception', 'deactivating by induction, yet ortho/para by resonance', 17, 15, 0.08)}
</svg>`

/* 8 — The two worked NMR spectra (lead, 1000×460) */
const dx = (d: number) => r1(640 - 110 * d)
const multiplet = (d: number, heights: number[], base: number, gap = 12) =>
  heights
    .map((h, i) => {
      const x = r1(dx(d) + (i - (heights.length - 1) / 2) * gap)
      return line(x, base, x, base - h, undefined, 3)
    })
    .join('')
const axis = (base: number) =>
  `${line(80, base, 660, base, undefined, 2.5)}<g class="fig-muted">${[5, 4, 3, 2, 1, 0]
    .map((d) => line(dx(d), base, dx(d), base + 7, undefined, 2) + ctext(dx(d), base + 24, 14, d === 0 ? '0 ppm' : String(d)))
    .join('')}</g>`
const nmrSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 32, 22, 'Two worked spectra: split, integrate, then name the piece', bold)}
${axis(200)}
<g class="fig-accent">${multiplet(3.6, [26, 78, 78, 26], 200)}${ctext(dx(3.6), 108, 17, 'quartet · 2H', bold)}</g>
<g class="fig-accent-2">${multiplet(1.2, [44, 88, 44], 200)}${ctext(dx(1.2), 98, 17, 'triplet · 3H', bold)}</g>
<g class="fig-muted">${txt(80, 70, 15, 'A', bold)}${line(40, 240, 960, 240, undefined, 1.5)}${txt(80, 274, 15, 'B   C₄H₁₀O', bold)}</g>
${axis(410)}
<g class="fig-accent">${multiplet(1.2, [110], 410)}${ctext(dx(1.2), 288, 17, 'singlet · 9H', bold)}</g>
<g class="fig-accent-2">${path(`M${dx(2.5)} 410 C ${dx(2.2)} 410, ${dx(2.2)} 384, ${dx(2)} 384 C ${dx(1.8)} 384, ${dx(1.8)} 410, ${dx(1.5)} 410`, undefined, 3, ' stroke-dasharray="6 4"')}
${ctext(dx(2), 352, 15, 'broad 1H', bold)}${ctext(dx(2), 370, 14, 'gone with D₂O')}</g>
${txt(690, 80, 20, 'A → CH₃CH₂O–', bold)}
<g class="fig-muted">${txt(690, 108, 15, 'quartet 2H at 3.6: a CH₂ beside O')}${txt(690, 128, 15, 'with 3 neighbours (n + 1 = 4)')}
${txt(690, 156, 15, 'triplet 3H at 1.2: a CH₃')}${txt(690, 176, 15, 'with 2 neighbours (n + 1 = 3)')}</g>
${txt(690, 300, 20, 'B → (CH₃)₃C–OH', bold)}
<g class="fig-muted">${txt(690, 328, 15, '9H singlet at 1.2: three equal CH₃,')}${txt(690, 348, 15, '0 neighbours (n + 1 = 1)')}
${txt(690, 376, 15, 'broad 1H that D₂O erases: O–H')}</g>
</svg>`

/* 9 — Side-chain charge against pH (lead, 1000×460) */
const ph = (v: number) => r1(150 + 55 * v)
type Seg = [from: number, to: number, label: string, cls: string]
const row = (y: number, name: string, pka: string, pkaX: number, segs: Seg[]) =>
  `${txt(24, y + 2, 20, name, bold)}<g class="fig-muted">${txt(24, y + 22, 14, `pKa ${pka}`)}${ctext(pkaX, y - 30, 14, pka, bold)}</g>${segs
    .map(([a, b, l, cls]) => `<g class="${cls}">${rbox(ph(a), y - 23, ph(b) - ph(a), 46, cls === 'fig-muted' ? 0.06 : 0.16, 2)}${ctext(r1((ph(a) + ph(b)) / 2), y + 6, 16, l, bold)}</g>`)
    .join('')}`
const chargeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 34, 22, 'Charge at pH 7.4: compare the pH with each side chain’s pKa', bold)}
<g class="fig-muted">${txt(40, 60, 16, 'pH below pKa → protonated  ·  pH above pKa → deprotonated')}</g>
${row(130, 'Glu', '4.1', ph(4.1), [
  [0, 4.1, '–COOH · 0', 'fig-muted'],
  [4.1, 14, '–COO⁻ · −1', 'fig-accent-2'],
])}
${row(210, 'His', '≈ 6', ph(6), [
  [0, 6, 'protonated · +1', 'fig-accent'],
  [6, 14, 'neutral · 0', 'fig-muted'],
])}
${row(290, 'Lys', '10.5', ph(10.5), [
  [0, 10.5, '–NH₃⁺ · +1', 'fig-accent'],
  [10.5, 14, '–NH₂ · 0', 'fig-muted'],
])}
${line(ph(7.4), 92, ph(7.4), 330, undefined, 3, ' stroke-dasharray="7 5"')}
${txt(ph(7.4) + 8, 90, 15, 'pH 7.4 (blood)', bold)}
<g class="fig-accent-2">${dot(ph(7.4), 130, 8)}</g><g class="fig-muted">${dot(ph(7.4), 210, 8)}</g><g class="fig-accent">${dot(ph(7.4), 290, 8)}</g>
${line(ph(0), 350, ph(14), 350, undefined, 2.5)}
<g class="fig-muted">${[0, 2, 4, 6, 8, 10, 12, 14].map((v) => line(ph(v), 350, ph(v), 358, undefined, 2) + ctext(ph(v), 376, 15, String(v))).join('')}</g>
${txt(ph(14) + 12, 356, 16, 'pH', bold)}
${box(500, 422, 920, 44, 'At pH 7.4: Glu −1 and Lys +1 pair up as salt bridges; His (pKa ≈ 6) sits near its switch', 16, 700, 0.06)}
</svg>`

export const mcatOrganicChemistryFigures: DeckFigurePlacement[] = [
  {
    at: 'Stereochemistry',
    mode: 'lead',
    figure: {
      svg: stereoSvg,
      alt:
        'The four stereoisomers of 2,3,4-trihydroxybutanal, which has two stereocentres (C2 and C3), drawn as the corners of a square: 2R,3R and 2S,3S across the top, 2R,3S and 2S,3R across the bottom. The top pair and the bottom pair are joined in red as enantiomers (mirror images). The two sides and both diagonals are joined in blue as diastereomers. A panel reads: flip every centre and you get the enantiomer — same properties, opposite optical rotation; flip some but not all and you get a diastereomer — different physical properties; meso: when the two halves are identical, 2R,3S and 2S,3R are one achiral molecule, so only 3 stereoisomers, not 4. Footer: here the two ends differ (CHO vs CH₂OH), there is no internal mirror plane, so all 2² = 4 exist.',
      caption: 'The 2ⁿ stereoisomers of the lesson’s two-centre sugar as a square: flipping every centre gives the enantiomer, flipping some gives a diastereomer.',
    },
    blocks: [
      '- $2^n$ stereoisomers at most: enantiomers flip EVERY centre, diastereomers flip only some',
      '- Meso: identical halves turn one R,S pair into a single achiral molecule — fewer than $2^n$',
    ],
  },
  {
    at: 'R/S Assignment',
    mode: 'lead',
    figure: {
      svg: rsSvg,
      alt:
        'The lesson’s worked example: a central carbon with Cl to the left, CH₃ to the right, OH below and H above on a hashed (dashed) bond pointing behind the page. Priority circles: Cl 1, OH 2, CH₃ 3, H 4. A blue curved arrow runs from Cl down under OH and up to CH₃: 1 → 2 → 3 runs counterclockwise. Steps on the right: 1, rank by atomic number, Cl (17) > O (8) > C (6) > H (1); 2, point the lowest priority away — H already sits on the dash, behind the page; 3, trace 1 → 2 → 3, clockwise = R, counterclockwise = S. Result: Cl → OH → CH₃ turns counterclockwise, so the centre is S.',
      caption: 'The lesson’s Example 1 drawn out: with H on the dash, Cl → OH → CH₃ runs counterclockwise, so the carbon is S.',
    },
    blocks: [
      '- Rank by atomic number, put priority 4 in the back, trace 1 → 2 → 3: clockwise R, counterclockwise S',
    ],
  },
  {
    at: 'Substitution vs. Elimination Decision Tree',
    mode: 'replace-table',
    figure: {
      svg: treeSvg,
      alt:
        'A flowchart that starts with the substrate. Methyl or 1° leads to SN2: strong nucleophile, polar aprotic solvent, one step with backside attack, inversion. 2°: the reagent decides — strong base plus heat gives E2, a strong nucleophile in an aprotic solvent gives SN2, a weak one in a protic solvent gives SN1/E1. 3° (no SN2, too hindered) splits two ways: a strong base gives E2 (anti-periplanar); a weak nucleophile or base in a protic solvent gives SN1/E1 through a carbocation, racemic product, with heat favouring E1. Footer: rate = k[RX][Nu] means SN2 or E2, one concerted step; rate = k[RX] means SN1 or E1, the carbocation forms first.',
      caption: 'The four-mechanism table as a decision tree: classify the substrate, then let the reagent and solvent settle it.',
    },
    blocks: [
      '- SN2: methyl/1°, strong Nu⁻, polar aprotic — inversion',
      '- SN1: 3°, weak Nu, polar protic — racemization',
      '- E2: 3° (or 2°), strong base — one step, anti-periplanar',
      '- E1: 3°, weak base, protic, heat — SN1’s carbocation',
    ],
  },
  {
    at: 'MCAT High Yield: Reducing Agents',
    mode: 'lead',
    figure: {
      svg: reduceSvg,
      alt:
        'Five carbonyl groups in a row: aldehyde R–CHO and ketone R–CO–R′ (aldehydes and ketones), then ester R–COO–R′, acid R–COOH and amide R–CONH₂ (acid derivatives and acids). A blue NaBH₄ bar, mild, spans only the aldehyde and ketone; under the ester, acid and amide it reads no reaction. A red LiAlH₄ bar, strong, spans all five. Products below each: aldehyde → 1° alcohol, ketone → 2° alcohol, ester → 1° alcohol plus R′OH, acid → 1° alcohol, amide → amine (C=O becomes CH₂). Footer, the worked example: the keto-ester CH₃COCH₂COOCH₃ with NaBH₄ — only the ketone becomes a 2° alcohol; LiAlH₄ would reduce the ester too, so pick mild for selectivity and strong to reduce everything.',
      caption: 'NaBH₄ stops at aldehydes and ketones; LiAlH₄ reaches every carbonyl — which is why NaBH₄ can reduce a ketone and leave an ester alone.',
    },
    blocks: [
      '- NaBH₄ (mild): aldehydes and ketones only — esters, acids and amides survive',
      '- LiAlH₄ (strong): every carbonyl, including esters, carboxylic acids and amides',
    ],
  },
  {
    at: 'Key Interconversions',
    mode: 'lead',
    figure: {
      svg: interSvg,
      alt:
        'A vertical reactivity ladder, most reactive at the top: acid halide (leaves Cl⁻, excellent), anhydride (leaves RCOO⁻, good), ester (leaves RO⁻, moderate), amide (leaves NH₂⁻, terrible), carboxylate (the floor of the ladder). Blue arrows run only downward: acid halide + R′OH → ester; acid halide + R′NH₂ → amide (a peptide bond in the lab); ester + amine → amide. A panel, breaking an ester: ester + H₂O (acid or base) → carboxylic acid + ROH, hydrolysis; ester + NaOH → carboxylate + ROH, saponification (soap making). A red panel: biochemistry, thioesters (acyl-CoA derivatives) sit above esters because the weak C–S bond makes them reactive. Footer: every step, a worse leaving group replaces a better one.',
      caption: 'The lesson’s interconversions as moves on the reactivity ladder: each one swaps a better leaving group for a worse one, so they only run downhill.',
    },
    blocks: [
      '- Acid halide → ester or amide, ester → amide or acid: a derivative converts only to a LESS reactive one',
      '- Saponification: ester + NaOH → carboxylate + alcohol; thioesters (acyl-CoA) are more reactive than esters',
    ],
  },
  {
    at: 'Aromaticity Rules',
    mode: 'lead',
    figure: {
      svg: huckelSvg,
      alt:
        'A number line of π electrons in the ring, 2, 4, 6, 8, 10. The counts 2, 6 and 10 are labelled aromatic (n = 0, 1, 2) in blue; 4 and 8 are labelled anti-aromatic if planar in red. Above 6 sit benzene, a hexagon with three alternating C=C (6 π), and the cyclopentadienyl anion, a pentagon with two C=C and a lone pair with a negative charge on the fifth carbon (2 C=C plus the lone pair = 6 π). Above 8, a red box: cyclooctatetraene, 8 π electrons, anti-aromatic if planar. A panel: aromatic needs all three — a ring that is flat (planar), conjugated all the way round, and 4n + 2 π electrons. Below it: cycloheptatriene (neutral) — one sp³ carbon breaks the loop, so it is nonaromatic despite 6 π. Footer: with 4n electrons (4, 8 …) while flat and conjugated, a ring is anti-aromatic and destabilised.',
      caption: 'Hückel’s rule as a count: 6 π electrons in benzene and the cyclopentadienyl anion is aromatic, 8 in planar cyclooctatetraene is anti-aromatic.',
    },
    blocks: [
      '- Aromatic = planar ring + fully conjugated + $4n + 2$ π electrons (2, 6, 10 …)',
      '- Benzene and the cyclopentadienyl anion: 6 π ✓ · planar cyclooctatetraene: 8 π → anti-aromatic',
    ],
  },
  {
    at: 'Electrophilic Aromatic Substitution',
    mode: 'replace-table',
    figure: {
      svg: easSvg,
      alt:
        'Two benzene rings, each with one substituent at the top and the other ring positions labelled ortho (next to it), meta (one further) and para (opposite). Left ring, substituent –OH, –NH₂, –OR or alkyl: the two ortho positions and the para position are circled in blue — activating, directs ortho/para, faster because it stabilises the sigma complex. Right ring, substituent –NO₂ or –CF₃: the two meta positions are circled in red — deactivating, directs meta, slower because it destabilises it. Bottom box: halogens (–Cl, –Br) are the exception — deactivating by induction, yet ortho/para directing by resonance.',
      caption: 'The directing table on two rings: electron donors send E⁺ ortho/para, strong withdrawers send it meta, halogens slow the ring yet still direct ortho/para.',
    },
    blocks: [
      '- –OH, –NH₂, –OR: activating, ortho/para',
      '- –CH₃ / alkyl: weakly activating, ortho/para',
      '- –NO₂, –CF₃: deactivating, meta',
      '- Halogens: deactivating BUT ortho/para',
    ],
  },
  {
    at: 'Worked Examples — Spectroscopy',
    mode: 'lead',
    figure: {
      svg: nmrSvg,
      alt:
        'Two schematic ¹H NMR spectra on a ppm axis running from 5 on the left to 0 on the right. Spectrum A: a blue quartet integrating to 2H at 3.6 ppm and a red triplet integrating to 3H at 1.2 ppm; read as CH₃CH₂O– — the quartet 2H at 3.6 is a CH₂ beside oxygen with 3 neighbours (n + 1 = 4), the triplet 3H at 1.2 is a CH₃ with 2 neighbours (n + 1 = 3). Spectrum B, formula C₄H₁₀O: a tall singlet integrating to 9H at 1.2 ppm and a dashed broad 1H hump that is gone after a D₂O shake; read as (CH₃)₃C–OH — the 9H singlet is three equal CH₃ groups with 0 neighbours (n + 1 = 1), and the broad 1H that D₂O erases is the O–H.',
      caption: 'The lesson’s Examples 2 and 3 as spectra: a 2H quartet with a 3H triplet is an ethyl group, a 9H singlet is a tert-butyl (schematic, not a real spectrum).',
    },
    blocks: [
      '- Splitting counts neighbours ($n + 1$), integration counts H, shift says what is nearby (3.6 ppm: beside O)',
      '- D₂O erases exchangeable O–H and N–H signals',
    ],
  },
  {
    at: 'Worked Example — Predicting an Amino Acid',
    mode: 'lead',
    figure: {
      svg: chargeSvg,
      alt:
        'A pH axis from 0 to 14 with a bar for each side chain, split at its pKa. Glutamate, pKa 4.1: –COOH, charge 0, below 4.1; –COO⁻, charge −1, above it (red). Histidine, pKa ≈ 6: protonated, +1, below 6 (blue); neutral, 0, above it. Lysine, pKa 10.5: –NH₃⁺, +1, below 10.5 (blue); –NH₂, 0, above it. A dashed line at pH 7.4 (blood) crosses the Glu bar in its −1 part, the His bar just past its switch in the neutral part, and the Lys bar in its +1 part. Rule at the top: pH below pKa → protonated, pH above pKa → deprotonated. Footer: at pH 7.4, Glu −1 and Lys +1 pair up as salt bridges; His (pKa ≈ 6) sits near its switch.',
      caption: 'The worked example on a pH line: at 7.4 glutamate is past its pKa (−1), lysine is still below its pKa (+1), and histidine sits just past its switch.',
    },
    blocks: [
      '- pH below the pKa → protonated; pH above → deprotonated',
      '- At pH 7.4: Lys/Arg +1, Asp/Glu −1, His (pKa ≈ 6) near the transition',
    ],
  },
]
