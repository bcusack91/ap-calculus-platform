import type { DeckFigurePlacement } from './index'

/**
 * Fluids & Waves (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a tank with pressure
 * arrows that lengthen with depth, three differently shaped vessels, a
 * hydraulic lift, float / hover / sink blocks, a narrowing pipe with
 * streamlines, a Venturi with standpipes plus a Torricelli tank, three tubes
 * of different radius with laminar and turbulent flow, transverse and
 * longitudinal wave anatomy, standing-wave envelopes, Doppler wavefronts) —
 * no textbook, prep-company or AAMC figure was copied. Curves are the textbook
 * SHAPE and say "schematic"/"illustrative" in the caption; the only numbers
 * drawn are the lesson's own (the worked examples: 100 N / 0.01 m² → 1000 N /
 * 0.1 m², the 60 %-submerged block, 10 cm² at 1 m/s → 2 cm² at 5 m/s and the
 * 12 kPa drop, Torricelli's 5 m → 10 m/s with g = 10, the 600 Hz siren at
 * 34 m/s → ≈667 Hz, 343 m/s for sound in air).
 *
 * Colours: fluid and water columns BLUE (fig-accent); forces, velocities and
 * the "answer" annotations RED (fig-accent-2); reference lines grey.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-fw-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** `base` with a subscript `sub` (as tspans), then `rest` back on the baseline — for use inside T(). */
const SUB = (base: string, sub: string, size: number, rest = '') =>
  `${base}<tspan dy="${Math.round(size * 0.28)}" font-size="${Math.round(size * 0.72)}">${sub}</tspan><tspan dy="-${Math.round(size * 0.28)}">${rest}</tspan>`

/** A straight arrow (line with a marker-end) in the current colour. */
const ARR = (x1: number, y1: number, x2: number, y2: number, id: string, sw = 3) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-end="url(#${id})"/>`

/** A double-headed arrow (dimension line) in the current colour. */
const DIM = (x1: number, y1: number, x2: number, y2: number, id: string, sw = 2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-start="url(#${id})" marker-end="url(#${id})"/>`

/** A plain rectangle outlined in the current colour (fillOpacity > 0 tints it). */
const RECT = (x: number, y: number, w: number, h: number, sw = 2.5, fillOpacity = 0, rx = 0) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}"${rx ? ` rx="${rx}"` : ''} fill="${fillOpacity ? 'currentColor' : 'none'}"${fillOpacity ? ` fill-opacity="${fillOpacity}"` : ''} stroke="currentColor" stroke-width="${sw}"/>`

/** A sine curve y = yc − amp·sin(2π(x − x0)/λ + phase) from x0 to x1, sampled every 4 units. */
const sinePath = (x0: number, x1: number, yc: number, amp: number, lambda: number, phase = 0) => {
  let d = ''
  for (let x = x0; x <= x1; x += 4) {
    const y = yc - amp * Math.sin((2 * Math.PI * (x - x0)) / lambda + phase)
    d += `${x === x0 ? 'M' : ' L'}${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return d
}

/** Standing-wave envelope (both mirror curves) y = yc ± amp·sin(k·(x − x0)) over x0..x0+L, with k = n·π/(div·L). */
const envelopePath = (x0: number, L: number, yc: number, amp: number, n: number, div: number) => {
  let up = ''
  let down = ''
  for (let i = 0; i <= 50; i++) {
    const x = x0 + (L * i) / 50
    const s = amp * Math.sin((n * Math.PI * (x - x0)) / (div * L))
    up += `${i === 0 ? 'M' : ' L'}${x.toFixed(1)} ${(yc - s).toFixed(1)}`
    down += `${i === 0 ? 'M' : ' L'}${x.toFixed(1)} ${(yc + s).toFixed(1)}`
  }
  return `${up} ${down}`
}

/* 1 — Pressure grows with depth; the vessel's shape does not matter (lead, 1000×460) */
const DEPTHS = [160, 210, 260, 310, 360]
const pressureSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(210, 40, 22, 'Pressure grows with depth', 'middle', '700')}
${T(760, 40, 22, 'Shape and volume do not matter', 'middle', '700')}
<g class="fig-accent"><rect x="92" y="120" width="236" height="258" fill="currentColor" fill-opacity="0.12"/></g>
<path d="M90 90 L90 380 L330 380 L330 90" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent"><line x1="92" y1="120" x2="328" y2="120" stroke="currentColor" stroke-width="2"/></g>
${T(210, 111, 15, 'P₀ (air above)', 'middle')}
<g class="fig-accent-2">
<defs>${ARROW('arr-fw-pres-r')}</defs>
${DEPTHS.map((y, i) => `${ARR(92 + 20 * (i + 1), y, 96, y, 'arr-fw-pres-r', 2.5)}${ARR(328 - 20 * (i + 1), y, 324, y, 'arr-fw-pres-r', 2.5)}`).join('')}
${T(210, 236, 15, 'ρgh', 'middle', '700')}
${T(210, 256, 13, 'grows with h', 'middle')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-fw-pres-m')}</defs>
${ARR(62, 122, 62, 306, 'arr-fw-pres-m', 2)}
</g>
${T(54, 220, 20, 'h', 'end', '700')}
${T(350, 170, 24, 'P = P₀ + ρgh', 'start', '700')}
${T(350, 205, 17, 'gauge = ρgh')}
${T(350, 230, 17, 'absolute = P₀ + ρgh')}
<g class="fig-muted">${T(350, 270, 15, 'a scalar: it pushes')}${T(350, 292, 15, 'equally in all directions')}</g>
${T(210, 410, 15, 'pressure arrows lengthen linearly with depth', 'middle')}
${T(210, 435, 15, '1 atm ≈ 10⁵ Pa = 760 mmHg', 'middle')}
<g class="fig-accent">
<rect x="582" y="170" width="22" height="190" fill="currentColor" fill-opacity="0.12"/>
<rect x="642" y="170" width="128" height="190" fill="currentColor" fill-opacity="0.12"/>
<path d="M835 170 L835 200 L800 260 L800 360 L920 360 L920 260 L865 200 L865 170 z" fill="currentColor" fill-opacity="0.12"/>
</g>
<path d="M580 140 L580 360 L606 360 L606 140" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M640 140 L640 360 L772 360 L772 140" fill="none" stroke="currentColor" stroke-width="3"/>
<path d="M835 140 L835 200 L800 260 L800 360 L920 360 L920 260 L865 200 L865 140" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted"><line x1="570" y1="170" x2="932" y2="170" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/></g>
${T(760, 128, 14, 'same free surface (P₀)', 'middle')}
<g class="fig-accent-2">
<line x1="570" y1="330" x2="932" y2="330" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/>
<circle cx="593" cy="330" r="6" fill="currentColor"/><circle cx="706" cy="330" r="6" fill="currentColor"/><circle cx="860" cy="330" r="6" fill="currentColor"/>
${T(760, 395, 18, 'same depth h ⇒ same P = P₀ + ρgh', 'middle', '700')}
</g>
<g class="fig-muted">${T(760, 425, 15, 'a skinny standpipe and a lake press equally at equal depth', 'middle')}</g>
</svg>`

/* 2 — Pascal's hydraulic lift with the worked example's numbers (lead, 1000×460) */
const pascalSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(370, 60, 26, 'F₁ / A₁ = F₂ / A₂', 'middle', '700')}
<g class="fig-accent">
<rect x="122" y="200" width="56" height="140" fill="currentColor" fill-opacity="0.14"/>
<rect x="122" y="302" width="636" height="36" fill="currentColor" fill-opacity="0.14"/>
<rect x="562" y="240" width="196" height="100" fill="currentColor" fill-opacity="0.14"/>
${T(370, 326, 16, 'same P = 10⁴ Pa everywhere in the fluid', 'middle', '700')}
</g>
<path d="M120 110 L120 340 L760 340 L760 150 M180 110 L180 300 L560 300 L560 150" fill="none" stroke="currentColor" stroke-width="3"/>
<rect x="118" y="188" width="64" height="12" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
<rect x="558" y="228" width="204" height="12" fill="currentColor" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
<g class="fig-muted">
<rect x="118" y="248" width="64" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/>
<rect x="558" y="216" width="204" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/>
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fw-pasc-r')}</defs>
${ARR(150, 118, 150, 182, 'arr-fw-pasc-r', 4)}
${T(195, 150, 18, 'F₁ = 100 N', 'start', '700')}
${ARR(660, 224, 660, 162, 'arr-fw-pasc-r', 4)}
${T(660, 140, 18, 'F₂ = 1000 N', 'middle', '700')}
</g>
${T(195, 216, 16, 'A₁ = 0.01 m²')}
${T(195, 258, 16, 'd₁ = 0.5 m ↓')}
${T(660, 286, 16, 'A₂ = 0.1 m²', 'middle')}
${T(775, 226, 16, 'd₂ = 0.05 m ↑')}
${T(500, 390, 18, 'Force ×10 from the ×10 area — but distance ÷10: A₁d₁ = A₂d₂', 'middle')}
<g class="fig-muted">${T(500, 422, 16, 'work in = 100 N × 0.5 m = 50 J = 1000 N × 0.05 m = work out — a fluid lever, never free energy', 'middle')}</g>
</svg>`

/* 3 — Archimedes: float, hover, sink (lead, 1000×460) */
const tank = (c: number) =>
  `<g class="fig-accent"><rect x="${c - 128}" y="160" width="256" height="198" fill="currentColor" fill-opacity="0.12"/><line x1="${c - 128}" y1="160" x2="${c + 128}" y2="160" stroke="currentColor" stroke-width="2"/></g>
<path d="M${c - 130} 120 L${c - 130} 360 L${c + 130} 360 L${c + 130} 120" fill="none" stroke="currentColor" stroke-width="3"/>`
const block = (c: number, top: number) => RECT(c - 45, top, 90, 90, 2.5, 0.18, 6)
const archimedesSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-fw-arch')}</defs>
${T(170, 62, 20, 'FLOATS', 'middle', '700')}
${T(170, 88, 17, `${SUB('ρ', 'obj', 17, ' &lt; ')}${SUB('ρ', 'fluid', 17, '  ·  ')}${SUB('F', 'B', 17, ' = W')}`, 'middle')}
${T(500, 62, 20, 'HOVERS (fully submerged)', 'middle', '700')}
${T(500, 88, 17, `${SUB('ρ', 'obj', 17, ' = ')}${SUB('ρ', 'fluid', 17, '  ·  ')}${SUB('F', 'B', 17, ' = W')}`, 'middle')}
${T(830, 62, 20, 'SINKS', 'middle', '700')}
${T(830, 88, 17, `${SUB('ρ', 'obj', 17, ' &gt; ')}${SUB('ρ', 'fluid', 17, '  ·  W &gt; ')}${SUB('F', 'B', 17)}`, 'middle')}
${tank(170)}${tank(500)}${tank(830)}
${block(170, 124)}
${block(500, 200)}
${block(830, 225)}
<g class="fig-accent">
<defs>${ARROW('arr-fw-arch-b')}</defs>
${ARR(156, 163, 156, 113, 'arr-fw-arch-b', 3.5)}
${ARR(486, 239, 486, 189, 'arr-fw-arch-b', 3.5)}
${ARR(816, 264, 816, 229, 'arr-fw-arch-b', 3.5)}
${T(120, 130, 16, SUB('F', 'B', 16), 'end', '700')}
${T(450, 206, 16, SUB('F', 'B', 16), 'end', '700')}
${T(780, 246, 16, SUB('F', 'B', 16), 'end', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fw-arch-r')}</defs>
${ARR(184, 175, 184, 225, 'arr-fw-arch-r', 3.5)}
${ARR(514, 251, 514, 301, 'arr-fw-arch-r', 3.5)}
${ARR(844, 276, 844, 341, 'arr-fw-arch-r', 3.5)}
${T(206, 218, 16, 'W', 'start', '700')}
${T(536, 294, 16, 'W', 'start', '700')}
${T(866, 334, 16, 'W', 'start', '700')}
</g>
${T(170, 300, 15, 'fraction submerged = SG', 'middle', '700')}
${T(170, 322, 15, 'wood SG 0.6 → 60 % under', 'middle')}
${T(500, 330, 15, 'displaces its own volume;', 'middle')}
${T(500, 350, 15, SUB('F', 'B', 15, ' is the same at any depth'), 'middle')}
${T(760, 150, 15, 'net force ↓', 'start')}
${T(500, 410, 17, `${SUB('F', 'B', 17, ' = ')}${SUB('ρ', 'fluid', 17, ' · ')}${SUB('V', 'submerged', 17, ' · g — the FLUID’s density, and only the submerged volume')}`, 'middle', '700')}
<g class="fig-muted">${T(500, 440, 15, `floating: ${SUB('F', 'B', 15, ' = W ⇒ ')}${SUB('V', 'sub', 15, ' / V = ')}${SUB('ρ', 'obj', 15, ' / ')}${SUB('ρ', 'fluid', 15, ' = SG (the 0.6 block rides 75 % under in oil of SG 0.8)')}`, 'middle')}</g>
</svg>`

/* 4 — Continuity: a narrowing pipe with converging streamlines (lead, 1000×460) */
const STREAM_Y = [170, 200, 230, 260, 290]
const continuitySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(410, 60, 22, 'Q = A₁v₁ = A₂v₂ — the same volume per second everywhere', 'middle', '700')}
<g class="fig-accent"><path d="M60 140 L400 140 L520 194 L760 194 L760 266 L520 266 L400 320 L60 320 z" fill="currentColor" fill-opacity="0.1"/></g>
<g class="fig-muted">${STREAM_Y.map((y) => `<path d="M60 ${y} L400 ${y} L520 ${230 + (y - 230) * 0.4} L760 ${230 + (y - 230) * 0.4}" fill="none" stroke="currentColor" stroke-width="1.5"/>`).join('')}</g>
<path d="M60 140 L400 140 L520 194 L760 194 M60 320 L400 320 L520 266 L760 266" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-fw-cont-r')}</defs>
${ARR(185, 230, 215, 230, 'arr-fw-cont-r', 4)}
${ARR(560, 230, 710, 230, 'arr-fw-cont-r', 4)}
${T(200, 352, 18, 'v₁ = 1 m/s', 'middle', '700')}
${T(640, 300, 18, 'v₂ = 5 m/s', 'middle', '700')}
</g>
${T(230, 122, 18, 'A₁ = 10 cm²', 'middle')}
${T(640, 176, 18, 'A₂ = 2 cm²', 'middle')}
<g class="fig-accent">
<circle cx="880" cy="170" r="44" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<circle cx="880" cy="290" r="22" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
<line x1="880" y1="170" x2="924" y2="170" stroke="currentColor" stroke-width="2"/>
<line x1="880" y1="290" x2="902" y2="290" stroke="currentColor" stroke-width="2"/>
</g>
${T(900, 162, 15, 'r', 'middle')}
${T(892, 282, 14, 'r/2', 'middle')}
${T(880, 236, 15, 'A = πr²', 'middle')}
${T(880, 334, 15, 'A/4', 'middle')}
${T(880, 380, 16, '¼ area ⇒ 4× speed', 'middle', '700')}
${T(410, 405, 18, '(10 cm²)(1 m/s) = (2 cm²)(5 m/s) = 10 cm³/s', 'middle')}
<g class="fig-muted">${T(410, 440, 15, 'continuity converts AREAS into SPEEDS — it says nothing about pressure (that is Bernoulli)', 'middle')}</g>
</svg>`

/* 5 — Bernoulli: a Venturi with standpipes, and Torricelli's tank (lead, 1000×460) */
const standpipe = (c: number, top: number, level: number) =>
  `<g class="fig-accent"><rect x="${c - 11}" y="${level}" width="22" height="${top - level}" fill="currentColor" fill-opacity="0.25"/></g>
<path d="M${c - 12} ${top} L${c - 12} 90 M${c + 12} 90 L${c + 12} ${top}" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent"><line x1="${c - 11}" y1="${level}" x2="${c + 11}" y2="${level}" stroke="currentColor" stroke-width="2"/></g>`
const bernoulliSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(330, 48, 24, 'P + ½ρv² + ρgh = constant', 'middle', '700')}
<g class="fig-accent"><path d="M50 250 L230 250 L300 278 L420 278 L490 250 L620 250 L620 350 L490 350 L420 322 L300 322 L230 350 L50 350 z" fill="currentColor" fill-opacity="0.25"/></g>
<path d="M50 250 L128 250 M152 250 L230 250 L300 278 L348 278 M372 278 L420 278 L490 250 L548 250 M572 250 L620 250 M50 350 L230 350 L300 322 L420 322 L490 350 L620 350" fill="none" stroke="currentColor" stroke-width="3"/>
${standpipe(140, 250, 120)}${standpipe(360, 278, 215)}${standpipe(560, 250, 120)}
<g class="fig-muted"><line x1="152" y1="120" x2="548" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/></g>
${T(140, 78, 17, 'P₁', 'middle', '700')}
${T(360, 78, 17, 'P₂', 'middle', '700')}
${T(560, 78, 17, 'P₁', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-fw-bern-r')}</defs>
${DIM(392, 123, 392, 212, 'arr-fw-bern-r', 2)}
${T(402, 172, 17, 'ΔP = 12 kPa', 'start', '700')}
${ARR(70, 300, 110, 300, 'arr-fw-bern-r', 4)}
${ARR(320, 300, 400, 300, 'arr-fw-bern-r', 4)}
${ARR(530, 300, 570, 300, 'arr-fw-bern-r', 4)}
${T(90, 380, 16, 'v₁ = 1 m/s', 'middle', '700')}
${T(360, 348, 16, 'v₂ = 5 m/s', 'middle', '700')}
<path d="M900 300 Q952 302 976 362" fill="none" stroke="currentColor" stroke-width="3.5" marker-end="url(#arr-fw-bern-r)"/>
</g>
${T(330, 412, 16, 'level pipe: P₁ − P₂ = ½ρ(v₂² − v₁²) = ½(1000)(25 − 1) = 12 kPa', 'middle')}
${T(330, 440, 16, 'fast ⇒ low pressure: the standpipe over the throat reads LOWEST', 'middle', '700')}
${T(795, 60, 18, 'Torricelli', 'middle', '700')}
<g class="fig-accent"><rect x="692" y="120" width="206" height="238" fill="currentColor" fill-opacity="0.12"/><line x1="692" y1="120" x2="898" y2="120" stroke="currentColor" stroke-width="2"/></g>
<path d="M690 90 L690 360 L900 360 L900 308 M900 292 L900 90" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-muted">${T(795, 112, 14, 'open to P₀', 'middle')}</g>
<g class="fig-muted">
<defs>${ARROW('arr-fw-bern-m')}</defs>
${DIM(716, 123, 716, 297, 'arr-fw-bern-m', 2)}
</g>
${T(728, 215, 17, 'h = 5 m', 'start', '700')}
${T(795, 395, 20, 'v = √(2gh)', 'middle', '700')}
${T(795, 425, 17, '= √(2 · 10 · 5) = 10 m/s', 'middle')}
</svg>`

/* 6 — Viscosity: Poiseuille's r⁴, laminar vs turbulent flow (lead, 1000×460) */
const tube = (yc: number, r: number) =>
  `<g class="fig-accent"><rect x="150" y="${yc - r}" width="180" height="${2 * r}" fill="currentColor" fill-opacity="0.12"/></g>
<path d="M150 ${yc - r} L330 ${yc - r} M150 ${yc + r} L330 ${yc + r}" fill="none" stroke="currentColor" stroke-width="2.5"/>`
const PROFILE_Y = [105, 120, 135, 150, 165, 180, 195]
const viscositySvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(260, 48, 24, 'Q = πΔPr⁴ / 8ηL', 'middle', '700')}
${tube(110, 8)}${tube(180, 16)}${tube(290, 32)}
<g class="fig-accent-2">
<defs>${ARROW('arr-fw-visc-r')}</defs>
${ARR(226, 110, 254, 110, 'arr-fw-visc-r', 2.5)}
${ARR(210, 180, 270, 180, 'arr-fw-visc-r', 3)}
${ARR(180, 290, 300, 290, 'arr-fw-visc-r', 4)}
${T(350, 116, 18, 'Q / 16', 'start', '700')}
${T(350, 186, 18, 'Q', 'start', '700')}
${T(350, 296, 18, '16 Q', 'start', '700')}
</g>
${T(130, 116, 18, 'r / 2', 'end')}
${T(130, 186, 18, 'r', 'end')}
${T(130, 296, 18, '2r', 'end')}
${T(260, 370, 18, 'flow ∝ r⁴: double r ⇒ ×16', 'middle', '700')}
${T(260, 398, 16, 'shrink r by 19 % (0.81⁴ ≈ ½) ⇒ flow HALVES', 'middle')}
<g class="fig-muted">${T(260, 426, 15, 'arteriolar radius is the body’s flow knob', 'middle')}</g>
${T(560, 72, 17, 'Laminar — layers slide, fastest at the axis', 'start', '700')}
<g class="fig-accent"><rect x="560" y="90" width="380" height="120" fill="currentColor" fill-opacity="0.1"/></g>
<path d="M560 90 L940 90 M560 210 L940 210" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-muted">${PROFILE_Y.map((y) => `<line x1="560" y1="${y}" x2="940" y2="${y}" stroke="currentColor" stroke-width="1.2"/>`).join('')}</g>
<g class="fig-accent-2">
${PROFILE_Y.map((y) => ARR(600, y, 600 + 80 * (1 - ((y - 150) / 60) ** 2) + 4, y, 'arr-fw-visc-r', 2.2)).join('')}
<path d="M600 90 Q760 150 600 210" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="600" y1="90" x2="600" y2="210" stroke="currentColor" stroke-width="2"/>
</g>
${T(880, 150, 14, 'v = 0 at the wall', 'middle')}
${T(560, 242, 17, 'Turbulent — eddies, energy-hungry, audible', 'start', '700')}
<g class="fig-accent"><rect x="560" y="260" width="380" height="120" fill="currentColor" fill-opacity="0.1"/></g>
<path d="M560 260 L940 260 M560 380 L940 380" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g class="fig-accent-2">
<path d="M560 290 q25 -18 50 0 t50 0 t50 -14 t50 20 t50 0 t50 -10 t50 6" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M560 320 q20 16 44 -4 t46 14 t50 -22 t50 10 t50 10 t50 -16 t50 8" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M560 350 q30 -14 56 6 t52 -16 t50 4 t50 12 t50 -14 t50 10 t50 -4" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M650 335 a16 16 0 1 1 22 12" fill="none" stroke="currentColor" stroke-width="2.2" marker-end="url(#arr-fw-visc-r)"/>
<path d="M790 298 a14 14 0 1 0 -20 12" fill="none" stroke="currentColor" stroke-width="2.2" marker-end="url(#arr-fw-visc-r)"/>
<path d="M880 340 a15 15 0 1 1 20 -12" fill="none" stroke="currentColor" stroke-width="2.2" marker-end="url(#arr-fw-visc-r)"/>
</g>
${T(750, 420, 16, 'turbulence is favoured by high v, large d, high ρ, low η', 'middle')}
<g class="fig-muted">${T(750, 445, 14, 'heart murmurs and bruits are turbulence you can hear', 'middle')}</g>
</svg>`

/* 7 — Wave anatomy: transverse, longitudinal, and crossing into a new medium (lead, 1000×460) */
const BAR_X: number[] = []
for (let x0 = 60; x0 <= 560; x0 += 10) BAR_X.push(x0 + 11 * Math.sin((2 * Math.PI * (x0 - 60)) / 160))
const waveSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(60, 44, 17, 'Transverse — displacement ⊥ travel (light, strings)', 'start', '700')}
<g class="fig-muted"><line x1="60" y1="150" x2="540" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/></g>
<g class="fig-accent"><path d="${sinePath(60, 540, 150, 50, 160)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fw-wave-r')}</defs>
${DIM(182, 218, 338, 218, 'arr-fw-wave-r', 2)}
${T(260, 240, 18, 'λ', 'middle', '700')}
${DIM(420, 148, 420, 102, 'arr-fw-wave-r', 2)}
${T(434, 132, 18, 'A', 'start', '700')}
${ARR(548, 150, 588, 150, 'arr-fw-wave-r', 3)}
${T(596, 156, 16, 'v', 'start', '700')}
${ARR(548, 320, 588, 320, 'arr-fw-wave-r', 3)}
${T(596, 326, 16, 'v', 'start', '700')}
</g>
${T(260, 90, 15, 'crest', 'middle')}
${T(500, 224, 15, 'trough', 'middle')}
${T(60, 254, 17, 'Longitudinal — displacement along travel (sound, ~343 m/s in air)', 'start', '700')}
<g class="fig-accent">${BAR_X.map((x) => `<line x1="${x.toFixed(1)}" y1="290" x2="${x.toFixed(1)}" y2="350" stroke="currentColor" stroke-width="2.5"/>`).join('')}</g>
<g class="fig-accent-2">${DIM(140, 366, 300, 366, 'arr-fw-wave-r', 2)}${T(220, 388, 16, 'λ', 'middle', '700')}</g>
${T(300, 412, 14, 'compression', 'middle')}
${T(380, 432, 14, 'rarefaction', 'middle')}
<g class="fig-muted"><line x1="620" y1="30" x2="620" y2="440" stroke="currentColor" stroke-width="1.5"/></g>
${T(810, 62, 26, 'v = f λ', 'middle', '700')}
<g class="fig-muted"><line x1="810" y1="130" x2="810" y2="290" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6"/><line x1="640" y1="210" x2="980" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/></g>
<g class="fig-accent"><path d="${sinePath(640, 810, 210, 30, 85)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
<g class="fig-accent-2"><path d="${sinePath(810, 980, 210, 30, 42.5)}" fill="none" stroke="currentColor" stroke-width="3"/></g>
${T(725, 120, 14, 'medium 1: fast, long λ', 'middle')}
${T(895, 120, 14, 'medium 2: slow, short λ', 'middle')}
${T(810, 330, 17, 'f is FIXED by the source', 'middle', '700')}
${T(810, 356, 15, 'v and λ change together with the medium', 'middle')}
<g class="fig-muted">${T(810, 395, 15, 'medium sets v (tension and μ; air temperature)', 'middle')}${T(810, 418, 15, 'source sets f; λ = v / f is the result', 'middle')}</g>
</svg>`

/* 8 — Standing waves: both ends alike vs closed at one end (replace-table, 560×440) */
const ROW_Y = [112, 192, 272]
const standingRow = (x0: number, yc: number, n: number, div: number) =>
  `<g class="fig-accent"><path d="${envelopePath(x0, 200, yc, 26, n, div)}" fill="none" stroke="currentColor" stroke-width="2.5"/></g>`
const nodesOf = (x0: number, yc: number, n: number, div: number) => {
  // node positions: sin(nπ·u/div) = 0 → u = k·div/n for k = 0..; antinodes midway
  const out: string[] = []
  for (let k = 0; k * div <= n; k++) {
    const u = (k * div) / n
    if (u <= 1.0001) out.push(`<circle cx="${(x0 + 200 * u).toFixed(1)}" cy="${yc}" r="4.5" fill="currentColor"/>`)
  }
  return out.join('')
}
const antinodesOf = (x0: number, yc: number, n: number, div: number) => {
  const out: string[] = []
  for (let k = 0; (k + 0.5) * div <= n + 0.0001; k++) {
    const u = ((k + 0.5) * div) / n
    out.push(`<circle class="fig-bg" cx="${(x0 + 200 * u).toFixed(1)}" cy="${yc}" r="4.5" stroke="currentColor" stroke-width="2"/>`)
  }
  return out.join('')
}
const standingSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(140, 30, 16, 'Both ends alike', 'middle', '700')}
${T(140, 50, 12, 'string fixed–fixed  ·  pipe open–open', 'middle')}
${T(420, 30, 16, 'Closed at ONE end', 'middle', '700')}
${T(420, 50, 12, 'closed end = node, open end = antinode', 'middle')}
${ROW_Y.map((y) => `<line x1="40" y1="${y - 30}" x2="40" y2="${y + 30}" stroke="currentColor" stroke-width="3"/><line x1="240" y1="${y - 30}" x2="240" y2="${y + 30}" stroke="currentColor" stroke-width="3"/>`).join('')}
${ROW_Y.map((y) => `<line x1="320" y1="${y - 30}" x2="320" y2="${y + 30}" stroke="currentColor" stroke-width="5"/><g class="fig-muted"><line x1="320" y1="${y - 30}" x2="520" y2="${y - 30}" stroke="currentColor" stroke-width="1.2"/><line x1="320" y1="${y + 30}" x2="520" y2="${y + 30}" stroke="currentColor" stroke-width="1.2"/></g>`).join('')}
${[1, 2, 3].map((n, i) => standingRow(40, ROW_Y[i], n, 1) + nodesOf(40, ROW_Y[i], n, 1) + antinodesOf(40, ROW_Y[i], n, 1)).join('')}
${[1, 3, 5].map((n, i) => standingRow(320, ROW_Y[i], n, 2) + nodesOf(320, ROW_Y[i], n, 2) + antinodesOf(320, ROW_Y[i], n, 2)).join('')}
${T(140, 156, 13, 'n = 1 · λ = 2L · f₁ = v / 2L', 'middle')}
${T(140, 236, 13, 'n = 2 · λ = L · f₂ = 2f₁', 'middle')}
${T(140, 316, 13, 'n = 3 · λ = 2L/3 · f₃ = 3f₁', 'middle')}
${T(420, 156, 13, 'n = 1 · λ = 4L · f₁ = v / 4L', 'middle')}
${T(420, 236, 13, 'n = 3 · λ = 4L/3 · f₃ = 3f₁', 'middle')}
${T(420, 316, 13, 'n = 5 · λ = 4L/5 · f₅ = 5f₁', 'middle')}
<g class="fig-accent-2">
${T(140, 352, 16, 'fₙ = nv / 2L', 'middle', '700')}
${T(140, 372, 13, 'ALL n = 1, 2, 3, …', 'middle')}
${T(420, 352, 16, 'fₙ = nv / 4L', 'middle', '700')}
${T(420, 372, 13, 'ODD n only: 1, 3, 5, …', 'middle')}
</g>
${T(280, 404, 12, 'same L: the closed pipe’s fundamental is an octave LOWER (λ₁ = 4L vs 2L)', 'middle', '700')}
<circle cx="150" cy="426" r="4.5" fill="currentColor"/>${T(160, 430, 12, 'node (no motion)')}
<circle class="fig-bg" cx="300" cy="426" r="4.5" stroke="currentColor" stroke-width="2"/>${T(310, 430, 12, 'antinode (max motion)')}
</svg>`

/* 9 — Doppler: a source moving right, fronts bunched ahead and stretched behind (lead, 1000×460) */
const FRONTS: [number, number][] = [
  [300, 160],
  [330, 120],
  [360, 80],
  [390, 40],
]
const listener = (x: number) =>
  `<circle cx="${x}" cy="208" r="11" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M${x} 219 L${x} 248 M${x - 14} 232 L${x + 14} 232 M${x} 248 L${x - 11} 268 M${x} 248 L${x + 11} 268" fill="none" stroke="currentColor" stroke-width="2.5"/>`
const dopplerSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(300, 45, 18, 'Source moving right: fronts bunch ahead, spread behind', 'middle', '700')}
<g class="fig-accent">${FRONTS.map(([cx, r]) => `<circle cx="${cx}" cy="230" r="${r}" fill="none" stroke="currentColor" stroke-width="2.5"/>`).join('')}</g>
<g class="fig-muted">${FRONTS.map(([cx]) => `<circle cx="${cx}" cy="230" r="3" fill="currentColor"/>`).join('')}</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-fw-dopp-r')}</defs>
<circle cx="420" cy="230" r="9" fill="currentColor"/>
${ARR(430, 230, 486, 230, 'arr-fw-dopp-r', 3.5)}
${T(458, 214, 14, SUB('v', 'src', 14), 'middle', '700')}
${T(420, 262, 14, 'source', 'middle')}
</g>
${listener(66)}${listener(548)}
${T(66, 296, 16, 'f LOWER', 'middle', '700')}
${T(66, 316, 14, 'λ longer', 'middle')}
${T(548, 296, 16, 'f HIGHER', 'middle', '700')}
${T(548, 316, 14, 'λ shorter', 'middle')}
<g class="fig-muted">${T(300, 420, 14, 'wavefronts from four earlier source positions (grey dots) — schematic', 'middle')}</g>
<g class="fig-muted"><line x1="620" y1="30" x2="620" y2="440" stroke="currentColor" stroke-width="1.5"/></g>
${T(718, 112, 20, `${SUB('f', 'obs', 20, ' = ')}${SUB('f', 'src', 20, ' ·')}`, 'end', '700')}
${T(792, 98, 20, `v ± ${SUB('v', 'obs', 20)}`, 'middle', '700')}
<line x1="736" y1="106" x2="848" y2="106" stroke="currentColor" stroke-width="2.5"/>
${T(792, 132, 20, `v ∓ ${SUB('v', 'src', 20)}`, 'middle', '700')}
<g class="fig-accent-2">${T(810, 182, 16, `choose the signs so APPROACH raises ${SUB('f', 'obs', 16)}`, 'middle', '700')}</g>
<g class="fig-muted">${T(810, 206, 14, 'top signs for approach, bottom signs for recession', 'middle')}</g>
${T(810, 258, 15, 'siren 600 Hz approaching at 34 m/s, v = 340 m/s', 'middle')}
${T(810, 286, 17, SUB('f', 'obs', 17, ' = 600 · 340 / (340 − 34) ≈ 667 Hz'), 'middle', '700')}
${T(810, 344, 15, 'moving SOURCE: physically compresses λ ahead', 'middle')}
${T(810, 368, 14, 'moving OBSERVER: meets fronts more often, λ unchanged', 'middle')}
<g class="fig-muted">${T(810, 420, 14, 'ultrasound reads blood speed from exactly this shift', 'middle')}</g>
</svg>`

export const mcatFluidsWavesFigures: DeckFigurePlacement[] = [
  {
    at: 'Pressure',
    mode: 'lead',
    figure: {
      svg: pressureSvg,
      alt:
        'Left: an open tank of fluid with P₀ (air) above the surface. Red pressure arrows push on both walls at five depths and lengthen linearly with depth; a grey arrow marks depth h; beside the tank: P = P₀ + ρgh, gauge = ρgh, absolute = P₀ + ρgh, pressure is a scalar that pushes equally in all directions; 1 atm ≈ 10⁵ Pa = 760 mmHg. Right: three vessels of different shape — a skinny standpipe, a wide tank and a flask that widens toward the bottom — filled to the same free surface; a red dashed line through all three at the same depth h carries the note "same depth h ⇒ same P = P₀ + ρgh": a skinny standpipe and a lake press equally at equal depth.',
      caption: 'Hydrostatic pressure: ρgh grows with depth only — the same depth gives the same pressure whatever the vessel holds — schematic.',
    },
    blocks: [
      '- $P = P_0 + \\rho g h$ — depth, fluid density and $g$ only; **never** the container\'s shape or volume',
      '- Gauge pressure $= \\rho g h$ (above atmospheric); absolute pressure adds $P_0$',
    ],
  },
  {
    at: "Pascal's Principle",
    mode: 'lead',
    figure: {
      svg: pascalSvg,
      alt:
        'A hydraulic lift: a narrow cylinder on the left and a wide cylinder on the right joined by a fluid-filled channel, with F₁/A₁ = F₂/A₂ above. On the small piston (A₁ = 0.01 m²) a red arrow pushes down with F₁ = 100 N and a dashed ghost piston shows it moves d₁ = 0.5 m down. On the large piston (A₂ = 0.1 m²) a red arrow pushes up with F₂ = 1000 N and the ghost piston shows it rises only d₂ = 0.05 m. In the channel: same P = 10⁴ Pa everywhere in the fluid. Below: force ×10 from the ×10 area but distance ÷10 (A₁d₁ = A₂d₂); work in = 100 N × 0.5 m = 50 J = 1000 N × 0.05 m = work out — a fluid lever, never free energy.',
      caption: "Pascal's hydraulic lift with the worked example's numbers: the ×10 area multiplies force ×10 and divides distance ÷10, so work is conserved — schematic.",
    },
    blocks: [
      '- Pressure transmits undiminished: $F_1/A_1 = F_2/A_2$ — a ×10 area gives ×10 force',
      '- But the small piston travels ×10 farther ($A_1 d_1 = A_2 d_2$): work in = work out, a fluid lever',
    ],
  },
  {
    at: "Archimedes' Principle",
    mode: 'lead',
    figure: {
      svg: archimedesSvg,
      alt:
        'Three tanks of water, each with the same block. Left, FLOATS (ρ_obj < ρ_fluid, F_B = W): the block sits with 60 % of its height under the surface; a blue upward arrow F_B and a red downward arrow W are equal; note: fraction submerged = SG, wood SG 0.6 → 60 % under. Middle, HOVERS (fully submerged, ρ_obj = ρ_fluid, F_B = W): the block is entirely under water with equal arrows; note: it displaces its own volume and F_B is the same at any depth. Right, SINKS (ρ_obj > ρ_fluid, W > F_B): the block is descending; the red W arrow is longer than the blue F_B arrow, net force down. Bottom: F_B = ρ_fluid · V_submerged · g — the fluid’s density and only the submerged volume; floating: F_B = W ⇒ V_sub/V = ρ_obj/ρ_fluid = SG (the 0.6 block rides 75 % under in oil of SG 0.8).',
      caption: "Archimedes' principle: the buoyant force is the weight of displaced fluid — float, hover or sink depends on object vs fluid density — schematic.",
    },
    blocks: [
      '- $F_B = \\rho_{fluid}\\,V_{submerged}\\,g$ — the **fluid\'s** density, and only the submerged volume',
      '- Floating: fraction submerged $= SG$; fully submerged: $F_B$ does not change with depth',
    ],
  },
  {
    at: 'Continuity: Mass In = Mass Out',
    mode: 'lead',
    figure: {
      svg: continuitySvg,
      alt:
        'A horizontal pipe that narrows from a wide section (A₁ = 10 cm²) through a taper to a narrow section (A₂ = 2 cm²), with grey streamlines that converge where the pipe narrows. A short red velocity arrow in the wide part is labelled v₁ = 1 m/s and a long red arrow in the narrow part v₂ = 5 m/s. Heading: Q = A₁v₁ = A₂v₂ — the same volume per second everywhere; below: (10 cm²)(1 m/s) = (2 cm²)(5 m/s) = 10 cm³/s. At the right, two cross-section circles of radius r (A = πr²) and r/2 (A/4) with the note ¼ area ⇒ 4× speed. Footnote: continuity converts areas into speeds — it says nothing about pressure (that is Bernoulli).',
      caption: 'Continuity: volumetric flow Q is the same everywhere, so a narrowing pipe forces the fluid to speed up — worked-example numbers, schematic.',
    },
    blocks: [
      '- $Q = A_1 v_1 = A_2 v_2$: narrow the pipe and the fluid **must** speed up',
      '- $A \\propto r^2$: halve the radius → quarter the area → 4× the speed',
    ],
  },
  {
    at: 'Bernoulli: Energy Conservation',
    mode: 'lead',
    figure: {
      svg: bernoulliSvg,
      alt:
        'Left: a Venturi pipe (wide – narrow throat – wide) with three open standpipes rising from its top. The water columns in the two wide-section standpipes stand high (P₁) and the column over the throat stands much lower (P₂); a red dimension arrow between the levels reads ΔP = 12 kPa. Red flow arrows: v₁ = 1 m/s in the wide sections, v₂ = 5 m/s in the throat. Heading: P + ½ρv² + ρgh = constant. Below: level pipe: P₁ − P₂ = ½ρ(v₂² − v₁²) = ½(1000)(25 − 1) = 12 kPa; fast ⇒ low pressure: the standpipe over the throat reads lowest. Right: Torricelli — a tank open to P₀ with a small hole in its side a depth h = 5 m below the surface; a red jet arcs out and down; v = √(2gh) = √(2 · 10 · 5) = 10 m/s.',
      caption: "Bernoulli: where the fluid is fast its pressure is low (Venturi standpipes, worked-example numbers); Torricelli's jet leaves at the free-fall speed √(2gh) — schematic.",
    },
    blocks: [
      '- $P + \\tfrac12\\rho v^2 + \\rho g h$ = constant for ideal flow (incompressible, nonviscous, laminar)',
      '- Fast ⇒ **low** pressure; Torricelli: a hole a depth $h$ down leaks at $v = \\sqrt{2gh}$',
    ],
  },
  {
    at: 'Viscosity: When Fluids Are Real',
    mode: 'lead',
    figure: {
      svg: viscositySvg,
      alt:
        'Left: Q = πΔPr⁴/8ηL over three tubes of radius r/2, r and 2r with red flow arrows and flows Q/16, Q and 16 Q; notes: flow ∝ r⁴ — double r ⇒ ×16; shrink r by 19 % (0.81⁴ ≈ ½) ⇒ flow halves; arteriolar radius is the body’s flow knob. Right, top: laminar flow — a tube with parallel grey streamlines and red velocity arrows forming a parabolic profile, longest on the axis and zero at the wall (layers slide, fastest at the axis). Right, bottom: turbulent flow — the same tube with wavy crossing paths and curling eddies (energy-hungry, audible); turbulence is favoured by high v, large d, high ρ, low η; heart murmurs and bruits are turbulence you can hear.',
      caption: "Poiseuille's law and flow regimes: flow scales with the fourth power of the radius; laminar layers vs turbulent eddies — illustrative.",
    },
    blocks: [
      '- Poiseuille: $Q = \\dfrac{\\pi\\,\\Delta P\\,r^4}{8\\eta L}$ — double $r$ ⇒ ×16 flow; a 19% narrowing halves it',
      '- Turbulence (murmurs, bruits) is favoured by high $v$, large $d$, high $\\rho$, low $\\eta$',
    ],
  },
  {
    at: 'The Wave Equation and Who Controls What',
    mode: 'lead',
    figure: {
      svg: waveSvg,
      alt:
        'Left, top: a transverse wave (a blue sine curve) with its crest and trough labelled, the wavelength λ marked trough to trough, the amplitude A marked from the equilibrium line to a crest, and a red arrow v for the travel direction — displacement perpendicular to travel (light, strings). Left, bottom: a longitudinal wave drawn as vertical bars that bunch into compressions and thin out into rarefactions, λ marked compression to compression, travel arrow v — displacement parallel to travel (sound, ~343 m/s in air). Right: v = fλ; a wave crosses a dashed boundary from medium 1 (fast, long λ, blue) into medium 2 (slow, short λ, red) with no break in the pattern: f is fixed by the source, v and λ change together with the medium; the medium sets v (tension and μ; air temperature), the source sets f, λ = v/f is the result.',
      caption: 'Wave anatomy and v = fλ: transverse vs longitudinal, and crossing media keeps f while v and λ change together — illustrative.',
    },
    blocks: [
      '- $v = f\\lambda$: the **medium** sets $v$, the **source** sets $f$, and $\\lambda$ is the negotiated result',
      '- Crossing into a new medium: $f$ stays fixed, $v$ and $\\lambda$ change together (most-tested wave fact)',
    ],
  },
  {
    at: 'Superposition and Standing Waves',
    mode: 'replace-table',
    figure: {
      svg: standingSvg,
      alt:
        'Two columns of standing-wave envelopes. Left, both ends alike (string fixed–fixed, pipe open–open): rows n = 1 (λ = 2L, f₁ = v/2L), n = 2 (λ = L, f₂ = 2f₁) and n = 3 (λ = 2L/3, f₃ = 3f₁), each with filled dots at the nodes (both ends and in between) and open circles at the antinodes; formula fₙ = nv/2L, all n = 1, 2, 3, …. Right, closed at one end (node at the closed wall, antinode at the open end): rows n = 1 (λ = 4L, f₁ = v/4L), n = 3 (λ = 4L/3, f₃ = 3f₁) and n = 5 (λ = 4L/5, f₅ = 5f₁); formula fₙ = nv/4L, odd n only. Note: for the same L the closed pipe’s fundamental is an octave lower (λ₁ = 4L vs 2L).',
      caption: 'Standing-wave harmonics: both-ends-alike systems carry every harmonic (nv/2L); a pipe closed at one end carries odd harmonics only (nv/4L) — schematic.',
    },
    blocks: [
      '- Overlapping waves add: in phase constructive, out of phase destructive',
      '- Standing wave = fixed **nodes** (no motion) and **antinodes** (maximum)',
      '- Both ends alike: $f_n = nv/2L$, all $n$; closed at one end: $f_n = nv/4L$, **odd** $n$ only',
      '- Same $L$: the closed pipe sounds an octave LOWER ($\\lambda_1 = 4L$ vs $2L$), no even harmonics',
    ],
  },
  {
    at: 'Doppler: Relative Approach Raises Pitch',
    mode: 'lead',
    figure: {
      svg: dopplerSvg,
      alt:
        'Left: a red source dot moving right with a velocity arrow v_src, surrounded by four blue circular wavefronts emitted from four earlier positions (grey dots): the fronts are bunched ahead of the source and spread out behind it. A listener ahead (right) is labelled f higher, λ shorter; a listener behind (left) f lower, λ longer. Right: f_obs = f_src · (v ± v_obs)/(v ∓ v_src); choose the signs so approach raises f_obs (top signs for approach, bottom for recession). Worked example: siren 600 Hz approaching at 34 m/s with v = 340 m/s gives f_obs = 600 · 340/(340 − 34) ≈ 667 Hz. A moving source physically compresses λ ahead; a moving observer meets fronts more often with λ unchanged; ultrasound reads blood speed from exactly this shift.',
      caption: 'The Doppler effect for a moving source: compressed wavefronts ahead raise the heard frequency, stretched fronts behind lower it — schematic, worked-example numbers.',
    },
    blocks: [
      '- $f_{obs} = f_{src}\\,\\dfrac{v \\pm v_{obs}}{v \\mp v_{src}}$ — pick each sign so **approach raises** $f_{obs}$',
      '- Moving source: compresses $\\lambda$ ahead; moving observer: meets fronts more often, $\\lambda$ unchanged',
    ],
  },
]
