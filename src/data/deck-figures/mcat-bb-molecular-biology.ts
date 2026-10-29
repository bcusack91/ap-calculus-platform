import type { DeckFigurePlacement } from './index'

/**
 * Molecular Biology (7-part survey, MCAT B/B) — figures for the in-class deck.
 * Authored 2026-10-28.
 *
 * The dedicated decks (replication, transcription, translation, biotechnology)
 * draw the replication fork, repair panels, telomerase, the transcription
 * bubble, pre-mRNA processing, the lac operon, the ribosome A/P/E cycle, tRNA,
 * PCR, gels, blots and CRISPR — so the survey draws DIFFERENT views: the
 * accuracy ladder (base selection → proofreading → mismatch repair), the
 * central dogma as information flow with reverse transcription as the one
 * exception, a "which strand does the mRNA match" cheat picture, prokaryote
 * vs eukaryote cells as compartments, codon counting (degenerate, never
 * ambiguous), the five-level regulation ladder, miRNA/siRNA silencing, the
 * point-mutation consequence grid and the three viral genome strategies.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. No molecule is drawn structurally (bases are letters,
 * molecules are labelled boxes).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-mb-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Rounded box with a centred label (one line). */
const box = (cx: number, cy: number, w: number, h: number, label: string, size = 18, weight = 700, opacity = 0.08) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy + size * 0.36}" font-size="${size}" font-weight="${weight}" text-anchor="middle" fill="currentColor">${label}</text>`

/** Rounded box with two centred lines (bold title, smaller subtitle). */
const box2 = (cx: number, cy: number, w: number, h: number, l1: string, l2: string, s1 = 18, s2 = 13, opacity = 0.08) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy - 2}" font-size="${s1}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text><text x="${cx}" y="${cy + s2 + 6}" font-size="${s2}" text-anchor="middle" fill="currentColor">${l2}</text>`

const txt = (x: number, y: number, size: number, s: string, attrs = '') =>
  `<text x="${x}" y="${y}" font-size="${size}"${attrs} fill="currentColor">${s}</text>`
const ctext = (x: number, y: number, size: number, s: string, attrs = '') => txt(x, y, size, s, ` text-anchor="middle"${attrs}`)
const bold = ' font-weight="700"'

/* 1 — Replication accuracy: three stacked layers, each ≈ 100× (lead, 1000×460) */
const step = (x: number, y: number, l1: string, l2: string) =>
  `<rect x="${x}" y="${y}" width="260" height="86" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>${ctext(x + 130, y + 36, 20, l1, bold)}${ctext(x + 130, y + 64, 14, l2)}`
const accuracySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mb-acc')}</defs>
${txt(60, 40, 22, 'Three layers of accuracy — each one ≈ 100× better than the last', bold)}
${step(60, 272, '1 · Base selection', 'Pol III matches each new base')}
${step(370, 187, '2 · Proofreading', '3′→5′ exonuclease clips errors')}
${step(680, 102, '3 · Mismatch repair', 'new-strand mismatch cut out')}
<path d="M320 300 H345 V250 H365" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-acc)"/>
<path d="M630 215 H655 V165 H675" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-acc)"/>
<g class="fig-muted">
${ctext(345, 238, 15, '×100', bold)}
${ctext(655, 153, 15, '×100', bold)}
${ctext(810, 216, 14, 'defective → Lynch syndrome (Part 5)')}
<path d="M60 392 V382 M60 392 H630 V382" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M680 392 V382 M680 392 H940 V382" fill="none" stroke="currentColor" stroke-width="2"/>
${ctext(345, 414, 15, 'during synthesis — the polymerase itself')}
${ctext(810, 414, 15, 'after replication (MMR)')}
</g>
<g class="fig-accent-2">
${ctext(190, 448, 20, '~1 error in 10⁵', bold)}
${ctext(500, 448, 20, '~1 in 10⁷', bold)}
${ctext(810, 448, 20, '~1 in 10⁹–10¹⁰', bold)}
</g>
</svg>`

/* 2 — The central dogma as information flow, with reverse transcription as the exception (lead, 1000×460) */
const dogmaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mb-dogma')}</defs>
${ctext(580, 42, 22, 'One direction of information flow — with one exception', bold)}
${box2(150, 195, 170, 90, 'DNA', 'nucleus', 26, 13)}
${box2(500, 195, 170, 90, 'RNA', 'nucleus → cytoplasm', 26, 13)}
${box2(850, 195, 170, 90, 'Protein', 'ribosome, cytoplasm', 26, 13)}
<path d="M110 150 C110 70 190 70 190 150" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-dogma)"/>
${ctext(150, 58, 17, 'Replication', bold)}
<line x1="237" y1="195" x2="413" y2="195" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-dogma)"/>
${ctext(325, 180, 19, 'Transcription', bold)}
<line x1="587" y1="195" x2="763" y2="195" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-dogma)"/>
${ctext(675, 180, 19, 'Translation', bold)}
<g class="fig-muted">
${ctext(325, 224, 14, 'template read 3′→5′')}
${ctext(325, 244, 14, 'RNA made 5′→3′')}
${ctext(325, 264, 14, 'no primer needed')}
${ctext(675, 224, 14, 'mRNA read 5′→3′')}
${ctext(675, 244, 14, 'protein grows N → C')}
${ctext(675, 264, 14, 'on the ribosome')}
${ctext(840, 292, 14, 'prions pass on a fold, not a sequence')}
${ctext(500, 432, 16, 'Nothing starts at Protein: sequence information never flows back from protein.')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mb-dogma-r')}</defs>
<path d="M480 242 V330 H170 V246" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6" marker-end="url(#arr-mb-dogma-r)"/>
${ctext(325, 362, 19, 'Reverse transcription — the exception', bold)}
${ctext(325, 386, 15, 'retroviruses (HIV) · telomerase · cDNA for RT-PCR')}
</g>
</svg>`

/* 3 — Which strand does the mRNA match? (lead, 1000×460) */
const CODING = ['A', 'T', 'G', 'C', 'G', 'A', 'T', 'T', 'C']
const TEMPLATE = ['T', 'A', 'C', 'G', 'C', 'T', 'A', 'A', 'G']
const MRNA = ['A', 'U', 'G', 'C', 'G', 'A', 'U', 'U', 'C']
const letterX = (i: number) => 330 + i * 48
const letters = (y: number, arr: string[], redU = false) =>
  arr
    .map((b, i) =>
      redU && b === 'U'
        ? `<text x="${letterX(i)}" y="${y}" font-size="26" font-weight="700" text-anchor="middle" fill="currentColor"><tspan class="fig-accent-2">U</tspan></text>`
        : ctext(letterX(i), y, 26, b, bold),
    )
    .join('')
const hbonds = CODING.map((_, i) => `<line x1="${letterX(i)}" y1="130" x2="${letterX(i)}" y2="160" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>`).join('')
const bracket = (i0: number, i1: number) => `<path d="M${letterX(i0) - 18} 332 V340 H${letterX(i1) + 18} V332" fill="none" stroke="currentColor" stroke-width="2"/>`
const strandSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(60, 40, 22, 'Which strand does the mRNA match?', bold)}
${txt(60, 126, 18, 'Coding strand', bold)}
${ctext(292, 126, 16, '5′')}${letters(126, CODING)}${ctext(752, 126, 16, '3′')}
${txt(60, 194, 18, 'Template strand', bold)}
${ctext(292, 194, 16, '3′')}${letters(194, TEMPLATE)}${ctext(752, 194, 16, '5′')}
<g class="fig-muted">
${hbonds}
${txt(780, 126, 15, '= mRNA, with T for U')}
${txt(780, 194, 15, 'read 3′→5′ by RNA Pol')}
${bracket(0, 2)}${bracket(3, 5)}${bracket(6, 8)}
${ctext(378, 362, 15, 'AUG = start (Met)')}
${ctext(570, 362, 15, 'codons, read 5′→3′')}
${txt(60, 438, 16, 'antiparallel and complementary to the template · no primer · little proofreading (mRNA is temporary)')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-mb-strand-b')}</defs>
<line x1="330" y1="224" x2="714" y2="224" stroke="currentColor" stroke-width="3" marker-end="url(#arr-mb-strand-b)"/>
${ctext(522, 252, 16, 'RNA Pol moves this way: reads the template 3′→5′, builds RNA 5′→3′')}
${txt(60, 318, 18, 'mRNA', bold)}
${ctext(292, 318, 16, '5′')}${letters(318, MRNA, true)}${ctext(752, 318, 16, '3′')}
${txt(780, 318, 15, 'grows 5′→3′')}
</g>
${txt(60, 408, 19, 'mRNA = the coding strand with U in place of T', bold)}
</svg>`

/* 4 — Prokaryote vs eukaryote: where transcription happens and what follows it (replace-table, 560×440) */
const cellsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-mb-cells')}</defs>
${ctext(145, 32, 18, 'Prokaryote', bold)}
${ctext(415, 32, 18, 'Eukaryote', bold)}
<rect x="20" y="48" width="250" height="350" rx="26" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="290" y="48" width="250" height="350" rx="26" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="40" y1="100" x2="250" y2="100" stroke="currentColor" stroke-width="3"/>
${box(110, 100, 74, 30, 'RNA Pol', 13)}
<g class="fig-muted">
${txt(44, 90, 12, 'DNA')}
${txt(318, 80, 12, 'nucleus')}
<rect x="305" y="62" width="220" height="170" rx="18" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
${txt(396, 148, 11, 'Pol I rRNA · Pol III tRNA')}
${txt(320, 112, 12, 'DNA')}
${txt(412, 250, 12, 'nuclear pore')}
${ctext(145, 282, 13, 'translation starts while')}
${ctext(145, 299, 13, 'transcription continues')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-mb-cells-b')}</defs>
<path d="M150 115 V240" fill="none" stroke="currentColor" stroke-width="3"/>
${txt(160, 170, 13, 'mRNA', bold)}
<circle cx="150" cy="222" r="18" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
${txt(176, 227, 13, 'ribosome', bold)}
<line x1="380" y1="137" x2="380" y2="160" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-cells-b)"/>
<rect x="315" y="166" width="200" height="34" rx="9" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
${ctext(415, 189, 14, 'cap · poly-A tail · splice', bold)}
<line x1="400" y1="202" x2="400" y2="266" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-cells-b)"/>
<circle cx="400" cy="290" r="18" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
${txt(426, 295, 13, 'ribosome', bold)}
</g>
<line x1="320" y1="122" x2="510" y2="122" stroke="currentColor" stroke-width="3"/>
${box(380, 122, 70, 30, 'Pol II', 13)}
${ctext(145, 332, 14, 'one RNA Pol + σ factor', bold)}
${ctext(145, 354, 14, 'no cap, tail or splicing')}
${ctext(145, 376, 14, 'mRNA used as it is made')}
${ctext(415, 346, 14, 'TATA box (−25) · TFs · Mediator', bold)}
${ctext(415, 368, 14, 'processed, then exported')}
${ctext(415, 390, 14, 'translation only in the cytoplasm')}
</svg>`

/* 5 — The genetic code: 64 codons, degenerate but never ambiguous (lead, 1000×460) */
const column = (x: number, head: string) =>
  `${ctext(x + 35, 84, 15, head)}<rect x="${x}" y="96" width="70" height="128" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>${['A', 'C', 'G', 'U'].map((b, i) => ctext(x + 35, 124 + i * 30, 18, b, bold)).join('')}`
const codonSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(60, 40, 22, '64 codons — degenerate, never ambiguous', bold)}
${column(80, '1st')}${column(190, '2nd')}
<g class="fig-accent-2">${column(300, '3rd (wobble)')}</g>
${ctext(165, 168, 24, '×')}${ctext(275, 168, 24, '×')}${txt(390, 168, 26, '= 64', bold)}
<g class="fig-accent">
<defs>${ARROW('arr-mb-codon-b')}</defs>
<rect x="80" y="252" width="334" height="26" rx="5" fill="currentColor" fill-opacity="0.35"/>
${txt(80, 308, 16, '61 codons → 20 amino acids (AUG = start, Met)', bold)}
${txt(560, 90, 19, 'Degenerate', bold)}
${[0, 1, 2, 3].map((i) => `<line x1="640" y1="${125 + i * 32}" x2="718" y2="178" stroke="currentColor" stroke-width="2" marker-end="url(#arr-mb-codon-b)"/>`).join('')}
${box(770, 180, 90, 50, 'Ala', 20)}
</g>
<g class="fig-accent-2">
<rect x="414" y="252" width="16" height="26" rx="4" fill="currentColor" fill-opacity="0.6"/>
${txt(80, 334, 16, '3 stop codons: UAA · UAG · UGA', bold)}
</g>
${['U', 'C', 'A', 'G'].map((b, i) => `<text x="600" y="${132 + i * 32}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">GC<tspan class="fig-accent-2">${b}</tspan></text>`).join('')}
${txt(560, 324, 19, 'Not ambiguous', bold)}
${ctext(600, 366, 20, 'AUG', bold)}
<line x1="640" y1="359" x2="718" y2="359" stroke="currentColor" stroke-width="2" marker-end="url(#arr-mb-codon)"/>
<defs>${ARROW('arr-mb-codon')}</defs>
${box(770, 359, 90, 46, 'Met', 20)}
<g class="fig-muted">
${txt(80, 374, 15, 'nearly universal — the same code in almost all organisms')}
${ctext(770, 232, 14, 'several codons → one amino acid')}
${ctext(770, 254, 14, 'wobble base: G–U pairing allowed → silent mutations')}
${ctext(600, 390, 13, 'start codon')}
${ctext(770, 404, 14, 'one codon → exactly one amino acid')}
</g>
</svg>`

/* 6 — Five levels of eukaryotic gene regulation as one ladder (replace-table, 560×440) */
const LEVELS: [string, string, string, string][] = [
  ['DNA &amp; chromatin', 'epigenetic', 'CpG methylation silences;', 'histone acetylation opens'],
  ['Transcription', 'transcriptional', 'transcription factors bind', 'enhancers / silencers, Mediator'],
  ['pre-mRNA → mRNA', 'post-transcriptional', 'alternative splicing, mRNA', 'stability, miRNA silencing'],
  ['Translation', 'translational', 'initiation factors; stored', 'mRNA translated on a signal'],
  ['Protein', 'post-translational', 'phosphorylation; ubiquitin →', 'proteasome; proteolytic cleavage'],
]
const ladderSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-mb-ladder')}</defs>
${ctext(280, 32, 17, 'Five places to control one gene', bold)}
${LEVELS.map(([l1, l2, r1, r2], i) => {
  const y = 56 + i * 74
  return `<rect x="20" y="${y}" width="230" height="52" rx="11" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>${ctext(135, y + 22, 16, l1, bold)}<g class="fig-muted">${ctext(135, y + 43, 13, l2)}</g>${txt(270, y + 22, 14, r1)}${txt(270, y + 42, 14, r2)}${i < 4 ? `<line x1="135" y1="${y + 53}" x2="135" y2="${y + 73}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-ladder)"/>` : ''}`
}).join('')}
<g class="fig-muted">${ctext(280, 432, 13, 'same genome in every cell — regulation at every rung')}</g>
</svg>`

/* 7 — miRNA / siRNA silencing: one complex, two outcomes (lead, 1000×460) */
const ticks = [440, 460, 480, 500, 520, 540, 560].map((x) => `<line x1="${x}" y1="233" x2="${x}" y2="254" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>`).join('')
const rnaiSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mb-rnai')}</defs>
${txt(60, 40, 22, 'RNA interference — a small RNA finds its matching mRNA', bold)}
${box(300, 105, 270, 46, 'miRNA — endogenous, ~22 nt', 17)}
${box(660, 105, 270, 46, 'siRNA — exogenous / synthetic', 17)}
<line x1="300" y1="129" x2="455" y2="182" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-rnai)"/>
<line x1="660" y1="129" x2="545" y2="182" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-rnai)"/>
<circle cx="80" cy="262" r="10" fill="currentColor"/>
<rect x="100" y="249" width="300" height="26" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${ctext(250, 267, 14, 'coding sequence')}
<line x1="400" y1="262" x2="560" y2="262" stroke="currentColor" stroke-width="3"/>
${txt(564, 268, 14, 'AAAA…', bold)}
<g class="fig-muted">
${ctext(80, 240, 13, '5′ cap')}
${ctext(480, 292, 14, '3′ UTR — the target site')}
${ticks}
${txt(60, 424, 15, 'Both routes load the same complex: the small RNA is the address, the protein does the silencing.')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-mb-rnai-b')}</defs>
<rect x="405" y="185" width="190" height="46" rx="11" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
${ctext(500, 214, 16, 'silencing complex', bold)}
<line x1="598" y1="200" x2="696" y2="186" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-rnai-b)"/>
<rect x="700" y="150" width="260" height="70" rx="11" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${ctext(830, 180, 16, 'partial complementarity', bold)}
${ctext(830, 204, 15, 'translation repressed')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mb-rnai-r')}</defs>
<line x1="598" y1="222" x2="696" y2="320" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-rnai-r)"/>
<rect x="700" y="300" width="260" height="70" rx="11" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${ctext(830, 330, 16, 'extensive complementarity', bold)}
${ctext(830, 354, 15, 'mRNA cleaved and degraded')}
</g>
</svg>`

/* 8 — Point mutations and the frameshift: one base changes, what happens (replace-table, 560×440) */
const codonBox = (cx: number, cy: number, s: string, w = 64, size = 16) =>
  `<rect x="${cx - w / 2}" y="${cy - 16}" width="${w}" height="32" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/><text x="${cx}" y="${cy + 6}" font-size="${size}" font-weight="700" text-anchor="middle" fill="currentColor">${s}</text>`
const red = (s: string) => `<tspan class="fig-accent-2">${s}</tspan>`
const mutRow = (y: number, label: string, before: string, after: string) =>
  `${txt(20, y + 6, 15, label, bold)}${codonBox(150, y, before)}<line x1="188" y1="${y}" x2="212" y2="${y}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-mut)"/>${codonBox(250, y, after)}`
const strip = (y: number, codons: string[]) => codons.map((c, i) => codonBox(130 + i * 44, y, c, 40, 13)).join('')
const mutationSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-mb-mut')}</defs>
${txt(20, 32, 17, 'One base changes — what happens to the protein?', bold)}
${mutRow(92, 'Silent', 'GCU', `GC${red('C')}`)}
${txt(300, 86, 15, 'Ala → Ala', bold)}
${mutRow(160, 'Missense', 'GAG', `G${red('U')}G`)}
<g class="fig-accent">${txt(300, 154, 15, 'Glu → Val', bold)}</g>
${mutRow(228, 'Nonsense', 'UAC', `UA${red('A')}`)}
<g class="fig-accent-2">${txt(300, 222, 15, 'Tyr → STOP', bold)}${txt(300, 324, 14, 'every downstream codon changes', bold)}</g>
${txt(20, 306, 15, 'Frameshift', bold)}
${strip(300, ['AUG', `${red('G')}AG`, 'AAA', 'GGC'])}
<line x1="196" y1="318" x2="196" y2="330" stroke="currentColor" stroke-width="2" marker-end="url(#arr-mb-mut)"/>
${strip(346, ['AUG', red('AGA'), red('AAG'), red('GC…')])}
<g class="fig-muted">
${txt(300, 105, 13, 'no change (often the 3rd base)')}
${txt(300, 173, 13, 'sickle cell: charged → nonpolar')}
${txt(300, 241, 13, 'truncated protein')}
${txt(300, 304, 13, 'delete 1 nt (not a multiple of 3)')}
${txt(300, 344, 13, 'usually nonfunctional, early stop')}
<line x1="20" y1="126" x2="540" y2="126" stroke="currentColor" stroke-width="1.5"/>
<line x1="20" y1="194" x2="540" y2="194" stroke="currentColor" stroke-width="1.5"/>
<line x1="20" y1="262" x2="540" y2="262" stroke="currentColor" stroke-width="1.5"/>
${txt(20, 400, 13, 'in multiples of 3: amino acids added or removed, frame kept')}
${txt(20, 424, 13, 'transitions (A↔G, C↔T) are more common than transversions')}
</g>
</svg>`

/* 9 — Three viral genome strategies to reach mRNA (replace-table, 560×440) */
const virusSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-mb-vir')}</defs>
${ctext(105, 34, 17, 'DNA virus', bold)}${ctext(280, 34, 17, 'RNA virus', bold)}${ctext(455, 34, 17, 'Retrovirus', bold)}
${box(105, 76, 150, 40, 'dsDNA (usually)', 15)}
${box(280, 76, 150, 40, 'ssRNA or dsRNA', 15)}
${box(455, 76, 150, 40, 'ssRNA', 15)}
<line x1="50" y1="97" x2="50" y2="278" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-vir)"/>
<line x1="225" y1="97" x2="225" y2="278" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-vir)"/>
<line x1="400" y1="249" x2="400" y2="278" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-vir)"/>
${box(455, 150, 150, 36, 'dsDNA', 15)}
${box(455, 230, 150, 36, 'provirus in host DNA', 13)}
${box(105, 300, 150, 40, 'mRNA → protein', 15)}
${box(280, 300, 150, 40, 'mRNA → protein', 15)}
${box(455, 300, 150, 40, 'mRNA → protein', 15)}
${txt(60, 150, 13, 'copied by DNA Pol', bold)}
${txt(60, 234, 13, 'transcribed by', bold)}
${txt(60, 250, 13, 'host RNA Pol', bold)}
${txt(410, 268, 12, 'host RNA Pol', bold)}
<g class="fig-accent">
${txt(235, 150, 13, 'viral RdRp', bold)}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mb-vir-r')}</defs>
<line x1="400" y1="97" x2="400" y2="129" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-vir-r)"/>
<line x1="400" y1="169" x2="400" y2="209" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-vir-r)"/>
${txt(410, 110, 12, 'reverse', bold)}
${txt(410, 124, 12, 'transcriptase', bold)}
${txt(410, 194, 12, 'integrase', bold)}
</g>
<g class="fig-muted">
${txt(60, 167, 12, '(host’s; herpes')}
${txt(60, 181, 12, 'brings its own)')}
${txt(235, 167, 12, 'RNA-dependent RNA Pol')}
${txt(235, 183, 12, '(the host has none)')}
${ctext(105, 350, 14, 'herpes · adenovirus')}${ctext(280, 350, 14, 'influenza · Ebola')}${ctext(455, 350, 14, 'HIV')}
${ctext(280, 425, 13, 'lytic: replicate and burst · lysogenic: integrate as a prophage and wait')}
</g>
${ctext(280, 395, 14, 'RT has no 3′→5′ proofreading → HIV mutates fast → combination therapy', bold)}
</svg>`

export const mcatMolecularBiologyFigures: DeckFigurePlacement[] = [
  {
    at: 'Repair After Replication',
    mode: 'lead',
    figure: {
      svg: accuracySvg,
      alt:
        'Three boxes drawn as a rising staircase, each step linked to the next by a ×100 arrow. Step 1, base selection: Pol III matches each new base. Step 2, proofreading: the 3′→5′ exonuclease clips errors. Step 3, mismatch repair: the new-strand mismatch is cut out; a note says this is defective in Lynch syndrome. A bracket under steps 1 and 2 reads during synthesis, the polymerase itself; a bracket under step 3 reads after replication (MMR). Red error rates under the steps: about 1 error in 10^5, 1 in 10^7, and 1 in 10^9 to 10^10.',
      caption: 'Each layer catches most of what the one before it missed: base selection, then proofreading, then mismatch repair — roughly 100× better at every step.',
    },
    blocks: [
      '- Base selection → 3′→5′ proofreading → mismatch repair: each layer ≈ 100× more accurate',
      '- Proofreading works while the polymerase runs; mismatch repair follows the fork and fixes the NEW strand',
    ],
  },
  {
    at: 'The Central Dogma',
    mode: 'lead',
    figure: {
      svg: dogmaSvg,
      alt:
        'Three boxes in a row: DNA (nucleus), RNA (nucleus to cytoplasm) and Protein (ribosome, cytoplasm). A looping arrow above DNA is labelled Replication. A Transcription arrow runs DNA to RNA with notes: template read 3′→5′, RNA made 5′→3′, no primer needed. A Translation arrow runs RNA to Protein with notes: mRNA read 5′→3′, protein grows N to C, on the ribosome. A red dashed arrow loops from RNA back to DNA labelled Reverse transcription, the exception: retroviruses (HIV), telomerase, cDNA for RT-PCR. Footnotes: nothing starts at Protein — sequence information never flows back from protein; prions pass on a fold, not a sequence.',
      caption: 'The central dogma as information flow: DNA copies itself, DNA → RNA → protein, and only reverse transcriptase runs the RNA → DNA arrow backwards.',
    },
    blocks: [
      '- DNA → RNA → protein; replication copies DNA; only reverse transcriptase runs RNA → DNA',
      '- Every polymerase reads its template 3′→5′ and builds 5′→3′; the ribosome reads mRNA 5′→3′, protein N → C',
    ],
  },
  {
    at: 'RNA Polymerase',
    mode: 'lead',
    figure: {
      svg: strandSvg,
      alt:
        'Three rows of nine letters. Coding strand, 5′ to 3′: A T G C G A T T C, noted as equal to the mRNA with T for U. Template strand, 3′ to 5′: T A C G C T A A G, joined to the coding strand by dashed hydrogen-bond lines and noted as read 3′→5′ by RNA Pol. A blue arrow under the template points right: RNA Pol moves this way, reading the template 3′→5′ and building RNA 5′→3′. Blue mRNA row, 5′ to 3′: A U G C G A U U C with each U in red, noted as growing 5′→3′; brackets mark the three codons, the first labelled AUG = start (Met). Footer: mRNA = the coding strand with U in place of T; antiparallel and complementary to the template; no primer; little proofreading because mRNA is temporary.',
      caption: 'The cheat picture for every "which strand" question: the mRNA copies the coding strand (U for T) and pairs antiparallel with the template that RNA Pol actually reads.',
    },
    blocks: [
      '- mRNA matches the CODING strand (U for T) and is complementary, antiparallel, to the TEMPLATE strand',
      '- RNA Pol reads the template 3′→5′ and builds RNA 5′→3′ — no primer, little proofreading',
    ],
  },
  {
    at: 'Prokaryotic vs. Eukaryotic Transcription',
    mode: 'replace-table',
    figure: {
      svg: cellsSvg,
      alt:
        'Two cells side by side. Prokaryote: no nucleus; one RNA Pol sits on the DNA and the blue mRNA hanging from it already carries a ribosome, labelled translation starts while transcription continues; notes: one RNA Pol with a sigma factor finding the promoter, no cap, tail or splicing, mRNA used as it is made. Eukaryote: a dashed nucleus holds the DNA with Pol II on it (Pol I makes rRNA, Pol III tRNA); a blue arrow leads to a box cap · poly-A tail · splice, then through the nuclear pore to a ribosome in the cytoplasm; notes: TATA box at −25, transcription factors and Mediator; processed, then exported; translation only in the cytoplasm.',
      caption: 'Same chemistry, different geography: a bacterium translates the transcript as it is written; a eukaryote caps, tails, splices and exports it first.',
    },
    blocks: [
      '- **Prokaryote:** one RNA Pol (σ factor finds the promoter), no processing, transcription and translation coupled',
      '- **Eukaryote:** Pol I rRNA · Pol II mRNA · Pol III tRNA; TATA box (−25) + general TFs + Mediator',
      '- Eukaryotic mRNA is capped, tailed and spliced, then exported through the nuclear pore before translation',
    ],
  },
  {
    at: 'The Genetic Code',
    mode: 'lead',
    figure: {
      svg: codonSvg,
      alt:
        'Left: three columns of the four bases A, C, G, U labelled 1st, 2nd and 3rd (wobble, in red), with × signs between and = 64. Below, a bar split into a long blue part, 61 codons → 20 amino acids (AUG = start, Met), and a thin red part, 3 stop codons UAA, UAG, UGA; a note says the code is nearly universal. Right, Degenerate: the four codons GCU, GCC, GCA, GCG, with the third base in red, all arrow into one box, Ala — several codons → one amino acid; the wobble base allows G–U pairing, which is where silent mutations hide. Not ambiguous: AUG, the start codon, arrows to one box, Met — one codon → exactly one amino acid.',
      caption: '4 × 4 × 4 = 64 three-letter words for 20 amino acids and stop: several codons can mean one amino acid (mostly differing at the wobble base), but no codon means two.',
    },
    blocks: [
      '- 4³ = 64 codons: 61 code for amino acids (AUG = start, Met), 3 are stop (UAA, UAG, UGA)',
      '- Degenerate (several codons → one amino acid, mostly at the 3rd/wobble base) but never ambiguous',
    ],
  },
  {
    at: 'Eukaryotic Gene Regulation',
    mode: 'replace-table',
    figure: {
      svg: ladderSvg,
      alt:
        'A vertical ladder of five boxes joined by downward arrows, each with its control written beside it. DNA and chromatin (epigenetic): CpG methylation silences, histone acetylation opens. Transcription (transcriptional): transcription factors bind enhancers or silencers, Mediator. pre-mRNA → mRNA (post-transcriptional): alternative splicing, mRNA stability, miRNA silencing. Translation (translational): initiation factors; stored mRNA translated on a signal. Protein (post-translational): phosphorylation; ubiquitin → proteasome; proteolytic cleavage. Footer: the same genome is in every cell; regulation at each level makes a neuron differ from a hepatocyte.',
      caption: 'Gene expression is a ladder, and a cell can put its hand on any rung — from chromatin packing down to destroying the finished protein.',
    },
    blocks: [
      '- **Epigenetic** (CpG methylation, histone marks) — long-term: X-inactivation, imprinting',
      '- **Transcriptional** (TFs, enhancers, silencers, Mediator) — on/off: steroid hormone receptors',
      '- **Post-transcriptional** (splicing, stability, miRNA) and **translational** (initiation factors)',
      '- **Post-translational** (phosphorylation, ubiquitin → proteasome): p53 stabilized, cyclins degraded',
    ],
  },
  {
    at: 'microRNA (miRNA) and siRNA',
    mode: 'lead',
    figure: {
      svg: rnaiSvg,
      alt:
        'Two input boxes, miRNA (endogenous, about 22 nt) and siRNA (exogenous or synthetic), both arrow into a blue silencing complex that sits on the 3′ UTR of an mRNA drawn below as a 5′ cap dot, a coding-sequence box, a 3′ UTR line (the target site) and a poly-A tail; dashed ticks show base pairing. Two outcomes to the right: blue, partial complementarity → translation repressed; red, extensive complementarity → mRNA cleaved and degraded. Footer: both routes load the same complex — the small RNA is the address, the protein does the silencing.',
      caption: 'RNA interference: a ~22-nt guide carries a protein complex to a complementary 3′ UTR; a loose match parks the ribosome, a tight match destroys the message.',
    },
    blocks: [
      '- miRNA (our own, ~22 nt) or siRNA (added) loads a silencing complex that pairs with a target 3′ UTR',
      '- Partial match → translation blocked; extensive match → the mRNA is cut and degraded (RNAi)',
    ],
  },
  {
    at: 'Types of Point Mutations',
    mode: 'replace-table',
    figure: {
      svg: mutationSvg,
      alt:
        'Four rows. Silent: GCU → GCC (the changed C in red), Ala → Ala, no change, often the 3rd base. Missense: GAG → GUG, Glu → Val in blue, sickle cell — charged to nonpolar. Nonsense: UAC → UAA, Tyr → STOP in red, truncated protein. Frameshift: the strip AUG GAG AAA GGC loses one G (red) and becomes AUG AGA AAG GC…, the last three codons red — every downstream codon changes, usually nonfunctional with an early stop. Footer: insertions or deletions in multiples of 3 add or remove amino acids but keep the frame; transitions (A↔G, C↔T) are more common than transversions.',
      caption: 'Reading the damage off the codon: same amino acid, a different one, a stop — or, after an indel that is not a multiple of three, a different everything downstream.',
    },
    blocks: [
      '- **Silent:** new codon, same amino acid (often the 3rd base) — no effect',
      '- **Missense:** different amino acid — conservative (Leu → Ile) vs non-conservative (Glu → Val, sickle cell)',
      '- **Nonsense:** premature stop (UAA, UAG, UGA) — truncated protein',
      '- **Frameshift:** insertion or deletion not a multiple of 3 — every downstream codon changes',
    ],
  },
  {
    at: 'Virus Structure',
    mode: 'replace-table',
    figure: {
      svg: virusSvg,
      alt:
        'Three columns, each ending in an mRNA → protein box. DNA virus: dsDNA (usually), copied by DNA Pol (the host’s; herpes brings its own) and transcribed by host RNA Pol; examples herpes, adenovirus. RNA virus: ssRNA or dsRNA, copied and transcribed by a viral RdRp, RNA-dependent RNA Pol, which the host has none of; examples influenza, Ebola. Retrovirus: ssRNA → red reverse transcriptase → dsDNA → red integrase → provirus in host DNA → host RNA Pol → mRNA; example HIV. Footers: RT has no 3′→5′ proofreading so HIV mutates fast, hence combination therapy; lytic means replicate and burst, lysogenic means integrate as a prophage and wait.',
      caption: 'Three routes to the same ribosome: DNA viruses borrow the host’s machinery, RNA viruses bring their own RNA polymerase, retroviruses write themselves into the genome first.',
    },
    blocks: [
      '- **DNA viruses** (herpes, adenovirus): dsDNA copied by DNA Pol — the host’s, or their own (herpes)',
      '- **RNA viruses** (influenza, Ebola): bring an RNA-dependent RNA Pol — the host has none',
      '- **Retroviruses** (HIV): ssRNA → reverse transcriptase → dsDNA → integrase → provirus; RT has no proofreading',
    ],
  },
]
