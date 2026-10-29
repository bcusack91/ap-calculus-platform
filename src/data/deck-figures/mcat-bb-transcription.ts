import type { DeckFigurePlacement } from './index'

/**
 * Transcription & RNA Processing (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing is ours, drawn from the concept: a transcription bubble whose
 * letters ARE the strands (the lesson's own 3'-TACGGATCT-5' example), two
 * polymerases side by side, a gene drawn as a map with a numbered axis, the
 * three processing steps as three rows inside a nucleus, splicing as
 * landmarks → lariat → joined exons, alternative splicing with the blots it
 * produces, the lac operon as a map plus a 2×2, the three eukaryotic layers
 * as a ladder, and the lesson's reporter-dissection puzzle as bars. No
 * textbook, prep-company or AAMC figure was copied. The only numbers drawn
 * are the ones the lesson states (–35/–10, TATA ~–25, ~200 A, ~20,000 genes,
 * 100 % / 5 % / 300 %). No structural formulas — bases are letters, molecules
 * are boxes and discs.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so every
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-tx-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 12) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 5}" font-size="${r + 3}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

/** A labelled rounded box (fill is a tint of the current colour). */
const BOX = (x: number, y: number, w: number, h: number, label: string, size = 15, op = 0.15, bold = true) =>
  `<rect class="fig-bg" x="${x}" y="${y}" width="${w}" height="${h}" rx="7"/>` +
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="2"/>` +
  `<text x="${x + w / 2}" y="${y + h / 2 + size * 0.36}" font-size="${size}" ${bold ? 'font-weight="700"' : ''} text-anchor="middle" fill="currentColor">${label}</text>`

/* ───────────────────────── 1 — The transcription bubble (lead, 1000×460) ───────────────────────── */

const bubXs = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => 365 + i * 36)
const LETTERS = (seq: string, y: number) =>
  seq
    .split('')
    .map((ch, i) => {
      const t = `<text x="${bubXs[i]}" y="${y}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">${ch}</text>`
      return ch === 'U' ? `<g class="fig-accent-2">${t}</g>` : t
    })
    .join('')
const bubbleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="40" y="42" font-size="22" font-weight="700" fill="currentColor">The transcription bubble</text>
<g class="fig-muted"><text x="310" y="42" font-size="17" fill="currentColor">RNA pairs with the TEMPLATE, so it reads like the CODING strand (U for T)</text></g>
<path d="M60 180 L300 180 C330 180, 332 130, 350 130" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M668 130 C686 130, 690 180, 720 180 L940 180" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M60 200 L300 200 C330 200, 332 260, 350 260" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M668 260 C686 260, 690 200, 720 200 L940 200" fill="none" stroke="currentColor" stroke-width="3"/>
${LETTERS('ATGCCTAGA', 137)}
${LETTERS('TACGGATCT', 267)}
<text x="46" y="186" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">5′</text>
<text x="46" y="207" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">3′</text>
<text x="954" y="186" font-size="17" font-weight="700" fill="currentColor">3′</text>
<text x="954" y="207" font-size="17" font-weight="700" fill="currentColor">5′</text>
<text x="70" y="168" font-size="15" fill="currentColor">coding (sense) strand</text>
<text x="70" y="224" font-size="15" fill="currentColor">template (antisense) strand</text>
<g class="fig-muted">
<text x="70" y="245" font-size="14" fill="currentColor">DNA re-anneals behind the enzyme</text>
<text x="930" y="168" font-size="14" text-anchor="end" fill="currentColor">genes are written this way</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-tx-bub-b')}</defs>
<ellipse cx="600" cy="200" rx="125" ry="95" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/>
<text x="600" y="90" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">RNA polymerase</text>
<text x="600" y="311" font-size="14" text-anchor="middle" fill="currentColor">reads the template 3′→5′</text>
<line x1="330" y1="237" x2="665" y2="237" stroke="currentColor" stroke-width="3.5"/>
${LETTERS('AUGCCUAGA', 230)}
<text x="318" y="236" font-size="16" font-weight="700" text-anchor="end" fill="currentColor">5′</text>
<text x="676" y="236" font-size="16" font-weight="700" fill="currentColor">3′</text>
${bubXs.map((x) => `<line x1="${x}" y1="242" x2="${x}" y2="251" stroke="currentColor" stroke-width="2" stroke-dasharray="2 2"/>`).join('')}
<line x1="540" y1="320" x2="700" y2="320" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tx-bub-b)"/>
<text x="712" y="325" font-size="15" fill="currentColor">pol moves; RNA 3′ end grows</text>
</g>
<text x="60" y="352" font-size="19" font-weight="700" fill="currentColor">mRNA = coding strand with U for T</text>
<text x="60" y="378" font-size="16" fill="currentColor">mRNA = reverse complement of the template</text>
<text x="940" y="352" font-size="17" text-anchor="end" fill="currentColor">template is per GENE, not per chromosome</text>
<g class="fig-muted"><text x="940" y="378" font-size="15" text-anchor="end" fill="currentColor">a neighbouring gene may read the other strand</text></g>
<text x="500" y="428" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Label the given strand TEMPLATE or CODING before touching a single base</text>
</svg>`

/* ───────────────────────── 2 — RNA polymerase vs DNA polymerase (replace-table, 560×440) ───────────────────────── */

const ROW2 = (y: number, name: string, left: string, right: string) =>
  `<g class="fig-muted"><text x="280" y="${y}" font-size="13" text-anchor="middle" fill="currentColor">${name}</text></g>` +
  `<text x="140" y="${y}" font-size="14" text-anchor="middle" fill="currentColor">${left}</text>` +
  `<text x="420" y="${y}" font-size="14" text-anchor="middle" fill="currentColor">${right}</text>`
const polVsPolSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<text x="140" y="30" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">RNA polymerase</text>
<text x="420" y="30" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">DNA polymerase</text>
<g class="fig-muted"><line x1="280" y1="44" x2="280" y2="376" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<g class="fig-muted"><rect x="30" y="94" width="40" height="30" rx="6" fill="currentColor" fill-opacity="0.18"/><text x="50" y="146" font-size="12" text-anchor="middle" fill="currentColor">promoter</text></g>
<path d="M20 100 L70 100 C90 100, 92 72, 110 72 L170 72 C188 72, 190 100, 210 100 L260 100" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M20 118 L70 118 C90 118, 92 146, 110 146 L170 146 C188 146, 190 118, 210 118 L260 118" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<ellipse cx="168" cy="109" rx="38" ry="32" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="112" y1="121" x2="166" y2="121" stroke="currentColor" stroke-width="3.5"/>
<text x="104" y="126" font-size="12" font-weight="700" text-anchor="end" fill="currentColor">5′</text>
</g>
<g class="fig-accent-2"><text x="140" y="188" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">no primer — starts de novo</text></g>
<g class="fig-muted"><text x="140" y="207" font-size="13" text-anchor="middle" fill="currentColor">RNA peels off; the DNA re-anneals</text></g>
<line x1="300" y1="88" x2="540" y2="88" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2"><line x1="310" y1="110" x2="360" y2="110" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><text x="335" y="134" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">RNA primer</text></g>
<g class="fig-accent">
<defs>${ARROW('arr-tx-pol-b')}</defs>
<line x1="360" y1="110" x2="462" y2="110" stroke="currentColor" stroke-width="4" marker-end="url(#arr-tx-pol-b)"/>
<ellipse cx="472" cy="99" rx="38" ry="32" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
</g>
<g class="fig-accent-2"><text x="420" y="188" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">needs a primer with a 3′-OH</text></g>
<g class="fig-muted"><text x="420" y="207" font-size="13" text-anchor="middle" fill="currentColor">3′→5′ exonuclease checks each base</text></g>
<text x="280" y="248" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">BOTH build 5′→3′ and read the template 3′→5′</text>
${ROW2(284, 'primer', 'NO — de novo', 'YES')}
${ROW2(310, 'proofreading', 'minimal', '3′→5′ exonuclease')}
${ROW2(336, 'product', 'single-stranded RNA', 'duplex DNA')}
${ROW2(362, 'a mistake is', 'disposable', 'forever')}
<g class="fig-muted">
<text x="280" y="404" font-size="13" text-anchor="middle" fill="currentColor">a flawed transcript is degraded and replaced; a mutation is inherited</text>
<text x="280" y="424" font-size="13" text-anchor="middle" fill="currentColor">primase is an RNA polymerase — that is how replication gets its start</text>
</g>
</svg>`

/* ───────────────────────── 3 — The gene as a map + the three eukaryotic polymerases (lead, 1000×460) ───────────────────────── */

const promoterSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-tx-pro')}</defs>
<text x="40" y="60" font-size="19" font-weight="700" fill="currentColor">Prokaryote: one polymerase + a sigma factor</text>
<line x1="60" y1="130" x2="640" y2="130" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<ellipse cx="235" cy="112" rx="72" ry="38" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/>
<text x="232" y="98" font-size="13" text-anchor="middle" fill="currentColor">RNA polymerase</text>
</g>
<g class="fig-accent-2">
<circle cx="300" cy="84" r="12" fill="currentColor"/><text x="300" y="89" font-size="14" font-weight="700" text-anchor="middle" class="fig-bg">σ</text>
<text x="318" y="78" font-size="13" fill="currentColor">σ reads –35 and –10, then lets go</text>
</g>
${BOX(110, 116, 50, 28, '–35', 14, 0.15)}
${BOX(200, 116, 70, 28, '–10', 14, 0.15)}
<g class="fig-muted"><text x="235" y="166" font-size="13" text-anchor="middle" fill="currentColor">TATAAT · Pribnow box</text></g>
<path d="M330 130 L330 106 L372 106" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tx-pro)"/>
<text x="348" y="98" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">+1</text>
${BOX(350, 116, 210, 28, 'gene — transcribed', 14, 0.1, false)}
<path d="M590 130 C586 94, 622 94, 618 130" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><text x="604" y="166" font-size="13" text-anchor="middle" fill="currentColor">terminator</text></g>
<g class="fig-muted">
<text x="205" y="192" font-size="14" text-anchor="middle" fill="currentColor">upstream = negative numbers, NOT transcribed</text>
<text x="455" y="192" font-size="14" text-anchor="middle" fill="currentColor">from +1 onward → mRNA</text>
</g>
<text x="40" y="228" font-size="19" font-weight="700" fill="currentColor">Eukaryote: Pol II needs general transcription factors</text>
<line x1="60" y1="310" x2="640" y2="310" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">${BOX(70, 296, 60, 28, 'enhancer', 12, 0.15)}</g>
<g class="fig-muted">
<defs>${ARROW('arr-tx-pro-m')}</defs>
<path d="M100 296 C100 256, 230 256, 245 264" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arr-tx-pro-m)"/>
<text x="165" y="250" font-size="12" text-anchor="middle" fill="currentColor">activators loop in (Part 3)</text>
<text x="100" y="342" font-size="13" text-anchor="middle" fill="currentColor">far away, either way</text>
<text x="260" y="342" font-size="13" text-anchor="middle" fill="currentColor">~–25</text>
</g>
${BOX(230, 296, 60, 28, 'TATA', 14, 0.15)}
<g class="fig-accent">
${BOX(222, 262, 76, 26, 'GTFs', 14, 0.18)}
<ellipse cx="420" cy="272" rx="60" ry="24" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="420" y="278" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Pol II</text>
</g>
<path d="M325 310 L325 290 L352 290" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tx-pro)"/>
<text x="318" y="286" font-size="14" font-weight="700" text-anchor="end" fill="currentColor">+1</text>
${BOX(345, 296, 215, 28, 'exons + introns → pre-mRNA', 14, 0.1, false)}
<g class="fig-muted"><text x="350" y="374" font-size="14" text-anchor="middle" fill="currentColor">promoter mutation: LESS of a NORMAL protein, this gene only (cis)</text></g>
<g class="fig-muted"><line x1="668" y1="40" x2="668" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<text x="836" y="60" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Three eukaryotic polymerases</text>
<g class="fig-muted"><rect x="700" y="84" width="272" height="86" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/></g>
<text x="712" y="134" font-size="20" font-weight="700" fill="currentColor">Pol I</text>
<text x="786" y="122" font-size="15" fill="currentColor">rRNA (the large ones)</text>
<g class="fig-muted"><text x="786" y="146" font-size="14" fill="currentColor">works in the nucleolus</text></g>
<g class="fig-accent"><rect x="700" y="184" width="272" height="86" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/></g>
<text x="712" y="234" font-size="20" font-weight="700" fill="currentColor">Pol II</text>
<text x="786" y="214" font-size="15" fill="currentColor">mRNA + regulatory RNAs</text>
<g class="fig-muted"><text x="786" y="236" font-size="13" fill="currentColor">what mRNA questions mean</text></g>
<g class="fig-accent-2"><text x="786" y="258" font-size="13" font-weight="700" fill="currentColor">killed by α-amanitin</text></g>
<g class="fig-muted"><rect x="700" y="284" width="272" height="86" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/></g>
<text x="712" y="334" font-size="20" font-weight="700" fill="currentColor">Pol III</text>
<text x="786" y="334" font-size="15" fill="currentColor">tRNA, 5S rRNA</text>
<g class="fig-muted">
<text x="836" y="404" font-size="14" text-anchor="middle" fill="currentColor">bacteria: ONE polymerase, σ finds the promoter;</text>
<text x="836" y="426" font-size="14" text-anchor="middle" fill="currentColor">rifampin blocks it (selective toxicity)</text>
</g>
</svg>`

/* ───────────────────────── 4 — Three modifications inside the nucleus (lead, 1000×460) ───────────────────────── */

const EXON = (x: number, w: number, y: number, label = '') =>
  `<rect x="${x}" y="${y - 12}" width="${w}" height="24" rx="5" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>` +
  (label ? `<text x="${x + w / 2}" y="${y + 5}" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>` : '')
const INTRON = (x0: number, x1: number, y: number) => `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="currentColor" stroke-width="2.5"/>`
const POLYA = (x: number, y: number) => `<text x="${x}" y="${y + 6}" font-size="15" font-weight="700" fill="currentColor" letter-spacing="1">AAAAAAAAA</text>`
const CAPDISC = (cx: number, cy: number) => `<g class="fig-accent-2"><circle cx="${cx}" cy="${cy}" r="11" fill="currentColor" fill-opacity="0.9"/><text x="${cx}" y="${cy + 4}" font-size="11" font-weight="700" text-anchor="middle" class="fig-bg">G</text></g>`
const processingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="40" y="34" font-size="20" font-weight="700" fill="currentColor">Pre-mRNA → mRNA: three modifications, all before export</text>
<g class="fig-muted">
<path d="M300 52 H752 Q780 52 780 80 V300 M780 345 V374 Q780 402 752 402 H148 Q120 402 120 374 V80 Q120 52 148 52 H300" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/>
<text x="140" y="78" font-size="16" fill="currentColor">nucleus</text>
<text x="880" y="78" font-size="16" text-anchor="middle" fill="currentColor">cytoplasm</text>
<text x="800" y="352" font-size="12" fill="currentColor">pore</text>
</g>
<text x="150" y="106" font-size="15" font-weight="700" fill="currentColor">pre-mRNA (hnRNA), as transcribed</text>
<g class="fig-accent">${EXON(165, 80, 130, 'exon')}${EXON(345, 100, 130, 'exon')}${EXON(525, 90, 130, 'exon')}</g>
${INTRON(245, 345, 130)}${INTRON(445, 525, 130)}
<g class="fig-muted"><line x1="615" y1="130" x2="700" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/>
<text x="295" y="156" font-size="12" text-anchor="middle" fill="currentColor">intron</text>
<text x="485" y="156" font-size="12" text-anchor="middle" fill="currentColor">intron</text>
</g>
<text x="150" y="206" font-size="15" font-weight="700" fill="currentColor">① 5′ cap</text>
<g class="fig-accent"><text x="690" y="206" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">② cleave, then poly-A polymerase</text></g>
${CAPDISC(150, 230)}
<line x1="161" y1="230" x2="165" y2="230" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">${EXON(165, 80, 230)}${EXON(345, 100, 230)}${EXON(525, 90, 230)}</g>
${INTRON(245, 345, 230)}${INTRON(445, 525, 230)}
<g class="fig-accent-2"><line x1="622" y1="212" x2="622" y2="248" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3"/></g>
<g class="fig-accent">${POLYA(632, 230)}</g>
<g class="fig-accent-2"><text x="150" y="264" font-size="13" fill="currentColor">m⁷G added backwards: 5′→5′ triphosphate link</text></g>
<g class="fig-accent"><text x="690" y="264" font-size="13" text-anchor="middle" fill="currentColor">~200 A, no template</text></g>
<text x="150" y="306" font-size="15" font-weight="700" fill="currentColor">③ splice: introns out, exons joined</text>
${CAPDISC(150, 330)}
<line x1="161" y1="330" x2="165" y2="330" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<defs>${ARROW('arr-tx-prc-b')}</defs>
${EXON(165, 80, 330)}${EXON(245, 100, 330)}${EXON(345, 90, 330)}
${POLYA(442, 330)}
<line x1="580" y1="330" x2="836" y2="330" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-tx-prc-b)"/>
<text x="708" y="318" font-size="13" text-anchor="middle" fill="currentColor">export</text>
</g>
<text x="330" y="364" font-size="13" text-anchor="middle" fill="currentColor">mature mRNA: cap · exons only · tail</text>
<g class="fig-muted">
<path d="M500 384 a7 7 0 1 1 10 6 l10 8" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M538 384 a7 7 0 1 1 10 6 l10 8" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="575" y="394" font-size="13" fill="currentColor">introns → lariats, degraded</text>
</g>
<text x="880" y="296" font-size="14" text-anchor="middle" fill="currentColor">cap = shield from 5′ exonucleases</text>
<text x="880" y="316" font-size="14" text-anchor="middle" fill="currentColor">+ docking site for the ribosome</text>
<text x="880" y="372" font-size="14" text-anchor="middle" fill="currentColor">tail length = a decay timer</text>
<g class="fig-muted"><text x="880" y="392" font-size="13" text-anchor="middle" fill="currentColor">+ export, translation efficiency</text></g>
<text x="500" y="438" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">all three happen in the nucleus as the transcript is made — only finished mRNA passes the pore</text>
</svg>`

/* ───────────────────────── 5 — Splicing: landmarks → lariat → joined exons (lead, 1000×460) ───────────────────────── */

const BIGEXON = (x: number, w: number, y: number, label: string) =>
  `<rect x="${x}" y="${y - 14}" width="${w}" height="28" rx="7" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>` +
  `<text x="${x + w / 2}" y="${y + 6}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`
const splicingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent">${BIGEXON(120, 180, 92, 'exon 1')}${BIGEXON(700, 180, 92, 'exon 2')}</g>
<line x1="300" y1="92" x2="700" y2="92" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<text x="318" y="76" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">GU</text>
<text x="684" y="76" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">AG</text>
<line x1="600" y1="92" x2="600" y2="112" stroke="currentColor" stroke-width="2.5"/>
<text x="600" y="130" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">A</text>
</g>
<g class="fig-muted">
<text x="318" y="56" font-size="13" text-anchor="middle" fill="currentColor">5′ splice (donor) site</text>
<text x="684" y="56" font-size="13" text-anchor="middle" fill="currentColor">3′ splice (acceptor) site</text>
<text x="600" y="148" font-size="13" text-anchor="middle" fill="currentColor">branch point</text>
<text x="420" y="130" font-size="15" text-anchor="middle" fill="currentColor">intron: three vulnerable positions</text>
</g>
${NUM(70, 250, '1')}
<g class="fig-muted"><text x="70" y="282" font-size="12" text-anchor="middle" fill="currentColor">lariat forms</text></g>
<g class="fig-accent">
<ellipse cx="520" cy="240" rx="178" ry="80" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/>
<text x="700" y="300" font-size="14" font-weight="700" fill="currentColor">spliceosome = snRNPs</text>
</g>
<g class="fig-muted"><text x="700" y="317" font-size="13" fill="currentColor">snRNA + protein — RNA does the catalysis</text></g>
<g class="fig-accent">${BIGEXON(120, 180, 250, 'exon 1')}${BIGEXON(700, 180, 250, 'exon 2')}</g>
<path d="M604 250 C604 192, 492 172, 506 216 C516 246, 562 258, 604 250" fill="none" stroke="currentColor" stroke-width="3"/>
<line x1="604" y1="250" x2="700" y2="250" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<circle cx="604" cy="250" r="6" fill="currentColor"/>
<text x="482" y="212" font-size="14" font-weight="700" text-anchor="end" fill="currentColor">GU joined to A</text>
<text x="482" y="229" font-size="13" text-anchor="end" fill="currentColor">2′–5′ bond (loop)</text>
<text x="272" y="286" font-size="13" font-weight="700" text-anchor="end" fill="currentColor">free 3′-OH</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-tx-spl-b')}</defs>
<path d="M300 268 C380 322, 620 322, 694 268" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tx-spl-b)"/>
<text x="500" y="344" font-size="15" text-anchor="middle" fill="currentColor">exon 1's 3′-OH attacks the AG → exons join, lariat released</text>
</g>
${NUM(70, 392, '2')}
<g class="fig-muted"><text x="70" y="424" font-size="12" text-anchor="middle" fill="currentColor">exons join</text></g>
<g class="fig-accent">${BIGEXON(300, 180, 392, 'exon 1')}${BIGEXON(480, 180, 392, 'exon 2')}</g>
<line x1="480" y1="374" x2="480" y2="410" stroke="currentColor" stroke-width="3"/>
<text x="480" y="434" font-size="15" text-anchor="middle" fill="currentColor">spliced mRNA (reading frame intact)</text>
<g class="fig-muted">
<circle cx="800" cy="386" r="16" fill="none" stroke="currentColor" stroke-width="3"/>
<line x1="812" y1="397" x2="842" y2="414" stroke="currentColor" stroke-width="3"/>
<text x="800" y="440" font-size="13" text-anchor="middle" fill="currentColor">lariat intron → degraded</text>
</g>
</svg>`

/* ───────────────────────── 6 — Alternative splicing and the blots it produces (lead, 1000×460) ───────────────────────── */

const altSplicingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="320" y="44" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">one gene, one pre-mRNA</text>
<g class="fig-accent">${EXON(100, 80, 84, '1')}${EXON(220, 80, 84, '2')}${EXON(340, 80, 84, '3')}${EXON(460, 80, 84, '4')}</g>
${INTRON(180, 220, 84)}${INTRON(300, 340, 84)}${INTRON(420, 460, 84)}
<g class="fig-muted">
<defs>${ARROW('arr-tx-alt-m')}</defs>
<text x="320" y="124" font-size="14" text-anchor="middle" fill="currentColor">tissue-specific splicing factors decide which exons stay</text>
<line x1="240" y1="134" x2="212" y2="166" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tx-alt-m)"/>
<line x1="400" y1="134" x2="520" y2="166" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tx-alt-m)"/>
<line x1="220" y1="232" x2="220" y2="278" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tx-alt-m)"/>
<line x1="580" y1="232" x2="580" y2="278" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-tx-alt-m)"/>
</g>
<g class="fig-accent">
<text x="220" y="184" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">muscle: exon 3 included</text>
${EXON(60, 80, 212, '1')}${EXON(140, 80, 212, '2')}${EXON(220, 80, 212, '3')}${EXON(300, 80, 212, '4')}
</g>
<g class="fig-accent-2">
<text x="580" y="184" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">liver: exon 3 skipped</text>
</g>
<g class="fig-accent">${EXON(460, 80, 212, '1')}${EXON(540, 80, 212, '2')}${EXON(620, 80, 212, '4')}</g>
<g class="fig-accent-2"><text x="700" y="250" font-size="13" text-anchor="end" fill="currentColor">exon 3 removed along with the introns</text></g>
<rect x="70" y="288" width="300" height="30" rx="15" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
<text x="220" y="309" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">isoform A (longer protein)</text>
<rect x="480" y="288" width="200" height="30" rx="15" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
<text x="580" y="309" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">isoform B (shorter)</text>
<g class="fig-muted"><rect x="790" y="62" width="170" height="130" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/></g>
<text x="875" y="50" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">northern blot (RNA)</text>
<text x="832" y="82" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">muscle</text>
<text x="918" y="82" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">liver</text>
<rect x="812" y="104" width="40" height="8" rx="2" fill="currentColor"/>
<rect x="898" y="142" width="40" height="8" rx="2" fill="currentColor"/>
<g class="fig-muted"><text x="875" y="182" font-size="12" text-anchor="middle" fill="currentColor">longer RNA runs higher</text></g>
<g class="fig-muted"><rect x="790" y="232" width="170" height="130" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/></g>
<text x="875" y="222" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">western blot (protein)</text>
<text x="832" y="252" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">muscle</text>
<text x="918" y="252" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">liver</text>
<rect x="812" y="274" width="40" height="8" rx="2" fill="currentColor"/>
<rect x="898" y="312" width="40" height="8" rx="2" fill="currentColor"/>
<g class="fig-muted"><text x="875" y="352" font-size="12" text-anchor="middle" fill="currentColor">one locus, two band sizes</text></g>
<text x="500" y="408" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">same DNA in both tissues — the proteome is bigger than the genome</text>
<g class="fig-muted"><text x="500" y="434" font-size="14" text-anchor="middle" fill="currentColor">~20,000 human genes → far more proteins; one gene can give several mRNA sizes and several isoforms</text></g>
</svg>`

/* ───────────────────────── 7 — The lac operon: map + the glucose × lactose 2×2 (replace-table, 560×440) ───────────────────────── */

const LAC_CELL = (x0: number, y0: number, repressorBound: boolean, capActive: boolean, out: string, outClass: 'fig-accent' | 'fig-accent-2' | '') => {
  const yD = y0 + 46
  const capDisc = capActive
    ? `<g class="fig-accent"><circle cx="${x0 + 31}" cy="${y0 + 30}" r="8" fill="currentColor"/></g>`
    : `<g class="fig-muted"><circle cx="${x0 + 31}" cy="${y0 + 14}" r="8" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/></g>`
  const rep = repressorBound
    ? `<g class="fig-accent-2"><circle cx="${x0 + 94}" cy="${y0 + 30}" r="8" fill="currentColor"/></g>`
    : `<g class="fig-accent-2"><circle cx="${x0 + 94}" cy="${y0 + 12}" r="8" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2"/></g>`
  const outTxt = `<text x="${x0 + 95}" y="${y0 + 95}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">${out}</text>`
  const strong = out === 'STRONGLY ON'
  return (
    `<g class="fig-muted"><rect x="${x0}" y="${y0}" width="190" height="104" rx="10" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/></g>` +
    `<rect class="fig-bg" x="${x0 + 16}" y="${yD - 9}" width="154" height="18" rx="4"/>` +
    `<g class="fig-muted"><rect x="${x0 + 16}" y="${yD - 9}" width="30" height="18" rx="4" fill="currentColor" fill-opacity="0.25"/><rect x="${x0 + 50}" y="${yD - 9}" width="26" height="18" rx="4" fill="currentColor" fill-opacity="0.25"/></g>` +
    `<g class="fig-accent-2"><rect x="${x0 + 80}" y="${yD - 9}" width="28" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/></g>` +
    `<g class="fig-accent"><rect x="${x0 + 114}" y="${yD - 9}" width="56" height="18" rx="4" fill="currentColor" fill-opacity="${strong ? 0.5 : 0.1}" stroke="currentColor" stroke-width="1.5"/></g>` +
    `<line x1="${x0 + 12}" y1="${yD}" x2="${x0 + 16}" y2="${yD}" stroke="currentColor" stroke-width="2"/><line x1="${x0 + 46}" y1="${yD}" x2="${x0 + 50}" y2="${yD}" stroke="currentColor" stroke-width="2"/><line x1="${x0 + 76}" y1="${yD}" x2="${x0 + 80}" y2="${yD}" stroke="currentColor" stroke-width="2"/><line x1="${x0 + 108}" y1="${yD}" x2="${x0 + 114}" y2="${yD}" stroke="currentColor" stroke-width="2"/><line x1="${x0 + 170}" y1="${yD}" x2="${x0 + 178}" y2="${yD}" stroke="currentColor" stroke-width="2"/>` +
    capDisc +
    rep +
    `<text x="${x0 + 12}" y="${yD + 26}" font-size="12" fill="currentColor">CAP: ${capActive ? 'active' : 'idle'}</text>` +
    `<text x="${x0 + 178}" y="${yD + 26}" font-size="12" text-anchor="end" fill="currentColor">repressor: ${repressorBound ? 'on O' : 'off'}</text>` +
    (outClass ? `<g class="${outClass}">${outTxt}</g>` : outTxt)
  )
}
const lacSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<line x1="16" y1="58" x2="544" y2="58" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">${BOX(30, 44, 66, 28, 'CAP site', 12, 0.15)}</g>
${BOX(100, 44, 50, 28, 'P', 14, 0.12)}
<g class="fig-accent-2">${BOX(154, 44, 46, 28, 'O', 14, 0.18)}</g>
${BOX(206, 44, 104, 28, 'lacZ', 13, 0.1)}${BOX(314, 44, 96, 28, 'lacY', 13, 0.1)}${BOX(414, 44, 106, 28, 'lacA', 13, 0.1)}
<g class="fig-accent">
<defs>${ARROW('arr-tx-lac-b')}</defs>
<line x1="206" y1="86" x2="518" y2="86" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tx-lac-b)"/>
<text x="363" y="106" font-size="13" text-anchor="middle" fill="currentColor">ONE polycistronic mRNA → three enzymes together</text>
</g>
<text x="215" y="138" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">lactose ABSENT</text>
<text x="415" y="138" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">lactose PRESENT</text>
<text x="14" y="194" font-size="14" font-weight="700" fill="currentColor">glucose</text>
<text x="14" y="212" font-size="14" font-weight="700" fill="currentColor">HIGH</text>
<text x="14" y="304" font-size="14" font-weight="700" fill="currentColor">glucose</text>
<text x="14" y="322" font-size="14" font-weight="700" fill="currentColor">LOW</text>
${LAC_CELL(120, 146, true, false, 'OFF', '')}
${LAC_CELL(320, 146, false, false, 'barely on', '')}
${LAC_CELL(120, 256, true, true, 'OFF — repressor wins', 'fig-accent-2')}
${LAC_CELL(320, 256, false, true, 'STRONGLY ON', 'fig-accent')}
<g class="fig-accent-2"><circle cx="30" cy="378" r="7" fill="currentColor"/></g>
<text x="44" y="383" font-size="12" fill="currentColor">LacI repressor on the operator — allolactose pulls it off (negative control)</text>
<g class="fig-accent"><circle cx="30" cy="400" r="7" fill="currentColor"/></g>
<text x="44" y="405" font-size="12" fill="currentColor">cAMP–CAP, active only when glucose is low — recruits polymerase (positive control)</text>
<g class="fig-muted"><text x="280" y="430" font-size="13" text-anchor="middle" fill="currentColor">an AND gate: burn lactose only when the better fuel is gone</text></g>
</svg>`

/* ───────────────────────── 8 — Eukaryotic regulation as three layers (lead, 1000×460) ───────────────────────── */

const eukLayersSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<line x1="40" y1="176" x2="960" y2="176" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="40" y1="318" x2="960" y2="318" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
</g>
${NUM(60, 105, '1', 14)}<text x="84" y="111" font-size="18" font-weight="700" fill="currentColor">Chromatin</text>
<g class="fig-muted"><text x="84" y="134" font-size="13" fill="currentColor">is the gene reachable?</text></g>
<line x1="300" y1="105" x2="520" y2="105" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
${[330, 400, 470].map((x) => `<circle cx="${x}" cy="105" r="14" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>`).join('')}
<text x="410" y="142" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">acetylated (HATs): loose, ON</text>
</g>
<g class="fig-accent-2">${[330, 400, 470].map((x) => `<text x="${x}" y="82" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">Ac</text>`).join('')}</g>
<g class="fig-muted"><text x="410" y="161" font-size="13" text-anchor="middle" fill="currentColor">Ac neutralises Lys⁺ → histones let go; HDACs undo it</text></g>
<line x1="660" y1="105" x2="900" y2="105" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted">${[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => `<circle cx="${676 + i * 26}" cy="105" r="12" fill="currentColor" fill-opacity="0.4" stroke="currentColor" stroke-width="2"/>`).join('')}</g>
<g class="fig-accent-2">
${[702, 754, 806, 858].map((x) => `<line x1="${x}" y1="117" x2="${x}" y2="126" stroke="currentColor" stroke-width="2"/><circle cx="${x}" cy="130" r="4.5" fill="currentColor"/>`).join('')}
<text x="780" y="152" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">CpG-methylated promoter: silenced</text>
</g>
<g class="fig-muted"><text x="780" y="170" font-size="13" text-anchor="middle" fill="currentColor">copied at each division = epigenetic (imprinting, X-inactivation)</text></g>
${NUM(60, 247, '2', 14)}<text x="84" y="253" font-size="18" font-weight="700" fill="currentColor">Enhancers</text>
<g class="fig-muted"><text x="84" y="276" font-size="13" fill="currentColor">how much, from how far?</text></g>
<line x1="300" y1="262" x2="960" y2="262" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<defs>${ARROW('arr-tx-lay-b')}</defs>
${BOX(330, 248, 70, 28, 'enhancer', 12, 0.15)}
<path d="M365 230 C420 170, 700 170, 765 212" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#arr-tx-lay-b)"/>
<text x="565" y="222" font-size="14" text-anchor="middle" fill="currentColor">DNA loops: activators reach the mediator</text>
${BOX(720, 214, 90, 24, 'mediator', 12, 0.18)}
<ellipse cx="880" cy="262" rx="44" ry="20" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="880" y="267" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Pol II</text>
</g>
<g class="fig-accent-2"><circle cx="350" cy="236" r="8" fill="currentColor"/><circle cx="380" cy="236" r="8" fill="currentColor"/><text x="320" y="240" font-size="12" text-anchor="end" fill="currentColor">activators</text></g>
${BOX(760, 248, 70, 28, 'promoter', 12, 0.12, false)}
<g class="fig-muted"><text x="630" y="302" font-size="14" text-anchor="middle" fill="currentColor">still cis — but tens of kb away, either orientation, up- or downstream (the operator sits next door)</text></g>
${NUM(60, 389, '3', 14)}<text x="84" y="395" font-size="18" font-weight="700" fill="currentColor">Combinations</text>
<g class="fig-muted"><text x="84" y="418" font-size="13" fill="currentColor">which factors are present?</text></g>
<line x1="300" y1="404" x2="960" y2="404" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">${BOX(330, 372, 60, 26, 'TF a', 13, 0.2)}</g>
<g class="fig-accent-2">${BOX(400, 372, 60, 26, 'TF b', 13, 0.2)}</g>
${BOX(470, 372, 60, 26, 'TF c', 13, 0.2)}
<g class="fig-muted">${BOX(540, 372, 60, 26, 'TF d', 13, 0.3)}</g>
<g class="fig-muted"><path d="M330 364 L330 356 L600 356 L600 364" fill="none" stroke="currentColor" stroke-width="1.5"/></g>
<text x="465" y="348" font-size="14" text-anchor="middle" fill="currentColor">the promoter integrates many factors at once</text>
${BOX(700, 390, 70, 28, 'promoter', 12, 0.12, false)}
<g class="fig-accent">
<ellipse cx="840" cy="404" rx="44" ry="20" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="840" y="409" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Pol II</text>
<line x1="890" y1="404" x2="950" y2="404" stroke="currentColor" stroke-width="3" marker-end="url(#arr-tx-lay-b)"/>
<text x="905" y="438" font-size="13" text-anchor="middle" fill="currentColor">one monocistronic mRNA</text>
</g>
<text x="465" y="440" font-size="14" text-anchor="middle" fill="currentColor">same genome in every cell: tissue identity = the combination of factors present</text>
</svg>`

/* ───────────────────────── 9 — Reporter dissection as bars (after, 1000×460) ───────────────────────── */

const SEG = (x: number, y: number, label: string, cls: string, deleted = false) => {
  const r = deleted
    ? `<g class="fig-muted"><rect x="${x}" y="${y - 12}" width="50" height="24" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/></g><g class="fig-accent-2"><text x="${x + 25}" y="${y + 7}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">×</text></g>`
    : `<rect class="fig-bg" x="${x}" y="${y - 12}" width="50" height="24" rx="5"/><rect x="${x}" y="${y - 12}" width="50" height="24" rx="5" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="${x + 25}" y="${y + 5}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`
  return cls && !deleted ? `<g class="${cls}">${r}</g>` : r
}
const CONSTRUCT = (y: number, delA: boolean, delB: boolean, movedC: boolean) =>
  `<line x1="60" y1="${y}" x2="440" y2="${y}" stroke="currentColor" stroke-width="2.5"/>` +
  SEG(150, y, 'A', 'fig-accent', delA) +
  SEG(215, y, 'B', 'fig-accent-2', delB) +
  (movedC
    ? `<g class="fig-muted"><rect x="280" y="${y - 12}" width="50" height="24" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/></g>` +
      `<rect class="fig-bg" x="70" y="${y - 12}" width="50" height="24" rx="5"/><rect x="70" y="${y - 12}" width="50" height="24" rx="5" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="95" y="${y + 5}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Ↄ</text>` +
      `<g class="fig-muted"><text x="95" y="${y + 30}" font-size="12" text-anchor="middle" fill="currentColor">flipped, 2 kb away</text><path d="M126 ${y - 6} L134 ${y + 6} M134 ${y - 6} L142 ${y + 6}" fill="none" stroke="currentColor" stroke-width="1.5"/></g>`
    : SEG(280, y, 'C', '')) +
  `<rect class="fig-bg" x="345" y="${y - 12}" width="36" height="24" rx="5"/><g class="fig-muted"><rect x="345" y="${y - 12}" width="36" height="24" rx="5" fill="currentColor" fill-opacity="0.2"/><text x="363" y="${y + 5}" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">P</text></g>` +
  `<rect class="fig-bg" x="388" y="${y - 14}" width="54" height="28" rx="6"/><rect x="388" y="${y - 14}" width="54" height="28" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="415" y="${y + 5}" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">luc</text>`
const BAR = (y: number, pct: number, label: string, cls: string, note: string) => {
  const w = +(pct * 1.15).toFixed(1)
  return (
    `<g class="${cls}"><rect x="540" y="${y - 15}" width="${w}" height="30" rx="4" fill="currentColor" fill-opacity="0.55"/>` +
    `<text x="${540 + w + 10}" y="${y + 6}" font-size="16" font-weight="700" fill="currentColor">${label}</text></g>` +
    `<g class="fig-muted"><text x="540" y="${y + 36}" font-size="13" fill="currentColor">${note}</text></g>`
  )
}
const reporterSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="60" y="52" font-size="15" font-weight="700" fill="currentColor">candidate DNA fused to luciferase</text>
<text x="540" y="52" font-size="15" font-weight="700" fill="currentColor">light (% of the full construct)</text>
<g class="fig-muted">
<line x1="540" y1="64" x2="540" y2="376" stroke="currentColor" stroke-width="1.5"/>
${[100, 180, 260, 340].map((y) => `<line x1="655" y1="${y - 20}" x2="655" y2="${y + 20}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>`).join('')}
<text x="655" y="392" font-size="12" text-anchor="middle" fill="currentColor">100%</text>
</g>
${CONSTRUCT(100, false, false, false)}
${BAR(100, 100, '100%', 'fig-accent', 'full promoter region — the reference')}
${CONSTRUCT(180, true, false, false)}
${BAR(180, 5, '5%', 'fig-accent-2', 'activity DOWN → A carried an essential element (or the core promoter)')}
${CONSTRUCT(260, false, true, false)}
${BAR(260, 300, '300%', 'fig-accent-2', 'activity UP → B carried a silencer: a repressor’s brake came off')}
${CONSTRUCT(340, false, false, true)}
${BAR(340, 100, '~100%', 'fig-accent', 'unchanged when moved 2 kb or flipped → C is an enhancer')}
<text x="500" y="432" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">down = you removed an activator or the core promoter · up = you removed a silencer · indifferent to distance and orientation = enhancer</text>
</svg>`

export const mcatTranscriptionFigures: DeckFigurePlacement[] = [
  {
    at: 'The Two Strands Problem',
    mode: 'lead',
    figure: {
      svg: bubbleSvg,
      alt:
        'A DNA duplex drawn as two lines that open into a bubble in the middle. The top strand is the coding (sense) strand, 5 prime at the left and 3 prime at the right; inside the bubble its letters read A T G C C T A G A. The bottom strand is the template (antisense) strand, 3 prime at the left; its letters read T A C G G A T C T. A dashed blue RNA polymerase sits over the right half of the bubble. Inside the bubble a blue RNA strand is paired to the template by short dashed ticks; it reads 5 prime A U G C C U A G A 3 prime, with every U in red. The RNA therefore matches the coding strand letter for letter with U in place of T. A blue arrow shows the polymerase moving right as the RNA 3 prime end grows; the polymerase reads the template 3 prime to 5 prime, and the DNA re-anneals behind the enzyme. Notes: mRNA equals the coding strand with U for T and the reverse complement of the template; the template strand is defined per gene, not per chromosome, so a neighbouring gene may use the other strand; genes are written out as their coding strand. Bottom line: label the given strand TEMPLATE or CODING before touching a single base.',
      caption: 'The lesson’s own example: template 3′-TACGGATCT-5′ gives mRNA 5′-AUGCCUAGA-3′, the coding strand with U for T.',
    },
    blocks: [
      '- **Template** is read 3′→5′; RNA grows 5′→3′ and matches the **coding** strand with **U for T**',
      '- Template is per GENE, not per chromosome — annotate the given strand before any base arithmetic',
    ],
  },
  {
    at: 'RNA Polymerase vs DNA Polymerase',
    mode: 'replace-table',
    figure: {
      svg: polVsPolSvg,
      alt:
        'Two schematics side by side. Left, RNA polymerase: a duplex opens into a bubble downstream of a grey promoter box; a dashed blue enzyme sits on the bubble and a blue RNA strand begins inside it with no primer, starting de novo; the RNA peels off and the DNA re-anneals. Right, DNA polymerase: a template strand with a new strand beneath it that begins with a thick red RNA primer and continues as a blue extension into a dashed blue enzyme; it needs a primer with a 3 prime OH, and a 3 prime to 5 prime exonuclease checks each base. Shared statement: both build 5 prime to 3 prime and read the template 3 prime to 5 prime. Rows compare them: primer, no (de novo) versus yes; proofreading, minimal versus 3 prime to 5 prime exonuclease; product, single-stranded RNA versus duplex DNA; a mistake is disposable versus forever. Footer: a flawed transcript is degraded and replaced while a mutation is inherited, and primase is an RNA polymerase, which is how replication gets its start.',
      caption: 'Same direction rules, different stakes: no primer and little proofreading are fine when the product is disposable.',
    },
    blocks: [
      '- Both: synthesise **5′→3′**, read the template **3′→5′**',
      '- RNA pol: **no primer** (de novo), minimal proofreading, ssRNA — DNA re-anneals behind it',
      '- DNA pol: primer required, **3′→5′ exonuclease**, duplex product',
      '- A bad transcript is disposable; a mutation is forever — and primase is an RNA polymerase',
    ],
  },
  {
    at: 'Finding the Start: Promoters',
    mode: 'lead',
    figure: {
      svg: promoterSvg,
      alt:
        'Left, two gene maps drawn on a line with a numbered axis. Prokaryote: a dashed blue RNA polymerase sits over the promoter boxes at minus 35 and minus 10 (TATAAT, the Pribnow box); a red sigma subunit on the enzyme reads those two elements and then lets go. A bent arrow marks plus 1, the transcription start; the gene body is transcribed and ends at a hairpin terminator. Upstream positions have negative numbers and are not transcribed; from plus 1 onward becomes mRNA. Eukaryote: a TATA box at about minus 25 with blue general transcription factors bound on it and Pol II beside them, a plus 1 arrow, and a gene body of exons and introns giving pre-mRNA. A blue enhancer far upstream has a dashed arrow looping toward the factors, labelled activators loop in (Part 3). Note: a promoter mutation gives less of a normal protein, from this gene only (cis). Right, three stacked boxes: Pol I makes the large rRNAs in the nucleolus; Pol II, highlighted, makes mRNA and regulatory RNAs, the one every mRNA question means, and is killed by alpha-amanitin so mRNA dies first; Pol III makes tRNA and 5S rRNA. Footer: bacteria have one polymerase, sigma finds the promoter, and rifampin blocks it (selective toxicity).',
      caption: 'The gene as a map: the promoter sits upstream of +1 and is never transcribed; eukaryotes split the work across three polymerases.',
    },
    blocks: [
      '- Promoter = upstream, **not transcribed**: prokaryote **σ** reads –35/–10; eukaryote **GTFs** on the **TATA box** (~–25) recruit Pol II',
      '- **Pol I** rRNA (nucleolus) · **Pol II** mRNA (α-amanitin) · **Pol III** tRNA, 5S; rifampin hits the bacterial enzyme',
    ],
  },
  {
    at: 'Three Modifications, All Before Export',
    mode: 'lead',
    figure: {
      svg: processingSvg,
      alt:
        'A dashed nucleus with a pore on its right side, cytoplasm beyond. Three rows inside. Row 1, the pre-mRNA as transcribed: three blue exon boxes joined by thin intron lines, with a dashed tail past the last exon. Row 2: step 1, a red 7-methylguanosine cap disc on the 5 prime end, added backwards through a 5 prime to 5 prime triphosphate link; step 2, a red dashed cut after the last exon and a blue run of A letters, about 200 A added by poly-A polymerase with no template. Row 3: step 3, splicing; the exons are now joined edge to edge between the cap and the tail, labelled mature mRNA: cap, exons only, tail, and a blue export arrow carries it through the pore; two small loops below show the introns leaving as lariats to be degraded. In the cytoplasm: the cap shields the message from 5 prime exonucleases and is the docking site for the ribosome; tail length is a decay timer and also helps export and translation efficiency. Footer: all three happen in the nucleus as the transcript is made, and only finished mRNA passes the pore.',
      caption: 'Cap, tail, splice: three nuclear edits that turn a primary transcript into exportable mRNA.',
    },
    blocks: [
      '- **5′ cap** (m⁷G, 5′→5′ link: exonuclease shield + ribosome dock) · **poly-A tail** (~200 A, untemplated: stability timer)',
      '- **Splicing** joins exons; all three happen in the nucleus — only finished mRNA leaves',
    ],
  },
  {
    at: 'Splicing Mechanics',
    mode: 'lead',
    figure: {
      svg: splicingSvg,
      alt:
        'Three rows. Row 1, the landmarks: exon 1 and exon 2 as blue boxes with the intron as a line between them; red GU at the 5 prime splice (donor) site, red AG at the 3 prime splice (acceptor) site, and a red branch-point A near the 3 prime end, labelled the intron’s three vulnerable positions. Row 2, step 1, lariat forms: inside a dashed blue spliceosome (snRNPs: snRNA plus protein, RNA does the catalysis) the intron’s 5 prime end has been cut from exon 1 and joined to the branch A by a 2 prime to 5 prime bond, drawing a loop; exon 1 is left with a free red 3 prime OH, and a blue arrow from it to the AG reads: exon 1’s 3 prime OH attacks the AG, exons join, lariat released. Row 3, step 2, exons join: exon 1 and exon 2 drawn edge to edge as the spliced mRNA with the reading frame intact, and a grey lasso-shaped lariat intron off to the right, to be degraded.',
      caption: 'Two transesterifications: branch A attacks the GU to make the lariat, then exon 1’s 3′-OH attacks the AG to join the exons.',
    },
    blocks: [
      '- Landmarks: **GU** donor · **branch-point A** · **AG** acceptor — mutate any one and splicing breaks',
      '- **Spliceosome** (snRNPs) cuts the intron out as a **lariat** and joins the exons; RNA is the catalyst (ribozyme)',
    ],
  },
  {
    at: 'Why Bother? Alternative Splicing',
    mode: 'lead',
    figure: {
      svg: altSplicingSvg,
      alt:
        'One pre-mRNA with four blue exons numbered 1 to 4 joined by introns. Tissue-specific splicing factors decide which exons stay. Two arrows lead down. Left, muscle: exon 3 included, giving an mRNA of exons 1 2 3 4 and a longer protein, isoform A. Right, liver: exon 3 skipped, giving exons 1 2 4 and a shorter protein, isoform B; exon 3 was removed along with the introns. At the right, two blots with muscle and liver lanes: a northern blot of RNA where the muscle band sits higher because longer RNA runs higher, and a western blot of protein with the same pattern, one locus giving two band sizes. Footer: the DNA is identical in both tissues, so the proteome is bigger than the genome; about 20,000 human genes give far more proteins, and one gene can give several mRNA sizes and several isoforms.',
      caption: 'Same gene, same DNA, two mRNAs: exon choice multiplies the proteome and shows up as extra bands on blots.',
    },
    blocks: [
      '- Exons are **included or skipped** by tissue-specific factors → one gene, several mRNAs and protein **isoforms**',
      '- Read it on blots: one locus, several **northern** (mRNA size) and **western** (protein size) bands',
    ],
  },
  {
    at: 'Prokaryotic Logic: The Operon',
    mode: 'replace-table',
    figure: {
      svg: lacSvg,
      alt:
        'Top, the lac operon as a map on a DNA line: a blue CAP site, the promoter P, a red operator O, then lacZ, lacY and lacA, with one blue arrow spanning all three genes labelled one polycistronic mRNA, three enzymes together. Below, a two-by-two grid with columns lactose absent and lactose present and rows glucose high and glucose low. Each cell shows a miniature operon with a red repressor disc either sitting on the operator (bound) or floating above it as a dashed outline (released by allolactose), and a CAP disc either solid blue on the CAP site (active, cAMP high) or grey and dashed off the DNA (idle). Glucose high, lactose absent: repressor bound, CAP idle, OFF. Glucose high, lactose present: repressor off, CAP idle, barely on. Glucose low, lactose absent: repressor bound, CAP active, OFF, the repressor wins. Glucose low, lactose present: repressor off, CAP active, STRONGLY ON. Legend: the LacI repressor on the operator is negative control that allolactose removes; cAMP-CAP, active only when glucose is low, recruits polymerase as positive control. Footer: an AND gate, burn lactose only when the better fuel is gone.',
      caption: 'The lac operon is an AND gate: the repressor must be off (lactose) and cAMP–CAP must be on (no glucose).',
    },
    blocks: [
      '- **Operon** = one promoter → ONE polycistronic mRNA; **lac** is inducible (catabolic), **trp** repressible (anabolic)',
      '- **Negative control:** LacI on the operator until **allolactose** pulls it off',
      '- **Positive control:** low glucose → cAMP → **CAP** recruits polymerase; glucose present = barely on even with lactose',
      '- **trp:** tryptophan is a **corepressor** that arms its repressor — the product shuts its own synthesis',
    ],
  },
  {
    at: 'Eukaryotic Layers',
    mode: 'lead',
    figure: {
      svg: eukLayersSvg,
      alt:
        'Three horizontal layers. Layer 1, chromatin, is the gene reachable: on the left, spaced blue nucleosomes carrying red Ac tags, acetylated by HATs, loose and ON, because acetyl neutralises lysine’s positive charge so histones let go, and HDACs undo it; on the right, tightly packed grey nucleosomes with red methyl lollipops on the DNA, a CpG-methylated promoter that is silenced, a mark copied at each division, which is epigenetics (imprinting, X-inactivation). Layer 2, enhancers, how much and from how far: a blue enhancer box far to the left on the DNA with two red activator discs bound; a dashed blue arc loops from them over to a mediator box above the promoter, where Pol II sits; note that this is still cis but tens of kilobases away, in either orientation, upstream or downstream, whereas the operator sits next door. Layer 3, combinations, which factors are present: four transcription-factor boxes a, b, c and d in different colours bound upstream of the promoter, with a bracket reading the promoter integrates many factors at once; Pol II on the promoter produces one monocistronic mRNA. Footer: same genome in every cell, so tissue identity is the combination of factors present.',
      caption: 'Access, then distance, then combination: the three places a eukaryotic gene is decided, none of them an operator.',
    },
    blocks: [
      '- **Chromatin:** acetylation (HAT) opens, HDAC closes; CpG **methylation** silences and is inherited = **epigenetics**',
      '- **Enhancers** act far away via **looping** (still cis); each promoter integrates a **combination** of TFs → monocistronic mRNA',
    ],
  },
  {
    at: 'Reporter Dissection',
    mode: 'after',
    figure: {
      svg: reporterSvg,
      alt:
        'Four constructs on the left, each a DNA line carrying segments A (blue), B (red) and C, then the promoter P and a luciferase box; horizontal bars on the right give the light each produces as a percent of the full construct, with a dashed line at 100 percent. Row 1, the full region: 100 percent, the reference. Row 2, segment A deleted (crossed out): 5 percent, activity down, so A carried an essential element or the core promoter. Row 3, segment B deleted: 300 percent, activity up, so B carried a silencer and a repressor’s brake came off. Row 4, segment C flipped and moved 2 kilobases away, drawn as a reversed box at the far left: about 100 percent, unchanged, so C is an enhancer. Footer: down means you removed an activator or the core promoter, up means you removed a silencer, and indifference to distance and orientation marks an enhancer.',
      caption: 'The lesson’s reporter puzzle as bars: the direction of the change names the element (values from the lesson, illustrative).',
    },
  },
]
