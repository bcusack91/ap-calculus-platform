import type { DeckFigurePlacement } from './index'

/**
 * Functional Groups & Nomenclature (MCAT C/P) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (a gallery of generic
 * R-group skeletons, look-alike pairs built on one skeleton, substituent
 * counting on C and N, ring / π tiles, H-bond donor–acceptor pairs, bars of
 * the lesson's boiling points, a pKa ladder with a pH 7.4 line, an induction
 * picture, a lone-pair availability row) — no textbook, prep-company or AAMC
 * figure was copied. The only numbers drawn are the ones the lesson states
 * (boiling points 118 / 97 / 49 °C and 163 / 117 / 55 / 36 / 9 °C, the pKa
 * table, acetic 4.8 / trichloroacetic 0.7 / trifluoroacetic 0.2, pyridinium
 * 5.2, alkylammonium 10–11, the DoU formula and its C₇H₇NO₂ and C₄H₈O
 * examples). Force-strength bars are illustrative and say so.
 *
 * STRUCTURES: generic skeletons use R / R′ / R″ text labels (valence checked:
 * every vertex carbon has four bonds counting implicit H). The only specific
 * molecules drawn as structures are tert-butylamine, cyclohexane (as "a
 * ring"), benzene, 2-butene (as "a C=C"), acetone (as "a C=O"), pyridine and
 * pyrrole — all ≤ 6 heavy atoms. Aniline and the chlorobutanoic acids are
 * written as condensed formulas, not drawn.
 *
 * Colours: the functional group / "free lone pair" / basic BLUE (fig-accent),
 * the tell that separates a look-alike pair / electron-withdrawing pull /
 * non-basic RED (fig-accent-2), frames and asides grey (fig-muted), R groups
 * and plain text in the text colour.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same coloured group.
 * Marker ids are unique per figure (arr-fg-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A text element rotated −90° about its own anchor (reads bottom-to-top). */
const TV = (x: number, y: number, size: number, text: string, weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''} text-anchor="middle" transform="rotate(-90 ${x} ${y})" fill="currentColor">${text}</text>`

/** A rounded box outlined in the current colour; `fillOpacity` > 0 tints it with the same colour. */
const BOX = (x: number, y: number, w: number, h: number, rx = 12, sw = 2, fillOpacity = 0) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} stroke-linecap="round"/>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-end="url(#${marker})"/>`

/** A curved (electron-flow) arrow: a cubic path ending in the given marker. */
const CARR = (d: string, marker: string, sw = 2.5) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" marker-end="url(#${marker})"/>`

/** Wrap content in a theme-class group. */
const G = (cls: string, inner: string) => `<g class="${cls}">${inner}</g>`

/** A lone pair: two small dots centred at (x, y), side by side (`horizontal`) or stacked. */
const LP = (x: number, y: number, horizontal = true) =>
  horizontal
    ? `<circle cx="${x - 4.5}" cy="${y}" r="2.8" fill="currentColor"/><circle cx="${x + 4.5}" cy="${y}" r="2.8" fill="currentColor"/>`
    : `<circle cx="${x}" cy="${y - 4.5}" r="2.8" fill="currentColor"/><circle cx="${x}" cy="${y + 4.5}" r="2.8" fill="currentColor"/>`

/* ---------- a tiny skeletal-structure renderer ---------- */

/** An atom position; `t` = a text label (omitted = an implicit-carbon vertex). `a` = which letter sits on (x, y). */
interface At { x: number; y: number; t?: string; a?: 'mid' | 'first' | 'last'; c?: string }
/** A bond between atoms i and j; order 1–3; `ring` = the ring centre, drawing the second line inside the ring. */
interface Bd { i: number; j: number; o?: 1 | 2 | 3; c?: string; ring?: [number, number] }

const charW = (ch: string, size: number) => size * (/[₀-₉⁺⁻′″]/.test(ch) ? 0.42 : /[il1]/.test(ch) ? 0.3 : 0.62)
const textW = (s: string, size: number) => [...s].reduce((w, ch) => w + charW(ch, size), 0)

/** A bond line (or two / three parallel lines) between two points. */
const bondLines = (x1: number, y1: number, x2: number, y2: number, o: 1 | 2 | 3, ring?: [number, number]) => {
  const ln = (a: number, b: number, c: number, d: number) =>
    `<line x1="${a.toFixed(1)}" y1="${b.toFixed(1)}" x2="${c.toFixed(1)}" y2="${d.toFixed(1)}" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`
  const len = Math.hypot(x2 - x1, y2 - y1)
  const nx = -(y2 - y1) / len
  const ny = (x2 - x1) / len
  if (o === 1) return ln(x1, y1, x2, y2)
  if (o === 3) return ln(x1, y1, x2, y2) + ln(x1 + nx * 6, y1 + ny * 6, x2 + nx * 6, y2 + ny * 6) + ln(x1 - nx * 6, y1 - ny * 6, x2 - nx * 6, y2 - ny * 6)
  if (ring) {
    // second line inside the ring, shortened at both ends
    const mx = (x1 + x2) / 2
    const my = (y1 + y2) / 2
    const s = (ring[0] - mx) * nx + (ring[1] - my) * ny > 0 ? 1 : -1
    const ox = nx * 7 * s
    const oy = ny * 7 * s
    const ux = (x2 - x1) / len
    const uy = (y2 - y1) / len
    return ln(x1, y1, x2, y2) + ln(x1 + ox + ux * 7, y1 + oy + uy * 7, x2 + ox - ux * 7, y2 + oy - uy * 7)
  }
  return ln(x1 + nx * 4.5, y1 + ny * 4.5, x2 + nx * 4.5, y2 + ny * 4.5) + ln(x1 - nx * 4.5, y1 - ny * 4.5, x2 - nx * 4.5, y2 - ny * 4.5)
}

/** An atom label with a background knock-out behind it, so bonds stop at the letters. */
const atomLabel = (x: number, y: number, s: string, a: 'mid' | 'first' | 'last', size: number) => {
  const w = textW(s, size)
  const chars = [...s]
  const start = a === 'mid' ? x - w / 2 : a === 'first' ? x - charW(chars[0], size) / 2 : x + charW(chars[chars.length - 1], size) / 2 - w
  return `<rect class="fig-bg" x="${(start - 3).toFixed(1)}" y="${(y - size * 0.58).toFixed(1)}" width="${(w + 6).toFixed(1)}" height="${(size * 1.12).toFixed(1)}" rx="4"/>` +
    `<text x="${start.toFixed(1)}" y="${(y + size * 0.36).toFixed(1)}" font-size="${size}" fill="currentColor">${s}</text>`
}

/** Bonds first, then labels on top; per-atom / per-bond colour classes. */
const MOL = (atoms: At[], bonds: Bd[], size = 22) => {
  const b = bonds
    .map((d) => {
      const p = atoms[d.i]
      const q = atoms[d.j]
      const s = bondLines(p.x, p.y, q.x, q.y, d.o ?? 1, d.ring)
      return d.c ? G(d.c, s) : s
    })
    .join('')
  const l = atoms
    .filter((p) => p.t)
    .map((p) => {
      const s = atomLabel(p.x, p.y, p.t as string, p.a ?? 'mid', size)
      return p.c ? G(p.c, s) : s
    })
    .join('')
  return b + l
}

/** Skeletal zig-zag step: bond length 38 at ±30°. */
const DX = 33
const DY = 19
const BL = 38
const HI = 'fig-accent'
const TELL = 'fig-accent-2'

/** Regular polygon vertices (n sides, radius r), first vertex at `startDeg` (SVG angles, y down). */
const polygon = (cx: number, cy: number, r: number, n: number, startDeg: number): At[] =>
  Array.from({ length: n }, (_, k) => {
    const t = ((startDeg + (360 * k) / n) * Math.PI) / 180
    return { x: cx + r * Math.cos(t), y: cy + r * Math.sin(t) }
  })

/* ---------- 1 — The core inventory, in suffix-priority order (lead, 1000×460) ---------- */

type Group = 'acid' | 'ester' | 'amide' | 'nitrile' | 'aldehyde' | 'ketone' | 'alcohol' | 'amine' | 'ether'

/** A generic structure for a group, its key vertex at (ox, oy). `hi` colours the group, `tell` an optional feature. */
const groupMol = (g: Group, ox: number, oy: number, hi = HI, tell = HI): string => {
  const R = (x: number, y: number, t = 'R'): At => ({ x, y, t })
  switch (g) {
    case 'acid':
      return MOL([R(ox - DX, oy + DY), { x: ox, y: oy }, { x: ox, y: oy - BL, t: 'O', c: tell }, { x: ox + DX, y: oy + DY, t: 'OH', a: 'first', c: hi }],
        [{ i: 0, j: 1 }, { i: 1, j: 2, o: 2, c: tell }, { i: 1, j: 3, c: hi }])
    case 'ester':
      return MOL([R(ox - DX, oy + DY), { x: ox, y: oy }, { x: ox, y: oy - BL, t: 'O', c: tell }, { x: ox + DX, y: oy + DY, t: 'O', c: hi }, R(ox + 2 * DX, oy, 'R′')],
        [{ i: 0, j: 1 }, { i: 1, j: 2, o: 2, c: tell }, { i: 1, j: 3, c: hi }, { i: 3, j: 4, c: hi }])
    case 'amide':
      return MOL([R(ox - DX, oy + DY), { x: ox, y: oy }, { x: ox, y: oy - BL, t: 'O', c: tell }, { x: ox + DX, y: oy + DY, t: 'NH₂', a: 'first', c: hi }],
        [{ i: 0, j: 1 }, { i: 1, j: 2, o: 2, c: tell }, { i: 1, j: 3, c: hi }])
    case 'nitrile':
      return MOL([R(ox - BL, oy), { x: ox, y: oy }, { x: ox + BL + 4, y: oy, t: 'N', c: hi }], [{ i: 0, j: 1 }, { i: 1, j: 2, o: 3, c: hi }])
    case 'aldehyde':
      return MOL([R(ox - DX, oy + DY), { x: ox, y: oy }, { x: ox, y: oy - BL, t: 'O', c: hi }, { x: ox + DX, y: oy + DY, t: 'H', c: tell }],
        [{ i: 0, j: 1 }, { i: 1, j: 2, o: 2, c: hi }, { i: 1, j: 3, c: tell }])
    case 'ketone':
      return MOL([R(ox - DX, oy + DY), { x: ox, y: oy }, { x: ox, y: oy - BL, t: 'O', c: hi }, R(ox + DX, oy + DY, 'R′')],
        [{ i: 0, j: 1 }, { i: 1, j: 2, o: 2, c: hi }, { i: 1, j: 3 }])
    case 'alcohol':
      return MOL([R(ox - DX, oy + DY), { x: ox, y: oy }, { x: ox + DX, y: oy + DY, t: 'OH', a: 'first', c: hi }], [{ i: 0, j: 1 }, { i: 1, j: 2, c: hi }])
    case 'amine':
      return MOL([R(ox - DX, oy + DY), { x: ox, y: oy }, { x: ox + DX, y: oy + DY, t: 'NH₂', a: 'first', c: hi }], [{ i: 0, j: 1 }, { i: 1, j: 2, c: hi }])
    case 'ether':
      return MOL([R(ox - DX, oy + DY), { x: ox, y: oy, t: 'O', c: hi }, R(ox + DX, oy + DY, 'R′')], [{ i: 0, j: 1, c: hi }, { i: 1, j: 2, c: hi }])
  }
}

const INVENTORY: Array<[Group, string, string, string]> = [
  ['acid', 'Carboxylic acid', '-oic acid', 'carboxy-'],
  ['ester', 'Ester', '-oate', 'alkoxycarbonyl-'],
  ['amide', 'Amide', '-amide', 'amido-'],
  ['nitrile', 'Nitrile', '-nitrile', 'cyano-'],
  ['aldehyde', 'Aldehyde', '-al', 'oxo-'],
  ['ketone', 'Ketone', '-one', 'oxo-'],
  ['alcohol', 'Alcohol', '-ol', 'hydroxy-'],
  ['amine', 'Amine', '-amine', 'amino-'],
  ['ether', 'Ether', 'no suffix', 'alkoxy-'],
]

const inventoryCell = (k: number) => {
  const [g, name, suffix, prefix] = INVENTORY[k]
  const x = 12 + (k % 3) * 330
  const y = 8 + Math.floor(k / 3) * 151
  const ox = g === 'nitrile' ? x + 240 : g === 'ester' ? x + 222 : x + 240
  const oy = g === 'nitrile' ? y + 98 : g === 'alcohol' || g === 'amine' || g === 'ether' ? y + 88 : y + 100
  return `${G('fig-muted', BOX(x, y, 316, 142, 12, 2))}
<circle cx="${x + 24}" cy="${y + 26}" r="15" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${T(x + 24, y + 33, 18, String(k + 1), 'middle', '700')}
${T(x + 48, y + 33, 21, name, 'start', '700')}
${G(HI, T(x + 18, y + 86, 21, suffix, 'start', '700'))}
${G('fig-muted', T(x + 18, y + 116, 17, prefix))}
${groupMol(g, ox, oy)}`
}

const inventorySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${Array.from({ length: 9 }, (_, k) => inventoryCell(k)).join('\n')}
</svg>`

/* ---------- 2 — Look-alike pairs, each pair on one skeleton (lead, 1000×460) ---------- */

/** One quadrant: title, two structures, their names, and the one-line tell. */
const pairCell = (x: number, y: number, title: string, left: string, right: string, lName: string, rName: string, tell: string) =>
  `${G('fig-muted', BOX(x, y, 484, 214, 14, 2))}
${T(x + 20, y + 34, 22, title, 'start', '700')}
${left}${right}
${T(x + 130, y + 168, 19, lName, 'middle', '700')}
${T(x + 360, y + 168, 19, rName, 'middle', '700')}
${G(TELL, T(x + 242, y + 200, 18, tell, 'middle'))}`

const lookalikesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${pairCell(8, 8, 'Ester vs ether',
    groupMol('ester', 115, 110, HI, TELL),
    MOL([{ x: 345 - DX, y: 110 + DY, t: 'R' }, { x: 345, y: 110 }, { x: 345 + DX, y: 110 + DY, t: 'O', c: HI }, { x: 345 + 2 * DX, y: 110, t: 'R′' }],
      [{ i: 0, j: 1 }, { i: 1, j: 2, c: HI }, { i: 2, j: 3, c: HI }]),
    'ester', 'ether', 'the ester has a C=O right next to the O')}
${pairCell(508, 8, 'Amide vs amine',
    groupMol('amide', 618, 110, HI, TELL),
    groupMol('amine', 852, 110, HI, TELL),
    'amide', 'amine', 'amide N touches a C=O: not basic')}
${pairCell(8, 238, 'Aldehyde vs ketone',
    groupMol('aldehyde', 130, 340, HI, TELL),
    groupMol('ketone', 360, 340, HI, TELL),
    'aldehyde', 'ketone', 'aldehyde: an H on the C=O carbon (chain end)')}
${pairCell(508, 238, 'Hemiacetal vs acetal',
    MOL([{ x: 618 - DX, y: 340 + DY, t: 'R' }, { x: 618, y: 340 }, { x: 618, y: 340 - BL, t: 'OH', a: 'first', c: TELL }, { x: 618 + DX, y: 340 + DY, t: 'O', c: HI }, { x: 618 + 2 * DX, y: 340, t: 'R′' }],
      [{ i: 0, j: 1 }, { i: 1, j: 2, c: TELL }, { i: 1, j: 3, c: HI }, { i: 3, j: 4, c: HI }]),
    MOL([{ x: 848 - DX, y: 340 + DY, t: 'R' }, { x: 848, y: 340 }, { x: 848, y: 340 - BL, t: 'OR″', a: 'first', c: HI }, { x: 848 + DX, y: 340 + DY, t: 'O', c: HI }, { x: 848 + 2 * DX, y: 340, t: 'R′' }],
      [{ i: 0, j: 1 }, { i: 1, j: 2, c: HI }, { i: 1, j: 3, c: HI }, { i: 3, j: 4, c: HI }]),
    'hemiacetal', 'acetal', 'OH + OR on one carbon vs OR + OR')}
</svg>`

/* ---------- 3 — Classification: alcohols count carbons on the C–OH carbon, amines count R on N (lead, 1000×460) ---------- */

const CB = 45 // bond length in this figure

/** An alcohol: the carbinol carbon written out as C, OH up, then left / right / down substituents (R or H). */
const alcohol = (cx: number, cy: number, subs: [string, string, string]) => {
  const atoms: At[] = [{ x: cx, y: cy, t: 'C', c: HI }, { x: cx, y: cy - CB, t: 'OH', a: 'first' }, { x: cx - CB, y: cy, t: subs[0] }, { x: cx + CB, y: cy, t: subs[1] }, { x: cx, y: cy + CB, t: subs[2] }]
  return MOL(atoms, atoms.slice(1).map((_, k) => ({ i: 0, j: k + 1 })), 22)
}

/** An amine: N in the centre, lone pair up (or a 4th R and a + charge), left / right / down substituents. */
const amine = (cx: number, cy: number, subs: [string, string, string], quaternary = false) => {
  const atoms: At[] = [{ x: cx, y: cy, t: quaternary ? 'N⁺' : 'N', c: HI }, { x: cx - CB, y: cy, t: subs[0] }, { x: cx + CB, y: cy, t: subs[1] }, { x: cx, y: cy + CB, t: subs[2] }]
  if (quaternary) atoms.push({ x: cx, y: cy - CB, t: 'R' })
  const mol = MOL(atoms, atoms.slice(1).map((_, k) => ({ i: 0, j: k + 1 })), 22)
  return quaternary ? mol : mol + G(HI, LP(cx, cy - 22))
}

const classSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(20, 72, 24, 'Alcohols', 'start', '700')}
${T(20, 100, 17, 'count the carbons')}
${T(20, 122, 17, 'on the C–OH carbon')}
${alcohol(262, 100, ['R', 'H', 'H'])}
${alcohol(392, 100, ['R', 'R', 'H'])}
${alcohol(522, 100, ['R', 'R', 'R'])}
${T(262, 196, 24, '1°', 'middle', '700')}${T(392, 196, 24, '2°', 'middle', '700')}${T(522, 196, 24, '3°', 'middle', '700')}
${G('fig-muted', LINE(20, 218, 700, 218, 1.5, true))}
${T(20, 282, 24, 'Amines', 'start', '700')}
${T(20, 310, 17, 'count the R groups')}
${T(20, 332, 17, 'on the nitrogen')}
${amine(262, 300, ['R', 'H', 'H'])}
${amine(392, 300, ['R', 'R', 'H'])}
${amine(522, 300, ['R', 'R', 'R'])}
${amine(652, 300, ['R', 'R', 'R'], true)}
${T(262, 390, 24, '1°', 'middle', '700')}${T(392, 390, 24, '2°', 'middle', '700')}${T(522, 390, 24, '3°', 'middle', '700')}${T(652, 390, 24, '4°', 'middle', '700')}
${G('fig-muted', T(652, 414, 15, 'no lone pair,', 'middle'))}${G('fig-muted', T(652, 432, 15, 'permanent +', 'middle'))}
${G(HI, T(392, 438, 16, 'blue dots = the lone pair', 'middle'))}
<g class="fig-accent-2">${BOX(728, 20, 262, 420, 16, 2.5, 0.05)}</g>
${G(TELL, T(859, 54, 22, 'The trap', 'middle', '700'))}
${MOL([{ x: 859, y: 200, t: 'C', c: TELL }, { x: 859, y: 200 - CB, t: 'NH₂', a: 'first', c: HI }, { x: 859 - CB - 6, y: 200, t: 'H₃C', a: 'last' }, { x: 859 + CB + 6, y: 200, t: 'CH₃', a: 'first' }, { x: 859, y: 200 + CB, t: 'CH₃' }],
    [{ i: 0, j: 1 }, { i: 0, j: 2 }, { i: 0, j: 3 }, { i: 0, j: 4 }])}
${T(859, 300, 20, 'tert-butylamine', 'middle', '700')}
${G(TELL, T(859, 336, 18, 'the carbon is 3°', 'middle'))}
${G(TELL, T(859, 358, 15, '(three carbons on it)', 'middle'))}
${G(HI, T(859, 394, 18, 'but N has one R', 'middle', '700'))}
${G(HI, T(859, 418, 18, '→ a 1° amine', 'middle', '700'))}
</svg>`

/* ---------- 4 — Degrees of unsaturation: the formula and what counts (lead, 1000×460) ---------- */

const hexRing = (cx: number, cy: number, aromatic: boolean) => {
  const v = polygon(cx, cy, 36, 6, -90)
  const bonds: Bd[] = v.map((_, k) => ({ i: k, j: (k + 1) % 6, o: aromatic && k % 2 === 0 ? 2 : 1, ring: [cx, cy] as [number, number] }))
  return MOL(v, bonds)
}

const douTile = (x: number, name: string, count: string, drawing: string) =>
  `${G('fig-muted', BOX(x, 108, 182, 196, 14, 2))}
${T(x + 91, 140, 20, name, 'middle', '700')}
${drawing}
${G(HI, T(x + 91, 292, 30, count, 'middle', '700'))}`

const douSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(500, 46, 30, 'DoU = (2C + 2 + N − H − X) / 2', 'middle', '700')}
${G('fig-muted', T(500, 80, 19, 'O and S are ignored · H and halogens (X) subtract · N adds one', 'middle'))}
${douTile(14, 'a ring', '1', hexRing(105, 205, false))}
${douTile(211, 'a C=C', '1', MOL([{ x: 252, y: 222 }, { x: 285, y: 203 }, { x: 318, y: 222 }, { x: 351, y: 203 }], [{ i: 0, j: 1 }, { i: 1, j: 2, o: 2, c: HI }, { i: 2, j: 3 }]))}
${douTile(408, 'a C=O', '1', MOL([{ x: 466, y: 228 }, { x: 499, y: 209 }, { x: 499, y: 171, t: 'O', c: HI }, { x: 532, y: 228 }], [{ i: 0, j: 1 }, { i: 1, j: 2, o: 2, c: HI }, { i: 1, j: 3 }]))}
${douTile(605, 'a C≡N', '2', MOL([{ x: 640, y: 210, t: 'R' }, { x: 685, y: 210 }, { x: 735, y: 210, t: 'N', c: HI }], [{ i: 0, j: 1 }, { i: 1, j: 2, o: 3, c: HI }]))}
${douTile(802, 'benzene', '4', hexRing(893, 205, true))}
${G('fig-muted', T(893, 258, 15, 'ring + 3 π', 'middle'))}
${G('fig-muted', T(696, 250, 15, '2 π bonds', 'middle'))}
${BOX(14, 330, 478, 116, 14, 2)}
${T(34, 366, 21, 'C₇H₇NO₂', 'start', '700')}
${T(34, 398, 20, '(14 + 2 + 1 − 7) / 2 = 5')}
${G(HI, T(34, 428, 18, 'e.g. a benzene ring (4) + one more π'))}
${BOX(508, 330, 478, 116, 14, 2)}
${T(528, 366, 21, 'C₄H₈O   (no IR C=O band)', 'start', '700')}
${T(528, 398, 20, '(8 + 2 − 8) / 2 = 1')}
${G(HI, T(528, 428, 18, 'one ring or one C=C: THF, cyclobutanol, butenol'))}
</svg>`

/* ---------- 5 — The force hierarchy and who can H-bond with whom (lead, 1000×460) ---------- */

const FORCES: Array<[string, number, string]> = [
  ['ion–ion', 400, ''],
  ['ion–dipole', 350, ''],
  ['H-bond', 300, HI],
  ['dipole–dipole', 255, TELL],
  ['London dispersion', 210, 'fig-muted'],
]

const forceBars = FORCES.map(([name, w, cls], k) => {
  const y = 60 + k * 72
  const bar = `<rect x="20" y="${y}" width="${w}" height="40" rx="8" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2"/>`
  const label = T(32, y + 27, 19, name, 'start', '700')
  return cls ? G(cls, bar + label) : bar + label
}).join('\n')

/** One H-bond row: molecule A on the left, molecule B on the right, an optional dotted H-bond, a verdict. */
const hbRow = (y: number, a: string, b: string, bond: [number, number] | null, title: string, note: string, ok: boolean) =>
  `${a}${b}
${bond ? G(HI, `<line x1="${bond[0]}" y1="${y}" x2="${bond[1]}" y2="${y}" stroke="currentColor" stroke-width="3" stroke-dasharray="3 6" stroke-linecap="round"/>`) : G(TELL, LINE(628, y - 12, 648, y + 12, 3) + LINE(628, y + 12, 648, y - 12, 3))}
${G(ok ? HI : TELL, T(756, y - 6, 19, title, 'start', '700'))}
${G('fig-muted', T(756, y + 20, 16, note))}`

const forcesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(20, 34, 20, 'strongest → weakest', 'start', '700')}
${forceBars}
${G('fig-muted', `${T(20, 422, 15, 'bar lengths illustrative;')}${T(20, 442, 15, 'dispersion grows with size and surface area')}`)}
${G('fig-muted', LINE(450, 20, 450, 440, 1.5))}
${T(480, 50, 20, 'H-bond needs a donor H on N, O or F', 'start', '700')}
${hbRow(120,
    MOL([{ x: 495, y: 120, t: 'R' }, { x: 540, y: 120, t: 'O' }, { x: 582, y: 120, t: 'H', c: HI }], [{ i: 0, j: 1 }, { i: 1, j: 2, c: HI }]),
    MOL([{ x: 672, y: 120, t: 'O' }, { x: 702, y: 88, t: 'R' }, { x: 702, y: 152, t: 'H' }], [{ i: 0, j: 1 }, { i: 0, j: 2 }]),
    [594, 660], 'alcohol · alcohol', 'self H-bonds: high bp', true)}
${hbRow(250,
    MOL([{ x: 495, y: 250, t: 'R' }, { x: 540, y: 250, t: 'O' }, { x: 585, y: 250, t: 'R′' }], [{ i: 0, j: 1 }, { i: 1, j: 2 }]),
    MOL([{ x: 690, y: 250, t: 'O' }, { x: 720, y: 218, t: 'R' }, { x: 720, y: 282, t: 'R′' }], [{ i: 0, j: 1 }, { i: 0, j: 2 }]),
    null, 'ether · ether', 'no donor H: dipole only', false)}
${hbRow(380,
    MOL([{ x: 540, y: 380, t: 'O' }, { x: 510, y: 412, t: 'H' }, { x: 582, y: 380, t: 'H', c: HI }], [{ i: 0, j: 1 }, { i: 0, j: 2, c: HI }]),
    MOL([{ x: 672, y: 380, t: 'O' }, { x: 702, y: 348, t: 'R' }, { x: 702, y: 412, t: 'R′' }], [{ i: 0, j: 1 }, { i: 0, j: 2 }]),
    [594, 660], 'water · ether', 'water donates: ether dissolves', true)}
</svg>`

/* ---------- 6 — Boiling points from the lesson, coloured by the strongest force (lead, 1000×460) ---------- */

const BP_X0 = 300
const BP_K = 3.5 // px per °C
const bpBar = (y: number, name: string, bp: number, cls: string) =>
  `${T(BP_X0 - 12, y + 21, 18, name, 'end')}
${G(cls, `<rect x="${BP_X0}" y="${y}" width="${Math.max(bp * BP_K, 4)}" height="28" rx="5" fill="currentColor" fill-opacity="0.7"/>`)}
${T(BP_X0 + bp * BP_K + 8, y + 21, 18, `${bp} °C`, 'start', '700')}`

const bpSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent"><rect x="560" y="14" width="16" height="16" rx="3" fill="currentColor" fill-opacity="0.7"/>${T(582, 28, 15, 'H-bonding')}</g>
<g class="fig-accent-2"><rect x="680" y="14" width="16" height="16" rx="3" fill="currentColor" fill-opacity="0.7"/>${T(702, 28, 15, 'dipole only')}</g>
<g class="fig-muted"><rect x="800" y="14" width="16" height="16" rx="3" fill="currentColor" fill-opacity="0.7"/>${T(822, 28, 15, 'dispersion only')}</g>
${T(20, 28, 18, 'MW ≈ 60', 'start', '700')}
${bpBar(42, 'acetic acid (dimer)', 118, HI)}
${bpBar(78, '1-propanol', 97, HI)}
${bpBar(114, 'propanal', 49, TELL)}
${G('fig-muted', LINE(20, 160, 980, 160, 1.5, true))}
${T(20, 190, 18, 'MW ≈ 72–88', 'start', '700')}
${bpBar(204, 'butanoic acid (dimer)', 163, HI)}
${bpBar(240, '1-butanol (O–H)', 117, HI)}
${bpBar(276, 'diethylamine (N–H)', 55, HI)}
${bpBar(312, 'n-pentane', 36, 'fig-muted')}
${bpBar(348, 'neopentane (branched)', 9, 'fig-muted')}
${G('fig-muted', `${LINE(BP_X0, 390, BP_X0 + 170 * BP_K, 390, 2)}${[0, 50, 100, 150].map((v) => `${LINE(BP_X0 + v * BP_K, 390, BP_X0 + v * BP_K, 398, 2)}${T(BP_X0 + v * BP_K, 418, 15, `${v} °C`, 'middle')}`).join('')}`)}
${G(TELL, `${T(640, 298, 17, 'O–H beats N–H: 117 vs 55 °C', 'start', '700')}${T(640, 369, 17, 'branching: 27 °C lower', 'start', '700')}`)}
${T(20, 448, 16, 'acid > alcohol > amine > carbonyl > ether > alkane')}
</svg>`

/* ---------- 7 — The pKa ladder, with the pH 7.4 line (replace-table, 560×440) ---------- */

const LADDER: Array<[string, string, boolean]> = [
  ['strong acids (HCl, H₂SO₄)', '&lt; 0', false],
  ['hydronium', '−1.7', false],
  ['carboxylic acids', '4–5', true],
  ['carbonic acid', '6.3', false],
  ['ammonium ions (RNH₃⁺)', '9–11', true],
  ['phenol', '10', true],
  ['thiols', '8–10', false],
  ['water', '15.7', false],
  ['alcohols', '16–18', true],
  ['α C–H of carbonyls', '~20', false],
  ['terminal alkynes', '25', false],
  ['amines (N–H)', '~36', false],
  ['alkanes', '~50', false],
]

const ladderRows = LADDER.map(([name, pka, star], k) => {
  const y = 66 + k * 25 + (k >= 4 ? 26 : 0)
  const row = `${T(96, y, 16, name, 'start', star ? '700' : '400')}${T(470, y, 16, pka, 'end', '700')}`
  return star ? G(HI, row) : row
}).join('\n')

const pkaSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-fg-pka-ink')}</defs>
${T(96, 30, 16, 'acid', 'start', '700')}${T(470, 30, 16, 'pKa', 'end', '700')}
${G('fig-muted', LINE(96, 40, 470, 40, 1.5))}
${ladderRows}
<g class="fig-accent-2">${LINE(90, 155, 540, 155, 3, true)}${T(540, 173, 14, 'pH 7.4 (blood)', 'end', '700')}</g>
${G('fig-muted', `${T(36, 124, 13, 'lose H⁺', 'middle')}${T(36, 140, 13, 'in blood', 'middle')}${T(36, 180, 13, 'keep H⁺', 'middle')}${T(36, 196, 13, 'in blood', 'middle')}`)}
${ARR(78, 400, 78, 52, 'arr-fg-pka-ink', 3)}
${TV(60, 320, 15, 'stronger acid', '700')}
${G(HI, T(500, 425, 14, 'bold = the anchors to know cold', 'end', '700'))}
${G('fig-muted', T(20, 425, 13, 'rungs in order, not to scale'))}
</svg>`

/* ---------- 8 — Substituent tuning: withdrawing groups pull charge, lower pKa (lead, 1000×460) ---------- */

/** A carboxylate with a substituent label `sub` on the α-carbon; vertex C at (ox, oy). */
const carboxylate = (ox: number, oy: number, sub: string, subCls?: string) =>
  MOL([{ x: ox - DX - 6, y: oy + DY, t: sub, a: 'last', c: subCls }, { x: ox, y: oy }, { x: ox, y: oy - BL, t: 'O' }, { x: ox + DX, y: oy + DY, t: 'O⁻', a: 'first', c: HI }],
    [{ i: 0, j: 1 }, { i: 1, j: 2, o: 2 }, { i: 1, j: 3 }], 24)

const substSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(270, 40, 21, 'the conjugate base: where can the − charge go?', 'middle', '700')}
${carboxylate(150, 150, 'H₃C')}
${T(150, 256, 20, 'acetic acid', 'middle', '700')}
${T(150, 282, 20, 'pKa 4.8', 'middle')}
${carboxylate(400, 150, 'Cl₃C', TELL)}
<g class="fig-accent-2"><defs>${ARROW('arr-fg-sub-red')}</defs>${ARR(450, 200, 345, 200, 'arr-fg-sub-red', 3)}${T(398, 224, 15, 'Cl pulls density through σ bonds', 'middle')}</g>
${T(400, 256, 20, 'trichloroacetic acid', 'middle', '700')}
${G(TELL, T(400, 282, 20, 'pKa 0.7', 'middle', '700'))}
${G('fig-muted', T(270, 310, 16, 'trifluoroacetic acid: pKa 0.2 (~30,000× acetic)', 'middle'))}
${G('fig-muted', BOX(20, 326, 500, 112, 14, 2))}
${G(HI, T(40, 360, 18, 'withdrawing (Cl, F, NO₂): stabilize A⁻ → more acidic', 'start', '700'))}
${T(40, 390, 18, 'donating (alkyl, OCH₃ by resonance) → less acidic')}
${G('fig-muted', T(40, 420, 16, 'the effect shrinks fast with distance'))}
${G('fig-muted', LINE(548, 20, 548, 440, 1.5))}
${T(775, 40, 21, 'two dials: how many, how close', 'middle', '700')}
${[
    ['CH₃CH₂C<tspan class="fig-accent-2" font-weight="700">Cl₂</tspan>COOH', '2,2-dichloro: two Cl at C2'],
    ['CH₃CH₂CH<tspan class="fig-accent-2" font-weight="700">Cl</tspan>COOH', '2-chloro: one Cl at C2'],
    ['<tspan class="fig-accent-2" font-weight="700">Cl</tspan>CH₂CH₂CH₂COOH', '4-chloro: one Cl, far away'],
    ['CH₃CH₂CH₂COOH', 'butanoic acid: no Cl'],
  ].map(([f, note], k) => `${BOX(640, 66 + k * 92, 340, 76, 12, 2)}${T(810, 98 + k * 92, 20, f, 'middle')}${G('fig-muted', T(810, 126 + k * 92, 16, note, 'middle'))}`).join('\n')}
<defs>${ARROW('arr-fg-sub-ink')}</defs>
${ARR(612, 420, 612, 72, 'arr-fg-sub-ink', 3)}
${TV(590, 250, 17, 'more acidic', '700')}
</svg>`

/* ---------- 9 — Basicity = lone-pair availability (lead, 1000×460) ---------- */

/** Pyridine: hexagon, N at the top vertex, its in-plane lone pair pointing out of the ring. */
const pyridine = (cx: number, cy: number) => {
  const v = polygon(cx, cy, 38, 6, -90)
  v[0] = { ...v[0], t: 'N', c: HI }
  const bonds: Bd[] = v.map((_, k) => ({ i: k, j: (k + 1) % 6, o: k % 2 === 0 ? 2 : 1, ring: [cx, cy] as [number, number] }))
  return MOL(v, bonds) + G(HI, LP(cx, cy - 38 - 20))
}

/** Pyrrole: pentagon, N–H at the bottom vertex; its lone pair is drawn inside the ring (part of the sextet). */
const pyrrole = (cx: number, cy: number) => {
  const v = polygon(cx, cy, 34, 5, 90)
  v[0] = { ...v[0], t: 'N', c: TELL }
  const atoms: At[] = [...v, { x: cx, y: cy + 34 + 36, t: 'H' }]
  const bonds: Bd[] = [
    { i: 0, j: 1 },
    { i: 1, j: 2, o: 2, ring: [cx, cy] },
    { i: 2, j: 3 },
    { i: 3, j: 4, o: 2, ring: [cx, cy] },
    { i: 4, j: 0 },
    { i: 0, j: 5 },
  ]
  return MOL(atoms, bonds) + G(TELL, LP(cx, cy + 34 - 20))
}

const baseCol = (x: number, name: string, drawing: string, lines: string[], verdict: string, cls: string) =>
  `${G('fig-muted', BOX(x, 80, 180, 366, 14, 2))}
${T(x + 90, 110, 20, name, 'middle', '700')}
${drawing}
${lines.map((l, k) => T(x + 90, 300 + k * 22, 16, l, 'middle')).join('')}
${G(cls, T(x + 90, 420, 20, verdict, 'middle', '700'))}`

const basicSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent"><defs>${ARROW('arr-fg-base-blue')}</defs>${ARR(500, 34, 30, 34, 'arr-fg-base-blue', 3)}${T(30, 62, 16, 'lone pair free: basic', 'start', '700')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-fg-base-red')}</defs>${ARR(500, 34, 970, 34, 'arr-fg-base-red', 3)}${T(970, 62, 16, 'lone pair tied up: not basic', 'end', '700')}</g>
${baseCol(14, 'alkylamine', MOL([{ x: 70, y: 210, t: 'R' }, { x: 104, y: 190 }, { x: 138, y: 210, t: 'NH₂', a: 'first', c: HI }], [{ i: 0, j: 1 }, { i: 1, j: 2, c: HI }], 22) + G(HI, LP(138, 233)),
    ['lone pair on N, free', 'conj. acid pKa 10–11'], 'strong base', HI)}
${baseCol(210, 'pyridine', pyridine(300, 205), ['sp² lone pair in the', 'ring plane, not in π', 'conj. acid pKa 5.2'], 'basic', HI)}
${baseCol(406, 'aniline', `${G('fig-muted', BOX(436, 170, 120, 60, 10, 2))}${T(496, 208, 21, 'C₆H₅–NH₂', 'middle')}`,
    ['lone pair leaks', 'into the ring', '~10⁶× weaker than', 'alkylamines'], 'weak base', 'fig-muted')}
${baseCol(602, 'amide',
    MOL([{ x: 640, y: 220, t: 'R' }, { x: 673, y: 201 }, { x: 673, y: 163, t: 'O' }, { x: 706, y: 220, t: 'NH₂', a: 'first', c: TELL }], [{ i: 0, j: 1 }, { i: 1, j: 2, o: 2 }, { i: 1, j: 3 }], 22) +
      `<g class="fig-accent-2"><defs>${ARROW('arr-fg-base-amide')}</defs>${LP(706, 243)}${CARR('M 700 249 C 676 262 674 232 688 214', 'arr-fg-base-amide', 2.5)}${CARR('M 669 189 C 648 191 643 168 659 165', 'arr-fg-base-amide', 2.5)}</g>`,
    ['lone pair delocalized', 'into the C=O', '(resonance)'], 'not basic', TELL)}
${baseCol(798, 'pyrrole', pyrrole(888, 188), ['lone pair is part of', 'the aromatic sextet', 'protonating it', 'destroys aromaticity'], 'not basic', TELL)}
</svg>`

export const mcatFunctionalGroupsFigures: DeckFigurePlacement[] = [
  {
    at: 'The Core Inventory',
    mode: 'lead',
    figure: {
      svg: inventorySvg,
      alt:
        'A 3 × 3 gallery of nine functional groups drawn as generic skeletal structures with R groups, numbered 1 to 9 in suffix-priority order. Each cell gives the name, the suffix in blue and the prefix used when outranked in grey. 1 carboxylic acid R–C(=O)–OH, suffix -oic acid, prefix carboxy-. 2 ester R–C(=O)–O–R′, -oate, alkoxycarbonyl-. 3 amide R–C(=O)–NH₂, -amide, amido-. 4 nitrile R–C≡N, -nitrile, cyano-. 5 aldehyde R–C(=O)–H, -al, oxo-. 6 ketone R–C(=O)–R′, -one, oxo-. 7 alcohol R–CH₂–OH, -ol, hydroxy-. 8 amine R–CH₂–NH₂, -amine, amino-. 9 ether R–O–R′, no suffix, alkoxy-.',
      caption: 'The core groups in suffix-priority order: the highest-ranked group present takes the suffix (blue); every other group becomes a prefix (grey).',
    },
    blocks: [
      '- Suffix priority 1 → 9: acid > ester > amide > nitrile > aldehyde > ketone > alcohol > amine > ether',
      '- Example: 4-hydroxy-2-butanone (ketone outranks alcohol); 3-oxobutanoic acid (acid outranks ketone)',
    ],
  },
  {
    at: 'Look-Alikes the MCAT Loves to Confuse',
    mode: 'lead',
    figure: {
      svg: lookalikesSvg,
      alt:
        'Four panels, each pairing two look-alike groups drawn on the same skeleton, with the distinguishing feature in red. Ester vs ether: R–C(=O)–O–R′ beside R–CH₂–O–R′; the ester has a C=O right next to the O. Amide vs amine: R–C(=O)–NH₂ beside R–CH₂–NH₂; the amide nitrogen touches a C=O and is not basic. Aldehyde vs ketone: R–C(=O)–H beside R–C(=O)–R′; the aldehyde has an H on the carbonyl carbon at the chain end. Hemiacetal vs acetal: a carbon bearing OH and O–R′ beside a carbon bearing OR″ and O–R′; OH + OR on one carbon versus OR + OR.',
      caption: 'Each pair shares a skeleton; the red feature is the whole difference — and it changes reactivity, basicity and spectra.',
    },
    blocks: [
      '- Find the tell: a C=O beside O (ester) or N (amide), an H on the C=O carbon (aldehyde), OH vs OR (hemiacetal)',
      '- Also: phenol (OH on an aromatic ring) is about a million times more acidic than an alcohol',
    ],
  },
  {
    at: 'Amine and Alcohol Classification',
    mode: 'lead',
    figure: {
      svg: classSvg,
      alt:
        'Top row, alcohols: the carbon bearing the OH is written out as a blue C with its other three substituents — R, H, H is 1° (R–CH₂–OH); R, R, H is 2°; R, R, R is 3°; the label is the number of carbons attached to that carbon. Bottom row, amines: nitrogen in the centre with a blue lone pair — RNH₂ is 1°, R₂NH is 2°, R₃N is 3°, and R₄N⁺ is 4° with no lone pair and a permanent positive charge; the label is the number of R groups on nitrogen. Right panel, the trap: tert-butylamine, a central carbon carrying three CH₃ groups and an NH₂. The carbon is tertiary (three carbons on it), but the nitrogen carries only one R group, so it is a primary amine.',
      caption: 'Alcohols are classed by the carbon that holds the OH; amines by the groups on nitrogen — so tert-butylamine is a 1° amine on a 3° carbon.',
    },
    blocks: [
      '- Alcohols and alkyl halides: count carbons on the carbon bearing the group; amines: count R groups on N',
      '- R₄N⁺ (quaternary): four bonds, no lone pair, a charge that never goes away',
    ],
  },
  {
    at: 'Degrees of Unsaturation',
    mode: 'lead',
    figure: {
      svg: douSvg,
      alt:
        'The formula DoU = (2C + 2 + N − H − X) / 2, with the note that O and S are ignored, hydrogens and halogens subtract and nitrogen adds one. Five tiles show what each feature counts: a ring (cyclohexane) = 1, a C=C (2-butene) = 1, a C=O (acetone) = 1, a C≡N (two π bonds) = 2, benzene (one ring plus three π bonds) = 4. Two worked boxes: C₇H₇NO₂ gives (14 + 2 + 1 − 7) / 2 = 5, for example a benzene ring plus one more π bond; C₄H₈O with no IR carbonyl band gives (8 + 2 − 8) / 2 = 1, so one ring or one C=C — THF, cyclobutanol or a butenol.',
      caption: 'Every ring and every π bond is one degree; compute DoU first, then match the formula to candidate structures.',
    },
    blocks: [
      '- $DoU = \\frac{2C + 2 + N - H - X}{2}$ — ignore O and S; ring = 1, π bond = 1, C≡N = 2, benzene = 4',
    ],
  },
  {
    at: 'The Force Hierarchy',
    mode: 'lead',
    figure: {
      svg: forcesSvg,
      alt:
        'Left: five bars from strongest to weakest — ion–ion, ion–dipole, H-bond (blue), dipole–dipole (red), London dispersion (grey); bar lengths illustrative, dispersion grows with size and surface area. Right, headed "H-bond needs a donor H on N, O or F", three pairs. Alcohol with alcohol: the O–H hydrogen of one R–O–H forms a dotted H-bond to the oxygen of another — self H-bonds, high boiling point. Ether with ether: R–O–R′ beside R–O–R′ with a red cross — no donor H, so dipole–dipole only. Water with ether: an H of water forms a dotted H-bond to the ether oxygen — water donates, so the ether dissolves.',
      caption: 'Donors need H on N, O or F. Acceptor-only groups (ethers, carbonyls, esters, 3° amines) H-bond with water but not with each other.',
    },
    blocks: [
      '- ion–ion > ion–dipole > H-bond > dipole–dipole > dispersion; everything has dispersion',
      '- Acceptor-only groups: high solubility for their size, but low boiling points (no self H-bonding)',
    ],
  },
  {
    at: 'Boiling Point Logic',
    mode: 'lead',
    figure: {
      svg: bpSvg,
      alt:
        'Horizontal bars of boiling point, coloured by the strongest force: blue H-bonding, red dipole only, grey dispersion only. Group at molecular weight about 60: acetic acid (dimer) 118 °C, 1-propanol 97 °C, propanal 49 °C. Group at molecular weight about 72 to 88: butanoic acid (dimer) 163 °C, 1-butanol (O–H) 117 °C, diethylamine (N–H) 55 °C, n-pentane 36 °C, neopentane (branched) 9 °C. Notes: O–H beats N–H, 117 versus 55 °C; branching lowers the boiling point by 27 °C. Footer: acid > alcohol > amine > carbonyl > ether > alkane.',
      caption: 'The lesson’s boiling points: acid dimers top each weight class, O–H beats N–H, and branching (less surface contact) costs 27 °C.',
    },
    blocks: [
      '- Rank by strongest force first; break ties with O–H > N–H, then chain length (up) and branching (down)',
    ],
  },
  {
    at: 'The pKa Ladder to Memorize',
    mode: 'replace-table',
    figure: {
      svg: pkaSvg,
      alt:
        'A vertical ladder of acids from strongest at the top to weakest at the bottom, with pKa values: strong acids such as HCl and H₂SO₄ below 0; hydronium −1.7; carboxylic acids 4–5; carbonic acid 6.3; then a red dashed line marked pH 7.4, blood; ammonium ions RNH₃⁺ 9–11; phenol 10; thiols 8–10; water 15.7; alcohols 16–18; α C–H of carbonyls about 20; terminal alkynes 25; amines (N–H) about 36; alkanes about 50. Carboxylic acids, ammonium ions, phenol and alcohols are in bold blue as the anchors. Acids above the pH 7.4 line mostly lose their proton in blood; those below mostly keep it (so ammonium ions stay protonated and cationic). An arrow up the left side reads stronger acid. Rungs are in order, not to scale.',
      caption: 'The lesson’s pKa table as a ladder; groups above the pH 7.4 line are mostly deprotonated in blood (rungs ordered, not to scale).',
    },
    blocks: [
      '- Lower pKa = stronger acid = more stable conjugate base',
      '- Anchors: carboxylic acid 4–5 < phenol 10 < alcohol 16–18',
      '- Carboxylate: charge on two equal O; phenoxide: into the ring (mostly C); alkoxide: stuck on one O',
      '- At pH 7.4, acids above the line are anions; ammonium ions (9–11) stay protonated',
    ],
  },
  {
    at: 'Substituent Tuning',
    mode: 'lead',
    figure: {
      svg: substSvg,
      alt:
        'Left: two carboxylate conjugate bases drawn side by side. Acetate, H₃C–C(=O)O⁻, labelled acetic acid pKa 4.8. Trichloroacetate, Cl₃C–C(=O)O⁻, with a red arrow showing chlorine pulling electron density through the sigma bonds, labelled trichloroacetic acid pKa 0.7. Note: trifluoroacetic acid pKa 0.2, about 30,000 times more acidic than acetic acid. Box: withdrawing groups (Cl, F, NO₂) stabilize A⁻ and make the acid more acidic; donating groups (alkyl, OCH₃ by resonance) make it less acidic; the effect shrinks fast with distance. Right, "two dials: how many, how close": four condensed formulas stacked from most to least acidic — CH₃CH₂CCl₂COOH (2,2-dichloro, two Cl at C2), CH₃CH₂CHClCOOH (2-chloro, one Cl at C2), ClCH₂CH₂CH₂COOH (4-chloro, one Cl far away), CH₃CH₂CH₂COOH (butanoic acid, no Cl), with an arrow labelled more acidic pointing up.',
      caption: 'Electron-withdrawing groups spread the conjugate base’s charge and lower the pKa — more of them, and closer, means a stronger acid.',
    },
    blocks: [
      '- 2,2-dichloro > 2-chloro > 4-chloro > butanoic acid: count the withdrawing groups, then check their distance',
    ],
  },
  {
    at: 'Basicity: the Mirror Image',
    mode: 'lead',
    figure: {
      svg: basicSvg,
      alt:
        'Five columns ordered from most to least basic under an arrow: lone pair free means basic (blue, left), lone pair tied up means not basic (red, right). Alkylamine R–CH₂–NH₂ with a blue lone pair on N: lone pair free, conjugate acid pKa 10–11, strong base. Pyridine, a six-membered aromatic ring with N at the top and its lone pair pointing out of the ring: sp² lone pair in the ring plane, not part of the π system, conjugate acid pKa 5.2, basic. Aniline, written C₆H₅–NH₂: the lone pair leaks into the ring, about a million times weaker than alkylamines, weak base. Amide R–C(=O)–NH₂ with red curved arrows from the nitrogen lone pair toward the C–N bond and from the C=O bond onto oxygen: lone pair delocalized into the C=O by resonance, not basic. Pyrrole, a five-membered ring with N–H and its lone pair drawn inside the ring: the lone pair is part of the aromatic sextet, protonating it destroys aromaticity, not basic.',
      caption: 'Basicity tracks lone-pair availability: free on an alkylamine or pyridine; tied up by the ring, the C=O or the aromatic sextet everywhere else.',
    },
    blocks: [
      '- Alkylamine > pyridine > aniline >> amide ≈ pyrrole (essentially non-basic)',
      '- Histidine’s imidazole has one pyridine-like N (pKa ~6): the buffer nitrogen',
    ],
  },
]
