import type { DeckFigurePlacement } from './index'

/**
 * Development (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a flow of fit / no fit,
 * a staircase of stages, a reunion decision tree, a 2×2, a ladder of eight,
 * a variance bar, a weeks timeline …) — no textbook or prep-company figure
 * was copied. Curves and bars that are not data say "illustrative" in the
 * caption.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-dev-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/* 1 — Piaget's engine: does the new thing fit the schema? (lead, 1000×460) */
const engineSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dev-engine')}</defs>
<rect x="30" y="180" width="210" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="135" y="216" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">New information</text>
<text x="135" y="246" font-size="20" text-anchor="middle" fill="currentColor">a whale appears</text>
<line x1="240" y1="225" x2="296" y2="225" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dev-engine)"/>
<polygon points="300,225 410,150 520,225 410,300" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="410" y="218" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Fits an existing</text>
<text x="410" y="244" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">schema ("fish")?</text>
<g class="fig-accent">
<defs>${ARROW('arr-dev-engine-b')}</defs>
<polyline points="520,225 560,225 560,95 606,95" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dev-engine-b)"/>
<text x="582" y="70" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">yes</text>
<rect x="610" y="50" width="360" height="90" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="790" y="86" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">ASSIMILATION — fit it in</text>
<text x="790" y="116" font-size="20" text-anchor="middle" fill="currentColor">"it's a fish" · schema unchanged</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-dev-engine-r')}</defs>
<polyline points="520,225 560,225 560,355 606,355" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dev-engine-r)"/>
<text x="582" y="390" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">no</text>
<rect x="610" y="310" width="360" height="90" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="790" y="346" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">ACCOMMODATION — change it</text>
<text x="790" y="376" font-size="20" text-anchor="middle" fill="currentColor">new schema: "mammals that swim"</text>
</g>
<g class="fig-muted">
<defs>${ARROW('arr-dev-engine-m')}</defs>
<line x1="790" y1="142" x2="790" y2="304" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" marker-end="url(#arr-dev-engine-m)"/>
<text x="806" y="200" font-size="19" fill="currentColor">the fit keeps failing →</text>
<text x="806" y="226" font-size="19" fill="currentColor">disequilibrium</text>
<text x="410" y="340" font-size="19" text-anchor="middle" fill="currentColor">equilibration: the discomfort of a</text>
<text x="410" y="364" font-size="19" text-anchor="middle" fill="currentColor">failed prediction drives the switch</text>
</g>
</svg>`

/* 2 — Piaget's four stages as a staircase (replace-table, 560×440) */
const stageStep = (i: number, name: string, ages: string, ability: [string, string], limit: [string, string]) => {
  const x = 16 + i * 132
  const top = 300 - i * 70
  return `<rect x="${x}" y="${top}" width="132" height="${410 - top}" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<text x="${x + 66}" y="${top + 26}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text>
<text x="${x + 66}" y="${top + 46}" font-size="15" text-anchor="middle" fill="currentColor">${ages}</text>
<g class="fig-accent"><text x="${x + 66}" y="${top - 36}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">${ability[0]}</text>
<text x="${x + 66}" y="${top - 16}" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">${ability[1]}</text></g>
<g class="fig-accent-2"><text x="${x + 66}" y="${top + 74}" font-size="15" text-anchor="middle" fill="currentColor">${limit[0]}</text>
<text x="${x + 66}" y="${top + 94}" font-size="15" text-anchor="middle" fill="currentColor">${limit[1]}</text></g>`
}

const stagesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${stageStep(0, 'Sensorimotor', '0–2 yr', ['object', 'permanence'], ['out of sight =', 'out of mind'])}
${stageStep(1, 'Preoperational', '2–7 yr', ['symbolic play,', 'language'], ['egocentric;', 'no conservation'])}
${stageStep(2, 'Concrete op.', '7–11 yr', ['conservation,', 'reversibility'], ['nothing abstract', 'or hypothetical'])}
${stageStep(3, 'Formal op.', '11+ yr', ['hypothetico-', 'deductive'], ['no set failure;', 'not universal'])}
<g class="fig-accent"><text x="16" y="20" font-size="15" font-weight="700" fill="currentColor">■ marquee ability</text></g>
<g class="fig-accent-2"><text x="170" y="20" font-size="15" fill="currentColor">■ marquee failure</text></g>
<g class="fig-muted"><text x="544" y="432" font-size="15" text-anchor="end" fill="currentColor">age →</text></g>
</svg>`

/* 3 — Strange Situation: classify by the reunion (replace-table, 560×440) */
const attachBox = (i: number, name: string, lines: [string, string, string], before: string, cls?: string) => {
  const x = 16 + i * 132
  const c = x + 62
  const body = `<rect x="${x}" y="150" width="124" height="150" rx="10" fill="${cls ? 'currentColor' : 'none'}" fill-opacity="0.07" stroke="currentColor" stroke-width="${cls ? 3 : 2}"/>
<text x="${c}" y="180" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text>
<text x="${c}" y="212" font-size="15" text-anchor="middle" fill="currentColor">${lines[0]}</text>
<text x="${c}" y="234" font-size="15" text-anchor="middle" fill="currentColor">${lines[1]}</text>
<text x="${c}" y="256" font-size="15" text-anchor="middle" fill="currentColor">${lines[2]}</text>`
  return `<line x1="${c}" y1="110" x2="${c}" y2="146" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dev-attach)"/>
${cls ? `<g class="${cls}">${body}</g>` : body}
<g class="fig-muted"><text x="${c}" y="346" font-size="14" text-anchor="middle" fill="currentColor">${before}</text></g>`
}

const attachmentSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-dev-attach')}</defs>
<rect x="60" y="20" width="440" height="60" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="280" y="45" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Caregiver leaves … then RETURNS</text>
<text x="280" y="68" font-size="15" text-anchor="middle" fill="currentColor">what does the child do at the reunion?</text>
<line x1="280" y1="80" x2="280" y2="110" stroke="currentColor" stroke-width="2"/>
<line x1="78" y1="110" x2="474" y2="110" stroke="currentColor" stroke-width="2"/>
${attachBox(0, 'Secure', ['upset, then', 'soothed fast;', 'greets warmly'], 'explored freely', 'fig-accent')}
${attachBox(1, 'Avoidant', ['ignores or', 'avoids the', 'returning parent'], 'explored, aloof')}
${attachBox(2, 'Ambivalent', ['inconsolable;', 'clings yet', 'angrily resists'], 'clung, no play')}
${attachBox(3, 'Disorganized', ['frozen, dazed,', 'contradictory', 'approach-avoid'], 'maltreating care', 'fig-accent-2')}
<g class="fig-muted"><text x="16" y="324" font-size="14" fill="currentColor">earlier, with the caregiver present:</text></g>
<text x="280" y="400" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Crying at the separation classifies nothing —</text>
<text x="280" y="424" font-size="16" text-anchor="middle" fill="currentColor">the reunion does.</text>
</svg>`

/* 4 — Baumrind's 2×2 (lead, 1000×460) */
const parentingCell = (x: number, y: number, title: string, how: string, outcome: string, cls?: string) => {
  const inner = `<rect x="${x}" y="${y}" width="380" height="180" rx="12" fill="${cls ? 'currentColor' : 'none'}" fill-opacity="0.07" stroke="currentColor" stroke-width="${cls ? 3 : 2}"/>
<text x="${x + 190}" y="${y + 66}" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
<text x="${x + 190}" y="${y + 100}" font-size="20" text-anchor="middle" fill="currentColor">${how}</text>
<text x="${x + 190}" y="${y + 132}" font-size="20" text-anchor="middle" fill="currentColor">${outcome}</text>`
  return cls ? `<g class="${cls}">${inner}</g>` : inner
}

const parentingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dev-parent')}</defs>
<line x1="200" y1="410" x2="968" y2="410" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dev-parent)"/>
<line x1="190" y1="400" x2="190" y2="32" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dev-parent)"/>
<text x="590" y="448" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Demandingness (limits, control)</text>
<text x="60" y="220" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(-90 60 220)">Responsiveness (warmth)</text>
<g class="fig-muted">
<text x="390" y="436" font-size="19" text-anchor="middle" fill="currentColor">low</text>
<text x="780" y="436" font-size="19" text-anchor="middle" fill="currentColor">high</text>
<text x="150" y="128" font-size="19" text-anchor="middle" fill="currentColor">high</text>
<text x="150" y="316" font-size="19" text-anchor="middle" fill="currentColor">low</text>
</g>
${parentingCell(200, 30, 'PERMISSIVE', 'warm, few limits', '→ poor impulse control')}
${parentingCell(590, 30, 'AUTHORITATIVE', 'firm limits + warmth + explanation', '→ competence, self-regulation', 'fig-accent')}
${parentingCell(200, 218, 'NEGLECTFUL / UNINVOLVED', 'neither limits nor warmth', '→ worst outcomes', 'fig-accent-2')}
${parentingCell(590, 218, 'AUTHORITARIAN', 'obedience-first, punitive, cold', '→ anxiety, lower autonomy')}
</svg>`

/* 5 — Erikson's eight crises as a ladder (replace-table, 560×440) */
const ERIKSON: [string, string, string][] = [
  ['0–1', 'Trust vs. mistrust', 'hope'],
  ['1–3', 'Autonomy vs. shame/doubt', 'will'],
  ['3–6', 'Initiative vs. guilt', 'purpose'],
  ['6–12', 'Industry vs. inferiority', 'competence'],
  ['teens', 'Identity vs. role confusion', 'fidelity'],
  ['young adult', 'Intimacy vs. isolation', 'love'],
  ['middle adult', 'Generativity vs. stagnation', 'care'],
  ['late adult', 'Integrity vs. despair', 'wisdom'],
]

const eriksonRung = (i: number, [age, crisis, virtue]: [string, string, string]) => {
  const x = 30 + i * 10
  const top = 382 - i * 48
  return `<rect x="${x}" y="${top}" width="${544 - x}" height="42" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted"><text x="${x + 10}" y="${top + 27}" font-size="14" fill="currentColor">${age}</text></g>
<text x="${x + 112}" y="${top + 27}" font-size="16" font-weight="700" fill="currentColor">${crisis}</text>
<g class="fig-accent"><text x="534" y="${top + 27}" font-size="15" text-anchor="end" fill="currentColor">${virtue}</text></g>`
}

const eriksonSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<defs>${ARROW('arr-dev-erikson-m')}</defs>
<line x1="14" y1="430" x2="14" y2="36" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dev-erikson-m)"/>
<text x="40" y="20" font-size="14" fill="currentColor">age</text>
<text x="142" y="20" font-size="14" fill="currentColor">crisis (both outcomes matter)</text>
</g>
<g class="fig-accent"><text x="534" y="20" font-size="14" text-anchor="end" fill="currentColor">virtue if resolved</text></g>
${ERIKSON.map((row, i) => eriksonRung(i, row)).join('\n')}
</svg>`

/* 6 — Kohlberg: score the reasoning, never the verdict (lead, 1000×460) */
const kohlbergTier = (y: number, title: string, s1: string, s2: string) =>
  `<rect x="480" y="${y}" width="490" height="104" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="${y + 32}" font-size="22" font-weight="700" fill="currentColor">${title}</text>
<text x="500" y="${y + 62}" font-size="20" fill="currentColor">${s1}</text>
<text x="500" y="${y + 90}" font-size="20" fill="currentColor">${s2}</text>`

const kohlbergSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dev-kohl')}</defs>
<text x="130" y="48" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Heinz dilemma</text>
<rect x="30" y="80" width="200" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="130" y="117" font-size="22" text-anchor="middle" fill="currentColor">"Steal the drug"</text>
<rect x="30" y="300" width="200" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="130" y="337" font-size="22" text-anchor="middle" fill="currentColor">"Don't steal it"</text>
<g class="fig-muted">
<text x="130" y="226" font-size="19" text-anchor="middle" fill="currentColor">either verdict can be</text>
<text x="130" y="250" font-size="19" text-anchor="middle" fill="currentColor">argued at ANY stage</text>
</g>
<line x1="230" y1="110" x2="312" y2="186" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dev-kohl)"/>
<line x1="230" y1="330" x2="312" y2="254" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dev-kohl)"/>
<g class="fig-accent">
<defs>${ARROW('arr-dev-kohl-b')}</defs>
<circle cx="360" cy="220" r="46" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="360" y="214" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">WHY?</text>
<text x="360" y="240" font-size="18" text-anchor="middle" fill="currentColor">the reasoning</text>
<line x1="400" y1="196" x2="474" y2="96" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dev-kohl-b)"/>
<line x1="406" y1="220" x2="474" y2="220" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dev-kohl-b)"/>
<line x1="400" y1="244" x2="474" y2="344" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dev-kohl-b)"/>
</g>
${kohlbergTier(40, 'POSTCONVENTIONAL — principle', '5  social contract: laws are revisable agreements', '6  universal ethical principles, above the law')}
${kohlbergTier(168, 'CONVENTIONAL — social order', '3  approval: good boy / good girl', '4  law and order: duty keeps society running')}
${kohlbergTier(296, 'PRECONVENTIONAL — self-interest', '1  avoid punishment', "2  instrumental exchange: what's in it for me")}
<g class="fig-muted"><text x="725" y="440" font-size="19" text-anchor="middle" fill="currentColor">Gilligan: an ethic of care is a different voice, not a lower stage</text></g>
</svg>`

/* 7 — Genetically informative designs (replace-table, 560×440) */
const person = (cx: number, cy: number, cls: 'fig-accent' | 'fig-muted') =>
  `<g class="${cls}"><circle cx="${cx}" cy="${cy}" r="9" fill="currentColor"/><path d="M${cx - 14} ${cy + 30} C ${cx - 14} ${cy + 12}, ${cx + 14} ${cy + 12}, ${cx + 14} ${cy + 30} z" fill="currentColor"/></g>`

const house = (x: number, y: number, w: number, h: number) =>
  `<path d="M${x} ${y + 22} L${x + w / 2} ${y} L${x + w} ${y + 22} L${x + w} ${y + h} L${x} ${y + h} z" fill="none" stroke="currentColor" stroke-width="2"/>`

const designsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-dev-design')}</defs>
<text x="14" y="62" font-size="16" font-weight="700" fill="currentColor">Twin</text>
<text x="14" y="84" font-size="16" font-weight="700" fill="currentColor">study</text>
${house(130, 14, 220, 120)}
<g class="fig-muted"><text x="240" y="30" font-size="13" text-anchor="middle" fill="currentColor">one home</text></g>
${person(176, 62, 'fig-accent')}${person(200, 62, 'fig-accent')}
<text x="188" y="122" font-size="14" text-anchor="middle" fill="currentColor">MZ · 100%</text>
${person(280, 62, 'fig-accent')}${person(304, 62, 'fig-muted')}
<text x="292" y="122" font-size="14" text-anchor="middle" fill="currentColor">DZ · ~50%</text>
<text x="370" y="60" font-size="15" fill="currentColor">MZ pair far more alike</text>
<text x="370" y="82" font-size="15" fill="currentColor">than DZ pair</text>
<g class="fig-accent"><text x="370" y="108" font-size="16" font-weight="700" fill="currentColor">→ genes</text></g>
<g class="fig-muted"><line x1="14" y1="150" x2="546" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
<text x="14" y="206" font-size="16" font-weight="700" fill="currentColor">Adoption</text>
<text x="14" y="228" font-size="16" font-weight="700" fill="currentColor">study</text>
<rect x="110" y="166" width="122" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="171" y="191" font-size="14" text-anchor="middle" fill="currentColor">biological parents</text>
<rect x="110" y="230" width="122" height="38" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="171" y="255" font-size="14" text-anchor="middle" fill="currentColor">adoptive parents</text>
<line x1="234" y1="185" x2="286" y2="208" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dev-design)"/>
<line x1="234" y1="249" x2="286" y2="226" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dev-design)"/>
<g class="fig-muted"><text x="256" y="180" font-size="13" text-anchor="middle" fill="currentColor">genes</text>
<text x="256" y="262" font-size="13" text-anchor="middle" fill="currentColor">home</text></g>
${person(308, 203, 'fig-accent')}
<text x="308" y="258" font-size="14" text-anchor="middle" fill="currentColor">adoptee</text>
<text x="370" y="190" font-size="15" fill="currentColor">like bio parents</text>
<g class="fig-accent"><text x="370" y="211" font-size="16" font-weight="700" fill="currentColor">→ genes</text></g>
<text x="370" y="242" font-size="15" fill="currentColor">like adoptive parents</text>
<g class="fig-accent-2"><text x="370" y="263" font-size="16" font-weight="700" fill="currentColor">→ shared home</text></g>
<g class="fig-muted"><line x1="14" y1="286" x2="546" y2="286" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
<text x="14" y="346" font-size="16" font-weight="700" fill="currentColor">MZ twins</text>
<text x="14" y="368" font-size="16" font-weight="700" fill="currentColor">reared apart</text>
${house(130, 300, 96, 110)}
${house(254, 300, 96, 110)}
${person(178, 350, 'fig-accent')}
${person(302, 350, 'fig-accent')}
<g class="fig-muted"><text x="240" y="430" font-size="13" text-anchor="middle" fill="currentColor">same genes, different homes</text></g>
<text x="370" y="346" font-size="15" fill="currentColor">still alike despite</text>
<text x="370" y="368" font-size="15" fill="currentColor">different environments</text>
<g class="fig-accent"><text x="370" y="394" font-size="16" font-weight="700" fill="currentColor">→ genes</text></g>
</svg>`

/* 8 — Heritability is a population statistic (lead, 1000×460) */
const varianceBar = (y: number, label: string, h2: number) => {
  const gw = Math.round(380 * h2)
  return `<text x="60" y="${y - 14}" font-size="20" font-weight="700" fill="currentColor">${label}</text>
<g class="fig-accent"><rect x="60" y="${y}" width="${gw}" height="44" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="${60 + gw / 2}" y="${y + 29}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">genetic ${Math.round(h2 * 100)}%</text></g>
<g class="fig-muted"><rect x="${60 + gw}" y="${y}" width="${380 - gw}" height="44" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="${60 + gw + (380 - gw) / 2}" y="${y + 29}" font-size="20" text-anchor="middle" fill="currentColor">env. ${Math.round((1 - h2) * 100)}%</text></g>
<text x="452" y="${y + 29}" font-size="22" font-weight="700" fill="currentColor">h² = ${h2.toFixed(2)}</text>`
}

const plant = (x: number, ground: number, h: number) =>
  `<line x1="${x}" y1="${ground}" x2="${x}" y2="${ground - h}" stroke="currentColor" stroke-width="3"/><path d="M${x} ${ground - h + 22} q -16 -6 -18 -22 q 16 6 18 22 z M${x} ${ground - h + 34} q 16 -6 18 -22 q -16 6 -18 22 z" fill="currentColor"/>`

const heritabilitySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="60" y="40" font-size="22" font-weight="700" fill="currentColor">Same trait, same genes — two populations</text>
<g class="fig-muted"><text x="60" y="66" font-size="19" fill="currentColor">h² = share of the VARIANCE that is genetic</text></g>
${varianceBar(120, 'A: environments vary widely', 0.5)}
${varianceBar(240, 'B: environments made equal', 0.8)}
<g class="fig-accent-2"><text x="60" y="340" font-size="20" font-weight="700" fill="currentColor">h² rose with no change in anyone's genes:</text>
<text x="60" y="366" font-size="20" fill="currentColor">the environmental slice shrank, so the genetic</text>
<text x="60" y="392" font-size="20" fill="currentColor">share of what is LEFT grew.</text></g>
<g class="fig-muted"><line x1="560" y1="30" x2="560" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<text x="600" y="40" font-size="22" font-weight="700" fill="currentColor">One seed mix, two plots</text>
<g class="fig-muted"><rect x="600" y="196" width="220" height="14" fill="currentColor" fill-opacity="0.35" stroke="none"/>
<rect x="600" y="386" width="220" height="14" fill="currentColor" fill-opacity="0.35" stroke="none"/>
<text x="600" y="232" font-size="18" fill="currentColor">rich soil</text>
<text x="600" y="422" font-size="18" fill="currentColor">poor soil</text></g>
<g class="fig-accent">
${plant(622, 196, 118)}${plant(666, 196, 92)}${plant(710, 196, 136)}${plant(754, 196, 104)}${plant(798, 196, 124)}
${plant(622, 386, 48)}${plant(666, 386, 36)}${plant(710, 386, 58)}${plant(754, 386, 42)}${plant(798, 386, 52)}
</g>
<text x="840" y="110" font-size="18" fill="currentColor">WITHIN a plot:</text>
<text x="840" y="134" font-size="18" fill="currentColor">same soil, so the</text>
<text x="840" y="158" font-size="18" fill="currentColor">height differences</text>
<text x="840" y="182" font-size="18" fill="currentColor">are all genetic</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-dev-herit-r')}</defs>
<line x1="842" y1="248" x2="842" y2="378" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-dev-herit-r)" marker-end="url(#arr-dev-herit-r)"/>
<text x="858" y="296" font-size="18" font-weight="700" fill="currentColor">BETWEEN plots:</text>
<text x="858" y="320" font-size="18" fill="currentColor">soil, not genes;</text>
<text x="858" y="344" font-size="18" fill="currentColor">h² is silent here</text>
</g>
</svg>`

/* 9 — Prenatal timeline and the teratogen window (lead, 1000×460) */
const WEEK = (w: number) => 100 + w * 22
const prenatalSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dev-prenatal')}</defs>
<g class="fig-accent-2">
<rect x="${WEEK(2)}" y="60" width="${WEEK(8) - WEEK(2)}" height="270" fill="currentColor" fill-opacity="0.08" stroke="none"/>
<path d="M${WEEK(0)} 276 L${WEEK(2)} 268 C ${WEEK(3)} 160, ${WEEK(4)} 92, ${WEEK(5)} 90 C ${WEEK(6.5)} 92, ${WEEK(9)} 190, ${WEEK(14)} 236 C ${WEEK(22)} 270, ${WEEK(32)} 276, ${WEEK(38)} 278" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="${WEEK(13)}" y="110" font-size="20" font-weight="700" fill="currentColor">peak vulnerability: organogenesis, wk 3–8</text>
<text x="${WEEK(13)}" y="136" font-size="19" fill="currentColor">the same exposure hits whichever system is forming that week</text>
</g>
<line x1="100" y1="330" x2="960" y2="330" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dev-prenatal)"/>
<line x1="100" y1="330" x2="100" y2="52" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dev-prenatal)"/>
<text x="56" y="190" font-size="20" text-anchor="middle" fill="currentColor" transform="rotate(-90 56 190)">teratogen sensitivity</text>
<g class="fig-muted">
<line x1="${WEEK(2)}" y1="290" x2="${WEEK(2)}" y2="330" stroke="currentColor" stroke-width="2"/>
<line x1="${WEEK(8)}" y1="290" x2="${WEEK(8)}" y2="330" stroke="currentColor" stroke-width="2"/>
<text x="${WEEK(0)}" y="356" font-size="18" text-anchor="middle" fill="currentColor">0</text>
<text x="${WEEK(2)}" y="356" font-size="18" text-anchor="middle" fill="currentColor">2</text>
<text x="${WEEK(8)}" y="356" font-size="18" text-anchor="middle" fill="currentColor">8</text>
<text x="${WEEK(13)}" y="356" font-size="18" text-anchor="middle" fill="currentColor">13</text>
<text x="${WEEK(27)}" y="356" font-size="18" text-anchor="middle" fill="currentColor">27</text>
<text x="${WEEK(38)}" y="356" font-size="18" text-anchor="middle" fill="currentColor">38 wk</text>
</g>
<text x="${WEEK(2) - 6}" y="386" font-size="19" font-weight="700" text-anchor="end" fill="currentColor">germinal</text>
<text x="${WEEK(2) + 6}" y="386" font-size="19" font-weight="700" fill="currentColor">embryonic</text>
<text x="${WEEK(23)}" y="386" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">fetal — growth, brain maturation</text>
<g class="fig-muted"><text x="${WEEK(2) - 6}" y="408" font-size="15" text-anchor="end" fill="currentColor">zygote → implants</text>
<text x="${WEEK(2) + 6}" y="408" font-size="15" fill="currentColor">organogenesis</text></g>
<g class="fig-accent">
<rect x="${WEEK(3)}" y="418" width="${WEEK(38) - WEEK(3)}" height="20" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<text x="${WEEK(20.5)}" y="433" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">brain: vulnerable in every trimester</text>
</g>
</svg>`

export const mcatDevelopmentFigures: DeckFigurePlacement[] = [
  {
    at: "Piaget's Engine",
    mode: 'lead',
    figure: {
      svg: engineSvg,
      alt:
        'Flow chart. New information (a whale appears) enters a decision: does it fit an existing schema ("fish")? Yes leads to assimilation, shown in blue: it is called a fish and the schema is unchanged. No leads to accommodation, shown in red: the schema is changed and a new category, "mammals that swim", is created. A dashed arrow from assimilation to accommodation is labelled "the fit keeps failing: disequilibrium", and a note under the decision says equilibration, the discomfort of a failed prediction, drives the switch.',
      caption: 'Piaget’s engine: assimilation keeps the schema, accommodation rewrites it; equilibration decides which.',
    },
    blocks: ['- **Assimilate** = squeeze it into the old box; **accommodate** = build a new box'],
  },
  {
    at: 'The Four Stages',
    mode: 'replace-table',
    figure: {
      svg: stagesSvg,
      alt:
        'A four-step staircase rising with age. Sensorimotor (0–2 years): marquee ability object permanence; marquee failure out of sight equals out of mind. Preoperational (2–7): symbolic play and language; egocentric and fails conservation. Concrete operational (7–11): conservation and reversibility; nothing abstract or hypothetical. Formal operational (11 and up): hypothetico-deductive reasoning; no set failure, but not universally reached.',
    },
    blocks: [
      '- **Conservation** is the star demo: the preoperational child **centers** on height and cannot **reverse** the pouring',
      '- Object permanence begins ~8 mo, complete by 18–24 mo',
      '- Formal operations: isolate variables systematically (the pendulum task)',
    ],
  },
  {
    at: "Ainsworth's Strange Situation",
    mode: 'replace-table',
    figure: {
      svg: attachmentSvg,
      alt:
        'Decision tree. The caregiver leaves and then returns; the child’s behaviour at the reunion branches into four styles. Secure (blue): upset, then soothed fast, greets warmly; earlier explored freely. Avoidant: ignores or avoids the returning parent; earlier explored but aloof. Ambivalent: inconsolable, clings yet angrily resists; earlier clung and did not play. Disorganized (red): frozen, dazed, contradictory approach-avoid behaviour; associated with maltreating care. Footer: crying at the separation classifies nothing; the reunion does.',
    },
    blocks: [
      '- **Secure** is the majority and tracks sensitive, responsive caregiving',
      '- Ambivalent = seeks contact **and** fights it; avoidant = acts as if nothing happened',
      '- Disorganized is the one with no coherent strategy — linked to frightening care',
    ],
  },
  {
    at: 'Parenting Styles',
    mode: 'lead',
    figure: {
      svg: parentingSvg,
      alt:
        'Two-by-two grid. Horizontal axis demandingness (limits, control) from low to high; vertical axis responsiveness (warmth) from low to high. High warmth, high demand: authoritative (blue) — firm limits plus warmth plus explanation, leading to competence and self-regulation. High warmth, low demand: permissive — warm, few limits, leading to poor impulse control. Low warmth, high demand: authoritarian — obedience-first, punitive, cold, leading to anxiety and lower autonomy. Low warmth, low demand: neglectful or uninvolved (red) — the worst outcomes.',
      caption: 'Baumrind’s two axes: demandingness × responsiveness.',
    },
    blocks: ['- Two axes, four cells — **authoritative** (high/high) has the best average outcomes; all of it is correlational'],
  },
  {
    at: "Erikson's Eight Psychosocial Crises",
    mode: 'replace-table',
    figure: {
      svg: eriksonSvg,
      alt:
        'A ladder of eight rungs rising with age, each giving the age, the crisis and the virtue of a favourable resolution. 0–1: trust vs. mistrust, hope. 1–3: autonomy vs. shame/doubt, will. 3–6: initiative vs. guilt, purpose. 6–12: industry vs. inferiority, competence. Teens: identity vs. role confusion, fidelity. Young adult: intimacy vs. isolation, love. Middle adult: generativity vs. stagnation, care. Late adult: integrity vs. despair, wisdom.',
    },
    blocks: [
      '- Match the **age** AND the **struggle** — distractors offer the adjacent stage',
      '- Intimacy needs a formed identity first; generativity = investing in the next generation',
      '- Both outcomes matter: a crisis can be resolved badly',
    ],
  },
  {
    at: "Kohlberg's Moral Reasoning",
    mode: 'lead',
    figure: {
      svg: kohlbergSvg,
      alt:
        'Flow diagram. Two verdicts on the Heinz dilemma, "steal the drug" and "don’t steal it", both feed into one blue node labelled WHY? (the reasoning), with a note that either verdict can be argued at any stage. From the WHY node three arrows lead to three tiers. Postconventional (principle): stage 5 social contract, laws are revisable agreements; stage 6 universal ethical principles above the law. Conventional (social order): stage 3 approval, good boy / good girl; stage 4 law and order, duty keeps society running. Preconventional (self-interest): stage 1 avoid punishment; stage 2 instrumental exchange, what’s in it for me. Footer: Gilligan — an ethic of care is a different moral voice, not a lower stage.',
      caption: 'Kohlberg: the verdict is never scored; only the justification is.',
    },
    blocks: ['- Items that stage a character by their **conclusion** are traps — stage the **justification**'],
  },
  {
    at: 'The Genetically Informative Designs',
    mode: 'replace-table',
    figure: {
      svg: designsSvg,
      alt:
        'Three schematic designs. Twin study: in one home, an MZ pair sharing 100% of segregating genes and a DZ pair sharing about 50%; if the MZ pair is far more alike than the DZ pair, the difference points to genes. Adoption study: biological parents contribute genes and adoptive parents contribute the home to an adoptee; resembling the biological parents points to genes, resembling the adoptive parents points to the shared home. MZ twins reared apart: the same genes in two different houses; being alike anyway points to genes.',
    },
    blocks: [
      '- **Concordance** = both members of a pair show the trait',
      '- Caveats: MZ twins are treated more alike; adoptive homes are range-restricted; prenatal environment is shared by both twin types',
    ],
  },
  {
    at: 'Heritability',
    mode: 'lead',
    figure: {
      svg: heritabilitySvg,
      alt:
        'Left: two stacked variance bars for the same trait and the same genes. Population A, environments vary widely: genetic 50%, environmental 50%, heritability 0.50. Population B, environments made equal: genetic 80%, environmental 20%, heritability 0.80. The note says heritability rose with no change in anyone’s genes because the environmental slice shrank. Right: one seed mix grown in two plots. In rich soil the plants are tall and vary in height; in poor soil they are short and vary in height. Within a plot the soil is the same, so height differences are all genetic; the difference between the plots is soil, not genes, and heritability says nothing about it.',
      caption: 'Heritability is a share of variance in a population, never a share of one person (illustrative numbers).',
    },
    blocks: ['- "80% heritable" is a statement about **differences in a population**, not about 80% of your trait'],
  },
  {
    at: 'Prenatal Development & Teratogens',
    mode: 'lead',
    figure: {
      svg: prenatalSvg,
      alt:
        'Timeline from week 0 to week 38 with three periods: germinal (weeks 0–2, zygote to implantation), embryonic (weeks 3–8, shaded in red) and fetal (week 9 onward, growth and brain maturation). A red teratogen-sensitivity curve rises steeply at week 3, peaks around week 5 during organogenesis and declines through the fetal period without reaching zero. A blue bar beneath the axis spans weeks 3 to 38, labelled: brain, vulnerable in every trimester.',
      caption: 'Teratogen sensitivity across gestation (illustrative curve): timing decides which structure is hit.',
    },
    blocks: ['- Damage depends on **timing** (what is forming), dose and genotype — the brain’s window never closes'],
  },
]
