import type { DeckFigurePlacement } from './index'

/**
 * Cardiovascular System (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept (a box heart, a
 * pressure–time trace, an ECG, a pressure/area/velocity strip, a Starling
 * curve, a capillary, a feedback loop, a PV loop) — no textbook,
 * prep-company or AAMC figure was copied. Curves are the textbook SHAPE and
 * say "illustrative" in the caption; the only numbers plotted are the ones
 * the lesson states (EDV ≈ 120, ESV ≈ 50, MAP ~93 → 35 → 15 → 0, P_c 35/15,
 * π_c ≈ 25). Anatomy is schematic only: the heart is four labelled boxes.
 *
 * Blood colour follows the universal convention — oxygenated RED
 * (fig-accent-2), deoxygenated BLUE (fig-accent) — so the pulmonary artery is
 * blue and the aorta red, exactly the trap the lesson teaches.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-cv-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

/* 1 — Two circuits, one pump: the heart as four boxes (replace-table, 560×440) */
const circuitsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<rect x="140" y="124" width="290" height="208" rx="28" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<text x="152" y="118" font-size="14" fill="currentColor">heart</text>
<text x="210" y="318" font-size="13" text-anchor="middle" fill="currentColor">peak ~25 mmHg</text>
<text x="360" y="318" font-size="13" text-anchor="middle" fill="currentColor">peak ~120 mmHg</text>
</g>
<rect x="40" y="18" width="200" height="46" rx="23" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="140" y="47" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">Lungs</text>
<rect x="300" y="386" width="220" height="46" rx="23" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="410" y="408" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Body</text>
<text x="410" y="425" font-size="13" text-anchor="middle" fill="currentColor">organs in parallel</text>
<rect x="160" y="150" width="100" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="210" y="176" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">RA</text>
<text x="210" y="198" font-size="13" text-anchor="middle" fill="currentColor">right atrium</text>
<rect x="160" y="240" width="100" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="210" y="266" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">RV</text>
<text x="210" y="288" font-size="13" text-anchor="middle" fill="currentColor">right ventricle</text>
<rect x="310" y="150" width="100" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="360" y="176" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">LA</text>
<text x="360" y="198" font-size="13" text-anchor="middle" fill="currentColor">left atrium</text>
<rect x="310" y="240" width="100" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="6"/>
<text x="360" y="266" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">LV</text>
<text x="360" y="288" font-size="13" text-anchor="middle" fill="currentColor">thickest wall</text>
<g class="fig-accent">
<defs>${ARROW('arr-cv-circ-b')}</defs>
<path d="M300 408 L285 408 L285 180 L266 180" fill="none" stroke="currentColor" stroke-width="4" marker-end="url(#arr-cv-circ-b)"/>
<text x="273" y="350" font-size="14" text-anchor="middle" fill="currentColor" transform="rotate(-90 273 350)">venae cavae</text>
<line x1="210" y1="212" x2="210" y2="234" stroke="currentColor" stroke-width="4" marker-end="url(#arr-cv-circ-b)"/>
<path d="M160 270 L104 270 L104 70" fill="none" stroke="currentColor" stroke-width="4" marker-end="url(#arr-cv-circ-b)"/>
<text x="90" y="178" font-size="15" text-anchor="middle" fill="currentColor" transform="rotate(-90 90 178)">pulmonary artery</text>
<line x1="24" y1="352" x2="54" y2="352" stroke="currentColor" stroke-width="4"/>
<text x="62" y="357" font-size="15" fill="currentColor">deoxygenated</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-cv-circ-r')}</defs>
<path d="M240 42 L360 42 L360 146" fill="none" stroke="currentColor" stroke-width="4" marker-end="url(#arr-cv-circ-r)"/>
<text x="372" y="100" font-size="15" fill="currentColor">pulmonary</text>
<text x="372" y="118" font-size="15" fill="currentColor">veins</text>
<line x1="360" y1="212" x2="360" y2="234" stroke="currentColor" stroke-width="4" marker-end="url(#arr-cv-circ-r)"/>
<path d="M410 270 L470 270 L470 382" fill="none" stroke="currentColor" stroke-width="4" marker-end="url(#arr-cv-circ-r)"/>
<text x="482" y="332" font-size="15" fill="currentColor">aorta</text>
<line x1="24" y1="376" x2="54" y2="376" stroke="currentColor" stroke-width="4"/>
<text x="62" y="381" font-size="15" fill="currentColor">oxygenated</text>
</g>
<text x="24" y="412" font-size="13" fill="currentColor">artery = AWAY from the heart,</text>
<text x="24" y="428" font-size="13" fill="currentColor">whatever the O₂ content</text>
</svg>`

/* 2 — The cardiac cycle as pressure against time, with the valve events (lead, 1000×460) */
const cycleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cv-cycle')}</defs>
<line x1="80" y1="380" x2="965" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cv-cycle)"/>
<line x1="80" y1="380" x2="80" y2="30" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cv-cycle)"/>
<text x="18" y="44" font-size="18" fill="currentColor">mmHg</text>
<text x="72" y="66" font-size="17" text-anchor="end" fill="currentColor">120</text>
<text x="72" y="173" font-size="17" text-anchor="end" fill="currentColor">80</text>
<text x="72" y="386" font-size="17" text-anchor="end" fill="currentColor">0</text>
<g class="fig-muted">
<rect x="200" y="56" width="300" height="324" fill="currentColor" fill-opacity="0.07"/>
<line x1="200" y1="56" x2="200" y2="380" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="250" y1="56" x2="250" y2="380" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="500" y1="56" x2="500" y2="380" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="560" y1="56" x2="560" y2="380" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<path d="M100 360 C 130 360, 150 346, 170 346 C 190 346, 200 360, 240 360 L 420 360 C 460 360, 480 350, 500 350 C 530 350, 545 362, 570 362 L 900 360" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 5"/>
<text x="700" y="347" font-size="17" fill="currentColor">left atrium</text>
<text x="350" y="404" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">ventricular systole</text>
<text x="730" y="404" font-size="19" text-anchor="middle" fill="currentColor">diastole</text>
<text x="150" y="404" font-size="19" text-anchor="middle" fill="currentColor">diastole</text>
</g>
<g class="fig-accent-2">
<path d="M100 167 C 140 172, 180 180, 250 183 C 280 110, 320 60, 340 60 C 380 60, 450 90, 500 113 C 506 122, 510 108, 516 116 C 600 140, 800 160, 900 170" fill="none" stroke="currentColor" stroke-width="3.5"/>
<text x="908" y="176" font-size="18" font-weight="700" fill="currentColor">aorta</text>
</g>
<path d="M100 367 C 140 367, 170 360, 200 359 C 220 320, 236 240, 250 183 C 270 110, 310 60, 340 60 C 380 60, 450 90, 500 113 C 520 180, 540 300, 560 367 C 600 376, 700 372, 900 367" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="908" y="373" font-size="18" font-weight="700" fill="currentColor">LV</text>
<text x="194" y="236" font-size="17" text-anchor="end" fill="currentColor">AV valves close</text>
<text x="194" y="258" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">S1</text>
<text x="256" y="236" font-size="17" fill="currentColor">semilunar valves</text>
<text x="256" y="258" font-size="17" fill="currentColor">open</text>
<text x="494" y="300" font-size="17" text-anchor="end" fill="currentColor">semilunar valves close</text>
<text x="494" y="322" font-size="17" font-weight="700" text-anchor="end" fill="currentColor">S2</text>
<text x="566" y="236" font-size="17" fill="currentColor">AV valves open</text>
${NUM(150, 36, '1')}
${NUM(225, 36, '2')}
${NUM(375, 36, '3')}
${NUM(530, 36, '4')}
${NUM(730, 36, '5')}
<text x="520" y="446" font-size="19" text-anchor="middle" fill="currentColor">1 atrial systole · 2 isovolumetric contraction · 3 ejection · 4 isovolumetric relaxation · 5 passive filling</text>
</svg>`

/* 3 — The conduction system on the box heart, with autonomic modulation (lead, 1000×460) */
const conductionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<rect x="120" y="80" width="180" height="130" rx="14" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="320" y="80" width="180" height="130" rx="14" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="120" y="240" width="180" height="160" rx="14" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="320" y="240" width="180" height="160" rx="14" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="120" y="214" width="380" height="22" fill="currentColor" fill-opacity="0.18"/>
<text x="130" y="230" font-size="14" fill="currentColor">fibrous skeleton</text>
<text x="372" y="230" font-size="14" fill="currentColor">insulates</text>
<text x="290" y="200" font-size="18" text-anchor="end" fill="currentColor">RA</text>
<text x="490" y="200" font-size="18" text-anchor="end" fill="currentColor">LA</text>
<text x="134" y="390" font-size="18" fill="currentColor">RV</text>
<text x="490" y="390" font-size="18" text-anchor="end" fill="currentColor">LV</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-cv-cond-b')}</defs>
<circle cx="150" cy="98" r="9" fill="currentColor"/>
<line x1="158" y1="108" x2="228" y2="194" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cv-cond-b)"/>
<line x1="160" y1="100" x2="458" y2="134" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cv-cond-b)"/>
<line x1="148" y1="110" x2="148" y2="194" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cv-cond-b)"/>
<circle cx="310" cy="225" r="8" fill="currentColor"/>
<line x1="310" y1="233" x2="310" y2="296" stroke="currentColor" stroke-width="4"/>
<path d="M310 296 L296 296 L296 386" fill="none" stroke="currentColor" stroke-width="4"/>
<path d="M310 296 L324 296 L324 386" fill="none" stroke="currentColor" stroke-width="4"/>
<path d="M296 386 C 250 390, 170 360, 140 300" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cv-cond-b)"/>
<path d="M296 386 C 270 370, 230 330, 220 272" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cv-cond-b)"/>
<path d="M324 386 C 380 390, 460 360, 480 300" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cv-cond-b)"/>
<path d="M324 386 C 350 370, 400 330, 410 272" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cv-cond-b)"/>
</g>
${NUM(178, 98, '1')}
${NUM(250, 164, '2')}
${NUM(342, 225, '3')}
${NUM(354, 310, '4')}
${NUM(310, 428, '5')}
${NUM(575, 70, '1')}
<text x="596" y="77" font-size="19" fill="currentColor"><tspan font-weight="700">SA node</tspan> — pacemaker, ~100 bpm, myogenic</text>
${NUM(575, 110, '2')}
<text x="596" y="117" font-size="19" fill="currentColor"><tspan font-weight="700">atrial muscle</tspan> — spreads via gap junctions</text>
${NUM(575, 150, '3')}
<text x="596" y="157" font-size="19" fill="currentColor"><tspan font-weight="700">AV node</tspan> — ~0.1 s delay; the only path down</text>
${NUM(575, 190, '4')}
<text x="596" y="197" font-size="19" fill="currentColor"><tspan font-weight="700">bundle of His</tspan> → bundle branches (septum)</text>
${NUM(575, 230, '5')}
<text x="596" y="237" font-size="19" fill="currentColor"><tspan font-weight="700">Purkinje fibers</tspan> — ventricles, apex first</text>
<text x="562" y="300" font-size="19" font-weight="700" fill="currentColor">Nerves only modulate the rate:</text>
<g class="fig-accent-2"><text x="562" y="336" font-size="19" fill="currentColor"><tspan font-weight="700">sympathetic</tspan> — NE on β₁: faster, stronger</text></g>
<text x="562" y="372" font-size="19" fill="currentColor"><tspan font-weight="700">parasympathetic</tspan> (vagus) — ACh: slower</text>
<g class="fig-muted"><text x="562" y="408" font-size="18" fill="currentColor">resting vagal tone → HR ~70, below the SA node's 100</text></g>
</svg>`

/* 4 — One ECG beat with P, QRS and T labelled (replace-table, 560×440) */
const ecgSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<line x1="30" y1="250" x2="540" y2="250" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 6"/>
<text x="540" y="432" font-size="15" text-anchor="end" fill="currentColor">time →</text>
<line x1="110" y1="300" x2="215" y2="300" stroke="currentColor" stroke-width="2"/>
<line x1="110" y1="292" x2="110" y2="308" stroke="currentColor" stroke-width="2"/>
<line x1="215" y1="292" x2="215" y2="308" stroke="currentColor" stroke-width="2"/>
<text x="162" y="326" font-size="15" text-anchor="middle" fill="currentColor">PR interval</text>
<text x="162" y="344" font-size="14" text-anchor="middle" fill="currentColor">the AV-node delay</text>
<text x="272" y="284" font-size="15" font-weight="700" fill="currentColor">S1</text>
<text x="396" y="284" font-size="15" font-weight="700" fill="currentColor">S2</text>
</g>
<path d="M30 250 L110 250 C 125 250, 130 225, 140 225 C 150 225, 155 250, 170 250 L 215 250 L 221 262 L 230 70 L 245 290 L 255 250 L 300 250 C 315 250, 325 205, 340 205 C 355 205, 365 250, 380 250 L 540 250" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/>
<g class="fig-accent">
<text x="140" y="186" font-size="15" text-anchor="middle" fill="currentColor">atrial depolarization</text>
<text x="140" y="212" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">P</text>
</g>
<g class="fig-accent-2">
<text x="232" y="34" font-size="15" text-anchor="middle" fill="currentColor">ventricular depolarization</text>
<text x="232" y="58" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">QRS</text>
<text x="340" y="168" font-size="15" text-anchor="middle" fill="currentColor">ventricular repolarization</text>
<text x="340" y="192" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">T</text>
</g>
<text x="290" y="384" font-size="15" text-anchor="middle" fill="currentColor">atrial repolarization is hidden inside the QRS</text>
<text x="290" y="410" font-size="15" text-anchor="middle" fill="currentColor">electrical first, mechanical next: QRS → LV pressure rises → S1</text>
</svg>`

/* 5 — Pressure, total cross-sectional area and velocity along the vessel series (lead, 1000×460) */
const vesselsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<text x="560" y="30" font-size="18" text-anchor="middle" fill="currentColor">flow Q is the same through every segment in series — what changes is pressure, area and speed</text>
<line x1="150" y1="190" x2="960" y2="190" stroke="currentColor" stroke-width="1.5"/>
<line x1="150" y1="310" x2="960" y2="310" stroke="currentColor" stroke-width="1.5"/>
<line x1="150" y1="400" x2="960" y2="400" stroke="currentColor" stroke-width="1.5"/>
<text x="200" y="440" font-size="19" text-anchor="middle" fill="currentColor">aorta</text>
<text x="315" y="440" font-size="19" text-anchor="middle" fill="currentColor">arteries</text>
<text x="430" y="440" font-size="19" text-anchor="middle" fill="currentColor">arterioles</text>
<text x="545" y="440" font-size="19" text-anchor="middle" fill="currentColor">capillaries</text>
<text x="660" y="440" font-size="19" text-anchor="middle" fill="currentColor">venules</text>
<text x="775" y="440" font-size="19" text-anchor="middle" fill="currentColor">veins</text>
<text x="890" y="440" font-size="19" text-anchor="middle" fill="currentColor">venae cavae</text>
</g>
<text x="136" y="116" font-size="18" text-anchor="end" fill="currentColor">pressure</text>
<text x="136" y="138" font-size="16" text-anchor="end" fill="currentColor">(mmHg)</text>
<text x="136" y="256" font-size="18" text-anchor="end" fill="currentColor">total cross-</text>
<text x="136" y="278" font-size="18" text-anchor="end" fill="currentColor">sectional area</text>
<text x="136" y="366" font-size="18" text-anchor="end" fill="currentColor">velocity</text>
<g class="fig-accent-2">
<path d="M200 69 L315 73 C 370 76, 390 120, 430 144 C 470 160, 510 168, 545 170 C 590 174, 620 177, 660 177 C 700 180, 740 184, 775 184 C 820 186, 860 189, 890 190" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="200" y="58" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">MAP ~93</text>
<text x="448" y="118" font-size="17" font-weight="700" fill="currentColor">largest drop — the resistance vessels</text>
<text x="430" y="166" font-size="16" text-anchor="end" fill="currentColor">~35</text>
<text x="540" y="164" font-size="16" text-anchor="end" fill="currentColor">~15</text>
<text x="904" y="186" font-size="16" fill="currentColor">~0 at RA</text>
</g>
<rect x="165" y="304" width="70" height="6" fill="currentColor" fill-opacity="0.45"/>
<rect x="280" y="300" width="70" height="10" fill="currentColor" fill-opacity="0.45"/>
<rect x="395" y="286" width="70" height="24" fill="currentColor" fill-opacity="0.45"/>
<rect x="510" y="222" width="70" height="88" fill="currentColor" fill-opacity="0.45"/>
<rect x="625" y="270" width="70" height="40" fill="currentColor" fill-opacity="0.45"/>
<rect x="740" y="290" width="70" height="20" fill="currentColor" fill-opacity="0.45"/>
<rect x="855" y="302" width="70" height="8" fill="currentColor" fill-opacity="0.45"/>
<text x="545" y="214" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">largest total area</text>
<g class="fig-muted"><text x="960" y="262" font-size="15" text-anchor="end" fill="currentColor">veins hold ~60–70% of blood volume (capacitance)</text></g>
<g class="fig-accent">
<path d="M200 330 L315 340 C 360 346, 400 366, 430 376 C 470 388, 510 396, 545 397 C 590 396, 620 388, 660 384 C 700 378, 740 366, 775 360 C 820 354, 860 350, 890 348" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="214" y="324" font-size="16" fill="currentColor">~30 cm/s</text>
<text x="545" y="416" font-size="15" text-anchor="middle" fill="currentColor">~0.03 cm/s — slowest, most time to exchange</text>
<text x="900" y="366" font-size="16" text-anchor="end" fill="currentColor">speeds up again</text>
</g>
</svg>`

/* 6 — Frank–Starling: stroke volume against end-diastolic volume (lead, 1000×460) */
const starlingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cv-fs')}</defs>
<line x1="100" y1="400" x2="965" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cv-fs)"/>
<line x1="100" y1="400" x2="100" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cv-fs)"/>
<text x="960" y="436" font-size="20" text-anchor="end" fill="currentColor">end-diastolic volume (preload) →</text>
<text x="46" y="220" font-size="20" text-anchor="middle" fill="currentColor" transform="rotate(-90 46 220)">stroke volume</text>
<path d="M110 392 Q 330 150, 900 150" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="880" y="140" font-size="19" font-weight="700" text-anchor="end" fill="currentColor">normal</text>
<circle cx="342" cy="237" r="8" fill="currentColor"/>
<circle cx="590" cy="172" r="8" fill="currentColor"/>
<text x="330" y="270" font-size="19" font-weight="700" text-anchor="end" fill="currentColor">A</text>
<text x="604" y="206" font-size="19" font-weight="700" fill="currentColor">B</text>
<path d="M372 260 C 450 250, 520 225, 580 196" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#arr-cv-fs)"/>
<text x="640" y="232" font-size="19" font-weight="700" fill="currentColor">A → B: more preload</text>
<text x="640" y="256" font-size="18" fill="currentColor">(venous return, saline)</text>
<text x="640" y="280" font-size="18" fill="currentColor">moves ALONG the same curve</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-cv-fs-r')}</defs>
<path d="M110 392 Q 260 70, 900 80" fill="none" stroke="currentColor" stroke-width="4"/>
<text x="880" y="70" font-size="19" font-weight="700" text-anchor="end" fill="currentColor">↑ contractility</text>
<line x1="342" y1="224" x2="342" y2="188" stroke="currentColor" stroke-width="3" marker-end="url(#arr-cv-fs-r)"/>
<text x="200" y="128" font-size="19" font-weight="700" fill="currentColor">sympathetic NE (β₁)</text>
<text x="200" y="152" font-size="18" fill="currentColor">a NEW curve, up and left:</text>
<text x="200" y="176" font-size="18" fill="currentColor">more SV at the same EDV</text>
</g>
<g class="fig-muted">
<path d="M110 392 Q 400 320, 900 300" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="9 7"/>
<text x="880" y="334" font-size="18" text-anchor="end" fill="currentColor">↑ afterload / failing heart</text>
<text x="880" y="356" font-size="18" text-anchor="end" fill="currentColor">curve shifts down</text>
</g>
</svg>`

/* 7 — Starling forces across one capillary (replace-table, 560×440) */
const capillarySvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-cv-cap')}</defs>
<text x="280" y="38" font-size="18" text-anchor="middle" fill="currentColor">net filtration ∝ (P<tspan dy="5" font-size="13">c</tspan><tspan dy="-5"> − P</tspan><tspan dy="5" font-size="13">i</tspan><tspan dy="-5">) − (π</tspan><tspan dy="5" font-size="13">c</tspan><tspan dy="-5"> − π</tspan><tspan dy="5" font-size="13">i</tspan><tspan dy="-5">)</tspan></text>
<g class="fig-muted">
<defs>${ARROW('arr-cv-cap-m')}</defs>
<text x="280" y="64" font-size="15" text-anchor="middle" fill="currentColor">hydrostatic pushes OUT · oncotic (albumin) pulls IN</text>
<rect x="40" y="242" width="480" height="92" rx="6" fill="currentColor" fill-opacity="0.07"/>
<text x="280" y="326" font-size="14" text-anchor="middle" fill="currentColor">interstitium (P<tspan dy="4" font-size="11">i</tspan><tspan dy="-4"> ≈ 0, π</tspan><tspan dy="4" font-size="11">i</tspan><tspan dy="-4"> small)</tspan></text>
<line x1="215" y1="124" x2="345" y2="124" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cv-cap-m)"/>
<text x="280" y="114" font-size="14" text-anchor="middle" fill="currentColor">blood flow</text>
<path d="M200 372 L500 372" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#arr-cv-cap-m)"/>
<text x="350" y="398" font-size="14" text-anchor="middle" fill="currentColor">lymphatics return the ~2–4 L/day net excess</text>
</g>
<text x="110" y="150" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">arteriolar end</text>
<text x="450" y="150" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">venular end</text>
<path d="M60 170 L500 170" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M60 230 L500 230" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M60 170 C 40 170, 40 230, 60 230" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M500 170 C 520 170, 520 230, 500 230" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-cv-cap-r')}</defs>
<text x="110" y="206" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">P<tspan dy="5" font-size="12">c</tspan><tspan dy="-5"> ≈ 35</tspan></text>
<line x1="92" y1="236" x2="92" y2="276" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cv-cap-r)"/>
<line x1="128" y1="236" x2="128" y2="276" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cv-cap-r)"/>
<text x="110" y="302" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">filtration OUT</text>
</g>
<g class="fig-accent">
<text x="280" y="206" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">π<tspan dy="5" font-size="12">c</tspan><tspan dy="-5"> ≈ 25 pulls in all along</tspan></text>
<defs>${ARROW('arr-cv-cap-b')}</defs>
<line x1="432" y1="276" x2="432" y2="236" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cv-cap-b)"/>
<line x1="468" y1="276" x2="468" y2="236" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-cv-cap-b)"/>
<text x="450" y="302" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">reabsorption IN</text>
</g>
<g class="fig-accent-2"><text x="450" y="206" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">P<tspan dy="5" font-size="12">c</tspan><tspan dy="-5"> ≈ 15</tspan></text></g>
<text x="280" y="428" font-size="14" text-anchor="middle" fill="currentColor">gases and small solutes cross by diffusion — Starling forces move bulk fluid</text>
</svg>`

/* 8 — The baroreceptor reflex as a negative-feedback loop (lead, 1000×460) */
const baroSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cv-baro')}</defs>
<g class="fig-accent-2">
<rect x="60" y="60" width="220" height="56" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="170" y="96" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">MAP falls</text>
<text x="500" y="152" font-size="18" text-anchor="middle" fill="currentColor">less stretch → less firing</text>
</g>
<g class="fig-muted">
<text x="226" y="142" font-size="17" text-anchor="end" fill="currentColor">standing up, hemorrhage …</text>
<text x="500" y="438" font-size="18" text-anchor="middle" fill="currentColor">pressure rises → the mirror image · long-term control is the kidneys (blood volume: RAAS, ADH)</text>
</g>
<line x1="280" y1="88" x2="336" y2="88" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cv-baro)"/>
<rect x="340" y="50" width="320" height="76" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="81" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">baroreceptors</text>
<text x="500" y="108" font-size="18" text-anchor="middle" fill="currentColor">carotid sinus · aortic arch (stretch sensors)</text>
<line x1="660" y1="88" x2="736" y2="88" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cv-baro)"/>
<rect x="740" y="60" width="220" height="56" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="850" y="86" font-size="21" font-weight="700" text-anchor="middle" fill="currentColor">medulla</text>
<text x="850" y="108" font-size="16" text-anchor="middle" fill="currentColor">cardiovascular centers</text>
<line x1="850" y1="116" x2="850" y2="176" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cv-baro)"/>
<rect x="700" y="180" width="260" height="62" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2"><text x="830" y="206" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">↑ sympathetic</text></g>
<text x="830" y="231" font-size="18" text-anchor="middle" fill="currentColor">↓ parasympathetic (vagal)</text>
<path d="M830 242 L830 335 L684 335" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cv-baro)"/>
<rect x="320" y="280" width="360" height="110" rx="12" fill="none" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="311" font-size="19" text-anchor="middle" fill="currentColor">HR ↑, contractility ↑ → <tspan font-weight="700">CO ↑</tspan></text>
<text x="500" y="341" font-size="19" text-anchor="middle" fill="currentColor">arterioles constrict → <tspan font-weight="700">TPR ↑</tspan></text>
<text x="500" y="371" font-size="19" text-anchor="middle" fill="currentColor">veins constrict → venous return ↑</text>
<line x1="320" y1="335" x2="264" y2="335" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-cv-baro)"/>
<g class="fig-accent">
<defs>${ARROW('arr-cv-baro-b')}</defs>
<rect x="60" y="300" width="200" height="70" rx="12" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
<text x="160" y="330" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">MAP restored</text>
<text x="160" y="356" font-size="17" text-anchor="middle" fill="currentColor">MAP = CO × TPR</text>
<line x1="240" y1="300" x2="240" y2="122" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6" marker-end="url(#arr-cv-baro-b)"/>
<text x="256" y="222" font-size="17" fill="currentColor">negative feedback,</text>
<text x="256" y="244" font-size="17" fill="currentColor">within seconds</text>
</g>
</svg>`

/* 9 — The left-ventricular pressure–volume loop (lead, 1000×460) */
const pvLoopSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-cv-pv')}</defs>
<line x1="140" y1="410" x2="945" y2="410" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cv-pv)"/>
<line x1="140" y1="410" x2="140" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#arr-cv-pv)"/>
<text x="940" y="444" font-size="19" text-anchor="end" fill="currentColor">LV volume (mL) →</text>
<text x="76" y="225" font-size="19" text-anchor="middle" fill="currentColor" transform="rotate(-90 76 225)">LV pressure (mmHg)</text>
<g class="fig-muted">
<line x1="134" y1="200" x2="146" y2="200" stroke="currentColor" stroke-width="2"/>
<text x="126" y="206" font-size="16" text-anchor="end" fill="currentColor">80</text>
<line x1="134" y1="100" x2="146" y2="100" stroke="currentColor" stroke-width="2"/>
<text x="126" y="106" font-size="16" text-anchor="end" fill="currentColor">120</text>
<line x1="380" y1="390" x2="380" y2="410" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/>
<line x1="716" y1="374" x2="716" y2="410" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/>
<text x="380" y="436" font-size="17" text-anchor="middle" fill="currentColor">ESV ≈ 50</text>
<text x="716" y="436" font-size="17" text-anchor="middle" fill="currentColor">EDV ≈ 120</text>
<text x="730" y="392" font-size="16" fill="currentColor">mitral closes · S1</text>
<text x="730" y="196" font-size="16" fill="currentColor">aortic opens</text>
<text x="366" y="140" font-size="16" text-anchor="end" fill="currentColor">aortic closes · S2</text>
<text x="366" y="396" font-size="16" text-anchor="end" fill="currentColor">mitral opens</text>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-cv-pv-b')}</defs>
<path d="M380 388 Q 464 388, 548 383" fill="none" stroke="currentColor" stroke-width="4" marker-end="url(#arr-cv-pv-b)"/>
<path d="M548 383 Q 632 379, 716 372" fill="none" stroke="currentColor" stroke-width="4"/>
<line x1="716" y1="372" x2="716" y2="286" stroke="currentColor" stroke-width="4" marker-end="url(#arr-cv-pv-b)"/>
<line x1="716" y1="286" x2="716" y2="200" stroke="currentColor" stroke-width="4"/>
<path d="M716 200 C 700 140, 620 104, 548 104" fill="none" stroke="currentColor" stroke-width="4" marker-end="url(#arr-cv-pv-b)"/>
<path d="M548 104 C 476 104, 400 120, 380 150" fill="none" stroke="currentColor" stroke-width="4"/>
<line x1="380" y1="150" x2="380" y2="270" stroke="currentColor" stroke-width="4" marker-end="url(#arr-cv-pv-b)"/>
<line x1="380" y1="270" x2="380" y2="388" stroke="currentColor" stroke-width="4"/>
</g>
${NUM(430, 356, '1')}
<text x="450" y="362" font-size="18" fill="currentColor">filling (mitral open) → EDV</text>
${NUM(744, 290, '2')}
<text x="764" y="296" font-size="18" fill="currentColor">isovolumetric contraction</text>
${NUM(548, 76, '3')}
<text x="568" y="82" font-size="18" fill="currentColor">ejection — aortic open, volume → ESV</text>
${NUM(352, 290, '4')}
<text x="334" y="296" font-size="18" text-anchor="end" fill="currentColor">isovolumetric relaxation</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-cv-pv-r')}</defs>
<line x1="392" y1="262" x2="704" y2="262" stroke="currentColor" stroke-width="3" marker-start="url(#arr-cv-pv-r)" marker-end="url(#arr-cv-pv-r)"/>
<text x="548" y="250" font-size="19" font-weight="700" text-anchor="middle" fill="currentColor">width = SV ≈ 70 mL</text>
</g>
<text x="548" y="306" font-size="18" text-anchor="middle" fill="currentColor">counterclockwise</text>
<text x="548" y="330" font-size="18" text-anchor="middle" fill="currentColor">area ≈ stroke work</text>
</svg>`

export const mcatCardiovascularFigures: DeckFigurePlacement[] = [
  {
    at: 'Two Circuits, One Pump',
    mode: 'replace-table',
    figure: {
      svg: circuitsSvg,
      alt:
        'The heart as four labelled boxes (RA above RV on the left, LA above LV on the right; the LV drawn with the thickest wall), a Lungs box above and a Body box below. Blue (deoxygenated) path: body → venae cavae → RA → RV → pulmonary artery → lungs. Red (oxygenated) path: lungs → pulmonary veins → LA → LV → aorta → body. Peak pressures: RV ~25 mmHg, LV ~120 mmHg. Footnote: an artery is defined by direction (away from the heart), not oxygen content.',
      caption: 'Two circuits in series, one pump: the pulmonary artery is the artery that carries deoxygenated blood (red = oxygenated, blue = deoxygenated).',
    },
    blocks: [
      '- **Pulmonary** circuit: RA → RV → pulmonary arteries → lungs → pulmonary veins → LA',
      '- **Systemic** circuit: LA → LV → aorta → body → venae cavae → RA; the two circuits are in **series**, the organs in **parallel**',
      '- The **left ventricle** has the thickest wall: ~120 mmHg peak vs the RV\'s ~25 mmHg',
      '- "Artery" = **direction, not oxygenation** — the pulmonary artery is the classic trap',
    ],
  },
  {
    at: 'Phases of the Cardiac Cycle',
    mode: 'lead',
    figure: {
      svg: cycleSvg,
      alt:
        'Pressure (mmHg) against time for one heartbeat. A thick left-ventricular trace sits near zero during diastole, climbs steeply in isovolumetric contraction, follows the red aortic trace up to a peak near 120 and back down during ejection, then falls steeply in isovolumetric relaxation and stays low during filling. The red aortic trace runs between about 80 and 120 and never drops to zero. A dashed grey left-atrial trace stays near 5–10 mmHg with a small bump during atrial systole. Four dashed vertical lines mark the valve events where the curves cross: AV valves close (S1) when LV pressure rises above atrial pressure; semilunar valves open when it exceeds aortic pressure; semilunar valves close (S2) when it falls below aortic pressure; AV valves open when it falls below atrial pressure. Phases numbered 1 atrial systole, 2 isovolumetric contraction, 3 ejection, 4 isovolumetric relaxation, 5 passive filling; the shaded middle band is ventricular systole.',
      caption: 'The cardiac cycle as pressure against time (illustrative): every valve event is a crossing of two pressure curves — S1 when the AV valves shut, S2 when the semilunar valves shut.',
    },
    blocks: [
      '- Valves are **passive**: each opens or closes the moment one pressure curve crosses another — **S1** = AV valves shut, **S2** = semilunar valves shut',
      '- Two **isovolumetric** phases (2 and 4): all four valves closed, pressure changes at constant volume',
    ],
  },
  {
    at: 'The Conduction System',
    mode: 'lead',
    figure: {
      svg: conductionSvg,
      alt:
        'Left: the heart as four boxes with a shaded fibrous-skeleton band between atria and ventricles. The blue conduction path runs 1 from the SA node at the top of the right atrium, 2 across the atrial muscle as arrows into both atria, 3 to the AV node sitting in the fibrous band (the only path down), 4 down the bundle of His in the septum and splitting into right and left bundle branches, 5 fanning out as Purkinje fibers into both ventricle walls from the apex upward. Right: the same five numbered steps with notes (SA node pacemaker ~100 bpm, myogenic; atrial muscle via gap junctions; AV node ~0.1 s delay; His → bundle branches; Purkinje, ventricles contract apex first), then: nerves only modulate the rate — sympathetic NE on β₁ is faster and stronger, parasympathetic (vagus) ACh is slower; resting vagal tone keeps HR near 70, below the SA node’s 100.',
      caption: 'The conduction system: the SA node sets the pace, the AV node delays the signal before it drops down the septum to the Purkinje fibers; nerves only speed or slow it.',
    },
    blocks: [
      '- SA node → atrial muscle → **AV node (delay ~0.1 s, only path through the fibrous skeleton)** → bundle of His → bundle branches → Purkinje fibers',
      '- The heart is **myogenic**: the SA node fires on its own at ~100 bpm; vagal tone holds resting HR near 70',
    ],
  },
  {
    at: 'The ECG',
    mode: 'replace-table',
    figure: {
      svg: ecgSvg,
      alt:
        'One ECG beat on a flat baseline: a small rounded P wave (blue label: atrial depolarization), a flat PR segment bracketed as the PR interval — the AV-node delay, a tall narrow QRS complex (red label: ventricular depolarization) with S1 marked just after it, a flat ST segment, then a broader rounded T wave (red label: ventricular repolarization) with S2 marked after it. Notes: atrial repolarization is hidden inside the QRS; electrical first, mechanical next — QRS, then LV pressure rises, then S1.',
      caption: 'One ECG beat (illustrative): P = atria depolarize, PR = AV-node delay, QRS = ventricles depolarize, T = ventricles repolarize.',
    },
    blocks: [
      '- **P wave** — atrial depolarization; **PR interval** — conduction through the AV node (the delay)',
      '- **QRS complex** — ventricular depolarization (atrial repolarization is hidden inside it)',
      '- **T wave** — ventricular repolarization',
      '- The ECG is **electrical**; contraction follows — QRS comes just **before** ventricular pressure rises and S1',
    ],
  },
  {
    at: 'Where Pressure Falls',
    mode: 'lead',
    figure: {
      svg: vesselsSvg,
      alt:
        'Three stacked panels across the vessel series aorta → arteries → arterioles → capillaries → venules → veins → venae cavae. Top, red: mean pressure falls from MAP ~93 in the aorta, with its largest drop across the arterioles (the resistance vessels) to ~35, through the capillaries to ~15, and on to ~0 at the right atrium. Middle, bars: total cross-sectional area is tiny in the aorta and by far the largest in the capillaries, then shrinks again; a note says veins hold ~60–70% of blood volume (capacitance). Bottom, blue: velocity is ~30 cm/s in the aorta, slowest (~0.03 cm/s) in the capillaries, and speeds up again in the veins. Header: flow Q is the same through every segment in series.',
      caption: 'Along the circulation (illustrative shapes, lesson values): pressure drops most across the arterioles, total area peaks in the capillaries, so velocity bottoms out there — v = Q / A.',
    },
    blocks: [
      '- Same flow $Q$ through every series segment: $v = Q / A_{total}$, so the capillaries (largest total area) are slowest',
      '- Arterioles are the **resistance vessels** (largest pressure drop, $R \\propto 1/r^4$); veins are the **capacitance vessels** (~2/3 of blood volume)',
    ],
  },
  {
    at: 'Frank–Starling Mechanism',
    mode: 'lead',
    figure: {
      svg: starlingSvg,
      alt:
        'Stroke volume against end-diastolic volume (preload). A thick normal curve rises steeply then flattens. Two points on it, A and B: a dashed arrow from A to B is labelled "more preload (venous return, saline) moves ALONG the same curve". A red curve lies above and to the left of the normal one, labelled ↑ contractility; a red arrow from A straight up to it is labelled "sympathetic NE (β₁): a NEW curve, up and left — more SV at the same EDV". A dashed grey curve below the normal one is labelled ↑ afterload / failing heart.',
      caption: 'The Frank–Starling curve (illustrative): the heart pumps what it receives. Preload moves you along one curve; contractility draws a new one.',
    },
    blocks: [
      '- **Along the curve** = preload (venous return); **new curve** = contractility (sympathetic NE, β₁) — the favourite MCAT discrimination',
      '- It matches the two ventricles automatically: extra right-heart output stretches the left heart, which pumps it on',
    ],
  },
  {
    at: 'Capillary Exchange — Starling Forces',
    mode: 'replace-table',
    figure: {
      svg: capillarySvg,
      alt:
        'A horizontal capillary with blood flowing from the arteriolar end (left) to the venular end (right), over a shaded interstitium (Pi ≈ 0, πi small). Equation at the top: net filtration ∝ (Pc − Pi) − (πc − πi); hydrostatic pushes out, oncotic (albumin) pulls in. At the arteriolar end Pc ≈ 35 and red arrows point out of the capillary: filtration OUT. In the middle, blue text: πc ≈ 25 pulls in all along. At the venular end Pc ≈ 15 and blue arrows point into the capillary: reabsorption IN. A dashed lymphatic below returns the ~2–4 L/day net excess. Footnote: gases and small solutes cross by diffusion; Starling forces move bulk fluid.',
      caption: 'Starling forces along one capillary: hydrostatic pressure wins at the arteriolar end (filtration), oncotic pressure wins at the venular end (reabsorption); lymphatics clear the surplus.',
    },
    blocks: [
      '- $J_v \\propto (P_c - P_i) - (\\pi_c - \\pi_i)$: hydrostatic pushes **out**, oncotic (mostly **albumin**) pulls **in**',
      '- Arteriolar end: $P_c$ ≈ 35 mmHg → net **filtration**; venular end: $P_c$ ≈ 15 while $\\pi_c$ ≈ 25 → net **reabsorption**',
      '- $P_i$ ≈ 0 and $\\pi_i$ is small — the two big players are $P_c$ and $\\pi_c$',
      '- The ~2–4 L/day net excess returns via the **lymphatics**',
    ],
  },
  {
    at: 'The Baroreceptor Reflex',
    mode: 'lead',
    figure: {
      svg: baroSvg,
      alt:
        'A negative-feedback loop of boxes. Red: MAP falls (standing up, hemorrhage). → Baroreceptors in the carotid sinus and aortic arch stretch less and fire less. → Medulla (cardiovascular centers). → ↑ sympathetic, ↓ parasympathetic (vagal). → HR ↑ and contractility ↑ so CO ↑; arterioles constrict so TPR ↑; veins constrict so venous return ↑. → Blue: MAP restored (MAP = CO × TPR), with a dashed arrow back up to the start labelled negative feedback within seconds. Footnote: a pressure rise produces the mirror image; long-term control is the kidneys (blood volume: RAAS, ADH).',
      caption: 'The baroreceptor reflex: a seconds-scale negative-feedback loop that defends MAP through both CO and TPR.',
    },
    blocks: [
      '- Firing rate tracks arterial pressure: **less stretch → less firing → more sympathetic, less vagal** output (and the mirror image when pressure rises)',
      '- Seconds, not hours: the kidneys (RAAS/ADH, blood volume) own long-term pressure control',
    ],
  },
  {
    at: 'Reading a Pressure–Volume (PV) Loop',
    mode: 'lead',
    figure: {
      svg: pvLoopSvg,
      alt:
        'Left-ventricular pressure (mmHg) against volume (mL): a blue loop traversed counterclockwise. 1 Bottom edge, left to right near zero pressure: filling with the mitral valve open until EDV ≈ 120. 2 Right edge, straight up at EDV: isovolumetric contraction. 3 Top edge, right to left: ejection with the aortic valve open, pressure peaking near 120, until ESV ≈ 50. 4 Left edge, straight down at ESV: isovolumetric relaxation. Corners are valve events: mitral closes (S1) at the bottom right, aortic opens at the top right, aortic closes (S2) at the top left, mitral opens at the bottom left. A red double arrow across the loop reads width = SV ≈ 70 mL; inside: counterclockwise, area ≈ stroke work.',
      caption: 'The LV pressure–volume loop (illustrative shape, lesson volumes): width is stroke volume, area is stroke work, and each corner is a valve opening or closing.',
    },
    blocks: [
      '- Counterclockwise: **fill → squeeze (isovolumetric) → eject → relax (isovolumetric)**; each corner is a valve event',
      '- **Width = SV** (EDV − ESV); **area ≈ stroke work**',
    ],
  },
]
