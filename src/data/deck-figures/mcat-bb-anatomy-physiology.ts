import type { DeckFigurePlacement } from './index'

/**
 * Anatomy & Physiology (7-part survey, MCAT B/B) — figures for the in-class
 * deck. Authored 2026-10-29.
 *
 * The dedicated decks draw the sarcomere, cross-bridge cycle and bone
 * remodeling (musculoskeletal); the HPG axis, menstrual cycle and
 * gametogenesis (reproductive); the eye and ear paths (sensory); cleavage →
 * gastrulation → neurulation (embryology); the box heart, cardiac cycle, ECG
 * and Starling curves (cardiovascular) — so the survey draws DIFFERENT views:
 * the three muscle tissues as cells, the three fetal shunts as a flow, the
 * epidermal strata as a stack, thermoregulation as a two-lane feedback loop,
 * CO₂ transport inside the red cell (chloride shift), hemostasis from spasm
 * to fibrin, the lymph return loop, the negative-vs-positive loop template,
 * and the acid–base 2×2 under the HCO₃⁻/PCO₂ ratio.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. Anatomy is schematic (boxes, rods, circles). The
 * only numbers shown are the ones the lesson states (37 °C, ~70/23/7 %,
 * PCO₂ ≈ 40 mmHg, pH 7.45).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-ap-<figure>[-colour]).
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

/** Dashed, hollow two-line box — an organ the flow bypasses. */
const ghost2 = (cx: number, cy: number, w: number, h: number, l1: string, l2: string, s1 = 14, s2 = 11) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="11" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/><text x="${cx}" y="${cy - 2}" font-size="${s1}" font-weight="700" text-anchor="middle" fill="currentColor">${l1}</text><text x="${cx}" y="${cy + s2 + 5}" font-size="${s2}" text-anchor="middle" fill="currentColor">${l2}</text>`

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
const nucleus = (cx: number, cy: number, rx = 7, ry = 4.5) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>`

/* 1 — Three muscle tissues drawn as cells (replace-table, 560×440) */
const stripes = (x0: number, x1: number, y0: number, y1: number, step = 9) => {
  const out: string[] = []
  for (let x = x0; x <= x1; x += step) out.push(`<line x1="${x}" y1="${y0}" x2="${x}" y2="${y1}" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.45"/>`)
  return out.join('')
}
const CX = [160, 318, 476]
const skeletalCell = (cx: number) =>
  `<rect x="${cx - 64}" y="96" width="128" height="40" rx="20" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
${stripes(cx - 50, cx + 50, 100, 132)}
${nucleus(cx - 38, 101)}${nucleus(cx + 2, 131)}${nucleus(cx + 42, 101)}`
const cardiacCell = (cx: number) =>
  `<rect x="${cx - 66}" y="96" width="62" height="40" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<rect x="${cx + 4}" y="96" width="62" height="40" rx="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
${stripes(cx - 56, cx - 14, 100, 132)}${stripes(cx + 14, cx + 56, 100, 132)}
<g class="fig-accent-2"><path d="M${cx - 4} 97 l5 7 l-5 7 l5 7 l-5 7 l5 7 l-5 4" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
${nucleus(cx - 35, 116)}${nucleus(cx + 35, 116)}`
const smoothCell = (cx: number) =>
  `<path d="M${cx - 66} 110 Q${cx - 30} 90 ${cx + 6} 110 Q${cx - 30} 130 ${cx - 66} 110 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<path d="M${cx - 6} 122 Q${cx + 30} 102 ${cx + 66} 122 Q${cx + 30} 142 ${cx - 6} 122 Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
${nucleus(cx - 30, 110, 9, 3.5)}${nucleus(cx + 30, 122, 9, 3.5)}`
const rowLabel = (y: number, s: string) => `<g class="fig-muted">${txt(10, y, 12, s)}</g>`
const cellv = (i: number, y: number, s: string, size = 12.5, attrs = '') => ctext(CX[i], y, size, s, attrs)
const muscleSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${ctext(280, 28, 17, 'Three muscle tissues, drawn as cells', bold)}
${ctext(CX[0], 68, 16, 'Skeletal', bold)}${ctext(CX[1], 68, 16, 'Cardiac', bold)}${ctext(CX[2], 68, 16, 'Smooth', bold)}
${skeletalCell(CX[0])}${cardiacCell(CX[1])}${smoothCell(CX[2])}
<g class="fig-muted">${cellv(0, 162, 'striated · long fiber')}${cellv(1, 162, 'striated · branched')}${cellv(2, 162, 'no stripes · spindle')}
${cellv(0, 177, 'many nuclei, at the edge')}${cellv(1, 177, '1 nucleus · intercalated disc')}${cellv(2, 177, '1 central nucleus')}</g>
<g class="fig-muted">${[194, 232, 270, 326, 364].map((y) => `<line x1="10" y1="${y}" x2="550" y2="${y}" stroke="currentColor" stroke-width="1"/>`).join('')}</g>
${rowLabel(217, 'control')}${cellv(0, 217, 'voluntary', 13.5, bold)}${cellv(1, 217, 'involuntary', 13.5, bold)}${cellv(2, 217, 'involuntary', 13.5, bold)}
${rowLabel(255, 'cells coupled?')}${cellv(0, 255, 'no — each fiber alone', 13)}${cellv(1, 255, 'yes: gap junctions', 13)}${cellv(2, 255, 'yes: single-unit', 13)}
${rowLabel(292, 'Ca²⁺ comes from')}${cellv(0, 298, 'mostly the SR', 13)}${cellv(1, 292, 'SR + extracellular', 13)}${cellv(2, 292, 'largely extracellular', 13)}
<g class="fig-muted">${cellv(1, 310, '(Ca-induced Ca release)', 11.5)}</g>
${rowLabel(349, 'Ca²⁺ sensor')}${cellv(0, 349, 'troponin', 13.5)}${cellv(1, 349, 'troponin', 13.5)}<g class="fig-accent-2">${cellv(2, 349, 'calmodulin → MLCK', 13.5, bold)}</g>
<g class="fig-accent-2">${ctext(280, 392, 13, 'Smooth muscle has no troponin: Ca²⁺·calmodulin switches on myosin light-chain kinase', bold)}</g>
<g class="fig-muted">${ctext(280, 418, 12, 'Bathe cardiac muscle in Ca²⁺-free fluid and it fails; skeletal muscle still fires from its SR store')}</g>
</svg>`

/* 2 — Fetal circulation: three shunts, two organs bypassed (replace-table, 560×440) */
const shuntSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ap-fc')}</defs>
${ctext(280, 24, 17, 'Three shunts, two organs bypassed', bold)}
${box(70, 410, 84, 32, 'Placenta', 14)}
<g class="fig-muted">${ghost2(70, 330, 84, 40, 'Liver', 'bypassed')}
<defs>${ARROW('arr-ap-fc-m')}</defs>${line(70, 393, 70, 352, 'arr-ap-fc-m', 2)}</g>
${box(180, 355, 90, 34, 'IVC', 14)}
${box(180, 265, 90, 34, 'Right atrium', 13)}
${box(180, 175, 90, 34, 'Right ventricle', 12.5)}
${box(180, 95, 90, 34, 'Pulm. artery', 13)}
<g class="fig-muted">${ghost2(360, 95, 90, 40, 'Lungs', 'bypassed')}${line(225, 95, 313, 95, 'arr-ap-fc-m', 2, ' stroke-dasharray="5 4"')}</g>
${box(360, 265, 90, 34, 'Left atrium', 13)}
${box(360, 175, 90, 34, 'Left ventricle', 12.5)}
${box(470, 175, 90, 34, 'Aorta', 14)}
${box(470, 265, 90, 34, 'Body', 14)}
${line(180, 338, 180, 284, 'arr-ap-fc')}
${line(180, 248, 180, 194, 'arr-ap-fc')}
${line(180, 158, 180, 114, 'arr-ap-fc')}
${line(360, 248, 360, 194, 'arr-ap-fc')}
${line(405, 175, 423, 175, 'arr-ap-fc')}
${line(470, 192, 470, 246, 'arr-ap-fc')}
<g class="fig-muted">${path('M470 282 V410 H114', 'arr-ap-fc-m', 2)}${ctext(300, 426, 11.5, 'umbilical arteries back to the placenta')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-ap-fc-r')}</defs>
${path('M70 385 C70 356 120 355 133 355', 'arr-ap-fc-r', 3)}
${txt(112, 390, 12.5, '① ductus venosus', bold)}
${line(225, 265, 313, 265, 'arr-ap-fc-r', 3)}
${ctext(270, 298, 12.5, '② foramen ovale', bold)}
${path('M180 78 C180 48 470 48 470 156', 'arr-ap-fc-r', 3)}
${ctext(325, 50, 12.5, '③ ductus arteriosus', bold)}
</g>
<g class="fig-muted">${txt(236, 318, 11, 'umbilical vein: oxygenated blood in')}
${txt(236, 380, 11, 'placental O₂ reaches the body')}
${txt(236, 394, 11, 'with two lung passes skipped')}</g>
</svg>`

/* 3 — Epidermal strata as a stack, dermis beneath (replace-table, 560×440) */
const LAYERS: [string, number, number, number, string, string][] = [
  // name, top, height, fill, note1, note2
  ['Corneum', 58, 56, 0.2, 'dead, flattened, keratin-filled', 'the main barrier'],
  ['Lucidum', 114, 22, 0.04, 'thick skin only (palms, soles)', ''],
  ['Granulosum', 136, 46, 0.13, 'keratohyalin granules', 'cells begin to die'],
  ['Spinosum', 182, 58, 0.08, 'desmosome-linked keratinocytes', '“spiny” under the microscope'],
  ['Basale', 240, 44, 0.05, 'one layer of dividing stem cells', 'melanocytes sit here'],
]
const LX0 = 40, LX1 = 318
const strataSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-ap-sk')}</defs>
${ctext(280, 28, 17, 'Epidermis: five strata from the dividing floor to the dead roof', bold)}
${LAYERS.map(([name, top, h, fill, n1, n2]) => {
  const cy = top + h / 2
  return `<rect x="${LX0}" y="${top}" width="${LX1 - LX0}" height="${h}" fill="currentColor" fill-opacity="${fill}" stroke="currentColor" stroke-width="2"${name === 'Lucidum' ? ' stroke-dasharray="5 4"' : ''}/>
${txt(LX0 + 10, cy + 5, name === 'Lucidum' ? 12 : 15, name, bold)}
${txt(332, n2 ? cy - 2 : cy + 4, 12, n1)}${n2 ? txt(332, cy + 13, 12, n2) : ''}`
}).join('')}
${[72, 84, 96, 108].map((y) => `<line x1="140" y1="${y}" x2="306" y2="${y}" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.5"/>`).join('')}
${[150, 164, 150, 164, 150, 164].map((y, i) => `<circle cx="${150 + i * 28}" cy="${y + (i % 2) * 4}" r="2.5" fill="currentColor" fill-opacity="0.7"/>`).join('')}
${[0, 1, 2, 3, 4].map((i) => `<rect x="${150 + i * 32}" y="196" width="24" height="30" rx="7" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>`).join('')}
${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="${136 + i * 21}" y="248" width="15" height="30" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1.5"/>`).join('')}
<g class="fig-accent-2"><circle cx="190" cy="268" r="6" fill="currentColor"/><circle cx="274" cy="268" r="6" fill="currentColor"/>
<path d="M184 262 l-8 -10 M196 262 l8 -10 M268 262 l-8 -10 M280 262 l8 -10" stroke="currentColor" stroke-width="2"/></g>
<g class="fig-muted"><line x1="${LX0}" y1="286" x2="${LX1}" y2="286" stroke="currentColor" stroke-width="3" stroke-dasharray="3 3"/>${txt(332, 290, 12, 'basement membrane')}</g>
<rect x="${LX0}" y="290" width="${LX1 - LX0}" height="78" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-width="2"/>
${txt(LX0 + 10, 318, 15, 'Dermis', bold)}
${txt(332, 312, 12, 'vessels, nerves, glands, follicles')}${txt(332, 327, 12, 'collagen and elastin')}
<g class="fig-accent-2">${[200, 236, 272].map((x) => `<circle cx="${x}" cy="340" r="7" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>`).join('')}
${txt(140, 345, 11.5, 'capillaries', bold)}</g>
<g class="fig-accent"><defs>${ARROW('arr-ap-sk-b')}</defs>${line(236, 331, 236, 300, 'arr-ap-sk-b', 2.5)}${txt(332, 354, 12, 'O₂ and nutrients diffuse up —', bold)}${txt(332, 368, 12, 'the epidermis has no vessels', bold)}</g>
<g class="fig-muted">${line(22, 280, 22, 66, 'arr-ap-sk', 2)}${ctext(22, 296, 11, 'born')}${ctext(22, 58, 11, 'shed')}</g>
<g class="fig-muted">${ctext(280, 400, 12.5, 'Keratinocytes are born in the basale, move up, and die by the corneum')}
${ctext(280, 420, 12.5, 'deep → superficial: Bad Spunky Girls Like Corn')}</g>
</svg>`

/* 4 — Thermoregulation as a two-lane negative-feedback loop (lead, 1000×460) */
const lane = (cx: number, head: string, e1: string, e1s: string, e2: string, e2s: string, result: string, arrId: string) =>
  `${box(cx, 160, 270, 40, head, 16, 700, 0.14)}
${line(cx, 180, cx, 192, arrId)}
${box2(cx, 222, 270, 56, e1, e1s, 16, 13, 0.08)}
${line(cx, 250, cx, 258, arrId)}
${box2(cx, 288, 270, 56, e2, e2s, 16, 13, 0.08)}
${line(cx, 316, cx, 328, arrId)}
${box(cx, 350, 270, 40, result, 16, 700, 0.14)}
${line(cx, 370, cx, 393, arrId)}`
const thermoSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ap-th')}</defs>
${txt(60, 36, 22, 'Thermoregulation: one thermostat, two opposite effector sets', bold)}
${box2(175, 90, 190, 56, 'Thermoreceptors', 'skin + hypothalamus', 16, 13)}
${line(272, 90, 346, 90, 'arr-ap-th')}
${box2(500, 90, 300, 56, 'Hypothalamus = thermostat', 'compares with set point ≈ 37 °C', 17, 13, 0.12)}
<g class="fig-muted">${ctext(830, 82, 13, 'Piloerection (goosebumps):')}${ctext(830, 99, 13, 'traps air in fur — vestigial in us')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-ap-th-r')}</defs>
${line(420, 118, 340, 140, 'arr-ap-th-r')}
${lane(290, 'TOO HOT — core temp ↑', 'Cutaneous vasodilation', 'more blood to the skin → radiates heat', 'Sweating', 'evaporation takes latent heat', 'heat lost → core temp ↓', 'arr-ap-th-r')}
</g>
<g class="fig-accent"><defs>${ARROW('arr-ap-th-b')}</defs>
${line(580, 118, 660, 140, 'arr-ap-th-b')}
${lane(710, 'TOO COLD — core temp ↓', 'Cutaneous vasoconstriction', 'keeps the heat in the core', 'Shivering · brown fat', 'muscle work · UCP-1 uncouples → heat', 'heat made and kept → temp ↑', 'arr-ap-th-b')}
</g>
<g class="fig-muted">${ctext(290, 272, 11, '')}${ctext(500, 236, 12, 'sweating fails in')}${ctext(500, 251, 12, 'high humidity')}${ctext(500, 296, 12, 'brown fat matters')}${ctext(500, 311, 12, 'most in infants')}</g>
${box(500, 415, 640, 40, 'Core temp returns to ≈ 37 °C — the response opposes the stimulus: negative feedback', 15, 700, 0.06)}
<g class="fig-muted"><defs>${ARROW('arr-ap-th-m')}</defs>${path('M180 415 H40 V90 H78', 'arr-ap-th-m', 2.5)}</g>
</svg>`

/* 5 — CO₂ transport inside the red cell: three routes and the chloride shift (lead, 1000×460) */
const co2Svg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ap-co2')}</defs>
${txt(60, 36, 22, 'How CO₂ rides to the lungs: 70% as bicarbonate, 23% on Hb, 7% dissolved', bold)}
<rect x="190" y="100" width="580" height="320" rx="16" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<g class="fig-muted">${txt(205, 122, 13, 'plasma (systemic capillary)')}</g>
${box2(90, 255, 120, 64, 'Tissue', 'makes CO₂', 16, 13, 0.12)}
${line(152, 255, 224, 255, 'arr-ap-co2', 3)}
<circle cx="250" cy="255" r="24" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>${ctext(250, 261, 16, 'CO₂', bold)}
<g class="fig-accent-2"><rect x="330" y="160" width="400" height="185" rx="60" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-muted">${ctext(530, 182, 13, 'red blood cell')}</g>
${line(268, 240, 330, 152, 'arr-ap-co2')}
<g class="fig-accent-2">${txt(345, 150, 15, '~7%', bold)}</g>${txt(385, 150, 15, 'stays dissolved in plasma')}
${path('M600 145 H760 V235 H786', 'arr-ap-co2')}
${line(276, 255, 332, 255, 'arr-ap-co2')}
${line(345, 245, 390, 218, 'arr-ap-co2', 2)}${line(345, 265, 390, 294, 'arr-ap-co2', 2)}
${txt(400, 214, 16, '+ Hb → carbamino-Hb', bold)}<g class="fig-accent-2">${txt(575, 214, 15, '~23%', bold)}</g>
${line(732, 255, 786, 255, 'arr-ap-co2')}
${txt(400, 305, 16, '+ H₂O', bold)}${line(455, 300, 496, 300, 'arr-ap-co2', 2)}<g class="fig-muted">${ctext(476, 289, 10.5, 'carbonic')}${ctext(476, 316, 10.5, 'anhydrase')}</g>
${txt(505, 305, 16, 'H₂CO₃', bold)}${txt(566, 305, 16, '⇌')}${txt(586, 305, 16, 'H⁺ + HCO₃⁻', bold)}
<g class="fig-accent-2"><defs>${ARROW('arr-ap-co2-r')}</defs>${line(594, 311, 594, 323, 'arr-ap-co2-r', 2)}${txt(400, 337, 13, 'H⁺ buffered by Hb → Bohr right-shift', bold)}</g>
<rect x="676" y="334" width="46" height="22" rx="6" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
${line(689, 314, 689, 378, 'arr-ap-co2', 2.5)}
<g class="fig-accent"><defs>${ARROW('arr-ap-co2-b')}</defs>${line(710, 380, 710, 316, 'arr-ap-co2-b', 2.5)}${txt(722, 392, 13, 'Cl⁻ in', bold)}${txt(400, 372, 13, 'chloride shift: HCO₃⁻ out, Cl⁻ in', bold)}</g>
<g class="fig-accent-2">${txt(400, 404, 15, '~70%', bold)}</g>${txt(448, 404, 15, 'as plasma HCO₃⁻')}
${path('M600 400 H760 V275 H786', 'arr-ap-co2')}
${box2(880, 255, 180, 76, 'Lungs', 'everything reverses →', 17, 13, 0.12)}<g class="fig-muted">${ctext(880, 304, 12, 'CO₂ reformed and exhaled')}</g>
<g class="fig-muted">${txt(60, 446, 14, 'Lungs: low PCO₂ runs every step backwards — HCO₃⁻ re-enters, carbonic anhydrase remakes CO₂, Hb lets go')}</g>
</svg>`

/* 6 — Hemostasis: spasm → platelet plug → fibrin, with the drug targets (lead, 1000×460) */
const platelet = (cx: number, cy: number) => `<circle cx="${cx}" cy="${cy}" r="8" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-width="2"/>`
const clotSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ap-hs')}</defs>
${txt(60, 36, 22, 'Hemostasis: spasm → platelet plug → fibrin mesh', bold)}
<g class="fig-muted">${path('M50 74 V68 H540 V74')}${ctext(295, 60, 13, 'PRIMARY hemostasis — vessel and platelets')}
${path('M580 74 V68 H960 V74')}${ctext(770, 60, 13, 'SECONDARY — coagulation cascade → fibrin')}</g>
${box2(150, 110, 210, 56, '1 · Vascular spasm', 'injured vessel constricts', 16, 13)}
${line(257, 110, 302, 110, 'arr-ap-hs')}
${box2(415, 110, 220, 56, '2 · Platelet plug', 'adhere to collagen → aggregate', 16, 13)}
${line(527, 110, 572, 110, 'arr-ap-hs')}
${box2(770, 110, 380, 56, '3 · Coagulation cascade', 'intrinsic + extrinsic converge on one common path', 16, 13)}
${line(80, 225, 230, 225)}${line(370, 225, 560, 225)}${line(80, 320, 560, 320)}
<g class="fig-muted">${txt(84, 243, 12, 'vessel wall')}${txt(430, 310, 12, 'blood flow →')}</g>
<g class="fig-accent-2"><path d="M232 225 l10 -9 l10 9 l10 -9 l10 9 l10 -9 l10 9 l10 -9 l10 9 l10 -9 l10 9 l10 -9 l10 9 l10 -9 l6 9" fill="none" stroke="currentColor" stroke-width="2.5"/>
${ctext(300, 205, 13, 'injury: collagen exposed', bold)}</g>
<g class="fig-accent">${platelet(255, 240)}${platelet(275, 236)}${platelet(295, 242)}${platelet(315, 236)}${platelet(335, 240)}${platelet(265, 256)}${platelet(290, 258)}${platelet(315, 256)}${platelet(340, 256)}${platelet(130, 275)}${platelet(480, 282)}
${ctext(300, 285, 13, 'platelets stick, activate, pile up', bold)}</g>
<g class="fig-muted"><defs>${ARROW('arr-ap-hs-m')}</defs>${line(100, 300, 150, 300, 'arr-ap-hs-m', 2)}${line(430, 300, 480, 300, 'arr-ap-hs-m', 2)}</g>
<g class="fig-accent">${txt(60, 370, 15, 'Aspirin blocks platelet aggregation — primary hemostasis stalls', bold)}</g>
<g class="fig-muted">${txt(60, 392, 13, 'platelet count stays normal; the plug just does not form well')}</g>
<g class="fig-accent-2">${txt(60, 424, 15, 'Warfarin blocks vitamin K → fewer clotting factors — secondary stalls', bold)}</g>
<g class="fig-muted">${txt(60, 446, 13, 'platelets fine, fibrin late: prolonged clotting time')}</g>
${box(665, 182, 150, 36, 'intrinsic pathway', 13)}${box(875, 182, 150, 36, 'extrinsic pathway', 13)}
${line(700, 200, 735, 238, 'arr-ap-hs')}${line(840, 200, 805, 238, 'arr-ap-hs')}
${box(665, 262, 130, 38, 'prothrombin', 14)}${line(732, 262, 752, 262, 'arr-ap-hs')}
<g class="fig-accent-2">${box(830, 262, 130, 38, 'thrombin', 15, 700, 0.16)}
<defs>${ARROW('arr-ap-hs-r')}</defs>${line(800, 282, 770, 318, 'arr-ap-hs-r')}</g>
<g class="fig-muted">${ctext(665, 300, 12, 'needs vitamin K')}</g>
${box(665, 338, 130, 38, 'fibrinogen', 14)}${line(732, 338, 822, 338, 'arr-ap-hs')}
${box(890, 338, 120, 38, 'fibrin', 15)}
${line(890, 358, 890, 384, 'arr-ap-hs')}
${box(830, 410, 260, 40, 'stable fibrin mesh traps cells', 14)}
<g class="fig-muted"><path d="M636 396 l20 28 M656 396 l-20 28 M664 396 l20 28 M684 396 l-20 28 M632 410 h56" stroke="currentColor" stroke-width="1.5"/></g>
</svg>`

/* 7 — The lymphatic return loop, with what joins it and what is not on it (lead, 1000×460) */
const LYMPH: [string, string][] = [
  ['Blood capillary', 'fluid filters out'],
  ['Interstitial fluid', 'bathes the cells'],
  ['Lymph capillary', 'blind-ended, one-way'],
  ['Lymph node', 'filters lymph · B and T cells'],
  ['Thoracic duct', '→ subclavian vein'],
]
const LCX = [134, 328, 522, 716, 910]
const lymphSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ap-ly')}</defs>
${txt(60, 36, 22, 'Lymph is filtered plasma on its way back to the veins', bold)}
${LYMPH.map(([a, b], i) => box2(LCX[i], 105, 170, 60, a, b, 15, 12)).join('')}
${[0, 1, 2, 3].map((i) => line(LCX[i] + 86, 105, LCX[i + 1] - 88, 105, 'arr-ap-ly')).join('')}
${path('M910 136 V290 H134 V140', 'arr-ap-ly')}
<g class="fig-muted">${ctext(620, 282, 14, 'lymph rejoins the blood — a one-way return loop')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-ap-ly-r')}</defs>${line(328, 136, 316, 186, 'arr-ap-ly-r', 2.5, ' stroke-dasharray="6 4"')}
${box2(310, 215, 200, 56, 'No return → EDEMA', 'interstitial fluid piles up', 15, 12, 0.12)}</g>
<g class="fig-accent"><defs>${ARROW('arr-ap-ly-b')}</defs>${line(540, 186, 530, 137, 'arr-ap-ly-b', 2.5)}
${box2(545, 215, 260, 56, 'Intestinal lacteals', 'dietary fat → chylomicrons → lymph', 15, 12, 0.12)}
${ctext(545, 258, 11.5, 'fat skips the portal blood')}</g>
<g class="fig-muted">${ctext(500, 328, 13, 'Lymphoid organs that are NOT on the fluid route')}</g>
${box2(300, 372, 320, 56, 'Spleen', 'filters BLOOD; removes old red cells', 16, 13)}
${box2(700, 372, 320, 56, 'Thymus', 'where T cells mature', 16, 13)}
<g class="fig-muted">${txt(60, 440, 14, 'Node = filters lymph · spleen = filters blood · thymus = schools T cells; without lymph return, tissue swells')}</g>
</svg>`

/* 8 — The feedback template with both signs (lead, 1000×460) */
const loop = (cx: number, cls: string, arrId: string, sign: string, head: string, l1: string, l2: string, l3: string, exLabel: string) =>
  `<g class="${cls}"><defs>${ARROW(arrId)}</defs>
${ctext(cx, 64, 18, head, bold)}
${box(cx, 100, 280, 44, 'Stimulus: variable moves', 16, 700, 0.1)}
${path(`M${cx + 140} 100 H${cx + 180} V162`, arrId)}
${box2(cx + 150, 190, 170, 56, 'Receptor', '→ control center', 15, 13, 0.1)}
${path(`M${cx + 180} 218 V280 H${cx + 142}`, arrId)}
${box(cx, 280, 280, 44, 'Effector response', 16, 700, 0.1)}
${path(`M${cx - 140} 280 H${cx - 170} V100 H${cx - 142}`, arrId, 3)}
<circle cx="${cx - 170}" cy="190" r="15" class="fig-bg" stroke="currentColor" stroke-width="2.5"/>${ctext(cx - 170, 197, 20, sign, bold)}
${ctext(cx - 30, 174, 16, l1, bold)}${ctext(cx - 30, 198, 14, l2)}${ctext(cx - 30, 222, 13, l3)}
</g>
<g class="fig-muted">${txt(cx - 170, 322, 12, exLabel)}</g>`
const feedbackSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(60, 32, 22, 'Same loop, opposite sign: does the response oppose or amplify the stimulus?', bold)}
<g class="fig-muted">${line(500, 56, 500, 422, undefined, 1.5)}</g>
${loop(240, 'fig-accent', 'arr-ap-fb-b', '−', 'NEGATIVE feedback — the default', 'response OPPOSES it', 'variable returns to set point', 'stabilizes; loop idles when there', 'examples — set-point control')}
${['glucose ↑ → insulin → glucose ↓', 'core temp → hypothalamus → sweat / shiver', 'BP ↓ → baroreceptors → heart rate ↑'].map((e, i) => txt(70, 345 + i * 24, 15, e)).join('')}
${loop(740, 'fig-accent-2', 'arr-ap-fb-r', '+', 'POSITIVE feedback — rare, explosive', 'response AMPLIFIES it', 'runs faster and faster…', 'until a discrete endpoint ends it', 'examples — each ends at an event')}
${['oxytocin → contractions → more oxytocin → birth', 'estrogen → LH surge → ovulation', 'clotting cascade · action-potential upstroke'].map((e, i) => txt(570, 345 + i * 24, 15, e)).join('')}
<g class="fig-muted">${txt(60, 440, 14, 'Every loop has a receptor, a control center and an effector; only the sign of the return arrow differs')}</g>
</svg>`

/* 9 — Acid–base: pH follows HCO₃⁻ / PCO₂, and the four disorders as a 2×2 (lead, 1000×460) */
const cellAB = (cx: number, cy: number, title: string, prim: string, primCls: string, cause: string, comp: string, compCls: string, speed: string) =>
  `<rect x="${cx - 145}" y="${cy - 80}" width="290" height="160" rx="12" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2"/>
${ctext(cx, cy - 54, 15, title, bold)}
<g class="${primCls}">${ctext(cx, cy - 28, 15, prim, bold)}</g>
${ctext(cx, cy - 6, 13, cause)}
<g class="${compCls}">${ctext(cx, cy + 22, 13, comp, bold)}</g>
<g class="fig-muted">${ctext(cx, cy + 44, 12, speed)}</g>`
const acidSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(60, 36, 22, 'Acid–base: pH follows the HCO₃⁻ / PCO₂ ratio — find which one moved', bold)}
${txt(40, 128, 20, 'pH ∝', bold)}
<g class="fig-accent">${box(170, 92, 120, 40, 'HCO₃⁻', 18, 700, 0.12)}${txt(240, 86, 13, 'kidneys set it', bold)}${txt(240, 102, 12, 'slow: hours–days')}</g>
${line(110, 120, 230, 120, undefined, 3)}
<g class="fig-accent-2">${box(170, 148, 120, 40, 'PCO₂', 18, 700, 0.12)}${txt(240, 142, 13, 'lungs set it', bold)}${txt(240, 158, 12, 'fast: minutes–hours')}</g>
${txt(40, 212, 15, 'CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻', bold)}
${txt(40, 250, 14, 'Which value explains the pH direction?', bold)}
${txt(40, 270, 14, '→ that one is the PRIMARY disorder')}
${txt(40, 296, 14, 'The other value is the COMPENSATION:', bold)}
${txt(40, 316, 14, 'it pulls pH toward normal, never past it')}
<g class="fig-muted">${txt(40, 352, 13, 'respiratory problem → kidneys compensate')}${txt(40, 370, 13, 'metabolic problem → lungs compensate')}
${txt(40, 404, 13, 'normal PCO₂ ≈ 40 mmHg')}${txt(40, 422, 13, 'alkalosis above pH 7.45, acidosis below 7.35')}</g>
<g class="fig-accent-2">${ctext(510, 84, 15, 'ACIDOSIS — pH low', bold)}</g><g class="fig-accent">${ctext(815, 84, 15, 'ALKALOSIS — pH high', bold)}</g>
${cellAB(510, 178, 'Respiratory acidosis', 'primary: PCO₂ ↑', 'fig-accent-2', 'hypoventilation — COPD, opioids', 'kidneys compensate: keep HCO₃⁻ ↑', 'fig-accent', 'slow — hours to days')}
${cellAB(815, 178, 'Respiratory alkalosis', 'primary: PCO₂ ↓', 'fig-accent-2', 'hyperventilation — anxiety, altitude', 'kidneys compensate: dump HCO₃⁻ ↓', 'fig-accent', 'slow — hours to days')}
${cellAB(510, 352, 'Metabolic acidosis', 'primary: HCO₃⁻ ↓', 'fig-accent', 'ketoacidosis, lactic acid, diarrhea', 'lungs compensate: blow off CO₂, PCO₂ ↓', 'fig-accent-2', 'fast — minutes to hours')}
${cellAB(815, 352, 'Metabolic alkalosis', 'primary: HCO₃⁻ ↑', 'fig-accent', 'vomiting (H⁺ loss), antacids', 'lungs compensate: hold CO₂, PCO₂ ↑', 'fig-accent-2', 'fast — minutes to hours')}
</svg>`

export const mcatAnatomyPhysiologyFigures: DeckFigurePlacement[] = [
  {
    at: 'Muscle Tissue Comparison',
    mode: 'replace-table',
    figure: {
      svg: muscleSvg,
      alt:
        'Three columns headed Skeletal, Cardiac and Smooth, each with a schematic cell. Skeletal: one long striped fiber with several nuclei pressed against its edge. Cardiac: two short striped cells joined end to end by a red zig-zag intercalated disc, one central nucleus each, labelled branched. Smooth: two spindle-shaped cells with no stripes and one central nucleus. Rows beneath: control — voluntary, involuntary, involuntary; cells coupled? — no, each fiber alone; yes, gap junctions; yes, single-unit; Ca²⁺ comes from — mostly the SR; SR plus extracellular (Ca-induced Ca release); largely extracellular; Ca²⁺ sensor — troponin, troponin, and in red calmodulin → MLCK. Footer: smooth muscle has no troponin, Ca²⁺·calmodulin switches on myosin light-chain kinase; bathe cardiac muscle in Ca²⁺-free fluid and it fails while skeletal muscle still fires from its SR store.',
      caption: 'The three muscle tissues as cells: stripes mean sarcomeres and troponin; the intercalated disc is where cardiac cells share current; smooth muscle has neither and uses calmodulin → MLCK.',
    },
    blocks: [
      '- **Skeletal:** striated, voluntary, multinucleate; Ca²⁺ mostly from the SR → troponin',
      '- **Cardiac:** striated, involuntary, 1 nucleus; gap junctions at intercalated discs',
      '- **Cardiac** Ca²⁺ = SR + extracellular (Ca-induced Ca release) — fails in Ca²⁺-free fluid',
      '- **Smooth:** no striations, involuntary; extracellular Ca²⁺ → calmodulin → MLCK, no troponin',
    ],
  },
  {
    at: 'Fetal Circulation Shunts',
    mode: 'replace-table',
    figure: {
      svg: shuntSvg,
      alt:
        'A box schematic of fetal blood flow. From the placenta, the umbilical vein runs up past a dashed, greyed Liver box labelled bypassed; a red arrow, ① ductus venosus, carries the blood straight into the IVC. IVC → right atrium → right ventricle → pulmonary artery, which points by a dashed grey arrow at a greyed Lungs box labelled bypassed. Two red shunts leave this right side: ② foramen ovale, a red arrow from the right atrium directly into the left atrium, and ③ ductus arteriosus, a red arc from the pulmonary artery over the lungs into the aorta. Left atrium → left ventricle → aorta → body, and a grey line returns from the body along the bottom to the placenta, labelled umbilical arteries. Side notes: the umbilical vein carries oxygenated blood in; placental O₂ reaches the body with two lung passes skipped.',
      caption: 'The three fetal shunts on one map: the ductus venosus skips the liver, and the foramen ovale and ductus arteriosus both skip the fluid-filled lungs — all three close when the lungs inflate at birth.',
    },
    blocks: [
      '- **Ductus venosus:** umbilical vein → IVC, bypasses the liver',
      '- **Foramen ovale:** right atrium → left atrium, bypasses the lungs',
      '- **Ductus arteriosus:** pulmonary artery → aorta, bypasses the lungs',
      '- All three close at birth as the lungs inflate; a patent ductus arteriosus is a common defect',
    ],
  },
  {
    at: 'Epidermal Strata',
    mode: 'replace-table',
    figure: {
      svg: strataSvg,
      alt:
        'A vertical stack of five epidermal layers over the dermis, deep at the bottom. From the top: Corneum, heavily shaded with flat horizontal lines — dead, flattened, keratin-filled, the main barrier. Lucidum, a thin dashed strip — thick skin only (palms, soles). Granulosum with small dots — keratohyalin granules, cells begin to die. Spinosum with rounded cells — desmosome-linked keratinocytes, spiny under the microscope. Basale, a single row of upright cells with two red melanocytes — one layer of dividing stem cells, melanocytes sit here. A dashed basement membrane separates it from the Dermis, which holds red capillaries and is labelled vessels, nerves, glands, follicles, collagen and elastin. A blue arrow rises from a capillary into the basale: O₂ and nutrients diffuse up, the epidermis has no vessels. A grey arrow on the far left runs from born at the bottom to shed at the top. Footer: keratinocytes are born in the basale, move up and die by the corneum; deep → superficial, Bad Spunky Girls Like Corn.',
      caption: 'The epidermis as a conveyor: born in the basale, pushed upward and dead by the corneum — and fed only by diffusion from the dermis below, because none of the five strata has a blood vessel.',
    },
    blocks: [
      '- Deep → superficial: **B**asale, **S**pinosum, **G**ranulosum, **L**ucidum, **C**orneum',
      '- Basale divides (stem cells + melanocytes); corneum is dead keratin — the barrier',
      '- Lucidum only in thick skin (palms, soles)',
      '- Epidermis is avascular — fed by diffusion from the dermis',
    ],
  },
  {
    at: 'Thermoregulation (a negative',
    mode: 'lead',
    figure: {
      svg: thermoSvg,
      alt:
        'A feedback loop. Thermoreceptors (skin and hypothalamus) feed the hypothalamus, labelled thermostat, which compares core temperature with a set point of about 37 °C and sends the signal down one of two lanes. Red lane, TOO HOT, core temp up: cutaneous vasodilation (more blood to the skin radiates heat) then sweating (evaporation takes latent heat) → heat lost, core temp down. Blue lane, TOO COLD, core temp down: cutaneous vasoconstriction (keeps the heat in the core) then shivering and brown fat (muscle work; UCP-1 uncouples the proton gradient into heat) → heat made and kept, temp up. Grey notes between the lanes: sweating fails in high humidity; brown fat matters most in infants; piloerection traps air in fur and is vestigial in humans. Both lanes end in one box, core temp returns to about 37 °C — the response opposes the stimulus, negative feedback — and a grey arrow returns from it to the thermoreceptors.',
      caption: 'One thermostat, two opposite effector sets: whichever way core temperature strays, the hypothalamus picks the lane that pushes it back — the textbook negative-feedback loop.',
    },
    blocks: [
      '- Hypothalamus compares core temp with ≈ 37 °C and picks the opposing effector set',
      '- Hot → vasodilation + sweating (fails in humidity); cold → vasoconstriction + shivering + brown fat',
    ],
  },
  {
    at: '$CO_{2}$ Transport',
    mode: 'lead',
    figure: {
      svg: co2Svg,
      alt:
        'A tissue box makes CO₂, which enters a dashed plasma band containing a large red-outlined red blood cell. Three routes leave the CO₂: ~7% stays dissolved in plasma and runs along the top to the lungs; inside the cell, + Hb → carbamino-Hb, ~23%, which rides to the lungs in the cell; and + H₂O, by carbonic anhydrase, → H₂CO₃ ⇌ H⁺ + HCO₃⁻. The H⁺ is buffered by Hb, driving the Bohr right-shift. The HCO₃⁻ leaves through a membrane transporter while Cl⁻ enters, labelled chloride shift: HCO₃⁻ out, Cl⁻ in; ~70% then travels as plasma HCO₃⁻ to the lungs. The lungs box says everything reverses — CO₂ reformed and exhaled. Footer: low PCO₂ in the lungs runs every step backwards: HCO₃⁻ re-enters, carbonic anhydrase remakes CO₂, Hb lets go.',
      caption: 'Three ways CO₂ travels, drawn inside one red cell: most of it becomes bicarbonate through carbonic anhydrase and leaves the cell in exchange for chloride, the H⁺ left behind is parked on hemoglobin, and the whole sequence runs backwards in the lungs.',
    },
    blocks: [
      '- ~70% as HCO₃⁻ (carbonic anhydrase in the RBC, then the chloride shift), ~23% on Hb, ~7% dissolved',
      '- The H⁺ produced is buffered by Hb and drives the Bohr right-shift; in the lungs every step reverses',
    ],
  },
  {
    at: 'Hemostasis',
    mode: 'lead',
    figure: {
      svg: clotSvg,
      alt:
        'Top: three stage boxes under two brackets. PRIMARY hemostasis (vessel and platelets): 1 vascular spasm, the injured vessel constricts; 2 platelet plug, platelets adhere to collagen and aggregate. SECONDARY (coagulation cascade → fibrin): 3 coagulation cascade, intrinsic and extrinsic converge on one common path. Bottom left, a schematic vessel: a gap in the upper wall exposes a red zig-zag of collagen, blue platelets pile into the gap while others flow past; notes: aspirin blocks platelet aggregation so primary hemostasis stalls with a normal platelet count; warfarin blocks vitamin K so fewer clotting factors are made and secondary hemostasis stalls — platelets fine, fibrin late, prolonged clotting time. Bottom right, the cascade: intrinsic and extrinsic pathways converge; prothrombin (needs vitamin K) → thrombin, in red; thrombin converts fibrinogen → fibrin; fibrin → a stable fibrin mesh that traps cells, drawn as crossed lines.',
      caption: 'Hemostasis in order: the vessel clamps, platelets plug the exposed collagen, then the cascade turns prothrombin into thrombin and fibrinogen into a fibrin mesh — aspirin hits the plug, warfarin the cascade.',
    },
    blocks: [
      '- Primary: vascular spasm → platelet plug on exposed collagen; secondary: cascade → thrombin → fibrin',
      '- Vitamin K builds several clotting factors (warfarin blocks it); aspirin hits the platelets instead',
    ],
  },
  {
    at: 'Lymphatic System',
    mode: 'lead',
    figure: {
      svg: lymphSvg,
      alt:
        'A left-to-right chain of boxes: blood capillary (fluid filters out) → interstitial fluid (bathes the cells) → lymph capillary (blind-ended, one-way) → lymph node (filters lymph; B and T cells) → thoracic duct (→ subclavian vein), with a return arrow running back under the chain to the blood capillary: lymph rejoins the blood, a one-way return loop. Below the interstitial fluid, a dashed red arrow leads to a red box: no return → EDEMA, interstitial fluid piles up. Below the lymph capillary, a blue box feeds upward into it: intestinal lacteals, dietary fat → chylomicrons → lymph; fat skips the portal blood. A lower row, labelled lymphoid organs that are not on the fluid route: spleen filters blood and removes old red cells; thymus is where T cells mature. Footer: node = filters lymph, spleen = filters blood, thymus = schools T cells; without lymph return, tissue swells.',
      caption: 'The lymphatic system as a return loop: filtered plasma that the capillaries left behind is collected, screened in the nodes and poured back into the subclavian veins — and dietary fat joins the loop through the lacteals.',
    },
    blocks: [
      '- Lymph = interstitial fluid returned to the subclavian veins via nodes + thoracic duct; no return → edema',
      '- Lacteals carry dietary fat as chylomicrons; nodes filter lymph, spleen filters blood, thymus matures T cells',
    ],
  },
  {
    at: 'Feedback Control',
    mode: 'lead',
    figure: {
      svg: feedbackSvg,
      alt:
        'Two identical loop diagrams side by side. Each: a Stimulus box (variable moves) → receptor → control center → Effector response, with a return arrow from the response back to the stimulus that passes through a sign circle. Left, blue, NEGATIVE feedback, the default: the return arrow carries a minus sign; the response OPPOSES the stimulus, the variable returns to its set point, the loop stabilizes and idles once there. Examples of set-point control: glucose up → insulin → glucose down; core temp → hypothalamus → sweat or shiver; BP down → baroreceptors → heart rate up. Right, red, POSITIVE feedback, rare and explosive: the return arrow carries a plus sign; the response AMPLIFIES the stimulus, runs faster and faster until a discrete endpoint ends it. Examples, each ending at an event: oxytocin → contractions → more oxytocin → birth; estrogen → LH surge → ovulation; clotting cascade; action-potential upstroke. Footer: every loop has a receptor, a control center and an effector; only the sign of the return arrow differs.',
      caption: 'The same receptor → control center → effector loop drawn twice: a minus on the return arrow holds a set point, a plus runs away until an event — birth, ovulation, a clot, the spike — switches it off.',
    },
    blocks: [
      '- **Negative:** response opposes the stimulus → set point restored (insulin, thermostat, baroreceptors)',
      '- **Positive:** response amplifies the stimulus to a discrete endpoint (oxytocin, LH surge, clotting, AP)',
    ],
  },
  {
    at: 'Acid–Base Balance',
    mode: 'lead',
    figure: {
      svg: acidSvg,
      alt:
        'Left: pH ∝ a fraction with HCO₃⁻ (blue; kidneys set it, slow: hours–days) over PCO₂ (red; lungs set it, fast: minutes–hours), the equation CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻, and the rule: which value explains the pH direction? That one is the PRIMARY disorder; the other is the COMPENSATION, pulling pH toward normal but never past it. Respiratory problems → kidneys compensate; metabolic problems → lungs compensate. Normal PCO₂ ≈ 40 mmHg; alkalosis above pH 7.45, acidosis below 7.35. Right: a 2×2 grid, columns ACIDOSIS (pH low) and ALKALOSIS (pH high). Respiratory acidosis: primary PCO₂ up, hypoventilation (COPD, opioids); kidneys compensate by keeping HCO₃⁻ up, slow. Respiratory alkalosis: primary PCO₂ down, hyperventilation (anxiety, altitude); kidneys dump HCO₃⁻, slow. Metabolic acidosis: primary HCO₃⁻ down, ketoacidosis, lactic acid, diarrhea; lungs blow off CO₂ so PCO₂ falls, fast. Metabolic alkalosis: primary HCO₃⁻ up, vomiting (H⁺ loss), antacids; lungs hold CO₂ so PCO₂ rises, fast.',
      caption: 'Acid–base on one ratio: HCO₃⁻ belongs to the kidneys and PCO₂ to the lungs, the value that explains the pH is the primary disorder, and the other organ answers — toward normal, never past it.',
    },
    blocks: [
      '- pH tracks HCO₃⁻ / PCO₂: kidneys set the numerator (slow), lungs the denominator (fast)',
      '- The value explaining the pH direction is the primary disorder; the other is compensation — never overshoot',
    ],
  },
]
