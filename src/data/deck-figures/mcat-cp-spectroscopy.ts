import type { DeckFigurePlacement } from './index'

/**
 * Spectroscopy (MCAT C/P) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (an IR band map, a C=O
 * wavenumber ladder, a ¹H chemical-shift ruler, n + 1 multiplets and the
 * lesson's ethyl acetate spectrum, symmetry-equivalent hydrogens on four
 * small molecules, a HOMO–LUMO gap ladder with absorptions sliding to longer
 * λ, three mass-spectrum windows, a which-tool grid, a before/after IR pair) —
 * no textbook, prep-company, AAMC or database spectrum was copied or traced.
 * Every spectrum is SCHEMATIC: peaks sit at the positions the lesson states
 * (band table, C=O table, δ table, ethyl acetate 4.1 q / 2.0 s / 1.3 t,
 * para-xylene ¹³C 21 / 126 / 137, MS 74 → 56, 92 / 94 at ~⅓, 136 / 138 at
 * ~1:1) and every caption says "schematic, not a real spectrum".
 *
 * Molecules drawn as line structures (each checked for valence): acetone,
 * para-xylene (Kekulé ring + two CH₃), 1-propanol, 2-propanol. Everything
 * else is a condensed formula in text.
 *
 * Colours: C=O / "new band" / the coupled CH₃ BLUE (fig-accent), O–H /
 * "gone" / the OCH₂ / π-anisotropy RED (fig-accent-2), guides and asides grey
 * (fig-muted). Marker ids are unique per figure (arr-spec-<figure>[-colour]),
 * each coloured marker defined inside its own coloured group.
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-end="url(#${marker})"/>`

/** A double-headed arrow (the marker is auto-start-reverse, so one marker serves both ends). */
const DARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 2.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-start="url(#${marker})" marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A stroked path (curve) in the current colour. */
const CURVE = (d: string, sw = 3, dashed = false) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${dashed ? ' stroke-dasharray="8 6"' : ''}/>`

/** A filled rectangle in the current colour. */
const BOX = (x: number, y: number, w: number, h: number, opacity = '1', rx = 4) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="currentColor"${opacity !== '1' ? ` fill-opacity="${opacity}"` : ''}/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

/**
 * A schematic absorption spectrum as path data: a flat baseline with Gaussian dips
 * (centre, width σ, depth in px — all in the x unit given to `toX`), sampled every
 * `step` units; runs of flat baseline are collapsed so the path stays short.
 */
type Band = [centre: number, sigma: number, depth: number]
const dipPath = (bands: Band[], from: number, to: number, step: number, toX: (v: number) => number, baseY: number) => {
  const pts: [number, number][] = []
  for (let v = from; v >= to; v -= step) {
    let d = 0
    for (const [c, s, h] of bands) d += h * Math.exp(-((v - c) ** 2) / (2 * s * s))
    pts.push([toX(v), baseY + d])
  }
  const keep = pts.filter((p, i) => {
    if (i === 0 || i === pts.length - 1) return true
    const flat = (q: [number, number]) => Math.abs(q[1] - baseY) < 0.05
    return !(flat(p) && flat(pts[i - 1]) && flat(pts[i + 1]))
  })
  return keep.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
}

/** Vertical stick peaks (mass spectrum / NMR multiplet lines) from a baseline. */
const STICK = (x: number, baseY: number, h: number, sw = 4) => LINE(x, baseY, x, baseY - h, sw)

/* 1 — IR band map: one schematic transmittance trace with the band-table groups as dips (lead, 1000×460).
   x = 60 + (4000 − ν)·880/3500, so 4000 cm⁻¹ at the left and 500 at the right; baseline y = 90. */
const irX = (nu: number) => 60 + ((4000 - nu) * 880) / 3500
const irBands: Band[] = [
  [3375, 110, 165], // O–H alcohol, broad
  [2960, 16, 110], // C–H sp³
  [2870, 16, 95],
  [2250, 12, 105], // C≡N
  [1715, 14, 235], // C=O, strongest
  [1460, 10, 45], // fingerprint clutter
  [1375, 8, 35],
  [1150, 35, 150], // C–O
  [950, 10, 40],
  [870, 8, 30],
  [780, 10, 50],
  [690, 8, 35],
  [600, 10, 40],
]
const irSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
${BOX(irX(1500), 45, irX(500) - irX(1500), 300, '0.14', 0)}
${LINE(irX(3000), 50, irX(3000), 345, 1.5, true)}
${LINE(60, 40, irX(1500) - 6, 40, 2)}
</g>
${T(irX(2750), 30, 17, 'diagnostic region: read the groups', 'middle', '700')}
<g class="fig-muted">${T((irX(1500) + irX(500)) / 2, 30, 17, 'fingerprint: match only', 'middle', '700')}</g>
${LINE(60, 345, 945, 345, 2.5)}
${LINE(60, 345, 60, 70, 2.5)}
${T(52, 96, 15, '%T', 'end')}
${[4000, 3000, 2000, 1500, 1000, 500].map((v) => `${LINE(irX(v), 345, irX(v), 353, 2)}${T(irX(v), 372, 15, String(v), 'middle')}`).join('')}
${T(500, 402, 16, 'wavenumber (cm⁻¹) — decreasing left to right', 'middle')}
${CURVE(dipPath(irBands, 4000, 500, 4, irX, 90), 3)}
<g class="fig-accent-2">
${T(irX(3375), 282, 18, 'O–H', 'middle', '700')}
${T(irX(3375), 304, 16, 'broad, 3200–3550', 'middle')}
</g>
${T(irX(2915), 226, 18, 'C–H sp³', 'middle', '700')}
${T(irX(2915), 248, 16, 'just below 3000', 'middle')}
${T(irX(2250), 222, 18, 'C≡N 2250', 'middle', '700')}
${T(irX(2250), 244, 16, 'sharp', 'middle')}
<g class="fig-accent">
${T(irX(1715) - 14, 300, 18, 'C=O 1700–1750', 'end', '700')}
${T(irX(1715) - 14, 322, 16, 'strong, sharp', 'end')}
</g>
${T(irX(1150), 268, 18, 'C–O', 'middle', '700')}
${T(irX(1150), 290, 16, '1000–1300', 'middle')}
<g class="fig-muted">${T(irX(3000) + 6, 64, 14, '3000')}</g>
</svg>`

/* 2 — The carbonyl ladder: C=O stretch positions from the lesson's table on one vertical wavenumber axis (replace-table, 560×440).
   y = 50 + (1840 − ν)·1.636 */
const coY = (nu: number) => 50 + (1840 - nu) * 1.636
const leader = (x1: number, y1: number, x2: number, y2: number) => LINE(x1, y1, x2, y2, 1.5)
const carbonylSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-spec-co')}</defs>
${T(280, 26, 16, 'C=O stretch (cm⁻¹): higher up = higher frequency', 'middle', '700')}
${LINE(110, 44, 110, 412, 2.5)}
${[1800, 1750, 1700, 1650].map((v) => `${LINE(104, coY(v), 110, coY(v), 2)}${T(100, coY(v) + 5, 14, String(v), 'end')}`).join('')}
<g class="fig-accent-2">
${LINE(118, coY(1800), 172, coY(1800), 4)}
${LINE(118, coY(1820), 172, coY(1820), 4)}
${LINE(118, coY(1760), 172, coY(1760), 4)}
${leader(172, coY(1800), 210, 114)}
${leader(172, coY(1820), 210, 146)}${leader(172, coY(1760), 210, 146)}
${T(215, 120, 16, 'acyl chloride  ~1800', 'start', '700')}
${T(215, 152, 16, 'anhydride  1760 + 1820', 'start', '700')}
</g>
${BOX(120, coY(1750), 22, coY(1735) - coY(1750), '0.8', 2)}
${BOX(146, coY(1740), 22, coY(1720) - coY(1740), '0.45', 2)}
${LINE(118, coY(1715), 172, coY(1715), 3)}
${LINE(118, coY(1710), 172, coY(1710), 3)}
${leader(142, (coY(1750) + coY(1735)) / 2, 210, 189)}
${leader(168, (coY(1740) + coY(1720)) / 2, 210, 219)}
${leader(172, coY(1715), 210, 251)}
${leader(172, coY(1710), 210, 284)}
${T(215, 195, 16, 'ester  1735–1750', 'start', '700')}
${T(215, 225, 16, 'aldehyde  1720–1740', 'start', '700')}
${T(215, 257, 16, 'ketone  ~1715', 'start', '700')}
${T(215, 290, 16, 'acid  ~1710 + broad O–H', 'start', '700')}
<g class="fig-accent">
${BOX(120, coY(1690), 52, coY(1630) - coY(1690), '0.5', 3)}
${leader(172, 344, 210, 344)}
${T(215, 350, 16, 'amide  1630–1690', 'start', '700')}
${T(215, 372, 14, 'N lone pair donates: lowest')}
<defs>${ARROW('arr-spec-co-b')}</defs>
${ARR(470, coY(1715), 470, coY(1685), 'arr-spec-co-b', 3)}
${T(482, coY(1700), 14, 'conjugation')}
${T(482, coY(1700) + 18, 14, '−20 to 30')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-spec-co-r')}</defs>
${ARR(470, 222, 470, 172, 'arr-spec-co-r', 3)}
${T(482, 192, 14, 'ring strain')}
${T(482, 210, 14, 'raises')}
</g>
<g class="fig-muted">${T(280, 432, 13, 'positions from the lesson’s table; schematic', 'middle')}</g>
</svg>`

/* 3 — ¹H chemical-shift ruler: δ 12 (left, downfield) → 0 (right, upfield) with the lesson's ranges (lead, 1000×460).
   x = 60 + (12 − δ)·73.33 */
const hX = (d: number) => 60 + (12 - d) * (880 / 12)
const range = (d1: number, d2: number, y: number) => BOX(hX(d1), y, hX(d2) - hX(d1), 16, '0.85', 3)
const shiftSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-spec-shift')}</defs>
${ARR(480, 50, 70, 50, 'arr-spec-shift', 2.5)}
${ARR(520, 50, 930, 50, 'arr-spec-shift', 2.5)}
${T(70, 82, 17, 'downfield · high δ · deshielded', 'start', '700')}
${T(930, 82, 17, 'upfield · low δ · shielded', 'end', '700')}
${range(12, 10, 165)}
${T(hX(11), 128, 18, 'COOH', 'middle', '700')}${T(hX(11), 150, 16, '10–12', 'middle')}
${range(4.5, 3.0, 165)}
${T(hX(3.75), 128, 18, 'H–C–O, H–C–X', 'middle', '700')}${T(hX(3.75), 150, 16, '3.0–4.5', 'middle')}
${range(1.5, 0.9, 165)}
${T(hX(1.2), 128, 18, 'alkyl', 'middle', '700')}${T(hX(1.2), 150, 16, '0.9–1.5', 'middle')}
${range(2.7, 2.0, 245)}
${T(hX(2.35), 208, 18, 'α to C=O', 'middle', '700')}${T(hX(2.35), 230, 16, '2.0–2.7', 'middle')}
${range(6.5, 4.5, 245)}
${T(hX(5.5), 208, 18, 'vinyl C=C–H', 'middle', '700')}${T(hX(5.5), 230, 16, '4.5–6.5', 'middle')}
<g class="fig-accent-2">
${range(8.5, 6.5, 165)}
${T(hX(7.5), 128, 18, 'aromatic', 'middle', '700')}${T(hX(7.5), 150, 16, '6.5–8.5', 'middle')}
${range(10, 9, 245)}
${T(hX(9.5), 208, 18, 'CHO', 'middle', '700')}${T(hX(9.5), 230, 16, '9–10', 'middle')}
${T(hX(8.5), 300, 15, 'red: π anisotropy pushes far downfield', 'middle')}
</g>
<g class="fig-muted">
${LINE(hX(5), 330, hX(1), 330, 5, true)}
${T(hX(3), 356, 15, 'O–H, N–H: variable (1–5), vanish with D₂O', 'middle')}
</g>
${LINE(60, 378, 940, 378, 2.5)}
${Array.from({ length: 7 }, (_, i) => 12 - 2 * i).map((d) => `${LINE(hX(d), 378, hX(d), 386, 2)}${T(hX(d), 404, 15, String(d), 'middle')}`).join('')}
${T(500, 434, 16, 'δ (ppm)', 'middle', '700')}
<g class="fig-muted">${T(940, 434, 15, 'TMS = 0', 'end')}</g>
</svg>`

/* 4 — n + 1 rule: Pascal multiplets (left) and the lesson's ethyl acetate spectrum (right) (lead, 1000×460).
   right panel: x = 530 + (4.5 − δ)·110, baseline y = 300 */
const multiplet = (cx: number, coeffs: number[], gap: number, maxH: number, baseY: number) => {
  const top = Math.max(...coeffs)
  const x0 = cx - ((coeffs.length - 1) * gap) / 2
  return coeffs.map((c, i) => STICK(x0 + i * gap, baseY, (maxH * c) / top, 4)).join('')
}
const eaX = (d: number) => 530 + (4.5 - d) * 110
const nPlusOne = [
  { cx: 90, coeffs: [1], name: 'singlet', ratio: '1', n: 'n = 0' },
  { cx: 205, coeffs: [1, 1], name: 'doublet', ratio: '1 : 1', n: 'n = 1' },
  { cx: 320, coeffs: [1, 2, 1], name: 'triplet', ratio: '1 : 2 : 1', n: 'n = 2' },
  { cx: 435, coeffs: [1, 3, 3, 1], name: 'quartet', ratio: '1 : 3 : 3 : 1', n: 'n = 3' },
]
const splitSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(40, 50, 19, 'n equivalent neighbours → n + 1 peaks', 'start', '700')}
${nPlusOne
  .map(
    (m) => `${multiplet(m.cx, m.coeffs, 16, 120, 270)}
${T(m.cx, 302, 18, m.name, 'middle', '700')}
${T(m.cx, 326, 16, m.ratio, 'middle')}
<g class="fig-muted">${T(m.cx, 350, 16, m.n, 'middle')}</g>`,
  )
  .join('')}
<g class="fig-muted">
${LINE(40, 270, 490, 270, 2)}
${T(40, 400, 15, 'heights follow Pascal’s triangle;')}
${T(40, 422, 15, 'equivalent H’s never split each other')}
${LINE(505, 30, 505, 440, 1.5)}
</g>
${T(530, 50, 19, 'ethyl acetate (lesson example)', 'start', '700')}
<text x="530" y="84" font-size="19" fill="currentColor">CH₃–CO–O–<tspan class="fig-accent-2" fill="currentColor" font-weight="700">CH₂</tspan>–<tspan class="fig-accent" fill="currentColor" font-weight="700">CH₃</tspan></text>
${LINE(530, 300, 970, 300, 2.5)}
${[4, 3, 2, 1].map((d) => `${LINE(eaX(d), 300, eaX(d), 308, 2)}${T(eaX(d), 326, 15, String(d), 'middle')}`).join('')}
${T(750, 352, 15, 'δ (ppm)', 'middle')}
<g class="fig-accent-2">
${multiplet(eaX(4.1), [1, 3, 3, 1], 10, 108, 300)}
${T(eaX(4.1), 178, 17, 'q, 2H, δ 4.1', 'middle', '700')}
${T(530, 396, 16, 'OCH₂: 3 neighbours → quartet')}
</g>
${STICK(eaX(2.0), 300, 80, 4)}
${T(eaX(2.0), 208, 17, 's, 3H, δ 2.0', 'middle', '700')}
${T(530, 418, 16, 'acetyl CH₃: 0 neighbours → singlet')}
<g class="fig-accent">
${multiplet(eaX(1.3), [1, 2, 1], 10, 120, 300)}
${T(eaX(1.3), 168, 17, 't, 3H, δ 1.3', 'middle', '700')}
${T(530, 440, 16, 'CH₃: 2 neighbours → triplet')}
</g>
</svg>`

/* 5 — Symmetry-equivalent hydrogens: acetone, para-xylene, 1-propanol vs 2-propanol (lead, 1000×460).
   Line structures, bond ≈ 50 px; letters mark sets of equivalent H's; dashed lines are mirror planes. */
const BOND = (x1: number, y1: number, x2: number, y2: number) => LINE(x1, y1, x2, y2, 3)
/** A C=X double bond drawn as two parallel lines offset ±d perpendicular to the bond. */
const DBL = (x1: number, y1: number, x2: number, y2: number, d = 4) => {
  const len = Math.hypot(x2 - x1, y2 - y1)
  const nx = (-(y2 - y1) / len) * d
  const ny = ((x2 - x1) / len) * d
  return `${LINE(x1 + nx, y1 + ny, x2 + nx, y2 + ny, 3)}${LINE(x1 - nx, y1 - ny, x2 - nx, y2 - ny, 3)}`
}
/* para-xylene ring: pointy-top hexagon, centre (470, 205), radius 45 */
const ringC: [number, number] = [470, 205]
const ringV: [number, number][] = [-90, -30, 30, 90, 150, 210].map((a) => [ringC[0] + 45 * Math.cos((a * Math.PI) / 180), ringC[1] + 45 * Math.sin((a * Math.PI) / 180)])
const ringEdges = ringV.map((v, i) => BOND(v[0], v[1], ringV[(i + 1) % 6][0], ringV[(i + 1) % 6][1])).join('')
/* Kekulé: inner second line on edges 0–1, 2–3, 4–5 (every ring carbon gets exactly one double bond) */
const inner = (i: number) => {
  const p = (v: [number, number], f: number) => [ringC[0] + (v[0] - ringC[0]) * f, ringC[1] + (v[1] - ringC[1]) * f]
  const a = ringV[i]
  const b = ringV[(i + 1) % 6]
  const a1 = p(a, 0.78)
  const b1 = p(b, 0.78)
  const sx = (b1[0] - a1[0]) * 0.12
  const sy = (b1[1] - a1[1]) * 0.12
  return LINE(a1[0] + sx, a1[1] + sy, b1[0] - sx, b1[1] - sy, 3)
}
const ringLetter = (i: number) => {
  const v = ringV[i]
  return T(ringC[0] + (v[0] - ringC[0]) * 1.5, ringC[1] + (v[1] - ringC[1]) * 1.5 + 7, 18, 'b', 'middle', '700')
}
const symmetrySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(150, 44, 19, 'acetone', 'middle', '700')}
${T(470, 44, 19, 'para-xylene', 'middle', '700')}
${T(820, 44, 19, '1-propanol vs 2-propanol', 'middle', '700')}
<g class="fig-muted">
${LINE(150, 80, 150, 300, 1.5, true)}
${LINE(470, 85, 470, 330, 1.5, true)}
${LINE(395, 205, 545, 205, 1.5, true)}
${LINE(912, 120, 912, 290, 1.5, true)}
${LINE(305, 30, 305, 410, 1.5)}
${LINE(640, 30, 640, 410, 1.5)}
</g>
${BOND(150, 205, 106.7, 230)}${BOND(150, 205, 193.3, 230)}
${DBL(150, 205, 150, 160)}
${T(150, 150, 22, 'O', 'middle', '700')}
<g class="fig-accent">
${T(96, 254, 18, 'a', 'middle', '700')}${T(204, 254, 18, 'a', 'middle', '700')}
</g>
${T(150, 340, 19, '¹H: 1 signal', 'middle', '700')}
${T(150, 366, 16, 'a = 6H singlet', 'middle')}
${ringEdges}${inner(0)}${inner(2)}${inner(4)}
${BOND(ringV[0][0], ringV[0][1], 470, 110)}
${BOND(ringV[3][0], ringV[3][1], 470, 300)}
<g class="fig-accent">
${T(488, 112, 18, 'a', 'middle', '700')}${T(488, 306, 18, 'a', 'middle', '700')}
</g>
<g class="fig-accent-2">${ringLetter(1)}${ringLetter(2)}${ringLetter(4)}${ringLetter(5)}</g>
${T(470, 340, 19, '¹H: 2 signals', 'middle', '700')}
${T(470, 366, 16, 'a = 6H (2 CH₃) · b = 4H (ring)', 'middle')}
${T(470, 396, 16, '¹³C: 3 signals for 8 C (21, 126, 137)', 'middle')}
${BOND(668, 230, 711, 205)}${BOND(711, 205, 754, 230)}${BOND(754, 230, 790, 209)}
${T(808, 210, 20, 'OH', 'middle', '700')}
<g class="fig-accent">${T(660, 256, 18, 'a', 'middle', '700')}</g>
<g class="fig-accent-2">${T(711, 190, 18, 'b', 'middle', '700')}</g>
${T(754, 256, 18, 'c', 'middle', '700')}
<g class="fig-muted">${T(808, 236, 18, 'd', 'middle', '700')}</g>
${BOND(869, 245, 912, 220)}${BOND(912, 220, 955, 245)}${BOND(912, 220, 912, 180)}
${T(912, 170, 20, 'OH', 'middle', '700')}
<g class="fig-accent">${T(862, 270, 18, 'a', 'middle', '700')}${T(962, 270, 18, 'a', 'middle', '700')}</g>
<g class="fig-accent-2">${T(932, 212, 18, 'b', 'middle', '700')}</g>
<g class="fig-muted">${T(938, 170, 18, 'c', 'middle', '700')}</g>
${T(730, 340, 19, '4 signals', 'middle', '700')}
${T(730, 366, 16, 'no mirror', 'middle')}
${T(912, 340, 19, '3 signals', 'middle', '700')}
${T(912, 366, 16, '6H d + 1H septet', 'middle')}
<g class="fig-muted">${T(500, 440, 16, 'letters = sets of equivalent H’s · dashed = mirror plane · fewer signals = symmetry', 'middle')}</g>
</svg>`

/* 6 — UV-Vis: the π → π* gap shrinks with conjugation (left), so the absorption slides to longer λ (right) (lead, 1000×460). */
const gapCol = (cx: number, homo: number, lumo: number, name: string, sub: string, marker: string) => `${LINE(cx - 35, lumo, cx + 35, lumo, 4)}${LINE(cx - 35, homo, cx + 35, homo, 4)}
${DARR(cx, homo - 6, cx, lumo + 6, marker, 2.5)}
${T(cx, 330, 17, name, 'middle', '700')}
${T(cx, 352, 15, sub, 'middle')}`
const uvBand = (cx: number, h: number, w: number) => {
  const base = 360
  const pts: string[] = []
  for (let x = cx - 3 * w; x <= cx + 3 * w; x += 4) pts.push(`${pts.length ? 'L' : 'M'}${x.toFixed(1)} ${(base - h * Math.exp(-((x - cx) ** 2) / (2 * w * w))).toFixed(1)}`)
  return CURVE(pts.join(' '), 3.5)
}
const uvSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-spec-uv')}</defs>
${ARR(50, 300, 50, 60, 'arr-spec-uv', 2.5)}
${T(58, 58, 15, 'energy')}
<g class="fig-muted">${T(108, 124, 17, 'π*', 'end')}${T(108, 304, 17, 'π', 'end')}</g>
${gapCol(150, 300, 120, 'isolated C=C', 'absorbs &lt; 200 nm', 'arr-spec-uv')}
${gapCol(270, 280, 150, 'butadiene', '2 conjugated', 'arr-spec-uv')}
<g class="fig-accent">
<defs>${ARROW('arr-spec-uv-b')}</defs>
${gapCol(390, 262, 178, 'hexatriene', '3 conjugated', 'arr-spec-uv-b')}
</g>
${T(250, 400, 17, 'more conjugation → smaller gap', 'middle', '700')}
${T(250, 426, 17, '→ longer λ absorbed (E = hc/λ)', 'middle', '700')}
<g class="fig-muted">${LINE(480, 30, 480, 440, 1.5)}</g>
${ARR(530, 360, 970, 360, 'arr-spec-uv', 2.5)}
${ARR(530, 360, 530, 70, 'arr-spec-uv', 2.5)}
${T(538, 68, 15, 'absorbance')}
${T(750, 390, 16, 'wavelength λ → longer', 'middle')}
<g class="fig-muted">
${BOX(870, 72, 95, 286, '0.14', 0)}
${T(918, 92, 15, 'visible', 'middle', '700')}
${LINE(620, 80, 620, 360, 2, true)}
${T(614, 100, 14, '~200 nm', 'end')}
${T(626, 100, 14, 'instrument sees →')}
${uvBand(575, 150, 16)}
${T(575, 190, 14, 'not seen', 'middle')}
</g>
${uvBand(680, 170, 18)}
${T(680, 176, 15, 'butadiene', 'middle', '700')}
<g class="fig-accent">
${uvBand(770, 200, 20)}
${T(770, 146, 15, 'hexatriene', 'middle', '700')}
</g>
<g class="fig-accent-2">
${uvBand(918, 190, 15)}
${T(918, 118, 14, 'β-carotene', 'middle', '700')}
${T(918, 136, 14, '11 C=C', 'middle')}
</g>
</svg>`

/* 7 — Mass spectrometry: three schematic m/z windows with the lesson's numbers (lead, 1000×460). Baseline y = 330, 100 % = 200 px. */
const msPanel = (x0: number, x1: number, m0: number, m1: number, ticks: number[]) => {
  const X = (m: number) => x0 + ((m - m0) * (x1 - x0)) / (m1 - m0)
  const axes = `${LINE(x0, 330, x1, 330, 2.5)}${LINE(x0, 330, x0, 110, 2)}${ticks.map((m) => `${LINE(X(m), 330, X(m), 337, 2)}${T(X(m), 355, 14, String(m), 'middle')}`).join('')}${T((x0 + x1) / 2, 380, 15, 'm/z', 'middle')}`
  return { X, axes }
}
const msA = msPanel(60, 310, 50, 80, [50, 60, 70, 80])
const msB = msPanel(380, 630, 86, 98, [86, 90, 94, 98])
const msC = msPanel(700, 950, 130, 142, [130, 134, 138, 142])
const msSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-spec-ms')}</defs>
${T(185, 44, 18, 'an alcohol, C₄H₁₀O', 'middle', '700')}
${T(505, 44, 18, 'C₄H₉Cl', 'middle', '700')}
${T(825, 44, 18, 'C₄H₉Br', 'middle', '700')}
<g class="fig-muted">
${T(52, 136, 13, '100', 'end')}
${LINE(54, 130, 60, 130, 2)}
${LINE(345, 30, 345, 425, 1.5)}
${LINE(665, 30, 665, 425, 1.5)}
</g>
${msA.axes}${msB.axes}${msC.axes}
${STICK(msA.X(56), 330, 200, 5)}
${T(msA.X(56), 120, 15, '56 (100%)', 'middle', '700')}
${STICK(msA.X(74), 330, 28, 5)}
${T(msA.X(74), 290, 15, 'M⁺ 74', 'middle', '700')}
${T(msA.X(74), 272, 14, 'weak', 'middle')}
<g class="fig-accent-2">
<defs>${ARROW('arr-spec-ms-r')}</defs>
<path d="M${msA.X(74)} 250 C ${msA.X(74)} 200, ${msA.X(56) + 30} 190, ${msA.X(56) + 10} 200" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-spec-ms-r)"/>
${T(msA.X(66), 182, 15, '−18 (H₂O)', 'middle', '700')}
</g>
${T(185, 412, 16, 'M⁺ hides; M − 18 is the tell', 'middle', '700')}
${STICK(msB.X(92), 330, 200, 5)}
${T(msB.X(92), 120, 15, 'M⁺ 92', 'middle', '700')}
<g class="fig-accent">
${STICK(msB.X(94), 330, 67, 5)}
${T(msB.X(94) + 8, 256, 15, 'M+2 94', 'start', '700')}
${T(msB.X(94) + 8, 274, 14, '≈ ⅓ of M')}
</g>
${T(505, 412, 16, '3 : 1 → one Cl (³⁵Cl / ³⁷Cl)', 'middle', '700')}
${STICK(msC.X(136), 330, 200, 5)}
${T(msC.X(136) - 6, 120, 15, 'M⁺ 136', 'end', '700')}
<g class="fig-accent">
${STICK(msC.X(138), 330, 196, 5)}
${T(msC.X(138) + 8, 124, 15, 'M+2 138', 'start', '700')}
${T(msC.X(138) + 8, 142, 14, '≈ M')}
</g>
${T(825, 412, 16, '1 : 1 → one Br (⁷⁹Br / ⁸¹Br)', 'middle', '700')}
<g class="fig-muted">${T(500, 444, 14, 'height = relative abundance; tallest peak = base peak (100%)', 'middle')}</g>
</svg>`

/* 8 — Which tool answers which question: a grid with the lesson's table rows plus the stereoisomer rows (replace-table, 560×440). */
const toolCols = ['IR', '¹H', '¹³C', 'UV', 'MS', '[α]']
const colX = (i: number) => 266 + 52 * i
const rowY = (r: number) => 98 + 42 * r
const CHECK = (cx: number, cy: number) => `<path d="M${cx - 10} ${cy} L${cx - 3} ${cy + 8} L${cx + 11} ${cy - 9}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`
const CROSS = (cx: number, cy: number) => `${LINE(cx - 8, cy - 8, cx + 8, cy + 8, 3)}${LINE(cx - 8, cy + 8, cx + 8, cy - 8, 3)}`
const toolRows: [string, number][] = [
  ['functional groups?', 0],
  ['how are the H’s arranged?', 1],
  ['unique C? C=O type?', 2],
  ['conjugated? redox assay?', 3],
  ['MW? halogen? N parity?', 4],
]
const toolSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 24, 16, 'which tool answers which question?', 'middle', '700')}
${toolCols.map((c, i) => T(colX(i), 62, 16, c, 'middle', '700')).join('')}
<g class="fig-muted">
${[0, 1, 2, 3, 4, 5, 6, 7].map((r) => LINE(16, rowY(r) - 21, 548, rowY(r) - 21, 1)).join('')}
${LINE(240, 44, 240, rowY(7) - 21, 1)}
${LINE(500, 44, 500, rowY(7) - 21, 1)}
${LINE(16, rowY(5) - 21, 548, rowY(5) - 21, 2.5)}
</g>
${toolRows.map(([q], r) => T(20, rowY(r) + 5, 15, q)).join('')}
<g class="fig-accent">${toolRows.map(([, c], r) => DOT(colX(c), rowY(r), 11)).join('')}</g>
${T(20, rowY(5) + 5, 15, 'enantiomers?', 'start', '700')}
<g class="fig-accent-2">${[0, 1, 2, 3, 4].map((i) => CROSS(colX(i), rowY(5))).join('')}</g>
<g class="fig-accent">${CHECK(colX(5), rowY(5))}</g>
${T(20, rowY(6) + 5, 15, 'diastereomers?', 'start', '700')}
<g class="fig-accent">${CHECK(colX(1), rowY(6))}${CHECK(colX(2), rowY(6))}</g>
${T(20, 400, 14, 'enantiomers: every spectrum identical — only [α]')}
${T(20, 420, 14, '(polarimetry) or a chiral environment tells them apart')}
</svg>`

/* 9 — Confirming a reaction: alcohol (top) vs ketone (bottom) IR, the bands that change highlighted (lead, 1000×460).
   x = 60 + (4000 − ν)·640/3000 (4000 → 1000 cm⁻¹); top baseline y = 80, bottom baseline y = 240. */
const rxX = (nu: number) => 60 + ((4000 - nu) * 640) / 3000
const alcoholBands: Band[] = [
  [3350, 110, 95],
  [2950, 14, 55],
  [2870, 14, 45],
  [1460, 10, 20],
  [1100, 28, 70],
]
const ketoneBands: Band[] = [
  [2950, 14, 55],
  [2870, 14, 45],
  [1715, 14, 130],
  [1460, 10, 20],
]
const rxSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
${LINE(rxX(3350), 62, rxX(3350), 380, 1.5, true)}
${LINE(rxX(1715), 62, rxX(1715), 380, 1.5, true)}
${LINE(60, 210, 700, 210, 1)}
${T(rxX(1715) + 8, 120, 15, 'no C=O')}
${LINE(720, 30, 720, 440, 1.5)}
</g>
${CURVE(dipPath(alcoholBands, 4000, 1000, 5, rxX, 80), 3)}
${CURVE(dipPath(ketoneBands, 4000, 1000, 5, rxX, 240), 3)}
${LINE(60, 390, 700, 390, 2.5)}
${[4000, 3000, 2000, 1000].map((v) => `${LINE(rxX(v), 390, rxX(v), 398, 2)}${T(rxX(v), 416, 15, String(v), 'middle')}`).join('')}
${T(380, 444, 15, 'wavenumber (cm⁻¹)', 'middle')}
${T(64, 64, 17, 'alcohol (before)', 'start', '700')}
${T(64, 230, 17, 'ketone (after)', 'start', '700')}
<g class="fig-accent-2">
${T(rxX(3350) + 58, 190, 16, 'broad O–H ~3350', 'start', '700')}
${T(rxX(3350) - 8, 268, 16, 'O–H gone', 'end', '700')}
</g>
<g class="fig-accent">
${T(rxX(1715) - 12, 360, 16, 'C=O ~1715 appears', 'end', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-spec-rx-b')}</defs>
${ARR(760, 110, 760, 270, 'arr-spec-rx-b', 3)}
${T(776, 160, 17, 'oxidation', 'start', '700')}
${T(776, 182, 15, 'O–H out, C=O in')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-spec-rx-r')}</defs>
${ARR(744, 270, 744, 110, 'arr-spec-rx-r', 3)}
${T(776, 226, 17, 'reduction (NaBH₄)', 'start', '700')}
${T(776, 248, 15, 'C=O out, O–H in')}
</g>
${T(740, 330, 17, 'answer with the band', 'start', '700')}
${T(740, 354, 17, 'that CHANGES', 'start', '700')}
<g class="fig-muted">
${T(740, 392, 15, 'the C–H stretches near')}
${T(740, 412, 15, '2900 stay: they prove nothing')}
</g>
</svg>`

export const mcatSpectroscopyFigures: DeckFigurePlacement[] = [
  {
    at: 'The Band Table',
    mode: 'lead',
    figure: {
      svg: irSvg,
      alt:
        'A schematic IR band map: one transmittance trace (%T) against wavenumber, running from 4000 cm⁻¹ on the left to 500 cm⁻¹ on the right, with absorptions drawn as dips from a flat top baseline. Top labels split the axis into the diagnostic region (above 1500, read the groups) and the shaded fingerprint region (below 1500, match only). A dashed line marks 3000. Dips, left to right: a broad rounded O–H dip at 3200–3550 (red label); two narrow C–H sp³ dips just below 3000; a sharp C≡N dip at 2250; the deepest dip, a strong sharp C=O at 1700–1750 (blue label); a strong C–O dip at 1000–1300 inside the fingerprint region, among several small unlabelled fingerprint dips. Schematic, bands from different groups shown on one trace.',
      caption: 'The band table on one axis — broad O–H, C–H straddling 3000, sharp C≡N, the strong C=O near 1700, C–O in the fingerprint (schematic, not a real spectrum).',
    },
    blocks: [
      '- Acid O–H smears 2500–3300 over the C–H; N–H 3300–3500 — primary = two spikes, secondary = one',
      '- sp² C–H just above 3000, sp³ just below; below 1500 is fingerprint — match it, don’t read it',
    ],
  },
  {
    at: 'Sorting Out the C=O Neighborhood',
    mode: 'replace-table',
    figure: {
      svg: carbonylSvg,
      alt:
        'A vertical wavenumber axis for the C=O stretch from about 1840 at the top to 1620 cm⁻¹ at the bottom (ticks at 1800, 1750, 1700, 1650), with each carbonyl type marked at its position from the lesson and labelled with a leader line. From the top: anhydride two bands at 1820 and 1760 and acyl chloride at ~1800 (red); ester 1735–1750; aldehyde 1720–1740; ketone ~1715; carboxylic acid ~1710 plus a broad O–H; and, lowest, amide 1630–1690 as a tall blue bar, noted "N lone pair donates: lowest". On the right a blue arrow pointing down from the ketone position is labelled conjugation, −20 to 30, and a red arrow pointing up is labelled ring strain raises. Positions schematic.',
      caption: 'The C=O ladder: acyl chloride ~1800 at the top, amide 1630–1690 at the bottom; conjugation pulls a band down, ring strain pushes it up (schematic, not a real spectrum).',
    },
    blocks: [
      '- Acyl chloride ~1800 > anhydride (two bands) > ester 1735–1750 > aldehyde 1720–1740',
      '- > ketone ~1715 ≈ acid ~1710 (+ broad O–H) > amide 1630–1690 (+ N–H if 1° or 2°)',
      '- **Conjugation lowers** C=O by ~20–30: acetophenone ~1685 vs acetone ~1715',
      '- **Ring strain raises** it: small-ring ketones and lactones absorb higher',
    ],
  },
  {
    at: 'Chemical Shift: Deshielding',
    mode: 'lead',
    figure: {
      svg: shiftSvg,
      alt:
        'A ¹H NMR chemical-shift ruler: the δ axis in ppm runs from 12 on the left to 0 on the right (TMS = 0). Arrows across the top: left is downfield, high δ, deshielded; right is upfield, low δ, shielded. Bars show the lesson’s ranges in two staggered rows: carboxylic acid COOH 10–12; aldehyde CHO 9–10 (red); aromatic 6.5–8.5 (red); vinyl C=C–H 4.5–6.5; H on a carbon bearing O or halogen 3.0–4.5; alpha to C=O 2.0–2.7; alkyl 0.9–1.5. A note says red marks π anisotropy pushing far downfield. A grey dashed bar from 5 to 1 is labelled O–H, N–H: variable (1–5), vanish with D₂O.',
      caption: 'The δ ruler: electronegative neighbours and π systems pull a proton left (downfield) — alkyl near 1, H–C–O 3–4.5, aromatic 6.5–8.5, aldehyde 9–10, acid 10–12 (schematic).',
    },
    blocks: [
      '- Less electron density around the H → **deshielded** → higher δ, drawn to the **left** (downfield)',
      '- Aromatic and aldehyde H’s sit extra far left: the ring current / C=O π field adds to the applied field',
    ],
  },
  {
    at: 'The n+1 Rule',
    mode: 'lead',
    figure: {
      svg: splitSvg,
      alt:
        'Left: four multiplets drawn as vertical lines — singlet (one line, n = 0), doublet (two equal lines, 1 : 1, n = 1), triplet (1 : 2 : 1, n = 2), quartet (1 : 3 : 3 : 1, n = 3); heights follow Pascal’s triangle and equivalent H’s never split each other. Right: a schematic ¹H spectrum of ethyl acetate, CH₃–CO–O–CH₂–CH₃, on a δ axis from about 4.5 to 0.5 ppm. A red quartet at δ 4.1 (2H) is the OCH₂, which has 3 neighbours; a single line at δ 2.0 (3H) is the acetyl CH₃ with 0 neighbours, a singlet; a blue triplet at δ 1.3 (3H) is the ethyl CH₃ with 2 neighbours.',
      caption: 'n neighbours give n + 1 lines with Pascal heights; ethyl acetate shows the ethyl fingerprint — a 2H quartet at 4.1 and a 3H triplet at 1.3 — plus a 3H singlet at 2.0 (schematic, not a real spectrum).',
    },
    blocks: [
      '- Count H’s on **adjacent** carbons: n neighbours → n + 1 peaks; O–H and N–H usually don’t split',
      '- Ethyl = 2H quartet + 3H triplet; isopropyl = 6H doublet + 1H septet; tert-butyl = 9H singlet',
    ],
  },
  {
    at: 'Counting Environments with Symmetry',
    mode: 'lead',
    figure: {
      svg: symmetrySvg,
      alt:
        'Four line structures with letters marking sets of equivalent hydrogens and dashed lines for mirror planes. Acetone (a C=O flanked by two CH₃): both methyls are a, so ¹H shows 1 signal, a 6H singlet. Para-xylene (a benzene ring with CH₃ groups at opposite corners, two mirror planes): both methyls are a and all four ring H’s are b, so ¹H shows 2 signals (6H and 4H) and ¹³C shows 3 signals for 8 carbons (21, 126, 137). 1-Propanol (a three-carbon chain ending in OH): no mirror, four environments a, b, c, d — 4 signals. 2-Propanol (OH on the middle carbon): the two methyls are both a, with b for the CH and c for OH — 3 signals, a 6H doublet plus a 1H septet. Footer: fewer signals means symmetry.',
      caption: 'Mirror-image positions are one environment: acetone gives 1 signal, para-xylene 2 (and 3 carbon signals for 8 carbons), 2-propanol 3 against 1-propanol’s 4.',
    },
    blocks: [
      '- Symmetry-equivalent H’s give ONE signal — fewer signals than you expect is a symmetry clue',
      '- Same logic in ¹³C: para-xylene, C₈H₁₀, shows only 3 carbon signals (21, 126, 137 ppm)',
    ],
  },
  {
    at: 'UV-Vis: Conjugation Detector',
    mode: 'lead',
    figure: {
      svg: uvSvg,
      alt:
        'Left: an energy ladder with π (HOMO) and π* (LUMO) levels for three molecules, the gap marked by a double arrow. Isolated C=C has the largest gap and absorbs below 200 nm; butadiene (2 conjugated C=C) a smaller gap; hexatriene (3 conjugated, blue) the smallest. Caption line: more conjugation → smaller gap → longer λ absorbed, E = hc/λ. Right: absorbance against wavelength (longer to the right). A dashed line at ~200 nm marks where the instrument starts to see; a grey band for the isolated C=C lies left of it, not seen. Butadiene’s band sits to the right of the line, hexatriene’s (blue) further right, and β-carotene’s (red, 11 C=C) further still, inside the shaded visible region. Positions illustrative.',
      caption: 'Each added conjugated C=C narrows the π → π* gap, so the absorption walks to longer wavelength — below 200 nm for one C=C, into the visible for β-carotene (illustrative positions).',
    },
    blocks: [
      '- β-carotene’s 11 conjugated C=C absorb blue light, so it looks orange',
      '- Biochem hooks: nucleic acids 260 nm · proteins 280 nm (Trp/Tyr) · NADH 340 nm (NAD⁺ does not)',
    ],
  },
  {
    at: 'Mass Spectrometry: Weighing the Pieces',
    mode: 'lead',
    figure: {
      svg: msSvg,
      alt:
        'Three schematic mass-spectrum windows, peak height = relative abundance, tallest peak = base peak (100%). Left, an alcohol C₄H₁₀O: a tall base peak at m/z 56 and a weak molecular ion M⁺ at 74; a red curved arrow from 74 to 56 is labelled −18 (H₂O); footer, M⁺ hides, M − 18 is the tell. Middle, C₄H₉Cl: M⁺ at 92 and a blue M+2 peak at 94 about one-third as tall — 3 : 1, one chlorine (³⁵Cl / ³⁷Cl). Right, C₄H₉Br: M⁺ at 136 and an M+2 peak at 138 almost exactly as tall — 1 : 1, one bromine (⁷⁹Br / ⁸¹Br).',
      caption: 'The lesson’s three spectra: an alcohol losing water (74 → 56), chlorine’s 3 : 1 M / M+2 pair (92 / 94), bromine’s 1 : 1 pair (136 / 138) (schematic, not a real spectrum).',
    },
    blocks: [
      '- M⁺ = molecular weight; an odd M⁺ means an odd number of N (nitrogen rule)',
      '- Fragments are the stable cations (acylium m/z 43, benzylic); losses: −15 CH₃, −18 H₂O, −29 CHO/C₂H₅',
    ],
  },
  {
    at: 'Which Tool for Which Question?',
    mode: 'replace-table',
    figure: {
      svg: toolSvg,
      alt:
        'A grid with questions as rows and tools as columns (IR, ¹H NMR, ¹³C NMR, UV-Vis, MS, and [α] for polarimetry). A blue dot marks the tool for each question: functional groups → IR; how the H’s are arranged → ¹H NMR; how many unique carbons and which carbonyl type → ¹³C NMR; conjugated or following a redox assay → UV-Vis; molecular weight, halogens and nitrogen parity → MS. Below a heavy line: enantiomers get a red cross under all five spectroscopic tools and a blue check only under [α]; diastereomers get blue checks under ¹H and ¹³C NMR. Footer: enantiomers have identical spectra; only polarimetry or a chiral environment tells them apart.',
      caption: 'One question, one tool — and the stereo catch: enantiomers defeat every spectrum (only polarimetry separates them), while diastereomers differ by NMR.',
    },
    blocks: [
      '- IR → functional groups · ¹H NMR → how the H’s are arranged',
      '- ¹³C NMR → unique carbons, carbonyl type · UV-Vis → conjugation, redox assays',
      '- MS → molecular weight, halogens (M+2), nitrogen parity',
      '- Enantiomers: all spectra identical → polarimetry; diastereomers: NMR can tell',
    ],
  },
  {
    at: 'Confirming a Reaction Happened',
    mode: 'lead',
    figure: {
      svg: rxSvg,
      alt:
        'Two schematic IR traces stacked on one wavenumber axis from 4000 to 1000 cm⁻¹, with dashed guide lines at 3350 and 1715. Top, alcohol (before): a broad red-labelled O–H dip near 3350, C–H dips near 2900, a C–O dip near 1100, and no C=O at 1715. Bottom, ketone (after): the O–H is gone (red label), the C–H dips are unchanged, and a strong new C=O dip appears at ~1715 (blue label). On the right, a blue arrow pointing down is labelled oxidation, O–H out, C=O in; a red arrow pointing up is labelled reduction (NaBH₄), C=O out, O–H in. Notes: answer with the band that changes; the C–H stretches near 2900 stay and prove nothing.',
      caption: 'Alcohol → ketone: the broad 3350 O–H disappears and a strong ~1715 C=O appears; reduction with NaBH₄ runs the picture in reverse (schematic, not a real spectrum).',
    },
    blocks: [
      '- Pick the feature that CHANGES: a band appearing or vanishing, or an ¹H signal moving',
      '- Aldehyde → acid: 2720 pair gone, O–H smear 2500–3300 in, ¹H 9–10 → 10–12',
    ],
  },
]
