import type { DeckFigurePlacement } from './index'

/**
 * Stoichiometry & Chemical Reactions (MCAT C/P) — figures for the in-class
 * deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a conversion hub with
 * the factors on the arrows, chains of boxes for the empirical-formula and
 * gram-to-gram roadmaps, a particle picture of the limiting reagent, two
 * yield bars, a pictogram grid of reaction types, two beakers for dilution,
 * ion pills with the spectators struck out, a P–V–T–n diagram of the gas
 * laws) — no textbook, prep-company or AAMC figure was copied. The only
 * numbers drawn are the lesson's own (98.1 g/mol, 22.4 L/mol, the CH₂O and
 * C₄H₈ formula examples, the 9.80 g H₂SO₄ → 14.2 g Na₂SO₄ example, the
 * 2Al + 3Cl₂ limiting-reagent example, the 34.0 g / 27.2 g ammonia yield, the
 * 25.0 mL of 12.0 M → 300 mL dilution, the AgCl precipitation).
 *
 * Colours are consistent across the deck: the quantity that LIMITS or is lost
 * is RED (fig-accent-2), the product / the answer is BLUE (fig-accent), notes
 * and spectators grey (fig-muted), equations in the text colour.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-st-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A rounded box outlined in the current colour; `fillOpacity` > 0 tints it with the same colour. */
const BOX = (x: number, y: number, w: number, h: number, rx = 12, sw = 2.5, fillOpacity = 0, dashed = false) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A beaker open at the top (glass outline only). */
const BEAKER = (x: number, w: number, top: number, bottom: number) =>
  `<path d="M${x} ${top} L${x} ${bottom} L${x + w} ${bottom} L${x + w} ${top}" fill="none" stroke="currentColor" stroke-width="2.5"/>`

/** A circle with a short label inside, tinted in the current colour. */
const DOT = (cx: number, cy: number, r: number, label: string, size = 12) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2"/>${T(cx, cy + size * 0.36, size, label, 'middle', '700')}`

/** A box with a bold first line and a smaller second line, 180 wide. */
const CHAIN_BOX = (x: number, y: number, line1: string, line2: string, tinted: boolean, w = 180) =>
  `${tinted ? `<g class="fig-accent"><rect x="${x}" y="${y}" width="${w}" height="70" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/></g>` : BOX(x, y, w, 70, 10)}
${T(x + w / 2, y + 30, 17, line1, 'middle', '700')}${line2 ? T(x + w / 2, y + 55, 15, line2, 'middle') : ''}`

/* 1 — The mole as the conversion hub: grams ↔ moles ↔ particles ↔ litres at STP (lead, 1000×460) */
const hubSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-st-hub')}</defs>
<g class="fig-accent">
<rect x="410" y="180" width="180" height="80" rx="14" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
${T(500, 214, 24, 'moles (n)', 'middle', '700')}
${T(500, 244, 14, 'every route passes here', 'middle')}
</g>
${BOX(60, 180, 200, 80, 14)}
${T(160, 214, 22, 'grams', 'middle', '700')}
${T(160, 244, 14, 'mass on the balance', 'middle')}
${BOX(740, 180, 200, 80, 14)}
${T(840, 214, 22, 'particles', 'middle', '700')}
${T(840, 244, 14, 'atoms, molecules, ions', 'middle')}
${BOX(400, 34, 200, 70, 14)}
${T(500, 62, 20, 'litres of gas', 'middle', '700')}
${T(500, 88, 14, 'ideal gas at STP only', 'middle')}
${ARR(268, 205, 402, 205, 'arr-st-hub', 3)}
${T(335, 190, 17, '÷ M', 'middle', '700')}
${ARR(402, 238, 268, 238, 'arr-st-hub', 3)}
${T(335, 268, 17, '× M (g/mol)', 'middle', '700')}
${ARR(598, 205, 732, 205, 'arr-st-hub', 3)}
${T(665, 190, 17, '× 6.022 × 10²³', 'middle', '700')}
${ARR(732, 238, 598, 238, 'arr-st-hub', 3)}
${T(665, 268, 17, '÷ 6.022 × 10²³', 'middle', '700')}
${ARR(518, 178, 518, 108, 'arr-st-hub', 3)}
${T(530, 148, 17, '× 22.4 L/mol', 'start', '700')}
${ARR(482, 108, 482, 178, 'arr-st-hub', 3)}
${T(470, 148, 17, '÷ 22.4', 'end', '700')}
${T(500, 322, 19, '1 mol = 6.022 × 10²³ particles = M grams = 22.4 L of ideal gas at STP', 'middle', '700')}
${T(500, 356, 16, 'M = sum of atomic masses: H₂SO₄ = 2(1.0) + 32.1 + 4(16.0) = 98.1 g/mol', 'middle')}
<g class="fig-muted">
${T(500, 390, 15, 'STP on the MCAT = 0 °C and 1 atm; the 22.4 L step works for GASES only', 'middle')}
${T(500, 420, 15, '1 amu = 1 g/mol — the mole is the bridge from the atomic scale to the lab scale', 'middle')}
</g>
</svg>`

/* 2 — Empirical formula from % composition, then molecular formula by scaling (lead, 1000×460) */
const stepBox = (x: number, title: string, lines: string[], tinted: boolean) =>
  `${T(x + 80, 52, 15, title, 'middle', '700')}
${tinted ? `<g class="fig-accent"><rect x="${x}" y="64" width="160" height="96" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/></g>` : BOX(x, 64, 160, 96, 10)}
${lines.map((l, i) => T(x + 80, 94 + 28 * i, lines.length === 1 ? 26 : 15, l, 'middle', lines.length === 1 ? '700' : '400')).join('')}`
const formulaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-st-emp')}</defs>
${stepBox(16, '1. % by mass', ['C  40.0%', 'H  6.7%', 'O  53.3%'], false)}
${stepBox(218, '2. assume 100 g', ['C  40.0 g', 'H  6.7 g', 'O  53.3 g'], false)}
${stepBox(420, '3. ÷ atomic mass', ['C  40.0/12 = 3.33', 'H  6.7/1 = 6.7', 'O  53.3/16 = 3.33'], false)}
${stepBox(622, '4. ÷ smallest (3.33)', ['C  1', 'H  2', 'O  1'], false)}
${stepBox(824, 'empirical formula', ['CH₂O'], true)}
${[178, 380, 582, 784].map((x) => ARR(x, 112, x + 38, 112, 'arr-st-emp', 3)).join('')}
<g class="fig-muted">${T(500, 190, 14, 'a fraction in step 4 (e.g. 1.5) → multiply every number by 2 to clear it, then round', 'middle')}</g>
${T(30, 240, 18, 'molecular formula = empirical formula × n,   n = M(molecular) ÷ M(empirical)', 'start', '700')}
${BOX(30, 262, 150, 72, 10)}
${T(105, 292, 22, 'CH₂', 'middle', '700')}
${T(105, 320, 14, 'M = 14 g/mol', 'middle')}
${ARR(190, 298, 320, 298, 'arr-st-emp', 3)}
${T(255, 284, 15, '× 4', 'middle', '700')}
<g class="fig-muted">${T(255, 322, 13, '56 ÷ 14 = 4', 'middle')}</g>
<g class="fig-accent">
<rect x="330" y="262" width="150" height="72" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
${T(405, 292, 22, 'C₄H₈', 'middle', '700')}
${T(405, 320, 14, 'M = 56 g/mol', 'middle')}
</g>
${BOX(540, 262, 150, 72, 10)}
${T(615, 292, 22, 'CH₂O', 'middle', '700')}
${T(615, 320, 14, 'M = 30 g/mol', 'middle')}
${ARR(700, 298, 820, 298, 'arr-st-emp', 3)}
${T(760, 284, 15, '× 6', 'middle', '700')}
<g class="fig-muted">${T(760, 322, 13, '180 ÷ 30 = 6', 'middle')}</g>
<g class="fig-accent">
<rect x="830" y="262" width="150" height="72" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
${T(905, 292, 22, 'C₆H₁₂O₆', 'middle', '700')}
${T(905, 320, 14, 'glucose, M = 180', 'middle')}
</g>
${T(500, 380, 16, 'empirical = simplest whole-number ratio; molecular = the real count, always a whole multiple', 'middle')}
<g class="fig-muted">${T(500, 412, 15, 'many molecules share one empirical formula — the molar mass picks out which one', 'middle')}</g>
</svg>`

/* 3 — The gram-to-gram roadmap with the H₂SO₄ → Na₂SO₄ numbers (lead, 1000×460) */
const roadArrows = (y: number, labels: string[], marker: string) =>
  [222, 472, 722].map((x, i) => `${ARR(x, y + 35, x + 66, y + 35, marker, 3)}${T(x + 33, y - 8, 15, labels[i], 'middle', '700')}`).join('\n')
const roadmapSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-st-road')}</defs>
${T(500, 40, 20, 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O', 'middle', '700')}
<g class="fig-muted">${T(500, 64, 14, 'balanced first — the coefficients ARE the bridge between two substances', 'middle')}</g>
${CHAIN_BOX(40, 100, 'grams A', 'what you weigh', false)}
${CHAIN_BOX(290, 100, 'mol A', '', false)}
${CHAIN_BOX(540, 100, 'mol B', '', false)}
${CHAIN_BOX(790, 100, 'grams B', 'what is asked', false)}
${roadArrows(100, ['÷ M(A)', '× coeff B / coeff A', '× M(B)'], 'arr-st-road')}
${CHAIN_BOX(40, 240, '9.80 g H₂SO₄', '', true)}
${CHAIN_BOX(290, 240, '0.100 mol H₂SO₄', '', true)}
${CHAIN_BOX(540, 240, '0.100 mol Na₂SO₄', '', true)}
${CHAIN_BOX(790, 240, '14.2 g Na₂SO₄', '', true)}
${roadArrows(240, ['÷ 98.1', '× 1/1', '× 142'], 'arr-st-road')}
<g class="fig-muted">
${T(380, 332, 14, 'M(H₂SO₄) = 98.1 g/mol', 'middle')}
${T(630, 332, 14, '1 : 1 in the equation', 'middle')}
${T(880, 332, 14, 'M = 2(23) + 32 + 4(16) = 142', 'middle')}
</g>
<g class="fig-accent-2">${T(40, 385, 17, 'never grams → grams directly: the mole ratio only works in moles', 'start', '700')}</g>
${T(40, 415, 16, 'NaOH is in excess, so H₂SO₄ (the given reagent) sets how much Na₂SO₄ forms')}
<g class="fig-muted">${T(40, 442, 15, 'same chain for any pair: reactant → product, product → reactant, or reactant → reactant')}</g>
</svg>`

/* 4 — The limiting reagent as a particle picture: 2Al + 3Cl₂ → 2AlCl₃ with 0.200 mol of each (lead, 1000×460) */
const unitRow = (cy: number, groups: number[][], label: string, boxed: boolean, dashedLast = false) =>
  groups.map((g, gi) => {
    const x0 = g[0]
    const x1 = g[g.length - 1]
    const last = gi === groups.length - 1
    const box = boxed ? BOX(x0 - 24, cy - 26, x1 - x0 + 48, 52, 10, 1.5, 0, dashedLast && last) : ''
    return `${box}${g.map((cx) => DOT(cx, cy, 16, label, 11)).join('')}`
  }).join('')
const limitingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(30, 40, 18, '2Al + 3Cl₂ → 2AlCl₃    given 5.40 g Al and 14.2 g Cl₂', 'start', '700')}
<g class="fig-muted">
${T(30, 64, 14, 'each circle = 0.0333 mol; one run of the equation = 2 Al + 3 Cl₂ → 2 AlCl₃')}
${LINE(540, 80, 540, 440, 1.5)}
</g>
${T(30, 125, 15, 'Al  0.200 mol', 'start', '700')}
${unitRow(120, [[190, 230], [300, 340], [410, 450]], 'Al', true, true)}
<g class="fig-muted">${T(430, 170, 13, '0.0667 mol Al left over', 'middle')}</g>
<g class="fig-accent-2">
${T(30, 225, 15, 'Cl₂  0.200 mol', 'start', '700')}
${unitRow(220, [[190, 230, 270], [340, 380, 420]], 'Cl₂', true)}
${T(470, 225, 14, 'runs out', 'start', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-st-lim-b')}</defs>
${ARR(230, 254, 230, 294, 'arr-st-lim-b', 3)}
${ARR(380, 254, 380, 294, 'arr-st-lim-b', 3)}
${T(30, 335, 15, 'AlCl₃  0.133 mol', 'start', '700')}
${unitRow(330, [[190, 230], [340, 380]], 'AlCl₃', true)}
${T(470, 335, 14, '= 17.7 g', 'start', '700')}
</g>
<g class="fig-muted">
${T(220, 283, 12, 'run 1', 'end')}
${T(370, 283, 12, 'run 2', 'end')}
</g>
<g class="fig-accent-2">${T(30, 400, 16, 'the Cl₂ supply allows only 2 runs → Cl₂ is limiting', 'start', '700')}</g>
${T(30, 428, 14, '2 runs × 2 = 4 AlCl₃ circles = 0.133 mol; one Al pair is the excess')}
${T(560, 100, 19, 'the test: moles ÷ coefficient', 'start', '700')}
${T(560, 134, 16, 'Al:  5.40 ÷ 27.0 = 0.200 mol')}
${T(560, 158, 16, '0.200 ÷ 2 = 0.100 runs')}
<g class="fig-accent-2">
${T(560, 196, 16, 'Cl₂:  14.2 ÷ 70.9 = 0.200 mol', 'start', '700')}
${T(560, 220, 16, '0.200 ÷ 3 = 0.0667 runs ← smaller', 'start', '700')}
</g>
${T(560, 262, 17, 'smaller result = limiting reagent', 'start', '700')}
<g class="fig-accent">
${T(560, 300, 16, 'product from the LIMITING reagent only:', 'start', '700')}
${T(560, 324, 16, '0.200 mol Cl₂ × 2/3 = 0.133 mol AlCl₃')}
${T(560, 348, 16, '0.133 × 133.3 = 17.7 g AlCl₃')}
</g>
<g class="fig-muted">
${T(560, 392, 14, 'equal moles ≠ equal supply: the coefficients set the recipe')}
${T(560, 416, 14, 'with 21.3 g Cl₂ (0.300 mol) both ratios are 0.100:')}
${T(560, 438, 14, 'exact stoichiometric ratio — nothing left over')}
</g>
</svg>`

/* 5 — Percent yield as two bars: theoretical 34.0 g vs actual 27.2 g of NH₃ (lead, 1000×460). y = 400 − 8·grams */
const yieldSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-st-yield')}</defs>
${T(270, 40, 18, 'N₂ + 3H₂ → 2NH₃   with 1.00 mol N₂ limiting', 'middle', '700')}
${ARR(70, 400, 70, 70, 'arr-st-yield', 2.5)}
${T(70, 56, 14, 'g NH₃', 'middle')}
${LINE(70, 400, 470, 400, 2.5)}
<g class="fig-muted">
${[0, 10, 20, 30].map((g) => `${LINE(64, 400 - 8 * g, 76, 400 - 8 * g, 2)}${T(58, 405 - 8 * g, 13, String(g), 'end')}`).join('')}
${LINE(76, 128, 470, 128, 1.5, true)}
<rect x="120" y="128" width="110" height="272" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${T(175, 118, 15, 'theoretical', 'middle', '700')}
${T(175, 426, 15, '34.0 g', 'middle', '700')}
${T(175, 446, 13, '100% conversion', 'middle')}
${LINE(520, 30, 520, 440, 1.5)}
</g>
<g class="fig-accent">
<rect x="290" y="182" width="110" height="218" rx="4" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
${T(345, 172, 15, 'actual', 'middle', '700')}
${T(345, 426, 15, '27.2 g', 'middle', '700')}
${T(345, 446, 13, 'weighed in the lab', 'middle')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-st-yield-r')}</defs>
<path d="M412 128 L422 128 L422 182 L412 182" fill="none" stroke="currentColor" stroke-width="2"/>
${T(430, 150, 14, 'lost: 6.8 g', 'start', '700')}
${T(430, 168, 13, '(20%)', 'start')}
</g>
${T(345, 300, 22, '80%', 'middle', '700')}
${T(540, 80, 21, '% yield = actual ÷ theoretical × 100', 'start', '700')}
${T(540, 116, 17, 'theoretical: from the limiting reagent,')}
${T(540, 140, 17, '1.00 mol N₂ × 2 = 2.00 mol NH₃ × 17.0 = 34.0 g')}
<g class="fig-accent">${T(540, 176, 17, 'actual: measured — 27.2 g', 'start', '700')}</g>
${T(540, 218, 19, '27.2 ÷ 34.0 × 100 = 80%', 'start', '700')}
<g class="fig-accent-2">
${T(540, 262, 16, 'why less than 100%:', 'start', '700')}
${T(540, 286, 15, 'side reactions · incomplete reaction · losses on isolation')}
</g>
<g class="fig-muted">
${T(540, 330, 15, 'theoretical is a calculation, actual is a measurement;')}
${T(540, 352, 15, 'in practice % yield ≤ 100')}
${T(540, 390, 15, 'multi-step synthesis: apply % yield to each step')}
${T(540, 412, 15, 'separately — the losses compound')}
</g>
</svg>`

/* 6 — Reaction types as pictograms (replace-table, 560×440) */
/** Species letters keep one colour each across the grid: A blue, B red, C and D grey. */
const SPECIES_CLASS: Record<string, string> = { A: 'fig-accent', B: 'fig-accent-2', C: 'fig-muted', D: 'fig-muted' }
const single = (x: number, cy: number, a: string) =>
  `<g class="${SPECIES_CLASS[a]}"><circle cx="${x + 13}" cy="${cy}" r="13" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2"/>${T(x + 13, cy + 5, 13, a, 'middle', '700')}</g>`
/** Two touching circles = a compound AB. */
const pair = (x: number, cy: number, a: string, b: string) => `${single(x, cy, a)}${single(x + 24, cy, b)}`
const op = (x: number, cy: number, s: string) => T(x, cy + 6, 17, s, 'middle')
const smallBox = (x: number, cy: number, w: number, label: string) =>
  `${BOX(x, cy - 15, w, 30, 7, 1.8, 0.08)}${T(x + w / 2, cy + 5, 12, label, 'middle', '700')}`
const rowText = (cy: number, name: string, example: string) =>
  `${T(325, cy - 4, 14, name, 'start', '700')}${T(325, cy + 15, 13, example)}`
const typesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 26, 15, 'five patterns — spot the shape, then balance it', 'middle', '700')}
<g class="fig-muted">${[108, 184, 260, 336].map((y) => LINE(16, y, 544, y, 1)).join('')}</g>
${single(20, 70, 'A')}${op(58, 70, '+')}${single(70, 70, 'B')}${op(112, 70, '→')}${pair(128, 70, 'A', 'B')}
${rowText(70, 'Combination (synthesis)', '2Mg + O₂ → 2MgO')}
${pair(20, 146, 'A', 'B')}${op(86, 146, '→')}${single(102, 146, 'A')}${op(140, 146, '+')}${single(152, 146, 'B')}
${rowText(146, 'Decomposition', '2H₂O₂ → 2H₂O + O₂')}
${single(20, 222, 'A')}${op(58, 222, '+')}${pair(70, 222, 'B', 'C')}${op(134, 222, '→')}${pair(148, 222, 'A', 'C')}${op(210, 222, '+')}${single(222, 222, 'B')}
${rowText(222, 'Single displacement', 'Zn + 2HCl → ZnCl₂ + H₂')}
${pair(16, 298, 'A', 'B')}${op(76, 298, '+')}${pair(86, 298, 'C', 'D')}${op(150, 298, '→')}${pair(164, 298, 'A', 'D')}${op(224, 298, '+')}${pair(234, 298, 'C', 'B')}
${rowText(298, 'Double displacement', 'NaCl + AgNO₃ → AgCl↓ + NaNO₃')}
${smallBox(20, 374, 46, 'CₓHᵧ')}${op(78, 374, '+')}${smallBox(90, 374, 34, 'O₂')}${op(138, 374, '→')}${smallBox(152, 374, 42, 'CO₂')}${op(206, 374, '+')}${smallBox(218, 374, 44, 'H₂O')}
${rowText(374, 'Combustion', 'CH₄ + 2O₂ → CO₂ + 2H₂O')}
<g class="fig-muted">${T(280, 428, 13, 'combustion of CₓHᵧ: the O₂ coefficient is x + y/4', 'middle')}</g>
</svg>`

/* 7 — Dilution as two beakers: the same 0.300 mol of HCl in 25.0 mL and in 300 mL (lead, 1000×460). liquid areas 120×50 and 300×240 (×12) */
const dilutionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${BEAKER(80, 120, 160, 420)}
<rect x="81" y="370" width="118" height="49" fill="currentColor" fill-opacity="0.06"/>
${BEAKER(300, 300, 110, 420)}
<rect x="301" y="180" width="298" height="239" fill="currentColor" fill-opacity="0.06"/>
<g class="fig-accent">
${[90, 110, 130, 150, 170, 190].map((x) => `<circle cx="${x}" cy="385" r="6" fill="currentColor"/><circle cx="${x}" cy="405" r="6" fill="currentColor"/>`).join('')}
${[340, 415, 490, 565].map((x) => `<circle cx="${x}" cy="220" r="6" fill="currentColor"/><circle cx="${x}" cy="300" r="6" fill="currentColor"/><circle cx="${x}" cy="380" r="6" fill="currentColor"/>`).join('')}
</g>
${T(140, 128, 15, '25.0 mL of 12.0 M HCl', 'middle', '700')}
${T(140, 148, 14, 'concentrated', 'middle')}
${T(450, 78, 15, '300 mL of 1.00 M HCl', 'middle', '700')}
${T(450, 98, 14, 'dilute — same 12 dots, 12× the volume', 'middle')}
<g class="fig-muted">
<defs>${ARROW('arr-st-dil-m')}</defs>
${ARR(212, 260, 288, 260, 'arr-st-dil-m', 3)}
${T(250, 244, 14, '+ water', 'middle', '700')}
${T(250, 282, 13, 'to 300 mL', 'middle')}
${T(140, 445, 13, 'n = 12.0 × 0.0250 = 0.300 mol', 'middle')}
${T(450, 445, 13, 'n = 1.00 × 0.300 = 0.300 mol — unchanged', 'middle')}
${LINE(640, 30, 640, 440, 1.5)}
</g>
${T(660, 76, 24, 'M₁V₁ = M₂V₂', 'start', '700')}
${T(660, 104, 15, 'moles of solute don’t change: M × V = n')}
${T(660, 126, 15, 'before and after')}
${T(660, 168, 17, 'M₂ = 12.0 × 25.0 ÷ 300 = 1.00 M', 'start', '700')}
<g class="fig-muted">${T(660, 192, 14, 'mL on both sides is fine — the units cancel')}</g>
<g class="fig-accent">
${T(660, 232, 16, 'dilution factor 12:', 'start', '700')}
${T(660, 256, 16, 'volume × 12  →  concentration ÷ 12')}
</g>
${T(660, 296, 15, 'check: 0.300 mol in 0.300 L = 1.00 M')}
<g class="fig-accent-2">
${T(660, 340, 16, 'lab safety: add acid TO water,', 'start', '700')}
${T(660, 362, 16, 'never water to acid', 'start', '700')}
</g>
<g class="fig-muted">
${T(660, 406, 14, 'prepare a solution: n = M × V, then g = n × M')}
${T(660, 428, 14, '250 mL × 0.500 M NaOH = 0.125 mol → 5.00 g')}
</g>
</svg>`

/* 8 — Net ionic equation: the spectators cancel, Ag⁺ + Cl⁻ → AgCl(s) remains (lead, 1000×460) */
const pill = (x: number, y: number, w: number, label: string, solid = false) =>
  `<rect x="${x}" y="${y}" width="${w}" height="38" rx="19" fill="currentColor" fill-opacity="${solid ? 0.3 : 0.1}" stroke="currentColor" stroke-width="${solid ? 3 : 2}"/>${T(x + w / 2, y + 25, 16, label, 'middle', '700')}`
const strike = (x: number, y: number, w: number) =>
  `<g class="fig-accent-2">${LINE(x + 6, y + 36, x + w - 6, y + 2, 3)}</g>`
const netIonicSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(30, 46, 16, '1. molecular equation', 'start', '700')}
${T(515, 82, 21, 'AgNO₃(aq)  +  NaCl(aq)  →  AgCl(s)  +  NaNO₃(aq)', 'middle')}
${T(30, 146, 16, '2. complete ionic — split every strong electrolyte that is (aq)', 'start', '700')}
<g class="fig-accent">${pill(60, 170, 76, 'Ag⁺')}</g>
${T(152, 197, 20, '+', 'middle')}
<g class="fig-muted">${pill(168, 170, 84, 'NO₃⁻')}</g>
${T(268, 197, 20, '+', 'middle')}
<g class="fig-muted">${pill(284, 170, 76, 'Na⁺')}</g>
${T(376, 197, 20, '+', 'middle')}
<g class="fig-accent-2">${pill(392, 170, 76, 'Cl⁻')}</g>
${T(495, 197, 22, '→', 'middle')}
${pill(524, 170, 100, 'AgCl(s)', true)}
${T(640, 197, 20, '+', 'middle')}
<g class="fig-muted">${pill(656, 170, 76, 'Na⁺')}</g>
${T(748, 197, 20, '+', 'middle')}
<g class="fig-muted">${pill(764, 170, 84, 'NO₃⁻')}</g>
${strike(168, 170, 84)}${strike(284, 170, 76)}${strike(656, 170, 76)}${strike(764, 170, 84)}
<g class="fig-accent-2">${T(870, 195, 15, '← spectators:', 'start', '700')}${T(870, 215, 14, 'same on both sides')}</g>
${T(30, 278, 16, '3. net ionic — only the species that change', 'start', '700')}
<g class="fig-accent"><rect x="220" y="290" width="470" height="70" rx="14" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-accent">${pill(250, 306, 76, 'Ag⁺')}</g>
${T(342, 333, 20, '+', 'middle')}
<g class="fig-accent-2">${pill(358, 306, 76, 'Cl⁻')}</g>
${T(462, 333, 22, '→', 'middle')}
${pill(496, 306, 160, 'AgCl(s) precipitate', true)}
<g class="fig-muted">
${T(720, 322, 14, 'Na⁺ and NO₃⁻ dropped;')}
${T(720, 342, 14, 'charge still balances (+1 −1 → 0)')}
</g>
${T(30, 405, 15, 'split ONLY strong electrolytes marked (aq); solids, gases, liquids and weak electrolytes stay whole — AgCl(s) does')}
<g class="fig-muted">${T(30, 435, 15, 'KNO₃(aq) + NaCl(aq): every possible product is soluble → all four ions are spectators → no reaction')}</g>
</svg>`

/* 9 — The gas laws as a P–V–T–n diagram: fix two variables, relate the other two (replace-table, 560×440) */
const node = (cx: number, cy: number, label: string, sub: string, subX: number, subY: number, subAnchor: 'start' | 'middle' | 'end') =>
  `<circle cx="${cx}" cy="${cy}" r="34" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>${T(cx, cy + 10, 28, label, 'middle', '700')}<g class="fig-muted">${T(subX, subY, 13, sub, subAnchor)}</g>`
const edgeLabel = (cx: number, cy: number, w: number, text: string) =>
  `<rect class="fig-bg" x="${cx - w / 2}" y="${cy - 12}" width="${w}" height="24" rx="12" stroke="currentColor" stroke-width="1.5"/>${T(cx, cy + 5, 13, text, 'middle', '700')}`
const gasLawsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 30, 15, 'PV = nRT — fix two, relate the other two', 'middle', '700')}
${LINE(114, 100, 446, 100, 2.5)}
${LINE(108.5, 118.5, 251.5, 211.5, 2.5)}
${LINE(451.5, 118.5, 308.5, 211.5, 2.5)}
${LINE(280, 264, 280, 336, 2.5)}
${node(80, 100, 'P', 'pressure', 80, 156, 'middle')}
${node(480, 100, 'T', 'temp (K)', 480, 156, 'middle')}
${node(280, 230, 'V', 'volume', 326, 236, 'start')}
${node(280, 370, 'n', 'moles', 326, 376, 'start')}
<g class="fig-accent">${edgeLabel(280, 100, 290, 'Gay-Lussac (V, n fixed): P₁/T₁ = P₂/T₂')}</g>
<g class="fig-accent">${edgeLabel(190, 172, 186, 'Boyle (T, n): P₁V₁ = P₂V₂')}</g>
<g class="fig-accent">${edgeLabel(372, 172, 188, 'Charles (P, n): V₁/T₁ = V₂/T₂')}</g>
<g class="fig-accent">${edgeLabel(280, 315, 214, 'Avogadro (P, T): V ∝ n, direct')}</g>
<g class="fig-muted">
${T(30, 265, 13, 'P and V: inverse')}
${T(30, 283, 13, 'V and T, P and T,')}
${T(30, 301, 13, 'V and n: direct')}
${T(530, 265, 13, 'always kelvin:', 'end')}
${T(530, 283, 13, 'K = °C + 273', 'end')}
</g>
${T(280, 434, 13, 'all three at once (fixed n): P₁V₁/T₁ = P₂V₂/T₂', 'middle', '700')}
</svg>`

export const mcatStoichiometryFigures: DeckFigurePlacement[] = [
  {
    at: 'Key Conversions',
    mode: 'lead',
    figure: {
      svg: hubSvg,
      alt:
        'A hub diagram with a blue box labelled moles (n), every route passes here, in the centre. Left box: grams, mass on the balance; arrows between it and moles read ÷ M (grams to moles) and × M (g/mol) (moles to grams). Right box: particles — atoms, molecules, ions; arrows read × 6.022 × 10²³ (moles to particles) and ÷ 6.022 × 10²³ (particles to moles). Top box: litres of gas, ideal gas at STP only; arrows read × 22.4 L/mol (moles to litres) and ÷ 22.4 (litres to moles). Below: 1 mol = 6.022 × 10²³ particles = M grams = 22.4 L of ideal gas at STP; M is the sum of atomic masses, H₂SO₄ = 2(1.0) + 32.1 + 4(16.0) = 98.1 g/mol; STP on the MCAT is 0 °C and 1 atm and the 22.4 L step works for gases only; 1 amu = 1 g/mol, the mole is the bridge from the atomic scale to the lab scale.',
      caption: 'The mole is the hub: grams, particles and litres of gas at STP each convert to moles by one factor (M, 6.022 × 10²³, 22.4 L/mol), and any other conversion goes through the hub.',
    },
    blocks: [
      '- Every conversion passes through **moles**: $n = m/M$, particles $= n \\times 6.022 \\times 10^{23}$, gas at STP $= n \\times 22.4$ L',
      '- $M$ = sum of atomic masses (H₂SO₄: $2(1.0) + 32.1 + 4(16.0) = 98.1$ g/mol); the 22.4 L step is for **gases at STP** only',
    ],
  },
  {
    at: 'Empirical vs. Molecular Formula',
    mode: 'lead',
    figure: {
      svg: formulaSvg,
      alt:
        'Top: five boxes joined by arrows for the empirical-formula workflow on a compound that is 40.0% C, 6.7% H, 53.3% O. 1. % by mass: C 40.0%, H 6.7%, O 53.3%. 2. assume 100 g: C 40.0 g, H 6.7 g, O 53.3 g. 3. ÷ atomic mass: C 40.0/12 = 3.33, H 6.7/1 = 6.7, O 53.3/16 = 3.33 mol. 4. ÷ smallest (3.33): C 1, H 2, O 1. Result (blue box): empirical formula CH₂O. Note: a fraction in step 4 (e.g. 1.5) means multiply every number by 2 to clear it, then round. Bottom: molecular formula = empirical formula × n, where n = M(molecular) ÷ M(empirical). CH₂ (M = 14 g/mol) × 4 (56 ÷ 14 = 4) → C₄H₈ (M = 56 g/mol); CH₂O (M = 30 g/mol) × 6 (180 ÷ 30 = 6) → C₆H₁₂O₆, glucose, M = 180. Empirical is the simplest whole-number ratio, molecular is the real count and always a whole multiple; many molecules share one empirical formula and the molar mass picks out which one.',
      caption: 'Empirical formula in four moves (% → grams of a 100 g sample → moles → divide by the smallest) gives CH₂O; the molecular formula is that unit times M(molecular) ÷ M(empirical).',
    },
    blocks: [
      '- % → assume 100 g → ÷ atomic mass → ÷ smallest → round: 40.0% C, 6.7% H, 53.3% O gives $3.33 : 6.7 : 3.33 = 1:2:1$, **CH₂O**',
      '- Molecular = empirical × $n$, $n = M_{\\text{molecular}} / M_{\\text{empirical}}$: CH₂ (14) with $M = 56$ → $n = 4$ → **C₄H₈**',
    ],
  },
  {
    at: 'Worked Example: Multi-Step Mole Calculation',
    mode: 'lead',
    figure: {
      svg: roadmapSvg,
      alt:
        'The balanced equation H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O across the top with the note: balanced first, the coefficients are the bridge between two substances. Two rows of four boxes joined by arrows. General row: grams A (what you weigh) → ÷ M(A) → mol A → × coefficient of B over coefficient of A → mol B → × M(B) → grams B (what is asked). Numbers row in blue: 9.80 g H₂SO₄ → ÷ 98.1 → 0.100 mol H₂SO₄ → × 1/1 → 0.100 mol Na₂SO₄ → × 142 → 14.2 g Na₂SO₄, with notes M(H₂SO₄) = 98.1 g/mol, 1 : 1 in the equation, M(Na₂SO₄) = 2(23) + 32 + 4(16) = 142. Footer in red: never grams → grams directly, the mole ratio only works in moles; NaOH is in excess, so H₂SO₄ (the given reagent) sets how much Na₂SO₄ forms; the same chain works for any pair, reactant → product, product → reactant or reactant → reactant.',
      caption: 'The stoichiometry roadmap: grams of A → moles of A (÷ M) → moles of B (× coefficient ratio) → grams of B (× M), run with the lesson’s 9.80 g of H₂SO₄ → 14.2 g of Na₂SO₄.',
    },
    blocks: [
      '- grams A $\\xrightarrow{\\div M_A}$ mol A $\\xrightarrow{\\times \\text{coeff ratio}}$ mol B $\\xrightarrow{\\times M_B}$ grams B — the mole ratio is the only bridge between substances',
      '- $9.80 / 98.1 = 0.100$ mol H₂SO₄ → $\\times 1/1$ → $0.100$ mol Na₂SO₄ → $\\times 142 = 14.2$ g; balance the equation first, always',
    ],
  },
  {
    at: 'How to Find the Limiting Reagent',
    mode: 'lead',
    figure: {
      svg: limitingSvg,
      alt:
        'Left: 2Al + 3Cl₂ → 2AlCl₃ with 5.40 g Al and 14.2 g Cl₂, drawn as circles where each circle is 0.0333 mol and one run of the equation is 2 Al + 3 Cl₂ → 2 AlCl₃. Row Al, 0.200 mol: six circles boxed in three pairs; the third pair is dashed and labelled 0.0667 mol Al left over. Row Cl₂, 0.200 mol (red): six circles boxed in two triples, labelled runs out. Blue arrows from each Cl₂ triple (run 1, run 2) down to row AlCl₃, 0.133 mol: four circles in two pairs, = 17.7 g. Only 2 runs fit the Cl₂ supply → Cl₂ is the limiting reagent; 2 runs × 2 AlCl₃ = 4 circles = 0.133 mol; one Al pair never reacts (excess). Right: the test is moles ÷ coefficient. Al: 5.40 ÷ 27.0 = 0.200 mol, 0.200 ÷ 2 = 0.100 runs. Cl₂ (red): 14.2 ÷ 70.9 = 0.200 mol, 0.200 ÷ 3 = 0.0667 runs ← smaller. Smaller result = limiting reagent. Product from the limiting reagent only (blue): 0.200 mol Cl₂ × 2/3 = 0.133 mol AlCl₃; 0.133 × 133.3 = 17.7 g AlCl₃. Notes: equal moles ≠ equal supply, the coefficients set the recipe; with 21.3 g Cl₂ (0.300 mol) both ratios are 0.100 — exact stoichiometric ratio, nothing left over.',
      caption: 'The limiting reagent as a particle picture: 0.200 mol of each reactant, but the recipe needs 3 Cl₂ per 2 Al, so Cl₂ is used up after two runs and a pair of Al circles is left over — moles ÷ coefficient makes the same call.',
    },
    blocks: [
      '- Convert to moles, then **divide by the coefficient**; the smaller result is the limiting reagent: Al $0.200/2 = 0.100$, Cl₂ $0.200/3 = 0.0667$ → Cl₂',
      '- Product comes from the limiting reagent only: $0.200 \\times \\tfrac{2}{3} = 0.133$ mol AlCl₃ $= 17.7$ g; $0.0667$ mol Al stays unreacted',
    ],
  },
  {
    at: 'Percent Yield',
    mode: 'lead',
    figure: {
      svg: yieldSvg,
      alt:
        'A bar chart of grams of NH₃ for N₂ + 3H₂ → 2NH₃ with 1.00 mol N₂ limiting, axis 0 to 30 g. A grey bar, theoretical, reaches 34.0 g (100% conversion); a blue bar, actual, reaches 27.2 g (weighed in the lab) and is labelled 80%; a red bracket between the two tops reads lost: 6.8 g (20%). Right column: % yield = actual ÷ theoretical × 100; theoretical comes from the limiting reagent, 1.00 mol N₂ × 2 = 2.00 mol NH₃ × 17.0 = 34.0 g; actual is measured, 27.2 g; 27.2 ÷ 34.0 × 100 = 80%; why less than 100%: side reactions, incomplete reaction, losses on isolation; theoretical is a calculation and actual a measurement, in practice % yield ≤ 100; in a multi-step synthesis apply % yield to each step separately, the losses compound.',
      caption: 'Percent yield as two bars: the theoretical 34.0 g of NH₃ comes from the limiting reagent, the actual 27.2 g from the balance, and the ratio is 80% — the missing 20% went to side reactions, incomplete reaction and isolation losses.',
    },
    blocks: [
      '- $\\%\\text{ yield} = \\dfrac{\\text{actual}}{\\text{theoretical}} \\times 100$; theoretical = limiting reagent at 100% conversion, actual = what you weigh',
      '- $1.00$ mol N₂ → $2.00$ mol NH₃ $= 34.0$ g theoretical; $27.2$ g recovered → **80%**; multi-step syntheses: one % yield per step',
    ],
  },
  {
    at: 'Types of Chemical Reactions',
    mode: 'replace-table',
    figure: {
      svg: typesSvg,
      alt:
        'Five rows of pictograms where letters in circles stand for species (blue and red to track the partners). Combination (synthesis): A + B → AB, example 2Mg + O₂ → 2MgO. Decomposition: AB → A + B, example 2H₂O₂ → 2H₂O + O₂. Single displacement: A + BC → AC + B, example Zn + 2HCl → ZnCl₂ + H₂. Double displacement: AB + CD → AD + CB, example NaCl + AgNO₃ → AgCl↓ + NaNO₃. Combustion: CₓHᵧ + O₂ → CO₂ + H₂O, example CH₄ + 2O₂ → CO₂ + 2H₂O. Footer: for combustion of CₓHᵧ the O₂ coefficient is x + y/4.',
      caption: 'The five reaction patterns as pictograms: join, split, swap one partner, swap both partners, burn to CO₂ and H₂O.',
    },
    blocks: [
      '- **Combination** $A + B \\to AB$ (2Mg + O₂ → 2MgO); **decomposition** $AB \\to A + B$ (2H₂O₂ → 2H₂O + O₂)',
      '- **Single displacement** $A + BC \\to AC + B$ (Zn + 2HCl → ZnCl₂ + H₂)',
      '- **Double displacement** $AB + CD \\to AD + CB$ (NaCl + AgNO₃ → AgCl↓ + NaNO₃, a precipitation)',
      '- **Combustion**: hydrocarbon + O₂ → CO₂ + H₂O; for $\\text{C}_x\\text{H}_y$ the O₂ coefficient is $x + y/4$',
    ],
  },
  {
    at: 'Dilution',
    mode: 'lead',
    figure: {
      svg: dilutionSvg,
      alt:
        'Two beakers. Left, a small one: 25.0 mL of 12.0 M HCl, concentrated — a shallow liquid holding 12 blue solute dots packed closely; below it n = 12.0 × 0.0250 = 0.300 mol. A grey arrow labelled + water, to 300 mL, points to the right beaker: 300 mL of 1.00 M HCl, dilute — the same 12 dots spread through twelve times the liquid area; below it n = 1.00 × 0.300 = 0.300 mol, unchanged. Right column: M₁V₁ = M₂V₂ — moles of solute don’t change, M × V = n before and after; M₂ = 12.0 × 25.0 ÷ 300 = 1.00 M (mL on both sides is fine, the units cancel); dilution factor 12: volume × 12 → concentration ÷ 12; check: 0.300 mol in 0.300 L = 1.00 M; lab safety: add acid TO water, never water to acid; preparing a solution: n = M × V then grams = n × molar mass, e.g. 250 mL of 0.500 M NaOH → 0.125 mol × 40.0 = 5.00 g.',
      caption: 'Dilution: adding water spreads the same 0.300 mol of HCl through twelve times the volume, so the concentration falls by the same factor — M₁V₁ = M₂V₂, 25.0 mL of 12.0 M becomes 300 mL of 1.00 M.',
    },
    blocks: [
      '- Water in, solute unchanged: $M_1V_1 = M_2V_2$ counts the same moles twice; $M_2 = 12.0 \\times 25.0 / 300 = 1.00$ M',
      '- Volume × 12 → concentration ÷ 12; any volume unit works if used on both sides; add acid **to** water',
    ],
  },
  {
    at: 'Net Ionic Equations',
    mode: 'lead',
    figure: {
      svg: netIonicSvg,
      alt:
        'Three stages for the precipitation of silver chloride. 1. molecular equation: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq). 2. complete ionic — split every strong electrolyte that is (aq): Ag⁺ (blue pill) + NO₃⁻ + Na⁺ + Cl⁻ (red pill) → AgCl(s) (solid pill) + Na⁺ + NO₃⁻; the grey Na⁺ and NO₃⁻ pills on both sides are struck through in red and labelled spectators, same on both sides. 3. net ionic — only the species that change: a blue outlined box with Ag⁺ + Cl⁻ → AgCl(s) precipitate; Na⁺ and NO₃⁻ dropped, charge still balances (+1 −1 → 0). Footer: split only strong electrolytes marked (aq); solids, gases, liquids and weak electrolytes stay whole, as AgCl(s) does; KNO₃(aq) + NaCl(aq): every possible product is soluble, so all four ions are spectators and there is no reaction.',
      caption: 'Net ionic equations in three moves: write the molecular equation, split the (aq) strong electrolytes into ions, strike out the spectators that appear unchanged on both sides — Ag⁺ + Cl⁻ → AgCl(s) is what is left.',
    },
    blocks: [
      '- Split only **strong electrolytes (aq)** into ions; solids, gases, liquids and weak electrolytes stay whole',
      '- Cancel the spectators (Na⁺, NO₃⁻): $\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\to \\text{AgCl}(s)$; all products soluble → no reaction',
    ],
  },
  {
    at: 'Special Cases',
    mode: 'replace-table',
    figure: {
      svg: gasLawsSvg,
      alt:
        'Four circles labelled P (pressure), T (temp in K), V (volume) and n (moles) joined by lines, headed PV = nRT — fix two, relate the other two. The P–T line is labelled Gay-Lussac (V, n fixed): P₁/T₁ = P₂/T₂. The P–V line: Boyle (T, n): P₁V₁ = P₂V₂. The V–T line: Charles (P, n): V₁/T₁ = V₂/T₂. The V–n line: Avogadro (P, T): V ∝ n. Side notes: P and V are inverse; V and T, P and T, V and n are direct; always kelvin, K = °C + 273. Footer: all three at once (fixed n): P₁V₁/T₁ = P₂V₂/T₂.',
      caption: 'The named gas laws are PV = nRT with two variables held fixed: Boyle (P–V, inverse), Charles (V–T), Gay-Lussac (P–T) and Avogadro (V–n) are the four links of this diagram.',
    },
    blocks: [
      '- **Boyle** ($T, n$ fixed): $P_1V_1 = P_2V_2$ — the only inverse pair',
      '- **Charles** ($P, n$): $V_1/T_1 = V_2/T_2$; **Gay-Lussac** ($V, n$): $P_1/T_1 = P_2/T_2$ — kelvin only',
      '- **Avogadro** ($P, T$): $V \\propto n$; all at once with fixed $n$: $P_1V_1/T_1 = P_2V_2/T_2$',
    ],
  },
]
