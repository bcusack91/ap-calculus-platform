import type { DeckFigurePlacement } from './index'

/**
 * Psychology & Behavior (survey) (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * A seven-part survey, so the figures favour the sections the dedicated decks
 * do NOT draw (the receptor → thalamus → cortex relay map, the long-term
 * memory tree, LTP at one synapse, push-vs-pull motivation and Maslow,
 * Yerkes–Dodson, the overjustification data, the emotion-theory sequences,
 * Selye's curve beside the HPA cascade, and an age-aligned strip of the stage
 * theorists). Every drawing is ours, from the concept; the one chart of real
 * results (Lepper, Greene & Nisbett 1973) uses the published percentages and
 * names the study in its caption. Curves that are not data say "illustrative".
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow's marker is defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-pb-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

const rbox = (x: number, y: number, w: number, h: number, sw = 2.5) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="none" stroke="currentColor" stroke-width="${sw}"/>`

/** Centred text by default; pass `text-anchor="start|end"` in opts to override (never emitted twice). */
const txt = (x: number, y: number, s: string, size: number, opts = '') =>
  `<text x="${x}" y="${y}" font-size="${size}"${opts.includes('text-anchor=') ? '' : ' text-anchor="middle"'} fill="currentColor"${opts ? ' ' + opts : ''}>${s}</text>`

/* 1 — Sensory transduction: receptor → thalamic relay → primary cortex, smell skipping the relay (replace-table, 560×440) */
const relayRow = (y: number, modality: string, r1: string, r2: string, nucleus: string, cortex: string) =>
  `${txt(6, y + 6, modality, 16, 'text-anchor="start" font-weight="700"')}
${rbox(76, y - 23, 176, 46, 2)}
${txt(164, y - 3, r1, 15)}
${txt(164, y + 15, r2, 14)}
<line x1="252" y1="${y}" x2="288" y2="${y}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pb-relay)"/>
${txt(330, y + 5, nucleus, 14, 'font-weight="700"')}
<line x1="370" y1="${y}" x2="398" y2="${y}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pb-relay)"/>
${rbox(400, y - 23, 152, 46, 2)}
${txt(476, y + 6, cortex, 15)}`

const transductionSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-pb-relay')}</defs>
<g class="fig-muted">
${txt(164, 22, 'receptor (transduction)', 14)}
${txt(476, 22, 'primary cortex', 14)}
</g>
<g class="fig-accent">
<rect x="290" y="40" width="80" height="272" rx="12" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${txt(330, 64, 'Thalamus', 16, 'font-weight="700"')}
</g>
${relayRow(100, 'Vision', 'rods &amp; cones', '(retina)', 'LGN', 'Occipital (V1)')}
${relayRow(160, 'Hearing', 'hair cells', '(cochlea, organ of Corti)', 'MGN', 'Temporal (A1)')}
${relayRow(220, 'Touch', 'mechanoreceptors', 'nociceptors (pain)', 'VPL', 'Parietal (S1)')}
${relayRow(280, 'Taste', 'taste buds', '(gustatory cells)', 'VPM', 'Gustatory (insula)')}
${txt(6, 366, 'Smell', 16, 'text-anchor="start" font-weight="700"')}
${rbox(76, 337, 176, 46, 2)}
${txt(164, 357, 'olfactory receptors', 15)}
${txt(164, 375, '(nasal epithelium)', 14)}
<g class="fig-accent-2">
<defs>${ARROW('arr-pb-relay-r')}</defs>
<line x1="252" y1="360" x2="398" y2="360" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-relay-r)"/>
${txt(325, 344, 'no thalamic relay', 14, 'font-weight="700"')}
</g>
${rbox(400, 337, 152, 46, 2)}
${txt(476, 357, 'olfactory bulb →', 15)}
${txt(476, 375, 'olfactory cortex', 15)}
<g class="fig-muted">${txt(280, 424, 'every sense is relayed through the thalamus — except smell', 14)}</g>
</svg>`

/* 2 — Long-term memory tree, with H.M. as the dissociation (lead, 1000×460) */
const treeNode = (cx: number, y: number, w: number, h: number, title: string, sub: string, titleSize = 22) =>
  `${rbox(cx - w / 2, y, w, h)}
${txt(cx, y + 30, title, titleSize, 'font-weight="700"')}
${txt(cx, y + 56, sub, 18)}`

const ltmTreeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pb-ltm')}</defs>
${rbox(370, 20, 260, 60)}
${txt(500, 58, 'Long-term memory', 24, 'font-weight="700"')}
<line x1="500" y1="80" x2="500" y2="108" stroke="currentColor" stroke-width="2.5"/>
<line x1="270" y1="108" x2="730" y2="108" stroke="currentColor" stroke-width="2.5"/>
<line x1="270" y1="108" x2="270" y2="136" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-ltm)"/>
<line x1="730" y1="108" x2="730" y2="136" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-ltm)"/>
${treeNode(270, 140, 300, 70, 'Explicit (declarative)', 'conscious recall · hippocampus')}
${treeNode(730, 140, 300, 70, 'Implicit (nondeclarative)', 'no conscious recall · cerebellum, basal ganglia', 22).replace('font-size="18"', 'font-size="16"')}
<line x1="270" y1="210" x2="270" y2="236" stroke="currentColor" stroke-width="2.5"/>
<line x1="140" y1="236" x2="380" y2="236" stroke="currentColor" stroke-width="2.5"/>
<line x1="140" y1="236" x2="140" y2="262" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-ltm)"/>
<line x1="380" y1="236" x2="380" y2="262" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-ltm)"/>
<line x1="730" y1="210" x2="730" y2="236" stroke="currentColor" stroke-width="2.5"/>
<line x1="620" y1="236" x2="860" y2="236" stroke="currentColor" stroke-width="2.5"/>
<line x1="620" y1="236" x2="620" y2="262" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-ltm)"/>
<line x1="860" y1="236" x2="860" y2="262" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-ltm)"/>
${treeNode(140, 266, 225, 70, 'Episodic', 'events you lived', 21)}
${treeNode(380, 266, 225, 70, 'Semantic', 'facts, word meanings', 21)}
${treeNode(620, 266, 225, 70, 'Procedural', 'skills — riding a bike', 21)}
${treeNode(860, 266, 225, 70, 'Conditioning', 'CS → CR; also priming', 21)}
<g class="fig-accent-2">
${txt(270, 388, '✕ H.M. (hippocampi removed):', 20, 'font-weight="700"')}
${txt(270, 414, 'no new episodic or semantic memories', 19)}
</g>
<g class="fig-accent">
${txt(730, 388, '✓ H.M. still learned mirror-drawing', 20, 'font-weight="700"')}
${txt(730, 414, 'without remembering the practice sessions', 19)}
</g>
</svg>`

/* 3 — Long-term potentiation at one synapse: before vs after (lead, 1000×460) */
const synapse = (cx: number, ampaXs: number[], after: boolean) => {
  const ampa = ampaXs.map((x) => `<rect x="${x}" y="186" width="22" height="28" rx="4" fill="currentColor" fill-opacity="0.85"/>`).join('')
  return `${rbox(cx - 110, 60, 220, 80)}
${txt(cx, 92, 'presynaptic terminal', 20, 'font-weight="700"')}
${txt(cx, 120, 'releases glutamate', 18)}
<circle cx="${cx - 65}" cy="162" r="5" fill="currentColor"/><circle cx="${cx - 35}" cy="168" r="5" fill="currentColor"/><circle cx="${cx + 35}" cy="168" r="5" fill="currentColor"/><circle cx="${cx + 65}" cy="162" r="5" fill="currentColor"/>
${rbox(cx - 110, 200, 220, 90)}
<g class="fig-accent">${ampa}</g>
<rect x="${cx - 17}" y="184" width="34" height="32" rx="5" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(cx, 282, after ? 'depolarized' : 'at rest', 18)}
${txt(cx - 76, 258, 'AMPA', 15, 'class="fig-accent"')}
${txt(cx + 76, 258, 'AMPA', 15, 'class="fig-accent"')}
${txt(cx, 258, after ? 'NMDA open' : 'NMDA', 15)}`
}

const epsp = (x0: number, peak: number, label: string) =>
  `<g class="fig-muted"><line x1="${x0}" y1="420" x2="${x0 + 200}" y2="420" stroke="currentColor" stroke-width="1.5"/></g>
<g class="fig-accent"><path d="M${x0 + 10} 420 C ${x0 + 60} 420, ${x0 + 70} ${peak}, ${x0 + 90} ${peak} S ${x0 + 150} 420, ${x0 + 190} 420" fill="none" stroke="currentColor" stroke-width="3"/></g>
${txt(x0 - 14, 400, 'EPSP', 17, 'text-anchor="end"')}
${txt(x0 + 100, 442, label, 17)}`

const ltpSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pb-ltp')}</defs>
${txt(240, 36, 'Before', 24, 'font-weight="700"')}
${txt(760, 36, 'After LTP', 24, 'font-weight="700"')}
${synapse(240, [164, 294], false)}
<g class="fig-accent-2">
<circle cx="240" cy="188" r="9" fill="currentColor"/>
${txt(240, 330, 'Mg²⁺ plugs the NMDA channel', 18, 'font-weight="700"')}
</g>
${txt(240, 356, '2 AMPA receptors · small response', 17)}
${epsp(150, 392, 'small EPSP')}
<line x1="470" y1="175" x2="528" y2="175" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pb-ltp)"/>
${txt(500, 128, 'pre + post', 18, 'font-weight="700"')}
${txt(500, 152, 'fire together', 18, 'font-weight="700"')}
${synapse(760, [660, 690, 808, 838], true)}
<g class="fig-accent-2">
<circle cx="880" cy="160" r="9" fill="currentColor"/>
${txt(905, 166, 'Mg²⁺ out', 16, 'text-anchor="start"')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-pb-ltp-b')}</defs>
<line x1="760" y1="200" x2="760" y2="238" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pb-ltp-b)"/>
${txt(774, 232, 'Ca²⁺', 16, 'text-anchor="start" font-weight="700"')}
${txt(760, 330, 'Ca²⁺ in → more AMPA inserted', 18, 'font-weight="700"')}
</g>
${txt(760, 356, 'same glutamate · bigger response', 17)}
${epsp(670, 330, 'larger EPSP (potentiated)')}
</svg>`

/* 4 — Motivation: drive reduction loop, push vs pull, Maslow (lead, 1000×460) */
const loopBox = (cx: number, cy: number, t1: string, t2: string) =>
  `${rbox(cx - 62, cy - 29, 124, 58)}
${txt(cx, cy - 4, t1, 19, 'font-weight="700"')}
${txt(cx, cy + 18, t2, 16)}`

const pyramidTier = (i: number, label: string) => {
  // base y=400, apex y=70, base half-width 150, centre 790; tier i = 0 (base) … 4 (top), 66 px each
  const yb = 400 - i * 66
  const yt = yb - 66
  const hw = (y: number) => (150 * (y - 70)) / 330
  return `<polygon points="${790 - hw(yb)},${yb} ${790 + hw(yb)},${yb} ${790 + hw(yt)},${yt} ${790 - hw(yt)},${yt}" fill="currentColor" fill-opacity="${0.08 + i * 0.07}" stroke="currentColor" stroke-width="2"/>
${label ? txt(790, yb - 27, label, 18, 'font-weight="700"') : ''}`
}

const motivationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pb-mot')}</defs>
${txt(175, 36, 'Drive reduction', 23, 'font-weight="700"')}
${loopBox(175, 95, 'Need', 'thirst (deficit)')}
${loopBox(284, 205, 'Drive', 'tension')}
${loopBox(175, 315, 'Behavior', 'drink')}
${loopBox(66, 205, 'Homeostasis', 'restored')}
<line x1="222" y1="124" x2="260" y2="172" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-mot)"/>
<line x1="260" y1="238" x2="222" y2="286" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-mot)"/>
<line x1="128" y1="286" x2="90" y2="238" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-mot)"/>
<g class="fig-muted">
<defs>${ARROW('arr-pb-mot-m')}</defs>
<line x1="90" y1="172" x2="128" y2="124" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#arr-pb-mot-m)"/>
${txt(175, 395, 'explains hunger and thirst;', 16)}
${txt(175, 416, 'not why we seek novelty', 16)}
</g>
${txt(480, 36, 'Push vs pull', 23, 'font-weight="700"')}
${rbox(405, 62, 150, 52)}
${txt(480, 84, 'internal need', 18, 'font-weight="700"')}
${txt(480, 105, 'hunger', 15)}
<line x1="480" y1="114" x2="480" y2="164" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pb-mot)"/>
${txt(494, 145, 'drive pushes', 17, 'text-anchor="start"')}
<circle cx="480" cy="205" r="38" fill="none" stroke="currentColor" stroke-width="2.5"/>
${txt(480, 212, 'eat', 20, 'font-weight="700"')}
<g class="fig-accent">
<defs>${ARROW('arr-pb-mot-b')}</defs>
<line x1="480" y1="243" x2="480" y2="292" stroke="currentColor" stroke-width="3" marker-end="url(#arr-pb-mot-b)"/>
${txt(494, 273, 'incentive pulls', 17, 'text-anchor="start"')}
${rbox(405, 296, 150, 52)}
${txt(480, 318, 'external reward', 18, 'font-weight="700"')}
${txt(480, 339, 'dessert when full', 15)}
</g>
<g class="fig-muted">
${txt(480, 395, 'drives push from inside;', 16)}
${txt(480, 416, 'incentives pull from outside', 16)}
</g>
${txt(790, 36, 'Maslow: lower needs first', 23, 'font-weight="700"')}
<g class="fig-accent">
${pyramidTier(0, 'Physiological')}
${pyramidTier(1, 'Safety')}
${pyramidTier(2, 'Belonging')}
${pyramidTier(3, 'Esteem')}
${pyramidTier(4, '')}
</g>
<line x1="812" y1="108" x2="836" y2="108" stroke="currentColor" stroke-width="2"/>
${txt(842, 114, 'Self-actualization', 18, 'text-anchor="start" font-weight="700"')}
<g class="fig-muted">
${txt(790, 440, 'climb the pyramid (generally) from the base', 16)}
</g>
</svg>`

/* 5 — Yerkes–Dodson: inverted U, optimum shifts with task difficulty (after, 1000×460) */
const bell = (mu: number, sigma: number, H: number) => {
  const pts: string[] = []
  for (let x = 140; x <= 880.001; x += 10) {
    const y = 380 - 18 - H * Math.exp(-(((x - mu) / sigma) ** 2))
    pts.push(`${pts.length ? 'L' : 'M'}${x.toFixed(0)} ${y.toFixed(1)}`)
  }
  return pts.join(' ')
}

const yerkesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pb-yd')}</defs>
<line x1="120" y1="380" x2="920" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pb-yd)"/>
<line x1="120" y1="380" x2="120" y2="50" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pb-yd)"/>
${txt(60, 215, 'performance', 22, 'transform="rotate(-90 60 215)"')}
${txt(520, 444, 'arousal', 22)}
${txt(140, 408, 'low arousal', 18)}
${txt(880, 408, 'high arousal', 18)}
<g class="fig-muted">
<line x1="400" y1="380" x2="400" y2="98" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="620" y1="380" x2="620" y2="78" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
</g>
<g class="fig-accent-2">
<path d="${bell(400, 170, 262)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
${txt(400, 82, 'complex / novel task', 20, 'font-weight="700"')}
${txt(400, 408, 'optimum: lower', 17)}
</g>
<g class="fig-accent">
<path d="${bell(620, 190, 282)}" fill="none" stroke="currentColor" stroke-width="3.5"/>
${txt(640, 62, 'simple / well-learned task', 20, 'font-weight="700"')}
${txt(620, 408, 'optimum: higher', 17)}
</g>
</svg>`

/* 6 — Overjustification: the mechanism (illustrative) and Lepper, Greene & Nisbett 1973 (lead, 1000×460) */
const bar = (cx: number, pct: number, label1: string, label2: string, cls: string) => {
  const h = pct * 13
  return `<g class="${cls}"><rect x="${cx - 42}" y="${380 - h}" width="84" height="${h}" rx="4" fill="currentColor" fill-opacity="0.8"/></g>
${txt(cx, 380 - h - 10, `${pct.toFixed(1)}%`, 19, 'font-weight="700"')}
${txt(cx, 404, label1, 17)}
${txt(cx, 426, label2, 17)}`
}

const overjustSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pb-oj')}</defs>
<line x1="70" y1="380" x2="470" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pb-oj)"/>
<line x1="70" y1="380" x2="70" y2="60" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pb-oj)"/>
${txt(30, 220, 'intrinsic interest', 19, 'transform="rotate(-90 30 220)"')}
<g class="fig-muted">
<rect x="190" y="70" width="140" height="310" fill="currentColor" fill-opacity="0.12"/>
<line x1="80" y1="150" x2="460" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
${txt(455, 142, 'baseline', 15, 'text-anchor="end"')}
</g>
<g class="fig-accent">
<path d="M80 150 L190 150 C 240 150, 270 200, 330 228 L450 262" fill="none" stroke="currentColor" stroke-width="3.5"/>
</g>
<g class="fig-accent-2">
${txt(260, 96, '"I draw for', 17, 'font-weight="700"')}
${txt(260, 118, 'the reward"', 17, 'font-weight="700"')}
</g>
${txt(130, 404, 'draws', 17)}
${txt(130, 426, 'for fun', 17)}
${txt(260, 404, 'expected reward', 17)}
${txt(260, 426, 'for drawing', 17)}
${txt(400, 404, 'reward', 17)}
${txt(400, 426, 'removed', 17)}
<g class="fig-accent">${txt(440, 302, 'draws less than before', 16, 'text-anchor="end" font-weight="700"')}</g>
${txt(760, 44, 'Lepper, Greene &amp; Nisbett (1973)', 21, 'font-weight="700"')}
${txt(760, 70, '% of free-play time spent drawing, 1–2 weeks later', 17)}
<line x1="580" y1="380" x2="940" y2="380" stroke="currentColor" stroke-width="2"/>
<line x1="580" y1="380" x2="580" y2="100" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<line x1="572" y1="250" x2="580" y2="250" stroke="currentColor" stroke-width="2"/>
<line x1="572" y1="120" x2="580" y2="120" stroke="currentColor" stroke-width="2"/>
</g>
${txt(564, 385, '0', 16, 'text-anchor="end"')}
${txt(564, 255, '10', 16, 'text-anchor="end"')}
${txt(564, 125, '20', 16, 'text-anchor="end"')}
${bar(650, 8.6, 'expected', 'reward', 'fig-accent-2')}
${bar(770, 18.1, 'unexpected', 'reward', 'fig-accent')}
${bar(890, 16.7, 'no', 'reward', 'fig-accent')}
</svg>`

/* 7 — Theories of emotion: four sequences, the distinguishing step in blue (replace-table, 560×440) */
const eBox = (x: number, y: number, w: number, h: number, label: string, accent = false) =>
  accent
    ? `<g class="fig-accent"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>${txt(x + w / 2, y + h / 2 + 5, label, 15, 'font-weight="700"')}</g>`
    : `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>${txt(x + w / 2, y + h / 2 + 5, label, 15)}`

const eArrow = (x1: number, y1: number, x2: number, y2: number) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pb-emo)"/>`

const emotionRow = (y0: number, name: string, tag: string) =>
  `<text x="5" y="${y0}" font-size="16" fill="currentColor"><tspan font-weight="700">${name}</tspan> — ${tag}</text>`

const emotionSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-pb-emo')}</defs>
${emotionRow(22, 'James–Lange', 'body first')}
${eBox(5, 34, 110, 44, 'Stimulus')}${eArrow(115, 56, 138, 56)}
${eBox(140, 34, 120, 44, 'bodily response', true)}${eArrow(260, 56, 283, 56)}
${eBox(285, 34, 110, 44, 'Emotion')}
<g class="fig-muted">${txt(480, 52, '"afraid because', 14)}${txt(480, 70, 'I tremble"', 14)}</g>
${emotionRow(127, 'Cannon–Bard', 'at the same time')}
${eBox(5, 146, 110, 44, 'Stimulus')}${eArrow(115, 168, 138, 168)}
${eBox(140, 146, 120, 44, 'Thalamus', true)}
${eArrow(260, 160, 283, 148)}${eArrow(260, 176, 283, 188)}
${eBox(285, 132, 120, 32, 'bodily response')}
${eBox(285, 172, 120, 32, 'Emotion')}
<g class="fig-muted">${txt(480, 164, 'independent,', 14)}${txt(480, 182, 'simultaneous', 14)}</g>
${emotionRow(232, 'Schachter–Singer', 'two-factor')}
${eBox(5, 244, 110, 44, 'Stimulus')}${eArrow(115, 266, 138, 266)}
${eBox(140, 244, 120, 44, 'Arousal')}${eArrow(260, 266, 283, 266)}
${eBox(285, 244, 120, 44, 'cognitive label', true)}${eArrow(405, 266, 428, 266)}
${eBox(430, 244, 110, 44, 'Emotion')}
${emotionRow(337, 'Lazarus', 'appraisal first')}
${eBox(5, 356, 110, 44, 'Stimulus')}${eArrow(115, 378, 138, 378)}
${eBox(140, 356, 120, 44, 'Appraisal', true)}
${eArrow(260, 370, 283, 358)}${eArrow(260, 386, 283, 398)}
${eBox(285, 342, 120, 32, 'Arousal')}
${eBox(285, 382, 120, 32, 'Emotion')}
<g class="fig-muted">${txt(480, 374, '"is it a threat?"', 14)}${txt(480, 392, 'decides both', 14)}</g>
</svg>`

/* 8 — General Adaptation Syndrome curve beside the HPA cascade (lead, 1000×460) */
const hpaBox = (y: number, title: string, sub: string) =>
  `${rbox(670, y, 280, 54)}
${txt(810, y + 23, title, 20, 'font-weight="700"')}
${txt(810, y + 45, sub, 16)}`

const gasSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-pb-gas')}</defs>
${txt(300, 40, 'General Adaptation Syndrome (Selye)', 22, 'font-weight="700"')}
<line x1="60" y1="400" x2="550" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pb-gas)"/>
<line x1="60" y1="400" x2="60" y2="70" stroke="currentColor" stroke-width="2" marker-end="url(#arr-pb-gas)"/>
${txt(28, 240, 'resistance to stress', 18, 'transform="rotate(-90 28 240)"')}
${txt(560, 406, 'time', 16, 'text-anchor="start"')}
<g class="fig-muted">
<line x1="70" y1="250" x2="540" y2="250" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
${txt(76, 242, 'normal', 15, 'text-anchor="start"')}
<line x1="180" y1="70" x2="180" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
<line x1="400" y1="70" x2="400" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
</g>
<g class="fig-accent">
<path d="M80 250 C 110 250, 110 322, 130 322 C 150 322, 160 250, 180 228 C 220 160, 260 150, 300 150 L 380 150 C 400 150, 412 172, 432 222 C 462 300, 490 380, 530 386" fill="none" stroke="currentColor" stroke-width="3.5"/>
</g>
${txt(120, 428, 'Alarm', 19, 'font-weight="700"')}
${txt(290, 428, 'Resistance', 19, 'font-weight="700"')}
${txt(470, 428, 'Exhaustion', 19, 'font-weight="700"')}
<g class="fig-accent-2">
${txt(130, 352, 'epinephrine', 16, 'font-weight="700"')}
${txt(130, 372, '(adrenal medulla)', 15)}
</g>
${txt(290, 118, 'cortisol holds the line', 16, 'font-weight="700"')}
${txt(290, 138, '(HPA axis, below)', 15)}
${txt(495, 192, 'reserves gone:', 16, 'font-weight="700"')}
${txt(495, 212, 'immunosuppression,', 15)}
${txt(495, 230, 'illness, burnout', 15)}
${txt(810, 40, 'HPA axis', 22, 'font-weight="700"')}
${hpaBox(62, 'Hypothalamus', 'releases CRH')}
<line x1="810" y1="116" x2="810" y2="154" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-gas)"/>
${txt(824, 141, 'CRH', 16, 'text-anchor="start" font-weight="700"')}
${hpaBox(158, 'Anterior pituitary', 'releases ACTH')}
<line x1="810" y1="212" x2="810" y2="250" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-gas)"/>
${txt(824, 237, 'ACTH', 16, 'text-anchor="start" font-weight="700"')}
${hpaBox(254, 'Adrenal cortex', 'releases cortisol')}
<line x1="810" y1="308" x2="810" y2="346" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-pb-gas)"/>
${txt(824, 333, 'cortisol', 16, 'text-anchor="start" font-weight="700"')}
${hpaBox(350, '↑ glucose, ↓ inflammation', 'prolonged → ↓ immunity').replace('font-size="20"', 'font-size="18"')}
<g class="fig-muted">
<defs>${ARROW('arr-pb-gas-m')}</defs>
<path d="M670 290 L640 290 L640 100 L664 100" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#arr-pb-gas-m)"/>
${txt(630, 186, 'negative', 14, 'text-anchor="end"')}
${txt(630, 204, 'feedback', 14, 'text-anchor="end"')}
</g>
</svg>`

/* 9 — The stage theorists on one age axis (lead, 1000×460) */
const AGE_TICKS: [number, number][] = [
  [0, 150],
  [1, 228],
  [3, 318],
  [6, 414],
  [12, 574],
  [18, 682],
  [40, 792],
  [65, 904],
  [90, 990],
]
const ageX = (a: number) => {
  for (let i = 1; i < AGE_TICKS.length; i++) {
    const [a0, x0] = AGE_TICKS[i - 1]
    const [a1, x1] = AGE_TICKS[i]
    if (a <= a1) return x0 + ((a - a0) / (a1 - a0)) * (x1 - x0)
  }
  return 990
}
const band = (a0: number, a1: number, y: number, h: number, l1: string, l2: string, fill: number, size = 15, dashed = false) => {
  const x0 = ageX(a0)
  const x1 = ageX(a1)
  const cx = (x0 + x1) / 2
  return `<rect x="${x0.toFixed(1)}" y="${y}" width="${(x1 - x0).toFixed(1)}" height="${h}" fill="currentColor" fill-opacity="${fill}" stroke="currentColor" stroke-width="1.5"${dashed ? ' stroke-dasharray="6 4"' : ''}/>
${l2 ? txt(cx, y + h / 2 - 2, l1, size, 'font-weight="700"') + txt(cx, y + h / 2 + 16, l2, size - 1) : txt(cx, y + h / 2 + 5, l1, size, 'font-weight="700"')}`
}
const rowLabel = (y: number, name: string, sub: string) =>
  `${txt(10, y, name, 19, 'text-anchor="start" font-weight="700"')}
${txt(10, y + 20, sub, 14, 'text-anchor="start"')}`

const stagesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${rowLabel(88, 'Piaget', 'cognitive')}
<g class="fig-accent">
${band(0, 2, 68, 44, 'Sensorimotor', '', 0.12, 15)}
${band(2, 7, 68, 44, 'Preoperational', '', 0.2, 15)}
${band(7, 11, 68, 44, 'Concrete op.', '', 0.12, 15)}
${band(11, 90, 68, 44, 'Formal operational', '', 0.2, 15)}
</g>
${rowLabel(166, 'Erikson', 'psychosocial crises')}
${band(0, 1, 140, 60, 'Trust', 'vs mistrust', 0.06, 14)}
${band(1, 3, 140, 60, 'Autonomy', 'vs shame', 0.12, 14)}
${band(3, 6, 140, 60, 'Initiative', 'vs guilt', 0.06, 14)}
${band(6, 12, 140, 60, 'Industry', 'vs inferiority', 0.12, 14)}
${band(12, 18, 140, 60, 'Identity', 'vs confusion', 0.06, 14)}
${band(18, 40, 140, 60, 'Intimacy', 'vs isolation', 0.12, 14)}
${band(40, 65, 140, 60, 'Generativity', 'vs stagnation', 0.06, 14)}
${band(65, 90, 140, 60, 'Integrity', 'vs despair', 0.12, 14)}
${rowLabel(250, 'Kohlberg', 'moral reasoning')}
<g class="fig-accent-2">
${band(0, 9, 228, 48, 'Pre-conventional', 'avoid punishment, get reward', 0.1, 15)}
${band(9, 30, 228, 48, 'Conventional', 'rules, approval, law and order', 0.18, 15)}
${band(30, 90, 228, 48, 'Post-conventional', 'principles — only some adults', 0.1, 15, true)}
</g>
${rowLabel(324, 'Vygotsky', 'sociocultural')}
<g class="fig-muted">
${band(0, 90, 304, 40, 'no stages — learning happens in the zone of proximal development, with a more skilled partner, at every age', '', 0.15, 15)}
</g>
<line x1="150" y1="380" x2="990" y2="380" stroke="currentColor" stroke-width="2"/>
${AGE_TICKS.slice(0, -1)
  .map(([a, x]) => `<line x1="${x}" y1="380" x2="${x}" y2="390" stroke="currentColor" stroke-width="2"/>${txt(x, 412, String(a), 17)}`)
  .join('')}
<g class="fig-muted">${txt(570, 446, 'age in years — axis not to scale; stage ages are approximate', 15)}</g>
</svg>`

export const mcatPsychologyBehaviorFigures: DeckFigurePlacement[] = [
  {
    at: 'Sensory Transduction Pathways',
    mode: 'replace-table',
    figure: {
      svg: transductionSvg,
      alt:
        'Five rows, one per sense, each running receptor → thalamus → primary cortex. Vision: rods and cones in the retina → LGN → occipital lobe (V1). Hearing: hair cells in the cochlea (organ of Corti) → MGN → temporal lobe (A1). Touch: mechanoreceptors and nociceptors → VPL → parietal lobe (S1). Taste: taste buds → VPM → gustatory cortex in the insula. Smell is the exception: olfactory receptors in the nasal epithelium project straight to the olfactory bulb and olfactory cortex with no thalamic relay, shown as a red arrow passing beneath the thalamus box.',
    },
    blocks: [
      '- Every sense relays through the **thalamus** — except **smell** (olfactory bulb → cortex directly)',
      '- Hearing: **place theory** (where on the basilar membrane) for high pitch; **frequency theory** (firing rate) for low pitch',
    ],
  },
  {
    at: 'Long-Term Memory Subtypes',
    mode: 'lead',
    figure: {
      svg: ltmTreeSvg,
      alt:
        'A tree. Long-term memory splits into explicit (declarative) memory — conscious recall, hippocampus — and implicit (nondeclarative) memory — no conscious recall, cerebellum and basal ganglia. Explicit splits into episodic (events you lived) and semantic (facts, word meanings). Implicit splits into procedural (skills such as riding a bike) and conditioning (CS → CR, also priming). Beneath, patient H.M., whose hippocampi were removed, could form no new episodic or semantic memories (red cross) but still learned mirror-drawing without remembering the practice sessions (blue check).',
      caption: 'The long-term memory tree. H.M. is the dissociation: explicit lost, implicit intact.',
    },
    blocks: ['- Encoding depth matters for the **explicit** branch: semantic > acoustic > visual; spaced > massed'],
  },
  {
    at: 'Biological Basis: Long-Term Potentiation',
    mode: 'lead',
    figure: {
      svg: ltpSvg,
      alt:
        'One synapse drawn twice. Before: a presynaptic terminal releases glutamate onto a resting postsynaptic membrane that has two AMPA receptors and one NMDA receptor plugged by a red magnesium ion; the EPSP trace below is a small bump. An arrow labelled "pre + post fire together" leads to the After LTP panel: the postsynaptic cell is depolarized, the magnesium ion has left the NMDA channel, calcium flows in (blue arrow), and four AMPA receptors now sit in the membrane; the same glutamate release produces a much larger EPSP.',
      caption: 'LTP at one synapse (schematic): coincident firing unblocks NMDA, Ca²⁺ enters, more AMPA receptors are inserted, the response grows.',
    },
    blocks: ['- The **NMDA receptor** is the coincidence detector: it needs glutamate **and** postsynaptic depolarization (to expel Mg²⁺)'],
  },
  {
    at: 'Theories of Motivation',
    mode: 'lead',
    figure: {
      svg: motivationSvg,
      alt:
        'Three panels. Left, drive reduction as a loop: a need (thirst, a deficit) creates a drive (tension), which produces behavior (drinking) that restores homeostasis, and a dashed arrow returns to the next need; a note says it explains hunger and thirst but not novelty-seeking. Middle, push versus pull: an internal need (hunger) pushes a drive down into the action "eat", while a blue external reward (dessert when already full) pulls the action toward it as an incentive. Right, Maslow\'s pyramid of five tiers from the base up: physiological, safety, belonging, esteem, self-actualization at the apex; lower needs are generally met first.',
      caption: 'Three ways to explain why we act: drives push, incentives pull, and Maslow orders the needs.',
    },
    blocks: ['- **Instinct** theory (fixed innate patterns) explains little in humans; **arousal** theory says we seek an optimum — next slide'],
  },
  {
    at: 'Yerkes–Dodson Law',
    mode: 'after',
    figure: {
      svg: yerkesSvg,
      alt:
        'Performance plotted against arousal from low to high. Both curves are inverted U shapes. The red curve for a complex or novel task peaks at lower arousal and falls off sooner; the blue curve for a simple or well-learned task peaks at higher arousal, further to the right. Dashed lines drop from each peak to the axis, labelled "optimum: lower" for the complex task and "optimum: higher" for the simple task.',
      caption: 'Yerkes–Dodson (illustrative curves): moderate arousal is best, and the optimum sits lower for hard tasks than for easy ones.',
    },
    blocks: ['- Passage tell: a skilled performer who **chokes** under pressure is past the peak of the complex-task curve'],
  },
  {
    at: 'Intrinsic vs. Extrinsic Motivation',
    mode: 'lead',
    figure: {
      svg: overjustSvg,
      alt:
        'Left, an illustrative line of intrinsic interest over three phases: a child who draws for fun starts at a high baseline; during a phase in which an expected reward is given for drawing, the thought "I draw for the reward" appears and interest slides downward; after the reward is removed the line continues below the dashed baseline, labelled "draws less than before". Right, a bar chart of Lepper, Greene and Nisbett (1973): percentage of free-play time spent drawing one to two weeks later was 8.6 percent for children promised an expected reward (red), 18.1 percent for an unexpected reward and 16.7 percent for no reward (blue).',
      caption: 'The overjustification effect. Left panel illustrative; right panel: Lepper, Greene & Nisbett (1973), free-play drawing time by condition.',
    },
    blocks: ['- Only the **expected** reward hurt — the child re-attributes the activity to the reward, and when it stops, so does the drawing'],
  },
  {
    at: 'Theories of Emotion',
    mode: 'replace-table',
    figure: {
      svg: emotionSvg,
      alt:
        'Four rows of boxes and arrows, each starting from a stimulus, with the step that defines each theory highlighted in blue. James–Lange, body first: stimulus → bodily response → emotion ("afraid because I tremble"). Cannon–Bard, at the same time: stimulus → thalamus, which fans out simultaneously to bodily response and emotion. Schachter–Singer two-factor: stimulus → arousal → cognitive label → emotion. Lazarus, appraisal first: stimulus → appraisal ("is it a threat?"), which then produces both arousal and emotion.',
    },
    blocks: [
      '- **James–Lange**: the body reacts, then you feel — bodily state comes first',
      '- **Cannon–Bard**: thalamus fires arousal and emotion together, independently',
      '- **Schachter–Singer**: same arousal + a different **label** = a different emotion',
      '- **Lazarus**: **appraisal** comes first and shapes both arousal and feeling',
    ],
  },
  {
    at: 'General Adaptation Syndrome',
    mode: 'lead',
    figure: {
      svg: gasSvg,
      alt:
        'Left, Selye\'s curve of resistance to stress over time, with a dashed normal level. In the alarm stage resistance first dips below normal (epinephrine from the adrenal medulla), then in the resistance stage it climbs above normal and holds a plateau (cortisol holds the line, via the HPA axis), and in the exhaustion stage it falls below normal as reserves run out — immunosuppression, illness, burnout. Right, the HPA cascade as four stacked boxes: hypothalamus releases CRH → anterior pituitary releases ACTH → adrenal cortex releases cortisol → raised glucose and reduced inflammation, with reduced immunity when prolonged; a dashed negative-feedback arrow returns from cortisol to the hypothalamus.',
      caption: 'Selye\'s three stages (curve illustrative) and the HPA axis that sustains the resistance stage.',
    },
    blocks: [
      '- **Alarm** = sympathetic + adrenal **medulla** → epinephrine (seconds); **Resistance** = HPA + adrenal **cortex** → cortisol (minutes to weeks)',
    ],
  },
  {
    at: 'Comparing the Stage Theorists',
    mode: 'lead',
    figure: {
      svg: stagesSvg,
      alt:
        'Four rows of stage bands over one age axis from birth to old age (not to scale). Piaget, cognitive: sensorimotor 0–2, preoperational 2–7, concrete operational 7–11, formal operational 11 and up. Erikson, psychosocial crises: trust vs mistrust 0–1, autonomy vs shame 1–3, initiative vs guilt 3–6, industry vs inferiority 6–12, identity vs confusion 12–18, intimacy vs isolation 18–40, generativity vs stagnation 40–65, integrity vs despair 65 and up. Kohlberg, moral reasoning: pre-conventional in childhood (avoid punishment, get reward), conventional from about age 9 (rules, approval, law and order), and a dashed post-conventional band (principles) reached only by some adults. Vygotsky, sociocultural: no stages — learning happens in the zone of proximal development, with a more skilled partner, at every age.',
      caption: 'The stage theorists on one age axis (ages approximate; Kohlberg levels follow reasoning, not age).',
    },
    blocks: ["- Erikson's stages are **crises**, Kohlberg's are **justifications**: the same moral choice can be made at any Kohlberg level"],
  },
]
