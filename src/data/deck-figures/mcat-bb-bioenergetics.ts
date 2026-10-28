import type { DeckFigurePlacement } from './index'

/**
 * Bioenergetics & ETC (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a transfer ladder,
 * free-energy level steps, a kinase/phosphatase switch, the cycle as a ring of
 * labelled boxes, the chain as boxes on a membrane strip, an oxygen-electrode
 * trace) — no textbook or prep-company figure was copied. Molecules are
 * labelled boxes, never structural formulas. Curves that are not data say
 * "illustrative" in the caption; the only numbers drawn are the ones the
 * lesson states (ΔG°′ values, ATP yields, H⁺ per complex).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-be-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

/** A red "blocked here" cross, centred on (x, y). Use inside a fig-accent-2 group. */
const CROSS = (x: number, y: number, s = 7) =>
  `<line x1="${x - s}" y1="${y - s}" x2="${x + s}" y2="${y + s}" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="${x + s}" y1="${y - s}" x2="${x - s}" y2="${y + s}" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>`

/** A labelled rounded box, text centred. */
const BOX = (x: number, y: number, w: number, h: number, label: string, size = 18, weight = 700, opacity = 0.08) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${x + w / 2}" y="${y + h / 2 + size * 0.36}" font-size="${size}" font-weight="${weight}" text-anchor="middle" fill="currentColor">${label}</text>`

/* 1 — The phosphoryl-transfer ladder (replace-table, 560×440) */
const ladderSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-be-ladder')}</defs>
<line x1="48" y1="400" x2="48" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#arr-be-ladder)"/>
<text x="22" y="230" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 22 230)">higher transfer potential (ΔG°′ more negative)</text>
<g class="fig-muted"><text x="195" y="36" font-size="15" text-anchor="middle" fill="currentColor">ΔG°′ of phosphoryl transfer, kJ/mol</text></g>
<rect x="80" y="54" width="230" height="32" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="92" y="76" font-size="17" fill="currentColor">PEP</text><text x="300" y="76" font-size="17" text-anchor="end" fill="currentColor">~−62</text>
<rect x="80" y="133" width="230" height="32" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="92" y="155" font-size="17" fill="currentColor">1,3-BPG</text><text x="300" y="155" font-size="17" text-anchor="end" fill="currentColor">~−49</text>
<rect x="80" y="169" width="230" height="32" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="92" y="191" font-size="17" fill="currentColor">creatine phosphate</text><text x="300" y="191" font-size="17" text-anchor="end" fill="currentColor">~−43</text>
<g class="fig-muted"><text x="92" y="222" font-size="14" fill="currentColor">muscle's seconds-long ATP buffer</text></g>
<g class="fig-accent">
<rect x="80" y="244" width="230" height="32" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="3"/>
<text x="92" y="266" font-size="17" font-weight="700" fill="currentColor">ATP → ADP</text><text x="300" y="266" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">~−30.5</text>
</g>
<rect x="80" y="344" width="230" height="32" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="92" y="366" font-size="17" fill="currentColor">glucose-6-P</text><text x="300" y="366" font-size="17" text-anchor="end" fill="currentColor">~−14</text>
<g class="fig-accent">
<defs>${ARROW('arr-be-ladder-b')}</defs>
<path d="M335 95 C 372 120, 372 215, 335 242" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-ladder-b)"/>
<text x="385" y="150" font-size="16" font-weight="700" fill="currentColor">PEP, 1,3-BPG</text>
<text x="385" y="172" font-size="16" fill="currentColor">give P to ADP → ATP</text>
<text x="385" y="194" font-size="16" fill="currentColor">(substrate-level)</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-be-ladder-r')}</defs>
<path d="M335 280 C 372 300, 372 330, 335 352" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-ladder-r)"/>
<text x="385" y="300" font-size="16" font-weight="700" fill="currentColor">ATP gives P to</text>
<text x="385" y="322" font-size="16" fill="currentColor">glucose, fructose-6-P</text>
<text x="385" y="344" font-size="16" fill="currentColor">(hexokinase, PFK-1)</text>
</g>
<g class="fig-muted"><text x="300" y="424" font-size="16" text-anchor="middle" fill="currentColor">a rung can phosphorylate any rung below it, never one above</text></g>
</svg>`

/* 2 — Energy coupling as free-energy steps (lead, 1000×460) */
const couplingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-be-couple')}</defs>
<line x1="40" y1="400" x2="40" y2="100" stroke="currentColor" stroke-width="2" marker-end="url(#arr-be-couple)"/>
<text x="20" y="250" font-size="18" text-anchor="middle" fill="currentColor" transform="rotate(-90 20 250)">free energy G</text>
<text x="210" y="70" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">1 · alone: uphill</text>
<line x1="95" y1="240" x2="195" y2="240" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<text x="145" y="268" font-size="19" text-anchor="middle" fill="currentColor">glutamate + NH₃</text>
<line x1="240" y1="184" x2="330" y2="184" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<text x="285" y="170" font-size="19" text-anchor="middle" fill="currentColor">glutamine</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-be-couple-r')}</defs>
<line x1="200" y1="236" x2="236" y2="190" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-be-couple-r)"/>
<text x="240" y="228" font-size="21" font-weight="700" fill="currentColor">+14</text>
</g>
<text x="500" y="70" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">2 · ATP hydrolysis: downhill</text>
<line x1="375" y1="240" x2="475" y2="240" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<text x="425" y="228" font-size="19" text-anchor="middle" fill="currentColor">ATP + H₂O</text>
<line x1="525" y1="362" x2="625" y2="362" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<text x="575" y="350" font-size="19" text-anchor="middle" fill="currentColor">ADP + Pi</text>
<g class="fig-accent">
<defs>${ARROW('arr-be-couple-b')}</defs>
<line x1="480" y1="246" x2="520" y2="356" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-be-couple-b)"/>
<text x="488" y="310" font-size="21" font-weight="700" text-anchor="end" fill="currentColor">−30.5</text>
</g>
<text x="810" y="70" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">3 · coupled: the two add</text>
<line x1="665" y1="240" x2="735" y2="240" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<text x="700" y="228" font-size="18" text-anchor="middle" fill="currentColor">glutamate + NH₃ + ATP</text>
<line x1="770" y1="262" x2="840" y2="262" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<text x="805" y="250" font-size="17" text-anchor="middle" fill="currentColor">glutamyl-P</text>
<line x1="875" y1="304" x2="945" y2="304" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<text x="960" y="332" font-size="18" text-anchor="end" fill="currentColor">glutamine + ADP + Pi</text>
<g class="fig-muted">
<defs>${ARROW('arr-be-couple-m')}</defs>
<line x1="740" y1="246" x2="764" y2="258" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-couple-m)"/>
<line x1="845" y1="268" x2="869" y2="298" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-couple-m)"/>
<text x="500" y="404" font-size="17" text-anchor="middle" fill="currentColor">the link is a shared phosphorylated intermediate — not "heat from ATP"</text>
</g>
<g class="fig-accent">
<line x1="968" y1="240" x2="968" y2="300" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-be-couple-b)"/>
<text x="958" y="282" font-size="21" font-weight="700" text-anchor="end" fill="currentColor">net −16</text>
</g>
<text x="500" y="438" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">+14 + (−30.5) = −16 kJ/mol  →  spontaneous</text>
</svg>`

/* 3 — The PDH switch: kinase off, phosphatase on (lead, 1000×460) */
const pdhSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-be-pdh')}</defs>
<g class="fig-muted"><text x="500" y="50" font-size="19" text-anchor="middle" fill="currentColor">oxidative decarboxylation, in the mitochondrial matrix</text></g>
${BOX(60, 72, 190, 56, 'pyruvate (3C)', 22)}
<line x1="250" y1="100" x2="398" y2="100" stroke="currentColor" stroke-width="3"/>
<line x1="600" y1="100" x2="744" y2="100" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-pdh)"/>
<g class="fig-accent">${BOX(400, 72, 200, 56, 'PDH complex', 22, 700, 0.14)}</g>
${BOX(750, 72, 200, 56, 'acetyl-CoA (2C)', 22)}
<line x1="460" y1="130" x2="460" y2="156" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-pdh)"/>
<text x="460" y="180" font-size="19" text-anchor="middle" fill="currentColor">NAD⁺ → NADH</text>
<line x1="560" y1="130" x2="560" y2="156" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-pdh)"/>
<text x="572" y="180" font-size="19" text-anchor="middle" fill="currentColor">CO₂</text>
<g class="fig-accent-2"><text x="980" y="160" font-size="18" font-weight="700" text-anchor="end" fill="currentColor">irreversible: no way back to glucose</text></g>
<g class="fig-accent">${BOX(130, 280, 220, 70, 'PDH · active', 24, 700, 0.14)}</g>
<g class="fig-accent-2">
${BOX(650, 280, 220, 70, 'PDH–P · inactive', 24, 700, 0.14)}
<circle cx="862" cy="282" r="14" fill="currentColor"/><text x="862" y="288" font-size="17" font-weight="700" text-anchor="middle" class="fig-bg">P</text>
<defs>${ARROW('arr-be-pdh-r')}</defs>
<path d="M352 292 C 420 232, 580 232, 646 292" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-be-pdh-r)"/>
<text x="500" y="236" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">PDH kinase adds a phosphate → OFF</text>
<text x="500" y="210" font-size="19" text-anchor="middle" fill="currentColor">turned on by NADH, acetyl-CoA, ATP — the products say "enough"</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-be-pdh-b')}</defs>
<path d="M648 338 C 580 398, 420 398, 354 338" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-be-pdh-b)"/>
<text x="500" y="410" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">PDH phosphatase removes it → ON</text>
<text x="500" y="438" font-size="19" text-anchor="middle" fill="currentColor">turned on by Ca²⁺ (contracting muscle) and insulin (adipose)</text>
</g>
</svg>`

/* 4 — One turn of the citric acid cycle as a ring (lead, 1000×460) */
const tcaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-be-tca')}</defs>
<g class="fig-muted"><ellipse cx="460" cy="250" rx="210" ry="135" fill="none" stroke="currentColor" stroke-width="3"/></g>
<path d="M-7,-6 L8,0 L-7,6 z" fill="currentColor" transform="translate(608.5 154.5) rotate(32.7)"/>
<path d="M-7,-6 L8,0 L-7,6 z" fill="currentColor" transform="translate(670 250) rotate(90)"/>
<path d="M-7,-6 L8,0 L-7,6 z" fill="currentColor" transform="translate(608.5 345.5) rotate(147.3)"/>
<path d="M-7,-6 L8,0 L-7,6 z" fill="currentColor" transform="translate(460 385) rotate(180)"/>
<path d="M-7,-6 L8,0 L-7,6 z" fill="currentColor" transform="translate(311.5 345.5) rotate(212.7)"/>
<path d="M-7,-6 L8,0 L-7,6 z" fill="currentColor" transform="translate(250 250) rotate(-90)"/>
<path d="M-7,-6 L8,0 L-7,6 z" fill="currentColor" transform="translate(311.5 154.5) rotate(-32.7)"/>
<text x="460" y="452" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">per turn: 3 NADH · 1 FADH₂ · 1 GTP · 2 CO₂</text>
<g class="fig-muted"><text x="980" y="32" font-size="17" text-anchor="end" fill="currentColor">blue = energy captured · red = regulated step</text></g>
${BOX(385, 28, 150, 34, 'acetyl-CoA (2C)', 18)}
<line x1="460" y1="62" x2="460" y2="110" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-tca)"/>
<g class="fig-accent-2"><text x="475" y="96" font-size="17" font-weight="700" fill="currentColor">citrate synthase — inhibited by NADH, citrate</text></g>
${BOX(315, 108, 130, 34, 'OAA (4C)', 18)}
${BOX(475, 108, 130, 34, 'citrate (6C)', 18)}
${BOX(589, 181, 130, 34, 'isocitrate', 18)}
${BOX(589, 285, 130, 34, 'α-KG (5C)', 18)}
${BOX(475, 358, 130, 34, 'succinyl-CoA', 18)}
${BOX(315, 358, 130, 34, 'succinate', 18)}
${BOX(201, 285, 130, 34, 'fumarate', 18)}
${BOX(201, 181, 130, 34, 'malate', 18)}
<g class="fig-accent-2">
<text x="732" y="236" font-size="16" font-weight="700" fill="currentColor">isocitrate DH (rate-limiting)</text>
<text x="732" y="278" font-size="16" fill="currentColor">ADP speeds, ATP / NADH slow</text>
</g>
<g class="fig-accent"><text x="732" y="257" font-size="19" font-weight="700" fill="currentColor">NADH + CO₂</text></g>
<g class="fig-accent"><text x="620" y="398" font-size="19" font-weight="700" fill="currentColor">NADH + CO₂</text></g>
<g class="fig-accent-2"><text x="620" y="420" font-size="16" fill="currentColor">α-KG DH — PDH's twin, same 5 cofactors</text></g>
<g class="fig-accent"><text x="460" y="418" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">GTP (substrate-level)</text></g>
<g class="fig-accent"><text x="295" y="398" font-size="19" font-weight="700" text-anchor="end" fill="currentColor">FADH₂</text></g>
<g class="fig-muted"><text x="295" y="420" font-size="16" text-anchor="end" fill="currentColor">succinate DH = Complex II</text></g>
<g class="fig-accent"><text x="290" y="160" font-size="19" font-weight="700" text-anchor="end" fill="currentColor">NADH</text></g>
<g class="fig-muted"><text x="290" y="138" font-size="16" text-anchor="end" fill="currentColor">malate DH: ΔG°′ > 0, pulled forward</text></g>
</svg>`

/* 5 — The electron transport chain and chemiosmosis on the inner membrane (lead, 1000×460) */
const etcSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-be-etc')}</defs>
<g class="fig-muted">
<rect x="20" y="190" width="960" height="80" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="30" y="40" font-size="19" fill="currentColor">intermembrane space — high [H⁺]</text>
<text x="30" y="440" font-size="19" fill="currentColor">matrix — low [H⁺], alkaline, negative</text>
<text x="980" y="40" font-size="18" text-anchor="end" fill="currentColor">electrons run toward more positive E°′; O₂ is the most positive</text>
</g>
<rect x="70" y="160" width="100" height="140" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="100" y="250" font-size="28" font-weight="700" text-anchor="middle" fill="currentColor">I</text>
<rect x="200" y="230" width="80" height="70" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="240" y="273" font-size="24" font-weight="700" text-anchor="middle" fill="currentColor">II</text>
<circle cx="330" cy="230" r="22" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="330" y="237" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Q</text>
<rect x="400" y="160" width="100" height="140" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="430" y="250" font-size="28" font-weight="700" text-anchor="middle" fill="currentColor">III</text>
<circle cx="540" cy="190" r="20" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="540" y="195" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">cyt c</text>
<rect x="590" y="160" width="100" height="140" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="620" y="250" font-size="28" font-weight="700" text-anchor="middle" fill="currentColor">IV</text>
<rect x="790" y="190" width="90" height="80" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="898" y="236" font-size="17" fill="currentColor">Fₒ</text>
<circle cx="835" cy="325" r="36" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="835" y="332" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">F₁</text>
<text x="835" y="128" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">ATP synthase</text>
<g class="fig-accent">
<defs>${ARROW('arr-be-etc-b')}</defs>
<line x1="105" y1="330" x2="105" y2="304" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-etc-b)"/>
<text x="105" y="354" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">NADH → NAD⁺</text>
<line x1="250" y1="330" x2="250" y2="304" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-etc-b)"/>
<text x="250" y="354" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">FADH₂</text>
<line x1="170" y1="205" x2="306" y2="226" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-etc-b)"/>
<text x="232" y="196" font-size="16" text-anchor="middle" fill="currentColor">e⁻</text>
<line x1="280" y1="248" x2="308" y2="238" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-etc-b)"/>
<line x1="352" y1="230" x2="398" y2="230" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-etc-b)"/>
<line x1="500" y1="205" x2="520" y2="196" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-etc-b)"/>
<line x1="560" y1="198" x2="588" y2="208" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-etc-b)"/>
<line x1="640" y1="302" x2="640" y2="328" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-etc-b)"/>
<text x="640" y="354" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">½ O₂ + 2 H⁺ → H₂O</text>
<text x="835" y="394" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">ADP + Pi → ATP</text>
<text x="980" y="440" font-size="18" text-anchor="end" fill="currentColor">NADH ≈ 2.5 ATP · FADH₂ ≈ 1.5 ATP (it skips Complex I)</text>
</g>
<g class="fig-muted"><text x="250" y="378" font-size="16" text-anchor="middle" fill="currentColor">(succinate DH)</text></g>
<g class="fig-accent-2">
<defs>${ARROW('arr-be-etc-r')}</defs>
<line x1="150" y1="286" x2="150" y2="172" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-be-etc-r)"/>
<text x="150" y="150" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">4 H⁺</text>
<line x1="480" y1="286" x2="480" y2="172" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-be-etc-r)"/>
<text x="480" y="150" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">4 H⁺</text>
<line x1="670" y1="286" x2="670" y2="172" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-be-etc-r)"/>
<text x="670" y="150" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">2 H⁺</text>
<line x1="835" y1="162" x2="835" y2="286" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-be-etc-r)"/>
<text x="835" y="152" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">H⁺ flows back in</text>
</g>
</svg>`

/* 6 — Where inhibitors and uncouplers act (replace-table, 560×440) */
const inhibitorsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<rect x="20" y="100" width="520" height="50" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>
<rect x="20" y="290" width="520" height="50" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>
<text x="24" y="284" font-size="13" fill="currentColor">IMS</text>
<text x="24" y="356" font-size="13" fill="currentColor">matrix</text>
<text x="280" y="232" font-size="15" text-anchor="middle" fill="currentColor">H⁺ pumped out by I, III, IV builds the gradient ↓</text>
</g>
<rect x="40" y="80" width="60" height="90" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="70" y="132" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">I</text>
<rect x="120" y="125" width="50" height="45" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="145" y="154" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">II</text>
<circle cx="205" cy="118" r="15" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="205" y="123" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">Q</text>
<rect x="240" y="80" width="60" height="90" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="270" y="132" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">III</text>
<circle cx="330" cy="92" r="13" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="330" y="96" font-size="10" font-weight="700" text-anchor="middle" fill="currentColor">cyt c</text>
<rect x="360" y="80" width="60" height="90" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="390" y="132" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">IV</text>
<rect x="100" y="290" width="60" height="50" rx="8" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="130" y="321" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Fₒ</text>
<circle cx="130" cy="380" r="26" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="130" y="386" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">F₁</text>
<text x="130" y="428" font-size="15" text-anchor="middle" fill="currentColor">ATP synthase</text>
<g class="fig-accent">
<defs>${ARROW('arr-be-inh-b')}</defs>
<line x1="70" y1="192" x2="70" y2="172" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-inh-b)"/>
<text x="70" y="208" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">NADH</text>
<line x1="145" y1="192" x2="145" y2="172" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-inh-b)"/>
<text x="145" y="208" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">FADH₂</text>
<line x1="100" y1="105" x2="191" y2="113" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-inh-b)"/>
<line x1="170" y1="130" x2="193" y2="123" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-inh-b)"/>
<line x1="220" y1="118" x2="238" y2="118" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-inh-b)"/>
<line x1="300" y1="96" x2="317" y2="93" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-inh-b)"/>
<line x1="343" y1="95" x2="359" y2="101" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-inh-b)"/>
<line x1="420" y1="135" x2="448" y2="135" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-be-inh-b)"/>
<text x="456" y="140" font-size="15" font-weight="700" fill="currentColor">O₂ → H₂O</text>
<text x="200" y="386" font-size="15" font-weight="700" fill="currentColor">ADP + Pi → ATP</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-be-inh-r')}</defs>
<text x="70" y="56" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">rotenone</text>
${CROSS(70, 72)}
<text x="270" y="56" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">antimycin A</text>
${CROSS(270, 72)}
<text x="400" y="56" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">cyanide · CO · azide</text>
${CROSS(390, 72)}
<line x1="130" y1="262" x2="130" y2="350" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-inh-r)"/>
<text x="130" y="254" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">H⁺</text>
${CROSS(130, 283)}
<text x="178" y="282" font-size="16" font-weight="700" fill="currentColor">oligomycin</text>
<line x1="400" y1="262" x2="400" y2="352" stroke="currentColor" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#arr-be-inh-r)"/>
<text x="400" y="254" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">uncoupler: DNP · UCP1</text>
<text x="400" y="376" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">H⁺ leaks back as heat</text>
<text x="400" y="398" font-size="15" text-anchor="middle" fill="currentColor">O₂ use ↑ · ATP ↓ · temperature ↑</text>
</g>
</svg>`

/* 7 — The two NADH shuttles (lead, 1000×460) */
const shuttlesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-be-shut')}</defs>
<g class="fig-muted">
<rect x="400" y="60" width="70" height="350" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.5"/>
<text x="435" y="248" font-size="17" text-anchor="middle" fill="currentColor" transform="rotate(-90 435 248)">inner membrane</text>
<text x="200" y="60" font-size="19" text-anchor="middle" fill="currentColor">cytosol</text>
<text x="700" y="60" font-size="19" text-anchor="middle" fill="currentColor">matrix</text>
<text x="500" y="446" font-size="18" text-anchor="middle" fill="currentColor">NADH itself never crosses the inner membrane — only its electrons do</text>
</g>
<g class="fig-accent">
<text x="50" y="100" font-size="21" font-weight="700" fill="currentColor">Malate–aspartate shuttle — heart, liver</text>
<defs>${ARROW('arr-be-shut-b')}</defs>
<line x1="210" y1="153" x2="248" y2="153" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-shut-b)"/>
<line x1="370" y1="153" x2="508" y2="153" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-shut-b)"/>
<line x1="670" y1="153" x2="708" y2="153" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-shut-b)"/>
<text x="850" y="161" font-size="24" font-weight="700" fill="currentColor">~2.5 ATP</text>
</g>
${BOX(50, 130, 160, 46, 'cytosolic NADH', 18)}
${BOX(250, 130, 120, 46, 'malate', 18)}
${BOX(510, 130, 160, 46, 'matrix NADH', 18)}
${BOX(710, 130, 110, 46, 'Complex I', 18)}
<g class="fig-muted"><text x="225" y="200" font-size="15" text-anchor="middle" fill="currentColor">NADH reduces OAA → malate, which crosses</text></g>
<g class="fig-accent-2">
<text x="50" y="290" font-size="21" font-weight="700" fill="currentColor">Glycerol-3-phosphate shuttle — muscle, brain</text>
<defs>${ARROW('arr-be-shut-r')}</defs>
<line x1="210" y1="343" x2="248" y2="343" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-shut-r)"/>
<line x1="370" y1="343" x2="378" y2="343" stroke="currentColor" stroke-width="3"/>
<line x1="490" y1="343" x2="512" y2="343" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-shut-r)"/>
<line x1="572" y1="343" x2="708" y2="343" stroke="currentColor" stroke-width="3" marker-end="url(#arr-be-shut-r)"/>
<text x="640" y="328" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">skips Complex I</text>
<text x="850" y="351" font-size="24" font-weight="700" fill="currentColor">~1.5 ATP</text>
</g>
${BOX(50, 320, 160, 46, 'cytosolic NADH', 18)}
${BOX(250, 320, 120, 46, 'glycerol-3-P', 18)}
${BOX(380, 320, 110, 46, 'G3P DH · FAD', 15)}
<circle cx="545" cy="343" r="26" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="545" y="349" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">CoQ</text>
${BOX(710, 320, 110, 46, 'Complex III', 18)}
<g class="fig-muted"><text x="225" y="392" font-size="15" text-anchor="middle" fill="currentColor">NADH reduces DHAP → glycerol-3-P</text></g>
</svg>`

/* 8 — The ATP ledger for one glucose (replace-table, 560×440) */
const ledgerSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<text x="30" y="34" font-size="14" fill="currentColor">stage · location</text>
<text x="258" y="34" font-size="14" text-anchor="middle" fill="currentColor">direct</text>
<text x="312" y="34" font-size="14" fill="currentColor">reduced carriers</text>
<line x1="20" y1="232" x2="540" y2="232" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
</g>
<rect x="20" y="46" width="185" height="48" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="32" y="68" font-size="17" font-weight="700" fill="currentColor">Glycolysis</text>
<g class="fig-muted"><text x="32" y="87" font-size="14" fill="currentColor">cytosol</text></g>
<rect x="20" y="106" width="185" height="48" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="32" y="128" font-size="17" font-weight="700" fill="currentColor">PDH × 2 pyruvate</text>
<g class="fig-muted"><text x="32" y="147" font-size="14" fill="currentColor">matrix</text></g>
<rect x="20" y="166" width="185" height="48" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="32" y="188" font-size="17" font-weight="700" fill="currentColor">TCA × 2 turns</text>
<g class="fig-muted"><text x="32" y="207" font-size="14" fill="currentColor">matrix</text></g>
<g class="fig-accent">
<rect x="218" y="54" width="80" height="32" rx="16" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2"/>
<text x="258" y="75" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">2 ATP</text>
<rect x="218" y="114" width="80" height="32" rx="16" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/>
<text x="258" y="135" font-size="16" text-anchor="middle" fill="currentColor">0</text>
<rect x="218" y="174" width="80" height="32" rx="16" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2"/>
<text x="258" y="195" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">2 GTP</text>
</g>
<rect x="312" y="54" width="150" height="32" rx="16" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="387" y="75" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">2 NADH (cytosolic)</text>
<rect x="312" y="114" width="88" height="32" rx="16" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="356" y="135" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">2 NADH</text>
<rect x="312" y="174" width="88" height="32" rx="16" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="356" y="195" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">6 NADH</text>
<rect x="412" y="174" width="100" height="32" rx="16" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<text x="462" y="195" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">2 FADH₂</text>
<text x="32" y="260" font-size="16" font-weight="700" fill="currentColor">oxidative phosphorylation: NADH × 2.5 · FADH₂ × 1.5</text>
<text x="32" y="286" font-size="16" fill="currentColor">8 matrix NADH → 20</text>
<text x="300" y="286" font-size="16" fill="currentColor">2 FADH₂ → 3</text>
<text x="32" y="310" font-size="16" fill="currentColor">2 cytosolic NADH → 5 (malate–aspartate) or 3 (glycerol-3-P)</text>
<text x="32" y="334" font-size="16" fill="currentColor">direct: 2 ATP + 2 GTP → 4</text>
<g class="fig-accent">
<rect x="20" y="352" width="310" height="48" rx="10" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="3"/>
<text x="175" y="383" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">≈ 30–32 ATP per glucose</text>
</g>
<g class="fig-accent-2">
<rect x="350" y="352" width="190" height="48" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="445" y="372" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">anaerobic: 2 ATP</text>
<text x="445" y="392" font-size="14" text-anchor="middle" fill="currentColor">about 15× less</text>
</g>
<g class="fig-muted"><text x="280" y="426" font-size="14" text-anchor="middle" fill="currentColor">the range = which shuttle carries the cytosolic NADH in</text></g>
</svg>`

/* 9 — An oxygen-electrode trace of isolated mitochondria (after, 1000×460) */
const oxygenSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-be-o2')}</defs>
<line x1="80" y1="400" x2="960" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-be-o2)"/>
<line x1="80" y1="400" x2="80" y2="50" stroke="currentColor" stroke-width="2" marker-end="url(#arr-be-o2)"/>
<text x="34" y="225" font-size="19" text-anchor="middle" fill="currentColor" transform="rotate(-90 34 225)">O₂ left in chamber</text>
<text x="940" y="432" font-size="19" text-anchor="end" fill="currentColor">time</text>
<text x="72" y="76" font-size="15" text-anchor="end" fill="currentColor">high</text>
<text x="72" y="398" font-size="15" text-anchor="end" fill="currentColor">0</text>
<g class="fig-muted">
<line x1="130" y1="60" x2="130" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="300" y1="60" x2="300" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="430" y1="60" x2="430" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="580" y1="60" x2="580" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="720" y1="60" x2="720" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<text x="215" y="150" font-size="17" text-anchor="middle" fill="currentColor">slow: ADP-limited</text>
<text x="650" y="318" font-size="15" text-anchor="middle" fill="currentColor">(synthase blocked, gradient maxed)</text>
</g>
${NUM(130, 40, '1')}<text x="148" y="46" font-size="18" fill="currentColor">substrate</text>
${NUM(300, 40, '2')}<text x="318" y="46" font-size="18" fill="currentColor">ADP</text>
${NUM(430, 40, '3')}<text x="448" y="46" font-size="18" fill="currentColor">ADP used up</text>
${NUM(580, 40, '4')}<text x="598" y="46" font-size="18" fill="currentColor">oligomycin</text>
${NUM(720, 40, '5')}<text x="738" y="46" font-size="18" fill="currentColor">DNP</text>
<path d="M80 70 L130 70 L300 105" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/>
<g class="fig-accent">
<path d="M300 105 L430 200" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="300" y="262" font-size="18" font-weight="700" fill="currentColor">ADP added → respiration jumps (coupled)</text>
</g>
<path d="M430 200 L580 232" fill="none" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-accent-2">
<path d="M580 232 L720 238" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="650" y="296" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">oligomycin: O₂ use stops</text>
<path d="M720 238 L870 394" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="810" y="290" font-size="18" font-weight="700" fill="currentColor">uncoupled:</text>
<text x="830" y="312" font-size="18" font-weight="700" fill="currentColor">O₂ use at max,</text>
<text x="850" y="334" font-size="18" font-weight="700" fill="currentColor">no ATP made</text>
</g>
</svg>`

export const mcatBioenergeticsFigures: DeckFigurePlacement[] = [
  {
    at: 'The Phosphoryl-Transfer Ladder',
    mode: 'replace-table',
    figure: {
      svg: ladderSvg,
      alt:
        'A vertical ladder of phosphoryl-transfer potentials, most negative ΔG°′ at the top: PEP about −62 kJ/mol, 1,3-bisphosphoglycerate about −49, creatine phosphate about −43 (muscle’s seconds-long ATP buffer), ATP to ADP about −30.5 (highlighted, mid-ladder), glucose-6-phosphate about −14. A blue arrow from the PEP and 1,3-BPG rungs down to ATP: they hand a phosphate to ADP (substrate-level phosphorylation). A red arrow from ATP down to glucose-6-phosphate: ATP phosphorylates glucose and fructose-6-P (hexokinase, PFK-1). A rung can phosphorylate any rung below it, never one above.',
      caption: 'The phosphoryl-transfer ladder: ATP sits in the middle so it can be made by the compounds above it and spend on the ones below.',
    },
    blocks: [
      '- **Above ATP** (PEP, 1,3-BPG): donate P to ADP → **substrate-level phosphorylation**',
      '- **Below ATP** (glucose-6-P, F6P): ATP phosphorylates them (hexokinase, PFK-1)',
      '- **Creatine phosphate** (~−43): muscle’s rapid ATP buffer for the first seconds of a sprint',
      '- Rule: a higher rung can phosphorylate any lower rung — never the reverse',
    ],
  },
  {
    at: 'Energy Coupling',
    mode: 'lead',
    figure: {
      svg: couplingSvg,
      alt:
        'Three free-energy step diagrams side by side. Panel 1, alone: glutamate plus NH₃ steps UP to glutamine, a red +14 kJ/mol arrow (uphill, endergonic). Panel 2, ATP hydrolysis: ATP plus water steps DOWN to ADP plus Pi, a blue −30.5 arrow (downhill, exergonic). Panel 3, coupled: glutamate plus NH₃ plus ATP steps down through a glutamyl-phosphate intermediate to glutamine plus ADP plus Pi, net −16 (blue). Caption line: +14 + (−30.5) = −16 kJ/mol, spontaneous; the link is a shared phosphorylated intermediate, not heat from ATP.',
      caption: 'Energy coupling as free-energy steps: an uphill reaction becomes downhill when it shares an intermediate with ATP hydrolysis, because the ΔG°′ values add (levels illustrative, numbers from the lesson).',
    },
    blocks: [
      '- Coupled reactions share a **common intermediate** (glutamyl-phosphate), so their free energies **add**',
      '- +14 + (−30.5) = **−16 kJ/mol** → spontaneous; it is chemistry, not "heat from ATP"',
    ],
  },
  {
    at: 'Pyruvate Dehydrogenase (PDH): The Gateway',
    mode: 'lead',
    figure: {
      svg: pdhSvg,
      alt:
        'Top row: pyruvate (3C) passes through the PDH complex to acetyl-CoA (2C); NAD⁺ is reduced to NADH and CO₂ leaves below the enzyme; a red note under acetyl-CoA says irreversible, no way back to glucose. Bottom: a two-state switch. A blue box PDH active and a red box PDH-P inactive, with a phosphate badge. The upper red arrow, active to inactive, is PDH kinase adding a phosphate (OFF); it is turned on by NADH, acetyl-CoA and ATP, the products saying enough. The lower blue arrow, inactive back to active, is PDH phosphatase removing the phosphate (ON); it is turned on by Ca²⁺ in contracting muscle and by insulin in adipose.',
      caption: 'The PDH gateway: one irreversible oxidative decarboxylation, switched off by its own products through PDH kinase and back on by PDH phosphatase.',
    },
    blocks: [
      '- Five cofactors ("Tender Loving Care For Nancy"): **TPP** (B1), **lipoic acid**, **CoA** (B5), **FAD** (B2), **NAD⁺** (B3)',
      '- Phosphorylated = **off**; dephosphorylated = **on** — and the step is **irreversible**',
    ],
  },
  {
    at: 'The Citric Acid Cycle (One Turn, One Acetyl-CoA)',
    mode: 'lead',
    figure: {
      svg: tcaSvg,
      alt:
        'The citric acid cycle drawn as a clockwise ring of labelled boxes. Acetyl-CoA (2C) enters at the top and joins oxaloacetate (4C) to make citrate (6C) via citrate synthase (red: inhibited by NADH and citrate). Clockwise: citrate, isocitrate, alpha-ketoglutarate (5C), succinyl-CoA, succinate, fumarate, malate, back to oxaloacetate. Blue outputs are marked on the ring: isocitrate to alpha-KG gives NADH plus CO₂ at isocitrate dehydrogenase (red: rate-limiting, sped by ADP, slowed by ATP and NADH); alpha-KG to succinyl-CoA gives NADH plus CO₂ at alpha-KG dehydrogenase (PDH’s twin, same five cofactors); succinyl-CoA to succinate gives GTP by substrate-level phosphorylation; succinate to fumarate gives FADH₂ at succinate dehydrogenase, which is Complex II; malate to oxaloacetate gives NADH at malate dehydrogenase (ΔG°′ positive, pulled forward). Header: per turn 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂.',
      caption: 'One turn of the cycle: two carbons in as acetyl-CoA, two out as CO₂, and the energy leaves as 3 NADH, 1 FADH₂ and 1 GTP. Red marks the three regulated steps.',
    },
    blocks: [
      '- **Per turn:** 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂ — the two CO₂ carbons come from oxaloacetate, not the new acetyl group',
      '- Control points: citrate synthase, **isocitrate DH (rate-limiting)**, α-KG DH — all slowed by NADH / ATP, IDH sped up by ADP',
    ],
  },
  {
    at: 'The Chain: Four Complexes, Two Mobile Carriers',
    mode: 'lead',
    figure: {
      svg: etcSvg,
      alt:
        'The inner mitochondrial membrane as a horizontal strip, intermembrane space (high H⁺) above and matrix (low H⁺, alkaline, negative) below. Left to right on the strip: Complex I, Complex II (lower, matrix side), the mobile carrier Q inside the membrane, Complex III, cytochrome c on the outer face, Complex IV, then ATP synthase (Fo in the membrane, F1 head in the matrix). Blue electron arrows: NADH to Complex I, FADH₂ (succinate DH) to Complex II, both to Q, Q to III, III to cyt c, cyt c to IV, and at IV half O₂ plus 2 H⁺ becomes H₂O. Red arrows pump H⁺ outward at I (about 4), III (about 4) and IV (about 2), not at II. A red arrow brings H⁺ back in through ATP synthase, which makes ATP from ADP and Pi. Footer: NADH about 2.5 ATP, FADH₂ about 1.5 ATP because it skips Complex I; electrons run toward more positive reduction potential, O₂ the most positive.',
      caption: 'The electron transport chain and chemiosmosis: electrons fall from NADH and FADH₂ to O₂ while Complexes I, III and IV pump H⁺ out; the H⁺ falling back through ATP synthase makes ATP.',
    },
    blocks: [
      '- Electrons: NADH → **I** → Q; FADH₂ → **II** → Q; Q → **III** → cyt c → **IV** → O₂. Pumps: I, III, IV (not II)',
      '- Proton-motive force = ΔpH + Δψ; H⁺ returning through **ATP synthase** (Fₒ rotor, F₁ heads) makes ATP → NADH ≈ 2.5, FADH₂ ≈ 1.5',
    ],
  },
  {
    at: 'Inhibitors & Uncouplers — Know the Map',
    mode: 'replace-table',
    figure: {
      svg: inhibitorsSvg,
      alt:
        'Two membrane strips. Top strip, the chain: NADH into Complex I, FADH₂ into Complex II, both to Q, then III, cytochrome c, IV and O₂ to H₂O. Red crosses mark the blocks: rotenone on Complex I, antimycin A on Complex III, cyanide, CO and azide on Complex IV. Bottom strip: the H⁺ gradient built by I, III and IV flows back through ATP synthase (Fo then F1, ADP plus Pi to ATP); a red cross labelled oligomycin blocks the Fo channel. To the right a dashed red arrow labelled uncoupler, DNP or UCP1, lets H⁺ leak straight back through the membrane as heat: O₂ use up, ATP down, temperature up.',
      caption: 'Where each poison acts: inhibitors stop electron flow (and O₂ use) at a complex, oligomycin blocks the synthase, and uncouplers short-circuit the gradient.',
    },
    blocks: [
      '- **Rotenone** (I): NADH backs up, FADH₂ electrons still reach O₂ · **Antimycin A** (III), **cyanide / CO / azide** (IV): all flow stops',
      '- **Oligomycin** (ATP synthase): gradient maxes out, so pumping and O₂ use stop *secondarily*',
      '- **DNP, aspirin overdose, UCP1** (uncouplers): gradient lost as heat — O₂ use **up**, ATP **down**, temperature **up**',
      '- Memory hook: inhibitors stop O₂ consumption; uncouplers accelerate it',
    ],
  },
  {
    at: 'Getting Cytosolic NADH Inside: The Shuttles',
    mode: 'lead',
    figure: {
      svg: shuttlesSvg,
      alt:
        'Two routes drawn left to right across a vertical inner-membrane band, cytosol on the left and matrix on the right. Top, blue, malate-aspartate shuttle (heart, liver): cytosolic NADH reduces oxaloacetate to malate, malate crosses the membrane and is reoxidized to give matrix NADH, which enters Complex I, about 2.5 ATP. Bottom, red, glycerol-3-phosphate shuttle (muscle, brain): cytosolic NADH reduces DHAP to glycerol-3-P; a membrane-bound glycerol-3-P dehydrogenase with FAD takes the electrons as FADH₂ and passes them to CoQ, then Complex III, skipping Complex I, about 1.5 ATP. Footer: NADH itself never crosses the inner membrane, only its electrons do.',
      caption: 'The two shuttles for glycolytic NADH: the malate-aspartate route keeps the NADH level (2.5 ATP), the glycerol-3-phosphate route drops to the FADH₂ level (1.5 ATP).',
    },
    blocks: [
      '- **Malate–aspartate** (heart, liver): electrons arrive as matrix NADH → Complex I → ~2.5 ATP each',
      '- **Glycerol-3-P** (muscle, brain): electrons arrive as FADH₂ → CoQ → ~1.5 ATP each — faster, less efficient; hence **30 vs 32 ATP per glucose**',
    ],
  },
  {
    at: 'The Full Ledger for One Glucose (Aerobic)',
    mode: 'replace-table',
    figure: {
      svg: ledgerSvg,
      alt:
        'A ledger with three stage rows and their outputs. Glycolysis (cytosol): 2 ATP direct and 2 cytosolic NADH. PDH times two pyruvate (matrix): no direct ATP, 2 NADH. TCA times two turns (matrix): 2 GTP direct, 6 NADH and 2 FADH₂. Below, oxidative phosphorylation cashes them in at 2.5 ATP per NADH and 1.5 per FADH₂: 8 matrix NADH give 20, 2 FADH₂ give 3, the 2 cytosolic NADH give 5 via the malate-aspartate shuttle or 3 via glycerol-3-phosphate, plus 4 direct. Total about 30 to 32 ATP per glucose, against 2 ATP for anaerobic glycolysis, about 15 times less. The range comes from which shuttle carries the cytosolic NADH in.',
      caption: 'The aerobic ATP ledger for one glucose: four ATP made directly, the rest from ten NADH and two FADH₂ at the chain.',
    },
    blocks: [
      '- Carriers are cashed in by oxidative phosphorylation: **~2.5 ATP per NADH**, **~1.5 per FADH₂**',
      '- Only the 2 **cytosolic** NADH vary: malate–aspartate (2.5 each) vs glycerol-3-P (1.5 each) → **32 vs 30**',
      '- Anaerobic glycolysis alone: **2 ATP** — about **15×** less, the gap behind oxygen debt and the Warburg effect',
    ],
  },
  {
    at: 'Passage Skills: Oxygen Electrode & Respirometry Experiments',
    mode: 'after',
    figure: {
      svg: oxygenSvg,
      alt:
        'Oxygen left in the chamber against time for isolated mitochondria, with five numbered additions marked by dashed lines. 1, substrate: O₂ falls slowly (ADP-limited). 2, ADP: the trace drops steeply (blue) — respiration jumps because it is coupled to ATP synthesis. 3, ADP used up: slow again. 4, oligomycin: the trace goes flat (red) — O₂ use stops because the synthase is blocked and the gradient is maxed. 5, DNP: the steepest fall of all (red) — uncoupled, O₂ use at maximum with no ATP made.',
      caption: 'An oxygen-electrode trace (illustrative): the slope is the respiration rate. ADP speeds it, oligomycin stops it, an uncoupler sets it free.',
    },
    blocks: [
      '- Read the **slope**: steeper = faster O₂ consumption. ADP-stimulated rate is "state 3", the slow rate after ADP runs out is "state 4"',
      '- Oligomycin then DNP is the classic proof of **chemiosmotic coupling**: respiration returns, ATP does not',
    ],
  },
]
