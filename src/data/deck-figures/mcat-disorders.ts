import type { DeckFigurePlacement } from './index'

/**
 * Psychological Disorders (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a two-gate decision
 * flow, a ladder of triggers, a reinforcement loop, a one-month timeline,
 * mood-over-time lines, an added/subtracted ledger with three dopamine
 * pathways, a three-column cluster map, a diathesis × stress plane) — no
 * textbook or prep-company figure was copied. Mood lines are not data and
 * say "illustrative" in the caption.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-dis-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/* 1 — What makes something a disorder: two gates, both required (lead, 1000×460) */
const disorderSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dis-gate')}</defs>
<rect x="30" y="100" width="200" height="90" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="130" y="138" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">An unusual way of</text>
<text x="130" y="166" font-size="20" text-anchor="middle" fill="currentColor">thinking, feeling, acting</text>
<line x1="230" y1="145" x2="276" y2="145" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-gate)"/>
<polygon points="280,145 380,85 480,145 380,205" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="380" y="140" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Dysfunction</text>
<text x="380" y="164" font-size="19" text-anchor="middle" fill="currentColor">INSIDE the person?</text>
<line x1="480" y1="145" x2="526" y2="145" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-gate)"/>
<text x="503" y="130" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">yes</text>
<polygon points="530,145 630,85 730,145 630,205" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="630" y="140" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Distress or</text>
<text x="630" y="164" font-size="19" text-anchor="middle" fill="currentColor">impairment?</text>
<line x1="730" y1="145" x2="776" y2="145" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-gate)"/>
<text x="753" y="130" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">yes</text>
<g class="fig-accent">
<rect x="780" y="100" width="190" height="90" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="875" y="138" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">DISORDER</text>
<text x="875" y="166" font-size="18" text-anchor="middle" fill="currentColor">both gates passed</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-dis-gate-r')}</defs>
<line x1="380" y1="205" x2="380" y2="296" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-gate-r)"/>
<line x1="630" y1="205" x2="630" y2="296" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-gate-r)"/>
<text x="396" y="256" font-size="18" font-weight="700" fill="currentColor">no</text>
<text x="646" y="256" font-size="18" font-weight="700" fill="currentColor">no</text>
<rect x="250" y="300" width="510" height="104" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="505" y="334" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">NOT a disorder on its own</text>
<text x="505" y="362" font-size="19" text-anchor="middle" fill="currentColor">statistical rarity · social deviance · conflict with society</text>
<text x="505" y="388" font-size="19" text-anchor="middle" fill="currentColor">unusual beliefs, nonconformity or protest never qualify</text>
</g>
<g class="fig-muted">
<text x="505" y="444" font-size="19" text-anchor="middle" fill="currentColor">DSM-5: categorical (criteria met or not) and atheoretical about cause</text>
</g>
</svg>`

/* 2 — Anxiety disorders as a ladder of trigger breadth (replace-table, 560×440) */
const anxietyRung = (
  i: number,
  name: string,
  cue: string,
  detail: [string, string],
  cls?: 'fig-accent' | 'fig-accent-2',
) => {
  const y = 44 + i * 76
  const box = `<rect x="46" y="${y}" width="498" height="64" rx="9" fill="${cls ? 'currentColor' : 'none'}" fill-opacity="0.07" stroke="currentColor" stroke-width="${cls ? 3 : 2}"/>
<text x="58" y="${y + 26}" font-size="16" font-weight="700" fill="currentColor">${name}</text>
<text x="58" y="${y + 48}" font-size="13" fill="currentColor">cue: ${cue}</text>`
  return `${cls ? `<g class="${cls}">${box}</g>` : box}
<text x="226" y="${y + 26}" font-size="13.5" fill="currentColor">${detail[0]}</text>
<text x="226" y="${y + 50}" font-size="13.5" fill="currentColor">${detail[1]}</text>`
}

const anxietySvg = `${SVG_OPEN} viewBox="0 0 560 440">
<text x="46" y="26" font-size="15" font-weight="700" fill="currentColor">Sorted by how BROAD the trigger is</text>
<g class="fig-muted">
<defs>${ARROW('arr-dis-anx-m')}</defs>
<line x1="30" y1="412" x2="30" y2="48" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dis-anx-m)"/>
<text x="14" y="232" font-size="13" text-anchor="middle" fill="currentColor" transform="rotate(-90 14 232)">one cue → every domain</text>
</g>
${anxietyRung(0, 'Generalized anxiety', 'everything', ['uncontrollable worry across MANY domains,', 'most days for ≥ 6 months; tension, poor sleep'], 'fig-accent')}
${anxietyRung(1, 'Panic disorder', 'none (unexpected)', ['attacks surge and peak within minutes, PLUS', '≥ 1 month of fear-of-the-fear / avoidance'], 'fig-accent-2')}
${anxietyRung(2, 'Agoraphobia', 'no-exit places', ['crowds, transit, open or enclosed spaces', 'where escape or help feels unavailable'])}
${anxietyRung(3, 'Social anxiety', 'people watching', ['scrutiny and negative evaluation;', 'the fear is of embarrassment specifically'])}
${anxietyRung(4, 'Specific phobia', 'one object', ['immediate fear response and avoidance;', 'the person knows the fear is excessive'])}
<g class="fig-accent-2"><text x="46" y="436" font-size="13" fill="currentColor">red: the attack is an EVENT — the inter-attack month makes the disorder</text></g>
</svg>`

/* 3 — The OCD loop: negative reinforcement keeps the ritual (lead, 1000×460) */
const ocdSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dis-ocd')}</defs>
<rect x="270" y="30" width="300" height="72" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="420" y="60" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">OBSESSION</text>
<text x="420" y="86" font-size="19" text-anchor="middle" fill="currentColor">intrusive, unwanted thought</text>
<rect x="580" y="195" width="220" height="72" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="690" y="225" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">ANXIETY rises</text>
<text x="690" y="251" font-size="19" text-anchor="middle" fill="currentColor">"something terrible…"</text>
<rect x="270" y="360" width="300" height="72" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="420" y="390" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">COMPULSION</text>
<text x="420" y="416" font-size="19" text-anchor="middle" fill="currentColor">ritual or mental act</text>
<rect x="40" y="195" width="220" height="72" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="150" y="225" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">RELIEF</text>
<text x="150" y="251" font-size="19" text-anchor="middle" fill="currentColor">anxiety drops — briefly</text>
<polyline points="570,66 690,66 690,191" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-ocd)"/>
<polyline points="690,267 690,396 574,396" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-ocd)"/>
<polyline points="266,396 150,396 150,271" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-ocd)"/>
<polyline points="150,195 150,66 266,66" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-ocd)"/>
<g class="fig-muted">
<text x="150" y="156" font-size="17" text-anchor="middle" fill="currentColor">…until the thought</text>
<text x="150" y="178" font-size="17" text-anchor="middle" fill="currentColor">returns</text>
<text x="420" y="124" font-size="17" text-anchor="middle" fill="currentColor">ego-dystonic: recognized as one's own mind, resisted</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-dis-ocd-r')}</defs>
<path d="M262,250 C 330,280 370,320 414,356" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6" marker-end="url(#arr-dis-ocd-r)"/>
<text x="420" y="200" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">NEGATIVE REINFORCEMENT</text>
<text x="420" y="226" font-size="19" text-anchor="middle" fill="currentColor">removing the anxiety rewards the ritual,</text>
<text x="420" y="250" font-size="19" text-anchor="middle" fill="currentColor">so the ritual grows</text>
</g>
<g class="fig-accent">
<line x1="672" y1="316" x2="708" y2="344" stroke="currentColor" stroke-width="4"/>
<line x1="708" y1="316" x2="672" y2="344" stroke="currentColor" stroke-width="4"/>
<text x="722" y="300" font-size="19" font-weight="700" fill="currentColor">Exposure + response</text>
<text x="722" y="324" font-size="19" font-weight="700" fill="currentColor">prevention cuts HERE:</text>
<text x="722" y="350" font-size="18" fill="currentColor">block the ritual, sit with</text>
<text x="722" y="374" font-size="18" fill="currentColor">the anxiety — it extinguishes</text>
<text x="722" y="398" font-size="18" fill="currentColor">on its own</text>
</g>
</svg>`

/* 4 — Trauma: the same four clusters, DURATION draws the line (lead, 1000×460) */
const clusterBox = (x: number, title: string, l1: string, l2: string) =>
  `<rect x="${x}" y="40" width="205" height="104" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="${x + 102}" y="70" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">${title}</text>
<text x="${x + 102}" y="98" font-size="17" text-anchor="middle" fill="currentColor">${l1}</text>
<text x="${x + 102}" y="122" font-size="17" text-anchor="middle" fill="currentColor">${l2}</text>`

const traumaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dis-trauma')}</defs>
${clusterBox(110, '1 Intrusion', 'flashbacks, nightmares,', 'intrusive memories')}
${clusterBox(325, '2 Avoidance', 'of reminders —', 'places, people, talk')}
${clusterBox(540, '3 Negative mood', 'blame, detachment,', 'anhedonia')}
${clusterBox(755, '4 Arousal', 'hypervigilance, startle,', 'sleep disturbance')}
<g class="fig-muted">
<text x="540" y="176" font-size="18" text-anchor="middle" fill="currentColor">the SAME four clusters on both sides of the line</text>
</g>
<g class="fig-muted">
<rect x="120" y="200" width="320" height="110" fill="currentColor" fill-opacity="0.12" stroke="none"/>
</g>
<text x="280" y="238" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">ACUTE STRESS DISORDER</text>
<text x="280" y="266" font-size="18" text-anchor="middle" fill="currentColor">same picture, lasting</text>
<text x="280" y="290" font-size="18" text-anchor="middle" fill="currentColor">up to 1 month</text>
<g class="fig-accent">
<rect x="440" y="200" width="500" height="110" fill="currentColor" fill-opacity="0.10" stroke="none"/>
<text x="690" y="238" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">PTSD</text>
<text x="690" y="266" font-size="18" text-anchor="middle" fill="currentColor">symptoms persist beyond 1 month</text>
<text x="690" y="290" font-size="18" text-anchor="middle" fill="currentColor">(flashbacks can keep coming for years)</text>
</g>
<line x1="60" y1="330" x2="960" y2="330" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-trauma)"/>
<g class="fig-accent-2">
<polygon points="120,318 112,330 118,330 108,348 128,328 121,328" fill="currentColor"/>
<text x="120" y="366" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">traumatic event</text>
<text x="120" y="388" font-size="16" text-anchor="middle" fill="currentColor">(qualifying exposure)</text>
</g>
<line x1="440" y1="196" x2="440" y2="340" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6"/>
<text x="440" y="366" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">1 month</text>
<g class="fig-muted">
<text x="940" y="358" font-size="17" text-anchor="end" fill="currentColor">time →</text>
<text x="500" y="432" font-size="18" text-anchor="middle" fill="currentColor">Adjustment disorder is a different lane: a NON-catastrophic stressor with a disproportionate response</text>
</g>
</svg>`

/* 5 — Depression: episode vs persistent (lead, 1000×460, illustrative lines) */
const depressionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dis-mdd')}</defs>
<text x="80" y="32" font-size="20" font-weight="700" fill="currentColor">Major depressive EPISODE = ≥ 5 of 9 symptoms for ≥ 2 weeks,</text>
<text x="80" y="58" font-size="20" fill="currentColor">at least one being depressed mood OR anhedonia — either suffices</text>
<g class="fig-muted">
<line x1="80" y1="150" x2="960" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<text x="958" y="142" font-size="16" text-anchor="end" fill="currentColor">usual mood</text>
<line x1="80" y1="255" x2="960" y2="255" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
<text x="958" y="247" font-size="16" text-anchor="end" fill="currentColor">episode threshold (5 of 9)</text>
</g>
<line x1="80" y1="400" x2="968" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dis-mdd)"/>
<line x1="80" y1="400" x2="80" y2="92" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dis-mdd)"/>
<text x="50" y="250" font-size="19" text-anchor="middle" fill="currentColor" transform="rotate(-90 50 250)">mood</text>
<text x="524" y="432" font-size="18" text-anchor="middle" fill="currentColor">time (years)</text>
<g class="fig-accent">
<path d="M80,150 L160,150 C 175,150 178,340 190,340 L230,340 C 244,340 248,150 262,150 L700,150 C 715,150 718,340 730,340 L770,340 C 784,340 788,150 802,150 L960,150" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="240" y="370" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">MDD episode: ≥ 2 weeks, deep</text>
<text x="750" y="370" font-size="18" text-anchor="middle" fill="currentColor">recurrence is common</text>
</g>
<g class="fig-accent-2">
<path d="M80,150 C 110,150 120,215 150,215 C 200,215 220,208 270,212 C 330,218 380,209 430,213 C 490,218 540,208 600,212 C 660,217 720,209 790,213 C 850,217 900,210 960,213" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="480" y="182" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">persistent depressive disorder (dysthymia)</text>
<text x="480" y="204" font-size="17" text-anchor="middle" fill="currentColor">milder, but ≥ 2 years — more days than not</text>
</g>
</svg>`

/* 6 — Bipolar: defined by the elevated pole (replace-table, 560×440, illustrative) */
const bipolarStrip = (T: number, name: string, req: [string, string, string], path: string, extra: string) =>
  `<text x="16" y="${T + 22}" font-size="16" font-weight="700" fill="currentColor">${name}</text>
<text x="16" y="${T + 44}" font-size="12.5" fill="currentColor">${req[0]}</text>
<text x="16" y="${T + 62}" font-size="12.5" fill="currentColor">${req[1]}</text>
<text x="16" y="${T + 80}" font-size="12.5" fill="currentColor">${req[2]}</text>
<g class="fig-muted">
<line x1="150" y1="${T + 12}" x2="446" y2="${T + 12}" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/>
<line x1="150" y1="${T + 36}" x2="446" y2="${T + 36}" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/>
<line x1="150" y1="${T + 60}" x2="446" y2="${T + 60}" stroke="currentColor" stroke-width="1.2"/>
<line x1="150" y1="${T + 92}" x2="446" y2="${T + 92}" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/>
<text x="452" y="${T + 16}" font-size="11" fill="currentColor">mania</text>
<text x="452" y="${T + 40}" font-size="11" fill="currentColor">hypomania</text>
<text x="452" y="${T + 64}" font-size="11" fill="currentColor">usual mood</text>
<text x="452" y="${T + 96}" font-size="11" fill="currentColor">major depression</text>
</g>
${path}${extra}`

const bipolarSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<text x="16" y="24" font-size="15" font-weight="700" fill="currentColor">Named for the ELEVATED pole — the depressive pole varies</text>
${bipolarStrip(40, 'Bipolar I', ['≥ 1 MANIC episode:', '≥ 1 wk, impairment,', 'psychosis possible'],
  `<g class="fig-accent-2"><path d="M150,100 L190,100 C 200,100 204,42 222,42 L246,42 C 264,42 268,100 278,100 L446,100" fill="none" stroke="currentColor" stroke-width="2.5"/></g>`,
  `<g class="fig-muted"><path d="M300,100 C 310,100 314,128 328,128 L352,128 C 366,128 370,100 380,100" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><text x="340" y="146" font-size="11" text-anchor="middle" fill="currentColor">depression NOT required</text></g>`)}
${bipolarStrip(160, 'Bipolar II', ['HYPOMANIA (≥ 4 d, no', 'marked impairment)', '+ MAJOR depression'],
  `<g class="fig-accent-2"><path d="M150,220 L190,220 C 200,220 204,186 218,186 L242,186 C 256,186 260,220 270,220" fill="none" stroke="currentColor" stroke-width="2.5"/></g>`,
  `<g class="fig-accent"><path d="M270,220 L300,220 C 312,220 316,258 332,258 L372,258 C 388,258 392,220 404,220 L446,220" fill="none" stroke="currentColor" stroke-width="2.5"/></g><g class="fig-muted"><text x="340" y="188" font-size="11" text-anchor="middle" fill="currentColor">never reaches mania</text></g>`)}
${bipolarStrip(280, 'Cyclothymia', ['≥ 2 yr of swings that', 'stay SUBTHRESHOLD', 'at both poles'],
  `<path d="M150,340 C 170,340 175,326 190,326 C 210,326 212,356 232,356 C 252,356 254,324 274,324 C 294,324 296,358 316,358 C 336,358 338,328 358,328 C 378,328 380,354 400,354 C 420,354 424,330 446,332" fill="none" stroke="currentColor" stroke-width="2.5"/>`,
  '')}
<g class="fig-accent-2"><text x="16" y="412" font-size="13" fill="currentColor">tell: decreased NEED for sleep (rested after 3 h) ≠ insomnia (tired, can't sleep)</text></g>
<g class="fig-muted"><text x="16" y="432" font-size="13" fill="currentColor">lithium stabilizes; an antidepressant alone can switch a bipolar patient into mania</text></g>
</svg>`

/* 7 — Schizophrenia: added vs subtracted, and one transmitter on three pathways (lead, 1000×460) */
const schizophreniaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent-2">
<rect x="40" y="46" width="400" height="118" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="240" y="78" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">POSITIVE = ADDED</text>
<text x="240" y="108" font-size="19" text-anchor="middle" fill="currentColor">delusions · hallucinations</text>
<text x="240" y="134" font-size="19" text-anchor="middle" fill="currentColor">disorganized speech</text>
</g>
<line x1="40" y1="222" x2="440" y2="222" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted"><text x="240" y="212" font-size="16" text-anchor="middle" fill="currentColor">ordinary experience</text></g>
<g class="fig-accent">
<rect x="40" y="280" width="400" height="118" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="240" y="312" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">NEGATIVE = SUBTRACTED</text>
<text x="240" y="342" font-size="19" text-anchor="middle" fill="currentColor">flat affect · avolition · alogia</text>
<text x="240" y="368" font-size="19" text-anchor="middle" fill="currentColor">anhedonia · asociality</text>
</g>
<g class="fig-muted">
<text x="240" y="430" font-size="17" text-anchor="middle" fill="currentColor">+ cognitive deficits: working memory, attention</text>
<line x1="480" y1="30" x2="480" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<circle cx="560" cy="230" r="46" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="560" y="224" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">DOPA-</text>
<text x="560" y="246" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">MINE</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-dis-schz-r')}</defs>
<line x1="590" y1="196" x2="626" y2="130" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-schz-r)"/>
<rect x="630" y="46" width="355" height="118" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="648" y="78" font-size="21" font-weight="700" fill="currentColor">MESOLIMBIC — too much ↑</text>
<text x="648" y="106" font-size="18" fill="currentColor">→ positive symptoms</text>
<text x="648" y="132" font-size="16" fill="currentColor">D2 blockers quiet it; amphetamine mimics it</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-dis-schz-b')}</defs>
<line x1="590" y1="264" x2="626" y2="330" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-schz-b)"/>
<rect x="630" y="280" width="355" height="118" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="648" y="312" font-size="21" font-weight="700" fill="currentColor">MESOCORTICAL — too little ↓</text>
<text x="648" y="340" font-size="18" fill="currentColor">→ negative + cognitive symptoms</text>
<text x="648" y="366" font-size="16" fill="currentColor">D2 blockers cannot fix an underactive path</text>
</g>
<defs>${ARROW('arr-dis-schz')}</defs>
<line x1="606" y1="230" x2="626" y2="230" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-dis-schz)"/>
<rect x="630" y="190" width="355" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="648" y="218" font-size="18" font-weight="700" fill="currentColor">NIGROSTRIATAL — fine until blocked</text>
<text x="648" y="246" font-size="16" fill="currentColor">D2 blockade → tremor + rigidity (parkinsonism)</text>
<g class="fig-muted"><text x="792" y="430" font-size="16" text-anchor="middle" fill="currentColor">one transmitter, three pathways, opposite directions</text></g>
</svg>`

/* 8 — Personality disorders: three clusters, three exam contrasts (beside, 560×440) */
const pdBox = (col: number, row: number, name: string, detail: string, hot?: boolean) => {
  const x = 16 + col * 180
  const y = 70 + row * 64
  const body = `<rect x="${x}" y="${y}" width="168" height="58" rx="8" fill="${hot ? 'currentColor' : 'none'}" fill-opacity="0.07" stroke="currentColor" stroke-width="${hot ? 2.5 : 1.5}"/>
<text x="${x + 10}" y="${y + 23}" font-size="15" font-weight="700" fill="currentColor">${name}</text>
<text x="${x + 10}" y="${y + 45}" font-size="12" fill="currentColor">${detail}</text>`
  return hot ? `<g class="fig-accent-2">${body}</g>` : body
}

const personalitySvg = `${SVG_OPEN} viewBox="0 0 560 440">
<text x="16" y="24" font-size="15" font-weight="700" fill="currentColor">Ego-SYNTONIC ("just how I am"), lifelong, pervasive — three clusters</text>
<g class="fig-muted">
<text x="100" y="56" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">A · odd / eccentric</text>
<text x="280" y="56" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">B · dramatic / erratic</text>
<text x="460" y="56" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">C · anxious / fearful</text>
</g>
${pdBox(0, 0, 'Paranoid', 'pervasive distrust')}
${pdBox(0, 1, 'Schizoid', 'indifferent to people, flat', true)}
${pdBox(0, 2, 'Schizotypal', 'odd beliefs, no psychosis', true)}
${pdBox(1, 0, 'Antisocial', '≥ 18, conduct disorder first')}
${pdBox(1, 1, 'Borderline', 'unstable self, splitting')}
${pdBox(1, 2, 'Histrionic', 'attention-seeking emotion')}
${pdBox(1, 3, 'Narcissistic', 'grandiose, fragile beneath')}
${pdBox(2, 0, 'Dependent', "clinging, can't decide alone")}
${pdBox(2, 1, 'Avoidant', 'wants but fears rejection', true)}
${pdBox(2, 2, 'OCPD', 'perfectionism, endorsed', true)}
<g class="fig-accent-2">
<text x="16" y="354" font-size="13.5" font-weight="700" fill="currentColor">The tested contrasts (red boxes):</text>
<text x="16" y="376" font-size="13" fill="currentColor">schizoid = doesn't want closeness  vs  avoidant = wants it, fears rejection</text>
<text x="16" y="398" font-size="13" fill="currentColor">schizotypal = odd but reality testing intact  vs  schizophrenia = frank psychosis</text>
<text x="16" y="420" font-size="13" fill="currentColor">OCPD = endorsed perfectionism, no rituals  vs  OCD = alien obsessions + rituals</text>
</g>
</svg>`

/* 9 — Diathesis × stress: where each etiology framework lives (lead, 1000×460) */
const diathesisSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-dis-dia')}</defs>
<g class="fig-accent-2">
<polygon points="160,70 560,70 560,360" fill="currentColor" fill-opacity="0.09" stroke="none"/>
<line x1="160" y1="70" x2="560" y2="360" stroke="currentColor" stroke-width="2.5"/>
<text x="470" y="226" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">DISORDER</text>
<text x="470" y="250" font-size="17" text-anchor="middle" fill="currentColor">expressed</text>
</g>
<g class="fig-muted"><text x="230" y="300" font-size="17" text-anchor="middle" fill="currentColor">below threshold</text></g>
<line x1="100" y1="380" x2="590" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dis-dia)"/>
<line x1="100" y1="380" x2="100" y2="60" stroke="currentColor" stroke-width="2" marker-end="url(#arr-dis-dia)"/>
<text x="340" y="412" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">STRESS — life events, context</text>
<text x="62" y="225" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(-90 62 225)">DIATHESIS — vulnerability</text>
<g class="fig-accent">
<defs>${ARROW('arr-dis-dia-b')}</defs>
<circle cx="112" cy="110" r="8" fill="currentColor"/>
<line x1="120" y1="110" x2="240" y2="110" stroke="currentColor" stroke-width="3" marker-end="url(#arr-dis-dia-b)"/>
<text x="254" y="116" font-size="17" font-weight="700" fill="currentColor">A: high diathesis —</text>
<text x="254" y="138" font-size="17" fill="currentColor">a small stress crosses the line</text>
<circle cx="112" cy="320" r="8" fill="currentColor"/>
<line x1="120" y1="320" x2="530" y2="320" stroke="currentColor" stroke-width="3" marker-end="url(#arr-dis-dia-b)"/>
<text x="120" y="350" font-size="17" font-weight="700" fill="currentColor">B: low diathesis — only a large stress crosses</text>
</g>
<g class="fig-muted"><line x1="620" y1="40" x2="620" y2="420" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/></g>
<g class="fig-accent">
<rect x="650" y="56" width="320" height="94" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="670" y="86" font-size="20" font-weight="700" fill="currentColor">BIO — biological framework</text>
<text x="670" y="112" font-size="17" fill="currentColor">genes, transmitters, structure</text>
<text x="670" y="136" font-size="17" fill="currentColor">→ sets the DIATHESIS (↑ axis)</text>
</g>
<rect x="650" y="176" width="320" height="122" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="670" y="204" font-size="20" font-weight="700" fill="currentColor">PSYCHO — four frameworks</text>
<text x="670" y="228" font-size="17" fill="currentColor">behavioral, cognitive, psychodynamic,</text>
<text x="670" y="250" font-size="17" fill="currentColor">humanistic</text>
<text x="670" y="272" font-size="17" fill="currentColor">→ how stress is learned, appraised,</text>
<text x="670" y="292" font-size="17" fill="currentColor">defended — the slope of the line</text>
<g class="fig-accent-2">
<rect x="650" y="314" width="320" height="92" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<text x="670" y="342" font-size="20" font-weight="700" fill="currentColor">SOCIAL — sociocultural</text>
<text x="670" y="366" font-size="17" fill="currentColor">context, inequities, stigma</text>
<text x="670" y="390" font-size="17" fill="currentColor">→ loads the STRESS axis (→)</text>
</g>
<g class="fig-muted"><text x="540" y="446" font-size="17" text-anchor="middle" fill="currentColor">Diathesis-stress integrates them — when frameworks compete, the biopsychosocial answer is usually credited</text></g>
</svg>`

export const mcatDisordersFigures: DeckFigurePlacement[] = [
  {
    at: 'What Makes Something a Disorder?',
    mode: 'lead',
    figure: {
      svg: disorderSvg,
      alt:
        'Flow chart with two gates. An unusual way of thinking, feeling or acting enters the first decision: is there dysfunction inside the person? If yes, the second decision: is there distress or impairment? If yes, it is a disorder (blue box: both gates passed). A "no" at either gate leads to a red box: not a disorder on its own — statistical rarity, social deviance and conflict with society; unusual beliefs, nonconformity or protest never qualify. Footer: DSM-5 is categorical (criteria met or not) and atheoretical about cause.',
      caption: 'Two gates, both required: internal dysfunction AND distress or impairment.',
    },
    blocks: ['- Rarity and deviance alone never qualify — the definition exists so diagnosis cannot be social control'],
  },
  {
    at: 'Anxiety Disorders',
    mode: 'replace-table',
    figure: {
      svg: anxietySvg,
      alt:
        'A ladder of five anxiety disorders sorted by how broad the trigger is, from one cue at the bottom to every domain at the top. Specific phobia: cue is one object or situation; immediate fear and avoidance; the person knows the fear is excessive. Social anxiety: cue is people watching; scrutiny and negative evaluation, specifically fear of embarrassment. Agoraphobia: cue is places with no exit — crowds, transit, open or enclosed spaces where escape or help feels unavailable. Panic disorder (red): no cue, attacks are unexpected, surging and peaking within minutes, plus at least one month of fear-of-the-fear or avoidance. Generalized anxiety disorder (blue): cue is everything with no focus; uncontrollable worry across many domains, most days for at least six months, with tension and poor sleep. Footer: the panic attack is an event; the inter-attack month makes the disorder.',
    },
    blocks: [
      '- Cued fear (phobia, social, agoraphobia) vs uncued attacks (panic) vs diffuse worry (GAD)',
      '- Panic DISORDER = unexpected attacks **plus** ≥ 1 month of worry or behaviour change',
      '- GAD = breadth + duration (≥ 6 months) + uncontrollability',
      '- ER vignette with a normal cardiac workup = panic attack',
    ],
  },
  {
    at: 'Obsessive-Compulsive',
    mode: 'lead',
    figure: {
      svg: ocdSvg,
      alt:
        'A clockwise loop of four boxes. Obsession (an intrusive, unwanted thought, ego-dystonic — recognized as one’s own mind and resisted) leads to anxiety rising, which leads to a compulsion (a ritual or mental act), which leads to relief as anxiety drops briefly, and the loop returns to the obsession when the thought comes back. A red dashed arrow from relief back to the compulsion is labelled negative reinforcement: removing the anxiety rewards the ritual, so the ritual grows. A blue X on the arrow from anxiety to compulsion marks where exposure with response prevention cuts the loop: block the ritual, sit with the anxiety, and it extinguishes on its own.',
      caption: 'The OCD loop runs on negative reinforcement; ERP removes the reinforcer.',
    },
    blocks: ['- Relief is the reinforcer (anxiety removed → ritual strengthened): the learning lesson’s operant engine inside a disorder'],
  },
  {
    at: 'Trauma & Stressor-Related',
    mode: 'lead',
    figure: {
      svg: traumaSvg,
      alt:
        'Timeline starting at a traumatic event (red marker) and running to the right. Above it, four symptom-cluster boxes: 1 intrusion (flashbacks, nightmares, intrusive memories), 2 avoidance (of reminders — places, people, talk), 3 negative mood (blame, detachment, anhedonia), 4 arousal (hypervigilance, startle, sleep disturbance); a note says the same four clusters apply on both sides of the line. A grey band from the event to the one-month mark is acute stress disorder: the same picture, lasting up to one month. A blue band beyond the dashed one-month line is PTSD: symptoms persist beyond one month. Footer: adjustment disorder is a different lane — a non-catastrophic stressor with a disproportionate response.',
      caption: 'Same four clusters either side of one month: duration, not symptom type, separates acute stress disorder from PTSD.',
    },
    blocks: ['- Count the clusters, then check the calendar: ≤ 1 month = acute stress disorder, longer = PTSD'],
  },
  {
    at: 'Major Depressive Disorder',
    mode: 'lead',
    figure: {
      svg: depressionSvg,
      alt:
        'Illustrative mood-over-time graph. A dashed line marks usual mood and a lower dashed line marks the episode threshold (5 of 9 symptoms). The blue line stays at usual mood, drops sharply below the threshold for a block labelled MDD episode (at least two weeks, deep), returns to usual mood, and later drops again, labelled recurrence is common. The red line sinks a little below usual mood but above the episode threshold and stays there across the whole span, labelled persistent depressive disorder (dysthymia): milder, but at least two years, more days than not. Header: a major depressive episode is at least five of nine symptoms for at least two weeks, at least one being depressed mood or anhedonia — either suffices.',
      caption: 'Illustrative mood lines: MDD is deep and episodic (≥ 2 weeks); persistent depressive disorder is shallow and chronic (≥ 2 years).',
    },
    blocks: ['- Depressed mood OR anhedonia counts as the cardinal symptom — "numb, not sad" still qualifies'],
  },
  {
    at: 'Bipolar Disorders',
    mode: 'replace-table',
    figure: {
      svg: bipolarSvg,
      alt:
        'Three illustrative mood strips, each with dashed reference lines for mania, hypomania, usual mood and major depression. Bipolar I: at least one manic episode (at least one week, impairment, psychosis possible) — the red line spikes above the mania line; a dashed dip notes depression is not required. Bipolar II: hypomania (at least four days, no marked impairment) plus major depression — the red bump reaches the hypomania band but never mania, and a blue dip crosses the major depression line. Cyclothymia: at least two years of swings that stay subthreshold at both poles — small oscillations between the hypomania and depression lines, never crossing either. Footer: the tell is decreased need for sleep (rested after three hours) versus insomnia (tired, cannot sleep); lithium stabilizes, and an antidepressant alone can switch a bipolar patient into mania.',
    },
    blocks: [
      '- Mania (≥ 1 wk, impairment/psychosis/hospitalization) = **Bipolar I**, depression not needed',
      '- Hypomania (≥ 4 d, no marked impairment) + major depression = **Bipolar II**',
      '- Two years of subthreshold swings = **cyclothymia**',
      '- Rested after 3 h = decreased NEED for sleep, the tell',
    ],
  },
  {
    at: 'Schizophrenia',
    mode: 'lead',
    figure: {
      svg: schizophreniaSvg,
      alt:
        'Left: a ledger around a baseline labelled ordinary experience. Above it, in red, positive = added: delusions, hallucinations, disorganized speech. Below it, in blue, negative = subtracted: flat affect, avolition, alogia, anhedonia, asociality. Note: plus cognitive symptoms (working memory, attention); negative and cognitive symptoms predict function best. Right: a dopamine node with three arrows. Red: mesolimbic, too much — positive symptoms; D2 blockers quiet it and amphetamine mimics it. Blue: mesocortical, too little — negative and cognitive symptoms; D2 blockers cannot fix an underactive path. Plain: nigrostriatal, normal until blocked — D2 blockade causes tremor and rigidity (parkinsonism). Footer: one transmitter, three pathways, opposite directions.',
      caption: 'Added vs subtracted symptoms, and the dopamine hypothesis: one transmitter, opposite directions on two pathways.',
    },
    blocks: ['- A D2 blocker quiets the voices, leaves the flatness, and adds tremor — three pathways in one vignette'],
  },
  {
    // The section's first slide is the ego-syntonic paragraph; its cluster
    // table lands on the (cont.) slide, so the figure sits beside that
    // paragraph (beside, not replace-table) and the table follows as detail.
    at: 'Personality Disorders',
    mode: 'beside',
    figure: {
      svg: personalitySvg,
      alt:
        'Three columns of personality disorders. Cluster A, odd or eccentric: paranoid (pervasive distrust), schizoid (indifferent to people, flat), schizotypal (odd beliefs, no psychosis). Cluster B, dramatic or erratic: antisocial (age 18 or over, with conduct disorder first), borderline (unstable self, splitting), histrionic (attention-seeking emotion), narcissistic (grandiose, fragile beneath). Cluster C, anxious or fearful: dependent (clinging, cannot decide alone), avoidant (wants but fears rejection), OCPD (perfectionism, endorsed). Red boxes mark the tested contrasts: schizoid does not want closeness versus avoidant wants it but fears rejection; schizotypal is odd with reality testing intact versus schizophrenia with frank psychosis; OCPD is endorsed perfectionism without rituals versus OCD with ego-dystonic obsessions and rituals. Header: personality disorders are ego-syntonic ("just how I am"), lifelong and pervasive.',
    },
  },
  {
    at: 'The Etiology Frameworks',
    mode: 'lead',
    figure: {
      svg: diathesisSvg,
      alt:
        'Left: a plane with stress (life events, context) on the horizontal axis and diathesis (vulnerability) on the vertical axis. A red diagonal threshold runs from high-diathesis/low-stress to low-diathesis/high-stress; the region above and right of it is shaded red and labelled disorder expressed, the region below is labelled below threshold. Person A starts with high diathesis and a short blue arrow of stress crosses the line; person B starts with low diathesis and only a long arrow of stress crosses it. Right: three boxes locate the etiology frameworks on the plane. Bio (blue): the biological framework — genes, transmitters, structure — sets the diathesis axis. Psycho: behavioral, cognitive, psychodynamic and humanistic frameworks — how stress is learned, appraised and defended, the slope of the line. Social (red): the sociocultural framework — context, inequities, stigma — loads the stress axis. Footer: diathesis-stress integrates them; when frameworks compete, the biopsychosocial answer is usually credited.',
      caption: 'Diathesis × stress: each framework names a different part of the plane, and treatment follows the framework.',
    },
    blocks: ['- Match the mechanism in the stem to its framework; each framework’s treatment is the same mechanism run in reverse'],
  },
]
