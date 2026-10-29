import type { DeckFigurePlacement } from './index'

/**
 * Organ Systems (7-part survey, MCAT B/B) — figures for the in-class deck.
 * Authored 2026-10-29.
 *
 * The dedicated decks already draw the box heart, cardiac cycle, ECG, vessel
 * tree, capillary Starling forces, baroreceptor loop and PV loop
 * (cardiovascular); the airway tree, alveolus, breathing mechanics, spirogram,
 * O₂–Hb curve and breathing control (respiratory); the nephron,
 * countercurrent, RAAS and ADH (renal); hormone mechanisms, the pituitary,
 * the axis template, adrenal and insulin/glucagon (endocrine); innate vs
 * adaptive, complement, MHC, helper T, antibody architecture, isotypes and
 * the primary/secondary titer curve (immunology); and the A&P survey has
 * CO₂ transport, hemostasis, lymph, thermoregulation and acid–base. So this
 * survey draws DIFFERENT views: Poiseuille's r⁴ with velocity vs total
 * area, Fick's law as three membranes, the digestive tract with pH and
 * enzymes per segment, the gastrin/secretin/CCK map, the two absorption
 * routes out of the enterocyte, glomerular net filtration pressure with the
 * arteriole knobs, the tropic-vs-target 2×2 for localizing endocrine
 * disease, the action-potential trace against E_Na and E_K with refractory
 * bands, and clonal selection with germinal-center maturation.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC
 * or web figure was copied. Anatomy is schematic (boxes, pills, arrows).
 * Numbers shown are the ones the lesson states (pH ~2 / ~8, 16×, P_O₂ 100 /
 * 40 mmHg, 55 / 15 / 30 mmHg, −70 / −55 / +30 / −90 / +60 mV).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-os-<figure>[-colour]).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** Rounded box with a centred label (one line). */
const box = (cx: number, cy: number, w: number, h: number, label: string, size = 18, weight = 700, opacity = 0.08) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy + size * 0.36}" font-size="${size}" font-weight="${weight}" text-anchor="middle" fill="currentColor">${label}</text>`

/** Rounded box with two centred lines (bold title, smaller subtitle). */
const box2 = (cx: number, cy: number, w: number, h: number, l1: string, l2: string, s1 = 18, s2 = 13, opacity = 0.08) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"/><text x="${cx}" y="${cy - 2}" font-size="${s1}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text><text x="${cx}" y="${cy + s2 + 6}" font-size="${s2}" text-anchor="middle" fill="currentColor">${l2}</text>`

const txt = (x: number, y: number, size: number, s: string, attrs = '') =>
  `<text x="${x}" y="${y}" font-size="${size}"${attrs} fill="currentColor">${s}</text>`
const ctext = (x: number, y: number, size: number, s: string, attrs = '') => txt(x, y, size, s, ` text-anchor="middle"${attrs}`)
const rtext = (x: number, y: number, size: number, s: string, attrs = '') => txt(x, y, size, s, ` text-anchor="end"${attrs}`)
const bold = ' font-weight="700"'
const line = (x1: number, y1: number, x2: number, y2: number, marker?: string, w = 2.5, extra = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
/** Open path (boxes-and-arrows elbows), optional arrowhead. */
const path = (d: string, marker?: string, w = 2.5, extra = '') =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
const rect = (x: number, y: number, w: number, h: number, opacity = 0.08, extra = '', rx = 11) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2.5"${extra}/>`

/* 1 — Poiseuille: radius is the lever; velocity falls where total area is largest (lead, 1000×460) */
const BARS: [string, number, number][] = [
  // label, total-area bar height, velocity point height (both illustrative)
  ['Aorta', 22, 200],
  ['Arterioles', 70, 120],
  ['Capillaries', 230, 28],
  ['Venules', 120, 70],
  ['Veins', 48, 130],
]
const BX0 = 610, BSTEP = 86, BBASE = 372
const poiseuilleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-os-po')}</defs>
${txt(40, 36, 22, 'Radius is the lever: R ∝ ηL / r⁴', bold)}
${txt(560, 36, 22, 'Velocity falls where total area is largest', bold)}
<g class="fig-muted"><line x1="520" y1="60" x2="520" y2="420" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
<rect x="90" y="96" width="300" height="72" rx="36" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${txt(90, 86, 15, 'radius r', bold)}
<g class="fig-accent"><defs>${ARROW('arr-os-po-b')}</defs>
${line(120, 132, 350, 132, 'arr-os-po-b', 9)}
${txt(405, 126, 16, 'R = 1×', bold)}${txt(405, 146, 16, 'flow Q', bold)}</g>
<rect x="90" y="222" width="300" height="36" rx="18" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5"/>
${txt(90, 212, 15, 'radius r / 2', bold)}
<g class="fig-accent"><line x1="120" y1="240" x2="330" y2="240" stroke="currentColor" stroke-width="2" marker-end="url(#arr-os-po-b)"/>
${txt(405, 234, 16, 'R = 16×', bold)}${txt(405, 254, 16, 'flow Q / 16', bold)}</g>
<g class="fig-muted">${txt(90, 290, 14, 'same ΔP, same length and viscosity')}</g>
${txt(90, 322, 16, 'Q = ΔP / R  — an Ohm’s-law analog', bold)}
<g class="fig-accent-2">${txt(90, 352, 15, 'Arterioles are the resistance vessels:', bold)}${txt(90, 372, 15, 'a small radius change sets blood pressure', bold)}</g>
<g class="fig-muted">${txt(90, 402, 13, '(2)⁴ = 16: halving the radius multiplies resistance by 16')}</g>
<g class="fig-muted"><line x1="${BX0 - 36}" y1="100" x2="${BX0 - 36}" y2="${BBASE}" stroke="currentColor" stroke-width="1.5"/><line x1="${BX0 - 36}" y1="${BBASE}" x2="990" y2="${BBASE}" stroke="currentColor" stroke-width="1.5"/></g>
${BARS.map(([lab, a], i) => `<rect x="${BX0 + i * BSTEP - 24}" y="${BBASE - a}" width="48" height="${a}" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5"/>${ctext(BX0 + i * BSTEP, BBASE + 20, 13, lab)}`).join('')}
<g class="fig-accent"><path d="${BARS.map(([, , v], i) => `${i ? 'L' : 'M'}${BX0 + i * BSTEP} ${BBASE - v}`).join(' ')}" fill="none" stroke="currentColor" stroke-width="3.5"/>
${BARS.map(([, , v], i) => `<circle cx="${BX0 + i * BSTEP}" cy="${BBASE - v}" r="5" fill="currentColor"/>`).join('')}
${txt(560, 76, 14, 'velocity  v = Q / A_total', bold)}<line x1="760" y1="71" x2="800" y2="71" stroke="currentColor" stroke-width="3.5"/></g>
<rect x="824" y="63" width="14" height="14" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5"/>${txt(844, 76, 14, 'total area A', bold)}
<g class="fig-accent-2">${ctext(BX0 + 2 * BSTEP, 108, 13, 'slowest here', bold)}${ctext(BX0 + 2 * BSTEP, 126, 12, '→ time to exchange')}</g>
<g class="fig-muted">${txt(560, 418, 12, 'Illustrative — the same Q passes every level, so v and A_total move oppositely')}</g>
</svg>`

/* 2 — Fick's law as three membranes (lead, 1000×460) */
const fickPanel = (cx: number, title: string, sub: string, memW: number, memT: number, arrows: number, arrowId: string, verdict: string, verdictClass: string) => {
  const top = 110, memY = 196
  const half = memW / 2
  const xs = Array.from({ length: arrows }, (_, i) => cx - half + (memW / (arrows + 1)) * (i + 1))
  return `${ctext(cx, 82, 17, title, bold)}<g class="fig-muted">${ctext(cx, 100, 13, sub)}</g>
<rect x="${cx - 130}" y="${top}" width="260" height="${memY - top}" rx="14" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
${txt(cx - 120, top + 20, 13, 'alveolus  P_O₂ ≈ 100', bold)}
<rect x="${cx - half}" y="${memY}" width="${memW}" height="${memT}" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2"/>
${memW < 250 ? `<g class="fig-muted"><line x1="${cx - 130}" y1="${memY + memT / 2}" x2="${cx - half - 6}" y2="${memY + memT / 2}" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/><line x1="${cx + half + 6}" y1="${memY + memT / 2}" x2="${cx + 130}" y2="${memY + memT / 2}" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/></g>` : ''}
<rect x="${cx - 130}" y="${memY + memT}" width="260" height="${312 - memY - memT}" rx="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
${txt(cx - 120, 304, 13, 'capillary blood  P_O₂ ≈ 40', bold)}
<g class="${verdictClass}">${xs.map((x) => line(x, memY - 30, x, memY + memT + 30, arrowId, memT > 30 ? 2 : 3.5)).join('')}
${ctext(cx, 340, 15, verdict, bold)}</g>`
}
const fickSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 36, 22, 'Fick’s law:  V_gas ∝ A · D · (P₁ − P₂) / T  — three ways exchange fails', bold)}
<g class="fig-accent"><defs>${ARROW('arr-os-fk-b')}</defs></g>
<g class="fig-accent-2"><defs>${ARROW('arr-os-fk-r')}</defs></g>
<g class="fig-accent">${fickPanel(190, 'Normal', 'large area, thin membrane', 240, 14, 4, 'arr-os-fk-b', 'flux ✓', 'fig-accent')}</g>
${fickPanel(500, 'Emphysema', 'alveolar walls destroyed → A ↓', 100, 14, 2, 'arr-os-fk-r', 'flux ↓  (less surface)', 'fig-accent-2')}
${fickPanel(810, 'Fibrosis · edema', 'thicker barrier → T ↑', 240, 52, 2, 'arr-os-fk-r', 'flux ↓  (longer path)', 'fig-accent-2')}
<g class="fig-muted">${txt(380, 230, 12, 'lost surface')}</g>
<g class="fig-muted"><text x="946" y="224" font-size="12" text-anchor="middle" fill="currentColor">T</text><line x1="946" y1="196" x2="946" y2="248" stroke="currentColor" stroke-width="1.5"/><line x1="940" y1="196" x2="952" y2="196" stroke="currentColor" stroke-width="1.5"/><line x1="940" y1="248" x2="952" y2="248" stroke="currentColor" stroke-width="1.5"/></g>
${ctext(500, 392, 16, 'The gradient (P₁ − P₂) is the third knob: altitude lowers alveolar P_O₂, so the same lung moves less O₂', bold)}
<g class="fig-muted">${ctext(500, 420, 13, 'A ≈ 70 m² of alveolar surface in health; D is the gas’s own diffusion constant (CO₂ diffuses ~20× faster than O₂)')}</g>
</svg>`

/* 3 — The digestive tract in order: pH and what each segment adds (lead, 1000×460) */
const SEG: [string, string][] = [
  ['Mouth', 'pH ≈ 7'],
  ['Esophagus', 'transit'],
  ['Stomach', 'pH ≈ 2'],
  ['Duodenum', 'pH ≈ 8'],
  ['Jejunum', 'absorbs'],
  ['Ileum', 'absorbs'],
  ['Large intestine', 'dries'],
]
const SX = (i: number) => 100 + i * 134
const segNotes: string[][] = [
  ['salivary amylase', 'starch → maltose'],
  ['peristalsis only'],
  ['HCl (parietal)', 'pepsin (chief)', 'gastrin (G cells)'],
  ['HCO₃⁻ neutralizes', 'enzymes + bile enter', 'absorbs Fe, Ca'],
  ['most absorption', 'brush border:', 'lactase, maltase'],
  ['B₁₂ absorbed', 'bile salts recycled'],
  ['water, electrolytes'],
]
const giSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-os-gi')}</defs>
${txt(40, 36, 22, 'The tract in order: each segment’s pH and what it adds', bold)}
${SEG.map(([n, p], i) => box2(SX(i), 94, 122, 54, n, p, i === 6 ? 14 : 16, 13, i === 2 || i === 3 ? 0.14 : 0.08)).join('')}
${SEG.slice(1).map((_, i) => line(SX(i) + 62, 94, SX(i + 1) - 64, 94, 'arr-os-gi')).join('')}
${segNotes.map((lines, i) => lines.map((s, j) => ctext(SX(i), 148 + j * 17, 12, s, (i === 2 && j === 0) || (i === 3 && j === 0) ? bold : '')).join('')).join('')}
<g class="fig-accent-2"><rect x="${SX(2) - 61}" y="67" width="122" height="54" rx="11" fill="none" stroke="currentColor" stroke-width="2.5"/>${ctext(SX(2) - 8, 212, 11.5, 'pepsin needs acid', bold)}</g>
<g class="fig-accent"><rect x="${SX(3) - 61}" y="67" width="122" height="54" rx="11" fill="none" stroke="currentColor" stroke-width="2.5"/>${ctext(SX(3) + 10, 212, 11.5, 'enzymes need pH ≈ 8', bold)}</g>
${box2(240, 340, 170, 54, 'Liver', 'makes bile', 16, 13)}
${box2(420, 340, 170, 54, 'Gallbladder', 'stores + ejects bile', 16, 13)}
${box2(600, 340, 170, 54, 'Pancreas', 'enzymes + HCO₃⁻', 16, 13)}
${line(326, 340, 334, 340, 'arr-os-gi')}
<g class="fig-accent"><defs>${ARROW('arr-os-gi-b')}</defs>
${path('M420 313 V268 H490 V228', 'arr-os-gi-b')}
${path('M600 313 V268 H514 V228', 'arr-os-gi-b')}
${rtext(410, 296, 12.5, 'bile emulsifies fat', bold)}
${txt(612, 288, 12.5, 'trypsin · chymotrypsin ·', bold)}${txt(612, 304, 12.5, 'lipase · amylase · HCO₃⁻', bold)}
${txt(528, 260, 11.5, 'into the duodenum')}</g>
<g class="fig-muted">${ctext(600, 384, 12, 'proteases arrive as zymogens')}</g>
<g class="fig-muted"><defs>${ARROW('arr-os-gi-m')}</defs>${path(`M${SX(5) + 50} 192 V404 H240 V374`, 'arr-os-gi-m', 2, ' stroke-dasharray="4 4"')}${ctext(505, 418, 12, 'bile salts return to the liver (enterohepatic circulation)')}</g>
${ctext(500, 440, 15, 'Each enzyme works at its segment’s pH — secretin’s bicarbonate makes the switch from 2 to 8 at the duodenum', bold)}
</svg>`

/* 4 — Gastrin, secretin, CCK: where made, what triggers, what they do (replace-table, 560×440) */
const hormoneSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${ctext(280, 26, 17, 'Three gut hormones on one map', bold)}
${box2(130, 110, 150, 54, 'Stomach', 'G cells', 16, 13, 0.12)}
${box2(130, 300, 150, 54, 'Duodenum', 'S cells · I cells', 16, 13, 0.12)}
${box2(450, 86, 170, 48, 'Parietal cells', '→ HCl', 14, 12)}
${box2(450, 222, 170, 48, 'Pancreas', 'HCO₃⁻  ·  enzymes', 14, 12)}
${box2(450, 345, 170, 48, 'Gallbladder', 'contracts → bile', 14, 12)}
<g class="fig-muted">${txt(60, 152, 11.5, 'triggers: peptides,')}${txt(60, 166, 11.5, 'distension, vagus')}
${txt(60, 342, 11.5, 'acid → S cells')}${txt(60, 356, 11.5, 'fats + amino acids → I cells')}
${line(185, 137, 185, 273, undefined, 2, ' stroke-dasharray="5 4"')}${txt(192, 210, 11, 'chyme')}</g>
<g class="fig-accent"><defs>${ARROW('arr-os-gh-b')}</defs>
${path('M205 100 C260 100 300 86 362 86', 'arr-os-gh-b', 3)}
${txt(224, 76, 14, 'GASTRIN', bold)}${txt(224, 92, 11.5, '↑ acid')}
${path('M205 282 H250 V218 H362', 'arr-os-gh-b', 3)}
${txt(258, 194, 14, 'SECRETIN', bold)}${txt(258, 207, 11, '↑ HCO₃⁻ → pH ≈ 8')}
</g>
<g class="fig-accent-2"><defs>${ARROW('arr-os-gh-r')}</defs>
${path('M205 306 H330 V232 H362', 'arr-os-gh-r', 3)}
${path('M330 306 V345 H362', 'arr-os-gh-r', 3)}
${txt(222, 300, 14, 'CCK', bold)}${txt(222, 324, 11.5, '↑ enzymes + bile')}
${path('M55 280 C28 245 28 170 55 134', undefined, 2.5, ' stroke-dasharray="6 4"')}
<line x1="46" y1="134" x2="64" y2="134" stroke="currentColor" stroke-width="3"/>
<g transform="rotate(-90 14 212)">${ctext(14, 212, 11, 'secretin + CCK ⊣ emptying', bold)}</g>
</g>
<g class="fig-muted">${txt(30, 392, 12, 'Secretin and CCK are a negative-feedback brake: duodenal contents slow')}${txt(30, 407, 12, 'the stomach (and acid) until the small intestine catches up.')}
${txt(30, 428, 12, 'Gastrin itself is switched off by acid (via somatostatin) — PPIs raise it.')}</g>
</svg>`

/* 5 — Absorption: where along the tract, and the two routes out of the enterocyte (lead, 1000×460) */
const absorbSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-os-ab')}</defs>
${txt(40, 34, 22, 'Where nutrients are absorbed — and the two exits from the enterocyte', bold)}
${box2(150, 76, 200, 46, 'Duodenum', 'iron, calcium', 15, 12)}
${box2(383, 76, 200, 46, 'Jejunum', 'most nutrients', 15, 12)}
${box2(616, 76, 200, 46, 'Ileum', 'B₁₂ · bile salts', 15, 12)}
${box2(849, 76, 200, 46, 'Large intestine', 'water, electrolytes', 15, 12)}
${line(252, 76, 281, 76, 'arr-os-ab')}${line(485, 76, 514, 76, 'arr-os-ab')}${line(718, 76, 747, 76, 'arr-os-ab')}
<g class="fig-muted"><line x1="40" y1="112" x2="960" y2="112" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
${rect(320, 136, 250, 290, 0.05)}
${ctext(445, 158, 16, 'enterocyte', bold)}
<g class="fig-muted">${txt(44, 158, 14, 'gut lumen', bold)}</g>
<g class="fig-muted">${txt(610, 158, 14, 'blood  /  lymph', bold)}</g>
${rect(640, 176, 320, 92, 0.1)}${ctext(800, 204, 15, 'capillary → portal vein', bold)}${ctext(800, 226, 13, '→ LIVER first, then the body')}
${ctext(800, 248, 12, 'sugars, amino acids, water-soluble vitamins')}
${rect(640, 316, 320, 92, 0.1)}${ctext(800, 344, 15, 'lacteal → lymph → thoracic duct', bold)}${ctext(800, 366, 13, '→ blood at the subclavian vein — skips the liver')}
${ctext(800, 388, 12, 'chylomicrons: triglyceride + vitamins A, D, E, K')}
<g class="fig-accent"><defs>${ARROW('arr-os-ab-b')}</defs>
${txt(44, 196, 14, 'glucose, galactose', bold)}${txt(44, 214, 12, 'SGLT1 rides the Na⁺ gradient')}
${txt(44, 236, 14, 'amino acids', bold)}${txt(44, 254, 12, 'Na⁺-coupled carriers')}
${txt(44, 276, 12, 'fructose: GLUT5, facilitated')}
${line(240, 222, 318, 222, 'arr-os-ab-b', 3)}
${ctext(445, 216, 13, 'cross the cell', bold)}${ctext(445, 234, 12, 'Na⁺/K⁺ ATPase keeps the gradient')}
${line(572, 222, 636, 222, 'arr-os-ab-b', 3)}${ctext(604, 212, 12, 'GLUT2', bold)}
</g>
<g class="fig-accent-2"><defs>${ARROW('arr-os-ab-r')}</defs>
${txt(44, 330, 14, 'fats', bold)}${txt(44, 348, 12, 'bile-salt micelles ferry fatty')}${txt(44, 364, 12, 'acids + monoglycerides to the')}${txt(44, 380, 12, 'brush border → diffuse in')}
${line(240, 362, 318, 362, 'arr-os-ab-r', 3)}
${ctext(445, 346, 13, 're-esterified → triglyceride', bold)}${ctext(445, 364, 12, 'coated with protein in the ER/Golgi')}${ctext(445, 382, 13, '= chylomicron', bold)}
${line(572, 362, 636, 362, 'arr-os-ab-r', 3)}${ctext(604, 352, 11, 'exocytosis', bold)}
</g>
<g class="fig-muted">${ctext(445, 410, 12, 'bile salts themselves stay in the lumen → reabsorbed in the ileum')}</g>
${ctext(500, 446, 14, 'Water-soluble nutrients take the portal blood to the liver; fat takes the lymph and reaches the blood later', bold)}
</svg>`

/* 6 — Net filtration pressure at the glomerulus, and the arteriole knobs (lead, 1000×460) */
const pipe = (x: number, y: number, w: number, h: number) =>
  `<rect x="${x}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>`
const knobRow = (y: number, affH: number, effH: number, res: string, cls: string) =>
  `<g class="${cls}">${pipe(650, y, 60, affH)}${pipe(788, y, 60, effH)}${ctext(749, y + 5, 13, 'P_GC', bold)}<rect x="722" y="${y - 16}" width="54" height="32" rx="16" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>${txt(862, y + 5, 15, res, bold)}</g>`
const nfpSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-os-nf')}</defs>
${txt(40, 34, 22, 'Net filtration pressure: one push out, two pulls in', bold)}
<rect x="150" y="90" width="400" height="250" rx="22" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>
${txt(166, 114, 14, 'Bowman’s capsule / space', bold)}
${pipe(200, 190, 300, 56)}${ctext(350, 184, 15, 'glomerular capillary', bold)}${ctext(350, 203, 12, 'high pressure: between two arterioles')}
<g class="fig-accent"><defs>${ARROW('arr-os-nf-b')}</defs>
${pipe(40, 190, 158, 26)}${line(60, 190, 176, 190, 'arr-os-nf-b', 3)}${txt(40, 166, 14, 'afferent arteriole (wide)', bold)}
${pipe(502, 190, 118, 16)}${line(512, 190, 600, 190, 'arr-os-nf-b', 2.5)}${txt(508, 166, 14, 'efferent (narrow)', bold)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-os-nf-r')}</defs>
${line(230, 222, 230, 272, 'arr-os-nf-r', 4)}${ctext(230, 292, 14, 'P_GC ≈ 55', bold)}${ctext(230, 308, 11.5, 'hydrostatic, OUT')}</g>
<g class="fig-accent">${line(350, 272, 350, 222, 'arr-os-nf-b', 4)}${ctext(350, 292, 14, 'π_GC ≈ 30', bold)}${ctext(350, 308, 11.5, 'oncotic, pulls IN')}
${line(470, 272, 470, 222, 'arr-os-nf-b', 4)}${ctext(470, 292, 14, 'P_BS ≈ 15', bold)}${ctext(470, 308, 11.5, 'capsule, pushes IN')}</g>
<g class="fig-muted">${ctext(350, 332, 12, 'π_BS ≈ 0 — the filtrate is protein-free')}</g>
${box(350, 374, 400, 40, 'net = (55 − 15) − (30 − 0) = +10 mmHg → filtration', 15, 700, 0.12)}
${line(350, 394, 350, 414, 'arr-os-nf')}${ctext(350, 436, 14, 'filtrate → proximal tubule', bold)}
<g class="fig-muted"><line x1="620" y1="60" x2="620" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
${txt(650, 114, 17, 'GFR knob = arteriole tone', bold)}
<g class="fig-muted">${ctext(680, 140, 12, 'afferent')}${ctext(818, 140, 12, 'efferent')}</g>
${knobRow(178, 30, 12, 'P_GC ↑ → GFR ↑', 'fig-accent')}
${knobRow(248, 10, 28, 'P_GC ↓ → GFR ↓', 'fig-accent-2')}
<g class="fig-accent">${txt(650, 213, 12, 'dilate afferent  or  constrict efferent')}</g>
<g class="fig-accent-2">${txt(650, 283, 12, 'constrict afferent  or  dilate efferent')}</g>
<g class="fig-muted">${txt(650, 330, 13, 'The pulls move too:')}
${txt(650, 352, 13, 'low albumin → π_GC ↓ → GFR ↑')}
${txt(650, 374, 13, 'ureteral stone → P_BS ↑ → GFR ↓')}
${txt(650, 410, 12, 'Numbers are the lesson’s typical values; only P_GC')}${txt(650, 426, 12, 'pushes fluid out of the capillary')}</g>
</svg>`

/* 7 — Localizing an endocrine lesion: tropic vs target hormone (after, 1000×460) */
const miniAxis = (x: number, y: number, lesion: 'gland' | 'pit', kind: 'fail' | 'tumor', tropic: string, target: string) => {
  const pit = `<rect x="${x}" y="${y}" width="78" height="30" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>${ctext(x + 39, y + 20, 13, 'pituitary', bold)}`
  const gland = `<rect x="${x}" y="${y + 70}" width="78" height="30" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>${ctext(x + 39, y + 90, 13, 'gland', bold)}`
  const ly = lesion === 'pit' ? y : y + 70
  const mark = kind === 'fail'
    ? `<g class="fig-accent-2"><path d="M${x + 84} ${ly + 4} l14 22 M${x + 98} ${ly + 4} l-14 22" stroke="currentColor" stroke-width="3.5" fill="none"/></g>`
    : `<g class="fig-accent-2"><rect x="${x - 4}" y="${ly - 4}" width="86" height="38" rx="10" fill="none" stroke="currentColor" stroke-width="3"/>${txt(x + 86, ly + 22, 12, 'tumor', bold)}</g>`
  return `${pit}${gland}${mark}
<g class="fig-accent"><text x="${x + 39}" y="${y + 58}" font-size="14" font-weight="700" text-anchor="middle" fill="currentColor">↓</text></g>
${txt(x + 150, y + 20, 13, tropic, bold)}${txt(x + 150, y + 90, 13, target, bold)}`
}
const cell = (x: number, y: number, title: string, why: string, eg: string, lesion: 'gland' | 'pit', kind: 'fail' | 'tumor', tropic: string, target: string) =>
  `<rect x="${x}" y="${y}" width="350" height="160" rx="12" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2"/>
${txt(x + 14, y + 26, 16, title, bold)}
${miniAxis(x + 14, y + 40, lesion, kind, tropic, target)}
<g class="fig-muted">${txt(x + 14, y + 152, 12, why)}</g>
${txt(x + 160, y + 104, 11.5, eg)}`
const localizeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(40, 34, 22, 'Read the pair: the tropic hormone tells you whether the pituitary is answering', bold)}
${ctext(435, 72, 15, 'TARGET hormone LOW', bold)}${ctext(795, 72, 15, 'TARGET hormone HIGH', bold)}
<g transform="rotate(-90 150 170)">${ctext(150, 170, 15, 'TROPIC HIGH', bold)}</g>
<g transform="rotate(-90 150 348)">${ctext(150, 348, 15, 'TROPIC LOW', bold)}</g>
<g class="fig-muted">${ctext(66, 170, 12, '(ACTH, TSH)')}${ctext(66, 348, 12, '(ACTH, TSH)')}</g>
${cell(260, 84, 'PRIMARY gland failure', 'feedback intact: the pituitary is “screaming”', 'Hashimoto’s: low T₄, high TSH', 'gland', 'fail', 'tropic ↑', 'target ↓')}
${cell(620, 84, 'Autonomous TROPIC tumor', 'the pituitary tumor ignores the high target', 'pituitary adenoma → ACTH', 'pit', 'tumor', 'tropic ↑', 'target ↑')}
${cell(260, 262, 'SECONDARY (pituitary) failure', 'no tropic signal — a healthy gland sits idle', 'pituitary makes no TSH / ACTH', 'pit', 'fail', 'tropic ↓', 'target ↓')}
${cell(620, 262, 'Autonomous GLAND tumor', 'feedback intact: excess suppresses the pituitary', 'adrenal adenoma → cortisol', 'gland', 'tumor', 'tropic ↓', 'target ↑')}
<g class="fig-muted">${ctext(615, 448, 13, 'Same logic for every axis: HPA (CRH → ACTH → cortisol) and thyroid (TRH → TSH → T₃/T₄)')}</g>
</svg>`

/* 8 — The action potential against E_Na and E_K, with the refractory bands (replace-table, 560×440) */
const mv = (v: number) => 70 + (60 - v) * (250 / 150)
const apSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${ctext(280, 24, 16, 'One spike, read against the equilibrium potentials', bold)}
<g class="fig-muted">
<line x1="70" y1="60" x2="70" y2="${mv(-95)}" stroke="currentColor" stroke-width="1.5"/>
${[60, 30, 0, -55, -70, -90].map((v) => `<line x1="66" y1="${mv(v)}" x2="74" y2="${mv(v)}" stroke="currentColor" stroke-width="1.5"/>${rtext(60, mv(v) + 4, 11.5, v > 0 ? `+${v}` : `${v}`)}`).join('')}
${rtext(60, 56, 11, 'mV')}
<line x1="74" y1="${mv(60)}" x2="470" y2="${mv(60)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>${txt(474, mv(60) + 4, 12, 'E_Na ≈ +60')}
<line x1="74" y1="${mv(-90)}" x2="470" y2="${mv(-90)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>${txt(474, mv(-90) + 4, 12, 'E_K ≈ −90')}
<line x1="74" y1="${mv(-55)}" x2="470" y2="${mv(-55)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 4"/>${txt(474, mv(-55) + 4, 12, 'threshold')}
<line x1="74" y1="${mv(-70)}" x2="470" y2="${mv(-70)}" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 4"/>${txt(474, mv(-70) + 4, 12, 'rest')}
${txt(78, 344, 11, 'time →')}
</g>
<g class="fig-accent-2"><rect x="186" y="${mv(60) - 14}" width="70" height="${mv(-95) - mv(60) + 14}" fill="currentColor" fill-opacity="0.07"/></g>
<g class="fig-accent"><rect x="256" y="${mv(60) - 14}" width="118" height="${mv(-95) - mv(60) + 14}" fill="currentColor" fill-opacity="0.06"/></g>
<path d="M80 ${mv(-70)} H150 C170 ${mv(-70)} 178 ${mv(-62)} 186 ${mv(-55)} C196 ${mv(-30)} 204 ${mv(30)} 214 ${mv(30)} C224 ${mv(30)} 232 ${mv(-20)} 242 ${mv(-50)} C252 ${mv(-75)} 262 ${mv(-82)} 285 ${mv(-82)} C310 ${mv(-82)} 340 ${mv(-74)} 374 ${mv(-70)} H460" fill="none" stroke="currentColor" stroke-width="3.5"/>
<g class="fig-accent-2">${txt(84, mv(16), 13, 'depolarization', bold)}${txt(84, mv(5), 12, 'voltage-gated Na⁺ open,')}${txt(84, mv(-4), 12, 'Na⁺ rushes IN')}
${txt(214, 96, 12, 'peak ≈ +30', bold)}</g>
<g class="fig-accent">${txt(262, mv(16), 13, 'repolarization', bold)}${txt(262, mv(5), 12, 'Na⁺ inactivate, K⁺ open,')}${txt(262, mv(-4), 12, 'K⁺ flows OUT')}
${txt(300, mv(-82) + 24, 11.5, 'hyperpolarization:', bold)}${txt(300, mv(-82) + 38, 11, 'K⁺ close slowly → toward E_K')}</g>
<g class="fig-muted">${txt(100, mv(-62) - 6, 11.5, 'stimulus')}${txt(100, mv(-62) + 7, 11.5, 'to threshold')}</g>
<g class="fig-accent-2"><rect x="186" y="346" width="70" height="12" rx="4" fill="currentColor" fill-opacity="0.5"/>${txt(186, 378, 12, 'absolute: Na⁺ inactivated,', bold)}${txt(186, 392, 11.5, 'no spike possible')}</g>
<g class="fig-accent"><rect x="256" y="346" width="118" height="12" rx="4" fill="currentColor" fill-opacity="0.35"/>${rtext(520, 378, 12, 'relative: K⁺ still out,', bold)}${rtext(520, 392, 11.5, 'needs a stronger stimulus')}</g>
<g class="fig-muted">${txt(80, 416, 12, 'All-or-none: same height every time — intensity is coded as firing frequency.')}${txt(80, 432, 12, 'Rest sits near E_K because the resting membrane leaks mostly K⁺.')}</g>
</svg>`

/* 9 — Clonal selection and germinal-center maturation (lead, 1000×460) */
const bcell = (cx: number, cy: number, tip: string, cls = '') => {
  const yShape = `<path d="M${cx} ${cy - 22} V${cy - 36} M${cx} ${cy - 36} l-8 -10 M${cx} ${cy - 36} l8 -10" fill="none" stroke="currentColor" stroke-width="2.5"/>`
  const tips: Record<string, string> = {
    tri: `<path d="M${cx - 8} ${cy - 46} l-6 -8 h12 z M${cx + 8} ${cy - 46} l-6 -8 h12 z" fill="currentColor"/>`,
    sq: `<rect x="${cx - 13}" y="${cy - 54}" width="9" height="9" fill="currentColor"/><rect x="${cx + 4}" y="${cy - 54}" width="9" height="9" fill="currentColor"/>`,
    dot: `<circle cx="${cx - 8}" cy="${cy - 50}" r="4.5" fill="currentColor"/><circle cx="${cx + 8}" cy="${cy - 50}" r="4.5" fill="currentColor"/>`,
    dia: `<path d="M${cx - 8} ${cy - 55} l5 5 l-5 5 l-5 -5 z M${cx + 8} ${cy - 55} l5 5 l-5 5 l-5 -5 z" fill="currentColor"/>`,
    bar: `<rect x="${cx - 14}" y="${cy - 52}" width="12" height="4" fill="currentColor"/><rect x="${cx + 2}" y="${cy - 52}" width="12" height="4" fill="currentColor"/>`,
  }
  const body = `<circle cx="${cx}" cy="${cy}" r="22" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/><circle cx="${cx}" cy="${cy + 2}" r="9" fill="currentColor" fill-opacity="0.35"/>`
  const inner = `${body}${yShape}${tips[tip]}`
  return cls ? `<g class="${cls}">${inner}</g>` : inner
}
const clonalSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-os-cl')}</defs>
${txt(40, 34, 22, 'Clonal selection: the antigen picks the clone that already fits, then the clone improves', bold)}
<g class="fig-muted">${txt(60, 232, 13, 'naive repertoire — millions of receptors', bold)}${txt(60, 248, 13, 'made in advance by V(D)J recombination', bold)}</g>
${bcell(100, 150, 'sq')}${bcell(180, 150, 'dot')}${bcell(260, 150, 'dia')}${bcell(340, 150, 'bar')}${bcell(420, 150, 'tri', 'fig-accent')}
<g class="fig-accent-2"><defs>${ARROW('arr-os-cl-r')}</defs>
<path d="M392 62 l-6 -8 h12 z" fill="currentColor"/><path d="M402 62 l-6 -8 h12 z" fill="currentColor"/><circle cx="397" cy="72" r="12" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
${txt(418, 76, 13, 'antigen', bold)}
${line(408, 84, 416, 96, 'arr-os-cl-r', 2.5)}</g>
<g class="fig-muted">${ctext(420, 200, 12.5, 'only this receptor fits')}${ctext(100, 200, 12, 'ignored')}${ctext(260, 200, 12, 'ignored')}</g>
<g class="fig-accent"><defs>${ARROW('arr-os-cl-b')}</defs>
${line(450, 150, 556, 150, 'arr-os-cl-b', 3)}${ctext(503, 136, 12.5, 'clonal expansion', bold)}${ctext(503, 170, 11.5, '(needs T-cell help)')}
${bcell(580, 150, 'tri')}${bcell(640, 150, 'tri')}${bcell(700, 150, 'tri')}${bcell(760, 150, 'tri')}
${path('M620 180 C620 215 580 215 580 236', 'arr-os-cl-b', 2.5)}
${path('M700 180 C700 215 820 215 820 236', 'arr-os-cl-b', 2.5)}</g>
${box2(580, 266, 220, 54, 'Plasma cells', 'secrete antibody now', 16, 13, 0.12)}
${box2(820, 266, 220, 54, 'Memory cells', 'wait — fast, tall secondary response', 16, 12, 0.12)}
<g class="fig-muted">${ctext(580, 310, 12, 'short-lived effectors')}${ctext(820, 310, 12, 'the logic of vaccination')}</g>
<rect x="60" y="330" width="880" height="100" rx="14" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
${txt(76, 354, 15, 'Germinal center — the selected clone is refined', bold)}
<g class="fig-accent">${txt(76, 380, 14, 'Somatic hypermutation:', bold)}${txt(76, 398, 13, 'point mutations in the variable region; the')}${txt(76, 414, 13, 'tightest binders are kept → affinity rises')}</g>
<g class="fig-accent-2">${txt(520, 380, 14, 'Class switching:', bold)}${txt(520, 398, 13, 'IgM → IgG / IgA / IgE — the constant region swaps,')}${txt(520, 414, 13, 'the antigen-binding site stays the same')}</g>
<g class="fig-muted">${txt(380, 380, 13, 'both need')}${txt(380, 398, 13, 'T-cell help')}</g>
${ctext(500, 452, 14, 'Specificity exists before the antigen arrives; infection only amplifies and polishes it', bold)}
</svg>`

export const mcatOrganSystemsFigures: DeckFigurePlacement[] = [
  {
    at: 'Pressure–Flow Relationships',
    mode: 'lead',
    figure: {
      svg: poiseuilleSvg,
      alt:
        'Left: two schematic vessels of equal length. The wide one (radius r) carries a thick blue flow arrow labelled R = 1×, flow Q; the narrow one (radius r/2) carries a thin arrow labelled R = 16×, flow Q/16, at the same ΔP, length and viscosity. Below: Q = ΔP / R, an Ohm’s-law analog; in red, arterioles are the resistance vessels — a small radius change sets blood pressure; (2)⁴ = 16. Right: a bar chart of total cross-sectional area across Aorta, Arterioles, Capillaries, Venules, Veins, with a blue velocity line overlaid. Area is smallest at the aorta, largest at the capillaries and falls again toward the veins; velocity does the opposite, lowest at the capillaries, marked slowest here → time to exchange. Footer: illustrative shapes; the same flow Q passes every level, so v and A_total move oppositely.',
      caption: 'Poiseuille on the left (halve the radius, resistance ×16) and the continuity rule on the right (v = Q / A_total, so blood crawls through the capillaries) — both shapes illustrative.',
    },
    blocks: [
      '- R ∝ ηL / r⁴: halving the radius multiplies resistance by 16 — arterioles set BP',
      '- Same Q at every level, so velocity is lowest where total area is largest: the capillaries',
    ],
  },
  {
    at: "Fick's Law of Diffusion",
    mode: 'lead',
    figure: {
      svg: fickSvg,
      alt:
        'Three side-by-side panels, each an alveolus (P_O₂ ≈ 100) over a shaded membrane over capillary blood (P_O₂ ≈ 40), with arrows for O₂ crossing downward. Normal: wide thin membrane, four thick blue arrows, flux ✓. Emphysema (alveolar walls destroyed → A ↓): the membrane spans only the middle, the rest is a dashed lost-surface line, two red arrows, flux ↓ (less surface). Fibrosis · edema (thicker barrier → T ↑): a membrane four times as thick with a T bracket, two thin red arrows, flux ↓ (longer path). Footer: the gradient (P₁ − P₂) is the third knob — altitude lowers alveolar P_O₂, so the same lung moves less O₂; A ≈ 70 m² in health; D is the gas’s own diffusion constant (CO₂ diffuses ~20× faster than O₂).',
      caption: 'Fick’s law as three membranes: emphysema shrinks the area, fibrosis and edema lengthen the path, and altitude flattens the gradient — each one lowers the flux of O₂.',
    },
    blocks: [
      '- V_gas ∝ A · D · (P₁ − P₂) / T: area and gradient help, thickness hurts',
      '- Emphysema → A ↓; fibrosis / pulmonary edema → T ↑; altitude → smaller (P₁ − P₂)',
    ],
  },
  {
    at: 'GI Tract Order',
    mode: 'lead',
    figure: {
      svg: giSvg,
      alt:
        'Seven boxes joined by arrows, left to right: Mouth (pH ≈ 7) — salivary amylase, starch → maltose; Esophagus (transit) — peristalsis, no digestion; Stomach (pH ≈ 2, outlined red) — HCl from parietal cells, pepsin from chief cells, gastrin from G cells, pepsin works only in acid; Duodenum (pH ≈ 8, outlined blue) — bicarbonate neutralizes, pancreatic enzymes + bile, iron and calcium absorbed, pancreatic enzymes need ≈ 8; Jejunum — most nutrients absorbed, brush-border lactase and maltase → monosaccharides; Ileum — vitamin B₁₂, bile salts recycled (enterohepatic); Large intestine — water and electrolytes reabsorbed. Below, accessory organs: Liver (makes bile) → Gallbladder (stores and ejects bile) and Pancreas (enzymes + HCO₃⁻), both with blue arrows up into the duodenum labelled bile emulsifies fat and trypsin · chymotrypsin · lipase · amylase; a dashed grey line returns bile salts from the ileum to the liver; proteases arrive as zymogens. Footer: each enzyme works at its segment’s pH — secretin’s bicarbonate makes the switch from 2 to 8 at the duodenum.',
      caption: 'The tract as a pH story: acid in the stomach for pepsin, bicarbonate in the duodenum for the pancreatic enzymes, and the liver, gallbladder and pancreas all emptying into that one segment.',
    },
    blocks: [
      '- Mouth → esophagus → stomach (pH ≈ 2) → duodenum (pH ≈ 8) → jejunum → ileum → colon',
      '- The duodenum is where bile and the pancreas (enzymes + HCO₃⁻) join the food',
    ],
  },
  {
    at: 'Hormonal Control of Digestion',
    mode: 'replace-table',
    figure: {
      svg: hormoneSvg,
      alt:
        'Two source boxes on the left — Stomach (G cells; triggers: peptides, distension, vagus) above Duodenum (S cells, I cells; triggers: acid → S cells, fats + amino acids → I cells), joined by a dashed chyme line. Three target boxes on the right: Parietal cells (→ HCl), Pancreas (HCO₃⁻ · enzymes), Gallbladder (contracts → bile). Blue arrow GASTRIN from stomach to parietal cells, ↑ acid. Blue arrow SECRETIN from duodenum to the pancreas, ↑ bicarbonate → pH 8. Red arrows CCK from duodenum to the pancreas (enzymes) and to the gallbladder (bile), and a dashed red arrow curling back up to the stomach with a bar, ⊣ emptying. Footer: secretin and CCK are a negative-feedback brake — duodenal contents slow the stomach and acid until the small intestine catches up; gastrin itself is switched off by acid (via somatostatin), which is why PPIs raise it.',
      caption: 'Gastrin from the stomach drives acid; secretin and CCK from the duodenum call in bicarbonate, enzymes and bile — and put the brakes on the stomach.',
    },
    blocks: [
      '- **Gastrin** (G cells; peptides, distension, vagus) → parietal cells ↑ HCl',
      '- **Secretin** (S cells; acid in duodenum) → pancreatic HCO₃⁻, ↓ gastric acid',
      '- **CCK** (I cells; fats, amino acids) → gallbladder bile + pancreatic enzymes; slows emptying',
      '- Duodenal hormones are a negative-feedback brake on the stomach',
    ],
  },
  {
    at: 'Absorption',
    mode: 'lead',
    figure: {
      svg: absorbSvg,
      alt:
        'Top strip: Duodenum (iron, calcium) → Jejunum (most nutrients) → Ileum (B₁₂ · bile salts) → Large intestine (water, electrolytes). Below: gut lumen on the left, an enterocyte box in the middle, and two destinations on the right. Blue lane: glucose and galactose enter by SGLT1 riding the Na⁺ gradient, amino acids by Na⁺-coupled carriers, fructose by GLUT5; they cross the cell (the Na⁺/K⁺ ATPase keeps the gradient) and leave through GLUT2 into a capillary → portal vein → LIVER first, then the body (sugars, amino acids, short fatty acids, water-soluble vitamins). Red lane: fats — bile-salt micelles ferry fatty acids and monoglycerides to the brush border, they diffuse in, are re-esterified to triglyceride, coated with protein in the ER/Golgi into a chylomicron, and exocytosed into a lacteal → lymph → thoracic duct → blood at the subclavian vein, skipping the liver (chylomicrons: triglyceride + fat-soluble vitamins A, D, E, K). Note: bile salts stay in the lumen and are reabsorbed in the ileum. Footer: water-soluble nutrients take the portal blood to the liver; fat takes the lymph and reaches the blood later.',
      caption: 'Two exits from the same cell: sugars and amino acids go out the back into portal blood bound for the liver, while fat is repackaged as chylomicrons and leaves by the lacteal into lymph.',
    },
    blocks: [
      '- Duodenum Fe, Ca; jejunum most nutrients; ileum B₁₂ + bile salts; colon water',
      '- Sugars / amino acids → portal vein → liver; fats → chylomicrons → lacteal → lymph',
    ],
  },
  {
    at: 'Net Filtration Pressure',
    mode: 'lead',
    figure: {
      svg: nfpSvg,
      alt:
        'Left: a large Bowman’s capsule box containing a glomerular capillary pill fed by a thick blue afferent arteriole arrow and drained by a thinner efferent arrow. Under the capillary, three vertical arrows: red P_GC ≈ 55 pointing out of the capillary (hydrostatic, pushes OUT); blue π_GC ≈ 30 pointing in (plasma proteins pull IN); blue P_BS ≈ 15 pointing in (capsule fluid pushes IN); π_BS ≈ 0 because the filtrate is protein-free. A box: net = (55 − 15) − (30 − 0) = +10 mmHg → filtration, with an arrow to filtrate → proximal tubule. Right, GFR knob = arteriole tone: a blue row with a wide afferent pipe, a P_GC pill and a narrow efferent pipe → P_GC ↑ → GFR ↑ (dilate afferent or constrict efferent); a red row with a narrow afferent and wide efferent → P_GC ↓ → GFR ↓ (constrict afferent or dilate efferent). Notes: low albumin → π_GC ↓ → GFR ↑; ureteral stone → P_BS ↑ → GFR ↓; numbers are the lesson’s typical values; only P_GC pushes fluid out.',
      caption: 'Glomerular Starling forces: capillary pressure is the only outward push, the capsule and the plasma proteins pull back, and the two arterioles are the knobs that set that capillary pressure.',
    },
    blocks: [
      '- P_net = (P_GC − P_BS) − (π_GC − π_BS) ≈ (55 − 15) − 30 = +10 mmHg → filtration',
      '- Dilate afferent or constrict efferent → P_GC ↑, GFR ↑; constrict afferent → GFR ↓',
    ],
  },
  {
    at: 'The HPA Axis',
    mode: 'after',
    figure: {
      svg: localizeSvg,
      alt:
        'A 2×2 grid. Columns: TARGET hormone LOW, TARGET hormone HIGH. Rows: TROPIC (ACTH, TSH) HIGH, TROPIC LOW. Each cell holds a small pituitary → gland sketch with the lesion marked in red, and the hormone pair. Top left, PRIMARY gland failure: red X on the gland, tropic ↑, target ↓ — feedback intact, the pituitary is “screaming” at a gland that cannot answer; e.g. Hashimoto’s: low T₄, high TSH. Top right, Autonomous TROPIC tumor: red tumor outline on the pituitary, tropic ↑, target ↑ — a pituitary tumor ignores the high target hormone; pituitary adenoma pumping ACTH. Bottom left, SECONDARY (pituitary) failure: red X on the pituitary, tropic ↓, target ↓ — no tropic signal, so a healthy gland sits idle; pituitary cannot make TSH / ACTH. Bottom right, Autonomous GLAND tumor: red tumor outline on the gland, tropic ↓, target ↑ — feedback intact, the excess suppresses the pituitary; cortisol-secreting adrenal adenoma. Footer: same logic for every axis — HPA (CRH → ACTH → cortisol) and thyroid (TRH → TSH → T₃/T₄).',
      caption: 'Localize the lesion from two numbers: a tropic hormone moving opposite to its target means the pituitary is responding (the gland is the problem); moving with it means the pituitary itself is the problem.',
    },
    blocks: [
      '- Tropic opposite to target → feedback intact → the GLAND is the lesion (primary failure or gland tumor)',
      '- Tropic moving with target → the PITUITARY is the lesion (secondary failure or tropic tumor)',
    ],
  },
  {
    at: 'Neuron Structure & the Action Potential',
    mode: 'replace-table',
    figure: {
      svg: apSvg,
      alt:
        'Membrane potential against time. A left axis runs from +60 to −90 mV with dashed reference lines: E_Na ≈ +60 at the top, threshold (−55), rest (−70) and E_K ≈ −90 at the bottom. The trace sits at rest, rises slowly (stimulus to threshold), then shoots up to a peak ≈ +30 (red label depolarization: voltage-gated Na⁺ open, Na⁺ rushes IN), falls steeply (blue label repolarization: Na⁺ inactivate, K⁺ open, K⁺ flows OUT), undershoots below rest (hyperpolarization: K⁺ channels slow to close, V_m dips toward E_K) and drifts back to −70. A red band under the upstroke and early downstroke is the absolute refractory period (Na⁺ inactivated — no spike at all); a blue band after it is the relative refractory period (K⁺ still leaving, only a strong stimulus fires). Footer: all-or-none — same height every time, intensity is coded as firing frequency; rest sits near E_K because K⁺ leaks.',
      caption: 'The spike is a tug-of-war between two equilibrium potentials: Na⁺ channels drag V_m toward +60, K⁺ channels drag it back toward −90, and the Na⁺ inactivation in between is why it travels one way — illustrative trace.',
    },
    blocks: [
      '- Rest ≈ −70 mV near E_K (K⁺ leak); threshold ≈ −55 opens voltage-gated Na⁺ → peak ≈ +30',
      '- Na⁺ inactivation + K⁺ opening repolarize; slow K⁺ closing overshoots → hyperpolarization',
      '- Absolute refractory (Na⁺ inactivated) → one-way travel; relative needs a stronger stimulus',
      '- All-or-none: strength is coded by frequency; E_ion = (61/z) log([out]/[in]) mV',
    ],
  },
  {
    at: 'Clonal Selection',
    mode: 'lead',
    figure: {
      svg: clonalSvg,
      alt:
        'Top left: five naive B cells in a row, each with a Y-shaped receptor carrying a different tip shape — the naive repertoire, millions of receptors made in advance by V(D)J recombination. A red antigen with triangular shapes drops onto the middle cell, whose triangular receptor is the only one that fits (highlighted blue); the neighbours are labelled ignored. A blue arrow, clonal expansion (with CD4⁺ T-cell help), leads to four identical copies of that cell, which split into two fates: Plasma cells (secrete antibody now; short-lived effectors) and Memory cells (wait — fast, tall secondary response; the logic of vaccination). Bottom, a dashed Germinal center box — the selected clone is refined: in blue, somatic hypermutation (point mutations in the variable region; the tightest binders are kept → affinity rises); in red, class switching (IgM → IgG / IgA / IgE — the constant region swaps, the antigen-binding site stays the same); both need T-cell help. Footer: specificity exists before the antigen arrives; infection only amplifies and polishes it.',
      caption: 'Clonal selection drawn as a line-up: the receptor that fits already exists, the antigen merely selects it, and the germinal center then sharpens affinity and swaps the isotype without touching specificity.',
    },
    blocks: [
      '- The antigen selects a pre-existing clone (V(D)J); expansion → plasma cells + memory cells',
      '- Germinal center: somatic hypermutation raises affinity; class switch IgM → IgG/IgA/IgE keeps specificity',
    ],
  },
]
