import type { DeckFigurePlacement } from './index'

/**
 * General Chemistry (7-part survey, MCAT C/P) — figures for the in-class
 * deck. Authored 2026-10-29.
 *
 * The dedicated decks draw isotopes, orbitals, aufbau and the periodic trends
 * (Atomic Structure); the mole hub, limiting reagent and gas laws
 * (Stoichiometry); the first law, P–V work, enthalpy profiles, Hess, the
 * Gibbs 2×2 and the phase diagram (Thermodynamics); rate laws, order plots,
 * Arrhenius and mechanism profiles (Kinetics); Q vs K, Le Châtelier, the pH
 * ruler, titration curves and buffers (Acid–Base); cells (Electrochemistry);
 * decay types (the Electricity survey). So this survey draws DIFFERENT views
 * from its own sections: the ΔEN ruler with the three bond pictures, formal
 * charge worked on the lesson's CO₂, the VSEPR shape grid, bond dipoles
 * cancelling (CO₂, BF₃) or not (H₂O, NH₃), the IMF ladder with the lesson's
 * boiling-point calls, dissolution as a hydration picture beside the
 * solubility rules, the four colligative effects as panels, the
 * initial-rates worked example as bars, and oxidation states worked on
 * Cr₂O₇²⁻ and KMnO₄.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. The only numbers shown are the lesson's own (ΔEN
 * cut-offs 0.4 / 1.7; bond angles 180°, 120°, 109.5°, ~107°, ~104.5°, 90°;
 * K_b = 0.512 and K_f = 1.86 °C·kg/mol, ΔT_f = 1.86 °C for 0.50 m NaCl; the
 * three initial-rate experiments and k = 0.20 M⁻²s⁻¹; Cr +6 and Mn +7;
 * 100 °C vs ~−80 °C for water) or the formal-charge arithmetic they imply.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-gc-<figure>[-colour]).
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
const rtext = (x: number, y: number, size: number, s: string, attrs = '') => txt(x, y, size, s, ` text-anchor="end"${attrs}`)
const bold = ' font-weight="700"'
const line = (x1: number, y1: number, x2: number, y2: number, marker?: string, w = 2.5, extra = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
/** Open path (elbows, arcs), optional arrowhead. */
const path = (d: string, marker?: string, w = 2.5, extra = '') =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
const dot = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`
const panel = (x: number, y: number, w: number, h: number) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>`
const r1 = (n: number) => Math.round(n * 10) / 10
/** Subscript inside a <text> (the trailing space restores the baseline). */
const sb = (s: string, size = 11, dy = 4) => `<tspan dy="${dy}" font-size="${size}">${s}</tspan><tspan dy="-${dy}"> </tspan>`

/** An atom: a circle with its symbol centred. */
const atom = (cx: number, cy: number, r: number, label: string, size = 16, opacity = 0.1) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/>${ctext(cx, cy + size * 0.36, size, label, bold)}`
/** An atom on an opaque disc, so arrows drawn underneath stop at its edge. */
const atomS = (cx: number, cy: number, r: number, label: string, size = 16) =>
  `<circle class="fig-bg" cx="${cx}" cy="${cy}" r="${r}"/>${atom(cx, cy, r, label, size)}`
/** A lone-pair lobe (ellipse, long axis along rot = 0 → vertical). */
const lobe = (cx: number, cy: number, rot: number, rx = 9, ry = 15) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${rot} ${cx} ${cy})" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>`
/** A water molecule: O at (cx, cy), the two H's toward −y before rotation by rot degrees. */
const water = (cx: number, cy: number, rot: number) =>
  `<g transform="translate(${cx} ${cy}) rotate(${rot})"><line x1="0" y1="0" x2="-7" y2="-9" stroke="currentColor" stroke-width="2"/><line x1="0" y1="0" x2="7" y2="-9" stroke="currentColor" stroke-width="2"/><circle cx="-7" cy="-9" r="4.5" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="7" cy="-9" r="4.5" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><circle cx="0" cy="0" r="7.5" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/></g>`
/** A pair of electron dots. */
const pair = (x1: number, y1: number, x2: number, y2: number) => dot(x1, y1, 3.5) + dot(x2, y2, 3.5)

/* 1 — ΔEN ruler and the three bond pictures (replace-table, 560×440) */
const EN_X = (v: number) => r1(50 + (v / 2.2) * 470)
const bondTypeSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-gc-bond')}</defs>
${txt(20, 30, 18, 'ΔEN decides how evenly the electron pair is shared', bold)}
<g class="fig-muted"><rect x="${EN_X(0)}" y="74" width="${EN_X(0.4) - EN_X(0)}" height="26" fill="currentColor" fill-opacity="0.18" stroke="none"/>${ctext((EN_X(0) + EN_X(0.4)) / 2, 66, 12, 'nonpolar covalent', bold)}</g>
<g class="fig-accent"><rect x="${EN_X(0.4)}" y="74" width="${EN_X(1.7) - EN_X(0.4)}" height="26" fill="currentColor" fill-opacity="0.14" stroke="none"/>${ctext((EN_X(0.4) + EN_X(1.7)) / 2, 66, 12, 'polar covalent', bold)}</g>
<g class="fig-accent-2"><rect x="${EN_X(1.7)}" y="74" width="${EN_X(2.2) - EN_X(1.7)}" height="26" fill="currentColor" fill-opacity="0.14" stroke="none"/>${ctext((EN_X(1.7) + EN_X(2.2)) / 2, 66, 12, 'ionic', bold)}</g>
${line(EN_X(0), 100, EN_X(2.2) + 6, 100, 'arr-gc-bond', 2.5)}
${[0, 0.4, 1.7].map((v) => `${line(EN_X(v), 94, EN_X(v), 106, undefined, 2)}${ctext(EN_X(v), 122, 13, String(v), bold)}`).join('')}
${txt(EN_X(2.2) - 14, 122, 13, 'ΔEN', bold)}
<g class="fig-muted">${panel(20, 138, 168, 262)}${panel(196, 138, 168, 262)}${panel(372, 138, 168, 262)}</g>
${atom(82, 214, 32, 'H', 18, 0.08)}${atom(130, 214, 32, 'H', 18, 0.08)}
<g class="fig-accent">${pair(106, 207, 106, 221)}</g>
${ctext(104, 272, 13, 'pair sits in the middle', bold)}
<g class="fig-muted">${ctext(104, 292, 13, 'shared evenly')}${ctext(104, 322, 14, 'H₂, Cl₂, C–H', bold)}${ctext(104, 346, 12, 'ΔEN 0 – 0.4')}</g>
${atom(246, 214, 24, 'H', 16, 0.08)}${atom(310, 214, 38, 'Cl', 18, 0.08)}
<g class="fig-accent">${pair(286, 207, 286, 221)}<defs>${ARROW('arr-gc-bond-b')}</defs>${line(236, 262, 326, 262, 'arr-gc-bond-b', 3)}</g>
${ctext(246, 176, 14, 'δ+', bold)}${ctext(310, 162, 14, 'δ−', bold)}
${ctext(280, 286, 13, 'pair pulled toward Cl', bold)}
<g class="fig-muted">${ctext(280, 305, 13, 'partial charges, a dipole')}${ctext(280, 330, 14, 'H–Cl, H–O, C–O', bold)}${ctext(280, 352, 12, 'ΔEN 0.5 – 1.7')}</g>
${atom(418, 214, 24, 'Na⁺', 15, 0.08)}${atom(492, 214, 38, 'Cl⁻', 18, 0.08)}
<g class="fig-accent-2"><defs>${ARROW('arr-gc-bond-r')}</defs>${path('M426 184 Q456 134 486 170', 'arr-gc-bond-r', 2.5)}${ctext(456, 142, 13, 'e⁻', bold)}</g>
${ctext(456, 286, 13, 'electron handed over', bold)}
<g class="fig-muted">${ctext(456, 305, 13, 'ions attract: a lattice')}${ctext(456, 330, 14, 'NaCl, MgO', bold)}${ctext(456, 352, 12, 'ΔEN above 1.7')}</g>
<g class="fig-muted">${ctext(280, 426, 13, 'bond polarity is set here — molecular polarity also needs the shape')}</g>
</svg>`

/* 2 — Formal charge worked on the lesson's CO₂ (lead, 1000×460) */
const formalChargeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 34, 22, 'Formal charge on the lesson’s CO₂ — the all-zero structure is the one to draw', bold)}
${box(500, 70, 560, 38, 'FC = V − L − ½B   (valence e⁻ − lone-pair e⁻ − half the bonding e⁻)', 16, 700, 0.1)}
<g class="fig-muted">${panel(40, 100, 440, 300)}${panel(520, 100, 440, 300)}</g>
<g class="fig-accent">${ctext(260, 128, 18, 'O=C=O — two double bonds', bold)}</g>
${line(176, 198, 236, 198, undefined, 3)}${line(176, 212, 236, 212, undefined, 3)}${line(284, 198, 344, 198, undefined, 3)}${line(284, 212, 344, 212, undefined, 3)}
${ctext(150, 217, 34, 'O', bold)}${ctext(260, 217, 34, 'C', bold)}${ctext(370, 217, 34, 'O', bold)}
${pair(122, 198, 122, 212)}${pair(142, 176, 158, 176)}${pair(398, 198, 398, 212)}${pair(362, 176, 378, 176)}
<g class="fig-muted">${ctext(150, 246, 12, '4 lone, 4 bonding')}${ctext(260, 246, 12, '0 lone, 8 bonding')}${ctext(370, 246, 12, '4 lone, 4 bonding')}</g>
${txt(70, 286, 16, 'each O:  6 − 4 − ½(4) = 0', bold)}
${txt(70, 312, 16, 'C:  4 − 0 − ½(8) = 0', bold)}
<g class="fig-accent">${txt(70, 352, 16, 'every atom at zero → the best structure ✓', bold)}</g>
<g class="fig-muted">${txt(70, 376, 13, 'charges still sum to the molecule’s charge, 0')}</g>
<g class="fig-accent-2">${ctext(740, 128, 18, 'O≡C–O — also full octets', bold)}</g>
${line(656, 192, 716, 192, undefined, 3)}${line(656, 205, 716, 205, undefined, 3)}${line(656, 218, 716, 218, undefined, 3)}${line(764, 205, 824, 205, undefined, 3)}
${ctext(630, 217, 34, 'O', bold)}${ctext(740, 217, 34, 'C', bold)}${ctext(850, 217, 34, 'O', bold)}
${pair(602, 198, 602, 212)}${pair(878, 198, 878, 212)}${pair(842, 176, 858, 176)}${pair(842, 236, 858, 236)}
<g class="fig-accent-2">${ctext(664, 176, 16, '+1', bold)}${ctext(816, 176, 16, '−1', bold)}</g>
<g class="fig-muted">${ctext(630, 258, 12, '2 lone, 6 bonding')}${ctext(740, 246, 12, '0 lone, 8 bonding')}${ctext(850, 258, 12, '6 lone, 2 bonding')}</g>
${txt(550, 284, 15, 'left O:  6 − 2 − ½(6) = +1', bold)}
${txt(550, 308, 15, 'C:  4 − 0 − ½(8) = 0', bold)}
${txt(550, 332, 15, 'right O:  6 − 6 − ½(2) = −1', bold)}
<g class="fig-accent-2">${txt(550, 362, 15, 'charges separated, and + sits on O → minor contributor', bold)}</g>
<g class="fig-muted">${txt(550, 384, 13, 'still sums to 0 — formal charge is bookkeeping, not real charge')}</g>
${box(500, 430, 900, 38, 'Prefer the structure with the smallest formal charges; any − charge belongs on the most electronegative atom', 15, 700, 0.06)}
</svg>`

/* 3 — VSEPR: six shapes to know (replace-table, 560×440) */
const cell = (col: number, row: number) => ({ x0: 20 + col * 174, y0: 46 + row * 188 })
const stick = (cx: number, cy: number, dx: number, dy: number, dashed = false) =>
  `${line(cx, cy, cx + dx, cy + dy, undefined, 2.5, dashed ? ' stroke-dasharray="4 3"' : '')}<circle cx="${cx + dx}" cy="${cy + dy}" r="7" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>`
const wedge = (cx: number, cy: number, dx: number, dy: number) =>
  `<polygon points="${cx - 3},${cy} ${cx + 3},${cy} ${cx + dx + 6},${cy + dy} ${cx + dx - 6},${cy + dy}" fill="currentColor" fill-opacity="0.6"/><circle cx="${cx + dx}" cy="${cy + dy}" r="7" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>`
const centre = (cx: number, cy: number) => `<circle cx="${cx}" cy="${cy}" r="9" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>`
const shapeCell = (col: number, row: number, body: (cx: number, cy: number) => string, name: string, detail: string, angle: string, example: string) => {
  const { x0, y0 } = cell(col, row)
  const cx = x0 + 85, cy = y0 + 66
  return `<g class="fig-muted">${panel(x0, y0, 170, 180)}${txt(x0 + 10, y0 + 18, 12, example, bold)}</g>${body(cx, cy)}${ctext(cx, y0 + 132, 15, name, bold)}<g class="fig-muted">${ctext(cx, y0 + 150, 12, detail)}</g><g class="fig-accent-2">${ctext(cx, y0 + 170, 14, angle, bold)}</g>`
}
const vseprSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${txt(20, 28, 17, 'Six shapes to know — count domains, hide lone pairs', bold)}
${shapeCell(0, 0, (cx, cy) => `${stick(cx, cy, -42, 0)}${stick(cx, cy, 42, 0)}${centre(cx, cy)}`, 'Linear', '2 domains · 0 lone pairs', '180°', 'CO₂')}
${shapeCell(1, 0, (cx, cy) => `${stick(cx, cy, 0, -40)}${stick(cx, cy, -35, 20)}${stick(cx, cy, 35, 20)}${centre(cx, cy)}`, 'Trigonal planar', '3 domains · 0 lone pairs', '120°', 'BF₃')}
${shapeCell(2, 0, (cx, cy) => `${stick(cx, cy, 0, -40)}${stick(cx, cy, -34, 14, true)}${stick(cx, cy, 34, 14)}${wedge(cx, cy, 0, 32)}${centre(cx, cy)}`, 'Tetrahedral', '4 domains · 0 lone pairs', '109.5°', 'CH₄')}
${shapeCell(0, 1, (cx, cy) => `<g class="fig-accent-2">${lobe(cx, cy - 26, 0)}</g>${stick(cx, cy, -34, 14, true)}${stick(cx, cy, 34, 14)}${wedge(cx, cy, 0, 32)}${centre(cx, cy)}`, 'Trigonal pyramidal', '4 domains · 1 lone pair', '~107°', 'NH₃')}
${shapeCell(1, 1, (cx, cy) => `<g class="fig-accent-2">${lobe(cx - 19, cy - 24, -45, 7, 13)}${lobe(cx + 19, cy - 24, 45, 7, 13)}</g>${stick(cx, cy, -30, 26)}${stick(cx, cy, 30, 26)}${centre(cx, cy)}`, 'Bent', '4 domains · 2 lone pairs', '~104.5°', 'H₂O')}
${shapeCell(2, 1, (cx, cy) => `${stick(cx, cy, 0, -40)}${stick(cx, cy, 0, 40)}${stick(cx, cy, -40, 0)}${stick(cx, cy, 40, 0)}${stick(cx, cy, 26, -18, true)}${wedge(cx, cy, -26, 18)}${centre(cx, cy)}`, 'Octahedral', '6 domains · 0 lone pairs', '90°', 'SF₆')}
<g class="fig-muted">${ctext(280, 434, 13, 'red lobe = lone pair; lone pairs repel harder, so 109.5° → ~107° → ~104.5°')}</g>
</svg>`

/* 4 — Polarity: bond dipoles cancelling or not (lead, 1000×460) */
const polPanel = (i: number) => ({ x0: 40 + i * 232, cx: 40 + i * 232 + 110 })
const dip = (x1: number, y1: number, x2: number, y2: number, marker: string) => line(r1(x1), r1(y1), r1(x2), r1(y2), marker, 3.5)
const P0 = polPanel(0), P1 = polPanel(1), P2 = polPanel(2), P3 = polPanel(3)
const polaritySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-gc-pol')}</defs>
${txt(40, 34, 22, 'Polar bonds do not make a polar molecule — the shape decides whether the dipoles cancel', bold)}
<g class="fig-muted">${[P0, P1, P2, P3].map((p) => panel(p.x0, 56, 220, 336)).join('')}</g>
${ctext(P0.cx, 82, 17, 'CO₂ · linear', bold)}${ctext(P1.cx, 82, 17, 'BF₃ · trigonal planar', bold)}${ctext(P2.cx, 82, 17, 'H₂O · bent', bold)}${ctext(P3.cx, 82, 17, 'NH₃ · trigonal pyramidal', bold)}
${line(P0.cx - 68, 175, P0.cx + 68, 175, undefined, 2.5)}
${line(P1.cx, 170, P1.cx, 108, undefined, 2.5)}${line(P1.cx, 170, P1.cx - 54, 201, undefined, 2.5)}${line(P1.cx, 170, P1.cx + 54, 201, undefined, 2.5)}
${line(P2.cx, 150, P2.cx - 46, 196, undefined, 2.5)}${line(P2.cx, 150, P2.cx + 46, 196, undefined, 2.5)}
${line(P3.cx, 145, P3.cx - 50, 185, undefined, 2.5)}${line(P3.cx, 145, P3.cx + 50, 185, undefined, 2.5)}${line(P3.cx, 145, P3.cx, 215, undefined, 2.5)}
<g class="fig-accent"><defs>${ARROW('arr-gc-pol-b')}</defs>
${dip(P0.cx - 18, 175, P0.cx - 48, 175, 'arr-gc-pol-b')}${dip(P0.cx + 18, 175, P0.cx + 48, 175, 'arr-gc-pol-b')}
${dip(P1.cx, 154, P1.cx, 126, 'arr-gc-pol-b')}${dip(P1.cx - 13.9, 178, P1.cx - 38.4, 192, 'arr-gc-pol-b')}${dip(P1.cx + 13.9, 178, P1.cx + 38.4, 192, 'arr-gc-pol-b')}
${dip(P2.cx - 36.8, 186.8, P2.cx - 14.1, 164.1, 'arr-gc-pol-b')}${dip(P2.cx + 36.8, 186.8, P2.cx + 14.1, 164.1, 'arr-gc-pol-b')}
${dip(P3.cx - 39.9, 176.9, P3.cx - 15.6, 157.5, 'arr-gc-pol-b')}${dip(P3.cx + 39.9, 176.9, P3.cx + 15.6, 157.5, 'arr-gc-pol-b')}${dip(P3.cx, 202, P3.cx, 165, 'arr-gc-pol-b')}
${dip(P0.cx - 10, 250, P0.cx - 52, 250, 'arr-gc-pol-b')}${dip(P0.cx + 10, 250, P0.cx + 52, 250, 'arr-gc-pol-b')}
${dip(P1.cx, 262, P1.cx, 232, 'arr-gc-pol-b')}${dip(P1.cx - 8, 266, P1.cx - 36, 282, 'arr-gc-pol-b')}${dip(P1.cx + 8, 266, P1.cx + 36, 282, 'arr-gc-pol-b')}</g>
${atomS(P0.cx - 68, 175, 20, 'O', 17)}${atomS(P0.cx, 175, 18, 'C', 17)}${atomS(P0.cx + 68, 175, 20, 'O', 17)}
${atomS(P1.cx, 108, 18, 'F', 16)}${atomS(P1.cx - 54, 201, 18, 'F', 16)}${atomS(P1.cx + 54, 201, 18, 'F', 16)}${atomS(P1.cx, 170, 16, 'B', 16)}
${atomS(P2.cx, 150, 20, 'O', 17)}${atomS(P2.cx - 46, 196, 13, 'H', 14)}${atomS(P2.cx + 46, 196, 13, 'H', 14)}
<g class="fig-muted">${lobe(P3.cx - 10, 112, -30, 7, 12)}${lobe(P3.cx + 10, 112, 30, 7, 12)}</g>
${atomS(P3.cx, 145, 20, 'N', 17)}${atomS(P3.cx - 50, 185, 13, 'H', 14)}${atomS(P3.cx + 50, 185, 13, 'H', 14)}${atomS(P3.cx, 215, 13, 'H', 14)}
${ctext(P0.cx - 68, 143, 13, 'δ−', bold)}${ctext(P0.cx, 143, 13, 'δ+', bold)}${ctext(P0.cx + 68, 143, 13, 'δ−', bold)}
${ctext(P1.cx + 28, 102, 13, 'δ−', bold)}${ctext(P1.cx - 80, 206, 13, 'δ−', bold)}${ctext(P1.cx + 80, 206, 13, 'δ−', bold)}${ctext(P1.cx + 26, 168, 13, 'δ+', bold)}
${ctext(P2.cx, 118, 13, 'δ−', bold)}${ctext(P2.cx - 46, 226, 13, 'δ+', bold)}${ctext(P2.cx + 46, 226, 13, 'δ+', bold)}
${ctext(P3.cx + 30, 140, 13, 'δ−', bold)}${ctext(P3.cx - 76, 190, 13, 'δ+', bold)}${ctext(P3.cx + 76, 190, 13, 'δ+', bold)}
<g class="fig-muted">${ctext(P0.cx, 282, 13, 'two equal arrows, opposite ways')}${ctext(P0.cx, 306, 15, 'net dipole = 0 → nonpolar', bold)}
${ctext(P1.cx, 306, 13, 'three at 120° close the triangle')}${ctext(P1.cx, 328, 15, 'net dipole = 0 → nonpolar', bold)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-gc-pol-r')}</defs>
${line(P2.cx, 306, P2.cx, 248, 'arr-gc-pol-r', 4)}${txt(P2.cx + 12, 282, 14, 'net dipole', bold)}
${line(P3.cx, 306, P3.cx, 248, 'arr-gc-pol-r', 4)}${txt(P3.cx + 12, 282, 14, 'net dipole', bold)}</g>
<g class="fig-muted">${ctext(P2.cx, 332, 13, 'bent: the arrows add → polar')}${ctext(P3.cx, 332, 13, 'pyramid: the arrows add → polar')}</g>
<g class="fig-muted">${ctext(P0.cx, 370, 12, 'same for CCl₄ (tetrahedral)')}${ctext(P1.cx, 370, 12, 'symmetric shapes cancel')}${ctext(P2.cx, 370, 12, 'lone pairs break the symmetry')}${ctext(P3.cx, 370, 12, 'HCl: one bond, so polar too')}</g>
${box(500, 428, 900, 38, 'Arrows point to the δ− end. Polar molecule = polar bonds AND a shape that leaves a net arrow', 15, 700, 0.06)}
</svg>`

/* 5 — The IMF ladder with the lesson's boiling-point calls (lead, 1000×460) */
const STEP_W = 140, STEP_X0 = 40, STEP_BOTTOM = 400
const stepTop = (i: number) => 350 - i * 60
const blob = (cx: number, cy: number, l: string, rr: string) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="23" ry="13" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>${ctext(cx - 11, cy + 4, 10, l, bold)}${ctext(cx + 11, cy + 4, 10, rr, bold)}`
const imfSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-gc-imf')}</defs>
${txt(40, 34, 22, 'The IMF ladder — each rung holds molecules tighter, so the boiling point climbs', bold)}
${[0, 1, 2, 3].map((i) => `<rect x="${STEP_X0 + i * STEP_W}" y="${stepTop(i)}" width="${STEP_W}" height="${STEP_BOTTOM - stepTop(i)}" rx="6" fill="currentColor" fill-opacity="${0.04 + i * 0.03}" stroke="currentColor" stroke-width="2"/>`).join('')}
${ctext(110, stepTop(0) + 24, 14, 'London dispersion', bold)}${ctext(250, stepTop(1) + 24, 14, 'dipole–dipole', bold)}${ctext(390, stepTop(2) + 24, 14, 'hydrogen bond', bold)}${ctext(530, stepTop(3) + 24, 14, 'ion–dipole', bold)}
<g class="fig-muted">${ctext(110, stepTop(0) + 42, 12, 'always present')}${ctext(250, stepTop(1) + 42, 12, 'permanent dipoles')}${ctext(390, stepTop(2) + 42, 12, 'H on N, O or F')}${ctext(530, stepTop(3) + 42, 12, 'ion + polar molecule')}</g>
<g class="fig-muted">${blob(82, stepTop(0) - 50, 'δ+', 'δ−')}${blob(138, stepTop(0) - 50, 'δ+', 'δ−')}${line(105, stepTop(0) - 50, 115, stepTop(0) - 50, undefined, 2, ' stroke-dasharray="2 3"')}${ctext(110, stepTop(0) - 80, 11, 'a flicker induces a flicker')}</g>
${blob(222, stepTop(1) - 50, 'δ+', 'δ−')}${blob(278, stepTop(1) - 50, 'δ+', 'δ−')}${line(245, stepTop(1) - 50, 255, stepTop(1) - 50, undefined, 2, ' stroke-dasharray="2 3"')}<g class="fig-muted">${ctext(250, stepTop(1) - 80, 11, 'δ− end to δ+ end, always on')}</g>
${atom(352, stepTop(2) - 50, 10, 'O', 11)}${atom(376, stepTop(2) - 50, 7, 'H', 9)}${line(362, stepTop(2) - 50, 369, stepTop(2) - 50, undefined, 2)}${line(386, stepTop(2) - 50, 416, stepTop(2) - 50, undefined, 2, ' stroke-dasharray="3 3"')}${water(428, stepTop(2) - 50, -90)}
<g class="fig-muted">${ctext(376, stepTop(2) - 68, 10, 'δ+')}${ctext(428, stepTop(2) - 68, 10, 'δ−')}${ctext(390, stepTop(2) - 84, 11, 'a strong, directional dipole–dipole')}</g>
${atom(530, stepTop(3) - 52, 11, '+', 14, 0.2)}${water(500, stepTop(3) - 52, 270)}${water(560, stepTop(3) - 52, 90)}${water(530, stepTop(3) - 82, 0)}
<g class="fig-muted">${ctext(530, stepTop(3) - 104, 11, 'O ends turn toward a cation')}</g>
<g class="fig-accent"><defs>${ARROW('arr-gc-imf-b')}</defs>${line(628, 396, 628, 92, 'arr-gc-imf-b', 3)}${ctext(612, 244, 13, 'stronger IMF → higher boiling point', bold + ' transform="rotate(-90 612 244)"')}</g>
<g class="fig-muted">${panel(650, 60, 310, 332)}</g>
${ctext(805, 88, 17, 'Which boils higher? (lesson calls)', bold)}
<g class="fig-accent">${txt(668, 128, 16, 'CH₃OH', bold)}</g>${txt(738, 128, 16, '>  CH₃CH₃', bold)}
<g class="fig-muted">${txt(668, 148, 12, 'methanol H-bonds (O–H); ethane has only LDF')}</g>
<g class="fig-accent">${txt(668, 196, 16, 'n-pentane', bold)}</g>${txt(768, 196, 16, '>  neopentane', bold)}
<g class="fig-muted">${txt(668, 216, 12, 'same formula; more surface contact → more LDF')}</g>
<g class="fig-accent">${txt(668, 264, 16, 'H₂O (100 °C)', bold)}</g>${txt(790, 264, 16, '>  H₂S', bold)}
<g class="fig-muted">${txt(668, 284, 12, 'water H-bonds (up to 4 each); H₂S cannot')}${txt(668, 302, 12, 'without H-bonds water would boil near −80 °C')}</g>
<g class="fig-muted">${txt(668, 346, 12, 'same IMF type? heavier and less branched wins')}${txt(668, 364, 12, 'on dispersion — branching lowers the boiling point')}</g>
${box(500, 430, 900, 38, 'Rank by the strongest IMF present, then break ties with size and surface area (dispersion)', 15, 700, 0.06)}
</svg>`

/* 6 — Dissolution as a hydration picture, beside the solubility rules (lead, 1000×460) */
const LAT = [-1, 0, 1].flatMap((i) => [-1, 0, 1].map((j) => ({ x: 130 + i * 36, y: 215 + j * 36, na: (i + j) % 2 === 0 })))
const hydrated = (cx: number, cy: number, R: number, hFacing: boolean) =>
  [0, 90, 180, 270].map((th) => water(r1(cx + R * Math.cos((th * Math.PI) / 180)), r1(cy + R * Math.sin((th * Math.PI) / 180)), hFacing ? th - 90 : th + 90)).join('')
const solubilitySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-gc-sol')}</defs>
${txt(40, 34, 22, 'Dissolving is ion–dipole: water pulls the lattice apart, O ends on Na⁺, H ends on Cl⁻', bold)}
<g class="fig-muted">${panel(40, 60, 490, 332)}</g>
${LAT.map((p) => (p.na ? atom(p.x, p.y, 10, '+', 12, 0.3) : `<g class="fig-accent-2">${atom(p.x, p.y, 15, '−', 14, 0.15)}</g>`)).join('')}
<g class="fig-muted">${ctext(130, 300, 13, 'NaCl(s) lattice')}${ctext(130, 318, 12, 'held by lattice energy')}</g>
<g class="fig-accent"><defs>${ARROW('arr-gc-sol-b')}</defs>${line(196, 215, 250, 215, 'arr-gc-sol-b', 3.5)}${ctext(223, 202, 13, 'H₂O', bold)}</g>
${hydrated(330, 150, 34, false)}${atom(330, 150, 12, '+', 14, 0.3)}
<g class="fig-accent-2">${hydrated(450, 272, 42, true)}${atom(450, 272, 16, '−', 15, 0.15)}</g>
${ctext(330, 92, 13, 'O ends (δ−) face Na⁺', bold)}${ctext(450, 352, 13, 'H ends (δ+) face Cl⁻', bold)}
<g class="fig-muted">${ctext(330, 216, 12, 'Na⁺(aq)')}${ctext(388, 302, 12, 'Cl⁻(aq)')}${ctext(285, 378, 13, 'ion–dipole attraction: hydration energy pays back lattice energy')}</g>
<g class="fig-muted">${panel(560, 60, 400, 332)}</g>
${ctext(760, 88, 17, 'Solubility rules', bold)}
<g class="fig-accent">${txt(580, 118, 14, 'Always soluble', bold)}</g>${txt(580, 136, 13, 'Na⁺, K⁺, NH₄⁺ salts · nitrates NO₃⁻ · acetates')}
${txt(580, 166, 14, 'Halides Cl⁻, Br⁻, I⁻: soluble', bold)}<g class="fig-muted">${txt(580, 184, 13, 'except with Ag⁺, Pb²⁺, Hg₂²⁺')}</g>
<g class="fig-accent-2">${txt(580, 214, 14, 'Carbonates, phosphates, hydroxides: insoluble', bold)}</g><g class="fig-muted">${txt(580, 232, 13, 'except with group IA (and Ba(OH)₂)')}</g>
${txt(580, 262, 14, 'Sulfates SO₄²⁻: soluble', bold)}<g class="fig-muted">${txt(580, 280, 13, 'except BaSO₄ (CaSO₄ only slightly)')}</g>
${box(760, 322, 360, 40, 'AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + Na⁺ + NO₃⁻', 15, 700, 0.1)}
<g class="fig-muted">${ctext(760, 362, 12, 'Ag⁺ meets Cl⁻ on the exception list; Na⁺ and NO₃⁻ are spectators')}</g>
${box(500, 430, 900, 38, 'A precipitate forms when a cation–anion pair lands on an exception: AgCl, PbCl₂, BaSO₄, most carbonates', 15, 700, 0.06)}
</svg>`

/* 7 — The four colligative effects as panels (lead, 1000×460) */
const colPanel = (i: number) => ({ x0: 40 + i * 232, cx: 40 + i * 232 + 110 })
const C0 = colPanel(0), C1 = colPanel(1), C2 = colPanel(2), C3 = colPanel(3)
const beaker = (x: number, y: number, w: number, h: number, level: number) =>
  `<rect x="${x}" y="${y + level}" width="${w}" height="${h - level}" fill="currentColor" fill-opacity="0.12" stroke="none"/><path d="M${x} ${y} V${y + h} H${x + w} V${y}" fill="none" stroke="currentColor" stroke-width="2.5"/>`
const upArrows = (xs: number[], y: number, marker: string) => xs.map((x) => line(x, y, x, y - 22, marker, 2)).join('')
const tScale = (x: number, pureY: number, solY: number, pureLabel: string, solLabel: string, dLabel: string, marker: string) =>
  `<g class="fig-muted">${line(x, 300, x, 104, marker, 2)}${txt(x - 6, 96, 11, 'T')}</g>${line(x - 10, pureY, x + 10, pureY, undefined, 3)}${txt(x + 18, pureY + 5, 13, pureLabel, bold)}<g class="fig-accent-2">${line(x - 10, solY, x + 10, solY, undefined, 3)}${txt(x + 18, solY + 5, 13, solLabel, bold)}${line(x - 22, pureY, x - 22, solY, undefined, 2)}${line(x - 28, pureY, x - 16, pureY, undefined, 2)}${line(x - 28, solY, x - 16, solY, undefined, 2)}${rtext(x - 30, (pureY + solY) / 2 + 5, 14, dLabel, bold)}</g>`
const colligativeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-gc-col')}</defs>
${txt(40, 34, 22, 'Four colligative effects — all scale with how many particles dissolve (i × m), not which', bold)}
<g class="fig-muted">${[C0, C1, C2, C3].map((p) => panel(p.x0, 56, 220, 336)).join('')}</g>
${ctext(C0.cx, 82, 16, 'Vapor pressure ↓', bold)}${ctext(C1.cx, 82, 16, 'Boiling point ↑', bold)}${ctext(C2.cx, 82, 16, 'Freezing point ↓', bold)}${ctext(C3.cx, 82, 16, 'Osmotic pressure', bold)}
<g class="fig-accent">${beaker(C0.x0 + 24, 150, 72, 110, 34)}${beaker(C0.x0 + 124, 150, 72, 110, 34)}
<defs>${ARROW('arr-gc-col-b')}</defs>${upArrows([C0.x0 + 38, C0.x0 + 56, C0.x0 + 74, C0.x0 + 92].map((x) => x - 2), 178, 'arr-gc-col-b')}${upArrows([C0.x0 + 146, C0.x0 + 176], 178, 'arr-gc-col-b')}</g>
<g class="fig-accent-2">${[C0.x0 + 134, C0.x0 + 160, C0.x0 + 186].map((x) => dot(x, 186, 4.5)).join('')}${[C0.x0 + 146, C0.x0 + 172].map((x) => dot(x, 214, 4.5)).join('')}${dot(C0.x0 + 160, 240, 4.5)}</g>
<g class="fig-muted">${ctext(C0.x0 + 60, 278, 12, 'pure solvent')}${ctext(C0.x0 + 160, 278, 12, 'solution')}</g>
${ctext(C0.cx, 310, 13, 'solute takes surface spots:', bold)}${ctext(C0.cx, 328, 13, 'fewer molecules escape', bold)}
${ctext(C0.cx, 356, 15, `P = χ${sb('solvent')}· P°`, bold)}
<g class="fig-muted">${ctext(C0.cx, 378, 12, 'nonvolatile solute → lower P (Raoult)')}</g>
${tScale(C1.x0 + 84, 230, 180, 'pure boils', 'solution boils', 'ΔT', 'arr-gc-col')}
<g class="fig-muted">${txt(C1.x0 + 102, 248, 11, '(water 100 °C)')}</g>
${ctext(C1.cx, 326, 15, `ΔT${sb('b')}= K${sb('b')}· m · i`, bold)}
<g class="fig-muted">${ctext(C1.cx, 350, 12, `K${sb('b', 9)}(water) = 0.512 °C·kg/mol`)}${ctext(C1.cx, 372, 12, 'hotter before P reaches 1 atm')}</g>
${tScale(C2.x0 + 84, 180, 230, 'pure freezes', 'solution freezes', 'ΔT', 'arr-gc-col')}
<g class="fig-muted">${txt(C2.x0 + 102, 198, 11, '(water 0 °C)')}</g>
${ctext(C2.cx, 326, 15, `ΔT${sb('f')}= K${sb('f')}· m · i`, bold)}
<g class="fig-muted">${ctext(C2.cx, 348, 12, `K${sb('f', 9)}(water) = 1.86 °C·kg/mol`)}${ctext(C2.cx, 366, 11.5, '0.50 m NaCl (i = 2):')}${ctext(C2.cx, 382, 11.5, 'ΔT = 1.86 × 0.50 × 2 = 1.86 °C')}</g>
<path d="M${C3.x0 + 40} 110 V282 Q${C3.x0 + 40} 300 ${C3.x0 + 58} 300 H${C3.x0 + 162} Q${C3.x0 + 180} 300 ${C3.x0 + 180} 282 V110 M${C3.x0 + 88} 110 V252 Q${C3.x0 + 88} 262 ${C3.x0 + 98} 262 H${C3.x0 + 122} Q${C3.x0 + 132} 262 ${C3.x0 + 132} 252 V110" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent"><rect x="${C3.x0 + 42}" y="212" width="44" height="86" fill="currentColor" fill-opacity="0.12" stroke="none"/><rect x="${C3.x0 + 134}" y="152" width="44" height="146" fill="currentColor" fill-opacity="0.12" stroke="none"/><rect x="${C3.x0 + 86}" y="264" width="48" height="34" fill="currentColor" fill-opacity="0.12" stroke="none"/>
${line(C3.x0 + 100, 281, C3.x0 + 122, 281, 'arr-gc-col-b', 3)}${ctext(C3.x0 + 64, 330, 12, 'pure water', bold)}</g>
<g class="fig-muted"><line x1="${C3.x0 + 110}" y1="264" x2="${C3.x0 + 110}" y2="298" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>${ctext(C3.x0 + 110, 316, 11, 'membrane')}</g>
<g class="fig-accent-2">${[150, 168, 142, 160, 174, 150, 166].map((x, k) => dot(C3.x0 + x, 168 + k * 18, 4)).join('')}${line(C3.x0 + 194, 212, C3.x0 + 194, 152, undefined, 2)}${line(C3.x0 + 188, 212, C3.x0 + 200, 212, undefined, 2)}${line(C3.x0 + 188, 152, C3.x0 + 200, 152, undefined, 2)}${txt(C3.x0 + 200, 186, 14, 'Π', bold)}${ctext(C3.x0 + 156, 330, 12, 'solution', bold)}</g>
${ctext(C3.cx, 356, 15, 'Π = i M R T', bold)}
<g class="fig-muted">${ctext(C3.cx, 378, 12, 'water moves toward more particles')}</g>
${box(500, 430, 900, 38, 'i counts particles: glucose 1 · NaCl 2 · CaCl₂ 3 · AlCl₃ 4 — at equal molality, CaCl₂ freezes lowest', 15, 700, 0.06)}
</svg>`

/* 8 — The initial-rates worked example as bars (lead, 1000×460) */
const BASE = 330, UNIT = 22
const barTop = (rate: number) => BASE - rate * UNIT
const bar = (cx: number, rate: number, label: string) =>
  `<rect x="${cx - 40}" y="${barTop(rate)}" width="80" height="${BASE - barTop(rate)}" rx="4" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>${ctext(cx, barTop(rate) - 8, 13, label, bold)}`
const initialRatesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-gc-rate')}</defs>
${txt(40, 34, 22, 'The lesson’s initial-rates table as a picture: change ONE concentration, read the power', bold)}
<g class="fig-muted">${line(70, BASE + 10, 70, 110, 'arr-gc-rate', 2)}${line(60, BASE, 580, BASE, undefined, 2)}
${[2, 4, 6, 8].map((u) => `${line(64, barTop(u), 76, barTop(u), undefined, 2)}${rtext(58, barTop(u) + 4, 12, String(u))}`).join('')}${txt(78, 108, 12, 'rate (×10⁻⁴ M/s)')}</g>
${bar(150, 8, '8.0×10⁻⁴')}${bar(330, 2, '2.0×10⁻⁴')}${bar(510, 4, '4.0×10⁻⁴')}
${ctext(150, 354, 14, 'Exp 2', bold)}${ctext(330, 354, 14, 'Exp 1', bold)}${ctext(510, 354, 14, 'Exp 3', bold)}
<g class="fig-accent-2">${ctext(150, 374, 13, '[A] 0.20 M', bold)}</g>${ctext(150, 392, 13, '[B] 0.10 M')}
${ctext(330, 374, 13, '[A] 0.10 M')}${ctext(330, 392, 13, '[B] 0.10 M')}
${ctext(510, 374, 13, '[A] 0.10 M')}<g class="fig-accent">${ctext(510, 392, 13, '[B] 0.20 M', bold)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-gc-rate-r')}</defs>${path('M296 282 Q230 240 196 168', 'arr-gc-rate-r', 3)}
${txt(200, 112, 15, '[A] ×2 → rate ×4', bold)}${txt(200, 132, 13, '4 = 2² → 2nd order in A', bold)}</g>
<g class="fig-accent"><defs>${ARROW('arr-gc-rate-b')}</defs>${path('M364 282 Q420 250 466 250', 'arr-gc-rate-b', 3)}
${txt(380, 196, 15, '[B] ×2 → rate ×2', bold)}${txt(380, 216, 13, '2 = 2¹ → 1st order in B', bold)}</g>
<g class="fig-muted">${panel(620, 60, 340, 332)}</g>
${ctext(790, 88, 17, 'From ratios to the rate law', bold)}
<g class="fig-accent-2">${txt(638, 122, 14, 'Exp 1→2:  (0.20/0.10)ᵐ = 8.0/2.0 = 4 → m = 2', bold)}</g>
<g class="fig-accent">${txt(638, 150, 14, 'Exp 1→3:  (0.20/0.10)ⁿ = 4.0/2.0 = 2 → n = 1', bold)}</g>
${box(790, 196, 300, 40, 'Rate = k[A]²[B]   — overall order 3', 17, 700, 0.1)}
${txt(638, 244, 14, 'k = rate / ([A]²[B])')}
${txt(638, 266, 14, '= 2.0×10⁻⁴ / (0.10² × 0.10) = 2.0×10⁻⁴ / 10⁻³')}
${txt(638, 292, 17, '= 0.20 M⁻² s⁻¹', bold)}
<g class="fig-muted">${txt(638, 334, 12, 'orders come from the data — never from the coefficients')}${txt(638, 352, 12, 'the units of k change with the overall order')}${txt(638, 370, 12, 'any experiment gives the same k once the law is right')}</g>
${box(500, 430, 900, 38, 'Doubling a concentration multiplies the rate by 1, 2 or 4 for order 0, 1 or 2 — read the power off the ratio', 15, 700, 0.06)}
</svg>`

/* 9 — Oxidation states worked on Cr₂O₇²⁻ and KMnO₄ (lead, 1000×460) */
const RULES = ['1 · free element = 0', '2 · ion = its charge', '3 · F = −1', '4 · O = −2 (peroxide −1)', '5 · H = +1 (hydride −1)', '6 · sum = overall charge']
const tile = (cx: number, cy: number, w: number, l1: string, l2: string) => box2(cx, cy, w, 48, l1, l2, 15, 13, 0.12)
const oxStateSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 34, 22, 'Oxidation states by the rules — Cr₂O₇²⁻ and KMnO₄ worked', bold)}
<g class="fig-muted">${txt(40, 60, 12, 'apply in priority order (an earlier rule wins a conflict):')}</g>
${RULES.map((r, i) => box(115 + i * 154, 86, 150, 34, r, 11.5, 700, 0.06)).join('')}
<g class="fig-muted">${panel(40, 122, 440, 272)}${panel(520, 122, 440, 272)}</g>
${txt(60, 152, 18, 'Cr₂O₇²⁻  (dichromate)', bold)}
<g class="fig-accent">${tile(90, 196, 44, 'Cr', 'x')}${tile(140, 196, 44, 'Cr', 'x')}</g>
<g class="fig-accent-2">${[0, 1, 2, 3, 4, 5, 6].map((k) => tile(200 + k * 42, 196, 38, 'O', '−2')).join('')}</g>
<g class="fig-muted">${line(68, 230, 471, 230, undefined, 1.5)}${ctext(270, 246, 12, 'the nine must add up to the ion’s charge, −2')}</g>
${txt(70, 282, 16, '2x + 7(−2) = −2', bold)}
${txt(70, 308, 16, '2x − 14 = −2  →  2x = 12')}
<g class="fig-accent">${txt(70, 346, 22, 'x = +6', bold)}</g>
<g class="fig-muted">${txt(160, 346, 13, 'each Cr is Cr(VI) — a strong oxidizing agent')}${txt(70, 376, 12, 'rule 4 fixes every O first; the metal is the one unknown')}</g>
${txt(540, 152, 18, 'KMnO₄  (permanganate)', bold)}
${tile(570, 196, 44, 'K', '+1')}<g class="fig-accent">${tile(626, 196, 46, 'Mn', 'x')}</g>
<g class="fig-accent-2">${[0, 1, 2, 3].map((k) => tile(690 + k * 46, 196, 40, 'O', '−2')).join('')}</g>
<g class="fig-muted">${line(548, 230, 862, 230, undefined, 1.5)}${ctext(705, 246, 12, 'a neutral compound: the six must add up to 0')}</g>
${txt(550, 282, 16, '(+1) + x + 4(−2) = 0', bold)}
${txt(550, 308, 16, 'x − 7 = 0')}
<g class="fig-accent">${txt(550, 346, 22, 'x = +7', bold)}</g>
<g class="fig-muted">${txt(640, 346, 13, 'Mn(VII) — a powerful oxidizing agent')}${txt(550, 376, 12, 'rule 2 gives K⁺ = +1 (group IA); rule 4 gives each O = −2')}</g>
${box(500, 430, 900, 38, 'Fill in the atoms the rules fix (O −2, H +1, group IA +1), then solve for the one unknown so the sum equals the charge', 14, 700, 0.06)}
</svg>`

export const mcatGeneralChemistryFigures: DeckFigurePlacement[] = [
  {
    at: 'Electronegativity Difference → Bond Type',
    mode: 'replace-table',
    figure: {
      svg: bondTypeSvg,
      alt:
        'A ruler of electronegativity difference ΔEN from 0 to about 2.2 with three zones: 0 to 0.4 nonpolar covalent (grey), 0.5 to 1.7 polar covalent (blue), above 1.7 ionic (red). Below, three particle pictures. Nonpolar covalent: two equal H atoms overlapping with the shared electron pair sitting in the middle — shared evenly; H₂, Cl₂, C–H. Polar covalent: a small H (δ+) and a larger Cl (δ−) with the electron pair pulled toward Cl and a blue dipole arrow pointing to Cl — partial charges, a dipole; H–Cl, H–O, C–O. Ionic: Na⁺ and Cl⁻ as separate ions with a red curved arrow showing the electron handed over — ions attract into a lattice; NaCl, MgO. Footer: bond polarity is set here; molecular polarity also needs the shape.',
      caption: 'ΔEN sets how evenly the pair is shared: in the middle (nonpolar), pulled to one side (polar), handed over (ionic).',
    },
    blocks: [
      '- $\\Delta EN$ 0–0.4: nonpolar covalent (H₂, Cl₂, C–H) — the pair is shared evenly',
      '- $\\Delta EN$ 0.5–1.7: polar covalent (H–Cl, H–O, C–O) — the pair sits nearer the more electronegative atom',
      '- $\\Delta EN > 1.7$: ionic (NaCl, MgO) — an electron is transferred and the ions attract',
      '- Bond polarity is set here; whether the molecule is polar also depends on its shape',
    ],
  },
  {
    at: 'Formal Charge',
    mode: 'lead',
    figure: {
      svg: formalChargeSvg,
      alt:
        'Formula box: FC = V − L − ½B (valence electrons minus lone-pair electrons minus half the bonding electrons). Left panel, O=C=O with two double bonds and two lone pairs on each oxygen: each O has 4 lone and 4 bonding electrons, 6 − 4 − ½(4) = 0; C has 0 lone and 8 bonding, 4 − 0 − ½(8) = 0; every atom at zero, the best structure. Right panel, the alternative O≡C–O, which also has full octets: the triple-bonded O has 2 lone and 6 bonding electrons, 6 − 2 − ½(6) = +1; C is 4 − 0 − ½(8) = 0; the single-bonded O has 6 lone and 2 bonding, 6 − 6 − ½(2) = −1. Charges are separated and a + sits on oxygen, so it is a minor contributor; both structures still sum to 0, formal charge is bookkeeping, not real charge. Footer: prefer the structure with the smallest formal charges; any − charge belongs on the most electronegative atom.',
      caption: 'The lesson’s CO₂: the double–double structure puts every atom at zero; the triple–single alternative separates +1 and −1.',
    },
    blocks: [
      '- $FC = V - L - \\tfrac12 B$ on every atom; O=C=O gives 0, 0, 0 — the structure to draw',
      '- O≡C–O also has octets but gives +1, 0, −1: separated charges, so a minor contributor',
    ],
  },
  {
    at: 'VSEPR & Molecular Geometry',
    mode: 'replace-table',
    figure: {
      svg: vseprSvg,
      alt:
        'A grid of six ball-and-stick shapes with their bond angles. Top row: linear, 2 domains and 0 lone pairs (CO₂), 180°; trigonal planar, 3 domains and 0 lone pairs (BF₃), 120°; tetrahedral, 4 domains and 0 lone pairs (CH₄), 109.5°, drawn with one bond up, one dashed back, one in plane and one wedge forward. Bottom row: trigonal pyramidal, 4 domains and 1 lone pair (NH₃), about 107°, the top position replaced by a red lone-pair lobe; bent, 4 domains and 2 lone pairs (H₂O), about 104.5°, two red lobes above two bonds; octahedral, 6 domains and 0 lone pairs (SF₆), 90°, four bonds in plane plus one wedge forward and one dashed back. Footer: red lobe = lone pair; lone pairs repel harder, so 109.5° → ~107° → ~104.5°.',
      caption: 'Count the domains for the electron geometry, then hide the lone pairs for the shape — and let each lone pair squeeze the angle.',
    },
    blocks: [
      '- Count electron domains (bonds + lone pairs) → electron geometry; hide the lone pairs → molecular shape',
      '- Lone pairs repel harder: 109.5° → ~107° (NH₃) → ~104.5° (H₂O); 3 domains + 1 lone pair = bent, under 120°',
      '- 5 domains: trigonal bipyramidal (90° / 120°); 6 domains with 2 lone pairs: square planar (XeF₄)',
    ],
  },
  {
    at: 'Polarity',
    mode: 'lead',
    figure: {
      svg: polaritySvg,
      alt:
        'Four panels, each a molecule with blue bond-dipole arrows pointing to the δ− end of each bond. CO₂, linear: two equal arrows from C out to each O point opposite ways; net dipole = 0, nonpolar (same for tetrahedral CCl₄). BF₃, trigonal planar: three arrows from B out to each F at 120° close a triangle; net dipole = 0, nonpolar — symmetric shapes cancel. H₂O, bent: two arrows from the H atoms up toward O add, drawn as a red net dipole arrow; polar — lone pairs break the symmetry. NH₃, trigonal pyramidal with a lone pair on N: three arrows from the H atoms toward N add to a red net dipole; polar. Note: HCl has one bond, so it is polar too. Footer: arrows point to the δ− end; a polar molecule needs polar bonds AND a shape that leaves a net arrow.',
      caption: 'Same polar bonds, different verdicts: linear CO₂ and planar BF₃ cancel; bent H₂O and pyramidal NH₃ keep a net dipole.',
    },
    blocks: [
      '- Polar molecule = polar bonds AND a shape that does not cancel them; each bond dipole points to the δ− end',
      '- CO₂, BF₃, CCl₄: symmetric, net 0 — nonpolar; H₂O, NH₃ (lone pairs) and HCl (one bond) keep a net dipole',
    ],
  },
  {
    at: 'Intermolecular Forces (IMFs)',
    mode: 'lead',
    figure: {
      svg: imfSvg,
      alt:
        'A four-step staircase rising left to right, each step with a small particle picture. London dispersion (all molecules, grows with size): two nonpolar blobs where a momentary δ+/δ− flicker induces a flicker in its neighbour. Dipole–dipole (permanent dipoles): two polar blobs lined up δ− end to δ+ end, always on. Hydrogen bond (H on N, O or F): an O–H with its δ+ H dotted to the δ− O of a water molecule — a strong, directional dipole–dipole. Ion–dipole (ion + polar molecule): a cation with three waters turning their O ends toward it. A blue arrow up the staircase: stronger IMF → higher boiling point, lower vapor pressure. Right panel, which boils higher, the lesson’s calls: CH₃OH beats CH₃CH₃ (O–H gives methanol hydrogen bonds; ethane has LDF only); n-pentane beats neopentane (same formula; the straight chain touches more, so more LDF); H₂O at 100 °C beats H₂S (water H-bonds with 2 donors and 2 acceptors; H₂S cannot; without H-bonds water would boil near −80 °C). Same IMF type: the heavier, less branched molecule wins on dispersion. Footer: rank by the strongest IMF present, then break ties with size and surface area.',
      caption: 'Dispersion < dipole–dipole < hydrogen bond < ion–dipole: climb the ladder and the boiling point climbs with it.',
    },
    blocks: [
      '- Strength: London dispersion < dipole–dipole < hydrogen bond (H on N, O, F) < ion–dipole',
      '- Rank boiling points by the strongest IMF present, then by size and surface area (branching lowers BP)',
    ],
  },
  {
    at: 'Solubility Rules',
    mode: 'lead',
    figure: {
      svg: solubilitySvg,
      alt:
        'Left: a 3×3 NaCl lattice of alternating Na⁺ and Cl⁻ ions, held by lattice energy; a blue H₂O arrow leads to the dissolved ions: Na⁺ ringed by four water molecules with their O ends (δ−) facing the cation, and Cl⁻ ringed by four waters with their H ends (δ+) facing the anion — ion–dipole attraction; hydration energy pays back lattice energy. Right: the solubility rules. Always soluble: Na⁺, K⁺, NH₄⁺ salts, nitrates, acetates. Halides Cl⁻, Br⁻, I⁻ soluble except with Ag⁺, Pb²⁺, Hg₂²⁺. Carbonates, phosphates, hydroxides insoluble except with group IA (and Ba(OH)₂). Sulfates soluble except BaSO₄ (CaSO₄ only slightly). Example box: AgNO₃(aq) + NaCl(aq) → AgCl(s) precipitate + Na⁺ + NO₃⁻; Ag⁺ meets Cl⁻ on the exception list, Na⁺ and NO₃⁻ are spectators. Footer: a precipitate forms when a cation–anion pair lands on an exception — AgCl, PbCl₂, BaSO₄, most carbonates.',
      caption: 'Water dissolves a salt by ion–dipole attraction; the rules say which cation–anion pairs water cannot pull apart.',
    },
    blocks: [
      '- Dissolving = ion–dipole: water’s O ends on the cation, H ends on the anion; hydration vs lattice energy',
      '- Always soluble: Na⁺, K⁺, NH₄⁺, NO₃⁻, acetate; watch the exceptions — AgCl, PbCl₂, BaSO₄, most carbonates',
    ],
  },
  {
    at: 'Colligative Properties',
    mode: 'lead',
    figure: {
      svg: colligativeSvg,
      alt:
        'Four panels. Vapor pressure lowering: two beakers, pure solvent with four molecules escaping upward and a solution with red solute particles at the surface and only two escaping — solute takes surface spots, fewer molecules escape; P = χ(solvent) · P°; Raoult: a nonvolatile solute always lowers P. Boiling point elevation: a temperature scale where the solution boils above the pure solvent (water 100 °C) by ΔT; ΔT_b = K_b · m · i, K_b(water) = 0.512 °C·kg/mol; it must get hotter to push the vapor pressure up to 1 atm. Freezing point depression: a scale where the solution freezes below the pure solvent (water 0 °C) by ΔT; ΔT_f = K_f · m · i, K_f(water) = 1.86 °C·kg/mol; 0.50 m NaCl: 1.86 × 0.50 × 2 = 1.86 °C lower. Osmotic pressure: a U-tube with a membrane at the bottom, pure water on the left and solution with red particles on the right standing higher by Π; a blue arrow shows water crossing toward the solution; Π = iMRT; water crosses toward more particles. Footer: i counts particles — glucose 1, NaCl 2, CaCl₂ 3, AlCl₃ 4; at equal molality CaCl₂ freezes lowest.',
      caption: 'Lower vapor pressure, higher boiling point, lower freezing point, osmotic pressure — four faces of one count: i × m.',
    },
    blocks: [
      '- $\\Delta T_b = K_b m i$, $\\Delta T_f = K_f m i$, $\\Pi = iMRT$ — only the particle count enters, never the solute',
      '- $i$ = particles per formula unit: glucose 1, NaCl 2, CaCl₂ 3, AlCl₃ 4 (water: $K_f$ = 1.86, $K_b$ = 0.512)',
    ],
  },
  {
    at: 'Method of Initial Rates',
    mode: 'lead',
    figure: {
      svg: initialRatesSvg,
      alt:
        'A bar chart of the lesson’s three experiments, initial rate in units of 10⁻⁴ M/s, with experiment 1 in the middle: Exp 2 ([A] 0.20 M in red, [B] 0.10 M) rate 8.0×10⁻⁴; Exp 1 ([A] 0.10, [B] 0.10) rate 2.0×10⁻⁴; Exp 3 ([A] 0.10, [B] 0.20 M in blue) rate 4.0×10⁻⁴. A red arrow from Exp 1 to Exp 2: [A] ×2 → rate ×4, 4 = 2², 2nd order in A. A blue arrow from Exp 1 to Exp 3: [B] ×2 → rate ×2, 2 = 2¹, 1st order in B. Right panel, from ratios to the rate law: Exp 1→2 (0.20/0.10)^m = 8.0/2.0 = 4 so m = 2; Exp 1→3 (0.20/0.10)^n = 4.0/2.0 = 2 so n = 1; Rate = k[A]²[B], overall order 3; k = rate / ([A]²[B]) = 2.0×10⁻⁴ / (0.10² × 0.10) = 0.20 M⁻² s⁻¹. Orders come from the data, never from the coefficients; the units of k change with the overall order. Footer: doubling a concentration multiplies the rate by 1, 2 or 4 for order 0, 1 or 2.',
      caption: 'The lesson’s table as bars: doubling [A] quadruples the rate (order 2), doubling [B] doubles it (order 1) — so Rate = k[A]²[B], k = 0.20 M⁻²s⁻¹.',
    },
    blocks: [
      '- Change one concentration at a time: (ratio of concentrations)$^{\\text{order}}$ = ratio of rates',
      '- [A] ×2 → ×4 (order 2), [B] ×2 → ×2 (order 1): Rate $= k[A]^2[B]$, $k = 0.20\\ \\text{M}^{-2}\\text{s}^{-1}$',
    ],
  },
  {
    at: 'Assigning Oxidation States',
    mode: 'lead',
    figure: {
      svg: oxStateSvg,
      alt:
        'A row of six rule boxes in priority order: 1 free element = 0; 2 ion = its charge; 3 F = −1; 4 O = −2 (peroxide −1); 5 H = +1 (hydride −1); 6 the sum equals the overall charge. Left panel, Cr₂O₇²⁻ (dichromate): two blue Cr tiles marked x and seven red O tiles marked −2; the nine must add up to the ion’s charge, −2: 2x + 7(−2) = −2, 2x − 14 = −2, 2x = 12, x = +6 — each Cr is Cr(VI), a strong oxidizing agent; rule 4 fixes every O first and the metal is the one unknown. Right panel, KMnO₄ (permanganate): a K tile +1, a blue Mn tile x and four red O tiles −2; a neutral compound, so the six add up to 0: (+1) + x + 4(−2) = 0, x − 7 = 0, x = +7 — Mn(VII), a powerful oxidizing agent; rule 2 gives K⁺ = +1 and rule 4 gives each O = −2. Footer: fill in the atoms the rules fix (O −2, H +1, group IA +1), then solve for the one unknown so the sum equals the charge.',
      caption: 'Dichromate and permanganate by the rules: fix every O at −2 (and K at +1), then solve the one unknown — Cr +6, Mn +7.',
    },
    blocks: [
      '- Rules in priority: free element 0 → ion = charge → F −1 → O −2 → H +1 → the sum equals the overall charge',
      '- Cr₂O₇²⁻: 2x + 7(−2) = −2 → Cr +6; KMnO₄: 1 + x + 4(−2) = 0 → Mn +7 — both strong oxidizing agents',
    ],
  },
]
