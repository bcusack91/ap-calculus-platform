import type { DeckFigurePlacement } from './index'

/**
 * Physics: Electricity, Magnetism & Optics (7-part survey, MCAT C/P) —
 * figures for the in-class deck. Authored 2026-10-29.
 *
 * The dedicated decks draw Coulomb, field lines, plates, potential and
 * capacitors (Electrostatics); Ohm, series/parallel, Kirchhoff, RC and power
 * (Circuits); fields, forces and induction (Magnetism); reflection, Snell,
 * TIR, ray diagrams and the spectrum (Optics); galvanic vs electrolytic cells
 * (Electrochemistry) — so the survey draws DIFFERENT views: the F–E–U–V map
 * with the formulas that link them, current as charge in motion with the
 * collision picture of resistance, the resistor-vs-capacitor behaviour cheat,
 * the three ways to change a flux, the Snell worked example as wavefronts,
 * the lens sign conventions as a map, the three photoelectric graphs, the
 * Bohr ladder beside an electron-volt scale, and the decay types as moves on
 * a Z–A grid.
 *
 * Every drawing is ours, from the concept; no textbook, prep-company, AAMC or
 * web figure was copied. The only numbers shown are the lesson's own (n =
 * 1.00 / 1.33 and 30° → 22°; −13.6/n² eV, 10.2 eV and 13.6 eV; 500 nm = 2.5 eV,
 * 700 and 400 nm; 3.0 eV on φ = 2.0 eV; e = 1.6 × 10⁻¹⁹ C; ²³⁸U → ²³⁴Th) or
 * derived from them (c/1.33, hc/λ at 700 and 400 nm).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same fig-accent /
 * fig-accent-2 / fig-muted group. Marker ids are unique per figure
 * (arr-elec-<figure>[-colour]).
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
/** Open path (elbows, arcs), optional arrowhead. */
const path = (d: string, marker?: string, w = 2.5, extra = '') =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${w}"${marker ? ` marker-end="url(#${marker})"` : ''}${extra}/>`
/** Subscript inside a <text> (the trailing space restores the baseline). */
const _sb = (s: string) => `<tspan dy="5" font-size="12">${s}</tspan><tspan dy="-5"> </tspan>`
const dot = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`
const panel = (x: number, y: number, w: number, h: number) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="none" stroke="currentColor" stroke-width="2"/>`
const r1 = (n: number) => Math.round(n * 10) / 10

/* 1 — Force, field, energy, potential: one map (lead, 1000×460) */
const mapSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-elec-map')}</defs>
${txt(40, 34, 22, 'Force, field, energy, potential — four quantities, one map', bold)}
<g class="fig-muted">${ctext(190, 78, 14, 'per unit charge (no test charge needed)')}${ctext(470, 78, 14, 'on a charge q placed there')}</g>
${box2(190, 130, 230, 76, 'E = kQ / r²', 'field · vector · N/C = V/m', 20, 13, 0.08)}
${box2(470, 130, 230, 76, 'F = k q₁q₂ / r²', 'force · vector · N', 20, 13, 0.08)}
${box2(190, 300, 230, 76, 'V = kQ / r', 'potential · scalar · volt = J/C', 20, 13, 0.08)}
${box2(470, 300, 230, 76, 'U = k q₁q₂ / r', 'energy · scalar · joule', 20, 13, 0.08)}
<g class="fig-accent"><defs>${ARROW('arr-elec-map-b')}</defs>
${line(310, 130, 350, 130, 'arr-elec-map-b', 3)}${ctext(330, 116, 15, '× q', bold)}
${line(310, 300, 350, 300, 'arr-elec-map-b', 3)}${ctext(330, 286, 15, '× q', bold)}</g>
<g class="fig-muted">${ctext(330, 152, 13, 'F = qE')}${ctext(330, 322, 13, 'U = qV')}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-elec-map-r')}</defs>
<line x1="190" y1="256" x2="190" y2="176" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-elec-map-r)" marker-start="url(#arr-elec-map-r)"/>
<line x1="470" y1="256" x2="470" y2="176" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-elec-map-r)" marker-start="url(#arr-elec-map-r)"/></g>
${txt(202, 210, 15, 'E = −ΔV / Δd', bold)}${txt(482, 210, 15, 'F = −ΔU / Δd', bold)}
<g class="fig-muted">${txt(202, 229, 13, 'the downhill slope of V')}${txt(482, 229, 13, 'the downhill slope of U')}</g>
<g class="fig-muted">${txt(40, 368, 13, 'vectors fall as 1/r² and add tip-to-tail; scalars fall as 1/r and add as plain numbers')}</g>
<g class="fig-muted">${panel(640, 58, 320, 330)}${line(680, 150, 920, 310, undefined, 3)}
${txt(660, 134, 14, 'high V')}${txt(876, 338, 14, 'low V')}</g>
${ctext(800, 88, 18, 'Which way do charges go?', bold)}
<g class="fig-accent"><defs>${ARROW('arr-elec-map-plus')}</defs>
<circle cx="718" cy="162" r="14" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>${ctext(718, 168, 17, '+', bold)}
${line(748, 170, 812, 213, 'arr-elec-map-plus', 3)}${txt(772, 166, 14, '+ slides down', bold)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-elec-map-minus')}</defs>
<circle cx="884" cy="298" r="14" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>${ctext(884, 303, 17, '−', bold)}
${line(852, 288, 788, 245, 'arr-elec-map-minus', 3)}${txt(756, 312, 14, '− climbs up', bold)}</g>
<g class="fig-muted">${ctext(800, 362, 14, 'either way U = qV falls: the field')}${ctext(800, 380, 14, 'does positive work on a free charge')}</g>
${box(500, 425, 900, 40, 'Along an equipotential ΔV = 0, so ΔU = qΔV = 0 — the field does no work moving a charge there', 15, 700, 0.06)}
</svg>`

/* 2 — Current is charge in motion; resistance is what it bumps into (lead, 1000×460) */
const IONS = [100, 150, 200, 250, 300, 350, 400, 450, 500]
const currentSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-elec-cur')}</defs>
${txt(40, 34, 22, 'Current is charge in motion — resistance is what it bumps into', bold)}
<rect x="60" y="110" width="480" height="140" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted">${IONS.map((x) => [138, 176, 214].map((y) => `<circle cx="${x}" cy="${y}" r="6" fill="currentColor" fill-opacity="0.55"/>`).join('')).join('')}
${txt(68, 126, 12, 'fixed lattice ions')}
<line x1="300" y1="110" x2="300" y2="250" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/></g>
<g class="fig-accent"><defs>${ARROW('arr-elec-cur-b')}</defs>
<polyline points="500,150 470,200 440,158 400,208 370,150 330,198 305,162 262,218 222,156 190,202 150,160 122,206" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="500" cy="150" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>${ctext(500, 154, 11, '−', bold)}
<circle cx="122" cy="206" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>${ctext(122, 210, 11, '−', bold)}
${line(430, 266, 170, 266, 'arr-elec-cur-b', 3)}${txt(170, 288, 14, 'electrons drift slowly this way, bouncing off ions', bold)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-elec-cur-r')}</defs>
${line(170, 96, 430, 96, 'arr-elec-cur-r', 3.5)}${txt(170, 80, 15, 'conventional current I — as a + charge would move', bold)}</g>
${ctext(300, 316, 16, 'I = ΔQ / Δt : charge crossing the dashed plane per second', bold)}
<g class="fig-muted">${ctext(300, 336, 13, '1 A = 1 C/s ≈ 6 × 10¹⁸ elementary charges every second')}
${ctext(300, 354, 13, 'opposite arrows, same current: − charges moving left = + current to the right')}</g>
<g class="fig-muted">${panel(580, 58, 380, 300)}</g>
${ctext(770, 88, 18, 'Why there is resistance', bold)}
<rect x="600" y="112" width="340" height="22" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">${[625, 665, 705, 745, 785, 825, 865, 905].map((x) => `<circle cx="${x}" cy="123" r="4" fill="currentColor" fill-opacity="0.6"/>`).join('')}</g>
<g class="fig-accent-2">${txt(600, 154, 14, 'long and thin: many collisions, few lanes → high R', bold)}</g>
<rect x="600" y="172" width="150" height="56" rx="6" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">${[625, 665, 705].map((x) => [186, 200, 214].map((y) => `<circle cx="${x}" cy="${y}" r="4" fill="currentColor" fill-opacity="0.6"/>`).join('')).join('')}</g>
<g class="fig-accent">${txt(600, 250, 13, 'short and thick: few collisions, many lanes → low R', bold)}</g>
${ctext(770, 284, 20, 'R = ρL / A', bold)}
<g class="fig-muted">${ctext(770, 304, 13, 'ρ: the material  ·  L: length  ·  A: cross-section')}
${ctext(770, 330, 14, 'every collision hands energy to the lattice:')}${ctext(770, 348, 14, 'the wire warms — that is P = I²R')}</g>
${box(500, 425, 900, 40, 'Ohm: V pushes, R resists, I results — I = V / R: double the push on the same resistor, double the flow', 15, 700, 0.06)}
</svg>`

/* 3 — Resistor vs capacitor: what each does, how each combines (lead, 1000×460) */
const zig = (x: number, y: number, w = 44) => {
  const s = w / 8
  return `M${x} ${y} l${s} -8 l${s} 16 l${s} -16 l${s} 16 l${s} -16 l${s} 16 l${s} -16 l${s} 8`
}
const cap = (x: number, y: number) =>
  `${line(x - 18, y, x - 4, y, undefined, 2)}${line(x - 4, y - 9, x - 4, y + 9, undefined, 3)}${line(x + 4, y - 9, x + 4, y + 9, undefined, 3)}${line(x + 4, y, x + 18, y, undefined, 2)}`
const elementsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-elec-el')}</defs>
${txt(40, 34, 22, 'Resistor vs capacitor — what each does, and how each combines', bold)}
<g class="fig-muted">${panel(40, 56, 450, 300)}${panel(510, 56, 450, 300)}</g>
<g class="fig-accent-2">${ctext(265, 86, 20, 'Resistor', bold)}</g>
<g class="fig-accent">${ctext(735, 86, 20, 'Capacitor', bold)}</g>
${line(60, 132, 100, 132, undefined, 2.5)}${path(zig(100, 132, 96), undefined, 2.5)}${line(196, 132, 236, 132, undefined, 2.5)}
<g class="fig-accent-2"><defs>${ARROW('arr-elec-el-r')}</defs>${line(64, 160, 232, 160, 'arr-elec-el-r', 2.5)}${txt(64, 178, 12, 'current straight through', bold)}
${path('M120 112 q 6 -7 0 -14 q -6 -7 0 -14', undefined, 2)}${path('M148 112 q 6 -7 0 -14 q -6 -7 0 -14', undefined, 2)}${path('M176 112 q 6 -7 0 -14 q -6 -7 0 -14', undefined, 2)}${txt(192, 92, 12, 'heat', bold)}</g>
${txt(258, 118, 15, 'resists the flow:  V = IR', bold)}
${txt(258, 140, 14, 'energy leaves as heat')}
${txt(258, 160, 14, 'P = IV = I²R = V²/R')}
<g class="fig-muted">${txt(258, 180, 13, 'steady current, no memory')}</g>
${line(560, 132, 604, 132, undefined, 2.5)}${line(604, 104, 604, 160, undefined, 5)}${line(632, 104, 632, 160, undefined, 5)}${line(632, 132, 676, 132, undefined, 2.5)}
<g class="fig-accent"><defs>${ARROW('arr-elec-el-b')}</defs>${txt(588, 100, 13, '+', bold)}${txt(588, 118, 13, '+', bold)}${txt(588, 150, 13, '+', bold)}
${txt(640, 100, 13, '−', bold)}${txt(640, 118, 13, '−', bold)}${txt(640, 150, 13, '−', bold)}
${line(609, 114, 625, 114, 'arr-elec-el-b', 1.5)}${line(609, 132, 625, 132, 'arr-elec-el-b', 1.5)}${line(609, 150, 625, 150, 'arr-elec-el-b', 1.5)}
${txt(560, 180, 12, 'E between the plates', bold)}</g>
${txt(700, 118, 15, 'stores charge:  Q = CV', bold)}
${txt(700, 140, 14, 'energy in the field: U = ½CV²')}
${txt(700, 160, 14, 'no steady DC current once charged')}
<g class="fig-muted">${txt(700, 180, 13, 'V cannot jump: charges on τ = RC')}</g>
<g class="fig-muted">${line(60, 206, 470, 206, undefined, 1.5, ' stroke-dasharray="4 5"')}${line(530, 206, 940, 206, undefined, 1.5, ' stroke-dasharray="4 5"')}</g>
${line(60, 240, 80, 240, undefined, 2)}${path(zig(80, 240), undefined, 2)}${path(zig(124, 240), undefined, 2)}${line(168, 240, 188, 240, undefined, 2)}
${txt(210, 236, 15, 'series:  R = R₁ + R₂', bold)}${txt(210, 254, 13, 'one lane, more obstacles — R grows')}
${line(60, 304, 80, 304, undefined, 2)}${line(80, 288, 80, 320, undefined, 2)}${path(zig(80, 288, 88), undefined, 2)}${path(zig(80, 320, 88), undefined, 2)}${line(168, 288, 168, 320, undefined, 2)}${line(168, 304, 188, 304, undefined, 2)}
${txt(210, 300, 15, 'parallel:  1/R = 1/R₁ + 1/R₂', bold)}${txt(210, 318, 13, 'more lanes — R drops below the smallest')}
${line(530, 304, 554, 304, undefined, 2)}${line(554, 288, 554, 320, undefined, 2)}${cap(590, 288)}${cap(590, 320)}${line(626, 288, 626, 320, undefined, 2)}${line(626, 304, 650, 304, undefined, 2)}${line(554, 288, 572, 288, undefined, 2)}${line(554, 320, 572, 320, undefined, 2)}${line(608, 288, 626, 288, undefined, 2)}${line(608, 320, 626, 320, undefined, 2)}
${txt(680, 300, 15, 'parallel:  C = C₁ + C₂', bold)}${txt(680, 318, 13, 'plates side by side = more area — C grows')}
${line(530, 240, 554, 240, undefined, 2)}${cap(572, 240)}${cap(614, 240)}${line(632, 240, 650, 240, undefined, 2)}
${txt(680, 236, 15, 'series:  1/C = 1/C₁ + 1/C₂', bold)}${txt(680, 254, 13, 'plates farther apart — C drops')}
<g class="fig-muted">${ctext(500, 385, 14, 'the combining rules run OPPOSITE: resistors add in series, capacitors add in parallel')}</g>
${box(500, 425, 900, 40, 'C = Q/V is set by geometry (area, gap, dielectric) — not by how much charge you put on it', 15, 700, 0.06)}
</svg>`

/* 4 — Faraday: three ways to change a flux (lead, 1000×460) */
const loop = (cx: number, cy: number, rx: number, ry: number, w = 3) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="${w}"/>`
const bArrows = (xs: number[], cy: number, marker: string, w = 2, below = 46) => xs.map((x) => line(x, cy + below, x, cy - 46, marker, w)).join('')
const fluxSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-elec-flux')}</defs>
${txt(40, 34, 22, 'Faraday: an EMF needs a CHANGING flux Φ = BA cosθ — three ways to change it', bold)}
<g class="fig-muted">${panel(40, 56, 300, 310)}${panel(350, 56, 300, 310)}${panel(660, 56, 300, 310)}</g>
${ctext(190, 86, 19, 'change B', bold)}${ctext(500, 86, 19, 'change the area A', bold)}${ctext(810, 86, 19, 'change the angle θ', bold)}
<g class="fig-muted">${ctext(190, 110, 16, 'Φ = <tspan font-weight="700" font-size="20">B</tspan> · A · cosθ')}${ctext(500, 110, 16, 'Φ = B · <tspan font-weight="700" font-size="20">A</tspan> · cosθ')}${ctext(810, 110, 16, 'Φ = B · A · <tspan font-weight="700" font-size="20">cosθ</tspan>')}</g>
<g class="fig-accent"><defs>${ARROW('arr-elec-flux-b')}</defs>
${bArrows([106, 134], 210, 'arr-elec-flux-b')}${bArrows([236, 252, 268, 284], 210, 'arr-elec-flux-b', 2.5, 34)}
${bArrows([394, 418, 442, 466], 210, 'arr-elec-flux-b')}${bArrows([575], 210, 'arr-elec-flux-b')}
${bArrows([716, 740, 764], 210, 'arr-elec-flux-b')}${bArrows([862, 898], 210, 'arr-elec-flux-b')}
${txt(60, 170, 13, 'B', bold)}${txt(372, 170, 13, 'B', bold)}${txt(680, 170, 13, 'B', bold)}</g>
${loop(120, 210, 52, 20)}${loop(260, 210, 52, 20)}
${loop(430, 210, 62, 24)}${loop(575, 210, 26, 10)}
${loop(740, 210, 52, 20)}<g transform="rotate(-55 880 210)">${loop(880, 210, 52, 20)}</g>
<g class="fig-accent-2"><defs>${ARROW('arr-elec-flux-r')}</defs>
${path('M214 214 A52 20 0 0 1 306 214', 'arr-elec-flux-r', 2.5)}${ctext(260, 260, 13, 'induced I', bold)}
${line(880, 210, 846, 186, 'arr-elec-flux-r', 2.5)}${txt(828, 180, 14, 'n', bold)}${path('M880 184 A26 26 0 0 0 859 195', undefined, 1.5)}${txt(870, 178, 13, 'θ', bold)}</g>
${line(176, 210, 204, 210, 'arr-elec-flux')}${line(500, 210, 540, 210, 'arr-elec-flux')}${line(798, 210, 822, 210, 'arr-elec-flux')}
<g class="fig-muted">${ctext(120, 280, 13, 'B')}${ctext(260, 280, 13, 'B grows: more lines through')}
${ctext(430, 280, 13, 'A')}${ctext(575, 280, 13, 'A shrinks: fewer lines')}
${ctext(740, 280, 13, 'face-on, cosθ = 1')}${ctext(880, 280, 13, 'turned: cosθ falls')}
${ctext(190, 318, 14, 'a magnet moved toward the loop,')}${ctext(190, 336, 14, 'or a nearby current switched on')}
${ctext(500, 318, 14, 'a loop squeezed, or a bar sliding')}${ctext(500, 336, 14, 'on rails changes the enclosed area')}
${ctext(810, 318, 14, 'a generator: the loop spins in B,')}${ctext(810, 336, 14, 'so Φ swings and the EMF alternates')}</g>
${box(500, 398, 900, 40, 'ε = −ΔΦ/Δt  ·  Lenz: the induced current makes its own field to OPPOSE the change in flux', 16, 700, 0.1)}
<g class="fig-muted">${ctext(500, 440, 14, 'a strong but steady flux induces nothing — only the rate of change counts')}</g>
</svg>`

/* 5 — The Snell worked example as wavefronts (after, 1000×460) */
const BX = 300, BY = 250
const sinI = 0.5, cosI = 0.866, sinR = 0.375, cosR = 0.927
const fronts = (x0: number, y0: number, dx: number, dy: number, spacing: number, count: number, half: number, w: number) => {
  let out = ''
  for (let k = 1; k <= count; k++) {
    const cx = x0 + dx * spacing * k, cy = y0 + dy * spacing * k
    out += line(r1(cx - dy * half), r1(cy + dx * half), r1(cx + dy * half), r1(cy - dx * half), undefined, w)
  }
  return out
}
const IN0 = { x: BX - sinI * 200, y: BY - cosI * 200 }
const snellSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-elec-sn')}</defs>
${txt(40, 34, 22, 'The worked example as wavefronts: f is fixed, so λ and v shrink by n', bold)}
<g class="fig-accent"><rect x="40" y="${BY}" width="520" height="150" rx="0" fill="currentColor" fill-opacity="0.08" stroke="none"/></g>
${line(40, BY, 560, BY, undefined, 2.5)}
<g class="fig-muted"><line x1="${BX}" y1="66" x2="${BX}" y2="400" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/>${txt(306, 80, 13, 'normal')}</g>
${txt(52, 92, 16, 'air   n₁ = 1.00', bold)}${txt(52, 390, 16, 'water   n₂ = 1.33', bold)}
<g class="fig-accent-2"><defs>${ARROW('arr-elec-sn-r')}</defs>
${line(r1(IN0.x), r1(IN0.y), r1(BX - sinI * 8), r1(BY - cosI * 8), 'arr-elec-sn-r', 3)}
${fronts(IN0.x, IN0.y, sinI, cosI, 36, 5, 40, 1.8)}
${txt(104, 160, 15, 'λ₁', bold)}${txt(132, 60, 14, 'incident ray, 30° from the normal', bold)}
${path(`M${BX} 190 A60 60 0 0 0 ${r1(BX - sinI * 60)} ${r1(BY - cosI * 60)}`, undefined, 2)}${txt(272, 182, 15, '30°', bold)}</g>
<g class="fig-accent"><defs>${ARROW('arr-elec-sn-b')}</defs>
${line(BX, BY, r1(BX + sinR * 160), r1(BY + cosR * 160), 'arr-elec-sn-b', 3)}
${fronts(BX, BY, sinR, cosR, 27, 5, 34, 1.8)}
${txt(400, 346, 15, 'λ₂ = λ₁ / 1.33', bold)}${txt(380, 392, 14, 'refracted ray, 22°', bold)}
${path(`M${BX} 310 A60 60 0 0 0 ${r1(BX + sinR * 60)} ${r1(BY + cosR * 60)}`, undefined, 2)}${rtext(292, 334, 15, '22°', bold)}</g>
<g class="fig-muted">${panel(600, 58, 360, 320)}</g>
${ctext(780, 88, 18, 'Across the boundary', bold)}
${txt(620, 124, 15, 'frequency f', bold)}${txt(620, 143, 14, 'unchanged — the source sets it')}
${txt(620, 176, 15, 'speed v = c / n', bold)}${txt(620, 195, 14, '3.0 × 10⁸ → 2.3 × 10⁸ m/s')}
${txt(620, 228, 15, 'wavelength λ = v / f', bold)}${txt(620, 247, 14, 'shrinks by 1/1.33 — fronts bunch up')}
${txt(620, 280, 15, 'direction', bold)}${txt(620, 299, 14, 'bends toward the normal: 30° → 22°')}
${box(780, 346, 330, 40, 'sinθ₂ = 1.00·sin30° / 1.33 = 0.376 → 22°', 15, 700, 0.1)}
${box(500, 428, 900, 38, 'Into a denser medium: slower, shorter wavelength, same frequency — and the ray bends TOWARD the normal', 15, 700, 0.06)}
</svg>`

/* 6 — Sign conventions as a map (replace-table, 560×440) */
const signSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-elec-sign')}</defs>
${txt(20, 30, 18, 'Signs follow where the light actually goes', bold)}
<g class="fig-muted"><defs>${ARROW('arr-elec-sign-m')}</defs>${line(30, 150, 530, 150, undefined, 1.5, ' stroke-dasharray="5 5"')}
${line(36, 62, 110, 62, 'arr-elec-sign-m', 2.5)}${txt(118, 66, 13, 'light arrives from the left')}</g>
<path d="M280 84 Q304 150 280 216 Q256 150 280 84 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
${ctext(280, 236, 13, 'lens (or mirror)', bold)}
${line(170, 150, 170, 116, 'arr-elec-sign', 3)}${ctext(170, 108, 13, 'object', bold)}
${ctext(150, 92, 15, 'd<tspan dy="4" font-size="11">o</tspan><tspan dy="-4"> </tspan>&gt; 0: object side', bold)}
<g class="fig-accent-2"><defs>${ARROW('arr-elec-sign-r')}</defs><line x1="84" y1="150" x2="84" y2="104" stroke="currentColor" stroke-width="3" stroke-dasharray="6 4" marker-end="url(#arr-elec-sign-r)"/>
${ctext(84, 176, 13, 'virtual image', bold)}${ctext(84, 194, 13, 'd<tspan dy="4" font-size="10">i</tspan><tspan dy="-4"> </tspan>&lt; 0, upright (m &gt; 0)')}</g>
<g class="fig-accent"><defs>${ARROW('arr-elec-sign-b')}</defs>${line(440, 150, 440, 196, 'arr-elec-sign-b', 3)}
${ctext(440, 120, 13, 'real image', bold)}${ctext(440, 102, 13, 'd<tspan dy="4" font-size="10">i</tspan><tspan dy="-4"> </tspan>&gt; 0, inverted (m &lt; 0)')}
${ctext(420, 220, 13, 'light really arrives here')}</g>
${txt(24, 268, 15, 'f &gt; 0  converging: convex lens, concave mirror', bold)}
${txt(24, 292, 15, 'f &lt; 0  diverging: concave lens, convex mirror', bold)}
<path d="M520 258 Q532 272 520 286 Q508 272 520 258 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
<path d="M512 282 Q520 296 512 310 M528 282 Q520 296 528 310" fill="none" stroke="currentColor" stroke-width="2"/>
${txt(24, 322, 15, 'm = −d<tspan dy="4" font-size="11">i</tspan><tspan dy="-4"> </tspan>/ d<tspan dy="4" font-size="11">o</tspan><tspan dy="-4"> </tspan>:  + upright, − inverted;  |m| = size ratio', bold)}
<g class="fig-muted">${txt(24, 350, 13, 'diverging elements always: virtual, upright, reduced')}
${txt(24, 372, 13, 'for a mirror the "real" side is in FRONT — where the')}${txt(24, 390, 13, 'reflected light goes; behind the mirror is virtual')}
${txt(24, 420, 13, 'read the sign of d<tspan dy="4" font-size="10">i</tspan><tspan dy="-4"> </tspan>and m BEFORE describing the image')}</g>
</svg>`

/* 7 — Photoelectric effect: the three graphs (lead, 1000×460) */
const photoSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-elec-ph')}</defs>
${txt(40, 34, 22, 'Photoelectric effect: frequency sets the energy, intensity sets the number', bold)}
<g class="fig-muted">${line(120, 400, 120, 80, 'arr-elec-ph', 2)}${line(120, 330, 470, 330, 'arr-elec-ph', 2)}
<line x1="210" y1="330" x2="210" y2="110" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/></g>
${txt(128, 84, 16, 'KE<tspan dy="4" font-size="11">max</tspan>', bold)}${txt(474, 336, 16, 'f', bold)}
<g class="fig-accent-2"><rect x="121" y="112" width="89" height="217" fill="currentColor" fill-opacity="0.08" stroke="none"/>
${ctext(162, 200, 11.5, 'no electrons,', bold)}${ctext(162, 216, 11.5, 'however bright', bold)}
<line x1="120" y1="400" x2="210" y2="330" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>${rtext(112, 404, 15, '−φ', bold)}</g>
<g class="fig-accent">${line(210, 330, 440, 151, undefined, 3.5)}${txt(290, 112, 20, 'KE<tspan dy="5" font-size="13">max</tspan><tspan dy="-5"> </tspan>= hf − φ', bold)}
${txt(290, 292, 14, 'slope = h,', bold)}${txt(290, 310, 14, 'the same for every metal', bold)}</g>
${ctext(252, 352, 15, 'f₀ = φ / h', bold)}
<g class="fig-muted">${ctext(252, 370, 13, 'threshold frequency')}${txt(152, 394, 13, 'intercept −φ = work function')}</g>
<g class="fig-muted">${panel(520, 58, 440, 356)}</g>
${ctext(740, 86, 17, 'Above f₀, turn the intensity up:', bold)}
<g class="fig-muted">${line(580, 220, 580, 108, 'arr-elec-ph', 2)}${line(580, 220, 900, 220, 'arr-elec-ph', 2)}${ctext(870, 240, 13, 'intensity')}
${line(580, 390, 580, 278, 'arr-elec-ph', 2)}${line(580, 390, 900, 390, 'arr-elec-ph', 2)}${ctext(870, 408, 13, 'intensity')}</g>
${txt(588, 112, 14, 'electrons per second', bold)}${txt(588, 282, 14, 'KE<tspan dy="4" font-size="10">max</tspan><tspan dy="-4"> </tspan>of each electron', bold)}
<g class="fig-accent">${line(580, 220, 880, 124, undefined, 3.5)}${txt(592, 140, 14, 'more photons → more electrons', bold)}
${line(580, 322, 880, 322, undefined, 3.5)}${txt(700, 310, 14, 'flat: each photon still carries hf', bold)}</g>
<g class="fig-accent-2"><line x1="582" y1="218" x2="880" y2="218" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 5"/>${txt(740, 206, 13, 'below f₀: zero, however bright', bold)}</g>
<g class="fig-muted">${ctext(740, 362, 13, 'to raise the KE, raise the frequency — not the brightness')}</g>
${box(500, 432, 900, 36, 'Example: a 3.0 eV photon on a metal with φ = 2.0 eV ejects electrons with KE = 1.0 eV; a photon under 2.0 eV ejects none', 14, 700, 0.06)}
</svg>`

/* 8 — Bohr's ladder in electron-volts, beside an eV scale (lead, 1000×460) */
const EY = (e: number) => r1(90 + (-e / 13.6) * 290)
const LEVELS: Array<[string, number, string]> = [['n = ∞', 0, '0 eV (free)'], ['n = 4', -0.85, '−0.85 eV'], ['n = 3', -1.51, '−1.51 eV'], ['n = 2', -3.4, '−3.4 eV'], ['n = 1', -13.6, '−13.6 eV']]
const SY = (e: number) => r1(396 - e * 20.5)
const bohrSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-elec-bohr')}</defs>
${txt(40, 34, 22, 'Bohr’s hydrogen ladder in electron-volts: a photon carries exactly the gap', bold)}
${LEVELS.map(([_n, e]) => line(140, EY(e), 420, EY(e), undefined, e === 0 ? 1.5 : 3, e === 0 ? ' stroke-dasharray="6 5"' : '')).join('')}
${rtext(132, EY(0) - 2, 14, 'n = ∞   0 eV (free)', bold)}
${rtext(132, EY(-0.85) + 2, 12, 'n = 4   −0.85 eV', bold)}
${rtext(132, EY(-1.51) + 12, 12, 'n = 3   −1.51 eV', bold)}
${rtext(132, EY(-3.4) + 5, 14, 'n = 2   −3.4 eV', bold)}
${rtext(132, EY(-13.6) + 5, 14, 'n = 1   −13.6 eV', bold)}
<g class="fig-accent-2"><defs>${ARROW('arr-elec-bohr-r')}</defs>${line(200, EY(-3.4) + 4, 200, EY(-13.6) - 6, 'arr-elec-bohr-r', 3.5)}
${txt(212, 258, 16, 'drop 2 → 1 emits', bold)}${txt(212, 278, 14, 'hf = (−3.4) − (−13.6)')}${txt(212, 298, 15, '= 10.2 eV (ultraviolet)', bold)}</g>
<g class="fig-accent"><defs>${ARROW('arr-elec-bohr-b')}</defs>${line(400, EY(-13.6) - 4, 400, EY(0) + 6, 'arr-elec-bohr-b', 3.5)}
${txt(412, 236, 15, 'absorb 13.6 eV', bold)}${txt(412, 255, 14, '→ electron freed')}${txt(412, 273, 14, '(ionization)')}</g>
<g class="fig-muted">${ctext(300, 148, 13, 'levels crowd together toward 0')}</g>
${ctext(280, 420, 17, 'Eₙ = −13.6 / n² eV   ·   E<tspan dy="5" font-size="12">photon</tspan><tspan dy="-5"> </tspan>= hf = E<tspan dy="5" font-size="12">high</tspan><tspan dy="-5"> </tspan>− E<tspan dy="5" font-size="12">low</tspan>', bold)}
<g class="fig-muted">${panel(600, 58, 360, 370)}</g>
${ctext(780, 80, 18, 'The electron-volt scale', bold)}
<g class="fig-muted">${line(690, SY(0), 690, SY(14), undefined, 2.5)}
${[0, 2, 4, 6, 8, 10, 12, 14].map((e) => `${line(684, SY(e), 696, SY(e), undefined, 2)}${rtext(678, SY(e) + 4, 12, e === 14 ? '14 eV' : String(e))}`).join('')}</g>
<g class="fig-accent"><rect x="692" y="${SY(3.1)}" width="20" height="${r1(SY(1.8) - SY(3.1))}" fill="currentColor" fill-opacity="0.25" stroke="none"/>
${txt(720, SY(2.5) - 4, 14, 'visible light 1.8 – 3.1 eV (700 → 400 nm)', bold)}${txt(720, SY(2.5) + 14, 13, 'green 500 nm → 2.5 eV (worked example)')}</g>
${dot(690, SY(1), 5)}${txt(720, SY(1) + 8, 13, '1 eV = 1.6 × 10⁻¹⁹ J: one e across 1 V')}
<g class="fig-accent-2">${dot(690, SY(10.2), 5)}${txt(720, SY(10.2) + 5, 14, 'H  n = 2 → 1 photon: 10.2 eV', bold)}</g>
${dot(690, SY(13.6), 5)}${txt(720, SY(13.6) + 5, 14, 'ionize H from n = 1: 13.6 eV', bold)}
<g class="fig-muted">${ctext(800, 420, 13, 'the eV: a handy unit for single particles')}</g>
</svg>`

/* 9 — Decay types as moves on a Z–A grid (replace-table, 560×440) */
const GX0 = 150, GY0 = 50, CELL = 40
const cellC = (col: number, row: number) => ({ x: GX0 + col * CELL + CELL / 2, y: GY0 + row * CELL + CELL / 2 })
const PARENT = cellC(3, 1), ALPHA = cellC(1, 5), BMINUS = cellC(4, 1), BPLUS = cellC(2, 1)
const decaySvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-elec-dec')}</defs>
${txt(20, 28, 18, 'Where each decay moves the nucleus on a Z–A grid', bold)}
<g class="fig-muted">${[0, 1, 2, 3, 4, 5, 6].map((i) => `${line(GX0 + i * CELL, GY0, GX0 + i * CELL, GY0 + 6 * CELL, undefined, 1)}${line(GX0, GY0 + i * CELL, GX0 + 6 * CELL, GY0 + i * CELL, undefined, 1)}`).join('')}
${['Z−3', 'Z−2', 'Z−1', 'Z', 'Z+1', 'Z+2'].map((s, i) => ctext(cellC(i, 0).x, GY0 + 6 * CELL + 16, 12, s)).join('')}
${['A+1', 'A', 'A−1', 'A−2', 'A−3', 'A−4'].map((s, i) => rtext(GX0 - 6, cellC(0, i).y + 4, 12, s)).join('')}
${ctext(GX0 + 3 * CELL, GY0 + 6 * CELL + 34, 13, 'Z, protons →')}${txt(60, 160, 13, 'A, mass')}${txt(60, 176, 13, 'number ↑')}</g>
<rect x="${PARENT.x - 19}" y="${PARENT.y - 19}" width="38" height="38" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2"/>${ctext(PARENT.x, PARENT.y + 5, 12, 'parent', bold)}
<g class="fig-accent-2"><defs>${ARROW('arr-elec-dec-r')}</defs>
<rect x="${ALPHA.x - 19}" y="${ALPHA.y - 19}" width="38" height="38" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>${ctext(ALPHA.x, ALPHA.y + 6, 16, 'α', bold)}
${line(PARENT.x - 12, PARENT.y + 20, ALPHA.x + 14, ALPHA.y - 22, 'arr-elec-dec-r', 3)}${txt(262, 196, 14, '−2 Z', bold)}${txt(262, 214, 14, '−4 A', bold)}</g>
<g class="fig-accent"><defs>${ARROW('arr-elec-dec-b')}</defs>
<rect x="${BMINUS.x - 19}" y="${BMINUS.y - 19}" width="38" height="38" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>${ctext(BMINUS.x, BMINUS.y + 6, 15, 'β⁻', bold)}
<rect x="${BPLUS.x - 19}" y="${BPLUS.y - 19}" width="38" height="38" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2"/>${ctext(BPLUS.x, BPLUS.y + 6, 15, 'β⁺', bold)}
${line(PARENT.x + 20, PARENT.y - 26, BMINUS.x + 4, BMINUS.y - 26, 'arr-elec-dec-b', 2.5)}${line(PARENT.x - 20, PARENT.y - 26, BPLUS.x - 4, BPLUS.y - 26, 'arr-elec-dec-b', 2.5)}</g>
<g class="fig-muted">${path(`M${PARENT.x + 8} ${PARENT.y - 48} A10 10 0 1 0 ${PARENT.x - 8} ${PARENT.y - 48}`, 'arr-elec-dec', 2)}${txt(PARENT.x + 24, PARENT.y - 44, 13, 'γ: stays put', bold)}</g>
<g class="fig-accent-2">${txt(20, 352, 14, 'α   emits ⁴₂He:  A − 4,  Z − 2    (²³⁸U → ²³⁴Th)', bold)}</g>
<g class="fig-accent">${txt(20, 376, 14, 'β⁻  n → p + e⁻:  A same,  Z + 1', bold)}${txt(20, 398, 14, 'β⁺  p → n + e⁺:  A same,  Z − 1', bold)}</g>
${txt(20, 420, 14, 'γ   a photon only:  A and Z unchanged, nucleus relaxes', bold)}
</svg>`

export const mcatElectricityFigures: DeckFigurePlacement[] = [
  {
    at: 'Electric Potential Energy',
    mode: 'lead',
    figure: {
      svg: mapSvg,
      alt:
        'A two-by-two map. Top row, vectors falling as 1/r²: E = kQ/r² (field, N/C = V/m) and F = kq₁q₂/r² (force, N). Bottom row, scalars falling as 1/r: V = kQ/r (potential, volts = J/C) and U = kq₁q₂/r (energy, joules). Blue arrows labelled × q link each per-unit-charge quantity to its on-a-charge partner: F = qE and U = qV. Red double arrows link the rows: E = −ΔV/Δd (the field is the downhill slope of V) and F = −ΔU/Δd (the force is the downhill slope of U). Right panel, which way do charges go: on a slope from high V to low V a positive charge slides down and a negative charge climbs up; either way U = qV falls and the field does positive work on a free charge. Footer: along an equipotential ΔV = 0 so ΔU = qΔV = 0 — the field does no work moving a charge there.',
      caption: 'The four electrostatic quantities as one map: × q turns E into F and V into U; the field and force are the downhill slopes of V and U — so + charges run down in V and − charges run up.',
    },
    blocks: [
      '- Per unit charge: $E = kQ/r^2$, $V = kQ/r$; on a charge $q$: $F = qE$, $U = qV$',
      '- Vectors fall as $1/r^2$, scalars as $1/r$; $+$ charges run downhill in $V$, $-$ charges uphill',
    ],
  },
  {
    at: "Ohm's Law",
    mode: 'lead',
    figure: {
      svg: currentSvg,
      alt:
        'Left: a wire drawn as a rounded bar with a grid of fixed lattice ions (grey dots). A blue zigzag path shows one electron bouncing from ion to ion while drifting slowly to the left; a blue arrow says electrons drift slowly this way, bouncing off ions. Above the wire a red arrow points right: conventional current I — the way a + charge would move. A dashed plane across the wire: I = ΔQ/Δt is the charge crossing it per second; 1 A = 1 C/s ≈ 6 × 10¹⁸ elementary charges every second; opposite arrows, same current — negative charges moving left equal positive current to the right. Right panel, why there is resistance: a long thin wire with many ions in a single row (long and thin: many collisions, few lanes → high R, in red) and a short thick wire (short and thick: few collisions, many lanes → low R, in blue); R = ρL/A with ρ the material, L the length and A the cross-section; every collision hands energy to the lattice — the wire warms, that is P = I²R. Footer: Ohm — V pushes, R resists, I results; I = V/R: double the push on the same resistor, double the flow.',
      caption: 'Current is charge crossing a plane per second (electrons drift one way, conventional current points the other); resistance is the collisions with the lattice, which is also where the I²R heat comes from.',
    },
    blocks: [
      '- $I = \\Delta Q/\\Delta t$ (1 A = 1 C/s); conventional current runs as $+$ charge would, opposite the electrons',
      '- Lattice collisions = resistance ($R = \\rho L/A$) and heat ($P = I^2R$); $V = IR$: double push, double flow',
    ],
  },
  {
    at: 'Capacitors',
    mode: 'lead',
    figure: {
      svg: elementsSvg,
      alt:
        'Two panels. Resistor (red header): a zigzag symbol with a current arrow passing straight through and heat wisps rising from it; resists the flow, V = IR; energy leaves as heat, P = IV = I²R = V²/R; steady current, no memory. Capacitor (blue header): two parallel plates, + on the left plate, − on the right, with field arrows E between the plates; stores charge Q = CV; energy in the field U = ½CV²; no steady DC current once charged; V cannot jump, it charges on τ = RC. Below each, the combining rules with small circuit symbols: resistors in series R = R₁ + R₂ (one lane, more obstacles — R grows), in parallel 1/R = 1/R₁ + 1/R₂ (more lanes — R drops below the smallest); capacitors in series 1/C = 1/C₁ + 1/C₂ (plates farther apart — C drops), in parallel C = C₁ + C₂ (plates side by side = more area — C grows). The combining rules run opposite: resistors add in series, capacitors add in parallel. Footer: C = Q/V is set by geometry (area, gap, dielectric), not by how much charge you put on it.',
      caption: 'A resistor passes current and turns energy into heat; a capacitor stops steady current and stores energy in its field — and their combining rules run opposite ways.',
    },
    blocks: [
      '- Resistor: passes current ($V = IR$), makes heat; capacitor: blocks DC, holds $Q = CV$, $U = \\tfrac12 CV^2$',
      '- Opposite rules: resistors add in series; capacitors add in parallel (side-by-side plates = more area)',
    ],
  },
  {
    at: 'Electromagnetic Induction',
    mode: 'lead',
    figure: {
      svg: fluxSvg,
      alt:
        'Three panels, each a before-and-after pair of loops threaded by blue vertical field arrows, with the changed factor of Φ = B·A·cosθ in bold. Change B: the same loop with two field lines, then four thicker ones — B grows, more lines through; a red arrow around the second loop is the induced current; caused by a magnet moved toward the loop or a nearby current switched on. Change the area A: a large loop with four lines through it, then a small loop with one — A shrinks, fewer lines; a loop squeezed, or a bar sliding on rails, changes the enclosed area. Change the angle θ: a face-on loop (cosθ = 1), then the same loop turned, its normal n at angle θ to the field — cosθ falls; a generator spins the loop in B so Φ swings and the EMF alternates. Below: ε = −ΔΦ/Δt; Lenz: the induced current makes its own field to oppose the change in flux; a strong but steady flux induces nothing — only the rate of change counts.',
      caption: 'Flux Φ = BA cosθ has three knobs — field, area, angle — and an EMF appears only while one of them is changing; Lenz says the induced current fights that change.',
    },
    blocks: [
      '- $\\Phi = BA\\cos\\theta$: change $B$, $A$ or $\\theta$; $\\varepsilon = -\\Delta\\Phi/\\Delta t$; no change, no EMF',
      '- Lenz: the induced current opposes the change (an approaching north pole meets an induced north pole)',
    ],
  },
  {
    at: 'Worked Example — Snell',
    mode: 'after',
    figure: {
      svg: snellSvg,
      alt:
        'Left: a horizontal boundary between air (n₁ = 1.00, above) and water (n₂ = 1.33, below, tinted blue), with a dashed normal. A red incident ray comes down from the upper left at 30° from the normal, crossed by evenly spaced red wavefronts a wavelength λ₁ apart. Below the surface the blue refracted ray continues at 22° from the normal, closer to the normal, and its wavefronts are bunched up: λ₂ = λ₁/1.33. Right panel, across the boundary: frequency f unchanged — the source sets it; speed v = c/n, 3.0 × 10⁸ → 2.3 × 10⁸ m/s; wavelength λ = v/f shrinks by 1/1.33 — fronts bunch up; direction bends toward the normal, 30° → 22°; sinθ₂ = 1.00·sin30°/1.33 = 0.376 → 22°. Footer: into a denser medium — slower, shorter wavelength, same frequency, and the ray bends toward the normal.',
      caption: 'The worked example drawn as waves: the fronts keep their rhythm (f fixed) but bunch up in water (λ and v fall by 1.33), which is why the ray turns toward the normal — 30° in, 22° out.',
    },
  },
  {
    at: 'Sign Conventions',
    mode: 'replace-table',
    figure: {
      svg: signSvg,
      alt:
        'A lens on a horizontal axis with light arriving from the left. Left of the lens is the object side: d_o > 0 for the object there; a dashed red upright arrow there is a virtual image, d_i < 0, upright (m > 0). Right of the lens, where the light really arrives, a blue inverted arrow is a real image, d_i > 0, inverted (m < 0). Below: f > 0 converging — convex lens, concave mirror (a convex-lens icon); f < 0 diverging — concave lens, convex mirror (a concave-lens icon); m = −d_i/d_o: + upright, − inverted, |m| = size ratio. Notes: diverging elements always give virtual, upright, reduced images; for a mirror the real side is in front, where the reflected light goes, and behind the mirror is virtual; read the sign of d_i and m before describing the image.',
      caption: 'The sign table as a map: real images form where the light actually goes (beyond a lens, in front of a mirror) and carry d_i > 0; virtual images sit on the object side with d_i < 0.',
    },
    blocks: [
      '- $d_o > 0$: object on the incoming side',
      '- $d_i > 0$ real (light gets there); $d_i < 0$ virtual (object side)',
      '- $f > 0$ converging (convex lens, concave mirror); $f < 0$ diverging',
      '- $m = -d_i/d_o$: sign → upright or inverted, $|m|$ → size',
    ],
  },
  {
    at: 'Photoelectric Effect',
    mode: 'lead',
    figure: {
      svg: photoSvg,
      alt:
        'Left graph: maximum kinetic energy of the ejected electrons against light frequency f. Below the threshold f₀ = φ/h the region is shaded red: no electrons, however bright. From f₀ a blue straight line rises, KE_max = hf − φ, slope = h, the same for every metal; extended backwards (dashed red) it meets the energy axis at −φ, the work function. Right panel, above f₀ turn the intensity up: top graph, electrons per second against intensity rises as a straight line — more photons, more electrons — while a dashed red line at zero shows below f₀ it stays zero however bright; bottom graph, KE_max of each electron against intensity is flat — each photon still carries hf. To raise the KE, raise the frequency, not the brightness. Footer: a 3.0 eV photon on a metal with φ = 2.0 eV ejects electrons with KE = 1.0 eV; a photon under 2.0 eV ejects none.',
      caption: 'Three graphs tell the whole photoelectric story: KE rises with frequency from a threshold (slope h, intercept −φ), the electron count rises with intensity, and the energy per electron ignores intensity completely (illustrative).',
    },
    blocks: [
      '- $KE_{max} = hf - \\phi$: threshold $f_0 = \\phi/h$, then a line of slope $h$ — the same for every metal',
      '- Intensity sets the NUMBER of electrons; frequency sets their energy — below $f_0$ nothing, however bright',
    ],
  },
  {
    at: 'Atomic Models on the MCAT',
    mode: 'lead',
    figure: {
      svg: bohrSvg,
      alt:
        'Left: the hydrogen energy ladder drawn to scale in electron-volts: n = 1 at −13.6 eV at the bottom, n = 2 at −3.4 eV, n = 3 at −1.51 eV, n = 4 at −0.85 eV, and a dashed n = ∞ line at 0 eV (free); the levels crowd together toward 0. A red arrow drops from n = 2 to n = 1: emits hf = (−3.4) − (−13.6) = 10.2 eV (ultraviolet). A blue arrow climbs from n = 1 to n = ∞: absorb 13.6 eV → electron freed (ionization). Formulas: Eₙ = −13.6/n² eV; E_photon = hf = E_high − E_low. Right: a vertical electron-volt scale from 0 to 14 eV with markers — 1 eV = 1.6 × 10⁻¹⁹ J, one e across 1 V; a blue band for visible light 1.8–3.1 eV (700 → 400 nm) with green 500 nm → 2.5 eV from the worked example; the H n = 2 → 1 photon at 10.2 eV; ionizing H from n = 1 at 13.6 eV. The eV is just a handy unit for single particles.',
      caption: 'Bohr’s levels drawn to scale beside an eV ruler: a 2 → 1 drop releases 10.2 eV, ionization costs 13.6 eV, and visible photons (1.8–3.1 eV) sit near the bottom of that ruler.',
    },
    blocks: [
      '- $E_n = -13.6/n^2$ eV: levels crowd toward 0; a photon carries exactly the gap, $hf = E_{high} - E_{low}$',
      '- 1 eV = $1.6 \\times 10^{-19}$ J: visible photons ≈ 2–3 eV, the H 2 → 1 photon 10.2 eV, ionization 13.6 eV',
    ],
  },
  {
    at: 'Radioactive Decay Types',
    mode: 'replace-table',
    figure: {
      svg: decaySvg,
      alt:
        'A grid with Z (protons) across and A (mass number) up; the parent nucleus sits in the cell (Z, A). Alpha decay (red): a long arrow to the cell two columns left and four rows down — −2 Z, −4 A. Beta-minus (blue): one cell to the right, Z + 1, A the same. Beta-plus (blue): one cell to the left, Z − 1, A the same. Gamma (grey): a small loop — stays put. Legend: α emits ⁴₂He, A − 4, Z − 2 (²³⁸U → ²³⁴Th); β⁻ turns n → p + e⁻, A same, Z + 1; β⁺ turns p → n + e⁺, A same, Z − 1; γ is a photon only, A and Z unchanged, the nucleus relaxes.',
      caption: 'Each decay is a move on the Z–A grid: alpha jumps two left and four down, the betas step one sideways, gamma stays in its cell.',
    },
    blocks: [
      '- α: $^4_2$He leaves → $A - 4$, $Z - 2$ (²³⁸U → ²³⁴Th)',
      '- β⁻: $Z + 1$ (n → p); β⁺: $Z - 1$ (p → n); $A$ unchanged',
      '- γ: a photon only — $A$ and $Z$ unchanged',
      '- Check: $A$ and $Z$ balance on both sides of the equation',
    ],
  },
]
