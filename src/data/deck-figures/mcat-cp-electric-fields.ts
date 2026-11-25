import type { DeckFigurePlacement } from './index'
import { SVG_OPEN, ARROW, T, BOX, ARR, LINE, DIM, CHARGE, RADIAL, G, CIRC, SIGNS, RING, PATH, MASK, pointField, nearAny, traceLine, fieldPath, type Field, type Src } from './mcat-cp-electrostatics'

/**
 * Electrostatics Part 2: Electric Fields (MCAT C/P) — figures for the in-class
 * deck. The field-of-a-point-charge and gel figures were drawn 2026-10-29 for
 * the old one-topic Electrostatics deck; the rest were drawn 2026-11-25 when
 * the topic became three. Helpers and colour rules are in
 * mcat-cp-electrostatics.ts (red +, blue −, field lines in the text colour, a
 * net field red, guides grey).
 *
 * Every drawing is ours, drawn from the concept — no textbook, prep-company or
 * AAMC figure was copied. Where the physics fixes the picture it is COMPUTED
 * in code, not sketched: the field lines of two equal charges, of +2Q with −Q,
 * of a dipole and of a conducting sphere in a uniform field are traced
 * numerically from the field itself (traceLine); null points sit at
 * r₁/r₂ = √(|q₁|/|q₂|); the worked-example arrows are drawn to scale from
 * their components; the electron's path is a true parabola (deflection
 * exaggerated, and labelled so).
 *
 * The only numbers drawn are the lesson's own: +8.0 and +2.0 nC 0.60 m apart →
 * 800 and 200 N/C, net 600 N/C, null point at 0.40 m (450 N/C each way),
 * 9.6 × 10⁻¹⁷ N on a Cl⁻; two +2.0 nC charges at (0, ±0.30 m), P at 0.40 m →
 * 0.50 m, 72 N/C each, 57.6 and 43.2 N/C parts, 115.2 ≈ 1.2 × 10² N/C (not
 * 144), 86 N/C with one sign flipped; 1836; 910 N/C, 4.0 cm, 2.0 × 10⁷ m/s →
 * 1.5 × 10⁻¹⁶ N, 1.6 × 10¹⁴ m/s², 2.0 × 10⁻⁹ s, 3.2 × 10⁻⁴ m; weight
 * 9 × 10⁻³⁰ N. Marker ids: arr-ef-<figure>-<colour> (the two older figures
 * keep arr-es-fld / arr-es-gel).
 */

/* 1 — Field lines of + and − point charges; force on a test charge in a uniform field (lead, 1000×460) */
const fieldSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-fld')}</defs>
<g class="fig-muted">${LINE(340, 30, 340, 440, 1.5)}${LINE(670, 30, 670, 440, 1.5)}</g>
${T(170, 40, 22, '+Q: lines point away', 'middle', '700')}
${RADIAL(170, 235, 36, 150, 8, 'arr-es-fld', true)}
${CHARGE(170, 235, 26, '+')}
${T(170, 415, 17, 'denser lines = stronger field', 'middle')}
<g class="fig-muted">${T(170, 442, 15, 'the field is there with or without a test charge', 'middle')}</g>
${T(505, 40, 22, '−Q: lines point toward', 'middle', '700')}
${RADIAL(505, 235, 36, 150, 8, 'arr-es-fld', false)}
${CHARGE(505, 235, 26, '−')}
${T(505, 415, 17, 'E = F/q — force per unit + charge', 'middle')}
<g class="fig-muted">${T(505, 442, 15, 'N/C = V/m', 'middle')}</g>
${T(825, 40, 22, 'force on a test charge', 'middle', '700')}
${T(825, 80, 18, 'uniform E →', 'middle', '700')}
${[100, 150, 200, 250, 300, 350].map((y) => ARR(700, y, 955, y, 'arr-es-fld', 1.5)).join('\n')}
${CHARGE(760, 125, 16, '+')}
<g class="fig-accent-2">
<defs>${ARROW('arr-es-fld-r')}</defs>
${ARR(778, 125, 870, 125, 'arr-es-fld-r', 3.5)}
${T(882, 131, 18, 'F', 'start', '700')}
${T(825, 392, 17, '+q: force along E', 'middle', '700')}
</g>
${CHARGE(880, 275, 16, '−')}
<g class="fig-accent">
<defs>${ARROW('arr-es-fld-b')}</defs>
${ARR(862, 275, 770, 275, 'arr-es-fld-b', 3.5)}
${T(756, 281, 18, 'F', 'end', '700')}
${T(825, 418, 17, '−q: force opposite E', 'middle', '700')}
</g>
<g class="fig-muted">${T(825, 444, 15, 'same |F| = qE for the same |q|', 'middle')}</g>
</svg>`

/* 11 — Gel electrophoresis: uniform field, DNA runs to the anode, gel sorts by size (lead, 1000×460) */
const lane = (cx: number, bandY: number, label: string) =>
  `<rect x="${cx - 28}" y="88" width="56" height="14" fill="none" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">${T(cx, 75, 14, label, 'middle')}${ARR(cx, 106, cx, bandY, 'arr-es-gel-m', 2, true)}</g>
<rect x="${cx - 28}" y="${bandY}" width="56" height="10" rx="2" fill="currentColor" fill-opacity="0.85"/>`
const gelSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-gel')}</defs>
<g class="fig-muted"><defs>${ARROW('arr-es-gel-m')}</defs></g>
<g class="fig-accent">
<rect x="180" y="44" width="300" height="14" rx="4" fill="currentColor" fill-opacity="0.6"/>
${T(330, 36, 17, '− electrode (cathode)', 'middle', '700')}
</g>
<g class="fig-accent-2">
<rect x="180" y="420" width="300" height="14" rx="4" fill="currentColor" fill-opacity="0.6"/>
${T(330, 452, 17, '+ electrode (anode)', 'middle', '700')}
</g>
${BOX(180, 80, 300, 334, 8, 2.5, 0.04)}
${ARR(205, 400, 205, 110, 'arr-es-gel', 3)}
${T(214, 258, 18, 'E', 'start', '700')}
${lane(260, 160, 'large')}
${lane(340, 250, 'medium')}
${lane(420, 350, 'small')}
${T(510, 110, 21, 'same force per charge, drag sorts by size', 'start', '700')}
${T(510, 150, 18, 'phosphate backbone → DNA uniformly negative')}
${T(510, 180, 18, 'F = qE toward the + electrode (anode)')}
${T(510, 230, 18, 'drag in the gel grows with size →')}
${T(510, 260, 18, 'small fragments travel farthest in the same time')}
${T(510, 310, 18, 'SDS-PAGE: the SDS coat gives proteins a uniform')}
${T(510, 340, 18, 'negative charge-to-mass → again sorted by size')}
<g class="fig-muted">${T(510, 390, 16, 'the field pulls; the gel sieves')}</g>
</svg>`


/* 3 — Superposition of fields: add with signs on a line; symmetry off it (lead, 1000×460) */
const E_NEAR = 100
const E_FAR = +(E_NEAR * (120 / 200) ** 2).toFixed(1) // 1/r²: the charge 200 away vs the one 120 away
const TRI = RING(750, 222, 118, 3, -90)
const superFieldsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ef-sp')}</defs>
${G('muted', `${LINE(500, 30, 500, 440, 1.5)}${LINE(290, 196, 290, 86, 1.5, true)}`)}
${T(250, 44, 22, 'on a line: add with signs', 'middle', '700')}
${CHARGE(90, 210, 20, '+', '+Q')}${CHARGE(410, 210, 20, '+', '+Q')}
<circle cx="290" cy="210" r="5" fill="currentColor"/>${T(290, 238, 17, 'P', 'middle', '700')}
${ARR(290, 170, 290 + E_FAR, 170, 'arr-ef-sp', 3.5)}${T(290 + E_FAR + 10, 176, 16, 'E₁ (far charge)', 'start')}
${ARR(290, 132, 290 - E_NEAR, 132, 'arr-ef-sp', 3.5)}${T(290 - E_NEAR - 10, 138, 16, 'E₂ (near charge)', 'end')}
<g class="fig-accent-2"><defs>${ARROW('arr-ef-sp-r')}</defs>${ARR(290, 94, 290 - (E_NEAR - E_FAR), 94, 'arr-ef-sp-r', 4)}${T(290 + 12, 100, 17, 'net = E₂ − E₁', 'start', '700')}</g>
${T(250, 300, 17, 'each field: k|q| / r², as if the other were not there', 'middle')}
${T(250, 334, 17, 'opposite arrows subtract; same-way arrows add', 'middle', '700')}
${G('muted', `${T(250, 372, 15, 'give each arrow a sign from the way it POINTS,', 'middle')}${T(250, 394, 15, 'not from the sign of its charge', 'middle')}`)}
${T(750, 44, 22, 'off a line: use symmetry', 'middle', '700')}
${G('muted', `<polygon points="${TRI.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/>`)}
${TRI.map(([x, y]) => CHARGE(Math.round(x), Math.round(y), 18, '+')).join('')}
${TRI.map(([x, y]) => { const d = Math.hypot(750 - x, 222 - y); return ARR(750, 222, +(750 + (58 * (750 - x)) / d).toFixed(1), +(222 + (58 * (222 - y)) / d).toFixed(1), 'arr-ef-sp', 3.5) }).join('')}
<circle cx="750" cy="222" r="5" fill="currentColor"/>
${T(750, 372, 17, 'three equal arrows 120° apart: E = 0 at the centre', 'middle', '700')}
${T(750, 400, 16, 'otherwise: x- and y-parts, then E = √(Ex² + Ey²)', 'middle')}
${G('muted', T(750, 428, 15, 'then F = qE net for any charge put at the point', 'middle'))}
</svg>`

/* 4 — Null points: the four cases on a line, positions from r₁/r₂ = √(|q₁|/|q₂|) (lead, 1000×460) */
const NL = 220
const nullBetween = (q1: number, q2: number) => (NL * Math.sqrt(q1)) / (Math.sqrt(q1) + Math.sqrt(q2)) // measured from charge 1
const nullOutside = (q1: number, q2: number) => (NL * Math.sqrt(q1)) / (Math.sqrt(q2) - Math.sqrt(q1)) // beyond charge 1 (the smaller)
const nullRow = (y: number, title: string, x1: number, s2: '+' | '−', big: boolean, labels: [string, string], zero: number | null, where: string, why: string) =>
  `${T(24, y + 6, 17, title, 'start', '700')}${G('muted', LINE(205, y, 690, y, 1.5))}
${MASK(x1, y, 13)}${MASK(x1 + NL, y, big ? 19 : 13)}${CHARGE(x1, y, 13, '+', labels[0])}${CHARGE(x1 + NL, y, big ? 19 : 13, s2, labels[1])}
${zero === null ? '' : G('accent-2', `<circle cx="${zero.toFixed(1)}" cy="${y}" r="6" fill="currentColor"/>${T(+zero.toFixed(1), y - 14, 16, 'E = 0', 'middle', '700')}`)}
${T(712, y - 2, 16, where, 'start', '700')}${G('muted', T(712, y + 20, 15, why, 'start'))}`
const nullSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(500, 40, 22, 'null points: the two fields are opposite AND equal', 'middle', '700')}
${nullRow(104, 'like, equal', 345, '+', false, ['q', 'q'], 345 + nullBetween(1, 1), 'the midpoint', 'equal sizes at equal distances')}
${nullRow(192, 'like, unequal', 345, '+', true, ['q', '4q'], 345 + nullBetween(1, 4), 'between, nearer the SMALLER', 'nearness makes up for less charge')}
${nullRow(280, 'opposite, unequal', 440, '−', true, ['q', '−4q'], 440 - nullOutside(1, 4), 'outside, beyond the SMALLER', 'between them the fields add')}
${nullRow(368, 'opposite, equal', 345, '−', false, ['q', '−q'], null, 'nowhere', 'the nearer charge always wins')}
${T(500, 440, 16, 'set the sizes equal: k|q₁| / r₁² = k|q₂| / r₂²  →  r₁ / r₂ = √(|q₁| / |q₂|), the SQUARE ROOT of the charge ratio', 'middle')}
</svg>`

/* 5 — Worked example: net field at the midpoint and the null point on a line (after, 1000×460) */
const XF = (x: number) => 150 + 1000 * x
const EF = 0.2 // px per N/C
const X_NULL = (0.6 * Math.sqrt(8)) / (Math.sqrt(8) + Math.sqrt(2)) // 0.40 m
const lineFieldSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ef-ln')}</defs>
${T(500, 40, 22, 'the field at the midpoint, and where it vanishes', 'middle', '700')}
${ARR(80, 250, 880, 250, 'arr-ef-ln', 2)}${T(892, 256, 17, 'x', 'start', '700')}
${MASK(XF(0), 250, 20)}${MASK(XF(0.6), 250, 14)}${CHARGE(XF(0), 250, 20, '+')}${CHARGE(XF(0.6), 250, 14, '+')}
${G('accent-2', `${T(XF(0), 296, 16, '+8.0 nC', 'middle', '700')}${T(XF(0.6), 296, 16, '+2.0 nC', 'middle', '700')}`)}
${T(XF(0), 318, 15, 'x = 0', 'middle')}${T(XF(0.6), 318, 15, '0.60 m', 'middle')}
<circle cx="${XF(0.3)}" cy="250" r="5" fill="currentColor"/>${T(XF(0.3), 280, 15, 'midpoint, 0.30 m', 'middle')}
${G('muted', LINE(XF(0.3), 240, XF(0.3), 100, 1.5, true))}
${ARR(XF(0.3), 204, XF(0.3) + 800 * EF, 204, 'arr-ef-ln', 3.5)}${T(XF(0.3) + 800 * EF + 12, 210, 16, '800 N/C from the +8.0 nC', 'start')}
${ARR(XF(0.3), 164, XF(0.3) - 200 * EF, 164, 'arr-ef-ln', 3.5)}${T(XF(0.3) - 200 * EF - 12, 170, 16, '200 N/C from the +2.0 nC', 'end')}
<g class="fig-accent-2"><defs>${ARROW('arr-ef-ln-r')}</defs>${ARR(XF(0.3), 116, XF(0.3) + 600 * EF, 116, 'arr-ef-ln-r', 4.5)}${T(XF(0.3) + 600 * EF + 12, 122, 17, 'net 600 N/C, toward +x', 'start', '700')}
<circle cx="${XF(X_NULL).toFixed(1)}" cy="250" r="6" fill="currentColor"/>${T(+XF(X_NULL).toFixed(1), 280, 16, 'E = 0', 'middle', '700')}${T(+XF(X_NULL).toFixed(1), 300, 15, `x = ${X_NULL.toFixed(2)} m`, 'middle')}</g>
${G('muted', `${DIM(XF(0), +XF(X_NULL).toFixed(1), 346)}${T((XF(0) + XF(X_NULL)) / 2, 368, 15, 'r₁ = 0.40 m', 'middle')}${DIM(+XF(X_NULL).toFixed(1), XF(0.6), 346)}${T((XF(X_NULL) + XF(0.6)) / 2, 368, 15, 'r₂ = 0.20 m', 'middle')}`)}
${T(500, 408, 16, 'null point: r₁ / r₂ = √(8.0 / 2.0) = 2 and r₁ + r₂ = 0.60 m — 450 N/C from each charge, opposite ways', 'middle')}
${T(500, 436, 16, 'a Cl⁻ at the midpoint: F = eE = (1.6 × 10⁻¹⁹)(600) = 9.6 × 10⁻¹⁷ N toward −x, AGAINST the field', 'middle')}
</svg>`

/* 6 — Worked example: two equal charges, a point off the line (after, 1000×460) */
const SM = 350 // px per metre
const EP = 1.4 // px per N/C
const P_X = 110 + 0.4 * SM, P_Y = 235
const EX = 72 * (0.4 / 0.5) * EP, EY = 72 * (0.3 / 0.5) * EP // 57.6 and 43.2 N/C, drawn to scale
const symmetrySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ef-sy')}</defs>
${G('muted', LINE(520, 30, 520, 440, 1.5))}
${T(260, 40, 21, 'two equal charges, a point off the line', 'middle', '700')}
${G('muted', `${LINE(110, 235 - 0.3 * SM, P_X, P_Y, 1.5, true)}${LINE(110, 235 + 0.3 * SM, P_X, P_Y, 1.5, true)}${LINE(110, 235 - 0.3 * SM, 110, 235 + 0.3 * SM, 1.5)}${LINE(110, 235, P_X, P_Y, 1.5)}
${T(98, 190, 15, '0.30 m', 'end')}${T(98, 290, 15, '0.30 m', 'end')}${T(176, 256, 15, '0.40 m', 'middle')}${T(196, 168, 15, '0.50 m', 'start')}
${LINE(+(P_X + EX).toFixed(1), +(P_Y - EY).toFixed(1), +(P_X + 2 * EX).toFixed(1), P_Y, 1.5, true)}${LINE(+(P_X + EX).toFixed(1), +(P_Y + EY).toFixed(1), +(P_X + 2 * EX).toFixed(1), P_Y, 1.5, true)}`)}
${CHARGE(110, 235 - 0.3 * SM, 16, '+')}${CHARGE(110, 235 + 0.3 * SM, 16, '+')}
${G('accent-2', `${T(136, 235 - 0.3 * SM - 16, 16, '+2.0 nC', 'start', '700')}${T(136, 235 + 0.3 * SM + 28, 16, '+2.0 nC', 'start', '700')}`)}
${ARR(P_X, P_Y, +(P_X + EX).toFixed(1), +(P_Y + EY).toFixed(1), 'arr-ef-sy', 3)}${ARR(P_X, P_Y, +(P_X + EX).toFixed(1), +(P_Y - EY).toFixed(1), 'arr-ef-sy', 3)}
${T(+(P_X + EX).toFixed(1) - 4, +(P_Y - EY).toFixed(1) - 14, 16, '72 N/C', 'middle', '700')}${T(+(P_X + EX).toFixed(1) - 4, +(P_Y + EY).toFixed(1) + 26, 16, '72 N/C', 'middle', '700')}
<circle cx="${P_X}" cy="${P_Y}" r="5" fill="currentColor"/>${T(P_X - 6, P_Y - 12, 17, 'P', 'end', '700')}
<g class="fig-accent-2"><defs>${ARROW('arr-ef-sy-r')}</defs>${ARR(P_X, P_Y, +(P_X + 2 * EX).toFixed(1) - 4, P_Y, 'arr-ef-sy-r', 4)}${T(+(P_X + 2 * EX).toFixed(1) + 8, P_Y - 12, 16, 'net', 'start', '700')}${T(+(P_X + 2 * EX).toFixed(1) + 8, P_Y + 10, 16, '115 N/C', 'start', '700')}</g>
${T(750, 40, 21, 'add the components', 'middle', '700')}
${T(540, 104, 16, 'each field: 72 N/C, away from its own charge')}
${T(540, 146, 16, 'x-parts: 57.6 + 57.6 = 115.2 N/C')}
${T(540, 174, 16, 'y-parts: 43.2 up and 43.2 down cancel')}
${G('accent-2', T(540, 216, 18, 'E net ≈ 1.2 × 10² N/C along +x', 'start', '700'))}
${T(540, 244, 16, 'not 72 + 72 = 144 N/C: the arrows are not parallel')}
${G('muted', LINE(540, 274, 960, 274, 1.5))}
${T(540, 312, 17, 'part (c): the lower charge becomes −2.0 nC', 'start', '700')}
${T(540, 340, 16, 'its field now points TOWARD it, so the x-parts')}
${T(540, 364, 16, 'cancel and the y-parts add:')}
${T(540, 396, 17, 'E net = 2(43.2) ≈ 86 N/C along −y', 'start', '700')}
${G('muted', T(540, 426, 15, 'that pair is an electric dipole'))}
</svg>`

/* 7 — Field lines traced from the field: two equal + charges; +2Q with −Q (lead, 1000×460) */
const linesFrom = (src: readonly Src[], from: Src, n: number, offsetDeg: number, box: readonly [number, number, number, number], marker: string, at = 0.5) =>
  RING(from.x, from.y, 20, n, offsetDeg)
    .map(([x, y]) => fieldPath(traceLine(pointField(src), x, y, 1, box, nearAny(src.filter((s) => s !== from), 16)), marker, at))
    .join('\n')
const TWO_PLUS: Src[] = [{ x: 165, y: 225, q: 1 }, { x: 335, y: 225, q: 1 }]
const TWO_ONE: Src[] = [{ x: 670, y: 225, q: 2 }, { x: 850, y: 225, q: -1 }]
const BOX_L = [30, 72, 470, 378] as const
const BOX_R = [530, 72, 970, 378] as const
const fieldLinesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ef-fl')}</defs>
${G('muted', LINE(500, 30, 500, 392, 1.5))}
${T(250, 44, 22, 'two equal + charges', 'middle', '700')}
${TWO_PLUS.map((s) => linesFrom(TWO_PLUS, s, 8, 22.5, BOX_L, 'arr-ef-fl', 0.55)).join('\n')}
${TWO_PLUS.map((s) => CHARGE(s.x, s.y, 18, '+')).join('')}
${G('accent-2', `<circle cx="250" cy="225" r="5" fill="currentColor"/>${T(250, 252, 15, 'E = 0', 'middle', '700')}`)}
${T(250, 412, 16, 'the lines bend apart; the empty midpoint is the null point', 'middle')}
${T(750, 44, 22, '+2Q and −Q', 'middle', '700')}
${linesFrom(TWO_ONE, TWO_ONE[0], 8, 22.5, BOX_R, 'arr-ef-fl', 0.5)}
${CHARGE(670, 225, 22, '+')}${CHARGE(850, 225, 16, '−')}
${G('accent-2', T(640, 231, 16, '+2Q', 'end', '700'))}${G('accent', T(872, 231, 16, '−Q', 'start', '700'))}
${T(750, 412, 16, '8 lines leave +2Q, 4 end on −Q; the rest run off to infinity', 'middle')}
${G('muted', T(500, 442, 15, 'lines start on +, end on −, and never cross · E is tangent to the line · denser lines = stronger field', 'middle'))}
</svg>`

/* 8 — Dipoles: the traced field pattern; a dipole in a uniform field (lead, 1000×460) */
const DIPOLE: Src[] = [{ x: 170, y: 220, q: 1 }, { x: 330, y: 220, q: -1 }]
const inBox = (pts: readonly (readonly [number, number])[], b: readonly [number, number, number, number]) => pts.every(([x, y]) => x >= b[0] && x <= b[2] && y >= b[1] && y <= b[3])
const DIPOLE_BOX = [28, 70, 472, 372] as const
const dipoleLines = RING(170, 220, 20, 12, 15)
  .map(([x, y]) => traceLine(pointField(DIPOLE), x, y, 1, [-2000, -2000, 3000, 3000], nearAny([DIPOLE[1]], 16)))
  .filter((pts) => inBox(pts, DIPOLE_BOX))
  .map((pts) => fieldPath(pts, 'arr-ef-dp', 0.5))
  .join('\n')
const dipoleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ef-dp')}</defs>
<g class="fig-muted">${LINE(500, 30, 500, 440, 1.5)}</g>
${T(250, 44, 22, 'the field of a dipole', 'middle', '700')}
${dipoleLines}
${CHARGE(170, 220, 18, '+')}${CHARGE(330, 220, 18, '−')}
${G('accent-2', T(142, 226, 17, '+q', 'end', '700'))}${G('accent', T(358, 226, 17, '−q', 'start', '700'))}
${T(250, 404, 16, 'lines leave +q, loop round and end on −q', 'middle')}
${T(250, 430, 16, 'dipole moment p = qd, drawn from −q to +q', 'middle', '700')}
${T(750, 44, 22, 'a dipole in a uniform field', 'middle', '700')}
${[90, 140, 190, 240, 290, 340].map((y) => ARR(540, y, 955, y, 'arr-ef-dp', 1.5)).join('\n')}
${T(963, 246, 18, 'E', 'start', '700')}
<g class="fig-muted">
${LINE(676, 225, 824, 225, 3, true)}
${T(664, 231, 16, '−', 'middle', '700')}${T(836, 231, 16, '+', 'middle', '700')}
${T(880, 219, 15, 'aligned', 'start')}
</g>
${LINE(690, 280, 810, 170, 5)}
<path d="M733.6 270.1 A48 48 0 0 1 702.7 233.3" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-ef-dp)"/>
${T(752, 276, 18, 'τ', 'start', '700')}
${CHARGE(810, 170, 18, '+')}${CHARGE(690, 280, 18, '−')}
<g class="fig-accent-2">
<defs>${ARROW('arr-ef-dp-r')}</defs>
${ARR(830, 170, 900, 170, 'arr-ef-dp-r', 3.5)}
${T(912, 176, 18, 'F = qE', 'start', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-ef-dp-b')}</defs>
${ARR(670, 280, 600, 280, 'arr-ef-dp-b', 3.5)}
${T(592, 286, 18, 'F = qE', 'end', '700')}
</g>
${T(750, 384, 17, 'net force = 0: the two forces are equal and opposite', 'middle')}
${T(750, 410, 17, 'torque τ = pE sin θ turns p into line with E', 'middle', '700')}
${G('muted', T(750, 436, 15, 'a polar molecule such as water swings round but does not drift', 'middle'))}
</svg>`

/* 9 — Conductors in equilibrium: charge on the surface, E = 0 inside; shielding (lead, 1000×460) */
const SHELL = { x: 750, y: 212, r: 78 }
/** A conducting sphere in a uniform field along +x: the applied field plus the field of the induced dipole. */
const shieldField: Field = (x, y) => {
  const dx = x - SHELL.x, dy = y - SHELL.y
  const r2 = dx * dx + dy * dy, r = Math.sqrt(r2) || 1e-9
  const k = SHELL.r ** 3 / (r2 * r)
  return [1 + k * ((3 * dx * dx) / r2 - 1), k * ((3 * dx * dy) / r2)]
}
const SHIELD_BOX = [545, 72, 955, 352] as const
const shieldLines = [-126, -90, -54, -18, 18, 54, 90, 126]
  .map((off) => traceLine(shieldField, SHIELD_BOX[0] + 1, SHELL.y + off, 1, SHIELD_BOX, (x, y) => Math.hypot(x - SHELL.x, y - SHELL.y) < SHELL.r + 2, 2))
  .map((pts) => {
    const [lx, ly] = pts[pts.length - 1]
    const hit = Math.hypot(lx - SHELL.x, ly - SHELL.y) < SHELL.r + 4
    // A line that ends on the shell restarts on the far side as its mirror image (the field is symmetric about the shell's centre plane).
    return hit ? `${fieldPath(pts, 'arr-ef-cd', 0.45)}${fieldPath(pts.map(([x, y]) => [2 * SHELL.x - x, y] as [number, number]).reverse(), 'arr-ef-cd', 0.6)}` : fieldPath(pts, 'arr-ef-cd', 0.25)
  })
  .join('\n')
const conductorSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ef-cd')}</defs>
${G('muted', LINE(500, 30, 500, 440, 1.5))}
${T(250, 44, 22, 'a charged conductor', 'middle', '700')}
${CIRC(250, 212, 72, 2.5, 0.08)}
${RADIAL(250, 212, 80, 142, 8, 'arr-ef-cd', true)}
${SIGNS('+', RING(250, 212, 58, 8, 0), 18)}
${T(250, 218, 18, 'E = 0', 'middle', '700')}
${T(250, 392, 16, 'the excess charge sits on the OUTER surface', 'middle', '700')}
${T(250, 418, 16, 'outside: |E| = k|Q| / r², with r from the CENTRE', 'middle')}
${G('muted', T(250, 444, 15, 'the field leaves the surface at right angles', 'middle'))}
${T(750, 44, 22, 'a hollow conductor shields its inside', 'middle', '700')}
${shieldLines}
${CIRC(SHELL.x, SHELL.y, SHELL.r, 2.5, 0.22)}
<circle class="fig-bg" cx="${SHELL.x}" cy="${SHELL.y}" r="${SHELL.r - 18}" stroke="currentColor" stroke-width="2.5"/>
${SIGNS('−', RING(SHELL.x, SHELL.y, SHELL.r - 9, 3, 150, 60), 17)}${SIGNS('+', RING(SHELL.x, SHELL.y, SHELL.r - 9, 3, -30, 60), 15)}
${T(SHELL.x, SHELL.y + 2, 18, 'E = 0', 'middle', '700')}${G('muted', T(SHELL.x, SHELL.y + 24, 15, 'shielded', 'middle'))}
${T(750, 392, 16, 'charges on the metal rearrange until they', 'middle')}
${T(750, 418, 16, 'cancel the outside field everywhere within', 'middle', '700')}
${G('muted', T(750, 444, 15, 'a car body in a lightning storm; a metal-walled recording room', 'middle'))}
</svg>`

/* 10 — Charges in a uniform field: equal forces, and a parabola when fired across (lead, 1000×460) */
const plate = (x: number, y: number, w: number, sign: '+' | '−') =>
  G(sign === '+' ? 'accent-2' : 'accent', `<rect x="${x}" y="${y}" width="${w}" height="14" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>${T(x + w + 10, y + 13, 17, `${sign} plate`, 'start', '700')}`)
const PARA_C = 150 / 300 ** 2
const paraPath = Array.from({ length: 31 }, (_, i) => { const x = 570 + 10 * i; return `${i ? 'L' : 'M'}${x} ${(150 + PARA_C * (x - 570) ** 2).toFixed(1)}` }).join(' ')
const uniformSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ef-un')}</defs>
${G('muted', LINE(500, 30, 500, 440, 1.5))}
${T(250, 44, 22, 'same force, opposite ways', 'middle', '700')}
${plate(50, 78, 340, '+')}${plate(50, 338, 340, '−')}
${[80, 150, 220, 290, 360].map((x) => ARR(x, 98, x, 332, 'arr-ef-un', 1.5)).join('')}
${T(372, 220, 18, 'E', 'start', '700')}
${CHARGE(115, 185, 15, '+')}
<g class="fig-accent-2"><defs>${ARROW('arr-ef-un-r')}</defs>${ARR(115, 202, 115, 272, 'arr-ef-un-r', 3.5)}${T(115, 160, 15, 'proton', 'middle', '700')}${T(127, 250, 16, 'eE', 'start', '700')}</g>
${CHARGE(255, 250, 15, '−')}
<g class="fig-accent"><defs>${ARROW('arr-ef-un-b')}</defs>${ARR(255, 233, 255, 163, 'arr-ef-un-b', 3.5)}${T(255, 288, 15, 'electron', 'middle', '700')}${T(267, 196, 16, 'eE', 'start', '700')}</g>
${T(250, 388, 16, 'F = qE: the same size at every point between the plates', 'middle', '700')}
${T(250, 414, 16, 'a = qE / m: the electron’s is about 1836 times larger', 'middle')}
${G('muted', T(250, 440, 15, 'force depends on charge, not on mass', 'middle'))}
${T(750, 44, 22, 'fired across: a parabola', 'middle', '700')}
${plate(570, 78, 300, '+')}${plate(570, 338, 300, '−')}
${[610, 680, 750, 820].map((x) => ARR(x, 98, x, 332, 'arr-ef-un', 1.5)).join('')}
${G('muted', `${LINE(570, 150, 880, 150, 1.5, true)}${T(884, 146, 15, 'no field', 'start')}`)}
<g class="fig-accent-2"><defs>${ARROW('arr-ef-un-r2')}</defs>${PATH(`M520 150 L570 150 ${paraPath.replace(/^M/, 'L')}`, 3.5, false, 'arr-ef-un-r2')}${ARR(695, 188, 695, 240, 'arr-ef-un-r2', 3)}${T(707, 234, 16, 'qE', 'start', '700')}</g>
${CHARGE(520, 150, 13, '+')}${T(540, 128, 16, 'v', 'middle', '700')}
${T(750, 388, 16, 'steady sideways speed, steady acceleration along E', 'middle', '700')}
${T(750, 414, 16, 't = L / v, then y = ½at² — like a ball thrown sideways', 'middle')}
${G('muted', T(750, 440, 15, 'a circular path belongs to a magnetic field', 'middle'))}
</svg>`

/* 12 — Worked example: an electron crossing a uniform field (after, 1000×460) */
const CR_C = 70 / 440 ** 2
const crossPath = Array.from({ length: 23 }, (_, i) => { const x = 130 + 20 * i; return `L${x} ${(225 - CR_C * (x - 130) ** 2).toFixed(1)}` }).join(' ')
const CR_SLOPE = 2 * CR_C * 440
const crossingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ef-cr')}</defs>
${T(350, 44, 22, 'an electron crossing a uniform field', 'middle', '700')}
${G('accent-2', `<rect x="130" y="96" width="440" height="14" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>${T(350, 88, 16, '+ plate', 'middle', '700')}`)}
${G('accent', `<rect x="130" y="340" width="440" height="14" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>${T(350, 374, 16, '− plate', 'middle', '700')}`)}
${[170, 260, 440, 530].map((x) => ARR(x, 116, x, 334, 'arr-ef-cr', 1.5)).join('')}
${T(350, 306, 16, 'E = 910 N/C', 'middle', '700')}
${G('muted', `${LINE(130, 225, 660, 225, 1.5, true)}${DIM(130, 570, 404)}${T(350, 428, 16, 'L = 4.0 cm', 'middle')}
<path d="M604 225 L604 155" fill="none" stroke="currentColor" stroke-width="2"/><path d="M598 225 L610 225 M598 155 L610 155" fill="none" stroke="currentColor" stroke-width="2"/>${T(588, 250, 15, 'not to scale', 'start')}`)}
<g class="fig-accent"><defs>${ARROW('arr-ef-cr-b')}</defs>${PATH(`M40 225 L130 225 ${crossPath} L650 ${(155 - CR_SLOPE * 80).toFixed(1)}`, 3.5, false, 'arr-ef-cr-b')}
${ARR(350, 200, 350, 140, 'arr-ef-cr-b', 3)}${T(362, 160, 16, 'F = eE', 'start', '700')}
${T(616, 196, 16, 'y', 'start', '700')}</g>
${CHARGE(40, 225, 13, '−')}${T(40, 262, 15, 'v = 2.0 × 10⁷ m/s', 'start')}
${T(690, 104, 17, 'F = eE ≈ 1.5 × 10⁻¹⁶ N, upward', 'start', '700')}
${G('muted', T(690, 128, 15, 'against E; weight ≈ 9 × 10⁻³⁰ N: ignore it'))}
${T(690, 176, 17, 'a = eE / m = 1.6 × 10¹⁴ m/s²', 'start', '700')}
${T(690, 224, 17, 't = L / v = 2.0 × 10⁻⁹ s', 'start', '700')}
${G('muted', T(690, 248, 15, 'the sideways speed never changes'))}
${T(690, 296, 17, 'y = ½at² = 3.2 × 10⁻⁴ m', 'start', '700')}
${T(690, 320, 16, 'about 0.3 mm, toward the + plate')}
${G('muted', `${T(690, 368, 15, 'a parabola, like a ball thrown')}${T(690, 390, 15, 'sideways, only “falling” up')}`)}
</svg>`

export const mcatElectricFieldsFigures: DeckFigurePlacement[] = [
  {
    at: 'The Electric Field',
    exact: true,
    mode: 'lead',
    figure: {
      svg: fieldSvg,
      alt:
        'Three panels. Left: a positive point charge with eight radial field lines whose arrowheads point away from it; denser lines mean a stronger field, and the field is there with or without a test charge. Middle: a negative point charge with eight radial lines whose arrowheads point toward it; E = F/q is the force per unit positive charge, N/C = V/m. Right: six evenly spaced horizontal field lines of a uniform field pointing right; a positive test charge has a red force arrow F pointing right, along E, and a negative test charge has a blue force arrow F pointing left, opposite E — the same magnitude F = qE for the same size of charge.',
      caption: 'Field lines leave positive charges and enter negative ones; a positive charge is pushed along the field and a negative charge against it.',
    },
    blocks: [
      '- $\\vec E = \\vec F/q_0$, so $\\vec F = q\\vec E$; for a point charge $|E| = k|Q|/r^2$, away from $+$, toward $-$',
      '- A $+$ charge is pushed along $\\vec E$, a $-$ charge against it — same $|F| = |q|E$ for the same $|q|$',
    ],
  },
  {
    at: 'Superposition of Fields',
    mode: 'lead',
    figure: {
      svg: superFieldsSvg,
      alt:
        'Left, on a line: two equal positive charges with a point P between them, nearer the right-hand one. At P a short arrow E₁ from the far charge points right, a longer arrow E₂ from the near charge points left, and a red arrow, net = E₂ − E₁, points left. Each field is k|q|/r², found as if the other charge were not there; opposite arrows subtract and same-way arrows add; give each arrow a sign from the way it points, not from the sign of its charge. Right, off a line, use symmetry: three equal positive charges at the corners of a dashed equilateral triangle, and at its centre three equal arrows 120° apart, each pointing away from one corner — E = 0 at the centre. Otherwise split into x- and y-parts and use E = √(Ex² + Ey²); then F = qE net for any charge put at the point.',
      caption: 'Superposition: find each charge’s field as if it were alone, then add the arrows — with signs on a line, with components or symmetry off it.',
    },
    blocks: [
      '- $\\vec E_{net} = \\vec E_1 + \\vec E_2 + \\dots$ — each $k|q|/r^2$, each found as if the others were not there',
      '- On a line add with signs; off a line add components, and look for symmetry first',
    ],
  },
  {
    at: 'Null Points',
    mode: 'lead',
    figure: {
      svg: nullSvg,
      alt:
        'Four number lines, each with two charges and, where one exists, a red dot marked E = 0. Like, equal (+q and +q): the dot is at the midpoint — equal sizes at equal distances. Like, unequal (+q and +4q): the dot is between them, one third of the way from the smaller charge — between, nearer the smaller; nearness makes up for less charge. Opposite, unequal (+q and −4q): the dot is outside the pair on the side of +q, as far beyond it as the charges are apart — outside, beyond the smaller; between them the fields add. Opposite, equal (+q and −q): no dot — nowhere; the nearer charge always wins. Underneath: set the sizes equal, k|q₁|/r₁² = k|q₂|/r₂², so r₁/r₂ = √(|q₁|/|q₂|), the square root of the charge ratio.',
      caption: 'Null points drawn to scale: the midpoint for equal like charges, between and nearer the smaller for unequal like charges, beyond the smaller for unequal opposite charges, and nowhere for an equal and opposite pair.',
    },
    blocks: [
      '- Step 1, the region: the two fields must point **opposite** ways there',
      '- Step 2, the sizes: $r_1/r_2 = \\sqrt{|q_1|/|q_2|}$ — the square root of the charge ratio',
    ],
  },
  {
    at: 'Worked Example — Net Field and Null Point on a Line',
    mode: 'after',
    figure: {
      svg: lineFieldSvg,
      alt:
        'An x-axis with a +8.0 nC charge at x = 0 and a +2.0 nC charge at 0.60 m. Above the midpoint at 0.30 m: an arrow of 800 N/C from the +8.0 nC pointing toward +x, a shorter arrow of 200 N/C from the +2.0 nC pointing toward −x, and a red arrow for their sum, net 600 N/C toward +x. A red dot on the axis at x = 0.40 m is marked E = 0, with grey dimension lines r₁ = 0.40 m back to the larger charge and r₂ = 0.20 m on to the smaller. Null point: r₁/r₂ = √(8.0/2.0) = 2 and r₁ + r₂ = 0.60 m — 450 N/C from each charge, opposite ways. A Cl⁻ at the midpoint: F = eE = (1.6 × 10⁻¹⁹)(600) = 9.6 × 10⁻¹⁷ N toward −x, against the field.',
      caption: 'The worked example drawn to scale: 800 N/C and 200 N/C oppose at the midpoint to leave 600 N/C, and the field vanishes at x = 0.40 m, twice as far from the larger charge as from the smaller.',
    },
    blocks: [
      '- Midpoint: $800 - 200 = 600$ N/C toward $+x$; a Cl⁻ there feels $9.6 \\times 10^{-17}$ N toward $-x$',
      '- Null point: $r_1/r_2 = \\sqrt{8.0/2.0} = 2$ with $r_1 + r_2 = 0.60$ m → $x = 0.40$ m',
    ],
  },
  {
    at: 'Worked Example — Symmetry Off the Line',
    mode: 'after',
    figure: {
      svg: symmetrySvg,
      alt:
        'Left: two +2.0 nC charges, one 0.30 m above and one 0.30 m below the origin, and a point P 0.40 m to the right on the axis between them; dashed lines of 0.50 m join each charge to P. From P two arrows of 72 N/C point away from the charges, one up and to the right and one down and to the right; a dashed parallelogram closes onto a red arrow along +x labelled net 115 N/C. Right, add the components: each field is 72 N/C, away from its own charge; x-parts 57.6 + 57.6 = 115.2 N/C; y-parts 43.2 up and 43.2 down cancel; E net ≈ 1.2 × 10² N/C along +x, not 72 + 72 = 144 N/C, because the arrows are not parallel. Part (c): the lower charge becomes −2.0 nC; its field now points toward it, so the x-parts cancel and the y-parts add, E net = 2(43.2) ≈ 86 N/C along −y. That pair is an electric dipole.',
      caption: 'The worked example drawn to scale: two 72 N/C fields from a 3-4-5 triangle add to about 1.2 × 10² N/C along +x because their y-parts cancel and their x-parts add.',
    },
    blocks: [
      '- $72$ N/C each; y-parts cancel, x-parts add: $2(57.6) \\approx 1.2 \\times 10^2$ N/C along $+x$',
      '- Flip one sign and the x-parts cancel instead: $2(43.2) \\approx 86$ N/C along $-y$ — a dipole',
    ],
  },
  {
    at: 'Field Lines',
    exact: true,
    mode: 'lead',
    figure: {
      svg: fieldLinesSvg,
      alt:
        'Two field-line maps traced from the field itself. Left, two equal positive charges: eight lines leave each charge; the ones that head toward the other charge bend away and run up or down off the picture, leaving an empty spot at the midpoint, marked in red E = 0 — the lines bend apart; the empty midpoint is the null point. Right, +2Q and −Q: eight lines leave the larger positive charge; the four on the side facing the negative charge curve in and end on it, the other four run off the picture — 8 lines leave +2Q, 4 end on −Q; the rest run off to infinity. Underneath: lines start on +, end on −, and never cross; E is tangent to the line; denser lines mean a stronger field.',
      caption: 'Field lines traced numerically: two equal positive charges leave a null point between them, and twice as many lines leave +2Q as end on −Q.',
    },
    blocks: [
      '- Lines start on $+$, end on $-$, never cross; $\\vec E$ is tangent to the line; denser = stronger',
      '- The number of lines on a charge is proportional to its size: 8 leave $+2Q$, only 4 end on $-Q$',
    ],
  },
  {
    at: 'Dipoles',
    mode: 'lead',
    figure: {
      svg: dipoleSvg,
      alt:
        'Left, the field of a dipole, traced from the field itself: lines leave a positive charge +q, loop round above and below, and end on a negative charge −q to its right; between the charges they run from + to −. Lines leave +q, loop round and end on −q; the dipole moment p = qd is drawn from −q to +q. Right, a dipole in a uniform field: horizontal field lines pointing right, labelled E, with a tilted rod carrying a positive charge at its upper-right end and a negative charge at its lower-left end. A red force F = qE on the positive end points right and a blue force F = qE on the negative end points left; a curved arrow τ shows the rod turning toward a dashed horizontal outline labelled aligned. Net force = 0, since the two forces are equal and opposite; the torque τ = pE sin θ turns p into line with E; a polar molecule such as water swings round but does not drift.',
      caption: 'A dipole’s field lines run from +q round to −q; in a uniform field the two ends feel equal and opposite forces, so there is no net force, only a torque that lines p up with E.',
    },
    blocks: [
      '- Dipole moment $p = qd$, from $-q$ to $+q$; its field lines leave $+q$ and end on $-q$',
      '- Uniform field: zero net force, torque $\\tau = pE\\sin\\theta$ turning $\\vec p$ toward $\\vec E$',
    ],
  },
  {
    at: 'Conductors in Electrostatic Equilibrium',
    mode: 'lead',
    figure: {
      svg: conductorSvg,
      alt:
        'Left, a charged conductor: a metal sphere with eight plus signs spaced evenly just inside its surface, E = 0 written in its interior, and eight straight field lines leaving the surface radially outward — the excess charge sits on the outer surface; outside, |E| = k|Q|/r² with r from the centre; the field leaves the surface at right angles. Right, a hollow conductor shields its inside: a metal shell in a field that points left to right. The field lines, traced from the field itself, bend in to meet the left of the shell at right angles, where minus signs have gathered, and leave again from the right, where plus signs have gathered; lines farther out curve around it. The hollow interior is empty of lines and labelled E = 0, shielded — charges on the metal rearrange until they cancel the outside field everywhere within, as in a car body in a lightning storm or a metal-walled recording room.',
      caption: 'A conductor in equilibrium: excess charge on the outer surface, zero field in the metal, field lines meeting the surface at right angles — and a hollow one shields whatever is inside it.',
    },
    blocks: [
      '- $E = 0$ inside the metal; excess charge on the outer surface; field $\\perp$ to the surface',
      '- Outside a charged sphere $|E| = k|Q|/r^2$ from the centre; a hollow conductor shields its interior',
    ],
  },
  {
    at: 'Charges in a Uniform Field',
    mode: 'lead',
    figure: {
      svg: uniformSvg,
      alt:
        'Left, same force, opposite ways: a red positive plate above a blue negative plate with evenly spaced field lines pointing down, labelled E. A proton between them has a red force arrow eE pointing down, toward the negative plate; an electron has a blue force arrow eE of the same length pointing up, toward the positive plate. F = qE is the same size at every point between the plates; a = qE/m, and the electron’s is about 1836 times larger; force depends on charge, not on mass. Right, fired across, a parabola: the same plates with a positive charge entering from the left with velocity v; its red path curves steadily downward toward the negative plate, away from a dashed straight line labelled no field, with a force arrow F = qE pointing down. Steady sideways speed, steady acceleration along E; t = L/v, then y = ½at², like a ball thrown sideways; a circular path belongs to a magnetic field.',
      caption: 'Between charged plates the force qE is the same everywhere: a proton and an electron feel equal and opposite forces, and a charge fired across the field follows a parabola.',
    },
    blocks: [
      '- $F = qE$ and $a = qE/m$ are constant between the plates: same force on p⁺ and e⁻, different $a$',
      '- Fired across the field: constant sideways speed, $t = L/v$, deflection $y = \\tfrac{1}{2}at^2$ — a parabola',
    ],
  },
  {
    at: 'Gel Electrophoresis',
    mode: 'lead',
    figure: {
      svg: gelSvg,
      alt:
        'A vertical gel with a blue negative electrode (cathode) along the top and a red positive electrode (anode) along the bottom; an arrow E points upward from the + anode to the − cathode; negative DNA moves against E, toward the anode. Three wells at the top, labelled large, medium and small, each with a dashed travel arrow down to a band: the large fragment has moved least, the medium one farther, the small one farthest. Right: same force per charge, drag sorts by size — the phosphate backbone makes DNA uniformly negative, so F = qE drives it toward the positive electrode; drag in the gel grows with size, so small fragments travel farthest in the same time; in SDS-PAGE the SDS coat gives proteins a uniform negative charge-to-mass, so they are again sorted by size. The field pulls; the gel sieves.',
      caption: 'Gel electrophoresis: a uniform field pulls negatively charged DNA toward the anode with the same force per charge, and the gel’s size-dependent drag does the sorting.',
    },
    blocks: [
      '- DNA’s phosphate backbone is uniformly negative, so $F = qE$ drives it toward the $+$ electrode (anode)',
      '- The field gives the same force per charge; gel drag grows with size, so small fragments travel farthest',
    ],
  },
  {
    at: 'Worked Example — Electron Crossing a Uniform Field',
    mode: 'after',
    figure: {
      svg: crossingSvg,
      alt:
        'Two horizontal plates, the red positive plate on top and the blue negative plate below, with field lines pointing down labelled E = 910 N/C and a dimension line L = 4.0 cm along their length. An electron enters from the left midway between them at v = 2.0 × 10⁷ m/s; its blue path curves upward in a parabola toward the positive plate, with an upward force arrow F = eE, and leaves above a dashed straight line by a deflection y (not to scale). Right: F = eE ≈ 1.5 × 10⁻¹⁶ N, upward, against E — the weight, about 9 × 10⁻³⁰ N, is ignored; a = eE/m = 1.6 × 10¹⁴ m/s²; t = L/v = 2.0 × 10⁻⁹ s, since the sideways speed never changes; y = ½at² = 3.2 × 10⁻⁴ m, about 0.3 mm toward the + plate; a parabola, like a ball thrown sideways, only “falling” up.',
      caption: 'The worked example drawn: the electron is pushed against the field with constant acceleration for the 2.0 ns it spends between the plates, and leaves 0.32 mm nearer the positive plate.',
    },
    blocks: [
      '- $F = eE \\approx 1.5 \\times 10^{-16}$ N upward; $a = eE/m = 1.6 \\times 10^{14}$ m/s²',
      '- $t = L/v = 2.0 \\times 10^{-9}$ s → $y = \\tfrac{1}{2}at^2 = 3.2 \\times 10^{-4}$ m toward the $+$ plate',
    ],
  },
]
