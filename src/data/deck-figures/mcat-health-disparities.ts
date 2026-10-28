import type { DeckFigurePlacement } from './index'

/**
 * Health & Healthcare Disparities (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a monotonic gradient
 * curve, converging determinant arrows, a stress-axis flow, nested sets, a
 * life-course timeline, a leaky cascade, a mediator DAG, two schematic
 * charts, an intervention ladder …) — no textbook, prep-company or AAMC
 * figure was copied. No curve here is data: the lesson gives no study
 * numbers, so the charts are labelled schematics and their captions say
 * "illustrative" (the ladder's right panel uses the lesson's own HYPOTHETICAL
 * capstone-passage numbers and says so).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-hd-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/* 1 — The social gradient: every step up, not a poverty threshold (lead, 1000×460) */
const gradPts: Array<[number, number]> = [
  [140, 110],
  [240, 175],
  [340, 225],
  [440, 262],
  [540, 290],
]
const gradientSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-hd-grad')}</defs>
<line x1="90" y1="380" x2="90" y2="70" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-grad)"/>
<line x1="90" y1="380" x2="600" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-grad)"/>
<text x="58" y="225" font-size="17" text-anchor="middle" fill="currentColor" transform="rotate(-90 58 225)">mortality</text>
<text x="345" y="440" font-size="16" text-anchor="middle" fill="currentColor">social position: civil-service grade, SES step →</text>
${gradPts.map(([x]) => `<line x1="${x}" y1="380" x2="${x}" y2="388" stroke="currentColor" stroke-width="2"/>`).join('\n')}
<text x="140" y="408" font-size="16" text-anchor="middle" fill="currentColor">clerks</text>
<text x="340" y="408" font-size="16" text-anchor="middle" fill="currentColor">deputies</text>
<text x="540" y="408" font-size="16" text-anchor="middle" fill="currentColor">executives</text>
<g class="fig-accent-2">
<path d="M110,110 H190 V305 H590" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6"/>
<text x="400" y="332" font-size="15" text-anchor="middle" fill="currentColor">if only POVERTY mattered: one step, then flat</text>
<text x="400" y="352" font-size="15" text-anchor="middle" fill="currentColor">— the data refuse it</text>
</g>
<g class="fig-accent">
<polyline points="${gradPts.map((p) => p.join(',')).join(' ')}" fill="none" stroke="currentColor" stroke-width="3.5"/>
${gradPts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="currentColor"/>`).join('\n')}
<text x="330" y="132" font-size="20" font-weight="700" fill="currentColor">the GRADIENT</text>
<text x="330" y="156" font-size="16" fill="currentColor">at EVERY step up, mortality falls</text>
</g>
<g class="fig-muted"><line x1="620" y1="40" x2="620" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<text x="810" y="70" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">The civil-servant cohort studies</text>
<rect x="650" y="95" width="320" height="86" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="810" y="129" font-size="17" text-anchor="middle" fill="currentColor">ONE employer: everyone employed,</text>
<text x="810" y="155" font-size="17" text-anchor="middle" fill="currentColor">paid, housed — universal coverage</text>
<line x1="810" y1="181" x2="810" y2="216" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-grad)"/>
<g class="fig-accent">
<rect x="650" y="220" width="320" height="70" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="810" y="263" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">mortality still falls grade by grade</text>
</g>
<line x1="810" y1="290" x2="810" y2="325" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-grad)"/>
<g class="fig-accent-2">
<rect x="650" y="329" width="320" height="84" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="810" y="363" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">so access to doctors</text>
<text x="810" y="390" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">cannot be the whole story</text>
</g>
<g class="fig-muted"><text x="810" y="442" font-size="15" text-anchor="middle" fill="currentColor">what still varies: control, status, chronic stress</text></g>
</svg>`

/* 2 — Five upstream determinants converge on health; fundamental cause theory's fingerprint (lead, 1000×460) */
const dets: Array<[string, string]> = [
  ['Income and wealth', 'nutrition, housing, an emergency buffer'],
  ['Education', 'literacy, jobs, a sense of control'],
  ['Occupation', 'hazards, autonomy vs demand, stable pay'],
  ['Neighborhood', 'food access, pollution, violence, clinics'],
  ['Social connection', 'support, care — isolation rivals smoking'],
]
const HC = { x: 452, y: 232, r: 56 }
const detRow = (i: number) => {
  const y = 58 + i * 70
  const sx = 290
  const sy = y + 29
  const dx = HC.x - sx
  const dy = HC.y - sy
  const d = Math.hypot(dx, dy)
  const ex = (HC.x - (dx / d) * (HC.r + 3)).toFixed(1)
  const ey = (HC.y - (dy / d) * (HC.r + 3)).toFixed(1)
  return `<rect x="20" y="${y}" width="270" height="58" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="155" y="${y + 24}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${dets[i][0]}</text>
<g class="fig-muted"><text x="155" y="${y + 46}" font-size="12.5" text-anchor="middle" fill="currentColor">${dets[i][1]}</text></g>
<line x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-det)"/>`
}
const miniBars = (x0: number, heights: number[], cls?: string) => {
  const bars = heights
    .map((h, i) => `<rect x="${x0 + 14 + i * 38}" y="${372 - h}" width="28" height="${h}" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>`)
    .join('\n')
  return cls ? `<g class="${cls}">${bars}</g>` : bars
}
const determinantsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-hd-det')}</defs>
<g class="fig-muted"><text x="260" y="38" font-size="16" text-anchor="middle" fill="currentColor">the conditions in which people are born, live, work and age</text></g>
${[0, 1, 2, 3, 4].map(detRow).join('\n')}
<g class="fig-accent">
<circle cx="${HC.x}" cy="${HC.y}" r="${HC.r}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="${HC.x}" y="${HC.y + 8}" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">HEALTH</text>
</g>
<g class="fig-muted">
<text x="260" y="438" font-size="15" text-anchor="middle" fill="currentColor">all five sit UPSTREAM of behaviour and biology</text>
<line x1="520" y1="20" x2="520" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<text x="760" y="40" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Fundamental cause theory</text>
<rect x="560" y="58" width="400" height="60" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="760" y="83" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">FLEXIBLE RESOURCES</text>
<text x="760" y="106" font-size="15" text-anchor="middle" fill="currentColor">money · knowledge · power · connections</text>
<text x="760" y="146" font-size="16" text-anchor="middle" fill="currentColor">redeployed against each era's threat:</text>
<g class="fig-muted"><text x="760" y="168" font-size="15" text-anchor="middle" fill="currentColor">cholera → cigarettes → the newest screening test</text></g>
<text x="655" y="208" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">untreatable disease</text>
<line x1="570" y1="372" x2="745" y2="372" stroke="currentColor" stroke-width="2"/>
${miniBars(575, [70, 70, 70, 70])}
<g class="fig-muted"><text x="655" y="392" font-size="13" text-anchor="middle" fill="currentColor">low SES → high SES</text></g>
<text x="655" y="414" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">no gradient</text>
<text x="870" y="208" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">preventable / treatable</text>
<line x1="785" y1="372" x2="960" y2="372" stroke="currentColor" stroke-width="2"/>
${miniBars(790, [130, 95, 62, 32], 'fig-accent-2')}
<g class="fig-muted"><text x="870" y="392" font-size="13" text-anchor="middle" fill="currentColor">low SES → high SES</text></g>
<g class="fig-accent-2"><text x="870" y="414" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">steep gradient</text></g>
<g class="fig-accent-2"><text x="760" y="446" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">disparities are LARGEST where medicine can act</text></g>
</svg>`

/* 3 — Stress biology: adversity → stress axes → allostatic load → disease; acute vs chronic (lead, 1000×460) */
const chronicPath = (() => {
  let d = 'M560,372'
  for (let i = 0; i < 7; i++) {
    const x0 = 560 + i * 55
    const base = 372 - i * 8
    d += ` Q${x0 + 27},${base - 78} ${x0 + 55},${base - 8}`
  }
  return d
})()
const stressSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-hd-stress')}</defs>
<rect x="16" y="60" width="236" height="96" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="134" y="90" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">CHRONIC social stressors</text>
<text x="134" y="116" font-size="13" text-anchor="middle" fill="currentColor">economic insecurity, discrimination,</text>
<text x="134" y="138" font-size="13" text-anchor="middle" fill="currentColor">unsafe neighborhoods — unrelenting</text>
<line x1="252" y1="108" x2="272" y2="108" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-stress)"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-hd-stress-r')}</defs>
<rect x="276" y="60" width="204" height="96" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="378" y="90" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">HPA axis + sympathetic</text>
<text x="378" y="114" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">chronically ENGAGED</text>
<text x="378" y="138" font-size="14" text-anchor="middle" fill="currentColor">cortisol, catecholamines</text>
<line x1="480" y1="108" x2="500" y2="108" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-stress-r)"/>
<rect x="504" y="60" width="250" height="96" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="629" y="90" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">ALLOSTATIC LOAD</text>
<text x="629" y="114" font-size="13" text-anchor="middle" fill="currentColor">cumulative wear: BP, cortisol,</text>
<text x="629" y="138" font-size="13" text-anchor="middle" fill="currentColor">inflammation, metabolic markers</text>
<line x1="754" y1="108" x2="774" y2="108" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-stress-r)"/>
</g>
<rect x="778" y="60" width="204" height="96" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="880" y="90" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">DISEASE</text>
<text x="880" y="116" font-size="14" text-anchor="middle" fill="currentColor">cardiovascular, metabolic,</text>
<text x="880" y="138" font-size="14" text-anchor="middle" fill="currentColor">birth outcomes</text>
<g class="fig-muted">
<path d="M134,166 V186 H629 V176" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="382" y="208" font-size="15" text-anchor="middle" fill="currentColor">the load rises as SES falls — it MEDIATES part of the gradient</text>
</g>
<text x="250" y="248" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">acute stress</text>
<line x1="60" y1="400" x2="470" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-stress)"/>
<line x1="60" y1="400" x2="60" y2="262" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-stress)"/>
<g class="fig-muted">
<line x1="60" y1="372" x2="460" y2="372" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<text x="455" y="420" font-size="14" text-anchor="end" fill="currentColor">time →</text>
<text x="330" y="355" font-size="15" text-anchor="middle" fill="currentColor">a spike, then full recovery to baseline</text>
</g>
<text x="40" y="330" font-size="14" text-anchor="middle" fill="currentColor" transform="rotate(-90 40 330)">arousal</text>
<g class="fig-accent"><path d="M60,372 H120 Q145,282 170,340 T235,372 H460" fill="none" stroke="currentColor" stroke-width="3"/></g>
<text x="750" y="248" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">chronic stress</text>
<line x1="560" y1="400" x2="970" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-stress)"/>
<line x1="560" y1="400" x2="560" y2="262" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-stress)"/>
<g class="fig-muted">
<line x1="560" y1="372" x2="760" y2="372" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<text x="955" y="420" font-size="14" text-anchor="end" fill="currentColor">time →</text>
<text x="578" y="386" font-size="12" fill="currentColor">old baseline</text>
</g>
<g class="fig-accent-2">
<path d="${chronicPath}" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="958" y="352" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">the baseline never returns</text>
<text x="958" y="370" font-size="15" font-weight="700" text-anchor="end" fill="currentColor">— that drift IS the load</text>
</g>
<g class="fig-accent-2"><text x="500" y="448" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">WEATHERING: the same wear, accelerated by discrimination — biological age runs ahead of calendar age</text></g>
</svg>`

/* 4 — Disparity vs inequity as nested sets, with the two tests (lead, 1000×460) */
const vocabSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-hd-vocab')}</defs>
<rect x="30" y="44" width="560" height="366" rx="16" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>
<text x="52" y="82" font-size="22" font-weight="700" fill="currentColor">HEALTH DISPARITY</text>
<text x="52" y="106" font-size="16" fill="currentColor">any measurable difference in health between groups</text>
<g class="fig-muted"><text x="52" y="156" font-size="15" fill="currentColor">a disparity but NOT an inequity:</text></g>
<rect x="290" y="126" width="280" height="56" rx="28" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="430" y="149" font-size="15" text-anchor="middle" fill="currentColor">autoimmune rates tied to</text>
<text x="430" y="170" font-size="15" text-anchor="middle" fill="currentColor">X-chromosome biology</text>
<g class="fig-accent">
<rect x="60" y="202" width="500" height="190" rx="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="82" y="238" font-size="22" font-weight="700" fill="currentColor">HEALTH INEQUITY</text>
<text x="82" y="262" font-size="16" fill="currentColor">the subset that is AVOIDABLE and UNJUST</text>
<text x="82" y="284" font-size="14" fill="currentColor">— produced by social arrangements, not biology or free informed choice</text>
</g>
<g class="fig-accent-2">
<rect x="82" y="310" width="456" height="62" rx="31" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="310" y="335" font-size="15" text-anchor="middle" fill="currentColor">asthma hospitalizations 5× higher beside a freight corridor</text>
<text x="310" y="357" font-size="15" text-anchor="middle" fill="currentColor">that zoning routed through low-income housing</text>
</g>
<text x="790" y="70" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Two tests</text>
<rect x="650" y="92" width="250" height="56" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="775" y="127" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Is it AVOIDABLE?</text>
<line x1="900" y1="120" x2="940" y2="120" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-vocab)"/>
<g class="fig-muted">
<text x="920" y="110" font-size="13" text-anchor="middle" fill="currentColor">no</text>
<text x="968" y="116" font-size="13" text-anchor="middle" fill="currentColor">disparity</text>
<text x="968" y="132" font-size="13" text-anchor="middle" fill="currentColor">only</text>
</g>
<line x1="775" y1="148" x2="775" y2="196" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-vocab)"/>
<text x="790" y="178" font-size="14" fill="currentColor">yes</text>
<rect x="650" y="200" width="250" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="775" y="230" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Is it UNJUST?</text>
<text x="775" y="254" font-size="13" text-anchor="middle" fill="currentColor">socially produced, not freely chosen</text>
<line x1="900" y1="238" x2="940" y2="238" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-vocab)"/>
<g class="fig-muted">
<text x="920" y="228" font-size="13" text-anchor="middle" fill="currentColor">no</text>
<text x="968" y="234" font-size="13" text-anchor="middle" fill="currentColor">disparity</text>
<text x="968" y="250" font-size="13" text-anchor="middle" fill="currentColor">only</text>
</g>
<line x1="775" y1="276" x2="775" y2="324" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-vocab)"/>
<text x="790" y="306" font-size="14" fill="currentColor">yes</text>
<g class="fig-accent">
<rect x="650" y="328" width="250" height="60" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="775" y="366" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">INEQUITY</text>
</g>
<g class="fig-muted"><text x="500" y="442" font-size="15" text-anchor="middle" fill="currentColor">documented across SES · race/ethnicity (persists after controlling SES) · gender · geography</text></g>
</svg>`

/* 5 — Life-course effects: latency and accumulation on one age axis (lead, 1000×460) */
const stackCol = (i: number, label: string) => {
  const x = 190 + i * 130
  const blocks = []
  for (let k = 0; k <= i; k++) {
    const y = 385 - (k + 1) * 24
    const top = k === i
    blocks.push(
      `<rect x="${x}" y="${y}" width="112" height="22" rx="4" fill="currentColor" fill-opacity="${top ? '0.22' : '0.08'}" stroke="currentColor" stroke-width="1.5"/>`,
    )
  }
  return `${blocks.join('\n')}
<text x="${x + 56}" y="${385 - (i + 1) * 24 + 15}" font-size="12" text-anchor="middle" fill="currentColor">${label}</text>`
}
const lifeCourseSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-hd-life')}</defs>
<line x1="60" y1="400" x2="970" y2="400" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-life)"/>
${[60, 200, 380, 640, 900].map((x) => `<line x1="${x}" y1="400" x2="${x}" y2="408" stroke="currentColor" stroke-width="2"/>`).join('\n')}
<text x="60" y="428" font-size="15" text-anchor="middle" fill="currentColor">birth</text>
<text x="200" y="428" font-size="15" text-anchor="middle" fill="currentColor">childhood</text>
<text x="380" y="428" font-size="15" text-anchor="middle" fill="currentColor">adolescence</text>
<text x="640" y="428" font-size="15" text-anchor="middle" fill="currentColor">adulthood</text>
<text x="900" y="428" font-size="15" text-anchor="middle" fill="currentColor">later life</text>
<text x="60" y="52" font-size="19" font-weight="700" fill="currentColor">LATENCY (critical-period) effect</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-hd-life-r')}</defs>
<rect x="90" y="78" width="180" height="66" rx="10" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="180" y="105" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">childhood poverty</text>
<text x="180" y="128" font-size="13" text-anchor="middle" fill="currentColor">housing, nutrition, stress</text>
<line x1="270" y1="111" x2="696" y2="111" stroke="currentColor" stroke-width="2.5" stroke-dasharray="9 7" marker-end="url(#arr-hd-life-r)"/>
<text x="483" y="100" font-size="15" text-anchor="middle" fill="currentColor">programs adult risk decades later</text>
<rect x="700" y="78" width="270" height="66" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="835" y="105" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">adult cardiovascular and</text>
<text x="835" y="128" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">metabolic disease</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-hd-life-b')}</defs>
<line x1="280" y1="196" x2="690" y2="158" stroke="currentColor" stroke-width="3" marker-end="url(#arr-hd-life-b)"/>
<text x="485" y="218" font-size="15" text-anchor="middle" fill="currentColor">even when adult SES climbs — the early risk remains</text>
</g>
<g class="fig-muted"><line x1="40" y1="236" x2="960" y2="236" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<text x="60" y="268" font-size="19" font-weight="700" fill="currentColor">ACCUMULATION (pathway) effect</text>
${stackCol(0, 'poor housing')}
${stackCol(1, '+ weak school')}
${stackCol(2, '+ hazardous job')}
${stackCol(3, '+ chronic stress')}
${stackCol(4, '+ no savings buffer')}
<g class="fig-accent-2">
<line x1="870" y1="385" x2="870" y2="262" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-life-r)"/>
<text x="884" y="318" font-size="15" font-weight="700" fill="currentColor">cumulative</text>
<text x="884" y="338" font-size="15" font-weight="700" fill="currentColor">risk</text>
</g>
<g class="fig-muted"><text x="500" y="452" font-size="15" text-anchor="middle" fill="currentColor">embryology's critical periods, run on housing, nutrition and stress instead of teratogens</text></g>
</svg>`

/* 6 — The access cascade: people lost at every step (lead, 1000×460) */
const cascadeSteps: Array<[string, number, string[]]> = [
  ['1 · has COVERAGE', 250, ['uninsurance,', 'UNDERinsurance', '(deductibles deter use)']],
  ['2 · REACHES care', 208, ['shortages, closures,', 'transport, clinic hours', 'vs inflexible jobs']],
  ['3 · AFFORDS care', 170, ['cost-sharing, drug prices', '→ cost-related', 'nonadherence']],
  ['4 · NAVIGATES care', 136, ['health literacy, language,', 'fragmented referrals,', 'paperwork']],
  ['5 · STAYS in care', 104, ['follow-up capacity,', 'childcare, trust after', 'bad experiences']],
]
const cascadeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-hd-casc')}</defs>
<line x1="30" y1="300" x2="975" y2="300" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-hd-casc)"/>
<text x="18" y="175" font-size="14" text-anchor="middle" fill="currentColor" transform="rotate(-90 18 175)">people still in care →</text>
${cascadeSteps
  .map(([name, h, lines], i) => {
    const x = 40 + i * 190
    const top = 300 - h
    return `<g class="fig-accent"><rect x="${x}" y="${top}" width="150" height="${h}" rx="6" fill="currentColor" fill-opacity="${0.3 - i * 0.05}" stroke="currentColor" stroke-width="2"/></g>
<text x="${x + 75}" y="${top - 12}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text>
${lines.map((l, k) => `<g class="fig-muted"><text x="${x + 75}" y="${326 + k * 20}" font-size="14" text-anchor="middle" fill="currentColor">${l}</text></g>`).join('\n')}
${
  i < 4
    ? `<g class="fig-accent-2"><text x="${x + 170}" y="${300 - cascadeSteps[i + 1][1] + 28}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">lost</text></g>`
    : ''
}`
  })
  .join('\n')}
<g class="fig-accent-2"><text x="500" y="418" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">cost barriers cut NECESSARY and unnecessary care alike — patients cannot tell which is which</text></g>
<g class="fig-muted"><text x="500" y="444" font-size="15" text-anchor="middle" fill="currentColor">so the losses at every step land hardest on the poor and the chronically ill</text></g>
</svg>`

/* 7 — Residential segregation as the assigner of a bundle of exposures (lead, 1000×460) */
const mediators = [
  'food deserts',
  'pollution siting — environmental injustice',
  'housing hazards: lead, mold, crowding',
  'violence exposure → chronic stress',
  'under-resourced schools → education → SES',
  'provider shortages, hospital closures',
]
const segregationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-hd-seg')}</defs>
<g class="fig-accent-2">
<defs>${ARROW('arr-hd-seg-r')}</defs>
<rect x="20" y="166" width="200" height="110" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="120" y="202" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">RESIDENTIAL</text>
<text x="120" y="228" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">SEGREGATION</text>
<text x="120" y="256" font-size="14" text-anchor="middle" fill="currentColor">ASSIGNS the exposures</text>
${mediators.map((_, i) => `<line x1="220" y1="221" x2="296" y2="${53 + i * 62}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-seg-r)"/>`).join('\n')}
</g>
<g class="fig-muted">
<text x="120" y="308" font-size="14" text-anchor="middle" fill="currentColor">concentrates poverty,</text>
<text x="120" y="328" font-size="14" text-anchor="middle" fill="currentColor">bundles the exposures</text>
<rect x="286" y="18" width="394" height="380" rx="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 6"/>
<text x="483" y="422" font-size="15" text-anchor="middle" fill="currentColor">a regression that "controls for" all of these</text>
<text x="483" y="442" font-size="15" text-anchor="middle" fill="currentColor">makes segregation's coefficient VANISH</text>
</g>
${mediators
  .map(
    (m, i) => `<rect x="300" y="${30 + i * 62}" width="366" height="46" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="483" y="${59 + i * 62}" font-size="15" text-anchor="middle" fill="currentColor">${m}</text>
<line x1="666" y1="${53 + i * 62}" x2="756" y2="${202 + (i - 2.5) * 14}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-seg)"/>`,
  )
  .join('\n')}
<g class="fig-accent">
<rect x="760" y="150" width="220" height="104" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="870" y="192" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">HEALTH</text>
<text x="870" y="222" font-size="14" text-anchor="middle" fill="currentColor">asthma, CVD, mortality …</text>
</g>
<g class="fig-accent-2">
<text x="870" y="300" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">those are MEDIATORS,</text>
<text x="870" y="322" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">not confounders</text>
</g>
<text x="870" y="356" font-size="15" text-anchor="middle" fill="currentColor">you cannot adjust away</text>
<text x="870" y="378" font-size="15" text-anchor="middle" fill="currentColor">the variable that ASSIGNED</text>
<text x="870" y="400" font-size="15" text-anchor="middle" fill="currentColor">the others</text>
<g class="fig-muted"><text x="870" y="436" font-size="14" text-anchor="middle" fill="currentColor">it explains HOW, never WHETHER</text></g>
</svg>`

/* 8 — Discrimination as a dosed exposure: weathering and the immigrant paradox (lead, 1000×460) */
const discriminationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-hd-disc')}</defs>
<g class="fig-muted"><text x="500" y="30" font-size="16" text-anchor="middle" fill="currentColor">treated like a toxin — DOSE, DURATION, MECHANISM: vigilance → stress axes → allostatic load</text></g>
<text x="265" y="68" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Weathering</text>
<line x1="90" y1="380" x2="470" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-disc)"/>
<line x1="90" y1="380" x2="90" y2="86" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-disc)"/>
<text x="60" y="235" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 60 235)">preterm-birth rate</text>
<text x="280" y="406" font-size="15" text-anchor="middle" fill="currentColor">maternal age →</text>
<g class="fig-accent-2">
<path d="M110,322 C250,300 360,230 440,150" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="260" y="238" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">marginalized group</text>
</g>
<g class="fig-accent">
<path d="M110,336 C250,330 360,318 440,300" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="260" y="360" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">advantaged group</text>
</g>
<g class="fig-muted">
<defs>${ARROW('arr-hd-disc-g')}</defs>
<line x1="452" y1="160" x2="452" y2="292" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-hd-disc-g)" marker-end="url(#arr-hd-disc-g)"/>
</g>
<text x="330" y="116" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">the gap WIDENS with age</text>
<g class="fig-muted"><text x="330" y="136" font-size="14" text-anchor="middle" fill="currentColor">cumulative dose of exposure</text></g>
<g class="fig-accent-2"><text x="270" y="438" font-size="15" text-anchor="middle" fill="currentColor">and persists at high SES — adjusting for SES does not erase it</text></g>
<g class="fig-muted"><line x1="510" y1="50" x2="510" y2="450" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<text x="760" y="68" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">The immigrant / acculturation paradox</text>
<line x1="590" y1="380" x2="970" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-disc)"/>
<line x1="590" y1="380" x2="590" y2="86" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-disc)"/>
${[650, 780, 910].map((x) => `<line x1="${x}" y1="380" x2="${x}" y2="388" stroke="currentColor" stroke-width="2"/>`).join('\n')}
<text x="650" y="406" font-size="14" text-anchor="middle" fill="currentColor">1st generation</text>
<text x="780" y="406" font-size="14" text-anchor="middle" fill="currentColor">2nd</text>
<text x="910" y="406" font-size="14" text-anchor="middle" fill="currentColor">3rd</text>
<g class="fig-muted"><text x="780" y="428" font-size="14" text-anchor="middle" fill="currentColor">generations in the new society →</text></g>
<g class="fig-muted">
<polyline points="650,320 780,250 910,180" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6"/>
<text x="922" y="176" font-size="14" fill="currentColor">income</text>
</g>
<g class="fig-accent">
<polyline points="650,150 780,230 910,310" fill="none" stroke="currentColor" stroke-width="3.5"/>
<circle cx="650" cy="150" r="7" fill="currentColor"/><circle cx="780" cy="230" r="7" fill="currentColor"/><circle cx="910" cy="310" r="7" fill="currentColor"/>
<text x="668" y="136" font-size="15" font-weight="700" fill="currentColor">health</text>
</g>
<g class="fig-accent-2"><text x="760" y="450" font-size="15" text-anchor="middle" fill="currentColor">same ancestry — health falls as exposure accumulates</text></g>
</svg>`

/* 9 — The intervention ladder, and the capstone passage's opt-out result (lead, 1000×460) */
const rungs: Array<[string, string, string, string]> = [
  ['STRUCTURAL / policy', 'segregation, income, insurance design', 'coverage expansion, housing mobility,', 'pollution zoning, income support'],
  ['INSTITUTIONAL', 'hospital placement, protocols, algorithms', 'site placement, automatic screening,', 'algorithm audits, interpreters'],
  ['ENCOUNTER', 'provider judgment, communication', 'decision support, standardized criteria,', 'bias feedback, shared-decision training'],
  ['INDIVIDUAL / behavioral', 'knowledge, trust, navigation', 'health literacy programs, community', 'health workers, patient navigation'],
]
const pct = (v: number) => 380 - v * 2.7
const ladderSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-hd-ladder')}</defs>
<g class="fig-muted">
<text x="115" y="40" font-size="14" text-anchor="middle" fill="currentColor">UPSTREAM</text>
<text x="115" y="404" font-size="14" text-anchor="middle" fill="currentColor">DOWNSTREAM</text>
</g>
${rungs
  .map(([lvl, mech, f1, f2], i) => {
    const y = 50 + i * 86
    return `<rect x="30" y="${y}" width="170" height="70" rx="10" fill="currentColor" fill-opacity="${0.16 - i * 0.04}" stroke="currentColor" stroke-width="2.5"/>
<text x="115" y="${y + 41}" font-size="${lvl.length > 16 ? 14 : 17}" font-weight="700" text-anchor="middle" fill="currentColor">${lvl}</text>
<g class="fig-muted"><text x="216" y="${y + 20}" font-size="14" fill="currentColor">mechanism: ${mech}</text></g>
<g class="fig-accent">
<text x="216" y="${y + 43}" font-size="14" fill="currentColor">fix: ${f1}</text>
<text x="216" y="${y + 63}" font-size="14" fill="currentColor">${f2}</text>
</g>`
  })
  .join('\n')}
<g class="fig-accent-2"><text x="290" y="438" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">a downstream fix never discharges an upstream finding</text></g>
<g class="fig-muted"><line x1="585" y1="30" x2="585" y2="450" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<text x="800" y="56" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Opt-out mailers (capstone passage)</text>
<line x1="650" y1="380" x2="650" y2="80" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-ladder)"/>
<line x1="650" y1="380" x2="965" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-hd-ladder)"/>
<text x="622" y="235" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 622 235)">% screened</text>
<g class="fig-muted">
<rect x="680" y="${pct(70)}" width="40" height="${380 - pct(70)}" rx="4" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<rect x="830" y="${pct(42)}" width="40" height="${380 - pct(42)}" rx="4" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<rect x="662" y="98" width="14" height="14" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<text x="684" y="110" font-size="13" fill="currentColor">before: physician referral</text>
</g>
<g class="fig-accent">
<rect x="730" y="${pct(82)}" width="40" height="${380 - pct(82)}" rx="4" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<rect x="880" y="${pct(69)}" width="40" height="${380 - pct(69)}" rx="4" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<rect x="662" y="120" width="14" height="14" rx="3" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<text x="684" y="132" font-size="13" fill="currentColor">after: automatic mailer</text>
</g>
<text x="700" y="${pct(70) - 8}" font-size="14" text-anchor="middle" fill="currentColor">70</text>
<text x="750" y="${pct(82) - 8}" font-size="14" text-anchor="middle" fill="currentColor">82</text>
<text x="850" y="${pct(42) - 8}" font-size="14" text-anchor="middle" fill="currentColor">42</text>
<text x="900" y="${pct(69) - 8}" font-size="14" text-anchor="middle" fill="currentColor">69</text>
<text x="725" y="402" font-size="14" text-anchor="middle" fill="currentColor">top income quartile</text>
<text x="875" y="402" font-size="14" text-anchor="middle" fill="currentColor">bottom quartile</text>
<g class="fig-accent-2"><text x="800" y="430" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">gap 28 → 13 points: +12 vs +27</text></g>
<g class="fig-muted"><text x="800" y="452" font-size="14" text-anchor="middle" fill="currentColor">no personal resources needed — so the poor gain most</text></g>
</svg>`

export const mcatHealthDisparitiesFigures: DeckFigurePlacement[] = [
  {
    at: 'The Central Finding of Medical Sociology',
    mode: 'lead',
    figure: {
      svg: gradientSvg,
      alt:
        'Left: an illustrative chart of mortality against social position (civil-service grade, SES step), ticks labelled clerks, deputies, executives. A blue line falls at every step from the lowest grade to the highest — the gradient: at every step up, mortality falls. A red dashed step function shows what a rich-versus-poor binary would look like — one drop after the poorest group, then flat — which the data refuse. Right: the civil-servant cohort studies — one employer, everyone employed, paid, housed, with universal coverage — yet mortality still falls grade by grade, so access to doctors cannot be the whole story; what still varies with grade is control, status and chronic stress.',
      caption: 'The curve is illustrative, not data.',
    },
    blocks: ['- A GRADIENT, not a threshold: executives outlive deputies, who outlive clerks — with identical coverage'],
  },
  {
    at: 'Social Determinants of Health',
    mode: 'lead',
    figure: {
      svg: determinantsSvg,
      alt:
        'Left: five determinant boxes — income and wealth (nutrition, housing, a buffer for emergencies), education (health literacy, jobs, a sense of control), occupation (hazards, autonomy versus demand, stable pay), neighborhood (food access, pollution, violence, clinics) and social connection (support and care; isolation rivals smoking) — with arrows converging on a circle labelled health; all five sit upstream of behaviour and biology. Right, fundamental cause theory: flexible resources (money, knowledge, power, connections) are redeployed against each era\'s threat — cholera, cigarettes, the newest screening test. Two illustrative mini bar charts across low to high SES: for an untreatable disease the bars are equal (no gradient); for a preventable or treatable disease they fall steeply (steep gradient). Footer: disparities are largest where medicine can act.',
      caption: 'The mini charts are illustrative, not data.',
    },
    blocks: ['- Fundamental cause fingerprint: steep gradients where disease is treatable, flat ones where medicine is helpless'],
  },
  {
    at: 'Stress Biology',
    mode: 'lead',
    figure: {
      svg: stressSvg,
      alt:
        'Top: a flow of four boxes. Chronic social stressors (economic insecurity, discrimination, unsafe neighborhoods — unrelenting) keep the HPA axis and sympathetic system chronically engaged (cortisol, catecholamines), producing allostatic load — cumulative physiological wear measured in blood pressure, cortisol, inflammation and metabolic markers — which leads to disease (cardiovascular, metabolic, birth outcomes). A bracket notes the load rises as SES falls and mediates part of the gradient. Bottom: two illustrative arousal-over-time plots. Acute stress: a single spike, then full recovery to baseline. Chronic stress: repeated spikes with a baseline that drifts upward and never returns — that drift is the load. Footer: weathering is the same wear, accelerated by discrimination — biological age runs ahead of calendar age.',
      caption: 'Both time plots are illustrative, not data.',
    },
    blocks: ['- Adversity becomes biology: the stress axes never switch off, and the wear is the allostatic load'],
  },
  {
    at: 'The Vocabulary of Difference vs. Injustice',
    mode: 'lead',
    figure: {
      svg: vocabSvg,
      alt:
        'Left: nested sets. The outer set is health disparity — any measurable difference in health between groups. Inside it sits the blue subset health inequity — the differences that are avoidable and unjust, produced by social arrangements rather than biology or free informed choice. An example in the outer set only: autoimmune rates tied to X-chromosome biology — a disparity but not an inequity. An example inside the inequity set, in red: asthma hospitalizations five times higher beside a freight corridor that zoning routed through low-income housing. Right: two tests as a decision flow. Is it avoidable? No — disparity only. Yes — is it unjust (socially produced, not free informed choice)? No — disparity only. Yes — inequity. Footer: disparities are documented across SES, race/ethnicity (persisting after controlling SES), gender and geography.',
    },
    blocks: ['- Every inequity is a disparity; only the AVOIDABLE and UNJUST ones are inequities — the exam tests the distinction'],
  },
  {
    at: 'Life-Course Effects',
    mode: 'lead',
    figure: {
      svg: lifeCourseSvg,
      alt:
        'An age axis from birth through childhood, adolescence, adulthood and later life, with two tracks. Top, the latency (critical-period) effect: a red block of childhood poverty (housing, nutrition, stress) sends a long dashed red arrow across the axis to adult cardiovascular and metabolic disease — it programs adult risk decades later — even though a rising blue line shows adult SES climbing: the early risk remains for the upwardly mobile. Bottom, the accumulation (pathway) effect: stacks of blocks grow taller with age — poor housing, plus a weak school, plus a hazardous job, plus chronic stress, plus no savings buffer — beside a red arrow labelled cumulative risk. Footer: embryology\'s critical periods, run on housing, nutrition and stress instead of teratogens.',
    },
    blocks: ['- Two mechanisms: LATENCY (an early exposure echoes later, whatever happens in between) and ACCUMULATION (disadvantage piles up)'],
  },
  {
    at: 'The Access Cascade',
    mode: 'lead',
    figure: {
      svg: cascadeSvg,
      alt:
        'Five blue bars falling from left to right, each shorter than the last, showing people still in care at each step; between bars the word lost in red. Step 1, has coverage: lost to uninsurance and underinsurance (deductibles deter use). Step 2, reaches care: provider shortages, closures, transport, clinic hours versus inflexible jobs. Step 3, affords care: cost-sharing and drug prices leading to cost-related nonadherence. Step 4, navigates care: health literacy, language, fragmented referrals, paperwork. Step 5, stays in care: follow-up capacity, childcare, trust after bad experiences. Footer: cost barriers cut necessary and unnecessary care alike — patients cannot tell which is which — so the losses at every step land hardest on the poor and the chronically ill.',
      caption: 'Bar heights are illustrative, not data.',
    },
    blocks: ['- Not one barrier but five gates in a row; a fix at one stage relocates the disparity to the next'],
  },
  {
    at: 'Residential Segregation',
    mode: 'lead',
    figure: {
      svg: segregationSvg,
      alt:
        'A causal diagram. On the left a red box, residential segregation, which assigns the exposures (it concentrates poverty and bundles the exposures). Red arrows fan out to six mediator boxes: food deserts; pollution siting (environmental injustice); housing hazards — lead, mold, crowding; violence exposure leading to chronic stress; under-resourced schools leading through education to SES; provider shortages and hospital closures. All six point to a blue box, health (asthma, CVD, mortality). A dashed grey frame around the six mediators is labelled: a regression that "controls for" all of these makes segregation\'s coefficient vanish. Right, in red: those are mediators, not confounders — you cannot adjust away the variable that assigned the others; adjustment explains how, never whether.',
    },
    blocks: ['- Over-adjustment trap: controlling for the pathways segregation created explains the MECHANISM, it never acquits the cause'],
  },
  {
    at: 'Discrimination as a Measurable Exposure',
    mode: 'lead',
    figure: {
      svg: discriminationSvg,
      alt:
        'Header: discrimination treated like a toxin — dose, duration, mechanism: vigilance, stress axes, allostatic load. Left, an illustrative weathering chart of preterm-birth rate against maternal age: a red curve for a marginalized group climbs steeply while a blue curve for an advantaged group stays nearly flat, so the gap widens with age (cumulative dose of exposure); note: and persists at high SES — adjusting for SES does not erase it. Right, the immigrant/acculturation paradox across first, second and third generations in the new society: a blue health line falls generation by generation while a dashed grey income line rises — same ancestry, health falls as exposure accumulates.',
      caption: 'Both charts are illustrative schematics, not data.',
    },
    blocks: ['- Weathering predicts age-WIDENING, SES-resistant gaps; the generation pattern pins them on exposure, not ancestry'],
  },
  {
    at: 'The Intervention Ladder',
    mode: 'lead',
    figure: {
      svg: ladderSvg,
      alt:
        'Left: a four-rung ladder from upstream to downstream. Structural/policy — mechanism in segregation, income, insurance design; fix: coverage expansion, housing mobility, pollution zoning, income support. Institutional — hospital placement, protocols, algorithms; fix: site placement, automatic screening, algorithm audits, interpreters. Encounter — provider judgment, communication; fix: decision support, standardized criteria, bias feedback, shared-decision training. Individual/behavioral — knowledge, trust, navigation; fix: health literacy programs, community health workers, patient navigation. A downstream fix never discharges an upstream finding. Right: a bar chart of per cent screened before (physician referral) and after (automatic opt-out mailer) from the lesson\'s capstone passage: top income quartile 70 to 82, bottom quartile 42 to 69 — the gap narrows from 28 to 13 points because a default needs no personal resources, so the disadvantaged gain most.',
      caption: 'Right panel: the lesson\'s hypothetical capstone-passage numbers, not real data.',
    },
    blocks: ['- Match the remedy to the LEVEL the data implicate; resource-dependent designs (opt-in, information) widen gaps, defaults narrow them'],
  },
]
