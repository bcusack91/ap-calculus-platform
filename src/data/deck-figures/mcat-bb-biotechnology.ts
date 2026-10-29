import type { DeckFigurePlacement } from './index'

/**
 * Biotechnology Methods (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing is ours, drawn from the concept: base boxes and a staggered
 * cut line for restriction enzymes, a plasmid circle with its three parts
 * and two agar plates for cloning, a temperature step-trace plus 2ⁿ bars for
 * PCR, a gel with wells/lanes and a distance-vs-log(size) line, three blot
 * columns as a pipeline, a nested fragment family read off a lane for
 * Sanger, a cut-then-repair fork for CRISPR, a floxed allele in two cell
 * types for Cre-lox, and a tree plus a claim ladder for the decision tree.
 * No textbook, prep-company or AAMC figure was copied. The only numbers
 * drawn are the ones the lesson states (EcoRI GAATTC, n+1 vs n fragments,
 * ~95 / ~50–65 / ~72 °C, 2ⁿ and 30 cycles ≈ 10⁹, ~20-bp guide). The
 * distance-vs-log(size) line and the Sanger sequence are illustrative and
 * say so. No structural formulas — bases are letters in boxes.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so every
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-bt-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 12) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 5}" font-size="${r + 3}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

const f = (v: number) => +v.toFixed(1)

/** Circular arc path from angle a0 to a1 (degrees, clockwise positive in SVG) on a circle. */
const ARC = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const p = (a: number) => `${f(cx + r * Math.cos((a * Math.PI) / 180))} ${f(cy + r * Math.sin((a * Math.PI) / 180))}`
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0
  const sweep = a1 > a0 ? 1 : 0
  return `M${p(a0)} A ${r} ${r} 0 ${large} ${sweep} ${p(a1)}`
}

/** A labelled rounded box centred on (cx, cy). */
const BOX = (cx: number, cy: number, w: number, h: number, label: string, fs = 17, opacity = 0.12) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="10" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2"/>` +
  `<text x="${cx}" y="${cy + fs * 0.36}" font-size="${fs}" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`

/* ───────────────────────── 1 — Restriction enzymes: palindrome, sticky vs blunt, fragment counting (lead, 1000×460) ───────────────────────── */

const BASE = (x: number, y: number, label: string, accent = false) => {
  const inner =
    `<rect x="${x - 18}" y="${y}" width="36" height="36" rx="7" fill="currentColor" fill-opacity="${accent ? 0.22 : 0.1}" stroke="currentColor" stroke-width="2"/>` +
    `<text x="${x}" y="${y + 25}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`
  return accent ? `<g class="fig-accent">${inner}</g>` : inner
}
const siteXs = [80, 122, 164, 206, 248, 290]
const topBases = ['G', 'A', 'A', 'T', 'T', 'C']
const botBases = ['C', 'T', 'T', 'A', 'A', 'G']
const restrictionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bt-re')}</defs>
<text x="40" y="40" font-size="20" font-weight="700" fill="currentColor">EcoRI site — a palindrome</text>
<g class="fig-muted"><text x="40" y="62" font-size="15" fill="currentColor">GAATTC reads the same 5'→3' on both strands</text></g>
<text x="56" y="103" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">5'</text>
<text x="314" y="103" font-size="17" font-weight="700" fill="currentColor">3'</text>
<text x="56" y="149" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">3'</text>
<text x="314" y="149" font-size="17" font-weight="700" fill="currentColor">5'</text>
${siteXs.map((x, i) => BASE(x, 78, topBases[i]) + BASE(x, 124, botBases[i])).join('')}
<g class="fig-accent-2">
<path d="M101 66 L101 119 L269 119 L269 172" fill="none" stroke="currentColor" stroke-width="3.5" stroke-dasharray="7 4"/>
<text x="340" y="124" font-size="15" font-weight="700" fill="currentColor">staggered cut</text>
</g>
<g class="fig-muted"><line x1="185" y1="182" x2="185" y2="212" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bt-re)"/></g>
${BASE(80, 222, 'G')}
${[122, 164, 206, 248].map((x, i) => BASE(x, 268, ['T', 'T', 'A', 'A'][i], true)).join('')}
${BASE(80, 268, 'C')}
${[156, 198, 240, 282].map((x, i) => BASE(x, 222, ['A', 'A', 'T', 'T'][i], true)).join('')}
${BASE(324, 222, 'C')}
${BASE(324, 268, 'G')}
<g class="fig-accent"><text x="40" y="336" font-size="16" font-weight="700" fill="currentColor">Sticky ends: 5' AATT overhangs</text></g>
<text x="40" y="360" font-size="15" fill="currentColor">any two EcoRI fragments anneal, from any source</text>
<text x="40" y="384" font-size="15" fill="currentColor">then DNA ligase seals the backbone — the paste</text>
<g class="fig-muted"><line x1="420" y1="30" x2="420" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<text x="450" y="40" font-size="20" font-weight="700" fill="currentColor">Blunt ends</text>
<line x1="450" y1="82" x2="640" y2="82" stroke="currentColor" stroke-width="3"/>
<line x1="450" y1="100" x2="640" y2="100" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2"><line x1="545" y1="68" x2="545" y2="114" stroke="currentColor" stroke-width="3.5" stroke-dasharray="7 4"/></g>
<g class="fig-muted"><line x1="660" y1="91" x2="700" y2="91" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bt-re)"/></g>
<line x1="720" y1="82" x2="810" y2="82" stroke="currentColor" stroke-width="3"/><line x1="720" y1="100" x2="810" y2="100" stroke="currentColor" stroke-width="3"/>
<line x1="810" y1="82" x2="810" y2="100" stroke="currentColor" stroke-width="3"/>
<line x1="840" y1="82" x2="930" y2="82" stroke="currentColor" stroke-width="3"/><line x1="840" y1="100" x2="930" y2="100" stroke="currentColor" stroke-width="3"/>
<line x1="840" y1="82" x2="840" y2="100" stroke="currentColor" stroke-width="3"/>
<text x="450" y="136" font-size="15" fill="currentColor">straight cut, no overhang — ligatable but inefficient and unselective</text>
<text x="450" y="196" font-size="20" font-weight="700" fill="currentColor">Fragment counting</text>
<line x1="450" y1="246" x2="700" y2="246" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-accent-2">
<line x1="533" y1="232" x2="533" y2="260" stroke="currentColor" stroke-width="3.5"/>
<line x1="617" y1="232" x2="617" y2="260" stroke="currentColor" stroke-width="3.5"/>
</g>
<g class="fig-muted">
<text x="491" y="230" font-size="14" text-anchor="middle" fill="currentColor">1</text>
<text x="575" y="230" font-size="14" text-anchor="middle" fill="currentColor">2</text>
<text x="659" y="230" font-size="14" text-anchor="middle" fill="currentColor">3</text>
</g>
<text x="450" y="286" font-size="15" fill="currentColor">linear, 2 sites → 3 fragments</text>
<text x="450" y="308" font-size="15" font-weight="700" fill="currentColor">n sites → n + 1</text>
<circle cx="840" cy="252" r="46" fill="none" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-accent-2">
<line x1="840" y1="192" x2="840" y2="220" stroke="currentColor" stroke-width="3.5"/>
<line x1="840" y1="284" x2="840" y2="312" stroke="currentColor" stroke-width="3.5"/>
</g>
<g class="fig-muted">
<text x="806" y="258" font-size="14" text-anchor="middle" fill="currentColor">1</text>
<text x="874" y="258" font-size="14" text-anchor="middle" fill="currentColor">2</text>
</g>
<text x="840" y="342" font-size="15" text-anchor="middle" fill="currentColor">circular (plasmid), 2 sites → 2 fragments</text>
<text x="840" y="364" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">n sites → n</text>
<g class="fig-muted"><text x="500" y="436" font-size="16" text-anchor="middle" fill="currentColor">bacterial defence: a paired methylase protects the host's own sites, so only foreign DNA is cut</text></g>
</svg>`

/* ───────────────────────── 2 — Cloning: cut, ligate, transform, select, screen (lead, 1000×460) ───────────────────────── */

const PLASMID = (cx: number, cy: number, r: number, insert: boolean) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-width="3"/>` +
  `<g class="fig-accent"><path d="${ARC(cx, cy, r, 150, 200)}" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></g>` +
  `<g class="fig-accent-2"><path d="${ARC(cx, cy, r, 20, 70)}" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></g>` +
  (insert
    ? `<g class="fig-accent"><path d="${ARC(cx, cy, r, -120, -60)}" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></g>`
    : `<g class="fig-muted"><path d="${ARC(cx, cy, r, -110, -70)}" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/></g>`)
const COLONIES = (cx: number, cy: number, pts: [number, number, 'b' | 'w' | 'k'][]) =>
  pts
    .map(([dx, dy, k]) =>
      k === 'w'
        ? `<circle class="fig-bg" cx="${cx + dx}" cy="${cy + dy}" r="6" stroke="currentColor" stroke-width="2"/>`
        : k === 'b'
          ? `<g class="fig-accent"><circle cx="${cx + dx}" cy="${cy + dy}" r="6" fill="currentColor"/></g>`
          : `<circle cx="${cx + dx}" cy="${cy + dy}" r="6" fill="currentColor" fill-opacity="0.7"/>`,
    )
    .join('')
const cloningSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${NUM(140, 44, '1')}${NUM(380, 44, '2')}${NUM(580, 44, '3')}${NUM(760, 44, '4')}${NUM(920, 44, '5')}
<text x="140" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Cut — same enzyme</text>
<text x="380" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Ligate</text>
<text x="580" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Transform</text>
<text x="760" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Select</text>
<text x="920" y="78" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Screen</text>
${PLASMID(140, 170, 60, false)}
<g class="fig-accent-2"><line x1="140" y1="100" x2="140" y2="120" stroke="currentColor" stroke-width="3.5" stroke-dasharray="6 4"/></g>
<g class="fig-accent"><text x="66" y="200" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">ori</text></g>
<g class="fig-accent-2"><text x="214" y="212" font-size="15" font-weight="700" fill="currentColor">ampᴿ</text></g>
<g class="fig-muted"><text x="140" y="94" font-size="14" text-anchor="middle" fill="currentColor">MCS in lacZ</text></g>
<text x="140" y="262" font-size="14" text-anchor="middle" fill="currentColor">vector: ori · marker · MCS</text>
<line x1="80" y1="300" x2="200" y2="300" stroke="currentColor" stroke-width="3"/>
<line x1="90" y1="312" x2="210" y2="312" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<line x1="80" y1="290" x2="80" y2="322" stroke="currentColor" stroke-width="3" stroke-dasharray="5 3"/>
<line x1="210" y1="290" x2="210" y2="322" stroke="currentColor" stroke-width="3" stroke-dasharray="5 3"/>
</g>
<text x="145" y="344" font-size="15" text-anchor="middle" fill="currentColor">insert (cDNA) — matching sticky ends</text>
<g class="fig-muted">
<defs>${ARROW('arr-bt-cl-m')}</defs>
<line x1="222" y1="170" x2="306" y2="170" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bt-cl-m)"/>
<line x1="452" y1="170" x2="500" y2="170" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bt-cl-m)"/>
<line x1="658" y1="170" x2="692" y2="170" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bt-cl-m)"/>
<line x1="828" y1="170" x2="856" y2="170" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bt-cl-m)"/>
</g>
${PLASMID(380, 170, 60, true)}
<g class="fig-accent"><text x="380" y="94" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">insert</text></g>
<text x="380" y="262" font-size="14" text-anchor="middle" fill="currentColor">recombinant plasmid</text>
<text x="380" y="282" font-size="14" text-anchor="middle" fill="currentColor">(ligase seals the joints)</text>
<ellipse cx="580" cy="170" rx="66" ry="40" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<circle cx="596" cy="176" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="580" y="262" font-size="14" text-anchor="middle" fill="currentColor">bacterium takes up</text>
<text x="580" y="282" font-size="14" text-anchor="middle" fill="currentColor">the plasmid</text>
<circle cx="760" cy="170" r="58" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${COLONIES(760, 170, [
  [-28, -20, 'k'],
  [6, -30, 'k'],
  [30, -4, 'k'],
  [-10, 8, 'k'],
  [18, 26, 'k'],
  [-32, 22, 'k'],
])}
<text x="760" y="262" font-size="14" text-anchor="middle" fill="currentColor">antibiotic plate:</text>
<text x="760" y="282" font-size="14" text-anchor="middle" fill="currentColor">plasmid-bearers only</text>
<circle cx="920" cy="170" r="58" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${COLONIES(920, 170, [
  [-28, -20, 'w'],
  [6, -30, 'b'],
  [30, -4, 'w'],
  [-10, 8, 'b'],
  [18, 26, 'w'],
  [-32, 22, 'w'],
])}
<text x="920" y="262" font-size="14" text-anchor="middle" fill="currentColor">X-gal: white = insert</text>
<g class="fig-accent"><text x="920" y="282" font-size="14" text-anchor="middle" fill="currentColor">blue = empty vector</text></g>
<g class="fig-muted"><line x1="40" y1="372" x2="960" y2="372" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<text x="500" y="406" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Bacteria cannot splice → clone the cDNA (from mature mRNA, intron-free) behind a bacterial promoter</text>
<g class="fig-muted"><text x="500" y="436" font-size="15" text-anchor="middle" fill="currentColor">needs glycosylation or complex folding? move to yeast or mammalian cells — E. coli has no ER</text></g>
</svg>`

/* ───────────────────────── 3 — PCR: the three-step cycle and 2ⁿ copies (replace-table, 560×440) ───────────────────────── */

const T95 = 60
const T72 = 110
const T55 = 150
const pcrTrace = [
  [96, T95], [146, T95], [156, T55], [206, T55], [216, T72], [276, T72],
  [286, T95], [336, T95], [346, T55], [396, T55], [406, T72], [466, T72],
  [476, T95], [520, T95],
]
  .map(([x, y]) => `${x},${y}`)
  .join(' ')
const pcrBars = [1, 2, 4, 8, 16, 32]
const pcrSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<text x="8" y="${T95 + 5}" font-size="14" fill="currentColor">~95 °C</text>
<text x="8" y="${T72 + 5}" font-size="14" fill="currentColor">~72 °C</text>
<text x="8" y="${T55 + 5}" font-size="14" fill="currentColor">~50–65 °C</text>
<line x1="90" y1="${T95}" x2="520" y2="${T95}" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5"/>
<line x1="90" y1="${T72}" x2="520" y2="${T72}" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5"/>
<line x1="90" y1="${T55}" x2="520" y2="${T55}" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5"/>
</g>
<g class="fig-accent"><polyline points="${pcrTrace}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/></g>
<g class="fig-accent-2">
<text x="121" y="46" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">denature</text>
<text x="181" y="172" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">anneal</text>
<text x="246" y="98" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">extend</text>
</g>
<g class="fig-muted">
<path d="M96 186 L96 194 L276 194 L276 186" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="186" y="210" font-size="13" text-anchor="middle" fill="currentColor">one cycle (then ×30)</text>
<text x="400" y="210" font-size="13" text-anchor="middle" fill="currentColor">cycle 2 …</text>
</g>
<text x="20" y="238" font-size="14" fill="currentColor"><tspan font-weight="700">denature</tspan> — strands separate · <tspan font-weight="700">anneal</tspan> — 2 primers bind, flanking the target</text>
<text x="20" y="258" font-size="14" fill="currentColor"><tspan font-weight="700">extend</tspan> — Taq (thermostable, survives 95 °C) builds 5'→3'</text>
<text x="40" y="292" font-size="15" font-weight="700" fill="currentColor">copies = 2ⁿ after n cycles</text>
${pcrBars
  .map((v, i) => {
    const h = Math.max(3, (110 * v) / 32)
    const x = 40 + i * 44
    return `<g class="fig-accent"><rect x="${x}" y="${410 - h}" width="30" height="${h}" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/></g><text x="${x + 15}" y="${404 - h}" font-size="13" text-anchor="middle" fill="currentColor">${v}</text><g class="fig-muted"><text x="${x + 15}" y="428" font-size="13" text-anchor="middle" fill="currentColor">${i}</text></g>`
  })
  .join('')}
<line x1="36" y1="410" x2="300" y2="410" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted"><text x="8" y="428" font-size="12" fill="currentColor">cycle</text></g>
<text x="330" y="300" font-size="15" font-weight="700" fill="currentColor">30 cycles ≈ 10⁹ copies</text>
<text x="330" y="330" font-size="13" fill="currentColor">in the tube: template, 2 primers,</text>
<text x="330" y="348" font-size="13" fill="currentColor">dNTPs, Taq, Mg²⁺</text>
<g class="fig-accent-2">
<text x="330" y="378" font-size="13" fill="currentColor">no helicase — heat unwinds</text>
<text x="330" y="396" font-size="13" fill="currentColor">no primase — primers supplied</text>
<text x="330" y="414" font-size="13" fill="currentColor">no ligase — product is continuous</text>
</g>
</svg>`

/* ───────────────────────── 4 — Gel electrophoresis (lead, 1000×460) ───────────────────────── */

const BAND = (x: number, y: number, w = 44, thick = 6, cls?: string) => {
  const r = `<rect x="${x - w / 2}" y="${y - thick / 2}" width="${w}" height="${thick}" rx="2" fill="currentColor"/>`
  return cls ? `<g class="${cls}">${r}</g>` : r
}
const gelSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bt-gel')}</defs>
<rect x="70" y="92" width="450" height="320" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<text x="295" y="46" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">− electrode (wells)</text>
<text x="295" y="446" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">+ electrode (anode)</text>
${[140, 260, 380].map((x) => `<rect x="${x - 24}" y="100" width="48" height="12" rx="3" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>`).join('')}
<g class="fig-muted">
<text x="140" y="80" font-size="15" text-anchor="middle" fill="currentColor">ladder</text>
<text x="260" y="80" font-size="15" text-anchor="middle" fill="currentColor">sample A</text>
<text x="380" y="80" font-size="15" text-anchor="middle" fill="currentColor">sample B</text>
</g>
${[136, 160, 190, 226, 268, 316, 370].map((y, i) => BAND(140, y, 44, 8 - i * 0.6)).join('')}
<g class="fig-muted">
<text x="104" y="141" font-size="13" text-anchor="end" fill="currentColor">large</text>
<text x="104" y="375" font-size="13" text-anchor="end" fill="currentColor">small</text>
</g>
${BAND(260, 160, 44, 7, 'fig-accent')}${BAND(260, 316, 44, 7, 'fig-accent')}
${BAND(380, 226, 44, 7, 'fig-accent-2')}${BAND(380, 370, 44, 7, 'fig-accent-2')}
<g class="fig-muted">
<line x1="470" y1="130" x2="470" y2="380" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bt-gel)"/>
<text x="470" y="400" font-size="14" text-anchor="middle" fill="currentColor">migration</text>
</g>
<text x="620" y="46" font-size="20" font-weight="700" fill="currentColor">Why it sorts by size</text>
<text x="620" y="78" font-size="16" fill="currentColor">phosphate backbone → uniform − charge</text>
<text x="620" y="102" font-size="16" fill="currentColor">the field pulls every fragment toward +</text>
<text x="620" y="126" font-size="16" fill="currentColor">agarose sieves: <tspan font-weight="700">small runs FAR</tspan>, large lags</text>
<g class="fig-muted">
<line x1="660" y1="300" x2="940" y2="300" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bt-gel)"/>
<line x1="660" y1="300" x2="660" y2="160" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bt-gel)"/>
<text x="946" y="322" font-size="14" text-anchor="end" fill="currentColor">log(size)</text>
<text x="652" y="166" font-size="14" text-anchor="end" fill="currentColor">distance</text>
</g>
<g class="fig-accent"><line x1="680" y1="178" x2="920" y2="284" stroke="currentColor" stroke-width="3.5"/></g>
<text x="800" y="344" font-size="15" text-anchor="middle" fill="currentColor">distance falls ~linearly as log(size) rises</text>
<g class="fig-muted"><text x="800" y="364" font-size="13" text-anchor="middle" fill="currentColor">the ladder calibrates each gel (illustrative)</text></g>
<text x="620" y="396" font-size="15" fill="currentColor"><tspan font-weight="700">Proteins:</tspan> SDS gives uniform − charge + unfolds</text>
<text x="620" y="418" font-size="15" fill="currentColor">→ SDS-PAGE sorts by size alone</text>
<g class="fig-muted"><text x="620" y="440" font-size="14" fill="currentColor">(native gels / IEF sort by shape or charge)</text></g>
</svg>`

/* ───────────────────────── 5 — The three blots as one pipeline (replace-table, 560×440) ───────────────────────── */

const GEL_STRIP = (cx: number, y: number, hot: number) =>
  `<rect x="${cx - 30}" y="${y}" width="60" height="60" rx="5" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>` +
  [12, 26, 40, 50]
    .map((dy, i) =>
      i === hot
        ? `<g class="fig-accent"><rect x="${cx - 22}" y="${y + dy - 2}" width="44" height="5" rx="2" fill="currentColor"/></g>`
        : `<rect x="${cx - 22}" y="${y + dy - 2}" width="44" height="5" rx="2" fill="currentColor" fill-opacity="0.3"/>`,
    )
    .join('')
const MEMBRANE = (cx: number, y: number, hot: number, probe: 'dna' | 'ab') =>
  `<rect x="${cx - 44}" y="${y}" width="88" height="60" rx="4" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>` +
  [12, 26, 40, 50].map((dy) => `<rect x="${cx - 22}" y="${y + dy - 2}" width="44" height="5" rx="2" fill="currentColor" fill-opacity="0.12"/>`).join('') +
  (probe === 'dna'
    ? `<g class="fig-accent-2"><line x1="${cx - 18}" y1="${y + [12, 26, 40, 50][hot] - 8}" x2="${cx + 18}" y2="${y + [12, 26, 40, 50][hot] - 8}" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>${[-12, -4, 4, 12].map((dx) => `<line x1="${cx + dx}" y1="${y + [12, 26, 40, 50][hot] - 7}" x2="${cx + dx}" y2="${y + [12, 26, 40, 50][hot] - 2}" stroke="currentColor" stroke-width="1.5"/>`).join('')}</g>`
    : `<g class="fig-accent-2"><path d="M${cx} ${y + [12, 26, 40, 50][hot] - 3} L${cx} ${y + [12, 26, 40, 50][hot] - 12} M${cx} ${y + [12, 26, 40, 50][hot] - 12} L${cx - 9} ${y + [12, 26, 40, 50][hot] - 22} M${cx} ${y + [12, 26, 40, 50][hot] - 12} L${cx + 9} ${y + [12, 26, 40, 50][hot] - 22}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></g>`)
const READOUT = (cx: number, y: number, hot: number) =>
  `<rect x="${cx - 44}" y="${y}" width="88" height="44" rx="4" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5"/>` +
  `<rect x="${cx - 22}" y="${y + 8 + hot * 9}" width="44" height="6" rx="2" fill="currentColor"/>`
const BLOT_COL = (cx: number, name: string, mol: string, gel: string, probe: string, hot: number, kind: 'dna' | 'ab', q1: string, q2: string) =>
  `<text x="${cx}" y="26" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text>` +
  `<text x="${cx}" y="46" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">${mol}</text>` +
  GEL_STRIP(cx, 56, hot) +
  `<g class="fig-muted"><text x="${cx > 400 ? cx - 36 : cx + 36}" y="90" font-size="12" text-anchor="${cx > 400 ? 'end' : 'start'}" fill="currentColor">${gel}</text></g>` +
  `<g class="fig-muted"><line x1="${cx}" y1="122" x2="${cx}" y2="142" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bt-blot-m)"/><text x="${cx + 6}" y="137" font-size="11" fill="currentColor">transfer</text></g>` +
  MEMBRANE(cx, 146, hot, kind) +
  `<g class="fig-accent-2"><text x="${cx}" y="226" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">${probe}</text></g>` +
  `<g class="fig-muted"><line x1="${cx}" y1="234" x2="${cx}" y2="252" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bt-blot-m)"/></g>` +
  READOUT(cx, 256, hot) +
  `<text x="${cx}" y="324" font-size="13" text-anchor="middle" fill="currentColor">${q1}</text>` +
  `<text x="${cx}" y="342" font-size="13" text-anchor="middle" fill="currentColor">${q2}</text>`
const blotsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted"><defs>${ARROW('arr-bt-blot-m')}</defs></g>
${BLOT_COL(95, 'Southern', 'DNA', 'gel', 'labelled DNA probe', 1, 'dna', 'gene present? copies?', 'restriction-site change?')}
${BLOT_COL(280, 'Northern', 'RNA', 'gel', 'DNA / RNA probe', 2, 'dna', 'transcribed here?', 'transcript size, splicing?')}
${BLOT_COL(465, 'Western', 'protein', 'SDS-PAGE', 'antibody', 1, 'ab', 'protein made? what size?', 'how much?')}
<g class="fig-muted"><line x1="187" y1="14" x2="187" y2="350" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5"/><line x1="372" y1="14" x2="372" y2="350" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5"/></g>
<g class="fig-muted"><text x="8" y="286" font-size="11" fill="currentColor">one</text><text x="8" y="299" font-size="11" fill="currentColor">band</text></g>
<text x="280" y="384" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">SNoW DRoP — Southern·DNA, Northern·RNA, Western·Protein</text>
<g class="fig-muted"><text x="280" y="408" font-size="13" text-anchor="middle" fill="currentColor">blot = electrophoresis + transfer to a membrane + a specific probe</text>
<text x="280" y="428" font-size="13" text-anchor="middle" fill="currentColor">the probe turns a smear of molecules into one readable band</text></g>
</svg>`

/* ───────────────────────── 6 — Sanger sequencing: chain termination → read the ladder (lead, 1000×460) ───────────────────────── */

const tmpl = ['T', 'G', 'C', 'A', 'A'] // template 3'→5' as drawn left→right
const comp = ['A', 'C', 'G', 'T', 'T'] // new strand 5'→3'
const tXs = [150, 200, 250, 300, 350]
const LETTER = (x: number, y: number, s: string, cls?: string, fs = 18) => {
  const t = `<text x="${x}" y="${y}" font-size="${fs}" font-weight="700" text-anchor="middle" fill="currentColor">${s}</text>`
  return cls ? `<g class="${cls}">${t}</g>` : t
}
const laneYs = [340, 282, 224, 166, 108] // fragment length 1..5, bottom → top
const sangerSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bt-sg')}</defs>
<text x="40" y="40" font-size="20" font-weight="700" fill="currentColor">One primer, four dNTPs, a pinch of ddNTPs</text>
<line x1="70" y1="86" x2="400" y2="86" stroke="currentColor" stroke-width="3"/>
<text x="60" y="92" font-size="16" font-weight="700" text-anchor="end" fill="currentColor">3'</text>
<text x="410" y="92" font-size="16" font-weight="700" fill="currentColor">5'</text>
<g class="fig-muted"><text x="70" y="70" font-size="14" fill="currentColor">template</text></g>
${tXs.map((x, i) => LETTER(x, 80, tmpl[i])).join('')}
<g class="fig-accent-2"><line x1="70" y1="112" x2="126" y2="112" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><text x="98" y="136" font-size="13" text-anchor="middle" fill="currentColor">primer</text></g>
<g class="fig-accent"><line x1="130" y1="112" x2="226" y2="112" stroke="currentColor" stroke-width="4"/>${LETTER(150, 132, 'A', undefined, 17)}${LETTER(200, 132, 'C', undefined, 17)}</g>
<g class="fig-accent-2">
<rect x="232" y="98" width="36" height="28" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="250" y="118" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">ddG</text>
<line x1="276" y1="102" x2="290" y2="122" stroke="currentColor" stroke-width="3"/><line x1="290" y1="102" x2="276" y2="122" stroke="currentColor" stroke-width="3"/>
<text x="300" y="150" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">no 3'-OH → chain stops here</text>
</g>
<g class="fig-muted"><text x="40" y="190" font-size="15" fill="currentColor">every molecule stops at a random base → a nested family</text></g>
${laneYs
  .slice()
  .reverse()
  .map((_, k) => {
    const len = k + 1 // 1..5 fragments drawn top→bottom as short→long
    const y = 214 + k * 28
    const end = 126 + len * 50
    return `<g class="fig-accent-2"><line x1="70" y1="${y}" x2="126" y2="${y}" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></g><g class="fig-accent"><line x1="130" y1="${y}" x2="${end - 22}" y2="${y}" stroke="currentColor" stroke-width="4"/></g><g class="fig-accent-2"><rect x="${end - 20}" y="${y - 11}" width="30" height="22" rx="5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/><text x="${end - 5}" y="${y + 5}" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">${comp[len - 1]}</text></g>`
  })
  .join('')}
<g class="fig-muted"><text x="40" y="380" font-size="14" fill="currentColor">red box = the ddNTP that ended that chain</text></g>
<text x="40" y="420" font-size="15" fill="currentColor"><tspan font-weight="700">AZT, acyclovir:</tspan> the same missing-3'-OH logic</text>
<g class="fig-muted"><line x1="470" y1="30" x2="470" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<text x="560" y="40" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Read the lane</text>
<rect x="520" y="70" width="80" height="310" rx="8" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted"><text x="560" y="402" font-size="13" text-anchor="middle" fill="currentColor">shortest at the bottom</text></g>
${laneYs.map((y, i) => `<rect x="${532}" y="${y - 4}" width="56" height="8" rx="2" fill="currentColor"/>${LETTER(620, y + 7, comp[i], 'fig-accent', 20)}`).join('')}
<g class="fig-accent">
<defs>${ARROW('arr-bt-sg-b')}</defs>
<line x1="660" y1="350" x2="660" y2="100" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-bt-sg-b)"/>
<text x="680" y="230" font-size="15" fill="currentColor">read bottom → up</text>
<text x="680" y="252" font-size="15" fill="currentColor">= new strand 5'→3'</text>
</g>
<text x="690" y="100" font-size="20" font-weight="700" fill="currentColor">read: 5'-ACGTT-3'</text>
<text x="690" y="128" font-size="15" fill="currentColor">the read is the template's COMPLEMENT</text>
<text x="690" y="150" font-size="15" fill="currentColor">template, written 5'→3': AACGT</text>
<g class="fig-muted"><text x="690" y="178" font-size="13" fill="currentColor">(illustrative 5-base sequence)</text></g>
<g class="fig-muted"><text x="690" y="300" font-size="14" fill="currentColor">modern: 4 fluorescent ddNTPs, one capillary</text></g>
<text x="690" y="340" font-size="16" font-weight="700" fill="currentColor">NGS: massively parallel short reads</text>
<text x="690" y="364" font-size="15" fill="currentColor">assembled by overlap — cheaper per base;</text>
<text x="690" y="386" font-size="15" fill="currentColor">genomes, exomes, RNA-seq (cDNA)</text>
</svg>`

/* ───────────────────────── 7 — CRISPR–Cas9: one cut, two repair outcomes (lead, 1000×460) ───────────────────────── */

const crisprSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent">
<rect x="160" y="56" width="170" height="124" rx="34" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>
<text x="245" y="80" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Cas9</text>
</g>
<line x1="40" y1="110" x2="430" y2="110" stroke="currentColor" stroke-width="3.5"/>
<line x1="40" y1="130" x2="430" y2="130" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-muted"><text x="40" y="96" font-size="14" fill="currentColor">genomic DNA</text></g>
<g class="fig-accent-2">
<line x1="190" y1="152" x2="300" y2="152" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
${[196, 210, 224, 238, 252, 266, 280, 294].map((x) => `<line x1="${x}" y1="133" x2="${x}" y2="150" stroke="currentColor" stroke-width="1.5"/>`).join('')}
<text x="245" y="172" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">guide RNA</text>
<line x1="256" y1="94" x2="272" y2="146" stroke="currentColor" stroke-width="3.5"/>
<line x1="272" y1="94" x2="256" y2="146" stroke="currentColor" stroke-width="3.5"/>
</g>
<text x="245" y="208" font-size="16" text-anchor="middle" fill="currentColor">guide RNA base-pairs with ~20 bp of DNA</text>
<text x="245" y="232" font-size="16" text-anchor="middle" fill="currentColor">Cas9 cuts both strands → double-strand break</text>
<g class="fig-muted">
<defs>${ARROW('arr-bt-cr-m')}</defs>
<line x1="440" y1="120" x2="486" y2="120" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bt-cr-m)"/>
</g>
${BOX(560, 120, 130, 56, 'the CELL', 17, 0.1)}
<g class="fig-muted"><text x="560" y="166" font-size="14" text-anchor="middle" fill="currentColor">repairs the break</text></g>
<g class="fig-accent-2">
<defs>${ARROW('arr-bt-cr-r')}</defs>
<path d="M625 104 C 660 70, 680 60, 700 60" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bt-cr-r)"/>
${BOX(760, 60, 100, 40, 'NHEJ', 17, 0.18)}
<line x1="830" y1="52" x2="880" y2="52" stroke="currentColor" stroke-width="3"/><line x1="830" y1="68" x2="880" y2="68" stroke="currentColor" stroke-width="3"/>
<path d="M880 52 L892 44 L904 60 L916 52 L960 52" fill="none" stroke="currentColor" stroke-width="3"/><path d="M880 68 L892 76 L904 60 L916 68 L960 68" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="920" y="92" font-size="13" text-anchor="middle" fill="currentColor">indel</text>
<text x="640" y="128" font-size="16" font-weight="700" fill="currentColor">error-prone indels → frameshift KNOCKOUT</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-bt-cr-b')}</defs>
<path d="M625 136 C 660 190, 680 210, 700 210" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bt-cr-b)"/>
${BOX(760, 210, 100, 40, 'HDR', 17, 0.18)}
<line x1="830" y1="202" x2="960" y2="202" stroke="currentColor" stroke-width="3"/><line x1="830" y1="218" x2="960" y2="218" stroke="currentColor" stroke-width="3"/>
<rect x="876" y="196" width="40" height="28" rx="4" fill="currentColor" fill-opacity="0.5"/>
<text x="896" y="246" font-size="13" text-anchor="middle" fill="currentColor">precise edit</text>
<line x1="860" y1="166" x2="930" y2="166" stroke="currentColor" stroke-width="3" stroke-dasharray="6 4"/>
<text x="846" y="172" font-size="13" text-anchor="end" fill="currentColor">supplied template</text>
<text x="640" y="272" font-size="16" font-weight="700" fill="currentColor">needs a supplied template;</text>
<text x="640" y="294" font-size="16" font-weight="700" fill="currentColor">works mainly in dividing cells</text>
</g>
<g class="fig-muted"><line x1="40" y1="312" x2="960" y2="312" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<text x="500" y="348" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Reprogramming = change a 20-nt RNA, not engineer a new protein</text>
<text x="500" y="384" font-size="16" text-anchor="middle" fill="currentColor">the cell's repair choice decides the outcome (DNA replication lesson crossover)</text>
<g class="fig-muted"><text x="500" y="420" font-size="15" text-anchor="middle" fill="currentColor">origin: a bacterial adaptive immune system that keeps phage "mug shots" — a defence repurposed, like restriction enzymes</text></g>
</svg>`

/* ───────────────────────── 8 — Cre-lox conditional knockout + transgenic / knock-in / reporters (lead, 1000×460) ───────────────────────── */

const LOXP = (x: number, y: number) => `<g class="fig-accent-2"><polygon points="${x - 10},${y - 11} ${x + 10},${y} ${x - 10},${y + 11}" fill="currentColor"/></g>`
const GENE = (x0: number, x1: number, y: number, label: string) =>
  `<g class="fig-accent"><rect x="${x0}" y="${y - 14}" width="${x1 - x0}" height="28" rx="7" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/><text x="${(x0 + x1) / 2}" y="${y + 6}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text></g>`
const crelox = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="40" y="40" font-size="20" font-weight="700" fill="currentColor">Cre-lox: delete a gene only where Cre is expressed</text>
<line x1="60" y1="90" x2="600" y2="90" stroke="currentColor" stroke-width="3"/>
${LOXP(230, 90)}${LOXP(430, 90)}
${GENE(260, 400, 90, 'gene X')}
<g class="fig-accent-2"><text x="230" y="66" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">loxP</text><text x="430" y="66" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">loxP</text></g>
<g class="fig-muted"><text x="60" y="124" font-size="15" fill="currentColor">"floxed" allele — present in EVERY cell of the animal</text></g>
<g class="fig-muted">
<defs>${ARROW('arr-bt-cre-m')}</defs>
<line x1="330" y1="136" x2="330" y2="166" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bt-cre-m)"/>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-bt-cre-r')}</defs>
${BOX(330, 192, 300, 36, 'Cre under a LIVER-specific promoter', 15, 0.14)}
<line x1="330" y1="212" x2="330" y2="236" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bt-cre-r)"/>
</g>
<text x="60" y="280" font-size="17" font-weight="700" fill="currentColor">Liver cell</text>
<g class="fig-accent-2"><text x="60" y="302" font-size="14" fill="currentColor">Cre ON → excision</text></g>
<line x1="230" y1="276" x2="600" y2="276" stroke="currentColor" stroke-width="3"/>
${LOXP(330, 276)}
<g class="fig-accent"><circle cx="470" cy="318" r="22" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/><text x="470" y="323" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">X</text></g>
${LOXP(470, 296)}
<g class="fig-muted"><text x="508" y="322" font-size="13" fill="currentColor">excised, lost</text></g>
<text x="60" y="370" font-size="17" font-weight="700" fill="currentColor">Any other cell</text>
<g class="fig-muted"><text x="60" y="392" font-size="14" fill="currentColor">no Cre → gene intact</text></g>
<line x1="230" y1="366" x2="600" y2="366" stroke="currentColor" stroke-width="3"/>
${LOXP(300, 366)}${LOXP(500, 366)}
${GENE(330, 470, 366, 'gene X')}
<text x="60" y="436" font-size="15" fill="currentColor"><tspan font-weight="700">Why:</tspan> dodges embryonic lethality and isolates one tissue's function</text>
<g class="fig-muted"><line x1="650" y1="30" x2="650" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<text x="680" y="52" font-size="18" font-weight="700" fill="currentColor">Transgenic</text>
<line x1="680" y1="84" x2="960" y2="84" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted"><rect x="760" y="70" width="46" height="28" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><text x="783" y="90" font-size="12" text-anchor="middle" fill="currentColor">prom.</text></g>
${GENE(806, 900, 84, 'gene')}
<text x="680" y="120" font-size="14" fill="currentColor">extra DNA, random site;</text>
<text x="680" y="140" font-size="14" fill="currentColor">YOUR promoter sets where it's expressed</text>
<text x="680" y="186" font-size="18" font-weight="700" fill="currentColor">Knock-in</text>
<line x1="680" y1="218" x2="960" y2="218" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted"><rect x="756" y="196" width="150" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/><text x="831" y="258" font-size="12" text-anchor="middle" fill="currentColor">native locus</text></g>
${GENE(770, 890, 218, 'edited gene')}
<text x="680" y="286" font-size="14" fill="currentColor">precise replacement at the endogenous locus</text>
<text x="680" y="306" font-size="14" fill="currentColor">→ keeps native regulation</text>
<text x="680" y="348" font-size="18" font-weight="700" fill="currentColor">Reporter fusions</text>
<g class="fig-muted"><rect x="680" y="364" width="60" height="26" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><text x="710" y="382" font-size="12" text-anchor="middle" fill="currentColor">promoter</text></g>
<g class="fig-accent-2"><rect x="740" y="364" width="44" height="26" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><text x="762" y="382" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">GFP</text></g>
<text x="796" y="382" font-size="13" fill="currentColor">WHERE / WHEN it is active</text>
<g class="fig-accent"><rect x="680" y="404" width="60" height="26" rx="6" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5"/><text x="710" y="422" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">protein</text></g>
<g class="fig-accent-2"><rect x="740" y="404" width="44" height="26" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/><text x="762" y="422" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">GFP</text></g>
<text x="796" y="422" font-size="13" fill="currentColor">where the protein localizes</text>
</svg>`

/* ───────────────────────── 9 — The master decision tree + the claim ladder (lead, 1000×460) ───────────────────────── */

const LEAF = (cx: number, y: number, prop: string, tech: string) =>
  `<g class="fig-muted"><text x="${cx - 6}" y="${y}" font-size="15" text-anchor="end" fill="currentColor">${prop}</text></g>` +
  `<text x="${cx + 6}" y="${y}" font-size="15" font-weight="700" fill="currentColor">${tech}</text>`
const LADDER_BOX = (x0: number, y: number, w: number, head: string, sub: string, cls: string) =>
  `<g class="${cls}"><rect x="${x0}" y="${y}" width="${w}" height="58" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>` +
  `<text x="${x0 + w / 2}" y="${y + 25}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">${head}</text></g>` +
  `<text x="${x0 + w / 2}" y="${y + 47}" font-size="14" text-anchor="middle" fill="currentColor">${sub}</text>`
const treeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted"><defs>${ARROW('arr-bt-tree-m')}</defs></g>
${BOX(500, 44, 230, 36, '1 · What molecule?', 17, 0.1)}
<g class="fig-muted">
<path d="M500 62 L500 80 L180 80 L180 100" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M500 80 L490 80 L490 100" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M500 80 L800 80 L800 100" fill="none" stroke="currentColor" stroke-width="2"/>
</g>
<g class="fig-accent">${BOX(180, 118, 140, 36, 'DNA', 18, 0.16)}${BOX(490, 118, 140, 36, 'RNA', 18, 0.16)}${BOX(800, 118, 140, 36, 'protein', 18, 0.16)}</g>
<g class="fig-muted"><text x="500" y="166" font-size="14" text-anchor="middle" fill="currentColor">2 · What property?  (property → technique)</text></g>
${LEAF(180, 196, 'amount', 'qPCR')}
${LEAF(180, 222, 'size / form', 'Southern, gel digest')}
${LEAF(180, 248, 'sequence', 'Sanger, NGS')}
${LEAF(490, 196, 'amount', 'RT-qPCR, RNA-seq')}
${LEAF(490, 222, 'size / form', 'northern (splicing)')}
${LEAF(800, 196, 'amount', 'ELISA')}
${LEAF(800, 222, 'size / form', 'western')}
${LEAF(800, 248, 'location', 'IF, GFP fusion')}
${LEAF(800, 274, 'interaction', 'co-IP, yeast 2-hybrid')}
<g class="fig-muted"><line x1="40" y1="300" x2="960" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<text x="60" y="330" font-size="17" font-weight="700" fill="currentColor">3 · How strong a claim?</text>
<g class="fig-muted"><text x="940" y="330" font-size="14" text-anchor="end" fill="currentColor">the EMSA → ChIP → knockout ladder generalizes to every claim</text></g>
${LADDER_BOX(60, 346, 260, 'EMSA', 'binds the DNA in vitro', 'fig-muted')}
${LADDER_BOX(370, 346, 260, 'ChIP', 'occupies the site in living cells', 'fig-accent')}
${LADDER_BOX(680, 346, 260, 'knockout + rescue', 'required in the organism', 'fig-accent-2')}
<g class="fig-muted">
<line x1="324" y1="375" x2="364" y2="375" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bt-tree-m)"/>
<line x1="634" y1="375" x2="674" y2="375" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bt-tree-m)"/>
</g>
<text x="500" y="438" font-size="15" text-anchor="middle" fill="currentColor">Name the technique and the ONE claim it can support before you read the answer choices</text>
</svg>`

export const mcatBiotechnologyFigures: DeckFigurePlacement[] = [
  {
    at: 'Restriction Enzymes — Molecular Scissors',
    mode: 'lead',
    figure: {
      svg: restrictionSvg,
      alt:
        'Left: the EcoRI site drawn as two rows of base boxes, top 5 prime G A A T T C 3 prime and bottom 3 prime C T T A A G 5 prime — a palindrome that reads the same 5 prime to 3 prime on both strands. A red dashed staggered cut line passes after the G on the top strand and before the G on the bottom strand. Below, the two product fragments have blue 5 prime AATT single-stranded overhangs: sticky ends, so any two EcoRI fragments anneal whatever their source, and DNA ligase then seals the phosphodiester bonds. Right top: blunt ends, a straight cut through both strands with no overhang — ligatable but inefficient and unselective. Right bottom: fragment counting — a linear molecule with 2 red cut sites gives 3 fragments (n sites give n plus 1); a circle with 2 sites gives 2 fragments (n sites give n). Footer: restriction enzymes are a bacterial defence; a paired methylase protects the host’s own sites so only foreign DNA is cut.',
      caption: 'Palindromic site, staggered cut → sticky ends; and the n+1 (linear) vs n (circular) fragment rule.',
    },
    blocks: [
      '- **Palindromic** site (EcoRI GAATTC); staggered cut → **sticky ends** that anneal to any same-enzyme fragment',
      '- Blunt = straight cut, unselective · **ligase** pastes · linear n sites → **n+1** fragments, circular → **n**',
    ],
  },
  {
    at: 'Cloning a Gene',
    mode: 'lead',
    figure: {
      svg: cloningSvg,
      alt:
        'Five numbered steps left to right. 1 Cut, same enzyme: a plasmid circle with a blue ori arc, a red ampR antibiotic-resistance arc and a grey multiple cloning site inside lacZ, cut at the MCS; beside it a cDNA insert with matching sticky ends. 2 Ligate: the recombinant plasmid now carries the blue insert where the MCS was; ligase seals the joints. 3 Transform: a bacterium ellipse containing the plasmid. 4 Select: an antibiotic agar plate where only plasmid-bearing colonies grow. 5 Screen: an X-gal plate with white colonies (insert interrupts lacZ) and blue colonies (empty vector, lacZ intact). Footer: bacteria cannot splice, so the cDNA made from mature mRNA, intron-free, is cloned behind a bacterial promoter; proteins needing glycosylation or complex folding are made in yeast or mammalian cells because E. coli has no ER.',
      caption: 'Cut → ligate → transform → select (antibiotic) → screen (blue/white): the assembly line for a cloned gene.',
    },
    blocks: [
      '- Vector = **ori** + **selectable marker** + **MCS**; cut vector and insert with the same enzyme, ligate, transform',
      '- **Select** on antibiotic, **screen** blue/white (white = insert); express **cDNA** — bacteria cannot splice',
    ],
  },
  {
    at: 'PCR — Copying',
    mode: 'replace-table',
    figure: {
      svg: pcrSvg,
      alt:
        'Top: a blue temperature trace stepping through two PCR cycles against dashed reference lines at about 95, 72 and 50 to 65 degrees Celsius. Each cycle is denature at about 95 (strands separate), anneal at about 50 to 65 (two primers bind, flanking the target), extend at about 72 (Taq, thermostable, survives the 95 degree step, builds 5 prime to 3 prime); a bracket marks one cycle, repeated about 30 times. Bottom left: bars for copies after 0 to 5 cycles reading 1, 2, 4, 8, 16, 32 — copies equal 2 to the n after n cycles. Bottom right: 30 cycles give about 10 to the 9 copies; the tube holds template, two primers, dNTPs, Taq and magnesium; no helicase (heat unwinds), no primase (primers supplied), no ligase (the product is continuous).',
      caption: 'Three temperature steps per cycle; copies double each cycle (2ⁿ), so 30 cycles ≈ 10⁹.',
    },
    blocks: [
      '- **Denature ~95 °C** → **anneal ~50–65 °C** (2 primers flank the target) → **extend ~72 °C** (Taq, 5′→3′)',
      '- Exponential: ~$2^n$ copies after n cycles; 30 cycles ≈ $10^9$',
      '- In the tube: template, primers, dNTPs, Taq, Mg²⁺ — **no helicase, primase or ligase**',
      '- **RT-PCR** amplifies from mRNA; **qPCR** reads fluorescence each cycle (earlier threshold = more template)',
    ],
  },
  {
    at: 'Gel Electrophoresis',
    mode: 'lead',
    figure: {
      svg: gelSvg,
      alt:
        'Left: an agarose gel drawn as a tall rounded rectangle with three wells at the top beside the negative electrode and the positive electrode (anode) at the bottom; a grey arrow shows migration downward. The ladder lane has seven bands, large near the wells and small far down; sample A has two blue bands and sample B two red bands lower down (smaller fragments). Right: why it sorts by size — the phosphate backbone gives uniform negative charge, the field pulls every fragment toward plus, and the agarose mesh sieves so small fragments run far while large ones stay near the wells. A small illustrative graph shows migration distance falling roughly linearly as log(size) rises; the ladder calibrates each gel. Footer: proteins are first coated and unfolded by SDS so SDS-PAGE sorts by size alone; native gels and isoelectric focusing sort by shape or charge.',
      caption: 'Everything runs toward +; small fragments run far. Distance vs log(size) is roughly a line (illustrative).',
    },
    blocks: [
      '- Uniform − charge from the backbone → all DNA runs to the **anode (+)**; the mesh sieves: **small runs FAR**',
      '- Distance falls ~linearly with **log(size)**; a ladder calibrates · **SDS** makes proteins size-only (SDS-PAGE)',
    ],
  },
  {
    at: 'The Blot Family',
    mode: 'replace-table',
    figure: {
      svg: blotsSvg,
      alt:
        'Three columns, Southern, Northern, Western, each drawn as the same pipeline: the molecule (DNA, RNA, protein) is run on a gel (SDS-PAGE for protein), transferred to a membrane, and probed. Southern and Northern use a red labelled nucleic-acid probe (labelled DNA for Southern, DNA or RNA for Northern) that pairs with one band; Western uses a red Y-shaped antibody. Each column ends with a readout membrane showing one band and the question it answers: Southern — gene present, copy number, restriction-site change; Northern — transcribed here, transcript size or splicing; Western — protein made, what size, how much. Footer: the mnemonic SNoW DRoP (Southern DNA, Northern RNA, Western Protein); a blot is electrophoresis plus transfer to a membrane plus a specific probe, and the probe turns a smear of molecules into one readable band.',
      caption: 'Same pipeline three times — gel, transfer, probe — and the probe decides which molecule you see.',
    },
    blocks: [
      '- **Southern** DNA · **Northern** RNA · **Western** protein — SNoW DRoP',
      '- Probe: labelled complementary nucleic acid for S/N, an **antibody** for W',
      '- Blot = electrophoresis + transfer + probe; specificity comes from the probe',
      '- **RFLP**: a mutation that kills a site → one LARGER band (sickle cell); heterozygotes show BOTH patterns',
    ],
  },
  {
    at: 'Sanger Sequencing',
    mode: 'lead',
    figure: {
      svg: sangerSvg,
      alt:
        'Left: a template strand drawn 3 prime to 5 prime with bases T G C A A, a red primer, and a growing blue strand A C that ends in a red ddG box marked no 3 prime OH, so the chain stops there. Below, the nested fragment family: five fragments of increasing length, each ending in a red box with the ddNTP that terminated it — A, C, G, T, T. Note: AZT and acyclovir use the same missing 3 prime OH logic. Right: a gel lane with five bands, shortest at the bottom; a blue arrow reads bottom to top, giving the new strand 5 prime to 3 prime: ACGTT. The read is the complement of the template; the template written 5 prime to 3 prime is its reverse complement, AACGT (illustrative 5-base sequence). Modern Sanger uses four fluorescent ddNTP colours in one capillary. Next-generation sequencing: massively parallel short reads assembled by overlap — cheaper per base, used for genomes, exomes and RNA-seq (sequencing cDNA).',
      caption: 'A ddNTP has no 3′-OH, so every stop marks a base; read the lane bottom-up for the new strand 5′→3′.',
    },
    blocks: [
      '- **ddNTPs** (no 3′-OH) terminate chains → a nested family; read the gel **bottom → up** = new strand 5′→3′',
      '- The read is the **complement** of the template · **NGS** = parallel short reads assembled by overlap (RNA-seq)',
    ],
  },
  {
    at: 'CRISPR-Cas9',
    mode: 'lead',
    figure: {
      svg: crisprSvg,
      alt:
        'Left: a genomic DNA duplex passes through a dashed blue Cas9 outline; a red guide RNA base-pairs with about 20 base pairs of the DNA and a red X marks where Cas9 cuts both strands, a double-strand break. An arrow leads to a box labelled the CELL, which repairs the break, and the path forks. Red upper branch, NHEJ: the rejoined duplex has an indel kink — error-prone indels cause a frameshift knockout. Blue lower branch, HDR: with a supplied dashed template, the duplex carries a precise edit or insertion — template-guided, mainly in dividing cells. Footer: reprogramming means changing a 20-nucleotide RNA, not engineering a new protein; the cell’s repair choice decides the outcome; the origin is a bacterial adaptive immune system that keeps phage mug shots, a defence repurposed like restriction enzymes.',
      caption: 'Guide RNA aims, Cas9 cuts, the cell repairs: NHEJ gives a knockout, HDR with a template gives a precise edit.',
    },
    blocks: [
      '- **Guide RNA** (~20 nt) targets by base-pairing; **Cas9** makes a double-strand break — retarget by changing the RNA',
      '- Repair decides: **NHEJ** → indels → frameshift **knockout**; **HDR + template** → precise edit (dividing cells)',
    ],
  },
  {
    at: 'Transgenics, Knock-ins',
    mode: 'lead',
    figure: {
      svg: crelox,
      alt:
        'Left, Cre-lox: a floxed allele — gene X flanked by two red loxP triangles — is present in every cell of the animal. Cre recombinase is expressed under a liver-specific promoter. In a liver cell, Cre is on and excises the gene: the chromosome keeps a single loxP and gene X is cut out as a small circle and lost. In any other cell there is no Cre, so gene X stays intact between its two loxP sites. Why: it dodges embryonic lethality and isolates one tissue’s function. Right: transgenic — extra DNA inserted at a random site, with your chosen promoter setting where it is expressed; knock-in — precise replacement at the endogenous locus, keeping native regulation; reporter fusions — a promoter driving GFP reports where and when the promoter is active, while a protein fused to GFP reports where the protein localizes.',
      caption: 'Floxed gene + tissue-specific Cre = deletion in one tissue only; transgenic vs knock-in vs reporter constructs.',
    },
    blocks: [
      '- **Cre-lox**: loxP-flanked (“floxed”) gene is excised ONLY where Cre is expressed → tissue-specific knockout',
      '- **Transgenic** random insert, your promoter · **knock-in** at the native locus · GFP **reporter** vs **fusion**',
    ],
  },
  {
    at: 'The Master Decision Tree',
    mode: 'lead',
    figure: {
      svg: treeSvg,
      alt:
        'A decision tree. Root: 1, what molecule? Three branches: DNA, RNA, protein. Under each, 2, what property, with the matching technique: DNA — amount qPCR, size or form Southern or gel digest, sequence Sanger or NGS; RNA — amount RT-qPCR or RNA-seq, size or form northern (splicing); protein — amount ELISA, size or form western, location immunofluorescence or GFP fusion, interaction co-IP or yeast two-hybrid. Below, 3, how strong a claim: a three-rung ladder of boxes joined by arrows — EMSA (binds the DNA in vitro), ChIP (occupies the site in living cells), knockout plus rescue (required in the organism); this EMSA to ChIP to knockout ladder generalizes to every claim. Footer: name the technique and the one claim it can support before reading the answer choices.',
      caption: 'Molecule → property → technique, then ask how strong the claim is: in vitro, in cells, or in the organism.',
    },
    blocks: [
      '- Ask **what molecule** (DNA / RNA / protein), then **what property** (amount, size/form, location, interaction)',
      '- Then **how strong a claim**: in-vitro binding (EMSA) → in-cell occupancy (ChIP) → requirement (knockout + rescue)',
    ],
  },
]
