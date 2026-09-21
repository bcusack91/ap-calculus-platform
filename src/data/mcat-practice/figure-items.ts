/**
 * Generated MCAT figure items: the data-interpretation questions the diagnostic
 * builds from a short study plus one figure, rather than from an authored
 * passage.
 *
 * This replaces a keyword-driven generator that produced several kinds of
 * wrong item (found 2026-09-21 after an owner report on question 36):
 *
 *  - SHAPE MISREAD. Axes used uneven x (doses 1, 2, 4, 8; times 0, 1, 2, 4)
 *    while the shape logic compared raw y-increments as if every step were
 *    equal. Owner's item: x = 1, 2, 4, 8 and y = 47, 53, 61, 70 has y-steps of
 *    6, 8, 9 ("accelerating"), but its slope per unit x falls from 6 to 4 to
 *    2.25 — the curve bends DOWN. A student who read it correctly was marked
 *    wrong. Every context here uses EVENLY spaced x, so a y-step is a slope.
 *  - WRONG SCIENCE. Every curve was forced upward and its shape chosen by
 *    matching words in the context name, so current rose with resistance,
 *    pressure curved against temperature, and a Lineweaver-Burk plot (the
 *    textbook straight line) came out curved. Each context now DECLARES its
 *    true curve, and relationships that fall are re-axed to one that rises
 *    (current vs voltage, not vs resistance).
 *  - NOISE FLIPPING A LAW. A linear profile carried ±17.5% jitter, enough for
 *    Hooke's law to classify as "accelerating". Steps are now noise-free and
 *    rounded individually, so a declared shape is the shape a student sees.
 *  - NO STUDY. The figure appeared with no account of what was done, which is
 *    not an MCAT format: on the real exam a figure always sits in a passage.
 *    Each context carries a short study description, and states whether the
 *    design was an experiment or an observational survey.
 *  - ANSWER-SHAPE TELLS. The key was the strictly longest option in 91% of
 *    these items. Every question below builds its four options from ONE
 *    shared sentence frame, so the key cannot be spotted by its shape.
 *
 * The generator never gives a study numbers that constrain the y-values (no
 * starting concentrations, no masses): the data are synthetic, and a concrete
 * number would let a strong student notice that they do not match.
 */
import type { MCATDiagnosticQuestion } from './diagnostic-generator'

export type CurveShape = 'linear' | 'saturating' | 'accelerating'
export type StudyDesign = 'experimental' | 'observational'

/**
 * A second trace on the same figure.
 *   scale  — every value multiplied by `amount`, so the gap grows with y
 *            (a noncompetitive inhibitor, a blocker, a stiffer spring)
 *   offset — every value shifted by `amount` step-units, so the traces run
 *            parallel (an uncompetitive inhibitor on a double-reciprocal plot)
 */
export interface ComparisonSpec {
  label: string
  /**
   * competitive — the context's hyperbola with K multiplied by `amount`: a
   * competing ligand or competitive inhibitor raises the apparent K, so the
   * gap is widest at low x and NARROWS as the substrate outcompetes it.
   */
  kind: 'scale' | 'offset' | 'competitive'
  amount: number
}

export interface FigureContext {
  /** Short noun phrase naming the study; becomes the study title. */
  context: string
  xLabel: string
  yLabel: string
  xUnit: string
  yUnit: string
  /** MUST be evenly spaced: the shape questions read successive y-steps. */
  xValues: [number, number, number, number]
  /** The relationship the science actually predicts over this range. */
  shape: CurveShape
  design: StudyDesign
  /** What one x-level is called in prose: "the third ___ to the fourth". */
  pointNoun: string
  /** Two or three sentences describing what was done. Rendered above the figure. */
  study: string
  /** y is proportional to x (Hooke, Ohm, ideal-gas P vs T): the line meets the origin. */
  throughOrigin?: boolean
  /** A hard physical ceiling (recombination < 50%, pH before equivalence < 7). */
  yMax?: number
  /** Observational designs only: what an experiment would randomly assign. */
  manipulation?: string
  comparison?: ComparisonSpec
  /**
   * Generate from the actual law instead of a generic curve, where the form is
   * known and a student could check it:
   *   square    — y ∝ x² (a reaction second order in the varied reactant)
   *   hyperbola — y = Ymax·x / (K + x) (Michaelis-Menten; single-site binding)
   * A generic saturating curve bends more sharply than a true hyperbola, which
   * an independent reviewer caught on the binding data.
   */
  law?: 'square' | 'hyperbola' | 'titration' | 'haldane' | 'hardy-weinberg' | 'logistic'
  /** Starting y, for studies that say where they began ("introduced at low frequency"). */
  yStart?: number
  /** Step size, when the unit's default gives impossible magnitudes (a lab cart at 19 m/s). */
  yStep?: number
  /** Decimal places for y, when the unit's default is too coarse to show the curve. */
  yDecimals?: number
  /**
   * The line must meet x = 0 at a POSITIVE value: resting ATP turnover, resting
   * cardiac output, a cart's starting speed, 1/Vmax on a double-reciprocal plot.
   * A free baseline could extrapolate below zero (a negative 1/Vmax), which a
   * strong student would reject.
   */
  positiveIntercept?: boolean
  /**
   * Skip the "does the pattern hold far outside the range?" question. For a
   * double-reciprocal plot the line is straight BY CONSTRUCTION for any
   * Michaelis-Menten enzyme, and extrapolating it is the point of the plot,
   * so "yes" is defensible there.
   */
  skipOverclaim?: boolean
}

export interface FeedbackContext extends FigureContext {
  domain: string
  sourceSlug: string
  system: string
}

const SLOPES = [1, 2, 3]
const INTERCEPTS = [1, 3, 5]

/**
 * Step multipliers per shape. The gaps (0.3–0.4) are wide enough that a
 * rounded step keeps its order, which the guard test checks for every context.
 */
const SHAPE_STEPS: Record<CurveShape, [number, number, number]> = {
  linear: [1, 1, 1],
  saturating: [1.3, 0.9, 0.6],
  accelerating: [0.6, 0.9, 1.3],
}

function decimalsFor(ctx: FigureContext): number {
  if (typeof ctx.yDecimals === 'number') return ctx.yDecimals
  const u = ctx.yUnit.toLowerCase()
  return u.includes('ph') || u.includes('fold') ? 1 : 0
}

function roundTo(value: number, decimals: number): number {
  const f = 10 ** decimals
  return Math.round(value * f) / f
}

/** Base step size. Whole-number units get at least 4 so rounding cannot tie
 *  two steps of an accelerating or saturating curve. */
function stepScale(ctx: FigureContext): number {
  if (typeof ctx.yStep === 'number') return ctx.yStep
  const u = ctx.yUnit.toLowerCase()
  const base =
    u.includes('%') ? 7 :
    u.includes('ph') ? 0.45 :
    u.includes('mv') ? 20 :
    u.includes('fold') ? 0.9 :
    2.5
  return decimalsFor(ctx) === 0 ? Math.max(base, 4) : base
}

function seededJitter(seed: number, index: number): number {
  const raw = Math.sin((seed + 1) * 12.9898 + (index + 1) * 78.233) * 43758.5453
  return (raw - Math.floor(raw)) - 0.5
}

function baselineFor(unit: string, intercept: number, slope: number, seed: number): number {
  const u = unit.toLowerCase()
  const j = seededJitter(seed, 0)
  if (u.includes('%')) return 15 + intercept * 6 + slope * 2 + j * 4
  if (u.includes('ph')) return 2.5 + intercept * 0.6 + slope * 0.2 + j * 0.2
  if (u.includes('mv')) return 40 + intercept * 25 + slope * 8 + j * 8
  if (u.includes('fold')) return 1 + intercept * 0.8 + slope * 0.5 + j * 0.4
  return 4 + intercept * 2 + slope + j
}

/** The physical ceiling a series must stay under, if the unit implies one. */
function ceilingFor(ctx: FigureContext): number | null {
  if (typeof ctx.yMax === 'number') return ctx.yMax
  return ctx.yUnit.includes('%') ? 95 : null
}

/**
 * Four y-values following the context's declared shape exactly.
 *
 * Steps are rounded ONE AT A TIME and then summed. Rounding the running total
 * instead can turn three equal steps into 2, 3, 3, which reads as a curve that
 * steepens — precisely the kind of false shape this module exists to prevent.
 */
export function buildSeries(ctx: FigureContext, slope: number, intercept: number, seed: number): number[] {
  const decimals = decimalsFor(ctx)
  const scale = stepScale(ctx)
  if (ctx.law) return buildLawSeries(ctx, slope, decimals, scale)
  let steps = SHAPE_STEPS[ctx.shape].map((m) => slope * m * scale)
  const [x0, x1] = ctx.xValues
  let base = ctx.throughOrigin
    ? steps[0] * (x0 / (x1 - x0))
    : typeof ctx.yStart === 'number'
      ? ctx.yStart
      : baselineFor(ctx.yUnit, intercept, slope, seed)

  if (ctx.positiveIntercept) {
    // Where the line meets x = 0: y0 − (x0/dx)·step. Keep it above zero.
    const floor = steps[0] * (x0 / (x1 - x0)) * 1.25
    if (base < floor) base = floor
  }

  // Shrink everything by one factor if the series would cross a physical
  // ceiling — including the NEXT point the prediction question asks about.
  // Checking only the four shown points let an accelerating percentage end at
  // 87%, where "the next step will be larger" would pass 100%: an impossible
  // key that a careful student answered correctly and was marked wrong for.
  // A common factor keeps the step ratios, so the shape survives.
  const ceiling = ceilingFor(ctx)
  const top = base + steps[0] + steps[1] + steps[2] + projectedNextStep(ctx.shape, steps)
  const target = ceiling === null ? null : ceiling - 3 * 10 ** -decimals
  if (target !== null && top > target) {
    const k = target / top
    base *= k
    steps = steps.map((s) => s * k)
  }

  const unit = 10 ** -decimals
  const rounded = steps.map((s) => Math.max(unit, roundTo(s, decimals)))
  const b = roundTo(base, decimals)
  return [
    b,
    roundTo(b + rounded[0], decimals),
    roundTo(b + rounded[0] + rounded[1], decimals),
    roundTo(b + rounded[0] + rounded[1] + rounded[2], decimals),
  ]
}

/**
 * The step the prediction question implies comes next: equal for a line,
 * following the ratio of the last two steps for a curve.
 */
export function projectedNextStep(shape: CurveShape, steps: number[]): number {
  if (shape === 'linear') return steps[2]
  return steps[2] * (steps[2] / steps[1])
}

/**
 * Values taken straight from a known law. `slope` still varies the data set, by
 * changing the constant (k for the rate law, K for the hyperbola) rather than
 * bending the curve into a shape the law does not have.
 */
function buildLawSeries(ctx: FigureContext, slope: number, decimals: number, scale: number): number[] {
  const dx = ctx.xValues[1] - ctx.xValues[0]
  const pick = <T,>(options: [T, T, T]): T => options[Math.min(slope, 3) - 1]
  if (ctx.law === 'square') {
    // Rate ∝ [A]²: doubling [A] quadruples the rate, through the origin.
    return ctx.xValues.map((x) => roundTo(slope * scale * (x / dx) ** 2, decimals))
  }
  if (ctx.law === 'titration') {
    // 25.0 mL of strong acid titrated with base of the SAME concentration, so
    // equivalence falls at 25 mL and every reading here comes before it.
    // pH = -log10(C·(V0 − Vb) / (V0 + Vb)). Internally consistent: the
    // equivalence point a student extrapolates from the data really is 25 mL.
    const C = pick([0.1, 0.05, 0.02])
    return ctx.xValues.map((vb) => roundTo(-Math.log10((C * (25 - vb)) / (25 + vb)), decimals))
  }
  if (ctx.law === 'haldane') {
    // Haldane map function: r = ½(1 − e^(−2d)), with map distance d
    // proportional to physical distance. Passes through the origin and
    // approaches, but never reaches, 50%. About 0.6-1.2 cM/Mb, a human-like
    // rate (an earlier ~7 cM/Mb was implausibly high for an unnamed organism).
    const morgansPerMb = pick([0.006, 0.009, 0.012])
    return ctx.xValues.map((mb) => roundTo(50 * (1 - Math.exp(-2 * morgansPerMb * mb)), decimals))
  }
  if (ctx.law === 'logistic') {
    // Constant selection s on a new allele from 3%: the log-odds rise by
    // s per generation exactly. Kept below 50%, where the curve still steepens.
    const s = pick([0.08, 0.1, 0.12])
    const logit0 = Math.log(0.03 / 0.97)
    return ctx.xValues.map((t) => roundTo(100 / (1 + Math.exp(-(logit0 + s * t))), decimals))
  }
  if (ctx.law === 'hardy-weinberg') {
    // Heterozygote frequency 2pq in a population at equilibrium.
    return ctx.xValues.map((p) => roundTo(100 * 2 * p * (1 - p), decimals))
  }
  const { K, yMax } = hyperbolaParams(ctx, slope, scale)
  return ctx.xValues.map((x) => roundTo((yMax * x) / (K + x), decimals))
}

/**
 * K sits among the tested x-values so the curve visibly bends, and a
 * percentage-bound quantity saturates at 100%, never above it. yMax is large
 * enough that rounding cannot distort a comparison trace.
 */
function hyperbolaParams(ctx: FigureContext, slope: number, scale: number) {
  // With a competitor the gap between curves peaks at x = K·√α. It only
  // NARROWS across the whole tested range when the lowest x is past that peak,
  // so K is set well below the first point. (At the default K the gap rose
  // then fell, and three data sets happened to read as a constant OFFSET —
  // which would have taught that a competing ligand shifts binding by a fixed
  // amount.)
  const K = ctx.comparison?.kind === 'competitive'
    ? ctx.xValues[0] * [0.3, 0.4, 0.5][Math.min(slope, 3) - 1]
    : ctx.xValues[1] * [0.5, 1, 1.5][Math.min(slope, 3) - 1]
  const yMax = ctx.yUnit.includes('%') ? 100 : slope * scale * 25
  return { K, yMax }
}

/** Read the shape back out of the data. Valid because x is evenly spaced. */
export function classifySteps(y: number[]): CurveShape {
  // Round the steps before comparing: in floating point 1.2 - 0.75 is
  // 0.44999999999999996, which made a perfectly linear 0.3, 0.75, 1.2, 1.65
  // read as "saturating" and would have keyed the wrong shape.
  const d = [y[1] - y[0], y[2] - y[1], y[3] - y[2]].map((v) => Math.round(v * 1e6) / 1e6)
  if (d[0] < d[1] && d[1] <= d[2]) return 'accelerating'
  if (d[0] > d[1] && d[1] >= d[2]) return 'saturating'
  return 'linear'
}

function buildComparison(ctx: FigureContext, y: number[], slope: number, intercept: number) {
  const spec = ctx.comparison
  if (!spec || (slope + intercept) % 2 !== 0) return null
  const decimals = decimalsFor(ctx)
  const step = stepScale(ctx)
  // A scaled trace gets one extra decimal: rounding 0.75 × 15 to a whole
  // number made a "constant ratio" wobble between 0.73 and 0.80.
  const values =
    spec.kind === 'scale'
      ? y.map((v) => roundTo(v * spec.amount, decimals + 1))
      : spec.kind === 'offset'
        ? y.map((v) => roundTo(v + spec.amount * step, decimals))
        : (() => {
            const { K, yMax } = hyperbolaParams(ctx, slope, step)
            return ctx.xValues.map((x) => roundTo((yMax * x) / (K * spec.amount + x), decimals))
          })()
  return { label: spec.label, yValues: values }
}

/**
 * How the second trace relates to the first, read from the numbers.
 *   proportional — a constant RATIO (noncompetitive inhibitor, a stiffer
 *                  spring). The absolute gap widens, but the effect is the
 *                  same fraction everywhere; calling that an effect that
 *                  "grows with x" would misteach noncompetitive inhibition.
 *   offset       — a constant DIFFERENCE (uncompetitive inhibitor on a
 *                  double-reciprocal plot: parallel lines).
 * Returns null when the data do not clearly show one of them, and the
 * comparison question is then skipped rather than asked about an ambiguous plot.
 */
export function classifyGap(primary: number[], comparison: number[]): 'proportional' | 'offset' | 'narrows' | null {
  const ratios = primary.map((v, i) => comparison[i] / v)
  const diffs = primary.map((v, i) => comparison[i] - v)
  const mean = (a: number[]) => a.reduce((x, y) => x + y, 0) / a.length
  const r = mean(ratios)
  const d = mean(diffs)
  const unit = 10 ** -decimalsFromValues([...primary, ...comparison])
  // 2%: scaled traces carry an extra decimal, so a true ratio holds to ~0.5%.
  // A looser 6% let a constant offset on a high baseline (ratio 1.20 -> 1.13)
  // pass as proportional too, and the item fell through as ambiguous.
  const proportional =
    Math.abs(r - 1) > 0.1 && ratios.every((x) => Math.abs(x - r) <= Math.abs(r) * 0.02)
  const offset =
    Math.abs(d) > unit && diffs.every((x) => Math.abs(x - d) <= Math.max(unit, Math.abs(d) * 0.08))
  const gaps = diffs.map(Math.abs)
  const narrows =
    gaps[0] > unit && gaps.every((g, i) => i === 0 || g < gaps[i - 1]) && gaps[3] <= gaps[0] * 0.7
  if (proportional && !offset && !narrows) return 'proportional'
  if (offset && !proportional && !narrows) return 'offset'
  if (narrows && !proportional && !offset) return 'narrows'
  return null
}

/**
 * The decimal places the data actually use. This once returned 1 for any
 * non-integer, so 2-decimal absorbances got a "smallest unit" of 0.1 —
 * larger than a 0.08 offset, which then read as no pattern at all — and
 * explanations rounded pH steps of 0.19 to 0.2.
 */
function decimalsFromValues(values: number[]): number {
  let most = 0
  for (const v of values) {
    const text = String(Math.round(v * 1000) / 1000)
    const dot = text.indexOf('.')
    if (dot >= 0) most = Math.max(most, text.length - dot - 1)
  }
  return Math.min(most, 3)
}

/**
 * Lowercase a label for use mid-sentence, but only when its first word is an
 * ordinary capitalized word. "NaBH4 added" must stay "NaBH4 added" (a formula),
 * and "ATP synthesis rate", "[S]" and "pH" are left alone.
 */
function lower(label: string): string {
  const first = label.split(' ')[0]
  return /^[A-Z][a-z]+$/.test(first) ? label[0].toLowerCase() + label.slice(1) : label
}

function capitalize(text: string): string {
  return text[0].toUpperCase() + text.slice(1)
}

function shuffle<T>(items: T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

function choiceSet(correct: string, distractors: string[]) {
  const options = shuffle([correct, ...distractors.slice(0, 3)])
  return { options, correctAnswer: options.indexOf(correct) }
}

export type FigureVisual = NonNullable<MCATDiagnosticQuestion['visual']>

/**
 * The figure plus the study it came from. The data table is kept only when a
 * comparison trace is present: the figure labels every point on the primary
 * trace but not the comparison one, so without a second trace the table would
 * only repeat the figure (which was itself one of the reported problems).
 */
export function buildVisual(ctx: FigureContext, y: number[], slope: number, intercept: number): FigureVisual {
  const comparison = buildComparison(ctx, y, slope, intercept)
  const comparisonSeries = comparison ? [comparison] : []
  const title = `Figure 1. ${ctx.yLabel} versus ${lower(ctx.xLabel)}`
  const visual: FigureVisual = {
    study: { title: capitalize(ctx.context), body: ctx.study },
    figure: {
      title,
      seriesLabel: ctx.yLabel,
      xLabel: ctx.xLabel,
      yLabel: ctx.yLabel,
      xValues: [...ctx.xValues],
      yValues: [...y],
      comparisonSeries,
      xUnit: ctx.xUnit,
      yUnit: ctx.yUnit,
    },
  }
  if (comparison) {
    visual.dataTable = {
      title: 'Table 1',
      pointLabel: capitalize(ctx.pointNoun),
      xLabel: ctx.xLabel,
      yLabel: ctx.yLabel,
      xValues: [...ctx.xValues],
      yValues: [...y],
      comparisonSeries,
      xUnit: ctx.xUnit,
      yUnit: ctx.yUnit,
    }
  }
  return visual
}

// ─── Shared option frames ─────────────────────────────────────────────────
// Every question's four options come from one frame, so the key and its
// distractors match in length and structure and only the content differs.

// Within each set the fixed wording is the SAME LENGTH to the character, and
// every option interpolates the same variables once, so their lengths cancel.
// A key therefore can never be picked out by being the longest or shortest.
// (Earlier wording made "progressively smaller" always the longest phrase, so
// "pick the longest" reliably picked the saturating answer.)
// The guard test re-checks this for every generated item.

const SHAPE_WORDS: Record<CurveShape | 'falling' | 'erratic', [string, string]> = {
  linear: ['raise', 'similar'],
  saturating: ['raise', 'smaller'],
  accelerating: ['raise', 'greater'],
  falling: ['lower', 'similar'],
  // "raise ... by erratic amounts": wrong because the steps are regular, and it
  // shares the rising verb, so it is not an odd one out to discard for free.
  erratic: ['raise', 'erratic'],
}

function shapeOption(kind: CurveShape | 'falling' | 'erratic', x: string, y: string): string {
  const [verb, size] = SHAPE_WORDS[kind]
  return `Equal steps in ${x} ${verb} ${y} by ${size} amounts each time.`
}

function predictOption(kind: CurveShape | 'falling', y: string, noun: string): string {
  const [verb, size] = SHAPE_WORDS[kind]
  return `Compared with the step from the third ${noun} to the fourth, the next step would ${verb} ${y} by a ${size} amount.`
}

const PREDICT_MEANING: Record<CurveShape, string> = {
  linear: 'raise it by about the same amount as the last step',
  saturating: 'raise it by less than the last step',
  accelerating: 'raise it by more than the last step',
}

function stepsText(y: number[]): string {
  const d = (a: number, b: number) => roundTo(b - a, decimalsFromValues(y))
  return `${d(y[0], y[1])}, ${d(y[1], y[2])} and ${d(y[2], y[3])}`
}

const SHAPE_MEANING: Record<CurveShape, string> = {
  linear: 'roughly equal steps mean a linear relationship',
  saturating: 'shrinking steps mean each equal increase in the variable buys less',
  accelerating: 'growing steps mean each equal increase in the variable buys more',
}

/** Builds the figure-analysis questions for one domain's contexts. */
export function buildFigureAnalysisQuestions(
  domainId: string,
  sourceSlug: string,
  contexts: FigureContext[],
): MCATDiagnosticQuestion[] {
  const questions: MCATDiagnosticQuestion[] = []

  contexts.forEach((ctx, ctxIdx) => {
    SLOPES.forEach((slope) => {
      INTERCEPTS.forEach((intercept) => {
        const seed = ctxIdx + slope + intercept
        const y = buildSeries(ctx, slope, intercept, seed)
        const visual = buildVisual(ctx, y, slope, intercept)
        const shape = classifySteps(y)
        const X = lower(ctx.xLabel)
        const Y = lower(ctx.yLabel)
        const noun = ctx.pointNoun
        const idBase = `${domainId}-fig-${ctxIdx}-${slope}-${intercept}`
        const common = {
          domain: domainId,
          sourceSlug,
          family: 'figure-analysis',
          promptType: 'figure' as const,
          visual,
        }

        // ── (a) Read the shape. Four options, one frame. ──
        const others = (['linear', 'saturating', 'accelerating', 'falling'] as const).filter((k) => k !== shape)
        const shapeWrong = (['linear', 'saturating', 'accelerating', 'erratic'] as const).filter((k) => k !== shape)
        const qa = choiceSet(shapeOption(shape, X, Y), shapeWrong.map((k) => shapeOption(k, X, Y)))
        questions.push({
          id: `${idBase}-a`,
          question: `Which statement best describes the relationship between ${X} and ${Y} shown in Figure 1?`,
          options: qa.options,
          correctAnswer: qa.correctAnswer,
          explanation: `Because the ${X} values are evenly spaced, the step in ${Y} from one ${noun} to the next shows how the relationship changes. Those steps are ${stepsText(y)}: ${SHAPE_MEANING[shape]}.`,
          difficulty: 'medium',
          ...common,
        })

        // ── (b) Predict the next point. ──
        const qb = choiceSet(predictOption(shape, Y, noun), others.map((k) => predictOption(k, Y, noun)))
        questions.push({
          id: `${idBase}-b`,
          question: `If a fifth ${noun} were added at the next evenly spaced value of ${X}, how would ${Y} most likely change?`,
          options: qb.options,
          correctAnswer: qb.correctAnswer,
          explanation: `The steps in ${Y} are ${stepsText(y)}. Extending the same trend one more ${noun} predicts that the next step would ${PREDICT_MEANING[shape]}.`,
          difficulty: 'medium',
          ...common,
        })

        // ── (c) Judge an overclaim. (Skipped where extrapolating is legitimate.) ──
        // Psych items overclaim CAUSATION, so the design decides the key. Other
        // items overclaim GENERALITY ("always, under any conditions"), which
        // is about range, whatever the design. (An observational genetics item
        // used to get a causation key under a generality question.)
        const isPsych = domainId === 'psych-soc'
        const observational = ctx.design === 'observational'
        // Not "will always raise": for a law that really is monotonic (adding
        // base always raises pH) that claim is TRUE. What four points cannot
        // show is that the same PATTERN holds far outside the tested range.
        const overclaim = isPsych
          ? `raising ${X} causes higher ${Y} in every population`
          : `the same pattern will hold at any ${X}, including values far outside the range tested`
        // Each set carries a wrong option built in the key's own frame, so the
        // key is not the lone hedge or the lone textbook phrase.
        const [cKey, cDistractors] = isPsych && observational
          ? [
              `No; an association in one sample cannot show causation or that it holds elsewhere.`,
              [
                `Yes; this steady increase across all four groups is enough to establish causation.`,
                `Yes; the consistent trend in one large sample will hold in every other population.`,
                `No; a link this strong would need a larger sample before it could prove causation.`,
              ],
            ]
          : isPsych
            ? [
                `No; random assignment supports causation here but not in every other population.`,
                [
                  `Yes; random assignment shows the effect holds in every other population as well.`,
                  `Yes; a steady increase across the four groups proves that it holds for everyone.`,
                  `No; random assignment cannot support causation without a separate control group.`,
                ],
              ]
            : [
                `No; the data show the pattern only within the range of ${X} that they tested.`,
                [
                  `Yes; four points that follow one pattern establish it at every level of ${X}.`,
                  `Yes; testing four ${noun}s is enough to show the pattern holds in any condition.`,
                  `No; the data show the pattern only at the ${noun}s tested, not across the range.`,
                ],
              ]
        if (!ctx.skipOverclaim) {
          const qc = choiceSet(cKey, cDistractors)
          questions.push({
            id: `${idBase}-c`,
            question: `A student concludes from Figure 1 that ${overclaim}. Is this conclusion justified?`,
            options: qc.options,
            correctAnswer: qc.correctAnswer,
            explanation: isPsych && observational
              ? `This was an observational study: nobody assigned ${X}, so a confounding variable could produce the association, and one sample does not show the pattern holds in other populations. A larger sample would make the association more precise but still would not rule out confounding.`
              : isPsych
                ? `Participants were randomly assigned, which does support a causal effect within this sample: the groups themselves serve as the comparison, so no separate control group is required. It does not show that the effect generalizes to every population; random assignment protects internal validity, not generalizability.`
                : `The data support the pattern across the tested range, including between the ${noun}s, where interpolating is reasonable. They say nothing about values far beyond it, where the relationship could level off, reverse, or change.`,
            difficulty: 'hard',
            ...common,
          })
        }

        // ── (d) Design the next study. ──
        const causal = isPsych && observational && ctx.manipulation
        // Causal set: the key and the survey distractor both name the
        // manipulation; the other two both name ${X}. The key is therefore
        // always tied in length with one distractor, never uniquely long or short.
        // Two wrong options mirror the key: random SAMPLING of people already
        // exposed (still observational) beside random ASSIGNMENT, and testing
        // BETWEEN the points beside testing beyond them.
        const dKey = causal
          ? `Randomly assign participants to ${ctx.manipulation} and then compare their ${Y}.`
          : `Test more ${noun}s beyond the highest ${X} and record ${Y} at each one.`
        const dDistractors = causal
          ? [
              `Randomly sample people who were exposed to ${ctx.manipulation} and compare ${Y}.`,
              `Keep only the two most extreme ${X} groups and then compare ${Y}.`,
              `Ask participants if ${X} affects ${Y} and use that as the result.`,
            ]
          : [
              `Test more ${noun}s between the tested ${X} and record ${Y} at each one.`,
              `Repeat the same ${noun}s at the same ${X} and average the ${Y} results.`,
              `Replot ${Y} against ${X} for every ${noun} on a log-scale axis instead.`,
            ]
        const qd = choiceSet(dKey, dDistractors)
        questions.push({
          id: `${idBase}-d`,
          // The limitation is named in the stem. Leaving it implicit made
          // "repeat the points and pool them" (a precision fix) as defensible
          // as extending the range.
          question: causal
            ? `Which study would most directly test whether the association in Figure 1 is causal?`
            : `The study covered only a narrow range of ${X}. Which follow-up would best show how ${Y} behaves outside that range?`,
          options: qd.options,
          correctAnswer: qd.correctAnswer,
          explanation: causal
            ? `Only random ASSIGNMENT breaks the link between ${X} and the other traits that travel with it. Randomly SAMPLING people who were already exposed makes the sample representative, but the exposure was still self-selected, so confounding remains. Extreme groups and self-report do not help either.`
            : `The question is whether the trend continues BEYOND the range, so only measurements past the highest ${X} can answer it. Testing between the existing ${noun}s fills in the tested range; repeating improves precision; replotting adds no new data.`,
          difficulty: 'hard',
          ...common,
        })

        // ── (cmp) Compare two traces, when the figure shows one clearly. ──
        const cmp = visual.figure?.comparisonSeries?.[0]
        const gap = cmp ? classifyGap(y, cmp.yValues) : null
        if (cmp && gap) {
          const L = lower(cmp.label)
          const gapOption = {
            proportional: `Across the ${X} tested, the ratio stays constant, so ${L} scales ${Y} by a fixed factor.`,
            offset: `Across the ${X} tested, the gap remains the same, so ${L} shifts ${Y} by a fixed amount.`,
            narrows: `Across the ${X} tested, the gap keeps narrowing, so ${L} matters less and less for ${Y}.`,
            crosses: `Across the ${X} tested, the two traces cross, so ${L} first raises and then lowers ${Y}.`,
          }
          const wrong = (['proportional', 'offset', 'narrows', 'crosses'] as const).filter((k) => k !== gap)
          // (narrows is now a real answer too: a competitive inhibitor or a
          // competing ligand matters less and less as substrate rises.)
          const qcmp = choiceSet(gapOption[gap], wrong.map((k) => gapOption[k]))
          const start = roundTo(Math.abs(y[0] - cmp.yValues[0]), decimalsFromValues(y))
          const end = roundTo(Math.abs(y[3] - cmp.yValues[3]), decimalsFromValues(y))
          questions.push({
            id: `${idBase}-cmp`,
            question: `Comparing the two traces in Figure 1, which conclusion about ${L} is best supported?`,
            options: qcmp.options,
            correctAnswer: qcmp.correctAnswer,
            explanation: `At the first ${noun} the traces differ by ${start} ${ctx.yUnit}; at the fourth they differ by ${end} ${ctx.yUnit}. ${gap === 'proportional' ? 'The gap grows exactly in step with the trace itself: the second trace is a constant fraction of the first at every point, so the effect is a fixed factor, not one that strengthens as the variable rises.' : gap === 'offset' ? 'The gap is the same at every point, so the second trace is the first shifted by a constant amount: the lines run parallel.' : 'The gap is widest at the lowest level and shrinks steadily, the signature of a competitor that is overcome as the other species rises.'}`,
            difficulty: 'hard',
            ...common,
          })
        }
      })
    })
  })

  return questions
}

// ─── Feedback-loop items ──────────────────────────────────────────────────

// Exactly equal length, and phrased as "each step is greater/smaller than the
// last" so it cannot be misread as Y itself falling.
const FEEDBACK_OPTION: Record<CurveShape | 'undecidable', string> = {
  accelerating: 'Each step in {Y} is greater than the last, as positive feedback predicts.',
  saturating: 'Each step in {Y} is smaller than the last, as negative feedback predicts.',
  linear: 'Each step in {Y} is about equal to the last, so neither model is favored.',
  undecidable: 'Any rise in {Y} fits both models, so the steps cannot tell the two apart.',
}

export function buildFeedbackQuestions(contexts: FeedbackContext[]): Record<string, MCATDiagnosticQuestion[]> {
  const byDomain: Record<string, MCATDiagnosticQuestion[]> = {}

  contexts.forEach((ctx, ctxIdx) => {
    const questions: MCATDiagnosticQuestion[] = []
    SLOPES.forEach((slope) => {
      ;[1, 3].forEach((intercept) => {
        const seed = ctxIdx + slope + intercept
        const y = buildSeries(ctx, slope, intercept, seed)
        const visual = buildVisual(ctx, y, slope, intercept)
        const observed = classifySteps(y)
        // Half the stems hypothesize the model the data support and half the
        // opposite, so "pick the option naming the stem's model" wins only half
        // the time. The context index is part of the rule: without it, every
        // item at one slope/intercept matched its stem (5 of 5 in one sample).
        const supported: 'positive' | 'negative' | null =
          ctx.shape === 'accelerating' ? 'positive' : ctx.shape === 'saturating' ? 'negative' : null
        const opposite = (m: 'positive' | 'negative') => (m === 'positive' ? 'negative' : 'positive')
        const claimed: 'positive' | 'negative' =
          supported === null
            ? (seed % 2 === 0 ? 'negative' : 'positive')
            : (ctxIdx + slope + intercept) % 2 === 0 ? supported : opposite(supported)
        const X = lower(ctx.xLabel)
        const Y = lower(ctx.yLabel)
        const fill = (s: string) => s.replace('{Y}', Y)
        const common = {
          domain: ctx.domain,
          sourceSlug: ctx.sourceSlug,
          family: 'feedback-loop-reasoning',
          promptType: 'figure' as const,
          difficulty: 'hard' as const,
          visual,
        }

        const wrong = (['accelerating', 'saturating', 'linear', 'undecidable'] as const).filter((k) => k !== observed)
        const model = choiceSet(fill(FEEDBACK_OPTION[observed]), wrong.map((k) => fill(FEEDBACK_OPTION[k])))
        const verdict =
          observed === 'linear'
            ? 'Roughly equal steps favor neither model.'
            : (observed === 'accelerating') === (claimed === 'positive')
              ? `That matches the hypothesized ${claimed} feedback.`
              : `That is the opposite of what ${claimed} feedback predicts, so the data argue against the hypothesis.`
        questions.push({
          id: `${ctx.domain}-feedback-${ctxIdx}-${slope}-${intercept}-model`,
          question: `In this ${ctx.system}, raising ${X} is hypothesized to trigger ${claimed} feedback on ${Y}. Comparing only the positive and negative feedback models, which reading of Figure 1's step sizes is best supported?`,
          options: model.options,
          correctAnswer: model.correctAnswer,
          explanation: `Feedback shows up in how the steps change, not in the overall direction: positive feedback makes each step larger and negative feedback makes each step smaller. The steps here are ${stepsText(y)}. ${verdict}`,
          ...common,
        })

        const N = ctx.pointNoun
        const design = choiceSet(
          `Block the suspected mediator at each ${N} and see whether the curve changes.`,
          [
            `Double the amount at each ${N} and see whether the curve still keeps rising.`,
            `Keep only the lowest and the highest ${N} so that the difference is clearer.`,
            `Measure the suspected mediator at each ${N} and check whether it rises, too.`,
          ],
        )
        questions.push({
          id: `${ctx.domain}-feedback-${ctxIdx}-${slope}-${intercept}-design`,
          question: `Which follow-up would most directly test whether the trend in Figure 1 comes from a feedback loop rather than a simple dose effect?`,
          options: design.options,
          correctAnswer: design.correctAnswer,
          explanation: `A feedback loop runs through a mediator, so blocking that mediator and seeing the curve change is the direct test. Watching the mediator rise alongside the response only shows correlation, doubling the dose only moves along the same curve, and trimming points cannot tell a loop from a direct effect.`,
          ...common,
        })
      })
    })
    byDomain[ctx.domain] = (byDomain[ctx.domain] ?? []).concat(questions)
  })

  return byDomain
}
