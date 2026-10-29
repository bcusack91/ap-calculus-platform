import type { DeckFigurePlacement } from './index'

/**
 * Work, Energy & Power (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (three sign-of-work
 * panels, before/after kinetic-energy bars, a sled with its rope components
 * and a work ledger, U_g and U_s graphs, two paths to one summit, energy bar
 * charts along a frictionless and a rough slope, two hoists and a cruising
 * car, a ramp / lever / pulley, and a 2×2 grid of stopping distance vs
 * stopping time) — no textbook, prep-company or AAMC figure was copied.
 * Curves and bar heights that are not data say "illustrative" in the
 * caption; the only numbers drawn are the ones the lesson states (the sled:
 * 50 N at 37°, cos 37° ≈ 0.8, 10 N friction, 10 m, +400 / −100 / +300 J,
 * v = 10 m/s; the ramp: 6 m long, 1.5 m high, 800 N → 200 N, 1200 J).
 *
 * Colours are consistent across the deck: applied / useful forces and
 * potential energy BLUE (fig-accent); friction, drag and kinetic energy RED
 * (fig-accent-2); energy lost to heat, references and guides GREY
 * (fig-muted); displacements, axes and labels in the text colour.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-we-<figure>-<colour>).
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

/** A straight arrow in the current colour using the given marker id. */
const ARR = (x1: number, y1: number, x2: number, y2: number, id: string, sw = 3) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-end="url(#${id})"/>`

/** A dashed guide line in the current colour. */
const DASH = (x1: number, y1: number, x2: number, y2: number, sw = 1.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" stroke-dasharray="5 5"/>`

/** A vertical bracket (line with end ticks). */
const BRACKET = (x: number, y1: number, y2: number, sw = 2) =>
  `<path d="M${x - 5} ${y1} L${x + 5} ${y1} M${x} ${y1} L${x} ${y2} M${x - 5} ${y2} L${x + 5} ${y2}" fill="none" stroke="currentColor" stroke-width="${sw}"/>`

/** A filled bar (fill-opacity 0.55) in the current colour, drawn from a baseline upward. */
const BAR = (x: number, baseline: number, w: number, h: number, opacity = 0.55) =>
  `<rect x="${x}" y="${(baseline - h).toFixed(1)}" width="${w}" height="${h.toFixed(1)}" fill="currentColor" fill-opacity="${opacity}"/>`

/* 1 — The sign of work: force along, against and perpendicular to the displacement (replace-table, 560×440) */
const signRow = (yc: number, kind: 'along' | 'against' | 'perp') => {
  const box = BOX(120, yc - 20, 60, 40, 8, 2.5, 0.08)
  const disp = `${ARR(120, yc + 40, 260, yc + 40, 'arr-we-sign', 2.5)}${T(190, yc + 58, 14, 'd (motion →)', 'middle')}`
  let force = ''
  if (kind === 'along') force = `<g class="fig-accent"><defs>${ARROW('arr-we-sign-b1')}</defs>${ARR(182, yc, 252, yc, 'arr-we-sign-b1')}${T(217, yc - 10, 14, 'F', 'middle', '700')}</g>`
  else if (kind === 'against') force = `<g class="fig-accent-2"><defs>${ARROW('arr-we-sign-r')}</defs>${ARR(118, yc, 48, yc, 'arr-we-sign-r')}${T(83, yc - 10, 14, 'friction', 'middle', '700')}</g>`
  else force = `<g class="fig-accent"><defs>${ARROW('arr-we-sign-b2')}</defs>${ARR(150, yc - 22, 150, yc - 66, 'arr-we-sign-b2')}${T(160, yc - 44, 14, 'support', 'start', '700')}</g>`
  return box + disp + force
}
const signSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-we-sign')}</defs>
${T(20, 26, 16, 'W = F · d · cos θ — only the component along d counts', 'start', '700')}
${signRow(88, 'along')}
${T(290, 82, 16, 'θ = 0° — along motion', 'start', '700')}
${T(290, 104, 14, 'W = +Fd · a push, a pulling rope')}
${signRow(196, 'against')}
${T(290, 190, 16, 'θ = 180° — opposes motion', 'start', '700')}
${T(290, 212, 14, 'W = −Fd · friction on a slide')}
${signRow(345, 'perp')}
${T(290, 330, 16, 'θ = 90° — perpendicular', 'start', '700')}
${T(290, 352, 14, 'W = 0 · tray carried level, normal')}
${T(290, 370, 14, 'force, centripetal force')}
<g class="fig-muted">
${DASH(20, 156, 540, 156)}
${DASH(20, 264, 540, 264)}
${T(20, 430, 14, 'held still: d = 0 → W = 0, however hard the muscles work')}
</g>
</svg>`

/* 2 — The work–energy theorem as before/after bars, and KE ∝ v² (lead, 1000×460) */
const KE_BASE = 380
const wetSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-we-wet')}</defs>
${T(60, 44, 24, 'W<tspan dy="6" font-size="16">net</tspan><tspan dy="-6"> = ΔKE = KE</tspan><tspan dy="6" font-size="16">f</tspan><tspan dy="-6"> − KE₀</tspan>', 'start', '700')}
<line x1="90" y1="${KE_BASE}" x2="500" y2="${KE_BASE}" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent-2">
${BAR(120, KE_BASE, 100, 90)}
${T(170, 272, 16, 'KE₀', 'middle', '700')}
${BAR(360, KE_BASE, 100, 90)}
<rect x="360" y="140" width="100" height="150" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
${T(410, 220, 16, '+ W<tspan dy="5" font-size="12">net</tspan>', 'middle', '700')}
${T(410, 128, 16, 'KE<tspan dy="5" font-size="12">f</tspan>', 'middle', '700')}
</g>
${ARR(232, 215, 348, 215, 'arr-we-wet')}
${T(290, 200, 20, '+ W<tspan dy="6" font-size="14">net</tspan>', 'middle', '700')}
${T(290, 240, 14, 'all forces', 'middle')}
${T(290, 258, 14, 'Σ F d cos θ', 'middle')}
${BRACKET(478, 140, 290)}
${T(490, 220, 15, 'ΔKE')}
${T(170, 404, 16, 'before: ½mv₀²', 'middle')}
${T(410, 404, 16, 'after: ½mv<tspan dy="5" font-size="12">f</tspan><tspan dy="-5">²</tspan>', 'middle')}
<g class="fig-muted">${T(60, 440, 15, 'W<tspan dy="4" font-size="11">net</tspan><tspan dy="-4"> &gt; 0 speeds it up; W</tspan><tspan dy="4" font-size="11">net</tspan><tspan dy="-4"> &lt; 0 (friction, brakes) drains KE</tspan>')}</g>
<g class="fig-muted">${DASH(530, 30, 530, 450, 2)}</g>
${T(580, 44, 22, 'KE = ½mv² ∝ v²', 'start', '700')}
<line x1="600" y1="${KE_BASE}" x2="950" y2="${KE_BASE}" stroke="currentColor" stroke-width="2" marker-end="url(#arr-we-wet)"/>
<line x1="600" y1="${KE_BASE}" x2="600" y2="70" stroke="currentColor" stroke-width="2" marker-end="url(#arr-we-wet)"/>
${T(950, 404, 16, 'speed v', 'end')}
${T(612, 86, 16, 'KE')}
<g class="fig-muted">
${DASH(700, KE_BASE, 700, 320)}${DASH(600, 320, 700, 320)}
${DASH(800, KE_BASE, 800, 140)}${DASH(600, 140, 800, 140)}
</g>
<g class="fig-accent-2">
<path d="${Array.from({ length: 23 }, (_, i) => i * 10).map((dx) => `${dx === 0 ? 'M' : ' L'}${600 + dx} ${(KE_BASE - 0.006 * dx * dx).toFixed(1)}`).join('')}" fill="none" stroke="currentColor" stroke-width="4"/>
<circle cx="700" cy="320" r="7" fill="currentColor"/>
<circle cx="800" cy="140" r="7" fill="currentColor"/>
</g>
${T(700, 404, 16, 'v', 'middle', '700')}
${T(800, 404, 16, '2v', 'middle', '700')}
${T(590, 325, 15, '1×', 'end', '700')}
${T(590, 145, 15, '4×', 'end', '700')}
${T(950, 250, 16, 'double the speed → 4× the KE', 'end', '700')}
${T(950, 274, 15, '→ ~4× the braking distance', 'end')}
${T(950, 296, 14, '(d = KE / F at a fixed braking force)', 'end')}
</svg>`

/* 3 — Worked example: the sled, its rope components and the work ledger (lead, 1000×460) */
const sledSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-we-sled')}</defs>
<line x1="40" y1="330" x2="560" y2="330" stroke="currentColor" stroke-width="3"/>
${BOX(150, 280, 120, 50, 8, 2.5, 0.08)}
${T(210, 311, 16, '6 kg', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-we-sled-b')}</defs>
${ARR(270, 290, 390, 200, 'arr-we-sled-b', 4)}
${T(398, 196, 17, 'F = 50 N', 'start', '700')}
${DASH(270, 290, 390, 290, 2)}
${DASH(390, 290, 390, 200, 2)}
${T(286, 312, 15, 'F cos 37° = 40 N', 'start', '700')}
${T(400, 250, 15, '30 N')}
<path d="M310 290 A40 40 0 0 0 302 266" fill="none" stroke="currentColor" stroke-width="2"/>
${T(318, 280, 14, '37°')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-we-sled-r')}</defs>
${ARR(150, 320, 80, 320, 'arr-we-sled-r', 3.5)}
${T(112, 354, 15, 'friction 10 N', 'middle', '700')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-we-sled-m')}</defs>
${ARR(210, 278, 210, 228, 'arr-we-sled-m', 2.5)}
${T(222, 246, 14, 'N  (⊥ d → 0 J)')}
${ARR(210, 332, 210, 388, 'arr-we-sled-m', 2.5)}
${T(222, 376, 14, 'mg  (⊥ d → 0 J)')}
</g>
${ARR(150, 420, 420, 420, 'arr-we-sled', 3)}
${T(285, 444, 16, 'd = 10 m (from rest)', 'middle', '700')}
<g class="fig-muted">${DASH(600, 40, 600, 440, 2)}</g>
${T(640, 60, 20, 'Work ledger', 'start', '700')}
<g class="fig-accent">${T(640, 102, 17, 'rope: 50 × 10 × 0.8')}${T(950, 102, 17, '+400 J', 'end', '700')}</g>
<g class="fig-accent-2">${T(640, 138, 17, 'friction: −10 × 10')}${T(950, 138, 17, '−100 J', 'end', '700')}</g>
<g class="fig-muted">${T(640, 174, 17, 'gravity, normal (⊥)')}${T(950, 174, 17, '0 J', 'end', '700')}</g>
<line x1="640" y1="192" x2="950" y2="192" stroke="currentColor" stroke-width="2"/>
${T(640, 222, 18, 'W<tspan dy="5" font-size="13">net</tspan>', 'start', '700')}${T(950, 222, 18, '+300 J', 'end', '700')}
${T(640, 272, 17, 'W<tspan dy="5" font-size="13">net</tspan><tspan dy="-5"> = ΔKE = ½ (6) v² − 0</tspan>')}
${T(640, 302, 17, 'v² = 100')}
${T(640, 352, 30, 'v = 10 m/s', 'start', '700')}
<g class="fig-muted">${T(640, 400, 15, 'no acceleration, no time —')}${T(640, 422, 15, 'forces and distance go straight to speed')}</g>
</svg>`

/* 4 — Stored energy: U_g linear in h (any reference), U_s quadratic in x (lead, 1000×460) */
const ugY = (dx: number, offset = 0) => 380 - 0.8 * dx - offset
const usY = (dx: number) => 380 - 0.0139 * dx * dx
const storedSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-we-stored')}</defs>
${T(90, 44, 22, 'U<tspan dy="6" font-size="15">g</tspan><tspan dy="-6"> = mgh — linear in h</tspan>', 'start', '700')}
<line x1="90" y1="380" x2="470" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-we-stored)"/>
<line x1="90" y1="380" x2="90" y2="70" stroke="currentColor" stroke-width="2" marker-end="url(#arr-we-stored)"/>
${T(470, 404, 16, 'h', 'end')}
${T(102, 86, 16, 'U<tspan dy="5" font-size="12">g</tspan>')}
<g class="fig-muted">
${DASH(180, 380, 180, ugY(90))}
${DASH(290, 380, 290, ugY(200))}
<line x1="90" y1="${ugY(0, 90)}" x2="330" y2="${ugY(240, 90)}" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6"/>
<circle cx="180" cy="${ugY(90, 90)}" r="6" fill="currentColor"/>
<circle cx="290" cy="${ugY(200, 90)}" r="6" fill="currentColor"/>
${BRACKET(164, ugY(200, 90), ugY(90, 90))}
${T(156, ugY(145, 90) + 5, 15, 'same ΔU', 'end')}
</g>
<g class="fig-accent">
<line x1="90" y1="${ugY(0)}" x2="450" y2="${ugY(360)}" stroke="currentColor" stroke-width="4"/>
<circle cx="180" cy="${ugY(90)}" r="7" fill="currentColor"/>
<circle cx="290" cy="${ugY(200)}" r="7" fill="currentColor"/>
${BRACKET(312, ugY(200), ugY(90), 2.5)}
${T(324, ugY(145) + 5, 16, 'ΔU = mg Δh', 'start', '700')}
</g>
${T(180, 404, 16, 'h₁', 'middle', '700')}
${T(290, 404, 16, 'h₂', 'middle', '700')}
<g class="fig-accent"><line x1="90" y1="436" x2="120" y2="436" stroke="currentColor" stroke-width="4"/></g>
${T(128, 441, 14, 'floor as h = 0')}
<g class="fig-muted"><line x1="240" y1="436" x2="270" y2="436" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6"/></g>
${T(278, 441, 14, 'lower reference: U shifts, same ΔU')}
<g class="fig-muted">${DASH(520, 30, 520, 450, 2)}</g>
${T(580, 44, 22, 'U<tspan dy="6" font-size="15">s</tspan><tspan dy="-6"> = ½kx² — quadratic in x</tspan>', 'start', '700')}
<line x1="570" y1="380" x2="950" y2="380" stroke="currentColor" stroke-width="2" marker-end="url(#arr-we-stored)"/>
<line x1="740" y1="380" x2="740" y2="70" stroke="currentColor" stroke-width="2" marker-end="url(#arr-we-stored)"/>
${T(752, 86, 16, 'U<tspan dy="5" font-size="12">s</tspan>')}
${T(950, 404, 16, 'x', 'end')}
<g class="fig-muted">
${DASH(800, 380, 800, usY(60))}${DASH(740, usY(60), 800, usY(60))}
${DASH(860, 380, 860, usY(120))}${DASH(740, usY(120), 860, usY(120))}
${T(640, 404, 14, 'compression', 'middle')}
${T(900, 404, 14, 'stretch', 'middle')}
</g>
<g class="fig-accent">
<path d="${Array.from({ length: 53 }, (_, i) => -130 + i * 5).map((dx, i) => `${i === 0 ? 'M' : ' L'}${740 + dx} ${usY(dx).toFixed(1)}`).join('')}" fill="none" stroke="currentColor" stroke-width="4"/>
<circle cx="800" cy="${usY(60).toFixed(1)}" r="7" fill="currentColor"/>
<circle cx="860" cy="${usY(120).toFixed(1)}" r="7" fill="currentColor"/>
</g>
${T(740, 404, 16, '0', 'middle')}
${T(800, 404, 16, 'x', 'middle', '700')}
${T(860, 404, 16, '2x', 'middle', '700')}
${T(730, usY(60) + 5, 15, '1×', 'end', '700')}
${T(730, usY(120) + 5, 15, '4×', 'end', '700')}
${T(570, 441, 14, 'x from natural length · double the compression → 4× the energy')}
</svg>`

/* 5 — Conservative vs nonconservative forces: two paths to one summit, and path length for friction (replace-table, 560×440) */
const pathsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-we-paths')}</defs>
<line x1="20" y1="220" x2="236" y2="220" stroke="currentColor" stroke-width="3"/>
<line x1="236" y1="220" x2="236" y2="70" stroke="currentColor" stroke-width="3"/>
<line x1="236" y1="70" x2="300" y2="70" stroke="currentColor" stroke-width="3"/>
<circle cx="60" cy="220" r="6" fill="currentColor"/>
${T(60, 242, 14, 'A', 'middle', '700')}
<circle cx="268" cy="70" r="6" fill="currentColor"/>
${T(268, 56, 14, 'B', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-we-paths-b')}</defs>
<path d="M60 214 L228 214 L228 78" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arr-we-paths-b)"/>
${T(150, 206, 13, 'ladder', 'middle')}
<path d="M60 218 C 20 150, 130 190, 130 130 C 130 90, 170 150, 200 120 C 220 100, 225 76, 258 74" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#arr-we-paths-b)"/>
${T(70, 120, 13, 'trail', 'middle')}
</g>
${BRACKET(316, 70, 220)}
${T(326, 150, 15, 'h', 'start', '700')}
${T(350, 90, 16, 'Conservative', 'start', '700')}
${T(350, 110, 13, 'gravity · spring · electrostatic')}
${T(350, 134, 14, 'ladder or trail:')}
${T(350, 154, 14, 'W<tspan dy="4" font-size="11">g</tspan><tspan dy="-4"> = −mgh either way</tspan>', 'start', '700')}
${T(350, 178, 14, 'path-independent → U exists')}
<g class="fig-accent">
<defs>${ARROW('arr-we-paths-b2')}</defs>
<path d="M380 248 A22 22 0 1 1 402 226" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#arr-we-paths-b2)"/>
</g>
${T(414, 231, 13, 'closed loop: W = 0')}
<g class="fig-muted">${DASH(20, 262, 540, 262)}</g>
<line x1="20" y1="400" x2="300" y2="400" stroke="currentColor" stroke-width="3"/>
<circle cx="60" cy="400" r="6" fill="currentColor"/>
${T(60, 422, 14, 'A', 'middle', '700')}
<circle cx="240" cy="400" r="6" fill="currentColor"/>
${T(240, 422, 14, 'B', 'middle', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-we-paths-r')}</defs>
${ARR(66, 392, 230, 392, 'arr-we-paths-r')}
${T(150, 384, 13, 'short: −f·d', 'middle')}
<path d="M60 394 C 90 300, 210 300, 238 392" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#arr-we-paths-r)"/>
${T(150, 316, 13, 'long: −f·L — more heat', 'middle')}
</g>
${T(350, 300, 16, 'Nonconservative', 'start', '700')}
${T(350, 320, 13, 'friction · air drag · pushes')}
${T(350, 344, 14, 'work depends on the')}
${T(350, 364, 14, 'path length', 'start', '700')}
${T(350, 388, 14, 'drains mechanical energy')}
${T(350, 408, 14, 'as heat → no U')}
</svg>`

/* 6 — Conservation of mechanical energy: bar charts down a frictionless and a rough slope (lead, 1000×460) */
const slopePanel = (ox: number, friction: boolean) => {
  // incline from (ox+70, 90) to (ox+330, 270), then flat to ox+400
  const ballAt = (t: number) => ({ x: ox + 70 + 260 * t, y: 90 + 180 * t })
  const balls = [0, 0.5, 1].map((t) => {
    const p = ballAt(t)
    return `<circle cx="${(p.x - 6).toFixed(0)}" cy="${(p.y - 14).toFixed(0)}" r="12" fill="currentColor"/>`
  }).join('')
  const slope = `<path d="M${ox + 70} 90 L${ox + 330} 270 L${ox + 400} 270" fill="none" stroke="currentColor" stroke-width="3"/><line x1="${ox + 70}" y1="90" x2="${ox + 70}" y2="270" stroke="currentColor" stroke-width="2" stroke-dasharray="5 5"/>`
  const base = 410
  const xs = [ox + 70, ox + 200, ox + 330]
  const total = 110
  const stacks = friction
    ? [{ u: 110, k: 0, l: 0 }, { u: 55, k: 40, l: 15 }, { u: 0, k: 80, l: 30 }]
    : [{ u: 110, k: 0, l: 0 }, { u: 55, k: 55, l: 0 }, { u: 0, k: 110, l: 0 }]
  const bars = stacks.map((s, i) => {
    const x = xs[i] - 25
    let y = base
    let out = ''
    if (s.u) { out += `<g class="fig-accent">${BAR(x, y, 50, s.u)}</g>`; y -= s.u }
    if (s.k) { out += `<g class="fig-accent-2">${BAR(x, y, 50, s.k)}</g>`; y -= s.k }
    if (s.l) { out += `<g class="fig-muted">${BAR(x, y, 50, s.l, 0.45)}</g>`; y -= s.l }
    return out
  }).join('')
  const line = `<g class="fig-muted">${DASH(ox + 30, base - total, ox + 380, base - total, 2)}</g>`
  const labels = `${T(xs[0], 432, 14, 'top', 'middle')}${T(xs[1], 432, 14, 'midway', 'middle')}${T(xs[2], 432, 14, 'bottom', 'middle')}`
  return slope + balls + line + bars + labels
}
const consSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(50, 40, 20, 'Frictionless: KE₀ + U₀ = KE<tspan dy="5" font-size="14">f</tspan><tspan dy="-5"> + U</tspan><tspan dy="5" font-size="14">f</tspan>', 'start', '700')}
${slopePanel(0, false)}
${T(48, 185, 16, 'h', 'end', '700')}
${T(400, 150, 16, 'v<tspan dy="5" font-size="12">bottom</tspan><tspan dy="-5"> = √(2gh)</tspan>', 'end', '700')}
${T(400, 174, 14, 'mass and path irrelevant', 'end')}
<g class="fig-muted">${T(36, 296, 14, 'E', 'end')}</g>
${T(400, 292, 14, 'KE + U = constant', 'end', '700')}
<g class="fig-accent"><rect x="300" y="58" width="14" height="14" fill="currentColor" fill-opacity="0.55"/></g>
${T(320, 70, 14, 'U = mgh')}
<g class="fig-accent-2"><rect x="300" y="80" width="14" height="14" fill="currentColor" fill-opacity="0.55"/></g>
${T(320, 92, 14, 'KE = ½mv²')}
<g class="fig-muted">${DASH(500, 30, 500, 450, 2)}</g>
${T(550, 40, 20, 'Friction: KE₀ + U₀ = KE<tspan dy="5" font-size="14">f</tspan><tspan dy="-5"> + U</tspan><tspan dy="5" font-size="14">f</tspan><tspan dy="-5"> + E</tspan><tspan dy="5" font-size="14">lost</tspan>', 'start', '700')}
${slopePanel(500, true)}
<g class="fig-muted"><rect x="800" y="58" width="14" height="14" fill="currentColor" fill-opacity="0.45"/></g>
${T(820, 70, 14, 'E<tspan dy="4" font-size="11">lost</tspan><tspan dy="-4"> → heat, sound</tspan>')}
${T(900, 150, 16, 'mechanical energy falls,', 'end', '700')}
${T(900, 174, 14, 'total energy still constant', 'end')}
${T(900, 292, 14, 'KE + U + E<tspan dy="4" font-size="11">lost</tspan><tspan dy="-4"> = constant</tspan>', 'end', '700')}
</svg>`

/* 7 — Power: the same work in less time, and P = Fv at constant speed (lead, 1000×460) */
const hoist = (cx: number, label: string, sub: string, slow: boolean) => {
  const frame = `<line x1="${cx - 70}" y1="120" x2="${cx + 70}" y2="120" stroke="currentColor" stroke-width="3"/><line x1="${cx}" y1="120" x2="${cx}" y2="170" stroke="currentColor" stroke-width="2"/>`
  const top = `${BOX(cx - 30, 170, 60, 44, 8, 2.5, 0.08)}${T(cx, 198, 14, 'mg', 'middle', '700')}`
  const ghost = `<g class="fig-muted"><rect x="${cx - 30}" y="330" width="60" height="44" rx="8" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/></g>`
  const h = `<g class="fig-accent"><defs>${ARROW(`arr-we-pow-b-${slow ? 's' : 'f'}`)}</defs>${ARR(cx + 48, 330, cx + 48, 220, `arr-we-pow-b-${slow ? 's' : 'f'}`, slow ? 2.5 : 5)}${T(cx + 58, 280, 15, 'h', 'start', '700')}</g>`
  const clock = slow
    ? `<circle cx="${cx - 48}" cy="275" r="18" fill="none" stroke="currentColor" stroke-width="2"/><path d="M${cx - 48} 275 L${cx - 48} 257 A18 18 0 1 1 ${cx - 66} 275 z" fill="currentColor" fill-opacity="0.35"/>`
    : `<circle cx="${cx - 48}" cy="275" r="18" fill="none" stroke="currentColor" stroke-width="2"/><path d="M${cx - 48} 275 L${cx - 48} 257 A18 18 0 0 1 ${cx - 30} 275 z" fill="currentColor" fill-opacity="0.35"/>`
  return frame + top + ghost + h + clock + T(cx, 404, 16, label, 'middle', '700') + T(cx, 428, 15, sub, 'middle')
}
const powerSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(60, 44, 22, 'P = W / t: same work, different rate', 'start', '700')}
${T(60, 72, 15, 'both lift the same weight through the same h: W = mgh')}
${hoist(160, 'slow motor: time 4t', 'P = W / 4t', true)}
${hoist(380, 'strong motor: time t', 'P = W / t  (4× the power)', false)}
<g class="fig-muted">${DASH(510, 30, 510, 450, 2)}</g>
${T(560, 44, 22, 'P = F v: cruising still costs power', 'start', '700')}
<line x1="560" y1="309" x2="960" y2="309" stroke="currentColor" stroke-width="3"/>
${BOX(640, 230, 160, 60, 14, 2.5, 0.08)}
<circle cx="675" cy="295" r="14" fill="currentColor"/>
<circle cx="765" cy="295" r="14" fill="currentColor"/>
<defs>${ARROW('arr-we-pow')}</defs>
${ARR(690, 190, 790, 190, 'arr-we-pow', 3)}
${T(740, 176, 15, 'v constant', 'middle', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-we-pow-b')}</defs>
${ARR(802, 260, 890, 260, 'arr-we-pow-b', 4)}
${T(846, 248, 15, 'F<tspan dy="4" font-size="11">engine</tspan>', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-we-pow-r')}</defs>
${ARR(638, 260, 550, 260, 'arr-we-pow-r', 4)}
${T(594, 248, 15, 'F<tspan dy="4" font-size="11">drag</tspan>', 'middle', '700')}
</g>
${T(560, 350, 15, 'constant v → F<tspan dy="4" font-size="11">engine</tspan><tspan dy="-4"> = F</tspan><tspan dy="4" font-size="11">drag</tspan><tspan dy="-4">, ΔKE = 0</tspan>')}
${T(560, 376, 15, 'yet P = F<tspan dy="4" font-size="11">drag</tspan><tspan dy="-4"> · v is large at highway speed</tspan>', 'start', '700')}
<g class="fig-muted">${T(560, 402, 14, 'drag grows with v: that power ends up as heat, not as KE')}</g>
<g class="fig-muted">${T(560, 428, 14, 'a weak motor still lifts any load: it just takes longer')}</g>
</svg>`

/* 8 — Simple machines: the ramp (lesson numbers), a lever and a two-strand pulley (replace-table, 560×440) */
const machinesSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(20, 24, 14, 'F<tspan dy="3" font-size="10">in</tspan><tspan dy="-3"> d</tspan><tspan dy="3" font-size="10">in</tspan><tspan dy="-3"> = F</tspan><tspan dy="3" font-size="10">out</tspan><tspan dy="-3"> d</tspan><tspan dy="3" font-size="10">out</tspan><tspan dy="-3">: less force, more distance, the same work</tspan>', 'start', '700')}
<line x1="20" y1="210" x2="540" y2="210" stroke="currentColor" stroke-width="3"/>
<path d="M30 210 L262 150 L262 210 z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/>
<line x1="262" y1="150" x2="330" y2="150" stroke="currentColor" stroke-width="2.5"/>
${T(140, 204, 14, '6 m', 'middle', '700')}
${T(268, 186, 14, '1.5 m', 'start', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-we-mach-b')}</defs>
<circle cx="142" cy="164" r="16" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2.5"/>
${ARR(156, 158, 224, 140, 'arr-we-mach-b', 3.5)}
${T(170, 126, 14, '200 N along the ramp', 'start', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-we-mach-r')}</defs>
${ARR(360, 208, 360, 152, 'arr-we-mach-r', 3.5)}
${T(372, 176, 14, '800 N straight up', 'start', '700')}
${T(372, 196, 13, '(the barrel weighs 800 N)')}
</g>
${T(280, 240, 15, '800 N × 1.5 m = 200 N × 6 m = 1200 J', 'middle', '700')}
<g class="fig-muted">${T(280, 260, 13, 'MA = 6 / 1.5 = 4: a quarter of the force, four times the distance', 'middle')}</g>
<g class="fig-muted">${DASH(20, 276, 540, 276)}</g>
<line x1="30" y1="348" x2="250" y2="368" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
<path d="M180 386 L200 386 L190 364 z" fill="currentColor"/>
<g class="fig-accent">
<defs>${ARROW('arr-we-mach-b2')}</defs>
${ARR(40, 300, 40, 342, 'arr-we-mach-b2', 3)}
${T(52, 318, 13, 'F<tspan dy="3" font-size="10">in</tspan>', 'start', '700')}
</g>
<g class="fig-accent-2">${BOX(232, 342, 24, 24, 4, 2)}${T(244, 359, 11, 'load', 'middle', '700')}</g>
${T(110, 336, 13, 'effort arm', 'middle')}
${T(214, 336, 13, 'load arm', 'middle')}
${T(140, 412, 14, 'Lever: MA = effort arm / load arm', 'middle', '700')}
<g class="fig-muted">${T(140, 430, 13, 'pivot near the load → large MA', 'middle')}</g>
<line x1="380" y1="290" x2="500" y2="290" stroke="currentColor" stroke-width="3"/>
<path d="M404 292 L404 350 A16 16 0 0 0 436 350 L436 306 A16 16 0 0 1 468 306 L468 372" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="452" cy="306" r="16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<circle cx="420" cy="350" r="16" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5"/>
<line x1="420" y1="366" x2="420" y2="376" stroke="currentColor" stroke-width="2"/>
<g class="fig-accent-2">${BOX(404, 376, 32, 22, 4, 2)}${T(420, 392, 11, 'load', 'middle', '700')}</g>
<g class="fig-accent">
<defs>${ARROW('arr-we-mach-b3')}</defs>
${ARR(468, 372, 468, 396, 'arr-we-mach-b3', 3)}
${T(480, 390, 13, 'F<tspan dy="3" font-size="10">in</tspan>', 'start', '700')}
</g>
${T(386, 332, 12, '2 strands', 'end')}
${T(440, 412, 14, 'Pulley: MA = supporting strands', 'middle', '700')}
<g class="fig-muted">${T(440, 430, 13, 'here 2 → half the force, twice the rope', 'middle')}</g>
</svg>`

/* 9 — Scaling: stopping distance (energy) vs stopping time (momentum) when speed or mass doubles (lead, 1000×460) */
const cellBars = (x0: number, base: number, before: string, after: string, mult: number, cls: 'fig-accent-2' | 'fig-accent') => {
  const unit = 25
  return `<g class="${cls}">${BAR(x0 + 70, base, 50, unit)}${BAR(x0 + 170, base, 50, unit * mult)}</g>` +
    `${T(x0 + 95, base - unit - 8, 15, '1×', 'middle', '700')}${T(x0 + 195, base - unit * mult - 8, 15, `${mult}×`, 'middle', '700')}` +
    `${T(x0 + 95, base + 20, 14, before, 'middle')}${T(x0 + 195, base + 20, 14, after, 'middle')}` +
    `<line x1="${x0 + 50}" y1="${base}" x2="${x0 + 250}" y2="${base}" stroke="currentColor" stroke-width="1.5"/>`
}
const scalingSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(60, 40, 22, 'Same braking force F — what doubles, what quadruples', 'start', '700')}
<g class="fig-accent-2">${T(440, 84, 17, 'stopping distance', 'middle', '700')}${T(440, 106, 14, 'd = KE / F ∝ mv²', 'middle')}</g>
<g class="fig-accent">${T(770, 84, 17, 'stopping time', 'middle', '700')}${T(770, 106, 14, 't = p / F ∝ mv', 'middle')}</g>
<g class="fig-muted">
${DASH(60, 118, 940, 118, 2)}
${DASH(60, 268, 940, 268, 2)}
${DASH(290, 70, 290, 420, 2)}
${DASH(620, 70, 620, 420, 2)}
</g>
${T(70, 180, 18, 'double the speed', 'start', '700')}
${T(70, 204, 14, 'same mass')}
${cellBars(290, 232, 'v', '2v', 4, 'fig-accent-2')}
${cellBars(620, 232, 'v', '2v', 2, 'fig-accent')}
${T(70, 330, 18, 'double the mass', 'start', '700')}
${T(70, 354, 14, 'same speed')}
${cellBars(290, 382, 'm', '2m', 2, 'fig-accent-2')}
${cellBars(620, 382, 'm', '2m', 2, 'fig-accent')}
${T(500, 446, 16, 'distance pairs with energy (v²); time pairs with momentum (v) — the classic discrimination', 'middle', '700')}
</svg>`

export const mcatWorkEnergyFigures: DeckFigurePlacement[] = [
  {
    at: 'What Counts as Work',
    mode: 'replace-table',
    figure: {
      svg: signSvg,
      alt:
        'Three rows, each a block moving to the right with a displacement arrow d under it. Row 1: a blue force arrow points the same way as the motion — θ = 0°, along motion, W = +Fd (a push, a pulling rope). Row 2: a red friction arrow points opposite the motion — θ = 180°, opposes motion, W = −Fd (friction on a slide). Row 3: a blue support arrow points straight up while the block moves sideways — θ = 90°, perpendicular, W = 0 (a tray carried level, the normal force, the centripetal force). Footnote: held still, d = 0 so W = 0 however hard the muscles work.',
      caption: 'W = F d cos θ: positive along the motion, negative against it, zero when the force is perpendicular — schematic.',
    },
    blocks: [
      '$W = Fd\\cos\\theta$ — a **scalar** in joules (1 J = 1 N·m); only the force component **along** the displacement counts',
      'Along the motion: $+Fd$ · opposing it (friction): $-Fd$ · perpendicular to it: **zero**',
      '"No work" traps: a tray carried **horizontally**, the **normal** force, the **centripetal** force (so speed stays constant)',
      'Holding a weight still: $d = 0$ → zero mechanical work, whatever your muscles say',
    ],
  },
  {
    at: 'Kinetic Energy and the Work-Energy Theorem',
    mode: 'lead',
    figure: {
      svg: wetSvg,
      alt:
        'Left: the work–energy theorem as bars. A red bar KE₀ (before, ½mv₀²) on the left; an arrow labelled + W_net (all forces, Σ F d cos θ) leads to the after bar, which is the same KE₀ bar with a dashed-outlined block of net work stacked on top to make KE_f (½mv_f²); a bracket marks the added part as ΔKE. Note: positive net work speeds it up; negative net work (friction, brakes) drains KE. Right: a graph of KE against speed v, a parabola rising from the origin; dashed guides mark 1× at speed v and 4× at speed 2v. Note: double the speed → 4× the KE → about 4× the braking distance (d = KE/F at a fixed braking force).',
      caption: 'W_net = ΔKE: net work is stacked onto the kinetic energy (illustrative bars); because KE ∝ v², doubling speed quadruples KE and braking distance.',
    },
    blocks: [
      '$W_{net} = \\Delta KE$: the **net** work of all forces — links force, distance and speed with no time',
      '$KE = \\tfrac{1}{2}mv^2 \\propto v^2$: double the speed, quadruple the energy (and the braking distance)',
    ],
  },
  {
    at: 'Worked Example — Pulling a Sled',
    mode: 'lead',
    figure: {
      svg: sledSvg,
      alt:
        'Left: a 6 kg sled on snow. A blue rope force F = 50 N points up and to the right at 37° above the horizontal; dashed components show F cos 37° = 40 N horizontally and 30 N vertically. A red friction arrow of 10 N points left along the snow. Grey arrows for the normal force N (up) and weight mg (down) are each marked ⊥ d → 0 J. A displacement arrow underneath reads d = 10 m (from rest). Right, the work ledger: rope 50 × 10 × 0.8 = +400 J (blue); friction −10 × 10 = −100 J (red); gravity and normal (perpendicular) 0 J; W_net = +300 J. Then W_net = ΔKE = ½(6)v² − 0, so v² = 100 and v = 10 m/s. Note: no acceleration, no time — forces and distance go straight to speed.',
      caption: 'The sled example as a picture and a ledger: only the 40 N component along d works; +400 − 100 = 300 J of net work becomes ½(6)v², so v = 10 m/s.',
    },
    blocks: [
      '6 kg sled from rest; rope 50 N at 37° ($\\cos 37^\\circ \\approx 0.8$), friction 10 N, over 10 m — find $v$',
      'Only the component **along** $d$ works: $W_{net} = 400 - 100 = 300$ J $= \\tfrac{1}{2}(6)v^2$ → $v = 10$ m/s',
    ],
  },
  {
    at: 'Stored Energy',
    mode: 'lead',
    figure: {
      svg: storedSvg,
      alt:
        'Left: a graph of gravitational potential energy U_g against height h. A blue straight line through the origin (floor as h = 0) rises with slope mg; two points at h₁ and h₂ are joined by a bracket ΔU = mg Δh. A dashed grey parallel line sits higher — a lower reference height — and its bracket between the same two heights reads "same ΔU": the reference shifts U but not ΔU. Right: a graph of spring potential energy U_s against x, measured from natural length, with compression on the left and stretch on the right of zero. A blue parabola rises symmetrically; dashed guides mark 1× at x and 4× at 2x. Footnote: double the compression → 4× the stored energy.',
      caption: 'Stored energy, illustrative: U_g = mgh is a straight line whose zero is yours to choose (only ΔU matters); U_s = ½kx² is a parabola, so doubling x quadruples the energy.',
    },
    blocks: [
      '**Gravitational** $U_g = mgh$ — from any reference height you choose; only **changes** in $U_g$ matter',
      '**Elastic** $U_s = \\tfrac{1}{2}kx^2$ ($x$ from natural length): double the compression → **4×** the energy',
    ],
  },
  {
    at: 'Conservative vs. Nonconservative Forces',
    mode: 'replace-table',
    figure: {
      svg: pathsSvg,
      alt:
        'Top: a start point A on the ground and a summit B on a cliff of height h. Two blue routes reach B: a solid path along the ground and straight up a ladder, and a dashed winding trail. Text: conservative (gravity, spring, electrostatic) — ladder or trail, W_g = −mgh either way; path-independent → a potential energy U exists; a small circular arrow reads loop: W = 0. Bottom: A and B on a flat floor with two red routes: a short straight path (−f·d) and a long dashed arc (−f·L, more heat). Text: nonconservative (friction, air drag, pushes) — work depends on the path length; drains mechanical energy as heat → no U.',
      caption: 'Conservative forces care only about the endpoints (the same −mgh by ladder or trail, zero around a loop); friction charges by the metre — schematic.',
    },
    blocks: [
      '**Conservative** (gravity, spring, electrostatic): work is **path-independent**, zero around a closed loop, and has a potential energy',
      '**Nonconservative** (friction, air resistance, applied pushes): work depends on the path; removes (or adds) mechanical energy; no $U$',
      'Gravity sees only the **height change**: a winding trail and a vertical ladder to the same summit cost the same $mgh$',
    ],
  },
  {
    at: 'Conservation of Mechanical Energy',
    mode: 'lead',
    figure: {
      svg: consSvg,
      alt:
        'Two panels, each a ball at the top, midway and bottom of a slope of height h with a stacked energy bar under each position (blue U = mgh, red KE = ½mv², grey E_lost). Left, frictionless: top is all U, midway half U and half KE, bottom all KE; every stack reaches the same dashed line E — KE + U = constant; v_bottom = √(2gh), mass and path irrelevant. Right, with friction: a growing grey E_lost (heat, sound) segment caps each stack so the blue-plus-red mechanical part shrinks down the slope, while the whole stack still reaches the dashed line — KE + U + E_lost = constant; mechanical energy falls, total energy still constant.',
      caption: 'Energy bar charts down a slope (illustrative): without friction KE + U stays constant; with friction the gap is E_lost — total energy is always conserved, mechanical energy only in the frictionless idealization.',
    },
    blocks: [
      'Only conservative forces: $KE_0 + U_0 = KE_f + U_f$ — any drop or slide through $h$ gives $v = \\sqrt{2gh}$',
      'With friction add $E_{lost}$: **total** energy is always conserved; **mechanical** energy only if frictionless',
    ],
  },
  {
    at: 'Power: The Rate of Doing Work',
    mode: 'lead',
    figure: {
      svg: powerSvg,
      alt:
        'Left: two hoists lift the same weight mg through the same height h, so W = mgh for both. The slow motor takes time 4t (a clock three-quarters shaded, thin blue arrow): P = W/4t. The strong motor takes time t (a quarter-shaded clock, thick blue arrow): P = W/t, four times the power. Right: a car cruising at constant v on a road; a blue F_engine arrow forward equals a red F_drag arrow backward. Text: constant v → F_engine = F_drag and ΔKE = 0, yet P = F_drag · v is large at highway speed; drag grows with v — the power heats the air and the tires, not the KE; a weak motor still lifts any load, it just takes longer.',
      caption: 'Power is a rate: the same work in a quarter of the time is four times the power (illustrative); at constant speed P = Fv all goes to drag, not to kinetic energy.',
    },
    blocks: [
      '$P = W/t = \\Delta E/t$, and $P = Fv$ for a force pushing at speed $v$ — watts are joules **per second**',
      'A rating says how **fast** energy converts, not how much; cruising at constant $v$ still needs $P = F_{drag}v$',
    ],
  },
  {
    at: 'Simple Machines: Trading Force for Distance',
    mode: 'replace-table',
    figure: {
      svg: machinesSvg,
      alt:
        'Top: a ramp 6 m long rising 1.5 m onto a platform. A blue barrel on the ramp is pushed by a blue arrow of 200 N along the ramp; beside the platform a red arrow shows the alternative, 800 N straight up (the barrel weighs 800 N). Equation: 800 N × 1.5 m = 200 N × 6 m = 1200 J; MA = 6 / 1.5 = 4, a quarter of the force over four times the distance. Bottom left: a lever — a bar on a fulcrum placed near a red load box, a blue effort force F_in pressing down on the long effort arm; Lever: MA = effort arm / load arm, pivot near the load → large MA. Bottom right: a rope anchored to a ceiling, passing under a movable pulley that carries a red load, up over a fixed pulley and down to a blue F_in pull; two strands support the load; Pulley: MA = supporting strands, here 2 → half the force, twice the rope.',
      caption: 'Ideal machines trade force for distance, never energy: the lesson\'s ramp (6 m long, 1.5 m high) cuts 800 N to 200 N but still costs 1200 J; lever and pulley obey the same F·d bookkeeping.',
    },
    blocks: [
      'An ideal machine **cannot multiply work or energy** — only force (or speed): $F_{in}d_{in} = F_{out}d_{out}$',
      '$MA = F_{out}/F_{in} = d_{in}/d_{out}$ — ramp: length / height · lever: effort arm / load arm · pulley: supporting strands',
      'Ramp 6 m long rising 1.5 m: $MA = 4$ — one quarter the force, four times the distance, the same 1200 J',
      'Real machines add friction, so the actual force needed always exceeds the ideal',
    ],
  },
  {
    at: 'Scaling Arguments Answer Whole Question Sets',
    mode: 'lead',
    figure: {
      svg: scalingSvg,
      alt:
        'A 2×2 grid of bar pairs under the heading "same braking force F — what doubles, what quadruples". Columns: stopping distance d = KE/F ∝ mv² (red bars) and stopping time t = p/F ∝ mv (blue bars). Row 1, double the speed at the same mass: distance goes from 1× at v to 4× at 2v; time goes from 1× to 2×. Row 2, double the mass at the same speed: distance 1× to 2×; time 1× to 2×. Footer: distance pairs with energy (v²); time pairs with momentum (v) — the classic discrimination.',
      caption: 'Scaling at a fixed braking force: doubling speed quadruples stopping distance (energy, v²) but only doubles stopping time (momentum, v); doubling mass doubles both.',
    },
    blocks: [
      'Double $v$: stopping **distance** ×4 ($d = KE/F \\propto v^2$), stopping **time** only ×2 ($t = p/F \\propto v$)',
      'Double the mass at the same speed: $KE$ and $p$ both double — distance and time both double',
    ],
  },
]
