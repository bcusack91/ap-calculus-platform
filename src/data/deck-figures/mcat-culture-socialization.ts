import type { DeckFigurePlacement } from './index'

/**
 * Culture, Socialization & Deviance (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (two halves of culture,
 * a staircase of norms, nested circles, an illustrative lag chart, a life-course
 * timeline, a feedback loop, a 2×2 grid …) — no textbook or prep-company figure
 * was copied. Curves that are not data say "illustrative" in the caption.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-cs-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/* 1 — What culture is: the two halves, one marriage (lead, 1000×460) */
const pill = (x: number, y: number, w: number, label: string) =>
  `<rect x="${x}" y="${y}" width="${w}" height="44" rx="22" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="${x + w / 2}" y="${y + 29}" font-size="19" text-anchor="middle" fill="currentColor">${label}</text>`

const cultureSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-culture')}</defs>
<g class="fig-accent">
<rect x="30" y="24" width="450" height="276" rx="14" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<text x="255" y="60" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">MATERIAL culture</text>
</g>
<text x="255" y="86" font-size="17" text-anchor="middle" fill="currentColor">the physical objects a group makes and uses</text>
${pill(50, 112, 195, 'tools')}
${pill(265, 112, 195, 'clothing')}
${pill(50, 174, 195, 'architecture')}
${pill(265, 174, 195, 'technology')}
<g class="fig-muted"><text x="255" y="268" font-size="18" text-anchor="middle" fill="currentColor">you can touch it</text></g>
<g class="fig-accent-2">
<rect x="520" y="24" width="450" height="276" rx="14" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<text x="745" y="60" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">NONMATERIAL culture</text>
</g>
<text x="745" y="86" font-size="17" text-anchor="middle" fill="currentColor">the intangibles a group shares</text>
${pill(540, 112, 130, 'language')}
${pill(680, 112, 130, 'beliefs')}
${pill(820, 112, 130, 'values')}
${pill(610, 174, 130, 'norms')}
${pill(750, 174, 130, 'rituals')}
<g class="fig-muted"><text x="745" y="268" font-size="18" text-anchor="middle" fill="currentColor">you can only learn it</text></g>
<g class="fig-accent">
<rect x="110" y="330" width="290" height="50" rx="25" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="255" y="362" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">the wedding RING</text>
</g>
<line x1="410" y1="355" x2="586" y2="355" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-cs-culture)" marker-end="url(#arr-cs-culture)"/>
<text x="500" y="343" font-size="16" text-anchor="middle" fill="currentColor">one marriage</text>
<g class="fig-accent-2">
<rect x="600" y="330" width="290" height="50" rx="25" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="745" y="362" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">what the ring MEANS</text>
</g>
<g class="fig-muted"><text x="500" y="432" font-size="18" text-anchor="middle" fill="currentColor">both halves are learned from other people — transmitted socially, not genetically</text></g>
</svg>`

/* 2 — The normative ladder: a staircase graded by the reaction to a violation (lead, 1000×460) */
const step = (x: number, top: number, name: string, feels: string, example: string, sanction: string, cls: string, opacity: string) =>
  `<g class="${cls}"><rect x="${x}" y="${top}" width="220" height="${360 - top}" rx="8" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/>
<text x="${x + 110}" y="${top + 38}" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text></g>
<text x="${x + 110}" y="${top - 68}" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">${feels}</text>
<text x="${x + 110}" y="${top - 44}" font-size="17" text-anchor="middle" fill="currentColor">${example}</text>
<g class="fig-muted"><text x="${x + 110}" y="${top - 20}" font-size="16" text-anchor="middle" fill="currentColor">${sanction}</text></g>`

const ladderSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-ladder')}</defs>
${step(40, 300, 'FOLKWAY', 'feels rude, odd', 'backwards in an elevator', 'stares, mild disapproval', 'fig-accent-2', '0.05')}
${step(270, 230, 'MORE (MOR-ay)', 'feels immoral', 'cheating on an exam', 'condemnation, ostracism', 'fig-accent-2', '0.1')}
${step(500, 160, 'TABOO', 'feels unthinkable', 'incest, cannibalism', 'revulsion, expulsion', 'fig-accent-2', '0.16')}
${step(730, 90, 'LAW', 'illegal — a formalized norm', 'theft', 'state-administered punishment', 'fig-accent', '0.1')}
<g class="fig-accent"><text x="840" y="156" font-size="16" text-anchor="middle" fill="currentColor">written down,</text>
<text x="840" y="178" font-size="16" text-anchor="middle" fill="currentColor">enforced by the state</text></g>
<line x1="40" y1="392" x2="960" y2="392" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-ladder)"/>
<text x="500" y="424" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">graded by the REACTION to a violation, not by the topic of the rule</text>
<g class="fig-muted">
<text x="40" y="450" font-size="16" fill="currentColor">informal sanctions: stares, gossip</text>
<text x="960" y="450" font-size="16" text-anchor="end" fill="currentColor">formal sanctions: fines, prison</text>
</g>
</svg>`

/* 3 — Cultures within and against, and what happens when cultures meet (lead, 1000×460) */
const meetRow = (cy: number, title: string, sub: string, after: string) =>
  `<text x="620" y="${cy + 6}" font-size="18" font-weight="700" fill="currentColor">${title}</text>
<g class="fig-muted"><text x="620" y="${cy + 52}" font-size="14" fill="currentColor">${sub}</text></g>
<circle cx="800" cy="${cy}" r="24" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent-2"><circle cx="836" cy="${cy - 14}" r="12" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g>
<line x1="862" y1="${cy}" x2="894" y2="${cy}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-within)"/>
${after}`

const withinSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-within')}</defs>
<circle cx="230" cy="220" r="170" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<text x="200" y="92" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">DOMINANT</text>
<text x="200" y="116" font-size="18" text-anchor="middle" fill="currentColor">culture</text>
<g class="fig-accent">
<circle cx="170" cy="260" r="78" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="170" y="252" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">subculture</text>
<text x="170" y="275" font-size="15" text-anchor="middle" fill="currentColor">coexists inside</text>
<text x="170" y="297" font-size="13" text-anchor="middle" fill="currentColor">med students, gamers</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cs-within-r')}</defs>
<circle cx="390" cy="130" r="72" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="390" y="126" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">counterculture</text>
<text x="390" y="150" font-size="15" text-anchor="middle" fill="currentColor">opposes</text>
<line x1="278" y1="193" x2="329" y2="164" stroke="currentColor" stroke-width="3" marker-start="url(#arr-cs-within-r)" marker-end="url(#arr-cs-within-r)"/>
</g>
<g class="fig-muted">
<text x="440" y="228" font-size="15" fill="currentColor">separatists,</text>
<text x="440" y="248" font-size="15" fill="currentColor">1960s communes</text>
<line x1="600" y1="20" x2="600" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<text x="300" y="430" font-size="17" text-anchor="middle" fill="currentColor">distinct ≠ opposed: the line is ACTIVE opposition to dominant norms</text>
</g>
<text x="800" y="26" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">When cultures meet</text>
${meetRow(70, 'Assimilation', 'the minority takes on the dominant culture', '<circle cx="940" cy="70" r="28" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>')}
${meetRow(215, 'Multiculturalism', 'distinct cultures coexist — the salad bowl', '<g class="fig-muted"><rect x="903" y="181" width="84" height="68" rx="12" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/></g><circle cx="930" cy="219" r="20" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/><g class="fig-accent-2"><circle cx="965" cy="203" r="12" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g>')}
${meetRow(360, 'Amalgamation', 'a genuinely new blend — the melting pot', '<g class="fig-accent"><circle cx="940" cy="360" r="28" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/></g>')}
</svg>`

/* 4 — Culture in motion: diffusion between cultures, and Ogburn's culture lag (lead, 1000×460) */
const motionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="240" y="40" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">How cultures change</text>
<g class="fig-muted">
<ellipse cx="240" cy="210" rx="215" ry="135" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/>
<line x1="490" y1="20" x2="490" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<circle cx="140" cy="210" r="78" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<circle cx="340" cy="210" r="78" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<text x="140" y="162" font-size="17" text-anchor="middle" fill="currentColor">culture A</text>
<text x="340" y="162" font-size="17" text-anchor="middle" fill="currentColor">culture B</text>
<g class="fig-accent-2">
<circle cx="140" cy="214" r="24" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="140" y="219" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">new</text>
<text x="140" y="264" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">innovation</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-cs-motion-b')}</defs>
<path d="M195,155 Q240,105 285,155" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-motion-b)"/>
<path d="M285,265 Q240,315 195,265" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-motion-b)"/>
<text x="240" y="98" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">diffusion</text>
<circle cx="340" cy="214" r="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>
<text x="340" y="264" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">adopted</text>
</g>
<g class="fig-muted"><text x="240" y="328" font-size="15" text-anchor="middle" fill="currentColor">elements spread both ways</text></g>
<text x="240" y="378" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">globalization</text>
<g class="fig-muted"><text x="240" y="402" font-size="15" text-anchor="middle" fill="currentColor">worldwide integration — diffusion accelerates</text></g>
<text x="760" y="40" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Culture lag (Ogburn)</text>
<line x1="560" y1="380" x2="560" y2="60" stroke="currentColor" stroke-width="2"/>
<line x1="560" y1="380" x2="965" y2="380" stroke="currentColor" stroke-width="2"/>
<text x="962" y="404" font-size="16" text-anchor="end" fill="currentColor">time →</text>
<text x="540" y="220" font-size="16" text-anchor="middle" fill="currentColor" transform="rotate(-90 540 220)">amount of change</text>
<g class="fig-accent">
<path d="M560,378 C720,370 800,140 960,80" fill="none" stroke="currentColor" stroke-width="3.5"/>
<line x1="580" y1="78" x2="610" y2="78" stroke="currentColor" stroke-width="3.5"/>
<text x="620" y="84" font-size="17" fill="currentColor">material culture — the technology</text>
</g>
<g class="fig-accent-2">
<path d="M560,378 C760,374 860,300 960,240" fill="none" stroke="currentColor" stroke-width="3.5"/>
<line x1="580" y1="104" x2="610" y2="104" stroke="currentColor" stroke-width="3.5"/>
<text x="620" y="110" font-size="17" fill="currentColor">nonmaterial culture — norms, ethics, law</text>
</g>
<g class="fig-muted">
<defs>${ARROW('arr-cs-motion-g')}</defs>
<line x1="851" y1="160" x2="851" y2="296" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-cs-motion-g)" marker-end="url(#arr-cs-motion-g)"/>
</g>
<text x="864" y="222" font-size="19" font-weight="700" fill="currentColor">culture lag</text>
<g class="fig-muted">
<text x="760" y="432" font-size="16" text-anchor="middle" fill="currentColor">the tool arrives before the rules for using it</text>
<text x="760" y="454" font-size="16" text-anchor="middle" fill="currentColor">gene editing exists; a consensus ethics for it does not</text>
</g>
</svg>`

/* 5 — The agents of socialization across the life course (replace-table, 560×440) */
const agentBar = (x1: number, x2: number, y: number, opacity: string, cls?: string) => {
  const r = `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="34" rx="6" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2"/>`
  return cls ? `<g class="${cls}">${r}</g>` : r
}
const agentRow = (y: number, label: string, tag: string, tagX: number, bars: string, anchorEnd = false) =>
  `<text x="8" y="${y + 23}" font-size="16" font-weight="700" fill="currentColor">${label}</text>
${bars}
<g class="fig-muted"><text x="${tagX}" y="${y + 50}" font-size="13" ${anchorEnd ? 'text-anchor="end" ' : ''}fill="currentColor">${tag}</text></g>`

const agentsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-cs-agents')}</defs>
<g class="fig-muted">
<text x="128" y="32" font-size="14" text-anchor="middle" fill="currentColor">early childhood</text>
<text x="246" y="32" font-size="14" text-anchor="middle" fill="currentColor">school years</text>
<text x="363" y="32" font-size="14" text-anchor="middle" fill="currentColor">adolescence</text>
<text x="481" y="32" font-size="14" text-anchor="middle" fill="currentColor">adulthood</text>
<line x1="187" y1="44" x2="187" y2="362" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="305" y1="44" x2="305" y2="362" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<line x1="422" y1="44" x2="422" y2="362" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
</g>
${agentRow(56, 'Family', 'first and most powerful: language, basic norms, class habits', 72,
  agentBar(70, 187, 56, '0.3', 'fig-accent-2') + agentBar(187, 540, 56, '0.08'))}
${agentRow(116, 'School', 'universalistic standards, the hidden curriculum', 189, agentBar(187, 422, 116, '0.18'))}
${agentRow(176, 'Peers', 'the first norms adults did not choose', 189,
  agentBar(187, 305, 176, '0.1') + agentBar(305, 422, 176, '0.3', 'fig-accent') + agentBar(422, 540, 176, '0.1'))}
${agentRow(236, 'Media', 'norms and role models without face-to-face contact', 112, agentBar(110, 540, 236, '0.18'))}
<text x="8" y="310" font-size="14" font-weight="700" fill="currentColor">Workplace,</text>
<text x="8" y="328" font-size="14" font-weight="700" fill="currentColor">religion, state</text>
${agentBar(422, 540, 296, '0.18')}
<g class="fig-muted"><text x="540" y="346" font-size="13" text-anchor="end" fill="currentColor">adult roles and their rituals</text></g>
<line x1="70" y1="362" x2="552" y2="362" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-agents)"/>
<text x="70" y="382" font-size="13" text-anchor="middle" fill="currentColor">birth</text>
<text x="187" y="382" font-size="13" text-anchor="middle" fill="currentColor">~6</text>
<text x="305" y="382" font-size="13" text-anchor="middle" fill="currentColor">~13</text>
<text x="422" y="382" font-size="13" text-anchor="middle" fill="currentColor">~18</text>
<text x="520" y="382" font-size="13" text-anchor="middle" fill="currentColor">age</text>
<g class="fig-accent-2">
<line x1="70" y1="402" x2="185" y2="402" stroke="currentColor" stroke-width="3"/>
<text x="128" y="424" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">PRIMARY socialization</text>
</g>
<g class="fig-accent">
<line x1="191" y1="402" x2="540" y2="402" stroke="currentColor" stroke-width="3"/>
<text x="365" y="424" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">SECONDARY — new roles, all life long</text>
</g>
</svg>`

/* 6 — Cooley's looking-glass self: a three-step loop that never stops (lead, 1000×460) */
const cooleySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-cooley')}</defs>
<rect x="60" y="56" width="300" height="84" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="210" y="90" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">1 · I imagine how I APPEAR</text>
<text x="210" y="118" font-size="18" text-anchor="middle" fill="currentColor">to the other person</text>
<line x1="360" y1="98" x2="636" y2="98" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-cooley)"/>
<rect x="640" y="56" width="300" height="84" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="790" y="90" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">2 · I imagine their JUDGMENT</text>
<text x="790" y="118" font-size="18" text-anchor="middle" fill="currentColor">of that appearance</text>
<path d="M790,140 L790,372 L654,372" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-cooley)"/>
<g class="fig-accent">
<rect x="350" y="330" width="300" height="84" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="500" y="364" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">3 · I develop a self-feeling</text>
<text x="500" y="392" font-size="18" text-anchor="middle" fill="currentColor">pride or shame → my self-concept</text>
</g>
<path d="M350,372 L210,372 L210,144" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-cooley)"/>
<g class="fig-muted">
<text x="196" y="250" font-size="16" text-anchor="end" fill="currentColor">and again,</text>
<text x="196" y="272" font-size="16" text-anchor="end" fill="currentColor">for life</text>
</g>
<ellipse cx="500" cy="228" rx="140" ry="62" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="222" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">the other = my mirror</text>
<text x="500" y="247" font-size="15" text-anchor="middle" fill="currentColor">as I PICTURE them, not as they are</text>
<g class="fig-accent-2"><text x="500" y="446" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">an imagined judgment can be wrong and still build the self (Thomas theorem)</text></g>
</svg>`

/* 7 — Mead's stages of role-taking, and the "I" / "me" dialogue (lead, 1000×460) */
const meadStage = (x: number, top: number, name1: string, name2: string, age: string, key: string, sub: string, cls?: string) => {
  const c = x + 80
  const box = `<rect x="${x}" y="${top}" width="160" height="${370 - top}" rx="8" fill="${cls ? 'currentColor' : 'none'}" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="${c}" y="${top + 30}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">${name1}</text>
<text x="${c}" y="${top + 54}" font-size="${name2 ? 20 : 16}" ${name2 ? 'font-weight="700" ' : ''}text-anchor="middle" fill="currentColor">${name2 || age}</text>`
  return `${cls ? `<g class="${cls}">${box}</g>` : box}
<text x="${c}" y="${top + 86}" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">${key}</text>
<g class="fig-muted"><text x="${c}" y="${top + 108}" font-size="15" text-anchor="middle" fill="currentColor">${sub}</text></g>`
}

const meadSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-mead')}</defs>
${meadStage(20, 240, 'Preparatory', '', 'under ~3', 'imitates only', 'no role is taken')}
${meadStage(185, 180, 'Play', '', '~3 – 6', 'ONE role at a time', 'a significant other')}
${meadStage(350, 120, 'Game', '', '~7 and up', 'MANY roles at once', 'the shortstop')}
${meadStage(515, 60, 'Generalized', 'other', '', "society's attitude", '"what people expect"', 'fig-accent')}
<line x1="20" y1="392" x2="680" y2="392" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-mead)"/>
<text x="350" y="420" font-size="17" text-anchor="middle" fill="currentColor">how many others the child can take the role of:</text>
<text x="350" y="446" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">none → one → many → everyone</text>
<g class="fig-muted"><line x1="698" y1="20" x2="698" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<text x="850" y="56" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">The self in dialogue</text>
<g class="fig-accent-2">
<rect x="720" y="96" width="260" height="80" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="850" y="130" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">the "I"</text>
<text x="850" y="158" font-size="15" text-anchor="middle" fill="currentColor">spontaneous, impulsive, creative</text>
</g>
<line x1="745" y1="180" x2="745" y2="252" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-cs-mead)" marker-end="url(#arr-cs-mead)"/>
<text x="768" y="222" font-size="15" fill="currentColor">behavior = their negotiation</text>
<g class="fig-accent">
<rect x="720" y="256" width="260" height="80" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="850" y="290" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">the "me"</text>
<text x="850" y="318" font-size="15" text-anchor="middle" fill="currentColor">others' expectations, internalized</text>
</g>
<g class="fig-muted">
<text x="850" y="376" font-size="15" text-anchor="middle" fill="currentColor">all "me" → pure conformity</text>
<text x="850" y="400" font-size="15" text-anchor="middle" fill="currentColor">all "I" → pure impulse</text>
</g>
</svg>`

/* 8 — Merton's strain theory as a goals × means grid (lead, 1000×460) */
const mertonCell = (x: number, y: number, name: string, l1: string, l2: string, cls?: string) => {
  const inner = `<rect x="${x}" y="${y}" width="190" height="110" rx="10" fill="${cls ? 'currentColor' : 'none'}" fill-opacity="0.1" stroke="currentColor" stroke-width="${cls ? 3 : 2.5}"/>
<text x="${x + 95}" y="${y + 34}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">${name}</text>
<text x="${x + 95}" y="${y + 62}" font-size="15" text-anchor="middle" fill="currentColor">${l1}</text>
<text x="${x + 95}" y="${y + 84}" font-size="15" text-anchor="middle" fill="currentColor">${l2}</text>`
  return cls ? `<g class="${cls}">${inner}</g>` : inner
}

const mertonSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-merton')}</defs>
<g class="fig-muted"><text x="375" y="48" font-size="16" text-anchor="middle" fill="currentColor">legitimate MEANS (school, a job)</text></g>
<text x="275" y="86" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">accepts the means</text>
<text x="475" y="86" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">rejects the means</text>
<g class="fig-muted"><text x="30" y="225" font-size="16" text-anchor="middle" fill="currentColor" transform="rotate(-90 30 225)">cultural GOALS (wealth, success)</text></g>
<text x="110" y="160" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">accepts</text>
<text x="110" y="184" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">the goals</text>
<text x="110" y="280" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">rejects</text>
<text x="110" y="304" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">the goals</text>
${mertonCell(180, 110, 'Conformity', 'keeps striving', 'the legitimate way')}
${mertonCell(380, 110, 'Innovation', 'wants the wealth, invents', 'illegitimate routes', 'fig-accent-2')}
${mertonCell(180, 230, 'Ritualism', 'goes through the motions', 'the rule-bound clerk')}
${mertonCell(380, 230, 'Retreatism', 'drops out', 'of goals and means alike')}
<g class="fig-accent">
<rect x="180" y="356" width="390" height="56" rx="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6"/>
<text x="375" y="380" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Rebellion</text>
<text x="375" y="401" font-size="15" text-anchor="middle" fill="currentColor">REPLACES both: new goals, new means</text>
</g>
<g class="fig-muted"><line x1="610" y1="20" x2="610" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<rect x="650" y="40" width="300" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="800" y="65" font-size="18" text-anchor="middle" fill="currentColor">the culture preaches the GOALS</text>
<text x="800" y="88" font-size="16" text-anchor="middle" fill="currentColor">"anyone can get rich"</text>
<text x="800" y="128" font-size="26" font-weight="700" text-anchor="middle" fill="currentColor">+</text>
<rect x="650" y="146" width="300" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="800" y="171" font-size="18" text-anchor="middle" fill="currentColor">the structure blocks the MEANS</text>
<text x="800" y="194" font-size="16" text-anchor="middle" fill="currentColor">for some groups</text>
<line x1="800" y1="206" x2="800" y2="240" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-merton)"/>
<g class="fig-accent-2">
<rect x="700" y="244" width="200" height="56" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="800" y="280" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">STRAIN</text>
</g>
<line x1="800" y1="300" x2="800" y2="334" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-merton)"/>
<text x="800" y="362" font-size="18" text-anchor="middle" fill="currentColor">one of the five adaptations</text>
<g class="fig-accent-2">
<text x="800" y="412" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">innovation = SHARED values</text>
<text x="800" y="436" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">+ BLOCKED opportunity, not deviant values</text>
</g>
</svg>`

/* 9 — Labeling theory: how a label turns an act into a career (lead, 1000×460) */
const labelingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cs-label')}</defs>
<rect x="30" y="170" width="220" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="140" y="202" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">PRIMARY deviance</text>
<text x="140" y="226" font-size="15" text-anchor="middle" fill="currentColor">minor, un-labeled</text>
<text x="140" y="246" font-size="15" text-anchor="middle" fill="currentColor">no change in identity</text>
<g class="fig-muted">
<text x="140" y="290" font-size="15" text-anchor="middle" fill="currentColor">the shoplifted candy bar</text>
<text x="140" y="330" font-size="14" text-anchor="middle" fill="currentColor">who gets labeled is patterned</text>
<text x="140" y="350" font-size="14" text-anchor="middle" fill="currentColor">by power: class, race</text>
</g>
<line x1="250" y1="215" x2="296" y2="215" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-label)"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-cs-label-r')}</defs>
<rect x="300" y="170" width="220" height="90" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="410" y="202" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">the LABEL</text>
<text x="410" y="226" font-size="15" text-anchor="middle" fill="currentColor">the audience reacts:</text>
<text x="410" y="246" font-size="15" text-anchor="middle" fill="currentColor">"delinquent", "the criminal kid"</text>
<path d="M900,260 L900,404 L410,404 L410,266" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6" marker-end="url(#arr-cs-label-r)"/>
<text x="655" y="430" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">more deviance confirms the label</text>
<text x="655" y="452" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">→ a MASTER STATUS that overrides every other status</text>
</g>
<line x1="520" y1="195" x2="566" y2="112" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-label)"/>
<line x1="520" y1="235" x2="566" y2="318" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-label)"/>
<rect x="570" y="60" width="220" height="84" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="680" y="90" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">legitimate doors close</text>
<text x="680" y="114" font-size="15" text-anchor="middle" fill="currentColor">expulsion, a record,</text>
<text x="680" y="134" font-size="15" text-anchor="middle" fill="currentColor">employers stop replying</text>
<rect x="570" y="286" width="220" height="84" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="680" y="316" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">the self-concept shifts</text>
<text x="680" y="340" font-size="15" text-anchor="middle" fill="currentColor">stigma: "from whole to tainted"</text>
<text x="680" y="360" font-size="15" text-anchor="middle" fill="currentColor">"I guess I am one"</text>
<line x1="790" y1="104" x2="816" y2="196" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-label)"/>
<line x1="790" y1="326" x2="816" y2="234" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cs-label)"/>
<g class="fig-accent">
<rect x="820" y="170" width="160" height="90" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="900" y="200" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">SECONDARY</text>
<text x="900" y="222" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">deviance</text>
<text x="900" y="246" font-size="14" text-anchor="middle" fill="currentColor">BECAUSE of the label</text>
</g>
<g class="fig-muted"><text x="500" y="30" font-size="17" text-anchor="middle" fill="currentColor">the causal arrow runs from the societal REACTION to the escalated deviance</text></g>
</svg>`

export const mcatCultureSocializationFigures: DeckFigurePlacement[] = [
  {
    at: 'What Culture Is',
    mode: 'lead',
    figure: {
      svg: cultureSvg,
      alt:
        'Two panels. Left, material culture: the physical objects a group makes and uses — tools, clothing, architecture, technology; "you can touch it". Right, nonmaterial culture: the intangibles a group shares — language, beliefs, values, norms, rituals; "you can only learn it". Below, one marriage joins both halves: the wedding ring is material, what the ring means is nonmaterial. Footer: both halves are learned from other people — transmitted socially, not genetically.',
    },
    blocks: ['- Classify the ITEM: the ring is material, the meaning of marriage is nonmaterial'],
  },
  {
    at: 'The Normative Ladder',
    mode: 'lead',
    figure: {
      svg: ladderSvg,
      alt:
        'A staircase of four steps rising left to right, graded by how harshly a violation is punished. Folkway: feels rude or odd (facing backwards in an elevator), sanction stares and mild disapproval. More: feels immoral (cheating on an exam, adultery), sanction condemnation and ostracism. Taboo: feels unthinkable (incest, cannibalism), sanction revulsion and expulsion. Law, drawn in a different colour as a formalized norm written down and enforced by the state: illegal (theft), sanction state-administered punishment. An axis under the steps runs from informal sanctions (stares, gossip) to formal sanctions (fines, prison). Footer: norms are graded by the reaction to a violation, not by the topic of the rule.',
    },
    blocks: ['- Read the SANCTION to grade the norm: durable moral exclusion = a more, even with no law involved'],
  },
  {
    at: 'Cultures Within and Against',
    mode: 'lead',
    figure: {
      svg: withinSvg,
      alt:
        'Left: a large circle labelled dominant culture. A smaller blue circle sits fully inside it, labelled subculture — coexists inside (medical students, gamers, enclaves). A red circle labelled counterculture straddles the edge of the dominant circle with a double-headed arrow pushing against it — opposes (separatists, 1960s communes). Footer: distinct is not the same as opposed; the line is active opposition to dominant norms. Right, "when cultures meet", three rows each showing a large circle and a small red circle before an arrow: assimilation ends with one large circle only (the minority takes on the dominant culture); multiculturalism ends with both circles still distinct inside a dashed bowl (the salad bowl); amalgamation ends with a single circle in a new colour (a genuinely new blend, the melting pot).',
    },
    blocks: ['- Subculture = different; counterculture = against. Melting pot = amalgamation; salad bowl = multiculturalism'],
  },
  {
    at: 'Culture in Motion',
    mode: 'lead',
    figure: {
      svg: motionSvg,
      alt:
        'Left: two circles, culture A and culture B, inside a dashed ellipse labelled globalization (worldwide integration — diffusion accelerates). A red spot inside culture A marked "new" is innovation (discovery and invention); blue arrows labelled diffusion curve from A to B and back, with a dashed circle in B marked adopted — elements spread both ways. Right: an illustrative chart of amount of change against time. A blue curve for material culture (the technology) rises steeply; a red curve for nonmaterial culture (norms, ethics, law) rises slowly. The vertical gap between them is marked culture lag: the tool arrives before the rules for using it — gene editing exists, a consensus ethics for it does not.',
      caption: 'Ogburn\'s culture lag — the curves are illustrative, not data.',
    },
    blocks: ['- Material culture moves FIRST; the mismatch with the norms is the exam scenario (and the source of conflict)'],
  },
  {
    at: 'The Agents, in Order of Appearance',
    mode: 'replace-table',
    figure: {
      svg: agentsSvg,
      alt:
        'A life-course timeline from birth through early childhood, the school years (from about 6), adolescence (from about 13) and adulthood (from about 18), with one bar per agent of socialization. Family runs the whole life but is strongest in early childhood, where it provides primary socialization: language, basic norms, class habits. School runs from about 6 to 18: universalistic standards and the hidden curriculum. Peers run from the school years on and peak in adolescence: the first norms adults did not choose. Media starts in early childhood and runs continuously: norms and role models without face-to-face contact. Workplace, religion and the state appear in adulthood: adult roles and their rituals. A bracket below marks early childhood as primary socialization and everything after as secondary socialization — new roles, all life long.',
    },
    blocks: [
      '- **Family** first and strongest: primary socialization (language, norms, class habits)',
      '- **School**: universalistic standards, the hidden curriculum',
      '- **Peers** dominate adolescence: the first norms adults did not choose',
      '- **Media** runs continuously; work, religion and the state teach adult roles',
    ],
  },
  {
    at: 'Cooley — The Looking-Glass Self',
    mode: 'lead',
    figure: {
      svg: cooleySvg,
      alt:
        'A three-step loop. Step 1: I imagine how I appear to the other person. Step 2: I imagine their judgment of that appearance. Step 3, highlighted: I develop a self-feeling — pride or shame — which becomes my self-concept; an arrow returns from step 3 to step 1, labelled "and again, for life". In the centre an ellipse reads: the other is my mirror, as I picture them, not as they are. Footer in red: an imagined judgment can be wrong and still build the self (Thomas theorem).',
    },
    blocks: ['- The loop runs on my IMAGINATION of your judgment — accurate or not — and it never stops'],
  },
  {
    at: 'Mead — Taking the Role of the Other',
    mode: 'lead',
    figure: {
      svg: meadSvg,
      alt:
        'Left: four rising steps along an age axis. Preparatory (under about 3): imitates only, no role is taken. Play (about 3 to 6): one role at a time, a significant other. Game (about 7 and up): many roles at once, the shortstop. Generalized other, highlighted: society\'s attitude, "what people expect". Caption: how many others the child can take the role of — none, one, many, everyone. Right, "the self in dialogue": a red box, the "I" (spontaneous, impulsive, creative), and a blue box, the "me" (others\' expectations, internalized), joined by a double-headed arrow labelled behavior is their negotiation; all "me" would be pure conformity, all "I" pure impulse.',
    },
    blocks: ['- Count the roles: one significant other = play; many at once = game; society itself = the generalized other'],
  },
  {
    at: "Strain Theory — Merton's Grid",
    mode: 'lead',
    figure: {
      svg: mertonSvg,
      alt:
        'Left: a two-by-two grid of cultural goals (wealth, success) against legitimate means (school, a job). Accepts goals and accepts means: conformity, keeps striving the legitimate way. Accepts goals but rejects means: innovation, highlighted in red — wants the wealth, invents illegitimate routes. Rejects goals but accepts means: ritualism, goes through the motions, the rule-bound clerk. Rejects both: retreatism, drops out of goals and means alike. A dashed box under the grid is rebellion, which replaces both with new goals and new means. Right: the culture preaches the goals ("anyone can get rich") plus the structure blocks the means for some groups, leading to strain, leading to one of the five adaptations. Footer: innovation is shared values plus blocked opportunity, not deviant values.',
    },
    blocks: ['- Goals × means gives four cells; rebellion REPLACES both. Innovation is the tested star'],
  },
  {
    at: 'Labeling Theory — Deviance as a Career',
    mode: 'lead',
    figure: {
      svg: labelingSvg,
      alt:
        'A flow from left to right. Primary deviance: minor, un-labeled, no change in identity (the shoplifted candy bar); who gets labeled is patterned by power — class and race. Arrow to the label, in red: the audience reacts, "delinquent", "the criminal kid". The label fans out to two effects: legitimate doors close (expulsion, a record, employers stop replying) and the self-concept shifts (stigma, "from whole to tainted", "I guess I am one"). Both converge on secondary deviance, in blue: deviance because of the label. A dashed red loop runs from secondary deviance back to the label: more deviance confirms the label, which becomes a master status overriding every other status. Header: the causal arrow runs from the societal reaction to the escalated deviance.',
    },
    blocks: ['- Strain explains the FIRST offense; labeling explains the ESCALATION after the reaction'],
  },
]
