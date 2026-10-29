import type { DeckFigurePlacement } from './index'

/**
 * Genetics & Evolution (7-part survey, MCAT B/B) — figures for the in-class
 * deck. Authored 2026-10-29.
 *
 * The dedicated decks (Mendelian, population genetics, natural selection,
 * speciation) draw the Punnett squares, crossing over + RF, pedigrees,
 * epistasis grids, ABO, the Hardy-Weinberg square, drift/bottleneck/founder,
 * gene flow, the selection modes, balancing selection, speciation modes and
 * phylogenetic trees — so the survey draws DIFFERENT views: meiosis as the
 * source of variation (two metaphase-I line-ups → 2ⁿ gametes → random
 * fertilization), the product-rule probability tree, mitochondria as an
 * egg-only inheritance, hemizygous males vs mosaic (X-inactivated) carrier
 * females, the four-question pedigree flowchart, the Hardy-Weinberg curves
 * against q, the four evolutionary mechanisms as before/after allele bars,
 * reproductive barriers on a mating → F2 timeline, and meiosis-I vs
 * meiosis-II nondisjunction read off the extra chromosome.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. Chromosomes are rods, cells are circles — no
 * realistic anatomy. The Hardy-Weinberg curves are mathematics, not data.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-ge-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Rounded box with a centred label (one line). */
const box = (cx: number, cy: number, w: number, h: number, label: string, size = 18, weight = 700, opacity = 0.08) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy + size * 0.36}" font-size="${size}" font-weight="${weight}" text-anchor="middle" fill="currentColor">${label}</text>`

/** Rounded box with two centred lines (bold title, smaller subtitle). */
const box2 = (cx: number, cy: number, w: number, h: number, l1: string, l2: string, s1 = 18, s2 = 13, opacity = 0.08) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy - 2}" font-size="${s1}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text><text x="${cx}" y="${cy + s2 + 6}" font-size="${s2}" text-anchor="middle" fill="currentColor">${l2}</text>`

const txt = (x: number, y: number, size: number, s: string, attrs = '') =>
  `<text x="${x}" y="${y}" font-size="${size}"${attrs} fill="currentColor">${s}</text>`
const ctext = (x: number, y: number, size: number, s: string, attrs = '') => txt(x, y, size, s, ` text-anchor="middle"${attrs}`)
const rtext = (x: number, y: number, size: number, s: string, attrs = '') => txt(x, y, size, s, ` text-anchor="end"${attrs}`)
const bold = ' font-weight="700"'
const line = (x1: number, y1: number, x2: number, y2: number, marker?: string, w = 2.5, extra = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`

/** A chromosome drawn as a rod: filled or hollow (two homologs), centred at x, from y to y + h. */
const rod = (x: number, y: number, h: number, filled: boolean, w = 12) =>
  `<rect x="${x - w / 2}" y="${y}" width="${w}" height="${h}" rx="${w / 2}" fill="currentColor" fill-opacity="${filled ? 1 : 0}" stroke="currentColor" stroke-width="2.5"/>`

/* 1 — Meiosis: where the laws come from, and how many gametes it can make (lead, 1000×460) */
const metaphaseCell = (cx: number, leftLong: boolean, leftShort: boolean) =>
  `<ellipse cx="${cx}" cy="165" rx="120" ry="78" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><line x1="${cx}" y1="95" x2="${cx}" y2="235" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5"/></g>
<g class="fig-accent">${rod(cx - 40, 100, 60, leftLong)}${rod(cx + 40, 100, 60, !leftLong)}
${rtext(cx - 52, 136, 18, leftLong ? 'A' : 'a', bold)}${txt(cx + 52, 136, 18, leftLong ? 'a' : 'A', bold)}</g>
<g class="fig-accent-2">${rod(cx - 40, 178, 38, leftShort)}${rod(cx + 40, 178, 38, !leftShort)}
${rtext(cx - 52, 203, 18, leftShort ? 'B' : 'b', bold)}${txt(cx + 52, 203, 18, leftShort ? 'b' : 'B', bold)}</g>`
const gamete = (cx: number, cy: number, label: string, r = 26) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>${ctext(cx, cy + 7, 19, label, bold)}`
const meiosisSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ge-mei')}</defs>
${txt(60, 40, 22, 'Meiosis is where Mendel’s laws come from — and why gametes differ', bold)}
<g class="fig-muted">${ctext(190, 78, 15, 'metaphase I, line-up 1')}${ctext(470, 78, 15, 'metaphase I, line-up 2')}</g>
${metaphaseCell(190, true, true)}
${metaphaseCell(470, true, false)}
${line(150, 247, 128, 272, 'arr-ge-mei')}${line(230, 247, 252, 272, 'arr-ge-mei')}
${line(430, 247, 408, 272, 'arr-ge-mei')}${line(510, 247, 532, 272, 'arr-ge-mei')}
${gamete(118, 300, 'AB')}${gamete(262, 300, 'ab')}${gamete(398, 300, 'Ab')}${gamete(542, 300, 'aB')}
${ctext(345, 362, 16, 'Two equally likely line-ups → 4 gamete types, 1 : 1 : 1 : 1', bold)}
<g class="fig-muted">${ctext(345, 388, 15, 'independent assortment · one allele of each gene per gamete (segregation)')}</g>
${box(800, 100, 300, 50, '2 pairs → 2² = 4 gamete types', 17)}
${line(800, 126, 800, 150, 'arr-ge-mei')}
${box2(800, 180, 300, 56, '23 pairs → 2²³ ≈ 8.4 million', 'from independent assortment alone', 17, 13)}
${line(800, 209, 800, 230, 'arr-ge-mei')}
${box2(800, 260, 300, 56, '× crossing over', 'new combinations within one chromosome', 17, 13)}
${line(800, 289, 800, 310, 'arr-ge-mei')}
<g class="fig-accent">${box2(800, 340, 300, 56, '× random fertilization', '8.4 million × 8.4 million ≈ 7 × 10¹³', 17, 13, 0.12)}</g>
<g class="fig-muted">${txt(60, 440, 15, 'Independent assortment holds for genes on different chromosomes; tightly linked genes travel together.')}</g>
</svg>`

/* 2 — The dihybrid worked example as a probability tree: product rule, then sum rule (after, 1000×460) */
const node = (cx: number, cy: number, label: string, w = 150) => box(cx, cy, w, 44, label, 17)
const branch = (x1: number, y1: number, x2: number, y2: number) => line(x1, y1, x2, y2, 'arr-ge-tree', 2.5)
const leaf = (y: number, product: string, pheno: string, hot = false) =>
  `${line(675, y, 718, y, 'arr-ge-tree')}${hot ? `<g class="fig-accent-2"><rect x="724" y="${y - 22}" width="236" height="44" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>${txt(734, y + 6, 18, product, bold)}</g>` : txt(734, y + 6, 18, product, bold)}<g class="fig-muted">${txt(734, y + (hot ? 38 : 26), 13, pheno)}</g>`
const treeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ge-tree')}</defs>
${txt(60, 40, 22, 'Product rule: one monohybrid cross per gene, then multiply', bold)}
${node(120, 240, 'TtRr × TtRr', 160)}
<g class="fig-muted">${ctext(120, 288, 13, 'two genes, two chromosomes')}</g>
${branch(200, 232, 283, 160)}${branch(200, 248, 283, 320)}
${ctext(232, 188, 17, '3/4', bold)}${ctext(232, 300, 17, '1/4', bold)}
${node(360, 150, 'tall (T_)')}${node(360, 330, 'short (tt)')}
${branch(435, 144, 523, 104)}${branch(435, 156, 523, 196)}
${branch(435, 324, 523, 284)}${branch(435, 336, 523, 376)}
${ctext(480, 112, 16, '3/4', bold)}${ctext(480, 190, 16, '1/4', bold)}
${ctext(480, 292, 16, '3/4', bold)}${ctext(480, 370, 16, '1/4', bold)}
${node(600, 100, 'round (R_)')}${node(600, 200, 'wrinkled (rr)')}
${node(600, 280, 'round (R_)')}${node(600, 380, 'wrinkled (rr)')}
${leaf(100, '3/4 × 3/4 = 9/16', 'tall, round')}
${leaf(200, '3/4 × 1/4 = 3/16', 'tall, wrinkled — the question', true)}
${leaf(280, '1/4 × 3/4 = 3/16', 'short, round')}
${leaf(380, '1/4 × 1/4 = 1/16', 'short, wrinkled')}
${txt(60, 436, 15, 'Sum rule — mutually exclusive classes add: P(at least one recessive trait) = 3/16 + 3/16 + 1/16 = 7/16')}
<g class="fig-muted">${rtext(960, 436, 15, '9 : 3 : 3 : 1')}</g>
</svg>`

/* 3 — Mitochondrial inheritance: the egg supplies every mitochondrion (lead, 1000×460) */
const MITO: [number, number][] = [[-52, -30], [-20, -55], [22, -48], [55, -22], [-60, 12], [58, 20], [-38, 44], [10, 56], [44, 46], [-8, -22], [30, 6]]
const mitos = (cx: number, cy: number, scale = 1) =>
  MITO.map(([dx, dy]) => `<ellipse cx="${cx + dx * scale}" cy="${cy + dy * scale}" rx="9" ry="5" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>`).join('')
const person = (cx: number, cy: number, male: boolean, affected: boolean) =>
  male
    ? `<rect x="${cx - 13}" y="${cy - 13}" width="26" height="26" fill="currentColor" fill-opacity="${affected ? 0.75 : 0}" stroke="currentColor" stroke-width="2.5"/>`
    : `<circle cx="${cx}" cy="${cy}" r="13" fill="currentColor" fill-opacity="${affected ? 0.75 : 0}" stroke="currentColor" stroke-width="2.5"/>`
const family = (y: number, motherAffected: boolean, children: boolean) =>
  `${person(780, y, false, motherAffected)}${person(900, y, true, !motherAffected)}
${line(793, y, 887, y, undefined, 2.5)}${line(840, y, 840, y + 40, undefined, 2.5)}${line(760, y + 40, 920, y + 40, undefined, 2.5)}
${line(760, y + 40, 760, y + 56, undefined, 2.5)}${line(840, y + 40, 840, y + 56, undefined, 2.5)}${line(920, y + 40, 920, y + 56, undefined, 2.5)}
${person(760, y + 70, true, children)}${person(840, y + 70, false, children)}${person(920, y + 70, true, children)}`
const mitoSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ge-mito')}</defs>
${txt(60, 40, 22, 'Mitochondria come from the egg, so mtDNA traits follow the mother', bold)}
${ctext(180, 96, 16, 'egg', bold)}
<circle cx="180" cy="210" r="86" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><circle cx="180" cy="210" r="20" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/></g>
${ctext(180, 215, 13, 'n', bold)}
<g class="fig-accent-2">${mitos(180, 210)}</g>
${ctext(330, 96, 22, '+')}
${ctext(410, 96, 16, 'sperm', bold)}
<circle cx="360" cy="210" r="15" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<rect x="375" y="203" width="34" height="14" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted"><ellipse cx="385" cy="210" rx="6" ry="3.5" fill="currentColor"/><ellipse cx="399" cy="210" rx="6" ry="3.5" fill="currentColor"/>
<path d="M409 210 C425 190 435 230 452 210 C462 198 470 218 482 206" fill="none" stroke="currentColor" stroke-width="2.5"/>
${ctext(410, 262, 13, 'its few mitochondria are')}${ctext(410, 278, 13, 'excluded or degraded')}</g>
<g class="fig-accent-2">${line(378, 197, 406, 223, undefined, 3)}${line(406, 197, 378, 223, undefined, 3)}</g>
${line(496, 210, 536, 210, 'arr-ge-mito', 3)}
${ctext(610, 96, 16, 'zygote', bold)}
<circle cx="610" cy="210" r="72" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><circle cx="610" cy="210" r="20" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/></g>
${ctext(610, 215, 13, '2n', bold)}
<g class="fig-accent-2">${mitos(610, 210, 0.8)}
${ctext(610, 318, 15, 'every mitochondrion is maternal', bold)}</g>
<g class="fig-accent-2">${family(110, true, true)}
${ctext(840, 230, 13, 'affected mother → ALL children affected', bold)}</g>
${family(270, false, false)}
<g class="fig-muted">${ctext(840, 390, 13, 'affected father → NO child affected')}</g>
<g class="fig-muted">${txt(60, 436, 15, 'Energy-hungry tissues (muscle, nerve) suffer first: myopathies, oxidative-phosphorylation disorders')}</g>
</svg>`

/* 4 — One X or two: hemizygous males vs mosaic carrier females (lead, 1000×460) */
const cell = (cx: number) => `<rect x="${cx - 100}" y="96" width="200" height="120" rx="22" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>`
const xlinkSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ge-x')}</defs>
${txt(60, 40, 22, 'One X or two: why X-linked recessive disease is mostly a male disease', bold)}
${ctext(190, 80, 18, 'Male Xᵃ Y', bold)}
${cell(190)}
<g class="fig-accent-2">${rod(160, 112, 86, false)}${txt(174, 160, 17, 'Xᵃ', bold)}</g>
${rod(236, 150, 48, true, 10)}${txt(248, 180, 15, 'Y', bold)}
${ctext(190, 246, 15, 'hemizygous: one copy, no backup')}
<g class="fig-accent-2">${ctext(190, 272, 17, 'affected', bold)}</g>
${ctext(500, 80, 18, 'Carrier female Xᴬ Xᵃ', bold)}
${cell(500)}
<g class="fig-accent">${rod(455, 112, 86, true)}${txt(469, 160, 17, 'Xᴬ', bold)}</g>
<g class="fig-accent-2"><circle cx="548" cy="156" r="12" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="2.5"/>${txt(566, 150, 13, 'Xᵃ silenced', bold)}${txt(566, 166, 13, '(Barr body)')}</g>
${ctext(500, 246, 15, 'one X per cell is switched off at random → mosaic')}
<g class="fig-accent">${ctext(500, 272, 17, 'usually unaffected', bold)}</g>
<g class="fig-muted">${ctext(345, 322, 15, 'A male shows Xᵃ every time; a female needs Xᵃ Xᵃ — one from EACH parent')}
${ctext(345, 348, 15, 'so an affected father makes every daughter at least a carrier')}</g>
${ctext(820, 80, 18, 'Transmission', bold)}
${box(820, 118, 150, 42, 'Father  X Y', 17)}
${line(790, 140, 740, 188, 'arr-ge-x')}${line(850, 140, 900, 188, 'arr-ge-x')}
${txt(738, 158, 16, 'X', bold)}${txt(886, 158, 16, 'Y', bold)}
${box(725, 212, 150, 42, 'every daughter', 16)}${box(915, 212, 120, 42, 'every son', 16)}
<g class="fig-accent-2">${ctext(820, 262, 14, 'no male-to-male X transmission', bold)}</g>
<g class="fig-accent">${box2(820, 322, 320, 56, 'Carrier mother Xᴬ Xᵃ', '½ of sons affected, ½ of daughters carriers', 17, 13, 0.1)}</g>
<g class="fig-muted">${txt(60, 436, 15, 'Common X-linked recessive: color blindness · hemophilia A/B · Duchenne muscular dystrophy · G6PD deficiency')}</g>
</svg>`

/* 5 — Reading a pedigree in four questions: a decision flow (lead, 1000×460) */
const QS: [string, string, string, string, string, string][] = [
  ['1 · Male → male?', 'father passes it to a son', 'YES → autosomal', 'X-linked is ruled out', 'NO → X-linked possible', 'keep testing'],
  ['2 · Skips generations?', 'appears, vanishes, returns', 'YES → recessive', 'carriers hide it', 'NO → likely dominant', 'seen in every generation'],
  ['3 · Mostly males?', 'count affected ♂ vs ♀', 'YES → X-linked recessive', 'carrier mother, ½ of sons', 'NO → autosomal', '(or X-linked dominant)'],
  ['4 · Unaffected parents,', 'affected child?', 'YES → recessive', 'both parents are carriers', 'NO → no new information', 'consistent with dominant'],
]
const flowSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ge-flow')}</defs>
${txt(60, 40, 22, 'Reading a pedigree in four questions', bold)}
${QS.map(([q1, q2, y1, y2, n1, n2], i) => {
  const cx = 160 + i * 230
  return `${line(cx, 164, cx, 310, undefined, 2.5)}<rect class="fig-bg" x="${cx - 105}" y="212" width="210" height="56" rx="11"/>
${box2(cx, 132, 210, 64, q1, q2, 17, 13)}
${i < 3 ? line(cx + 107, 132, cx + 121, 132, 'arr-ge-flow') : ''}
<g class="fig-accent">${box2(cx, 240, 210, 56, y1, y2, 15, 12, 0.12)}</g>
<g class="fig-muted">${box2(cx, 340, 210, 56, n1, n2, 15, 12, 0.06)}</g>`
}).join('')}
<g class="fig-accent"><defs>${ARROW('arr-ge-flow-b')}</defs>${[0, 1, 2, 3].map((i) => line(160 + i * 230, 166, 160 + i * 230, 208, 'arr-ge-flow-b')).join('')}</g>
<g class="fig-muted"><defs>${ARROW('arr-ge-flow-m')}</defs>${[0, 1, 2, 3].map((i) => line(160 + i * 230, 270, 160 + i * 230, 308, 'arr-ge-flow-m')).join('')}
${txt(60, 418, 15, 'X-linked dominant fingerprint: an affected father → ALL daughters affected, NO sons.')}
${txt(60, 442, 15, 'Autosomal dominant: every generation, about ½ of an affected parent’s children.')}</g>
</svg>`

/* 6 — Hardy-Weinberg genotype frequencies as q runs from 0 to 1 (replace-table, 560×440) */
const PX0 = 70, PX1 = 530, PY0 = 360, PY1 = 70
const px = (q: number) => PX0 + q * (PX1 - PX0)
const py = (f: number) => PY0 - f * (PY0 - PY1)
const curve = (f: (q: number) => number) => {
  const pts: string[] = []
  for (let i = 0; i <= 50; i++) {
    const q = i / 50
    pts.push(`${i === 0 ? 'M' : 'L'}${px(q).toFixed(1)} ${py(f(q)).toFixed(1)}`)
  }
  return `<path d="${pts.join(' ')}" fill="none" stroke="currentColor" stroke-width="3"/>`
}
const Q3 = 0.3
const dot = (f: number) => `<circle cx="${px(Q3).toFixed(1)}" cy="${py(f).toFixed(1)}" r="5" fill="currentColor"/>`
const hwSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ge-hw')}</defs>
${ctext(300, 28, 17, 'Genotype frequencies as q changes — always summing to 1', bold)}
${line(PX0, PY0, PX1 + 14, PY0, 'arr-ge-hw', 2)}${line(PX0, PY0, PX0, PY1 - 14, 'arr-ge-hw', 2)}
<g class="fig-muted">
${[0, 0.5, 1].map((v) => `${line(PX0 - 6, py(v), PX0, py(v), undefined, 2)}${rtext(PX0 - 10, py(v) + 5, 13, v === 1 ? '1.0' : v === 0 ? '0' : '0.5')}`).join('')}
${[0, 0.5, 1].map((v) => `${line(px(v), PY0, px(v), PY0 + 6, undefined, 2)}${ctext(px(v), PY0 + 22, 13, v === 1 ? '1.0' : v === 0 ? '0' : '0.5')}`).join('')}
${txt(78, 64, 13, 'frequency')}
${ctext(300, 404, 15, 'q — frequency of the recessive allele')}
<line x1="${px(Q3)}" y1="${PY0}" x2="${px(Q3)}" y2="${py((1 - Q3) ** 2) - 10}" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
${ctext(px(Q3), PY0 + 22, 13, 'q = 0.3')}
${curve((q) => (1 - q) ** 2)}${dot((1 - Q3) ** 2)}
${line(300, 92, 322, 92, undefined, 3)}${txt(328, 97, 14, 'p² = AA', bold)}
</g>
${txt(px(Q3) + 10, py((1 - Q3) ** 2) - 2, 13, '0.49', bold)}
<g class="fig-accent">${curve((q) => 2 * q * (1 - q))}${dot(2 * Q3 * (1 - Q3))}
${line(300, 112, 322, 112, undefined, 3)}${txt(328, 117, 14, '2pq = Aa (carriers)', bold)}
${txt(px(Q3) + 10, py(2 * Q3 * (1 - Q3)) + 16, 13, '0.42', bold)}</g>
<g class="fig-accent-2">${curve((q) => q * q)}${dot(Q3 * Q3)}
${line(300, 132, 322, 132, undefined, 3)}${txt(328, 137, 14, 'q² = aa', bold)}
${txt(px(Q3) + 10, py(Q3 * Q3) - 4, 13, '0.09', bold)}</g>
</svg>`

/* 7 — Four mechanisms of evolution as before → after allele bars (replace-table, 560×440) */
const bar = (x: number, y: number, parts: [number, 'b' | 'r' | 'g'][], w = 90, h = 20) => {
  let acc = 0
  const cls = { b: 'fig-accent', r: 'fig-accent-2', g: 'fig-muted' }
  const segs = parts
    .map(([f, c]) => {
      const sx = x + acc * w
      acc += f
      return `<g class="${cls[c]}"><rect x="${sx.toFixed(1)}" y="${y}" width="${(f * w).toFixed(1)}" height="${h}" fill="currentColor" fill-opacity="${c === 'g' ? 0.9 : 0.55}"/></g>`
    })
    .join('')
  return `${segs}<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>`
}
const panel = (x: number, y: number, name: string, sub: string, body: string) =>
  `<rect x="${x}" y="${y}" width="265" height="185" rx="14" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2"/>
${ctext(x + 132, y + 26, 16, name, bold)}<g class="fig-muted">${ctext(x + 132, y + 45, 12, sub)}</g>${body}`
const mechSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ge-mech')}</defs>
${ctext(280, 30, 17, 'Four ways allele frequencies change', bold)}
${panel(10, 48, 'Natural selection', 'adaptive — fitness decides', `<g class="fig-muted">${ctext(65, 106, 11, 'before')}${ctext(205, 106, 11, 'after')}</g>${bar(20, 112, [[0.5, 'b'], [0.5, 'r']])}${line(118, 122, 152, 122, 'arr-ge-mech')}${bar(160, 112, [[0.8, 'b'], [0.2, 'r']])}
${ctext(142, 170, 12, 'the fitter allele rises, generation after')}${ctext(142, 188, 12, 'generation, always in the same direction')}`)}
${panel(285, 48, 'Genetic drift', 'random — strongest when N is small', `${bar(295, 116, [[0.5, 'b'], [0.5, 'r']])}${line(393, 118, 427, 108, 'arr-ge-mech')}${line(393, 130, 427, 142, 'arr-ge-mech')}${bar(435, 98, [[0.7, 'b'], [0.3, 'r']])}${bar(435, 134, [[0.3, 'b'], [0.7, 'r']])}
${ctext(417, 180, 12, 'luck, not fitness: either way is possible')}${ctext(417, 198, 12, 'small samples swing furthest')}`)}
${panel(10, 248, 'Gene flow', 'migration — makes populations alike', `${bar(20, 306, [[0.9, 'b'], [0.1, 'r']])}${bar(20, 346, [[0.1, 'b'], [0.9, 'r']])}${line(118, 316, 152, 316, 'arr-ge-mech')}${line(118, 356, 152, 356, 'arr-ge-mech')}${bar(160, 306, [[0.6, 'b'], [0.4, 'r']])}${bar(160, 346, [[0.4, 'b'], [0.6, 'r']])}
<g class="fig-muted">${ctext(65, 340, 11, 'migrants')}</g>
${ctext(142, 398, 12, 'populations trade alleles → they converge')}`)}
${panel(285, 248, 'Mutation', 'random — the only source of NEW alleles', `${bar(295, 316, [[0.5, 'b'], [0.5, 'r']])}${line(393, 326, 427, 326, 'arr-ge-mech')}${bar(435, 316, [[0.48, 'b'], [0.48, 'r'], [0.04, 'g']])}
<g class="fig-muted"><defs>${ARROW('arr-ge-mech-m2')}</defs>${line(500, 362, 520, 340, 'arr-ge-mech-m2', 2)}${ctext(430, 378, 12, 'new allele a′ appears — rare, random')}</g>
${ctext(417, 404, 12, 'raw material for selection and drift')}`)}
</svg>`

/* 8 — Reproductive barriers on the road from courtship to the F2 (lead, 1000×460) */
const STAGES: [number, string][] = [[120, 'meet &amp; court'], [265, 'mating'], [410, 'fertilization'], [555, 'ZYGOTE'], [715, 'hybrid grows'], [880, 'hybrid breeds']]
const barrierSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ge-bar')}</defs>
${txt(60, 40, 22, 'Where the barrier acts: before the zygote forms, or after', bold)}
${line(60, 250, 952, 250, 'arr-ge-bar', 3)}
${STAGES.map(([x, s]) => `<rect class="fig-bg" x="${x - 58}" y="228" width="116" height="44" rx="11"/>` + box(x, 250, 116, 44, s, s === 'ZYGOTE' ? 17 : 15, 700, s === 'ZYGOTE' ? 0.18 : 0.08)).join('')}
<g class="fig-muted"><line x1="555" y1="104" x2="555" y2="400" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
${ctext(555, 94, 12, 'the zygote line')}</g>
<g class="fig-accent"><defs>${ARROW('arr-ge-bar-b')}</defs>
<path d="M60 86 V78 H480 V86" fill="none" stroke="currentColor" stroke-width="2.5"/>
${ctext(270, 66, 17, 'PREZYGOTIC — no zygote ever forms', bold)}
${ctext(120, 126, 15, 'temporal', bold)}${ctext(120, 148, 15, 'behavioral', bold)}${ctext(120, 170, 15, 'habitat', bold)}
${line(120, 182, 120, 222, 'arr-ge-bar-b')}
${ctext(265, 170, 15, 'mechanical', bold)}${line(265, 182, 265, 222, 'arr-ge-bar-b')}
${ctext(410, 170, 15, 'gametic', bold)}${line(410, 182, 410, 222, 'arr-ge-bar-b')}
</g>
<g class="fig-muted">${ctext(135, 108, 12, 'wrong season · song · place')}${ctext(265, 152, 12, 'parts don’t fit')}${ctext(410, 152, 12, 'sperm and egg can’t fuse')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-ge-bar-r')}</defs>
${line(635, 320, 635, 280, 'arr-ge-bar-r')}${ctext(635, 342, 15, 'hybrid inviability', bold)}
${line(795, 320, 795, 280, 'arr-ge-bar-r')}${ctext(795, 342, 15, 'hybrid sterility', bold)}
${line(925, 320, 925, 280, 'arr-ge-bar-r')}${ctext(925, 342, 14, 'hybrid breakdown', bold)}
<path d="M560 392 V400 H960 V392" fill="none" stroke="currentColor" stroke-width="2.5"/>
${ctext(760, 428, 17, 'POSTZYGOTIC — a hybrid forms but has low fitness', bold)}
</g>
<g class="fig-muted">${ctext(635, 362, 12, 'embryo dies')}${ctext(795, 362, 12, 'mule: horse × donkey')}${ctext(925, 362, 12, 'F2 weak or sterile')}
${ctext(230, 300, 13, 'barrier early = no wasted gametes or offspring')}</g>
</svg>`

/* 9 — Nondisjunction in meiosis I vs meiosis II, read off the extra chromosome (lead, 1000×460) */
const pair = (cx: number, y: number, h: number, filled: boolean) => `${rod(cx - 5, y, h, filled, 8)}${rod(cx + 5, y, h, filled, 8)}`
const ring = (cx: number, cy: number, r: number, red = false) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="${red ? 0.1 : 0.05}" stroke="currentColor" stroke-width="${red ? 3 : 2.5}"/>`
/** single chromosomes inside a gamete: 'F' filled, 'H' hollow */
const gameteCell = (cx: number, content: string) => {
  const n = content.length
  const rods = [...content].map((c, i) => rod(cx + (i - (n - 1) / 2) * 12, 308, 24, c === 'F', 7)).join('')
  return `${rods}`
}
const columnSvg = (cx: number, head: string, sub: string, left: string, right: string, g: string[], labels: string[], redIdx: number[], hallmark: string, hallmarkCls: string) =>
  `${ctext(cx, 72, 17, head, bold)}<g class="fig-muted">${ctext(cx, 90, 13, sub)}</g>
<ellipse cx="${cx}" cy="134" rx="70" ry="34" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">${pair(cx - 22, 116, 36, true)}${pair(cx + 22, 116, 36, false)}</g>
${line(cx - 28, 170, cx - 60, 190, 'arr-ge-nd')}${line(cx + 28, 170, cx + 60, 190, 'arr-ge-nd')}
${ring(cx - 75, 222, 30)}${ring(cx + 75, 222, 30)}
<g class="fig-accent">${left}${right}</g>
${line(cx - 85, 254, cx - 104, 278, 'arr-ge-nd')}${line(cx - 65, 254, cx - 46, 278, 'arr-ge-nd')}
${line(cx + 65, 254, cx + 46, 278, 'arr-ge-nd')}${line(cx + 85, 254, cx + 104, 278, 'arr-ge-nd')}
${[-110, -40, 40, 110].map((dx, i) => (redIdx.includes(i) ? `<g class="fig-accent-2">${ring(cx + dx, 320, 23, true)}</g>` : ring(cx + dx, 320, 23))).join('')}
<g class="fig-accent">${[-110, -40, 40, 110].map((dx, i) => gameteCell(cx + dx, g[i])).join('')}</g>
${[-110, -40, 40, 110].map((dx, i) => (redIdx.includes(i) ? `<g class="fig-accent-2">${ctext(cx + dx, 366, 15, labels[i], bold)}</g>` : ctext(cx + dx, 366, 15, labels[i], bold))).join('')}
<g class="${hallmarkCls}">${ctext(cx, 394, 13, hallmark, bold)}</g>`
const nondisjunctionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ge-nd')}</defs>
${txt(60, 36, 22, 'Nondisjunction in meiosis I vs meiosis II — read the extra copy', bold)}
<g class="fig-muted">${line(335, 60, 335, 404, undefined, 1.5)}${line(665, 60, 665, 404, undefined, 1.5)}</g>
${columnSvg(170, 'Normal meiosis', 'homologs part, then sisters part', pair(170 - 75, 206, 32, true), pair(170 + 75, 206, 32, false), ['F', 'F', 'H', 'H'], ['n', 'n', 'n', 'n'], [], 'four gametes, one copy each', 'fig-muted')}
${columnSvg(500, 'Meiosis I error', 'homologs fail to separate', `${pair(500 - 75 - 12, 206, 32, true)}${pair(500 - 75 + 12, 206, 32, false)}`, '', ['FH', 'FH', '', ''], ['n+1', 'n+1', 'n−1', 'n−1'], [0, 1, 2, 3], 'extra copy = BOTH homologs (non-identical)', 'fig-accent-2')}
${columnSvg(830, 'Meiosis II error', 'sister chromatids fail to separate', pair(830 - 75, 206, 32, true), pair(830 + 75, 206, 32, false), ['FF', '', 'H', 'H'], ['n+1', 'n−1', 'n', 'n'], [0, 1], 'extra copy = two IDENTICAL sister chromatids', 'fig-accent-2')}
${txt(60, 430, 15, 'n+1 gamete + normal gamete → trisomy, 47 chromosomes: trisomy 21 (Down), 47,XXY (Klinefelter)')}
${txt(60, 452, 15, 'n−1 gamete + normal gamete → monosomy, 45 chromosomes: 45,X (Turner), the only viable human monosomy')}
</svg>`

export const mcatGeneticsEvolutionFigures: DeckFigurePlacement[] = [
  {
    at: "Mendel's Laws",
    mode: 'lead',
    figure: {
      svg: meiosisSvg,
      alt:
        'Left, two metaphase-I cells for a parent AaBb. Each holds a long blue homolog pair (filled rod A, hollow rod a) and a short red pair (filled B, hollow b) on either side of a dashed metaphase plate. In line-up 1, A and B sit on the same side, so the gametes are AB and ab; in line-up 2, A sits with b, so the gametes are Ab and aB. Caption: two equally likely line-ups give 4 gamete types, 1:1:1:1 (independent assortment), and every gamete carries one allele of each gene (segregation). Right, a chain of boxes: 2 pairs → 2² = 4 gamete types; 23 pairs → 2²³ ≈ 8.4 million from independent assortment alone; × crossing over, new combinations within one chromosome; × random fertilization, 8.4 million × 8.4 million ≈ 7 × 10¹³ (blue). Footer: independent assortment holds for genes on different chromosomes; tightly linked genes travel together.',
      caption: 'Segregation and independent assortment are what metaphase I does: two line-ups of two pairs give four gamete types, and 23 pairs give 2²³ before crossing over and fertilization multiply it further.',
    },
    blocks: [
      '- **Segregation:** homologs part at anaphase I, so each gamete carries ONE allele of every gene',
      '- **Independent assortment:** each pair lines up at random → 2ⁿ gamete types (2²³ ≈ 8.4 million in humans)',
    ],
  },
  {
    at: 'Worked Example — Dihybrid Probability',
    mode: 'after',
    figure: {
      svg: treeSvg,
      alt:
        'A probability tree read left to right for the cross TtRr × TtRr. From the root, two branches for the height gene: tall (T_) with probability 3/4 and short (tt) with 1/4. From each, two branches for the seed gene: round (R_) 3/4 and wrinkled (rr) 1/4. Four leaves: 3/4 × 3/4 = 9/16 tall, round; 3/4 × 1/4 = 3/16 tall, wrinkled, boxed in red as the answer to the question; 1/4 × 3/4 = 3/16 short, round; 1/4 × 1/4 = 1/16 short, wrinkled — the 9:3:3:1 ratio. Footer, sum rule: mutually exclusive classes add, so P(at least one recessive trait) = 3/16 + 3/16 + 1/16 = 7/16.',
      caption: 'Product rule along a branch, sum rule across branches: the four leaves of this tree are the 9 : 3 : 3 : 1 ratio, and tall-and-wrinkled is the 3/16 leaf.',
    },
    blocks: [
      '- **Product rule (AND):** multiply along a path — P(tall) × P(wrinkled) = 3/4 × 1/4 = 3/16',
      '- **Sum rule (OR):** add mutually exclusive leaves — P(at least one recessive trait) = 7/16',
    ],
  },
  {
    at: 'Mitochondrial (Cytoplasmic) Inheritance',
    mode: 'lead',
    figure: {
      svg: mitoSvg,
      alt:
        'Left, a large egg cell full of red mitochondria around a nucleus n, plus a small sperm whose two grey midpiece mitochondria are crossed out in red, labelled excluded or degraded. An arrow leads to the zygote, 2n, which again contains only red mitochondria: every mitochondrion is maternal. Right, two three-child mini pedigrees: an affected mother (filled red circle) with an unaffected father has all three children affected (red); an affected father (filled square) with an unaffected mother has no affected children. Footer: energy-hungry tissues such as muscle and nerve suffer first — myopathies and oxidative-phosphorylation disorders.',
      caption: 'The sperm brings a nucleus, not mitochondria, so mtDNA is purely maternal: an affected mother passes the trait to every child, an affected father to none.',
    },
    blocks: [
      '- mtDNA comes only from the egg; sperm mitochondria are excluded or degraded after fertilization',
      '- Affected mother → ALL children; affected father → NONE — a pattern no nuclear gene can produce',
    ],
  },
  {
    at: 'X-Linked Inheritance',
    mode: 'lead',
    figure: {
      svg: xlinkSvg,
      alt:
        'Three panels. Male Xᵃ Y: a cell with one hollow red X rod labelled Xᵃ and a short Y rod — hemizygous, one copy and no backup, so he is affected (red). Carrier female Xᴬ Xᵃ: a cell with a filled blue Xᴬ rod and the Xᵃ condensed into a red Barr body, labelled Xᵃ silenced; one X per cell is switched off at random, making her a mosaic, usually unaffected (blue). Transmission: a Father X Y box sends its X to every daughter and its Y to every son, so there is no male-to-male X transmission (red); a blue box reads carrier mother Xᴬ Xᵃ: half of sons affected, half of daughters carriers. Notes: a male shows Xᵃ every time while a female needs Xᵃ Xᵃ, one from each parent, so an affected father makes every daughter at least a carrier. Footer lists color blindness, hemophilia A/B, Duchenne muscular dystrophy and G6PD deficiency.',
      caption: 'Why X-linked recessive traits land on males: one X means one copy and no backup, while a carrier female silences one X per cell and is usually fine — and a father’s X goes only to daughters.',
    },
    blocks: [
      '- Males are **hemizygous**: a single Xᵃ is expressed — no second X to mask it',
      '- A father gives his X to every daughter and his Y to every son → **no male-to-male** X-linked transmission',
    ],
  },
  {
    at: 'MCAT Pedigree Strategy',
    mode: 'lead',
    figure: {
      svg: flowSvg,
      alt:
        'Four question boxes in a row, each with a blue YES answer beneath and a grey NO answer below that. 1, Male → male? (a father passes it to a son): YES → autosomal, X-linked is ruled out; NO → X-linked still possible, keep testing. 2, Skips generations? (appears, vanishes, returns): YES → recessive, carriers hide it; NO → likely dominant, seen in every generation. 3, Mostly males? (count affected males vs females): YES → X-linked recessive, carrier mother, half of sons; NO → autosomal, or X-linked dominant. 4, Unaffected parents, affected child?: YES → recessive, both parents are carriers; NO → no new information, consistent with dominant. Footer: X-linked dominant fingerprint — an affected father → all daughters affected, no sons; autosomal dominant — every generation, about half of an affected parent’s children.',
      caption: 'The pedigree checklist as a flow: male-to-male transmission kills X-linked; skipped generations and affected children of unaffected parents mean recessive; a male excess points to X-linked recessive.',
    },
    blocks: [
      '- Ask in order: male → male? · skips generations? · mostly males? · unaffected parents with an affected child?',
      '- Male-to-male transmission rules out X-linkage; an affected child of unaffected parents proves recessive',
    ],
  },
  {
    at: 'Hardy-Weinberg Equilibrium',
    mode: 'replace-table',
    figure: {
      svg: hwSvg,
      alt:
        'A graph of genotype frequency (0 to 1) against q, the frequency of the recessive allele (0 to 1). Three curves: grey p² = AA falls from 1 at q = 0 to 0 at q = 1; red q² = aa rises from 0 to 1; blue 2pq = Aa (carriers) is a hump that peaks at 0.5 when q = 0.5. A dashed line at q = 0.3 marks the three values p² = 0.49, 2pq = 0.42 and q² = 0.09, which sum to 1. Near q = 0 the blue carrier curve is far above the red affected curve.',
      caption: 'Hardy-Weinberg as curves (mathematics, not data): at every q the three genotype frequencies sum to 1, carriers peak at 50% when q = 0.5, and for a rare allele almost every copy sits in a carrier.',
    },
    blocks: [
      '- $p + q = 1$ and $p^2 + 2pq + q^2 = 1$ — allele and genotype frequencies hold steady when nothing is evolving',
      '- $p^2$ homozygous dominant · $2pq$ heterozygous (carriers) · $q^2$ homozygous recessive',
      '- Carriers peak at 50% when $q = 0.5$; when $q$ is small, $2pq \\approx 2q$ dwarfs $q^2$',
    ],
  },
  {
    at: 'Mechanisms of Evolution',
    mode: 'replace-table',
    figure: {
      svg: mechSvg,
      alt:
        'Four panels, each showing an allele-frequency bar before and after (blue allele vs red allele). Natural selection (adaptive — fitness decides): 50/50 becomes 80/20 as the fitter allele rises in the same direction generation after generation. Genetic drift (random — strongest when N is small): 50/50 becomes either 70/30 or 30/70, by luck not fitness; small samples swing furthest. Gene flow (migration — makes populations alike): a 90/10 population and a 10/90 population trade migrants and end at 60/40 and 40/60, so differences shrink. Mutation (random — the only source of new alleles): a 50/50 bar gains a thin grey sliver, a new allele a′, rare and random, the raw material selection or drift then acts on.',
      caption: 'The same two-allele bar under each force: selection pushes one way, drift wobbles, gene flow blends two populations, and mutation adds a new sliver.',
    },
    blocks: [
      '- **Natural selection** — differential reproduction by fitness; the only ADAPTIVE mechanism',
      '- **Genetic drift** — random change in allele frequency; strongest in small populations',
      '- **Gene flow** — migration mixes alleles, making populations more alike',
      '- **Mutation** — the only source of NEW alleles; random, the raw material',
    ],
  },
  {
    at: 'Reproductive Barriers',
    mode: 'lead',
    figure: {
      svg: barrierSvg,
      alt:
        'A left-to-right timeline of boxes: meet and court, mating, fertilization, ZYGOTE (emphasized, with a dashed vertical line called the zygote line), hybrid grows, hybrid breeds. Above the line in blue, the prezygotic barriers point to the stage they block: temporal, behavioral and habitat isolation at meeting and courting (wrong season, wrong song, wrong place); mechanical isolation at mating (parts don’t fit); gametic isolation at fertilization (sperm and egg can’t fuse); a bracket reads PREZYGOTIC — no zygote ever forms. Below the line in red, after the zygote: hybrid inviability (embryo dies), hybrid sterility (mule: horse × donkey) and hybrid breakdown (F2 weak or sterile); a bracket reads POSTZYGOTIC — a hybrid forms but has low fitness. Note: a barrier early means no wasted gametes or offspring.',
      caption: 'Put every barrier on the timeline: anything that stops a zygote forming is prezygotic; anything that fails after the zygote — the embryo, the hybrid or its F2 — is postzygotic.',
    },
    blocks: [
      '- **Prezygotic** (no zygote): temporal · behavioral · habitat · mechanical · gametic',
      '- **Postzygotic** (hybrid forms, low fitness): inviability · sterility (the mule) · breakdown (weak F2)',
    ],
  },
  {
    at: 'Chromosomal Abnormalities',
    mode: 'lead',
    figure: {
      svg: nondisjunctionSvg,
      alt:
        'Three columns, each starting from one cell holding a homolog pair after replication: a filled blue pair of sister chromatids and a hollow blue pair. Normal meiosis: homologs part into two cells, then sisters part, giving four gametes with one copy each, n, n, n, n. Meiosis I error, homologs fail to separate: one cell gets both homologs and the other gets none, so the gametes are n+1, n+1 (each holding one filled and one hollow chromosome, in red), n−1, n−1 — the extra copy is both homologs, non-identical. Meiosis II error, sister chromatids fail to separate: meiosis I is normal, but one sister pair stays together, giving n+1 (two identical filled chromosomes), n−1 and two normal n gametes — the extra copy is two identical sister chromatids. Footer: an n+1 gamete plus a normal gamete gives trisomy, 47 chromosomes (trisomy 21, Down; 47,XXY, Klinefelter); an n−1 gamete plus a normal gamete gives monosomy, 45 chromosomes (45,X, Turner, the only viable human monosomy).',
      caption: 'Read the extra chromosome: two different homologs mean meiosis I failed, two identical sister chromatids mean meiosis II failed — either way an n+1 gamete makes a trisomy and an n−1 gamete a monosomy.',
    },
    blocks: [
      '- **Meiosis I** nondisjunction: homologs stay together → the extra copy is BOTH homologs (non-identical)',
      '- **Meiosis II** nondisjunction: sisters stay together → two IDENTICAL copies; n+1 → trisomy, n−1 → monosomy',
    ],
  },
]
