import type { DeckFigurePlacement } from './index'

/**
 * Quantitative Skills & Data Analysis (MCAT Strategy) — figures for the in-class deck.
 * Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW (see memory deck-figures-opus-review).
 *
 * Every drawing below is ours, drawn from the concept (an old bar beside a new
 * bar, a bar cut into blocks of the original value, fold-change rows built from
 * unit blocks, one decay series on a linear and on a log axis) — no textbook,
 * prep-company or AAMC figure was copied.
 *
 * The only numbers drawn are the lesson's own: the worked example 12 → 54 units
 * (42 ÷ 12 = 350%, 54 ÷ 12 = 4.5×, the 42 ÷ 54 ≈ 78% trap) and the quick
 * reference table (2× / 3× / 4× / 5× / 10× → +100 / +200 / +300 / +400 / +900%,
 * reversed −50 / −67 / −75 / −80 / −90%). The bars in the formula figure and
 * the decay series in the semi-log figure are illustrative.
 *
 * Colours: the OLD / reference value is BLUE (fig-accent), the CHANGE (new − old)
 * RED (fig-accent-2), guides and asides grey (fig-muted).
 *
 * Arrowheads: a <marker> inherits colour from ITS OWN ancestors, so each
 * coloured arrow has its marker defined inside the same coloured group. Marker
 * ids are unique per figure (arr-qs-<figure>-<colour>).
 */

const SVG_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif"'

const ARROW = (id: string) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>`

/** A text element in the current colour. `weight` is the font-weight attribute as a string ('400' | '700'). */
const T = (x: number, y: number, size: number, text: string, anchor: 'start' | 'middle' | 'end' = 'start', weight = '400') =>
  `<text x="${x}" y="${y}" font-size="${size}"${weight !== '400' ? ` font-weight="${weight}"` : ''}${anchor !== 'start' ? ` text-anchor="${anchor}"` : ''} fill="currentColor">${text}</text>`

/** A straight arrow in the current colour ending in the given marker. */
const ARR = (x1: number, y1: number, x2: number, y2: number, marker: string, sw = 3) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}" marker-end="url(#${marker})"/>`

/** A plain line in the current colour. */
const LINE = (x1: number, y1: number, x2: number, y2: number, sw = 2, dashed = false) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${sw}"${dashed ? ' stroke-dasharray="7 5"' : ''}/>`

/** A tinted, outlined rectangle (a bar or block) in the current colour. */
const BAR = (x: number, y: number, w: number, h: number, opacity = '0.3') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="currentColor" fill-opacity="${opacity}" stroke="currentColor" stroke-width="2"/>`

/** A vertical bracket (spine + end ticks pointing left) at x from y1 to y2. */
const VBRACKET = (x: number, y1: number, y2: number) =>
  `<path d="M${x - 10} ${y1} L${x} ${y1} L${x} ${y2} L${x - 10} ${y2}" fill="none" stroke="currentColor" stroke-width="2.5"/>`

/** A filled dot in the current colour. */
const DOT = (cx: number, cy: number, r = 6) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor"/>`

/** Polyline path data through the points. */
const poly = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')

/* 1 — The three core formulas: old and new bars, the change on top, and a ratio pair (replace-table, 560×440).
   Bars illustrative: old 70 px, new 175 px, baseline y = 250. */
const formulasSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(280, 34, 19, 'percent change and fold-change both divide by OLD', 'middle', '700')}
<g class="fig-accent">
${BAR(70, 180, 80, 70)}
${BAR(210, 180, 80, 70)}
${T(110, 276, 18, 'old', 'middle', '700')}
</g>
<g class="fig-accent-2">
${BAR(210, 75, 80, 105, '0.25')}
${VBRACKET(312, 75, 180)}
${T(322, 122, 18, 'new − old', 'start', '700')}
${T(322, 146, 16, '(the change)')}
</g>
${T(250, 276, 18, 'new', 'middle', '700')}
<g class="fig-muted">
${LINE(150, 180, 210, 180, 2, true)}
${BAR(430, 130, 40, 120, '0.35')}
${BAR(490, 190, 40, 60, '0.35')}
${LINE(40, 250, 540, 250, 2)}
</g>
${T(450, 276, 18, 'A', 'middle', '700')}
${T(510, 276, 18, 'B', 'middle', '700')}
<g class="fig-muted">${LINE(20, 300, 540, 300, 1.5)}</g>
<text x="30" y="338" font-size="19" fill="currentColor"><tspan font-weight="700">% change</tspan> = (new − old) <tspan class="fig-accent" fill="currentColor" font-weight="700">÷ old</tspan> × 100%</text>
<text x="30" y="376" font-size="19" fill="currentColor"><tspan font-weight="700">fold-change</tspan> = new <tspan class="fig-accent" fill="currentColor" font-weight="700">÷ old</tspan></text>
<text x="30" y="414" font-size="19" fill="currentColor"><tspan font-weight="700">ratio</tspan> = A ÷ B  (any two quantities)</text>
</svg>`

/* 2 — Worked example 12 → 54 units, drawn to scale (6 px per unit) and cut into blocks of 12 (lead, 1000×460).
   Baseline y = 400; pH 6 bar 72 px; pH 8 bar 324 px = 4.5 blocks of 72 px. */
const workedSvg = `${SVG_OPEN} viewBox="0 0 1000 460">
${T(250, 36, 22, 'enzyme activity: 12 → 54 units', 'middle', '700')}
<g class="fig-accent">
${BAR(110, 328, 100, 72)}
${BAR(290, 328, 100, 72)}
${T(160, 318, 20, '12', 'middle', '700')}
${T(340, 371, 18, '1', 'middle', '700')}
</g>
<g class="fig-accent-2">
${BAR(290, 76, 100, 252, '0.22')}
${VBRACKET(410, 76, 328)}
${T(422, 196, 20, '+42', 'start', '700')}
${T(422, 222, 18, '= 3.5 × 12')}
</g>
${T(340, 66, 20, '54', 'middle', '700')}
<g class="fig-muted">
${LINE(210, 328, 290, 328, 2, true)}
${LINE(290, 256, 390, 256, 1.5, true)}
${LINE(290, 184, 390, 184, 1.5, true)}
${LINE(290, 112, 390, 112, 1.5, true)}
${LINE(60, 400, 480, 400, 2)}
</g>
${T(340, 299, 18, '2', 'middle')}
${T(340, 227, 18, '3', 'middle')}
${T(340, 155, 18, '4', 'middle')}
${T(340, 100, 18, '½', 'middle')}
${T(160, 428, 18, 'pH 6 (old)', 'middle')}
${T(340, 428, 18, 'pH 8 (new)', 'middle')}
<g class="fig-muted">${LINE(525, 30, 525, 440, 1.5)}</g>
${T(560, 74, 22, 'divide by the OLD value, 12', 'start', '700')}
${T(560, 128, 21, 'fold-change = 54 ÷ 12 = 4.5×')}
<g class="fig-accent-2">
${T(560, 180, 21, 'increase = (54 − 12) ÷ 12 = 42 ÷ 12', 'start', '700')}
${T(560, 214, 21, '= 3.5 → +350%', 'start', '700')}
</g>
<g class="fig-muted">${T(560, 264, 19, 'check: (4.5 − 1) × 100% = 350% ✓')}</g>
<g class="fig-accent-2">
<rect x="555" y="312" width="420" height="104" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>
${T(580, 352, 21, 'trap: 42 ÷ 54 ≈ 78%  ✗', 'start', '700')}
</g>
${T(580, 390, 18, 'divides by the NEW value — a planted distractor')}
</svg>`

/* 3 — Quick reference: each fold-change row built from blocks of the original (replace-table, 560×440).
   30 px per block; grey first block = the original, blue blocks = what was added. */
const FOLDS: [number, string, string][] = [
  [2, '+100%', '−50%'],
  [3, '+200%', '−67%'],
  [4, '+300%', '−75%'],
  [5, '+400%', '−80%'],
  [10, '+900%', '−90%'],
]
const foldRow = ([f, inc, dec]: [number, string, string], i: number) => {
  const yc = 108 + i * 64
  const y = yc - 17
  const x0 = 75
  const seps = Array.from({ length: f - 2 }, (_, k) => LINE(x0 + 30 * (k + 2), y, x0 + 30 * (k + 2), y + 34, 1.5)).join('')
  const bold = f === 3 ? '700' : '400'
  return `${T(40, yc + 7, 20, `${f}×`, 'middle', '700')}
<g class="fig-muted">${BAR(x0, y, 30, 34, '0.45')}</g>
<g class="fig-accent">${BAR(x0 + 30, y, 30 * (f - 1), 34)}${seps}${T(470, yc + 6, 18, inc, 'end', bold)}</g>
<g class="fig-accent-2">${T(548, yc + 6, 18, dec, 'end', bold)}</g>`
}
const quickRefSvg = `${SVG_OPEN} viewBox="0 0 560 440">
${T(20, 30, 18, 'each block = the original value', 'start', '700')}
<g class="fig-accent">${T(470, 66, 16, 'increase', 'end', '700')}</g>
<g class="fig-accent-2">${T(548, 66, 16, 'reversed', 'end', '700')}</g>
${FOLDS.map(foldRow).join('\n')}
<g class="fig-muted">${LINE(20, 396, 540, 396, 1.5)}</g>
${T(280, 426, 17, '3× = 1 original + 2 added blocks → +200%, not 300%', 'middle', '700')}
</svg>`

/* 4 — One decay series (halves each step, 1000 → 31.25; illustrative) on a linear and a log y-axis (beside, 560×440).
   Beside, not lead: an extra slide here re-segments this short deck and costs it two of its five polls.
   Left: y = 360 − 0.27·v. Right: y = 360 − 135·(log10 v − 1), so 10 / 100 / 1000 sit at 360 / 225 / 90. */
const series = Array.from({ length: 6 }, (_, t) => 1000 / 2 ** t)
const linPts = series.map((v, t): [number, number] => [62 + 38 * t, 360 - 0.27 * v])
const logPts = series.map((v, t): [number, number] => [352 + 38 * t, 360 - 135 * (Math.log10(v) - 1)])
const linCurve = Array.from({ length: 51 }, (_, i): [number, number] => {
  const t = i / 10
  return [62 + 38 * t, 360 - 0.27 * (1000 / 2 ** t)]
})
const semiLogSvg = `${SVG_OPEN} viewBox="0 0 560 440">
<defs>${ARROW('arr-qs-log')}</defs>
${T(155, 32, 18, 'linear axis: a curve', 'middle', '700')}
${ARR(50, 360, 270, 360, 'arr-qs-log', 2.5)}${ARR(50, 360, 50, 62, 'arr-qs-log', 2.5)}
${T(44, 96, 15, '1000', 'end')}${T(44, 366, 15, '0', 'end')}
<g class="fig-muted">${LINE(50, 90, 262, 90, 1.5, true)}</g>
${T(268, 386, 16, 'time', 'end')}
${T(58, 66, 15, 'amount')}
<g class="fig-accent">
<path d="${poly(linCurve)}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
${linPts.map(([x, y]) => DOT(x, y, 5)).join('')}
${T(104, 150, 16, 'halves each step', 'start', '700')}
</g>
<g class="fig-muted">${LINE(290, 24, 290, 392, 1.5)}</g>
${T(430, 32, 18, 'log axis: a straight line', 'middle', '700')}
${ARR(340, 360, 552, 360, 'arr-qs-log', 2.5)}${ARR(340, 360, 340, 62, 'arr-qs-log', 2.5)}
${T(334, 96, 15, '1000', 'end')}${T(334, 231, 15, '100', 'end')}${T(334, 366, 15, '10', 'end')}
<g class="fig-muted">
${LINE(340, 90, 545, 90, 1.5, true)}${LINE(340, 225, 545, 225, 1.5, true)}
${T(500, 148, 15, '×10 per', 'middle')}${T(500, 167, 15, 'equal band', 'middle')}
</g>
${T(550, 386, 16, 'time', 'end')}
${T(348, 66, 15, 'amount (log)')}
<g class="fig-accent">
<path d="${poly(logPts)}" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
${logPts.map(([x, y]) => DOT(x, y, 5)).join('')}
</g>
${T(280, 426, 16, 'the same exponential data, plotted two ways', 'middle', '700')}
</svg>`

export const mcatQuantitativeSkillsFigures: DeckFigurePlacement[] = [
  {
    at: 'Logarithms and semi-log plots',
    mode: 'beside',
    figure: {
      svg: semiLogSvg,
      alt:
        'Two graphs of the same data, an amount that halves at each time step from 1000 down to about 31. Left, with an ordinary linear y-axis from 0 to 1000: the points fall steeply and then flatten, tracing a curve. Right, with a log y-axis whose gridlines 10, 100 and 1000 are equally spaced (each equal step is ×10): the same points lie on a straight descending line. Exponential decay or growth becomes a straight line on a semi-log plot.',
      caption: 'Illustrative: the same halving series is a curve on a linear axis and a straight line on a log axis.',
    },
    blocks: [
      '- $\\text{pH} = -\\log[\\text{H}^+]$: each pH unit is a **10×** change (same idea: pKa, dB, Nernst)',
      '- On a **semi-log plot**, exponential decay or growth (first-order, bacteria) is a straight line',
      '- Spot the straight line and you can read the rate constant off the graph',
    ],
  },
  {
    at: 'The Three Core Formulas',
    mode: 'replace-table',
    figure: {
      svg: formulasSvg,
      alt:
        'An old bar (blue) beside a taller new bar. The new bar’s lower part, up to a dashed line at the old height, is blue; the part above is red and bracketed as new − old, the change. Beside them, two grey bars labelled A and B. Below: % change = (new − old) ÷ old × 100%; fold-change = new ÷ old; ratio = A ÷ B for any two quantities. Percent change and fold-change both divide by the old value.',
      caption: 'Percent change measures the red change against the blue original; fold-change measures the whole new bar against it.',
    },
    blocks: [
      '- **Percent change** = (new − old) / old × 100%: “approximate percent increase?”',
      '- **Fold-change** = new / old: “how many times greater?”',
      '- **Ratio** = A / B: “the ratio of X to Y?”',
      '- Same denominator (old), so % change = (fold − 1) × 100%',
    ],
  },
  {
    at: 'Worked Example: Percent Increase',
    mode: 'lead',
    figure: {
      svg: workedSvg,
      alt:
        'Two bars drawn to scale: enzyme activity of 12 units at pH 6 (old) and 54 units at pH 8 (new). The pH 8 bar is cut into blocks the size of the pH 6 bar: one blue block (the original 12) plus three and a half red blocks, bracketed as +42 = 3.5 × 12. Right: divide by the old value, 12; fold-change = 54 ÷ 12 = 4.5×; increase = (54 − 12) ÷ 12 = 42 ÷ 12 = 3.5, so +350%; check: (4.5 − 1) × 100% = 350%. A red box marks the trap: 42 ÷ 54 ≈ 78% divides by the new value and is a planted distractor.',
      caption: 'The lesson’s example: 54 is 4.5 blocks of 12, and the 3.5 added blocks are the 350% increase.',
    },
    blocks: [
      '- Old = 12, new = 54: (54 − 12)/12 × 100% = **350%**; check: 54/12 = 4.5×, (4.5 − 1) × 100% = 350%',
      '- **Trap:** 42/54 ≈ 78% divides by the new value, and it will be a distractor',
    ],
  },
  {
    at: 'Quick Reference Table',
    mode: 'replace-table',
    figure: {
      svg: quickRefSvg,
      alt:
        'Five horizontal bars built from equal blocks, one per fold-change: 2×, 3×, 4×, 5× and 10×. In each, the first grey block is the original value and the remaining blue blocks are what was added. Beside each, the percent increase (blue) and the percent decrease if reversed (red): 2× +100% / −50%; 3× +200% / −67%; 4× +300% / −75%; 5× +400% / −80%; 10× +900% / −90%. Footer: 3× = 1 original + 2 added blocks, so +200%, not 300%.',
      caption: 'Count only the added blocks: the percent increase is always (fold − 1) × 100%.',
    },
    blocks: [
      '- Percent increase = (fold − 1) × 100%: count the **added** blocks',
      '- Reversed, the drop is (1 − 1/fold) × 100%: a 3× fall is −67%',
      '- A tripling is a **200%** increase, not 300% — the off-by-one trap',
    ],
  },
]
