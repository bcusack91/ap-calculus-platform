import type { DeckFigurePlacement } from './index'

/**
 * Physics: Mechanics (7-part survey, MCAT C/P) — figures for the in-class
 * deck. Authored 2026-10-29.
 *
 * The dedicated decks draw the kinematics graphs, projectiles and inclines;
 * free-body diagrams, friction and circular motion; energy bars, springs and
 * power; impulse and collisions; manometers, buoyancy and Bernoulli pipes;
 * standing waves and Doppler — so the survey draws DIFFERENT views: relative
 * velocity as a signed subtraction, the four-move force recipe, path
 * independence (conservative vs friction), the "which principle?" decision
 * flow, the hydraulic lift, the lever arm r F sinθ with the sign convention,
 * centre of mass on a rod plus tipping, the seesaw worked example with its
 * numbers, and the decibel ladder with the inverse-square arcs.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. The only numbers shown are the lesson's own (8 and
 * 5 m/s; 100 N on 0.01 m² vs 0.50 m²; 2 kg at 0 and 4 kg at 3 m; 300 N at
 * 2.0 m vs 400 N at 1.5 m; I₀ = 10⁻¹² W/m² and the 10⁻⁶ → 10⁻³ jump).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-mech-<figure>[-colour]).
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
const bold = ' font-weight="700"'
const line = (x1: number, y1: number, x2: number, y2: number, marker?: string, w = 2.5, extra = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
/** Open path (elbows, arcs), optional arrowhead. */
const path = (d: string, marker?: string, w = 2.5, extra = '') =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
/** Double-headed dimension line with a centred label above it. */
const dim = (x1: number, x2: number, y: number, label: string, marker: string, size = 15) =>
  `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="currentColor" stroke-width="2" marker-start="url(#${marker})" marker-end="url(#${marker})"/>${ctext((x1 + x2) / 2, y - 7, size, label, bold)}`
/** Subscript inside a <text> (the trailing space restores the baseline). */
const sb = (s: string) => `<tspan dy="5" font-size="12">${s}</tspan><tspan dy="-5"> </tspan>`
const dot = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

/* 1 — Relative velocity as a signed subtraction (lead, 1000×460) */
const runner = (cx: number, cy: number, name: string) =>
  `<circle cx="${cx}" cy="${cy}" r="15" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>${ctext(cx, cy + 5, 14, name, bold)}`
const relativeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mech-rel')}</defs>
${txt(40, 36, 22, `Relative velocity  v${sb('A/B')}= v${sb('A')}− v${sb('B')} — a subtraction that keeps the signs`, bold)}
<g class="fig-muted"><rect x="40" y="58" width="440" height="330" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="520" y="58" width="440" height="330" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
${line(70, 168, 450, 168, undefined, 1.5, ' stroke-dasharray="4 5"')}${line(70, 240, 450, 240, undefined, 1.5, ' stroke-dasharray="4 5"')}
${line(550, 168, 930, 168, undefined, 1.5, ' stroke-dasharray="4 5"')}${line(550, 240, 930, 240, undefined, 1.5, ' stroke-dasharray="4 5"')}
${txt(68, 120, 13, '+ direction →')}${txt(548, 120, 13, '+ direction →')}</g>
${ctext(260, 90, 20, 'Same direction', bold)}
${ctext(740, 90, 20, 'Opposite directions', bold)}
${runner(120, 150, 'A')}${runner(120, 222, 'B')}
${runner(600, 150, 'A')}${runner(880, 222, 'B')}
<g class="fig-accent"><defs>${ARROW('arr-mech-rel-b')}</defs>
${line(142, 150, 302, 150, 'arr-mech-rel-b', 3)}${ctext(222, 140, 16, '8 m/s', bold)}
${line(622, 150, 782, 150, 'arr-mech-rel-b', 3)}${ctext(702, 140, 16, '8 m/s', bold)}
${line(230, 330, 290, 330, 'arr-mech-rel-b', 3)}${line(610, 330, 870, 330, 'arr-mech-rel-b', 3)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-mech-rel-r')}</defs>
${line(142, 222, 242, 222, 'arr-mech-rel-r', 3)}${ctext(192, 212, 16, '5 m/s', bold)}
${line(858, 222, 758, 222, 'arr-mech-rel-r', 3)}${ctext(808, 212, 16, '−5 m/s', bold)}</g>
${ctext(260, 290, 19, `v${sb('A/B')}= 8 − 5 = +3 m/s`, bold)}
${ctext(740, 290, 19, `v${sb('A/B')}= 8 − (−5) = 13 m/s`, bold)}
<g class="fig-muted">${ctext(260, 362, 15, 'seen from B, A pulls ahead at only 3 m/s')}
${ctext(740, 362, 15, 'closing speed: the gap shrinks 13 m every second')}
${ctext(260, 312, 13, 'arrow length ∝ speed')}${ctext(740, 312, 13, 'arrow length ∝ speed')}</g>
${ctext(500, 424, 18, 'Chase or meeting time:  t = separation ÷ relative speed', bold)}
<g class="fig-muted">${ctext(500, 448, 14, 'pick a + direction first; a velocity the other way carries a minus sign')}</g>
</svg>`

/* 2 — Force analysis in four moves (lead, 1000×460) */
const WF = [150, 385, 620, 855]
const workflowSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mech-wf')}</defs>
${txt(40, 34, 22, 'Force analysis in four moves — the same recipe for every Newton problem', bold)}
${box(WF[0], 76, 215, 40, '1 · Isolate ONE object', 16, 700, 0.14)}
${box(WF[1], 76, 215, 40, '2 · Draw every REAL force', 16, 700, 0.14)}
${box(WF[2], 76, 215, 40, '3 · Axes along the motion', 16, 700, 0.14)}
${box(WF[3], 76, 215, 40, '4 · ΣF = ma per axis', 16, 700, 0.14)}
${line(258, 76, 276, 76, 'arr-mech-wf')}${line(493, 76, 511, 76, 'arr-mech-wf')}${line(728, 76, 746, 76, 'arr-mech-wf')}
<g class="fig-muted">${line(60, 290, 240, 290, undefined, 2.5)}${line(190, 230, 250, 230, undefined, 2)}<rect x="250" y="200" width="8" height="90" fill="currentColor" fill-opacity="0.5" stroke="none"/>
${txt(66, 308, 13, 'floor')}${txt(221, 248, 12, 'rope')}</g>
<rect x="115" y="190" width="75" height="100" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent"><circle cx="152" cy="240" r="66" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>${ctext(152, 162, 13, 'the system', bold)}</g>
${ctext(WF[0], 346, 13, 'everything else stays outside')}${ctext(WF[0], 364, 13, 'and only pushes or pulls on it')}
<rect x="370" y="210" width="30" height="30" rx="4" fill="currentColor" stroke="none"/>
<g class="fig-accent-2"><defs>${ARROW('arr-mech-wf-r')}</defs>${line(385, 242, 385, 308, 'arr-mech-wf-r', 3)}${txt(394, 300, 16, 'W = mg', bold)}</g>
<g class="fig-accent"><defs>${ARROW('arr-mech-wf-b')}</defs>${line(385, 208, 385, 142, 'arr-mech-wf-b', 3)}${txt(394, 154, 16, 'N', bold)}
${line(402, 225, 472, 225, 'arr-mech-wf-b', 3)}${txt(458, 214, 16, 'T', bold)}${line(368, 225, 298, 225, 'arr-mech-wf-b', 3)}${txt(306, 214, 16, 'f', bold)}</g>
${ctext(WF[1], 346, 13, 'only forces exerted ON it by')}${ctext(WF[1], 364, 13, 'others — ma is never an arrow')}
<g class="fig-muted">${line(551, 280, 730, 280, undefined, 2.5)}${path('M595 280 A 44 44 0 0 0 589 258', undefined, 1.5)}${txt(602, 274, 14, 'θ')}</g>
<g transform="rotate(-30 620 240)"><g class="fig-muted">${line(540, 240, 712, 240, undefined, 4)}</g>
<rect x="596" y="206" width="48" height="34" rx="4" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent"><defs>${ARROW('arr-mech-wf-ax')}</defs>${line(620, 240, 716, 240, 'arr-mech-wf-ax', 2.5)}${line(620, 240, 620, 146, 'arr-mech-wf-ax', 2.5)}</g></g>
<g class="fig-accent">${txt(706, 186, 16, 'x', bold)}${txt(558, 158, 16, 'y', bold)}</g>
${ctext(WF[2], 346, 13, 'x along the likely motion,')}${ctext(WF[2], 364, 13, 'y ⊥ to it — tilt them on a slope')}
${box(WF[3], 170, 210, 48, `x:  ΣF${sb('x')}= m a${sb('x')}`, 18, 700, 0.1)}
${box(WF[3], 236, 210, 48, `y:  ΣF${sb('y')}= 0`, 18, 700, 0.1)}
<g class="fig-muted">${ctext(WF[3], 282, 13, 'no motion ⊥ the surface → a = 0 there')}</g>
${ctext(WF[3], 346, 13, 'constant speed ⇒ a = 0 ⇒')}${ctext(WF[3], 364, 13, 'ΣF = 0 on both axes')}
${box(500, 420, 900, 40, 'Frictionless incline: m cancels and a = g sinθ — if m survives in your answer, revisit move 2', 15, 700, 0.06)}
</svg>`

/* 3 — Conservative vs non-conservative: does the work depend on the path? (lead, 1000×460) */
const conservativeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mech-cons')}</defs>
${txt(40, 34, 22, 'Does the work depend on the path? That is the whole distinction', bold)}
<g class="fig-muted"><rect x="40" y="54" width="445" height="340" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="515" y="54" width="445" height="340" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<defs>${ARROW('arr-mech-cons-m')}</defs>
<line x1="72" y1="130" x2="72" y2="330" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-start="url(#arr-mech-cons-m)" marker-end="url(#arr-mech-cons-m)"/>${txt(50, 236, 15, 'Δh', bold)}
${line(60, 330, 470, 330, undefined, 1.5, ' stroke-dasharray="4 5"')}
<rect x="545" y="104" width="385" height="236" rx="8" fill="currentColor" fill-opacity="0.05" stroke="none"/>${txt(556, 124, 13, 'rough floor, seen from above')}</g>
<g class="fig-accent">${ctext(262, 82, 19, 'Conservative — gravity, springs', bold)}
${line(110, 130, 420, 330, undefined, 3)}
${path('M110 130 C 200 70, 330 120, 260 220 C 210 280, 330 320, 420 330', undefined, 3)}
${txt(300, 140, 15, 'winding', bold)}${txt(330, 250, 15, 'straight', bold)}</g>
${dot(110, 130, 7)}${dot(420, 330, 7)}${txt(92, 122, 17, 'A', bold)}${txt(434, 326, 17, 'B', bold)}
${ctext(262, 362, 15, 'both paths:  W = −mgΔh — same endpoints, same work')}
<g class="fig-muted">${ctext(262, 382, 14, 'so a PE exists; a round trip does W = 0: energy conserved')}</g>
<g class="fig-accent-2">${ctext(737, 82, 19, 'Non-conservative — friction, drag', bold)}
${line(585, 230, 895, 230, undefined, 3)}
${path('M585 230 C 620 130, 700 130, 740 230 C 780 330, 860 330, 895 230', undefined, 3)}
${ctext(660, 250, 15, 'W = −f · L', bold)}${ctext(740, 332, 15, 'W = −f · (longer L): more heat', bold)}</g>
${dot(585, 230, 7)}${dot(895, 230, 7)}${txt(566, 222, 17, 'A', bold)}${txt(906, 222, 17, 'B', bold)}
${ctext(737, 362, 15, 'longer path → more energy lost: no PE can be defined')}
<g class="fig-muted">${ctext(737, 382, 14, 'a round trip does W &lt; 0 — mechanical energy becomes heat')}</g>
${box(500, 425, 900, 42, `With friction:  KE${sb('i')}+ PE${sb('i')}+ W${sb('nc')}= KE${sb('f')}+ PE${sb('f')}  (W${sb('nc')}&lt; 0)   ·   without it:  KE + PE = constant`, 16, 700, 0.06)}
</svg>`

/* 4 — Which principle? A decision flow for mechanics problems (lead, 1000×460) */
const DC = [140, 380, 620, 860]
const column = (cx: number, c1: string, c2: string, tool: string, f1: string, f2: string, note: string) =>
  `${path(`M500 91 V 108 H ${cx} V 118`, 'arr-mech-dec', 2)}
${box2(cx, 150, 222, 58, c1, c2, 14, 12.5, 0.04)}
${line(cx, 179, cx, 198, 'arr-mech-dec')}
<g class="fig-accent">${box(cx, 222, 222, 46, tool, 18, 700, 0.16)}</g>
${line(cx, 245, cx, 264, 'arr-mech-dec')}
${box2(cx, 296, 222, 60, f1, f2, 14, 13, 0.06)}
<g class="fig-muted">${ctext(cx, 352, 13, note)}</g>`
const decisionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mech-dec')}</defs>
${txt(40, 34, 22, 'Which tool? Read what the stem gives — then take the shortest route', bold)}
${box(500, 72, 540, 38, 'Given / asked:  a time?  forces?  heights and speeds?  a collision?', 16, 700, 0.14)}
${column(DC[0], 'constant a — asks x, v or t', 'projectile, free fall, braking', 'KINEMATICS', 'the Big 5 equations', 'split x (a = 0) and y (a = −g)', 'needs a constant acceleration')}
${column(DC[1], 'forces or mass are involved', 'incline, elevator, tension', 'NEWTON  ΣF = ma', 'FBD, axes along the motion', '→ ΣF = ma on each axis', 'constant v → a = 0')}
${column(DC[2], 'heights, speeds, distances', 'no time asked, no force detail', 'WORK – ENERGY', `KE${sb('i')}+ PE${sb('i')}+ W${sb('nc')}= KE${sb('f')}+ PE${sb('f')}`, 'W = Fd cosθ,  P = W / t = Fv', 'friction? add W (negative)')}
${column(DC[3], 'collision, explosion, catch', 'a big F over a short Δt', 'MOMENTUM / IMPULSE', 'Σp before = Σp after', 'J = F Δt = Δp', 'KE conserved only if elastic')}
${box(500, 420, 900, 40, 'time in the question → kinematics or impulse  ·  time absent → energy  ·  ‘stick together’ → momentum', 15, 700, 0.06)}
</svg>`

/* 5 — Pascal's principle: the hydraulic lift (lead, 1000×460) */
const pascalSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mech-pas')}</defs>
${txt(40, 34, 22, 'Hydraulic lift: the same pressure on a bigger piston is a bigger force', bold)}
<g class="fig-accent"><path d="M90 186 H150 V300 H300 V218 H540 V330 H90 Z" fill="currentColor" fill-opacity="0.14" stroke="none"/></g>
${path('M90 110 V330 H540 V160', undefined, 3)}${path('M150 110 V300 H300 V160', undefined, 3)}
<rect x="90" y="172" width="60" height="14" fill="currentColor" stroke="none"/>${line(120, 172, 120, 104, undefined, 5)}
<rect x="300" y="204" width="240" height="14" fill="currentColor" stroke="none"/>
<rect x="345" y="150" width="150" height="54" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>${ctext(420, 172, 15, 'load', bold)}${ctext(420, 192, 14, '5000 N')}
<g class="fig-accent-2"><defs>${ARROW('arr-mech-pas-r')}</defs>${line(120, 46, 120, 98, 'arr-mech-pas-r', 3.5)}${txt(132, 74, 17, `F${sb('1')}= 100 N`, bold)}</g>
<g class="fig-accent"><defs>${ARROW('arr-mech-pas-b')}</defs>${line(350, 296, 350, 226, 'arr-mech-pas-b', 3.5)}${txt(368, 262, 16, `F${sb('2')}= 5000 N`, bold)}${txt(368, 282, 13, 'from the fluid')}</g>
<g class="fig-muted"><defs>${ARROW('arr-mech-pas-m')}</defs>
<line x1="72" y1="186" x2="72" y2="296" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arr-mech-pas-m)"/>${txt(46, 246, 14, `d${sb('1')}`, bold)}
<line x1="282" y1="218" x2="282" y2="200" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arr-mech-pas-m)"/>${txt(256, 214, 14, `d${sb('2')}`, bold)}
${ctext(225, 320, 14, 'same P everywhere')}
${ctext(120, 354, 15, `A${sb('1')}= 0.01 m²`, bold)}${ctext(420, 354, 15, `A${sb('2')}= 0.50 m²`, bold)}
${ctext(44, 160, 13, 'moves')}${ctext(44, 176, 13, 'far')}${ctext(225, 188, 13, 'rises little')}</g>
${txt(600, 96, 20, 'Pascal’s principle', bold)}
<g class="fig-muted">${txt(600, 120, 14, 'applied pressure appears everywhere in the fluid')}</g>
${txt(600, 160, 22, `P = F${sb('1')}/ A${sb('1')}= F${sb('2')}/ A${sb('2')}`)}
<g class="fig-accent">${txt(600, 198, 18, `100 / 0.01 = F${sb('2')}/ 0.50  →  F${sb('2')}= 5000 N`, bold)}</g>
${txt(600, 232, 17, `force multiplied by A${sb('2')}/ A${sb('1')}= 50×`)}
${txt(600, 272, 17, 'but the same fluid volume moves:')}
${txt(600, 300, 17, `A${sb('1')}d${sb('1')}= A${sb('2')}d${sb('2')} →  the load rises 1/50 as far`)}
<g class="fig-accent-2">${txt(600, 340, 19, `work in = work out:  F${sb('1')}d${sb('1')}= F${sb('2')}d${sb('2')}`, bold)}</g>
<g class="fig-muted">${txt(600, 370, 14, 'a hydraulic lift is a machine: less force, more distance')}</g>
${box(500, 422, 900, 40, 'No gain in work or energy — a machine only trades force for distance (ρgh between the pistons neglected)', 15, 700, 0.06)}
</svg>`

/* 6 — Torque: only the perpendicular part of F turns the arm (lead, 1000×460) */
const arm = (px: number) =>
  `<rect x="${px}" y="243" width="180" height="14" rx="7" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/><circle cx="${px}" cy="250" r="11" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>${dot(px, 250, 3.5)}${ctext(px + 90, 282, 15, 'r', bold)}`
const torqueSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mech-tq')}</defs>
${txt(40, 34, 22, 'τ = r F sinθ — only the part of F perpendicular to the arm turns it', bold)}
<g class="fig-muted"><rect x="40" y="56" width="296" height="300" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="352" y="56" width="296" height="300" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="664" y="56" width="296" height="300" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
${txt(52, 340, 13, 'pivot (bolt) at the left end of the arm')}${ctext(812, 340, 13, 'pushing along the arm')}</g>
${ctext(188, 84, 19, 'θ = 90°', bold)}${ctext(500, 84, 19, 'θ between r and F', bold)}${ctext(812, 84, 19, 'θ = 0°', bold)}
${arm(66)}${arm(378)}${arm(690)}
<g class="fig-accent-2"><defs>${ARROW('arr-mech-tq-r')}</defs>
${line(246, 250, 246, 130, 'arr-mech-tq-r', 3.5)}${txt(256, 150, 18, 'F', bold)}
${line(558, 250, 636, 205, 'arr-mech-tq-r', 3.5)}${txt(612, 196, 18, 'F', bold)}
${line(870, 250, 920, 250, 'arr-mech-tq-r', 3.5)}${txt(888, 236, 18, 'F', bold)}
<line x1="558" y1="250" x2="558" y2="205" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#arr-mech-tq-r)"/>${txt(494, 212, 15, 'F sinθ', bold)}</g>
<g class="fig-muted"><defs>${ARROW('arr-mech-tq-m')}</defs>
<line x1="558" y1="250" x2="636" y2="250" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#arr-mech-tq-m)"/>${ctext(562, 302, 13, 'F cosθ — no turning')}
${path('M588 250 A 30 30 0 0 0 584 235', undefined, 2)}${txt(594, 243, 14, 'θ')}</g>
<g class="fig-accent">${ctext(188, 318, 19, 'τ = r F   (maximum)', bold)}${ctext(500, 318, 19, 'τ = r F sinθ', bold)}${ctext(812, 318, 19, 'τ = 0', bold)}</g>
<g class="fig-muted">${ctext(500, 376, 13, 'equivalently: lever arm r⊥ = r sinθ, the perpendicular distance from the pivot to the line of F')}</g>
<g class="fig-accent"><defs>${ARROW('arr-mech-tq-ccw')}</defs>${path('M286 422 A 18 18 0 1 0 268 404', 'arr-mech-tq-ccw', 3)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-mech-tq-cw')}</defs>${path('M714 422 A 18 18 0 1 1 732 404', 'arr-mech-tq-cw', 3)}</g>
${txt(318, 410, 17, 'counterclockwise  = +', bold)}${txt(746, 410, 17, 'clockwise  = −', bold)}
<g class="fig-muted">${ctext(500, 450, 14, 'in equilibrium Στ = 0: the + torques equal the − torques')}</g>
</svg>`

/* 7 — Centre of mass on a rod, and why things tip (lead, 1000×460) */
const CMX = (m: number) => 100 + m * 120
const tippingBox = (pivX: number, deg: number, labelX: number, label: string, ok: boolean) => {
  // Box 90 wide × 110 tall, pivoting on its bottom-right corner at (pivX, 330).
  const pivY = 330
  const rad = (deg * Math.PI) / 180
  // Centre of the box relative to the pivot corner before rotation: (−45, −55).
  const cmx = Math.round(pivX + (-45 * Math.cos(rad) + 55 * Math.sin(rad)))
  const cmy = Math.round(pivY + (-45 * Math.sin(rad) - 55 * Math.cos(rad)))
  return `<g transform="rotate(${deg} ${pivX} ${pivY})"><rect x="${pivX - 90}" y="${pivY - 110}" width="90" height="110" rx="5" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/></g>
<g class="${ok ? 'fig-accent' : 'fig-accent-2'}">${dot(cmx, cmy, 6)}<line x1="${cmx}" y1="${cmy}" x2="${cmx}" y2="${pivY + 2}" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#arr-mech-cm-${ok ? 'b' : 'r'})"/>
${ctext(labelX, 362, 13, label, bold)}</g>
${dot(pivX, pivY, 4)}`
}
const cmSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mech-cm')}</defs>
${txt(40, 34, 22, 'Centre of mass: a mass-weighted average — and the point where gravity acts', bold)}
<g class="fig-muted"><rect x="40" y="54" width="520" height="340" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="580" y="54" width="380" height="340" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
${[0, 1, 2, 3].map((m) => `${line(CMX(m), 196, CMX(m), 212, undefined, 2)}${m === 2 ? '' : ctext(CMX(m), 232, 14, `${m} m`)}`).join('')}
${txt(596, 346, 13, 'floor')}${line(596, 330, 944, 330, undefined, 2)}</g>
${ctext(300, 84, 19, '2 kg at x = 0, 4 kg at x = 3 m', bold)}${ctext(770, 84, 19, 'Tipping', bold)}
<rect x="${CMX(0)}" y="178" width="360" height="12" rx="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<circle cx="${CMX(0)}" cy="150" r="20" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>${ctext(CMX(0), 155, 14, '2 kg', bold)}
<circle cx="${CMX(3)}" cy="142" r="30" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>${ctext(CMX(3), 147, 15, '4 kg', bold)}
<g class="fig-accent"><defs>${ARROW('arr-mech-cm-b')}</defs><polygon points="${CMX(2)},192 ${CMX(2) - 16},222 ${CMX(2) + 16},222" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>
${ctext(CMX(2), 250, 16, `x${sb('cm')}= 2 m`, bold)}</g>
${ctext(300, 296, 18, `x${sb('cm')}= (2·0 + 4·3) / (2 + 4) = 12 / 6 = 2 m`, bold)}
${ctext(300, 328, 15, 'closer to the heavier mass: 2 m from the 2 kg, 1 m from the 4 kg')}
<g class="fig-muted">${ctext(300, 352, 14, 'balance check about the CM: 2 kg × 2 m = 4 kg × 1 m ✓')}
${ctext(300, 376, 14, 'a uniform beam: its whole weight acts at the midpoint')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-mech-cm-r')}</defs></g>
${tippingBox(700, 18, 668, 'over the base → falls back', true)}
${tippingBox(870, 50, 870, 'past the edge → tips', false)}
<g class="fig-muted">${ctext(770, 386, 14, 'weight at the CM torques the box about the corner')}</g>
${box(500, 425, 900, 40, 'Low CM and a wide base resist tipping; the weight of any body can be replaced by one force at its CM', 15, 700, 0.06)}
</svg>`

/* 8 — Worked example: balancing a seesaw, with its numbers (after, 1000×460) */
const PIV = 500
const child = (cx: number, top: number) =>
  `<circle cx="${cx}" cy="${top + 14}" r="14" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/><rect x="${cx - 16}" y="${top + 30}" width="32" height="40" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>`
const seesawSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mech-ss')}</defs>
${txt(40, 34, 22, 'Στ = 0 about the pivot:  300 N × 2.0 m  =  400 N × d₂', bold)}
<rect x="120" y="243" width="760" height="14" rx="4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<polygon points="${PIV},257 ${PIV - 26},305 ${PIV + 26},305" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
${child(200, 170)}${child(725, 170)}
<g class="fig-accent"><defs>${ARROW('arr-mech-ss-b')}</defs>${dim(200, PIV, 150, `d${sb('1')}= 2.0 m`, 'arr-mech-ss-b', 16)}
${line(200, 262, 200, 352, 'arr-mech-ss-b', 3.5)}${txt(130, 312, 17, '300 N', bold)}
${path('M422 295 A 90 90 0 0 0 462 332', 'arr-mech-ss-b', 2.5)}${ctext(230, 384, 17, `τ${sb('ccw')}= 300 × 2.0 = 600 N·m`, bold)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-mech-ss-r')}</defs>${dim(PIV, 725, 150, `d${sb('2')}= ?  → 1.5 m`, 'arr-mech-ss-r', 16)}
${line(725, 262, 725, 382, 'arr-mech-ss-r', 3.5)}${txt(740, 332, 17, '400 N', bold)}
${path('M578 295 A 90 90 0 0 1 538 332', 'arr-mech-ss-r', 2.5)}${ctext(745, 404, 17, `τ${sb('cw')}= 400 × d${sb('2')}= 600 N·m`, bold)}</g>
<g class="fig-muted"><defs>${ARROW('arr-mech-ss-m')}</defs>${line(PIV, 330, PIV, 290, 'arr-mech-ss-m', 2.5)}${ctext(PIV, 358, 13, 'pivot pushes up 700 N — zero torque')}${ctext(PIV, 374, 13, 'about the pivot, so it drops out')}
${txt(176, 196, 13, 'lighter child,', ' text-anchor="end"')}${txt(176, 211, 13, 'farther out', ' text-anchor="end"')}${txt(760, 196, 13, 'heavier child,')}${txt(760, 211, 13, 'closer in')}</g>
${box(500, 432, 520, 36, `d${sb('2')}= 600 / 400 = 1.5 m  — the heavier child sits closer`, 17, 700, 0.1)}
</svg>`

/* 9 — Sound: the decibel ladder and the inverse-square law (lead, 1000×460) */
const RUNG = (db: number) => 400 - (db / 10) * 26
const DBS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
const soundSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mech-snd')}</defs>
${txt(40, 34, 22, 'Decibels are a log ladder: every +10 dB is ×10 in intensity', bold)}
<g class="fig-muted">${line(150, 404, 150, 76, undefined, 2.5)}${line(330, 404, 330, 76, undefined, 2.5)}
${DBS.map((db) => line(150, RUNG(db), 330, RUNG(db), undefined, db % 30 === 0 ? 2.5 : 1.5)).join('')}
${ctext(100, 60, 14, 'level')}${ctext(240, 60, 14, 'intensity (W/m²)')}</g>
${DBS.map((db) => `${txt(136, RUNG(db) + 5, db % 30 === 0 ? 15 : 13, `${db} dB`, ` text-anchor="end"${db % 30 === 0 ? bold : ''}`)}${ctext(240, RUNG(db) - 6, 14, `10<tspan dy="-7" font-size="11">${db === 120 ? '0' : `−${12 - db / 10}`}</tspan>`)}`).join('')}
<g class="fig-accent"><defs>${ARROW('arr-mech-snd-b')}</defs>
<rect x="152" y="${RUNG(90)}" width="176" height="${RUNG(60) - RUNG(90)}" fill="currentColor" fill-opacity="0.14" stroke="none"/>
${line(372, RUNG(60), 372, RUNG(90) + 2, 'arr-mech-snd-b', 3)}
${txt(386, RUNG(75) - 12, 17, 'worked example:', bold)}${txt(386, RUNG(75) + 8, 16, '10⁻⁶ → 10⁻³ is ×1000')}${txt(386, RUNG(75) + 28, 17, '= +30 dB', bold)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-mech-snd-r')}</defs>${line(372, RUNG(20), 372, RUNG(30) + 2, 'arr-mech-snd-r', 3)}${txt(386, RUNG(25) + 5, 15, '×10 = +10 dB', bold)}
${line(372, RUNG(100), 372, RUNG(120) + 2, 'arr-mech-snd-r', 3)}${txt(386, RUNG(110) + 5, 15, '×100 = +20 dB', bold)}</g>
<g class="fig-muted">${txt(100, 436, 14, 'β = 10 log(I / I₀),  I₀ = 10⁻¹² W/m²  (0 dB = threshold of hearing)')}</g>
${ctext(800, 84, 19, 'Inverse square', bold)}
<g class="fig-accent">${dot(650, 250, 8)}${ctext(650, 282, 14, 'source', bold)}</g>
<g class="fig-muted">${path('M705 218 A 64 64 0 0 1 705 282', undefined, 2)}${path('M761 186 A 128 128 0 0 1 761 314', undefined, 2)}${path('M816 154 A 192 192 0 0 1 816 346', undefined, 2)}
${line(658, 250, 884, 250, 'arr-mech-snd', 1.5, ' stroke-dasharray="4 4"')}</g>
${txt(722, 244, 17, 'I', bold)}${txt(786, 244, 17, 'I / 4', bold)}${txt(850, 244, 17, 'I / 9', bold)}
<g class="fig-muted">${txt(722, 268, 14, 'r')}${txt(786, 268, 14, '2r')}${txt(850, 268, 14, '3r')}</g>
${ctext(800, 118, 16, 'I = P / 4πr²', bold)}
<g class="fig-muted">${ctext(800, 372, 14, 'the same power spreads over a sphere')}${ctext(800, 390, 14, 'whose area grows as r²')}</g>
${box(800, 428, 300, 36, 'double the distance → ¼ the intensity', 15, 700, 0.08)}
</svg>`

export const mcatMechanicsFigures: DeckFigurePlacement[] = [
  {
    at: 'Relative Motion Shortcut',
    mode: 'lead',
    figure: {
      svg: relativeSvg,
      alt:
        'Two panels. Left, same direction: runner A moves right at 8 m/s (long blue arrow), runner B moves right at 5 m/s (shorter red arrow); the relative velocity v of A relative to B = 8 − 5 = +3 m/s, drawn as a short blue arrow: seen from B, A pulls ahead at only 3 m/s. Right, opposite directions: A moves right at 8 m/s, B moves left at −5 m/s; v of A relative to B = 8 − (−5) = 13 m/s, a long arrow: the closing speed, the gap shrinks 13 m every second. Footer: chase or meeting time = separation ÷ relative speed; pick a positive direction first, a velocity the other way carries a minus sign.',
      caption: 'Relative velocity is a sign-aware subtraction: 8 − 5 = 3 m/s when the runners move the same way, 8 − (−5) = 13 m/s head-on.',
    },
    blocks: [
      '- $v_{A/B} = v_A - v_B$: same direction → speeds subtract; opposite directions → they add',
      '- Meeting or catching time = separation ÷ relative speed',
    ],
  },
  {
    at: 'Force-Analysis Workflow',
    mode: 'lead',
    figure: {
      svg: workflowSvg,
      alt:
        'Four numbered columns joined by arrows. 1 Isolate ONE object: a block with a dashed blue circle labelled the system; the floor and rope are drawn faintly outside it — they only push or pull on it. 2 Draw every REAL force: a free-body dot with W = mg down (red), N up, T right and f left (blue); only forces something else exerts on it, ma is the result and never an arrow. 3 Axes along the motion: a block on a slope with x and y axes tilted with the slope, angle θ to the horizontal; x along the likely motion, y perpendicular. 4 ΣF = ma per axis: two boxes, x: ΣFx = m ax and y: ΣFy = 0 (no motion perpendicular to the surface); constant speed means a = 0 and ΣF = 0 even with four forces acting. Footer: on a frictionless incline m cancels and a = g sinθ — if m survives in your answer, revisit move 2.',
      caption: 'The four-move recipe: isolate the object, draw only real forces, tilt the axes along the motion, then write ΣF = ma on each axis.',
    },
    blocks: [
      '- Isolate → real forces only (no "ma" arrow) → axes along the motion → $\\sum F = ma$ per axis',
      '- Constant speed means $a = 0$ on both axes, however many forces act',
    ],
  },
  {
    at: 'Conservative vs. Non-conservative Forces',
    mode: 'lead',
    figure: {
      svg: conservativeSvg,
      alt:
        'Two panels. Left, conservative (gravity, springs), in blue: points A (high) and B (low) a height Δh apart, joined by a straight path and a long winding path; both paths do W = −mgΔh — same endpoints, same work, so a potential energy exists, and a round trip does zero work: energy conserved. Right, non-conservative (friction, drag), in red: A and B on a rough floor seen from above, joined by a straight path labelled W = −f·L and a long wavy path labelled W = −f·(longer L): more heat — a longer path loses more energy, so no PE can be defined and a round trip does negative work, mechanical energy becomes heat. Footer: with friction KEi + PEi + Wnc = KEf + PEf with Wnc negative; without it KE + PE is constant.',
      caption: 'Gravity does the same −mgΔh on every path from A to B; friction charges by the metre, so the winding path costs more — that is what makes it non-conservative.',
    },
    blocks: [
      '- Conservative (gravity, spring): work depends only on endpoints → a PE exists, round trip $W = 0$',
      '- Friction: $W = -f \\times$ path length → add $W_{nc}$ (negative) to the energy balance',
    ],
  },
  {
    at: 'Key Takeaways — Part 4',
    mode: 'lead',
    figure: {
      svg: decisionSvg,
      alt:
        'A decision flow. Top box: given / asked — a time? forces? heights and speeds? a collision? Four branches. Constant a, asks x, v or t (projectile, free fall, braking) → KINEMATICS → the Big 5 equations, split x (a = 0) and y (a = −g); needs a constant acceleration. Forces or mass are involved (incline, elevator, tension) → NEWTON ΣF = ma → free-body diagram, axes along the motion, ΣF = ma on each axis; constant v means a = 0. Heights, speeds, distances with no time asked and no force detail → WORK–ENERGY → KEi + PEi + Wnc = KEf + PEf, W = Fd cosθ, P = W/t = Fv; with friction add a negative W. Collision, explosion or catch, a big F over a short Δt → MOMENTUM / IMPULSE → Σp before = Σp after, J = FΔt = Δp; KE conserved only if elastic. Footer: time in the question → kinematics or impulse; time absent → energy; stick together → momentum.',
      caption: 'The first four parts as one triage: constant acceleration → kinematics, forces → Newton, distances and speeds without time → energy, collisions → momentum.',
    },
    blocks: [
      '- Constant $a$ → Big 5 · forces → $\\sum F = ma$ · no time, just heights/speeds → energy · collision → $\\sum p$',
      '- Time asked → kinematics or impulse; "stick together" → perfectly inelastic, momentum only',
    ],
  },
  {
    at: "Pascal's Principle",
    mode: 'lead',
    figure: {
      svg: pascalSvg,
      alt:
        'A hydraulic lift: a narrow cylinder (piston area A1 = 0.01 m²) and a wide cylinder (A2 = 0.50 m²) connected by fluid at the bottom. A red arrow F1 = 100 N pushes the small piston down a long distance d1 (moves far); the fluid pushes the big piston up with a blue arrow F2 = 5000 N under a load of 5000 N, which rises only a little (d2). The fluid is labelled same P everywhere. Right column: Pascal’s principle — applied pressure appears everywhere in the fluid; P = F1/A1 = F2/A2; 100/0.01 = F2/0.50 → F2 = 5000 N; force multiplied by A2/A1 = 50×; but the same fluid volume moves, A1 d1 = A2 d2, so the load rises 1/50 as far; work in = work out, F1 d1 = F2 d2; a hydraulic lift is a machine: less force, more distance. Footer: no gain in work or energy — a machine only trades force for distance (ρgh between the pistons neglected).',
      caption: 'Pascal’s lift with the lesson’s numbers: the same pressure on 50× the area gives 50× the force — and 1/50 the distance, so the work is unchanged (illustrative, ρgh neglected).',
    },
    blocks: [
      '- $F_1/A_1 = F_2/A_2$: 100 N on 0.01 m² lifts 5000 N on 0.50 m² — force × 50',
      '- Same fluid volume moved: $A_1 d_1 = A_2 d_2$, so $F_1 d_1 = F_2 d_2$ — no free work',
    ],
  },
  {
    at: 'Torque',
    mode: 'lead',
    figure: {
      svg: torqueSvg,
      alt:
        'Three panels, each a horizontal arm of length r pivoting on a bolt at its left end with a red force F applied at the far end. θ = 90°: F points straight up, perpendicular to the arm; τ = rF, the maximum. θ between r and F: F points up and outward at an angle θ; it is split into a perpendicular dashed component F sinθ (red) that turns the arm and a component F cosθ along the arm (grey) that only pulls on the bolt, no turning; τ = rF sinθ — equivalently the lever arm r⊥ = r sinθ, the perpendicular distance from the pivot to the line of F. θ = 0°: F pushes along the arm; τ = 0. Below: a blue counterclockwise arc labelled counterclockwise = + and a red clockwise arc labelled clockwise = −; in equilibrium Στ = 0, the + torques equal the − torques.',
      caption: 'The same F on the same arm: full torque when perpendicular, rF sinθ at an angle, none along the arm — and counterclockwise counts positive.',
    },
    blocks: [
      '- $\\tau = rF\\sin\\theta$: only the component of $F$ perpendicular to the arm turns it (max at 90°, zero along it)',
      '- Counterclockwise +, clockwise −; equilibrium means the two sums match',
    ],
  },
  {
    at: 'Center of Mass',
    mode: 'lead',
    figure: {
      svg: cmSvg,
      alt:
        'Left: a rod with 2 kg at x = 0 and 4 kg at x = 3 m, a metre scale, and a blue fulcrum triangle at x_cm = 2 m. x_cm = (2·0 + 4·3)/(2 + 4) = 12/6 = 2 m — closer to the heavier mass: 2 m from the 2 kg, 1 m from the 4 kg; balance check about the CM: 2 kg × 2 m = 4 kg × 1 m; a uniform beam has its whole weight at the midpoint. Right, tipping: two boxes resting on a bottom corner. One tilted 18° has its CM (blue dot) with a dashed plumb line landing inside the base: CM over the base → it falls back. One tilted 50° has its CM (red dot) with the plumb line landing outside the corner: CM past the edge → it tips. The weight at the CM torques the box about the corner. Footer: a low CM and a wide base resist tipping; the weight of any body can be replaced by one force at its CM.',
      caption: 'Centre of mass with the lesson’s numbers (2 kg at 0, 4 kg at 3 m → 2 m) and what it is for: gravity acts there, so a box tips once its CM passes the corner it rests on.',
    },
    blocks: [
      '- $x_{cm} = \\sum m_i x_i / \\sum m_i$: 2 kg at 0 and 4 kg at 3 m → 2 m, nearer the heavier mass',
      '- Gravity acts at the CM (a uniform beam: its midpoint); CM past the base edge → it tips',
    ],
  },
  {
    at: 'Worked Example — Balancing a Seesaw',
    mode: 'after',
    figure: {
      svg: seesawSvg,
      alt:
        'A seesaw plank on a central pivot. A lighter child sits on the left, farther out: d1 = 2.0 m from the pivot (blue dimension), weight 300 N drawn as a blue arrow down; the counterclockwise torque τ = 300 × 2.0 = 600 N·m, with a blue counterclockwise arc. A heavier child sits on the right, closer in: d2 = ? → 1.5 m (red dimension), weight 400 N as a longer red arrow down; the clockwise torque τ = 400 × d2 = 600 N·m with a red clockwise arc. A grey arrow at the pivot: the pivot pushes up 700 N — zero torque about the pivot, so it drops out. Bottom box: d2 = 600/400 = 1.5 m — the heavier child sits closer.',
      caption: 'The worked example drawn: 300 N × 2.0 m counterclockwise must equal 400 N × d₂ clockwise, so d₂ = 1.5 m — and choosing the pivot as the axis makes its 700 N push disappear.',
    },
  },
  {
    at: 'Sound',
    mode: 'lead',
    figure: {
      svg: soundSvg,
      alt:
        'Left: a vertical ladder of sound levels from 0 dB to 120 dB in 10 dB rungs, each rung labelled with its intensity from 10⁻¹² W/m² at 0 dB up to 10⁰ W/m² at 120 dB. Red brackets: ×10 = +10 dB (20 to 30 dB) and ×100 = +20 dB (100 to 120 dB). A blue band from 60 dB to 90 dB marks the worked example: 10⁻⁶ → 10⁻³ is ×1000 = +30 dB. Below: β = 10 log(I/I₀), I₀ = 10⁻¹² W/m², 0 dB is the threshold of hearing. Right, inverse square: a point source with three arcs at distances r, 2r and 3r labelled I, I/4 and I/9; I = P/4πr², the same power spreads over a sphere whose area grows as r²; double the distance → ¼ the intensity.',
      caption: 'Decibels climb by 10 for every ×10 in intensity — the lesson’s 10⁻⁶ → 10⁻³ jump is three rungs, +30 dB — while distance thins intensity as 1/r².',
    },
    blocks: [
      '- $\\beta = 10\\log(I/I_0)$, $I_0 = 10^{-12}$ W/m²: +10 dB = ×10, +20 dB = ×100, +30 dB = ×1000',
      '- $I = P/4\\pi r^2$: twice as far away → one quarter the intensity',
    ],
  },
]
