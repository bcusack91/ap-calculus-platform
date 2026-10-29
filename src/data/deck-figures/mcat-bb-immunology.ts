import type { DeckFigurePlacement } from './index'

/**
 * Immunology Basics (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing is ours, drawn from the concept: cells as circles, antibodies
 * as stroked Y shapes, a vessel as two walls, pathways as boxes joined by
 * arrows, a textbook-shaped titer curve captioned "illustrative". No textbook,
 * prep-company, AAMC or web figure was copied. Molecules are labelled boxes or
 * dots, never structural formulas; the only numbers drawn are the lesson's.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so every
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-im-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

const f = (v: number) => +v.toFixed(1)

/** One line of text. Attribute order x, y, font-size is relied on by our QA scripts. */
const TXT = (x: number, y: number, fs: number, txt: string, o: { a?: 'middle' | 'end'; b?: boolean } = {}) =>
  `<text x="${f(x)}" y="${f(y)}" font-size="${fs}"${o.b ? ' font-weight="700"' : ''}${o.a ? ` text-anchor="${o.a}"` : ''} fill="currentColor">${txt}</text>`

/** A rounded, lightly filled box with an optional centred one-line label. */
const BOX = (x: number, y: number, w: number, h: number, label = '', fs = 19, bold = true, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>` +
  (label ? TXT(x + w / 2, y + h / 2 + fs * 0.36, fs, label, { a: 'middle', b: bold }) : '')

/** A cell: lightly filled circle. */
const CELL = (cx: number, cy: number, r: number, op = 0.1, sw = 2.5) =>
  `<circle cx="${f(cx)}" cy="${f(cy)}" r="${r}" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="${sw}"/>`

const DOTS = (pts: [number, number][], r = 4) => pts.map(([x, y]) => `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="currentColor"/>`).join('')

/**
 * A Y-shaped antibody icon. Base (bottom of the stem) at (x, y); `deg` turns
 * it clockwise (0 = arms up); the hinge is `s` above the base and the arms
 * reach 1.75·s. Pure path, so text measurement is never affected by a transform.
 */
const AB = (x: number, y: number, s: number, deg = 0, sw = 3.5) =>
  `<g transform="translate(${f(x)} ${f(y)}) rotate(${deg})"><path d="M0 0 L0 ${f(-s)} M0 ${f(-s)} L${f(-0.62 * s)} ${f(-1.75 * s)} M0 ${f(-s)} L${f(0.62 * s)} ${f(-1.75 * s)}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/></g>`

/** Polyline points for y = fn(s) sampled n times on [s0, s1]. */
const CURVE = (fn: (s: number) => number, s0: number, s1: number, n: number, sx: (s: number) => number, sy: (v: number) => number) => {
  const pts: string[] = []
  for (let i = 0; i <= n; i++) {
    const s = s0 + ((s1 - s0) * i) / n
    pts.push(`${f(sx(s))},${f(sy(fn(s)))}`)
  }
  return pts.join(' ')
}

/* 1 — Innate vs adaptive: five rows, each drawn rather than tabulated (replace-table, 560×440) */
const BUMP = (x0: number, w: number, base: number, h: number) =>
  `<path d="M${x0} ${base} C ${x0 + w * 0.3} ${base}, ${x0 + w * 0.3} ${base - h}, ${x0 + w / 2} ${base - h} C ${x0 + w * 0.7} ${base - h}, ${x0 + w * 0.7} ${base}, ${x0 + w} ${base}" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>`
const innateSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-accent">${TXT(140, 28, 20, 'INNATE', { a: 'middle', b: true })}</g>
<g class="fig-accent-2">${TXT(420, 28, 20, 'ADAPTIVE', { a: 'middle', b: true })}</g>
<g class="fig-muted">
<line x1="12" y1="40" x2="548" y2="40" stroke="currentColor" stroke-width="1.5"/>
<line x1="12" y1="118" x2="548" y2="118" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="12" y1="226" x2="548" y2="226" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="12" y1="306" x2="548" y2="306" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="12" y1="402" x2="548" y2="402" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
${TXT(280, 58, 12, 'SPEED', { a: 'middle', b: true })}
${TXT(280, 136, 12, 'SPECIFICITY', { a: 'middle', b: true })}
${TXT(280, 244, 12, 'RECEPTORS', { a: 'middle', b: true })}
${TXT(280, 324, 12, 'MEMORY', { a: 'middle', b: true })}
${TXT(280, 418, 12, 'CELLS', { a: 'middle', b: true })}
</g>
<g class="fig-accent"><rect x="90" y="68" width="100" height="14" rx="7" fill="currentColor" fill-opacity="0.75"/></g>
<g class="fig-accent-2"><rect x="300" y="68" width="240" height="14" rx="7" fill="currentColor" fill-opacity="0.75"/></g>
${TXT(140, 104, 14, 'minutes to hours', { a: 'middle' })}
${TXT(420, 104, 14, 'days on first exposure', { a: 'middle' })}
<g class="fig-accent-2">
<circle cx="118" cy="156" r="7" fill="currentColor"/>
<rect x="133" y="149" width="14" height="14" fill="currentColor"/>
<polygon points="162,149 155,163 169,163" fill="currentColor"/>
<circle cx="420" cy="156" r="7" fill="currentColor"/>
</g>
<g class="fig-accent">
<rect x="108" y="172" width="64" height="20" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
${TXT(140, 187, 12, 'TLR', { a: 'middle', b: true })}
<rect x="388" y="172" width="64" height="20" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
${TXT(420, 187, 12, 'BCR / TCR', { a: 'middle', b: true })}
</g>
${TXT(140, 212, 13, 'any PAMP: LPS, flagellin, dsRNA', { a: 'middle' })}
${TXT(420, 212, 13, 'ONE epitope — a single clone fits it', { a: 'middle' })}
<g class="fig-accent">
<rect x="70" y="256" width="140" height="18" rx="4" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
${TXT(140, 269, 11, 'one fixed TLR gene', { a: 'middle', b: true })}
</g>
<g class="fig-accent-2">
<rect x="326" y="256" width="34" height="18" rx="4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
<rect x="368" y="256" width="34" height="18" rx="4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
<rect x="410" y="256" width="34" height="18" rx="4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
${TXT(343, 269, 11, 'V', { a: 'middle', b: true })}${TXT(385, 269, 11, 'D', { a: 'middle', b: true })}${TXT(427, 269, 11, 'J', { a: 'middle', b: true })}
<rect x="468" y="256" width="60" height="18" rx="4" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
${TXT(498, 269, 11, 'V D J', { a: 'middle', b: true })}
<line x1="448" y1="265" x2="462" y2="265" stroke="currentColor" stroke-width="2"/>
</g>
${TXT(140, 294, 13, 'germline-encoded, same in every cell', { a: 'middle' })}
${TXT(420, 294, 13, 'rearranged per clone: V(D)J', { a: 'middle' })}
<g class="fig-accent">${BUMP(70, 60, 372, 24)}${BUMP(150, 60, 372, 24)}</g>
<g class="fig-accent-2">${BUMP(320, 60, 372, 24)}${BUMP(400, 70, 372, 44)}</g>
<g class="fig-muted">
<line x1="60" y1="372" x2="220" y2="372" stroke="currentColor" stroke-width="1.5"/>
<line x1="310" y1="372" x2="480" y2="372" stroke="currentColor" stroke-width="1.5"/>
${TXT(100, 346, 11, '1st', { a: 'middle' })}${TXT(180, 346, 11, '2nd', { a: 'middle' })}
${TXT(350, 346, 11, '1st', { a: 'middle' })}${TXT(500, 346, 11, '2nd', { a: 'middle' })}
</g>
${TXT(140, 392, 13, 'none — every exposure looks new', { a: 'middle' })}
${TXT(420, 392, 13, 'yes — faster, stronger 2nd response', { a: 'middle' })}
${TXT(140, 436, 12, 'neutrophil · macrophage · NK · dendritic', { a: 'middle' })}
${TXT(420, 436, 12, 'B and T lymphocytes', { a: 'middle' })}
</svg>`

/* 2 — Complement: two ways in, one hub, three outcomes (lead, 1000×460) */
const complementSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-im-comp')}</defs>
${TXT(500, 34, 21, '~30 plasma proteins (made by the liver) — two ways in, one hub, three outcomes', { a: 'middle', b: true })}
${BOX(40, 96, 240, 96)}
${TXT(160, 126, 20, 'Classical pathway', { a: 'middle', b: true })}
${TXT(160, 150, 16, 'antibody bound to antigen', { a: 'middle' })}
<g class="fig-accent-2">${TXT(160, 176, 15, 'links to ADAPTIVE immunity', { a: 'middle', b: true })}</g>
${BOX(40, 290, 240, 110)}
${TXT(160, 320, 20, 'Alternative pathway', { a: 'middle', b: true })}
${TXT(160, 344, 16, 'fires on microbial surfaces', { a: 'middle' })}
${TXT(160, 364, 16, 'spontaneously — no antibody', { a: 'middle' })}
<g class="fig-accent">${TXT(160, 390, 15, 'purely INNATE', { a: 'middle', b: true })}</g>
<path d="M280 144 L394 222" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-im-comp)"/>
<path d="M280 346 L394 262" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-im-comp)"/>
<g class="fig-accent">
<rect x="400" y="196" width="170" height="92" rx="14" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="3"/>
${TXT(485, 236, 30, 'C3', { a: 'middle', b: true })}
${TXT(485, 270, 17, '→ C3a + C3b', { a: 'middle', b: true })}
</g>
${TXT(485, 312, 15, 'the hub both routes reach', { a: 'middle' })}
<path d="M570 226 L634 124" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-im-comp)"/>
<path d="M570 242 L634 242" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-im-comp)"/>
<path d="M570 258 L634 366" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-im-comp)"/>
${NUM(658, 72, '1')}
${TXT(680, 78, 21, 'Opsonization', { b: true })}
<g class="fig-accent-2"><ellipse cx="712" cy="124" rx="28" ry="18" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-accent">${DOTS([[684, 124], [740, 124], [698, 108], [726, 108], [698, 140], [726, 140]], 4.5)}
${TXT(712, 164, 14, 'C3b coat', { a: 'middle', b: true })}</g>
<line x1="748" y1="124" x2="812" y2="124" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-im-comp)"/>
${CELL(866, 124, 40, 0.1)}
${TXT(866, 129, 14, 'phagocyte', { a: 'middle', b: true })}
${TXT(866, 184, 14, 'flagged for eating', { a: 'middle' })}
${NUM(658, 206, '2')}
${TXT(680, 212, 20, 'Membrane attack complex (MAC)', { b: true })}
<g class="fig-accent-2">
<rect x="680" y="232" width="56" height="20" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
<rect x="766" y="232" width="56" height="20" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
${TXT(840, 264, 13, 'pathogen membrane')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-im-comp-b')}</defs>
<rect x="738" y="224" width="26" height="36" rx="5" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
<line x1="751" y1="210" x2="751" y2="276" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-im-comp-b)"/>
${TXT(840, 244, 15, 'terminal components', { b: true })}
</g>
${TXT(712, 298, 15, 'lytic pore → the cell lyses', { a: 'middle' })}
${NUM(658, 336, '3')}
${TXT(680, 342, 20, 'Anaphylatoxins', { b: true })}
<g class="fig-accent-2">
<circle cx="700" cy="386" r="18" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
<circle cx="748" cy="386" r="18" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
${TXT(700, 391, 13, 'C3a', { a: 'middle', b: true })}${TXT(748, 391, 13, 'C5a', { a: 'middle', b: true })}
</g>
<line x1="774" y1="386" x2="812" y2="386" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-im-comp)"/>
${TXT(822, 380, 15, 'amplify inflammation,')}
${TXT(822, 400, 15, 'recruit phagocytes')}
<g class="fig-muted">${TXT(680, 432, 13, 'C5a: also a strong neutrophil chemoattractant')}</g>
</svg>`

/* 3 — Inflammation: one vessel, five numbered events (lead, 1000×460) */
const NEUT = (cx: number, cy: number, r = 16) =>
  `${CELL(cx, cy, r, 0.22)}<circle cx="${f(cx - r * 0.3)}" cy="${f(cy - r * 0.1)}" r="${f(r * 0.3)}" fill="currentColor" fill-opacity="0.6"/><circle cx="${f(cx + r * 0.25)}" cy="${f(cy + r * 0.2)}" r="${f(r * 0.3)}" fill="currentColor" fill-opacity="0.6"/>`
const inflamSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-im-inf')}</defs>
<g class="fig-muted">
${TXT(40, 56, 16, 'tissue')}
${TXT(40, 246, 16, 'blood')}
<line x1="40" y1="30" x2="960" y2="30" stroke="currentColor" stroke-width="2"/>
<line x1="110" y1="246" x2="300" y2="246" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6" marker-end="url(#arr-im-inf)"/>
</g>
<polygon points="40,196 520,196 960,176 960,304 520,284 40,284" fill="currentColor" fill-opacity="0.05"/>
<path d="M40 196 L520 196 L554 194" fill="none" stroke="currentColor" stroke-width="6"/>
<path d="M592 193 L960 176" fill="none" stroke="currentColor" stroke-width="6" stroke-dasharray="14 10"/>
<path d="M40 284 L520 284 L600 288" fill="none" stroke="currentColor" stroke-width="6"/>
<path d="M600 288 L960 304" fill="none" stroke="currentColor" stroke-width="6" stroke-dasharray="14 10"/>
<g class="fig-accent-2">
<path d="M862 20 L806 112" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
<ellipse cx="838" cy="124" rx="9" ry="5" fill="currentColor"/>
<ellipse cx="866" cy="140" rx="9" ry="5" fill="currentColor"/>
<ellipse cx="836" cy="150" rx="9" ry="5" fill="currentColor"/>
${TXT(900, 100, 15, 'splinter +', { b: true })}
${TXT(900, 120, 15, 'bacteria', { b: true })}
</g>
${CELL(560, 96, 28, 0.1)}
<g class="fig-accent-2">${DOTS([[552, 90], [566, 98], [556, 106], [568, 86]], 3.5)}
${DOTS([[600, 124], [620, 150], [588, 160], [646, 170], [612, 178], [670, 184], [640, 136]], 4)}
${TXT(522, 130, 15, 'histamine', { a: 'end', b: true })}</g>
${TXT(560, 60, 15, 'mast cell', { a: 'middle', b: true })}
${NUM(602, 78, '1', 11)}
<g class="fig-accent">
<defs>${ARROW('arr-im-inf-b')}</defs>
${NEUT(160, 240)}
${NEUT(400, 214)}
<ellipse cx="573" cy="190" rx="12" ry="21" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2.5"/>
${NEUT(700, 150)}
<path d="M716 146 L806 134" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 5" marker-end="url(#arr-im-inf-b)"/>
<line x1="760" y1="240" x2="760" y2="212" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-im-inf-b)"/>
<line x1="840" y1="236" x2="840" y2="208" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-im-inf-b)"/>
<line x1="900" y1="236" x2="900" y2="202" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-im-inf-b)"/>
${TXT(806, 267, 14, 'plasma leaks out')}
</g>
${NUM(470, 318, '2', 11)}
${TXT(488, 323, 14, 'vessel widens')}
${NUM(790, 262, '3', 11)}
${NUM(596, 230, '4', 11)}
${TXT(612, 235, 14, 'squeezes out')}
${NUM(700, 120, '5', 11)}
<g class="fig-muted">${DOTS([[720, 160], [744, 166], [772, 152], [792, 160], [812, 150]], 2.5)}</g>
${TXT(400, 178, 14, 'rolling, adhering', { a: 'middle' })}
<g class="fig-muted">
<line x1="130" y1="352" x2="283" y2="352" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-inf)"/>
<line x1="325" y1="352" x2="478" y2="352" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-inf)"/>
<line x1="520" y1="352" x2="673" y2="352" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-inf)"/>
<line x1="715" y1="352" x2="868" y2="352" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-inf)"/>
</g>
${NUM(110, 352, '1')}${NUM(305, 352, '2')}${NUM(500, 352, '3')}${NUM(695, 352, '4')}${NUM(890, 352, '5')}
${TXT(110, 388, 17, 'mast cells release', { a: 'middle', b: true })}${TXT(110, 410, 16, 'histamine', { a: 'middle' })}
${TXT(305, 388, 17, 'vasodilation', { a: 'middle', b: true })}${TXT(305, 410, 16, 'redness, heat', { a: 'middle' })}
${TXT(500, 388, 17, 'permeability ↑', { a: 'middle', b: true })}${TXT(500, 410, 16, 'plasma out → swelling', { a: 'middle' })}
${TXT(695, 388, 17, 'diapedesis', { a: 'middle', b: true })}${TXT(695, 410, 16, 'neutrophils exit', { a: 'middle' })}
${TXT(890, 388, 17, 'chemotaxis', { a: 'middle', b: true })}${TXT(890, 410, 16, '→ phagocytosis', { a: 'middle' })}
<g class="fig-muted">${TXT(500, 446, 15, 'fever: IL-1 resets the hypothalamic set point · interferons: infected cells warn their neighbours', { a: 'middle' })}</g>
</svg>`

/* 4 — MHC I vs MHC II as two cells (replace-table, 560×440) */
const mhcSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-im-mhc')}</defs>
${TXT(140, 26, 20, 'MHC I', { a: 'middle', b: true })}
${TXT(420, 26, 20, 'MHC II', { a: 'middle', b: true })}
<g class="fig-muted">
${TXT(140, 46, 13, 'on ALL nucleated cells', { a: 'middle' })}
${TXT(420, 46, 13, 'on professional APCs only', { a: 'middle' })}
</g>
<rect x="24" y="60" width="232" height="224" rx="46" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<rect x="304" y="60" width="232" height="224" rx="46" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2">
<circle cx="74" cy="112" r="9" fill="currentColor"/>
${TXT(90, 108, 13, 'protein MADE INSIDE', { b: true })}
${TXT(90, 126, 12, 'viral · self · tumor (cytosol)')}
<ellipse cx="354" cy="114" rx="12" ry="7" fill="currentColor"/>
${TXT(386, 108, 13, 'microbe EATEN', { b: true })}
${TXT(386, 126, 12, 'endocytosed from outside')}
</g>
<circle cx="354" cy="114" r="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="74" y1="124" x2="110" y2="160" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-mhc)"/>
<line x1="354" y1="140" x2="384" y2="160" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-mhc)"/>
${BOX(62, 164, 156, 28, 'proteasome → peptide', 13)}
${BOX(342, 164, 156, 28, 'vesicle → peptide', 13)}
<line x1="140" y1="194" x2="140" y2="260" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-mhc)"/>
<line x1="420" y1="194" x2="420" y2="260" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-mhc)"/>
<g class="fig-accent">
<rect x="118" y="266" width="44" height="34" rx="6" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2.5"/>
<rect x="398" y="266" width="44" height="34" rx="6" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2.5"/>
<rect x="132" y="314" width="16" height="10" rx="3" fill="currentColor" fill-opacity="0.6"/>
<rect x="412" y="314" width="16" height="10" rx="3" fill="currentColor" fill-opacity="0.6"/>
</g>
${TXT(140, 288, 11, 'MHC I', { a: 'middle', b: true })}
${TXT(420, 288, 11, 'MHC II', { a: 'middle', b: true })}
<g class="fig-accent-2"><circle cx="140" cy="306" r="6" fill="currentColor"/><circle cx="420" cy="306" r="6" fill="currentColor"/></g>
${CELL(140, 360, 34, 0.1)}
${TXT(140, 357, 15, 'CD8⁺', { a: 'middle', b: true })}
${TXT(140, 374, 11, 'cytotoxic T', { a: 'middle' })}
${CELL(420, 360, 34, 0.1)}
${TXT(420, 357, 15, 'CD4⁺', { a: 'middle', b: true })}
${TXT(420, 374, 11, 'helper T', { a: 'middle' })}
${TXT(140, 406, 13, '“this is what I am making”', { a: 'middle' })}
<g class="fig-accent-2">${TXT(140, 424, 13, '→ kill the presenting cell', { a: 'middle', b: true })}</g>
${TXT(420, 406, 13, '“this is what I have eaten”', { a: 'middle' })}
<g class="fig-accent">${TXT(420, 424, 13, '→ send help (cytokines)', { a: 'middle', b: true })}</g>
<g class="fig-muted">${TXT(280, 438, 11, 'hook: 1 × 8 = 8 = 2 × 4', { a: 'middle' })}</g>
</svg>`

/* 5 — Helper T cells: activation, then the Th1 / Th2 fan-out (lead, 1000×460) */
const helperSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-im-th')}</defs>
${TXT(500, 32, 20, 'CD4⁺ helper T cells do not kill — they coordinate both arms with cytokines', { a: 'middle', b: true })}
${CELL(110, 250, 56, 0.1)}
${TXT(110, 246, 17, 'APC', { a: 'middle', b: true })}
${TXT(110, 266, 13, 'dendritic cell', { a: 'middle' })}
<g class="fig-accent"><rect x="160" y="240" width="22" height="20" rx="4" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
<rect x="220" y="244" width="12" height="12" rx="3" fill="currentColor" fill-opacity="0.6"/></g>
<g class="fig-accent-2"><circle cx="188" cy="250" r="6" fill="currentColor"/></g>
<g class="fig-muted">${TXT(196, 322, 13, 'MHC II + peptide', { a: 'middle' })}${TXT(196, 338, 13, 'meets the TCR', { a: 'middle' })}</g>
${CELL(272, 250, 44, 0.1)}
${TXT(272, 246, 14, 'naive', { a: 'middle' })}
${TXT(272, 266, 15, 'CD4⁺ T', { a: 'middle', b: true })}
<line x1="320" y1="250" x2="398" y2="250" stroke="currentColor" stroke-width="3" marker-end="url(#arr-im-th)"/>
${TXT(359, 238, 14, 'activated', { a: 'middle' })}
${CELL(450, 250, 46, 0.14)}
${TXT(450, 246, 17, 'helper T', { a: 'middle', b: true })}
${TXT(450, 266, 13, 'conductor', { a: 'middle' })}
<g class="fig-accent">
<defs>${ARROW('arr-im-th-b')}</defs>
<path d="M486 224 L586 142" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-im-th-b)"/>
${CELL(630, 120, 44, 0.12, 3)}
${TXT(630, 128, 22, 'Th1', { a: 'middle', b: true })}
${TXT(630, 58, 17, 'CELL-MEDIATED', { a: 'middle', b: true })}
<path d="M672 106 L728 98" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-im-th-b)"/>
<path d="M672 134 L728 170" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-im-th-b)"/>
${CELL(762, 94, 28, 0.1)}
${CELL(762, 176, 28, 0.1)}
${TXT(762, 90, 12, 'macro-', { a: 'middle', b: true })}
${TXT(762, 106, 12, 'phage', { a: 'middle', b: true })}
${TXT(762, 181, 12, 'CD8⁺ T', { a: 'middle', b: true })}
</g>
${TXT(802, 90, 15, 'activates macrophages')}
<g class="fig-muted">${TXT(802, 110, 13, 'kill what they have eaten')}</g>
${TXT(802, 172, 15, 'supports CD8⁺ killers')}
<g class="fig-muted">${TXT(802, 192, 13, 'intracellular pathogens')}</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-im-th-r')}</defs>
<path d="M486 276 L586 358" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-im-th-r)"/>
${CELL(630, 340, 42, 0.12, 3)}
${TXT(630, 348, 22, 'Th2', { a: 'middle', b: true })}
${TXT(630, 412, 17, 'HUMORAL', { a: 'middle', b: true })}
<path d="M674 340 L730 340" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-im-th-r)"/>
${CELL(762, 340, 28, 0.1)}
${TXT(762, 345, 13, 'B cell', { a: 'middle', b: true })}
<path d="M792 340 L826 340" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-im-th-r)"/>
${AB(846, 352, 9)}${AB(872, 346, 9)}${AB(898, 356, 9)}
</g>
${TXT(802, 298, 15, 'B cells → antibody')}
<g class="fig-muted">${TXT(802, 318, 13, 'class switching, memory')}</g>
${TXT(802, 392, 14, 'parasites, allergy (IgE)')}
<g class="fig-muted">${DOTS([[520, 196], [540, 180], [560, 164], [520, 304], [540, 320], [560, 336]], 3.5)}
${TXT(560, 254, 14, 'cytokines', { a: 'middle' })}</g>
<g class="fig-accent-2">
<circle cx="330" cy="376" r="11" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
${DOTS([[330, 362], [344, 376], [330, 390], [316, 376], [340, 366], [340, 386], [320, 366], [320, 386]], 2)}
<path d="M342 366 L418 290" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#arr-im-th-r)"/>
${TXT(40, 424, 17, 'HIV destroys CD4⁺ helpers → BOTH arms fail;', { b: true })}
${TXT(40, 448, 17, 'the CD4 count predicts collapse', { b: true })}
${TXT(362, 382, 14, 'HIV', { b: true })}
</g>
</svg>`

/* 6 — Antibody architecture: the Y, drawn from its geometry (lead, 1000×460) */
const antibodySvg = (() => {
  const HX = 330 // axis of symmetry
  const hinge = 262
  const bottom = 430
  const tipL: [number, number] = [190, 118]
  const heavyL0: [number, number] = [HX - 10, hinge]
  const dir = [tipL[0] - heavyL0[0], tipL[1] - heavyL0[1]]
  const len = Math.hypot(dir[0], dir[1])
  const u = [dir[0] / len, dir[1] / len]
  const n = [-u[1], u[0]] // outward (left-down) normal for the left arm
  const off = 26
  const at = (t: number): [number, number] => [heavyL0[0] + dir[0] * t, heavyL0[1] + dir[1] * t]
  const shift = (p: [number, number]): [number, number] => [p[0] + n[0] * off, p[1] + n[1] * off]
  const varLen = 64
  const hv = at(1 - varLen / len) // heavy variable starts
  const l0 = shift(at(0.28))
  const lTip = shift(tipL)
  const lLen = Math.hypot(lTip[0] - l0[0], lTip[1] - l0[1])
  const lt = 1 - varLen / lLen
  const lv: [number, number] = [l0[0] + (lTip[0] - l0[0]) * lt, l0[1] + (lTip[1] - l0[1]) * lt]
  const M = (p: [number, number]): [number, number] => [2 * HX - p[0], p[1]]
  const seg = (a: [number, number], b: [number, number], w: number) =>
    `<path d="M${f(a[0])} ${f(a[1])} L${f(b[0])} ${f(b[1])}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round"/>`
  const bondA = at(0.46)
  const bondB = shift(at(0.46))
  const antigenL: [number, number] = [tipL[0] + n[0] * off * 0.5 + u[0] * 30, tipL[1] + n[1] * off * 0.5 + u[1] * 30]
  const epiL: [number, number] = [tipL[0] + n[0] * off * 0.5 + u[0] * 10, tipL[1] + n[1] * off * 0.5 + u[1] * 10]
  const antigenR = M(antigenL)
  const epiR = M(epiL)
  return `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent">
${seg([HX - 10, bottom], [HX - 10, hinge], 14)}${seg([HX + 10, bottom], [HX + 10, hinge], 14)}
${seg(heavyL0, hv, 14)}${seg(M(heavyL0), M(hv), 14)}
${seg(l0, lv, 10)}${seg(M(l0), M(lv), 10)}
</g>
<g class="fig-accent-2">
${seg(hv, tipL, 14)}${seg(M(hv), M(tipL), 14)}
${seg(lv, lTip, 10)}${seg(M(lv), M(lTip), 10)}
</g>
<line x1="${HX - 4}" y1="278" x2="${HX + 4}" y2="278" stroke="currentColor" stroke-width="3"/>
<line x1="${HX - 4}" y1="294" x2="${HX + 4}" y2="294" stroke="currentColor" stroke-width="3"/>
${seg(bondA, bondB, 3)}${seg(M(bondA), M(bondB), 3)}
<circle cx="${f(antigenL[0])}" cy="${f(antigenL[1])}" r="24" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
<circle cx="${f(antigenR[0])}" cy="${f(antigenR[1])}" r="24" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
<g class="fig-accent-2"><circle cx="${f(epiL[0])}" cy="${f(epiL[1])}" r="8" fill="currentColor"/><circle cx="${f(epiR[0])}" cy="${f(epiR[1])}" r="8" fill="currentColor"/>
${TXT(60, 128, 15, 'epitope', { b: true })}</g>
${TXT(antigenL[0] - 30, antigenL[1] - 34, 15, 'antigen')}
${TXT(antigenR[0] + 30, antigenR[1] - 34, 15, 'antigen', { a: 'end' })}
<path d="M126 112 L118 112 L118 244 L126 244" fill="none" stroke="currentColor" stroke-width="2"/>
${TXT(82, 172, 24, 'Fab', { a: 'middle', b: true })}
${TXT(82, 194, 14, 'the arm', { a: 'middle' })}
<path d="M${HX - 44} 306 L${HX - 52} 306 L${HX - 52} 430 L${HX - 44} 430" fill="none" stroke="currentColor" stroke-width="2"/>
${TXT(HX - 66, 364, 24, 'Fc', { a: 'end', b: true })}
${TXT(HX - 66, 386, 14, 'the stem', { a: 'end' })}
<g class="fig-muted">
${TXT(HX + 26, 262, 14, 'hinge')}
${TXT(HX + 26, 292, 14, 'S–S bonds')}
${TXT(HX + 26, 380, 14, 'heavy chains')}
${TXT(HX + 26, 398, 14, 'only')}
${TXT(248, 240, 13, 'light', { a: 'end' })}
${TXT(248, 256, 13, 'chain', { a: 'end' })}
</g>
<g class="fig-accent-2"><rect x="560" y="48" width="22" height="14" rx="3" fill="currentColor"/></g>
${TXT(592, 60, 19, 'Variable domains (V) — the tips', { b: true })}
${TXT(592, 86, 16, 'heavy V + light V form one binding site')}
${TXT(592, 108, 16, '2 arms → 2 identical sites per monomer')}
<g class="fig-accent"><rect x="560" y="140" width="22" height="14" rx="3" fill="currentColor"/></g>
${TXT(592, 152, 19, 'Constant domains (C)', { b: true })}
${TXT(592, 178, 16, 'the heavy-chain C region is the Fc stem')}
${TXT(592, 200, 16, 'it sets the ISOTYPE and what happens next:')}
${TXT(592, 222, 14, 'Fc receptors on phagocytes · complement · placenta')}
<g class="fig-muted">${TXT(592, 262, 15, '2 heavy + 2 light chains · disulfide-linked')}</g>
${BOX(560, 300, 400, 120)}
<g class="fig-accent-2">${TXT(760, 346, 20, 'Variable = WHAT is bound', { a: 'middle', b: true })}</g>
<g class="fig-accent">${TXT(760, 390, 20, 'Constant = WHAT HAPPENS next', { a: 'middle', b: true })}</g>
</svg>`
})()

/* 7 — The five isotypes as icon tiles (replace-table, 560×440) */
const TILE = (x: number, y: number, w = 176, h = 204) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>`
const PENTAMER = (cx: number, cy: number) => {
  let s = ''
  for (let k = 0; k < 5; k++) {
    const deg = k * 72
    const rad = (deg * Math.PI) / 180
    s += AB(cx + 7 * Math.sin(rad), cy - 7 * Math.cos(rad), 15, deg, 3)
  }
  return s + `<circle cx="${cx}" cy="${cy}" r="4" fill="currentColor"/>`
}
const isotypesSvg = (() => {
  const tiles: [number, number][] = [[8, 8], [192, 8], [376, 8], [8, 222], [192, 222]]
  const titles = ['IgM', 'IgG', 'IgA', 'IgE', 'IgD']
  const lines = [
    ['pentamer — 10 binding sites', 'FIRST antibody of a', 'primary response', 'agglutinates · complement'],
    ['monomer — most abundant', 'in serum', 'opsonizes, neutralizes', 'the ONLY placental Ig'],
    ['dimer (secretory)', 'mucosal surfaces:', 'saliva, tears, gut', 'breast milk'],
    ['monomer, bound to', 'mast cells / basophils', 'allergy (type I)', 'anti-parasite'],
    ['monomer, membrane-bound', 'BCR on naive B cells', '(with monomeric IgM)', ''],
  ]
  let s = `${SVG_OPEN} viewBox="0 0 560 440">`
  tiles.forEach(([x, y], i) => {
    const cx = x + 88
    const cy = y + 80
    s += `<g class="fig-muted">${TILE(x, y)}</g>`
    s += TXT(cx, y + 26, 18, titles[i], { a: 'middle', b: true })
    let icon = ''
    if (i === 0) icon = PENTAMER(cx, cy)
    if (i === 1) icon = AB(cx, cy + 28, 30)
    if (i === 2) icon = AB(cx - 4, cy, 22, -90) + AB(cx + 4, cy, 22, 90) + `<rect x="${cx - 3}" y="${cy - 10}" width="6" height="20" rx="2" fill="currentColor"/>`
    if (i === 3) icon = AB(cx, cy - 2, 16)
    if (i === 4) icon = AB(cx - 18, cy + 20, 18)
    s += `<g class="fig-accent">${icon}</g>`
    if (i === 3) {
      s += CELL(cx, cy + 18, 20, 0.1) + `<g class="fig-accent-2">${DOTS([[cx - 9, cy + 12], [cx + 7, cy + 10], [cx - 2, cy + 26], [cx + 10, cy + 24], [cx - 12, cy + 26]], 3)}</g>`
      s += `<g class="fig-muted">${TXT(cx + 28, cy + 22, 11, 'mast cell')}</g>`
    }
    if (i === 4) {
      s += `<line x1="${cx - 60}" y1="${cy + 20}" x2="${cx + 60}" y2="${cy + 20}" stroke="currentColor" stroke-width="3"/>`
      s += `<g class="fig-muted">${AB(cx + 22, cy + 20, 14)}${TXT(cx, cy + 40, 11, 'naive B-cell membrane', { a: 'middle' })}${TXT(cx + 22, cy - 12, 10, 'IgM', { a: 'middle' })}</g>`
    }
    if (i === 0) s += `<g class="fig-muted">${TXT(cx + 40, cy + 4, 10, 'J chain')}</g>`
    if (i === 2) s += `<g class="fig-muted">${TXT(cx, cy + 36, 10, 'J chain', { a: 'middle' })}</g>`
    lines[i].forEach((l, k) => {
      if (l) s += TXT(cx, y + 136 + k * 19, 12.5, l, { a: 'middle', b: k === 0 })
    })
  })
  s += `<g class="fig-muted">${TILE(376, 222)}</g>`
  s += TXT(464, 252, 14, 'Class switching', { a: 'middle', b: true })
  s += TXT(464, 272, 12, 'new heavy-chain C region', { a: 'middle' })
  s += TXT(464, 290, 12, 'IgM → IgG, IgA or IgE', { a: 'middle' })
  s += TXT(464, 308, 12, 'same V region, same target', { a: 'middle' })
  s += `<g class="fig-accent-2">${TXT(464, 344, 14, 'Fc stem sets the job:', { a: 'middle', b: true })}</g>`
  s += TXT(464, 366, 12, 'placenta: IgG only', { a: 'middle' })
  s += TXT(464, 384, 12, 'mucosa IgA · mast cell IgE', { a: 'middle' })
  s += TXT(464, 402, 12, 'first responder: IgM', { a: 'middle' })
  s += '</svg>'
  return s
})()

/* 8 — Primary vs secondary response: illustrative titer curves (after, 1000×460) */
const rsx = (t: number) => 80 + 44 * t // weeks 0 … 20
const rsy = (v: number) => 400 - 330 * v
const bump = (t0: number, p: number, k: number, h: number) => (t: number) => {
  if (t <= t0) return 0
  const r = (t - t0) / p
  return h * Math.pow(r, k) * Math.exp(k * (1 - r))
}
const secondaryIgG = (t: number) => {
  const t0 = 11
  if (t <= t0) return 0
  const rise = Math.pow(1 - Math.exp(-(t - t0) / 0.7), 2)
  const level = 0.62 + 0.38 * Math.exp(-Math.max(0, t - t0 - 2.2) / 5)
  return 0.92 * rise * level
}
const responseSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-im-resp')}</defs>
<line x1="80" y1="400" x2="968" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-resp)"/>
<line x1="80" y1="400" x2="80" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-resp)"/>
${TXT(940, 426, 16, 'time (weeks)', { a: 'end' })}
${TXT(92, 48, 16, 'antibody titer (log scale)')}
<g class="fig-muted">
<line x1="${rsx(1)}" y1="400" x2="${rsx(1)}" y2="96" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>
<line x1="${rsx(11)}" y1="400" x2="${rsx(11)}" y2="96" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>
<path d="M${rsx(1)} 386 L${rsx(2.5)} 386" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="${rsx(1)}" y1="380" x2="${rsx(1)}" y2="392" stroke="currentColor" stroke-width="2"/>
<line x1="${rsx(2.5)}" y1="380" x2="${rsx(2.5)}" y2="392" stroke="currentColor" stroke-width="2"/>
</g>
${TXT(rsx(1) + 8, 84, 16, '1st exposure', { b: true })}
<g class="fig-muted">${TXT(rsx(1) + 8, 102, 13, '(or a vaccine)')}</g>
${TXT(rsx(11) + 8, 84, 16, '2nd exposure', { b: true })}
<g class="fig-muted">${TXT(rsx(11) + 8, 102, 13, '(the real pathogen)')}</g>
${TXT(rsx(1.75), 426, 14, 'lag 1–2 wk', { a: 'middle' })}
${TXT(rsx(11.6), 426, 14, 'days', { a: 'middle', b: true })}
<g class="fig-accent-2">
<polyline points="${CURVE(bump(1, 2.6, 3, 0.34), 1, 20, 120, rsx, rsy)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<polyline points="${CURVE(bump(11, 1.8, 3, 0.22), 11, 20, 120, rsx, rsy)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
${TXT(rsx(3.6), rsy(0.34) - 14, 16, 'IgM first', { a: 'middle', b: true })}
${TXT(rsx(13.4), rsy(0.22) + 24, 15, 'little IgM', { b: true })}
</g>
<g class="fig-accent">
<polyline points="${CURVE(bump(1.8, 3.6, 2.2, 0.28), 1.8, 20, 120, rsx, rsy)}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-dasharray="9 5"/>
<polyline points="${CURVE(secondaryIgG, 11, 20, 160, rsx, rsy)}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-dasharray="9 5"/>
${TXT(rsx(6.2), rsy(0.28) - 10, 16, 'then some IgG', { b: true })}
${TXT(rsx(13.6), 222, 17, 'high-affinity IgG:', { b: true })}
${TXT(rsx(13.6), 246, 16, 'faster, far higher, longer-lasting', { b: true })}
</g>
<g class="fig-muted">${TXT(rsx(6.5), 256, 14, 'memory B cells persist')}</g>
<line x1="60" y1="446" x2="94" y2="446" stroke="currentColor" stroke-width="3.5" class="fig-accent-2"/>
${TXT(102, 451, 14, 'IgM')}
<g class="fig-accent"><line x1="150" y1="446" x2="184" y2="446" stroke="currentColor" stroke-width="3.5" stroke-dasharray="9 5"/></g>
${TXT(192, 451, 14, 'IgG')}
<g class="fig-muted">${TXT(960, 451, 14, 'curve shapes illustrative — not data', { a: 'end' })}</g>
</svg>`

/* 9 — Four hypersensitivity types as a 2×2 of mechanisms (replace-table, 560×440) */
const hyperSvg = (() => {
  const tiles: [number, number][] = [[8, 8], [282, 8], [8, 228], [282, 228]]
  const W = 270
  const heads = ['Type I — IgE', 'Type II — antibody vs cells', 'Type III — immune complexes', 'Type IV — T cells, no antibody']
  const subs = ['minutes · IgE on mast cells / basophils', 'minutes to days · cell-surface antigens', 'hours (local) to 1–2 wk (serum sickness)', 'DELAYED 2–3 days · T cells recruited first']
  const ex = [
    ['allergic rhinitis, asthma, anaphylaxis', 'sensitize, then re-exposure cross-links'],
    ['hemolytic disease of the newborn (Rh)', 'transfusion reactions'],
    ['serum sickness, lupus nephritis', 'the lag = time to MAKE the antibody'],
    ['TB skin test, poison ivy dermatitis', 'the only antibody-INDEPENDENT type'],
  ]
  let s = `${SVG_OPEN} viewBox="0 0 560 440"><defs>${ARROW('arr-im-hs')}</defs>`
  tiles.forEach(([x, y], i) => {
    const cx = x + W / 2
    const cy = y + 108
    s += `<g class="fig-muted">${TILE(x, y, W, 204)}</g>`
    s += TXT(cx, y + 26, 15, heads[i], { a: 'middle', b: true })
    s += `<g class="fig-muted">${TXT(cx, y + 45, 12, subs[i], { a: 'middle' })}</g>`
    if (i === 0) {
      s += `<g class="fig-accent">${CELL(cx - 44, cy + 10, 30, 0.1)}${AB(cx - 54, cy - 18, 12, 0, 3)}${AB(cx - 34, cy - 18, 12, 0, 3)}</g>`
      s += `<g class="fig-accent-2">${DOTS([[cx - 54, cy + 6], [cx - 38, cy + 2], [cx - 46, cy + 20], [cx - 30, cy + 18], [cx - 60, cy + 22]], 3)}`
      s += `<circle cx="${cx - 44}" cy="${cy - 43}" r="7" fill="currentColor"/>`
      s += DOTS([[cx + 2, cy + 2], [cx + 16, cy - 8], [cx + 20, cy + 14], [cx + 32, cy + 2], [cx + 8, cy + 20]], 3.5)
      s += TXT(cx + 44, cy + 6, 12, 'histamine', { b: true }) + '</g>'
      s += `<g class="fig-muted">${TXT(cx - 30, cy - 48, 10, 'allergen bridges 2 IgE')}${TXT(cx - 80, cy + 14, 11, 'mast cell', { a: 'end' })}</g>`
    }
    if (i === 1) {
      const rx = cx - 40
      const ry = cy + 4
      s += `<g class="fig-accent-2">${CELL(rx, ry, 24, 0.3)}</g>`
      s += '<g class="fig-accent">'
      for (const a of [-70, 0, 70]) {
        const rad = (a * Math.PI) / 180
        s += AB(rx + 24 * Math.sin(rad), ry - 24 * Math.cos(rad), 10, a, 3)
      }
      s += '</g>'
      s += `<line x1="${cx + 2}" y1="${ry}" x2="${cx + 30}" y2="${ry}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-hs)"/>`
      s += TXT(cx + 38, ry - 10, 12, 'complement +') + TXT(cx + 38, ry + 6, 12, 'Fc phagocytes') + TXT(cx + 38, ry + 22, 12, 'destroy the cell', { b: true })
      s += `<g class="fig-muted">${TXT(rx, ry + 44, 11, 'red cell with antigen', { a: 'middle' })}</g>`
    }
    if (i === 2) {
      s += `<g class="fig-accent">${AB(cx - 70, cy - 12, 8, 30, 2.5)}${AB(cx - 50, cy - 24, 8, -40, 2.5)}${AB(cx - 30, cy - 10, 8, 100, 2.5)}${AB(cx - 58, cy + 2, 8, 200, 2.5)}</g>`
      s += `<g class="fig-accent-2">${DOTS([[cx - 62, cy - 22], [cx - 42, cy - 30], [cx - 36, cy - 6], [cx - 54, cy - 8], [cx - 70, cy - 2]], 3.5)}</g>`
      s += `<line x1="${cx - 50}" y1="${cy + 10}" x2="${cx - 50}" y2="${cy + 34}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-hs)"/>`
      s += `<rect x="${cx - 110}" y="${cy + 38}" width="120" height="14" rx="3" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5"/>`
      s += `<g class="fig-muted">${TXT(cx + 18, cy + 50, 11, 'vessel wall · kidney · joint')}</g>`
      s += TXT(cx + 20, cy - 18, 12, 'soluble Ag–Ab') + TXT(cx + 20, cy - 2, 12, 'lattices deposit') + TXT(cx + 20, cy + 16, 12, '→ complement,', { b: true }) + TXT(cx + 20, cy + 32, 12, 'inflammation', { b: true })
    }
    if (i === 3) {
      s += `<g class="fig-accent">${CELL(cx - 70, cy + 4, 22, 0.14)}${TXT(cx - 70, cy + 10, 16, 'T', { a: 'middle', b: true })}</g>`
      s += `<line x1="${cx - 44}" y1="${cy + 4}" x2="${cx - 2}" y2="${cy + 4}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-hs)"/>`
      s += `<g class="fig-muted">${DOTS([[cx - 32, cy - 4], [cx - 22, cy + 12], [cx - 14, cy - 2]], 2.5)}${TXT(cx - 23, cy - 14, 10, 'cytokines', { a: 'middle' })}</g>`
      s += CELL(cx + 24, cy + 4, 24, 0.1) + TXT(cx + 24, cy + 1, 11, 'macro-', { a: 'middle', b: true }) + TXT(cx + 24, cy + 13, 11, 'phage', { a: 'middle', b: true })
      s += `<line x1="${cx + 52}" y1="${cy + 4}" x2="${cx + 78}" y2="${cy + 4}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-im-hs)"/>`
      s += `<g class="fig-accent-2">${TXT(cx + 84, cy + 9, 12, 'damage', { b: true })}</g>`
      s += `<g class="fig-muted">${AB(cx + 92, cy - 30, 8, 0, 2.5)}</g>`
      s += `<g class="fig-accent-2"><line x1="${cx + 82}" y1="${cy - 50}" x2="${cx + 102}" y2="${cy - 26}" stroke="currentColor" stroke-width="2.5"/><line x1="${cx + 102}" y1="${cy - 50}" x2="${cx + 82}" y2="${cy - 26}" stroke="currentColor" stroke-width="2.5"/></g>`
      s += `<g class="fig-muted">${TXT(cx - 70, cy + 44, 11, 'sensitized T cell', { a: 'middle' })}</g>`
    }
    s += TXT(cx, y + 176, 12, ex[i][0], { a: 'middle' }) + TXT(cx, y + 194, 12, ex[i][1], { a: 'middle' })
  })
  return s + '</svg>'
})()

export const mcatImmunologyFigures: DeckFigurePlacement[] = [
  {
    at: 'Innate vs. Adaptive',
    mode: 'replace-table',
    figure: {
      svg: innateSvg,
      alt:
        'Two columns, innate (blue) and adaptive (red), compared row by row. Speed: a short bar, minutes to hours, against a long bar, days on first exposure. Specificity: a TLR receptor accepts three different shapes — any PAMP such as LPS, flagellin or dsRNA — while a BCR/TCR accepts one shape only, a single epitope that one clone fits. Receptors: one fixed, germline-encoded TLR gene identical in every cell, against V, D and J segments shuffled into a new VDJ receptor per clone. Memory: two identical small bumps (none — every exposure looks new) against a small first bump and a much taller second one (faster, stronger second response). Cells: neutrophil, macrophage, NK and dendritic cells against B and T lymphocytes.',
      caption: 'Innate vs adaptive: fixed pattern receptors and no memory, against rearranged single-epitope receptors that remember.',
    },
    blocks: [
      '- **Innate**: minutes to hours; germline PRRs (TLRs) read broad PAMPs; no memory',
      '- **Adaptive**: days on first exposure; one epitope per somatically rearranged BCR/TCR',
      '- **Memory** is the adaptive difference — the second response is faster and stronger',
      '- Cells: neutrophils, macrophages, NK, dendritic cells vs. B and T lymphocytes',
    ],
  },
  {
    at: 'Complement',
    mode: 'lead',
    figure: {
      svg: complementSvg,
      alt:
        'Two entry boxes on the left — the classical pathway, started by antibody already bound to antigen (links to adaptive immunity), and the alternative pathway, which fires spontaneously on microbial surfaces with no antibody (purely innate) — both arrow into a central hub box, C3, which is cleaved to C3a + C3b. From the hub three arrows lead to numbered outcomes: 1 opsonization — C3b dots coat a red microbe, which a phagocyte then takes up; 2 the membrane attack complex — terminal components form a pore through the pathogen membrane and the cell lyses; 3 anaphylatoxins — C3a and C5a amplify inflammation and recruit phagocytes, C5a being a strong neutrophil chemoattractant.',
      caption: 'Complement: antibody-triggered or spontaneous activation converges on C3, then opsonizes, lyses, and inflames.',
    },
    blocks: [
      '- Classical (antibody-bound antigen) and alternative (microbial surface, innate) routes both cleave **C3**',
      '- Three outcomes: **C3b opsonization**, the lytic **MAC**, and **anaphylatoxins** (C3a, C5a) that inflame',
    ],
  },
  {
    at: 'Inflammation, Fever',
    mode: 'lead',
    figure: {
      svg: inflamSvg,
      alt:
        'A blood vessel runs across the picture under tissue; a red splinter with bacteria has entered the tissue at the upper right. Numbered events: 1 a mast cell near the wound releases red histamine dots; 2 the vessel widens downstream (vasodilation); 3 the right half of the vessel wall is drawn dashed and blue arrows carry plasma out through it (permeability up); 4 a neutrophil that was rolling along the wall squeezes between endothelial cells (diapedesis); 5 in the tissue it follows a dotted chemical gradient toward the bacteria (chemotaxis) to phagocytose them. A row of five labelled steps underneath reads: mast cells release histamine; vasodilation — redness, heat; permeability up — plasma out, swelling; diapedesis — neutrophils exit; chemotaxis — phagocytosis. Footer: fever is IL-1 resetting the hypothalamic set point; interferons are infected cells warning their neighbours.',
      caption: 'The inflammation cascade read left to right: histamine, dilate, leak, exit the vessel, follow the gradient, eat.',
    },
    blocks: [
      '- Histamine → **vasodilation** (red, hot) + **permeability** (swelling) → **diapedesis** → **chemotaxis**',
      '- Fever: IL-1 resets the hypothalamic set point · Interferons: infected cells warn their neighbours',
    ],
  },
  {
    at: 'MHC I vs. MHC II',
    mode: 'replace-table',
    figure: {
      svg: mhcSvg,
      alt:
        'Two cells side by side. Left, MHC I on any nucleated cell: a protein made inside the cell (viral, self or tumor, in the cytosol) goes to the proteasome, the peptide is loaded on MHC I at the surface and shown to a CD8⁺ cytotoxic T cell — “this is what I am making” — which kills the presenting cell. Right, MHC II on professional APCs only: a microbe eaten from outside is broken down in a vesicle, its peptide is loaded on MHC II and shown to a CD4⁺ helper T cell — “this is what I have eaten” — which sends help as cytokines. Memory hook: 1 × 8 = 8 = 2 × 4.',
      caption: 'MHC I shows what the cell is making to CD8⁺ killers; MHC II shows what an APC has eaten to CD4⁺ helpers.',
    },
    blocks: [
      '- **MHC I** — ALL nucleated cells; ENDOGENOUS (cytosolic) peptide → **CD8⁺** cytotoxic T',
      '- **MHC II** — professional APCs only; EXOGENOUS (eaten) peptide → **CD4⁺** helper T',
      '- Hook: MHC I × CD8 = MHC II × CD4 = 8',
      '- “What I am making” invites killing; “what I have eaten” recruits help',
    ],
  },
  {
    at: 'Helper T Cells',
    mode: 'lead',
    figure: {
      svg: helperSvg,
      alt:
        'Left to right: a dendritic cell (APC) presents peptide on MHC II to a naive CD4⁺ T cell, which becomes an activated helper T cell, the conductor. From it two arrows fan out with cytokine dots. Up, blue: Th1 — the cell-mediated arm — activates macrophages (which kill what they have eaten) and supports CD8⁺ killers against intracellular pathogens. Down, red: Th2 — the humoral arm — helps B cells make antibody (class switching, memory) for parasites and allergy (IgE); three small Y-shaped antibodies leave the B cell. A red HIV particle points at the helper cell: HIV destroys CD4⁺ helpers, so both arms fail and the CD4 count predicts collapse.',
      caption: 'Helper T cells conduct both arms: Th1 drives macrophages and killers, Th2 drives antibody — lose them (HIV) and both fall.',
    },
    blocks: [
      '- **Th1** → cell-mediated: activates macrophages, supports CD8⁺ T cells (intracellular pathogens)',
      '- **Th2** → humoral: B cells make antibody (parasites, allergy) · HIV kills CD4⁺ → BOTH arms collapse',
    ],
  },
  {
    at: 'Antibody Architecture',
    mode: 'lead',
    figure: {
      svg: antibodySvg,
      alt:
        'A large Y-shaped antibody. Two thick heavy chains run up the stem and out along both arms; two thinner light chains lie along the outside of the arms. The tips of all four chains are red (variable domains) and the rest blue (constant domains). Short bars mark disulfide bonds between the heavy chains at the hinge and between each heavy and light chain. At each tip a red epitope on a dashed antigen circle is bound — two identical sites. Brackets label the arm Fab and the stem Fc (heavy chains only). Right-hand notes: variable domains at the tips — heavy V plus light V form one binding site, two arms give two identical sites; constant domains — the heavy-chain C region is the Fc stem and sets the isotype and what happens next (Fc receptors on phagocytes, complement, placenta); 2 heavy + 2 light chains, disulfide-linked. Boxed: Variable = WHAT is bound; Constant = WHAT HAPPENS next.',
      caption: 'Antibody architecture: variable tips decide what is bound, the constant Fc stem decides what happens next.',
    },
    blocks: [
      '- 2 heavy + 2 light chains, disulfide-linked; **Fab** tips (variable) bind the epitope — 2 identical sites',
      '- **Fc** stem = heavy-chain constant region → isotype, Fc receptors, complement, placental transfer',
    ],
  },
  {
    at: 'The Five Isotypes',
    mode: 'replace-table',
    figure: {
      svg: isotypesSvg,
      alt:
        'Six tiles. IgM: five Y shapes joined at a central J chain into a pentamer — 10 binding sites, the first antibody of a primary response, agglutinates and fixes complement. IgG: a single Y — monomer, most abundant in serum, opsonizes and neutralizes, the only class that crosses the placenta. IgA: two Ys joined tail to tail — a secretory dimer for mucosal surfaces (saliva, tears, gut) and breast milk. IgE: a Y standing on a mast cell full of red granules — bound to mast cells and basophils, allergy (type I) and anti-parasite. IgD: a Y standing on a naive B-cell membrane beside a smaller monomeric IgM — the membrane-bound B-cell receptor. The sixth tile notes class switching swaps the heavy-chain constant region (IgM to IgG, IgA or IgE) while keeping the V region, and that the Fc stem is the isotype’s job: placenta IgG only, mucosa IgA, mast cells IgE, first responder IgM.',
      caption: 'The five isotypes by shape and job; the constant region — not the binding site — is what changes between them.',
    },
    blocks: [
      '- **IgM** pentamer — first in a primary response; agglutinates, activates complement',
      '- **IgG** monomer — most abundant; opsonizes, neutralizes; the ONLY one across the placenta',
      '- **IgA** dimer — mucosal surfaces and breast milk · **IgE** — mast cells, allergy, parasites',
      '- **IgD** — membrane BCR on naive B cells (with monomeric IgM)',
    ],
  },
  {
    at: 'Primary vs. Secondary Response',
    mode: 'after',
    figure: {
      svg: responseSvg,
      alt:
        'Antibody titer on a log scale against time in weeks. After a first exposure (or a vaccine) there is a lag of one to two weeks, then a modest red IgM peak followed by a smaller, dashed blue IgG peak; both decline while memory B cells persist. After a second exposure (the real pathogen) at week 11, high-affinity IgG rises within days to a far higher level and stays high for the rest of the plot; only a little IgM is made. Legend: red solid IgM, blue dashed IgG; curve shapes are illustrative, not data.',
      caption: 'Primary vs secondary response (illustrative): a slow IgM-first primary, then a fast, high, lasting IgG secondary — the logic of vaccination.',
    },
    blocks: [
      '- Primary: 1–2 week lag, modest peak, **IgM first**; secondary: days, far higher, **high-affinity IgG**',
      '- Vaccination pays the slow primary response against a harmless preparation',
    ],
  },
  {
    at: 'Hypersensitivity',
    mode: 'replace-table',
    figure: {
      svg: hyperSvg,
      alt:
        'A 2×2 grid of mechanisms. Type I — IgE, minutes: an allergen bridges two IgE molecules on a granule-filled mast cell, which bursts out histamine; allergic rhinitis, asthma, anaphylaxis — sensitize first, then re-exposure cross-links. Type II — antibody vs cells, minutes to days: antibodies bound to a red cell’s surface antigens bring complement and Fc phagocytes that destroy the cell; hemolytic disease of the newborn (Rh), transfusion reactions. Type III — immune complexes, hours to 1–2 weeks: soluble antigen–antibody lattices deposit on a vessel wall, kidney or joint and trigger complement and inflammation; serum sickness, lupus nephritis — the lag is the time to make the antibody. Type IV — T cells, no antibody, delayed 2–3 days: a sensitized T cell releases cytokines that activate a macrophage, which damages tissue; a crossed-out antibody marks it as the only antibody-independent type; TB skin test, poison ivy dermatitis.',
      caption: 'The four hypersensitivity types: who mediates (IgE, antibody on cells, complexes, T cells) sets how fast it happens.',
    },
    blocks: [
      '- **I** IgE on mast cells — minutes (allergic rhinitis, asthma, anaphylaxis)',
      '- **II** antibody vs cell-surface antigen — HDN (Rh), transfusion reactions',
      '- **III** soluble immune complexes deposit — serum sickness (1–2 wk lag), lupus nephritis',
      '- **IV** T cells, no antibody — DELAYED 2–3 days (TB skin test, poison ivy)',
    ],
  },
]
