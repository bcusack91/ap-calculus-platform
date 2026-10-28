import type { DeckFigurePlacement } from './index'

/**
 * Cognition & Language (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a processing pipeline,
 * a filter at three positions, an RT-by-set-size plot, a normal curve, a
 * staircase, a timeline, a hypnogram …) — no textbook or prep-company figure
 * was copied. Curves that are not data say "illustrative" in the caption.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-cl-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/* 1 — The information-processing pipeline (lead, 1000×460) */
const box = (x: number, y: number, w: number, h: number, title: string, sub: string, titleSize = 22) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="${x + w / 2}" y="${y + 40}" font-size="${titleSize}" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
<text x="${x + w / 2}" y="${y + 72}" font-size="20" text-anchor="middle" fill="currentColor">${sub}</text>`

const pipelineSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cl-pipe')}</defs>
${box(15, 150, 150, 100, 'Input', 'sights, sounds')}
<line x1="165" y1="200" x2="196" y2="200" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cl-pipe)"/>
<g class="fig-accent">
<polygon points="200,140 330,175 330,225 200,260" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="262" y="196" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Attention</text>
<text x="262" y="220" font-size="18" text-anchor="middle" fill="currentColor">filter</text>
</g>
<line x1="330" y1="200" x2="366" y2="200" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cl-pipe)"/>
${box(365, 150, 180, 100, 'Working memory', '7 ± 2 items · ~30 s', 21)}
<path d="M485 148 C 485 92, 425 92, 425 148" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cl-pipe)"/>
<text x="455" y="82" font-size="20" text-anchor="middle" fill="currentColor">rehearsal</text>
<line x1="545" y1="185" x2="661" y2="185" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cl-pipe)"/>
<text x="603" y="172" font-size="19" text-anchor="middle" fill="currentColor">encoding</text>
<g class="fig-accent">
<defs>${ARROW('arr-cl-pipe-b')}</defs>
<line x1="665" y1="218" x2="549" y2="218" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cl-pipe-b)"/>
<text x="603" y="246" font-size="19" text-anchor="middle" fill="currentColor">retrieval</text>
</g>
${box(665, 150, 195, 100, 'Long-term memory', 'durable storage', 21)}
<line x1="860" y1="200" x2="876" y2="200" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cl-pipe)"/>
${box(880, 150, 105, 100, 'Output', 'response')}
<g class="fig-muted">
<defs>${ARROW('arr-cl-pipe-m')}</defs>
<line x1="245" y1="266" x2="245" y2="336" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#arr-cl-pipe-m)"/>
<text x="240" y="366" font-size="20" text-anchor="middle" fill="currentColor">unattended → lost</text>
<line x1="455" y1="252" x2="455" y2="336" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#arr-cl-pipe-m)"/>
<text x="455" y="366" font-size="20" text-anchor="middle" fill="currentColor">not encoded → forgotten</text>
<line x1="762" y1="252" x2="762" y2="336" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#arr-cl-pipe-m)"/>
<text x="762" y="366" font-size="20" text-anchor="middle" fill="currentColor">retrieval failure</text>
<text x="500" y="432" font-size="22" text-anchor="middle" fill="currentColor">a limited-capacity processor: every effect in this lesson is a bottleneck somewhere on this line</text>
</g>
</svg>`

/* 2 — Where the filter sits: three accounts of selective attention (lead, 1000×460) */
const filterRow = (c: number, header: string, filterX: number, labelRight = true) =>
  `<text x="280" y="${c - 58}" font-size="21" font-weight="700" fill="currentColor">${header}</text>
<g class="fig-muted">
<rect x="${filterX - 8}" y="${c - 45}" width="16" height="90" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="${labelRight ? filterX + 14 : filterX - 14}" y="${c + 52}" font-size="16" text-anchor="${labelRight ? 'start' : 'end'}" fill="currentColor">filter</text>
</g>
<rect x="520" y="${c - 32}" width="160" height="64" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="600" y="${c + 7}" font-size="20" text-anchor="middle" fill="currentColor">meaning</text>
<rect x="800" y="${c - 32}" width="150" height="64" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="875" y="${c + 7}" font-size="20" text-anchor="middle" fill="currentColor">response</text>
<g class="fig-accent">
<text x="272" y="${c - 10}" font-size="18" text-anchor="end" fill="currentColor">attended</text>
<line x1="280" y1="${c - 16}" x2="516" y2="${c - 16}" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cl-filter-b)"/>
<line x1="680" y1="${c - 16}" x2="796" y2="${c - 16}" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cl-filter-b)"/>
</g>
<text x="272" y="${c + 22}" font-size="18" text-anchor="end" fill="currentColor" class="fig-accent-2">unattended</text>`

const filterSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent"><defs>${ARROW('arr-cl-filter-b')}</defs></g>
<g class="fig-accent-2"><defs>${ARROW('arr-cl-filter-r')}</defs></g>
${filterRow(100, 'Broadbent — early filter: blocked before meaning', 430)}
<g class="fig-accent-2">
<line x1="280" y1="116" x2="402" y2="116" stroke="currentColor" stroke-width="3"/>
<text x="413" y="125" font-size="26" font-weight="700" text-anchor="middle" fill="currentColor">✕</text>
</g>
${filterRow(240, 'Treisman — attenuation: turned down, not off', 430)}
<g class="fig-accent-2">
<line x1="280" y1="256" x2="420" y2="256" stroke="currentColor" stroke-width="3"/>
<line x1="440" y1="256" x2="516" y2="256" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5" marker-end="url(#arr-cl-filter-r)"/>
<line x1="680" y1="256" x2="796" y2="256" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5" marker-end="url(#arr-cl-filter-r)"/>
<text x="738" y="284" font-size="18" text-anchor="middle" fill="currentColor">"your name"</text>
</g>
${filterRow(380, 'Late selection: analysed for meaning, filtered at the response', 740, false)}
<g class="fig-accent-2">
<line x1="280" y1="396" x2="516" y2="396" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cl-filter-r)"/>
<line x1="680" y1="396" x2="712" y2="396" stroke="currentColor" stroke-width="3"/>
<text x="723" y="405" font-size="26" font-weight="700" text-anchor="middle" fill="currentColor">✕</text>
</g>
</svg>`

/* 3 — RT by set size: serial vs parallel search (after, 1000×460) */
const rtSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cl-rt')}</defs>
<line x1="100" y1="380" x2="775" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cl-rt)"/>
<line x1="100" y1="380" x2="100" y2="50" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cl-rt)"/>
<text x="40" y="215" font-size="22" text-anchor="middle" fill="currentColor" transform="rotate(-90 40 215)">reaction time (ms)</text>
<text x="435" y="442" font-size="22" text-anchor="middle" fill="currentColor">items in the display (set size)</text>
<g class="fig-muted">
<line x1="260" y1="380" x2="260" y2="388" stroke="currentColor" stroke-width="2"/>
<line x1="420" y1="380" x2="420" y2="388" stroke="currentColor" stroke-width="2"/>
<line x1="580" y1="380" x2="580" y2="388" stroke="currentColor" stroke-width="2"/>
<line x1="740" y1="380" x2="740" y2="388" stroke="currentColor" stroke-width="2"/>
<line x1="92" y1="310" x2="100" y2="310" stroke="currentColor" stroke-width="2"/>
<line x1="92" y1="240" x2="100" y2="240" stroke="currentColor" stroke-width="2"/>
<line x1="92" y1="170" x2="100" y2="170" stroke="currentColor" stroke-width="2"/>
<line x1="92" y1="100" x2="100" y2="100" stroke="currentColor" stroke-width="2"/>
</g>
<text x="260" y="406" font-size="19" text-anchor="middle" fill="currentColor">4</text>
<text x="420" y="406" font-size="19" text-anchor="middle" fill="currentColor">8</text>
<text x="580" y="406" font-size="19" text-anchor="middle" fill="currentColor">12</text>
<text x="740" y="406" font-size="19" text-anchor="middle" fill="currentColor">16</text>
<text x="84" y="316" font-size="19" text-anchor="end" fill="currentColor">400</text>
<text x="84" y="246" font-size="19" text-anchor="end" fill="currentColor">600</text>
<text x="84" y="176" font-size="19" text-anchor="end" fill="currentColor">800</text>
<text x="84" y="106" font-size="19" text-anchor="end" fill="currentColor">1000</text>
<g class="fig-accent-2">
<line x1="180" y1="292" x2="740" y2="118" stroke="currentColor" stroke-width="3"/>
<circle cx="180" cy="292" r="5" fill="currentColor"/><circle cx="260" cy="267" r="5" fill="currentColor"/><circle cx="420" cy="217" r="5" fill="currentColor"/><circle cx="580" cy="168" r="5" fill="currentColor"/><circle cx="740" cy="118" r="5" fill="currentColor"/>
<text x="790" y="110" font-size="21" font-weight="700" fill="currentColor">Serial (controlled)</text>
<text x="790" y="136" font-size="19" fill="currentColor">RT climbs per item</text>
</g>
<g class="fig-accent">
<line x1="180" y1="310" x2="740" y2="310" stroke="currentColor" stroke-width="3"/>
<circle cx="180" cy="310" r="5" fill="currentColor"/><circle cx="260" cy="310" r="5" fill="currentColor"/><circle cx="420" cy="310" r="5" fill="currentColor"/><circle cx="580" cy="310" r="5" fill="currentColor"/><circle cx="740" cy="310" r="5" fill="currentColor"/>
<text x="790" y="304" font-size="21" font-weight="700" fill="currentColor">Parallel (automatic)</text>
<text x="790" y="330" font-size="19" fill="currentColor">flat — target pops out</text>
</g>
<g class="fig-muted">
<defs>${ARROW('arr-cl-rt-m')}</defs>
<line x1="600" y1="180" x2="600" y2="296" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#arr-cl-rt-m)"/>
<text x="612" y="244" font-size="19" fill="currentColor">practice</text>
</g>
</svg>`

/* 4 — The three judgment heuristics and their signature errors (replace-table, 560×440) */
const dotGrid = () => {
  const dots: string[] = []
  const librarians = new Set([13, 37, 52])
  for (let i = 0; i < 60; i++) {
    const cx = 200 + (i % 12) * 20
    const cy = 30 + Math.floor(i / 12) * 20
    if (librarians.has(i)) continue
    dots.push(`<circle cx="${cx}" cy="${cy}" r="6" fill="currentColor"/>`)
  }
  const blue = [...librarians].map((i) => `<circle cx="${200 + (i % 12) * 20}" cy="${30 + Math.floor(i / 12) * 20}" r="6" fill="currentColor"/>`)
  return `<g class="fig-muted">${dots.join('')}</g><g class="fig-accent">${blue.join('')}</g>`
}

const heuristicsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<line x1="10" y1="143" x2="550" y2="143" stroke="currentColor" stroke-width="1.5"/>
<line x1="10" y1="290" x2="550" y2="290" stroke="currentColor" stroke-width="1.5"/>
</g>
<text x="10" y="40" font-size="17" font-weight="700" fill="currentColor">Representativeness</text>
<text x="10" y="64" font-size="15" fill="currentColor">judge by resemblance</text>
<text x="10" y="86" font-size="15" fill="currentColor">to a prototype</text>
<g class="fig-accent-2"><text x="10" y="118" font-size="15" font-weight="700" fill="currentColor">→ base-rate neglect</text></g>
${dotGrid()}
<text x="455" y="37" font-size="15" fill="currentColor" class="fig-muted">farmers</text>
<text x="455" y="57" font-size="15" fill="currentColor" class="fig-accent">librarians</text>
<text x="373" y="132" font-size="15" text-anchor="middle" fill="currentColor">"meek and tidy" still points to a farmer</text>
<text x="10" y="185" font-size="17" font-weight="700" fill="currentColor">Availability</text>
<text x="10" y="209" font-size="15" fill="currentColor">judge by ease of recall</text>
<g class="fig-accent-2"><text x="10" y="241" font-size="15" font-weight="700" fill="currentColor">→ vivid risks</text><text x="10" y="261" font-size="15" font-weight="700" fill="currentColor">feel common</text></g>
<g class="fig-accent-2">
<rect x="230" y="172" width="34" height="90" fill="currentColor" fill-opacity="0.75"/>
<rect x="400" y="232" width="34" height="30" fill="currentColor" fill-opacity="0.75"/>
</g>
<g class="fig-muted">
<rect x="268" y="247" width="34" height="15" fill="currentColor" fill-opacity="0.75"/>
<rect x="438" y="177" width="34" height="85" fill="currentColor" fill-opacity="0.75"/>
<line x1="220" y1="262" x2="490" y2="262" stroke="currentColor" stroke-width="1.5"/>
</g>
<text x="266" y="282" font-size="15" text-anchor="middle" fill="currentColor">plane crash</text>
<text x="436" y="282" font-size="15" text-anchor="middle" fill="currentColor">car crash</text>
<text x="500" y="187" font-size="14" fill="currentColor" class="fig-accent-2">judged</text>
<text x="500" y="207" font-size="14" fill="currentColor" class="fig-muted">actual</text>
<text x="10" y="332" font-size="17" font-weight="700" fill="currentColor">Anchoring</text>
<text x="10" y="356" font-size="15" fill="currentColor">adjust from a first</text>
<text x="10" y="376" font-size="15" fill="currentColor">number — not enough</text>
<g class="fig-accent-2"><text x="10" y="408" font-size="15" font-weight="700" fill="currentColor">→ estimate drags</text><text x="10" y="428" font-size="15" font-weight="700" fill="currentColor">toward the anchor</text></g>
<line x1="210" y1="370" x2="540" y2="370" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-cl-heur-r')}</defs>
<line x1="240" y1="355" x2="240" y2="385" stroke="currentColor" stroke-width="3"/>
<text x="240" y="340" font-size="15" text-anchor="middle" fill="currentColor">anchor</text>
<line x1="246" y1="370" x2="316" y2="370" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cl-heur-r)"/>
<circle cx="325" cy="370" r="7" fill="currentColor"/>
<text x="325" y="400" font-size="15" text-anchor="middle" fill="currentColor">estimate</text>
</g>
<g class="fig-muted">
<line x1="500" y1="355" x2="500" y2="385" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/>
<text x="500" y="340" font-size="15" text-anchor="middle" fill="currentColor">true value</text>
<text x="412" y="422" font-size="14" text-anchor="middle" fill="currentColor">adjustment stops short</text>
</g>
</svg>`

/* 5 — IQ as a deviation score + the fluid/crystallized dissociation (lead, 1000×460) */
const gaussPath = (() => {
  const pts: string[] = []
  for (let s = -3; s <= 3.001; s += 0.1) {
    const x = 255 + s * 36
    const y = 330 - 220 * Math.exp(-(s * s) / 2)
    pts.push(`${pts.length ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`)
  }
  return pts.join(' ')
})()
const gaussArea = (from: number, to: number) => {
  const pts: string[] = [`M${(255 + from * 36).toFixed(1)} 330`]
  for (let s = from; s <= to + 0.001; s += 0.1) pts.push(`L${(255 + s * 36).toFixed(1)} ${(330 - 220 * Math.exp(-(s * s) / 2)).toFixed(1)}`)
  pts.push(`L${(255 + to * 36).toFixed(1)} 330 Z`)
  return pts.join(' ')
}

const intelligenceSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cl-iq')}</defs>
<text x="255" y="48" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">IQ is a deviation score: mean 100, SD 15</text>
<g class="fig-accent">
<path d="${gaussArea(-2, 2)}" fill="currentColor" fill-opacity="0.08" stroke="none"/>
<path d="${gaussArea(-1, 1)}" fill="currentColor" fill-opacity="0.18" stroke="none"/>
</g>
<path d="${gaussPath}" fill="none" stroke="currentColor" stroke-width="3"/>
<line x1="120" y1="330" x2="400" y2="330" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<line x1="219" y1="330" x2="219" y2="197" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="291" y1="330" x2="291" y2="197" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="183" y1="330" x2="183" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="327" y1="330" x2="327" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
</g>
<text x="147" y="358" font-size="19" text-anchor="middle" fill="currentColor">55</text>
<text x="183" y="358" font-size="19" text-anchor="middle" fill="currentColor">70</text>
<text x="219" y="358" font-size="19" text-anchor="middle" fill="currentColor">85</text>
<text x="255" y="358" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">100</text>
<text x="291" y="358" font-size="19" text-anchor="middle" fill="currentColor">115</text>
<text x="327" y="358" font-size="19" text-anchor="middle" fill="currentColor">130</text>
<text x="363" y="358" font-size="19" text-anchor="middle" fill="currentColor">145</text>
<text x="255" y="290" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">68%</text>
<text x="255" y="395" font-size="20" text-anchor="middle" fill="currentColor">68% within ±1 SD (85–115) · 95% within ±2 SD (70–130)</text>
<text x="255" y="425" font-size="20" text-anchor="middle" fill="currentColor" class="fig-muted">Flynn effect: raw scores rise each generation</text>
<text x="780" y="48" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Fluid vs crystallized across adulthood</text>
<line x1="600" y1="330" x2="975" y2="330" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cl-iq)"/>
<line x1="600" y1="330" x2="600" y2="70" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cl-iq)"/>
<text x="565" y="200" font-size="20" text-anchor="middle" fill="currentColor" transform="rotate(-90 565 200)">performance</text>
<text x="620" y="358" font-size="19" text-anchor="middle" fill="currentColor">20</text>
<text x="730" y="358" font-size="19" text-anchor="middle" fill="currentColor">40</text>
<text x="840" y="358" font-size="19" text-anchor="middle" fill="currentColor">60</text>
<text x="950" y="358" font-size="19" text-anchor="middle" fill="currentColor">80</text>
<text x="787" y="395" font-size="20" text-anchor="middle" fill="currentColor">age (years)</text>
<g class="fig-accent-2">
<path d="M620 110 C 700 118, 800 170, 950 275" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="690" y="100" font-size="20" font-weight="700" fill="currentColor">fluid — novel reasoning</text>
</g>
<g class="fig-accent">
<path d="M620 240 C 720 195, 800 170, 870 165 C 900 163, 930 165, 950 168" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="615" y="285" font-size="20" font-weight="700" fill="currentColor">crystallized — knowledge</text>
</g>
</svg>`

/* 6 — The structural ladder of language (replace-table, 560×440) */
const step = (i: number, name: string, example: string) => {
  const x = 10 + i * 85
  const y = 356 - i * 80
  return `<rect x="${x}" y="${y}" width="200" height="64" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="${x + 100}" y="${y + 27}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text>
<text x="${x + 100}" y="${y + 51}" font-size="15" text-anchor="middle" fill="currentColor">${example}</text>`
}

const ladderSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<defs>${ARROW('arr-cl-ladder-m')}</defs>
<text x="10" y="434" font-size="15" fill="currentColor">smallest unit</text>
<text x="550" y="22" font-size="15" text-anchor="end" fill="currentColor">largest: use in context</text>
${[0, 1, 2, 3].map((i) => `<path d="M${50 + i * 85} ${356 - i * 80} L${50 + i * 85} ${316 - i * 80} L${91 + i * 85} ${316 - i * 80}" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cl-ladder-m)"/>`).join('')}
</g>
${step(0, 'Phonemes', '/b/ vs /p/: bat / pat')}
${step(1, 'Morphemes', 'un·break·able = 3 meanings')}
${step(2, 'Syntax', 'word-order rules')}
${step(3, 'Semantics', 'what the sentence means')}
${step(4, 'Pragmatics', '"Can you pass the salt?"')}
</svg>`

/* 7 — Language acquisition timeline (lead, 1000×460) */
const mo = (m: number) => 60 + m * 22.5
const stageBox = (i: number, l1: string, l2: string, l3: string) => {
  const x = 30 + i * 190
  return `<rect x="${x}" y="40" width="175" height="110" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="${x + 87}" y="72" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text>
<text x="${x + 87}" y="102" font-size="19" text-anchor="middle" fill="currentColor">${l2}</text>
<text x="${x + 87}" y="130" font-size="19" text-anchor="middle" fill="currentColor">${l3}</text>`
}
const rangeBar = (from: number, to: number, boxIndex: number) =>
  `<rect x="${mo(from)}" y="283" width="${mo(to) - mo(from)}" height="14" rx="4" fill="currentColor" fill-opacity="0.35"/>
<line x1="${30 + boxIndex * 190 + 87}" y1="150" x2="${(mo(from) + mo(to)) / 2}" y2="281" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>`

const acquisitionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cl-acq')}</defs>
${stageBox(0, 'Cooing', '~2 months', 'vowel sounds')}
${stageBox(1, 'Babbling', '~4–6 months', 'all phonemes at first')}
${stageBox(2, 'One word', '~12 months', 'holophrastic')}
${stageBox(3, 'Two words', '~18–24 months', 'telegraphic order')}
${stageBox(4, 'Overregularized', '~3 years', '"goed", "foots"')}
<g class="fig-accent">
${rangeBar(1.5, 3, 0)}
${rangeBar(4, 10, 1)}
${rangeBar(11, 17, 2)}
${rangeBar(18, 27, 3)}
${rangeBar(30, 40, 4)}
</g>
<line x1="${mo(0)}" y1="310" x2="${mo(40) + 20}" y2="310" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cl-acq)"/>
${[0, 6, 12, 18, 24, 30, 36].map((m) => `<line x1="${mo(m)}" y1="310" x2="${mo(m)}" y2="318" stroke="currentColor" stroke-width="2"/><text x="${mo(m)}" y="340" font-size="19" text-anchor="middle" fill="currentColor">${m}</text>`).join('')}
<text x="${mo(40) + 20}" y="340" font-size="19" text-anchor="end" fill="currentColor">months</text>
<g class="fig-muted">
<text x="${mo(7)}" y="368" font-size="18" text-anchor="middle" fill="currentColor">narrows to native phonemes by ~10 mo</text>
<text x="40" y="418" font-size="20" fill="currentColor">"Goed" was never heard from an adult: the child extracted a rule and over-applied it —</text>
<text x="40" y="446" font-size="20" fill="currentColor">the classic evidence against pure imitation. Order and the deaf-infant babbling point get tested.</text>
</g>
</svg>`

/* 8 — Language in the left hemisphere (replace-table, 560×440) */
const brainSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<path d="M70 230 C 70 120, 170 60, 300 60 C 430 60, 525 120, 525 220 C 525 290, 470 325, 400 325 C 370 325, 350 355, 290 355 C 210 355, 160 330, 130 300 C 90 285, 70 265, 70 230 Z" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2"/>
<path d="M140 292 C 200 282, 270 268, 335 262" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
<text x="235" y="304" font-size="14" text-anchor="middle" fill="currentColor">lateral fissure</text>
<text x="58" y="395" font-size="15" text-anchor="start" fill="currentColor">front</text>
<text x="525" y="395" font-size="15" text-anchor="end" fill="currentColor">back</text>
<text x="300" y="46" font-size="15" text-anchor="middle" fill="currentColor">left hemisphere (schematic)</text>
</g>
<g class="fig-accent">
<rect x="120" y="155" width="110" height="50" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="175" y="186" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Broca's</text>
<text x="175" y="235" font-size="15" text-anchor="middle" fill="currentColor">production</text>
<text x="175" y="254" font-size="15" text-anchor="middle" fill="currentColor">(frontal, by motor cortex)</text>
</g>
<g class="fig-accent-2">
<rect x="340" y="240" width="130" height="50" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="405" y="271" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Wernicke's</text>
<text x="405" y="316" font-size="15" text-anchor="middle" fill="currentColor">comprehension</text>
<text x="405" y="335" font-size="15" text-anchor="middle" fill="currentColor">(superior temporal)</text>
</g>
<defs>${ARROW('arr-cl-brain')}</defs>
<path d="M205 152 C 240 85, 370 90, 400 236" fill="none" stroke="currentColor" stroke-width="3" marker-start="url(#arr-cl-brain)" marker-end="url(#arr-cl-brain)"/>
<text x="330" y="112" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">arcuate fasciculus</text>
<text x="330" y="132" font-size="15" text-anchor="middle" fill="currentColor">repetition</text>
<text x="290" y="425" font-size="16" text-anchor="middle" fill="currentColor">Broca's: nonfluent · Wernicke's: fluent, empty · arcuate: repetition</text>
</svg>`

/* 9 — A night's sleep: the hypnogram (lead, 1000×460) */
const STAGE_Y: Record<string, number> = { A: 90, R: 150, N1: 210, N2: 270, N3: 330 }
const hx = (h: number) => 260 + h * 85
const NIGHT: [number, string][] = [
  [0, 'A'], [0.1, 'N1'], [0.3, 'N2'], [0.6, 'N3'], [1.3, 'N2'], [1.45, 'R'], [1.65, 'N2'], [1.85, 'N3'], [2.6, 'N2'], [2.75, 'R'],
  [3.15, 'N2'], [3.4, 'N3'], [3.9, 'N2'], [4.1, 'R'], [4.65, 'N1'], [4.75, 'N2'], [5.3, 'R'], [6.05, 'N2'], [6.3, 'N1'], [6.45, 'R'],
  [7.4, 'A'], [7.5, 'N1'], [7.6, 'N2'], [7.95, 'A'], [8, 'A'],
]
const hypnoPath = NIGHT.map(([h, s], i) => (i === 0 ? `M${hx(h)} ${STAGE_Y[s]}` : `L${hx(h)} ${STAGE_Y[NIGHT[i - 1][1]]} L${hx(h)} ${STAGE_Y[s]}`)).join(' ')
const stageBands = (stage: string) =>
  NIGHT.slice(0, -1)
    .map(([h, s], i) => (s === stage ? `<line x1="${hx(h)}" y1="${STAGE_Y[s]}" x2="${hx(NIGHT[i + 1][0])}" y2="${STAGE_Y[s]}" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>` : ''))
    .join('')

const hypnogramSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cl-hypno')}</defs>
<g class="fig-muted">
${Object.values(STAGE_Y).map((y) => `<line x1="250" y1="${y}" x2="950" y2="${y}" stroke="currentColor" stroke-width="1" stroke-dasharray="3 6"/>`).join('')}
</g>
<text x="240" y="96" font-size="19" text-anchor="end" fill="currentColor">Awake · beta / alpha</text>
<text x="240" y="156" font-size="19" font-weight="700" text-anchor="end" fill="currentColor" class="fig-accent-2">REM · beta-like, atonia</text>
<text x="240" y="216" font-size="19" text-anchor="end" fill="currentColor">N1 · theta</text>
<text x="240" y="276" font-size="19" text-anchor="end" fill="currentColor">N2 · spindles, K-complexes</text>
<text x="240" y="336" font-size="19" font-weight="700" text-anchor="end" fill="currentColor" class="fig-accent">N3 · delta (slow-wave)</text>
<path d="${hypnoPath}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
<g class="fig-accent-2">${stageBands('R')}</g>
<g class="fig-accent">${stageBands('N3')}</g>
<line x1="${hx(0)}" y1="370" x2="${hx(8) + 25}" y2="370" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cl-hypno)"/>
${[0, 1, 2, 3, 4, 5, 6, 7, 8].map((h) => `<line x1="${hx(h)}" y1="370" x2="${hx(h)}" y2="378" stroke="currentColor" stroke-width="2"/><text x="${hx(h)}" y="400" font-size="19" text-anchor="middle" fill="currentColor">${h}</text>`).join('')}
<text x="${hx(8) + 25}" y="400" font-size="19" text-anchor="end" fill="currentColor">h</text>
<g class="fig-accent"><text x="${hx(1.6)}" y="58" font-size="20" font-weight="700" fill="currentColor">N3 dominates the first third of the night</text></g>
<g class="fig-accent-2"><text x="${hx(8)}" y="440" font-size="20" font-weight="700" text-anchor="end" fill="currentColor">REM periods lengthen toward morning →</text></g>
<g class="fig-muted">
<path d="M${hx(0)} 418 L${hx(0)} 426 L${hx(1.65)} 426 L${hx(1.65)} 418" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="${hx(0.825)}" y="446" font-size="18" text-anchor="middle" fill="currentColor">one ~90-min cycle</text>
</g>
</svg>`

export const mcatCognitionLanguageFigures: DeckFigurePlacement[] = [
  {
    at: 'The Information-Processing Frame',
    mode: 'lead',
    figure: {
      svg: pipelineSvg,
      alt:
        'A left-to-right pipeline: Input (sights, sounds) passes through an attention filter drawn as a narrowing funnel into working memory (7 plus or minus 2 items, about 30 seconds, with a rehearsal loop), then by encoding into long-term memory (durable storage), with a return arrow labelled retrieval, and finally to Output (response). Dashed drop-offs below show where information is lost: unattended input is lost at the filter, unencoded material is forgotten from working memory, and retrieval can fail from long-term memory.',
      caption: 'The information-processing frame: a limited-capacity pipeline with a bottleneck at each hand-off.',
    },
    blocks: ['- Every phenomenon in this lesson asks **where the bottleneck sits** and **what slips past it**'],
  },
  {
    at: 'Selective Attention — One Channel at a Time',
    mode: 'lead',
    figure: {
      svg: filterSvg,
      alt:
        'Three rows, one per model, each showing an attended channel (blue) and an unattended channel (red) running from the ears through a filter bar, a meaning-analysis box and a response box. Broadbent, early filter: the red unattended line is blocked at the filter before meaning. Treisman, attenuation: the red line passes the filter as a thin dashed line, reaches meaning analysis weakly, and a dashed thread labelled "your name" still reaches the response. Late selection: both lines are analysed for meaning and the red line is blocked only at a filter just before the response.',
      caption: 'Dichotic listening: shadow one ear, and ask what the other ear still gets through. The models differ in where the filter sits.',
    },
    blocks: ['- The cocktail-party effect (your own name breaks through) is the standard reason the MCAT answer is **Treisman**'],
  },
  {
    at: 'Processing Speed Signatures in Data',
    mode: 'after',
    figure: {
      svg: rtSvg,
      alt:
        'Line graph of reaction time in milliseconds against the number of items in the display, from 4 to 16. The serial, controlled search line (red) rises steadily, from about 450 ms at two items to about 950 ms at sixteen. The parallel, automatic search line (blue) is flat at about 400 ms: the target pops out regardless of set size. A dashed grey arrow labelled practice points from the rising line down to the flat one.',
      caption: 'Reaction time by set size (illustrative): a slope means serial search; a flat line means parallel, automatic processing.',
    },
    blocks: ['- A slope that flattens with practice is how a passage *measures* automaticity; Stroop intrusions are the other tell'],
  },
  {
    at: 'The Judgment Heuristics',
    mode: 'replace-table',
    figure: {
      svg: heuristicsSvg,
      alt:
        'Three panels. Representativeness: a grid of sixty dots of which only three are librarians (blue) and the rest farmers (grey), captioned that "meek and tidy" still points to a farmer — judging by resemblance to a prototype produces base-rate neglect. Availability: paired bars for plane crash and car crash, where the judged risk (red) is tall for plane crash and short for car crash while the actual frequency (grey) is the reverse — vivid risks feel common. Anchoring: a number line with an anchor at the left, a short arrow of adjustment to the estimate, and the true value far to the right — adjustment stops short of the truth.',
    },
    blocks: [
      '- **Representativeness** → base-rate neglect, conjunction fallacy ("feminist bank teller")',
      '- **Availability** → vivid, recent, heavily reported risks feel common',
      '- **Anchoring** → the first number drags the final estimate toward it',
      '- Framing: risk-averse for gains ("90% survive"), risk-seeking for losses ("10% die")',
    ],
  },
  {
    at: 'Intelligence — the Theories the MCAT Contrasts',
    mode: 'lead',
    figure: {
      svg: intelligenceSvg,
      alt:
        'Two graphs. Left: the IQ normal curve with mean 100 and standard deviation 15; the band from 85 to 115 is shaded and labelled 68 percent, and the lighter band from 70 to 130 is 95 percent. Right: performance against age from 20 to 80. Fluid intelligence (red, novel reasoning and speed) is highest in the twenties and declines steadily. Crystallized intelligence (blue, knowledge and vocabulary) rises through middle age and stays level into later adulthood.',
      caption: 'IQ as a deviation score, and the aging dissociation between fluid and crystallized intelligence (right panel illustrative).',
    },
    blocks: ["- Spearman's one **g** vs Gardner's many vs Sternberg's three — and the aging curve that separates fluid from crystallized"],
  },
  {
    at: 'The Structural Ladder',
    mode: 'replace-table',
    figure: {
      svg: ladderSvg,
      alt:
        'A staircase of five boxes rising from bottom-left to top-right. Phonemes (/b/ versus /p/ in bat and pat), then morphemes (un-break-able is three meaning units), then syntax (word-order rules), then semantics (what the sentence means), then pragmatics ("Can you pass the salt?" is a request). Grey arrows step up from each level to the next, from the smallest unit to use in context.',
    },
    blocks: [
      '- **Phonemes** distinguish meaning; **morphemes** carry it (the plural -s is one)',
      '- Syntax ≠ semantics: "colorless green ideas sleep furiously" is grammatical but empty',
      '- Pragmatics: tone, implication, register — the question that is really a request',
    ],
  },
  {
    at: 'The Acquisition Timeline',
    mode: 'lead',
    figure: {
      svg: acquisitionSvg,
      alt:
        'Five stage boxes in order above an age axis from 0 to 36 months, each tied by a dashed line to a blue bar marking its typical age: cooing (about 2 months, vowel sounds), babbling (about 4 to 6 months, all phonemes at first, narrowing to the native language by about 10 months), one word (about 12 months, holophrastic), two words (about 18 to 24 months, telegraphic order), and overregularized forms such as "goed" and "foots" (about 3 years). A note explains that "goed" was never heard from an adult, so the child extracted and over-applied a rule — evidence against pure imitation.',
      caption: 'The order of language acquisition, with typical ages (ranges vary by child).',
    },
    blocks: ['- The MCAT tests the **order** — and overregularization as the argument against Skinner'],
  },
  {
    at: 'Language in the Brain',
    mode: 'replace-table',
    figure: {
      svg: brainSvg,
      alt:
        "A schematic left hemisphere seen from the side, front to the left. Broca's area (blue box) sits in the frontal lobe near motor cortex and is labelled production. Wernicke's area (red box) sits in the superior temporal lobe behind the lateral fissure and is labelled comprehension. A two-headed arrow labelled arcuate fasciculus, repetition, arcs between them. Damage: Broca's gives nonfluent speech, Wernicke's fluent but empty speech, and arcuate damage impairs repetition only.",
    },
    blocks: [
      "- **Broca's** (left frontal): effortful, telegraphic speech; comprehension intact; aware and frustrated",
      "- **Wernicke's** (left temporal): fluent but empty, neologisms; poor comprehension; unaware",
      '- **Arcuate fasciculus**: fluent, understands, but cannot repeat (conduction aphasia)',
      '- Global aphasia = both regions',
    ],
  },
  {
    at: 'Sleep Architecture',
    mode: 'lead',
    figure: {
      svg: hypnogramSvg,
      alt:
        'A hypnogram: sleep stage against hours of sleep from 0 to 8. Stages from top to bottom are Awake (beta or alpha), REM (beta-like EEG with muscle atonia), N1 (theta), N2 (spindles and K-complexes) and N3 (delta, slow-wave). The line steps down through N1 and N2 into long N3 periods during the first third of the night, then cycles roughly every 90 minutes. N3 periods (blue) shrink and disappear after the first three cycles, while REM periods (red) grow longer with each cycle toward morning, with a brief awakening before the final rise.',
      caption: 'A night of sleep (illustrative hypnogram): ~90-minute cycles, slow-wave sleep early, REM late.',
    },
    blocks: ['- **N3 early, REM late** — this is why night terrors (N3) come early and nightmares (REM) come late'],
  },
]
