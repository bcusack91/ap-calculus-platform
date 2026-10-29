import type { DeckFigurePlacement } from './index'

/**
 * Electrostatics (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (two charges with force
 * arrows for Coulomb's law and the inverse square, radial field lines of a +
 * and a − point charge with a test charge in a uniform field, a potential
 * "hill" with E pointing downhill, concentric equipotentials and a dipole in a
 * uniform field, the Core Four as a 2×2 grid, the parallel-plate worked example
 * with its numbers, the membrane as a capacitor, a gel with three lanes, and
 * the two midpoint superposition cases) — no textbook, prep-company or AAMC
 * figure was copied. The only numbers drawn are the ones the lesson states
 * (6.0 V / 2.0 mm / 3.0 × 10³ V/m; 70 mV / 7 nm / 10⁷ V/m; 5–10 nm; −70 mV;
 * +4.0 nC, 2.0 m, 72 V).
 *
 * Colours are consistent across the deck: POSITIVE charges and plates RED
 * (fig-accent-2), NEGATIVE charges and plates BLUE (fig-accent); field lines,
 * E arrows and the forces in the Coulomb figure in the text colour; a force on
 * a test charge takes that charge's colour; equipotentials, dimension lines,
 * the insulating bilayer and the gel's travel arrows grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-es-<figure>-<colour>).
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

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A horizontal dimension line with end ticks. */
const DIM = (x1: number, x2: number, y: number) =>
  `<path d="M${x1} ${y - 6} L${x1} ${y + 6} M${x1} ${y} L${x2} ${y} M${x2} ${y - 6} L${x2} ${y + 6}" fill="none" stroke="currentColor" stroke-width="2"/>`

/** A point charge: red disc with + or blue disc with −, optional label underneath. */
const CHARGE = (cx: number, cy: number, r: number, sign: '+' | '−', label = '') => {
  const size = Math.round(r * 1.5)
  return `<g class="${sign === '+' ? 'fig-accent-2' : 'fig-accent'}"><circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2.5"/>${T(cx, cy + Math.round(size * 0.34), size, sign, 'middle', '700')}${label ? T(cx, cy + r + 22, 17, label, 'middle', '700') : ''}</g>`
}

/** n radial field lines around (cx, cy) from radius r1 to r2, arrowheads outward or inward. */
const RADIAL = (cx: number, cy: number, r1: number, r2: number, n: number, marker: string, outward: boolean) => {
  const out: string[] = []
  for (let i = 0; i < n; i++) {
    const a = (2 * Math.PI * i) / n
    const x1 = +(cx + r1 * Math.cos(a)).toFixed(1), y1 = +(cy + r1 * Math.sin(a)).toFixed(1)
    const x2 = +(cx + r2 * Math.cos(a)).toFixed(1), y2 = +(cy + r2 * Math.sin(a)).toFixed(1)
    out.push(outward ? ARR(x1, y1, x2, y2, marker, 2) : ARR(x2, y2, x1, y1, marker, 2))
  }
  return out.join('\n')
}

/** A faint panel background (three-panel lead figures). */
const PANEL = (ox: number) => `<g class="fig-muted"><rect x="${ox}" y="20" width="310" height="420" rx="14" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/></g>`

/* 1 — Coulomb's law: like repel, unlike attract, inverse square (lead, 1000×460) */
const coulombSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-cl')}</defs>
${PANEL(20)}${PANEL(345)}${PANEL(670)}
${T(175, 52, 22, 'like charges repel', 'middle', '700')}
${CHARGE(120, 140, 22, '+')}${CHARGE(230, 140, 22, '+')}
${ARR(96, 140, 30, 140, 'arr-es-cl', 3.5)}${ARR(254, 140, 320, 140, 'arr-es-cl', 3.5)}
${T(63, 126, 18, 'F', 'middle', '700')}${T(287, 126, 18, 'F', 'middle', '700')}
${CHARGE(120, 250, 22, '−')}${CHARGE(230, 250, 22, '−')}
${ARR(96, 250, 30, 250, 'arr-es-cl', 3.5)}${ARR(254, 250, 320, 250, 'arr-es-cl', 3.5)}
${T(63, 236, 18, 'F', 'middle', '700')}${T(287, 236, 18, 'F', 'middle', '700')}
${T(175, 335, 18, 'q₁q₂ &gt; 0 → pushed apart', 'middle')}
${T(175, 368, 18, 'same F on each (3rd law)', 'middle', '700')}
<g class="fig-muted">${T(175, 400, 16, 'even when the charges differ', 'middle')}</g>
${T(500, 52, 22, 'unlike charges attract', 'middle', '700')}
${CHARGE(410, 140, 22, '+')}${CHARGE(590, 140, 22, '−')}
${ARR(434, 140, 494, 140, 'arr-es-cl', 3.5)}${ARR(566, 140, 506, 140, 'arr-es-cl', 3.5)}
${T(464, 126, 18, 'F', 'middle', '700')}${T(536, 126, 18, 'F', 'middle', '700')}
${CHARGE(410, 250, 30, '+', '+2q')}${CHARGE(590, 250, 16, '−', '−q')}
${ARR(444, 250, 500, 250, 'arr-es-cl', 3.5)}${ARR(570, 250, 514, 250, 'arr-es-cl', 3.5)}
${T(472, 236, 18, 'F', 'middle', '700')}${T(542, 236, 18, 'F', 'middle', '700')}
${T(500, 335, 18, 'q₁q₂ &lt; 0 → pulled together', 'middle')}
${T(500, 368, 18, 'equal F on 2q and on q', 'middle', '700')}
<g class="fig-muted">${T(500, 400, 16, 'like gravity, but it can also repel', 'middle')}</g>
${T(825, 52, 22, 'F ∝ q₁q₂ / r²', 'middle', '700')}
${CHARGE(780, 130, 22, '+')}${CHARGE(880, 130, 22, '+')}
${ARR(756, 130, 684, 130, 'arr-es-cl', 3.5)}${ARR(904, 130, 976, 130, 'arr-es-cl', 3.5)}
${T(720, 116, 18, 'F', 'middle', '700')}${T(940, 116, 18, 'F', 'middle', '700')}
<g class="fig-muted">${DIM(780, 880, 172)}${T(830, 194, 16, 'r', 'middle')}</g>
${CHARGE(730, 250, 22, '+')}${CHARGE(930, 250, 22, '+')}
${ARR(706, 250, 688, 250, 'arr-es-cl', 2.5)}${ARR(954, 250, 972, 250, 'arr-es-cl', 2.5)}
${T(697, 236, 17, 'F/4', 'middle', '700')}${T(963, 236, 17, 'F/4', 'middle', '700')}
<g class="fig-muted">${DIM(730, 930, 292)}${T(830, 314, 16, '2r', 'middle')}</g>
${T(825, 350, 18, 'double r → force ÷ 4', 'middle', '700')}
${T(825, 380, 18, 'triple one charge → force × 3', 'middle')}
<g class="fig-muted">${T(825, 410, 16, 'ratio reasoning, not plug-and-chug', 'middle')}</g>
</svg>`

/* 2 — Field lines of + and − point charges; force on a test charge in a uniform field (lead, 1000×460) */
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

/* 3 — Potential as a hill: E downhill, + falls, − climbs, both lower U = qV (replace-table, 560×440) */
const potentialSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-es-pot')}</defs>
${T(280, 28, 17, 'potential as a hill — E points downhill', 'middle', '700')}
<g class="fig-muted"><polygon points="60,120 500,300 500,330 60,330" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/></g>
${LINE(60, 120, 500, 300, 3)}
${T(62, 106, 16, 'high V', 'start', '700')}
${T(506, 312, 15, 'low V', 'start', '700')}
${ARR(221, 126, 351, 179, 'arr-es-pot', 3.5)}
${T(296, 146, 16, 'E (downhill in V)', 'start', '700')}
${CHARGE(158, 142, 16, '+')}
<g class="fig-accent-2">
<defs>${ARROW('arr-es-pot-r')}</defs>
${ARR(175, 149, 233, 173, 'arr-es-pot-r', 3.5)}
${T(150, 352, 16, '+q falls to low V', 'middle', '700')}
</g>
${CHARGE(388, 237, 16, '−')}
<g class="fig-accent">
<defs>${ARROW('arr-es-pot-b')}</defs>
${ARR(371, 230, 313, 206, 'arr-es-pot-b', 3.5)}
${T(405, 352, 16, '−q climbs to high V', 'middle', '700')}
</g>
${T(280, 380, 17, 'both moves lower U = qV', 'middle', '700')}
${T(280, 408, 15, 'E: vector at a point (N/C) · V: scalar at a point (volts)', 'middle')}
${T(280, 432, 15, 'U = qV: joules — belongs to the charge AT that point', 'middle')}
</svg>`

/* 4 — Equipotentials around a point charge; a dipole in a uniform field (lead, 1000×460) */
const equipotentialSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-eq')}</defs>
<g class="fig-muted">
${LINE(500, 30, 500, 440, 1.5)}
<circle cx="240" cy="250" r="55" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/>
<circle cx="240" cy="250" r="100" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/>
<circle cx="240" cy="250" r="145" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/>
</g>
${T(250, 40, 22, 'equipotentials ⊥ field lines', 'middle', '700')}
${RADIAL(240, 250, 34, 170, 8, 'arr-es-eq', true)}
${CHARGE(240, 250, 24, '+')}
${T(301, 225, 15, 'V high', 'start')}
${T(386, 190, 15, 'V low', 'start')}
<g class="fig-accent">
<defs>${ARROW('arr-es-eq-b')}</defs>
<path d="M334 284 A100 100 0 0 1 282 341" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-es-eq-b)"/>
${T(395, 300, 17, 'W = 0', 'start', '700')}
</g>
${T(250, 447, 16, 'along an equipotential the field does no work', 'middle')}
${T(750, 40, 22, 'a dipole in a uniform field', 'middle', '700')}
${[100, 150, 200, 250, 300, 350].map((y) => ARR(540, y, 955, y, 'arr-es-eq', 1.5)).join('\n')}
${T(963, 256, 18, 'E', 'start', '700')}
<g class="fig-muted">
${LINE(676, 235, 824, 235, 3, true)}
${T(664, 241, 16, '−', 'middle', '700')}${T(836, 241, 16, '+', 'middle', '700')}
${T(880, 241, 15, 'aligned', 'start')}
</g>
${LINE(690, 290, 810, 180, 5)}
<path d="M733.6 280.1 A48 48 0 0 1 702.7 243.3" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-es-eq)"/>
${T(752, 282, 18, 'τ', 'start', '700')}
${CHARGE(810, 180, 18, '+')}${CHARGE(690, 290, 18, '−')}
<g class="fig-accent-2">
<defs>${ARROW('arr-es-eq-r')}</defs>
${ARR(830, 180, 900, 180, 'arr-es-eq-r', 3.5)}
${T(908, 186, 18, 'F', 'start', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-es-eq-b2')}</defs>
${ARR(670, 290, 600, 290, 'arr-es-eq-b2', 3.5)}
${T(592, 296, 18, 'F', 'end', '700')}
</g>
${T(750, 400, 18, 'net force = 0: equal and opposite F', 'middle')}
${T(750, 428, 18, 'torque ≠ 0 → rotates to align with E', 'middle', '700')}
<g class="fig-muted">${T(750, 452, 15, 'think of a polar molecule like water', 'middle')}</g>
</svg>`

/* 5 — The Core Four as a 2×2 grid: pair vs field, 1/r² vs 1/r (replace-table, 560×440) */
const cell = (x: number, y: number, formula: string, desc: string, kind: string) =>
  `${BOX(x, y, 190, 130, 12, 2.5, 0.05)}${T(x + 95, y + 58, 23, formula, 'middle', '700')}${T(x + 95, y + 90, 14, desc, 'middle')}<g class="fig-muted">${T(x + 95, y + 112, 13, kind, 'middle')}</g>`
const coreFourSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 26, 17, 'the Core Four — one grid', 'middle', '700')}
${T(190, 62, 16, 'pair: both charges', 'middle', '700')}
${T(420, 62, 16, 'field: one charge', 'middle', '700')}
${T(50, 135, 18, '1/r²', 'middle', '700')}${T(50, 158, 13, 'force-', 'middle')}${T(50, 174, 13, 'flavored', 'middle')}
${T(50, 295, 18, '1/r', 'middle', '700')}${T(50, 318, 13, 'energy-', 'middle')}${T(50, 334, 13, 'flavored', 'middle')}
${cell(95, 80, 'F = kq₁q₂ / r²', 'force between two charges', 'vector')}
${cell(325, 80, 'E = kQ / r²', 'field of one charge', 'vector')}
${cell(95, 240, 'U = kq₁q₂ / r', 'energy of a pair', 'scalar')}
${cell(325, 240, 'V = kQ / r', 'potential of one charge', 'scalar')}
<g class="fig-muted">
<defs>${ARROW('arr-es-c4-m')}</defs>
${ARR(288, 145, 322, 145, 'arr-es-c4-m', 2.5)}${T(305, 136, 13, '÷ q', 'middle')}
${ARR(288, 305, 322, 305, 'arr-es-c4-m', 2.5)}${T(305, 296, 13, '÷ q', 'middle')}
${ARR(190, 213, 190, 237, 'arr-es-c4-m', 2.5)}${T(204, 230, 13, '× r', 'start')}
${ARR(420, 213, 420, 237, 'arr-es-c4-m', 2.5)}${T(434, 230, 13, '× r', 'start')}
</g>
${T(280, 400, 15, 'F = qE, U = qV; for a point charge V = E·r and U = F·r', 'middle')}
<g class="fig-muted">${T(280, 426, 14, '1/r² pair (F, E) are vectors; 1/r pair (V, U) are scalars', 'middle')}</g>
</svg>`

/* 6 — Worked example: parallel plates, 6.0 V across 2.0 mm (after, 1000×460) */
const platesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-pl')}</defs>
${LINE(200, 80, 200, 40, 2)}${LINE(200, 40, 372, 40, 2)}
${LINE(372, 24, 372, 56, 3)}${LINE(388, 32, 388, 48, 6)}
${LINE(388, 40, 560, 40, 2)}${LINE(560, 40, 560, 80, 2)}
${T(380, 18, 18, '6.0 V', 'middle', '700')}
<g class="fig-accent-2">
<rect x="190" y="80" width="20" height="300" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>
${T(200, 404, 18, '+ plate', 'middle', '700')}
</g>
<g class="fig-accent">
<rect x="550" y="80" width="20" height="300" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>
${T(560, 404, 18, '− plate', 'middle', '700')}
</g>
${[110, 150, 190, 230, 270, 310, 350].map((y) => ARR(214, y, 545, y, 'arr-es-pl', 2)).join('\n')}
${T(380, 98, 20, 'E', 'middle', '700')}
<g class="fig-muted">${DIM(200, 560, 428)}</g>
${T(380, 452, 18, 'd = 2.0 mm', 'middle', '700')}
${T(620, 120, 22, 'E = V / d', 'start', '700')}
${T(620, 160, 20, '= 6.0 V / (2.0 × 10⁻³ m)')}
${T(620, 200, 22, '= 3.0 × 10³ V/m', 'start', '700')}
${T(620, 260, 18, 'uniform between the plates')}
${T(620, 290, 18, 'points from + plate to − plate')}
${T(620, 320, 18, '(N/C = V/m)')}
<g class="fig-muted">${T(620, 370, 16, 'evenly spaced lines = uniform E')}${T(620, 396, 16, 'convert mm → m before dividing')}</g>
</svg>`

/* 7 — The membrane as a parallel-plate capacitor (lead, 1000×460) */
const plusRow = [90, 140, 190, 240, 290, 440, 490, 540]
const membraneSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-mem')}</defs>
<g class="fig-muted">
<rect x="60" y="190" width="285" height="80" rx="4" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<rect x="385" y="190" width="215" height="80" rx="4" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<path d="M618 190 L630 190 M624 190 L624 270 M618 270 L630 270" fill="none" stroke="currentColor" stroke-width="2"/>
${T(624, 180, 16, 'd ≈ 5–10 nm', 'middle')}
</g>
<rect x="345" y="190" width="8" height="80" fill="currentColor" fill-opacity="0.5"/>
<rect x="377" y="190" width="8" height="80" fill="currentColor" fill-opacity="0.5"/>
<g class="fig-accent-2">${plusRow.map((x) => T(x, 181, 22, '+', 'middle', '700')).join('')}</g>
<g class="fig-accent">${plusRow.map((x) => T(x, 300, 24, '−', 'middle', '700')).join('')}</g>
${T(90, 237, 17, 'lipid bilayer (insulator)', 'start', '700')}
${ARR(440, 198, 440, 262, 'arr-es-mem', 3)}${ARR(500, 198, 500, 262, 'arr-es-mem', 3)}${ARR(560, 198, 560, 262, 'arr-es-mem', 3)}
${T(578, 241, 18, 'E', 'start', '700')}
${T(340, 145, 20, 'outside: 0 mV — conducting fluid', 'middle')}
${T(340, 352, 20, 'inside: −70 mV — conducting fluid', 'middle')}
${CHARGE(365, 205, 14, '+')}
<g class="fig-accent-2">
<defs>${ARROW('arr-es-mem-r')}</defs>
${ARR(365, 222, 365, 296, 'arr-es-mem-r', 3.5)}
${T(384, 318, 16, 'Na⁺ in an open channel: pushed inward', 'start', '700')}
</g>
${T(700, 110, 22, 'a capacitor in the cell', 'start', '700')}
${T(700, 150, 15, 'positive charge lines the outer face')}
${T(700, 178, 15, 'negative charge lines the inner face')}
${T(700, 220, 20, 'E = V/d', 'start', '700')}
${T(700, 250, 17, '70 mV over 7 nm (worked example)')}
${T(700, 282, 20, '≈ 1 × 10⁷ V/m', 'start', '700')}
${T(700, 325, 17, 'tiny voltage, giant field')}
<g class="fig-muted">${T(700, 358, 15, 'depolarize: |V| shrinks → E shrinks')}${T(700, 384, 15, 'E points outside → inside at rest')}</g>
</svg>`

/* 8 — Gel electrophoresis: uniform field, DNA runs to the anode, gel sorts by size (lead, 1000×460) */
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
${ARR(205, 110, 205, 400, 'arr-es-gel', 3)}
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

/* 9 — Superposition at the midpoint: +Q +Q (E = 0, V adds) vs +Q −Q (V = 0, E adds) (lead, 1000×460) */
const superpositionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-sup')}</defs>
<g class="fig-muted">${LINE(500, 30, 500, 440, 1.5)}</g>
${T(250, 40, 22, 'midpoint between +Q and +Q', 'middle', '700')}
${CHARGE(100, 200, 22, '+', '+Q')}${CHARGE(400, 200, 22, '+', '+Q')}
<circle cx="250" cy="200" r="5" fill="currentColor"/>
${ARR(252, 188, 330, 188, 'arr-es-sup', 3.5)}${T(292, 176, 16, 'E from left +Q', 'middle')}
${ARR(248, 212, 170, 212, 'arr-es-sup', 3.5)}${T(208, 236, 16, 'E from right +Q', 'middle')}
<g class="fig-muted">${DIM(122, 245, 270)}${T(184, 292, 16, 'r', 'middle')}${DIM(255, 378, 270)}${T(316, 292, 16, 'r', 'middle')}</g>
${T(250, 335, 19, 'E = 0 — the two fields cancel', 'middle', '700')}
${T(250, 365, 18, 'V = kQ/r + kQ/r = 2kQ/r ≠ 0', 'middle')}
<g class="fig-muted">${T(250, 398, 15, 'worked example: +4.0 nC each, 2.0 m apart → V = 72 V, E = 0', 'middle')}</g>
${T(250, 428, 16, 'scalars add; vectors can cancel', 'middle')}
${T(750, 40, 22, 'midpoint between +Q and −Q', 'middle', '700')}
${CHARGE(600, 200, 22, '+', '+Q')}${CHARGE(900, 200, 22, '−', '−Q')}
<circle cx="750" cy="200" r="5" fill="currentColor"/>
${ARR(752, 188, 830, 188, 'arr-es-sup', 3.5)}${T(792, 176, 16, 'E from +Q (away)', 'middle')}
${ARR(752, 212, 830, 212, 'arr-es-sup', 3.5)}${T(792, 236, 16, 'E from −Q (toward)', 'middle')}
<g class="fig-muted">${DIM(622, 745, 270)}${T(684, 292, 16, 'r', 'middle')}${DIM(755, 878, 270)}${T(816, 292, 16, 'r', 'middle')}</g>
${T(750, 335, 19, 'E ≠ 0 — both point + → −, they add', 'middle', '700')}
${T(750, 365, 18, 'V = kQ/r − kQ/r = 0', 'middle')}
${T(750, 398, 16, 'E = 0 and V = 0 are independent facts', 'middle', '700')}
<g class="fig-muted">${T(750, 428, 15, 'never assume one is zero because the other is', 'middle')}</g>
</svg>`

export const mcatElectrostaticsFigures: DeckFigurePlacement[] = [
  {
    at: "Coulomb's Law",
    mode: 'lead',
    figure: {
      svg: coulombSvg,
      alt:
        'Three panels of point charges with force arrows. Left, like charges repel: two positive charges and, below, two negative charges, each pair with equal arrows F pointing away from each other — q₁q₂ > 0 means pushed apart, the same F on each (third law) even when the charges differ. Middle, unlike charges attract: a positive and a negative charge with equal arrows pointing toward each other, and below a large +2q with a small −q still pulling on each other with equal F — q₁q₂ < 0 means pulled together; like gravity, but it can also repel. Right, F ∝ q₁q₂/r²: two positive charges a distance r apart with force arrows F, and below the same charges 2r apart with arrows one quarter as long labelled F/4 — double r and the force divides by 4, triple one charge and it triples; ratio reasoning, not plug-and-chug.',
      caption: 'Coulomb’s law as pictures: like charges push apart, unlike charges pull together with equal force on each, and doubling the separation cuts the force to a quarter.',
    },
    blocks: [
      '- $F = kq_1q_2/r^2$: like charges repel, unlike attract; each charge feels the same magnitude (3rd law)',
      '- Scale factor by factor: double $r$ → $F/4$; triple one charge → $3F$ — ratio reasoning, not plug-and-chug',
    ],
  },
  {
    at: 'Electric Field',
    mode: 'lead',
    figure: {
      svg: fieldSvg,
      alt:
        'Three panels. Left: a positive point charge with eight radial field lines whose arrowheads point away from it; denser lines mean a stronger field, and the field is there with or without a test charge. Middle: a negative point charge with eight radial lines whose arrowheads point toward it; E = F/q is the force per unit positive charge, N/C = V/m. Right: six evenly spaced horizontal field lines of a uniform field pointing right; a positive test charge has a red force arrow F pointing right, along E, and a negative test charge has a blue force arrow F pointing left, opposite E — the same magnitude F = qE for the same size of charge.',
      caption: 'Field lines leave positive charges and enter negative ones; a positive charge is pushed along the field and a negative charge against it.',
    },
    blocks: [
      '- $\\vec E = \\vec F/q$ (N/C = V/m): lines leave $+$, enter $-$; denser lines = stronger field',
      '- A $+$ charge is pushed along $\\vec E$, a $-$ charge against it — same $|F| = qE$ for the same $|q|$',
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
      '- **E**: vector at a point (N/C) · **V**: scalar at a point (volts) · **U = qV**: joules, belongs to the charge',
      '- Positive charges fall from high $V$ to low $V$; negative charges climb from low $V$ to high $V$',
      '- Both moves **lower** $U = qV$ — switch to energy language whenever the signs get confusing',
    ],
  },
  {
    at: 'Equipotentials and Dipoles',
    mode: 'lead',
    figure: {
      svg: equipotentialSvg,
      alt:
        'Left: a positive point charge with eight radial field lines pointing outward and three dashed concentric circles — the equipotentials, V high near the charge and V low farther out — which cross every field line at right angles. A blue arrow runs along the middle circle labelled W = 0: along an equipotential the field does no work. Right: a uniform field of horizontal lines pointing right, labelled E, with a tilted dipole rod carrying a positive charge at its upper-right end and a negative charge at its lower-left end. A red force F on the positive end points right, a blue force F on the negative end points left; a curved arrow τ shows the rod turning, and a dashed horizontal ghost of the rod shows the aligned position. Net force = 0 (equal and opposite F); torque ≠ 0, so it rotates to align with E — think of a polar molecule like water.',
      caption: 'Equipotentials are perpendicular to field lines (no work along one); a dipole in a uniform field feels no net force but a torque that turns it into line with E.',
    },
    blocks: [
      '- Equipotentials cut field lines at right angles; moving a charge along one costs zero work from the field',
      '- A dipole in a uniform field: zero net force, but a torque that turns it into line with $\\vec E$',
    ],
  },
  {
    at: 'The Core Four',
    mode: 'replace-table',
    figure: {
      svg: coreFourSvg,
      alt:
        'A two-by-two grid. Columns: pair quantities (both charges) and field quantities (one charge). Rows: 1/r² force-flavored and 1/r energy-flavored. Top left F = kq₁q₂/r², the force between two charges, a vector; top right E = kQ/r², the field of one charge, a vector; bottom left U = kq₁q₂/r, the energy of a pair, a scalar; bottom right V = kQ/r, the potential of one charge, a scalar. Grey arrows link the cells: divide by q to go from F to E and from U to V; multiply by r to go from F to U and from E to V. Below: F = qE, U = qV; for a point charge V = E·r and U = F·r; the 1/r² pair are vectors, the 1/r pair scalars.',
      caption: 'The Core Four on one grid: pair quantities use both charges, field quantities one; force-flavored F and E fall as 1/r², energy-flavored U and V as 1/r.',
    },
    blocks: [
      '- **Pair** quantities ($F$, $U$) contain both charges; **field** quantities ($E$, $V$) contain one',
      '- **Force-flavored** $F, E \\propto 1/r^2$ (vectors); **energy-flavored** $U, V \\propto 1/r$ (scalars)',
      '- Bridges: $F = qE$, $U = qV$; for a point charge $V = E \\cdot r$ — a quick consistency check',
    ],
  },
  {
    at: 'Worked Example — Parallel Plates',
    mode: 'after',
    figure: {
      svg: platesSvg,
      alt:
        'Two vertical plates, a red positive plate on the left and a blue negative plate on the right, joined by a wire through a battery symbol labelled 6.0 V. Seven evenly spaced horizontal field lines labelled E run from the positive plate to the negative plate. A dimension line under the plates reads d = 2.0 mm. Right: E = V/d = 6.0 V / (2.0 × 10⁻³ m) = 3.0 × 10³ V/m, uniform between the plates, pointing from the + plate to the − plate (N/C = V/m); evenly spaced lines mean a uniform field; convert mm to m before dividing.',
      caption: 'The worked example drawn: 6.0 V across plates 2.0 mm apart gives a uniform field E = V/d = 3.0 × 10³ V/m from the positive plate to the negative plate.',
    },
    blocks: [
      '- $E = V/d = 6.0\\ \\text{V} / (2.0 \\times 10^{-3}\\ \\text{m}) = 3.0 \\times 10^3$ V/m — convert mm to m first',
      '- Uniform between the plates (evenly spaced lines), pointing from the $+$ plate to the $-$ plate',
    ],
  },
  {
    at: 'The Membrane as a Parallel-Plate Capacitor',
    mode: 'lead',
    figure: {
      svg: membraneSvg,
      alt:
        'A horizontal grey band, the lipid bilayer (insulator), with conducting fluid above (outside: 0 mV) and below (inside: −70 mV). Red plus signs line the outer face and blue minus signs the inner face, like capacitor plates. Three arrows E inside the band point downward, from outside to inside; a dimension line gives the thickness d ≈ 5–10 nm. An open channel breaks the band and a red Na⁺ ion in it has an arrow pointing inward: pushed inward by the field. Right: a capacitor in the cell — positive charge lines the outer face, negative the inner face; E = V/d, 70 mV over 7 nm (worked example) ≈ 1 × 10⁷ V/m: tiny voltage, giant field; depolarizing shrinks |V| and so shrinks E; E points outside → inside at rest.',
      caption: 'The resting membrane as a parallel-plate capacitor: charge on the two faces of an insulating bilayer gives a uniform field E = V/d of about 10⁷ V/m pointing inward.',
    },
    blocks: [
      '- Insulating bilayer between two conducting fluids = parallel plates: $E = V/d$, pointing outside → inside',
      '- 70 mV over 7 nm gives $E \\approx 10^7$ V/m — a tiny voltage, a giant field; depolarizing shrinks both',
    ],
  },
  {
    at: 'Gel Electrophoresis',
    mode: 'lead',
    figure: {
      svg: gelSvg,
      alt:
        'A vertical gel with a blue negative electrode (cathode) along the top and a red positive electrode (anode) along the bottom; an arrow E inside the gel points downward from cathode to anode. Three wells at the top, labelled large, medium and small, each with a dashed travel arrow down to a band: the large fragment has moved least, the medium one farther, the small one farthest. Right: same force per charge, drag sorts by size — the phosphate backbone makes DNA uniformly negative, so F = qE drives it toward the positive electrode; drag in the gel grows with size, so small fragments travel farthest in the same time; in SDS-PAGE the SDS coat gives proteins a uniform negative charge-to-mass, so they are again sorted by size. The field pulls; the gel sieves.',
      caption: 'Gel electrophoresis: a uniform field pulls negatively charged DNA toward the anode with the same force per charge, and the gel’s size-dependent drag does the sorting.',
    },
    blocks: [
      '- DNA’s phosphate backbone is uniformly negative, so $F = qE$ drives it toward the $+$ electrode (anode)',
      '- The field gives the same force per charge; gel drag grows with size, so small fragments travel farthest',
    ],
  },
  {
    at: 'Strategy 2 — Superposition',
    mode: 'lead',
    figure: {
      svg: superpositionSvg,
      alt:
        'Two panels, each with two charges a distance r either side of a midpoint dot. Left, +Q and +Q: at the midpoint the field from the left charge points right and the field from the right charge points left, equal and opposite — E = 0, the two fields cancel — while V = kQ/r + kQ/r = 2kQ/r is not zero; the worked example, +4.0 nC each 2.0 m apart, gives V = 72 V and E = 0; scalars add, vectors can cancel. Right, +Q and −Q: the field from +Q (away from it) and the field from −Q (toward it) both point right, so E ≠ 0 and they add, while V = kQ/r − kQ/r = 0. E = 0 and V = 0 are independent facts; never assume one is zero because the other is.',
      caption: 'Superposition at the midpoint: two equal positive charges give E = 0 but V = 2kQ/r; a positive and a negative charge give V = 0 but a doubled field pointing from + to −.',
    },
    blocks: [
      '- Fields add as **vectors** (can cancel), potentials as **signed numbers** (can cancel) — never assume both',
      '- $+Q,+Q$ midpoint: $E = 0$, $V = 2kQ/r$ · $+Q,-Q$ midpoint: $V = 0$, $E$ adds, pointing from $+$ to $-$',
    ],
  },
]
