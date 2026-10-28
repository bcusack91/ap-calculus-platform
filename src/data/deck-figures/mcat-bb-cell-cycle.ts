import type { DeckFigurePlacement } from './index'

/**
 * Cell Cycle & Apoptosis (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing is ours, from the concept: a ring clock with a G₀ exit and a
 * DNA-content staircase, a six-cell mitosis strip with X-shaped chromosomes,
 * three flow-cytometry histograms, oscillating cyclin humps, the Rb–E2F and
 * p53 flows as boxes and arrows, the two apoptosis pathways converging on the
 * executioner caspases, an allele-hit diagram for Knudson's logic, and
 * mitosis beside meiosis with one homolog pair. No textbook, prep-company or
 * AAMC figure was copied. Curves that are not data say "illustrative"; no
 * number appears that the lesson does not state. No molecular structures.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow's marker is defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-cc-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Inhibition marker: a flat bar ("⊣") at the end of a line. */
const BAR = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M7,0 L7,10" stroke="currentColor" stroke-width="2.5"/></marker>`

const f = (v: number) => +v.toFixed(1)

/** Point on a circle; `deg` is measured clockwise from 12 o'clock. */
const POL = (cx: number, cy: number, r: number, deg: number): [number, number] => {
  const a = ((deg - 90) * Math.PI) / 180
  return [f(cx + r * Math.cos(a)), f(cy + r * Math.sin(a))]
}
/** Arc path from a0 to a1 (clockwise degrees from 12 o'clock). */
const ARC = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const [x0, y0] = POL(cx, cy, r, a0)
  const [x1, y1] = POL(cx, cy, r, a1)
  return `M${x0} ${y0} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1}`
}

/** A rounded box with one or two centred lines of text. */
const BOX = (x: number, y: number, w: number, h: number, l1: string, l2?: string, fs = 19, opacity = 0.12) => {
  const mid = y + h / 2
  const t1 = l2
    ? `<text x="${x + w / 2}" y="${mid - 4}" font-size="${fs}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text><text x="${x + w / 2}" y="${mid + fs - 1}" font-size="${fs - 2}" text-anchor="middle" fill="currentColor">${l2}</text>`
    : `<text x="${x + w / 2}" y="${mid + fs / 3}" font-size="${fs}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text>`
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/>${t1}`
}

/** A replicated chromosome: two sister chromatids as an X joined at a centromere dot. */
const CHROM_X = (cx: number, cy: number, s: number, sw = 3) =>
  `<path d="M${f(cx - s)} ${f(cy - s * 1.5)} L${f(cx + s)} ${f(cy + s * 1.5)} M${f(cx + s)} ${f(cy - s * 1.5)} L${f(cx - s)} ${f(cy + s * 1.5)}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="${f(sw * 0.9)}" fill="currentColor"/>`

/** A single chromatid bent toward its pole: `dir` −1 = apex points left, +1 = right. */
const CHROM_V = (cx: number, cy: number, s: number, dir: number, sw = 3) =>
  `<path d="M${f(cx - dir * s)} ${f(cy - s * 1.5)} L${f(cx + dir * s * 0.7)} ${cy} L${f(cx - dir * s)} ${f(cy + s * 1.5)}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`

/** Polyline points for y = fn(x) sampled n times on [x0, x1]. */
const CURVE = (fn: (s: number) => number, s0: number, s1: number, n: number, sx: (s: number) => number, sy: (v: number) => number) => {
  const pts: string[] = []
  for (let i = 0; i <= n; i++) {
    const s = s0 + ((s1 - s0) * i) / n
    pts.push(`${f(sx(s))},${f(sy(fn(s)))}`)
  }
  return pts.join(' ')
}

/* 1 — The cycle as a ring clock with a G₀ exit, beside DNA content per phase (lead, 1000×460) */
const CX = 270
const CY = 235
const CR = 125
const clockSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cc-clock')}</defs>
<path d="${ARC(CX, CY, CR, 2, 142)}" fill="none" stroke="currentColor" stroke-opacity="0.78" stroke-width="40"/>
<path d="${ARC(CX, CY, CR, 146, 268)}" fill="none" stroke="currentColor" stroke-opacity="0.78" stroke-width="40"/>
<path d="${ARC(CX, CY, CR, 272, 322)}" fill="none" stroke="currentColor" stroke-opacity="0.78" stroke-width="40"/>
<g class="fig-accent-2"><path d="${ARC(CX, CY, CR, 326, 358)}" fill="none" stroke="currentColor" stroke-width="40"/></g>
<text x="${POL(CX, CY, CR, 72)[0]}" y="${POL(CX, CY, CR, 72)[1] + 8}" font-size="23" font-weight="700" text-anchor="middle" class="fig-bg">G₁</text>
<text x="${POL(CX, CY, CR, 207)[0]}" y="${POL(CX, CY, CR, 207)[1] + 8}" font-size="23" font-weight="700" text-anchor="middle" class="fig-bg">S</text>
<text x="${POL(CX, CY, CR, 297)[0]}" y="${POL(CX, CY, CR, 297)[1] + 8}" font-size="23" font-weight="700" text-anchor="middle" class="fig-bg">G₂</text>
<text x="${POL(CX, CY, CR, 342)[0]}" y="${POL(CX, CY, CR, 342)[1] + 8}" font-size="23" font-weight="700" text-anchor="middle" class="fig-bg">M</text>
<g class="fig-accent-2">
<path d="${ARC(CX, CY, CR, 143, 145)}" fill="none" stroke="currentColor" stroke-width="46"/>
<path d="${ARC(CX, CY, CR, 269, 271)}" fill="none" stroke="currentColor" stroke-width="46"/>
<path d="${ARC(CX, CY, CR, 349, 351)}" fill="none" stroke="currentColor" stroke-width="46"/>
</g>
<text x="${CX}" y="${CY - 10}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Interphase</text>
<text x="${CX}" y="${CY + 14}" font-size="17" text-anchor="middle" fill="currentColor">G₁ + S + G₂ ≈ 90%</text>
<text x="${CX}" y="${CY + 36}" font-size="16" text-anchor="middle" fill="currentColor">2n throughout</text>
<text x="408" y="168" font-size="17" fill="currentColor">growth; decision to divide</text>
<g class="fig-muted"><text x="408" y="190" font-size="16" fill="currentColor">2C DNA · longest phase</text></g>
<text x="${CX}" y="398" font-size="17" text-anchor="middle" fill="currentColor">DNA replication: 2C → 4C</text>
<g class="fig-muted"><text x="${CX}" y="420" font-size="16" text-anchor="middle" fill="currentColor">centrosome duplicates</text></g>
<text x="124" y="178" font-size="16" text-anchor="end" fill="currentColor">4C · error check</text>
<g class="fig-muted"><text x="124" y="200" font-size="16" text-anchor="end" fill="currentColor">mitotic prep</text></g>
<text x="250" y="88" font-size="17" text-anchor="middle" fill="currentColor">mitosis + cytokinesis</text>
<g class="fig-muted"><text x="250" y="66" font-size="16" text-anchor="middle" fill="currentColor">4C → two 2C daughters</text></g>
<g class="fig-muted">
<defs>${ARROW('arr-cc-clock-m')}</defs>
<line x1="${POL(CX, CY, CR + 22, 112)[0]}" y1="${POL(CX, CY, CR + 22, 112)[1]}" x2="462" y2="300" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#arr-cc-clock-m)"/>
<circle cx="494" cy="304" r="30" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>
</g>
<text x="494" y="312" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">G₀</text>
<text x="494" y="358" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">quiescent exit</text>
<text x="494" y="380" font-size="16" text-anchor="middle" fill="currentColor">neurons, cardiac: permanent</text>
<text x="494" y="402" font-size="16" text-anchor="middle" fill="currentColor">hepatocytes: can re-enter</text>
<g class="fig-accent-2"><text x="310" y="450" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">red bars = checkpoints: G₁/S (restriction point) · G₂/M · spindle</text></g>
<g class="fig-muted">
<rect x="660" y="90" width="130" height="290" fill="currentColor" fill-opacity="0.07"/>
<rect x="900" y="90" width="45" height="290" fill="currentColor" fill-opacity="0.07"/>
<line x1="660" y1="300" x2="975" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="660" y1="160" x2="975" y2="160" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
</g>
<line x1="660" y1="380" x2="985" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cc-clock)"/>
<line x1="660" y1="380" x2="660" y2="76" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cc-clock)"/>
<text x="650" y="306" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">2C</text>
<text x="650" y="166" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">4C</text>
<text x="640" y="56" font-size="18" font-weight="700" fill="currentColor">DNA content per cell</text>
<g class="fig-accent">
<polyline points="660,300 790,300 900,160 975,160" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
<line x1="975" y1="160" x2="975" y2="300" stroke="currentColor" stroke-width="3" stroke-dasharray="5 5"/>
</g>
<text x="725" y="404" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">G₁</text>
<text x="845" y="404" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">S</text>
<text x="922" y="404" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">G₂</text>
<text x="960" y="404" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">M</text>
<text x="815" y="130" font-size="16" text-anchor="middle" fill="currentColor">chromosome number stays 2n;</text>
<text x="815" y="150" font-size="16" text-anchor="middle" fill="currentColor">only the C (mass) doubles</text>
<text x="815" y="440" font-size="16" text-anchor="middle" fill="currentColor">anaphase halves it back to 2C</text>
</svg>`

/* 2 — Mitosis as a strip of six cells (lead, 1000×460) */
const CELL_Y = 186
const CELL_XS = [90, 254, 418, 582, 746, 910]
const POLE = (x: number, y: number) => `<circle cx="${x}" cy="${y}" r="5" fill="currentColor"/>`
const SPINDLE = (px: number, py: number, targets: [number, number][]) =>
  targets.map(([tx, ty]) => `<line x1="${px}" y1="${py}" x2="${f(tx)}" y2="${f(ty)}" stroke="currentColor" stroke-width="1.5"/>`).join('')
const stageText = (i: number, name: string, l1: string, l2: string) =>
  `<text x="${CELL_XS[i]}" y="292" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text><text x="${CELL_XS[i]}" y="316" font-size="15" text-anchor="middle" fill="currentColor">${l1}</text><text x="${CELL_XS[i]}" y="336" font-size="15" text-anchor="middle" fill="currentColor">${l2}</text>`
const mitosisSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<defs>${ARROW('arr-cc-mit-m')}</defs>
${CELL_XS.slice(0, 5).map((x) => `<line x1="${x + 70}" y1="${CELL_Y}" x2="${x + 90}" y2="${CELL_Y}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cc-mit-m)"/>`).join('')}
</g>
<circle cx="${CELL_XS[0]}" cy="${CELL_Y}" r="62" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><circle cx="${CELL_XS[0]}" cy="${CELL_Y}" r="42" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/></g>
${CHROM_X(CELL_XS[0] - 14, CELL_Y - 10, 6, 2.5)}${CHROM_X(CELL_XS[0] + 12, CELL_Y + 2, 6, 2.5)}${CHROM_X(CELL_XS[0] - 4, CELL_Y + 20, 6, 2.5)}
<g class="fig-accent">${POLE(CELL_XS[0] - 30, CELL_Y - 50)}${POLE(CELL_XS[0] + 30, CELL_Y - 50)}
<line x1="${CELL_XS[0] - 30}" y1="${CELL_Y - 50}" x2="${CELL_XS[0] - 10}" y2="${CELL_Y - 56}" stroke="currentColor" stroke-width="1.5"/><line x1="${CELL_XS[0] + 30}" y1="${CELL_Y - 50}" x2="${CELL_XS[0] + 10}" y2="${CELL_Y - 56}" stroke="currentColor" stroke-width="1.5"/></g>
${stageText(0, 'Prophase', 'chromatin condenses', 'spindle begins')}
<circle cx="${CELL_XS[1]}" cy="${CELL_Y}" r="62" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">${POLE(CELL_XS[1] - 52, CELL_Y)}${POLE(CELL_XS[1] + 52, CELL_Y)}
${SPINDLE(CELL_XS[1] - 52, CELL_Y, [[CELL_XS[1] - 12, CELL_Y - 22], [CELL_XS[1] + 14, CELL_Y + 4], [CELL_XS[1] - 6, CELL_Y + 26]])}
${SPINDLE(CELL_XS[1] + 52, CELL_Y, [[CELL_XS[1] - 12, CELL_Y - 22], [CELL_XS[1] + 14, CELL_Y + 4], [CELL_XS[1] - 6, CELL_Y + 26]])}</g>
${CHROM_X(CELL_XS[1] - 12, CELL_Y - 22, 6)}${CHROM_X(CELL_XS[1] + 14, CELL_Y + 4, 6)}${CHROM_X(CELL_XS[1] - 6, CELL_Y + 26, 6)}
${stageText(1, 'Prometaphase', 'envelope breaks down', 'kinetochores attach')}
<circle cx="${CELL_XS[2]}" cy="${CELL_Y}" r="62" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><line x1="${CELL_XS[2]}" y1="${CELL_Y - 56}" x2="${CELL_XS[2]}" y2="${CELL_Y + 56}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 4"/></g>
<g class="fig-accent">${POLE(CELL_XS[2] - 52, CELL_Y)}${POLE(CELL_XS[2] + 52, CELL_Y)}
${SPINDLE(CELL_XS[2] - 52, CELL_Y, [[CELL_XS[2], CELL_Y - 26], [CELL_XS[2], CELL_Y], [CELL_XS[2], CELL_Y + 26]])}
${SPINDLE(CELL_XS[2] + 52, CELL_Y, [[CELL_XS[2], CELL_Y - 26], [CELL_XS[2], CELL_Y], [CELL_XS[2], CELL_Y + 26]])}</g>
${CHROM_X(CELL_XS[2], CELL_Y - 26, 6)}${CHROM_X(CELL_XS[2], CELL_Y, 6)}${CHROM_X(CELL_XS[2], CELL_Y + 26, 6)}
${stageText(2, 'Metaphase', 'align at the plate', 'under balanced tension')}
<ellipse cx="${CELL_XS[3]}" cy="${CELL_Y}" rx="74" ry="56" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">${POLE(CELL_XS[3] - 60, CELL_Y)}${POLE(CELL_XS[3] + 60, CELL_Y)}
${SPINDLE(CELL_XS[3] - 60, CELL_Y, [[CELL_XS[3] - 30, CELL_Y - 24], [CELL_XS[3] - 30, CELL_Y], [CELL_XS[3] - 30, CELL_Y + 24]])}
${SPINDLE(CELL_XS[3] + 60, CELL_Y, [[CELL_XS[3] + 30, CELL_Y - 24], [CELL_XS[3] + 30, CELL_Y], [CELL_XS[3] + 30, CELL_Y + 24]])}</g>
${CHROM_V(CELL_XS[3] - 28, CELL_Y - 24, 6, -1)}${CHROM_V(CELL_XS[3] - 28, CELL_Y, 6, -1)}${CHROM_V(CELL_XS[3] - 28, CELL_Y + 24, 6, -1)}
${CHROM_V(CELL_XS[3] + 28, CELL_Y - 24, 6, 1)}${CHROM_V(CELL_XS[3] + 28, CELL_Y, 6, 1)}${CHROM_V(CELL_XS[3] + 28, CELL_Y + 24, 6, 1)}
${stageText(3, 'Anaphase', 'cohesin cleaved', 'chromatids → poles')}
<ellipse cx="${CELL_XS[4]}" cy="${CELL_Y}" rx="68" ry="52" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><circle cx="${CELL_XS[4] - 38}" cy="${CELL_Y}" r="26" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><circle cx="${CELL_XS[4] + 38}" cy="${CELL_Y}" r="26" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/></g>
<path d="M${CELL_XS[4] - 52} ${CELL_Y - 8} q 6 -10 12 0 t 12 0 t 12 0 M${CELL_XS[4] - 50} ${CELL_Y + 10} q 6 -10 12 0 t 12 0 t 12 0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
<path d="M${CELL_XS[4] + 24} ${CELL_Y - 8} q 6 -10 12 0 t 12 0 t 12 0 M${CELL_XS[4] + 26} ${CELL_Y + 10} q 6 -10 12 0 t 12 0 t 12 0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
${stageText(4, 'Telophase', 'envelopes re-form', 'DNA decondenses')}
<path d="M${CELL_XS[5]} ${CELL_Y - 18} C ${CELL_XS[5] - 10} ${CELL_Y - 60}, ${CELL_XS[5] - 74} ${CELL_Y - 60}, ${CELL_XS[5] - 74} ${CELL_Y} C ${CELL_XS[5] - 74} ${CELL_Y + 60}, ${CELL_XS[5] - 10} ${CELL_Y + 60}, ${CELL_XS[5]} ${CELL_Y + 18} C ${CELL_XS[5] + 10} ${CELL_Y + 60}, ${CELL_XS[5] + 74} ${CELL_Y + 60}, ${CELL_XS[5] + 74} ${CELL_Y} C ${CELL_XS[5] + 74} ${CELL_Y - 60}, ${CELL_XS[5] + 10} ${CELL_Y - 60}, ${CELL_XS[5]} ${CELL_Y - 18} Z" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<circle cx="${CELL_XS[5] - 40}" cy="${CELL_Y}" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/><circle cx="${CELL_XS[5] + 40}" cy="${CELL_Y}" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent-2"><path d="M${CELL_XS[5] - 8} ${CELL_Y - 24} q 8 24 0 48 M${CELL_XS[5] + 8} ${CELL_Y - 24} q -8 24 0 48" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
<text x="${CELL_XS[5]}" y="${CELL_Y + 78}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">contractile ring</text></g>
${stageText(5, 'Cytokinesis', 'actin–myosin ring', 'pinches cell in two')}
<g class="fig-muted"><text x="500" y="52" font-size="18" text-anchor="middle" fill="currentColor">interphase before: 46 chromosomes, each two cohesin-joined sister chromatids (4C)</text></g>
<g class="fig-accent-2"><text x="500" y="392" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">anaphase changes the count: 46 chromosomes (2 chromatids each) → 92 single → 46 per daughter</text></g>
<g class="fig-muted"><text x="500" y="420" font-size="16" text-anchor="middle" fill="currentColor">spindle poisons (vinca, colchicine, taxanes) leave kinetochores without tension → arrest before anaphase</text>
<text x="500" y="444" font-size="16" text-anchor="middle" fill="currentColor">cytokinesis is separable: skip it → binucleate / polyploid cells (megakaryocytes, liver)</text></g>
</svg>`

/* 3 — Flow cytometry: three DNA-content histograms (after, 1000×460) */
const gauss = (x: number, m: number, s: number) => Math.exp(-((x - m) * (x - m)) / (2 * s * s))
const sig = (x: number) => 0.5 + 0.5 * Math.tanh(x)
const histo = (x0: number, title: string, h2: number, h4: number, p: number, shift: number, note: string) => {
  const ax = x0 + 36
  const c2 = ax + 72
  const c4 = ax + 190
  const sy = (v: number) => 350 - 250 * v
  const fn = (x: number) => h2 * gauss(x, c2 + shift, 9) + h4 * gauss(x, c4, 11) + p * sig((x - (c2 + 24)) / 7) * sig(((c4 - 24) - x) / 7)
  return `
<text x="${x0 + 150}" y="60" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
<line x1="${ax}" y1="350" x2="${x0 + 290}" y2="350" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cc-flow)"/>
<line x1="${ax}" y1="350" x2="${ax}" y2="80" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cc-flow)"/>
<g class="fig-muted"><line x1="${c2}" y1="350" x2="${c2}" y2="96" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/><line x1="${c4}" y1="350" x2="${c4}" y2="96" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
<text x="${c2}" y="372" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">2C</text>
<text x="${c4}" y="372" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">4C</text>
<g class="fig-accent"><polygon points="${ax},350 ${CURVE(fn, ax, x0 + 280, 90, (s) => s, sy)} ${x0 + 280},350" fill="currentColor" fill-opacity="0.14"/><polyline points="${CURVE(fn, ax, x0 + 280, 90, (s) => s, sy)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
<text x="${c2}" y="${f(sy(h2) - 10)}" font-size="15" text-anchor="middle" fill="currentColor">G₁ / G₀</text>
<text x="${c4}" y="${f(sy(h4) - 10)}" font-size="15" text-anchor="middle" fill="currentColor">G₂ + M</text>
<text x="${(c2 + c4) / 2}" y="${f(sy(p) - 10)}" font-size="15" text-anchor="middle" fill="currentColor">S</text>
<text x="${x0 + 150}" y="402" font-size="16" text-anchor="middle" fill="currentColor">${note}</text>`
}
const flowSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cc-flow')}</defs>
${histo(20, 'Asynchronous culture', 0.9, 0.36, 0.12, 0, 'big 2C peak — G₁ is the longest phase')}
${histo(350, 'Spindle poison → M arrest', 0.3, 0.95, 0.1, 0, '4C peak grows; condensed chromosomes')}
${histo(680, 'Hydroxyurea → no dNTPs', 1.0, 0.14, 0.05, 6, 'cells pile at / just above 2C')}
<g class="fig-muted"><text x="500" y="440" font-size="16" text-anchor="middle" fill="currentColor">x: DNA content per cell (quantitative dye) · y: cell count · a BrdU/EdU pulse labels only the S-phase cells (illustrative histograms)</text></g>
</svg>`

/* 4 — Cyclin levels oscillate while CDK stays constant (lead, 1000×460, illustrative) */
const cycSy = (v: number) => 350 - 245 * v
const hump = (rise: number, width: number, level: number, drop?: number) => (x: number) => (drop !== undefined && x >= drop ? 0 : level * sig((x - rise) / width))
const cyclinSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cc-cyc')}</defs>
<g class="fig-muted">
<rect x="420" y="70" width="220" height="280" fill="currentColor" fill-opacity="0.07"/>
<rect x="780" y="70" width="130" height="280" fill="currentColor" fill-opacity="0.07"/>
<line x1="420" y1="70" x2="420" y2="350" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="640" y1="70" x2="640" y2="350" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="780" y1="70" x2="780" y2="350" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="910" y1="70" x2="910" y2="350" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="80" y1="${cycSy(0.3)}" x2="930" y2="${cycSy(0.3)}" stroke="currentColor" stroke-width="2.5" stroke-dasharray="10 7"/>
<line x1="100" y1="92" x2="140" y2="92" stroke="currentColor" stroke-width="2.5" stroke-dasharray="10 7"/><text x="150" y="97" font-size="16" fill="currentColor">CDK protein — constant all cycle</text>
</g>
<line x1="80" y1="350" x2="950" y2="350" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cc-cyc)"/>
<line x1="80" y1="350" x2="80" y2="56" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cc-cyc)"/>
<text x="92" y="60" font-size="17" fill="currentColor">protein level</text>
<text x="250" y="378" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">G₁</text>
<text x="530" y="378" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">S</text>
<text x="710" y="378" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">G₂</text>
<text x="845" y="378" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">M</text>
<g class="fig-muted"><text x="845" y="398" font-size="15" text-anchor="middle" fill="currentColor">anaphase ↑</text><text x="930" y="378" font-size="16" text-anchor="middle" fill="currentColor">G₁</text></g>
<polyline points="${CURVE(hump(200, 55, 0.5), 80, 930, 120, (s) => s, cycSy)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="200" y="162" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">cyclin D–CDK4/6</text>
<text x="200" y="184" font-size="15" text-anchor="middle" fill="currentColor">growth-factor driven; phosphorylates Rb</text>
<polyline points="${CURVE(hump(385, 22, 0.78, 472), 80, 472, 120, (s) => s, cycSy)} 472,350" fill="none" stroke="currentColor" stroke-width="3.5" stroke-dasharray="9 6"/>
<text x="430" y="118" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">cyclin E–CDK2</text>
<text x="430" y="140" font-size="15" text-anchor="middle" fill="currentColor">fires the restriction point</text>
<g class="fig-accent">
<polyline points="${CURVE(hump(540, 40, 0.62, 800), 80, 800, 120, (s) => s, cycSy)} 800,350" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="630" y="150" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">cyclin A–CDK2</text>
<text x="630" y="172" font-size="15" text-anchor="middle" fill="currentColor">fires origins; blocks re-licensing</text>
</g>
<g class="fig-accent-2">
<polyline points="${CURVE(hump(735, 28, 0.95, 858), 80, 858, 160, (s) => s, cycSy)} 858,350" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="810" y="96" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">cyclin B–CDK1 = MPF</text>
<text x="810" y="74" font-size="15" text-anchor="middle" fill="currentColor">condense · envelope down · spindle</text>
</g>
<g class="fig-accent-2"><text x="500" y="424" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">each cyclin is destroyed abruptly: an E3 ubiquitin ligase tags it, the proteasome eats it — transitions are one-way ratchets</text></g>
<g class="fig-muted"><text x="500" y="448" font-size="15" text-anchor="middle" fill="currentColor">illustrative levels; CDK activity also needs Cdc25 to strip inhibitory phosphates (the G₂/M switch) — the oscillation IS the clock</text></g>
</svg>`

/* 5 — The restriction point: Rb holds E2F until cyclin D–CDK4/6 phosphorylates it (lead, 1000×460) */
const rbSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cc-rb')}</defs>
<g class="fig-muted">
<line x1="575" y1="48" x2="575" y2="330" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<text x="560" y="78" font-size="15" text-anchor="end" fill="currentColor">before R: needs growth factors</text>
<text x="590" y="78" font-size="15" fill="currentColor">after R: finishes the cycle without them</text>
<text x="435" y="216" font-size="15" text-anchor="middle" fill="currentColor">early G₁: Rb keeps E2F silent</text>
<text x="677" y="216" font-size="15" text-anchor="middle" fill="currentColor">hyper-P Rb lets go</text>
</g>
<text x="575" y="36" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">R = restriction point</text>
${BOX(40, 60, 160, 52, 'Growth factors')}
${BOX(40, 147, 160, 52, 'Ras → MAPK')}
<line x1="120" y1="112" x2="120" y2="145" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-rb)"/>
<line x1="120" y1="199" x2="120" y2="232" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-rb)"/>
<g class="fig-accent">
<defs>${ARROW('arr-cc-rb-b')}</defs>
${BOX(40, 234, 160, 52, 'cyclin D–CDK4/6')}
<line x1="200" y1="260" x2="328" y2="260" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-rb-b)"/>
<text x="264" y="248" font-size="15" text-anchor="middle" fill="currentColor">adds P</text>
${BOX(780, 230, 190, 60, 'S-phase genes', 'cyclin E · DNA pol · TS', 18)}
${BOX(720, 362, 170, 54, 'cyclin E–CDK2')}
<line x1="875" y1="290" x2="810" y2="360" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-rb-b)"/>
<path d="M720 392 C 600 440, 430 440, 388 296" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-rb-b)"/>
<text x="548" y="376" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">more Rb-P: positive feedback</text>
<text x="548" y="396" font-size="15" text-anchor="middle" fill="currentColor">commitment becomes all-or-none</text>
</g>
<rect x="330" y="230" width="110" height="60" rx="12" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
<text x="385" y="268" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Rb</text>
<rect x="440" y="230" width="90" height="60" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="485" y="268" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">E2F</text>
<line x1="532" y1="260" x2="618" y2="260" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-rb)"/>
${BOX(622, 230, 110, 60, 'E2F free', undefined, 19, 0.08)}
<line x1="734" y1="260" x2="778" y2="260" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-rb)"/>
<g class="fig-accent-2">
<defs>${BAR('bar-cc-rb-r')}</defs>
${BOX(40, 330, 90, 44, 'p16', undefined, 18)}
<line x1="85" y1="330" x2="85" y2="292" stroke="currentColor" stroke-width="3" marker-end="url(#bar-cc-rb-r)"/>
<text x="140" y="358" font-size="15" fill="currentColor">CDK inhibitor — lost in many cancers</text>
<text x="500" y="446" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">nearly every tumor breaks this brake: Rb loss · cyclin D ↑ · CDK4 amplification · p16 loss · HPV E7 binds Rb</text>
</g>
</svg>`

/* 6 — p53: regulated by degradation, then a triage program (lead, 1000×460) */
const p53Svg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cc-p53')}</defs>
<text x="40" y="56" font-size="18" font-weight="700" fill="currentColor">Healthy cell — regulated by degradation, not synthesis</text>
${BOX(40, 76, 100, 50, 'p53')}
<line x1="140" y1="101" x2="188" y2="101" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-p53)"/>
${BOX(190, 76, 190, 50, 'MDM2 (E3 ligase)', undefined, 18)}
<g class="fig-muted">
<defs>${ARROW('arr-cc-p53-m')}</defs>
<line x1="380" y1="101" x2="428" y2="101" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-p53-m)"/>
<text x="404" y="90" font-size="14" text-anchor="middle" fill="currentColor">Ub</text>
${BOX(430, 76, 150, 50, 'proteasome', undefined, 18, 0.06)}
<text x="600" y="107" font-size="15" fill="currentColor">made constantly, half-life minutes → scarce</text>
</g>
<text x="40" y="196" font-size="18" font-weight="700" fill="currentColor">DNA damage — phosphorylation blocks MDM2 binding</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-cc-p53-r')}${BAR('bar-cc-p53-r')}</defs>
${BOX(40, 230, 150, 54, 'DNA damage')}
<line x1="190" y1="257" x2="218" y2="257" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-p53-r)"/>
${BOX(220, 230, 180, 54, 'checkpoint kinases', undefined, 17)}
<line x1="400" y1="257" x2="438" y2="257" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-p53-r)"/>
<text x="419" y="246" font-size="14" text-anchor="middle" fill="currentColor">P</text>
<path d="M310 230 C 300 170, 290 140, 288 128" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#bar-cc-p53-r)"/>
<text x="318" y="170" font-size="14" fill="currentColor">MDM2 can't bind</text>
${BOX(740, 285, 240, 52, 'BAX → apoptosis', 'if damage is irreparable', 18)}
<text x="500" y="446" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">TP53 is mutated in over half of human cancers · Li-Fraumeni: one bad allele inherited, the second lost somatically</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-cc-p53-b')}</defs>
${BOX(440, 226, 220, 62, 'p53 stabilized, accumulates', 'transcribes a triage program:', 17)}
<line x1="660" y1="246" x2="738" y2="180" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-p53-b)"/>
<line x1="660" y1="254" x2="738" y2="246" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-p53-b)"/>
<line x1="660" y1="262" x2="738" y2="311" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-p53-b)"/>
<line x1="660" y1="270" x2="738" y2="376" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-p53-b)"/>
${BOX(740, 154, 240, 52, 'p21 → CDK inhibition', 'G₁ arrest: pause to repair', 18)}
${BOX(740, 220, 240, 52, 'DNA repair genes', 'fix the damage', 18)}
</g>
<g class="fig-muted">
<defs>${BAR('bar-cc-p53-m')}</defs>
${BOX(740, 350, 240, 52, 'MDM2 ↑', 'negative feedback: alarm resets', 18, 0.06)}
<path d="M740 392 C 620 430, 560 380, 552 294" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#bar-cc-p53-m)"/>
<text x="538" y="336" font-size="15" text-anchor="end" fill="currentColor">p53 induces its own destroyer</text>
<text x="538" y="355" font-size="15" text-anchor="end" fill="currentColor">once damage clears</text>
</g>
</svg>`

/* 7 — Intrinsic and extrinsic apoptosis converge on the executioner caspases (lead, 1000×460) */
const apoptosisSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cc-apo')}</defs>
<text x="250" y="34" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Intrinsic (mitochondrial)</text>
<text x="750" y="34" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Extrinsic (death receptor)</text>
${BOX(60, 50, 380, 46, 'stress · DNA damage · p53 → BAX', undefined, 18)}
<line x1="140" y1="96" x2="140" y2="126" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-apo)"/>
${BOX(60, 128, 160, 48, 'BAX / BAK')}
<g class="fig-muted"><text x="126" y="200" font-size="14" text-anchor="end" fill="currentColor">pro-apoptotic</text><text x="360" y="196" font-size="14" text-anchor="middle" fill="currentColor">anti-apoptotic brake</text></g>
<g class="fig-accent-2">
<defs>${BAR('bar-cc-apo-r')}</defs>
${BOX(280, 128, 160, 48, 'Bcl-2')}
<line x1="278" y1="152" x2="226" y2="152" stroke="currentColor" stroke-width="3" marker-end="url(#bar-cc-apo-r)"/>
<text x="252" y="142" font-size="14" text-anchor="middle" fill="currentColor">blocks</text>
<text x="360" y="112" font-size="13" text-anchor="middle" fill="currentColor">overexpressed in lymphoma t(14;18)</text>
</g>
<line x1="140" y1="176" x2="150" y2="214" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-apo)"/>
<ellipse cx="250" cy="246" rx="130" ry="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="250" y="243" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">mitochondrion</text>
<text x="250" y="263" font-size="13" text-anchor="middle" fill="currentColor">BAX/BAK pores in the outer membrane</text>
<g class="fig-accent">
<defs>${ARROW('arr-cc-apo-b')}</defs>
<circle cx="372" cy="226" r="5" fill="currentColor"/><circle cx="388" cy="238" r="5" fill="currentColor"/><circle cx="378" cy="254" r="5" fill="currentColor"/>
<text x="400" y="232" font-size="15" font-weight="700" fill="currentColor">cytochrome c</text>
<text x="400" y="250" font-size="14" fill="currentColor">escapes to cytosol</text>
<line x1="250" y1="282" x2="250" y2="304" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-apo-b)"/>
${BOX(60, 306, 380, 46, 'apoptosome → caspase-9', undefined, 18)}
<line x1="750" y1="164" x2="750" y2="304" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-apo-b)"/>
${BOX(560, 306, 380, 46, 'caspase-8', undefined, 18)}
<line x1="250" y1="352" x2="420" y2="376" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-apo-b)"/>
<line x1="750" y1="352" x2="580" y2="376" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-apo-b)"/>
${BOX(300, 376, 400, 54, 'executioner caspases-3/7', 'controlled demolition — no lysis, no inflammation', 18)}
<text x="436" y="300" font-size="13" text-anchor="end" fill="currentColor">initiator</text>
<text x="936" y="300" font-size="13" text-anchor="end" fill="currentColor">initiator</text>
</g>
${BOX(560, 50, 380, 46, 'Fas ligand · TNF', undefined, 18)}
<line x1="750" y1="96" x2="750" y2="116" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-apo)"/>
<g class="fig-muted"><line x1="560" y1="141" x2="660" y2="141" stroke="currentColor" stroke-width="5" stroke-opacity="0.5"/><line x1="840" y1="141" x2="940" y2="141" stroke="currentColor" stroke-width="5" stroke-opacity="0.5"/>
<text x="900" y="130" font-size="13" text-anchor="middle" fill="currentColor">plasma membrane</text></g>
${BOX(660, 118, 180, 46, 'death receptor', undefined, 18)}
<text x="760" y="214" font-size="15" fill="currentColor">cytotoxic T cells,</text>
<text x="760" y="234" font-size="15" fill="currentColor">immune homeostasis</text>
<g class="fig-muted"><text x="500" y="452" font-size="15" text-anchor="middle" fill="currentColor">caspases = cysteine proteases, cut after Asp, made as zymogens · PS flips out (“eat me”) · necrosis = swell, burst, inflame</text></g>
</svg>`

/* 8 — Oncogene vs tumor suppressor: hits per cell, and Knudson's two-hit logic (replace-table, 560×440) */
const ALLELE = (x: number, y: number, hit: boolean) =>
  hit
    ? `<g class="fig-accent-2"><rect x="${x}" y="${y}" width="92" height="22" rx="6" fill="currentColor" fill-opacity="0.85"/><text x="${x + 46}" y="${y + 16}" font-size="14" font-weight="700" text-anchor="middle" class="fig-bg">hit</text></g>`
    : `<rect x="${x}" y="${y}" width="92" height="22" rx="6" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>`
const CELLD = (x: number, y: number, hits: number) =>
  `<circle cx="${x}" cy="${y}" r="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>` +
  (hits >= 1 ? `<g class="fig-accent-2"><circle cx="${x - (hits === 2 ? 5 : 0)}" cy="${y}" r="4" fill="currentColor"/></g>` : '') +
  (hits === 2 ? `<g class="fig-accent-2"><circle cx="${x + 5}" cy="${y}" r="4" fill="currentColor"/></g>` : '')
const twoHitSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-cc-hit')}</defs>
<text x="145" y="28" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Oncogene</text>
<text x="145" y="48" font-size="14" text-anchor="middle" fill="currentColor">gain of function — stuck accelerator</text>
${ALLELE(44, 66, false)}${ALLELE(154, 66, true)}
<text x="145" y="112" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">ONE hit suffices</text>
<text x="145" y="131" font-size="14" text-anchor="middle" fill="currentColor">dominant at the cell level</text>
<g class="fig-muted"><text x="145" y="154" font-size="14" text-anchor="middle" fill="currentColor">RAS · MYC · HER2 · BCR-ABL · cyclin D</text></g>
<g class="fig-muted"><line x1="280" y1="14" x2="280" y2="166" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/><line x1="20" y1="176" x2="540" y2="176" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
<text x="415" y="28" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Tumor suppressor</text>
<text x="415" y="48" font-size="14" text-anchor="middle" fill="currentColor">loss of function — cut brake line</text>
${ALLELE(314, 66, true)}${ALLELE(424, 66, true)}
<text x="415" y="112" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">needs BOTH alleles lost</text>
<text x="415" y="131" font-size="14" text-anchor="middle" fill="currentColor">recessive at the cell level: “two hits”</text>
<g class="fig-muted"><text x="415" y="154" font-size="13" text-anchor="middle" fill="currentColor">RB · TP53 · p16 · PTEN · APC · BRCA1/2</text></g>
<text x="280" y="202" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Knudson’s two-hit logic (retinoblastoma)</text>
<text x="20" y="246" font-size="15" font-weight="700" fill="currentColor">Hereditary</text>
${[0, 1, 2, 3, 4].map((i) => CELLD(128 + i * 32, 240, 1)).join('')}
<line x1="276" y1="240" x2="306" y2="240" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cc-hit)"/>
${CELLD(326, 240, 2)}
<text x="354" y="236" font-size="14" fill="currentColor">one more hit, in any of</text>
<text x="354" y="253" font-size="14" fill="currentColor">millions of cells</text>
<g class="fig-accent-2"><text x="20" y="276" font-size="14" fill="currentColor">born one hit deep → early, bilateral, often multifocal</text></g>
<text x="20" y="328" font-size="15" font-weight="700" fill="currentColor">Sporadic</text>
${[0, 1, 2, 3, 4].map((i) => CELLD(128 + i * 32, 322, 0)).join('')}
<line x1="276" y1="322" x2="306" y2="322" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cc-hit)"/>
${CELLD(326, 322, 1)}
<line x1="344" y1="322" x2="374" y2="322" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cc-hit)"/>
${CELLD(394, 322, 2)}
<text x="416" y="318" font-size="14" fill="currentColor">two rare hits in</text>
<text x="416" y="335" font-size="14" fill="currentColor">the SAME cell</text>
<g class="fig-accent-2"><text x="20" y="358" font-size="14" fill="currentColor">starts with none → late, unilateral, single tumor</text></g>
<g class="fig-muted"><text x="280" y="396" font-size="14" text-anchor="middle" fill="currentColor">same gene, same mechanism — only the statistics of hits differ</text>
<text x="280" y="418" font-size="14" text-anchor="middle" fill="currentColor">Li-Fraumeni (TP53) and BRCA families follow the same logic</text></g>
</svg>`

/* 9 — Mitosis beside meiosis with one homolog pair (lead, 1000×460) */
const CHROM_I = (x: number, y: number, s: number, sw = 3) =>
  `<line x1="${x}" y1="${f(y - s * 1.5)}" x2="${x}" y2="${f(y + s * 1.5)}" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round"/>`
const CELL = (x: number, y: number, r: number) => `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>`
const B = (s: string) => `<g class="fig-accent">${s}</g>`
const meiosisSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cc-mei')}</defs>
<text x="230" y="36" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Mitosis</text>
<text x="740" y="36" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Meiosis</text>
<g class="fig-muted"><line x1="470" y1="20" x2="470" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 6"/>
<text x="110" y="256" font-size="15" text-anchor="middle" fill="currentColor">2n · 4C (after S)</text>
<text x="570" y="256" font-size="15" text-anchor="middle" fill="currentColor">2n · 4C (after S)</text></g>
${CELL(110, 180, 52)}
${B(CHROM_X(90, 180, 7))}${CHROM_X(132, 180, 7)}
<line x1="168" y1="162" x2="244" y2="126" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-mei)"/>
<line x1="168" y1="198" x2="244" y2="234" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-mei)"/>
${CELL(300, 110, 42)}${B(CHROM_I(288, 110, 7))}${CHROM_I(312, 110, 7)}
${CELL(300, 250, 42)}${B(CHROM_I(288, 250, 7))}${CHROM_I(312, 250, 7)}
<text x="352" y="116" font-size="16" font-weight="700" fill="currentColor">2n — identical</text>
<text x="352" y="256" font-size="16" font-weight="700" fill="currentColor">2n — identical</text>
<text x="230" y="338" font-size="16" fill="currentColor" text-anchor="middle">separates <tspan font-weight="700">sister chromatids</tspan></text>
<text x="230" y="360" font-size="16" fill="currentColor" text-anchor="middle">2 identical diploid cells · no crossing over</text>
<text x="230" y="382" font-size="16" fill="currentColor" text-anchor="middle">equational: 2n → 2n</text>
${CELL(570, 180, 52)}
${B(CHROM_X(560, 180, 7))}${CHROM_X(582, 180, 7)}
<g class="fig-accent-2"><path d="M566 166 L576 166" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><text x="570" y="118" font-size="14" text-anchor="middle" fill="currentColor">crossing over — prophase I</text></g>
<line x1="626" y1="166" x2="684" y2="128" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-mei)"/>
<line x1="626" y1="194" x2="684" y2="232" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cc-mei)"/>
<text x="652" y="186" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">MI</text>
${CELL(720, 110, 38)}${B(CHROM_X(720, 110, 7))}
${CELL(720, 250, 38)}${CHROM_X(720, 250, 7)}
<line x1="756" y1="96" x2="834" y2="62" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cc-mei)"/>
<line x1="758" y1="118" x2="834" y2="126" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cc-mei)"/>
<line x1="758" y1="242" x2="834" y2="234" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cc-mei)"/>
<line x1="756" y1="264" x2="834" y2="298" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cc-mei)"/>
<text x="798" y="186" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">MII</text>
${CELL(860, 56, 24)}${B(CHROM_I(860, 56, 6))}
${CELL(860, 128, 24)}${B(CHROM_I(860, 128, 6))}
${CELL(860, 232, 24)}${CHROM_I(860, 232, 6)}
${CELL(860, 304, 24)}${CHROM_I(860, 304, 6)}
<text x="896" y="62" font-size="16" font-weight="700" fill="currentColor">n</text>
<text x="896" y="134" font-size="16" font-weight="700" fill="currentColor">n</text>
<text x="896" y="238" font-size="16" font-weight="700" fill="currentColor">n</text>
<text x="896" y="310" font-size="16" font-weight="700" fill="currentColor">n</text>
<text x="940" y="186" font-size="15" text-anchor="middle" fill="currentColor">4 haploid</text>
<text x="740" y="338" font-size="16" fill="currentColor" text-anchor="middle"><tspan font-weight="700">MI</tspan> separates homologs — reductional: 2n → n</text>
<text x="740" y="360" font-size="16" fill="currentColor" text-anchor="middle"><tspan font-weight="700">MII</tspan> separates sister chromatids — equational</text>
<text x="740" y="382" font-size="16" fill="currentColor" text-anchor="middle">after MI chromatids are still paired (n, 2C)</text>
<g class="fig-muted"><text x="500" y="412" font-size="15" text-anchor="middle" fill="currentColor">same machinery (CDKs, APC/C, cohesin/separase); meiosis I protects centromeric cohesin, so only arm cohesin is cut</text></g>
<g class="fig-accent-2"><text x="500" y="442" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">bookkeeping guard: count chromosomes by centromeres — a chromatid becomes a chromosome only when it separates</text></g>
</svg>`

export const mcatCellCycleFigures: DeckFigurePlacement[] = [
  {
    at: 'The Four Phases (Plus One Exit)',
    mode: 'lead',
    figure: {
      svg: clockSvg,
      alt:
        'Left: the cell cycle drawn as a ring clock running clockwise from the top. G1 is the longest arc (growth, decision to divide, 2C DNA), then S (DNA replication 2C to 4C, centrosome duplicates), then a shorter G2 (4C, error check, mitotic prep) and a short red M arc (mitosis plus cytokinesis, 4C into two 2C daughters). The centre reads Interphase = G1 + S + G2, about 90%, 2n chromosomes throughout. Three red bars on the ring mark the checkpoints: G1/S (restriction point), G2/M and the spindle checkpoint. A dashed arrow leaves G1 to a dashed G0 circle: the quiescent exit, permanent for neurons and cardiac muscle, reversible for hepatocytes. Right: a graph of DNA content per cell against the phases: flat at 2C through G1, rising through S to 4C, flat through G2 and M, then dropping back to 2C at division; chromosome number stays 2n, only the C value doubles.',
      caption: 'The cycle as a clock with one exit (G₀), and the DNA-content staircase that goes with it (relative durations illustrative).',
    },
    blocks: [
      '- **Interphase (G$_1$ + S + G$_2$)** ≈ 90% of the cycle; **G$_0$** = quiescent exit — neurons stay, hepatocytes can return',
      '- S doubles **DNA content (2C → 4C)**, not chromosome number: sister chromatids share one centromere until anaphase',
    ],
  },
  {
    at: 'Mitosis — PMAT in Mechanistic Terms',
    mode: 'lead',
    figure: {
      svg: mitosisSvg,
      alt:
        'Six cells in a row, each with X-shaped replicated chromosomes and blue spindle poles. Prophase: chromatin condenses inside a dashed nuclear envelope while centrosomes separate and the spindle begins. Prometaphase: the envelope has broken down and spindle microtubules from both poles attach to the kinetochores of scattered chromosomes. Metaphase: the chromosomes line up on the dashed metaphase plate under balanced tension from both poles. Anaphase: cohesin is cleaved and single V-shaped chromatids are pulled toward opposite poles of a lengthening cell. Telophase: two dashed nuclear envelopes re-form around decondensing chromatin. Cytokinesis: a red actin-myosin contractile ring pinches the cell into two daughters. Notes: interphase before had 46 chromosomes of two sister chromatids (4C); anaphase is when the count changes (46 chromosomes of 2 chromatids become 92 single chromatids, then 46 per daughter); spindle poisons leave kinetochores without tension and arrest the cell before anaphase; cytokinesis is separable, so skipping it gives binucleate or polyploid cells.',
      caption: 'Mitosis as six cells: condense, capture, align, separate, re-wrap, pinch.',
    },
    blocks: [
      '- Prophase condenses · prometaphase breaks the envelope and **kinetochores capture microtubules** · metaphase aligns under tension',
      '- Anaphase: **cohesin cleaved**, chromatids part (46 × 2 → 92 → 46 each) · telophase re-wraps · cytokinesis = actin–myosin ring',
    ],
  },
  {
    at: 'Measuring the Cycle — Flow Cytometry',
    mode: 'after',
    figure: {
      svg: flowSvg,
      alt:
        'Three DNA-content histograms (cell count against DNA per cell, with 2C and 4C marked). Asynchronous culture: a tall peak at 2C (G1 and G0 cells), a low plateau between the peaks (S phase) and a smaller peak at 4C (G2 and M) — the 2C peak is big because G1 is the longest phase. Spindle poison: the 4C peak grows large, and those cells have condensed chromosomes, so they are arrested in mitosis. Hydroxyurea (no dNTPs): nearly all cells pile at or just above 2C, stalled at entry into S. Footer: a BrdU or EdU pulse labels only the cells in S phase during the pulse; the histograms are illustrative.',
      caption: 'Reading a flow-cytometry DNA histogram: which peak grows tells you where a drug acts (illustrative).',
    },
    blocks: [
      '- **2C peak** = G$_1$ (and G$_0$) · **4C peak** = G$_2$ + M · **between** = S; condensed chromosomes separate M from G$_2$',
      '- M-arrest grows 4C; a replication-initiation block grows 2C; stalled forks pile between — **EdU/BrdU** marks S directly',
    ],
  },
  {
    at: 'The Engine: Cyclin-Dependent Kinases',
    mode: 'lead',
    figure: {
      svg: cyclinSvg,
      alt:
        'A graph of protein level across one cell cycle, with G1, S, G2 and M bands along the time axis. A dashed grey horizontal line labelled CDK protein stays constant all cycle. Four cyclin curves rise and then fall abruptly: cyclin D–CDK4/6 rises in G1 and stays up (growth-factor driven, phosphorylates Rb); dashed cyclin E–CDK2 peaks at the G1/S boundary and crashes in early S (fires the restriction point); blue cyclin A–CDK2 rises through S and G2 and crashes at the start of mitosis (fires origins, blocks re-licensing); red cyclin B–CDK1, MPF, peaks at G2/M and crashes at anaphase (condensation, envelope breakdown, spindle). Footer: each cyclin is destroyed abruptly by an E3 ubiquitin ligase and the proteasome, so transitions are one-way ratchets; levels illustrative; CDK activity also needs Cdc25 to remove inhibitory phosphates.',
      caption: 'Constant enzyme, oscillating activator: cyclins are made, then destroyed — the oscillation is the clock (illustrative).',
    },
    blocks: [
      '- **CDK levels constant, cyclin levels oscillate**; ubiquitin → proteasome destruction makes each transition a one-way ratchet',
      '- Pairs: cyclin D–CDK4/6 (G$_1$) · E–CDK2 (G$_1$/S) · A–CDK2 (S) · **B–CDK1 = MPF** (G$_2$/M, needs Cdc25)',
    ],
  },
  {
    at: 'The Restriction Point: Rb and E2F',
    mode: 'lead',
    figure: {
      svg: rbSvg,
      alt:
        'A pathway of boxes and arrows. Down the left: growth factors, then Ras to MAPK, then blue cyclin D–CDK4/6, which adds phosphate to Rb. In the middle Rb is drawn bound to E2F (early G1: Rb keeps E2F silent). A dashed vertical line labelled R, the restriction point, separates before R (needs growth factors) from after R (finishes the cycle without them). Past the line, hyperphosphorylated Rb lets go: E2F free transcribes S-phase genes (cyclin E, DNA polymerase, thymidylate synthase), which make cyclin E–CDK2; a blue arrow loops from cyclin E–CDK2 back to Rb: more Rb phosphorylation, positive feedback, so commitment becomes all-or-none. In red, p16 blocks cyclin D–CDK4/6 (a CDK inhibitor lost in many cancers). Red footer: nearly every tumor breaks this brake by Rb loss, cyclin D overexpression, CDK4 amplification, p16 loss, or HPV E7 binding Rb.',
      caption: 'The restriction point: Rb is the brake, E2F the engine, cyclin D–CDK4/6 the growth-factor-driven key — and feedback makes the switch all-or-none.',
    },
    blocks: [
      '- Growth factors → Ras–MAPK → **cyclin D–CDK4/6** phosphorylates **Rb** → Rb releases **E2F** → S-phase genes (cyclin E, DNA pol, TS)',
      '- Cyclin E–CDK2 phosphorylates Rb further (**positive feedback**) → past R the cycle runs without mitogens; p16 is the brake on CDK4/6',
    ],
  },
  {
    at: 'p53 — Guardian of the Genome',
    mode: 'lead',
    figure: {
      svg: p53Svg,
      alt:
        'Top row, healthy cell: p53 is tagged by MDM2 (an E3 ubiquitin ligase) and sent to the proteasome — made constantly, destroyed within minutes, so it stays scarce; regulation is by degradation, not synthesis. Bottom row, DNA damage: damage activates checkpoint kinases, which phosphorylate p53; a red bar shows MDM2 can no longer bind, so p53 stabilizes and accumulates and transcribes a triage program, fanned out to four boxes: p21 (CDK inhibition, G1 arrest to pause and repair), DNA repair genes (fix the damage), red BAX (apoptosis if damage is irreparable), and MDM2 itself (negative feedback, a dashed grey inhibitory loop back to p53: the alarm resets once damage clears). Red footer: TP53 is mutated in over half of human cancers; Li-Fraumeni syndrome is one bad allele inherited with the second lost somatically.',
      caption: 'p53 is kept scarce by MDM2 until damage signaling stabilizes it; then it arrests, repairs, or kills — and switches itself off.',
    },
    blocks: [
      '- **MDM2** (E3 ligase) destroys p53 constantly; damage-activated kinases phosphorylate p53 → MDM2 can’t bind → p53 **accumulates**',
      '- Triage: **p21** → G$_1$ arrest · repair genes · **BAX** → apoptosis · MDM2 ↑ (negative feedback); TP53 mutated in >50% of cancers',
    ],
  },
  {
    at: 'Apoptosis — Ordered Self-Destruction',
    mode: 'lead',
    figure: {
      svg: apoptosisSvg,
      alt:
        'Two pathways side by side that converge at the bottom. Intrinsic (mitochondrial), left: stress, DNA damage or p53-induced BAX tips the Bcl-2 family balance; pro-apoptotic BAX/BAK are blocked by a red anti-apoptotic Bcl-2 box (overexpressed in lymphoma t(14;18)). BAX/BAK make pores in the outer membrane of a mitochondrion, blue cytochrome c dots escape to the cytosol and build the apoptosome, which activates initiator caspase-9. Extrinsic (death receptor), right: Fas ligand or TNF binds a death receptor in the plasma membrane (used by cytotoxic T cells and for immune homeostasis), activating initiator caspase-8. Both initiators activate the executioner caspases-3/7: controlled demolition with no lysis and no inflammation. Footer: ATP-dependent; caspases are cysteine proteases that cut after aspartate, made as inactive zymogens; phosphatidylserine flips outward as an eat-me signal, unlike necrosis (swelling, rupture, inflammation).',
      caption: 'Two ways to start apoptosis, one way to finish it: initiator caspases converge on executioner caspases-3/7.',
    },
    blocks: [
      '- **Intrinsic:** BAX/BAK beat Bcl-2 → mitochondrial pores → **cytochrome c** → apoptosome → **caspase-9**; **extrinsic:** Fas/TNF → **caspase-8**',
      '- Both → **caspases-3/7**: shrinkage, DNA laddering, PS flipped out, apoptotic bodies, no inflammation (necrosis = swell, burst, inflame)',
    ],
  },
  {
    at: 'The Two-Gene-Class Logic of Cancer',
    mode: 'replace-table',
    figure: {
      svg: twoHitSvg,
      alt:
        'Top left, oncogene: gain of function, a stuck accelerator; of a cell’s two alleles one is normal and one is a red hit — one hit suffices, dominant at the cell level (RAS, MYC, HER2, BCR-ABL, cyclin D). Top right, tumor suppressor: loss of function, a cut brake line; both alleles are red hits — both must be lost, recessive at the cell level, two hits (RB, TP53, p16, PTEN, APC, BRCA1/2). Bottom, Knudson’s two-hit logic for retinoblastoma. Hereditary row: every cell already carries one red hit; one more hit in any of millions of cells gives a tumor cell with two hits — early, bilateral, often multifocal. Sporadic row: cells start with no hits; a first hit and then a second rare hit must land in the same cell — late, unilateral, single tumor. Same gene and mechanism, only the statistics of hits differ; Li-Fraumeni and BRCA families follow the same logic.',
      caption: 'One hit for an oncogene, two for a tumor suppressor — and why inheriting the first hit makes cancer early and bilateral.',
    },
    blocks: [
      '- **Oncogene:** gain of function, ONE allele — stuck accelerator (RAS, MYC, HER2, BCR-ABL, cyclin D)',
      '- **Tumor suppressor:** loss of function, BOTH alleles (“two hits”) — cut brake (RB, TP53, p16, PTEN, APC, BRCA1/2)',
      '- **Knudson:** inherited first hit → early, bilateral; sporadic needs two hits in one cell → late, unilateral',
    ],
  },
  {
    at: 'Mitosis vs. Meiosis — One-Table Contrast',
    mode: 'lead',
    figure: {
      svg: meiosisSvg,
      alt:
        'Left, mitosis: a parent cell (2n, 4C after S) holds one homolog pair drawn as a blue X and a grey X (replicated chromosomes). One division gives two identical 2n cells, each with one blue and one grey single chromatid — sister chromatids were separated; no crossing over; equational, 2n to 2n. Right, meiosis: the same parent, with a red mark where the homologs crossed over in prophase I. Meiosis I separates the homologs into two cells, one with the blue X and one with the grey X — reductional, 2n to n, chromatids still paired (n, 2C). Meiosis II then separates sister chromatids, giving four haploid cells each with a single chromatid. Notes: the same machinery (CDKs, APC/C, cohesin/separase) runs both; meiosis I protects centromeric cohesin so only arm cohesin is cut; count chromosomes by centromeres — a chromatid becomes a chromosome only when it separates.',
      caption: 'One division or two: mitosis parts sister chromatids once; meiosis parts homologs first (reductional), then chromatids.',
    },
    blocks: [
      '- **Mitosis:** sister chromatids part → 2 identical **2n** cells · **Meiosis I:** homologs part (crossing over in prophase I) → **2n → n**',
      '- **Meiosis II:** chromatids part → 4 haploid cells; centromeric cohesin is protected through MI so chromatids stay paired',
    ],
  },
]
