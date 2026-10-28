import type { DeckFigurePlacement } from './index'

/**
 * Lipid Metabolism (MCAT B/B) — figures for the in-class deck. Authored 2026-10-28.
 *
 * Every drawing below is ours, drawn from the concept: molecules are labelled
 * boxes, circles or schematic head-and-tail icons (no structural formulas);
 * pathways are boxes joined by arrows with the enzymes on the arrows and the
 * regulated steps highlighted; no textbook or prep-company figure was copied.
 * Blue (fig-accent) = the fed / insulin / storage side and activation; red
 * (fig-accent-2) = the fasting / glucagon side, rate-limiting steps and
 * inhibition; grey (fig-muted) = compartments, reversible steps and notes.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-lp-<figure>-<colour>).
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

/**
 * A schematic hydrocarbon tail: a zigzag of `segs` bonds starting at (x, y),
 * heading `deg` degrees (0 = right, positive = down the page); after `kinkAt`
 * bonds the direction turns by `kinkDeg` (a cis double bond's kink).
 */
const TAIL = (x: number, y: number, segs: number, deg = 0, kinkAt = -1, kinkDeg = 0, step = 13, amp = 5) => {
  let px = x
  let py = y
  let th = (deg * Math.PI) / 180
  let d = `M${x} ${y}`
  for (let i = 1; i <= segs; i++) {
    if (kinkAt >= 0 && i === kinkAt + 1) th += (kinkDeg * Math.PI) / 180
    px += step * Math.cos(th)
    py += step * Math.sin(th)
    const s = i % 2 ? 1 : -1
    d += ` L${(px - Math.sin(th) * amp * s).toFixed(1)} ${(py + Math.cos(th) * amp * s).toFixed(1)}`
  }
  return `<path d="${d}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>`
}

/* 1 — The cast of lipids as head-and-tail icons (replace-table, 560×440) */
const lipidCastSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<text x="20" y="34" font-size="16" font-weight="700" fill="currentColor">Fatty acids: hydrocarbon tail + carboxyl head</text>
<g class="fig-accent"><circle cx="46" cy="66" r="9" fill="currentColor"/><circle cx="46" cy="112" r="9" fill="currentColor"/></g>
${TAIL(55, 66, 11)}
${TAIL(55, 112, 11, 0, 5, 40)}
<g class="fig-accent-2"><text x="128" y="100" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">cis C=C</text></g>
<text x="214" y="71" font-size="14" fill="currentColor">saturated: straight → packs tight, higher m.p.</text>
<text x="214" y="112" font-size="14" fill="currentColor">cis C=C: kinked, packs poorly</text>
<text x="214" y="132" font-size="14" fill="currentColor">→ lower m.p., more fluid membranes</text>
<g class="fig-muted"><line x1="20" y1="176" x2="540" y2="176" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/></g>
<text x="20" y="202" font-size="16" font-weight="700" fill="currentColor">Triacylglycerol</text>
<rect x="28" y="214" width="14" height="66" rx="4" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
${TAIL(42, 222, 7)}
${TAIL(42, 247, 7)}
${TAIL(42, 272, 7)}
<text x="146" y="232" font-size="14" fill="currentColor">glycerol + 3 FA (esters)</text>
<text x="146" y="252" font-size="14" font-weight="700" fill="currentColor">~9 kcal/g, anhydrous</text>
<g class="fig-muted"><text x="146" y="272" font-size="13" fill="currentColor">(glycogen: ~4, hydrated)</text></g>
<text x="316" y="202" font-size="16" font-weight="700" fill="currentColor">Phospholipid</text>
<g class="fig-accent"><circle cx="330" cy="232" r="12" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2.5"/></g>
${TAIL(342, 226, 5)}
${TAIL(342, 238, 5)}
<g class="fig-muted"><text x="416" y="237" font-size="12" fill="currentColor">polar head · 2 tails</text></g>
<text x="316" y="262" font-size="13" fill="currentColor">glycerol + 2 FA + P + head group</text>
<text x="316" y="282" font-size="14" font-weight="700" fill="currentColor">amphipathic → bilayers</text>
<g class="fig-muted"><line x1="20" y1="304" x2="540" y2="304" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/></g>
<text x="20" y="330" font-size="16" font-weight="700" fill="currentColor">Cholesterol</text>
<g class="fig-accent"><circle cx="24" cy="361" r="6" fill="currentColor"/></g>
<rect x="30" y="346" width="70" height="30" rx="6" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="65" y="365" font-size="11" text-anchor="middle" fill="currentColor">rigid rings</text>
${TAIL(100, 361, 3)}
<text x="146" y="352" font-size="14" fill="currentColor">steroid rings + –OH</text>
<text x="146" y="370" font-size="13" fill="currentColor">fluidity buffer (both ways)</text>
<text x="146" y="388" font-size="13" fill="currentColor">→ steroids, bile acids, vit D</text>
<text x="340" y="330" font-size="16" font-weight="700" fill="currentColor">Sphingolipid</text>
<g class="fig-accent"><circle cx="352" cy="344" r="7" fill="currentColor"/></g>
<rect x="348" y="350" width="14" height="36" rx="4" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
${TAIL(362, 356, 5)}
${TAIL(362, 380, 5)}
<text x="442" y="357" font-size="13" fill="currentColor">sphingosine + FA</text>
<text x="442" y="375" font-size="13" fill="currentColor">membranes, myelin</text>
<text x="442" y="393" font-size="13" fill="currentColor">&amp; cell recognition</text>
<g class="fig-muted"><text x="280" y="430" font-size="13" text-anchor="middle" fill="currentColor">schematic icons — blue dots are polar heads, zigzags are hydrocarbon tails</text></g>
</svg>`

/* 2 — Lipoprotein traffic: two TG lanes through LPL, LDL out to cells, HDL back (lead, 1000×460) */
const lipoproteinSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lp-lipo')}</defs>
<g class="fig-muted">
<text x="20" y="36" font-size="15" fill="currentColor">density rises as TG is unloaded: chylomicron → VLDL → IDL → LDL</text>
<rect x="545" y="14" width="50" height="410" rx="10" fill="currentColor" fill-opacity="0.08"/>
<text x="570" y="34" font-size="13" text-anchor="middle" fill="currentColor">blood</text>
</g>
<rect x="20" y="70" width="120" height="60" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="80" y="96" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Gut</text>
<text x="80" y="118" font-size="13" text-anchor="middle" fill="currentColor">dietary TG</text>
<line x1="142" y1="100" x2="222" y2="100" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo)"/>
<circle cx="260" cy="100" r="34" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="260" y="106" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">CM</text>
<text x="260" y="152" font-size="14" text-anchor="middle" fill="currentColor">chylomicron</text>
<text x="260" y="170" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">apoB-48</text>
<line x1="296" y1="100" x2="436" y2="100" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo)"/>
<text x="366" y="84" font-size="14" text-anchor="middle" fill="currentColor">lymph → blood</text>
<g class="fig-accent-2">
<rect x="440" y="60" width="120" height="220" rx="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="3"/>
<text x="500" y="122" font-size="13" text-anchor="middle" fill="currentColor">TG unloaded</text>
<text x="500" y="160" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">LPL</text>
<text x="500" y="182" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">needs apoC-II</text>
<text x="500" y="200" font-size="12" text-anchor="middle" fill="currentColor">insulin ↑ (adipose)</text>
<text x="500" y="252" font-size="13" text-anchor="middle" fill="currentColor">TG unloaded</text>
</g>
<line x1="562" y1="100" x2="640" y2="100" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo)"/>
<circle cx="660" cy="100" r="18" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="660" y="136" font-size="13" text-anchor="middle" fill="currentColor">remnant (apoE)</text>
<line x1="680" y1="100" x2="828" y2="100" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo)"/>
<g class="fig-muted"><text x="754" y="86" font-size="12" text-anchor="middle" fill="currentColor">taken up via apoE</text></g>
<rect x="830" y="60" width="150" height="220" rx="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="905" y="100" font-size="22" font-weight="700" text-anchor="middle" fill="currentColor">Liver</text>
<text x="905" y="130" font-size="14" text-anchor="middle" fill="currentColor">packages TG → VLDL</text>
<text x="905" y="150" font-size="14" text-anchor="middle" fill="currentColor">clears remnants, LDL</text>
<text x="905" y="170" font-size="14" text-anchor="middle" fill="currentColor">takes HDL cholesterol</text>
<line x1="828" y1="230" x2="730" y2="230" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo)"/>
<g class="fig-muted"><text x="779" y="214" font-size="13" text-anchor="middle" fill="currentColor">liver-made TG</text></g>
<circle cx="700" cy="230" r="28" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="700" y="236" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">VLDL</text>
<text x="700" y="276" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">apoB-100</text>
<line x1="670" y1="230" x2="564" y2="230" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo)"/>
<line x1="438" y1="230" x2="382" y2="230" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo)"/>
<circle cx="360" cy="230" r="20" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="360" y="235" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">IDL</text>
<line x1="338" y1="230" x2="260" y2="230" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo)"/>
<circle cx="240" cy="230" r="17" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="240" y="235" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">LDL</text>
<text x="262" y="264" font-size="13" fill="currentColor">apoB-100 · cholesterol-rich</text>
<line x1="232" y1="246" x2="152" y2="318" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo)"/>
<rect x="30" y="320" width="230" height="70" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="145" y="346" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">Peripheral cells</text>
<text x="145" y="368" font-size="13" text-anchor="middle" fill="currentColor">LDL receptor reads apoB-100</text>
<text x="145" y="384" font-size="12" text-anchor="middle" fill="currentColor">(missing → familial hypercholesterolemia)</text>
<g class="fig-accent-2">
<defs>${ARROW('arr-lp-lipo-r')}</defs>
<line x1="500" y1="282" x2="500" y2="318" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo-r)"/>
</g>
<rect x="400" y="320" width="200" height="64" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="346" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Muscle: burn FA</text>
<text x="500" y="368" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Adipose: store as TG</text>
<g class="fig-accent">
<defs>${ARROW('arr-lp-lipo-b')}</defs>
<line x1="262" y1="376" x2="314" y2="414" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo-b)"/>
<circle cx="330" cy="424" r="16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="330" y="429" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">HDL</text>
<text x="330" y="455" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">apoA-I</text>
<path d="M348 424 H905 V284" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-lipo-b)"/>
<text x="640" y="410" font-size="15" text-anchor="middle" fill="currentColor">reverse cholesterol transport (LCAT esterifies the cargo)</text>
<text x="262" y="444" font-size="12" text-anchor="end" fill="currentColor">cholesterol out</text>
</g>
<g class="fig-muted">
<defs>${ARROW('arr-lp-lipo-m')}</defs>
<line x1="340" y1="408" x2="438" y2="284" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#arr-lp-lipo-m)"/>
<text x="372" y="350" font-size="12" text-anchor="end" fill="currentColor">lends C-II, E</text>
</g>
</svg>`

/* 3 — The carnitine shuttle across both mitochondrial membranes, with malonyl-CoA at the gate (lead, 1000×460) */
const carnitineSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lp-carn')}</defs>
<g class="fig-muted">
<rect x="20" y="140" width="960" height="26" fill="currentColor" fill-opacity="0.14"/>
<rect x="20" y="288" width="960" height="26" fill="currentColor" fill-opacity="0.14"/>
<text x="30" y="60" font-size="16" font-weight="700" fill="currentColor">CYTOSOL</text>
<text x="30" y="236" font-size="14" fill="currentColor">intermembrane space</text>
<text x="30" y="400" font-size="16" font-weight="700" fill="currentColor">MATRIX</text>
<text x="975" y="134" font-size="13" text-anchor="end" fill="currentColor">outer membrane</text>
<text x="975" y="282" font-size="13" text-anchor="end" fill="currentColor">inner membrane</text>
<text x="30" y="440" font-size="14" fill="currentColor">carnitine or CPT deficiency: muscle weakness + hypoketotic hypoglycemia when fasting — fat can't reach the matrix</text>
</g>
${BOX(40, 70, 150, 46, 'Fatty acid', 18)}
<line x1="192" y1="93" x2="258" y2="93" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-carn)"/>
<text x="226" y="54" font-size="14" text-anchor="middle" fill="currentColor">acyl-CoA synthetase</text>
<g class="fig-accent-2"><text x="226" y="134" font-size="13" text-anchor="middle" fill="currentColor">ATP → AMP + PPᵢ (= 2 ATP)</text></g>
${BOX(262, 70, 190, 46, 'Fatty acyl-CoA', 18)}
<path d="M452 93 H480 V110" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-carn)"/>
<line x1="570" y1="112" x2="570" y2="86" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-carn)"/>
<text x="570" y="72" font-size="14" text-anchor="middle" fill="currentColor">CoA</text>
<g class="fig-accent-2">
<rect x="440" y="112" width="150" height="82" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="3.5"/>
<text x="515" y="150" font-size="20" font-weight="700" text-anchor="middle" fill="currentColor">CPT-I</text>
<text x="515" y="172" font-size="12" text-anchor="middle" fill="currentColor">the regulated gate</text>
<rect x="700" y="40" width="190" height="50" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="795" y="71" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">Malonyl-CoA</text>
<text x="795" y="112" font-size="13" text-anchor="middle" fill="currentColor">from ACC — fed state, building fat</text>
<line x1="700" y1="128" x2="606" y2="128" stroke="currentColor" stroke-width="3.5"/>
<line x1="604" y1="116" x2="604" y2="140" stroke="currentColor" stroke-width="3.5"/>
<text x="652" y="146" font-size="12" text-anchor="middle" fill="currentColor">no futile cycle</text>
</g>
<line x1="480" y1="194" x2="480" y2="356" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-carn)"/>
<text x="468" y="236" font-size="15" text-anchor="end" fill="currentColor">acyl-carnitine</text>
<rect x="440" y="262" width="180" height="76" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="430" y="305" font-size="16" font-weight="700" text-anchor="end" fill="currentColor">translocase</text>
<text x="530" y="305" font-size="12" text-anchor="middle" fill="currentColor">antiport</text>
<rect x="420" y="362" width="180" height="50" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<text x="510" y="393" font-size="18" font-weight="700" text-anchor="middle" fill="currentColor">CPT-II</text>
<text x="400" y="394" font-size="13" text-anchor="end" fill="currentColor">CoA</text>
<line x1="404" y1="402" x2="418" y2="402" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lp-carn)"/>
<line x1="602" y1="387" x2="646" y2="387" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-carn)"/>
${BOX(650, 364, 170, 46, 'Fatty acyl-CoA', 17)}
<line x1="822" y1="387" x2="860" y2="387" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-carn)"/>
<text x="866" y="393" font-size="17" font-weight="700" fill="currentColor">β-oxidation</text>
<g class="fig-accent">
<defs>${ARROW('arr-lp-carn-b')}</defs>
<path d="M580 362 V230 H660 V180 H594" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-carn-b)"/>
<text x="672" y="236" font-size="14" fill="currentColor">carnitine</text>
<text x="672" y="254" font-size="14" fill="currentColor">recycles</text>
<text x="700" y="180" font-size="13" fill="currentColor">carnitine in</text>
</g>
</svg>`

/* 4 — One turn of beta-oxidation as a vertical column with the loop back (replace-table, 560×440) */
const betaOxSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-lp-box')}</defs>
${BOX(90, 14, 200, 38, 'Fatty acyl-CoA (Cₙ)', 15)}
<g class="fig-accent-2">
<defs>${ARROW('arr-lp-box-r')}</defs>
<line x1="190" y1="54" x2="190" y2="86" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-box-r)"/>
<text x="300" y="66" font-size="14" font-weight="700" fill="currentColor">acyl-CoA dehydrogenase</text>
<text x="300" y="82" font-size="13" fill="currentColor">FAD → FADH₂  (oxidize)</text>
<line x1="190" y1="214" x2="190" y2="246" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-box-r)"/>
<text x="300" y="226" font-size="14" font-weight="700" fill="currentColor">3-hydroxyacyl-CoA DH</text>
<text x="300" y="242" font-size="13" fill="currentColor">NAD⁺ → NADH  (oxidize)</text>
</g>
${NUM(276, 70, '1', 11)}
${BOX(90, 90, 200, 38, 'trans-Δ²-enoyl-CoA', 15)}
<g class="fig-muted">
<defs>${ARROW('arr-lp-box-m')}</defs>
<line x1="190" y1="130" x2="190" y2="166" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-box-m)"/>
<text x="300" y="146" font-size="14" font-weight="700" fill="currentColor">enoyl-CoA hydratase</text>
<text x="300" y="162" font-size="13" fill="currentColor">+ H₂O  (hydrate)</text>
<line x1="190" y1="294" x2="190" y2="330" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-box-m)"/>
<path d="M88 350 H36 V33 H86" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#arr-lp-box-m)"/>
<text x="26" y="200" font-size="13" text-anchor="middle" fill="currentColor" transform="rotate(-90 26 200)">next turn: chain 2 C shorter</text>
</g>
${NUM(276, 150, '2', 11)}
${BOX(90, 170, 200, 38, '3-hydroxyacyl-CoA', 15)}
${NUM(276, 230, '3', 11)}
${BOX(90, 250, 200, 38, '3-ketoacyl-CoA', 15)}
<text x="300" y="310" font-size="14" font-weight="700" fill="currentColor">thiolase</text>
<text x="300" y="326" font-size="13" fill="currentColor">+ CoA  (cleave)</text>
${NUM(276, 314, '4', 11)}
${BOX(90, 334, 140, 38, 'Acyl-CoA (Cₙ₋₂)', 14)}
<g class="fig-accent">
<defs>${ARROW('arr-lp-box-b')}</defs>
<path d="M190 312 H300 V332" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-box-b)"/>
<rect x="240" y="334" width="130" height="38" rx="10" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<text x="305" y="358" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">Acetyl-CoA</text>
<text x="380" y="350" font-size="13" fill="currentColor">→ TCA (10 ATP)</text>
<text x="380" y="368" font-size="13" fill="currentColor">or ketones</text>
</g>
<text x="280" y="408" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">per turn: 1 FADH₂ + 1 NADH + 1 acetyl-CoA, chain −2 C</text>
<g class="fig-muted"><text x="280" y="430" font-size="13" text-anchor="middle" fill="currentColor">same chemistry as TCA: succinate → fumarate → malate → oxaloacetate</text></g>
</svg>`

/* 5 — The palmitate ledger: 16 carbons, 7 cuts, and the ATP bars (lead, 1000×460) */
const palmitateSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<text x="40" y="26" font-size="18" font-weight="700" fill="currentColor">Palmitate: 16 C → 8 two-carbon pairs; 7 cuts = 7 turns of β-oxidation</text>
${Array.from({ length: 16 }, (_, i) => `<circle cx="${60 + i * 56}" cy="72" r="15" fill="currentColor" fill-opacity="${i % 2 ? 0.12 : 0.3}" stroke="currentColor" stroke-width="2"/>`).join('')}
<g class="fig-accent">
${Array.from({ length: 8 }, (_, k) => `<text x="${88 + k * 112}" y="112" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">Ac-CoA</text>`).join('')}
</g>
<g class="fig-accent-2">
${Array.from({ length: 7 }, (_, k) => `<line x1="${144 + k * 112}" y1="50" x2="${144 + k * 112}" y2="94" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4"/><text x="${144 + k * 112}" y="44" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">${k + 1}</text>`).join('')}
</g>
<g class="fig-muted"><text x="960" y="148" font-size="15" text-anchor="end" fill="currentColor">turns = n/2 − 1 = 7 · acetyl-CoA = n/2 = 8</text></g>
<text x="40" y="190" font-size="16" fill="currentColor">8 acetyl-CoA × 10 each</text>
<g class="fig-muted"><text x="40" y="208" font-size="12" fill="currentColor">(each TCA turn: 3 NADH + 1 FADH₂ + 1 GTP)</text></g>
<g class="fig-accent"><rect x="340" y="169" width="480" height="28" rx="6" fill="currentColor" fill-opacity="0.55"/></g>
<text x="830" y="190" font-size="18" font-weight="700" fill="currentColor">80</text>
<text x="40" y="250" font-size="16" fill="currentColor">7 NADH × 2.5</text>
<rect x="340" y="229" width="105" height="28" rx="6" fill="currentColor" fill-opacity="0.35"/>
<text x="455" y="250" font-size="18" font-weight="700" fill="currentColor">17.5</text>
<text x="40" y="310" font-size="16" fill="currentColor">7 FADH₂ × 1.5</text>
<rect x="340" y="289" width="63" height="28" rx="6" fill="currentColor" fill-opacity="0.35"/>
<text x="413" y="310" font-size="18" font-weight="700" fill="currentColor">10.5</text>
<text x="40" y="370" font-size="16" fill="currentColor">activation: ATP → AMP + PPᵢ</text>
<g class="fig-accent-2">
<rect x="328" y="349" width="12" height="28" rx="3" fill="currentColor" fill-opacity="0.7"/>
<text x="350" y="370" font-size="18" font-weight="700" fill="currentColor">−2</text>
<text x="620" y="370" font-size="13" fill="currentColor">paid once per fatty acid, whatever its length</text>
</g>
<g class="fig-muted"><line x1="340" y1="160" x2="340" y2="392" stroke="currentColor" stroke-width="1.5"/><text x="500" y="408" font-size="12" text-anchor="middle" fill="currentColor">bars drawn to scale: 6 px per ATP</text></g>
<text x="340" y="440" font-size="26" font-weight="700" fill="currentColor">= 106 ATP</text>
<text x="500" y="440" font-size="17" fill="currentColor">80 + 17.5 + 10.5 − 2 (forget the −2 and you get 108)</text>
</svg>`

/* 6 — Ketone bodies: made in liver mitochondria, burned everywhere else (lead, 1000×460) */
const ketoneSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lp-ket')}</defs>
<g class="fig-muted">
<rect x="30" y="14" width="500" height="410" rx="24" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<rect x="610" y="14" width="370" height="410" rx="24" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<rect x="545" y="14" width="50" height="410" rx="10" fill="currentColor" fill-opacity="0.1"/>
<text x="570" y="34" font-size="13" text-anchor="middle" fill="currentColor">blood</text>
<text x="330" y="70" font-size="12" fill="currentColor">fasting: β-oxidation floods</text>
<text x="330" y="86" font-size="12" fill="currentColor">acetyl-CoA; OAA is drained for</text>
<text x="330" y="102" font-size="12" fill="currentColor">gluconeogenesis → TCA stalls</text>
<text x="212" y="120" font-size="13" fill="currentColor">thiolase (reversible)</text>
<text x="212" y="272" font-size="13" fill="currentColor">HMG-CoA lyase (− acetyl-CoA)</text>
<text x="312" y="237" font-size="12" fill="currentColor">cytosolic twin → cholesterol</text>
<text x="430" y="340" font-size="12" text-anchor="middle" fill="currentColor">spontaneous, −CO₂</text>
<text x="430" y="356" font-size="12" text-anchor="middle" fill="currentColor">exhaled: fruity breath</text>
<text x="560" y="372" font-size="13" text-anchor="middle" fill="currentColor">water-soluble; no albumin or carnitine needed</text>
<text x="500" y="446" font-size="13" text-anchor="middle" fill="currentColor">RBCs (no mitochondria) can't use ketones; after ~3 days the brain gets most of its energy from them, sparing muscle protein</text>
</g>
<text x="46" y="38" font-size="16" font-weight="700" fill="currentColor">LIVER mitochondria — makes ketones, can't burn them</text>
<text x="620" y="38" font-size="16" font-weight="700" fill="currentColor">BRAIN · heart · muscle — burn them</text>
${BOX(100, 60, 200, 40, '2 Acetyl-CoA', 16)}
<line x1="200" y1="102" x2="200" y2="128" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-ket)"/>
${BOX(100, 130, 200, 40, 'Acetoacetyl-CoA', 16)}
<g class="fig-accent-2">
<defs>${ARROW('arr-lp-ket-r')}</defs>
<line x1="200" y1="172" x2="200" y2="210" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-lp-ket-r)"/>
<text x="212" y="186" font-size="14" font-weight="700" fill="currentColor">mito HMG-CoA synthase</text>
<text x="212" y="204" font-size="12" fill="currentColor">rate-limiting · + acetyl-CoA</text>
<text x="750" y="298" font-size="13" font-weight="700" text-anchor="end" fill="currentColor">LIVER LACKS IT</text>
</g>
${BOX(100, 212, 200, 40, 'HMG-CoA', 16)}
<line x1="200" y1="254" x2="200" y2="282" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-ket)"/>
${BOX(100, 284, 200, 40, 'Acetoacetate', 16)}
<line x1="302" y1="304" x2="358" y2="304" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lp-ket)"/>
${BOX(360, 284, 140, 40, 'Acetone', 15, true, 0.04)}
<line x1="200" y1="326" x2="200" y2="362" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-ket)"/>
<text x="212" y="346" font-size="13" fill="currentColor">β-HB DH (NADH → NAD⁺)</text>
${BOX(100, 364, 200, 40, 'β-Hydroxybutyrate', 15)}
<g class="fig-accent">
<defs>${ARROW('arr-lp-ket-b')}</defs>
<line x1="302" y1="384" x2="756" y2="384" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-lp-ket-b)"/>
<line x1="840" y1="290" x2="840" y2="256" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-lp-ket-b)"/>
<text x="750" y="262" font-size="14" font-weight="700" text-anchor="end" fill="currentColor">SCOT (thiophorase)</text>
<text x="750" y="280" font-size="12" text-anchor="end" fill="currentColor">succinyl-CoA donates CoA</text>
</g>
${BOX(760, 364, 160, 40, 'β-HB / acetoacetate', 14)}
<line x1="840" y1="362" x2="840" y2="336" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-ket)"/>
<text x="750" y="342" font-size="13" text-anchor="end" fill="currentColor">β-HB DH</text>
<text x="750" y="358" font-size="12" text-anchor="end" fill="currentColor">NAD⁺ → NADH</text>
${BOX(760, 292, 160, 40, 'Acetoacetate', 15)}
${BOX(760, 212, 160, 40, 'Acetoacetyl-CoA', 14)}
<line x1="840" y1="210" x2="840" y2="176" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-ket)"/>
<text x="750" y="196" font-size="13" text-anchor="end" fill="currentColor">thiolase</text>
${BOX(760, 132, 160, 40, '2 Acetyl-CoA', 15)}
<line x1="840" y1="130" x2="840" y2="104" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-ket)"/>
${BOX(760, 60, 160, 40, 'TCA → ATP', 16)}
</svg>`

/* 7 — Synthesis vs oxidation: two shuttles, two compartments, one cross-link (replace-table, 560×440) */
const synthVsOxSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<rect x="40" y="266" width="480" height="154" rx="22" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2"/>
<text x="280" y="414" font-size="12" text-anchor="middle" fill="currentColor">mitochondrial matrix</text>
<text x="280" y="436" font-size="12" text-anchor="middle" fill="currentColor">glucagon / AMPK phosphorylate ACC OFF → malonyl-CoA falls → CPT-I opens</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-lp-svo-r')}</defs>
<text x="150" y="22" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">β-OXIDATION</text>
<text x="150" y="42" font-size="12" text-anchor="middle" fill="currentColor">fasting · glucagon, AMPK · matrix</text>
<line x1="150" y1="98" x2="150" y2="238" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-svo-r)"/>
<text x="160" y="150" font-size="12" fill="currentColor">carnitine</text>
<text x="160" y="166" font-size="12" fill="currentColor">shuttle in</text>
<rect x="95" y="240" width="110" height="44" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="3"/>
<text x="150" y="268" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">CPT-I</text>
<line x1="150" y1="286" x2="150" y2="304" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-svo-r)"/>
<line x1="150" y1="342" x2="150" y2="366" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-svo-r)"/>
<text x="238" y="322" font-size="12" fill="currentColor">FADH₂ + NADH → ETC</text>
<path d="M328 137 H265 V262 H211" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="209" y1="250" x2="209" y2="274" stroke="currentColor" stroke-width="3"/>
<text x="272" y="196" font-size="11" fill="currentColor">malonyl-CoA ⊣ CPT-I</text>
</g>
${BOX(70, 60, 160, 36, 'Fatty acyl-CoA', 14)}
${BOX(70, 306, 160, 34, 'β-oxidation (spiral)', 13)}
${BOX(70, 368, 160, 34, 'Acetyl-CoA', 14)}
<g class="fig-accent">
<defs>${ARROW('arr-lp-svo-b')}</defs>
<text x="410" y="22" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">FA SYNTHESIS</text>
<text x="410" y="42" font-size="12" text-anchor="middle" fill="currentColor">fed · insulin, citrate · cytosol</text>
<line x1="232" y1="385" x2="328" y2="385" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-svo-b)"/>
<text x="280" y="378" font-size="11" text-anchor="middle" fill="currentColor">+ OAA</text>
<line x1="410" y1="366" x2="410" y2="244" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-svo-b)"/>
<text x="420" y="320" font-size="12" fill="currentColor">citrate shuttle out</text>
<text x="420" y="256" font-size="12" fill="currentColor">ATP-citrate lyase</text>
<line x1="410" y1="204" x2="410" y2="156" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-svo-b)"/>
<line x1="410" y1="118" x2="410" y2="88" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-svo-b)"/>
<text x="420" y="106" font-size="12" fill="currentColor">FAS: ACP, NADPH (PPP)</text>
</g>
<g class="fig-accent-2">
<text x="420" y="176" font-size="13" font-weight="700" fill="currentColor">ACC (biotin)</text>
<text x="420" y="192" font-size="12" fill="currentColor">rate-limiting</text>
</g>
${BOX(330, 368, 160, 34, 'Citrate', 14)}
${BOX(330, 206, 160, 36, 'Acetyl-CoA', 14)}
${BOX(330, 120, 160, 34, 'Malonyl-CoA', 14)}
${BOX(330, 54, 160, 32, 'Palmitate (16:0)', 14)}
</svg>`

/* 8 — Cholesterol synthesis: the reductase, its four controls, and the SREBP loop statins exploit (lead, 1000×460) */
const cholesterolSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-lp-chol')}</defs>
${BOX(20, 70, 150, 46, 'Acetyl-CoA', 18)}
<g class="fig-muted">
<defs>${ARROW('arr-lp-chol-m')}</defs>
<text x="95" y="136" font-size="12" text-anchor="middle" fill="currentColor">cytosolic (citrate shuttle)</text>
<line x1="172" y1="93" x2="201" y2="93" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-chol-m)"/>
<text x="187" y="52" font-size="13" text-anchor="middle" fill="currentColor">thiolase</text>
<line x1="377" y1="93" x2="400" y2="93" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-chol-m)"/>
<text x="392" y="52" font-size="12" text-anchor="middle" fill="currentColor">cytosolic HMG-CoA synthase</text>
<line x1="806" y1="93" x2="842" y2="93" stroke="currentColor" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#arr-lp-chol-m)"/>
<text x="824" y="62" font-size="12" text-anchor="middle" fill="currentColor">… squalene …</text>
<line x1="300" y1="152" x2="900" y2="152" stroke="currentColor" stroke-width="2"/>
<text x="316" y="146" font-size="12" fill="currentColor">controls on the rate-limiting enzyme</text>
<text x="20" y="292" font-size="14" font-weight="700" fill="currentColor">SREBP: the cholesterol sensor (why statins lower LDL)</text>
<text x="100" y="374" font-size="12" text-anchor="middle" fill="currentColor">statins or less LDL delivered</text>
<path d="M660 378 V424 H10 V332 H18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#arr-lp-chol-m)"/>
<text x="380" y="440" font-size="12" text-anchor="middle" fill="currentColor">LDL delivery refills ER cholesterol → SREBP stays put (feedback)</text>
</g>
${BOX(205, 70, 170, 46, 'Acetoacetyl-CoA', 17)}
${BOX(404, 70, 150, 46, 'HMG-CoA (cytosol)', 15)}
<g class="fig-accent-2">
<defs>${ARROW('arr-lp-chol-r')}</defs>
<line x1="556" y1="93" x2="660" y2="93" stroke="currentColor" stroke-width="4" marker-end="url(#arr-lp-chol-r)"/>
<text x="606" y="40" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">HMG-CoA reductase</text>
<text x="606" y="60" font-size="12" text-anchor="middle" fill="currentColor">smooth ER · 2 NADPH · rate-limiting</text>
<line x1="606" y1="150" x2="606" y2="122" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-chol-r)"/>
<rect x="210" y="186" width="180" height="44" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="300" y="214" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Statins</text>
<text x="300" y="248" font-size="12" text-anchor="middle" fill="currentColor">competitive inhibitor</text>
<line x1="300" y1="186" x2="300" y2="158" stroke="currentColor" stroke-width="3"/><line x1="290" y1="156" x2="310" y2="156" stroke="currentColor" stroke-width="3"/>
<rect x="410" y="186" width="180" height="44" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="500" y="214" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Cholesterol</text>
<text x="500" y="248" font-size="12" text-anchor="middle" fill="currentColor">represses the gene</text>
<line x1="500" y1="186" x2="500" y2="158" stroke="currentColor" stroke-width="3"/><line x1="490" y1="156" x2="510" y2="156" stroke="currentColor" stroke-width="3"/>
<rect x="610" y="186" width="180" height="44" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="700" y="214" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">AMPK</text>
<text x="700" y="248" font-size="12" text-anchor="middle" fill="currentColor">phosphorylates it OFF</text>
<line x1="700" y1="186" x2="700" y2="158" stroke="currentColor" stroke-width="3"/><line x1="690" y1="156" x2="710" y2="156" stroke="currentColor" stroke-width="3"/>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-lp-chol-b')}</defs>
<rect x="810" y="186" width="180" height="44" rx="10" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<text x="900" y="214" font-size="16" font-weight="700" text-anchor="middle" fill="currentColor">Insulin</text>
<text x="900" y="248" font-size="12" text-anchor="middle" fill="currentColor">dephosphorylates it ON</text>
<line x1="900" y1="186" x2="900" y2="158" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-chol-b)"/>
<line x1="552" y1="356" x2="590" y2="356" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-chol-b)"/>
<text x="596" y="352" font-size="14" font-weight="700" fill="currentColor">plasma LDL ↓</text>
<text x="596" y="370" font-size="12" fill="currentColor">the statin payoff</text>
</g>
${BOX(664, 70, 140, 46, 'Mevalonate', 18)}
${BOX(846, 70, 134, 46, 'Cholesterol', 18)}
${BOX(20, 310, 160, 44, 'ER cholesterol ↓', 15)}
<line x1="182" y1="332" x2="212" y2="332" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-chol)"/>
${BOX(214, 310, 150, 44, 'SREBP → nucleus', 14)}
<path d="M366 332 H380 V310 H396" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-chol)"/>
<path d="M380 332 V356 H396" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-chol)"/>
${BOX(398, 292, 152, 36, '↑ HMG-CoA reductase', 13)}
${BOX(398, 338, 152, 36, '↑ LDL receptor', 14)}
<text x="700" y="300" font-size="15" font-weight="700" fill="currentColor">Cholesterol's fates</text>
<text x="700" y="326" font-size="14" fill="currentColor">• membranes (fluidity buffer)</text>
<text x="700" y="350" font-size="14" font-weight="700" fill="currentColor">• bile acids — the main disposal route</text>
<text x="700" y="374" font-size="14" fill="currentColor">• steroid hormones</text>
<text x="700" y="398" font-size="14" fill="currentColor">• vitamin D</text>
</svg>`

/* 9 — Fed vs fasted: the same two tissues, lipid traffic reversed by one phosphorylation switch (replace-table, 560×440) */
const fedFastedSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted"><line x1="275" y1="14" x2="275" y2="372" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/></g>
<g class="fig-accent">
<defs>${ARROW('arr-lp-ff-b')}</defs>
<text x="142" y="26" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">FED — insulin ↑</text>
<rect x="30" y="48" width="220" height="68" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="140" y="70" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">LIVER</text>
<text x="140" y="90" font-size="13" text-anchor="middle" fill="currentColor">ACC + FAS on → TG</text>
<text x="140" y="108" font-size="12" text-anchor="middle" fill="currentColor">malonyl-CoA ↑ → CPT-I shut</text>
<line x1="140" y1="118" x2="140" y2="196" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-ff-b)"/>
<text x="150" y="150" font-size="13" font-weight="700" fill="currentColor">VLDL</text>
<text x="150" y="166" font-size="12" fill="currentColor">TG shipped out</text>
<text x="60" y="150" font-size="12" text-anchor="middle" fill="currentColor">gut CM</text>
<line x1="60" y1="156" x2="60" y2="196" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-lp-ff-b)"/>
<rect x="30" y="198" width="220" height="96" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="140" y="220" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">ADIPOSE</text>
<text x="140" y="240" font-size="12" text-anchor="middle" fill="currentColor">LPL ↑ (insulin) unloads TG</text>
<text x="140" y="258" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">HSL OFF — dephosphorylated</text>
<text x="140" y="276" font-size="12" text-anchor="middle" fill="currentColor">→ TG stored</text>
<text x="140" y="330" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">net flux: INTO fat</text>
<text x="140" y="350" font-size="12" text-anchor="middle" fill="currentColor">glucose → acetyl-CoA → citrate → palmitate</text>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-lp-ff-r')}</defs>
<text x="417" y="26" font-size="17" font-weight="700" text-anchor="middle" fill="currentColor">FASTED — glucagon / epi ↑</text>
<rect x="300" y="48" width="230" height="68" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="415" y="70" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">LIVER</text>
<text x="415" y="90" font-size="13" text-anchor="middle" fill="currentColor">β-oxidation → ketones</text>
<text x="415" y="108" font-size="12" text-anchor="middle" fill="currentColor">→ brain, heart, muscle</text>
<line x1="380" y1="196" x2="380" y2="118" stroke="currentColor" stroke-width="3" marker-end="url(#arr-lp-ff-r)"/>
<text x="390" y="150" font-size="13" font-weight="700" fill="currentColor">FFA on albumin</text>
<text x="390" y="166" font-size="12" fill="currentColor">glycerol → gluconeogenesis</text>
<rect x="300" y="198" width="230" height="96" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<text x="415" y="220" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor">ADIPOSE</text>
<text x="415" y="240" font-size="12" font-weight="700" text-anchor="middle" fill="currentColor">HSL ON — PKA-phosphorylated</text>
<text x="415" y="258" font-size="12" text-anchor="middle" fill="currentColor">TG → FFA + glycerol</text>
<text x="415" y="276" font-size="12" text-anchor="middle" fill="currentColor">LPL low</text>
<text x="415" y="330" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">net flux: OUT of fat</text>
<text x="415" y="350" font-size="12" text-anchor="middle" fill="currentColor">malonyl-CoA low → CPT-I open</text>
</g>
<text x="280" y="392" font-size="13" font-weight="700" text-anchor="middle" fill="currentColor">the switch: PKA phosphorylation (fasting) vs insulin dephosphorylation (fed)</text>
<g class="fig-muted">
<text x="280" y="414" font-size="12" text-anchor="middle" fill="currentColor">HSL: phosphorylated = ON · ACC: phosphorylated = OFF</text>
<text x="280" y="434" font-size="12" text-anchor="middle" fill="currentColor">insulin = store · glucagon / epinephrine = mobilize</text>
</g>
</svg>`

export const mcatLipidMetabolismFigures: DeckFigurePlacement[] = [
  {
    at: 'The Cast of Lipids',
    mode: 'replace-table',
    figure: {
      svg: lipidCastSvg,
      alt:
        'Schematic icons of the five lipid classes. Fatty acids: a polar carboxyl head with a zigzag hydrocarbon tail; the saturated chain is straight (packs tight, higher melting point) while a cis double bond bends the chain (packs poorly, lower melting point, more fluid membranes). Triacylglycerol: a glycerol bar with three tails — about 9 kcal/g stored anhydrous, versus about 4 kcal/g for hydrated glycogen. Phospholipid: a polar head with two tails — glycerol, two fatty acids, phosphate and a head group; amphipathic, so it forms bilayers. Cholesterol: a rigid block of steroid rings with a hydroxyl — a fluidity buffer in both directions and the precursor of steroids, bile acids and vitamin D. Sphingolipid: a sphingosine backbone with a fatty acid — membranes, myelin, cell recognition.',
      caption: 'Heads and tails: a cis double bond is a kink, a kink is fluidity; a triacylglycerol is three tails on a glycerol, stored dry.',
    },
    blocks: [
      '- **Fatty acids:** saturated = straight; cis C=C = **kinked** → lower m.p., more fluid',
      '- **TG:** glycerol + 3 FA — **~9 kcal/g, anhydrous** (glycogen ~4, hydrated)',
      '- **Phospholipids** amphipathic → bilayers; **cholesterol** = rigid rings + OH, fluidity buffer',
      '- Cholesterol → steroids, bile acids, vit D; **sphingolipids:** myelin, cell recognition',
    ],
  },
  {
    at: 'Lipoprotein Logic',
    mode: 'lead',
    figure: {
      svg: lipoproteinSvg,
      alt:
        'A transport map. Top lane: the gut packages dietary TG into chylomicrons (apoB-48), which reach blood through lymph, pass the LPL zone where TG is unloaded, and return to the liver as remnants taken up via apoE. Middle lane: the liver exports its own TG as VLDL (apoB-100), which passes the same LPL zone, becomes IDL and then cholesterol-rich LDL; LDL is taken into peripheral cells by the LDL receptor, which reads apoB-100 (missing in familial hypercholesterolemia). The red LPL zone is capillary lipoprotein lipase in muscle and adipose: it needs apoC-II and is raised by insulin in adipose; freed fatty acids are burned by muscle or stored as TG by adipose. Bottom: HDL (apoA-I) collects cholesterol from peripheral cells, LCAT esterifies it, and HDL carries it back to the liver (reverse cholesterol transport); a dashed line shows HDL lending apoC-II and apoE to the TG-rich particles. Density rises as TG is unloaded: chylomicron, VLDL, IDL, LDL.',
      caption: 'Two TG lanes pass the same LPL gate; LDL carries cholesterol out to cells, HDL brings it back — density climbs as fat is unloaded.',
    },
    blocks: [
      '- **Chylomicron (B-48)**: dietary TG; **VLDL (B-100)**: liver TG — both unload at **LPL (needs apoC-II)**',
      '- VLDL remnant → **IDL → LDL**; **LDL receptor** reads B-100; **HDL (A-I)** + LCAT bring cholesterol back',
    ],
  },
  {
    at: 'The Carnitine Shuttle',
    mode: 'lead',
    figure: {
      svg: carnitineSvg,
      alt:
        'A cell cross-section with cytosol on top, two grey membrane bands (outer and inner mitochondrial membranes) and the matrix below. In the cytosol a fatty acid is activated to fatty acyl-CoA by acyl-CoA synthetase, ATP going to AMP plus PPi, which costs two ATP equivalents. The acyl-CoA enters CPT-I (red, the regulated gate on the outer membrane); carnitine comes in and CoA leaves, making acyl-carnitine, which drops to the translocase antiport on the inner membrane and into the matrix, where CPT-II swaps carnitine back for CoA, regenerating fatty acyl-CoA for beta-oxidation. A blue loop returns the carnitine through the translocase to CPT-I. At top right a red malonyl-CoA box, labelled from ACC in the fed state, blocks CPT-I with an inhibition bar — no futile cycle. Footer: carnitine or CPT deficiency gives muscle weakness and hypoketotic hypoglycemia when fasting, because fat cannot reach the matrix.',
      caption: 'Long-chain acyl-CoA cannot cross the inner membrane: CPT-I, the translocase and CPT-II carry it in; malonyl-CoA shuts the gate.',
    },
    blocks: [
      '- Activation: **2 ATP** (ATP → AMP + PPᵢ) once per chain; **CPT-I → translocase → CPT-II** carry it in',
      '- **Malonyl-CoA ⊣ CPT-I** (no futile cycle); CPT / carnitine deficiency → **hypoketotic hypoglycemia**',
    ],
  },
  {
    at: 'One Beta-Oxidation Cycle',
    mode: 'replace-table',
    figure: {
      svg: betaOxSvg,
      alt:
        'One turn of beta-oxidation as a column of boxes. Fatty acyl-CoA (n carbons) → step 1, acyl-CoA dehydrogenase, FAD to FADH₂ (oxidize) → trans-Δ²-enoyl-CoA → step 2, enoyl-CoA hydratase, adds water (hydrate) → 3-hydroxyacyl-CoA → step 3, 3-hydroxyacyl-CoA dehydrogenase, NAD⁺ to NADH (oxidize) → 3-ketoacyl-CoA → step 4, thiolase with CoA (cleave) → acyl-CoA two carbons shorter plus acetyl-CoA, which goes to the TCA cycle (10 ATP) or to ketones. A dashed loop returns the shortened acyl-CoA to the top for the next turn. Footer: per turn, 1 FADH₂, 1 NADH, 1 acetyl-CoA and a chain two carbons shorter — the same chemistry as succinate → fumarate → malate → oxaloacetate in the TCA cycle.',
      caption: 'Oxidize, hydrate, oxidize, cleave: each turn yields an FADH₂, an NADH and an acetyl-CoA, then loops two carbons shorter.',
    },
    blocks: [
      '- **Oxidize** (FAD → FADH₂) → **hydrate** (+ H₂O) → **oxidize** (NAD⁺ → NADH) → **cleave** (thiolase)',
      '- Per turn: **1 FADH₂ + 1 NADH + 1 acetyl-CoA**, chain −2 C',
      '- Same sequence as TCA: succinate → fumarate → malate → OAA',
    ],
  },
  {
    at: 'The Exam-Day Arithmetic',
    mode: 'lead',
    figure: {
      svg: palmitateSvg,
      alt:
        'Top: sixteen carbon beads in a row, shaded in pairs, with seven red dashed cut marks numbered 1 to 7 between the pairs and eight Ac-CoA labels under the pairs — 16 carbons give 8 acetyl-CoA after 7 turns (turns = n/2 − 1, acetyl-CoA = n/2). Below, an ATP ledger drawn as bars to scale: 8 acetyl-CoA × 10 each (each TCA turn gives 3 NADH, 1 FADH₂, 1 GTP) = 80, a long blue bar; 7 NADH × 2.5 = 17.5; 7 FADH₂ × 1.5 = 10.5; activation (ATP → AMP + PPᵢ) = −2, a small red bar to the left of the zero line, paid once per fatty acid whatever its length. Total: 106 ATP; 80 + 17.5 + 10.5 − 2 — forgetting the −2 gives 108.',
      caption: 'Palmitate: seven cuts, eight acetyl-CoA, and a ledger whose only debit is the one-time activation cost — 106 ATP net.',
    },
    blocks: [
      '- C₁₆: **7 turns** (n/2 − 1) → **8 acetyl-CoA, 7 NADH, 7 FADH₂** → 80 + 17.5 + 10.5 = 108',
      '- Subtract the **2-ATP activation** (ATP → AMP + PPᵢ) → **106 ATP**; 108 and 104 are the classic wrong answers',
    ],
  },
  {
    at: 'The Pathway (Liver Mitochondria Only)',
    mode: 'lead',
    figure: {
      svg: ketoneSvg,
      alt:
        'Two compartments separated by a blood band. Left, liver mitochondria (makes ketones, cannot burn them): in fasting, beta-oxidation floods acetyl-CoA while oxaloacetate is drained for gluconeogenesis, so the TCA cycle stalls. 2 acetyl-CoA → acetoacetyl-CoA (thiolase, reversible) → HMG-CoA by mitochondrial HMG-CoA synthase (red: rate-limiting, adds another acetyl-CoA; the cytosolic twin HMG-CoA goes to cholesterol) → acetoacetate by HMG-CoA lyase (releasing acetyl-CoA) → either acetone (spontaneous decarboxylation, exhaled as fruity breath) or beta-hydroxybutyrate by beta-hydroxybutyrate dehydrogenase using NADH. A blue arrow exports beta-hydroxybutyrate and acetoacetate across the blood — water-soluble, no albumin or carnitine needed. Right, brain, heart and muscle burn them: beta-hydroxybutyrate → acetoacetate (regenerating NADH) → acetoacetyl-CoA by SCOT, thiophorase, which takes CoA from succinyl-CoA and which the liver lacks → 2 acetyl-CoA by thiolase → TCA cycle and ATP. Footer: red blood cells have no mitochondria and cannot use ketones; after about three days the brain gets most of its energy from ketones, sparing muscle protein.',
      caption: 'Ketogenesis runs in liver mitochondria (mito HMG-CoA synthase commits); users reverse it with thiophorase, which the liver lacks.',
    },
    blocks: [
      '- Liver mitochondria: 2 acetyl-CoA → **HMG-CoA (mito synthase, rate-limiting)** → acetoacetate → β-HB, acetone',
      '- Users reverse it via **SCOT / thiophorase** (succinyl-CoA donates CoA) — **the liver lacks it**; RBCs can\'t',
    ],
  },
  {
    at: 'Synthesis Is Not Oxidation Run Backward',
    mode: 'replace-table',
    figure: {
      svg: synthVsOxSvg,
      alt:
        'A cell with the cytosol above and a grey mitochondrial matrix below. Left column, red, beta-oxidation (fasting; glucagon, AMPK; matrix): cytosolic fatty acyl-CoA enters the matrix through the carnitine shuttle and CPT-I, is oxidized in the beta-oxidation spiral (FADH₂ and NADH to the electron transport chain) to acetyl-CoA. Right column, blue, fatty acid synthesis (fed; insulin, citrate; cytosol): matrix acetyl-CoA joins oxaloacetate to make citrate, which leaves by the citrate shuttle and is cleaved by ATP-citrate lyase back to cytosolic acetyl-CoA; acetyl-CoA carboxylase (biotin, red, rate-limiting) makes malonyl-CoA, and fatty acid synthase (ACP carrier, NADPH from the pentose phosphate pathway) builds palmitate 16:0. A red inhibition bar runs from malonyl-CoA to CPT-I. Footer: glucagon and AMPK phosphorylate ACC off, malonyl-CoA falls, CPT-I opens.',
      caption: 'Opposite compartments, carriers (CoA vs ACP, FAD/NAD⁺ vs NADPH) and shuttles — and malonyl-CoA ensures both never run at once.',
    },
    blocks: [
      '- **Oxidation:** matrix · carnitine shuttle in · CoA · FAD / NAD⁺ · acetyl-CoA out · glucagon',
      '- **Synthesis:** cytosol · citrate shuttle out · **ACP** · **NADPH** · malonyl-CoA in · insulin',
      '- **ACC** (biotin) rate-limits: citrate / insulin ON; AMPK, glucagon, palmitoyl-CoA OFF',
      '- Its product **malonyl-CoA ⊣ CPT-I** — synthesis switches oxidation off',
    ],
  },
  {
    at: 'Cholesterol Synthesis in One Breath',
    mode: 'lead',
    figure: {
      svg: cholesterolSvg,
      alt:
        'Top row, the pathway: cytosolic acetyl-CoA (from the citrate shuttle) → acetoacetyl-CoA (thiolase) → HMG-CoA in the cytosol (cytosolic HMG-CoA synthase) → red arrow, HMG-CoA reductase in the smooth ER using 2 NADPH, the rate-limiting step → mevalonate → … squalene … → cholesterol. Below the reductase, four controls feed a bus into it: statins (red, competitive inhibitor), cholesterol itself (red, represses the gene), AMPK (red, phosphorylates it off), and insulin (blue, dephosphorylates it on). Bottom left, the SREBP loop: when ER cholesterol falls (statins or less LDL delivered), SREBP is released to the nucleus and raises both the HMG-CoA reductase gene and the LDL-receptor gene; more LDL receptors pull LDL out of plasma — the statin payoff — and the delivered cholesterol refills the ER so SREBP stays put (dashed feedback). Bottom right, cholesterol fates: membranes (fluidity buffer), bile acids (the main disposal route), steroid hormones, vitamin D.',
      caption: 'Statins block the reductase; the cholesterol-starved cell answers through SREBP with more LDL receptors — that is what lowers plasma LDL.',
    },
    blocks: [
      '- Acetyl-CoA → HMG-CoA → **HMG-CoA reductase (ER, 2 NADPH, rate-limiting)** → mevalonate → … → cholesterol',
      '- **Statins** ⊣, cholesterol represses, AMPK ⊣, insulin +; low ER cholesterol → **SREBP** → ↑ **LDL receptor**',
    ],
  },
  {
    at: 'The Master Integration Table',
    mode: 'replace-table',
    figure: {
      svg: fedFastedSvg,
      alt:
        'Two mirrored panels. Left, blue, FED with insulin high: the liver runs ACC and FAS, making TG while high malonyl-CoA shuts CPT-I; VLDL ships TG down to adipose, where chylomicrons from the gut also arrive; adipose LPL is raised by insulin and unloads TG, hormone-sensitive lipase is OFF (dephosphorylated), so TG is stored — net flux into fat (glucose → acetyl-CoA → citrate → palmitate). Right, red, FASTED with glucagon and epinephrine high: in adipose, hormone-sensitive lipase is ON (PKA-phosphorylated), TG becomes free fatty acids and glycerol while LPL is low; FFA ride albumin up to the liver and glycerol goes to gluconeogenesis; the liver runs beta-oxidation and ketogenesis for brain, heart and muscle because low malonyl-CoA leaves CPT-I open — net flux out of fat. Footer: the switch is PKA phosphorylation (fasting) versus insulin dephosphorylation (fed); HSL phosphorylated = ON, ACC phosphorylated = OFF; insulin stores, glucagon and epinephrine mobilize.',
      caption: 'Same liver and adipose, traffic reversed: insulin dephosphorylates (store), PKA phosphorylates (mobilize) — HSL and ACC read it oppositely.',
    },
    blocks: [
      '- **Fed (insulin):** adipose LPL ↑, **HSL off**, TG stored; liver ACC + FAS on → VLDL out; CPT-I shut',
      '- **Fasting (glucagon / epi):** PKA → **HSL on** → FFA + glycerol out; liver β-oxidation + ketones; CPT-I open',
      '- One rule: **phosphorylation = mobilize** (HSL on, ACC off); **dephosphorylation = store**',
    ],
  },
]
