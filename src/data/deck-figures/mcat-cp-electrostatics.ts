import type { DeckFigurePlacement } from './index'

/**
 * Electrostatics Part 1: Charge & Coulomb's Law (MCAT C/P) — figures for the
 * in-class deck, plus the drawing helpers shared by the three electrostatics
 * decks. Authored 2026-10-29 as one deck; split 2026-11-25 when the topic
 * became three (Part 2 is in mcat-cp-electric-fields.ts, Part 3 in
 * mcat-cp-electric-potential.ts).
 *
 * Every drawing below is ours, drawn from the concept (an atom sketch with a
 * ladder of allowed charges, a metal and a plastic ball beside a membrane, the
 * three ways to charge, a rod polarizing a neutral ball, spheres sharing
 * charge, the four steps of induction, two charges with force arrows for
 * Coulomb's law, a force triangle with the zero-force points on a line, and
 * the two superposition worked examples) — no textbook, prep-company or AAMC
 * figure was copied. The only numbers drawn are the ones the lesson states:
 * e = 1.6 × 10⁻¹⁹ C; 5.0 × 10⁹ electrons → −0.80 nC and the impossible 2.5e;
 * −12 and +4.0 μC → −4.0 each (5.0 × 10¹³ electrons) → −2.0 each;
 * 2.0 × 10¹⁰ electrons → +3.2 nC; 3 N and 4 N → 5 N (1 N to 7 N); +1.0, −4.0
 * and +2.0 μC at 0, 0.40 and 0.10 m → 1.8 N + 0.80 N = 2.6 N, balance at
 * −0.40 m; 0.20 N and 0.15 N → 0.25 N at 37°. Positions on the number lines,
 * the zero-force points and the 37° are computed from those numbers in code.
 *
 * Colours are consistent across the three decks: POSITIVE charges and plates
 * RED (fig-accent-2), NEGATIVE charges and plates BLUE (fig-accent); field
 * lines, E arrows and the forces in the Coulomb figure in the text colour; a
 * force on a test charge takes that charge's colour, and a NET force or field
 * is red; equipotentials, dimension lines and guides grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-es-<figure>-<colour>).
 */

export const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

export const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
export const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A rounded box outlined in the current colour; `fillOpacity` > 0 tints it with the same colour. */
export const BOX = (x: number, y: number, w: number, h: number, rx = 12, sw = 2.5, fillOpacity = 0) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"/>`

/** A straight arrow in the current colour ending in the given marker. */
export const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
export const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A horizontal dimension line with end ticks. */
export const DIM = (x1: number, x2: number, y: number) =>
  `<path d="M${x1} ${y - 6} L${x1} ${y + 6} M${x1} ${y} L${x2} ${y} M${x2} ${y - 6} L${x2} ${y + 6}" fill="none" stroke="currentColor" stroke-width="2"/>`

/** A point charge: red disc with + or blue disc with −, optional label underneath. */
export const CHARGE = (cx: number, cy: number, r: number, sign: '+' | '−', label = '') => {
  const size = Math.round(r * 1.5)
  return `<g class="${sign === '+' ? 'fig-accent-2' : 'fig-accent'}"><circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2.5"/>${T(cx, cy + Math.round(size * 0.34), size, sign, 'middle', '700')}${label ? T(cx, cy + r + 22, 17, label, 'middle', '700') : ''}</g>`
}

/** n radial field lines around (cx, cy) from radius r1 to r2, arrowheads outward or inward. */
export const RADIAL = (cx: number, cy: number, r1: number, r2: number, n: number, marker: string, outward: boolean) => {
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
export const PANEL = (ox: number) => `<g class="fig-muted"><rect x="${ox}" y="20" width="310" height="420" rx="14" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/></g>`

/** Wraps drawing code in one of the theme colour groups. */
export const G = (cls: 'accent' | 'accent-2' | 'muted', inner: string) => `<g class="fig-${cls}">${inner}</g>`

/** A circle outlined in the current colour; `fillOpacity` > 0 tints it. */
export const CIRC = (cx: number, cy: number, r: number, sw = 2.5, fillOpacity = 0, dashed = false) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** Bold + or − glyphs at the given points, in the charge colours (red +, blue −). */
export const SIGNS = (sign: '+' | '−', pts: readonly (readonly [number, number])[], size = 20) =>
  G(sign === '+' ? 'accent-2' : 'accent', pts.map(([x, y]) => T(+x.toFixed(1), +(y + size * 0.34).toFixed(1), size, sign, 'middle', '700')).join(''))

/** n points evenly spaced on a circle (angles in degrees, clockwise from +x on screen). */
export const RING = (cx: number, cy: number, r: number, n: number, startDeg = 0, spanDeg = 360): [number, number][] =>
  Array.from({ length: n }, (_, i) => {
    const a = ((startDeg + (spanDeg === 360 ? (360 * i) / n : (spanDeg * i) / Math.max(1, n - 1))) * Math.PI) / 180
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number]
  })

/** A disc in the figure's background colour: hides an axis line where a charge sits on it. */
export const MASK = (cx: number, cy: number, r: number) => `<circle class="fig-bg" cx="${cx}" cy="${cy}" r="${r}" stroke="none"/>`

/** A label on a background-coloured plate, so lines behind it do not run through the text. */
export const TAG = (x: number, y: number, size: number, text: string, w: number, weight = '700') =>
  `<rect class="fig-bg" x="${x - w / 2}" y="${y - size}" width="${w}" height="${size + 6}" stroke="none"/>${T(x, y, size, text, 'middle', weight)}`

/** A path in the current colour (no fill). */
export const PATH = (d: string, sw = 2.5, dashed = false, marker = '') =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}${marker ? ` marker-end="url(#${marker})"` : ''}/>`

/** A panel background at any position (PANEL is the three-across version). */
export const PANEL_AT = (x: number, y: number, w: number, h: number) =>
  `<g class="fig-muted"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/></g>`

/**
 * Field lines are TRACED, not sketched: `traceLine` follows a field function
 * numerically (fixed-step midpoint rule) from (x, y) along E (`dir` = 1) or
 * against it (−1) until it leaves the box or `stop` says so, and returns the
 * points. `pointField` is the field of a set of point charges (only its
 * direction matters here, so k and the units are dropped).
 */
export type Src = { x: number; y: number; q: number }
export type Field = (x: number, y: number) => [number, number]
export const pointField = (src: readonly Src[]): Field => (x, y) => {
  let ex = 0, ey = 0
  for (const s of src) {
    const dx = x - s.x, dy = y - s.y
    const r3 = Math.pow(dx * dx + dy * dy, 1.5) || 1e-9
    ex += (s.q * dx) / r3
    ey += (s.q * dy) / r3
  }
  return [ex, ey]
}
export const nearAny = (src: readonly Src[], r: number) => (x: number, y: number) => src.some((s) => Math.hypot(x - s.x, y - s.y) < r)
export const traceLine = (field: Field, x: number, y: number, dir: 1 | -1, box: readonly [number, number, number, number], stop: (x: number, y: number) => boolean, step = 3): [number, number][] => {
  const pts: [number, number][] = [[x, y]]
  for (let i = 0; i < 1500; i++) {
    const [ex, ey] = field(x, y)
    const m = Math.hypot(ex, ey)
    if (m < 1e-12) break
    const [fx, fy] = field(x + (dir * ex * step) / (2 * m), y + (dir * ey * step) / (2 * m))
    const n = Math.hypot(fx, fy)
    if (n < 1e-12) break
    x += (dir * fx * step) / n
    y += (dir * fy * step) / n
    if (x < box[0] || x > box[2] || y < box[1] || y > box[3]) break
    pts.push([x, y])
    if (stop(x, y)) break
  }
  return pts
}
/**
 * Draws a traced line (points ordered ALONG the field) with one arrowhead at
 * the fraction `at` of its length. Points are thinned to keep the SVG small.
 */
export const fieldPath = (pts: readonly (readonly [number, number])[], marker: string, at = 0.5, sw = 2) => {
  if (pts.length < 4) return ''
  const k = Math.max(2, Math.min(pts.length - 2, Math.round(pts.length * at)))
  const d = (seg: readonly (readonly [number, number])[]) => {
    const keep = seg.filter((_, i) => i % 3 === 0 || i === seg.length - 1)
    return keep.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  }
  return `${PATH(d(pts.slice(0, k + 1)), sw, false, marker)}${PATH(d(pts.slice(k)), sw)}`
}

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

/** A neutral ball (text colour, faint fill). */
const BALL = (cx: number, cy: number, r: number) => CIRC(cx, cy, r, 2.5, 0.06)
/** A charged rod drawn as a rounded bar with its sign repeated along it. */
const ROD = (x: number, y: number, w: number, sign: '+' | '−') =>
  G(sign === '+' ? 'accent-2' : 'accent', `<rect x="${x}" y="${y}" width="${w}" height="30" rx="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>${(w < 80 ? [0.3, 0.7] : [0.2, 0.5, 0.8]).map((f) => T(Math.round(x + w * f), y + 22, 20, sign, 'middle', '700')).join('')}`)
/** The ground symbol hanging from (x, y). */
const GROUND = (x: number, y: number) => `${LINE(x - 16, y, x + 16, y, 2.5)}${LINE(x - 10, y + 7, x + 10, y + 7, 2.5)}${LINE(x - 4, y + 14, x + 4, y + 14, 2.5)}`

/* 2 — Electric charge: the atom, quantized charge, conserved charge (lead, 1000×460) */
const ELECTRONS = RING(175, 185, 82, 3, -35)
const LADDER = [3, 2, 1, 0, -1, -2, -3]
const chargeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${PANEL(20)}${PANEL(345)}${PANEL(670)}
${T(175, 52, 22, 'two kinds of charge', 'middle', '700')}
${G('muted', CIRC(175, 185, 82, 2, 0, true))}
${G('muted', `<circle cx="187" cy="174" r="12" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/><circle cx="164" cy="197" r="12" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/>`)}
${CHARGE(164, 174, 12, '+')}${CHARGE(187, 197, 12, '+')}
${ELECTRONS.map(([x, y]) => CHARGE(Math.round(x), Math.round(y), 10, '−')).join('')}
${G('accent-2', T(175, 312, 18, 'proton +e', 'middle', '700'))}
${T(175, 338, 16, 'and neutron (0): locked in the nucleus', 'middle')}
${G('accent', T(175, 376, 18, 'electron −e', 'middle', '700'))}
${T(175, 402, 16, 'outside the nucleus, able to move', 'middle')}
${G('muted', T(175, 428, 15, 'e = 1.6 × 10⁻¹⁹ C', 'middle'))}
${T(500, 52, 22, 'quantized: q = ±ne', 'middle', '700')}
${LINE(430, 84, 430, 306, 2.5)}
${LADDER.map((n, i) => `${LINE(420, 90 + 35 * i, 440, 90 + 35 * i, 2.5)}${T(452, 96 + 35 * i, 17, n === 0 ? '0' : `${n > 0 ? '+' : '−'}${Math.abs(n) === 1 ? '' : Math.abs(n)}e`, 'start', n === 0 ? '700' : '400')}`).join('')}
${G('accent-2', `${LINE(420, 107.5, 440, 107.5, 2.5, true)}${T(530, 113, 17, '2.5e — never', 'start', '700')}`)}
${G('muted', T(530, 201, 15, 'only these steps'))}
${T(500, 348, 17, '5.0 × 10⁹ extra electrons:', 'middle')}
${T(500, 374, 16, 'q = −(5.0 × 10⁹)(1.6 × 10⁻¹⁹ C)', 'middle')}
${G('accent', T(500, 402, 18, '= −0.80 nC', 'middle', '700'))}
${G('muted', T(500, 428, 15, 'n is always a whole number', 'middle'))}
${T(825, 52, 22, 'conserved: moved, not made', 'middle', '700')}
<rect x="700" y="120" width="86" height="100" rx="20" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${T(743, 108, 16, 'hair', 'middle')}
<ellipse cx="900" cy="170" rx="46" ry="54" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${T(900, 104, 16, 'balloon', 'middle')}
${SIGNS('+', [[725, 150], [760, 172], [728, 196]])}
${SIGNS('−', [[884, 148], [916, 170], [888, 196]])}
<g class="fig-accent"><defs>${ARROW('arr-es-ch-b')}</defs>${ARR(792, 170, 846, 170, 'arr-es-ch-b', 3)}${T(819, 158, 15, 'e⁻', 'middle', '700')}</g>
${G('accent-2', T(743, 248, 18, '+Q', 'middle', '700'))}${G('accent', T(900, 252, 18, '−Q', 'middle', '700'))}
${T(825, 300, 18, 'total charge is still 0', 'middle', '700')}
${G('accent', T(825, 344, 17, 'gain electrons → negative', 'middle', '700'))}
${G('accent-2', T(825, 372, 17, 'lose electrons → positive', 'middle', '700'))}
${G('muted', `${T(825, 404, 15, 'in a solid only electrons move;', 'middle')}${T(825, 426, 15, 'protons stay in their nuclei', 'middle')}`)}
</svg>`

/* 3 — Conductors and insulators: where a dab of charge ends up; the membrane (lead, 1000×460) */
const DAB: [number, number][] = [[212, 128], [228, 146], [206, 150], [222, 166], [236, 162], [198, 134], [214, 178], [240, 180], [230, 124], [196, 164]]
const FACE = [706, 748, 790, 832, 874, 916, 944]
const conductorsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${PANEL(20)}${PANEL(345)}${PANEL(670)}
${T(175, 52, 22, 'conductor (metal)', 'middle', '700')}
${BALL(175, 180, 82)}
${SIGNS('−', RING(175, 180, 68, 10, 18))}
${T(175, 300, 17, 'charges move freely', 'middle')}
${T(175, 334, 17, 'extra charge spreads over', 'middle', '700')}
${T(175, 358, 17, 'the whole OUTER surface', 'middle', '700')}
${G('muted', `${T(175, 396, 15, 'like charges repel, so they get', 'middle')}${T(175, 418, 15, 'as far apart as they can', 'middle')}`)}
${T(500, 52, 22, 'insulator (plastic)', 'middle', '700')}
${BALL(500, 180, 82)}
${SIGNS('−', DAB.map(([x, y]) => [x + 325, y] as [number, number]))}
${T(500, 300, 17, 'charges stay where they are put', 'middle')}
${T(500, 334, 17, 'the same dab of charge', 'middle', '700')}
${T(500, 358, 17, 'stays in one spot', 'middle', '700')}
${G('muted', `${T(500, 396, 15, 'rubber, glass, plastic, dry air', 'middle')}`)}
${T(825, 52, 22, 'the same split in a cell', 'middle', '700')}
${T(825, 104, 16, 'outside fluid: conducts', 'middle')}
${SIGNS('+', FACE.map((x) => [x, 132] as [number, number]))}
<g class="fig-muted"><rect x="690" y="148" width="270" height="64" rx="4" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2"/></g>
${T(825, 186, 16, 'lipid bilayer: insulates', 'middle', '700')}
${SIGNS('−', FACE.map((x) => [x, 228] as [number, number]), 22)}
${T(825, 266, 16, 'inside fluid: conducts', 'middle')}
${T(825, 320, 17, 'body fluids conduct,', 'middle', '700')}
${T(825, 344, 17, 'membranes insulate', 'middle', '700')}
${G('muted', `${T(825, 380, 15, 'in a salt solution the ions move;', 'middle')}${T(825, 402, 15, 'the membrane keeps the two faces', 'middle')}${T(825, 424, 15, 'of charge apart (so does myelin)', 'middle')}`)}
</svg>`

/* 4 — Three ways to charge: friction, conduction, induction (lead, 1000×460) */
const chargingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${PANEL(20)}${PANEL(345)}${PANEL(670)}
${T(175, 52, 22, '1  friction', 'middle', '700')}
<rect x="48" y="96" width="92" height="92" rx="26" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${T(94, 210, 15, 'fur', 'middle')}
${SIGNS('+', [[72, 124], [108, 140], [78, 162]])}
${ROD(196, 127, 110, '−')}
${T(251, 180, 15, 'rubber rod', 'middle')}
<g class="fig-accent"><defs>${ARROW('arr-es-cg-b')}</defs>${ARR(146, 142, 190, 142, 'arr-es-cg-b', 3)}${T(168, 130, 15, 'e⁻', 'middle', '700')}</g>
${T(175, 258, 17, 'rubbing moves electrons', 'middle')}
${T(175, 282, 17, 'from one material to the other', 'middle')}
${T(175, 326, 17, 'the two end OPPOSITE', 'middle', '700')}
${T(175, 352, 17, 'and equal: +Q and −Q', 'middle')}
${G('muted', `${T(175, 396, 15, 'the question tells you which', 'middle')}${T(175, 418, 15, 'material takes the electrons', 'middle')}`)}
${T(500, 52, 22, '2  conduction (contact)', 'middle', '700')}
${BALL(456, 142, 44)}${BALL(544, 142, 44)}
${SIGNS('−', RING(456, 142, 28, 3, 90))}${SIGNS('−', RING(544, 142, 28, 3, 90))}
${G('muted', T(500, 214, 15, 'touching: charge flows between them', 'middle'))}
${T(500, 258, 17, 'both end with the', 'middle')}
${T(500, 282, 17, 'SAME sign', 'middle', '700')}
${T(500, 326, 17, 'identical spheres share equally:', 'middle')}
${T(500, 354, 18, 'q each = (q₁ + q₂) / 2', 'middle', '700')}
${G('muted', `${T(500, 396, 15, 'add the charges with their signs,', 'middle')}${T(500, 418, 15, 'then split; one contact at a time', 'middle')}`)}
${T(825, 52, 22, '3  induction (no contact)', 'middle', '700')}
${ROD(688, 115, 84, '−')}
${BALL(850, 130, 44)}
${SIGNS('+', RING(850, 130, 28, 3, 135, 90))}
${LINE(850, 174, 850, 204, 2.5)}${GROUND(850, 204)}
<g class="fig-accent"><defs>${ARROW('arr-es-cg-b2')}</defs>${ARR(872, 172, 872, 204, 'arr-es-cg-b2', 3)}${T(884, 194, 15, 'e⁻', 'start', '700')}</g>
${T(825, 258, 17, 'rod near → ground → remove', 'middle')}
${T(825, 282, 17, 'the ground → remove the rod', 'middle')}
${T(825, 326, 17, 'sphere ends OPPOSITE to the rod', 'middle', '700')}
${T(825, 352, 17, 'the rod loses none of its charge', 'middle')}
${G('muted', `${T(825, 396, 15, 'take the rod away first and the', 'middle')}${T(825, 418, 15, 'electrons just flow back', 'middle')}`)}
</svg>`

/* 5 — Polarization: why a charged rod attracts a neutral object (after, 1000×460) */
const pairRow = (y: number, right: '+' | '−' | '0', toward: boolean, text: string, bold = false) => {
  const a = toward ? [[598, 640], [708, 666]] : [[592, 562], [716, 746]]
  return `${CHARGE(612, y, 18, '−')}${right === '0' ? `${BALL(694, y, 18)}${T(694, y + 5, 14, '0', 'middle', '700')}` : CHARGE(694, y, 18, right)}
${right === '−' ? ARR(a[0][0], y, a[0][1], y, 'arr-es-pz', 3) + ARR(a[1][0], y, a[1][1], y, 'arr-es-pz', 3) : ARR(a[0][0], y - 30, a[0][1], y - 30, 'arr-es-pz', 3) + ARR(a[1][0], y - 30, a[1][1], y - 30, 'arr-es-pz', 3)}
${T(770, y + 6, 17, text, 'start', bold ? '700' : '400')}`
}
const polarizationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-pz')}</defs>
${G('muted', LINE(530, 30, 530, 440, 1.5))}
${T(270, 44, 22, 'a charged rod attracts a NEUTRAL ball', 'middle', '700')}
${ROD(40, 165, 130, '−')}
${T(105, 222, 15, 'charged rod', 'middle')}
${BALL(330, 180, 78)}
${SIGNS('+', RING(330, 180, 58, 3, 150, 60))}
${SIGNS('−', RING(330, 180, 58, 3, -30, 60))}
${T(330, 186, 15, 'neutral', 'middle')}
<g class="fig-accent-2"><defs>${ARROW('arr-es-pz-r')}</defs>${ARR(250, 300, 140, 300, 'arr-es-pz-r', 4)}${T(264, 306, 16, 'pull on the near side', 'start', '700')}</g>
<g class="fig-accent"><defs>${ARROW('arr-es-pz-b')}</defs>${ARR(200, 340, 240, 340, 'arr-es-pz-b', 4)}${T(264, 346, 16, 'push on the far side: weaker', 'start', '700')}</g>
${T(270, 394, 18, 'net force: toward the rod', 'middle', '700')}
${G('muted', T(270, 422, 15, 'nothing is transferred — the charges only shift', 'middle'))}
${T(765, 44, 22, 'what does attraction prove?', 'middle', '700')}
${pairRow(130, '+', true, 'opposite charges: attract')}
${pairRow(225, '0', true, 'charged and neutral: attract')}
${pairRow(310, '−', false, 'like charges: repel')}
${T(765, 394, 18, 'only REPULSION proves both are charged', 'middle', '700')}
${G('muted', T(765, 422, 15, 'a neutral object is attracted too', 'middle'))}
</svg>`

/* 6 — Worked example: sharing charge between identical spheres (after, 1000×460) */
const ball = (cx: number, name: string, q: string, sign: '+' | '−' | '0', r = 40) =>
  `${BALL(cx, 170, r)}${T(cx, 178, 22, name, 'middle', '700')}${sign === '0' ? T(cx, 170 + r + 28, 17, q, 'middle', '700') : G(sign === '+' ? 'accent-2' : 'accent', T(cx, 170 + r + 28, 17, q, 'middle', '700'))}`
const sharingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-sh')}</defs>
${T(162, 56, 21, 'before', 'middle', '700')}
${ball(110, 'A', '−12 μC', '−')}${ball(215, 'B', '+4.0 μC', '+')}
${T(162, 296, 17, '(−12) + (+4.0) = −8.0 μC', 'middle')}
${G('muted', T(162, 322, 15, 'the total, added with signs', 'middle'))}
${ARR(282, 170, 362, 170, 'arr-es-sh', 3)}
${T(492, 56, 21, 'A and B touch', 'middle', '700')}
${ball(440, 'A', '−4.0 μC', '−')}${ball(545, 'B', '−4.0 μC', '−')}
${T(492, 296, 17, '−8.0 / 2 = −4.0 μC each', 'middle')}
<g class="fig-accent"><defs>${ARROW('arr-es-sh-b')}</defs>${ARR(458, 104, 527, 104, 'arr-es-sh-b', 3)}${T(492, 92, 15, '5.0 × 10¹³ electrons', 'middle', '700')}</g>
${G('muted', T(492, 322, 15, 'B changed by −8.0 μC: n = 8.0 × 10⁻⁶ / e', 'middle'))}
${ARR(612, 170, 682, 170, 'arr-es-sh', 3)}
${T(835, 56, 21, 'then B touches neutral C', 'middle', '700')}
${ball(742, 'A', '−4.0 μC', '−', 36)}${ball(835, 'B', '−2.0 μC', '−', 36)}${ball(928, 'C', '−2.0 μC', '−', 36)}
${T(835, 296, 17, '(−4.0 + 0) / 2 = −2.0 μC each', 'middle')}
${G('muted', T(835, 322, 15, 'still −8.0 μC in total', 'middle'))}
${T(500, 392, 18, 'identical spheres share equally:  q each = (q₁ + q₂) / 2', 'middle', '700')}
${G('muted', T(500, 422, 16, 'add with signs, take one contact at a time, and count electrons from the CHANGE in one sphere', 'middle'))}
</svg>`

/* 7 — Worked example: charging a sphere by induction, four steps (after, 1000×460) */
const STEP_X = [12, 259, 506, 753]
const step = (i: number, title: string, rod: boolean, inner: string, l1: string, l2: string, bold = false) => {
  const ox = STEP_X[i]
  return `${PANEL_AT(ox, 20, 235, 370)}${T(ox + 117, 52, 19, title, 'middle', '700')}${rod ? ROD(ox + 10, 165, 62, '−') : ''}${BALL(ox + 150, 180, 56)}${inner}${T(ox + 117, 336, bold ? 15 : 16, l1, 'middle', bold ? '700' : '400')}${T(ox + 117, 360, bold ? 15 : 16, l2, 'middle', bold ? '700' : '400')}`
}
const nearPlus = (ox: number) => SIGNS('+', RING(ox + 150, 180, 38, 3, 140, 80))
const inductionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${step(0, '1  rod near', true, `${nearPlus(STEP_X[0])}${SIGNS('−', RING(STEP_X[0] + 150, 180, 38, 3, -40, 80))}`, 'electrons pushed to the', 'far side; still neutral')}
${step(1, '2  connect to ground', true, `${nearPlus(STEP_X[1])}${LINE(STEP_X[1] + 150, 236, STEP_X[1] + 150, 276, 2.5)}${GROUND(STEP_X[1] + 150, 276)}<g class="fig-accent"><defs>${ARROW('arr-es-in-b')}</defs>${ARR(STEP_X[1] + 172, 240, STEP_X[1] + 172, 278, 'arr-es-in-b', 3)}${T(STEP_X[1] + 184, 266, 15, 'e⁻', 'start', '700')}</g>`, '2.0 × 10¹⁰ electrons flow', 'DOWN into the ground')}
${step(2, '3  remove the ground', true, nearPlus(STEP_X[2]), 'rod still in place:', 'the shortage is trapped')}
${step(3, '4  remove the rod', false, SIGNS('+', RING(STEP_X[3] + 150, 180, 38, 6, 30)), 'q = +(2.0 × 10¹⁰)(1.6 × 10⁻¹⁹)', '= +3.2 nC, spread evenly', true)}
${T(500, 420, 17, 'induction leaves the sphere OPPOSITE to the rod; touching the rod instead would leave it the SAME sign', 'middle', '700')}
${G('muted', T(500, 446, 15, 'the rod never touches the sphere and loses none of its own charge', 'middle'))}
</svg>`

/* 8 — Superposition of forces: vectors add; where the net force is zero (lead, 1000×460) */
const L_ROW = 200
const between = (q1: number, q2: number) => (L_ROW * Math.sqrt(q1)) / (Math.sqrt(q1) + Math.sqrt(q2)) // from the smaller charge
const outside = (q1: number, q2: number) => (L_ROW * Math.sqrt(q1)) / (Math.sqrt(q2) - Math.sqrt(q1)) // beyond the smaller charge
const zeroRow = (y: number, title: string, xs: number, signs: ['+' | '−', '+' | '−'], labels: [string, string], zero: number | null, note: string) =>
  `${T(410, y - 36, 17, title, 'start', '700')}${G('muted', LINE(410, y, 975, y, 1.5))}
${MASK(xs, y, 13)}${MASK(xs + L_ROW, y, 19)}${CHARGE(xs, y, 13, signs[0], labels[0])}${CHARGE(xs + L_ROW, y, 19, signs[1], labels[1])}
${zero === null ? '' : G('accent-2', `<circle cx="${zero.toFixed(1)}" cy="${y}" r="6" fill="currentColor"/>${T(+zero.toFixed(1), y - 14, 16, 'F = 0', 'middle', '700')}`)}
${T(975, y - 36, 16, note, 'end')}`
const superForcesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-sf')}</defs>
${G('muted', LINE(385, 30, 385, 440, 1.5))}
${T(195, 44, 22, 'forces add as VECTORS', 'middle', '700')}
${G('muted', `${LINE(290, 300, 290, 150, 2, true)}${LINE(90, 150, 290, 150, 2, true)}`)}
${ARR(90, 300, 284, 300, 'arr-es-sf', 3.5)}${T(190, 326, 17, '4 N', 'middle', '700')}
${ARR(90, 300, 90, 156, 'arr-es-sf', 3.5)}${T(78, 230, 17, '3 N', 'end', '700')}
<circle cx="90" cy="300" r="6" fill="currentColor"/>
<g class="fig-accent-2"><defs>${ARROW('arr-es-sf-r')}</defs>${ARR(90, 300, 285, 153.8, 'arr-es-sf-r', 4)}${T(170, 212, 18, '5 N', 'end', '700')}</g>
${T(195, 368, 17, 'at right angles: √(3² + 4²) = 5 N', 'middle', '700')}
${T(195, 396, 16, 'aligned: 7 N · opposite: 1 N', 'middle')}
${G('muted', T(195, 424, 15, 'magnitudes add only when parallel', 'middle'))}
${T(692, 44, 22, 'where is the net force zero?', 'middle', '700')}
${zeroRow(132, 'same sign', 560, ['+', '+'], ['q', '4q'], 560 + between(1, 4), 'between, nearer the smaller')}
${zeroRow(248, 'opposite, unequal', 680, ['+', '−'], ['q', '−4q'], 680 - outside(1, 4), 'outside, beyond the smaller')}
${zeroRow(364, 'opposite, equal', 560, ['+', '−'], ['q', '−q'], null, 'nowhere')}
${T(692, 432, 16, 'balance: |q₁| / r₁² = |q₂| / r₂² — true for any third charge put there', 'middle')}
</svg>`

/* 9 — Worked example: three charges on a line (after, 1000×460) */
const X3 = (x: number) => 420 + 800 * x
const F3 = 80 // px per newton
const lineSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-ln')}</defs>
${T(500, 40, 22, 'forces on C: a push from A and a pull from B, both toward +x', 'middle', '700')}
${ARR(50, 250, 900, 250, 'arr-es-ln', 2)}${T(912, 256, 17, 'x', 'start', '700')}

${T(X3(-0.4), 286, 15, '−0.40 m', 'middle')}${T(X3(0), 286, 15, '0', 'middle')}${T(X3(0.1), 286, 15, '0.10 m', 'middle')}${T(X3(0.4), 286, 15, '0.40 m', 'middle')}
${[0, 0.1, 0.4].map((x) => MASK(X3(x), 250, 16)).join('')}${CHARGE(X3(0), 250, 16, '+')}${CHARGE(X3(0.1), 250, 16, '+')}${CHARGE(X3(0.4), 250, 16, '−')}
${T(X3(0), 310, 16, 'A', 'middle', '700')}${T(X3(0.1), 310, 16, 'C', 'middle', '700')}${T(X3(0.4), 310, 16, 'B', 'middle', '700')}
${G('accent-2', `${T(X3(0) - 4, 332, 15, '+1.0 μC', 'middle')}${T(X3(0.1) + 6, 332, 15, '+2.0 μC', 'middle')}`)}${G('accent', T(X3(0.4), 332, 15, '−4.0 μC', 'middle'))}
${G('muted', LINE(X3(0.1), 232, X3(0.1), 96, 1.5, true))}
${ARR(X3(0.1), 200, X3(0.1) + 1.8 * F3, 200, 'arr-es-ln', 3.5)}${T(X3(0.1) + 1.8 * F3 + 12, 206, 16, '1.8 N from A (like: repels)', 'start')}
${ARR(X3(0.1), 160, X3(0.1) + 0.8 * F3, 160, 'arr-es-ln', 3.5)}${T(X3(0.1) + 0.8 * F3 + 12, 166, 16, '0.80 N from B (unlike: attracts), r = 0.30 m', 'start')}
<g class="fig-accent-2"><defs>${ARROW('arr-es-ln-r')}</defs>${ARR(X3(0.1), 112, X3(0.1) + 2.6 * F3, 112, 'arr-es-ln-r', 4.5)}${T(X3(0.1) + 2.6 * F3 + 12, 118, 17, 'net 2.6 N', 'start', '700')}
<circle cx="${X3(-0.4)}" cy="250" r="6" fill="currentColor"/>${T(X3(-0.4), 226, 16, 'F = 0 here', 'middle', '700')}</g>
${G('muted', `${DIM(X3(-0.4), X3(0), 356)}${T((X3(-0.4) + X3(0)) / 2, 378, 15, 'd', 'middle')}${DIM(X3(-0.4), X3(0.4), 394)}${T((X3(-0.4) + X3(0.4)) / 2, 416, 15, 'd + 0.40 m', 'middle')}`)}
${T(500, 446, 16, 'part (d): 1.0 / d² = 4.0 / (d + 0.40)²  →  d + 0.40 = 2d  →  d = 0.40 m, outside the pair, beyond the smaller charge A', 'middle')}
</svg>`

/* 10 — Worked example: forces at right angles (after, 1000×460) */
const THETA = (Math.atan(0.15 / 0.2) * 180) / Math.PI // 36.87°
const FV = 1000 // px per newton in the vector triangle
const ARC_R = 62
const rightAngleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-es-ra')}</defs>
${G('muted', LINE(480, 30, 480, 440, 1.5))}
${T(245, 44, 21, 'two forces on the charge at the origin', 'middle', '700')}
${G('muted', `${LINE(150, 250, 330, 250, 1.5, true)}${LINE(150, 250, 150, 84, 1.5, true)}${T(296, 240, 15, '0.30 m', 'middle')}${T(138, 150, 15, '0.30 m', 'end')}`)}
${CHARGE(150, 250, 18, '+')}${G('accent-2', T(126, 282, 16, '+1.0 μC', 'end', '700'))}
${CHARGE(350, 250, 18, '−', '−2.0 μC')}
${CHARGE(150, 84, 18, '+')}${G('accent-2', T(176, 90, 16, '+1.5 μC', 'start', '700'))}
${ARR(170, 250, 250, 250, 'arr-es-ra', 3)}${T(214, 232, 16, '0.20 N', 'middle', '700')}
${ARR(150, 270, 150, 330, 'arr-es-ra', 3)}${T(168, 312, 16, '0.15 N', 'start', '700')}
${T(245, 392, 16, 'unlike → pulled toward the −2.0 μC charge (+x)', 'middle')}
${T(245, 418, 16, 'like → pushed away from the +1.5 μC charge (−y)', 'middle')}
${T(740, 44, 21, 'add them as vectors', 'middle', '700')}
${G('muted', `${LINE(600 + 0.2 * FV, 120, 600 + 0.2 * FV, 120 + 0.15 * FV, 2, true)}${LINE(600, 120 + 0.15 * FV, 600 + 0.2 * FV, 120 + 0.15 * FV, 2, true)}`)}
${ARR(600, 120, 600 + 0.2 * FV - 6, 120, 'arr-es-ra', 3.5)}${T(700, 106, 17, '0.20 N', 'middle', '700')}
${ARR(600, 120, 600, 120 + 0.15 * FV - 6, 'arr-es-ra', 3.5)}${T(588, 200, 17, '0.15 N', 'end', '700')}
<circle cx="600" cy="120" r="6" fill="currentColor"/>
${PATH(`M${600 + ARC_R} 120 A${ARC_R} ${ARC_R} 0 0 1 ${(600 + ARC_R * Math.cos((THETA * Math.PI) / 180)).toFixed(1)} ${(120 + ARC_R * Math.sin((THETA * Math.PI) / 180)).toFixed(1)}`, 2)}
${T(674, 146, 16, `${Math.round(THETA)}°`, 'start', '700')}
<g class="fig-accent-2"><defs>${ARROW('arr-es-ra-r')}</defs>${ARR(600, 120, 600 + 0.2 * FV - 6, 120 + 0.15 * FV - 4.5, 'arr-es-ra-r', 4.5)}${T(724, 196, 18, '0.25 N', 'start', '700')}</g>
${T(740, 330, 18, 'F = √(0.20² + 0.15²) = 0.25 N', 'middle', '700')}
${T(740, 362, 17, `tan θ = 0.15 / 0.20 → θ ≈ ${Math.round(THETA)}° below the +x axis`, 'middle')}
${G('muted', `${T(740, 398, 15, 'a 3-4-5 triangle scaled by 0.05;', 'middle')}${T(740, 420, 15, 'adding 0.20 + 0.15 = 0.35 N would be wrong', 'middle')}`)}
</svg>`

export const mcatElectrostaticsFigures: DeckFigurePlacement[] = [
  {
    at: 'Electric Charge',
    mode: 'lead',
    figure: {
      svg: chargeSvg,
      alt:
        'Three panels. Left, two kinds of charge: an atom sketch with two red protons and two grey neutrons in the nucleus and three blue electrons on a dashed ring around it — proton +e and neutron (0), locked in the nucleus; electron −e, outside the nucleus and able to move; e = 1.6 × 10⁻¹⁹ C. Middle, quantized, q = ±ne: a ladder of allowed charges from +3e down through 0 to −3e, with a dashed red mark at 2.5e labelled never; 5.0 × 10⁹ extra electrons give q = −(5.0 × 10⁹)(1.6 × 10⁻¹⁹ C) = −0.80 nC; n is always a whole number. Right, conserved, moved not made: a patch of hair with plus signs and a balloon with minus signs, an arrow of electrons from hair to balloon; the hair ends +Q and the balloon −Q, total charge still 0; gain electrons → negative, lose electrons → positive; in a solid only electrons move, protons stay in their nuclei.',
      caption: 'Charge in three facts: it comes in two kinds carried by protons and electrons, it comes in whole multiples of e, and it is moved from one object to another but never created.',
    },
    blocks: [
      '- Like charges repel, unlike attract; proton $+e$, electron $-e$, $e = 1.6 \\times 10^{-19}$ C',
      '- **Quantized:** $q = \\pm ne$ · **conserved:** rubbing moves electrons, so the two objects end $+Q$ and $-Q$',
    ],
  },
  {
    at: 'Conductors and Insulators',
    mode: 'lead',
    figure: {
      svg: conductorsSvg,
      alt:
        'Three panels. Left, conductor (metal): a ball with ten minus signs spaced evenly all the way round just inside its surface — charges move freely, so extra charge spreads over the whole outer surface; like charges repel and get as far apart as they can. Middle, insulator (plastic): the same ball with the ten minus signs bunched in one patch at the upper right — charges stay where they are put, so the same dab of charge stays in one spot; rubber, glass, plastic, dry air. Right, the same split in a cell: a grey band, the lipid bilayer, which insulates, with red plus signs along its outer face under the outside fluid, which conducts, and blue minus signs along its inner face above the inside fluid, which conducts. Body fluids conduct, membranes insulate; in a salt solution the ions move, and the membrane keeps the two faces of charge apart, as does myelin.',
      caption: 'A dab of charge spreads over a conductor’s outer surface but stays put on an insulator; in a cell the salty fluids conduct and the lipid membrane insulates.',
    },
    blocks: [
      '- **Conductor:** charges move freely, so extra charge spreads over the whole outer surface',
      '- **Insulator:** charge stays where it is put · body fluids conduct, membranes (and myelin) insulate',
    ],
  },
  {
    at: 'Charging by Friction, Conduction and Induction',
    mode: 'lead',
    figure: {
      svg: chargingSvg,
      alt:
        'Three panels, one for each way to charge an object. 1, friction: a piece of fur carrying plus signs and a rubber rod carrying minus signs, with an arrow of electrons from the fur to the rod — rubbing moves electrons from one material to the other, and the two end opposite and equal, +Q and −Q; the question tells you which material takes the electrons. 2, conduction (contact): two touching metal spheres, both carrying minus signs — charge flows between them and both end with the same sign; identical spheres share equally, q each = (q₁ + q₂)/2; add the charges with their signs, then split, one contact at a time. 3, induction (no contact): a negative rod held near a metal sphere whose near side carries plus signs, with a wire from the sphere to a ground symbol and an arrow of electrons running down the wire — rod near, ground, remove the ground, remove the rod; the sphere ends opposite to the rod and the rod loses none of its charge; take the rod away first and the electrons just flow back.',
      caption: 'Three ways to charge an object: friction leaves the two materials opposite, contact leaves the same sign as the charged object, and induction (with a ground) leaves the opposite sign.',
    },
    blocks: [
      '- **Friction:** the pair end opposite · **conduction:** same sign as the charged object',
      '- **Induction:** no contact, a ground is needed, and the sphere ends **opposite** to the rod',
    ],
  },
  {
    at: 'Charging by Friction, Conduction and Induction',
    mode: 'after',
    figure: {
      svg: polarizationSvg,
      alt:
        'Left: a blue negative rod beside a neutral metal ball. Inside the ball, red plus signs have gathered on the side nearest the rod and blue minus signs on the far side. A long red arrow pointing toward the rod is labelled pull on the near side; a short blue arrow pointing away is labelled push on the far side: weaker. Net force: toward the rod; nothing is transferred, the charges only shift. Right, what does attraction prove? Three rows of small spheres: a negative and a positive with arrows pointing toward each other, opposite charges attract; a negative and a neutral one with arrows pointing toward each other, charged and neutral attract; two negatives with arrows pointing apart, like charges repel. Only repulsion proves both are charged; a neutral object is attracted too.',
      caption: 'Polarization: the opposite charge shifts nearer the rod, so the pull beats the push and a neutral object is attracted — which is why only repulsion proves both objects are charged.',
    },
    blocks: [
      '- **Polarization:** opposite charge shifts to the near side, where the force is stronger → net attraction',
      '- A charged object attracts opposite AND neutral objects, so only **repulsion** proves both are charged',
    ],
  },
  {
    at: 'Worked Example — Sharing Charge Between Identical Spheres',
    mode: 'after',
    figure: {
      svg: sharingSvg,
      alt:
        'Three stages left to right. Before: sphere A at −12 μC and sphere B at +4.0 μC; (−12) + (+4.0) = −8.0 μC in total, added with signs. A and B touch: both now −4.0 μC, since −8.0/2 = −4.0 μC each; a blue arrow from A to B is labelled 5.0 × 10¹³ electrons, because B changed by −8.0 μC and n = 8.0 × 10⁻⁶/e. Then B touches neutral C: A stays at −4.0 μC while B and C each hold −2.0 μC, (−4.0 + 0)/2 = −2.0 μC each, still −8.0 μC in total. Underneath: identical spheres share equally, q each = (q₁ + q₂)/2; add with signs, take one contact at a time, and count electrons from the change in one sphere.',
      caption: 'The worked example drawn: −12 and +4.0 μC share to −4.0 μC each (5.0 × 10¹³ electrons move from A to B), then B shares with neutral C to leave −2.0 μC on each.',
    },
    blocks: [
      '- Total $-8.0\\;\\mu$C → $-4.0\\;\\mu$C each; $5.0 \\times 10^{13}$ electrons moved from A to B',
      '- B then shares with neutral C: $-2.0\\;\\mu$C each — the total is still $-8.0\\;\\mu$C',
    ],
  },
  {
    at: 'Worked Example — Charging a Sphere by Induction',
    mode: 'after',
    figure: {
      svg: inductionSvg,
      alt:
        'Four panels in order. 1, rod near: a blue negative rod beside a metal sphere with red plus signs on the near side and blue minus signs on the far side — electrons pushed to the far side; still neutral. 2, connect to ground: the same rod and sphere with only the plus signs left, a wire from the sphere down to a ground symbol and a blue arrow of electrons pointing down the wire — 2.0 × 10¹⁰ electrons flow down into the ground. 3, remove the ground: rod still in place, plus signs still on the near side, no wire — the shortage is trapped. 4, remove the rod: the sphere alone with six plus signs spaced evenly around it — q = +(2.0 × 10¹⁰)(1.6 × 10⁻¹⁹) = +3.2 nC, spread evenly. Underneath: induction leaves the sphere opposite to the rod; touching the rod instead would leave it the same sign; the rod never touches the sphere and loses none of its own charge.',
      caption: 'The worked example drawn: a negative rod drives 2.0 × 10¹⁰ electrons to ground, the ground is removed first, and the sphere keeps +3.2 nC — opposite to the rod.',
    },
    blocks: [
      '- Rod near → ground → remove the ground → remove the rod: the order traps the charge',
      '- $q = +(2.0 \\times 10^{10})(1.6 \\times 10^{-19}) = +3.2$ nC, **opposite** to the rod',
    ],
  },
  {
    at: "Coulomb's Law",
    exact: true,
    mode: 'lead',
    figure: {
      svg: coulombSvg,
      alt:
        'Three panels of point charges with force arrows. Left, like charges repel: two positive charges and, below, two negative charges, each pair with equal arrows F pointing away from each other — q₁q₂ > 0 means pushed apart, the same F on each (third law) even when the charges differ. Middle, unlike charges attract: a positive and a negative charge with equal arrows pointing toward each other, and below a large +2q with a small −q still pulling on each other with equal F — q₁q₂ < 0 means pulled together; like gravity, but it can also repel. Right, F ∝ q₁q₂/r²: two positive charges a distance r apart with force arrows F, and below the same charges 2r apart with arrows one quarter as long labelled F/4 — double r and the force divides by 4, triple one charge and it triples; ratio reasoning, not plug-and-chug.',
      caption: 'Coulomb’s law as pictures: like charges push apart, unlike charges pull together with equal force on each, and doubling the separation cuts the force to a quarter.',
    },
    blocks: [
      '- $|F| = k|q_1q_2|/r^2$: like charges repel, unlike attract; each charge feels the same size of force',
      '- Scale factor by factor: double $r$ → $F/4$; triple one charge → $3F$ — ratio reasoning, not plug-and-chug',
    ],
  },
  {
    at: 'Superposition of Forces',
    mode: 'lead',
    figure: {
      svg: superForcesSvg,
      alt:
        'Left, forces add as vectors: from one point a 4 N arrow points right and a 3 N arrow points up; a red diagonal arrow labelled 5 N completes the rectangle. At right angles √(3² + 4²) = 5 N; aligned they would give 7 N and opposite 1 N; magnitudes add only when parallel. Right, where is the net force zero? Three number lines. Same sign, +q and +4q: a red dot marked F = 0 sits between them, one third of the way from the smaller charge — between, nearer the smaller. Opposite and unequal, +q and −4q: the red dot sits outside the pair on the side of +q, as far beyond it as the charges are apart — outside, beyond the smaller. Opposite and equal, +q and −q: no dot — nowhere. Balance: |q₁|/r₁² = |q₂|/r₂², true for any third charge put there.',
      caption: 'Forces from several charges add as vectors, and a third charge feels zero net force only where the two forces are opposite and equal: between like charges or beyond the smaller of two unlike ones.',
    },
    blocks: [
      '- Net force = **vector** sum of independent pair forces: 3 N and 4 N at right angles make 5 N',
      '- Zero net force: between like charges, or beyond the smaller of two unlike ones — $|q_1|/r_1^2 = |q_2|/r_2^2$',
    ],
  },
  {
    at: 'Worked Example — Three Charges on a Line',
    mode: 'after',
    figure: {
      svg: lineSvg,
      alt:
        'An x-axis with A (+1.0 μC) at 0, C (+2.0 μC) at 0.10 m and B (−4.0 μC) at 0.40 m. Above C three arrows all point toward +x: 1.8 N from A (like charges repel), 0.80 N from B (unlike charges attract, r = 0.30 m), and a longer red arrow for their sum, net 2.6 N. A red dot at x = −0.40 m is marked F = 0 here; grey dimension lines show its distance d from A and d + 0.40 m from B. Part (d): 1.0/d² = 4.0/(d + 0.40)², so d + 0.40 = 2d and d = 0.40 m, outside the pair, beyond the smaller charge A.',
      caption: 'The worked example drawn to scale: A pushes C and B pulls it the same way, 1.8 N + 0.80 N = 2.6 N, and the only balance point is at x = −0.40 m, beyond the smaller charge.',
    },
    blocks: [
      '- On C: $1.8$ N from A and $0.80$ N from B both point $+x$ → net $2.6$ N (use each pair’s own $r$)',
      '- Balance point: $1.0/d^2 = 4.0/(d + 0.40)^2$ → $d = 0.40$ m left of A, at $x = -0.40$ m',
    ],
  },
  {
    at: 'Worked Example — Forces at Right Angles',
    mode: 'after',
    figure: {
      svg: rightAngleSvg,
      alt:
        'Left: a +1.0 μC charge at the origin with a −2.0 μC charge 0.30 m to its right and a +1.5 μC charge 0.30 m above it. From the origin charge a 0.20 N arrow points right, toward the negative charge, and a 0.15 N arrow points down, away from the positive charge: unlike → pulled toward the −2.0 μC charge (+x); like → pushed away from the +1.5 μC charge (−y). Right, add them as vectors: the 0.20 N arrow to the right and the 0.15 N arrow down drawn from one point, with a red diagonal arrow, 0.25 N, across the rectangle they make and the angle 37° marked below the horizontal. F = √(0.20² + 0.15²) = 0.25 N; tan θ = 0.15/0.20, θ ≈ 37° below the +x axis; a 3-4-5 triangle scaled by 0.05 — adding 0.20 + 0.15 = 0.35 N would be wrong.',
      caption: 'The worked example drawn to scale: a 0.20 N pull along +x and a 0.15 N push along −y combine to 0.25 N, 37° below the +x axis.',
    },
    blocks: [
      '- $0.20$ N along $+x$ (attracted) and $0.15$ N along $-y$ (repelled): perpendicular, so use Pythagoras',
      '- $F = \\sqrt{0.20^2 + 0.15^2} = 0.25$ N, $\\theta \\approx 37^\\circ$ below $+x$ — not $0.35$ N',
    ],
  },
]
