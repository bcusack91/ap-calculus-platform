import type { DeckFigurePlacement } from './index'

/**
 * Endocrine & Nervous Systems (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a cell with a surface
 * and a nuclear receptor, three signalling columns that widen as the signal
 * is amplified, the hypothalamus with a portal system on one side and an axon
 * on the other, a three-tier axis with its feedback loop, three neuron chains,
 * a glucose control loop, a normal versus an iodine-starved thyroid axis, the
 * adrenal gland as stacked zones, a 2×2 localisation grid) — no textbook,
 * prep-company or AAMC figure was copied. No molecule is drawn structurally;
 * hormones are labelled circles and boxes. Endocrine-leaning on purpose: the
 * neuron, action potential, synapse, EPSP/IPSP summation, nervous-system tree
 * and reflex arc are already drawn in the Biological Basis (P/S) deck and the
 * calcium loop in the Musculoskeletal deck.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-en-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Text in currentColor. `weight` is the font-weight attribute as a string ('400' | '700'); `extra` = further attributes (e.g. a transform). */
const TXT = (
  x: number,
  y: number,
  size: number,
  text: string,
  weight: '400' | '700' = '400',
  anchor: 'start' | 'middle' | 'end' = 'middle',
  extra = '',
) => `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" fill="currentColor"${extra ? ' ' + extra : ''}>${text}</text>`

/** Rounded box in currentColor: outline only, or lightly filled (`fill` = fill-opacity), optionally dashed. */
const BOX = (x: number, y: number, w: number, h: number, opts: { sw?: number; fill?: number; dash?: boolean; rx?: number } = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${opts.rx ?? 12}" fill="${opts.fill ? 'currentColor' : 'none'}"${
    opts.fill ? ` fill-opacity="${opts.fill}"` : ''
  } stroke="currentColor" stroke-width="${opts.sw ?? 2.5}"${opts.dash ? ' stroke-dasharray="8 6"' : ''}/>`

/** Straight arrow (currentColor) ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 2.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-end="url(#${marker})"/>`

/* 1 — Peptide vs steroid hormone at one cell (replace-table, 560×440) */
const classesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<line x1="30" y1="138" x2="530" y2="138" stroke="currentColor" stroke-width="3"/>
<line x1="30" y1="146" x2="530" y2="146" stroke="currentColor" stroke-width="3"/>
<path d="M30 146 V368 Q30 398 60 398 H500 Q530 398 530 368 V146" fill="none" stroke="currentColor" stroke-width="2.5"/>
${TXT(34, 128, 12, 'extracellular', '400', 'start')}
${TXT(526, 128, 12, 'plasma membrane', '400', 'end')}
${TXT(34, 166, 12, 'cytoplasm', '400', 'start')}
${TXT(400, 282, 12, 'nucleus')}
</g>
${BOX(290, 264, 230, 116, { rx: 40, sw: 2 })}
<g class="fig-accent">
<defs>${ARROW('arr-en-cls-b')}</defs>
${TXT(140, 30, 16, 'Peptide hormone', '700')}
${TXT(140, 50, 13, 'water-soluble — stays outside')}
<circle cx="140" cy="74" r="11" fill="currentColor"/>
${ARR(140, 86, 140, 114, 'arr-en-cls-b')}
<rect x="122" y="116" width="36" height="50" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
${TXT(140, 184, 13, 'surface receptor')}
${BOX(30, 196, 224, 44)}
${TXT(142, 213, 14, 'second messenger', '700')}
${TXT(142, 231, 13, 'cAMP, IP₃ + DAG, Ca²⁺')}
${ARR(142, 240, 142, 262, 'arr-en-cls-b')}
${BOX(30, 264, 224, 44)}
${TXT(142, 282, 14, 'kinases phosphorylate', '700')}
${TXT(142, 300, 13, 'existing proteins')}
${TXT(142, 338, 16, 'FAST · amplified', '700')}
${TXT(142, 358, 13, 'seconds to minutes, off quickly')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-en-cls-r')}</defs>
${TXT(400, 30, 16, 'Steroid hormone', '700')}
${TXT(400, 50, 13, 'lipid-soluble — diffuses through')}
<circle cx="400" cy="74" r="11" fill="currentColor"/>
${ARR(400, 86, 400, 190, 'arr-en-cls-r')}
${BOX(300, 196, 200, 44)}
${TXT(400, 213, 14, 'intracellular receptor', '700')}
${TXT(400, 231, 13, 'hormone–receptor complex')}
${ARR(400, 240, 400, 262, 'arr-en-cls-r')}
${TXT(405, 310, 14, 'DNA → mRNA → new protein', '700')}
${TXT(405, 338, 16, 'SLOW · lasting', '700')}
${TXT(405, 358, 13, 'hours to days')}
</g>
${TXT(280, 418, 13, 'Amines split: epinephrine → surface receptor (peptide-like),')}
${TXT(280, 434, 13, 'thyroid hormone → nuclear receptor (steroid-like)')}
</svg>`

/* 2 — Three second-messenger cascades, boxes widening with amplification (lead, 1000×460) */
/** One cascade column; `highlight` fills row 3 (the second messenger) — the RTK column has none. */
const cascadeCol = (cx: number, title: string, rows: string[], examples: string[], marker: string, highlight: boolean) => {
  const widths = [170, 200, 230, 260, 280]
  const tops = [56, 122, 188, 254, 320]
  let out = TXT(cx, 36, 21, title, '700')
  rows.forEach((label, i) => {
    const w = widths[i]
    const hot = highlight && i === 2
    out += BOX(cx - w / 2, tops[i], w, 40, hot ? { fill: 0.15 } : {})
    out += TXT(cx, tops[i] + 26, i === 4 ? 16 : 17, label, hot ? '700' : '400')
    if (i < 4) out += ARR(cx, tops[i] + 40, cx, tops[i + 1] - 2, marker)
  })
  examples.forEach((e, i) => { out += TXT(cx, 392 + i * 20, 15, e) })
  return out
}

const cascadesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-en-casc')}</defs>
<g class="fig-accent">
<defs>${ARROW('arr-en-casc-b')}</defs>
${cascadeCol(170, 'Gs (or Gi) GPCR', ['Gs-coupled receptor', 'adenylyl cyclase', 'cAMP', 'protein kinase A', 'phosphorylates target proteins'], ['glucagon · epinephrine (β)', 'ADH (V₂) · TSH · LH · (Gi inhibits)'], 'arr-en-casc-b', true)}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-en-casc-r')}</defs>
${cascadeCol(500, 'Gq GPCR', ['Gq-coupled receptor', 'phospholipase C', 'IP₃ + DAG', 'Ca²⁺ release + PKC', 'phosphorylates target proteins'], ['epinephrine (α₁) · GnRH', 'oxytocin'], 'arr-en-casc-r', true)}
</g>
${cascadeCol(830, 'Receptor tyrosine kinase', ['hormone binds RTK', 'autophosphorylates', 'adaptor proteins dock', 'kinase cascade', 'phosphorylates target proteins'], ['insulin · growth factors'], 'arr-en-casc', false)}
<g class="fig-muted">${TXT(500, 446, 16, 'boxes widen as the signal is amplified: each enzymatic step multiplies the message')}</g>
</svg>`

/* 3 — Hypothalamus → anterior lobe by portal blood, → posterior lobe by axon (lead, 1000×460) */
const pituitarySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${BOX(300, 16, 400, 80, { rx: 16 })}
${TXT(500, 48, 24, 'Hypothalamus', '700')}
<g class="fig-muted">
${TXT(500, 74, 15, 'brain tissue that secretes')}
<rect x="230" y="238" width="540" height="124" rx="22" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/>
${TXT(500, 356, 12, 'pituitary')}
${TXT(460, 268, 13, 'a true gland', '400', 'end')}
${TXT(640, 268, 13, 'neural tissue')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-en-pit-b')}</defs>
<circle cx="360" cy="60" r="11" fill="currentColor"/>
<line x1="360" y1="71" x2="360" y2="110" stroke="currentColor" stroke-width="3"/>
<ellipse cx="360" cy="122" rx="44" ry="13" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
${TXT(306, 127, 14, '1st capillary bed', '400', 'end')}
${TXT(412, 114, 14, 'releasing (and', '400', 'start')}
${TXT(412, 130, 14, 'inhibiting) hormones', '400', 'start')}
<line x1="352" y1="135" x2="352" y2="277" stroke="currentColor" stroke-width="3"/>
<line x1="368" y1="135" x2="368" y2="277" stroke="currentColor" stroke-width="3"/>
${TXT(330, 195, 15, 'hypophyseal portal veins', '400', 'end')}
${TXT(330, 215, 13, 'two capillary beds in series', '400', 'end')}
${BOX(250, 250, 220, 100, { rx: 14 })}
<ellipse cx="360" cy="290" rx="44" ry="13" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
${TXT(360, 318, 13, '2nd capillary bed')}
${TXT(360, 341, 18, 'Anterior pituitary', '700')}
${ARR(360, 350, 300, 374, 'arr-en-pit-b')}
${TXT(290, 392, 16, 'FLAT PEG', '700')}
${TXT(290, 412, 14, 'FSH · LH · ACTH · TSH → tropic, command other glands')}
${TXT(290, 432, 14, 'Prolactin · Endorphins · GH → mostly direct')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-en-pit-r')}</defs>
<circle cx="660" cy="60" r="11" fill="currentColor"/>
<line x1="660" y1="71" x2="660" y2="281" stroke="currentColor" stroke-width="3"/>
${TXT(676, 190, 15, 'axon of a hypothalamic neuron', '400', 'start')}
${TXT(676, 210, 13, 'ADH and oxytocin made up in the cell body', '400', 'start')}
${BOX(530, 250, 220, 100, { rx: 14 })}
<circle cx="660" cy="290" r="9" fill="currentColor"/>
${TXT(640, 318, 13, 'axon terminals store + release')}
${TXT(640, 341, 18, 'Posterior pituitary', '700')}
${ARR(640, 350, 700, 374, 'arr-en-pit-r')}
${TXT(710, 392, 16, 'ADH · oxytocin', '700')}
${TXT(710, 412, 14, 'ADH → kidney water reabsorption')}
${TXT(710, 432, 14, 'oxytocin → uterus (labor), milk ejection')}
</g>
</svg>`

/* 4 — The three-tier axis template with long-loop feedback, and the three named axes (lead, 1000×460) */
const axisCol = (cx: number, head: string, rel: string, tropic: string, gland: string, final: string) =>
  `<g class="fig-muted">${BOX(cx - 90, 30, 180, 420, { sw: 2, rx: 16 })}${TXT(cx, 194, 20, '↓')}${TXT(cx, 288, 20, '↓')}${TXT(cx, 372, 20, '↓')}</g>
${TXT(cx, 62, 18, head, '700')}
<g class="fig-accent">${TXT(cx, 128, 17, rel)}${TXT(cx, 250, 17, tropic)}</g>
${TXT(cx, 314, 17, gland)}
<g class="fig-accent-2">${TXT(cx, 420, 18, final, '700')}</g>`

const axisSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-en-axis')}</defs>
${BOX(40, 36, 220, 52)}
${TXT(150, 68, 18, 'Hypothalamus', '700')}
${ARR(150, 88, 150, 158, 'arr-en-axis')}
${TXT(162, 128, 14, 'releasing hormone', '400', 'start')}
${BOX(40, 160, 220, 52)}
${TXT(150, 192, 18, 'Anterior pituitary', '700')}
${ARR(150, 212, 150, 282, 'arr-en-axis')}
${TXT(162, 252, 14, 'tropic hormone', '400', 'start')}
${BOX(40, 284, 220, 52)}
${TXT(150, 316, 18, 'Peripheral gland', '700')}
${ARR(150, 336, 150, 390, 'arr-en-axis')}
<g class="fig-accent-2">
<defs>${ARROW('arr-en-axis-r')}</defs>
${BOX(40, 392, 220, 48, { fill: 0.12 })}
${TXT(150, 421, 16, 'final hormone → targets', '700')}
<path d="M260 416 H310 V62 H268" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-en-axis-r)"/>
<path d="M310 186 H268" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-en-axis-r)"/>
${TXT(328, 270, 14, '⊖ long-loop negative feedback', '400', 'middle', 'transform="rotate(-90 328 270)"')}
</g>
${axisCol(470, 'HPT axis', 'TRH', 'TSH', 'thyroid', 'T3 · T4')}
${axisCol(680, 'HPA axis', 'CRH', 'ACTH', 'adrenal cortex', 'cortisol')}
${axisCol(890, 'HPG axis', 'GnRH', 'LH · FSH', 'gonads', 'sex steroids')}
</svg>`

/* 5 — Somatic, sympathetic and parasympathetic neuron chains (replace-table, 560×440) */
const effector = (y: number, l1: string, l2: string) =>
  `${BOX(430, y - 28, 122, 56, { rx: 10 })}${TXT(491, y - 6, 14, l1)}${TXT(491, y + 12, 14, l2)}`

const autonomicSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-en-ans')}</defs>
<g class="fig-muted">
<rect x="18" y="30" width="52" height="382" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
${TXT(44, 221, 15, 'CNS (brain / spinal cord)', '700', 'middle', 'transform="rotate(-90 44 221)"')}
</g>
${TXT(80, 60, 16, 'Somatic', '700', 'start')}
<circle cx="56" cy="100" r="6" fill="currentColor"/>
${ARR(62, 100, 426, 100, 'arr-en-ans', 3)}
${TXT(245, 88, 13, 'one neuron, straight to the muscle')}
${effector(100, 'skeletal', 'muscle')}
${TXT(491, 146, 13, 'ACh · nicotinic')}
<g class="fig-accent-2">
<defs>${ARROW('arr-en-ans-r')}</defs>
${TXT(80, 180, 16, 'Sympathetic — fight or flight', '700', 'start')}
<circle cx="56" cy="220" r="6" fill="currentColor"/>
<line x1="62" y1="220" x2="165" y2="220" stroke="currentColor" stroke-width="3"/>
<circle cx="174" cy="220" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
${ARR(183, 220, 426, 220, 'arr-en-ans-r', 3)}
${TXT(118, 208, 13, 'short pre')}
${TXT(300, 208, 13, 'long post')}
${TXT(174, 244, 13, 'ACh · nicotinic')}
${effector(220, 'smooth muscle,', 'heart, glands')}
${TXT(491, 266, 13, 'NE on α/β receptors')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-en-ans-b')}</defs>
${TXT(80, 300, 16, 'Parasympathetic — rest and digest', '700', 'start')}
<circle cx="56" cy="340" r="6" fill="currentColor"/>
<line x1="62" y1="340" x2="356" y2="340" stroke="currentColor" stroke-width="3"/>
<circle cx="365" cy="340" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
${ARR(374, 340, 426, 340, 'arr-en-ans-b', 3)}
${TXT(215, 328, 13, 'long pre')}
${TXT(393, 328, 12, 'short post')}
${TXT(365, 364, 13, 'ACh · nicotinic')}
${effector(340, 'smooth muscle,', 'heart, glands')}
${TXT(491, 386, 13, 'ACh · muscarinic')}
</g>
${TXT(18, 414, 12.5, 'Exceptions: sweat glands — sympathetic but ACh / muscarinic;', '400', 'start')}
${TXT(18, 432, 12.5, 'adrenal medulla — a sympathetic ganglion releasing epinephrine into blood', '400', 'start')}
</svg>`

/* 6 — Blood glucose: the insulin loop and the glucagon loop (replace-table, 560×440) */
const loopRow = (x: number, y: number, h: number, l1: string, l2?: string, bold = true) =>
  `${BOX(x, y, 220, h, l2 ? {} : { fill: 0.15 })}${l2 ? TXT(x + 110, y + 18, 14, l1, bold ? '700' : '400') + TXT(x + 110, y + 36, 13, l2) : TXT(x + 110, y + 21, 15, l1, '700')}`

const glucoseSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${BOX(180, 14, 200, 40, { sw: 3 })}
${TXT(280, 33, 18, 'Blood glucose', '700')}
<g class="fig-muted">${TXT(280, 49, 11, 'held in a set-point band')}</g>
<g class="fig-accent">
<defs>${ARROW('arr-en-glu-b')}</defs>
${ARR(230, 54, 168, 74, 'arr-en-glu-b')}
${loopRow(30, 76, 32, 'glucose HIGH (fed)')}
${ARR(140, 108, 140, 126, 'arr-en-glu-b')}
${loopRow(30, 128, 44, 'β cells release insulin', '(tyrosine-kinase receptor)')}
${ARR(140, 172, 140, 190, 'arr-en-glu-b')}
${loopRow(30, 192, 44, 'GLUT4 to the surface:', 'muscle + fat take up glucose')}
${ARR(140, 236, 140, 254, 'arr-en-glu-b')}
${loopRow(30, 256, 44, 'liver stores: glycogen,', 'fat and protein synthesis')}
${ARR(140, 300, 140, 318, 'arr-en-glu-b')}
${loopRow(30, 320, 32, 'glucose falls')}
<path d="M30 336 H14 V34 H176" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-en-glu-b)"/>
${TXT(140, 376, 14, 'the STORAGE hormone', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-en-glu-r')}</defs>
${ARR(330, 54, 392, 74, 'arr-en-glu-r')}
${loopRow(310, 76, 32, 'glucose LOW (fasting)')}
${ARR(420, 108, 420, 126, 'arr-en-glu-r')}
${loopRow(310, 128, 44, 'α cells release glucagon', '(GPCR → cAMP)')}
${ARR(420, 172, 420, 190, 'arr-en-glu-r')}
${loopRow(310, 192, 44, 'liver: glycogenolysis +', 'gluconeogenesis → glucose out')}
${ARR(420, 236, 420, 254, 'arr-en-glu-r')}
${loopRow(310, 256, 44, 'adipose: lipolysis', 'fatty acids as fuel')}
${ARR(420, 300, 420, 318, 'arr-en-glu-r')}
${loopRow(310, 320, 32, 'glucose rises')}
<path d="M530 336 H546 V34 H384" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-en-glu-r)"/>
${TXT(420, 376, 14, 'the MOBILIZATION hormone', '700')}
</g>
${TXT(280, 404, 12.5, 'Insulin stands alone: glucagon, epinephrine, cortisol and GH all raise glucose')}
${TXT(280, 426, 12, 'The brain takes up glucose without insulin — hypoglycemia is a neural emergency')}
</svg>`

/* 7 — The HPT axis: normal, and with no iodine (lead, 1000×460) */
const thyroidSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-en-thy')}</defs>
<g class="fig-muted">
${BOX(20, 8, 475, 444, { sw: 2, rx: 18 })}
${BOX(505, 8, 475, 444, { sw: 2, rx: 18 })}
<defs>${ARROW('arr-en-thy-m')}</defs>
<path d="M725 332 H753 V68 H731" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#arr-en-thy-m)"/>
<path d="M753 156 H731" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#arr-en-thy-m)"/>
</g>
${TXT(255, 32, 20, 'Normal HPT axis', '700')}
${BOX(40, 46, 200, 44)}${TXT(140, 74, 17, 'Hypothalamus', '700')}
${ARR(140, 90, 140, 132, 'arr-en-thy')}${TXT(130, 116, 14, 'TRH', '400', 'end')}
${BOX(40, 134, 200, 44)}${TXT(140, 162, 17, 'Anterior pituitary', '700')}
${ARR(140, 178, 140, 220, 'arr-en-thy')}${TXT(130, 204, 14, 'TSH', '400', 'end')}
${BOX(40, 222, 200, 44)}${TXT(140, 250, 17, 'Thyroid', '700')}
${ARR(140, 266, 140, 308, 'arr-en-thy')}${TXT(130, 292, 14, 'needs iodine', '400', 'end')}
<g class="fig-accent-2">
<defs>${ARROW('arr-en-thy-r')}</defs>
${BOX(40, 310, 200, 44, { fill: 0.12 })}${TXT(140, 338, 16, 'T3 / T4 — normal', '700')}
<path d="M240 332 H268 V68 H246" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-en-thy-r)"/>
<path d="M268 156 H246" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-en-thy-r)"/>
${TXT(282, 216, 22, '⊖', '700', 'start')}
${TXT(282, 238, 13, 'feedback', '400', 'start')}
${TXT(282, 254, 13, 'intact', '400', 'start')}
</g>
${TXT(290, 66, 15, 'T3 / T4 effects', '700', 'start')}
${TXT(290, 90, 14, '↑ basal metabolic rate', '400', 'start')}
${TXT(290, 112, 14, '↑ heat production', '400', 'start')}
${TXT(290, 134, 14, '↑ β-receptor sensitivity', '400', 'start')}
${TXT(290, 156, 14, 'essential for CNS', '400', 'start')}
${TXT(290, 176, 14, 'development (infancy)', '400', 'start')}
${TXT(255, 400, 14, 'T3 is the active form; most is made from T4 in the tissues')}
${TXT(255, 424, 13, 'Hyperthyroid: heat intolerance, weight loss, tremor, tachycardia')}
${TXT(742, 32, 20, 'Iodine deficiency → goiter', '700')}
${BOX(525, 46, 200, 44)}${TXT(625, 74, 17, 'Hypothalamus', '700')}
${ARR(625, 90, 625, 132, 'arr-en-thy')}${TXT(615, 116, 14, 'TRH ↑', '400', 'end')}
${BOX(525, 134, 200, 44)}${TXT(625, 162, 17, 'Anterior pituitary', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-en-thy-r2')}</defs>
${ARR(625, 178, 625, 208, 'arr-en-thy-r2', 3.5)}${TXT(612, 200, 16, 'TSH ↑↑', '700', 'end')}
${TXT(612, 302, 14, 'no iodine ✕', '400', 'end')}
${BOX(525, 310, 200, 44, { dash: true })}${TXT(625, 338, 16, 'T3 / T4 — LOW', '700')}
${TXT(753, 222, 24, '✕', '700')}
${TXT(770, 236, 13, 'no brake:', '400', 'start')}
${TXT(770, 252, 13, 'TSH climbs', '400', 'start')}
</g>
${BOX(515, 212, 220, 70, { sw: 4 })}
${TXT(625, 242, 18, 'Thyroid — enlarged', '700')}
${TXT(625, 266, 13, 'TSH is trophic — gland grows')}
${ARR(625, 282, 625, 308, 'arr-en-thy')}
${TXT(775, 66, 15, 'Hypothyroid picture', '700', 'start')}
${TXT(775, 90, 14, 'cold intolerance', '400', 'start')}
${TXT(775, 112, 14, 'weight gain', '400', 'start')}
${TXT(775, 134, 14, 'lethargy', '400', 'start')}
${TXT(775, 156, 14, 'slow reflexes', '400', 'start')}
${TXT(742, 400, 14, 'Low T4 → no brake → TSH ↑ → the overstimulated gland enlarges')}
${TXT(742, 424, 13, 'Newborns are screened: T4 is essential for CNS development')}
</svg>`

/* 8 — The adrenal gland as stacked zones, each with its controller and its job (lead, 1000×460) */
const adrenalSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<defs>${ARROW('arr-en-adr-m')}</defs>
${BOX(40, 30, 340, 400, { rx: 34, sw: 3 })}
${TXT(210, 50, 13, 'capsule')}
${TXT(416, 44, 13, 'outside → in: salt, sugar, sex — then the medulla', '400', 'start')}
${ARR(384, 101, 404, 101, 'arr-en-adr-m', 2)}
${ARR(384, 190, 404, 190, 'arr-en-adr-m', 2)}
${ARR(384, 275, 404, 275, 'arr-en-adr-m', 2)}
${ARR(384, 363, 404, 363, 'arr-en-adr-m', 2)}
</g>
${TXT(24, 186, 14, 'CORTEX — steroids', '700', 'middle', 'transform="rotate(-90 24 186)"')}
<g class="fig-accent">
<rect x="56" y="62" width="308" height="78" rx="8" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2"/>
<rect x="56" y="140" width="308" height="100" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2"/>
<rect x="56" y="240" width="308" height="70" fill="currentColor" fill-opacity="0.21" stroke="currentColor" stroke-width="2"/>
${TXT(210, 94, 18, 'Zona glomerulosa', '700')}
${TXT(210, 118, 15, 'aldosterone — SALT')}
${TXT(210, 178, 18, 'Zona fasciculata', '700')}
${TXT(210, 202, 15, 'cortisol — SUGAR')}
${TXT(210, 224, 13, '(the widest zone)')}
${TXT(210, 268, 18, 'Zona reticularis', '700')}
${TXT(210, 292, 15, 'weak androgens — SEX')}
${TXT(416, 90, 16, 'Controlled by RAAS (angiotensin II, ↑K⁺) — not ACTH', '700', 'start')}
${TXT(416, 170, 16, 'Controlled by CRH → ACTH (morning-peaked circadian rhythm)', '700', 'start')}
${TXT(416, 270, 16, 'Controlled by ACTH', '700', 'start')}
</g>
${TXT(416, 112, 15, 'Na⁺ retained, K⁺ and H⁺ excreted → blood volume and pressure', '400', 'start')}
${TXT(416, 192, 15, 'gluconeogenesis, protein and fat mobilization, vascular tone', '400', 'start')}
${TXT(416, 212, 15, 'immune suppression (hence the drug) — the long-term stress hormone', '400', 'start')}
${TXT(416, 292, 15, 'weak androgens — a minor output', '400', 'start')}
<g class="fig-accent-2">
<rect x="56" y="312" width="308" height="102" rx="20" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
${TXT(210, 350, 18, 'Medulla', '700')}
${TXT(210, 374, 15, 'epinephrine (chromaffin cells)')}
${TXT(210, 396, 13, 'a modified sympathetic ganglion')}
${TXT(416, 350, 16, 'Controlled by sympathetic preganglionic fibers (ACh, nicotinic)', '700', 'start')}
</g>
${TXT(416, 372, 15, 'epinephrine into BLOOD — the short-term stress broadcast', '400', 'start')}
${TXT(416, 392, 15, 'seconds: ↑HR, glucose, blood to muscle; cortisol follows over hours', '400', 'start')}
</svg>`

/* 9 — Primary vs secondary: the final-hormone × tropic-hormone 2×2 (replace-table, 560×440) */
const dxCell = (cx: number, cy: number, kind: string, fn: string, where1: string, where2: string, dir: string) =>
  `${TXT(cx, cy - 32, 17, kind, '700')}${TXT(cx, cy - 10, 15, fn)}${TXT(cx, cy + 12, 13, where1)}${TXT(cx, cy + 30, 13, where2)}<g class="fig-muted">${TXT(cx, cy + 52, 12, dir)}</g>`

const localizeSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${TXT(330, 26, 15, 'TROPIC hormone (TSH, ACTH, LH …)', '700')}
${TXT(225, 58, 16, 'LOW')}
${TXT(435, 58, 16, 'HIGH')}
${TXT(28, 245, 15, 'FINAL hormone (T4, cortisol …)', '700', 'middle', 'transform="rotate(-90 28 245)"')}
${TXT(90, 172, 16, 'LOW')}
${TXT(90, 327, 16, 'HIGH')}
<g class="fig-accent-2">
<rect x="120" y="90" width="210" height="155" fill="currentColor" fill-opacity="0.08"/>
<rect x="330" y="245" width="210" height="155" fill="currentColor" fill-opacity="0.08"/>
${dxCell(225, 167, 'SECONDARY', 'hypofunction', 'pituitary or hypothalamus', 'under-drives a healthy gland', 'same direction')}
${dxCell(435, 322, 'SECONDARY', 'hyperfunction', 'pituitary tumor', '(or ectopic tropic source)', 'same direction')}
</g>
<g class="fig-accent">
<rect x="330" y="90" width="210" height="155" fill="currentColor" fill-opacity="0.08"/>
<rect x="120" y="245" width="210" height="155" fill="currentColor" fill-opacity="0.08"/>
${dxCell(435, 167, 'PRIMARY', 'hypofunction', 'the gland itself is failing', 'tropic drive climbs, no reply', 'opposite directions')}
${dxCell(225, 322, 'PRIMARY', 'hyperfunction', 'autonomous gland', '(or exogenous hormone)', 'opposite directions')}
</g>
<rect x="120" y="90" width="420" height="310" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="330" y1="90" x2="330" y2="400" stroke="currentColor" stroke-width="2.5"/>
<line x1="120" y1="245" x2="540" y2="245" stroke="currentColor" stroke-width="2.5"/>
${TXT(280, 426, 12.5, 'Opposite directions → gland (primary); same direction → pituitary (secondary)')}
</svg>`

export const mcatEndocrineNervousFigures: DeckFigurePlacement[] = [
  {
    at: 'The Three Hormone Classes',
    mode: 'replace-table',
    figure: {
      svg: classesSvg,
      alt:
        'One cell drawn in cross-section with a two-line plasma membrane, cytoplasm and a nucleus. Left, in blue: a peptide hormone (water-soluble, stays outside) binds a receptor embedded in the membrane; inside the cell a second messenger (cAMP, IP₃ + DAG, Ca²⁺) activates kinases that phosphorylate existing proteins — labelled FAST, amplified, seconds to minutes, off quickly. Right, in red: a steroid hormone (lipid-soluble) diffuses straight through the membrane to an intracellular receptor; the hormone–receptor complex enters the nucleus, where DNA → mRNA → new protein — labelled SLOW, lasting, hours to days. Footnote: the amines split — epinephrine uses a surface receptor (peptide-like), thyroid hormone a nuclear receptor (steroid-like).',
      caption: 'Chemistry predicts behaviour: a hormone that cannot cross the membrane acts fast through a surface receptor; one that can acts slowly through the genome.',
    },
    blocks: [
      '- **Peptides** (insulin, glucagon, ADH, every anterior-pituitary hormone): water-soluble → **surface receptor** → second messengers; fast, amplified, stored in vesicles',
      '- **Steroids** (cortisol, aldosterone, sex steroids): from cholesterol, cross the membrane → **nuclear receptor** → transcription; slow, lasting; made on demand, carried on proteins',
      '- **Amines** split: epinephrine behaves like a peptide, **thyroid hormone like a steroid** (nuclear receptor, days)',
      '- Only the **free** fraction of a carrier-bound hormone is active or sensed by feedback',
    ],
  },
  {
    at: 'Second-Messenger Cascades',
    mode: 'lead',
    figure: {
      svg: cascadesSvg,
      alt:
        'Three vertical cascades drawn as stacks of boxes that get wider at each step. Blue, Gs (or Gi) GPCR: Gs-coupled receptor → adenylyl cyclase → cAMP (highlighted as the second messenger) → protein kinase A → phosphorylates target proteins; examples glucagon, epinephrine at β receptors, ADH at V₂, TSH, LH, with Gi inhibiting the same cascade. Red, Gq GPCR: Gq-coupled receptor → phospholipase C → IP₃ + DAG (highlighted) → Ca²⁺ release + PKC → phosphorylates target proteins; examples epinephrine at α₁, GnRH, oxytocin. Receptor tyrosine kinase: receptor autophosphorylates → adaptor proteins dock → kinase cascade → phosphorylates target proteins; examples insulin and growth factors. Note: the boxes widen because each enzymatic step multiplies the signal (amplification).',
      caption: 'The peptide playbook: Gs makes cAMP, Gq makes IP₃ + DAG, a tyrosine kinase phosphorylates directly — and every enzyme step amplifies.',
    },
    blocks: [
      '- **Gs → cAMP → PKA** (glucagon, β-epinephrine, ADH at V₂, TSH, LH) · **Gq → IP₃ + DAG → Ca²⁺ + PKC** (α₁, GnRH, oxytocin)',
      '- **Receptor tyrosine kinase** (insulin, growth factors) phosphorylates directly; each enzyme step **amplifies** the signal',
    ],
  },
  {
    at: 'The Hypothalamic–Pituitary Command Structure',
    mode: 'lead',
    figure: {
      svg: pituitarySvg,
      alt:
        'The hypothalamus as a box at the top with two neurons in it. Blue path, left: a neuron releases releasing (and inhibiting) hormones into a first capillary bed just below the hypothalamus; hypophyseal portal veins carry them down to a second capillary bed inside the anterior pituitary (labelled a true gland, two capillary beds in series). From the anterior pituitary: FLAT PEG — FSH, LH, ACTH, TSH are tropic and command other glands; prolactin, endorphins and GH act mostly directly. Red path, right: a hypothalamic neuron sends its axon straight down into the posterior pituitary (neural tissue); ADH and oxytocin are made up in the cell body and only stored and released from the axon terminals. ADH → kidney water reabsorption; oxytocin → uterus in labour and milk ejection. A dashed outline groups the two lobes as the pituitary.',
      caption: 'One hypothalamus, two routes: blood (portal system) to the anterior gland, axons to the posterior lobe, which makes nothing of its own.',
    },
    blocks: [
      '- **Anterior** = a true gland run by releasing hormones in **portal blood** (tiny amounts, two capillary beds in series) — **FLAT PEG**',
      '- **Posterior** = hypothalamic axons: **ADH and oxytocin** are made in the hypothalamus, only stored and released here',
    ],
  },
  {
    at: 'Three-Tier Axes & Negative Feedback',
    mode: 'lead',
    figure: {
      svg: axisSvg,
      alt:
        'Left: the axis template as four stacked boxes — Hypothalamus, arrow labelled releasing hormone, Anterior pituitary, arrow labelled tropic hormone, Peripheral gland, arrow to a red box final hormone → targets. A red feedback line runs from the final hormone back up and into both the pituitary and the hypothalamus, labelled ⊖ long-loop negative feedback. Right: three columns aligned to the same four rows. HPT axis: TRH → TSH → thyroid → T3, T4. HPA axis: CRH → ACTH → adrenal cortex → cortisol. HPG axis: GnRH → LH, FSH → gonads → sex steroids.',
      caption: 'Every three-tier axis is the same circuit: the final hormone switches off both tiers above it, so levels stay in a set-point band.',
    },
    blocks: [
      '- Hypothalamus → (releasing hormone) → anterior pituitary → (tropic hormone) → gland → final hormone, which **inhibits both upper tiers**',
      '- Famous **positive**-feedback exceptions: the LH surge at ovulation and oxytocin in labour',
    ],
  },
  {
    at: 'Organization: Somatic vs. Autonomic',
    mode: 'replace-table',
    figure: {
      svg: autonomicSvg,
      alt:
        'Three horizontal neuron chains leaving a CNS band on the left and ending at an effector box on the right. Somatic: one neuron runs straight to skeletal muscle, releasing ACh on nicotinic receptors. Sympathetic (red): a short preganglionic neuron reaches a ganglion near the cord (ACh on nicotinic receptors), then a long postganglionic neuron reaches smooth muscle, heart and glands, releasing norepinephrine on α/β receptors. Parasympathetic (blue): a long preganglionic neuron reaches a ganglion near the organ (ACh, nicotinic), then a short postganglionic neuron releases ACh on muscarinic receptors at smooth muscle, heart and glands. Footnote: sweat glands are sympathetic but use ACh/muscarinic; the adrenal medulla is a sympathetic ganglion that releases epinephrine into blood.',
      caption: 'Every autonomic ganglion is a nicotinic ACh synapse; the two divisions differ only in where the ganglion sits and what the last neuron releases.',
    },
    blocks: [
      '- **Somatic**: one neuron, ACh on **nicotinic** receptors, skeletal muscle — voluntary movement and reflex arcs',
      '- **Sympathetic**: short pre- / long post-ganglionic; final transmitter **norepinephrine** (α/β) — fight or flight',
      '- **Parasympathetic**: long pre- / short post-ganglionic; final transmitter **ACh on muscarinic** receptors — rest and digest',
      '- Exceptions: **sweat glands** (sympathetic, ACh/muscarinic) and the **adrenal medulla** (a ganglion that secretes epinephrine into blood)',
    ],
  },
  {
    at: 'Blood Glucose — The Insulin/Glucagon See-Saw',
    mode: 'replace-table',
    figure: {
      svg: glucoseSvg,
      alt:
        'A blood-glucose box at the top with two feedback loops hanging from it. Blue loop (fed): glucose HIGH → β cells release insulin (tyrosine-kinase receptor) → GLUT4 moves to the surface so muscle and fat take up glucose → the liver stores glycogen, fat and protein are synthesised → glucose falls, and an arrow returns to the blood-glucose box; labelled the STORAGE hormone. Red loop (fasting): glucose LOW → α cells release glucagon (GPCR → cAMP) → liver glycogenolysis and gluconeogenesis release glucose → adipose lipolysis supplies fatty acids → glucose rises, returning to the box; labelled the MOBILIZATION hormone. Footnotes: insulin stands alone against glucagon, epinephrine, cortisol and GH, which all raise glucose; the brain takes up glucose without insulin, so hypoglycemia is a neural emergency.',
      caption: 'Two loops, one set point: insulin stores, glucagon mobilises — and insulin is the only hormone pushing glucose down.',
    },
    blocks: [
      '- **Insulin** (β cells, fed): tyrosine-kinase receptor → **GLUT4** into muscle and fat; glycogen, fat and protein **synthesis** — the storage hormone',
      '- **Glucagon** (α cells, fasting): GPCR → cAMP → liver **glycogenolysis + gluconeogenesis**, lipolysis — the mobilisation hormone',
      '- **Liver and brain** take up glucose without insulin — hypoglycemia is a neural emergency',
      '- Type 1 = no insulin (β-cell destruction, DKA); type 2 = **resistance**, insulin initially high; four counter-regulators vs one insulin',
    ],
  },
  {
    at: 'Thyroid — The Metabolic Thermostat',
    mode: 'lead',
    figure: {
      svg: thyroidSvg,
      alt:
        'Two panels. Left, Normal HPT axis: Hypothalamus → TRH → Anterior pituitary → TSH → Thyroid → (needs iodine) → T3/T4 normal, with a red feedback line from T3/T4 back to the pituitary and hypothalamus marked ⊖ feedback intact. Side notes: T3/T4 effects — raised basal metabolic rate, heat production, β-receptor sensitivity, essential for CNS development (newborn screen); T3 is the active form, mostly made from T4 in the tissues; hyperthyroid: heat intolerance, weight loss, tremor, tachycardia. Right, Iodine deficiency → goiter: the same axis but TRH up, TSH up-up (thick red arrow), the thyroid box drawn much larger and labelled enlarged — TSH is trophic, gland grows; no iodine, so T3/T4 LOW (dashed box); the feedback line is dashed and crossed out: no brake, TSH climbs. Side notes: hypothyroid picture — cold intolerance, weight gain, lethargy, slow reflexes; newborns are screened because T4 is essential for CNS development.',
      caption: 'Feedback explains gland size as well as hormone level: with no iodine there is no T4, no brake on TSH, and the overstimulated gland enlarges.',
    },
    blocks: [
      '- TRH → TSH → **T4/T3** (iodinated tyrosines; T3 active) → nuclear receptors: ↑ BMR, heat, β-sensitivity; **CNS development**',
      '- Iodine deficiency: low T4 → no feedback brake → **TSH climbs** → the gland grows — **goiter** with hypothyroidism',
    ],
  },
  {
    at: 'Adrenal Gland — Two Organs in One Capsule',
    mode: 'lead',
    figure: {
      svg: adrenalSvg,
      alt:
        'The adrenal gland as a capsule enclosing four stacked zones, outside to in. Blue cortex (steroids): zona glomerulosa — aldosterone, SALT; zona fasciculata — cortisol, SUGAR, the widest zone; zona reticularis — weak androgens, SEX. Red medulla — epinephrine from chromaffin cells, a modified sympathetic ganglion. Arrows from each zone to its notes: glomerulosa is controlled by RAAS (angiotensin II, high K⁺), not ACTH, and retains Na⁺ while excreting K⁺ and H⁺ for blood volume and pressure; fasciculata is controlled by CRH → ACTH with a morning-peaked circadian rhythm and drives gluconeogenesis, protein and fat mobilisation, vascular tone and immune suppression — the long-term stress hormone; reticularis is controlled by ACTH, weak androgens; the medulla is controlled by sympathetic preganglionic fibres (ACh, nicotinic) and releases epinephrine into blood — the short-term stress broadcast, acting in seconds, with cortisol following over hours.',
      caption: 'Salt, sugar, sex, then the medulla: three steroid zones under RAAS or ACTH, and a sympathetic ganglion that secretes epinephrine into blood.',
    },
    blocks: [
      '- **Cortex** (steroids, outside → in): aldosterone (**RAAS**, not ACTH) · cortisol (**CRH → ACTH**) · weak androgens — "salt, sugar, sex"',
      '- **Medulla** = a sympathetic ganglion: **epinephrine** in seconds; cortisol is the hours-to-days wave (fuel at the cost of immunity)',
    ],
  },
  {
    at: 'The Disorder-Localization Algorithm',
    mode: 'replace-table',
    figure: {
      svg: localizeSvg,
      alt:
        'A 2×2 grid: columns are the tropic hormone (TSH, ACTH, LH) LOW or HIGH, rows are the final hormone (T4, cortisol) LOW or HIGH. Final low + tropic high (blue): PRIMARY hypofunction — the gland itself is failing, tropic drive climbs with no reply; opposite directions. Final low + tropic low (red): SECONDARY hypofunction — pituitary or hypothalamus under-drives a healthy gland; same direction. Final high + tropic low (blue): PRIMARY hyperfunction — autonomous gland or exogenous hormone; opposite directions. Final high + tropic high (red): SECONDARY hyperfunction — pituitary tumor or ectopic tropic source; same direction. Bottom rule: opposite directions → gland (primary); same direction → pituitary (secondary).',
      caption: 'Read the pair: an intact pituitary always moves its tropic hormone opposite to the final hormone, so "same direction" points at the pituitary.',
    },
    blocks: [
      '- Final **low**, tropic **high** → primary hypofunction (gland) · final low, tropic low → secondary / central hypofunction',
      '- Final **high**, tropic **low** → primary hyperfunction (autonomous gland or exogenous hormone) · high + high → pituitary tumor / ectopic source',
      '- **Opposite directions = the gland; same direction = the pituitary** — pure negative feedback',
    ],
  },
]
