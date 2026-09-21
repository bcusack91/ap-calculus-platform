/**
 * Guards for the generated MCAT figure items (src/data/mcat-practice/figure-*).
 *
 * Every check here corresponds to a defect found in the previous generator
 * (owner report, 2026-09-21, diagnostic question 36). They run over EVERY
 * context and EVERY generated item, not a sample, because the bank is built
 * from templates: one bad rule reaches hundreds of questions at once.
 */
import { describe, it, expect } from 'vitest'
import {
  buildSeries,
  projectedNextStep,
  classifySteps,
  classifyGap,
  buildFigureAnalysisQuestions,
  buildFeedbackQuestions,
  type FigureContext,
} from '@/data/mcat-practice/figure-items'
import { FIGURE_DOMAINS, FEEDBACK_CONTEXTS } from '@/data/mcat-practice/figure-contexts'
import type { MCATDiagnosticQuestion } from '@/data/mcat-practice/diagnostic-generator'

const SLOPES = [1, 2, 3]
const INTERCEPTS = [1, 3, 5]

const allContexts: Array<{ domain: string; ctx: FigureContext; idx: number }> = [
  ...FIGURE_DOMAINS.flatMap(({ domain, contexts }) => contexts.map((ctx, idx) => ({ domain, ctx, idx }))),
  ...FEEDBACK_CONTEXTS.map((ctx, idx) => ({ domain: ctx.domain, ctx, idx })),
]

const figureItems: MCATDiagnosticQuestion[] = FIGURE_DOMAINS.flatMap(({ domain, sourceSlug, contexts }) =>
  buildFigureAnalysisQuestions(domain, sourceSlug, contexts),
)
const feedbackItems: MCATDiagnosticQuestion[] = Object.values(buildFeedbackQuestions(FEEDBACK_CONTEXTS)).flat()
const everyItem = [...figureItems, ...feedbackItems]

function ceilingOf(ctx: FigureContext): number | null {
  if (typeof ctx.yMax === 'number') return ctx.yMax
  return ctx.yUnit.includes('%') ? 95 : null
}

describe('every context is scientifically well-formed', () => {
  it('uses evenly spaced x, so a y-step really is a slope', () => {
    // The old generator paired doses of 1, 2, 4, 8 with step-based shape
    // logic, which read a curve that bends DOWN as "accelerating".
    for (const { ctx } of allContexts) {
      const [a, b, c, d] = ctx.xValues
      const step = b - a
      expect(step, ctx.context).toBeGreaterThan(0)
      expect(Math.abs(c - b - step), ctx.context).toBeLessThan(1e-9)
      expect(Math.abs(d - c - step), ctx.context).toBeLessThan(1e-9)
    }
  })

  it('always shows the curve it declares, for every slope and intercept', () => {
    // A noisy "linear" profile used to let Hooke's law read as accelerating.
    const failures: string[] = []
    for (const { ctx, idx } of allContexts) {
      for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
        const y = buildSeries(ctx, slope, intercept, idx + slope + intercept)
        const seen = classifySteps(y)
        if (seen !== ctx.shape) failures.push(`${ctx.context} s${slope} i${intercept}: ${ctx.shape} shown as ${seen} [${y}]`)
      }
    }
    expect(failures).toEqual([])
  })

  it('rises strictly, stays positive and never crosses a physical ceiling', () => {
    const failures: string[] = []
    for (const { ctx, idx } of allContexts) {
      const ceiling = ceilingOf(ctx)
      for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
        const y = buildSeries(ctx, slope, intercept, idx + slope + intercept)
        for (let i = 1; i < 4; i++) if (!(y[i] > y[i - 1])) failures.push(`${ctx.context}: not rising [${y}]`)
        if (y[0] <= 0) failures.push(`${ctx.context}: non-positive start [${y}]`)
        if (ceiling !== null && y[3] > ceiling) failures.push(`${ctx.context}: ${y[3]} over ceiling ${ceiling}`)
      }
    }
    expect(failures).toEqual([])
  })

  it('keeps proportional laws proportional (Hooke, Ohm, ideal gas at fixed V)', () => {
    for (const { ctx, idx } of allContexts.filter((c) => c.ctx.throughOrigin)) {
      for (const slope of SLOPES) {
        const y = buildSeries(ctx, slope, 1, idx + slope + 1)
        const ratios = y.map((v, i) => v / ctx.xValues[i])
        const spread = (Math.max(...ratios) - Math.min(...ratios)) / Math.max(...ratios)
        expect(spread, `${ctx.context} ratios ${ratios}`).toBeLessThan(0.02)
      }
    }
  })

  it('never lets recombination frequency reach 50%', () => {
    const mapping = allContexts.find((c) => c.ctx.context === 'recombination mapping')!
    for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
      const y = buildSeries(mapping.ctx, slope, intercept, mapping.idx + slope + intercept)
      expect(Math.max(...y)).toBeLessThan(50)
    }
  })

  it('keeps a strong acid below pH 7 before the equivalence point', () => {
    const titration = allContexts.find((c) => c.ctx.context === 'strong acid titration')!
    for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
      const y = buildSeries(titration.ctx, slope, intercept, titration.idx + slope + intercept)
      expect(Math.max(...y)).toBeLessThan(7)
    }
  })

  it('gives every context a study, and only observational ones a manipulation', () => {
    for (const { ctx } of allContexts) {
      expect(ctx.study.length, ctx.context).toBeGreaterThan(60)
      if (ctx.manipulation) expect(ctx.design, ctx.context).toBe('observational')
    }
  })

  it('describes an observational survey without experimental language', () => {
    // The reported item called a survey cohort's levels "Condition 1-4".
    for (const { ctx } of allContexts.filter((c) => c.ctx.design === 'observational')) {
      expect(ctx.pointNoun, ctx.context).not.toMatch(/condition|trial|dose/i)
    }
  })
})

describe('every generated item is well-formed', () => {
  it('builds a non-trivial bank', () => {
    expect(figureItems.length).toBeGreaterThan(900)
    expect(feedbackItems.length).toBe(FEEDBACK_CONTEXTS.length * 3 * 2 * 2)
  })

  it('has four distinct options and a key in range', () => {
    for (const q of everyItem) {
      expect(q.options, q.id).toHaveLength(4)
      expect(new Set(q.options).size, q.id).toBe(4)
      expect(q.correctAnswer, q.id).toBeGreaterThanOrEqual(0)
      expect(q.correctAnswer, q.id).toBeLessThan(4)
    }
  })

  it('carries its study, so no figure appears on its own', () => {
    for (const q of everyItem) {
      expect(q.visual?.study?.body, q.id).toBeTruthy()
      expect(q.visual?.figure, q.id).toBeTruthy()
    }
  })

  it('does not use the `passage` field, which the selector reserves for authored passages', () => {
    for (const q of everyItem) expect((q as { passage?: unknown }).passage, q.id).toBeUndefined()
  })

  it('shows a data table only when a second trace needs one', () => {
    // The figure labels every primary point, so a lone table only repeats it.
    for (const q of everyItem) {
      const hasComparison = (q.visual?.figure?.comparisonSeries?.length ?? 0) > 0
      expect(Boolean(q.visual?.dataTable), q.id).toBe(hasComparison)
    }
  })

  it('keeps the family and id conventions the selector depends on', () => {
    for (const q of figureItems) {
      expect(q.id).toContain('-fig-')
      expect(q.family).toBe('figure-analysis')
      expect(q.promptType).toBe('figure')
    }
    for (const q of feedbackItems) expect(q.family).toBe('feedback-loop-reasoning')
  })
})

describe('keys agree with the data a student can see', () => {
  it('the shape question keys the shape the figure actually shows', () => {
    for (const q of figureItems.filter((q) => q.id.endsWith('-a'))) {
      const y = q.visual!.figure!.yValues
      const key = q.options[q.correctAnswer]
      const shown = classifySteps(y)
      const phrase = { linear: / raise .* by similar amounts/, saturating: / raise .* by smaller amounts/, accelerating: / raise .* by greater amounts/ }[shown]
      expect(key, `${q.id} [${y}]`).toMatch(phrase)
    }
  })

  it('the prediction question extends the trend the figure shows', () => {
    for (const q of figureItems.filter((q) => q.id.endsWith('-b'))) {
      const shown = classifySteps(q.visual!.figure!.yValues)
      const phrase = { linear: / raise .* by a similar amount/, saturating: / raise .* by a smaller amount/, accelerating: / raise .* by a greater amount/ }[shown]
      expect(q.options[q.correctAnswer], q.id).toMatch(phrase)
    }
  })

  it('the comparison question matches how the gap between traces behaves', () => {
    const cmps = figureItems.filter((q) => q.id.endsWith('-cmp'))
    expect(cmps.length).toBeGreaterThan(0)
    for (const q of cmps) {
      const fig = q.visual!.figure!
      const gap = classifyGap(fig.yValues, fig.comparisonSeries![0].yValues)
      expect(gap, q.id).not.toBeNull()
      const expected = { proportional: 'by a fixed factor', offset: 'by a fixed amount', narrows: 'matters less and less' }[gap!]
      expect(q.options[q.correctAnswer], q.id).toContain(expected)
    }
  })

  it('never asks the direction of an effect the key does not state', () => {
    // The old key said a comparison trace "reduces" the response even when the
    // trace sat ABOVE the primary one (a trained group). Keys now describe the
    // relationship, which is true whichever trace is higher.
    for (const q of figureItems.filter((q) => q.id.endsWith('-cmp'))) {
      expect(q.options[q.correctAnswer], q.id).not.toMatch(/\breduces\b/)
    }
  })

  it('describes a proportional effect as a fixed factor, never as one that grows', () => {
    // A noncompetitive inhibitor removes the same FRACTION at every [S]. The
    // absolute gap widens, but "its effect grows with [S]" misteaches it.
    for (const q of figureItems.filter((q) => q.id.endsWith('-cmp'))) {
      expect(q.options[q.correctAnswer], q.id).not.toMatch(/grows with/)
      const fig = q.visual!.figure!
      if (classifyGap(fig.yValues, fig.comparisonSeries![0].yValues) === 'proportional') {
        const r = fig.comparisonSeries![0].yValues.map((v, i) => v / fig.yValues[i])
        expect(Math.max(...r) - Math.min(...r), `${q.id} ratios ${r}`).toBeLessThan(0.1)
      }
    }
  })

  it('the feedback question keys the step pattern the figure shows', () => {
    for (const q of feedbackItems.filter((q) => q.id.endsWith('-model'))) {
      const shown = classifySteps(q.visual!.figure!.yValues)
      const phrase = { linear: 'about equal to the last', saturating: 'smaller than the last', accelerating: 'greater than the last' }[shown]
      expect(q.options[q.correctAnswer], q.id).toContain(phrase)
    }
  })

  it('only asks the causal-design question of observational studies', () => {
    for (const q of figureItems.filter((q) => /is causal\?$/.test(q.question))) {
      expect(q.options[q.correctAnswer], q.id).toMatch(/^Randomly assign/)
    }
    const spacing = figureItems.filter((q) => q.visual?.study?.title === 'Review spacing experiment')
    expect(spacing.some((q) => /is causal\?$/.test(q.question))).toBe(false)
  })
})

describe('the owner-reported item (question 36)', () => {
  const survey = figureItems.filter((q) => q.visual?.study?.title === 'Perceived stress survey')

  it('now states that it is an observational survey', () => {
    expect(survey.length).toBeGreaterThan(0)
    expect(survey[0].visual!.study!.body).toMatch(/No participant was assigned/)
  })

  it('no longer asks students to randomly assign a PERCEIVED score', () => {
    // You cannot assign someone's perceived stress; you assign a stressor.
    for (const q of survey) {
      for (const opt of q.options) expect(opt, q.id).not.toMatch(/assign participants to perceived stress/i)
    }
  })

  it('no longer shows the same four numbers as both a table and a figure', () => {
    const plain = survey.filter((q) => !(q.visual?.figure?.comparisonSeries?.length))
    expect(plain.length).toBeGreaterThan(0)
    for (const q of plain) expect(q.visual?.dataTable, q.id).toBeUndefined()
  })
})

describe('answer shape carries no information', () => {
  // The key was the strictly longest option in 91% of the old items.
  const rate = (items: MCATDiagnosticQuestion[], pick: 'longest' | 'shortest') => {
    let hit = 0
    for (const q of items) {
      const lens = q.options.map((o) => o.length)
      const k = lens[q.correctAnswer]
      const others = lens.filter((_, i) => i !== q.correctAnswer)
      if (pick === 'longest' ? others.every((l) => l < k) : others.every((l) => l > k)) hit++
    }
    return hit / items.length
  }

  it('does not make the key the longest option', () => {
    expect(rate(everyItem, 'longest')).toBeLessThan(0.35)
  })

  it('does not overcorrect into making the key the shortest option', () => {
    expect(rate(everyItem, 'shortest')).toBeLessThan(0.35)
  })

  it('does not let the key be the only option containing a digit or math', () => {
    let tells = 0
    for (const q of everyItem) {
      const has = q.options.map((o) => /[\d$]/.test(o))
      if (has[q.correctAnswer] && has.filter(Boolean).length === 1) tells++
    }
    expect(tells).toBe(0)
  })
})

describe('laws with a known form are generated from the law itself', () => {
  // Found by an independent blind solve: generic curves did not match the
  // laws they claimed to show, which a strong student could check.
  const find = (name: string) => allContexts.find((c) => c.ctx.context === name)!

  it('a second-order rate law quadruples when [A] doubles', () => {
    const { ctx, idx } = find('initial-rate experiment')
    for (const slope of SLOPES) {
      const y = buildSeries(ctx, slope, 1, idx + slope + 1)
      const ratios = y.map((v, i) => v / ctx.xValues[i] ** 2)
      expect((Math.max(...ratios) - Math.min(...ratios)) / Math.max(...ratios)).toBeLessThan(0.05)
    }
  })

  it('Michaelis-Menten and single-site binding are true hyperbolas', () => {
    // A hyperbola makes x/y linear in x (the Hanes-Woolf form).
    for (const name of ['enzyme substrate series', 'receptor binding assay']) {
      const { ctx, idx } = find(name)
      for (const slope of SLOPES) {
        const y = buildSeries(ctx, slope, 1, idx + slope + 1)
        const hw = y.map((v, i) => ctx.xValues[i] / v)
        const steps = [hw[1] - hw[0], hw[2] - hw[1], hw[3] - hw[2]]
        const spread = (Math.max(...steps) - Math.min(...steps)) / Math.max(...steps)
        expect(spread, `${name} slope ${slope}: ${y}`).toBeLessThan(0.25)
      }
    }
  })

  it('never shows single-site binding above 100% occupancy', () => {
    const { ctx, idx } = find('receptor binding assay')
    for (const slope of SLOPES) expect(Math.max(...buildSeries(ctx, slope, 1, idx + slope + 1))).toBeLessThanOrEqual(100)
  })

  it('an allele introduced at low frequency starts low and stays pre-inflection', () => {
    const { ctx, idx } = find('directional selection experiment')
    for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
      const y = buildSeries(ctx, slope, intercept, idx + slope + intercept)
      expect(y[0]).toBeLessThan(10)
      expect(y[3]).toBeLessThan(50)
    }
  })

  it('keeps a molecular clock in its linear, low-divergence range', () => {
    const { ctx, idx } = find('molecular clock comparison')
    for (const slope of SLOPES) {
      const y = buildSeries(ctx, slope, 1, idx + slope + 1)
      expect(Math.max(...y)).toBeLessThanOrEqual(40)
    }
  })

  it('drops contexts whose slope is fixed by a physical constant', () => {
    // Nernst fixes a concentration cell at 29.6 mV per decade through zero.
    expect(allContexts.some((c) => /concentration cell/.test(c.ctx.context))).toBe(false)
  })

  it('does not claim positive feedback makes an amplifier accelerate', () => {
    expect(FEEDBACK_CONTEXTS.some((c) => /amplifier/.test(c.system))).toBe(false)
  })
})

describe('each question answers the question it asks', () => {
  it('never answers a generality overclaim with a causation key', () => {
    // An observational genetics item used to get "association cannot show
    // causation" under "will always ... under any conditions".
    for (const q of figureItems.filter((q) => q.id.endsWith('-c') && q.domain !== 'psych-soc')) {
      expect(q.options[q.correctAnswer], q.id).toMatch(/only within the range/)
      // ...and a distractor in the same hedged frame, drawing the line wrongly.
      expect(q.options.some((o) => /not across the range/.test(o)), q.id).toBe(true)
    }
  })

  it('names the limitation in the follow-up stem, so replication is not a rival key', () => {
    for (const q of figureItems.filter((q) => q.id.endsWith('-d') && !/is causal\?$/.test(q.question))) {
      expect(q.question, q.id).toMatch(/narrow range of/)
    }
  })

  it('offers a plausible wrong "No" beside the key, not an absurd one', () => {
    // A lone absurd "No" let a guesser reach the key by elimination.
    for (const q of figureItems.filter((q) => q.id.endsWith('-c'))) {
      const nos = q.options.filter((o) => o.startsWith('No;'))
      expect(nos.length, q.id).toBe(2)
      for (const o of nos) expect(o, q.id).not.toMatch(/only be established if/)
    }
  })

  it('puts random SAMPLING beside random ASSIGNMENT, the classic confusion', () => {
    for (const q of figureItems.filter((q) => /is causal\?$/.test(q.question))) {
      expect(q.options[q.correctAnswer], q.id).toMatch(/^Randomly assign/)
      expect(q.options.some((o) => o.startsWith('Randomly sample')), q.id).toBe(true)
    }
  })

  it('offers "test between the points" beside "test beyond them"', () => {
    for (const q of figureItems.filter((q) => q.id.endsWith('-d') && !/is causal\?$/.test(q.question))) {
      expect(q.options[q.correctAnswer], q.id).toMatch(/beyond the highest/)
      expect(q.options.some((o) => /between the tested/.test(o)), q.id).toBe(true)
    }
  })
})

describe('the prediction and the physics agree at every slope', () => {
  // A third blind solve, sampling the STEEPEST data sets, found three keys
  // that were wrong: an accelerating percentage ending at 87% whose keyed
  // "next step will be larger" would pass 100%. Earlier checks had sampled
  // gentler data and missed it, so these run over every data set.
  it('never predicts a next point beyond a physical ceiling', () => {
    const failures: string[] = []
    for (const { ctx, idx } of allContexts) {
      const ceiling = ceilingOf(ctx)
      if (ceiling === null) continue
      for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
        const y = buildSeries(ctx, slope, intercept, idx + slope + intercept)
        const steps = [y[1] - y[0], y[2] - y[1], y[3] - y[2]]
        const next = y[3] + projectedNextStep(ctx.law ? classifySteps(y) : ctx.shape, steps)
        if (next > ceiling + 1e-9) failures.push(`${ctx.context} s${slope} i${intercept}: next ${next.toFixed(2)} > ${ceiling} [${y}]`)
      }
    }
    expect(failures).toEqual([])
  })

  it('keeps a positive intercept where zero is impossible (1/Vmax, resting output, a moving cart)', () => {
    const failures: string[] = []
    for (const { ctx, idx } of allContexts.filter((c) => c.ctx.positiveIntercept)) {
      for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
        const y = buildSeries(ctx, slope, intercept, idx + slope + intercept)
        const dx = ctx.xValues[1] - ctx.xValues[0]
        const atZero = y[0] - (ctx.xValues[0] / dx) * (y[1] - y[0])
        if (!(atZero > 0)) failures.push(`${ctx.context} s${slope} i${intercept}: y(0) = ${atZero} [${y}]`)
      }
    }
    expect(failures).toEqual([])
  })

  it('respects NaBH4 stoichiometry: four hydrides, so at most 400% of the equivalents', () => {
    const { ctx, idx } = allContexts.find((c) => c.ctx.context === 'ketone reduction series')!
    for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
      const y = buildSeries(ctx, slope, intercept, idx + slope + intercept)
      y.forEach((v, i) => expect(v, `${ctx.xValues[i]} equiv -> ${v}%`).toBeLessThanOrEqual(400 * ctx.xValues[i] + 1e-9))
    }
  })

  it('keeps a real image beyond 2f smaller than its object', () => {
    const { ctx, idx } = allContexts.find((c) => c.ctx.context === 'converging-lens imaging')!
    for (const slope of SLOPES) {
      const y = buildSeries(ctx, slope, 1, idx + slope + 1)
      y.forEach((v, i) => expect(v / ctx.xValues[i]).toBeLessThan(1))
    }
  })

  it('keeps cardiac output within human limits', () => {
    const { ctx, idx } = allContexts.find((c) => c.ctx.context === 'graded treadmill test')!
    for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
      expect(Math.max(...buildSeries(ctx, slope, intercept, idx + slope + intercept))).toBeLessThan(25)
    }
  })

  it('keeps even the double-path-length absorbance trace in the linear range', () => {
    const items = figureItems.filter((q) => q.visual?.study?.title === 'Absorbance calibration')
    for (const q of items) {
      const all = [...q.visual!.figure!.yValues, ...(q.visual!.figure!.comparisonSeries?.[0]?.yValues ?? [])]
      expect(Math.max(...all), q.id).toBeLessThanOrEqual(1.0)
    }
  })

  it('does not let the hypothesis named in a feedback stem predict the key', () => {
    let matches = 0, total = 0
    for (const q of feedbackItems.filter((q) => q.id.endsWith('-model'))) {
      const claimed = /trigger (positive|negative) feedback/.exec(q.question)?.[1]
      const key = q.options[q.correctAnswer]
      if (!/as (positive|negative) feedback predicts/.test(key)) continue
      total++
      if (key.includes(`as ${claimed} feedback predicts`)) matches++
    }
    expect(total).toBeGreaterThan(0)
    expect(matches / total).toBeGreaterThan(0.3)
    expect(matches / total).toBeLessThan(0.7)
  })
})

describe('fourth-review refinements', () => {
  const find = (name: string) => allContexts.find((c) => c.ctx.context === name)!

  it('keeps switch-like systems on the lower, steepening half of the sigmoid', () => {
    // Past ~50% a sigmoid decelerates, so "the next step is larger" stops
    // being the only defensible prediction.
    for (const name of ['cyclin B addition', 'perceived stress survey']) {
      const { ctx, idx } = find(name)
      for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
        const y = buildSeries(ctx, slope, intercept, idx + slope + intercept)
        const steps = [y[1] - y[0], y[2] - y[1], y[3] - y[2]]
        expect(y[3] + projectedNextStep('accelerating', steps), `${name} [${y}]`).toBeLessThanOrEqual(50)
      }
    }
  })

  it('generates directional selection from a constant-selection model', () => {
    // Constant s raises the log-odds by the same amount each interval.
    const { ctx, idx } = find('directional selection experiment')
    for (const slope of SLOPES) {
      const y = buildSeries(ctx, slope, 1, idx + slope + 1).map((v) => v / 100)
      const logit = y.map((p) => Math.log(p / (1 - p)))
      const inc = [logit[1] - logit[0], logit[2] - logit[1], logit[3] - logit[2]]
      expect((Math.max(...inc) - Math.min(...inc)) / Math.max(...inc), `${y}`).toBeLessThan(0.35)
    }
  })

  it('passes the product-inhibited pathway through the origin', () => {
    const ctx = FEEDBACK_CONTEXTS.find((c) => c.context === 'product-inhibited pathway assay')!
    for (const slope of SLOPES) {
      const y = buildSeries(ctx, slope, 1, slope + 1)
      // A hyperbola through the origin gives x/y linear in x (Hanes-Woolf).
      const hw = y.map((v, i) => ctx.xValues[i] / v)
      const steps = [hw[1] - hw[0], hw[2] - hw[1], hw[3] - hw[2]]
      expect((Math.max(...steps) - Math.min(...steps)) / Math.max(...steps), `${y}`).toBeLessThan(0.25)
    }
  })

  it('puts resting cardiac output near 5 L/min, not below it', () => {
    const { ctx, idx } = find('graded treadmill test')
    for (const slope of SLOPES) for (const intercept of INTERCEPTS) {
      const y = buildSeries(ctx, slope, intercept, idx + slope + intercept)
      const perMet = (y[1] - y[0]) / (ctx.xValues[1] - ctx.xValues[0])
      const atRest = y[0] - perMet * (ctx.xValues[0] - 1)
      expect(atRest, `[${y}]`).toBeGreaterThanOrEqual(4.5)
      expect(perMet, `[${y}]`).toBeLessThanOrEqual(1.6)
    }
  })

  it('decorrelates the feedback hypothesis within a single slope/intercept corner', () => {
    // The rule once depended only on slope + intercept, so every item at one
    // corner named the supported model in its stem.
    const corner = feedbackItems.filter((q) => /-feedback-\d+-3-3-model$/.test(q.id))
    const verdicts = corner
      .filter((q) => /as (positive|negative) feedback predicts/.test(q.options[q.correctAnswer]))
      .map((q) => q.options[q.correctAnswer].includes(`as ${/trigger (positive|negative)/.exec(q.question)![1]} feedback`))
    expect(new Set(verdicts).size).toBe(2)
  })
})

describe('comparison traces', () => {
  const cmpItems = figureItems.filter((q) => q.id.endsWith('-cmp'))
  const kinds = (title: string) =>
    new Set(
      figureItems
        .filter((q) => q.id.endsWith('-a') && q.visual?.study?.title === title && q.visual?.figure?.comparisonSeries?.length)
        .map((q) => classifyGap(q.visual!.figure!.yValues, q.visual!.figure!.comparisonSeries![0].yValues)),
    )

  it('keys all three kinds of relationship, so no single answer always wins', () => {
    // Every comparison item once keyed "ratio stays constant", which a
    // repeat test-taker learns.
    const keyed = new Set(cmpItems.map((q) => classifyGap(q.visual!.figure!.yValues, q.visual!.figure!.comparisonSeries![0].yValues)))
    expect(keyed).toEqual(new Set(['proportional', 'offset', 'narrows']))
  })

  it('reads every comparison as the relationship its science implies', () => {
    // A competing ligand must NARROW, never read as a fixed offset.
    expect(kinds('Receptor binding assay')).toEqual(new Set(['narrows']))
    expect(kinds('Enzyme substrate series')).toEqual(new Set(['proportional']))
    expect(kinds('Double-reciprocal plot')).toEqual(new Set(['offset']))
    expect(kinds('Absorbance calibration')).toEqual(new Set(['offset']))
    expect(kinds('Constant-force cart')).toEqual(new Set(['offset']))
  })

  it('never shows a comparison trace without asking about it', () => {
    // An ambiguous trace (classifyGap null) would be a figure element that no
    // question uses; every comparison shown must be classifiable.
    for (const q of figureItems.filter((q) => q.id.endsWith('-a') && q.visual?.figure?.comparisonSeries?.length)) {
      const f = q.visual!.figure!
      expect(classifyGap(f.yValues, f.comparisonSeries![0].yValues), q.id).not.toBeNull()
    }
  })

  it('does not ask the extrapolation question of a double-reciprocal plot', () => {
    // Straight by construction for a Michaelis-Menten enzyme, so extrapolating is legitimate.
    const lb = figureItems.filter((q) => q.visual?.study?.title === 'Double-reciprocal plot')
    expect(lb.some((q) => q.id.endsWith('-c'))).toBe(false)
  })
})
