import type { DeckFigurePlacement } from './index'

/**
 * Stereochemistry (MCAT C/P) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (an isomer decision tree,
 * wedge/dash stereocentres with a mirror, Fischer crosses, an alkene pair, ee
 * bars, SN2 / SN1 outcomes) — no textbook, prep-company or AAMC figure was
 * copied. Only the lesson's own molecules and numbers appear: 2-bromobutane vs
 * 2-bromopropane, 2,3-dibromobutane, D-glyceraldehyde, 2-bromo-2-butene, the
 * 90:10 mixture and the carvone example (−30.5° of −61°), (S)-2-bromooctane +
 * cyanide, D-glucose and L-alanine.
 *
 * Stereocentres are drawn as a labelled C with condensed group labels: plain
 * bond = in the page, filled wedge = toward the viewer, hashed wedge = away.
 * Every printed R/S was checked from the drawn geometry (screen offsets + wedge
 * / dash sign → sign of the triple product of the priority 1–3 vectors relative
 * to priority 4), and agrees with the lesson's own calls (D-glyceraldehyde = R,
 * L-alanine = S, meso-2,3-dibromobutane = 2R,3S).
 *
 * Colours: R / Z / the configuration that is read directly BLUE (fig-accent),
 * S / E / "reverse it" RED (fig-accent-2), guides and asides grey (fig-muted).
 * Each coloured arrow's <marker> is defined inside the same coloured group;
 * marker ids are unique per figure (arr-ster-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

type Anchor = 'start' | 'middle' | 'end'

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: Anchor = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2.5, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="8 6"' : ''} stroke-linecap="round"/>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-end="url(#${marker})"/>`

/** A double-headed arrow (the marker is auto-start-reverse, so one marker serves both ends). */
const DARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 2.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-start="url(#${marker})" marker-end="url(#${marker})"/>`

/** A curved arrow (cubic path) ending in the given marker. */
const CARR = (d: string, marker: string, sw = 3) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" marker-end="url(#${marker})"/>`

/** A rounded box outline; `fillOpacity` > 0 tints it with the current colour. */
const BOX = (x: number, y: number, w: number, h: number, fillOpacity = 0, sw = 2.5) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="currentColor" fill-opacity="${fillOpacity}" stroke="currentColor" stroke-width="${sw}"/>`

/** A filled wedge (toward the viewer): narrow at (x1, y1), `w` half-width at (x2, y2). */
const WEDGE = (x1: number, y1: number, x2: number, y2: number, w = 8) => {
  const len = Math.hypot(x2 - x1, y2 - y1)
  const nx = (-(y2 - y1) / len) * w
  const ny = ((x2 - x1) / len) * w
  return `<polygon points="${x1},${y1} ${(x2 + nx).toFixed(1)},${(y2 + ny).toFixed(1)} ${(x2 - nx).toFixed(1)},${(y2 - ny).toFixed(1)}" fill="currentColor"/>`
}

/** A hashed wedge (away from the viewer): short parallel lines widening from (x1, y1) to (x2, y2). */
const HASH = (x1: number, y1: number, x2: number, y2: number, w = 8, n = 7) => {
  const len = Math.hypot(x2 - x1, y2 - y1)
  const ux = (x2 - x1) / len
  const uy = (y2 - y1) / len
  return Array.from({ length: n }, (_, i) => {
    const t = (i + 1) / n
    const px = x1 + (x2 - x1) * t
    const py = y1 + (y2 - y1) * t
    const h = w * t
    return `<line x1="${(px - uy * h).toFixed(1)}" y1="${(py + ux * h).toFixed(1)}" x2="${(px + uy * h).toFixed(1)}" y2="${(py - ux * h).toFixed(1)}" stroke="currentColor" stroke-width="2.5"/>`
  }).join('')
}

/** One substituent on a drawn stereocentre: offset of the bond end, bond kind, label, optional class and label nudge. */
interface Sub {
  dx: number
  dy: number
  kind: 'plain' | 'wedge' | 'dash'
  label: string
  cls?: string
  nx?: number
  ny?: number
}

/**
 * A stereocentre: "C" at (cx, cy) and four bonds. The bond starts 15 units out
 * (clear of the C), the label sits just past the bond end, anchored away from C.
 */
const CENTRE = (cx: number, cy: number, subs: Sub[], size = 22, centreLabel = 'C') => {
  const parts = subs.map((s) => {
    const len = Math.hypot(s.dx, s.dy)
    const ux = s.dx / len
    const uy = s.dy / len
    const x1 = cx + ux * 15
    const y1 = cy + uy * 15
    const x2 = cx + s.dx
    const y2 = cy + s.dy
    const bond = s.kind === 'wedge' ? WEDGE(x1, y1, x2, y2) : s.kind === 'dash' ? HASH(x1, y1, x2, y2) : LINE(x1, y1, x2, y2, 3)
    const anchor: Anchor = ux > 0.35 ? 'start' : ux < -0.35 ? 'end' : 'middle'
    const lx = x2 + ux * 10 + (s.nx ?? 0)
    const ly = y2 + uy * 12 + size * 0.36 + (uy < -0.6 ? -6 : uy > 0.6 ? 8 : 0) + (s.ny ?? 0)
    const label = T(Math.round(lx), Math.round(ly), size, s.label, anchor, '700')
    return s.cls ? `${bond}<g class="${s.cls}">${label}</g>` : `${bond}${label}`
  })
  return `${parts.join('')}${T(cx, cy + size * 0.36, size, centreLabel, 'middle', '700')}`
}

/** A Fischer cross at (cx, cy): arms of length `a`; labels top / right / bottom / left. */
const FISCHER = (cx: number, cy: number, top: string, right: string, bottom: string, left: string, a = 60, size = 21) =>
  `${LINE(cx - a, cy, cx + a, cy, 3)}${LINE(cx, cy - a, cx, cy + a, 3)}
${T(cx, cy - a - 10, size, top, 'middle', '700')}${T(cx, cy + a + size + 4, size, bottom, 'middle', '700')}
${T(cx + a + 8, cy + size * 0.36, size, right, 'start', '700')}${T(cx - a - 8, cy + size * 0.36, size, left, 'end', '700')}`

/** A small priority badge: a circle with the rank inside (a fig-bg disc underneath hides any line it sits on). */
const BADGE = (x: number, y: number, n: number) =>
  `<circle class="fig-bg" cx="${x}" cy="${y}" r="12"/><circle cx="${x}" cy="${y}" r="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>${T(x, y + 5, 15, String(n), 'middle', '700')}`

/* 1 — The isomer decision tree (replace-table, 560×440): three yes/no questions, four outcomes. */
const treeSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ster-tree')}</defs>
${BOX(120, 10, 320, 44, 0.08)}
${T(280, 39, 17, 'isomers: same molecular formula', 'middle', '700')}
${ARR(200, 54, 200, 78, 'arr-ster-tree', 2.5)}
${BOX(20, 82, 270, 46)}
${T(155, 111, 16, 'same connectivity?', 'middle', '700')}
${ARR(290, 105, 326, 105, 'arr-ster-tree', 2.5)}
${T(308, 96, 14, 'no', 'middle')}
${BOX(330, 76, 220, 60, 0.08)}
${T(440, 101, 16, 'constitutional isomers', 'middle', '700')}
<g class="fig-muted">${T(440, 123, 14, 'butane / isobutane', 'middle')}</g>
${ARR(155, 128, 155, 168, 'arr-ster-tree', 2.5)}
${T(165, 153, 14, 'yes: stereoisomers')}
${BOX(20, 172, 270, 60)}
${T(155, 197, 16, 'only bond rotation', 'middle', '700')}
${T(155, 219, 16, 'between them?', 'middle', '700')}
${ARR(290, 202, 326, 202, 'arr-ster-tree', 2.5)}
${T(308, 193, 14, 'yes', 'middle')}
<g class="fig-muted">
${BOX(330, 172, 220, 60, 0.08)}
${T(440, 197, 16, 'conformers', 'middle', '700')}
${T(440, 219, 14, 'the SAME compound', 'middle')}
</g>
${ARR(155, 232, 155, 272, 'arr-ster-tree', 2.5)}
${T(165, 257, 14, 'no: configurational')}
${BOX(20, 276, 270, 60)}
${T(155, 301, 16, 'non-superimposable', 'middle', '700')}
${T(155, 323, 16, 'mirror images?', 'middle', '700')}
${ARR(290, 306, 326, 306, 'arr-ster-tree', 2.5)}
${T(308, 297, 14, 'no', 'middle')}
<g class="fig-accent-2">
${BOX(330, 276, 220, 60, 0.1)}
${T(440, 301, 17, 'diastereomers', 'middle', '700')}
${T(440, 323, 14, 'cis/trans, epimers, meso', 'middle')}
</g>
${ARR(155, 336, 155, 368, 'arr-ster-tree', 2.5)}
${T(165, 357, 14, 'yes')}
<g class="fig-accent">
${BOX(20, 372, 270, 60, 0.1)}
${T(155, 397, 17, 'enantiomers', 'middle', '700')}
${T(155, 419, 14, 'every centre inverted (R ↔ S)', 'middle')}
</g>
<g class="fig-muted">${T(440, 400, 14, 'ask the questions in order:', 'middle')}${T(440, 420, 14, 'connectivity first', 'middle')}</g>
</svg>`

/* 2 — A chirality centre and its mirror image vs 2-bromopropane (lead, 1000×460).
   Bond ends: upper ±60,−50 (plain), lower ±42,+68 (wedge / dash). Left = R, right = S (checked). */
const chiralSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
${LINE(305, 70, 305, 340, 2, true)}
${T(305, 58, 18, 'mirror', 'middle')}
${LINE(620, 30, 620, 440, 1.5)}
</g>
${CENTRE(140, 200, [
  { dx: -60, dy: -50, kind: 'plain', label: 'Br' },
  { dx: 60, dy: -50, kind: 'plain', label: 'CH₂CH₃' },
  { dx: -42, dy: 68, kind: 'wedge', label: 'CH₃' },
  { dx: 42, dy: 68, kind: 'dash', label: 'H' },
])}
${CENTRE(470, 200, [
  { dx: 60, dy: -50, kind: 'plain', label: 'Br' },
  { dx: -60, dy: -50, kind: 'plain', label: 'CH₂CH₃' },
  { dx: 42, dy: 68, kind: 'wedge', label: 'CH₃' },
  { dx: -42, dy: 68, kind: 'dash', label: 'H' },
])}
<g class="fig-accent">${T(140, 335, 20, '(R)-2-bromobutane', 'middle', '700')}</g>
<g class="fig-accent-2">${T(470, 335, 20, '(S)-2-bromobutane', 'middle', '700')}</g>
${T(305, 380, 20, 'non-superimposable mirror images = enantiomers', 'middle', '700')}
<g class="fig-muted">${T(305, 412, 18, 'C2 holds H, Br, CH₃ and CH₂CH₃: four different groups', 'middle')}</g>
${T(810, 58, 20, '2-bromopropane', 'middle', '700')}
${CENTRE(810, 200, [
  { dx: -60, dy: -50, kind: 'plain', label: 'Br' },
  { dx: 60, dy: -50, kind: 'plain', label: 'CH₃', cls: 'fig-accent-2' },
  { dx: -42, dy: 68, kind: 'wedge', label: 'CH₃', cls: 'fig-accent-2' },
  { dx: 42, dy: 68, kind: 'dash', label: 'H' },
])}
<g class="fig-accent-2">
${T(810, 335, 20, 'two identical CH₃ groups', 'middle', '700')}
${T(810, 365, 20, '→ not a stereocentre', 'middle', '700')}
</g>
<g class="fig-muted">${T(810, 412, 17, 'compare WHOLE groups, not first atoms', 'middle')}</g>
</svg>`

/* 3 — 2,3-dibromobutane as Fischer projections: 2² = 4 combinations, 3 stereoisomers (lead, 1000×460).
   C2 at y 165, C3 at y 245 on one vertical line; Br left at C2 → R, Br right at C3 → R (checked). */
const dibromo = (cx: number, c2Br: 'left' | 'right', c3Br: 'left' | 'right') => {
  const row = (y: number, br: 'left' | 'right') =>
    `${LINE(cx - 55, y, cx + 55, y, 3)}${T(cx + 63, y + 7, 20, br === 'right' ? 'Br' : 'H', 'start', '700')}${T(cx - 63, y + 7, 20, br === 'left' ? 'Br' : 'H', 'end', '700')}`
  return `${LINE(cx, 115, cx, 295, 3)}${T(cx, 104, 20, 'CH₃', 'middle', '700')}${T(cx, 322, 20, 'CH₃', 'middle', '700')}
${row(165, c2Br)}${row(245, c3Br)}`
}
const mesoSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ster-meso')}</defs>
${T(500, 40, 22, '2,3-dibromobutane: 2² = 4 combinations, only 3 stereoisomers', 'middle', '700')}
${dibromo(120, 'left', 'right')}
${dibromo(340, 'right', 'left')}
${dibromo(620, 'left', 'left')}
<g class="fig-muted">${dibromo(860, 'right', 'right')}</g>
<g class="fig-accent">
${T(120, 362, 20, '(2R,3R)', 'middle', '700')}
${T(340, 362, 20, '(2S,3S)', 'middle', '700')}
${LINE(60, 382, 400, 382, 2.5)}${LINE(60, 382, 60, 372, 2.5)}${LINE(400, 382, 400, 372, 2.5)}
${T(230, 410, 19, 'enantiomers: mirror images', 'middle', '700')}
</g>
<g class="fig-accent-2">
${LINE(545, 205, 695, 205, 2.5, true)}
${T(620, 362, 20, 'meso (2R,3S)', 'middle', '700')}
${T(620, 410, 19, 'mirror plane inside: achiral', 'middle', '700')}
</g>
<g class="fig-accent-2"><defs>${ARROW('arr-ster-meso-red')}</defs>
${DARR(430, 205, 520, 205, 'arr-ster-meso-red')}
${T(475, 190, 17, 'diastereomers', 'middle')}
</g>
<g class="fig-muted">
${T(740, 213, 30, '=', 'middle', '700')}
${T(860, 362, 20, '(2S,3R)', 'middle', '700')}
${T(860, 410, 17, 'turn 180°: the same meso', 'middle')}
</g>
</svg>`

/* 4 — Assigning R/S: rank, put 4 at the back, trace; reverse when 4 points toward you (lead, 1000×460).
   Left molecule = (R)-2-bromobutane, H dashed; right = (S)-2-bromobutane with H on the wedge (both checked). */
/** An arc arrow around (cx, cy) at radius r from screen angle a1 to a2 (degrees, clockwise when a2 > a1). */
const ARC = (cx: number, cy: number, r: number, a1: number, a2: number, marker: string) => {
  const p = (a: number) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)].map((v) => v.toFixed(1)).join(' ')
  const mid = (a1 + a2) / 2
  const sweep = a2 > a1 ? 1 : 0
  return `<path d="M${p(a1)} A${r} ${r} 0 0 ${sweep} ${p(mid)} A${r} ${r} 0 0 ${sweep} ${p(a2)}" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#${marker})"/>`
}
/** Badge positions on a circle of radius r around (cx, cy) at screen angle a (degrees). */
const ON = (cx: number, cy: number, r: number, a: number): [number, number] => [
  Math.round(cx + r * Math.cos((a * Math.PI) / 180)),
  Math.round(cy + r * Math.sin((a * Math.PI) / 180)),
]
/** One R/S panel: the 2-bromobutane drawing, badges 1–3 on the trace circle, badge 4 by the H. */
const rsPanel = (cx: number, hKind: 'wedge' | 'dash', marker: string) => {
  const meKind = hKind === 'wedge' ? 'dash' : 'wedge'
  const cy = 215
  const [b1, b2, b3] = [220, 320, 482].map((a) => ON(cx, cy, 148, a))
  return `${CENTRE(cx, cy, [
    { dx: -45, dy: -38, kind: 'plain', label: 'Br' },
    { dx: 45, dy: -38, kind: 'plain', label: 'CH₂CH₃' },
    { dx: -32, dy: 52, kind: meKind, label: 'CH₃' },
    { dx: 32, dy: 52, kind: hKind, label: 'H' },
  ], 20)}
<g class="${hKind === 'dash' ? 'fig-accent' : 'fig-accent-2'}"><defs>${ARROW(marker)}</defs>
${ARC(cx, cy, 148, 230, 470, marker)}
${BADGE(b1[0], b1[1], 1)}${BADGE(b2[0], b2[1], 2)}${BADGE(b3[0], b3[1], 3)}
</g>
<g class="fig-muted">${BADGE(cx + 58, cy + 100, 4)}</g>`
}
const rsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(345, 30, 345, 440, 1.5)}${LINE(690, 30, 690, 440, 1.5)}</g>
${T(172, 40, 20, 'H on the dash (away)', 'middle', '700')}
${rsPanel(172, 'dash', 'arr-ster-rs-blue')}
<g class="fig-accent">
${T(172, 408, 20, '1 → 2 → 3 clockwise → R', 'middle', '700')}
</g>
${T(517, 40, 20, 'H on a wedge (toward you)', 'middle', '700')}
${rsPanel(517, 'wedge', 'arr-ster-rs-red')}
<g class="fig-accent-2">
${T(517, 408, 20, 'looks clockwise: reverse → S', 'middle', '700')}
</g>
${T(715, 80, 20, '1  rank by atomic number', 'start', '700')}
<g class="fig-muted">${T(745, 108, 18, 'Br > CH₂CH₃ > CH₃ > H')}${T(745, 134, 17, 'tie? compare the next atoms')}</g>
${T(715, 184, 20, '2  put 4 (H) at the back', 'start', '700')}
${T(715, 240, 20, '3  trace 1 → 2 → 3', 'start', '700')}
<g class="fig-accent">${T(745, 270, 18, 'clockwise = R', 'start', '700')}</g>
<g class="fig-accent-2">${T(745, 298, 18, 'counterclockwise = S', 'start', '700')}</g>
<g class="fig-accent-2">${T(715, 350, 19, 'H toward you?', 'start', '700')}${T(715, 378, 19, 'trace, then REVERSE', 'start', '700')}</g>
<g class="fig-muted">${T(715, 420, 16, 'R/S says nothing about (+)/(−)')}</g>
</svg>`

/* 5 — Fischer projection of D-glyceraldehyde and its 3-D meaning; the legal moves (lead, 1000×460).
   OH(1) right, CHO(2) top, CH₂OH(3) bottom, H(4) left → traced counterclockwise, H horizontal → reverse → R (checked). */
const fischerSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(160, 44, 20, 'Fischer projection', 'middle', '700')}
${FISCHER(160, 205, 'CHO', 'OH', 'CH₂OH', 'H', 75)}
<g class="fig-accent-2">${BADGE(255, 178, 1)}${BADGE(208, 108, 2)}${BADGE(222, 306, 3)}</g>
<g class="fig-muted">${BADGE(98, 178, 4)}</g>
${T(310, 214, 30, '⇔', 'middle', '700')}
${T(470, 44, 20, 'what it means in 3-D', 'middle', '700')}
${CENTRE(470, 205, [
  { dx: -78, dy: 0, kind: 'wedge', label: 'H' },
  { dx: 78, dy: 0, kind: 'wedge', label: 'OH' },
  { dx: 0, dy: -75, kind: 'dash', label: 'CHO' },
  { dx: 0, dy: 75, kind: 'dash', label: 'CH₂OH' },
], 21)}
<g class="fig-accent">${T(422, 192, 15, 'toward you', 'middle')}${T(520, 192, 15, 'toward you', 'middle')}</g>
<g class="fig-muted">${T(484, 160, 15, 'away')}${T(484, 262, 15, 'away')}</g>
${T(315, 360, 19, 'OH → CHO → CH₂OH is counterclockwise,', 'middle')}
${T(315, 388, 19, 'but H is horizontal (toward you): reverse', 'middle')}
<g class="fig-accent">${T(315, 424, 21, 'D-glyceraldehyde = (R)', 'middle', '700')}</g>
<g class="fig-muted">${LINE(650, 30, 650, 440, 1.5)}</g>
${T(675, 70, 20, 'moves on a Fischer:', 'start', '700')}
<g class="fig-accent-2">
${T(675, 120, 19, 'swap any two groups', 'start', '700')}
${T(695, 146, 17, '→ that centre is inverted')}
</g>
<g class="fig-accent">
${T(675, 196, 19, 'two swaps', 'start', '700')}
${T(695, 222, 17, '→ back to the original')}
${T(675, 272, 19, 'turn 180° in the plane', 'start', '700')}
${T(695, 298, 17, '→ the same molecule')}
</g>
<g class="fig-accent-2">
${T(675, 348, 19, 'turn 90°', 'start', '700')}
${T(695, 374, 17, '→ the enantiomer (illegal move)')}
</g>
<g class="fig-muted">${T(675, 420, 16, 'most oxidised carbon goes on top')}</g>
</svg>`

/* 6 — E/Z on 2-bromo-2-butene: "cis-looking" methyls are E; the Z isomer (lead, 1000×460).
   C2 (left) carries Br above, CH₃ below; C3 (right) carries CH₃ and H. Winners: Br on C2, CH₃ on C3. */
const alkene = (cx: number, cy: number, c3Up: string, c3Down: string) => {
  const c2 = cx - 50
  const c3 = cx + 50
  const win = (label: string) => (label === 'CH₃' ? 'fig-accent' : 'fig-muted')
  return `${LINE(c2, cy - 5, c3, cy - 5, 3)}${LINE(c2 + 8, cy + 5, c3 - 8, cy + 5, 3)}
${LINE(c2, cy - 5, c2 - 45, cy - 80, 3)}${LINE(c2, cy - 5, c2 - 45, cy + 70, 3)}
${LINE(c3, cy - 5, c3 + 45, cy - 80, 3)}${LINE(c3, cy - 5, c3 + 45, cy + 70, 3)}
<g class="fig-accent">${T(c2 - 50, cy - 86, 22, 'Br', 'end', '700')}</g>
<g class="fig-muted">${T(c2 - 50, cy + 92, 22, 'CH₃', 'end', '700')}${T(c2 + 6, cy + 32, 15, 'C2')}${T(c3 - 6, cy + 32, 15, 'C3', 'end')}</g>
<g class="${win(c3Up)}">${T(c3 + 50, cy - 86, 22, c3Up, 'start', '700')}</g>
<g class="${win(c3Down)}">${T(c3 + 50, cy + 92, 22, c3Down, 'start', '700')}</g>`
}
const ezSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent-2">${T(170, 44, 20, 'methyls look “cis”…', 'middle', '700')}</g>
${alkene(170, 205, 'H', 'CH₃')}
<g class="fig-accent-2">
${T(170, 350, 21, '(E)-2-bromo-2-butene', 'middle', '700')}
${T(170, 380, 18, 'Br and C3’s CH₃ on opposite sides', 'middle')}
</g>
<g class="fig-muted">${LINE(345, 30, 345, 440, 1.5)}</g>
<g class="fig-accent">${T(515, 44, 20, 'winners on the same side', 'middle', '700')}</g>
${alkene(515, 205, 'CH₃', 'H')}
<g class="fig-accent">
${T(515, 350, 21, '(Z)-2-bromo-2-butene', 'middle', '700')}
${T(515, 380, 18, 'Br and C3’s CH₃ together', 'middle')}
</g>
<g class="fig-muted">${LINE(690, 30, 690, 440, 1.5)}</g>
${T(715, 70, 20, 'rank each carbon alone:', 'start', '700')}
${T(715, 110, 19, 'C2:  Br > CH₃  (35 > 6)')}
${T(715, 142, 19, 'C3:  CH₃ > H')}
<g class="fig-accent">${T(715, 200, 19, 'winners same side', 'start', '700')}${T(735, 226, 18, '→ Z (zusammen)')}</g>
<g class="fig-accent-2">${T(715, 276, 19, 'winners opposite', 'start', '700')}${T(735, 302, 18, '→ E (entgegen)')}</g>
${T(715, 360, 19, 'cis ≠ Z:', 'start', '700')}
${T(715, 388, 18, 'priority decides, not size')}
<g class="fig-muted">${T(715, 424, 16, 'blue = the higher-priority group')}</g>
</svg>`

/* 7 — Enantiomeric excess as bars: the lesson's 90:10 mixture and the carvone example (lead, 1000×460).
   Bars 80 → 680 (6 px per %): excess solid blue, the paired part of the major pale blue, the minor red. */
const BX = (p: number) => 80 + 6 * p
const eeBar = (y: number, major: number, title: string, majorName: string, minorName: string, exLabel: string, racLabel: string) => {
  const minor = 100 - major
  const ex = major - minor
  const onBar = (x: number, text: string) => `<text class="fig-bg" x="${x}" y="${y + 30}" font-size="17" font-weight="700" text-anchor="middle">${text}</text>`
  return `${T(80, y - 18, 20, title, 'start', '700')}
<g class="fig-accent">
<rect x="${BX(0)}" y="${y}" width="${6 * ex}" height="46" rx="6" fill="currentColor" fill-opacity="0.85"/>
<rect x="${BX(ex)}" y="${y}" width="${6 * minor}" height="46" fill="currentColor" fill-opacity="0.3"/>
${onBar(BX(ex / 2), `${ex}% ${majorName} excess`)}
${T(BX(ex + minor / 2), y + 30, 17, minor < 20 ? `${minor}%` : `${minor}% ${majorName}`, 'middle', '700')}
${LINE(BX(0), y + 62, BX(ex), y + 62, 2.5)}${T(BX(ex / 2), y + 88, 18, exLabel, 'middle', '700')}
</g>
<g class="fig-accent-2"><rect x="${BX(major)}" y="${y}" width="${6 * minor}" height="46" rx="6" fill="currentColor" fill-opacity="0.85"/></g>
${onBar(BX(major + minor / 2), minor < 20 ? `${minor}%` : `${minor}% ${minorName}`)}
<g class="fig-muted">${LINE(BX(ex) + 4, y + 62, BX(100), y + 62, 2.5)}${T(BX(ex + minor), y + 88, 16, racLabel, 'middle')}</g>`
}
const eeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${eeBar(70, 90, '90 : 10 mixture', 'major', 'minor', 'ee = 90 − 10 = 80%', '10 + 10 cancel')}
${eeBar(290, 75, 'carvone: −30.5° vs pure (R) −61°', 'R', 'S', 'ee = 30.5 / 61 = 50%', '25 R + 25 S cancel')}
<g class="fig-muted">${LINE(720, 30, 720, 440, 1.5)}</g>
${T(745, 80, 20, 'ee = %major − %minor', 'start', '700')}
${T(745, 130, 20, 'ee = [α]mix / [α]pure', 'start', '700')}
<g class="fig-muted">${T(765, 156, 17, '× 100%')}</g>
${T(745, 210, 20, '%major = (100 + ee) / 2', 'start', '700')}
<g class="fig-accent">${T(765, 238, 18, 'carvone: 75% R, 25% S')}</g>
${T(745, 300, 19, 'only the excess', 'start', '700')}
${T(745, 326, 19, 'rotates the light', 'start', '700')}
<g class="fig-muted">${T(745, 380, 17, 'racemic (50 : 50): ee = 0,')}${T(745, 404, 17, 'rotation = 0')}</g>
</svg>`

/* 8 — Reaction stereochemistry: SN2 inverts (S → R), SN1 racemizes (lead, 1000×460).
   Substrate (S)-2-bromooctane: Br right, C₆H₁₃ up, CH₃ wedge, H dash; product mirrored in x → (R) (both checked). */
const reactSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ster-rx')}</defs>
${T(275, 40, 21, 'SN2: backside attack → inversion', 'middle', '700')}
<g class="fig-accent"><defs>${ARROW('arr-ster-rx-blue')}</defs>
${T(6, 208, 21, 'N≡C:⁻', 'start', '700')}
${CARR('M64 196 C 82 170, 105 172, 118 190', 'arr-ster-rx-blue', 2.5)}
${CARR('M180 192 C 192 160, 212 158, 220 178', 'arr-ster-rx-blue', 2.5)}
</g>
${CENTRE(150, 200, [
  { dx: 70, dy: 0, kind: 'plain', label: 'Br' },
  { dx: -25, dy: -72, kind: 'plain', label: 'C₆H₁₃' },
  { dx: -62, dy: 35, kind: 'wedge', label: 'CH₃' },
  { dx: -10, dy: 72, kind: 'dash', label: 'H' },
], 20)}
${ARR(264, 200, 292, 200, 'arr-ster-rx', 3)}
${CENTRE(400, 200, [
  { dx: -60, dy: 0, kind: 'plain', label: 'NC' },
  { dx: 25, dy: -72, kind: 'plain', label: 'C₆H₁₃' },
  { dx: 62, dy: 35, kind: 'wedge', label: 'CH₃' },
  { dx: 10, dy: 72, kind: 'dash', label: 'H' },
], 20)}
<g class="fig-accent-2">${T(150, 338, 18, '(S)-2-bromooctane', 'middle', '700')}</g>
<g class="fig-accent">${T(400, 338, 18, '(R)-2-methyloctanenitrile', 'middle', '700')}</g>
${T(275, 384, 19, 'the umbrella flips: one enantiomer in,', 'middle')}
${T(275, 410, 19, 'one out — optically active', 'middle', '700')}
<g class="fig-muted">${LINE(560, 30, 560, 440, 1.5)}</g>
${T(780, 40, 21, 'SN1: planar carbocation → racemic', 'middle', '700')}
<g class="fig-muted">
<ellipse cx="780" cy="152" rx="15" ry="34" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<ellipse cx="780" cy="248" rx="15" ry="34" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
${T(800, 128, 15, 'empty p orbital')}
</g>
${CENTRE(780, 200, [
  { dx: -80, dy: 0, kind: 'plain', label: 'CH₃' },
  { dx: 62, dy: -24, kind: 'dash', label: 'C₆H₁₃' },
  { dx: 62, dy: 24, kind: 'wedge', label: 'H' },
], 20, 'C⁺')}
<g class="fig-accent"><defs>${ARROW('arr-ster-rx-top')}</defs>
${ARR(722, 96, 762, 120, 'arr-ster-rx-top', 3)}
${T(714, 96, 18, 'Nu: top face', 'end', '700')}
</g>
<g class="fig-accent-2"><defs>${ARROW('arr-ster-rx-bot')}</defs>
${ARR(722, 306, 762, 282, 'arr-ster-rx-bot', 3)}
${T(714, 314, 18, 'Nu: bottom face', 'end', '700')}
</g>
${T(780, 368, 19, 'both faces equally → 50 : 50 R + S', 'middle', '700')}
<g class="fig-muted">${T(780, 400, 17, 'racemic: no net rotation', 'middle')}${T(780, 426, 17, 'a planar radical does the same', 'middle')}</g>
</svg>`

/* 9 — The D/L system: read the bottom-most stereocentre of the Fischer projection (lead, 1000×460).
   D-glucose: OH right, left, right, right at C2–C5; L-glucose mirrors every centre; L-alanine = (S) (checked). */
const sugar = (cx: number, sides: ('right' | 'left')[], numbers: boolean) => {
  const rows = sides
    .map((side, i) => {
      const y = 125 + 55 * i
      const last = i === sides.length - 1
      const cls = last ? (sides[i] === 'right' ? 'fig-accent' : 'fig-accent-2') : ''
      const labels = `${T(cx + 58, y + 7, 19, side === 'right' ? 'OH' : 'H', 'start', '700')}${T(cx - 58, y + 7, 19, side === 'left' ? 'HO' : 'H', 'end', '700')}`
      return `${LINE(cx - 50, y, cx + 50, y, 3)}${cls ? `<g class="${cls}">${labels}</g>` : labels}${numbers ? `<g class="fig-muted">${T(cx - 112, y + 6, 15, `C${i + 2}`, 'end')}</g>` : ''}`
    })
    .join('')
  return `${LINE(cx, 82, cx, 338, 3)}${T(cx, 72, 19, 'CHO', 'middle', '700')}${T(cx, 362, 19, 'CH₂OH', 'middle', '700')}${rows}`
}
const dlSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${sugar(175, ['right', 'left', 'right', 'right'], true)}
${sugar(410, ['left', 'right', 'left', 'left'], false)}
<g class="fig-accent">
${BOX(75, 268, 200, 44, 0.08, 2)}
${T(175, 400, 20, 'D-glucose', 'middle', '700')}
${T(175, 428, 17, 'C5 OH on the right → D', 'middle')}
</g>
<g class="fig-accent-2">
${BOX(310, 268, 200, 44, 0.08, 2)}
${T(410, 400, 20, 'L-glucose', 'middle', '700')}
${T(410, 428, 17, 'every centre mirrored', 'middle')}
</g>
<g class="fig-muted">${T(292, 36, 17, 'read the stereocentre farthest from C=O', 'middle')}${LINE(565, 30, 565, 440, 1.5)}</g>
${FISCHER(700, 210, 'COOH', 'H', 'CH₃', 'H₂N', 60, 20)}
<g class="fig-accent">
${T(700, 345, 20, 'L-alanine = (S)', 'middle', '700')}
${T(700, 373, 17, 'NH₂ on the left → L', 'middle')}
</g>
<g class="fig-muted">${T(695, 410, 15, 'NH₂ → COOH → CH₃ clockwise,', 'middle')}${T(695, 432, 15, 'H horizontal: reverse → S', 'middle')}</g>
${T(825, 90, 19, 'biology:', 'start', '700')}
<g class="fig-accent">${T(825, 124, 18, 'sugars are D')}${T(825, 154, 18, 'amino acids L')}</g>
<g class="fig-accent-2">${T(825, 214, 18, 'L-Cys is (R):', 'start', '700')}${T(825, 240, 16, 'CH₂SH outranks')}${T(825, 262, 16, 'COOH (S > O)')}</g>
<g class="fig-muted">${T(825, 316, 16, 'D/L, like R/S,')}${T(825, 338, 16, 'never predicts')}${T(825, 360, 16, '(+) or (−)')}</g>
</svg>`

export const mcatStereochemistryFigures: DeckFigurePlacement[] = [
  {
    at: 'The Isomer Tree',
    mode: 'replace-table',
    figure: {
      svg: treeSvg,
      alt:
        'A decision tree for two structures with the same molecular formula (isomers). Question 1: same connectivity? No → constitutional isomers (butane / isobutane). Yes → stereoisomers, and question 2: only bond rotation between them? Yes → conformers, the same compound. No → configurational stereoisomers, and question 3: non-superimposable mirror images? Yes → enantiomers (every centre inverted, R ↔ S). No → diastereomers (cis/trans pairs, epimers, meso vs its chiral partners). Ask the questions in order, connectivity first.',
      caption: 'The isomer tree: connectivity first, then rotation, then the mirror test — enantiomers if they are mirror images, diastereomers if not.',
    },
    blocks: [
      '- Different connectivity → **constitutional** isomers (glucose / fructose)',
      '- Only rotation apart → **conformers**: the same compound',
      '- Mirror images → **enantiomers**; any other stereoisomer → **diastereomers**',
    ],
  },
  {
    at: 'Chirality Centers',
    mode: 'lead',
    figure: {
      svg: chiralSvg,
      alt:
        'Left: (R)-2-bromobutane and (S)-2-bromobutane drawn on either side of a dashed vertical mirror. Each central C carries Br and CH₂CH₃ on plain bonds in the page, CH₃ on a filled wedge (toward the viewer) and H on a hashed wedge (away), arranged as exact mirror images; they cannot be superimposed, so they are enantiomers. C2 holds H, Br, CH₃ and CH₂CH₃ — four different groups. Right: 2-bromopropane drawn the same way, but two of its groups are identical CH₃ groups (highlighted), so its C2 is not a stereocentre. Compare whole groups, not just first atoms.',
      caption: 'Four different groups make a chirality centre and a non-superimposable mirror image; 2-bromopropane’s two methyls make its mirror image the same molecule.',
    },
    blocks: [
      '- Chirality centre = carbon with **four different groups**: 2-bromobutane yes, 2-bromopropane no',
      '- Wedge = toward you, hashes = away; one stereocentre → the molecule is always chiral',
    ],
  },
  {
    at: 'Meso Compounds',
    mode: 'lead',
    figure: {
      svg: mesoSvg,
      alt:
        'Four Fischer projections of 2,3-dibromobutane (CH₃ top and bottom, C2 and C3 on the vertical line, Br and H on the horizontal arms). (2R,3R): Br left at C2, right at C3. (2S,3S): Br right at C2, left at C3 — its mirror image, so the two are bracketed as enantiomers. Meso (2R,3S): Br left at both C2 and C3, with a dashed horizontal mirror plane between C2 and C3, so it is achiral. A double arrow labels the meso form a diastereomer of the chiral pair. The fourth drawing, (2S,3R), has Br right at both centres and is marked equal to the meso form: turned 180° in the plane it is the same compound. So 2² = 4 combinations give only 3 stereoisomers.',
      caption: '2,3-dibromobutane: (R,R) and (S,S) are enantiomers; (R,S) and (S,R) are one meso compound with an internal mirror plane — 3 stereoisomers, not 2² = 4.',
    },
    blocks: [
      '- Meso: stereocentres but an **internal mirror plane** → achiral, rotation $0$',
      '- Needs both centres to carry the same substituent set; the count drops below $2^n$',
    ],
  },
  {
    at: 'Assigning R/S',
    mode: 'lead',
    figure: {
      svg: rsSvg,
      alt:
        'Two drawings of 2-bromobutane with priorities numbered: Br 1, CH₂CH₃ 2, CH₃ 3, H 4. Left: H is on the hashed wedge, pointing away; a blue curved arrow traces 1 → 2 → 3 clockwise, so the centre is R. Right: the other enantiomer drawn with H on the filled wedge, toward the viewer, and CH₃ on the hashes; the same 1 → 2 → 3 path looks clockwise, but because H points toward you the answer is reversed: S. Steps listed at the right: 1, rank by atomic number (Br > CH₂CH₃ > CH₃ > H; on a tie go out to the first point of difference); 2, put group 4 (H) at the back; 3, trace 1 → 2 → 3, clockwise = R, counterclockwise = S; if H points toward you, trace and then reverse. R/S says nothing about (+)/(−).',
      caption: 'R/S in three steps — rank, put H at the back, trace — and when H is on a wedge, read the direction and reverse it.',
    },
    blocks: [
      '- Rank 1–4 by CIP, put 4 at the back, trace 1 → 2 → 3: clockwise **R**, counterclockwise **S**',
      '- Lowest priority toward you (on a wedge)? Trace as drawn, then **reverse**',
    ],
  },
  {
    at: 'Fischer Projections',
    mode: 'lead',
    figure: {
      svg: fischerSvg,
      alt:
        'Left: a Fischer projection of D-glyceraldehyde — CHO on top, CH₂OH at the bottom, H on the left arm, OH on the right arm — with priorities OH 1, CHO 2, CH₂OH 3, H 4. A double arrow leads to the same molecule in 3-D: the horizontal bonds to H and OH are filled wedges (toward you) and the vertical bonds to CHO and CH₂OH are hashed (away). Text: OH → CHO → CH₂OH is counterclockwise, but H is on a horizontal bond (toward you), so reverse: D-glyceraldehyde = (R). Right column, moves on a Fischer: swap any two groups → that centre is inverted; two swaps → back to the original; turn 180° in the plane → the same molecule; turn 90° → the enantiomer (illegal move); the most oxidised carbon goes on top.',
      caption: 'A Fischer cross is a shorthand for wedges left and right, dashes up and down — so D-glyceraldehyde, which traces counterclockwise with H horizontal, is (R).',
    },
    blocks: [
      '- Horizontal = toward you, vertical = away; H on a horizontal bond → reverse the trace',
      '- One swap inverts, two swaps restore; 180° keeps the molecule, 90° gives the enantiomer',
    ],
  },
  {
    at: 'E/Z Alkene Nomenclature',
    mode: 'lead',
    figure: {
      svg: ezSvg,
      alt:
        'Two isomers of 2-bromo-2-butene drawn as a C2=C3 double bond. On C2 in both: Br above, CH₃ below. Left isomer: on C3, H above and CH₃ below, so the two methyls are on the same side and look “cis”, but the higher-priority groups — Br on C2 and CH₃ on C3 — are on opposite sides: (E)-2-bromo-2-butene. Right isomer: on C3, CH₃ above and H below, so Br and C3’s CH₃ are together: (Z)-2-bromo-2-butene. Right column: rank each carbon alone — C2: Br > CH₃ (35 > 6); C3: CH₃ > H; winners on the same side → Z (zusammen); winners opposite → E (entgegen); cis is not Z — priority decides, not size.',
      caption: '2-bromo-2-butene: rank each alkene carbon on its own; the isomer whose methyls look cis is E, because bromine, not methyl, wins on C2.',
    },
    blocks: [
      '- Rank each sp² carbon’s two groups separately; winners together → **Z**, opposite → **E**',
      '- cis/trans needs an H on each carbon; E/Z always works — and cis is not always Z',
    ],
  },
  {
    at: 'Enantiomeric Excess (ee)',
    mode: 'lead',
    figure: {
      svg: eeSvg,
      alt:
        'Two horizontal bars, each 100% of a sample. Top, a 90 : 10 mixture: a solid blue segment, the major-enantiomer excess of 80%; a pale blue 10% of the major; and a red 10% minor. The pale 10% major and the 10% minor are bracketed as racemic — they cancel; the solid 80% is bracketed ee = 90 − 10 = 80%. Bottom, carvone, observed −30.5° against pure (R) −61°: a solid blue 50% R excess, a pale 25% R and a red 25% S; 25 R + 25 S cancel, and ee = 30.5 / 61 = 50%. Right column: ee = %major − %minor; ee = [α]mix / [α]pure × 100%; %major = (100 + ee) / 2, so carvone is 75% R; only the excess rotates the light; racemic (50 : 50) has ee = 0 and rotation 0.',
      caption: 'Enantiomeric excess as bars: the minor enantiomer cancels an equal amount of the major, and only the leftover excess shows up in the polarimeter.',
    },
    blocks: [
      '- $ee = \\%\\text{major} - \\%\\text{minor} = [\\alpha]_{mix}/[\\alpha]_{pure} \\times 100\\%$',
      '- Carvone: $30.5/61 = 50\\%$ ee → $\\%R = (100 + 50)/2 = 75\\%$, $\\%S = 25\\%$',
    ],
  },
  {
    at: 'Stereochemistry of Reactions',
    mode: 'lead',
    figure: {
      svg: reactSvg,
      alt:
        'Left, SN2: cyanide (N≡C:⁻) attacks (S)-2-bromooctane from the side opposite the bromine — curved arrows run from the cyanide to the carbon and from the C–Br bond to Br. The substrate carbon has Br on the right, C₆H₁₃ up, CH₃ on a wedge and H on hashes, all three leaning toward the incoming nucleophile; in the product, (R)-2-methyloctanenitrile, NC is on the left and the three groups lean the other way — the umbrella has flipped. One enantiomer in, one out: optically active. Right, SN1: a planar carbocation C⁺ (CH₃, C₆H₁₃, H in one plane) with an empty p orbital drawn as two lobes above and below; the nucleophile attacks the top face or the bottom face equally, giving 50 : 50 R + S — racemic, no net rotation; a planar radical does the same.',
      caption: 'SN2 is one backside step, so (S)-2-bromooctane gives (R) product; SN1 goes through a flat carbocation that is attacked from either face, so the product is racemic.',
    },
    blocks: [
      '- SN2: concerted backside attack → **inversion**; one enantiomer in, one out',
      '- SN1 or a radical: planar intermediate, both faces attacked → **racemic**',
    ],
  },
  {
    at: 'The D/L System',
    mode: 'lead',
    figure: {
      svg: dlSvg,
      alt:
        'Left: Fischer projections of D-glucose and L-glucose, CHO on top and CH₂OH at the bottom with four stereocentres C2 to C5. D-glucose has OH on the right, left, right, right at C2, C3, C4, C5; its bottom-most stereocentre C5, highlighted, has OH on the right → D. L-glucose has every centre mirrored (left, right, left, left), so its C5 OH is on the left. Middle: a Fischer projection of L-alanine — COOH on top, CH₃ at the bottom, H₂N on the left, H on the right; NH₂ on the left → L; NH₂ → COOH → CH₃ traces clockwise, but H is horizontal, so reverse → (S). Right: biology uses D sugars and L amino acids; L-cysteine is (R) because CH₂SH outranks COOH (S > O); D/L, like R/S, never predicts (+) or (−).',
      caption: 'D or L is read at the stereocentre farthest from the carbonyl: OH right is D (D-glucose), and an L-amino acid has NH₂ on the left — L-alanine is (S).',
    },
    blocks: [
      '- Bottom-most stereocentre: OH **right = D**, left = L; the enantiomer flips every centre',
      '- L-amino acids are (S) — except cysteine (R), where CH₂SH outranks COOH',
    ],
  },
]
