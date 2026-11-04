import type { DeckFigurePlacement } from './index'
import { SVG_OPEN, ARROW, T, BOX, ARR, LINE, DIM, SUB, PATH, RES, CAPV, WIRE_BAT } from './mcat-cp-circuits'

/**
 * Circuits Part 2: EMF & Capacitors (MCAT C/P) — extra figures for the
 * in-class deck. Authored 2026-11-03. The deck also gets four figures from
 * mcat-cp-circuits.ts (EMF vs. terminal voltage, meters, capacitor networks,
 * the membrane as an RC circuit); nothing here repeats them.
 *
 * Every drawing is ours, drawn from the concept with the circuit symbols
 * exported by mcat-cp-circuits.ts: cells in series (a potential staircase)
 * vs identical cells in parallel, the parallel-plate capacitor and what A and
 * d do to C, a dielectric slab whose polarized molecules oppose the plates'
 * field, the connected-vs-isolated dielectric rules as up/down/same rows,
 * RC charging and discharging curves, an unmyelinated vs a myelinated axon,
 * the defibrillator's slow-charge / fast-discharge cycle, and the lesson's
 * steady-state network at t = 0 and long after. No textbook, prep-company or
 * AAMC figure was copied. Curves (RC, power–time) are illustrative and say
 * so. The only numbers drawn are the lesson's own: 1.5 V cells (four make
 * 6.0 V), "A × 2 → 2C / d × 2 → C/2" from the parallel-plate table, 63% / 37%
 * at τ and ~5τ from the time-constant table, and the worked example's 12 V,
 * 2.0/4.0/4.0 Ω, 5.0 μF → 3.0 A, 1.5 A, 2.0 A, 8.0 V, 40 μC.
 *
 * Colours follow mcat-cp-circuits.ts: wires, plates and resistors in the text
 * colour; CURRENT (and the field E) BLUE (fig-accent); voltages, the induced
 * opposing field and decreases RED (fig-accent-2); guides grey (fig-muted).
 * Each <marker> sits inside the coloured group that uses it; ids are
 * arr-ec-<figure>-<colour>, unique in this file.
 */

/** A battery in a HORIZONTAL wire at (cx, cy): long thin plate (+) on the right, short thick plate (−) on the left. The wire must stop at cx−6 and resume at cx+6. */
const BATH = (cx: number, cy: number) =>
  `<path d="M${cx + 6} ${cy - 18} L${cx + 6} ${cy + 18}" stroke="currentColor" stroke-width="3"/><path d="M${cx - 6} ${cy - 9} L${cx - 6} ${cy + 9}" stroke="currentColor" stroke-width="5.5"/>`

/** An outlined plate (vertical bar) — charges can be written inside it. */
const PLATE = (x: number, y: number, h: number, w = 24) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/>`

/** A column of charge signs centred at x. */
const SIGNS = (x: number, ys: number[], sign: string, size = 18) => ys.map((y) => T(x, y, size, sign, 'middle', '700')).join('')

/* 1 — Batteries in series vs parallel (lead, 1000×460) */
const cellsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(500, 24, 500, 440, 1.5)}</g>
${T(250, 46, 21, 'series (+ to −): EMFs add', 'middle', '700')}
<g class="fig-muted">${T(60, 82, 15, 'potential rises cell by cell')}</g>
<g class="fig-accent-2">
<path d="${PATH([[60, 290], [110, 290], [110, 245], [190, 245], [190, 200], [270, 200], [270, 155], [350, 155], [350, 110], [430, 110]])}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/>
${T(118, 276, 15, '+1.5 V', 'start', '700')}
${T(438, 116, 18, '6.0 V', 'start', '700')}
</g>
<g class="fig-muted">${[110, 190, 270, 350].map((x) => LINE(x, 300, x, 312, 1.5, true)).join('')}</g>
${LINE(60, 330, 104, 330)}${BATH(110, 330)}${LINE(116, 330, 184, 330)}${BATH(190, 330)}${LINE(196, 330, 264, 330)}${BATH(270, 330)}${LINE(276, 330, 344, 330)}${BATH(350, 330)}${LINE(356, 330, 430, 330)}
<circle cx="60" cy="330" r="5" fill="currentColor"/><circle cx="430" cy="330" r="5" fill="currentColor"/>
${T(50, 336, 18, '−', 'end', '700')}${T(440, 337, 18, '+', 'start', '700')}
${[110, 190, 270, 350].map((x) => T(x, 372, 15, '1.5 V', 'middle')).join('')}
${T(250, 408, 18, 'ε = 1.5 + 1.5 + 1.5 + 1.5 = 6.0 V', 'middle', '700')}
<g class="fig-muted">${T(250, 434, 15, 'internal r adds too (4r): more sag per amp', 'middle')}</g>
${T(750, 46, 21, 'parallel (identical cells): same EMF', 'middle', '700')}
${LINE(600, 120, 860, 120)}${LINE(600, 310, 860, 310)}
${LINE(600, 120, 620, 120)}
${WIRE_BAT(620, 120, 310, 220)}${WIRE_BAT(740, 120, 310, 220)}
<circle cx="860" cy="120" r="5" fill="currentColor"/><circle cx="860" cy="310" r="5" fill="currentColor"/>
${T(872, 126, 18, '+', 'start', '700')}${T(872, 316, 18, '−', 'start', '700')}
${T(648, 226, 15, '1.5 V')}${T(768, 226, 15, '1.5 V')}
<g class="fig-accent-2">${LINE(890, 140, 890, 290, 2.5, true)}${T(902, 222, 18, '1.5 V', 'start', '700')}</g>
<g class="fig-accent">
<defs>${ARROW('arr-ec-cells-b')}</defs>
${ARR(620, 196, 620, 140, 'arr-ec-cells-b', 3)}${T(632, 166, 16, 'I/2', 'start', '700')}
${ARR(740, 196, 740, 140, 'arr-ec-cells-b', 3)}${T(752, 166, 16, 'I/2', 'start', '700')}
${ARR(770, 120, 840, 120, 'arr-ec-cells-b', 3.5)}${T(805, 106, 17, 'I', 'middle', '700')}
</g>
${T(750, 362, 18, 'EMF stays 1.5 V, the same as one cell', 'middle', '700')}
${T(750, 392, 16, 'internal r’s in parallel → r/2: less sag under load', 'middle')}
${T(750, 418, 16, 'more total charge → the pack lasts longer', 'middle')}
</svg>`

/* 2 — The parallel-plate capacitor: geometry, uniform field, C = κε₀A/d (lead, 1000×460) */
const platePoly = (x: number) => `<polygon points="${x},134 ${x + 40},104 ${x + 40},324 ${x},354" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>`
const ppSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(520, 24, 520, 440, 1.5)}</g>
${T(260, 46, 21, 'two plates, area A, gap d', 'middle', '700')}
${platePoly(150)}${platePoly(330)}
${SIGNS(170, [170, 210, 250, 290, 330], '+')}
${SIGNS(350, [170, 210, 250, 290, 330], '−')}
${T(176, 90, 18, '+Q', 'middle', '700')}${T(356, 90, 18, '−Q', 'middle', '700')}
<g class="fig-muted">${LINE(116, 236, 146, 236, 1.5)}</g>
${T(110, 242, 16, 'area A', 'end')}
<g class="fig-accent">
<defs>${ARROW('arr-ec-pp-b')}</defs>
${[150, 190, 230, 270, 310].map((y) => ARR(198, y, 324, y, 'arr-ec-pp-b', 2.5)).join('')}
${T(262, 178, 17, 'E', 'middle', '700')}
</g>
<g class="fig-muted">${DIM(190, 330, 378)}</g>
${T(260, 402, 18, 'd', 'middle', '700')}
<g class="fig-accent">${T(260, 436, 18, 'E = V/d: uniform, + → −, ≈ 0 outside', 'middle', '700')}</g>
${T(760, 70, 30, 'C = κε₀A / d', 'middle', '700')}
<g class="fig-muted"><defs>${ARROW('arr-ec-pp-m')}</defs>
${ARR(630, 180, 680, 180, 'arr-ec-pp-m', 2.5)}
${ARR(630, 340, 680, 340, 'arr-ec-pp-m', 2.5)}
${T(592, 230, 15, 'A', 'middle')}${T(712, 254, 15, '2A', 'middle')}
${T(592, 404, 15, 'd', 'middle')}${T(724, 404, 15, '2d', 'middle')}
</g>
<rect x="580" y="155" width="6" height="50" fill="currentColor"/><rect x="598" y="155" width="6" height="50" fill="currentColor"/>
<rect x="700" y="130" width="6" height="100" fill="currentColor"/><rect x="718" y="130" width="6" height="100" fill="currentColor"/>
${T(770, 172, 20, 'A × 2 → 2C', 'start', '700')}
${T(770, 198, 15, 'bigger plates:')}${T(770, 218, 15, 'more charge per volt')}
<rect x="580" y="300" width="6" height="80" fill="currentColor"/><rect x="598" y="300" width="6" height="80" fill="currentColor"/>
<rect x="700" y="300" width="6" height="80" fill="currentColor"/><rect x="742" y="300" width="6" height="80" fill="currentColor"/>
${T(770, 332, 20, 'd × 2 → C/2', 'start', '700')}
${T(770, 358, 15, 'plates farther apart:')}${T(770, 378, 15, 'less charge per volt')}
<g class="fig-muted">${T(760, 438, 16, 'a dielectric κ in the gap multiplies C by κ', 'middle')}</g>
</svg>`

/* 3 — Dielectrics: polarized molecules oppose the plates' field (lead, 1000×460) */
const molecule = (x: number, y: number) =>
  `<ellipse cx="${x}" cy="${y}" rx="21" ry="12" fill="none" stroke="currentColor" stroke-width="1.8"/>${T(x - 10, y + 5, 15, '−', 'middle', '700')}${T(x + 10, y + 5, 15, '+', 'middle', '700')}`
const dielSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(500, 24, 500, 392, 1.5)}</g>
${T(250, 38, 20, 'air gap: the plates’ field E₀', 'middle', '700')}
${T(122, 64, 17, '+Q', 'middle', '700')}${T(378, 64, 17, '−Q', 'middle', '700')}
${PLATE(110, 74, 222)}${PLATE(366, 74, 222)}
${SIGNS(122, [104, 144, 184, 224, 264], '+')}
${SIGNS(378, [104, 144, 184, 224, 264], '−')}
<g class="fig-accent">
<defs>${ARROW('arr-ec-diel-b')}</defs>
${[95, 125, 155, 215, 245, 275].map((y) => ARR(142, y, 358, y, 'arr-ec-diel-b', 2.5)).join('')}
${ARR(142, 185, 220, 185, 'arr-ec-diel-b', 2.5)}${ARR(282, 185, 358, 185, 'arr-ec-diel-b', 2.5)}
${T(251, 191, 18, 'E₀', 'middle', '700')}
</g>
${T(250, 334, 16, 'charge ±Q · voltage V₀ · capacitance C₀', 'middle')}
<g class="fig-muted">${T(250, 366, 15, 'many field lines = strong field', 'middle')}</g>
${T(760, 38, 20, 'dielectric slab κ: same Q', 'middle', '700')}
${T(632, 64, 17, '+Q', 'middle', '700')}${T(888, 64, 17, '−Q', 'middle', '700')}
${PLATE(620, 74, 222)}${PLATE(876, 74, 222)}
${SIGNS(632, [104, 144, 184, 224, 264], '+')}
${SIGNS(888, [104, 144, 184, 224, 264], '−')}
<g class="fig-muted">
<rect x="652" y="80" width="216" height="210" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/>
${[700, 760, 820].map((x) => [108, 163, 218, 273].map((y) => molecule(x, y)).join('')).join('')}
</g>
<g class="fig-accent-2">${SIGNS(666, [114, 169, 224, 279], '−', 20)}${SIGNS(854, [114, 169, 224, 279], '+', 20)}</g>
<g class="fig-accent">
<defs>${ARROW('arr-ec-diel-b2')}</defs>
${[136, 191, 246].map((y) => ARR(652, y, 862, y, 'arr-ec-diel-b2', 2.5)).join('')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-ec-diel-b3')}</defs>
${ARR(660, 322, 840, 322, 'arr-ec-diel-b3', 3)}${T(650, 328, 15, 'plates’ field E₀', 'end')}
${ARR(660, 374, 760, 374, 'arr-ec-diel-b3', 3.5)}${T(650, 380, 15, 'net E = E₀/κ', 'end', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-ec-diel-r')}</defs>
${ARR(840, 348, 742, 348, 'arr-ec-diel-r', 3)}${T(650, 354, 15, 'induced field (opposes)', 'end')}
</g>
${T(500, 432, 19, 'same Q: E and V fall by κ, so C = κC₀ (κ ≥ 1)', 'middle', '700')}
</svg>`

/* 4 — Stored energy: inserting a dielectric with the battery connected vs disconnected (lead, 1000×460) */
const ROWS = ['capacitance C', 'charge Q', 'voltage V', 'field E', 'energy U']
const row = (x0: number, i: number, dir: 'up' | 'down' | 'same', value: string) => {
  const y = 306 + 30 * i
  const cls = dir === 'up' ? 'fig-accent' : dir === 'down' ? 'fig-accent-2' : 'fig-muted'
  const glyph = dir === 'up' ? '↑' : dir === 'down' ? '↓' : '='
  return `${T(x0 + 170, y, 16, ROWS[i], 'end')}<g class="${cls}">${T(x0 + 196, y + 1, 21, glyph, 'middle', '700')}${T(x0 + 220, y, 16, value, 'start', '700')}</g>`
}
const slab = (x: number) =>
  `<g class="fig-muted"><rect x="${x}" y="128" width="34" height="66" rx="3" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/><defs>${ARROW(`arr-ec-u-m${x}`)}</defs>${ARR(x + 17, 226, x + 17, 202, `arr-ec-u-m${x}`, 2.5)}</g>${T(x + 48, 190, 16, 'κ', 'start', '700')}`
const energySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(500, 24, 500, 440, 1.5)}</g>
${T(255, 44, 20, 'battery connected → V fixed', 'middle', '700')}
${LINE(222, 70, 222, 170, 5)}${LINE(288, 70, 288, 170, 5)}
${T(208, 90, 16, '+', 'end', '700')}${T(302, 90, 16, '−', 'start', '700')}
${LINE(150, 100, 220, 100)}${LINE(290, 100, 360, 100)}
${WIRE_BAT(150, 100, 240, 170)}${LINE(360, 100, 360, 240)}${LINE(150, 240, 360, 240)}
${slab(238)}
${T(130, 176, 17, 'V', 'end', '700')}
${T(255, 280, 17, 'use U = ½CV² → U ∝ C', 'middle', '700')}
${row(20, 0, 'up', '× κ')}${row(20, 1, 'up', '× κ (battery adds charge)')}${row(20, 2, 'same', 'unchanged')}${row(20, 3, 'same', 'unchanged (V/d fixed)')}${row(20, 4, 'up', '× κ')}
${T(745, 44, 20, 'disconnected → Q fixed', 'middle', '700')}
${LINE(712, 70, 712, 170, 5)}${LINE(778, 70, 778, 170, 5)}
${T(698, 90, 16, '+Q', 'end', '700')}${T(792, 90, 16, '−Q', 'start', '700')}
${LINE(650, 100, 710, 100)}${LINE(780, 100, 840, 100)}
<circle class="fig-bg" cx="650" cy="100" r="5" stroke="currentColor" stroke-width="2.5"/><circle class="fig-bg" cx="840" cy="100" r="5" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted">${T(745, 252, 15, 'isolated: the charge has nowhere to go', 'middle')}</g>
${slab(728)}
${T(745, 280, 17, 'use U = Q²/2C → U ∝ 1/C', 'middle', '700')}
${row(510, 0, 'up', '× κ')}${row(510, 1, 'same', 'unchanged')}${row(510, 2, 'down', '÷ κ')}${row(510, 3, 'down', '÷ κ')}${row(510, 4, 'down', '÷ κ')}
</svg>`

/* 5 — The time constant: charging and discharging through R (lead, 1000×460). Illustrative curves, τ = 60 units. */
const TAU = 60
const curve = (x0: number, y0: number, top: number, rising: boolean, xEnd: number) => {
  const pts: [number, number][] = []
  for (let x = x0; x <= xEnd; x += 5) {
    const f = Math.exp(-(x - x0) / TAU)
    pts.push([x, y0 - (y0 - top) * (rising ? 1 - f : f)])
  }
  return PATH(pts)
}
const axes = (x0: number, id: string) => `<g class="fig-muted"><defs>${ARROW(id)}</defs>
${ARR(x0, 370, x0 + 385, 370, id, 2)}${ARR(x0, 370, x0, 84, id, 2)}
${LINE(x0, 110, x0 + 370, 110, 1.5, true)}
${LINE(x0 + 5 * TAU, 370, x0 + 5 * TAU, 116, 1.2, true)}
</g>
${T(x0 + TAU, 394, 17, 'τ', 'middle', '700')}${T(x0 + 5 * TAU, 394, 17, '5τ', 'middle', '700')}
${T(x0 + 380, 394, 15, 'time t', 'end')}`
const y63 = 370 - 0.632 * 260
const y37 = 370 - 0.368 * 260
const tauSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(530, 24, 530, 404, 1.5)}</g>
${T(285, 44, 20, 'charging through R (illustrative)', 'middle', '700')}
${axes(90, 'arr-ec-tau-m')}
<g class="fig-muted">${LINE(90, y63, 150, y63, 1.5, true)}${LINE(150, y63, 150, 370, 1.5, true)}${T(84, y63 + 5, 15, '63%', 'end')}</g>
<g class="fig-accent-2">
<path d="${curve(90, 370, 110, true, 460)}" fill="none" stroke="currentColor" stroke-width="4"/>
${T(205, 182, 16, `Q and ${SUB('V', 'C', 16)}rise`, 'start', '700')}
${T(460, 100, 15, `${SUB('Q', 'max', 15)}= Cε`, 'end', '700')}
</g>
<g class="fig-accent">
<path d="${curve(90, 370, 110, false, 460)}" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6"/>
${T(82, 116, 15, 'ε/R', 'end', '700')}
${T(196, 314, 16, 'current I decays', 'start', '700')}
</g>
<g class="fig-muted">${T(382, 146, 15, '≈ full by 5τ', 'end')}</g>
${T(765, 44, 20, 'discharging through R (illustrative)', 'middle', '700')}
${axes(580, 'arr-ec-tau-m2')}
<g class="fig-muted">${LINE(580, y37, 640, y37, 1.5, true)}${LINE(640, y37, 640, 370, 1.5, true)}${T(574, y37 + 5, 15, '37%', 'end')}</g>
<g class="fig-accent-2">
<path d="${curve(580, 370, 110, false, 950)}" fill="none" stroke="currentColor" stroke-width="4"/>
${T(572, 116, 15, 'Q₀', 'end', '700')}
${T(700, 220, 16, 'Q, V and I all decay', 'start', '700')}
</g>
<g class="fig-muted">${T(872, 346, 15, '&lt; 1% left by 5τ', 'end')}</g>
${T(500, 438, 16, 'τ = RC: bigger R or bigger C → slower; the battery voltage sets the final charge, not τ', 'middle')}
</svg>`

/* 6 — Myelin: unmyelinated vs myelinated axon, saltatory conduction (lead, 1000×460) */
const wrap = (x1: number, x2: number) =>
  `<rect x="${x1}" y="266" width="${x2 - x1}" height="32" rx="14" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/><rect x="${x1}" y="342" width="${x2 - x1}" height="32" rx="14" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>`
const myelinSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(60, 50, 19, 'unmyelinated axon', 'start', '700')}
${LINE(60, 100, 740, 100)}${LINE(60, 140, 740, 140)}
<g class="fig-accent">
<defs>${ARROW('arr-ec-my-b')}</defs>
${ARR(80, 120, 724, 120, 'arr-ec-my-b', 3)}
${[130, 210, 290, 370, 450, 530, 610, 690].map((x) => `${ARR(x, 97, x, 72, 'arr-ec-my-b', 2.2)}${ARR(x, 143, x, 168, 'arr-ec-my-b', 2.2)}`).join('')}
</g>
${T(770, 102, 16, 'current leaks out')}
${T(770, 124, 16, 'all along the membrane')}
<g class="fig-accent-2">${T(770, 152, 17, 'slow', 'start', '700')}</g>
${T(60, 222, 19, 'myelinated axon', 'start', '700')}
<g class="fig-muted">${wrap(90, 250)}${wrap(280, 440)}${wrap(470, 630)}${wrap(660, 740)}</g>
${LINE(60, 300, 740, 300)}${LINE(60, 340, 740, 340)}
<g class="fig-accent">
<defs>${ARROW('arr-ec-my-b2')}</defs>
${ARR(80, 320, 724, 320, 'arr-ec-my-b2', 3)}
${[265, 455, 645].map((x) => `${ARR(x, 298, x, 274, 'arr-ec-my-b2', 2.2)}${ARR(x, 342, x, 366, 'arr-ec-my-b2', 2.2)}`).join('')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-ec-my-r')}</defs>
<path d="M270 258 Q 360 186 450 258" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-ec-my-r)"/>
<path d="M460 258 Q 550 186 640 258" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-ec-my-r)"/>
${T(455, 196, 16, 'action potential regenerated only at nodes', 'middle', '700')}
</g>
<g class="fig-muted">
${LINE(455, 378, 455, 398, 1.5)}${LINE(170, 378, 170, 398, 1.5)}
</g>
${T(455, 420, 16, 'node of Ranvier', 'middle')}
${T(170, 420, 16, 'myelin: glial wraps', 'middle')}
${T(770, 292, 20, 'Cₘ down, Rₘ up', 'start', '700')}
${T(770, 320, 16, 'wraps = membranes in')}
${T(770, 342, 16, 'series: wider gap, less leak')}
${T(770, 376, 16, 'jumps node to node:')}
${T(770, 398, 16, 'fast and energy-efficient')}
</svg>`

/* 7 — Defibrillator: slow charge, store ½CV², fast discharge; power–time sketch (lead, 1000×460) */
const defibSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(335, 26, 335, 250, 1.5)}${LINE(665, 26, 665, 250, 1.5)}</g>
${T(180, 46, 19, '1 · charge slowly', 'middle', '700')}
<g class="fig-muted">${T(180, 70, 15, 'several seconds, modest power', 'middle')}</g>
${WIRE_BAT(70, 110, 220, 165)}
${T(52, 171, 17, 'ε', 'end', '700')}
${LINE(70, 110, 110, 110)}${BOX(110, 92, 100, 36, 8, 2)}${T(160, 116, 15, 'circuitry', 'middle')}${LINE(210, 110, 280, 110)}
${LINE(280, 110, 280, 160)}${CAPV(280, 165)}${LINE(280, 170, 280, 220)}${LINE(70, 220, 280, 220)}
${T(300, 160, 15, '+Q', 'start', '700')}${T(300, 186, 15, '−Q', 'start', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-ec-df-b')}</defs>
${ARR(222, 110, 262, 110, 'arr-ec-df-b', 2.5)}
</g>
<g class="fig-muted">${T(180, 246, 15, 'small current, battery → capacitor', 'middle')}</g>
${T(500, 46, 19, '2 · store', 'middle', '700')}
<g class="fig-muted">${T(500, 70, 15, 'C is fixed: the setting picks V', 'middle')}</g>
${LINE(430, 136, 570, 136, 5)}${LINE(430, 176, 570, 176, 5)}
${T(500, 124, 18, '+ + + + + +', 'middle', '700')}
${T(500, 202, 18, '− − − − − −', 'middle', '700')}
${T(500, 238, 22, 'U = ½CV²', 'middle', '700')}
${T(825, 46, 19, '3 · discharge fast', 'middle', '700')}
<g class="fig-muted">${T(825, 70, 15, 'a few milliseconds: τ = RC', 'middle')}</g>
${LINE(720, 110, 720, 160)}${CAPV(720, 165)}${LINE(720, 170, 720, 220)}
${LINE(720, 110, 900, 110)}${LINE(720, 220, 900, 220)}${RES(900, 110, 900, 220)}
${T(914, 160, 16, 'chest', 'start', '700')}${T(914, 182, 16, 'R', 'start', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-ec-df-b2')}</defs>
${ARR(750, 110, 870, 110, 'arr-ec-df-b2', 4.5)}
${T(810, 152, 16, 'big, brief I', 'middle', '700')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-ec-df-m')}</defs>
${ARR(110, 410, 940, 410, 'arr-ec-df-m', 2)}${ARR(110, 410, 110, 278, 'arr-ec-df-m', 2)}
</g>
<text x="92" y="350" font-size="16" text-anchor="middle" fill="currentColor" transform="rotate(-90 92 350)">power</text>
${T(936, 434, 15, 'time', 'end')}
<g class="fig-accent">
<rect x="130" y="392" width="490" height="18" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
${T(375, 382, 15, 'charging: low power for seconds', 'middle', '700')}
</g>
<g class="fig-accent-2">
<path d="M680 410 L680 290 ${PATH(Array.from({ length: 17 }, (_, k) => [680 + 5 * k, 410 - 120 * Math.exp(-(5 * k) / 16)] as [number, number])).replace(/^M/, 'L')} L760 410 Z" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
${T(712, 306, 15, 'discharge: the same energy', 'start')}
${T(712, 328, 15, 'in milliseconds →', 'start')}
${T(712, 350, 15, 'hundreds of times the power', 'start', '700')}
</g>
</svg>`

/* 8 — The steady-state worked example at t = 0 and long after (after, 1000×460). Lesson numbers. */
const network = (x0: number, steady: boolean) => {
  const b = x0 + 60, r2 = x0 + 230, br = x0 + 350
  const parts = [
    WIRE_BAT(b, 100, 300, 200),
    T(b - 18, 206, 16, '12 V', 'end', '700'),
    LINE(b, 100, x0 + 100, 100), RES(x0 + 100, 100, x0 + 180, 100), LINE(x0 + 180, 100, br, 100),
    T(x0 + 140, 80, 16, 'R₁ 2.0 Ω', 'middle', '700'),
    RES(r2, 100, r2, 300),
    T(r2 - 16, 196, 16, 'R₂', 'end', '700'), T(r2 - 16, 216, 15, '4.0 Ω', 'end'),
    RES(br, 100, br, 190), LINE(br, 190, br, 240), CAPV(br, 245), LINE(br, 250, br, 300),
    T(br + 16, 140, 16, 'R₃', 'start', '700'), T(br + 16, 160, 15, '4.0 Ω'),
    T(br + 22, 242, 16, 'C', 'start', '700'), T(br + 22, 262, 15, '5.0 μF'),
    LINE(b, 300, br, 300),
    `<circle cx="${r2}" cy="100" r="5" fill="currentColor"/><circle cx="${r2}" cy="300" r="5" fill="currentColor"/>`,
  ]
  const id = steady ? 'arr-ec-ss-b2' : 'arr-ec-ss-b'
  const blue = steady
    ? `<g class="fig-accent"><defs>${ARROW(id)}</defs>${ARR(b, 180, b, 122, id, 3)}${T(b + 12, 150, 16, '2.0 A', 'start', '700')}${ARR(r2, 110, r2, 160, id, 3)}${T(r2 - 12, 145, 16, '2.0 A', 'end', '700')}</g>`
    : `<g class="fig-accent"><defs>${ARROW(id)}</defs>${ARR(b, 180, b, 122, id, 3)}${T(b + 12, 150, 16, '3.0 A', 'start', '700')}${ARR(r2, 110, r2, 160, id, 3)}${T(r2 - 12, 145, 16, '1.5 A', 'end', '700')}${ARR(br, 194, br, 234, id, 3)}${T(br - 12, 222, 16, '1.5 A', 'end', '700')}</g>`
  const extra = steady
    ? `<g class="fig-muted">${T(br - 12, 222, 15, 'I = 0', 'end', '700')}${T(br + 16, 180, 15, '(drops 0 V)')}</g><g class="fig-accent-2">${T(r2 - 16, 240, 16, '8.0 V', 'end', '700')}${T(br + 22, 288, 16, `${SUB('V', 'C', 16)}= 8.0 V`, 'start', '700')}</g>`
    : `<g class="fig-muted">${T(br + 22, 288, 15, 'empty: a wire')}</g>`
  return parts.join('') + blue + extra
}
const ssSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(500, 24, 500, 440, 1.5)}</g>
${T(255, 44, 20, 't = 0: the empty capacitor acts like a wire', 'middle', '700')}
${network(20, false)}
${T(255, 346, 17, 'R₂ in parallel with R₃ = 2.0 Ω → total 4.0 Ω', 'middle', '700')}
${T(255, 374, 16, 'I₀ = 12 / 4.0 = 3.0 A, split 1.5 A + 1.5 A', 'middle')}
<g class="fig-muted">${T(255, 402, 15, `${SUB('V', 'C', 15)}= 0 at first: it cannot jump`, 'middle')}</g>
${T(745, 44, 20, 'steady state: the capacitor branch is open', 'middle', '700')}
${network(510, true)}
${T(745, 346, 17, 'I = 12 / (2.0 + 4.0) = 2.0 A', 'middle', '700')}
<g class="fig-accent-2">${T(745, 374, 16, `V₂ = (2.0)(4.0) = 8.0 V = ${SUB('V', 'C', 16)}`, 'middle', '700')}</g>
${T(745, 402, 16, 'Q = (5.0 μF)(8.0 V) = 40 μC', 'middle')}
</svg>`

export const mcatEmfCapacitorsExtraFigures: DeckFigurePlacement[] = [
  {
    at: 'Batteries in Series and Parallel',
    mode: 'lead',
    figure: {
      svg: cellsSvg,
      alt:
        'Left, series: four cells in a row, each joined positive terminal to the next cell’s negative terminal, each labelled 1.5 V, with a minus terminal at the left end and a plus terminal at the right. Above them a red staircase shows the potential rising +1.5 V at each cell to 6.0 V at the right end: ε = 1.5 + 1.5 + 1.5 + 1.5 = 6.0 V, and the internal resistances add too (4r), so the stack sags more per amp. Right, parallel: two identical 1.5 V cells side by side between a top (+) rail and a bottom (−) rail; a blue current I/2 leaves each cell and the two join into I on the output wire, and the voltage across the output terminals is still 1.5 V, the same as one cell. The internal resistances are in parallel, giving r/2, so the pack sags less under load, and with more total charge it lasts longer.',
      caption: 'Cells in series stack their EMFs (four 1.5 V cells make 6.0 V); identical cells in parallel keep 1.5 V but share the current.',
    },
    blocks: [
      '- **Series:** EMFs add ($4 \\times 1.5 = 6.0$ V) and so do internal resistances; a reversed cell subtracts',
      '- **Parallel (identical cells):** same EMF, internal $r/2$: less sag, longer life — more current capacity',
    ],
  },
  {
    at: 'The Parallel-Plate Capacitor',
    mode: 'lead',
    figure: {
      svg: ppSvg,
      alt:
        'Left: two flat plates drawn in perspective, each of area A, a distance d apart (a dimension line marks d). The left plate carries +Q (a column of plus signs) and the right plate −Q (minus signs). Five evenly spaced, parallel blue arrows labelled E run straight from the + plate to the − plate: the field E = V/d is uniform between the plates, points from + to −, and is about zero outside. Right: the formula C = κε₀A/d. Below it two small comparisons: a short pair of plates turning into a pair twice as tall, labelled A × 2 → 2C (bigger plates, more charge per volt); and a close pair of plates turning into a pair twice as far apart, labelled d × 2 → C/2 (plates farther apart, less charge per volt). A footnote says a dielectric κ in the gap multiplies C by κ.',
      caption: 'A parallel-plate capacitor: uniform field E = V/d between the plates, and C = κε₀A/d grows with area and shrinks with the gap.',
    },
    blocks: [
      '- $C = \\kappa\\varepsilon_0 A/d$: double $A$ → $2C$, double $d$ → $C/2$, fill with $\\kappa$ → $\\kappa C$',
      '- Between the plates the field is uniform, $E = V/d$, pointing from $+$ to $-$ (≈ 0 outside)',
    ],
  },
  {
    at: 'Dielectrics',
    mode: 'lead',
    figure: {
      svg: dielSvg,
      alt:
        'Two copies of the same capacitor with the same charge, +Q on the left plate and −Q on the right. Left, air gap: many blue field lines E₀ cross from the + plate to the − plate (charge ±Q, voltage V₀, capacitance C₀). Right, a dielectric slab of constant κ fills the gap: its molecules are drawn as small ovals, each with its minus end toward the + plate and its plus end toward the − plate, and a red layer of minus signs lines the slab face next to the + plate while a red layer of plus signs lines the face next to the − plate. Only three blue field lines now cross the gap. Below, a vector sum: a long blue arrow for the plates’ field E₀ pointing right, a red arrow for the induced field pointing left (it opposes), and a short blue arrow for the net field E = E₀/κ. Bottom line: with the same Q, E and V fall by κ, so C = κC₀ (κ ≥ 1).',
      caption: 'The dielectric’s polarized molecules set up an opposing field, so for the same Q the field and voltage drop by κ and C rises by κ.',
    },
    blocks: [
      '- Molecules polarize: $-$ faces the $+$ plate, $+$ faces the $-$ plate; the induced field partly cancels $E_0$',
      '- Same $Q$ → $E$ and $V$ fall by $\\kappa$ → $C = \\kappa C_0$; too strong a field → breakdown (spark)',
    ],
  },
  {
    at: 'Stored Energy',
    mode: 'lead',
    figure: {
      svg: energySvg,
      alt:
        'Two panels, each showing a capacitor with a dielectric slab κ being pushed up into its gap. Left, battery connected (V fixed): the plates are wired to a battery, so use U = ½CV² and U ∝ C. Rows: capacitance C up, × κ; charge Q up, × κ (the battery adds charge); voltage V unchanged; field E unchanged (V/d fixed); energy U up, × κ. Right, disconnected (Q fixed): the plates’ leads end in open terminals, so the charge has nowhere to go; use U = Q²/2C and U ∝ 1/C. Rows: capacitance C up, × κ; charge Q unchanged; voltage V down, ÷ κ; field E down, ÷ κ; energy U down, ÷ κ. Increases are blue up arrows, decreases red down arrows, unchanged grey equals signs.',
      caption: 'Insert a dielectric: with the battery connected V stays fixed and Q and U rise by κ; disconnected, Q stays fixed and V, E and U fall by κ.',
    },
    blocks: [
      '- $U = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = Q^2/2C$: pick the form whose variables the setup holds fixed',
      '- Connected ($V$ fixed): $Q$, $U$ rise by $\\kappa$ · disconnected ($Q$ fixed): $V$, $E$, $U$ fall by $\\kappa$',
    ],
  },
  {
    at: 'The Time Constant',
    mode: 'lead',
    figure: {
      svg: tauSvg,
      alt:
        'Two illustrative graphs against time t, with tick marks at τ and 5τ. Left, charging through R: a red curve for the charge Q and capacitor voltage V_C rises steeply from zero, then levels off toward Q_max = Cε; dashed guides show it reaching 63% at t = τ, and it is about full by 5τ. A blue dashed curve for the current I starts at its maximum ε/R at t = 0 and decays toward zero. Right, discharging through R: a red curve starts at Q₀ and falls fast, then ever more slowly; guides show 37% left at t = τ and less than 1% left by 5τ; the label says Q, V and I all decay. Bottom line: τ = RC, so a bigger R or a bigger C slows things down; the battery voltage sets the final charge, not τ.',
      caption: 'RC charging reaches about 63% at one τ and is essentially full by 5τ; discharging leaves about 37% at τ (illustrative curves).',
    },
    blocks: [
      '- $\\tau = RC$: charging is about 63% done at $1\\tau$, discharging leaves about 37%; ≈ complete by $5\\tau$',
      '- Charging current starts at $\\varepsilon/R$ and decays; the battery voltage sets the final charge, not $\\tau$',
    ],
  },
  {
    at: 'Myelin and Conduction Speed',
    mode: 'lead',
    figure: {
      svg: myelinSvg,
      alt:
        'Top, an unmyelinated axon drawn as a long tube: a blue arrow runs along the inside, and small blue arrows leak out through the membrane all along its length; the label says current leaks out all along the membrane, so conduction is slow. Bottom, a myelinated axon: thick grey myelin wraps (glial wraps) cover the tube except at short gaps, the nodes of Ranvier. The blue internal current runs down the axon, and small leak arrows appear only at the nodes. Red arcs jump from node to node, labelled action potential regenerated only at nodes. Side labels: Cₘ down, Rₘ up — the wraps are membranes in series, like a wider gap with less leak; the signal jumps node to node, fast and energy-efficient.',
      caption: 'Myelin stacks membranes in series (Cₘ down, Rₘ up), so current reaches the next node and the action potential jumps node to node.',
    },
    blocks: [
      '- Myelin = membranes in series: $C_m$ down (wider gap), $R_m$ up (less leak) → current travels farther, faster',
      '- The action potential regenerates only at the nodes of Ranvier: saltatory conduction, fast and efficient',
    ],
  },
  {
    at: 'Defibrillators and Capacitor Discharge',
    mode: 'lead',
    figure: {
      svg: defibSvg,
      alt:
        'Three stages across the top. Stage 1, charge slowly (several seconds, modest power): a battery ε feeds charging circuitry that sends a small blue current onto a capacitor, which gains +Q and −Q. Stage 2, store: a capacitor with a row of plus charges on one plate and minus charges on the other holds U = ½CV²; C is fixed, so the energy setting picks V. Stage 3, discharge fast (a few milliseconds, τ = RC): the capacitor connects across the chest, drawn as a resistor R, and a thick blue arrow shows a big, brief current. Below, an illustrative power-against-time sketch, not to scale: a long, low blue band for charging (low power for seconds) and a tall, narrow red spike that decays quickly for the discharge — the same energy delivered in milliseconds, hundreds of times the power.',
      caption: 'A defibrillator fills a capacitor slowly, then empties it in milliseconds: same energy, far more power (power sketch illustrative, not to scale).',
    },
    blocks: [
      '- Charge slowly (seconds) → store $U = \\frac{1}{2}CV^2$ → discharge through the chest in ms, $\\tau = RC$',
      '- Same energy in a far shorter time = far higher power: the capacitor is a time compressor',
    ],
  },
  {
    at: 'Worked Example — Steady-State Voltage',
    mode: 'after',
    figure: {
      svg: ssSvg,
      alt:
        'The worked example’s circuit drawn twice. A 12 V battery drives R₁ = 2.0 Ω on the top wire, then R₂ = 4.0 Ω from the top wire to the bottom wire; a side branch across R₂ holds R₃ = 4.0 Ω in series with a 5.0 μF capacitor C. Left, at t = 0: the empty capacitor acts like a wire. Blue arrows show 3.0 A leaving the battery, 1.5 A going down through R₂ and 1.5 A going down the capacitor branch. R₂ ∥ R₃ = 2.0 Ω, total 4.0 Ω, so I₀ = 12/4.0 = 3.0 A, split 1.5 A + 1.5 A; V_C = 0 at first because it cannot jump. Right, steady state: the capacitor branch is open, marked I = 0, and R₃ drops 0 V. Blue arrows show 2.0 A from the battery and 2.0 A through R₂. In red, R₂ has 8.0 V across it and the capacitor sits at V_C = 8.0 V. I = 12/(2.0 + 4.0) = 2.0 A; V₂ = (2.0)(4.0) = 8.0 V = V_C; Q = (5.0 μF)(8.0 V) = 40 μC.',
      caption: 'The worked example at t = 0 (capacitor = wire, 3.0 A splits 1.5 A + 1.5 A) and at steady state (branch open, 2.0 A, V_C = 8.0 V).',
    },
    blocks: [
      '- $t = 0$: the empty capacitor is a wire, so $R_2 \\parallel R_3 = 2.0\\;\\Omega$ and $I_0 = 12/4.0 = 3.0$ A',
      '- Steady state: branch open, $I = 2.0$ A, $V_C = V_2 = 8.0$ V ($R_3$ drops 0), $Q = 40\\;\\mu$C',
    ],
  },
]
