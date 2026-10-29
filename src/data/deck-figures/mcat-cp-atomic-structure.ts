import type { DeckFigurePlacement } from './index'

/**
 * Atomic Structure & Periodic Trends (MCAT C/P) — figures for the in-class
 * deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a choice tree for the
 * four quantum numbers, the diagonal-rule grid, orbital boxes with spin
 * arrows, a schematic s/p/d/f block map with trend arrows, successive-IE bar
 * staircases, a hydrogen level ladder with series arrows beside emission and
 * absorption strips, a sodium PES spectrum, a half-life decay curve) — no
 * textbook, prep-company or AAMC figure was copied. The only numbers drawn
 * are ones the lesson states (Na IE₁ 496 / IE₂ 4,562 kJ/mol; the element-X
 * series 786 … 19,784; F 3.98; E_n = −13.6/n² eV and the Balmer wavelengths
 * that follow from it; the ¹³¹I half-life example). The hydrogen ladder's
 * level spacing is compressed for legibility and the caption says so; the
 * PES binding-energy axis is schematic.
 *
 * Colours: electrons / spin arrows / "increases" BLUE (fig-accent), removed
 * electrons, exceptions and core shells RED (fig-accent-2), grid lines,
 * axes and asides grey (fig-muted). A <marker> inherits colour from ITS OWN
 * ancestors, so each coloured arrowhead is defined inside a group of that
 * colour; marker ids are unique per figure (arr-as-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A text line whose first words are bold: `<b>` is the bold part, `rest` follows in normal weight. */
const TB = (x: number, y: number, size: number, b: string, rest: string) =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="currentColor"><tspan font-weight="700">${b}</tspan>${rest}</text>`

/** A rounded box outlined in the current colour; `fillOpacity` > 0 tints it with the same colour. */
const BOX = (x: number, y: number, w: number, h: number, rx = 10, sw = 2.5, fillOpacity = 0) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"/>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/**
 * An orbital box (square, side `s`) with its spin arrows drawn in blue:
 * '' empty, 'u' one up, 'ud' a pair. `marker` must be a blue marker defined
 * inside a fig-accent group of the same figure. `dashed` = an emptied box.
 */
const SPIN = (x: number, y: number, spins: '' | 'u' | 'ud', marker: string, s = 44, dashed = false) => {
  const cx = x + s / 2
  const up = (ax: number) => `<line x1="${ax}" y1="${y + s - 9}" x2="${ax}" y2="${y + 9}" stroke="currentColor" stroke-width="2.5" marker-end="url(#${marker})"/>`
  const down = (ax: number) => `<line x1="${ax}" y1="${y + 9}" x2="${ax}" y2="${y + s - 9}" stroke="currentColor" stroke-width="2.5" marker-end="url(#${marker})"/>`
  const arrows = spins === 'u' ? up(cx) : spins === 'ud' ? up(cx - 8) + down(cx + 8) : ''
  return `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="4" fill="none" stroke="currentColor" stroke-width="2"${dashed ? ' stroke-dasharray="5 4"' : ''}/>${arrows ? `<g class="fig-accent">${arrows}</g>` : ''}`
}

/** A row of orbital boxes, left to right, `gap` apart. */
const ROW = (x: number, y: number, spins: ('' | 'u' | 'ud')[], marker: string, s = 44, gap = 6, dashed = false) =>
  spins.map((sp, i) => SPIN(x + i * (s + gap), y, sp, marker, s, dashed)).join('')

/* 1 — The four quantum numbers as a choice tree for n = 3 (replace-table, 560×440) */
const qnRow = (yc: number, l: number, name: string, count: number, total: string, marker: string) => {
  const x0 = 345 - (26 * count - 4) / 2
  const boxes = Array.from({ length: count }, (_, i) => `<rect x="${x0 + 26 * i}" y="${yc - 11}" width="22" height="22" rx="3" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>`).join('')
  const labels = Array.from({ length: count }, (_, i) => T(x0 + 26 * i + 11, yc + 26, 11, String(i - l).replace('-', '−').replace(/^(\d)/, '+$1'), 'middle')).join('')
  return `${ARR(86, 220, 141, yc, 'arr-as-qn', 2)}
${BOX(145, yc - 18, 80, 36, 8, 2)}${T(185, yc + 5, 13, `ℓ = ${l} · ${name}`, 'middle', '700')}
${ARR(229, yc, x0 - 6, yc, 'arr-as-qn', 2)}
${boxes}<g class="fig-muted">${labels}</g>
${SPIN(434, yc - 16, 'ud', marker, 32)}
${T(476, yc + 6, 16, total, 'start', '700')}`
}
const quantumSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-as-qn')}</defs>
<g class="fig-accent"><defs>${ARROW('arr-as-qn-b')}</defs></g>
${T(280, 26, 16, 'an electron’s address, one choice at a time (n = 3 shown)', 'middle', '700')}
<g class="fig-muted">
${T(58, 60, 13, 'n (shell)', 'middle')}
${T(185, 60, 13, 'ℓ = 0 … n − 1', 'middle')}
${T(345, 60, 13, 'mℓ = −ℓ … +ℓ', 'middle')}
${T(480, 60, 13, 'ms = ±½ each', 'middle')}
</g>
<circle cx="58" cy="220" r="28" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
${T(58, 226, 17, 'n = 3', 'middle', '700')}
${qnRow(115, 0, '3s', 1, '2 e⁻', 'arr-as-qn-b')}
${qnRow(220, 1, '3p', 3, '6 e⁻', 'arr-as-qn-b')}
${qnRow(325, 2, '3d', 5, '10 e⁻', 'arr-as-qn-b')}
<g class="fig-accent-2">${T(280, 378, 13, 'ℓ = 3 (an f subshell) would need n ≥ 4 — impossible here, since ℓ ≤ n − 1', 'middle')}</g>
${T(280, 404, 13, 'orbitals per subshell = 2ℓ + 1; each holds two electrons of opposite spin (Pauli)', 'middle')}
${T(280, 430, 15, 'shell n = 3 holds 2 + 6 + 10 = 18 = 2n² electrons', 'middle', '700')}
</svg>`

/* 2 — The diagonal rule, and Hund + Pauli on nitrogen and oxygen (lead, 1000×460) */
const SUBSHELLS: [number, number][] = [[1, 0], [2, 0], [2, 1], [3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3], [6, 0], [6, 1], [6, 2], [7, 0], [7, 1]]
const cellX = (l: number) => 80 + 70 * l
const cellY = (n: number) => 80 + 48 * (n - 1)
const diagonalArrows = [1, 2, 3, 4, 5, 6, 7, 8].map((k) => {
  const cells = SUBSHELLS.filter(([n, l]) => n + l === k).sort((a, b) => a[0] - b[0])
  const [tn, tl] = cells[0]
  const [bn, bl] = cells[cells.length - 1]
  return `<line x1="${cellX(tl) + 36}" y1="${cellY(tn) - 25}" x2="${cellX(bl) - 36}" y2="${cellY(bn) + 25}" stroke="currentColor" stroke-width="3" stroke-opacity="0.4" marker-end="url(#arr-as-fill-b)"/>`
}).join('\n')
const subshellLabels = SUBSHELLS.map(([n, l]) => T(cellX(l), cellY(n) + 6, 18, `${n}${'spdf'[l]}`, 'middle', '700')).join('')
const fillingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent"><defs>${ARROW('arr-as-fill-b')}</defs>
${diagonalArrows}
</g>
${subshellLabels}
${T(40, 40, 18, 'Aufbau: the diagonal rule', 'start', '700')}
<g class="fig-muted">
${T(40, 418, 13, 'read each arrow top-right to bottom-left, arrows in turn:')}
${LINE(420, 30, 420, 440, 1.5)}
</g>
${T(40, 442, 15, '1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s', 'start', '700')}
${T(450, 40, 18, 'Pauli + Hund: nitrogen and oxygen', 'start', '700')}
${ROW(470, 66, ['ud'], 'arr-as-fill-b')}${ROW(540, 66, ['ud'], 'arr-as-fill-b')}${ROW(630, 66, ['u', 'u', 'u'], 'arr-as-fill-b')}
<g class="fig-muted">${T(492, 130, 14, '1s', 'middle')}${T(562, 130, 14, '2s', 'middle')}${T(702, 130, 14, '2p', 'middle')}</g>
${T(800, 88, 17, 'N (Z = 7): 2p³', 'start', '700')}
${T(800, 112, 14, '3 unpaired, all parallel')}
${ROW(470, 166, ['ud'], 'arr-as-fill-b')}${ROW(540, 166, ['ud'], 'arr-as-fill-b')}${ROW(630, 166, ['ud', 'u', 'u'], 'arr-as-fill-b')}
<g class="fig-muted">${T(492, 230, 14, '1s', 'middle')}${T(562, 230, 14, '2s', 'middle')}${T(702, 230, 14, '2p', 'middle')}</g>
${T(800, 188, 17, 'O (Z = 8): 2p⁴', 'start', '700')}
${T(800, 212, 14, '4th 2p e⁻ must pair →')}
${T(800, 232, 14, '2 unpaired')}
${TB(450, 290, 16, 'Aufbau', ' — fill the lowest-energy subshell first (the arrows at left)')}
${TB(450, 322, 16, 'Pauli', ' — at most 2 per box, and they must have opposite spins')}
${TB(450, 354, 16, 'Hund', ' — one per box with the same spin before any box gets two')}
<g class="fig-accent-2">${T(450, 398, 14, 'the forced pair in O costs repulsion: IE₁(O) &lt; IE₁(N) even though Z is higher')}</g>
<g class="fig-muted">${T(450, 424, 13, 'and N’s half-filled 2p³ resists a 4th electron: EA(N) ≈ 0, less negative than C')}</g>
</svg>`

/* 3 — Iron and its cations: 4s electrons leave before 3d (lead, 1000×460) */
const feRow = (y: number, species: string, d: ('' | 'u' | 'ud')[], s: '' | 'u' | 'ud', cfg: string, note: string) =>
  `${T(40, y + 32, 22, species, 'start', '700')}
${BOX(150, y, 66, 44, 6, 2, 0.06)}${T(183, y + 29, 16, '[Ar]', 'middle')}
${ROW(250, y, d, 'arr-as-fe-b')}
${SPIN(580, y, s, 'arr-as-fe-b', 44, s === '')}
${T(680, y + 20, 17, cfg, 'start', '700')}
${T(680, y + 42, 14, note)}`
const ironSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent"><defs>${ARROW('arr-as-fe-b')}</defs></g>
${T(40, 36, 18, 'iron, Z = 26: cations lose the OUTERMOST shell (highest n) first', 'start', '700')}
<g class="fig-muted">${T(372, 74, 14, '3d', 'middle')}${T(602, 74, 14, '4s', 'middle')}</g>
${feRow(84, 'Fe', ['ud', 'u', 'u', 'u', 'u'], 'ud', '[Ar] 3d⁶ 4s²', '4 unpaired')}
${feRow(206, 'Fe²⁺', ['ud', 'u', 'u', 'u', 'u'], '', '[Ar] 3d⁶', '4 unpaired — the 3d set is untouched')}
${feRow(328, 'Fe³⁺', ['u', 'u', 'u', 'u', 'u'], '', '[Ar] 3d⁵', '5 unpaired — half-filled, extra stable')}
<g class="fig-accent-2"><defs>${ARROW('arr-as-fe-r')}</defs>
${ARR(602, 134, 602, 200, 'arr-as-fe-r', 3)}
${T(618, 160, 15, '− 2 e⁻, both from 4s', 'start', '700')}
${T(618, 180, 13, 'never from 3d first (lower n)')}
${ARR(272, 256, 272, 322, 'arr-as-fe-r', 3)}
${T(290, 282, 15, '− 1 e⁻ from 3d: the paired one goes', 'start', '700')}
</g>
${T(40, 414, 16, 'once 4s is empty the 3d set sits below 4s (less shielding), so the ion keeps its d electrons')}
<g class="fig-muted">${T(40, 442, 14, 'same move for Mn (Z = 25), [Ar] 3d⁵ 4s² → Mn²⁺ = [Ar] 3d⁵ with 5 unpaired electrons')}</g>
</svg>`

/* 4 — Chromium and copper: one 4s electron hops into 3d (lead, 1000×460) */
const exHalf = (ox: number, name: string, expD: ('' | 'u' | 'ud')[], expS: 'u' | 'ud', actD: ('' | 'u' | 'ud')[], expCfg: string, actCfg: string, why: string) =>
  `${T(ox, 44, 20, name, 'start', '700')}
<g class="fig-muted">${T(ox, 74, 14, 'aufbau would predict')}${T(ox + 112, 142, 13, '3d', 'middle')}${T(ox + 290, 142, 13, '4s', 'middle')}</g>
${ROW(ox, 84, expD, 'arr-as-ex-b', 40)}${SPIN(ox + 270, 84, expS, 'arr-as-ex-b', 40)}
<g class="fig-accent-2">${T(ox, 174, 18, '✗', 'start', '700')}</g>${T(ox + 26, 174, 16, expCfg)}
<g class="fig-muted">${T(ox, 210, 14, 'actual ground state')}${T(ox + 112, 278, 13, '3d', 'middle')}${T(ox + 290, 278, 13, '4s', 'middle')}</g>
${ROW(ox, 220, actD, 'arr-as-ex-b', 40)}${SPIN(ox + 270, 220, 'u', 'arr-as-ex-b', 40)}
<g class="fig-accent">${T(ox, 310, 18, '✓', 'start', '700')}</g>${T(ox + 26, 310, 16, actCfg, 'start', '700')}
<g class="fig-accent-2">
${ARR(ox + 288, 128, ox + 232, 214, 'arr-as-ex-r', 2.5)}
${T(ox + 300, 180, 13, 'one 4s e⁻ hops')}
</g>
${T(ox, 346, 15, why)}`
const exceptionsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent"><defs>${ARROW('arr-as-ex-b')}</defs></g>
<g class="fig-accent-2"><defs>${ARROW('arr-as-ex-r')}</defs></g>
${exHalf(40, 'chromium, Z = 24', ['u', 'u', 'u', 'u', ''], 'ud', ['u', 'u', 'u', 'u', 'u'], '[Ar] 3d⁴ 4s²', '[Ar] 3d⁵ 4s¹ — half-filled d', 'five parallel d electrons: maximum exchange stabilization')}
${exHalf(530, 'copper, Z = 29', ['ud', 'ud', 'ud', 'ud', 'u'], 'ud', ['ud', 'ud', 'ud', 'ud', 'ud'], '[Ar] 3d⁹ 4s²', '[Ar] 3d¹⁰ 4s¹ — filled d', 'a complete d¹⁰ shell is worth more than a 4s pair')}
<g class="fig-muted">${LINE(500, 30, 500, 370, 1.5)}</g>
${T(500, 412, 16, 'half-filled (d⁵) and filled (d¹⁰) subshells are extra stable — enough to borrow one 4s electron', 'middle', '700')}
<g class="fig-muted">${T(500, 440, 14, 'their cations still lose 4s first: Cr³⁺ = [Ar] 3d³, Cu²⁺ = [Ar] 3d⁹', 'middle')}</g>
</svg>`

/* 5 — Periodic trends on an s/p/d/f block map, with the exceptions marked (lead, 1000×460) */
const CW = 24
const CH = 28
const gx = (group: number) => 60 + CW * (group - 1)
const py = (period: number) => 86 + CH * (period - 1)
const cell = (group: number, period: number, cls: 'fig-accent' | 'fig-accent-2' | '', op: number) => {
  const r = `<rect x="${gx(group)}" y="${py(period)}" width="${CW}" height="${CH}" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.45"/>`
  return cls ? `<g class="${cls}">${r}</g>` : r
}
const blockMap = (() => {
  const out: string[] = []
  for (let p = 1; p <= 7; p++) {
    const groups = p === 1 ? [1, 18] : p <= 3 ? [1, 2, 13, 14, 15, 16, 17, 18] : Array.from({ length: 18 }, (_, i) => i + 1)
    for (const g of groups) out.push(g <= 2 ? cell(g, p, 'fig-accent', 0.18) : g >= 13 ? cell(g, p, 'fig-accent-2', 0.12) : cell(g, p, '', 0.1))
  }
  for (let r = 0; r < 2; r++) for (let i = 0; i < 14; i++)
    out.push(`<rect x="${gx(4) + CW * i}" y="${py(8) + 4 + CH * r}" width="${CW}" height="${CH}" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="0.8" stroke-opacity="0.45"/>`)
  return out.join('')
})()
const trendRow = (y: number, prop: string, across: string, down: string) =>
  `${T(560, y, 15, prop)}${T(790, y, 15, across)}${T(900, y, 15, down)}<g class="fig-muted">${LINE(560, y + 10, 980, y + 10, 1)}</g>`
const trendsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(276, 30, 17, 'the periodic table as a block map', 'middle', '700')}
${blockMap}
<g class="fig-muted">
${T(84, py(5) + 20, 20, 's', 'middle', '700')}${T(gx(8), py(5) + 20, 20, 'd', 'middle', '700')}${T(gx(16), py(5) + 20, 20, 'p', 'middle', '700')}${T(gx(11), py(8) + 4 + CH + 7, 20, 'f', 'middle', '700')}
</g>
<g class="fig-accent"><rect x="${gx(17)}" y="${py(2)}" width="${CW}" height="${CH}" fill="currentColor" fill-opacity="0.5"/></g>
<g class="fig-accent-2"><rect x="${gx(13)}" y="${py(3)}" width="${CW}" height="${CH}" fill="currentColor" fill-opacity="0.45"/><rect x="${gx(16)}" y="${py(3)}" width="${CW}" height="${CH}" fill="currentColor" fill-opacity="0.45"/></g>
${T(gx(17) + 12, py(2) + 19, 12, 'F', 'middle', '700')}
${T(gx(2) + 12, py(3) + 19, 11, 'Mg', 'middle')}${T(gx(13) + 12, py(3) + 19, 11, 'Al', 'middle', '700')}
${T(gx(15) + 12, py(3) + 19, 11, 'P', 'middle')}${T(gx(16) + 12, py(3) + 19, 11, 'S', 'middle', '700')}
${T(gx(1) + 12, py(7) + 19, 11, 'Fr', 'middle')}${T(gx(1) + 12, py(6) + 19, 11, 'Cs', 'middle')}
<g class="fig-accent"><defs>${ARROW('arr-as-tr-b')}</defs>
${ARR(60, 72, 492, 72, 'arr-as-tr-b', 3)}
${T(276, 58, 14, 'across →  Zeff ↑ :  radius ↓,  IE ↑,  EN ↑', 'middle', '700')}
</g>
<g class="fig-accent-2"><defs>${ARROW('arr-as-tr-r')}</defs>
${ARR(44, 86, 44, 282, 'arr-as-tr-r', 3)}
<text x="30" y="184" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(-90 30 184)">down ↓ : radius ↑, IE ↓, EN ↓</text>
</g>
<g class="fig-muted">${T(276, 372, 12, 's block blue · p block red · d and f blocks grey', 'middle')}</g>
<g class="fig-accent-2">${T(276, 394, 12, 'red cells dip below the neighbour to their left in IE₁: Al &lt; Mg, S &lt; P', 'middle')}</g>
${T(276, 416, 12, 'F (top-right): smallest, most electronegative, 3.98 · Cs / Fr (bottom-left): largest', 'middle')}
<g class="fig-muted">${LINE(530, 30, 530, 440, 1.5)}</g>
${T(560, 60, 20, 'Zeff = Z − σ drives every trend', 'start', '700')}
<g class="fig-muted">${T(560, 84, 14, 'σ ≈ the number of inner-shell electrons shielding the outer one')}</g>
${T(560, 122, 15, 'property', 'start', '700')}${T(790, 122, 15, 'across →', 'start', '700')}${T(900, 122, 15, 'down ↓', 'start', '700')}
${LINE(560, 132, 980, 132, 2)}
${trendRow(160, 'atomic radius', 'decreases', 'increases')}
${trendRow(190, 'first ionization energy', 'increases', 'decreases')}
${trendRow(220, 'electronegativity', 'increases', 'decreases')}
${trendRow(250, 'electron affinity', 'more negative', 'less negative')}
${trendRow(280, 'metallic character', 'decreases', 'increases')}
${T(560, 318, 15, 'ions: a cation is smaller, an anion larger, than its atom')}
${T(560, 342, 14, 'isoelectronic (10 e⁻): N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Ne &gt; Na⁺ &gt; Mg²⁺ &gt; Al³⁺')}
<g class="fig-accent-2">
${T(560, 372, 13, 'IE dips: Mg &gt; Al (Al’s 3p is shielded by the 3s² pair)')}
${T(560, 392, 13, 'and P &gt; S (S’s fourth 3p electron is paired, so it repels)')}
${T(560, 412, 13, 'EA ≈ 0 or positive: IIA (full s²), VA (half-full p³), noble gases')}
</g>
<g class="fig-muted">${T(560, 440, 14, 'ΔEN:  &lt; 0.5 nonpolar · 0.5 – 1.7 polar covalent · ≥ 1.7 ionic')}</g>
</svg>`

/* 6 — Successive ionization energies: the jump marks the core (lead, 1000×460). Log scale: y = 370 − 150·(log₁₀ IE − 2.4) */
const ieY = (v: number) => 370 - 150 * (Math.log10(v) - 2.4)
const ieBar = (x: number, v: number, label: string, shown: string, core: boolean) => {
  const top = ieY(v)
  const bar = `<rect x="${x}" y="${top.toFixed(1)}" width="60" height="${(370 - top).toFixed(1)}" fill="currentColor" fill-opacity="${core ? 0.3 : 0.22}" stroke="currentColor" stroke-width="2"/>`
  return `<g class="${core ? 'fig-accent-2' : 'fig-accent'}">${bar}${T(x + 30, top - 8, 14, shown, 'middle', '700')}</g>${T(x + 30, 392, 14, label, 'middle')}`
}
const ieSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
${LINE(80, ieY(1000), 940, ieY(1000), 1, true)}${T(72, ieY(1000) + 5, 12, '1,000', 'end')}
${LINE(80, ieY(10000), 940, ieY(10000), 1, true)}${T(72, ieY(10000) + 5, 12, '10,000', 'end')}
${LINE(80, 370, 940, 370, 2)}
${LINE(370, 30, 370, 440, 1.5)}
<text x="26" y="230" font-size="13" text-anchor="middle" fill="currentColor" transform="rotate(-90 26 230)">IE (kJ/mol, log scale)</text>
</g>
${T(220, 50, 17, 'sodium, [Ne] 3s¹', 'middle', '700')}
${ieBar(130, 496, 'IE₁', '496', false)}
${ieBar(250, 4562, 'IE₂', '4,562', true)}
${T(670, 50, 17, 'element X: 786, 1,577, 3,232, 4,356, 16,010, 19,784', 'middle', '700')}
${[786, 1577, 3232, 4356, 16010, 19784].map((v, i) => ieBar(430 + 80 * i, v, `IE${'₁₂₃₄₅₆'[i]}`, v.toLocaleString('en-US'), i >= 4)).join('')}
<g class="fig-accent-2">
${LINE(220, 86, 220, 380, 2, true)}${T(220, 76, 13, 'Ne core', 'middle', '700')}
${LINE(740, 86, 740, 380, 2, true)}${T(740, 76, 13, 'core', 'middle', '700')}
</g>
${T(220, 424, 14, '×9 jump after ONE electron → group IA', 'middle', '700')}
${T(670, 424, 14, 'jump after the 4th → 4 valence e⁻ → group IVA', 'middle', '700')}
<g class="fig-muted">${T(500, 450, 14, 'each successive IE is larger (a more positive ion holds on harder); a JUMP means the next electron is core', 'middle')}</g>
</svg>`

/* 7 — Hydrogen: the level ladder with series arrows, beside Balmer emission vs absorption strips (lead, 1000×460). λ = 1240 / ΔE */
const LV: Record<string, number> = { '1': 395, '2': 230, '3': 170, '4': 140, '5': 120, '6': 105, '∞': 70 }
const levelLine = (n: string, label: string) => `${LINE(80, LV[n], 330, LV[n], n === '∞' ? 1.5 : 2.5, n === '∞')}${T(340, LV[n] + 4, n === '5' || n === '6' ? 12 : 13, label)}`
const drop = (x: number, from: string, to: string) => ARR(x, LV[from] + 3, x, LV[to] - 5, 'arr-as-h', 2)
const lx = (nm: number) => 600 + (nm - 400) * (340 / 300)
const BALMER: [number, string, string][] = [[656, 'Hα 656 nm (3→2)', 'red'], [486, 'Hβ 486 (4→2)', ''], [434, 'Hγ 434 (5→2)', ''], [410, 'Hδ 410 (6→2)', '']]
const spectraSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-as-h')}</defs>
${T(40, 36, 17, 'hydrogen: every line is a drop between two rungs', 'start', '700')}
${levelLine('∞', 'n = ∞   0 eV (ionized)')}
${levelLine('6', 'n = 6  −0.38 eV')}
${levelLine('5', 'n = 5  −0.54 eV')}
${levelLine('4', 'n = 4  −0.85 eV')}
${levelLine('3', 'n = 3  −1.51 eV')}
${levelLine('2', 'n = 2  −3.40 eV')}
${levelLine('1', 'n = 1  −13.6 eV')}
${drop(110, '2', '1')}${drop(126, '3', '1')}${drop(142, '∞', '1')}
${drop(192, '3', '2')}${drop(206, '4', '2')}${drop(220, '5', '2')}${drop(234, '6', '2')}
${drop(286, '4', '3')}${drop(298, '5', '3')}${drop(310, '6', '3')}
${T(126, 420, 13, 'Lyman → n = 1 (UV)', 'middle', '700')}
${T(248, 258, 13, 'Balmer → n = 2 (visible)', 'start', '700')}
${T(250, 198, 13, 'Paschen → n = 3 (IR)', 'start', '700')}
<g class="fig-muted">
${T(126, 440, 12, 'largest drop in a series: ∞ → n_f', 'middle')}
${T(290, 440, 12, 'smallest: (n_f + 1) → n_f', 'middle')}
${T(300, 60, 12, 'spacing compressed; energies as labelled', 'middle')}
${LINE(540, 30, 540, 440, 1.5)}
</g>
${T(560, 36, 17, 'Balmer lines (→ n = 2) sit in the visible window', 'start', '700')}
${T(560, 76, 14, 'emission: bright lines where electrons FALL to n = 2')}
<rect x="600" y="86" width="340" height="40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.5"/>
<g class="fig-accent">${BALMER.map(([nm]) => `<rect x="${(lx(nm) - 2).toFixed(1)}" y="86" width="4" height="40" fill="currentColor"/>`).join('')}</g>
${T(560, 160, 14, 'absorption: dark gaps where electrons CLIMB from n = 2')}
<rect x="600" y="170" width="340" height="40" fill="currentColor" fill-opacity="0.22"/>
${BALMER.map(([nm]) => `<rect class="fig-bg" x="${(lx(nm) - 2).toFixed(1)}" y="170" width="4" height="40"/>`).join('')}
<g class="fig-muted">
${LINE(600, 222, 940, 222, 1.5)}
${[400, 500, 600, 700].map((nm) => `${LINE(lx(nm), 218, lx(nm), 226, 1.5)}${T(nm === 400 ? lx(nm) - 6 : lx(nm), 242, 12, nm === 700 ? '700 nm' : String(nm), nm === 400 ? 'end' : 'middle')}`).join('')}
</g>
${BALMER.map(([nm, label], i) => `${LINE(lx(nm), 226, lx(nm), 250 + 20 * (i === 2 ? 1 : i === 3 ? 2 : 0), 1)}${T(lx(nm), 264 + 20 * (i === 2 ? 1 : i === 3 ? 2 : 0), 12, label, 'middle')}`).join('')}
${T(560, 340, 14, 'same ΔE both ways: emitted when falling, absorbed when climbing')}
${T(560, 366, 14, 'λ = hc / ΔE — red Hα is the smallest Balmer drop (3 → 2)')}
${T(560, 398, 15, 'ΔE = 13.6 (1/n_f² − 1/n_i²) eV: closer rungs → longer λ', 'start', '700')}
<g class="fig-muted">${T(560, 426, 13, 'Lyman (→ 1): all UV · Paschen (→ 3): all infrared — off this window')}</g>
</svg>`

/* 8 — The PES spectrum of sodium: four peaks, heights 1 : 6 : 2 : 2 (after, 1000×460) */
const peak = (x: number, electrons: number, label: string, cls: 'fig-accent' | 'fig-accent-2' | '') => {
  const top = 380 - 45 * electrons
  const path = `<path d="M${x - 26} 380 C${x - 9} 380 ${x - 9} ${top} ${x} ${top} C${x + 9} ${top} ${x + 9} 380 ${x + 26} 380" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>`
  const body = `${path}${T(x, top - 12, 15, label, 'middle', '700')}`
  return cls ? `<g class="${cls}">${body}</g>` : body
}
const pesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-as-pes')}</defs>
${ARR(80, 380, 950, 380, 'arr-as-pes', 2.5)}
${ARR(80, 380, 80, 60, 'arr-as-pes', 2.5)}
<text x="44" y="230" font-size="14" text-anchor="middle" fill="currentColor" transform="rotate(-90 44 230)">relative number of electrons</text>
${T(515, 412, 14, 'binding energy →  (increasing to the right HERE — always read the axis label)', 'middle')}
${peak(200, 1, '3s (1 e⁻)', 'fig-accent')}
${peak(420, 6, '2p (6 e⁻)', '')}
${peak(520, 2, '2s (2 e⁻)', '')}
${peak(820, 2, '1s (2 e⁻)', 'fig-accent-2')}
<g class="fig-accent">${T(200, 280, 14, 'valence: lowest BE,', 'middle')}${T(200, 298, 14, 'easiest to remove', 'middle')}</g>
<g class="fig-accent-2">${T(820, 256, 14, 'core: tightest bound', 'middle')}</g>
${T(600, 70, 18, 'sodium, Z = 11: [Ne] 3s¹', 'start', '700')}
${T(600, 100, 15, 'KE of the ejected electron = hν − BE')}
${T(600, 126, 15, 'peak height (area) ∝ electrons in that subshell')}
${T(600, 152, 15, 'heights 1 : 6 : 2 : 2 → 1 + 6 + 2 + 2 = 11 electrons', 'start', '700')}
${T(600, 178, 15, 'four peaks = four occupied subshells')}
<g class="fig-muted">${T(600, 204, 13, 'BE axis schematic: 1s really sits far beyond 2s')}</g>
<g class="fig-muted">${T(515, 444, 14, 'flip the axis and the picture mirrors — read the ORDER: valence at low BE, 1s at the high end', 'middle')}</g>
</svg>`

/* 9 — The half-life decay curve with the 100 / 50 / 25 / 12.5 / 6.25 % staircase (replace-table, 560×440). x = 70 + 105 t, y = 340 − 2.8 · % */
const hx = (t: number) => 70 + 105 * t
const hy = (pct: number) => 340 - 2.8 * pct
const curvePts = Array.from({ length: 81 }, (_, i) => i / 20).map((t) => `${hx(t).toFixed(1)},${hy(100 * Math.pow(0.5, t)).toFixed(1)}`).join(' ')
const halfLifeSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-as-hl')}</defs>
${T(280, 28, 16, 'N = N₀ · (½)^(t / t½)  — every half-life halves what is LEFT', 'middle', '700')}
<g class="fig-muted">
${[1, 2, 3, 4].map((t) => LINE(hx(t), hy(100 * Math.pow(0.5, t)), hx(t), 340, 1.5, true)).join('')}
${LINE(70, hy(50), hx(1), hy(50), 1.5, true)}${LINE(70, hy(25), hx(2), hy(25), 1.5, true)}
${T(62, hy(50) + 4, 11, '50', 'end')}${T(62, hy(25) + 4, 11, '25', 'end')}
</g>
${ARR(70, 340, 520, 340, 'arr-as-hl', 2.5)}
${ARR(70, 340, 70, 44, 'arr-as-hl', 2.5)}
${T(62, hy(100) + 4, 11, '100', 'end')}
<text x="24" y="200" font-size="13" text-anchor="middle" fill="currentColor" transform="rotate(-90 24 200)">% remaining</text>
${[0, 1, 2, 3, 4].map((t) => T(hx(t), 360, 13, t === 0 ? 'start' : String(t), 'middle')).join('')}
${T(295, 384, 13, 'half-lives elapsed (t / t½)', 'middle')}
<g class="fig-accent">
<polyline points="${curvePts}" fill="none" stroke="currentColor" stroke-width="3"/>
${[0, 1, 2, 3, 4].map((t) => `<circle cx="${hx(t)}" cy="${hy(100 * Math.pow(0.5, t)).toFixed(1)}" r="5" fill="currentColor"/>`).join('')}
</g>
${T(84, hy(100) + 5, 14, '100 %', 'start', '700')}
${T(hx(1) + 12, hy(50) - 2, 14, '50 %', 'start', '700')}
${T(hx(2) + 12, hy(25) - 2, 14, '25 %', 'start', '700')}
${T(hx(3) + 12, hy(12.5) - 4, 14, '12.5 %', 'start', '700')}
${T(hx(4) + 4, hy(6.25) - 12, 14, '6.25 %', 'start', '700')}
<g class="fig-accent">${T(280, 410, 13, '40 g of ¹³¹I, t½ = 8 d: 32 d = 4 half-lives → 40 / 16 = 2.5 g left', 'middle', '700')}</g>
<g class="fig-muted">${T(280, 432, 12, 'backwards: 12.5 % left = 3 half-lives (radiocarbon: 3 × 5,730 = 17,190 y)', 'middle')}</g>
</svg>`

export const mcatAtomicStructureFigures: DeckFigurePlacement[] = [
  {
    at: 'The Four Quantum Numbers',
    mode: 'replace-table',
    figure: {
      svg: quantumSvg,
      alt:
        'A choice tree for n = 3. From a circle labelled n = 3, arrows lead to three boxes: ℓ = 0 (3s), ℓ = 1 (3p) and ℓ = 2 (3d). Each box points to its orbitals, one small square per mℓ value: 3s has one (0), 3p has three (−1, 0, +1), 3d has five (−2 to +2). A final box with an up and a down arrow shows ms = ±½, so each orbital holds two electrons: 2 e⁻ in 3s, 6 e⁻ in 3p, 10 e⁻ in 3d. Notes: ℓ = 3 (an f subshell) would need n ≥ 4 and is impossible here because ℓ ≤ n − 1; orbitals per subshell = 2ℓ + 1, each holding two electrons of opposite spin (Pauli); shell n = 3 holds 2 + 6 + 10 = 18 = 2n² electrons.',
      caption: 'The four quantum numbers as nested choices: n → ℓ → mℓ → ms, giving 18 electron addresses in the n = 3 shell.',
    },
    blocks: [
      '- $n \\geq 1$; $\\ell = 0 \\ldots n-1$ ($s, p, d, f$); $m_\\ell = -\\ell \\ldots +\\ell$; $m_s = \\pm\\tfrac{1}{2}$',
      '- Orbitals per subshell $= 2\\ell + 1$: $s$ 1, $p$ 3, $d$ 5, $f$ 7 — two electrons each',
      '- **Trap:** $\\ell = n$ or $|m_\\ell| > \\ell$ is impossible ($n = 2, \\ell = 2$ fails)',
      '- A whole shell holds $2n^2$ electrons: $n = 3$ → 18',
    ],
  },
  {
    at: 'Three Rules for Filling Orbitals',
    mode: 'lead',
    figure: {
      svg: fillingSvg,
      alt:
        'Left: the diagonal rule — a grid of subshell labels, rows n = 1 to 7 and columns s, p, d, f (1s; 2s 2p; 3s 3p 3d; 4s 4p 4d 4f; 5s 5p 5d 5f; 6s 6p 6d; 7s 7p), with blue arrows running from upper right to lower left through the cells of equal n + ℓ. Reading the arrows in turn gives the filling order 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s. Right: orbital box diagrams. Nitrogen (Z = 7): 1s and 2s boxes each hold a paired up and down arrow; the three 2p boxes hold one up arrow each — 3 unpaired, all parallel. Oxygen (Z = 8): the same, but the first 2p box now holds a pair, so the fourth 2p electron must pair — 2 unpaired. The rules: Aufbau — fill the lowest-energy subshell first; Pauli — at most 2 per box with opposite spins; Hund — one per box with the same spin before any box gets two. Note in red: the forced pair in O costs repulsion, so IE₁(O) < IE₁(N) even though Z is higher; and N’s half-filled 2p³ resists a fourth electron, so EA(N) ≈ 0.',
      caption: 'Aufbau as the diagonal rule; Pauli and Hund as orbital boxes — nitrogen keeps three parallel 2p electrons, oxygen’s fourth must pair.',
    },
    blocks: [
      '- **Aufbau** from the diagonals: $1s\\,2s\\,2p\\,3s\\,3p\\,4s\\,3d\\,4p\\,5s \\ldots$ — $4s$ before $3d$',
      '- **Pauli:** ≤ 2 per orbital, opposite spins; **Hund:** one per orbital, parallel, before pairing',
    ],
  },
  {
    at: 'Writing Electron Configurations',
    mode: 'lead',
    figure: {
      svg: ironSvg,
      alt:
        'Three rows of orbital boxes for iron (Z = 26), each with an [Ar] core box, five 3d boxes and one 4s box. Fe: 3d holds one pair and four single up arrows, 4s holds a pair — [Ar] 3d⁶ 4s², 4 unpaired. A red arrow removes 2 e⁻, both from 4s (never from 3d first, which has lower n). Fe²⁺: the 4s box is empty and dashed, 3d unchanged — [Ar] 3d⁶, 4 unpaired, the 3d set untouched. A red arrow removes 1 e⁻ from 3d: the paired one goes. Fe³⁺: five single up arrows in 3d, 4s empty — [Ar] 3d⁵, 5 unpaired, half-filled and extra stable. Footer: once 4s is empty the 3d set sits below 4s (less shielding), so the ion keeps its d electrons; the same move takes Mn, [Ar] 3d⁵ 4s², to Mn²⁺ = [Ar] 3d⁵ with 5 unpaired electrons.',
      caption: 'Iron’s cations in orbital boxes: the 4s pair leaves first, then one paired 3d electron — Fe²⁺ is [Ar] 3d⁶, Fe³⁺ the half-filled [Ar] 3d⁵.',
    },
    blocks: [
      '- Fe $3d^6 4s^2$ → Fe²⁺ $3d^6$ → Fe³⁺ $3d^5$ ($[\\text{Ar}]$ core): **highest-$n$** electrons leave first',
      '- Unpaired by Hund: Fe 4, Fe²⁺ 4, Fe³⁺ 5 (half-filled $d^5$, extra stable); Mn²⁺ is $3d^5$ too',
    ],
  },
  {
    at: 'Exceptions to Aufbau',
    mode: 'lead',
    figure: {
      svg: exceptionsSvg,
      alt:
        'Two panels of orbital boxes. Chromium (Z = 24): aufbau would predict four single 3d electrons, one empty 3d box and a 4s pair — [Ar] 3d⁴ 4s², marked with a red cross; the actual ground state has five single 3d electrons and one 4s electron — [Ar] 3d⁵ 4s¹, half-filled d, marked with a blue tick; a red arrow shows one 4s electron hopping into the empty 3d box; five parallel d electrons give maximum exchange stabilization. Copper (Z = 29): predicted four 3d pairs, one single 3d and a 4s pair — [Ar] 3d⁹ 4s², crossed; actual five 3d pairs and one 4s electron — [Ar] 3d¹⁰ 4s¹, filled d, ticked; a complete d¹⁰ shell is worth more than a 4s pair. Footer: half-filled (d⁵) and filled (d¹⁰) subshells are extra stable, enough to borrow one 4s electron; their cations still lose 4s first: Cr³⁺ = [Ar] 3d³, Cu²⁺ = [Ar] 3d⁹.',
      caption: 'The two MCAT exceptions: chromium and copper each move one 4s electron into 3d to reach a half-filled (d⁵) or filled (d¹⁰) set.',
    },
    blocks: [
      '- Cr: $[\\text{Ar}]3d^5 4s^1$ (not $3d^4 4s^2$); Cu: $[\\text{Ar}]3d^{10} 4s^1$ (not $3d^9 4s^2$)',
      '- Half-filled or filled $d$ is extra stable — worth one $4s$ electron; the cations still lose $4s$ first',
    ],
  },
  {
    at: 'Atomic Radius',
    mode: 'lead',
    figure: {
      svg: trendsSvg,
      alt:
        'Left: a schematic periodic table drawn as blocks — s block (groups 1–2, blue), d block (groups 3–12, grey), p block (groups 13–18, red) and the f block below (grey). A blue arrow across the top reads: across → Zeff ↑: radius ↓, IE ↑, EN ↑. A red arrow down the left reads: down ↓: radius ↑, IE ↓, EN ↓. Marked cells: F at the top right (smallest, most electronegative, 3.98), Cs and Fr at the bottom left (largest); in period 3, Mg, Al, P and S, with Al and S shaded red because their IE₁ dips below the neighbour to their left (Al < Mg, S < P). Right: Zeff = Z − σ drives every trend, where σ ≈ the number of inner-shell electrons shielding the outer one. A table of property / across → / down ↓: atomic radius decreases / increases; first ionization energy increases / decreases; electronegativity increases / decreases; electron affinity more negative / less negative; metallic character decreases / increases. Ions: a cation is smaller, an anion larger, than its atom; the isoelectronic 10-electron series N³⁻ > O²⁻ > F⁻ > Ne > Na⁺ > Mg²⁺ > Al³⁺. Exceptions in red: IE Mg > Al (Al’s 3p is shielded by 3s²) and P > S (S’s paired 3p repels); EA ≈ 0 or positive for group IIA (full s²), group VA (half-full p³) and the noble gases. Bond type by ΔEN: < 0.5 nonpolar, 0.5–1.7 polar covalent, ≥ 1.7 ionic.',
      caption: 'Trends on a block map: Zeff tightens everything across a period, extra shells loosen it down a group; the Mg/Al and P/S IE dips in red.',
    },
    blocks: [
      '- $Z_{eff} = Z - \\sigma$: across → radius ↓, IE ↑, EN ↑; down ↓ the reverse; cation $<$ atom $<$ anion',
      '- Isoelectronic: more protons → smaller (O²⁻ > F⁻ > Na⁺); IE dips at Al ($<$ Mg) and S ($<$ P)',
    ],
  },
  {
    at: 'Ionization Energy',
    mode: 'lead',
    figure: {
      svg: ieSvg,
      alt:
        'Two bar charts of successive ionization energies on a log scale (guide lines at 1,000 and 10,000 kJ/mol). Left, sodium [Ne] 3s¹: IE₁ = 496 (blue) then IE₂ = 4,562 (red), with a red dashed line labelled Ne core between them — a ×9 jump after ONE electron → group IA. Right, element X with IE₁ to IE₆ = 786, 1,577, 3,232, 4,356 (blue bars rising steadily) then 16,010 and 19,784 (red bars), with the dashed core line between the 4th and 5th — the jump after the 4th electron means 4 valence electrons → group IVA. Footer: each successive IE is larger because a more positive ion holds on harder; a JUMP means the next electron is a core electron.',
      caption: 'Successive IEs climb steadily, then jump at the core: sodium after one electron (group IA), element X after four (group IVA); log scale.',
    },
    blocks: [
      '- Each IE is larger than the last; a **big jump** = you just entered a core shell',
      '- Electrons removed before the jump = valence count = main-group number: Na after 1 (IA), X after 4 (IVA)',
    ],
  },
  {
    at: 'Spectral Series in Hydrogen',
    mode: 'lead',
    figure: {
      svg: spectraSvg,
      alt:
        'Left: hydrogen energy levels as horizontal rungs labelled n = 1 (−13.6 eV), n = 2 (−3.40 eV), n = 3 (−1.51 eV), n = 4 (−0.85 eV), n = 5 (−0.54 eV), n = 6 (−0.38 eV) and a dashed n = ∞ at 0 eV (ionized); the spacing is compressed for legibility. Downward arrows group into series: Lyman arrows end on n = 1 (ultraviolet), Balmer arrows end on n = 2 (visible), Paschen arrows end on n = 3 (infrared); the largest drop in a series is ∞ → n_f, the smallest (n_f + 1) → n_f. Right: two strips over a 400–700 nm axis. The emission strip shows four bright blue lines where electrons FALL to n = 2; the absorption strip is a continuous band with dark gaps at the same positions where electrons CLIMB from n = 2. The lines: Hα 656 nm (3→2), Hβ 486 (4→2), Hγ 434 (5→2), Hδ 410 (6→2). Notes: the same ΔE applies both ways — emitted on the way down, absorbed on the way up; λ = hc/ΔE, so the red Hα is the smallest Balmer drop; ΔE = 13.6 (1/n_f² − 1/n_i²) eV, closer rungs give longer wavelength; Lyman (→ 1) is all UV and Paschen (→ 3) all infrared, outside this window.',
      caption: 'Hydrogen’s series as drops onto n = 1, 2, 3 (spacing compressed), and the Balmer lines in emission (bright) and absorption (dark gaps).',
    },
    blocks: [
      '- Series by landing rung: Lyman → $n = 1$ (UV), Balmer → $n = 2$ (visible), Paschen → $n = 3$ (IR)',
      '- $\\Delta E = 13.6(1/n_f^2 - 1/n_i^2)$ eV: biggest photon $\\infty \\to n_f$, smallest $(n_f+1) \\to n_f$',
    ],
  },
  {
    at: 'Interpreting a PES Spectrum',
    mode: 'after',
    figure: {
      svg: pesSvg,
      alt:
        'A photoelectron spectrum of sodium, Z = 11, [Ne] 3s¹: binding energy increases to the right along the horizontal axis (the label warns to always read the axis direction), relative number of electrons on the vertical axis. Four peaks from left to right: 3s (1 e⁻), a small blue peak at the lowest binding energy — valence, easiest to remove; 2p (6 e⁻), the tallest peak; 2s (2 e⁻); and 1s (2 e⁻) in red at the far right — core, tightest bound. Notes: kinetic energy of the ejected electron = hν − BE; peak height (area) ∝ electrons in that subshell; heights 1 : 6 : 2 : 2 add to 11 electrons; four peaks = four occupied subshells; the binding-energy axis is schematic (1s really sits far beyond 2s). Footer: flip the axis and the picture mirrors — read the ORDER: valence at low BE, 1s at the high end.',
      caption: 'Sodium’s PES spectrum: four peaks for four subshells, heights 1 : 6 : 2 : 2, valence 3s at low binding energy and core 1s at the high end (axis schematic).',
    },
    blocks: [
      '- One peak per subshell, height ∝ electrons: Na $1 : 6 : 2 : 2$ for $3s, 2p, 2s, 1s$ — sum $= 11 = Z$',
      '- Lowest BE = valence (easiest out), highest BE = $1s$ core; $KE = h\\nu - BE$ — check the axis direction',
    ],
  },
  {
    at: 'Half-Life',
    mode: 'replace-table',
    figure: {
      svg: halfLifeSvg,
      alt:
        'A decay curve of percent remaining against half-lives elapsed: N = N₀ · (½)^(t/t½), every half-life halves what is LEFT. A blue curve falls from 100 % at the start through dots at 50 % after 1 half-life, 25 % after 2, 12.5 % after 3 and 6.25 % after 4, with dashed drop lines to the axis. Below: 40 g of ¹³¹I with t½ = 8 days — 32 days is 4 half-lives, so 40 / 16 = 2.5 g is left; backwards, 12.5 % left means 3 half-lives (radiocarbon: 3 × 5,730 = 17,190 years).',
      caption: 'Half-life as a staircase on the decay curve: 100 → 50 → 25 → 12.5 → 6.25 %; four half-lives of ¹³¹I (32 days) leave 2.5 g of 40 g.',
    },
    blocks: [
      '- $N = N_0\\left(\\tfrac{1}{2}\\right)^{t/t_{1/2}}$; $\\lambda = \\ln 2 / t_{1/2}$ — count half-lives, don’t integrate',
      '- 1 → 50 %, 2 → 25 %, 3 → 12.5 %, 4 → 6.25 % of the **original**',
      '- ¹³¹I, $t_{1/2} = 8$ d: 32 d = 4 half-lives → $40/16 = 2.5$ g',
      '- Backwards: 12.5 % left = 3 half-lives (¹⁴C: $3 \\times 5{,}730 = 17{,}190$ y)',
    ],
  },
]
