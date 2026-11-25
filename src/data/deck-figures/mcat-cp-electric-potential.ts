import type { DeckFigurePlacement } from './index'
import { SVG_OPEN, ARROW, T, BOX, ARR, LINE, DIM, CHARGE, RADIAL, G, CIRC, PATH, TAG } from './mcat-cp-electrostatics'

/**
 * Electrostatics Part 3: Electric Potential & Energy (MCAT C/P) — figures for
 * the in-class deck. The potential hill, the midpoint pair and the membrane
 * were drawn 2026-10-29 for the old one-topic Electrostatics deck and re-homed
 * here 2026-11-25 (symbols and numbers updated to the new lesson); the rest
 * were drawn 2026-11-25. Helpers and colour rules are in
 * mcat-cp-electrostatics.ts (red +, blue −, field lines in the text colour,
 * equipotentials and guides grey).
 *
 * Every drawing is ours, drawn from the concept — no textbook, prep-company or
 * AAMC figure was copied. Curves and positions are COMPUTED in code: the ±1/r
 * energy curves, U = 0.072/r with its two marked points, the 3-4-5 layout of
 * the two-charge example, equipotential circles at equal steps of V (r ∝ 1/V),
 * the plates' equipotential planes at 4.5, 3.0 and 1.5 V, and U = 360 eV ×
 * r_min/r for the closest approach.
 *
 * The only numbers drawn are the lesson's own: +2.0 and +4.0 μC → 0.072 J·m,
 * 0.12 J at 0.60 m, 0.36 J at 0.20 m, ±0.24 J; +6.0 and −4.0 nC with P at
 * 0.60 m and 1.0 m → +90 V, −36 V, 54 V, 1.1 × 10⁻⁴ J, −8.6 × 10⁻¹⁸ J; 6.0 V
 * across 2.0 mm → 3.0 × 10³ V/m, 1.5 V at 0.50 mm; 1836 and 43; −70 mV across
 * 7.0 nm → 1.0 × 10⁷ V/m, −0.070 eV for Na⁺; 360 eV = 5.76 × 10⁻¹⁷ J, +5e,
 * 2.0 × 10⁻¹¹ m, 180 eV at 4.0 × 10⁻¹¹ m. Marker ids: arr-ep-<figure>-<colour>.
 */

/* 3 — Potential as a hill: E downhill, + falls, − climbs, both lower U = qV (replace-table, 560×440) */
const potentialSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ep-pot')}</defs>
${T(280, 28, 17, 'potential as a hill — E points downhill', 'middle', '700')}
<g class="fig-muted"><polygon points="60,120 500,300 500,330 60,330" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/></g>
${LINE(60, 120, 500, 300, 3)}
${T(62, 106, 16, 'high V', 'start', '700')}
${T(506, 312, 15, 'low V', 'start', '700')}
${ARR(221, 126, 351, 179, 'arr-ep-pot', 3.5)}
${T(296, 146, 16, 'E (downhill in V)', 'start', '700')}
${CHARGE(158, 142, 16, '+')}
<g class="fig-accent-2">
<defs>${ARROW('arr-ep-pot-r')}</defs>
${ARR(175, 149, 233, 173, 'arr-ep-pot-r', 3.5)}
${T(150, 352, 16, '+q falls to low V', 'middle', '700')}
</g>
${CHARGE(388, 237, 16, '−')}
<g class="fig-accent">
<defs>${ARROW('arr-ep-pot-b')}</defs>
${ARR(371, 230, 313, 206, 'arr-ep-pot-b', 3.5)}
${T(405, 352, 16, '−q climbs to high V', 'middle', '700')}
</g>
${T(280, 380, 17, 'both moves lower U = qV', 'middle', '700')}
${T(280, 408, 15, 'E: vector at a point (N/C) · V: scalar at a point (volts)', 'middle')}
${T(280, 432, 15, 'U = qV: joules — belongs to the charge AT that point', 'middle')}
</svg>`

/* 4 — E = 0 and V = 0 are independent: the midpoint of +q +q and of +q −q (after, 1000×460) */
const midpointSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ep-mid')}</defs>
<g class="fig-muted">${LINE(500, 30, 500, 440, 1.5)}</g>
${T(250, 40, 22, 'midpoint between +q and +q', 'middle', '700')}
${CHARGE(100, 200, 22, '+', '+q')}${CHARGE(400, 200, 22, '+', '+q')}
<circle cx="250" cy="200" r="5" fill="currentColor"/>
${ARR(252, 188, 330, 188, 'arr-ep-mid', 3.5)}${T(292, 166, 16, 'E from the left +q', 'middle')}
${ARR(248, 212, 170, 212, 'arr-ep-mid', 3.5)}${T(208, 244, 16, 'E from the right +q', 'middle')}
<g class="fig-muted">${DIM(122, 245, 270)}${T(184, 292, 16, 'r', 'middle')}${DIM(255, 378, 270)}${T(316, 292, 16, 'r', 'middle')}</g>
${T(250, 335, 19, 'E = 0 — the two fields cancel', 'middle', '700')}
${T(250, 365, 18, 'V = kq/r + kq/r = 2kq/r', 'middle')}
<g class="fig-muted">${T(250, 398, 15, 'no force on a charge put there, but it still has U = qV', 'middle')}</g>
${T(250, 428, 16, 'scalars add; vectors can cancel', 'middle')}
${T(750, 40, 22, 'midpoint between +q and −q', 'middle', '700')}
${CHARGE(600, 200, 22, '+', '+q')}${CHARGE(900, 200, 22, '−', '−q')}
<circle cx="750" cy="200" r="5" fill="currentColor"/>
${ARR(752, 188, 830, 188, 'arr-ep-mid', 3.5)}${T(792, 166, 16, 'E from +q (away)', 'middle')}
${ARR(752, 212, 830, 212, 'arr-ep-mid', 3.5)}${T(792, 244, 16, 'E from −q (toward)', 'middle')}
<g class="fig-muted">${DIM(622, 745, 270)}${T(684, 292, 16, 'r', 'middle')}${DIM(755, 878, 270)}${T(816, 292, 16, 'r', 'middle')}</g>
${T(750, 335, 19, 'E = 2kq/r², toward −q — the two add', 'middle', '700')}
${T(750, 365, 18, 'V = kq/r − kq/r = 0', 'middle')}
${T(750, 398, 16, 'E = 0 and V = 0 are independent facts', 'middle', '700')}
<g class="fig-muted">${T(750, 428, 15, 'never assume one is zero because the other is', 'middle')}</g>
</svg>`

/* 9 — The membrane as a parallel-plate capacitor (lead, 1000×460) */
const plusRow = [90, 140, 190, 240, 290, 440, 490, 540]
const membraneSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ep-mem')}</defs>
<g class="fig-muted">
<rect x="60" y="190" width="285" height="80" rx="4" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<rect x="385" y="190" width="215" height="80" rx="4" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<path d="M618 190 L630 190 M624 190 L624 270 M618 270 L630 270" fill="none" stroke="currentColor" stroke-width="2"/>
${T(624, 180, 16, 'd ≈ 7.0 nm', 'middle')}
</g>
<rect x="345" y="190" width="8" height="80" fill="currentColor" fill-opacity="0.5"/>
<rect x="377" y="190" width="8" height="80" fill="currentColor" fill-opacity="0.5"/>
<g class="fig-accent-2">${plusRow.map((x) => T(x, 181, 22, '+', 'middle', '700')).join('')}</g>
<g class="fig-accent">${plusRow.map((x) => T(x, 300, 24, '−', 'middle', '700')).join('')}</g>
${T(90, 237, 17, 'lipid bilayer (insulator)', 'start', '700')}
${ARR(440, 198, 440, 262, 'arr-ep-mem', 3)}${ARR(500, 198, 500, 262, 'arr-ep-mem', 3)}${ARR(560, 198, 560, 262, 'arr-ep-mem', 3)}
${T(578, 241, 18, 'E', 'start', '700')}
${T(340, 145, 20, 'outside: 0 mV — conducting fluid', 'middle')}
${T(340, 352, 20, 'inside: −70 mV — conducting fluid', 'middle')}
${CHARGE(365, 205, 14, '+')}
<g class="fig-accent-2">
<defs>${ARROW('arr-ep-mem-r')}</defs>
${ARR(365, 222, 365, 296, 'arr-ep-mem-r', 3.5)}
${T(384, 318, 16, 'Na⁺ in an open channel: pushed inward', 'start', '700')}
</g>
${T(700, 110, 22, 'charged plates in the cell', 'start', '700')}
${T(700, 150, 15, 'positive charge lines the outer face')}
${T(700, 178, 15, 'negative charge lines the inner face')}
${T(700, 220, 20, 'E = V/d', 'start', '700')}
${T(700, 250, 17, '0.070 V / (7.0 × 10⁻⁹ m)')}
${T(700, 282, 20, '= 1.0 × 10⁷ V/m', 'start', '700')}
${T(700, 318, 16, 'tiny voltage, tiny gap: giant field')}
<g class="fig-accent-2">${T(700, 358, 17, 'Na⁺ entering: ΔU = q ΔV', 'start', '700')}${T(700, 384, 17, '= (+e)(−0.070 V) = −0.070 eV', 'start', '700')}</g>
<g class="fig-muted">${T(700, 416, 15, 'ΔU < 0: the field pushes it that way')}</g>
</svg>`

/* 1 — Electric potential energy of a pair: U = ±k|q₁q₂|/r curves, computed (lead, 1000×460) */
const U_AMP = 7200
const uCurve = (sign: 1 | -1) => Array.from({ length: 35 }, (_, i) => { const r = 40 + 10 * i; return `${i ? 'L' : 'M'}${90 + r} ${(250 - (sign * U_AMP) / r).toFixed(1)}` }).join(' ')
const uPoint = (r: number, sign: 1 | -1): [number, number] => [90 + r, +(250 - (sign * U_AMP) / r).toFixed(1)]
const energySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ep-en')}</defs>
${G('muted', LINE(520, 30, 520, 440, 1.5))}
${T(280, 44, 22, 'the energy of a pair of charges', 'middle', '700')}
${ARR(90, 440, 90, 66, 'arr-ep-en', 2)}${ARR(90, 250, 488, 250, 'arr-ep-en', 2)}
${T(78, 80, 18, 'U', 'end', '700')}${T(78, 256, 16, '0', 'end')}${T(496, 256, 18, 'r', 'start', '700')}
<g class="fig-accent-2"><defs>${ARROW('arr-ep-en-r')}</defs>${PATH(uCurve(1), 3.5)}
<circle cx="${uPoint(80, 1)[0]}" cy="${uPoint(80, 1)[1]}" r="7" fill="currentColor"/>${ARR(uPoint(80, 1)[0] + 12, uPoint(80, 1)[1] - 10, uPoint(150, 1)[0] + 12, uPoint(150, 1)[1] - 10, 'arr-ep-en-r', 3)}
${T(270, 150, 17, 'like charges: U > 0', 'start', '700')}${T(270, 174, 15, 'released, they fly apart', 'start')}</g>
<g class="fig-accent"><defs>${ARROW('arr-ep-en-b')}</defs>${PATH(uCurve(-1), 3.5)}
<circle cx="${uPoint(170, -1)[0]}" cy="${uPoint(170, -1)[1]}" r="7" fill="currentColor"/>${ARR(uPoint(170, -1)[0] + 6, uPoint(170, -1)[1] + 16, uPoint(100, -1)[0] + 14, uPoint(100, -1)[1] + 12, 'arr-ep-en-b', 3)}
${T(270, 350, 17, 'unlike charges: U < 0', 'start', '700')}${T(270, 374, 15, 'released, they come together', 'start')}</g>
${G('muted', T(488, 212, 15, 'U → 0 when far apart', 'end'))}
${T(760, 44, 22, 'U = k q₁q₂ / r, signs IN', 'middle', '700')}
${G('accent-2', T(545, 108, 17, 'like (+ + or − −): U > 0', 'start', '700'))}
${T(545, 134, 16, 'work was done to push them together')}
${G('accent', T(545, 182, 17, 'unlike (+ −): U < 0', 'start', '700'))}
${T(545, 208, 16, 'bound: energy must be added to separate them')}
${T(545, 262, 18, 'left alone, a system moves to LOWER U', 'start', '700')}
${T(545, 312, 16, 'a scalar, in joules, that belongs to the PAIR')}
${T(545, 340, 16, '1/r: halve r and U doubles (the force × 4)')}
${G('muted', `${T(545, 384, 15, 'the field does −ΔU;')}${T(545, 406, 15, 'moving a charge slowly, you do +ΔU')}`)}
</svg>`

/* 2 — Four formulas on one grid: pair vs per-charge, 1/r² vs 1/r (lead, 1000×460) */
const cell = (x: number, y: number, formula: string, desc: string, kind: string) =>
  `${BOX(x, y, 220, 136, 12, 2.5, 0.05)}${T(x + 110, y + 56, 24, formula, 'middle', '700')}${T(x + 110, y + 90, 16, desc, 'middle')}${G('muted', T(x + 110, y + 116, 15, kind, 'middle'))}`
const gridSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${G('muted', LINE(628, 30, 628, 440, 1.5))}
${T(210, 62, 17, 'pair: both charges', 'middle', '700')}
${T(490, 62, 17, 'per charge: source only', 'middle', '700')}
${T(50, 140, 20, '1/r²', 'middle', '700')}${T(50, 166, 15, 'force', 'middle')}
${T(50, 320, 20, '1/r', 'middle', '700')}${T(50, 346, 15, 'energy', 'middle')}
${cell(100, 80, 'F = k|q₁q₂| / r²', 'force between two charges', 'vector, newtons')}
${cell(380, 80, 'E = k|Q| / r²', 'field of one charge', 'vector, N/C')}
${cell(100, 262, 'U = kq₁q₂ / r', 'energy of the pair', 'scalar, joules')}
${cell(380, 262, 'V = kQ / r', 'potential of one charge', 'scalar, volts')}
<g class="fig-muted">
<defs>${ARROW('arr-ep-gr-m')}</defs>
${ARR(326, 148, 374, 148, 'arr-ep-gr-m', 2.5)}${T(350, 136, 15, '÷ q', 'middle')}
${ARR(326, 330, 374, 330, 'arr-ep-gr-m', 2.5)}${T(350, 318, 15, '÷ q', 'middle')}
${T(350, 432, 15, 'bridges: F = qE and U = qV · keep the signs in U and V, not in F and E', 'middle')}
</g>
${T(814, 62, 20, 'energy per charge', 'middle', '700')}
${T(648, 112, 19, 'V = U / q', 'start', '700')}
${T(648, 138, 16, 'in volts: 1 V = 1 J/C')}
${T(648, 162, 16, 'belongs to a POINT in space')}
${T(648, 212, 19, 'V = kq / r', 'start', '700')}
${T(648, 238, 16, 'positive near +, negative near −')}
${T(648, 262, 16, 'falls as 1/r, slower than E')}
${T(648, 312, 19, 'several charges', 'start', '700')}
${T(648, 338, 16, 'add signed numbers:')}
${T(648, 362, 16, 'no components, no angles')}
${G('muted', `${T(648, 404, 15, 'only differences ΔV matter;')}${T(648, 426, 15, 'where V = 0 is a choice')}`)}
</svg>`

/* 5 — Worked example: pushing two charges together, U = 0.072/r plotted (after, 1000×460) */
const XR = (r: number) => 110 + 500 * r
const YU = (u: number) => 400 - 800 * u
const KQQ = 9.0e9 * 2.0e-6 * 4.0e-6 // 0.072 J·m
const pushCurve = Array.from({ length: 68 }, (_, i) => { const r = 0.17 + 0.01 * i; return `${i ? 'L' : 'M'}${XR(r).toFixed(1)} ${YU(KQQ / r).toFixed(1)}` }).join(' ')
const pushSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ep-pu')}</defs>
${G('muted', LINE(590, 30, 590, 440, 1.5))}
${T(310, 40, 21, 'U = 0.072 J·m / r for this pair', 'middle', '700')}
${ARR(110, 400, 110, 62, 'arr-ep-pu', 2)}${ARR(110, 400, 560, 400, 'arr-ep-pu', 2)}
${T(96, 76, 18, 'U', 'end', '700')}${T(566, 406, 18, 'r', 'start', '700')}
${G('muted', `${LINE(XR(0.6), 400, XR(0.6), YU(KQQ / 0.6), 1.5, true)}${LINE(110, YU(KQQ / 0.6), XR(0.6), YU(KQQ / 0.6), 1.5, true)}${LINE(XR(0.2), 400, XR(0.2), YU(KQQ / 0.2), 1.5, true)}${LINE(110, YU(KQQ / 0.2), XR(0.2), YU(KQQ / 0.2), 1.5, true)}`)}
${T(XR(0.2), 424, 16, '0.20 m', 'middle')}${T(XR(0.6), 424, 16, '0.60 m', 'middle')}
${T(100, YU(KQQ / 0.2) + 6, 16, '0.36 J', 'end')}${T(100, YU(KQQ / 0.6) + 6, 16, '0.12 J', 'end')}
<g class="fig-accent-2"><defs>${ARROW('arr-ep-pu-r')}</defs>${PATH(pushCurve, 3.5)}
<circle cx="${XR(0.6)}" cy="${YU(KQQ / 0.6).toFixed(1)}" r="7" fill="currentColor"/><circle cx="${XR(0.2)}" cy="${YU(KQQ / 0.2).toFixed(1)}" r="7" fill="currentColor"/>
${ARR(XR(0.6) + 2, YU(KQQ / 0.6) - 22, XR(0.2) + 34, YU(KQQ / 0.2) + 8, 'arr-ep-pu-r', 3)}
${T(XR(0.6) + 14, YU(KQQ / 0.6) - 12, 16, 'start', 'start', '700')}${T(XR(0.2) + 14, YU(KQQ / 0.2) - 10, 16, 'pushed together', 'start', '700')}
${T(370, 190, 17, 'ΔU = +0.24 J', 'start', '700')}</g>
${T(775, 40, 21, 'who does the work?', 'middle', '700')}
${T(610, 100, 15, 'k q₁q₂ = (9.0 × 10⁹)(2.0 × 10⁻⁶)(4.0 × 10⁻⁶)')}
${T(610, 126, 17, '= 0.072 J·m', 'start', '700')}
${T(610, 174, 16, 'at 0.60 m: U = 0.12 J')}
${T(610, 200, 16, 'at 0.20 m: U = 0.36 J')}
${G('muted', T(610, 224, 15, 'a third of the distance, three times U'))}
${T(610, 272, 17, 'you do +0.24 J; the field does −0.24 J', 'start', '700')}
${T(610, 320, 16, 'released from 0.20 m, the full 0.36 J')}
${T(610, 344, 16, 'becomes kinetic energy, shared')}
${G('muted', T(610, 388, 15, 'the final U, not the 0.24 J change'))}
</svg>`

/* 6 — Worked example: potential at a point from two charges, a 3-4-5 layout (after, 1000×460) */
const PM = 350 // px per metre
const O_X = 110, O_Y = 360
const pointSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${G('muted', `${LINE(500, 30, 500, 440, 1.5)}${LINE(O_X, O_Y, O_X + 0.8 * PM, O_Y, 1.5)}${LINE(O_X, O_Y, O_X, O_Y - 0.6 * PM, 1.5)}${LINE(O_X + 0.8 * PM, O_Y, O_X, O_Y - 0.6 * PM, 1.5, true)}
${T(O_X - 12, O_Y - 0.3 * PM + 5, 15, '0.60 m', 'end')}${T(O_X + 0.4 * PM, O_Y + 24, 15, '0.80 m', 'middle')}${T(O_X + 0.4 * PM + 14, O_Y - 0.3 * PM - 8, 15, '1.0 m', 'start')}`)}
${T(250, 44, 22, 'two charges, one point', 'middle', '700')}
<circle class="fig-bg" cx="${O_X}" cy="${O_Y}" r="18" stroke="none"/><circle class="fig-bg" cx="${O_X + 0.8 * PM}" cy="${O_Y}" r="18" stroke="none"/>
${CHARGE(O_X, O_Y, 18, '+', '+6.0 nC')}${CHARGE(O_X + 0.8 * PM, O_Y, 18, '−', '−4.0 nC')}
<circle cx="${O_X}" cy="${O_Y - 0.6 * PM}" r="6" fill="currentColor"/>${T(O_X - 12, O_Y - 0.6 * PM + 6, 18, 'P', 'end', '700')}
${G('accent-2', T(O_X + 30, O_Y - 0.6 * PM - 50, 16, '+90 V from the + charge', 'start', '700'))}
${G('accent', T(O_X + 30, O_Y - 0.6 * PM - 28, 16, '−36 V from the − charge', 'start', '700'))}
${T(O_X + 30, O_Y - 0.6 * PM - 4, 17, 'total: V = 54 V', 'start', '700')}
${T(750, 44, 22, 'potentials add as numbers', 'middle', '700')}
${G('accent-2', T(525, 102, 16, 'V₁ = (9.0 × 10⁹)(6.0 × 10⁻⁹) / 0.60 = +90 V', 'start', '700'))}
${G('accent', T(525, 130, 16, 'V₂ = (9.0 × 10⁹)(−4.0 × 10⁻⁹) / 1.0 = −36 V', 'start', '700'))}
${T(525, 176, 18, 'V = 90 − 36 = 54 V', 'start', '700')}
${G('muted', T(525, 200, 15, 'no components, no angles: only each distance'))}
${T(525, 250, 16, 'bring a +2.0 μC charge in slowly from far away:')}
${T(525, 276, 17, 'W = qV = (2.0 × 10⁻⁶)(54) = 1.1 × 10⁻⁴ J', 'start', '700')}
${T(525, 326, 16, 'put an electron at P instead:')}
${T(525, 352, 17, 'U = qV = (−1.6 × 10⁻¹⁹)(54) = −8.6 × 10⁻¹⁸ J', 'start', '700')}
${G('muted', T(525, 396, 15, 'V > 0 at P, yet U < 0: V belongs to the point, U to the charge'))}
</svg>`

/* 7 — Equipotentials: circles at equal steps of V; planes between plates (lead, 1000×460) */
const EQ_R = [4, 3, 2, 1].map((n) => 150 / n) // V = kQ/r, so equal steps of V sit at r ∝ 1/V
const PL_L = 590, PL_R = 890
const planeX = (v: number) => PL_R - ((PL_R - PL_L) * v) / 6.0 // V falls evenly from 6.0 V to 0 across the gap
const equipSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ep-eq')}</defs>
${G('muted', `${LINE(500, 30, 500, 440, 1.5)}${EQ_R.map((r) => CIRC(245, 228, +r.toFixed(1), 2, 0, true)).join('')}`)}
${T(250, 44, 22, 'equipotentials ⊥ field lines', 'middle', '700')}
${RADIAL(245, 228, 26, 168, 8, 'arr-ep-eq', true)}
${CHARGE(245, 228, 20, '+')}
${TAG(245 + 62 * Math.cos(-Math.PI / 8), 228 + 62 * Math.sin(-Math.PI / 8) + 5, 15, 'high V', 52, '400')}
${TAG(245 + 122 * Math.cos(-Math.PI / 8), 228 + 122 * Math.sin(-Math.PI / 8) + 5, 15, 'low V', 46, '400')}
<g class="fig-accent"><defs>${ARROW('arr-ep-eq-b')}</defs>
${PATH(`M${(245 + 75 * Math.cos((100 * Math.PI) / 180)).toFixed(1)} ${(228 + 75 * Math.sin((100 * Math.PI) / 180)).toFixed(1)} A75 75 0 0 1 ${(245 + 75 * Math.cos((170 * Math.PI) / 180)).toFixed(1)} ${(228 + 75 * Math.sin((170 * Math.PI) / 180)).toFixed(1)}`, 4, false, 'arr-ep-eq-b')}
${TAG(200, 338, 16, 'W = 0', 56)}</g>
${T(250, 424, 16, 'equal steps of V: the circles spread out as E weakens', 'middle')}
${G('muted', T(250, 448, 15, 'moving a charge along one costs no work', 'middle'))}
${T(750, 44, 22, 'parallel plates: a uniform field', 'middle', '700')}
${G('accent-2', `<rect x="${PL_L - 14}" y="96" width="14" height="230" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>${T(PL_L - 7, 86, 16, '6.0 V', 'middle', '700')}`)}
${G('accent', `<rect x="${PL_R}" y="96" width="14" height="230" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>${T(PL_R + 7, 86, 16, '0 V', 'middle', '700')}`)}
${[130, 185, 240, 295].map((y) => ARR(PL_L + 6, y, PL_R - 6, y, 'arr-ep-eq', 1.5)).join('')}
${G('muted', `${[4.5, 3.0, 1.5].map((v) => `${LINE(planeX(v), 100, planeX(v), 322, 2, true)}${T(planeX(v), 86, 15, `${v.toFixed(1)} V`, 'middle')}`).join('')}${DIM(PL_L, PL_R, 346)}${T((PL_L + PL_R) / 2, 368, 15, 'd = 2.0 mm', 'middle')}`)}
${TAG(628, 218, 17, 'E', 22)}
${T(750, 402, 16, 'E = ΔV / d = 6.0 V / (2.0 × 10⁻³ m) = 3.0 × 10³ V/m', 'middle', '700')}
${T(750, 426, 15, 'evenly spaced planes; E points from high V to low V', 'middle')}
${G('muted', T(750, 448, 15, '0.50 mm from the 0 V plate: (3.0 × 10³)(0.50 × 10⁻³) = 1.5 V', 'middle'))}
</svg>`

/* 8 — Energy conservation: a proton and an electron released between plates (lead, 1000×460) */
const consSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ep-co')}</defs>
${G('muted', LINE(500, 30, 500, 440, 1.5))}
${T(250, 44, 22, 'released from rest across ΔV', 'middle', '700')}
${G('accent-2', `<rect x="66" y="96" width="14" height="230" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>${T(73, 86, 16, 'high V', 'middle', '700')}`)}
${G('accent', `<rect x="420" y="96" width="14" height="230" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>${T(427, 86, 16, 'low V', 'middle', '700')}`)}
${G('muted', `<defs>${ARROW('arr-ep-co-m')}</defs>${[120, 210, 300].map((y) => ARR(88, y, 412, y, 'arr-ep-co-m', 1.5)).join('')}${T(250, 112, 15, 'E', 'middle')}`)}
${CHARGE(110, 165, 14, '+')}
<g class="fig-accent-2"><defs>${ARROW('arr-ep-co-r')}</defs>${ARR(128, 165, 396, 165, 'arr-ep-co-r', 4)}${T(250, 198, 16, 'proton: speeds up toward LOWER V', 'middle', '700')}</g>
${CHARGE(390, 255, 14, '−')}
<g class="fig-accent"><defs>${ARROW('arr-ep-co-b')}</defs>${ARR(372, 255, 104, 255, 'arr-ep-co-b', 4)}${T(250, 289, 16, 'electron: speeds up toward HIGHER V', 'middle', '700')}</g>
${T(250, 372, 18, 'each gains KE = |q| |ΔV|', 'middle', '700')}
${T(250, 400, 16, 'both lose U = qV; the path, the field’s shape', 'middle')}
${T(250, 424, 16, 'and the width of the gap do not matter', 'middle')}
${T(750, 44, 22, 'same energy, not the same speed', 'middle', '700')}
${T(525, 104, 19, 'ΔKE = −ΔU = −q ΔV', 'start', '700')}
${T(525, 132, 16, 'KE + U stays constant when only electric forces act')}
${T(525, 184, 19, 'v = √(2 |q| |ΔV| / m)', 'start', '700')}
${T(525, 212, 16, 'the electron is about 1836 times lighter, so it')}
${T(525, 236, 16, 'ends about √1836 ≈ 43 times faster')}
${T(525, 268, 16, 'v grows as √ΔV: 4 × the voltage, 2 × the speed')}
${T(525, 320, 17, 'sent the other way, a charge slows down', 'start', '700')}
${T(525, 348, 16, 'closest approach: all the starting KE = k q₁q₂ / r min')}
${G('muted', `${T(525, 396, 15, 'voltages or positions given, speed or energy asked:')}${T(525, 418, 15, 'use energy conservation and skip the forces')}`)}
</svg>`

/* 10 — Worked example: closest approach, U = 360 eV × r_min/r plotted (after, 1000×460) */
const XC = (rho: number) => 110 + 130 * rho // rho = r / r_min
const YC = (ev: number) => 400 - 0.8 * ev
const closeCurve = Array.from({ length: 27 }, (_, i) => { const rho = 1 + 0.1 * i; return `${i ? 'L' : 'M'}${XC(rho).toFixed(1)} ${YC(360 / rho).toFixed(1)}` }).join(' ')
const closestSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ep-cl')}</defs>
${G('muted', LINE(626, 30, 626, 440, 1.5))}
${T(320, 40, 21, 'kinetic energy becomes potential energy', 'middle', '700')}
${ARR(110, 400, 110, 66, 'arr-ep-cl', 2)}${ARR(110, 400, 600, 400, 'arr-ep-cl', 2)}
${T(96, 80, 16, 'energy', 'end', '700')}${T(606, 406, 18, 'r', 'start', '700')}
${G('muted', `${LINE(110, YC(360), 590, YC(360), 2, true)}${LINE(XC(1), 400, XC(1), YC(360), 1.5, true)}${LINE(XC(2), 400, XC(2), YC(180), 1.5, true)}${T(590, YC(360) + 22, 15, 'total: 360 eV', 'end')}`)}
${T(100, YC(360) + 6, 15, '360 eV', 'end')}${T(100, YC(180) + 6, 15, '180 eV', 'end')}${G('muted', LINE(110, YC(180), XC(2), YC(180), 1.5, true))}
${T(XC(1), 424, 15, '2.0 × 10⁻¹¹ m', 'middle')}${T(XC(2), 424, 15, '4.0 × 10⁻¹¹ m', 'middle')}
${G('accent-2', T(110, 446, 15, 'nucleus, +5e', 'middle', '700'))}
${PATH(closeCurve, 3.5)}${T(XC(3.2), YC(360 / 3.2) + 28, 16, 'U = k(5e)(e) / r', 'middle', '700')}
<circle cx="${XC(1)}" cy="${YC(360)}" r="7" fill="currentColor"/>${T(XC(1) + 12, YC(360) - 12, 16, 'stops: KE = 0', 'start', '700')}
<circle cx="${XC(2)}" cy="${YC(180)}" r="6" fill="currentColor"/>
<g class="fig-accent-2"><defs>${ARROW('arr-ep-cl-r')}</defs>
<path d="M${XC(2)} ${YC(360) + 4} L${XC(2)} ${YC(180) - 8}" fill="none" stroke="currentColor" stroke-width="3" marker-start="url(#arr-ep-cl-r)" marker-end="url(#arr-ep-cl-r)"/>${T(XC(2) + 12, (YC(360) + YC(180)) / 2 + 6, 16, 'KE = 180 eV', 'start', '700')}
${ARR(590, 86, 520, 86, 'arr-ep-cl-r', 3)}</g>
${CHARGE(604, 86, 11, '+')}${T(508, 92, 15, 'proton', 'end')}
${T(644, 104, 16, 'KE = 360 eV = 5.76 × 10⁻¹⁷ J')}
${T(644, 152, 17, 'closest approach: KE = 0', 'start', '700')}
${T(644, 178, 16, 'k(5e)(e) / r min = 5.76 × 10⁻¹⁷ J')}
${T(644, 204, 17, 'r min = 2.0 × 10⁻¹¹ m', 'start', '700')}
${T(644, 252, 17, 'twice as far: U halves', 'start', '700')}
${T(644, 278, 16, 'U = 180 eV, so KE = 180 eV,')}
${T(644, 302, 16, 'on the way in or the way out')}
${T(644, 350, 17, 'far away again: KE = 360 eV', 'start', '700')}
${G('muted', T(644, 376, 15, 'the total energy never changed'))}
</svg>`

export const mcatElectricPotentialFigures: DeckFigurePlacement[] = [
  {
    at: 'Electric Potential Energy',
    mode: 'lead',
    figure: {
      svg: energySvg,
      alt:
        'Left, the energy of a pair of charges: a graph of U against separation r. A red curve for like charges starts high at small r and falls toward zero as r grows, with a dot and an arrow pointing down the curve toward larger r — like charges, U > 0; released, they fly apart. A blue curve for unlike charges is its mirror image below the axis, deeply negative at small r and rising toward zero, with a dot and an arrow pointing down the curve toward smaller r — unlike charges, U < 0; released, they come together. U → 0 when far apart. Right: U = kq₁q₂/r with the signs in. Like (+ + or − −): U > 0, work was done to push them together. Unlike (+ −): U < 0, bound, energy must be added to separate them. Left alone, a system moves to lower U. It is a scalar, in joules, that belongs to the pair; 1/r, so halving r doubles U while the force quadruples. The field does −ΔU; moving a charge slowly, you do +ΔU.',
      caption: 'Potential energy of two charges against their separation: positive and falling for like charges, negative and bound for unlike ones — and either pair, left alone, slides toward lower U.',
    },
    blocks: [
      '- $U = kq_1q_2/r$ with the signs **in**: like charges $U > 0$, unlike charges $U < 0$ (bound)',
      '- Left alone, a system moves toward lower $U$; the field does $-\\Delta U$, you do $+\\Delta U$',
    ],
  },
  {
    at: 'Electric Potential',
    exact: true,
    mode: 'lead',
    figure: {
      svg: gridSvg,
      alt:
        'Left, a two-by-two grid of formulas. Columns: pair quantities, which contain both charges, and per-charge quantities, which contain the source only. Rows: 1/r², force, and 1/r, energy. Top left F = k|q₁q₂|/r², the force between two charges, a vector in newtons; top right E = k|Q|/r², the field of one charge, a vector in N/C; bottom left U = kq₁q₂/r, the energy of the pair, a scalar in joules; bottom right V = kQ/r, the potential of one charge, a scalar in volts. Grey arrows marked ÷ q lead from F to E and from U to V. Bridges: F = qE and U = qV; keep the signs in U and V, not in F and E. Right, energy per charge: V = U/q, in volts, 1 V = 1 J/C, belongs to a point in space; V = kq/r, positive near +, negative near −, falls as 1/r, slower than E; several charges: add signed numbers, no components, no angles; only differences ΔV matter, and where V = 0 is a choice.',
      caption: 'Potential is to energy what field is to force: divide the pair quantity by the charge placed there. Force and field fall as 1/r²; energy and potential as 1/r.',
    },
    blocks: [
      '- $V = U/q$ (volts = J/C) belongs to a point, as $E = F/q$ does; for a point charge $V = kq/r$, signed',
      '- Potentials from several charges add as signed numbers — no components, no angles',
    ],
  },
  {
    at: 'Potential vs. Potential Energy',
    mode: 'replace-table',
    figure: {
      svg: potentialSvg,
      alt:
        'A slope drawn as a hill falling from high V at the top left to low V at the bottom right. An arrow E runs parallel to the slope pointing downhill in V. A red positive charge on the slope has an arrow pointing downhill: +q falls to low V. A blue negative charge has an arrow pointing uphill: −q climbs to high V. Both moves lower U = qV. Below: E is a vector at a point (N/C); V is a scalar at a point (volts); U = qV is in joules and belongs to the charge at that point.',
      caption: 'Potential as a hill: the field points downhill in V, a positive charge rolls down and a negative charge climbs up — both ways the energy U = qV drops.',
    },
    blocks: [
      '- **E**: vector at a point (N/C) · **V**: scalar at a point (V = J/C) · **U**: joules, belongs to the charge',
      '- The bridge: $U = qV$ and $\\Delta U = q\\,\\Delta V$ — one point, one $V$, a different $U$ for each charge',
      '- Positive charges move toward lower $V$, negative charges toward higher $V$; both lose $U$',
    ],
  },
  {
    at: 'Potential vs. Potential Energy',
    mode: 'after',
    figure: {
      svg: midpointSvg,
      alt:
        'Two panels, each with two charges a distance r either side of a midpoint dot. Left, +q and +q: at the midpoint the field from the left charge points right and the field from the right charge points left, equal and opposite — E = 0, the two fields cancel — while V = kq/r + kq/r = 2kq/r; there is no force on a charge put there, but it still has U = qV; scalars add, vectors can cancel. Right, +q and −q: the field from +q (away from it) and the field from −q (toward it) both point right, so E = 2kq/r², toward −q — the two add — while V = kq/r − kq/r = 0. E = 0 and V = 0 are independent facts; never assume one is zero because the other is.',
      caption: 'The midpoint of two charges: equal positive charges give E = 0 but V = 2kq/r; a positive and a negative charge give V = 0 but a doubled field pointing toward −q.',
    },
    blocks: [
      '- Fields add as **vectors**, potentials as **signed numbers**: one being zero says nothing about the other',
      '- $+q,+q$ midpoint: $E = 0$, $V = 2kq/r$ · $+q,-q$ midpoint: $V = 0$, $E = 2kq/r^2$ toward $-q$',
    ],
  },
  {
    at: 'Worked Example — Pushing Two Charges Together',
    mode: 'after',
    figure: {
      svg: pushSvg,
      alt:
        'Left: a graph of U against r for the pair, the curve U = 0.072 J·m / r falling as r grows. Two dots on it are joined to the axes by dashed lines: the start at r = 0.60 m, U = 0.12 J, and, higher up the curve, pushed together at r = 0.20 m, U = 0.36 J. A red arrow runs up the curve from the first to the second, marked ΔU = +0.24 J. Right, who does the work? kq₁q₂ = (9.0 × 10⁹)(2.0 × 10⁻⁶)(4.0 × 10⁻⁶) = 0.072 J·m; at 0.60 m U = 0.12 J and at 0.20 m U = 0.36 J — a third of the distance, three times U. You do +0.24 J; the field does −0.24 J. Released from 0.20 m, the full 0.36 J becomes kinetic energy, shared — the final U, not the 0.24 J change.',
      caption: 'The worked example plotted: pushing the charges from 0.60 m to 0.20 m climbs the 1/r curve from 0.12 J to 0.36 J, so you do +0.24 J and the field does −0.24 J.',
    },
    blocks: [
      '- $U = 0.072/r$: $0.12$ J at $0.60$ m, $0.36$ J at $0.20$ m — a third of the distance, three times the energy',
      '- You do $+0.24$ J, the field $-0.24$ J; released from $0.20$ m, the full $0.36$ J becomes kinetic',
    ],
  },
  {
    at: 'Worked Example — Potential at a Point from Two Charges',
    mode: 'after',
    figure: {
      svg: pointSvg,
      alt:
        'Left: a right triangle drawn to scale. A +6.0 nC charge sits at the corner with the right angle, a −4.0 nC charge 0.80 m to its right, and point P 0.60 m straight above the positive charge; the dashed third side from P to the negative charge is 1.0 m. Beside P: +90 V from the + charge, −36 V from the − charge, total V = 54 V. Right, potentials add as numbers: V₁ = (9.0 × 10⁹)(6.0 × 10⁻⁹)/0.60 = +90 V; V₂ = (9.0 × 10⁹)(−4.0 × 10⁻⁹)/1.0 = −36 V; V = 90 − 36 = 54 V — no components, no angles, only each distance. Bring a +2.0 μC charge in slowly from far away: W = qV = (2.0 × 10⁻⁶)(54) = 1.1 × 10⁻⁴ J. Put an electron at P instead: U = qV = (−1.6 × 10⁻¹⁹)(54) = −8.6 × 10⁻¹⁸ J. V > 0 at P, yet U < 0: V belongs to the point, U to the charge.',
      caption: 'The worked example drawn to scale: P is 0.60 m from the positive charge and 1.0 m from the negative one, so the potentials +90 V and −36 V simply add to 54 V.',
    },
    blocks: [
      '- $V_1 = +90$ V, $V_2 = -36$ V → $V = 54$ V: signed numbers, each with its own distance',
      '- $W = qV = 1.1 \\times 10^{-4}$ J for $+2.0\\;\\mu$C; an electron at P has $U = -8.6 \\times 10^{-18}$ J',
    ],
  },
  {
    at: 'Equipotentials and E = ΔV/d',
    mode: 'lead',
    figure: {
      svg: equipSvg,
      alt:
        'Left, equipotentials are perpendicular to field lines: a positive point charge with eight radial field lines pointing outward and four dashed circles around it — high V near the charge, low V farther out — drawn at equal steps of V, so each gap between circles is wider than the last. A blue arrow runs along one circle, marked W = 0. Equal steps of V: the circles spread out as E weakens; moving a charge along one costs no work. Right, parallel plates, a uniform field: a red plate at 6.0 V on the left and a blue plate at 0 V on the right, with horizontal field lines E running from the red plate to the blue one and three evenly spaced dashed vertical planes between them marked 4.5 V, 3.0 V and 1.5 V; a dimension line gives d = 2.0 mm. E = ΔV/d = 6.0 V/(2.0 × 10⁻³ m) = 3.0 × 10³ V/m; evenly spaced planes; E points from high V to low V; 0.50 mm from the 0 V plate: (3.0 × 10³)(0.50 × 10⁻³) = 1.5 V.',
      caption: 'Equipotentials cross field lines at right angles: circles that spread apart around a point charge, evenly spaced planes between plates, where E = ΔV/d.',
    },
    blocks: [
      '- Equipotentials $\\perp$ field lines; no work along one; $\\vec E$ points from high $V$ to low $V$',
      '- $|E| = |\\Delta V/\\Delta r|$: close lines, strong field · plates: $E = \\Delta V/d$, evenly spaced planes',
    ],
  },
  {
    at: 'Energy Conservation for Charges',
    mode: 'lead',
    figure: {
      svg: consSvg,
      alt:
        'Left, released from rest across ΔV: a red plate at high V on the left and a blue plate at low V on the right, with faint field lines E pointing from left to right. A proton starting at the high-V plate has a long red arrow pointing right: proton, speeds up toward lower V. An electron starting at the low-V plate has a long blue arrow pointing left: electron, speeds up toward higher V. Each gains KE = |q||ΔV|; both lose U = qV; the path, the field’s shape and the width of the gap do not matter. Right, same energy, not the same speed: ΔKE = −ΔU = −qΔV, and KE + U stays constant when only electric forces act; v = √(2|q||ΔV|/m), so the electron, about 1836 times lighter, ends about √1836 ≈ 43 times faster; v grows as √ΔV, so 4 times the voltage gives 2 times the speed; sent the other way, a charge slows down, and at closest approach all the starting KE = kq₁q₂/r min. Voltages or positions given, speed or energy asked: use energy conservation and skip the forces.',
      caption: 'Energy conservation between plates: a proton falls to lower V and an electron to higher V, each gaining |q||ΔV| — the same energy, but the lighter electron ends about 43 times faster.',
    },
    blocks: [
      '- $\\Delta KE = -q\\,\\Delta V$; from rest $KE = |q||\\Delta V|$, whatever the path or the gap',
      '- $v = \\sqrt{2|q||\\Delta V|/m}$: same energy for p⁺ and e⁻, but the electron is about 43 times faster',
    ],
  },
  {
    at: 'Ions Crossing a Membrane',
    mode: 'lead',
    figure: {
      svg: membraneSvg,
      alt:
        'A horizontal grey band, the lipid bilayer (insulator), with conducting fluid above (outside: 0 mV) and below (inside: −70 mV). Red plus signs line the outer face and blue minus signs the inner face, like charged plates. Three arrows E inside the band point downward, from outside to inside; a dimension line gives the thickness d ≈ 7.0 nm. An open channel breaks the band and a red Na⁺ ion in it has an arrow pointing inward: pushed inward by the field. Right: charged plates in the cell — positive charge lines the outer face, negative the inner face; E = V/d = 0.070 V/(7.0 × 10⁻⁹ m) = 1.0 × 10⁷ V/m: tiny voltage, tiny gap, giant field. Na⁺ entering: ΔU = qΔV = (+e)(−0.070 V) = −0.070 eV; ΔU < 0, so the field pushes it that way.',
      caption: 'The resting membrane as a pair of charged plates: −70 mV across 7.0 nm gives a field of 1.0 × 10⁷ V/m pointing inward, and a sodium ion entering loses 0.070 eV.',
    },
    blocks: [
      '- $E = \\Delta V/d = 0.070/(7.0 \\times 10^{-9}) = 1.0 \\times 10^7$ V/m, pointing inward',
      '- One ion: $\\Delta U = q\\,\\Delta V$, signs kept — Na⁺ entering loses $0.070$ eV $\\approx 10^{-20}$ J',
    ],
  },
  {
    at: 'Worked Example — Closest Approach',
    mode: 'after',
    figure: {
      svg: closestSvg,
      alt:
        'Left: a graph of energy against the proton’s distance r from the nucleus, which carries +5e and sits at r = 0. A dashed horizontal line marks the total, 360 eV. The potential-energy curve U = k(5e)(e)/r rises as r shrinks and meets the total line at r = 2.0 × 10⁻¹¹ m, where a dot is labelled stops: KE = 0. At r = 4.0 × 10⁻¹¹ m the curve is at 180 eV, and a red double arrow from the curve up to the total line is labelled KE = 180 eV. A small proton with an arrow pointing left shows it coming in from far away. Right: KE = 360 eV = 5.76 × 10⁻¹⁷ J; closest approach, KE = 0, k(5e)(e)/r min = 5.76 × 10⁻¹⁷ J, r min = 2.0 × 10⁻¹¹ m; twice as far, U halves: U = 180 eV, so KE = 180 eV, on the way in or the way out; far away again, KE = 360 eV — the total energy never changed.',
      caption: 'The worked example plotted: the proton’s 360 eV turns entirely into potential energy at 2.0 × 10⁻¹¹ m; at twice that distance half of it is kinetic again.',
    },
    blocks: [
      '- At closest approach all $360$ eV is potential: $k(5e)(e)/r_{min} = KE$ → $r_{min} = 2.0 \\times 10^{-11}$ m',
      '- $U \\propto 1/r$: at $4.0 \\times 10^{-11}$ m, $U = 180$ eV and $KE = 180$ eV; far away, $360$ eV again',
    ],
  },
]
