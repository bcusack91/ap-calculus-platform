import type { DeckFigurePlacement } from './index'

/**
 * Biostatistics (MCAT Strategy) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (a skewed curve, the
 * normal curve, a 2×2 decision grid, tail areas, overlapping sampling
 * distributions, a forest-style CI plot, scatter plots, causal diagrams, an
 * icon array) — no textbook, prep-company or AAMC figure was copied.
 *
 * Numbers: every Gaussian area here is COMPUTED (Simpson integration of the
 * standard normal density): the 68.3 / 95.4 / 99.7 % bands, z = 2.17 for a
 * two-tailed p = 0.03, and the 50 % / 95 % power of the two power panels
 * (one-tailed α = 0.05, critical z = 1.645, the effect fixed at 1.645 SE of
 * the small study so quadrupling n gives δ/SE = 3.29). The skewed curve is a
 * log-normal (illustrative). Scatter points come from a seeded generator and
 * are orthogonalised so each panel's sample r is EXACTLY the labelled value.
 * Everything else is a worked number the lesson states: recovery times 5, 6,
 * 7, 8, 100 days; mean 10 / SD 2; BP drop 10 mmHg (5–15); weight loss 5 lb
 * (1–9 vs 4.9–5.1); OR 2.0 (0.8–5.2); 10 % vs 6 % heart attacks → RR 0.6,
 * ARR 4 %, RRR 40 %, NNT 25.
 *
 * Colours: significant / correct / "power" BLUE (fig-accent); errors, tail
 * areas, outliers and "not significant" RED (fig-accent-2); axes, null-world
 * curves and reference lines grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same coloured group.
 * Marker ids are unique per figure (arr-bs-<figure>-<colour>).
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

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 6) => `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="currentColor"/>`

/** An open polyline through the points, in the current colour. */
const CURVE = (pts: Array<[number, number]>, sw = 3.5) =>
  `<path d="${pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linejoin="round"/>`

/** A closed area: down to the baseline at both ends of the points, filled with the current colour. */
const AREA = (pts: Array<[number, number]>, base: number, opacity: number) => {
  if (!pts.length) return ''
  const first = pts[0]
  const last = pts[pts.length - 1]
  return `<path d="M${first[0].toFixed(1)} ${base} ${pts.map(([x, y]) => `L${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')} L${last[0].toFixed(1)} ${base} Z" fill="currentColor" fill-opacity="${opacity}"/>`
}

/** Points of y = f(u) sampled from a to b (inclusive) in `steps` steps, mapped through px/py. */
const sample = (a: number, b: number, steps: number, f: (u: number) => number, px: (u: number) => number, py: (v: number) => number): Array<[number, number]> =>
  Array.from({ length: steps + 1 }, (_, i) => {
    const u = a + ((b - a) * i) / steps
    return [px(u), py(f(u))] as [number, number]
  })

/* ---------- the statistics, computed ---------- */

/** Standard normal density φ(z). */
const phi = (z: number) => Math.exp((-z * z) / 2) / Math.sqrt(2 * Math.PI)

/** Standard normal CDF Φ(z) by Simpson's rule from −10 (error far below the 0.1 % labels). */
const Phi = (z: number) => {
  const a = -10
  const n = 4000
  const h = (z - a) / n
  let s = phi(a) + phi(z)
  for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * phi(a + i * h)
  return (s * h) / 3
}

/** Inverse of Φ by bisection. */
const PhiInv = (p: number) => {
  let lo = -10
  let hi = 10
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2
    if (Phi(mid) < p) lo = mid
    else hi = mid
  }
  return (lo + hi) / 2
}

const pct = (x: number, d = 1) => `${(100 * x).toFixed(d)}%`

/* 1 — Skew: mode < median < mean, and the lesson's recovery-time outlier (lead, 1000×460) */
const LN_S = 0.75
const lnPdf = (v: number) => (v <= 0 ? 0 : Math.exp(-(Math.log(v) ** 2) / (2 * LN_S * LN_S)) / (v * LN_S * Math.sqrt(2 * Math.PI)))
const SK_MODE = Math.exp(-LN_S * LN_S)
const SK_MEDIAN = 1
const SK_MEAN = Math.exp((LN_S * LN_S) / 2)
const SK_FMAX = lnPdf(SK_MODE)
const SK_X = (v: number) => 60 + 93 * v
const SK_Y = (f: number) => 360 - (220 * f) / SK_FMAX
const skewCurve = sample(0.001, 4.6, 230, lnPdf, SK_X, SK_Y)
const RECOVERY = [5, 6, 7, 8, 100]
const REC_MEAN = RECOVERY.reduce((s, v) => s + v, 0) / RECOVERY.length
const REC_MEDIAN = [...RECOVERY].sort((a, b) => a - b)[2]
const RC_X = (d: number) => (d >= 90 ? 930 + 12 * (d - 100) : 560 + 12 * d)
const skewMarker = (v: number, top: number, label: string) =>
  `${LINE(SK_X(v), 360, SK_X(v), top, 2.5, true)}${T(SK_X(v) + 8, top + 6, 17, label, 'start', '700')}`
const skewSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<defs>${ARROW('arr-bs-skew')}</defs>
${T(270, 40, 19, 'Right-skewed data (illustrative)', 'middle', '700')}
<g class="fig-muted">${LINE(60, 360, 490, 360, 2.5)}${T(275, 386, 15, 'value →', 'middle')}${LINE(520, 24, 520, 440, 1.5)}</g>
${AREA(skewCurve, 360, 0.08)}
${CURVE(skewCurve, 3.5)}
${skewMarker(SK_MODE, 70, 'mode')}
<g class="fig-accent">${skewMarker(SK_MEDIAN, 110, 'median')}</g>
<g class="fig-accent-2">${skewMarker(SK_MEAN, 150, 'mean')}
<defs>${ARROW('arr-bs-skew-r')}</defs>
${T(250, 226, 16, 'the long right tail pulls the mean', 'start', '700')}
${ARR(260, 244, 470, 244, 'arr-bs-skew-r', 2.5)}</g>
${T(275, 422, 19, 'mode &lt; median &lt; mean', 'middle', '700')}
<g class="fig-muted">${T(275, 446, 14, '(left skew reverses the order)', 'middle')}</g>
${T(760, 40, 18, 'Lesson: recovery times 5, 6, 7, 8, 100 days', 'middle', '700')}
<g class="fig-muted">
${LINE(560, 300, 878, 300, 2.5)}${LINE(906, 300, 960, 300, 2.5)}
${LINE(880, 310, 890, 290, 2.5)}${LINE(892, 310, 902, 290, 2.5)}
${[0, 5, 10, 15, 20, 25].map((d) => `${LINE(RC_X(d), 294, RC_X(d), 306, 2)}${T(RC_X(d), 326, 15, String(d), 'middle')}`).join('')}
${LINE(RC_X(100), 294, RC_X(100), 306, 2)}${T(RC_X(100), 326, 15, '100', 'middle')}
${T(760, 348, 15, 'days (axis broken between 26 and 98)', 'middle')}
</g>
${RECOVERY.slice(0, 4).map((d) => DOT(RC_X(d), 286, 5)).join('')}
<g class="fig-accent-2">${DOT(RC_X(100), 286, 6)}${T(RC_X(100), 268, 15, 'outlier', 'middle', '700')}
${LINE(RC_X(REC_MEAN), 300, RC_X(REC_MEAN), 160, 2.5, true)}
${T(RC_X(REC_MEAN), 124, 17, `mean = ${REC_MEAN.toFixed(1)}`, 'middle', '700')}
${T(RC_X(REC_MEAN), 146, 15, 'no patient is near it', 'middle')}</g>
<g class="fig-accent">${LINE(RC_X(REC_MEDIAN), 300, RC_X(REC_MEDIAN), 202, 2.5, true)}
${T(RC_X(REC_MEDIAN), 172, 17, `median = ${REC_MEDIAN}`, 'middle', '700')}
${T(RC_X(REC_MEDIAN), 194, 15, 'a typical patient', 'middle')}</g>
${T(760, 388, 16, `mean = ${RECOVERY.reduce((s, v) => s + v, 0)} ÷ 5 = ${REC_MEAN.toFixed(1)} days`, 'middle')}
${T(760, 412, 16, `median = 3rd of the 5 sorted values = ${REC_MEDIAN} days`, 'middle')}
${T(760, 442, 17, 'skew or outliers → report the median', 'middle', '700')}
</svg>`

/* 2 — The normal curve with computed 68 / 95 / 99.7 bands (lead, 1000×460). x = 500 + 118 z */
const N_X = (z: number) => 500 + 118 * z
const N_Y = (d: number) => 370 - (250 * d) / phi(0)
const W1 = Phi(1) - Phi(-1)
const W2 = Phi(2) - Phi(-2)
const W3 = Phi(3) - Phi(-3)
const B01 = Phi(1) - Phi(0)
const B12 = Phi(2) - Phi(1)
const B23 = Phi(3) - Phi(2)
const normalSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent">
${AREA(sample(-3, 3, 240, phi, N_X, N_Y), 370, 0.14)}
${AREA(sample(-2, 2, 160, phi, N_X, N_Y), 370, 0.14)}
${AREA(sample(-1, 1, 80, phi, N_X, N_Y), 370, 0.14)}
<rect x="40" y="52" width="26" height="18" fill="currentColor" fill-opacity="0.42"/>
<rect x="40" y="84" width="26" height="18" fill="currentColor" fill-opacity="0.28"/>
<rect x="40" y="116" width="26" height="18" fill="currentColor" fill-opacity="0.14"/>
</g>
${T(76, 67, 18, `within 1σ: ${pct(W1)}`, 'start', '700')}
${T(76, 99, 18, `within 2σ: ${pct(W2)}`, 'start', '700')}
${T(76, 131, 18, `within 3σ: ${pct(W3)}`, 'start', '700')}
${CURVE(sample(-3.9, 3.9, 312, phi, N_X, N_Y), 3.5)}
<g class="fig-muted">${LINE(40, 370, 960, 370, 2.5)}
${[-3, -2, -1, 1, 2, 3].map((z) => LINE(N_X(z), 370, N_X(z), N_Y(phi(z)), 1.5)).join('')}</g>
${[-3, -2, -1, 0, 1, 2, 3].map((z) => `${LINE(N_X(z), 364, N_X(z), 376, 2)}${T(N_X(z), 396, 16, z === 0 ? 'μ' : `μ ${z < 0 ? '−' : '+'} ${Math.abs(z)}σ`, 'middle', '700')}`).join('')}
<g class="fig-muted">${[-3, -2, -1, 0, 1, 2, 3].map((z) => T(N_X(z), 418, 15, String(10 + 2 * z), 'middle')).join('')}
${T(500, 446, 14, 'second row: the lesson’s example, mean 10 μg/mL and SD 2 μg/mL', 'middle')}</g>
${[-0.5, 0.5].map((z) => T(N_X(z), 300, 17, pct(B01), 'middle', '700')).join('')}
${[-1.5, 1.5].map((z) => T(N_X(z), 346, 15, pct(B12), 'middle', '700')).join('')}
${[-2.5, 2.5].map((z) => `${LINE(N_X(z), 334, N_X(z), 364, 1.5)}${T(N_X(z), 326, 15, pct(B23), 'middle', '700')}`).join('')}
${T(960, 67, 17, 'mean 10, SD 2:', 'end', '700')}
${T(960, 93, 16, '6 to 14 = μ ± 2σ', 'end')}
${T(960, 119, 16, `→ about ${pct(W2, 0)} of samples`, 'end')}
</svg>`

/* 3 — Type I / Type II as a 2×2 of decision vs truth (replace-table, 560×440) */
const cell = (x: number, y: number, title: string, sub: string, prob: string, note: string) =>
  `${BOX(x, y, 204, 170, 12, 2.5, 0.1)}${T(x + 102, y + 44, 19, title, 'middle', '700')}${T(x + 102, y + 72, 16, sub, 'middle')}${T(x + 102, y + 114, 17, prob, 'middle', '700')}${T(x + 102, y + 140, 15, note, 'middle')}`
const errorsSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<g class="fig-muted">
${BOX(140, 8, 204, 62, 10, 2)}${BOX(352, 8, 204, 62, 10, 2)}
${BOX(4, 78, 128, 170, 10, 2)}${BOX(4, 258, 128, 170, 10, 2)}
${T(68, 34, 14, 'decision ↓', 'middle')}${T(68, 56, 14, 'truth →', 'middle')}
</g>
${T(242, 35, 18, 'H₀ true', 'middle', '700')}${T(242, 57, 15, '(no real effect)', 'middle')}
${T(454, 35, 18, 'H₀ false', 'middle', '700')}${T(454, 57, 15, '(real effect exists)', 'middle')}
${T(68, 158, 18, 'Reject H₀', 'middle', '700')}
${T(68, 328, 18, 'Fail to', 'middle', '700')}${T(68, 350, 18, 'reject H₀', 'middle', '700')}
<g class="fig-accent-2">${cell(140, 78, 'Type I error', 'false positive', 'probability = α', '(usually 0.05)')}</g>
<g class="fig-accent">${cell(352, 78, 'Correct', 'true positive', 'probability = power', '= 1 − β')}</g>
<g class="fig-muted">${BOX(140, 258, 204, 170, 12, 2.5, 0.1)}</g>
${T(242, 302, 19, 'Correct', 'middle', '700')}${T(242, 330, 16, 'true negative', 'middle')}${T(242, 372, 17, 'probability = 1 − α', 'middle', '700')}${T(242, 398, 15, '(0.95 at α = 0.05)', 'middle')}
<g class="fig-accent-2">${cell(352, 258, 'Type II error', 'false negative', 'probability = β', 'a real effect missed')}</g>
</svg>`

/* 4 — p = 0.03 as the two tail areas beyond the observed z on H₀'s distribution (lead, 1000×460). x = 350 + 92 z */
const P_OBS = 0.03
const Z_OBS = PhiInv(1 - P_OBS / 2)
const Z_CRIT = PhiInv(0.975)
const P_X = (z: number) => 350 + 92 * z
const P_Y = (d: number) => 380 - (260 * d) / phi(0)
const pvalueSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(350, 40, 19, 'If H₀ is true, results land here by chance alone', 'middle', '700')}
<g class="fig-muted">${T(350, 76, 15, `α = 0.05, two-tailed: reject beyond ±${Z_CRIT.toFixed(2)} (0.025 in each tail)`, 'middle')}
${LINE(P_X(Z_CRIT), 380, P_X(Z_CRIT), 152, 2, true)}${LINE(P_X(-Z_CRIT), 380, P_X(-Z_CRIT), 152, 2, true)}
${T(P_X(Z_CRIT), 142, 15, `+${Z_CRIT.toFixed(2)}`, 'middle', '700')}${T(P_X(-Z_CRIT), 142, 15, `−${Z_CRIT.toFixed(2)}`, 'middle', '700')}
${LINE(16, 380, 684, 380, 2.5)}
${[-3, -2, -1, 0, 1, 2, 3].map((z) => `${LINE(P_X(z), 374, P_X(z), 386, 2)}${T(P_X(z), 404, 15, z < 0 ? `−${-z}` : String(z), 'middle')}`).join('')}
${T(350, 426, 15, 'test statistic z (0 = exactly what H₀ predicts)', 'middle')}
${LINE(700, 24, 700, 440, 1.5)}</g>
<g class="fig-accent-2">
<defs>${ARROW('arr-bs-p-r')}</defs>
${AREA(sample(Z_OBS, 3.6, 60, phi, P_X, P_Y), 380, 0.55)}
${AREA(sample(-3.6, -Z_OBS, 60, phi, P_X, P_Y), 380, 0.55)}
${T(690, 250, 16, `observed z = ${Z_OBS.toFixed(2)}`, 'end', '700')}
${ARR(610, 258, P_X(Z_OBS) + 6, 364, 'arr-bs-p-r', 2.5)}
${T(20, 250, 16, `z = −${Z_OBS.toFixed(2)}`, 'start', '700')}
${ARR(80, 258, P_X(-Z_OBS) - 6, 364, 'arr-bs-p-r', 2.5)}
${T(650, 352, 15, (P_OBS / 2).toFixed(3), 'middle', '700')}
${T(50, 352, 15, (P_OBS / 2).toFixed(3), 'middle', '700')}
${T(350, 452, 17, `p = ${(P_OBS / 2).toFixed(3)} + ${(P_OBS / 2).toFixed(3)} = ${P_OBS}`, 'middle', '700')}
</g>
${CURVE(sample(-3.6, 3.6, 288, phi, P_X, P_Y), 3.5)}
${T(350, 112, 16, 'H₀ distribution', 'middle')}
${T(720, 66, 19, `p = ${P_OBS} means:`, 'start', '700')}
${T(720, 96, 17, 'if H₀ were true, a result at')}
${T(720, 120, 17, 'least this extreme would turn')}
${T(720, 144, 17, 'up about 3% of the time')}
<g class="fig-accent">${T(720, 192, 18, `${P_OBS} &lt; α = 0.05`, 'start', '700')}
${T(720, 218, 18, '→ reject H₀ (significant)', 'start', '700')}</g>
${T(720, 270, 18, 'p is NOT:', 'start', '700')}
${T(720, 298, 16, '• the chance that H₀ is true')}
${T(720, 322, 16, '• the size of the effect')}
<g class="fig-muted">${T(720, 372, 15, 'one-tailed test: all of α sits in')}
${T(720, 394, 15, 'one tail, critical z = 1.645')}</g>
</svg>`

/* 5 — Power: H₀ and H₁ sampling distributions, n vs 4n, same true effect (lead, 1000×460) */
const Z_A = PhiInv(0.95) // one-tailed α = 0.05
const DELTA = Z_A // true effect, in SE units of the small study
const POWER_A = 1 - Phi((Z_A * 1 - DELTA) / 1)
const POWER_B = 1 - Phi((Z_A * 0.5 - DELTA) / 0.5)
const powerPanel = (x0: number, se: number, peak: number, title: string, sub: string) => {
  const px = (u: number) => x0 + 57 * (u + 3)
  const crit = Z_A * se
  const d0 = (u: number) => phi(u / se)
  const d1 = (u: number) => phi((u - DELTA) / se)
  const py = (d: number) => 390 - (peak * d) / phi(0)
  return `${T(x0 + 217, 82, 18, title, 'middle', '700')}
<g class="fig-muted">${T(x0 + 217, 104, 15, sub, 'middle')}
${AREA(sample(Math.max(-3, DELTA - 4 * se), crit, 120, d1, px, py), 390, 0.4)}
${LINE(px(-3), 390, px(4.6), 390, 2.5)}</g>
<g class="fig-accent">${AREA(sample(crit, Math.min(4.6, DELTA + 4.2 * se), 120, d1, px, py), 390, 0.3)}
${CURVE(sample(Math.max(-3, DELTA - 4.2 * se), Math.min(4.6, DELTA + 4.2 * se), 160, d1, px, py), 3.5)}
${T(px(DELTA) + 14, py(phi(0)) - 4, 16, 'H₁ (real effect)', 'start', '700')}</g>
<g class="fig-accent-2">${AREA(sample(crit, 4 * se, 80, d0, px, py), 390, 0.6)}</g>
<g class="fig-muted">${CURVE(sample(Math.max(-3, -4.2 * se), 4.2 * se, 160, d0, px, py), 3)}</g>
${T(px(0) - 14, py(phi(0)) - 4, 16, 'H₀', 'end', '700')}
${LINE(px(crit), 390, px(crit), py(phi(0)) - 18, 2, true)}
<g class="fig-muted">${T(px(crit), 412, 14, 'critical value', 'middle')}</g>`
}
const powerSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-accent-2"><rect x="60" y="22" width="24" height="18" fill="currentColor" fill-opacity="0.6"/></g>
${T(92, 37, 16, 'α: false positive (5%)', 'start', '700')}
<g class="fig-muted"><rect x="350" y="22" width="24" height="18" fill="currentColor" fill-opacity="0.4"/></g>
${T(382, 37, 16, 'β: real effect missed', 'start', '700')}
<g class="fig-accent"><rect x="630" y="22" width="24" height="18" fill="currentColor" fill-opacity="0.3"/></g>
${T(662, 37, 16, 'power = 1 − β: effect detected', 'start', '700')}
${powerPanel(20, 1, 130, `n patients: power = ${pct(POWER_A, 0)}`, `β = ${pct(1 - POWER_A, 0)}`)}
<g class="fig-muted">${LINE(500, 64, 500, 420, 1.5)}</g>
${powerPanel(522, 0.5, 250, `4n patients: power = ${pct(POWER_B, 0)}`, `SE = SD/√n halves, β = ${pct(1 - POWER_B, 0)}`)}
<g class="fig-muted">${T(500, 446, 15, 'same true effect, same α = 0.05 (one-tailed) — only the sample size changed (computed, illustrative)', 'middle')}</g>
</svg>`

/* 6 — Confidence intervals against the null value: difference (0) and ratio (1) (lead, 1000×460) */
const CI_X = (v: number) => 80 + 28 * v
const OR_X = (v: number) => 600 + 70 * Math.log2(v / 0.25)
const ciBar = (x1: number, x2: number, xm: number, y: number) =>
  `${LINE(x1, y, x2, y, 4)}${x2 - x1 > 16 ? `${LINE(x1, y - 10, x1, y + 10, 3)}${LINE(x2, y - 10, x2, y + 10, 3)}` : ''}${DOT(xm, y, 7)}`
const ciSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(300, 40, 19, 'Difference: null value = 0', 'middle', '700')}
${T(790, 40, 19, 'Ratio (OR, RR): null value = 1', 'middle', '700')}
<g class="fig-muted">
${LINE(52, 380, 540, 380, 2.5)}
${[0, 2, 4, 6, 8, 10, 12, 14, 16].map((v) => `${LINE(CI_X(v), 374, CI_X(v), 386, 2)}${T(CI_X(v), 404, 15, String(v), 'middle')}`).join('')}
${T(300, 428, 15, 'mean difference (each study’s own units)', 'middle')}
${LINE(570, 24, 570, 440, 1.5)}
${LINE(600, 380, 970, 380, 2.5)}
${[0.25, 0.5, 1, 2, 4, 8].map((v) => `${LINE(OR_X(v), 374, OR_X(v), 386, 2)}${T(OR_X(v), 404, 15, String(v), 'middle')}`).join('')}
${T(790, 428, 15, 'odds ratio (log scale)', 'middle')}
</g>
<g class="fig-accent-2">${LINE(CI_X(0), 70, CI_X(0), 380, 2.5, true)}${LINE(OR_X(1), 70, OR_X(1), 380, 2.5, true)}
${T(CI_X(0) + 8, 74, 14, 'no effect', 'start', '700')}${T(OR_X(1) + 8, 74, 14, 'no association', 'start', '700')}</g>
${T(CI_X(0) + 16, 116, 16, 'BP drop 10 mmHg, 95% CI 5–15', 'start', '700')}
<g class="fig-accent">${ciBar(CI_X(5), CI_X(15), CI_X(10), 140)}${T(CI_X(5), 170, 15, 'excludes 0 → significant', 'start', '700')}</g>
${T(CI_X(0) + 16, 216, 16, 'Study A: weight loss 5 lb, CI 1–9', 'start', '700')}
<g class="fig-accent">${ciBar(CI_X(1), CI_X(9), CI_X(5), 240)}</g>
${T(CI_X(9) + 16, 246, 15, 'wide → imprecise (small n)')}
${T(CI_X(0) + 16, 296, 16, 'Study B: weight loss 5 lb, CI 4.9–5.1', 'start', '700')}
<g class="fig-accent">${ciBar(CI_X(4.9), CI_X(5.1), CI_X(5), 320)}</g>
${T(CI_X(9) + 16, 326, 15, 'narrow → precise (large n)')}
${T(OR_X(1) + 12, 186, 16, 'OR = 2.0, 95% CI 0.8–5.2', 'start', '700')}
<g class="fig-accent-2">${ciBar(OR_X(0.8), OR_X(5.2), OR_X(2), 210)}
${T(OR_X(1) + 12, 244, 16, 'crosses 1 → NOT significant', 'start', '700')}</g>
<g class="fig-muted">${T(OR_X(1) + 12, 296, 15, 'the estimate says “doubled odds”,')}
${T(OR_X(1) + 12, 318, 15, 'but OR = 1 is still plausible')}</g>
</svg>`

/* 7 — Scatter plots for r = +0.9, 0, −0.9: seeded points, sample r exact (lead, 1000×460) */
const scatterPoints = (rho: number, seed: number, n = 36): Array<[number, number]> => {
  let s = seed >>> 0
  const rnd = () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return (s + 0.5) / 4294967296
  }
  const gauss = () => Math.sqrt(-2 * Math.log(rnd())) * Math.cos(2 * Math.PI * rnd())
  const xs = Array.from({ length: n }, gauss)
  const es = Array.from({ length: n }, gauss)
  const std = (v: number[]) => {
    const m = v.reduce((a, b) => a + b, 0) / v.length
    const c = v.map((x) => x - m)
    const sd = Math.sqrt(c.reduce((a, b) => a + b * b, 0) / v.length)
    return c.map((x) => x / sd)
  }
  const zx = std(xs)
  const e0 = std(es)
  const proj = e0.reduce((a, e, i) => a + e * zx[i], 0) / n
  const ze = std(e0.map((e, i) => e - proj * zx[i]))
  return zx.map((x, i) => [x, rho * x + Math.sqrt(1 - rho * rho) * ze[i]])
}
const sampleR = (pts: Array<[number, number]>) => {
  const n = pts.length
  const mx = pts.reduce((a, p) => a + p[0], 0) / n
  const my = pts.reduce((a, p) => a + p[1], 0) / n
  let sxy = 0
  let sxx = 0
  let syy = 0
  for (const [x, y] of pts) {
    sxy += (x - mx) * (y - my)
    sxx += (x - mx) ** 2
    syy += (y - my) ** 2
  }
  return sxy / Math.sqrt(sxx * syy)
}
const SCATTERS = [
  { rho: 0.9, seed: 20261029, x0: 50, cls: 'fig-accent', label: 'strong positive' },
  { rho: 0, seed: 7331, x0: 370, cls: '', label: 'no linear relationship' },
  { rho: -0.9, seed: 4242, x0: 690, cls: 'fig-accent-2', label: 'strong negative' },
].map((p) => ({ ...p, pts: scatterPoints(p.rho, p.seed) }))
const rLabel = (r: number) => `r = ${Math.abs(r) < 0.005 ? '0' : `${r > 0 ? '+' : '−'}${Math.abs(r).toFixed(1)}`}`
const scatterPanel = (p: (typeof SCATTERS)[number]) => {
  const b = Math.max(...p.pts.flatMap(([x, y]) => [Math.abs(x), Math.abs(y)]))
  const px = (u: number) => p.x0 + 20 + ((u + b) / (2 * b)) * 230
  const py = (v: number) => 340 - ((v + b) / (2 * b)) * 230
  const dots = p.pts.map(([x, y]) => DOT(px(x), py(y), 5.5)).join('')
  return `<g class="fig-muted">${LINE(p.x0, 360, p.x0 + 270, 360, 2.5)}${LINE(p.x0, 360, p.x0, 90, 2.5)}</g>
${p.cls ? `<g class="${p.cls}">${dots}</g>` : dots}
${T(p.x0 + 135, 66, 22, rLabel(sampleR(p.pts)), 'middle', '700')}
${T(p.x0 + 135, 392, 17, p.label, 'middle', '700')}`
}
const scatterSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${SCATTERS.map(scatterPanel).join('\n')}
<g class="fig-muted">${T(500, 418, 15, '36 illustrative points per panel; x and y axes in arbitrary units', 'middle')}</g>
${T(500, 448, 17, 'the sign gives the direction, |r| the strength — neither proves causation', 'middle', '700')}
</svg>`

/* 8 — Correlation ≠ causation: three causal stories for one correlation (lead, 1000×460) */
const NODE = (x: number, y: number, w: number, role: string, what: string) =>
  `${BOX(x, y, w, 70, 12, 2.5)}${T(x + w / 2, y + 28, 15, role, 'middle')}${T(x + w / 2, y + 52, 17, what, 'middle', '700')}`
const causeSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
<g class="fig-muted">${LINE(330, 30, 330, 400, 1.5)}${LINE(670, 30, 670, 400, 1.5)}</g>
${T(170, 50, 20, '1. Causation', 'middle', '700')}
${NODE(50, 100, 240, 'X (exposure)', 'aspirin')}
${NODE(50, 250, 240, 'Y (outcome)', 'fewer heart attacks')}
<g class="fig-accent"><defs>${ARROW('arr-bs-cause-b')}</defs>${ARR(170, 172, 170, 244, 'arr-bs-cause-b', 3.5)}</g>
${T(170, 366, 16, 'X really drives Y', 'middle')}
${T(500, 50, 20, '2. Reverse causation', 'middle', '700')}
${NODE(380, 100, 240, 'X (assumed cause)', 'depression')}
${NODE(380, 250, 240, 'Y (assumed effect)', 'poor physical health')}
<g class="fig-accent-2"><defs>${ARROW('arr-bs-cause-r')}</defs>${ARR(500, 248, 500, 176, 'arr-bs-cause-r', 3.5)}</g>
${T(500, 366, 16, 'Y may be driving X instead', 'middle')}
${T(835, 50, 20, '3. Confounding', 'middle', '700')}
<g class="fig-accent-2"><defs>${ARROW('arr-bs-cause-c')}</defs>
${NODE(745, 90, 180, 'Z (confounder)', 'summer heat')}
${ARR(790, 162, 750, 244, 'arr-bs-cause-c', 3.5)}${ARR(880, 162, 920, 244, 'arr-bs-cause-c', 3.5)}</g>
${NODE(682, 250, 138, 'X', 'ice cream sales')}
${NODE(862, 250, 118, 'Y', 'drownings')}
<g class="fig-muted">${LINE(824, 285, 858, 285, 2.5, true)}</g>
${T(835, 344, 15, 'correlated, but neither', 'middle')}
${T(835, 366, 15, 'causes the other', 'middle')}
${T(500, 440, 17, 'a strong r fits all three — only design (randomly assign X) can tell them apart', 'middle', '700')}
</svg>`

/* 9 — The lesson's RCT as two 10×10 icon arrays: RR, ARR, RRR, NNT (lead, 1000×460) */
const RISK_PLACEBO = 0.1
const RISK_DRUG = 0.06
const RR = RISK_DRUG / RISK_PLACEBO
const ARR_ABS = RISK_PLACEBO - RISK_DRUG
const NNT = 1 / ARR_ABS
const iconGrid = (x0: number, events: number, prevented: number) => {
  const healthy: string[] = []
  const hit: string[] = []
  const saved: string[] = []
  for (let k = 0; k < 100; k++) {
    const cx = x0 + 25 * (k % 10)
    const cy = 124 + 25 * Math.floor(k / 10)
    if (k < events) hit.push(DOT(cx, cy, 9))
    else if (k < events + prevented) saved.push(`<circle cx="${cx}" cy="${cy}" r="8" fill="none" stroke="currentColor" stroke-width="3"/>`)
    else healthy.push(`<circle cx="${cx}" cy="${cy}" r="8" fill="currentColor" fill-opacity="0.4"/>`)
  }
  return `<g class="fig-muted">${healthy.join('')}</g><g class="fig-accent-2">${hit.join('')}</g><g class="fig-accent">${saved.join('')}</g>`
}
const riskSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(172, 70, 19, `placebo: ${Math.round(100 * RISK_PLACEBO)} of 100`, 'middle', '700')}
${T(472, 70, 19, `drug: ${Math.round(100 * RISK_DRUG)} of 100`, 'middle', '700')}
<g class="fig-muted">${T(172, 94, 15, 'had a heart attack', 'middle')}${T(472, 94, 15, 'had a heart attack', 'middle')}</g>
${iconGrid(60, Math.round(100 * RISK_PLACEBO), 0)}
${iconGrid(360, Math.round(100 * RISK_DRUG), Math.round(100 * ARR_ABS))}
<g class="fig-accent">${T(322, 388, 16, `blue rings: the ${Math.round(100 * ARR_ABS)} heart attacks the drug prevented per 100`, 'middle', '700')}</g>
<g class="fig-muted">${T(322, 414, 15, 'each dot = 1 patient; red = heart attack', 'middle')}
${LINE(630, 30, 630, 430, 1.5)}</g>
${T(656, 70, 18, 'per 100 patients in each arm', 'start', '700')}
${T(656, 118, 20, `RR = 6% ÷ 10% = ${RR.toFixed(1)}`, 'start', '700')}
<g class="fig-muted">${T(656, 142, 15, `drug group has ${Math.round(100 * RR)}% of the placebo risk`)}</g>
<g class="fig-accent">${T(656, 190, 20, `ARR = 10% − 6% = ${Math.round(100 * ARR_ABS)}%`, 'start', '700')}</g>
<g class="fig-muted">${T(656, 214, 15, 'the absolute drop, in percentage points')}</g>
${T(656, 262, 20, `RRR = 4% ÷ 10% = ${Math.round((100 * ARR_ABS) / RISK_PLACEBO)}%`, 'start', '700')}
<g class="fig-muted">${T(656, 286, 15, '= 1 − RR, the relative drop')}</g>
<g class="fig-accent">${T(656, 334, 20, `NNT = 1 ÷ 0.04 = ${Math.round(NNT)}`, 'start', '700')}</g>
<g class="fig-muted">${T(656, 358, 15, `100 treated prevent 4, so ${Math.round(NNT)} prevent 1`)}</g>
${T(656, 404, 15, '“40% fewer” sounds big; 4 in 100 is')}
${T(656, 426, 15, 'the absolute size of the benefit')}
</svg>`

export const mcatBiostatisticsFigures: DeckFigurePlacement[] = [
  {
    at: 'Measures of Central Tendency',
    mode: 'lead',
    figure: {
      svg: skewSvg,
      alt:
        `Two panels. Left: an illustrative right-skewed distribution — a hump on the left with a long tail to the right. Three dashed markers: the mode at the peak (grey), the median a little to its right (blue), and the mean furthest right (red), with an arrow reading “the long right tail pulls the mean”. Order: mode < median < mean; left skew reverses it. Right: the lesson’s recovery times on a number line, four patients clustered at 5, 6, 7 and 8 days and one red outlier at 100 days (the axis is broken between 26 and 98). The blue median marker sits at 7 days, “a typical patient”; the red mean marker sits at ${REC_MEAN.toFixed(1)} days, where no patient is. Mean = 126 ÷ 5 = ${REC_MEAN.toFixed(1)} days; median = the 3rd of 5 sorted values = 7 days. With skew or outliers, report the median.`,
      caption: 'The mean chases the tail: one 100-day patient drags the mean to 25.2 days while the median stays at a typical 7.',
    },
    blocks: [
      '- Right skew: **mode < median < mean** — the long tail drags the mean toward it',
      '- Skew or outliers → report the **median**: for 5, 6, 7, 8, 100 days, mean 25.2 but median 7',
    ],
  },
  {
    at: 'Measures of Spread',
    mode: 'lead',
    figure: {
      svg: normalSvg,
      alt:
        `A normal (bell) curve centred on the mean μ, with ticks at μ ± 1σ, 2σ and 3σ. Three nested blue bands, darkest in the middle: within 1σ of the mean lies ${pct(W1)} of the area (${pct(B01)} on each side), within 2σ ${pct(W2)} (a further ${pct(B12)} on each side), within 3σ ${pct(W3)} (a further ${pct(B23)} on each side). A second row of tick labels applies the lesson’s example, mean 10 and SD 2: 4, 6, 8, 10, 12, 14, 16. Note at top right: 6 to 14 is μ ± 2σ, so about 95% of samples fall there.`,
      caption: 'The 68–95–99.7 rule, with every band computed from the normal curve; the second axis row is the lesson’s mean 10, SD 2 example.',
    },
    blocks: [
      '- SD (σ) is in the data’s own units; ±1σ, ±2σ, ±3σ hold **68 / 95 / 99.7 %** of a normal distribution',
      '- Mean 10, SD 2: 6 to 14 is μ ± 2σ, so about **95 %** of the values',
    ],
  },
  {
    at: 'Type I & II Errors',
    mode: 'replace-table',
    figure: {
      svg: errorsSvg,
      alt:
        'A two-by-two grid. Columns give the truth: H₀ true (no real effect) or H₀ false (a real effect exists). Rows give the decision: reject H₀ or fail to reject H₀. Reject a true H₀: Type I error, a false positive, probability α (usually 0.05). Reject a false H₀: correct, a true positive, probability = power = 1 − β. Fail to reject a true H₀: correct, a true negative, probability 1 − α (0.95 at α = 0.05). Fail to reject a false H₀: Type II error, a false negative, probability β — a real effect missed.',
    },
    blocks: [
      '- Type I = reject a **true** $H_0$ (false positive); its rate is $\\alpha$, usually 0.05',
      '- Type II = miss a **real** effect (false negative); its rate is $\\beta$',
      '- Power = $1 - \\beta$; lowering α trades Type I errors for Type II',
    ],
  },
  {
    at: 'p-value Interpretation',
    mode: 'lead',
    figure: {
      svg: pvalueSvg,
      alt:
        `The bell-shaped distribution of the test statistic z if H₀ is true, centred on 0. Dashed grey critical lines at −${Z_CRIT.toFixed(2)} and +${Z_CRIT.toFixed(2)} mark a two-tailed α = 0.05 test, 0.025 in each tail. The lesson’s observed result, p = 0.03, corresponds to z = ±${Z_OBS.toFixed(2)}; both tails beyond it are shaded red, ${(P_OBS / 2).toFixed(3)} each, so p = 0.015 + 0.015 = 0.03. Text: p = 0.03 means that if H₀ were true, a result at least this extreme would turn up about 3% of the time; 0.03 < α = 0.05, so reject H₀ (significant). p is not the chance that H₀ is true and not the size of the effect. A one-tailed test puts all of α in one tail, critical z = 1.645.`,
      caption: `The p-value is a tail area on H₀’s distribution: p = 0.03 two-tailed puts the observed z at ±${Z_OBS.toFixed(2)}, just past the ±1.96 cut-offs (areas computed).`,
    },
    blocks: [
      '- p = chance of data at least this extreme **if $H_0$ is true** — not the chance that $H_0$ is true',
      '- p = 0.03 < α = 0.05 → reject $H_0$; a two-tailed test splits α into 0.025 per tail',
    ],
  },
  {
    at: 'Power & Sample Size',
    mode: 'lead',
    figure: {
      svg: powerSvg,
      alt:
        `Two panels, each with a grey H₀ sampling distribution centred on zero and a blue H₁ distribution centred on the true effect, which is the same in both panels, plus a dashed critical value for a one-tailed α = 0.05 test. Red: the sliver of H₀ beyond the critical value, α, false positives (5%). Grey: the part of H₁ below the critical value, β, real effects missed. Blue: the part of H₁ beyond it, power = 1 − β. Left, n patients: the curves are wide and overlap heavily; power = ${pct(POWER_A, 0)}, β = ${pct(1 - POWER_A, 0)}. Right, 4n patients: SE = SD/√n halves, so both curves are half as wide and twice as tall, overlap far less, and power = ${pct(POWER_B, 0)}, β = ${pct(1 - POWER_B, 0)}. Same effect, same α; only the sample size changed.`,
      caption: 'Quadrupling n halves the standard error, so the same real effect clears the cut-off 95% of the time instead of 50% (computed for an illustrative effect).',
    },
    blocks: [
      '- Power = $1 - \\beta$: the chance a real effect reaches significance (aim for ≥ 80 %)',
      '- Larger n → smaller SE ($SD/\\sqrt{n}$) → narrower curves, less overlap → more power',
    ],
  },
  {
    at: 'Confidence Intervals',
    mode: 'lead',
    figure: {
      svg: ciSvg,
      alt:
        'Two forest-style plots of 95% confidence intervals, each against a red dashed null line. Left, differences, null value 0 (no effect): BP drop 10 mmHg, CI 5–15, a blue bar that excludes 0, so significant; Study A weight loss 5 lb, CI 1–9, a long bar, wide so imprecise (small n); Study B weight loss 5 lb, CI 4.9–5.1, a tiny bar, narrow so precise (large n) — same estimate, different precision. Right, ratios on a log scale, null value 1 (no association): OR = 2.0, CI 0.8–5.2, a red bar that crosses 1, so not significant — the estimate says doubled odds but OR = 1 is still plausible.',
      caption: 'Read a CI against its null value (0 for a difference, 1 for a ratio); its width is the precision. All four intervals are the lesson’s examples.',
    },
    blocks: [
      '- A CI that **excludes the null** (0 for a difference, 1 for a ratio) is significant',
      '- Width = precision: Study A (1–9 lb) is wide, Study B (4.9–5.1 lb) narrow — same 5 lb estimate',
    ],
  },
  {
    at: 'Correlation Coefficient (r)',
    mode: 'lead',
    figure: {
      svg: scatterSvg,
      alt:
        'Three scatter plots of 36 illustrative points each. Left, blue, r = +0.9: points hug a rising line, a strong positive correlation. Middle, r = 0: a round, patternless cloud, no linear relationship. Right, red, r = −0.9: points hug a falling line, a strong negative correlation. Footer: the sign gives the direction and |r| the strength; neither proves causation.',
      caption: 'Illustrative points (seeded, each panel’s sample r is exactly the labelled value): direction from the sign, strength from |r|.',
    },
    blocks: [
      '- r runs from −1 to +1: the sign is direction, |r| is strength (±0.7 to 1.0 strong, under ±0.3 weak)',
      '- Even r = ±0.9 shows association only — never causation by itself',
    ],
  },
  {
    at: 'Correlation ≠ Causation',
    mode: 'lead',
    figure: {
      svg: causeSvg,
      alt:
        'Three causal diagrams for one observed correlation. 1, causation: X (aspirin) → Y (fewer heart attacks), X really drives Y. 2, reverse causation: X (depression) and Y (poor physical health) with the arrow pointing from Y up to X — Y may be driving X instead. 3, confounding: Z (summer heat) at the top with red arrows down to X (ice cream sales) and Y (drownings); X and Y are joined only by a dashed line — correlated, but neither causes the other. Footer: a strong r fits all three; only design (randomly assigning X) can tell them apart.',
      caption: 'One correlation, three explanations — the lesson’s aspirin, depression and ice-cream examples as causal diagrams.',
    },
    blocks: [
      '- Same correlation, three stories: X → Y, Y → X, or a confounder Z driving both',
      '- Ice cream sales and drownings rise together because **summer heat** drives both',
    ],
  },
  {
    at: 'Risk Measures',
    mode: 'lead',
    figure: {
      svg: riskSvg,
      alt:
        `Two 10-by-10 grids of dots, one dot per patient. Placebo: 10 of 100 red (heart attacks). Drug: 6 of 100 red plus 4 blue rings, the heart attacks the drug prevented per 100. Right column: RR = 6% ÷ 10% = ${RR.toFixed(1)} (drug group has 60% of the placebo risk); ARR = 10% − 6% = 4% (the absolute drop in percentage points); RRR = 4% ÷ 10% = 40% (= 1 − RR, the relative drop); NNT = 1 ÷ 0.04 = ${Math.round(NNT)} (100 treated prevent 4, so 25 prevent 1). “40% fewer” sounds big; 4 in 100 is the absolute size of the benefit.`,
      caption: 'The lesson’s trial drawn per 100 patients: 10% vs 6% heart attacks gives RR 0.6, ARR 4%, RRR 40% and NNT 25.',
    },
    blocks: [
      '- RR = 0.06 ÷ 0.10 = **0.6**; ARR = 10 % − 6 % = **4 %**; RRR = ARR ÷ 10 % = 40 %',
      '- NNT = 1 ÷ ARR = 1 ÷ 0.04 = **25** patients treated to prevent one heart attack',
    ],
  },
]
