import type { DeckFigurePlacement } from './index'

/**
 * Social Psychology (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a decision fork, a 2×2
 * grid, a bar chart of a classic result …) — no textbook or prep-company figure
 * was copied. Charts of real studies use the published numbers and name the
 * study in the caption; curves and bars that are not data say "illustrative".
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-sp-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/* 1 — Elaboration likelihood model: the fork (replace-table, 560×440) */
const elmColumn = (x: number, l1: string, l2: string, l3: string, l4: string, l5: string, l6: string, arrow: string) => {
  const c = x + 120
  return `<rect x="${x}" y="196" width="240" height="60" rx="10" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2.5"/>
<text x="${c}" y="221" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text>
<text x="${c}" y="244" font-size="15" text-anchor="middle" fill="currentColor">${l2}</text>
<line x1="${c}" y1="256" x2="${c}" y2="278" stroke="currentColor" stroke-width="2.5" marker-end="url(#${arrow})"/>
<rect x="${x}" y="282" width="240" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="${c}" y="306" font-size="15" text-anchor="middle" fill="currentColor">${l3}</text>
<text x="${c}" y="330" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${l4}</text>
<line x1="${c}" y1="342" x2="${c}" y2="364" stroke="currentColor" stroke-width="2.5" marker-end="url(#${arrow})"/>
<rect x="${x}" y="368" width="240" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="${c}" y="392" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${l5}</text>
<text x="${c}" y="416" font-size="15" text-anchor="middle" fill="currentColor">${l6}</text>`
}

const elmSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-sp-elm')}</defs>
<rect x="170" y="14" width="220" height="48" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="280" y="44" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Persuasive message</text>
<line x1="280" y1="62" x2="280" y2="92" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-elm)"/>
<rect x="140" y="96" width="280" height="64" rx="28" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="280" y="122" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Motivated AND able</text>
<text x="280" y="146" font-size="16" text-anchor="middle" fill="currentColor">to think it through?</text>
<g class="fig-accent">
<defs>${ARROW('arr-sp-elm-b')}</defs>
<line x1="200" y1="160" x2="142" y2="192" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-elm-b)"/>
<text x="136" y="178" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">yes</text>
${elmColumn(20, 'CENTRAL route', 'careful, high effort', 'persuaded by', 'argument quality', 'lasting, resistant', 'attitude change', 'arr-sp-elm-b')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-sp-elm-r')}</defs>
<line x1="360" y1="160" x2="418" y2="192" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-elm-r)"/>
<text x="424" y="178" font-size="17" font-weight="700" fill="currentColor">no</text>
${elmColumn(300, 'PERIPHERAL route', 'superficial, low effort', 'persuaded by', 'surface cues', 'temporary', 'attitude change', 'arr-sp-elm-r')}
</g>
</svg>`

/* 2 — Cognitive dissonance: the flow and the $1 / $20 result (lead, 1000×460) */
const dissonanceSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sp-diss')}</defs>
<rect x="50" y="30" width="220" height="56" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="160" y="65" font-size="20" text-anchor="middle" fill="currentColor">"The task was boring"</text>
<rect x="330" y="30" width="220" height="56" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="440" y="65" font-size="20" text-anchor="middle" fill="currentColor">"I said it was fun"</text>
<g class="fig-accent-2"><text x="300" y="70" font-size="36" font-weight="700" text-anchor="middle" fill="currentColor">≠</text></g>
<line x1="160" y1="86" x2="160" y2="118" stroke="currentColor" stroke-width="2.5"/>
<line x1="440" y1="86" x2="440" y2="118" stroke="currentColor" stroke-width="2.5"/>
<line x1="160" y1="118" x2="440" y2="118" stroke="currentColor" stroke-width="2.5"/>
<line x1="300" y1="118" x2="300" y2="148" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-diss)"/>
<g class="fig-accent-2">
<rect x="190" y="152" width="220" height="56" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="300" y="187" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Dissonance</text>
</g>
<line x1="300" y1="208" x2="300" y2="240" stroke="currentColor" stroke-width="2.5"/>
<text x="312" y="232" font-size="18" fill="currentColor">three ways out</text>
<line x1="110" y1="240" x2="490" y2="240" stroke="currentColor" stroke-width="2.5"/>
<line x1="110" y1="240" x2="110" y2="272" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-diss)"/>
<line x1="300" y1="240" x2="300" y2="272" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-diss)"/>
<line x1="490" y1="240" x2="490" y2="272" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-diss)"/>
<g class="fig-accent">
<rect x="20" y="276" width="180" height="76" rx="10" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2.5"/>
<text x="110" y="306" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Change attitude</text>
<text x="110" y="334" font-size="18" text-anchor="middle" fill="currentColor">"it was kind of fun"</text>
</g>
<rect x="210" y="276" width="180" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="300" y="306" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Change behavior</text>
<text x="300" y="334" font-size="18" text-anchor="middle" fill="currentColor">stop, confess</text>
<rect x="400" y="276" width="180" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="490" y="306" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Add a justification</text>
<text x="490" y="334" font-size="18" text-anchor="middle" fill="currentColor">"$20 — fair enough"</text>
<g class="fig-muted"><text x="300" y="400" font-size="18" text-anchor="middle" fill="currentColor">No excuse available → the attitude is what moves</text></g>
<text x="800" y="50" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">"How enjoyable was the task?"</text>
<g class="fig-muted">
<text x="800" y="76" font-size="17" text-anchor="middle" fill="currentColor">rating from −5 to +5</text>
<line x1="640" y1="250" x2="975" y2="250" stroke="currentColor" stroke-width="2"/>
</g>
<line x1="640" y1="110" x2="640" y2="320" stroke="currentColor" stroke-width="2"/>
<line x1="634" y1="110" x2="646" y2="110" stroke="currentColor" stroke-width="2"/>
<line x1="634" y1="180" x2="646" y2="180" stroke="currentColor" stroke-width="2"/>
<line x1="634" y1="320" x2="646" y2="320" stroke="currentColor" stroke-width="2"/>
<text x="626" y="116" font-size="16" text-anchor="end" fill="currentColor">+2</text>
<text x="626" y="186" font-size="16" text-anchor="end" fill="currentColor">+1</text>
<text x="626" y="256" font-size="16" text-anchor="end" fill="currentColor">0</text>
<text x="626" y="326" font-size="16" text-anchor="end" fill="currentColor">−1</text>
<rect x="660" y="250" width="70" height="31.5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="695" y="304" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">−0.45</text>
<g class="fig-accent">
<rect x="765" y="155.5" width="70" height="94.5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
<text x="800" y="146" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">+1.35</text>
</g>
<rect x="870" y="250" width="70" height="3.5" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="905" y="278" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">−0.05</text>
<text x="695" y="350" font-size="18" text-anchor="middle" fill="currentColor">control</text>
<text x="800" y="350" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">paid $1</text>
<text x="905" y="350" font-size="18" text-anchor="middle" fill="currentColor">paid $20</text>
<g class="fig-muted">
<text x="800" y="400" font-size="17" text-anchor="middle" fill="currentColor">$1: no external excuse → the attitude shifts</text>
<text x="800" y="426" font-size="17" text-anchor="middle" fill="currentColor">$20: "I did it for the money" → no shift</text>
</g>
</svg>`

/* 3 — Kelley's covariation: the two patterns (replace-table, 560×440) */
const kelleyRow = (y: number, label: string, question: string, a: string, b: string) =>
  `<text x="14" y="${y + 22}" font-size="17" font-weight="700" fill="currentColor">${label}</text>
<text x="14" y="${y + 42}" font-size="14" fill="currentColor">${question}</text>
<g class="fig-accent"><rect x="210" y="${y + 7}" width="120" height="36" rx="18" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="270" y="${y + 31}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${a}</text></g>
<g class="fig-accent-2"><rect x="400" y="${y + 7}" width="120" height="36" rx="18" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="460" y="${y + 31}" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">${b}</text></g>`

const kelleySvg = `${SVG_OPEN} viewBox="0 0 560 440">
${kelleyRow(24, 'Consensus', 'do others do it too?', 'HIGH', 'LOW')}
${kelleyRow(86, 'Distinctiveness', 'only in this situation?', 'HIGH', 'LOW')}
${kelleyRow(148, 'Consistency', 'every time, here?', 'HIGH', 'HIGH')}
<g class="fig-accent">
<defs>${ARROW('arr-sp-kelley-b')}</defs>
<line x1="270" y1="206" x2="270" y2="244" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-kelley-b)"/>
<rect x="180" y="250" width="180" height="68" rx="10" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="270" y="278" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Situational</text>
<text x="270" y="304" font-size="15" text-anchor="middle" fill="currentColor">(external cause)</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-sp-kelley-r')}</defs>
<line x1="460" y1="206" x2="460" y2="244" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-kelley-r)"/>
<rect x="370" y="250" width="180" height="68" rx="10" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="460" y="278" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Dispositional</text>
<text x="460" y="304" font-size="15" text-anchor="middle" fill="currentColor">(internal cause)</text>
</g>
<text x="270" y="346" font-size="14" text-anchor="middle" fill="currentColor">everyone laughs,</text>
<text x="270" y="366" font-size="14" text-anchor="middle" fill="currentColor">only at this comedian</text>
<text x="270" y="388" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">→ it's the comedian</text>
<text x="460" y="346" font-size="14" text-anchor="middle" fill="currentColor">only Maria laughs,</text>
<text x="460" y="366" font-size="14" text-anchor="middle" fill="currentColor">at every comedian</text>
<text x="460" y="388" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">→ it's Maria</text>
<g class="fig-muted"><text x="280" y="428" font-size="15" text-anchor="middle" fill="currentColor">Consistency must be HIGH either way — no stable pattern, no attribution</text></g>
</svg>`

/* 4 — Attribution biases as a 2×2: whose behavior × how it went (replace-table, 560×440) */
const biasCell = (x: number, y: number, cls: string, quote: string, attribution: string, tag: string) =>
  `<g class="${cls}"><rect x="${x}" y="${y}" width="200" height="150" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="${x + 100}" y="${y + 86}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">${attribution}</text></g>
<text x="${x + 100}" y="${y + 52}" font-size="17" text-anchor="middle" fill="currentColor">${quote}</text>
<g class="fig-muted"><text x="${x + 100}" y="${y + 124}" font-size="14" text-anchor="middle" fill="currentColor">${tag}</text></g>`

const biasesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<rect x="140" y="16" width="200" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="350" y="16" width="200" height="44" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="8" y="70" width="122" height="150" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="8" y="232" width="122" height="150" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
</g>
<text x="240" y="44" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Success</text>
<text x="450" y="44" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Failure</text>
<text x="69" y="138" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">ME</text>
<text x="69" y="162" font-size="14" text-anchor="middle" fill="currentColor">(the actor)</text>
<text x="69" y="300" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">OTHERS</text>
<text x="69" y="324" font-size="14" text-anchor="middle" fill="currentColor">(I observe)</text>
${biasCell(140, 70, 'fig-accent-2', '"I\'m brilliant"', 'INTERNAL · disposition', 'self-serving bias')}
${biasCell(350, 70, 'fig-accent', '"the test was unfair"', 'EXTERNAL · situation', 'self-serving bias')}
${biasCell(140, 232, 'fig-accent-2', '"she\'s just smart"', 'INTERNAL · disposition', 'fundamental attribution error')}
${biasCell(350, 232, 'fig-accent-2', '"he\'s clumsy"', 'INTERNAL · disposition', 'fundamental attribution error')}
<g class="fig-muted"><text x="280" y="422" font-size="15" text-anchor="middle" fill="currentColor">Same failure, different cause by row = actor–observer bias</text></g>
</svg>`

/* 5 — Compliance techniques as sequences (replace-table, 560×440) */
const compBox = (x: number, y: number, l1: string, l2: string, cls?: string) => {
  const inner = `<rect x="${x}" y="${y}" width="160" height="48" rx="9" fill="${cls ? 'currentColor' : 'none'}" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="${x + 80}" y="${y + 20}" font-size="14" text-anchor="middle" fill="currentColor">${l1}</text>
<text x="${x + 80}" y="${y + 39}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">${l2}</text>`
  return cls ? `<g class="${cls}">${inner}</g>` : inner
}
const compRow = (y: number, title: string, principle: string, a: [string, string, string?], b: [string, string, string?], c: [string, string, string?]) =>
  `<text x="14" y="${y + 18}" font-size="17" font-weight="700" fill="currentColor">${title}</text>
<g class="fig-muted"><text x="546" y="${y + 18}" font-size="14" text-anchor="end" fill="currentColor">${principle}</text></g>
${compBox(14, y + 30, a[0], a[1], a[2])}
<line x1="176" y1="${y + 54}" x2="196" y2="${y + 54}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-comp)"/>
${compBox(200, y + 30, b[0], b[1], b[2])}
<line x1="362" y1="${y + 54}" x2="382" y2="${y + 54}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-comp)"/>
${compBox(386, y + 30, c[0], c[1], c[2])}`

const complianceSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-sp-comp')}</defs>
${compRow(8, 'Foot-in-the-door', 'consistency', ['small request', '✓ yes'], ['then a bigger one', 'same cause'], ['bigger request', '✓ yes', 'fig-accent'])}
${compRow(112, 'Door-in-the-face', 'reciprocity', ['huge request', '✗ refused', 'fig-accent-2'], ['then a smaller one', '"a concession"'], ['smaller request', '✓ yes', 'fig-accent'])}
${compRow(216, 'Lowball', 'commitment', ['attractive price', '✓ yes'], ['then the cost rises', 'fees, extras'], ['higher price', '✓ still yes', 'fig-accent'])}
${compRow(320, "That's-not-all", 'sweetened deal', ['an offer is made', 'no answer yet'], ['bonus added first', '"and a free case"'], ['the full package', '✓ yes', 'fig-accent'])}
<g class="fig-muted"><text x="280" y="428" font-size="15" text-anchor="middle" fill="currentColor">The ORDER of the requests is the technique</text></g>
</svg>`

/* 6 — Asch: headline results and the group-size curve (lead, 1000×460) */
const aschBar = (y: number, label: string, pct: number, value: string, cls: string) =>
  `<text x="40" y="${y}" font-size="19" fill="currentColor">${label}</text>
<g class="${cls}"><rect x="40" y="${y + 10}" width="${Math.max(4, pct * 3.6)}" height="32" rx="4" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="${40 + Math.max(4, pct * 3.6) + 10}" y="${y + 33}" font-size="19" font-weight="700" fill="currentColor">${value}</text></g>`

const aschSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="250" y="48" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Headline results (Asch 1951)</text>
${aschBar(96, 'critical-trial answers that conformed', 37, '37%', 'fig-accent-2')}
${aschBar(180, 'participants who conformed at least once', 75, '75%', 'fig-accent-2')}
${aschBar(264, 'errors with no group pressure (control)', 1, '&lt; 1%', 'fig-muted')}
<g class="fig-muted">
<line x1="40" y1="330" x2="400" y2="330" stroke="currentColor" stroke-width="1.5"/>
<text x="40" y="348" font-size="14" fill="currentColor">0%</text>
<text x="400" y="348" font-size="14" text-anchor="end" fill="currentColor">100%</text>
</g>
<text x="250" y="390" font-size="19" text-anchor="middle" fill="currentColor">An obviously wrong majority</text>
<text x="250" y="416" font-size="19" text-anchor="middle" fill="currentColor">still pulls about 1 answer in 3</text>
<g class="fig-muted"><line x1="500" y1="40" x2="500" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<text x="770" y="48" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Conformity vs. majority size (approx.)</text>
<line x1="580" y1="380" x2="580" y2="120" stroke="currentColor" stroke-width="2"/>
<line x1="580" y1="380" x2="970" y2="380" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<line x1="574" y1="320" x2="580" y2="320" stroke="currentColor" stroke-width="2"/>
<line x1="574" y1="260" x2="580" y2="260" stroke="currentColor" stroke-width="2"/>
<line x1="574" y1="200" x2="580" y2="200" stroke="currentColor" stroke-width="2"/>
<line x1="574" y1="140" x2="580" y2="140" stroke="currentColor" stroke-width="2"/>
<text x="566" y="386" font-size="15" text-anchor="end" fill="currentColor">0</text>
<text x="566" y="326" font-size="15" text-anchor="end" fill="currentColor">10</text>
<text x="566" y="266" font-size="15" text-anchor="end" fill="currentColor">20</text>
<text x="566" y="206" font-size="15" text-anchor="end" fill="currentColor">30</text>
<text x="566" y="146" font-size="15" text-anchor="end" fill="currentColor">40%</text>
<line x1="880" y1="130" x2="880" y2="380" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<text x="536" y="250" font-size="17" text-anchor="middle" fill="currentColor" transform="rotate(-90 536 250)">conforming answers</text>
<g class="fig-accent-2">
<rect x="595" y="362" width="50" height="18" rx="3" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<rect x="665" y="302" width="50" height="78" rx="3" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<rect x="735" y="188" width="50" height="192" rx="3" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<rect x="805" y="170" width="50" height="210" rx="3" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="620" y="352" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">3%</text>
<text x="690" y="292" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">13%</text>
<text x="760" y="178" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">32%</text>
<text x="830" y="160" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">~35%</text>
</g>
<g class="fig-accent">
<rect x="905" y="326" width="50" height="54" rx="3" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
<text x="930" y="316" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">~9%</text>
</g>
<text x="620" y="404" font-size="17" text-anchor="middle" fill="currentColor">1</text>
<text x="690" y="404" font-size="17" text-anchor="middle" fill="currentColor">2</text>
<text x="760" y="404" font-size="17" text-anchor="middle" fill="currentColor">3</text>
<text x="830" y="404" font-size="17" text-anchor="middle" fill="currentColor">4–15</text>
<text x="725" y="430" font-size="16" text-anchor="middle" fill="currentColor">confederates, all unanimous</text>
<g class="fig-accent">
<text x="930" y="404" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">majority +</text>
<text x="930" y="426" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">ONE ally</text>
</g>
</svg>`

/* 7 — Milgram: how far obedience fell with each situational change (lead, 1000×460) */
const milgramRow = (y: number, label: string, pct: number, cls: string) =>
  `<text x="400" y="${y + 25}" font-size="19" text-anchor="end" fill="currentColor">${label}</text>
<g class="${cls}"><rect x="420" y="${y}" width="${pct * 5}" height="36" rx="4" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="${420 + pct * 5 + 10}" y="${y + 25}" font-size="19" font-weight="700" fill="currentColor">${pct}%</text></g>`

const milgramSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="500" y="40" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Share who continued to the 450-volt maximum</text>
<g class="fig-muted">
<line x1="670" y1="60" x2="670" y2="416" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<text x="670" y="432" font-size="15" text-anchor="middle" fill="currentColor">50%</text>
<line x1="420" y1="60" x2="420" y2="416" stroke="currentColor" stroke-width="1.5"/>
</g>
${milgramRow(70, 'Baseline: victim unseen, Yale laboratory', 65, 'fig-accent-2')}
${milgramRow(128, 'Run-down office, no university name', 47.5, 'fig-accent')}
${milgramRow(186, 'Victim in the same room', 40, 'fig-accent')}
${milgramRow(244, "Must hold the victim's hand on the plate", 30, 'fig-accent')}
${milgramRow(302, 'Experimenter gives orders by phone', 20.5, 'fig-accent')}
${milgramRow(360, 'Two peers refuse to continue', 10, 'fig-accent')}
<g class="fig-muted"><text x="40" y="452" font-size="17" fill="currentColor">prestige ↓ · victim closer · authority remote · peers rebel</text></g>
</svg>`

/* 8 — Group processes: social facilitation fork + group polarization (lead, 1000×460) */
const groupSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sp-group')}</defs>
<text x="290" y="40" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Social facilitation</text>
<rect x="20" y="150" width="165" height="70" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="102" y="179" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Others present</text>
<text x="102" y="204" font-size="17" text-anchor="middle" fill="currentColor">audience, co-actors</text>
<line x1="185" y1="185" x2="221" y2="185" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-group)"/>
<rect x="225" y="150" width="150" height="70" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="300" y="179" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Arousal ↑</text>
<text x="300" y="204" font-size="16" text-anchor="middle" fill="currentColor">dominant response</text>
<g class="fig-accent">
<defs>${ARROW('arr-sp-group-b')}</defs>
<path d="M375 170 C 390 170, 386 105, 396 105" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-group-b)"/>
<rect x="400" y="70" width="170" height="70" rx="10" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2.5"/>
<text x="485" y="99" font-size="18" text-anchor="middle" fill="currentColor">simple, well-learned</text>
<text x="485" y="125" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">performance ↑</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-sp-group-r')}</defs>
<path d="M375 200 C 390 200, 386 265, 396 265" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-group-r)"/>
<rect x="400" y="230" width="170" height="70" rx="10" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2.5"/>
<text x="485" y="259" font-size="18" text-anchor="middle" fill="currentColor">complex, new task</text>
<text x="485" y="285" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">performance ↓</text>
</g>
<g class="fig-muted">
<text x="290" y="360" font-size="18" text-anchor="middle" fill="currentColor">expert sprinter: faster with a crowd</text>
<text x="290" y="388" font-size="18" text-anchor="middle" fill="currentColor">novice pianist: worse with an audience</text>
<line x1="600" y1="40" x2="600" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<text x="800" y="40" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Group polarization</text>
<text x="640" y="118" font-size="18" fill="currentColor">before discussion</text>
<line x1="640" y1="160" x2="960" y2="160" stroke="currentColor" stroke-width="2"/>
<line x1="800" y1="150" x2="800" y2="170" stroke="currentColor" stroke-width="2"/>
<circle cx="820" cy="160" r="8" fill="currentColor"/>
<circle cx="842" cy="160" r="8" fill="currentColor"/>
<circle cx="858" cy="160" r="8" fill="currentColor"/>
<circle cx="876" cy="160" r="8" fill="currentColor"/>
<circle cx="900" cy="160" r="8" fill="currentColor"/>
<text x="640" y="268" font-size="18" fill="currentColor">after discussion</text>
<line x1="640" y1="310" x2="960" y2="310" stroke="currentColor" stroke-width="2"/>
<line x1="800" y1="300" x2="800" y2="320" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent">
<defs>${ARROW('arr-sp-group-b2')}</defs>
<circle cx="880" cy="310" r="8" fill="currentColor"/>
<circle cx="902" cy="310" r="8" fill="currentColor"/>
<circle cx="918" cy="310" r="8" fill="currentColor"/>
<circle cx="936" cy="310" r="8" fill="currentColor"/>
<circle cx="954" cy="310" r="8" fill="currentColor"/>
<line x1="860" y1="180" x2="912" y2="292" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#arr-sp-group-b2)"/>
<text x="856" y="226" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">same direction,</text>
<text x="856" y="248" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">more extreme</text>
</g>
<g class="fig-muted">
<text x="640" y="345" font-size="16" fill="currentColor">against</text>
<text x="800" y="345" font-size="16" text-anchor="middle" fill="currentColor">neutral</text>
<text x="960" y="345" font-size="16" text-anchor="end" fill="currentColor">for</text>
<text x="800" y="400" font-size="18" text-anchor="middle" fill="currentColor">a like-minded group amplifies its own lean</text>
</g>
</svg>`

/* 9 — Bystander effect: the five-step model and the seizure study (lead, 1000×460) */
const stepBox = (x: number, n: string, l1: string, l2: string, block1: string, block2: string, cls?: string) => {
  const c = x + 80
  const box = `<rect x="${x}" y="40" width="160" height="60" rx="10" fill="${cls ? 'currentColor' : 'none'}" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="${c}" y="65" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">${n} ${l1}</text>
<text x="${c}" y="89" font-size="17" text-anchor="middle" fill="currentColor">${l2}</text>`
  return `${cls ? `<g class="${cls}">${box}</g>` : box}
<g class="fig-accent-2">
<line x1="${c}" y1="100" x2="${c}" y2="136" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arr-sp-byst-r)"/>
<text x="${c}" y="160" font-size="16" text-anchor="middle" fill="currentColor">${block1}</text>
<text x="${c}" y="182" font-size="16" text-anchor="middle" fill="currentColor">${block2}</text>
</g>`
}

const bystanderSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-sp-byst')}</defs>
<g class="fig-accent-2"><defs>${ARROW('arr-sp-byst-r')}</defs></g>
${stepBox(20, '1', 'Notice', 'the event', 'distracted,', 'in a hurry')}
<line x1="180" y1="70" x2="208" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-byst)"/>
${stepBox(212, '2', 'Interpret', 'as an emergency', 'pluralistic ignorance:', 'everyone looks calm')}
<line x1="372" y1="70" x2="400" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-byst)"/>
${stepBox(404, '3', 'Assume', 'responsibility', 'diffusion:', '"someone else will"')}
<line x1="564" y1="70" x2="592" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-byst)"/>
${stepBox(596, '4', 'Know how', 'to help', 'no skills', '(no CPR, no plan)')}
<line x1="756" y1="70" x2="784" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-byst)"/>
${stepBox(788, '5', 'Decide', 'to act', 'costs feel too high', '(danger, embarrassment)', 'fig-accent')}
<g class="fig-muted">
<text x="16" y="132" font-size="15" fill="currentColor">fails if</text>
<line x1="20" y1="212" x2="980" y2="212" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<text x="290" y="250" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Who reported a staged seizure</text>
<line x1="60" y1="420" x2="520" y2="420" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent">
<rect x="95" y="292.5" width="90" height="127.5" rx="4" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="140" y="282" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">85%</text>
</g>
<rect x="245" y="327" width="90" height="93" rx="4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
<text x="290" y="317" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">62%</text>
<g class="fig-accent-2">
<rect x="395" y="373.5" width="90" height="46.5" rx="4" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="440" y="363" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">31%</text>
</g>
<text x="140" y="446" font-size="18" text-anchor="middle" fill="currentColor">alone</text>
<text x="290" y="446" font-size="18" text-anchor="middle" fill="currentColor">1 other listener</text>
<text x="440" y="446" font-size="18" text-anchor="middle" fill="currentColor">4 other listeners</text>
<text x="770" y="250" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Diffusion of responsibility</text>
<rect x="580" y="300" width="110" height="64" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="635" y="327" font-size="17" text-anchor="middle" fill="currentColor">more</text>
<text x="635" y="350" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">bystanders</text>
<line x1="690" y1="332" x2="718" y2="332" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-byst)"/>
<rect x="722" y="300" width="130" height="64" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="787" y="327" font-size="17" text-anchor="middle" fill="currentColor">responsibility</text>
<text x="787" y="350" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">spread thin</text>
<line x1="852" y1="332" x2="880" y2="332" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-sp-byst)"/>
<g class="fig-accent-2">
<rect x="884" y="300" width="96" height="64" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="932" y="327" font-size="17" text-anchor="middle" fill="currentColor">each one</text>
<text x="932" y="350" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">helps less</text>
</g>
<g class="fig-muted"><text x="780" y="410" font-size="18" text-anchor="middle" fill="currentColor">the victim is no safer in a crowd</text></g>
</svg>`

export const mcatSocialPsychologyFigures: DeckFigurePlacement[] = [
  {
    at: 'Routes to Persuasion',
    mode: 'replace-table',
    figure: {
      svg: elmSvg,
      alt:
        'Flow chart of the elaboration likelihood model. A persuasive message arrives at the question "motivated AND able to think it through?". Yes leads to the central route: careful, high-effort processing, persuaded by argument quality, producing lasting and resistant attitude change. No leads to the peripheral route: superficial, low-effort processing, persuaded by surface cues, producing temporary attitude change.',
    },
    blocks: [
      '- **Central**: weighs argument quality → durable, resistant attitudes',
      '- **Peripheral**: surface cues (source, looks, number of arguments) → temporary',
      '- Distraction or low involvement pushes people to the peripheral route',
    ],
  },
  {
    at: 'Cognitive Dissonance',
    mode: 'lead',
    figure: {
      svg: dissonanceSvg,
      alt:
        'Left: two conflicting cognitions, "the task was boring" and "I said it was fun", merge into a red box labelled Dissonance, which fans out to three ways out: change the attitude ("it was kind of fun"), change the behavior (stop, confess), or add a justification ("$20 — fair enough"). Right: bar chart of Festinger and Carlsmith\'s enjoyment ratings on a −5 to +5 scale: control −0.45, participants paid $1 rated the task +1.35, participants paid $20 rated it −0.05. The $1 group, with no external excuse, is the only one whose attitude moved.',
      caption: 'Festinger & Carlsmith (1959): the smaller the bribe, the bigger the attitude change — $1 left no excuse, so the attitude had to give.',
    },
    blocks: ['- Insufficient external justification → the **attitude** is what moves to relieve the tension'],
  },
  {
    at: "Kelley's Covariation Model",
    mode: 'replace-table',
    figure: {
      svg: kelleySvg,
      alt:
        'Decision grid with three rows, consensus (do others do it too?), distinctiveness (only in this situation?) and consistency (every time, here?), and two columns of answers. High, high, high leads to a situational, external attribution: everyone laughs and only at this comedian, so the comedian is funny. Low consensus, low distinctiveness and high consistency leads to a dispositional, internal attribution: only Maria laughs and at every comedian, so Maria laughs at anything. Footer: consistency must be high either way; with no stable pattern there is no attribution.',
    },
    blocks: [
      '- **Consensus**: do others act the same way?',
      '- **Distinctiveness**: is it specific to THIS situation?',
      '- **Consistency**: does it happen every time here? (needed for any attribution)',
      '- High-high-high → situation; low-low-high → disposition',
    ],
  },
  {
    at: 'Major Attribution Biases',
    mode: 'replace-table',
    figure: {
      svg: biasesSvg,
      alt:
        'A two-by-two grid. Rows: me (the actor) and others (whom I observe). Columns: success and failure. My success: "I\'m brilliant", internal, disposition — self-serving bias. My failure: "the test was unfair", external, situation — self-serving bias. Others\' success: "she\'s just smart", internal. Others\' failure: "he\'s clumsy", internal — both the fundamental attribution error. Footer: the same failure explained differently by row is the actor–observer bias.',
    },
    blocks: [
      '- **FAE**: others\' behavior → disposition, situation ignored',
      '- **Actor–observer**: my behavior → situation; theirs → disposition',
      '- **Self-serving**: my success → me; my failure → circumstances',
      '- **Just-world**: "people get what they deserve" → victim blaming',
    ],
  },
  {
    at: 'Two Motives for Conformity',
    mode: 'lead',
    figure: {
      svg: aschSvg,
      alt:
        'Left: three horizontal bars of Asch\'s headline results: 37% of critical-trial answers conformed to the wrong unanimous majority, 75% of participants conformed at least once, and errors with no group pressure were under 1%. Right: bar chart of conforming answers against the size of a unanimous majority: about 3% with one confederate, 13% with two, 32% with three, and a plateau near 35% from four to fifteen. A separate blue bar shows that adding one dissenting ally to the majority cut conforming answers to roughly 9%.',
      caption: 'Asch (1951, 1955): headline figures on the left; the group-size and one-ally values on the right are approximate.',
    },
    blocks: ['- Unanimity is the lever: three confederates saturate it, one ally breaks it'],
  },
  {
    at: "Milgram's Obedience Study",
    mode: 'lead',
    figure: {
      svg: milgramSvg,
      alt:
        'Horizontal bar chart of the share of participants who continued to the 450-volt maximum. Baseline (victim unseen, Yale laboratory): 65%. Run-down office with no university name: 47.5%. Victim in the same room: 40%. Participant must hold the victim\'s hand on the shock plate: 30%. Experimenter gives orders by telephone: 20.5%. Two peers refuse to continue: 10%. A dashed line marks 50%.',
      caption: 'Milgram (1963 baseline; 1974 variations): every change that lowered obedience was a change to the situation, not the person.',
    },
    blocks: ['- Obedience is **situational**: remote authority, a closer victim, less prestige or rebelling peers all cut it'],
  },
  {
    at: 'Compliance Techniques',
    mode: 'replace-table',
    figure: {
      svg: complianceSvg,
      alt:
        'Four request sequences, each three boxes. Foot-in-the-door (consistency): a small request is accepted, then a bigger request for the same cause is accepted. Door-in-the-face (reciprocity): a huge request is refused, then a smaller request framed as a concession is accepted. Lowball (commitment): an attractive price is accepted, then the cost rises with fees and extras, and the higher price is still accepted. That\'s-not-all (a sweetened deal): an offer is made, a bonus is added before any answer, and the full package is accepted. Footer: the order of the requests is the technique.',
    },
    blocks: [
      '- **Foot-in-the-door**: small → large (consistency)',
      '- **Door-in-the-face**: large, refused → smaller (reciprocity)',
      '- **Lowball**: commit first, then the cost rises',
      '- **That\'s-not-all**: a bonus lands before the decision',
    ],
  },
  {
    at: 'Group Process Phenomena',
    mode: 'lead',
    figure: {
      svg: groupSvg,
      alt:
        'Left, social facilitation: others present (an audience or co-actors) raises arousal, which strengthens the dominant response; for a simple, well-learned task performance goes up, for a complex or new task it goes down. Examples: an expert sprinter runs faster with a crowd, a novice pianist plays worse with an audience. Right, group polarization: on an attitude line from against to for, five members start moderately on the "for" side; after discussion the same five sit further toward "for" — same direction, more extreme.',
      caption: 'Social facilitation splits by task difficulty; group polarization moves a like-minded group further the way it already leaned (illustrative).',
    },
    blocks: ['- Presence of others **amplifies the dominant response**; discussion **amplifies the shared lean**'],
  },
  {
    at: 'Bystander Effect',
    mode: 'lead',
    figure: {
      svg: bystanderSvg,
      alt:
        'Top: the five-step helping model as a chain — notice the event, interpret it as an emergency, assume responsibility, know how to help, decide to act — with a red "fails if" branch under each: distracted; pluralistic ignorance because everyone looks calm; diffusion of responsibility ("someone else will"); no skills; costs feel too high. Bottom left: bar chart of who reported a staged seizure in Darley and Latané\'s study: 85% when alone, 62% with one other listener, 31% with four other listeners. Bottom right: more bystanders leads to responsibility spread thin, so each one helps less — the victim is no safer in a crowd.',
      caption: 'Latané & Darley\'s decision model; the bars are Darley & Latané (1968), who reported the seizure by the end of the recording.',
    },
    blocks: ['- Helping can fail at **any** step; pluralistic ignorance stalls step 2, diffusion of responsibility stalls step 3'],
  },
]
