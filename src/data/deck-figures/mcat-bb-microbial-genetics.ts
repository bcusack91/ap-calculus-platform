import type { DeckFigurePlacement } from './index'

/**
 * Microbial Genetics (MCAT Biology) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (agar plates as circles
 * with colony dots, bar charts of culture counts, an extract split three
 * ways, phage glyphs, a transfer track with entry minutes over a circular
 * map, DNA lines with labelled gene boxes, plates with plaque holes, a CRISPR
 * array as diamonds and spacer boxes, three lac merodiploids, two labelled
 * centrifuge tubes, a complementation grid, influenza as eight segment boxes)
 * — no textbook,
 * prep-company or AAMC figure was copied. Molecules are labelled boxes, never
 * structures.
 *
 * Numbers: only the lesson's own. Fluctuation counts are Worked Example 1
 * (Set 1: 0, 0, 1, 0, 64, 0, 2, 0, 0, 9 — mean 7.6; Set 2: 11, 9, 12, 8, 10,
 * 11, 9, 10, 12, 8 — mean 10); the replica plates and colony 7 are Worked
 * Example 2; the entry minutes are Part 2 Worked Example 1 (Hfr 1: a 5, b 12,
 * c 20, d 32; Hfr 2: c 3, b 11, a 18 — the 25-min blend is drawn from those
 * times); the headful is the lesson's 1–2 % of the chromosome; EcoRI GAATTC;
 * the plating pattern is Part 3 Worked Example 2; the three merodiploids are
 * the lesson's mutant-logic table; the complementation grid is Part 4 Worked
 * Example 1 (five mutants, failures only for 1 + 3 and 2 + 4 → three genes);
 * the influenza isolates are Part 4 Worked Example 3 (A → B: 7 scattered HA
 * changes; C: a bird-strain HA segment, other seven segments as in B). Low-yield lesson text is stripped from the
 * deck, so nothing from a yield:low block (λ's gal/bio, PAM, target-site
 * duplication) is drawn.
 *
 * Colours: selected / working / wild-type function BLUE (fig-accent); breaks,
 * cuts, mutant or missing, constitutive and "stays F⁻" RED (fig-accent-2);
 * registration marks, axes and context grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same coloured group.
 * Marker ids are unique per figure (arr-mg-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

const f = (v: number) => +v.toFixed(1)

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${f(x)}" y="${f(y)}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** Centred text; centred bold text. */
const TM = (x: number, y: number, size: number, text: string) => T(x, y, size, text, 'middle')
const TB = (x: number, y: number, size: number, text: string) => T(x, y, size, text, 'middle', '700')

/**
 * A rounded box outlined in the current colour; `fillOpacity` > 0 tints it with the same colour
 * over an opaque fig-bg base, so a DNA line drawn underneath never shows through the label.
 */
const BOX = (x: number, y: number, w: number, h: number, rx = 12, sw = 2.5, fillOpacity = 0, dashed = false) =>
  `${fillOpacity ? `<rect class="fig-bg" x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${rx}"/>` : ''}<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${rx}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="6 4"' : ''}/>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} stroke-linecap="round"/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 6) => `<circle cx="${f(cx)}" cy="${f(cy)}" r="${r}" fill="currentColor"/>`

/** Wrap in a theme-class group. */
const G = (cls: 'fig-accent' | 'fig-accent-2' | 'fig-muted', inner: string) => `<g class="${cls}">${inner}</g>`

/** A vertical zigzag "break" mark centred on (x, y). */
const BREAK = (x: number, y: number, h = 44, sw = 3.5) => {
  const n = 5
  const pts = Array.from({ length: n + 1 }, (_, i) => `${f(x + (i === 0 || i === n ? 0 : i % 2 ? -8 : 8))},${f(y - h / 2 + (h * i) / n)}`).join(' ')
  return `<polyline points="${pts}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linejoin="round"/>`
}

/** Point on a circle; degrees, 0° = 3 o'clock, increasing clockwise (SVG y is down). */
const polar = (cx: number, cy: number, r: number, deg: number): [number, number] => {
  const a = (deg * Math.PI) / 180
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
}

/** A circular arc path from deg a0 to deg a1 (clockwise). */
const ARC = (cx: number, cy: number, r: number, a0: number, a1: number, sw = 4) => {
  const [x0, y0] = polar(cx, cy, r, a0)
  const [x1, y1] = polar(cx, cy, r, a1)
  const large = a1 - a0 > 180 ? 1 : 0
  return `<path d="M${f(x0)} ${f(y0)} A${r} ${r} 0 ${large} 1 ${f(x1)} ${f(y1)}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round"/>`
}

/* 1 — Replica plating finds colony 7, a leucine auxotroph (lead, 1000×460) */
const COLONIES: Array<[number, number]> = [[-45, -38], [8, -55], [48, -30], [-58, 12], [-8, -5], [-30, 48], [45, 22], [12, 52]]
const C7 = 6
const plate = (cx: number, cy: number, r: number, has7: boolean) => {
  const s = r / 88
  let out = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>`
  out += G('fig-muted', `<polygon points="${cx - 7},${cy - r - 13} ${cx + 7},${cy - r - 13} ${cx},${cy - r - 3}" fill="currentColor"/>`)
  COLONIES.forEach(([dx, dy], i) => {
    const x = f(cx + dx * s)
    const y = f(cy + dy * s)
    const cr = f(10 * s)
    if (i !== C7) out += `<circle cx="${x}" cy="${y}" r="${cr}" fill="currentColor" fill-opacity="0.7"/>`
    else if (has7) out += G('fig-accent', `<circle cx="${x}" cy="${y}" r="${cr}" fill="currentColor"/>`)
    else out += G('fig-accent-2', `<circle cx="${x}" cy="${y}" r="${f(cr + 1)}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3"/>`)
  })
  return out
}
const REPLICAS: Array<[number, string, boolean]> = [
  [398, 'minimal', false],
  [558, 'min + his', false],
  [718, 'min + leu', true],
  [878, 'complete', true],
]
const replicaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-rep')}</defs>
${TB(500, 36, 22, 'One master plate, four replicas, colonies in the same positions')}
${plate(118, 200, 88, true)}
${G('fig-accent', T(178, 240, 20, '7', 'start', '700'))}
${TB(118, 322, 20, 'master plate')}
${G('fig-muted', TM(118, 348, 18, 'complete medium'))}
${G('fig-muted', BOX(228, 172, 60, 56, 8, 2.5, 0.18))}
${TM(258, 160, 17, 'velvet')}
${ARR(292, 200, 324, 200, 'arr-mg-rep', 3)}
${REPLICAS.map(([cx, label, has7]) => `${plate(cx, 200, 66, has7)}${TB(cx, 300, 20, label)}${has7 ? G('fig-accent', T(cx, 328, 18, '7 grows', 'middle', '700')) : G('fig-accent-2', T(cx, 328, 18, '7 missing', 'middle', '700'))}`).join('')}
${TB(500, 392, 21, 'Missing on minimal, present on complete → colony 7 is an auxotroph')}
${G('fig-accent', T(500, 428, 20, 'Leucine alone rescues it → leu⁻. Pick it from the same spot on the master.', 'middle'))}
</svg>`

/* 2 — Fluctuation test with the lesson's worked counts (lead, 1000×460) */
const SET1 = [0, 0, 1, 0, 64, 0, 2, 0, 0, 9]
const SET2 = [11, 9, 12, 8, 10, 11, 9, 10, 12, 8]
const meanOf = (a: number[]) => a.reduce((s, v) => s + v, 0) / a.length
const FL_BASE = 330
const FL_K = 3.6
const FL_SLOT = 34
const flPanel = (x0: number, vals: number[], title: string, sub: string, jackpotIdx: number) => {
  const cx = x0 + 170
  const m = meanOf(vals)
  const my = FL_BASE - m * FL_K
  let s = `${TB(cx, 44, 21, title)}${G('fig-muted', TM(cx, 70, 18, sub))}`
  s += G(
    'fig-muted',
    `${LINE(x0 - 8, FL_BASE, x0 + 340, FL_BASE, 2.5)}${LINE(x0 - 8, FL_BASE, x0 - 8, 96, 2)}${[0, 20, 40, 60].map((v) => `${LINE(x0 - 14, FL_BASE - v * FL_K, x0 - 8, FL_BASE - v * FL_K, 2)}${T(x0 - 18, FL_BASE - v * FL_K + 6, 16, String(v), 'end')}`).join('')}`,
  )
  vals.forEach((v, i) => {
    const x = x0 + i * FL_SLOT + 5
    const h = v * FL_K
    const bar = `<rect x="${x}" y="${f(FL_BASE - h)}" width="24" height="${f(Math.max(h, 0.01))}" rx="3" fill="currentColor"${i === jackpotIdx ? '' : ' fill-opacity="0.55"'}/>`
    const lab = T(x + 12, FL_BASE - h - 8, 16, String(v), 'middle', i === jackpotIdx ? '700' : '400')
    s += i === jackpotIdx ? G('fig-accent-2', bar + lab) : bar + lab
  })
  s += G('fig-muted', `${LINE(x0, my, x0 + 340, my, 2, true)}${T(x0 + 346, my + 5, 16, `mean ${+m.toFixed(1)}`)}`)
  return s
}
const fluctuationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${flPanel(92, SET1, 'Set 1: ten separate small cultures', 'each grown without phage, then plated on phage', 4)}
${flPanel(572, SET2, 'Set 2: ten samples of ONE culture', 'the control: plating noise only', -1)}
${G('fig-muted', `${LINE(520, 40, 520, 440, 1.5)}<text x="40" y="214" font-size="16" text-anchor="middle" transform="rotate(-90 40 214)" fill="currentColor">resistant colonies</text>`)}
${G('fig-accent-2', `${T(270, 128, 18, 'jackpot: an early', 'start', '700')}${T(270, 152, 18, 'mutant left a big clone')}`)}
${G('fig-accent-2', TB(262, 384, 20, 'Huge spread across cultures'))}
${TM(262, 412, 19, 'resistance arose BEFORE the phage')}
${TB(742, 384, 20, 'Small spread within one culture')}
${TM(742, 412, 19, 'so the spread on the left is biology')}
</svg>`

/* 3 — Griffith, then Avery–MacLeod–McCarty's subtractive test (lead, 1000×460) */
const AMM_ROWS: Array<[number, string, string, boolean]> = [
  [215, '+ protease', 'S cells appear: transforms', true],
  [290, '+ RNase', 'S cells appear: transforms', true],
  [365, '+ DNase', 'no S cells: abolished', false],
]
const averySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-av')}</defs>
${G('fig-muted', BOX(30, 20, 290, 74, 12, 2.5))}${TB(175, 50, 20, 'heat-killed S')}${G('fig-muted', TM(175, 78, 18, 'mouse lives'))}
${G('fig-muted', BOX(355, 20, 290, 74, 12, 2.5))}${TB(500, 50, 20, 'live R')}${G('fig-muted', TM(500, 78, 18, 'mouse lives'))}
${G('fig-accent-2', BOX(680, 20, 290, 74, 12, 3))}${TB(825, 50, 20, 'heat-killed S + live R')}${G('fig-accent-2', T(825, 78, 18, 'mouse dies, live S recovered', 'middle', '700'))}
${G('fig-muted', T(500, 124, 17, 'Griffith: a heritable “transforming principle” passes from dead S to live R', 'middle'))}
${TB(500, 166, 21, 'Avery, MacLeod &amp; McCarty: destroy one candidate at a time')}
${BOX(30, 232, 190, 116, 16, 2.5, 0.08)}${TB(125, 284, 20, 'S-cell')}${TB(125, 310, 20, 'extract')}
${AMM_ROWS.map(([y, enz, res, ok]) => {
  const arrowIn = ARR(222, 290, 276, y, 'arr-mg-av', 2.5)
  const enzBox = `${BOX(280, y - 27, 210, 54, 12, 2.5)}${TB(385, y + 7, 20, enz)}`
  const toRes = ARR(494, y, 586, y, 'arr-mg-av', 2.5)
  const resBox = `${BOX(590, y - 27, 380, 54, 12, 3, 0.08)}${T(780, y + 7, 20, res, 'middle', '700')}`
  return `${arrowIn}${enzBox}${toRes}${G(ok ? 'fig-accent' : 'fig-accent-2', resBox)}`
}).join('')}
${G('fig-muted', TM(540, 200, 16, '+ live R'))}
${TB(500, 438, 21, 'Only removing DNA stops it → DNA is the transforming principle')}
</svg>`

/* 4 — Generalized vs specialized transduction (lead, 1000×460) */
const PHAGE = (cx: number, cy: number, inner: string) =>
  `<polygon points="${cx - 24},${cy} ${cx - 12},${cy - 21} ${cx + 12},${cy - 21} ${cx + 24},${cy} ${cx + 12},${cy + 21} ${cx - 12},${cy + 21}" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>` +
  `${LINE(cx, cy + 21, cx, cy + 50, 4)}${LINE(cx, cy + 50, cx - 14, cy + 62, 2.5)}${LINE(cx, cy + 50, cx + 14, cy + 62, 2.5)}${inner}`
const SQUIGGLE = (cx: number, cy: number) =>
  `<path d="M${cx - 14} ${cy} q 7 -11 14 0 t 14 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`
const CROSS = (x: number, y1: number, y2: number) => `${LINE(x - 10, y1, x + 10, y2, 2.5)}${LINE(x + 10, y1, x - 10, y2, 2.5)}`
const transductionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-td')}</defs>
${G('fig-muted', LINE(500, 20, 500, 450, 1.5))}
${TB(250, 36, 21, 'Generalized: a headful of host DNA')}
${G('fig-muted', TM(250, 62, 18, 'lytic cycle, random packaging'))}
${BOX(24, 96, 190, 140, 40, 2.5, 0.06)}
${LINE(52, 132, 96, 126, 3.5)}${LINE(116, 120, 164, 128, 3.5)}${LINE(48, 182, 94, 190, 3.5)}${LINE(122, 198, 176, 190, 3.5)}
${G('fig-accent', `${SQUIGGLE(168, 162)}${SQUIGGLE(84, 214)}`)}
${G('fig-muted', TM(119, 258, 17, 'infected donor'))}
${ARR(220, 166, 254, 166, 'arr-mg-td', 2.5)}
${G('fig-accent', PHAGE(290, 140, SQUIGGLE(290, 140)))}
${G('fig-accent', PHAGE(360, 140, SQUIGGLE(360, 140)))}
${G('fig-accent-2', PHAGE(434, 140, LINE(420, 140, 448, 140, 3.5)))}
${G('fig-accent', TM(325, 228, 16, 'phage DNA'))}
${G('fig-accent-2', `${T(434, 228, 17, 'host DNA', 'middle', '700')}<defs>${ARROW('arr-mg-td-r')}</defs>${ARR(424, 236, 402, 278, 'arr-mg-td-r', 2.5)}`)}
${BOX(214, 282, 270, 98, 40, 2.5, 0.06)}
${LINE(240, 348, 460, 348, 3.5)}
${G('fig-accent-2', `${LINE(306, 308, 394, 308, 4)}${CROSS(300, 312, 344)}${CROSS(400, 312, 344)}`)}
${T(30, 312, 18, 'recipient:')}${T(30, 336, 18, 'fragment must')}${T(30, 360, 18, 'recombine in')}
${TB(250, 418, 19, 'Any gene can move, at low frequency')}
${G('fig-muted', TM(250, 444, 17, 'one headful ≈ 1–2% of the chromosome'))}
${TB(750, 36, 21, 'Specialized: imprecise excision')}
${G('fig-muted', TM(750, 62, 18, 'temperate phage, one fixed insertion site'))}
${LINE(530, 124, 970, 124, 3.5)}
${BOX(574, 104, 74, 40, 8, 2.5, 0.1)}${TB(611, 131, 19, 'host A')}
${G('fig-accent', `${BOX(656, 104, 196, 40, 8, 3, 0.14)}${T(754, 131, 19, 'prophage', 'middle', '700')}`)}
${BOX(860, 104, 74, 40, 8, 2.5, 0.1)}${TB(897, 131, 19, 'host B')}
${ARR(716, 150, 668, 196, 'arr-mg-td', 2.5)}${ARR(792, 150, 838, 196, 'arr-mg-td', 2.5)}
${G('fig-accent', `<circle cx="640" cy="244" r="40" fill="none" stroke="currentColor" stroke-width="4"/>${ARC(860, 244, 40, -135, 135, 4)}`)}
${ARC(860, 244, 40, 135, 225, 6)}
${TB(846, 251, 17, 'A')}
${G('fig-muted', TM(640, 316, 18, 'precise: phage only'))}
${G('fig-accent-2', T(866, 316, 18, 'imprecise: + host A', 'middle', '700'))}
${TB(750, 418, 19, 'Only the genes flanking the site move')}
${G('fig-muted', TM(750, 444, 17, 'and the recipient keeps them by recombination'))}
</svg>`

/* 5 — Interrupted mating: entry minutes and the circular map (lead, 1000×460) */
const TX = (m: number) => 80 + 11 * m
const GENES1: Array<[string, number]> = [['a', 5], ['b', 12], ['c', 20], ['d', 32]]
const GENES2: Array<[string, number]> = [['c', 3], ['b', 11], ['a', 18]]
const MAP_CX = 772
const MAP_CY = 292
const MAP_R = 138
const mapDeg = (m: number) => -90 + 3.6 * (m - 16)
const MAP_POS: Record<string, number> = { a: 5, b: 12, c: 20, d: 32 }
const originTri = (m: number, dir: 1 | -1) => {
  const a = (mapDeg(m) * Math.PI) / 180
  const [px, py] = polar(MAP_CX, MAP_CY, MAP_R, mapDeg(m))
  const tx = -Math.sin(a) * dir
  const ty = Math.cos(a) * dir
  const nx = Math.cos(a)
  const ny = Math.sin(a)
  const tip = [px + 16 * tx, py + 16 * ty]
  const b1 = [px - 6 * tx + 11 * nx, py - 6 * ty + 11 * ny]
  const b2 = [px - 6 * tx - 11 * nx, py - 6 * ty - 11 * ny]
  return `<polygon points="${f(tip[0])},${f(tip[1])} ${f(b1[0])},${f(b1[1])} ${f(b2[0])},${f(b2[1])}" fill="currentColor"/>`
}
const track = (y: number, genes: Array<[string, number]>, endM: number, marker: string) =>
  `${BOX(48, y - 11, 32, 22, 5, 2.5, 0.25)}${LINE(80, y, TX(endM), y, 4)}${ARR(TX(endM), y, TX(endM) + 34, y, marker, 4)}` +
  genes.map(([g, m]) => `${DOT(TX(m), y, 7)}${T(TX(m), y - 18, 24, g, 'middle', '700')}${T(TX(m), y + 32, 18, String(m), 'middle')}`).join('')
const conjugationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${G('fig-muted', LINE(540, 20, 540, 450, 1.5))}
${TB(270, 34, 21, 'Hfr 1: genes enter in map order')}
${G('fig-muted', TM(270, 60, 17, 'minute each donor marker first appears in recipients'))}
${G('fig-accent', `<defs>${ARROW('arr-mg-cj-b')}</defs>${track(130, GENES1, 36, 'arr-mg-cj-b')}${T(64, 108, 16, 'oriT', 'middle', '700')}`)}
${G('fig-muted', `${T(80, 162, 18, '0', 'middle')}${T(TX(36) + 40, 162, 16, 'min', 'middle')}`)}
${G('fig-muted', T(80, 196, 17, '… the rest of F would enter last, at ~100 min'))}
${G('fig-accent-2', `${BREAK(TX(25), 130, 46)}${T(TX(25), 232, 18, 'pair breaks at 25 min', 'middle', '700')}`)}
${G('fig-accent-2', T(270, 262, 18, 'recipient has a, b, c (not d, not F) → stays F⁻', 'middle', '700'))}
${TB(270, 314, 20, 'Hfr 2: another origin, the other direction')}
${G('fig-accent-2', `<defs>${ARROW('arr-mg-cj-r')}</defs>${track(376, GENES2, 22, 'arr-mg-cj-r')}${T(64, 354, 16, 'oriT', 'middle', '700')}`)}
${G('fig-muted', `${T(80, 408, 18, '0', 'middle')}${TM(270, 444, 18, 'same spacings: c–b 8 min, b–a 7 min')}`)}
${TB(772, 34, 21, 'Overlay → one circular map')}
${G('fig-muted', TM(772, 60, 17, 'subtract entry times; never read them as addresses'))}
<circle cx="${MAP_CX}" cy="${MAP_CY}" r="${MAP_R}" fill="none" stroke="currentColor" stroke-width="3"/>
${G('fig-muted', `${TM(MAP_CX, MAP_CY + 20, 19, '100-minute')}${TM(MAP_CX, MAP_CY + 46, 19, 'chromosome')}`)}
${Object.entries(MAP_POS).map(([g, m]) => {
  const [x, y] = polar(MAP_CX, MAP_CY, MAP_R, mapDeg(m))
  const [lx, ly] = polar(MAP_CX, MAP_CY, MAP_R + 26, mapDeg(m))
  return `${DOT(x, y, 7)}${T(lx, ly + 8, 24, g, 'middle', '700')}`
}).join('')}
${G('fig-muted', ([[8.5, '7'], [16, '8'], [26, '12']] as Array<[number, string]>).map(([m, d]) => {
  const [x, y] = polar(MAP_CX, MAP_CY, MAP_R - 26, mapDeg(m))
  return T(x, y + 6, 18, d, 'middle', '700')
}).join(''))}
${G('fig-accent', `${originTri(0, 1)}${(() => { const [x, y] = polar(MAP_CX, MAP_CY, MAP_R + 22, mapDeg(-3)); return T(x, y + 6, 19, 'Hfr 1', 'end', '700') })()}`)}
${G('fig-accent-2', `${originTri(23, -1)}${(() => { const [x, y] = polar(MAP_CX, MAP_CY, MAP_R + 30, mapDeg(26.5)); return T(x - 6, y + 4, 19, 'Hfr 2', 'start', '700') })()}`)}
</svg>`

/* 6 — Transposons: IS element, composite transposon, polar effect, cut-and-paste vs replicative (lead, 1000×460) */
const IR_R = (x: number, y: number) => `<polygon points="${x},${y - 14} ${x},${y + 14} ${x + 26},${y}" fill="currentColor"/>`
const IR_L = (x: number, y: number) => `<polygon points="${x + 26},${y - 14} ${x + 26},${y + 14} ${x},${y}" fill="currentColor"/>`
const ELEM = (x: number, y: number, w: number) => `${BOX(x, y - 13, w, 26, 6, 2.5, 0.3)}`
const transposonSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-tn')}</defs>
${G('fig-muted', LINE(500, 20, 500, 450, 1.5))}
${TB(250, 34, 20, 'Insertion sequence (IS)')}
${G('fig-muted', `${LINE(30, 84, 470, 84, 3)}${T(36, 64, 16, 'host DNA')}`)}
${G('fig-accent', `${IR_R(110, 84)}${BOX(140, 66, 220, 36, 8, 2.5, 0.12)}${IR_L(364, 84)}`)}
${TB(250, 91, 19, 'transposase gene')}
${G('fig-accent', `${TM(123, 124, 17, 'inverted')}${TM(123, 144, 17, 'repeat')}${TM(377, 124, 17, 'inverted')}${TM(377, 144, 17, 'repeat')}`)}
${TB(250, 186, 20, 'Composite transposon')}
${G('fig-muted', LINE(30, 226, 470, 226, 3))}
${G('fig-accent', `${BOX(60, 208, 86, 36, 8, 2.5, 0.12)}${T(103, 233, 19, 'IS', 'middle', '700')}${BOX(354, 208, 86, 36, 8, 2.5, 0.12)}${T(397, 233, 19, 'IS', 'middle', '700')}`)}
${G('fig-accent-2', `${BOX(150, 208, 200, 36, 8, 2.5, 0.12)}${T(250, 233, 19, 'kanR (cargo)', 'middle', '700')}`)}
${G('fig-muted', TM(250, 270, 17, 'the two IS ends move the whole block as one unit'))}
${TB(250, 310, 20, 'Polar effect: insertion in gene 1')}
${G('fig-muted', LINE(30, 362, 470, 362, 3))}
${T(46, 344, 16, 'P', 'middle', '700')}${LINE(46, 362, 46, 350, 2.5)}
${BOX(70, 346, 120, 32, 6, 2.5, 0.04)}${TB(106, 368, 17, 'gene 1')}
${G('fig-muted', `${BOX(206, 346, 120, 32, 6, 2.5, 0.04)}${TM(266, 368, 17, 'gene 2')}${BOX(342, 346, 120, 32, 6, 2.5, 0.04)}${TM(402, 368, 17, 'gene 3')}`)}
${G('fig-accent-2', `<polygon points="150,336 176,336 163,356" fill="currentColor"/>${T(184, 340, 16, 'insertion', 'start', '700')}<path d="M76 400 q 8 -8 16 0 t 16 0 t 16 0 t 16 0 t 16 0" fill="none" stroke="currentColor" stroke-width="3"/>${CROSS(170, 392, 408)}`)}
${G('fig-accent-2', T(196, 406, 17, 'mRNA stops', 'start', '700'))}
${G('fig-muted', TM(250, 440, 17, 'genes 2 and 3 are intact but not expressed'))}
${TB(750, 34, 20, 'Cut-and-paste (conservative)')}
${G('fig-muted', `${T(530, 70, 16, 'donor')}${T(770, 70, 16, 'target')}`)}
${LINE(530, 92, 720, 92, 3)}${LINE(770, 92, 970, 92, 3)}
${G('fig-accent', ELEM(596, 92, 70))}
${ARR(750, 112, 750, 140, 'arr-mg-tn', 2.5)}
${LINE(530, 164, 596, 164, 3)}${LINE(666, 164, 720, 164, 3)}${LINE(770, 164, 836, 164, 3)}${LINE(906, 164, 970, 164, 3)}
${G('fig-accent', ELEM(836, 164, 70))}
${G('fig-accent-2', `${BREAK(631, 164, 30, 3)}${T(631, 204, 17, 'break left behind', 'middle', '700')}`)}
${G('fig-accent', T(871, 204, 17, 'element moved', 'middle', '700'))}
${TB(750, 262, 20, 'Replicative')}
${G('fig-muted', `${T(530, 298, 16, 'donor')}${T(770, 298, 16, 'target')}`)}
${LINE(530, 320, 720, 320, 3)}${LINE(770, 320, 970, 320, 3)}
${G('fig-accent', ELEM(596, 320, 70))}
${ARR(750, 340, 750, 368, 'arr-mg-tn', 2.5)}
${LINE(530, 392, 720, 392, 3)}${LINE(770, 392, 836, 392, 3)}${LINE(906, 392, 970, 392, 3)}
${G('fig-accent', `${ELEM(596, 392, 70)}${ELEM(836, 392, 70)}${T(631, 432, 17, 'copy stays', 'middle', '700')}${T(871, 432, 17, 'copy added', 'middle', '700')}`)}
</svg>`

/* 7 — Restriction-modification: what gets cut, and plating that follows the last host (lead, 1000×460) */
const SITE = (x: number, y: number) => `${BOX(x, y - 14, 84, 28, 6, 2.5, 0.08)}${T(x + 42, y + 6, 16, 'GAATTC', 'middle', '700')}`
const PLAQUES: Array<[number, number]> = [[-30, -28], [-4, -36], [24, -26], [-38, 0], [-12, -10], [14, -4], [38, 6], [-26, 24], [2, 18], [26, 30], [-4, 40], [-40, -18], [40, -16], [10, -20]]
const lawn = (cx: number, cy: number, many: boolean) =>
  `<circle cx="${cx}" cy="${cy}" r="54" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>` +
  (many ? PLAQUES : PLAQUES.slice(4, 6))
    .map(([dx, dy]) => `<circle class="fig-bg" cx="${cx + dx}" cy="${cy + dy}" r="6" stroke="currentColor" stroke-width="1.5"/>`)
    .join('')
const rmSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-rm')}</defs>
${G('fig-muted', LINE(470, 20, 470, 450, 1.5))}
${TB(240, 34, 21, 'Inside one cell')}
${G('fig-muted', T(30, 66, 17, 'host chromosome'))}
${LINE(30, 116, 450, 116, 3.5)}
${[110, 230, 350].map((x) => SITE(x, 116)).join('')}
${G('fig-accent', [110, 230, 350].map((x) => `${LINE(x + 42, 102, x + 42, 92, 2)}${T(x + 42, 86, 16, 'CH₃', 'middle', '700')}`).join(''))}
${G('fig-accent', T(240, 162, 19, 'methylated sites → spared', 'middle', '700'))}
${G('fig-muted', T(30, 200, 17, 'incoming phage DNA'))}
${LINE(30, 262, 156, 262, 3.5)}${LINE(184, 264, 336, 260, 3.5)}${LINE(364, 262, 450, 264, 3.5)}
${G('fig-accent-2', `${SITE(128, 232)}${SITE(308, 232)}${BREAK(170, 262, 34, 3)}${BREAK(350, 262, 34, 3)}`)}
${G('fig-accent-2', T(240, 306, 19, 'unmethylated → cut, degraded', 'middle', '700'))}
${TM(240, 352, 18, 'methyltransferase marks the host’s own sites')}
${TM(240, 380, 18, 'restriction enzyme cuts only unmethylated ones')}
${G('fig-muted', TM(240, 424, 18, 'innate: any DNA with the site, no memory'))}
${TB(735, 34, 21, 'Plating depends on the last host')}
${TB(670, 84, 19, 'on X')}${TB(840, 84, 19, 'on Y')}
${T(490, 150, 18, 'phage')}${T(490, 174, 18, 'grown on X')}
${lawn(670, 158, true)}${lawn(840, 158, false)}
${T(490, 340, 18, 'phage')}${T(490, 364, 18, 'from Y plaque')}
${lawn(670, 348, false)}${lawn(840, 348, true)}
${G('fig-accent', `<defs>${ARROW('arr-mg-rm-b')}</defs>${ARR(848, 196, 848, 286, 'arr-mg-rm-b', 2.5)}${T(832, 240, 17, 'rare escapee,', 'end', '700')}${T(832, 262, 17, 'now Y-methylated', 'end', '700')}`)}
${TB(735, 436, 19, 'Sequence unchanged: modification, not mutation')}
</svg>`

/* 8 — CRISPR-Cas in three steps (lead, 1000×460) */
const REPEAT = (x: number, y: number) => G('fig-muted', `<polygon points="${x},${y - 10} ${x + 9},${y} ${x},${y + 10} ${x - 9},${y}" fill="currentColor"/>`)
const SPACER = (x: number, y: number, isNew: boolean) =>
  isNew ? G('fig-accent-2', BOX(x, y - 12, 28, 24, 4, 2.5, 0.35)) : BOX(x, y - 12, 28, 24, 4, 2, 0.12)
const ARRAY = (x0: number, y: number, withNew: boolean) => {
  let s = `${G('fig-muted', `${BOX(x0, y - 15, 58, 30, 8, 2.5, 0.1)}`)}${T(x0 + 29, y + 6, 16, 'leader', 'middle')}`
  let x = x0 + 70
  const spacers = withNew ? [true, false, false, false] : [false, false, false]
  for (const sp of spacers) {
    s += REPEAT(x, y)
    s += SPACER(x + 13, y, sp)
    x += 54
  }
  s += REPEAT(x, y)
  return s
}
const crisprSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-cr')}</defs>
${G('fig-muted', `${BOX(16, 56, 312, 300, 16, 1.5)}${BOX(344, 56, 312, 300, 16, 1.5)}${BOX(672, 56, 312, 300, 16, 1.5)}`)}
${TB(172, 40, 21, '1  Acquisition')}${TB(500, 40, 21, '2  Expression')}${TB(828, 40, 21, '3  Interference')}
${G('fig-muted', T(40, 104, 16, 'invading phage DNA'))}
${G('fig-accent-2', `${LINE(40, 130, 304, 130, 3.5)}${BOX(150, 120, 56, 20, 4, 2.5, 0.35)}<defs>${ARROW('arr-mg-cr-r')}</defs>${ARR(172, 144, 126, 216, 'arr-mg-cr-r', 2.5)}`)}
${ARRAY(24, 240, true)}
${G('fig-muted', T(172, 276, 16, 'repeats ◆ alternate with spacers', 'middle'))}
${TM(172, 312, 18, 'a piece of the invader')}${TM(172, 336, 18, 'becomes a new spacer')}
${ARRAY(352, 112, true)}
${ARR(500, 136, 500, 162, 'arr-mg-cr', 2.5)}
<path d="M380 182 q 10 -10 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="currentColor" stroke-width="3"/>
${G('fig-muted', T(630, 210, 16, 'transcribed', 'end'))}
${ARR(500, 218, 500, 244, 'arr-mg-cr', 2.5)}
${[0, 1, 2].map((i) => `${LINE(374 + i * 96, 266, 440 + i * 96, 266, 3)}${i === 0 ? G('fig-accent-2', BOX(388 + i * 96, 256, 34, 20, 4, 2.5, 0.35)) : BOX(388 + i * 96, 256, 34, 20, 4, 2, 0.12)}`).join('')}
${TM(500, 312, 18, 'cut into short CRISPR RNAs,')}${TM(500, 336, 18, 'one spacer each')}
${G('fig-accent', `${BOX(764, 104, 128, 56, 22, 3, 0.15)}${T(828, 140, 22, 'Cas', 'middle', '700')}`)}
${G('fig-accent-2', `${BOX(800, 168, 56, 20, 4, 2.5, 0.35)}${LINE(694, 236, 960, 236, 3.5)}${BOX(800, 226, 56, 20, 4, 2.5, 0.35)}${BREAK(880, 236, 44, 3)}`)}
${G('fig-muted', `${LINE(828, 188, 828, 226, 2, true)}${T(700, 222, 16, 'phage DNA')}`)}
${TM(828, 312, 18, 'the guide finds the matching')}${TM(828, 336, 18, 'DNA, and Cas cuts it')}
${TB(500, 404, 21, 'Acquired, sequence-specific, inherited with the array → ADAPTIVE')}
${G('fig-muted', TM(500, 438, 18, 'restriction-modification is innate: any DNA with the site, no memory'))}
</svg>`

/* 9 — lac merodiploids: proteins act in trans, operators in cis (lead, 1000×460) */
/** A raised small 'c' (lacOᶜ renders unevenly as a modifier letter), and the text after it back on the baseline. */
const SUP_C = '<tspan dy="-7" font-size="12">c</tspan>'
const AFTER_SUP = (rest: string) => `<tspan dy="7">${rest}</tspan>`
type LacCopy = { iPlus: boolean; oc: boolean; zPlus: boolean }
const LAC_PANELS: Array<{ x0: number; title: string; chrom: LacCopy; fp: LacCopy; result: string; constitutive: boolean; why: string }> = [
  { x0: 12, title: 'lacI⁻ / F′ lacI⁺', chrom: { iPlus: false, oc: false, zPlus: true }, fp: { iPlus: true, oc: false, zPlus: true }, result: 'Inducible (normal)', constitutive: false, why: 'repressor diffuses: acts in trans' },
  { x0: 342, title: `lacO${SUP_C}${AFTER_SUP(' lacZ⁺ / F′ lacO⁺ lacZ⁻')}`, chrom: { iPlus: true, oc: true, zPlus: true }, fp: { iPlus: true, oc: false, zPlus: false }, result: 'Constitutive', constitutive: true, why: `O${SUP_C}${AFTER_SUP(' frees only its own lacZ⁺ (cis)')}` },
  { x0: 672, title: `lacO${SUP_C}${AFTER_SUP(' lacZ⁻ / F′ lacO⁺ lacZ⁺')}`, chrom: { iPlus: true, oc: true, zPlus: false }, fp: { iPlus: true, oc: false, zPlus: true }, result: 'Inducible', constitutive: false, why: `O${SUP_C}${AFTER_SUP(' drives only a dead lacZ⁻')}` },
]
const REPRESSOR = (x: number, y: number) => `${BOX(x - 20, y - 13, 40, 26, 13, 2.5, 0.25)}${T(x, y + 6, 15, 'rep', 'middle', '700')}`
const lacCopy = (x0: number, y: number, c: LacCopy, label: string, redMark: string) => {
  const ix = x0 + 14
  const ox = x0 + 112
  const zx = x0 + 168
  let s = `${G('fig-muted', `${LINE(x0 + 4, y, x0 + 312, y, 3)}${T(x0 + 4, y - 30, 16, label)}`)}`
  s += c.iPlus ? `${BOX(ix, y - 16, 62, 32, 6, 2.5, 0.08)}${TB(ix + 31, y + 6, 17, 'I⁺')}` : G('fig-accent-2', `${BOX(ix, y - 16, 62, 32, 6, 2.5, 0.12)}${TB(ix + 31, y + 6, 17, 'I⁻')}`)
  s += c.oc
    ? G('fig-accent-2', `${BOX(ox, y - 16, 44, 32, 6, 3, 0.12, true)}${TB(ox + 20, y + 6, 17, `O${SUP_C}`)}`)
    : `${BOX(ox, y - 16, 44, 32, 6, 2.5, 0.08)}${TB(ox + 22, y + 6, 17, 'O⁺')}`
  s += c.zPlus ? `${BOX(zx, y - 16, 136, 32, 6, 2.5, 0.08)}${TB(zx + 68, y + 6, 17, 'lacZ⁺')}` : G('fig-accent-2', `${BOX(zx, y - 16, 136, 32, 6, 2.5, 0.12)}${TB(zx + 68, y + 6, 17, 'lacZ⁻')}`)
  return s + redMark
}
const lacPanel = (p: (typeof LAC_PANELS)[number], i: number) => {
  const cy = 136
  const fy = 268
  const ox = p.x0 + 134
  const zx = p.x0 + 168
  let s = TB(p.x0 + 158, 38, 18, p.title)
  s += lacCopy(p.x0, cy, p.chrom, 'chromosome', '')
  s += lacCopy(p.x0, fy, p.fp, 'F′', '')
  // repressor on each O⁺ operator; an Oᶜ operator gets a floating repressor and a red ✗
  const ops: Array<[number, LacCopy]> = [[cy, p.chrom], [fy, p.fp]]
  for (const [y, c] of ops) {
    if (!c.oc) s += G('fig-accent', REPRESSOR(ox, y - 30))
    else {
      s += G('fig-accent', REPRESSOR(ox, y - 50))
      s += G('fig-accent-2', `${LINE(ox - 6, y - 32, ox + 6, y - 20, 3)}${LINE(ox + 6, y - 32, ox - 6, y - 20, 3)}`)
      // Oᶜ: transcription runs into lacZ
      const mk = `arr-mg-lac${i}-${c.zPlus ? 'b' : 'r'}`
      s += G(
        c.zPlus ? 'fig-accent' : 'fig-accent-2',
        `<defs>${ARROW(mk)}</defs>${ARR(zx + 6, y + 30, zx + 130, y + 30, mk, 3)}${T(zx + 68, y + 54, 16, c.zPlus ? 'β-gal made' : 'no active enzyme', 'middle', '700')}`,
      )
    }
  }
  if (!p.chrom.iPlus) {
    // trans: repressor from the F′ copy reaches the chromosome's operator too
    s += G('fig-accent', `<defs>${ARROW(`arr-mg-lac${i}-t`)}</defs>${ARR(p.x0 + 45, fy - 18, ox - 24, cy - 22, `arr-mg-lac${i}-t`, 2.5, true)}${T(p.x0 + 104, 214, 16, 'trans', 'start', '700')}`)
  }
  s += G(p.constitutive ? 'fig-accent-2' : 'fig-accent', T(p.x0 + 158, 352, 20, p.result, 'middle', '700'))
  s += TM(p.x0 + 158, 380, 16, p.why)
  return s
}
const lacSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${G('fig-muted', `${LINE(334, 20, 334, 392, 1.5)}${LINE(664, 20, 664, 392, 1.5)}`)}
${LAC_PANELS.map(lacPanel).join('')}
${TB(500, 424, 20, 'No lactose. Proteins (repressor, CAP) act in trans; DNA sites (operator) act in cis.')}
</svg>`

/* 10 — Hershey–Chase: which label enters the cell (lead, 1000×460) */
const TUBE = (y: number, superCls: 'fig-accent-2' | 'fig-muted', pelletCls: 'fig-accent' | 'fig-muted') =>
  `${G(superCls, `<rect x="506" y="${y - 44}" width="48" height="76" rx="4" fill="currentColor" fill-opacity="0.22"/>${[[518, y - 26], [540, y - 8], [520, y + 14]].map(([x, yy]) => `<polygon points="${x - 7},${yy} ${x - 3.5},${yy - 6} ${x + 3.5},${yy - 6} ${x + 7},${yy} ${x + 3.5},${yy + 6} ${x - 3.5},${yy + 6}" fill="currentColor"/>`).join('')}`)}` +
  `${G(pelletCls, `<ellipse cx="530" cy="${y + 46}" rx="20" ry="10" fill="currentColor"/>`)}` +
  `<rect x="500" y="${y - 64}" width="60" height="132" rx="28" fill="none" stroke="currentColor" stroke-width="2.5"/>` +
  G('fig-muted', `${T(570, y - 4, 16, 'coats')}${T(570, y + 52, 16, 'cells')}`)
const HC_PHAGE_S = (cx: number, cy: number) => `${G('fig-accent-2', PHAGE(cx, cy, ''))}${SQUIGGLE(cx, cy)}`
const HC_PHAGE_P = (cx: number, cy: number) => `${PHAGE(cx, cy, '')}${G('fig-accent', SQUIGGLE(cx, cy))}`
const hcInfect = (y: number, p: boolean) =>
  `${BOX(268, y - 6, 140, 62, 28, 2.5, 0.06)}` +
  (p
    ? `${PHAGE(338, y - 52, '')}${G('fig-accent', `${SQUIGGLE(338, y + 26)}${LINE(338, y - 2, 338, y + 14, 3, true)}`)}`
    : `${G('fig-accent-2', PHAGE(338, y - 52, ''))}${SQUIGGLE(338, y + 26)}${LINE(338, y - 2, 338, y + 14, 3, true)}`)
const hersheySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-hc')}</defs>
${G('fig-muted', `${TM(150, 34, 17, 'label the phage')}${TM(338, 34, 17, 'infect')}${TM(530, 34, 17, 'blend, spin')}${TM(800, 34, 17, 'where the label ends up')}${LINE(20, 222, 980, 222, 1.5)}`)}
${G('fig-accent-2', `${T(24, 118, 26, '³⁵S', 'start', '700')}${T(24, 144, 17, 'protein')}`)}
${HC_PHAGE_S(150, 104)}
${ARR(196, 120, 240, 120, 'arr-mg-hc', 2.5)}
${hcInfect(124, false)}
${ARR(420, 120, 482, 120, 'arr-mg-hc', 2.5)}
${TUBE(124, 'fig-accent-2', 'fig-muted')}
${G('fig-accent-2', T(640, 112, 20, 'Supernatant, with the coats', 'start', '700'))}
${T(640, 140, 18, 'not in the cells, not in progeny')}
${G('fig-accent', `${T(24, 318, 26, '³²P', 'start', '700')}${T(24, 344, 17, 'DNA')}`)}
${HC_PHAGE_P(150, 304)}
${ARR(196, 320, 240, 320, 'arr-mg-hc', 2.5)}
${hcInfect(324, true)}
${ARR(420, 320, 482, 320, 'arr-mg-hc', 2.5)}
${TUBE(324, 'fig-muted', 'fig-accent')}
${G('fig-accent', T(640, 312, 20, 'Pellet, inside the cells', 'start', '700'))}
${T(640, 340, 18, 'and it turns up in progeny phage')}
${TB(500, 432, 21, 'What enters the cell and is inherited is DNA')}
</svg>`

/* 11 — Complementation: the test and Worked Example 1's grid (lead, 1000×460) */
/** A red triangle pointing at a mutation site: above the upper genome (pointing down) or below the lower one (pointing up). */
const MUT = (x: number, y: number, top: boolean) =>
  G('fig-accent-2', top ? `<polygon points="${x - 8},${y - 27} ${x + 8},${y - 27} ${x},${y - 14}" fill="currentColor"/>` : `<polygon points="${x - 8},${y + 27} ${x + 8},${y + 27} ${x},${y + 14}" fill="currentColor"/>`)
const GENOME = (y: number, muts: number[], top: boolean) =>
  `${G('fig-muted', LINE(40, y, 316, y, 2.5))}${BOX(58, y - 12, 116, 24, 6, 2, 0.06)}${BOX(190, y - 12, 116, 24, 6, 2, 0.06)}${G('fig-muted', `${T(116, y + 6, 15, 'gene 1', 'middle')}${T(248, y + 6, 15, 'gene 2', 'middle')}`)}${muts.map((x) => MUT(x, y, top)).join('')}`
const CT_ROWS: Array<{ y: number; title: string; g1: number[]; g2: number[]; wt: boolean; res: string; sub: string }> = [
  { y: 96, title: 'trans: mutations in different genes', g1: [100], g2: [262], wt: true, res: 'wild type', sub: 'complement → 2 genes' },
  { y: 216, title: 'trans: both in the same gene', g1: [92], g2: [140], wt: false, res: 'mutant', sub: 'fail → same gene' },
  { y: 336, title: 'cis control: both on one genome', g1: [92, 140], g2: [], wt: true, res: 'wild type', sub: 'the control passes' },
]
const FAIL = new Set(['1-3', '3-1', '2-4', '4-2'])
const CG_X = 620
const CG_Y = 104
const CG = 48
const complementationGrid = () => {
  let s = ''
  for (let i = 1; i <= 5; i++) {
    s += TB(CG_X + (i - 0.5) * CG, CG_Y - 12, 19, String(i))
    s += TB(CG_X - 18, CG_Y + (i - 0.5) * CG + 7, 19, String(i))
    for (let j = 1; j <= 5; j++) {
      const x = CG_X + (j - 1) * CG
      const y = CG_Y + (i - 1) * CG
      const cx = x + CG / 2
      const cy = y + CG / 2
      if (i === j) s += G('fig-muted', `<rect x="${x}" y="${y}" width="${CG}" height="${CG}" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>`)
      else if (FAIL.has(`${i}-${j}`)) s += G('fig-accent-2', `<rect x="${x}" y="${y}" width="${CG}" height="${CG}" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>${LINE(cx - 10, cy, cx + 10, cy, 4)}`)
      else s += `${G('fig-muted', `<rect x="${x}" y="${y}" width="${CG}" height="${CG}" fill="none" stroke="currentColor" stroke-width="1.5"/>`)}${G('fig-accent', `${LINE(cx - 10, cy, cx + 10, cy, 3.5)}${LINE(cx, cy - 10, cx, cy + 10, 3.5)}`)}`
    }
  }
  return s
}
const complementationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${G('fig-muted', LINE(540, 20, 540, 450, 1.5))}
${TB(270, 34, 20, 'Co-infect two recessive mutants')}
${CT_ROWS.map((r) => `${T(40, r.y - 36, 17, r.title, 'start', '700')}${GENOME(r.y, r.g1, true)}${GENOME(r.y + 34, r.g2, false)}${G(r.wt ? 'fig-accent' : 'fig-accent-2', T(334, r.y + 10, 20, r.res, 'start', '700'))}${T(334, r.y + 36, 16, r.sub)}`).join('')}
${G('fig-muted', TM(270, 444, 16, 'complementation: products are shared, no genome changes'))}
${TB(770, 34, 20, 'Worked Example 1: five mutants')}
${G('fig-accent', T(760, 62, 17, '+ complement', 'end', '700'))}${G('fig-accent-2', T(784, 62, 17, '− fail', 'start', '700'))}
${complementationGrid()}
${TB(740, 384, 21, '{1, 3}   {2, 4}   {5}  →  3 genes')}
${G('fig-muted', TM(740, 414, 17, 'circle the failures, group by them;'))}
${G('fig-muted', TM(740, 438, 17, 'a mutant that complements all stands alone'))}
</svg>`

/* 12 — Drift vs shift with Worked Example 3's isolates (lead, 1000×460) */
const SEG_X0 = 196
const SEG_DX = 58
const HA_I = 3
const NA_I = 5
const DRIFT_DOTS: Array<[number, number]> = [[-12, -18], [8, -10], [-6, -2], [12, 6], [-12, 12], [4, 18], [-2, -24]]
const segRow = (y: number, kind: 'A' | 'B' | 'C') =>
  Array.from({ length: 8 }, (_, i) => {
    const x = SEG_X0 + i * SEG_DX
    const cx = x + 22
    if (i === HA_I && kind === 'C') return G('fig-accent-2', `${BOX(x, y - 30, 44, 60, 8, 3, 0.4)}`)
    const rod = BOX(x, y - 30, 44, 60, 8, 2.5, 0.1)
    if (i === HA_I && kind === 'B') return `${rod}${G('fig-accent', DRIFT_DOTS.map(([dx, dy]) => DOT(cx + dx, y + dy, 4)).join(''))}`
    return rod
  }).join('')
const DS_ROWS: Array<{ y: number; kind: 'A' | 'B' | 'C'; label: string; year: string }> = [
  { y: 116, kind: 'A', label: 'A', year: 'year 1' },
  { y: 240, kind: 'B', label: 'B', year: 'year 2' },
  { y: 364, kind: 'C', label: 'C', year: 'year 3' },
]
const driftShiftSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${TB(430, 34, 20, 'Influenza: 8 separate RNA segments')}
${G('fig-muted', `${T(SEG_X0 + HA_I * SEG_DX + 22, 74, 17, 'HA', 'middle', '700')}${T(SEG_X0 + NA_I * SEG_DX + 22, 74, 17, 'NA', 'middle', '700')}`)}
${DS_ROWS.map((r) => `${T(40, r.y - 2, 26, r.label, 'start', '700')}${G('fig-muted', T(40, r.y + 24, 17, r.year))}${segRow(r.y, r.kind)}`).join('')}
${G('fig-muted', `${LINE(670, 60, 670, 430, 1.5)}${T(690, 122, 18, 'the starting strain')}`)}
${G('fig-accent', `${T(690, 222, 21, 'A → B: drift', 'start', '700')}${T(690, 248, 17, '7 point changes scattered in HA')}`)}
${T(690, 272, 17, 'some immunity still works:')}${T(690, 294, 17, 'typical season, updated vaccine')}
${G('fig-accent-2', `${T(690, 346, 21, 'B → C: shift', 'start', '700')}${T(690, 372, 17, 'a bird strain’s whole HA segment;')}`)}
${T(690, 394, 17, 'other 7 segments match B')}
${G('fig-accent-2', T(690, 420, 17, 'little immunity: pandemic risk', 'start', '700'))}
${G('fig-muted', TM(430, 438, 17, 'only a segmented genome can reassort and shift'))}
</svg>`

export const mcatMicrobialGeneticsFigures: DeckFigurePlacement[] = [
  {
    at: 'Auxotrophs, Prototrophs, Selection and Screening',
    mode: 'lead',
    figure: {
      svg: replicaSvg,
      alt:
        'Replica plating, Worked Example 2. Left: a master plate on complete medium with eight colonies; colony 7 is blue. A velvet pad copies the plate onto four replica plates, each with a registration mark at the top, so every colony lands in the same position. On minimal medium and on minimal plus histidine, colony 7 is missing (a dashed red ring marks its empty spot); on minimal plus leucine and on complete medium it grows (blue). All other colonies grow on every plate. Conclusion: missing on minimal but present on complete means colony 7 is an auxotroph; leucine alone rescues it, so it is leu⁻, and it is picked from the same spot on the never-exposed master plate.',
      caption: 'Replica plating as a screen (the lesson’s Worked Example 2): an auxotroph is the colony that is present on complete medium and missing on minimal.',
    },
    blocks: [
      '- Absent on minimal, rescued by one added nutrient → that nutrient names the auxotroph',
      '- Screening by elimination: you cannot select a cell that does NOT grow, so you compare replicas',
    ],
  },
  {
    at: 'Do Mutations Come Before Selection?',
    mode: 'lead',
    figure: {
      svg: fluctuationSvg,
      alt:
        'Two bar charts on the same scale of resistant colonies (0 to 60). Left, Set 1, ten separate small cultures grown without phage and then plated on phage: 0, 0, 1, 0, 64, 0, 2, 0, 0, 9 colonies; the 64 bar is red and labelled jackpot, an early mutant left a big clone; dashed mean line at 7.6. Right, Set 2, ten samples of one culture (the control for plating noise): 11, 9, 12, 8, 10, 11, 9, 10, 12, 8; dashed mean line at 10. The means are similar, but the spread is huge across independent cultures and small within one culture, so the resistance arose before the phage was added.',
      caption: 'The Luria–Delbrück fluctuation test with the lesson’s Worked Example 1 counts: the tell is the variance, not the mean.',
    },
    blocks: [
      '- Induced by phage → every culture ≈ the same count; random **before** exposure → jackpots',
      '- Replica plating says the same: resistant colonies sit at the same spots on every replica',
    ],
  },
  {
    at: 'Transformation: Naked DNA',
    mode: 'lead',
    figure: {
      svg: averySvg,
      alt:
        'Top row, Griffith: heat-killed S cells alone, mouse lives; live R cells alone, mouse lives; heat-killed S plus live R, mouse dies and live S cells are recovered (red), so a heritable transforming principle passes from dead S to live R. Bottom, Avery, MacLeod and McCarty: an S-cell extract is split three ways and treated with protease, with RNase or with DNase before live R cells are added. After protease: S cells appear, it transforms (blue). After RNase: S cells appear, it transforms (blue). After DNase: no S cells, transformation abolished (red). Conclusion: only removing DNA stops it, so DNA is the transforming principle.',
      caption: 'Griffith found the transforming principle; Avery, MacLeod and McCarty identified it by subtraction: only DNase abolishes transformation.',
    },
    blocks: [
      '- If activity survives removal of a molecule, that molecule is not required',
      '- Transformation itself: competent cells import ONE strand and keep it only by **homologous recombination**',
    ],
  },
  {
    at: 'Transduction: DNA in a Phage Coat',
    mode: 'lead',
    figure: {
      svg: transductionSvg,
      alt:
        'Left, generalized transduction: an infected donor cell whose chromosome is chopped into fragments alongside phage DNA. Three new phage particles: two hold phage DNA (blue), one holds a host DNA fragment (red), the transducing particle. It injects the host fragment into a recipient cell, where the fragment must recombine into the chromosome (crossover marks); the recipient survives because no phage genes arrived. Any gene can move, at low frequency; one headful is about 1 to 2 percent of the chromosome. Right, specialized transduction: a chromosome with a prophage (blue) between host gene A and host gene B. Precise excision gives a circle of phage DNA only; imprecise excision gives a circle that carries host gene A (red label). Only the genes flanking the insertion site move, and the recipient keeps them by recombination.',
      caption: 'Generalized = random host DNA in a lytic headful (any gene); specialized = a prophage that excises imprecisely and takes its neighbours (flanking genes only).',
    },
    blocks: [
      '- Co-transduction only if both genes fit in one headful → high co-transduction = physically close',
      '- Specialized moves only the genes **beside** the prophage’s fixed insertion site',
    ],
  },
  {
    at: 'Conjugation: DNA Through a Bridge',
    mode: 'lead',
    figure: {
      svg: conjugationSvg,
      alt:
        'Left, two transfer tracks from the lesson’s interrupted-mating example. Hfr 1 (blue): transfer starts at oriT inside the integrated F and markers first appear in recipients at a 5 minutes, b 12, c 20, d 32; the rest of F would enter last, at about 100 minutes. A red break mark at 25 minutes: the pair breaks, so the recipient has a, b and c but not d and not F, and stays F⁻. Hfr 2 (red) enters from another origin in the other direction: c at 3 minutes, b at 11, a at 18 — the same spacings, c to b 8 minutes and b to a 7. Right, the overlay: a circle labelled 100-minute chromosome with a, b, c, d in order, spacings 7, 8 and 12 minutes between neighbours, a blue arrowhead for the Hfr 1 origin pointing toward a, and a red arrowhead for the Hfr 2 origin, 3 minutes past c, pointing back toward c.',
      caption: 'Interrupted mating with the lesson’s worked minutes: subtract entry times to get distances, and overlay Hfr strains into one circular map.',
    },
    blocks: [
      '- F⁺ × F⁻: the whole F crosses → both cells F⁺, chromosome rarely moves',
      '- Hfr: chromosome follows oriT in map order; F would arrive last → recipient stays **F⁻**',
    ],
  },
  {
    at: 'Transposable Elements',
    mode: 'lead',
    figure: {
      svg: transposonSvg,
      alt:
        'Left column. Insertion sequence: a transposase gene (blue box) flanked by two inverted repeats drawn as triangles pointing toward each other, inside host DNA. Composite transposon: a red kanR cargo box flanked by two blue IS boxes; the two IS ends move the whole block as one unit. Polar effect: a promoter and an operon of gene 1, gene 2, gene 3; a red insertion lands in gene 1, the mRNA stops there (red cross), and genes 2 and 3 are intact but not expressed. Right column. Cut-and-paste (conservative): the element leaves the donor DNA, which is left with a red break, and appears in the target. Replicative: the donor keeps its copy and the target gains a second copy.',
      caption: 'Transposon anatomy, what one insertion can do to an operon, and the two ways an element moves.',
    },
    blocks: [
      '- Plasmids move genes **between** cells; transposons move them **between DNA molecules** in one cell',
      '- Insertion = knockout + a selectable tag; in an operon’s first gene, a polar effect silences the rest',
    ],
  },
  {
    at: 'Restriction-Modification: Innate Defense',
    mode: 'lead',
    figure: {
      svg: rmSvg,
      alt:
        'Left, inside one cell: the host chromosome has three GAATTC sites, each tagged CH₃ (blue), so they are spared. Incoming phage DNA has two unmethylated GAATTC sites (red) and is broken at both: cut and degraded. The methyltransferase marks the host’s own sites; the restriction enzyme cuts only unmethylated ones. The system is innate: any DNA with the site, no memory. Right, the lesson’s plating example with strains X and Y, drawn as lawns with plaque holes. Phage grown on X: many plaques on X, two on Y. A rare escapee from a Y plaque, now Y-methylated (blue arrow), gives few plaques on X and many on Y. The sequence never changed: modification, not mutation.',
      caption: 'Restriction-modification (EcoRI cuts GAATTC): the methyl mark from the last host decides where a phage plates well.',
    },
    blocks: [
      '- A change that flips back after one passage through another host is **modification**, not mutation',
    ],
  },
  {
    at: 'CRISPR-Cas: Adaptive Immunity',
    mode: 'lead',
    figure: {
      svg: crisprSvg,
      alt:
        'Three panels. 1, Acquisition: a stretch of invading phage DNA (red) is copied into the CRISPR array as a new red spacer next to the leader; in the array, identical repeats (grey diamonds) alternate with unique spacers. 2, Expression: the array is transcribed into one long RNA, which is cut into short CRISPR RNAs, one spacer each (the first one red). 3, Interference: a blue Cas nuclease carries the red guide RNA, which pairs with the matching stretch of phage DNA, and the DNA is cut (red break). Footer: acquired, sequence-specific and inherited with the array, so CRISPR is adaptive; restriction-modification is innate, any DNA with the site, no memory.',
      caption: 'CRISPR-Cas: acquire a spacer, express it as a guide RNA, cut the matching DNA. Daughter cells inherit the array, so the immunity is inherited.',
    },
    blocks: [
      '- Immunity to **that** phage only, passed to daughter cells: adaptive, unlike restriction-modification',
    ],
  },
  {
    at: 'Operons: Regulation You Can Map with Mutants',
    mode: 'lead',
    figure: {
      svg: lacSvg,
      alt:
        'Three lac merodiploids, each with a chromosome copy and an F′ copy drawn as gene boxes I, O and lacZ, with no lactose present. Panel 1, lacI⁻ / F′ lacI⁺: the chromosome’s I⁻ makes no repressor, but repressor made from the F′ copy reaches the chromosome’s operator too (dashed arrow labelled trans), so both operators are bound: inducible (normal) — the repressor diffuses and acts in trans. Panel 2, lacOᶜ lacZ⁺ / F′ lacO⁺ lacZ⁻: repressor cannot bind the chromosome’s Oᶜ operator (red cross), so its lacZ⁺ is transcribed and β-gal is made: constitutive (red) — Oᶜ frees only its own lacZ⁺, a cis effect; the F′ operator is bound. Panel 3, lacOᶜ lacZ⁻ / F′ lacO⁺ lacZ⁺: the Oᶜ copy is transcribed but its lacZ⁻ gives no active enzyme, and the working lacZ⁺ sits behind a normal, bound operator: inducible. Footer: proteins (repressor, CAP) act in trans; DNA sites (operator) act in cis.',
      caption: 'The lesson’s merodiploid table drawn out: a diffusible repressor acts in trans, a broken operator only in cis.',
    },
    blocks: [
      '- Locate each mutation: a gene for a diffusible product (trans) or a site on the DNA (cis)?',
      '- lac is HIGH only with lactose present (repressor off) AND glucose absent (CAP-cAMP on)',
    ],
  },
  {
    at: 'Hershey-Chase: DNA Is the Genetic Material of Phage',
    mode: 'lead',
    figure: {
      svg: hersheySvg,
      alt:
        'Two rows, one per label, each going label the phage, infect, blend and spin, then where the label ends up. Top row, ³⁵S (labels protein, red): the phage coat is red; the coat stays on the cell surface while the phage DNA enters; after blending and centrifugation the red label is in the supernatant with the sheared-off coats, not in the cells and not in progeny. Bottom row, ³²P (labels DNA, blue): the phage DNA is blue and is injected into the cell; after blending and centrifugation the blue label is in the cell pellet, and it turns up in progeny phage. Conclusion: what enters the cell and is inherited is DNA.',
      caption: 'Hershey–Chase: ³⁵S marks protein (DNA has no sulfur), ³²P marks DNA (protein has almost no phosphorus). Only ³²P enters the cells and reaches progeny.',
    },
    blocks: [
      '- The phage counterpart of Avery: the material that **enters and is inherited** is DNA',
    ],
  },
  {
    at: 'Mapping and Counting Genes in Phage',
    mode: 'lead',
    figure: {
      svg: complementationSvg,
      alt:
        'Left, the complementation test, each case two phage genomes in one cell with gene 1 and gene 2 boxes and red crosses for recessive mutations. Trans, mutations in different genes (one in gene 1 of the first genome, one in gene 2 of the second): wild type, they complement, so two genes. Trans, both mutations in gene 1, one per genome: mutant, they fail, so same gene. Cis control, both mutations on one genome beside a fully wild-type genome: wild type, the control passes. Complementation shares products and changes no genome. Right, Worked Example 1: a five-by-five grid of mutants 1 to 5 with the diagonal greyed; every pair shows a blue plus (complement) except pairs 1 and 3 and pairs 2 and 4, which show a red minus (fail). Groups: {1, 3}, {2, 4} and {5}, so three genes; a mutant that complements all others stands alone.',
      caption: 'Complementation counts genes: failure to complement = same gene. The grid is the lesson’s five-mutant worked example.',
    },
    blocks: [
      '- Works only for **recessive** mutations; complementation groups = genes',
      '- Recombination is different: rare, builds a heritable wild type, maps sites within one gene',
    ],
  },
  {
    at: 'Recombination and Reassortment',
    mode: 'lead',
    figure: {
      svg: driftShiftSvg,
      alt:
        'Three influenza isolates from Worked Example 3, each drawn as a row of eight separate RNA segments, with the HA and NA segments labelled. Isolate A, year 1: the starting strain. Isolate B, year 2: identical except for seven blue dots scattered in the HA segment, the 7 point changes of antigenic drift; some immunity still works, so a typical season and an updated vaccine. Isolate C, year 3: its HA segment is red, a bird strain’s whole HA segment, while the other seven segments match B; this is antigenic shift by reassortment, with little population immunity and pandemic risk. Footer: only a segmented genome can reassort and shift.',
      caption: 'Drift = point changes accumulating in HA or NA; shift = a whole new HA or NA segment by reassortment (the lesson’s isolates A, B and C).',
    },
    blocks: [
      '- **Reassortment** needs a cell co-infected by two strains; pigs are a classic mixing vessel',
    ],
  },
]
