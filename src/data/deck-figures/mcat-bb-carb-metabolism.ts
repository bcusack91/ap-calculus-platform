import type { DeckFigurePlacement } from './index'

/**
 * Carbohydrate Metabolism (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept: pathways are labelled
 * boxes joined by arrows with the enzymes on the arrows and the regulated
 * steps highlighted; no structural formulas, no textbook or prep-company
 * figure was copied. Blue (fig-accent) = activation / the fed, insulin side;
 * red (fig-accent-2) = inhibition, irreversible steps / the fasting, glucagon
 * side; grey (fig-muted) = shared or reversible steps and notes.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-cm-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

/** A rounded metabolite box with a centred one-line label. */
const BOX = (x: number, y: number, w: number, h: number, label: string, size = 20, bold = true, opacity = 0.08) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/>` +
  `<text x="${x + w / 2}" y="${y + h / 2 + size * 0.36}" font-size="${size}"${bold ? ' font-weight="700"' : ''} text-anchor="middle" fill="currentColor">${label}</text>`

/* 1 — Glycolysis in two rows: investment, then the doubled payoff (lead, 1000×460) */
const glycolysisSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cm-gly')}</defs>
<text x="40" y="36" font-size="22" font-weight="700" fill="currentColor">Investment phase</text>
<g class="fig-accent-2"><text x="232" y="36" font-size="20" fill="currentColor">2 ATP spent</text></g>
${BOX(40, 88, 140, 46, 'Glucose')}
${BOX(230, 88, 140, 46, 'G6P')}
${BOX(420, 88, 140, 46, 'F6P')}
${BOX(610, 88, 140, 46, 'F1,6-BP')}
${BOX(800, 88, 160, 46, 'DHAP ⇄ G3P')}
<g class="fig-accent-2">
<defs>${ARROW('arr-cm-gly-r')}</defs>
<line x1="182" y1="111" x2="224" y2="111" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-gly-r)"/>
<line x1="562" y1="111" x2="604" y2="111" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-gly-r)"/>
<text x="205" y="72" font-size="17" text-anchor="middle" fill="currentColor">ATP → ADP</text>
<text x="585" y="72" font-size="17" text-anchor="middle" fill="currentColor">ATP → ADP</text>
<text x="205" y="158" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">hexokinase /</text>
<text x="205" y="178" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">glucokinase</text>
<text x="585" y="158" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">PFK-1</text>
<text x="585" y="178" font-size="16" text-anchor="middle" fill="currentColor">rate-limiting</text>
</g>
<g class="fig-muted">
<defs>${ARROW('arr-cm-gly-m')}</defs>
<line x1="372" y1="111" x2="414" y2="111" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-gly-m)"/>
<line x1="752" y1="111" x2="794" y2="111" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-gly-m)"/>
<text x="395" y="158" font-size="16" text-anchor="middle" fill="currentColor">isomerase</text>
<text x="775" y="158" font-size="16" text-anchor="middle" fill="currentColor">aldolase, TPI</text>
<path d="M880 136 V208 H60 V246" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#arr-cm-gly-m)"/>
<text x="470" y="234" font-size="17" text-anchor="middle" fill="currentColor">the 6-carbon sugar splits into two 3-carbon halves — everything below happens twice</text>
</g>
<text x="40" y="270" font-size="22" font-weight="700" fill="currentColor">Payoff phase (×2)</text>
<g class="fig-accent"><text x="246" y="270" font-size="20" fill="currentColor">4 ATP + 2 NADH made</text></g>
${BOX(30, 308, 120, 44, 'G3P')}
${BOX(192, 308, 120, 44, '1,3-BPG')}
${BOX(354, 308, 120, 44, '3-PG')}
${BOX(516, 308, 120, 44, '2-PG')}
${BOX(678, 308, 120, 44, 'PEP')}
${BOX(840, 308, 130, 44, 'Pyruvate')}
<g class="fig-accent">
<defs>${ARROW('arr-cm-gly-b')}</defs>
<line x1="152" y1="330" x2="186" y2="330" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-gly-b)"/>
<line x1="314" y1="330" x2="348" y2="330" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-gly-b)"/>
<text x="171" y="294" font-size="16" text-anchor="middle" fill="currentColor">NAD⁺ → NADH</text>
<text x="333" y="294" font-size="16" text-anchor="middle" fill="currentColor">ADP → ATP</text>
<text x="819" y="294" font-size="16" text-anchor="middle" fill="currentColor">ADP → ATP</text>
<text x="171" y="376" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">GAPDH</text>
<text x="171" y="396" font-size="15" text-anchor="middle" fill="currentColor">the only oxidation</text>
<text x="333" y="376" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">PGK</text>
<text x="333" y="396" font-size="15" text-anchor="middle" fill="currentColor">substrate-level</text>
</g>
<g class="fig-muted">
<line x1="476" y1="330" x2="510" y2="330" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-gly-m)"/>
<line x1="638" y1="330" x2="672" y2="330" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-gly-m)"/>
<text x="495" y="376" font-size="16" text-anchor="middle" fill="currentColor">mutase</text>
<text x="657" y="376" font-size="16" text-anchor="middle" fill="currentColor">enolase</text>
</g>
<g class="fig-accent-2">
<line x1="800" y1="330" x2="834" y2="330" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-gly-r)"/>
<text x="819" y="376" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">pyruvate kinase</text>
<text x="819" y="396" font-size="15" text-anchor="middle" fill="currentColor">substrate-level</text>
</g>
<text x="500" y="442" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Net per glucose: 2 ATP + 2 NADH + 2 pyruvate — cytosol, no O₂ needed.</text>
<g class="fig-accent-2"><text x="960" y="36" font-size="16" text-anchor="end" fill="currentColor">red arrows = irreversible, regulated steps</text></g>
</svg>`

/* 2 — The three regulated enzymes with their activators and inhibitors (replace-table, 560×440) */
const regulatedStepsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-accent"><text x="86" y="30" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">activators (+)</text></g>
<g class="fig-accent-2"><text x="474" y="30" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">inhibitors (−)</text></g>
<g class="fig-accent">
<defs>${ARROW('arr-cm-reg-b')}</defs>
<text x="86" y="100" font-size="16" text-anchor="middle" fill="currentColor">insulin induces</text>
<text x="86" y="120" font-size="15" text-anchor="middle" fill="currentColor">glucokinase (liver)</text>
<line x1="158" y1="110" x2="174" y2="110" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-reg-b)"/>
<text x="86" y="214" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">AMP</text>
<text x="86" y="238" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">F2,6-BP</text>
<text x="86" y="258" font-size="14" text-anchor="middle" fill="currentColor">(strongest; insulin ↑)</text>
<line x1="158" y1="232" x2="174" y2="232" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-reg-b)"/>
<text x="86" y="356" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">F1,6-BP</text>
<text x="86" y="376" font-size="14" text-anchor="middle" fill="currentColor">(feed-forward)</text>
<line x1="158" y1="362" x2="174" y2="362" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-reg-b)"/>
</g>
<g class="fig-accent-2">
<text x="474" y="104" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">G6P</text>
<text x="474" y="124" font-size="14" text-anchor="middle" fill="currentColor">(product; hexokinase)</text>
<line x1="404" y1="110" x2="384" y2="110" stroke="currentColor" stroke-width="3"/><line x1="384" y1="102" x2="384" y2="118" stroke="currentColor" stroke-width="3"/>
<text x="474" y="222" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">ATP</text>
<text x="474" y="246" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">citrate</text>
<line x1="404" y1="232" x2="384" y2="232" stroke="currentColor" stroke-width="3"/><line x1="384" y1="224" x2="384" y2="240" stroke="currentColor" stroke-width="3"/>
<text x="474" y="344" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">ATP, alanine</text>
<text x="474" y="366" font-size="15" text-anchor="middle" fill="currentColor">glucagon → PKA</text>
<text x="474" y="384" font-size="14" text-anchor="middle" fill="currentColor">turns liver PK off</text>
<line x1="404" y1="362" x2="384" y2="362" stroke="currentColor" stroke-width="3"/><line x1="384" y1="354" x2="384" y2="370" stroke="currentColor" stroke-width="3"/>
</g>
<rect x="176" y="76" width="206" height="68" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="279" y="104" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Hexokinase / Glucokinase</text>
<text x="279" y="128" font-size="15" text-anchor="middle" fill="currentColor">glucose → G6P</text>
<g class="fig-accent-2"><rect x="176" y="196" width="206" height="72" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="3.5"/></g>
<text x="279" y="224" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">PFK-1</text>
<text x="279" y="244" font-size="15" text-anchor="middle" fill="currentColor">F6P → F1,6-BP</text>
<text x="279" y="261" font-size="12" text-anchor="middle" fill="currentColor">rate-limiting · first committed step</text>
<rect x="176" y="328" width="206" height="68" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="279" y="356" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Pyruvate kinase</text>
<text x="279" y="380" font-size="15" text-anchor="middle" fill="currentColor">PEP → pyruvate</text>
<g class="fig-muted">
<line x1="279" y1="144" x2="279" y2="196" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 5"/>
<line x1="279" y1="268" x2="279" y2="328" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 5"/>
<text x="279" y="426" font-size="14" text-anchor="middle" fill="currentColor">the three irreversible steps, in pathway order (top → bottom)</text>
</g>
</svg>`

/* 3 — Fates of pyruvate: one fork, three exits, and why two of them exist (replace-table, 560×440) */
const pyruvateFatesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-cm-pyr')}</defs>
<g class="fig-muted">
<text x="280" y="30" font-size="16" text-anchor="middle" fill="currentColor">glycolysis — GAPDH needs NAD⁺ to keep running</text>
<line x1="280" y1="40" x2="280" y2="66" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-pyr)"/>
</g>
${BOX(200, 70, 160, 48, 'Pyruvate', 22)}
<g class="fig-accent">
<defs>${ARROW('arr-cm-pyr-b')}</defs>
<path d="M210 118 C 130 170, 90 210, 85 266" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-pyr-b)"/>
<path d="M350 118 C 430 170, 470 210, 475 266" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-pyr-b)"/>
<text x="110" y="168" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">LDH</text>
<text x="110" y="188" font-size="15" text-anchor="end" fill="currentColor">NADH → NAD⁺</text>
<text x="450" y="168" font-size="17" font-weight="700" fill="currentColor">yeast</text>
<text x="450" y="188" font-size="15" fill="currentColor">NADH → NAD⁺</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cm-pyr-r')}</defs>
<line x1="280" y1="118" x2="280" y2="266" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-pyr-r)"/>
<text x="292" y="168" font-size="17" font-weight="700" fill="currentColor">PDH</text>
<text x="292" y="188" font-size="15" fill="currentColor">mitochondria, O₂</text>
<text x="292" y="206" font-size="15" fill="currentColor">−CO₂, +NADH</text>
</g>
${BOX(20, 270, 150, 48, 'Lactate', 20)}
${BOX(195, 270, 170, 48, 'Acetyl-CoA', 20)}
${BOX(390, 270, 150, 48, 'Ethanol + CO₂', 18)}
<g class="fig-accent">
<text x="95" y="344" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">anaerobic</text>
<text x="95" y="362" font-size="14" text-anchor="middle" fill="currentColor">muscle, RBC</text>
<text x="465" y="344" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">fermentation</text>
<text x="465" y="362" font-size="14" text-anchor="middle" fill="currentColor">same NAD⁺ logic</text>
</g>
<g class="fig-accent-2">
<text x="280" y="344" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">aerobic</text>
<text x="280" y="362" font-size="14" text-anchor="middle" fill="currentColor">→ TCA cycle, full oxidation</text>
</g>
<g class="fig-accent">
<rect x="20" y="384" width="520" height="40" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<text x="280" y="409" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">blue exits make no ATP — they just regenerate NAD⁺</text>
</g>
</svg>`

/* 4 — Glycolysis forward, gluconeogenesis back: the four bypass enzymes (lead, 1000×460) */
const bypassSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent"><text x="20" y="38" font-size="21" font-weight="700" fill="currentColor">Glycolysis → (cytosol, every cell)</text></g>
<g class="fig-accent-2"><text x="20" y="446" font-size="21" font-weight="700" fill="currentColor">← Gluconeogenesis (liver, kidney cortex): 4 bypass enzymes</text></g>
${BOX(15, 207, 110, 46, 'Glucose', 19)}
${BOX(165, 207, 110, 46, 'G6P', 19)}
${BOX(315, 207, 110, 46, 'F6P', 19)}
${BOX(465, 207, 116, 46, 'F1,6-BP', 19)}
${BOX(745, 207, 110, 46, 'PEP', 19)}
${BOX(885, 207, 110, 46, 'Pyruvate', 19)}
<g class="fig-muted">
<defs>${ARROW('arr-cm-byp-m')}</defs>
<line x1="590" y1="230" x2="736" y2="230" stroke="currentColor" stroke-width="2.5" marker-start="url(#arr-cm-byp-m)" marker-end="url(#arr-cm-byp-m)"/>
<text x="663" y="198" font-size="15" text-anchor="middle" fill="currentColor">6 shared,</text>
<text x="663" y="254" font-size="15" text-anchor="middle" fill="currentColor">reversible steps</text>
<line x1="70" y1="150" x2="70" y2="203" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="220" y1="150" x2="220" y2="203" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="370" y1="150" x2="370" y2="203" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="523" y1="150" x2="523" y2="203" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="800" y1="150" x2="800" y2="203" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="940" y1="150" x2="940" y2="203" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="70" y1="257" x2="70" y2="310" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="220" y1="257" x2="220" y2="310" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="370" y1="257" x2="370" y2="310" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="523" y1="257" x2="523" y2="310" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
<text x="995" y="446" font-size="14" text-anchor="end" fill="currentColor">OAA leaves the matrix as malate</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-cm-byp-b')}</defs>
<line x1="80" y1="150" x2="210" y2="150" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-byp-b)"/>
<line x1="230" y1="150" x2="360" y2="150" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-byp-b)"/>
<line x1="380" y1="150" x2="513" y2="150" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-byp-b)"/>
<line x1="810" y1="150" x2="930" y2="150" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-byp-b)"/>
<text x="145" y="116" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">hexokinase /</text>
<text x="145" y="136" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">glucokinase</text>
<text x="295" y="136" font-size="16" text-anchor="middle" fill="currentColor">isomerase</text>
<text x="446" y="116" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">PFK-1</text>
<text x="446" y="136" font-size="15" text-anchor="middle" fill="currentColor">rate-limiting</text>
<text x="870" y="116" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">pyruvate kinase</text>
<text x="870" y="136" font-size="15" text-anchor="middle" fill="currentColor">ATP made</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cm-byp-r')}</defs>
<line x1="210" y1="310" x2="80" y2="310" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-byp-r)"/>
<line x1="513" y1="310" x2="380" y2="310" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-byp-r)"/>
<path d="M940 257 V 348" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-byp-r)"/>
<path d="M885 378 H800 V 262" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-byp-r)"/>
<text x="145" y="338" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">glucose-6-phosphatase</text>
<text x="145" y="358" font-size="15" text-anchor="middle" fill="currentColor">ER lumen; liver + kidney only</text>
<text x="145" y="376" font-size="15" text-anchor="middle" fill="currentColor">(muscle lacks it)</text>
<text x="446" y="338" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">F1,6-bisphosphatase</text>
<text x="446" y="358" font-size="15" text-anchor="middle" fill="currentColor">rate-limiting</text>
<text x="446" y="376" font-size="15" text-anchor="middle" fill="currentColor">AMP, F2,6-BP inhibit</text>
<text x="870" y="284" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">pyruvate</text>
<text x="870" y="301" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">carboxylase</text>
<text x="870" y="319" font-size="12" text-anchor="middle" fill="currentColor">mito; biotin, ATP</text>
<text x="870" y="335" font-size="12" text-anchor="middle" fill="currentColor">needs acetyl-CoA</text>
${BOX(885, 352, 110, 44, 'OAA', 18)}
<text x="842" y="400" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">PEPCK</text>
<text x="842" y="416" font-size="13" text-anchor="middle" fill="currentColor">GTP; −CO₂</text>
</g>
<g class="fig-muted">
<line x1="360" y1="310" x2="230" y2="310" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cm-byp-m)"/>
<text x="295" y="338" font-size="15" text-anchor="middle" fill="currentColor">isomerase</text>
</g>
</svg>`

/* 5 — The Cori cycle: lactate out of muscle and RBCs, glucose back from the liver (lead, 1000×460) */
const coriSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<rect x="30" y="50" width="350" height="340" rx="36" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<rect x="620" y="50" width="350" height="340" rx="36" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
<text x="205" y="86" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Exercising muscle / RBC</text>
<text x="205" y="108" font-size="15" text-anchor="middle" fill="currentColor">anaerobic — no O₂ or no mitochondria</text>
<text x="795" y="86" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">Liver</text>
<text x="795" y="108" font-size="15" text-anchor="middle" fill="currentColor">has the four bypass enzymes</text>
<text x="500" y="150" font-size="16" text-anchor="middle" fill="currentColor">blood</text>
<text x="500" y="358" font-size="16" text-anchor="middle" fill="currentColor">blood</text>
<text x="500" y="440" font-size="16" text-anchor="middle" fill="currentColor">glucose–alanine cycle: the same loop with alanine as the carrier, so muscle nitrogen rides along</text>
</g>
${BOX(120, 140, 170, 48, 'Glucose', 20)}
${BOX(120, 300, 170, 48, '2 Lactate', 20)}
${BOX(710, 140, 170, 48, 'Glucose', 20)}
${BOX(710, 300, 170, 48, '2 Lactate', 20)}
<g class="fig-accent">
<defs>${ARROW('arr-cm-cori-b')}</defs>
<line x1="205" y1="190" x2="205" y2="294" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-cori-b)"/>
<text x="222" y="232" font-size="17" font-weight="700" fill="currentColor">glycolysis</text>
<text x="222" y="254" font-size="17" fill="currentColor">+2 ATP</text>
<line x1="706" y1="164" x2="296" y2="164" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-cori-b)"/>
<text x="500" y="192" font-size="16" text-anchor="middle" fill="currentColor">glucose shipped back out</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cm-cori-r')}</defs>
<line x1="795" y1="298" x2="795" y2="194" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-cori-r)"/>
<text x="778" y="232" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">gluconeogenesis</text>
<text x="778" y="254" font-size="17" text-anchor="end" fill="currentColor">−6 ATP (4 ATP + 2 GTP)</text>
<line x1="294" y1="324" x2="704" y2="324" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-cori-r)"/>
<text x="500" y="302" font-size="16" text-anchor="middle" fill="currentColor">lactate exported</text>
</g>
<text x="500" y="230" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">muscle: +2 ATP</text>
<text x="500" y="252" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">liver: −6 ATP</text>
<text x="500" y="274" font-size="15" text-anchor="middle" fill="currentColor">the bill moves to the liver</text>
<g class="fig-muted">
<text x="205" y="378" font-size="14" text-anchor="middle" fill="currentColor">LDH regenerates NAD⁺ here</text>
<text x="795" y="378" font-size="14" text-anchor="middle" fill="currentColor">LDH runs the other way here</text>
</g>
</svg>`

/* 6 — Fructose-2,6-bisphosphate: one molecule flips both pathways (replace-table, 560×440) */
const f26bpSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-accent">
<defs>${ARROW('arr-cm-f26-b')}</defs>
<rect x="20" y="20" width="210" height="46" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="125" y="49" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Insulin (fed)</text>
<path d="M125 66 V112" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-f26-b)"/>
<text x="136" y="88" font-size="14" fill="currentColor">dephosphorylated:</text>
<text x="136" y="106" font-size="14" font-weight="700" fill="currentColor">PFK-2 side ON</text>
<path d="M240 176 L262 210" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-f26-b)"/>
<text x="234" y="200" font-size="14" font-weight="700" text-anchor="end" fill="currentColor">makes it ↑</text>
<path d="M252 268 C 200 290, 160 306, 136 328" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-f26-b)"/>
<text x="140" y="290" font-size="22" font-weight="700" text-anchor="end" fill="currentColor">+</text>
<rect x="20" y="336" width="220" height="56" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="130" y="360" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">PFK-1</text>
<text x="130" y="380" font-size="14" text-anchor="middle" fill="currentColor">glycolysis ON</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cm-f26-r')}</defs>
<rect x="330" y="20" width="210" height="46" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="435" y="49" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Glucagon (fasting)</text>
<path d="M435 66 V112" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-f26-r)"/>
<text x="424" y="88" font-size="14" text-anchor="end" fill="currentColor">PKA phosphorylates:</text>
<text x="424" y="106" font-size="14" font-weight="700" text-anchor="end" fill="currentColor">FBPase-2 side ON</text>
<path d="M320 176 L298 210" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-f26-r)"/>
<text x="326" y="200" font-size="14" font-weight="700" fill="currentColor">destroys it ↓</text>
<path d="M308 268 C 360 290, 400 306, 424 326" fill="none" stroke="currentColor" stroke-width="3.5"/>
<line x1="416" y1="336" x2="432" y2="316" stroke="currentColor" stroke-width="3.5"/>
<text x="412" y="290" font-size="22" font-weight="700" fill="currentColor">−</text>
<rect x="320" y="336" width="220" height="56" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="430" y="360" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">F1,6-bisphosphatase</text>
<text x="430" y="380" font-size="14" text-anchor="middle" fill="currentColor">gluconeogenesis OFF</text>
</g>
<rect x="120" y="118" width="320" height="58" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="280" y="142" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">bifunctional enzyme</text>
<text x="280" y="164" font-size="15" text-anchor="middle" fill="currentColor">PFK-2 / FBPase-2 (liver)</text>
<circle cx="280" cy="246" r="34" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="280" y="242" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">F2,6-</text>
<text x="280" y="260" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">BP</text>
<g class="fig-muted">
<text x="280" y="418" font-size="14" text-anchor="middle" fill="currentColor">one molecule, opposite effects — no futile cycle (AMP does the same pair)</text>
</g>
</svg>`

/* 7 — The glycogen cascade: phosphorylation = breakdown, dephosphorylation = storage (lead, 1000×460) */
const glycogenCascadeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent-2">
<defs>${ARROW('arr-cm-glyc-r')}</defs>
<rect x="30" y="50" width="240" height="60" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="150" y="75" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Glucagon (liver)</text>
<text x="150" y="98" font-size="16" text-anchor="middle" fill="currentColor">Epinephrine (muscle + liver)</text>
<line x1="272" y1="80" x2="306" y2="80" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-glyc-r)"/>
<line x1="482" y1="80" x2="516" y2="80" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-glyc-r)"/>
<line x1="612" y1="80" x2="646" y2="80" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-glyc-r)"/>
<rect x="650" y="56" width="110" height="48" rx="10" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="3.5"/>
<text x="705" y="88" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">PKA</text>
<path d="M705 104 V140 H560 V182" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-glyc-r)"/>
<path d="M705 140 H835 V182" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-glyc-r)"/>
<text x="572" y="172" font-size="15" font-weight="700" fill="currentColor">+P</text>
<text x="847" y="172" font-size="15" font-weight="700" fill="currentColor">+P</text>
<line x1="835" y1="244" x2="835" y2="284" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-glyc-r)"/>
<text x="847" y="270" font-size="15" font-weight="700" fill="currentColor">+P</text>
<text x="682" y="222" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">OFF</text>
<text x="922" y="322" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">ON</text>
<text x="970" y="410" font-size="18" font-weight="700" text-anchor="end" fill="currentColor">phosphorylation = BREAKDOWN mode</text>
<text x="835" y="376" font-size="15" text-anchor="middle" fill="currentColor">glycogen → G1P</text>
</g>
${BOX(310, 56, 170, 48, 'Gₛ → adenylyl cyclase', 14)}
${BOX(520, 56, 90, 48, 'cAMP', 18)}
<rect x="440" y="186" width="250" height="58" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="540" y="210" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Glycogen synthase</text>
<text x="548" y="232" font-size="14" text-anchor="middle" fill="currentColor">(storage enzyme)</text>
<rect x="730" y="186" width="210" height="58" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="835" y="210" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Phosphorylase kinase</text>
<text x="835" y="232" font-size="14" text-anchor="middle" fill="currentColor">(active when phosphorylated)</text>
<rect x="730" y="288" width="210" height="58" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="812" y="312" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Phosphorylase a</text>
<text x="835" y="334" font-size="14" text-anchor="middle" fill="currentColor">b → a (B6 cofactor)</text>
<g class="fig-accent">
<defs>${ARROW('arr-cm-glyc-b')}</defs>
<rect x="30" y="290" width="150" height="56" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="105" y="324" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Insulin</text>
<line x1="182" y1="318" x2="216" y2="318" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-glyc-b)"/>
<rect x="220" y="290" width="180" height="56" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="310" y="313" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">PP1 phosphatase</text>
<text x="310" y="334" font-size="14" text-anchor="middle" fill="currentColor">strips the phosphates</text>
<path d="M400 306 H490 V250" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-glyc-b)"/>
<path d="M400 330 H724" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-glyc-b)"/>
<text x="500" y="296" font-size="15" font-weight="700" fill="currentColor">−P → synthase ON</text>
<text x="560" y="354" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">−P → phosphorylase OFF</text>
<text x="30" y="410" font-size="18" font-weight="700" fill="currentColor">dephosphorylation = STORAGE mode</text>
</g>
<g class="fig-muted">
<text x="500" y="446" font-size="15" text-anchor="middle" fill="currentColor">muscle shortcuts, no hormone needed: Ca²⁺ activates phosphorylase kinase, AMP activates phosphorylase directly</text>
</g>
</svg>`

/* 8 — The pentose phosphate pathway: two phases, two independent products (replace-table, 560×440) */
const pppSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${BOX(50, 24, 180, 44, 'G6P', 19)}
<g class="fig-accent-2">
<defs>${ARROW('arr-cm-ppp-r')}</defs>
<line x1="140" y1="68" x2="140" y2="146" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-ppp-r)"/>
<text x="152" y="94" font-size="16" font-weight="700" fill="currentColor">G6PD</text>
<text x="152" y="112" font-size="13" fill="currentColor">rate-limiting</text>
<text x="152" y="130" font-size="13" fill="currentColor">irreversible; NADPH ⊣</text>
<text x="30" y="110" font-size="13" font-weight="700" fill="currentColor">oxidative</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-cm-ppp-b')}</defs>
<line x1="232" y1="46" x2="314" y2="46" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-ppp-b)"/>
<rect x="320" y="24" width="220" height="44" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="430" y="52" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">2 NADPH + CO₂</text>
<text x="300" y="100" font-size="14" font-weight="700" fill="currentColor">NADPH jobs:</text>
<text x="300" y="120" font-size="14" fill="currentColor">fatty acid &amp; cholesterol synthesis</text>
<text x="300" y="138" font-size="14" fill="currentColor">respiratory burst, cytochrome P450</text>
<text x="300" y="156" font-size="14" font-weight="700" fill="currentColor">reducing glutathione (RBC)</text>
</g>
${BOX(50, 150, 180, 44, 'Ribulose-5-P', 18)}
<g class="fig-muted">
<defs>${ARROW('arr-cm-ppp-m')}</defs>
<line x1="140" y1="194" x2="140" y2="258" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cm-ppp-m)"/>
<text x="128" y="232" font-size="14" text-anchor="end" fill="currentColor">isomerase</text>
<line x1="238" y1="284" x2="332" y2="284" stroke="currentColor" stroke-width="3" marker-start="url(#arr-cm-ppp-m)" marker-end="url(#arr-cm-ppp-m)"/>
<text x="285" y="232" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">nonoxidative (reversible)</text>
<text x="285" y="250" font-size="13" text-anchor="middle" fill="currentColor">transketolase (TPP, B1) + transaldolase</text>
<text x="435" y="340" font-size="14" text-anchor="middle" fill="currentColor">glycolysis intermediates</text>
<text x="280" y="386" font-size="14" text-anchor="middle" fill="currentColor">cytosolic; no ATP made or used</text>
<text x="280" y="408" font-size="14" text-anchor="middle" fill="currentColor">NADPH only? run the oxidative phase.</text>
<text x="280" y="428" font-size="14" text-anchor="middle" fill="currentColor">ribose only? run the nonoxidative phase backward.</text>
</g>
${BOX(50, 262, 180, 44, 'Ribose-5-P', 18)}
${BOX(340, 262, 190, 44, 'F6P + G3P', 18)}
<text x="140" y="340" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">→ nucleotides</text>
<text x="140" y="358" font-size="13" text-anchor="middle" fill="currentColor">DNA, RNA, ATP, NAD⁺</text>
</svg>`

/* 9 — The beta-cell glucose sensor, step by step (lead, 1000×460) */
const betaCellSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cm-beta')}</defs>
<g class="fig-muted">
<rect x="170" y="70" width="810" height="340" rx="40" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="3"/>
<text x="200" y="100" font-size="18" fill="currentColor">pancreatic β cell</text>
<text x="140" y="252" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">GLUT2</text>
<text x="140" y="270" font-size="13" text-anchor="middle" fill="currentColor">high Kₘ: uptake</text>
<text x="140" y="286" font-size="13" text-anchor="middle" fill="currentColor">tracks blood glucose</text>
</g>
<rect x="160" y="166" width="20" height="24" rx="4" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<rect x="160" y="210" width="20" height="24" rx="4" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<text x="80" y="195" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">Glucose</text>
<text x="80" y="217" font-size="15" text-anchor="middle" fill="currentColor">in blood ↑</text>
<line x1="124" y1="200" x2="208" y2="200" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-beta)"/>
<rect x="215" y="172" width="180" height="58" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="305" y="196" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Glucokinase</text>
<text x="305" y="218" font-size="13" text-anchor="middle" fill="currentColor">high Kₘ, no product inhibition</text>
${NUM(222, 172, '1')}
<line x1="397" y1="200" x2="428" y2="200" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-beta)"/>
<rect x="435" y="172" width="200" height="58" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="535" y="196" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">glycolysis + oxidation</text>
<text x="535" y="218" font-size="15" text-anchor="middle" fill="currentColor">ATP / ADP rises</text>
${NUM(442, 172, '2')}
<line x1="637" y1="200" x2="668" y2="200" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-beta)"/>
<rect x="675" y="172" width="190" height="58" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="770" y="196" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">K-ATP channel</text>
<text x="770" y="218" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">CLOSES (K⁺ stays in)</text>
${NUM(682, 172, '3')}
<g class="fig-accent-2">
<text x="770" y="40" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">sulfonylurea drugs</text>
<text x="770" y="58" font-size="14" text-anchor="middle" fill="currentColor">close K-ATP directly — insulin without glucose</text>
<line x1="770" y1="66" x2="770" y2="168" stroke="currentColor" stroke-width="3"/>
<line x1="756" y1="168" x2="784" y2="168" stroke="currentColor" stroke-width="3.5"/>
</g>
<line x1="770" y1="232" x2="770" y2="262" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-beta)"/>
<rect x="675" y="268" width="190" height="58" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="770" y="292" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">membrane</text>
<text x="770" y="314" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">depolarizes</text>
${NUM(682, 268, '4')}
<line x1="673" y1="297" x2="642" y2="297" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-beta)"/>
<rect x="435" y="268" width="200" height="58" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="535" y="292" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">voltage-gated Ca²⁺</text>
<text x="535" y="314" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">channels open: Ca²⁺ in</text>
${NUM(442, 268, '5')}
<line x1="433" y1="297" x2="402" y2="297" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-beta)"/>
<rect x="215" y="268" width="180" height="58" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="305" y="292" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">insulin granules</text>
<text x="305" y="314" font-size="15" text-anchor="middle" fill="currentColor">exocytose</text>
${NUM(222, 268, '6')}
<g class="fig-accent">
<defs>${ARROW('arr-cm-beta-b')}</defs>
<line x1="305" y1="328" x2="305" y2="430" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cm-beta-b)"/>
<text x="322" y="428" font-size="18" font-weight="700" fill="currentColor">Insulin → blood</text>
<text x="322" y="450" font-size="15" fill="currentColor">proportional to blood glucose, because nothing upstream saturates</text>
</g>
<g class="fig-muted">
<circle cx="900" cy="330" r="8" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
<circle cx="925" cy="352" r="8" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
<circle cx="893" cy="368" r="8" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
<text x="910" y="396" font-size="13" text-anchor="middle" fill="currentColor">granules</text>
</g>
</svg>`

export const mcatCarbMetabolismFigures: DeckFigurePlacement[] = [
  {
    at: 'The Big Picture',
    mode: 'lead',
    figure: {
      svg: glycolysisSvg,
      alt:
        'Glycolysis drawn as two rows of boxes. Investment phase: Glucose → G6P (hexokinase or glucokinase, ATP spent) → F6P (isomerase) → F1,6-BP (PFK-1, rate-limiting, ATP spent) → DHAP ⇄ G3P (aldolase, TPI). A dashed connector notes the six-carbon sugar splits into two three-carbon halves, so the payoff row happens twice: G3P → 1,3-BPG (GAPDH, NAD⁺ → NADH, the only oxidation) → 3-PG (PGK, ADP → ATP, substrate-level) → 2-PG (mutase) → PEP (enolase) → pyruvate (pyruvate kinase, ADP → ATP, substrate-level). The three irreversible, regulated steps (hexokinase, PFK-1, pyruvate kinase) are drawn in red. Net per glucose: 2 ATP, 2 NADH, 2 pyruvate; cytosol, no oxygen needed.',
      caption: 'Glycolysis: two ATP invested, four ATP and two NADH earned across the doubled payoff row; red arrows mark the three irreversible, regulated steps.',
    },
    blocks: [
      '- **Investment** (2 ATP in) then **payoff** (4 ATP + 2 NADH out, because both triose halves run) → net **2 ATP + 2 NADH** per glucose',
      '- Cytosol, no O₂ required; GAPDH is the lone oxidation, PGK and pyruvate kinase the substrate-level phosphorylations',
    ],
  },
  {
    at: 'The Three Irreversible (Regulated) Steps',
    mode: 'replace-table',
    figure: {
      svg: regulatedStepsSvg,
      alt:
        'Three enzyme boxes stacked in pathway order with activators on the left in blue and inhibitors on the right in red. Hexokinase / glucokinase (glucose → G6P): inhibited by its product G6P (hexokinase only); insulin induces glucokinase in liver. PFK-1 (F6P → F1,6-BP), outlined in red as the rate-limiting, first committed step: activated by AMP and by fructose-2,6-bisphosphate (the strongest activator, raised by insulin); inhibited by ATP and citrate. Pyruvate kinase (PEP → pyruvate): activated feed-forward by F1,6-BP; inhibited by ATP and alanine, and in liver switched off when glucagon-driven PKA phosphorylates it.',
      caption: 'The three control points of glycolysis: energy-rich signals (ATP, citrate) brake, energy-poor signals (AMP) and the insulin signal (F2,6-BP) accelerate.',
    },
    blocks: [
      '- **Hexokinase** is inhibited by its own product G6P; liver **glucokinase** is a high-$K_m$ sensor, induced by insulin',
      '- **PFK-1** is rate-limiting: ATP, citrate ⊣; AMP, **F2,6-BP** +',
      '- **Pyruvate kinase**: F1,6-BP feeds forward; ATP, alanine ⊣; glucagon → PKA phosphorylates liver PK OFF',
    ],
  },
  {
    at: 'Fates of Pyruvate',
    mode: 'replace-table',
    figure: {
      svg: pyruvateFatesSvg,
      alt:
        'A fork. Glycolysis delivers pyruvate, with the note that GAPDH needs NAD⁺ to keep running. Three exits: left, in blue, LDH turns pyruvate to lactate while oxidizing NADH to NAD⁺ (anaerobic: muscle, red blood cells); centre, in red, PDH turns pyruvate to acetyl-CoA in mitochondria with oxygen, releasing CO₂ and making NADH, leading to the TCA cycle and full oxidation; right, in blue, yeast make ethanol plus CO₂, again oxidizing NADH to NAD⁺ (fermentation). A blue banner states that the blue exits make no ATP; they regenerate NAD⁺ so glycolysis can continue.',
      caption: 'Pyruvate’s three exits: only the aerobic route extracts more energy; lactate and ethanol exist to regenerate NAD⁺.',
    },
    blocks: [
      '- **Aerobic:** PDH → acetyl-CoA → TCA, full oxidation',
      '- **Anaerobic (muscle, RBC):** LDH → lactate — **regenerates NAD⁺** so glycolysis continues',
      '- **Yeast:** ethanol + CO₂, same NAD⁺ logic',
      '- **RBCs** have no mitochondria: lactate is their only route, 100% of the time; they also run the 2,3-BPG shunt',
    ],
  },
  {
    at: 'Why a Separate Pathway?',
    mode: 'lead',
    figure: {
      svg: bypassSvg,
      alt:
        'A row of shared intermediates — Glucose, G6P, F6P, F1,6-BP, six shared reversible steps, PEP, Pyruvate. Above the row, blue arrows run left to right for glycolysis: hexokinase / glucokinase, isomerase, PFK-1 (rate-limiting), and pyruvate kinase. Below the row, red arrows run right to left for gluconeogenesis and bypass the irreversible steps: pyruvate goes down to oxaloacetate by pyruvate carboxylase (mitochondrial, biotin and ATP, needs acetyl-CoA; OAA leaves the matrix as malate), then PEPCK (GTP, releases CO₂) makes PEP; fructose-1,6-bisphosphatase (rate-limiting, inhibited by AMP and F2,6-BP) replaces PFK-1; glucose-6-phosphatase (ER lumen, liver and kidney only, muscle lacks it) replaces hexokinase. Footer: four bypass enzymes, six ATP-equivalents per glucose.',
      caption: 'Gluconeogenesis is not glycolysis in reverse: the three irreversible steps are bypassed by four dedicated enzymes (red), the other six steps are shared.',
    },
    blocks: [
      '- Three irreversible glycolytic steps → **four** bypass enzymes: pyruvate carboxylase + PEPCK, F1,6-bisphosphatase, glucose-6-phosphatase',
      '- Liver (and kidney cortex) only — muscle lacks G6Pase, so muscle glycogen can never export glucose',
    ],
  },
  {
    at: 'The Substrates',
    mode: 'lead',
    figure: {
      svg: coriSvg,
      alt:
        'The Cori cycle as a loop between two tissues. Left box, exercising muscle or red blood cells (anaerobic): glucose → two lactate by glycolysis, gaining 2 ATP; LDH regenerates NAD⁺ here. Lactate is exported through the blood (red arrow) to the right box, the liver, which has the four bypass enzymes: two lactate → glucose by gluconeogenesis, costing 6 ATP (4 ATP + 2 GTP), and glucose is shipped back through the blood (blue arrow). Centre: net, muscle gains 2 ATP, liver pays 6; the burden moves, no energy is created. Footer: the glucose–alanine cycle is the same loop with alanine as the carrier, so muscle nitrogen rides along.',
      caption: 'The Cori cycle: anaerobic tissues export lactate, the liver spends 6 ATP-equivalents to turn it back into glucose — the energy bill moves to the liver.',
    },
    blocks: [
      '- Lactate (Cori cycle) and alanine (glucose–alanine cycle) carry carbon from muscle to liver; glycerol enters as DHAP; odd-chain fats arrive as propionyl-CoA → succinyl-CoA',
      '- **Never acetyl-CoA:** PDH is irreversible and the TCA cycle loses 2 CO₂ per turn, so even-chain fat gives no net glucose',
    ],
  },
  {
    at: 'Reciprocal Regulation: One Signal, Opposite Effects',
    mode: 'replace-table',
    figure: {
      svg: f26bpSvg,
      alt:
        'The fructose-2,6-bisphosphate switch. Top left, blue: insulin (fed) leaves the liver’s bifunctional PFK-2 / FBPase-2 enzyme dephosphorylated, so the PFK-2 side is on and F2,6-BP is made. Top right, red: glucagon (fasting) acts through PKA, which phosphorylates the bifunctional enzyme, turning the FBPase-2 side on and destroying F2,6-BP. From the F2,6-BP circle in the centre, a blue plus arrow activates PFK-1 (glycolysis on) and a red bar inhibits fructose-1,6-bisphosphatase (gluconeogenesis off). Footer: one molecule, opposite effects, no futile cycle; AMP does the same pair.',
      caption: 'F2,6-BP is the fed/fasting toggle: insulin raises it, glucagon destroys it, and it pushes glycolysis and gluconeogenesis in opposite directions at once.',
    },
    blocks: [
      '- **Insulin** → F2,6-BP ↑ → PFK-1 on, F1,6-BPase off; **glucagon** (PKA) → F2,6-BP ↓ and liver pyruvate kinase phosphorylated OFF, PEPCK induced',
      '- **AMP** gives the same pair: + PFK-1, ⊣ F1,6-BPase',
      '- **Acetyl-CoA** (fat burning): PDH ⊣, pyruvate carboxylase + — "stop oxidizing pyruvate, start carboxylating it"',
    ],
  },
  {
    at: 'Hormonal Control — The Same Cascade, Opposite Enzymes',
    mode: 'lead',
    figure: {
      svg: glycogenCascadeSvg,
      alt:
        'The glycogen cascade. Top row, red: glucagon (liver) or epinephrine (muscle and liver) → Gs → adenylyl cyclase → cAMP → PKA. PKA adds phosphate to two targets: glycogen synthase (the storage enzyme) is switched OFF, and phosphorylase kinase is activated, which in turn phosphorylates glycogen phosphorylase b to a (ON, B6 cofactor), releasing G1P from glycogen. Bottom left, blue: insulin activates PP1 phosphatase, which strips the phosphates: synthase ON, phosphorylase OFF. Red label: phosphorylation = breakdown mode; blue label: dephosphorylation = storage mode. Footer: muscle shortcuts without hormones — Ca²⁺ activates phosphorylase kinase, AMP activates phosphorylase directly.',
      caption: 'One cAMP/PKA cascade flips both glycogen enzymes in opposite directions; insulin’s phosphatase PP1 flips them back.',
    },
    blocks: [
      '- **Phosphorylation = breakdown:** PKA turns phosphorylase ON (via phosphorylase kinase) and synthase OFF in one stroke',
      '- **Insulin → PP1** strips the phosphates: synthase ON, phosphorylase OFF; muscle adds Ca²⁺ and AMP shortcuts',
    ],
  },
  {
    at: 'The Pentose Phosphate Pathway (HMP Shunt)',
    mode: 'replace-table',
    figure: {
      svg: pppSvg,
      alt:
        'A vertical pathway. G6P → ribulose-5-P by G6PD (red: rate-limiting, irreversible, feedback-inhibited by NADPH); a blue branch shows the oxidative products 2 NADPH + CO₂, with NADPH jobs listed: fatty acid and cholesterol synthesis, respiratory burst, cytochrome P450, and reducing glutathione (the red blood cell’s shield). Ribulose-5-P → ribose-5-P by an isomerase, feeding nucleotides (DNA, RNA, ATP, NAD⁺). A grey double arrow links ribose-5-P with F6P + G3P, the glycolysis intermediates, through the reversible nonoxidative phase (transketolase, needing TPP from vitamin B1, and transaldolase). Footer: cytosolic, no ATP made or used; need NADPH only, run the oxidative phase; need ribose only, run the nonoxidative phase backward.',
      caption: 'The pentose phosphate pathway: an irreversible oxidative phase that makes NADPH, and a reversible nonoxidative phase that lets ribose-5-P be made or recycled independently.',
    },
    blocks: [
      '- **Oxidative (irreversible):** G6PD, rate-limiting, NADPH ⊣ → **2 NADPH** + CO₂ + ribulose-5-P',
      '- **Nonoxidative (reversible):** transketolase (TPP / B1) + transaldolase → **ribose-5-P**, or back to F6P / G3P',
      '- NADPH jobs: fatty-acid & cholesterol synthesis, respiratory burst, P450, **glutathione reduction** (RBC)',
      '- Cytosolic, no ATP made or used — the two products are dialled independently',
    ],
  },
  {
    at: 'Beta-Cell Glucose Sensing (A Favorite Passage)',
    mode: 'lead',
    figure: {
      svg: betaCellSvg,
      alt:
        'A schematic pancreatic beta cell with six numbered steps. Glucose in the blood rises and enters through GLUT2 (high Km, so flux tracks blood glucose). 1 Glucokinase (high Km, no product inhibition) phosphorylates it. 2 Glycolysis and oxidation raise the ATP/ADP ratio. 3 ATP-sensitive K⁺ (K-ATP) channels close, so K⁺ stays in. 4 The membrane depolarizes. 5 Voltage-gated Ca²⁺ channels open and Ca²⁺ enters. 6 Insulin granules exocytose; insulin goes to the blood in proportion to blood glucose, because nothing upstream saturates. In red, sulfonylurea drugs close the K-ATP channel directly, releasing insulin without a glucose signal.',
      caption: 'The beta-cell glucostat: high-Kₘ GLUT2 and glucokinase keep ATP, and therefore insulin release, proportional to blood glucose; sulfonylureas enter the chain at the K$_{ATP}$ channel.',
    },
    blocks: [
      '- GLUT2 → glucokinase → ATP/ADP ↑ → **K$_{ATP}$ closes** → depolarization → **Ca²⁺ in** → insulin exocytosis',
      '- Both sensor components are high-$K_m$ so they never saturate; **sulfonylureas** close K$_{ATP}$ directly',
    ],
  },
]
