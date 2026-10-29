import type { DeckFigurePlacement } from './index'

/**
 * Embryology & Development (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing is ours, from the concept: the first week as a strip of cells
 * ending in a blastocyst sunk into the endometrium, gastrulation as three disc
 * cross-sections, the germ-layer derivatives as three colour-coded columns with
 * the three classic traps drawn (adrenal, eye, gut tube), neurulation as plate
 * → folds → tube with the notochord beneath and crest cells leaving, the four
 * extraembryonic membranes nested around a bean-shaped embryo, a chorionic
 * villus bathed in maternal blood, fetal circulation as eight boxes with the
 * three shunts drawn as bypass arcs, a narrowing potency wedge with an iPSC
 * return arrow, and a morphogen gradient read as three stripes beside a binary
 * switch. No textbook, prep-company or AAMC figure was copied; anatomy is
 * schematic only. Curves that are not data say "illustrative"; no number
 * appears that the lesson does not state.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow's marker is defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-em-<figure>[-colour]).
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

type Anchor = 'start' | 'middle' | 'end'
/** One line of text; `bold` is the font-weight attribute value. */
const T = (x: number, y: number, fs: number, txt: string, anchor: Anchor = 'start', bold = '400') =>
  `<text x="${x}" y="${y}" font-size="${fs}" font-weight="${bold}" text-anchor="${anchor}" fill="currentColor">${txt}</text>`

/** A rounded box with one or two centred lines of text. */
const BOX = (x: number, y: number, w: number, h: number, l1: string, l2?: string, fs = 19, opacity = 0.12) => {
  const mid = y + h / 2
  const t1 = l2
    ? `${T(x + w / 2, mid - 4, fs, l1, 'middle', '700')}${T(x + w / 2, mid + fs - 1, fs - 2, l2, 'middle')}`
    : T(x + w / 2, mid + fs / 3, fs, l1, 'middle', '700')
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/>${t1}`
}

/** A plain cell: circle with a faint fill. */
const CELL = (cx: number, cy: number, r: number, sw = 2.5, op = 0.08) =>
  `<circle cx="${f(cx)}" cy="${f(cy)}" r="${r}" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="${sw}"/>`

/** The zona pellucida: a dashed ring (drawn inside a fig-muted group by the caller). */
const ZONA = (cx: number, cy: number, r: number) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/>`

/* 1 — The first week: zygote → cleavage → morula → blastocyst → implantation (lead, 1000×460) */
const WK_Y = 180
const WK_XS = [80, 205, 330, 455, 590, 740, 930]
const ring = (cx: number, cy: number, r: number, n: number, dot: number, start = 0) =>
  Array.from({ length: n }, (_, i) => {
    const [x, y] = POL(cx, cy, r, start + (360 * i) / n)
    return CELL(x, y, dot, 2, 0.12)
  }).join('')
const stage = (i: number, name: string, l1?: string, l2?: string) =>
  T(WK_XS[i], 262, 17, name, 'middle', '700') + (l1 ? T(WK_XS[i], 284, 14, l1, 'middle') : '') + (l2 ? T(WK_XS[i], 303, 14, l2, 'middle') : '')
const firstWeekSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-em-wk')}</defs>
<g class="fig-muted">
<defs>${ARROW('arr-em-wk-m')}</defs>
${[0, 1, 2, 3].map((i) => `<line x1="${WK_XS[i] + 52}" y1="${WK_Y}" x2="${WK_XS[i + 1] - 54}" y2="${WK_Y}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-em-wk-m)"/>`).join('')}
<line x1="${WK_XS[4] + 52}" y1="${WK_Y}" x2="${WK_XS[5] - 60}" y2="${WK_Y}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-em-wk-m)"/>
<line x1="${WK_XS[5] + 58}" y1="${WK_Y}" x2="${WK_XS[6] - 76}" y2="${WK_Y}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-em-wk-m)"/>
${ZONA(WK_XS[0], WK_Y, 48)}${ZONA(WK_XS[1], WK_Y, 48)}${ZONA(WK_XS[2], WK_Y, 48)}${ZONA(WK_XS[3], WK_Y, 48)}${ZONA(WK_XS[4], WK_Y, 48)}
${T(WK_XS[2], 122, 14, 'zona pellucida (dashed) stays on through the morula', 'middle')}
</g>
${CELL(WK_XS[0], WK_Y, 40)}
<circle cx="${WK_XS[0] - 11}" cy="${WK_Y - 5}" r="9" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<circle cx="${WK_XS[0] + 11}" cy="${WK_Y + 6}" r="9" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<ellipse cx="${WK_XS[1] - 19}" cy="${WK_Y}" rx="19" ry="38" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<ellipse cx="${WK_XS[1] + 19}" cy="${WK_Y}" rx="19" ry="38" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${CELL(WK_XS[2] - 19, WK_Y - 19, 19, 2.5, 0.1)}${CELL(WK_XS[2] + 19, WK_Y - 19, 19, 2.5, 0.1)}${CELL(WK_XS[2] - 19, WK_Y + 19, 19, 2.5, 0.1)}${CELL(WK_XS[2] + 19, WK_Y + 19, 19, 2.5, 0.1)}
${ring(WK_XS[3], WK_Y, 26, 6, 14, 30)}${CELL(WK_XS[3], WK_Y, 14, 2.5, 0.12)}
${ring(WK_XS[4], WK_Y, 33, 12, 8)}${ring(WK_XS[4], WK_Y, 17, 6, 8, 30)}${CELL(WK_XS[4], WK_Y, 8, 2, 0.12)}
<circle cx="${WK_XS[5]}" cy="${WK_Y}" r="52" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="9" stroke-opacity="0.55"/>
<g class="fig-accent">
<defs>${ARROW('arr-em-wk-b')}</defs>
${CELL(WK_XS[5] - 12, WK_Y - 36, 7, 2, 0.5)}${CELL(WK_XS[5] + 2, WK_Y - 38, 7, 2, 0.5)}${CELL(WK_XS[5] - 5, WK_Y - 25, 7, 2, 0.5)}${CELL(WK_XS[5] + 9, WK_Y - 27, 7, 2, 0.5)}${CELL(WK_XS[5] - 16, WK_Y - 23, 7, 2, 0.5)}
<line x1="${WK_XS[5] - 4}" y1="${WK_Y - 46}" x2="${WK_XS[5] - 4}" y2="112" stroke="currentColor" stroke-width="1.5"/>
${T(WK_XS[5] - 4, 104, 14, 'inner cell mass → embryo proper (+ amnion, yolk sac)', 'middle', '700')}
</g>
${T(WK_XS[5], WK_Y + 12, 13, 'blastocoel', 'middle')}
<g class="fig-muted">
<rect x="862" y="118" width="138" height="118" fill="currentColor" fill-opacity="0.16"/>
<path d="M862 118 q 17 -8 34 0 t 34 0 t 34 0 t 36 0" fill="none" stroke="currentColor" stroke-width="2"/>
${T(931, 228, 13, 'endometrium', 'middle')}
</g>
<circle cx="${WK_XS[6]}" cy="160" r="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="8" stroke-opacity="0.55"/>
<g class="fig-accent">${CELL(WK_XS[6] - 8, 134, 6, 2, 0.5)}${CELL(WK_XS[6] + 4, 132, 6, 2, 0.5)}${CELL(WK_XS[6] - 2, 143, 6, 2, 0.5)}</g>
${stage(0, 'Zygote', 'two pronuclei fuse', 'in the ampulla')}
${stage(1, '2-cell', 'cleavage: mitosis,', 'no growth')}
${stage(2, '4-cell', 'same total size')}
${stage(3, '8-cell', 'blastomeres shrink,', 'N:C ratio rises')}
${stage(4, 'Morula', 'solid ball of cells', 'still inside the zona')}
${stage(5, 'Blastocyst', 'fluid cavity appears;', 'hatches from the zona')}
${stage(6, 'Implantation', 'trophoblast burrows', 'into the endometrium')}
<line x1="40" y1="338" x2="985" y2="338" stroke="currentColor" stroke-width="2" marker-end="url(#arr-em-wk)"/>
${[0, 4, 5, 6].map((i) => `<line x1="${WK_XS[i]}" y1="332" x2="${WK_XS[i]}" y2="344" stroke="currentColor" stroke-width="2"/>`).join('')}
${T(WK_XS[0], 362, 14, 'day 0 · fertilization', 'middle')}
${T(WK_XS[4], 362, 14, '~day 3–4', 'middle')}
${T(WK_XS[5], 362, 14, '~day 5', 'middle')}
${T(WK_XS[6], 362, 14, '~1 week (days 6–10)', 'middle')}
${T(500, 400, 16, 'Trophoblast (thick outer ring) → chorion + fetal placenta and secretes hCG; inner cell mass (blue) → the embryo', 'middle')}
<g class="fig-accent-2">${T(500, 428, 16, 'hCG rescues the corpus luteum → progesterone keeps the endometrium — and is the hormone pregnancy tests detect', 'middle', '700')}</g>
<g class="fig-muted">${T(500, 452, 14, 'early blastomeres are indeterminate: separate them and each can still form a whole embryo (monozygotic twinning)', 'middle')}</g>
</svg>`

/* 2 — Gastrulation: bilaminar disc → primitive streak ingression → trilaminar disc (lead, 1000×460) */
const LAYER = (x: number, y: number, w: number, h: number, label: string, cls: string, op: number, fs = 16) =>
  `<g class="${cls}"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="2"/>${T(x + w / 2, y + h / 2 + fs / 3, fs, label, 'middle', '700')}</g>`
const gastrulationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-em-gas')}</defs>
${T(180, 44, 19, 'Bilaminar disc', 'middle', '700')}
${T(500, 44, 19, 'Primitive streak: ingression', 'middle', '700')}
${T(820, 44, 19, 'Trilaminar disc', 'middle', '700')}
<g class="fig-muted">
<defs>${ARROW('arr-em-gas-m')}</defs>
${T(180, 96, 14, 'amniotic cavity (above)', 'middle')}
${T(180, 236, 14, 'yolk sac (below)', 'middle')}
<line x1="324" y1="162" x2="358" y2="162" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-gas-m)"/>
<line x1="644" y1="162" x2="678" y2="162" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-gas-m)"/>
</g>
${LAYER(60, 120, 240, 46, 'epiblast', '', 0.18)}
${LAYER(60, 166, 240, 34, 'hypoblast', 'fig-muted', 0.3, 14)}
<path d="M380 120 L478 120 L500 150 L522 120 L620 120 L620 166 L380 166 Z" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
${T(420, 149, 15, 'epiblast', 'middle', '700')}
${T(580, 149, 15, 'epiblast', 'middle', '700')}
<g class="fig-muted">
<rect x="380" y="186" width="56" height="30" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<rect x="564" y="186" width="56" height="30" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
${T(408, 206, 12, 'hypoblast', 'middle')}${T(592, 206, 12, 'hypoblast', 'middle')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-em-gas-b')}</defs>
<line x1="410" y1="108" x2="482" y2="108" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-gas-b)"/>
<line x1="590" y1="108" x2="518" y2="108" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-gas-b)"/>
<line x1="500" y1="118" x2="500" y2="176" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-em-gas-b)"/>
<line x1="492" y1="176" x2="446" y2="176" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-gas-b)"/>
<line x1="508" y1="176" x2="554" y2="176" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-gas-b)"/>
${T(500, 98, 14, 'epiblast cells converge', 'middle', '700')}
${T(500, 268, 14, '2nd wave spreads between the layers → mesoderm', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-em-gas-r')}</defs>
<line x1="488" y1="202" x2="440" y2="202" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-gas-r)"/>
<line x1="512" y1="202" x2="560" y2="202" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-gas-r)"/>
${T(500, 246, 14, '1st wave pushes the hypoblast aside → endoderm', 'middle', '700')}
</g>
${T(500, 290, 14, 'cells left on the surface → ectoderm', 'middle', '700')}
${LAYER(700, 120, 240, 40, 'ectoderm — outer', '', 0.18)}
${LAYER(700, 160, 240, 40, 'mesoderm — middle', 'fig-accent', 0.25)}
${LAYER(700, 200, 240, 40, 'endoderm — inner lining', 'fig-accent-2', 0.25)}
${T(820, 268, 14, 'the notochord forms in midline', 'middle')}
${T(820, 288, 14, 'mesoderm → induces the neural plate', 'middle')}
${T(500, 348, 16, 'The streak is a groove on the epiblast that sets the body axes; ALL three layers come from epiblast cells', 'middle', '700')}
<g class="fig-muted">${T(500, 376, 15, 'bilaminar (epiblast + hypoblast) → trilaminar (ectoderm, mesoderm, endoderm); the hypoblast is displaced, not converted', 'middle')}</g>
<g class="fig-accent-2">${T(500, 412, 15, 'same colours on the next slide: ectoderm = “attracto-derm”, mesoderm = “means-oderm”, endoderm = “endernal linings”', 'middle', '700')}</g>
<g class="fig-muted">${T(500, 440, 14, 'schematic cross-sections of the embryonic disc; sizes not to scale', 'middle')}</g>
</svg>`

/* 3 — Germ-layer derivatives as three columns, with the three classic traps drawn (replace-table, 560×440) */
const COL = (x: number, title: string, hook: string, items: string[], cls: string, op: number) =>
  `<g class="${cls}"><rect x="${x}" y="16" width="160" height="42" rx="10" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="2.5"/>${T(x + 80, 44, 18, title, 'middle', '700')}</g>` +
  `<g class="fig-muted">${T(x + 80, 78, 13, hook, 'middle')}</g>` +
  items.map((it, i) => T(x + 80, 104 + i * 22, 14, it, 'middle')).join('')
const germLayerSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${COL(16, 'Ectoderm', '“attracto-derm”', ['epidermis, hair, nails', 'lens of the eye', 'inner ear', 'ALL nervous tissue', 'adrenal MEDULLA (crest)'], '', 0.18)}
${COL(200, 'Mesoderm', '“means-oderm” (middle)', ['muscle, bone, connective', 'heart, vessels, blood', 'kidneys, gonads', 'dermis', 'adrenal CORTEX'], 'fig-accent', 0.25)}
${COL(384, 'Endoderm', '“endernal linings”', ['GI + airway LININGS', 'liver', 'pancreas', 'thyroid', 'bladder lining'], 'fig-accent-2', 0.25)}
<g class="fig-muted"><line x1="16" y1="214" x2="544" y2="214" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/></g>
${T(96, 242, 14, 'one organ, two layers', 'middle', '700')}
<g class="fig-accent"><ellipse cx="96" cy="296" rx="54" ry="34" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/></g>
<ellipse cx="96" cy="296" rx="24" ry="14" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent">${T(96, 350, 13, 'cortex = mesoderm', 'middle', '700')}</g>
${T(96, 368, 13, 'medulla = ectoderm (crest)', 'middle', '700')}
${T(280, 242, 14, 'eye: two ectoderms', 'middle', '700')}
<circle cx="292" cy="296" r="34" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<path d="M262 276 A 34 34 0 0 1 262 316" fill="none" stroke="currentColor" stroke-width="7" stroke-opacity="0.55"/>
<g class="fig-accent-2"><ellipse cx="266" cy="296" rx="7" ry="16" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/></g>
<g class="fig-accent-2">${T(280, 350, 13, 'lens = SURFACE ectoderm', 'middle', '700')}</g>
${T(280, 368, 13, 'retina = neuroectoderm', 'middle', '700')}
${T(464, 242, 14, 'tubes: lined vs wrapped', 'middle', '700')}
<g class="fig-accent"><circle cx="464" cy="296" r="34" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-accent-2"><circle cx="464" cy="296" r="19" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/></g>
<circle cx="464" cy="296" r="9" class="fig-bg" stroke="currentColor" stroke-width="1.5"/>
<g class="fig-accent-2">${T(464, 350, 13, 'lining = endoderm', 'middle', '700')}</g>
<g class="fig-accent">${T(464, 368, 13, 'muscle wrap = mesoderm', 'middle', '700')}</g>
<g class="fig-muted">
${T(280, 402, 13, 'liver and pancreas bud from the gut tube → endoderm', 'middle')}
${T(280, 422, 13, 'facial bones and cartilage = neural crest (ectoderm), not mesoderm', 'middle')}
</g>
</svg>`

/* 4 — Neurulation: plate → folds → tube, notochord beneath, crest cells leaving (lead, 1000×460) */
const SURF = (x: number) => `<rect x="${x}" y="150" width="240" height="22" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>`
const NOTO = (cx: number, cy: number, r: number) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/>`
const neurulationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(170, 44, 18, 'Neural plate', 'middle', '700')}
${T(500, 44, 18, 'Neural folds and groove', 'middle', '700')}
${T(830, 44, 18, 'Neural tube + neural crest', 'middle', '700')}
<g class="fig-muted">
<defs>${ARROW('arr-em-neu-m')}</defs>
${T(170, 72, 14, 'notochord signals the ectoderm above it', 'middle')}
${T(500, 72, 14, 'edges rise, meet and fuse at the midline', 'middle')}
<line x1="150" y1="210" x2="150" y2="186" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-em-neu-m)"/>
<line x1="170" y1="210" x2="170" y2="186" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-em-neu-m)"/>
<line x1="190" y1="210" x2="190" y2="186" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-em-neu-m)"/>
${T(214, 204, 14, 'induces', 'start')}
${T(410, 190, 13, 'surface ectoderm', 'middle')}
<line x1="324" y1="200" x2="358" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-neu-m)"/>
<line x1="654" y1="200" x2="688" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-neu-m)"/>
</g>
${SURF(50)}
<g class="fig-accent"><rect x="110" y="142" width="120" height="38" rx="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>${T(170, 167, 14, 'neural plate', 'middle', '700')}</g>
${NOTO(170, 232, 18)}
${T(170, 272, 15, 'notochord', 'middle', '700')}
${T(170, 290, 13, '(mesoderm)', 'middle')}
<rect x="380" y="150" width="60" height="22" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<rect x="560" y="150" width="60" height="22" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent"><path d="M440 160 C 448 100, 476 96, 488 120 C 495 136, 505 136, 512 120 C 524 96, 552 100, 560 160" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></g>
${T(500, 184, 13, 'groove', 'middle')}
${NOTO(500, 232, 18)}
${T(500, 272, 15, 'notochord', 'middle', '700')}
${SURF(710)}
${T(830, 143, 13, 'surface ectoderm closes over', 'middle')}
<g class="fig-accent">
<defs>${ARROW('arr-em-neu-b')}</defs>
<circle cx="830" cy="236" r="32" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="3"/>
<circle cx="830" cy="236" r="11" class="fig-bg" stroke="currentColor" stroke-width="2"/>
<line x1="830" y1="289" x2="830" y2="272" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-neu-b)"/>
${T(846, 286, 13, 'Shh → floor plate,', 'start', '700')}${T(846, 302, 13, 'ventral motor neurons', 'start')}
<line x1="830" y1="176" x2="830" y2="200" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-neu-b)"/>
${T(814, 190, 13, 'BMP → roof plate,', 'end', '700')}${T(814, 206, 13, 'dorsal sensory', 'end')}
</g>
${NOTO(830, 306, 15)}
${T(830, 340, 15, 'notochord', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-em-neu-r')}</defs>
<circle cx="803" cy="212" r="6" fill="currentColor"/><circle cx="857" cy="212" r="6" fill="currentColor"/>
<line x1="796" y1="218" x2="762" y2="246" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-em-neu-r)"/>
<line x1="864" y1="218" x2="898" y2="246" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-em-neu-r)"/>
<circle cx="752" cy="258" r="5" fill="currentColor" fill-opacity="0.6"/><circle cx="908" cy="258" r="5" fill="currentColor" fill-opacity="0.6"/>
${T(830, 72, 14, 'crest cells break off the folds and migrate away', 'middle', '700')}
</g>
${T(500, 386, 15, 'Tube → CNS (brain + spinal cord). Failed closure: spina bifida (caudal), anencephaly (cranial) — maternal folate lowers the risk', 'middle', '700')}
<g class="fig-accent-2">${T(500, 414, 15, 'Neural crest (“4th germ layer”) → PNS ganglia, Schwann cells, melanocytes, adrenal medulla chromaffin cells, facial bones', 'middle', '700')}</g>
<g class="fig-muted">${T(500, 442, 14, 'schematic cross-sections; the plate is ectoderm that the mesodermal notochord has induced — induction, not lineage', 'middle')}</g>
</svg>`

/* 5 — The four extraembryonic membranes nested around the embryo (replace-table, 560×440) */
const MB_CX = 212
const MB_CY = 218
const MB_R = 160
const villi = [214, 232, 250, 268, 286, 304, 322].map((deg) => {
  const [x, y] = POL(MB_CX, MB_CY, MB_R + 9, deg)
  return `<circle cx="${x}" cy="${y}" r="10" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>`
}).join('')
const membranesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted"><rect x="0" y="40" width="40" height="350" fill="currentColor" fill-opacity="0.15"/></g>
<circle cx="${MB_CX}" cy="${MB_CY}" r="${MB_R}" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
${villi}
<g class="fig-muted">
<line x1="246" y1="214" x2="${POL(MB_CX, MB_CY, MB_R, 120)[0]}" y2="${POL(MB_CX, MB_CY, MB_R, 120)[1]}" stroke="currentColor" stroke-width="12" stroke-opacity="0.35" stroke-linecap="round"/>
<ellipse cx="292" cy="236" rx="28" ry="11" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
</g>
<g class="fig-accent"><ellipse cx="${MB_CX}" cy="172" rx="92" ry="66" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-accent-2"><circle cx="${MB_CX}" cy="262" r="28" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2.5"/></g>
<path d="M196 158 C 240 146, 254 196, 222 212 C 204 221, 190 208, 196 198 C 200 192, 208 194, 208 198" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
${T(MB_CX, 138, 13, 'embryo', 'middle', '700')}
<g class="fig-muted">
<line x1="396" y1="74" x2="298" y2="124" stroke="currentColor" stroke-width="1.5"/>
<line x1="396" y1="146" x2="${POL(MB_CX, MB_CY, MB_R, 62)[0]}" y2="${POL(MB_CX, MB_CY, MB_R, 62)[1]}" stroke="currentColor" stroke-width="1.5"/>
<line x1="396" y1="240" x2="322" y2="238" stroke="currentColor" stroke-width="1.5"/>
<line x1="396" y1="330" x2="238" y2="274" stroke="currentColor" stroke-width="1.5"/>
<line x1="396" y1="388" x2="330" y2="264" stroke="currentColor" stroke-width="1.5"/>
</g>
<g class="fig-accent">${T(400, 70, 16, 'Amnion', 'start', '700')}</g>
${T(400, 88, 13, 'fluid cushion; sampled', 'start')}
${T(400, 104, 13, 'in amniocentesis', 'start')}
${T(400, 142, 16, 'Chorion', 'start', '700')}
${T(400, 160, 13, 'outermost; its villi =', 'start')}
${T(400, 176, 13, 'fetal placenta; makes hCG', 'start')}
${T(400, 236, 16, 'Allantois', 'start', '700')}
${T(400, 254, 13, 'early waste handling;', 'start')}
${T(400, 270, 13, 'vessels → umbilical', 'start')}
<g class="fig-accent-2">${T(400, 326, 16, 'Yolk sac', 'start', '700')}</g>
${T(400, 344, 13, 'FIRST blood cells;', 'start')}
${T(400, 360, 13, 'primordial germ cells', 'start')}
<g class="fig-muted">${T(400, 384, 13, 'connecting stalk →', 'start')}${T(400, 400, 13, 'umbilical cord', 'start')}</g>
<g class="fig-muted">${T(280, 419, 13, 'bumps on the left = chorionic villi facing the maternal endometrium (shaded strip)', 'middle')}
${T(280, 435, 13, 'amnion, yolk sac and allantois all sit inside the chorion (schematic)', 'middle')}</g>
</svg>`

/* 6 — A chorionic villus bathed in maternal blood: exchange without mixing (lead, 1000×460) */
const placentaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(300, 38, 18, 'One chorionic villus — the exchange surface', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-em-pl-r')}</defs>
<rect x="40" y="56" width="520" height="254" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
${T(130, 82, 15, 'maternal blood', 'middle', '700')}${T(130, 100, 13, '(intervillous space)', 'middle')}
<line x1="350" y1="200" x2="430" y2="200" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-em-pl-r)"/>
${T(480, 188, 14, 'CO₂, wastes', 'middle', '700')}${T(480, 206, 13, 'out to mother', 'middle')}
</g>
<path d="M216 310 L216 150 Q216 104 300 104 Q384 104 384 150 L384 310" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3.5"/>
${T(300, 134, 13, 'villus wall', 'middle', '700')}
${T(300, 150, 12, '(cell layers)', 'middle')}
<g class="fig-accent">
<defs>${ARROW('arr-em-pl-b')}</defs>
<path d="M258 310 L258 178 Q300 140 342 178 L342 310" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
<line x1="150" y1="200" x2="246" y2="200" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-em-pl-b)"/>
${T(120, 182, 14, 'O₂, glucose,', 'middle', '700')}${T(120, 200, 14, 'maternal IgG', 'middle', '700')}${T(120, 218, 13, 'in to fetus', 'middle')}
${T(300, 262, 13, 'fetal', 'middle', '700')}${T(300, 278, 13, 'capillary', 'middle', '700')}
</g>
<g class="fig-muted">${T(258, 338, 13, 'from fetus', 'middle')}${T(342, 338, 13, 'to fetus', 'middle')}</g>
<g class="fig-accent-2">${T(300, 368, 15, 'fetal blood stays inside the villus, maternal blood around it — the two NEVER mix', 'middle', '700')}</g>
${T(300, 394, 14, 'exchange is by diffusion (plus carriers) across the villus wall', 'middle')}
${T(300, 418, 14, 'ONE umbilical vein: oxygenated, placenta → fetus', 'middle', '700')}
${T(300, 440, 14, 'TWO umbilical arteries: deoxygenated, fetus → placenta', 'middle', '700')}
<rect x="610" y="60" width="370" height="98" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${T(795, 90, 18, '1 · Exchange', 'middle', '700')}
${T(795, 116, 14, 'O₂, nutrients in · CO₂, wastes out', 'middle')}
${T(795, 138, 14, 'across the chorionic villi, no mixing', 'middle')}
<rect x="610" y="178" width="370" height="98" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${T(795, 208, 18, '2 · Endocrine', 'middle', '700')}
${T(795, 234, 14, 'hCG (1st trimester) keeps the corpus luteum', 'middle')}
${T(795, 256, 14, 'then placental progesterone + estrogen take over', 'middle')}
<rect x="610" y="296" width="370" height="98" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${T(795, 326, 18, '3 · Immunity', 'middle', '700')}
${T(795, 352, 14, 'maternal IgG crosses — the only antibody class', 'middle')}
${T(795, 374, 14, 'passive immunity for the newborn', 'middle')}
<g class="fig-muted">${T(795, 420, 13, 'schematic — one villus of many; vessels named by direction', 'middle')}${T(795, 438, 13, 'from the fetal heart, not by oxygen content', 'middle')}</g>
</svg>`

/* 7 — Fetal circulation as eight boxes with the three shunts drawn as bypasses (lead, 1000×460) */
const FC_XS = [20, 145, 269, 394, 518, 643, 767, 892]
const FC_W = 88
const FC_Y = 200
const FC_H = 56
const fcCx = (i: number) => FC_XS[i] + FC_W / 2
const fcGap = (i: number) => (FC_XS[i] + FC_W + FC_XS[i + 1]) / 2
const FC_NAMES: [string, string?][] = [['Placenta'], ['Liver'], ['Right', 'atrium'], ['Right', 'ventricle'], ['Lungs'], ['Left', 'atrium'], ['Left', 'ventricle'], ['Body']]
const FC_VESSELS = ['umbilical vein', 'IVC', '', 'pulm. artery', 'pulm. veins', '', 'aorta']
const shuntsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-em-fc')}</defs>
${FC_NAMES.map(([a, b], i) => BOX(FC_XS[i], FC_Y, FC_W, FC_H, a, b, 16)).join('')}
${FC_XS.slice(0, 7).map((x, i) => `<line x1="${x + FC_W + 2}" y1="${FC_Y + FC_H / 2}" x2="${FC_XS[i + 1] - 3}" y2="${FC_Y + FC_H / 2}" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-fc)"/>`).join('')}
<g class="fig-muted">${FC_VESSELS.map((v, i) => (v ? T(fcGap(i), 190, 12, v, 'middle') : '')).join('')}
${T(fcCx(0) + 12, 274, 12, 'leaves O₂-rich', 'start')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-em-fc-b')}</defs>
<path d="M${fcCx(0) + 20} ${FC_Y} C ${fcCx(0) + 20} 120, ${fcCx(2) - 16} 120, ${fcCx(2) - 16} ${FC_Y - 2}" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-em-fc-b)"/>
${T(fcCx(1), 112, 14, 'ductus venosus', 'middle', '700')}${T(fcCx(1), 129, 13, 'skips the liver', 'middle')}
<path d="M${fcCx(2) + 16} ${FC_Y} C ${fcCx(2) + 16} 56, ${fcCx(5)} 56, ${fcCx(5)} ${FC_Y - 2}" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-em-fc-b)"/>
${T(fcCx(4) - 14, 66, 14, 'foramen ovale: right atrium → left atrium', 'middle', '700')}${T(fcCx(4) - 14, 83, 13, 'skips the right ventricle and the lungs', 'middle')}
<path d="M${fcGap(3)} ${FC_Y + FC_H / 2 + 10} C ${fcGap(3)} 340, ${fcGap(6)} 340, ${fcGap(6)} ${FC_Y + FC_H / 2 + 10}" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-em-fc-b)"/>
${T((fcGap(3) + fcGap(6)) / 2, 336, 14, 'ductus arteriosus: pulmonary artery → aorta', 'middle', '700')}${T((fcGap(3) + fcGap(6)) / 2, 353, 13, 'skips the lungs', 'middle')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-em-fc-m')}</defs>
<path d="M${fcCx(7)} ${FC_Y + FC_H} L${fcCx(7)} 386 L${fcCx(0)} 386 L${fcCx(0)} ${FC_Y + FC_H + 3}" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-em-fc-m)"/>
${T(500, 378, 14, 'two umbilical arteries — deoxygenated blood back to the placenta', 'middle')}
</g>
${T(500, 40, 16, 'Fetal circulation: fluid-filled lungs and a bypassable liver → three shunts reroute the flow', 'middle', '700')}
<g class="fig-accent-2">
${T(500, 420, 15, 'At birth: first breath → lung resistance ↓, left-atrial pressure > right → the foramen ovale flap is pressed shut', 'middle', '700')}
${T(500, 444, 15, 'O₂ ↑ + prostaglandins ↓ → the ductus arteriosus constricts · clamping the cord ends flow through the ductus venosus', 'middle', '700')}
</g>
</svg>`

/* 8 — The potency hierarchy as a narrowing wedge, with the iPSC way back (lead, 1000×460) */
const SMALL = (x: number, y: number, w: number, label: string, cls = '', op = 0.12) =>
  `<g class="${cls}"><rect x="${x}" y="${y}" width="${w}" height="34" rx="8" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="2"/>${T(x + w / 2, y + 22, 13, label, 'middle', '700')}</g>`
const FAN = (x0: number, y0: number, targets: number[], yT: number) => targets.map((tx) => `<line x1="${x0}" y1="${y0}" x2="${tx}" y2="${yT}" stroke="currentColor" stroke-width="2"/>`).join('')
const potencySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<polygon points="40,126 960,214 960,246 40,334" fill="currentColor" fill-opacity="0.1"/>
${T(610, 302, 15, 'potency only narrows in normal development →', 'middle', '700')}
</g>
${FAN(155, 196, [115, 230], 106)}
${SMALL(70, 72, 90, 'embryo')}${SMALL(170, 72, 120, 'trophoblast')}
<g class="fig-muted">${T(230, 62, 12, '→ placenta', 'middle')}</g>
${BOX(60, 196, 190, 64, 'Totipotent', 'zygote · earliest blastomeres', 18)}
${FAN(395, 196, [324, 386, 448], 106)}
${SMALL(296, 72, 56, 'ecto', 'fig-accent', 0.2)}${SMALL(358, 72, 56, 'meso', 'fig-accent', 0.2)}${SMALL(420, 72, 56, 'endo', 'fig-accent', 0.2)}
<g class="fig-accent-2">
<defs>${BAR('bar-em-pot-r')}${ARROW('arr-em-pot-r')}</defs>
<line x1="395" y1="196" x2="500" y2="112" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#bar-em-pot-r)"/>
${SMALL(482, 72, 90, 'trophoblast', 'fig-accent-2', 0.12)}
<line x1="486" y1="76" x2="568" y2="102" stroke="currentColor" stroke-width="2.5"/>
${T(527, 62, 12, 'cannot make it', 'middle', '700')}
<path d="M860 262 C 860 420, 395 420, 395 262" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="9 6" marker-end="url(#arr-em-pot-r)"/>
${T(628, 392, 15, 'iPSC: an adult somatic cell reprogrammed with transcription factors → pluripotent again', 'middle', '700')}
</g>
${BOX(300, 196, 190, 64, 'Pluripotent', 'inner cell mass · ES cells', 18)}
${FAN(630, 196, [606, 664, 722], 106)}
${SMALL(580, 72, 52, 'RBC')}${SMALL(638, 72, 52, 'platelet')}${SMALL(696, 72, 52, 'WBC')}
<g class="fig-muted">${T(664, 62, 12, 'one tissue family (blood)', 'middle')}</g>
${BOX(540, 196, 180, 64, 'Multipotent', 'adult stem cells, e.g. HSC', 18)}
${FAN(870, 196, [870], 106)}
${SMALL(815, 72, 110, 'one cell type')}
${BOX(780, 196, 180, 64, 'Differentiated', 'specialized phenotype', 18)}
${T(500, 428, 15, 'ES cells make all three germ layers but NOT trophoblast → pluripotent, never totipotent (the favourite trap)', 'middle', '700')}
<g class="fig-muted">${T(500, 452, 14, 'differentiation changes gene EXPRESSION, not gene content — which is why reprogramming is possible at all', 'middle')}</g>
</svg>`

/* 9 — A morphogen gradient read as three stripes, beside a binary switch (lead, 1000×460, illustrative) */
const MG_X0 = 80
const MG_X1 = 560
const MG_Y0 = 300
const mgC = (x: number) => Math.exp(-(x - MG_X0) / 160)
const mgY = (c: number) => f(MG_Y0 - 210 * c)
const mgPts = Array.from({ length: 97 }, (_, i) => {
  const x = MG_X0 + ((MG_X1 - MG_X0) * i) / 96
  return `${f(x)},${mgY(mgC(x))}`
}).join(' ')
const T1 = 0.55
const T2 = 0.22
const X1 = f(MG_X0 - 160 * Math.log(T1))
const X2 = f(MG_X0 - 160 * Math.log(T2))
const morphogenSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-em-mg')}</defs>
${T(320, 40, 18, 'One gradient, several thresholds, several fates', 'middle', '700')}
<line x1="${MG_X0}" y1="${MG_Y0}" x2="${MG_X1 + 20}" y2="${MG_Y0}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-em-mg)"/>
<line x1="${MG_X0}" y1="${MG_Y0}" x2="${MG_X0}" y2="60" stroke="currentColor" stroke-width="2" marker-end="url(#arr-em-mg)"/>
${T(MG_X0 + 12, 68, 14, '[morphogen]', 'start')}
<g class="fig-muted">
<line x1="${MG_X0}" y1="${mgY(T1)}" x2="${MG_X1}" y2="${mgY(T1)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="${MG_X0}" y1="${mgY(T2)}" x2="${MG_X1}" y2="${mgY(T2)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
${T(MG_X1 + 6, mgY(T1) + 5, 13, 'threshold 1', 'start')}
${T(MG_X1 + 6, mgY(T2) + 5, 13, 'threshold 2', 'start')}
<line x1="${X1}" y1="${mgY(T1)}" x2="${X1}" y2="318" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="${X2}" y1="${mgY(T2)}" x2="${X2}" y2="318" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
</g>
<g class="fig-accent">
<polyline points="${mgPts}" fill="none" stroke="currentColor" stroke-width="4"/>
<circle cx="${MG_X0}" cy="${mgY(1)}" r="9" fill="currentColor"/>
${T(MG_X0 + 16, mgY(1) - 2, 14, 'source cell secretes it', 'start', '700')}
</g>
<g class="fig-accent-2"><rect x="${MG_X0}" y="318" width="${f(X1 - MG_X0)}" height="40" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>${T((MG_X0 + X1) / 2, 344, 14, 'fate A', 'middle', '700')}</g>
<g class="fig-accent"><rect x="${X1}" y="318" width="${f(X2 - X1)}" height="40" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/>${T((X1 + X2) / 2, 344, 14, 'fate B', 'middle', '700')}</g>
<rect x="${X2}" y="318" width="${f(MG_X1 - X2)}" height="40" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/>${T((X2 + MG_X1) / 2, 344, 14, 'fate C', 'middle', '700')}
<g class="fig-muted">
${T((MG_X0 + X1) / 2, 378, 13, 'high', 'middle')}${T((X1 + X2) / 2, 378, 13, 'medium', 'middle')}${T((X2 + MG_X1) / 2, 378, 13, 'low concentration', 'middle')}
${T(320, 402, 14, 'distance from the source →', 'middle')}
</g>
${T(810, 40, 18, 'A binary on/off signal → two fates only', 'middle', '700')}
<line x1="660" y1="240" x2="980" y2="240" stroke="currentColor" stroke-width="2" marker-end="url(#arr-em-mg)"/>
<line x1="660" y1="240" x2="660" y2="100" stroke="currentColor" stroke-width="2" marker-end="url(#arr-em-mg)"/>
<polyline points="660,140 810,140 810,232 960,232" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
${T(735, 130, 13, 'on', 'middle')}${T(885, 224, 13, 'off', 'middle')}
<g class="fig-accent-2"><rect x="660" y="256" width="150" height="36" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>${T(735, 280, 14, 'fate A', 'middle', '700')}</g>
<rect x="810" y="256" width="150" height="36" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/>${T(885, 280, 14, 'fate B', 'middle', '700')}
<g class="fig-accent">${T(810, 336, 15, 'Shh (notochord): ventral neural tube, limb', 'middle', '700')}</g>
${T(810, 360, 15, 'BMPs (surface ectoderm): dorsal pattern', 'middle', '700')}
<g class="fig-muted">${T(810, 388, 13, 'responders must be competent (have the receptor)', 'middle')}</g>
<g class="fig-muted">${T(500, 440, 14, 'illustrative gradient — a “French flag” read-out: one diffusible signal, concentration thresholds, discrete stripes of fate', 'middle')}</g>
</svg>`

export const mcatEmbryologyFigures: DeckFigurePlacement[] = [
  {
    at: 'Morula → Blastocyst → Implantation',
    mode: 'lead',
    figure: {
      svg: firstWeekSvg,
      alt:
        'The first week drawn as a row of seven stages above a timeline. Zygote (day 0, fertilization in the ampulla) with two pronuclei inside a dashed zona pellucida; then 2-cell, 4-cell and 8-cell embryos all the same overall size inside the same zona, with the cells getting smaller (cleavage: mitosis with no growth, N:C ratio rises); a morula, a solid ball of many small cells still inside the zona at about day 3-4; a blastocyst at about day 5 with a thick outer trophoblast ring, a fluid blastocoel and a blue inner cell mass cluster at one pole, labelled inner cell mass to embryo proper (plus amnion and yolk sac); and implantation at about one week (days 6-10), the hatched blastocyst sunk into a shaded endometrium with the trophoblast burrowing in. Footer: the trophoblast becomes chorion and fetal placenta and secretes hCG, which rescues the corpus luteum so progesterone keeps the endometrium (the pregnancy-test hormone); early blastomeres are indeterminate, so separating them can give monozygotic twins.',
      caption: 'Fertilization to implantation in one strip: same-sized embryo, more and smaller cells, then two lineages (trophoblast vs inner cell mass) and a burrow into the endometrium.',
    },
    blocks: [
      '- **Trophoblast** → chorion, fetal placenta, **hCG**; **inner cell mass** → embryo proper (+ amnion, yolk sac)',
      '- Cleavage = mitosis with **no growth** (blastomeres shrink, N:C ↑); implantation ≈ **1 week**; hCG rescues the corpus luteum',
    ],
  },
  {
    at: 'Gastrulation: From Disc to Three Layers',
    mode: 'lead',
    figure: {
      svg: gastrulationSvg,
      alt:
        'Three schematic cross-sections of the embryonic disc. Left, bilaminar disc: a thick epiblast band over a thinner grey hypoblast band, amniotic cavity above and yolk sac below. Middle, primitive streak and ingression: the epiblast band has a groove in the midline; blue arrows show epiblast cells converging on the streak and diving down through it, then spreading sideways between the layers; red arrows at the hypoblast level push the hypoblast aside. Labels: first wave pushes the hypoblast aside to become endoderm; second wave spreads between the layers to become mesoderm; cells left on the surface become ectoderm. Right, trilaminar disc: three stacked bands, ectoderm (outer, grey), mesoderm (middle, blue), endoderm (inner lining, red); the notochord forms in the midline mesoderm and will induce the neural plate. Footer: the streak is a groove on the epiblast that sets the body axes and all three layers come from epiblast cells; the hypoblast is displaced, not converted; the same colours are used on the derivative slide.',
      caption: 'Gastrulation: a bilaminar disc becomes trilaminar as epiblast cells ingress through the primitive streak (schematic cross-sections).',
    },
    blocks: [
      '- **Primitive streak** on the epiblast sets the body axes; epiblast cells **ingress** (dive inward) through it',
      '- 1st wave displaces hypoblast → **endoderm** · 2nd wave spreads between → **mesoderm** · surface → **ectoderm**',
    ],
  },
  {
    at: 'THE Germ-Layer Derivative Table',
    mode: 'replace-table',
    figure: {
      svg: germLayerSvg,
      alt:
        'Three colour-coded columns. Ectoderm (grey), hook attracto-derm (what is seen and what senses): epidermis, hair and nails; lens of the eye; inner ear; all nervous tissue; adrenal medulla via neural crest. Mesoderm (blue), hook means-oderm (what moves and pumps): muscle, bone, connective tissue; heart, vessels, blood; kidneys and gonads; dermis; adrenal cortex. Endoderm (red), hook endernal linings: GI and airway linings; liver; pancreas; thyroid; bladder lining. Below a dashed line, the three traps are drawn. One organ, two layers: an adrenal gland as a blue outer cortex (mesoderm) around a grey inner medulla (ectoderm, neural crest). Eye, two ectoderms: a grey eyeball with a red lens at the front; lens equals surface ectoderm, retina equals neuroectoderm. Tubes, lined versus wrapped: a cross-section of a gut tube with a red inner lining ring (endoderm) inside a blue outer ring of muscle and connective tissue (mesoderm). Footer: liver and pancreas bud from the gut tube so they are endoderm; facial bones and cartilage are neural crest (ectoderm), not mesoderm.',
      caption: 'The derivative table as three columns, with the three traps drawn: adrenal (two layers), eye (two ectoderms), gut tube (lined by endoderm, wrapped by mesoderm).',
    },
    blocks: [
      '- **Ectoderm:** skin, lens, inner ear, nervous system, adrenal **medulla**',
      '- **Mesoderm:** muscle, bone, heart/blood, kidneys/gonads, dermis, adrenal **cortex**',
      '- **Endoderm:** GI/airway **linings**, liver, pancreas, thyroid, bladder lining',
      '- Traps: lens = surface ectoderm; liver/pancreas = endoderm; endoderm lines, mesoderm wraps',
    ],
  },
  {
    at: 'Neurulation: Notochord → Neural Tube',
    mode: 'lead',
    figure: {
      svg: neurulationSvg,
      alt:
        'Three schematic cross-sections left to right. Neural plate: a flat surface-ectoderm band with a thickened blue neural plate in its middle; a round notochord (mesoderm) below sends dashed arrows upward labelled induces. Neural folds and groove: the plate edges have risen into two blue folds with a central groove, notochord still beneath; the edges rise, meet and fuse at the midline. Neural tube and neural crest: the surface ectoderm has closed over a blue neural tube (a ring with a central lumen) lying above the notochord; a blue arrow from the notochord up to the tube is labelled Shh to floor plate, ventral motor neurons; a blue arrow from the surface ectoderm down to the tube is labelled BMP to roof plate, dorsal sensory; red neural crest cells break off the dorsal folds and migrate away to each side. Footer: the tube becomes the CNS (brain and spinal cord); failed closure gives spina bifida (caudal) or anencephaly (cranial) and maternal folate lowers the risk; neural crest (the fourth germ layer) gives PNS ganglia, Schwann cells, melanocytes, adrenal medulla chromaffin cells and facial bones; the plate is ectoderm that the mesodermal notochord has induced.',
      caption: 'Neurulation: the notochord induces a plate, the plate folds into a tube, and crest cells leave the fold tips — Shh from below, BMP from above.',
    },
    blocks: [
      '- **Notochord** (mesoderm) induces neural plate → folds → **neural tube** → CNS; folate lowers closure defects',
      '- Notochord **Shh** → floor plate, motor neurons (ventral); surface-ectoderm **BMP** → roof plate (dorsal); crest migrates',
    ],
  },
  {
    at: 'The Four Extraembryonic Membranes',
    mode: 'replace-table',
    figure: {
      svg: membranesSvg,
      alt:
        'A schematic of the membranes nested around a bean-shaped embryo. The outermost circle is the chorion; on its left side small bumps, the chorionic villi, face a shaded strip of maternal endometrium. Inside, a blue ellipse, the amnion, encloses the embryo; a red circle under the embryo is the yolk sac; a small grey sausage from the embryo tail is the allantois, running into a thick grey connecting stalk that reaches the chorion. Labels with leader lines: Amnion, fluid cushion around the embryo, sampled in amniocentesis. Chorion, outermost, villi equal fetal placenta, source of hCG. Allantois, early waste handling, its vessels become the umbilical vessels. Yolk sac, first blood cells, primordial germ cells start here. Connecting stalk becomes the umbilical cord. Footer: amnion, yolk sac and allantois all sit inside the chorion (schematic).',
      caption: 'The four extraembryonic membranes drawn in place: amnion around the embryo, yolk sac below, allantois into the stalk, chorion outermost with villi toward the mother.',
    },
    blocks: [
      '- **Amnion:** fluid cushion around the embryo (amniocentesis)',
      '- **Chorion:** outermost; villi = fetal placenta; source of **hCG**',
      '- **Yolk sac:** FIRST blood cells + primordial germ cells',
      '- **Allantois:** its vessels → the umbilical blood vessels',
    ],
  },
  {
    at: 'The Placenta',
    mode: 'lead',
    figure: {
      svg: placentaSvg,
      alt:
        'Left: one chorionic villus drawn as a finger rising into a red-tinted pool of maternal blood (the intervillous space). Inside the villus a thick blue U-shaped fetal capillary enters from the fetus and returns to the fetus; the villus wall (cell layers) separates it from the maternal blood. A blue arrow from the maternal pool into the villus carries O2, glucose and maternal IgG in to the fetus; a red arrow out of the villus carries CO2 and wastes out to the mother. Text: fetal blood stays inside the villus with maternal blood around it, the two never mix; exchange is by diffusion plus carriers across the villus wall; the single umbilical vein carries oxygenated blood from placenta to fetus and the two umbilical arteries carry blood back to the placenta, named by direction relative to the fetal heart not by oxygen content. Right: three boxes. 1 Exchange: O2 and nutrients in, CO2 and wastes out across the chorionic villi, no mixing. 2 Endocrine: hCG in the first trimester keeps the corpus luteum, then placental progesterone and estrogen take over. 3 Immunity: maternal IgG crosses, the only antibody class, giving the newborn passive immunity. Schematic, one villus of many.',
      caption: 'The placenta as one villus: fetal capillary inside, maternal blood outside, exchange across the wall — and the three jobs (exchange, endocrine, immunity).',
    },
    blocks: [
      '- Exchange by **diffusion** across chorionic villi; maternal and fetal blood **never mix**',
      '- Endocrine: **hCG** → then progesterone + estrogen · only **IgG** crosses (passive immunity)',
    ],
  },
  {
    at: 'The Three Fetal Shunts',
    mode: 'lead',
    figure: {
      svg: shuntsSvg,
      alt:
        'Fetal circulation as eight boxes in a row joined by arrows: Placenta, umbilical vein, Liver, IVC, Right atrium, Right ventricle, pulmonary artery, Lungs (fluid-filled, high resistance), pulmonary veins, Left atrium, Left ventricle, aorta, Body; a grey return path along the bottom from Body back to Placenta is labelled two umbilical arteries, deoxygenated blood back to the placenta. Three blue bypass arcs are the shunts: ductus venosus arcs over the Liver from the umbilical vein to the right atrium (skips the liver); foramen ovale arcs from the right atrium to the left atrium (skips the right ventricle and the lungs); ductus arteriosus dips below the row from the pulmonary artery to the aorta (skips the lungs). Red footer: at birth the first breath drops lung resistance and left-atrial pressure rises above right so the foramen ovale flap is pressed shut; rising O2 and falling prostaglandins constrict the ductus arteriosus; clamping the cord ends flow through the ductus venosus.',
      caption: 'The three shunts as bypasses: around the liver, across the atria, and from pulmonary artery to aorta — and what closes each one at birth.',
    },
    blocks: [
      '- **Ductus venosus** skips the liver · **foramen ovale** RA → LA skips RV + lungs · **ductus arteriosus** PA → aorta',
      '- Birth: LA pressure > RA presses the flap shut; O₂ ↑ + prostaglandins ↓ close the ductus arteriosus',
    ],
  },
  {
    at: 'The Potency Hierarchy',
    mode: 'lead',
    figure: {
      svg: potencySvg,
      alt:
        'Four boxes along a grey wedge that narrows from left to right, labelled potency only narrows in normal development. Totipotent (zygote, earliest blastomeres) fans out to embryo and trophoblast (to placenta). Pluripotent (inner cell mass, ES cells) fans out to blue ecto, meso and endo boxes, while a red dashed line ending in a bar points at a crossed-out trophoblast box labelled cannot make it. Multipotent (adult stem cells, e.g. HSC) fans out to RBC, platelet and WBC, one tissue family (blood). Differentiated (specialized phenotype) points to one cell type. A red dashed arrow loops from the Differentiated box underneath back to the Pluripotent box: iPSC, an adult somatic cell reprogrammed with transcription factors becomes pluripotent again. Footer: ES cells make all three germ layers but not trophoblast, so they are pluripotent, never totipotent; differentiation changes gene expression, not gene content, which is why reprogramming is possible.',
      caption: 'Potency narrows: totipotent → pluripotent → multipotent → differentiated; iPSC reprogramming is the one road back.',
    },
    blocks: [
      '- **Totipotent** (zygote) → **pluripotent** (ICM/ES: 3 layers, no trophoblast) → **multipotent** (adult stem cells)',
      '- Potency only narrows; **iPSCs** reprogram somatic cells back — gene expression changes, not gene content',
    ],
  },
  {
    at: 'Morphogens: Concentration Encodes Fate',
    mode: 'lead',
    figure: {
      svg: morphogenSvg,
      alt:
        'Left: a graph of morphogen concentration against distance from the source. A blue source cell at the origin secretes the morphogen and the blue curve falls away with distance. Two dashed horizontal thresholds cut the curve; dashed drop lines from the crossings divide a strip of cells beneath the axis into three stripes: fate A (red, high concentration, nearest the source), fate B (blue, medium) and fate C (grey, low concentration, farthest). Right: for contrast, a binary on/off signal drawn as a step function gives only two fates, A where it is on and B where it is off. Text: Shh from the notochord patterns the ventral neural tube and the limb; BMPs from surface ectoderm pattern dorsally; responding cells must be competent (have the receptor). Footer: illustrative gradient, a French-flag read-out: one diffusible signal, concentration thresholds, discrete stripes of fate.',
      caption: 'A morphogen is read by concentration: one gradient crossed by several thresholds gives several fates, where a switch gives only two (illustrative).',
    },
    blocks: [
      '- A **morphogen** is read by **concentration**: one gradient, several thresholds, several fates',
      '- **Shh** patterns the neural tube ventrally and the limb; **BMPs** pattern dorsally; a binary switch gives only two fates',
    ],
  },
]
