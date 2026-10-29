import type { DeckFigurePlacement } from './index'

/**
 * Thermodynamics (MCAT C/P) — figures for the in-class deck.
 * Drafted by Fable 5.1, finished 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (two reaction profiles
 * beside a coffee-cup calorimeter, an enthalpy ladder for the Hess's-law
 * worked example, a break-then-form bond-enthalpy path, particle boxes for
 * entropy, ΔG-against-T lines, the ΔG°/K/E° triangle, a phase-change
 * triangle, a heating curve, a P–T phase diagram) — no textbook,
 * prep-company or AAMC figure was copied. The only numbers drawn are the
 * lesson's own: the Hess's-law example (−393.5 / −283.0 / −110.5 kJ), the
 * spontaneity examples from its checks (±50 kJ with ±100 J/K, −100 kJ with
 * −200 J/K → 500 K), the ΔG°/K/E° worked numbers (+1.20 V, n = 2 → −231.6 kJ;
 * −17.1 kJ → K ≈ 1000) and the ice-to-steam heating-curve stages (376.2 /
 * 6,010 / 7,524 / 40,700 / 361.8 J, drawn to scale). Shapes without lesson
 * numbers (the reaction profiles, the bond-enthalpy levels, the phase
 * diagram) are illustrative and their captions say so.
 *
 * Colours: heat RELEASED / exothermic / toward solid RED (fig-accent-2);
 * heat ABSORBED / endothermic / toward gas BLUE (fig-accent); in the entropy
 * and spontaneity figures blue = ΔS > 0 or "spontaneous", red = ΔS < 0 or
 * "never"; axes, guides and glassware grey (fig-muted); equations in the
 * text colour.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-th-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A rounded box outlined in the current colour; `fillOpacity` > 0 tints it with the same colour. */
const BOX = (x: number, y: number, w: number, h: number, rx = 12, sw = 2.5, fillOpacity = 0) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"/>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A double-headed arrow (the marker is auto-start-reverse, so one marker serves both ends). */
const DARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 2.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-start="url(#${marker})" marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

/** A small numbered badge (circle + digit) in the current colour. */
const BADGE = (cx: number, cy: number, n: string) =>
  `<circle cx="${cx}" cy="${cy}" r="11" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/>${T(cx, cy + 5, 13, n, 'middle', '700')}`


/** A stroked path (curve) in the current colour. */
const CURVE = (d: string, sw = 3.5) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`

/* 1 — Exothermic vs endothermic reaction profiles beside a coffee-cup calorimeter (lead, 1000×460).
   Profiles are shape-only: high level y = 170, low level y = 290, hump peak y = 105. */
const enthalpySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<defs>${ARROW('arr-th-enth-m')}</defs>
${ARR(60, 340, 60, 80, 'arr-th-enth-m', 2)}${ARR(60, 340, 330, 340, 'arr-th-enth-m', 2)}
${ARR(380, 340, 380, 80, 'arr-th-enth-m', 2)}${ARR(380, 340, 650, 340, 'arr-th-enth-m', 2)}
${T(195, 364, 15, 'reaction progress', 'middle')}${T(515, 364, 15, 'reaction progress', 'middle')}
${LINE(150, 170, 315, 170, 1.5, true)}${LINE(290, 290, 315, 290, 1.5, true)}${LINE(470, 290, 635, 290, 1.5, true)}${LINE(610, 170, 635, 170, 1.5, true)}
${LINE(355, 40, 355, 440, 1.5)}${LINE(670, 40, 670, 440, 1.5)}
${T(195, 428, 15, 'the solution warms (ΔT &gt; 0)', 'middle')}${T(515, 428, 15, 'the solution cools (ΔT &lt; 0)', 'middle')}
</g>
${T(52, 84, 17, 'H', 'end', '700')}${T(372, 84, 17, 'H', 'end', '700')}
${CURVE('M80 170 L145 170 C170 170 172 105 192 105 C214 105 216 290 240 290 L290 290')}
${CURVE('M400 290 L465 290 C492 290 498 105 520 105 C538 105 540 170 560 170 L610 170')}
${T(112, 160, 16, 'reactants', 'middle')}${T(262, 314, 16, 'products', 'middle')}
${T(432, 314, 16, 'reactants', 'middle')}${T(585, 160, 16, 'products', 'middle')}
<g class="fig-accent-2">
<defs>${ARROW('arr-th-enth-r')}</defs>
${T(195, 60, 21, 'exothermic', 'middle', '700')}
${ARR(310, 172, 310, 286, 'arr-th-enth-r', 3.5)}
${T(300, 236, 17, 'ΔH &lt; 0', 'end', '700')}
${T(195, 402, 16, 'heat leaves the system', 'middle', '700')}
${ARR(898, 262, 930, 262, 'arr-th-enth-r', 3)}${ARR(822, 262, 790, 262, 'arr-th-enth-r', 3)}${ARR(860, 224, 860, 194, 'arr-th-enth-r', 3)}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-th-enth-b')}</defs>
${T(515, 60, 21, 'endothermic', 'middle', '700')}
${ARR(630, 288, 630, 174, 'arr-th-enth-b', 3.5)}
${T(620, 236, 17, 'ΔH &gt; 0', 'end', '700')}
${T(515, 402, 16, 'heat enters the system', 'middle', '700')}
</g>
${T(835, 60, 20, 'coffee-cup calorimeter', 'middle', '700')}
<g class="fig-muted">
<path d="M705 120 L722 320 L948 320 L965 120" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M710 170 L723 312 L947 312 L960 170 z" fill="currentColor" fill-opacity="0.14"/>
${T(835, 344, 16, 'the solution = surroundings', 'middle')}
</g>
${LINE(745, 92, 745, 284, 3)}
<g class="fig-accent-2">${DOT(745, 290, 8)}</g>
${T(745, 82, 15, 'T', 'middle', '700')}
<circle cx="860" cy="262" r="36" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
${T(860, 258, 15, 'reaction', 'middle', '700')}${T(860, 277, 14, '= system', 'middle')}
${T(835, 382, 18, 'q = mcΔT  (of the solution)', 'middle')}
${T(835, 418, 20, 'ΔH(rxn) = −q(solution)', 'middle', '700')}
</svg>`
/* 2 — Hess's law as an enthalpy ladder: the lesson's C → CO → CO₂ worked example (lead, 1000×460). y = 90 + 0.75·|ΔH| */
const hessSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<defs>${ARROW('arr-th-hess-m')}</defs>
${ARR(70, 400, 70, 60, 'arr-th-hess-m', 2)}
${T(70, 48, 15, 'H', 'middle', '700')}
${LINE(615, 40, 615, 440, 1.5)}
${T(172, 225, 14, '(1)  C + O₂ → CO₂')}
${T(548, 263, 14, '(2)  CO + ½O₂ → CO₂', 'end')}
${T(650, 400, 14, 'here: (1) + reverse of (2) = target')}
</g>
${LINE(120, 90, 360, 90, 4)}${LINE(340, 173, 580, 173, 4)}${LINE(120, 385, 580, 385, 4)}
${T(240, 78, 17, 'C(s) + O₂(g)', 'middle', '700')}
${T(470, 161, 17, 'CO(g) + ½O₂(g)', 'middle', '700')}
${T(350, 412, 17, 'CO₂(g)', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-th-hess-r')}</defs>
${ARR(160, 96, 160, 378, 'arr-th-hess-r', 3.5)}
${T(172, 250, 16, 'ΔH₁ = −393.5 kJ', 'start', '700')}
${ARR(560, 179, 560, 378, 'arr-th-hess-r', 3.5)}
${T(548, 288, 16, 'ΔH₂ = −283.0 kJ', 'end', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-th-hess-b')}</defs>
${ARR(350, 96, 350, 166, 'arr-th-hess-b', 3.5)}
${T(365, 135, 16, 'target:  ΔH = ?', 'start', '700')}
</g>
${T(650, 70, 19, 'same start, same end → same ΔH', 'start', '700')}
<g class="fig-muted">
${T(650, 98, 15, 'enthalpy is a state function: only the')}
${T(650, 120, 15, 'two levels matter, not the route between')}
</g>
${T(650, 165, 17, 'direct route = target + step (2)')}
${T(650, 193, 17, '−393.5 = ΔH + (−283.0)')}
<g class="fig-accent">${T(650, 232, 19, 'ΔH = −393.5 + 283.0 = −110.5 kJ', 'start', '700')}</g>
${T(650, 285, 16, 'the algebra behind the picture', 'start', '700')}
${T(650, 312, 15, 'reverse a reaction → flip the sign of ΔH')}
${T(650, 336, 15, 'multiply by k → multiply ΔH by k')}
${T(650, 360, 15, 'add the equations → add the ΔH values')}
</svg>`

/* 3 — Entropy as dispersal: phase, volume, dissolution, gas moles (lead, 1000×460) */
const latticeDots = (x0: number, y0: number) =>
  [0, 1, 2, 3].flatMap((i) => [0, 1, 2, 3].map((j) => DOT(x0 + 24 * i, y0 + 24 * j, 5))).join('')
const ion = (cx: number, cy: number, sign: string) =>
  `<circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/>${T(cx, cy + 4, 11, sign, 'middle', '700')}`
const molecule = (cx: number, cy: number, r: number, label: string) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>${T(cx, cy + 4, 12, label, 'middle', '700')}`
const entropySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(295, 60, 17, 'melt, then boil: more places to be', 'middle', '700')}
${BOX(40, 90, 110, 110, 8, 2)}${BOX(230, 90, 110, 110, 8, 2)}${BOX(420, 90, 110, 110, 8, 2)}
${latticeDots(59, 109)}
${[[248, 112], [275, 105], [302, 118], [325, 108], [255, 140], [282, 150], [312, 142], [330, 165], [250, 172], [278, 180], [305, 175], [295, 128]].map(([x, y]) => DOT(x, y, 5)).join('')}
${[[437, 108], [500, 100], [470, 135], [515, 160], [440, 170], [482, 188]].map(([x, y]) => DOT(x, y, 5)).join('')}
<g class="fig-muted">
${T(95, 225, 14, 'solid: locked lattice', 'middle')}${T(285, 225, 14, 'liquid: particles slide', 'middle')}${T(475, 225, 14, 'gas: free and far apart', 'middle')}
${T(655, 215, 14, '6 particles, few places', 'middle')}${T(865, 220, 14, 'same 6, many more places', 'middle')}
${T(135, 440, 14, 'NaCl(s): one ordered lattice', 'middle')}${T(365, 440, 14, 'ions spread through the water', 'middle')}
${T(625, 425, 14, '4 mol gas', 'middle')}${T(865, 425, 14, '2 mol gas: Δn(gas) = −2', 'middle')}
${LINE(570, 50, 570, 240, 1.5)}${LINE(495, 255, 495, 450, 1.5)}${LINE(30, 247, 970, 247, 1.5)}
<path d="M60 285 L60 420 L210 420 L210 285" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M290 285 L290 420 L440 420 L440 285" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="61" y="320" width="148" height="99" fill="currentColor" fill-opacity="0.1"/>
<rect x="291" y="320" width="148" height="99" fill="currentColor" fill-opacity="0.1"/>
</g>
<g class="fig-accent">
<defs>${ARROW('arr-th-ent-b')}</defs>
${ARR(158, 145, 222, 145, 'arr-th-ent-b', 3)}${T(190, 132, 14, 'melt', 'middle', '700')}
${ARR(348, 145, 412, 145, 'arr-th-ent-b', 3)}${T(380, 132, 14, 'boil', 'middle', '700')}
${T(190, 168, 13, '+ΔS', 'middle')}${T(380, 168, 13, '+ΔS', 'middle')}
${ARR(710, 140, 778, 140, 'arr-th-ent-b', 3)}${T(744, 128, 15, '+ΔS', 'middle', '700')}
${ARR(222, 352, 280, 352, 'arr-th-ent-b', 3)}${T(251, 340, 14, '+ΔS', 'middle', '700')}
</g>
${T(795, 60, 17, 'same gas, bigger volume', 'middle', '700')}
${BOX(610, 95, 90, 90, 8, 2)}${BOX(790, 85, 150, 110, 8, 2)}
${[[628, 115], [665, 108], [685, 140], [640, 150], [672, 170], [622, 172]].map(([x, y]) => DOT(x, y, 5)).join('')}
${[[808, 105], [865, 98], [925, 112], [840, 150], [900, 160], [812, 180]].map(([x, y]) => DOT(x, y, 5)).join('')}
${T(250, 272, 16, 'a solid dissolves', 'middle', '700')}
${BOX(115, 350, 42, 42, 3, 2, 0.15)}
${[[125, 360], [147, 360], [125, 382], [147, 382]].map(([x, y]) => DOT(x, y, 4)).join('')}
${ion(315, 345, '+')}${ion(350, 385, '−')}${ion(385, 340, '+')}${ion(420, 375, '−')}${ion(320, 400, '−')}${ion(400, 405, '+')}
${T(760, 272, 16, 'fewer gas molecules: N₂ + 3H₂ → 2NH₃', 'middle', '700')}
${BOX(540, 290, 170, 110, 8, 2)}${BOX(780, 290, 170, 110, 8, 2)}
${molecule(585, 322, 15, 'N₂')}${molecule(665, 322, 15, 'H₂')}${molecule(585, 370, 15, 'H₂')}${molecule(665, 370, 15, 'H₂')}
${molecule(825, 345, 18, 'NH₃')}${molecule(905, 345, 18, 'NH₃')}
<g class="fig-accent-2">
<defs>${ARROW('arr-th-ent-r')}</defs>
${ARR(718, 345, 770, 345, 'arr-th-ent-r', 3)}${T(744, 333, 15, '−ΔS', 'middle', '700')}
${T(745, 448, 13, 'ΔS &lt; 0 also when gases condense, solids crystallize, monomers polymerize', 'middle')}
</g>
</svg>`

/* 2b — Bond enthalpy as a break-then-form path through separated atoms (lead, 1000×460). Levels illustrative. */
const bondSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<defs>${ARROW('arr-th-bond-m')}</defs>
${ARR(50, 420, 50, 50, 'arr-th-bond-m', 2)}
${LINE(230, 250, 620, 250, 1.5, true)}
${LINE(655, 40, 655, 440, 1.5)}
</g>
${T(50, 38, 17, 'H', 'middle', '700')}
${LINE(80, 250, 230, 250, 4)}${LINE(130, 90, 560, 90, 4)}${LINE(440, 360, 630, 360, 4)}
${T(155, 278, 17, 'reactants', 'middle', '700')}
${T(345, 74, 17, 'separated atoms (every bond broken)', 'middle', '700')}
${T(535, 390, 17, 'products', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-th-bond-b')}</defs>
${ARR(170, 244, 170, 98, 'arr-th-bond-b', 4)}
${T(186, 160, 18, 'bonds broken', 'start', '700')}
${T(186, 186, 16, 'energy in: +')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-th-bond-r')}</defs>
${ARR(480, 96, 480, 352, 'arr-th-bond-r', 4)}
${T(466, 160, 18, 'bonds formed', 'end', '700')}
${T(466, 186, 16, 'energy out: −', 'end')}
</g>
<defs>${ARROW('arr-th-bond-t')}</defs>
${ARR(600, 253, 600, 352, 'arr-th-bond-t', 3)}
${T(612, 312, 18, 'ΔH', 'start', '700')}
${T(680, 74, 20, 'ΔH ≈ Σ(broken) − Σ(formed)', 'start', '700')}
${T(680, 120, 17, 'breaking a bond always costs energy')}
${T(680, 146, 17, 'forming a bond always releases it')}
<g class="fig-accent-2">${T(680, 196, 17, 'stronger bonds formed → ΔH &lt; 0', 'start', '700')}</g>
<g class="fig-accent">${T(680, 224, 17, 'stronger bonds broken → ΔH &gt; 0', 'start', '700')}</g>
${T(680, 274, 17, 'any route gives the same ΔH —')}
${T(680, 300, 17, 'a state function, as in Hess’s law')}
<g class="fig-muted">
${T(680, 360, 16, 'an estimate: tabulated bond enthalpies')}
${T(680, 384, 16, 'are averages, so ΔH°f values are')}
${T(680, 408, 16, 'more accurate')}
</g>
</svg>`

/* 4 — ΔG = ΔH − TΔS drawn against T for the four sign cases, to scale from the lesson's examples (lead, 1000×460).
   x = 100 + 0.5·T, y = 240 − 1.2·ΔG(kJ) */
const gLine = (dH: number, dS: number) => {
  const y = (t: number) => 240 - 1.2 * (dH - (t * dS) / 1000)
  return LINE(100, y(0), 475, y(750), 4)
}
const spontaneitySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<defs>${ARROW('arr-th-spon-m')}</defs>
<rect x="100" y="240" width="380" height="160" fill="currentColor" fill-opacity="0.08"/>
${ARR(100, 400, 500, 400, 'arr-th-spon-m', 2)}${ARR(100, 400, 100, 60, 'arr-th-spon-m', 2)}
${[[120, '+100'], [180, '+50'], [240, '0'], [300, '−50'], [360, '−100']].map(([y, l]) => `${LINE(94, Number(y), 106, Number(y), 2)}${T(88, Number(y) + 5, 15, String(l), 'end')}`).join('')}
${[[225, '250'], [350, '500'], [475, '750']].map(([x, l]) => `${LINE(Number(x), 394, Number(x), 406, 2)}${T(Number(x), 426, 15, String(l), 'middle')}`).join('')}
${T(100, 426, 15, '0', 'middle')}
${T(510, 405, 16, 'T (K)')}
${T(108, 48, 16, 'ΔG (kJ)', 'middle')}
${LINE(350, 240, 350, 394, 1.5, true)}
${LINE(650, 40, 650, 440, 1.5)}
</g>
${T(116, 82, 16, 'ΔG &gt; 0: not spontaneous')}
${T(116, 390, 16, 'ΔG &lt; 0: spontaneous')}
${LINE(100, 240, 480, 240, 2)}
<g class="fig-accent">
${gLine(-50, 100)}
${T(485, 384, 16, '−ΔH, +ΔS: always', 'start', '700')}
</g>
<g class="fig-accent-2">
${gLine(50, -100)}
${T(485, 95, 16, '+ΔH, −ΔS: never', 'start', '700')}
</g>
${gLine(-100, -200)}${gLine(50, 100)}
${T(485, 185, 16, '−ΔH, −ΔS: low T')}
${T(485, 275, 16, '+ΔH, +ΔS: high T')}
${DOT(350, 240, 7)}
${T(350, 212, 16, 'T = 500 K', 'middle', '700')}
${T(670, 72, 22, 'ΔG = ΔH − TΔS', 'start', '700')}
<g class="fig-muted">${T(670, 100, 16, 'intercept = ΔH, slope = −ΔS')}</g>
<g class="fig-accent">${T(670, 142, 17, '−ΔH, +ΔS: always spontaneous', 'start', '700')}</g>
<g class="fig-accent-2">${T(670, 170, 17, '+ΔH, −ΔS: never spontaneous', 'start', '700')}</g>
${T(670, 198, 17, 'same signs: temperature decides')}
${T(670, 244, 18, 'ΔG = 0 at T = ΔH / ΔS', 'start', '700')}
${T(670, 272, 17, '−ΔH, −ΔS: spontaneous below it')}
${T(670, 298, 17, '+ΔH, +ΔS: spontaneous above it')}
<g class="fig-muted">
${T(670, 344, 16, '+50 kJ, +100 J/K → T = 500 K')}
${T(670, 368, 16, '−100 kJ, −200 J/K → T = 500 K')}
${T(670, 392, 16, 'match units: 50 kJ = 50,000 J')}
</g>
</svg>`

/* 5 — ΔG°, K and E°cell as one triangle, with the lesson's worked numbers (lead, 1000×460) */
const triangleSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<defs>${ARROW('arr-th-tri-m')}</defs>
${DARR(273, 133, 143, 317, 'arr-th-tri-m')}
${DARR(327, 133, 453, 312, 'arr-th-tri-m')}
${DARR(162, 350, 432, 350, 'arr-th-tri-m')}
${T(300, 36, 14, 'standard free-energy change', 'middle')}
${T(120, 412, 13, 'equilibrium constant', 'middle')}
${T(480, 412, 13, 'standard cell potential', 'middle')}
${T(300, 445, 14, 'all three carry the same verdict on spontaneity', 'middle')}
${LINE(575, 40, 575, 440, 1.5)}
${T(600, 390, 14, 'R = 8.314 J/mol·K, F ≈ 96,500 C/mol, T in kelvin')}
${T(600, 412, 14, 'a big negative ΔG° → a huge K → runs to completion')}
</g>
<circle cx="300" cy="95" r="46" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<circle cx="120" cy="350" r="40" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<circle cx="480" cy="350" r="46" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
${T(300, 103, 24, 'ΔG°', 'middle', '700')}
${T(120, 358, 24, 'K', 'middle', '700')}
${T(480, 358, 22, 'E°cell', 'middle', '700')}
${T(186, 226, 16, 'ΔG° = −RT ln K', 'end', '700')}
${T(414, 226, 16, 'ΔG° = −nFE°cell', 'start', '700')}
${T(300, 392, 16, 'ln K = nFE°cell / RT', 'middle', '700')}
${T(600, 70, 19, 'know one, and you know the other two', 'start', '700')}
<g class="fig-accent">${T(600, 112, 16, 'ΔG° &lt; 0  ⇄  K &gt; 1  ⇄  E° &gt; 0 : spontaneous', 'start', '700')}</g>
<g class="fig-accent-2">${T(600, 140, 16, 'ΔG° &gt; 0  ⇄  K &lt; 1  ⇄  E° &lt; 0 : not as written')}</g>
${T(600, 166, 15, 'ΔG° = 0  ⇄  K = 1  ⇄  E° = 0 : equilibrium')}
${T(600, 215, 16, 'E° = +1.20 V, n = 2:', 'start', '700')}
${T(600, 242, 16, 'ΔG° = −2 × 96,500 × 1.20 = −231.6 kJ')}
${T(600, 290, 16, 'ΔG° = −17.1 kJ at 298 K:', 'start', '700')}
${T(600, 317, 16, 'ln K = 17,100 / (8.314 × 298) = 6.90')}
${T(600, 343, 16, 'K = exp(6.90) ≈ 1000  (products favoured)')}
</svg>`

/* 6 — The six phase changes as a triangle: toward gas = endothermic (blue), toward solid = exothermic (red) (replace-table, 560×440) */
type Pt = [number, number]
const PH_GAS: Pt = [280, 92]
const PH_SOLID: Pt = [100, 292]
const PH_LIQUID: Pt = [460, 292]
/** An arrow from circle `a` toward circle `b` (radius 46), shifted sideways by `off` px (positive = left of travel). */
const edgeArrow = (a: Pt, b: Pt, off: number, marker: string) => {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const len = Math.hypot(dx, dy)
  const ux = dx / len
  const uy = dy / len
  const nx = uy * off
  const ny = -ux * off
  const g = 56
  return ARR(Math.round(a[0] + ux * g + nx), Math.round(a[1] + uy * g + ny), Math.round(b[0] - ux * g + nx), Math.round(b[1] - uy * g + ny), marker, 3)
}
const phaseNode = ([cx, cy]: Pt, label: string) =>
  `<circle cx="${cx}" cy="${cy}" r="46" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>${T(cx, cy + 7, 20, label, 'middle', '700')}`
const phasesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${phaseNode(PH_GAS, 'gas')}${phaseNode(PH_SOLID, 'solid')}${phaseNode(PH_LIQUID, 'liquid')}
<g class="fig-accent">
<defs>${ARROW('arr-th-ph-b')}</defs>
${edgeArrow(PH_SOLID, PH_GAS, 9, 'arr-th-ph-b')}
${edgeArrow(PH_LIQUID, PH_GAS, -9, 'arr-th-ph-b')}
${edgeArrow(PH_SOLID, PH_LIQUID, -9, 'arr-th-ph-b')}
${T(150, 162, 17, 'sublimation', 'end', '700')}
${T(410, 162, 17, 'vaporization', 'start', '700')}
${T(280, 334, 17, 'melting (fusion)', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-th-ph-r')}</defs>
${edgeArrow(PH_GAS, PH_SOLID, 9, 'arr-th-ph-r')}
${edgeArrow(PH_GAS, PH_LIQUID, -9, 'arr-th-ph-r')}
${edgeArrow(PH_LIQUID, PH_SOLID, -9, 'arr-th-ph-r')}
${T(200, 236, 16, 'deposition', 'start')}
${T(352, 208, 16, 'condensation', 'end')}
${T(280, 270, 16, 'freezing', 'middle')}
</g>
<g class="fig-accent">${T(20, 380, 16, 'toward gas: ΔH &gt; 0, ΔS &gt; 0 (endothermic)', 'start', '700')}</g>
<g class="fig-accent-2">${T(20, 406, 16, 'toward solid: ΔH &lt; 0, ΔS &lt; 0 (exothermic)', 'start', '700')}</g>
${T(20, 432, 16, 'at the transition T: ΔG = 0, so T = ΔH / ΔS')}
</svg>`

/* 7 — The lesson's heating curve, 1.00 mol ice at −10 °C → steam at 110 °C, drawn TO SCALE in heat (lead, 1000×460).
   x = 100 + q·(500 / 54,972 J), y = 350 − 1.9·T(°C) */
const HC_Q = [376.2, 6010, 7524, 40700, 361.8]
const hcX = (i: number) => 100 + (HC_Q.slice(0, i).reduce((s, q) => s + q, 0) * 500) / 54972
const hcY = (t: number) => 350 - 1.9 * t
const HC_PTS: Pt[] = [
  [hcX(0), hcY(-10)],
  [hcX(1), hcY(0)],
  [hcX(2), hcY(0)],
  [hcX(3), hcY(100)],
  [hcX(4), hcY(100)],
  [hcX(5), hcY(110)],
]
const hcSeg = (i: number) => LINE(HC_PTS[i][0], HC_PTS[i][1], HC_PTS[i + 1][0], HC_PTS[i + 1][1], 4.5)
const heatingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<defs>${ARROW('arr-th-heat-m')}</defs>
${ARR(60, 400, 620, 400, 'arr-th-heat-m', 2)}${ARR(60, 400, 60, 60, 'arr-th-heat-m', 2)}
${[[-10, '−10'], [0, '0'], [100, '100'], [110, '110']].map(([t, l]) => `${LINE(54, hcY(Number(t)), 66, hcY(Number(t)), 2)}${T(48, hcY(Number(t)) + 5, 15, String(l), 'end')}`).join('')}
${LINE(66, hcY(0), 100, hcY(0), 1.5, true)}${LINE(66, hcY(100), hcX(2), hcY(100), 1.5, true)}
${T(340, 428, 16, 'heat added (drawn to scale: 55.0 kJ in all)', 'middle')}
${T(52, 48, 16, 'T (°C)', 'start')}
${LINE(650, 40, 650, 440, 1.5)}
</g>
${hcSeg(0)}${hcSeg(2)}${hcSeg(4)}
<g class="fig-accent">${hcSeg(1)}${hcSeg(3)}</g>
${BADGE(84, 372, '1')}
<g class="fig-accent">${BADGE(128, 324, '2')}</g>
${T(106, 378, 15, 'ice + water', 'start')}
${BADGE(154, 262, '3')}
${T(206, 268, 16, 'water', 'start', '700')}
<g class="fig-accent">${BADGE(330, 134, '4')}${T(350, 140, 17, 'water ⇌ steam: boiling', 'start', '700')}</g>
${BADGE(624, 152, '5')}
${T(604, 124, 16, 'steam', 'end', '700')}
${T(670, 68, 19, '1.00 mol (18.0 g) ice, −10 °C', 'start', '700')}
${T(670, 94, 19, '→ steam, 110 °C', 'start', '700')}
${BADGE(682, 136, '1')}${T(702, 141, 16, 'heat ice  (q = mcΔT)')}${T(985, 141, 16, '376.2 J', 'end')}
<g class="fig-accent">${BADGE(682, 170, '2')}${T(702, 175, 16, 'melt  (q = nΔH(fus))')}${T(985, 175, 16, '6,010 J', 'end')}</g>
${BADGE(682, 204, '3')}${T(702, 209, 16, 'heat water')}${T(985, 209, 16, '7,524 J', 'end')}
<g class="fig-accent">${BADGE(682, 238, '4')}${T(702, 243, 16, 'boil  (q = nΔH(vap))', 'start', '700')}${T(985, 243, 16, '40,700 J', 'end', '700')}</g>
${BADGE(682, 272, '5')}${T(702, 277, 16, 'heat steam')}${T(985, 277, 16, '361.8 J', 'end')}
${LINE(670, 296, 985, 296, 1.5)}
${T(702, 322, 17, 'total', 'start', '700')}${T(985, 322, 17, '≈ 55.0 kJ', 'end', '700')}
<g class="fig-muted">
${T(670, 368, 15, 'slopes: q = mcΔT (steeper = smaller c)')}
${T(670, 392, 15, 'plateaus: constant T, q = nΔH')}
${T(670, 416, 15, 'boiling is by far the largest step')}
</g>
</svg>`

/* 8 — A water-like P–T phase diagram: the solid–liquid line leans LEFT (negative slope) (replace-table, 560×440). Shape illustrative. */
const pdiagramSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<defs>${ARROW('arr-th-pd-m')}</defs>
${ARR(60, 390, 540, 390, 'arr-th-pd-m', 2)}${ARR(60, 390, 60, 30, 'arr-th-pd-m', 2)}
${T(536, 414, 17, 'T', 'end', '700')}${T(48, 40, 17, 'P', 'end', '700')}
</g>
${CURVE('M80 384 C130 372 170 350 210 300')}
${CURVE('M210 300 L150 50')}
${CURVE('M210 300 C300 248 380 196 450 120')}
${T(110, 170, 22, 'solid', 'middle', '700')}
${T(320, 150, 22, 'liquid', 'middle', '700')}
${T(430, 352, 22, 'gas', 'middle', '700')}
${DOT(210, 300, 7)}${DOT(450, 120, 7)}
${T(222, 324, 16, 'triple point: all three coexist', 'start', '700')}
${T(440, 78, 16, 'critical point:', 'end', '700')}
${T(440, 98, 15, 'gas and liquid merge', 'end')}
<g class="fig-muted">
${T(200, 195, 15, 'melting points (S–L)', 'start')}
${T(330, 266, 15, 'boiling points (L–G)', 'start')}
${T(140, 380, 15, 'sublimation (S–G)', 'start')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-th-pd-b')}</defs>
${ARR(175, 280, 175, 74, 'arr-th-pd-b', 3.5)}
${T(189, 92, 15, 'raise P:', 'start', '700')}
${T(189, 111, 15, 'ice melts', 'start', '700')}
</g>
<g class="fig-accent-2">${T(20, 432, 16, 'water: the S–L slope is negative (ice is less dense)', 'start', '700')}</g>
</svg>`

export const mcatThermodynamicsFigures: DeckFigurePlacement[] = [
  {
    at: 'Enthalpy',
    mode: 'lead',
    figure: {
      svg: enthalpySvg,
      alt:
        'Three panels. Left, exothermic (red): an enthalpy-versus-reaction-progress profile in which the reactants sit high, the curve rises over a hump and drops to products sitting lower; a red arrow down from the reactant level to the product level is labelled ΔH < 0 — heat leaves the system, so the solution warms (ΔT > 0). Middle, endothermic (blue): the reactants sit low and the products high; a blue arrow up is labelled ΔH > 0 — heat enters the system, so the solution cools (ΔT < 0). Right, a coffee-cup calorimeter: a cup of solution with a thermometer; a dashed circle in the solution marks the reaction as the system, with red heat arrows pointing out of it into the solution, which is the surroundings. Below: q = mcΔT of the solution, and ΔH(rxn) = −q(solution).',
      caption: 'Exothermic products sit lower in H (ΔH < 0, the solution warms); endothermic products sit higher (ΔH > 0, it cools). In a coffee cup the solution is the surroundings, so ΔH(rxn) = −q(solution). Profiles illustrative.',
    },
    blocks: [
      '- $\\Delta H = H_{\\text{products}} - H_{\\text{reactants}}$ (constant P): $< 0$ exothermic, $> 0$ endothermic',
      '- Calorimetry: $q = mc\\Delta T$ for the solution, then $\\Delta H_{\\text{rxn}} = -q_{\\text{solution}}$',
    ],
  },
  {
    at: "Hess's Law",
    mode: 'lead',
    figure: {
      svg: hessSvg,
      alt:
        'Enthalpy ladder for the lesson’s worked example, drawn to scale. Top level: C(s) + O₂(g). Middle level: CO(g) + ½O₂(g). Bottom level: CO₂(g). A long red arrow from the top level to the bottom is reaction (1), C + O₂ → CO₂, ΔH₁ = −393.5 kJ. A red arrow from the middle level to the bottom is reaction (2), CO + ½O₂ → CO₂, ΔH₂ = −283.0 kJ. A short blue arrow from the top level to the middle level is the target, ΔH = ?. Right column: same start, same end, same ΔH — enthalpy is a state function, so only the two levels matter. The direct route equals the target plus step (2): −393.5 = ΔH + (−283.0), so ΔH = −393.5 + 283.0 = −110.5 kJ. The algebra: reverse a reaction and flip the sign of ΔH; multiply by k and multiply ΔH by k; add the equations and add the ΔH values. Here the target is (1) plus the reverse of (2).',
      caption: 'Hess’s law as a ladder (to scale): the one-step drop C → CO₂ (−393.5 kJ) equals the target step C → CO plus the drop CO → CO₂ (−283.0 kJ), so the target is −110.5 kJ.',
    },
    blocks: [
      '- $\\Delta H$ is a **state function**: any route between the same two states gives the same $\\Delta H$',
      '- Reverse a reaction → flip the sign of $\\Delta H$; multiply it by $k$ → multiply $\\Delta H$ by $k$',
    ],
  },
  {
    at: 'Bond Enthalpy',
    mode: 'lead',
    figure: {
      svg: bondSvg,
      alt:
        'An enthalpy diagram with three levels. Reactants sit at a middle level; a blue arrow rises from them to a high level labelled separated atoms (every bond broken) — bonds broken, energy in, positive. A red arrow then drops from the atom level all the way down to a low level labelled products — bonds formed, energy out, negative. A dashed line continues the reactant level, and a dark arrow from it down to the product level is ΔH. Right column: ΔH ≈ Σ(broken) − Σ(formed); breaking a bond always costs energy and forming a bond always releases it; if the bonds formed are stronger than those broken, ΔH < 0, and if the bonds broken are stronger, ΔH > 0; any route gives the same ΔH, a state function as in Hess’s law; this is an estimate, because tabulated bond enthalpies are averages, so ΔH°f values are more accurate.',
      caption: 'Bond enthalpy as a two-step path: break every reactant bond (energy in), then form every product bond (energy out); the net difference is ΔH. Levels illustrative.',
    },
    blocks: [
      '- $\\Delta H \\approx \\sum$ (bonds broken) $- \\sum$ (bonds formed): breaking costs (+), forming releases (−)',
      '- An estimate from average bond enthalpies; $\\Delta H°_f$ values are more accurate',
    ],
  },
  {
    at: 'Predicting the Sign',
    mode: 'lead',
    figure: {
      svg: entropySvg,
      alt:
        'Four particle pictures of entropy. Top left: a solid as a regular 4-by-4 lattice of dots, a blue melt arrow (+ΔS) to a liquid box of loosely packed dots, a blue boil arrow (+ΔS) to a gas box with a few dots far apart. Top right: the same six gas particles in a small box, then in a bigger box — +ΔS, many more places to be. Bottom left: a beaker holding a solid NaCl cube (one ordered lattice), a blue +ΔS arrow, then a beaker with + and − ions spread through the water. Bottom right: N₂ + 3H₂ → 2NH₃ — a box of four gas molecules (one N₂, three H₂), a red −ΔS arrow, a box of two NH₃ molecules: 4 mol gas to 2 mol gas, Δn(gas) = −2. Footnote: ΔS < 0 also when gases condense, solids crystallize and monomers polymerize.',
      caption: 'Entropy rises when particles get more places to be: melting and boiling, a bigger volume, dissolving into ions; it falls when moles of gas drop (N₂ + 3H₂ → 2NH₃, Δn(gas) = −2).',
    },
    blocks: [
      '- $\\Delta S > 0$: gas formed, melting/boiling, dissolving, mixing, heating, larger volume',
      '- $\\Delta S < 0$: gas consumed ($\\Delta n_{\\text{gas}} < 0$), freezing/crystallizing, polymerization',
    ],
  },
  {
    at: 'Gibbs Free Energy',
    mode: 'lead',
    figure: {
      svg: spontaneitySvg,
      alt:
        'Graph of ΔG in kJ against temperature from 0 to 750 K, with the region below ΔG = 0 shaded and marked spontaneous. Four straight lines, each starting at its ΔH and sloping by −ΔS. Blue, ΔH = −50 kJ and ΔS = +100 J/K: starts at −50 and falls — always spontaneous. Red, ΔH = +50 kJ and ΔS = −100 J/K: starts at +50 and rises — never spontaneous. Dark, ΔH = −100 kJ and ΔS = −200 J/K: starts at −100 and rises, crossing zero at 500 K — spontaneous only at low T. Dark, ΔH = +50 kJ and ΔS = +100 J/K: starts at +50 and falls, crossing zero at 500 K — spontaneous only at high T. Both crossings sit on one dot labelled T = 500 K. Right column: ΔG = ΔH − TΔS, intercept ΔH and slope −ΔS; −ΔH with +ΔS is always spontaneous, +ΔH with −ΔS never; same signs, temperature decides: ΔG = 0 at T = ΔH/ΔS, with −ΔH, −ΔS spontaneous below it and +ΔH, +ΔS above it; +50 kJ with +100 J/K gives 500 K and −100 kJ with −200 J/K gives 500 K, after matching units (50 kJ = 50,000 J).',
      caption: 'ΔG = ΔH − TΔS as straight lines against T, drawn to scale from the lesson’s examples: opposite signs never cross zero; same signs cross at T = ΔH/ΔS (500 K for both here).',
    },
    blocks: [
      '- $\\Delta G = \\Delta H - T\\Delta S$: $< 0$ spontaneous, $= 0$ equilibrium, $> 0$ non-spontaneous',
      '- Same signs for $\\Delta H$ and $\\Delta S$: the crossover is $T = \\Delta H / \\Delta S$ (convert kJ to J first)',
    ],
  },
  {
    at: 'Relationship to Cell Potential',
    mode: 'lead',
    figure: {
      svg: triangleSvg,
      alt:
        'A triangle with three circles: ΔG° (standard free-energy change) at the top, K (equilibrium constant) at the lower left and E°cell (standard cell potential) at the lower right, joined by double-headed arrows labelled ΔG° = −RT ln K (left side), ΔG° = −nFE°cell (right side) and ln K = nFE°cell / RT (bottom). All three carry the same verdict on spontaneity. Right column: know one and you know the other two. ΔG° < 0, K > 1, E° > 0: spontaneous. ΔG° > 0, K < 1, E° < 0: not as written. ΔG° = 0, K = 1, E° = 0: equilibrium. Worked numbers: E° = +1.20 V with n = 2 gives ΔG° = −2 × 96,500 × 1.20 = −231.6 kJ; ΔG° = −17.1 kJ at 298 K gives ln K = 17,100 / (8.314 × 298) = 6.90, so K = exp(6.90) ≈ 1000, products favoured. R = 8.314 J/mol·K, F ≈ 96,500 C/mol, T in kelvin; a big negative ΔG° means a huge K and a reaction that runs to completion.',
      caption: 'ΔG°, K and E°cell are one fact in three units: ΔG° = −RT ln K = −nFE°cell, with the lesson’s worked numbers (+1.20 V, n = 2 → −231.6 kJ; −17.1 kJ → K ≈ 1000).',
    },
    blocks: [
      '- $\\Delta G° = -RT\\ln K = -nFE°_{\\text{cell}}$ — know one, find the other two',
      '- $E°_{\\text{cell}} > 0$ ⇔ $\\Delta G° < 0$ ⇔ $K > 1$: spontaneous as written',
    ],
  },
  {
    at: 'Phases and Phase Changes',
    mode: 'replace-table',
    figure: {
      svg: phasesSvg,
      alt:
        'A triangle of three circles: gas at the top, solid at the lower left, liquid at the lower right, with a pair of opposite arrows on each side. Blue arrows go toward the gas end: solid to liquid is melting (fusion), liquid to gas is vaporization, solid to gas is sublimation. Red arrows go back toward the solid end: liquid to solid is freezing, gas to liquid is condensation, gas to solid is deposition. Legend: toward gas, ΔH > 0 and ΔS > 0 (endothermic); toward solid, ΔH < 0 and ΔS < 0 (exothermic); at the transition temperature ΔG = 0, so T = ΔH/ΔS.',
      caption: 'The six phase changes: every step toward gas absorbs heat and raises entropy (blue); every step toward solid releases heat and lowers it (red).',
    },
    blocks: [
      '- **Toward gas** (melting, vaporization, sublimation): $\\Delta H > 0$, $\\Delta S > 0$ — endothermic',
      '- **Toward solid** (freezing, condensation, deposition): $\\Delta H < 0$, $\\Delta S < 0$ — exothermic',
      '- At the transition temperature $\\Delta G = 0$, so $T_{\\text{transition}} = \\Delta H / \\Delta S$',
    ],
  },
  {
    at: 'Heating Curves',
    mode: 'lead',
    figure: {
      svg: heatingSvg,
      alt:
        'Heating curve for the lesson’s example, temperature in °C against heat added, drawn to scale (55.0 kJ in all). Stage 1: a short steep rise as ice warms from −10 °C to 0 °C. Stage 2: a blue flat plateau at 0 °C where ice and water coexist while the ice melts. Stage 3: a steep rise as liquid water warms from 0 °C to 100 °C. Stage 4: a long blue plateau at 100 °C, water and steam, boiling — by far the longest segment. Stage 5: a short steep rise as steam warms from 100 °C to 110 °C. Right column, for 1.00 mol (18.0 g) of ice at −10 °C to steam at 110 °C: 1 heat ice, q = mcΔT, 376.2 J; 2 melt, q = nΔH(fus), 6,010 J; 3 heat water, 7,524 J; 4 boil, q = nΔH(vap), 40,700 J; 5 heat steam, 361.8 J; total ≈ 55.0 kJ. Slopes: q = mcΔT, steeper means a smaller specific heat; plateaus: constant T, q = nΔH; boiling is by far the largest step.',
      caption: 'The lesson’s ice-to-steam example drawn to scale in heat: plateaus are phase changes at constant T, and the boiling plateau (40,700 J) dwarfs every other step.',
    },
    blocks: [
      '- Slope: $q = mc\\Delta T$ (steeper = smaller $c$); plateau: $q = n\\Delta H$ at constant $T$',
      '- 1.00 mol ice, −10 °C → steam, 110 °C: 376.2 + 6010 + 7524 + 40,700 + 361.8 J ≈ **55.0 kJ**',
    ],
  },
  {
    at: 'Phase Diagrams',
    mode: 'replace-table',
    figure: {
      svg: pdiagramSvg,
      alt:
        'A pressure-versus-temperature phase diagram shaped like water’s. Three regions: solid at the upper left, liquid at the upper middle, gas at the lower right. The solid–liquid line (melting points) rises from the triple point and leans to the LEFT — a negative slope. The liquid–gas line (boiling points) rises from the triple point to the critical point, where gas and liquid merge. The solid–gas line (sublimation) runs from low T and P up to the triple point, where all three phases coexist. A blue vertical arrow at constant temperature starts in the solid region and crosses the leaning solid–liquid line into the liquid region: raise the pressure and ice melts. Footnote: for water the solid–liquid slope is negative because ice is less dense than liquid water.',
      caption: 'Phase diagram of water (shape illustrative): each line is where two phases coexist; the solid–liquid line leans left, so squeezing ice at constant T melts it.',
    },
    blocks: [
      '- Pressure vs. temperature: each region is the stable phase; each line is where two phases coexist',
      '- **Triple point**: all three phases coexist; **critical point**: gas and liquid become indistinguishable',
      '- Solid–liquid line = melting points; liquid–gas line = boiling points (at each pressure)',
      '- **Water**: the solid–liquid line slopes **negative** — ice is less dense, so pressure melts it',
    ],
  },
]
