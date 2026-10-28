import type { DeckFigurePlacement } from './index'

/**
 * Biological Basis of Behavior (MCAT P/S) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a schematic neuron, a
 * membrane-potential trace, boxes-and-arrows cascades, a tree …) — no
 * textbook or prep-company figure was copied. Curves that are not data say
 * "illustrative" in the caption. Anatomy is schematic only (simple shapes).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-bb-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

/* 1 — Schematic neuron and the direction of signal flow (lead, 1000×460) */
const neuronSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bb-neuron')}</defs>
<g class="fig-muted">
<rect x="360" y="226" width="90" height="28" rx="12" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<rect x="470" y="226" width="90" height="28" rx="12" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<rect x="580" y="226" width="90" height="28" rx="12" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<rect x="690" y="226" width="90" height="28" rx="12" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>
<line x1="460" y1="258" x2="460" y2="284" stroke="currentColor" stroke-width="2"/>
<line x1="570" y1="196" x2="570" y2="222" stroke="currentColor" stroke-width="2"/>
<line x1="330" y1="262" x2="330" y2="308" stroke="currentColor" stroke-width="2"/>
<line x1="230" y1="150" x2="230" y2="180" stroke="currentColor" stroke-width="2"/>
<line x1="880" y1="160" x2="880" y2="184" stroke="currentColor" stroke-width="2"/>
</g>
<path d="M182 214 L112 152 M112 152 L72 122 M112 152 L82 172 M180 250 L102 260 M102 260 L52 240 M102 260 L62 300 M186 275 L122 332 M122 332 L82 352 M122 332 L132 382" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
<circle cx="230" cy="240" r="56" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<circle cx="230" cy="240" r="16" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<path d="M283 222 L342 232 L342 248 L283 258 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
<line x1="342" y1="240" x2="822" y2="240" stroke="currentColor" stroke-width="4"/>
<path d="M822 240 L878 192 M822 240 L896 240 M822 240 L878 288" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
<circle cx="884" cy="188" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="3"/>
<circle cx="904" cy="240" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="3"/>
<circle cx="884" cy="292" r="10" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="3"/>
<text x="110" y="90" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Dendrites</text>
<text x="110" y="114" font-size="19" text-anchor="middle" fill="currentColor">receive input</text>
<text x="230" y="140" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Cell body (soma)</text>
<text x="330" y="332" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Axon hillock</text>
<g class="fig-accent-2"><text x="330" y="358" font-size="19" text-anchor="middle" fill="currentColor">sums input; fires at ≈ −55 mV</text></g>
<text x="570" y="188" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Myelin sheath</text>
<text x="460" y="306" font-size="20" text-anchor="middle" fill="currentColor">Node of Ranvier</text>
<g class="fig-muted"><text x="640" y="382" font-size="19" text-anchor="middle" fill="currentColor">saltatory conduction: the AP jumps node to node</text></g>
<text x="880" y="150" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Axon terminals</text>
<g class="fig-muted"><text x="884" y="330" font-size="19" text-anchor="middle" fill="currentColor">release NT</text></g>
<g class="fig-accent">
<defs>${ARROW('arr-bb-neuron-b')}</defs>
<line x1="60" y1="424" x2="940" y2="424" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bb-neuron-b)"/>
<text x="500" y="452" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">signal flow: dendrites → soma → hillock → axon → terminals</text>
</g>
</svg>`

/* 2 — The action potential: membrane potential against time (replace-table, 560×440) */
const apSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-bb-ap')}</defs>
<line x1="70" y1="395" x2="548" y2="395" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-ap)"/>
<line x1="70" y1="395" x2="70" y2="28" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-ap)"/>
<text x="26" y="40" font-size="17" fill="currentColor">mV</text>
<text x="548" y="424" font-size="17" text-anchor="end" fill="currentColor">time (ms)</text>
<g class="fig-muted">
<line x1="70" y1="304" x2="540" y2="304" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="70" y1="343" x2="540" y2="343" stroke="currentColor" stroke-width="2" stroke-dasharray="3 6"/>
<line x1="70" y1="161" x2="540" y2="161" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 6"/>
<text x="536" y="298" font-size="16" text-anchor="end" fill="currentColor">threshold</text>
</g>
<text x="62" y="89" font-size="16" text-anchor="end" fill="currentColor">+30</text>
<text x="62" y="167" font-size="16" text-anchor="end" fill="currentColor">0</text>
<text x="62" y="310" font-size="16" text-anchor="end" fill="currentColor">−55</text>
<text x="62" y="349" font-size="16" text-anchor="end" fill="currentColor">−70</text>
<path d="M70 343 L170 343 C 186 343, 196 318, 203 304" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">
<path d="M203 304 C 212 262, 224 96, 242 83" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="196" y="126" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">depolarization</text>
<text x="196" y="148" font-size="16" text-anchor="end" fill="currentColor">Na⁺ rushes IN</text>
</g>
<g class="fig-accent-2">
<path d="M242 83 C 258 92, 278 250, 292 338" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="300" y="126" font-size="17" font-weight="700" fill="currentColor">repolarization</text>
<text x="300" y="148" font-size="16" fill="currentColor">Na⁺ inactivate, K⁺ OUT</text>
</g>
<path d="M292 338 C 298 356, 306 370, 318 369 C 348 367, 390 350, 430 343 L 540 343" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="118" y="334" font-size="15" text-anchor="middle" fill="currentColor">rest (leak channels)</text>
<text x="292" y="389" font-size="15" fill="currentColor">hyperpolarization: K⁺ slow to close</text>
<text x="242" y="66" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">peak</text>
</svg>`

/* 3 — Synaptic transmission, numbered across the synapse (lead, 1000×460) */
const synapseSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bb-syn')}</defs>
<g class="fig-muted">
<rect x="40" y="40" width="440" height="330" rx="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<rect x="560" y="40" width="400" height="330" rx="40" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="70" y="78" font-size="20" fill="currentColor">presynaptic terminal</text>
<text x="590" y="78" font-size="20" fill="currentColor">postsynaptic cell</text>
<text x="520" y="398" font-size="19" text-anchor="middle" fill="currentColor">synaptic cleft</text>
<text x="500" y="446" font-size="19" text-anchor="middle" fill="currentColor">the signal ends when NT is taken back up, degraded by an enzyme, or diffuses away</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-bb-syn-b')}</defs>
${NUM(80, 130, '1')}
<text x="102" y="137" font-size="20" font-weight="700" fill="currentColor">action potential arrives</text>
<path d="M70 215 L104 215 L120 165 L136 215 L182 215" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-bb-syn-b)"/>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-bb-syn-r')}</defs>
${NUM(372, 102, '2')}
<text x="394" y="109" font-size="20" font-weight="700" fill="currentColor">Ca²⁺ in</text>
<line x1="536" y1="136" x2="498" y2="136" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-bb-syn-r)"/>
</g>
<rect x="471" y="112" width="18" height="16" rx="3" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<rect x="471" y="144" width="18" height="16" rx="3" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<circle cx="290" cy="160" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="350" cy="215" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="290" cy="268" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="450" cy="212" r="22" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<circle cx="283" cy="154" r="4" fill="currentColor"/><circle cx="297" cy="160" r="4" fill="currentColor"/><circle cx="288" cy="168" r="4" fill="currentColor"/>
<circle cx="343" cy="209" r="4" fill="currentColor"/><circle cx="357" cy="215" r="4" fill="currentColor"/><circle cx="348" cy="223" r="4" fill="currentColor"/>
<circle cx="283" cy="262" r="4" fill="currentColor"/><circle cx="297" cy="268" r="4" fill="currentColor"/><circle cx="288" cy="276" r="4" fill="currentColor"/>
<circle cx="443" cy="206" r="4" fill="currentColor"/><circle cx="457" cy="212" r="4" fill="currentColor"/><circle cx="448" cy="220" r="4" fill="currentColor"/>
<circle cx="500" cy="196" r="5" fill="currentColor"/><circle cx="520" cy="182" r="5" fill="currentColor"/><circle cx="538" cy="200" r="5" fill="currentColor"/>
<circle cx="508" cy="222" r="5" fill="currentColor"/><circle cx="530" cy="236" r="5" fill="currentColor"/><circle cx="546" cy="262" r="5" fill="currentColor"/>
<circle cx="568" cy="208" r="5" fill="currentColor"/>
<line x1="472" y1="212" x2="492" y2="212" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bb-syn-b)"/>
</g>
${NUM(190, 330, '3')}
<text x="212" y="337" font-size="20" font-weight="700" fill="currentColor">vesicles fuse, NT exits</text>
${NUM(500, 28, '4', 12)}
<text x="520" y="35" font-size="20" font-weight="700" fill="currentColor">NT release</text>
<path d="M560 186 L592 186 Q602 208 592 230 L560 230" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
${NUM(640, 196, '5')}
<text x="662" y="203" font-size="20" font-weight="700" fill="currentColor">receptor binding</text>
<text x="662" y="233" font-size="20" fill="currentColor">→ postsynaptic potential</text>
<g class="fig-muted"><text x="662" y="261" font-size="18" fill="currentColor">EPSP or IPSP</text></g>
<rect x="471" y="286" width="18" height="34" rx="4" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<line x1="540" y1="303" x2="462" y2="303" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bb-syn)"/>
${NUM(330, 303, '6')}
<text x="352" y="310" font-size="20" font-weight="700" fill="currentColor">reuptake</text>
</svg>`

/* 4 — EPSPs, IPSPs and summation on one trace (replace-table, 560×440) */
const pspSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-bb-psp')}</defs>
<line x1="50" y1="410" x2="50" y2="22" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-psp)"/>
<g class="fig-muted">
<line x1="50" y1="200" x2="540" y2="200" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="50" y1="300" x2="540" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 6"/>
<text x="540" y="432" font-size="16" text-anchor="end" fill="currentColor">time →</text>
<text x="540" y="194" font-size="15" text-anchor="end" fill="currentColor">threshold</text>
</g>
<text x="44" y="206" font-size="16" text-anchor="end" fill="currentColor">−55</text>
<text x="44" y="306" font-size="16" text-anchor="end" fill="currentColor">−70</text>
<text x="40" y="40" font-size="16" text-anchor="end" fill="currentColor">mV</text>
<path d="M50 300 L80 300" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">
<path d="M80 300 C 95 300, 100 268, 112 268 C 128 268, 150 300, 170 300" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="115" y="236" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">EPSP</text>
<text x="115" y="256" font-size="14" text-anchor="middle" fill="currentColor">Na⁺ in · toward threshold</text>
</g>
<path d="M170 300 L190 300" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<path d="M190 300 C 205 300, 210 340, 224 340 C 240 340, 258 300, 276 300" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="226" y="372" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">IPSP</text>
<text x="226" y="392" font-size="14" text-anchor="middle" fill="currentColor">Cl⁻ in / K⁺ out · away</text>
</g>
<path d="M276 300 L296 300" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">
<path d="M296 300 C 306 300, 310 268, 318 266 C 324 266, 326 240, 334 232 C 340 226, 340 206, 346 200 C 352 150, 356 70, 364 70 C 372 70, 378 250, 386 330 C 392 356, 400 340, 420 318 C 436 306, 452 300, 470 300 L 540 300" fill="none" stroke="currentColor" stroke-width="3"/>
<text x="392" y="118" font-size="17" font-weight="700" fill="currentColor">summation</text>
<text x="392" y="140" font-size="14" fill="currentColor">EPSPs stack up</text>
<text x="392" y="160" font-size="14" fill="currentColor">→ threshold → AP</text>
</g>
</svg>`

/* 5 — Cortical lobes on a schematic lateral view (replace-table, 560×440) */
const lobesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<rect x="352" y="300" width="40" height="96" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
<ellipse cx="445" cy="345" rx="58" ry="27" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
<text x="445" y="350" font-size="14" text-anchor="middle" fill="currentColor">cerebellum</text>
<text x="70" y="424" font-size="14" fill="currentColor">anterior (front)</text>
<text x="520" y="424" font-size="14" text-anchor="end" fill="currentColor">posterior (back)</text>
<text x="290" y="46" font-size="14" text-anchor="middle" fill="currentColor">central sulcus</text>
</g>
<path d="M70 240 C 60 150, 150 60, 290 60 C 400 60, 500 110, 510 200 C 515 260, 470 300, 430 310 C 400 318, 380 310, 360 320 C 330 345, 230 350, 160 320 C 110 300, 80 280, 70 240 Z" class="fig-bg" stroke="currentColor" stroke-width="3"/>
<path d="M285 62 C 290 120, 300 170, 305 215" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M95 262 C 180 236, 280 226, 390 245" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M445 92 C 420 160, 410 220, 400 246" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<text x="178" y="122" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">FRONTAL</text>
<text x="178" y="146" font-size="14" text-anchor="middle" fill="currentColor">executive, planning</text>
<text x="178" y="166" font-size="14" text-anchor="middle" fill="currentColor">motor cortex</text>
<text x="178" y="186" font-size="14" text-anchor="middle" fill="currentColor">Broca's: speech production</text>
</g>
<text x="365" y="122" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">PARIETAL</text>
<text x="365" y="146" font-size="14" text-anchor="middle" fill="currentColor">somatosensory</text>
<text x="365" y="166" font-size="14" text-anchor="middle" fill="currentColor">spatial</text>
<text x="462" y="206" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">OCCIPITAL</text>
<text x="462" y="228" font-size="14" text-anchor="middle" fill="currentColor">vision (V1)</text>
<g class="fig-accent-2">
<text x="250" y="284" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">TEMPORAL</text>
<text x="250" y="306" font-size="14" text-anchor="middle" fill="currentColor">hearing, memory</text>
<text x="250" y="326" font-size="14" text-anchor="middle" fill="currentColor">Wernicke's: comprehension</text>
</g>
</svg>`

/* 6 — HPA (slow, hormonal) beside SAM (fast, neural) (lead, 1000×460) */
const stressAxesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bb-stress')}</defs>
<rect x="430" y="14" width="140" height="40" rx="20" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="41" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Stressor</text>
<line x1="500" y1="54" x2="500" y2="78" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bb-stress)"/>
<rect x="400" y="80" width="200" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="110" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Hypothalamus</text>
<g class="fig-accent">
<defs>${ARROW('arr-bb-stress-b')}</defs>
<text x="20" y="42" font-size="22" font-weight="700" fill="currentColor">HPA axis — slow, hormonal</text>
<line x1="440" y1="126" x2="282" y2="176" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bb-stress-b)"/>
<text x="350" y="140" font-size="19" text-anchor="end" fill="currentColor">CRH</text>
<rect x="100" y="180" width="260" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="230" y="210" font-size="21" text-anchor="middle" fill="currentColor">Anterior pituitary</text>
<line x1="230" y1="226" x2="230" y2="266" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bb-stress-b)"/>
<text x="244" y="252" font-size="19" fill="currentColor">ACTH</text>
<rect x="100" y="268" width="260" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="230" y="298" font-size="21" text-anchor="middle" fill="currentColor">Adrenal cortex</text>
<line x1="230" y1="314" x2="230" y2="354" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bb-stress-b)"/>
<rect x="100" y="356" width="260" height="46" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="230" y="386" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Cortisol</text>
<path d="M100 379 L60 379 L60 103 L396 103" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6" marker-end="url(#arr-bb-stress-b)"/>
<path d="M60 203 L96 203" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6" marker-end="url(#arr-bb-stress-b)"/>
<text x="44" y="300" font-size="18" text-anchor="middle" fill="currentColor" transform="rotate(-90 44 300)">negative feedback</text>
<text x="230" y="440" font-size="19" text-anchor="middle" fill="currentColor">minutes to hours · glucose ↑, immunity ↓</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-bb-stress-r')}</defs>
<text x="980" y="42" font-size="22" font-weight="700" text-anchor="end" fill="currentColor">SAM axis — fast, neural</text>
<line x1="560" y1="126" x2="718" y2="176" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bb-stress-r)"/>
<text x="650" y="140" font-size="19" fill="currentColor">nerve impulses</text>
<rect x="620" y="180" width="300" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="770" y="210" font-size="21" text-anchor="middle" fill="currentColor">Sympathetic nervous system</text>
<line x1="770" y1="226" x2="770" y2="266" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bb-stress-r)"/>
<rect x="620" y="268" width="300" height="46" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="770" y="298" font-size="21" text-anchor="middle" fill="currentColor">Adrenal medulla</text>
<line x1="770" y1="314" x2="770" y2="354" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bb-stress-r)"/>
<rect x="620" y="356" width="300" height="46" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="770" y="386" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Epinephrine / norepinephrine</text>
<text x="770" y="440" font-size="19" text-anchor="middle" fill="currentColor">seconds · HR ↑, BP ↑, glucose ↑, pupils dilate</text>
</g>
</svg>`

/* 7 — General Adaptation Syndrome: resistance against time (lead, 1000×460) */
const gasSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bb-gas')}</defs>
<line x1="80" y1="380" x2="965" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-gas)"/>
<line x1="80" y1="380" x2="80" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-gas)"/>
<text x="34" y="210" font-size="22" text-anchor="middle" fill="currentColor" transform="rotate(-90 34 210)">resistance to stress</text>
<text x="960" y="412" font-size="20" text-anchor="end" fill="currentColor">time under stress →</text>
<g class="fig-muted">
<line x1="330" y1="70" x2="330" y2="378" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<line x1="650" y1="70" x2="650" y2="378" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7"/>
<line x1="80" y1="250" x2="950" y2="250" stroke="currentColor" stroke-width="2" stroke-dasharray="3 7"/>
<text x="944" y="242" font-size="18" text-anchor="end" fill="currentColor">normal level</text>
<text x="205" y="446" font-size="19" text-anchor="middle" fill="currentColor">shock, then SAM + HPA mobilize</text>
<text x="490" y="446" font-size="19" text-anchor="middle" fill="currentColor">coping holds above normal</text>
<text x="805" y="446" font-size="19" text-anchor="middle" fill="currentColor">resources depleted → illness</text>
</g>
<text x="205" y="60" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">Alarm</text>
<text x="490" y="60" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">Resistance</text>
<text x="805" y="60" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">Exhaustion</text>
<g class="fig-accent">
<path d="M80 250 C 110 250, 130 312, 165 312 C 212 312, 270 190, 330 180 C 430 172, 560 176, 650 182 C 720 186, 800 300, 940 356" fill="none" stroke="currentColor" stroke-width="4"/>
</g>
<g class="fig-accent-2">
<text x="860" y="330" font-size="18" text-anchor="end" fill="currentColor">below normal</text>
</g>
<text x="165" y="340" font-size="18" text-anchor="middle" fill="currentColor">dips first</text>
</svg>`

/* 8 — Divisions of the nervous system as a tree (replace-table, 560×440) */
const divisionsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-bb-div')}</defs>
<rect x="190" y="14" width="180" height="40" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="280" y="40" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Nervous system</text>
<line x1="250" y1="54" x2="104" y2="96" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-div)"/>
<line x1="310" y1="54" x2="396" y2="96" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-div)"/>
<rect x="40" y="100" width="120" height="40" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="100" y="126" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">CNS</text>
<rect x="340" y="100" width="120" height="40" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="400" y="126" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">PNS</text>
<line x1="100" y1="140" x2="100" y2="182" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-div)"/>
<line x1="380" y1="140" x2="256" y2="182" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-div)"/>
<line x1="420" y1="140" x2="430" y2="182" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-div)"/>
<rect x="25" y="185" width="150" height="40" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="100" y="211" font-size="15" text-anchor="middle" fill="currentColor">brain + spinal cord</text>
<rect x="190" y="185" width="110" height="40" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="245" y="211" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Somatic</text>
<text x="245" y="252" font-size="14" text-anchor="middle" fill="currentColor">voluntary skeletal muscle</text>
<text x="245" y="271" font-size="14" text-anchor="middle" fill="currentColor">+ sensory input</text>
<rect x="360" y="185" width="140" height="40" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="430" y="211" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Autonomic</text>
<text x="430" y="248" font-size="14" text-anchor="middle" fill="currentColor">involuntary: organs, glands</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-bb-div-r')}</defs>
<line x1="412" y1="258" x2="346" y2="296" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-div-r)"/>
<rect x="260" y="300" width="140" height="40" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="330" y="326" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Sympathetic</text>
<text x="330" y="366" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">fight-or-flight</text>
<text x="330" y="386" font-size="14" text-anchor="middle" fill="currentColor">↑ HR, ↓ digestion</text>
<text x="330" y="406" font-size="14" text-anchor="middle" fill="currentColor">pupils dilate</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-bb-div-b')}</defs>
<line x1="448" y1="258" x2="470" y2="296" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bb-div-b)"/>
<rect x="410" y="300" width="140" height="40" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="480" y="326" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Parasympathetic</text>
<text x="480" y="366" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">rest-and-digest</text>
<text x="480" y="386" font-size="14" text-anchor="middle" fill="currentColor">↓ HR, ↑ digestion</text>
<text x="480" y="406" font-size="14" text-anchor="middle" fill="currentColor">pupils constrict</text>
</g>
<g class="fig-muted"><text x="405" y="432" font-size="14" text-anchor="middle" fill="currentColor">largely antagonistic → homeostasis</text></g>
</svg>`

/* 9 — The reflex arc through the spinal cord (lead, 1000×460) */
const reflexSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bb-reflex')}</defs>
<g class="fig-muted">
<defs>${ARROW('arr-bb-reflex-m')}</defs>
<ellipse cx="680" cy="232" rx="170" ry="122" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<rect x="620" y="156" width="120" height="152" rx="32" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
<text x="680" y="380" font-size="19" text-anchor="middle" fill="currentColor">spinal cord</text>
<line x1="680" y1="108" x2="680" y2="64" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" marker-end="url(#arr-bb-reflex-m)"/>
<text x="790" y="92" font-size="18" fill="currentColor">pain is felt afterwards</text>
<text x="140" y="80" font-size="19" text-anchor="middle" fill="currentColor">stimulus: hot stove</text>
<text x="140" y="392" font-size="19" text-anchor="middle" fill="currentColor">response: hand pulls away</text>
</g>
<rect x="590" y="14" width="180" height="44" rx="22" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="680" y="43" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Brain</text>
<rect x="40" y="100" width="200" height="56" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="140" y="135" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Receptor (skin)</text>
<rect x="40" y="300" width="200" height="56" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="140" y="335" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Effector (muscle)</text>
${NUM(22, 128, '1')}
${NUM(22, 328, '5')}
<g class="fig-accent">
<defs>${ARROW('arr-bb-reflex-b')}</defs>
<path d="M240 128 L540 128 L636 190" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-bb-reflex-b)"/>
${NUM(262, 104, '2')}
<text x="282" y="111" font-size="21" font-weight="700" fill="currentColor">sensory (afferent) neuron</text>
</g>
${NUM(596, 234, '3')}
<circle cx="650" cy="198" r="7" fill="currentColor"/>
<line x1="650" y1="205" x2="650" y2="262" stroke="currentColor" stroke-width="3" marker-end="url(#arr-bb-reflex)"/>
<text x="668" y="238" font-size="19" fill="currentColor">interneuron</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-bb-reflex-r')}</defs>
<circle cx="650" cy="274" r="7" fill="currentColor"/>
<path d="M643 278 L540 328 L244 328" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-bb-reflex-r)"/>
${NUM(262, 356, '4')}
<text x="282" y="363" font-size="21" font-weight="700" fill="currentColor">motor (efferent) neuron</text>
</g>
</svg>`

export const mcatBiologicalBasisFigures: DeckFigurePlacement[] = [
  {
    at: 'Neuron Structure & Signal Flow',
    mode: 'lead',
    figure: {
      svg: neuronSvg,
      alt:
        'Schematic neuron drawn left to right: branching dendrites (receive input) join the round cell body, which narrows into the axon hillock (sums input; fires at about −55 mV). A long axon follows, wrapped in four myelin segments with bare nodes of Ranvier between them (saltatory conduction: the action potential jumps node to node), and ends in three axon terminals that release neurotransmitter. A blue arrow underneath shows signal flow: dendrites → soma → hillock → axon → terminals.',
      caption: 'A schematic neuron: input at the dendrites, the go/no-go decision at the axon hillock, output down the myelinated axon to the terminals.',
    },
    blocks: [
      '- Input arrives at the dendrites; the **axon hillock** sums it and fires an AP if threshold (≈ −55 mV) is reached',
      '- Myelin (oligodendrocytes in CNS, Schwann cells in PNS) → fast **saltatory conduction**',
    ],
  },
  {
    at: 'The Action Potential — Phases',
    mode: 'replace-table',
    figure: {
      svg: apSvg,
      alt:
        'Membrane potential (mV) against time. The trace rests at −70 mV, rises slowly to the dashed threshold at −55 mV, then shoots up (blue, depolarization: Na⁺ rushes in) to a peak near +30 mV, falls steeply (red, repolarization: Na⁺ channels inactivate, K⁺ flows out), undershoots below −70 mV (hyperpolarization: K⁺ channels are slow to close) and settles back to rest.',
      caption: 'The action potential: a sodium upstroke, a potassium downstroke, and an undershoot before the membrane returns to rest (illustrative trace).',
    },
    blocks: [
      '- **Resting** ≈ −70 mV (leak channels); **threshold** ≈ −55 mV',
      '- **Depolarization:** voltage-gated $Na^{+}$ open, $Na^{+}$ IN → rises toward +30 mV',
      '- **Repolarization:** $Na^{+}$ channels inactivate, $K^{+}$ OUT → falls',
      '- **Hyperpolarization:** $K^{+}$ channels slow to close → undershoots below −70 mV',
    ],
  },
  {
    at: 'Synaptic Transmission Steps',
    mode: 'lead',
    figure: {
      svg: synapseSvg,
      alt:
        'A presynaptic terminal on the left, a synaptic cleft, and a postsynaptic cell on the right, with six numbered steps: 1 an action potential arrives at the terminal; 2 voltage-gated channels let Ca²⁺ in; 3 vesicles full of neurotransmitter fuse with the membrane; 4 neurotransmitter is released into the cleft; 5 it binds a receptor on the postsynaptic cell, producing a postsynaptic potential (EPSP or IPSP); 6 a transporter takes the transmitter back up. A footnote adds that the signal also ends by enzymatic degradation or diffusion.',
      caption: 'Synaptic transmission in six steps: calcium entry is the trigger for release; reuptake, enzymes or diffusion end the signal.',
    },
    blocks: [
      '- Electrical along the axon, chemical across the cleft, electrical again on the other side',
      '- $Ca^{2+}$ influx is the trigger for exocytosis; **reuptake**, **enzymatic degradation** or **diffusion** end the signal',
    ],
  },
  {
    at: 'EPSPs vs. IPSPs',
    mode: 'replace-table',
    figure: {
      svg: pspSvg,
      alt:
        'A membrane-potential trace resting at −70 mV with a dashed threshold line at −55 mV. First a small blue bump (an EPSP: Na⁺ in, toward threshold) that falls short; then a red dip below rest (an IPSP: Cl⁻ in or K⁺ out, away from threshold); then several blue EPSPs arriving in quick succession stack on each other until the trace crosses threshold and fires an action potential (summation).',
      caption: 'One EPSP is not enough: EPSPs summed in time or space must carry the axon hillock to threshold (illustrative trace).',
    },
    blocks: [
      '- **EPSP:** $Na^{+}$ in → depolarizes, toward threshold',
      '- **IPSP:** $Cl^{-}$ in / $K^{+}$ out → hyperpolarizes, away from threshold',
      '- **Temporal** summation: rapid succession from one input',
      '- **Spatial** summation: many inputs at once — the axon hillock adds them all',
    ],
  },
  {
    at: 'Cortical Lobes',
    mode: 'replace-table',
    figure: {
      svg: lobesSvg,
      alt:
        'A schematic side view of the left cerebral hemisphere, front to the left, divided into four lobes by the central sulcus, the lateral fissure and a parieto-occipital line. Frontal (front): executive function, planning, motor cortex, Broca’s area for speech production. Parietal (top back): somatosensory cortex, spatial processing. Occipital (back): vision, V1. Temporal (bottom side): hearing, memory, Wernicke’s area for comprehension. The cerebellum sits below the occipital lobe.',
      caption: 'The four lobes: motor cortex sits just in front of the central sulcus, somatosensory cortex just behind it.',
    },
    blocks: [
      "- **Frontal:** executive function, planning, motor cortex, **Broca's** (speech production), personality",
      '- **Parietal:** somatosensory cortex, spatial processing',
      "- **Temporal:** hearing, **Wernicke's** (comprehension), memory (hippocampus nearby)",
      '- **Occipital:** vision (V1)',
    ],
  },
  {
    at: 'The HPA Axis (Slow Stress Response)',
    mode: 'lead',
    figure: {
      svg: stressAxesSvg,
      alt:
        'Two cascades from one stressor acting on the hypothalamus. Left, in blue, the HPA axis: hypothalamus releases CRH → anterior pituitary releases ACTH → adrenal cortex releases cortisol; dashed arrows run from cortisol back to the hypothalamus and pituitary, labelled negative feedback; it works over minutes to hours, raising glucose and lowering immunity. Right, in red, the SAM axis: hypothalamus → sympathetic nervous system by nerve impulses → adrenal medulla → epinephrine and norepinephrine; it works in seconds, raising heart rate, blood pressure and glucose and dilating the pupils.',
      caption: 'Two stress responses from one trigger: the hormonal HPA axis is slow and self-limiting (negative feedback); the neural SAM axis is fast.',
    },
    blocks: [
      '- Same trigger, two speeds: **SAM** fires in seconds through nerves; **HPA** takes minutes–hours through hormones',
      '- Cortisol feeds back on the hypothalamus and pituitary to shut the axis off',
    ],
  },
  {
    at: 'General Adaptation Syndrome (Selye)',
    mode: 'lead',
    figure: {
      svg: gasSvg,
      alt:
        'Resistance to stress against time under stress, in three stages. Alarm: resistance first dips below the normal level (shock), then climbs as the SAM and HPA axes mobilize. Resistance: it holds on a plateau above normal while the body copes. Exhaustion: it falls steadily below normal as resources are depleted and illness becomes likely.',
      caption: 'Selye’s General Adaptation Syndrome: alarm, resistance, exhaustion (illustrative curve).',
    },
    blocks: [
      '- Resistance climbs above normal while the body copes, then collapses when resources run out — disease vulnerability rises in exhaustion',
    ],
  },
  {
    at: 'Divisions of the Nervous System',
    mode: 'replace-table',
    figure: {
      svg: divisionsSvg,
      alt:
        'A tree. Nervous system splits into CNS (brain + spinal cord) and PNS. PNS splits into Somatic (voluntary skeletal muscle plus sensory input) and Autonomic (involuntary: organs, glands). Autonomic splits into Sympathetic, in red (fight-or-flight: heart rate up, digestion down, pupils dilate), and Parasympathetic, in blue (rest-and-digest: heart rate down, digestion up, pupils constrict); the two are largely antagonistic and maintain homeostasis.',
      caption: 'The nervous system as a tree: the sympathetic and parasympathetic branches push the same organs in opposite directions.',
    },
    blocks: [
      '- **CNS** = brain + spinal cord; **PNS** = somatic + autonomic',
      '- **Somatic:** voluntary skeletal muscle, sensory input',
      '- **Sympathetic:** fight-or-flight (↑ HR, ↓ digestion, dilate pupils)',
      '- **Parasympathetic:** rest-and-digest (↓ HR, ↑ digestion, constrict pupils) — largely antagonistic',
    ],
  },
  {
    at: 'Reflex Arc',
    mode: 'lead',
    figure: {
      svg: reflexSvg,
      alt:
        'A loop through a schematic spinal-cord cross-section. 1 A receptor in the skin (stimulus: hot stove) sends 2 a blue sensory (afferent) neuron into the cord, where 3 a short interneuron relays to 4 a red motor (efferent) neuron that runs back out to 5 the effector muscle (response: the hand pulls away). A dashed arrow from the cord up to a Brain box notes that pain is felt afterwards — the loop closes without it.',
      caption: 'The reflex arc: receptor → afferent neuron → spinal cord (± interneuron) → efferent neuron → effector, with no detour through the brain.',
    },
    blocks: [
      '- The loop closes in the spinal cord, so the hand moves before the brain registers pain',
      '- A **monosynaptic** reflex (knee-jerk) skips the interneuron: sensory neuron synapses directly on the motor neuron',
    ],
  },
]
