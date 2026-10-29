import type { DeckFigurePlacement } from './index'

/**
 * Science Passage Strategy (survey) (MCAT Strategy) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * This deck's subject IS reading passages and figures, so most drawings are
 * annotated example graphs and tables, one or more per lesson part: the
 * passage-timing strip and the HSP70 passage map (part 1); graph anatomy, the
 * six data shapes and an annotated data table (part 2); self-selection as a
 * confounder (part 3); the question-category map (part 4); linear vs log axes
 * with the pH shortcut (part 5); how to read a blot, a DNA gel, an ELISA and a
 * flow histogram (part 6); error-bar overlap and r = −0.45 (part 7); first
 * differences (part 8). The Research Methods / Biostatistics decks draw the
 * study-design trees, Type I/II grids and validity dartboards — not repeated.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. The only numbers shown are the lesson's own (2–3 min
 * reading, ~1 min per question, 8–9 min per passage; 78% vs 21%; the inhibitor
 * table 100/82/64/30/8; LDL −35 vs −5 mg/dL, n = 60; the ~25/15/35/25% split;
 * log 2 ≈ 0.3, log 3 ≈ 0.5, log 5 ≈ 0.7, pH 2.7; r = −0.45, p = 0.001; the
 * response series 10/13/18/26/38 and the deltas 12/8/5/3). Every other curve,
 * scatter and bar is illustrative and captioned so.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-sps-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Rounded box with a centred label (one line). */
const box = (cx: number, cy: number, w: number, h: number, label: string, size = 18, weight = 700, opacity = 0.08) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy + size * 0.36}" font-size="${size}" font-weight="${weight}" text-anchor="middle" fill="currentColor">${label}</text>`

/** Rounded box with two centred lines (bold title, smaller subtitle). */
const box2 = (cx: number, cy: number, w: number, h: number, l1: string, l2: string, s1 = 18, s2 = 15, opacity = 0.08) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy - 3}" font-size="${s1}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text><text x="${cx}" y="${cy + s2 + 5}" font-size="${s2}" text-anchor="middle" fill="currentColor">${l2}</text>`

const txt = (x: number, y: number, size: number, s: string, attrs = '') =>
  `<text x="${x}" y="${y}" font-size="${size}"${attrs} fill="currentColor">${s}</text>`
const ctext = (x: number, y: number, size: number, s: string, attrs = '') => txt(x, y, size, s, ` text-anchor="middle"${attrs}`)
const rtext = (x: number, y: number, size: number, s: string, attrs = '') => txt(x, y, size, s, ` text-anchor="end"${attrs}`)
const bold = ' font-weight="700"'
const line = (x1: number, y1: number, x2: number, y2: number, marker?: string, w = 2.5, extra = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
/** Open path (curves, elbows), optional arrowhead. */
const path = (d: string, marker?: string, w = 2.5, extra = '') =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
const dot = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`
const panel = (x: number, y: number, w: number, h: number) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>`
/** Numbered badge (a circle with a bold digit). */
const badge = (cx: number, cy: number, n: number, r = 12, size = 15) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="${cx}" y="${cy + size * 0.36}" font-size="${size}" font-weight="700" text-anchor="middle" fill="currentColor">${n}</text>`
/** Filled bar with an outline. */
const bar = (x: number, y: number, w: number, h: number, opacity = 0.25) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2"/>`
/** Vertical error bar with caps. */
const errBar = (x: number, yTop: number, yBot: number, cap = 9, w = 2.5) =>
  `${line(x, yTop, x, yBot, undefined, w)}${line(x - cap, yTop, x + cap, yTop, undefined, w)}${line(x - cap, yBot, x + cap, yBot, undefined, w)}`
/** Polyline through f(u) for u in [0, 1], mapped into a box. */
const curve = (ox: number, oy: number, W: number, H: number, f: (u: number) => number, w = 3, extra = '') => {
  const pts: string[] = []
  for (let i = 0; i <= 60; i++) {
    const u = i / 60
    pts.push(`${r1(ox + u * W)},${r1(oy - f(u) * H)}`)
  }
  return `<polyline points="${pts.join(' ')}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linejoin="round"${extra}/>`
}
const r1 = (n: number) => Math.round(n * 10) / 10

/* 1 — The passage clock: one 6-question passage on a 9-minute strip (lead, 1000×460) */
const T0 = 60
const PX = 880 / 9
const mx = (m: number) => r1(T0 + m * PX)
const clockSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sps-clock')}</defs>
${txt(40, 34, 22, 'One passage, about 8–9 minutes: read and map once, then ~1 minute a question', bold)}
<g class="fig-accent"><rect x="${mx(0)}" y="120" width="${r1(2.5 * PX)}" height="70" rx="10" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/>
${ctext(r1(mx(1.25)), 151, 20, 'Read &amp; map', bold)}${ctext(r1(mx(1.25)), 176, 16, '2–3 min')}</g>
${[0, 1, 2, 3, 4, 5]
  .map(
    (i) =>
      `<rect x="${mx(2.5 + i)}" y="120" width="${r1(PX)}" height="70" rx="10" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>${ctext(r1(mx(3 + i)), 151, 20, `Q${i + 1}`, bold)}${ctext(r1(mx(3 + i)), 176, 15, '~1 min')}`,
  )
  .join('')}
${line(T0, 212, 940, 212, undefined, 2)}
${Array.from({ length: 10 }, (_, m) => `${line(mx(m), 212, mx(m), 222, undefined, 2)}${ctext(mx(m), 244, 16, m === 9 ? '9 min' : String(m))}`).join('')}
<g class="fig-accent-2"><defs>${ARROW('arr-sps-clock-r')}</defs>${line(mx(3), 98, mx(3), 116, 'arr-sps-clock-r', 2.5)}${line(mx(3), 194, mx(3), 210, undefined, 2.5)}${ctext(mx(3), 90, 16, 'reading cap: 3:00', bold)}</g>
<g class="fig-muted">${line(mx(8), 104, mx(9), 104, undefined, 2.5)}${line(mx(8), 98, mx(8), 110, undefined, 2.5)}${line(mx(9), 98, mx(9), 110, undefined, 2.5)}</g>
${ctext(r1(mx(8.3)), 90, 16, 'total ≈ 8–9 min', bold)}
<g class="fig-muted">${panel(40, 270, 450, 172)}${panel(510, 270, 450, 172)}</g>
<g class="fig-accent">${txt(60, 302, 19, 'While you read', bold)}</g>
${txt(60, 332, 16, '✓ the research question or hypothesis')}
${txt(60, 358, 16, '✓ IV and DV — what changed, what was measured')}
${txt(60, 384, 16, '✓ key numbers, equations and units')}
${txt(60, 410, 16, '✓ figure axes and trends, before the questions')}
${txt(530, 302, 19, 'While you answer', bold)}
${txt(530, 332, 16, '✓ about a minute each — some faster, some slower')}
${txt(530, 358, 16, '✓ recall question? the answer is in the passage')}
<g class="fig-accent-2">${txt(530, 384, 16, '✗ memorizing every detail on the first read')}
${txt(530, 410, 16, '✗ getting stuck on a mechanism you can’t follow')}</g>
</svg>`

/* 2 — Mapping the HSP70 passage: four steps beside its data (lead, 1000×460) */
const step = (cy: number, n: number, title: string, detail: string) =>
  `<rect x="40" y="${cy - 36}" width="490" height="72" rx="11" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>${badge(72, cy, n, 15, 17)}${txt(102, cy - 6, 18, title, bold)}${txt(102, cy + 20, 15, detail)}`
const hY = (pct: number) => r1(370 - pct * 2.6)
const hspSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sps-hsp')}</defs>
${txt(40, 34, 22, 'Map the passage before the questions — the HSP70 heat-shock experiment', bold)}
${step(100, 1, 'Question', 'Does HSP70 protect yeast cells from heat stress?')}
${step(194, 2, 'Variables', 'IV: HSP70 present / deleted  ·  DV: % forming colonies')}
${step(288, 3, 'Comparison', 'wild-type 78% vs deletion 21% — only HSP70 differs')}
<g class="fig-accent">${step(382, 4, 'Bounded conclusion', 'HSP70 helps protect — not “the only factor,” not “in humans”')}</g>
<g class="fig-muted"><defs>${ARROW('arr-sps-hsp-m')}</defs>${line(300, 137, 300, 155, 'arr-sps-hsp-m', 2.5)}${line(300, 231, 300, 249, 'arr-sps-hsp-m', 2.5)}${line(300, 325, 300, 343, 'arr-sps-hsp-m', 2.5)}</g>
<g class="fig-muted">${panel(560, 60, 400, 380)}</g>
<g class="fig-muted">${ctext(760, 88, 15, 'held constant: 42 °C · 30 min · yeast')}
${line(660, hY(50), 940, hY(50), undefined, 1.5, ' stroke-dasharray="4 5"')}${line(660, hY(100), 940, hY(100), undefined, 1.5, ' stroke-dasharray="4 5"')}</g>
${line(660, 370, 940, 370, undefined, 2.5)}${line(660, 370, 660, hY(100) - 6, undefined, 2.5)}
${rtext(650, 375, 15, '0')}${rtext(650, hY(50) + 5, 15, '50')}${rtext(650, hY(100) + 5, 15, '100')}
<text transform="rotate(-90 604 ${hY(50)})" x="604" y="${hY(50)}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">DV: survival (% colonies)</text>
<g class="fig-accent">${bar(700, hY(78), 90, r1(78 * 2.6), 0.3)}${ctext(745, hY(78) - 10, 20, '78%', bold)}</g>
<g class="fig-accent-2">${bar(830, hY(21), 90, r1(21 * 2.6), 0.3)}${ctext(875, hY(21) - 10, 20, '21%', bold)}</g>
${ctext(745, 394, 16, 'wild-type')}${ctext(875, 394, 16, 'HSP70 deleted')}
${ctext(800, 424, 15, 'IV: the HSP70 gene', bold)}
</svg>`

/* 3 — Anatomy of a passage graph (replace-table, 560×440) */
const aX = (s: number) => r1(80 + s * 28)
const aY = (v: number) => r1(280 - v * 2.1)
const mm = (vmax: number, k: number) => (s: number) => (vmax * s) / (k + s)
const ctl = mm(95, 1.5)
const inh = mm(55, 1.5)
const SAMPLES = [1, 2, 4, 6, 8, 10]
const mmPath = (f: (s: number) => number) =>
  `<polyline points="${Array.from({ length: 51 }, (_, i) => i / 5).map((s) => `${aX(s)},${aY(f(s))}`).join(' ')}" fill="none" stroke="currentColor" stroke-width="2.5"/>`
const keyRow = (x: number, y: number, n: number, s: string) => `${badge(x + 11, y - 6, n, 11, 14)}${txt(x + 30, y, 16, s)}`
const anatomySvg = `${SVG_OPEN} viewBox="0 0 560 440">
${ctext(220, 38, 17, 'Rate vs [S], with and without inhibitor', bold)}${badge(394, 32, 1)}
${line(80, 280, 370, 280, undefined, 2.5)}${line(80, 280, 80, 62, undefined, 2.5)}
${[0, 5, 10].map((s) => `${line(aX(s), 280, aX(s), 287, undefined, 2)}${ctext(aX(s), 304, 15, String(s))}`).join('')}
${[0, 50, 100].map((v) => `${line(73, aY(v), 80, aY(v), undefined, 2)}${rtext(68, aY(v) + 5, 15, String(v))}`).join('')}
${ctext(225, 330, 16, '[Substrate] (mM)', bold)}${badge(130, 324, 2)}
<text transform="rotate(-90 26 175)" x="26" y="175" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Rate (µmol/min)</text>${badge(26, 262, 3)}
<g class="fig-accent">${mmPath(ctl)}${SAMPLES.map((s) => `${errBar(aX(s), aY(ctl(s) + 5), aY(ctl(s) - 5), 5, 2)}${dot(aX(s), aY(ctl(s)), 5)}`).join('')}</g>
<g class="fig-accent-2">${mmPath(inh)}${SAMPLES.map((s) => `${errBar(aX(s), aY(inh(s) + 4), aY(inh(s) - 4), 5, 2)}<rect x="${aX(s) - 5}" y="${aY(inh(s)) - 5}" width="10" height="10" fill="currentColor"/>`).join('')}</g>
${line(386, 80, 366, 96, undefined, 1.5)}${badge(396, 72, 5)}
${badge(250, 152, 6)}
<g class="fig-muted">${panel(388, 186, 160, 72)}</g>
<g class="fig-accent">${dot(406, 209, 5)}${txt(420, 215, 15, 'control', bold)}</g>
<g class="fig-accent-2"><rect x="401" y="230" width="10" height="10" fill="currentColor"/>${txt(420, 241, 15, '+ inhibitor', bold)}</g>
${badge(536, 170, 4)}
<g class="fig-muted">${line(20, 352, 540, 352, undefined, 1.5)}</g>
${keyRow(20, 380, 1, 'title: what was tested')}${keyRow(290, 380, 4, 'legend: which line is which')}
${keyRow(20, 406, 2, 'x-axis = IV (what’s changed)')}${keyRow(290, 406, 5, 'error bars: the spread')}
${keyRow(20, 432, 3, 'y-axis = DV (measured)')}${keyRow(290, 432, 6, 'trend: rise, then plateau')}
</svg>`

/* 4 — Six shapes to name on sight (lead, 1000×460) */
const SHAPES: Array<{ name: string; ex: string; f: (u: number) => number; extra?: string }> = [
  { name: 'Linear increase', ex: 'direct proportion: double x, double y', f: (u) => 0.06 + 0.86 * u },
  { name: 'Inverse', ex: 'y falls as x rises — rate vs [inhibitor]', f: (u) => 0.08 + 0.84 * Math.pow(1 - u, 1.4) },
  { name: 'Plateau (saturation)', ex: 'all sites full — tops out at Vₘₐₓ', f: (u) => (0.92 * u) / (0.14 + u), extra: 'vmax' },
  { name: 'Sigmoidal (S-curve)', ex: 'cooperative binding — hemoglobin, O₂', f: (u) => 0.05 + 0.87 / (1 + Math.exp(-11 * (u - 0.45))) },
  { name: 'Peak (optimum)', ex: 'enzyme activity vs pH or temperature', f: (u) => 0.08 + 0.84 * Math.exp(-Math.pow((u - 0.5) / 0.18, 2)), extra: 'peak' },
  { name: 'No relationship', ex: 'flat: changing x does not move y', f: () => 0.48, extra: 'flat' },
]
const FLAT_DOTS = [[0.06, 0.6], [0.14, 0.38], [0.22, 0.55], [0.31, 0.42], [0.4, 0.63], [0.48, 0.36], [0.57, 0.52], [0.65, 0.4], [0.73, 0.6], [0.82, 0.44], [0.9, 0.57], [0.97, 0.39]]
const shapePanel = (i: number) => {
  const s = SHAPES[i]
  const px = 40 + (i % 3) * 320
  const py = 54 + Math.floor(i / 3) * 196
  const ox = px + 24
  const oy = py + 140
  const W = 242
  const H = 96
  let extra = ''
  if (s.extra === 'vmax') extra = `<g class="fig-muted">${line(ox, r1(oy - 0.92 * H), ox + W, r1(oy - 0.92 * H), undefined, 2, ' stroke-dasharray="6 5"')}${rtext(ox + W, r1(oy - 0.92 * H) - 6, 14, 'Vₘₐₓ', bold)}</g>`
  if (s.extra === 'peak') extra = `<g class="fig-muted">${line(ox + W / 2, oy, ox + W / 2, r1(oy - 0.92 * H), undefined, 1.5, ' stroke-dasharray="4 4"')}</g>${txt(ox + W / 2 + 8, r1(oy - 0.92 * H) + 2, 14, 'optimum', bold)}`
  if (s.extra === 'flat') extra = `<g class="fig-muted">${FLAT_DOTS.map(([u, v]) => dot(r1(ox + u * W), r1(oy - v * H), 4)).join('')}</g>`
  return `<g class="fig-muted">${panel(px, py, 300, 184)}</g>
${txt(px + 16, py + 28, 18, s.name, bold)}
${line(ox, oy, ox + W + 6, oy, undefined, 2)}${line(ox, oy, ox, oy - H - 8, undefined, 2)}
${extra}<g class="fig-accent">${curve(ox, oy, W, H, s.f, 3.5, s.extra === 'flat' ? ' stroke-dasharray="9 6"' : '')}</g>
<g class="fig-muted">${txt(px + 16, py + 168, 15, s.ex)}</g>`
}
const shapesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 34, 22, 'Name the shape before you read the numbers — six patterns passages use', bold)}
${SHAPES.map((_, i) => shapePanel(i)).join('\n')}
</svg>`

/* 5 — Reading a data table in four moves: the inhibitor worked example (lead, 1000×460) */
const ROWS: Array<[number, number]> = [[0, 100], [5, 82], [10, 64], [20, 30], [40, 8]]
const rowY = (i: number) => 112 + i * 50
const tableSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sps-tab')}</defs>
${txt(40, 34, 22, 'Read a data table in four moves — the inhibitor worked example', bold)}
<rect x="50" y="60" width="450" height="52" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${ctext(135, 92, 17, '[Inhibitor] (µM)', bold)}${ctext(360, 92, 17, 'Rate (µmol/min)', bold)}
<g class="fig-accent"><rect x="50" y="112" width="450" height="50" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2.5"/></g>
${ROWS.map(([c, r], i) => `<rect x="50" y="${rowY(i)}" width="450" height="50" fill="none" stroke="currentColor" stroke-width="1.5"/>${ctext(135, rowY(i) + 32, 20, String(c), i === 0 ? bold : '')}${rtext(272, rowY(i) + 32, 20, String(r), i === 0 ? bold : '')}`).join('')}
${line(220, 60, 220, 362, undefined, 2)}
<g class="fig-accent">${ROWS.map(([, r], i) => bar(288, rowY(i) + 14, r * 1.9, 22, 0.35)).join('')}</g>
<g class="fig-muted">${line(500, 86, 528, 86, undefined, 2)}</g>${badge(545, 86, 1, 14, 16)}
${txt(570, 84, 18, 'Headers and units first', bold)}
<g class="fig-muted">${txt(570, 106, 15, 'what changed (µM) · what was measured (µmol/min)')}</g>
<g class="fig-accent">${line(500, 137, 528, 152, undefined, 2)}${badge(545, 160, 2, 14, 16)}${txt(570, 158, 18, 'Find the control row', bold)}</g>
<g class="fig-muted">${txt(570, 180, 15, '0 µM → 100: the baseline every other row is read against')}</g>
<g class="fig-accent-2">${path('M506 216 h10 v92 h-10', undefined, 2.5)}${line(516, 262, 528, 262, undefined, 2)}${badge(545, 262, 3, 14, 16)}
${txt(570, 250, 18, 'Look for the biggest change', bold)}</g>
${txt(570, 272, 15, '10 → 20 µM: 64 → 30, a drop of 34 ≈ 53%')}
<g class="fig-muted">${txt(570, 292, 15, 'estimate first: 30 is just under half of 64')}</g>
${badge(545, 342, 4, 14, 16)}${txt(570, 340, 18, 'Real, or noise?', bold)}
<g class="fig-muted">${txt(570, 362, 15, 'error bars or p-values before calling it a difference')}</g>
${box(500, 420, 920, 44, 'Trend: inverse — rate falls 100 → 8 (≈ 92%) as inhibitor rises; it shows THAT, not HOW', 16, 700, 0.06)}
</svg>`

/* 6 — “Chose the drug”: self-selection lets a confounder fake the effect (lead, 1000×460) */
const LS = 5.2
const lY = (d: number) => r1(126 - d * LS)
const ldlSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sps-ldl')}</defs>
${txt(40, 34, 22, '“Patients who chose the drug” = observational — a confounder can fake the effect', bold)}
<g class="fig-muted">${panel(40, 54, 390, 330)}</g>
${ctext(235, 82, 17, 'LDL change after 12 weeks (mg/dL)', bold)}
${line(100, 126, 410, 126, undefined, 2.5)}${line(100, 126, 100, lY(-40), undefined, 2.5)}
${[0, -20, -40].map((d) => `${line(93, lY(d), 100, lY(d), undefined, 2)}${rtext(88, lY(d) + 5, 15, d === 0 ? '0' : `−${-d}`)}`).join('')}
<g class="fig-accent">${bar(140, 126, 100, r1(35 * LS), 0.3)}${ctext(190, lY(-35) + 26, 20, '−35', bold)}</g>
<g class="fig-muted">${bar(280, 126, 100, r1(5 * LS), 0.3)}</g>${ctext(330, lY(-5) + 26, 20, '−5', bold)}
${ctext(190, 112, 15, 'took the drug')}${ctext(330, 112, 15, 'declined')}
<g class="fig-muted">${ctext(235, 372, 14, 'n = 60 each · groups self-selected, not randomized')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-sps-ldl-r')}</defs>
${box2(705, 106, 360, 70, 'Health-conscious patients', 'exercise more, eat better', 19, 15, 0.1)}
${line(610, 142, 560, 250, 'arr-sps-ldl-r', 3)}${line(800, 142, 850, 250, 'arr-sps-ldl-r', 3)}
${rtext(566, 190, 15, 'more likely to', bold)}${rtext(566, 208, 15, 'choose the drug', bold)}${txt(844, 190, 15, 'lower LDL on', bold)}${txt(844, 208, 15, 'their own', bold)}</g>
${box(555, 290, 200, 64, 'Chose the drug', 18)}${box(855, 290, 200, 64, 'LDL falls', 18)}
<g class="fig-accent"><defs>${ARROW('arr-sps-ldl-b')}</defs>${line(660, 290, 748, 290, 'arr-sps-ldl-b', 3, ' stroke-dasharray="8 6"')}${ctext(705, 278, 22, '?', bold)}</g>
<g class="fig-muted">${ctext(705, 346, 15, 'the claimed effect — or the confounder at work?')}</g>
${box(500, 422, 920, 44, 'Fix: randomize to drug vs placebo, double-blind — confounders balance, and a cause can be claimed', 16, 700, 0.06)}
</svg>`

/* 7 — Where each question's answer comes from (replace-table, 560×440) */
const CATS: Array<{ name: string; pct: number; act: string; src: 'k' | 'p' | 'both' }> = [
  { name: 'Discrete', pct: 25, act: 'know it', src: 'k' },
  { name: 'Recall', pct: 15, act: 'find it', src: 'p' },
  { name: 'Application', pct: 35, act: 'apply it', src: 'both' },
  { name: 'Reasoning', pct: 25, act: 'conclude', src: 'p' },
]
const catX = [82, 214, 346, 478]
let acc = 30
const stack = CATS.map((c, i) => {
  const w = c.pct * 5
  const s = `<rect x="${acc}" y="64" width="${w}" height="46" fill="currentColor" fill-opacity="${[0.08, 0.16, 0.3, 0.2][i]}" stroke="currentColor" stroke-width="2"/>${ctext(acc + w / 2, 93, 16, `${c.pct}%`, bold)}${ctext(acc + w / 2, 132, 15, c.name)}`
  acc += w
  return s
}).join('')
const catsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-sps-cat')}</defs>
${ctext(280, 40, 18, 'MCAT science questions, approximate share', bold)}
<g class="fig-accent">${stack}</g>
${box(150, 196, 220, 50, 'Your knowledge', 17)}
<g class="fig-accent">${box(410, 196, 220, 50, 'The passage + data', 17, 700, 0.12)}</g>
<g class="fig-muted"><defs>${ARROW('arr-sps-cat-m')}</defs>
${line(110, 221, 86, 300, 'arr-sps-cat-m', 2.5)}${line(190, 221, 334, 300, 'arr-sps-cat-m', 2.5)}</g>
<g class="fig-accent"><defs>${ARROW('arr-sps-cat-b')}</defs>
${line(360, 221, 222, 300, 'arr-sps-cat-b', 2.5)}${line(410, 221, 354, 300, 'arr-sps-cat-b', 2.5)}${line(460, 221, 474, 300, 'arr-sps-cat-b', 2.5)}</g>
${CATS.map((c, i) => `${box2(catX[i], 336, 124, 64, c.name, c.act, 16, 15, i === 2 ? 0.16 : 0.07)}`).join('')}
<g class="fig-muted">${ctext(82, 392, 14, 'no passage')}${ctext(214, 392, 14, 'go back to it')}${ctext(346, 392, 14, 'to a new case')}${ctext(478, 392, 14, 'from the results')}</g>
${box(280, 422, 520, 32, 'Predict an answer first, then match it to a choice', 15, 700, 0.06)}
</svg>`

/* 8 — Linear vs log axes, and the pH shortcut (lead, 1000×460) */
const LX0 = 60
const LW = 500
const linX = (v: number) => r1(LX0 + (v / 100) * LW)
const logX = (v: number) => r1(LX0 + (Math.log10(v) / 2) * LW)
const logSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sps-log')}</defs>
${txt(40, 34, 22, 'Linear vs log axes — on a log axis every ×10 gets the same width', bold)}
${txt(LX0, 82, 18, 'Linear: equal steps = equal additions (+10)', bold)}
${line(LX0, 120, LX0 + LW, 120, undefined, 2.5)}
${[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((v) => `${line(linX(v), 112, linX(v), 128, undefined, 2)}${ctext(linX(v), 150, 15, String(v))}`).join('')}
<g class="fig-accent">${txt(LX0, 222, 18, 'Log: equal steps = equal multiples (×10)', bold)}</g>
${line(LX0 + 0.01, 300, LX0 + LW, 300, undefined, 2.5)}
${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((v) => line(logX(v), [1, 10, 100].includes(v) ? 286 : 292, logX(v), [1, 10, 100].includes(v) ? 314 : 308, undefined, [1, 10, 100].includes(v) ? 3 : 1.5)).join('')}
${[1, 10, 100].map((v) => ctext(logX(v), 338, 17, String(v), bold)).join('')}
<g class="fig-muted">${[2, 3, 5, 20, 30, 50].map((v) => ctext(logX(v), 338, 14, String(v))).join('')}</g>
<g class="fig-accent"><defs>${ARROW('arr-sps-log-b')}</defs>
<line x1="${logX(1)}" y1="262" x2="${logX(10)}" y2="262" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-sps-log-b)" marker-end="url(#arr-sps-log-b)"/>${ctext(r1((logX(1) + logX(10)) / 2), 254, 15, '1 decade', bold)}
<line x1="${logX(10)}" y1="262" x2="${logX(100)}" y2="262" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-sps-log-b)" marker-end="url(#arr-sps-log-b)"/>${ctext(r1((logX(10) + logX(100)) / 2), 254, 15, '1 decade', bold)}</g>
<g class="fig-muted">${txt(LX0, 372, 15, 'inside a decade: 2 sits 0.3 of the way in, 3 about 0.5, 5 about 0.7')}</g>
<g class="fig-muted">${panel(610, 56, 350, 330)}</g>
${ctext(785, 88, 18, 'The pH shortcut', bold)}
${ctext(785, 128, 16, '[H⁺] = 2 × 10⁻³ M')}
${line(650, 196, 920, 196, undefined, 2.5)}
${line(650, 184, 650, 208, undefined, 3)}${line(920, 184, 920, 208, undefined, 3)}
${ctext(650, 176, 15, '10⁻³', bold)}${ctext(920, 176, 15, '10⁻²', bold)}
<g class="fig-accent">${line(r1(650 + 0.301 * 270), 184, r1(650 + 0.301 * 270), 208, undefined, 3.5)}${ctext(r1(650 + 0.301 * 270), 176, 15, '2 × 10⁻³', bold)}</g>
<g class="fig-muted">${line(650, 236, 920, 236, undefined, 2.5)}</g>
${ctext(650, 262, 16, 'pH 3.0', bold)}${ctext(920, 262, 16, '2.0', bold)}
<g class="fig-accent">${dot(r1(650 + 0.301 * 270), 236, 7)}${ctext(r1(650 + 0.301 * 270), 262, 16, '2.7', bold)}</g>
<g class="fig-accent"><defs>${ARROW('arr-sps-log-b2')}</defs>${line(r1(650 + 0.301 * 270), 210, r1(650 + 0.301 * 270), 226, 'arr-sps-log-b2', 2.5)}</g>
${ctext(785, 306, 16, 'pH = 3 − log 2 = 3 − 0.3 = 2.7', bold)}
<g class="fig-muted">${ctext(785, 332, 14, '0.3 of the way from 10⁻³ toward 10⁻²,')}${ctext(785, 352, 14, 'so pH drops 0.3 below 3')}</g>
${box(500, 422, 920, 44, 'Before reading a value off a graph, check the axis: is each gridline +10 or ×10?', 16, 700, 0.06)}
</svg>`

/* 9 — Four lab readouts and how to read them (replace-table, 560×440) */
const techSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-sps-tech')}</defs>
<g class="fig-muted">${panel(10, 10, 266, 206)}${panel(284, 10, 266, 206)}${panel(10, 224, 266, 206)}${panel(284, 224, 266, 206)}</g>
${ctext(143, 38, 18, 'Western blot', bold)}
<rect x="30" y="74" width="226" height="94" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">${ctext(55, 66, 14, 'ladder')}${[90, 112, 140].map((y) => `<rect x="42" y="${y}" width="26" height="5" fill="currentColor" fill-opacity="0.8"/>`).join('')}</g>
${ctext(110, 66, 15, 'WT', bold)}${ctext(165, 66, 15, 'A KO', bold)}${ctext(220, 66, 15, 'B KO', bold)}
<g class="fig-accent"><rect x="88" y="114" width="44" height="12" rx="3" fill="currentColor" fill-opacity="0.9"/><rect x="198" y="114" width="44" height="12" rx="3" fill="currentColor" fill-opacity="0.9"/></g>
<g class="fig-muted"><rect x="143" y="114" width="44" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/></g>
<g class="fig-muted">${ctext(143, 158, 13, 'phospho-protein C band')}</g>
${ctext(143, 198, 15, 'band = protein; darker = more', bold)}
${ctext(417, 38, 18, 'DNA gel (PCR)', bold)}
<rect x="304" y="54" width="200" height="114" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
${[340, 400, 460].map((x) => `<rect x="${x - 16}" y="60" width="32" height="7" fill="none" stroke="currentColor" stroke-width="1.5"/>`).join('')}
<g class="fig-muted">${[84, 100, 122, 152].map((y) => `<rect x="326" y="${y}" width="28" height="4" fill="currentColor" fill-opacity="0.8"/>`).join('')}</g>
<g class="fig-accent"><rect x="384" y="92" width="32" height="7" rx="2" fill="currentColor" fill-opacity="0.9"/><rect x="444" y="146" width="32" height="7" rx="2" fill="currentColor" fill-opacity="0.9"/></g>
<g class="fig-muted">${ctext(400, 116, 13, 'large')}${ctext(460, 138, 13, 'small')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-sps-tech-r')}</defs>${ctext(527, 66, 16, '−', bold)}${line(527, 74, 527, 152, 'arr-sps-tech-r', 2.5)}${ctext(527, 172, 16, '+', bold)}</g>
${ctext(417, 198, 15, 'lower band = smaller fragment', bold)}
${ctext(143, 252, 18, 'ELISA', bold)}
${line(50, 384, 240, 384, undefined, 2)}${line(50, 384, 50, 268, undefined, 2)}
<g class="fig-accent">${bar(72, 360, 40, 24, 0.3)}${bar(132, 318, 40, 66, 0.3)}${bar(192, 280, 40, 104, 0.3)}</g>
<g class="fig-muted">${ctext(92, 402, 13, 'low')}${ctext(212, 402, 13, 'high')}</g>
<text transform="rotate(-90 36 326)" x="36" y="326" font-size="13" text-anchor="middle" fill="currentColor">absorbance</text>
${ctext(143, 422, 15, 'higher absorbance = more protein', bold)}
${ctext(417, 252, 18, 'Flow cytometry', bold)}
${line(304, 384, 530, 384, undefined, 2)}${line(304, 384, 304, 268, undefined, 2)}
<g class="fig-muted">${curve(310, 384, 120, 100, (u) => Math.exp(-Math.pow((u - 0.5) / 0.2, 2)), 2.5)}${ctext(370, 276, 13, 'unstained')}</g>
<g class="fig-accent">${curve(400, 384, 120, 100, (u) => 0.9 * Math.exp(-Math.pow((u - 0.5) / 0.2, 2)), 3)}${ctext(470, 286, 13, 'stained', bold)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-sps-tech-r2')}</defs>${line(382, 320, 446, 320, 'arr-sps-tech-r2', 2.5)}</g>
<g class="fig-muted">${ctext(417, 402, 13, 'fluorescence →')}</g>
${ctext(417, 422, 15, 'shifted right = marker present', bold)}
</svg>`

/* 10 — Error bars, overlap, and r = −0.45 (lead, 1000×460) */
const eY = (v: number) => r1(300 - v * 2.2)
const SCATTER: Array<[number, number]> = [[0.24, 0.49], [0.07, 0.48], [0.81, 0.16], [0.52, 0.62], [0.38, 0.39], [0.58, 0.38], [0.48, 0.18], [0.68, 0.29], [0.69, 0.42], [0.8, 0.26], [0.04, 0.56], [0.15, 0.49], [0.16, 0.56], [0.49, 0.56], [0.6, 0.12], [0.21, 0.61], [0.74, 0.62], [0.75, 0.59], [0.08, 0.83], [0.19, 0.61], [0.82, 0.52], [0.73, 0.33], [0.19, 0.64], [0.93, 0.53], [0.82, 0.4], [0.59, 0.48], [0.55, 0.42], [0.63, 0.2], [0.82, 0.64], [0.05, 0.94], [0.42, 0.57], [0.23, 0.61], [0.93, 0.53], [0.91, 0.44]]
const pair = (px: number, a: number, b: number, ci: number, cls: string) =>
  `${line(px + 30, 300, px + 260, 300, undefined, 2)}${line(px + 30, 300, px + 30, 84, undefined, 2)}
<g class="fig-muted">${bar(px + 70, eY(a), 60, r1(a * 2.2), 0.25)}</g>${errBar(px + 100, eY(a + ci), eY(a - ci))}
<g class="${cls}">${bar(px + 160, eY(b), 60, r1(b * 2.2), 0.3)}</g>${errBar(px + 190, eY(b + ci), eY(b - ci))}
<g class="fig-muted">${ctext(px + 100, 322, 15, 'group A')}${ctext(px + 190, 322, 15, 'group B')}</g>`
const statsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 34, 22, 'Reading spread and significance off a figure', bold)}
<g class="fig-muted">${panel(40, 52, 290, 340)}${panel(355, 52, 290, 340)}${panel(670, 52, 290, 340)}</g>
${ctext(185, 80, 18, 'Bars overlap a lot', bold)}
${pair(40, 50, 58, 12, 'fig-muted')}
<g class="fig-muted"><rect x="140" y="${eY(62)}" width="90" height="${r1(eY(46) - eY(62))}" fill="currentColor" fill-opacity="0.18"/></g>
${ctext(185, 352, 16, 'could be chance —', bold)}${ctext(185, 374, 16, 'check the p-value', bold)}
${ctext(500, 80, 18, 'No overlap (95% CIs)', bold)}
${pair(355, 38, 76, 9, 'fig-accent')}
<g class="fig-accent">${ctext(500, 352, 16, 'likely a real difference', bold)}${ctext(500, 374, 16, '(p &lt; 0.05)', bold)}</g>
${ctext(815, 80, 18, 'r = −0.45, p = 0.001', bold)}
${line(700, 300, 940, 300, undefined, 2)}${line(700, 300, 700, 96, undefined, 2)}
<g class="fig-accent">${SCATTER.map(([u, v]) => `<circle cx="${r1(708 + u * 224)}" cy="${r1(296 - v * 196)}" r="5" fill="currentColor" fill-opacity="0.7"/>`).join('')}</g>
<g class="fig-accent-2">${line(712, 160, 932, 262, undefined, 2.5, ' stroke-dasharray="8 6"')}</g>
<g class="fig-muted">${ctext(820, 322, 15, 'social-media use →')}</g>
<text transform="rotate(-90 688 198)" x="688" y="198" font-size="15" text-anchor="middle" fill="currentColor">life satisfaction</text>
${ctext(815, 352, 16, 'moderate, negative, significant', bold)}
<g class="fig-accent-2">${ctext(815, 374, 16, 'an association, not a cause', bold)}</g>
${box(500, 424, 920, 44, 'First ask what the bars show — SD, SEM or a 95% CI — then whether the gap beats the spread', 16, 700, 0.06)}
</svg>`

/* 11 — First differences decide the shape (after, 1000×460) */
const ACC = [10, 13, 18, 26, 38]
const DAMP = [10, 22, 30, 35, 38]
const fX = (i: number) => 110 + i * 100
const fY = (v: number) => r1(360 - v * 7)
const poly = (vals: number[], extra = '') =>
  `<polyline points="${vals.map((v, i) => `${fX(i)},${fY(v)}`).join(' ')}" fill="none" stroke="currentColor" stroke-width="3"${extra}/>`
const dBars = (x: number, deltas: number[]) =>
  deltas.map((d, i) => `${bar(x + i * 40, r1(240 - d * 7), 28, r1(d * 7), 0.35)}${ctext(x + i * 40 + 14, 258, 15, `+${d}`, bold)}`).join('')
const diffSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 34, 22, 'Same start, same end — the first differences tell the two shapes apart', bold)}
${line(80, 360, 540, 360, undefined, 2.5)}${line(80, 360, 80, 70, undefined, 2.5)}
${[0, 10, 20, 30, 40].map((v) => `${line(73, fY(v), 80, fY(v), undefined, 2)}${rtext(68, fY(v) + 5, 15, String(v))}`).join('')}
${ACC.map((_, i) => ctext(fX(i), 382, 15, String(i + 1))).join('')}${ctext(310, 404, 16, 'condition', bold)}
<text transform="rotate(-90 30 215)" x="30" y="215" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">response (units)</text>
<g class="fig-accent-2">${poly(DAMP, ' stroke-dasharray="9 6"')}${DAMP.map((v, i) => dot(fX(i), fY(v), 5)).join('')}${rtext(225, 186, 15, 'decelerating', bold)}</g>
<g class="fig-accent">${poly(ACC)}${ACC.map((v, i) => dot(fX(i), fY(v), 6)).join('')}
${ACC.slice(1).map((v, i) => txt(r1((fX(i) + fX(i + 1)) / 2) + 12, r1((fY(v) + fY(ACC[i])) / 2) + 22, 15, `+${v - ACC[i]}`, bold)).join('')}
${txt(380, 300, 15, 'accelerating', bold)}</g>
${ACC.map((v, i) => rtext(fX(i) - 8, fY(v) - 8, 14, String(v))).join('')}
<g class="fig-muted">${panel(590, 56, 370, 340)}</g>
${ctext(775, 86, 17, 'First differences (Δ)', bold)}
<g class="fig-accent">${txt(620, 116, 15, 'Δ = 3, 5, 8, 12', bold)}${txt(620, 136, 15, 'growing', bold)}${dBars(626, [3, 5, 8, 12])}</g>
<g class="fig-accent-2">${txt(790, 116, 15, 'Δ = 12, 8, 5, 3', bold)}${txt(790, 136, 15, 'shrinking', bold)}${dBars(790, [12, 8, 5, 3])}</g>
${txt(612, 296, 15, 'growing → amplification:', bold)}${txt(612, 316, 15, 'consistent with positive feedback')}
${txt(612, 344, 15, 'shrinking → damping: challenges it', bold)}
<g class="fig-muted">${txt(612, 372, 15, 'constant Δ → linear: can’t tell either way')}</g>
${box(500, 434, 920, 40, 'Supports amplification IN THE MEASURED RANGE — test it by blocking the proposed mediator', 16, 700, 0.06)}
</svg>`

export const mcatSciencePassageStrategyFigures: DeckFigurePlacement[] = [
  {
    at: 'The 4-Minute Passage Strategy',
    mode: 'lead',
    figure: {
      svg: clockSvg,
      alt:
        'A timeline from 0 to 9 minutes for one 6-question passage. The first block, 0 to about 2.5 minutes, is “Read & map, 2–3 min” (blue). Six blocks follow, Q1 to Q6, about 1 minute each, ending near 8.5 minutes. A red dashed line at 3:00 is the reading cap; a bracket over 8–9 minutes marks the total of about 8–9 minutes. Below, two lists. While you read: the research question or hypothesis; IV and DV — what changed, what was measured; key numbers, equations and units; figure axes and trends, before the questions. While you answer: about a minute each, some faster, some slower; a recall question’s answer is in the passage; avoid (red) memorizing every detail on the first read and getting stuck on a mechanism you can’t follow.',
      caption: 'The passage clock: one read-and-map block of 2–3 minutes (never past 3:00), then about a minute a question, so about 8–9 minutes for a 6-question passage.',
    },
    blocks: [
      '- ~2–3 min to read and map, then ~1 min per question: about 8–9 min for a 6-question passage',
      '- Never read past 3 minutes — the passage stays on screen, so come back for the details',
    ],
  },
  {
    at: 'Worked Example — Mapping a Passage',
    mode: 'lead',
    figure: {
      svg: hspSvg,
      alt:
        'Left: four numbered steps joined by arrows. 1 Question: does HSP70 protect yeast cells from heat stress? 2 Variables: IV is HSP70 present or deleted; DV is the percentage of cells forming colonies. 3 Comparison: wild-type 78% vs deletion 21%, and only HSP70 differs. 4 Bounded conclusion (blue): HSP70 helps protect — not “the only factor,” not “in humans.” Right: a bar chart of the data, held constant at 42 °C, 30 min, yeast. The y-axis is the DV, survival as % colonies, 0 to 100; the x-axis is the IV, the HSP70 gene. The wild-type bar (blue) reaches 78%; the HSP70-deleted bar (red) reaches 21%.',
      caption: 'The four-step passage map for the lesson’s HSP70 example: the bars give the comparison, and the conclusion stays inside what the data show.',
    },
    blocks: [
      '- Question → variables → comparison → bounded conclusion, before you read any answer choice',
      '- 78% vs 21% supports “HSP70 helps protect,” not “the only factor” or “the same in humans”',
    ],
  },
  {
    at: 'Reading Graphs',
    mode: 'replace-table',
    figure: {
      svg: anatomySvg,
      alt:
        'An example passage graph with six numbered callouts. 1, the title: rate vs [S], with and without inhibitor — what was tested. 2, the x-axis, [Substrate] (mM) from 0 to 10: the independent variable, what was changed. 3, the y-axis, Rate (µmol/min) from 0 to 100: the dependent variable, what was measured. 4, the legend: blue circles are the control, red squares are + inhibitor. 5, error bars on each point: the spread of the data. 6, the trend: both curves rise and then level off into a plateau, the inhibitor curve at a lower level. A key under the graph repeats the six callouts.',
      caption: 'Every passage graph, read in the same order: title, x-axis (IV), y-axis (DV), legend, error bars, then the trend. Curves are illustrative.',
    },
    blocks: [
      '- x-axis: the independent variable (what was changed)',
      '- y-axis: the dependent variable (what was measured)',
      '- Trend: rising, falling, plateau or S-shaped?',
      '- Units on both axes must match the answer choices',
    ],
  },
  {
    at: 'Common Data Patterns',
    mode: 'lead',
    figure: {
      svg: shapesSvg,
      alt:
        'Six small graphs, each with an example. Linear increase: a straight rising line — direct proportion, double x and y doubles. Inverse: a curve falling as x rises — rate vs inhibitor concentration. Plateau (saturation): a curve rising steeply then flattening below a dashed Vmax line — all sites full. Sigmoidal (S-curve): flat, then a steep rise, then flat — cooperative binding, hemoglobin and O₂. Peak (optimum): a hump rising to a maximum in the middle and falling again — enzyme activity vs pH or temperature. No relationship: dots scattered around a flat dashed line — changing x does not move y.',
      caption: 'Six shapes to name on sight; the shape usually tells you the mechanism before any number does (illustrative curves).',
    },
    blocks: [
      '- Name the shape first: linear, inverse, plateau, S-curve, peak, or flat',
      '- Plateau = saturation ($V_{max}$); S-curve = cooperativity; peak = an optimum (pH, temperature)',
    ],
  },
  {
    at: 'Table Interpretation Strategy',
    mode: 'lead',
    figure: {
      svg: tableSvg,
      alt:
        'The worked example’s data table, [Inhibitor] (µM) against Rate (µmol/min): 0 → 100, 5 → 82, 10 → 64, 20 → 30, 40 → 8, with a horizontal bar in each rate cell shrinking down the table. Four numbered callouts. 1, headers and units first: what changed (µM) and what was measured (µmol/min). 2 (blue, the 0 µM row highlighted), find the control row: 0 µM → 100 is the baseline every other row is read against. 3 (red bracket on the 10 and 20 µM rows), look for the biggest change: 64 → 30, a drop of 34, about 53% — estimate first, 30 is just under half of 64. 4, real or noise: check error bars or p-values before calling it a difference. Footer: the trend is inverse, rate falls from 100 to 8 (about 92%) as inhibitor rises; the table shows that inhibition happens, not how.',
      caption: 'The lesson’s inhibitor table read in the four strategy moves: headers and units, the control row, the biggest change, then whether it is real.',
    },
    blocks: [
      '- Headers and units → control row → biggest change → is the change significant?',
      '- 10 → 20 µM: 64 → 30 is about a 53% drop — estimate first, then pick the choice near 50%',
    ],
  },
  {
    at: 'Worked Example — Critiquing',
    mode: 'lead',
    figure: {
      svg: ldlSvg,
      alt:
        'Left: a bar chart of LDL change after 12 weeks (mg/dL), n = 60 per group, groups self-selected, not randomized. The group that took the drug fell 35 mg/dL (a long blue bar downward); the group that declined fell 5 mg/dL (a short grey bar). Right: a confounder triangle. At the top, in red, health-conscious patients who exercise more and eat better. Red arrows run from it to “Chose the drug” (more likely to choose the drug) and to “LDL falls” (lower LDL on their own). Between those two boxes a dashed blue arrow with a question mark is the claimed effect — or the confounder at work? Footer: the fix is to randomize to drug vs placebo, double-blind, so confounders balance and a cause can be claimed.',
      caption: 'The lesson’s LDL example: patients chose their group, so health-consciousness can drive both the choice and the LDL drop; randomization breaks that link.',
    },
    blocks: [
      '- “Chose,” “volunteered,” “grouped by existing status” → observational: name the confounder',
      '- Randomization balances confounders; a placebo controls for the act of taking a pill',
    ],
  },
  {
    at: 'MCAT Question Categories',
    mode: 'replace-table',
    figure: {
      svg: catsSvg,
      alt:
        'Top: a single bar split into the approximate share of MCAT science questions: Discrete 25%, Recall 15%, Application 35%, Reasoning 25%. Below, two sources feed four question types. “Your knowledge” feeds Discrete (know it — no passage) and Application. “The passage + data” feeds Recall (find it — go back to it), Application (apply it — to a new case) and Reasoning (conclude — from the results). Application, the largest share, needs both sources. Footer: predict an answer first, then match it to a choice.',
      caption: 'The lesson’s approximate split, drawn as where each answer comes from: your knowledge, the passage, or both.',
    },
    blocks: [
      '- Discrete (~25%): content knowledge, no passage',
      '- Recall (~15%): the answer is in the passage — go find it',
      '- Application (~35%): passage + knowledge on a new case',
      '- Reasoning (~25%): what do the results support?',
    ],
  },
  {
    at: 'Math Shortcuts',
    mode: 'lead',
    figure: {
      svg: logSvg,
      alt:
        'Left: two axes. A linear axis from 0 to 100 with ticks every 10 — equal steps are equal additions. Below it a log axis from 1 to 100: 1, 10 and 100 are evenly spaced, each span marked “1 decade” — equal steps are equal multiples (×10). On the log axis small numbers are spread out and large ones squeezed together: 2, 3 and 5 sit far apart, 20, 30 and 50 close to 100. Inside a decade, 2 sits 0.3 of the way in, 3 about 0.5 and 5 about 0.7. Right, the pH shortcut: [H⁺] = 2 × 10⁻³ M sits 0.3 of the way from 10⁻³ toward 10⁻²; on the matching pH line from 3.0 to 2.0 it lands at 2.7. pH = 3 − log 2 = 3 − 0.3 = 2.7. Footer: before reading a value off a graph, check whether each gridline is +10 or ×10.',
      caption: 'A log axis gives every factor of 10 the same width, so log 2 ≈ 0.3 locates 2 × 10⁻³ inside its decade and gives pH 2.7 without a calculator.',
    },
    blocks: [
      '- $\\log 2 \\approx 0.3$, $\\log 3 \\approx 0.5$: locate any number inside its decade',
      '- pH $= -\\log(2 \\times 10^{-3}) = 3 - 0.3 = 2.7$; on a log axis each gridline is ×10, not +10',
    ],
  },
  {
    at: 'Common Experimental Techniques',
    mode: 'replace-table',
    figure: {
      svg: techSvg,
      alt:
        'Four panels. Western blot: a ladder lane and lanes WT, A KO and B KO for the phospho-protein C band — strong bands in WT and B KO, an empty dashed outline in A KO (the part 6 worked example); band = protein, darker = more. DNA gel (PCR): wells at the top, the negative end at the top and positive at the bottom with a red arrow showing DNA running down; a ladder, a large fragment high in one lane and a small fragment low in another; lower band = smaller fragment. ELISA: three absorbance bars rising from low to high; higher absorbance = more protein. Flow cytometry: a grey unstained peak and a blue stained peak shifted to the right along a fluorescence axis, with a red arrow showing the shift; shifted right = marker present.',
      caption: 'Four readouts Bio/Biochem passages show, and the one rule for reading each (schematic, illustrative).',
    },
    blocks: [
      '- Western blot: band = protein; darker = more',
      '- DNA gel: lower band = smaller fragment',
      '- ELISA: higher absorbance = more protein',
      '- Flow cytometry: peak shifted right = marker present',
    ],
  },
  {
    at: 'Common Statistical Concepts',
    mode: 'lead',
    figure: {
      svg: statsSvg,
      alt:
        'Three panels. First: two bars of similar height whose error bars overlap a lot (the overlap shaded) — the difference could be chance, so check the p-value. Second: two bars far apart, the second taller, whose 95% confidence-interval error bars do not overlap — likely a real difference (p < 0.05). Third: a scatter plot of life satisfaction against social-media use, a cloud of points drifting downward with a dashed red trend line — r = −0.45, p = 0.001: moderate, negative, significant, but an association, not a cause. Footer: first ask what the bars show — SD, SEM or a 95% CI — then whether the gap beats the spread.',
      caption: 'Error-bar overlap and the part 7 correlation (r = −0.45, p = 0.001) as a reader sees them; bar heights and points are illustrative.',
    },
    blocks: [
      '- $p < 0.05$ = significant: unlikely to be chance alone — not proof of a large or causal effect',
      '- $r$ from $-1$ to $+1$: sign = direction, size = strength; a CI is the range likely to hold the true value',
    ],
  },
  {
    at: 'Worked Example — First Differences',
    mode: 'after',
    figure: {
      svg: diffSvg,
      alt:
        'Left: response (units) against conditions 1 to 5. The blue solid line is the worked example, 10, 13, 18, 26, 38, with the rises +3, +5, +8, +12 labelled — accelerating. The red dashed line starts at 10 and also ends at 38 but rises by 12, 8, 5, 3 (10, 22, 30, 35, 38) — decelerating. Right: the deltas as bars. Blue bars 3, 5, 8, 12 growing; red bars 12, 8, 5, 3 shrinking. Growing deltas → amplification, consistent with positive feedback; shrinking deltas → damping, which challenges it; constant deltas → linear, which can’t tell either way. Footer: the data support amplification in the measured range — test it by blocking the proposed mediator.',
      caption: 'The worked example’s series and the lesson’s shrinking-delta contrast: both run 10 → 38, but growing deltas mean amplification and shrinking ones mean damping.',
    },
  },
]
