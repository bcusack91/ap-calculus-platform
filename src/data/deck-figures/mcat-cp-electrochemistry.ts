import type { DeckFigurePlacement } from './index'

/**
 * Electrochemistry (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (two beakers joined by
 * a wire and a salt-bridge tube, a reduction-potential ladder, one beaker
 * with a battery in the external circuit, a sign grid, a chain of boxes for
 * Faraday's law, a zoomed E-vs-log Q line, the copper concentration cell,
 * the annotated cell-notation string, a four-rung potential ladder) — no
 * textbook, prep-company or AAMC figure was copied. The only numbers drawn
 * are the ones the lesson states (E° values +0.34 / −0.76 / +0.80 / −0.25 /
 * +2.87 / −3.04 V, F ≈ 96,500 C/mol, the copper-plating and Nernst worked
 * numbers); the Nernst graph is to scale on a ZOOMED E axis and says so.
 *
 * Colours are consistent across the deck: oxidation / the anode RED
 * (fig-accent-2), reduction / the cathode BLUE (fig-accent), electrons in the
 * wire blue, salt-bridge ions and glassware grey (fig-muted), equations in
 * the text colour.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-ec-<figure>-<colour>).
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

/** A beaker open at the top (glass outline only). */
const BEAKER = (x: number, w: number, top: number, bottom: number) =>
  `<path d="M${x} ${top} L${x} ${bottom} L${x + w} ${bottom} L${x + w} ${top}" fill="none" stroke="currentColor" stroke-width="2.5"/>`

/**
 * Two half-cells for the 1000×460 lead slides: beakers at x 60–330 and
 * 420–690 (liquid from y 235), electrodes at x 120–150 and 600–630, a wire
 * over the top with a blue electron arrow (left → right), a grey salt-bridge
 * tube with the anion arrow toward the LEFT beaker and the cation arrow toward
 * the RIGHT one. Markers defined: arr-ec-<id>-b (blue) and arr-ec-<id>-m (grey).
 * Each liquid is `{ blue, opacity }` — blue for Cu²⁺, text colour otherwise.
 */
const cellFrame = (id: string, left: { blue: boolean; opacity: number }, right: { blue: boolean; opacity: number }, anionLabel: string) => {
  const liquid = (x: number, l: { blue: boolean; opacity: number }) => {
    const r = `<rect x="${x}" y="235" width="268" height="184" fill="currentColor" fill-opacity="${l.opacity}"/>`
    return l.blue ? `<g class="fig-accent">${r}</g>` : r
  }
  return `${BEAKER(60, 270, 150, 420)}${BEAKER(420, 270, 150, 420)}
${liquid(61, left)}${liquid(421, right)}
<rect x="120" y="100" width="30" height="290" rx="3" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<rect x="600" y="100" width="30" height="290" rx="3" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<path d="M135 100 L135 45 L615 45 L615 100" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent">
<defs>${ARROW(`arr-ec-${id}-b`)}</defs>
${ARR(300, 45, 450, 45, `arr-ec-${id}-b`, 3.5)}
${T(375, 22, 17, 'e⁻  anode → cathode (wire only)', 'middle', '700')}
</g>
<g class="fig-muted">
<defs>${ARROW(`arr-ec-${id}-m`)}</defs>
<path d="M290 265 L290 140 Q290 120 310 120 L440 120 Q460 120 460 140 L460 265" fill="none" stroke="currentColor" stroke-width="26" stroke-opacity="0.35"/>
${T(375, 100, 16, 'salt bridge', 'middle')}
${ARR(435, 176, 318, 176, `arr-ec-${id}-m`, 2.5)}
${T(375, 165, 14, anionLabel, 'middle')}
${ARR(318, 206, 435, 206, `arr-ec-${id}-m`, 2.5)}
${T(375, 227, 14, 'cations', 'middle')}
${LINE(705, 30, 705, 440, 1.5)}
</g>`
}

/* 1 — The Daniell cell: anode, cathode, wire, salt bridge, E° values (lead, 1000×460) */
const galvanicSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${cellFrame('galv', { blue: false, opacity: 0.05 }, { blue: true, opacity: 0.14 }, 'anions')}
<g class="fig-accent-2">
${T(155, 80, 19, 'Zn — anode (−)', 'start', '700')}
${T(165, 330, 15, 'Zn → Zn²⁺ + 2e⁻')}
</g>
<g class="fig-accent">
${T(595, 80, 19, 'Cu — cathode (+)', 'end', '700')}
${T(590, 330, 15, 'Cu²⁺ + 2e⁻ → Cu', 'end')}
</g>
${T(165, 300, 15, 'Zn²⁺(aq)')}
${T(590, 300, 15, 'Cu²⁺(aq), blue', 'end')}
<g class="fig-muted">
${T(165, 356, 14, 'electrode dissolves')}
${T(590, 356, 14, 'plates on; blue fades', 'end')}
</g>
${T(725, 70, 21, 'Daniell cell', 'start', '700')}
${T(725, 106, 17, 'standard reduction potentials:')}
<g class="fig-accent">${T(725, 138, 18, 'Cu²⁺/Cu  +0.34 V → cathode')}</g>
<g class="fig-accent-2">${T(725, 168, 18, 'Zn²⁺/Zn  −0.76 V → anode')}</g>
${T(725, 215, 19, 'E°cell = E°cat − E°an', 'start', '700')}
${T(725, 245, 19, '= 0.34 − (−0.76) = 1.10 V')}
${T(725, 275, 17, '&gt; 0 → spontaneous (ΔG° &lt; 0)')}
<g class="fig-muted">
${T(725, 325, 15, 'electrons: through the wire only')}
${T(725, 348, 15, 'ions: through solution and bridge')}
${T(725, 371, 15, 'anode (−) shrinks, cathode (+) grows')}
</g>
</svg>`

/* 2 — Reduction-potential ladders (Cu/Zn and Ag/Ni) and the E° ↔ ΔG° sign logic (lead, 1000×460). y = 240 − 150·E° */
const potentialSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ec-pot')}</defs>
${ARR(80, 410, 80, 60, 'arr-ec-pot', 2.5)}
${T(80, 44, 15, 'E° (reduction)', 'middle')}
<g class="fig-muted">
${LINE(74, 90, 86, 90, 2)}${T(68, 95, 14, '+1 V', 'end')}
${LINE(74, 240, 86, 240, 2)}${T(68, 245, 14, '0', 'end')}
${LINE(74, 390, 86, 390, 2)}${T(68, 395, 14, '−1 V', 'end')}
${LINE(600, 30, 600, 440, 1.5)}
${T(200, 150, 15, 'Daniell cell', 'middle')}
${T(440, 82, 15, 'silver / nickel', 'middle')}
<defs>${ARROW('arr-ec-pot-m')}</defs>
${DARR(292, 195, 292, 348, 'arr-ec-pot-m')}
${DARR(532, 126, 532, 272, 'arr-ec-pot-m')}
${T(440, 330, 14, 'Ni²⁺ oxidizing Ag as written: −1.05 V, no;', 'middle')}
${T(440, 350, 14, 'the reverse (Ag⁺ onto Ni) runs at +1.05 V', 'middle')}
</g>
${T(300, 275, 16, '1.10 V', 'start', '700')}
${T(540, 205, 16, '1.05 V', 'start', '700')}
<g class="fig-accent">
${LINE(120, 189, 280, 189, 3.5)}
${T(200, 181, 17, 'Cu²⁺/Cu  +0.34 V', 'middle', '700')}
${T(200, 206, 14, 'higher → cathode', 'middle')}
${LINE(360, 120, 520, 120, 3.5)}
${T(440, 112, 17, 'Ag⁺/Ag  +0.80 V', 'middle', '700')}
${T(440, 137, 14, 'higher → cathode', 'middle')}
</g>
<g class="fig-accent-2">
${LINE(120, 354, 280, 354, 3.5)}
${T(200, 346, 14, 'lower → anode', 'middle')}
${T(200, 376, 17, 'Zn²⁺/Zn  −0.76 V', 'middle', '700')}
${LINE(360, 278, 520, 278, 3.5)}
${T(440, 270, 14, 'lower → anode', 'middle')}
${T(440, 300, 17, 'Ni²⁺/Ni  −0.25 V', 'middle', '700')}
</g>
${T(320, 428, 16, 'the higher rung is reduced (cathode); E°cell = top − bottom', 'middle')}
${T(620, 70, 21, 'E°cell = E°cathode − E°anode', 'start', '700')}
<g class="fig-muted">${T(620, 98, 15, 'both as reduction values, straight from the table')}</g>
<g class="fig-accent">${T(620, 140, 18, 'higher E° → gets reduced → cathode')}</g>
<g class="fig-accent-2">${T(620, 170, 18, 'lower E° → gets oxidized → anode')}</g>
${T(620, 225, 18, 'E°cell &gt; 0  ⇄  ΔG° &lt; 0  → spontaneous', 'start', '700')}
${T(620, 258, 18, 'E°cell &lt; 0  ⇄  ΔG° &gt; 0  → needs a push')}
${T(620, 305, 19, 'ΔG° = −nFE°cell', 'start', '700')}
${T(620, 335, 16, 'n and F scale the ENERGY, not the volts')}
<g class="fig-muted">
${T(620, 380, 15, 'E° is intensive (J per C): never multiply')}
${T(620, 402, 15, 'it by stoichiometric coefficients')}
</g>
</svg>`

/* 3 — An electrolytic cell: molten NaCl driven by a DC supply (lead, 1000×460) */
const electrolyticSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${BEAKER(80, 400, 150, 420)}
<rect x="81" y="220" width="398" height="199" fill="currentColor" fill-opacity="0.06"/>
<rect x="150" y="120" width="30" height="270" rx="3" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<rect x="380" y="120" width="30" height="270" rx="3" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<path d="M165 120 L165 45 L262 45 M298 45 L395 45 L395 120" fill="none" stroke="currentColor" stroke-width="3"/>
${LINE(262, 27, 262, 63, 4)}
${LINE(298, 36, 298, 54, 4)}
${T(250, 84, 18, '+', 'end', '700')}
${T(310, 84, 18, '−', 'start', '700')}
<g class="fig-muted">
${T(280, 108, 15, 'DC supply ≥ |E°cell|', 'middle')}
${T(280, 406, 14, 'molten NaCl', 'middle')}
<circle cx="196" cy="268" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
<circle cx="203" cy="250" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
<circle cx="194" cy="231" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
${T(214, 236, 13, 'Cl₂↑')}
${T(366, 236, 13, 'Na', 'end')}
${LINE(535, 30, 535, 440, 1.5)}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-ec-elec-b')}</defs>
${ARR(190, 45, 245, 45, 'arr-ec-elec-b', 3.5)}
${T(215, 24, 14, 'e⁻ out', 'middle', '700')}
${ARR(315, 45, 372, 45, 'arr-ec-elec-b', 3.5)}
${T(343, 24, 14, 'e⁻ in', 'middle', '700')}
${T(408, 110, 18, 'cathode (−)', 'start', '700')}
<circle cx="300" cy="300" r="16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
${T(300, 305, 13, 'Na⁺', 'middle', '700')}
${ARR(320, 300, 368, 300, 'arr-ec-elec-b', 3)}
${T(395, 445, 15, 'Na⁺ + e⁻ → Na  (cathode)', 'middle')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-ec-elec-r')}</defs>
${T(152, 110, 18, 'anode (+)', 'end', '700')}
<circle cx="262" cy="350" r="16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
${T(262, 355, 13, 'Cl⁻', 'middle', '700')}
${ARR(242, 350, 192, 350, 'arr-ec-elec-r', 3)}
${T(165, 445, 15, '2Cl⁻ → Cl₂ + 2e⁻  (anode)', 'middle')}
</g>
${T(552, 70, 21, 'redox driven backward', 'start', '700')}
${T(552, 106, 17, 'the supply forces E°cell &lt; 0 (ΔG &gt; 0)')}
${T(552, 134, 17, 'electrical energy in, chemical energy stored')}
${T(552, 184, 18, 'never flips: AN OX, RED CAT,', 'start', '700')}
${T(552, 210, 18, 'electrons ENTER at the cathode', 'start', '700')}
${T(552, 258, 18, 'flips: anode is now (+), cathode (−)')}
<g class="fig-muted">
${T(552, 284, 15, 'the supply’s + terminal pulls e⁻ out of the anode,')}
${T(552, 305, 15, 'its − terminal pushes e⁻ into the cathode')}
</g>
<g class="fig-accent">${T(552, 350, 17, 'cations drift to the (−) cathode: plating is here')}</g>
<g class="fig-muted">
${T(552, 392, 15, 'molten NaCl: Na at the cathode, Cl₂ at the anode')}
${T(552, 415, 15, 'aqueous: water may react first (H₂, not Na)')}
</g>
</svg>`

/* 4 — Galvanic vs electrolytic: what flips and what never does (replace-table, 560×440) */
const flipRow = (y: number, label: string, tag: string, flips: boolean, g: string, e: string, big = false) => {
  const cell = (cx: number, s: string) => big
    ? `<circle cx="${cx}" cy="${y + 27}" r="17" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>${T(cx, y + 35, 22, s, 'middle', '700')}`
    : T(cx, y + 33, 15, s, 'middle', flips ? '400' : '700')
  const band = flips
    ? ''
    : `<g class="fig-accent"><rect x="12" y="${y}" width="536" height="55" rx="8" fill="currentColor" fill-opacity="0.07"/></g>`
  const tagEl = flips
    ? `<g class="fig-accent-2">${T(20, y + 44, 12, tag)}</g>`
    : `<g class="fig-muted">${T(20, y + 44, 12, tag)}</g>`
  const swap = flips && big ? `<g class="fig-muted">${T(385, y + 33, 18, '⇄', 'middle')}</g>` : ''
  return `${band}${T(20, y + 24, 15, label, 'start', '700')}${tagEl}${cell(295, g)}${cell(470, e)}${swap}`
}
const signFlipSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 24, 16, 'chemistry is fixed — only the signs flip', 'middle', '700')}
<g class="fig-muted">
${LINE(12, 78, 548, 78, 2)}
${LINE(205, 44, 205, 415, 1.5)}
${LINE(385, 44, 385, 415, 1.5)}
</g>
${T(295, 64, 17, 'galvanic', 'middle', '700')}
${T(470, 64, 17, 'electrolytic', 'middle', '700')}
${flipRow(85, 'spontaneous?', 'flips', true, 'yes (ΔG &lt; 0)', 'no — driven (ΔG &gt; 0)')}
${flipRow(140, 'anode does', 'never flips (AN OX)', false, 'oxidation', 'oxidation')}
${flipRow(195, 'cathode does', 'never flips (RED CAT)', false, 'reduction', 'reduction')}
${flipRow(250, 'anode sign', 'flips', true, '−', '+', true)}
${flipRow(305, 'cathode sign', 'flips', true, '+', '−', true)}
${flipRow(360, 'e⁻ enter at', 'never flips', false, 'cathode', 'cathode')}
<g class="fig-muted">${T(280, 433, 13, 'electrolytic: the supply’s + grabs the anode, its − feeds the cathode', 'middle')}</g>
</svg>`

/* 5 — Faraday's law as a chain of boxes, with the copper-plating numbers (lead, 1000×460) */
const chainBox = (x: number, y: number, line1: string, line2: string, tinted: boolean) =>
  `${tinted ? `<g class="fig-accent"><rect x="${x}" y="${y}" width="140" height="70" rx="10" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/></g>` : BOX(x, y, 140, 70, 10)}
${T(x + 70, y + 30, 17, line1, 'middle', '700')}${T(x + 70, y + 55, 15, line2, 'middle')}`
const chainArrows = (y: number, labels: string[], marker: string) =>
  [172, 372, 572, 772].map((x, i) => `${ARR(x, y + 35, x + 56, y + 35, marker, 3)}${labels[i] ? T(x + 28, y - 8, 15, labels[i], 'middle', '700') : ''}`).join('\n')
const faradaySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ec-far')}</defs>
${T(30, 44, 18, 'the chain for every quantitative electrolysis problem', 'start', '700')}
${chainBox(30, 70, 'I (A) × t (s)', 'current × time', false)}
${chainBox(230, 70, 'Q = It', 'coulombs', false)}
${chainBox(430, 70, 'mol e⁻', '= It / F', false)}
${chainBox(630, 70, 'mol metal', '= mol e⁻ ÷ n', false)}
${chainBox(830, 70, 'mass', '= mol × M', false)}
${chainArrows(70, ['', '÷ F', '÷ n', '× M'], 'arr-ec-far')}
<g class="fig-muted">
${T(500, 162, 14, 'F = 96,500 C per mol e⁻', 'middle')}
${T(700, 162, 14, 'n = e⁻ per ion (Cu²⁺: 2)', 'middle')}
${T(900, 162, 14, 'M = molar mass', 'middle')}
</g>
${T(30, 214, 18, 'copper plating: 2.0 A for 965 s   (Cu²⁺ + 2e⁻ → Cu, M = 63.5 g/mol)', 'start', '700')}
${chainBox(30, 240, '2.0 A × 965 s', '', true)}
${chainBox(230, 240, '1930 C', '2% of 96,500', true)}
${chainBox(430, 240, '0.020 mol e⁻', '', true)}
${chainBox(630, 240, '0.010 mol Cu', '2 e⁻ per Cu', true)}
${chainBox(830, 240, '0.635 g Cu', 'on the cathode', true)}
${chainArrows(240, ['', '÷ 96,500', '÷ 2', '× 63.5'], 'arr-ec-far')}
<g class="fig-accent">${T(30, 372, 17, 'the metal lands on the CATHODE — the electrode wired to the supply’s − terminal', 'start', '700')}</g>
${T(30, 405, 16, 'same charge: a 2+ ion gives HALF the moles of a 1+ ion — the ion’s charge is the exchange rate')}
<g class="fig-muted">${T(30, 435, 15, 'double I, t or both → double the deposit (linear)')}</g>
</svg>`

/* 6 — Nernst: E against log Q for the Daniell cell on a zoomed E axis (lead, 1000×460). x = 240 + 60·log Q, y = 410 − 1000·(E − 0.98) */
const nernstSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ec-nernst')}</defs>
${T(295, 44, 16, 'Daniell cell, n = 2 (E axis zoomed)', 'middle', '700')}
${ARR(110, 410, 490, 410, 'arr-ec-nernst', 2.5)}
${ARR(110, 410, 110, 66, 'arr-ec-nernst', 2.5)}
${T(100, 56, 15, 'E (V)', 'end')}
${T(488, 438, 15, 'log Q', 'end')}
<g class="fig-muted">
${LINE(104, 390, 116, 390, 2)}${T(96, 395, 14, '1.00', 'end')}
${LINE(104, 350, 116, 350, 2)}${T(96, 355, 14, '1.04', 'end')}
${LINE(104, 290, 116, 290, 2)}${T(96, 295, 14, '1.10', 'end')}
${LINE(104, 230, 116, 230, 2)}${T(96, 235, 14, '1.16', 'end')}
${[-2, -1, 0, 1, 2, 3].map((q) => `${LINE(240 + 60 * q, 404, 240 + 60 * q, 416, 2)}${T(240 + 60 * q, 434, 14, String(q).replace('-', '−'), 'middle')}`).join('')}
${LINE(110, 290, 420, 290, 1.5, true)}
${LINE(240, 290, 240, 410, 1.5, true)}
${LINE(110, 350, 360, 350, 1.5, true)}
${LINE(360, 350, 360, 410, 1.5, true)}
${LINE(540, 30, 540, 440, 1.5)}
</g>
${LINE(120, 231, 420, 379, 4)}
<circle cx="240" cy="290" r="6" fill="currentColor"/>
${T(250, 280, 15, 'E° = 1.10 V at Q = 1', 'start', '700')}
<g class="fig-accent">
${T(130, 212, 15, 'Q &lt; 1: E &gt; E°', 'start', '700')}
</g>
<g class="fig-accent-2">
<circle cx="360" cy="350" r="6" fill="currentColor"/>
${T(370, 345, 15, '1.04 V at Q = 100', 'start', '700')}
${T(245, 398, 14, 'products pile up → E falls')}
</g>
${T(560, 70, 21, 'E = E° − (0.0592 / n) log Q', 'start', '700')}
<g class="fig-muted">${T(560, 96, 15, 'at 25 °C; Q = products over reactants')}</g>
<g class="fig-accent">${T(560, 140, 18, 'Q &lt; 1 (reactants enriched): E &gt; E°')}</g>
${T(560, 170, 18, 'Q = 1 (standard): E = E°')}
<g class="fig-accent-2">${T(560, 200, 18, 'Q &gt; 1 (products pile up): E falls')}</g>
${T(560, 230, 18, 'Q = K: E = 0 — dead battery = equilibrium', 'start', '700')}
${T(560, 280, 17, 'slope: −0.0592 / n volts per decade of Q')}
${T(560, 306, 17, '= −0.0296 V per decade for n = 2')}
${T(560, 352, 17, 'Daniell at [Zn²⁺] = 1.0 M, [Cu²⁺] = 0.01 M:')}
${T(560, 378, 17, 'Q = 100 → E = 1.10 − 0.0296 × 2 = 1.04 V', 'start', '700')}
<g class="fig-muted">${T(560, 420, 15, 'every battery dies this way: Q climbs until it reaches K')}</g>
</svg>`

/* 7 — The copper concentration cell: dilute side oxidizes, concentrated side reduces (lead, 1000×460) */
const concentrationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${cellFrame('conc', { blue: true, opacity: 0.05 }, { blue: true, opacity: 0.2 }, 'anions')}
<g class="fig-accent-2">
${T(155, 80, 19, 'Cu — anode (−)', 'start', '700')}
${T(165, 330, 15, 'Cu → Cu²⁺ + 2e⁻')}
</g>
<g class="fig-accent">
${T(595, 80, 19, 'Cu — cathode (+)', 'end', '700')}
${T(590, 330, 15, 'Cu²⁺ + 2e⁻ → Cu', 'end')}
</g>
${T(165, 300, 15, '0.010 M Cu²⁺ (dilute)')}
${T(590, 300, 15, '1.0 M Cu²⁺ (conc.)', 'end')}
<g class="fig-muted">
${T(165, 356, 14, 'tops the dilute side up')}
${T(590, 356, 14, 'uses up the excess', 'end')}
</g>
${T(725, 70, 21, 'same metal, same ion', 'start', '700')}
${T(725, 100, 17, 'only the concentration differs')}
${T(725, 140, 19, 'E° = 0: identical half-cells', 'start', '700')}
${T(725, 168, 15, 'the drive is entropic: equalize [Cu²⁺]')}
<g class="fig-accent">${T(725, 205, 15, 'reduction on the CONCENTRATED side')}</g>
<g class="fig-accent-2">${T(725, 230, 15, 'oxidation on the DILUTE side')}</g>
${T(725, 275, 16, 'E = (0.0592 / n) log(conc / dilute)')}
${T(725, 303, 17, '= 0.0296 × log 100 = 0.059 V', 'start', '700')}
<g class="fig-muted">${T(725, 330, 15, '≈ 59 mV per decade per electron')}</g>
${T(725, 375, 16, 'runs until equal, then E = 0')}
<g class="fig-muted">${T(725, 415, 15, 'neuron: the K⁺ gradient ≈ −90 mV')}</g>
</svg>`

/* 8 — Cell-diagram notation annotated token by token (lead, 1000×460) */
const notationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent">
<defs>${ARROW('arr-ec-note-b')}</defs>
${ARR(150, 62, 760, 62, 'arr-ec-note-b', 4)}
${T(455, 48, 17, 'e⁻ flow through the wire: left → right', 'middle', '700')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-ec-note-m')}</defs>
${T(235, 118, 15, 'phase boundary', 'middle')}${ARR(235, 128, 235, 168, 'arr-ec-note-m', 2)}
${T(668, 118, 15, 'phase boundary', 'middle')}${ARR(668, 128, 668, 168, 'arr-ec-note-m', 2)}
${T(445, 118, 15, 'salt bridge', 'middle')}${ARR(445, 128, 445, 168, 'arr-ec-note-m', 2)}
</g>
${T(150, 210, 32, 'Zn(s)', 'middle', '700')}
${T(235, 210, 32, '|', 'middle')}
${T(335, 210, 32, 'Zn²⁺(aq)', 'middle', '700')}
${T(445, 210, 32, '||', 'middle')}
${T(560, 210, 32, 'Cu²⁺(aq)', 'middle', '700')}
${T(668, 210, 32, '|', 'middle')}
${T(760, 210, 32, 'Cu(s)', 'middle', '700')}
<g class="fig-accent-2">
<path d="M100 226 L100 240 L405 240 L405 226" fill="none" stroke="currentColor" stroke-width="2.5"/>
${T(252, 266, 18, 'anode half-cell — always on the LEFT', 'middle', '700')}
${T(252, 290, 15, 'oxidation: Zn → Zn²⁺ + 2e⁻', 'middle')}
</g>
<g class="fig-accent">
<path d="M495 226 L495 240 L815 240 L815 226" fill="none" stroke="currentColor" stroke-width="2.5"/>
${T(655, 266, 18, 'cathode half-cell — on the RIGHT', 'middle', '700')}
${T(655, 290, 15, 'reduction: Cu²⁺ + 2e⁻ → Cu', 'middle')}
</g>
${T(455, 350, 19, 'E°cell = E°right − E°left = 0.34 − (−0.76) = 1.10 V', 'middle', '700')}
<g class="fig-muted">
${T(455, 386, 15, 'single bar = phase boundary · double bar = salt bridge', 'middle')}
${T(455, 410, 15, 'anode written on the left → the potential comes out with the right sign', 'middle')}
</g>
</svg>`

/* 9 — The potential table as a ladder: F₂ / Ag / Zn / Li (lead, 1000×460). y = 230 − 50·E° */
const ladderSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-ec-ladder')}</defs>
${ARR(100, 420, 100, 58, 'arr-ec-ladder', 2.5)}
<g class="fig-muted">
${T(100, 44, 14, 'E° more positive', 'middle')}
${T(100, 442, 14, 'more negative', 'middle')}
${LINE(96, 230, 104, 230, 2)}${T(92, 235, 14, '0 V', 'end')}
${LINE(140, 87, 440, 87, 2.5)}
${LINE(140, 190, 440, 190, 2.5)}
${LINE(140, 268, 440, 268, 2.5)}
${LINE(140, 382, 440, 382, 2.5)}
<defs>${ARROW('arr-ec-ladder-m')}</defs>
${DARR(126, 90, 126, 379, 'arr-ec-ladder-m')}
<text x="121" y="235" font-size="15" font-weight="700" text-anchor="middle" fill="currentColor" transform="rotate(-90 121 235)">5.91 V</text>
</g>
<g class="fig-accent"><rect x="136" y="60" width="23" height="26" rx="6" fill="currentColor" fill-opacity="0.2"/></g>
<g class="fig-accent-2"><rect x="211" y="355" width="24" height="26" rx="6" fill="currentColor" fill-opacity="0.2"/></g>
${T(140, 79, 18, 'F₂ + 2e⁻ → 2F⁻')}${T(455, 93, 18, '+2.87 V', 'start', '700')}
${T(140, 182, 18, 'Ag⁺ + e⁻ → Ag')}${T(455, 196, 18, '+0.80 V', 'start', '700')}
${T(140, 260, 18, 'Zn²⁺ + 2e⁻ → Zn')}${T(455, 274, 18, '−0.76 V', 'start', '700')}
${T(140, 374, 18, 'Li⁺ + e⁻ → Li')}${T(455, 388, 18, '−3.04 V', 'start', '700')}
<g class="fig-accent">${T(545, 93, 16, '← best oxidizing agent: F₂ is reduced most readily', 'start', '700')}</g>
<g class="fig-accent-2">${T(545, 388, 16, '← best reducing agent: Li metal gives up e⁻ most readily', 'start', '700')}</g>
${T(640, 150, 19, 'read the table like a ladder', 'start', '700')}
${T(640, 186, 16, 'top-LEFT species = best oxidizing agent')}
${T(640, 212, 16, 'bottom-RIGHT species = best reducing agent')}
${T(640, 258, 16, 'biggest battery: top = cathode, bottom = anode')}
${T(640, 288, 18, 'E°cell = 2.87 − (−3.04) = 5.91 V', 'start', '700')}
<g class="fig-muted">${T(640, 338, 15, 'any pair: E°cell = higher − lower; never scale E° by n')}</g>
</svg>`

export const mcatElectrochemistryFigures: DeckFigurePlacement[] = [
  {
    at: 'Anatomy of a Galvanic',
    mode: 'lead',
    figure: {
      svg: galvanicSvg,
      alt:
        'The Daniell cell: a zinc strip (anode, −, red) in colourless Zn²⁺ solution on the left and a copper strip (cathode, +, blue) in blue Cu²⁺ solution on the right, joined by a wire over the top with a blue arrow showing electrons flowing anode → cathode through the wire only, and by a grey salt-bridge tube in which anions (SO₄²⁻) move toward the zinc beaker and cations toward the copper beaker. In the beakers: Zn → Zn²⁺ + 2e⁻, the electrode dissolves; Cu²⁺ + 2e⁻ → Cu, copper plates on and the blue fades. Right column: standard reduction potentials Cu²⁺/Cu +0.34 V → cathode, Zn²⁺/Zn −0.76 V → anode; E°cell = E°cat − E°an = 0.34 − (−0.76) = 1.10 V, positive so spontaneous (ΔG° < 0); electrons travel through the wire only, ions through solution and bridge; the anode shrinks and the cathode grows.',
      caption: 'The Daniell cell: zinc dissolves at the (−) anode, electrons cross the wire to the (+) copper cathode, and salt-bridge ions keep both beakers neutral — 1.10 V at standard conditions.',
    },
    blocks: [
      '- **AN OX / RED CAT**: oxidation at the anode ($-$, dissolves), reduction at the cathode ($+$, plates); electrons take the wire',
      '- Salt bridge: anions → anode beaker, cations → cathode beaker; $E^\\circ_{cell} = 0.34 - (-0.76) = 1.10$ V',
    ],
  },
  {
    at: 'Standard Cell Potential',
    mode: 'lead',
    figure: {
      svg: potentialSvg,
      alt:
        'Left: a vertical E° (reduction) axis with two ladders. Daniell cell: a blue rung Cu²⁺/Cu at +0.34 V (higher → cathode) above a red rung Zn²⁺/Zn at −0.76 V (lower → anode), with a 1.10 V gap arrow between them. Silver/nickel: blue Ag⁺/Ag at +0.80 V above red Ni²⁺/Ni at −0.25 V, gap 1.05 V; note that Ni²⁺ oxidizing Ag as written would be −1.05 V and does not run, while the reverse (Ag⁺ plating onto Ni) runs at +1.05 V. The higher rung is reduced (cathode); E°cell = top − bottom. Right column: E°cell = E°cathode − E°anode with both values taken as reduction potentials straight from the table; higher E° → reduced → cathode; lower E° → oxidized → anode; E°cell > 0 ⇄ ΔG° < 0 → spontaneous; E°cell < 0 ⇄ ΔG° > 0 → needs a push; ΔG° = −nFE°cell, where n and F scale the energy, not the volts; E° is intensive (J per C) and is never multiplied by stoichiometric coefficients.',
      caption: 'Reduction potentials as a ladder: the higher rung runs as the cathode and the cell voltage is the gap between rungs — positive E° means negative ΔG° and a spontaneous cell.',
    },
    blocks: [
      '- $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$, both read as **reduction** values; the higher rung is reduced',
      '- $E^\\circ > 0 \\Leftrightarrow \\Delta G^\\circ = -nFE^\\circ < 0$ (spontaneous); $E^\\circ$ is intensive — never scale it by coefficients',
    ],
  },
  {
    at: 'Electrolytic Cells',
    mode: 'lead',
    figure: {
      svg: electrolyticSvg,
      alt:
        'One beaker of molten NaCl with two electrodes wired to a DC supply drawn as a battery symbol (long plate +, short plate −) in the external circuit; the supply must provide at least |E°cell|. Blue arrows on the wire show electrons pulled out of the left electrode into the + terminal and pushed from the − terminal into the right electrode. The left electrode is the anode (+, red): a Cl⁻ ion drifts toward it and 2Cl⁻ → Cl₂ + 2e⁻ bubbles off chlorine gas. The right electrode is the cathode (−, blue): a Na⁺ ion drifts toward it and Na⁺ + e⁻ → Na deposits sodium metal. Right column: redox driven backward — the supply forces E°cell < 0 (ΔG > 0), electrical energy in and chemical energy stored; never flips: AN OX, RED CAT, electrons enter at the cathode; flips: the anode is now (+) and the cathode (−), because the supply’s + terminal pulls electrons out of the anode and its − terminal pushes them into the cathode; cations drift to the (−) cathode, so plating happens there; molten NaCl gives Na at the cathode and Cl₂ at the anode; in aqueous solution water may react first (H₂, not Na).',
      caption: 'An electrolytic cell: the external supply drives the non-spontaneous reaction, so the electrode signs flip (anode +, cathode −) while AN OX, RED CAT and electrons-enter-at-the-cathode stay put.',
    },
    blocks: [
      '- The supply forces $E_{cell} < 0$, $\\Delta G > 0$: electrical energy in, chemical energy stored (plating, purifying, splitting water)',
      '- Still AN OX / RED CAT, electrons still **enter at the cathode** — only the signs flip: anode $+$, cathode $-$',
    ],
  },
  {
    at: 'The Sign Flip',
    mode: 'replace-table',
    figure: {
      svg: signFlipSvg,
      alt:
        'A six-row grid comparing galvanic and electrolytic cells. Spontaneous? yes (ΔG < 0) versus no — driven (ΔG > 0): flips. Anode does: oxidation in both — never flips (AN OX), row shaded blue. Cathode does: reduction in both — never flips (RED CAT), shaded. Anode sign: − in galvanic, + in electrolytic, with a swap symbol between them: flips. Cathode sign: + in galvanic, − in electrolytic: flips. Electrons enter at: the cathode in both — never flips, shaded. Footer: in an electrolytic cell the supply’s + terminal grabs the anode and its − terminal feeds the cathode.',
      caption: 'Galvanic versus electrolytic: the chemistry rows (AN OX, RED CAT, electrons enter at the cathode) are identical; only spontaneity and the electrode signs flip.',
    },
    blocks: [
      '- **Same in both:** oxidation at the anode, reduction at the cathode, electrons enter at the cathode',
      '- **Flips:** galvanic anode $-$ / cathode $+$; electrolytic anode $+$ / cathode $-$ (the supply’s terminals set the signs)',
      '- Galvanic is spontaneous ($\\Delta G < 0$); electrolytic is driven ($\\Delta G > 0$)',
      '- Electrolytic check: cations drift to the **negative** cathode and get reduced — plating always happens there',
    ],
  },
  {
    at: "Faraday's Laws",
    mode: 'lead',
    figure: {
      svg: faradaySvg,
      alt:
        'Two rows of five boxes joined by arrows. Top row, the general chain: current I (A) × time t (s) → charge Q = It in coulombs → ÷ F → moles of electrons = It/F → ÷ n → moles of metal = mol e⁻ ÷ n → × M → mass = mol × M; notes: F = 96,500 C per mol e⁻, n = electrons per ion (Cu²⁺: 2), M = molar mass. Bottom row, the copper-plating example (2.0 A for 965 s, Cu²⁺ + 2e⁻ → Cu, M = 63.5 g/mol): 2.0 A × 965 s → 1930 C (2% of 96,500) → ÷ 96,500 → 0.020 mol e⁻ → ÷ 2 → 0.010 mol Cu (2 e⁻ per Cu) → × 63.5 → 0.635 g Cu on the cathode. Footer: the metal lands on the cathode, the electrode wired to the supply’s − terminal; for the same charge a 2+ ion gives half the moles of a 1+ ion — the ion’s charge is the exchange rate; doubling I, t or both doubles the deposit.',
      caption: 'Faraday’s law as a chain: amps × seconds → coulombs → ÷ 96,500 → mol e⁻ → ÷ n → mol metal → × M → grams, run with the lesson’s copper-plating numbers (0.635 g).',
    },
    blocks: [
      '- Write the chain, never freelance: $\\text{A}\\cdot\\text{s} \\to \\text{C} \\to \\div F \\to \\text{mol } e^- \\to \\div n \\to \\text{mol metal} \\to \\times M$',
      '- $2.0\\text{ A} \\times 965\\text{ s} = 1930\\text{ C} \\to 0.020\\text{ mol } e^- \\to 0.010\\text{ mol Cu} \\to 0.635$ g; a $2+$ ion deposits half the moles of a $1+$ ion',
    ],
  },
  {
    at: 'Off-Standard Conditions',
    mode: 'lead',
    figure: {
      svg: nernstSvg,
      alt:
        'Graph of cell voltage E (vertical, zoomed to 1.00–1.16 V) against log Q (horizontal, −2 to 3) for the Daniell cell with n = 2: a straight line sloping down to the right, −0.0296 V per decade. A dot at log Q = 0 marks E° = 1.10 V at Q = 1 (dashed guide lines); to the left, Q < 1 gives E > E° (blue); to the right, products pile up and E falls (red), with a red dot at log Q = 2 marking 1.04 V at Q = 100. Right column: E = E° − (0.0592/n) log Q at 25 °C, Q = products over reactants; Q < 1 (reactants enriched): E > E°; Q = 1: E = E°; Q > 1 (products pile up): E falls; Q = K: E = 0 — a dead battery is a cell at equilibrium; slope −0.0592/n volts per decade = −0.0296 V per decade for n = 2; Daniell at [Zn²⁺] = 1.0 M and [Cu²⁺] = 0.01 M: Q = 100 → E = 1.10 − 0.0296 × 2 = 1.04 V; every battery dies this way as Q climbs to K.',
      caption: 'The Nernst equation as a line: each tenfold rise in Q costs 0.0592/n volts — the Daniell cell at Q = 100 reads 1.04 V instead of 1.10 V, and at Q = K it reads zero (E axis zoomed).',
    },
    blocks: [
      '- $E = E^\\circ - \\frac{0.0592}{n}\\log Q$ at 25 °C: products pile up ($Q\\uparrow$) → $E$ falls; reactants enriched ($Q < 1$) → $E > E^\\circ$',
      '- Dead battery = equilibrium: $Q = K$, $E = 0$. Daniell at $Q = 100$: $1.10 - 0.0296 \\times 2 = 1.04$ V',
    ],
  },
  {
    at: 'Concentration Cells',
    mode: 'lead',
    figure: {
      svg: concentrationSvg,
      alt:
        'Two copper electrodes in Cu²⁺ solutions of different strength: the left beaker is faintly blue, 0.010 M Cu²⁺ (dilute), and its copper is the anode (−, red): Cu → Cu²⁺ + 2e⁻ tops the dilute side up. The right beaker is deep blue, 1.0 M Cu²⁺ (concentrated), and its copper is the cathode (+, blue): Cu²⁺ + 2e⁻ → Cu uses up the excess. Electrons cross the wire from the dilute side to the concentrated side; a salt bridge carries anions toward the anode beaker and cations toward the cathode beaker. Right column: same metal, same ion, only the concentration differs; E° = 0 because the half-cells are identical and the drive is entropic — equalize [Cu²⁺]; reduction on the concentrated side, oxidation on the dilute side; E = (0.0592/n) log(conc/dilute) = 0.0296 × log 100 = 0.059 V, about 59 mV per decade per electron; the cell runs until the concentrations are equal, then E = 0; a neuron’s K⁺ gradient gives about −90 mV the same way.',
      caption: 'The copper concentration cell: identical half-cells (E° = 0) driven only by the concentration difference — reduction on the concentrated side, 0.059 V for a hundredfold ratio with n = 2.',
    },
    blocks: [
      '- Identical half-cells → $E^\\circ = 0$; reduction in the **concentrated** beaker, oxidation in the dilute one, until they match',
      '- $E = \\frac{0.0592}{n}\\log\\frac{[\\text{conc}]}{[\\text{dilute}]}$: $0.010$ vs $1.0$ M, $n = 2$ → $0.059$ V (≈ 59 mV per decade per electron)',
    ],
  },
  {
    at: 'Strategy 2 — Read Cell Diagram Notation',
    mode: 'lead',
    figure: {
      svg: notationSvg,
      alt:
        'The cell diagram Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s) written large, with grey pointers labelling each single bar as a phase boundary and the double bar as the salt bridge. A red bracket under Zn(s) | Zn²⁺(aq) reads: anode half-cell, always on the LEFT, oxidation Zn → Zn²⁺ + 2e⁻. A blue bracket under Cu²⁺(aq) | Cu(s) reads: cathode half-cell, on the RIGHT, reduction Cu²⁺ + 2e⁻ → Cu. A blue arrow above runs left to right: electron flow through the wire, left → right. Below: E°cell = E°right − E°left = 0.34 − (−0.76) = 1.10 V; single bar = phase boundary, double bar = salt bridge; with the anode written on the left the potential comes out with the right sign.',
      caption: 'Reading cell notation: anode on the left, cathode on the right, single bars for phase boundaries, the double bar for the salt bridge — electrons run left to right in the wire.',
    },
    blocks: [
      '- $\\text{Zn}(s)\\,|\\,\\text{Zn}^{2+}(aq)\\,||\\,\\text{Cu}^{2+}(aq)\\,|\\,\\text{Cu}(s)$: anode LEFT, cathode RIGHT, always',
      '- Single bar $|$ = phase boundary, double bar $||$ = salt bridge; electrons flow left → right; $E^\\circ_{cell} = E^\\circ_{right} - E^\\circ_{left}$',
    ],
  },
  {
    at: 'Strategy 3 — Work the Potential Table',
    mode: 'lead',
    figure: {
      svg: ladderSvg,
      alt:
        'A four-rung ladder on a vertical E° axis, most positive at the top: F₂ + 2e⁻ → 2F⁻ at +2.87 V; Ag⁺ + e⁻ → Ag at +0.80 V; Zn²⁺ + 2e⁻ → Zn at −0.76 V; Li⁺ + e⁻ → Li at −3.04 V. F₂ on the top-left is highlighted blue: best oxidizing agent, reduced most readily. Li on the bottom-right is highlighted red: best reducing agent, lithium metal gives up electrons most readily. A double-headed arrow spanning the top and bottom rungs is labelled 5.91 V. Right: read the table like a ladder; top-left species = best oxidizing agent; bottom-right species = best reducing agent; the biggest battery pairs the top rung as cathode with the bottom rung as anode, E°cell = 2.87 − (−3.04) = 5.91 V; for any pair E°cell = higher − lower, and E° is never scaled by n.',
      caption: 'The potential table as a ladder (F₂, Ag, Zn, Li): the top-left species is the best oxidizer, the bottom-right the best reducer, and the widest rung-to-rung gap is the biggest possible cell, 5.91 V.',
    },
    blocks: [
      '- Sort by $E^\\circ$: top-LEFT species = best **oxidizing** agent (F₂); bottom-RIGHT species = best **reducing** agent (Li metal, not Li⁺)',
      '- Biggest battery = top rung as cathode, bottom rung as anode: $2.87 - (-3.04) = 5.91$ V; potentials are intensive, never doubled',
    ],
  },
]
