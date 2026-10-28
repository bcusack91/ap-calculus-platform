import type { DeckFigurePlacement } from './index'

/**
 * DNA Replication & Repair (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing is ours, drawn from the concept: a ladder of boxes for the
 * duplex, a zoom strip for packaging, three density tubes for the 1958
 * models, a fork of straight lines with boxes for the enzymes, a staircase
 * for fidelity, a chromosome end that loses a primer, five repair panels, a
 * CDK curve for licensing and a circle-vs-line for the scorecard. No textbook,
 * prep-company or AAMC figure was copied. Curves that are not data say
 * "illustrative"; the only numbers drawn are the ones the lesson states
 * (2 vs 3 H-bonds, ~2 nm, ~147 bp / 1.7 turns, the 10⁵ → 10⁹–10¹⁰ error
 * rates, Meselson–Stahl 1958). No structural formulas — bases are boxes.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so every
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-dr-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 12) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 5}" font-size="${r + 3}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

const f = (v: number) => +v.toFixed(1)

/** Regular polygon (n sides) of radius r centred on (cx, cy), first vertex at angle a0 (degrees). */
const POLY = (cx: number, cy: number, r: number, n: number, a0 = -90, extra = '') => {
  const pts: string[] = []
  for (let i = 0; i < n; i++) {
    const a = ((a0 + (360 * i) / n) * Math.PI) / 180
    pts.push(`${f(cx + r * Math.cos(a))},${f(cy + r * Math.sin(a))}`)
  }
  return `<polygon points="${pts.join(' ')}" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" ${extra}/>`
}

/** Circular arc path from angle a0 to a1 (degrees, clockwise positive in SVG) on a circle. */
const ARC = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const p = (a: number) => `${f(cx + r * Math.cos((a * Math.PI) / 180))} ${f(cy + r * Math.sin((a * Math.PI) / 180))}`
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0
  const sweep = a1 > a0 ? 1 : 0
  return `M${p(a0)} A ${r} ${r} 0 ${large} ${sweep} ${p(a1)}`
}

/** Polyline points for y = fn(x) sampled n times. */
const CURVE = (fn: (s: number) => number, s0: number, s1: number, n: number, sx: (s: number) => number, sy: (v: number) => number) => {
  const pts: string[] = []
  for (let i = 0; i <= n; i++) {
    const s = s0 + ((s1 - s0) * i) / n
    pts.push(`${f(sx(s))},${f(sy(fn(s)))}`)
  }
  return pts.join(' ')
}

/* ───────────────────────── 1 — The duplex as a ladder + one nucleotide (lead, 1000×460) ───────────────────────── */

const BASE_BOX = (x: number, y: number, label: string, purine: boolean) =>
  `<rect x="${x - 22}" y="${y}" width="44" height="46" rx="8" fill="currentColor" fill-opacity="${purine ? 0.18 : 0.08}" stroke="currentColor" stroke-width="2"/>` +
  `<text x="${x}" y="${y + 31}" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`

const HBONDS = (x: number, n: number) => {
  const ys = n === 2 ? [220, 240] : [216, 230, 244]
  return ys.map((y) => `<line x1="${x - 11}" y1="${y}" x2="${x + 11}" y2="${y}" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3"/>`).join('')
}

const BACKBONE = (y: number, xs: number[]) =>
  xs
    .map(
      (x, i) =>
        `<rect x="${x - 13}" y="${y - 13}" width="26" height="26" rx="6" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>` +
        `<text x="${x}" y="${y + 6}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">S</text>` +
        (i < xs.length - 1
          ? `<circle cx="${x + 40}" cy="${y}" r="10" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><text x="${x + 40}" y="${y + 5}" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">P</text>`
          : ''),
    )
    .join('')

const ladderXs = [120, 200, 280, 360, 440, 520]
const ladderTop = ['A', 'T', 'G', 'C', 'T', 'G']
const ladderBot = ['T', 'A', 'C', 'G', 'A', 'C']
const ladderSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dr-lad')}</defs>
<text x="40" y="44" font-size="22" font-weight="700" fill="currentColor">Antiparallel strands</text>
<g class="fig-muted"><text x="262" y="44" font-size="18" fill="currentColor">one runs 5'→3', its partner 3'→5'</text></g>
<line x1="80" y1="140" x2="560" y2="140" stroke="currentColor" stroke-width="3"/>
<line x1="80" y1="320" x2="560" y2="320" stroke="currentColor" stroke-width="3"/>
${BACKBONE(140, ladderXs)}
${BACKBONE(320, ladderXs)}
${ladderXs.map((x) => `<line x1="${x}" y1="153" x2="${x}" y2="166" stroke="currentColor" stroke-width="2"/><line x1="${x}" y1="294" x2="${x}" y2="307" stroke="currentColor" stroke-width="2"/>`).join('')}
${ladderXs.map((x, i) => BASE_BOX(x, 166, ladderTop[i], ladderTop[i] === 'A' || ladderTop[i] === 'G') + BASE_BOX(x, 248, ladderBot[i], ladderBot[i] === 'A' || ladderBot[i] === 'G')).join('')}
${ladderXs.map((x, i) => HBONDS(x, ladderTop[i] === 'A' || ladderTop[i] === 'T' ? 2 : 3)).join('')}
<text x="62" y="147" font-size="22" font-weight="700" text-anchor="end" fill="currentColor">5'</text>
<text x="578" y="147" font-size="22" font-weight="700" fill="currentColor">3'</text>
<text x="62" y="327" font-size="22" font-weight="700" text-anchor="end" fill="currentColor">3'</text>
<text x="578" y="327" font-size="22" font-weight="700" fill="currentColor">5'</text>
<g class="fig-accent">
<defs>${ARROW('arr-dr-lad-b')}</defs>
<line x1="450" y1="100" x2="550" y2="100" stroke="currentColor" stroke-width="3" marker-end="url(#arr-dr-lad-b)"/>
<text x="440" y="106" font-size="18" font-weight="700" text-anchor="end" fill="currentColor">5' → 3'</text>
<line x1="240" y1="360" x2="140" y2="360" stroke="currentColor" stroke-width="3" marker-end="url(#arr-dr-lad-b)"/>
<text x="250" y="366" font-size="18" font-weight="700" fill="currentColor">3' ← 5'</text>
</g>
<g class="fig-muted">
<path d="M200 118 L200 108 L280 108 L280 118" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="240" y="98" font-size="16" text-anchor="middle" fill="currentColor">phosphodiester: 3'-OH → 5'-P</text>
</g>
<text x="320" y="404" font-size="18" text-anchor="middle" fill="currentColor">A=T 2 H-bonds · G≡C 3 → GC-rich DNA melts at a higher Tₘ</text>
<text x="320" y="432" font-size="18" text-anchor="middle" fill="currentColor">purine (2 rings) + pyrimidine (1 ring) per rung → width ~2 nm</text>
<g class="fig-muted"><line x1="612" y1="30" x2="612" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<text x="810" y="44" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">One nucleotide</text>
<circle cx="690" cy="150" r="24" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
<text x="690" y="157" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">P</text>
<text x="690" y="106" font-size="17" text-anchor="middle" fill="currentColor">phosphate</text>
<line x1="714" y1="150" x2="750" y2="150" stroke="currentColor" stroke-width="3"/>
<text x="734" y="140" font-size="15" text-anchor="middle" fill="currentColor">5'</text>
<rect x="750" y="122" width="112" height="56" rx="12" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
<text x="806" y="156" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">deoxyribose</text>
<line x1="862" y1="150" x2="886" y2="150" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">
<rect x="886" y="122" width="96" height="56" rx="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<text x="934" y="156" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">base</text>
</g>
<g class="fig-accent-2">
<line x1="772" y1="178" x2="748" y2="214" stroke="currentColor" stroke-width="3"/>
<text x="740" y="240" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">3'-OH</text>
<text x="740" y="262" font-size="16" text-anchor="middle" fill="currentColor">chain grows here</text>
</g>
<line x1="840" y1="178" x2="870" y2="214" stroke="currentColor" stroke-width="3"/>
<text x="880" y="240" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">2'-H</text>
<g class="fig-muted"><text x="880" y="262" font-size="16" text-anchor="middle" fill="currentColor">(RNA has 2'-OH)</text></g>
<g class="fig-muted">
<path d="M752 290 L752 300 L980 300 L980 290" fill="none" stroke="currentColor" stroke-width="2"/>
</g>
<text x="866" y="324" font-size="17" text-anchor="middle" fill="currentColor">base + sugar = nucleoside</text>
<text x="866" y="346" font-size="17" text-anchor="middle" fill="currentColor">+ phosphate(s) = nucleotide</text>
${POLY(664, 400, 13, 6, 0)}${POLY(687, 400, 10, 5, -90)}
<text x="712" y="406" font-size="17" fill="currentColor">purines A, G — two rings</text>
${POLY(664, 436, 13, 6, 0)}
<text x="712" y="442" font-size="17" fill="currentColor">pyrimidines C, T (U) — one ring</text>
</svg>`

/* ───────────────────────── 2 — Packaging: helix → nucleosome → fibre → chromosome (lead, 1000×460) ───────────────────────── */

const helixSx = (t: number) => 40 + 160 * t
const helixY1 = (t: number) => 200 + 48 * Math.sin(t * 2 * Math.PI * 1.5)
const helixY2 = (t: number) => 200 + 48 * Math.sin(t * 2 * Math.PI * 1.5 + 2.2)
const helixRungs = () => {
  let s = ''
  for (let i = 0; i <= 48; i++) {
    const t = i / 48
    const y1 = helixY1(t)
    const y2 = helixY2(t)
    if (Math.abs(y1 - y2) > 18) s += `<line x1="${f(helixSx(t))}" y1="${f(y1)}" x2="${f(helixSx(t))}" y2="${f(y2)}" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.6"/>`
  }
  return s
}
const NUCLEOSOME = (cx: number, cy: number) =>
  `<circle cx="${cx}" cy="${cy}" r="22" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>` +
  `<path d="${ARC(cx, cy, 30, -60, 250)}" fill="none" stroke="currentColor" stroke-width="3"/>`
const packagingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="120" y="46" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Double helix</text>
<text x="390" y="46" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Nucleosomes</text>
<text x="640" y="46" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Chromatin fibre</text>
<text x="870" y="46" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Chromosome</text>
<g class="fig-muted"><text x="500" y="80" font-size="17" text-anchor="middle" fill="currentColor">histones (+, Lys/Arg-rich) grip the (−) phosphate backbone · acetylation loosens the grip</text></g>
${helixRungs()}
<polyline points="${CURVE(helixY1, 0, 1, 90, helixSx, (v) => v)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-accent"><polyline points="${CURVE(helixY2, 0, 1, 90, helixSx, (v) => v)}" fill="none" stroke="currentColor" stroke-width="3.5"/></g>
<g class="fig-muted">
<text x="86" y="134" font-size="15" text-anchor="middle" fill="currentColor">major</text>
<text x="141" y="134" font-size="15" text-anchor="middle" fill="currentColor">minor</text>
<line x1="86" y1="140" x2="86" y2="160" stroke="currentColor" stroke-width="1.5"/>
<line x1="141" y1="140" x2="141" y2="176" stroke="currentColor" stroke-width="1.5"/>
</g>
<text x="120" y="300" font-size="16" text-anchor="middle" fill="currentColor">B-DNA: right-handed, ~2 nm</text>
<text x="120" y="322" font-size="16" text-anchor="middle" fill="currentColor">TFs read the major groove</text>
<g class="fig-muted">
<defs>${ARROW('arr-dr-pk-m')}</defs>
<line x1="218" y1="200" x2="262" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-dr-pk-m)"/>
<line x1="520" y1="200" x2="548" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-dr-pk-m)"/>
<line x1="736" y1="200" x2="770" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-dr-pk-m)"/>
</g>
<line x1="272" y1="222" x2="291" y2="218" stroke="currentColor" stroke-width="3"/>
${NUCLEOSOME(320, 200)}${NUCLEOSOME(400, 200)}${NUCLEOSOME(480, 200)}
<line x1="334" y1="227" x2="384" y2="227" stroke="currentColor" stroke-width="3"/>
<line x1="414" y1="227" x2="464" y2="227" stroke="currentColor" stroke-width="3"/>
<line x1="494" y1="227" x2="512" y2="222" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<circle cx="334" cy="227" r="6" fill="currentColor"/><circle cx="414" cy="227" r="6" fill="currentColor"/><circle cx="494" cy="227" r="6" fill="currentColor"/>
<text x="352" y="256" font-size="15" fill="currentColor">H1 seals the linker</text>
</g>
<text x="400" y="300" font-size="16" text-anchor="middle" fill="currentColor">~147 bp, 1.7 turns per octamer</text>
<text x="400" y="322" font-size="16" text-anchor="middle" fill="currentColor">(2× H2A, H2B, H3, H4)</text>
${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<circle cx="${566 + i * 21}" cy="${i % 2 ? 214 : 186}" r="12" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>`).join('')}
<polyline points="${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `${566 + i * 21},${i % 2 ? 214 : 186}`).join(' ')}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="640" y="300" font-size="16" text-anchor="middle" fill="currentColor">nucleosomes pack into</text>
<text x="640" y="322" font-size="16" text-anchor="middle" fill="currentColor">fibres and loops</text>
<path d="M842 120 L898 280 M898 120 L842 280" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="26" stroke-linecap="round"/>
<path d="M842 120 L898 280 M898 120 L842 280" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="870" cy="200" r="11" fill="currentColor"/>
<text x="870" y="300" font-size="16" text-anchor="middle" fill="currentColor">maximal compaction</text>
<text x="870" y="322" font-size="16" text-anchor="middle" fill="currentColor">(mitosis only)</text>
<g class="fig-accent">
${[0, 1, 2, 3, 4].map((i) => `<circle cx="${300 + i * 30}" cy="392" r="8" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>`).join('')}
<line x1="300" y1="392" x2="420" y2="392" stroke="currentColor" stroke-width="1.5"/>
<text x="360" y="430" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">euchromatin — open, active</text>
</g>
<g class="fig-accent-2">
${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<circle cx="${640 + i * 15}" cy="392" r="8" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>`).join('')}
<text x="700" y="430" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">heterochromatin — dense, quiet</text>
</g>
<g class="fig-muted"><text x="500" y="456" font-size="15" text-anchor="middle" fill="currentColor">replication must unpack this, then rebuild it behind the fork</text></g>
</svg>`

/* ───────────────────────── 3 — The three 1958 models and their gradient bands (replace-table, 560×440) ───────────────────────── */

const STRAND = (x: number, y0: number, y1: number, cls: 'old' | 'new') =>
  `<g class="${cls === 'old' ? 'fig-accent-2' : 'fig-accent'}"><line x1="${x}" y1="${y0}" x2="${x}" y2="${y1}" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></g>`
const PATCHY = (x: number, y0: number, y1: number, startOld: boolean) => {
  const n = 4
  const h = (y1 - y0) / n
  let s = ''
  for (let i = 0; i < n; i++) s += STRAND(x, y0 + i * h, y0 + (i + 1) * h - 2, (i % 2 === 0) === startOld ? 'old' : 'new')
  return s
}
const DUPLEX = (cx: number, y0: number, y1: number, left: 'old' | 'new' | 'mix', right: 'old' | 'new' | 'mix', startOld = true) =>
  (left === 'mix' ? PATCHY(cx - 7, y0, y1, startOld) : STRAND(cx - 7, y0, y1, left)) +
  (right === 'mix' ? PATCHY(cx + 7, y0, y1, !startOld) : STRAND(cx + 7, y0, y1, right))
const TUBE = (x: number, bands: [number, number][]) =>
  `<rect x="${x}" y="222" width="40" height="90" rx="9" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>` +
  bands.map(([y, w]) => `<line x1="${x + 6}" y1="${y}" x2="${x + 34}" y2="${y}" stroke="currentColor" stroke-width="${w}"/>`).join('')
const LIGHT = 242
const HYBRID = 267
const HEAVY = 292
const modelsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-dr-ms')}</defs>
<g class="fig-accent"><rect x="212" y="8" width="176" height="366" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/></g>
<text x="120" y="30" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Conservative</text>
<text x="300" y="30" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Semiconservative</text>
<text x="470" y="30" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Dispersive</text>
<g class="fig-muted">
<text x="8" y="78" font-size="13" fill="currentColor">parent</text>
<text x="8" y="162" font-size="13" fill="currentColor">1 round</text>
<text x="8" y="${LIGHT + 4}" font-size="13" fill="currentColor">light</text>
<text x="8" y="${HYBRID + 4}" font-size="13" fill="currentColor">hybrid</text>
<text x="8" y="${HEAVY + 4}" font-size="13" fill="currentColor">heavy</text>
</g>
${[120, 300, 470].map((c) => DUPLEX(c, 48, 98, 'old', 'old') + `<line x1="${c}" y1="106" x2="${c}" y2="126" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dr-ms)"/>`).join('')}
${DUPLEX(90, 136, 186, 'old', 'old')}${DUPLEX(150, 136, 186, 'new', 'new')}
${DUPLEX(270, 136, 186, 'old', 'new')}${DUPLEX(330, 136, 186, 'old', 'new')}
${DUPLEX(440, 136, 186, 'mix', 'mix', true)}${DUPLEX(500, 136, 186, 'mix', 'mix', false)}
<g class="fig-muted">
${[120, 300, 470].map((c) => `<text x="${c - 28}" y="214" font-size="13" text-anchor="middle" fill="currentColor">gen 1</text><text x="${c + 28}" y="214" font-size="13" text-anchor="middle" fill="currentColor">gen 2</text>`).join('')}
</g>
${TUBE(72, [[HEAVY, 7], [LIGHT, 7]])}${TUBE(128, [[HEAVY, 4], [LIGHT, 10]])}
${TUBE(252, [[HYBRID, 7]])}${TUBE(308, [[HYBRID, 7], [LIGHT, 7]])}
${TUBE(422, [[HYBRID, 7]])}${TUBE(478, [[254, 7]])}
<g class="fig-muted">
<text x="120" y="340" font-size="14" text-anchor="middle" fill="currentColor">ruled out after gen 1</text>
<text x="470" y="340" font-size="14" text-anchor="middle" fill="currentColor">ruled out after gen 2</text>
</g>
<g class="fig-accent">
<text x="300" y="342" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">observed</text>
<text x="300" y="362" font-size="14" text-anchor="middle" fill="currentColor">Meselson &amp; Stahl, 1958</text>
</g>
<g class="fig-accent-2"><line x1="40" y1="398" x2="72" y2="398" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></g>
<text x="82" y="403" font-size="15" fill="currentColor">old strand (¹⁵N, heavy)</text>
<g class="fig-accent"><line x1="296" y1="398" x2="328" y2="398" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></g>
<text x="338" y="403" font-size="15" fill="currentColor">new strand (¹⁴N, light)</text>
<g class="fig-muted"><text x="280" y="430" font-size="14" text-anchor="middle" fill="currentColor">CsCl gradient: one band per density, thickness ∝ amount</text></g>
</svg>`

/* ───────────────────────── 4 — The replication fork (lead, 1000×460) ───────────────────────── */

const POL = (cx: number, cy: number, label: string) =>
  `<rect x="${cx - 27}" y="${cy - 17}" width="54" height="34" rx="10" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>` +
  `<text x="${cx}" y="${cy + 6}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`
const forkSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dr-fk')}</defs>
<path d="M80 110 L560 110 L680 215 L960 215" fill="none" stroke="currentColor" stroke-width="3.5"/>
<path d="M80 350 L560 350 L680 245 L960 245" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="60" y="116" font-size="18" font-weight="700" text-anchor="end" fill="currentColor">3'</text>
<text x="60" y="356" font-size="18" font-weight="700" text-anchor="end" fill="currentColor">5'</text>
<g class="fig-muted"><text x="900" y="284" font-size="16" text-anchor="middle" fill="currentColor">parental duplex</text></g>
<g class="fig-muted">
<circle cx="850" cy="230" r="16" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<text x="850" y="176" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">topoisomerase</text>
<text x="850" y="198" font-size="16" text-anchor="middle" fill="currentColor">relaxes supercoils ahead</text>
<circle cx="637" cy="163" r="6" fill="currentColor"/><circle cx="655" cy="179" r="6" fill="currentColor"/><circle cx="673" cy="195" r="6" fill="currentColor"/>
<circle cx="636" cy="297" r="6" fill="currentColor"/><circle cx="654" cy="281" r="6" fill="currentColor"/><circle cx="672" cy="265" r="6" fill="currentColor"/>
<text x="620" y="142" font-size="16" fill="currentColor">SSBs</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-dr-fk-b')}</defs>
${POLY(690, 230, 26, 6, 0)}
<text x="712" y="292" font-size="18" fill="currentColor">helicase (ATP)</text>
<line x1="124" y1="126" x2="470" y2="126" stroke="currentColor" stroke-width="4" marker-end="url(#arr-dr-fk-b)"/>
${POL(498, 126, 'Pol III')}
<text x="498" y="60" font-size="18" text-anchor="middle" fill="currentColor">Pol III rides a sliding clamp</text>
<line x1="376" y1="334" x2="270" y2="334" stroke="currentColor" stroke-width="4" marker-end="url(#arr-dr-fk-b)"/>
<line x1="536" y1="334" x2="476" y2="334" stroke="currentColor" stroke-width="4" marker-end="url(#arr-dr-fk-b)"/>
${POL(448, 334, 'Pol III')}
<line x1="130" y1="334" x2="238" y2="334" stroke="currentColor" stroke-width="4"/>
<line x1="238" y1="334" x2="260" y2="334" stroke="currentColor" stroke-width="4" stroke-dasharray="4 3"/>
</g>
<g class="fig-muted"><ellipse cx="498" cy="126" rx="40" ry="26" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><text x="548" y="152" font-size="15" fill="currentColor">clamp</text></g>
<g class="fig-accent-2">
<line x1="100" y1="126" x2="124" y2="126" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
<line x1="376" y1="334" x2="400" y2="334" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
<line x1="536" y1="334" x2="560" y2="334" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
<circle cx="600" cy="315" r="15" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
<text x="616" y="342" font-size="17" fill="currentColor">primase</text>
<text x="86" y="131" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">5'</text>
</g>
<circle cx="264" cy="334" r="7" fill="none" stroke="currentColor" stroke-width="2.5"/>
${NUM(580, 282, '1')}${NUM(448, 300, '2')}${NUM(226, 310, '3')}${NUM(274, 310, '4')}
<text x="80" y="90" font-size="19" font-weight="700" fill="currentColor">LEADING: continuous, one primer, toward the fork</text>
<text x="80" y="386" font-size="19" font-weight="700" fill="currentColor">LAGGING: Okazaki fragments, one primer each, away from the fork</text>
<line x1="740" y1="372" x2="860" y2="372" stroke="currentColor" stroke-width="3" marker-end="url(#arr-dr-fk)"/>
<text x="810" y="398" font-size="17" text-anchor="middle" fill="currentColor">fork moves</text>
${NUM(92, 418, '1')}<text x="110" y="424" font-size="17" fill="currentColor">primase lays an RNA primer</text>
${NUM(430, 418, '2')}<text x="448" y="424" font-size="17" fill="currentColor">Pol III extends it 5'→3' only</text>
${NUM(92, 444, '3')}<text x="110" y="450" font-size="17" fill="currentColor">Pol I swaps the primer for DNA</text>
${NUM(430, 444, '4')}<text x="448" y="450" font-size="17" fill="currentColor">ligase seals the nick</text>
</svg>`

/* ───────────────────────── 5 — Three tiers of accuracy (lead, 1000×460) ───────────────────────── */

const TICKS = (x0: number, x1: number, y: number, dir: 1 | -1, step = 20) => {
  let s = ''
  for (let x = x0; x <= x1; x += step) s += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + dir * 12}" stroke="currentColor" stroke-width="2"/>`
  return s
}
const fidelitySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dr-fid')}</defs>
<text x="180" y="44" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">1 · Base selection</text>
<text x="500" y="44" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">2 · Proofreading</text>
<text x="830" y="44" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">3 · Mismatch repair</text>
<g class="fig-muted"><text x="500" y="66" font-size="15" text-anchor="middle" fill="currentColor">during synthesis</text><text x="830" y="66" font-size="15" text-anchor="middle" fill="currentColor">AFTER the fork has passed</text><text x="180" y="66" font-size="15" text-anchor="middle" fill="currentColor">at the active site</text></g>
<g class="fig-muted"><rect x="70" y="82" width="220" height="64" rx="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/></g>
<g class="fig-accent">
<rect x="106" y="94" width="68" height="40" rx="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<rect x="186" y="94" width="68" height="40" rx="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<text x="140" y="121" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">A</text>
<text x="220" y="121" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">T</text>
<line x1="174" y1="108" x2="186" y2="108" stroke="currentColor" stroke-width="2"/><line x1="174" y1="120" x2="186" y2="120" stroke="currentColor" stroke-width="2"/>
</g>
<text x="180" y="172" font-size="17" text-anchor="middle" fill="currentColor">right geometry fits the site</text>
<g class="fig-muted"><rect x="70" y="192" width="220" height="64" rx="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/></g>
<g class="fig-accent-2">
<rect x="106" y="204" width="68" height="40" rx="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<rect x="186" y="204" width="68" height="40" rx="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" transform="rotate(14 220 224)"/>
<text x="140" y="231" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">G</text>
<text x="220" y="231" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(14 220 224)">T</text>
<text x="180" y="282" font-size="17" text-anchor="middle" fill="currentColor">wrong pair distorts it → rejected</text>
</g>
<line x1="380" y1="100" x2="620" y2="100" stroke="currentColor" stroke-width="3"/>
${TICKS(390, 610, 100, 1)}
<g class="fig-accent">
<line x1="380" y1="140" x2="540" y2="140" stroke="currentColor" stroke-width="3"/>
${TICKS(390, 530, 140, -1)}
<ellipse cx="560" cy="122" rx="56" ry="42" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
<text x="560" y="178" font-size="15" text-anchor="middle" fill="currentColor">polymerase</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-dr-fid-r')}</defs>
<line x1="540" y1="140" x2="562" y2="146" stroke="currentColor" stroke-width="3"/>
<line x1="552" y1="143" x2="556" y2="130" stroke="currentColor" stroke-width="2.5"/>
<path d="M572 196 C 560 214, 500 214, 480 198" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-dr-fid-r)"/>
<text x="500" y="236" font-size="17" text-anchor="middle" fill="currentColor">3'→5' exonuclease backs up and clips it</text>
</g>
<text x="500" y="266" font-size="16" text-anchor="middle" fill="currentColor">proofreading runs 3'→5' — primer removal runs 5'→3'</text>
<line x1="700" y1="104" x2="960" y2="104" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted">
${[740, 830, 920].map((x) => `<line x1="${x}" y1="104" x2="${x}" y2="90" stroke="currentColor" stroke-width="2"/><text x="${x}" y="84" font-size="13" text-anchor="middle" fill="currentColor">CH₃</text>`).join('')}
<text x="700" y="126" font-size="14" fill="currentColor">old strand — methylated (E. coli)</text>
</g>
<g class="fig-accent">
<path d="M700 150 L838 150 L848 136 L858 150 L960 150" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="700" y="172" font-size="14" fill="currentColor">new strand — not yet methylated</text>
</g>
<g class="fig-accent-2">
<path d="M800 186 L800 194 L900 194 L900 186" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="850" y="214" font-size="16" text-anchor="middle" fill="currentColor">excise NEW strand, resynthesize</text>
<text x="830" y="282" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">MMR lost → Lynch syndrome</text>
</g>
<g class="fig-accent">
<polyline points="60,330 300,330 380,364 620,364 700,398 940,398" fill="none" stroke="currentColor" stroke-width="3.5"/>
</g>
<text x="180" y="320" font-size="17" text-anchor="middle" fill="currentColor">~1 error per 10⁵ nucleotides</text>
<text x="500" y="354" font-size="17" text-anchor="middle" fill="currentColor">~100× better</text>
<text x="820" y="424" font-size="17" text-anchor="middle" fill="currentColor">×100–1000 more → ~1 per 10⁹–10¹⁰ bp</text>
<g class="fig-muted"><text x="60" y="440" font-size="15" fill="currentColor">error rate falls with each filter (illustrative staircase)</text></g>
</svg>`

/* ───────────────────────── 6 — The end-replication problem and telomerase (lead, 1000×460) ───────────────────────── */

const FRAG = (x0: number, x1: number, y: number, primerW: number) =>
  `<g class="fig-accent"><line x1="${x0}" y1="${y}" x2="${x1 - primerW}" y2="${y}" stroke="currentColor" stroke-width="4"/></g>` +
  (primerW > 0 ? `<g class="fig-accent-2"><line x1="${x1 - primerW}" y1="${y}" x2="${x1}" y2="${y}" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></g>` : '')
const telomereSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dr-tel')}</defs>
<text x="60" y="46" font-size="20" font-weight="700" fill="currentColor">The problem: the last primer</text>
<text x="540" y="46" font-size="20" font-weight="700" fill="currentColor">The fix: telomerase</text>
<g class="fig-muted"><line x1="500" y1="30" x2="500" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<line x1="60" y1="96" x2="450" y2="96" stroke="currentColor" stroke-width="3"/>
<text x="462" y="102" font-size="17" font-weight="700" fill="currentColor">3'</text>
<g class="fig-muted"><text x="60" y="82" font-size="15" fill="currentColor">template strand</text></g>
${FRAG(70, 184, 118, 24)}${FRAG(200, 324, 118, 24)}${FRAG(340, 450, 118, 30)}
<g class="fig-accent-2"><text x="434" y="150" font-size="15" text-anchor="middle" fill="currentColor">last RNA primer</text></g>
<line x1="250" y1="150" x2="250" y2="176" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dr-tel)"/>
<line x1="60" y1="196" x2="450" y2="196" stroke="currentColor" stroke-width="3"/>
${FRAG(70, 184, 218, 0)}${FRAG(184, 324, 218, 0)}${FRAG(324, 420, 218, 0)}
<g class="fig-muted"><rect x="420" y="212" width="30" height="12" rx="4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/></g>
<g class="fig-accent-2"><text x="250" y="250" font-size="17" text-anchor="middle" fill="currentColor">primer removed — no 3'-OH upstream, so the gap stays</text></g>
<line x1="250" y1="262" x2="250" y2="288" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dr-tel)"/>
<line x1="60" y1="306" x2="420" y2="306" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent"><line x1="70" y1="322" x2="420" y2="322" stroke="currentColor" stroke-width="4"/></g>
<g class="fig-muted"><line x1="420" y1="306" x2="450" y2="306" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/><text x="466" y="318" font-size="14" fill="currentColor">lost</text></g>
<text x="250" y="354" font-size="17" text-anchor="middle" fill="currentColor">every division, the end gets shorter</text>
<text x="60" y="400" font-size="16" fill="currentColor">telomeres = disposable repeat buffer (TTAGGG)</text>
<text x="60" y="424" font-size="16" fill="currentColor">a protein cap keeps the ends from reading as breaks</text>
<line x1="540" y1="140" x2="780" y2="140" stroke="currentColor" stroke-width="3"/>
<line x1="540" y1="162" x2="700" y2="162" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted"><text x="640" y="126" font-size="15" text-anchor="middle" fill="currentColor">parental 3' overhang</text></g>
<g class="fig-accent">
<defs>${ARROW('arr-dr-tel-b')}</defs>
<ellipse cx="815" cy="160" rx="95" ry="58" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>
<text x="815" y="90" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">telomerase</text>
<line x1="780" y1="140" x2="868" y2="140" stroke="currentColor" stroke-width="4" stroke-dasharray="7 5" marker-end="url(#arr-dr-tel-b)"/>
<text x="886" y="96" font-size="16" fill="currentColor">+ repeats →</text>
</g>
<g class="fig-accent-2">
<line x1="750" y1="168" x2="880" y2="168" stroke="currentColor" stroke-width="3"/>
${TICKS(760, 870, 168, -1, 15)}
<text x="815" y="196" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">its own RNA template</text>
</g>
<g class="fig-muted"><text x="815" y="238" font-size="15" text-anchor="middle" fill="currentColor">a reverse transcriptase</text></g>
<line x1="540" y1="272" x2="880" y2="272" stroke="currentColor" stroke-width="3"/>
${FRAG(550, 860, 294, 24)}
<text x="740" y="326" font-size="16" text-anchor="middle" fill="currentColor">normal priming + lagging synthesis fill the other strand</text>
<g class="fig-accent"><text x="540" y="400" font-size="16" font-weight="700" fill="currentColor">ON: germ cells, stem cells, most cancers (immortal)</text></g>
<g class="fig-accent-2"><text x="540" y="424" font-size="16" font-weight="700" fill="currentColor">OFF in most somatic cells → senescence (Hayflick)</text></g>
</svg>`

/* ───────────────────────── 7 — Five repair pathways as panels (replace-table, 560×440) ───────────────────────── */

const PANEL = (x: number, y: number, w: number, h: number, body: string) =>
  `<g transform="translate(${x} ${y})"><g class="fig-muted"><rect x="0" y="0" width="${w}" height="${h}" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/></g>${body}</g>`
const MINI_DUPLEX = (x0: number, x1: number, y: number, gap?: [number, number]) => {
  const seg = (a: number, b: number) => `<line x1="${a}" y1="${y}" x2="${b}" y2="${y}" stroke="currentColor" stroke-width="2.5"/><line x1="${a}" y1="${y + 18}" x2="${b}" y2="${y + 18}" stroke="currentColor" stroke-width="2.5"/>`
  let s = gap ? seg(x0, gap[0]) + seg(gap[1], x1) : seg(x0, x1)
  for (let x = x0 + 8; x < x1; x += 12) {
    if (gap && x > gap[0] - 4 && x < gap[1] + 4) continue
    s += `<line x1="${x}" y1="${y + 3}" x2="${x}" y2="${y + 15}" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.5"/>`
  }
  return s
}
const CAP = (lines: [string, string?][], w: number, y0 = 112) =>
  lines
    .map(([t, cls], i) => {
      const txt = `<text x="${w / 2}" y="${y0 + i * 20}" font-size="14" text-anchor="middle" fill="currentColor">${t}</text>`
      return cls ? `<g class="${cls}">${txt}</g>` : txt
    })
    .join('')
const repairSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${PANEL(
  5,
  6,
  180,
  200,
  `<text x="90" y="24" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">BER</text>
<g class="fig-muted"><text x="90" y="42" font-size="13" text-anchor="middle" fill="currentColor">base excision</text></g>
${MINI_DUPLEX(14, 166, 60)}
<g class="fig-accent-2"><circle cx="92" cy="68" r="5" fill="currentColor"/><text x="92" y="52" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">U</text>
<defs>${ARROW('arr-dr-rep-r')}</defs></g>
${CAP([['uracil, oxidized base'], ['glycosylase + AP endo'], ['pol + ligase patch']], 180)}`,
)}
${PANEL(
  190,
  6,
  180,
  200,
  `<text x="90" y="24" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">NER</text>
<g class="fig-muted"><text x="90" y="42" font-size="13" text-anchor="middle" fill="currentColor">nucleotide excision</text></g>
${MINI_DUPLEX(14, 166, 60)}
<g class="fig-accent-2"><line x1="84" y1="63" x2="84" y2="75" stroke="currentColor" stroke-width="3"/><line x1="96" y1="63" x2="96" y2="75" stroke="currentColor" stroke-width="3"/><line x1="82" y1="69" x2="98" y2="69" stroke="currentColor" stroke-width="3"/><text x="90" y="52" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">T=T</text></g>
<g class="fig-accent"><path d="M58 90 L58 98 L122 98 L122 90" fill="none" stroke="currentColor" stroke-width="2"/><line x1="58" y1="56" x2="58" y2="64" stroke="currentColor" stroke-width="2.5"/><line x1="122" y1="56" x2="122" y2="64" stroke="currentColor" stroke-width="2.5"/></g>
${CAP([['bulky: UV T=T dimers'], ['cut both sides, refill'], ['XP: UV → skin cancer', 'fig-accent-2']], 180)}`,
)}
${PANEL(
  375,
  6,
  180,
  200,
  `<text x="90" y="24" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">MMR</text>
<g class="fig-muted"><text x="90" y="42" font-size="13" text-anchor="middle" fill="currentColor">mismatch repair</text></g>
${MINI_DUPLEX(14, 166, 60)}
<g class="fig-accent-2"><path d="M80 60 L90 50 L100 60" fill="none" stroke="currentColor" stroke-width="3"/><line x1="60" y1="84" x2="120" y2="84" stroke="currentColor" stroke-width="3" stroke-dasharray="4 3"/></g>
${CAP([['post-fork copy error'], ['excise the NEW strand'], ['Lynch (colon cancer)', 'fig-accent-2']], 180)}`,
)}
${PANEL(
  5,
  214,
  272,
  190,
  `<text x="136" y="24" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">NHEJ</text>
<g class="fig-muted"><text x="136" y="42" font-size="13" text-anchor="middle" fill="currentColor">nonhomologous end joining</text></g>
${MINI_DUPLEX(16, 256, 58, [120, 152])}
<defs>${ARROW('arr-dr-rep')}</defs>
<line x1="100" y1="67" x2="114" y2="67" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dr-rep)"/>
<line x1="172" y1="67" x2="158" y2="67" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dr-rep)"/>
<g class="fig-accent-2"><text x="136" y="100" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">bases lost</text></g>
${CAP([['double-strand break, any phase'], ['ends ligated directly'], ['error-prone: small indels', 'fig-accent-2']], 272, 124)}`,
)}
${PANEL(
  283,
  214,
  272,
  190,
  `<text x="136" y="24" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">HR</text>
<g class="fig-muted"><text x="136" y="42" font-size="13" text-anchor="middle" fill="currentColor">homologous recombination</text></g>
${MINI_DUPLEX(16, 256, 52, [120, 152])}
<g class="fig-accent">
<defs>${ARROW('arr-dr-rep-b')}</defs>
${MINI_DUPLEX(16, 256, 86)}
<line x1="128" y1="84" x2="128" y2="74" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dr-rep-b)"/>
<line x1="144" y1="84" x2="144" y2="74" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dr-rep-b)"/>
<text x="258" y="116" font-size="12" text-anchor="end" fill="currentColor">sister chromatid</text>
</g>
${CAP([['double-strand break in S/G2'], ['copies the sister — faithful'], ['BRCA1/2 loss → HR-deficient', 'fig-accent-2']], 272, 136)}`,
)}
<g class="fig-muted"><text x="280" y="428" font-size="14" text-anchor="middle" fill="currentColor">damage sensed at G1/S or G2/M → p53 halts the cycle until repair is done</text></g>
</svg>`

/* ───────────────────────── 8 — Licensing vs firing on the CDK curve (lead, 1000×460) ───────────────────────── */

const cdkSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dr-cdk')}</defs>
<g class="fig-accent"><rect x="80" y="80" width="320" height="220" fill="currentColor" fill-opacity="0.08"/></g>
<g class="fig-accent-2"><rect x="400" y="80" width="240" height="220" fill="currentColor" fill-opacity="0.08"/></g>
<line x1="80" y1="300" x2="940" y2="300" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dr-cdk)"/>
<line x1="80" y1="300" x2="80" y2="60" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dr-cdk)"/>
<text x="92" y="66" font-size="17" fill="currentColor">CDK activity</text>
<g class="fig-muted">
${[160, 400, 640, 800].map((x) => `<line x1="${x}" y1="80" x2="${x}" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>`).join('')}
</g>
<text x="120" y="328" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">M</text>
<text x="280" y="328" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">G1</text>
<text x="520" y="328" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">S</text>
<text x="720" y="328" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">G2</text>
<text x="870" y="328" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">M</text>
<path d="M80 150 C 110 150, 120 272, 160 274 L 370 274 C 400 274, 410 172, 450 168 L 760 168 C 810 168, 830 112, 860 112 C 890 112, 905 200, 940 268" fill="none" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-accent">
<text x="270" y="110" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">LICENSE (CDK low)</text>
<text x="270" y="134" font-size="16" text-anchor="middle" fill="currentColor">load inactive helicases</text>
<text x="270" y="156" font-size="16" text-anchor="middle" fill="currentColor">at every origin</text>
</g>
<g class="fig-accent-2">
<text x="520" y="110" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">FIRE (CDK high)</text>
<text x="520" y="134" font-size="16" text-anchor="middle" fill="currentColor">activate those helicases</text>
<text x="520" y="156" font-size="16" text-anchor="middle" fill="currentColor">new licensing forbidden</text>
</g>
<g class="fig-muted"><text x="720" y="140" font-size="15" text-anchor="middle" fill="currentColor">no licensing, no firing</text><text x="870" y="90" font-size="15" text-anchor="middle" fill="currentColor">CDK peaks</text></g>
<text x="500" y="372" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">the high CDK that FIRES origins also FORBIDS relicensing → each origin fires once per cycle</text>
<g class="fig-muted">
<text x="500" y="404" font-size="16" text-anchor="middle" fill="currentColor">stalled forks / damage → checkpoint kinases (ATR, ATM) and p53 halt the cycle</text>
<text x="500" y="428" font-size="16" text-anchor="middle" fill="currentColor">S does not hand off to M until replication is complete (G2/M checkpoint)</text>
</g>
</svg>`

/* ───────────────────────── 9 — Prokaryote vs eukaryote (replace-table, 560×440) ───────────────────────── */

const ROW = (y: number, left: string, right: string, size = 15) =>
  `<text x="14" y="${y}" font-size="${size}" fill="currentColor">${left}</text><text x="294" y="${y}" font-size="${size}" fill="currentColor">${right}</text>`
const BUBBLE = (cx: number) =>
  `<g class="fig-accent"><ellipse cx="${cx}" cy="128" rx="30" ry="17" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/></g><g class="fig-accent-2"><circle cx="${cx}" cy="128" r="4.5" fill="currentColor"/></g>`
const scorecardSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<text x="140" y="26" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Prokaryote</text>
<text x="420" y="26" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Eukaryote</text>
<g class="fig-muted"><line x1="280" y1="40" x2="280" y2="392" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<circle cx="140" cy="128" r="62" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<defs>${ARROW('arr-dr-sc-b')}</defs>
<path d="${ARC(140, 128, 70, -138, -42)}" fill="none" stroke="currentColor" stroke-width="3" marker-start="url(#arr-dr-sc-b)" marker-end="url(#arr-dr-sc-b)"/>
<path d="${ARC(140, 128, 54, -138, -42)}" fill="none" stroke="currentColor" stroke-width="3"/>
</g>
<g class="fig-accent-2"><circle cx="140" cy="66" r="5" fill="currentColor"/><text x="152" y="58" font-size="14" fill="currentColor">one origin</text></g>
<g class="fig-muted"><text x="140" y="138" font-size="14" text-anchor="middle" fill="currentColor">2 forks meet</text><text x="140" y="156" font-size="14" text-anchor="middle" fill="currentColor">opposite</text></g>
<line x1="300" y1="128" x2="312" y2="128" stroke="currentColor" stroke-width="4"/>
<line x1="372" y1="128" x2="392" y2="128" stroke="currentColor" stroke-width="4"/>
<line x1="452" y1="128" x2="472" y2="128" stroke="currentColor" stroke-width="4"/>
<line x1="532" y1="128" x2="540" y2="128" stroke="currentColor" stroke-width="4"/>
${BUBBLE(342)}${BUBBLE(422)}${BUBBLE(502)}
<g class="fig-accent"><rect x="294" y="118" width="8" height="20" rx="3" fill="currentColor"/><rect x="538" y="118" width="8" height="20" rx="3" fill="currentColor"/></g>
<g class="fig-muted"><text x="300" y="166" font-size="13" fill="currentColor">telomere</text><text x="540" y="166" font-size="13" text-anchor="end" fill="currentColor">telomere</text></g>
<g class="fig-accent-2"><circle cx="330" cy="192" r="4.5" fill="currentColor"/></g>
<text x="340" y="197" font-size="13" fill="currentColor">origin</text>
<g class="fig-accent"><ellipse cx="412" cy="192" rx="14" ry="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/></g>
<text x="432" y="197" font-size="13" fill="currentColor">bubble = 2 forks</text>
<g class="fig-muted"><text x="140" y="214" font-size="13" text-anchor="middle" fill="currentColor">θ (theta) replication</text></g>
${ROW(248, 'circular, ONE origin, 2 forks', 'linear, THOUSANDS of origins')}
${ROW(274, 'fast forks', 'slow forks (nucleosomes in the way)', 13)}
${ROW(300, 'Pol III builds, Pol I fixes primers', 'Pol α-primase starts; δ, ε extend', 14)}
${ROW(326, 'no ends → no telomere problem', 'telomeres + telomerase')}
${ROW(352, 'copies whenever it grows', 'S phase only, licensed origins')}
${ROW(378, 'one compartment with transcription', 'nucleus; chromatin unpacked, rebuilt', 13)}
<g class="fig-muted"><text x="280" y="420" font-size="14" text-anchor="middle" fill="currentColor">same chemistry everywhere: 5'→3' only, primers, Okazaki fragments, ligase</text></g>
</svg>`

export const mcatDnaReplicationFigures: DeckFigurePlacement[] = [
  {
    at: 'The Molecule You Are Copying',
    mode: 'lead',
    figure: {
      svg: ladderSvg,
      alt:
        'Left: a six-rung DNA ladder. The top backbone runs 5 prime (left) to 3 prime (right) and the bottom backbone runs the opposite way (antiparallel); each backbone alternates sugar squares (S) and phosphate circles (P) joined by phosphodiester bonds from a 3 prime OH to the next 5 prime phosphate. Each rung is a purine box paired with a pyrimidine box: A with T joined by two dashed hydrogen bonds, G with C joined by three. Notes: GC-rich DNA melts at a higher Tm; every rung is a two-ring purine plus a one-ring pyrimidine, so the helix stays about 2 nm wide. Right: one nucleotide drawn as phosphate circle, deoxyribose box and base box. The 3 prime OH (red) is where the chain grows; the 2 prime carbon carries H, not OH as in RNA; base plus sugar is a nucleoside and adding phosphate makes a nucleotide; purines A and G have two rings, pyrimidines C, T and U one.',
      caption: 'The duplex as a ladder: antiparallel backbones, A=T with 2 H-bonds, G≡C with 3, and the 3′-OH every polymerase needs.',
    },
    blocks: [
      '- **Antiparallel** strands; A=T has 2 H-bonds, G≡C has 3 → GC-rich DNA has a higher $T_m$',
      '- Chains grow only at a free **3′-OH**; 2′-H makes DNA stabler than RNA (2′-OH)',
    ],
  },
  {
    at: 'Helix Geometry & Packaging',
    mode: 'lead',
    figure: {
      svg: packagingSvg,
      alt:
        'A four-step zoom strip from left to right. Double helix: two intertwined strands with rungs, marked major and minor grooves; B-DNA is right-handed, about 2 nm wide, and transcription factors read the major groove. Nucleosomes: three histone octamer discs with DNA wrapped around each (about 147 bp, 1.7 turns; two each of H2A, H2B, H3, H4) and red H1 dots where the linker DNA enters. Chromatin fibre: nucleosomes zig-zag packed into a thicker fibre. Chromosome: an X-shaped metaphase chromosome, maximal compaction, mitosis only. Above: histones are lysine/arginine-rich and positively charged, gripping the negative phosphate backbone; acetylation loosens the grip. Below: euchromatin drawn as spaced blue beads is open and active; heterochromatin drawn as packed red beads is dense and quiet. Replication must unpack and then rebuild this.',
      caption: 'From helix to chromosome: each level of packing must be undone ahead of the fork and rebuilt behind it.',
    },
    blocks: [
      '- B-DNA is right-handed; proteins read sequence in the **major groove**',
      '- (+) histones grip the (−) backbone: nucleosome → fibre → chromosome; **acetylation loosens** it',
    ],
  },
  {
    at: 'The Central Question of 1958',
    mode: 'replace-table',
    figure: {
      svg: modelsSvg,
      alt:
        'Three columns: conservative, semiconservative, dispersive. Each starts with a parental duplex of two red (old, heavy 15N) strands and, after one round, shows two daughter duplexes. Conservative: one duplex all red, one all blue (new, light 14N). Semiconservative: each duplex has one red and one blue strand. Dispersive: every strand is a patchwork of red and blue segments. Under each column two cesium chloride tubes show the predicted bands at light, hybrid and heavy positions for generation 1 and 2. Conservative: a heavy and a light band in generation 1 (ruled out after generation 1). Semiconservative: one hybrid band in generation 1, then hybrid plus light in generation 2 (the pattern observed by Meselson and Stahl, 1958; highlighted). Dispersive: one hybrid band in generation 1, then a single band between hybrid and light (ruled out after generation 2). Band thickness is proportional to amount.',
      caption: 'The three 1958 models and the bands each predicts; Meselson & Stahl saw the semiconservative pattern.',
    },
    blocks: [
      '- **Conservative:** one all-old + one all-new duplex → heavy + light bands in gen 1 (not seen)',
      '- **Semiconservative:** one old + one new strand per duplex → one hybrid band, then hybrid + light (seen)',
      '- **Dispersive:** patchwork strands → one hybrid band in gen 1, still ONE band in gen 2 (not seen)',
      '- Meselson–Stahl 1958: grow in $^{15}N$, switch to $^{14}N$, read the CsCl bands each generation',
    ],
  },
  {
    at: 'Building the New Strands',
    mode: 'lead',
    figure: {
      svg: forkSvg,
      alt:
        'A replication fork drawn as two template strands opening to the left from a parental duplex on the right. A blue hexagonal helicase sits at the fork using ATP; a grey topoisomerase ahead on the parental duplex relaxes supercoils; small grey single-strand binding proteins coat the opened strands. Top template (3 prime at the left end): the leading strand is one blue line that started at a single red RNA primer and grows continuously toward the fork, with Pol III riding inside a dashed sliding clamp. Bottom template (5 prime at the left end): the lagging strand is made of Okazaki fragments, each starting at its own red RNA primer and extending away from the fork, with Pol III on the newest fragment near the fork and a red primase making the next primer. Numbered steps: 1 primase lays an RNA primer, 2 Pol III extends it 5 prime to 3 prime only, 3 Pol I swaps the primer for DNA (dashed segment), 4 ligase seals the nick (small ring). An arrow shows the fork moving right.',
      caption: 'The fork: both polymerases build 5′→3′, so one strand is continuous and the other is stitched from Okazaki fragments.',
    },
    blocks: [
      '- Helicase opens, SSBs hold, topoisomerase relaxes ahead; **primase** starts, polymerases go **5′→3′**',
      '- **Leading** toward the fork; **lagging** = Okazaki fragments; **Pol I** removes primers, **ligase** seals',
    ],
  },
  {
    at: 'Three Tiers of Accuracy',
    mode: 'lead',
    figure: {
      svg: fidelitySvg,
      alt:
        'Three panels and a staircase. Base selection: a correct A–T pair fits the polymerase active site as two matching blue blocks; a G–T mismatch is drawn with a tilted red block that distorts the site and is rejected. Proofreading: a template strand with a new strand growing beneath it inside a dashed blue polymerase; the last base is red and mispaired, and a red arrow runs backwards, the 3 prime to 5 prime exonuclease backing up to clip it — proofreading runs 3 prime to 5 prime while primer removal runs 5 prime to 3 prime. Mismatch repair, after the fork: the old strand carries CH3 methyl flags (E. coli), the new unmethylated blue strand has a bump at the mismatch and a red bracket marks excision and resynthesis of the new strand; loss of mismatch repair causes Lynch syndrome. Staircase below: about one error per 10 to the 5 nucleotides after base selection, about 100 times better after proofreading, another 100 to 1000 times after mismatch repair, about one per 10 to the 9 to 10 to the 10 base pairs.',
      caption: 'Three stacked filters take replication from ~1 error in 10⁵ to ~1 in 10⁹–10¹⁰ (staircase illustrative).',
    },
    blocks: [
      '- **Base selection** → **3′→5′ proofreading** (back up, excise, retry) → **mismatch repair** on the NEW strand',
      '- Proofreading runs **3′→5′**, primer removal **5′→3′**; MMR loss → **Lynch syndrome**',
    ],
  },
  {
    at: 'The End-Replication Problem & Telomerase',
    mode: 'lead',
    figure: {
      svg: telomereSvg,
      alt:
        'Left, the problem in three rows at the end of a linear chromosome. Row 1: the template strand ends at its 3 prime end; lagging-strand fragments (blue) each carry a red RNA primer at the fork side, and the last primer sits at the very end. Row 2: primers are removed and the inner gaps filled, but the end gap stays because no 3 prime OH exists upstream of it. Row 3: the duplex is shorter; the lost piece is dashed — every division the end gets shorter. Notes: telomeres are a disposable TTAGGG repeat buffer, and a protein cap keeps ends from being read as breaks. Right, the fix: a dashed blue telomerase sits on the parental 3 prime overhang carrying its own red RNA template and, as a reverse transcriptase, adds repeats to the 3 prime end (dashed blue arrow); then normal priming and lagging synthesis fill the other strand. Telomerase is on in germ cells, stem cells and most cancers (immortal) and off in most somatic cells, whose erosion leads to senescence (Hayflick limit).',
      caption: 'Why linear ends shorten, and how telomerase, a reverse transcriptase with its own RNA, extends the 3′ overhang.',
    },
    blocks: [
      '- The **last lagging primer** leaves a gap with no 3′-OH upstream → ends shorten; telomeres are the buffer',
      '- **Telomerase** = reverse transcriptase + own RNA; ON in germ/stem/cancer cells, OFF in most somatic cells',
    ],
  },
  {
    at: 'Repairing Damage',
    mode: 'replace-table',
    figure: {
      svg: repairSvg,
      alt:
        'Five panels. BER, base excision: a duplex with one red uracil base; glycosylase removes the base, AP endonuclease cuts, polymerase and ligase patch — for uracil and oxidized bases. NER, nucleotide excision: a red T=T thymine dimer with blue cuts on both sides and a bracket showing an oligonucleotide removed and refilled — bulky UV lesions; xeroderma pigmentosum means UV sensitivity and skin cancer. MMR, mismatch repair: a bump in the duplex and a red dashed stretch of the new strand excised — post-fork copy errors; Lynch syndrome, colon cancer. NHEJ, nonhomologous end joining: a duplex broken in two with arrows pushing the ends together and bases lost at the join — any cell-cycle phase, error-prone small indels. HR, homologous recombination: a broken duplex above an intact blue sister chromatid with arrows copying from it — S/G2 only, faithful; BRCA1/2 loss makes tumours HR-deficient. Footer: damage sensed at G1/S or G2/M makes p53 halt the cycle until repair is done.',
      caption: 'Five repair pathways: match the lesion to the pathway, and the pathway to its disease.',
    },
    blocks: [
      '- **BER** small base damage (uracil, oxidation) · **NER** bulky UV dimers → **xeroderma pigmentosum**',
      '- **MMR** post-fork mismatches → **Lynch syndrome**',
      '- **NHEJ** double-strand breaks any time, error-prone · **HR** uses the sister chromatid in S/G2 → **BRCA1/2**',
      '- Damage → p53 halts the cycle at G1/S or G2/M until repair completes',
    ],
  },
  {
    at: 'Once and Only Once',
    mode: 'lead',
    figure: {
      svg: cdkSvg,
      alt:
        'CDK activity plotted across the cell cycle, phases M, G1, S, G2, M along the bottom. The curve is low through late M and G1, rises at the G1/S transition, stays high through S and G2 and peaks in mitosis before falling. The low-CDK window (late M and G1) is shaded blue and labelled LICENSE: load inactive helicases at every origin. The S-phase window is shaded red and labelled FIRE: activate those helicases; new licensing forbidden. G2 is marked no licensing, no firing. Message: the high CDK that fires origins also forbids relicensing, so each origin fires once per cycle. Footer: stalled forks or damage activate checkpoint kinases (ATR, ATM) and p53 to halt the cycle, and S does not hand off to M until replication is complete (G2/M checkpoint). Curve illustrative.',
      caption: 'Licensing needs low CDK, firing needs high CDK, so an origin can never fire twice in one cycle (illustrative curve).',
    },
    blocks: [
      '- **License** (load inactive helicases) only at LOW CDK in late M/G1; **fire** them at HIGH CDK in S',
      '- High CDK also blocks relicensing → once per cycle; damage/stalled forks → checkpoints + p53 halt',
    ],
  },
  {
    at: 'Prokaryote vs Eukaryote Scorecard',
    mode: 'replace-table',
    figure: {
      svg: scorecardSvg,
      alt:
        'Left, prokaryote: a circular chromosome with one red origin at the top and a blue replication bubble whose two forks travel in opposite directions around the circle (theta replication). Right, eukaryote: a linear chromosome with blue telomere caps at both ends and three blue replication bubbles, each with its own red origin, that will merge. Rows beneath compare them: circular with one origin and two forks versus linear with thousands of origins; fast forks versus slow forks with nucleosomes in the way; Pol III builds and Pol I fixes primers versus Pol alpha-primase starts and delta and epsilon extend; no ends and no telomere problem versus telomeres plus telomerase; copies whenever it grows versus S phase only with licensed origins; one compartment shared with transcription versus the nucleus, where chromatin is unpacked and rebuilt. Footer: the chemistry is the same everywhere — 5 prime to 3 prime only, primers, Okazaki fragments, ligase.',
      caption: 'One circle with one origin versus a line with thousands: the same chemistry, different logistics.',
    },
    blocks: [
      '- **Prokaryote:** circular, ONE origin, two fast forks (θ), Pol III + Pol I, no ends, copies while growing',
      '- **Eukaryote:** linear, THOUSANDS of origins, slow forks through chromatin, telomeres, S phase only',
      '- Same rules everywhere: 5′→3′ synthesis, primers, Okazaki fragments, ligase',
    ],
  },
]
