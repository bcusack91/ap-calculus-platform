import type { DeckFigurePlacement } from './index'

/**
 * Momentum & Collisions (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (two equal-area bumps
 * on an F–t graph, a ball that sticks vs. one that bounces, three before/after
 * collision rows, the Newton's-cradle swap, momentum and KE bars, rifle recoil,
 * a two-stage ballistic pendulum, a 2-D crash with its vector triangle, and a
 * centre of mass on ice and on a parabola) — no textbook, prep-company or AAMC
 * figure was copied. The only numbers drawn are the lesson's own worked
 * numbers (bat 2100 N for 5 ms vs. airbag 21 N for 0.5 s; 2 kg at 6 m/s onto
 * 4 kg → 2 m/s, 36 J → 12 J; rifle 4 kg / bullet 0.01 kg at 400 m/s; bullet
 * 0.02 kg at 200 m/s, block 1.98 kg, v′ = 2 m/s, h = 0.2 m, 400 J → 4 J; the
 * east/north 1000 kg cars at 20 m/s → 14 m/s at 45°; skaters 60 kg / 40 kg,
 * 10 m apart, CM 4 m from the heavier). Shape-only curves say "illustrative".
 *
 * Colour convention across the deck: BEFORE / momentum in blue (fig-accent),
 * AFTER / kinetic energy and losses in red (fig-accent-2); walls, roads, ice
 * and guides in grey (fig-muted); the rest in the text colour.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-mo-<figure>[-b|-r|-m]).
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

/** A straight arrow in the current colour ending in the marker `id`. */
const ARR = (x1: number, y1: number, x2: number, y2: number, id: string, sw = 3) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-end="url(#${id})"/>`

/** A filled ball (current colour, tinted) with an outline. */
const BALL = (cx: number, cy: number, r: number, fillOpacity = 0.22) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" fill-opacity="${fillOpacity}" stroke="currentColor" stroke-width="2.5"/>`

/** A cart: a tinted rounded body with two wheels, drawn in the current colour. */
const CART = (x: number, y: number, w: number, h: number) =>
  `${BOX(x, y, w, h, 8, 2.5, 0.18)}<circle cx="${x + w * 0.25}" cy="${y + h + 8}" r="8" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/><circle cx="${x + w * 0.75}" cy="${y + h + 8}" r="8" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>`

/** A half-sine bump from x0 to x0+base rising `h` above baseY (closed to the baseline). */
const BUMP = (x0: number, base: number, h: number, baseY: number) => {
  let d = `M${x0} ${baseY}`
  for (let i = 1; i <= 40; i++) {
    const t = i / 40
    d += ` L${(x0 + base * t).toFixed(1)} ${(baseY - h * Math.sin(Math.PI * t)).toFixed(1)}`
  }
  return d + ' Z'
}

/** A subscript as tspans (drops 5 units, then returns to the baseline for the text that follows). */
const SUB = (s: string) => `<tspan dy="5" font-size="13">${s}</tspan><tspan dy="-5"> </tspan>`

/** A dimension bracket: horizontal line with end ticks. */
const HBRACKET = (x1: number, x2: number, y: number) =>
  `<path d="M${x1} ${y - 6} L${x1} ${y + 6} M${x1} ${y} L${x2} ${y} M${x2} ${y - 6} L${x2} ${y + 6}" fill="none" stroke="currentColor" stroke-width="2"/>`

/** A vertical dimension bracket. */
const VBRACKET = (x: number, y1: number, y2: number) =>
  `<path d="M${x - 6} ${y1} L${x + 6} ${y1} M${x} ${y1} L${x} ${y2} M${x - 6} ${y2} L${x + 6} ${y2}" fill="none" stroke="currentColor" stroke-width="2"/>`

/** Hatching behind a wall / ceiling: short diagonal strokes inside the given rect. */
const HATCH = (x: number, y: number, w: number, h: number, step = 14) => {
  let d = ''
  for (let s = 0; s < w + h; s += step) {
    const x1 = x + Math.max(0, s - h)
    const y1 = y + Math.min(h, s)
    const x2 = x + Math.min(w, s)
    const y2 = y + Math.max(0, s - w)
    d += `M${x1} ${y1} L${x2} ${y2} `
  }
  return `<path d="${d}" stroke="currentColor" stroke-width="1.5" fill="none"/>`
}

/* 1 — Impulse is the area under F–t: two equal-area bumps, tall-narrow vs low-wide (lead, 1000×460) */
const impulseSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-mo-imp')}</defs>
${ARR(100, 380, 950, 380, 'arr-mo-imp', 2.5)}
${ARR(100, 380, 100, 40, 'arr-mo-imp', 2.5)}
${T(72, 62, 24, 'F', 'start', '700')}
${T(956, 388, 24, 't', 'start', '700')}
<g class="fig-accent-2">
<path d="${BUMP(170, 100, 290, 380)}" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="3"/>
${T(290, 112, 20, 'tall and narrow', 'start', '700')}
${T(290, 140, 18, 'bat on ball: 2100 N for 5 ms')}
${HBRACKET(170, 270, 402)}
${T(220, 428, 18, 'Δt', 'middle')}
</g>
<g class="fig-accent">
<path d="${BUMP(420, 500, 58, 380)}" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="3"/>
${T(670, 272, 20, 'low and wide', 'middle', '700')}
${T(670, 300, 18, 'airbag: 21 N for 0.5 s', 'middle')}
${HBRACKET(420, 920, 402)}
${T(670, 428, 18, 'Δt (100× longer)', 'middle')}
</g>
${T(650, 96, 26, 'J = F·Δt = Δp', 'middle', '700')}
${T(650, 130, 20, '= the area under the F–t curve', 'middle')}
${T(650, 166, 20, 'equal shaded areas ⇒ equal Δp = 10.5 kg·m/s', 'middle', '700')}
<g class="fig-muted">${T(650, 196, 17, 'same momentum lost — only how violently differs', 'middle')}</g>
</svg>`

/* 2 — Sign care: a ball that sticks (Δp = mv) vs one that bounces (|Δp| = 2mv) (lead, 1000×460) */
const wallPanel = (x0: number, title: string, bounce: boolean, tag: string) => {
  const wallX = x0 + 390
  const before = `<g class="fig-accent"><defs>${ARROW(`arr-mo-rev-${tag}-b`)}</defs>${BALL(x0 + 150, 130, 22)}${ARR(x0 + 180, 130, wallX - 14, 130, `arr-mo-rev-${tag}-b`)}${T(x0 + 285, 112, 20, '+mv', 'middle', '700')}</g>`
  const after = bounce
    ? `<g class="fig-accent-2"><defs>${ARROW(`arr-mo-rev-${tag}-r`)}</defs>${BALL(x0 + 330, 250, 22)}${ARR(x0 + 300, 250, x0 + 120, 250, `arr-mo-rev-${tag}-r`)}${T(x0 + 210, 232, 20, '−mv', 'middle', '700')}</g>`
    : `<g class="fig-accent-2">${BALL(wallX - 24, 250, 22)}<path d="M${wallX - 46} ${236} Q${wallX - 54} 250 ${wallX - 46} 264" fill="none" stroke="currentColor" stroke-width="2.5"/>${T(x0 + 236, 256, 20, 'v = 0 — it sticks', 'middle', '700')}</g>`
  return `${T(x0 + 220, 44, 24, title, 'middle', '700')}
<g class="fig-muted">
<rect x="${wallX}" y="70" width="30" height="240" fill="currentColor" fill-opacity="0.18"/>
<rect x="${wallX}" y="70" width="30" height="240" fill="none" stroke="currentColor" stroke-width="2"/>
${HATCH(wallX, 70, 30, 240)}
${T(x0 + 40, 136, 17, 'before')}
${T(x0 + 40, 256, 17, 'after')}
</g>
${before}${after}`
}
const reversalSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${wallPanel(30, 'Clay: sticks', false, 'c')}
${wallPanel(540, 'Rubber: bounces', true, 'r')}
${T(250, 362, 22, '|Δp| = |0 − mv| = mv', 'middle', '700')}
${T(250, 396, 19, 'wall feels impulse mv', 'middle')}
${T(760, 362, 22, '|Δp| = |−mv − (+mv)| = 2mv', 'middle', '700')}
<g class="fig-accent-2">${T(760, 396, 19, 'wall feels impulse 2mv — double', 'middle', '700')}</g>
<g class="fig-muted">${T(500, 440, 17, 'a reversal makes the speeds ADD in Δv', 'middle')}</g>
</svg>`

/* 3 — The collision taxonomy as three before/after rows (replace-table, 560×440) */
const taxRow = (y: number, kind: 'elastic' | 'inelastic' | 'perfect') => {
  const tag = kind[0]
  const before = `<g class="fig-accent"><defs>${ARROW(`arr-mo-tax-${tag}-b`)}</defs>${BALL(190, y, 15)}${ARR(208, y, 252, y, `arr-mo-tax-${tag}-b`, 2.5)}</g><g class="fig-accent-2">${BALL(282, y, 15)}</g>`
  const mid = `<g class="fig-muted"><defs>${ARROW(`arr-mo-tax-${tag}-m`)}</defs>${ARR(306, y, 336, y, `arr-mo-tax-${tag}-m`, 2.5)}</g>`
  let after = ''
  if (kind === 'elastic')
    after = `<g class="fig-accent">${BALL(412, y, 15)}<defs>${ARROW(`arr-mo-tax-${tag}-b2`)}</defs>${ARR(394, y, 364, y, `arr-mo-tax-${tag}-b2`, 2.5)}</g><g class="fig-accent-2"><defs>${ARROW(`arr-mo-tax-${tag}-r`)}</defs>${BALL(472, y, 15)}${ARR(490, y, 548, y, `arr-mo-tax-${tag}-r`, 2.5)}</g>`
  else if (kind === 'inelastic')
    after = `<g class="fig-accent">${BALL(412, y, 15)}<defs>${ARROW(`arr-mo-tax-${tag}-b2`)}</defs>${ARR(394, y, 376, y, `arr-mo-tax-${tag}-b2`, 2.5)}</g><g class="fig-accent-2"><defs>${ARROW(`arr-mo-tax-${tag}-r`)}</defs>${BALL(472, y, 15)}${ARR(490, y, 534, y, `arr-mo-tax-${tag}-r`, 2.5)}<path d="M428 ${y - 34} q4 -6 0 -12 q-4 -6 0 -12 M442 ${y - 34} q4 -6 0 -12 q-4 -6 0 -12 M456 ${y - 34} q4 -6 0 -12 q-4 -6 0 -12" fill="none" stroke="currentColor" stroke-width="1.8"/>${T(442, y + 34, 13, 'some KE → heat', 'middle')}</g>`
  else
    after = `<g class="fig-accent">${BALL(438, y, 15)}</g><g class="fig-accent-2"><defs>${ARROW(`arr-mo-tax-${tag}-r`)}</defs>${BALL(468, y, 15)}${ARR(490, y, 548, y, `arr-mo-tax-${tag}-r`, 2.5)}${T(453, y + 34, 13, 'stuck: one v′ · max KE lost', 'middle')}</g>`
  return before + mid + after
}
const taxonomySvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
<rect x="10" y="60" width="540" height="110" rx="12" fill="currentColor" fill-opacity="0.06"/>
<rect x="10" y="300" width="540" height="110" rx="12" fill="currentColor" fill-opacity="0.06"/>
${T(236, 44, 15, 'before', 'middle')}
${T(450, 44, 15, 'after', 'middle')}
</g>
${T(20, 108, 17, 'Elastic', 'start', '700')}
${T(20, 130, 14, 'p ✓  KE ✓')}
${T(20, 148, 13, 'bounce apart, no heat')}
${taxRow(118, 'elastic')}
${T(20, 228, 17, 'Inelastic', 'start', '700')}
${T(20, 250, 14, 'p ✓  KE ↓ some lost')}
${T(20, 268, 13, 'bounce apart, deform')}
${taxRow(238, 'inelastic')}
${T(20, 340, 17, 'Perfectly', 'start', '700')}
${T(20, 360, 17, 'inelastic', 'start', '700')}
${T(20, 382, 14, 'p ✓  KE ↓↓ max loss')}
${T(20, 400, 13, 'stick, one final v')}
${taxRow(352, 'perfect')}
${T(280, 432, 15, 'momentum survives all three — KE only the first', 'middle', '700')}
</svg>`

/* 4 — Equal masses, elastic, target at rest: they swap velocities (lead, 1000×460) */
const swapSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(420, 46, 22, 'equal masses · head-on · elastic · target at rest', 'middle', '700')}
<g class="fig-muted">
<line x1="40" y1="170" x2="700" y2="170" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="40" y1="290" x2="700" y2="290" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
${T(40, 100, 17, 'before')}
${T(40, 220, 17, 'after (elastic)')}
${T(40, 340, 17, 'if they stuck instead')}
${T(40, 362, 15, '(perfectly inelastic)')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-mo-swap-b')}</defs>
${BALL(300, 120, 28)}${T(300, 127, 18, '1', 'middle', '700')}
${ARR(334, 120, 440, 120, 'arr-mo-swap-b')}${T(388, 100, 20, 'v', 'middle', '700')}
</g>
<g class="fig-accent-2">
${BALL(540, 120, 28)}${T(540, 127, 18, '2', 'middle', '700')}
${T(540, 86, 17, 'at rest', 'middle')}
</g>
<g class="fig-accent">
${BALL(480, 240, 28)}${T(480, 247, 18, '1', 'middle', '700')}
${T(480, 206, 17, 'stops dead', 'middle')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mo-swap-r')}</defs>
${BALL(540, 240, 28)}${T(540, 247, 18, '2', 'middle', '700')}
${ARR(574, 240, 680, 240, 'arr-mo-swap-r')}${T(628, 220, 20, 'v', 'middle', '700')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-mo-swap-m')}</defs>
${BALL(512, 360, 28, 0.15)}${T(512, 367, 18, '1', 'middle', '700')}
${BALL(568, 360, 28, 0.15)}${T(568, 367, 18, '2', 'middle', '700')}
${ARR(602, 360, 680, 360, 'arr-mo-swap-m')}${T(641, 340, 20, 'v/2', 'middle', '700')}
</g>
<g class="fig-muted"><line x1="740" y1="70" x2="740" y2="400" stroke="currentColor" stroke-width="1.5"/></g>
${T(770, 112, 19, 'p = mv', 'start', '700')}
${T(770, 138, 19, 'KE = ½mv²')}
${T(770, 232, 19, 'p = mv', 'start', '700')}
${T(770, 258, 19, 'KE = ½mv²  ✓ same')}
${T(770, 352, 19, 'p = mv', 'start', '700')}
<g class="fig-accent-2">${T(770, 378, 19, 'KE = ¼mv²  half lost')}</g>
<g class="fig-muted">${T(420, 440, 17, 'velocities exchange — the Newton’s-cradle result', 'middle')}</g>
</svg>`

/* 5 — The worked perfectly inelastic collision audited: momentum bars equal, KE bars not (after, 1000×460) */
const auditSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<line x1="40" y1="178" x2="520" y2="178" stroke="currentColor" stroke-width="2"/>
<line x1="40" y1="338" x2="520" y2="338" stroke="currentColor" stroke-width="2"/>
${T(40, 60, 17, 'before')}
${T(40, 222, 17, 'after — coupled')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-mo-aud-b')}</defs>
${CART(70, 112, 90, 56)}${T(115, 146, 18, '2 kg', 'middle', '700')}
${ARR(166, 140, 250, 140, 'arr-mo-aud-b')}${T(208, 122, 18, '6 m/s', 'middle', '700')}
</g>
<g class="fig-accent-2">
${CART(300, 96, 120, 72)}${T(360, 138, 18, '4 kg', 'middle', '700')}
${T(360, 80, 16, 'at rest', 'middle')}
</g>
<g class="fig-accent">${CART(190, 272, 90, 56)}${T(235, 306, 18, '2 kg', 'middle', '700')}</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mo-aud-r')}</defs>
${CART(280, 256, 120, 72)}${T(340, 298, 18, '4 kg', 'middle', '700')}
${ARR(406, 300, 500, 300, 'arr-mo-aud-r')}${T(453, 282, 18, '2 m/s', 'middle', '700')}
</g>
${T(280, 390, 19, 'p = 2·6 + 4·0 = 12  →  v′ = 12 / 6 = 2 m/s', 'middle', '700')}
<g class="fig-muted">${T(280, 420, 16, 'slower than the mover; between 0 and 6 m/s ✓', 'middle')}</g>
<g class="fig-muted"><line x1="570" y1="380" x2="980" y2="380" stroke="currentColor" stroke-width="2"/></g>
<g class="fig-accent">
${T(680, 150, 19, 'momentum (kg·m/s)', 'middle', '700')}
<rect x="620" y="260" width="56" height="120" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<rect x="690" y="260" width="56" height="120" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
${T(648, 248, 18, '12', 'middle', '700')}${T(718, 248, 18, '12', 'middle', '700')}
${T(683, 190, 17, 'conserved ✓', 'middle')}
</g>
<g class="fig-accent-2">
${T(880, 150, 19, 'kinetic energy (J)', 'middle', '700')}
<rect x="820" y="236" width="56" height="144" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<rect x="890" y="332" width="56" height="48" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<rect x="890" y="236" width="56" height="96" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
${T(848, 224, 18, '36', 'middle', '700')}${T(918, 224, 18, '12', 'middle', '700')}
${T(918, 290, 15, '24 J', 'middle', '700')}
${T(918, 308, 13, 'lost', 'middle')}
${T(883, 190, 17, 'two-thirds gone', 'middle')}
</g>
<g class="fig-muted">
${T(648, 404, 16, 'before', 'middle')}${T(718, 404, 16, 'after', 'middle')}
${T(848, 404, 16, 'before', 'middle')}${T(918, 404, 16, 'after', 'middle')}
${T(783, 440, 16, 'the lost 24 J became heat, sound, deformation', 'middle')}
</g>
</svg>`

/* 6 — Explosions run the collision backward: rifle recoil with the lesson's numbers (lead, 1000×460) */
const recoilSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
${T(40, 70, 17, 'before: at rest')}
${T(40, 92, 17, 'p total = 0')}
${T(40, 210, 17, 'after')}
<line x1="40" y1="150" x2="960" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
<line x1="40" y1="340" x2="960" y2="340" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6"/>
</g>
${BOX(420, 62, 200, 44, 10, 2.5, 0.08)}
${T(520, 90, 18, 'rifle 4 kg', 'middle', '700')}
<g class="fig-accent-2"><circle cx="596" cy="84" r="8" fill="currentColor"/></g>
${T(640, 90, 16, '← bullet 0.01 kg inside')}
<g class="fig-accent">
<defs>${ARROW('arr-mo-rec-b')}</defs>
${BOX(330, 184, 200, 44, 10, 2.5, 0.18)}
${T(430, 212, 18, 'rifle 4 kg', 'middle', '700')}
${ARR(322, 206, 240, 206, 'arr-mo-rec-b')}
${T(230, 212, 18, '1 m/s', 'end', '700')}
${ARR(430, 290, 290, 290, 'arr-mo-rec-b', 5)}
${T(430, 322, 17, 'p = 4 kg·m/s', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mo-rec-r')}</defs>
<circle cx="600" cy="206" r="9" fill="currentColor"/>
${ARR(614, 206, 880, 206, 'arr-mo-rec-r')}
${T(746, 190, 18, '400 m/s', 'middle', '700')}
${ARR(600, 290, 740, 290, 'arr-mo-rec-r', 5)}
${T(670, 322, 17, 'p = 4 kg·m/s', 'middle', '700')}
</g>
${T(515, 262, 17, 'equal and opposite momenta → total still 0', 'middle')}
${T(500, 384, 22, 'KE = p² / 2m  at the same p', 'middle', '700')}
${T(330, 422, 20, 'rifle: 2 J', 'middle')}
<g class="fig-accent-2">${T(670, 422, 20, 'bullet: 800 J', 'middle', '700')}</g>
<g class="fig-muted">${T(500, 450, 16, 'the light fragment moves faster AND hoards the kinetic energy', 'middle')}</g>
</svg>`

/* 7 — The ballistic pendulum: momentum across the impact, energy across the swing (lead, 1000×460) */
const pendulumSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<rect x="300" y="28" width="680" height="14" fill="currentColor" fill-opacity="0.18"/>
${HATCH(300, 28, 680, 14, 18)}
<path d="M468 266 A230 230 0 0 0 606 214" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6"/>
<line x1="465" y1="330" x2="730" y2="330" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
<line x1="675" y1="220" x2="730" y2="220" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5"/>
</g>
<line x1="430" y1="42" x2="430" y2="270" stroke="currentColor" stroke-width="2.5"/>
<line x1="430" y1="42" x2="640" y2="160" stroke="currentColor" stroke-width="2.5"/>
${BOX(395, 270, 70, 60, 6, 2.5, 0.08)}
${T(430, 306, 15, '1.98 kg', 'middle', '700')}
${BOX(605, 160, 70, 60, 6, 2.5, 0.08)}
${T(640, 196, 15, '2 kg', 'middle', '700')}
${VBRACKET(730, 220, 330)}
${T(744, 282, 19, 'h = 0.2 m', 'start', '700')}
<g class="fig-accent-2">
<defs>${ARROW('arr-mo-pen-r')}</defs>
<circle cx="110" cy="300" r="9" fill="currentColor"/>
${ARR(125, 300, 300, 300, 'arr-mo-pen-r')}
${T(212, 282, 17, '0.02 kg · 200 m/s', 'middle', '700')}
<line x1="330" y1="190" x2="330" y2="370" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6"/>
${T(330, 180, 15, 'fence', 'middle', '700')}
${T(180, 100, 21, '1 · collision — momentum only', 'middle', '700')}
${T(180, 130, 20, 'mv = (M + m)v′', 'middle')}
${T(180, 158, 17, '0.02 · 200 = 2 · v′  →  v′ = 2 m/s', 'middle')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-mo-pen-b')}</defs>
${ARR(470, 300, 560, 300, 'arr-mo-pen-b')}
${T(515, 284, 17, 'v′ = 2 m/s', 'middle', '700')}
${T(790, 100, 21, '2 · swing — energy only', 'middle', '700')}
${T(790, 130, 20, '½(M + m)v′² = (M + m)gh', 'middle')}
${T(790, 158, 17, 'h = v′² / 2g = 4 / 20 = 0.2 m', 'middle')}
</g>
${T(500, 404, 20, 'KE: 400 J  →  4 J across the fence (99% to heat and splitting)  →  lifts 2 kg by 0.2 m', 'middle', '700')}
<g class="fig-muted">${T(500, 436, 17, 'momentum crosses the fence; kinetic energy does not', 'middle')}</g>
</svg>`

/* 8 — Two dimensions: each momentum component conserved separately (lead, 1000×460) */
const twoDSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">
<rect x="30" y="200" width="500" height="64" fill="currentColor" fill-opacity="0.12"/>
<rect x="248" y="40" width="64" height="400" fill="currentColor" fill-opacity="0.12"/>
<line x1="30" y1="232" x2="248" y2="232" stroke="currentColor" stroke-width="1.5" stroke-dasharray="10 10"/>
<line x1="312" y1="232" x2="530" y2="232" stroke="currentColor" stroke-width="1.5" stroke-dasharray="10 10"/>
<line x1="280" y1="264" x2="280" y2="440" stroke="currentColor" stroke-width="1.5" stroke-dasharray="10 10"/>
<line x1="280" y1="40" x2="280" y2="200" stroke="currentColor" stroke-width="1.5" stroke-dasharray="10 10"/>
${T(540, 238, 16, 'E')}${T(280, 60, 16, 'N', 'middle')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-mo-2d-b')}</defs>
${BOX(60, 214, 70, 36, 8, 2.5, 0.25)}
${ARR(134, 232, 200, 232, 'arr-mo-2d-b')}
${T(95, 200, 16, '1000 kg · 20 m/s east', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mo-2d-r')}</defs>
${BOX(262, 370, 36, 70, 8, 2.5, 0.25)}
${ARR(280, 366, 280, 300, 'arr-mo-2d-r')}
${T(300, 398, 16, '1000 kg', 'start', '700')}
${T(300, 418, 16, '20 m/s north', 'start', '700')}
</g>
<defs>${ARROW('arr-mo-2d')}</defs>
${BOX(250, 202, 60, 60, 8, 2.5, 0.1)}
${T(280, 237, 14, 'wreck', 'middle', '700')}
${ARR(312, 200, 400, 112, 'arr-mo-2d', 4)}
${T(392, 150, 17, '14 m/s at 45°', 'start', '700')}
${T(392, 172, 15, '2000 kg, locked', 'start')}
<g class="fig-muted"><line x1="570" y1="60" x2="570" y2="420" stroke="currentColor" stroke-width="1.5"/></g>
${T(790, 60, 21, 'conserve each component separately', 'middle', '700')}
<g class="fig-accent">
${ARR(620, 330, 840, 330, 'arr-mo-2d-b', 4)}
${T(730, 358, 18, `p${SUB('x')} = 2×10⁴`, 'middle', '700')}
</g>
<g class="fig-accent-2">
${ARR(840, 330, 840, 110, 'arr-mo-2d-r', 4)}
${T(852, 226, 18, `p${SUB('y')} = 2×10⁴`, 'start', '700')}
</g>
${ARR(620, 330, 836, 114, 'arr-mo-2d', 4)}
<path d="M660 330 A40 40 0 0 0 648 302" fill="none" stroke="currentColor" stroke-width="2"/>
${T(672, 316, 16, '45°')}
${T(700, 236, 18, 'p', 'middle', '700')}
${T(730, 394, 18, `v${SUB('x')} = v${SUB('y')} = 2×10⁴ / 2000 = 10 m/s`, 'middle')}
${T(730, 422, 18, 'v = 10√2 ≈ 14 m/s — not 20', 'middle', '700')}
</svg>`

/* 9 — Center of mass: skaters meet at the CM; an exploding shell's CM finishes the parabola (lead, 1000×460) */
const cmSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(270, 50, 21, 'pull on the rope: they meet AT the CM', 'middle', '700')}
${T(270, 80, 18, `x${SUB('cm')} = (60·0 + 40·10) / 100 = 4 m`, 'middle')}
<g class="fig-muted">
<line x1="40" y1="290" x2="500" y2="290" stroke="currentColor" stroke-width="3"/>
<line x1="106" y1="262" x2="420" y2="262" stroke="currentColor" stroke-width="2"/>
<path d="M80 300 L80 312 M224 300 L224 312 M440 300 L440 312" stroke="currentColor" stroke-width="2" fill="none"/>
${T(80, 334, 15, '0', 'middle')}${T(224, 334, 15, '4 m', 'middle')}${T(440, 334, 15, '10 m', 'middle')}
<line x1="224" y1="150" x2="224" y2="300" stroke="currentColor" stroke-width="2" stroke-dasharray="6 5"/>
${T(100, 372, 16, 'heavier moves 4 m, lighter 6 m — inverse to mass')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-mo-cm-b')}</defs>
${BALL(80, 262, 26)}${T(80, 268, 15, '60', 'middle', '700')}
${ARR(112, 222, 212, 222, 'arr-mo-cm-b')}${T(162, 206, 16, '4 m', 'middle', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-mo-cm-r')}</defs>
${BALL(440, 268, 20)}${T(440, 274, 15, '40', 'middle', '700')}
${ARR(414, 222, 236, 222, 'arr-mo-cm-r')}${T(325, 206, 16, '6 m', 'middle', '700')}
</g>
<path d="M216 142 L232 158 M232 142 L216 158" stroke="currentColor" stroke-width="3"/>
${T(224, 130, 16, 'CM', 'middle', '700')}
<g class="fig-muted"><line x1="540" y1="40" x2="540" y2="420" stroke="currentColor" stroke-width="1.5"/></g>
${T(770, 50, 21, 'internal forces cannot move the CM', 'middle', '700')}
<g class="fig-muted">
<line x1="580" y1="400" x2="980" y2="400" stroke="currentColor" stroke-width="3"/>
<path d="M770 150 Q865 150 960 400" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 6"/>
${T(760, 436, 16, 'fragments scatter; their CM finishes the original parabola', 'middle')}
</g>
<path d="M580 400 Q675 150 770 150" fill="none" stroke="currentColor" stroke-width="3"/>
<g class="fig-accent-2">
<defs>${ARROW('arr-mo-cm-r2')}</defs>
<path d="M770 132 L776 144 L789 146 L780 155 L782 168 L770 162 L758 168 L760 155 L751 146 L764 144 Z" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>
${ARR(784, 142, 840, 100, 'arr-mo-cm-r2', 2.5)}
${ARR(786, 160, 850, 190, 'arr-mo-cm-r2', 2.5)}
${ARR(770, 170, 760, 240, 'arr-mo-cm-r2', 2.5)}
${BALL(852, 92, 7, 0.6)}${BALL(862, 196, 7, 0.6)}${BALL(758, 250, 7, 0.6)}
${T(846, 76, 14, 'fragments')}
</g>
<path d="M888 254 L904 270 M904 254 L888 270" stroke="currentColor" stroke-width="3"/>
${T(914, 270, 16, 'CM', 'start', '700')}
<g class="fig-accent">
<defs>${ARROW('arr-mo-cm-b2')}</defs>
${ARR(600, 372, 650, 262, 'arr-mo-cm-b2')}
${T(640, 376, 15, 'shell', 'start', '700')}
</g>
</svg>`

export const mcatMomentumFigures: DeckFigurePlacement[] = [
  {
    at: 'Impulse: How Momentum Changes',
    mode: 'lead',
    figure: {
      svg: impulseSvg,
      alt:
        'A force–time graph with two shaded bumps of equal area. A red bump is tall and narrow: the bat on the ball, 2100 N for 5 ms. A blue bump is low and wide: the airbag, 21 N for 0.5 s, its Δt bracket 100 times longer. Text: J = F·Δt = Δp = the area under the F–t curve; equal shaded areas mean equal Δp = 10.5 kg·m/s; the same momentum is lost, only how violently differs.',
      caption: 'Impulse is the area under F–t (illustrative shapes, time axis not to scale): bat 2100 N × 5 ms and airbag 21 N × 0.5 s remove the same 10.5 kg·m/s.',
    },
    blocks: [
      '- $J = F\\Delta t = \\Delta p$ — the **area** under the $F$-$t$ curve, tall-and-narrow or low-and-wide',
      '- Fixed $\\Delta p$: stretch $\\Delta t$ and the peak force shrinks (airbags, crumple zones, bent knees)',
    ],
  },
  {
    at: 'Sign Care: Reversals Count Double',
    mode: 'lead',
    figure: {
      svg: reversalSvg,
      alt:
        'Two panels, each a ball approaching a hatched wall. Left, clay: before, the ball moves toward the wall at +mv; after, it sits flattened against the wall at v = 0, so |Δp| = |0 − mv| = mv and the wall feels impulse mv. Right, rubber: before, the ball moves toward the wall at +mv; after, it moves away at −mv, so |Δp| = |−mv − (+mv)| = 2mv and the wall feels impulse 2mv, double. Note: a reversal makes the speeds ADD in Δv.',
      caption: 'Sticking changes momentum by mv; bouncing straight back changes it by 2mv — the wall hit by the bouncy ball feels twice the impulse.',
    },
    blocks: [
      '- Set a sign convention first: in at $+mv$, out at $-mv$ gives $|\\Delta p| = 2mv$, not $0$',
      '- Reversal problems: the speeds **add** in $\\Delta v$ (bat on ball: $30 - (-40) = 70$ m/s)',
    ],
  },
  {
    at: 'The Collision Taxonomy (High Yield)',
    mode: 'replace-table',
    figure: {
      svg: taxonomySvg,
      alt:
        'Three before/after rows. In every row a blue ball moves right toward a red ball at rest. Elastic: afterwards they bounce apart, the blue ball drifting back and the red ball moving on faster; p ✓, KE ✓, no heat. Inelastic: they bounce apart more slowly with heat wiggles above them; p ✓, KE ↓, some lost to heat. Perfectly inelastic: the two balls are stuck together moving right with one velocity v′; p ✓, KE ↓↓, the maximum loss. Footer: momentum survives all three — KE only the first.',
      caption: 'The three collision types: momentum is conserved in every one; kinetic energy only in the elastic case, and sticking loses the most KE that momentum allows.',
    },
    blocks: [
      '- **Elastic:** momentum AND kinetic energy conserved — objects bounce apart, no deformation or heat',
      '- **Inelastic:** momentum conserved, some KE lost — they bounce apart, but slower',
      '- **Perfectly inelastic:** they **stick**, one final velocity — the maximum KE loss momentum allows',
      '- Truly elastic is rare (gas molecules; billiard balls ≈); crashes, tackles, embedded bullets stick',
    ],
  },
  {
    at: 'One Special Case Worth Memorizing',
    mode: 'lead',
    figure: {
      svg: swapSvg,
      alt:
        'Three rows for equal masses, head-on, elastic, target at rest. Before: ball 1 (blue) moves right at v toward ball 2 (red) at rest. After, elastic: ball 1 stops dead where it struck and ball 2 moves off at v; p = mv and KE = ½mv² are the same as before. Third row, greyed, if they stuck instead (perfectly inelastic): both balls move together at v/2; p = mv still, but KE = ¼mv², half lost. Footer: velocities exchange — the Newton’s-cradle result.',
      caption: 'Equal masses, elastic, target at rest: the mover stops and the target leaves at v. Both at v/2 would be the perfectly inelastic outcome (half the KE gone).',
    },
    blocks: [
      '- Equal masses, head-on, **elastic**, one at rest → they **exchange velocities** (Newton\'s cradle)',
      '- "Both at $v/2$" conserves momentum but loses half the KE — the sticking answer, not the elastic one',
    ],
  },
  {
    at: 'Worked Example — A Perfectly Inelastic Collision',
    mode: 'after',
    figure: {
      svg: auditSvg,
      alt:
        'Left: before, a blue 2 kg cart at 6 m/s rolls toward a red 4 kg cart at rest; after, the two carts are coupled and move together at 2 m/s. p = 2·6 + 4·0 = 12, so v′ = 12 / 6 = 2 m/s — slower than the mover and between 0 and 6 m/s. Right: bar charts. Momentum (kg·m/s): before 12, after 12, conserved. Kinetic energy (J): before 36, after 12, with a dashed outline above the after bar marking the 24 J lost — two-thirds gone to heat, sound and deformation.',
      caption: 'The audit of the worked example: momentum 12 → 12 kg·m/s, kinetic energy 36 → 12 J — the 24 J lost is the fingerprint of an inelastic collision.',
    },
    blocks: [
      '- Momentum bars match (12 → 12); KE bars do not (36 → 12 J): two-thirds became heat, sound, deformation',
      '- **Sanity:** the stuck pair moves slower than the mover and between the two initial velocities',
    ],
  },
  {
    at: 'Explosions: Collisions Run Backward',
    mode: 'lead',
    figure: {
      svg: recoilSvg,
      alt:
        'Before: a 4 kg rifle at rest with a 0.01 kg bullet inside, total momentum 0. After: the rifle (blue) recoils left at 1 m/s and the bullet (red) flies right at 400 m/s. Beneath them two thick momentum arrows of equal length point in opposite directions, each p = 4 kg·m/s, so the total is still 0. Bottom: KE = p² / 2m at the same p — rifle 2 J, bullet 800 J; the light fragment moves faster and hoards the kinetic energy.',
      caption: 'Rifle recoil (lesson numbers): equal and opposite momenta of 4 kg·m/s, but 800 J in the bullet against 2 J in the rifle — KE = p²/2m favours the light fragment.',
    },
    blocks: [
      '- At rest, $p_{total}$ stays 0: $m_1 v_1 = m_2 v_2$ in opposite directions — the lighter piece moves faster',
      '- KE is **created** from chemical/nuclear energy; at fixed $p$ the light fragment takes most ($KE = p^2/2m$)',
    ],
  },
  {
    at: 'The Ballistic Pendulum: Two Regimes, Two Laws',
    mode: 'lead',
    figure: {
      svg: pendulumSvg,
      alt:
        'A block of 1.98 kg hangs from a ceiling on a string. From the left a red bullet, 0.02 kg at 200 m/s, flies toward it; a dashed red vertical "fence" marks the moment of impact. Stage 1 (red): collision — momentum only, mv = (M + m)v′, so 0.02 · 200 = 2 · v′ and v′ = 2 m/s; a blue arrow shows the 2 kg block-plus-bullet leaving at 2 m/s. Stage 2 (blue): swing — energy only, ½(M + m)v′² = (M + m)gh, so h = v′²/2g = 4/20 = 0.2 m; a dashed arc carries the block up to a second position whose height bracket reads h = 0.2 m. Bottom: KE 400 J → 4 J across the fence (99% to heat and splitting) → lifts 2 kg by 0.2 m; momentum crosses the fence, kinetic energy does not.',
      caption: 'The ballistic pendulum in two fenced regimes (lesson numbers): momentum across the impact (v′ = 2 m/s), energy across the swing (h = 0.2 m); 400 J shrinks to 4 J at the fence.',
    },
    blocks: [
      '- **Collision** (bullet embeds): perfectly inelastic → momentum only, $mv = (M+m)v\'$',
      '- **Swing** (block rises): energy only, $\\tfrac{1}{2}(M+m)v\'^2 = (M+m)gh$ — never carry KE across the fence',
    ],
  },
  {
    at: 'Two Dimensions: Conserve Each Component',
    mode: 'lead',
    figure: {
      svg: twoDSvg,
      alt:
        'Left: an intersection seen from above. A blue car of 1000 kg heads east at 20 m/s along the horizontal road; a red car of 1000 kg heads north at 20 m/s along the vertical road. At the crossing a box labelled wreck, 2000 kg locked, leaves along a diagonal arrow at 14 m/s at 45°. Right: a vector triangle — a blue horizontal arrow p_x = 2×10⁴, a red vertical arrow p_y = 2×10⁴ from its tip, and the resultant p along the hypotenuse at 45°. Text: v_x = v_y = 2×10⁴ / 2000 = 10 m/s; v = 10√2 ≈ 14 m/s — not 20.',
      caption: 'A 2-D perfectly inelastic crash (lesson numbers): p_x and p_y are conserved separately, so the wreck leaves at 45° with 10√2 ≈ 14 m/s, not 20.',
    },
    blocks: [
      '- Momentum is a vector: conserve $p_x$ and $p_y$ as **two independent equations**',
      '- The wreck leaves along the total-momentum vector: east 2×10⁴ + north 2×10⁴, shared by 2000 kg → 45°, ≈14 m/s',
    ],
  },
  {
    at: 'Center of Mass: The System',
    mode: 'lead',
    figure: {
      svg: cmSvg,
      alt:
        'Left: two skaters on an ice line 10 m apart, a blue 60 kg skater at 0 and a red 40 kg skater at 10 m, joined by a rope. The centre of mass is marked with a cross at 4 m, x_cm = (60·0 + 40·10)/100 = 4 m. A blue arrow shows the heavier skater moving 4 m to the right and a red arrow the lighter skater moving 6 m to the left; they meet at the CM — displacements inverse to mass. Right: a projectile parabola. A blue arrow launches the shell up the solid left half; at the apex a red burst sends three fragments scattering in different directions, while a dashed grey curve continues the original parabola and a cross on it marks the centre of mass. Text: internal forces cannot move the CM; fragments scatter, their CM finishes the original parabola.',
      caption: 'The centre of mass moves under external forces only: rope-pulling skaters meet at x_cm = 4 m (lesson numbers), and an exploding shell\'s CM finishes the parabola — schematic.',
    },
    blocks: [
      '- $x_{cm} = \\frac{m_1x_1 + m_2x_2}{m_1 + m_2}$ sits nearer the heavier mass; only **external** forces move it',
      '- Rope-pulling skaters meet at the CM; a shell exploding mid-flight keeps its CM on the parabola',
    ],
  },
]
