import type { DeckFigurePlacement } from './index'

/**
 * Antimicrobials & Resistance (MCAT B/B) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing is ours, drawn from the concept: one bacterial cell with the
 * six drug targets pinned and the human counterpart beside each, two growth
 * curves plus the lesson's own MIC/MBC dilution series, the β-lactam vs
 * vancomycin pair at the D-Ala-D-Ala terminus, the 30S decoding site and the
 * 50S elongation cycle with drugs pinned to steps (the ribosome-schematic
 * gallery lives in the Translation deck and is not repeated here), the folate
 * pathway with its two sequential blocks, three nucleic-acid "machines", the
 * selectivity-margin ladder, four resistance-strategy panels and the
 * selection + horizontal-transfer picture. No textbook, prep-company or AAMC
 * figure was copied. Numbers drawn are only the lesson's own (70S = 30S + 50S,
 * 80S = 40S + 60S, MIC 4 / MBC 32 µg/mL from its worked example, ~1000-fold
 * VRE affinity loss, 99.9 % killed in 4 h). Molecules are labelled boxes and
 * discs — no structural formulas.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so every
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-am-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A numbered step badge: filled disc, digit in the figure background colour. */
const NUM = (x: number, y: number, n: string, r = 12) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/><text x="${x}" y="${y + 5}" font-size="${r + 3}" font-weight="700" text-anchor="middle" class="fig-bg">${n}</text>`

/** Text helper: optional anchor, bold, and a theme class (wrapped in a <g>). */
const TX = (x: number, y: number, fs: number, txt: string, o: { a?: 'middle' | 'end'; b?: boolean; cls?: string } = {}) => {
  const t = `<text x="${x}" y="${y}" font-size="${fs}"${o.b ? ' font-weight="700"' : ''}${o.a ? ` text-anchor="${o.a}"` : ''} fill="currentColor">${txt}</text>`
  return o.cls ? `<g class="${o.cls}">${t}</g>` : t
}

/** Rounded labelled box centred on (cx, cy). */
const BOX = (cx: number, cy: number, w: number, h: number, label: string, fs = 16, op = 0.12, bold = true) =>
  `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="${Math.min(10, h / 3)}" fill="currentColor" fill-opacity="${op}" stroke="currentColor" stroke-width="2"/>` +
  `<text x="${cx}" y="${cy + fs * 0.36}" font-size="${fs}"${bold ? ' font-weight="700"' : ''} text-anchor="middle" fill="currentColor">${label}</text>`

/** A plain straight arrow (marker id supplied so it can live in a coloured group). */
const ARR = (x1: number, y1: number, x2: number, y2: number, id: string, w = 2.5, dash = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''} marker-end="url(#${id})"/>`

/** A red "blocked" bar across a point (drug stops this step). */
const BLOCK = (x: number, y: number, h = 26) => `<g class="fig-accent-2"><line x1="${x}" y1="${y - h / 2}" x2="${x}" y2="${y + h / 2}" stroke="currentColor" stroke-width="4"/></g>`

/** A tiny 70S ribosome glyph: large ellipse over small. */
const RIBO = (cx: number, cy: number, s = 1) =>
  `<ellipse cx="${cx}" cy="${cy - 8 * s}" rx="${22 * s}" ry="${12 * s}" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>` +
  `<ellipse cx="${cx}" cy="${cy + 8 * s}" rx="${18 * s}" ry="${7 * s}" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>`

/* ───────────────────────── 1 — One bacterial cell, six targets, the human counterpart beside each (lead, 1000×460) ───────────────────────── */

const mapRow = (y: number, n: string, target: string, drugs: string, human: string, human2: string, warn: boolean) =>
  NUM(380, y - 6, n) +
  TX(400, y - 8, 15, target, { b: true }) +
  TX(400, y + 12, 13, drugs, { cls: 'fig-accent' }) +
  TX(730, y - 8, 14, human, warn ? { b: true, cls: 'fig-accent-2' } : { b: true }) +
  (human2 ? TX(730, y + 12, 12, human2, { cls: warn ? 'fig-accent-2' : 'fig-muted' }) : '')
const targetMapSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-am-map')}</defs>
<rect x="40" y="80" width="300" height="330" rx="70" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="12" stroke-opacity="0.45"/>
<g class="fig-muted"><rect x="56" y="96" width="268" height="298" rx="58" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 4"/></g>
${TX(190, 60, 15, 'one bacterial cell', { a: 'middle', cls: 'fig-muted' })}
${NUM(200, 80, '1')}
${NUM(200, 394, '6')}
${RIBO(120, 168)}${RIBO(178, 190, 0.85)}${NUM(222, 152, '2')}
${TX(120, 206, 11, '70S', { a: 'middle', b: true })}
${BOX(100, 258, 52, 26, 'PABA', 12, 0.1)}${ARR(128, 258, 150, 258, 'arr-am-map', 2)}${BOX(176, 258, 48, 26, 'DHF', 12, 0.1)}${ARR(202, 258, 224, 258, 'arr-am-map', 2)}${BOX(250, 258, 48, 26, 'THF', 12, 0.1)}
${NUM(292, 240, '3')}
<path d="M72 340 q 20 -14 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0" fill="none" stroke="currentColor" stroke-width="2.5"/>
<circle cx="132" cy="340" r="13" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>${TX(132, 366, 10, 'gyrase', { a: 'middle', cls: 'fig-muted' })}
${NUM(132, 312, '4')}
${BOX(250, 326, 62, 24, 'RNA pol', 11, 0.2)}
<line x1="268" y1="314" x2="296" y2="296" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>
${NUM(300, 350, '5')}
${TX(400, 56, 14, 'bacterial target → drug classes', { b: true, cls: 'fig-muted' })}
${TX(730, 56, 14, 'human counterpart', { b: true, cls: 'fig-muted' })}
${mapRow(112, '1', 'Peptidoglycan cell wall', 'β-lactams · vancomycin', 'none — no wall at all', 'the cleanest selectivity', false)}
${mapRow(176, '2', '70S ribosome (30S + 50S)', 'aminoglycosides · tetracyclines · macrolides', '80S (40S + 60S)', 'but mitochondria are 70S-like ⚠', false)}
${mapRow(240, '3', 'Folate SYNTHESIS (PABA → THF)', 'sulfonamides · trimethoprim', 'absorbs dietary folate', 'no pathway to poison', false)}
${mapRow(304, '4', 'DNA gyrase / topoisomerase IV', 'fluoroquinolones', 'different type II topoisomerases', '', false)}
${mapRow(368, '5', 'Bacterial RNA polymerase', 'rifampin', 'distinct eukaryotic RNA pols', '', false)}
${mapRow(432, '6', 'Membrane (LPS)', 'polymyxins', 'membranes are universal chemistry', 'poor selectivity → nephrotoxic', true)}
</svg>`

/* ───────────────────────── 2 — Cidal vs static curves, the lesson's MIC/MBC tubes, a disk-diffusion zone (lead, 1000×460) ───────────────────────── */

const CONCS = ['32', '16', '8', '4', '2', '1', '0.5', '0.25']
const tubeX = (i: number) => 560 + i * 52
const TUBE = (i: number) =>
  `<rect x="${tubeX(i) - 16}" y="110" width="32" height="70" rx="8" fill="currentColor" fill-opacity="${i < 4 ? 0.05 : 0.35}" stroke="currentColor" stroke-width="2"/>` +
  TX(tubeX(i), 198, 12, CONCS[i], { a: 'middle', b: true })
const PLATE = (i: number) => `<circle cx="${tubeX(i)}" cy="252" r="12" fill="currentColor" fill-opacity="${i === 0 ? 0.05 : 0.5}" stroke="currentColor" stroke-width="2"/>`
const vocabSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-am-voc')}</defs>
<line x1="80" y1="80" x2="80" y2="300" stroke="currentColor" stroke-width="2"/>
${ARR(80, 300, 414, 300, 'arr-am-voc', 2)}
${TX(84, 72, 12, 'live bacteria (log)', { cls: 'fig-muted' })}${TX(436, 322, 12, 'time →', { a: 'end', cls: 'fig-muted' })}
<g class="fig-muted"><line x1="180" y1="92" x2="180" y2="300" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>${TX(186, 102, 12, 'drug added')}</g>
<path d="M80 282 C 140 276, 190 262, 230 230 S 330 140, 420 112" fill="none" stroke="currentColor" stroke-width="3"/>
${TX(426, 116, 13, 'no drug', { b: true })}
<g class="fig-accent"><path d="M80 282 C 130 276, 160 268, 180 262 L 420 258" fill="none" stroke="currentColor" stroke-width="3"/>${TX(426, 262, 13, 'static', { b: true })}</g>
<g class="fig-accent-2"><path d="M80 282 C 130 276, 160 268, 180 262 C 230 272, 290 290, 420 297" fill="none" stroke="currentColor" stroke-width="3"/>${TX(426, 301, 13, 'cidal', { b: true })}</g>
${TX(60, 352, 13, 'bacteriostatic: halts growth — phagocytes finish the job', { b: true, cls: 'fig-accent' })}
${TX(60, 370, 12, 'tetracyclines · macrolides · sulfonamides; not enough if neutropenic', { cls: 'fig-muted' })}
${TX(60, 398, 13, "bactericidal: kills — needed when the host can't help", { b: true, cls: 'fig-accent-2' })}
${TX(60, 416, 12, 'β-lactams · vancomycin · aminoglycosides · fluoroquinolones', { cls: 'fig-muted' })}
<g class="fig-muted"><line x1="490" y1="60" x2="490" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
${TX(530, 66, 15, 'MIC vs MBC — a two-fold dilution series', { b: true })}
${TX(638, 100, 11, 'clear', { a: 'middle', cls: 'fig-muted' })}${TX(846, 100, 11, 'turbid (growth)', { a: 'middle', cls: 'fig-muted' })}
${CONCS.map((_, i) => TUBE(i)).join('')}${TX(950, 198, 12, 'µg/mL', { cls: 'fig-muted' })}
${TX(716, 222, 13, 'MIC = 4', { a: 'middle', b: true, cls: 'fig-accent' })}
${[0, 1, 2, 3].map(PLATE).join('')}${TX(760, 256, 12, 'subcultured on drug-free agar', { cls: 'fig-muted' })}
${TX(560, 284, 13, 'MBC = 32', { a: 'middle', b: true, cls: 'fig-accent-2' })}
${TX(530, 312, 12, 'MIC = lowest conc. with no visible growth (clear tube)')}
${TX(530, 330, 12, 'MBC = lowest conc. that kills — nothing regrows')}
${TX(530, 348, 12, 'MBC ≫ MIC (8× here) → essentially bacteriostatic', { cls: 'fig-accent-2' })}
<circle cx="585" cy="405" r="42" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<circle class="fig-bg" cx="585" cy="405" r="26" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
<circle cx="585" cy="405" r="7" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
${TX(645, 396, 13, 'disk diffusion', { b: true })}
${TX(645, 414, 12, 'clear zone of inhibition around the drug disk')}
${TX(645, 432, 12, 'larger zone = more susceptible organism')}
</svg>`

/* ───────────────────────── 3 — Stop the cross-link two ways: poison the enzyme (β-lactam) or cap the substrate (vancomycin) (lead, 1000×460) ───────────────────────── */

const BURST = (cx: number, cy: number) => {
  const pts: string[] = []
  for (let i = 0; i < 24; i++) {
    const r = i % 2 ? 20 : 30
    const a = (i / 24) * Math.PI * 2
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`)
  }
  return `<polygon points="${pts.join(' ')}" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>`
}
const wallSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-am-wall')}</defs>
${TX(40, 40, 16, 'β-lactams — poison the enzyme', { b: true })}
${TX(120, 82, 11, 'wall precursor terminus', { a: 'middle', cls: 'fig-muted' })}
${BOX(120, 110, 120, 34, 'D-Ala-D-Ala', 13, 0.1)}
${TX(200, 115, 16, '≈', { a: 'middle', b: true })}
<g class="fig-accent-2">${BOX(275, 110, 110, 34, 'β-lactam ring', 12, 0.2)}${TX(275, 82, 11, 'structural mimic', { a: 'middle' })}</g>
${ARR(332, 110, 368, 110, 'arr-am-wall')}
${BOX(420, 110, 96, 40, 'PBP', 14, 0.12)}${TX(420, 146, 11, 'transpeptidase', { a: 'middle', cls: 'fig-muted' })}
${TX(260, 174, 12, 'PBP attacks the strained ring → acylated for good (irreversible)', { a: 'middle', cls: 'fig-accent-2' })}
${BOX(120, 218, 150, 38, 'cross-linking stops', 12, 0.1)}
${ARR(197, 218, 220, 218, 'arr-am-wall')}
${BOX(312, 218, 176, 38, 'wall still built, autolysins cut', 11, 0.1)}
${ARR(402, 218, 424, 218, 'arr-am-wall')}
<g class="fig-accent-2">${BURST(456, 218)}${TX(456, 223, 12, 'LYSIS', { a: 'middle', b: true })}</g>
${TX(60, 282, 12, '• bactericidal — but only vs ACTIVELY growing cells building wall')}
${TX(60, 304, 12, '• no peptidoglycan (Mycoplasma) → no target at all')}
${TX(60, 326, 12, '• gram-negatives: the drug must first pass porins in the outer membrane')}
${TX(60, 358, 12, 'penicillins · cephalosporins · carbapenems · monobactams share the ring', { cls: 'fig-muted' })}
${TX(60, 384, 12, 'a static partner (tetracycline) halts growth → antagonism, not synergy', { cls: 'fig-accent-2' })}
<g class="fig-muted"><line x1="500" y1="24" x2="500" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
${TX(520, 40, 16, 'vancomycin — cap the substrate', { b: true })}
<g class="fig-accent"><circle cx="600" cy="74" r="22" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>${TX(600, 78, 10, 'vanco', { a: 'middle', b: true })}${TX(632, 70, 11, 'large glycopeptide')}</g>
${BOX(600, 110, 120, 34, 'D-Ala-D-Ala', 13, 0.1)}
<g class="fig-muted"><defs>${ARROW('arr-am-wall-m')}</defs>${ARR(662, 110, 690, 110, 'arr-am-wall-m', 2, '4 3')}</g>
${BLOCK(700, 110)}
${BOX(760, 110, 96, 40, 'PBP', 14, 0.12)}${TX(760, 146, 11, 'transpeptidase', { a: 'middle', cls: 'fig-muted' })}
${TX(740, 174, 12, 'substrate capped — no transglycosylation, no transpeptidation', { a: 'middle', cls: 'fig-accent-2' })}
${TX(540, 222, 12, "• substrate, not enzyme → β-lactamases can't touch it: MRSA drug")}
${TX(540, 244, 12, '• too bulky for gram-negative porins → gram-positive only')}
${TX(690, 292, 11, 'VRE swaps the terminus', { a: 'middle', cls: 'fig-muted' })}
${BOX(600, 312, 120, 34, 'D-Ala-D-Ala', 13, 0.1)}
${ARR(664, 312, 716, 312, 'arr-am-wall')}
<g class="fig-accent-2">${BOX(780, 312, 120, 34, 'D-Ala-D-Lac', 13, 0.2)}</g>
${TX(700, 354, 12, 'one hydrogen bond lost → binding affinity ↓ ~1000-fold', { a: 'middle', cls: 'fig-accent-2' })}
${TX(700, 374, 12, 'resistance by altering the target (Part 4)', { a: 'middle' })}
${TX(500, 432, 13, 'the same cross-link, stopped two ways: hit the enzyme (β-lactam) or cap its substrate (vancomycin)', { a: 'middle', b: true })}
</svg>`

/* ───────────────────────── 4 — 30S drugs: misreading makes aminoglycosides cidal, an A-site block keeps tetracycline static (replace-table, 560×440) ───────────────────────── */

const thirtySvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-am-30s')}</defs>
${TX(280, 30, 14, 'bacteria 70S (30S + 50S) ≠ our cytosol 80S (40S + 60S)', { a: 'middle', b: true })}
${TX(280, 50, 11, 'caveat: mitochondrial ribosomes are 70S-like → aminoglycoside hearing loss', { a: 'middle', cls: 'fig-accent-2' })}
<g class="fig-muted"><line x1="20" y1="64" x2="540" y2="64" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/><line x1="300" y1="72" x2="300" y2="396" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 5"/></g>
${TX(20, 90, 14, 'Aminoglycosides', { b: true })}${TX(20, 106, 11, 'gentamicin · streptomycin', { cls: 'fig-muted' })}
<ellipse cx="80" cy="160" rx="58" ry="22" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>${TX(60, 165, 12, '30S', { a: 'middle', b: true })}
<g class="fig-accent"><circle cx="112" cy="152" r="11" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>${TX(112, 156, 9, 'AG', { a: 'middle', b: true })}</g>
${TX(146, 142, 10, 'binds irreversibly', { cls: 'fig-accent-2' })}
${ARR(80, 183, 80, 196, 'arr-am-30s', 2)}
${BOX(130, 214, 170, 30, 'proofreading site distorted', 11, 0.1, false)}
${ARR(130, 229, 130, 242, 'arr-am-30s', 2)}
<g class="fig-accent-2">${BOX(130, 260, 170, 30, 'MISREADING → junk protein', 11, 0.18)}</g>
${ARR(130, 275, 130, 288, 'arr-am-30s', 2)}
${BOX(130, 306, 170, 30, 'misfolded membrane proteins leak', 10, 0.1, false)}
<g class="fig-accent"><defs>${ARROW('arr-am-30s-b')}</defs><path d="M216 306 L 244 306 L 244 160 L 148 160" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#arr-am-30s-b)"/>${TX(248, 226, 10, 'more')}${TX(248, 238, 10, 'drug in')}</g>
${TX(20, 346, 12, 'BACTERICIDAL — the odd class out', { b: true, cls: 'fig-accent-2' })}
${TX(20, 366, 11, 'needs O₂-dependent uptake → useless vs anaerobes')}
${TX(20, 384, 11, '+ β-lactam = synergy (wall holes let it flood in)')}
${TX(316, 90, 14, 'Tetracyclines', { b: true })}${TX(316, 106, 11, 'doxycycline', { cls: 'fig-muted' })}
${RIBO(400, 182, 1.6)}
${ARR(346, 198, 462, 198, 'arr-am-30s', 2)}
<rect x="404" y="164" width="26" height="40" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>${TX(417, 158, 11, 'A', { a: 'middle', b: true })}
<g class="fig-accent"><circle cx="417" cy="184" r="9" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>${TX(417, 188, 8, 'Tc', { a: 'middle', b: true })}</g>
<circle cx="512" cy="150" r="9" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>${TX(512, 154, 8, 'aa', { a: 'middle', b: true })}
<line x1="512" y1="159" x2="512" y2="184" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted"><defs>${ARROW('arr-am-30s-m')}</defs>${ARR(500, 184, 474, 184, 'arr-am-30s-m', 2, '3 3')}</g>
${BLOCK(458, 184, 24)}
${TX(316, 250, 12, 'blocks the A site', { b: true })}
${TX(316, 268, 11, 'no aminoacyl-tRNA delivery →')}
${TX(316, 284, 11, 'the chain simply stops growing;')}
${TX(316, 300, 11, 'existing processes untouched')}
${TX(316, 330, 12, 'BACTERIOSTATIC', { b: true, cls: 'fig-accent' })}
${TX(316, 352, 11, 'resistance: tetracycline efflux pumps', { cls: 'fig-muted' })}
${TX(316, 368, 11, '(Part 4)', { cls: 'fig-muted' })}
${TX(280, 414, 11, 'ribosome inhibitors are usually static —', { a: 'middle', b: true })}
${TX(280, 430, 11, 'misreading makes aminoglycosides the cidal exception', { a: 'middle', b: true })}
</svg>`

/* ───────────────────────── 5 — 50S drugs pinned to the elongation cycle: deliver → bond → move (replace-table, 560×440) ───────────────────────── */

const fiftySvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-am-50s')}</defs>
${BOX(60, 100, 100, 36, 'INITIATE', 12, 0.1)}
${ARR(112, 100, 150, 100, 'arr-am-50s')}${BLOCK(131, 100)}
${TX(6, 50, 12, 'linezolid', { b: true, cls: 'fig-accent-2' })}${TX(6, 66, 11, 'blocks initiation (50S)')}
${BOX(210, 100, 110, 36, 'DELIVER', 12, 0.1)}
${TX(322, 150, 11, 'tetracycline (30S)', { cls: 'fig-muted' })}${TX(322, 166, 11, 'blocks the A site', { cls: 'fig-muted' })}
<path d="M281 129 A100 100 0 0 1 307 226" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-am-50s)"/>
<path d="M260 287 A100 100 0 0 1 160 287" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-am-50s)"/>
<path d="M113 226 A100 100 0 0 1 139 129" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-am-50s)"/>
${BOX(297, 250, 110, 36, 'BOND', 12, 0.1)}${BLOCK(356, 250)}
${BOX(123, 250, 110, 36, 'MOVE', 12, 0.1)}${BLOCK(64, 250)}
${TX(210, 212, 11, 'one codon', { a: 'middle', cls: 'fig-muted' })}
${TX(20, 318, 12, 'macrolides · clindamycin', { b: true, cls: 'fig-accent-2' })}
${TX(20, 334, 11, 'plug the exit tunnel → no translocation')}
${TX(20, 350, 11, 'erythromycin · azithromycin', { cls: 'fig-muted' })}
${TX(300, 318, 12, 'chloramphenicol', { b: true, cls: 'fig-accent-2' })}
${TX(300, 334, 11, 'inhibits peptidyl transferase —')}
${TX(300, 350, 11, '23S rRNA active site, a ribozyme', { cls: 'fig-muted' })}
${TX(370, 196, 12, 'cross-resistance', { b: true })}
${TX(370, 214, 11, 'one methyl on 23S rRNA')}
${TX(370, 230, 11, 'erases the macrolide site;')}
${TX(370, 246, 11, 'clindamycin overlaps it →')}
${TX(370, 262, 11, 'resistant to BOTH', { b: true, cls: 'fig-accent-2' })}
${TX(280, 386, 12, 'peptide bonds are made by rRNA, not protein — the ribosome is a ribozyme', { a: 'middle', b: true })}
${TX(280, 406, 11, 'macrolides: first choice for wall-less / intracellular atypicals (Mycoplasma)', { a: 'middle' })}
${TX(280, 426, 11, 'all four are static: chloramphenicol · macrolides · clindamycin · linezolid', { a: 'middle', cls: 'fig-muted' })}
</svg>`

/* ───────────────────────── 6 — Folate: two sequential blocks, and the human lane with nothing to poison (lead, 1000×460) ───────────────────────── */

const DRUG_PIN = (x: number, name: string, sub: string) =>
  `<g class="fig-accent-2">${BOX(x, 86, 150, 32, name, 13, 0.2)}${TX(x, 62, 11, sub, { a: 'middle' })}<line x1="${x}" y1="102" x2="${x}" y2="131" stroke="currentColor" stroke-width="2"/></g>` + BLOCK(x, 150, 34)
const folateSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-am-fol')}</defs>
${TX(60, 28, 13, 'bacterial cell — must SYNTHESIZE tetrahydrofolate', { b: true })}
${BOX(100, 150, 90, 40, 'PABA', 15, 0.1)}
${ARR(145, 150, 285, 150, 'arr-am-fol')}${TX(215, 192, 12, 'dihydropteroate synthase', { a: 'middle', cls: 'fig-muted' })}
${BOX(330, 150, 90, 40, 'DHF', 15, 0.1)}
${ARR(375, 150, 515, 150, 'arr-am-fol')}${TX(445, 192, 12, 'dihydrofolate reductase', { a: 'middle', cls: 'fig-muted' })}
<g class="fig-accent">${BOX(560, 150, 90, 40, 'THF', 15, 0.2)}</g>
${ARR(605, 150, 700, 150, 'arr-am-fol')}${TX(652, 192, 12, 'one-carbon carrier', { a: 'middle', cls: 'fig-muted' })}
${BOX(770, 150, 140, 40, 'dTMP + purines', 13, 0.1)}
${ARR(840, 150, 885, 150, 'arr-am-fol')}
${BOX(920, 150, 70, 40, 'DNA', 14, 0.1)}
${DRUG_PIN(215, 'sulfonamides', 'PABA structural analogs — competitive')}
${DRUG_PIN(445, 'trimethoprim', 'bacterial DHFR ≫ human DHFR affinity')}
${TX(200, 216, 11, 'selectivity by ABSENCE: humans have no such enzyme', { a: 'middle' })}
${TX(470, 216, 11, 'selectivity by DEGREE: an affinity difference', { a: 'middle' })}
${TX(770, 216, 11, 'no THF → no dTMP, no purines → DNA synthesis halts', { a: 'middle', cls: 'fig-accent-2' })}
<g class="fig-muted"><rect x="40" y="238" width="920" height="70" rx="12" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>${TX(60, 262, 12, 'human cell', { b: true })}${TX(60, 280, 11, 'eats folate')}</g>
${BOX(230, 272, 130, 30, 'dietary folate', 12, 0.08, false)}
<g class="fig-muted"><defs>${ARROW('arr-am-fol-m')}</defs>${ARR(297, 272, 380, 272, 'arr-am-fol-m', 2)}${TX(338, 262, 11, 'transporter', { a: 'middle' })}</g>
${BOX(430, 272, 80, 30, 'THF', 13, 0.08)}
${TX(540, 268, 11, 'no synthesis pathway → nothing for sulfonamides to hit')}
${TX(540, 286, 11, 'trimethoprim spares human DHFR by affinity, not absence')}
${TX(60, 342, 14, 'TMP-SMX = sequential blockade', { b: true })}
${TX(60, 364, 11, 'two steps in a row blocked → synergistic; a single')}
${TX(60, 380, 11, 'mutation cannot escape both → far harder to defeat')}
${TX(560, 342, 14, 'rescue test', { b: true })}
${TX(560, 364, 11, 'thymidine + purines restore growth → the block is in the folate pathway')}
${TX(560, 380, 11, 'excess PABA rescues only a sulfonamide block, not a downstream DHFR block')}
${TX(500, 430, 13, 'whatever restores growth lies DOWNSTREAM of the block; whatever fails to rescue is upstream', { a: 'middle', b: true })}
</svg>`

/* ───────────────────────── 7 — Three nucleic-acid machines: trapped gyrase, blocked RNA pol, a prodrug only anaerobes activate (lead, 1000×460) ───────────────────────── */

const machinesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-am-mach')}</defs>
${TX(50, 70, 15, 'Fluoroquinolones', { b: true })}${TX(50, 88, 11, 'ciprofloxacin', { cls: 'fig-muted' })}
<line x1="60" y1="120" x2="320" y2="120" stroke="currentColor" stroke-width="2.5"/><line x1="60" y1="136" x2="320" y2="136" stroke="currentColor" stroke-width="2.5"/>
<circle cx="190" cy="128" r="22" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>${TX(190, 160, 11, 'gyrase', { a: 'middle', cls: 'fig-muted' })}
<g class="fig-accent-2"><line x1="178" y1="112" x2="178" y2="144" stroke="currentColor" stroke-width="3"/><line x1="202" y1="112" x2="202" y2="144" stroke="currentColor" stroke-width="3"/></g>
<g class="fig-accent"><circle cx="214" cy="106" r="9" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>${TX(214, 110, 8, 'FQ', { a: 'middle', b: true })}</g>
${TX(190, 182, 11, 'trapped mid-cut: both strands broken, never resealed', { a: 'middle', cls: 'fig-accent-2' })}
${TX(60, 206, 11, 'replication fork collides', { cls: 'fig-muted' })}
${ARR(60, 220, 150, 220, 'arr-am-mach')}
<g class="fig-accent-2">${BOX(235, 220, 160, 30, 'double-strand breaks', 11, 0.18)}</g>
${TX(190, 262, 12, 'BACTERICIDAL', { a: 'middle', b: true, cls: 'fig-accent-2' })}
${TX(50, 296, 11, 'targets: DNA gyrase (topo II) + topoisomerase IV')}
${TX(50, 314, 11, 'gyrase adds negative supercoils ahead of the fork')}
${TX(50, 332, 11, 'human type II topoisomerases: distinct structure', { cls: 'fig-muted' })}
<g class="fig-muted"><line x1="345" y1="56" x2="345" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/><line x1="655" y1="56" x2="655" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
${TX(360, 70, 15, 'Rifampin', { b: true })}${TX(360, 88, 11, 'binds bacterial RNA polymerase', { cls: 'fig-muted' })}
<line x1="370" y1="150" x2="630" y2="150" stroke="currentColor" stroke-width="2.5"/>
<rect x="395" y="142" width="54" height="16" rx="4" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5"/>${TX(422, 173, 10, 'promoter', { a: 'middle', cls: 'fig-muted' })}
${BOX(500, 130, 90, 44, 'RNA pol', 13, 0.15)}
<g class="fig-accent"><circle cx="530" cy="106" r="10" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>${TX(530, 110, 8, 'Rif', { a: 'middle', b: true })}</g>
<g class="fig-muted"><defs>${ARROW('arr-am-mach-m')}</defs>${ARR(548, 120, 606, 98, 'arr-am-mach-m', 2, '4 3')}</g>
${BLOCK(578, 109, 24)}
${TX(500, 196, 11, 'initiation of transcription blocked', { a: 'middle', cls: 'fig-accent-2' })}
${TX(360, 236, 11, 'resistance arrives fast: ONE point mutation in')}
${TX(360, 252, 11, 'the polymerase binding site destroys the pocket;')}
${TX(360, 268, 11, 'such mutants pre-exist in a large population →')}
${TX(360, 284, 11, 'monotherapy selects them within weeks')}
${TX(360, 314, 12, 'so: always COMBINATION therapy (TB)', { b: true })}
${TX(670, 70, 15, 'Metronidazole', { b: true })}${TX(670, 88, 11, 'a prodrug', { cls: 'fig-muted' })}
${TX(760, 114, 11, 'carries a nitro group', { a: 'middle', cls: 'fig-muted' })}
${BOX(760, 140, 150, 36, 'metronidazole', 12, 0.1)}
${ARR(760, 158, 760, 196, 'arr-am-mach')}${TX(772, 182, 11, 'reduced only inside anaerobes')}
<g class="fig-accent-2">${BOX(760, 216, 110, 32, 'radical', 12, 0.18)}</g>
${ARR(760, 232, 760, 262, 'arr-am-mach')}
<g class="fig-accent-2">${BOX(760, 282, 150, 32, 'DNA shredded', 12, 0.18)}</g>
${TX(760, 320, 12, 'kills anaerobes', { a: 'middle', b: true, cls: 'fig-accent-2' })}
${TX(670, 352, 11, 'aerobes &amp; human cells: no strongly reducing')}
${TX(670, 368, 11, 'conditions → never activated → spared')}
${TX(670, 392, 11, 'selectivity via ACTIVATION chemistry', { cls: 'fig-muted' })}
${TX(500, 434, 13, 'three handles: a distinct enzyme (gyrase), a distinct polymerase (rifampin), a reaction only anaerobes run', { a: 'middle', b: true })}
</svg>`

/* ───────────────────────── 8 — The four ways to beat a drug, one cell per panel (replace-table, 560×440) ───────────────────────── */

const CELL = (x: number, y: number, thick = false) =>
  `<rect x="${x}" y="${y}" width="120" height="84" rx="14" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="${thick ? 6 : 2}"${thick ? ' stroke-opacity="0.5"' : ''}/>`
const DRUG = (x: number, y: number) => `<g class="fig-accent"><circle cx="${x}" cy="${y}" r="10" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>${TX(x, y + 4, 9, 'D', { a: 'middle', b: true })}</g>`
const PANEL = (x: number, y: number, title: string, lines: string[]) =>
  TX(x + 10, y + 20, 13, title, { b: true }) + lines.map((l, i) => TX(x + 10, y + 150 + i * 16, 11, l)).join('')
const fourSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-am-four')}</defs>
${PANEL(0, 20, 'DESTROY the drug', ['β-lactamases hydrolyze the β-lactam ring;', 'aminoglycoside-modifying enzymes acetylate it', 'counter: clavulanate = suicide inhibitor of', 'β-lactamase (co-formulated with amoxicillin)'])}
${CELL(20, 52)}${DRUG(200, 94)}${ARR(186, 94, 146, 94, 'arr-am-four', 2)}
<g class="fig-accent-2">${BOX(80, 80, 92, 22, 'β-lactamase', 10, 0.2)}</g>
<circle cx="80" cy="118" r="11" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent-2"><polyline points="72,110 78,118 74,122 86,128" fill="none" stroke="currentColor" stroke-width="2"/></g>
${TX(100, 122, 9, 'cut open', { cls: 'fig-muted' })}
${PANEL(290, 20, 'ALTER the target', ['MRSA: PBP2a, a low-affinity transpeptidase', '23S rRNA methylation (macrolides)', 'RNA polymerase mutation (rifampin)', 'VRE: D-Ala-D-lactate terminus'])}
${CELL(310, 52)}${DRUG(490, 94)}${ARR(476, 94, 446, 94, 'arr-am-four', 2)}
<g class="fig-accent-2">${BOX(370, 94, 88, 30, 'altered target', 10, 0.18)}${TX(440, 78, 12, '✗', { a: 'middle', b: true })}</g>
${TX(370, 70, 9, 'drug no longer fits', { a: 'middle', cls: 'fig-muted' })}
${PANEL(0, 230, 'KEEP the drug out', ['gram-negative porin mutants: small hydrophilic', 'drugs (β-lactams) can no longer get in;', 'mycobacterial waxy wall thickens the envelope', 'shifts MANY drugs a little, not one a lot'])}
${CELL(20, 262, true)}${DRUG(200, 304)}${DRUG(214, 328)}${ARR(186, 304, 156, 304, 'arr-am-four', 2)}${BLOCK(146, 304, 22)}
<g class="fig-muted"><line x1="134" y1="282" x2="146" y2="282" stroke="currentColor" stroke-width="2"/><line x1="134" y1="290" x2="146" y2="290" stroke="currentColor" stroke-width="2"/>${TX(100, 290, 9, 'porin lost', { a: 'end' })}</g>
${PANEL(290, 230, 'THROW the drug out', ['tetracycline efflux pumps;', 'multidrug efflux in Pseudomonas', 'drug enters but never accumulates —', 'intracellular drug stays LOW'])}
${CELL(310, 262)}
<rect x="420" y="288" width="22" height="32" rx="5" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>${TX(431, 334, 9, 'pump', { a: 'middle', cls: 'fig-muted' })}
${DRUG(370, 304)}
<g class="fig-accent"><defs>${ARROW('arr-am-four-b')}</defs>${ARR(382, 304, 480, 304, 'arr-am-four-b', 2.5)}</g>
</svg>`

/* ───────────────────────── 9 — Selection of pre-existing mutants, and four horizontal routes (lead, 1000×460) ───────────────────────── */

const DOT = (x: number, y: number, cls?: string, dead = false) => {
  const c = `<circle cx="${x}" cy="${y}" r="9" fill="currentColor" fill-opacity="${dead ? 0.08 : 0.3}" stroke="currentColor" stroke-width="1.5"${dead ? ' stroke-dasharray="2 2"' : ''}/>`
  return cls ? `<g class="${cls}">${c}</g>` : c
}
const grid = (x0: number, pick: (i: number, j: number) => string) => {
  let s = ''
  for (let j = 0; j < 4; j++) for (let i = 0; i < 5; i++) s += pick(i, j).replace('CX', String(x0 + i * 26)).replace('CY', String(80 + j * 26))
  return s
}
const PLATE_DOTS = (cx: number, n: number) => {
  let s = `<circle cx="${cx}" cy="306" r="20" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="2"/>`
  for (let k = 0; k < n; k++) {
    const a = k * 2.4, r = 3 + (k * 7) % 13
    s += `<circle cx="${(cx + r * Math.cos(a)).toFixed(1)}" cy="${(306 + r * Math.sin(a)).toFixed(1)}" r="2" fill="currentColor"/>`
  }
  return s
}
const PHAGE = (x: number, y: number) =>
  `<polygon points="${x},${y - 12} ${x + 10},${y - 6} ${x + 10},${y + 6} ${x},${y + 12} ${x - 10},${y + 6} ${x - 10},${y - 6}" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>` +
  `<line x1="${x}" y1="${y + 12}" x2="${x}" y2="${y + 34}" stroke="currentColor" stroke-width="2.5"/><line x1="${x - 8}" y1="${y + 34}" x2="${x + 8}" y2="${y + 34}" stroke="currentColor" stroke-width="2.5"/>`
const spreadSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-am-spr')}</defs>
${TX(40, 44, 15, 'vertical: mutation, then selection', { b: true })}
${grid(60, (i, j) => (i === 3 && j === 1 ? DOT(0, 0, 'fig-accent-2').replace('cx="0"', 'cx="CX"').replace('cy="0"', 'cy="CY"') : DOT(0, 0).replace('cx="0"', 'cx="CX"').replace('cy="0"', 'cy="CY"')))}
${ARR(190, 120, 262, 120, 'arr-am-spr')}${TX(226, 108, 12, 'drug', { a: 'middle', b: true })}${TX(226, 142, 10, 'selection pressure', { a: 'middle', cls: 'fig-muted' })}
${grid(290, (i, j) => ((i + j) % 5 === 0 ? DOT(0, 0, 'fig-muted', true) : DOT(0, 0, 'fig-accent-2')).replace('cx="0"', 'cx="CX"').replace('cy="0"', 'cy="CY"'))}
${TX(40, 192, 11, 'before: one resistant mutant, rare')}${TX(270, 192, 11, 'after: the survivors are the mutants')}
${TX(40, 222, 11, 'the drug does NOT cause the mutation — it selects variants that pre-exist', { b: true, cls: 'fig-accent-2' })}
${TX(40, 262, 13, 'fluctuation test: parallel cultures, same selection', { b: true })}
${[0, 1, 0, 14, 2].map((n, k) => PLATE_DOTS(80 + k * 80, n)).join('')}
${TX(320, 342, 10, 'jackpot', { a: 'middle', cls: 'fig-accent-2' })}
${TX(40, 362, 11, 'counts vary wildly — "jackpots" where a mutation arose early')}
${TX(40, 378, 11, 'had exposure induced them, every culture would look alike')}
${TX(40, 400, 11, 'mutation is random and pre-adaptive; the drug only selects', { cls: 'fig-muted' })}
<g class="fig-muted"><line x1="500" y1="30" x2="500" y2="410" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"/></g>
${TX(520, 44, 15, 'horizontal: genes arrive from elsewhere', { b: true })}
<ellipse cx="562" cy="104" rx="28" ry="18" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent"><circle cx="562" cy="104" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
<g class="fig-accent-2"><path d="M556 96 A9 9 0 0 1 571 104" fill="none" stroke="currentColor" stroke-width="3"/></g>
<line x1="590" y1="104" x2="640" y2="104" stroke="currentColor" stroke-width="4" stroke-opacity="0.5"/>
<g class="fig-accent"><circle cx="615" cy="104" r="5" fill="currentColor" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5"/></g>
<ellipse cx="668" cy="104" rx="28" ry="18" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
${TX(710, 76, 12, 'conjugation — plasmid through a pilus', { b: true })}
${TX(710, 92, 11, 'R plasmid: several resistance genes +')}
${TX(710, 108, 11, 'transfer genes → one mating = multidrug')}
${TX(710, 124, 11, 'resistance, even ACROSS species', { cls: 'fig-accent-2' })}
${PHAGE(600, 172)}<ellipse cx="662" cy="196" rx="26" ry="16" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent-2"><line x1="612" y1="206" x2="648" y2="196" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 2"/></g>
${TX(710, 164, 12, 'transduction — a phage mispackages host DNA', { b: true })}
${TX(710, 180, 11, 'and injects it into another cell')}
<g class="fig-muted"><ellipse cx="570" cy="282" rx="24" ry="14" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>${TX(570, 262, 10, 'lysed', { a: 'middle' })}</g>
<g class="fig-accent-2"><line x1="596" y1="276" x2="616" y2="282" stroke="currentColor" stroke-width="2.5"/><line x1="604" y1="294" x2="624" y2="290" stroke="currentColor" stroke-width="2.5"/></g>
${ARR(620, 284, 636, 284, 'arr-am-spr', 2)}<ellipse cx="664" cy="284" rx="26" ry="16" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
${TX(710, 252, 12, 'transformation — competent cells import', { b: true })}
${TX(710, 268, 11, 'naked DNA from lysed neighbours')}
<g class="fig-accent"><circle cx="568" cy="372" r="14" fill="none" stroke="currentColor" stroke-width="2.5"/></g>
<path d="M600 372 q 12 -10 24 0 t 24 0 t 24 0 t 24 0" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2"><defs>${ARROW('arr-am-spr-r')}</defs><line x1="562" y1="358" x2="574" y2="358" stroke="currentColor" stroke-width="4"/><path d="M576 352 C 600 330, 630 334, 646 362" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arr-am-spr-r)"/><line x1="642" y1="372" x2="654" y2="372" stroke="currentColor" stroke-width="4"/></g>
${TX(568, 400, 10, 'plasmid', { a: 'middle', cls: 'fig-muted' })}${TX(648, 400, 10, 'chromosome', { a: 'middle', cls: 'fig-muted' })}
${TX(710, 340, 12, 'transposons hop between plasmids and', { b: true })}
${TX(710, 356, 11, 'chromosomes → stacked mobile gene arrays')}
${TX(500, 436, 13, 'vertical = a mutation selected within a lineage · horizontal = a gene imported, often several at once', { a: 'middle', b: true })}
</svg>`

export const mcatAntimicrobialsFigures: DeckFigurePlacement[] = [
  {
    at: 'The Central Principle: Selective Toxicity',
    mode: 'lead',
    figure: {
      svg: targetMapSvg,
      alt:
        'One bacterial cell drawn as a rounded box with a thick wall and a dashed inner membrane, with six numbered pins: 1 the peptidoglycan wall, 2 two 70S ribosomes, 3 a three-box folate pathway PABA to DHF to THF, 4 a gyrase disc on a wavy DNA strand, 5 an RNA polymerase box on the DNA, 6 the membrane. A legend lists each target with its drug classes in blue and the human counterpart beside it: wall — β-lactams and vancomycin — humans have no wall at all, the cleanest selectivity; 70S ribosome (30S + 50S) — aminoglycosides, tetracyclines, macrolides — humans use 80S (40S + 60S) but mitochondria are 70S-like; folate synthesis — sulfonamides, trimethoprim — humans absorb dietary folate, no pathway to poison; DNA gyrase and topoisomerase IV — fluoroquinolones — human type II topoisomerases are different; bacterial RNA polymerase — rifampin — eukaryotic RNA polymerases are distinct; membrane LPS — polymyxins — membranes are universal chemistry, so selectivity is poor and the drug is nephrotoxic (red).',
      caption: 'Selective toxicity as a map: every drug class hits something bacteria have and we lack, or have in a different form.',
    },
    blocks: [
      '- **Selective toxicity:** wall · 70S ribosome · folate **synthesis** · gyrase/topo IV · bacterial RNA pol — six handles',
      '- The cleaner the difference, the safer the drug: no wall (absolute) ≫ 70S vs 80S (mitochondria!) ≫ membranes (toxic)',
    ],
  },
  {
    at: 'Vocabulary the MCAT Expects',
    mode: 'lead',
    figure: {
      svg: vocabSvg,
      alt:
        "Left: illustrative growth curves of live bacteria over time with a dashed line where drug is added. Without drug the count keeps rising; a bacteriostatic drug (blue) flattens the curve, growth halted but the cells alive, so phagocytes must finish the job and the approach fails if the patient is neutropenic; a bactericidal drug (red) makes the count fall. Static examples: tetracyclines, macrolides, sulfonamides. Cidal examples: β-lactams, vancomycin, aminoglycosides, fluoroquinolones. Right: the lesson's two-fold dilution series, eight tubes from 32 down to 0.25 µg/mL; tubes at 4 and above are clear, those below are turbid, so the MIC is 4. Subculturing the clear tubes onto drug-free agar regrows heavy colonies from 16, 8 and 4 but nothing from 32, so the MBC is 32; MBC far above MIC (8×) means the drug is essentially bacteriostatic. Definitions: MIC is the lowest concentration with no visible growth, MBC the lowest that kills. Bottom right: a disk-diffusion plate — a drug disk on a bacterial lawn with a clear zone of inhibition around it; a larger zone means a more susceptible organism.",
      caption: 'Static halts, cidal kills (curves illustrative); MIC reads the clear tube, MBC reads what fails to regrow — the lesson’s own 4 vs 32 µg/mL series.',
    },
    blocks: [
      '- **Bacteriostatic** halts growth (immune system finishes) vs **bactericidal** kills — matters most when neutropenic',
      '- **MIC** = lowest conc. with no visible growth; **MBC** = lowest that kills; bigger disk-diffusion zone = more susceptible',
    ],
  },
  {
    at: 'Beta-Lactams: Suicide Substrates',
    mode: 'lead',
    figure: {
      svg: wallSvg,
      alt:
        'Two panels. Left, β-lactams poison the enzyme: the wall precursor terminus D-Ala-D-Ala is structurally mimicked by the strained β-lactam ring (red); the transpeptidase PBP attacks the ring and is acylated for good, irreversibly. Cross-linking stops while the cell still builds wall and its autolysins keep cutting, ending in a red burst labelled LYSIS. Notes: bactericidal but only against actively growing cells building wall; no peptidoglycan (Mycoplasma) means no target at all; gram-negatives make the drug pass porins first; penicillins, cephalosporins, carbapenems and monobactams share the ring; a static partner such as tetracycline halts growth and so is antagonistic. Right, vancomycin caps the substrate: a large blue glycopeptide disc sits on D-Ala-D-Ala and a red bar stops the PBP from reaching it — no transglycosylation, no transpeptidation. Because it binds the substrate not the enzyme, β-lactamases cannot touch it (the MRSA drug); too bulky for gram-negative porins, so gram-positive only. VRE swaps the terminus to D-Ala-D-Lac (red): one hydrogen bond lost, binding affinity down about 1000-fold — resistance by altering the target. Footer: the same cross-link stopped two ways, hit the enzyme or cap its substrate.',
      caption: 'One cross-link, two ways to stop it: β-lactams acylate the transpeptidase, vancomycin caps its D-Ala-D-Ala substrate.',
    },
    blocks: [
      '- **β-lactam ring** mimics D-Ala-D-Ala → PBPs irreversibly acylated → no cross-links; autolysins + osmotic pressure → **lysis**',
      '- Needs ACTIVE growth; no wall (Mycoplasma) = no target · **Vancomycin** binds the substrate itself; gram-positive only; VRE = D-Ala-D-Lac',
    ],
  },
  {
    at: '30S Drugs',
    mode: 'replace-table',
    figure: {
      svg: thirtySvg,
      alt:
        'Header: bacteria use 70S ribosomes (30S + 50S), our cytosol 80S (40S + 60S); caveat in red, mitochondrial ribosomes are 70S-like, explaining aminoglycoside hearing loss. Left, aminoglycosides (gentamicin, streptomycin): a blue drug disc binds the 30S subunit irreversibly; the proofreading site is distorted, causing misreading and junk protein (red); misfolded membrane proteins make the membrane leak, and a blue dashed loop feeds more drug back in — a feed-forward loop. Bactericidal, the odd class out; needs oxygen-dependent uptake so useless against anaerobes; with a β-lactam it is synergistic because wall holes let it flood in. Right, tetracyclines (doxycycline): a ribosome with the A site outlined; a blue drug disc sits in the A site and a red bar stops the incoming aminoacyl-tRNA — no delivery, the chain simply stops growing, existing processes untouched, bacteriostatic. Resistance: tetracycline efflux pumps (Part 4). Footer: ribosome inhibitors are usually static — misreading makes aminoglycosides the cidal exception.',
      caption: '30S: aminoglycosides corrupt decoding (misreading → cidal), tetracyclines just block the A site (static).',
    },
    blocks: [
      '- **Aminoglycosides** bind 30S irreversibly → **misreading** → junk membrane protein → **cidal**; need O₂ uptake (no anaerobes)',
      '- **Tetracyclines** block the **A site** → no aminoacyl-tRNA delivery → static',
      '- 70S vs 80S is the handle — but mitochondrial ribosomes are **70S-like** (hearing loss); aminoglycoside + β-lactam = synergy',
    ],
  },
  {
    at: '50S Drugs',
    mode: 'replace-table',
    figure: {
      svg: fiftySvg,
      alt:
        'The elongation cycle drawn as three boxes on a circle — DELIVER (aminoacyl-tRNA to the A site), BOND (peptidyl transferase), MOVE (translocation, one codon) — with an INITIATE box feeding in. Red bars mark where drugs stop it: linezolid blocks initiation complex assembly at 50S; tetracycline (30S, grey, for contrast) blocks the A site at DELIVER; chloramphenicol blocks BOND by inhibiting peptidyl transferase, the 23S rRNA active site, a ribozyme; macrolides (erythromycin, azithromycin) and clindamycin block MOVE by plugging the exit tunnel so the peptide cannot translocate. Side note on cross-resistance: one methyl group on 23S rRNA erases the macrolide binding site, and clindamycin binds an overlapping site, so the strain is resistant to both. Footer: peptide bonds are made by rRNA, not protein; macrolides are first choice for wall-less or intracellular atypicals such as Mycoplasma; all four 50S drugs are static.',
      caption: 'Learn the cycle, not the list: each 50S drug freezes one step — initiate, bond or move.',
    },
    blocks: [
      '- **Chloramphenicol** → peptidyl transferase (23S rRNA ribozyme) · **macrolides** → exit tunnel / translocation',
      '- **Clindamycin** overlaps the macrolide site · **linezolid** → initiation complex; all four are **static**',
      '- One **23S rRNA methylation** erases the site → resistance to macrolides AND clindamycin (target alteration)',
    ],
  },
  {
    at: 'Folate Antagonists: Sequential Blockade',
    mode: 'lead',
    figure: {
      svg: folateSvg,
      alt:
        'The bacterial folate pathway as boxes: PABA, via dihydropteroate synthase, to DHF, via dihydrofolate reductase, to THF (blue), the one-carbon carrier, to dTMP and purines, to DNA. Two red drug pins with red bars: sulfonamides, PABA structural analogs that competitively inhibit dihydropteroate synthase — selectivity by absence, humans have no such enzyme; trimethoprim, which binds bacterial DHFR far better than human DHFR — selectivity by degree, an affinity difference. No THF means no dTMP or purines, so DNA synthesis halts. Below, a dashed human-cell lane: dietary folate crosses a transporter straight to THF — no synthesis pathway, so nothing for sulfonamides to hit, and trimethoprim spares human DHFR by affinity, not absence. Bottom: TMP-SMX is a sequential blockade — two steps in a row blocked is synergistic and a single mutation cannot escape both; rescue test — thymidine plus purines restore growth, so the block is in the folate pathway, while excess PABA rescues a sulfonamide block only, not a downstream DHFR block. Footer: whatever restores growth lies downstream of the block.',
      caption: 'Sequential blockade: a PABA mimic upstream, a DHFR inhibitor downstream — and a human lane with no pathway to poison.',
    },
    blocks: [
      '- **Sulfonamides** = PABA analogs (enzyme humans lack) · **trimethoprim** inhibits bacterial DHFR (affinity, by degree)',
      '- **TMP-SMX** blocks two sequential steps → synergy, one mutation can’t escape; rescue by thymidine + purines, not PABA',
    ],
  },
  {
    at: 'DNA and RNA Machines',
    mode: 'lead',
    figure: {
      svg: machinesSvg,
      alt:
        'Three panels. Fluoroquinolones (ciprofloxacin): a gyrase disc sits on double-stranded DNA with both strands cut in red; a blue drug disc traps it mid-cut so the strands are never resealed; a replication fork arrow collides and produces double-strand breaks (red) — bactericidal. Targets are DNA gyrase (topo II) and topoisomerase IV; gyrase adds negative supercoils ahead of the fork; human type II topoisomerases are structurally distinct. Rifampin: an RNA polymerase box sits on DNA beside a promoter; a blue rifampin disc binds it and a red bar blocks the nascent transcript — initiation of transcription blocked. Resistance arrives fast because one point mutation in the polymerase binding site destroys the pocket, such mutants pre-exist in a large population and monotherapy selects them within weeks, so rifampin is always given in combination (TB). Metronidazole: a prodrug carrying a nitro group is reduced only inside anaerobes to a radical (red) that shreds DNA, killing anaerobes; aerobes and human cells lack the strongly reducing conditions, never activate it and are spared — selectivity via activation chemistry. Footer: three handles — a distinct enzyme, a distinct polymerase, a reaction only anaerobes run.',
      caption: 'Three machines, three handles: a trapped gyrase, a blocked polymerase, and a prodrug only anaerobic chemistry switches on.',
    },
    blocks: [
      '- **Fluoroquinolones** trap gyrase/topo IV mid-cut → double-strand breaks → **cidal** · **rifampin** blocks RNA-pol initiation',
      '- One point mutation defeats rifampin → always **combination** (TB) · **metronidazole** = prodrug reduced only in anaerobes',
    ],
  },
  {
    at: 'The Four Ways to Beat a Drug',
    mode: 'replace-table',
    figure: {
      svg: fourSvg,
      alt:
        'Four panels, each a bacterial cell with a blue drug disc. Destroy the drug: a red β-lactamase inside the cell cuts the drug open — β-lactamases hydrolyze the β-lactam ring, aminoglycoside-modifying enzymes acetylate the drug; the counter is clavulanate, a suicide inhibitor of β-lactamase co-formulated with amoxicillin. Alter the target: the drug arrives but the target inside is altered (red) and no longer fits — MRSA’s PBP2a low-affinity transpeptidase, 23S rRNA methylation against macrolides, RNA polymerase mutation against rifampin, VRE’s D-Ala-D-lactate terminus. Keep the drug out: a cell with a thick envelope and its porin lost; drugs pile up outside at a red bar — gram-negative porin mutants exclude small hydrophilic drugs such as β-lactams, the mycobacterial waxy wall thickens the envelope; this shifts many drugs a little rather than one drug a lot. Throw the drug out: an efflux pump in the membrane carries the drug straight back outside — tetracycline efflux pumps, multidrug efflux in Pseudomonas; the drug enters but never accumulates, so intracellular drug stays low. Footer: tell them apart by asking drug in? drug intact? target affinity? — each strategy breaks exactly one measurement.',
      caption: 'Destroy it, change its target, keep it out, pump it out — and each one breaks a different measurement.',
    },
    blocks: [
      '- **Destroy** (β-lactamase; counter = **clavulanate**) · **alter target** (PBP2a, 23S methylation, RNA-pol mutation, D-Ala-D-Lac)',
      '- **Keep out** (porin loss, waxy wall) · **throw out** (efflux pumps: tetracycline, Pseudomonas)',
      '- Forensics: drug in? drug intact? target affinity? — each strategy fails exactly one test',
    ],
  },
  {
    at: 'Where Resistance Genes Come From',
    mode: 'lead',
    figure: {
      svg: spreadSvg,
      alt:
        'Left, vertical: a grid of twenty cells before drug with one red resistant mutant already present; an arrow labelled drug, selection pressure, leads to the grid after, where the survivors are red mutants and the susceptible cells are faded and crossed — the drug does not cause the mutation, it selects variants that pre-exist. Below, the fluctuation test: five parallel culture plates with the same selection show wildly different colony counts, including one jackpot plate where a mutation arose early; had exposure induced mutations every culture would look alike, so mutation is random and pre-adaptive and the drug only selects. Right, horizontal, four rows: conjugation — a donor cell passes a blue plasmid along a pilus to a recipient; an R plasmid carries several resistance genes plus transfer genes, so one mating gives multidrug resistance, even across species. Transduction — a phage mispackages host DNA and injects it into another cell. Transformation — a lysed cell (dashed) leaves naked DNA fragments (red) that a competent cell imports. Transposons — a red segment hops from a plasmid circle onto a chromosome, stacking genes into mobile arrays. Footer: vertical is a mutation selected within a lineage; horizontal is a gene imported, often several at once.',
      caption: 'Drugs select, they don’t mutate (fluctuation test); plasmids, phages, naked DNA and transposons move the genes.',
    },
    blocks: [
      '- **Vertical:** mutants pre-exist; the drug is a **selection pressure** (fluctuation test “jackpots” = early random mutation)',
      '- **Horizontal:** conjugation (R plasmids → one-step multidrug, cross-species), transduction, transformation, transposons',
    ],
  },
]
