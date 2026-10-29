import type { DeckFigurePlacement } from './index'

/**
 * Research Methods & Study Design (MCAT Strategy) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (an IV → DV arrow with
 * a confound pulling on both ends, four panels of the same dot population, a
 * two-question decision tree beside a causal-strength ladder, a study
 * timeline with the threats placed where they enter, a who-knows grid of
 * blindfolded figures, a stacked bar chart, two design flow diagrams, power
 * curves and a schematic forest plot) — no textbook, prep-company or AAMC
 * figure was copied.
 *
 * The only numbers drawn are the lesson's own: caffeine 0 / 50 / 100 mg →
 * reaction time; dropout 35% (treatment) vs 8% (control), drawn to scale as
 * band widths; placebo 30% vs antidepressant 60% → 30 points (and 25% vs 55%);
 * the 80% power target and n = 40 per arm; pooled OR 0.85 (95% CI 0.62–1.10).
 * The power curves are computed from the normal approximation for a
 * two-group comparison, power = Φ(d·√(n/2) − z(α/2)), at d = 0.8 and 0.5 with
 * α = 0.05 and 0.01 — the caption says so. The forest plot's five study rows
 * are illustrative (chosen so they pool to roughly the lesson's 0.85); the
 * sampling panels' dot choices are illustrative.
 *
 * Colours: treatment / condition A / blinded / the good-design answer is
 * BLUE (fig-accent); control / condition B / unblinded / bias is RED
 * (fig-accent-2); populations, guides and asides grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same coloured group. Marker
 * ids are unique per figure (arr-rm-<figure>-<colour>).
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

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A stroked path (curve) in the current colour. */
const CURVE = (d: string, sw = 3.5, dashed = false) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${dashed ? ' stroke-dasharray="9 6"' : ''}/>`

/** A rounded box, tinted with the current colour at the given opacity. */
const BOX = (x: number, y: number, w: number, h: number, tint = 0.08, sw = 2) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="currentColor" fill-opacity="${tint}" stroke="currentColor" stroke-width="${sw}"/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

/** An open dot (a hole in the figure background) with a current-colour rim. */
const ODOT = (cx: number, cy: number, r = 7) => `<circle class="fig-bg" cx="${cx}" cy="${cy}" r="${r}" stroke="currentColor" stroke-width="2.5"/>`

/** A selection ring. */
const RING = (cx: number, cy: number, r = 14) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-width="3.5"/>`

/** Standard normal CDF (Abramowitz–Stegun 7.1.26 via erf). */
const phi = (z: number) => {
  const t = 1 / (1 + 0.3275911 * (Math.abs(z) / Math.SQRT2))
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-(z * z) / 2)
  return z >= 0 ? 0.5 * (1 + y) : 0.5 * (1 - y)
}

/** Polyline path data through the points. */
const poly = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')

/* 1 — Variables: IV → DV, a confound tied to both, controlled variables held equal (lead, 1000×460) */
const variablesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rm-var')}</defs>
<g class="fig-accent">${BOX(50, 165, 300, 135, 0.1, 2.5)}</g>
${T(200, 206, 24, 'Independent (IV)', 'middle', '700')}
${T(200, 240, 20, 'what you manipulate', 'middle')}
<g class="fig-accent">${T(200, 274, 20, 'caffeine 0 / 50 / 100 mg', 'middle', '700')}</g>
${BOX(650, 165, 300, 135, 0.06, 2.5)}
${T(800, 206, 24, 'Dependent (DV)', 'middle', '700')}
${T(800, 240, 20, 'what you measure', 'middle')}
${T(800, 274, 20, 'reaction time', 'middle', '700')}
${ARR(356, 232, 642, 232, 'arr-rm-var', 4.5)}
${T(500, 216, 20, 'the effect being tested', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-rm-var-r')}</defs>
${BOX(345, 20, 310, 112, 0.1, 2.5)}
${T(500, 54, 24, 'Confound', 'middle', '700')}
${T(500, 84, 20, 'related to BOTH IV and DV', 'middle')}
${T(500, 114, 19, 'e.g. age, baseline health', 'middle')}
<path d="M343 76 Q200 76 200 158" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#arr-rm-var-r)"/>
<path d="M657 76 Q800 76 800 158" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#arr-rm-var-r)"/>
${T(500, 264, 19, 'a confound can fake this arrow', 'middle')}
</g>
<g class="fig-muted">${BOX(230, 345, 540, 92, 0.14, 2)}</g>
${T(500, 382, 22, 'Controlled variables', 'middle', '700')}
${T(500, 414, 20, 'held equal for everyone: same test, room, time of day', 'middle')}
</svg>`

/* 2 — Sampling: the same 30-person population (18 in group A, 12 in group B) in each panel (lead, 1000×460) */
const SP_X = [10, 257, 504, 751] // panel left edges, 240 wide
const spDot = (px: number, r: number, c: number): [number, number] => [px + 35 + 34 * c, 122 + 34 * r]
const spPopulation = (px: number) =>
  Array.from({ length: 30 }, (_, i) => {
    const r = Math.floor(i / 6)
    const [x, y] = spDot(px, r, i % 6)
    return r < 3 ? DOT(x, y, 7) : ODOT(x, y, 6)
  }).join('')
const spRings = (px: number, picks: [number, number][]) => picks.map(([r, c]) => RING(...spDot(px, r, c))).join('')
const spStrata = (px: number) => `<g class="fig-muted">${LINE(px + 18, 207, px + 222, 207, 2, true)}</g>`
const spPair = (px: number, y: number) =>
  `<g class="fig-muted">${LINE(px + 72, y, px + 168, y, 2.5)}</g><g class="fig-accent">${DOT(px + 70, y, 10)}</g><g class="fig-accent-2">${DOT(px + 170, y, 10)}</g>`
const samplingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(250, 25, 250, 390, 1.5)}${LINE(497, 25, 497, 390, 1.5)}${LINE(744, 25, 744, 390, 1.5)}</g>
${T(130, 46, 22, 'Random', 'middle', '700')}
${T(130, 76, 18, 'equal chance for all', 'middle')}
<g class="fig-muted">${spPopulation(SP_X[0])}</g>${spStrata(SP_X[0])}
<g class="fig-accent">${spRings(SP_X[0], [[0, 4], [1, 1], [2, 5], [3, 2], [4, 4]])}</g>
<g class="fig-accent">${T(130, 318, 19, 'low bias', 'middle', '700')}</g>
${T(130, 346, 17, 'representative', 'middle')}
${T(377, 46, 22, 'Stratified', 'middle', '700')}
${T(377, 76, 18, 'each group, in proportion', 'middle')}
<g class="fig-muted">${spPopulation(SP_X[1])}</g>${spStrata(SP_X[1])}
<g class="fig-accent">${spRings(SP_X[1], [[0, 2], [1, 5], [2, 0], [3, 3], [4, 1]])}</g>
<g class="fig-accent">${T(377, 318, 19, 'low bias', 'middle', '700')}</g>
${T(377, 346, 17, '3 of 18 A + 2 of 12 B', 'middle')}
${T(624, 46, 22, 'Convenience', 'middle', '700')}
${T(624, 76, 18, 'first 5 who walk in', 'middle')}
<g class="fig-muted">${spPopulation(SP_X[2])}</g>${spStrata(SP_X[2])}
<g class="fig-accent">${spRings(SP_X[2], [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1]])}</g>
<g class="fig-accent-2">${T(624, 318, 19, 'high bias', 'middle', '700')}</g>
${T(624, 346, 17, 'group B never sampled', 'middle')}
${T(871, 46, 22, 'Matched pairs', 'middle', '700')}
${T(871, 76, 18, 'a design control, not sampling', 'middle')}
<g class="fig-accent">${T(SP_X[3] + 70, 112, 17, 'treated', 'middle', '700')}</g>
<g class="fig-accent-2">${T(SP_X[3] + 170, 112, 17, 'control', 'middle', '700')}</g>
${spPair(SP_X[3], 145)}${spPair(SP_X[3], 185)}${spPair(SP_X[3], 225)}${spPair(SP_X[3], 265)}
${T(871, 318, 19, 'each pair: same age, sex', 'middle', '700')}
${T(871, 346, 17, 'controls only those confounds', 'middle')}
<g class="fig-muted">${DOT(300, 428, 7)}</g>${T(316, 434, 18, 'group A')}
<g class="fig-muted">${ODOT(430, 428, 6)}</g>${T(446, 434, 18, 'group B')}
<g class="fig-accent">${RING(560, 428, 12)}</g>${T(582, 434, 18, 'sampled')}
</svg>`

/* 3 — Study types: two questions sort the design; a ladder of causal strength (lead, 1000×460) */
const studyTypesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rm-study')}</defs>
${BOX(30, 28, 300, 92, 0.05)}
${T(180, 66, 20, 'Does the researcher', 'middle', '700')}
${T(180, 94, 20, 'manipulate the IV?', 'middle', '700')}
${BOX(30, 180, 300, 92, 0.05)}
${T(180, 218, 20, 'Are groups formed by', 'middle', '700')}
${T(180, 246, 20, 'random assignment?', 'middle', '700')}
${ARR(180, 122, 180, 176, 'arr-rm-study', 3)}${T(192, 156, 18, 'yes', 'start', '700')}
${ARR(180, 274, 180, 330, 'arr-rm-study', 3)}${T(192, 308, 18, 'yes', 'start', '700')}
${ARR(332, 74, 384, 74, 'arr-rm-study', 3)}${T(358, 62, 18, 'no', 'middle', '700')}
${ARR(332, 226, 384, 226, 'arr-rm-study', 3)}${T(358, 214, 18, 'no', 'middle', '700')}
<g class="fig-accent-2">${BOX(390, 28, 235, 92, 0.1)}</g>
${T(507, 58, 20, 'Observational', 'middle', '700')}
${T(507, 84, 17, 'measure, never assign', 'middle')}
<g class="fig-accent-2">${T(507, 108, 18, 'weak – moderate', 'middle', '700')}</g>
<g class="fig-muted">${BOX(390, 180, 235, 92, 0.14)}</g>
${T(507, 210, 20, 'Quasi-experimental', 'middle', '700')}
${T(507, 236, 17, 'manipulated, not random', 'middle')}
${T(507, 260, 18, 'moderate', 'middle', '700')}
<g class="fig-accent">${BOX(30, 334, 300, 100, 0.12, 2.5)}</g>
${T(180, 368, 20, 'Randomized controlled', 'middle', '700')}
${T(180, 394, 20, 'trial (RCT)', 'middle', '700')}
<g class="fig-accent">${T(180, 422, 17, 'strongest: balances confounds', 'middle', '700')}</g>
<g class="fig-muted">${LINE(655, 25, 655, 440, 1.5)}</g>
${T(830, 44, 20, 'strength of causal evidence', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-rm-study-b')}</defs>
${ARR(690, 420, 690, 72, 'arr-rm-study-b', 4)}
${T(714, 98, 20, 'RCT', 'start', '700')}
</g>
${T(985, 98, 17, 'strongest', 'end')}
${T(714, 146, 19, 'quasi-experimental')}
${T(985, 146, 17, 'moderate', 'end')}
${T(714, 194, 19, 'observational', 'start', '700')}
${T(985, 194, 17, 'weak–moderate', 'end')}
${T(734, 224, 18, 'cohort  &gt;')}
${T(734, 252, 18, 'case–control  &gt;')}
${T(734, 280, 18, 'cross-sectional')}
<g class="fig-accent-2">${T(714, 328, 19, 'correlational')}${T(985, 328, 17, 'weak', 'end')}</g>
<g class="fig-accent">${T(714, 388, 18, 'only random assignment', 'start', '700')}${T(714, 414, 18, 'supports causation', 'start', '700')}</g>
</svg>`

/* 4 — Threats to internal validity on a study timeline; dropout bands to the lesson's 35% vs 8% (lead, 1000×460).
   Each band is 80 tall at the start and narrows to 65% (treatment) / 92% (control) of that at the end. */
const band = (y: number, keep: number) => {
  const h0 = 40
  const h1 = 40 * keep
  return `<path d="M200 ${y - h0} L860 ${y - h1} L860 ${y + h1} L200 ${y + h0} z" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2"/>`
}
const internalSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rm-int')}</defs>
${T(130, 40, 19, '① selection / confounding', 'start', '700')}
${T(130, 66, 17, 'groups differ before the study')}
${T(520, 40, 19, '② history', 'middle', '700')}
${T(520, 66, 17, 'outside event mid-study', 'middle')}
${T(990, 40, 19, '④ attrition', 'end', '700')}
${T(990, 66, 17, 'unequal dropout', 'end')}
<g class="fig-accent">
${band(170, 0.65)}
${T(190, 177, 21, 'treatment', 'end', '700')}
${T(212, 177, 18, 'younger')}
${T(872, 166, 19, '65% left', 'start', '700')}
${T(872, 192, 17, '35% dropped')}
${DOT(640, 118, 5)}${DOT(700, 110, 5)}${DOT(760, 116, 5)}${DOT(820, 106, 5)}
</g>
<g class="fig-accent-2">
${band(300, 0.92)}
${T(190, 307, 21, 'control', 'end', '700')}
${T(212, 307, 18, 'older')}
${T(872, 296, 19, '92% left', 'start', '700')}
${T(872, 322, 17, '8% dropped')}
${DOT(780, 352, 5)}
</g>
${LINE(520, 96, 520, 352, 3, true)}
${LINE(200, 92, 200, 352, 2)}${LINE(860, 92, 860, 352, 2)}
${T(200, 370, 16, 'start', 'middle')}${T(860, 370, 16, 'end', 'middle')}
${ARR(250, 392, 810, 392, 'arr-rm-int', 2.5)}
${T(530, 420, 18, '③ maturation: people change over time on their own', 'middle')}
<g class="fig-accent">${T(530, 450, 18, 'fix: random assignment + equal follow-up', 'middle', '700')}</g>
</svg>`

/* 5 — Who knows the assignment? Three blinding levels (replace-table, 560×440) */
const person = (cx: number, top: number, blind: boolean) => {
  const cy = top + 38
  const head = `<circle cx="${cx}" cy="${cy}" r="16" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>`
  const body = `<path d="M${cx - 24} ${top + 88} Q${cx - 24} ${top + 60} ${cx} ${top + 60} Q${cx + 24} ${top + 60} ${cx + 24} ${top + 88} z" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>`
  const face = blind
    ? `<rect x="${cx - 20}" y="${cy - 6}" width="40" height="10" rx="3" fill="currentColor"/>`
    : `${DOT(cx - 6, cy - 2, 2.6)}${DOT(cx + 6, cy - 2, 2.6)}`
  return `<g class="${blind ? 'fig-accent' : 'fig-accent-2'}">${head}${body}${face}${T(cx, top + 110, 16, blind ? 'blind' : 'knows', 'middle', '700')}</g>`
}
const BL_TOPS = [62, 188, 314]
const blindingSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(300, 40, 18, 'participant', 'middle', '700')}
${T(460, 40, 18, 'researcher', 'middle', '700')}
<g class="fig-accent"><rect x="8" y="${BL_TOPS[2] - 6}" width="544" height="126" rx="12" fill="currentColor" fill-opacity="0.08"/></g>
<g class="fig-muted">${LINE(10, 182, 550, 182, 1.5)}${LINE(10, 308, 550, 308, 1.5)}</g>
${T(20, BL_TOPS[0] + 55, 19, 'no blinding', 'start', '700')}
${T(20, BL_TOPS[0] + 80, 16, 'both know')}
${person(300, BL_TOPS[0], false)}${person(460, BL_TOPS[0], false)}
${T(20, BL_TOPS[1] + 55, 19, 'single-blind', 'start', '700')}
${T(20, BL_TOPS[1] + 80, 16, 'participant blind')}
${person(300, BL_TOPS[1], true)}${person(460, BL_TOPS[1], false)}
${T(20, BL_TOPS[2] + 55, 19, 'double-blind', 'start', '700')}
<g class="fig-accent">${T(20, BL_TOPS[2] + 80, 16, 'gold standard', 'start', '700')}</g>
${person(300, BL_TOPS[2], true)}${person(460, BL_TOPS[2], true)}
</svg>`

/* 6 — Placebo control: the lesson's depression RCT as stacked bars (lead, 1000×460).
   Scale: baseline y = 400, 4.5 px per percentage point. */
const PB = (pct: number) => 400 - 4.5 * pct
const placeboSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rm-pl')}</defs>
${T(300, 40, 21, 'Depression RCT: % of patients who improved', 'middle', '700')}
${ARR(100, 400, 100, 90, 'arr-rm-pl', 2.5)}${LINE(100, 400, 540, 400, 2.5)}
<g class="fig-muted">${[20, 40, 60].map((p) => LINE(100, PB(p), 540, PB(p), 1, true)).join('')}</g>
${[0, 20, 40, 60].map((p) => T(90, PB(p) + 6, 17, `${p}%`, 'end')).join('')}
<g class="fig-muted">
<rect x="160" y="${PB(30)}" width="140" height="${4.5 * 30}" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
<rect x="350" y="${PB(30)}" width="140" height="${4.5 * 30}" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-rm-pl-b')}</defs>
<rect x="350" y="${PB(60)}" width="140" height="${4.5 * 30}" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/>
<line x1="510" y1="${PB(30) - 3}" x2="510" y2="${PB(60) + 3}" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-rm-pl-b)" marker-end="url(#arr-rm-pl-b)"/>
${T(522, PB(45) - 4, 19, '30', 'start', '700')}
${T(522, PB(45) + 18, 16, 'pts')}
</g>
${LINE(300, PB(30), 350, PB(30), 2, true)}
${T(230, PB(30) - 10, 20, '30%', 'middle', '700')}
${T(420, PB(60) - 10, 20, '60%', 'middle', '700')}
${T(230, 428, 19, 'placebo', 'middle', '700')}
${T(420, 428, 19, 'antidepressant', 'middle', '700')}
<g class="fig-muted"><rect x="620" y="96" width="26" height="26" rx="4" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/></g>
${T(660, 108, 19, 'placebo effect +')}${T(660, 132, 19, 'natural recovery (both arms)')}
<g class="fig-accent"><rect x="620" y="166" width="26" height="26" rx="4" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/>${T(660, 186, 19, 'true drug effect', 'start', '700')}</g>
${T(620, 262, 26, '60% − 30% = 30 points', 'start', '700')}
${T(620, 298, 19, 'the placebo arm is the baseline')}
${T(620, 324, 19, 'you subtract')}
<g class="fig-muted">${T(620, 378, 17, 'worked example: 55% − 25% = 30 points')}${T(620, 404, 17, 'no-treatment control: natural recovery only')}</g>
</svg>`

/* 7 — Between- vs within-subjects designs, with counterbalancing (lead, 1000×460) */
const condBox = (x: number, y: number, label: 'A' | 'B') =>
  `<g class="${label === 'A' ? 'fig-accent' : 'fig-accent-2'}">${BOX(x, y - 26, 64, 52, 0.18, 2.5)}${T(x + 32, y + 9, 24, label, 'middle', '700')}</g>`
const fourDots = (x: number, y: number) => [0, 1, 2, 3].map((i) => DOT(x + 24 * i, y, 9)).join('')
const designsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rm-des')}</defs>
${T(245, 42, 23, 'Between-subjects', 'middle', '700')}
${T(245, 70, 18, 'different people in each condition', 'middle')}
<g class="fig-muted">${BOX(30, 138, 110, 200, 0.1)}${[0, 1, 2, 3].map((r) => DOT(62, 168 + 46 * r, 9) + DOT(108, 168 + 46 * r, 9)).join('')}</g>
${T(85, 362, 16, 'random split', 'middle')}
${ARR(146, 200, 196, 182, 'arr-rm-des', 2.5)}${ARR(146, 276, 196, 294, 'arr-rm-des', 2.5)}
<g class="fig-accent">${fourDots(214, 176)}</g>
<g class="fig-accent-2">${fourDots(214, 300)}</g>
${ARR(298, 176, 334, 176, 'arr-rm-des', 2.5)}${ARR(298, 300, 334, 300, 'arr-rm-des', 2.5)}
${condBox(340, 176, 'A')}${condBox(340, 300, 'B')}
<g class="fig-muted">${CURVE('M412 176 Q450 176 450 238 Q450 300 412 300', 2.5)}</g>
${T(462, 244, 16, 'compare')}
<g class="fig-accent">${T(245, 400, 18, '+ no carryover effects', 'middle', '700')}</g>
<g class="fig-accent-2">${T(245, 428, 18, '− needs a larger N', 'middle', '700')}</g>
<g class="fig-muted">${LINE(530, 25, 530, 440, 1.5)}</g>
${T(765, 42, 23, 'Within-subjects', 'middle', '700')}
${T(765, 70, 18, 'the same people in every condition', 'middle')}
${fourDots(562, 176)}${fourDots(562, 300)}
${ARR(646, 176, 682, 176, 'arr-rm-des', 2.5)}${ARR(646, 300, 682, 300, 'arr-rm-des', 2.5)}
${condBox(688, 176, 'A')}${ARR(754, 176, 798, 176, 'arr-rm-des', 2.5)}${condBox(804, 176, 'B')}
${condBox(688, 300, 'B')}${ARR(754, 300, 798, 300, 'arr-rm-des', 2.5)}${condBox(804, 300, 'A')}
${T(900, 182, 17, 'half: A → B')}${T(900, 306, 17, 'half: B → A')}
<g class="fig-muted">${CURVE('M720 146 Q776 110 832 146', 2.5, true)}${T(776, 116, 15, 'practice carries over', 'middle')}</g>
${T(765, 362, 17, 'counterbalanced: order effects cancel', 'middle', '700')}
<g class="fig-accent">${T(765, 400, 18, '+ more power, fewer people', 'middle', '700')}</g>
<g class="fig-accent-2">${T(765, 428, 18, '− order / carryover effects', 'middle', '700')}</g>
</svg>`

/* 8 — Power vs sample size: normal-approximation curves (lead, 1000×460).
   x: n per group 0–160 → 100…620 (3.25 px each); y: power 0–1 → 390…60. */
const PX = (n: number) => 100 + 3.25 * n
const PY = (p: number) => 390 - 330 * p
const powerAt = (d: number, z: number) => (n: number) => phi(d * Math.sqrt(n / 2) - z)
const powerCurve = (f: (n: number) => number) => poly(Array.from({ length: 161 }, (_, i) => [PX(i), PY(f(i))] as [number, number]))
const pLarge = powerAt(0.8, 1.96)
const pMod = powerAt(0.5, 1.96)
const pModStrict = powerAt(0.5, 2.576)
const powerSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rm-pow')}</defs>
${ARR(100, 390, 640, 390, 'arr-rm-pow', 2.5)}${ARR(100, 390, 100, 40, 'arr-rm-pow', 2.5)}
${[0, 40, 80, 120, 160].map((n) => LINE(PX(n), 390, PX(n), 397, 2) + T(PX(n), 418, 16, `${n}`, 'middle')).join('')}
${[0, 0.2, 0.4, 0.6, 0.8, 1].map((p) => T(90, PY(p) + 6, 16, p === 0 ? '0' : p === 1 ? '1' : p.toFixed(1), 'end')).join('')}
${T(370, 448, 18, 'sample size per group (n)', 'middle', '700')}
${T(110, 36, 18, 'power (1 − β)', 'start', '700')}
<g class="fig-muted">${LINE(100, PY(0.8), 620, PY(0.8), 2, true)}${LINE(PX(40), PY(pMod(40)), PX(40), 390, 1.5, true)}</g>
${T(615, PY(0.8) + 22, 16, '80% target (β = 20%)', 'end', '700')}
<g class="fig-accent">${CURVE(powerCurve(pLarge))}</g>
<g class="fig-accent-2">${CURVE(powerCurve(pMod))}${CURVE(powerCurve(pModStrict), 3, true)}</g>
${DOT(PX(40), PY(pMod(40)), 7)}
${T(PX(40) - 10, PY(pMod(40)) + 4, 17, 'n = 40', 'end', '700')}
${T(PX(40) - 10, PY(pMod(40)) + 24, 15, `≈ ${Math.round(pMod(40) * 100)}%`, 'end')}
<g class="fig-accent">${LINE(400, 250, 440, 250, 3.5)}${T(450, 256, 17, 'large effect, d = 0.8')}</g>
<g class="fig-accent-2">${LINE(400, 282, 440, 282, 3.5)}${T(450, 288, 17, 'moderate, d = 0.5')}</g>
<g class="fig-accent-2">${CURVE('M400 314 L440 314', 3, true)}${T(450, 320, 17, 'moderate, α = 0.01')}</g>
<g class="fig-muted">${LINE(665, 25, 665, 440, 1.5)}</g>
${T(690, 62, 21, 'power rises with:', 'start', '700')}
${T(690, 104, 19, '↑ sample size', 'start', '700')}${T(690, 128, 16, 'move right along a curve')}
${T(690, 168, 19, '↑ effect size', 'start', '700')}${T(690, 192, 16, 'blue curve vs red')}
${T(690, 232, 19, '↑ α (0.05 vs 0.01)', 'start', '700')}${T(690, 256, 16, 'solid red vs dashed red')}
${T(690, 296, 19, '↓ variability', 'start', '700')}${T(690, 320, 16, 'same as a bigger effect size')}
<g class="fig-accent">${T(690, 380, 19, 'aim for ≥ 80% power', 'start', '700')}${T(690, 406, 17, 'n = 40/arm, moderate effect: too few')}</g>
</svg>`

/* 9 — Forest plot schematic: five illustrative studies pooled to the lesson's OR 0.85 (0.62–1.10) (lead, 1000×460).
   Log axis: OR 0.25 … 4 → x 150 … 600. */
const FX = (or: number) => 375 + (225 * Math.log(or)) / Math.log(4)
const studies: [string, number, number, number][] = [
  ['Study 1', 0.72, 0.38, 1.36],
  ['Study 2', 1.1, 0.58, 2.08],
  ['Study 3', 0.62, 0.33, 1.17],
  ['Study 4', 0.95, 0.5, 1.8],
  ['Study 5', 0.9, 0.47, 1.71],
]
const forestSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${LINE(150, 350, 600, 350, 2.5)}
${[0.25, 0.5, 1, 2, 4].map((v) => LINE(FX(v), 350, FX(v), 358, 2) + T(FX(v), 380, 16, `${v}`, 'middle')).join('')}
${T(FX(1), 408, 17, 'odds ratio (log scale)', 'middle', '700')}
${T(FX(1) - 12, 438, 16, '← favors treatment', 'end')}${T(FX(1) + 12, 438, 16, 'favors control →', 'start')}
${LINE(FX(1), 62, FX(1), 350, 2.5)}
${T(FX(1), 50, 17, 'OR = 1: no effect', 'middle', '700')}
<g class="fig-muted">
${studies.map(([, or, lo, hi], i) => {
    const y = 92 + 42 * i
    return `${LINE(FX(lo), y, FX(hi), y, 2.5)}<rect x="${(FX(or) - 8).toFixed(1)}" y="${y - 8}" width="16" height="16" fill="currentColor"/>`
  }).join('')}
${LINE(30, 286, 620, 286, 1.5, true)}
</g>
${studies.map(([name], i) => T(30, 98 + 42 * i, 18, name)).join('')}
${T(30, 324, 19, 'Pooled', 'start', '700')}
<g class="fig-accent">
<polygon points="${FX(0.62).toFixed(1)},318 ${FX(0.85).toFixed(1)},302 ${FX(1.1).toFixed(1)},318 ${FX(0.85).toFixed(1)},334" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="2.5"/>
</g>
<g class="fig-muted">${LINE(645, 25, 645, 440, 1.5)}</g>
<g class="fig-accent">${T(670, 70, 22, 'pooled OR 0.85', 'start', '700')}</g>
${T(670, 100, 19, '95% CI 0.62 – 1.10')}
<g class="fig-accent-2">${T(670, 140, 19, 'CI crosses 1 →', 'start', '700')}${T(670, 166, 19, 'not significant', 'start', '700')}</g>
${T(670, 194, 17, 'possible benefit, inconclusive')}
${T(670, 252, 19, 'square = one study', 'start', '700')}
${T(670, 278, 17, 'line = its 95% CI')}
${T(670, 304, 17, 'diamond = the combined estimate')}
${T(670, 362, 19, 'publication bias:', 'start', '700')}
${T(670, 388, 17, 'unpublished null studies')}
${T(670, 412, 17, 'would pull this toward 1')}
</svg>`

export const mcatResearchMethodsFigures: DeckFigurePlacement[] = [
  {
    at: 'Types of Variables',
    mode: 'lead',
    figure: {
      svg: variablesSvg,
      alt:
        'Two boxes joined by a thick arrow labelled "the effect being tested": on the left, the independent variable (IV), what you manipulate — caffeine 0, 50 or 100 mg; on the right, the dependent variable (DV), what you measure — reaction time. Above, a red box labelled Confound — related to BOTH the IV and the DV, for example age or baseline health — sends dashed arrows down to both boxes, with the warning that a confound can fake the IV-to-DV arrow. Below, a grey box: controlled variables, held equal for everyone — same test, room, time of day.',
      caption: 'The lesson’s caffeine example: a confound tied to both ends can mimic the effect you are testing.',
    },
    blocks: ['- IV = what you manipulate (caffeine dose); DV = what you measure (reaction time)', '- A confound is linked to **both** the IV and the DV — that is what lets it fake an effect'],
  },
  {
    at: 'Sampling Methods',
    mode: 'lead',
    figure: {
      svg: samplingSvg,
      alt:
        'Four panels. The first three show the same population of 30 dots: 18 filled dots in group A (top three rows) and 12 open dots in group B (bottom two rows), separated by a dashed line; blue rings mark the five people sampled. Random: five rings scattered across the whole population — equal chance for all, low bias, representative. Stratified: three rings in group A and two in group B — 3 of 18 plus 2 of 12, each group sampled in proportion, low bias. Convenience: the five rings bunched in the top-left corner — the first five who walk in — all from group A, so group B is never sampled: high bias. Matched pairs: four rows, each a blue treated dot joined to a red control dot; each pair shares age and sex — a design control, not a sampling method, and it controls only the confounds it matches on.',
      caption: 'The same 30 people in each panel; rings mark who ends up in the sample (choices illustrative).',
    },
    blocks: ['- Random and stratified samples represent the population; a convenience sample (first n patients) is biased', '- Matching pairs people on chosen variables — it controls those confounds only, less than randomization'],
  },
  {
    at: 'Study Types',
    mode: 'lead',
    figure: {
      svg: studyTypesSvg,
      alt:
        'Left: a decision tree. First question: does the researcher manipulate the IV? No leads to Observational — measure, never assign — weak to moderate (correlational designs are the weak end). Yes leads to a second question: are groups formed by random assignment? No leads to Quasi-experimental — manipulated, not random — moderate. Yes leads to the randomized controlled trial (RCT) — strongest, because randomization balances confounds. Right: an upward arrow of causal-evidence strength, top to bottom: RCT, strongest; quasi-experimental, moderate; observational, weak to moderate, ordered cohort, then case–control, then cross-sectional; correlational, weak. Only random assignment supports causation.',
      caption: 'Two questions sort a design: who set the IV, and how the groups were formed.',
    },
    blocks: ['- Manipulated but not randomized = quasi-experimental; only **random assignment** supports a causal claim'],
  },
  {
    at: 'Threats to Internal Validity',
    mode: 'lead',
    figure: {
      svg: internalSvg,
      alt:
        'A study timeline from start to end with two horizontal bands: a blue treatment group (younger) above and a red control group (older) below. Each band narrows toward the end in proportion to dropout: the treatment band ends at 65% of its starting width (35% dropped, with dots peeling away), the control band at 92% (8% dropped). Labels mark where each threat enters: (1) selection bias or confounding at the start — the groups differ before the study (younger vs older); (2) history — a dashed vertical line mid-study for an outside event that hits both groups; (3) maturation — along the time arrow, people change over time on their own; (4) attrition — unequal dropout at the end. Fix: random assignment plus equal follow-up.',
      caption: 'Where each threat enters a study; band widths follow the lesson’s 35% vs 8% dropout example.',
    },
    blocks: ['- Any difference besides the IV — at the start, mid-study, over time, or in who drops out — can explain the DV'],
  },
  {
    at: 'Blinding in Studies',
    mode: 'replace-table',
    figure: {
      svg: blindingSvg,
      alt:
        'A grid of figures with columns participant and researcher, and three rows. No blinding: both figures have open eyes, coloured red — both know the assignment. Single-blind: the participant wears a blindfold (blue, blind) while the researcher knows (red). Double-blind, highlighted as the gold standard: both the participant and the researcher are blindfolded.',
      caption: 'Who knows which arm a participant is in: red knows, blue is blind.',
    },
    blocks: [
      '- **No blinding:** expectations and researcher bias differ between groups',
      '- **Single-blind:** participants blind → placebo effect equal in both arms',
      '- **Double-blind:** raters blind too → the gold standard',
      '- Blinding doesn’t remove the placebo effect — it makes it equal so a placebo arm can subtract it',
    ],
  },
  {
    at: 'Placebo & Control Groups',
    mode: 'lead',
    figure: {
      svg: placeboSvg,
      alt:
        'Bar chart of the percentage of patients who improved in a depression RCT. The placebo bar reaches 30%, all grey (placebo effect plus natural recovery). The antidepressant bar reaches 60%: the same grey 30% at the bottom plus a blue 30-point segment on top, the true drug effect, marked with a double-headed arrow. Beside it: 60% minus 30% equals 30 points — the placebo arm is the baseline you subtract. Worked example: 55% minus 25% is also 30 points. A no-treatment control would capture natural recovery only.',
      caption: 'The lesson’s depression RCT: both arms carry the placebo effect and natural recovery, so subtract the placebo arm.',
    },
    blocks: ['- True drug effect = drug arm − placebo arm: 60% − 30% = **30 points**'],
  },
  {
    at: 'Types of Experimental Designs',
    mode: 'lead',
    figure: {
      svg: designsSvg,
      alt:
        'Left, between-subjects: a pool of eight people is randomly split; four (blue) go to condition A and four (red) go to condition B, and the two groups are compared. Pros and cons: no carryover effects, but it needs a larger N. Right, within-subjects: the same people do every condition; one half does A then B, the other half B then A, and a dashed arc shows practice carrying over from the first condition to the second. Counterbalancing the order makes order effects cancel. Pros and cons: more power with fewer people, but order and carryover effects are a risk.',
      caption: 'Counterbalancing: half the subjects get A then B, half get B then A, so practice effects cancel out.',
    },
    blocks: ['- Between: no carryover, but a larger N · Within: more power — counterbalance the order to cancel carryover'],
  },
  {
    at: 'Sample Size & Power',
    mode: 'lead',
    figure: {
      svg: powerSvg,
      alt:
        'Graph of statistical power (1 − β, from 0 to 1) against sample size per group (0 to 160). Three rising S-shaped curves: a blue curve for a large effect (d = 0.8) passes the dashed 80% target line at about 25 per group; a solid red curve for a moderate effect (d = 0.5) at α = 0.05 passes it at about 63; a dashed red curve for the same moderate effect at the stricter α = 0.01 passes it at about 94. A dot on the solid red curve marks n = 40 per group, the lesson’s underpowered trial, at about 61% power. Beside the graph: power rises with larger sample size (move right along a curve), larger effect size (blue vs red), higher α (solid vs dashed red) and lower variability (same as a bigger effect size); aim for at least 80% power — 40 per arm with a moderate effect is too few.',
      caption: 'Curves from the normal approximation for a two-group comparison, Φ(d·√(n/2) − z), two-sided α.',
    },
    blocks: ['- Power = chance of detecting a real effect (1 − β); the lesson’s n = 40/arm, p = 0.09 trial is underpowered'],
  },
  {
    at: 'Meta-Analysis',
    mode: 'lead',
    figure: {
      svg: forestSvg,
      alt:
        'A schematic forest plot. Five study rows, each a square (the study’s odds ratio) with a horizontal line (its 95% confidence interval) on a log-scale odds-ratio axis from 0.25 to 4; a vertical line at OR = 1 marks no effect, with "favors treatment" to the left and "favors control" to the right. Every study’s interval crosses 1. Below a dashed line, the pooled estimate is a blue diamond centred at 0.85 spanning 0.62 to 1.10 — it also crosses 1, so the pooled effect is not significant: a possible benefit, but inconclusive. Key: square = one study, line = its 95% CI, diamond = the combined estimate. Publication bias: unpublished null studies would pull the pooled estimate toward 1.',
      caption: 'The pooled OR 0.85 (95% CI 0.62–1.10) is the lesson’s worked example; the five study rows are illustrative.',
    },
    blocks: ['- Pooled OR 0.85, 95% CI 0.62–1.10: the diamond crosses 1 → **not significant** overall'],
  },
]
