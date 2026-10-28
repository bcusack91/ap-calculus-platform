import type { DeckFigurePlacement } from './index'

/**
 * Cell Signaling (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing is ours, drawn from the concept (cells as circles, receptors
 * as rounded boxes on a schematic bilayer, pathways as boxes joined by arrows,
 * a widening cascade, textbook-shaped dose–response curves captioned
 * "illustrative"). No textbook, prep-company, AAMC or web figure was copied.
 * Molecules are labelled boxes/circles, never structural formulas; the only
 * numbers drawn are the ones the lesson states.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so every
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-cs-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

const f = (v: number) => +v.toFixed(1)

/** One phospholipid: head circle at (x, y), two tails of length `len` along (dx, dy). */
const LIPID = (x: number, y: number, dx: number, dy: number, r: number, len: number) => {
  const px = -dy * 3
  const py = dx * 3
  const sx = x + dx * r
  const sy = y + dy * r
  const ex = x + dx * (r + len)
  const ey = y + dy * (r + len)
  return (
    `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1.5"/>` +
    `<path d="M${f(sx + px)} ${f(sy + py)} L${f(ex + px)} ${f(ey + py)} M${f(sx - px)} ${f(sy - py)} L${f(ex - px)} ${f(ey - py)}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`
  )
}

/** A horizontal bilayer strip from x0 to x1 (heads on yTop / yBot); `gaps` are x-ranges left empty for proteins. */
const BILAYER_H = (x0: number, x1: number, yTop: number, yBot: number, gaps: [number, number][] = [], step = 24, r = 9) => {
  const len = (yBot - yTop) / 2 - r - 3
  let s = ''
  for (let x = x0; x <= x1 + 0.01; x += step) {
    if (gaps.some(([a, b]) => x > a && x < b)) continue
    s += LIPID(x, yTop, 0, 1, r, len) + LIPID(x, yBot, 0, -1, r, len)
  }
  return s
}

/** A rounded, lightly filled box with a centred one-line label. */
const BOX = (x: number, y: number, w: number, h: number, label: string, fs = 19, bold = true, rx = 12) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>` +
  `<text x="${x + w / 2}" y="${y + h / 2 + fs * 0.36}" font-size="${fs}"${bold ? ' font-weight="700"' : ''} text-anchor="middle" fill="currentColor">${label}</text>`

/** Polyline points for y = fn(s) sampled n times on [s0, s1]. */
const CURVE = (fn: (s: number) => number, s0: number, s1: number, n: number, sx: (s: number) => number, sy: (v: number) => number) => {
  const pts: string[] = []
  for (let i = 0; i <= n; i++) {
    const s = s0 + ((s1 - s0) * i) / n
    pts.push(`${f(sx(s))},${f(sy(fn(s)))}`)
  }
  return pts.join(' ')
}

/* 1 — Modes of intercellular signaling: five distance panels (replace-table, 560×440) */
const CELL = (cx: number, cy: number, r: number, cls = '') =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"${cls ? ` class="${cls}"` : ''}/>`
const DOTS = (pts: [number, number][]) => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="currentColor"/>`).join('')
const modesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-cs-modes')}</defs>
<g class="fig-muted">
<rect x="8" y="8" width="268" height="130" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>
<rect x="284" y="8" width="268" height="130" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>
<rect x="8" y="146" width="268" height="130" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>
<rect x="284" y="146" width="268" height="130" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>
<rect x="8" y="284" width="544" height="112" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/>
</g>
<text x="142" y="32" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Endocrine — long range</text>
${CELL(48, 90, 22)}${CELL(236, 90, 22)}
<g class="fig-accent">
<rect x="78" y="76" width="130" height="28" rx="14" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<text x="143" y="68" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">bloodstream</text>
</g>
<g class="fig-accent-2">${DOTS([[90, 90], [120, 86], [150, 93], [180, 88]])}</g>
<line x1="186" y1="90" x2="208" y2="90" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-modes)"/>
<text x="142" y="128" font-size="14" text-anchor="middle" fill="currentColor">insulin, cortisol, thyroid hormone</text>
<text x="418" y="32" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Paracrine — local</text>
${CELL(362, 90, 22)}${CELL(474, 90, 22)}
<g class="fig-accent-2">${DOTS([[400, 82], [414, 96], [430, 86]])}</g>
<line x1="392" y1="90" x2="446" y2="90" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-modes)"/>
<text x="418" y="128" font-size="15" text-anchor="middle" fill="currentColor">growth factors, histamine, NO</text>
<text x="142" y="170" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Autocrine — self</text>
${CELL(142, 226, 24)}
<g class="fig-accent-2">${DOTS([[108, 202], [176, 206]])}</g>
<path d="M150 204 C 190 176, 196 220, 168 226" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-modes)"/>
<path d="M134 204 C 94 176, 88 220, 116 226" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-modes)"/>
<text x="142" y="266" font-size="15" text-anchor="middle" fill="currentColor">T-cell IL-2; many cancers</text>
<text x="418" y="170" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Juxtacrine — contact</text>
${CELL(394, 226, 24)}${CELL(448, 226, 24)}
<g class="fig-accent-2"><rect x="414" y="218" width="8" height="16" rx="2" fill="currentColor"/></g>
<g class="fig-accent"><path d="M424 216 L430 216 L430 236 L424 236" fill="none" stroke="currentColor" stroke-width="3"/></g>
<text x="418" y="266" font-size="15" text-anchor="middle" fill="currentColor">Notch–Delta, both membrane-bound</text>
<text x="280" y="308" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Synaptic — a fast, targeted paracrine</text>
<path d="M60 350 L 230 350 C 250 350, 262 338, 262 350 C 262 362, 250 350, 230 350" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="238" y="328" width="26" height="44" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
${CELL(330, 350, 24)}
<g class="fig-accent-2">${DOTS([[276, 342], [284, 356], [292, 346]])}</g>
<line x1="270" y1="350" x2="300" y2="350" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-modes)"/>
<text x="446" y="346" font-size="15" text-anchor="middle" fill="currentColor">neurotransmitter crosses</text>
<text x="446" y="366" font-size="15" text-anchor="middle" fill="currentColor">a synaptic cleft (ms)</text>
<g class="fig-accent-2"><text x="280" y="426" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">red = ligand; the response is set by the receiving cell’s receptor</text></g>
</svg>`

/* 2 — Ligand chemistry decides where the receptor is (lead, 1000×460) */
const ligandSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-lig')}</defs>
<g class="fig-muted">
<text x="40" y="150" font-size="19" fill="currentColor">outside</text>
<text x="40" y="262" font-size="19" fill="currentColor">cytosol</text>
<line x1="500" y1="30" x2="500" y2="430" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 7"/>
</g>
<text x="270" y="48" font-size="23" font-weight="700" text-anchor="middle" fill="currentColor">Hydrophilic ligand</text>
<text x="270" y="74" font-size="19" text-anchor="middle" fill="currentColor">peptides, epinephrine — cannot cross</text>
<text x="750" y="48" font-size="23" font-weight="700" text-anchor="middle" fill="currentColor">Hydrophobic ligand</text>
<text x="750" y="74" font-size="19" text-anchor="middle" fill="currentColor">steroids, thyroid hormone, vitamin D</text>
${BILAYER_H(40, 472, 180, 240, [[236, 316]])}
${BILAYER_H(528, 960, 180, 240)}
<g class="fig-accent">
<defs>${ARROW('arr-cs-lig-b')}</defs>
<rect x="246" y="142" width="60" height="140" rx="16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="276" y="312" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">surface receptor</text>
<line x1="276" y1="290" x2="276" y2="340" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-lig-b)"/>
<text x="276" y="368" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">second messengers → kinases</text>
<text x="276" y="394" font-size="19" text-anchor="middle" fill="currentColor">existing proteins get phosphorylated</text>
<text x="276" y="432" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">FAST — seconds to minutes</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cs-lig-r')}</defs>
<circle cx="276" cy="106" r="11" fill="currentColor"/>
<line x1="276" y1="120" x2="276" y2="138" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-lig-r)"/>
<text x="300" y="112" font-size="18" fill="currentColor">first messenger</text>
<circle cx="750" cy="106" r="11" fill="currentColor"/>
<line x1="750" y1="120" x2="750" y2="282" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-lig-r)"/>
<text x="774" y="268" font-size="18" fill="currentColor">crosses the bilayer</text>
</g>
<g class="fig-accent">
<rect x="628" y="292" width="244" height="40" rx="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="750" y="319" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">intracellular receptor</text>
<line x1="750" y1="334" x2="750" y2="354" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-lig-b)"/>
<text x="750" y="378" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">= transcription factor → new mRNA, protein</text>
<text x="750" y="432" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">SLOW — hours</text>
</g>
<ellipse cx="750" cy="374" rx="236" ry="30" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6"/>
<text x="960" y="344" font-size="17" text-anchor="end" fill="currentColor">nucleus</text>
<g class="fig-muted"><text x="726" y="110" font-size="16" text-anchor="end" fill="currentColor">thyroid hormone trap:</text><text x="726" y="130" font-size="16" text-anchor="end" fill="currentColor">tyrosine-derived,</text><text x="726" y="150" font-size="16" text-anchor="end" fill="currentColor">yet lipophilic</text></g>
</svg>`

/* 3 — The four surface receptor families on one membrane (replace-table, 560×440) */
const familiesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-cs-fam')}</defs>
<g class="fig-muted">
<text x="12" y="152" font-size="15" fill="currentColor">out</text>
<text x="12" y="250" font-size="15" fill="currentColor">in</text>
<line x1="140" y1="20" x2="140" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="280" y1="20" x2="280" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="420" y1="20" x2="420" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
</g>
<text x="70" y="34" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Ion channel</text>
<text x="210" y="34" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">GPCR</text>
<text x="350" y="34" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">RTK</text>
<text x="490" y="34" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Cytokine (JAK)</text>
${BILAYER_H(14, 130, 166, 222, [[48, 92]], 14, 5)}
${BILAYER_H(154, 270, 166, 222, [[180, 240]], 14, 5)}
${BILAYER_H(294, 410, 166, 222, [[322, 378]], 14, 5)}
${BILAYER_H(434, 550, 166, 222, [[462, 518]], 14, 5)}
<g class="fig-accent">
<defs>${ARROW('arr-cs-fam-b')}</defs>
<rect x="52" y="150" width="12" height="88" rx="5" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<rect x="76" y="150" width="12" height="88" rx="5" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<line x1="70" y1="128" x2="70" y2="262" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-fam-b)"/>
<text x="92" y="258" font-size="15" fill="currentColor">Na⁺</text>
<path d="M186 150 h8 v88 h-8 z M198 150 h8 v88 h-8 z M210 150 h8 v88 h-8 z M222 150 h8 v88 h-8 z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<rect x="328" y="150" width="20" height="88" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<rect x="352" y="150" width="20" height="88" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<rect x="468" y="150" width="18" height="88" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<rect x="494" y="150" width="18" height="88" rx="6" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
</g>
<g class="fig-accent-2">
<circle cx="58" cy="128" r="7" fill="currentColor"/>
<circle cx="208" cy="134" r="7" fill="currentColor"/>
<circle cx="350" cy="134" r="7" fill="currentColor"/>
<circle cx="490" cy="134" r="7" fill="currentColor"/>
<text x="350" y="118" font-size="14" text-anchor="middle" fill="currentColor">ligand → dimer</text>
<text x="490" y="118" font-size="14" text-anchor="middle" fill="currentColor">ligand → dimer</text>
</g>
<text x="214" y="262" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">7 TM helices</text>
<ellipse cx="236" cy="286" rx="37" ry="14" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<text x="236" y="291" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">G protein</text>
<text x="320" y="258" font-size="15" font-weight="700" fill="currentColor">P</text>
<text x="374" y="258" font-size="15" font-weight="700" fill="currentColor">P</text>
<text x="350" y="282" font-size="14" text-anchor="middle" fill="currentColor">kinase built in</text>
<ellipse cx="462" cy="254" rx="18" ry="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<ellipse cx="518" cy="254" rx="18" ry="12" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<text x="462" y="259" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">JAK</text>
<text x="518" y="259" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">JAK</text>
<text x="490" y="282" font-size="14" text-anchor="middle" fill="currentColor">kinase borrowed</text>
<text x="70" y="312" font-size="14" text-anchor="middle" fill="currentColor">pore opens itself</text>
<text x="210" y="312" font-size="14" text-anchor="middle" fill="currentColor">second messengers</text>
<text x="350" y="312" font-size="14" text-anchor="middle" fill="currentColor">→ kinase cascades</text>
<text x="490" y="312" font-size="14" text-anchor="middle" fill="currentColor">→ STAT → genes</text>
<g class="fig-accent">
<text x="70" y="344" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">milliseconds</text>
<text x="210" y="344" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">seconds</text>
<text x="350" y="344" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">minutes</text>
<text x="490" y="344" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">minutes</text>
</g>
<g class="fig-muted">
<text x="70" y="372" font-size="13" text-anchor="middle" fill="currentColor">nAChR, GABA-A</text>
<text x="210" y="372" font-size="13" text-anchor="middle" fill="currentColor">β-adrenergic, M-ACh</text>
<text x="350" y="372" font-size="13" text-anchor="middle" fill="currentColor">insulin R, EGF R</text>
<text x="490" y="372" font-size="13" text-anchor="middle" fill="currentColor">EPO, growth hormone</text>
</g>
<text x="280" y="416" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">more steps between receptor and effect: slower, more amplification</text>
</svg>`

/* 4 — Dose–response curves: four things a shift can mean (replace-table, 560×440) */
const drSx = (logc: number) => 60 + 110 * (logc + 1) // log10 concentration −1 … 3.3
const drSy = (v: number) => 340 - 260 * v
const hill = (ec50: number, max = 1) => (logc: number) => (max * Math.pow(10, logc)) / (ec50 + Math.pow(10, logc))
const doseSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-cs-dr')}</defs>
<line x1="60" y1="340" x2="548" y2="340" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cs-dr)"/>
<line x1="60" y1="340" x2="60" y2="30" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cs-dr)"/>
<text x="540" y="330" font-size="15" text-anchor="end" fill="currentColor">log [agonist]</text>
<text x="20" y="48" font-size="16" fill="currentColor">response</text>
<g class="fig-muted">
<line x1="60" y1="${drSy(1)}" x2="540" y2="${drSy(1)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 6"/>
<text x="536" y="${drSy(1) - 6}" font-size="15" text-anchor="end" fill="currentColor">max</text>
<line x1="${drSx(0)}" y1="340" x2="${drSx(0)}" y2="${drSy(0.5)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 5"/>
<text x="${drSx(0)}" y="358" font-size="14" text-anchor="middle" fill="currentColor">EC₅₀</text>
</g>
<polyline points="${CURVE(hill(1), -1, 3.3, 60, drSx, drSy)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-accent">
<defs>${ARROW('arr-cs-dr-b')}</defs>
<polyline points="${CURVE(hill(10), -1, 3.3, 60, drSx, drSy)}" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="10 6"/>
<polyline points="${CURVE(hill(1, 0.55), -1, 3.3, 60, drSx, drSy)}" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="3 5"/>
<line x1="${drSx(0) + 6}" y1="${drSy(0.5)}" x2="${drSx(1) - 6}" y2="${drSy(0.5)}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-dr-b)"/>
<text x="${drSx(0.5)}" y="${drSy(0.5) - 10}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">potency ↓</text>
</g>
<g class="fig-accent-2">
<polyline points="${CURVE(hill(1, 0.45), -1, 3.3, 60, drSx, drSy)}" fill="none" stroke="currentColor" stroke-width="3"/>
</g>
<line x1="60" y1="372" x2="90" y2="372" stroke="currentColor" stroke-width="3.5"/>
<text x="98" y="377" font-size="13" fill="currentColor">agonist alone (a LEFT shift = higher potency)</text>
<g class="fig-accent">
<line x1="60" y1="391" x2="90" y2="391" stroke="currentColor" stroke-width="3" stroke-dasharray="8 5"/>
<text x="98" y="396" font-size="13" fill="currentColor"><tspan font-weight="700">right shift, same max</tspan> → competitive antagonist (surmountable)</text>
<line x1="60" y1="410" x2="90" y2="410" stroke="currentColor" stroke-width="3" stroke-dasharray="3 4"/>
<text x="98" y="415" font-size="13" fill="currentColor"><tspan font-weight="700">lower max, same EC₅₀</tspan> → noncompetitive antagonist / receptor loss</text>
</g>
<g class="fig-accent-2">
<line x1="60" y1="429" x2="90" y2="429" stroke="currentColor" stroke-width="3"/>
<text x="98" y="434" font-size="13" fill="currentColor"><tspan font-weight="700">plateau below max</tspan> at full occupancy → partial agonist</text>
</g>
</svg>`

/* 5 — The G protein cycle as a four-state loop under a GPCR (lead, 1000×460) */
const gcycleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-gc')}</defs>
<g class="fig-muted">
<text x="40" y="76" font-size="18" fill="currentColor">outside</text>
<text x="40" y="186" font-size="18" fill="currentColor">cytosol</text>
</g>
${BILAYER_H(40, 960, 100, 160, [[438, 562]])}
<g class="fig-accent">
<path d="M448 84 h12 v92 h-12 z M466 84 h12 v92 h-12 z M484 84 h12 v92 h-12 z M502 84 h12 v92 h-12 z M520 84 h12 v92 h-12 z M538 84 h12 v92 h-12 z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<text x="585" y="50" font-size="19" font-weight="700" fill="currentColor">GPCR — 7 transmembrane helices</text>
<text x="585" y="74" font-size="18" fill="currentColor">no catalytic activity of its own</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cs-gc-r')}</defs>
<circle cx="500" cy="42" r="12" fill="currentColor"/>
<text x="476" y="48" font-size="19" font-weight="700" text-anchor="end" fill="currentColor">ligand</text>
<line x1="500" y1="56" x2="500" y2="80" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-gc-r)"/>
</g>
${BOX(60, 232, 250, 72, '', 18)}
<text x="185" y="262" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Gα·GDP + βγ</text>
<text x="185" y="288" font-size="18" text-anchor="middle" fill="currentColor">resting trimer — OFF</text>
${NUM(60, 232, '1')}
${BOX(375, 196, 250, 72, '', 18)}
<text x="500" y="226" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">receptor acts as a GEF</text>
<text x="500" y="252" font-size="16" text-anchor="middle" fill="currentColor">GDP out, GTP in — no kinase</text>
${NUM(375, 196, '2')}
${BOX(690, 232, 250, 72, '', 18)}
<text x="815" y="262" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Gα·GTP  +  free βγ</text>
<text x="815" y="288" font-size="18" text-anchor="middle" fill="currentColor">both halves signal — ON</text>
${NUM(690, 232, '3')}
${BOX(385, 372, 230, 72, '', 18)}
<text x="500" y="402" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">intrinsic GTPase — OFF</text>
<text x="500" y="428" font-size="16" text-anchor="middle" fill="currentColor">hydrolyzes GTP → GDP + Pᵢ</text>
${NUM(385, 372, '4')}
<path d="M310 250 L 370 236" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-gc)"/>
<path d="M630 236 L 686 250" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-gc)"/>
<path d="M815 308 L 815 393 Q 815 408 800 408 L 622 408" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-gc)"/>
<path d="M378 408 L 200 408 Q 185 408 185 393 L 185 310" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-gc)"/>
<path d="M500 176 L 500 190" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-gc)"/>
<g class="fig-accent">
<defs>${ARROW('arr-cs-gc-b')}</defs>
<line x1="815" y1="230" x2="815" y2="218" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-gc-b)"/>
<text x="840" y="186" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">effectors</text>
<text x="840" y="206" font-size="15" text-anchor="middle" fill="currentColor">adenylyl cyclase · PLC · K⁺ channel</text>
</g>
<g class="fig-accent-2">
<text x="975" y="428" font-size="18" font-weight="700" text-anchor="end" fill="currentColor">GTPase timer = signal duration;</text>
<text x="975" y="452" font-size="18" font-weight="700" text-anchor="end" fill="currentColor">GTPase-dead Gα = stuck ON</text>
</g>
<g class="fig-muted">
<text x="200" y="332" font-size="15" fill="currentColor">GAPs speed up</text>
<text x="200" y="352" font-size="15" fill="currentColor">step 4; cholera toxin</text>
<text x="200" y="372" font-size="15" fill="currentColor">blocks it in Gαs</text>
</g>
</svg>`

/* 6 — Gs, Gi and Gq: three columns from one receptor class (replace-table, 560×440) */
const galphaSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-cs-ga')}</defs>
<g class="fig-muted">
<line x1="187" y1="56" x2="187" y2="408" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="373" y1="56" x2="373" y2="408" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
</g>
<text x="93" y="34" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Gs</text>
<text x="280" y="34" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Gi</text>
<text x="467" y="34" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Gq</text>
<g class="fig-muted">
<text x="93" y="60" font-size="13" text-anchor="middle" fill="currentColor">β1/β2 adrenergic, glucagon</text>
<text x="280" y="60" font-size="13" text-anchor="middle" fill="currentColor">α2, M2 muscarinic, opioid</text>
<text x="467" y="60" font-size="13" text-anchor="middle" fill="currentColor">α1 adrenergic, M1/M3</text>
</g>
${BOX(20, 80, 146, 40, 'adenylyl cyclase', 15)}
${BOX(207, 80, 146, 40, 'adenylyl cyclase', 15)}
${BOX(394, 80, 146, 40, 'phospholipase C', 15)}
<g class="fig-accent">
<defs>${ARROW('arr-cs-ga-b')}</defs>
<line x1="93" y1="122" x2="93" y2="156" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cs-ga-b)"/>
<text x="104" y="146" font-size="14" font-weight="700" fill="currentColor">stimulates</text>
<text x="93" y="186" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">cAMP ↑</text>
<line x1="467" y1="122" x2="467" y2="156" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cs-ga-b)"/>
<text x="478" y="146" font-size="14" font-weight="700" fill="currentColor">activates</text>
<text x="467" y="186" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">PIP₂ → IP₃ + DAG</text>
</g>
<g class="fig-accent-2">
<line x1="280" y1="122" x2="280" y2="156" stroke="currentColor" stroke-width="3.5"/>
<line x1="266" y1="150" x2="294" y2="150" stroke="currentColor" stroke-width="4"/>
<text x="300" y="146" font-size="14" font-weight="700" fill="currentColor">inhibits</text>
<text x="280" y="186" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">cAMP ↓</text>
</g>
<line x1="93" y1="196" x2="93" y2="222" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-ga)"/>
${BOX(43, 226, 100, 36, 'PKA', 17)}
<text x="93" y="286" font-size="14" text-anchor="middle" fill="currentColor">Ser/Thr phosphorylation</text>
<text x="93" y="304" font-size="14" text-anchor="middle" fill="currentColor">phosphorylase ON</text>
<text x="93" y="322" font-size="14" text-anchor="middle" fill="currentColor">glycogen synthase OFF</text>
<text x="93" y="340" font-size="14" text-anchor="middle" fill="currentColor">CREB → genes</text>
<text x="280" y="226" font-size="14" text-anchor="middle" fill="currentColor">less PKA activity</text>
<text x="280" y="258" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">freed βγ opens</text>
<text x="280" y="276" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">K⁺ (GIRK) channels</text>
<text x="280" y="300" font-size="13" text-anchor="middle" fill="currentColor">M2: pacemaker cells</text>
<text x="280" y="318" font-size="13" text-anchor="middle" fill="currentColor">hyperpolarize →</text>
<text x="280" y="336" font-size="13" text-anchor="middle" fill="currentColor">slower heart rate</text>
<line x1="440" y1="196" x2="420" y2="222" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-ga)"/>
<line x1="494" y1="196" x2="514" y2="222" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-ga)"/>
${BOX(382, 226, 74, 36, 'IP₃', 16)}
${BOX(478, 226, 74, 36, 'DAG', 16)}
<text x="467" y="286" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">IP₃ → ER Ca²⁺ release</text>
<text x="467" y="304" font-size="13" text-anchor="middle" fill="currentColor">Ca²⁺·calmodulin → MLCK</text>
<text x="467" y="322" font-size="13" text-anchor="middle" fill="currentColor">→ smooth muscle contracts</text>
<text x="467" y="340" font-size="13" text-anchor="middle" fill="currentColor">DAG stays in the membrane</text>
<text x="467" y="358" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">DAG + Ca²⁺ → PKC</text>
<g class="fig-accent"><text x="280" y="376" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">same ACh: M2 (Gi) slows the heart, M3 (Gq) contracts smooth muscle</text></g>
<g class="fig-muted"><text x="280" y="404" font-size="14" text-anchor="middle" fill="currentColor">cAMP is removed by phosphodiesterase (ATP → cAMP → AMP)</text></g>
</svg>`

/* 7 — Amplification in numbers: a cascade that widens at every catalytic tier (lead, 1000×460) */
const TIERS: [string, string, number, boolean][] = [
  // label, count, bar height, catalytic step INTO this tier?
  ['epinephrine', '1', 14, false],
  ['receptor', '1', 14, false],
  ['G proteins', '~100', 60, true],
  ['adenylyl cyclase', '~100', 60, false],
  ['cAMP', 'many', 120, true],
  ['PKA', 'many', 120, false],
  ['phosphorylase kinase', 'more', 190, true],
  ['glycogen phosphorylase', 'more', 260, true],
  ['glucose-1-P', 'millions', 330, true],
]
const ampSvg = (() => {
  const x0 = 70
  const dx = 104
  const base = 372
  let s = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-amp')}</defs>
<g class="fig-accent"><defs>${ARROW('arr-cs-amp-b')}</defs>`
  TIERS.forEach(([, , h], i) => {
    const x = x0 + i * dx
    s += `<rect x="${x - 22}" y="${base - h}" width="44" height="${h}" rx="8" fill="currentColor" fill-opacity="${0.12 + i * 0.03}" stroke="currentColor" stroke-width="2"/>`
  })
  s += '</g>'
  TIERS.forEach(([label, count, h, cat], i) => {
    const x = x0 + i * dx
    const ly = base - h - 12
    const words = label.split(' ')
    if (words.length > 1 && label.length > 12) {
      s += `<text x="${x}" y="${ly - 20}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${words[0]}</text>`
      s += `<text x="${x}" y="${ly}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${words.slice(1).join(' ')}</text>`
    } else {
      s += `<text x="${x}" y="${ly}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>`
    }
    s += `<text x="${x}" y="${base + 26}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">${count}</text>`
    if (i > 0) {
      const ax = x - dx + 24
      const bx = x - 24
      if (cat) {
        s += `<g class="fig-accent"><line x1="${ax}" y1="${base - 8}" x2="${bx}" y2="${base - 8}" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cs-amp-b)"/>` +
          `<text x="${(ax + bx) / 2}" y="${base + 44}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">×</text></g>`
      } else {
        s += `<g class="fig-muted"><line x1="${ax}" y1="${base - 8}" x2="${bx}" y2="${base - 8}" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#arr-cs-amp)"/>` +
          `<text x="${(ax + bx) / 2}" y="${base + 44}" font-size="17" text-anchor="middle" fill="currentColor">1 : 1</text></g>`
      }
    }
  })
  s += `<g class="fig-muted"><line x1="30" y1="${base}" x2="960" y2="${base}" stroke="currentColor" stroke-width="1.5"/></g>
<g class="fig-accent"><text x="320" y="446" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">× = catalytic step: one enzyme turns over many substrates</text></g>
<g class="fig-muted"><text x="840" y="446" font-size="17" text-anchor="middle" fill="currentColor">1 : 1 = binding step, no gain</text></g>
<g class="fig-accent-2"><text x="40" y="40" font-size="21" font-weight="700" fill="currentColor">one hormone molecule → millions of product molecules</text></g>
</svg>`
  return s
})()

/* 8 — RTK activation and its three downstream branches (lead, 1000×460) */
const rtkSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-rtk')}</defs>
<g class="fig-muted">
<text x="40" y="54" font-size="18" fill="currentColor">outside</text>
<text x="40" y="166" font-size="18" fill="currentColor">cytosol</text>
</g>
${BILAYER_H(40, 960, 80, 136, [[452, 548]], 24, 8)}
<g class="fig-accent">
<rect x="462" y="64" width="30" height="128" rx="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
<rect x="508" y="64" width="30" height="128" rx="9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
<text x="600" y="42" font-size="19" font-weight="700" fill="currentColor">RTK = receptor + kinase in one protein</text>
<text x="600" y="64" font-size="17" fill="currentColor">insulin, EGF, PDGF receptors</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cs-rtk-r')}</defs>
<circle cx="500" cy="36" r="11" fill="currentColor"/>
<line x1="500" y1="50" x2="500" y2="62" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-rtk-r)"/>
<text x="524" y="42" font-size="18" font-weight="700" fill="currentColor">ligand</text>
</g>
${NUM(430, 36, '1', 12)}
<text x="414" y="42" font-size="17" text-anchor="end" fill="currentColor">bind → dimerize</text>
<circle cx="458" cy="160" r="11" fill="currentColor"/><text x="458" y="165" font-size="14" font-weight="700" text-anchor="middle" class="fig-bg">P</text>
<circle cx="458" cy="184" r="11" fill="currentColor"/><text x="458" y="189" font-size="14" font-weight="700" text-anchor="middle" class="fig-bg">P</text>
<circle cx="542" cy="160" r="11" fill="currentColor"/><text x="542" y="165" font-size="14" font-weight="700" text-anchor="middle" class="fig-bg">P</text>
<circle cx="542" cy="184" r="11" fill="currentColor"/><text x="542" y="189" font-size="14" font-weight="700" text-anchor="middle" class="fig-bg">P</text>
${NUM(184, 160, '2', 12)}
<text x="436" y="166" font-size="17" text-anchor="end" fill="currentColor">trans-autophosphorylation</text>
${NUM(600, 160, '3', 12)}
<text x="620" y="166" font-size="17" fill="currentColor">P-Tyr = docking sites for SH2 proteins</text>
<line x1="470" y1="200" x2="200" y2="206" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
<line x1="500" y1="200" x2="500" y2="206" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
<line x1="530" y1="200" x2="815" y2="206" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
<g class="fig-accent">
<defs>${ARROW('arr-cs-rtk-b')}</defs>
<text x="200" y="228" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Ras–MAPK</text>
<text x="500" y="228" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">PI3K–Akt</text>
<text x="815" y="228" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">PLC-γ</text>
</g>
${BOX(40, 240, 135, 32, 'Grb2 → SOS (GEF)', 14)}
<line x1="177" y1="256" x2="196" y2="256" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
<g class="fig-accent-2">${BOX(200, 240, 110, 32, 'Ras·GTP', 15)}</g>
<text x="200" y="302" font-size="14" fill="currentColor">monomeric G protein</text>
<text x="200" y="320" font-size="14" fill="currentColor">GTPase + GAP = OFF</text>
<path d="M255 274 L 255 284 L 75 284 L 75 330" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
${BOX(40, 334, 70, 30, 'Raf', 15)}
<line x1="112" y1="349" x2="134" y2="349" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
${BOX(138, 334, 70, 30, 'MEK', 15)}
<line x1="210" y1="349" x2="232" y2="349" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
${BOX(236, 334, 70, 30, 'ERK', 15)}
<line x1="308" y1="349" x2="330" y2="349" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
<text x="338" y="346" font-size="15" font-weight="700" fill="currentColor">nucleus:</text>
<text x="338" y="364" font-size="15" fill="currentColor">cyclin D</text>
<g class="fig-accent"><text x="200" y="398" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">PROLIFERATION</text></g>
<g class="fig-muted"><text x="200" y="420" font-size="15" text-anchor="middle" fill="currentColor">3-kinase tier: amplification, switch-like</text></g>
${BOX(445, 240, 110, 32, 'PI3K', 15)}
<line x1="500" y1="274" x2="500" y2="296" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
${BOX(430, 300, 140, 32, 'PIP₂ → PIP₃', 15)}
<text x="500" y="352" font-size="14" text-anchor="middle" fill="currentColor">membrane docking lipid</text>
<line x1="500" y1="358" x2="500" y2="380" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
${BOX(445, 384, 110, 32, 'Akt (PKB)', 15)}
<g class="fig-accent-2">
<line x1="590" y1="316" x2="574" y2="316" stroke="currentColor" stroke-width="3.5"/>
<line x1="582" y1="306" x2="582" y2="326" stroke="currentColor" stroke-width="3.5"/>
<text x="598" y="312" font-size="14" font-weight="700" fill="currentColor">PTEN erases PIP₃</text>
<text x="598" y="330" font-size="14" fill="currentColor">tumor suppressor</text>
</g>
<g class="fig-accent"><text x="500" y="442" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">SURVIVAL · mTOR growth · GLUT4 insertion</text></g>
${BOX(760, 240, 110, 32, 'PLC-γ', 15)}
<line x1="815" y1="274" x2="815" y2="296" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-rtk)"/>
${BOX(735, 300, 160, 32, 'PIP₂ → IP₃ + DAG', 15)}
<text x="815" y="356" font-size="15" text-anchor="middle" fill="currentColor">Ca²⁺ release · PKC</text>
<g class="fig-muted"><text x="815" y="378" font-size="15" text-anchor="middle" fill="currentColor">no Gq needed</text></g>
${NUM(690, 410, '4', 12)}
<text x="710" y="416" font-size="15" fill="currentColor">adaptors launch parallel cascades</text>
</svg>`

/* 9 — Receptor desensitization: three depths of shutdown (lead, 1000×460) */
const RECEPTOR7 = (x: number, y: number, h = 56) =>
  `<path d="M${x} ${y} h8 v${h} h-8 z M${x + 11} ${y} h8 v${h} h-8 z M${x + 22} ${y} h8 v${h} h-8 z M${x + 33} ${y} h8 v${h} h-8 z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>`
const desensSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-des')}</defs>
<g class="fig-muted">
<line x1="340" y1="40" x2="340" y2="420" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 7"/>
<line x1="670" y1="40" x2="670" y2="420" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 7"/>
</g>
${NUM(46, 48, '1')}
<text x="68" y="55" font-size="21" font-weight="700" fill="currentColor">Rapid desensitization</text>
<g class="fig-accent"><text x="68" y="80" font-size="18" font-weight="700" fill="currentColor">seconds – minutes</text></g>
${NUM(376, 48, '2')}
<text x="398" y="55" font-size="21" font-weight="700" fill="currentColor">Internalization</text>
<g class="fig-accent"><text x="398" y="80" font-size="18" font-weight="700" fill="currentColor">minutes</text></g>
${NUM(706, 48, '3')}
<text x="728" y="55" font-size="21" font-weight="700" fill="currentColor">Downregulation</text>
<g class="fig-accent"><text x="728" y="80" font-size="18" font-weight="700" fill="currentColor">hours</text></g>
${BILAYER_H(40, 316, 150, 196, [[128, 196]], 20, 7)}
${BILAYER_H(364, 646, 150, 196, [[460, 560]], 20, 7)}
${BILAYER_H(694, 960, 150, 196, [], 20, 7)}
<g class="fig-accent">${RECEPTOR7(142, 128, 92)}</g>
<g class="fig-accent-2"><circle cx="162" cy="116" r="10" fill="currentColor"/></g>
<text x="190" y="120" font-size="16" fill="currentColor">agonist-occupied</text>
<circle cx="160" cy="236" r="11" fill="currentColor"/><text x="160" y="241" font-size="14" font-weight="700" text-anchor="middle" class="fig-bg">P</text>
<circle cx="184" cy="236" r="11" fill="currentColor"/><text x="184" y="241" font-size="14" font-weight="700" text-anchor="middle" class="fig-bg">P</text>
<text x="236" y="230" font-size="17" font-weight="700" fill="currentColor">GRK</text>
<text x="236" y="250" font-size="15" fill="currentColor">phosphorylates</text>
<g class="fig-accent-2">
<rect x="128" y="256" width="100" height="36" rx="12" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
<text x="178" y="280" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">β-arrestin</text>
</g>
<g class="fig-muted">
<ellipse cx="70" cy="266" rx="26" ry="14" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<text x="70" y="271" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">G prot.</text>
<line x1="100" y1="252" x2="122" y2="282" stroke="currentColor" stroke-width="3"/>
</g>
<text x="178" y="330" font-size="17" text-anchor="middle" fill="currentColor">arrestin blocks G-protein</text>
<text x="178" y="352" font-size="17" text-anchor="middle" fill="currentColor">coupling — receptor still there</text>
<path d="M452 173 C 480 173, 470 232, 510 232 C 550 232, 540 173, 568 173" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent"><path d="M466 196 C 470 252, 550 252, 554 196" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="5 4"/>
<text x="574" y="236" font-size="14" fill="currentColor">clathrin pit</text></g>
<g class="fig-accent">${RECEPTOR7(490, 184, 30)}</g>
<g class="fig-accent-2"><rect x="494" y="218" width="34" height="12" rx="5" fill="currentColor" fill-opacity="0.6"/></g>
<line x1="510" y1="242" x2="510" y2="272" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-des)"/>
<ellipse cx="510" cy="302" rx="54" ry="26" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="510" y="307" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">endosome</text>
<g class="fig-accent">
<defs>${ARROW('arr-cs-des-b')}</defs>
<path d="M452 296 C 400 280, 392 200, 420 176" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-des-b)"/>
<text x="400" y="340" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">recycle back</text>
<text x="400" y="360" font-size="15" text-anchor="middle" fill="currentColor">= resensitization</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cs-des-r')}</defs>
<path d="M566 306 C 620 310, 650 330, 666 360" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cs-des-r)"/>
<text x="572" y="332" font-size="15" font-weight="700" fill="currentColor">onward</text>
</g>
<text x="505" y="400" font-size="16" text-anchor="middle" fill="currentColor">arrestin links receptor to clathrin;</text>
<text x="505" y="422" font-size="16" text-anchor="middle" fill="currentColor">fewer surface receptors — for now</text>
<g class="fig-accent-2">
<circle cx="750" cy="300" r="40" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="750" y="305" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">lysosome</text>
<text x="750" y="358" font-size="15" text-anchor="middle" fill="currentColor">receptors degraded</text>
</g>
<ellipse cx="900" cy="300" rx="50" ry="34" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6"/>
<text x="900" y="296" font-size="14" text-anchor="middle" fill="currentColor">nucleus</text>
<text x="900" y="314" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">receptor gene ↓</text>
<text x="900" y="358" font-size="15" text-anchor="middle" fill="currentColor">less new receptor</text>
<g class="fig-muted"><text x="828" y="226" font-size="16" text-anchor="middle" fill="currentColor">membrane now almost bare</text></g>
<g class="fig-accent-2"><text x="828" y="400" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">total receptor number falls</text></g>
<text x="500" y="452" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">use-dependent: GRKs prefer occupied receptors → drug tolerance (chronic β-agonists in asthma)</text>
</svg>`

export const mcatCellSignalingFigures: DeckFigurePlacement[] = [
  {
    at: 'Modes of Intercellular Signaling',
    mode: 'replace-table',
    figure: {
      svg: modesSvg,
      alt:
        'Five panels, each with cells drawn as circles and red dots for the ligand. Endocrine: a hormone travels through a long bloodstream tube from one cell to a distant cell (insulin, cortisol, thyroid hormone). Paracrine: red dots drift a short way to a neighbouring cell (growth factors, histamine, NO). Autocrine: arrows loop from a cell back onto itself (T-cell IL-2, many cancers). Juxtacrine: two cells touch and a membrane-bound ligand on one meets a receptor on the other (Notch–Delta). Synaptic: an axon terminal releases neurotransmitter across a narrow cleft to a target cell in milliseconds — a fast, targeted paracrine. Footer: the response is set by the receiving cell’s receptor, not the ligand.',
      caption: 'Signaling modes differ only in how far the ligand travels; the response is decided by the receiving cell.',
    },
    blocks: [
      '- **Endocrine** — bloodstream, long range (insulin, cortisol, thyroid hormone)',
      '- **Paracrine** — nearby cells (growth factors, histamine, NO); **synaptic** = fast, targeted paracrine',
      '- **Autocrine** — the cell signals itself (IL-2, many cancers)',
      '- **Juxtacrine** — contact-dependent, both partners membrane-bound (Notch–Delta)',
    ],
  },
  {
    at: 'Ligand Chemistry Determines Receptor Location',
    mode: 'lead',
    figure: {
      svg: ligandSvg,
      alt:
        'Two halves of one membrane. Left, a hydrophilic ligand (peptide, epinephrine) drawn as a red dot — the first messenger — cannot cross the bilayer, so it binds a blue surface receptor; an arrow leads down to second messengers and kinases that phosphorylate existing proteins: fast, seconds to minutes. Right, a hydrophobic ligand (steroid, thyroid hormone, vitamin D) diffuses straight through the bilayer, binds an intracellular receptor that is itself a transcription factor and enters the nucleus to make new mRNA and protein: slow, hours. A note marks thyroid hormone as the trap — tyrosine-derived yet lipophilic.',
      caption: 'Where the receptor sits follows from whether the ligand can cross the bilayer — and that sets the speed of the response.',
    },
    blocks: [
      '- **Hydrophilic** ligand → surface receptor → second messengers → **fast** (phosphorylate what already exists)',
      '- **Hydrophobic** ligand → crosses the bilayer → nuclear receptor = transcription factor → **slow** (hours)',
    ],
  },
  {
    at: 'The Four Surface Receptor Families',
    mode: 'replace-table',
    figure: {
      svg: familiesSvg,
      alt:
        'Four receptor types side by side in one membrane, each with a red ligand above it. Ligand-gated ion channel: two blue walls form a pore and Na⁺ flows straight through — the pore opens itself, milliseconds (nicotinic ACh receptor, GABA-A). GPCR: seven transmembrane bars with a G protein underneath — second messengers, seconds (β-adrenergic, muscarinic). RTK: ligand dimerizes two receptor halves, which phosphorylate each other (P) — kinase built in, kinase cascades, minutes (insulin and EGF receptors). Cytokine receptor: a dimer with JAK kinases attached to its tails — kinase borrowed, STAT to genes, minutes (EPO, growth hormone). Footer: more steps between receptor and effect means slower but more amplification.',
      caption: 'The four surface receptor families: the fewer the steps between binding and effect, the faster — and the less amplified — the response.',
    },
    blocks: [
      '- **Ligand-gated ion channel** — the receptor IS the pore → milliseconds (nicotinic ACh, GABA-A)',
      '- **GPCR** — 7 helices borrow a G protein → second messengers, seconds (β-adrenergic, muscarinic, glucagon)',
      '- **RTK** — dimerize → autophosphorylate → kinase cascades, minutes (insulin, EGF)',
      '- **Cytokine / enzyme-linked** — borrows JAK (→ STAT) or makes cGMP (ANP), minutes (EPO)',
    ],
  },
  {
    at: 'Reading Dose-Response Curves',
    mode: 'replace-table',
    figure: {
      svg: doseSvg,
      alt:
        'Response plotted against log agonist concentration. A black sigmoid rises to the maximum, with its EC50 marked on the axis. A blue dashed sigmoid reaches the same maximum but lies to the right (an arrow labelled potency down shows the EC50 shift): a competitive antagonist, surmountable. A blue dotted sigmoid has the same EC50 but a lower plateau: a noncompetitive antagonist or receptor loss. A red sigmoid plateaus well below the maximum even at full occupancy: a partial agonist. The legend also notes that a left shift means higher potency.',
      caption: 'Dose–response shifts (illustrative curves): right shift with the same max = competitive; lower max = noncompetitive or fewer receptors; low plateau = partial agonist.',
    },
    blocks: [
      '- **Right shift, same max** → competitive antagonist (surmountable with more agonist)',
      '- **Lower max, similar EC$_{50}$** → noncompetitive antagonist or fewer functional receptors',
      '- **Left shift** → higher potency (affinity, or amplification upstream)',
      '- **Submaximal plateau at full occupancy** → partial agonist; $K_d$ = [L] at half-occupancy, lower = tighter',
    ],
  },
  {
    at: 'The G Protein Cycle',
    mode: 'lead',
    figure: {
      svg: gcycleSvg,
      alt:
        'A GPCR with seven transmembrane bars sits in a membrane with a red ligand arriving from outside. Below it, four numbered boxes form a loop. 1: Gα·GDP bound to βγ — the resting trimer, OFF. 2: the ligand-bound receptor acts as a GEF — GDP leaves and GTP binds; nothing is phosphorylated. 3: Gα·GTP and free βγ — both halves signal, ON; a blue arrow points to effectors (adenylyl cyclase, PLC, K⁺ channel). 4: Gα’s intrinsic GTPase hydrolyzes GTP to GDP + Pi and the trimer re-forms, OFF — arrow back to state 1. Notes: GAPs speed up step 4 and cholera toxin blocks it in Gαs; the GTPase timer sets signal duration, so a GTPase-dead Gα is stuck ON.',
      caption: 'The G protein cycle: the receptor only swaps GDP for GTP; Gα’s own GTPase is the off switch and the timer.',
    },
    blocks: [
      '- Receptor = **GEF**: GDP out, GTP in (no phosphorylation) → Gα·GTP and βγ both act on effectors',
      '- Gα’s **intrinsic GTPase** is the off switch — its speed sets signal duration (GTPase-dead = stuck ON)',
    ],
  },
  {
    at: 'The Three G-alpha Families to Know Cold',
    mode: 'replace-table',
    figure: {
      svg: galphaSvg,
      alt:
        'Three columns. Gs (β1/β2 adrenergic, glucagon): stimulates adenylyl cyclase, cAMP rises, PKA phosphorylates Ser/Thr targets — glycogen phosphorylase ON, glycogen synthase OFF, CREB to genes. Gi (α2, M2 muscarinic, opioid): inhibits adenylyl cyclase so cAMP falls and PKA activity drops; its freed βγ opens K⁺ (GIRK) channels, hyperpolarizing pacemaker cells and slowing the heart. Gq (α1 adrenergic, M1/M3): activates phospholipase C, which splits PIP2 into IP3 and DAG; IP3 releases Ca²⁺ from the ER, Ca²⁺-calmodulin activates MLCK and smooth muscle contracts; DAG stays in the membrane and with Ca²⁺ activates PKC. Footer: the same ACh slows the heart through M2 (Gi) and contracts smooth muscle through M3 (Gq); phosphodiesterase removes cAMP.',
      caption: 'Gs, Gi and Gq: three Gα subunits, two effectors, and the second messengers each one makes or removes.',
    },
    blocks: [
      '- **Gs** → adenylyl cyclase ↑ → cAMP ↑ → PKA (β-adrenergic, glucagon)',
      '- **Gi** → adenylyl cyclase ↓ → cAMP ↓; βγ opens K$^+$ channels (α2, M2 slows the heart, opioid)',
      '- **Gq** → PLC → PIP$_2$ → **IP$_3$** (ER Ca$^{2+}$) + **DAG** (PKC) (α1, M1/M3)',
      '- Same ligand, different Gα: ACh via M2 slows the heart, via M3 contracts smooth muscle',
    ],
  },
  {
    at: 'Amplification in Numbers',
    mode: 'lead',
    figure: {
      svg: ampSvg,
      alt:
        'Nine bars rising from left to right like a widening staircase: epinephrine (1), receptor (1), G proteins (~100), adenylyl cyclase (~100), cAMP (many), PKA (many), phosphorylase kinase (more), glycogen phosphorylase (more), glucose-1-phosphate (millions). Blue arrows marked × join tiers where a catalytic step multiplies the signal (receptor to G proteins, cyclase to cAMP, PKA to phosphorylase kinase, phosphorylase kinase to glycogen phosphorylase, phosphorylase to glucose-1-phosphate); grey dashed arrows marked 1 : 1 join binding steps with no gain (G protein to cyclase, cAMP to PKA). Headline: one hormone molecule → millions of product molecules.',
      caption: 'Amplification: every catalytic tier multiplies the signal, every binding (1 : 1) step merely passes it on.',
    },
    blocks: [
      '- One epinephrine → ~100 G proteins → many cAMP → PKA → phosphorylase cascade → **millions** of glucose-1-P',
      '- Gain only at **catalytic** steps (enzyme turns over many substrates); stoichiometric 1 : 1 steps add none',
    ],
  },
  {
    at: 'Receptor Tyrosine Kinases',
    mode: 'lead',
    figure: {
      svg: rtkSvg,
      alt:
        'An RTK dimer in a membrane with a red ligand on top. Numbered steps: 1 ligand binds and the receptor dimerizes; 2 the two kinase domains trans-autophosphorylate each other (P badges on both tails); 3 the phosphotyrosines become docking sites for SH2-domain proteins; 4 docked adaptors launch three parallel cascades. Left, Ras–MAPK: Grb2 → SOS (a GEF) loads Ras with GTP (a monomeric G protein switched off by its GTPase plus GAPs) → Raf → MEK → ERK → nucleus, cyclin D: proliferation; the three-kinase tier gives amplification and switch-like output. Middle, PI3K–Akt: PI3K converts PIP2 to PIP3, a membrane docking lipid, which recruits Akt (PKB): survival, mTOR growth, GLUT4 insertion; PTEN erases PIP3 and is a tumor suppressor. Right, PLC-γ: PIP2 → IP3 + DAG, Ca²⁺ release and PKC, with no Gq needed.',
      caption: 'RTK logic: dimerize, autophosphorylate, dock — then Ras–MAPK, PI3K–Akt and PLC-γ run in parallel.',
    },
    blocks: [
      '- Ligand → **dimerize** → **trans-autophosphorylate** → P-Tyr docking sites for **SH2** adaptors',
      '- **Ras → Raf → MEK → ERK** (proliferation) · **PI3K → PIP$_3$ → Akt** (survival; PTEN erases) · PLC-γ',
    ],
  },
  {
    at: 'Receptor Desensitization',
    mode: 'lead',
    figure: {
      svg: desensSvg,
      alt:
        'Three panels showing deeper shutdown of a GPCR. 1 Rapid desensitization, seconds to minutes: GRK phosphorylates the agonist-occupied receptor (P badges on its tail) and β-arrestin binds, blocking the G protein from coupling — the receptor is still in the membrane. 2 Internalization, minutes: arrestin links the receptor to a clathrin-coated pit, which pinches off into an endosome; a blue arrow shows receptors recycling back to the surface (resensitization), a red arrow sends them onward. 3 Downregulation, hours: receptors are degraded in the lysosome and the nucleus lowers receptor gene expression, so the membrane is almost bare and total receptor number falls. Footer: GRKs prefer occupied receptors, so shutdown is use-dependent — the basis of drug tolerance (chronic β-agonists in asthma).',
      caption: 'Three depths of shutdown: uncouple (GRK + arrestin), internalize (clathrin), downregulate (lysosome + less transcription).',
    },
    blocks: [
      '- **GRK** + **β-arrestin** uncouple (s) → clathrin **internalization** (min) → **downregulation** (h)',
      '- Use-dependent: the cell turns down exactly the signal it hears → drug **tolerance** (chronic β-agonists)',
    ],
  },
]
