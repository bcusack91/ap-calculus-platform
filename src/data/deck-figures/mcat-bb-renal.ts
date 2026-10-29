import type { DeckFigurePlacement } from './index'

/**
 * Renal System (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a box-and-tube nephron
 * reused as the map for three figures, a glomerulus with its Starling arrows,
 * a 2×2 of arteriole manoeuvres, a glucose titration graph, a clearance
 * ladder, the loop of Henle with its medullary gradient, the RAAS cascade as
 * boxes and arrows, the nephron with diuretic sites) — no textbook,
 * prep-company or AAMC figure was copied. Anatomy is schematic only (tubes,
 * circles, bands). The titration curve is the textbook SHAPE and says
 * "illustrative" in its caption; the only numbers drawn anywhere are the ones
 * the lesson states (GFR 125 mL/min ≈ 180 L/day, P_glom ≈ 55 mmHg, threshold
 * ~200 mg/dL, T_m ≈ 375 mg/min near ~300 mg/dL, medulla 300 → ~1200 mOsm/L,
 * ascending-limb outflow ~100–150 mOsm/L, PCT ~65–70%).
 *
 * Colour: blue (fig-accent) = water / dilution / "C below GFR"; red
 * (fig-accent-2) = blood, salt pumps, drug sites, "C above GFR".
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-rn-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Arrowhead that does NOT scale with the stroke — for thick vessel lines. */
const ARROW_FIXED = (id: string, size = 16) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="${size}" markerHeight="${size}" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 13) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 6}" font-size="${r + 4}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

type Anchor = 'start' | 'middle' | 'end'

/** One text label. `bold` is the font-weight attribute VALUE as a string ('' = normal, '700' = bold). */
const T = (x: number, y: number, size: number, text: string, bold = '', anchor: Anchor = 'start', extra = '') =>
  `<text x="${x}" y="${y}" font-size="${size}"${bold ? ` font-weight="${bold}"` : ''}${anchor === 'start' ? '' : ` text-anchor="${anchor}"`} fill="currentColor"${extra ? ' ' + extra : ''}>${text}</text>`

/** Inline subscript: base, subscript, then optional text back on the baseline. */
const SUB = (base: string, sub: string, rest = '') =>
  `${base}<tspan font-size="0.72em" dy="5">${sub}</tspan>${rest ? `<tspan dy="-5">${rest}</tspan>` : ''}`

/** Rounded box with centred lines; the first line is bold unless `firstBold` says otherwise. */
const BOX = (x: number, y: number, w: number, h: number, lines: string[], size = 16, firstBold = '700', fill = 0.06, stroke = 2) => {
  const lh = size + 5
  const y0 = y + h / 2 - ((lines.length - 1) * lh) / 2 + size * 0.36
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="currentColor" fill-opacity="${fill}" stroke="currentColor" stroke-width="${stroke}"/>` +
    lines.map((l, i) => T(x + w / 2, Math.round(y0 + i * lh), size, l, i === 0 ? firstBold : '', 'middle')).join('')
  )
}

/* ── The nephron map shared by figures 1, 4 and 9 (left 620 px of a 1000×460 drawing) ── */
const TUBE =
  'M196 150 C 215 112, 235 112, 250 150 S 285 188, 300 150 S 330 112, 345 150 L 345 380 A 35 35 0 0 0 415 380 L 415 150 C 430 118, 450 118, 465 150 S 500 182, 515 150 S 545 118, 560 150'

const NEPHRON = (id: string, descLabel = 'descending limb', ascLabel = 'ascending limb') => `
<g class="fig-muted">
<rect x="20" y="34" width="600" height="190" rx="6" fill="currentColor" fill-opacity="0.06"/>
<rect x="20" y="224" width="600" height="212" rx="6" fill="currentColor" fill-opacity="0.16"/>
<line x1="20" y1="224" x2="620" y2="224" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
</g>
${T(36, 130, 15, 'CORTEX', '700', 'middle', 'transform="rotate(-90 36 130)" letter-spacing="2"')}
${T(36, 330, 15, 'MEDULLA', '700', 'middle', 'transform="rotate(-90 36 330)" letter-spacing="2"')}
<path d="${TUBE}" fill="none" stroke="currentColor" stroke-width="14" stroke-opacity="0.22" stroke-linecap="round"/>
<line x1="560" y1="100" x2="560" y2="436" stroke="currentColor" stroke-width="16" stroke-opacity="0.22"/>
<defs>${ARROW(`arr-rn-${id}`)}</defs>
<line x1="560" y1="418" x2="560" y2="440" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rn-${id})"/>
<circle cx="150" cy="140" r="46" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2">
<defs>${ARROW_FIXED(`arr-rn-${id}-r`, 18)}</defs>
<circle cx="150" cy="140" r="27" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
<line x1="24" y1="124" x2="100" y2="124" stroke="currentColor" stroke-width="7" marker-end="url(#arr-rn-${id}-r)"/>
<line x1="128" y1="168" x2="92" y2="212" stroke="currentColor" stroke-width="5" marker-end="url(#arr-rn-${id}-r)"/>
${T(52, 108, 15, 'afferent')}
${T(48, 240, 15, 'efferent')}
</g>
${T(150, 68, 16, 'glomerulus in', '', 'middle')}
${T(150, 86, 16, "Bowman's capsule", '', 'middle')}
${T(272, 100, 18, 'PCT', '700', 'middle')}
${T(488, 108, 18, 'DCT', '700', 'middle')}
${T(366, 270, 15, descLabel, '', 'middle', 'transform="rotate(-90 366 270)"')}
${T(404, 270, 15, ascLabel, '', 'middle', 'transform="rotate(-90 404 270)"')}
${T(380, 436, 16, 'loop of Henle', '', 'middle')}
${T(578, 300, 15, 'collecting duct', '', 'middle', 'transform="rotate(-90 578 300)"')}
${T(560, 456, 14, 'to renal pelvis', '', 'middle')}
`

/* 1 — The nephron: one tube, regional specialists (lead, 1000×460) */
const nephronSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${NEPHRON('neph')}
<g class="fig-accent-2">
<path d="M470 236 L470 395 A 12 12 0 0 0 494 395" fill="none" stroke="currentColor" stroke-width="5" stroke-opacity="0.8"/>
${T(48, 262, 15, '→ peritubular')}
${T(48, 280, 15, 'capillaries +')}
${T(48, 298, 15, 'vasa recta')}
</g>
<g class="fig-accent">
<path d="M494 395 L494 236" fill="none" stroke="currentColor" stroke-width="5" stroke-opacity="0.8"/>
</g>
${T(520, 320, 15, 'vasa recta', '', 'middle', 'transform="rotate(-90 520 320)"')}
${NUM(186, 180, '1')}
${NUM(300, 198, '2')}
${NUM(380, 300, '3')}
${NUM(440, 96, '4')}
${NUM(598, 250, '5')}
${T(640, 56, 19, 'One tube, regional specialists', '700')}
${NUM(652, 85, '1')}${T(672, 90, 17, 'Glomerulus + Bowman’s capsule', '700')}${T(672, 110, 16, 'cortex — filtration')}
${NUM(652, 131, '2')}${T(672, 136, 17, 'Proximal convoluted tubule (PCT)', '700')}${T(672, 156, 16, 'cortex — reabsorbs ~65–70%; secretes')}
${NUM(652, 177, '3')}${T(672, 182, 17, 'Loop of Henle', '700')}${T(672, 202, 16, 'dips into the medulla — builds the gradient')}
${NUM(652, 223, '4')}${T(672, 228, 17, 'Distal convoluted tubule (DCT)', '700')}${T(672, 248, 16, 'cortex — fine-tunes NaCl and Ca²⁺')}
${NUM(652, 269, '5')}${T(672, 274, 17, 'Collecting duct', '700')}${T(672, 294, 16, 'to deep medulla — hormonal H₂O, Na⁺/K⁺')}
${T(640, 334, 17, 'A portal system: two beds in series', '700')}
${T(640, 356, 16, 'afferent → glomerulus (bed 1) → efferent →')}
${T(640, 376, 15, 'peritubular capillaries + vasa recta (bed 2)')}
${T(640, 406, 15, 'Juxtamedullary nephrons (long loops) build', '', 'start', 'class="fig-muted"')}
${T(640, 424, 15, 'the gradient; most nephrons are cortical.', '', 'start', 'class="fig-muted"')}
</svg>`

/* 2 — Filtration: Starling forces at the glomerulus and the three-layer filter (lead, 1000×460) */
const filtrationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rn-filt')}</defs>
<circle cx="260" cy="235" r="150" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-rn-filt-r')}${ARROW_FIXED('arr-rn-filt-rf', 20)}</defs>
<line x1="70" y1="40" x2="192" y2="97" stroke="currentColor" stroke-width="12" stroke-linecap="round"/>
<line x1="327" y1="97" x2="450" y2="40" stroke="currentColor" stroke-width="7" stroke-linecap="round" marker-end="url(#arr-rn-filt-rf)"/>
<circle cx="260" cy="235" r="68" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
${T(260, 230, 16, 'glomerular', '', 'middle')}
${T(260, 250, 16, 'capillaries', '', 'middle')}
<line x1="190.5" y1="260.3" x2="147.2" y2="276" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-filt-r)"/>
<line x1="207.7" y1="287.3" x2="175.2" y2="319.8" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-filt-r)"/>
<line x1="312.3" y1="287.3" x2="344.8" y2="319.8" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-filt-r)"/>
<line x1="329.5" y1="260.3" x2="372.8" y2="276" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-filt-r)"/>
${T(260, 414, 17, SUB('P', 'glom', ' ≈ 55 mmHg — hydrostatic, pushes OUT'), '700', 'middle')}
${T(260, 436, 15, 'high because the efferent arteriole downstream resists outflow', '', 'middle')}
</g>
${T(24, 70, 15, 'afferent')}
${T(24, 88, 15, 'arteriole (wide)')}
${T(400, 96, 15, 'efferent arteriole')}
${T(400, 114, 15, 'narrower = downstream resistor')}
<g class="fig-accent">
<defs>${ARROW('arr-rn-filt-b')}</defs>
<line x1="140" y1="235" x2="184" y2="235" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-filt-b)"/>
<line x1="380" y1="235" x2="336" y2="235" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-filt-b)"/>
${T(104, 232, 16, SUB('π', 'glom'), '700', 'end')}
${T(104, 250, 15, 'pulls IN', '', 'end')}
${T(418, 240, 16, SUB('π', 'glom', ' pulls IN'), '700')}
${T(418, 258, 15, '(plasma proteins)')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-rn-filt-m')}</defs>
<line x1="175.2" y1="150.2" x2="206.3" y2="181.3" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rn-filt-m)"/>
<line x1="344.8" y1="150.2" x2="313.7" y2="181.3" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rn-filt-m)"/>
${T(396, 150, 16, SUB('P', 'Bowman', ' (small)'), '700')}
${T(396, 168, 15, 'filtrate pushes back')}
</g>
${T(260, 330, 15, "Bowman's space", '', 'middle')}
<line x1="401" y1="286" x2="516" y2="328" stroke="currentColor" stroke-width="12" stroke-opacity="0.25" stroke-linecap="round"/>
<line x1="470" y1="311" x2="516" y2="328" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rn-filt)"/>
${T(470, 358, 15, 'filtrate → PCT')}
${T(660, 40, 18, 'The filter: size AND charge', '700')}
${T(812, 66, 14, 'blood', '', 'middle', 'class="fig-muted"')}
<rect x="660" y="76" width="305" height="28" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>
${T(812, 95, 15, 'fenestrated endothelium', '', 'middle')}
<rect x="660" y="112" width="305" height="28" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>
${T(812, 131, 15, 'basement membrane (negative charge)', '', 'middle')}
<rect x="660" y="148" width="305" height="28" rx="6" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/>
${T(812, 167, 15, 'podocyte slit diaphragms', '', 'middle')}
${T(812, 200, 14, "Bowman's space (filtrate)", '', 'middle', 'class="fig-muted"')}
<g class="fig-accent">
<defs>${ARROW('arr-rn-filt-b2')}</defs>
<line x1="688" y1="60" x2="688" y2="192" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rn-filt-b2)"/>
${T(660, 228, 15, 'passes (small): water, ions, glucose,', '700')}
${T(660, 246, 15, 'amino acids, urea')}
</g>
<g class="fig-accent-2">
<circle cx="937" cy="62" r="7" fill="currentColor"/>
<line x1="928" y1="73" x2="946" y2="73" stroke="currentColor" stroke-width="3"/>
${T(660, 272, 15, 'stays: cells and albumin', '700')}
${T(660, 290, 15, '(albumin is large AND negatively charged)')}
</g>
${T(660, 324, 18, SUB('GFR ∝ (P', 'glom', ' − P') + SUB('', 'Bowman', ') − π') + SUB('', 'glom'), '700')}
${T(660, 354, 17, 'GFR ≈ 125 mL/min ≈ 180 L/day', '700')}
${T(660, 376, 15, '(the whole plasma volume, ~60 times a day)')}
${T(660, 398, 15, 'filtration fraction ≈ 20% of plasma entering')}
${T(660, 420, 15, 'filtrate = protein-free plasma')}
${T(660, 442, 15, '&gt; 99% of filtered water is reclaimed later')}
</svg>`

/* 3 — Controlling GFR with two arterioles: a 2×2 of manoeuvres (replace-table, 560×440) */
const PANEL = (px: number, py: number, title: string, affW: number, effW: number, fill: number, p: string, g: string, why: string, id: string) => {
  const cy = py + 92
  return `
<rect x="${px}" y="${py}" width="262" height="178" rx="12" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.5" class="fig-muted"/>
${T(px + 131, py + 26, 16, title, '700', 'middle')}
<g class="fig-accent-2">
<defs>${ARROW_FIXED(`arr-rn-art-${id}`, 16)}</defs>
<line x1="${px + 14}" y1="${cy}" x2="${px + 74}" y2="${cy}" stroke="currentColor" stroke-width="${affW}" stroke-linecap="round"/>
<circle cx="${px + 104}" cy="${cy}" r="27" fill="currentColor" fill-opacity="${fill}" stroke="currentColor" stroke-width="2.5"/>
<line x1="${px + 134}" y1="${cy}" x2="${px + 190}" y2="${cy}" stroke="currentColor" stroke-width="${effW}" stroke-linecap="round" marker-end="url(#arr-rn-art-${id})"/>
</g>
${T(px + 44, cy - 20, 13, 'afferent', '', 'middle')}
${T(px + 162, cy - 20, 13, 'efferent', '', 'middle')}
${T(px + 228, cy - 4, 17, p, '700', 'middle')}
${T(px + 228, cy + 20, 17, g, '700', 'middle')}
${T(px + 131, py + 158, 13, why, '', 'middle')}`
}
const arteriolesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 26, 17, 'Squeeze BEFORE or AFTER the glomerulus', '700', 'middle')}
${PANEL(16, 40, 'Constrict afferent', 4, 7, 0.12, SUB('P', 'glom', ' ↓'), 'GFR ↓', 'less blood gets in', 'a')}
${PANEL(282, 40, 'Dilate afferent', 16, 7, 0.45, SUB('P', 'glom', ' ↑'), 'GFR ↑', 'more blood gets in', 'b')}
${PANEL(16, 236, 'Constrict efferent (moderate)', 10, 3, 0.45, SUB('P', 'glom', ' ↑'), 'GFR ↑', 'dams blood in the tuft', 'c')}
${PANEL(282, 236, 'Dilate efferent', 10, 14, 0.12, SUB('P', 'glom', ' ↓'), 'GFR ↓', 'drains the tuft faster', 'd')}
${T(280, 430, 13, 'Autoregulation (myogenic + macula densa feedback) tunes the AFFERENT arteriole', '', 'middle', 'class="fig-muted"')}
</svg>`

/* 4 — Segment-by-segment transport map on the same nephron (lead, 1000×460) */
const transportSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${NEPHRON('tr', 'descending — H₂O only', 'ascending — NaCl only, water-tight')}
${T(262, 206, 14, 'bulk: ~65–70%', '', 'middle')}
${T(488, 64, 14, 'NaCl · Ca²⁺ (PTH)', '', 'middle')}
${T(488, 82, 14, 'water: low', '', 'middle')}
<g class="fig-accent">
<defs>${ARROW('arr-rn-tr-water')}</defs>
<line x1="338" y1="260" x2="302" y2="260" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-tr-water)"/>
<line x1="338" y1="320" x2="302" y2="320" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-tr-water)"/>
<line x1="338" y1="380" x2="302" y2="380" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-tr-water)"/>
${T(296, 265, 15, 'H₂O', '700', 'end')}
${T(296, 325, 15, 'H₂O', '700', 'end')}
${T(296, 385, 15, 'H₂O', '700', 'end')}
${T(290, 242, 15, 'water follows salt', '700', 'end')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-rn-tr-salt')}</defs>
<line x1="422" y1="260" x2="458" y2="260" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-tr-salt)"/>
<line x1="422" y1="320" x2="458" y2="320" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-tr-salt)"/>
<line x1="422" y1="380" x2="458" y2="380" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-tr-salt)"/>
${T(464, 265, 15, 'NaCl', '700')}
${T(464, 325, 15, 'NaCl', '700')}
${T(464, 385, 15, 'NaCl', '700')}
${T(430, 242, 15, 'NKCC pump', '700')}
</g>
${T(640, 56, 17, 'Water permeable?', '700')}
<g class="fig-accent">
<rect x="640" y="68" width="12" height="12" rx="2" fill="currentColor"/>
${T(660, 80, 15, 'yes — PCT (follows solute), descending limb')}
<rect x="640" y="88" width="12" height="12" rx="2" fill="currentColor" fill-opacity="0.45"/>
${T(660, 100, 15, 'only with ADH — collecting duct (aquaporin-2)')}
</g>
<g class="fig-accent-2">
<rect x="640" y="108" width="12" height="12" rx="2" fill="currentColor"/>
${T(660, 120, 15, 'NO — ascending limb (the diluting segment)')}
</g>
${T(640, 154, 17, 'PCT — the bulk workhorse', '700')}
${T(640, 176, 15, '~65–70% of Na⁺ and water; ALL glucose and')}
${T(640, 194, 15, 'amino acids (SGLT); HCO₃⁻ reclaimed')}
${T(640, 212, 15, 'secretes H⁺, organic acids/bases (PAH, drugs)')}
${T(640, 246, 17, 'The engine', '700')}
${T(640, 268, 15, 'basolateral Na⁺/K⁺-ATPase keeps cell Na⁺ low →')}
${T(640, 286, 15, 'apical Na⁺ entry is downhill; water follows')}
${T(640, 320, 17, 'Collecting duct — the final decisions', '700')}
${T(640, 342, 15, 'principal cells: Na⁺ in / K⁺ out (aldosterone)')}
${T(640, 360, 15, 'AQP2 only with ADH · intercalated: H⁺ or HCO₃⁻')}
${T(640, 394, 17, 'DCT', '700')}
${T(640, 416, 15, 'NaCl; Ca²⁺ reabsorption rises with PTH')}
</svg>`

/* 5 — Transport maximum: the glucose titration graph (after, 1000×460) */
const tmSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rn-tm')}</defs>
<line x1="90" y1="400" x2="960" y2="400" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-tm)"/>
<line x1="90" y1="400" x2="90" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-tm)"/>
${T(520, 448, 17, 'plasma glucose (mg/dL)', '', 'middle')}
${T(40, 225, 17, 'mg/min', '', 'middle', 'transform="rotate(-90 40 225)"')}
${T(260, 424, 15, '100', '', 'middle')}
${T(430, 424, 15, '200', '', 'middle')}
${T(600, 424, 15, '300', '', 'middle')}
${T(770, 424, 15, '400', '', 'middle')}
<line x1="260" y1="396" x2="260" y2="404" stroke="currentColor" stroke-width="2"/>
<line x1="430" y1="396" x2="430" y2="404" stroke="currentColor" stroke-width="2"/>
<line x1="600" y1="396" x2="600" y2="404" stroke="currentColor" stroke-width="2"/>
<line x1="770" y1="396" x2="770" y2="404" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<line x1="430" y1="400" x2="430" y2="90" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="90" y1="190" x2="960" y2="190" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="600" y1="400" x2="600" y2="190" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/>
</g>
${T(436, 100, 16, 'threshold ~200 mg/dL', '700')}
${T(436, 120, 15, 'first glucose appears in urine')}
${T(606, 250, 15, 'all carriers saturated ≈300 mg/dL', '', 'start', 'class="fig-muted"')}
${T(84, 195, 15, '375', '', 'end')}
<line x1="90" y1="400" x2="770" y2="64" stroke="currentColor" stroke-width="3.5"/>
${T(778, 62, 17, 'filtered load', '700')}
${T(778, 82, 15, '= GFR × plasma glucose')}
<g class="fig-accent">
<path d="M90 400 L430 232 C 480 200, 540 190, 620 190 L 960 190" fill="none" stroke="currentColor" stroke-width="3.5"/>
${T(700, 182, 17, SUB('reabsorbed — T', 'm', ' ≈ 375 mg/min'), '700')}
${T(700, 208, 15, 'every carrier (SGLT) is busy')}
</g>
<g class="fig-accent-2">
<path d="M430 400 C 480 400, 540 372, 600 358 L 950 185" fill="none" stroke="currentColor" stroke-width="3.5"/>
${T(840, 318, 17, 'excreted (glucosuria)', '700', 'middle')}
${T(840, 338, 15, 'keeps water in the tubule →', '', 'middle')}
${T(840, 356, 15, 'osmotic diuresis', '', 'middle')}
</g>
${T(470, 304, 15, 'splay: nephrons saturate', '', 'middle', 'class="fig-muted"')}
${T(470, 322, 15, 'at different loads', '', 'middle', 'class="fig-muted"')}
<line x1="110" y1="62" x2="150" y2="62" stroke="currentColor" stroke-width="3.5"/>
${T(160, 67, 15, 'filtered')}
<g class="fig-accent"><line x1="110" y1="86" x2="150" y2="86" stroke="currentColor" stroke-width="3.5"/>${T(160, 91, 15, 'reabsorbed')}</g>
<g class="fig-accent-2"><line x1="110" y1="110" x2="150" y2="110" stroke="currentColor" stroke-width="3.5"/>${T(160, 115, 15, 'excreted = filtered − reabsorbed')}</g>
</svg>`

/* 6 — Clearance ladder: where each substance sits relative to GFR (lead, 1000×460) */
const clearanceSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rn-cl')}</defs>
${T(500, 44, 24, SUB('C', 'X', ' = (U') + SUB('', 'X', ' × V) / P') + SUB('', 'X'), '700', 'middle')}
${T(500, 72, 15, 'the virtual plasma volume completely scrubbed of X each minute — then compare it with GFR', '', 'middle')}
<g class="fig-accent"><rect x="60" y="130" width="440" height="200" rx="8" fill="currentColor" fill-opacity="0.07"/></g>
<g class="fig-accent-2"><rect x="500" y="130" width="440" height="200" rx="8" fill="currentColor" fill-opacity="0.07"/></g>
<line x1="60" y1="250" x2="950" y2="250" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rn-cl)"/>
${T(956, 232, 14, 'clearance', '', 'end')}
${T(956, 248, 14, '(mL/min)', '', 'end')}
<circle cx="120" cy="250" r="8" fill="currentColor"/>
${T(120, 176, 18, 'glucose', '700', 'middle')}
${T(120, 198, 16, 'C = 0', '', 'middle')}
${T(120, 286, 15, 'filtered, then', '', 'middle')}
${T(120, 304, 15, 'fully reabsorbed', '', 'middle')}
<circle cx="320" cy="250" r="8" fill="currentColor"/>
${T(320, 176, 18, 'urea', '700', 'middle')}
${T(320, 198, 16, '0 &lt; C &lt; GFR', '', 'middle')}
${T(320, 286, 15, 'filtered,', '', 'middle')}
${T(320, 304, 15, '~half reabsorbed', '', 'middle')}
<circle cx="500" cy="250" r="9" fill="currentColor"/>
${T(500, 176, 18, 'inulin = GFR', '700', 'middle')}
${T(500, 198, 16, 'creatinine ≈ GFR', '', 'middle')}
${T(500, 286, 15, 'filtered only:', '', 'middle')}
${T(500, 304, 15, 'nothing added or removed', '', 'middle')}
${T(500, 322, 14, '≈ 125 mL/min', '700', 'middle')}
<circle cx="840" cy="250" r="8" fill="currentColor"/>
${T(840, 176, 18, 'PAH ≈ renal plasma flow', '700', 'middle')}
${T(840, 198, 16, 'C ≫ GFR', '', 'middle')}
${T(840, 286, 15, 'filtered AND avidly secreted —', '', 'middle')}
${T(840, 304, 15, 'virtually all removed in one pass', '', 'middle')}
<g class="fig-accent">
${T(280, 152, 16, SUB('C', 'X', ' &lt; C') + SUB('', 'inulin', ' → net REABSORPTION'), '700', 'middle')}
</g>
<g class="fig-accent-2">
${T(720, 152, 16, SUB('C', 'X', ' &gt; C') + SUB('', 'inulin', ' → net SECRETION'), '700', 'middle')}
</g>
${T(500, 372, 16, 'Position any mystery molecule on this ladder:  0 (glucose) &lt; urea &lt; inulin / creatinine (= GFR) &lt; PAH (= RPF)', '', 'middle')}
${T(500, 400, 15, 'equal to inulin → neither (or exactly balanced); creatinine is slightly secreted, so it overestimates GFR a little', '', 'middle', 'class="fig-muted"')}
${T(500, 428, 15, 'Creatinine is made at a constant rate and leaves only by filtration: halve GFR and plasma creatinine doubles.', '', 'middle')}
</svg>`

/* 7 — The countercurrent multiplier: loop, gradient, vasa recta, collecting duct (lead, 1000×460) */
const countercurrentSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<rect x="20" y="34" width="700" height="76" rx="6" fill="currentColor" fill-opacity="0.05"/>
<rect x="20" y="110" width="700" height="80" fill="currentColor" fill-opacity="0.08"/>
<rect x="20" y="190" width="700" height="80" fill="currentColor" fill-opacity="0.14"/>
<rect x="20" y="270" width="700" height="80" fill="currentColor" fill-opacity="0.2"/>
<rect x="20" y="350" width="700" height="80" rx="6" fill="currentColor" fill-opacity="0.27"/>
<line x1="20" y1="110" x2="720" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>
</g>
${T(28, 56, 14, 'cortex', '', 'start', 'class="fig-muted"')}
${T(28, 104, 15, '300 mOsm/L', '700')}
${T(28, 424, 15, '~1200 mOsm/L (papilla)', '700')}
${T(58, 265, 14, 'interstitium gets saltier ↓', '', 'middle', 'transform="rotate(-90 58 265)"')}
<path d="M200 385 A 35 35 0 0 0 270 385" fill="none" stroke="currentColor" stroke-width="14" stroke-opacity="0.22"/>
<g class="fig-accent">
<defs>${ARROW('arr-rn-cc-b')}</defs>
<line x1="200" y1="60" x2="200" y2="385" stroke="currentColor" stroke-width="14" stroke-opacity="0.35"/>
<line x1="193" y1="170" x2="152" y2="170" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-cc-b)"/>
<line x1="193" y1="250" x2="152" y2="250" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-cc-b)"/>
<line x1="193" y1="330" x2="152" y2="330" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-cc-b)"/>
${T(146, 175, 15, 'H₂O', '700', 'end')}
${T(146, 255, 15, 'H₂O', '700', 'end')}
${T(146, 335, 15, 'H₂O', '700', 'end')}
${T(190, 50, 14, 'in: isotonic (300)', '', 'end')}
${T(224, 270, 14, 'descending — water leaves', '', 'middle', 'transform="rotate(-90 224 270)"')}
<path d="M494 395 L494 120" fill="none" stroke="currentColor" stroke-width="5" stroke-opacity="0.8"/>
<line x1="549" y1="200" x2="590" y2="200" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-cc-b)"/>
<line x1="549" y1="280" x2="590" y2="280" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-cc-b)"/>
<line x1="549" y1="360" x2="590" y2="360" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-cc-b)"/>
${T(596, 205, 15, 'H₂O', '700')}
${T(596, 285, 15, 'H₂O', '700')}
${T(596, 365, 15, 'H₂O', '700')}
${T(556, 136, 15, 'with ADH: AQP2 open', '700')}
${T(556, 154, 14, 'H₂O out → urine ~1200')}
${T(556, 172, 14, 'no ADH: dilute urine')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-rn-cc-r')}</defs>
<line x1="270" y1="385" x2="270" y2="60" stroke="currentColor" stroke-width="18" stroke-opacity="0.35"/>
<line x1="279" y1="170" x2="320" y2="170" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-cc-r)"/>
<line x1="279" y1="250" x2="320" y2="250" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-cc-r)"/>
<line x1="279" y1="330" x2="320" y2="330" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-rn-cc-r)"/>
${T(326, 175, 15, 'NaCl', '700')}
${T(326, 255, 15, 'NaCl', '700')}
${T(326, 335, 15, 'NaCl', '700')}
${T(280, 50, 14, 'out: dilute (~100–150)')}
${T(250, 270, 14, 'ascending — NaCl pumped out, no water', '', 'middle', 'transform="rotate(-90 250 270)"')}
<path d="M470 120 L470 395 A 12 12 0 0 0 494 395" fill="none" stroke="currentColor" stroke-width="5" stroke-opacity="0.8"/>
<line x1="549" y1="405" x2="580" y2="405" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-rn-cc-r)"/>
${T(586, 402, 14, 'urea (ADH): ~half of')}
${T(586, 418, 14, 'deep osmolarity')}
</g>
${T(326, 140, 14, 'NKCC: salt out,')}
${T(326, 156, 14, 'water stays behind')}
${T(447, 258, 14, 'vasa recta — passive exchanger', '', 'middle', 'transform="rotate(-90 447 258)"')}
<line x1="540" y1="60" x2="540" y2="432" stroke="currentColor" stroke-width="16" stroke-opacity="0.22"/>
<defs>${ARROW('arr-rn-cc')}</defs>
<line x1="540" y1="420" x2="540" y2="442" stroke="currentColor" stroke-width="3" marker-end="url(#arr-rn-cc)"/>
${T(540, 50, 14, 'collecting duct', '', 'middle')}
${T(540, 456, 14, 'urine', '', 'middle')}
${T(740, 56, 18, 'How a small step multiplies', '700')}
${NUM(750, 84, '1')}${T(766, 89, 15, 'Ascending limb pumps NaCl out;')}${T(766, 107, 15, 'water stays → local salt ↑')}
${NUM(750, 132, '2')}${T(766, 137, 15, 'Salty interstitium pulls water')}${T(766, 155, 15, 'out of the descending limb')}
${NUM(750, 180, '3')}${T(766, 185, 15, 'Pre-concentrated fluid feeds')}${T(766, 203, 15, 'the pump → the gradient grows')}
${NUM(750, 228, '4')}${T(766, 233, 15, 'Urea recycling (needs ADH)')}${T(766, 251, 15, 'deepens the inner medulla')}
${T(740, 292, 15, 'Vasa recta = exchangers,', '700')}
${T(740, 310, 15, 'not multipliers: passive hairpins —')}
${T(740, 328, 15, 'down: gain salt, lose water;')}
${T(740, 346, 15, 'up: the reverse. No washout.')}
${T(740, 380, 15, 'Diluting the filtrate and salting', '', 'start', 'class="fig-muted"')}
${T(740, 398, 15, 'the medulla are the same event.', '', 'start', 'class="fig-muted"')}
</svg>`

/* 8 — RAAS as a cascade of boxes and arrows, with ANP as the counterweight (lead, 1000×460) */
const raasSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-rn-raas')}</defs>
${T(20, 36, 14, 'renin release triggers', '700')}
${BOX(20, 46, 184, 36, ['↓ renal perfusion pressure'], 14, '')}
${BOX(20, 94, 184, 36, ['↓ NaCl at the macula densa'], 14, '')}
${BOX(20, 142, 184, 36, ['sympathetic nerves (β₁)'], 14, '')}
<path d="M204 64 L220 112 M204 112 L220 112 M204 160 L220 112" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="220" y1="112" x2="230" y2="112" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-raas)"/>
<rect x="232" y="88" width="114" height="48" rx="10" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${T(289, 106, 13, 'JG cells release', '', 'middle')}
${T(289, 127, 18, 'RENIN', '700', 'middle')}
<line x1="346" y1="112" x2="454" y2="112" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rn-raas)"/>
${T(401, 82, 14, 'angiotensinogen', '', 'middle')}
${T(401, 144, 13, '(from the liver)', '', 'middle')}
${BOX(456, 90, 84, 44, ['Ang I'], 17)}
<line x1="540" y1="112" x2="654" y2="112" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-rn-raas)"/>
${T(598, 98, 15, 'ACE', '700', 'middle')}
${T(598, 144, 13, '(lung endothelium)', '', 'middle')}
<rect x="656" y="86" width="140" height="52" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
${T(726, 118, 18, 'Angiotensin II', '700', 'middle')}
<path d="M726 138 L726 168 L338 168 L338 192 M726 168 L560 168 L560 192 M726 168 L740 168 L740 192 M726 168 L856 168 L856 192" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="338" y1="186" x2="338" y2="194" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-raas)"/>
<line x1="560" y1="186" x2="560" y2="194" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-raas)"/>
<line x1="740" y1="186" x2="740" y2="194" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-raas)"/>
<line x1="856" y1="186" x2="856" y2="194" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-raas)"/>
${BOX(240, 196, 196, 72, ['arterioles constrict', '↑TPR; efferent > afferent', '(defends GFR)'], 14)}
${BOX(452, 196, 216, 72, ['aldosterone (adrenal cortex)', 'Na⁺ in · K⁺ and H⁺ out', 'volume ↑ (salt + water)'], 14)}
${BOX(684, 196, 112, 72, ['ADH', 'water reabsorbed'], 14)}
${BOX(812, 196, 88, 72, ['thirst', '(drink)'], 14)}
<path d="M338 268 L338 292 L500 292 L500 314 M560 268 L560 292 L590 292 L590 314 M740 268 L740 292 L690 292 L690 314 M856 268 L856 292 L760 292 L760 314" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="500" y1="308" x2="500" y2="316" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-raas)"/>
<line x1="590" y1="308" x2="590" y2="316" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-raas)"/>
<line x1="690" y1="308" x2="690" y2="316" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-raas)"/>
<line x1="760" y1="308" x2="760" y2="316" stroke="currentColor" stroke-width="2" marker-end="url(#arr-rn-raas)"/>
<rect x="436" y="318" width="384" height="48" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="3"/>
${T(628, 338, 17, 'blood volume and pressure ↑', '700', 'middle')}
${T(628, 358, 13, 'negative feedback: perfusion restored → renin release falls', '', 'middle')}
<g class="fig-accent-2">
<rect x="20" y="300" width="214" height="118" rx="10" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2.5"/>
${T(127, 324, 15, 'ANP — the counterweight', '700', 'middle')}
${T(127, 346, 14, 'from stretched atria (volume ↑)', '', 'middle')}
${T(127, 366, 14, 'dilates the afferent → GFR ↑', '', 'middle')}
${T(127, 386, 14, '⊣ renin, ⊣ Na⁺ reabsorption', '', 'middle')}
${T(127, 406, 14, '→ salt and water OUT', '700', 'middle')}
<line x1="234" y1="342" x2="422" y2="342" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>
<line x1="424" y1="328" x2="424" y2="356" stroke="currentColor" stroke-width="3.5"/>
${T(328, 334, 13, 'opposes', '', 'middle')}
</g>
<rect x="820" y="300" width="165" height="118" rx="10" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>
${T(902, 322, 15, 'ADH', '700', 'middle')}
${T(902, 340, 14, 'defends OSMOLARITY', '', 'middle')}
${T(902, 356, 14, '(pure water)', '', 'middle')}
${T(902, 380, 15, 'aldosterone', '700', 'middle')}
${T(902, 398, 14, 'defends VOLUME', '', 'middle')}
${T(902, 414, 14, '(salt + water)', '', 'middle')}
${T(500, 446, 14, 'Ang II also constricts the efferent arteriole preferentially, so GFR holds up while systemic TPR rises.', '', 'middle', 'class="fig-muted"')}
</svg>`

/* 9 — Diuretics mapped onto the nephron (lead, 1000×460) */
const diureticsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${NEPHRON('diu')}
<g class="fig-accent-2">
${NUM(250, 58, '1')}${T(268, 63, 15, 'osmotic — acts along the whole nephron', '700')}
${NUM(300, 198, '2')}
${NUM(438, 300, '3')}
${NUM(490, 206, '4')}
${NUM(598, 236, '5')}
</g>
${T(640, 56, 18, 'One drug, one segment', '700')}
<g class="fig-accent-2">
${NUM(652, 85, '1')}${NUM(652, 131, '2')}${NUM(652, 177, '3')}${NUM(652, 223, '4')}${NUM(652, 269, '5')}
</g>
${T(672, 90, 16, 'Osmotic (mannitol) — whole nephron', '700')}${T(672, 110, 15, 'extra solute holds water in the lumen')}
${T(672, 136, 16, 'Carbonic-anhydrase inhibitor — PCT', '700')}${T(672, 156, 15, 'HCO₃⁻ lost → mild; metabolic acidosis')}
${T(672, 182, 16, 'Loop — ascending-limb NKCC', '700')}${T(672, 202, 15, 'strongest; erases the gradient; K⁺ wasting')}
${T(672, 228, 16, 'Thiazide — DCT NaCl cotransporter', '700')}${T(672, 248, 15, 'moderate; gradient spared; K⁺ wasting')}
${T(672, 274, 16, 'K⁺-sparing — collecting-duct Na⁺ entry', '700')}${T(672, 294, 15, 'weak alone; stops the others’ K⁺ loss')}
${T(640, 336, 16, 'Downstream logic', '700')}
${T(640, 358, 15, 'more Na⁺ reaches the collecting duct →')}
${T(640, 376, 15, 'more Na⁺/K⁺ exchange → hypokalemia')}
${T(640, 394, 15, '(loops, thiazides)')}
${T(640, 424, 16, 'Gradient logic', '700')}
${T(640, 446, 15, 'only a loop diuretic erases the multiplier')}
</svg>`

export const mcatRenalFigures: DeckFigurePlacement[] = [
  {
    at: 'The Nephron — One Tube',
    mode: 'lead',
    figure: {
      svg: nephronSvg,
      alt:
        'Schematic nephron drawn as one tube across a light cortex band and a darker medulla band. Left: a red afferent arteriole enters a glomerulus (red disc) inside Bowman’s capsule and a narrower efferent arteriole leaves it toward the peritubular capillaries and vasa recta. The tube runs from the capsule through a coiled proximal convoluted tubule (cortex), straight down the descending limb into the medulla, around the loop of Henle hairpin and up the ascending limb, through a coiled distal convoluted tubule (cortex) into a collecting duct that drops through the whole medulla to the renal pelvis. A red-down / blue-up vasa recta hairpin runs alongside the loop. Numbered 1 to 5 with a key: 1 glomerulus + Bowman’s capsule (cortex, filtration); 2 PCT (cortex, bulk reabsorption ~65–70%, secretion); 3 loop of Henle (dips into the medulla, builds the salt gradient); 4 DCT (cortex, fine-tunes NaCl and Ca²⁺); 5 collecting duct (cortex to deep medulla, hormone-ruled water and Na⁺/K⁺). Note: a portal system of two capillary beds in series (afferent arteriole → glomerulus → efferent arteriole → peritubular capillaries + vasa recta); juxtamedullary nephrons with long loops build the gradient.',
      caption: 'The nephron as one tube with regional specialists: filter in the cortex, build the gradient in the medulla, decide at the collecting duct.',
    },
    blocks: [
      '- Glomerulus/Bowman’s capsule → **PCT** → descending limb → ascending limb → **DCT** → collecting duct — the map everything else hangs on',
      '- Two arterioles bracket the glomerulus (a **portal system**): that is what makes glomerular pressure adjustable',
    ],
  },
  {
    at: 'Filtration — A Starling Problem',
    mode: 'lead',
    figure: {
      svg: filtrationSvg,
      alt:
        'Left: a large circle (Bowman’s capsule) containing a red disc of glomerular capillaries, fed from the upper left by a wide red afferent arteriole and drained to the upper right by a narrower efferent arteriole (the downstream resistor). Red arrows point outward from the capillaries into Bowman’s space: P_glom ≈ 55 mmHg, hydrostatic, pushes out. Blue arrows point inward: π_glom, the plasma-protein oncotic pressure, pulls in. Small grey arrows point inward: P_Bowman, small, filtrate pushing back. A tube leaves the capsule at the bottom right labelled filtrate → PCT. Right: the filter as three stacked layers — fenestrated endothelium, negatively charged basement membrane, podocyte slit diaphragms — with a blue arrow passing through (water, ions, glucose, amino acids, urea pass) and a red blocked dot (cells and albumin, large AND negative, stay). Equation GFR ∝ (P_glom − P_Bowman) − π_glom; GFR ≈ 125 mL/min ≈ 180 L/day; plasma filtered about 60 times a day, filtration fraction ≈ 20%; filtrate is protein-free plasma; more than 99% of the filtered water is reclaimed downstream.',
      caption: 'Glomerular filtration is a Starling problem run at unusually high pressure: hydrostatic pressure out, oncotic pressure in, and a size-and-charge sieve in between.',
    },
    blocks: [
      '- $GFR \\propto (P_{glom} - P_{Bowman}) - \\pi_{glom}$: ~55 mmHg hydrostatic pushes out along the WHOLE capillary — net filtration everywhere',
      '- The barrier filters by **size and charge**: albumin is kept out for both reasons; the filtrate is protein-free plasma (≈ 125 mL/min)',
    ],
  },
  {
    at: 'Controlling GFR with Two Arterioles',
    mode: 'replace-table',
    figure: {
      svg: arteriolesSvg,
      alt:
        'Four panels, each a red afferent arteriole feeding a glomerulus (circle) drained by an efferent arteriole; the arteriole widths and the shading of the glomerulus show the manoeuvre and its result. Constrict afferent (thin inflow): P_glom down, GFR down — less blood gets in. Dilate afferent (wide inflow): P_glom up, GFR up — more blood gets in. Constrict efferent moderately (thin outflow): P_glom up, GFR up — dams blood in the tuft. Dilate efferent (wide outflow): P_glom down, GFR down — drains the tuft faster. Footnote: autoregulation (myogenic response plus macula densa tubuloglomerular feedback) tunes the afferent arteriole.',
      caption: 'Squeeze before the glomerulus and pressure falls; squeeze after it and pressure rises — the two arterioles are a dam on either side of the tuft.',
    },
    blocks: [
      '- **Afferent** constriction → less blood in → $P_{glom}$ ↓, GFR ↓; afferent dilation → both ↑',
      '- **Efferent** constriction (moderate) dams blood in the tuft → $P_{glom}$ ↑, GFR ↑; efferent dilation → both ↓',
      '- **Autoregulation** holds GFR steady: myogenic response + **tubuloglomerular feedback** (macula densa senses NaCl → afferent tone)',
      '- High NaCl delivery → afferent constriction trims GFR; low delivery → afferent dilation and renin release',
    ],
  },
  {
    at: 'Segment-by-Segment Transport Map',
    mode: 'lead',
    figure: {
      svg: transportSvg,
      alt:
        'The same schematic nephron annotated segment by segment. PCT: 65–70% of Na⁺ and water, all glucose and amino acids by Na⁺-cotransport (SGLT), HCO₃⁻ reclaimed, secretes H⁺, PAH and drugs. Descending limb (blue): water only — blue H₂O arrows leave the tube into the medulla, water follows salt. Ascending limb (red): NaCl only and water-tight — red NaCl arrows leave via the NKCC pump. DCT: NaCl reabsorption and Ca²⁺ under PTH, water permeability low. Right panel. Water permeable? yes in PCT and descending limb; only with ADH (aquaporin-2) in the collecting duct; NO in the ascending limb (the diluting segment), low in DCT. The engine: the basolateral Na⁺/K⁺-ATPase keeps cell Na⁺ low, so apical Na⁺ entry is downhill and drags glucose and amino acids (secondary active transport); water follows osmotically. Collecting duct: principal cells take Na⁺ in and put K⁺ out under aldosterone; aquaporin-2 inserted only with ADH; intercalated cells secrete H⁺ or HCO₃⁻. Hormone control: none in PCT and loop; PTH at the DCT; aldosterone and ADH at the collecting duct.',
      caption: 'The transport map: a water-only descending limb and a salt-only ascending limb are the asymmetry the countercurrent multiplier is built on.',
    },
    blocks: [
      '- The engine everywhere is the basolateral **Na⁺/K⁺-ATPase**; apical Na⁺ entry drags glucose/amino acids (SGLT) and water follows',
      '- **Descending** limb: water out, no salt. **Ascending** limb: salt out (NKCC), no water — the diluting segment',
    ],
  },
  {
    at: 'Transport Maximum',
    mode: 'after',
    figure: {
      svg: tmSvg,
      alt:
        'Graph of mg/min against plasma glucose (mg/dL). The filtered load is a straight line through the origin (GFR × plasma glucose). The blue reabsorbed curve follows the filtered line up to the threshold near 200 mg/dL (dashed vertical: first glucose appears in urine), then bends over through a splay region, where nephrons saturate at different loads, and flattens at the transport maximum Tm ≈ 375 mg/min (dashed horizontal) once every SGLT carrier is busy, around 300 mg/dL. The red excreted curve is zero below the threshold, rises through the splay and then climbs parallel to the filtered line: excreted = filtered − reabsorbed. Note: excreted glucose keeps water in the tubule — an osmotic diuresis. Legend: filtered (black), reabsorbed (blue), excreted (red).',
      caption: 'Glucose titration curve (illustrative shape, lesson values): carriers saturate at Tm ≈ 375 mg/min, and glucose spills into urine from a threshold near 200 mg/dL.',
    },
    blocks: [
      '- Below the **threshold (~200 mg/dL)** every filtered glucose molecule is reclaimed; above it, carriers saturate ($T_m$ ≈ 375 mg/min) and glucose spills',
      '- Unreabsorbed glucose is an **osmotic diuretic** — the polyuria and thirst of untreated diabetes mellitus',
    ],
  },
  {
    at: 'Clearance — The Kidney',
    mode: 'lead',
    figure: {
      svg: clearanceSvg,
      alt:
        'Formula C_X = (U_X × V) / P_X, the virtual plasma volume completely scrubbed of X each minute. A horizontal clearance axis with four dots: glucose at zero (filtered, then fully reabsorbed); urea between zero and GFR (filtered, about half reabsorbed); inulin at GFR ≈ 125 mL/min, with creatinine approximately equal (filtered only, nothing added or removed); PAH far to the right at renal plasma flow (filtered AND avidly secreted, virtually all removed in one pass). The region left of the inulin line is shaded blue: C_X below C_inulin means net reabsorption; the region to the right is shaded red: C_X above C_inulin means net secretion. Below: position any mystery molecule on the ladder 0 (glucose) < urea < inulin/creatinine (= GFR) < PAH (= RPF); equal to inulin means neither; creatinine is slightly secreted so it overestimates GFR a little; creatinine is made at a constant rate and leaves only by filtration, so halving GFR doubles plasma creatinine.',
      caption: 'The clearance ladder: inulin marks GFR; anything cleared more slowly was reabsorbed, anything cleared faster was secreted.',
    },
    blocks: [
      '- $C_X = \\dfrac{U_X \\times V}{P_X}$ — inulin is filtered only, so $C_{inulin} = GFR$; creatinine is the clinical stand-in',
      '- For any freely filtered X: $C_X < C_{inulin}$ → net **reabsorption**; $C_X > C_{inulin}$ → net **secretion** (PAH ≈ renal plasma flow)',
    ],
  },
  {
    at: 'The Countercurrent Multiplier',
    mode: 'lead',
    figure: {
      svg: countercurrentSvg,
      alt:
        'The loop of Henle, vasa recta and collecting duct drawn down through a medulla shaded darker with depth, labelled 300 mOsm/L at the cortex boundary and ~1200 mOsm/L at the papilla (interstitium gets saltier downward). The thin blue descending limb takes in isotonic fluid (300) and loses water — blue H₂O arrows leave it at every level. The thick red ascending limb pumps NaCl out (red arrows, NKCC: salt out, water can’t follow) and delivers dilute fluid (~100–150) to the cortex. A red-down, blue-up hairpin alongside is the vasa recta, a passive exchanger. The collecting duct descends on the right: with ADH aquaporin-2 opens and blue H₂O arrows leave at every level, so urine can reach ~1200; without ADH the duct is water-tight and urine stays dilute. A dashed red arrow near the bottom shows urea leaving the inner-medullary duct under ADH, up to about half of the deep osmolarity. Right panel: 1 ascending limb pumps NaCl out, water can’t follow, local salt rises; 2 salty interstitium pulls water out of the descending limb; 3 pre-concentrated fluid now feeds the pump so the gradient grows; 4 urea recycling (needs ADH) deepens the inner medulla. Vasa recta are exchangers, not multipliers: passive hairpins — down they gain salt and lose water, up the reverse — no washout. Diluting the filtrate and salting the medulla are the same event.',
      caption: 'The countercurrent multiplier: opposing flow in a water-only limb and a salt-only limb turns one small step into a 300 → ~1200 mOsm/L gradient that ADH then lets the collecting duct use.',
    },
    blocks: [
      '- Ascending limb pumps salt out (water can’t follow) → salty interstitium pulls water from the descending limb → each pass **multiplies** the gradient',
      '- **Vasa recta** are passive countercurrent exchangers that feed the medulla without washing the gradient out; urea recycling (ADH) deepens it',
    ],
  },
  {
    at: 'RAAS — Defending Volume',
    mode: 'lead',
    figure: {
      svg: raasSvg,
      alt:
        'Flow chart. Three renin-release triggers on the left — falling renal perfusion pressure, low NaCl at the macula densa, sympathetic nerves (β₁) — converge on juxtaglomerular cells releasing RENIN. Renin acts on liver-made angiotensinogen to give Ang I; ACE in the lung endothelium converts Ang I to Angiotensin II. Angiotensin II fans out to four effects: arterioles constrict (TPR up; efferent more than afferent, defending GFR); aldosterone from the adrenal cortex (Na⁺ in, K⁺ and H⁺ out, volume up with salt and water); ADH (water reabsorbed); thirst. All four feed a box: blood volume and pressure up — negative feedback, perfusion restored so renin release falls. Bottom left in red: ANP, the counterweight from stretched atria, dilates the afferent arteriole (GFR up), inhibits renin and Na⁺ reabsorption, so salt and water go out; a red bar shows it opposing the volume rise. Bottom right: ADH defends osmolarity (pure water); aldosterone defends volume (salt plus water). Footnote: Ang II constricts the efferent arteriole preferentially, so GFR holds up while systemic TPR rises.',
      caption: 'RAAS: low perfusion → renin → angiotensin II → vasoconstriction, aldosterone, ADH and thirst; ANP from stretched atria pushes the other way.',
    },
    blocks: [
      '- Renin → angiotensinogen → Ang I →(ACE, lungs)→ **Ang II**: ↑TPR (efferent > afferent), **aldosterone**, ADH, thirst',
      '- **ADH defends osmolarity** (pure water); **aldosterone defends volume** (salt + water); **ANP** is the counterweight',
    ],
  },
  {
    at: 'Diuretics — Pharmacology',
    mode: 'lead',
    figure: {
      svg: diureticsSvg,
      alt:
        'The schematic nephron with five red numbered sites and a key. 1 osmotic (mannitol) acts along the whole nephron: unreabsorbable solute holds water in the lumen. 2 carbonic-anhydrase inhibitor at the PCT: HCO₃⁻ lost, mild diuresis, metabolic acidosis. 3 loop diuretic at the ascending-limb NKCC: strongest, destroys the medullary gradient, K⁺ wasting. 4 thiazide at the DCT NaCl cotransporter: moderate, gradient spared, K⁺ wasting. 5 K⁺-sparing at collecting-duct Na⁺ entry (principal cells): weak alone, prevents the K⁺ loss the others cause. Downstream logic: extra Na⁺ reaching the collecting duct drives more Na⁺/K⁺ exchange, hence hypokalemia with loops and thiazides. Gradient logic: only an ascending-limb drug erases the multiplier itself.',
      caption: 'Every diuretic is a question about one segment: find it on the map, block its transporter, then propagate the extra sodium downstream.',
    },
    blocks: [
      '- Find the **segment**, apply the transport map, propagate **downstream**: extra Na⁺ at the collecting duct → K⁺ wasting (loops, thiazides)',
      '- Only **loop diuretics** (ascending-limb NKCC) erase the medullary gradient — concentrating ability goes with it',
    ],
  },
]
