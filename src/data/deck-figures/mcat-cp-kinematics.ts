import type { DeckFigurePlacement } from './index'

/**
 * Kinematics (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29;
 * re-anchored 2026-11-04 when the curated deck was retired and the lesson
 * (mcat-mcat-physics-mechanics-kinematics-mcat-part1…4) was rewritten to the
 * Nov 2026 class standard, so every `at` below prefixes a LESSON heading.
 *
 * Every drawing is ours, drawn from the concept: the three constant-
 * acceleration motion graphs with their slope/area links, the inventory →
 * eliminate → select flow fanned out to the Big 5, the sprinter example as a
 * v–t triangle, free-fall symmetry (thrown up / dropped / sliding to rest),
 * a projectile parabola with the velocity decomposed at five points and the
 * horizontal-launch scene twice (setup with its x | y inventories, then a
 * three-ball strobe for independence). The incline free-body diagram was
 * dropped with the curated deck: inclines are not in this lesson.
 * No textbook, prep-company or AAMC figure was copied. Graph shapes are
 * illustrative; the only numbers drawn are the lesson's own worked-example
 * values (sprinter 2 m/s² for 6 s; 45 m ledge, 20 m/s, g = 10 m/s²).
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

/* 3 — The sprinter from rest as a v–t triangle: area = 36 m, slope = 2 m/s² (after the worked example, 1000×460) */
const sprintSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-sprint')}</defs>
${T(500, 32, 20, 'From rest: the v–t graph checks the algebra', 'middle', '700')}
<g class="fig-accent-2">
<polygon points="120,360 720,360 720,120" fill="currentColor" fill-opacity="0.15"/>
${T(560, 290, 20, 'area = Δx = ½ × 6 × 12 = 36 m', 'middle', '700')}
${T(560, 318, 17, 'the triangle IS ½(v₀ + v)t with v₀ = 0', 'middle')}
</g>
<line x1="120" y1="360" x2="120" y2="60" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-kin-sprint)"/>
<line x1="120" y1="360" x2="840" y2="360" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-kin-sprint)"/>
${T(120, 50, 17, 'v (m/s)', 'middle')}
${T(858, 366, 17, 't (s)')}
<g class="fig-muted"><line x1="120" y1="120" x2="720" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/></g>
<line x1="120" y1="360" x2="720" y2="120" stroke="currentColor" stroke-width="4"/>
${DOT(120, 360, 7)}
${DOT(720, 120, 7)}
${T(108, 126, 17, '12', 'end')}
${T(108, 366, 17, '0', 'end')}
${T(130, 392, 17, 'v₀ = 0 — "from rest"', 'start', '700')}
${T(720, 390, 17, 't = 6 s', 'middle')}
${T(736, 114, 16, 'v = 12 m/s')}
<g class="fig-accent">
<path d="M320 280 L420 280 L420 240" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/>
${T(200, 200, 18, 'slope = a = 12 / 6 = 2 m/s²', 'start', '700')}
</g>
${T(500, 424, 18, 'Equation check: Δx = v₀t + ½at² = 0 + ½(2)(6)² = 36 m — the area says the same', 'middle')}
<g class="fig-muted">${T(500, 450, 14, 'constant a = a straight v–t line; starting from rest = it starts at the origin', 'middle')}</g>
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
<g class="fig-muted">${T(720, 452, 15, '"in free fall" ⇒ a = g ≈ 10 m/s² downward — every object, every instant', 'middle')}</g>
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

/* 6 — Horizontal launch off a 45 m ledge: the setup with its x | y inventories (after the worked example, 1000×460) */
const tableScene = (ballLabelFree: boolean) =>
  `<line x1="80" y1="150" x2="380" y2="150" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<line x1="100" y1="152" x2="100" y2="390" stroke="currentColor" stroke-width="4"/>
<line x1="${ballLabelFree ? 300 : 360}" y1="152" x2="${ballLabelFree ? 300 : 360}" y2="390" stroke="currentColor" stroke-width="4"/>
<line x1="40" y1="390" x2="690" y2="390" stroke="currentColor" stroke-width="3"/>`
const ballSetupSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-ball')}</defs>
${T(360, 34, 20, 'Horizontal launch: one picture, two inventories', 'middle', '700')}
${tableScene(false)}
<g class="fig-muted"><path d="M380 140 Q440 140 500 390" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/></g>
${DOT(380, 140, 10)}
<circle class="fig-bg" cx="500" cy="390" r="10" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3"/>
${T(520, 330, 16, 't = ? (shared)')}
<g class="fig-accent">
<defs>${ARROW('arr-kin-ball-b')}</defs>
${ARR(392, 140, 462, 140, 'arr-kin-ball-b')}
${T(474, 146, 17, SUB('v', 'x', ' = 20 m/s'), 'start', '700')}
<path d="M380 418 L380 430 L500 430 L500 418" fill="none" stroke="currentColor" stroke-width="2"/>
${T(440, 452, 17, 'x = ?  (asked)', 'middle', '700')}
${BOX(700, 70, 130, 280, 14, 2.5, 0.06)}
${T(765, 102, 19, 'x', 'middle', '700')}
${T(765, 142, 17, SUB('v', 'x', ' = 20 m/s'), 'middle')}
${T(765, 176, 17, SUB('a', 'x', ' = 0'), 'middle')}
${T(765, 210, 17, 'x = ?', 'middle')}
${T(765, 244, 17, 't = ?', 'middle')}
${T(840, 436, 16, `then x = ${SUB('v', 'x', ' · t', 16)}`, 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-kin-ball-r')}</defs>
${T(392, 118, 15, SUB('v', '0y', ' = 0 — launched horizontally', 15))}
${ARR(600, 190, 600, 250, 'arr-kin-ball-r')}
${T(600, 276, 16, SUB('a', 'y', ' = 10 m/s² (down +)', 16), 'middle', '700')}
<path d="M72 150 L64 150 L64 390 L72 390" fill="none" stroke="currentColor" stroke-width="2"/>
${T(56, 262, 16, 'Δy =', 'end', '700')}
${T(56, 284, 16, '45 m', 'end', '700')}
${BOX(850, 70, 130, 280, 14, 2.5, 0.06)}
${T(915, 102, 19, 'y', 'middle', '700')}
${T(915, 142, 17, SUB('v', '0y', ' = 0'), 'middle')}
${T(915, 176, 17, SUB('a', 'y', ' = 10 m/s²'), 'middle')}
${T(915, 210, 17, 'Δy = 45 m', 'middle')}
${T(915, 244, 17, 't = ?', 'middle')}
${T(915, 270, 13, '(down = +)', 'middle')}
${T(915, 296, 15, 'everything but t', 'middle', '700')}
${T(915, 316, 15, '→ start here', 'middle', '700')}
${T(840, 408, 16, 'y gives t first,', 'middle', '700')}
</g>
<g class="fig-muted">
<line x1="830" y1="240" x2="850" y2="240" stroke="currentColor" stroke-width="2"/>
${T(840, 380, 15, 'the columns share only t', 'middle')}
</g>
</svg>`

/* 7 — Independence: three balls leave the ledge together — same WHEN, different WHERE (after the worked example, 1000×460).
   The parabolas are quadratic Béziers with the control point level with the launch, so y ∝ t² along them:
   the 240 px drop is 45 m / 3 s, and the dots sit at 1/3 (1 s) and 2/3 (2 s) of the way along. */
const strobeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-strobe')}</defs>
${T(360, 34, 20, 'Launch speed changes WHERE it lands, never WHEN', 'middle', '700')}
${T(60, 70, 15, 'three balls leave the 45 m ledge at the same instant:')}
${DOT(68, 92, 6)}${T(80, 97, 15, `dropped, ${SUB('v', 'x', ' = 0', 15)}`)}
<g class="fig-accent">${DOT(218, 92, 6)}${T(230, 97, 15, SUB('v', 'x', ' = 10 m/s', 15), 'start', '700')}</g>
<g class="fig-accent-2">${DOT(340, 92, 6)}${T(352, 97, 15, SUB('v', 'x', ' = 20 m/s', 15), 'start', '700')}</g>
${tableScene(true)}
<g class="fig-muted">
<line x1="380" y1="150" x2="380" y2="390" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="380" y1="177" x2="650" y2="177" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="380" y1="257" x2="650" y2="257" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="380" y1="390" x2="650" y2="390" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
</g>
${T(368, 182, 15, 't = 1 s', 'end')}
${T(368, 262, 15, 't = 2 s', 'end')}
${T(368, 383, 15, 't = 3 s', 'end')}
<g class="fig-accent"><path d="M380 150 Q440 150 500 390" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-accent-2"><path d="M380 150 Q500 150 620 390" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
${DOT(380, 140, 9)}
${DOT(380, 177, 9)}
${DOT(380, 257, 9)}
${DOT(380, 381, 9)}
<g class="fig-accent">${DOT(420, 177, 9)}${DOT(460, 257, 9)}${DOT(500, 381, 9)}${T(500, 418, 16, '30 m = 10 × 3', 'middle', '700')}</g>
<g class="fig-accent-2">${DOT(460, 177, 9)}${DOT(540, 257, 9)}${DOT(620, 381, 9)}${T(620, 418, 16, '60 m = 20 × 3', 'middle', '700')}</g>
${T(380, 418, 16, '0 m', 'middle')}
${T(360, 450, 15, 'same drop ⇒ same time; the horizontal speed only sets the distance', 'middle')}
<g class="fig-accent-2">
${BOX(720, 110, 260, 112, 14, 2.5, 0.06)}
${T(850, 142, 17, 'WHEN — the y-inventory', 'middle', '700')}
${T(850, 172, 16, '45 = 5t²  ⇒  t = 3 s', 'middle')}
${T(850, 200, 15, 'identical for all three balls', 'middle')}
</g>
<g class="fig-accent">
${BOX(720, 250, 260, 112, 14, 2.5, 0.06)}
${T(850, 282, 17, 'WHERE — the x-inventory', 'middle', '700')}
${T(850, 312, 16, `x = ${SUB('v', 'x', ' t = 0 · 30 · 60 m', 16)}`, 'middle')}
${T(850, 340, 15, 'faster launch ⇒ farther, never later', 'middle')}
</g>
<g class="fig-muted">${T(850, 400, 15, 'the only shared variable is t', 'middle')}</g>
</svg>`

export const mcatKinematicsFigures: DeckFigurePlacement[] = [
  // Part 1 — the graph-reading section (its slide title is "Reading Motion Graphs (High Yield)").
  {
    at: 'Reading Motion Graphs',
    mode: 'lead',
    figure: {
      svg: graphsSvg,
      alt:
        'Three graphs of the same constant-acceleration motion, side by side. Position x vs t: a concave-up curve with a blue dashed tangent at one point labelled slope = v. Velocity v vs t: a straight rising line starting at v₀, the region under it shaded red and labelled area = Δx, with a blue rise/run triangle labelled slope = a. Acceleration a vs t: a flat horizontal line, the region under it shaded red and labelled area = Δv. Blue arrows labelled slope point from each graph to the next (x–t → v–t → a–t); red arrows labelled area point back. Summary lines: slope of x–t = v, slope of v–t = a; area under v–t = Δx, area under a–t = Δv. Drawn for v₀ > 0 and constant a > 0, illustrative shapes.',
      caption: 'Constant acceleration as three graphs: slope carries you rightward (x→v→a), area carries you back (a→v→x) — illustrative.',
    },
    blocks: [
      '- Slope of $x$–$t$ is $v$; slope of $v$–$t$ is $a$ — a curved $x$–$t$ graph means the velocity is changing',
      '- Area under $v$–$t$ is $\\Delta x$ (below the axis counts negative); area under $a$–$t$ is $\\Delta v$',
    ],
  },
  // Part 2 — the Big 5 table ("each equation is missing exactly one variable").
  {
    at: 'The Big 5',
    mode: 'lead',
    figure: {
      svg: chooseSvg,
      alt:
        'A flow of four boxes left to right: 1 Inventory (every given, explicit and implicit) → 2 Target (mark the variable asked for) → 3 Eliminate (the one neither given nor asked, shaded) → 4 Select (the equation without it). Below, five pills for the possible missing variable, Δx, v, t, a, v₀, each with a blue arrow down to the Big 5 equation that lacks it: missing Δx → v = v₀ + at; missing v → Δx = v₀t + ½at²; missing t → v² = v₀² + 2aΔx; missing a → Δx = ½(v₀ + v)t; missing v₀ → Δx = vt − ½at². Bottom: one equation, one unknown, no simultaneous equations; all five assume constant acceleration.',
      caption: 'The variable inventory method: the one variable that is neither given nor asked names the equation to use.',
    },
    blocks: [
      '- Inventory (explicit **and** implicit) → mark the target → find the one variable that is neither',
      '- That missing variable names the equation — one equation, one unknown; no time given ⇒ $v^2 = v_0^2 + 2a\\Delta x$',
    ],
  },
  // Part 2 — behind the sprinter example (it prints that example's 12 m/s, 36 m and 2 m/s²).
  {
    at: 'Worked Example — Constant Acceleration from Rest',
    mode: 'after',
    figure: {
      svg: sprintSvg,
      alt:
        'A velocity–time graph for the sprinter. The line starts at the origin (v₀ = 0, "from rest") and rises straight to v = 12 m/s at t = 6 s, with a dashed guide at 12 on the v-axis. The triangle under the line is shaded red and labelled area = Δx = ½ × 6 × 12 = 36 m — the triangle is ½(v₀ + v)t with v₀ = 0. A blue rise/run triangle on the line is labelled slope = a = 12 / 6 = 2 m/s². Footer: the equation check Δx = v₀t + ½at² = 0 + ½(2)(6)² = 36 m, the same as the area; constant a is a straight v–t line and starting from rest means it starts at the origin.',
      caption: 'The sprinter as a v–t triangle: its area is the 36 m covered, its slope is the 2 m/s² acceleration (lesson values).',
    },
    blocks: [
      '- Area under $v$–$t$ is $\\Delta x = \\tfrac{1}{2}(6)(12) = 36$ m; the slope is $a = 12/6 = 2\\ \\text{m/s}^2$',
      '- Same answer as $\\Delta x = v_0 t + \\tfrac{1}{2}at^2$ — the graph is the sanity check',
    ],
  },
  // Part 2 — in front of the symmetry section; the dropped panel recaps the Free Fall section just before it.
  {
    at: 'Symmetry of Vertical Throws',
    mode: 'lead',
    figure: {
      svg: fallSvg,
      alt:
        'Three free-fall scenes. Left, a ball thrown straight up: it rises along one dashed line and comes down along another, with blue velocity arrows that shrink on the way up, vanish at the peak (peak: v = 0, but a = −g here too), and grow on the way down; at the launch height the return arrow has the same length pointing down (same speed, opposite sign); a dashed horizontal line marks same height ⇒ same speed; red arrows down the side say a = −g always; below the ground: t up, t down, t↑ = t↓. Middle, a ball dropped from a ledge ("dropped" ⇒ v₀ = 0): positions at equal time steps spread out 1 : 3 : 5 and the blue arrows grow, speeding up 10 m/s every second. Right, a sliding box with an arrow and a stopped box ("comes to rest" ⇒ v = 0). Footer: "in free fall" ⇒ a = g ≈ 10 m/s² downward for every object at every instant.',
      caption: 'The wording is data: "peak" ⇒ v = 0 (a still g, never zero), "dropped" ⇒ v₀ = 0, "comes to rest" ⇒ v = 0; free fall is symmetric up and down.',
    },
    blocks: [
      '- The wording **is** data: "rest" ⇒ $v = 0$, "dropped" ⇒ $v_0 = 0$, "peak" ⇒ $v = 0$ but $a = g$, "free fall" ⇒ $a = g$ downward',
      '- Symmetry: $t_{\\text{up}} = t_{\\text{down}} = v_0/g$, and it returns with the same speed it left with',
    ],
  },
  // Part 3 — in front of the independence rule and its table.
  {
    at: 'The One Rule of Projectile Motion',
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
  // Part 3 — both behind the horizontal-launch example (they print its 45 m, 20 m/s, t = 3 s, 60 m).
  // A second `after` on the same heading is inserted AHEAD of the first, so the
  // strobe is listed first here and the setup picture shows first in class.
  {
    at: 'Worked Example — Horizontal Launch',
    mode: 'after',
    figure: {
      svg: strobeSvg,
      alt:
        'Three balls leave the same 45 m ledge at the same instant: one dropped (v_x = 0, falls straight down a dashed line), one launched at v_x = 10 m/s (blue parabola) and one at v_x = 20 m/s (red parabola). Dashed horizontal lines at t = 1 s and t = 2 s show all three at the same height at the same time; at t = 3 s all three reach the ground, landing at 0 m, 30 m = 10 × 3 and 60 m = 20 × 3 from the base. Two boxes on the right: WHEN — the y-inventory: 45 = 5t² ⇒ t = 3 s, identical for all three balls; WHERE — the x-inventory: x = v_x t = 0 · 30 · 60 m, faster launch ⇒ farther, never later. The only shared variable is t.',
      caption: 'Independence of x and y (lesson values): the 45 m drop fixes WHEN all three land (t = 3 s); the launch speed only fixes WHERE.',
    },
    blocks: [
      '- All three balls hit the ground at $t = 3$ s — the drop alone decides **when**',
      '- $x = v_x t$: 0 m, 30 m, 60 m — the launch speed alone decides **where**',
    ],
  },
  {
    at: 'Worked Example — Horizontal Launch',
    mode: 'after',
    figure: {
      svg: ballSetupSvg,
      alt:
        'A ball leaves the edge of a 45 m high ledge with a blue horizontal arrow v_x = 20 m/s and a red note v₀y = 0 (launched horizontally); a dashed parabola leads to a dashed open circle on the ground. A red bracket on the left marks Δy = 45 m, a red arrow marks a_y = 10 m/s² (down positive), a blue bracket under the ground marks x = ? (asked), and the flight is labelled t = ? (shared by x and y). On the right, two inventory columns: x in blue (v_x = 20 m/s, a_x = 0, x = ?, t = ?) and y in red (v₀y = 0, a_y = 10 m/s², Δy = 45 m, t = ?, down = +) joined only at t; the y column says everything but t → start here; below: the columns share only t; y gives t first, then x = v_x · t.',
      caption: 'The horizontal-launch setup with one inventory per axis (lesson values, down positive): the y column is complete except t, so it is solved first.',
    },
    blocks: [
      '- $x$ and $y$ get separate inventories; the only shared entry is $t$',
      '- The $y$ column is complete except $t$ — solve there first ($45 = 5t^2$), then carry $t$ to $x$',
    ],
  },
]
