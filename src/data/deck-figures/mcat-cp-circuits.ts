import type { DeckFigurePlacement } from './index'

/**
 * Circuits (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept with standard circuit
 * symbols built by the small helpers here (battery = long/short plates,
 * resistor = zigzag, capacitor = parallel plates, meter = lettered circle,
 * bulb = circle with a cross filament and a red glow): a one-loop Ohm's-law
 * circuit with its V–I line and the wire-geometry picture, series vs parallel
 * resistors, Kirchhoff's junction and loop rules, bulbs in series vs parallel,
 * a real battery as EMF + internal resistance with its sagging terminal-
 * voltage line, ammeter/voltmeter placement (and the swapped short circuit),
 * capacitors in series vs parallel, the cell membrane as an RC circuit with
 * its charging curve, and the lesson's two-step network collapsed step by
 * step — no textbook, prep-company or AAMC figure was copied. Graph shapes
 * (non-ohmic curve, terminal-voltage line, RC charging) are illustrative and
 * say so; the only numbers drawn are the lesson's own worked-example numbers
 * (24 V with 2/4/6 Ω → 2 A and 4/8/12 V; 12 V with 2 Ω + (6 ∥ 3) → 3 A,
 * 6 V, 1 A and 2 A).
 *
 * Colours are consistent across the deck: wires, plates and resistors in the
 * text colour; CURRENT arrows and the ammeter BLUE (fig-accent); voltage
 * drops, glows, the voltmeter and "wrong" things RED (fig-accent-2); graph
 * guides, dashed boxes and dimension lines grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-ci-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A rounded box outlined in the current colour; `fillOpacity` > 0 tints it with the same colour. */
const BOX = (x: number, y: number, w: number, h: number, rx = 12, sw = 2.5, fillOpacity = 0, dashed = false) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="8 6"' : ''}/>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2.5, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A horizontal dimension line with end ticks. */
const DIM = (x1: number, x2: number, y: number) =>
  `<path d="M${x1} ${y - 6} L${x1} ${y + 6} M${x1} ${y} L${x2} ${y} M${x2} ${y - 6} L${x2} ${y + 6}" fill="none" stroke="currentColor" stroke-width="2"/>`

/** Subscript helper: base + small subscript, back to baseline. */
const SUB = (base: string, sub: string, size: number) =>
  `${base}<tspan dy="${Math.round(size * 0.25)}" font-size="${Math.round(size * 0.7)}">${sub}</tspan><tspan dy="${-Math.round(size * 0.25)}" font-size="${size}"> </tspan>`

/** A polyline path through the points. */
const PATH = (pts: [number, number][]) => 'M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L')

/* ── circuit symbols ─────────────────────────────────────────────────────── */

/** A wire with a resistor zigzag (60 units long, ±8 wide) centred on the segment (x1,y1)→(x2,y2). */
const RES = (x1: number, y1: number, x2: number, y2: number, sw = 2.5) => {
  const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy)
  const ux = dx / len, uy = dy / len, nx = -uy, ny = ux
  const lead = (len - 60) / 2
  const pts: [number, number][] = [[x1, y1], [x1 + ux * lead, y1 + uy * lead]]
  for (let k = 0; k < 6; k++) {
    const s = lead + 5 + 10 * k, off = k % 2 === 0 ? 8 : -8
    pts.push([x1 + ux * s + nx * off, y1 + uy * s + ny * off])
  }
  pts.push([x1 + ux * (lead + 60), y1 + uy * (lead + 60)], [x2, y2])
  return `<path d="${PATH(pts)}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linejoin="round"/>`
}

/** A battery in a VERTICAL wire at (cx, cy): long thin plate (+) on top, short thick plate (−) below. The wire must stop at cy−6 and resume at cy+6. */
const BATV = (cx: number, cy: number) =>
  `<path d="M${cx - 18} ${cy - 6} L${cx + 18} ${cy - 6}" stroke="currentColor" stroke-width="3"/><path d="M${cx - 9} ${cy + 6} L${cx + 9} ${cy + 6}" stroke="currentColor" stroke-width="5.5"/>`

/** A capacitor in a HORIZONTAL wire at (cx, cy): two vertical plates. The wire must stop at cx−5 and resume at cx+5. */
const CAPH = (cx: number, cy: number) =>
  `<path d="M${cx - 5} ${cy - 16} L${cx - 5} ${cy + 16} M${cx + 5} ${cy - 16} L${cx + 5} ${cy + 16}" stroke="currentColor" stroke-width="3.5"/>`

/** A capacitor in a VERTICAL wire at (cx, cy): two horizontal plates. The wire must stop at cy−5 and resume at cy+5. */
const CAPV = (cx: number, cy: number) =>
  `<path d="M${cx - 16} ${cy - 5} L${cx + 16} ${cy - 5} M${cx - 16} ${cy + 5} L${cx + 16} ${cy + 5}" stroke="currentColor" stroke-width="3.5"/>`

/** A meter: a circle in the figure background (it sits ON the wire) with a letter inside. */
const METER = (cx: number, cy: number, letter: string) =>
  `<circle class="fig-bg" cx="${cx}" cy="${cy}" r="18" stroke="currentColor" stroke-width="2.5"/>${T(cx, cy + 7, 19, letter, 'middle', '700')}`

/** A bulb on the wire with an optional red glow (drawn by the caller inside a fig-accent-2 group via BULB_GLOW). */
const BULB = (cx: number, cy: number) =>
  `<circle class="fig-bg" cx="${cx}" cy="${cy}" r="16" stroke="currentColor" stroke-width="2.5"/><path d="M${cx - 9} ${cy - 9} L${cx + 9} ${cy + 9} M${cx + 9} ${cy - 9} L${cx - 9} ${cy + 9}" stroke="currentColor" stroke-width="2"/>`
const BULB_GLOW = (cx: number, cy: number, r: number, opacity: number) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="${opacity}"/>`

/** A vertical wire from y1 to y2 at x, broken for a battery at cy (plates drawn). */
const WIRE_BAT = (x: number, y1: number, y2: number, cy: number) =>
  `${LINE(x, y1, x, cy - 6)}${LINE(x, cy + 6, x, y2)}${BATV(x, cy)}`

/* 1 — Ohm's law: one loop, the V–I line, the wire geometry R = ρL/A (lead, 1000×460) */
const ohmPanel = (ox: number) => `<g class="fig-muted"><rect x="${ox}" y="20" width="310" height="420" rx="14" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/></g>`
const ohmSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ci-ohm')}</defs>
${ohmPanel(20)}${ohmPanel(345)}${ohmPanel(670)}
${T(175, 52, 22, 'one loop: V = IR', 'middle', '700')}
${WIRE_BAT(90, 110, 270, 190)}
${LINE(90, 110, 270, 110)}${LINE(90, 270, 270, 270)}
${RES(270, 110, 270, 270)}
${T(74, 184, 16, '+', 'end')}${T(74, 210, 16, '−', 'end')}
${T(56, 196, 20, 'V', 'end', '700')}
${T(292, 196, 20, 'R', 'start', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-ci-ohm-b')}</defs>
${ARR(140, 110, 220, 110, 'arr-ci-ohm-b', 3.5)}
${T(180, 96, 19, 'I', 'middle', '700')}
</g>
${T(175, 322, 20, 'V = IR', 'middle', '700')}
${T(175, 352, 17, 'push V, flow I, opposition R', 'middle')}
<g class="fig-muted">
${T(175, 384, 16, 'double V (same R) → double I', 'middle')}
${T(175, 408, 16, 'double R (same V) → half I', 'middle')}
</g>
${T(500, 52, 22, 'V against I: slope = R', 'middle', '700')}
<g class="fig-muted"><defs>${ARROW('arr-ci-ohm-m')}</defs>
${ARR(400, 380, 635, 380, 'arr-ci-ohm-m', 2)}
${ARR(400, 380, 400, 90, 'arr-ci-ohm-m', 2)}
</g>
${T(632, 404, 17, 'current I', 'end')}
<text x="378" y="240" font-size="17" text-anchor="middle" fill="currentColor" transform="rotate(-90 378 240)">voltage V</text>
<g class="fig-accent">
${LINE(400, 380, 600, 140, 4)}
<text x="474" y="246" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(-50 474 246)">ohmic: straight line</text>
</g>
<g class="fig-accent-2">
<path d="M400 380 Q 570 372 612 200" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6"/>
${T(520, 330, 15, 'non-ohmic', 'start', '700')}
${T(520, 350, 14, '(illustrative)')}
</g>
<g class="fig-muted">${T(500, 428, 15, 'slope = V/I = R: steeper line, bigger R', 'middle')}</g>
${T(825, 52, 22, 'a wire: R = ρL/A', 'middle', '700')}
<g class="fig-muted">
<rect x="700" y="106" width="250" height="10" rx="3" fill="currentColor" fill-opacity="0.45"/>
${DIM(700, 950, 134)}
<rect x="780" y="196" width="90" height="36" rx="5" fill="currentColor" fill-opacity="0.45"/>
${DIM(780, 870, 250)}
${LINE(884, 196, 884, 232, 2)}
</g>
${T(825, 156, 16, 'L', 'middle')}
${T(825, 180, 17, 'long and thin → large R', 'middle', '700')}
${T(825, 272, 16, 'L', 'middle')}
${T(892, 220, 16, 'A')}
${T(825, 296, 17, 'short and fat → small R', 'middle', '700')}
${T(825, 340, 16, 'ρ: material — Cu low, glass high,', 'middle')}
${T(825, 362, 16, 'saline in between', 'middle')}
<g class="fig-muted">${T(825, 400, 15, 'metals: ρ (and R) rise with temperature', 'middle')}</g>
</svg>`

/* 2 — Series vs parallel resistors (replace-table, 560×440) */
const seriesParallelSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ci-sp')}</defs>
${T(280, 26, 16, 'series: one path, one current · parallel: one voltage', 'middle', '700')}
${WIRE_BAT(60, 80, 190, 135)}
${LINE(60, 80, 100, 80)}${RES(100, 80, 180, 80)}${LINE(180, 80, 200, 80)}${RES(200, 80, 280, 80)}${LINE(280, 80, 300, 80)}
${LINE(300, 80, 300, 190)}${LINE(60, 190, 300, 190)}
${T(44, 141, 17, 'V', 'end', '700')}
${T(140, 62, 16, 'R₁', 'middle', '700')}${T(240, 62, 16, 'R₂', 'middle', '700')}
<g class="fig-accent-2">${T(140, 112, 15, 'V₁', 'middle')}${T(240, 112, 15, 'V₂', 'middle')}</g>
<g class="fig-accent">
<defs>${ARROW('arr-ci-sp-b')}</defs>
${ARR(300, 100, 300, 165, 'arr-ci-sp-b', 3.5)}
${T(312, 140, 16, 'I', 'start', '700')}
${T(330, 100, 15, 'same I through each', 'start', '700')}
</g>
<g class="fig-accent-2">${T(330, 128, 15, 'V splits: V₁ + V₂ = V')}</g>
${T(330, 158, 16, `${SUB('R', 'eq', 16)}= R₁ + R₂`, 'start', '700')}
<g class="fig-muted">${T(330, 182, 14, 'grows — bigger R takes more V')}</g>
<g class="fig-muted">${LINE(30, 228, 530, 228, 1.5)}</g>
${WIRE_BAT(60, 270, 400, 335)}
${LINE(60, 270, 270, 270)}${LINE(60, 400, 270, 400)}
${RES(180, 270, 180, 400)}${RES(270, 270, 270, 400)}
${T(44, 341, 17, 'V', 'end', '700')}
${T(158, 341, 16, 'R₁', 'end', '700')}${T(292, 341, 16, 'R₂', 'start', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-ci-sp-b2')}</defs>
${ARR(85, 270, 150, 270, 'arr-ci-sp-b2', 3.5)}
${T(118, 256, 16, 'I', 'middle', '700')}
${ARR(180, 278, 180, 304, 'arr-ci-sp-b2', 3)}${T(192, 296, 14, 'I₁')}
${ARR(270, 278, 270, 304, 'arr-ci-sp-b2', 3)}${T(282, 296, 14, 'I₂')}
${T(330, 316, 15, 'I splits: I₁ + I₂ = I')}
</g>
<g class="fig-accent-2">${T(330, 290, 15, 'same V across each', 'start', '700')}</g>
${T(330, 348, 16, `1/${SUB('R', 'eq', 16)}= 1/R₁ + 1/R₂`, 'start', '700')}
<g class="fig-muted">${T(330, 372, 14, 'shrinks below the smallest R')}${T(330, 394, 14, 'two: product over sum')}</g>
</svg>`

/* 3 — Kirchhoff: the junction rule and the loop rule on the lesson's series circuit (lead, 1000×460) */
const kirchhoffSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ci-k')}</defs>
<g class="fig-muted">${LINE(450, 30, 450, 440, 1.5)}</g>
${T(225, 52, 21, 'junction rule: current in = current out', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-ci-k-b')}</defs>
${LINE(60, 230, 225, 230, 3)}${ARR(100, 230, 180, 230, 'arr-ci-k-b', 3.5)}
${T(140, 212, 19, 'I₁', 'middle', '700')}
${LINE(95, 110, 225, 230, 3)}${ARR(118, 131, 178, 186, 'arr-ci-k-b', 3.5)}
${T(118, 168, 19, 'I₂', 'end', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-ci-k-r')}</defs>
${LINE(225, 230, 400, 230, 3)}${ARR(260, 230, 350, 230, 'arr-ci-k-r', 3.5)}
${T(305, 212, 19, 'I₃', 'middle', '700')}
</g>
<circle cx="225" cy="230" r="8" fill="currentColor"/>
<g class="fig-muted">${T(225, 268, 15, 'node', 'middle')}</g>
${T(225, 330, 22, 'I₁ + I₂ = I₃', 'middle', '700')}
${T(225, 362, 17, 'charge is conserved — none piles up at a node', 'middle')}
<g class="fig-muted">${T(225, 392, 15, 'what flows in must flow out, however many wires', 'middle')}</g>
${T(725, 52, 21, 'loop rule: gains = drops (the series example)', 'middle', '700')}
${WIRE_BAT(540, 110, 330, 220)}
${LINE(540, 110, 660, 110)}${RES(660, 110, 780, 110)}${LINE(780, 110, 900, 110)}
${RES(900, 110, 900, 330)}
${LINE(540, 330, 660, 330)}${RES(660, 330, 780, 330)}${LINE(780, 330, 900, 330)}
${T(522, 214, 16, '+', 'end')}${T(522, 240, 16, '−', 'end')}
${T(500, 226, 19, '24 V', 'end', '700')}
${T(720, 90, 18, '2 Ω', 'middle', '700')}
${T(922, 226, 18, '4 Ω', 'start', '700')}
${T(720, 364, 18, '6 Ω', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-ci-k-b2')}</defs>
${ARR(560, 110, 630, 110, 'arr-ci-k-b2', 3.5)}
${T(596, 96, 17, 'I = 2 A', 'middle', '700')}
</g>
<g class="fig-accent-2">
${T(720, 142, 17, '−4 V', 'middle', '700')}
${T(880, 226, 17, '−8 V', 'end', '700')}
${T(720, 312, 17, '−12 V', 'middle', '700')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-ci-k-m')}</defs>
<path d="M690 250 A40 40 0 1 1 750 250" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ci-k-m)"/>
${T(720, 282, 14, 'walk the loop', 'middle')}
</g>
${T(725, 400, 22, '+24 − 4 − 8 − 12 = 0', 'middle', '700')}
${T(725, 430, 16, 'energy is conserved — every volt supplied is dropped', 'middle')}
</svg>`

/* 4 — Power: the same two bulbs in series and in parallel (lead, 1000×460) */
const powerSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ci-pw')}</defs>
${T(500, 34, 22, 'P = IV = I²R = V²/R — which quantity does the circuit hold fixed?', 'middle', '700')}
<g class="fig-muted">${LINE(500, 60, 500, 440, 1.5)}</g>
${T(250, 76, 20, 'series: same I → P = I²R', 'middle', '700')}
${WIRE_BAT(80, 130, 320, 225)}
${LINE(80, 130, 174, 130)}${LINE(206, 130, 294, 130)}${LINE(326, 130, 420, 130)}
${LINE(420, 130, 420, 320)}${LINE(80, 320, 420, 320)}
<g class="fig-accent-2">${BULB_GLOW(190, 130, 24, 0.12)}${BULB_GLOW(310, 130, 40, 0.3)}</g>
${BULB(190, 130)}${BULB(310, 130)}
${T(190, 190, 18, 'R', 'middle', '700')}${T(310, 190, 18, '2R', 'middle', '700')}
<g class="fig-muted">${T(190, 212, 14, 'dim', 'middle')}${T(310, 212, 14, 'bright', 'middle')}</g>
${T(64, 231, 17, 'V', 'end', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-ci-pw-b')}</defs>
${ARR(420, 160, 420, 230, 'arr-ci-pw-b', 3.5)}
${T(432, 204, 17, 'I', 'start', '700')}
${T(250, 262, 16, 'the same current threads both', 'middle')}
</g>
${T(250, 380, 18, 'bigger R → more power (and more V)', 'middle', '700')}
<g class="fig-muted">
${T(250, 408, 15, '60 W and 100 W bulbs in series: the 60 W bulb', 'middle')}
${T(250, 430, 15, '(bigger R from its rating) is the brighter one', 'middle')}
</g>
${T(750, 76, 20, 'parallel: same V → P = V²/R', 'middle', '700')}
${WIRE_BAT(580, 130, 320, 225)}
${LINE(580, 130, 840, 130)}${LINE(580, 320, 840, 320)}
${LINE(700, 130, 700, 209)}${LINE(700, 241, 700, 320)}
${LINE(840, 130, 840, 209)}${LINE(840, 241, 840, 320)}
<g class="fig-accent-2">${BULB_GLOW(700, 225, 40, 0.3)}${BULB_GLOW(840, 225, 24, 0.12)}</g>
${BULB(700, 225)}${BULB(840, 225)}
${T(748, 231, 18, 'R', 'start', '700')}${T(872, 231, 18, '2R', 'start', '700')}
<g class="fig-muted">${T(748, 252, 14, 'bright')}${T(872, 252, 14, 'dim')}</g>
${T(564, 231, 17, 'V', 'end', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-ci-pw-b2')}</defs>
${ARR(700, 148, 700, 178, 'arr-ci-pw-b2', 3)}${T(712, 170, 14, 'big I')}
${ARR(840, 148, 840, 178, 'arr-ci-pw-b2', 3)}${T(852, 170, 14, 'small I')}
</g>
<g class="fig-accent-2">${T(750, 348, 16, 'each branch sees the full V', 'middle')}</g>
${T(750, 380, 18, 'smaller R → more power (more I)', 'middle', '700')}
<g class="fig-muted">
${T(750, 408, 15, 'household outlets are parallel: bulb ratings', 'middle')}
${T(750, 430, 15, '(60 W, 100 W) assume this fixed-V case', 'middle')}
</g>
</svg>`

/* 5 — A real battery: EMF + internal resistance, and the terminal-voltage line (lead, 1000×460) */
const emfSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ci-emf')}</defs>
${T(270, 52, 21, 'a real battery = ideal EMF ε + internal r', 'middle', '700')}
<g class="fig-muted">
${BOX(60, 90, 240, 250, 14, 2, 0.04, true)}
${T(180, 116, 15, 'inside the battery', 'middle')}
</g>
${LINE(120, 140, 120, 164)}${BATV(120, 170)}${LINE(120, 176, 120, 200)}${RES(120, 200, 120, 310)}
${LINE(120, 140, 300, 140)}${LINE(300, 140, 440, 140)}${RES(440, 140, 440, 310)}${LINE(440, 310, 120, 310)}
<circle cx="300" cy="140" r="6" fill="currentColor"/><circle cx="300" cy="310" r="6" fill="currentColor"/>
${T(102, 176, 20, 'ε', 'end', '700')}
${T(102, 262, 20, 'r', 'end', '700')}
${T(100, 150, 15, '+', 'end')}
${T(310, 128, 15, 'a (+)')}${T(310, 334, 15, 'b (−)')}
${T(462, 231, 19, 'R', 'start', '700')}
<g class="fig-muted">${T(462, 252, 14, 'load')}</g>
<g class="fig-accent">
<defs>${ARROW('arr-ci-emf-b')}</defs>
${ARR(330, 140, 410, 140, 'arr-ci-emf-b', 3.5)}
${T(370, 126, 18, 'I', 'middle', '700')}
</g>
<g class="fig-accent-2">${T(160, 262, 15, 'Ir lost here')}</g>
${T(270, 390, 21, `${SUB('V', 'ab', 21)}= ε − Ir`, 'middle', '700')}
${T(270, 422, 16, 'I = ε / (R + r): r is just one more series resistor', 'middle')}
${T(770, 52, 21, 'terminal voltage sags with current (illustrative)', 'middle', '700')}
<g class="fig-muted"><defs>${ARROW('arr-ci-emf-m')}</defs>
${ARR(620, 360, 965, 360, 'arr-ci-emf-m', 2)}
${ARR(620, 360, 620, 80, 'arr-ci-emf-m', 2)}
${LINE(620, 150, 905, 150, 1.5, true)}
</g>
${T(632, 386, 16, 'current I drawn')}
<text x="596" y="230" font-size="16" text-anchor="middle" fill="currentColor" transform="rotate(-90 596 230)">terminal voltage</text>
<g class="fig-accent">
${LINE(620, 150, 900, 360, 4)}
<circle cx="620" cy="150" r="6" fill="currentColor"/>
<text x="760" y="230" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(36.9 760 230)">discharging: V = ε − Ir, slope −r</text>
</g>
${T(770, 142, 16, 'ε: open circuit, I = 0', 'start', '700')}
${T(900, 388, 16, `${SUB('I', 'max', 16)}= ε/r`, 'middle', '700')}
<g class="fig-muted">${T(900, 410, 14, '(short circuit, V = 0)', 'middle')}</g>
<g class="fig-accent-2">
${LINE(620, 150, 700, 98, 3, true)}
${T(710, 100, 15, 'charging: V = ε + Ir', 'start', '700')}
</g>
<g class="fig-muted">${T(770, 440, 15, 'headlights dim while the starter draws a big I', 'middle')}</g>
</svg>`

/* 6 — Meters: ammeter in series, voltmeter in parallel — and the swapped ammeter as a short (lead, 1000×460) */
const metersSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ci-met')}</defs>
<g class="fig-muted">${LINE(510, 30, 510, 440, 1.5)}</g>
${T(260, 52, 21, 'wired correctly', 'middle', '700')}
${WIRE_BAT(80, 190, 330, 260)}
${LINE(80, 190, 280, 190)}${RES(280, 190, 400, 190)}${LINE(400, 190, 460, 190)}
${LINE(460, 190, 460, 330)}${LINE(80, 330, 460, 330)}
${LINE(270, 190, 270, 120)}${LINE(270, 120, 410, 120)}${LINE(410, 120, 410, 190)}
<circle cx="270" cy="190" r="5" fill="currentColor"/><circle cx="410" cy="190" r="5" fill="currentColor"/>
${T(340, 226, 17, 'R', 'middle', '700')}
${T(64, 266, 17, 'ε', 'end', '700')}
<g class="fig-accent">
${METER(170, 190, 'A')}
${T(170, 238, 15, 'in series', 'middle', '700')}
${T(170, 258, 14, 'tiny R, so it', 'middle')}${T(170, 276, 14, 'does not impede I', 'middle')}
</g>
<g class="fig-accent-2">
${METER(340, 120, 'V')}
${T(340, 90, 15, 'in parallel across R', 'middle', '700')}
${T(340, 166, 14, 'huge R, steals no I', 'middle')}
</g>
${T(260, 378, 17, 'ammeter counts the current → must sit IN the path', 'middle')}
${T(260, 406, 17, 'voltmeter compares two points → straddles the element', 'middle')}
${T(760, 52, 21, 'swapped = catastrophe', 'middle', '700')}
${WIRE_BAT(580, 190, 330, 260)}
${LINE(580, 190, 700, 190)}${RES(700, 190, 820, 190)}${LINE(820, 190, 940, 190)}
${LINE(940, 190, 940, 330)}${LINE(580, 330, 940, 330)}
${T(760, 226, 17, 'R', 'middle', '700')}
${T(564, 266, 17, 'ε', 'end', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-ci-met-r')}</defs>
${LINE(690, 190, 690, 120, 4)}${LINE(690, 120, 830, 120, 4)}${LINE(830, 120, 830, 190, 4)}
${METER(760, 120, 'A')}
${ARR(700, 120, 745, 120, 'arr-ci-met-r', 4)}
${T(760, 90, 15, 'ammeter in parallel = a ~0 Ω bypass', 'middle', '700')}
${T(760, 272, 16, 'current skips R: a short circuit', 'middle', '700')}
</g>
<circle cx="690" cy="190" r="5" fill="currentColor"/><circle cx="830" cy="190" r="5" fill="currentColor"/>
${T(760, 378, 17, 'I → ε/r: the fuse, the meter or the battery blows', 'middle')}
<g class="fig-muted">${T(760, 406, 15, 'a voltmeter in series just reads ε and passes ~no current', 'middle')}</g>
</svg>`

/* 7 — Capacitors in series vs parallel: the resistor rules flipped (replace-table, 560×440) */
const capNetSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ci-cap')}</defs>
${T(280, 26, 16, 'capacitors: series shares Q, parallel shares V', 'middle', '700')}
${WIRE_BAT(60, 80, 190, 135)}
${LINE(60, 80, 135, 80)}${CAPH(140, 80)}${LINE(145, 80, 235, 80)}${CAPH(240, 80)}${LINE(245, 80, 300, 80)}
${LINE(300, 80, 300, 190)}${LINE(60, 190, 300, 190)}
${T(44, 141, 17, 'V', 'end', '700')}
${T(128, 58, 14, '+Q', 'end')}${T(152, 58, 14, '−Q')}
${T(228, 58, 14, '+Q', 'end')}${T(252, 58, 14, '−Q')}
${T(140, 118, 16, 'C₁', 'middle', '700')}${T(240, 118, 16, 'C₂', 'middle', '700')}
<g class="fig-accent-2">${T(140, 140, 15, 'V₁', 'middle')}${T(240, 140, 15, 'V₂', 'middle')}</g>
<g class="fig-accent">${T(330, 100, 15, 'same Q on each plate', 'start', '700')}</g>
<g class="fig-accent-2">${T(330, 128, 15, 'V splits: V₁ + V₂ = V')}</g>
${T(330, 158, 16, `1/${SUB('C', 'eq', 16)}= 1/C₁ + 1/C₂`, 'start', '700')}
<g class="fig-muted">${T(330, 182, 14, 'shrinks — smaller C takes more V')}</g>
<g class="fig-muted">${LINE(30, 228, 530, 228, 1.5)}</g>
${WIRE_BAT(60, 270, 400, 335)}
${LINE(60, 270, 270, 270)}${LINE(60, 400, 270, 400)}
${LINE(180, 270, 180, 330)}${CAPV(180, 335)}${LINE(180, 340, 180, 400)}
${LINE(270, 270, 270, 330)}${CAPV(270, 335)}${LINE(270, 340, 270, 400)}
${T(44, 341, 17, 'V', 'end', '700')}
${T(156, 341, 16, 'C₁', 'end', '700')}${T(294, 341, 16, 'C₂', 'start', '700')}
${T(202, 326, 13, '+')}${T(202, 358, 13, '−')}
${T(248, 326, 13, '+', 'end')}${T(248, 358, 13, '−', 'end')}
<g class="fig-accent-2">${T(330, 290, 15, 'same V across each', 'start', '700')}</g>
<g class="fig-accent">${T(330, 318, 15, 'Q splits: Q₁ + Q₂ = Q')}</g>
${T(330, 348, 16, `${SUB('C', 'eq', 16)}= C₁ + C₂`, 'start', '700')}
<g class="fig-muted">${T(330, 372, 14, 'grows — plates side by side')}${T(330, 392, 14, 'act like one bigger plate')}</g>
</svg>`

/* 8 — The cell membrane as an RC circuit, with the charging curve (lead, 1000×460) */
const rcCurve = (x0: number, y0: number, vTop: number, tau: number, xEnd: number): [number, number][] => {
  const pts: [number, number][] = []
  for (let x = x0; x <= xEnd; x += 6) pts.push([x, y0 - (y0 - vTop) * (1 - Math.exp(-(x - x0) / tau))])
  return pts
}
const membraneSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ci-mem')}</defs>
<g class="fig-muted">${LINE(540, 30, 540, 440, 1.5)}</g>
${T(270, 52, 21, 'the membrane is a capacitor with resistors across it', 'middle', '700')}
<g class="fig-muted">
<rect x="50" y="190" width="200" height="12" rx="3" fill="currentColor" fill-opacity="0.45"/>
<rect x="50" y="228" width="200" height="12" rx="3" fill="currentColor" fill-opacity="0.45"/>
<rect x="290" y="190" width="60" height="12" rx="3" fill="currentColor" fill-opacity="0.45"/>
<rect x="290" y="228" width="60" height="12" rx="3" fill="currentColor" fill-opacity="0.45"/>
${T(200, 108, 15, 'outside', 'middle')}
${T(200, 322, 15, 'inside', 'middle')}
${T(140, 220, 13, 'lipid bilayer = insulator', 'middle')}
</g>
${T(140, 178, 17, '+  +  +  +  +  +', 'middle', '700')}
${T(140, 258, 17, '−  −  −  −  −  −', 'middle', '700')}
${T(140, 134, 15, 'conducting solution', 'middle')}
${T(140, 300, 15, 'conducting solution', 'middle')}
${RES(270, 160, 270, 270)}
${T(270, 292, 14, 'ion channel', 'middle')}
<g class="fig-muted"><defs>${ARROW('arr-ci-mem-m')}</defs>${ARR(360, 215, 395, 215, 'arr-ci-mem-m', 2)}${T(378, 200, 13, '=', 'middle')}</g>
${LINE(420, 150, 500, 150)}${LINE(420, 280, 500, 280)}
${LINE(420, 150, 420, 210)}${CAPV(420, 215)}${LINE(420, 220, 420, 280)}
${RES(500, 150, 500, 280)}
${T(420, 132, 17, 'Cₘ', 'middle', '700')}
${T(500, 132, 17, 'Rₘ', 'middle', '700')}
<g class="fig-muted">${T(460, 302, 13, 'in parallel', 'middle')}</g>
${T(270, 350, 18, 'bilayer → capacitance Cₘ · channels → resistance Rₘ', 'middle')}
${T(270, 388, 22, 'τ = RₘCₘ', 'middle', '700')}
<g class="fig-muted">${T(270, 420, 15, 'the membrane potential cannot jump — it charges over ~τ', 'middle')}</g>
${T(770, 52, 21, 'charging toward the new voltage (illustrative)', 'middle', '700')}
<g class="fig-muted"><defs>${ARROW('arr-ci-mem-m2')}</defs>
${ARR(610, 360, 965, 360, 'arr-ci-mem-m2', 2)}
${ARR(610, 360, 610, 90, 'arr-ci-mem-m2', 2)}
${LINE(610, 140, 950, 140, 1.5, true)}
${LINE(680, 360, 680, 221, 1.5, true)}${LINE(610, 221, 680, 221, 1.5, true)}
${T(955, 134, 14, 'final V', 'end')}
${T(618, 214, 14, '63%')}
</g>
${T(960, 386, 16, 'time t', 'end')}
<text x="586" y="230" font-size="16" text-anchor="middle" fill="currentColor" transform="rotate(-90 586 230)">membrane V</text>
${T(680, 384, 17, 'τ', 'middle', '700')}
<g class="fig-accent">
<path d="${PATH(rcCurve(610, 360, 140, 70, 950))}" fill="none" stroke="currentColor" stroke-width="4"/>
${T(650, 126, 15, 'normal: τ = RₘCₘ', 'start', '700')}
</g>
<g class="fig-accent-2">
<path d="${PATH(rcCurve(610, 360, 140, 170, 950))}" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6"/>
${T(760, 300, 15, 'channels blocked: τ longer', 'start', '700')}
${T(760, 320, 14, '(Rₘ up — slower integration)')}
</g>
<g class="fig-muted">${T(785, 428, 15, 'myelin thickens the dielectric: Cₘ ↓, τ shorter, faster signals', 'middle')}</g>
</svg>`

/* 9 — The two-step network collapsed inside-out and walked back (after, 1000×460). Lesson numbers. */
const netTitle = (x: number, text: string) => T(x, 60, 18, text, 'middle', '700')
const networkSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ci-net')}</defs>
${netTitle(175, '① the circuit')}
${WIRE_BAT(60, 120, 260, 190)}
${LINE(60, 120, 85, 120)}${RES(85, 120, 175, 120)}${LINE(175, 120, 280, 120)}
${LINE(60, 260, 280, 260)}
${RES(200, 120, 200, 260)}${RES(280, 120, 280, 260)}
<circle cx="200" cy="120" r="5" fill="currentColor"/><circle cx="200" cy="260" r="5" fill="currentColor"/>
${T(46, 196, 16, '12 V', 'end', '700')}
${T(130, 100, 16, '2 Ω', 'middle', '700')}
${T(184, 196, 16, '6 Ω', 'end', '700')}${T(296, 196, 16, '3 Ω', 'start', '700')}
${T(175, 300, 16, '6 ∥ 3 = 18/9 = 2 Ω', 'middle', '700')}
<g class="fig-muted"><defs>${ARROW('arr-ci-net-m')}</defs>
${ARR(298, 55, 342, 55, 'arr-ci-net-m', 2.5)}${T(320, 42, 12, 'collapse', 'middle')}
${ARR(648, 55, 692, 55, 'arr-ci-net-m', 2.5)}${T(670, 42, 12, 'collapse', 'middle')}
</g>
${netTitle(500, '② series: 2 + 2 = 4 Ω')}
${WIRE_BAT(390, 120, 260, 190)}
${LINE(390, 120, 420, 120)}${RES(420, 120, 510, 120)}${LINE(510, 120, 620, 120)}
${RES(620, 120, 620, 260)}${LINE(390, 260, 620, 260)}
${T(376, 196, 16, '12 V', 'end', '700')}
${T(465, 100, 16, '2 Ω', 'middle', '700')}
${T(636, 190, 16, '2 Ω', 'start', '700')}
<g class="fig-muted">${T(636, 210, 13, '(the pair)')}</g>
${T(500, 300, 16, 'I = 12 / 4 = 3 A', 'middle', '700')}
${netTitle(840, '③ one resistor')}
${WIRE_BAT(730, 120, 260, 190)}
${LINE(730, 120, 950, 120)}${RES(950, 120, 950, 260)}${LINE(730, 260, 950, 260)}
${T(716, 196, 16, '12 V', 'end', '700')}
${T(966, 196, 16, '4 Ω', 'start', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-ci-net-b')}</defs>
${ARR(790, 120, 890, 120, 'arr-ci-net-b', 3.5)}
${T(840, 104, 16, 'I = 3 A', 'middle', '700')}
</g>
${T(840, 300, 16, 'check: 3 A × 4 Ω = 12 V', 'middle', '700')}
<g class="fig-muted">${LINE(40, 326, 960, 326, 1.5)}</g>
${T(40, 356, 18, 'walk back out', 'start', '700')}
${T(40, 388, 17, 'the 2 Ω drops 3 A × 2 Ω = 6 V  →  6 V is left across the pair')}
<g class="fig-accent">${T(40, 418, 17, 'I₆ = 6/6 = 1 A,  I₃ = 6/3 = 2 A  →  junction check: 1 + 2 = 3 A', 'start', '700')}</g>
<g class="fig-muted">${T(40, 446, 15, 'the 3 Ω branch carries twice the current of the 6 Ω — inverse to resistance, always')}</g>
</svg>`

export const mcatCircuitsFigures: DeckFigurePlacement[] = [
  {
    at: 'Resistance and Ohm',
    mode: 'lead',
    figure: {
      svg: ohmSvg,
      alt:
        'Three panels. Left: a single loop with a battery V on the left and a resistor R (zigzag) on the right; a blue arrow I runs along the top wire — V = IR: push V, flow I, opposition R; double V gives double I, double R gives half I. Middle: a graph of voltage V against current I; a straight blue line through the origin is labelled ohmic, its slope is R (steeper line, bigger R); a red dashed curve bending upward is a non-ohmic element (illustrative). Right: R = ρL/A as two grey wires — a long thin one (length L) has large R, a short fat one (cross-section A) has small R; ρ is a material property, low for copper, high for glass, in between for saline; in metals ρ rises with temperature.',
      caption: 'Ohm’s law as one loop, as the slope of a V–I line (non-ohmic curve illustrative), and as wire geometry R = ρL/A.',
    },
    blocks: [
      '- $V = IR$: the resistor turns a push ($V$) into a flow ($I$); on a $V$–$I$ graph the slope is $R$',
      '- Wires: $R = \\rho L/A$ — longer or thinner means more $R$; $\\rho$ is the material (rises with $T$ in metals)',
    ],
  },
  {
    at: 'Series vs. Parallel Resistors',
    mode: 'replace-table',
    figure: {
      svg: seriesParallelSvg,
      alt:
        'Top: a battery V with two resistors R₁ and R₂ one after the other on the same wire; a single blue current arrow I: the same current flows through each, the voltage splits (V₁ + V₂ = V) and R_eq = R₁ + R₂ grows, the bigger resistance taking more voltage. Bottom: the same battery with R₁ and R₂ on two side-by-side branches between the same two wires; the current I splits into I₁ and I₂ (I₁ + I₂ = I) while each branch sees the same V; 1/R_eq = 1/R₁ + 1/R₂, so R_eq shrinks below the smallest branch; for two, product over sum.',
      caption: 'Series: one current, voltages add, R_eq grows; parallel: one voltage, currents add, R_eq drops below the smallest branch.',
    },
    blocks: [
      '- **Series** (one path): same $I$, voltages add, $R_{eq} = R_1 + R_2 + \\cdots$ grows',
      '- **Parallel** (same two nodes): same $V$, currents add, $1/R_{eq} = 1/R_1 + 1/R_2 + \\cdots$ shrinks',
      '- Two in parallel: $R_{eq} = R_1R_2/(R_1 + R_2)$, always below the smallest branch',
      '- Adding a parallel path always lets MORE total current flow',
    ],
  },
  {
    at: 'Kirchhoff',
    mode: 'lead',
    figure: {
      svg: kirchhoffSvg,
      alt:
        'Left: two blue currents I₁ and I₂ flow into a node and one red current I₃ flows out — junction rule I₁ + I₂ = I₃, charge is conserved so none piles up at a node, whatever the number of wires. Right: the lesson’s series circuit, a 24 V battery driving 2 Ω, 4 Ω and 6 Ω resistors around one loop with I = 2 A; the drops −4 V, −8 V and −12 V are written in red beside each resistor and a grey arrow says walk the loop; +24 − 4 − 8 − 12 = 0 — energy is conserved, every volt supplied is dropped, and the biggest resistance takes the biggest share.',
      caption: 'Kirchhoff’s rules are conservation laws: charge at a junction (in = out), energy around a loop (gains = drops) — the 24 V example.',
    },
    blocks: [
      '- **Junction rule:** current in = current out at every node (charge is conserved)',
      '- **Loop rule:** around any closed loop the gains equal the drops — $24 = 4 + 8 + 12$ V in the series example',
    ],
  },
  {
    at: 'Electrical Power',
    mode: 'lead',
    figure: {
      svg: powerSvg,
      alt:
        'Title: P = IV = I²R = V²/R — which quantity does the circuit hold fixed? Left: bulbs R and 2R in series on one loop with a single blue current I; the 2R bulb has the large red glow and the R bulb a faint one — same I so P = I²R, bigger R means more power; note that 60 W and 100 W bulbs in series make the 60 W bulb (bigger R from its rating) the brighter one. Right: the same two bulbs on parallel branches across one battery; a big current arrow enters the R branch and a small one the 2R branch, and now the R bulb glows brightly — same V so P = V²/R, smaller R means more power; household outlets are parallel, so bulb ratings assume this fixed-V case.',
      caption: 'The same two bulbs swap brightness: series (same I) favours the bigger R via I²R, parallel (same V) the smaller R via V²/R.',
    },
    blocks: [
      '- $P = IV = I^2R = V^2/R$ — one law; pick the form whose two variables the circuit holds fixed',
      '- Series (same $I$): bigger $R$ wins via $I^2R$ · parallel (same $V$): smaller $R$ wins via $V^2/R$',
    ],
  },
  {
    at: 'EMF vs. Terminal Voltage',
    mode: 'lead',
    figure: {
      svg: emfSvg,
      alt:
        'Left: a dashed box labelled inside the battery contains an ideal EMF ε in series with a small internal resistance r (Ir lost here); its terminals a (+) and b (−) connect to an external load R with current I along the top wire. V_ab = ε − Ir; I = ε/(R + r), r is just one more series resistor. Right: a graph of terminal voltage against the current drawn (illustrative): a blue line starts at ε on the vertical axis (open circuit, I = 0) and falls with slope −r (discharging, V = ε − Ir) to zero at I_max = ε/r (short circuit); a red dashed line rises above ε for charging, V = ε + Ir. Headlights dim while the starter draws a big current.',
      caption: 'A real battery is an ideal EMF plus a series internal resistance: V_terminal = ε − Ir sags with the current drawn (illustrative).',
    },
    blocks: [
      '- Real battery = ideal $\\varepsilon$ + internal $r$ in series: $V_{terminal} = \\varepsilon - Ir$ discharging',
      '- $= \\varepsilon$ at zero current, $\\varepsilon + Ir$ while charging; a short draws $I_{max} = \\varepsilon/r$',
    ],
  },
  {
    at: 'Meters',
    mode: 'lead',
    figure: {
      svg: metersSvg,
      alt:
        'Left, wired correctly: a loop with a battery ε and a resistor R; a blue ammeter A sits in the wire in series (tiny resistance, so it does not impede the current) and a red voltmeter V hangs on two leads in parallel across R (huge resistance, so it steals no current). An ammeter counts the current so it must sit in the path; a voltmeter compares two points so it straddles the element. Right, swapped: the ammeter is wired in parallel across R; its near-zero resistance is a bypass, so the current skips R — a short circuit, the current heads toward ε/r and the fuse, the meter or the battery blows. A voltmeter in series just reads ε and passes almost no current.',
      caption: 'Ammeter in series (low R), voltmeter in parallel (high R); swapped, the parallel ammeter is a short circuit across R.',
    },
    blocks: [
      '- **Ammeter:** in SERIES, very low $R$ — wired in parallel it is a short circuit',
      '- **Voltmeter:** in PARALLEL across the element, very high $R$ — steals negligible current',
    ],
  },
  {
    at: 'Capacitor Networks',
    mode: 'replace-table',
    figure: {
      svg: capNetSvg,
      alt:
        'Top: a battery V with two capacitors C₁ and C₂ one after the other on the same wire, each plate pair marked +Q and −Q: the same Q sits on each, the voltage splits (V₁ + V₂ = V) and 1/C_eq = 1/C₁ + 1/C₂ shrinks, the smaller capacitor taking more voltage. Bottom: C₁ and C₂ on side-by-side branches across the same battery: the same V across each, the charge splits (Q₁ + Q₂ = Q) and C_eq = C₁ + C₂ grows — plates side by side act like one bigger plate.',
      caption: 'The resistor rules flipped: series capacitors share Q and add reciprocally, parallel capacitors share V and add directly.',
    },
    blocks: [
      '- **Series:** same $Q$ on every capacitor, voltages add, $1/C_{eq} = 1/C_1 + 1/C_2 + \\cdots$ (shrinks)',
      '- **Parallel:** same $V$, charges add, $C_{eq} = C_1 + C_2 + \\cdots$ (grows) — side-by-side plates = one bigger plate',
      '- Exactly OPPOSITE to resistors; series: the SMALLER $C$ takes the LARGER voltage share',
    ],
  },
  {
    at: 'Strategy 4',
    mode: 'lead',
    figure: {
      svg: membraneSvg,
      alt:
        'Left: a schematic membrane — two grey bands (the lipid bilayer, an insulator) between the outside and inside conducting solutions, with + charges lined up outside and − charges inside and a zigzag ion channel crossing the bilayer. Beside it the equivalent circuit: a capacitor Cₘ in parallel with a resistor Rₘ. Bilayer gives capacitance Cₘ, channels give resistance Rₘ, τ = RₘCₘ, and the membrane potential cannot jump — it charges over about τ. Right: a graph of membrane voltage against time (illustrative): a blue curve rises steeply then levels off toward the final V, reaching 63% at t = τ; a red dashed curve rises more slowly when channels are blocked (Rₘ up, τ longer, slower integration). Myelin thickens the dielectric, so Cₘ falls, τ shortens and signals travel faster.',
      caption: 'The membrane as an RC circuit: bilayer = capacitor, open channels = parallel resistors, charging with τ = RₘCₘ (illustrative).',
    },
    blocks: [
      '- Bilayer = capacitor $C_m$, channels = parallel resistors $R_m$: the membrane charges with $\\tau = R_mC_m$',
      '- Block channels → $R_m$ up, $\\tau$ longer (slower integration); myelin → $C_m$ down, faster signals',
    ],
  },
  {
    at: 'Worked Example — A Two-Step Network',
    mode: 'after',
    figure: {
      svg: networkSvg,
      alt:
        'Three circuit drawings left to right. One: a 12 V battery, a 2 Ω resistor on the top wire, then a node where 6 Ω and 3 Ω branches sit in parallel; 6 ∥ 3 = 18/9 = 2 Ω. Two, after collapsing the pair: 12 V with 2 Ω and 2 Ω in series, 2 + 2 = 4 Ω, so I = 12/4 = 3 A. Three: 12 V across one 4 Ω resistor with a blue current arrow I = 3 A; check 3 A × 4 Ω = 12 V. Below, walk back out: the 2 Ω drops 3 A × 2 Ω = 6 V, so 6 V is left across the pair; I₆ = 6/6 = 1 A and I₃ = 6/3 = 2 A, junction check 1 + 2 = 3 A; the 3 Ω branch carries twice the current of the 6 Ω, inverse to resistance.',
      caption: 'The two-step network collapsed inside-out (6 ∥ 3 = 2 Ω, 2 + 2 = 4 Ω, I = 3 A) and walked back out to 1 A and 2 A.',
    },
    blocks: [
      '- Collapse inside-out: $6 \\parallel 3 = 2\\;\\Omega$, then $2 + 2 = 4\\;\\Omega$, so $I = 12/4 = 3$ A',
      '- Walk back: the series $2\\;\\Omega$ drops 6 V, leaving 6 V across the pair → $I_6 = 1$ A, $I_3 = 2$ A',
    ],
  },
]
