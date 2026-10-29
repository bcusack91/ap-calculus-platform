import type { DeckFigurePlacement } from './index'

/**
 * Microbiology (7-part survey, MCAT B/B) — figures for the in-class deck.
 * Authored 2026-10-29.
 *
 * The dedicated decks (Bacteria, Viruses, Antimicrobials, Immunology) already
 * draw the prokaryote cell, the Gram envelopes, shapes, the growth curve, the
 * oxygen tubes, gene-transfer routes, conjugation, toxins, virions, the
 * infectious cycle, lytic/lysogenic, the Baltimore grid, HIV, drift/shift,
 * prions, the antibiotic target cell, MIC, β-lactams, ribosome drugs, folate,
 * resistance moves, MHC I/II, antibody architecture, the isotypes and the
 * primary/secondary titer — so the survey draws DIFFERENT views: the Gram
 * stain as a four-step PROCEDURE with two outcomes, binary fission as a
 * doubling tree beside the lesson's own worked numbers, the trophic classes
 * as a 2×2 of energy × carbon, the worked example's two-gene plasmid crossing
 * species and the fate of each drug in the recipient, the fungal cell with its
 * yeast ⇄ mould switch, the Plasmodium two-host cycle under a protozoa /
 * helminth tree, the three lines of defense as bands a pathogen must cross,
 * active vs passive immunity as antibody-over-time curves, and Koch's
 * postulates as a four-station flow.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. Cells are circles and rounded boxes, molecules are
 * labelled boxes — no structural formulas, no realistic anatomy. The
 * immunity curves are illustrative (no data); the only numbers drawn are the
 * lesson's own (5 × 10³ cells, 20 min, 6 generations, 3.2 × 10⁵; 37 °C).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-mb-<figure>[-colour]).
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
/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 12) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 5}" font-size="${r + 2}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`
const f = (v: number) => +v.toFixed(1)

/* 1 — The Gram stain as a procedure: four steps, two outcomes (replace-table, 560×440) */
const GRAM_X = [150, 255, 360, 465]
/** A bacterium: thick wall (Gram+) or thin wall inside a dashed outer membrane (Gram−), filled by the dye it holds. */
const gramCell = (cx: number, cy: number, pos: boolean, dye: 'blue' | 'red' | 'none') => {
  const fill =
    dye === 'none'
      ? `<circle class="fig-bg" cx="${cx}" cy="${cy}" r="21" stroke="none"/>`
      : `<g class="${dye === 'blue' ? 'fig-accent' : 'fig-accent-2'}"><circle cx="${cx}" cy="${cy}" r="21" fill="currentColor" fill-opacity="0.8"/></g>`
  const wall = `<circle cx="${cx}" cy="${cy}" r="22" fill="none" stroke="currentColor" stroke-width="${pos ? 7 : 2.5}"/>`
  const om = pos ? '' : `<g class="fig-muted"><circle cx="${cx}" cy="${cy}" r="30" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/></g>`
  return fill + wall + om
}
const gramSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${ctext(280, 28, 17, 'The Gram stain: four steps, two outcomes', bold)}
${GRAM_X.map((x, i) => `${NUM(x, 52, String(i + 1), 11)}${ctext(x, 78, 13, ['crystal violet', 'iodine', 'alcohol wash', 'safranin'][i], bold)}<g class="fig-muted">${ctext(x, 93, 11, ['primary dye', 'fixes the dye', 'decolorizer', 'counterstain'][i])}</g>`).join('')}
${ctext(55, 155, 16, 'Gram +', bold)}
${gramCell(150, 150, true, 'blue')}${gramCell(255, 150, true, 'blue')}${gramCell(360, 150, true, 'blue')}${gramCell(465, 150, true, 'blue')}
${ctext(55, 275, 16, 'Gram −', bold)}
${gramCell(150, 270, false, 'blue')}${gramCell(255, 270, false, 'blue')}${gramCell(360, 270, false, 'none')}${gramCell(465, 270, false, 'red')}
<g class="fig-muted"><defs>${ARROW('arr-mb-gram-m')}</defs>
${[0, 1, 2].map((i) => line(GRAM_X[i] + 30, 150, GRAM_X[i + 1] - 32, 150, 'arr-mb-gram-m', 2) + line(GRAM_X[i] + 36, 270, GRAM_X[i + 1] - 38, 270, 'arr-mb-gram-m', 2)).join('')}
${ctext(300, 214, 11, 'thick peptidoglycan · no outer membrane · no LPS')}
${ctext(300, 336, 11, 'thin peptidoglycan · outer membrane with LPS (endotoxin)')}
${ctext(280, 384, 12, 'The alcohol step decides: a thick wall traps the violet–iodine complex;')}
${ctext(280, 400, 12, 'a thin wall behind an outer membrane lets it wash out, so safranin shows.')}</g>
<g class="fig-accent">${ctext(300, 198, 13, 'keeps the violet → stains purple / blue', bold)}</g>
<g class="fig-accent-2">${ctext(300, 320, 13, 'loses it, takes safranin → stains pink / red', bold)}
${ctext(280, 428, 12, 'LPS released when Gram-negatives lyse → fever, septic shock, DIC', bold)}</g>
</svg>`

/* 2 — Binary fission: a doubling tree beside the lesson's worked numbers (lead, 1000×460) */
const pill = (cx: number, cy: number) =>
  `<rect x="${cx - 18}" y="${cy - 9}" width="36" height="18" rx="9" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>`
const GEN_Y = [100, 170, 240, 310]
/** 2ⁿ cells of generation n, evenly spread over 384 units and centred on x = 300 (so each parent sits over its two children). */
const genX = (n: number) => Array.from({ length: 2 ** n }, (_, i) => 300 + (i - (2 ** n - 1) / 2) * (384 / 2 ** n))
const fissionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mb-fis')}</defs>
${txt(60, 40, 22, 'Binary fission: every generation doubles the count — N = N₀ × 2ⁿ', bold)}
<g class="fig-muted">${[0, 1, 2].map((n) => genX(n).flatMap((px, i) => [genX(n + 1)[2 * i], genX(n + 1)[2 * i + 1]].map((cx) => line(f(px), GEN_Y[n] + 9, f(cx), GEN_Y[n + 1] - 9, undefined, 1.5))).join('')).join('')}
${GEN_Y.map((y, n) => rtext(104, y + 5, 15, `n = ${n}`)).join('')}</g>
<g class="fig-accent">${GEN_Y.map((y, n) => genX(n).map((cx) => pill(f(cx), y)).join('')).join('')}</g>
${GEN_Y.map((y, n) => txt(500, y + 5, 15, ['1 cell', '2', '4', '8 = 2³'][n], bold)).join('')}
${ctext(300, 364, 18, 'after n doublings: N = N₀ × 2ⁿ', bold)}
<g class="fig-muted">${ctext(300, 390, 14, 'generation (doubling) time = the time one division takes')}</g>
${box2(790, 100, 320, 56, 'Start: N₀ = 5 × 10³ cells', 'doubling time 20 min', 17, 13)}
${line(790, 129, 790, 146, 'arr-mb-fis')}
${box2(790, 175, 320, 56, '2 h = 120 min', 'n = 120 ÷ 20 = 6 generations', 17, 13)}
${line(790, 204, 790, 221, 'arr-mb-fis')}
<g class="fig-accent">${box2(790, 250, 320, 56, 'N = 5 × 10³ × 2⁶', '= 5 × 10³ × 64 = 3.2 × 10⁵ cells', 17, 13, 0.12)}</g>
${line(790, 279, 790, 296, 'arr-mb-fis')}
<g class="fig-muted">${box2(790, 328, 320, 60, 'only while log phase lasts', 'nutrients run out → stationary phase, real N is lower', 15, 12, 0.05)}
${txt(60, 440, 15, 'Antibiotics that hit division (cell wall, DNA, translation) bite hardest in the log phase.')}</g>
</svg>`

/* 3 — Trophic classes as a 2×2: energy source × carbon source (replace-table, 560×440) */
const trophCell = (cx: number, cy: number, name: string, energy: string, carbon: string, example: string, hot = false) =>
  `<rect x="${cx - 102}" y="${cy - 64}" width="204" height="128" rx="10" fill="currentColor" fill-opacity="${hot ? 0.12 : 0.04}" stroke="currentColor" stroke-width="2.5"/>
${ctext(cx, cy - 34, 16, name, bold)}
${ctext(cx, cy - 8, 12, energy)}${ctext(cx, cy + 10, 12, carbon)}
<g class="fig-muted">${ctext(cx, cy + 40, 12, example)}</g>`
const trophSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${ctext(280, 28, 17, 'Name = energy prefix + carbon suffix', bold)}
<g class="fig-muted">${ctext(330, 56, 11, 'CARBON SOURCE')}${ctext(60, 100, 11, 'ENERGY')}${ctext(60, 114, 11, 'SOURCE')}</g>
${ctext(225, 80, 13, 'CO₂ → “-autotroph”', bold)}${ctext(435, 80, 13, 'organic C → “-heterotroph”', bold)}
${ctext(60, 170, 14, 'light', bold)}${ctext(60, 188, 13, '“photo-”')}
${ctext(60, 300, 14, 'chemicals', bold)}${ctext(60, 318, 13, '“chemo-”')}
${trophCell(225, 175, 'Photoautotroph', 'energy: light', 'carbon: fixes CO₂', 'cyanobacteria')}
${trophCell(435, 175, 'Photoheterotroph', 'energy: light', 'carbon: organic compounds', 'rare, mostly non-pathogens')}
${trophCell(225, 305, 'Chemoautotroph', 'energy: inorganic chemicals', 'carbon: fixes CO₂', 'nitrifying, sulfur-oxidizing')}
<g class="fig-accent">${trophCell(435, 305, 'Chemoheterotroph', 'energy: organic compounds', 'carbon: organic compounds', 'E. coli, most pathogens — and us', true)}</g>
<g class="fig-muted">${ctext(280, 398, 11, 'photo- = light · chemo- = chemicals · auto- = fixes CO₂ · hetero- = organic carbon')}
${ctext(280, 420, 11, 'chemoautotrophs oxidize INORGANIC chemicals; chemoheterotrophs oxidize organic compounds')}</g>
</svg>`

/* 4 — The worked example: one plasmid, two mechanisms, two species (after, 1000×460) */
const plasmid = (cx: number, cy: number, faded = false) =>
  `<circle cx="${cx}" cy="${cy}" r="30" fill="none" stroke="currentColor" stroke-width="3"${faded ? ' stroke-dasharray="6 4"' : ''}/>
<g class="fig-accent"><path d="M${cx - 30} ${cy} A30 30 0 0 1 ${cx} ${cy - 30}" fill="none" stroke="currentColor" stroke-width="8"/></g>
<g class="fig-accent-2"><path d="M${cx + 30} ${cy} A30 30 0 0 1 ${cx} ${cy + 30}" fill="none" stroke="currentColor" stroke-width="8"/></g>`
const bacterium = (x: number, y: number, w: number) =>
  `<rect x="${x}" y="${y}" width="${w}" height="120" rx="40" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><path d="M${x + w - 92} ${y + 28} q 15 -14 30 0 t 30 0" fill="none" stroke="currentColor" stroke-width="2"/></g>`
const plasmidSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mb-pla')}</defs>
${txt(60, 40, 22, 'One plasmid, two resistance mechanisms, two species', bold)}
${ctext(210, 96, 16, 'Klebsiella (donor)', bold)}
${bacterium(90, 110, 240)}${plasmid(165, 170)}
<g class="fig-accent">${txt(206, 150, 13, 'β-lactamase gene', bold)}</g>
<g class="fig-accent-2">${txt(206, 194, 13, 'efflux-pump gene', bold)}</g>
<g class="fig-muted">${line(330, 170, 420, 170, undefined, 6)}${ctext(375, 156, 12, 'sex pilus')}</g>
<g class="fig-accent"><defs>${ARROW('arr-mb-pla-b')}</defs>${line(336, 184, 416, 184, 'arr-mb-pla-b', 2.5)}</g>
${ctext(540, 96, 15, 'E. coli (recipient — another species)', bold)}
${bacterium(420, 110, 240)}${plasmid(495, 170, true)}
<g class="fig-muted">${txt(536, 176, 12, 'copy received')}</g>
${ctext(375, 262, 14, 'conjugation — a plasmid copy crosses the sex pilus, even between species', bold)}
<g class="fig-muted">${ctext(375, 300, 13, 'vertical = parent → daughter · horizontal = between cells, across species')}</g>
${ctext(820, 96, 16, 'In the recipient', bold)}
<g class="fig-muted"><rect x="690" y="110" width="240" height="220" rx="30" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-width="2.5"/></g>
${box(741, 150, 86, 36, 'penicillin', 13)}${line(786, 150, 798, 150, 'arr-mb-pla', 2)}
<g class="fig-accent">${box2(865, 150, 130, 50, 'β-lactamase', 'hydrolyzes the ring', 14, 11, 0.12)}</g>
<g class="fig-muted">${ctext(810, 194, 12, 'drug destroyed before it reaches the wall')}</g>
${box(741, 270, 86, 36, 'tetracycline', 12)}${line(786, 270, 880, 270, 'arr-mb-pla', 2)}
<g class="fig-muted">${ctext(833, 258, 11, 'enters')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-mb-pla-r')}</defs>${box(930, 270, 90, 40, 'efflux pump', 13, 700, 0.12)}${line(977, 270, 996, 270, 'arr-mb-pla-r', 3)}
${ctext(920, 304, 11, 'expelled before it acts', bold)}</g>
<g class="fig-muted">${ctext(500, 398, 14, 'Transformation moves naked fragments and transduction rides a phage;')}
${ctext(500, 418, 14, 'the SAME plasmid in a DIFFERENT species says conjugation.')}</g>
<g class="fig-accent">${ctext(500, 446, 15, 'One conjugation event ⇒ resistance to two unrelated drug classes', bold)}</g>
</svg>`

/* 5 — The fungal cell and its two growth forms (replace-table, 560×440) */
const ERGO: [number, number][] = [
  [52, 92], [92, 92], [132, 92], [172, 92], [212, 92],
  [52, 248], [92, 248], [132, 248], [172, 248], [212, 248],
  [32, 125], [32, 170], [32, 215], [232, 125], [232, 170], [232, 215],
]
const hypha = (d: string) => `<path d="${d}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>`
const fungiSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${ctext(280, 26, 16, 'The fungal cell, and the two shapes it grows in', bold)}
<g class="fig-muted">${ctext(132, 58, 12, 'chitin wall — not peptidoglycan', bold)}
<rect x="24" y="76" width="216" height="188" rx="30" fill="none" stroke="currentColor" stroke-width="9"/></g>
<rect x="32" y="84" width="200" height="172" rx="24" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">${ERGO.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="currentColor"/>`).join('')}
${ctext(132, 118, 12, 'ergosterol in the membrane', bold)}</g>
<g class="fig-muted"><circle cx="132" cy="172" r="24" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/></g>
${ctext(132, 176, 11, 'nucleus', bold)}
<g class="fig-muted">${ctext(132, 222, 11, 'eukaryote: 80S ribosomes')}</g>
<g class="fig-accent">${txt(28, 290, 12, '→ azoles, amphotericin B hit ergosterol', bold)}
${txt(28, 308, 12, '→ echinocandins hit wall glucan', bold)}</g>
<g class="fig-accent-2">${txt(28, 326, 12, '✕ β-lactams: no peptidoglycan to attack', bold)}</g>
<circle cx="330" cy="110" r="26" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
<circle cx="361" cy="88" r="13" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${ctext(460, 104, 14, 'yeast', bold)}<g class="fig-muted">${ctext(460, 121, 11, 'single-celled · buds')}</g>
<g class="fig-accent"><defs>${ARROW('arr-mb-fun-b')}</defs>${line(345, 150, 345, 190, 'arr-mb-fun-b', 2.5, ' marker-start="url(#arr-mb-fun-b)"')}
${ctext(460, 162, 14, 'dimorphic fungi switch', bold)}</g>
<g class="fig-muted">${ctext(460, 179, 11, 'mould in the environment')}${ctext(460, 194, 11, 'yeast at 37 °C, inside the body')}</g>
<g class="fig-muted">${hypha('M296 250 L420 250')}${hypha('M330 250 L360 222 L392 216')}${hypha('M360 222 L376 200')}${hypha('M372 250 L400 274 L430 282')}${hypha('M400 274 L414 296')}
<circle cx="376" cy="200" r="5" fill="currentColor"/><circle cx="392" cy="216" r="4" fill="currentColor"/></g>
${ctext(470, 232, 14, 'mould', bold)}<g class="fig-muted">${ctext(470, 249, 11, 'multicellular hyphae · spores')}</g>
<g class="fig-muted">${ctext(280, 364, 12, 'heterotrophs — absorb nutrients from their surroundings')}
${ctext(280, 382, 12, 'asexual: budding, spores · sexual: under stress')}</g>
<g class="fig-accent">${ctext(280, 416, 13, 'Antifungal selectivity: ergosterol and chitin — things human cells lack', bold)}</g>
</svg>`

/* 6 — Malaria: a protozoan parasite cycling between two hosts (lead, 1000×460) */
const rbc = (cx: number, cy: number) =>
  `<circle cx="${cx}" cy="${cy}" r="11" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="2"/><circle class="fig-bg" cx="${cx}" cy="${cy}" r="4" stroke="none"/>`
const malariaSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mb-mal')}</defs>
${txt(60, 40, 22, 'Malaria: a protozoan parasite that cycles between two hosts', bold)}
${box(210, 100, 240, 44, 'eukaryotic parasites', 17)}
${line(170, 122, 136, 160, 'arr-mb-mal')}${line(250, 122, 284, 160, 'arr-mb-mal')}
${box2(130, 190, 160, 56, 'protozoa', 'single-celled', 17, 13)}
${box2(290, 190, 160, 56, 'helminths', 'multicellular worms', 17, 13)}
${line(130, 218, 130, 246, 'arr-mb-mal')}
<g class="fig-accent-2">${box(130, 272, 160, 44, 'Plasmodium', 17, 700, 0.14)}</g>
<g class="fig-muted">${ctext(130, 312, 12, 'the one the MCAT asks about')}</g>
${box2(530, 130, 230, 56, 'female Anopheles mosquito', 'the vector', 16, 13)}
${box2(850, 130, 210, 56, 'human host', 'the parasite multiplies here', 16, 12)}
<path d="M646 108 Q745 56 844 108" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-mal)"/>
<path d="M844 152 Q745 204 646 152" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-mb-mal)"/>
${ctext(745, 70, 13, 'a bite injects the parasite', bold)}
${ctext(745, 196, 13, 'the next mosquito bites and carries it on', bold)}
<g class="fig-accent-2">${rbc(805, 232)}${rbc(835, 240)}${rbc(866, 232)}${rbc(896, 240)}
${ctext(830, 270, 13, 'invades red blood cells → fever cycles', bold)}</g>
<g class="fig-accent">${box2(690, 338, 560, 62, 'Why the sickle-cell trait persists', 'HbS heterozygotes are protected — heterozygote advantage keeps the allele common', 17, 12, 0.1)}</g>
<g class="fig-muted">${txt(60, 440, 15, 'The MCAT triplet: Anopheles (vector) · Plasmodium (protozoan) · malaria (disease)')}</g>
</svg>`

/* 7 — Three lines of defense: bands a pathogen has to cross (lead, 1000×460) */
const band = (x: number, w: number, title: string, sub: string, items: string[]) =>
  `<rect x="${x}" y="70" width="${w}" height="300" rx="14" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>
${ctext(x + w / 2, 98, 17, title, bold)}<g class="fig-muted">${ctext(x + w / 2, 117, 12, sub)}</g>
${items.map((s, i) => txt(x + 14, 152 + i * 25, 13, s)).join('')}`
const defenseSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${txt(60, 40, 22, 'Three lines of defense: nonspecific first, specific and remembered last', bold)}
${band(120, 210, '1 · Barriers', 'physical and chemical, always on', ['skin', 'mucous membranes', 'stomach acid', 'lysozyme (tears, saliva)', 'normal flora'])}
${band(380, 250, '2 · Innate', 'nonspecific · minutes to hours', ['neutrophils — first responders', 'macrophages — eat + present (APC)', 'NK cells — kill “missing self”', 'complement — C3b opsonin, MAC', 'inflammation — dilate, recruit'])}
${band(680, 260, '3 · Adaptive', 'specific · days · memory', ['humoral: B → plasma cells', '   → antibodies, extracellular foes', 'cell-mediated: T cells', '   CD4⁺ helps · CD8⁺ kills infected', 'memory → faster next time'])}
<g class="fig-accent-2"><defs>${ARROW('arr-mb-def-r')}</defs>
<circle cx="66" cy="300" r="13" fill="currentColor" fill-opacity="0.7" stroke="currentColor" stroke-width="2"/>
${[[-18, -10], [-18, 10], [0, -19], [0, 19], [18, -10], [18, 10]].map(([dx, dy]) => line(66 + dx * 0.7, 300 + dy * 0.7, 66 + dx, 300 + dy, undefined, 2)).join('')}
${line(84, 300, 112, 300, 'arr-mb-def-r', 3)}
${ctext(66, 334, 12, 'pathogen', bold)}</g>
<g class="fig-muted"><defs>${ARROW('arr-mb-def-m')}</defs>
${line(333, 300, 376, 300, 'arr-mb-def-m', 3)}${ctext(355, 288, 10, 'breach')}
${line(633, 300, 676, 300, 'arr-mb-def-m', 3)}${ctext(655, 276, 10, 'antigen')}${ctext(655, 288, 10, 'handoff')}
${line(120, 412, 950, 412, 'arr-mb-def-m', 2)}
${ctext(235, 436, 13, 'seconds')}${ctext(520, 436, 13, 'minutes – hours')}${ctext(820, 436, 13, 'days — and faster every time after')}</g>
</svg>`

/* 8 — Active vs passive immunity: protection over time (lead, 1000×460; illustrative) */
const IX0 = 80, IX1 = 660, IY0 = 380, IY1 = 80
const ix = (t: number) => IX0 + t * (IX1 - IX0)
const iy = (lvl: number) => IY0 - lvl * (IY0 - IY1) * 0.92
const path = (fn: (t: number) => number) => {
  const pts: string[] = []
  for (let i = 0; i <= 120; i++) {
    const t = i / 120
    pts.push(`${i === 0 ? 'M' : 'L'}${ix(t).toFixed(1)} ${iy(fn(t)).toFixed(1)}`)
  }
  return `<path d="${pts.join(' ')}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/>`
}
const passive = (t: number) => 0.9 * Math.exp(-5 * t)
const active = (t: number) => {
  const primary = 0.6 / (1 + Math.exp(-28 * (t - 0.2)))
  const waned = t > 0.4 ? primary * (1 - 0.45 * (t - 0.4)) : primary
  if (t < 0.7) return waned
  const boost = 0.98 / (1 + Math.exp(-90 * (t - 0.74)))
  return Math.max(waned, boost)
}
const immunitySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mb-imm')}</defs>
${txt(60, 40, 22, 'Active vs passive immunity: protection over time (illustrative)', bold)}
${line(IX0, IY0, IX1 + 14, IY0, 'arr-mb-imm', 2)}${line(IX0, IY0, IX0, IY1 - 14, 'arr-mb-imm', 2)}
<g class="fig-muted">${txt(90, 74, 13, 'protective antibody')}${ctext(370, 404, 14, 'time')}
<line x1="${ix(0.7)}" y1="${IY1}" x2="${ix(0.7)}" y2="${IY0}" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
${ctext(ix(0.7), 72, 13, 're-exposure to the pathogen')}
${txt(IX0 + 6, 404, 12, 'day 0: vaccine, infection, or antibody dose')}</g>
<g class="fig-accent-2">${path(passive)}
${txt(245, 292, 13, 'passive: immediate, then fades;', bold)}${txt(245, 310, 13, 'no memory → no boost later', bold)}</g>
<g class="fig-accent">${path(active)}
${txt(130, 128, 14, 'active: a lag, then the body’s', bold)}${txt(130, 146, 14, 'own response — memory cells form', bold)}
${txt(ix(0.72) + 6, 160, 14, 'fast, high, lasting', bold)}</g>
<g class="fig-accent">${txt(710, 110, 16, 'Active immunity', bold)}</g>
${txt(710, 134, 13, 'own response to an antigen')}${txt(710, 153, 13, 'vaccines, natural infection')}
<g class="fig-muted">${txt(710, 172, 13, 'delayed · long-lasting · memory')}</g>
<g class="fig-accent-2">${txt(710, 230, 16, 'Passive immunity', bold)}</g>
${txt(710, 254, 13, 'pre-formed antibodies received')}${txt(710, 273, 13, 'maternal IgG, antiserum')}
<g class="fig-muted">${txt(710, 292, 13, 'immediate · temporary · no memory')}
${txt(60, 440, 15, 'A newborn runs on maternal IgG (passive) for months, until its own active responses mature.')}</g>
</svg>`

/* 9 — Koch's postulates as a four-station flow (lead, 1000×460) */
const host = (cx: number, cy: number, sick: boolean) =>
  `<rect x="${cx - 22}" y="${cy - 22}" width="44" height="44" rx="12" fill="currentColor" fill-opacity="${sick ? 0.12 : 0}" stroke="currentColor" stroke-width="2.5"/>${sick ? `<g class="fig-accent-2"><circle cx="${cx}" cy="${cy}" r="6" fill="currentColor"/></g>` : ''}`
const dish = (cx: number, cy: number) =>
  `<circle cx="${cx}" cy="${cy}" r="42" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/><circle cx="${cx}" cy="${cy}" r="34" fill="none" stroke="currentColor" stroke-width="1.5"/>
<g class="fig-accent-2">${[[-14, -10], [6, -18], [18, 2], [-4, 6], [-18, 14], [10, 18]].map(([dx, dy]) => `<circle cx="${cx + dx}" cy="${cy + dy}" r="4" fill="currentColor"/>`).join('')}</g>`
const station = (cx: number, n: string, title: string, glyph: string, note: string) =>
  `${NUM(cx - 92, 92, n, 12)}${txt(cx - 74, 97, 14, title, bold)}
${glyph}
<g class="fig-muted">${ctext(cx, 250, 12, note)}</g>`
const kochSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mb-koch')}</defs>
${txt(60, 40, 22, 'Koch’s postulates: turning an association into proven causation', bold)}
${station(150, '1', 'found in EVERY case', `${host(94, 175, true)}${host(150, 175, true)}${host(206, 175, true)}`, 'the organism is in all of the sick')}
${station(390, '2', 'isolated in pure culture', dish(390, 175), 'one organism, nothing else')}
${station(630, '3', 'infects a healthy host', `${host(585, 175, false)}${line(612, 175, 646, 175, 'arr-mb-koch', 2)}${host(675, 175, true)}<g class="fig-muted">${ctext(630, 142, 11, 'inoculate')}</g>`, 'the same disease appears')}
${station(870, '4', 're-isolated, identical', `${dish(870, 175)}`, 'the same organism as in step 2')}
<g class="fig-muted"><defs>${ARROW('arr-mb-koch-m')}</defs>${line(236, 175, 336, 175, 'arr-mb-koch-m', 3)}${line(444, 175, 548, 175, 'arr-mb-koch-m', 3)}${line(708, 175, 816, 175, 'arr-mb-koch-m', 3)}</g>
<g class="fig-accent">${ctext(500, 312, 16, 'all four hold → the microbe CAUSES the disease', bold)}</g>
<g class="fig-accent-2">${ctext(500, 342, 14, 'any step fails → only an association, not proven causation', bold)}</g>
<g class="fig-muted">${txt(60, 440, 15, 'The pure culture is the pivot: it separates one candidate organism from everything else in the sick host.')}</g>
</svg>`

export const mcatMicrobiologyFigures: DeckFigurePlacement[] = [
  {
    at: 'Gram Stain Classification',
    mode: 'replace-table',
    figure: {
      svg: gramSvg,
      alt:
        'The Gram stain as a four-step procedure, two rows of bacteria. Steps across the top: 1 crystal violet (primary dye), 2 iodine (fixes the dye), 3 alcohol wash (decolorizer), 4 safranin (counterstain). Gram-positive row: a cell with a thick wall ring is blue after steps 1 and 2, still blue after the alcohol wash and still blue after safranin — it keeps the violet and stains purple/blue; thick peptidoglycan, no outer membrane, no LPS. Gram-negative row: a cell with a thin wall ring inside a dashed outer membrane is blue after steps 1 and 2, colourless after the alcohol wash, and red after safranin — it loses the violet, takes safranin and stains pink/red; thin peptidoglycan, outer membrane with LPS (endotoxin). Footer: the alcohol step decides — a thick wall traps the violet–iodine complex, a thin wall behind an outer membrane lets it wash out so safranin shows; LPS released when Gram-negatives lyse causes fever, septic shock and DIC.',
      caption: 'Same dyes, different walls: the alcohol step strips the violet only from the thin-walled, outer-membraned Gram-negative, which then takes the pink safranin.',
    },
    blocks: [
      '- **Gram-positive:** thick peptidoglycan, no outer membrane → keeps crystal violet, stains **purple**',
      '- **Gram-negative:** thin peptidoglycan + outer membrane with **LPS** → decolorizes, takes safranin, stains **pink**',
      '- LPS = endotoxin, released on lysis → fever, septic shock, DIC',
      '- The outer membrane also blocks many antibiotics — Gram-negatives are harder to treat',
    ],
  },
  {
    at: 'Binary Fission',
    mode: 'lead',
    figure: {
      svg: fissionSvg,
      alt:
        'Left, a doubling tree of blue pill-shaped cells: n = 0 is one cell, n = 1 two, n = 2 four, n = 3 eight (8 = 2³), each cell splitting into two below it. Beneath: after n doublings, N = N₀ × 2ⁿ; the generation (doubling) time is the time one division takes. Right, the lesson’s worked example as a chain of boxes: start N₀ = 5 × 10³ cells with a 20 min doubling time; 2 h = 120 min, so n = 120 ÷ 20 = 6 generations; N = 5 × 10³ × 2⁶ = 5 × 10³ × 64 = 3.2 × 10⁵ cells (blue); then a grey caveat — only while log phase lasts: nutrients run out, the culture enters stationary phase, and the real N is lower. Footer: antibiotics that hit division (cell wall, DNA, translation) bite hardest in the log phase.',
      caption: 'Binary fission doubles the population each generation, so N = N₀ × 2ⁿ with n = elapsed time ÷ doubling time — an idealization that holds only while the culture is in log phase.',
    },
    blocks: [
      '- $N = N_0 \\times 2^n$, with $n$ = elapsed time ÷ generation (doubling) time',
      '- Holds only in log phase — nutrients run out and the real count falls short of the ideal',
    ],
  },
  {
    at: 'Bacterial Metabolism',
    mode: 'replace-table',
    figure: {
      svg: trophSvg,
      alt:
        'A 2×2 grid. Columns are the carbon source: CO₂ gives the suffix -autotroph, organic carbon gives -heterotroph. Rows are the energy source: light gives the prefix photo-, chemicals give chemo-. Cells: Photoautotroph (energy light, carbon fixes CO₂; cyanobacteria); Photoheterotroph (energy light, carbon organic compounds; rare, mostly non-pathogens); Chemoautotroph (energy inorganic chemicals, carbon fixes CO₂; nitrifying and sulfur-oxidizing bacteria); Chemoheterotroph, highlighted in blue (energy and carbon both organic compounds; E. coli, most pathogens — and us). Footer: photo- = light, chemo- = oxidizing chemicals, auto- = fixes CO₂, hetero- = takes organic carbon; chemoautotrophs oxidize inorganic chemicals while chemoheterotrophs oxidize organic compounds.',
      caption: 'Read the name in two halves: the prefix is where the energy comes from (photo-/chemo-), the suffix where the carbon comes from (-autotroph fixes CO₂, -heterotroph eats organic carbon).',
    },
    blocks: [
      '- **Prefix = energy:** photo- (light) or chemo- (oxidizing chemicals)',
      '- **Suffix = carbon:** -autotroph fixes CO₂; -heterotroph takes organic carbon',
      '- Most pathogens (and we) are chemoheterotrophs; cyanobacteria are photoautotrophs',
    ],
  },
  {
    at: 'Worked Example — Tracing How Resistance Spreads',
    mode: 'after',
    figure: {
      svg: plasmidSvg,
      alt:
        'Left, a Klebsiella donor cell holding a plasmid ring with two gene segments, a blue β-lactamase gene and a red efflux-pump gene, joined by a thick grey sex pilus to an E. coli recipient of another species; a blue arrow runs along the pilus and a dashed copy of the same two-gene plasmid sits in the recipient, labelled plasmid copy received. Caption line: conjugation — a plasmid copy crosses the sex pilus, even between species; vertical = parent to daughter, horizontal = between cells, across species. Right, inside the recipient cell: penicillin meets β-lactamase, which hydrolyzes the ring — drug destroyed before it reaches the wall; tetracycline enters and meets a red efflux pump in the membrane that pushes it back out — expelled before it acts. Footer: transformation moves naked fragments and transduction rides a phage; the same plasmid in a different species says conjugation. One conjugation event gives resistance to two unrelated drug classes.',
      caption: 'The worked example as a picture: one mobile plasmid carries two unrelated resistance mechanisms, and a single conjugation across species hands both to the recipient at once.',
    },
    blocks: [
      '- The plasmid is the unit: mobile, self-replicating, here carrying β-lactamase + a tetracycline efflux pump',
      '- The same plasmid in another species ⇒ conjugation; one transfer = resistance to two drug classes',
    ],
  },
  {
    at: 'Fungi',
    mode: 'replace-table',
    figure: {
      svg: fungiSvg,
      alt:
        'Left, a fungal cell drawn as a rounded box: a thick grey outer layer labelled chitin wall — not peptidoglycan, a membrane studded with blue dots labelled ergosterol in the membrane, and a nucleus (a eukaryote: 80S ribosomes, organelles). Under it, drug lines: azoles and amphotericin B hit ergosterol; echinocandins hit wall glucan; β-lactams have no peptidoglycan to attack (crossed out, red). Right, the two growth forms: yeast — a round cell with a small bud, unicellular, reproduces by budding; mould — branching hyphae with spore dots, multicellular; a blue two-headed arrow between them reads dimorphic fungi switch: mould in the environment, yeast at 37 °C inside the body. Footer: heterotrophs that absorb nutrients from their surroundings; asexual by budding and spores, sexual under stress; antifungal selectivity rests on ergosterol and chitin — things human cells lack.',
      caption: 'Chitin outside, ergosterol in the membrane — the two fungal features human cells lack and antifungals exploit — and the yeast ⇄ mould switch that defines a dimorphic fungus.',
    },
    blocks: [
      '- **Chitin** wall (no peptidoglycan → β-lactams useless) · **ergosterol** membrane (azoles, amphotericin B)',
      '- Yeasts bud as single cells; moulds grow as hyphae; **dimorphic** fungi switch (mould outside, yeast at 37 °C)',
      '- Heterotrophs with absorptive feeding; sexual reproduction mainly under stress',
    ],
  },
  {
    at: 'Parasitology',
    mode: 'lead',
    figure: {
      svg: malariaSvg,
      alt:
        'Left, a small tree: eukaryotic parasites split into protozoa (single-celled) and helminths (multicellular worms, tapeworms and kin); under protozoa, a red box Plasmodium — the one the MCAT asks about. Right, a two-host cycle: a female Anopheles mosquito (the vector) and a human host (the parasite multiplies here) joined by two curved arrows — a bite injects the parasite, and the next mosquito bites and carries it on. Under the human, four red blood cells: it invades red blood cells — the fever cycles. A blue box: why the sickle-cell trait persists — HbS heterozygotes are protected from malaria, so heterozygote advantage keeps the allele common. Footer: the MCAT triplet is Anopheles (vector), Plasmodium (protozoan), malaria (disease).',
      caption: 'Protozoa are single-celled eukaryotes, helminths are worms; Plasmodium is the protozoan to know — carried between people by Anopheles, multiplying in red blood cells, and the reason the sickle-cell allele persists.',
    },
    blocks: [
      '- **Protozoa** are single-celled eukaryotes; **helminths** are multicellular worms',
      '- *Plasmodium* (protozoan) → malaria, carried by the *Anopheles* mosquito; HbS heterozygotes are protected',
    ],
  },
  {
    at: 'First Line of Defense (Barriers)',
    mode: 'lead',
    figure: {
      svg: defenseSvg,
      alt:
        'A red spiky pathogen on the left with an arrow into three tall bands it must cross in turn. Band 1, Barriers (physical and chemical, always on): skin, mucous membranes, stomach acid, lysozyme in tears and saliva, normal flora. A grey arrow labelled breach leads to band 2, Innate (nonspecific, minutes to hours): neutrophils — first responders; macrophages — eat and present antigen (APC); NK cells — kill missing self; complement — C3b opsonin, MAC; inflammation — dilate, recruit. A grey arrow labelled antigen handoff (APCs present on MHC II) leads to band 3, Adaptive (specific, days, memory): humoral — B cells to plasma cells to antibodies against extracellular foes; cell-mediated — T cells, CD4⁺ helps and CD8⁺ kills infected cells; memory makes the next response faster. A time axis underneath runs seconds → minutes–hours → days, and faster every time after.',
      caption: 'A pathogen meets the defenses in order: barriers that keep it out, innate cells and complement that are fast but nonspecific, then the adaptive B and T cells that are slow the first time and remember.',
    },
    blocks: [
      '- Barriers → innate (neutrophils, macrophages, NK cells, complement) → adaptive (B and T cells)',
      '- Nonspecific and fast first; specific, slower and with memory last — APCs hand antigen across',
    ],
  },
  {
    at: 'Vaccination',
    mode: 'lead',
    figure: {
      svg: immunitySvg,
      alt:
        'A graph of protective antibody against time, starting at day 0 (vaccine, infection, or antibody dose), with a dashed line later marking re-exposure to the pathogen. Red curve, passive immunity: starts high immediately and decays steadily toward zero — immediate, then fades; no memory cells, so no boost later; it does not react to the re-exposure. Blue curve, active immunity: flat lag, then the body’s own response rises over weeks and slowly wanes while memory cells form; at re-exposure it shoots up fast, high and lasting. Legend: active immunity — own response to an antigen (vaccines, natural infection), delayed, long-lasting, memory; passive immunity — pre-formed antibodies received (maternal IgG, antiserum), immediate, temporary, no memory. Footer: a newborn runs on maternal IgG (passive) for months until its own active responses mature. Curves are illustrative.',
      caption: 'Active vs passive immunity (illustrative): borrowed antibodies protect at once and fade, while a response you make yourself starts late, lasts, and comes back faster and higher on re-exposure.',
    },
    blocks: [
      '- **Active:** antigen exposure → own response → memory; delayed but long-lasting (vaccines, infection)',
      '- **Passive:** pre-formed antibodies received (maternal IgG, antiserum); immediate but temporary',
    ],
  },
  {
    at: "Koch's Postulates",
    mode: 'lead',
    figure: {
      svg: kochSvg,
      alt:
        'Four numbered stations left to right joined by arrows. 1, found in every case: three sick hosts, each containing the red organism — the organism is in all of the sick. 2, isolated in pure culture: a petri dish with red colonies — one organism, nothing else. 3, infects a healthy host: a healthy (empty) host is inoculated and becomes a sick host containing the organism — the same disease appears. 4, re-isolated, identical: a second petri dish with the same red colonies — the same organism as in step 2. Below in blue: all four hold → the microbe causes the disease; in red: any step fails → only an association, not proven causation. Footer: the pure culture is the pivot — it separates one candidate organism from everything else in the sick host.',
      caption: 'Koch’s postulates as a loop: present in every case, grown alone, able to reproduce the disease in a healthy host, and recovered unchanged from that host — only then is the microbe the cause.',
    },
    blocks: [
      '- 1 in every case → 2 isolated in pure culture → 3 causes disease in a healthy host → 4 re-isolated, identical',
      '- Together the four steps turn an association into proven causation',
    ],
  },
]
