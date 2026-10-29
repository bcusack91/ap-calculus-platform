import type { DeckFigurePlacement } from './index'

/**
 * Translation & Protein Synthesis (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing is ours, drawn from the concept: a codon strip read from the
 * AUG, a cloverleaf of stems and loops, a two-step charging box with an
 * editing pocket, a two-column start-site comparison, a ribosome of two
 * ellipses with E/P/A slots and the three-step loop around it, a mutation
 * strip on the lesson's own mRNA, a PTM grid, the iron 2×2 (IRP on a 5' vs a
 * 3' hairpin) and a drug-target map on the ribosome. No textbook,
 * prep-company or AAMC figure was copied. The only numbers drawn are the ones
 * the lesson states (64 codons / 20 aa, 70S = 30S + 50S, 80S = 40S + 60S,
 * 2 ATP + 2 GTP ≈ 4 bonds per residue). No structural formulas — amino acids,
 * sugars and ubiquitin are labelled circles; molecules are boxes.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so every
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-tl-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 12) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 5}" font-size="${r + 3}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

const f = (v: number) => +v.toFixed(1)

/** Text helper: optional anchor, bold, and a theme class (wrapped in a <g>). */
const TX = (x: number, y: number, fs: number, txt: string, o: { a?: 'middle' | 'end'; b?: boolean; cls?: string } = {}) => {
  const t = `<text x="${x}" y="${y}" font-size="${fs}"${o.b ? ' font-weight="700"' : ''}${o.a ? ` text-anchor="${o.a}"` : ''} fill="currentColor">${txt}</text>`
  return o.cls ? `<g class="${o.cls}">${t}</g>` : t
}

/** A red highlighted run inside a <text> (changed base, changed residue). */
const HL = (s: string) => `<tspan class="fig-accent-2" fill="currentColor" font-weight="700">${s}</tspan>`

/** Rounded labelled box centred on (cx, cy). */
const BOX = (cx: number, cy: number, w: number, h: number, label: string, fs = 16, op = 0.12, bold = true) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="${Math.min(10, h / 3)}" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="2"/>` +
  `<text x="${cx}" y="${cy + fs * 0.36}" font-size="${fs}"${bold ? ' font-weight="700"' : ''} text-anchor="middle" fill="currentColor">${label}</text>`

/** A small tRNA glyph: amino-acid disc on top, stem, anticodon loop with its three letters. */
const TRNA = (x: number, yTop: number, aa: string, aaCls: string, anti: string, stem = 40) =>
  `<g class="${aaCls}"><circle cx="${x}" cy="${yTop}" r="15" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="${x}" y="${yTop + 5}" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">${aa}</text></g>` +
  `<line x1="${x}" y1="${yTop + 15}" x2="${x}" y2="${yTop + 15 + stem}" stroke="currentColor" stroke-width="3"/>` +
  `<circle cx="${x}" cy="${yTop + 15 + stem + 13}" r="14" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>` +
  `<text x="${x}" y="${yTop + 15 + stem + 17}" font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">${anti}</text>`

/* ───────────────────────── 1 — The code: one mRNA read in triplets from the AUG (lead, 1000×460) ───────────────────────── */

const codeLetters = 'GCAUGGCUUGGUGA'.split('')
const codeX = (i: number) => 100 + i * 46
const codeCls = (i: number) => (i < 2 ? 'fig-muted' : i <= 4 ? 'fig-accent' : i >= 11 ? 'fig-accent-2' : '')
const codeCell = (i: number) => {
  const x = codeX(i)
  const body =
    `<rect x="${x - 20}" y="70" width="40" height="44" rx="6" fill="currentColor" fill-opacity="${codeCls(i) ? 0.2 : 0.08}" stroke="currentColor" stroke-width="2"/>` +
    `<text x="${x}" y="101" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${codeLetters[i]}</text>`
  return codeCls(i) ? `<g class="${codeCls(i)}">${body}</g>` : body
}
const codeBracket = (i0: number, label: string, cls?: string) => {
  const x0 = codeX(i0) - 20
  const x1 = codeX(i0 + 2) + 20
  const body = `<path d="M${x0} 122 L${x0} 130 L${x1} 130 L${x1} 122" fill="none" stroke="currentColor" stroke-width="2"/>` + TX((x0 + x1) / 2, 152, 16, label, { a: 'middle', b: true })
  return cls ? `<g class="${cls}">${body}</g>` : body
}
const frameRow = (o: number) => {
  const y = 262 + o * 32
  let s = ''
  for (let g = o; g + 2 < 12; g += 3) {
    const hit = g === 2
    const rect = `<rect x="${72 + g * 30 - 14}" y="${y}" width="88" height="20" rx="5" fill="currentColor" fill-opacity="${hit ? 0.3 : 0.1}" stroke="currentColor" stroke-width="1.5"/>`
    s += hit ? `<g class="fig-accent">${rect}</g>` : rect
  }
  return s + TX(430, y + 15, 14, o === 2 ? 'frame 3 ✓' : `frame ${o + 1}`, o === 2 ? { b: true, cls: 'fig-accent' } : { cls: 'fig-muted' })
}
const codeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${TX(40, 44, 21, 'One mRNA, read 3 bases at a time from the first AUG', { b: true })}
${codeLetters.map((_, i) => codeCell(i)).join('')}
${TX(72, 101, 18, "5'", { a: 'end', b: true })}${TX(732, 101, 18, "3'", { b: true })}
${TX(123, 152, 14, 'leader', { a: 'middle', cls: 'fig-muted' })}
${codeBracket(2, 'Met · start', 'fig-accent')}${codeBracket(5, 'Ala')}${codeBracket(8, 'Trp')}${codeBracket(11, 'stop', 'fig-accent-2')}
${TX(775, 84, 18, '64 codons', { b: true })}
${TX(775, 108, 16, '→ 20 amino acids + stop')}
${TX(775, 136, 15, 'one codon = one meaning', { cls: 'fig-muted' })}
${TX(775, 158, 15, 'no commas between codons', { cls: 'fig-muted' })}
${TX(40, 214, 17, 'Three ways to cut — the AUG picks one', { b: true })}
${'GCAUGGCUUGGU'.split('').map((ch, i) => TX(72 + i * 30, 244, 15, ch, { a: 'middle', b: true })).join('')}
${frameRow(0)}${frameRow(1)}${frameRow(2)}
${TX(40, 384, 15, 'the AUG fixes the frame; every downstream codon follows it')}
${TX(40, 408, 15, 'indel of 1 or 2 bases → frameshift · indel of 3 → one residue')}
${TX(520, 214, 17, 'Degenerate: synonyms differ at base 3', { b: true })}
${['GCU', 'GCC', 'GCA', 'GCG'].map((c, i) => BOX(575 + i * 90, 246, 70, 32, `GC${HL(c[2])}`, 17, 0.08)).join('')}
${[575, 665, 755, 845].map((x) => `<line x1="${x}" y1="262" x2="710" y2="300" stroke="currentColor" stroke-width="1.5"/>`).join('')}
${BOX(710, 316, 80, 32, 'Ala', 17, 0.15)}
${TX(520, 360, 15, 'a base-3 change usually keeps the amino acid → silent')}
<g class="fig-accent-2">${['UAA', 'UAG', 'UGA'].map((c, i) => BOX(560 + i * 80, 395, 66, 30, c, 16, 0.15)).join('')}</g>
${TX(770, 390, 15, 'no tRNA fits a stop —')}${TX(770, 408, 15, 'release factors read them')}
${TX(520, 442, 14, 'nearly universal — mitochondria deviate slightly', { cls: 'fig-muted' })}
</svg>`

/* ───────────────────────── 2 — tRNA: the adapter, and the antiparallel rule (lead, 1000×460) ───────────────────────── */

const STEM_V = (x: number, y0: number, y1: number) => {
  let s = `<line x1="${x - 12}" y1="${y0}" x2="${x - 12}" y2="${y1}" stroke="currentColor" stroke-width="2.5"/><line x1="${x + 12}" y1="${y0}" x2="${x + 12}" y2="${y1}" stroke="currentColor" stroke-width="2.5"/>`
  for (let y = Math.min(y0, y1) + 8; y < Math.max(y0, y1) - 4; y += 12) s += `<line x1="${x - 12}" y1="${y}" x2="${x + 12}" y2="${y}" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.5"/>`
  return s
}
const STEM_H = (y: number, x0: number, x1: number) => {
  let s = `<line x1="${x0}" y1="${y - 12}" x2="${x1}" y2="${y - 12}" stroke="currentColor" stroke-width="2.5"/><line x1="${x0}" y1="${y + 12}" x2="${x1}" y2="${y + 12}" stroke="currentColor" stroke-width="2.5"/>`
  for (let x = x0 + 8; x < x1 - 4; x += 12) s += `<line x1="${x}" y1="${y - 12}" x2="${x}" y2="${y + 12}" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.5"/>`
  return s
}
const LOOP = (cx: number, cy: number, r: number, label: string) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>` + (label ? TX(cx, cy + 4, 12, label, { a: 'middle', cls: 'fig-muted' }) : '')
const trnaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-tl-trna')}</defs>
${TX(40, 286, 13, 'cloverleaf in 2D,', { cls: 'fig-muted' })}${TX(40, 304, 13, 'L-shaped in 3D', { cls: 'fig-muted' })}
${STEM_V(230, 110, 198)}
${TX(218, 100, 13, "5'", { a: 'middle', b: true })}
<line x1="242" y1="110" x2="242" y2="92" stroke="currentColor" stroke-width="2.5"/>
${['C', 'C', 'A'].map((ch, i) => `<rect x="232" y="${74 - i * 20}" width="20" height="18" rx="4" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/><text x="242" y="${88 - i * 20}" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">${ch}</text>`).join('')}
<line x1="252" y1="43" x2="272" y2="43" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent"><circle cx="288" cy="43" r="16" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>${TX(288, 48, 13, 'aa', { a: 'middle', b: true })}</g>
${TX(312, 38, 14, "amino acid on the 3' CCA end")}
${TX(312, 56, 14, 'high-energy ester bond', { cls: 'fig-accent-2' })}
${TX(258, 150, 12, 'acceptor stem', { cls: 'fig-muted' })}
${STEM_H(210, 130, 206)}${LOOP(104, 210, 26, 'D loop')}
${STEM_H(210, 254, 330)}${LOOP(356, 210, 26, 'TΨC')}
${STEM_V(230, 222, 300)}
${LOOP(230, 326, 28, '')}
${TX(262, 318, 12, 'anticodon loop', { cls: 'fig-muted' })}
${['U', 'A', 'C'].map((ch, i) => TX(210 + i * 20, 343, 15, ch, { a: 'middle', b: true })).join('')}
${TX(192, 347, 12, "3'", { a: 'end', b: true })}${TX(268, 347, 12, "5'", { b: true })}
${[210, 230, 250].map((x) => `<line x1="${x}" y1="356" x2="${x}" y2="380" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>`).join('')}
${['A', 'U', 'G'].map((ch, i) => `<rect x="${198 + i * 20}" y="382" width="24" height="24" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/>` + TX(210 + i * 20, 400, 15, ch, { a: 'middle', b: true })).join('')}
${TX(186, 400, 12, "5'", { a: 'end', b: true })}${TX(274, 400, 12, "3'", { b: true })}
<line x1="130" y1="414" x2="350" y2="414" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tl-trna)"/>
${TX(358, 418, 13, "mRNA 5'→3'", { cls: 'fig-muted' })}
<g class="fig-accent-2"><rect x="236" y="330" width="30" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>${TX(272, 372, 12, 'wobble')}</g>
${TX(60, 442, 14, "wobble: codon base 3 ↔ anticodon 5' base — G·U allowed", { cls: 'fig-accent-2' })}
<g class="fig-muted"><line x1="500" y1="30" x2="500" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
${TX(520, 40, 20, 'Antiparallel: complement, then reverse', { b: true })}
${TX(520, 98, 15, 'codon')}${['G', 'A', 'U'].map((ch, i) => TX(700 + i * 30, 98, 20, ch, { a: 'middle', b: true })).join('')}${TX(676, 98, 13, "5'", { a: 'end' })}${TX(784, 98, 13, "3'")}
${[700, 730, 760].map((x) => `<line x1="${x}" y1="106" x2="${x}" y2="122" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>`).join('')}
${TX(520, 142, 15, 'paired anticodon')}${['C', 'U', 'A'].map((ch, i) => TX(700 + i * 30, 142, 20, ch, { a: 'middle', b: true })).join('')}${TX(676, 142, 13, "3'", { a: 'end' })}${TX(784, 142, 13, "5'")}
${TX(816, 142, 13, "← reads right-to-left", { cls: 'fig-muted' })}
<g class="fig-accent"><defs>${ARROW('arr-tl-trna-b')}</defs><path d="M810 150 C 830 165, 830 170, 800 180" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arr-tl-trna-b)"/>
${TX(520, 188, 15, "written 5'→3'", { b: true })}${['A', 'U', 'C'].map((ch, i) => TX(700 + i * 30, 188, 20, ch, { a: 'middle', b: true })).join('')}${TX(676, 188, 13, "5'", { a: 'end' })}${TX(784, 188, 13, "3'")}</g>
${TX(520, 220, 14, "trap: unreversed 5'-CUA-3' would pair UAG, a stop", { cls: 'fig-accent-2' })}
${TX(520, 272, 18, 'One tRNA, several codons (wobble)', { b: true })}
${TX(750, 308, 16, "tRNA anticodon  3'-CGG-5'", { a: 'middle', b: true })}
<line x1="730" y1="316" x2="648" y2="350" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent-2"><line x1="770" y1="316" x2="852" y2="350" stroke="currentColor" stroke-width="2"/>${TX(880, 334, 13, 'G·U wobble', { b: true })}</g>
${BOX(640, 366, 110, 30, "5'-GCC-3'", 15, 0.08)}${BOX(860, 366, 110, 30, "5'-GCU-3'", 15, 0.08)}
${TX(640, 404, 14, 'Ala', { a: 'middle', b: true })}${TX(860, 404, 14, 'Ala', { a: 'middle', b: true })}
${TX(750, 436, 14, 'fewer than 61 tRNAs; synonyms only → never ambiguous', { a: 'middle' })}
</svg>`

/* ───────────────────────── 3 — Charging: two steps, an editing pocket, and Chapeville (lead, 1000×460) ───────────────────────── */

const synthSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-tl-syn')}</defs>
<g class="fig-muted"><rect x="60" y="64" width="560" height="132" rx="16" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/></g>
${TX(340, 88, 18, 'aminoacyl-tRNA synthetase — one per amino acid (20)', { a: 'middle', b: true })}
<g class="fig-accent"><circle cx="120" cy="140" r="22" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>${TX(120, 146, 15, 'aa', { a: 'middle', b: true })}</g>
${TX(152, 146, 16, '+ ATP')}
<line x1="212" y1="140" x2="262" y2="140" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tl-syn)"/>
${NUM(237, 116, '1')}
<g class="fig-accent">${BOX(311, 140, 90, 36, 'aa–AMP', 16, 0.15)}</g>
${TX(237, 180, 14, 'PPᵢ → 2 Pᵢ', { a: 'middle', cls: 'fig-accent-2' })}
<line x1="360" y1="140" x2="420" y2="140" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tl-syn)"/>
${NUM(390, 116, '2')}
${TX(390, 180, 14, "+ tRNA (3' CCA)", { a: 'middle' })}
<g class="fig-accent">${BOX(484, 140, 120, 36, 'aa–tRNA', 16, 0.15)}</g>
${TX(560, 180, 14, '+ AMP', { cls: 'fig-muted' })}
<line x1="548" y1="140" x2="700" y2="140" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tl-syn)"/>
${TX(640, 128, 13, 'to the ribosome', { a: 'middle', cls: 'fig-muted' })}
<g class="fig-accent-2"><rect x="150" y="186" width="80" height="20" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
${TX(190, 226, 14, 'editing site', { a: 'middle', b: true })}</g>
${TX(190, 244, 13, 'near-miss aa (Val for Ile) hydrolyzed', { a: 'middle' })}
${TX(430, 226, 14, 'costs 2 ATP equivalents (PPᵢ hydrolysis pulls it)', { a: 'middle', cls: 'fig-accent-2' })}
${TX(860, 88, 18, 'Energy banked', { a: 'middle', b: true })}
<g class="fig-accent-2">${BOX(860, 122, 160, 34, 'aa~tRNA ester bond', 15, 0.15)}</g>
<line x1="860" y1="142" x2="860" y2="176" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tl-syn)"/>
${BOX(860, 196, 160, 34, 'peptide bond', 15, 0.1)}
${TX(860, 236, 13, 'the ribosome spends no ATP/GTP here', { a: 'middle', cls: 'fig-muted' })}
<g class="fig-muted"><line x1="40" y1="266" x2="960" y2="266" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
${TX(40, 290, 17, 'Chapeville: the ribosome checks the anticodon, not the cargo', { b: true })}
${TRNA(120, 318, 'Cys', 'fig-accent', 'ACG')}
${TX(120, 426, 14, 'Cys on tRNA(Cys)', { a: 'middle', b: true })}${TX(120, 444, 12, 'charged correctly', { a: 'middle', cls: 'fig-muted' })}
<line x1="170" y1="352" x2="300" y2="352" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tl-syn)"/>
${TX(235, 340, 13, 'chemical reduction', { a: 'middle' })}
${TX(235, 370, 13, 'Cys → Ala, still attached', { a: 'middle', cls: 'fig-accent-2' })}
${TRNA(360, 318, 'Ala', 'fig-accent-2', 'ACG')}
${TX(360, 426, 14, 'Ala on tRNA(Cys)', { a: 'middle', b: true })}${TX(360, 444, 12, 'mischarged', { a: 'middle', cls: 'fig-accent-2' })}
<line x1="410" y1="352" x2="500" y2="352" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tl-syn)"/>
<g class="fig-muted"><rect x="520" y="304" width="240" height="92" rx="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>${TX(640, 324, 14, 'ribosome', { a: 'middle' })}</g>
<g class="fig-accent-2"><circle cx="640" cy="346" r="14" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>${TX(640, 351, 12, 'Ala', { a: 'middle', b: true })}</g>
<line x1="530" y1="384" x2="750" y2="384" stroke="currentColor" stroke-width="2.5"/>
${TX(640, 376, 16, '… U G C …', { a: 'middle', b: true })}
${TX(780, 342, 14, 'Ala is inserted at every')}${TX(780, 360, 14, 'cysteine codon (UGC)')}
${TX(780, 386, 14, 'wrong protein, no alarm', { cls: 'fig-accent-2' })}
${TX(780, 412, 14, 'synthetases guard the code', { b: true })}
</svg>`

/* ───────────────────────── 4 — Initiation: Shine–Dalgarno vs cap-and-scan, then the shared order (replace-table, 560×440) ───────────────────────── */

const RIBO_MINI = (cx: number, yM: number, large: boolean, sites: boolean) =>
  (large ? `<ellipse cx="${cx}" cy="${yM - 30}" rx="56" ry="26" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>` : '') +
  `<ellipse cx="${cx}" cy="${yM + 8}" rx="50" ry="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>` +
  (sites ? TX(cx - 22, yM + 38, 11, 'E', { a: 'middle', cls: 'fig-muted' }) + TX(cx, yM + 38, 11, 'P', { a: 'middle', b: true, cls: 'fig-accent' }) + TX(cx + 22, yM + 38, 11, 'A', { a: 'middle' }) + `<g class="fig-accent"><line x1="${cx}" y1="${yM + 24}" x2="${cx}" y2="${yM + 28}" stroke="currentColor" stroke-width="2"/></g>` : '')
const INIT_TRNA = (x: number, yM: number) =>
  `<g class="fig-accent"><line x1="${x}" y1="${yM - 2}" x2="${x}" y2="${yM - 34}" stroke="currentColor" stroke-width="2.5"/><circle cx="${x}" cy="${yM - 44}" r="10" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>${TX(x, yM - 40, 9, 'Met', { a: 'middle', b: true })}</g>`
const initSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-tl-ini')}</defs>
${TX(140, 22, 16, 'Prokaryote', { a: 'middle', b: true })}${TX(420, 22, 16, 'Eukaryote', { a: 'middle', b: true })}
<g class="fig-muted"><line x1="280" y1="8" x2="280" y2="206" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
<line x1="26" y1="76" x2="262" y2="76" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tl-ini)"/>
${TX(20, 80, 11, "5'", { a: 'end', b: true })}
${[40, 160].map((x) => `<g class="fig-accent"><rect x="${x}" y="66" width="24" height="20" rx="4" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>${TX(x + 12, 80, 10, 'SD', { a: 'middle', b: true })}</g>` + `<rect x="${x + 30}" y="66" width="34" height="20" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/>${TX(x + 47, 80, 11, 'AUG', { a: 'middle', b: true })}` + `<g class="fig-muted"><rect x="${x + 64}" y="70" width="48" height="12" rx="3" fill="currentColor" fill-opacity="0.35"/></g>`).join('')}
${TX(100, 58, 10, 'gene 1', { a: 'middle', cls: 'fig-muted' })}${TX(220, 58, 10, 'gene 2', { a: 'middle', cls: 'fig-muted' })}
<g class="fig-accent"><ellipse cx="60" cy="108" rx="40" ry="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>${TX(60, 112, 11, '30S', { a: 'middle', b: true })}
<line x1="52" y1="86" x2="56" y2="94" stroke="currentColor" stroke-width="2"/><line x1="58" y1="86" x2="62" y2="94" stroke="currentColor" stroke-width="2"/></g>
${TX(14, 142, 12, '16S rRNA base-pairs each SD')}
${TX(14, 160, 12, 'first aa = fMet (formylated)')}
${TX(14, 178, 12, 'internal starts → polycistronic OK')}
${TX(14, 196, 12, 'begins while the mRNA is still being made')}
<line x1="300" y1="76" x2="526" y2="76" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tl-ini)"/>
<g class="fig-accent-2"><circle cx="302" cy="76" r="8" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>${TX(302, 58, 10, 'cap', { a: 'middle', b: true })}</g>
<g class="fig-accent"><defs>${ARROW('arr-tl-ini-b')}</defs><ellipse cx="350" cy="104" rx="34" ry="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>${TX(350, 108, 11, '40S', { a: 'middle', b: true })}
<line x1="388" y1="104" x2="440" y2="104" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arr-tl-ini-b)"/>${TX(414, 96, 10, 'scans', { a: 'middle' })}</g>
<rect x="452" y="66" width="34" height="20" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/>${TX(469, 80, 11, 'AUG', { a: 'middle', b: true })}
<g class="fig-muted"><rect x="486" y="70" width="30" height="12" rx="3" fill="currentColor" fill-opacity="0.35"/>${TX(532, 80, 10, 'AAA')}</g>
${TX(296, 142, 12, 'cap bound, 40S scans to the first AUG')}
${TX(296, 160, 12, 'first aa = Met (not formylated)')}
${TX(296, 178, 12, 'one start per mRNA (monocistronic)')}
${TX(296, 196, 12, 'only after processing + nuclear export')}
<g class="fig-muted"><line x1="12" y1="216" x2="548" y2="216" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
${TX(280, 236, 15, 'Both: small subunit first, large last — initiator lands in P', { a: 'middle', b: true })}
${[95, 280, 465].map((cx) => `<line x1="${cx - 70}" y1="330" x2="${cx + 70}" y2="330" stroke="currentColor" stroke-width="2.5"/>`).join('')}
${RIBO_MINI(95, 322, false, false)}${INIT_TRNA(95, 322)}
${RIBO_MINI(280, 322, true, false)}${INIT_TRNA(280, 322)}
${RIBO_MINI(465, 322, true, true)}${INIT_TRNA(465, 322)}
<g class="fig-muted">${[95, 280, 465].map((cx) => `<line x1="${cx + 72}" y1="330" x2="${cx + 80}" y2="330" stroke="currentColor" stroke-width="2"/>`).join('')}</g>
<line x1="170" y1="296" x2="200" y2="296" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tl-ini)"/>
<line x1="355" y1="296" x2="385" y2="296" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tl-ini)"/>
${TX(95, 384, 11, '① small subunit + initiator', { a: 'middle', b: true })}${TX(95, 400, 11, 'find the AUG together', { a: 'middle' })}
${TX(280, 384, 11, '② large subunit joins last', { a: 'middle', b: true })}${TX(280, 400, 11, 'codon 2 now waits in A', { a: 'middle' })}
${TX(465, 384, 11, '③ initiator sits in P —', { a: 'middle', b: true })}${TX(465, 400, 11, 'only tRNA to enter P directly', { a: 'middle' })}
${TX(280, 428, 11, 'prokaryote fMet-tRNA, eukaryote Met-tRNAᵢ: same geometry', { a: 'middle', cls: 'fig-muted' })}
</svg>`

/* ───────────────────────── 5 — The ribosome and the three-step elongation loop (lead, 1000×460) ───────────────────────── */

const SITE = (x: number, label: string, cls?: string) => {
  const body = `<rect x="${x - 30}" y="170" width="60" height="130" rx="10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>` + TX(x, 160, 20, label, { a: 'middle', b: true })
  return cls ? `<g class="${cls}">${body}</g>` : body
}
const SLOT_TRNA = (x: number, aaCls: string, aa: boolean) =>
  `<line x1="${x}" y1="290" x2="${x}" y2="202" stroke="currentColor" stroke-width="3.5"/><rect x="${x - 13}" y="286" width="26" height="9" rx="3" fill="currentColor"/>` +
  (aa ? `<g class="${aaCls}"><circle cx="${x}" cy="190" r="12" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g>` : '')
const elongSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-tl-elo')}</defs>
<ellipse cx="500" cy="160" rx="210" ry="105" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2.5"/>
<ellipse cx="500" cy="290" rx="190" ry="42" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<line x1="150" y1="300" x2="850" y2="300" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tl-elo)"/>
${TX(136, 306, 18, "5'", { a: 'end', b: true })}${TX(862, 306, 18, "3'", { b: true })}
${TX(100, 120, 15, 'large subunit 50S / 60S')}
${TX(100, 334, 15, 'small subunit 30S / 40S')}
${SITE(410, 'E', 'fig-muted')}${SITE(500, 'P')}${SITE(590, 'A', 'fig-accent')}
${SLOT_TRNA(500, '', false)}
${[190, 172, 154, 136].map((y) => `<circle cx="500" cy="${y}" r="9" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>`).join('')}
${TX(486, 128, 13, 'growing chain', { a: 'end', cls: 'fig-muted' })}
${SLOT_TRNA(590, 'fig-accent', true)}
${TX(404, 104, 14, 'peptidyl transferase = rRNA (a ribozyme)', { a: 'middle', cls: 'fig-accent-2' })}
<g class="fig-accent-2"><defs>${ARROW('arr-tl-elo-r')}</defs><path d="M512 130 C 560 100, 604 130, 596 172" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tl-elo-r)"/>${NUM(560, 108, '2')}</g>
<g class="fig-accent"><defs>${ARROW('arr-tl-elo-b')}</defs>
<circle cx="790" cy="150" r="13" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<line x1="790" y1="163" x2="790" y2="230" stroke="currentColor" stroke-width="3.5"/><rect x="777" y="228" width="26" height="9" rx="3" fill="currentColor"/>
${BOX(848, 196, 72, 26, 'EF·GTP', 13, 0.2)}
<line x1="760" y1="210" x2="636" y2="210" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tl-elo-b)"/>
${NUM(700, 186, '1')}${TX(700, 240, 14, 'delivery to A', { a: 'middle', b: true })}
${TX(790, 128, 13, 'aa-tRNA', { a: 'middle' })}</g>
${TX(790, 266, 13, 'pairing check → GTP hydrolysis', { a: 'middle' })}
<g class="fig-muted"><defs>${ARROW('arr-tl-elo-m')}</defs>
<line x1="250" y1="200" x2="250" y2="280" stroke="currentColor" stroke-width="3"/><rect x="237" y="276" width="26" height="9" rx="3" fill="currentColor"/>
<line x1="378" y1="240" x2="282" y2="240" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tl-elo-m)"/>
${TX(250, 180, 13, 'empty tRNA leaves', { a: 'middle' })}</g>
<line x1="520" y1="352" x2="640" y2="352" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tl-elo)"/>
${NUM(500, 352, '3')}
${TX(580, 378, 14, 'EF·GTP ratchets the ribosome one codon 3′-ward: A → P, P → E', { a: 'middle', b: true })}
${TX(500, 412, 15, "70S = 30S + 50S · 80S = 40S + 60S (S values don't add)", { a: 'middle', cls: 'fig-muted' })}
${TX(500, 442, 16, 'per residue: 2 ATP (charging) + 1 GTP (delivery) + 1 GTP (translocation) ≈ 4 bonds', { a: 'middle', b: true })}
</svg>`

/* ───────────────────────── 6 — Mutation taxonomy on the lesson's own mRNA (replace-table, 560×440) ───────────────────────── */

const mutRow = (y: number, label: string, codons: string, protein: string, effect: string, effect2?: string) =>
  TX(8, y, 13, label, { b: true }) + TX(118, y, 14, codons, { b: true }) + TX(300, y, 13, protein) + TX(424, y, 12, effect) + (effect2 ? TX(424, y + 15, 11, effect2, { cls: 'fig-muted' }) : '')
const mutSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">${TX(8, 26, 12, 'mutation', { b: true })}${TX(118, 26, 12, 'mRNA codons', { b: true })}${TX(300, 26, 12, 'protein', { b: true })}${TX(424, 26, 12, 'effect', { b: true })}
<line x1="8" y1="34" x2="552" y2="34" stroke="currentColor" stroke-width="1.5"/></g>
${mutRow(62, 'original', 'AUG GCU UGG UGA', 'Met-Ala-Trp-stop', 'reference', '')}
<g class="fig-muted"><line x1="8" y1="76" x2="552" y2="76" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4"/></g>
${mutRow(104, 'silent', `AUG GC${HL('A')} UGG UGA`, 'Met-Ala-Trp-stop', 'none', 'base 3, same aa')}
${mutRow(144, 'missense', `AUG GCU UG${HL('C')} UGA`, `Met-Ala-${HL('Cys')}-stop`, 'Trp → Cys', 'sickle: Glu → Val')}
${mutRow(184, 'nonsense', `AUG GCU UG${HL('A')}`, `Met-Ala-${HL('stop')}`, 'truncated', 'mRNA often degraded')}
${mutRow(224, 'frameshift (+1)', `AUG ${HL('C')}GC UUG GUG A…`, `Met-${HL('Arg-Leu-Val…')}`, 'garbled + new stop', 'every codon shifts')}
${mutRow(264, 'in-frame (−3)', `AUG ${HL('– – –')} UGG UGA`, 'Met-Trp-stop', 'one residue lost', 'ΔF508-type')}
<g class="fig-muted"><line x1="8" y1="292" x2="552" y2="292" stroke="currentColor" stroke-width="1.5"/></g>
${TX(280, 316, 14, 'Ask WHERE, not just WHAT', { a: 'middle', b: true })}
<rect x="40" y="332" width="480" height="22" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/>
${TX(40, 372, 11, 'start', { cls: 'fig-muted' })}${TX(520, 372, 11, 'end', { a: 'end', cls: 'fig-muted' })}
<g class="fig-accent-2"><line x1="120" y1="326" x2="120" y2="360" stroke="currentColor" stroke-width="3"/>${TX(120, 390, 12, 'stop here → severe', { a: 'middle', b: true })}</g>
<line x1="470" y1="326" x2="470" y2="360" stroke="currentColor" stroke-width="3"/>${TX(470, 390, 12, 'stop here → mild', { a: 'middle', b: true })}
${TX(290, 390, 12, 'earlier stop = more protein lost', { a: 'middle' })}
${TX(280, 420, 12, 'frameshift usually worse than missense · splice-site mimics either', { a: 'middle', cls: 'fig-muted' })}
</svg>`

/* ───────────────────────── 7 — Post-translational modifications as a grid (replace-table, 560×440) ───────────────────────── */

const STUB = (cx: number, y: number, w = 100) => `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="12" rx="4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>`
const ptmSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-tl-ptm')}</defs>
${STUB(95, 70)}
<line x1="95" y1="70" x2="95" y2="58" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent"><circle cx="95" cy="46" r="12" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>${TX(95, 51, 12, 'P', { a: 'middle', b: true })}</g>
<g class="fig-accent"><defs>${ARROW('arr-tl-ptm-b')}</defs><path d="M40 36 C 52 26, 70 28, 80 38" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arr-tl-ptm-b)"/>${TX(36, 56, 10, 'kinase', { a: 'end' })}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-tl-ptm-r')}</defs><path d="M110 38 C 120 28, 138 26, 150 36" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arr-tl-ptm-r)"/>${TX(154, 56, 10, 'phosphatase')}</g>
${TX(95, 96, 10, 'Ser / Thr / Tyr', { a: 'middle', cls: 'fig-muted' })}
${TX(95, 122, 13, 'phosphorylation', { a: 'middle', b: true })}
${TX(95, 140, 11, 'reversible on/off switch', { a: 'middle', cls: 'fig-accent' })}
${TX(95, 156, 11, "signaling's main currency", { a: 'middle', cls: 'fig-muted' })}
${STUB(280, 70)}
<line x1="280" y1="70" x2="280" y2="60" stroke="currentColor" stroke-width="2"/>
${[54, 40, 26].map((y, i) => `<circle cx="${280 + (i === 2 ? 10 : 0)}" cy="${y}" r="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>` + (i === 2 ? `<circle cx="270" cy="26" r="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="40" x2="270" y2="32" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="40" x2="290" y2="32" stroke="currentColor" stroke-width="1.5"/>` : `<line x1="280" y1="${y - 6}" x2="280" y2="${y - 8}" stroke="currentColor" stroke-width="1.5"/>`)).join('')}
${TX(280, 96, 10, 'Asn (N) · Ser/Thr (O)', { a: 'middle', cls: 'fig-muted' })}
${TX(280, 122, 13, 'glycosylation', { a: 'middle', b: true })}
${TX(280, 140, 11, 'N-linked: Asn, starts in ER', { a: 'middle' })}
${TX(280, 156, 11, 'O-linked: Ser/Thr, Golgi', { a: 'middle' })}
${TX(280, 172, 11, 'folding, stability, ABO identity', { a: 'middle', cls: 'fig-muted' })}
${STUB(440, 70, 44)}${STUB(492, 70, 44)}
<g class="fig-accent-2"><line x1="456" y1="40" x2="476" y2="62" stroke="currentColor" stroke-width="2.5"/><line x1="476" y1="40" x2="456" y2="62" stroke="currentColor" stroke-width="2.5"/>
<circle cx="452" cy="36" r="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="480" cy="36" r="5" fill="none" stroke="currentColor" stroke-width="2"/></g>
${TX(466, 96, 10, 'cut — gone for good', { a: 'middle', cls: 'fig-muted' })}
${TX(466, 122, 13, 'proteolytic cleavage', { a: 'middle', b: true })}
${TX(466, 140, 11, 'irreversible one-way switch', { a: 'middle', cls: 'fig-accent-2' })}
${TX(466, 156, 11, 'preproinsulin → insulin', { a: 'middle' })}
${TX(466, 172, 11, 'zymogens: trypsinogen → trypsin', { a: 'middle' })}
<g class="fig-muted"><line x1="12" y1="190" x2="548" y2="190" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
${STUB(120, 258, 150)}
<line x1="120" y1="258" x2="120" y2="248" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent-2">${[240, 222, 204].map((y) => `<circle cx="120" cy="${y}" r="9" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>` + TX(120, y + 4, 9, 'Ub', { a: 'middle', b: true })).join('')}</g>
${TX(120, 282, 10, 'poly-Ub chain on a Lys', { a: 'middle', cls: 'fig-muted' })}
<line x1="200" y1="258" x2="232" y2="258" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tl-ptm)"/>
<rect x="236" y="236" width="40" height="46" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
${[246, 256, 266].map((y) => `<line x1="241" y1="${y}" x2="271" y2="${y}" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.5"/>`).join('')}
${TX(256, 298, 10, '26S proteasome', { a: 'middle', b: true })}
${TX(150, 322, 13, 'ubiquitination', { a: 'middle', b: true })}
${TX(150, 340, 11, 'address label → proteasome (ATP)', { a: 'middle' })}
${TX(150, 356, 11, 'tagged singles: cyclins, misfolded', { a: 'middle', cls: 'fig-muted' })}
<g class="fig-muted"><rect x="330" y="246" width="190" height="20" rx="4" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>${TX(515, 261, 10, 'membrane', { a: 'end' })}</g>
<ellipse cx="400" cy="212" rx="34" ry="15" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>${TX(400, 216, 11, 'Ras', { a: 'middle', b: true })}
<g class="fig-accent"><polyline points="400,227 394,234 406,241 400,248" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
${TX(425, 322, 13, 'lipid anchors', { a: 'middle', b: true })}
${TX(425, 340, 11, 'prenylation, myristoylation', { a: 'middle' })}
${TX(425, 356, 11, 'hydrophobic tail → membrane', { a: 'middle', cls: 'fig-muted' })}
<g class="fig-muted"><rect x="20" y="378" width="520" height="54" rx="8" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/></g>
${TX(280, 398, 12, 'two disposal systems, two jobs', { a: 'middle', b: true })}
${TX(280, 418, 11, 'proteasome: tagged cytosolic/nuclear singles · lysosome: bulk + vesicle cargo (autophagy)', { a: 'middle' })}
</svg>`

/* ───────────────────────── 8 — The iron 2×2: IRP on a 5' hairpin vs 3' hairpins (lead, 1000×460) ───────────────────────── */

const HAIRPIN = (x: number, y: number, h: number) => `<path d="M${x - 8} ${y} L${x - 8} ${y - h} A 8 8 0 1 1 ${x + 8} ${y - h} L${x + 8} ${y}" fill="none" stroke="currentColor" stroke-width="2.5"/>`
const IRP = (x: number, y: number) => `<g class="fig-accent-2"><circle cx="${x}" cy="${y}" r="12" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>${TX(x, y + 4, 10, 'IRP', { a: 'middle', b: true })}</g>`
const NUCLEASE = (cx: number, cy: number, r: number) =>
  `<path d="M${cx} ${cy} L${f(cx - 0.866 * r)} ${f(cy + 0.5 * r)} A ${r} ${r} 0 1 0 ${f(cx - 0.866 * r)} ${f(cy - 0.5 * r)} Z" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>`
const MRNA = (x0: number, y: number, codeFrom: number, codeTo: number) =>
  `<g class="fig-accent-2"><circle cx="${x0}" cy="${y}" r="7" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/></g>` +
  `<line x1="${x0 + 7}" y1="${y}" x2="${x0 + 300}" y2="${y}" stroke="currentColor" stroke-width="2.5"/>` +
  `<rect x="${x0 + codeFrom}" y="${y - 9}" width="${codeTo - codeFrom}" height="18" rx="4" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>` +
  TX(x0 + (codeFrom + codeTo) / 2, y + 4, 11, 'coding', { a: 'middle', cls: 'fig-muted' }) +
  TX(x0 + 304, y + 4, 12, 'AAAA', { cls: 'fig-muted' })
const FORTY_S = (cx: number, cy: number) => `<g class="fig-accent"><ellipse cx="${cx}" cy="${cy}" rx="22" ry="12" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>${TX(cx, cy + 4, 10, '40S', { a: 'middle', b: true })}</g>`
const ironSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${TX(330, 44, 19, 'LOW iron — IRP binds the IRE', { a: 'middle', b: true, cls: 'fig-accent-2' })}
${TX(760, 44, 19, 'HIGH iron — IRP lets go', { a: 'middle', b: true, cls: 'fig-accent' })}
${TX(500, 68, 13, 'IRE = a hairpin in the UTR; where it sits decides what IRP does', { a: 'middle', cls: 'fig-muted' })}
<g class="fig-muted"><line x1="510" y1="80" x2="510" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/><line x1="130" y1="236" x2="980" y2="236" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
${TX(20, 128, 13, "IRE in 5' UTR", { cls: 'fig-accent-2' })}
${TX(20, 152, 16, 'ferritin', { b: true })}${TX(20, 170, 13, '(iron storage)', { cls: 'fig-muted' })}
${TX(20, 272, 13, "IREs in 3' UTR", { cls: 'fig-accent-2' })}
${TX(20, 296, 16, 'transferrin', { b: true })}${TX(20, 314, 16, 'receptor', { b: true })}${TX(20, 332, 13, '(iron import)', { cls: 'fig-muted' })}
${MRNA(150, 140, 100, 230)}${HAIRPIN(212, 140, 34)}${IRP(212, 94)}
${FORTY_S(164, 118)}
<g class="fig-accent-2"><line x1="194" y1="104" x2="194" y2="134" stroke="currentColor" stroke-width="3"/></g>
${TX(310, 200, 14, 'IRP blocks scanning → no ferritin (nothing to store)', { a: 'middle' })}
${MRNA(620, 140, 100, 230)}${HAIRPIN(670, 140, 34)}
<g class="fig-muted"><circle cx="640" cy="100" r="12" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>${TX(640, 104, 9, 'IRP·Fe', { a: 'middle', b: true })}</g>
${FORTY_S(720, 116)}
<g class="fig-accent"><defs>${ARROW('arr-tl-iron-b')}</defs><line x1="746" y1="116" x2="800" y2="116" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-tl-iron-b)"/></g>
${TX(780, 200, 14, '40S scans through → ferritin made (store the iron)', { a: 'middle' })}
${MRNA(150, 300, 30, 150)}${[330, 365, 400].map((x) => HAIRPIN(x, 300, 30)).join('')}${[330, 365, 400].map((x) => IRP(x, 258)).join('')}
<g class="fig-muted">${NUCLEASE(470, 282, 16)}</g>
<g class="fig-accent-2"><line x1="432" y1="266" x2="432" y2="298" stroke="currentColor" stroke-width="3"/></g>
${TX(310, 358, 14, 'IRP shields the mRNA from nuclease → stable → MORE TfR', { a: 'middle' })}
${TX(310, 378, 13, '(import more iron)', { a: 'middle', cls: 'fig-muted' })}
${MRNA(620, 300, 30, 150)}${[800, 835].map((x) => HAIRPIN(x, 300, 30)).join('')}
<g class="fig-muted"><line x1="870" y1="300" x2="920" y2="300" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 5"/>${NUCLEASE(882, 300, 16)}</g>
${TX(780, 358, 14, 'nuclease degrades the mRNA → LESS TfR', { a: 'middle' })}
${TX(780, 378, 13, '(stop importing)', { a: 'middle', cls: 'fig-muted' })}
${TX(500, 436, 16, "same sensor, same element: a 5' UTR hairpin controls initiation, a 3' UTR hairpin controls stability", { a: 'middle', b: true })}
</svg>`

/* ───────────────────────── 9 — Where each drug hits the ribosome (replace-table, 560×440) ───────────────────────── */

const LEG = (y: number, n: string, name: string, how: string, cls?: string) =>
  `<g${cls ? ` class="${cls}"` : ''}>${NUM(356, y - 5, n, 10)}${TX(372, y, 12, name, { b: true })}</g>` + TX(372, y + 16, 11, how)
const toxinSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-tl-tox')}</defs>
<ellipse cx="150" cy="130" rx="118" ry="66" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2"/>
<ellipse cx="150" cy="218" rx="108" ry="32" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<line x1="20" y1="228" x2="300" y2="228" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tl-tox)"/>
${TX(14, 232, 11, "5'", { a: 'end', b: true })}${TX(306, 232, 11, "3'", { b: true })}
${TX(150, 96, 12, 'large 50S / 60S', { a: 'middle', cls: 'fig-muted' })}
${TX(150, 268, 12, 'small 30S / 40S', { a: 'middle', cls: 'fig-muted' })}
${[105, 150, 195].map((x, i) => `<rect x="${x - 16}" y="178" width="32" height="48" rx="6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>` + TX(x, 172, 12, ['E', 'P', 'A'][i], { a: 'middle', b: true })).join('')}
<g class="fig-muted"><line x1="172" y1="150" x2="172" y2="78" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>${TX(186, 118, 10, 'exit tunnel')}</g>
<circle cx="172" cy="156" r="5" fill="currentColor"/>
${TX(136, 150, 10, 'PTC', { a: 'end', cls: 'fig-muted' })}
<g class="fig-accent">${NUM(195, 212, '1', 10)}${NUM(66, 218, '2', 10)}${NUM(150, 142, '3', 10)}${NUM(172, 66, '4', 10)}</g>
<g class="fig-accent-2">${BOX(282, 162, 44, 22, 'eEF2', 10, 0.2)}${NUM(310, 150, '5', 10)}${NUM(90, 112, '6', 10)}${TX(90, 134, 10, '28S rRNA', { a: 'middle' })}</g>
<line x1="240" y1="92" x2="240" y2="118" stroke="currentColor" stroke-width="2.5"/><circle cx="240" cy="84" r="7" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>
<line x1="236" y1="128" x2="208" y2="172" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3" marker-end="url(#arr-tl-tox)"/>
${NUM(262, 100, '7', 10)}
${LEG(44, '1', 'tetracyclines — 30S', 'block A-site tRNA entry', 'fig-accent')}
${LEG(94, '2', 'aminoglycosides — 30S', 'misreading + initiation block', 'fig-accent')}
${LEG(144, '3', 'chloramphenicol — 50S', 'inhibits peptidyl transferase', 'fig-accent')}
${LEG(194, '4', 'macrolides — 50S', 'plug the exit tunnel', 'fig-accent')}
${LEG(244, '5', 'diphtheria toxin — eEF2', 'ADP-ribosylation; catalytic', 'fig-accent-2')}
${LEG(294, '6', 'ricin — 28S rRNA (60S)', 'depurinates one A; catalytic', 'fig-accent-2')}
${LEG(344, '7', 'puromycin — any ribosome', 'aa-tRNA mimic; releases chain')}
<g class="fig-muted"><rect x="20" y="380" width="520" height="52" rx="8" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/></g>
${TX(280, 400, 12, 'antibiotics exploit 70S vs 80S — but mitochondrial ribosomes are 70S-like', { a: 'middle', b: true })}
${TX(280, 420, 11, 'so aminoglycosides can cause hearing loss (cochlear hair cells)', { a: 'middle' })}
</svg>`

export const mcatTranslationFigures: DeckFigurePlacement[] = [
  {
    at: 'Properties of the Code',
    mode: 'lead',
    figure: {
      svg: codeSvg,
      alt:
        "The lesson's mRNA 5'-GCAUGGCUUGGUGA-3' drawn as a row of letter boxes. The first two bases (GC) are a grey untranslated leader; AUG is highlighted blue and bracketed as Met, the start; GCU is bracketed Ala, UGG Trp, and UGA is red and bracketed as stop. To the right: 64 codons give 20 amino acids plus stop; one codon has one meaning; there are no commas between codons. Bottom left: the same letters cut three ways into triplets, one row per reading frame, with frame 3, the one that starts at AUG, highlighted and ticked — the AUG fixes the frame and every downstream codon follows; an indel of 1 or 2 bases shifts the frame, an indel of 3 adds or removes one residue. Bottom right: the four codons GCU, GCC, GCA, GCG, each with its third base in red, all funnel into one box labelled Ala, so a base-3 change usually keeps the amino acid and is silent. The three stops UAA, UAG, UGA are red boxes: no tRNA fits a stop, release factors read them. The code is nearly universal; mitochondria deviate slightly.",
      caption: 'The code as a picture: triplets read from the AUG, synonyms that differ at base 3, and three stops no tRNA reads.',
    },
    blocks: [
      '- **Triplet, nonoverlapping, comma-free:** the first **AUG** sets the frame; indels not divisible by 3 shift it',
      '- **Degenerate** at base 3 (wobble → **silent** changes); **unambiguous**; stops **UAA/UAG/UGA** need release factors',
    ],
  },
  {
    at: 'tRNA — The Adapter',
    mode: 'lead',
    figure: {
      svg: trnaSvg,
      alt:
        "Left: a tRNA drawn as a cloverleaf of four base-paired stems and three loops. The acceptor stem points up; its 5 prime end stops short while the 3 prime strand runs on through three boxes C, C, A to a blue amino-acid disc — the amino acid sits on the 3 prime CCA end on a high-energy ester bond. The D loop is on the left, the T-psi-C loop on the right, and the anticodon loop at the bottom shows the bases U A C reading 3 prime to 5 prime left to right, paired by dashed lines to the codon A U G written 5 prime to 3 prime on an mRNA arrow running left to right. A dashed red box marks the wobble pair: codon base 3 with the anticodon's 5 prime base, where G·U pairs are allowed. Right, top: the antiparallel rule worked on codon 5 prime GAU 3 prime — the anticodon as paired is 3 prime CUA 5 prime, so written 5 prime to 3 prime it is AUC (blue); the trap answer 5 prime CUA 3 prime is the unreversed string and would pair UAG, a stop. Right, bottom: one anticodon 3 prime CGG 5 prime reads both 5 prime GCC 3 prime (standard) and 5 prime GCU 3 prime (a G·U wobble pair, red); both are Ala, so fewer than 61 tRNAs are needed and wobble never makes the protein ambiguous.",
      caption: "Two business ends — anticodon and 3′ CCA — and the antiparallel rule: complement, then reverse.",
    },
    blocks: [
      "- Anticodon pairs the codon **antiparallel** (complement, THEN reverse); amino acid rides the **3′ CCA** ester",
      '- **Wobble** at codon base 3 ↔ anticodon 5′ base: one tRNA reads a synonym family — never ambiguous',
    ],
  },
  {
    at: 'Aminoacyl-tRNA Synthetases',
    mode: 'lead',
    figure: {
      svg: synthSvg,
      alt:
        'Top: a dashed enzyme box labelled aminoacyl-tRNA synthetase, one per amino acid (20). Inside, step 1: an amino acid plus ATP becomes aminoacyl-AMP, releasing pyrophosphate that is hydrolyzed to two phosphates (red) — the charge costs 2 ATP equivalents. Step 2: the amino acid is transferred to the tRNA 3 prime CCA end, releasing AMP, and the aminoacyl-tRNA leaves for the ribosome. A red editing-site pocket on the enzyme hydrolyzes near-miss amino acids such as valine mistaken for isoleucine. Right: energy banked — the aminoacyl-tRNA ester bond (red) points down to the peptide bond; the ribosome spends no ATP or GTP on the bond itself. Bottom, the Chapeville experiment as a strip: cysteine correctly charged on tRNA-Cys (blue) is chemically reduced to alanine while still attached (red, mischarged); the ribosome, reading only the anticodon against the codon UGC, inserts alanine at every cysteine codon — wrong protein, no alarm. Synthetases, not the ribosome, guard the code.',
      caption: 'Charging: two steps, two ATP equivalents, an editing pocket — and Chapeville’s proof that the ribosome never checks the cargo.',
    },
    blocks: [
      '- **Two-step charging**, 2 ATP equivalents (PPᵢ hydrolysis pulls it); the **ester bond** later pays for the peptide bond',
      '- **Editing sites** reject near-misses; **Chapeville:** the ribosome checks codon–anticodon only, so mischarged tRNA = wrong protein',
    ],
  },
  {
    at: 'Initiation — Where Prokaryotes',
    mode: 'replace-table',
    figure: {
      svg: initSvg,
      alt:
        'Two columns. Prokaryote: a polycistronic mRNA with two genes, each preceded by a blue Shine–Dalgarno box and an AUG; the 30S subunit base-pairs the first Shine–Dalgarno through its 16S rRNA; the first amino acid is formyl-methionine; internal starts are allowed; translation begins while the mRNA is still being made. Eukaryote: a capped mRNA (red cap) with a poly-A tail; the 40S subunit binds at the cap and scans to the first AUG; the first amino acid is plain methionine; one start per mRNA (monocistronic); translation only after processing and nuclear export. Below, three panels shared by both systems: 1 the small subunit and the initiator tRNA find the AUG together; 2 the large subunit joins last and codon 2 waits in the A site; 3 the initiator sits in the P site — the only tRNA that ever enters P directly. Prokaryote fMet-tRNA and eukaryote Met-tRNAi share this geometry.',
      caption: 'Start-site logic differs (Shine–Dalgarno vs cap-and-scan); assembly order is the same: small first, large last, initiator in P.',
    },
    blocks: [
      '- **Prokaryote:** Shine–Dalgarno pairs **16S rRNA** → internal starts (polycistronic); **fMet**; coupled to transcription',
      '- **Eukaryote:** cap binding, 40S **scans** to the first AUG (monocistronic); **Met**; only after processing + export',
      '- **Both:** small subunit + initiator tRNA find AUG FIRST, large subunit joins LAST, initiator lands in **P**',
    ],
  },
  {
    at: 'Elongation — The Three-Step Loop',
    mode: 'lead',
    figure: {
      svg: elongSvg,
      alt:
        'A ribosome drawn as a large ellipse (large subunit, 50S or 60S) over a smaller one (small subunit, 30S or 40S) with the mRNA running through it from 5 prime on the left to 3 prime on the right. Three dashed slots span the subunits, left to right E, P and A (A in blue). The P-site tRNA carries the growing chain as a stack of beads; the A-site tRNA carries one blue amino acid. Step 1 (blue, right): an aminoacyl-tRNA escorted by an elongation factor with GTP is delivered into the A site; correct codon–anticodon pairing triggers GTP hydrolysis — the pairing check is the proofreading. Step 2 (red, top): a curved arrow moves the chain from the P-site tRNA onto the A-site amino acid; peptidyl transferase is rRNA, so the ribosome is a ribozyme. Step 3 (bottom): a second elongation factor with GTP ratchets the ribosome one codon toward 3 prime, tRNAs shift A to P and P to E, and the empty tRNA leaves from E (grey, left). Notes: 70S = 30S + 50S and 80S = 40S + 60S, S values do not add; per residue the cost is 2 ATP for charging plus 1 GTP for delivery plus 1 GTP for translocation, about 4 high-energy bonds.',
      caption: 'Deliver to A, bond P→A, ratchet one codon: ~4 high-energy bonds per residue, with the bond itself paid for in advance.',
    },
    blocks: [
      '- **A** accepts (EF·GTP delivery, pairing = proofreading), **P** holds the chain, **E** exits; rRNA makes the bond',
      '- **Translocation** (EF·GTP) moves one codon 3′-ward; **2 ATP + 2 GTP ≈ 4** high-energy bonds per residue',
    ],
  },
  {
    at: 'Mutation Taxonomy',
    mode: 'replace-table',
    figure: {
      svg: mutSvg,
      alt:
        "A table drawn on the lesson's own message AUG GCU UGG UGA, which makes Met-Ala-Trp-stop. Silent: GCU to GCA (base 3 in red) still gives Met-Ala-Trp-stop — no effect. Missense: UGG to UGC gives Met-Ala-Cys-stop — tryptophan becomes cysteine; sickle cell (Glu to Val) is the archetype. Nonsense: UGG to UGA gives Met-Ala-stop — a truncated protein, and the mRNA is often degraded. Frameshift, plus one C after the AUG: AUG CGC UUG GUG A… reads Met-Arg-Leu-Val… — every downstream codon is garbled and a new stop appears. In-frame deletion of three bases removes GCU: AUG UGG UGA gives Met-Trp-stop — one residue lost, the delta-F508 pattern. Below, a gene bar from start to end: a red stop near the start is severe, a stop near the end is mild, because an earlier stop loses more protein; frameshifts are usually worse than missense, and splice-site mutations can mimic either. Ask where, not just what.",
      caption: 'Five mutation types on one short message, then the severity rule: ask where in the gene, not just what kind.',
    },
    blocks: [
      '- **Silent** (base 3) · **missense** conservative vs nonconservative (sickle Glu → Val) · **nonsense** = truncation',
      '- **Frameshift** (indel not ÷ 3) garbles everything downstream; **in-frame indel** adds/removes whole residues (ΔF508)',
      '- **Splice-site** mutations masquerade as either; **earlier stops are worse**, a stop near the end can be mild',
    ],
  },
  {
    at: 'Post-Translational Modifications',
    mode: 'replace-table',
    figure: {
      svg: ptmSvg,
      alt:
        'A grid of five modifications, each drawn on a short protein segment. Phosphorylation: a blue P disc on Ser, Thr or Tyr, added by a kinase (blue arrow) and removed by a phosphatase (red arrow) — a reversible on/off switch, signaling’s main currency. Glycosylation: a branched sugar tree; N-linked on Asn begins in the ER, O-linked on Ser/Thr in the Golgi; folding, stability and ABO identity. Proteolytic cleavage: red scissors cut the segment in two — an irreversible one-way switch; preproinsulin to insulin, trypsinogen to trypsin. Ubiquitination: a chain of three red Ub discs on a lysine, with an arrow to a barrel labelled 26S proteasome — an address label for ATP-dependent destruction of tagged single proteins such as cyclins and misfolded proteins. Lipid anchors: a Ras ellipse tethered by a blue zigzag tail into a dashed membrane — prenylation or myristoylation attaches proteins to membranes. Footer: two disposal systems — the proteasome for tagged cytosolic and nuclear individuals, the lysosome for bulk and vesicle-delivered cargo including autophagy.',
      caption: 'The PTM toolkit: one reversible switch, one irreversible switch, sugars, a destruction tag and a membrane tether.',
    },
    blocks: [
      '- **Phosphorylation** = reversible switch (kinase ⇄ phosphatase); **cleavage** = irreversible (zymogens, insulin)',
      '- **N-glycosylation** starts in the ER (Asn), **O-linked** in the Golgi (Ser/Thr); lipid anchors tether Ras to membranes',
      '- **Poly-ubiquitin → 26S proteasome** for tagged singles (cyclins); **lysosome** for bulk + vesicle cargo',
      '- Also acetylation/methylation of histones (chromatin control)',
    ],
  },
  {
    at: 'Regulating Translation Itself',
    mode: 'lead',
    figure: {
      svg: ironSvg,
      alt:
        'A two-by-two: columns low iron (IRP binds the IRE, red) and high iron (IRP lets go, blue); rows ferritin mRNA (iron storage, IRE hairpin in the 5 prime UTR) and transferrin-receptor mRNA (iron import, IRE hairpins in the 3 prime UTR). Each mRNA is a red cap, a line, a coding box and a poly-A tail. Ferritin, low iron: a red IRP disc sits on the 5 prime hairpin and a 40S subunit is stopped by a red bar — IRP blocks scanning, no ferritin is made, there is nothing to store. Ferritin, high iron: IRP-iron floats off, the 40S scans past the hairpin (blue arrow) — ferritin is made to store the iron. Transferrin receptor, low iron: three red IRP discs sit on the 3 prime hairpins and a grey nuclease is held off by a red bar — the mRNA is stable and more receptor is made to import more iron. Transferrin receptor, high iron: the hairpins are bare and the nuclease chews the 3 prime end — the mRNA is degraded and less receptor is made. Footer: same sensor, same element — a 5 prime UTR hairpin controls initiation, a 3 prime UTR hairpin controls stability.',
      caption: 'The iron circuit: one protein, one hairpin, opposite outcomes decided only by which UTR the hairpin sits in.',
    },
    blocks: [
      "- **IRP on a 5′ UTR IRE** blocks scanning (ferritin ↓ when iron is low); **IRP on 3′ UTR IREs** blocks decay (TfR ↑)",
      '- Global brake: stress kinases phosphorylate the initiator-tRNA factor; **miRNAs**, poly-A length and half-life are other dials',
    ],
  },
  {
    at: 'The Toxin & Antibiotic Gallery',
    mode: 'replace-table',
    figure: {
      svg: toxinSvg,
      alt:
        'A ribosome schematic — large subunit (50S or 60S) over small subunit (30S or 40S), mRNA running 5 prime to 3 prime through it, slots E, P and A, the peptidyl-transferase centre and a dashed exit tunnel — with seven numbered pins and a legend. Blue, bacterial targets: 1 tetracyclines at the A site block aminoacyl-tRNA entry (30S); 2 aminoglycosides on the small subunit cause misreading and block initiation (30S); 3 chloramphenicol at the peptidyl-transferase centre inhibits it (50S); 4 macrolides at the top of the exit tunnel plug it (50S). Red, human targets: 5 diphtheria toxin ADP-ribosylates eEF2, the translocation factor, drawn as a box beside the A site — catalytic; 6 ricin depurinates one adenine of 28S rRNA in the large subunit — catalytic. 7 puromycin, an aminoacyl-tRNA mimic shown entering the A site, accepts the chain and releases it on any ribosome. Footer: antibiotics exploit the 70S versus 80S difference, but mitochondrial ribosomes are 70S-like, so aminoglycosides can cause hearing loss in cochlear hair cells.',
      caption: 'Seven agents pinned to the part of the machine they break; blue hits bacterial ribosomes, red hits human factors and rRNA.',
    },
    blocks: [
      '- **30S:** tetracycline blocks the A site; aminoglycosides cause misreading · **50S:** chloramphenicol (PTC), macrolides (exit tunnel)',
      '- **Human:** diphtheria toxin ADP-ribosylates **eEF2**; ricin depurinates **28S rRNA** — catalytic, one molecule kills',
      '- **Puromycin** mimics aa-tRNA on any ribosome → premature release; mitochondrial ribosomes are **70S-like** (hearing loss)',
    ],
  },
]
