import type { DeckFigurePlacement } from './index'

/**
 * Kinematics (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * This deck is CURATED (src/data/curated-decks/mcat-kinematics.ts), so every
 * `at` below prefixes one of THAT file's slide titles, not a lesson heading.
 *
 * Every drawing is ours, drawn from the concept: the three constant-
 * acceleration motion graphs with their slope/area links, the inventory →
 * eliminate → select flow fanned out to the Big 5, the braking example as a
 * v–t triangle, free-fall symmetry (thrown up / dropped / sliding to rest),
 * a projectile parabola with the velocity decomposed at five points, the
 * ball-off-a-table scene twice (setup with its x | y inventories, then a
 * three-ball strobe for independence) and a free-body diagram on an incline.
 * No textbook, prep-company or AAMC figure was copied. Graph shapes are
 * illustrative; the only numbers drawn are the deck's own worked-example
 * values (30 m/s over 90 m; 20 m table, 5 m/s, g = 10 m/s²).
 *
 * Colour convention across the deck: the x-direction / slopes are BLUE
 * (fig-accent), the y-direction / g / areas are RED (fig-accent-2); the
 * resultant and the scenery stay in the text colour.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-kin-<figure>[-<colour>]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A rounded box outlined in the current colour; `fillOpacity` > 0 tints it with the same colour. */
const BOX = (x: number, y: number, w: number, h: number, rx = 12, sw = 2.5, fillOpacity = 0) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"/>`

/** A straight arrow in the current colour using the given marker id. */
const ARR = (x1: number, y1: number, x2: number, y2: number, id: string, sw = 3) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-end="url(#${id})"/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

/** `base` with `sub` as a subscript, then `rest` back on the baseline (tspans; `size` = the parent font-size). */
const SUB = (base: string, sub: string, rest = '', size = 17) => {
  const dy = Math.round(size * 0.28)
  return `${base}<tspan dy="${dy}" font-size="${Math.round(size * 0.72)}">${sub}</tspan>${rest ? `<tspan dy="-${dy}">${rest}</tspan>` : ''}`
}

/* 1 — Constant acceleration as three graphs: x–t, v–t, a–t with the slope / area links (lead, 1000×460) */
const PANELS = [50, 380, 710]
const motionPanel = (x0: number, title: string, yLabel: string, body: string) =>
  `${T(x0 + 125, 66, 19, title, 'middle', '700')}
<line x1="${x0}" y1="330" x2="${x0}" y2="84" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-kin-graphs)"/>
<line x1="${x0}" y1="330" x2="${x0 + 250}" y2="330" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-kin-graphs)"/>
${T(x0 + 250, 354, 17, 't', 'middle')}
${T(x0 - 12, 92, 17, yLabel, 'end')}
${body}`
const graphsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-graphs')}</defs>
${T(500, 30, 20, 'Constant acceleration: one motion, three graphs', 'middle', '700')}
${motionPanel(
  PANELS[0],
  'position x vs t',
  'x',
  `<path d="M${PANELS[0]} 310 Q${PANELS[0] + 145} 290 ${PANELS[0] + 230} 110" fill="none" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-accent">
<line x1="${PANELS[0] + 72}" y1="300" x2="${PANELS[0] + 188}" y2="200" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/>
${DOT(PANELS[0] + 130, 250, 5)}
${T(PANELS[0] + 112, 318, 17, 'slope = v', 'start', '700')}
</g>`,
)}
${motionPanel(
  PANELS[1],
  'velocity v vs t',
  'v',
  `<g class="fig-accent-2">
<polygon points="${PANELS[1]},330 ${PANELS[1]},290 ${PANELS[1] + 230},130 ${PANELS[1] + 230},330" fill="currentColor" fill-opacity="0.15"/>
${T(PANELS[1] + 118, 302, 17, 'area = Δx', 'middle', '700')}
</g>
<line x1="${PANELS[1]}" y1="290" x2="${PANELS[1] + 230}" y2="130" stroke="currentColor" stroke-width="3.5"/>
${T(PANELS[1] - 8, 296, 15, 'v₀', 'end')}
<g class="fig-accent">
<path d="M${PANELS[1] + 150} 185.7 L${PANELS[1] + 200} 185.7 L${PANELS[1] + 200} 150.9" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/>
${T(PANELS[1] + 208, 176, 17, 'slope = a', 'start', '700')}
</g>`,
)}
${motionPanel(
  PANELS[2],
  'acceleration a vs t',
  'a',
  `<g class="fig-accent-2">
<rect x="${PANELS[2]}" y="200" width="230" height="130" fill="currentColor" fill-opacity="0.15"/>
${T(PANELS[2] + 115, 272, 17, 'area = Δv', 'middle', '700')}
</g>
<line x1="${PANELS[2]}" y1="200" x2="${PANELS[2] + 230}" y2="200" stroke="currentColor" stroke-width="3.5"/>
${T(PANELS[2] - 8, 206, 15, 'a', 'end')}`,
)}
<g class="fig-accent">
<defs>${ARROW('arr-kin-graphs-b')}</defs>
${ARR(306, 140, 372, 140, 'arr-kin-graphs-b', 2.5)}
${T(339, 128, 15, 'slope', 'middle')}
${ARR(636, 140, 702, 140, 'arr-kin-graphs-b', 2.5)}
${T(669, 128, 15, 'slope', 'middle')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-kin-graphs-r')}</defs>
${ARR(372, 250, 306, 250, 'arr-kin-graphs-r', 2.5)}
${T(339, 274, 15, 'area', 'middle')}
${ARR(702, 250, 636, 250, 'arr-kin-graphs-r', 2.5)}
${T(669, 274, 15, 'area', 'middle')}
</g>
<g class="fig-accent">${T(500, 394, 18, 'slope of x–t = v  ·  slope of v–t = a', 'middle', '700')}</g>
<g class="fig-accent-2">${T(500, 422, 18, 'area under v–t = Δx  ·  area under a–t = Δv', 'middle', '700')}</g>
<g class="fig-muted">${T(500, 450, 14, 'drawn for v₀ > 0 and constant a > 0 — illustrative shapes', 'middle')}</g>
</svg>`

/* 2 — Choosing the equation: inventory → target → eliminate → select, fanned out to the Big 5 (lead, 1000×460) */
const STEPS: [string, string][] = [
  ['1  Inventory', 'every given — explicit + implicit'],
  ['2  Target', 'mark the variable asked for'],
  ['3  Eliminate', 'the one neither given nor asked'],
  ['4  Select', 'the equation without it'],
]
const FAN: [string, string][] = [
  ['Δx', 'v = v₀ + at'],
  ['v', 'Δx = v₀t + ½at²'],
  ['t', 'v² = v₀² + 2aΔx'],
  ['a', 'Δx = ½(v₀ + v)t'],
  ['v₀', 'Δx = vt − ½at²'],
]
const chooseSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-choose')}</defs>
${STEPS.map(([h, s], i) => {
  const x = 30 + i * 245
  return `${BOX(x, 28, 210, 72, 14, 2.5, i === 2 ? 0.08 : 0)}
${T(x + 105, 58, 19, h, 'middle', '700')}
${T(x + 105, 84, 14, s, 'middle')}${i < 3 ? ARR(x + 214, 64, x + 240, 64, 'arr-kin-choose', 2.5) : ''}`
}).join('\n')}
<g class="fig-muted">${T(500, 146, 16, 'the variable that is neither given nor asked …', 'middle')}</g>
${FAN.map(([v, eq], i) => {
  const cx = 110 + i * 195
  return `${BOX(cx - 40, 160, 80, 46, 23, 2.5, 0.08)}
${T(cx, 191, 22, v, 'middle', '700')}
<g class="fig-accent"><defs>${i === 0 ? ARROW('arr-kin-choose-b') : ''}</defs>${ARR(cx, 210, cx, 262, 'arr-kin-choose-b', 2.5)}</g>
${BOX(cx - 92, 268, 184, 60, 12, 2.5)}
${T(cx, 305, 20, eq, 'middle', '700')}`
}).join('\n')}
<g class="fig-muted">${T(500, 360, 16, '… names the one Big 5 equation that does not contain it', 'middle')}</g>
${T(500, 408, 21, 'One equation, one unknown — no simultaneous equations', 'middle', '700')}
<g class="fig-muted">${T(500, 440, 15, 'all five assume constant acceleration', 'middle')}</g>
</svg>`

/* 3 — Braking to a stop as a v–t triangle: area = 90 m, slope = −5 m/s² (lead at Step 2, 1000×460) */
const brakeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-brake')}</defs>
${T(500, 32, 20, 'Braking: the v–t graph checks the algebra', 'middle', '700')}
<g class="fig-accent-2">
<polygon points="120,360 120,120 720,360" fill="currentColor" fill-opacity="0.15"/>
${T(330, 290, 20, 'area = Δx = 90 m', 'middle', '700')}
${T(330, 318, 17, '½ × 30 × t = 90  ⇒  t = 6 s', 'middle')}
</g>
<line x1="120" y1="360" x2="120" y2="60" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-kin-brake)"/>
<line x1="120" y1="360" x2="840" y2="360" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-kin-brake)"/>
${T(120, 50, 17, 'v (m/s)', 'middle')}
${T(858, 366, 17, 't (s)')}
<line x1="120" y1="120" x2="720" y2="360" stroke="currentColor" stroke-width="4"/>
${DOT(120, 120, 7)}
${DOT(720, 360, 7)}
${T(108, 126, 17, '30', 'end')}
${T(108, 366, 17, '0', 'end')}
${T(138, 112, 17, 'v₀ = 30 m/s', 'start', '700')}
${T(720, 390, 17, 't = 6 s', 'middle')}
${T(736, 348, 16, 'v = 0 — "comes to rest"')}
<g class="fig-accent">
<path d="M420 240 L520 240 L520 280" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/>
${T(536, 262, 18, 'slope = a = −30 / 6 = −5 m/s²', 'start', '700')}
</g>
${T(500, 424, 18, 'Equation check: 0 = 30² + 2a(90)  ⇒  a = −5 m/s² — the slope says the same', 'middle')}
<g class="fig-muted">${T(500, 450, 14, 'negative slope = acceleration opposite the motion (deceleration)', 'middle')}</g>
</svg>`

/* 4 — Hidden variables: thrown up (symmetry), dropped (v₀ = 0), sliding to rest (v = 0) (lead, 1000×460) */
const fallSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-fall')}</defs>
${T(230, 32, 19, 'Thrown straight up', 'middle', '700')}
${T(720, 32, 19, 'Dropped', 'middle', '700')}
<line x1="40" y1="400" x2="440" y2="400" stroke="currentColor" stroke-width="3"/>
<line x1="560" y1="400" x2="980" y2="400" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted">
<path d="M160 400 L160 130 Q160 100 190 100 L270 100 Q300 100 300 130 L300 400" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="160" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
${T(230, 190, 13, 'same height', 'middle')}
${T(230, 222, 13, '⇒ same speed', 'middle')}
<rect x="580" y="100" width="120" height="300" fill="currentColor" fill-opacity="0.15"/>
</g>
${DOT(160, 400, 9)}
${DOT(160, 200, 9)}
${DOT(230, 100, 9)}
${DOT(300, 200, 9)}
${DOT(300, 400, 9)}
<g class="fig-accent">
<defs>${ARROW('arr-kin-fall-b')}</defs>
${ARR(160, 388, 160, 306, 'arr-kin-fall-b')}
${T(146, 350, 17, 'v₀', 'end', '700')}
${ARR(160, 188, 160, 146, 'arr-kin-fall-b')}
${ARR(300, 212, 300, 254, 'arr-kin-fall-b')}
${ARR(300, 304, 300, 388, 'arr-kin-fall-b')}
${T(314, 350, 15, 'same speed,')}
${T(314, 368, 15, 'opposite sign')}
${ARR(720, 148, 720, 180, 'arr-kin-fall-b')}
${ARR(720, 250, 720, 318, 'arr-kin-fall-b')}
${T(742, 290, 15, 'speeds up 10 m/s')}
${T(742, 308, 15, 'every second')}
${ARR(878, 376, 918, 376, 'arr-kin-fall-b', 2.5)}
</g>
${T(230, 54, 17, 'peak: v = 0', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-kin-fall-r')}</defs>
${T(230, 76, 15, 'but a = −g here too', 'middle', '700')}
${T(90, 126, 15, 'a = −g', 'middle', '700')}
${T(90, 144, 13, 'always', 'middle')}
${ARR(90, 160, 90, 200, 'arr-kin-fall-r', 2.5)}
${ARR(90, 250, 90, 290, 'arr-kin-fall-r', 2.5)}
${ARR(90, 340, 90, 380, 'arr-kin-fall-r', 2.5)}
</g>
${T(160, 428, 16, 't up', 'middle')}
${T(300, 428, 16, 't down', 'middle')}
${T(230, 452, 17, 't↑ = t↓', 'middle', '700')}
${DOT(722, 100, 9)}
${DOT(720, 133, 9)}
${DOT(720, 233, 9)}
${DOT(720, 391, 9)}
${T(742, 96, 16, '"dropped"', 'start', '700')}
${T(742, 116, 16, '⇒ v₀ = 0')}
${T(900, 320, 15, '"comes to rest"', 'middle', '700')}
${T(900, 340, 15, '⇒ v = 0', 'middle')}
${BOX(830, 360, 42, 32, 6, 2.5)}
${BOX(928, 360, 42, 32, 6, 2.5, 0.12)}
${T(949, 428, 14, 'stopped', 'middle')}
<g class="fig-muted">${T(760, 452, 15, '"in free fall" ⇒ a = −g ≈ −10 m/s² for every object, at every instant', 'middle')}</g>
</svg>`

/* 5 — Projectile motion: velocity decomposed at five points on the parabola (lead, 1000×460) */
const PROJ_PTS: [number, number, number][] = [
  // x, y, vy arrow length (negative = up)
  [90, 320, -90],
  [265, 147.5, -45],
  [440, 90, 0],
  [615, 147.5, 45],
  [790, 320, 90],
]
const projSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-proj')}</defs>
<g class="fig-muted"><line x1="40" y1="320" x2="900" y2="320" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/></g>
<path d="M90 320 Q440 -140 790 320" fill="none" stroke="currentColor" stroke-width="3"/>
${PROJ_PTS.map(([x, y]) => DOT(x, y, 6)).join('')}
<g class="fig-accent">
<defs>${ARROW('arr-kin-proj-b')}</defs>
${PROJ_PTS.map(([x, y]) => ARR(x, y, x + 70, y, 'arr-kin-proj-b')).join('\n')}
${T(125, 344, 16, 'v₀cosθ', 'middle', '700')}
${T(60, 412, 17, SUB('v', 'x', ` = v₀ cos θ — the same arrow at every point (${SUB('a', 'x', ' = 0)')}`), 'start', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-kin-proj-r')}</defs>
${PROJ_PTS.filter(([, , l]) => l !== 0)
  .map(([x, y, l]) => ARR(x, y, x, y + l, 'arr-kin-proj-r'))
  .join('\n')}
${T(80, 278, 16, 'v₀sinθ', 'end', '700')}
${T(440, 68, 17, SUB('v', 'y', ' = 0'), 'middle', '700')}
${ARR(940, 150, 940, 210, 'arr-kin-proj-r')}
${T(940, 232, 15, SUB('a', 'y', ' = −g', 15), 'middle', '700')}
${T(60, 440, 17, SUB('v', 'y', ` = v₀ sin θ − gt — shrinks, vanishes at the apex, then grows (${SUB('a', 'y', ' = −g)')}`), 'start', '700')}
</g>
${ARR(90, 320, 160, 230, 'arr-kin-proj')}
${T(172, 238, 18, 'v₀', 'start', '700')}
<path d="M125 320 A35 35 0 0 0 111.5 292.4" fill="none" stroke="currentColor" stroke-width="2"/>
${T(138, 304, 16, 'θ')}
${T(440, 352, 16, 'R = v₀² sin(2θ) / g — maximum at 45°, complementary angles tie', 'middle')}
${T(960, 40, 16, `at the apex ${SUB('v', 'y', ` = 0 — but ${SUB('a', 'y', ` = −g and ${SUB('v', 'x', ' ≠ 0', 16)}`, 16)}`, 16)}`, 'end', '700')}
${T(960, 64, 16, 'x and y share exactly ONE variable: t', 'end')}
</svg>`

/* 6 — Ball off a table: the setup with its x | y inventories (lead at Step 1, 1000×460) */
const tableScene = (ballLabelFree: boolean) =>
  `<line x1="80" y1="150" x2="380" y2="150" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<line x1="100" y1="152" x2="100" y2="390" stroke="currentColor" stroke-width="4"/>
<line x1="${ballLabelFree ? 300 : 360}" y1="152" x2="${ballLabelFree ? 300 : 360}" y2="390" stroke="currentColor" stroke-width="4"/>
<line x1="40" y1="390" x2="690" y2="390" stroke="currentColor" stroke-width="3"/>`
const ballSetupSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-ball')}</defs>
${T(360, 34, 20, 'Ball off a table: one picture, two inventories', 'middle', '700')}
${tableScene(false)}
<g class="fig-muted"><path d="M380 140 Q440 140 500 390" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/></g>
${DOT(380, 140, 10)}
<circle class="fig-bg" cx="500" cy="390" r="10" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3"/>
${T(520, 330, 16, 't = ? (shared)')}
<g class="fig-accent">
<defs>${ARROW('arr-kin-ball-b')}</defs>
${ARR(392, 140, 462, 140, 'arr-kin-ball-b')}
${T(474, 146, 17, SUB('v', 'x', ' = 5 m/s'), 'start', '700')}
<path d="M380 418 L380 430 L500 430 L500 418" fill="none" stroke="currentColor" stroke-width="2"/>
${T(440, 452, 17, 'x = ?  (asked)', 'middle', '700')}
${BOX(700, 70, 130, 280, 14, 2.5, 0.06)}
${T(765, 102, 19, 'x', 'middle', '700')}
${T(765, 142, 17, SUB('v', 'x', ' = 5 m/s'), 'middle')}
${T(765, 176, 17, SUB('a', 'x', ' = 0'), 'middle')}
${T(765, 210, 17, 'x = ?', 'middle')}
${T(765, 244, 17, 't = ?', 'middle')}
${T(840, 436, 16, `then x = ${SUB('v', 'x', ' · t', 16)}`, 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-kin-ball-r')}</defs>
${T(392, 118, 15, SUB('v', '0y', ' = 0 — rolls off horizontally', 15))}
${ARR(600, 190, 600, 250, 'arr-kin-ball-r')}
${T(600, 276, 16, SUB('a', 'y', ' = −10 m/s²', 16), 'middle', '700')}
<path d="M72 150 L64 150 L64 390 L72 390" fill="none" stroke="currentColor" stroke-width="2"/>
${T(56, 262, 16, 'Δy =', 'end', '700')}
${T(56, 284, 16, '−20 m', 'end', '700')}
${BOX(850, 70, 130, 280, 14, 2.5, 0.06)}
${T(915, 102, 19, 'y', 'middle', '700')}
${T(915, 142, 17, SUB('v', '0y', ' = 0'), 'middle')}
${T(915, 176, 17, SUB('a', 'y', ' = −10 m/s²'), 'middle')}
${T(915, 210, 17, 'Δy = −20 m', 'middle')}
${T(915, 244, 17, 't = ?', 'middle')}
${T(915, 296, 15, 'everything but t', 'middle', '700')}
${T(915, 316, 15, '→ start here', 'middle', '700')}
${T(840, 408, 16, 'y gives t first,', 'middle', '700')}
</g>
<g class="fig-muted">
<line x1="830" y1="240" x2="850" y2="240" stroke="currentColor" stroke-width="2"/>
${T(840, 380, 15, 'the columns share only t', 'middle')}
</g>
</svg>`

/* 7 — Independence: three balls leave the table together — same WHEN, different WHERE (after Step 3, 1000×460) */
const strobeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-strobe')}</defs>
${T(360, 34, 20, 'Roll speed changes WHERE it lands, never WHEN', 'middle', '700')}
${T(60, 70, 15, 'three balls leave the 20 m table at the same instant:')}
${DOT(68, 92, 6)}${T(80, 97, 15, `dropped, ${SUB('v', 'x', ' = 0', 15)}`)}
<g class="fig-accent">${DOT(218, 92, 6)}${T(230, 97, 15, SUB('v', 'x', ' = 5 m/s', 15), 'start', '700')}</g>
<g class="fig-accent-2">${DOT(340, 92, 6)}${T(352, 97, 15, SUB('v', 'x', ' = 10 m/s', 15), 'start', '700')}</g>
${tableScene(true)}
<g class="fig-muted">
<line x1="380" y1="150" x2="380" y2="390" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="380" y1="210" x2="650" y2="210" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="380" y1="390" x2="650" y2="390" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
</g>
${T(368, 205, 15, 't = 1 s', 'end')}
${T(368, 383, 15, 't = 2 s', 'end')}
<g class="fig-accent"><path d="M380 150 Q440 150 500 390" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-accent-2"><path d="M380 150 Q500 150 620 390" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
${DOT(380, 140, 9)}
${DOT(380, 210, 9)}
${DOT(380, 381, 9)}
<g class="fig-accent">${DOT(440, 210, 9)}${DOT(500, 381, 9)}${T(500, 418, 16, '10 m = 5 × 2', 'middle', '700')}</g>
<g class="fig-accent-2">${DOT(500, 210, 9)}${DOT(620, 381, 9)}${T(620, 418, 16, '20 m = 10 × 2', 'middle', '700')}</g>
${T(380, 418, 16, '0 m', 'middle')}
${T(360, 450, 15, 'same drop ⇒ same time; the horizontal speed only sets the distance', 'middle')}
<g class="fig-accent-2">
${BOX(720, 110, 260, 112, 14, 2.5, 0.06)}
${T(850, 142, 17, 'WHEN — the y-inventory', 'middle', '700')}
${T(850, 172, 16, '20 = ½(10)t²  ⇒  t = 2 s', 'middle')}
${T(850, 200, 15, 'identical for all three balls', 'middle')}
</g>
<g class="fig-accent">
${BOX(720, 250, 260, 112, 14, 2.5, 0.06)}
${T(850, 282, 17, 'WHERE — the x-inventory', 'middle', '700')}
${T(850, 312, 16, `x = ${SUB('v', 'x', ' t = 0 · 10 · 20 m', 16)}`, 'middle')}
${T(850, 340, 15, 'faster roll ⇒ farther, never later', 'middle')}
</g>
<g class="fig-muted">${T(850, 400, 15, 'the only shared variable is t', 'middle')}</g>
</svg>`

/* 8 — Free-body diagram on an incline: weight decomposed along / perpendicular to the plane (lead, 1000×460) */
const inclineSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-incl')}</defs>
${T(320, 36, 20, 'Free-body diagram on an incline', 'middle', '700')}
<g class="fig-muted">
<polygon points="80,380 560,380 560,140" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<defs>${ARROW('arr-kin-incl-m')}</defs>
${ARR(120, 120, 183, 89, 'arr-kin-incl-m', 2)}
${ARR(120, 120, 89, 57, 'arr-kin-incl-m', 2)}
${T(192, 94, 15, 'x′ along the plane')}
${T(96, 50, 15, 'y′ ⊥ plane')}
${T(120, 172, 14, 'tilt the axes')}
<line x1="261" y1="262" x2="309" y2="358" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="357" y1="334" x2="309" y2="358" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
</g>
<path d="M130 380 A50 50 0 0 0 124.7 357.6" fill="none" stroke="currentColor" stroke-width="2"/>
${T(142, 374, 17, 'θ')}
<polygon points="293.2,273.4 346.8,246.6 324.5,201.9 270.8,228.7" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
${ARR(309, 238, 309, 358, 'arr-kin-incl', 3.5)}
${T(320, 376, 18, 'mg', 'start', '700')}
<path d="M309 283 A45 45 0 0 0 329 278" fill="none" stroke="currentColor" stroke-width="2"/>
${T(326, 302, 16, 'θ')}
<g class="fig-accent-2">
<defs>${ARROW('arr-kin-incl-r')}</defs>
${ARR(309, 238, 261, 262, 'arr-kin-incl-r', 3.5)}
${T(252, 290, 17, 'mg sinθ', 'end', '700')}
${ARR(309, 238, 357, 334, 'arr-kin-incl-r', 3.5)}
${T(368, 346, 17, 'mg cosθ', 'start', '700')}
${BOX(660, 70, 320, 70, 14, 2.5, 0.06)}
${T(820, 100, 18, 'along the plane: mg sinθ', 'middle', '700')}
${T(820, 126, 15, 'pulls the block down the slope', 'middle')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-kin-incl-b')}</defs>
${ARR(309, 238, 261, 142, 'arr-kin-incl-b', 3.5)}
${T(256, 134, 17, 'N = mg cosθ', 'end', '700')}
${ARR(309, 238, 345, 220, 'arr-kin-incl-b', 3.5)}
${T(354, 212, 17, 'f = μN', 'start', '700')}
${BOX(660, 160, 320, 70, 14, 2.5, 0.06)}
${T(820, 190, 18, 'perpendicular: N = mg cosθ', 'middle', '700')}
${T(820, 216, 15, 'when nothing else pushes vertically', 'middle')}
</g>
${BOX(660, 250, 320, 70, 14, 2.5)}
${T(820, 280, 18, 'friction: f = μN = μ mg cosθ', 'middle', '700')}
${T(820, 306, 15, 'static f ≤ μₛN · kinetic f = μₖN', 'middle')}
${T(820, 362, 17, 'Inventory per axis, then F = ma:', 'middle', '700')}
${T(820, 392, 17, 'x′:  mg sinθ − f = ma', 'middle')}
${T(820, 420, 17, 'y′:  N − mg cosθ = 0', 'middle')}
</svg>`

export const mcatKinematicsFigures: DeckFigurePlacement[] = [
  {
    at: 'The Big 5 Kinematic Equations',
    mode: 'lead',
    figure: {
      svg: graphsSvg,
      alt:
        'Three graphs of the same constant-acceleration motion, side by side. Position x vs t: a concave-up curve with a blue dashed tangent at one point labelled slope = v. Velocity v vs t: a straight rising line starting at v₀, the region under it shaded red and labelled area = Δx, with a blue rise/run triangle labelled slope = a. Acceleration a vs t: a flat horizontal line, the region under it shaded red and labelled area = Δv. Blue arrows labelled slope point from each graph to the next (x–t → v–t → a–t); red arrows labelled area point back. Summary lines: slope of x–t = v, slope of v–t = a; area under v–t = Δx, area under a–t = Δv. Drawn for v₀ > 0 and constant a > 0, illustrative shapes.',
      caption: 'Constant acceleration as three graphs: slope carries you rightward (x→v→a), area carries you back (a→v→x) — illustrative.',
    },
    blocks: [
      '- Each Big 5 equation drops **one** of $\\Delta x$, $v_0$, $v$, $a$, $t$ — the missing one picks the equation',
      '- Slope of $x$–$t$ is $v$; slope of $v$–$t$ is $a$; area under $v$–$t$ is $\\Delta x$ (constant $a$ only)',
    ],
  },
  {
    at: 'Choosing the Right Equation',
    mode: 'lead',
    figure: {
      svg: chooseSvg,
      alt:
        'A flow of four boxes left to right: 1 Inventory (every given, explicit and implicit) → 2 Target (mark the variable asked for) → 3 Eliminate (the one neither given nor asked, shaded) → 4 Select (the equation without it). Below, five pills for the possible missing variable, Δx, v, t, a, v₀, each with a blue arrow down to the Big 5 equation that lacks it: missing Δx → v = v₀ + at; missing v → Δx = v₀t + ½at²; missing t → v² = v₀² + 2aΔx; missing a → Δx = ½(v₀ + v)t; missing v₀ → Δx = vt − ½at². Bottom: one equation, one unknown, no simultaneous equations; all five assume constant acceleration.',
      caption: 'The variable inventory method: the one variable that is neither given nor asked names the equation to use.',
    },
    blocks: [
      '- Inventory (explicit **and** implicit) → mark the target → find the one variable that is neither',
      '- That missing variable names the equation — one equation, one unknown',
    ],
  },
  {
    at: 'Braking to a Stop — Step 2',
    mode: 'lead',
    figure: {
      svg: brakeSvg,
      alt:
        'A velocity–time graph for the braking car. The line starts at v₀ = 30 m/s on the v-axis and falls straight to v = 0 ("comes to rest") on the t-axis at t = 6 s. The triangle under the line is shaded red and labelled area = Δx = 90 m; ½ × 30 × t = 90 gives t = 6 s. A blue rise/run triangle on the line is labelled slope = a = −30 / 6 = −5 m/s². Footer: the equation check 0 = 30² + 2a(90) gives a = −5 m/s², the same as the slope; the negative slope means the acceleration opposes the motion.',
      caption: 'The braking example as a v–t triangle: its area is the 90 m stopping distance, its slope is the −5 m/s² acceleration (deck values).',
    },
    blocks: [
      '- Area under $v$–$t$ is $\\Delta x = 90$ m $\\Rightarrow t = 6$ s; the slope is $a = -30/6 = -5\\ \\text{m/s}^2$',
      '- Same answer as $v^2 = v_0^2 + 2a\\Delta x$ — the graph is the sanity check',
    ],
  },
  {
    at: 'Hidden Variables',
    mode: 'lead',
    figure: {
      svg: fallSvg,
      alt:
        'Three free-fall scenes. Left, a ball thrown straight up: it rises along one dashed line and comes down along another, with blue velocity arrows that shrink on the way up, vanish at the peak (peak: v = 0, but a = −g here too), and grow on the way down; at the launch height the return arrow has the same length pointing down (same speed, opposite sign); a dashed horizontal line marks same height ⇒ same speed; red arrows down the side say a = −g always; below the ground: t up, t down, t↑ = t↓. Middle, a ball dropped from a ledge ("dropped" ⇒ v₀ = 0): positions at equal time steps spread out 1 : 3 : 5 and the blue arrows grow, speeding up 10 m/s every second. Right, a sliding box with an arrow and a stopped box ("comes to rest" ⇒ v = 0). Footer: "in free fall" ⇒ a = −g ≈ −10 m/s² for every object at every instant.',
      caption: 'The wording is data: "peak" ⇒ v = 0 (a still −g), "dropped" ⇒ v₀ = 0, "comes to rest" ⇒ v = 0; free fall is symmetric up and down.',
    },
    blocks: [
      '- The wording **is** data: "rest" ⇒ $v = 0$, "dropped" ⇒ $v_0 = 0$, "peak" ⇒ $v_y = 0$, "free fall" ⇒ $a = -g$',
      '- Free-fall symmetry: $t_{\\text{up}} = t_{\\text{down}}$ and the same speed at the same height',
    ],
  },
  {
    at: 'Projectile Motion',
    mode: 'lead',
    figure: {
      svg: projSvg,
      alt:
        'A projectile parabola from launch to landing over a dashed ground line, with the velocity decomposed at five points. At launch the resultant v₀ makes angle θ with the ground and splits into a blue horizontal component v₀cosθ and a red vertical component v₀sinθ. At every point the blue horizontal arrow has the same length (v_x = v₀cosθ, a_x = 0). The red vertical arrow points up and shrinks on the way up, is absent at the apex (v_y = 0), then points down and grows on the way down (v_y = v₀sinθ − gt, a_y = −g). A red arrow at the right marks a_y = −g. Notes: at the apex v_y = 0 but a_y = −g and v_x ≠ 0; x and y share exactly one variable, t; range R = v₀²sin(2θ)/g, maximum at 45°, complementary angles tie.',
      caption: 'Projectile motion is two independent problems: a constant horizontal velocity and ordinary vertical free fall, linked only by t — illustrative.',
    },
    blocks: [
      '- Horizontal: $a_x = 0$, so $v_x = v_0\\cos\\theta$ never changes; vertical: $a_y = -g$, plain free fall',
      '- The two axes share exactly one variable, $t$; at the apex $v_y = 0$ but $a_y = -g$',
    ],
  },
  {
    at: 'Ball off a Table — Step 1',
    mode: 'lead',
    figure: {
      svg: ballSetupSvg,
      alt:
        'A ball leaves the edge of a 20 m high table with a blue horizontal arrow v_x = 5 m/s and a red note v₀y = 0 (rolls off horizontally); a dashed parabola leads to a dashed open circle on the floor. A red bracket on the left marks Δy = −20 m, a red arrow marks a_y = −10 m/s², a blue bracket under the floor marks x = ? (asked), and the flight is labelled t = ? (shared by x and y). On the right, two inventory columns: x in blue (v_x = 5 m/s, a_x = 0, x = ?, t = ?) and y in red (v₀y = 0, a_y = −10 m/s², Δy = −20 m, t = ?) joined only at t; the y column says everything but t → start here; below: the columns share only t; y gives t first, then x = v_x · t.',
      caption: 'The ball-off-a-table setup with one inventory per axis (deck values): the y column is complete except t, so it is solved first.',
    },
    blocks: [
      '- $x$ and $y$ get separate inventories; the only shared entry is $t$',
      '- The $y$ column is complete except $t$ — solve there first, then carry $t$ to $x$',
    ],
  },
  {
    at: 'Ball off a Table — Step 3',
    mode: 'after',
    figure: {
      svg: strobeSvg,
      alt:
        'Three balls leave the same 20 m table at the same instant: one dropped (v_x = 0, falls straight down a dashed line), one rolling at v_x = 5 m/s (blue parabola) and one at v_x = 10 m/s (red parabola). Dashed horizontal lines at t = 1 s and t = 2 s show all three at the same height at the same time; at t = 2 s all three reach the floor, landing at 0 m, 10 m = 5 × 2 and 20 m = 10 × 2 from the base. Two boxes on the right: WHEN — the y-inventory: 20 = ½(10)t² ⇒ t = 2 s, identical for all three balls; WHERE — the x-inventory: x = v_x t = 0 · 10 · 20 m, faster roll ⇒ farther, never later. The only shared variable is t.',
      caption: 'Independence of x and y (deck values): the drop fixes WHEN all three land (t = 2 s); the roll speed only fixes WHERE.',
    },
    blocks: [
      '- All three balls hit the floor at $t = 2$ s — the drop alone decides **when**',
      '- $x = v_x t$: 0 m, 10 m, 20 m — the roll speed alone decides **where**',
    ],
  },
  {
    at: 'Cumulative Review — Inclined Plane',
    mode: 'lead',
    figure: {
      svg: inclineSvg,
      alt:
        'A block rests on an incline of angle θ (shaded triangle, angle marked at the bottom-left corner). From the block: the weight mg points straight down; it is decomposed into two red components, mg sinθ along the plane (down the slope) and mg cosθ perpendicular into the surface, with dashed lines completing the rectangle and θ marked between mg and the perpendicular component. Blue arrows show the normal force N = mg cosθ pointing out of the surface and friction f = μN pointing up the slope. Tilted grey axes x′ (along the plane) and y′ (perpendicular) sit at the upper left. Boxes on the right: along the plane mg sinθ pulls the block down the slope; perpendicular N = mg cosθ when nothing else pushes vertically; friction f = μN = μ mg cosθ (static ≤ μₛN, kinetic = μₖN); inventory per axis then F = ma: x′: mg sinθ − f = ma, y′: N − mg cosθ = 0.',
      caption: 'Free-body diagram on an incline: tilt the axes to the plane and split the weight into mg sinθ (along) and mg cosθ (into the surface) — schematic.',
    },
    blocks: [
      '- Tilt the axes to the plane: weight splits into $mg\\sin\\theta$ (along) and $mg\\cos\\theta$ (into the surface)',
      '- $N = mg\\cos\\theta$ when nothing else pushes vertically, so $f = \\mu mg\\cos\\theta$',
    ],
  },
]
