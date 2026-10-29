import type { DeckFigurePlacement } from './index'

/**
 * Chemical Kinetics (MCAT C/P) — figures for the in-class deck. Authored 2026-10-29.
 *
 * Every drawing below is ours, drawn from the concept (a falling-reactant /
 * rising-product graph with a secant and a tangent, the lesson's initial-rate
 * table as bars, three decay curves sharing one first half-life, the three
 * linearised plots, a halving staircase, reaction-coordinate profiles, the two
 * Arrhenius graphs, an energy distribution with an Ea cut-off, a two-step
 * profile for the NO₂ + CO mechanism) — no textbook, prep-company or AAMC
 * figure was copied. The only numbers drawn are the ones the lesson states
 * (the rate table 2.0 / 4.0 / 6.0 × 10⁻⁴ M/s, k = 2.0 × 10⁻² M⁻¹s⁻¹,
 * k = 0.0693 min⁻¹ → t½ = 10 min → 12.5 % after 30 min, the 50 kJ/mol
 * 300 → 310 K doubling, rate = k[NO₂]²); every curve shape is illustrative
 * and its caption says so.
 *
 * Colours are consistent across the deck: first-order / "fast" / the catalysed
 * path BLUE (fig-accent), second-order / "slow" / the hotter temperature RED
 * (fig-accent-2), guide lines and asides grey (fig-muted), the main curve and
 * equations in the text colour.
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, not from the
 * line that uses it, so each coloured arrow has its marker defined inside the
 * same fig-accent / fig-accent-2 / fig-muted group. Marker ids are unique per
 * figure (arr-kin-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''} marker-end="url(#${marker})"/>`

/** A double-headed arrow (the marker is auto-start-reverse, so one marker serves both ends). */
const DARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 2.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-start="url(#${marker})" marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A stroked path (curve) in the current colour. */
const CURVE = (d: string, sw = 3.5, dashed = false) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${dashed ? ' stroke-dasharray="8 6"' : ''}/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

/** An x-axis and a y-axis from the origin, both arrow-tipped. */
const AXES = (ox: number, oy: number, xEnd: number, yTop: number, marker: string) =>
  `${ARR(ox, oy, xEnd, oy, marker, 2.5)}${ARR(ox, oy, ox, yTop, marker, 2.5)}`

/** Sample f on [t0, t1] into n+1 screen points via the two scale functions. */
const sample = (f: (t: number) => number, t0: number, t1: number, n: number, toX: (t: number) => number, toY: (v: number) => number): [number, number][] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const t = t0 + ((t1 - t0) * i) / n
    return [toX(t), toY(f(t))]
  })

/** Polyline path data through the points. */
const poly = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')

/* 1 — Rate as a slope: reactant falls, product rises; secant = average, tangent = instantaneous (lead, 1000×460).
   t in px from the origin (100, 400); [A] = 300·e^(−t/160) px, [C] = 300 − [A]. */
const rateA = (t: number) => 300 * Math.exp(-t / 160)
const rateSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-rate')}</defs>
${AXES(100, 400, 580, 66, 'arr-kin-rate')}
${T(106, 58, 15, 'concentration')}
${T(576, 425, 15, 'time', 'end')}
<g class="fig-muted">
${LINE(120, 135.3, 120, 324.2, 2, true)}
${LINE(120, 324.2, 320, 324.2, 2, true)}
${T(128, 236, 15, 'Δ[A]')}
${T(220, 345, 15, 'Δt', 'middle')}
${LINE(120, 135.3, 320, 324.2, 3)}
${T(330, 300, 15, 'average rate = −Δ[A]/Δt (secant)')}
${LINE(600, 30, 600, 440, 1.5)}
</g>
<g class="fig-accent">
${CURVE(poly(sample(rateA, 0, 440, 60, (t) => 100 + t, (v) => 400 - v)))}
${T(430, 335, 16, '[A] reactant', 'start', '700')}
</g>
<g class="fig-accent-2">
${CURVE(poly(sample((t) => 300 - rateA(t), 0, 440, 60, (t) => 100 + t, (v) => 400 - v)))}
${T(470, 172, 16, '[C] product', 'start', '700')}
</g>
${LINE(100, 100, 220, 325, 3)}
${DOT(100, 100, 6)}
${T(112, 88, 15, 'initial rate = tangent at t = 0', 'start', '700')}
${T(620, 70, 18, 'rate = −(1/a)·Δ[A]/Δt = +(1/c)·Δ[C]/Δt', 'start', '700')}
<g class="fig-muted">
${T(620, 98, 15, 'quoted positive: the minus sign fixes')}
${T(620, 118, 15, 'the falling reactant')}
</g>
<g class="fig-accent">${T(620, 160, 17, 'reactant falls — slope negative')}</g>
<g class="fig-accent-2">${T(620, 188, 17, 'product rises — slope positive')}</g>
${T(620, 232, 17, 'average rate = secant slope over Δt')}
${T(620, 260, 17, 'instantaneous rate = tangent slope')}
${T(620, 288, 17, 'initial rate = the tangent at t = 0', 'start', '700')}
${T(620, 332, 16, 'divide by the coefficient: in 2A → B,')}
${T(620, 356, 16, 'A disappears twice as fast as B forms')}
<g class="fig-muted">${T(620, 400, 15, 'the curve flattens: rate falls as [A] is used up')}</g>
</svg>`

/* 2 — The lesson's initial-rate table as bars: Exp 1 → 2 doubles [A], Exp 1 → 3 triples [B] (replace-table, 560×440).
   bars 400 px per M for [A] and [B]; 20 px per 1 × 10⁻⁴ M/s for the rate; baseline y = 250 */
const barGroup = (cx: number, label: string, a: number, b: number, rate: number) => {
  const bar = (x: number, h: number, v: string, cls?: string) => {
    const r = `<rect x="${x - 15}" y="${250 - h}" width="30" height="${h}" rx="4" fill="currentColor" fill-opacity="0.75"/>${T(x, 250 - h - 7, 13, v, 'middle', '700')}`
    return cls ? `<g class="${cls}">${r}</g>` : r
  }
  return `${bar(cx - 38, a * 400, a.toFixed(2), 'fig-accent')}${bar(cx, b * 400, b.toFixed(2), 'fig-accent-2')}${bar(cx + 38, rate * 20, rate.toFixed(1))}
${T(cx, 272, 15, label, 'middle', '700')}`
}
const orderSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 24, 16, 'the same three runs, drawn: change ONE thing at a time', 'middle', '700')}
<g class="fig-accent"><rect x="40" y="44" width="14" height="14" rx="3" fill="currentColor" fill-opacity="0.75"/>${T(60, 56, 13, '[A] (M)')}</g>
<g class="fig-accent-2"><rect x="150" y="44" width="14" height="14" rx="3" fill="currentColor" fill-opacity="0.75"/>${T(170, 56, 13, '[B] (M)')}</g>
<rect x="260" y="44" width="14" height="14" rx="3" fill="currentColor" fill-opacity="0.75"/>${T(280, 56, 13, 'rate (× 10⁻⁴ M/s)')}
<g class="fig-muted">${LINE(40, 250, 530, 250, 2)}</g>
${barGroup(110, 'Exp 1', 0.1, 0.1, 2)}
${barGroup(280, 'Exp 2', 0.2, 0.1, 4)}
${barGroup(450, 'Exp 3', 0.1, 0.3, 6)}
<g class="fig-accent">${T(30, 310, 15, 'Exp 1 → 2:  [A] ×2, [B] same  →  rate ×2  →  m = 1', 'start', '700')}</g>
<g class="fig-accent-2">${T(30, 338, 15, 'Exp 1 → 3:  [B] ×3, [A] same  →  rate ×3  →  n = 1', 'start', '700')}</g>
${T(30, 374, 16, 'rate = k[A][B]   (2nd order overall)', 'start', '700')}
${T(30, 402, 15, 'k = 2.0×10⁻⁴ / (0.10 × 0.10) = 2.0×10⁻² M⁻¹s⁻¹')}
<g class="fig-muted">${T(30, 428, 13, 'rate₂/rate₁ = ([A]₂/[A]₁)ᵐ — the ratio exposes the exponent')}</g>
</svg>`

/* 3 — Zero-, first- and second-order decay from one [A]₀ with the same FIRST half-life (lead, 1000×460).
   x = 100 + 120·t (t in units of the first half-life), y = 400 − 300·[A]/[A]₀ */
const kx = (t: number) => 100 + 120 * t
const ky = (v: number) => 400 - 300 * v
const integratedSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-int')}</defs>
${AXES(100, 400, 580, 66, 'arr-kin-int')}
${T(106, 58, 15, '[A]')}
<g class="fig-muted">
${LINE(100, 250, 580, 250, 1.5, true)}
${LINE(100, 325, 580, 325, 1.5, true)}
${T(94, 105, 14, '[A]₀', 'end')}
${T(94, 255, 14, '½[A]₀', 'end')}
${T(94, 330, 14, '¼[A]₀', 'end')}
${[1, 2, 3, 4].map((t) => `${LINE(kx(t), 396, kx(t), 404, 2)}${T(kx(t), 422, 14, String(t), 'middle')}`).join('')}
${T(340, 444, 14, 'time, in units of the first half-life', 'middle')}
${LINE(600, 30, 600, 440, 1.5)}
</g>
${CURVE(poly([[kx(0), ky(1)], [kx(2), ky(0)]]))}
${DOT(kx(1.5), ky(0.25))}
${T(125, 392, 15, '0th: straight, hits zero', 'start', '700')}
<g class="fig-accent">
${CURVE(poly(sample((t) => Math.pow(2, -t), 0, 4, 60, kx, ky)))}
${DOT(kx(2), ky(0.25))}${DOT(kx(3), ky(0.125))}
${T(350, 392, 15, '1st: constant t½', 'start', '700')}
</g>
<g class="fig-accent-2">
${CURVE(poly(sample((t) => 1 / (1 + t), 0, 4, 60, kx, ky)))}
${DOT(kx(3), ky(0.25))}
${T(470, 300, 15, '2nd: t½ grows', 'start', '700')}
</g>
${DOT(kx(1), ky(0.5))}
${T(620, 70, 19, 'same first half-life — then:', 'start', '700')}
${T(620, 108, 17, '0th   [A] = [A]₀ − kt', 'start', '700')}
<g class="fig-muted">${T(620, 132, 15, 't½ = [A]₀/2k: each half-life HALVES (1 → ½)')}</g>
<g class="fig-accent">
${T(620, 172, 17, '1st   [A] = [A]₀·e⁻ᵏᵗ', 'start', '700')}
${T(620, 196, 15, 't½ = 0.693/k: constant (1 → 1 → 1)')}
</g>
<g class="fig-accent-2">
${T(620, 236, 17, '2nd   1/[A] = 1/[A]₀ + kt', 'start', '700')}
${T(620, 260, 15, 't½ = 1/(k[A]₀): each half-life DOUBLES (1 → 2)')}
</g>
${T(620, 305, 16, 'rate = −slope: constant for 0th,')}
${T(620, 329, 16, 'shrinking with [A] for 1st and 2nd')}
<g class="fig-muted">
${T(620, 375, 15, 'dots mark the successive halvings')}
${T(620, 398, 15, 'curves illustrative: same [A]₀, same first t½')}
</g>
</svg>`

/* 4 — Which plot is straight names the order: [A], ln[A], 1/[A] against t (replace-table, 560×440) */
const linearPanel = (x0: number, yLabel: string, rising: boolean, marker: string) => {
  const y1 = rising ? 215 : 95
  const y2 = rising ? 95 : 215
  const pts = [0, 0.25, 0.5, 0.75, 1].map((f): [number, number] => [x0 + 40 + 100 * f, y1 + (y2 - y1) * f])
  return `${AXES(x0 + 30, 230, x0 + 150, 76, marker)}
${T(x0 + 30, 66, 14, yLabel, 'middle')}${T(x0 + 150, 248, 13, 't', 'end')}
${LINE(x0 + 40, y1, x0 + 140, y2, 3.5)}
${pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>`).join('')}`
}
const graphsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 26, 16, 'whichever plot is straight names the order', 'middle', '700')}
<defs>${ARROW('arr-kin-gr')}</defs>
${linearPanel(25, '[A]', false, 'arr-kin-gr')}
${T(115, 278, 17, '0th order', 'middle', '700')}
${T(115, 300, 14, 'slope = −k', 'middle')}
${T(115, 320, 14, 't½ = [A]₀/2k', 'middle')}
<g class="fig-accent">
<defs>${ARROW('arr-kin-gr-b')}</defs>
${linearPanel(205, 'ln[A]', false, 'arr-kin-gr-b')}
${T(295, 278, 17, '1st order', 'middle', '700')}
${T(295, 300, 14, 'slope = −k', 'middle')}
${T(295, 320, 14, 't½ = 0.693/k', 'middle')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-kin-gr-r')}</defs>
${linearPanel(385, '1/[A]', true, 'arr-kin-gr-r')}
${T(475, 278, 17, '2nd order', 'middle', '700')}
${T(475, 300, 14, 'slope = +k (rises)', 'middle')}
${T(475, 320, 14, 't½ = 1/(k[A]₀)', 'middle')}
</g>
${T(280, 364, 15, 'curved [A] vs t? try ln[A] (1st), then 1/[A] (2nd)', 'middle')}
${T(280, 390, 15, '|slope| = k; its units confirm the order', 'middle')}
<g class="fig-muted">${T(280, 420, 13, 'M/s · s⁻¹ · M⁻¹s⁻¹ — only the 2nd-order line goes UP', 'middle')}</g>
</svg>`

/* 5 — First-order halving staircase with the lesson's numbers: k = 0.0693 min⁻¹, t½ = 10 min (lead, 1000×460).
   x = 100 + 12·t (min), y = 400 − 3·(% remaining) */
const hx = (t: number) => 100 + 12 * t
const hy = (p: number) => 400 - 3 * p
const halfLifeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-half')}</defs>
${AXES(100, 400, 580, 66, 'arr-kin-half')}
${T(106, 58, 15, '% remaining')}
<g class="fig-muted">
<defs>${ARROW('arr-kin-half-m')}</defs>
${[10, 20, 30].map((t) => LINE(hx(t), 400, hx(t), hy(100 / Math.pow(2, t / 10)), 1.5, true)).join('')}
${[50, 25, 12.5].map((p) => LINE(100, hy(p), hx(10 * Math.log2(100 / p)), hy(p), 1.5, true)).join('')}
${T(94, 105, 14, '100%', 'end')}
${T(94, 255, 14, '50%', 'end')}
${T(94, 330, 14, '25%', 'end')}
${T(94, 368, 14, '12.5%', 'end')}
${[0, 10, 20, 30, 40].map((t) => `${LINE(hx(t), 396, hx(t), 404, 2)}${T(hx(t), 421, 14, t === 40 ? '40 min' : String(t), 'middle')}`).join('')}
${DARR(hx(0) + 4, 436, hx(10) - 4, 436, 'arr-kin-half-m', 2)}
${DARR(hx(10) + 4, 436, hx(20) - 4, 436, 'arr-kin-half-m', 2)}
${DARR(hx(20) + 4, 436, hx(30) - 4, 436, 'arr-kin-half-m', 2)}
${T(hx(5), 455, 13, '1st half-life', 'middle')}
${T(hx(15), 455, 13, '2nd', 'middle')}
${T(hx(25), 455, 13, '3rd', 'middle')}
${LINE(600, 30, 600, 440, 1.5)}
</g>
<g class="fig-accent">
${CURVE(poly(sample((t) => 100 * Math.exp(-0.0693 * t), 0, 40, 60, hx, hy)))}
${DOT(hx(0), hy(100))}${DOT(hx(10), hy(50))}${DOT(hx(20), hy(25))}${DOT(hx(30), hy(12.5))}
${T(hx(10) + 10, 243, 15, '50%', 'start', '700')}
${T(hx(20) + 10, 318, 15, '25%', 'start', '700')}
${T(hx(30) + 10, 356, 15, '12.5%', 'start', '700')}
</g>
${T(620, 70, 19, 'k = 0.0693 min⁻¹ (first order)', 'start', '700')}
${T(620, 100, 17, 't½ = 0.693 / 0.0693 = 10 min')}
${T(620, 145, 17, 'after 30 min: n = 30 / 10 = 3 half-lives')}
${T(620, 175, 19, 'fraction left = (½)³ = 1/8 = 12.5%', 'start', '700')}
${T(620, 220, 17, '100% → 50% → 25% → 12.5%')}
<g class="fig-accent">${T(620, 265, 17, 'fraction remaining = (½)ⁿ,  n = t / t½', 'start', '700')}</g>
${T(620, 310, 16, 'first order only: t½ never changes,')}
${T(620, 334, 16, 'whatever the starting amount')}
<g class="fig-muted">
${T(620, 375, 15, 'radioactive decay, drug elimination')}
${T(620, 398, 15, '800 mg, t½ = 5 d: after 20 d → 800/16 = 50 mg')}
</g>
</svg>`

/* 6 — Reaction-coordinate diagram: Ea forward / reverse, ΔH, the catalysed path, an endothermic inset (lead, 1000×460) */
const activationSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-act')}</defs>
${AXES(60, 400, 540, 50, 'arr-kin-act')}
${T(66, 44, 15, 'potential energy')}
${T(536, 425, 15, 'reaction coordinate', 'end')}
<g class="fig-muted">
${LINE(135, 80, 435, 80, 1.5, true)}
${LINE(160, 200, 500, 200, 1.5, true)}
${LINE(600, 30, 600, 440, 1.5)}
</g>
${CURVE('M80 200 L160 200 C230 200 250 80 300 80 C350 80 380 320 430 320 L520 320', 4)}
${T(118, 224, 15, 'reactants', 'middle')}
${T(300, 64, 15, 'transition state ‡', 'middle', '700')}
${T(475, 346, 15, 'products', 'middle')}
<g class="fig-accent">
<defs>${ARROW('arr-kin-act-b')}</defs>
${CURVE('M160 200 C230 200 250 150 300 150 C350 150 380 320 430 320', 3, true)}
${T(300, 138, 14, 'catalysed', 'middle', '700')}
${DARR(140, 198, 140, 82, 'arr-kin-act-b')}
${T(148, 140, 15, 'Ea (fwd)', 'start', '700')}
${DARR(430, 318, 430, 82, 'arr-kin-act-b')}
${T(438, 160, 15, 'Ea (rev)', 'start', '700')}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-kin-act-r')}</defs>
${DARR(490, 202, 490, 318, 'arr-kin-act-r')}
${T(498, 266, 15, 'ΔH &lt; 0', 'start', '700')}
</g>
<g class="fig-muted">${CURVE('M620 170 L650 170 C675 170 680 70 705 70 C730 70 735 120 755 120 L785 120', 2.5)}</g>
<g class="fig-accent-2">
${DARR(800, 168, 800, 122, 'arr-kin-act-r')}
${T(810, 150, 14, 'ΔH &gt; 0')}
</g>
${T(700, 205, 15, 'endothermic: products sit higher', 'middle')}
${T(620, 248, 17, 'Ea(fwd): reactants up to the peak')}
${T(620, 272, 17, 'Ea(rev): products up to the peak')}
${T(620, 302, 17, 'ΔH = Ea(forward) − Ea(reverse)', 'start', '700')}
<g class="fig-accent">${T(620, 340, 17, 'catalyst: lower peak, same ΔH, same K')}</g>
${T(620, 368, 16, 'exothermic (shown): Ea(rev) &gt; Ea(fwd), ΔH &lt; 0')}
<g class="fig-muted">
${T(620, 404, 15, 'transition state = the peak, never isolated')}
${T(620, 426, 15, 'shapes illustrative')}
</g>
</svg>`

/* 7 — Arrhenius: k against T, and ln k against 1/T as a straight line (lead, 1000×460) */
const arrheniusSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-arrh')}</defs>
${T(275, 44, 16, 'k climbs exponentially with T', 'middle', '700')}
${AXES(90, 400, 470, 66, 'arr-kin-arrh')}
${T(96, 60, 15, 'k')}
${T(466, 425, 15, 'T (K)', 'end')}
${CURVE(poly(sample((t) => 8 * Math.exp(t / 90), 0, 330, 60, (t) => 90 + t, (v) => 400 - v)))}
${T(300, 100, 18, 'k = A·e^(−Ea/RT)', 'middle', '700')}
<g class="fig-muted">
<defs>${ARROW('arr-kin-arrh-m')}</defs>
${LINE(290, 400, 290, 326, 1.5, true)}
${LINE(352, 400, 352, 253, 1.5, true)}
${DARR(294, 372, 348, 372, 'arr-kin-arrh-m', 2)}
${T(321, 390, 14, '+10 °C', 'middle')}
${LINE(500, 30, 500, 440, 1.5)}
</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-kin-arrh-r')}</defs>
${DOT(290, 326)}${DOT(352, 253)}
${DARR(372, 324, 372, 255, 'arr-kin-arrh-r', 2)}
${T(380, 295, 15, 'k ×2', 'start', '700')}
</g>
${T(265, 445, 15, 'Ea = 50 kJ/mol, 300 → 310 K: ln(k₂/k₁) ≈ 0.65 → k₂/k₁ ≈ 1.9', 'middle')}
${T(745, 44, 16, 'ln k against 1/T: a straight line', 'middle', '700')}
${AXES(560, 400, 930, 66, 'arr-kin-arrh')}
${T(566, 60, 15, 'ln k')}
${T(926, 425, 15, '1/T (K⁻¹)', 'end')}
<g class="fig-muted">
${LINE(560, 87, 590, 110, 2, true)}
${LINE(590, 110, 800, 380, 2.5, true)}
${T(812, 384, 14, 'larger Ea → steeper')}
</g>
${LINE(590, 110, 900, 345, 4)}
${[0.1, 0.35, 0.6, 0.85].map((f) => DOT(590 + 310 * f, 110 + 235 * f, 5)).join('')}
${DOT(560, 87, 5)}
${T(552, 92, 15, 'ln A', 'end', '700')}
${T(760, 215, 16, 'slope = −Ea/R', 'start', '700')}
${T(745, 445, 15, 'ln k = ln A − (Ea/R)·(1/T): slope −Ea/R, intercept ln A', 'middle')}
</svg>`

/* 8 — Collision theory: the energy distribution at two temperatures with the Ea cut-off, and orientation (lead, 1000×460).
   x = 90 + u, y = 400 − c·√u·e^(−u/b); T₁: c = 75, b = 70; T₂: c = 38, b = 110 (areas roughly equal) */
const mb = (c: number, b: number) => (u: number) => c * Math.sqrt(u) * Math.exp(-u / b)
const mbX = (u: number) => 90 + u
const mbY = (v: number) => 400 - v
const tail = (f: (u: number) => number) => `M${mbX(260)} 400 ${poly(sample(f, 260, 460, 40, mbX, mbY)).replace(/^M/, 'L')} L${mbX(460)} 400 Z`
const collisionSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-coll')}</defs>
${AXES(90, 400, 580, 66, 'arr-kin-coll')}
${T(96, 58, 15, 'fraction of molecules')}
${T(576, 425, 15, 'collision energy', 'end')}
<g class="fig-accent">
<path d="${tail(mb(75, 70))}" fill="currentColor" fill-opacity="0.3"/>
${CURVE(poly(sample(mb(75, 70), 0, 460, 80, mbX, mbY)))}
${LINE(420, 180, 450, 180, 4)}${T(458, 185, 15, 'T₁')}
</g>
<g class="fig-accent-2">
<path d="${tail(mb(38, 110))}" fill="currentColor" fill-opacity="0.3"/>
${CURVE(poly(sample(mb(38, 110), 0, 460, 80, mbX, mbY)))}
${LINE(420, 205, 450, 205, 4)}${T(458, 210, 15, 'T₂ &gt; T₁ (hotter)')}
</g>
<g class="fig-muted">
<defs>${ARROW('arr-kin-coll-m')}</defs>
${LINE(350, 400, 350, 120, 2, true)}
${LINE(270, 400, 270, 120, 1.5, true)}
${T(270, 112, 14, 'lower Ea (catalyst)', 'middle')}
${T(356, 135, 15, 'Ea', 'start', '700')}
${T(420, 300, 15, 'shaded: fraction with E ≥ Ea')}
${ARR(470, 308, 430, 358, 'arr-kin-coll-m', 2)}
${LINE(600, 30, 600, 440, 1.5)}
</g>
<g class="fig-muted">${T(640, 86, 15, 'right orientation + E ≥ Ea → reaction')}</g>
<defs>${ARROW('arr-kin-coll-k')}</defs>
<g class="fig-accent"><circle cx="648" cy="124" r="14" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/></g>
${T(648, 129, 14, 'A', 'middle', '700')}
<circle cx="676" cy="124" r="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${T(676, 129, 14, 'B', 'middle', '700')}
${ARR(700, 124, 736, 124, 'arr-kin-coll-k', 2.5)}
<g class="fig-accent-2"><circle cx="760" cy="124" r="14" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/></g>
${T(760, 129, 14, 'C', 'middle', '700')}
${ARR(786, 124, 826, 124, 'arr-kin-coll-k', 2.5)}
<g class="fig-accent"><circle cx="852" cy="124" r="14" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/></g>
${T(852, 129, 14, 'A', 'middle', '700')}
<circle cx="906" cy="124" r="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${T(906, 129, 14, 'B', 'middle', '700')}
<g class="fig-accent-2"><circle cx="934" cy="124" r="14" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/></g>
${T(934, 129, 14, 'C', 'middle', '700')}
${T(880, 160, 13, 'new B–C bond', 'middle')}
<g class="fig-muted">${T(640, 206, 15, 'wrong orientation → they just bounce')}</g>
<circle cx="648" cy="244" r="14" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>
${T(648, 249, 14, 'B', 'middle', '700')}
<g class="fig-accent"><circle cx="676" cy="244" r="14" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/></g>
${T(676, 249, 14, 'A', 'middle', '700')}
${ARR(700, 244, 736, 244, 'arr-kin-coll-k', 2.5)}
<g class="fig-accent-2"><circle cx="760" cy="244" r="14" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/></g>
${T(760, 249, 14, 'C', 'middle', '700')}
<g class="fig-muted">
${ARR(786, 244, 826, 244, 'arr-kin-coll-m', 2.5)}
${T(840, 249, 15, 'no reaction')}
</g>
${T(620, 318, 17, 'two conditions, both required:', 'start', '700')}
${T(620, 346, 17, '1. energy ≥ Ea — the shaded tail, f = e^(−Ea/RT)')}
${T(620, 372, 17, '2. the right orientation — built into A')}
<g class="fig-muted">
${T(620, 410, 15, 'hotter or lower Ea → bigger tail → faster')}
${T(620, 432, 15, 'distribution shapes illustrative')}
</g>
</svg>`

/* 9 — Two-step mechanism NO₂ + NO₂ → NO₃ + NO (slow), NO₃ + CO → NO₂ + CO₂ (fast): the tallest barrier sets the rate law (lead, 1000×460) */
const rdsSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-kin-rds')}</defs>
${AXES(60, 400, 610, 50, 'arr-kin-rds')}
${T(66, 44, 15, 'potential energy')}
${T(606, 425, 15, 'reaction coordinate', 'end')}
<g class="fig-muted">
${LINE(95, 80, 240, 80, 1.5, true)}
${LINE(380, 150, 440, 150, 1.5, true)}
${LINE(630, 30, 630, 440, 1.5)}
</g>
${CURVE('M80 260 L150 260 C200 260 210 80 240 80 C270 80 290 200 320 200 L380 200 C410 200 415 150 440 150 C465 150 480 340 520 340 L600 340', 4)}
${T(115, 285, 14, 'NO₂ + NO₂ + CO', 'middle')}
${T(350, 225, 14, 'NO₃ + NO + CO', 'middle')}
${T(560, 365, 14, 'NO + CO₂ + NO₂', 'middle')}
<g class="fig-muted">${T(350, 246, 13, 'intermediate: a valley', 'middle')}</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-kin-rds-r')}</defs>
${T(240, 62, 15, 'TS₁ ‡  step 1 — slow, the RDS', 'middle', '700')}
${DARR(100, 258, 100, 82, 'arr-kin-rds-r')}
${T(108, 140, 15, 'Ea₁ large', 'start', '700')}
</g>
<g class="fig-accent">
<defs>${ARROW('arr-kin-rds-b')}</defs>
${T(440, 134, 15, 'TS₂ ‡  step 2 — fast, small Ea₂', 'middle', '700')}
${DARR(385, 198, 385, 152, 'arr-kin-rds-b')}
${T(393, 180, 15, 'Ea₂', 'start', '700')}
</g>
${T(650, 70, 19, 'rate = k[NO₂]²  — from step 1 alone', 'start', '700')}
<g class="fig-muted">${T(650, 98, 15, 'matches experiment → mechanism consistent')}</g>
<g class="fig-accent-2">${T(650, 140, 17, 'step 1: tallest barrier → slowest → RDS')}</g>
<g class="fig-accent">${T(650, 166, 17, 'step 2: small barrier → fast, sets nothing')}</g>
${T(650, 208, 17, 'CO is absent from the rate law:')}
${T(650, 232, 17, 'it reacts only AFTER the bottleneck')}
${T(650, 275, 17, 'NO₃: made in step 1, used in step 2 —')}
${T(650, 299, 17, 'an intermediate; cancels from the total')}
${T(650, 342, 17, 'overall: NO₂ + CO → NO + CO₂', 'start', '700')}
<g class="fig-muted">
${T(650, 385, 15, 'elementary step → rate law from its own')}
${T(650, 407, 15, 'stoichiometry: bimolecular NO₂ + NO₂ → [NO₂]²')}
</g>
</svg>`

export const mcatChemKineticsFigures: DeckFigurePlacement[] = [
  {
    at: 'Reaction Rate',
    mode: 'lead',
    figure: {
      svg: rateSvg,
      alt:
        'Graph of concentration against time: a blue reactant curve [A] falls steeply at first and flattens out; a red product curve [C] rises from zero and levels off. A solid line from the start of the reactant curve is the tangent at t = 0, labelled initial rate; a grey secant joining two later points on the reactant curve, with a dashed right-angle triangle marking Δ[A] and Δt, is labelled average rate = −Δ[A]/Δt. Right column: rate = −(1/a)·Δ[A]/Δt = +(1/c)·Δ[C]/Δt, quoted positive because the minus sign fixes the falling reactant; the reactant falls (negative slope) while the product rises (positive slope); average rate = secant slope over Δt, instantaneous rate = tangent slope, initial rate = the tangent at t = 0; divide by the coefficient, so in 2A → B, A disappears twice as fast as B forms; the curve flattens because the rate falls as [A] is used up.',
      caption: 'Rate is a slope: the reactant curve falls and the product curve rises, a secant gives the average rate over Δt and the tangent gives the instantaneous rate (curves illustrative).',
    },
    blocks: [
      '- $\\text{rate} = -\\frac{1}{a}\\frac{\\Delta[A]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[C]}{\\Delta t}$, positive',
      '- Secant slope = **average** rate; tangent slope = **instantaneous** rate (at $t = 0$: initial rate)',
    ],
  },
  {
    at: 'Determining Order from Experimental Data',
    mode: 'replace-table',
    figure: {
      svg: orderSvg,
      alt:
        'The lesson’s three experiments drawn as grouped bars: for each run a blue bar for [A], a red bar for [B] and a plain bar for the rate in units of 10⁻⁴ M/s. Exp 1: [A] 0.10, [B] 0.10, rate 2.0. Exp 2: [A] 0.20, [B] 0.10, rate 4.0 — the [A] bar and the rate bar both double. Exp 3: [A] 0.10, [B] 0.30, rate 6.0 — the [B] bar and the rate bar both triple. Below: Exp 1 → 2, [A] ×2 with [B] the same gives rate ×2, so m = 1; Exp 1 → 3, [B] ×3 with [A] the same gives rate ×3, so n = 1; rate = k[A][B], second order overall; k = 2.0×10⁻⁴ / (0.10 × 0.10) = 2.0×10⁻² M⁻¹s⁻¹; rate₂/rate₁ = ([A]₂/[A]₁)ᵐ, the ratio exposes the exponent.',
      caption: 'The initial-rate table as bars: change one concentration at a time and read the order off how the rate bar responds — ×2 for ×2 means first order in A, ×3 for ×3 means first order in B.',
    },
    blocks: [
      '- Change ONE concentration at a time: $\\frac{\\text{rate}_2}{\\text{rate}_1} = ([A]_2/[A]_1)^m$',
      '- Exp 1 → 2: [A] ×2, rate ×2 → $m = 1$; Exp 1 → 3: [B] ×3, rate ×3 → $n = 1$',
      '- rate $= k[A][B]$ (2nd order); $k = 2.0 \\times 10^{-4}/(0.10)(0.10) = 2.0 \\times 10^{-2}$ M⁻¹s⁻¹',
      '- Orders come from data, never from the balanced equation (unless elementary)',
    ],
  },
  {
    at: 'Integrated Rate Laws',
    mode: 'lead',
    figure: {
      svg: integratedSvg,
      alt:
        'Graph of [A] against time for three reactions that start at the same [A]₀ and share the same first half-life (time axis in units of that half-life). Zero order (plain): a straight line that hits zero at t = 2, with its second halving dot at t = 1.5 — each half-life halves. First order (blue): an exponential curve with dots at t = 1, 2, 3 for ½, ¼, ⅛ — constant half-life. Second order (red): a curve with a long tail, dots at t = 1 and t = 3 for ½ and ¼ — each half-life doubles. Dashed guide lines mark ½[A]₀ and ¼[A]₀. Right column: 0th, [A] = [A]₀ − kt, t½ = [A]₀/2k, each half-life halves (1 → ½); 1st, [A] = [A]₀·e^(−kt), t½ = 0.693/k, constant (1 → 1 → 1); 2nd, 1/[A] = 1/[A]₀ + kt, t½ = 1/(k[A]₀), each half-life doubles (1 → 2); rate = −slope, constant for 0th and shrinking with [A] for 1st and 2nd; dots mark the successive halvings; curves illustrative.',
      caption: 'Three decays from the same start and the same first half-life: zero order hits zero and its half-lives shrink, first order halves on a fixed clock, second order drags on as each half-life doubles (illustrative).',
    },
    blocks: [
      '- 0th: $[A]_0 - kt$, $t_{1/2} = [A]_0/2k$ shrinks · 1st: $[A]_0e^{-kt}$, $t_{1/2} = 0.693/k$ constant',
      '- 2nd: $1/[A] = 1/[A]_0 + kt$, $t_{1/2} = 1/k[A]_0$ grows — only first order keeps one clock',
    ],
  },
  {
    at: 'Identifying Reaction Order from Graphs',
    mode: 'replace-table',
    figure: {
      svg: graphsSvg,
      alt:
        'Three small graphs side by side, each a straight line of data points against time. Left (plain): [A] against t, a falling line — 0th order, slope = −k, t½ = [A]₀/2k. Middle (blue): ln[A] against t, a falling line — 1st order, slope = −k, t½ = 0.693/k. Right (red): 1/[A] against t, the only RISING line — 2nd order, slope = +k, t½ = 1/(k[A]₀). Footer: if [A] against t is curved, try ln[A] (first order) and then 1/[A] (second order); the slope’s magnitude is k and its units (M/s, s⁻¹, M⁻¹s⁻¹) confirm the order; only the second-order line goes up.',
      caption: 'Which plot comes out straight names the order: [A] for zero, ln[A] for first, 1/[A] for second — and only the second-order line rises.',
    },
    blocks: [
      '- $[A]$ vs $t$ straight → **0th**, slope $-k$ · $\\ln[A]$ vs $t$ straight → **1st**, slope $-k$',
      '- $1/[A]$ vs $t$ straight → **2nd**, slope $+k$ — the only line that rises',
      '- Curved $[A]$ plot? Re-plot as $\\ln[A]$, then $1/[A]$; the slope’s units confirm the order',
    ],
  },
  {
    at: 'Half-Life Applications',
    mode: 'lead',
    figure: {
      svg: halfLifeSvg,
      alt:
        'Graph of percent remaining against time in minutes for a first-order process with k = 0.0693 min⁻¹: a blue exponential curve from 100% with dots at 10 min (50%), 20 min (25%) and 30 min (12.5%), dashed guide lines dropping to the time axis and across to the percent axis, and three equal brackets under the axis labelled 1st, 2nd and 3rd half-life, each 10 min. Right column: k = 0.0693 min⁻¹ (first order); t½ = 0.693 / 0.0693 = 10 min; after 30 min, n = 30/10 = 3 half-lives; fraction left = (½)³ = 1/8 = 12.5%; 100% → 50% → 25% → 12.5%; fraction remaining = (½)ⁿ with n = t / t½; for first order only, t½ never changes whatever the starting amount; radioactive decay and drug elimination work this way; 800 mg with t½ = 5 d leaves 800/16 = 50 mg after 20 d.',
      caption: 'The lesson’s example as a halving staircase: k = 0.0693 min⁻¹ gives t½ = 10 min, so 30 min is three half-lives and 1/8 = 12.5% remains — every step the same width.',
    },
    blocks: [
      '- $t_{1/2} = 0.693/0.0693 = 10$ min; 30 min $= 3$ half-lives → $(\\tfrac{1}{2})^3 = 1/8 = 12.5\\%$ left',
      '- First order: $[A]_t/[A]_0 = (\\tfrac{1}{2})^n$, $n = t/t_{1/2}$ — the half-life never changes',
    ],
  },
  {
    at: 'Activation Energy',
    mode: 'lead',
    figure: {
      svg: activationSvg,
      alt:
        'A reaction-coordinate diagram: potential energy against reaction coordinate. The reactant plateau on the left climbs to a single peak labelled transition state ‡ and drops to a lower product plateau on the right (exothermic). Blue double arrows mark Ea (forward), from reactants up to the peak, and the taller Ea (reverse), from products up to the peak; a red double arrow between the two plateaus is labelled ΔH < 0. A dashed blue curve labelled catalysed rises to a lower peak but starts and ends at the same levels. Inset at top right: a small grey profile whose products sit higher than its reactants, with a red arrow ΔH > 0 — endothermic. Right column: Ea(fwd) is reactants up to the peak, Ea(rev) is products up to the peak; ΔH = Ea(forward) − Ea(reverse); a catalyst lowers the peak but leaves ΔH and K the same; the exothermic case shown has Ea(rev) > Ea(fwd) and ΔH < 0; the transition state is the peak and is never isolated; shapes illustrative.',
      caption: 'Reaction coordinate diagram: Ea forward and reverse both reach the same peak, their difference is ΔH, and a catalyst lowers the peak without moving either plateau (illustrative).',
    },
    blocks: [
      '- $E_a$(fwd) reactants → peak, $E_a$(rev) products → peak; $\\Delta H = E_a(\\text{fwd}) - E_a(\\text{rev})$',
      '- A catalyst lowers the peak (faster both ways) but never moves the plateaus: same $\\Delta H$, same $K$',
    ],
  },
  {
    at: 'Arrhenius Equation',
    mode: 'lead',
    figure: {
      svg: arrheniusSvg,
      alt:
        'Two graphs. Left, k against T: a curve that climbs ever more steeply, labelled k = A·e^(−Ea/RT); two red dots 10 °C apart show k doubling, with the note that for Ea = 50 kJ/mol going from 300 to 310 K gives ln(k₂/k₁) ≈ 0.65, so k₂/k₁ ≈ 1.9. Right, ln k against 1/T: a straight line falling to the right through data points, its slope labelled −Ea/R, its extension meeting the ln k axis at the intercept ln A; a steeper grey dashed line from the same intercept is labelled larger Ea → steeper. Footer: ln k = ln A − (Ea/R)·(1/T), slope −Ea/R, intercept ln A.',
      caption: 'Arrhenius two ways: k rises exponentially with temperature (about ×2 per 10 °C near room temperature), and ln k against 1/T is a straight line whose slope is −Ea/R (curves illustrative).',
    },
    blocks: [
      '- $k = Ae^{-E_a/RT}$: higher $T$ or lower $E_a$ → bigger $k$; near room temperature +10 °C ≈ ×2',
      '- $\\ln k = \\ln A - \\frac{E_a}{R}\\cdot\\frac{1}{T}$: plot $\\ln k$ vs $1/T$ → slope $-E_a/R$, intercept $\\ln A$',
    ],
  },
  {
    at: 'Collision Theory',
    mode: 'lead',
    figure: {
      svg: collisionSvg,
      alt:
        'Left: the distribution of collision energies at two temperatures — a tall narrow blue hump for T₁ and a lower, wider red hump for T₂ > T₁ (hotter). A dashed vertical line marks Ea; the area under each curve beyond Ea is shaded, and the red (hotter) shaded tail is much larger: more molecules past Ea. A second dashed line to the left is labelled lower Ea (catalyst). Right: two collisions drawn with lettered circles. In the first, molecule A–B approaches C with B leading, and the product is A plus a new B–C bond: right orientation + E ≥ Ea → reaction. In the second, A–B approaches C with A leading and the grey arrow leads to no reaction: wrong orientation, they just bounce. Text: two conditions, both required — 1. energy ≥ Ea, the shaded tail, f = e^(−Ea/RT); 2. the right orientation, built into the frequency factor A; hotter or lower Ea → bigger tail → faster; distribution shapes illustrative.',
      caption: 'Collision theory: only the shaded tail of the energy distribution clears Ea — heating or a catalyst enlarges it — and even those collisions must hit in the right orientation (illustrative).',
    },
    blocks: [
      '- Fraction with $E \\ge E_a$: $f = e^{-E_a/RT}$ — grows with $T$, grows when a catalyst lowers $E_a$',
      '- Energy is not enough: the collision must also have the right **orientation** (that geometry lives in $A$)',
    ],
  },
  {
    at: 'Rate-Determining Step',
    mode: 'lead',
    figure: {
      svg: rdsSvg,
      alt:
        'A two-step reaction-coordinate diagram for the mechanism NO₂ + NO₂ → NO₃ + NO (slow) then NO₃ + CO → NO₂ + CO₂ (fast). From the reactant plateau (NO₂ + NO₂ + CO) the curve climbs a tall first barrier to TS₁ ‡, labelled in red step 1 — slow, the RDS, with a red double arrow Ea₁ large; it drops into a valley labelled NO₃ + NO + CO, intermediate: a valley; climbs a small second barrier to TS₂ ‡, labelled in blue step 2 — fast, small Ea₂, with a short blue double arrow Ea₂; and falls to the product plateau NO + CO₂ + NO₂. Right column: rate = k[NO₂]² — from step 1 alone, which matches experiment so the mechanism is consistent; step 1 has the tallest barrier, so it is slowest and is the RDS; step 2 has a small barrier, is fast and sets nothing; CO is absent from the rate law because it reacts only after the bottleneck; NO₃ is made in step 1 and used in step 2 — an intermediate that cancels from the total; overall NO₂ + CO → NO + CO₂; an elementary step takes its rate law from its own stoichiometry, so the bimolecular NO₂ + NO₂ step gives [NO₂]².',
      caption: 'The two-step NO₂ + CO mechanism: the tall first barrier is the bottleneck, so the rate law is written from that step alone — rate = k[NO₂]², with CO nowhere in it (barrier heights illustrative).',
    },
    blocks: [
      '- Tallest barrier = slowest step = the RDS: write the rate law from it alone, $\\text{rate} = k[\\text{NO}_2]^2$',
      '- CO enters after the RDS, so it never appears; NO₃ is made in step 1, used in step 2 — an intermediate',
    ],
  },
]
