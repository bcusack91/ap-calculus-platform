import type { DeckFigurePlacement } from './index'

/**
 * Magnetism & Electromagnetic Induction (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a bar magnet's closed
 * loops against an electric dipole's start-and-end lines, the circles around
 * a straight wire with the end-on view and a solenoid, the three switches of
 * F = qvB sinθ with the right-hand rule on a field drawn into the page, a
 * charge circling in a field drawn out of the page with the electron/proton
 * contrast, a wire perpendicular / angled / parallel to a field, two parallel
 * wires attracting and repelling, the velocity selector feeding a mass
 * spectrometer, Faraday's three knobs, and Lenz's law as a magnet pushed
 * toward and pulled from a loop) — no textbook, prep-company or AAMC figure
 * was copied. Nothing is plotted to numbers; the electron/proton panel says
 * "not to scale" and the spectrometer radii are shape-only.
 *
 * Colour convention across the deck: the magnetic field B is BLUE
 * (fig-accent) — arrows, loops, or the ⊙ / ⊗ grids drawn as circles with a
 * dot (out of the page) or a cross (into the page); velocity, current and
 * the electric field are the text colour; the magnetic FORCE and induced
 * currents are RED (fig-accent-2); axes, plates and notes grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-mg-<figure>-<colour>). Labels that sit over a field grid get a
 * background patch (class fig-bg) so they stay legible in both themes.
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** Text on a background patch (class fig-bg) so it stays legible over a field grid. */
const LBL = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') => {
  const w = Math.round(text.length * size * 0.58) + 10
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w + 5 : x - 5
  return `<rect class="fig-bg" x="${x0}" y="${y - size}" width="${w}" height="${Math.round(size * 1.3)}" rx="3"/>${T(x, y, size, text, anchor, weight)}`
}

/** A rounded box outlined in the current colour; `fillOpacity` > 0 tints it with the same colour. */
const _BOX = (x: number, y: number, w: number, h: number, rx = 12, sw = 2.5, fillOpacity = 0) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"/>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A small solid arrowhead with its tip at (x, y), for direction marks on closed curves. */
const HEAD = (x: number, y: number, dir: 'left' | 'right' | 'up' | 'down', s = 7) => {
  const pts =
    dir === 'left' ? `${x + s},${y - s * 0.7} ${x},${y} ${x + s},${y + s * 0.7}`
    : dir === 'right' ? `${x - s},${y - s * 0.7} ${x},${y} ${x - s},${y + s * 0.7}`
    : dir === 'up' ? `${x - s * 0.7},${y + s} ${x},${y} ${x + s * 0.7},${y + s}`
    : `${x - s * 0.7},${y - s} ${x},${y} ${x + s * 0.7},${y - s}`
  return `<polygon points="${pts}" fill="currentColor"/>`
}

/** ⊙ — out of the page: a circle with a dot. */
const OUT = (x: number, y: number, r = 9) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${Math.max(2, Math.round(r * 0.3))}" fill="currentColor"/>`

/** ⊗ — into the page: a circle with a cross. */
const IN = (x: number, y: number, r = 9) => {
  const d = +(r * 0.6).toFixed(1)
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="currentColor" stroke-width="2"/><path d="M${x - d} ${y - d} L${x + d} ${y + d} M${x + d} ${y - d} L${x - d} ${y + d}" stroke="currentColor" stroke-width="2"/>`
}

const RANGE = (a: number, b: number, step: number) => {
  const out: number[] = []
  for (let v = a; v <= b; v += step) out.push(v)
  return out
}

/** A region of uniform B drawn as a faded blue grid of ⊙ or ⊗ symbols. */
const FIELD = (kind: 'in' | 'out', xs: number[], ys: number[], r = 9) =>
  `<g class="fig-accent" opacity="0.55">${ys.flatMap((y) => xs.map((x) => (kind === 'in' ? IN(x, y, r) : OUT(x, y, r)))).join('')}</g>`

/** A charged particle: a background-filled circle with its sign inside. */
const CHARGE = (x: number, y: number, sign: '+' | '−', r = 14) =>
  `<circle class="fig-bg" cx="${x}" cy="${y}" r="${r}" stroke="currentColor" stroke-width="2.5"/>${T(x, y + 7, 20, sign, 'middle', '700')}`

/** A bar magnet: S half faint, N half tinted, poles labelled. */
const MAGNET = (x: number, y: number, w: number, h: number, size = 22) =>
  `<rect x="${x}" y="${y}" width="${w / 2}" height="${h}" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/><rect x="${x + w / 2}" y="${y}" width="${w / 2}" height="${h}" rx="4" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-width="2.5"/>${T(x + w / 4, y + h / 2 + size * 0.36, size, 'S', 'middle', '700')}${T(x + (3 * w) / 4, y + h / 2 + size * 0.36, size, 'N', 'middle', '700')}`

/* 1 — No monopoles: a bar magnet's closed loops vs. an electric dipole's start-and-end lines (lead, 1000×460) */
const magnetLoop = (dy: number, a: number, b: number) => {
  const yt = 230 - dy, yb = 230 + dy
  const apexT = yt - 0.75 * b, apexB = yb + 0.75 * b
  return `<path d="M430 ${yt} C${430 + a} ${yt - b}, ${210 - a} ${yt - b}, 210 ${yt}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M430 ${yb} C${430 + a} ${yb + b}, ${210 - a} ${yb + b}, 210 ${yb}" fill="none" stroke="currentColor" stroke-width="2.5"/>
${HEAD(314, apexT, 'left')}${HEAD(314, apexB, 'left')}
${LINE(210, yt, 430, yt, 2)}${LINE(210, yb, 430, yb, 2)}${HEAD(300, yt, 'right', 4)}${HEAD(300, yb, 'right', 4)}`
}
const monopolesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-mono')}</defs>
<g class="fig-muted">${LINE(620, 30, 620, 440, 1.5)}${LINE(640, 248, 980, 248, 1.5)}</g>
${T(320, 40, 22, 'bar magnet: every field line is a closed loop', 'middle', '700')}
<g class="fig-accent">
${magnetLoop(8, 60, 60)}${magnetLoop(18, 120, 120)}${magnetLoop(27, 180, 170)}
</g>
${MAGNET(210, 202, 220, 56)}
${T(320, 420, 17, 'out of N, around, back into S — and S → N inside the magnet', 'middle')}
<g class="fig-muted">${T(320, 446, 16, 'no start, no end: there is nothing for a line to begin on', 'middle')}</g>
${T(810, 40, 20, 'electric: lines start on +, end on −', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-mg-mono-b')}</defs>
${ARR(728, 140, 886, 140, 'arr-mg-mono-b', 2.5)}
<path d="M724 126 Q810 40 896 126" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M724 154 Q810 240 896 154" fill="none" stroke="currentColor" stroke-width="2.5"/>
${HEAD(816, 83, 'right')}${HEAD(816, 197, 'right')}
${ARR(700, 140, 650, 140, 'arr-mg-mono-b', 2.5)}${ARR(920, 140, 970, 140, 'arr-mg-mono-b', 2.5)}
</g>
${CHARGE(712, 140, '+')}${CHARGE(908, 140, '−')}
<g class="fig-muted">${T(810, 232, 15, 'isolated charges exist; isolated poles do not', 'middle')}</g>
${T(810, 278, 18, 'cut a magnet in half', 'middle', '700')}
${MAGNET(740, 292, 140, 36, 18)}
<g class="fig-muted">${LINE(810, 284, 810, 336, 2, true)}${T(810, 358, 15, '✂', 'middle')}</g>
${MAGNET(660, 372, 130, 36, 18)}${MAGNET(830, 372, 130, 36, 18)}
${T(810, 440, 16, 'two magnets, never a lone pole', 'middle')}
</svg>`

/* 2 — Moving charge makes B: a straight wire, the end-on view, a solenoid (lead, 1000×460) */
const wireFieldSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-wire')}</defs>
<g class="fig-muted">${LINE(335, 30, 335, 440, 1.5)}${LINE(655, 30, 655, 440, 1.5)}</g>
${T(175, 40, 20, 'straight wire: circles around it', 'middle', '700')}
<g class="fig-accent">
<ellipse cx="175" cy="235" rx="55" ry="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
<ellipse cx="175" cy="235" rx="105" ry="30" fill="none" stroke="currentColor" stroke-width="2.5"/>
<ellipse cx="175" cy="235" rx="150" ry="44" fill="none" stroke="currentColor" stroke-width="2.5"/>
${HEAD(230, 229, 'up')}${HEAD(280, 229, 'up')}${HEAD(325, 229, 'up')}
${HEAD(120, 241, 'down')}${HEAD(70, 241, 'down')}${HEAD(25, 241, 'down')}
${T(290, 212, 20, 'B', 'start', '700')}
</g>
${LINE(175, 300, 175, 90, 5)}${HEAD(175, 78, 'up', 11)}
${T(190, 100, 22, 'I', 'start', '700')}
${T(175, 338, 17, 'thumb along I, fingers curl with B', 'middle')}
${T(175, 368, 19, 'B = μ₀I / 2πr', 'middle', '700')}
<g class="fig-muted">${T(175, 396, 16, 'falls off as 1/r — not 1/r²', 'middle')}${T(175, 420, 16, 'μ₀/2π = 2 × 10⁻⁷ in SI', 'middle')}</g>
${T(495, 40, 20, 'end view: current out of the page', 'middle', '700')}
<g class="fig-accent">
<circle cx="495" cy="220" r="50" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="495" cy="220" r="100" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="495" cy="220" r="145" fill="none" stroke="currentColor" stroke-width="2.5"/>
${HEAD(488, 170, 'left')}${HEAD(488, 120, 'left')}${HEAD(488, 75, 'left')}
</g>
${OUT(495, 220, 14)}${T(482, 212, 20, 'I', 'end', '700')}
<g class="fig-muted">
${LINE(495, 220, 595, 220, 2, true)}
${T(520, 240, 16, 'r', 'middle')}${T(572, 240, 16, '2r', 'middle')}
</g>
${T(495, 395, 17, 'r → 2r: B halves', 'middle', '700')}
<g class="fig-muted">${T(495, 420, 16, 'CCW for current out of the page', 'middle')}</g>
${T(820, 40, 20, 'loop / solenoid: a bar magnet', 'middle', '700')}
<g class="fig-muted">
${RANGE(700, 940, 30).map((x) => `<ellipse cx="${x}" cy="220" rx="12" ry="45" fill="none" stroke="currentColor" stroke-width="2.5"/>`).join('')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-mg-wire-b')}</defs>
${ARR(692, 196, 950, 196, 'arr-mg-wire-b', 2)}${ARR(692, 220, 950, 220, 'arr-mg-wire-b', 2)}${ARR(692, 244, 950, 244, 'arr-mg-wire-b', 2)}
<path d="M952 198 C985 110, 655 110, 688 198" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M952 242 C985 330, 655 330, 688 242" fill="none" stroke="currentColor" stroke-width="2.5"/>
${HEAD(814, 132, 'left')}${HEAD(814, 308, 'left')}
</g>
${T(972, 227, 22, 'N', 'start', '700')}${T(668, 227, 22, 'S', 'end', '700')}
${T(820, 372, 17, 'inside: strong, nearly uniform', 'middle', '700')}
<g class="fig-muted">${T(820, 398, 16, 'the MRI bore (1.5–3 T)', 'middle')}${T(820, 422, 16, 'outside: a bar magnet, N → S', 'middle')}</g>
</svg>`

/* 3 — F = qvB sinθ: the three switches and the right-hand rule, B drawn into the page (lead, 1000×460) */
const forceLawSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-fl')}</defs>
<g class="fig-muted">${LINE(335, 30, 335, 420, 1.5)}${LINE(655, 30, 655, 420, 1.5)}</g>
${T(175, 40, 20, 'v = 0 or v ∥ B → F = 0', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-mg-fl-b')}</defs>
${[110, 150, 190, 230].map((y) => ARR(45, y, 305, y, 'arr-mg-fl-b', 2.5)).join('')}
${T(318, 118, 20, 'B', 'start', '700')}
</g>
${CHARGE(95, 170, '+')}${CHARGE(230, 170, '+')}
${ARR(246, 170, 300, 170, 'arr-mg-fl', 3)}${T(272, 164, 15, 'v', 'middle', '700')}
${T(95, 282, 17, 'at rest: v = 0', 'middle', '700')}${T(230, 282, 17, 'v ∥ B: θ = 0', 'middle', '700')}
${T(175, 340, 18, 'F = qvB sinθ = 0', 'middle', '700')}
<g class="fig-muted">${T(175, 368, 16, 'B ignores a stationary charge', 'middle')}${T(175, 392, 16, 'and motion along the field', 'middle')}</g>
${T(495, 40, 20, 'v ⊥ B: F = qvB (maximum)', 'middle', '700')}
${FIELD('in', RANGE(370, 620, 50), RANGE(95, 295, 50))}
${CHARGE(445, 170, '+')}
${ARR(460, 170, 545, 170, 'arr-mg-fl', 3)}${T(556, 177, 19, 'v', 'start', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-fl-r')}</defs>
${ARR(445, 155, 445, 82, 'arr-mg-fl-r', 3.5)}${T(460, 122, 20, 'F', 'start', '700')}
</g>
<g class="fig-accent">${LBL(495, 326, 15, '⊗ = B into the page', 'middle')}</g>
${T(495, 352, 17, 'fingers along v, curl into B → thumb F', 'middle', '700')}
<g class="fig-muted">${T(495, 378, 16, 'F ⊥ v and ⊥ B — up here', 'middle')}</g>
${T(820, 40, 20, 'negative charge: flip the answer', 'middle', '700')}
${FIELD('in', RANGE(695, 945, 50), RANGE(95, 295, 50))}
${CHARGE(770, 170, '−')}
${ARR(785, 170, 870, 170, 'arr-mg-fl', 3)}${T(881, 177, 19, 'v', 'start', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-fl-r2')}</defs>
${ARR(770, 185, 770, 258, 'arr-mg-fl-r2', 3.5)}${T(785, 228, 20, 'F', 'start', '700')}
</g>
${T(820, 352, 17, 'same v, same B, opposite F', 'middle', '700')}
<g class="fig-muted">${T(820, 378, 16, 'right hand, then reverse (or use the left)', 'middle')}</g>
${T(500, 440, 17, 'anchor case: (+x) × (+y) = +z — a positive charge moving along +x in B along +y is pushed along +z', 'middle')}
</svg>`

/* 4 — Circular motion: F is the centripetal force; electron vs. proton (lead, 1000×460). B out of the page. */
const circularSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-circ')}</defs>
<g class="fig-muted">${LINE(525, 30, 525, 440, 1.5)}</g>
${T(270, 40, 20, 'B out of the page: F steers, never speeds up', 'middle', '700')}
${FIELD('out', RANGE(50, 490, 55), RANGE(70, 400, 55))}
<circle cx="270" cy="235" r="130" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6"/>
<circle cx="270" cy="235" r="5" fill="currentColor"/>
<g class="fig-muted">${LINE(270, 235, 178, 327, 2, true)}${LBL(212, 294, 19, 'r', 'middle', '700')}</g>
${CHARGE(270, 105, '+')}
${ARR(286, 105, 372, 105, 'arr-mg-circ', 3.5)}${LBL(330, 92, 19, 'v', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-circ-r')}</defs>
${ARR(270, 121, 270, 222, 'arr-mg-circ-r', 3.5)}${LBL(284, 180, 19, 'F = qvB', 'start', '700')}
</g>
<g class="fig-accent">${LBL(390, 300, 15, '⊙ = B out of the page', 'middle')}</g>
${LBL(270, 428, 18, 'qvB = mv²/r  →  r = mv/qB', 'middle', '700')}
<g class="fig-muted">${LBL(270, 452, 15, 'F ⊥ v always: W = 0, speed and KE constant', 'middle')}</g>
${T(760, 40, 20, 'same v, same |q|: electron vs. proton', 'middle', '700')}
${FIELD('out', RANGE(560, 960, 50), RANGE(70, 320, 50))}
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-circ-r2')}</defs>
<path d="M600 200 A100 100 0 0 1 600 400" fill="none" stroke="currentColor" stroke-width="3"/>
${HEAD(700, 306, 'down', 8)}
<circle cx="600" cy="180" r="20" fill="none" stroke="currentColor" stroke-width="3"/>${HEAD(620, 172, 'up', 7)}
</g>
${CHARGE(687, 250, '+', 13)}${CHARGE(600, 160, '−', 11)}
${ARR(545, 200, 588, 200, 'arr-mg-circ', 3)}${LBL(566, 188, 17, 'v', 'middle', '700')}
${LBL(640, 140, 16, 'e⁻: tight loop, turns the other way', 'start', '700')}
${LBL(730, 262, 16, 'p⁺: wide arc', 'start', '700')}
<g class="fig-muted">${LBL(640, 165, 14, '(not to scale: r smaller by m_e/m_p ≈ 1/1836)', 'start')}</g>
${T(835, 388, 16, 'r = mv/qB ∝ m: proton wide, electron tight', 'middle', '700')}
<g class="fig-muted">${T(835, 414, 16, 'opposite sign → opposite sense of turn', 'middle')}${T(835, 440, 16, 'period T = 2πm/qB — independent of speed', 'middle')}</g>
</svg>`

/* 5 — Force on a current-carrying wire: perpendicular, at an angle, parallel (lead, 1000×460) */
const wireForceSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-wf')}</defs>
<g class="fig-muted">${LINE(335, 30, 335, 420, 1.5)}${LINE(655, 30, 655, 420, 1.5)}</g>
${T(175, 40, 20, 'I ⊥ B: F = BIL (maximum)', 'middle', '700')}
${FIELD('in', RANGE(50, 300, 50), RANGE(90, 290, 50))}
${LINE(40, 215, 310, 215, 5)}${HEAD(250, 215, 'right', 11)}${T(316, 222, 20, 'I', 'start', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-wf-r')}</defs>
${ARR(175, 212, 175, 118, 'arr-mg-wf-r', 3.5)}${T(188, 122, 20, 'F', 'start', '700')}
</g>
<g class="fig-accent">${LBL(175, 322, 15, '⊗ = B into the page', 'middle')}</g>
${T(175, 352, 18, 'F = BIL sin 90° = BIL', 'middle', '700')}
<g class="fig-muted">${T(175, 378, 16, 'fingers along I, curl into B, thumb F', 'middle')}${T(175, 402, 16, 'the motor and galvanometer principle', 'middle')}</g>
${T(495, 40, 20, 'I at angle θ: F = BIL sinθ', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-mg-wf-b')}</defs>
${[100, 140, 180, 220, 260].map((y) => ARR(360, y, 625, y, 'arr-mg-wf-b', 2.5)).join('')}
${T(638, 108, 20, 'B', 'start', '700')}
</g>
${ARR(420, 290, 570, 110, 'arr-mg-wf', 3.5)}${LBL(585, 122, 20, 'I', 'start', '700')}
<g class="fig-muted">${LINE(420, 290, 520, 290, 2, true)}</g>
<path d="M470 290 A50 50 0 0 0 452 251" fill="none" stroke="currentColor" stroke-width="2"/>
${LBL(488, 272, 18, 'θ', 'middle')}
<g class="fig-accent-2">${IN(495, 200, 15)}${LBL(516, 207, 17, 'F into the page', 'start', '700')}</g>
${T(495, 352, 18, 'only the part of I across B counts', 'middle', '700')}
<g class="fig-muted">${T(495, 378, 16, 'F ⊥ wire and ⊥ B — here ⊗', 'middle')}</g>
${T(820, 40, 20, 'I ∥ B: F = 0', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-mg-wf-b2')}</defs>
${[100, 140, 220, 260].map((y) => ARR(690, y, 950, y, 'arr-mg-wf-b2', 2.5)).join('')}
${T(962, 108, 20, 'B', 'start', '700')}
</g>
${LINE(690, 180, 950, 180, 5)}${HEAD(830, 180, 'right', 11)}${LBL(842, 170, 20, 'I', 'start', '700')}
${T(820, 352, 18, 'sinθ = 0 → no force at all', 'middle', '700')}
<g class="fig-muted">${T(820, 378, 16, 'current along the field feels nothing', 'middle')}</g>
</svg>`

/* 6 — Parallel wires: same direction attract, opposite repel (beside, 560×440) */
const parallelSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-mg-par')}</defs>
<g class="fig-muted">${LINE(40, 232, 520, 232, 1.5)}</g>
${T(280, 30, 17, 'currents in the SAME direction → attract', 'middle', '700')}
${LINE(170, 60, 170, 205, 4)}${HEAD(170, 92, 'up', 10)}${T(182, 98, 18, 'I', 'start', '700')}
${LINE(390, 60, 390, 205, 4)}${HEAD(390, 92, 'up', 10)}${T(402, 98, 18, 'I', 'start', '700')}
<g class="fig-accent">${OUT(142, 160, 10)}${IN(418, 160, 10)}${T(280, 215, 14, 'each wire sits in the other’s circular field', 'middle')}</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-par-r')}</defs>
${ARR(176, 140, 240, 140, 'arr-mg-par-r', 3.5)}${T(208, 128, 16, 'F', 'middle', '700')}
${ARR(384, 140, 320, 140, 'arr-mg-par-r', 3.5)}${T(352, 128, 16, 'F', 'middle', '700')}
${T(280, 180, 16, 'attract', 'middle', '700')}
</g>
${T(280, 262, 17, 'OPPOSITE directions → repel', 'middle', '700')}
${LINE(170, 282, 170, 420, 4)}${HEAD(170, 314, 'up', 10)}${T(182, 320, 18, 'I', 'start', '700')}
${LINE(390, 282, 390, 420, 4)}${HEAD(390, 388, 'down', 10)}${T(402, 320, 18, 'I', 'start', '700')}
<g class="fig-accent">${IN(142, 375, 10)}${IN(418, 375, 10)}</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-par-r2')}</defs>
${ARR(164, 350, 100, 350, 'arr-mg-par-r2', 3.5)}${T(132, 338, 16, 'F', 'middle', '700')}
${ARR(396, 350, 460, 350, 'arr-mg-par-r2', 3.5)}${T(428, 338, 16, 'F', 'middle', '700')}
${T(280, 380, 16, 'repel', 'middle', '700')}
</g>
<g class="fig-muted">${T(280, 432, 14, 'memory hook: “likes attract” for currents — the reverse of charges', 'middle')}</g>
</svg>`

/* 7 — Velocity selector feeding a mass spectrometer (lead, 1000×460). B into the page in both. */
const selectorSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-sel')}</defs>
<g class="fig-muted">${LINE(545, 30, 545, 440, 1.5)}</g>
${T(280, 36, 20, 'velocity selector: crossed E and B, only v = E/B passes', 'middle', '700')}
<g class="fig-muted">
<rect x="60" y="72" width="420" height="12" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<rect x="60" y="300" width="420" height="12" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
${T(270, 64, 16, '+   +   +   +   +   +   +', 'middle')}${T(270, 334, 16, '−   −   −   −   −   −   −', 'middle')}
<defs>${ARROW('arr-mg-sel-m')}</defs>
${ARR(95, 92, 95, 288, 'arr-mg-sel-m', 2)}${ARR(455, 92, 455, 288, 'arr-mg-sel-m', 2)}
${T(107, 196, 18, 'E', 'start', '700')}${T(443, 196, 18, 'E', 'end', '700')}
${LINE(60, 190, 490, 190, 1.5, true)}
${LINE(498, 150, 498, 178, 4)}${LINE(498, 202, 498, 230, 4)}
</g>
${FIELD('in', RANGE(150, 400, 50), RANGE(115, 265, 50))}
${CHARGE(225, 190, '+')}
${ARR(241, 190, 335, 190, 'arr-mg-sel', 3.5)}${T(290, 206, 17, 'v', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-sel-r')}</defs>
${ARR(225, 175, 225, 110, 'arr-mg-sel-r', 3.5)}${T(238, 148, 18, 'qvB', 'start', '700')}
</g>
${ARR(225, 205, 225, 270, 'arr-mg-sel', 3.5)}${T(238, 240, 18, 'qE', 'start', '700')}
${T(270, 368, 17, 'qE = qvB → v = E/B — m and q both cancel', 'middle', '700')}
<g class="fig-muted">${T(270, 394, 16, 'faster: qvB wins, deflects up; slower: qE wins, deflects down', 'middle')}${T(270, 418, 16, 'only v = E/B reaches the slit', 'middle')}</g>
${T(770, 36, 20, 'mass spectrometer: B only, r = mv/qB', 'middle', '700')}
${FIELD('in', RANGE(650, 950, 50), RANGE(105, 305, 50))}
<g class="fig-muted">${LINE(604, 56, 604, 205, 5)}${T(604, 46, 14, 'detector', 'middle')}${LINE(604, 340, 604, 400, 1.5, true)}</g>
${ARR(562, 380, 598, 380, 'arr-mg-sel', 3)}${LBL(580, 368, 17, 'v', 'middle', '700')}
<g class="fig-accent-2">
<path d="M610 380 A100 100 0 0 0 610 180" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M610 380 A150 150 0 0 0 610 80" fill="none" stroke="currentColor" stroke-width="3"/>
${HEAD(709, 276, 'up', 8)}${HEAD(759, 226, 'up', 8)}
<circle cx="610" cy="180" r="6" fill="currentColor"/><circle cx="610" cy="80" r="6" fill="currentColor"/>
</g>
${T(660, 288, 16, 'lighter', 'middle', '700')}${T(700, 188, 16, 'heavier', 'middle', '700')}
${T(815, 388, 17, 'r ∝ m: the heavier ion lands farther out', 'middle', '700')}
<g class="fig-muted">${T(815, 414, 16, 'really sorts by m/q: a 2+ heavy ion can land', 'middle')}${T(815, 438, 16, 'on the same spot as a 1+ light one', 'middle')}</g>
</svg>`

/* 8 — Faraday's law: the three ways to change Φ = BA cosθ (lead, 1000×460) */
const faradaySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-far')}</defs>
${T(500, 34, 21, '|ε| = N ΔΦ/Δt — an EMF needs CHANGING flux, Φ = BA cosθ', 'middle', '700')}
<g class="fig-muted">${LINE(335, 60, 335, 370, 1.5)}${LINE(655, 60, 655, 370, 1.5)}</g>
${T(175, 82, 20, '1. change B', 'middle', '700')}
<circle cx="105" cy="210" r="50" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">${OUT(105, 210, 7)}${OUT(88, 192, 7)}${OUT(122, 228, 7)}</g>
<g class="fig-muted">${ARR(160, 210, 190, 210, 'arr-mg-far', 2.5)}</g>
<circle cx="245" cy="210" r="50" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">${[[245, 210], [225, 190], [265, 190], [225, 230], [265, 230], [245, 180], [245, 240], [215, 210], [275, 210]].map(([x, y]) => OUT(x, y, 7)).join('')}
${T(175, 148, 17, 'B ↑', 'middle', '700')}</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-far-r')}</defs>
<path d="M245 272 A62 62 0 1 1 307 210" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mg-far-r)"/>
${T(245, 300, 15, 'induced I', 'middle', '700')}
</g>
<g class="fig-muted">${T(175, 334, 16, 'switch a field on or off,', 'middle')}${T(175, 358, 16, 'move a magnet in or out', 'middle')}</g>
${T(495, 82, 20, '2. change A', 'middle', '700')}
${FIELD('out', RANGE(395, 595, 50), RANGE(130, 280, 50), 7)}
<circle cx="495" cy="210" r="75" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="495" cy="210" r="40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>
<g class="fig-muted">
<defs>${ARROW('arr-mg-far-m')}</defs>
${ARR(425, 210, 448, 210, 'arr-mg-far-m', 2.5)}${ARR(565, 210, 542, 210, 'arr-mg-far-m', 2.5)}${ARR(495, 140, 495, 163, 'arr-mg-far-m', 2.5)}${ARR(495, 280, 495, 257, 'arr-mg-far-m', 2.5)}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-far-r2')}</defs>
<path d="M495 297 A87 87 0 1 0 408 210" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mg-far-r2)"/>
</g>
<g class="fig-muted">${T(495, 334, 16, 'shrink or stretch the loop,', 'middle')}${T(495, 358, 16, 'or slide it out of the field', 'middle')}</g>
${T(820, 82, 20, '3. rotate (change θ)', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-mg-far-b')}</defs>
${[150, 180, 210, 240, 270].map((y) => ARR(690, y, 950, y, 'arr-mg-far-b', 2.5)).join('')}
${T(962, 158, 18, 'B', 'start', '700')}
</g>
<ellipse cx="820" cy="210" rx="26" ry="72" class="fig-bg" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted">${LINE(820, 118, 820, 302, 1.5, true)}
<path d="M790 112 A30 10 0 0 1 850 112" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mg-far-m)"/></g>
<g class="fig-accent-2">
<path d="M730 318 q12 -24 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke="currentColor" stroke-width="2.5"/>
${T(820, 300, 15, 'ε alternates', 'middle', '700')}
</g>
<g class="fig-muted">${T(820, 344, 16, 'the generator: Φ = BA cosθ swings', 'middle')}${T(820, 368, 16, 'between +BA and −BA as it turns', 'middle')}</g>
${T(500, 408, 18, 'three knobs — B, A, θ; a steady flux, however large, induces nothing', 'middle', '700')}
<g class="fig-muted">${T(500, 436, 16, 'size: N ΔΦ/Δt (watch for N turns hidden in the stem) · direction: Lenz, next', 'middle')}</g>
</svg>`

/* 9 — Lenz's law: magnet pushed toward, then pulled from, a loop (lead, 1000×460) */
const lenzSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-lenz')}</defs>
<g class="fig-muted">${LINE(510, 30, 510, 440, 1.5)}</g>
${T(260, 36, 20, 'N pole pushed TOWARD the loop', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-mg-lenz-b')}</defs>
${ARR(244, 200, 440, 192, 'arr-mg-lenz-b', 2)}${ARR(244, 220, 440, 220, 'arr-mg-lenz-b', 2)}${ARR(244, 240, 440, 248, 'arr-mg-lenz-b', 2)}
${T(420, 180, 15, 'B of the magnet', 'middle')}
</g>
${MAGNET(60, 195, 180, 50)}
${ARR(110, 165, 200, 165, 'arr-mg-lenz', 3.5)}${T(155, 152, 16, 'push', 'middle', '700')}
<ellipse cx="340" cy="220" rx="24" ry="72" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-mg-lenz-r')}</defs>
${HEAD(316, 226, 'down', 9)}${HEAD(364, 214, 'up', 9)}
${T(340, 128, 16, 'loop makes a N face → repels', 'middle', '700')}
${ARR(150, 278, 80, 278, 'arr-mg-lenz-r', 3.5)}${T(115, 302, 15, 'felt as resistance', 'middle')}
${T(340, 332, 15, 'induced I', 'middle', '700')}
</g>
<g class="fig-accent">${ARR(378, 268, 304, 268, 'arr-mg-lenz-b', 2.5, true)}${T(340, 310, 14, 'induced B opposes', 'middle')}</g>
${T(260, 362, 17, 'flux through the loop ↑ → induced B points back', 'middle', '700')}
<g class="fig-muted">${T(260, 388, 16, 'like poles face each other: repulsion', 'middle')}${T(260, 412, 15, 'your push = the energy dissipated in the loop', 'middle')}</g>
${T(755, 36, 20, 'N pole pulled AWAY from the loop', 'middle', '700')}
<g class="fig-accent">
${ARR(724, 200, 920, 192, 'arr-mg-lenz-b', 2)}${ARR(724, 220, 920, 220, 'arr-mg-lenz-b', 2)}${ARR(724, 240, 920, 248, 'arr-mg-lenz-b', 2)}
${T(905, 180, 15, 'B of the magnet', 'middle')}
</g>
${MAGNET(540, 195, 180, 50)}
${ARR(680, 165, 590, 165, 'arr-mg-lenz', 3.5)}${T(635, 152, 16, 'pull', 'middle', '700')}
<ellipse cx="820" cy="220" rx="24" ry="72" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
${HEAD(796, 214, 'up', 9)}${HEAD(844, 226, 'down', 9)}
${T(820, 128, 16, 'loop makes a S face → attracts', 'middle', '700')}
${ARR(630, 278, 700, 278, 'arr-mg-lenz-r', 3.5)}${T(665, 302, 15, 'tugged back', 'middle')}
${T(820, 332, 15, 'induced I (reversed)', 'middle', '700')}
</g>
<g class="fig-accent">${ARR(782, 268, 856, 268, 'arr-mg-lenz-b', 2.5, true)}${T(820, 310, 14, 'induced B props it up', 'middle')}</g>
${T(755, 362, 17, 'flux through the loop ↓ → induced B points along', 'middle', '700')}
<g class="fig-muted">${T(755, 388, 16, 'unlike poles face each other: attraction', 'middle')}${T(755, 412, 15, 'either way the loop opposes the CHANGE, not the field', 'middle')}</g>
<g class="fig-muted">${T(500, 446, 15, 'conservation of energy in disguise — a current that helped the change would be free energy', 'middle')}</g>
</svg>`

export const mcatMagnetismFigures: DeckFigurePlacement[] = [
  {
    at: 'No Magnetic Monopoles',
    mode: 'lead',
    figure: {
      svg: monopolesSvg,
      alt:
        'Left: a bar magnet (S on the left, N on the right) with three nested blue field lines that leave the N face, arc around above and below, re-enter the S face and continue straight through the magnet from S back to N — every line is a closed loop with no start and no end. Right, top: a positive and a negative charge with blue electric field lines that begin on the plus charge and end on the minus charge, plus two lines running off to infinity — isolated charges exist, isolated poles do not. Right, bottom: a magnet cut along a dashed line becomes two smaller S–N magnets, never a lone pole.',
      caption: 'No monopoles: a magnet’s field lines close on themselves (N → S outside, S → N inside), unlike electric lines that start on + and end on −; cutting a magnet makes two magnets.',
    },
    blocks: [
      '- Lines leave N, loop round, re-enter S, then run S → N **inside** — closed loops, no monopoles',
      '- Contrast electrostatics: lines begin on $+$ and end on $-$ because isolated charges exist',
    ],
  },
  {
    at: 'Moving Charge Makes Magnetic Field',
    mode: 'lead',
    figure: {
      svg: wireFieldSvg,
      alt:
        'Three panels. Left: a vertical wire carrying current I upward, with three blue concentric circles around it (drawn as ellipses in perspective) marked with arrowheads circulating around the wire — thumb along I, fingers curl with B; B = μ₀I/2πr, falling off as 1/r, not 1/r², with μ₀/2π = 2 × 10⁻⁷ in SI. Middle: the end view, the wire as a circle with a dot (current out of the page) and three blue circles of radius r, 2r and about 3r with counterclockwise arrowheads; going from r to 2r halves B. Right: a solenoid of grey turns with three blue arrows running straight through its interior toward the N end and blue return loops outside from N around to S — inside strong and nearly uniform (the MRI bore, 1.5–3 T), outside like a bar magnet.',
      caption: 'A current makes circles of B around itself (right-hand curl rule, B = μ₀I/2πr, 1/r falloff); wound into a solenoid, the circles add to a uniform interior field with N and S ends like a bar magnet.',
    },
    blocks: [
      '- Straight wire: $B = \\mu_0 I / 2\\pi r$ — circles round the wire, $1/r$ falloff (**not** $1/r^2$)',
      '- A loop is a dipole; a solenoid stacks loops into a strong, nearly uniform interior field (MRI)',
    ],
  },
  {
    at: 'The Magnetic Force Law',
    mode: 'lead',
    figure: {
      svg: forceLawSvg,
      alt:
        'Three panels with the force F = qvB sinθ. Left: a field B drawn as blue arrows pointing right; a positive charge at rest (v = 0) and another moving along the field (v parallel to B, θ = 0) — both feel zero force; B ignores a stationary charge and motion along the field. Middle: B into the page drawn as a grid of circled crosses; a positive charge moves right with velocity v and feels a red force F straight up — the maximum qvB, found by pointing the fingers along v, curling into B, thumb gives F, perpendicular to both. Right: the same field and velocity for a negative charge gives a red force straight down — same v, same B, opposite F; use the right hand then reverse. Bottom: anchor case (+x) × (+y) = +z — a positive charge moving along +x in B along +y is pushed along +z.',
      caption: 'F = qvB sinθ and its direction: nothing at rest or along the field, qvB at right angles — the right-hand rule gives F for a positive charge, and a negative charge flips it.',
    },
    blocks: [
      '- $F = qvB\\sin\\theta$: zero at rest and for motion along $B$; maximum $qvB$ when $\\vec v \\perp \\vec B$',
      '- Right hand: fingers along $\\vec v$, curl to $\\vec B$, thumb gives $F$ on $+q$; negative charge → reverse',
    ],
  },
  {
    at: 'Circular Motion in a Uniform Field',
    mode: 'lead',
    figure: {
      svg: circularSvg,
      alt:
        'Left: a uniform field out of the page drawn as a grid of circled dots; a positive charge at the top of a dashed circle moves right with velocity v while a red force F = qvB points straight down to the center, with the radius r marked; the charge goes round clockwise. Equations: qvB = mv²/r so r = mv/qB; F is always perpendicular to v, so W = 0 and speed and kinetic energy stay constant. Right: an electron and a proton enter the same out-of-page field moving right with the same speed; the proton sweeps a wide red arc curving downward while the electron whips round a tiny loop curving upward — not to scale, its radius is smaller by m_e/m_p ≈ 1/1836. r = mv/qB is proportional to m, opposite signs turn opposite ways, and the period T = 2πm/qB does not depend on speed.',
      caption: 'The magnetic force is the centripetal force: r = mv/qB, speed unchanged. Same speed and field, the proton arcs wide and the electron loops tight, in opposite senses.',
    },
    blocks: [
      '- $qvB = mv^2/r \\Rightarrow r = mv/qB$: faster or heavier → wider circle; stronger $B$ or more $q$ → tighter',
      '- $F \\perp v$ always, so no work: speed constant; $T = 2\\pi m/qB$ ignores speed; oblique entry → helix',
    ],
  },
  {
    at: 'Force on a Current-Carrying Wire',
    mode: 'lead',
    figure: {
      svg: wireForceSvg,
      alt:
        'Three panels with F = BIL sinθ. Left: a field into the page drawn as circled crosses; a horizontal wire carries current I to the right and feels a red force F straight up — F = BIL sin 90° = BIL, the maximum, fingers along I, curl into B, thumb F; the motor and galvanometer principle. Middle: a field B drawn as blue arrows to the right; the wire runs diagonally up and to the right at angle θ to the field (θ marked between the wire and a dashed horizontal); the force is a red circled cross on the wire, into the page, of size BIL sinθ — only the part of I across B counts. Right: the wire runs along the field arrows; sinθ = 0 so there is no force at all.',
      caption: 'A wire in a field: F = BIL sinθ, perpendicular to both the wire and B — maximum BIL when the wire crosses the field, zero when it runs along it.',
    },
    blocks: [
      '- $F = BIL\\sin\\theta$, $L$ = length inside the field: maximum $BIL$ across the field, zero along it',
      '- Same right-hand rule as for a charge, with $I$ (conventional) in place of $\\vec v$ — the motor principle',
    ],
  },
  {
    at: 'Parallel Wires',
    mode: 'beside',
    figure: {
      svg: parallelSvg,
      alt:
        'Top: two vertical wires both carrying current upward. Beside each wire a blue symbol shows the other wire’s field there (a circled dot at the left wire, a circled cross at the right wire), and red force arrows on the two wires point toward each other — they attract. Bottom: the left wire’s current runs up and the right wire’s runs down; the other wire’s field is now into the page at both, and the red force arrows point away from each other — they repel. Memory hook: likes attract for currents, the reverse of charges.',
      caption: 'Parallel currents attract and antiparallel currents repel: each wire sits in the other’s circular field and F = BIL does the rest.',
    },
    blocks: [
      '- Same direction: **attract**; opposite directions: **repel** — the reverse of the like-charges rule',
      '- Each wire sits in the other’s circular field; apply $F = BIL$ with the right-hand rule to get the push',
      '- Memory hook: “likes attract” for currents',
    ],
  },
  {
    at: 'The Velocity Selector',
    mode: 'lead',
    figure: {
      svg: selectorSvg,
      alt:
        'Left: a velocity selector — a positive plate above and a negative plate below with a downward electric field E between them, and a magnetic field into the page drawn as circled crosses. A positive ion moves right along a dashed beam line toward a slit; the red magnetic force qvB points up and the electric force qE points down. They balance only when qE = qvB, so v = E/B with both m and q cancelling; faster ions deflect up, slower ones down, and only v = E/B reaches the slit. Right: a mass spectrometer — the beam enters a region of field into the page moving right and bends upward in a semicircle back onto a detector plate; a lighter ion follows the smaller red semicircle and a heavier ion the larger one. Same v, q and B, so r = mv/qB is proportional to m and the heavier ion lands farther out; the machine really sorts by m/q, so a doubly charged heavy ion can land where a singly charged light one does.',
      caption: 'Crossed E and B pass only v = E/B; the selected beam then bends in B alone with r = mv/qB, so the landing point reads mass (strictly m/q).',
    },
    blocks: [
      '- Selector: $qE = qvB \\Rightarrow v = E/B$, independent of mass **and** charge; off-speed ions deflect out',
      '- Spectrometer: $r = mv/qB$ with $v$, $q$, $B$ fixed — radius reads out $m$ (strictly $m/q$)',
    ],
  },
  {
    at: "Faraday's Law",
    mode: 'lead',
    figure: {
      svg: faradaySvg,
      alt:
        'Header: |ε| = N ΔΦ/Δt — an EMF needs changing flux, Φ = BA cosθ. Three panels, one per knob. 1, change B: a loop with three field dots becomes a loop with nine (B increasing) and a red induced current circulates around it — switch a field on or off, move a magnet in or out. 2, change A: in a field of dots a loop shrinks from a solid circle to a dashed smaller one (grey inward arrows) and a red induced current runs round it — shrink or stretch the loop, or slide it out of the field. 3, rotate: a loop seen edge-on in a field of blue arrows turns about its vertical axis and a red alternating wave is labelled ε alternates — the generator, Φ = BA cosθ swings between +BA and −BA. Footer: three knobs B, A, θ; a steady flux, however large, induces nothing; size N ΔΦ/Δt (watch for N turns hidden in the stem); direction from Lenz.',
      caption: 'Faraday’s law: an EMF appears only while the flux Φ = BA cosθ changes — by changing B, changing A, or rotating the loop (the generator); magnitude N ΔΦ/Δt.',
    },
    blocks: [
      '- $|\\varepsilon| = N\\,\\Delta\\Phi/\\Delta t$, $\\Phi = BA\\cos\\theta$: change $B$, change $A$, or rotate the loop',
      '- A steady flux, however enormous, induces nothing — the rate of change is everything; don’t drop $N$',
    ],
  },
  {
    at: "Lenz's Law",
    mode: 'lead',
    figure: {
      svg: lenzSvg,
      alt:
        'Left: a bar magnet with its N pole facing a loop (drawn edge-on as an ellipse) is pushed toward it; blue field lines from the N pole pass through the loop, so the flux through the loop is increasing. Red arrowheads on the loop mark the induced current (counterclockwise as seen from the magnet) and a dashed blue arrow inside the loop shows the induced field pointing back toward the magnet: the loop makes a N face toward the magnet and repels it — a red arrow on the magnet opposes the push, felt as resistance; the work of the push is the energy dissipated in the loop. Right: the same magnet pulled away; the flux is decreasing, the induced current is reversed (clockwise as seen from the magnet) and the induced field inside the loop points along the magnet’s field to prop it up: the loop makes a S face and tugs the magnet back. Either way the loop opposes the change, not the field — conservation of energy, since a current that helped the change would be free energy.',
      caption: 'Lenz’s law: the induced current’s own field opposes the change in flux — N approaching meets a N face (repulsion), N retreating meets a S face (attraction).',
    },
    blocks: [
      '- The induced current’s own field **opposes the change** in flux: N approaching meets N; N retreating meets S',
      '- Energy conservation in disguise: you do work against that opposition, and it shows up as heat in the loop',
    ],
  },
]
