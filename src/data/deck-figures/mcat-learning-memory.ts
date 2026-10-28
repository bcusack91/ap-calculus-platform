import type { DeckFigurePlacement } from './index'

/**
 * Learning & Memory (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (three conditioning
 * phases, a cumulative record, a 2×2 grid …) — no textbook or prep-company
 * figure was copied. Curves that are not data say "illustrative" in the caption.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-lm-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/* 1 — Classical conditioning in three phases (lead, 1000×460) */
const phasesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lm-phases')}</defs>
<g class="fig-muted">
<rect x="20" y="20" width="400" height="420" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="440" y="20" width="260" height="420" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="720" y="20" width="260" height="420" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>
</g>
<text x="220" y="62" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">BEFORE</text>
<text x="570" y="62" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">DURING</text>
<text x="850" y="62" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">AFTER</text>
<rect x="40" y="110" width="160" height="54" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="120" y="144" font-size="20" text-anchor="middle" fill="currentColor">Bell (neutral)</text>
<line x1="120" y1="170" x2="120" y2="246" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lm-phases)"/>
<g class="fig-muted">
<rect x="40" y="255" width="160" height="54" rx="10" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<text x="120" y="289" font-size="20" text-anchor="middle" fill="currentColor">no response</text>
<text x="220" y="372" font-size="20" text-anchor="middle" fill="currentColor">the bell predicts nothing yet</text>
<text x="570" y="372" font-size="20" text-anchor="middle" fill="currentColor">repeated pairings</text>
<text x="850" y="372" font-size="20" text-anchor="middle" fill="currentColor">the bell alone now works</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-lm-phases-r')}</defs>
<rect x="240" y="110" width="160" height="54" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="320" y="144" font-size="20" text-anchor="middle" fill="currentColor">Food (US)</text>
<line x1="320" y1="170" x2="320" y2="246" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lm-phases-r)"/>
<rect x="240" y="255" width="160" height="54" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="320" y="289" font-size="20" text-anchor="middle" fill="currentColor">Salivation (UR)</text>
<line x1="570" y1="170" x2="570" y2="246" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lm-phases-r)"/>
<rect x="490" y="255" width="160" height="54" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="570" y="289" font-size="20" text-anchor="middle" fill="currentColor">Salivation (UR)</text>
</g>
<rect x="470" y="110" width="200" height="54" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="570" y="144" font-size="20" text-anchor="middle" fill="currentColor"><tspan class="fig-accent">Bell</tspan> + <tspan class="fig-accent-2">Food</tspan></text>
<g class="fig-accent">
<defs>${ARROW('arr-lm-phases-b')}</defs>
<rect x="770" y="110" width="160" height="54" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="850" y="144" font-size="20" text-anchor="middle" fill="currentColor">Bell (CS)</text>
<line x1="850" y1="170" x2="850" y2="246" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lm-phases-b)"/>
<rect x="770" y="255" width="160" height="54" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="850" y="289" font-size="20" text-anchor="middle" fill="currentColor">Salivation (CR)</text>
</g>
</svg>`

/* 2 — CS/US timing (lead, 1000×460) */
const timingRow = (c: number, label: string, cs: [number, number], us: [number, number], strength: string) =>
  `<text x="20" y="${c + 8}" font-size="22" fill="currentColor">${label}</text>
<g class="fig-muted"><line x1="230" y1="${c + 34}" x2="790" y2="${c + 34}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-lm-timing)"/></g>
<g class="fig-accent"><rect x="${cs[0]}" y="${c - 30}" width="${cs[1] - cs[0]}" height="22" rx="4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><text x="${(cs[0] + cs[1]) / 2}" y="${c - 12}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">CS</text></g>
<g class="fig-accent-2"><rect x="${us[0]}" y="${c - 2}" width="${us[1] - us[0]}" height="22" rx="4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/><text x="${(us[0] + us[1]) / 2}" y="${c + 16}" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">US</text></g>
<text x="820" y="${c + 8}" font-size="22" font-weight="700" fill="currentColor">${strength}</text>`

const timingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted"><defs>${ARROW('arr-lm-timing')}</defs></g>
${timingRow(70, 'Delayed (forward)', [300, 520], [440, 560], 'strongest')}
${timingRow(170, 'Trace', [300, 420], [480, 600], 'weaker')}
${timingRow(270, 'Simultaneous', [300, 480], [300, 480], 'weak')}
${timingRow(370, 'Backward', [440, 600], [300, 400], 'negligible')}
<g class="fig-muted"><text x="510" y="442" font-size="20" text-anchor="middle" fill="currentColor">time</text></g>
</svg>`

/* 3 — Lifecycle of a CR (lead, 1000×460) */
const lifecycleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lm-lifecycle')}</defs>
<line x1="80" y1="400" x2="965" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-lm-lifecycle)"/>
<line x1="80" y1="400" x2="80" y2="50" stroke="currentColor" stroke-width="2" marker-end="url(#arr-lm-lifecycle)"/>
<text x="30" y="230" font-size="22" text-anchor="middle" fill="currentColor" transform="rotate(-90 30 230)">CR strength</text>
<text x="520" y="445" font-size="22" text-anchor="middle" fill="currentColor">trials / time</text>
<g class="fig-muted">
<line x1="340" y1="88" x2="340" y2="398" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<line x1="580" y1="88" x2="580" y2="398" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<line x1="700" y1="88" x2="700" y2="398" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<text x="210" y="74" font-size="20" text-anchor="middle" fill="currentColor">CS + US</text>
<text x="460" y="74" font-size="20" text-anchor="middle" fill="currentColor">CS alone</text>
<text x="640" y="74" font-size="20" text-anchor="middle" fill="currentColor">no trials</text>
<text x="832" y="74" font-size="20" text-anchor="middle" fill="currentColor">CS alone</text>
</g>
<text x="210" y="44" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Acquisition</text>
<text x="460" y="44" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Extinction</text>
<text x="640" y="44" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Rest</text>
<text x="832" y="44" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Spontaneous recovery</text>
<g class="fig-accent">
<path d="M80 394 C 140 394, 150 135, 220 122 C 260 115, 300 117, 340 117 C 410 117, 450 378, 580 388" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M700 240 C 760 240, 800 385, 960 392" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="700" cy="240" r="5" fill="currentColor"/>
</g>
</svg>`

/* 4 — Preparedness grid (lead, 1000×440) */
const preparednessSvg = `${SVG_OPEN} viewBox="0 0 1000 440">
<g class="fig-muted">
<rect x="340" y="30" width="310" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="660" y="30" width="310" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="30" y="100" width="300" height="160" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="30" y="272" width="300" height="160" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="340" y="100" width="310" height="160" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="660" y="100" width="310" height="160" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="340" y="272" width="310" height="160" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="660" y="272" width="310" height="160" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
</g>
<text x="495" y="68" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Taste → illness</text>
<text x="815" y="68" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Colour or light → illness</text>
<text x="180" y="176" font-size="26" font-weight="700" text-anchor="middle" fill="currentColor">Rat</text>
<text x="180" y="208" font-size="20" text-anchor="middle" fill="currentColor">(eats by taste)</text>
<text x="180" y="348" font-size="26" font-weight="700" text-anchor="middle" fill="currentColor">Quail</text>
<text x="180" y="380" font-size="20" text-anchor="middle" fill="currentColor">(eats by sight)</text>
<g class="fig-accent">
<text x="495" y="196" font-size="72" font-weight="700" text-anchor="middle" fill="currentColor">✓</text>
<text x="815" y="378" font-size="72" font-weight="700" text-anchor="middle" fill="currentColor">✓</text>
</g>
<g class="fig-accent-2">
<text x="815" y="196" font-size="72" font-weight="700" text-anchor="middle" fill="currentColor">✗</text>
<text x="495" y="378" font-size="72" font-weight="700" text-anchor="middle" fill="currentColor">✗</text>
</g>
<text x="495" y="240" font-size="20" text-anchor="middle" fill="currentColor">one trial, hours of delay</text>
</svg>`

/* 5 — The operant 2×2 (replace-table, 560×440) */
const consequenceSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<rect x="144" y="10" width="204" height="62" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="356" y="10" width="196" height="62" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="8" y="80" width="128" height="170" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<rect x="8" y="260" width="128" height="170" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
</g>
<text x="246" y="36" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Stimulus ADDED</text>
<text x="246" y="60" font-size="16" text-anchor="middle" fill="currentColor">(positive)</text>
<text x="454" y="36" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Stimulus REMOVED</text>
<text x="454" y="60" font-size="16" text-anchor="middle" fill="currentColor">(negative)</text>
<text x="72" y="160" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Behavior ↑</text>
<text x="72" y="184" font-size="16" text-anchor="middle" fill="currentColor">(reinforcement)</text>
<text x="72" y="340" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Behavior ↓</text>
<text x="72" y="364" font-size="16" text-anchor="middle" fill="currentColor">(punishment)</text>
<g class="fig-accent">
<rect x="144" y="80" width="204" height="170" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<rect x="356" y="80" width="196" height="170" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
</g>
<g class="fig-accent-2">
<rect x="144" y="260" width="204" height="170" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
<rect x="356" y="260" width="196" height="170" rx="12" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="3"/>
</g>
<text x="246" y="158" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Positive reinforcement</text>
<text x="246" y="184" font-size="16" text-anchor="middle" fill="currentColor">treat for sitting</text>
<text x="454" y="158" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Negative reinforcement</text>
<text x="454" y="184" font-size="16" text-anchor="middle" fill="currentColor">aspirin removes headache</text>
<text x="246" y="338" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Positive punishment</text>
<text x="246" y="364" font-size="16" text-anchor="middle" fill="currentColor">extra chores</text>
<text x="454" y="338" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Negative punishment</text>
<text x="454" y="364" font-size="16" text-anchor="middle" fill="currentColor">phone taken away</text>
</svg>`

/* 6 — Schedules: cumulative record (replace-table, 560×440) */
const schedulesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-lm-sched')}</defs>
<line x1="70" y1="380" x2="550" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-lm-sched)"/>
<line x1="70" y1="380" x2="70" y2="28" stroke="currentColor" stroke-width="2" marker-end="url(#arr-lm-sched)"/>
<text x="26" y="205" font-size="18" text-anchor="middle" fill="currentColor" transform="rotate(-90 26 205)">cumulative responses</text>
<text x="310" y="424" font-size="18" text-anchor="middle" fill="currentColor">time</text>
<g class="fig-accent">
<path d="M70 380 L 400 40" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="410" y="46" font-size="18" font-weight="700" fill="currentColor">VR</text>
</g>
<path d="M70 380 L 150 310 L 175 310 L 255 240 L 280 240 L 360 170 L 385 170 L 465 100 L 490 100" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M146 302 L 154 318 M251 232 L 259 248 M356 162 L 364 178 M461 92 L 469 108" stroke="currentColor" stroke-width="2"/>
<text x="500" y="106" font-size="18" font-weight="700" fill="currentColor">FR</text>
<g class="fig-accent-2">
<path d="M70 380 C 130 380, 158 352, 165 325 L 185 325 C 245 325, 273 297, 280 270 L 300 270 C 360 270, 388 242, 395 215 L 415 215 C 475 215, 503 187, 510 160" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="520" y="166" font-size="18" font-weight="700" fill="currentColor">FI</text>
</g>
<g class="fig-muted">
<path d="M70 380 L 510 250" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="520" y="256" font-size="18" font-weight="700" fill="currentColor">VI</text>
</g>
</svg>`

/* 7 — The worked-example graph (after, 1000×460) */
const operantPassageSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lm-operant')}</defs>
<line x1="80" y1="400" x2="845" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-lm-operant)"/>
<line x1="80" y1="400" x2="80" y2="50" stroke="currentColor" stroke-width="2" marker-end="url(#arr-lm-operant)"/>
<text x="32" y="225" font-size="22" text-anchor="middle" fill="currentColor" transform="rotate(-90 32 225)">cumulative responses</text>
<text x="460" y="445" font-size="22" text-anchor="middle" fill="currentColor">time</text>
<g class="fig-muted"><line x1="520" y1="60" x2="520" y2="398" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/></g>
<text x="300" y="42" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Training</text>
<text x="690" y="42" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Extinction — food stops</text>
<path d="M80 400 C 150 290, 260 225, 520 185 Q 580 170, 640 168 L 840 168" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="852" y="166" font-size="20" font-weight="700" fill="currentColor">Group A</text>
<text x="852" y="190" font-size="20" fill="currentColor">continuous</text>
<g class="fig-accent">
<path d="M80 400 L 520 130 C 620 70, 720 48, 790 46 L 840 46" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="852" y="44" font-size="20" font-weight="700" fill="currentColor">Group B</text>
<text x="852" y="68" font-size="20" fill="currentColor">VR-10</text>
</g>
<g class="fig-accent-2">
<path d="M80 400 L 840 372" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="852" y="370" font-size="20" font-weight="700" fill="currentColor">Group C</text>
<text x="852" y="394" font-size="20" fill="currentColor">random food</text>
</g>
</svg>`

/* 8 — Multi-store memory (lead, 1000×460) */
const multiStoreSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lm-store')}</defs>
<rect x="30" y="120" width="220" height="110" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="140" y="155" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Sensory memory</text>
<text x="140" y="186" font-size="20" text-anchor="middle" fill="currentColor">iconic &lt; 1 s</text>
<text x="140" y="213" font-size="20" text-anchor="middle" fill="currentColor">echoic ~3–4 s</text>
<rect x="370" y="120" width="250" height="110" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="495" y="155" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Working / short-term</text>
<text x="495" y="192" font-size="20" text-anchor="middle" fill="currentColor">7 ± 2 items · ~30 s</text>
<rect x="740" y="120" width="230" height="110" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="855" y="155" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Long-term memory</text>
<text x="855" y="192" font-size="20" text-anchor="middle" fill="currentColor">unlimited, durable</text>
<line x1="250" y1="165" x2="366" y2="165" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lm-store)"/>
<text x="309" y="150" font-size="20" text-anchor="middle" fill="currentColor">attention</text>
<line x1="620" y1="165" x2="736" y2="165" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lm-store)"/>
<text x="679" y="150" font-size="20" text-anchor="middle" fill="currentColor">encoding</text>
<path d="M530 118 C 530 55, 460 55, 460 116" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lm-store)"/>
<text x="495" y="46" font-size="20" text-anchor="middle" fill="currentColor">rehearsal</text>
<g class="fig-accent">
<defs>${ARROW('arr-lm-store-b')}</defs>
<path d="M740 205 C 700 262, 660 262, 624 205" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lm-store-b)"/>
<text x="681" y="282" font-size="20" text-anchor="middle" fill="currentColor">retrieval</text>
</g>
<g class="fig-muted">
<defs>${ARROW('arr-lm-store-m')}</defs>
<line x1="140" y1="230" x2="140" y2="292" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#arr-lm-store-m)"/>
<text x="140" y="320" font-size="20" text-anchor="middle" fill="currentColor">decay</text>
<line x1="410" y1="230" x2="410" y2="292" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#arr-lm-store-m)"/>
<text x="410" y="320" font-size="20" text-anchor="middle" fill="currentColor">decay</text>
</g>
<line x1="855" y1="230" x2="855" y2="290" stroke="currentColor" stroke-width="2"/>
<rect x="500" y="290" width="485" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="742" y="320" font-size="20" text-anchor="middle" fill="currentColor">Explicit (declarative): episodic · semantic</text>
<rect x="500" y="350" width="485" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="742" y="380" font-size="20" text-anchor="middle" fill="currentColor">Implicit: procedural · priming · conditioning</text>
</svg>`

/* 9 — Proactive vs retroactive interference (lead, 1000×400) */
const interferenceRow = (y: number, test: string) =>
  `<rect x="300" y="${y}" width="150" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="375" y="${y + 37}" font-size="22" text-anchor="middle" fill="currentColor">Learn A</text>
<line x1="450" y1="${y + 30}" x2="516" y2="${y + 30}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lm-interf)"/>
<rect x="520" y="${y}" width="150" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="595" y="${y + 37}" font-size="22" text-anchor="middle" fill="currentColor">Learn B</text>
<line x1="670" y1="${y + 30}" x2="736" y2="${y + 30}" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lm-interf)"/>
<rect x="740" y="${y}" width="150" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="815" y="${y + 37}" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">${test}</text>`

const interferenceSvg = `${SVG_OPEN} viewBox="0 0 1000 400">
<defs>${ARROW('arr-lm-interf')}</defs>
<text x="30" y="40" font-size="24" font-weight="700" fill="currentColor">Proactive interference</text>
${interferenceRow(105, 'Test B')}
<text x="30" y="222" font-size="24" font-weight="700" fill="currentColor">Retroactive interference</text>
${interferenceRow(285, 'Test A')}
<g class="fig-accent-2">
<defs>${ARROW('arr-lm-interf-r')}</defs>
<path d="M375 102 C 420 15, 770 15, 815 100" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lm-interf-r)"/>
<text x="595" y="28" font-size="20" text-anchor="middle" fill="currentColor">old A disrupts recall of NEW B</text>
<path d="M595 282 C 560 195, 410 195, 375 280" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lm-interf-r)"/>
<text x="500" y="207" font-size="20" text-anchor="middle" fill="currentColor">new B disrupts recall of OLD A</text>
</g>
<g class="fig-muted"><text x="960" y="390" font-size="20" text-anchor="end" fill="currentColor">time →</text></g>
</svg>`

export const mcatLearningMemoryFigures: DeckFigurePlacement[] = [
  {
    at: 'The Core Vocabulary',
    mode: 'lead',
    figure: {
      svg: phasesSvg,
      alt:
        'Classical conditioning in three panels. Before: a bell (neutral) produces no response, while food (the US) produces salivation (the UR). During: bell and food are presented together over repeated pairings and salivation (UR) follows. After: the bell alone, now the CS, produces salivation, now the CR.',
      caption: 'Classical conditioning in three phases: the food→salivation path (red) needs no training; the bell→salivation path (blue) is learned.',
    },
    blocks: ['- The stimulus that works with no training is the **US**; the learned predictor is the **CS**'],
  },
  {
    at: 'Timing & Contingency',
    mode: 'lead',
    figure: {
      svg: timingSvg,
      alt:
        'Four timelines comparing when the CS (blue bar) and US (red bar) occur. Delayed or forward conditioning: the CS starts first and the US begins while the CS is still on — strongest. Trace: the CS ends, there is a gap, then the US — weaker. Simultaneous: both start together — weak. Backward: the US comes before the CS — negligible.',
      caption: 'CS–US timing and the strength of conditioning it produces (illustrative).',
    },
    blocks: ['- The CS must **predict** the US — contingency beats mere contiguity'],
  },
  {
    at: 'The Lifecycle of a CR',
    mode: 'lead',
    figure: {
      svg: lifecycleSvg,
      alt:
        'Line graph of CR strength against trials. Acquisition (CS paired with US): the curve rises and levels off. Extinction (CS alone): the curve decays toward zero. Rest: a gap with no trials. Spontaneous recovery (CS alone again): the curve reappears at a partial height, then decays again.',
      caption: 'The lifecycle of a conditioned response (illustrative curve).',
    },
    blocks: ['- Extinction is new learning, not erasure — spontaneous recovery proves the association survived'],
  },
  {
    at: 'Biological Boundaries',
    mode: 'lead',
    figure: {
      svg: preparednessSvg,
      alt:
        'A two-by-two preparedness grid. Rows: rat (eats by taste) and quail (eats by sight). Columns: taste paired with illness, and colour or light paired with illness. The rat learns taste→illness easily (a check mark: one trial, hours of delay) but not colour→illness (a cross). The quail shows the opposite pattern: colour→illness learned (check), taste→illness not learned (cross).',
      caption: 'Preparedness: each species learns the cue its biology makes it ready to connect with illness.',
    },
    blocks: ['- Species learn most easily the associations their biology prepares them for (Garcia effect)'],
  },
  {
    at: 'The Consequence 2×2',
    mode: 'replace-table',
    figure: {
      svg: consequenceSvg,
      alt:
        'The operant two-by-two. Columns: a stimulus is added (positive) or removed (negative). Rows: the behavior goes up (reinforcement) or down (punishment). Positive reinforcement: a treat for sitting. Negative reinforcement: aspirin removes a headache. Positive punishment: extra chores. Negative punishment: phone taken away.',
    },
    blocks: [
      '- "Positive / negative" = **add / remove**, never good / bad',
      '- Reinforcement / punishment = the behavior **actually** goes up / down',
      '- Escape and avoidance are both negative reinforcement',
    ],
  },
  {
    at: 'Schedules of Reinforcement',
    mode: 'replace-table',
    figure: {
      svg: schedulesSvg,
      alt:
        'Cumulative-response record for four schedules, plotting cumulative responses against time. VR is the steepest straight line. FR is steep but steps: a short flat pause follows each reinforcement. FI is scalloped: flat after each reinforcement, then accelerating as the next one nears. VI is a moderate, steady straight line. Small ticks mark reinforcement deliveries on FR.',
      caption: 'Cumulative records of the four schedules (illustrative).',
    },
    blocks: [
      '- **FR**: high rate, pause after each reward (piecework)',
      '- **VR**: highest, steadiest, most extinction-resistant (slot machines)',
      '- **FI**: scallop — responding accelerates as the deadline nears',
      '- **VI**: slow and steady (checking for messages)',
    ],
  },
  {
    at: 'Worked Example — Reading an Operant Passage',
    mode: 'after',
    figure: {
      svg: operantPassageSvg,
      alt:
        'Cumulative responses against time, with a dashed line separating training from extinction (food stops). Group A (continuous reinforcement) rises fastest early in training, then goes flat soon after extinction begins. Group B (VR-10) has the highest sustained slope and keeps rising well into extinction before flattening. Group C (random, noncontingent food) stays nearly flat throughout.',
      caption: 'The cumulative record the passage describes (illustrative): fast acquisition is not persistence.',
    },
    blocks: ["- Fast acquisition ≠ persistence: B's variable schedule is what buys resistance to extinction"],
  },
  {
    at: 'The Multi-Store Architecture',
    mode: 'lead',
    figure: {
      svg: multiStoreSvg,
      alt:
        'Memory flow from left to right. Sensory memory (iconic under 1 second, echoic about 3 to 4 seconds) passes information by attention to working or short-term memory (7 plus or minus 2 items, about 30 seconds, kept alive by a rehearsal loop), which passes it by encoding to long-term memory (unlimited and durable). A return arrow labelled retrieval runs from long-term back to working memory. Information not attended to or encoded decays from the first two stores. Long-term memory splits into explicit (declarative: episodic and semantic) and implicit (procedural, priming, conditioning).',
      caption: 'The multi-store model: forward by attention and encoding, back by retrieval.',
    },
    blocks: ['- Information moves forward by attention and encoding, and comes back by retrieval'],
  },
  {
    at: 'Interference',
    mode: 'lead',
    figure: {
      svg: interferenceSvg,
      alt:
        'Two timelines, each Learn A, then Learn B, then a test. Proactive interference: the test is of B, and an arrow from the older A forward onto the test shows old A disrupting recall of new B. Retroactive interference: the test is of A, and an arrow from the newer B back onto A shows new B disrupting recall of old A.',
      caption: 'Interference is named by the direction of the damage: proactive = old hurts new, retroactive = new hurts old.',
    },
    blocks: ['- Name the direction by which memory is hurt: **pro**active = old hurts new, **retro**active = new hurts old'],
  },
]
