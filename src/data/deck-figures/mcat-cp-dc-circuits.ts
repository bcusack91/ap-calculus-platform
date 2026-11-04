import type { DeckFigurePlacement } from './index'
import { SVG_OPEN, ARROW, T, BOX, ARR, LINE, SUB, RES, BULB, BULB_GLOW, WIRE_BAT } from './mcat-cp-circuits'

/**
 * Circuits Part 1: Current & Resistance (MCAT C/P, topic split Nov 2026) —
 * extra deck figures for sections the original circuits figures do not cover
 * (those five come from mcat-cp-circuits.ts and are not repeated here).
 *
 * Every drawing below is ours, drawn from the concept with the shared circuit
 * helpers in mcat-cp-circuits.ts so the symbols match: conventional current
 * against electron drift, metallic vs electrolytic carriers, potential as
 * "height" around a loop, the series voltage divider beside the parallel
 * current divider, a burned-out bulb in a series string and in a parallel
 * bank, and a hand-to-hand shock path with dry vs wet skin. No textbook,
 * prep-company or AAMC figure was copied. The only numbers drawn are the
 * lesson's own visible numbers: the 9 V battery giving each coulomb 9 J
 * (Part 1, Voltage), the 1 Ω / 3 Ω branches splitting the current 3 : 1
 * (Part 3, dividers), and dry skin ~10⁵ Ω vs wet ~10³ Ω, ~100× the current
 * (Part 4, Electricity and the Body). The low-yield drift speed and body-
 * current thresholds are deliberately NOT drawn.
 *
 * Colours as in mcat-cp-circuits.ts: wires, resistors and bulbs in the text
 * colour; CURRENT arrows BLUE (fig-accent); voltage drops, glows and "wrong"/
 * danger RED (fig-accent-2); guides, carrier-motion arrows and boxes grey
 * (fig-muted). Each marker is defined inside the coloured group that uses it;
 * ids are unique in this file (arr-dc-<figure>-<colour>).
 */

/** A ground symbol hanging below (x, y). */
const GND = (x: number, y: number) =>
  `<path d="M${x} ${y} L${x} ${y + 18} M${x - 16} ${y + 18} L${x + 16} ${y + 18} M${x - 10} ${y + 25} L${x + 10} ${y + 25} M${x - 4} ${y + 32} L${x + 4} ${y + 32}" fill="none" stroke="currentColor" stroke-width="2.5"/>`

/** A filled block arrow pointing right, shaft height h, for "how much current" comparisons. */
const BLOCK_ARROW = (x1: number, y: number, x2: number, h: number) => {
  const hw = Math.max(h, 8), hl = Math.max(h * 1.1, 14)
  const pts = [[x1, y - h / 2], [x2 - hl, y - h / 2], [x2 - hl, y - hw], [x2, y], [x2 - hl, y + hw], [x2 - hl, y + h / 2], [x1, y + h / 2]]
  return `<polygon points="${pts.map(([a, b]) => `${a},${b}`).join(' ')}" fill="currentColor"/>`
}

/** A burned-out bulb: outline with a broken filament (draw inside a fig-accent-2 group). */
const BURNT = (cx: number, cy: number) =>
  `<circle class="fig-bg" cx="${cx}" cy="${cy}" r="16" stroke="currentColor" stroke-width="2.5"/><path d="M${cx - 9} ${cy - 9} L${cx - 3} ${cy - 3} M${cx + 9} ${cy + 9} L${cx + 3} ${cy + 3} M${cx + 9} ${cy - 9} L${cx + 3} ${cy - 3} M${cx - 9} ${cy + 9} L${cx - 3} ${cy + 3}" stroke="currentColor" stroke-width="2"/>`

/** A carrier: small open circle with its sign inside. */
const ION = (cx: number, cy: number, sign: '+' | '−', r = 11) =>
  `<circle class="fig-bg" cx="${cx}" cy="${cy}" r="${r}" stroke="currentColor" stroke-width="2"/>${T(cx, cy + 5, 15, sign, 'middle', '700')}`

/* 1 — Conventional current vs electron drift (lead, 1000×460) */
const driftElectronsTop = [170, 240, 310, 380]
const driftElectronsBottom = [140, 210, 280, 350]
const driftSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(500, 30, 500, 440, 1.5)}</g>
${T(255, 52, 21, 'conventional current: + → circuit → −', 'middle', '700')}
${WIRE_BAT(90, 120, 360, 240)}
${LINE(90, 120, 420, 120)}${LINE(420, 120, 420, 224)}${LINE(420, 256, 420, 360)}${LINE(90, 360, 420, 360)}
<g class="fig-accent-2">${BULB_GLOW(420, 240, 32, 0.25)}</g>
${BULB(420, 240)}
${T(72, 234, 17, '+', 'end', '700')}${T(72, 262, 17, '−', 'end', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-dc-drift-b')}</defs>
${ARR(140, 120, 330, 120, 'arr-dc-drift-b', 3.5)}
${T(235, 104, 18, 'I', 'middle', '700')}
${ARR(370, 360, 160, 360, 'arr-dc-drift-b', 3.5)}
${T(265, 392, 18, 'I', 'middle', '700')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-dc-drift-m')}</defs>
${driftElectronsTop.map((x) => ARR(x - 13, 150, x - 38, 150, 'arr-dc-drift-m', 2.5)).join('')}
${driftElectronsBottom.map((x) => ARR(x + 13, 330, x + 38, 330, 'arr-dc-drift-m', 2.5)).join('')}
${T(255, 226, 16, 'electrons drift the other way:', 'middle')}
${T(255, 250, 16, '− → circuit → +, slowly', 'middle')}
</g>
${driftElectronsTop.map((x) => ION(x, 150, '−', 9)).join('')}
${driftElectronsBottom.map((x) => ION(x, 330, '−', 9)).join('')}
${T(255, 428, 16, 'every circuit rule uses the conventional direction', 'middle')}
${T(745, 52, 21, 'inside the wire', 'middle', '700')}
<g class="fig-muted">
<rect x="550" y="110" width="390" height="90" rx="45" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
${T(745, 96, 16, 'electron drift ← (slow)', 'middle')}
<defs>${ARROW('arr-dc-drift-m2')}</defs>
${[[610, 140], [690, 172], [770, 136], [850, 168]].map(([x, y]) => ARR(x - 15, y, x - 42, y, 'arr-dc-drift-m2', 2.5)).join('')}
</g>
${[[610, 140], [690, 172], [770, 136], [850, 168]].map(([x, y]) => ION(x, y, '−')).join('')}
<g class="fig-accent">
<defs>${ARROW('arr-dc-drift-b2')}</defs>
${ARR(610, 236, 880, 236, 'arr-dc-drift-b2', 4)}
${T(745, 266, 17, 'conventional current I →', 'middle', '700')}
</g>
${T(745, 312, 17, 'a − charge moving left = a + charge moving right', 'middle', '700')}
${T(745, 352, 17, 'drift is slow, but the push is fast:', 'middle', '700')}
${T(745, 380, 16, 'the field spreads almost at light speed and the', 'middle')}
${T(745, 404, 16, 'wire is already full of carriers, so all move at once', 'middle')}
<g class="fig-muted">${T(745, 432, 15, 'that is why a lamp lights the instant the switch closes', 'middle')}</g>
</svg>`

/* 2 — Metallic vs electrolytic conduction (replace-table, 560×440) */
const metalCores = [70, 130, 190, 250, 310].flatMap((x) => [[x, 100], [x, 152]])
const metalElectrons = [[100, 126], [160, 122], [220, 130], [280, 124], [335, 128]]
const naIons = [[110, 296], [200, 302], [280, 294]]
const clIons = [[110, 346], [190, 340], [270, 348]]
const conductionSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 28, 16, 'metal: electrons only · saline: ions both ways', 'middle', '700')}
${T(30, 60, 17, 'metal wire', 'start', '700')}
<g class="fig-muted">
${BOX(30, 72, 330, 108, 12, 2, 0.04)}
${metalCores.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="none" stroke="currentColor" stroke-width="2"/>${T(x, y + 5, 15, '+', 'middle', '700')}`).join('')}
<defs>${ARROW('arr-dc-cond-m')}</defs>
${metalElectrons.map(([x, y]) => ARR(x - 8, y, x - 28, y, 'arr-dc-cond-m', 2.5)).join('')}
</g>
${metalElectrons.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="currentColor"/>`).join('')}
<g class="fig-accent">
<defs>${ARROW('arr-dc-cond-b')}</defs>
${ARR(90, 202, 290, 202, 'arr-dc-cond-b', 3.5)}
${T(302, 208, 16, 'I', 'start', '700')}
</g>
${T(380, 92, 15, 'free electrons only,', 'start', '700')}
${T(380, 116, 15, 'drifting against I')}
${T(380, 140, 15, 'carrier count fixed')}
${T(380, 172, 15, 'hot → σ FALLS', 'start', '700')}
<g class="fig-muted">${T(380, 194, 15, '(lattice scatters e⁻)')}</g>
<g class="fig-muted">${LINE(30, 224, 530, 224, 1.5)}</g>
${T(30, 252, 17, 'saline (Na⁺, Cl⁻)', 'start', '700')}
<g class="fig-muted">${BOX(30, 264, 330, 108, 12, 2, 0.04)}</g>
<rect x="42" y="274" width="10" height="88" rx="2" fill="currentColor"/>
<rect x="338" y="274" width="10" height="88" rx="2" fill="currentColor"/>
${T(47, 392, 16, '+', 'middle', '700')}${T(343, 392, 16, '−', 'middle', '700')}
<g class="fig-muted">
<defs>${ARROW('arr-dc-cond-m2')}</defs>
${naIons.map(([x, y]) => ARR(x + 16, y, x + 42, y, 'arr-dc-cond-m2', 2.5)).join('')}
${clIons.map(([x, y]) => ARR(x - 16, y, x - 42, y, 'arr-dc-cond-m2', 2.5)).join('')}
</g>
${naIons.map(([x, y]) => ION(x, y, '+', 13)).join('')}
${clIons.map(([x, y]) => ION(x, y, '−', 13)).join('')}
<g class="fig-accent">
<defs>${ARROW('arr-dc-cond-b2')}</defs>
${ARR(90, 412, 290, 412, 'arr-dc-cond-b2', 3.5)}
${T(302, 418, 16, 'I', 'start', '700')}
</g>
${T(380, 284, 15, 'Na⁺ moves with I', 'start', '700')}
${T(380, 308, 15, 'Cl⁻ moves against I', 'start', '700')}
${T(380, 334, 15, 'both carry + charge →')}
${T(380, 356, 15, 'they ADD, never cancel')}
${T(380, 390, 15, 'hot → σ RISES', 'start', '700')}
<g class="fig-muted">${T(380, 412, 15, 'more ions → higher σ')}</g>
</svg>`

/* 3 — Voltage as energy per charge: potential as "height" around the loop (lead, 1000×460) */
const vY0 = 360, vY9 = 130, vYb = 215
const voltageSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(390, 30, 390, 440, 1.5)}</g>
${T(200, 52, 21, 'one loop, three points', 'middle', '700')}
${WIRE_BAT(80, 130, 330, 230)}
${RES(80, 130, 300, 130)}${RES(300, 130, 300, 330)}${LINE(80, 330, 300, 330)}
${T(56, 224, 17, '+', 'end', '700')}${T(56, 252, 17, '−', 'end', '700')}
${T(102, 236, 19, '9 V', 'start', '700')}
${T(190, 112, 18, 'R₁', 'middle', '700')}${T(318, 236, 18, 'R₂', 'start', '700')}
<circle cx="120" cy="130" r="5" fill="currentColor"/>${T(120, 114, 16, 'a', 'middle', '700')}
<circle cx="300" cy="130" r="5" fill="currentColor"/>${T(316, 118, 16, 'b', 'start', '700')}
<circle cx="230" cy="330" r="5" fill="currentColor"/>${T(230, 356, 16, 'c', 'middle', '700')}
<g class="fig-muted">${GND(80, 330)}${T(102, 372, 15, 'ground = 0 V')}</g>
${T(200, 410, 17, '9 V: each coulomb gains 9 J', 'middle', '700')}
<g class="fig-muted">${T(200, 434, 15, 'the resistors turn it into heat and light', 'middle')}</g>
${T(690, 52, 21, 'potential as height around the loop', 'middle', '700')}
<g class="fig-muted"><defs>${ARROW('arr-dc-volt-m')}</defs>
${ARR(470, vY0, 960, vY0, 'arr-dc-volt-m', 2)}
${ARR(470, vY0, 470, 88, 'arr-dc-volt-m', 2)}
${LINE(470, vY9, 520, vY9, 1.5, true)}
</g>
${T(460, vY9 + 6, 16, '9 V', 'end', '700')}${T(460, vY0 + 6, 16, '0 V', 'end', '700')}
<text x="436" y="245" font-size="16" text-anchor="middle" fill="currentColor" transform="rotate(-90 436 245)">potential V</text>
${T(955, vY0 + 28, 15, 'around the loop →', 'end')}
<path d="M478 ${vY0} L520 ${vY0} L520 ${vY9} L620 ${vY9}" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
<path d="M700 ${vYb} L790 ${vYb}" fill="none" stroke="currentColor" stroke-width="4"/>
<path d="M870 ${vY0} L945 ${vY0}" fill="none" stroke="currentColor" stroke-width="4"/>
<g class="fig-accent-2">
<path d="M620 ${vY9} L700 ${vYb}" fill="none" stroke="currentColor" stroke-width="4"/>
<path d="M790 ${vYb} L870 ${vY0}" fill="none" stroke="currentColor" stroke-width="4"/>
${T(670, 160, 16, 'drop across R₁', 'start', '700')}
${T(842, 282, 16, 'drop across R₂', 'start', '700')}
</g>
${T(532, 250, 16, 'battery lifts', 'start', '700')}
${T(532, 274, 16, 'charge up 9 V')}
${T(570, vY9 - 12, 16, 'a', 'middle', '700')}${T(745, vYb - 12, 16, 'b', 'middle', '700')}${T(907, vY0 - 12, 16, 'c', 'middle', '700')}
${T(690, 414, 17, 'the drops add back to 9 V: the loop closes at ground', 'middle', '700')}
<g class="fig-muted">${T(690, 440, 15, '+ charges fall to lower V, − charges climb to higher V — both lose PE (ΔU = qΔV)', 'middle')}</g>
</svg>`

/* 4 — Voltage divider (series) beside current divider (parallel) (lead, 1000×460) */
const dividerSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(500, 30, 500, 440, 1.5)}</g>
${T(250, 52, 21, 'voltage divider (series): V splits like R', 'middle', '700')}
${WIRE_BAT(90, 110, 350, 230)}
${LINE(90, 110, 300, 110)}${RES(300, 110, 300, 230)}${RES(300, 230, 300, 350)}${LINE(90, 350, 300, 350)}
<circle cx="300" cy="230" r="5" fill="currentColor"/>
${T(66, 224, 17, '+', 'end', '700')}${T(66, 250, 17, '−', 'end', '700')}
${T(118, 236, 19, 'V', 'start', '700')}
${T(320, 166, 18, 'R₁ (small)', 'start', '700')}
${T(320, 290, 18, 'R₂ (big)', 'start', '700')}
<g class="fig-accent-2">
${T(320, 190, 16, 'small share V₁')}
${T(320, 314, 16, 'big share V₂')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-dc-div-b')}</defs>
${ARR(130, 110, 250, 110, 'arr-dc-div-b', 3.5)}
${T(190, 96, 16, 'same I', 'middle', '700')}
</g>
${T(250, 402, 22, 'V₁ = V · R₁/(R₁ + R₂)', 'middle', '700')}
${T(250, 432, 16, 'the bigger R takes the bigger share of V', 'middle')}
${T(745, 52, 21, 'current divider (parallel): I splits like 1/R', 'middle', '700')}
${LINE(540, 230, 620, 230)}${LINE(870, 230, 950, 230)}
${LINE(620, 230, 620, 130)}${RES(620, 130, 870, 130)}${LINE(870, 130, 870, 230)}
${LINE(620, 230, 620, 330)}${RES(620, 330, 870, 330)}${LINE(870, 330, 870, 230)}
<circle cx="620" cy="230" r="5" fill="currentColor"/><circle cx="870" cy="230" r="5" fill="currentColor"/>
${T(745, 110, 17, 'R₁ = 1 Ω', 'middle', '700')}
${T(745, 362, 17, 'R₂ = 3 Ω', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-dc-div-b2')}</defs>
${ARR(546, 230, 604, 230, 'arr-dc-div-b2', 3.5)}${T(575, 214, 17, 'I', 'middle', '700')}
${ARR(886, 230, 944, 230, 'arr-dc-div-b2', 3.5)}${T(915, 214, 17, 'I', 'middle', '700')}
${ARR(636, 130, 704, 130, 'arr-dc-div-b2', 5)}${T(668, 112, 17, '¾ I', 'middle', '700')}
${ARR(636, 330, 704, 330, 'arr-dc-div-b2', 2.5)}${T(668, 360, 17, '¼ I', 'middle', '700')}
</g>
<g class="fig-muted">${T(745, 226, 16, 'smaller R →', 'middle')}${T(745, 248, 16, 'bigger share of I', 'middle')}</g>
${T(745, 402, 22, 'I₁ = I · R₂/(R₁ + R₂)', 'middle', '700')}
${T(745, 432, 16, 'the OTHER R on top: 1 Ω and 3 Ω split I 3 : 1', 'middle')}
</svg>`

/* 5 — A bulb burns out: series string vs parallel bank (lead, 1000×460) */
const pBranches = [670, 785, 900]
const burnoutSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(500, 30, 500, 440, 1.5)}</g>
${T(250, 52, 21, 'series string: one out, all dark', 'middle', '700')}
${WIRE_BAT(80, 120, 330, 225)}
${LINE(80, 120, 154, 120)}${LINE(186, 120, 254, 120)}${LINE(286, 120, 354, 120)}${LINE(386, 120, 440, 120)}
${LINE(440, 120, 440, 330)}${LINE(80, 330, 440, 330)}
${BULB(170, 120)}${BULB(370, 120)}
<g class="fig-accent-2">${BURNT(270, 120)}${T(270, 90, 16, 'burned out = open', 'middle', '700')}</g>
<g class="fig-muted">${T(170, 160, 15, 'dark', 'middle')}${T(370, 160, 15, 'dark', 'middle')}</g>
${T(54, 231, 17, 'V', 'end', '700')}
${T(260, 228, 18, 'I = 0 everywhere', 'middle', '700')}
<g class="fig-muted">${T(260, 254, 15, 'the only path is broken', 'middle')}</g>
${T(250, 382, 17, 'a burned-out bulb is an open circuit', 'middle', '700')}
<g class="fig-muted">${T(250, 410, 16, 'adding a bulb in series dims every bulb', 'middle')}</g>
${T(745, 52, 21, 'parallel bank: the others stay lit', 'middle', '700')}
${WIRE_BAT(560, 120, 330, 225)}
${LINE(560, 120, 900, 120)}${LINE(560, 330, 900, 330)}
${pBranches.map((x) => `${LINE(x, 120, x, 209)}${LINE(x, 241, x, 330)}`).join('')}
<g class="fig-accent-2">${BULB_GLOW(670, 225, 34, 0.28)}${BULB_GLOW(785, 225, 34, 0.28)}</g>
${BULB(670, 225)}${BULB(785, 225)}
<g class="fig-accent-2">${BURNT(900, 225)}${T(922, 231, 16, 'out', 'start', '700')}</g>
${T(534, 231, 17, 'V', 'end', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-dc-burn-b')}</defs>
${ARR(580, 120, 640, 120, 'arr-dc-burn-b', 3.5)}${T(610, 104, 16, 'total I ↓', 'middle', '700')}
${ARR(670, 140, 670, 182, 'arr-dc-burn-b', 3)}${ARR(785, 140, 785, 182, 'arr-dc-burn-b', 3)}
</g>
<g class="fig-muted">${T(727, 296, 15, 'equal', 'middle')}${T(727, 316, 15, 'glow', 'middle')}</g>
${T(745, 382, 17, 'each lit bulb keeps the full V: brightness unchanged', 'middle', '700')}
<g class="fig-muted">${T(745, 410, 16, 'the source just supplies less total current', 'middle')}</g>
</svg>`

/* 6 — Electricity and the body: a hand-to-hand path, dry vs wet skin (lead, 1000×460) */
const bodySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(545, 30, 545, 440, 1.5)}</g>
${T(290, 52, 21, 'current, not voltage, does the harm', 'middle', '700')}
<circle cx="290" cy="112" r="26" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="250" y="146" width="80" height="140" rx="22" fill="none" stroke="currentColor" stroke-width="2.5"/>
${LINE(250, 162, 140, 162, 2.5)}${LINE(330, 162, 440, 162, 2.5)}
<circle cx="128" cy="164" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="452" cy="164" r="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
${LINE(268, 286, 254, 390, 2.5)}${LINE(312, 286, 326, 390, 2.5)}
${LINE(113, 110, 113, 230, 6)}
${T(113, 96, 16, 'live wire', 'middle', '700')}
${LINE(467, 110, 467, 222, 6)}
${GND(467, 222)}
${T(467, 96, 16, 'grounded pipe', 'middle', '700')}
<g class="fig-accent-2">
<path d="M304 216 C 286 204 286 186 297 186 C 301 186 304 190 304 193 C 304 190 307 186 311 186 C 322 186 322 204 304 216 Z" fill="currentColor" fill-opacity="0.85"/>
${T(342, 234, 15, 'heart')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-dc-body-b')}</defs>
<path d="M140 178 L240 182 Q 290 212 345 182 L438 178" fill="none" stroke="currentColor" stroke-width="4" marker-end="url(#arr-dc-body-b)"/>
${T(362, 210, 18, 'I', 'middle', '700')}
</g>
<g class="fig-muted">${T(136, 206, 15, 'skin')}${T(444, 206, 15, 'skin', 'end')}</g>
${T(290, 418, 16, 'hand-to-hand current crosses the chest', 'middle', '700')}
<g class="fig-muted">${T(290, 442, 15, 'skin holds most of the R; the inside is salty, ionic fluid', 'middle')}</g>
${T(770, 52, 21, `same V, so I = V / ${SUB('R', 'body', 21)}`, 'middle', '700')}
<g class="fig-muted">${BOX(580, 84, 370, 126, 12, 2, 0.04)}${BOX(580, 228, 370, 132, 12, 2, 0.04)}</g>
${T(600, 118, 19, 'dry skin', 'start', '700')}
${T(600, 148, 18, 'R ~ 10⁵ Ω')}
<g class="fig-accent">${BLOCK_ARROW(600, 184, 664, 4)}${T(678, 190, 16, 'small current', 'start', '700')}</g>
${T(600, 262, 19, 'wet or broken skin', 'start', '700')}
${T(600, 292, 18, 'R ~ 10³ Ω')}
<g class="fig-accent">${BLOCK_ARROW(600, 330, 820, 22)}</g>
<g class="fig-accent-2">${T(834, 336, 18, '~100× the I', 'start', '700')}</g>
<g class="fig-muted">${T(765, 400, 15, 'a static spark: huge V, tiny charge, harmless', 'middle')}</g>
<g class="fig-accent-2">${T(765, 428, 16, 'a modest V across wet skin can be lethal', 'middle', '700')}</g>
</svg>`

export const mcatDcCircuitsExtraFigures: DeckFigurePlacement[] = [
  {
    at: 'Conventional Current vs. Electron Drift',
    mode: 'lead',
    figure: {
      svg: driftSvg,
      alt:
        'Left: a single loop with a battery on the left (+ terminal on top) and a glowing bulb on the right. Blue conventional-current arrows labelled I run out of the + terminal along the top wire and back along the bottom wire into the − terminal. Small electrons (− signs) sit along both wires with short grey arrows pointing the opposite way: electrons drift − → circuit → +, slowly. Every circuit rule uses the conventional direction. Right, inside the wire: a grey tube holding electrons that each drift a short way to the left (slow), with a long blue arrow below pointing right, conventional current I. A − charge moving left equals a + charge moving right. The drift is slow but the push is fast: the field spreads almost at light speed and the wire is already full of carriers, so all of them move at once — that is why a lamp lights the instant the switch closes.',
      caption: 'Conventional current runs + → circuit → −; metal electrons drift slowly the other way, yet the push reaches every carrier almost at once.',
    },
    blocks: [
      '- Conventional current = the way $+$ charge would flow: out of $+$, around the circuit, into $-$',
      '- Metal electrons drift the OTHER way, slowly — but the push spreads almost at light speed',
    ],
  },
  {
    at: 'Metallic vs. Electrolytic Conduction',
    mode: 'replace-table',
    figure: {
      svg: conductionSvg,
      alt:
        'Top, metal wire: a grey lattice of fixed positive ion cores with small free electrons between them, each electron drifting left (grey arrows) while a blue arrow I points right. Free electrons only, drifting against I; the carrier count is fixed; hot → conductivity σ FALLS because the lattice scatters electrons. Bottom, saline (Na⁺, Cl⁻): a solution between a + electrode on the left and a − electrode on the right; Na⁺ ions drift right and Cl⁻ ions drift left (grey arrows), with a blue arrow I pointing right. Na⁺ moves with I and Cl⁻ against it; both carry positive charge to the right, so they ADD and never cancel; hot → σ RISES; more ions → higher σ.',
      caption: 'Metals carry current with electrons alone; electrolytes with cations moving with the current and anions against it — the two add.',
    },
    blocks: [
      '- **Metal:** delocalized electrons only, drifting against conventional current; heating LOWERS $\\sigma$',
      '- **Electrolyte:** cations with the current, anions against it, and both ADD; heating RAISES $\\sigma$',
      "- More dissolved ions → higher conductivity; a metal's carrier count is fixed",
      '- Conductivity $\\sigma = 1/\\rho$ (S/m); body fluids conduct with ions, never free electrons',
    ],
  },
  {
    at: 'Voltage — Energy per Charge',
    mode: 'lead',
    figure: {
      svg: voltageSvg,
      alt:
        'Left: a loop with a 9 V battery (+ on top), resistor R₁ on the top wire and R₂ on the right side; point a is just past the + terminal, b sits between R₁ and R₂, c is on the bottom wire after R₂, and the − terminal is grounded at 0 V. 9 V means each coulomb gains 9 J, which the resistors turn into heat and light. Right: a graph of potential against position around the loop, like height. Starting at 0 V at ground, the battery lifts the charge straight up to 9 V; the line stays flat along the wire to a; a red slope drops across R₁ to a lower flat level at b; a second red slope drops across R₂ back to 0 V at c. The drops add back to 9 V and the loop closes at ground. Positive charges fall to lower V, negative charges climb to higher V, and both lose potential energy (ΔU = qΔV).',
      caption: 'Potential as height: the 9 V battery lifts each coulomb 9 J, the resistors drop it back down, and the loop closes at ground.',
    },
    blocks: [
      '- $\\Delta U = q\\Delta V$, $1\\;\\text{V} = 1\\;\\text{J/C}$: a 9 V battery gives each coulomb 9 J',
      '- $+$ charges fall to lower $V$, $-$ charges climb to higher $V$: both LOSE potential energy',
    ],
  },
  {
    at: 'Voltage Dividers and Current Dividers',
    mode: 'lead',
    figure: {
      svg: dividerSvg,
      alt:
        'Left, voltage divider (series): a battery V drives one current (blue arrow, same I) down through R₁, which is small, and then R₂, which is big; in red, R₁ takes the small share V₁ of the voltage and R₂ the big share V₂. V₁ = V · R₁/(R₁ + R₂): the bigger R takes the bigger share of V. Right, current divider (parallel): a current I splits at a node into two branches, R₁ = 1 Ω on top carrying a thick blue arrow ¾ I and R₂ = 3 Ω below carrying a thin blue arrow ¼ I, and the branches rejoin into I. The smaller R gets the bigger share of I. I₁ = I · R₂/(R₁ + R₂): the other R goes on top, so 1 Ω and 3 Ω split the current 3 : 1.',
      caption: 'Series resistors share voltage in proportion to R; parallel branches share current inversely — 1 Ω and 3 Ω split it 3 : 1.',
    },
    blocks: [
      '- **Voltage divider (series):** $V_1 = V\\,R_1/(R_1 + R_2)$ — the bigger $R$ takes more $V$',
      '- **Current divider (parallel):** $I_1 = I\\,R_2/(R_1 + R_2)$ — the OTHER $R$ on top; smaller $R$ gets more $I$',
    ],
  },
  {
    at: 'When a Bulb Burns Out or One Is Added',
    mode: 'lead',
    figure: {
      svg: burnoutSvg,
      alt:
        'Left, series string: a battery V with three bulbs on one wire; the middle bulb is drawn in red with a broken filament, burned out = open, and the other two are dark. I = 0 everywhere because the only path is broken. A burned-out bulb is an open circuit; adding a bulb in series dims every bulb. Right, parallel bank: the same battery with three bulbs on separate branches; the right-hand bulb is burned out (red, broken filament, labelled out) while the other two still glow equally, each with its own blue branch-current arrow — same V, equal glow. A blue arrow on the supply wire is labelled total I ↓. Each lit bulb keeps the full V so its brightness is unchanged; the source just supplies less total current.',
      caption: 'One open bulb darkens a whole series string; in a parallel bank the others keep their full voltage and glow, and only the total current drops.',
    },
    blocks: [
      '- A burned-out bulb is an open circuit: in **series** every bulb goes dark',
      '- In **parallel** across an ideal source the others stay just as bright; the total current drops',
      '- Mixed (A in series with B ∥ C): C burns out → $R_{eq}$ up, total $I$ down, A dims, B brightens',
    ],
  },
  {
    at: 'Electricity and the Body',
    mode: 'lead',
    figure: {
      svg: bodySvg,
      alt:
        'Left: a simple outline of a person with arms stretched out, the left hand gripping a live wire and the right hand touching a grounded pipe. A blue current arrow I runs from one hand along the arm, dips across the chest past a red heart, and out through the other hand: hand-to-hand current crosses the chest. Both hands are labelled skin; skin holds most of the resistance, while the inside is salty, ionic fluid. Title: current, not voltage, does the harm. Right: same V, so I = V / R_body. Dry skin, R ~ 10⁵ Ω, gives a thin blue arrow, a small current. Wet or broken skin, R ~ 10³ Ω, gives a thick blue arrow, about 100 times the current (in red). A static spark has huge voltage but tiny charge and is harmless; a modest voltage across wet skin can be lethal.',
      caption: 'Current through the body does the harm: at the same voltage, wet skin (~10³ Ω) passes about 100× the current of dry skin (~10⁵ Ω).',
    },
    blocks: [
      '- Current does the harm: $I = V/R_{body}$, and most of $R_{body}$ is in dry skin',
      '- Dry skin ~$10^5\\;\\Omega$, wet ~$10^3\\;\\Omega$: same voltage, about 100× the current',
      '- Hand-to-hand or hand-to-foot paths cross the chest and can disrupt the heart',
    ],
  },
]
