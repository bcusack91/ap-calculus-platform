import type { DeckFigurePlacement } from './index'

/**
 * Bacteria (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept: a rod-shaped cell as a
 * labelled map of rounded outlines, two envelope stacks side by side, shape
 * glyphs (circles, pills, waves), a four-phase curve, five test tubes with dot
 * clouds, three horizontal-transfer cartoons, conjugating cells joined by a
 * pilus bar, a two-column toxin grid and an A-on-B toxin on a receptor. No
 * textbook, prep-company or AAMC figure was copied. The growth curve is drawn
 * from its textbook shape and captioned illustrative; no numbers appear that
 * the lesson does not state.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-bac-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

const f = (v: number) => +v.toFixed(1)

/** Text helper: x, y, size, content, extra attributes. */
const T = (x: number, y: number, fs: number, txt: string, attrs = '') =>
  `<text x="${x}" y="${y}" font-size="${fs}"${attrs ? ' ' + attrs : ''} fill="currentColor">${txt}</text>`
const TM = (x: number, y: number, fs: number, txt: string, attrs = '') => T(x, y, fs, txt, `text-anchor="middle"${attrs ? ' ' + attrs : ''}`)
const TB = (x: number, y: number, fs: number, txt: string, attrs = '') => TM(x, y, fs, txt, `font-weight="700"${attrs ? ' ' + attrs : ''}`)

/** A rounded "cell" outline, lightly filled. */
const CELL = (x: number, y: number, w: number, h: number, extra = '') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(w, h) / 2}" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"${extra ? ' ' + extra : ''}/>`

/** Small dots along a line from (x0,y0) to (x1,y1). */
const DOTS = (x0: number, y0: number, x1: number, y1: number, n: number, r = 3.5) => {
  let s = ''
  for (let i = 0; i <= n; i++) {
    const t = i / n
    s += `<circle cx="${f(x0 + (x1 - x0) * t)}" cy="${f(y0 + (y1 - y0) * t)}" r="${r}" fill="currentColor"/>`
  }
  return s
}

/** A grid of dots (bacterial growth in a tube). */
const GRID = (x0: number, y0: number, cols: number, rows: number, dx: number, dy: number, r = 3) => {
  let s = ''
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) s += `<circle cx="${x0 + i * dx + (j % 2) * (dx / 2)}" cy="${y0 + j * dy}" r="${r}" fill="currentColor"/>`
  return s
}

/* 1 — The prokaryotic cell as a labelled map (lead, 1000×460) */
const prokaryoteSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<rect x="250" y="106" width="460" height="248" rx="124" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6"/>
<line x1="300" y1="76" x2="330" y2="110" stroke="currentColor" stroke-width="1.5"/>
<line x1="640" y1="76" x2="612" y2="130" stroke="currentColor" stroke-width="1.5"/>
<line x1="600" y1="378" x2="580" y2="320" stroke="currentColor" stroke-width="1.5"/>
<line x1="150" y1="378" x2="318" y2="294" stroke="currentColor" stroke-width="1.5"/>
<line x1="150" y1="240" x2="226" y2="230" stroke="currentColor" stroke-width="1.5"/>
</g>
<rect x="272" y="128" width="416" height="204" rx="102" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="6"/>
<rect x="286" y="142" width="388" height="176" rx="88" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M 360 230 C 350 180, 430 170, 450 210 C 470 250, 520 240, 500 200 C 480 160, 400 190, 400 240 C 400 280, 470 290, 490 250 C 505 220, 440 200, 420 250" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
${TB(430, 304, 16, 'nucleoid')}
<g class="fig-accent">
<circle cx="600" cy="186" r="16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<circle cx="608" cy="276" r="16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
${TM(604, 237, 15, 'plasmids')}
</g>
${DOTS(300, 180, 330, 166, 2, 4)}${DOTS(320, 290, 360, 296, 3, 4)}${DOTS(540, 160, 580, 156, 3, 4)}${DOTS(530, 300, 560, 292, 2, 4)}${DOTS(648, 226, 652, 248, 1, 4)}${DOTS(340, 230, 346, 250, 1, 4)}
<path d="M 688 230 C 720 180, 750 280, 790 230 S 860 180, 900 230 S 950 280, 970 230" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
<line x1="278" y1="190" x2="236" y2="176" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
<line x1="272" y1="230" x2="226" y2="230" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
<line x1="278" y1="270" x2="236" y2="284" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
<line x1="300" y1="160" x2="268" y2="136" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
<line x1="300" y1="300" x2="268" y2="324" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
${T(30, 46, 18, 'Capsule', 'font-weight="700"')}
${T(30, 66, 15, 'polysaccharide · antiphagocytic · vaccine target')}
${T(560, 46, 18, 'Cell wall — peptidoglycan', 'font-weight="700"')}
${T(560, 66, 15, 'NAG–NAM chains, D-amino-acid cross-links')}
${T(30, 236, 17, 'Pili / fimbriae', 'font-weight="700"')}
${T(30, 256, 15, 'adhesion · the sex pilus')}
${T(30, 276, 15, 'starts conjugation')}
${T(720, 300, 17, 'Flagellum', 'font-weight="700"')}
${T(720, 320, 15, 'rotary motor — proton-motive force')}
${T(720, 340, 15, 'rotation direction → run vs tumble')}
${T(30, 392, 17, '70S ribosomes', 'font-weight="700"')}
${T(30, 412, 15, 'transcription + translation coupled; polycistronic mRNA')}
${T(520, 392, 17, 'Plasma membrane', 'font-weight="700"')}
${T(520, 412, 15, 'no cholesterol · no organelles inside')}
<g class="fig-accent-2">${TB(500, 446, 16, 'NOT here: nucleus · membrane-bound organelles · histones · 80S ribosomes · cholesterol')}</g>
</svg>`

/* 2 — Gram-positive vs Gram-negative envelopes (replace-table, 560×440) */
const HATCH = (x: number, w: number, ys: number[]) => {
  let s = ''
  for (const y of ys) s += `<line x1="${x + 8}" y1="${y}" x2="${x + w - 8}" y2="${y}" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>`
  for (let i = 0; i < ys.length - 1; i++) for (let k = 0; k < 4; k++) {
    const xx = x + 30 + k * 50 + (i % 2) * 25
    s += `<line x1="${xx}" y1="${ys[i]}" x2="${xx}" y2="${ys[i + 1]}" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>`
  }
  return s
}
const gramSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted"><line x1="280" y1="20" x2="280" y2="310" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
${TB(150, 30, 18, 'Gram-positive')}
${TM(150, 52, 13, 'stains PURPLE — keeps crystal violet')}
${TB(410, 30, 18, 'Gram-negative')}
<g class="fig-accent-2">${TM(410, 52, 13, 'stains PINK — safranin counterstain')}</g>
<g class="fig-accent">
<path d="M70 150 q 6 -10 0 -19 t 0 -19 M110 150 q 6 -10 0 -19 t 0 -19 M150 150 q 6 -10 0 -19 t 0 -19 M190 150 q 6 -10 0 -19 t 0 -19 M230 150 q 6 -10 0 -19 t 0 -19" fill="none" stroke="currentColor" stroke-width="2"/>
${TM(150, 100, 13, 'teichoic acids')}
</g>
<rect x="40" y="150" width="220" height="90" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${HATCH(40, 220, [165, 180, 195, 210, 225])}
<rect x="80" y="184" width="140" height="22" rx="4" class="fig-bg"/>
${TB(150, 200, 15, 'THICK peptidoglycan')}
<rect x="40" y="250" width="220" height="14" rx="3" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
${TM(150, 282, 13, 'plasma membrane')}
<g class="fig-muted">${TM(150, 300, 12, 'cytoplasm')}${TM(410, 300, 12, 'cytoplasm')}${TM(380, 198, 12, 'periplasm')}</g>
<g class="fig-accent-2">
<path d="M320 160 v -28 M340 160 v -28 M360 160 v -28 M380 160 v -28 M400 160 v -28 M420 160 v -28 M440 160 v -28 M460 160 v -28 M500 160 v -28" stroke="currentColor" stroke-width="2.5"/>
<circle cx="320" cy="130" r="3" fill="currentColor"/><circle cx="340" cy="130" r="3" fill="currentColor"/><circle cx="360" cy="130" r="3" fill="currentColor"/><circle cx="380" cy="130" r="3" fill="currentColor"/><circle cx="400" cy="130" r="3" fill="currentColor"/><circle cx="420" cy="130" r="3" fill="currentColor"/><circle cx="440" cy="130" r="3" fill="currentColor"/><circle cx="460" cy="130" r="3" fill="currentColor"/><circle cx="500" cy="130" r="3" fill="currentColor"/>
${TB(410, 116, 13, 'LPS — lipid A = ENDOTOXIN')}
</g>
<rect x="300" y="160" width="220" height="18" rx="3" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
${TM(390, 173, 12, 'outer membrane')}
<rect class="fig-bg" x="470" y="157" width="20" height="24"/>
<g class="fig-accent"><rect x="472" y="157" width="16" height="24" rx="3" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>${TM(480, 198, 11, 'porin')}</g>
<rect x="300" y="212" width="220" height="16" rx="3" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
<line x1="308" y1="220" x2="512" y2="220" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.45"/>
${TM(410, 243, 12, 'thin peptidoglycan')}
<rect x="300" y="250" width="220" height="14" rx="3" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
${TM(410, 282, 13, 'plasma membrane')}
${TB(280, 328, 13, 'peptidoglycan = NAG–NAM chains cross-linked by D-amino-acid peptides')}
${TM(150, 354, 13, 'lysozyme cuts the NAG–NAM bond')}
${TM(150, 374, 13, 'β-lactams block cross-linking')}
<g class="fig-accent">${TB(150, 394, 13, 'vancomycin works')}</g>
${TM(410, 354, 13, 'outer membrane blocks many drugs')}
${TM(410, 374, 13, 'porins let small nutrients in')}
<g class="fig-accent-2">${TB(410, 394, 13, 'lipid A → septic shock')}</g>
<g class="fig-muted">${TM(280, 426, 12, 'acid-fast (Mycobacterium): waxy mycolic-acid coat — the Gram stain fails')}</g>
</svg>`

/* 3 — Shapes and arrangements (lead, 1000×460) */
const COC = (x: number, y: number, r = 12) => `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>`
const ROD = (x: number, y: number, w: number, h = 26) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>`
const shapesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bac-shape')}</defs>
<g class="fig-muted">
<line x1="335" y1="24" x2="335" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="665" y1="24" x2="665" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="30" y1="300" x2="970" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
</g>
${TB(170, 44, 21, 'Cocci — spheres')}
${TB(500, 44, 21, 'Bacilli — rods')}
${TB(830, 44, 21, 'Spiral forms')}
<g class="fig-accent">
${COC(170, 110, 30)}
${ROD(445, 90, 110, 40)}
<path d="M 740 110 c 15 -30 30 -30 45 0 s 30 30 45 0 s 30 -30 45 0" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>
<path d="M 740 200 c 8 -18 16 -18 24 0 s 16 18 24 0 s 16 -18 24 0 s 16 18 24 0 s 16 -18 24 0 s 16 18 24 0 s 16 -18 24 0" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
</g>
${TM(830, 150, 15, 'spirillum — rigid, wavy')}
${TM(830, 240, 15, 'spirochete — flexible corkscrew')}
${COC(62, 225, 13)}${COC(88, 225, 13)}
${TM(75, 262, 15, 'diplo-')}
${COC(130, 225)}${COC(154, 225)}${COC(178, 225)}${COC(202, 225)}${COC(226, 225)}
${TM(178, 262, 15, 'strepto- (chain)')}
${COC(278, 208)}${COC(302, 208)}${COC(266, 228)}${COC(290, 228)}${COC(314, 228)}${COC(278, 248)}${COC(302, 248)}
${TM(290, 282, 15, 'staphylo- (cluster)')}
${ROD(350, 212, 60)}
${TM(380, 262, 15, 'single')}
${ROD(430, 212, 56)}${ROD(490, 212, 56)}
${TM(488, 262, 15, 'diplo-')}
${ROD(560, 212, 28)}${ROD(592, 212, 28)}${ROD(624, 212, 28)}
${TM(606, 262, 15, 'strepto-')}
<g class="fig-muted"><line x1="90" y1="322" x2="90" y2="378" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/></g>
${COC(90, 350, 20)}
<line x1="118" y1="350" x2="146" y2="350" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bac-shape)"/>
${COC(166, 350)}${COC(190, 350)}${COC(214, 350)}${COC(238, 350)}
${TM(170, 405, 15, 'one division plane, cells stay')}
${TM(170, 425, 15, 'attached → chains (strepto-)')}
<g class="fig-muted">
<line x1="420" y1="322" x2="420" y2="378" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="392" y1="350" x2="448" y2="350" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="400" y1="330" x2="440" y2="370" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
</g>
${COC(420, 350, 20)}
<line x1="448" y1="350" x2="476" y2="350" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bac-shape)"/>
${COC(508, 334)}${COC(532, 334)}${COC(496, 354)}${COC(520, 354)}${COC(544, 354)}${COC(508, 374)}${COC(532, 374)}
${TM(470, 405, 15, 'planes in random directions')}
${TM(470, 425, 15, '→ grape-like clusters (staphylo-)')}
${T(690, 334, 17, 'Named by shape + arrangement', 'font-weight="700"')}
${T(690, 360, 15, 'Streptococcus = chain of spheres')}
${T(690, 382, 15, 'Staphylococcus = cluster of spheres')}
${T(690, 404, 15, 'Bacillus = rod · Vibrio = curved rod')}
<g class="fig-muted">${T(690, 428, 14, 'arrangement = geometry of the last divisions')}</g>
</svg>`

/* 4 — The closed-culture growth curve (lead, 1000×460) */
const growthSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bac-grow')}</defs>
<line x1="90" y1="380" x2="950" y2="380" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bac-grow)"/>
<line x1="90" y1="380" x2="90" y2="50" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bac-grow)"/>
${T(100, 44, 16, 'log (viable cells)')}
${T(950, 404, 16, 'time', 'text-anchor="end"')}
<g class="fig-muted">
<line x1="270" y1="60" x2="270" y2="380" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="530" y1="60" x2="530" y2="380" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="760" y1="60" x2="760" y2="380" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
<g class="fig-accent">
<path d="M 100 300 L 256 300 Q 270 300 278 294 L 520 118 Q 530 110 544 110 L 746 110 Q 760 110 766 118 L 920 232" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
${TB(180, 78, 18, '1 Lag')}
${TB(400, 78, 18, '2 Log (exponential)')}
${TB(645, 78, 18, '3 Stationary')}
${TB(855, 78, 18, '4 Death')}
${TM(180, 336, 14, 'no division yet;')}
${TM(180, 354, 14, 'cells make enzymes')}
${TM(180, 372, 14, 'for the new medium')}
${TM(400, 300, 15, 'constant doubling — a straight')}
${TM(400, 320, 15, 'line on a log scale; slope = rate')}
<g class="fig-accent-2">
${TB(400, 352, 15, 'β-lactams need growing cells')}
${TB(400, 372, 15, '→ most lethal here')}
</g>
${TM(645, 150, 14, 'nutrients exhausted, wastes up')}
${TM(645, 170, 14, 'division = death')}
<g class="fig-accent-2">
${TB(645, 204, 15, 'endospores, toxins and')}
${TB(645, 224, 15, 'secondary metabolites appear')}
</g>
${TM(855, 300, 15, 'exponential loss')}
${TM(855, 320, 15, 'of viability')}
<g class="fig-muted">${TM(520, 440, 15, 'N = N₀ · 2ⁿ with n = t / g (generation time) — exponential growth is a straight line on a log axis')}</g>
</svg>`

/* 5 — Oxygen relationships: five thioglycollate tubes (replace-table, 560×440) */
const TUBE = (x: number) => {
  const top = 96, bot = 296, w = 64
  return (
    `<path d="M${x} ${top} L${x} ${bot - 32} A 32 32 0 0 0 ${x + w} ${bot - 32} L${x + w} ${top}" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="2.5"/>` +
    `<line x1="${x - 6}" y1="${top}" x2="${x + w + 6}" y2="${top}" stroke="currentColor" stroke-width="3"/>`
  )
}
const oxygenSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">${TM(280, 22, 13, 'thioglycollate broth: O₂ high at the surface, zero at the bottom')}</g>
${TB(60, 50, 13, 'Obligate')}${TB(60, 66, 13, 'aerobe')}
${TB(164, 50, 13, 'Facultative')}${TB(164, 66, 13, 'anaerobe')}
${TB(268, 50, 13, 'Aerotolerant')}${TB(268, 66, 13, 'anaerobe')}
${TB(372, 50, 13, 'Obligate')}${TB(372, 66, 13, 'anaerobe')}
${TB(476, 50, 13, 'Micro-')}${TB(476, 66, 13, 'aerophile')}
${TUBE(28)}${TUBE(132)}${TUBE(236)}${TUBE(340)}${TUBE(444)}
<g class="fig-accent">
${GRID(36, 106, 4, 3, 14, 11)}
${GRID(140, 106, 4, 3, 14, 11)}${GRID(144, 150, 2, 6, 24, 22, 2.5)}
${GRID(246, 108, 3, 9, 18, 19)}
${GRID(348, 248, 4, 3, 14, 11)}
${GRID(452, 132, 4, 2, 14, 11)}
</g>
${TM(60, 322, 11.5, 'O₂ required')}${TM(60, 338, 11.5, 'catalase + SOD')}
${TM(164, 322, 11.5, 'prefers O₂, can')}${TM(164, 338, 11.5, 'also ferment')}${TM(164, 354, 11.5, 'catalase + SOD')}
${TM(268, 322, 11.5, 'ferments always')}${TM(268, 338, 11.5, 'ignores O₂')}${TM(268, 354, 11.5, 'SOD, no catalase')}
${TM(372, 322, 11.5, 'O₂ kills it')}${TM(372, 338, 11.5, 'no SOD,')}${TM(372, 354, 11.5, 'no catalase')}
${TM(476, 322, 11.5, 'needs low O₂')}${TM(476, 338, 11.5, 'band just')}${TM(476, 354, 11.5, 'below the top')}
<g class="fig-accent-2">${TB(280, 388, 13, 'O₂ → superoxide + H₂O₂: survivable only with SOD + catalase')}</g>
<g class="fig-accent">${TM(280, 410, 12, 'facultative grows everywhere but DENSEST on top (respiration beats fermentation)')}</g>
<g class="fig-muted">${TM(280, 430, 12, 'aerotolerant = even growth: O₂ neither helps nor harms')}</g>
</svg>`

/* 6 — Three horizontal routes, sorted by DNase / filter / phage (replace-table, 560×440) */
const FRAG = (x: number, y: number) => `<path d="M${x} ${y} q 5 -6 10 0 t 10 0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`
const hgtSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-bac-hgt')}</defs>
${TB(280, 24, 14, 'three horizontal routes — tell them apart by DNase, a filter, a phage')}
<g class="fig-muted">
<line x1="20" y1="165" x2="540" y2="165" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="20" y1="290" x2="540" y2="290" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
</g>
<rect x="30" y="70" width="90" height="60" rx="30" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 6"/>
${FRAG(128, 88)}${FRAG(140, 110)}${FRAG(126, 126)}
<line x1="160" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bac-hgt)"/>
${CELL(185, 70, 80, 60)}
<circle cx="225" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent">${FRAG(216, 100)}</g>
${T(275, 84, 16, 'Transformation', 'font-weight="700"')}
${T(275, 104, 13, 'competent cell takes up NAKED DNA')}
<g class="fig-accent-2">${T(275, 122, 13, 'DNase in the medium abolishes it', 'font-weight="700"')}</g>
${T(275, 140, 13, 'no contact · no phage · Griffith, Avery')}
<polygon points="60,190 78,200 78,222 60,232 42,222 42,200" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<line x1="60" y1="232" x2="60" y2="258" stroke="currentColor" stroke-width="3"/>
<path d="M50 266 L60 258 L70 266" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">${FRAG(50, 212)}</g>
<line x1="86" y1="225" x2="106" y2="225" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-bac-hgt)"/>
${CELL(112, 195, 150, 60)}
<circle cx="190" cy="225" r="18" fill="none" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent">${FRAG(140, 225)}</g>
${T(275, 200, 16, 'Transduction', 'font-weight="700"')}
${T(275, 219, 13, 'host DNA packed inside a PHAGE capsid')}
${T(275, 237, 13, 'DNase-proof · no contact needed')}
<g class="fig-accent-2">${T(275, 255, 13, 'needs a phage', 'font-weight="700"')}</g>
<g class="fig-muted">${T(275, 271, 11.5, 'generalized: lytic packaging, any gene')}${T(275, 285, 11.5, 'specialized: prophage flanking genes')}</g>
${CELL(30, 320, 100, 60)}
<circle cx="66" cy="350" r="18" fill="none" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent"><circle cx="106" cy="338" r="9" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/></g>
<rect x="130" y="344" width="40" height="12" rx="3" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent">
<defs>${ARROW('arr-bac-hgt-b')}</defs>
<line x1="116" y1="350" x2="196" y2="350" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-bac-hgt-b)"/>
<circle cx="222" cy="350" r="9" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 3"/>
</g>
${CELL(170, 320, 100, 60)}
<g class="fig-muted">${TM(150, 398, 11, 'sex pilus')}</g>
${T(275, 336, 16, 'Conjugation', 'font-weight="700"')}
${T(275, 356, 13, 'F plasmid strand through a SEX PILUS')}
<g class="fig-accent-2">${T(275, 374, 13, 'needs cell CONTACT — a filter blocks it', 'font-weight="700"')}</g>
${T(275, 392, 13, 'DNase-proof · F⁺ × F⁻ → both F⁺')}
<g class="fig-muted">${TM(280, 430, 12, 'vertical = binary fission (clonal) · horizontal = any of these three')}</g>
</svg>`

/* 7 — Conjugation variants: F⁺ × F⁻, Hfr, F′ (lead, 1000×460) */
const PANEL = (x0: number) =>
  `${CELL(x0 + 10, 90, 120, 80)}${CELL(x0 + 180, 90, 120, 80)}` +
  `<rect x="${x0 + 130}" y="124" width="50" height="12" rx="3" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>`
const conjugationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<line x1="335" y1="30" x2="335" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="660" y1="30" x2="660" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
</g>
${TB(175, 44, 21, 'F⁺ × F⁻')}
${TB(500, 44, 21, 'Hfr × F⁻')}
${TB(825, 44, 21, 'F′ and R plasmids')}
${PANEL(20)}
<circle cx="78" cy="130" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<defs>${ARROW('arr-bac-conj-b')}</defs>
<circle cx="124" cy="112" r="11" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<line x1="132" y1="130" x2="224" y2="130" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-bac-conj-b)"/>
<circle cx="262" cy="130" r="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 3"/>
${TM(124, 80, 13, 'F plasmid')}
</g>
${TM(90, 196, 14, 'F⁺ donor')}
${TM(260, 196, 14, 'F⁻ recipient')}
${TM(175, 240, 15, 'one F strand crosses the pilus;')}
${TM(175, 262, 15, 'both synthesize the partner strand')}
<g class="fig-accent-2">${TB(175, 290, 16, '→ BOTH end up F⁺')}</g>
<g class="fig-muted">${TM(175, 320, 14, 'the pilus is a bridge; a filter')}${TM(175, 338, 14, 'between cells stops everything')}</g>
${PANEL(345)}
<circle cx="403" cy="130" r="26" fill="none" stroke="currentColor" stroke-width="2.5"/>
${TM(396, 116, 12, 'a')}${TM(388, 135, 12, 'b')}${TM(396, 154, 12, 'c')}
<g class="fig-accent">
<path d="M 425.5 117 A 26 26 0 0 1 425.5 143" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
<line x1="432" y1="130" x2="549" y2="130" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-bac-conj-b)"/>
${TM(500, 116, 13, 'a → b → c …')}
${TM(500, 78, 13, 'F sits in the chromosome')}
</g>
${TB(585, 136, 14, 'a  b')}
<g class="fig-accent-2">
<line x1="494" y1="140" x2="506" y2="156" stroke="currentColor" stroke-width="3"/><line x1="506" y1="140" x2="494" y2="156" stroke="currentColor" stroke-width="3"/>
${TM(500, 172, 12, 'bridge breaks')}
</g>
${TM(415, 196, 14, 'Hfr donor')}
${TM(585, 196, 14, 'stays F⁻')}
${TM(500, 240, 15, 'chromosomal genes cross in MAP ORDER')}
${TM(500, 262, 15, 'the bridge usually breaks before F')}
<g class="fig-accent-2">${TB(500, 290, 16, '→ recipient stays F⁻')}</g>
<g class="fig-muted">${TM(500, 320, 14, 'interrupted mating: entry time')}${TM(500, 338, 14, '= map position (first maps)')}</g>
${PANEL(670)}
<circle cx="728" cy="130" r="24" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent">
<circle cx="774" cy="116" r="14" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
<line x1="790" y1="130" x2="874" y2="130" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-bac-conj-b)"/>
<circle cx="912" cy="130" r="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 3"/>
${TM(774, 80, 13, 'F′ plasmid')}
</g>
<path d="M 781 103.9 A 14 14 0 0 1 786.1 123" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
<path d="M 919 117.9 A 14 14 0 0 1 924.1 137" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
${TM(740, 196, 14, 'F′ donor')}
${TM(910, 196, 14, 'F′ recipient')}
${TM(825, 240, 15, 'imprecise excision of integrated F')}
${TM(825, 262, 15, 'carries NEIGHBOURING chromosomal genes')}
<g class="fig-muted">${TM(825, 284, 14, '(like specialized transduction)')}</g>
<g class="fig-accent-2">${TB(825, 320, 15, 'R plasmids: same machinery →')}${TB(825, 342, 15, 'multidrug resistance, across species')}</g>
<g class="fig-muted">${TM(500, 430, 15, 'same machinery, three outcomes — F⁺ spreads F; Hfr maps the chromosome; F′ and R plasmids move genes')}</g>
</svg>`

/* 8 — Exotoxin vs endotoxin (replace-table, 560×440) */
const ROW = (y: number, label: string, left: string, right: string) =>
  `<g class="fig-muted">${TM(280, y, 10, label)}</g>` +
  `<text x="245" y="${y}" font-size="13" text-anchor="end" fill="currentColor">${left}</text>` +
  `<text x="315" y="${y}" font-size="13" fill="currentColor">${right}</text>`
const toxinSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-bac-tox')}</defs>
<g class="fig-muted"><line x1="280" y1="20" x2="280" y2="200" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
<g class="fig-accent">${TB(145, 34, 18, 'Exotoxin')}</g>
<g class="fig-accent-2">${TB(415, 34, 18, 'Endotoxin')}</g>
${CELL(50, 80, 110, 70)}
<circle cx="90" cy="115" r="18" fill="none" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent">
<defs>${ARROW('arr-bac-tox-b')}</defs>
<line x1="160" y1="105" x2="184" y2="92" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bac-tox-b)"/>
<line x1="162" y1="118" x2="190" y2="118" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bac-tox-b)"/>
<line x1="160" y1="130" x2="184" y2="144" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bac-tox-b)"/>
<circle cx="200" cy="84" r="6" fill="currentColor"/><circle cx="208" cy="118" r="6" fill="currentColor"/><circle cx="200" cy="152" r="6" fill="currentColor"/><circle cx="226" cy="100" r="6" fill="currentColor"/><circle cx="230" cy="136" r="6" fill="currentColor"/>
</g>
${TM(145, 172, 13, 'secreted PROTEIN from a LIVING cell')}
${TM(145, 190, 13, 'Gram-positive or Gram-negative')}
<g class="fig-accent-2">
<rect x="320" y="80" width="110" height="70" rx="35" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 5"/>
<path d="M340 86 l -4 -9 M360 80 l -2 -9 M380 79 l 0 -9 M400 80 l 2 -9 M420 86 l 4 -9 M340 144 l -4 9 M360 150 l -2 9 M380 151 l 0 9 M400 150 l 2 9" stroke="currentColor" stroke-width="2.5"/>
<path d="M455 92 l 6 -8 M468 112 l 9 -3 M460 136 l 8 5 M486 96 l 6 -8 M494 128 l 9 2" stroke="currentColor" stroke-width="2.5"/>
<circle cx="461" cy="84" r="3" fill="currentColor"/><circle cx="477" cy="109" r="3" fill="currentColor"/><circle cx="468" cy="141" r="3" fill="currentColor"/><circle cx="492" cy="88" r="3" fill="currentColor"/><circle cx="503" cy="130" r="3" fill="currentColor"/>
</g>
<line x1="436" y1="115" x2="448" y2="115" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bac-tox)"/>
${TM(415, 172, 13, 'LPS (lipid A) in the OUTER MEMBRANE')}
${TM(415, 190, 13, 'released when the cell LYSES · Gram− only')}
${ROW(222, 'POTENCY', 'extreme — nanogram doses', 'weaker; mass release → septic shock')}
${ROW(250, 'HEAT', 'usually labile', 'stable — boiling does not destroy it')}
${ROW(278, 'ANTIGENIC', 'highly → TOXOID vaccines', 'poorly — no toxoid possible')}
${ROW(306, 'GENES', 'plasmid or prophage', 'chromosomal (LPS synthesis)')}
${ROW(334, 'RELEASE', 'active secretion, living cell', 'mainly on lysis (incl. antibiotics)')}
<g class="fig-accent">${TB(145, 380, 13, 'toxoid = formalin-killed exotoxin')}${TM(145, 398, 12, '(tetanus, diphtheria vaccines)')}</g>
<g class="fig-accent-2">${TB(415, 380, 13, 'antibiotic lysis → LPS surge')}${TM(415, 398, 12, '→ septic shock')}</g>
<g class="fig-muted">${TM(280, 430, 12, 'exotoxin genes on plasmids / prophages spread horizontally (Part 3)')}</g>
</svg>`

/* 9 — The A-B toxin and three catalytic strategies (lead, 1000×460) */
const MINI = (x: number, label: string) =>
  `<rect x="${x}" y="204" width="44" height="26" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>${TM(x + 22, 222, 11, label)}`
const abToxinSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bac-ab')}</defs>
<g class="fig-muted">
<line x1="310" y1="36" x2="310" y2="410" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="550" y1="36" x2="550" y2="410" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
<line x1="785" y1="36" x2="785" y2="410" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/>
</g>
${TB(165, 50, 18, 'A-B toxin: two parts')}
<g class="fig-accent-2">
<defs>${ARROW('arr-bac-ab-r')}</defs>
<circle cx="150" cy="130" r="18" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
${TB(150, 136, 16, 'A')}
${T(176, 134, 14, 'A = active enzyme')}
<line x1="150" y1="256" x2="150" y2="314" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#arr-bac-ab-r)"/>
<circle cx="150" cy="334" r="14" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5"/>
${TB(150, 339, 13, 'A')}
</g>
<g class="fig-accent">
<rect x="105" y="160" width="90" height="36" rx="10" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2.5"/>
${TB(150, 184, 16, 'B')}
${T(98, 182, 14, 'B = binding', 'text-anchor="end"')}
</g>
<path d="M 136 236 L 136 200 L 146 212 L 154 212 L 164 200 L 164 236" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
<g class="fig-muted">${T(200, 226, 12, 'host receptor')}</g>
<rect x="30" y="236" width="270" height="16" rx="4" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">${T(166, 274, 13, 'host cell membrane')}</g>
${TB(150, 370, 15, 'A acts INSIDE the cell')}
${TM(150, 390, 14, 'B picks the cell type; A sets the damage')}
${TB(432, 50, 18, 'ADP-ribosylation')}
${TB(432, 86, 15, 'Diphtheria toxin → EF-2')}
${TM(432, 106, 15, 'host translation stops')}
${TB(432, 146, 15, 'Cholera toxin → Gₛ locked ON')}
${TM(432, 166, 15, 'cAMP ↑ → Cl⁻ + water out')}
${TM(432, 186, 13, 'watery diarrhea, epithelium intact')}
${MINI(326, 'Gₛ·GTP')}${MINI(382, 'AC on')}${MINI(438, 'cAMP ↑')}${MINI(494, 'Cl⁻ out')}
<line x1="372" y1="217" x2="380" y2="217" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bac-ab)"/>
<line x1="428" y1="217" x2="436" y2="217" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bac-ab)"/>
<line x1="484" y1="217" x2="492" y2="217" stroke="currentColor" stroke-width="2" marker-end="url(#arr-bac-ab)"/>
${TB(667, 50, 18, 'Protease — cuts SNAREs')}
${TB(667, 86, 15, 'Tetanus → inhibitory neuron')}
${TM(667, 106, 15, 'lost inhibition → SPASTIC')}
${TB(667, 146, 15, 'Botulinum → NMJ motor neuron')}
${TM(667, 166, 15, 'no ACh release → FLACCID')}
${TM(667, 186, 13, 'same cut, different neuron')}
<circle cx="667" cy="222" r="16" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<line x1="659" y1="236" x2="655" y2="252" stroke="currentColor" stroke-width="2.5"/><line x1="675" y1="236" x2="679" y2="252" stroke="currentColor" stroke-width="2.5"/>
<rect x="585" y="252" width="164" height="8" rx="3" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>
<g class="fig-accent-2"><line x1="684" y1="236" x2="700" y2="252" stroke="currentColor" stroke-width="3"/><line x1="700" y1="236" x2="684" y2="252" stroke="currentColor" stroke-width="3"/></g>
<g class="fig-muted">${TM(667, 280, 12, 'vesicle cannot fuse — no release')}</g>
${TB(890, 50, 18, 'Superantigen')}
<rect x="800" y="90" width="80" height="50" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${TB(840, 110, 13, 'APC')}${TM(840, 128, 12, 'MHC II')}
<rect x="900" y="90" width="80" height="50" rx="10" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5"/>
${TB(940, 110, 13, 'T cell')}${TM(940, 128, 12, 'TCR')}
<g class="fig-accent-2">
<rect x="878" y="105" width="24" height="20" rx="4" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
${TB(890, 160, 13, 'TSST')}
${TB(890, 230, 15, 'up to 20% of T cells fire')}
${TB(890, 250, 15, '→ cytokine storm')}
</g>
${TM(890, 190, 15, 'crosslinks MHC II to TCR')}
${TM(890, 210, 15, 'NO antigen specificity')}
<g class="fig-accent-2">${TB(500, 440, 16, 'same enzymatic step, different cell → different disease: location decides the phenotype')}</g>
</svg>`

export const mcatBacteriaFigures: DeckFigurePlacement[] = [
  {
    at: 'What a Prokaryote Does NOT Have',
    mode: 'lead',
    figure: {
      svg: prokaryoteSvg,
      alt:
        'A rod-shaped bacterium drawn as nested rounded outlines: a dashed grey capsule outside, a thick peptidoglycan cell wall, and a thin plasma membrane inside it. In the cytoplasm a tangled loop labelled nucleoid (the single circular chromosome), two small blue circles labelled plasmids, and scattered dots for 70S ribosomes. A wavy flagellum trails from the right end; short pili stick out of the left end. Labels: capsule — polysaccharide, antiphagocytic, vaccine target; cell wall — peptidoglycan of NAG–NAM chains with D-amino-acid cross-links; pili and fimbriae — adhesion, the sex pilus starts conjugation; flagellum — a rotary motor on the proton-motive force whose rotation direction sets run versus tumble; 70S ribosomes — transcription and translation are coupled, mRNA is polycistronic; plasma membrane — no cholesterol, no organelles inside. Red footer: NOT here — nucleus, membrane-bound organelles, histones, 80S ribosomes, cholesterol.',
      caption: 'The prokaryotic cell as a map: nucleoid, plasmids and 70S ribosomes inside; wall, capsule, flagellum and pili outside — and no nucleus.',
    },
    blocks: [
      '- **Has:** nucleoid (one circular chromosome, supercoiled), **70S ribosomes**, plasmids, peptidoglycan wall',
      '- **Lacks:** nucleus, membrane-bound organelles, histones, 80S ribosomes, membrane cholesterol',
    ],
  },
  {
    at: 'The Gram Stain Divides the Bacterial World',
    mode: 'replace-table',
    figure: {
      svg: gramSvg,
      alt:
        'Two cell envelopes side by side, drawn as stacked layers above a cytoplasm. Gram-positive (stains purple, keeps crystal violet): a thick hatched peptidoglycan layer with blue teichoic acids sticking out of it, directly on the plasma membrane; no outer membrane. Gram-negative (stains pink with safranin): a thin peptidoglycan layer in the periplasm between the plasma membrane and an outer membrane that carries red LPS molecules (lipid A = endotoxin) and a blue porin channel. Below: peptidoglycan is NAG–NAM chains cross-linked by D-amino-acid peptides; lysozyme cuts the NAG–NAM bond, beta-lactams block cross-linking, vancomycin works on Gram-positives; the Gram-negative outer membrane blocks many drugs, porins let small nutrients in, lipid A causes septic shock. Footer: acid-fast Mycobacterium has a waxy mycolic-acid coat, so the Gram stain fails.',
      caption: 'Thick wall and teichoic acids versus thin wall plus an LPS outer membrane — the stain colour, drug access and endotoxin all follow from this picture.',
    },
    blocks: [
      '- **Gram+ (purple):** THICK peptidoglycan + teichoic acids, no outer membrane — vancomycin and lysozyme work',
      '- **Gram− (pink):** thin peptidoglycan in the periplasm + **outer membrane with LPS** (lipid A = endotoxin)',
      '- Peptidoglycan = NAG–NAM chains cross-linked by **D-amino-acid** peptides: lysozyme cuts, β-lactams block',
      '- Acid-fast (Mycobacterium): waxy **mycolic acids** — the Gram stain fails, use an acid-fast stain',
    ],
  },
  {
    at: 'Shapes and Arrangements',
    mode: 'lead',
    figure: {
      svg: shapesSvg,
      alt:
        'Three columns of shape glyphs. Cocci (spheres): one blue sphere, then arrangements — diplo- (a pair), strepto- (a chain of five), staphylo- (a grape-like cluster of seven). Bacilli (rods): one blue rod, then a single rod, diplo- (two end to end) and strepto- (a chain of three). Spiral forms: a thick rigid wave labelled spirillum and a tight thin corkscrew labelled spirochete (flexible). Bottom row explains arrangement by division geometry: a coccus with one dashed division plane leads by an arrow to a chain (one plane, cells stay attached, strepto-); a coccus with dashed planes in several directions leads to a cluster (random planes, staphylo-). Right: named by shape plus arrangement — Streptococcus is a chain of spheres, Staphylococcus a cluster of spheres, Bacillus a rod, Vibrio a curved rod.',
      caption: 'Three shapes, and the arrangement tells you how the cells divided: one plane makes chains, random planes make clusters.',
    },
    blocks: [
      '- **Coccus** sphere · **bacillus** rod · **spirillum / spirochete** spiral — named by shape + arrangement',
      '- One division plane → **strepto-** chains; random planes → **staphylo-** clusters; pairs = **diplo-**',
    ],
  },
  {
    at: 'The Growth Curve (Closed Culture)',
    mode: 'lead',
    figure: {
      svg: growthSvg,
      alt:
        'A graph of log viable cells against time for a closed culture, divided by dashed lines into four phases. 1 Lag: the blue curve is flat — no division yet, cells make enzymes for the new medium. 2 Log (exponential): a straight rising line — constant doubling, a straight line on a log scale whose slope is the growth rate; red note: beta-lactams need growing cells, so they are most lethal here. 3 Stationary: flat at the top — nutrients exhausted, wastes up, division equals death; red note: endospores, toxins and secondary metabolites appear. 4 Death: the line falls — exponential loss of viability. Footer: N = N₀ · 2ⁿ with n = t/g (generation time) — exponential growth is a straight line on a log axis.',
      caption: 'The closed-culture growth curve (illustrative): lag, log, stationary, death — antibiotics that need growth strike in log; spores and toxins arrive in stationary.',
    },
    blocks: [
      '- **Lag** adapt (enzymes) → **Log** constant doubling, straight on a log scale → **Stationary** → **Death**',
      '- Drugs that need growth (β-lactams) hit in **log**; **endospores and toxins** appear in **stationary**',
    ],
  },
  {
    at: 'Oxygen Relationships',
    mode: 'replace-table',
    figure: {
      svg: oxygenSvg,
      alt:
        'Five thioglycollate tubes (oxygen high at the surface, zero at the bottom) with blue dots showing where each class grows. Obligate aerobe: a band at the top only — O₂ required, catalase and SOD present. Facultative anaerobe: growth throughout but densest at the top — prefers O₂, can ferment, has catalase and SOD. Aerotolerant anaerobe: even growth top to bottom — ferments always, SOD but no catalase. Obligate anaerobe: bottom only — O₂ kills it, no SOD, no catalase. Microaerophile: a narrow band just below the surface — needs a little O₂. Footer: O₂ makes superoxide and H₂O₂, survivable only with SOD plus catalase; facultative organisms grow everywhere but densest on top because respiration beats fermentation; aerotolerant means O₂ neither helps nor harms.',
      caption: 'One tube sorts any organism: where the cells sit in the oxygen gradient tells you whether it needs, tolerates or dies from O₂.',
    },
    blocks: [
      '- **Aerobe** top only · **facultative** everywhere, densest at top · **aerotolerant** even · **anaerobe** bottom',
      '- **Microaerophile:** a narrow band just below the surface — needs O₂, but only a little',
      '- O₂ → superoxide + peroxide; survival needs **superoxide dismutase + catalase** — obligate anaerobes lack both',
      '- Aerotolerant anaerobes ferment regardless of O₂ (SOD, usually no catalase)',
    ],
  },
  {
    at: 'Vertical vs Horizontal',
    mode: 'replace-table',
    figure: {
      svg: hgtSvg,
      alt:
        'Three rows, one per horizontal gene-transfer route, each with a cartoon and the experimental test. Transformation: a lysed cell (dashed outline) releases wavy naked DNA fragments that a competent recipient cell takes up and recombines into its chromosome — DNase in the medium abolishes it (red), no contact and no phage needed; Griffith and Avery. Transduction: a phage (hexagonal head, tail) injects host DNA packed in its capsid into a cell — DNase-proof, no contact, but needs a phage (red); generalized is lytic packaging of a random gene, specialized carries the genes flanking a prophage. Conjugation: a donor with a blue F plasmid joined to a recipient by a sex-pilus bar; a dashed blue arrow carries a plasmid strand across — needs cell contact so a filter blocks it (red), DNase-proof, F⁺ × F⁻ gives two F⁺ cells. Footer: vertical = binary fission (clonal), horizontal = any of these three.',
      caption: 'Three horizontal routes and the experiment that identifies each: DNase kills transformation, a filter stops conjugation, only transduction needs a phage.',
    },
    blocks: [
      '- **Transformation:** naked DNA taken up by competent cells — abolished by **DNase**; no contact, no phage',
      '- **Transduction:** DNA inside a phage capsid — DNase-proof, no contact; **needs a phage**',
      '- **Conjugation:** plasmid through a sex pilus — DNase-proof; **needs cell contact** (a filter blocks it)',
      '- Sort any experiment: DNase-sensitive → transformation · filter-blocked → conjugation · phage → transduction',
    ],
  },
  {
    at: 'Conjugation',
    mode: 'lead',
    figure: {
      svg: conjugationSvg,
      alt:
        'Three panels, each a donor and a recipient cell joined by a short pilus bar. F⁺ × F⁻: the donor holds a chromosome loop and a small blue F plasmid; a dashed blue arrow carries one F strand across the pilus and a dashed circle forms in the recipient; both synthesize the partner strand, so both end up F⁺ (red). A filter between cells stops everything. Hfr × F⁻: F (blue arc) sits inside the donor chromosome, which carries genes a, b, c; the arrow transfers chromosomal genes in map order (a → b → c …); a red cross marks where the bridge breaks, so the recipient gets a and b but stays F⁻ (red); interrupted mating turns entry time into map position — the first chromosome maps. F′ and R plasmids: imprecise excision of an integrated F makes a blue F′ plasmid carrying a black arc of neighbouring chromosomal genes, which crosses to the recipient (like specialized transduction); red note: R plasmids use the same machinery to spread multidrug resistance across species. Footer: same machinery, three outcomes — F⁺ spreads F, Hfr maps the chromosome, F′ and R plasmids move genes.',
      caption: 'One pilus, three outcomes: F⁺ × F⁻ makes two F⁺ cells, an Hfr donor sends chromosomal genes in map order but rarely F itself, and F′ or R plasmids carry extra genes along.',
    },
    blocks: [
      '- **F⁺ × F⁻:** one strand of F crosses the sex pilus, both copy the partner strand → **both F⁺**',
      '- **Hfr:** integrated F drags chromosomal genes in **map order**; bridge breaks early → recipient stays F⁻',
    ],
  },
  {
    at: 'Exotoxin vs Endotoxin',
    mode: 'replace-table',
    figure: {
      svg: toxinSvg,
      alt:
        'Two columns. Exotoxin (blue): a living cell with arrows pushing out blue protein dots — a secreted protein from a living Gram-positive or Gram-negative cell. Endotoxin (red): a Gram-negative cell drawn with a dashed, lysing outline studded with red LPS molecules, with LPS fragments flying off — LPS (lipid A) of the outer membrane, released when the cell lyses, Gram-negative only. A five-row grid compares them: potency — extreme, nanogram doses versus weaker but a mass release causes septic shock; heat — usually labile versus stable, boiling does not destroy it; antigenicity — highly antigenic, toxoid vaccines possible, versus poorly antigenic, no toxoid; genes — plasmid or prophage versus chromosomal LPS synthesis; release — active secretion by living cells versus mainly on lysis, including antibiotic-induced lysis. Bottom: toxoid = formalin-killed exotoxin (tetanus, diphtheria vaccines); antibiotic lysis → LPS surge → septic shock; exotoxin genes on plasmids and prophages spread horizontally.',
      caption: 'Exotoxin is a secreted protein you can vaccinate against; endotoxin is the LPS of the Gram-negative outer membrane that floods out when cells lyse.',
    },
    blocks: [
      '- **Exotoxin:** secreted **protein** (Gram+ or Gram−), ng-potent, heat-labile, antigenic → **toxoid vaccines**',
      '- **Endotoxin:** **LPS (lipid A)** of the Gram− outer membrane, released on **lysis**, heat-stable, no toxoid',
      '- Exotoxin genes ride plasmids and prophages (they spread); LPS genes are chromosomal',
      '- Massive LPS release — including antibiotic-induced lysis — → **septic shock**',
    ],
  },
  {
    at: 'The A-B Toxin Architecture',
    mode: 'lead',
    figure: {
      svg: abToxinSvg,
      alt:
        'Left: an A-B toxin on a host cell membrane — a blue B (binding) subunit docked on a cup-shaped host receptor with a red A (active enzyme) subunit riding on top; a dashed red arrow carries A through the membrane into the cell, where it acts; B picks the cell type, A sets the damage. Three strategy columns. ADP-ribosylation: diphtheria toxin modifies EF-2 so host translation stops; cholera toxin locks Gₛ on, so cAMP rises and chloride and water leave the cell (watery diarrhea with an intact epithelium) — a mini chain Gₛ·GTP → AC on → cAMP up → Cl⁻ out. Protease that cuts SNAREs: tetanus acts on inhibitory neurons, lost inhibition gives spastic paralysis; botulinum acts at the neuromuscular junction, no acetylcholine release gives flaccid paralysis — same cut, different neuron; a vesicle sits above a membrane with its SNARE tether cut by a red X, so it cannot fuse. Superantigen: a red TSST block bridges MHC II on an APC to the TCR on a T cell with no antigen specificity, firing up to 20% of T cells — cytokine storm. Red footer: same enzymatic step, different cell → different disease; location decides the phenotype.',
      caption: 'A-B toxins: B picks the door, A does the damage — three catalytic strategies and the clinical pictures they produce.',
    },
    blocks: [
      '- **B** binds a host receptor and delivers **A**, an intracellular enzyme — B picks the cell, A the damage',
      '- **ADP-ribosylation** (diphtheria, cholera) · **SNARE protease** (tetanus, botulinum) · **superantigen**',
    ],
  },
]
