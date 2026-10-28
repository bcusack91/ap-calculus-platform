import type { DeckFigurePlacement } from './index'

/**
 * Sensation & Perception (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a bottom-up / top-down
 * flow, a psychometric curve, two overlapping distributions with a criterion,
 * a crossing at the chiasm …) — no textbook or prep-company figure was copied.
 * Curves that are not data say "illustrative" in the caption.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-sp-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

const r1 = (n: number) => Math.round(n * 10) / 10

/** Bell curve as polyline points: centre c, spread s, height h above baseline `base`, drawn over ±span. */
const bell = (c: number, s: number, h: number, base: number, span: number, step = 5, xMin = c - span) => {
  const pts: string[] = []
  if (xMin > c - span) pts.push(`${xMin},${base}`) // clipped start: close the fill along the baseline
  for (let x = Math.max(xMin, c - span); x <= c + span; x += step) {
    const z = (x - c) / s
    pts.push(`${x},${r1(base - h * Math.exp(-(z * z) / 2))}`)
  }
  return pts.join(' ')
}

/** Sine wave polyline from x0 to x1 about centre line cy. */
const sine = (x0: number, x1: number, cy: number, amp: number, period: number, step = 2) => {
  const pts: string[] = []
  for (let x = x0; x <= x1; x += step) pts.push(`${x},${r1(cy - amp * Math.sin(((x - x0) / period) * 2 * Math.PI))}`)
  return pts.join(' ')
}

/* 1 — Sensation vs. perception: the bottom-up / top-down flow (lead, 1000×460) */
const flowBox = (x: number, w: number, lines: string[]) =>
  `<rect x="${x}" y="200" width="${w}" height="70" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>` +
  (lines.length === 1
    ? `<text x="${x + w / 2}" y="243" font-size="20" text-anchor="middle" fill="currentColor">${lines[0]}</text>`
    : `<text x="${x + w / 2}" y="229" font-size="20" text-anchor="middle" fill="currentColor">${lines[0]}</text><text x="${x + w / 2}" y="257" font-size="20" text-anchor="middle" fill="currentColor">${lines[1]}</text>`)

const sensationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sp-flow')}</defs>
${flowBox(20, 150, ['Physical', 'stimulus'])}
${flowBox(205, 190, ['Receptor', 'transduction'])}
${flowBox(430, 160, ['Neural signal'])}
${flowBox(625, 210, ['Brain organizes', '&amp; interprets'])}
${flowBox(870, 115, ['Percept'])}
<line x1="170" y1="235" x2="201" y2="235" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-flow)"/>
<line x1="395" y1="235" x2="426" y2="235" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-flow)"/>
<line x1="590" y1="235" x2="621" y2="235" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-flow)"/>
<line x1="835" y1="235" x2="866" y2="235" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-flow)"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-sp-flow-r')}</defs>
<rect x="550" y="30" width="360" height="52" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="730" y="63" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Expectations · context · experience</text>
<line x1="730" y1="82" x2="730" y2="196" stroke="currentColor" stroke-width="3" marker-end="url(#arr-sp-flow-r)"/>
<path d="M625 292 L625 308 L985 308 L985 292" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="805" y="340" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">PERCEPTION — top-down</text>
</g>
<g class="fig-accent">
<path d="M20 292 L20 308 L590 308 L590 292" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="305" y="340" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">SENSATION — bottom-up (data-driven)</text>
</g>
<g class="fig-muted">
<text x="500" y="405" font-size="20" text-anchor="middle" fill="currentColor">one stimulus can give different percepts (ambiguous figures)</text>
<text x="500" y="437" font-size="20" text-anchor="middle" fill="currentColor">different stimuli can give the same percept (constancies)</text>
</g>
</svg>`

/* 2 — Psychophysics: the psychometric function and Weber's law (lead, 1000×460) */
const logisticPts = (() => {
  const pts: string[] = []
  for (let x = 90; x <= 470; x += 10) pts.push(`${x},${r1(380 - 310 / (1 + Math.exp(-(x - 260) / 32)))}`)
  return pts.join(' ')
})()

const psychophysicsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sp-psy')}</defs>
<text x="285" y="40" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">Absolute threshold</text>
<text x="790" y="40" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">Weber's law: ΔI / I = k</text>
<line x1="90" y1="380" x2="490" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-sp-psy)"/>
<line x1="90" y1="380" x2="90" y2="56" stroke="currentColor" stroke-width="2" marker-end="url(#arr-sp-psy)"/>
<text x="82" y="77" font-size="20" text-anchor="end" fill="currentColor">100%</text>
<text x="82" y="232" font-size="20" text-anchor="end" fill="currentColor">50%</text>
<text x="82" y="385" font-size="20" text-anchor="end" fill="currentColor">0</text>
<text x="28" y="220" font-size="20" text-anchor="middle" fill="currentColor" transform="rotate(-90 28 220)">trials detected</text>
<text x="290" y="444" font-size="20" text-anchor="middle" fill="currentColor">stimulus intensity</text>
<g class="fig-muted">
<line x1="90" y1="225" x2="260" y2="225" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<line x1="260" y1="225" x2="260" y2="380" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<text x="165" y="330" font-size="20" text-anchor="middle" fill="currentColor">subliminal</text>
</g>
<g class="fig-accent">
<polyline points="${logisticPts}" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="260" cy="225" r="6" fill="currentColor"/>
<text x="260" y="408" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">absolute threshold</text>
</g>
<line x1="600" y1="380" x2="990" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-sp-psy)"/>
<line x1="600" y1="380" x2="600" y2="56" stroke="currentColor" stroke-width="2" marker-end="url(#arr-sp-psy)"/>
<text x="556" y="220" font-size="20" text-anchor="middle" fill="currentColor" transform="rotate(-90 556 220)">JND (ΔI)</text>
<text x="795" y="444" font-size="20" text-anchor="middle" fill="currentColor">baseline intensity (I)</text>
<g class="fig-muted">
<line x1="680" y1="380" x2="680" y2="317" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6"/>
<line x1="600" y1="317" x2="680" y2="317" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6"/>
<line x1="920" y1="380" x2="920" y2="128" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6"/>
<line x1="600" y1="128" x2="920" y2="128" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6"/>
</g>
<text x="680" y="406" font-size="20" text-anchor="middle" fill="currentColor">I</text>
<text x="920" y="406" font-size="20" text-anchor="middle" fill="currentColor">4I</text>
<text x="592" y="323" font-size="20" text-anchor="end" fill="currentColor">ΔI</text>
<text x="592" y="134" font-size="20" text-anchor="end" fill="currentColor">4ΔI</text>
<g class="fig-accent">
<line x1="600" y1="380" x2="940" y2="112" stroke="currentColor" stroke-width="3"/>
<circle cx="680" cy="317" r="6" fill="currentColor"/>
<circle cx="920" cy="128" r="6" fill="currentColor"/>
</g>
<text x="975" y="292" font-size="20" text-anchor="end" fill="currentColor">4× the load → 4× the JND</text>
</svg>`

/* 3 — Signal detection: two distributions, one criterion, four outcomes (replace-table, 560×440) */
const sdtSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<line x1="40" y1="190" x2="520" y2="190" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<polyline points="${bell(215, 45, 130, 190, 150)}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<line x1="215" y1="60" x2="215" y2="190" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<text x="190" y="162" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">noise</text>
<text x="277" y="214" font-size="16" text-anchor="end" fill="currentColor">respond “no”</text>
<text x="293" y="214" font-size="16" fill="currentColor">respond “yes”</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-sp-sdt-b')}</defs>
<polyline points="${bell(335, 45, 130, 190, 150)}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<line x1="335" y1="60" x2="335" y2="190" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<text x="362" y="162" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">signal</text>
<line x1="218" y1="105" x2="332" y2="105" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-sp-sdt-b)" marker-end="url(#arr-sp-sdt-b)"/>
<text x="262" y="97" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">d′</text>
</g>
<g class="fig-accent-2">
<line x1="285" y1="40" x2="285" y2="190" stroke="currentColor" stroke-width="3"/>
<text x="293" y="46" font-size="17" font-weight="700" fill="currentColor">criterion (β)</text>
</g>
<text x="250" y="262" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Signal present</text>
<text x="450" y="262" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Signal absent</text>
<text x="80" y="319" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Says “yes”</text>
<text x="80" y="399" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Says “no”</text>
<g class="fig-accent">
<rect x="160" y="276" width="180" height="74" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<rect x="360" y="356" width="190" height="74" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="250" y="320" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Hit</text>
<text x="455" y="400" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Correct rejection</text>
</g>
<g class="fig-accent-2">
<rect x="360" y="276" width="190" height="74" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<rect x="160" y="356" width="180" height="74" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="455" y="320" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">False alarm</text>
<text x="250" y="400" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Miss</text>
</g>
</svg>`

/* 4 — Sensory adaptation vs habituation (lead, 1000×460) */
const habBar = (x: number, h: number, cls?: string) =>
  `<g${cls ? ` class="${cls}"` : ''}><rect x="${x - 12}" y="${290 - h}" width="24" height="${h}" rx="3" fill="currentColor" fill-opacity="0.85"/><rect x="${x - 12}" y="302" width="24" height="14" rx="2" fill="currentColor" fill-opacity="${cls ? 0.85 : 0.35}"/></g>`

const adaptationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sp-adapt')}</defs>
<g class="fig-muted">
<rect x="20" y="10" width="460" height="440" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="520" y="10" width="460" height="440" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
</g>
<text x="250" y="46" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">Sensory adaptation</text>
<text x="750" y="46" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">Habituation</text>
<g class="fig-muted">
<text x="250" y="74" font-size="20" text-anchor="middle" fill="currentColor">receptor-level · unlearned</text>
<text x="750" y="74" font-size="20" text-anchor="middle" fill="currentColor">central · learned · shows dishabituation</text>
</g>
<line x1="70" y1="290" x2="470" y2="290" stroke="currentColor" stroke-width="2" marker-end="url(#arr-sp-adapt)"/>
<line x1="70" y1="290" x2="70" y2="96" stroke="currentColor" stroke-width="2" marker-end="url(#arr-sp-adapt)"/>
<text x="46" y="195" font-size="20" text-anchor="middle" fill="currentColor" transform="rotate(-90 46 195)">response</text>
<g class="fig-accent">
<path d="M70 288 L130 288 L130 112 C 150 112, 180 205, 240 242 C 300 272, 380 282, 460 284" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="330" y="226" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">response fades</text>
</g>
<g class="fig-muted">
<path d="M70 372 L130 372 L130 338 L460 338" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="295" y="402" font-size="20" text-anchor="middle" fill="currentColor">stimulus held constant</text>
<text x="465" y="432" font-size="20" text-anchor="end" fill="currentColor">time →</text>
</g>
<line x1="560" y1="290" x2="975" y2="290" stroke="currentColor" stroke-width="2"/>
<text x="546" y="195" font-size="20" text-anchor="middle" fill="currentColor" transform="rotate(-90 546 195)">response</text>
${habBar(590, 160)}${habBar(640, 110)}${habBar(690, 76)}${habBar(740, 52)}${habBar(790, 38)}
${habBar(850, 130, 'fig-accent-2')}
${habBar(905, 70)}${habBar(955, 46)}
<g class="fig-accent-2">
<text x="850" y="142" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">dishabituation</text>
<text x="850" y="345" font-size="20" text-anchor="middle" fill="currentColor">novel</text>
</g>
<g class="fig-muted">
<text x="690" y="345" font-size="20" text-anchor="middle" fill="currentColor">same stimulus, repeated</text>
<text x="770" y="402" font-size="20" text-anchor="middle" fill="currentColor">presentations →</text>
</g>
</svg>`

/* 5 — The visual pathway: fields, chiasm, LGN, V1 (lead, 1000×460) */
const visualPathwaySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent">
<defs>${ARROW('arr-sp-vis-b')}</defs>
<rect x="200" y="18" width="300" height="34" rx="6" fill="currentColor" fill-opacity="0.2"/>
<path d="M380 110 A40 40 0 0 1 380 190 Z" fill="currentColor" fill-opacity="0.3"/>
<path d="M620 110 A40 40 0 0 0 620 190 Z" fill="currentColor" fill-opacity="0.3"/>
<path d="M398 188 C 440 240, 560 250, 650 310" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-sp-vis-b)"/>
<path d="M642 188 C 660 240, 720 260, 745 310" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-sp-vis-b)"/>
<line x1="700" y1="352" x2="700" y2="390" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-sp-vis-b)"/>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-sp-vis-r')}</defs>
<rect x="500" y="18" width="300" height="34" rx="6" fill="currentColor" fill-opacity="0.2"/>
<path d="M380 110 A40 40 0 0 0 380 190 Z" fill="currentColor" fill-opacity="0.3"/>
<path d="M620 110 A40 40 0 0 1 620 190 Z" fill="currentColor" fill-opacity="0.3"/>
<path d="M602 188 C 560 240, 440 250, 350 310" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-sp-vis-r)"/>
<path d="M358 188 C 340 240, 280 260, 255 310" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-sp-vis-r)"/>
<line x1="300" y1="352" x2="300" y2="390" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-sp-vis-r)"/>
</g>
<text x="350" y="42" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Left visual field</text>
<text x="650" y="42" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Right visual field</text>
<text x="380" y="92" font-size="20" text-anchor="middle" fill="currentColor">Left eye</text>
<text x="620" y="92" font-size="20" text-anchor="middle" fill="currentColor">Right eye</text>
<circle cx="380" cy="150" r="40" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="620" cy="150" r="40" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="380" y1="110" x2="380" y2="190" stroke="currentColor" stroke-width="1.5"/>
<line x1="620" y1="110" x2="620" y2="190" stroke="currentColor" stroke-width="1.5"/>
<rect x="200" y="312" width="200" height="40" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="600" y="312" width="200" height="40" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="300" y="339" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">LGN (thalamus)</text>
<text x="700" y="339" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">LGN (thalamus)</text>
<rect x="200" y="392" width="200" height="40" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="600" y="392" width="200" height="40" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="300" y="419" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">V1 (occipital)</text>
<text x="700" y="419" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">V1 (occipital)</text>
<g class="fig-muted">
<defs>${ARROW('arr-sp-vis-m')}</defs>
<line x1="500" y1="322" x2="500" y2="268" stroke="currentColor" stroke-width="2" marker-end="url(#arr-sp-vis-m)"/>
<text x="500" y="348" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">optic chiasm</text>
<text x="500" y="374" font-size="20" text-anchor="middle" fill="currentColor">nasal fibres cross</text>
<text x="100" y="378" font-size="20" text-anchor="middle" fill="currentColor">left hemisphere</text>
<text x="900" y="378" font-size="20" text-anchor="middle" fill="currentColor">right hemisphere</text>
<text x="120" y="140" font-size="20" text-anchor="middle" fill="currentColor">each retina:</text>
<text x="120" y="166" font-size="20" text-anchor="middle" fill="currentColor">outer half = temporal</text>
<text x="120" y="192" font-size="20" text-anchor="middle" fill="currentColor">inner half = nasal</text>
</g>
</svg>`

/* 6 — Two correct theories of colour (lead, 1000×460) */
const opponentRow = (y: number, left: string, right: string, leftCls?: string) =>
  `<g${leftCls ? ` class="${leftCls}"` : ''}><rect x="580" y="${y - 25}" width="120" height="50" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/><text x="640" y="${y + 8}" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${left}</text></g>
<rect x="820" y="${y - 25}" width="120" height="50" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="880" y="${y + 8}" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${right}</text>
<line x1="712" y1="${y}" x2="808" y2="${y}" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-sp-col)" marker-end="url(#arr-sp-col)"/>`

const colourSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sp-col')}</defs>
<g class="fig-muted">
<rect x="20" y="10" width="460" height="440" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="540" y="10" width="440" height="440" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
</g>
<text x="250" y="44" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Receptor level — trichromatic</text>
<text x="760" y="44" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Ganglion / LGN level — opponent process</text>
<g class="fig-muted">
<text x="250" y="72" font-size="20" text-anchor="middle" fill="currentColor">three cone types (Young–Helmholtz)</text>
<text x="760" y="72" font-size="20" text-anchor="middle" fill="currentColor">paired channels (Hering)</text>
</g>
<line x1="70" y1="330" x2="470" y2="330" stroke="currentColor" stroke-width="2" marker-end="url(#arr-sp-col)"/>
<line x1="70" y1="330" x2="70" y2="96" stroke="currentColor" stroke-width="2" marker-end="url(#arr-sp-col)"/>
<text x="46" y="215" font-size="20" text-anchor="middle" fill="currentColor" transform="rotate(-90 46 215)">cone response</text>
<g class="fig-muted">
<line x1="80" y1="330" x2="80" y2="338" stroke="currentColor" stroke-width="2"/><line x1="207" y1="330" x2="207" y2="338" stroke="currentColor" stroke-width="2"/>
<line x1="333" y1="330" x2="333" y2="338" stroke="currentColor" stroke-width="2"/><line x1="460" y1="330" x2="460" y2="338" stroke="currentColor" stroke-width="2"/>
</g>
<text x="80" y="360" font-size="20" text-anchor="middle" fill="currentColor">400</text>
<text x="207" y="360" font-size="20" text-anchor="middle" fill="currentColor">500</text>
<text x="333" y="360" font-size="20" text-anchor="middle" fill="currentColor">600</text>
<text x="460" y="360" font-size="20" text-anchor="middle" fill="currentColor">700</text>
<text x="270" y="394" font-size="20" text-anchor="middle" fill="currentColor">wavelength (nm)</text>
<g class="fig-accent">
<polyline points="${bell(105, 38, 200, 330, 115, 5, 72)}" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="105" y="118" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">S</text>
</g>
<polyline points="${bell(248, 42, 200, 330, 125)}" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="3"/>
<text x="232" y="118" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">M</text>
<g class="fig-accent-2">
<polyline points="${bell(290, 46, 200, 330, 135)}" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="308" y="118" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">L</text>
</g>
<text x="270" y="430" font-size="20" text-anchor="middle" fill="currentColor">colour = the ratio of S : M : L activity</text>
<line x1="486" y1="230" x2="534" y2="230" stroke="currentColor" stroke-width="3" marker-end="url(#arr-sp-col)"/>
${opponentRow(150, 'Red', 'Green', 'fig-accent-2')}
${opponentRow(230, 'Blue', 'Yellow', 'fig-accent')}
${opponentRow(310, 'Black', 'White')}
<text x="760" y="382" font-size="20" text-anchor="middle" fill="currentColor">one pole active = the other suppressed</text>
<g class="fig-accent-2"><text x="760" y="416" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">stare at red → green afterimage</text></g>
</svg>`

/* 7 — Pitch coding: place, frequency, volley (replace-table, 560×440) */
const spikes = (xs: number[], yTop: number, yBottom: number) =>
  xs.map((x) => `M${x} ${yTop} L${x} ${yBottom}`).join(' ')
const freqCrests = Array.from({ length: 10 }, (_, k) => 42.5 + 50 * k)
const volleyCrests = Array.from({ length: 20 }, (_, k) => 56 + 24 * k)

const pitchSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<text x="30" y="30" font-size="17" font-weight="700" fill="currentColor">Place theory <tspan font-weight="400" class="fig-muted">— where the membrane peaks · high frequencies</tspan></text>
<polygon points="30,86 530,64 530,126 30,104" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent">
<path d="M120 82 Q150 44 180 79" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="205" y="54" font-size="16" font-weight="700" fill="currentColor">high tone</text>
</g>
<g class="fig-accent-2">
<path d="M400 70 Q440 36 480 66" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="380" y="54" font-size="16" font-weight="700" text-anchor="end" fill="currentColor">low tone</text>
</g>
<text x="30" y="150" font-size="16" fill="currentColor">base (high Hz)</text>
<text x="530" y="150" font-size="16" text-anchor="end" fill="currentColor">apex (low Hz)</text>
<text x="30" y="178" font-size="17" font-weight="700" fill="currentColor">Frequency theory <tspan font-weight="400" class="fig-muted">— firing rate = tone frequency · ≲1,000 Hz</tspan></text>
<g class="fig-muted"><polyline points="${sine(30, 530, 212, 18, 50)}" fill="none" stroke="currentColor" stroke-width="2"/></g>
<g class="fig-accent">
<path d="${spikes(freqCrests, 240, 264)}" stroke="currentColor" stroke-width="3"/>
<line x1="30" y1="264" x2="530" y2="264" stroke="currentColor" stroke-width="1.5"/>
</g>
<g class="fig-muted"><text x="280" y="286" font-size="16" text-anchor="middle" fill="currentColor">one spike per cycle</text></g>
<text x="30" y="316" font-size="17" font-weight="700" fill="currentColor">Volley principle <tspan font-weight="400" class="fig-muted">— neurons take turns · a few thousand Hz</tspan></text>
<g class="fig-muted"><polyline points="${sine(50, 530, 346, 13, 24)}" fill="none" stroke="currentColor" stroke-width="2"/></g>
<g class="fig-muted">
<line x1="50" y1="378" x2="530" y2="378" stroke="currentColor" stroke-width="1"/>
<line x1="50" y1="398" x2="530" y2="398" stroke="currentColor" stroke-width="1"/>
<line x1="50" y1="418" x2="530" y2="418" stroke="currentColor" stroke-width="1"/>
</g>
<text x="40" y="377" font-size="16" text-anchor="end" fill="currentColor">A</text>
<text x="40" y="397" font-size="16" text-anchor="end" fill="currentColor">B</text>
<text x="40" y="417" font-size="16" text-anchor="end" fill="currentColor">C</text>
<g class="fig-accent">
<path d="${spikes(volleyCrests.filter((_, k) => k % 3 === 0), 366, 378)}" stroke="currentColor" stroke-width="2.5"/>
<path d="${spikes(volleyCrests.filter((_, k) => k % 3 === 1), 386, 398)}" stroke="currentColor" stroke-width="2.5"/>
<path d="${spikes(volleyCrests.filter((_, k) => k % 3 === 2), 406, 418)}" stroke="currentColor" stroke-width="2.5"/>
</g>
<g class="fig-muted"><text x="290" y="436" font-size="16" text-anchor="middle" fill="currentColor">each fires every 3rd cycle — together they mark every cycle</text></g>
</svg>`

/* 8 — Gate control theory of pain (lead, 1000×460) */
const gateSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent-2">
<defs>${ARROW('arr-sp-gate-r')}</defs>
<rect x="30" y="280" width="200" height="60" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="130" y="317" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Injury (nociceptor)</text>
<line x1="230" y1="310" x2="426" y2="310" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-gate-r)"/>
<text x="328" y="298" font-size="20" text-anchor="middle" fill="currentColor">small pain fibre</text>
<line x1="610" y1="310" x2="776" y2="310" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-gate-r)"/>
<text x="693" y="298" font-size="20" text-anchor="middle" fill="currentColor">pain signal</text>
</g>
<g class="fig-accent">
<rect x="30" y="170" width="200" height="60" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="130" y="207" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Rubbing (touch)</text>
<line x1="230" y1="200" x2="420" y2="200" stroke="currentColor" stroke-width="5.5"/>
<line x1="422" y1="184" x2="422" y2="216" stroke="currentColor" stroke-width="5"/>
<text x="328" y="186" font-size="20" text-anchor="middle" fill="currentColor">large touch fibre</text>
<path d="M875 268 L875 90 L520 90 L520 132" fill="none" stroke="currentColor" stroke-width="3"/>
<line x1="504" y1="136" x2="536" y2="136" stroke="currentColor" stroke-width="5"/>
<text x="700" y="76" font-size="20" text-anchor="middle" fill="currentColor">descending control — attention, expectation, endorphins</text>
</g>
<rect x="430" y="140" width="180" height="230" rx="14" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="520" y="172" font-size="20" text-anchor="middle" fill="currentColor">Spinal cord</text>
<text x="520" y="250" font-size="34" font-weight="700" text-anchor="middle" fill="currentColor">GATE</text>
<g class="fig-muted"><text x="520" y="350" font-size="20" text-anchor="middle" fill="currentColor">open → pain passes</text></g>
<rect x="780" y="270" width="190" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="875" y="302" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Brain</text>
<text x="875" y="332" font-size="20" text-anchor="middle" fill="currentColor">pain is felt</text>
<g class="fig-muted"><text x="520" y="426" font-size="20" text-anchor="middle" fill="currentColor">⊣ = closes the gate (inhibits) · → = signal passes</text></g>
</svg>`

/* 9 — Gestalt grouping principles (replace-table, 560×440) */
const gestaltPanel = (px: number, py: number, label: string, hint: string, inner: string) =>
  `<g class="fig-muted"><rect x="${px}" y="${py}" width="170" height="190" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/></g>
${inner}
<text x="${px + 85}" y="${py + 164}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text>
<g class="fig-muted"><text x="${px + 85}" y="${py + 183}" font-size="16" text-anchor="middle" fill="currentColor">${hint}</text></g>`

const proximityDots = (px: number, py: number) =>
  [25, 47, 69, 101, 123, 145]
    .flatMap((cx) => [32, 56, 80, 104].map((cy) => `<circle cx="${px + cx}" cy="${py + cy}" r="5" fill="currentColor"/>`))
    .join('')

const similarityDots = (px: number, py: number) =>
  [0, 1, 2, 3]
    .flatMap((j) =>
      [0, 1, 2, 3, 4, 5].map((k) =>
        j % 2 === 0
          ? `<circle cx="${px + 25 + 24 * k}" cy="${py + 32 + 24 * j}" r="5" fill="currentColor"/>`
          : `<circle class="fig-bg" cx="${px + 25 + 24 * k}" cy="${py + 32 + 24 * j}" r="5" stroke="currentColor" stroke-width="2"/>`,
      ),
    )
    .join('')

const vase = (cx: number, y0: number) =>
  `M${cx - 38} ${y0} C ${cx - 10} ${y0 + 10}, ${cx - 10} ${y0 + 22}, ${cx - 14} ${y0 + 32} C ${cx - 18} ${y0 + 44}, ${cx - 34} ${y0 + 52}, ${cx - 30} ${y0 + 64} C ${cx - 26} ${y0 + 76}, ${cx - 10} ${y0 + 84}, ${cx - 12} ${y0 + 94} C ${cx - 14} ${y0 + 104}, ${cx - 36} ${y0 + 108}, ${cx - 36} ${y0 + 120} L ${cx + 36} ${y0 + 120} C ${cx + 36} ${y0 + 108}, ${cx + 14} ${y0 + 104}, ${cx + 12} ${y0 + 94} C ${cx + 10} ${y0 + 84}, ${cx + 26} ${y0 + 76}, ${cx + 30} ${y0 + 64} C ${cx + 34} ${y0 + 52}, ${cx + 18} ${y0 + 44}, ${cx + 14} ${y0 + 32} C ${cx + 10} ${y0 + 22}, ${cx + 10} ${y0 + 10}, ${cx + 38} ${y0} Z`

const gestaltSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${gestaltPanel(10, 10, 'Proximity', 'near each other', proximityDots(10, 10))}
${gestaltPanel(195, 10, 'Similarity', 'alike in form', similarityDots(195, 10))}
${gestaltPanel(
  380,
  10,
  'Continuity',
  'on a smooth path',
  `<g class="fig-accent"><path d="M395 135 C 445 135, 485 35, 535 35" fill="none" stroke="currentColor" stroke-width="4"/></g>
<path d="M395 35 C 445 35, 485 135, 535 135" fill="none" stroke="currentColor" stroke-width="4"/>`,
)}
${gestaltPanel(102, 220, 'Closure', 'gaps filled in', `<circle cx="187" cy="298" r="48" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="34 18"/>`)}
${gestaltPanel(
  288,
  220,
  'Figure–ground',
  'object vs background',
  `<g class="fig-muted"><rect x="298" y="232" width="150" height="128" rx="6" fill="currentColor" fill-opacity="0.35"/></g>
<path d="${vase(373, 236)}" fill="currentColor" fill-opacity="0.9"/>`,
)}
<g class="fig-muted"><text x="280" y="432" font-size="16" text-anchor="middle" fill="currentColor">Prägnanz: we see the simplest organization</text></g>
</svg>`

export const mcatSensationPerceptionFigures: DeckFigurePlacement[] = [
  {
    at: 'Sensation vs. Perception',
    mode: 'lead',
    figure: {
      svg: sensationSvg,
      alt:
        'A left-to-right flow: physical stimulus, receptor transduction, neural signal, then the brain organizes and interprets, giving a percept. The first three steps are bracketed as sensation, bottom-up and data-driven. The last two are bracketed as perception, top-down; a box labelled expectations, context and experience feeds down into the brain step. Notes: one stimulus can give different percepts (ambiguous figures); different stimuli can give the same percept (constancies).',
      caption: 'Sensation runs bottom-up from the stimulus; perception adds top-down input from expectations, context and experience.',
    },
    blocks: ['- Sensation = **transduction** (receptors, bottom-up); perception = **interpretation** (brain, top-down)'],
  },
  {
    at: 'Psychophysics',
    mode: 'lead',
    figure: {
      svg: psychophysicsSvg,
      alt:
        'Two graphs. Left: percentage of trials detected against stimulus intensity rises as an S-shaped curve; the intensity detected on 50% of trials is marked as the absolute threshold, and intensities below it are labelled subliminal. Right: the just-noticeable difference, delta I, against baseline intensity I is a straight line through the origin: at four times the baseline load the JND is four times larger, so delta I over I is a constant k (Weber’s law).',
      caption: 'Thresholds are defined at 50% detection; the JND grows in proportion to the baseline (illustrative curves).',
    },
    blocks: ['- Both thresholds are **50%** points; Weber: the JND is a constant **proportion**, never a constant amount'],
  },
  {
    at: 'Signal Detection Theory',
    mode: 'replace-table',
    figure: {
      svg: sdtSvg,
      alt:
        'Top: two overlapping bell curves on an internal-evidence axis, noise (grey) on the left and signal (blue) on the right; the distance between their peaks is d prime, sensitivity. A vertical red line, the criterion beta, splits the axis: evidence to its left gets the response no, to its right yes. Bottom: a two-by-two table. Signal present and yes is a hit; signal absent and yes is a false alarm; signal present and no is a miss; signal absent and no is a correct rejection.',
      caption: 'Moving the criterion changes hits and false alarms together; only the separation of the curves (d′) is sensitivity.',
    },
    blocks: [
      '- **d′** (sensitivity): how far apart signal and noise sit',
      '- **β** (criterion): how much evidence it takes to say “yes”',
      '- Liberal criterion → more hits **and** more false alarms',
    ],
  },
  {
    at: 'Sensory Adaptation',
    mode: 'lead',
    figure: {
      svg: adaptationSvg,
      alt:
        'Two panels. Left, sensory adaptation (receptor-level, unlearned): a stimulus switches on and is held constant, and the receptor response jumps up then fades toward baseline over time. Right, habituation (central, learned): the same stimulus is presented repeatedly and the response bars shrink with each presentation; a novel stimulus restores a large response, labelled dishabituation, after which responding declines again.',
      caption: 'Adaptation fades under an unchanging stimulus; habituation fades across repetitions and recovers to novelty (illustrative).',
    },
    blocks: ['- Adaptation = receptors, constant stimulus; habituation = learned, and **dishabituation** gives it away'],
  },
  {
    at: 'Visual Pathway',
    mode: 'lead',
    figure: {
      svg: visualPathwaySvg,
      alt:
        'Schematic of the visual pathway. The left visual field (blue) lands on the right half of each retina: the nasal half of the left eye and the temporal half of the right eye; the right visual field (red) lands on the left halves. Fibres from the nasal halves cross at the optic chiasm while temporal fibres stay on their own side, so all left-field information reaches the right LGN of the thalamus and then right V1 in the occipital lobe, and all right-field information reaches the left LGN and left V1.',
      caption: 'Each visual FIELD maps to the opposite hemisphere because nasal fibres cross at the chiasm.',
    },
    blocks: ['- Eyes ≠ visual fields: a chiasm lesion cuts both temporal fields; a post-chiasm lesion cuts one whole field'],
  },
  {
    at: 'Two Correct Theories of Color',
    mode: 'lead',
    figure: {
      svg: colourSvg,
      alt:
        'Left panel, receptor level, trichromatic theory: three overlapping cone-response curves against wavelength from 400 to 700 nanometres, S peaking in the short-wavelength blue region and M and L peaking close together in the middle and long-wavelength region; colour is the ratio of S to M to L activity. An arrow leads to the right panel, ganglion and LGN level, opponent-process theory: three paired channels, red versus green, blue versus yellow, black versus white, each drawn as a double-headed arrow between two boxes; one pole active means the other is suppressed, so staring at red yields a green afterimage.',
      caption: 'Both theories are right at different stages: three cone types at the receptors, opponent pairs downstream (illustrative curves).',
    },
    blocks: ['- Trichromatic at the **cones**; opponent-process at **ganglion/LGN** cells — afterimages come from the second stage'],
  },
  {
    at: 'Pitch Coding',
    mode: 'replace-table',
    figure: {
      svg: pitchSvg,
      alt:
        'Three rows. Place theory: an uncoiled basilar membrane, narrow at the base and wide at the apex; a high tone makes it vibrate most near the base and a low tone near the apex, so the place of the peak codes pitch, best for high frequencies. Frequency theory: a sound wave with one neural spike per cycle, so firing rate equals the tone frequency, up to about 1,000 hertz. Volley principle: for a faster wave, three neurons A, B and C each fire on every third cycle in staggered rotation, so together they mark every cycle, extending temporal coding to a few thousand hertz.',
    },
    blocks: [
      '- **Place**: where the membrane peaks (base = high, apex = low) → high frequencies',
      '- **Frequency / temporal**: firing rate matches the tone → ≲1,000 Hz (the firing ceiling)',
      '- **Volley**: neurons fire in staggered rotation → a few thousand Hz',
    ],
  },
  {
    at: 'Gate Control Theory of Pain',
    mode: 'lead',
    figure: {
      svg: gateSvg,
      alt:
        'Schematic of the pain gate. A small-diameter pain fibre from an injury enters a gate in the spinal cord and, when the gate is open, the pain signal continues to the brain where pain is felt. A large-diameter touch fibre from rubbing ends on the gate with an inhibitory bar, closing it. A descending pathway from the brain, carrying attention, expectation and endorphins, also ends on the gate with an inhibitory bar.',
      caption: 'Melzack & Wall: touch fibres and descending signals close the spinal gate on pain fibres.',
    },
    blocks: ['- Two ways to close the gate: **large touch fibres** (rubbing) and **descending** control (expectation, endorphins)'],
  },
  {
    at: 'Gestalt Principles',
    mode: 'replace-table',
    figure: {
      svg: gestaltSvg,
      alt:
        'Five small panels. Proximity: a grid of dots with a wider gap in the middle, seen as two groups. Similarity: rows of filled dots alternating with rows of open dots, seen as rows. Continuity: two smooth curves crossing in an X, seen as two continuous lines rather than four segments. Closure: a circle drawn with gaps, still seen as a circle. Figure–ground: a vase silhouette on a shaded background whose outline also forms two facing profiles. Below: Prägnanz, we see the simplest organization.',
    },
    blocks: [
      '- **Prägnanz**: the simplest organization wins',
      '- Group by proximity, similarity, continuity, closure',
      '- **Figure–ground**: object vs background — reversible figures flip it',
    ],
  },
]
