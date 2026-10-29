import type { DeckFigurePlacement } from './index'

/**
 * Viruses (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept: capsids are hexagons,
 * envelopes are rings with lollipop spikes, genomes are wavy lines, a cell is a
 * rounded rectangle, a chromosome is a line with a thick inserted segment,
 * flu segments are eight short bars, a prion is a coil turning into stacked
 * bars. No textbook, prep-company or AAMC figure was copied. No structural
 * formulas; the one curve (one-step growth) is drawn from its textbook shape
 * and captioned illustrative. The only numbers are the ones the lesson states.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so every
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-vir-<figure>[-b|-r|-m]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

const f = (v: number) => +v.toFixed(1)

/** A regular hexagon (our capsid) centred at (cx, cy) with circumradius r. */
const HEX = (cx: number, cy: number, r: number, extra = '') => {
  const pts: string[] = []
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (90 + 60 * i)
    pts.push(`${f(cx + r * Math.cos(a))},${f(cy + r * Math.sin(a))}`)
  }
  return `<polygon points="${pts.join(' ')}" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="${r > 30 ? 3 : 2}"${extra}/>`
}

/** Three faint lines from the centre to alternate vertices — the icosahedron look. */
const HEX_FACES = (cx: number, cy: number, r: number) => {
  let s = ''
  for (const i of [0, 2, 4]) {
    const a = (Math.PI / 180) * (90 + 60 * i)
    s += `<line x1="${cx}" y1="${cy}" x2="${f(cx + r * Math.cos(a))}" y2="${f(cy + r * Math.sin(a))}" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.5"/>`
  }
  return s
}

/** A wavy genome strand from (x0, y) to (x1, y). */
const WAVE = (x0: number, x1: number, y: number, amp = 10, w = 4) => {
  const n = 3
  const seg = (x1 - x0) / n
  let d = `M${x0} ${y}`
  for (let i = 0; i < n; i++) {
    const a = x0 + seg * i
    d += ` C ${f(a + seg * 0.33)} ${y - amp}, ${f(a + seg * 0.66)} ${y + amp}, ${f(a + seg)} ${y}`
  }
  return `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round"/>`
}

/** Lollipop spikes around a circle: n stalks from r0 to r1 with a knob at r1 + 4. */
const SPIKES = (cx: number, cy: number, r0: number, r1: number, n: number, knob = 5) => {
  let s = ''
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n
    const c = Math.cos(a), si = Math.sin(a)
    s += `<line x1="${f(cx + r0 * c)}" y1="${f(cy + r0 * si)}" x2="${f(cx + r1 * c)}" y2="${f(cy + r1 * si)}" stroke="currentColor" stroke-width="2.5"/>`
    s += `<circle cx="${f(cx + (r1 + 4) * c)}" cy="${f(cy + (r1 + 4) * si)}" r="${knob}" fill="currentColor"/>`
  }
  return s
}

/** Eight flu genome segments as short bars inside a circle of radius r; `red` marks the indices drawn in accent-2. */
const SEGS = (cx: number, cy: number, r: number, red: number[]) => {
  let s = ''
  for (let i = 0; i < 8; i++) {
    const y = cy - 28 + i * 8
    const half = Math.sqrt(Math.max(r * r - (y - cy) * (y - cy), 0)) * 0.72
    const cls = red.includes(i) ? 'fig-accent-2' : 'fig-accent'
    s += `<g class="${cls}"><rect x="${f(cx - half)}" y="${y - 2}" width="${f(half * 2)}" height="4.5" rx="2" fill="currentColor"/></g>`
  }
  return s
}

/* 1 — The virion: naked vs enveloped (lead, 1000×460) */
const virionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted"><line x1="490" y1="60" x2="490" y2="410" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 7"/></g>
<text x="295" y="44" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">NAKED virion</text>
<text x="690" y="44" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">ENVELOPED virion</text>
${HEX(295, 190, 88)}${HEX_FACES(295, 190, 88)}
<g class="fig-accent">${WAVE(250, 340, 192, 14, 4)}</g>
<text x="30" y="112" font-size="19" font-weight="700" fill="currentColor">capsid</text>
<text x="30" y="132" font-size="15" fill="currentColor">protein shell of</text>
<text x="30" y="150" font-size="15" fill="currentColor">repeating capsomeres</text>
<g class="fig-muted"><line x1="130" y1="108" x2="236" y2="128" stroke="currentColor" stroke-width="1.5"/></g>
<g class="fig-accent"><text x="295" y="312" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">genome: DNA or RNA — never both</text></g>
<text x="295" y="334" font-size="14" text-anchor="middle" fill="currentColor">ss or ds · linear, circular or segmented</text>
<circle cx="690" cy="188" r="104" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="3"/>
<circle cx="690" cy="188" r="92" class="fig-bg" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent-2">${SPIKES(690, 188, 104, 120, 14, 5.5)}</g>
${HEX(690, 192, 56)}${HEX_FACES(690, 192, 56)}
<g class="fig-accent">${WAVE(660, 720, 194, 9, 3.5)}</g>
<text x="690" y="166" font-size="13" text-anchor="middle" fill="currentColor">capsid</text>
<text x="832" y="112" font-size="19" font-weight="700" fill="currentColor">envelope</text>
<text x="832" y="132" font-size="15" fill="currentColor">host lipid bilayer,</text>
<text x="832" y="150" font-size="15" fill="currentColor">gained by budding</text>
<g class="fig-accent-2">
<text x="832" y="232" font-size="17" font-weight="700" fill="currentColor">spikes</text>
<text x="832" y="252" font-size="15" fill="currentColor">viral glycoproteins</text>
<text x="832" y="270" font-size="15" fill="currentColor">bind the receptor</text>
</g>
<g class="fig-muted"><line x1="826" y1="118" x2="790" y2="140" stroke="currentColor" stroke-width="1.5"/></g>
<text x="295" y="366" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">tough protein shell</text>
<text x="295" y="390" font-size="16" text-anchor="middle" fill="currentColor">fecal-oral · surfaces · survives GI acid</text>
<text x="295" y="412" font-size="16" text-anchor="middle" fill="currentColor">released by lysis — kills the cell</text>
<g class="fig-accent-2"><text x="690" y="366" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">fragile lipid envelope</text></g>
<text x="690" y="390" font-size="16" text-anchor="middle" fill="currentColor">detergent, drying, stomach acid destroy it</text>
<text x="690" y="412" font-size="16" text-anchor="middle" fill="currentColor">contact / respiratory spread · released by budding</text>
<text x="500" y="448" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">ONE nucleic acid (DNA or RNA) · no ribosomes, no metabolism · 20–300 nm · obligate intracellular parasite</text>
</svg>`

/* 2 — The six-step infectious cycle around one host cell (lead, 1000×460) */
const cycleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-vir-cyc')}</defs>
<rect x="190" y="70" width="610" height="300" rx="100" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="3"/>
<rect x="788" y="118" width="24" height="60" class="fig-bg"/>
<g class="fig-accent-2"><path d="M790 118 l10 10 l-10 10 l10 10 l-10 10 l10 10 l-10 10" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M810 118 l-10 10 l10 10 l-10 10 l10 10 l-10 10 l10 10" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-muted"><text x="495" y="358" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">HOST CELL</text></g>
${NUM(90, 120, '1')}
<text x="90" y="152" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Attachment</text>
<text x="90" y="172" font-size="14" text-anchor="middle" fill="currentColor">spike ↔ receptor</text>
<g class="fig-accent-2"><text x="90" y="192" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">= tropism</text></g>
${HEX(96, 225, 26)}${HEX_FACES(96, 225, 26)}
<g class="fig-accent-2"><line x1="122" y1="225" x2="160" y2="225" stroke="currentColor" stroke-width="3"/><circle cx="163" cy="225" r="6" fill="currentColor"/></g>
<g class="fig-accent"><path d="M190 225 L178 225 M178 225 L170 215 M178 225 L170 235" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></g>
<g class="fig-accent-2"><text x="90" y="300" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">no receptor,</text><text x="90" y="318" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">no infection</text></g>
${NUM(224, 120, '2')}
<text x="242" y="126" font-size="17" font-weight="700" fill="currentColor">Penetration</text>
<text x="210" y="146" font-size="14" fill="currentColor">endocytosis, or fusion</text>
<line x1="196" y1="225" x2="232" y2="225" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-cyc)"/>
<circle cx="270" cy="225" r="32" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
${HEX(270, 225, 17)}
<line x1="306" y1="225" x2="354" y2="225" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-cyc)"/>
<path d="M386 206 L372 214 L372 236 L386 244" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M414 206 L428 214 L428 236 L414 244" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">${WAVE(380, 432, 224, 9, 3.5)}</g>
${NUM(312, 318, '3')}
<text x="330" y="324" font-size="17" font-weight="700" fill="currentColor">Uncoating</text>
<text x="300" y="344" font-size="14" fill="currentColor">capsid opens, genome freed</text>
<line x1="440" y1="225" x2="472" y2="225" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-cyc)"/>
<rect x="476" y="182" width="140" height="86" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="546" y="210" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">genome copies</text>
<text x="546" y="232" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">mRNA → proteins</text>
<text x="546" y="254" font-size="13" text-anchor="middle" fill="currentColor">on host ribosomes</text>
${NUM(518, 318, '4')}
<text x="536" y="324" font-size="17" font-weight="700" fill="currentColor">Synthesis</text>
<text x="506" y="344" font-size="14" fill="currentColor">strategy set by genome type</text>
<line x1="620" y1="225" x2="652" y2="225" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-cyc)"/>
${HEX(676, 212, 16)}${HEX(712, 212, 16)}${HEX(694, 244, 16)}
${NUM(652, 120, '5')}
<text x="670" y="126" font-size="17" font-weight="700" fill="currentColor">Assembly</text>
<text x="640" y="146" font-size="14" fill="currentColor">capsids self-assemble</text>
<line x1="722" y1="200" x2="776" y2="156" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-cyc)"/>
<line x1="722" y1="250" x2="776" y2="292" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-cyc)"/>
${NUM(828, 60, '6')}
<g class="fig-accent-2">
<text x="846" y="66" font-size="17" font-weight="700" fill="currentColor">LYSIS</text>
<text x="822" y="88" font-size="14" fill="currentColor">cell dies · naked viruses</text>
</g>
${HEX(850, 122, 12)}${HEX(892, 140, 12)}${HEX(858, 166, 12)}${HEX(906, 186, 12)}${HEX(930, 118, 12)}
${NUM(828, 250, '6')}
<g class="fig-accent">
<text x="846" y="256" font-size="17" font-weight="700" fill="currentColor">BUDDING</text>
<text x="822" y="278" font-size="14" fill="currentColor">takes an envelope</text>
<text x="822" y="296" font-size="14" fill="currentColor">cell keeps shedding</text>
</g>
<rect x="786" y="310" width="28" height="56" class="fig-bg"/>
<path d="M800 310 C 770 318, 766 358, 800 366" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="812" cy="338" r="24" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="3"/>
${HEX(812, 338, 11)}
<g class="fig-accent-2"><circle cx="836" cy="332" r="4" fill="currentColor"/><circle cx="832" cy="352" r="4" fill="currentColor"/><circle cx="834" cy="320" r="4" fill="currentColor"/></g>
<circle cx="900" cy="340" r="22" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="3"/>
${HEX(900, 340, 10)}
<g class="fig-accent-2">${SPIKES(900, 340, 22, 28, 8, 3.5)}</g>
<text x="500" y="414" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">attach → penetrate → uncoat → synthesize → assemble → release</text>
<text x="500" y="442" font-size="15" text-anchor="middle" fill="currentColor">entry-step drugs PREVENT infection · late-step drugs SUPPRESS progeny from cells already infected</text>
</svg>`

/* 3 — Plaque assay and the one-step growth curve (after, 1000×460) */
const growthSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-vir-gro')}</defs>
<text x="170" y="48" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Plaque assay</text>
<circle cx="170" cy="200" r="100" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent"><circle cx="170" cy="200" r="90" fill="currentColor" fill-opacity="0.22" stroke="none"/></g>
<circle cx="130" cy="160" r="12" class="fig-bg" stroke="currentColor" stroke-width="2"/>
<circle cx="205" cy="140" r="12" class="fig-bg" stroke="currentColor" stroke-width="2"/>
<circle cx="225" cy="210" r="12" class="fig-bg" stroke="currentColor" stroke-width="2"/>
<circle cx="150" cy="235" r="12" class="fig-bg" stroke="currentColor" stroke-width="2"/>
<circle cx="110" cy="205" r="12" class="fig-bg" stroke="currentColor" stroke-width="2"/>
<circle cx="190" cy="265" r="12" class="fig-bg" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent"><text x="170" y="76" font-size="13" text-anchor="middle" fill="currentColor">cell monolayer</text></g>
<g class="fig-muted"><line x1="237" y1="210" x2="286" y2="236" stroke="currentColor" stroke-width="1.5"/></g>
<text x="290" y="240" font-size="14" fill="currentColor">plaque = clear zone</text>
<text x="290" y="258" font-size="14" fill="currentColor">from ONE virion</text>
<text x="170" y="334" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">titer (PFU/mL) =</text>
<text x="170" y="356" font-size="15" text-anchor="middle" fill="currentColor">plaques ÷ (dilution × mL plated)</text>
<g class="fig-accent-2"><text x="170" y="384" font-size="14" text-anchor="middle" fill="currentColor">42 plaques · 0.1 mL of 10⁻⁶ → 4.2 × 10⁸ PFU/mL</text></g>
<g class="fig-muted"><line x1="446" y1="40" x2="446" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 7"/></g>
<text x="680" y="48" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">One-step growth curve</text>
<g class="fig-muted">
<text x="424" y="76" font-size="14" fill="currentColor">infectious virions per cell (log)</text>
<text x="680" y="408" font-size="14" text-anchor="middle" fill="currentColor">time after a synchronized infection</text>
<rect x="452" y="86" width="150" height="274" fill="currentColor" fill-opacity="0.08"/>
</g>
<line x1="420" y1="86" x2="420" y2="360" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-vir-gro)" marker-start="url(#arr-vir-gro)"/>
<line x1="420" y1="360" x2="950" y2="360" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-vir-gro)"/>
<g class="fig-accent">
<path d="M420 300 L452 300 L456 350 L602 350 C 640 350, 660 320, 680 250 C 700 180, 720 150, 760 150 L 940 150" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
<text x="936" y="176" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">inside the cell</text>
</g>
<g class="fig-accent-2">
<path d="M420 352 L720 352 C 760 352, 772 300, 790 200 C 800 140, 820 100, 860 100 L 940 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-dasharray="9 6"/>
<text x="936" y="92" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">released = BURST</text>
</g>
<text x="527" y="128" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">ECLIPSE</text>
<text x="527" y="150" font-size="14" text-anchor="middle" fill="currentColor">uncoated: genome + parts,</text>
<text x="527" y="168" font-size="14" text-anchor="middle" fill="currentColor">no particle → infectivity 0</text>
<g class="fig-muted">
<text x="436" y="382" font-size="13" text-anchor="middle" fill="currentColor">adsorb</text>
<text x="527" y="382" font-size="13" text-anchor="middle" fill="currentColor">eclipse</text>
<text x="665" y="382" font-size="13" text-anchor="middle" fill="currentColor">assembly</text>
<text x="800" y="382" font-size="13" text-anchor="middle" fill="currentColor">release</text>
</g>
<g class="fig-accent-2"><text x="500" y="446" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">a virus disassembles to reproduce — infectivity vanishes, then multiplies (no dividing cell does this)</text></g>
</svg>`

/* 4 — The tailed phage: adsorb, then inject (lead, 1000×460) */
const PHAGE_HEAD = (cx: number, cy: number, dna: boolean) =>
  HEX(cx, cy, 55) + HEX_FACES(cx, cy, 55) + (dna ? `<g class="fig-accent">${WAVE(cx - 34, cx + 34, cy - 8, 8, 3)}${WAVE(cx - 34, cx + 34, cy + 10, 8, 3)}</g>` : '')
const BACTERIUM = (x: number) =>
  `<rect x="${x}" y="330" width="380" height="100" rx="44" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="3"/>` +
  `<rect x="${x + 8}" y="338" width="364" height="84" rx="38" fill="none" stroke="currentColor" stroke-width="1.5"/>`
const phageSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="250" y="40" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">1 · Adsorption</text>
<text x="750" y="40" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">2 · Injection (Hershey &amp; Chase)</text>
${BACTERIUM(60)}${BACTERIUM(560)}
<g class="fig-muted"><text x="130" y="404" font-size="15" fill="currentColor">bacterium</text><text x="920" y="358" font-size="15" text-anchor="end" fill="currentColor">bacterium</text></g>
${PHAGE_HEAD(215, 110, true)}
<rect x="195" y="160" width="40" height="10" rx="3" fill="currentColor"/>
<rect x="203" y="168" width="24" height="122" rx="4" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
<rect x="180" y="290" width="70" height="12" rx="3" fill="currentColor"/>
<path d="M186 302 L150 330 M204 302 L190 330 M226 302 L250 330 M244 302 L290 330" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
<g class="fig-accent-2"><circle cx="150" cy="330" r="4" fill="currentColor"/><circle cx="190" cy="330" r="4" fill="currentColor"/><circle cx="250" cy="330" r="4" fill="currentColor"/><circle cx="290" cy="330" r="4" fill="currentColor"/></g>
<text x="300" y="100" font-size="17" font-weight="700" fill="currentColor">icosahedral head</text>
<text x="300" y="120" font-size="15" fill="currentColor">packed with dsDNA</text>
<text x="300" y="212" font-size="17" font-weight="700" fill="currentColor">tail + baseplate</text>
<text x="300" y="232" font-size="15" fill="currentColor">contractile (T4) or not (λ)</text>
<g class="fig-accent-2">
<text x="306" y="272" font-size="17" font-weight="700" fill="currentColor">tail fibers find</text>
<text x="306" y="292" font-size="15" fill="currentColor">the receptor: LPS,</text>
<text x="306" y="310" font-size="15" fill="currentColor">pili, teichoic acids</text>
</g>
${PHAGE_HEAD(715, 170, false)}
<rect x="695" y="220" width="40" height="10" rx="3" fill="currentColor"/>
<rect x="693" y="228" width="44" height="90" rx="6" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
<rect x="680" y="318" width="70" height="12" rx="3" fill="currentColor"/>
<path d="M686 330 L656 352 M744 330 L774 352" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
<g class="fig-accent">
<defs>${ARROW('arr-vir-pha-b')}</defs>
<line x1="715" y1="150" x2="715" y2="352" stroke="currentColor" stroke-width="4" marker-end="url(#arr-vir-pha-b)"/>
${WAVE(640, 800, 384, 9, 3.5)}
<text x="750" y="416" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">³²P-labeled DNA is INSIDE → DNA is the genetic material</text>
</g>
<text x="790" y="152" font-size="17" font-weight="700" fill="currentColor">tail contracts</text>
<text x="790" y="172" font-size="15" fill="currentColor">like a syringe</text>
<g class="fig-accent-2">
<text x="790" y="262" font-size="17" font-weight="700" fill="currentColor">DNA goes in,</text>
<text x="790" y="282" font-size="17" font-weight="700" fill="currentColor">capsid stays OUT</text>
<text x="650" y="110" font-size="15" text-anchor="end" fill="currentColor">³⁵S-labeled protein</text>
<text x="650" y="130" font-size="15" text-anchor="end" fill="currentColor">stays outside</text>
</g>
<g class="fig-muted"><line x1="654" y1="118" x2="672" y2="134" stroke="currentColor" stroke-width="1.5"/></g>
<g class="fig-muted"><text x="500" y="452" font-size="14" text-anchor="middle" fill="currentColor">Hershey &amp; Chase 1952: only the injected ³²P-DNA programmed progeny; the ³⁵S protein shell could be blended off the cells</text></g>
</svg>`

/* 5 — Lytic vs lysogenic: the temperate phage's fork, and induction (lead, 1000×460) */
const BOX2 = (x: number, y: number, w: number, h: number, l1: string, l2: string, fs1 = 17, fs2 = 14) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>` +
  `<text x="${x + w / 2}" y="${y + 20}" font-size="${fs1}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text>` +
  `<text x="${x + w / 2}" y="${y + 39}" font-size="${fs2}" text-anchor="middle" fill="currentColor">${l2}</text>`
const lysogenySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-vir-lys')}</defs>
<rect x="395" y="20" width="210" height="44" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="49" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">phage DNA injected</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-vir-lys-r')}</defs>
<line x1="462" y1="64" x2="286" y2="94" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-lys-r)"/>
<text x="250" y="108" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">LYTIC (virulent, T4)</text>
<text x="250" y="128" font-size="14" text-anchor="middle" fill="currentColor">rich medium, many hosts → lysis pays</text>
<line x1="250" y1="186" x2="250" y2="206" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-lys-r)"/>
<line x1="250" y1="254" x2="250" y2="274" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-lys-r)"/>
<line x1="250" y1="322" x2="250" y2="342" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-lys-r)"/>
</g>
${BOX2(70, 140, 360, 46, 'EARLY genes', 'nucleases eat host DNA · copy the phage genome')}
${BOX2(70, 208, 360, 46, 'LATE genes', 'capsids + lysis proteins')}
${BOX2(70, 276, 360, 46, 'assemble → LYSOZYME ruptures the wall', '', 16)}
${HEX(190, 372, 12)}${HEX(232, 396, 12)}${HEX(272, 366, 12)}${HEX(312, 394, 12)}${HEX(252, 420, 12)}${HEX(150, 400, 12)}
<g class="fig-accent-2"><text x="250" y="448" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">BURST of progeny</text></g>
<g class="fig-accent">
<defs>${ARROW('arr-vir-lys-b')}</defs>
<line x1="538" y1="64" x2="714" y2="94" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-lys-b)"/>
<text x="750" y="108" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">LYSOGENIC (temperate, λ)</text>
<text x="750" y="128" font-size="14" text-anchor="middle" fill="currentColor">starved host, high phage:host ratio → wait</text>
<line x1="750" y1="186" x2="750" y2="206" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-lys-b)"/>
<line x1="750" y1="296" x2="750" y2="316" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-lys-b)"/>
<circle cx="636" cy="254" r="36" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M636 218 A 36 36 0 0 1 667 236" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
</g>
${BOX2(560, 140, 380, 46, 'INTEGRASE', 'site-specific insertion into the host chromosome')}
<text x="690" y="236" font-size="16" font-weight="700" fill="currentColor">PROPHAGE in the chromosome</text>
<text x="690" y="256" font-size="14" fill="currentColor">copied passively with every division</text>
<text x="690" y="276" font-size="14" fill="currentColor">every daughter cell = a LYSOGEN</text>
<g class="fig-muted"><text x="636" y="300" font-size="12" text-anchor="middle" fill="currentColor">host chromosome</text></g>
${BOX2(560, 318, 380, 46, 'REPRESSOR silences the lytic genes', '+ superinfection immunity to the same phage', 16)}
<g class="fig-accent-2">
<path d="M750 364 L750 400 L446 400" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-lys-r)"/>
<text x="598" y="424" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">INDUCTION: UV / DNA damage → repressor destroyed</text>
<text x="598" y="444" font-size="14" text-anchor="middle" fill="currentColor">prophage excises → lytic cycle → burst (abandon the sinking ship)</text>
</g>
</svg>`

/* 6 — The route to mRNA: six genome classes (lead, 1000×460) */
const RBOX = (x: number, y: number, label: string, hi = false) =>
  `<rect x="${x}" y="${y - 15}" width="72" height="30" rx="7" fill="currentColor" fill-opacity="${hi ? 0.28 : 0.1}" stroke="currentColor" stroke-width="2"/>` +
  `<text x="${x + 36}" y="${y + 5}" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`
/** boxes joined by labelled arrows; items alternate box label, arrow label, box label … The last box is mRNA (highlighted). */
const ROUTE = (y: number, items: string[], id: string) => {
  let s = ''
  let x = 228
  for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) {
      const last = i === items.length - 1
      s += last ? `<g class="fig-accent">${RBOX(x, y, items[i], true)}</g>` : RBOX(x, y, items[i])
      x += 72
    } else {
      s += `<line x1="${x + 3}" y1="${y}" x2="${x + 41}" y2="${y}" stroke="currentColor" stroke-width="2.5" marker-end="url(#${id})"/>`
      s += `<text x="${x + 22}" y="${y - 20}" font-size="11.5" text-anchor="middle" fill="currentColor">${items[i]}</text>`
      x += 44
    }
  }
  return s
}
const ROW_Y = (i: number) => 70 + 27 + 54 * i
const genomeGridSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-vir-gen')}</defs>
<g class="fig-muted">
<text x="20" y="54" font-size="14" font-weight="700" fill="currentColor">GENOME (examples)</text>
<text x="228" y="54" font-size="14" font-weight="700" fill="currentColor">ROUTE TO mRNA — what has to happen first</text>
<text x="662" y="54" font-size="14" font-weight="700" fill="currentColor">POLYMERASE PACKED?</text>
<text x="846" y="54" font-size="14" font-weight="700" fill="currentColor">WHERE</text>
${[0, 1, 2, 3, 4, 5, 6].map((i) => `<line x1="20" y1="${70 + 54 * i}" x2="980" y2="${70 + 54 * i}" stroke="currentColor" stroke-width="1.2"/>`).join('')}
</g>
<text x="20" y="${ROW_Y(0) + 1}" font-size="17" font-weight="700" fill="currentColor">dsDNA</text><text x="20" y="${ROW_Y(0) + 18}" font-size="12.5" fill="currentColor">herpes, adeno</text>
<text x="20" y="${ROW_Y(1) + 1}" font-size="17" font-weight="700" fill="currentColor">ssDNA</text><text x="20" y="${ROW_Y(1) + 18}" font-size="12.5" fill="currentColor">parvo</text>
<text x="20" y="${ROW_Y(2) + 1}" font-size="17" font-weight="700" fill="currentColor">(+) ssRNA</text><text x="20" y="${ROW_Y(2) + 18}" font-size="12.5" fill="currentColor">polio, corona</text>
<text x="20" y="${ROW_Y(3) + 1}" font-size="17" font-weight="700" fill="currentColor">(−) ssRNA</text><text x="20" y="${ROW_Y(3) + 18}" font-size="12.5" fill="currentColor">flu, rabies, measles</text>
<text x="20" y="${ROW_Y(4) + 1}" font-size="17" font-weight="700" fill="currentColor">dsRNA</text><text x="20" y="${ROW_Y(4) + 18}" font-size="12.5" fill="currentColor">rota</text>
<text x="20" y="${ROW_Y(5) + 1}" font-size="17" font-weight="700" fill="currentColor">retro (+)ssRNA</text><text x="20" y="${ROW_Y(5) + 18}" font-size="12.5" fill="currentColor">HIV</text>
${ROUTE(ROW_Y(0) + 4, ['dsDNA', 'host RNA pol', 'mRNA'], 'arr-vir-gen')}
${ROUTE(ROW_Y(1) + 4, ['ssDNA', 'host DNA pol', 'dsDNA', 'host RNA pol', 'mRNA'], 'arr-vir-gen')}
${ROUTE(ROW_Y(2) + 4, ['(+) RNA', 'IS already', 'mRNA'], 'arr-vir-gen')}
<g class="fig-accent"><text x="424" y="${ROW_Y(2) + 9}" font-size="12.5" fill="currentColor">naked genome alone is infectious</text></g>
${ROUTE(ROW_Y(3) + 4, ['(−) RNA', 'RdRp (packed)', 'mRNA'], 'arr-vir-gen')}
<g class="fig-accent-2"><text x="424" y="${ROW_Y(3) + 9}" font-size="12.5" fill="currentColor">naked genome NOT infectious</text></g>
${ROUTE(ROW_Y(4) + 4, ['dsRNA', 'RdRp (packed)', 'mRNA'], 'arr-vir-gen')}
<g class="fig-accent-2"><text x="424" y="${ROW_Y(4) + 9}" font-size="12.5" fill="currentColor">(+) strand locked in the duplex</text></g>
${ROUTE(ROW_Y(5) + 4, ['(+) RNA', 'RT (packed)', 'dsDNA', 'integrase', 'provirus', 'host Pol II', 'mRNA'], 'arr-vir-gen')}
<g class="fig-muted">
<text x="662" y="${ROW_Y(0) + 5}" font-size="14" font-weight="700" fill="currentColor">No (host enzymes)</text>
<text x="662" y="${ROW_Y(1) + 5}" font-size="14" font-weight="700" fill="currentColor">No (host enzymes)</text>
<text x="662" y="${ROW_Y(2) + 5}" font-size="14" font-weight="700" fill="currentColor">No — builds RdRp</text>
</g>
<g class="fig-accent-2">
<text x="662" y="${ROW_Y(3) + 5}" font-size="14" font-weight="700" fill="currentColor">YES — RdRp</text>
<text x="662" y="${ROW_Y(4) + 5}" font-size="14" font-weight="700" fill="currentColor">YES — RdRp</text>
<text x="662" y="${ROW_Y(5) + 5}" font-size="14" font-weight="700" fill="currentColor">YES — RT + integrase</text>
</g>
<text x="846" y="${ROW_Y(0) + 1}" font-size="14" fill="currentColor">nucleus</text><text x="846" y="${ROW_Y(0) + 17}" font-size="12" fill="currentColor">host machinery</text>
<text x="846" y="${ROW_Y(1) + 5}" font-size="14" fill="currentColor">nucleus</text>
<text x="846" y="${ROW_Y(2) + 5}" font-size="14" fill="currentColor">cytoplasm</text>
<text x="846" y="${ROW_Y(3) + 1}" font-size="14" fill="currentColor">cytoplasm</text><text x="846" y="${ROW_Y(3) + 17}" font-size="12" fill="currentColor">(influenza: nucleus)</text>
<text x="846" y="${ROW_Y(4) + 5}" font-size="14" fill="currentColor">cytoplasm</text>
<text x="846" y="${ROW_Y(5) + 1}" font-size="14" fill="currentColor">RT: cytoplasm</text><text x="846" y="${ROW_Y(5) + 17}" font-size="12" fill="currentColor">integration: nucleus</text>
<text x="500" y="426" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">host cells have NO RNA-dependent RNA polymerase — every RNA virus except retroviruses must encode one</text>
<text x="500" y="449" font-size="15" text-anchor="middle" fill="currentColor">the farther a genome sits from mRNA, the more the virion must carry — and the less infectious the naked genome is</text>
</svg>`

/* 7 — The retrovirus cycle with HIV's drug targets (lead, 1000×460) */
const DRUG = (x: number, y: number, w: number, l1: string, l2: string) =>
  `<rect x="${x}" y="${y}" width="${w}" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/>` +
  `<text x="${x + w / 2}" y="${y + 16}" font-size="12.5" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text>` +
  `<text x="${x + w / 2}" y="${y + 31}" font-size="12" text-anchor="middle" fill="currentColor">${l2}</text>`
const hivSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-vir-hiv')}</defs>
<rect x="190" y="50" width="720" height="350" rx="70" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted"><text x="330" y="386" font-size="14" font-weight="700" fill="currentColor">CD4⁺ T cell</text></g>
<text x="90" y="104" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">HIV virion</text>
<text x="90" y="124" font-size="13" text-anchor="middle" fill="currentColor">2 × (+)RNA + RT inside</text>
<circle cx="90" cy="206" r="46" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">${SPIKES(90, 206, 46, 56, 10, 4.5)}</g>
<g class="fig-accent">${WAVE(62, 118, 196, 7, 3)}${WAVE(62, 118, 214, 7, 3)}</g>
<circle cx="90" cy="232" r="7" fill="currentColor" fill-opacity="0.5"/><text x="104" y="238" font-size="11" fill="currentColor">RT</text>
<g class="fig-accent"><path d="M190 196 L178 196 M178 196 L170 188 M178 196 L170 204 M190 220 L178 220 M178 220 L170 212 M178 220 L170 228" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></g>
<text x="90" y="292" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">① gp120 → CD4 + CCR5</text>
<text x="90" y="310" font-size="13" text-anchor="middle" fill="currentColor">fusion → entry</text>
<g class="fig-accent-2">${DRUG(30, 326, 120, 'CCR5 antagonist', 'blocks entry')}</g>
<text x="300" y="104" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">② reverse transcription</text>
<g class="fig-accent">${WAVE(262, 338, 142, 8, 3.5)}<text x="300" y="128" font-size="12" text-anchor="middle" fill="currentColor">(+) RNA</text></g>
<line x1="300" y1="152" x2="300" y2="198" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-hiv)"/>
<text x="312" y="180" font-size="15" font-weight="700" fill="currentColor">RT</text>
<line x1="262" y1="210" x2="338" y2="210" stroke="currentColor" stroke-width="4"/><line x1="262" y1="220" x2="338" y2="220" stroke="currentColor" stroke-width="4"/>
<text x="300" y="246" font-size="13" text-anchor="middle" fill="currentColor">dsDNA</text>
<g class="fig-accent-2">${DRUG(232, 262, 136, 'NRTI (e.g. AZT)', 'chain terminator')}
<text x="300" y="326" font-size="13" text-anchor="middle" fill="currentColor">RT has no proofreading</text>
<text x="300" y="343" font-size="13" text-anchor="middle" fill="currentColor">→ a swarm of mutants</text>
</g>
<line x1="344" y1="215" x2="456" y2="215" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-hiv)"/>
<ellipse cx="600" cy="215" rx="140" ry="105" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><text x="600" y="132" font-size="13" text-anchor="middle" fill="currentColor">nucleus</text></g>
<text x="600" y="162" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">③ INTEGRASE inserts it</text>
<line x1="490" y1="200" x2="710" y2="200" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent"><line x1="560" y1="200" x2="640" y2="200" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
<text x="600" y="188" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">PROVIRUS</text></g>
<text x="600" y="228" font-size="12" text-anchor="middle" fill="currentColor">copied with every cell division</text>
<text x="600" y="256" font-size="12.5" text-anchor="middle" fill="currentColor">host RNA Pol II transcribes it →</text>
<text x="600" y="274" font-size="12.5" text-anchor="middle" fill="currentColor">new genomes + mRNA</text>
<g class="fig-accent-2">${DRUG(530, 330, 140, 'integrase inhibitor', 'no provirus')}</g>
<line x1="742" y1="215" x2="786" y2="215" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-hiv)"/>
<text x="828" y="160" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">④ translate</text>
<text x="828" y="178" font-size="13" text-anchor="middle" fill="currentColor">one polyprotein</text>
<line x1="800" y1="222" x2="878" y2="246" stroke="currentColor" stroke-width="3" marker-end="url(#arr-vir-hiv)"/>
<text x="828" y="212" font-size="13" text-anchor="middle" fill="currentColor">mRNA</text>
<text x="826" y="276" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">⑤ assemble + bud</text>
<g class="fig-accent-2"><text x="826" y="294" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">PROTEASE matures it</text>
${DRUG(750, 306, 154, 'protease inhibitor', 'non-infectious progeny')}</g>
<rect x="896" y="210" width="28" height="56" class="fig-bg"/>
<path d="M910 210 C 880 218, 876 258, 910 266" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="922" cy="238" r="24" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">${WAVE(908, 936, 238, 5, 2.5)}</g>
<g class="fig-accent-2"><circle cx="946" cy="232" r="4" fill="currentColor"/><circle cx="942" cy="252" r="4" fill="currentColor"/><circle cx="944" cy="220" r="4" fill="currentColor"/></g>
<text x="958" y="190" font-size="12" text-anchor="middle" fill="currentColor">budding</text>
<text x="500" y="428" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">four viral steps, four drug classes — RT has no proofreading, so monotherapy fails: HAART combines ≥ 3</text>
<g class="fig-accent-2"><text x="500" y="451" font-size="14" text-anchor="middle" fill="currentColor">integration is the point of no return: the provirus is a reservoir no drug reaches — suppressible, not curable (compare lysogeny)</text></g>
</svg>`

/* 8 — Antigenic drift vs antigenic shift (lead, 1000×460) */
const DRIFT_VIRION = (cx: number, cy: number, mutated: number) => {
  let s = `<circle cx="${cx}" cy="${cy}" r="30" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>`
  for (let i = 0; i < 10; i++) {
    const a = (Math.PI * 2 * i) / 10
    const c = Math.cos(a), si = Math.sin(a)
    const cls = i < mutated ? 'fig-accent-2' : 'fig-accent'
    s += `<g class="${cls}"><line x1="${f(cx + 30 * c)}" y1="${f(cy + 30 * si)}" x2="${f(cx + 44 * c)}" y2="${f(cy + 44 * si)}" stroke="currentColor" stroke-width="2.5"/><circle cx="${f(cx + 48 * c)}" cy="${f(cy + 48 * si)}" r="4.5" fill="currentColor"/></g>`
  }
  return s
}
const driftShiftSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-vir-dri')}</defs>
<g class="fig-muted"><line x1="500" y1="30" x2="500" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 7"/></g>
<g class="fig-accent"><text x="250" y="44" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">ANTIGENIC DRIFT</text></g>
<g class="fig-accent-2"><text x="750" y="44" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">ANTIGENIC SHIFT</text></g>
${DRIFT_VIRION(110, 150, 0)}${DRIFT_VIRION(250, 150, 2)}${DRIFT_VIRION(390, 150, 4)}
<line x1="166" y1="150" x2="192" y2="150" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-vir-dri)"/>
<line x1="306" y1="150" x2="332" y2="150" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-vir-dri)"/>
<g class="fig-muted">
<text x="179" y="136" font-size="12" text-anchor="middle" fill="currentColor">mutate</text>
<text x="319" y="136" font-size="12" text-anchor="middle" fill="currentColor">mutate</text>
<text x="110" y="222" font-size="13" text-anchor="middle" fill="currentColor">season 1</text>
<text x="250" y="222" font-size="13" text-anchor="middle" fill="currentColor">season 2</text>
<text x="390" y="222" font-size="13" text-anchor="middle" fill="currentColor">season 3</text>
</g>
<g class="fig-accent-2"><text x="390" y="92" font-size="12" text-anchor="middle" fill="currentColor">changed spikes</text></g>
<text x="250" y="262" font-size="15" text-anchor="middle" fill="currentColor">RdRp has no proofreading → surface antigens drift</text>
<text x="250" y="284" font-size="15" text-anchor="middle" fill="currentColor">last year's antibodies bind a little worse</text>
<g class="fig-accent"><text x="250" y="312" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">→ seasonal EPIDEMICS · vaccine updated yearly</text></g>
<g class="fig-muted"><text x="250" y="340" font-size="14" text-anchor="middle" fill="currentColor">non-segmented viruses can only drift (and recombine)</text></g>
<text x="610" y="76" font-size="14" text-anchor="middle" fill="currentColor">human strain</text>
<text x="890" y="76" font-size="14" text-anchor="middle" fill="currentColor">avian strain</text>
<circle cx="610" cy="128" r="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>${SEGS(610, 128, 40, [])}
<circle cx="890" cy="128" r="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>${SEGS(890, 128, 40, [0, 1, 2, 3, 4, 5, 6, 7])}
<line x1="640" y1="160" x2="700" y2="192" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-vir-dri)"/>
<line x1="860" y1="160" x2="800" y2="192" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-vir-dri)"/>
<rect x="672" y="194" width="156" height="60" rx="18" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="750" y="218" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">one pig cell</text>
<text x="750" y="238" font-size="12.5" text-anchor="middle" fill="currentColor">the “mixing vessel”</text>
<line x1="750" y1="256" x2="750" y2="282" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-vir-dri)"/>
<circle cx="750" cy="328" r="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>${SEGS(750, 328, 40, [2])}
<text x="696" y="316" font-size="14" text-anchor="end" fill="currentColor">reassortant progeny:</text>
<text x="696" y="334" font-size="14" text-anchor="end" fill="currentColor">7 human segments</text>
<g class="fig-accent-2"><text x="696" y="352" font-size="14" font-weight="700" text-anchor="end" fill="currentColor">+ a novel avian HA</text></g>
<text x="804" y="316" font-size="14" fill="currentColor">nobody has immunity</text>
<g class="fig-accent-2"><text x="804" y="340" font-size="18" font-weight="700" fill="currentColor">→ PANDEMIC</text></g>
<text x="804" y="362" font-size="13" fill="currentColor">needs a SEGMENTED genome</text>
<text x="500" y="420" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">drift = gradual point mutations (epidemics) · shift = wholesale segment reassortment (pandemics)</text>
<g class="fig-muted"><text x="500" y="444" font-size="14" text-anchor="middle" fill="currentColor">phenotypic mixing is the look-alike: a coat from the other strain with no genetic change — gone in one generation</text></g>
</svg>`

/* 9 — Smaller than viruses: viroid, prion, satellite (replace-table, 560×440) */
const subviralSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<line x1="16" y1="146" x2="544" y2="146" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="16" y1="302" x2="544" y2="302" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
</g>
<g class="fig-accent"><circle cx="70" cy="80" r="26" fill="none" stroke="currentColor" stroke-width="3.5" stroke-dasharray="7 3"/><text x="70" y="85" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">RNA</text></g>
<g class="fig-muted"><text x="70" y="126" font-size="11" text-anchor="middle" fill="currentColor">no coat at all</text></g>
<text x="140" y="46" font-size="17" font-weight="700" fill="currentColor">VIROID</text>
<text x="140" y="68" font-size="14" fill="currentColor">small naked circular RNA — no protein coat,</text>
<text x="140" y="88" font-size="14" fill="currentColor">encodes NOTHING; host RNA polymerase copies it</text>
<text x="140" y="112" font-size="14" fill="currentColor">pathogenic via RNA structure / silencing · plant disease</text>
<g class="fig-accent">
<path d="M26 192 c 10 -10 10 10 20 0 c 10 -10 10 10 20 0 M26 206 c 10 -10 10 10 20 0 c 10 -10 10 10 20 0 M26 220 c 10 -10 10 10 20 0 c 10 -10 10 10 20 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<text x="46" y="246" font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">PrP-C</text>
<text x="46" y="259" font-size="10" text-anchor="middle" fill="currentColor">α-helix</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-vir-sub-r')}</defs>
<line x1="72" y1="206" x2="88" y2="206" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-vir-sub-r)"/>
<rect x="94" y="184" width="30" height="5" rx="2" fill="currentColor"/><rect x="94" y="194" width="30" height="5" rx="2" fill="currentColor"/><rect x="94" y="204" width="30" height="5" rx="2" fill="currentColor"/><rect x="94" y="214" width="30" height="5" rx="2" fill="currentColor"/><rect x="94" y="224" width="30" height="5" rx="2" fill="currentColor"/>
<text x="109" y="246" font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">PrP-Sc</text>
<text x="109" y="259" font-size="10" text-anchor="middle" fill="currentColor">β-sheet</text>
<text x="140" y="172" font-size="17" font-weight="700" fill="currentColor">PRION — misfolded PROTEIN only</text>
</g>
<text x="140" y="194" font-size="14" fill="currentColor">no nucleic acid: PrP-Sc templates normal PrP-C</text>
<text x="140" y="214" font-size="14" fill="currentColor">into more PrP-Sc — a conformational chain reaction</text>
<g class="fig-accent-2"><text x="140" y="238" font-size="13" fill="currentColor">UV- and nuclease-RESISTANT · protease-resistant aggregate</text>
<text x="140" y="256" font-size="13" fill="currentColor">heat-stable · no immune response (PrP is self)</text></g>
<text x="140" y="280" font-size="13" fill="currentColor">CJD, kuru, BSE — spongiform encephalopathies; inherits SHAPE</text>
<g class="fig-accent-2"><circle cx="40" cy="366" r="20" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/><text x="40" y="371" font-size="11" font-weight="700" text-anchor="middle" fill="currentColor">HBV</text>
<line x1="64" y1="366" x2="78" y2="366" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-vir-sub-r)"/>
<text x="71" y="350" font-size="10" text-anchor="middle" fill="currentColor">HBsAg</text>
<circle cx="98" cy="366" r="22" fill="none" stroke="currentColor" stroke-width="3"/></g>
<g class="fig-accent"><circle cx="98" cy="366" r="11" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g>
<g class="fig-muted"><text x="98" y="402" font-size="11" text-anchor="middle" fill="currentColor">HDV in a</text><text x="98" y="414" font-size="11" text-anchor="middle" fill="currentColor">borrowed coat</text></g>
<text x="140" y="328" font-size="17" font-weight="700" fill="currentColor">SATELLITE / DEFECTIVE virus</text>
<text x="140" y="350" font-size="14" fill="currentColor">genome lacks essential genes → replicates only</text>
<text x="140" y="370" font-size="14" fill="currentColor">with a HELPER virus co-infecting the same cell</text>
<text x="140" y="394" font-size="13" fill="currentColor">hepatitis D wraps itself in hepatitis B's surface antigen</text>
<g class="fig-accent"><text x="140" y="414" font-size="13" font-weight="700" fill="currentColor">→ the HBV vaccine also prevents hepatitis D</text></g>
</svg>`

export const mcatVirusesFigures: DeckFigurePlacement[] = [
  {
    at: 'What a Virus Is (and Is Not)',
    mode: 'lead',
    figure: {
      svg: virionSvg,
      alt:
        'Two virions side by side. Left, a naked virion: a hexagonal protein capsid built from repeating capsomeres with a blue wavy genome inside, labelled DNA or RNA, never both, single- or double-stranded, linear, circular or segmented. Below it: tough protein shell; fecal-oral spread, surfaces, survives GI acid; released by lysis, which kills the cell. Right, an enveloped virion: the same capsid and genome inside a host-derived lipid bilayer ring studded with red lollipop spikes, the viral glycoproteins that bind the receptor; the envelope is gained by budding. Below it: fragile lipid envelope; detergent, drying and stomach acid destroy it; contact or respiratory spread; released by budding. Footer: one nucleic acid, no ribosomes, no metabolism, 20 to 300 nm, obligate intracellular parasite.',
      caption: 'A virion is a genome in a protein box — with or without a borrowed membrane, and that one difference predicts how it spreads.',
    },
    blocks: [
      '- **Virion** = ONE nucleic acid (DNA *or* RNA) in a capsid of **capsomeres**, ± a host-derived **envelope**',
      '- **Naked = rugged** (fecal-oral, surfaces) · **enveloped = fragile** (droplets / contact; acid, soap, drying)',
    ],
  },
  {
    at: 'The Six-Step Infectious Cycle',
    mode: 'lead',
    figure: {
      svg: cycleSvg,
      alt:
        'One host cell drawn as a rounded rectangle with the six steps numbered around and inside it. 1, attachment, outside at the left: a virion’s red spike meets a blue receptor on the membrane; spike-receptor fit equals tropism, and with no receptor there is no infection. 2, penetration: the virion enters by endocytosis (drawn inside a dashed vesicle) or, for enveloped viruses, fusion. 3, uncoating: the capsid opens and the blue genome is freed. 4, synthesis, in a box: genome copies and mRNA to proteins on host ribosomes; the strategy is set by the genome type. 5, assembly: new capsids self-assemble. 6, release, two exits on the right: lysis through a ruptured membrane, scattering naked virions and killing the cell; or budding through the membrane, which wraps the capsid in an envelope with spikes while the cell survives and keeps shedding. Footer: entry-step drugs prevent infection; late-step drugs suppress progeny from cells already infected.',
      caption: 'Attach, penetrate, uncoat, synthesize, assemble, release — and where a drug acts on this ring tells you who it protects.',
    },
    blocks: [
      '- **Attach** (spike ↔ receptor = **tropism**) → penetrate → **uncoat** → synthesize → assemble → release',
      '- Release by **lysis** (naked; the cell dies) or **budding** (gains the envelope; cell keeps shedding)',
    ],
  },
  {
    at: 'Quantifying Infection',
    mode: 'after',
    figure: {
      svg: growthSvg,
      alt:
        'Left: a plaque assay — a round dish with a blue cell monolayer and six clear circular plaques, each founded by one infectious virion; titer in PFU per mL equals plaques divided by dilution times the volume plated, with the lesson’s example 42 plaques from 0.1 mL of a 10 to the minus 6 dilution giving 4.2 times 10 to the 8 PFU per mL. Right: a one-step growth curve, infectious virions per cell on a log axis against time after a synchronized infection. The blue intracellular curve starts at the adsorbed input, drops to zero during the shaded eclipse period (uncoated: genome and parts but no particle, so infectivity is zero), then climbs steeply during assembly to a plateau. The dashed red extracellular curve stays at zero until release, then rises abruptly to the burst plateau. Footer: a virus disassembles to reproduce; infectivity vanishes, then multiplies, which no dividing cell does. Curve shapes are illustrative.',
      caption: 'Counting infectivity: each plaque is one virion, and the eclipse — infectivity falling to zero before it multiplies — is the fingerprint of synthesis-and-assembly (curve illustrative).',
    },
    blocks: [
      '- **Plaque assay:** each clear zone = ONE infectious virion → PFU; titer = plaques ÷ (dilution × mL plated)',
      '- **One-step growth curve:** eclipse (zero infectivity after uncoating) → assembly → **burst** per cell',
    ],
  },
  {
    at: 'The Phage Body Plan',
    mode: 'lead',
    figure: {
      svg: phageSvg,
      alt:
        'Two panels, each a tailed phage standing on a bacterium drawn as a rounded double-walled rectangle. Panel 1, adsorption: a hexagonal icosahedral head packed with blue dsDNA, a collar, a long tail sheath, a baseplate and four tail fibers whose red tips touch the bacterial surface; the fibers find the receptor — LPS, pili or teichoic acids; the tail is contractile in T4, not in lambda. Panel 2, injection, the Hershey and Chase experiment: the sheath has contracted, short and wide, like a syringe, and a blue arrow carries the DNA from the now-empty head straight through the envelope into the cell, where it lies as a wavy strand; the red label says the 35S-labeled protein stays outside, the blue label says the 32P-labeled DNA is inside, so DNA is the genetic material. Footer: only the injected 32P DNA programmed progeny; the 35S shell could be blended off the cells (1952).',
      caption: 'A tailed phage is a syringe: fibers find the receptor, the sheath contracts, DNA goes in and the capsid stays out — Hershey and Chase’s proof that DNA is the genetic material.',
    },
    blocks: [
      '- Icosahedral head of **dsDNA** + tail + **tail fibers** that find the receptor (LPS, pili, teichoic acids)',
      '- The tail injects **only the DNA**; the capsid stays outside — Hershey–Chase: **³²P in, ³⁵S out**',
    ],
  },
  {
    at: 'The Lysogenic Cycle (Temperate Phages',
    mode: 'lead',
    figure: {
      svg: lysogenySvg,
      alt:
        'A fork after phage DNA is injected. Red left branch, lytic (virulent, T4) — favored by rich medium and many hosts: early genes (nucleases eat host DNA, copy the phage genome), then late genes (capsids plus lysis proteins), then assembly and lysozyme rupturing the wall, ending in a burst of progeny drawn as scattered hexagons. Blue right branch, lysogenic (temperate, lambda) — favored by a starved host and a high phage-to-host ratio: integrase inserts the genome site-specifically into the host chromosome, drawn as a ring with a thick blue prophage segment; the prophage is copied passively with every division and every daughter cell is a lysogen; a repressor silences the lytic genes and grants superinfection immunity to the same phage. A red induction arrow runs from the repressor box back to the lytic burst: UV or DNA damage destroys the repressor, the prophage excises and enters the lytic cycle — abandon the sinking ship.',
      caption: 'A temperate phage has a choice: kill now (lytic) or integrate and wait (lysogenic) — and DNA damage flips the switch back to lysis.',
    },
    blocks: [
      '- **Lytic:** early genes copy, late genes build, lysozyme bursts · **Lysogenic:** integrase → **prophage**',
      '- **Repressor** silences + superinfection immunity · **Induction:** DNA damage kills the repressor → lysis',
    ],
  },
  {
    at: 'One Question Organizes Everything',
    mode: 'lead',
    figure: {
      svg: genomeGridSvg,
      alt:
        'A six-row grid, one row per genome class, each row drawing the route to mRNA as boxes joined by labelled arrows, then whether the virion must pack a polymerase, then where it replicates. dsDNA (herpes, adeno): host RNA polymerase transcribes it to mRNA; no polymerase packed; nucleus. ssDNA (parvo): host DNA polymerase makes it dsDNA, host RNA polymerase makes mRNA; none packed; nucleus. Positive ssRNA (polio, corona): the genome already is mRNA; none packed, it makes its own RdRp; cytoplasm; the naked genome alone is infectious. Negative ssRNA (flu, rabies, measles): the packed RNA-dependent RNA polymerase transcribes it to mRNA; yes, RdRp packed; cytoplasm (influenza in the nucleus); the naked genome is not infectious. dsRNA (rota): packed RdRp transcribes it; yes, RdRp; cytoplasm; the plus strand is locked in the duplex. Retrovirus positive ssRNA (HIV): packed reverse transcriptase makes dsDNA, integrase makes a provirus, host Pol II makes mRNA; yes, RT plus integrase; RT in the cytoplasm, integration and transcription in the nucleus. Footer: host cells have no RNA-dependent RNA polymerase, so every RNA virus except retroviruses must encode one; the farther a genome sits from mRNA, the more the virion must carry and the less infectious the naked genome is.',
      caption: 'One question — how far is this genome from mRNA? — decides what the virion must pack, where it replicates, and whether the naked genome can infect.',
    },
    blocks: [
      '- **Distance from mRNA** decides what the virion must carry: DNA borrows host polymerases; **(+)RNA IS mRNA**',
      '- **(−)RNA and dsRNA pack RdRp**; retroviruses pack **RT** — host cells have no RNA-dependent RNA polymerase',
    ],
  },
  {
    at: 'The Retrovirus Exception to the Central Dogma',
    mode: 'lead',
    figure: {
      svg: hivSvg,
      alt:
        'HIV’s cycle through a CD4-positive T cell, with its four drug targets in dashed red boxes. Outside, left: an enveloped virion with red spikes, two blue plus-RNA strands and reverse transcriptase inside. Step 1, gp120 binds CD4 and CCR5 and the envelope fuses — target: CCR5 antagonist blocks entry. Step 2, in the cytoplasm, RT copies the RNA into dsDNA — target: NRTI such as AZT, a chain terminator; RT has no proofreading, so a swarm of mutants arises. Step 3, in the nucleus, integrase inserts the dsDNA into the host chromosome as a provirus, drawn as a thick blue segment in the chromosome line, copied with every cell division and transcribed by host RNA Pol II into new genomes and mRNA — target: integrase inhibitor, no provirus. Step 4, mRNA is translated as one polyprotein. Step 5, assembly and budding through the membrane; protease matures the particle — target: protease inhibitor, progeny non-infectious. Footer: four viral steps, four drug classes; because RT has no proofreading monotherapy fails and HAART combines three or more; integration is the point of no return, the provirus is a reservoir no drug reaches, suppressible but not curable, compare lysogeny.',
      caption: 'RNA to DNA to provirus: each enzyme HIV brings is a drug target, and integration is the point of no return.',
    },
    blocks: [
      '- **RT** (RNA → dsDNA) → **integrase** (→ provirus, permanent) → host Pol II → **protease** matures the bud',
      '- Drugs: CCR5 antagonist · **NRTI** (AZT) · integrase inhibitor · protease inhibitor — sloppy RT ⇒ **HAART**',
    ],
  },
  {
    at: 'Drift, Shift, and Vaccine Logic',
    mode: 'lead',
    figure: {
      svg: driftShiftSvg,
      alt:
        'Left, antigenic drift: the same virion across three seasons, its ten spikes turning from blue to red two at a time as point mutations accumulate; RdRp has no proofreading so surface antigens drift, last year’s antibodies bind a little worse, giving seasonal epidemics and a yearly vaccine update; non-segmented viruses can only drift and recombine. Right, antigenic shift: a human strain with eight blue genome segments and an avian strain with eight red segments both infect one pig cell, the mixing vessel; the reassortant progeny carries seven human segments plus one novel avian HA segment, nobody has immunity, result pandemic; this needs a segmented genome. Footer: drift is gradual point mutations (epidemics), shift is wholesale segment reassortment (pandemics); phenotypic mixing is the look-alike — a coat from the other strain with no genetic change, gone in one generation.',
      caption: 'Drift is a spike mutating a little each season; shift is a whole segment swapped in a co-infected cell — only segmented genomes can do it.',
    },
    blocks: [
      '- **Drift** = point mutations in surface antigens (sloppy RdRp) → epidemics, annual vaccine reformulation',
      '- **Shift** = segment **reassortment** in a co-infected cell → novel HA/NA, no immunity → **pandemic**',
    ],
  },
  {
    at: 'Smaller Than Viruses',
    mode: 'replace-table',
    figure: {
      svg: subviralSvg,
      alt:
        'Three rows. Viroid: a dashed blue circle of RNA with no coat at all — a small naked circular RNA that encodes nothing, copied by host RNA polymerase, pathogenic via RNA structure or silencing, plant disease. Prion, misfolded protein only: a blue alpha-helix coil (PrP-C) becomes red stacked beta-sheet bars (PrP-Sc), which template more PrP-C into PrP-Sc in a conformational chain reaction; UV- and nuclease-resistant, a protease-resistant aggregate, heat-stable, no immune response because PrP is self; CJD, kuru and BSE, the spongiform encephalopathies; it inherits shape, not sequence. Satellite or defective virus: a red HBV helper hands its surface antigen HBsAg to a small blue HDV genome wearing a borrowed red coat; a genome lacking essential genes replicates only with a helper virus co-infecting the same cell, hepatitis D wraps itself in hepatitis B’s surface antigen, so the HBV vaccine also prevents hepatitis D.',
      caption: 'Below the virus: an RNA with no coat, a protein with no genome, and a genome that borrows a helper’s coat.',
    },
    blocks: [
      '- **Viroid:** naked circular RNA, no coat, encodes nothing — host RNA polymerase copies it (plant disease)',
      '- **Prion:** misfolded PROTEIN only — PrP-Sc templates PrP-C α-helix → β-sheet; UV/nuclease/protease-resistant',
      '- **Prion diseases:** CJD, kuru, BSE — no genome to mutate, no immune response, inheritance of SHAPE',
      '- **Satellite (HDV):** lacks essential genes — needs helper HBV’s surface antigen; HBV vaccine prevents it too',
    ],
  },
]
