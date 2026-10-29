import type { DeckFigurePlacement } from './index'

/**
 * Substitution & Elimination (MCAT C/P) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (the four substrate
 * classes, back-side attack through one transition state, ionisation to a
 * planar carbocation attacked from both faces, an anti-periplanar E2, the
 * shared SN1/E1 carbocation, Zaitsev vs Hofmann alkenes, one-hump vs two-hump
 * energy profiles, solvation shells, the lesson's three-question algorithm) —
 * no textbook, prep-company or AAMC figure was copied. Energy-profile shapes
 * are illustrative and their caption says so.
 *
 * Molecules drawn as structures are exactly the ones the lesson names:
 * CH₃Br, CH₃CH₂Br, (CH₃)₂CHBr, (CH₃)₃CBr; the tert-butyl cation,
 * tert-butanol and 2-methylpropene (the tert-butyl bromide solvolysis
 * example); 2-bromo-2-methylbutane, 2-methyl-2-butene and 2-methyl-1-butene
 * (the ethoxide / tert-butoxide question). Everything else is generic
 * (Nu⁻, B⁻, R₁–R₄, "C").
 *
 * Colours: the nucleophile / base and its arrows BLUE (fig-accent), the
 * leaving group and its departure arrow RED (fig-accent-2); in the
 * comparison figures substitution is blue and elimination red; guide lines
 * and asides grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-se-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

type Anchor = 'start' | 'middle' | 'end'

const n1 = (v: number) => (Math.round(v * 10) / 10).toString()

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: Anchor = 'start', weight = '400') =>
  `<text x="${n1(x)}" y="${n1(y)}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** An atom label centred on (x, y). `weight` as a string ('400' | '700'). */
const A = (x: number, y: number, label: string, size = 24, weight = '400') => T(x, y + size * 0.35, size, label, 'middle', weight)

/** Unit vector and length from (x1, y1) to (x2, y2). */
const dir = (x1: number, y1: number, x2: number, y2: number) => {
  const L = Math.hypot(x2 - x1, y2 - y1)
  return { ux: (x2 - x1) / L, uy: (y2 - y1) / L, L }
}

/** A bond line, trimmed by t1 at the start and t2 at the end so it clears atom labels. */
const BOND = (x1: number, y1: number, x2: number, y2: number, t1 = 0, t2 = 0, sw = 3, dashed = false) => {
  const { ux, uy } = dir(x1, y1, x2, y2)
  return `<line x1="${n1(x1 + ux * t1)}" y1="${n1(y1 + uy * t1)}" x2="${n1(x2 - ux * t2)}" y2="${n1(y2 - uy * t2)}" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round"${dashed ? ' stroke-dasharray="7 6"' : ''}/>`
}

/** A double bond: the full bond plus a shorter parallel line offset to one side (side = +1 or −1). */
const DOUBLE = (x1: number, y1: number, x2: number, y2: number, t1 = 0, t2 = 0, side = 1) => {
  const { ux, uy } = dir(x1, y1, x2, y2)
  const ox = -uy * 8 * side
  const oy = ux * 8 * side
  return `${BOND(x1, y1, x2, y2, t1, t2)}${BOND(x1 + ox, y1 + oy, x2 + ox, y2 + oy, t1 + 7, t2 + 7)}`
}

/** A solid wedge (toward the viewer): narrow at the stereocentre (x1, y1), wide at the far end. */
const WEDGE = (x1: number, y1: number, x2: number, y2: number, t1 = 0, t2 = 0, w = 12) => {
  const { ux, uy } = dir(x1, y1, x2, y2)
  const sx = x1 + ux * t1
  const sy = y1 + uy * t1
  const ex = x2 - ux * t2
  const ey = y2 - uy * t2
  const px = -uy * (w / 2)
  const py = ux * (w / 2)
  return `<polygon points="${n1(sx)},${n1(sy)} ${n1(ex + px)},${n1(ey + py)} ${n1(ex - px)},${n1(ey - py)}" fill="currentColor"/>`
}

/** A hashed wedge (away from the viewer): short parallel lines growing from the stereocentre. */
const HASH = (x1: number, y1: number, x2: number, y2: number, t1 = 0, t2 = 0, w = 12, count = 6) => {
  const { ux, uy, L } = dir(x1, y1, x2, y2)
  const len = L - t1 - t2
  const px = -uy
  const py = ux
  return Array.from({ length: count }, (_, i) => {
    const f = (i + 1) / count
    const cx = x1 + ux * (t1 + len * f)
    const cy = y1 + uy * (t1 + len * f)
    const h = (w / 2) * (0.25 + 0.75 * f)
    return `<line x1="${n1(cx + px * h)}" y1="${n1(cy + py * h)}" x2="${n1(cx - px * h)}" y2="${n1(cy - py * h)}" stroke="currentColor" stroke-width="2"/>`
  }).join('')
}

/** A curved electron-pushing arrow (cubic path) ending in the given marker. */
const CURLY = (d: string, marker: string, sw = 2.5) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" marker-end="url(#${marker})"/>`

/** A lone pair: two dots, side by side (horizontal) or stacked (vertical). */
const LP = (x: number, y: number, vertical = false) =>
  vertical
    ? `<circle cx="${x}" cy="${y - 5}" r="2.8" fill="currentColor"/><circle cx="${x}" cy="${y + 5}" r="2.8" fill="currentColor"/>`
    : `<circle cx="${x - 5}" cy="${y}" r="2.8" fill="currentColor"/><circle cx="${x + 5}" cy="${y}" r="2.8" fill="currentColor"/>`

/** A straight reaction arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-end="url(#${marker})"/>`

/** A double-headed arrow (the marker is auto-start-reverse, so one marker serves both ends). */
const DARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 2.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-start="url(#${marker})" marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A stroked path (curve) in the current colour. */
const CURVE = (d: string, sw = 3.5) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`

/** A rounded box outline in the current colour. */
const BOX = (x: number, y: number, w: number, h: number, sw = 2.5) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="none" stroke="currentColor" stroke-width="${sw}"/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

/* 1 — Substrate classes: methyl / 1° / 2° / 3° drawn, with which mechanisms each allows (lead, 1000×460).
   Each α carbon at y = 140 with Br straight up; columns at x = 330, 500, 670, 840. */
const brUp = (x: number) => `${BOND(x, 140, x, 76, 0, 15)}<g class="fig-accent-2">${A(x, 66, 'Br')}</g>`
const alpha = (x: number) => `<g class="fig-accent">${DOT(x, 140, 6)}</g>`
const substrateSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(330, 30, 22, 'methyl', 'middle', '700')}
${T(500, 30, 22, '1°', 'middle', '700')}
${T(670, 30, 22, '2°', 'middle', '700')}
${T(840, 30, 22, '3°', 'middle', '700')}
${A(330, 150, 'CH₃')}${BOND(330, 140, 330, 76, 18, 15)}<g class="fig-accent-2">${A(330, 66, 'Br')}</g>
${brUp(500)}${BOND(500, 140, 452, 168)}${alpha(500)}
${brUp(670)}${BOND(670, 140, 622, 168)}${BOND(670, 140, 718, 168)}${alpha(670)}
${brUp(840)}${BOND(840, 140, 786, 140)}${BOND(840, 140, 894, 140)}${BOND(840, 140, 840, 194)}${alpha(840)}
<g class="fig-muted">
${T(330, 228, 18, 'CH₃Br', 'middle')}
${T(500, 228, 18, 'CH₃CH₂Br', 'middle')}
${T(670, 228, 18, '(CH₃)₂CHBr', 'middle')}
${T(840, 228, 18, '(CH₃)₃CBr', 'middle')}
${T(30, 90, 18, 'carbons on')}
${T(30, 114, 18, 'the C–Br carbon:')}
${T(30, 160, 18, '(blue dot = α C)')}
${LINE(20, 250, 980, 250, 1.5)}
</g>
${T(392, 100, 18, '0 C', 'start', '700')}${T(560, 100, 18, '1 C', 'start', '700')}${T(730, 100, 18, '2 C', 'start', '700')}${T(900, 100, 18, '3 C', 'start', '700')}
<g class="fig-accent">
${T(30, 296, 24, 'SN2', 'start', '700')}
${T(30, 320, 17, 'back side must be open')}
${T(330, 302, 22, '✓ fastest', 'middle', '700')}
${T(500, 302, 22, '✓ fast', 'middle', '700')}
${T(670, 302, 22, '✓ slower', 'middle', '700')}
</g>
${T(840, 302, 22, '✗ never', 'middle', '700')}
<g class="fig-accent-2">
${T(30, 376, 24, 'SN1 / E1', 'start', '700')}
${T(30, 400, 17, 'needs a stable C⁺')}
${T(670, 382, 22, '✓', 'middle', '700')}
${T(840, 382, 22, '✓ fastest', 'middle', '700')}
</g>
${T(330, 382, 22, '✗', 'middle', '700')}
${T(500, 382, 22, '✗ *', 'middle', '700')}
<g class="fig-muted">
${T(30, 446, 17, 'crowding grows → SN2 slows;  more alkyl groups → steadier C⁺ (hyperconjugation, induction)')}
${T(500, 412, 15, '* unless allylic / benzylic', 'middle')}
</g>
</svg>`

/* 2 — SN2: back-side attack, one pentacoordinate transition state, Walden inversion (lead, 1000×460) */
const sn2Svg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-se-sn2')}</defs>
<g class="fig-accent">
<defs>${ARROW('arr-se-sn2-b')}</defs>
${A(58, 160, 'Nu⁻')}${LP(90, 160, true)}
${CURLY('M94 148 C116 110 168 112 190 148', 'arr-se-sn2-b')}
</g>
${A(205, 160, 'C')}
${BOND(205, 160, 275, 160, 12, 17)}
<g class="fig-accent-2">
<defs>${ARROW('arr-se-sn2-r')}</defs>
${A(275, 160, 'Br')}
${CURLY('M240 154 C248 120 276 118 280 140', 'arr-se-sn2-r')}
</g>
${BOND(205, 160, 186, 104, 13, 13)}${A(184, 98, 'R')}
${WEDGE(205, 160, 158, 214, 13, 15)}${A(150, 222, 'R′')}
${HASH(205, 160, 214, 230, 13, 14)}${A(216, 240, 'H')}
${ARR(302, 160, 345, 160, 'arr-se-sn2')}
<g class="fig-muted">
${CURVE('M378 70 L366 70 L366 252 L378 252', 2.5)}
${CURVE('M630 70 L642 70 L642 252 L630 252', 2.5)}
</g>
${T(652, 86, 28, '‡', 'start', '700')}
<g class="fig-accent">${A(398, 160, 'Nu')}${T(398, 128, 18, 'δ⁻', 'middle')}</g>
${BOND(398, 160, 505, 160, 22, 14, 3, true)}
${A(505, 160, 'C')}
${BOND(505, 160, 600, 160, 14, 18, 3, true)}
<g class="fig-accent-2">${A(600, 160, 'Br')}${T(600, 128, 18, 'δ⁻', 'middle')}</g>
${BOND(505, 160, 505, 100, 14, 12)}${A(505, 90, 'R')}
${WEDGE(505, 160, 470, 212, 14, 14)}${A(462, 222, 'R′')}
${HASH(505, 160, 540, 212, 14, 14)}${A(548, 222, 'H')}
${ARR(668, 160, 710, 160, 'arr-se-sn2')}
<g class="fig-accent">${A(740, 160, 'Nu')}</g>
${BOND(740, 160, 820, 160, 22, 13)}
${A(820, 160, 'C')}
${BOND(820, 160, 839, 104, 13, 13)}${A(841, 98, 'R')}
${WEDGE(820, 160, 867, 214, 13, 15)}${A(875, 222, 'R′')}
${HASH(820, 160, 811, 230, 13, 14)}${A(809, 240, 'H')}
<g class="fig-accent-2">${T(900, 168, 24, '+ Br⁻')}</g>
<g class="fig-muted">
${T(170, 288, 18, 'Nu enters 180° from Br', 'middle')}
${T(170, 310, 18, '(back-side attack)', 'middle')}
${T(505, 288, 18, 'one TS: Nu and Br half-bonded,', 'middle')}
${T(505, 310, 18, 'R, R′, H flat between them', 'middle')}
${T(850, 288, 18, 'umbrella flipped:', 'middle')}
${T(850, 310, 18, 'Walden inversion', 'middle')}
${LINE(20, 336, 980, 336, 1.5)}
</g>
${T(40, 376, 22, 'one concerted step:  rate = k[RX][Nu]', 'start', '700')}
${T(40, 410, 20, 'bond to Nu forms as the bond to Br breaks — no intermediate, no rearrangement')}
<g class="fig-muted">${T(40, 442, 18, 'R/S label flips only if the incoming and outgoing groups hold the same priority rank')}</g>
</svg>`

/* 3 — SN1: slow ionisation to a planar carbocation, attack on either face → racemic (lead, 1000×460).
   Reactant and the top-face product share one configuration (retention); the bottom-face product is its mirror image. */
const tetraDown = (x: number, y: number) =>
  `${BOND(x, y, x - 52, y + 32, 13, 13)}${A(x - 64, y + 40, 'R₁', 22)}
${WEDGE(x, y, x + 52, y + 32, 13, 14)}${A(x + 66, y + 40, 'R₂', 22)}
${HASH(x, y, x, y + 66, 13, 13)}${A(x, y + 78, 'R₃', 22)}`
const tetraUp = (x: number, y: number) =>
  `${BOND(x, y, x - 52, y - 32, 13, 13)}${A(x - 64, y - 40, 'R₁', 22)}
${WEDGE(x, y, x + 52, y - 32, 13, 14)}${A(x + 66, y - 40, 'R₂', 22)}
${HASH(x, y, x, y - 66, 13, 13)}${A(x, y - 78, 'R₃', 22)}`
const sn1Svg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-se-sn1')}</defs>
${A(110, 190, 'C')}
${BOND(110, 190, 110, 108, 13, 15)}
<g class="fig-accent-2">
<defs>${ARROW('arr-se-sn1-r')}</defs>
${A(110, 100, 'Br')}
${CURLY('M116 162 C142 156 148 122 130 106', 'arr-se-sn1-r')}
</g>
${tetraDown(110, 190)}
${ARR(196, 200, 296, 200, 'arr-se-sn1')}
${T(246, 186, 18, 'slow (RDS)', 'middle', '700')}
<g class="fig-accent-2">${T(246, 226, 18, '− Br⁻', 'middle')}</g>
<g class="fig-muted">
<ellipse cx="420" cy="156" rx="15" ry="28" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<ellipse cx="420" cy="244" rx="15" ry="28" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
${T(300, 270, 16, 'empty p orbital', 'middle')}
</g>
${A(420, 200, 'C⁺')}
${BOND(420, 200, 362, 200, 15, 13)}${A(346, 200, 'R₁', 22)}
${WEDGE(420, 200, 478, 216, 16, 14)}${A(494, 222, 'R₂', 22)}
${HASH(420, 200, 478, 184, 16, 14)}${A(494, 178, 'R₃', 22)}
<g class="fig-accent">
<defs>${ARROW('arr-se-sn1-b')}</defs>
${A(420, 56, 'Nu⁻')}${LP(420, 78)}
${CURLY('M420 86 C426 96 426 108 421 120', 'arr-se-sn1-b')}
${A(420, 344, 'Nu⁻')}${LP(420, 322)}
${CURLY('M420 314 C426 304 426 292 421 280', 'arr-se-sn1-b')}
${T(452, 100, 17, 'top face')}
${T(452, 306, 17, 'bottom face')}
${ARR(540, 168, 670, 118, 'arr-se-sn1-b', 2.5)}
${ARR(540, 232, 670, 300, 'arr-se-sn1-b', 2.5)}
${A(760, 40, 'Nu')}${A(760, 420, 'Nu')}
</g>
${A(760, 110, 'C')}${BOND(760, 110, 760, 40, 13, 14)}
${tetraDown(760, 110)}
${A(760, 350, 'C')}${BOND(760, 350, 760, 420, 13, 14)}
${tetraUp(760, 350)}
<g class="fig-muted">
${LINE(680, 230, 850, 230, 2, true)}
${T(870, 92, 17, 'same as start')}
${T(870, 380, 17, 'mirror image')}
</g>
${T(870, 72, 18, 'retention', 'start', '700')}
${T(870, 222, 20, '≈ 50 : 50', 'start', '700')}
${T(870, 246, 18, 'racemic')}
${T(870, 360, 18, 'inversion', 'start', '700')}
${T(40, 384, 20, 'rate = k[RX]: Nu is not in the slow step', 'start', '700')}
${T(40, 412, 18, 'needs a stable C⁺ (3° > 2°) and a polar protic solvent')}
<g class="fig-muted">${T(40, 440, 17, 'the C⁺ may first rearrange (hydride or methyl shift)')}</g>
</svg>`

/* 4 — E2: base removes the anti-periplanar β-H as the π bond forms and Br leaves (lead, 1000×460) */
const e2Svg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-se-e2')}</defs>
<g class="fig-accent">
<defs>${ARROW('arr-se-e2-b')}</defs>
${A(76, 96, 'B⁻')}${LP(106, 96, true)}
${CURLY('M110 84 C132 64 172 76 188 116', 'arr-se-e2-b')}
${A(200, 132, 'H')}
${CURLY('M208 178 C236 176 252 192 250 220', 'arr-se-e2-b')}
</g>
${A(200, 230, 'C')}${A(300, 230, 'C')}
${BOND(200, 230, 300, 230, 13, 13)}
${BOND(200, 230, 200, 132, 13, 12)}
${WEDGE(200, 230, 146, 252, 13, 14)}${A(132, 256, 'R₁', 22)}
${HASH(200, 230, 180, 290, 13, 13)}${A(176, 304, 'R₂', 22)}
${WEDGE(300, 230, 354, 208, 13, 14)}${A(368, 204, 'R₃', 22)}
${HASH(300, 230, 320, 170, 13, 13)}${A(324, 156, 'R₄', 22)}
${BOND(300, 230, 300, 320, 13, 15)}
<g class="fig-accent-2">
<defs>${ARROW('arr-se-e2-r')}</defs>
${A(300, 330, 'Br')}
${CURLY('M306 268 C334 272 340 298 322 318', 'arr-se-e2-r')}
</g>
<g class="fig-muted">${T(214, 262, 16, 'β')}${T(278, 262, 16, 'α')}</g>
${ARR(404, 230, 456, 230, 'arr-se-e2')}
${A(510, 230, 'C')}${A(590, 230, 'C')}
${DOUBLE(510, 230, 590, 230, 13, 13, -1)}
${BOND(510, 230, 474, 182, 13, 12)}${A(466, 170, 'R₁', 22)}
${BOND(510, 230, 474, 278, 13, 12)}${A(466, 290, 'R₂', 22)}
${BOND(590, 230, 626, 182, 13, 12)}${A(634, 170, 'R₃', 22)}
${BOND(590, 230, 626, 278, 13, 12)}${A(634, 290, 'R₄', 22)}
${T(550, 340, 20, '+ B–H + Br⁻', 'middle')}
<g class="fig-muted">
${LINE(690, 20, 690, 350, 1.5)}
<circle cx="840" cy="150" r="48" fill="none" stroke="currentColor" stroke-width="2.5"/>
</g>
${BOND(840, 150, 792, 178)}${BOND(840, 150, 888, 178)}
${BOND(882, 126, 912, 108)}${BOND(798, 126, 768, 108)}
<g class="fig-accent">${BOND(840, 150, 840, 82)}${A(840, 68, 'H')}</g>
<g class="fig-accent-2">${BOND(840, 198, 840, 226)}${A(840, 244, 'Br')}</g>
${T(840, 290, 18, 'Newman view: H and Br anti', 'middle', '700')}
${T(840, 314, 18, 'dihedral 180° (anti-periplanar)', 'middle')}
<g class="fig-muted">${T(840, 338, 16, 'ring: both axial (trans-diaxial)', 'middle')}</g>
${T(40, 386, 22, 'one concerted step:  rate = k[RX][base]', 'start', '700')}
${T(40, 416, 19, 'base takes the β-H, the C–H electrons become the π bond, Br leaves with its pair')}
<g class="fig-muted">${T(40, 444, 17, 'stereospecific: R₁ and R₃ (both wedged) end up cis — geometry fixed by the anti alignment')}</g>
</svg>`

/* 5 — E1 and SN1 share one carbocation: tert-butyl bromide solvolysis (lead, 1000×460) */
const e1Svg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-se-e1')}</defs>
${BOND(110, 230, 110, 158, 0, 15)}
${BOND(110, 230, 58, 230)}${BOND(110, 230, 162, 230)}${BOND(110, 230, 110, 282)}
<g class="fig-accent-2">
<defs>${ARROW('arr-se-e1-r')}</defs>
${A(110, 148, 'Br')}
${CURLY('M116 198 C140 192 144 168 128 154', 'arr-se-e1-r')}
</g>
${T(110, 320, 17, '(CH₃)₃C–Br', 'middle')}
${ARR(196, 230, 300, 230, 'arr-se-e1')}
${T(248, 216, 18, 'slow (RDS)', 'middle', '700')}
<g class="fig-accent-2">${T(248, 254, 18, '− Br⁻', 'middle')}</g>
${BOND(420, 230, 420, 170)}${BOND(420, 230, 368, 260)}${BOND(420, 230, 472, 260)}
${A(400, 212, '+', 24, '700')}
${T(380, 320, 17, 'tert-butyl C⁺', 'middle')}
<g class="fig-accent">
<defs>${ARROW('arr-se-e1-b')}</defs>
${A(572, 150, 'OH₂')}${LP(546, 150, true)}
${CURLY('M538 142 C500 120 440 150 430 216', 'arr-se-e1-b')}
${ARR(612, 168, 724, 140, 'arr-se-e1-b', 2.5)}
${T(668, 128, 18, 'SN1', 'middle', '700')}
${A(820, 54, 'OH')}
${T(820, 222, 18, 'tert-butanol (after −H⁺)', 'middle', '700')}
</g>
${BOND(820, 120, 820, 64, 0, 16)}${BOND(820, 120, 768, 120)}${BOND(820, 120, 872, 120)}${BOND(820, 120, 820, 172)}
<g class="fig-accent-2">
<defs>${ARROW('arr-se-e1-r2')}</defs>
${BOND(472, 260, 500, 300, 0, 13)}${A(506, 310, 'H')}
${A(600, 330, 'OH₂')}${LP(574, 330, true)}
${CURLY('M568 320 C552 302 534 300 520 306', 'arr-se-e1-r2')}
${CURLY('M482 286 C458 292 440 270 446 250', 'arr-se-e1-r2')}
${ARR(640, 316, 740, 330, 'arr-se-e1-r2', 2.5)}
${T(690, 306, 18, 'E1', 'middle', '700')}
${DOUBLE(820, 350, 820, 294, 0, 0, 1)}
${T(820, 420, 18, '2-methylpropene', 'middle', '700')}
</g>
${BOND(820, 350, 774, 378)}${BOND(820, 350, 866, 378)}
<g class="fig-muted">${T(470, 120, 16, 'H₂O attacks C⁺', 'middle')}${T(560, 372, 16, 'H₂O takes a β-H', 'middle')}</g>
${T(40, 384, 20, 'same slow step as SN1:  rate = k[RX]', 'start', '700')}
${T(40, 412, 18, 'one C⁺, two exits: capture (SN1) or lose a β-H (E1)')}
<g class="fig-muted">${T(40, 440, 17, 'heat favours E1 · Zaitsev alkene · C⁺ may rearrange first')}</g>
</svg>`

/* 6 — Zaitsev vs Hofmann for 2-bromo-2-methylbutane: EtO⁻ vs t-BuO⁻ (lead, 1000×460).
   Skeleton: C1–C2(Br)(CH₃)–C3–C4 as a zigzag, C2 the top vertex. */
const regioSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-se-reg')}</defs>
${T(500, 30, 20, '2-bromo-2-methylbutane', 'middle', '700')}
${BOND(480, 120, 430, 149)}${BOND(480, 120, 530, 149)}${BOND(530, 149, 580, 120)}${BOND(480, 120, 523, 95)}
${BOND(480, 120, 428, 90, 0, 15)}
<g class="fig-accent-2">${A(416, 84, 'Br')}${DOT(530, 149, 6)}${T(548, 184, 17, 'β-H on CH₂: crowded')}</g>
<g class="fig-accent">${DOT(430, 149, 6)}${DOT(523, 95, 6)}${T(412, 184, 17, 'β-H on CH₃: exposed', 'end')}</g>
<g class="fig-accent">
<defs>${ARROW('arr-se-reg-b')}</defs>
${ARR(440, 204, 300, 258, 'arr-se-reg-b', 3)}
${T(346, 216, 18, 't-BuO⁻ (bulky)', 'end', '700')}
${DOUBLE(150, 329, 200, 300, 0, 0, 1)}
${T(225, 380, 20, 'Hofmann: 2-methyl-1-butene', 'middle', '700')}
</g>
${BOND(200, 300, 250, 329)}${BOND(250, 329, 300, 300)}${BOND(200, 300, 200, 246)}
${T(225, 406, 18, 'disubstituted — the easy H was taken', 'middle')}
<g class="fig-accent-2">
<defs>${ARROW('arr-se-reg-r')}</defs>
${ARR(560, 204, 700, 258, 'arr-se-reg-r', 3)}
${T(654, 216, 18, 'EtO⁻ (small)', 'start', '700')}
${DOUBLE(800, 300, 850, 329, 0, 0, -1)}
${T(825, 380, 20, 'Zaitsev: 2-methyl-2-butene', 'middle', '700')}
</g>
${BOND(800, 300, 750, 329)}${BOND(850, 329, 900, 300)}${BOND(800, 300, 800, 246)}
${T(825, 406, 18, 'trisubstituted — more stable', 'middle')}
<g class="fig-muted">${T(500, 446, 17, 'alkene stability: tetra > tri > di > mono;  trans (E) > cis (Z)', 'middle')}</g>
</svg>`

/* 7 — Energy diagrams: SN2/E2 one hump vs SN1/E1 two humps with a carbocation valley (lead, 1000×460; shapes illustrative) */
const energySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-se-en')}</defs>
${T(260, 34, 22, 'SN2 / E2: one hump', 'middle', '700')}
${ARR(60, 400, 470, 400, 'arr-se-en', 2.5)}${ARR(60, 400, 60, 60, 'arr-se-en', 2.5)}
${T(68, 70, 16, 'energy')}${T(466, 424, 16, 'reaction coordinate', 'end')}
${CURVE('M80 300 L130 300 C190 300 210 110 260 110 C310 110 330 340 380 340 L450 340')}
${T(260, 94, 18, 'one TS ‡', 'middle', '700')}
${T(105, 324, 17, 'reactants', 'middle')}${T(418, 364, 17, 'products', 'middle')}
<g class="fig-muted">
<defs>${ARROW('arr-se-en-m')}</defs>
${LINE(96, 110, 250, 110, 1.5, true)}
${DARR(96, 297, 96, 113, 'arr-se-en-m', 2)}
${T(104, 214, 17, 'Ea')}
${T(345, 196, 17, 'no valley =')}
${T(345, 218, 17, 'no intermediate')}
${LINE(500, 20, 500, 440, 1.5)}
</g>
${T(750, 34, 22, 'SN1 / E1: two humps', 'middle', '700')}
${ARR(540, 400, 970, 400, 'arr-se-en', 2.5)}${ARR(540, 400, 540, 60, 'arr-se-en', 2.5)}
${T(548, 70, 16, 'energy')}${T(966, 424, 16, 'reaction coordinate', 'end')}
${CURVE('M556 320 L600 320 C640 320 650 100 690 100 C730 100 735 214 765 214 C790 214 800 164 830 164 C860 164 870 360 900 360 L955 360')}
<g class="fig-accent-2">${T(690, 84, 18, 'TS₁ highest → RDS', 'middle', '700')}</g>
${T(838, 148, 17, 'TS₂', 'middle', '700')}
<g class="fig-accent">${DOT(765, 214, 6)}${T(765, 246, 18, 'C⁺ intermediate', 'middle', '700')}</g>
<g class="fig-muted">
<defs>${ARROW('arr-se-en-m2')}</defs>
${LINE(574, 100, 680, 100, 1.5, true)}
${DARR(574, 317, 574, 103, 'arr-se-en-m2', 2)}
${T(582, 214, 17, 'Ea₁')}
${T(735, 300, 16, 'Hammond: TS₁ is late,', 'middle')}
${T(735, 322, 16, 'so it looks like the C⁺', 'middle')}
</g>
${T(500, 452, 17, 'humps = steps · valleys = intermediates · the highest TS overall sets the rate', 'middle')}
</svg>`

/* 8 — Solvent effects: protic H-bond cage around the anion vs aprotic solvation of the cation only (replace-table, 560×440) */
const ring = (cx: number, cy: number, angles: number[], inner: string, outer: string, rIn: number, rOut: number, hbond: boolean, double = false) =>
  angles
    .map((deg) => {
      const a = (deg * Math.PI) / 180
      const c = Math.cos(a)
      const s = Math.sin(a)
      const ix = cx + c * rIn
      const iy = cy + s * rIn
      const ox = cx + c * rOut
      const oy = cy + s * rOut
      const link = hbond
        ? `<g class="fig-muted">${BOND(cx + c * 27, cy + s * 27, ix, iy, 0, 10, 2, true)}</g>`
        : ''
      const bond = double ? DOUBLE(ix, iy, ox, oy, 9, 10, 1) : BOND(ix, iy, ox, oy, 9, 10, 2.2)
      return `${link}${A(ix, iy, inner, 16)}${bond}${A(ox, oy, outer, 16)}`
    })
    .join('')
const solventSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(140, 26, 18, 'polar protic', 'middle', '700')}
${T(140, 48, 15, 'H₂O, ROH', 'middle')}
${T(420, 26, 18, 'polar aprotic', 'middle', '700')}
${T(420, 48, 15, 'DMSO, DMF, acetone', 'middle')}
<g class="fig-muted">${LINE(280, 12, 280, 350, 1.5)}</g>
<g class="fig-accent"><circle cx="140" cy="170" r="24" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>${A(140, 170, 'Nu⁻', 17, '700')}</g>
${ring(140, 170, [270, 330, 30, 90, 150, 210], 'H', 'O', 48, 80, true)}
${T(140, 300, 15, 'H-bonds cage the anion', 'middle')}
${T(140, 332, 16, 'Nu blunted', 'middle', '700')}
<circle cx="420" cy="165" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>${A(420, 165, 'Na⁺', 15, '700')}
${ring(420, 165, [210, 270, 330, 30, 150], 'O', 'S', 40, 94, false, true)}
<g class="fig-accent"><circle cx="420" cy="286" r="24" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>${A(420, 286, 'Nu⁻', 17, '700')}</g>
${T(420, 332, 16, 'naked Nu⁻: reactive', 'middle', '700')}
<g class="fig-muted">${T(420, 246, 14, 'DMSO: the O end faces Na⁺', 'middle')}</g>
<g class="fig-accent-2">${T(20, 372, 16, 'protic → SN1 / E1: stabilises C⁺ and the leaving anion', 'start', '700')}</g>
<g class="fig-accent">${T(20, 400, 16, 'aprotic → SN2: the anion is left free and reactive', 'start', '700')}</g>
<g class="fig-muted">${T(20, 428, 14, 'nonpolar (hexane): dissolves neither ion — no ionic mechanism')}</g>
</svg>`

/* 9 — The three-question algorithm: substrate → reagent → solvent/heat (lead, 1000×460) */
const leaf = (x: number, y: number, w: number, text: string, cls?: string) => {
  const g = `${BOX(x, y, w, 38, 2)}${T(x + w / 2, y + 25, 17, text, 'middle', '700')}`
  return cls ? `<g class="${cls}">${g}</g>` : g
}
const treeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-se-tree')}</defs>
${BOX(380, 12, 240, 42)}${T(500, 40, 19, '1. What is the substrate?', 'middle', '700')}
${ARR(420, 54, 170, 92, 'arr-se-tree', 2)}${ARR(500, 54, 500, 92, 'arr-se-tree', 2)}${ARR(580, 54, 830, 92, 'arr-se-tree', 2)}
${T(150, 116, 19, 'methyl / 1°', 'middle', '700')}
${T(500, 116, 19, '2° (or allylic / benzylic 1°)', 'middle', '700')}
${T(850, 116, 19, '3°', 'middle', '700')}
<g class="fig-muted">${T(150, 138, 15, 'no C⁺ pathways', 'middle')}${T(850, 138, 15, 'no SN2', 'middle')}</g>
${leaf(40, 160, 220, 'most reagents → SN2', 'fig-accent')}
${leaf(40, 210, 220, 'bulky base → E2', 'fig-accent-2')}
${BOX(360, 146, 280, 34, 2)}${T(500, 169, 17, '2. what is the reagent?', 'middle', '700')}
${leaf(300, 196, 400, 'strong Nu, weak base (I⁻, CN⁻, RS⁻, N₃⁻) → SN2', 'fig-accent')}
${leaf(300, 242, 400, 'strong Nu + strong base (HO⁻, RO⁻) → SN2 / E2')}
${leaf(300, 288, 400, 'bulky base (t-BuO⁻, LDA) → E2 (Hofmann)', 'fig-accent-2')}
${leaf(300, 334, 400, 'weak Nu / weak base (H₂O, ROH) → SN1 / E1')}
${leaf(740, 160, 220, 'strong base → E2', 'fig-accent-2')}
${leaf(740, 210, 220, 'weak → SN1 + E1', '')}
<g class="fig-muted">${T(850, 270, 15, 'heat tips it to E1', 'middle')}${T(500, 390, 15, 'heat tips 2° + strong base to E2', 'middle')}</g>
<g class="fig-muted">${LINE(20, 404, 980, 404, 1.5)}</g>
${T(500, 438, 19, '3. solvent & heat:  aprotic → SN2 / E2  ·  protic → SN1 / E1  ·  heat → elimination', 'middle', '700')}
</svg>`

export const mcatSubstitutionEliminationFigures: DeckFigurePlacement[] = [
  {
    at: 'Substrate Classification',
    mode: 'lead',
    figure: {
      svg: substrateSvg,
      alt:
        'Four columns, each a structure with Br pointing up from the carbon that bears it, marked by a blue dot. Methyl: CH₃–Br, zero carbons on that carbon. Primary: CH₃CH₂Br, one carbon attached. Secondary: (CH₃)₂CHBr, two carbons attached. Tertiary: (CH₃)₃CBr, three carbons attached. Below, two rows. SN2 (the back side must be open): methyl fastest, primary fast, secondary slower, tertiary never. SN1 / E1 (needs a stable carbocation): methyl no, primary no (unless allylic or benzylic), secondary yes, tertiary fastest. Footer: as crowding grows SN2 slows, while more alkyl groups steady the carbocation by hyperconjugation and induction.',
      caption: 'Count the carbons on the C–Br carbon: crowding shuts SN2 off at 3°, and carbocation stability shuts SN1/E1 off at methyl and 1°.',
    },
    blocks: [
      '- SN2 sterics: methyl > 1° > 2° >> 3° · SN1/E1 cation stability: 3° > 2° >> 1° (allylic/benzylic excepted)',
    ],
  },
  {
    at: 'SN2: One Concerted Step',
    mode: 'lead',
    figure: {
      svg: sn2Svg,
      alt:
        'Three stages left to right. Reactant: a nucleophile Nu⁻ with a lone pair on the left; a blue curved arrow runs from the lone pair to the carbon from the side opposite the bromine; a red curved arrow runs from the C–Br bond onto Br. The carbon carries R (up), R′ (wedge) and H (hash), all leaning toward the nucleophile. Transition state, in brackets with a double dagger: Nu and Br each joined to the carbon by a dashed partial bond and each carrying δ⁻, with R, R′ and H flat between them (trigonal bipyramidal). Product: Nu–C with R, R′ and H now leaning to the right, the umbrella flipped (Walden inversion), plus Br⁻. Notes: one concerted step, rate = k[RX][Nu]; the bond to Nu forms as the bond to Br breaks, with no intermediate and no rearrangement; the R/S label flips only if the incoming and outgoing groups hold the same priority rank.',
      caption: 'SN2 in one step: the nucleophile enters 180° from the leaving group, passes through a single five-coordinate transition state, and the carbon inverts like an umbrella.',
    },
    blocks: [
      '- Back-side attack, one transition state, no intermediate → **inversion** (Walden); rate $= k[RX][Nu]$',
    ],
  },
  {
    at: 'SN1: Ionize First, Then Capture',
    mode: 'lead',
    figure: {
      svg: sn1Svg,
      alt:
        'Left: a carbon bearing Br (up), R₁, R₂ (wedge) and R₃ (hash); a red curved arrow from the C–Br bond onto Br. An arrow labelled slow (RDS), minus Br⁻, leads to a planar carbocation C⁺ with R₁, R₂ and R₃ in one plane and an empty p orbital drawn as two lobes, above and below. A blue Nu⁻ approaches the top face and another the bottom face, each with a curved arrow toward the carbon. Two arrows lead to two products. Top: Nu on top with the groups arranged as in the start (retention). Bottom: Nu underneath, the mirror image (inversion). A dashed mirror line between them is labelled ≈ 50 : 50, racemic. Notes: rate = k[RX], because the nucleophile is not in the slow step; it needs a stable carbocation (3° > 2°) and a polar protic solvent; the carbocation may first rearrange by a hydride or methyl shift.',
      caption: 'SN1 in two steps: slow ionisation gives a flat carbocation, the nucleophile can arrive on either face, and the two mirror-image products form in about equal amounts.',
    },
    blocks: [
      '- Slow ionisation, then fast capture on **either face** of the planar C⁺ → racemisation; rate $= k[RX]$',
      '- Slight excess of inversion: the departing anion briefly shields its own face (ion pairing)',
    ],
  },
  {
    at: 'E2: One Concerted Step',
    mode: 'lead',
    figure: {
      svg: e2Svg,
      alt:
        'Left: two carbons joined by a bond, the β carbon carrying an H straight up and the α carbon carrying Br straight down, so H and Br sit anti to each other in the plane of the page; R₁ (wedge) and R₂ (hash) on the β carbon, R₃ (wedge) and R₄ (hash) on the α carbon. A base B⁻ at upper left. Three curved arrows: blue from the base lone pair to the H; blue from the C–H bond into the C–C bond; red from the C–Br bond onto Br. An arrow leads to the alkene C=C with R₁ and R₃ on top (cis), R₂ and R₄ underneath, plus B–H and Br⁻. Right: a Newman projection with H on the front carbon pointing up and Br on the back carbon pointing down — anti-periplanar, dihedral 180°; in a ring both must be axial (trans-diaxial). Notes: one concerted step, rate = k[RX][base]; the base takes the β-H, the C–H electrons become the π bond, Br leaves with its pair; stereospecific — the two wedged groups end up cis.',
      caption: 'E2 in one step: the base pulls the β-H that sits anti-periplanar (180°) to the leaving group, so the alkene’s geometry is fixed by that alignment.',
    },
    blocks: [
      '- Base, β-H, two carbons and LG act at once; H and LG must be **anti-periplanar** (180°)',
      '- Cyclohexanes: H and LG both **axial** (trans-diaxial) — no axial β-H, no E2 toward that carbon',
    ],
  },
  {
    at: 'E1: Ionize First, Then Deprotonate',
    mode: 'lead',
    figure: {
      svg: e1Svg,
      alt:
        'The lesson’s tert-butyl bromide solvolysis. Left: (CH₃)₃C–Br drawn as a skeletal structure, with a red curved arrow from the C–Br bond onto Br. An arrow labelled slow (RDS), minus Br⁻, leads to the tert-butyl carbocation (a central C⁺ with three methyls; one β-H drawn on a methyl). Two water molecules act on it. Blue: water attacks the C⁺ (a curved arrow from the oxygen lone pair to the cationic carbon), leading via the arrow labelled SN1 to tert-butanol after loss of H⁺. Red: water takes a β-H (one curved arrow from the oxygen lone pair to that H, a second from the C–H bond into the C–C⁺ bond), leading via the arrow labelled E1 to 2-methylpropene. Notes: same slow step as SN1, rate = k[RX]; one carbocation, two exits — capture (SN1) or loss of a β-H (E1); heat favours E1, gives the Zaitsev alkene, and the carbocation may rearrange first.',
      caption: 'SN1 and E1 share their slow step: one tert-butyl cation is either captured by water (tert-butanol) or loses a β-H to water (2-methylpropene).',
    },
    blocks: [
      '- E1 = SN1’s ionisation, then a weak base removes a β-H; the two always compete from the same C⁺',
    ],
  },
  {
    at: 'Regiochemistry of Elimination',
    mode: 'lead',
    figure: {
      svg: regioSvg,
      alt:
        'Top: 2-bromo-2-methylbutane drawn skeletally, with Br on C2. Its β-hydrogens sit on the CH₂ (red dot, crowded) and on the two CH₃ groups attached to C2 (blue dots, exposed). A blue arrow labelled t-BuO⁻ (bulky) leads left, under the exposed CH₃ side, to 2-methyl-1-butene, the Hofmann product, with the double bond in blue at the chain end: disubstituted, formed because the bulky base takes the easy H. A red arrow labelled EtO⁻ (small) leads right, under the CH₂ side, to 2-methyl-2-butene, the Zaitsev product, with the double bond in red between C2 and C3: trisubstituted, more stable. Footer: alkene stability tetra > tri > di > mono; trans (E) > cis (Z).',
      caption: 'The lesson’s example: ethoxide takes the crowded CH₂ hydrogen and gives the more substituted Zaitsev alkene; bulky tert-butoxide takes an exposed CH₃ hydrogen and gives the Hofmann alkene.',
    },
    blocks: [
      '- Small base (EtO⁻, MeO⁻) and E1 → **Zaitsev** (more substituted); bulky base (t-BuO⁻) → **Hofmann**',
    ],
  },
  {
    at: 'Reading Energy Diagrams',
    mode: 'lead',
    figure: {
      svg: energySvg,
      alt:
        'Two energy diagrams. Left, SN2 / E2: energy against reaction coordinate, a single hump from reactants to lower products, its peak labelled one TS ‡, an Ea arrow from reactants to the peak, and the note no valley means no intermediate. Right, SN1 / E1: two humps. The first peak, TS₁, is the highest point overall and is labelled in red as the rate-determining step, with Ea₁ marked from the reactants; a valley between the humps is marked with a blue dot as the carbocation intermediate; a lower second peak is TS₂; the curve then falls to the products. Note: by the Hammond postulate TS₁ is late, so it looks like the carbocation. Footer: humps = steps, valleys = intermediates, the highest transition state overall sets the rate.',
      caption: 'One hump means one concerted step; two humps with a valley mean a carbocation intermediate, and the highest peak overall is the rate-determining step (shapes illustrative).',
    },
    blocks: [
      '- Count humps = steps; valleys = intermediates; RDS = the **highest** TS overall, not the tallest single climb',
    ],
  },
  {
    at: 'Solvent Effects',
    mode: 'replace-table',
    figure: {
      svg: solventSvg,
      alt:
        'Two panels. Left, polar protic (H₂O, ROH): a blue Nu⁻ ringed by six O–H solvent molecules with their H ends pointing in and dashed hydrogen bonds to the anion — the hydrogen bonds cage the anion and the nucleophile is blunted. Right, polar aprotic (DMSO, DMF, acetone): Na⁺ ringed by four solvent molecules with their O ends facing it, while a separate Nu⁻ sits alone with no solvent shell — a naked, reactive nucleophile. Below: protic solvents favour SN1 / E1 because they stabilise the carbocation and the leaving anion; aprotic solvents favour SN2 because the anion is left free and reactive; nonpolar solvents such as hexane dissolve neither ion, so no ionic mechanism runs.',
      caption: 'Protic solvents hydrogen-bond the anion into a cage; aprotic solvents wrap the cation and leave the nucleophile bare.',
    },
    blocks: [
      '- **Polar protic** (water, alcohols, acids) → SN1/E1: stabilises the C⁺ and the leaving anion',
      '- **Polar aprotic** (DMSO, DMF, acetone, MeCN) → SN2: the anion is unsolvated and reactive',
      '- **Nonpolar** (hexane, benzene): poor at dissolving ions — neither ionic mechanism',
      '- Hook: **protic protects the cation**; **aprotic activates the anion**',
    ],
  },
  {
    at: 'The Three-Question Algorithm',
    mode: 'lead',
    figure: {
      svg: treeSvg,
      alt:
        'A decision tree. Question 1, what is the substrate, branches three ways. Methyl or 1° (no carbocation pathways): most reagents give SN2; a bulky base gives E2. 3° (no SN2): a strong base gives E2; weak nucleophiles or bases give SN1 + E1, with heat tipping it to E1. 2° (or allylic / benzylic 1°) goes to question 2, what is the reagent: strong nucleophile, weak base (I⁻, CN⁻, RS⁻, N₃⁻) → SN2; strong nucleophile and strong base (HO⁻, RO⁻) → SN2 / E2, with heat tipping it to E2; bulky base (t-BuO⁻, LDA) → E2 (Hofmann); weak nucleophile and weak base (H₂O, ROH) → SN1 / E1. Footer, question 3, solvent and heat: aprotic → SN2 / E2, protic → SN1 / E1, heat → elimination. Substitution outcomes are blue, elimination outcomes red.',
      caption: 'Ask in order: the substrate rules mechanisms out, the reagent picks among the rest, and solvent and heat tip the balance.',
    },
    blocks: [
      '- Substrate first (it eliminates half the answers), then reagent strength and bulk, then solvent and heat',
    ],
  },
]
