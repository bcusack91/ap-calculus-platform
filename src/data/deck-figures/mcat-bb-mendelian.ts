import type { DeckFigurePlacement } from './index'

/**
 * Mendelian & Non-Mendelian Genetics (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing is ours, from the concept: Mendel's two laws as homologs
 * parting in anaphase I and pairs orienting two ways at metaphase I, the
 * monohybrid / dihybrid / test-cross Punnett squares, a tetrad with and
 * without a crossover between two loci, an RF-vs-distance curve with the
 * 50% ceiling and a three-gene map, a grouped bar chart of the lesson's own
 * linked test-cross example, the two reciprocal X-linked crosses, five mini
 * pedigrees, the four shaded 4×4 grids behind 9:3:3:1 / 9:3:4 / 9:7 / 12:3:1,
 * and complete vs incomplete vs codominance (ABO). No textbook, prep-company
 * or AAMC figure was copied. The RF curve says "illustrative"; every number
 * drawn is one the lesson states (42/42/8/8, 7 + 5 = 12 cM, 1% = 1 cM, 50%).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow's marker is defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-mg-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

const f = (v: number) => +v.toFixed(1)

const B = (s: string) => `<g class="fig-accent">${s}</g>`
const R = (s: string) => `<g class="fig-accent-2">${s}</g>`
const M = (s: string) => `<g class="fig-muted">${s}</g>`

/** One line of text in the current colour. */
const TXT = (x: number, y: number, fs: number, anchor: 'start' | 'middle' | 'end', s: string, bold = false) =>
  `<text x="${x}" y="${y}" font-size="${fs}"${bold ? ' font-weight="700"' : ''} text-anchor="${anchor}" fill="currentColor">${s}</text>`

/** A rounded box with one centred line of text. */
const BOX = (x: number, y: number, w: number, h: number, l1: string, fs = 18, opacity = 0.12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/>` +
  TXT(x + w / 2, y + h / 2 + fs / 3, fs, 'middle', l1, true)

type Fill = 'blue' | 'red' | 'pink' | 'grey' | 'split' | 'none'

/** Background tint of one Punnett cell. */
const CELLBG = (x: number, y: number, s: number, fl: Fill, op: number) => {
  const rect = (o: number) => `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="currentColor" fill-opacity="${f(o)}"/>`
  switch (fl) {
    case 'blue':
      return B(rect(op))
    case 'red':
      return R(rect(op))
    case 'pink':
      return R(rect(op * 0.4))
    case 'grey':
      return rect(op * 0.5)
    case 'split':
      return (
        B(`<polygon points="${x},${y} ${x + s},${y} ${x},${y + s}" fill="currentColor" fill-opacity="${f(op)}"/>`) +
        R(`<polygon points="${x + s},${y} ${x + s},${y + s} ${x},${y + s}" fill="currentColor" fill-opacity="${f(op)}"/>`)
      )
    default:
      return ''
  }
}

/** A Punnett square: gamete labels across the top (cols) and down the left (rows). */
const PUNNETT = (
  x: number,
  y: number,
  s: number,
  cols: string[],
  rows: string[],
  cell: (r: number, c: number) => { t?: string; f?: Fill },
  fs = 17,
  op = 0.28,
) => {
  let out = ''
  cols.forEach((c, i) => (out += TXT(x + i * s + s / 2, y - 10, fs, 'middle', c, true)))
  rows.forEach((r, j) => (out += TXT(x - 10, y + j * s + s / 2 + fs / 3, fs, 'end', r, true)))
  for (let j = 0; j < rows.length; j++) {
    for (let i = 0; i < cols.length; i++) {
      const { t, f: fl = 'none' } = cell(j, i)
      const cx = x + i * s
      const cy = y + j * s
      out += CELLBG(cx, cy, s, fl, op)
      out += `<rect x="${cx}" y="${cy}" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.5"/>`
      if (t) out += TXT(cx + s / 2, cy + s / 2 + fs / 3, fs, 'middle', t)
    }
  }
  out += `<rect x="${x}" y="${y}" width="${s * cols.length}" height="${s * rows.length}" fill="none" stroke="currentColor" stroke-width="2.5"/>`
  return out
}

/** Combine two gametes' alleles at one locus, dominant letter first. */
const PAIR = (a: string, b: string) => (a === a.toUpperCase() ? a + b : b + a)

/** A vertical chromosome rod: blue = gene A, red = gene B; filled = dominant allele. */
const ROD = (x: number, y: number, w: number, h: number, red: boolean, filled: boolean, label: string, fs = 16) => {
  const body = `<rect x="${x - w / 2}" y="${y}" width="${w}" height="${h}" rx="${w / 2}" fill="currentColor" fill-opacity="${filled ? 0.9 : 0.12}" stroke="currentColor" stroke-width="2.5"/>`
  const txt = filled
    ? `<text x="${x}" y="${y + h / 2 + fs / 3}" font-size="${fs}" font-weight="700" text-anchor="middle" class="fig-bg">${label}</text>`
    : TXT(x, y + h / 2 + fs / 3, fs, 'middle', label, true)
  return (red ? R : B)(body) + txt
}

/** A horizontal chromatid segment (blue = homolog 1, red = homolog 2). */
const SEG = (x1: number, x2: number, y: number, red: boolean, sw = 12) =>
  (red ? R : B)(`<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round"/>`)

/* 1 — Mendel's two laws on chromosomes in meiosis I (lead, 1000×460) */
const lawsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-laws')}</defs>
${TXT(230, 44, 21, 'middle', 'Law of Segregation', true)}
${M(TXT(230, 68, 15, 'middle', 'homologs separate in anaphase I → one allele per gamete'))}
<circle cx="120" cy="215" r="66" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${ROD(102, 180, 24, 70, false, true, 'A', 18)}${ROD(138, 180, 24, 70, false, false, 'a', 18)}
${M(TXT(120, 304, 15, 'middle', 'diploid parent Aa'))}
<line x1="190" y1="192" x2="256" y2="146" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mg-laws)"/>
<line x1="190" y1="238" x2="256" y2="284" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mg-laws)"/>
${TXT(223, 196, 15, 'middle', 'anaphase I')}
<circle cx="300" cy="130" r="38" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${ROD(300, 98, 24, 64, false, true, 'A', 18)}
${TXT(352, 136, 17, 'start', 'gamete A · ½', true)}
<circle cx="300" cy="300" r="38" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${ROD(300, 268, 24, 64, false, false, 'a', 18)}
${TXT(352, 306, 17, 'start', 'gamete a · ½', true)}
${TXT(230, 372, 16, 'middle', 'each gamete carries exactly ONE allele of each gene')}
${M(TXT(230, 396, 15, 'middle', 'Aa × Aa: ½ · ½ = ¼ aa — the Punnett square is this law applied twice'))}
${M(`<line x1="470" y1="30" x2="470" y2="430" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>`)}
${TXT(745, 44, 21, 'middle', 'Law of Independent Assortment', true)}
${M(TXT(745, 68, 15, 'middle', 'homolog pairs orient at random at metaphase I'))}
${TXT(600, 96, 15, 'middle', 'orientation 1 · ½', true)}
<ellipse cx="600" cy="162" rx="74" ry="56" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${M(`<line x1="600" y1="112" x2="600" y2="212" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 4"/>`)}
${ROD(578, 118, 24, 36, false, true, 'A', 16)}${ROD(622, 118, 24, 36, false, false, 'a', 16)}
${ROD(578, 166, 24, 36, true, true, 'B', 16)}${ROD(622, 166, 24, 36, true, false, 'b', 16)}
<line x1="680" y1="162" x2="724" y2="162" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mg-laws)"/>
${BOX(732, 120, 112, 36, 'AB · ¼', 17)}
${BOX(732, 168, 112, 36, 'ab · ¼', 17)}
${TXT(600, 266, 15, 'middle', 'orientation 2 · ½', true)}
<ellipse cx="600" cy="332" rx="74" ry="56" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${M(`<line x1="600" y1="282" x2="600" y2="382" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 4"/>`)}
${ROD(578, 288, 24, 36, false, true, 'A', 16)}${ROD(622, 288, 24, 36, false, false, 'a', 16)}
${ROD(578, 336, 24, 36, true, false, 'b', 16)}${ROD(622, 336, 24, 36, true, true, 'B', 16)}
<line x1="680" y1="332" x2="724" y2="332" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mg-laws)"/>
${BOX(732, 290, 112, 36, 'Ab · ¼', 17)}
${BOX(732, 338, 112, 36, 'aB · ¼', 17)}
${ROD(872, 112, 20, 26, false, true, '', 12)}${TXT(890, 131, 14, 'start', 'dominant allele')}
${ROD(872, 148, 20, 26, false, false, '', 12)}${TXT(890, 167, 14, 'start', 'recessive allele')}
${B(TXT(862, 206, 15, 'start', 'blue = gene A'))}
${R(TXT(862, 228, 15, 'start', 'red = gene B'))}
${M(TXT(862, 262, 14, 'start', 'A, B on different'))}
${M(TXT(862, 280, 14, 'start', 'chromosomes (or far'))}
${M(TXT(862, 298, 14, 'start', 'apart on one)'))}
${TXT(745, 420, 16, 'middle', '2 heterozygous loci → 2² = 4 gamete types, ¼ each · n loci → 2ⁿ', true)}
${M(TXT(745, 444, 14, 'middle', 'the metaphase-I plate (dashed) is where the coin is flipped'))}
</svg>`

/* 2 — The canonical crosses: monohybrid, dihybrid, test cross (lead, 1000×460) */
const G2 = ['AB', 'Ab', 'aB', 'ab']
const dihybridCell = (r: number, c: number) => {
  const g1 = PAIR(G2[c][0], G2[r][0])
  const g2 = PAIR(G2[c][1], G2[r][1])
  const domA = g1[0] === 'A'
  const domB = g2[0] === 'B'
  const fl: Fill = domA && domB ? 'blue' : domA ? 'red' : domB ? 'grey' : 'none'
  return { t: g1 + g2, f: fl }
}
const crossesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${TXT(150, 44, 20, 'middle', 'Monohybrid  Aa × Aa', true)}
${PUNNETT(100, 92, 72, ['A', 'a'], ['A', 'a'], (r, c) => {
  const g = PAIR(['A', 'a'][c], ['A', 'a'][r])
  return { t: g, f: g[0] === 'A' ? 'blue' : 'none' }
}, 19)}
${TXT(150, 270, 17, 'middle', '1 AA : 2 Aa : 1 aa', true)}
${TXT(150, 294, 16, 'middle', 'phenotypes 3 : 1')}
${M(TXT(150, 318, 14, 'middle', 'blue = dominant phenotype'))}
${TXT(468, 44, 20, 'middle', 'Dihybrid  AaBb × AaBb', true)}
${PUNNETT(344, 92, 62, G2, G2, dihybridCell, 15)}
${TXT(468, 370, 17, 'middle', '9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb', true)}
${M(TXT(468, 394, 14, 'middle', 'needs independent assortment + complete dominance'))}
${TXT(822, 44, 20, 'middle', 'Test cross  ? × aa', true)}
${TXT(822, 84, 15, 'middle', 'if the tested parent is AA')}
${PUNNETT(762, 112, 60, ['A', 'A'], ['a'], () => ({ t: 'Aa', f: 'blue' }), 17)}
${TXT(822, 200, 16, 'middle', 'all dominant → AA', true)}
${TXT(822, 254, 15, 'middle', 'if the tested parent is Aa')}
${PUNNETT(762, 282, 60, ['A', 'a'], ['a'], (_r, c) => (c === 0 ? { t: 'Aa', f: 'blue' } : { t: 'aa', f: 'none' }), 17)}
${TXT(822, 370, 16, 'middle', '1 : 1 → Aa', true)}
${M(TXT(822, 394, 14, 'middle', 'the aa parent adds only a, so'))}
${M(TXT(822, 412, 14, 'middle', 'offspring reveal the other parent’s gametes'))}
${M(`<line x1="300" y1="30" x2="300" y2="430" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/><line x1="660" y1="30" x2="660" y2="430" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>`)}
${TXT(500, 446, 15, 'middle', 'gametes across the top and down the side; each cell is one equally likely fertilization')}
</svg>`

/* 3 — Crossing over between two linked genes makes recombinant gametes (lead, 1000×460) */
const LOCUS = (x: number, y0: number, y1: number) => `<line x1="${x}" y1="${y0}" x2="${x}" y2="${y1}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 4"/>`
const crossoverSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted"><defs>${ARROW('arr-mg-co-m')}</defs>
<line x1="262" y1="152" x2="296" y2="152" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mg-co-m)"/>
<line x1="742" y1="152" x2="770" y2="152" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mg-co-m)"/>
${LOCUS(124, 110, 194)}${LOCUS(196, 110, 194)}${LOCUS(604, 110, 194)}${LOCUS(676, 110, 194)}
<line x1="500" y1="30" x2="500" y2="270" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>
<line x1="40" y1="282" x2="960" y2="282" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/></g>
${TXT(255, 46, 19, 'middle', 'No crossover between A and B', true)}
${M(TXT(255, 70, 15, 'middle', 'linked genes travel together'))}
${SEG(70, 250, 118, false)}${SEG(70, 250, 136, false)}${SEG(70, 250, 168, true)}${SEG(70, 250, 186, true)}
${B(TXT(124, 102, 17, 'middle', 'A', true) + TXT(196, 102, 17, 'middle', 'B', true))}
${R(TXT(124, 216, 17, 'middle', 'a', true) + TXT(196, 216, 17, 'middle', 'b', true))}
${SEG(310, 400, 116, false, 10)}${SEG(310, 400, 142, false, 10)}${SEG(310, 400, 168, true, 10)}${SEG(310, 400, 194, true, 10)}
${TXT(414, 121, 16, 'start', 'AB', true)}${TXT(414, 147, 16, 'start', 'AB', true)}${TXT(414, 173, 16, 'start', 'ab', true)}${TXT(414, 199, 16, 'start', 'ab', true)}
${TXT(380, 244, 15, 'middle', 'gametes: 100% parental')}
${M(TXT(160, 244, 14, 'middle', 'tetrad, prophase I'))}
${TXT(750, 46, 19, 'middle', 'Crossover between A and B', true)}
${M(TXT(750, 70, 15, 'middle', 'prophase I exchange at a chiasma makes new combinations'))}
${SEG(550, 730, 118, false)}
${B(`<path d="M550 136 L626 136 L654 168 L730 168" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`)}
${R(`<path d="M550 168 L626 168 L654 136 L730 136" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`)}
${SEG(550, 730, 186, true)}
<circle cx="640" cy="152" r="11" fill="none" stroke="currentColor" stroke-width="2.5"/>
${B(TXT(604, 102, 17, 'middle', 'A', true) + TXT(676, 102, 17, 'middle', 'B', true))}
${R(TXT(604, 216, 17, 'middle', 'a', true) + TXT(676, 216, 17, 'middle', 'b', true))}
${TXT(640, 236, 14, 'middle', 'chiasma')}
${SEG(782, 862, 116, false, 10)}
${SEG(782, 822, 142, false, 10)}${SEG(822, 862, 142, true, 10)}
${SEG(782, 822, 168, true, 10)}${SEG(822, 862, 168, false, 10)}
${SEG(782, 862, 194, true, 10)}
${TXT(876, 121, 16, 'start', 'AB', true)}${TXT(876, 147, 16, 'start', 'Ab', true)}${TXT(876, 173, 16, 'start', 'aB', true)}${TXT(876, 199, 16, 'start', 'ab', true)}
${M(TXT(908, 121, 13, 'start', 'parental') + TXT(908, 199, 13, 'start', 'parental'))}
${R(TXT(908, 147, 13, 'start', 'recombinant') + TXT(908, 173, 13, 'start', 'recombinant'))}
${TXT(840, 244, 15, 'middle', '2 parental + 2 recombinant')}
${TXT(500, 308, 17, 'middle', 'the closer two genes, the less room for a crossover to land between them', true)}
${SEG(110, 410, 350, false, 12)}
${R(`<rect x="232" y="338" width="36" height="24" fill="currentColor" fill-opacity="0.35"/>`)}
${TXT(232, 328, 16, 'middle', 'A', true)}${TXT(268, 328, 16, 'middle', 'B', true)}
${TXT(260, 388, 15, 'middle', 'close: a crossover between them is rare → few recombinants')}
${SEG(590, 890, 350, false, 12)}
${R(`<rect x="612" y="338" width="256" height="24" fill="currentColor" fill-opacity="0.35"/>`)}
${TXT(612, 328, 16, 'middle', 'A', true)}${TXT(868, 328, 16, 'middle', 'B', true)}
${TXT(740, 388, 15, 'middle', 'far apart: many chances → more recombinants (caps at 50%)')}
${M(TXT(500, 430, 15, 'middle', 'parental classes outnumber recombinant classes — the recombinant fraction measures the distance (next: RF)'))}
</svg>`

/* 4 — Recombination frequency vs distance, and additive map distances (lead, 1000×460, curve illustrative) */
const rfX = (d: number) => 90 + d * 2.53
const rfY = (p: number) => 370 - p * 4.4
const haldane = (d: number) => 50 * (1 - Math.exp(-2 * d / 100))
const rfPts = (() => {
  const pts: string[] = []
  for (let d = 0; d <= 150; d += 2) pts.push(`${f(rfX(d))},${f(rfY(haldane(d)))}`)
  return pts.join(' ')
})()
const BRACE = (x1: number, x2: number, y: number, tick: number) =>
  `<path d="M${x1} ${y + tick} L${x1} ${y} L${x2} ${y} L${x2} ${y + tick}" fill="none" stroke="currentColor" stroke-width="2"/>`
const rfSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mg-rf')}</defs>
${TXT(285, 46, 19, 'middle', 'RF rises with distance — then saturates', true)}
<line x1="90" y1="370" x2="490" y2="370" stroke="currentColor" stroke-width="2" marker-end="url(#arr-mg-rf)"/>
<line x1="90" y1="370" x2="90" y2="70" stroke="currentColor" stroke-width="2" marker-end="url(#arr-mg-rf)"/>
${TXT(100, 80, 16, 'start', 'RF (%)')}
${TXT(290, 402, 16, 'middle', 'distance between the two genes (cM)')}
${M(`<line x1="90" y1="${rfY(25)}" x2="480" y2="${rfY(25)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>`)}
${TXT(80, rfY(25) + 5, 15, 'end', '25')}
${TXT(80, rfY(50) + 5, 15, 'end', '50')}
${TXT(80, 375, 15, 'end', '0')}
${R(`<line x1="90" y1="${rfY(50)}" x2="480" y2="${rfY(50)}" stroke="currentColor" stroke-width="2.5" stroke-dasharray="10 7"/>` + TXT(480, rfY(50) - 10, 16, 'end', 'maximum observable RF = 50%', true))}
${M(`<line x1="90" y1="370" x2="${f(rfX(45))}" y2="${f(rfY(45))}" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5"/>` + TXT(216, 168, 15, 'start', 'RF ≈ cM') + TXT(216, 186, 15, 'start', 'when close'))}
${B(`<polyline points="${rfPts}" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>`)}
${M(TXT(478, 330, 14, 'end', 'very far apart, or on different chromosomes:') + TXT(478, 348, 14, 'end', 'behaves as independent (1 : 1 : 1 : 1)'))}
${M(TXT(285, 428, 13, 'middle', 'illustrative curve — no numbers plotted') + TXT(285, 446, 13, 'middle', 'even guaranteed crossovers leave half the chromatids parental'))}
${M(`<line x1="520" y1="30" x2="520" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>`)}
${TXT(768, 46, 19, 'middle', 'Map distances add: ordering three genes', true)}
<line x1="580" y1="190" x2="956" y2="190" stroke="currentColor" stroke-width="3"/>
${B(`<circle cx="600" cy="190" r="8" fill="currentColor"/><circle cx="796" cy="190" r="8" fill="currentColor"/><circle cx="936" cy="190" r="8" fill="currentColor"/>`)}
${TXT(600, 228, 20, 'middle', 'A', true)}${TXT(796, 228, 20, 'middle', 'C', true)}${TXT(936, 228, 20, 'middle', 'B', true)}
${BRACE(600, 796, 150, 10)}${TXT(698, 140, 17, 'middle', '7 cM', true)}
${BRACE(796, 936, 150, 10)}${TXT(866, 140, 17, 'middle', '5 cM', true)}
${R(BRACE(600, 936, 266, -10) + TXT(768, 294, 17, 'middle', 'A–B ≈ 12 cM', true))}
${TXT(768, 336, 16, 'middle', '7 + 5 = 12 → C lies between A and B')}
${M(TXT(768, 358, 14, 'middle', 'the gene whose two distances sum to the third is the one in the middle'))}
${TXT(768, 402, 17, 'middle', 'RF = recombinant offspring ÷ total × 100%', true)}
${M(TXT(768, 428, 15, 'middle', '1% recombination = 1 map unit = 1 centimorgan (cM)'))}
</svg>`

/* 5 — The linked test cross: the lesson's 42 / 42 / 8 / 8 example as bars (replace-table, 560×440) */
const tcY = (p: number) => 330 - p * 4.6
const tcGroup = (cx: number, obs: number, rec: boolean, g1: string, g2: string) =>
  `<rect x="${cx - 42}" y="${f(tcY(25))}" width="38" height="${f(330 - tcY(25))}" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/>` +
  TXT(cx - 23, f(tcY(25)) - 7, 14, 'middle', '25%') +
  (rec ? R : B)(`<rect x="${cx + 4}" y="${f(tcY(obs))}" width="38" height="${f(330 - tcY(obs))}" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>`) +
  TXT(cx + 23, f(tcY(obs)) - 7, 14, 'middle', `${obs}%`, true) +
  TXT(cx, 352, 16, 'middle', g1, true) +
  (rec ? R : M)(TXT(cx, 371, 13, 'middle', g2))
const testCrossSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${TXT(280, 30, 18, 'middle', 'Test cross  AB/ab × ab/ab — four offspring classes', true)}
<rect x="30" y="48" width="14" height="12" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/>${TXT(50, 59, 13, 'start', 'expected if unlinked')}
${B(`<rect x="200" y="48" width="14" height="12" fill="currentColor" fill-opacity="0.6"/>`)}${TXT(220, 59, 13, 'start', 'observed, parental')}
${R(`<rect x="370" y="48" width="14" height="12" fill="currentColor" fill-opacity="0.6"/>`)}${TXT(390, 59, 13, 'start', 'observed, recombinant')}
${M(`<line x1="60" y1="${f(tcY(25))}" x2="540" y2="${f(tcY(25))}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/><line x1="60" y1="${f(tcY(50))}" x2="540" y2="${f(tcY(50))}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>`)}
<line x1="60" y1="330" x2="540" y2="330" stroke="currentColor" stroke-width="2"/>
<line x1="60" y1="330" x2="60" y2="86" stroke="currentColor" stroke-width="2"/>
${TXT(52, f(tcY(25)) + 5, 13, 'end', '25%')}${TXT(52, f(tcY(50)) + 5, 13, 'end', '50%')}
${tcGroup(125, 42, false, 'AB/ab', 'parental')}
${tcGroup(240, 42, false, 'ab/ab', 'parental')}
${tcGroup(355, 8, true, 'Ab/ab', 'recombinant')}
${tcGroup(470, 8, true, 'aB/ab', 'recombinant')}
${TXT(280, 404, 15, 'middle', 'parental = the two most frequent classes (cis here; trans flips them)', true)}
${M(TXT(280, 426, 14, 'middle', 'RF = 8 + 8 = 16% → 16 cM · unlinked would give 1 : 1 : 1 : 1'))}
</svg>`

/* 6 — Sex linkage: the two reciprocal X-linked recessive crosses (lead, 1000×460) */
const XA = 'Xᴬ'
const Xa = 'Xᵃ'
const sexSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${TXT(254, 44, 19, 'middle', `Carrier mother ${XA}${Xa} × normal father ${XA}Y`, true)}
${M(TXT(254, 68, 14, 'middle', "mother's gametes across · father's gametes down"))}
${PUNNETT(170, 104, 84, [XA, Xa], [XA, 'Y'], (r, c) => {
  if (r === 0) return c === 0 ? { t: `${XA}${XA}`, f: 'none' } : { t: `${XA}${Xa}`, f: 'blue' }
  return c === 0 ? { t: `${XA}Y`, f: 'none' } : { t: `${Xa}Y`, f: 'red' }
}, 19)}
${M(TXT(360, 158, 14, 'start', '← daughters') + TXT(360, 242, 14, 'start', '← sons'))}
${TXT(254, 312, 16, 'middle', '½ of sons affected · ½ of daughters carriers', true)}
${TXT(254, 336, 15, 'middle', 'no daughter affected — males are hemizygous')}
${M(`<line x1="500" y1="30" x2="500" y2="350" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>`)}
${TXT(774, 44, 19, 'middle', `Affected father ${Xa}Y × normal mother ${XA}${XA}`, true)}
${M(TXT(774, 68, 14, 'middle', "mother's gametes across · father's gametes down"))}
${PUNNETT(690, 104, 84, [XA, XA], [Xa, 'Y'], (r) => (r === 0 ? { t: `${XA}${Xa}`, f: 'blue' } : { t: `${XA}Y`, f: 'none' }), 19)}
${M(TXT(880, 158, 14, 'start', '← daughters') + TXT(880, 242, 14, 'start', '← sons'))}
${TXT(774, 312, 16, 'middle', 'ALL daughters carriers · NO son affected', true)}
${TXT(774, 336, 15, 'middle', 'a father gives each son his Y, never his X')}
${R(`<rect x="330" y="362" width="16" height="14" fill="currentColor" fill-opacity="0.5"/>`)}${TXT(352, 374, 14, 'start', 'affected')}
${B(`<rect x="440" y="362" width="16" height="14" fill="currentColor" fill-opacity="0.5"/>`)}${TXT(462, 374, 14, 'start', 'carrier')}
<rect x="540" y="362" width="16" height="14" fill="none" stroke="currentColor" stroke-width="1.5"/>${TXT(562, 374, 14, 'start', 'unaffected')}
${TXT(500, 410, 17, 'middle', 'swap which parent carries the allele and the outcome changes — reciprocal crosses differ for X-linked genes', true)}
${M(TXT(500, 436, 15, 'middle', 'autosomal reciprocal crosses give identical results · Y-linked traits pass father → every son'))}
</svg>`

/* 7 — Five inheritance patterns as mini pedigrees (lead, 1000×460) */
type Sex = 'm' | 'f'
type Status = 'n' | 'a' | 'c'
const SYM = (x: number, y: number, sex: Sex, st: Status) => {
  const shape =
    sex === 'm'
      ? `<rect x="${x - 11}" y="${y - 11}" width="22" height="22" fill="currentColor" fill-opacity="${st === 'a' ? 0.85 : 0}" stroke="currentColor" stroke-width="2"/>`
      : `<circle cx="${x}" cy="${y}" r="11" fill="currentColor" fill-opacity="${st === 'a' ? 0.85 : 0}" stroke="currentColor" stroke-width="2"/>`
  return shape + (st === 'c' ? `<circle cx="${x}" cy="${y}" r="4" fill="currentColor"/>` : '')
}
/** Mating line between (x1,y) and (x2,y), then a sibship to the children at y2. */
const FAM = (x1: number, x2: number, y: number, kids: number[], y2: number) => {
  const mid = (x1 + x2) / 2
  const sib = y2 - 28
  return (
    `<line x1="${x1 + 11}" y1="${y}" x2="${x2 - 11}" y2="${y}" stroke="currentColor" stroke-width="2"/>` +
    `<line x1="${mid}" y1="${y}" x2="${mid}" y2="${sib}" stroke="currentColor" stroke-width="2"/>` +
    `<line x1="${Math.min(...kids, mid)}" y1="${sib}" x2="${Math.max(...kids, mid)}" y2="${sib}" stroke="currentColor" stroke-width="2"/>` +
    kids.map((k) => `<line x1="${k}" y1="${sib}" x2="${k}" y2="${y2 - 11}" stroke="currentColor" stroke-width="2"/>`).join('')
  )
}
const [GI, GII, GIII] = [122, 222, 322]
const pedTitle = (cx: number, t: string, l1: string, l2: string, l3: string) =>
  TXT(cx, 80, 17, 'middle', t, true) + TXT(cx, 386, 14, 'middle', l1) + TXT(cx, 405, 14, 'middle', l2) + TXT(cx, 424, 14, 'middle', l3)
const pedigreeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${SYM(300, 38, 'm', 'n')}${TXT(318, 43, 14, 'start', 'male')}
${SYM(386, 38, 'f', 'n')}${TXT(404, 43, 14, 'start', 'female')}
${SYM(486, 38, 'm', 'a')}${TXT(504, 43, 14, 'start', 'affected')}
${SYM(594, 38, 'f', 'c')}${TXT(612, 43, 14, 'start', 'carrier (deduced)')}
${M(`<line x1="215" y1="62" x2="215" y2="430" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/><line x1="405" y1="62" x2="405" y2="430" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/><line x1="595" y1="62" x2="595" y2="430" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/><line x1="785" y1="62" x2="785" y2="430" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>`)}
${M(TXT(16, GI + 5, 14, 'start', 'I') + TXT(16, GII + 5, 14, 'start', 'II') + TXT(16, GIII + 5, 14, 'start', 'III'))}
${pedTitle(120, 'Autosomal dominant', 'every generation;', 'each affected child', 'has an affected parent')}
${FAM(86, 146, GI, [56, 104, 152], GII)}
${SYM(86, GI, 'm', 'a')}${SYM(146, GI, 'f', 'n')}
${SYM(56, GII, 'm', 'a')}${SYM(104, GII, 'f', 'n')}${SYM(152, GII, 'f', 'a')}
${FAM(152, 196, GII, [152, 196], GIII)}
${SYM(196, GII, 'm', 'n')}
${SYM(152, GIII, 'm', 'a')}${SYM(196, GIII, 'm', 'n')}
${pedTitle(310, 'Autosomal recessive', 'skips generations;', 'unaffected parents', 'are carriers (Aa × Aa)')}
${FAM(300, 356, GI, [300, 356], GII)}
${SYM(300, GI, 'm', 'c')}${SYM(356, GI, 'f', 'n')}
${SYM(300, GII, 'f', 'c')}${SYM(356, GII, 'm', 'n')}
${FAM(256, 300, GII, [234, 278, 322], GIII)}
${SYM(256, GII, 'm', 'c')}
${SYM(234, GIII, 'm', 'a')}${SYM(278, GIII, 'f', 'c')}${SYM(322, GIII, 'f', 'n')}
${pedTitle(500, 'X-linked recessive', 'mostly males, via', 'carrier mothers;', 'never father → son')}
${FAM(470, 526, GI, [440, 488, 536], GII)}
${SYM(470, GI, 'f', 'c')}${SYM(526, GI, 'm', 'n')}
${SYM(440, GII, 'm', 'a')}${SYM(488, GII, 'm', 'n')}${SYM(536, GII, 'f', 'c')}
${FAM(536, 580, GII, [536, 580], GIII)}
${SYM(580, GII, 'm', 'n')}
${SYM(536, GIII, 'm', 'a')}${SYM(580, GIII, 'f', 'c')}
${pedTitle(690, 'X-linked dominant', 'affected father →', 'ALL daughters, NO sons;', 'every generation')}
${FAM(650, 706, GI, [612, 656, 700], GII)}
${SYM(650, GI, 'm', 'a')}${SYM(706, GI, 'f', 'n')}
${SYM(612, GII, 'f', 'a')}${SYM(656, GII, 'm', 'n')}${SYM(700, GII, 'f', 'a')}
${FAM(700, 744, GII, [700, 744], GIII)}
${SYM(744, GII, 'm', 'n')}
${SYM(700, GIII, 'm', 'a')}${SYM(744, GIII, 'f', 'n')}
${pedTitle(880, 'Mitochondrial', 'affected mother →', 'ALL children; affected', 'father → NONE')}
${FAM(840, 896, GI, [812, 856, 900], GII)}
${SYM(840, GI, 'f', 'a')}${SYM(896, GI, 'm', 'n')}
${SYM(812, GII, 'm', 'a')}${SYM(856, GII, 'f', 'a')}${SYM(900, GII, 'm', 'a')}
${FAM(900, 944, GII, [900, 944], GIII)}
${SYM(944, GII, 'f', 'n')}
${SYM(900, GIII, 'f', 'n')}${SYM(944, GIII, 'm', 'n')}
${M(TXT(500, 452, 14, 'middle', 'first question on any pedigree: is there male-to-male transmission? yes → not X-linked (fathers give sons a Y)'))}
</svg>`

/* 8 — The modified dihybrid ratios as shaded 4×4 grids (lead, 1000×460) */
type Pheno = 'AB' | 'Ab' | 'aB' | 'ab'
const phenoOf = (r: number, c: number): Pheno => {
  const g1 = PAIR(G2[c][0], G2[r][0])
  const g2 = PAIR(G2[c][1], G2[r][1])
  return `${g1[0] === 'A' ? 'A' : 'a'}${g2[0] === 'B' ? 'B' : 'b'}` as Pheno
}
const ratioGrid = (x: number, ratio: string, name: string, fills: Record<Pheno, Fill>, l1: string, l2: string) =>
  TXT(x + 76, 60, 21, 'middle', ratio, true) +
  TXT(x + 76, 84, 15, 'middle', name) +
  PUNNETT(x, 120, 38, G2, G2, (r, c) => ({ f: fills[phenoOf(r, c)] }), 14, 0.55) +
  TXT(x + 76, 302, 14, 'middle', l1) +
  M(TXT(x + 76, 322, 14, 'middle', l2))
const ratiosSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${ratioGrid(80, '9 : 3 : 3 : 1', 'two genes, complete dominance', { AB: 'blue', Ab: 'red', aB: 'grey', ab: 'none' }, 'A_B_ · A_bb · aaB_ · aabb', 'four phenotypes')}
${ratioGrid(320, '9 : 3 : 4', 'recessive epistasis', { AB: 'blue', Ab: 'red', aB: 'grey', ab: 'grey' }, 'aa masks the B gene', 'aaB_ and aabb look alike: 3 + 1')}
${ratioGrid(560, '9 : 7', 'duplicate recessive (complementary)', { AB: 'blue', Ab: 'grey', aB: 'grey', ab: 'grey' }, 'either aa or bb blocks the pathway', 'only A_B_ shows the trait')}
${ratioGrid(800, '12 : 3 : 1', 'dominant epistasis', { AB: 'blue', Ab: 'blue', aB: 'red', ab: 'none' }, 'A_ masks the B gene', 'A_B_ and A_bb look alike: 9 + 3')}
${TXT(500, 370, 17, 'middle', 'count the phenotype classes first, convert counts to fractions, then match a canonical ratio', true)}
${M(TXT(500, 398, 15, 'middle', '2 : 1 from a monohybrid cross = recessive lethal (a quarter is missing) · fewer affected than predicted = incomplete penetrance'))}
${M(TXT(500, 422, 15, 'middle', 'same genotype, different severity = variable expressivity · sons ≠ daughters = X-linkage · 1 : 2 : 1 phenotypes = not simple dominance'))}
${M(TXT(500, 446, 14, 'middle', 'same 16 fertilizations every time — only which cells look alike changes'))}
</svg>`

/* 9 — Complete vs incomplete vs codominance, with ABO as a multiple-allele grid (lead, 1000×460) */
const IA = 'Iᴬ'
const IB = 'Iᴮ'
const ABO = [IA, IB, 'i']
const aboCell = (r: number, c: number): { t: string; f: Fill } => {
  const hasA = ABO[r] === IA || ABO[c] === IA
  const hasB = ABO[r] === IB || ABO[c] === IB
  if (hasA && hasB) return { t: 'AB', f: 'split' }
  if (hasA) return { t: 'A', f: 'blue' }
  if (hasB) return { t: 'B', f: 'red' }
  return { t: 'O', f: 'none' }
}
const dominanceSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${TXT(170, 44, 19, 'middle', 'Complete dominance', true)}
${M(TXT(170, 68, 15, 'middle', 'Aa × Aa → 3 : 1'))}
${PUNNETT(104, 104, 70, ['A', 'a'], ['A', 'a'], (r, c) => {
  const g = PAIR(['A', 'a'][c], ['A', 'a'][r])
  return { t: g, f: g[0] === 'A' ? 'blue' : 'none' }
}, 18, 0.4)}
${TXT(170, 282, 16, 'middle', 'two phenotypes', true)}
${TXT(170, 306, 15, 'middle', 'Aa looks exactly like AA')}
${M(`<line x1="330" y1="30" x2="330" y2="340" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/><line x1="650" y1="30" x2="650" y2="340" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>`)}
${TXT(490, 44, 19, 'middle', 'Incomplete dominance', true)}
${M(TXT(490, 68, 15, 'middle', 'Rr × Rr → 1 : 2 : 1 (red : pink : white)'))}
${PUNNETT(424, 104, 70, ['R', 'r'], ['R', 'r'], (r, c) => {
  const g = PAIR(['R', 'r'][c], ['R', 'r'][r])
  return { t: g, f: g === 'RR' ? 'red' : g === 'Rr' ? 'pink' : 'none' }
}, 18, 0.7)}
${TXT(490, 282, 16, 'middle', 'three phenotypes', true)}
${TXT(490, 306, 15, 'middle', 'heterozygote is intermediate (snapdragons)')}
${TXT(820, 44, 19, 'middle', 'Codominance + multiple alleles', true)}
${M(TXT(820, 68, 15, 'middle', 'ABO: Iᴬ, Iᴮ codominant; both dominant to i'))}
${PUNNETT(740, 104, 56, ABO, ABO, aboCell, 18, 0.4)}
${TXT(820, 300, 16, 'middle', '6 genotypes → 4 phenotypes', true)}
${TXT(820, 324, 15, 'middle', 'AB cells carry BOTH antigens')}
${TXT(500, 378, 17, 'middle', 'three phenotypes from one monohybrid cross ⇒ the “simple dominance” model in the stem is wrong', true)}
${M(TXT(500, 406, 15, 'middle', 'incomplete: a blended intermediate · codominant: both alleles fully expressed (sickle trait makes HbA and HbS)'))}
${M(TXT(500, 430, 14, 'middle', 'ratios shown are for genotypes 1 : 2 : 1 — with complete dominance two of the classes merge into 3 : 1'))}
</svg>`

export const mcatMendelianFigures: DeckFigurePlacement[] = [
  {
    at: 'The Two Laws',
    mode: 'lead',
    figure: {
      svg: lawsSvg,
      alt:
        'Left, Law of Segregation: a diploid parent cell holds one homolog pair drawn as two rods, a filled blue rod A and a hollow blue rod a. Arrows labelled anaphase I lead to two gametes, one holding A and one holding a, each with probability one half: each gamete carries exactly one allele of each gene. Right, Law of Independent Assortment: two metaphase-I cells with two homolog pairs, blue A/a and red B/b, lined up either side of a dashed metaphase plate. In orientation 1 (probability one half) A and B sit on the same side, giving gametes AB and ab, one quarter each. In orientation 2 (one half) A sits with b, giving Ab and aB, one quarter each. Legend: filled rod = dominant allele, hollow = recessive, blue = gene A, red = gene B, on different chromosomes or far apart on one. Footer: two heterozygous loci give 2 squared = 4 gamete types; n loci give 2 to the n.',
      caption: 'Mendel’s laws are meiosis I: homologs part in anaphase I (segregation) and pairs line up two ways at metaphase I (independent assortment).',
    },
    blocks: [
      '- **Segregation:** homologs part in anaphase I → each gamete gets exactly ONE allele',
      '- **Independent assortment:** pairs orient at random at metaphase I → $2^n$ gamete types',
    ],
  },
  {
    at: 'The Canonical Crosses',
    mode: 'lead',
    figure: {
      svg: crossesSvg,
      alt:
        'Three Punnett squares. Left, monohybrid Aa × Aa: a 2 by 2 grid with gametes A and a on each axis; cells AA, Aa, Aa are shaded blue (dominant phenotype) and aa is unshaded: 1 AA : 2 Aa : 1 aa, phenotypes 3 : 1. Middle, dihybrid AaBb × AaBb: a 4 by 4 grid with gametes AB, Ab, aB, ab on each axis and the 16 genotypes written in; nine A_B_ cells are blue, three A_bb red, three aaB_ grey and the single aabb unshaded: 9 : 3 : 3 : 1, only with independent assortment and complete dominance. Right, test cross with aa: if the tested parent is AA, a 2 by 1 grid gives Aa and Aa, all dominant; if the tested parent is Aa the grid gives Aa and aa, a 1 : 1 ratio. The aa parent contributes only a, so the offspring read out the other parent’s gametes. Footer: gametes across the top and down the side; each cell is one equally likely fertilization.',
      caption: 'The three crosses every genetics passage assumes: 3 : 1, 9 : 3 : 3 : 1, and the test cross that reads a parent’s gametes directly.',
    },
    blocks: [
      '- Monohybrid $Aa \\times Aa$: $1:2:1$ genotypes, $3:1$ phenotypes · dihybrid $AaBb \\times AaBb$: $9:3:3:1$',
      '- **Test cross** vs $aa$: all dominant → parent is $AA$; $1:1$ → parent is $Aa$',
    ],
  },
  {
    at: 'Crossing Over Breaks Linkage',
    mode: 'lead',
    figure: {
      svg: crossoverSvg,
      alt:
        'Top left, no crossover between A and B: a prophase-I tetrad drawn as four horizontal chromatids, two blue carrying A and B and two red carrying a and b; the four resulting gametes are AB, AB, ab, ab, all parental. Top right, crossover between A and B: the inner blue and red chromatids cross at a chiasma (a ring) between the two loci and swap their far ends; the four gametes are AB (parental), Ab and aB (each half blue, half red: recombinant) and ab (parental): two parental plus two recombinant. Bottom: two chromosomes, one with A and B close together and a small red region between them (a crossover landing there is rare, few recombinants), one with A and B far apart and a long red region (many chances, more recombinants, capping at 50%). Footer: parental classes outnumber recombinant classes; the recombinant fraction measures the distance.',
      caption: 'A crossover between two linked loci swaps the far ends of two chromatids: half the products of that tetrad are recombinant, and the chance of it rises with distance.',
    },
    blocks: [
      '- Crossover **between** two linked genes (prophase I) → recombinant gametes; none between them → parental',
      '- Close genes: parental ≫ recombinant — the recombinant fraction measures the distance',
    ],
  },
  {
    at: 'Recombination Frequency (RF)',
    mode: 'lead',
    figure: {
      svg: rfSvg,
      alt:
        'Left, a graph of recombination frequency in percent against distance between two genes in centimorgans. A blue curve rises from the origin, at first along a dashed line labelled RF ≈ cM when genes are close, then bends over and flattens beneath a red dashed ceiling labelled maximum observable RF = 50%; a note at the right says very far apart, or on different chromosomes, behaves as independent (1 : 1 : 1 : 1). Caption: illustrative curve; even guaranteed crossovers leave half the chromatids parental. Right, map distances add: a line with three genes, A then C then B; a bracket over A–C reads 7 cM, over C–B 5 cM, and a red bracket under A–B reads about 12 cM. 7 + 5 = 12, so C lies between A and B; the gene whose two distances sum to the third is the one in the middle. Below: RF = recombinant offspring ÷ total × 100%; 1% recombination = 1 map unit = 1 centimorgan.',
      caption: 'RF grows with distance until it saturates at 50% (illustrative); over short ranges map distances add, which is how three genes get ordered.',
    },
    blocks: [
      '- $RF = \\frac{\\text{recombinants}}{\\text{total}} \\times 100\\%$; $1\\%$ = 1 cM; distances add → order the genes',
      '- RF never exceeds **50%**: far-apart genes assort as if independent',
    ],
  },
  {
    at: 'Reading a Test Cross for Linkage',
    mode: 'replace-table',
    figure: {
      svg: testCrossSvg,
      alt:
        'A grouped bar chart of the four offspring classes of the test cross AB/ab × ab/ab. For each class a grey bar shows the 25% expected if the genes were unlinked, beside the value observed if linked: AB/ab and ab/ab, the parental classes, are tall blue bars at 42% each; Ab/ab and aB/ab, the recombinant classes, are short red bars at 8% each. Footer: parental classes are the two most frequent (cis here; a trans parent flips which classes are parental); RF = 8 + 8 = 16%, so 16 cM; unlinked genes would give 1 : 1 : 1 : 1.',
      caption: 'The lesson’s linked test cross: two big parental classes, two small recombinant classes — RF = 8 + 8 = 16% = 16 cM.',
    },
    blocks: [
      '- Unlinked: $1:1:1:1$ (25% each) · linked: two big **parental** classes, two small **recombinant** classes',
      '- Parental = the **two most frequent** classes; cis ($AB/ab$) or trans ($Ab/aB$) is read from the data',
      '- $RF = \\frac{\\text{recombinants}}{\\text{total}} \\times 100\\%$ — here $8 + 8 = 16\\%$ = 16 cM',
    ],
  },
  {
    at: 'Sex Linkage Basics',
    mode: 'lead',
    figure: {
      svg: sexSvg,
      alt:
        'Two reciprocal X-linked recessive crosses as Punnett squares, mother’s gametes across the top and father’s down the side. Left, carrier mother XA Xa × normal father XA Y: daughters are XA XA (unaffected) and XA Xa (carrier, blue); sons are XA Y (unaffected) and Xa Y (affected, red). Half of sons affected, half of daughters carriers, no daughter affected; males are hemizygous. Right, affected father Xa Y × normal mother XA XA: both daughters are XA Xa carriers (blue), both sons XA Y unaffected. All daughters carriers, no son affected: a father gives each son his Y, never his X. Legend: red = affected, blue = carrier, hollow = unaffected. Footer: swapping which parent carries the allele changes the outcome, so reciprocal crosses differ for X-linked genes; autosomal reciprocal crosses give identical results; Y-linked traits pass father to every son.',
      caption: 'The same allele in the mother or the father gives different offspring — the reciprocal-cross signature of X-linkage.',
    },
    blocks: [
      '- Males are **hemizygous**: one X allele = phenotype; a son never receives his father’s X',
      '- Reciprocal crosses differ for X-linked genes (identical for autosomal) · Y-linked → every son',
    ],
  },
  {
    at: 'The Five Patterns and Their Fingerprints',
    mode: 'lead',
    figure: {
      svg: pedigreeSvg,
      alt:
        'Five three-generation mini pedigrees (squares male, circles female, filled affected, a central dot a deduced carrier). Autosomal dominant: an affected father has an affected son and an affected daughter, and that daughter has an affected son — the trait appears in every generation and every affected child has an affected parent. Autosomal recessive: carrier parents in generation I have an unaffected carrier daughter who marries a carrier; their son in generation III is affected — the trait skips generations and the parents are unaffected carriers. X-linked recessive: a carrier mother has an affected son and a carrier daughter; the carrier daughter has an affected son — mostly males, through carrier mothers, never father to son. X-linked dominant: an affected father has two affected daughters and an unaffected son; an affected daughter then passes it to a son — affected father to all daughters and no sons, every generation. Mitochondrial: an affected mother has three affected children; her affected son has two unaffected children — affected mother to all children, affected father to none. Footer: first question on any pedigree is whether there is male-to-male transmission; if yes it is not X-linked, because fathers give sons a Y.',
      caption: 'Five fingerprints side by side: read generations, sexes and father-to-son transmission before naming the pattern.',
    },
    blocks: [
      '- Male-to-male transmission rules out X-linkage; skipping generations → recessive; every generation → dominant',
      '- X-linked dominant father → all daughters, no sons · mitochondrial mother → all children, father → none',
    ],
  },
  {
    at: "The MCAT's Favorite Genetics Passage",
    mode: 'lead',
    figure: {
      svg: ratiosSvg,
      alt:
        'Four 4 by 4 Punnett grids for the same dihybrid cross (gametes AB, Ab, aB, ab on each axis), shaded by phenotype. 9 : 3 : 3 : 1, two genes with complete dominance: nine A_B_ cells blue, three A_bb red, three aaB_ grey, one aabb unshaded, four phenotypes. 9 : 3 : 4, recessive epistasis: aa masks the B gene, so the aaB_ and aabb cells are shaded alike (3 + 1 = 4). 9 : 7, duplicate recessive or complementary genes: either aa or bb blocks the pathway, so only the nine A_B_ cells are blue and the other seven are alike. 12 : 3 : 1, dominant epistasis: A_ masks the B gene, so A_B_ and A_bb are both blue (9 + 3 = 12), aaB_ red, aabb unshaded. Footer: count the phenotype classes first, convert counts to fractions, then match a canonical ratio; 2 : 1 from a monohybrid cross means a recessive lethal (a quarter missing); fewer affected than predicted means incomplete penetrance; same genotype with different severity means variable expressivity; sons differing from daughters means X-linkage; 1 : 2 : 1 phenotypes means not simple dominance. The same 16 fertilizations every time; only which cells look alike changes.',
      caption: 'Every modified ratio is the same 16 cells with some phenotype classes merged — see which ones merge and you have named the modifier.',
    },
    blocks: [
      '- Count the phenotype classes, convert to fractions, match the ratio: $9:3:4$, $9:7$, $12:3:1$ = epistasis',
      '- A missing quarter ($2:1$) → recessive lethal · sons ≠ daughters → X-linkage · too few affected → penetrance',
    ],
  },
  {
    at: 'Incomplete Dominance vs. Codominance',
    mode: 'lead',
    figure: {
      svg: dominanceSvg,
      alt:
        'Three Punnett squares. Complete dominance, Aa × Aa: AA, Aa and Aa shaded blue, aa unshaded — two phenotypes, Aa looks exactly like AA. Incomplete dominance, Rr × Rr: RR deep red, the two Rr cells pale pink, rr unshaded — three phenotypes, 1 : 2 : 1 red : pink : white, the heterozygote is intermediate (snapdragons). Codominance with multiple alleles, ABO: a 3 by 3 grid with gametes IA, IB and i on each axis; cells read A (blue) for IA IA and IA i, B (red) for IB IB and IB i, AB (half blue, half red) for IA IB, and O (unshaded) for ii — 6 genotypes, 4 phenotypes; IA and IB are codominant and both dominant to i; AB cells carry both antigens. Footer: three phenotypes from one monohybrid cross means the simple-dominance model in the passage stem is wrong; incomplete dominance is a blended intermediate, codominance expresses both alleles fully (sickle trait makes both HbA and HbS); genotype ratios are 1 : 2 : 1 and with complete dominance two classes merge into 3 : 1.',
      caption: 'Same 1 : 2 : 1 genotypes, three different phenotype pictures — and ABO shows codominance and multiple alleles in one 3 × 3 grid.',
    },
    blocks: [
      '- Incomplete: heterozygote intermediate ($1:2:1$, pink) · codominant: both alleles fully expressed (AB)',
      '- ABO: $I^A, I^B$ codominant, both dominant to $i$ → 6 genotypes, 4 phenotypes',
    ],
  },
]
