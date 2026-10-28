import type { DeckFigurePlacement } from './index'

/**
 * Groups & Social Interaction (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a person with status
 * "addresses", one-status-vs-two-statuses role diagrams, nested circles, the
 * dyad/triad/tie-count chart, a stage with a curtain, two clusters and a bridge,
 * a pyramid, three stacked layers, one actor vs a rule machine …) — no textbook
 * or prep-company figure was copied. The Simmel chart is arithmetic
 * (n(n−1)/2), not study data.
 *
 * The Social Psychology deck already draws Asch, Milgram, the compliance
 * sequences, social facilitation / polarization and the bystander effect, so
 * this deck sticks to the sociology-specific sections of the lesson.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-gi-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A stick figure: head centre (cx, cy), total height ≈ 86·s. Drawn in currentColor. */
const person = (cx: number, cy: number, s = 1, armsDown = false) => {
  const r = 13 * s
  const neck = cy + r
  const hip = cy + 52 * s
  const arms = armsDown
    ? `<line x1="${cx}" y1="${neck + 8 * s}" x2="${cx - 14 * s}" y2="${neck + 36 * s}" stroke="currentColor" stroke-width="${2.5 * s}" stroke-linecap="round"/><line x1="${cx}" y1="${neck + 8 * s}" x2="${cx + 14 * s}" y2="${neck + 36 * s}" stroke="currentColor" stroke-width="${2.5 * s}" stroke-linecap="round"/>`
    : `<line x1="${cx}" y1="${neck + 8 * s}" x2="${cx - 22 * s}" y2="${neck + 24 * s}" stroke="currentColor" stroke-width="${2.5 * s}" stroke-linecap="round"/><line x1="${cx}" y1="${neck + 8 * s}" x2="${cx + 22 * s}" y2="${neck + 24 * s}" stroke="currentColor" stroke-width="${2.5 * s}" stroke-linecap="round"/>`
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-width="${2.5 * s}"/>
<line x1="${cx}" y1="${neck}" x2="${cx}" y2="${hip}" stroke="currentColor" stroke-width="${2.5 * s}" stroke-linecap="round"/>
${arms}
<line x1="${cx}" y1="${hip}" x2="${cx - 16 * s}" y2="${hip + 34 * s}" stroke="currentColor" stroke-width="${2.5 * s}" stroke-linecap="round"/>
<line x1="${cx}" y1="${hip}" x2="${cx + 16 * s}" y2="${hip + 34 * s}" stroke="currentColor" stroke-width="${2.5 * s}" stroke-linecap="round"/>`
}

/* 1 — Status: one person, many addresses; one of them takes over (lead, 1000×460) */
const statusPill = (x: number, y: number, w: number, label: string, cls: string) =>
  `<g class="${cls}"><rect x="${x}" y="${y}" width="${w}" height="40" rx="20" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="${x + w / 2}" y="${y + 26}" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">${label}</text></g>`

const statusSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent">
<rect x="30" y="70" width="250" height="118" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="155" y="102" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">ASCRIBED</text>
<text x="155" y="128" font-size="16" text-anchor="middle" fill="currentColor">assigned without choice</text>
<text x="155" y="152" font-size="15" text-anchor="middle" fill="currentColor">birth order · age · class origin</text>
<text x="155" y="172" font-size="15" text-anchor="middle" fill="currentColor">race / sex as socially classified</text>
</g>
<g class="fig-accent-2">
<rect x="30" y="222" width="250" height="118" rx="12" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="155" y="254" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">ACHIEVED</text>
<text x="155" y="280" font-size="16" text-anchor="middle" fill="currentColor">attained through ACTION</text>
<text x="155" y="304" font-size="15" text-anchor="middle" fill="currentColor">physician · spouse · felon</text>
<text x="155" y="324" font-size="15" text-anchor="middle" fill="currentColor">(achieved ≠ admirable)</text>
</g>
<g class="fig-muted">
<line x1="500" y1="96" x2="612" y2="140" stroke="currentColor" stroke-width="1.5"/>
<line x1="780" y1="96" x2="668" y2="140" stroke="currentColor" stroke-width="1.5"/>
<line x1="500" y1="196" x2="620" y2="205" stroke="currentColor" stroke-width="1.5"/>
<line x1="780" y1="196" x2="660" y2="205" stroke="currentColor" stroke-width="1.5"/>
<line x1="520" y1="310" x2="618" y2="262" stroke="currentColor" stroke-width="1.5"/>
</g>
${person(640, 150)}
<text x="640" y="262" font-size="16" text-anchor="middle" fill="currentColor">one person</text>
<text x="640" y="284" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">status SET = all of these at once</text>
${statusPill(380, 56, 140, 'daughter', 'fig-accent')}
${statusPill(760, 56, 140, 'born 1992', 'fig-accent')}
${statusPill(360, 176, 140, 'tenant', 'fig-accent-2')}
${statusPill(780, 176, 140, 'coach', 'fig-accent-2')}
${statusPill(380, 290, 140, 'spouse', 'fig-accent-2')}
<g class="fig-accent-2">
<line x1="762" y1="270" x2="664" y2="198" stroke="currentColor" stroke-width="3.5"/>
<rect x="760" y="250" width="220" height="52" rx="26" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="4"/>
<text x="870" y="284" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">PHYSICIAN</text>
<text x="870" y="330" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">MASTER STATUS</text>
<text x="870" y="352" font-size="15" text-anchor="middle" fill="currentColor">overrides the rest —</text>
<text x="870" y="372" font-size="15" text-anchor="middle" fill="currentColor">"the doctor" at every dinner party</text>
</g>
<g class="fig-muted">
<text x="500" y="420" font-size="15" text-anchor="middle" fill="currentColor">a master status can be ascribed (wheelchair user) or achieved (ex-convict):</text>
<text x="500" y="442" font-size="15" text-anchor="middle" fill="currentColor">it is defined by what it DOES to perception, not by how it was acquired</text>
</g>
</svg>`

/* 2 — Roles: count the statuses — strain, conflict, exit (lead, 1000×460) */
const rolesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-gi-roles')}</defs>
<g class="fig-muted">
<line x1="337" y1="20" x2="337" y2="420" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="662" y1="20" x2="662" y2="420" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<text x="326" y="44" font-size="14" text-anchor="end" fill="currentColor">1 status</text>
<text x="651" y="44" font-size="14" text-anchor="end" fill="currentColor">2 statuses</text>
<text x="980" y="44" font-size="14" text-anchor="end" fill="currentColor">leaving one</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-gi-roles-b')}</defs>
<text x="20" y="44" font-size="20" font-weight="700" fill="currentColor">ROLE STRAIN</text>
<rect x="110" y="118" width="130" height="44" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="175" y="147" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">ICU nurse</text>
<line x1="108" y1="140" x2="58" y2="140" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-roles-b)"/>
<line x1="242" y1="140" x2="292" y2="140" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-roles-b)"/>
</g>
<text x="75" y="184" font-size="13" text-anchor="middle" fill="currentColor">advocate for</text>
<text x="75" y="202" font-size="13" text-anchor="middle" fill="currentColor">the family</text>
<text x="266" y="184" font-size="13" text-anchor="middle" fill="currentColor">follow the</text>
<text x="266" y="202" font-size="13" text-anchor="middle" fill="currentColor">attending's orders</text>
<text x="175" y="258" font-size="15" text-anchor="middle" fill="currentColor">ONE status pulled two ways</text>
<text x="175" y="280" font-size="15" text-anchor="middle" fill="currentColor">by its own role set</text>
<g class="fig-muted">
<text x="175" y="320" font-size="13" text-anchor="middle" fill="currentColor">advocate vs. order-follower:</text>
<text x="175" y="340" font-size="13" text-anchor="middle" fill="currentColor">both duties belong to THIS nurse</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-gi-roles-r')}</defs>
<text x="345" y="44" font-size="20" font-weight="700" fill="currentColor">ROLE CONFLICT</text>
<rect x="350" y="118" width="100" height="44" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="400" y="147" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">nurse</text>
<rect x="550" y="118" width="100" height="44" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="600" y="147" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">parent</text>
<line x1="452" y1="140" x2="484" y2="140" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-roles-r)"/>
<line x1="548" y1="140" x2="516" y2="140" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-roles-r)"/>
</g>
<circle cx="500" cy="140" r="12" fill="currentColor"/>
<g class="fig-muted">
<text x="400" y="186" font-size="13" text-anchor="middle" fill="currentColor">the code runs over</text>
<text x="600" y="186" font-size="13" text-anchor="middle" fill="currentColor">the recital</text>
</g>
<text x="500" y="258" font-size="15" text-anchor="middle" fill="currentColor">TWO statuses issue</text>
<text x="500" y="280" font-size="15" text-anchor="middle" fill="currentColor">incompatible demands at once</text>
<g class="fig-muted">
<text x="500" y="320" font-size="13" text-anchor="middle" fill="currentColor">"you're always a nurse first" —</text>
<text x="500" y="340" font-size="13" text-anchor="middle" fill="currentColor">the job becoming a master status</text>
</g>
<text x="670" y="44" font-size="20" font-weight="700" fill="currentColor">ROLE EXIT</text>
<rect x="690" y="90" width="110" height="140" rx="10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/>
<text x="745" y="112" font-size="13" text-anchor="middle" fill="currentColor">central role</text>
${person(745, 148, 0.7)}
<line x1="802" y1="160" x2="856" y2="160" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-roles)"/>
<rect x="860" y="138" width="120" height="44" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="920" y="166" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">"ex" identity</text>
<text x="835" y="258" font-size="15" text-anchor="middle" fill="currentColor">leaving a CENTRAL role,</text>
<text x="835" y="280" font-size="15" text-anchor="middle" fill="currentColor">then rebuilding the self</text>
<line x1="690" y1="330" x2="976" y2="330" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-roles)"/>
<circle cx="712" cy="330" r="5" fill="currentColor"/>
<circle cx="795" cy="330" r="5" fill="currentColor"/>
<circle cx="878" cy="330" r="5" fill="currentColor"/>
<circle cx="950" cy="330" r="5" fill="currentColor"/>
<text x="712" y="313" font-size="13" text-anchor="middle" fill="currentColor">doubt</text>
<text x="795" y="354" font-size="13" text-anchor="middle" fill="currentColor">seek alternatives</text>
<text x="878" y="313" font-size="13" text-anchor="middle" fill="currentColor">departure</text>
<text x="950" y="354" font-size="13" text-anchor="middle" fill="currentColor">"ex" identity</text>
<g class="fig-muted">
<text x="835" y="392" font-size="13" text-anchor="middle" fill="currentColor">"a former ICU nurse" —</text>
<text x="835" y="412" font-size="13" text-anchor="middle" fill="currentColor">the old status still does the talking</text>
</g>
<text x="500" y="448" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">count the STATUSES: one → strain · two → conflict · leaving one → exit</text>
</svg>`

/* 3 — Groups: what counts, and the circles around you (lead, 1000×460) */
const dot = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

const groupsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-gi-groups')}</defs>
<text x="170" y="40" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Is it a group?</text>
<g class="fig-muted">${dot(55, 110)}${dot(75, 100)}${dot(95, 112)}${dot(115, 103)}${dot(133, 113)}</g>
<text x="152" y="104" font-size="17" font-weight="700" fill="currentColor">AGGREGATE</text>
<text x="152" y="124" font-size="13" fill="currentColor">same place, no interaction</text>
<g class="fig-muted">${dot(42, 190)}${dot(128, 196)}${dot(70, 232)}${dot(104, 214)}${dot(136, 236)}</g>
<text x="152" y="204" font-size="17" font-weight="700" fill="currentColor">CATEGORY</text>
<text x="152" y="224" font-size="13" fill="currentColor">same trait, never meet</text>
<g class="fig-accent">
<ellipse cx="90" cy="312" rx="58" ry="34" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<line x1="62" y1="302" x2="98" y2="298" stroke="currentColor" stroke-width="1.5"/>
<line x1="98" y1="298" x2="114" y2="324" stroke="currentColor" stroke-width="1.5"/>
<line x1="114" y1="324" x2="72" y2="328" stroke="currentColor" stroke-width="1.5"/>
<line x1="72" y1="328" x2="62" y2="302" stroke="currentColor" stroke-width="1.5"/>
<line x1="62" y1="302" x2="114" y2="324" stroke="currentColor" stroke-width="1.5"/>
<line x1="98" y1="298" x2="72" y2="328" stroke="currentColor" stroke-width="1.5"/>
${dot(62, 302)}${dot(98, 298)}${dot(114, 324)}${dot(72, 328)}
<text x="152" y="304" font-size="17" font-weight="700" fill="currentColor">GROUP</text>
</g>
<text x="152" y="324" font-size="13" fill="currentColor">interact + shared identity</text>
<g class="fig-muted">
<text x="152" y="342" font-size="13" fill="currentColor">→ norms, roles, boundaries</text>
<text x="170" y="400" font-size="14" text-anchor="middle" fill="currentColor">only groups have norms,</text>
<text x="170" y="420" font-size="14" text-anchor="middle" fill="currentColor">roles and boundaries</text>
<line x1="340" y1="20" x2="340" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<circle cx="600" cy="240" r="140" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>
<text x="600" y="90" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">SECONDARY — project team, lecture section</text>
<g class="fig-muted"><text x="600" y="66" font-size="13" text-anchor="middle" fill="currentColor">impersonal, goal-driven, often temporary</text></g>
<g class="fig-accent">
<circle cx="560" cy="260" r="65" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="560" y="225" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">PRIMARY</text>
<circle cx="560" cy="260" r="8" fill="currentColor"/>
<text x="560" y="284" font-size="13" text-anchor="middle" fill="currentColor">you</text>
<text x="575" y="345" font-size="12" text-anchor="middle" fill="currentColor">family, close friends</text>
<text x="600" y="406" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">IN-GROUPS: the circles you belong to</text>
</g>
<g class="fig-muted"><text x="600" y="426" font-size="13" text-anchor="middle" fill="currentColor">primary builds the self; secondary runs modern life</text></g>
<g class="fig-accent-2">
<circle cx="880" cy="300" r="62" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="880" y="296" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">OUT-GROUP</text>
<text x="880" y="318" font-size="12" text-anchor="middle" fill="currentColor">"they're all alike"</text>
<text x="780" y="306" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">vs.</text>
<text x="880" y="390" font-size="13" text-anchor="middle" fill="currentColor">contrast + derogation —</text>
<text x="880" y="408" font-size="13" text-anchor="middle" fill="currentColor">from minimal distinctions</text>
</g>
<circle cx="870" cy="95" r="55" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6"/>
<text x="870" y="92" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">REFERENCE</text>
<text x="870" y="112" font-size="12" text-anchor="middle" fill="currentColor">physicians</text>
<line x1="580" y1="243" x2="820" y2="122" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#arr-gi-groups)"/>
<text x="660" y="152" font-size="12" text-anchor="middle" fill="currentColor">I measure myself</text>
<text x="660" y="168" font-size="12" text-anchor="middle" fill="currentColor">against them</text>
<g class="fig-muted">
<text x="870" y="168" font-size="13" text-anchor="middle" fill="currentColor">membership not required</text>
<text x="870" y="186" font-size="13" text-anchor="middle" fill="currentColor">→ relative deprivation</text>
</g>
</svg>`

/* 4 — Simmel: dyad, triad, and how ties multiply (lead, 1000×460) */
const node = (cx: number, cy: number) => `<circle cx="${cx}" cy="${cy}" r="14" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>`
const tie = (x1: number, y1: number, x2: number, y2: number, w = 2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${w}"/>`
const tieBar = (i: number, n: number, cls?: string) => {
  const x = 660 + i * 44
  const h = n * 9.6
  const bar = `<rect x="${x}" y="${380 - h}" width="30" height="${h}" rx="3" fill="currentColor" fill-opacity="${cls ? 0.35 : 0.15}" stroke="currentColor" stroke-width="2"/>
<text x="${x + 15}" y="${380 - h - 8}" font-size="15" text-anchor="middle" fill="currentColor">${n}</text>`
  return cls ? `<g class="${cls}">${bar}</g>` : bar
}

const simmelSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="110" y="50" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">DYAD (2)</text>
<text x="330" y="50" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">TRIAD (3)</text>
<text x="520" y="50" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">(4)</text>
<g class="fig-accent-2">
${tie(60, 140, 160, 140, 3)}
${node(60, 140)}${node(160, 140)}
<text x="110" y="188" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">1 tie</text>
</g>
<text x="110" y="225" font-size="14" text-anchor="middle" fill="currentColor">most intimate, most fragile</text>
<text x="110" y="245" font-size="14" text-anchor="middle" fill="currentColor">one exit ends it —</text>
<text x="110" y="265" font-size="14" text-anchor="middle" fill="currentColor">every member holds a veto</text>
${tie(330, 100, 280, 180)}
${tie(330, 100, 380, 180)}
<g class="fig-accent">
${tie(280, 180, 380, 180, 5)}
${node(280, 180)}${node(380, 180)}
<text x="330" y="222" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">3 ties</text>
</g>
<g class="fig-accent-2">${node(330, 100)}<text x="330" y="80" font-size="13" text-anchor="middle" fill="currentColor">outvoted</text></g>
<text x="330" y="258" font-size="14" text-anchor="middle" fill="currentColor">survives a defection</text>
<text x="330" y="278" font-size="14" text-anchor="middle" fill="currentColor">coalitions: two against one</text>
<text x="330" y="298" font-size="14" text-anchor="middle" fill="currentColor">mediation, majority pressure</text>
<g class="fig-muted">
${tie(490, 110, 550, 110)}${tie(490, 170, 550, 170)}${tie(490, 110, 490, 170)}${tie(550, 110, 550, 170)}${tie(490, 110, 550, 170)}${tie(550, 110, 490, 170)}
${node(490, 110)}${node(550, 110)}${node(490, 170)}${node(550, 170)}
<text x="520" y="222" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">6 ties</text>
<text x="520" y="258" font-size="14" text-anchor="middle" fill="currentColor">… and counting</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-gi-simmel-b')}</defs>
<line x1="40" y1="350" x2="580" y2="350" stroke="currentColor" stroke-width="3" marker-end="url(#arr-gi-simmel-b)"/>
<text x="310" y="338" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">stability · capacity · survivability rise</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-gi-simmel-r')}</defs>
<line x1="40" y1="394" x2="580" y2="394" stroke="currentColor" stroke-width="3" marker-end="url(#arr-gi-simmel-r)"/>
<text x="310" y="382" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">intimacy · individual contribution · accountability fall</text>
</g>
<g class="fig-muted">
<text x="310" y="420" font-size="14" text-anchor="middle" fill="currentColor">group size →   (the doorway to social loafing, then to formal organization)</text>
<line x1="610" y1="20" x2="610" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<text x="805" y="56" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">possible ties = n(n−1)/2</text>
<line x1="650" y1="380" x2="965" y2="380" stroke="currentColor" stroke-width="2"/>
${tieBar(0, 1, 'fig-accent-2')}
${tieBar(1, 3, 'fig-accent')}
${tieBar(2, 6)}
${tieBar(3, 10)}
${tieBar(4, 15)}
${tieBar(5, 21)}
${tieBar(6, 28)}
<text x="675" y="402" font-size="15" text-anchor="middle" fill="currentColor">2</text>
<text x="719" y="402" font-size="15" text-anchor="middle" fill="currentColor">3</text>
<text x="763" y="402" font-size="15" text-anchor="middle" fill="currentColor">4</text>
<text x="807" y="402" font-size="15" text-anchor="middle" fill="currentColor">5</text>
<text x="851" y="402" font-size="15" text-anchor="middle" fill="currentColor">6</text>
<text x="895" y="402" font-size="15" text-anchor="middle" fill="currentColor">7</text>
<text x="939" y="402" font-size="15" text-anchor="middle" fill="currentColor">8</text>
<g class="fig-muted"><text x="968" y="402" font-size="13" fill="currentColor">n</text></g>
<text x="805" y="430" font-size="14" text-anchor="middle" fill="currentColor">the THIRD member changes the group's nature</text>
<text x="805" y="450" font-size="14" text-anchor="middle" fill="currentColor">more than any later addition</text>
</svg>`

/* 5 — Goffman: front stage, back stage, the audience (lead, 1000×460) */
const dramaturgySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="330" y="52" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">FRONT STAGE</text>
<text x="810" y="52" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">BACK STAGE</text>
<g class="fig-accent">
<rect x="40" y="70" width="580" height="260" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<text x="330" y="100" font-size="16" text-anchor="middle" fill="currentColor">the performance runs here: script followed, props, setting, tone</text>
${person(240, 160)}
${person(330, 160)}
<rect x="460" y="120" width="70" height="52" rx="4" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="495" y="143" font-size="12" text-anchor="middle" fill="currentColor">framed</text>
<text x="495" y="160" font-size="12" text-anchor="middle" fill="currentColor">diploma</text>
<text x="495" y="196" font-size="13" text-anchor="middle" fill="currentColor">a prop</text>
<text x="285" y="272" font-size="14" text-anchor="middle" fill="currentColor">a TEAM: they keep each other's secrets</text>
<text x="330" y="310" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">= impression management</text>
</g>
<g class="fig-muted">
<line x1="640" y1="60" x2="640" y2="340" stroke="currentColor" stroke-width="3" stroke-dasharray="10 7"/>
<text x="640" y="358" font-size="13" text-anchor="middle" fill="currentColor">the curtain</text>
</g>
<g class="fig-accent-2">
<rect x="660" y="70" width="300" height="260" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<text x="810" y="100" font-size="16" text-anchor="middle" fill="currentColor">audience excluded</text>
${person(810, 160, 1, true)}
<text x="810" y="272" font-size="14" text-anchor="middle" fill="currentColor">the script dropped:</text>
<text x="810" y="294" font-size="14" text-anchor="middle" fill="currentColor">rehearse · repair · vent</text>
<text x="810" y="318" font-size="13" text-anchor="middle" fill="currentColor">(the kitchen, the workroom)</text>
</g>
<g class="fig-muted">
${dot(100, 384, 8)}${dot(146, 384, 8)}${dot(192, 384, 8)}${dot(238, 384, 8)}${dot(284, 384, 8)}${dot(330, 384, 8)}${dot(376, 384, 8)}${dot(422, 384, 8)}${dot(468, 384, 8)}${dot(514, 384, 8)}${dot(560, 384, 8)}
</g>
<text x="330" y="416" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">AUDIENCE — the performance is for them</text>
<text x="330" y="438" font-size="14" text-anchor="middle" fill="currentColor">a disruption (the doctor panicking) threatens the shared definition of the situation,</text>
<text x="330" y="456" font-size="14" text-anchor="middle" fill="currentColor">so the audience tactfully helps repair it (face-work)</text>
<g class="fig-accent-2">
<text x="810" y="394" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">back stage is RELATIVE to an audience:</text>
<text x="810" y="416" font-size="14" text-anchor="middle" fill="currentColor">the kitchen is front stage</text>
<text x="810" y="436" font-size="14" text-anchor="middle" fill="currentColor">for impressing the head chef</text>
</g>
</svg>`

/* 6 — Networks: two dense clusters and the weak tie that bridges them (lead, 1000×460) */
const cluster = (pts: [number, number][]) => {
  let s = ''
  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1])
      if (d < 150) s += tie(pts[i][0], pts[i][1], pts[j][0], pts[j][1], 3)
    }
  for (const [x, y] of pts) s += node(x, y)
  return s
}

const networksSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent">
<text x="230" y="60" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">STRONG ties</text>
<text x="230" y="84" font-size="15" text-anchor="middle" fill="currentColor">dense and redundant: everyone knows everyone</text>
${cluster([[160, 160], [290, 150], [120, 250], [225, 215], [330, 250], [190, 310], [285, 320]])}
<text x="760" y="60" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">another strong-tie cluster</text>
<text x="760" y="84" font-size="15" text-anchor="middle" fill="currentColor">with its OWN pool of information</text>
${cluster([[690, 150], [830, 150], [660, 250], [770, 215], [870, 250], [730, 310], [820, 320]])}
</g>
<g class="fig-accent-2">
<line x1="344" y1="250" x2="646" y2="250" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<text x="495" y="236" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">the BRIDGE — a weak tie</text>
<text x="495" y="276" font-size="13" text-anchor="middle" fill="currentColor">novel information (job leads) crosses here</text>
<circle cx="330" cy="250" r="14" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="3"/>
<text x="340" y="210" font-size="14" font-weight="700" fill="currentColor">BROKER</text>
</g>
<g class="fig-muted">
<text x="495" y="330" font-size="13" text-anchor="middle" fill="currentColor">the broker controls the flow</text>
<text x="495" y="348" font-size="13" text-anchor="middle" fill="currentColor">between clusters = social capital</text>
</g>
<text x="500" y="410" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">weak ties carry the NOVEL information, because strong-tie clusters already share what they know (Granovetter)</text>
<g class="fig-muted"><text x="500" y="440" font-size="14" text-anchor="middle" fill="currentColor">networks also carry health behaviors, norms and emotions across degrees of separation — social contagion</text></g>
</svg>`

/* 7 — Weber's bureaucracy: the ideal-type pyramid and what it breeds (lead, 1000×460) */
const office = (x: number, y: number, w: number, label: string) =>
  `<rect x="${x}" y="${y}" width="${w}" height="40" rx="6" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
<text x="${x + w / 2}" y="${y + 26}" font-size="14" text-anchor="middle" fill="currentColor">${label}</text>`
const pathology = (cy: number, cause: string, effect: string, sub: string) =>
  `<rect x="560" y="${cy - 27}" width="180" height="54" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="650" y="${cy + 5}" font-size="14" text-anchor="middle" fill="currentColor">${cause}</text>
<g class="fig-accent-2">
<line x1="742" y1="${cy}" x2="794" y2="${cy}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-weber-r)"/>
<rect x="800" y="${cy - 27}" width="180" height="54" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="890" y="${cy - 2}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">${effect}</text>
<text x="890" y="${cy + 17}" font-size="12" text-anchor="middle" fill="currentColor">${sub}</text>
</g>`

const weberSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-gi-weber')}</defs>
<text x="275" y="40" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Weber's IDEAL TYPE of bureaucracy</text>
<g class="fig-muted"><text x="275" y="60" font-size="14" text-anchor="middle" fill="currentColor">an analytic model, not praise</text></g>
<g class="fig-accent">
${office(225, 80, 100, 'director')}
${office(115, 150, 100, 'billing')}
${office(225, 150, 100, 'nursing')}
${office(335, 150, 100, 'records')}
${office(40, 220, 80, 'clerk')}
${office(135, 220, 80, 'clerk')}
${office(230, 220, 80, 'clerk')}
${office(325, 220, 80, 'clerk')}
${office(420, 220, 80, 'clerk')}
</g>
<line x1="275" y1="120" x2="165" y2="148" stroke="currentColor" stroke-width="1.5"/>
<line x1="275" y1="120" x2="275" y2="148" stroke="currentColor" stroke-width="1.5"/>
<line x1="275" y1="120" x2="385" y2="148" stroke="currentColor" stroke-width="1.5"/>
<line x1="165" y1="190" x2="80" y2="218" stroke="currentColor" stroke-width="1.5"/>
<line x1="165" y1="190" x2="175" y2="218" stroke="currentColor" stroke-width="1.5"/>
<line x1="275" y1="190" x2="270" y2="218" stroke="currentColor" stroke-width="1.5"/>
<line x1="385" y1="190" x2="365" y2="218" stroke="currentColor" stroke-width="1.5"/>
<line x1="385" y1="190" x2="460" y2="218" stroke="currentColor" stroke-width="1.5"/>
<text x="40" y="296" font-size="14" fill="currentColor">① division of labor — specialized offices</text>
<text x="40" y="318" font-size="14" fill="currentColor">② hierarchy of authority — each office answers to the one above</text>
<text x="40" y="340" font-size="14" fill="currentColor">③ written rules and records — procedures outlive persons</text>
<text x="40" y="362" font-size="14" fill="currentColor">④ impersonality — "case no. 4471", not a name</text>
<text x="40" y="384" font-size="14" fill="currentColor">⑤ technical qualification — hired and promoted on credentials</text>
<g class="fig-accent">
<text x="275" y="420" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">goal: predictability + efficiency</text>
<text x="275" y="442" font-size="14" text-anchor="middle" fill="currentColor">rational-legal authority: you obey the OFFICE, not the person</text>
</g>
<g class="fig-muted"><line x1="530" y1="20" x2="530" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<g class="fig-accent-2"><defs>${ARROW('arr-gi-weber-r')}</defs>
<text x="770" y="40" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">the same design, run long enough</text></g>
${pathology(108, 'rules become the point', 'GOAL DISPLACEMENT', 'red tape; trained incapacity')}
${pathology(184, 'rationality everywhere', 'the IRON CAGE', 'efficiency drains meaning')}
${pathology(260, 'efficiency · calculability', 'McDONALDIZATION', 'Ritzer: dehumanization')}
<g class="fig-muted"><text x="650" y="300" font-size="12" text-anchor="middle" fill="currentColor">predictability · control</text></g>
${pathology(336, 'scale needs delegation', 'IRON LAW of OLIGARCHY', 'Michels: a small elite rules')}
<g class="fig-muted">
<text x="770" y="412" font-size="13" text-anchor="middle" fill="currentColor">the defect is STRUCTURAL —</text>
<text x="770" y="430" font-size="13" text-anchor="middle" fill="currentColor">staff follow the system faithfully, and it still misfires</text>
</g>
</svg>`

/* 8 — The tripartite distinction as three layers, plus Merton's grid (replace-table, 560×440) */
const layer = (y: number, name: string, nature: string, quote: string, cls: string) =>
  `<g class="${cls}"><rect x="12" y="${y}" width="270" height="92" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="76" y="${y + 36}" font-size="18" font-weight="700" fill="currentColor">${name}</text></g>
<text x="76" y="${y + 58}" font-size="14" fill="currentColor">${nature}</text>
<g class="fig-muted"><text x="76" y="${y + 78}" font-size="13" fill="currentColor">${quote}</text></g>`

const tripartiteSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-gi-tri')}</defs>
${layer(28, 'STEREOTYPE', 'COGNITIVE — a belief', '"they are all alike"', 'fig-accent')}
<ellipse cx="44" cy="68" rx="20" ry="15" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="32" cy="90" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
<circle cx="25" cy="100" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
${layer(146, 'PREJUDICE', 'AFFECTIVE — an attitude', '"I dislike them"', 'fig-accent')}
<path d="M44,208 C30,192 18,200 22,212 C25,222 44,236 44,236 C44,236 63,222 66,212 C70,200 58,192 44,208 z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
${layer(264, 'DISCRIMINATION', 'BEHAVIORAL — treatment', '"not hired"', 'fig-accent-2')}
<rect x="28" y="302" width="32" height="44" rx="3" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="28" y1="302" x2="60" y2="346" stroke="currentColor" stroke-width="2"/>
<line x1="60" y1="302" x2="28" y2="346" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<line x1="150" y1="122" x2="150" y2="144" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#arr-gi-tri)"/>
<line x1="150" y1="240" x2="150" y2="262" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#arr-gi-tri)"/>
<text x="164" y="137" font-size="12" fill="currentColor">usually, not always</text>
<text x="164" y="255" font-size="12" fill="currentColor">usually, not always</text>
</g>
<text x="147" y="390" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">the layers DISSOCIATE</text>
<g class="fig-muted"><text x="147" y="408" font-size="12" text-anchor="middle" fill="currentColor">ask where the DATA live</text></g>
<text x="458" y="34" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Merton's grid</text>
<g class="fig-muted"><text x="458" y="56" font-size="12" text-anchor="middle" fill="currentColor">discriminates?</text></g>
<text x="412" y="78" font-size="13" text-anchor="middle" fill="currentColor">yes</text>
<text x="504" y="78" font-size="13" text-anchor="middle" fill="currentColor">no</text>
<text x="362" y="134" font-size="12" text-anchor="end" fill="currentColor">prejudiced</text>
<text x="362" y="214" font-size="12" text-anchor="end" fill="currentColor">not</text>
<text x="362" y="230" font-size="12" text-anchor="end" fill="currentColor">prejudiced</text>
<rect x="368" y="90" width="88" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="412" y="124" font-size="12" text-anchor="middle" fill="currentColor">the bigot</text>
<text x="412" y="142" font-size="12" text-anchor="middle" fill="currentColor">acts on it</text>
<g class="fig-accent-2">
<rect x="460" y="90" width="88" height="80" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="504" y="118" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">landlord</text>
<text x="504" y="135" font-size="11" text-anchor="middle" fill="currentColor">prejudiced,</text>
<text x="504" y="150" font-size="11" text-anchor="middle" fill="currentColor">rents to all</text>
<rect x="368" y="178" width="88" height="80" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="412" y="206" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">algorithm</text>
<text x="412" y="223" font-size="11" text-anchor="middle" fill="currentColor">feels nothing,</text>
<text x="412" y="238" font-size="11" text-anchor="middle" fill="currentColor">filters by zip</text>
</g>
<rect x="460" y="178" width="88" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="504" y="222" font-size="12" text-anchor="middle" fill="currentColor">neither</text>
<g class="fig-muted">
<text x="458" y="290" font-size="12" text-anchor="middle" fill="currentColor">attitude and behavior track</text>
<text x="458" y="306" font-size="12" text-anchor="middle" fill="currentColor">situations, incentives, laws</text>
<text x="458" y="322" font-size="12" text-anchor="middle" fill="currentColor">— not just each other</text>
</g>
<g class="fig-accent-2"><text x="280" y="426" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">prejudice without discrimination · discrimination without prejudice</text></g>
</svg>`

/* 9 — Individual vs institutional discrimination: one actor vs the rules (lead, 1000×460) */
const institutionalSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent-2">
<defs>${ARROW('arr-gi-inst-r')}</defs>
<text x="235" y="44" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">INDIVIDUAL discrimination</text>
${person(235, 110, 1.1)}
<text x="235" y="228" font-size="14" text-anchor="middle" fill="currentColor">one prejudiced actor</text>
<line x1="265" y1="240" x2="330" y2="288" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-inst-r)"/>
<text x="414" y="330" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">✗</text>
<text x="370" y="384" font-size="13" text-anchor="middle" fill="currentColor">turned away</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-gi-inst-b')}</defs>
<line x1="205" y1="240" x2="140" y2="288" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-inst-b)"/>
<text x="144" y="330" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">✓</text>
<text x="100" y="384" font-size="13" text-anchor="middle" fill="currentColor">treated well</text>
</g>
${person(100, 292, 0.8)}
${person(370, 292, 0.8)}
<text x="235" y="410" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">ONE actor treats people unequally</text>
<g class="fig-muted"><text x="235" y="430" font-size="14" text-anchor="middle" fill="currentColor">remove the bigot, and it stops</text>
<line x1="480" y1="20" x2="480" y2="434" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<g class="fig-accent">
<text x="750" y="44" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">INSTITUTIONAL discrimination</text>
</g>
<g class="fig-muted">
<text x="750" y="68" font-size="14" text-anchor="middle" fill="currentColor">no bigoted individual required</text>
${person(700, 92, 0.42, true)}${person(750, 92, 0.42, true)}${person(800, 92, 0.42, true)}
<text x="840" y="106" font-size="13" fill="currentColor">unprejudiced staff</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-gi-inst-b2')}</defs>
<rect x="600" y="132" width="300" height="100" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="750" y="162" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">ordinary rules and procedures</text>
<text x="750" y="186" font-size="12" text-anchor="middle" fill="currentColor">seniority rules · school funding by property tax</text>
<text x="750" y="206" font-size="12" text-anchor="middle" fill="currentColor">an algorithm trained on a skewed sample</text>
<line x1="582" y1="162" x2="596" y2="162" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-inst-b2)"/>
<line x1="582" y1="202" x2="596" y2="202" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-inst-b2)"/>
<line x1="750" y1="234" x2="750" y2="254" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-gi-inst-b2)"/>
</g>
<rect x="540" y="147" width="30" height="30" rx="5" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<text x="555" y="168" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">A</text>
<rect x="540" y="187" width="30" height="30" rx="5" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<text x="555" y="208" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">B</text>
<g class="fig-muted"><text x="555" y="236" font-size="12" text-anchor="middle" fill="currentColor">equal in</text></g>
<text x="750" y="278" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">unequal OUTCOMES</text>
<text x="612" y="306" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">A</text>
<rect x="626" y="292" width="300" height="20" rx="4" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<text x="612" y="338" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">B</text>
<g class="fig-accent-2"><rect x="626" y="324" width="130" height="20" rx="4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/></g>
<g class="fig-accent">
<text x="750" y="380" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">THE TELL: replace every employee with unprejudiced people</text>
<text x="750" y="402" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">and the disparity PERSISTS — it lives in the rules</text>
</g>
<g class="fig-muted"><text x="500" y="452" font-size="14" text-anchor="middle" fill="currentColor">both are behavioral (treatment); institutional discrimination carries history forward through neutral-looking rules</text></g>
</svg>`

export const mcatGroupsInteractionFigures: DeckFigurePlacement[] = [
  {
    at: 'Status — Your Address in Social Space',
    mode: 'lead',
    figure: {
      svg: statusSvg,
      alt:
        'One stick-figure person in the centre with five status "addresses" around them, joined by thin lines: daughter and born 1992 in blue (ascribed), tenant, coach and spouse in red (achieved). A sixth, much larger red pill, PHYSICIAN, is joined by a thick line and labelled master status: it overrides the rest — "the doctor" at every dinner party. The caption under the person reads status set = all of these at once. A blue legend defines ascribed: assigned without choice (birth order, age, class origin, race or sex as socially classified); a red legend defines achieved: attained through action (physician, spouse, felon — achieved is not the same as admirable). Footer: a master status can be ascribed (wheelchair user) or achieved (ex-convict); it is defined by what it does to perception, not by how it was acquired.',
    },
    blocks: ['- Two independent axes: HOW a status was acquired (ascribed / achieved) and WHAT it does (a master status overrides the rest)'],
  },
  {
    at: 'Roles — The Behavior a Status Rents',
    mode: 'lead',
    figure: {
      svg: rolesSvg,
      alt:
        'Three columns. Role strain, in blue, tagged "1 status": one status box, ICU nurse, with arrows pulling in opposite directions toward "advocate for the family" and "follow the attending\'s orders" — one status pulled two ways by its own role set; advocate vs. order-follower, both duties belong to this nurse. Role conflict, in red, tagged "2 statuses": two status boxes, nurse and parent, each firing an arrow into the same person in the middle, captioned "the code runs over" and "the recital" — two statuses issue incompatible demands at once; "you\'re always a nurse first" is the job becoming a master status. Role exit, tagged "leaving one": a stick figure inside a dashed box labelled central role, with an arrow out to an "ex" identity box — leaving a central role, then rebuilding the self; a timeline beneath runs doubt, seek alternatives, departure, "ex" identity, captioned "a former ICU nurse": the old status still does the talking. Footer: count the statuses — one is strain, two is conflict, leaving one is exit.',
    },
    blocks: ['- The number of expectations never settles it — count the STATUSES issuing them (the exam\'s favorite distractor is "conflict" for a one-status case)'],
  },
  {
    at: 'Groups — More Than People in Proximity',
    mode: 'lead',
    figure: {
      svg: groupsSvg,
      alt:
        'Left, "is it a group?": an aggregate is a row of grey dots close together (same place, no interaction); a category is grey dots scattered apart (same trait, never meet); a group is dots joined by lines inside a blue boundary (interact plus shared identity, which gives norms, roles and boundaries). Right: a dot labelled "you" sits inside a small blue circle, PRIMARY (family, close friends), which sits inside a large circle, SECONDARY (project team, lecture section — impersonal, goal-driven, often temporary); together these are the in-groups, the circles you belong to; primary builds the self, secondary runs modern life. To the right, separated by "vs.", a red circle is the OUT-GROUP ("they\'re all alike"; contrast and derogation from minimal distinctions). At the top right a dashed circle, REFERENCE (physicians), receives a dashed arrow from "you" labelled "I measure myself against them"; membership is not required, which leads to relative deprivation.',
    },
    blocks: ['- A group needs interaction + shared identity; a reference group needs neither membership nor contact — only comparison'],
  },
  {
    at: "Size Changes Everything — Simmel's Arithmetic",
    mode: 'lead',
    figure: {
      svg: simmelSvg,
      alt:
        'Left: three small networks. A dyad of two nodes joined by one red tie — most intimate, most fragile, one exit ends it, every member holds a veto. A triad of three nodes with three ties; two nodes are joined by a thick blue tie (a coalition) and the third, red, is labelled outvoted — the triad survives a defection and allows coalitions of two against one, mediation and majority pressure. A grey four-node group has six ties. Two arrows along a group-size axis: in blue, stability, capacity and survivability rise; in red, intimacy, individual contribution and accountability fall — the doorway to social loafing, then formal organization. Right: a bar chart of possible ties = n(n−1)/2 for n = 2 to 8: 1, 3, 6, 10, 15, 21, 28; the n = 2 bar is red and the n = 3 bar blue. Caption: the third member changes the group\'s nature more than any later addition.',
      caption: 'Tie counts are arithmetic, n(n−1)/2 — not study data.',
    },
    blocks: ['- Two → three is the qualitative jump: the first group that can outlive a member, and the first that can gang up'],
  },
  {
    at: "Goffman's Dramaturgy — Life as Staged Performance",
    mode: 'lead',
    figure: {
      svg: dramaturgySvg,
      alt:
        'A stage split by a dashed curtain. Front stage, in blue, holds two stick figures performing as a team (they keep each other\'s secrets) beside a framed diploma labelled "a prop"; the performance runs here — script followed, props, setting, tone — which equals impression management. Back stage, in red, holds the same kind of figure with arms down: audience excluded, the script dropped — rehearse, repair, vent (the kitchen, the workroom). Below the front stage a row of grey dots is the audience: the performance is for them, and a disruption (the doctor panicking) threatens the shared definition of the situation, so the audience tactfully helps repair it (face-work). Note under the back stage: back stage is relative to an audience — the kitchen is front stage for impressing the head chef.',
    },
    blocks: ['- Regions are defined by AUDIENCE ACCESS, not by the room: find who is watching before you label front or back stage'],
  },
  {
    at: 'Social Networks — The Architecture Between Groups',
    mode: 'lead',
    figure: {
      svg: networksSvg,
      alt:
        'Two dense clusters of nodes, each tied together by many thick blue lines: strong ties — dense and redundant, everyone knows everyone; the second cluster has its own pool of information. A single thin red dashed line joins one node of each cluster: the bridge, a weak tie, where novel information such as job leads crosses. The node at the end of the bridge is marked broker: the broker controls the flow between clusters, which is social capital. Footer: weak ties carry the novel information because strong-tie clusters already share what they know (Granovetter); networks also carry health behaviors, norms and emotions across degrees of separation — social contagion.',
    },
    blocks: ['- The argument is STRUCTURAL, not motivational: friends want to help more — they just know the same openings you do'],
  },
  {
    at: "Formal Organizations & Weber's Bureaucracy",
    mode: 'lead',
    figure: {
      svg: weberSvg,
      alt:
        'Left: a three-tier pyramid of offices — a director over billing, nursing and records, each over clerks — labelled as Weber\'s ideal type of bureaucracy (an analytic model, not praise), with its five features numbered beneath: division of labor (specialized offices), hierarchy of authority (each office answers to the one above), written rules and records (procedures outlive persons), impersonality ("case no. 4471", not a name), technical qualification (hired and promoted on credentials). The goal is predictability plus efficiency; authority is rational-legal — you obey the office, not the person. Right, "the same design, run long enough": four cause-to-effect pairs in red. Rules become the point → goal displacement (red tape, trained incapacity). Rationality everywhere → the iron cage (efficiency drains meaning). Efficiency, calculability, predictability, control → McDonaldization (Ritzer: dehumanization). Scale needs delegation → the iron law of oligarchy (Michels: a small elite rules). Footer: the defect is structural — staff follow the system faithfully, and it still misfires.',
    },
    blocks: ['- The pathologies are the features working AS DESIGNED — the exam answer is "structural", never "lazy employees"'],
  },
  {
    at: 'The Tripartite Distinction the Exam Never Stops Testing',
    mode: 'replace-table',
    figure: {
      svg: tripartiteSvg,
      alt:
        'Left: three stacked layers. Stereotype (a thought bubble): cognitive — a belief, "they are all alike". Prejudice (a heart): affective — an attitude, "I dislike them". Discrimination (a crossed-out door), in red: behavioral — treatment, "not hired". Dashed arrows between the layers say "usually, not always"; the layers dissociate — ask where the data live. Right, Merton\'s grid: prejudiced or not, against discriminates or not. Prejudiced and discriminates: the bigot who acts on it. Prejudiced but does not discriminate, highlighted in red: the landlord who rents to everyone. Not prejudiced but discriminates, highlighted in red: the algorithm that feels nothing and filters zip codes. Neither. Attitude and behavior track situations, incentives and laws — not just each other. Footer: prejudice without discrimination; discrimination without prejudice.',
    },
    blocks: [
      '- **Stereotype** = belief (cognitive) · **prejudice** = attitude (affective) · **discrimination** = treatment (behavioral)',
      '- The red cells are the exam: the landlord who rents to everyone; the algorithm that filters zip codes',
      '- Match every answer choice to the layer where the DATA live',
    ],
  },
  {
    at: 'Individual vs. Institutional Discrimination',
    mode: 'lead',
    figure: {
      svg: institutionalSvg,
      alt:
        'Left, individual discrimination in red: one prejudiced actor stands over two applicants and treats them differently — a blue tick, treated well, for one and a red cross, turned away, for the other. One actor treats people unequally; remove the bigot, and it stops. Right, institutional discrimination in blue: two equal inputs, A and B, enter a box of ordinary rules and procedures (seniority rules, school funding by local property tax, an algorithm calibrated on an unrepresentative sample) staffed by three grey figures labelled unprejudiced staff; out come unequal outcomes — a long bar for A and a short red bar for B. The tell: replace every employee with unprejudiced people and the disparity persists — it lives in the rules. Footer: both are behavioral (treatment); institutional discrimination carries history forward through neutral-looking rules.',
    },
    blocks: ['- Diagnose by the swap test: if unprejudiced staff would produce the same disparity, the discrimination is institutional'],
  },
]
