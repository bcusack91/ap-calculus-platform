import type { DeckFigurePlacement } from './index'

/**
 * Cell Biology (7-part survey, MCAT B/B) — figures for the in-class deck.
 * Authored 2026-10-29.
 *
 * The dedicated decks (Organelles, Membrane Transport, Cell Cycle, Cell
 * Signaling) already draw the cell map, cytoskeleton, protein zip codes, the
 * SRP cycle, ER → Golgi sorting, the fluid mosaic, passive routes, tonicity,
 * the Na⁺/K⁺ pump, the LDL cycle, the cell-cycle clock, cyclin waves, Rb/E2F,
 * p53, apoptosis arms, mitosis vs meiosis, receptor families and the G-protein
 * cycle — so the survey draws DIFFERENT views: a log-scale size ruler from atoms
 * to cells, the three vesicle coats and their directions, the K⁺ equilibrium
 * picture behind the resting potential, ploidy (n) vs DNA content (C) traced
 * through mitosis and meiosis, the NO → cGMP pathway, apoptosis vs necrosis
 * morphology with the DNA ladder vs smear, the five cell junctions, the
 * epithelial classification grid, and integrins linking the ECM to actin.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. Cells and junctions are schematic shapes; no molecule
 * is drawn structurally; the n/C trace is the textbook shape (illustrative).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-cb-<figure>[-colour], bar-cb-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Inhibition "bar" head (⊣). */
const BAR = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M5,0 L5,10" stroke="currentColor" stroke-width="2.5"/></marker>`

/** Rich SVG text with subscripts: `rich('E', ['K'], ' ≈ −90 mV')`. */
type RichPart = string | [string]
const rich = (...parts: RichPart[]) => {
  let out = ''
  let shifted = false
  for (const p of parts) {
    if (Array.isArray(p)) {
      out += `<tspan dy="${shifted ? 0 : 6}" font-size="0.72em">${p[0]}</tspan>`
      shifted = true
    } else {
      out += shifted ? `<tspan dy="-6">${p}</tspan>` : p
      shifted = false
    }
  }
  return out
}

/** Rounded box with a centred label. `weight` is the font-weight attribute string. */
const box = (cx: number, cy: number, w: number, h: number, label: string, size = 18, weight = '700') =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy + size * 0.36}" font-size="${size}" font-weight="${weight}" text-anchor="middle" fill="currentColor">${label}</text>`

/** Plain text helper. `anchor` is the text-anchor attribute string; `weight` the font-weight string. */
const txt = (x: number, y: number, s: string, size = 18, anchor = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" fill="currentColor">${s}</text>`

/** Wavy fibre: n half-waves of `step` px from (x, y). */
const wave = (x: number, y: number, n: number, step = 20, amp = 6) => {
  let d = `M${x} ${y} q ${step / 2} ${-amp} ${step} 0`
  for (let i = 1; i < n; i++) d += ` t ${step} 0`
  return d
}

/* 1 — Size ruler: atoms → viruses → prokaryotes → eukaryotes on a log scale (lead, 1000×460) */
const rulerX = (nm: number) => Math.round((90 + 120 * (Math.log10(nm) + 1)) * 10) / 10
const sizeBar = (nm0: number, nm1: number, y: number, label: string) => {
  const x0 = rulerX(nm0)
  const x1 = rulerX(nm1)
  return `<rect x="${x0}" y="${y}" width="${Math.round((x1 - x0) * 10) / 10}" height="22" rx="7" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2"/>${txt((x0 + x1) / 2, y - 10, label, 18, 'middle', '700')}`
}
const sizeTicks = [
  [0.1, '0.1 nm'],
  [1, '1 nm'],
  [10, '10 nm'],
  [100, '100 nm'],
  [1000, '1 µm'],
  [10000, '10 µm'],
  [100000, '100 µm'],
  [1000000, '1 mm'],
] as const
const sizeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cb-size')}</defs>
${txt(60, 40, 'A log ruler: every tick is 10× bigger than the last', 22, 'start', '700')}
<line x1="60" y1="300" x2="968" y2="300" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-size)"/>
${sizeTicks.map(([nm, l]) => `<line x1="${rulerX(nm)}" y1="290" x2="${rulerX(nm)}" y2="310" stroke="currentColor" stroke-width="2.5"/>${txt(rulerX(nm), 334, l, 17, 'middle')}`).join('')}
<circle cx="${rulerX(0.1)}" cy="300" r="6" fill="currentColor"/>${txt(rulerX(0.1), 274, 'atom', 17, 'middle')}
<circle cx="${rulerX(1)}" cy="300" r="6" fill="currentColor"/>${txt(rulerX(1), 274, 'glucose', 17, 'middle')}
${sizeBar(5, 10, 150, 'protein')}
${sizeBar(20, 300, 220, 'viruses 20–300 nm')}
<g class="fig-accent">${sizeBar(1000, 10000, 150, 'prokaryote 1–10 µm')}</g>
<g class="fig-accent-2">${sizeBar(10000, 100000, 220, 'eukaryotic cell 10–100 µm')}</g>
<g class="fig-muted">
<line x1="${rulerX(200)}" y1="300" x2="${rulerX(200)}" y2="412" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
${txt(rulerX(200) + 10, 398, 'light microscope limit ≈ 200 nm: viruses need an EM', 16)}
<line x1="${rulerX(100000)}" y1="300" x2="${rulerX(100000)}" y2="372" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
${txt(rulerX(100000), 364, 'naked eye ≈ 100 µm', 16, 'middle')}
</g>
${txt(60, 448, 'A bacterium fits inside a eukaryotic cell the way a virus fits inside a bacterium: about 10× each step.', 16)}
</svg>`

/* 2 — Vesicle coats: COPII forward, COPI back, clathrin from the TGN and the surface (lead, 1000×460) */
const vesicle = (cx: number, cy: number, coated: boolean) =>
  `<circle class="fig-bg" cx="${cx}" cy="${cy}" r="${coated ? 19 : 14}"/>${coated ? `<circle cx="${cx}" cy="${cy}" r="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3"/>` : ''}<circle cx="${cx}" cy="${cy}" r="12" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>`
const coatsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cb-coat')}</defs>
${txt(50, 40, 'Three vesicle coats, three directions', 22, 'start', '700')}
<g class="fig-muted">${txt(50, 68, 'a coat is a protein shell that picks the cargo and shapes the bud — it is shed before the vesicle fuses', 16)}</g>
<rect x="50" y="110" width="160" height="220" rx="16" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${[130, 165, 200, 235, 270, 305].map((y) => `<circle cx="210" cy="${y}" r="5" fill="currentColor"/>`).join('')}
${txt(130, 212, 'Rough ER', 19, 'middle', '700')}
<g class="fig-muted">${txt(130, 238, 'ribosomes outside', 14, 'middle')}</g>
${txt(500, 128, 'Golgi', 19, 'middle', '700')}
${[165, 215, 265].map((y) => `<rect x="430" y="${y - 13}" width="140" height="26" rx="13" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>`).join('')}
${txt(500, 171, 'cis', 15, 'middle')}
${txt(500, 271, 'trans', 15, 'middle')}
<line x1="920" y1="90" x2="920" y2="440" stroke="currentColor" stroke-width="5"/>
${txt(920, 76, 'plasma membrane', 15, 'middle')}
<g class="fig-muted">${txt(960, 250, 'outside', 15, 'middle')}</g>
<g class="fig-accent">
<defs>${ARROW('arr-cb-coat-b')}</defs>
<line x1="222" y1="170" x2="424" y2="170" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-coat-b)"/>
${vesicle(323, 170, true)}
${txt(340, 140, 'COPII — forward (ER → Golgi)', 16, 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cb-coat-r')}</defs>
<line x1="424" y1="250" x2="222" y2="250" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-coat-r)"/>
${vesicle(323, 250, true)}
${txt(330, 290, 'COPI — back (Golgi → ER)', 17, 'middle', '700')}
</g>
<circle cx="760" cy="130" r="38" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
${txt(760, 128, 'lysosome', 14, 'middle', '700')}
${txt(760, 146, 'pH ~5', 13, 'middle')}
<line x1="574" y1="252" x2="722" y2="152" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-coat)"/>
${vesicle(646, 203, true)}
${txt(700, 118, 'clathrin · M6P tag', 16, 'end', '700')}
<circle cx="790" cy="275" r="30" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
${txt(790, 280, 'endosome', 12, 'middle')}
<line x1="906" y1="275" x2="824" y2="275" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-coat)"/>
<path d="M920 258 q -22 17 0 34" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="4 3"/>
${txt(905, 322, 'clathrin-coated pit (endocytosis)', 15, 'end', '700')}
<line x1="780" y1="246" x2="765" y2="172" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-coat)"/>
<path d="M500 280 V400 H906" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-coat)"/>
${vesicle(700, 400, false)}
${txt(905, 436, 'default route: uncoated secretory vesicle → exocytosis', 16, 'end', '700')}
</svg>`

/* 3 — The K⁺ equilibrium picture behind the resting potential (lead, 1000×460) */
const ion = (x: number, y: number, s: string) => txt(x, y, s, 17, 'middle', '700')
const vY = (mV: number) => 90 + (60 - mV) * 2
const nernstSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cb-nernst')}</defs>
<rect x="60" y="90" width="500" height="290" rx="14" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2"/>
${txt(180, 116, 'inside', 18, 'middle', '700')}
${txt(440, 116, 'outside', 18, 'middle', '700')}
<g class="fig-muted"><rect x="304" y="90" width="12" height="125" fill="currentColor"/><rect x="304" y="251" width="12" height="129" fill="currentColor"/></g>
<rect x="298" y="215" width="24" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted">${txt(290, 226, 'K⁺ leak', 13, 'end')}${txt(290, 242, 'channel', 13, 'end')}</g>
<g class="fig-accent">
${[
  [110, 150],
  [160, 170],
  [240, 150],
  [255, 180],
  [125, 300],
  [180, 320],
  [230, 300],
  [270, 335],
  [145, 360],
  [95, 240],
].map(([x, y]) => ion(x, y, 'K⁺')).join('')}
${ion(540, 120, 'K⁺')}${ion(470, 340, 'K⁺')}
${txt(180, 142, 'high [K⁺]', 15, 'middle')}
</g>
<g class="fig-accent-2">
${ion(200, 215, 'Na⁺')}${ion(240, 360, 'Na⁺')}
${[
  [360, 170],
  [420, 185],
  [500, 150],
  [530, 190],
  [360, 325],
  [420, 350],
  [500, 310],
  [540, 345],
  [460, 300],
].map(([x, y]) => ion(x, y, 'Na⁺')).join('')}
${txt(440, 142, 'high [Na⁺]', 15, 'middle')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-cb-nernst-b')}</defs>
<line x1="330" y1="226" x2="500" y2="226" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cb-nernst-b)"/>
${txt(415, 216, 'concentration pushes K⁺ out', 14, 'middle', '700')}
</g>
<line x1="500" y1="246" x2="330" y2="246" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cb-nernst)"/>
${txt(415, 268, '− inside pulls K⁺ back', 14, 'middle', '700')}
${[130, 165, 275, 310, 345].map((y) => `${txt(290, y + 6, '−', 20, 'middle', '700')}${txt(330, y + 6, '+', 20, 'middle', '700')}`).join('')}
${txt(310, 410, rich('the two forces cancel at E', ['K'], ' ≈ −90 mV: no net K⁺ flow — the inside stays negative'), 17, 'middle')}
${txt(780, 60, rich('E', ['ion'], ' = (61 / z) · log([out] / [in])  mV, 37 °C'), 19, 'middle', '700')}
<line x1="700" y1="${vY(75)}" x2="700" y2="${vY(-100)}" stroke="currentColor" stroke-width="2.5"/>
${[60, 30, 0, -30, -60, -90].map((v) => `<line x1="694" y1="${vY(v)}" x2="706" y2="${vY(v)}" stroke="currentColor" stroke-width="2"/>${txt(684, vY(v) + 6, `${v > 0 ? '+' : ''}${v}`, 15, 'end')}`).join('')}
${txt(650, vY(-100) + 24, 'mV', 15, 'middle')}
<g class="fig-accent-2">
<line x1="706" y1="${vY(60)}" x2="760" y2="${vY(60)}" stroke="currentColor" stroke-width="3"/>
${txt(770, vY(60) + 6, rich('E', ['Na'], ' ≈ +60 mV'), 17, 'start', '700')}
${txt(770, vY(60) + 26, 'Na⁺ higher outside', 14)}
</g>
<g class="fig-accent">
<line x1="706" y1="${vY(-90)}" x2="760" y2="${vY(-90)}" stroke="currentColor" stroke-width="3"/>
${txt(770, vY(-90) + 6, rich('E', ['K'], ' ≈ −90 mV'), 17, 'start', '700')}
${txt(770, vY(-90) + 26, 'K⁺ higher inside', 14)}
</g>
<line x1="706" y1="${vY(-70)}" x2="760" y2="${vY(-70)}" stroke="currentColor" stroke-width="4"/>
${txt(770, vY(-70) + 6, 'resting ≈ −70 mV', 18, 'start', '700')}
<g class="fig-muted">
<path d="M730 ${vY(-70) + 8} v ${vY(-90) - vY(-70) - 16}" stroke="currentColor" stroke-width="2"/>
${txt(770, vY(-70) - 88, rich('rest sits near E', ['K'], ', not E', ['Na'], ':'), 14)}
${txt(770, vY(-70) - 70, 'at rest the membrane is far', 14)}
${txt(770, vY(-70) - 52, 'more permeable to K⁺ than Na⁺', 14)}
</g>
</svg>`

/* 4 — Ploidy (n) vs DNA content (C) through a mitotic cycle and meiosis (lead, 1000×460) */
const cY = (c: number) => 410 - 80 * c
const ploidySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cb-ploidy')}</defs>
<line x1="70" y1="${cY(1)}" x2="70" y2="40" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cb-ploidy)"/>
<line x1="70" y1="${cY(1) + 30}" x2="70" y2="${cY(1)}" stroke="currentColor" stroke-width="2.5"/>
<line x1="70" y1="360" x2="960" y2="360" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cb-ploidy)"/>
${txt(84, 52, 'DNA per cell', 17, 'start', '700')}
<g class="fig-muted">
${[1, 2, 4].map((c) => `<line x1="70" y1="${cY(c)}" x2="930" y2="${cY(c)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>${txt(60, cY(c) + 6, `${c}C`, 16, 'end')}`).join('')}
<line x1="470" y1="60" x2="470" y2="430" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
</g>
${txt(280, 36, 'Mitotic cycle', 20, 'middle', '700')}
${txt(700, 36, 'Meiosis', 20, 'middle', '700')}
<g class="fig-accent">
<path d="M100 ${cY(2)} H200 L280 ${cY(4)} H370 L380 ${cY(2)} H460" fill="none" stroke="currentColor" stroke-width="4"/>
<path d="M480 ${cY(2)} H540 L600 ${cY(4)} H670 L680 ${cY(2)} H760 L770 ${cY(1)} H900" fill="none" stroke="currentColor" stroke-width="4"/>
${txt(330, cY(4) - 12, '4C', 16, 'middle', '700')}
${txt(150, cY(2) - 12, '2C', 16, 'middle', '700')}
${txt(420, cY(2) - 12, '2C', 16, 'middle', '700')}
${txt(720, cY(2) - 12, '2C', 16, 'middle', '700')}
${txt(835, cY(1) - 12, '1C', 16, 'middle', '700')}
</g>
${txt(150, 384, 'G₁', 16, 'middle')}${txt(240, 384, 'S', 16, 'middle')}${txt(325, 384, 'G₂', 16, 'middle')}${txt(375, 384, 'M', 16, 'middle', '700')}${txt(420, 384, 'G₁', 16, 'middle')}
${txt(510, 384, 'G₁', 16, 'middle')}${txt(570, 384, 'S', 16, 'middle')}${txt(635, 384, 'G₂', 16, 'middle')}${txt(675, 384, 'MI', 16, 'middle', '700')}${txt(765, 384, 'MII', 16, 'middle', '700')}${txt(835, 384, 'gametes', 16, 'middle')}
<g class="fig-accent-2">
<rect x="100" y="400" width="360" height="26" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
${txt(280, 418, 'ploidy 2n — 46 chromosomes the whole way', 15, 'middle', '700')}
<rect x="480" y="400" width="200" height="26" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
${txt(580, 418, '2n (46)', 15, 'middle', '700')}
<rect x="680" y="400" width="220" height="26" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
${txt(790, 418, '1n — 23 chromosomes', 15, 'middle', '700')}
</g>
<g class="fig-accent-2">
<rect x="680" y="${cY(4) - 20}" width="80" height="${cY(2) - cY(4) + 50}" rx="8" fill="currentColor" fill-opacity="0.12" stroke="none"/>
${txt(720, cY(4) - 34, '1n but 2C', 16, 'middle', '700')}
${txt(720, cY(4) + 22, 'haploid, sisters', 13, 'middle')}
${txt(720, cY(4) + 38, 'still joined', 13, 'middle')}
</g>
<g class="fig-muted">
${txt(330, cY(4) - 34, 'S doubles C, not n', 14, 'middle')}
${txt(375, cY(2) + 22, 'sisters split', 13, 'middle')}
${txt(680, cY(2) + 22, 'homologs split', 13, 'middle')}
${txt(775, cY(1) + 22, 'sisters split', 13, 'middle')}
</g>
</svg>`

/* 5 — Nitric oxide: a gas that skips the surface receptor (lead, 1000×460) */
const noSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cb-no')}</defs>
<rect x="60" y="100" width="340" height="280" rx="18" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>
${txt(230, 130, 'endothelial cell', 18, 'middle', '700')}
<rect x="520" y="100" width="420" height="280" rx="18" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>
${txt(730, 130, 'vascular smooth muscle cell', 18, 'middle', '700')}
${box(150, 200, 130, 46, 'L-arginine', 17)}
<line x1="217" y1="200" x2="280" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-no)"/>
${txt(248, 180, 'NO synthase', 14, 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-cb-no-b')}</defs>
<circle cx="310" cy="200" r="26" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
${txt(310, 206, 'NO', 18, 'middle', '700')}
<line x1="338" y1="200" x2="578" y2="200" stroke="currentColor" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#arr-cb-no-b)"/>
${txt(460, 162, 'a gas: diffuses', 14, 'middle', '700')}
${txt(460, 180, 'through membranes', 14, 'middle', '700')}
${txt(460, 226, 'no surface receptor', 13, 'middle')}
${txt(460, 244, 'lives seconds', 13, 'middle')}
</g>
${box(640, 200, 120, 46, 'sGC', 18)}
<g class="fig-muted">${txt(640, 240, 'soluble guanylyl cyclase', 13, 'middle')}</g>
<line x1="702" y1="200" x2="722" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-no)"/>
<g class="fig-muted">${txt(712, 184, 'GTP', 13, 'middle')}</g>
${box(770, 200, 90, 46, 'cGMP ↑', 17)}
<line x1="817" y1="200" x2="842" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-no)"/>
${box(885, 200, 80, 46, 'PKG', 18)}
<line x1="885" y1="225" x2="885" y2="262" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-no)"/>
${box(870, 290, 120, 44, 'relaxation', 16)}
<line x1="870" y1="314" x2="870" y2="334" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-no)"/>
${box(870, 358, 130, 44, 'vasodilation', 16)}
<line x1="770" y1="225" x2="770" y2="292" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cb-no)"/>
${txt(782, 262, 'PDE5', 14, 'start', '700')}
${box(770, 316, 100, 40, '5′-GMP (off)', 14, '400')}
<g class="fig-accent-2">
<defs>${BAR('bar-cb-no-r')}</defs>
<line x1="668" y1="262" x2="756" y2="262" stroke="currentColor" stroke-width="3" marker-end="url(#bar-cb-no-r)"/>
${txt(660, 267, 'sildenafil (Viagra)', 15, 'end', '700')}
${txt(660, 286, 'cGMP stays up', 13, 'end')}
${txt(500, 424, 'nitroglycerin releases NO → the same pathway relaxes coronary vessels (angina)', 17, 'middle', '700')}
</g>
</svg>`

/* 6 — Apoptosis vs necrosis: shrink and bleb vs swell and burst; ladder vs smear (replace-table, 560×440) */
const nucleus = (cx: number, cy: number, r: number) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.35"/>`
const blebCell = (cx: number, cy: number) => {
  const r = 18
  let d = ''
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4
    const bx = Math.round((cx + (r + 6) * Math.cos(a)) * 10) / 10
    const by = Math.round((cy + (r + 6) * Math.sin(a)) * 10) / 10
    d += `<circle cx="${bx}" cy="${by}" r="5" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>`
  }
  return `${d}<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/><path d="M${cx - 12} ${cy + 2} a 12 12 0 0 0 24 0 z" fill="currentColor" fill-opacity="0.6"/>`
}
const burstCell = (cx: number, cy: number) => {
  const r = 36
  const arcs: string[] = []
  for (let i = 0; i < 6; i++) {
    const a0 = (i * 60 + 8) * (Math.PI / 180)
    const a1 = (i * 60 + 44) * (Math.PI / 180)
    arcs.push(`M${(cx + r * Math.cos(a0)).toFixed(1)} ${(cy + r * Math.sin(a0)).toFixed(1)} A${r} ${r} 0 0 1 ${(cx + r * Math.cos(a1)).toFixed(1)} ${(cy + r * Math.sin(a1)).toFixed(1)}`)
  }
  const leaks = [50, 100, 150, 200, 250].map((deg) => {
    const a = ((deg + 26) * Math.PI) / 180
    return `<circle cx="${(cx + (r + 12) * Math.cos(a)).toFixed(1)}" cy="${(cy + (r + 12) * Math.sin(a)).toFixed(1)}" r="3" fill="currentColor"/>`
  })
  return `<path d="${arcs.join(' ')}" fill="none" stroke="currentColor" stroke-width="2"/>${leaks.join('')}${nucleus(cx, cy, 9)}`
}
const deathCol = (x: number, cls: string, title: string, l1: string[], l2: string[], l3: string[], stage2: string, stage3: string, gel: string, gelLabel: string) => `
<g class="${cls}">${txt(x + 140, 26, title, 19, 'middle', '700')}</g>
<circle cx="${x + 70}" cy="78" r="26" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>${nucleus(x + 70, 78, 9)}
${l1.map((s, i) => txt(x + 112, 74 + i * 18, s, 14)).join('')}
<g class="fig-muted"><line x1="${x + 70}" y1="110" x2="${x + 70}" y2="132" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cb-death-m)"/></g>
${stage2}
${l2.map((s, i) => txt(x + 112, 164 + i * 18, s, 14)).join('')}
<g class="fig-muted"><line x1="${x + 70}" y1="210" x2="${x + 70}" y2="232" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cb-death-m)"/></g>
${stage3}
${l3.map((s, i) => txt(x + 112, 264 + i * 18, s, 14)).join('')}
<g class="fig-muted"><rect x="${x + 50}" y="342" width="40" height="90" rx="4" fill="currentColor" fill-opacity="0.12"/></g>
${gel}
${txt(x + 112, 376, gelLabel, 14, 'start', '700')}
`
const apoStage2 = (x: number) => blebCell(x + 70, 170)
const apoStage3 = (x: number) =>
  `${[
    [x + 52, 262],
    [x + 78, 256],
    [x + 66, 284],
    [x + 90, 280],
  ]
    .map(([bx, by]) => `<circle cx="${bx}" cy="${by}" r="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.5"/>`)
    .join('')}<path d="M${x + 24} 300 a 48 48 0 0 1 60 -58" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4"/><g class="fig-muted">${txt(x + 20, 316, 'phagocyte', 11)}</g>`
const necStage2 = (x: number) => `<circle cx="${x + 70}" cy="170" r="34" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>${nucleus(x + 70, 170, 10)}<circle cx="${x + 50}" cy="158" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="${x + 88}" cy="186" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>`
const necStage3 = (x: number) => burstCell(x + 70, 272)
const ladderGel = (x: number) => `<g class="fig-accent">${[352, 366, 380, 394, 408, 422].map((y, i) => `<rect x="${x + 54}" y="${y}" width="32" height="${i < 2 ? 5 : 4}" rx="1" fill="currentColor" fill-opacity="${0.95 - i * 0.1}"/>`).join('')}</g>`
const smearGel = (x: number) => `<g class="fig-accent-2">${Array.from({ length: 18 }, (_, i) => `<rect x="${x + 54}" y="${346 + i * 4.6}" width="32" height="4.6" fill="currentColor" fill-opacity="${(0.15 + 0.6 * Math.exp(-((i - 11) ** 2) / 30)).toFixed(2)}"/>`).join('')}</g>`
const deathSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-cb-death')}</defs>
<g class="fig-muted"><defs>${ARROW('arr-cb-death-m')}</defs></g>
<g class="fig-muted"><line x1="280" y1="40" x2="280" y2="436" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/></g>
${deathCol(
  0,
  'fig-accent',
  'Apoptosis',
  ['internal signal or', 'death receptor'],
  ['shrinks, blebs;', 'chromatin condenses', '(needs ATP)'],
  ['apoptotic bodies', 'eaten by phagocytes', 'no inflammation'],
  apoStage2(0),
  apoStage3(0),
  ladderGel(0),
  '180-bp ladder',
)}
${deathCol(
  280,
  'fig-accent-2',
  'Necrosis',
  ['trauma, toxin,', 'ischemia'],
  ['swells: pumps fail', 'without ATP'],
  ['membrane ruptures,', 'contents leak', 'inflammation'],
  necStage2(280),
  necStage3(280),
  smearGel(280),
  'random smear',
)}
<g class="fig-muted">${txt(112, 400, 'DNA on a gel', 13)}${txt(392, 400, 'DNA on a gel', 13)}</g>
</svg>`

/* 7 — Five cell junctions, one panel each (lead, 1000×460) */
const junctionPanel = (i: number, title: string, draw: (x0: number) => string, lines: [string, string, string]) => {
  const x0 = 20 + i * 196
  return `
<g class="fig-muted"><rect x="${x0}" y="60" width="184" height="380" rx="12" fill="none" stroke="currentColor" stroke-width="1.5"/></g>
${txt(x0 + 92, 88, title, 18, 'middle', '700')}
${draw(x0)}
${txt(x0 + 92, 364, lines[0], 14, 'middle')}
<g class="fig-accent">${txt(x0 + 92, 388, lines[1], 14, 'middle', '700')}</g>
<g class="fig-muted">${txt(x0 + 92, 412, lines[2], 14, 'middle')}</g>`
}
/** Two cells with a 20-px gap: left cell x0+14..x0+82, right cell x0+102..x0+170, y 110..330. */
const twoCells = (x0: number) =>
  `<rect x="${x0 + 14}" y="110" width="68" height="220" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2"/><rect x="${x0 + 102}" y="110" width="68" height="220" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2"/>`
const tightDraw = (x0: number) =>
  `${twoCells(x0)}<g class="fig-accent">${[128, 140, 152, 164].map((y) => `<line x1="${x0 + 82}" y1="${y}" x2="${x0 + 102}" y2="${y}" stroke="currentColor" stroke-width="3"/>`).join('')}</g><g class="fig-muted">${txt(x0 + 92, 104, 'apical', 12, 'middle')}<line x1="${x0 + 92}" y1="190" x2="${x0 + 92}" y2="292" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arr-cb-junc-m)"/>${txt(x0 + 92, 326, 'no leak', 12, 'middle')}</g>`
const adherensDraw = (x0: number) =>
  `${twoCells(x0)}<g class="fig-accent">${[200, 214, 228, 242].map((y) => `<line x1="${x0 + 82}" y1="${y}" x2="${x0 + 92}" y2="${y + 3}" stroke="currentColor" stroke-width="3"/><line x1="${x0 + 102}" y1="${y}" x2="${x0 + 92}" y2="${y + 3}" stroke="currentColor" stroke-width="3"/>`).join('')}</g><path d="${wave(x0 + 20, 194, 3, 20, 5)} ${wave(x0 + 20, 250, 3, 20, 5)} ${wave(x0 + 106, 194, 3, 20, 5)} ${wave(x0 + 106, 250, 3, 20, 5)}" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-muted">${txt(x0 + 48, 182, 'actin', 12, 'middle')}</g>`
const desmosomeDraw = (x0: number) =>
  `${twoCells(x0)}<g class="fig-accent-2"><rect x="${x0 + 72}" y="190" width="10" height="60" fill="currentColor" fill-opacity="0.8"/><rect x="${x0 + 102}" y="190" width="10" height="60" fill="currentColor" fill-opacity="0.8"/></g><g class="fig-accent">${[200, 214, 228, 242].map((y) => `<line x1="${x0 + 82}" y1="${y}" x2="${x0 + 102}" y2="${y}" stroke="currentColor" stroke-width="3"/>`).join('')}</g>${[-28, 0, 28].map((dy) => `<path d="M${x0 + 72} ${220 + dy / 2} L${x0 + 24} ${220 + dy * 2}" stroke="currentColor" stroke-width="3"/><path d="M${x0 + 112} ${220 + dy / 2} L${x0 + 160} ${220 + dy * 2}" stroke="currentColor" stroke-width="3"/>`).join('')}<g class="fig-muted">${txt(x0 + 44, 306, 'intermediate', 12, 'middle')}${txt(x0 + 44, 320, 'filaments', 12, 'middle')}${txt(x0 + 140, 150, 'plaque', 12, 'middle')}</g>`
const gapDraw = (x0: number) =>
  `${twoCells(x0)}<g class="fig-accent">${[200, 236].map((y) => `<rect x="${x0 + 74}" y="${y - 10}" width="16" height="20" rx="3" fill="currentColor" fill-opacity="0.5"/><rect x="${x0 + 94}" y="${y - 10}" width="16" height="20" rx="3" fill="currentColor" fill-opacity="0.5"/><rect class="fig-bg" x="${x0 + 78}" y="${y - 3}" width="28" height="6"/>`).join('')}</g><g class="fig-accent-2"><defs>${ARROW('arr-cb-junc-r')}</defs><line x1="${x0 + 40}" y1="200" x2="${x0 + 140}" y2="200" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cb-junc-r)"/><line x1="${x0 + 140}" y1="236" x2="${x0 + 40}" y2="236" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cb-junc-r)"/>${txt(x0 + 92, 282, 'ions, cAMP', 13, 'middle', '700')}</g><g class="fig-muted">${txt(x0 + 92, 178, 'connexon', 12, 'middle')}</g>`
const hemiDraw = (x0: number) =>
  `<rect x="${x0 + 44}" y="110" width="96" height="150" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2"/><g class="fig-muted"><rect x="${x0 + 14}" y="286" width="156" height="14" rx="3" fill="currentColor" fill-opacity="0.6"/>${txt(x0 + 92, 322, 'basement membrane', 12, 'middle')}</g><g class="fig-accent-2"><rect x="${x0 + 62}" y="250" width="60" height="10" fill="currentColor" fill-opacity="0.8"/></g><g class="fig-accent">${[72, 92, 112].map((x) => `<line x1="${x0 + x}" y1="260" x2="${x0 + x}" y2="292" stroke="currentColor" stroke-width="3"/>`).join('')}</g>${[-24, 0, 24].map((dx) => `<path d="M${x0 + 92 + dx / 3} 250 L${x0 + 92 + dx * 1.6} 150" stroke="currentColor" stroke-width="3"/>`).join('')}<g class="fig-muted">${txt(x0 + 92, 140, 'IF', 12, 'middle')}${txt(x0 + 150, 272, 'integrins', 11, 'middle')}</g>`
const junctionsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cb-junc')}</defs>
<g class="fig-muted"><defs>${ARROW('arr-cb-junc-m')}</defs></g>
${junctionPanel(0, 'Tight', tightDraw, ['seals the gap (barrier)', 'sealing strands', 'gut lining, BBB'])}
${junctionPanel(1, 'Adherens', adherensDraw, ['adhesion belt', 'cadherins (Ca²⁺) + actin', 'epithelia'])}
${junctionPanel(2, 'Desmosome', desmosomeDraw, ['spot weld: strength', 'cadherins + IF', 'skin, cardiac muscle'])}
${junctionPanel(3, 'Gap', gapDraw, ['direct communication', 'connexins → connexon', 'cardiac, smooth muscle'])}
${junctionPanel(4, 'Hemidesmosome', hemiDraw, ['cell to basal lamina', 'integrins + IF', 'epithelial base'])}
</svg>`

/* 8 — Epithelial classification grid (replace-table, 560×440) */
const epiPanel = (col: number, row: number, name: string, draw: (x: number, y: number) => string, where: string) => {
  const x = 10 + col * 182
  const y = 10 + row * 215
  return `
<g class="fig-muted"><rect x="${x}" y="${y}" width="176" height="206" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="${x + 12}" y="${y + 138}" width="152" height="6" rx="2" fill="currentColor" fill-opacity="0.7"/></g>
${draw(x, y)}
${txt(x + 88, y + 170, name, 15, 'middle', '700')}
${txt(x + 88, y + 192, where, 12, 'middle')}`
}
const cell = (x: number, y: number, w: number, h: number, nx = x + w / 2, ny = y + h / 2, nr = Math.min(w, h) * 0.22) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><circle cx="${nx}" cy="${ny}" r="${nr.toFixed(1)}" fill="currentColor" fill-opacity="0.45"/>`
const simpleSquamous = (x: number, y: number) => [0, 1, 2].map((i) => cell(x + 14 + i * 50, y + 122, 48, 16, x + 38 + i * 50, y + 130, 5)).join('')
const simpleCuboidal = (x: number, y: number) => [0, 1, 2, 3].map((i) => cell(x + 14 + i * 38, y + 102, 36, 36)).join('')
const simpleColumnar = (x: number, y: number) =>
  `${[0, 1, 3, 4].map((i) => cell(x + 14 + i * 30, y + 72, 28, 66, x + 28 + i * 30, y + 122, 7)).join('')}<g class="fig-accent"><rect x="${x + 74}" y="${y + 72}" width="28" height="66" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8"/><ellipse cx="${x + 88}" cy="${y + 98}" rx="9" ry="16" fill="currentColor" fill-opacity="0.35"/>${txt(x + 88, y + 62, 'goblet', 11, 'middle', '700')}</g>`
const stratifiedSquamous = (x: number, y: number) =>
  `${[0, 1, 2, 3].map((i) => cell(x + 14 + i * 38, y + 108, 36, 30)).join('')}${[0, 1, 2, 3, 4].map((i) => cell(x + 14 + i * 30, y + 86, 28, 20, x + 28 + i * 30, y + 96, 4)).join('')}${[0, 1, 2].map((i) => cell(x + 14 + i * 50, y + 70, 48, 14, x + 38 + i * 50, y + 77, 3)).join('')}${[0, 1, 2].map((i) => cell(x + 24 + i * 50, y + 54, 48, 14, x + 48 + i * 50, y + 61, 3)).join('')}<g class="fig-muted">${txt(x + 88, y + 42, 'many layers → protection', 11, 'middle')}</g>`
const pseudostratified = (x: number, y: number) =>
  `${[0, 1, 2, 3, 4].map((i) => cell(x + 14 + i * 30, y + 72, 28, 66, x + 28 + i * 30, y + (i % 2 ? 128 : 92), 7)).join('')}<g class="fig-accent">${Array.from({ length: 15 }, (_, i) => `<line x1="${x + 18 + i * 10}" y1="${y + 72}" x2="${x + 18 + i * 10}" y2="${y + 58}" stroke="currentColor" stroke-width="1.8"/>`).join('')}${txt(x + 88, y + 50, 'cilia', 11, 'middle', '700')}</g><g class="fig-muted">${txt(x + 88, y + 36, 'all touch the base, nuclei stagger', 10, 'middle')}</g>`
const transitional = (x: number, y: number) =>
  `${[0, 1, 2, 3].map((i) => cell(x + 14 + i * 38, y + 110, 36, 28)).join('')}${[0, 1, 2].map((i) => cell(x + 22 + i * 46, y + 84, 44, 26)).join('')}${[0, 1].map((i) => `<path d="M${x + 30 + i * 60} ${y + 84} a 30 22 0 0 1 60 0 z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.8"/><circle cx="${x + 60 + i * 60}" cy="${y + 72}" r="5" fill="currentColor" fill-opacity="0.45"/>`).join('')}<g class="fig-muted">${txt(x + 88, y + 48, 'dome cells flatten when full', 11, 'middle')}</g>`
const epitheliaSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${epiPanel(0, 0, 'Simple squamous', simpleSquamous, 'alveoli, capillaries, Bowman’s')}
${epiPanel(1, 0, 'Simple cuboidal', simpleCuboidal, 'kidney tubules, thyroid')}
${epiPanel(2, 0, 'Simple columnar', simpleColumnar, 'gut lining (goblet cells)')}
${epiPanel(0, 1, 'Stratified squamous', stratifiedSquamous, 'skin, esophagus, vagina')}
${epiPanel(1, 1, 'Pseudostratified', pseudostratified, 'trachea (ciliated, goblet)')}
${epiPanel(2, 1, 'Transitional', transitional, 'bladder (stretches)')}
</svg>`

/* 9 — Integrins: the ECM–cytoskeleton link and its two-way signalling (lead, 1000×460) */
const ecmSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cb-ecm')}</defs>
${txt(70, 92, 'ECM: collagen fibres, elastin, ground substance', 17, 'start', '700')}
<g class="fig-muted">
<path d="${wave(80, 130, 42, 20, 6)}" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="${wave(80, 200, 42, 20, 6)}" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="${wave(80, 165, 35, 20, 6)}" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="${wave(840, 165, 4, 20, 6)}" fill="none" stroke="currentColor" stroke-width="3"/>
</g>
<line x1="60" y1="244" x2="940" y2="244" stroke="currentColor" stroke-width="3"/>
<line x1="60" y1="258" x2="940" y2="258" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted">${txt(930, 282, 'plasma membrane', 14, 'end')}${txt(70, 282, 'cytoplasm', 14)}</g>
<g class="fig-accent">
<rect x="468" y="170" width="28" height="150" rx="12" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>
<rect x="504" y="170" width="28" height="150" rx="12" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>
<circle cx="482" cy="168" r="9" fill="currentColor"/><circle cx="518" cy="168" r="9" fill="currentColor"/>
${txt(482, 300, 'α', 15, 'middle', '700')}${txt(518, 300, 'β', 15, 'middle', '700')}
${txt(500, 345, 'integrin (αβ)', 17, 'middle', '700')}
</g>
${box(500, 376, 100, 28, 'adaptors', 14, '400')}
${[-170, -100, 100, 170].map((dx) => `<line x1="${500 + dx / 6}" y1="390" x2="${500 + dx}" y2="436" stroke="currentColor" stroke-width="2.5"/>`).join('')}
${txt(500, 452, 'actin cytoskeleton', 15, 'middle')}
<g class="fig-accent">
<defs>${ARROW('arr-cb-ecm-b')}</defs>
<line x1="400" y1="118" x2="400" y2="400" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cb-ecm-b)"/>
${txt(386, 322, 'outside-in', 17, 'end', '700')}
${txt(386, 344, 'matrix cues → survival, shape,', 14, 'end')}
${txt(386, 362, 'migration, gene expression', 14, 'end')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cb-ecm-r')}</defs>
<line x1="600" y1="400" x2="600" y2="118" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cb-ecm-r)"/>
${txt(614, 322, 'inside-out', 17, 'start', '700')}
${txt(614, 344, 'the cell sets how tightly', 14)}
${txt(614, 362, 'its integrins grip the matrix', 14)}
<line x1="792" y1="150" x2="824" y2="182" stroke="currentColor" stroke-width="3"/>
<line x1="792" y1="182" x2="824" y2="150" stroke="currentColor" stroke-width="3"/>
<circle cx="788" cy="146" r="6" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="788" cy="186" r="6" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(810, 70, 'MMPs cut the matrix', 16, 'middle', '700')}
${txt(810, 90, 'wound healing · cancer invasion', 14, 'middle')}
</g>
</svg>`

export const mcatCellBiologyFigures: DeckFigurePlacement[] = [
  {
    at: 'Prokaryotes vs. Eukaryotes',
    mode: 'lead',
    figure: {
      svg: sizeSvg,
      alt: 'A logarithmic size ruler from 0.1 nm to 1 mm. An atom sits at 0.1 nm and glucose at 1 nm; proteins span about 5 to 10 nm; viruses 20 to 300 nm; prokaryotes 1 to 10 micrometres; eukaryotic cells 10 to 100 micrometres. Dashed lines mark the light-microscope limit near 200 nm (viruses need an electron microscope) and the naked-eye limit near 100 micrometres.',
      caption: 'Sizes on a log ruler: prokaryotes 1–10 µm, eukaryotic cells 10–100 µm — each tick is a factor of ten, and viruses sit below what a light microscope can resolve.',
    },
    blocks: ['- Prokaryote 1–10 µm, eukaryote 10–100 µm: a 10× step, like a virus (20–300 nm) inside a bacterium', '- Everything smaller than ~200 nm — viruses, ribosomes, proteins — is invisible to a light microscope'],
  },
  {
    at: 'The Endomembrane System',
    mode: 'lead',
    figure: {
      svg: coatsSvg,
      alt: 'Rough ER on the left, a three-cisterna Golgi (cis at top, trans at bottom) in the middle, a lysosome, an endosome and the plasma membrane on the right. A blue COPII-coated vesicle travels forward from the ER to the cis-Golgi; a red COPI-coated vesicle travels back from the Golgi to the ER. From the trans-Golgi a clathrin-coated vesicle carries M6P-tagged enzymes to the lysosome, and an uncoated secretory vesicle goes to the plasma membrane for exocytosis. A clathrin-coated pit at the plasma membrane buds inward to an endosome, which feeds the lysosome.',
      caption: 'Coats name directions: COPII forward from the ER, COPI back toward it, clathrin for the trans-Golgi → lysosome route and for endocytosis; the default secretory vesicle is uncoated.',
    },
    blocks: ['- COPII: ER → Golgi (forward)  ·  COPI: Golgi → ER (back)  ·  clathrin: TGN → lysosome (M6P) and endocytosis', '- Secretory proteins take the default route: trans-Golgi → secretory vesicle → fuses with the plasma membrane'],
  },
  {
    at: 'Membrane Potential',
    mode: 'lead',
    figure: {
      svg: nernstSvg,
      alt: 'Left: a cell with high potassium inside and high sodium outside, a potassium leak channel in the membrane, a blue arrow showing concentration pushing potassium out and a black arrow showing the negative inside pulling it back; minus signs line the inner face and plus signs the outer face; at E_K about −90 mV the two forces cancel. Right: the Nernst equation E = (61/z) log([out]/[in]) mV and a voltage ladder from +60 to −90 mV marking E_Na at +60 (red), the resting potential at −70 (bold) and E_K at −90 (blue), with a note that rest sits near E_K because the resting membrane is far more permeable to potassium.',
      caption: 'The resting potential as a tug-of-war on K⁺: diffusion out versus the negative inside pulling back, balanced at E_K ≈ −90 mV; rest (≈ −70 mV) sits near E_K because K⁺ leak dominates permeability.',
    },
    blocks: ['- Nernst: E = (61/z) log([out]/[in]) mV at 37 °C — E_K ≈ −90 mV, E_Na ≈ +60 mV', '- Rest (≈ −70 mV) lies near E_K because K⁺ leak channels make K⁺ the most permeant ion at rest'],
  },
  {
    at: 'Ploidy vs. DNA Content',
    mode: 'lead',
    figure: {
      svg: ploidySvg,
      alt: 'A graph of DNA per cell (1C, 2C, 4C) against time, first through a mitotic cycle and then through meiosis (illustrative). In the mitotic cycle the trace sits at 2C in G1, climbs to 4C during S, stays at 4C in G2 and drops back to 2C at mitosis while ploidy stays 2n with 46 chromosomes throughout. In meiosis the trace again climbs from 2C to 4C in S, drops to 2C at meiosis I when homologs separate (ploidy becomes 1n, 23 chromosomes), and drops to 1C at meiosis II when sister chromatids separate. The interval after meiosis I is highlighted: haploid (1n) but still 2C.',
      caption: 'Track n and C separately (illustrative): S phase doubles C but never n; meiosis I halves n, meiosis II halves C — so a cell can be haploid yet still carry 2C.',
    },
    blocks: ['- S phase: 2C → 4C, still 2n (46 chromosomes, 92 chromatids)  ·  mitosis: back to 2n, 2C', '- Meiosis I: 2n → 1n (homologs split, still 2C)  ·  meiosis II: 2C → 1C (sisters split) → gametes 1n, 1C'],
  },
  {
    at: 'Nitric Oxide (NO) Signaling',
    mode: 'lead',
    figure: {
      svg: noSvg,
      alt: 'Two cells side by side. In the endothelial cell NO synthase converts L-arginine to NO, a gas that diffuses straight through both membranes (dashed arrow) with no surface receptor and lives only seconds. In the vascular smooth muscle cell NO activates soluble guanylyl cyclase, which converts GTP to cGMP; cGMP activates PKG, which causes relaxation and vasodilation. PDE5 degrades cGMP to inactive 5′-GMP; sildenafil blocks PDE5 so cGMP stays up. A note says nitroglycerin releases NO and relaxes coronary vessels by the same pathway.',
      caption: 'NO skips the surface receptor: made from arginine by NO synthase, it diffuses into smooth muscle, activates soluble guanylyl cyclase, and cGMP → PKG relaxes the vessel; PDE5 ends the signal and sildenafil blocks PDE5.',
    },
    blocks: ['- Arginine → NO (NO synthase) → diffuses in → soluble guanylyl cyclase → cGMP ↑ → PKG → relaxation', '- PDE5 breaks down cGMP; sildenafil blocks PDE5 — nitroglycerin feeds NO into the same pathway (angina)'],
  },
  {
    at: 'Apoptosis vs. Necrosis',
    mode: 'replace-table',
    figure: {
      svg: deathSvg,
      alt: 'Two columns of three stages. Apoptosis (blue): a normal cell triggered by an internal signal or death receptor shrinks and blebs with condensed chromatin (needs ATP), then breaks into apoptotic bodies that a phagocyte eats, with no inflammation; its DNA runs as a 180-bp ladder on a gel. Necrosis (red): a cell hit by trauma, toxin or ischemia swells because its pumps fail without ATP, then its membrane ruptures and contents leak out, causing inflammation; its DNA runs as a random smear.',
      caption: 'Apoptosis shrinks, blebs and is eaten tidily (ATP-dependent, no inflammation); necrosis swells, bursts and inflames — and the DNA gel tells them apart: nucleosomal ladder versus smear.',
    },
    blocks: [
      '- **Apoptosis**: internal signals or death receptors; orderly shrinkage, blebbing, ATP required',
      '- Membrane stays intact → apoptotic bodies are phagocytosed → **no inflammation**',
      '- **Necrosis**: trauma, toxins, ischemia; swelling and lysis, no ATP needed → contents leak → **inflammation**',
      '- DNA: ~180 bp nucleosomal ladder (apoptosis) vs random smear (necrosis)',
    ],
  },
  {
    at: 'Cell Junctions',
    mode: 'lead',
    figure: {
      svg: junctionsSvg,
      alt: 'Five panels, each with two schematic cells. Tight junction: sealing strands stitch the apical ends of the cells together so nothing leaks between them (gut lining, blood–brain barrier). Adherens junction: a belt of cadherins across the gap linked to actin inside each cell (epithelia). Desmosome: dense plaques on each cell with cadherins across the gap and intermediate filaments anchored into the plaques (skin, cardiac muscle). Gap junction: connexon channels spanning both membranes with ions and cAMP passing in both directions (cardiac and smooth muscle). Hemidesmosome: one cell anchored by integrins and intermediate filaments to the basement membrane (epithelial base).',
      caption: 'Five junctions by job: seal (tight), hold cell to cell (adherens with actin, desmosome with intermediate filaments), talk (gap: connexons), and anchor to the basement membrane (hemidesmosome: integrins).',
    },
    blocks: ['- Seal: tight  ·  adhere: adherens (cadherins + actin), desmosome (cadherins + intermediate filaments)', '- Communicate: gap (connexins → connexon pore)  ·  anchor to basement membrane: hemidesmosome (integrins + IF)'],
  },
  {
    at: 'Epithelial Classifications',
    mode: 'replace-table',
    figure: {
      svg: epitheliaSvg,
      alt: 'A three-by-two grid of schematic epithelia on a basement membrane. Top row, single layers: simple squamous (flat cells: alveoli, capillaries, Bowman’s capsule), simple cuboidal (cube cells: kidney tubules, thyroid), simple columnar (tall cells with basal nuclei and a goblet cell: gut lining). Bottom row: stratified squamous (many layers flattening toward the surface: skin, esophagus, vagina), pseudostratified columnar (all cells touch the base but nuclei stagger, with cilia on top: trachea, with goblet cells), transitional (dome-shaped surface cells that flatten when the bladder fills).',
      caption: 'Name = layers + shape: simple (one layer, for exchange) or stratified (many, for protection) × squamous, cuboidal, columnar; pseudostratified only looks layered, transitional stretches.',
    },
    blocks: [
      '- **Simple** = one layer → diffusion / absorption; **stratified** = many layers → protection',
      '- Simple squamous: alveoli, capillaries  ·  cuboidal: kidney tubules  ·  columnar: gut (goblet cells)',
      '- Stratified squamous: skin, esophagus  ·  pseudostratified ciliated columnar: trachea',
      '- Transitional: bladder — dome cells flatten as it fills',
    ],
  },
  {
    at: 'Extracellular Matrix (ECM) Signaling',
    mode: 'lead',
    figure: {
      svg: ecmSvg,
      alt: 'Wavy collagen fibres of the extracellular matrix above a plasma membrane, with an αβ integrin spanning the membrane: its heads bind a fibre outside and its tails connect through adaptor proteins to actin filaments inside. A blue downward arrow labelled outside-in shows matrix cues controlling survival, shape, migration and gene expression; a red upward arrow labelled inside-out shows the cell setting how tightly its integrins grip the matrix. At the top right a scissors symbol marks matrix metalloproteinases cutting a fibre: wound healing, and the route cancer cells use to invade.',
      caption: 'Integrins are the two-way bolt between matrix and cytoskeleton: outside-in, the ECM instructs the cell; inside-out, the cell tunes its grip — and MMPs cut the matrix in wound healing and metastasis.',
    },
    blocks: ['- Integrin (αβ): ECM fibre outside → adaptors → actin inside; signals run both ways (outside-in, inside-out)', '- MMPs degrade the ECM — needed for wound healing, hijacked by cancer cells to invade and metastasise'],
  },
]
