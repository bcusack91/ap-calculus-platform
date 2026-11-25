import type { DeckFigurePlacement } from './index'
import { SVG_OPEN, ARROW, T, SUB, ARR, DIM, RECT, standpipe } from './mcat-cp-fluids-waves'
import { RES, LINE } from './mcat-cp-circuits'

/**
 * Fluids Parts 1–4 (MCAT C/P, Nov 2026) — deck figures for the sections added
 * or left undrawn when the four fluids lessons were revised to match the
 * fluids video series. The other fluids figures are in mcat-cp-fluids-waves.ts
 * and mcat-cp-fluids.ts and are not repeated here.
 *
 * Every drawing below is ours, drawn from the concept with the shared helpers
 * in mcat-cp-fluids-waves.ts (and the resistor zigzag from mcat-cp-circuits.ts)
 * so the style matches: a two-sided pressure ladder and a drinking straw, a
 * submerged cube with its face forces, four free-body cases, stacked energy
 * bars for two pipes, a leaking tank with its projectile jet, a pitot tube and
 * a wing, a uniform tube with falling standpipe levels, and the circulation as
 * a series loop and two parallel beds. No textbook, prep-company or AAMC
 * figure was copied. Bar heights and curve shapes are illustrative; the only
 * numbers drawn are the lesson's own:
 *  - Part 1, Gauge vs. Absolute: 760 mmHg, systolic 120 mmHg (880 absolute,
 *    quiz), about −4 mmHg around the lungs;
 *  - Part 2, Archimedes: the 0.10 m cube with its top face 0.20 m under water,
 *    (3000)(0.01) = 30 N up, (2000)(0.01) = 20 N down, net 10 N,
 *    (1000)(10⁻³)(10) = 10 N;
 *  - Part 3, Venturi and Pitot Tubes: air 1.2 kg/m³, 50 and 40 m/s,
 *    (0.6)(2500 − 1600) = 540 Pa, 5400 N on a 10 m² wing;
 *  - Part 4, The Circulation as a Circuit: 5 L/min, 90 mmHg, TPR 18,
 *    arterioles 11 → 55 mmHg, organs 30 and 60 → 3 and 1.5 L/min, together
 *    4.5 L/min and R = 20, 1.19⁴ ≈ 2 → R 15 and 6 L/min; Poiseuille: ×16.
 *
 * Colours as in mcat-cp-fluids-waves.ts: fluid BLUE (fig-accent); velocities,
 * pressure arrows and the "answer" annotations RED (fig-accent-2); guides and
 * dimension lines grey (fig-muted). In the free-body figure the weight is in
 * the text colour, the fluid's push F_B blue and the third force red; in the
 * circulation figure the flow (the "current") is blue. Each marker is defined
 * inside the coloured group that uses it; ids are unique in this file
 * (arr-fp-<figure>-<colour>).
 */

/* 1 — Gauge vs. absolute: one pressure ladder read two ways, and a drinking straw (lead, 1000×460) */
const gaugeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(270, 40, 22, `${SUB('P', 'gauge', 22, ' = P − ')}${SUB('P', 'atm', 22)}`, 'middle', '700')}
${T(238, 78, 16, 'ABSOLUTE', 'end', '700')}
<g class="fig-muted">${T(238, 98, 15, 'measured from a vacuum', 'end')}</g>
${T(302, 78, 16, 'GAUGE', 'start', '700')}
<g class="fig-muted">${T(302, 98, 15, 'measured from atmospheric', 'start')}</g>
<g class="fig-muted"><rect x="250" y="250" width="40" height="130" fill="currentColor" fill-opacity="0.3"/></g>
<g class="fig-accent-2"><rect x="250" y="130" width="40" height="120" fill="currentColor" fill-opacity="0.3"/></g>
<path d="M250 130 L290 130 L290 380 L250 380 z" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M242 130 L298 130 M242 250 L298 250 M242 380 L298 380" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent"><line x1="270" y1="282" x2="298" y2="282" stroke="currentColor" stroke-width="2.5"/></g>
${T(238, 136, 17, '880 mmHg', 'end')}
${T(238, 256, 17, '760 mmHg (1 atm)', 'end', '700')}
${T(238, 386, 17, '0 (vacuum)', 'end')}
<g class="fig-accent-2">${T(302, 136, 17, '+120 mmHg: systolic', 'start', '700')}</g>
${T(302, 256, 17, '0: atmospheric', 'start', '700')}
<g class="fig-accent">${T(302, 288, 17, '−4 mmHg: around the lungs', 'start', '700')}</g>
${T(302, 386, 17, '−760 mmHg', 'start')}
${T(270, 422, 16, 'cuffs and tire gauges read GAUGE; add 760 mmHg for absolute', 'middle')}
<g class="fig-muted">${T(270, 446, 15, '(ladder not to scale)', 'middle')}</g>
${T(760, 40, 20, 'Negative gauge: a drinking straw', 'middle', '700')}
<g class="fig-accent">
<path d="M642 290 L798 290 L788 388 L652 388 z" fill="currentColor" fill-opacity="0.15"/>
<rect x="711" y="150" width="18" height="226" fill="currentColor" fill-opacity="0.3"/>
<line x1="642" y1="290" x2="710" y2="290" stroke="currentColor" stroke-width="2"/><line x1="730" y1="290" x2="798" y2="290" stroke="currentColor" stroke-width="2"/>
</g>
<path d="M636 240 L650 390 L790 390 L804 240" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M710 100 L710 376 M730 100 L730 376" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-fp-gauge-r')}</defs>
${ARR(672, 232, 672, 284, 'arr-fp-gauge-r', 3)}
${ARR(768, 232, 768, 284, 'arr-fp-gauge-r', 3)}
${ARR(720, 250, 720, 170, 'arr-fp-gauge-r', 3)}
${T(820, 262, 17, `${SUB('P', 'atm', 17)}`, 'start', '700')}
${T(820, 284, 15, 'pushes down', 'start')}
</g>
${T(745, 112, 16, 'mouth: below atmospheric', 'start')}
<g class="fig-muted">${T(745, 134, 15, '(negative gauge pressure)', 'start')}</g>
${T(760, 426, 16, 'the atmosphere pushes the drink up the straw', 'middle', '700')}
</svg>`

/* 2 — Where buoyancy comes from: the lesson's cube and its face forces (lead, 1000×460) */
const cubeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(250, 44, 22, 'Where buoyancy comes from', 'middle', '700')}
<g class="fig-accent"><rect x="62" y="110" width="376" height="318" fill="currentColor" fill-opacity="0.12"/><line x1="62" y1="110" x2="438" y2="110" stroke="currentColor" stroke-width="2"/></g>
<path d="M60 76 L60 430 L440 430 L440 76" fill="none" stroke="currentColor" stroke-width="3"/>
${RECT(210, 270, 80, 80, 2.5, 0.18, 4)}
<g class="fig-muted">
<defs>${ARROW('arr-fp-cube-m')}</defs>
${DIM(120, 114, 120, 266, 'arr-fp-cube-m', 2)}
${DIM(120, 274, 120, 346, 'arr-fp-cube-m', 2)}
<line x1="112" y1="270" x2="204" y2="270" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="112" y1="350" x2="204" y2="350" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
${ARR(330, 310, 296, 310, 'arr-fp-cube-m', 2.5)}
${ARR(170, 310, 204, 310, 'arr-fp-cube-m', 2.5)}
${T(338, 315, 15, 'sides cancel', 'start')}
</g>
${T(132, 196, 16, '0.20 m', 'start')}
${T(132, 300, 16, '0.10', 'start')}${T(132, 318, 16, 'm', 'start')}
<g class="fig-accent-2">
<defs>${ARROW('arr-fp-cube-r')}</defs>
${ARR(250, 226, 250, 266, 'arr-fp-cube-r', 4)}
${ARR(250, 416, 250, 354, 'arr-fp-cube-r', 4)}
${T(272, 240, 18, '20 N down', 'start', '700')}
${T(272, 400, 18, '30 N up', 'start', '700')}
</g>
${T(720, 44, 22, 'Two routes, one answer', 'middle', '700')}
${T(500, 104, 17, 'Face forces, F = PA with A = 0.01 m²:', 'start', '700')}
<g class="fig-accent-2">
${T(520, 136, 17, 'bottom face: (3000)(0.01) = 30 N up', 'start')}
${T(520, 164, 17, 'top face: (2000)(0.01) = 20 N down', 'start')}
</g>
${T(520, 198, 20, 'net = 10 N up', 'start', '700')}
${T(500, 262, 17, 'Archimedes, in one line:', 'start', '700')}
${T(520, 298, 22, `${SUB('F', 'B', 22, ' = ')}${SUB('ρ', 'fluid', 22, ' ')}${SUB('V', 'sub', 22, ' g')}`, 'start', '700')}
${T(520, 330, 17, '= (1000)(10⁻³)(10) = 10 N', 'start')}
<g class="fig-muted">
${T(500, 392, 15, 'the bottom face is deeper, so the push up on it is larger;', 'start')}
${T(500, 414, 15, 'P₀ presses on both faces and cancels', 'start')}
</g>
</svg>`

/* 3 — Four free-body cases for a submerged object (lead, 1000×460) */
const FB = (size: number) => SUB('F', 'B', size)
const fbTank = (c: number) =>
  `<g class="fig-accent"><rect x="${c - 93}" y="130" width="186" height="208" fill="currentColor" fill-opacity="0.12"/><line x1="${c - 93}" y1="130" x2="${c + 93}" y2="130" stroke="currentColor" stroke-width="2"/></g>
<path d="M${c - 95} 100 L${c - 95} 340 L${c + 95} 340 L${c + 95} 100" fill="none" stroke="currentColor" stroke-width="3"/>`
const fbBlock = (c: number, top: number) => RECT(c - 30, top, 60, 60, 2.5, 0.18, 5)
const C1 = 130
const C2 = 377
const C3 = 623
const C4 = 870
const freeBodySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-fp-fbd-k')}</defs>
${T(C1, 38, 17, 'Hung from a scale', 'middle', '700')}
${T(C2, 38, 17, 'Resting on the bottom', 'middle', '700')}
${T(C3, 38, 17, 'A floater held under', 'middle', '700')}
${T(C4, 38, 17, 'Released', 'middle', '700')}
${fbTank(C1)}${fbTank(C2)}${fbTank(C3)}${fbTank(C4)}
${RECT(C1 - 13, 52, 26, 30, 2, 0, 4)}${LINE(C1, 82, C1, 200, 2)}
${fbBlock(C1, 200)}${fbBlock(C2, 278)}${fbBlock(C3, 210)}${fbBlock(C4, 210)}
${LINE(C3, 270, C3, 338, 2)}
${ARR(C1, 260, C1, 325, 'arr-fp-fbd-k', 3.5)}${T(C1 + 16, 300, 18, 'W', 'start', '700')}
<circle cx="${C2}" cy="308" r="4" fill="currentColor"/>
${ARR(C2, 308, C2, 373, 'arr-fp-fbd-k', 3.5)}${T(C2 + 16, 366, 18, 'W', 'start', '700')}
${ARR(C3 - 18, 270, C3 - 18, 300, 'arr-fp-fbd-k', 3.5)}${T(C3 - 36, 292, 18, 'W', 'end', '700')}
${ARR(C4, 270, C4, 300, 'arr-fp-fbd-k', 3.5)}${T(C4 + 16, 292, 18, 'W', 'start', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-fp-fbd-b')}</defs>
${ARR(C1 - 18, 200, C1 - 18, 170, 'arr-fp-fbd-b', 3.5)}${T(C1 - 36, 184, 18, FB(18), 'end', '700')}
${ARR(C2 - 18, 278, C2 - 18, 248, 'arr-fp-fbd-b', 3.5)}${T(C2 - 36, 262, 18, FB(18), 'end', '700')}
${ARR(C3, 210, C3, 150, 'arr-fp-fbd-b', 3.5)}${T(C3 + 16, 180, 18, FB(18), 'start', '700')}
${ARR(C4, 210, C4, 150, 'arr-fp-fbd-b', 3.5)}${T(C4 - 16, 180, 18, FB(18), 'end', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fp-fbd-r')}</defs>
${ARR(C1 + 18, 200, C1 + 18, 165, 'arr-fp-fbd-r', 3.5)}${T(C1 + 36, 184, 18, 'T', 'start', '700')}
${ARR(C2 + 18, 278, C2 + 18, 243, 'arr-fp-fbd-r', 3.5)}${T(C2 + 36, 262, 18, 'N', 'start', '700')}
${ARR(C3 + 18, 270, C3 + 18, 300, 'arr-fp-fbd-r', 3.5)}${T(C3 + 36, 292, 18, 'T', 'start', '700')}
<line x1="${C4 + 58}" y1="256" x2="${C4 + 58}" y2="206" stroke="currentColor" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#arr-fp-fbd-r)"/>${T(C4 + 72, 238, 18, 'a', 'start', '700')}
</g>
${T(C1, 396, 18, `T + ${SUB('F', 'B', 18, ' = W')}`, 'middle', '700')}
${T(C2, 396, 18, `N + ${SUB('F', 'B', 18, ' = W')}`, 'middle', '700')}
${T(C3, 396, 18, SUB('F', 'B', 18, ' = W + T'), 'middle', '700')}
${T(C4, 396, 18, SUB('F', 'B', 18, ' − W = ma'), 'middle', '700')}
${T(C1, 426, 15, `scale reads W − ${FB(15)}`, 'middle')}
${T(C2, 426, 15, `floor gives N = W − ${FB(15)}`, 'middle')}
${T(C3, 426, 15, `pull T = ${SUB('F', 'B', 15, ' − W')}`, 'middle')}
${T(C4, 426, 15, 'm = the OBJECT’s mass', 'middle')}
<g class="fig-muted">${T(C1, 448, 15, '(the apparent weight)', 'middle')}${T(C3, 448, 15, '(same at any depth)', 'middle')}</g>
</svg>`

/* 4 — Bernoulli as energy bookkeeping: stacked bars for two pipes (lead, 1000×460) */
const KE = '½ρv²'
const bar = (x: number, top: number, h: number, cls: string, opacity: number) =>
  `<g${cls ? ` class="${cls}"` : ''}><rect x="${x}" y="${top}" width="80" height="${h}" fill="currentColor" fill-opacity="${opacity}"/></g><rect x="${x}" y="${top}" width="80" height="${h}" fill="none" stroke="currentColor" stroke-width="2"/>`
const energySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(500, 36, 22, `P + ${KE} + ρgh = constant`, 'middle', '700')}
${T(260, 68, 17, 'Level pipe that narrows', 'middle', '700')}
${T(740, 68, 17, 'Same width, climbing', 'middle', '700')}
<g class="fig-accent"><path d="M60 84 L220 84 L270 104 L460 104 L460 144 L270 144 L220 164 L60 164 z" fill="currentColor" fill-opacity="0.25"/></g>
<path d="M60 84 L220 84 L270 104 L460 104 M60 164 L220 164 L270 144 L460 144" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="180" cy="124" r="5" fill="currentColor"/><circle cx="300" cy="124" r="5" fill="currentColor"/>
${T(170, 130, 17, '1', 'end', '700')}${T(290, 130, 17, '2', 'end', '700')}
<g class="fig-accent"><path d="M540 130 L650 130 L770 84 L940 84 L940 120 L778 120 L658 166 L540 166 z" fill="currentColor" fill-opacity="0.25"/></g>
<path d="M540 130 L650 130 L770 84 L940 84 M540 166 L658 166 L778 120 L940 120" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="580" cy="148" r="5" fill="currentColor"/><circle cx="850" cy="102" r="5" fill="currentColor"/>
${T(570, 154, 17, '1', 'end', '700')}${T(840, 108, 17, '2', 'end', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-fp-energy-r')}</defs>
${ARR(80, 124, 120, 124, 'arr-fp-energy-r', 4)}
${ARR(330, 124, 430, 124, 'arr-fp-energy-r', 4)}
${ARR(592, 148, 640, 148, 'arr-fp-energy-r', 4)}
${ARR(862, 102, 910, 102, 'arr-fp-energy-r', 4)}
</g>
<g class="fig-muted">
<line x1="100" y1="230" x2="420" y2="230" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/>
<line x1="560" y1="230" x2="900" y2="230" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/>
${T(260, 220, 15, 'same total', 'middle')}${T(730, 220, 15, 'same total', 'middle')}
</g>
${bar(140, 230, 146, '', 0.1)}${bar(140, 376, 24, 'fig-accent-2', 0.35)}
${bar(300, 230, 80, '', 0.1)}${bar(300, 310, 90, 'fig-accent-2', 0.35)}
${bar(600, 230, 130, '', 0.1)}${bar(600, 360, 40, 'fig-accent-2', 0.35)}
${bar(780, 230, 60, '', 0.1)}${bar(780, 290, 70, 'fig-accent', 0.35)}${bar(780, 360, 40, 'fig-accent-2', 0.35)}
${T(180, 310, 18, 'P', 'middle', '700')}${T(132, 394, 16, KE, 'end')}
${T(340, 276, 18, 'P', 'middle', '700')}${T(340, 361, 16, KE, 'middle')}
${T(640, 301, 18, 'P', 'middle', '700')}${T(640, 386, 16, KE, 'middle')}
${T(820, 266, 18, 'P', 'middle', '700')}${T(820, 331, 16, 'ρgh', 'middle')}${T(820, 386, 16, KE, 'middle')}
${T(180, 422, 15, 'point 1', 'middle')}${T(340, 422, 15, 'point 2', 'middle')}
${T(640, 422, 15, 'point 1', 'middle')}${T(820, 422, 15, 'point 2', 'middle')}
${T(260, 448, 17, 'faster ⇒ lower pressure', 'middle', '700')}
${T(730, 448, 17, 'higher ⇒ lower pressure', 'middle', '700')}
</svg>`

/* 5 — Torricelli: the leaking tank and its projectile jet (lead, 1000×460) */
const torricelliSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(300, 40, 22, 'Torricelli: a leak leaves at free-fall speed', 'middle', '700')}
<g class="fig-accent"><rect x="72" y="110" width="196" height="188" fill="currentColor" fill-opacity="0.12"/><line x1="72" y1="110" x2="268" y2="110" stroke="currentColor" stroke-width="2"/></g>
<path d="M70 70 L70 300 L270 300 L270 258 M270 242 L270 70" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M86 300 L86 400 M254 300 L254 400" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M24 400 L600 400" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="190" cy="110" r="5" fill="currentColor"/>
${T(170, 96, 15, `point 1: P₀, ${SUB('v', '1', 15, ' ≈ 0')}`, 'middle')}
<g class="fig-muted">
<defs>${ARROW('arr-fp-torr-m')}</defs>
${DIM(110, 114, 110, 246, 'arr-fp-torr-m', 2)}
${DIM(46, 254, 46, 396, 'arr-fp-torr-m', 2)}
${DIM(274, 428, 556, 428, 'arr-fp-torr-m', 2)}
<line x1="34" y1="250" x2="262" y2="250" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="560" y1="404" x2="560" y2="438" stroke="currentColor" stroke-width="1.5"/>
<line x1="270" y1="404" x2="270" y2="438" stroke="currentColor" stroke-width="1.5"/>
</g>
${T(122, 186, 19, 'h', 'start', '700')}
${T(57, 332, 19, 'H', 'start', '700')}
${T(415, 452, 17, 'R = vt = 2√(hH)', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-fp-torr-r')}</defs>
<circle cx="278" cy="250" r="5" fill="currentColor"/>
<path d="M274 250 Q415 250 553 394" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-fp-torr-r)"/>
${T(286, 232, 16, 'point 2: P₀, speed v', 'start', '700')}
</g>
<g class="fig-muted">${T(290, 346, 15, 'the jet is a projectile:', 'start')}${T(290, 368, 15, 'it falls for t = √(2H/g)', 'start')}</g>
${T(800, 96, 28, 'v = √(2gh)', 'middle', '700')}
${T(800, 132, 18, `ρgh = ${KE}`, 'middle')}
<g class="fig-muted">${T(800, 158, 15, 'both points are open to the air: P₀ cancels', 'middle')}</g>
${T(660, 214, 17, '• the density cancels', 'start')}
${T(660, 246, 17, '• 2 × the depth ⇒ √2 × the speed', 'start')}
${T(660, 278, 17, '• 4 × the depth ⇒ 2 × the speed', 'start')}
${T(660, 310, 17, '• draining: h shrinks, so v falls', 'start')}
<g class="fig-muted">${T(800, 356, 15, 'h is the depth of the hole below the surface', 'middle')}</g>
</svg>`

/* 6 — Pitot tube and lift on a wing (lead, 1000×460) */
const pitotSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(260, 40, 20, 'Pitot tube: stop the flow, read its speed', 'middle', '700')}
<g class="fig-accent">
<path d="M180 190 L320 190 L320 150 L340 150 L340 210 L180 210 z" fill="currentColor" fill-opacity="0.25"/>
<rect x="420" y="150" width="20" height="40" fill="currentColor" fill-opacity="0.25"/>
</g>
<path d="M180 190 L320 190 L320 96 M180 210 L340 210 L340 96" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M420 96 L420 190 M440 96 L440 190" fill="none" stroke="currentColor" stroke-width="2.5"/>
${T(330, 84, 18, `P + ${KE}`, 'middle', '700')}
${T(430, 84, 18, 'P', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-fp-pitot-r')}</defs>
${ARR(50, 150, 120, 150, 'arr-fp-pitot-r', 3.5)}
${ARR(50, 200, 120, 200, 'arr-fp-pitot-r', 3.5)}
${ARR(50, 250, 120, 250, 'arr-fp-pitot-r', 3.5)}
${ARR(385, 206, 475, 206, 'arr-fp-pitot-r', 3.5)}
<circle cx="180" cy="200" r="6" fill="currentColor"/>
${T(85, 128, 17, 'speed v', 'middle', '700')}
${T(150, 268, 16, 'tip: the flow is brought to rest', 'start', '700')}
</g>
<g class="fig-muted">${T(150, 290, 15, '(stagnation pressure)', 'start')}</g>
${T(430, 232, 16, 'side port: static P', 'middle')}
${T(260, 338, 22, `ΔP = ${KE}   ⇒   v = √(2ΔP/ρ)`, 'middle', '700')}
${T(260, 368, 16, 'ρ is the density of the fluid that is moving', 'middle')}
<g class="fig-muted">${T(260, 394, 15, '(air: about 1.2 kg/m³)', 'middle')}</g>
<g class="fig-muted"><line x1="508" y1="60" x2="508" y2="420" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/></g>
${T(750, 40, 20, 'Lift: faster air on top, lower pressure', 'middle', '700')}
<path d="M610 200 Q670 138 760 150 Q850 162 890 204 Q750 210 610 200 z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-fp-lift-r')}</defs>
${ARR(630, 116, 850, 116, 'arr-fp-lift-r', 4)}
${ARR(660, 246, 820, 246, 'arr-fp-lift-r', 4)}
${T(740, 102, 17, '50 m/s', 'middle', '700')}
${T(740, 272, 17, '40 m/s', 'middle', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-fp-lift-b')}</defs>
${ARR(925, 236, 925, 130, 'arr-fp-lift-b', 5)}
${T(925, 262, 17, 'F = ΔP · A', 'middle', '700')}
</g>
${T(750, 322, 18, `ΔP = ½ρ(${SUB('v', 'top', 18, '² − ')}${SUB('v', 'bottom', 18, '²)')}`, 'middle', '700')}
${T(750, 352, 17, '= (0.6)(2500 − 1600) = 540 Pa', 'middle')}
${T(750, 382, 17, 'on a 10 m² wing: 5400 N of lift', 'middle')}
<g class="fig-muted">${T(750, 408, 15, '(air at 1.2 kg/m³)', 'middle')}</g>
</svg>`

/* 7 — Poiseuille: pressure falls along a uniform tube; what is held fixed (lead, 1000×460) */
const PIPES = [120, 240, 360, 480]
const LEVELS = [112, 152, 192, 232]
const poiseuilleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(300, 46, 24, 'Q = πΔPr⁴ / 8ηL = ΔP / R', 'middle', '700')}
<g class="fig-accent"><rect x="70" y="262" width="460" height="56" fill="currentColor" fill-opacity="0.25"/></g>
<path d="M70 262 L108 262 M132 262 L228 262 M252 262 L348 262 M372 262 L468 262 M492 262 L530 262 M70 318 L530 318" fill="none" stroke="currentColor" stroke-width="3"/>
${PIPES.map((c, i) => standpipe(c, 262, LEVELS[i])).join('')}
<g class="fig-muted">
<defs>${ARROW('arr-fp-pois-m')}</defs>
<line x1="132" y1="112" x2="548" y2="112" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="492" y1="232" x2="548" y2="232" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="120" y1="112" x2="480" y2="232" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 5"/>
${DIM(122, 342, 478, 342, 'arr-fp-pois-m', 2)}
</g>
${T(300, 366, 18, 'L', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-fp-pois-r')}</defs>
${DIM(540, 116, 540, 228, 'arr-fp-pois-r', 2)}
${T(550, 178, 18, 'ΔP', 'start', '700')}
${ARR(170, 290, 250, 290, 'arr-fp-pois-r', 4)}
${T(158, 296, 18, 'Q', 'end', '700')}
</g>
${T(390, 296, 16, 'radius r, viscosity η', 'middle')}
${T(300, 402, 16, 'friction: pressure falls steadily along a uniform tube', 'middle')}
${T(300, 436, 20, 'R = 8ηL / πr⁴', 'middle', '700')}
${T(790, 46, 20, 'Ask what is held fixed', 'middle', '700')}
<g class="fig-muted">${RECT(620, 70, 340, 150, 1.5, 0.06, 12)}${RECT(620, 240, 340, 150, 1.5, 0.06, 12)}</g>
${T(790, 102, 17, 'FIXED PRESSURE', 'middle', '700')}
${T(790, 136, 18, 'flow Q ∝ r⁴', 'middle')}
${T(790, 164, 18, 'average speed ∝ r²', 'middle')}
<g class="fig-accent-2">${T(790, 198, 16, 'double r ⇒ 16 × the flow', 'middle', '700')}</g>
${T(790, 272, 17, 'FIXED FLOW', 'middle', '700')}
${T(790, 306, 18, 'pressure ΔP ∝ 1/r⁴', 'middle')}
${T(790, 334, 18, 'speed ∝ 1/r²', 'middle')}
<g class="fig-accent-2">${T(790, 368, 16, 'half r ⇒ 16 × the pressure', 'middle', '700')}</g>
${T(790, 424, 16, 'double L or double η ⇒ double R', 'middle')}
</svg>`

/* 8 — The circulation as a circuit: the worked example's series loop and parallel beds (after, 1000×460) */
const circuitSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(260, 40, 20, 'Series: same Q, the drops add', 'middle', '700')}
${LINE(80, 196, 80, 110)}${RES(80, 110, 290, 110)}${RES(290, 110, 450, 110)}${LINE(450, 110, 450, 350)}${LINE(450, 350, 80, 350)}${LINE(80, 350, 80, 264)}
<circle class="fig-bg" cx="80" cy="230" r="34" stroke="currentColor" stroke-width="2.5"/>
${T(80, 236, 16, 'heart', 'middle', '700')}
${T(185, 86, 16, 'arterioles: R = 11', 'middle', '700')}
${T(370, 86, 16, 'other vessels', 'middle')}
<g class="fig-accent-2">
${T(185, 146, 16, 'drop = QR', 'middle', '700')}
${T(185, 168, 16, '= (5)(11) = 55 mmHg', 'middle', '700')}
</g>
${T(130, 226, 17, 'MAP = 90 mmHg', 'start', '700')}
<g class="fig-muted">${T(130, 248, 15, '(right atrium: 0)', 'start')}</g>
${T(290, 292, 18, 'TPR = MAP / CO = 90 / 5 = 18', 'middle', '700')}
<g class="fig-muted">${T(290, 316, 15, 'resistances in mmHg·min/L', 'middle')}</g>
<g class="fig-accent">
<defs>${ARROW('arr-fp-circ-b')}</defs>
${ARR(320, 350, 250, 350, 'arr-fp-circ-b', 4.5)}
${T(285, 380, 17, 'Q = CO = 5 L/min', 'middle', '700')}
</g>
<g class="fig-muted"><line x1="500" y1="60" x2="500" y2="420" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/></g>
${T(750, 40, 20, 'Parallel: same ΔP, the flows add', 'middle', '700')}
${LINE(580, 110, 900, 110)}${LINE(580, 320, 900, 320)}${RES(660, 110, 660, 320)}${RES(820, 110, 820, 320)}
<circle cx="660" cy="110" r="4" fill="currentColor"/><circle cx="820" cy="110" r="4" fill="currentColor"/><circle cx="660" cy="320" r="4" fill="currentColor"/><circle cx="820" cy="320" r="4" fill="currentColor"/>
${T(572, 96, 16, '90 mmHg', 'start', '700')}
${T(572, 342, 16, '0', 'start', '700')}
${T(680, 212, 17, 'R = 30', 'start', '700')}
${T(840, 212, 17, 'R = 60', 'start', '700')}
<g class="fig-accent">
${ARR(660, 124, 660, 164, 'arr-fp-circ-b', 4.5)}
${ARR(820, 124, 820, 164, 'arr-fp-circ-b', 4.5)}
${T(680, 238, 17, '3 L/min', 'start', '700')}
${T(840, 238, 17, '1.5 L/min', 'start', '700')}
</g>
${T(750, 366, 16, 'together 4.5 L/min, so R = 90 / 4.5 = 20: below either', 'middle')}
<g class="fig-accent-2">
${T(750, 400, 16, 'organ 1’s arterioles widen 19 % in radius: 1.19⁴ ≈ 2', 'middle', '700')}
${T(750, 426, 16, 'R: 30 → 15, so its flow: 3 → 6 L/min', 'middle', '700')}
</g>
</svg>`

export const mcatFluidsPartsFigures: DeckFigurePlacement[] = [
  {
    // Fluids Part 1 (mcat-physics-mechanics-fluids-mcat)
    at: 'Gauge vs. Absolute Pressure',
    mode: 'lead',
    figure: {
      svg: gaugeSvg,
      alt:
        'Left: P_gauge = P − P_atm over a vertical pressure ladder read two ways. On the absolute side (measured from a vacuum) the rungs read 0 (vacuum) at the bottom, 760 mmHg (1 atm) in the middle and 880 mmHg at the top. On the gauge side (measured from atmospheric) the same rungs read −760 mmHg, 0: atmospheric, and +120 mmHg: systolic, with one more rung just below atmospheric marked −4 mmHg: around the lungs. The part of the ladder above atmospheric is tinted red. Note: cuffs and tire gauges read gauge; add 760 mmHg for absolute; the ladder is not to scale. Right: a cup of drink with a straw. Red arrows show atmospheric pressure pushing down on the drink’s surface and the drink rising inside the straw; the mouth end is labelled below atmospheric (negative gauge pressure). Note: the atmosphere pushes the drink up the straw.',
      caption: 'Gauge pressure is measured from atmospheric, absolute pressure from a vacuum; a negative gauge pressure is simply below atmospheric (ladder not to scale).',
    },
    blocks: [
      '- $P_{\\text{gauge}} = P - P_{\\text{atm}}$: cuffs and tire gauges read gauge; absolute is never below zero',
      '- Gauge can be negative: a straw, or the $-4$ mmHg around the lungs. Add $760$ mmHg for absolute',
    ],
  },
  {
    // Fluids Part 2 (mcat-physics-mechanics-buoyancy-mcat)
    at: "Archimedes' Principle",
    mode: 'lead',
    figure: {
      svg: cubeSvg,
      alt:
        'Left: a tank of water with a cube held under the surface. Grey dimension arrows show the cube’s top face 0.20 m below the surface and its side as 0.10 m. A short red arrow pushes down on the top face, labelled 20 N down; a longer red arrow pushes up on the bottom face, labelled 30 N up; two small grey arrows on the vertical faces are labelled sides cancel. Right: Two routes, one answer. Face forces, F = PA with A = 0.01 m²: bottom face (3000)(0.01) = 30 N up, top face (2000)(0.01) = 20 N down, net = 10 N up. Archimedes, in one line: F_B = ρ_fluid V_sub g = (1000)(10⁻³)(10) = 10 N. Note: the bottom face is deeper, so the push up on it is larger; P₀ presses on both faces and cancels.',
      caption: 'Buoyancy is the difference between the push up on the deeper bottom face and the push down on the top face; Archimedes gives the same 10 N in one line.',
    },
    blocks: [
      '- The bottom face is deeper, so the water pushes up on it harder: net up $= \\rho_{\\text{fluid}} V g$',
      '- $F_B = \\rho_{\\text{fluid}} V_{\\text{sub}}\\, g$: the FLUID\'s density, the SUBMERGED volume, any depth',
    ],
  },
  {
    // Fluids Part 2 (mcat-physics-mechanics-buoyancy-mcat)
    at: 'Sinking, Apparent Weight and Free-Body Diagrams',
    mode: 'lead',
    figure: {
      svg: freeBodySvg,
      alt:
        'Four tanks of water, each with a block and its force arrows: weight W in black pointing down, buoyant force F_B in blue pointing up, and a third force in red. 1, Hung from a scale: the block hangs on a string from a scale above the tank; tension T and F_B point up, W points down; T + F_B = W, so the scale reads W − F_B, the apparent weight. 2, Resting on the bottom: the block sits on the tank floor; the normal force N and F_B point up, W points down; N + F_B = W, so the floor gives N = W − F_B. 3, A floater held under: the block is tied to the floor by a string; a long F_B points up, W and the string tension T point down; F_B = W + T, so the pull is T = F_B − W, the same at any depth. 4, Released: no string; a long F_B up and a short W down, with a dashed red arrow showing the acceleration a upward; F_B − W = ma, where m is the object’s mass.',
      caption: 'Every submerged problem is a free-body diagram: weight down, buoyant force up, then whatever else touches the object (arrow lengths illustrative).',
    },
    blocks: [
      '- Always $W$ down and $F_B$ up, then the third force: a string ($T$), the floor ($N$) or nothing',
      '- Scale or floor: $W - F_B$. Floater held under: $T = F_B - W$. Released: $F_B - W = ma$',
    ],
  },
  {
    // Fluids Part 3 (mcat-physics-mechanics-fluid-dynamics-mcat)
    at: 'Bernoulli: Energy Conservation for Ideal Fluids',
    mode: 'lead',
    figure: {
      svg: energySvg,
      alt:
        'Heading: P + ½ρv² + ρgh = constant. Left, a level pipe that narrows: a short red velocity arrow at point 1 in the wide section and a long one at point 2 in the narrow section. Below, two stacked bars of equal total height reach the same dashed line marked same total. At point 1 the bar is mostly P with a thin ½ρv² slice; at point 2 the ½ρv² slice is much larger and the P slice smaller. Note: faster ⇒ lower pressure. Right, a pipe of the same width that climbs: equal velocity arrows at point 1 (low) and point 2 (high). The two bars again have equal total height. At point 1 the bar is P plus ½ρv²; at point 2 the ½ρv² slice is unchanged, a blue ρgh slice has appeared and the P slice is smaller. Note: higher ⇒ lower pressure.',
      caption: "Bernoulli's equation as energy bookkeeping: the three terms always add to the same total, so a gain in speed or height is paid for in pressure (bar heights illustrative).",
    },
    blocks: [
      '- Each term is an energy per unit volume; along a streamline the three always add to the same total',
      '- Faster (narrower) or higher means lower pressure; if both happen, the two drops add',
    ],
  },
  {
    // Fluids Part 3 (mcat-physics-mechanics-fluid-dynamics-mcat)
    at: "Torricelli's Theorem",
    mode: 'lead',
    figure: {
      svg: torricelliSvg,
      alt:
        'Left: an open tank of water standing on legs above the ground, with a small hole in its right wall. Point 1 is on the water surface (P₀, v₁ ≈ 0); point 2 is in the jet just outside the hole (P₀, speed v). A grey arrow marks the depth h of the hole below the surface, and another marks the height H of the hole above the ground. A red jet leaves the hole horizontally and curves down as a parabola to land a distance R from the tank; R = vt = 2√(hH). Note: the jet is a projectile; it falls for t = √(2H/g). Right: v = √(2gh), from ρgh = ½ρv²; both points are open to the air, so P₀ cancels. Bullets: the density cancels; 2 × the depth ⇒ √2 × the speed; 4 × the depth ⇒ 2 × the speed; draining: h shrinks, so v falls. Note: h is the depth of the hole below the surface.',
      caption: "Torricelli's theorem: liquid leaves a small hole at the speed of an object dropped from the surface, √(2gh), and the jet then flies as a projectile (schematic).",
    },
    blocks: [
      '- Surface and jet both at $P_0$, $v_1 \\approx 0$: $\\rho g h = \\tfrac{1}{2}\\rho v^2$, so $v = \\sqrt{2gh}$',
      '- $v \\propto \\sqrt{h}$ and the density cancels; the jet is a projectile with range $R = 2\\sqrt{hH}$',
    ],
  },
  {
    // Fluids Part 3 (mcat-physics-mechanics-fluid-dynamics-mcat)
    at: 'Venturi and Pitot Tubes',
    mode: 'lead',
    figure: {
      svg: pitotSvg,
      alt:
        'Left, a pitot tube: red arrows show fluid moving right at speed v toward the open tip of an L-shaped tube that points straight into the flow; a red dot at the tip is labelled tip: the flow is brought to rest (stagnation pressure), and the top of that tube reads P + ½ρv². A second, straight tube with its opening alongside the flow is labelled side port: static P, and reads P. Below: ΔP = ½ρv² ⇒ v = √(2ΔP/ρ); ρ is the density of the fluid that is moving (air: about 1.2 kg/m³). Right, lift: a wing cross-section with a long red arrow above it labelled 50 m/s and a shorter one below labelled 40 m/s; a blue arrow pointing up is labelled F = ΔP · A. Below: ΔP = ½ρ(v_top² − v_bottom²) = (0.6)(2500 − 1600) = 540 Pa; on a 10 m² wing: 5400 N of lift (air at 1.2 kg/m³).',
      caption: 'Two more uses of "faster means lower pressure": a pitot tube reads speed from the stagnation pressure at its tip, and a wing is lifted by the slower, higher-pressure air beneath it (schematic).',
    },
    blocks: [
      '- Pitot: tip reads $P + \\tfrac{1}{2}\\rho v^2$, side port reads $P$, so $v = \\sqrt{2\\Delta P/\\rho}$',
      '- Venturi, atomizer and wing all use one chain: faster flow, lower pressure, and $F = \\Delta P \\cdot A$',
    ],
  },
  {
    // Fluids Part 4 (mcat-physics-mechanics-viscosity-mcat)
    at: "Poiseuille's Law",
    mode: 'lead',
    figure: {
      svg: poiseuilleSvg,
      alt:
        'Heading: Q = πΔPr⁴ / 8ηL = ΔP / R. Left: a horizontal tube of uniform radius r carrying a fluid of viscosity η, with a red flow arrow labelled Q. Four open standpipes rise from the tube at equal spacings, and the liquid stands lower in each one along the flow, the levels falling on a straight dashed line. A red dimension arrow between the first and last levels is labelled ΔP, and a grey one along the tube is labelled L. Notes: friction: pressure falls steadily along a uniform tube; R = 8ηL / πr⁴. Right: Ask what is held fixed. Card 1, fixed pressure: flow Q ∝ r⁴, average speed ∝ r², double r ⇒ 16 × the flow. Card 2, fixed flow: pressure ΔP ∝ 1/r⁴, speed ∝ 1/r², half r ⇒ 16 × the pressure. Below: double L or double η ⇒ double R.',
      caption: "Poiseuille's law: viscous friction makes the pressure fall steadily along a uniform tube, and the tube's resistance goes as 1/r⁴ (schematic).",
    },
    blocks: [
      '- $Q = \\Delta P / R$, $R = 8\\eta L/(\\pi r^4)$: double $r$ ⇒ $R \\div 16$; double $L$ or $\\eta$ ⇒ $R \\times 2$',
      '- Ask what is held fixed: fixed $\\Delta P$ ⇒ $Q \\propto r^4$; fixed $Q$ ⇒ $\\Delta P \\propto 1/r^4$',
    ],
  },
  {
    // Fluids Part 4 (mcat-physics-mechanics-viscosity-mcat)
    // After the worked example, not before it: the drawing carries its answers.
    at: 'Worked Example — The Circulation as a Circuit',
    mode: 'after',
    figure: {
      svg: circuitSvg,
      alt:
        'Left, Series: same Q, the drops add. A loop of wire runs from a circle labelled heart through two resistors in a row, labelled arterioles: R = 11 and other vessels, and back to the heart. A blue arrow on the return wire reads Q = CO = 5 L/min. Beside the heart: MAP = 90 mmHg (right atrium: 0). In red under the arterioles: drop = QR = (5)(11) = 55 mmHg. In the middle: TPR = MAP / CO = 90 / 5 = 18, resistances in mmHg·min/L. Right, Parallel: same ΔP, the flows add. Two rails, the top at 90 mmHg and the bottom at 0, are joined by two resistors side by side, R = 30 and R = 60, with blue flow arrows reading 3 L/min and 1.5 L/min. Below: together 4.5 L/min, so R = 90 / 4.5 = 20: below either. In red: organ 1’s arterioles widen 19 % in radius: 1.19⁴ ≈ 2; R: 30 → 15, so its flow: 3 → 6 L/min.',
      caption: 'The worked example drawn as a circuit: pressure difference is the voltage, flow is the current, and the heart is the battery.',
    },
    blocks: [
      '- Series (left): the same $5$ L/min crosses every level, so the arterioles drop $QR = 55$ of the $90$ mmHg',
      '- Parallel (right): each organ sees $90$ mmHg; flows $3 + 1.5$ add, and $R$ halves when $r$ rises $19\\%$',
    ],
  },
]
