/**
 * MCAT Diagnostic Test Generator
 *
 * A 45-question assessment that samples across all MCAT sections/domains
 * to identify student strengths and weaknesses.
 */

import { generateExitQuiz } from '../exit-quizzes'
import { matchSubtopic } from './subtopic-map'
import { CARS_PASSAGES, SECTION_PASSAGES } from '../mcat/passages'
import type { MCATFigureSpec, MCATPassage } from '../mcat/types'
import { sectionScaledScore } from '@/lib/mcat-scoring'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface MCATDiagnosticQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  sourceSlug: string
  difficulty?: 'easy' | 'medium' | 'hard'
  family?: string
  promptType?: 'standalone' | 'figure' | 'passage'
  /**
   * Authored-bank skill tag (e.g. 'main-idea', 'Enzyme kinetics'). Extra
   * signal for miss-attribution — appended to the subtopic matcher's fallback
   * text, never rendered.
   */
  skill?: string
  /** Authored-bank discipline (e.g. 'learning-and-memory'); same purpose as `skill`. */
  discipline?: string
  visual?: {
    dataTable?: {
      title: string
      xLabel: string
      yLabel: string
      xValues: number[]
      yValues: number[]
      comparisonSeries?: Array<{
        label: string
        yValues: number[]
      }>
      xUnit: string
      yUnit: string
    }
    figure?: {
      title: string
      seriesLabel: string
      xLabel?: string
      yLabel?: string
      xValues: number[]
      yValues: number[]
      comparisonSeries?: Array<{
        label: string
        yValues: number[]
      }>
      xUnit: string
      yUnit: string
    }
  }
  passage?: {
    id: string
    title: string
    body: string
    dataTable?: {
      title: string
      xLabel: string
      yLabel: string
      xValues: number[]
      yValues: number[]
      comparisonSeries?: Array<{
        label: string
        yValues: number[]
      }>
      xUnit: string
      yUnit: string
    }
    figure?: {
      title: string
      seriesLabel: string
      xLabel?: string
      yLabel?: string
      xValues: number[]
      yValues: number[]
      comparisonSeries?: Array<{
        label: string
        yValues: number[]
      }>
      xUnit: string
      yUnit: string
    }
  }
}

export interface MCATDiagnosticDomain {
  id: string
  name: string
  section: 'chem-phys' | 'cars' | 'bio-biochem' | 'psych-soc'
  slugs: string[]
  questionCount: number
  minPassageQuestions?: number
  difficultyMix?: {
    easy: number
    medium: number
    hard: number
  }
}

/** Provenance for one authored passage a generated test drew from. */
export interface MCATDiagnosticPassageSource {
  /** The authored bank's stable passage id (e.g. 'cars-hum-01'). */
  passageId: string
  title: string
  domainId: string
  /** True when the passage (or any served question) is still an unreviewed draft. */
  needsReview: boolean
}

export interface MCATDiagnosticTestData {
  questions: MCATDiagnosticQuestion[]
  domains: MCATDiagnosticDomain[]
  totalQuestions: number
  timeLimitMinutes: number
  /**
   * Which authored passages this test drew from (additive — absent on legacy
   * frozen tests; consumers must not rely on it).
   */
  passageSources?: MCATDiagnosticPassageSource[]
}

type MCATDiagnosticGenerationOptions = {
  excludeQuestionIds?: Set<string>
}

export interface MCATDomainResult {
  domainId: string
  domainName: string
  section: 'chem-phys' | 'cars' | 'bio-biochem' | 'psych-soc'
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface MCATDiagnosticResults {
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedScore: number // 472-528
  chemPhysScore: number  // 118-132
  carsScore: number      // 118-132
  bioBiochemScore: number // 118-132
  psychSocScore: number  // 118-132
  domains: MCATDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: { slug: string; name: string; priority: 'high' | 'medium' | 'low' }[]
}

/* ------------------------------------------------------------------ */
/*  Diagnostic Domains                                                 */
/* ------------------------------------------------------------------ */

// Section totals mirror the real exam's equal weighting (25% per section):
// Chem/Phys 11, CARS 11, Bio/Biochem 11, Psych/Soc 12 of 45. The old layout
// gave Chem/Phys 40% and Psych/Soc 13%, which made the CARS and Psych/Soc
// scaled-score estimates swing ~2.3 points per single item.
const DIAGNOSTIC_DOMAINS: MCATDiagnosticDomain[] = [
  // Chem/Phys
  {
    id: 'gen-chem',
    name: 'General Chemistry',
    section: 'chem-phys',
    slugs: ['mcat-general-chemistry'],
    questionCount: 3,
    difficultyMix: { easy: 1, medium: 1, hard: 1 },
  },
  {
    id: 'org-chem',
    name: 'Organic Chemistry',
    section: 'chem-phys',
    slugs: ['mcat-organic-chemistry'],
    questionCount: 3,
    difficultyMix: { easy: 0, medium: 2, hard: 1 },
  },
  {
    id: 'physics',
    name: 'Physics',
    section: 'chem-phys',
    slugs: ['mcat-physics-mechanics', 'mcat-physics-electricity'],
    questionCount: 3,
    minPassageQuestions: 2,
    difficultyMix: { easy: 1, medium: 1, hard: 1 },
  },
  {
    id: 'biochem-cp',
    name: 'Biochemistry (Chem/Phys)',
    section: 'chem-phys',
    slugs: ['mcat-biochemistry'],
    questionCount: 2,
    difficultyMix: { easy: 0, medium: 1, hard: 1 },
  },
  // CARS
  {
    id: 'cars',
    name: 'Critical Analysis & Reasoning',
    section: 'cars',
    slugs: ['mcat-cars'],
    questionCount: 11,
    minPassageQuestions: 4,
    difficultyMix: { easy: 2, medium: 5, hard: 4 },
  },
  // Bio/Biochem
  {
    id: 'cell-mol-bio',
    name: 'Cell & Molecular Biology',
    section: 'bio-biochem',
    slugs: ['mcat-biology'],
    questionCount: 4,
    minPassageQuestions: 2,
    difficultyMix: { easy: 1, medium: 2, hard: 1 },
  },
  {
    id: 'organ-systems',
    name: 'Organ Systems & Physiology',
    section: 'bio-biochem',
    slugs: ['mcat-organ-systems'],
    questionCount: 4,
    difficultyMix: { easy: 1, medium: 2, hard: 1 },
  },
  {
    id: 'genetics',
    name: 'Genetics & Evolution',
    section: 'bio-biochem',
    slugs: ['mcat-genetics-evolution'],
    questionCount: 3,
    difficultyMix: { easy: 0, medium: 2, hard: 1 },
  },
  // Psych/Soc
  {
    id: 'psych-soc',
    name: 'Psychology & Sociology',
    section: 'psych-soc',
    slugs: ['mcat-psychology-sociology'],
    questionCount: 12,
    minPassageQuestions: 4,
    difficultyMix: { easy: 2, medium: 5, hard: 5 },
  },
]

const FIGURE_X_VALUES = [1, 2, 3, 4]
const FIGURE_SLOPES = [1, 2, 3]
const FIGURE_INTERCEPTS = [1, 3, 5]

type FigureContext = {
  context: string
  xLabel: string
  yLabel: string
  xUnit: string
  yUnit: string
}

type SeriesProfile = 'linear' | 'saturating' | 'accelerating' | 'threshold' | 'near-plateau'
type FigureArchetype = 'generic' | 'michaelis-menten-like' | 'lineweaver-like' | 'dose-response-like' | 'physiology-loading-like' | 'time-course-like'

type FigurePresentation = {
  archetype: FigureArchetype
  xValues: number[]
  xLabel: string
  xUnit: string
  figureTitle: string
  seriesLabel: string
}

type CarsContext = {
  authorType: string
  claim: string
  evidence: string
  hiddenAssumption: string
}

function shuffle<T>(items: T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

function pickRandom<T>(items: T[], count: number): T[] {
  return shuffle(items).slice(0, Math.min(count, items.length))
}

function hashString(input: string): string {
  let hash = 0
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash).toString(36)
}

function buildChoiceSet(correct: string, distractors: string[]) {
  const options = shuffle([correct, ...distractors.slice(0, 3)])
  return {
    options,
    correctAnswer: options.indexOf(correct),
  }
}

function inferQuestionDifficulty(question: MCATDiagnosticQuestion): 'easy' | 'medium' | 'hard' {
  if (question.difficulty) return question.difficulty
  if (question.passage) return 'hard'
  if (question.id.includes('-cars-')) return 'hard'
  if (question.id.includes('-fig-')) return 'medium'
  if (question.question.length > 180) return 'hard'
  return 'medium'
}

function inferQuestionFamily(question: MCATDiagnosticQuestion): string {
  if (question.family) return question.family
  if (question.passage) return 'passage-linked-reasoning'
  if (question.id.includes('-fig-')) return 'figure-analysis'
  if (question.id.includes('-cars-')) return 'cars-reasoning'
  return 'core-domain-bank'
}

function inferPromptType(question: MCATDiagnosticQuestion): 'standalone' | 'figure' | 'passage' {
  if (question.promptType) return question.promptType
  if (question.passage) return 'passage'
  if (question.id.includes('-fig-')) return 'figure'
  return 'standalone'
}

function selectQuestionsByDifficulty(
  allQuestions: MCATDiagnosticQuestion[],
  questionCount: number,
  mix?: { easy: number; medium: number; hard: number },
): MCATDiagnosticQuestion[] {
  if (!mix) return pickRandom(allQuestions, questionCount)

  const easy = allQuestions.filter((q) => inferQuestionDifficulty(q) === 'easy')
  const medium = allQuestions.filter((q) => inferQuestionDifficulty(q) === 'medium')
  const hard = allQuestions.filter((q) => inferQuestionDifficulty(q) === 'hard')

  const selected = [
    ...pickRandom(easy, mix.easy),
    ...pickRandom(medium, mix.medium),
    ...pickRandom(hard, mix.hard),
  ]

  if (selected.length < questionCount) {
    const selectedIds = new Set(selected.map((q) => q.id))
    const remaining = allQuestions.filter((q) => !selectedIds.has(q.id))
    selected.push(...pickRandom(remaining, questionCount - selected.length))
  }

  return pickRandom(dedupeQuestions(selected), questionCount)
}

function selectPassageQuestions(allQuestions: MCATDiagnosticQuestion[], questionCount: number): MCATDiagnosticQuestion[] {
  if (questionCount <= 0) return []

  const groups = new Map<string, MCATDiagnosticQuestion[]>()
  for (const question of allQuestions) {
    const passageId = question.passage?.id
    if (!passageId) continue
    if (!groups.has(passageId)) groups.set(passageId, [])
    groups.get(passageId)?.push(question)
  }

  const selected: MCATDiagnosticQuestion[] = []
  for (const group of shuffle(Array.from(groups.values()))) {
    if (selected.length >= questionCount) break
    if (selected.length + group.length > questionCount) continue
    selected.push(...shuffle(group))
  }

  return selected
}

function resolveFigurePresentation(context: FigureContext): FigurePresentation {
  const signature = `${context.context} ${context.xLabel} ${context.yLabel}`.toLowerCase()

  if (/(enzyme|substrate|michaelis|velocity|vmax|km)/.test(signature)) {
    return {
      archetype: 'michaelis-menten-like',
      xValues: [0.2, 0.5, 1.0, 2.0],
      xLabel: context.xLabel,
      xUnit: context.xUnit,
      figureTitle: `Figure 1 (Michaelis-Menten-like ${context.context})`,
      seriesLabel: context.yLabel,
    }
  }

  if (/(lineweaver|reciprocal|1\/\[s\]|1\/v)/.test(signature)) {
    return {
      archetype: 'lineweaver-like',
      xValues: [0.25, 0.5, 1.0, 2.0],
      xLabel: context.xLabel,
      xUnit: context.xUnit,
      figureTitle: `Figure 1 (Reciprocal-plot-like ${context.context})`,
      seriesLabel: context.yLabel,
    }
  }

  if (/(dose|quartile|cohort|response|ligand|hormone|stress|spacing|gradient|index)/.test(signature)) {
    return {
      archetype: 'dose-response-like',
      xValues: [1, 2, 4, 8],
      xLabel: context.xLabel,
      xUnit: context.xUnit,
      figureTitle: `Figure 1 (Dose-response-style ${context.context})`,
      seriesLabel: context.yLabel,
    }
  }

  if (/(cardiac|filtration|ventilation|perfusion|output|uptake|load)/.test(signature)) {
    return {
      archetype: 'physiology-loading-like',
      xValues: [0, 1, 2, 3],
      xLabel: context.xLabel,
      xUnit: context.xUnit,
      figureTitle: `Figure 1 (Physiology-loading ${context.context})`,
      seriesLabel: context.yLabel,
    }
  }

  if (/(time|induction|kinetics|course)/.test(signature)) {
    return {
      archetype: 'time-course-like',
      xValues: [0, 1, 2, 4],
      xLabel: context.xLabel,
      xUnit: context.xUnit,
      figureTitle: `Figure 1 (Time-course ${context.context})`,
      seriesLabel: context.yLabel,
    }
  }

  return {
    archetype: 'generic',
    xValues: [...FIGURE_X_VALUES],
    xLabel: context.xLabel,
    xUnit: context.xUnit,
    figureTitle: `Figure 1 (${context.context})`,
    seriesLabel: context.yLabel,
  }
}

function buildPassageVisual(context: FigureContext, yValues: number[], _seed: number) {
  const presentation = resolveFigurePresentation(context)
  const comparisonSeries = buildComparisonSeries(context, presentation, yValues, _seed)
  return {
    dataTable: {
      title: 'Table 1',
      xLabel: presentation.xLabel,
      yLabel: context.yLabel,
      xValues: [...presentation.xValues],
      yValues: [...yValues],
      comparisonSeries,
      xUnit: presentation.xUnit,
      yUnit: context.yUnit,
    },
    figure: {
      title: presentation.figureTitle,
      seriesLabel: presentation.seriesLabel,
      xLabel: presentation.xLabel,
      yLabel: context.yLabel,
      xValues: [...presentation.xValues],
      yValues: [...yValues],
      comparisonSeries,
      xUnit: presentation.xUnit,
      yUnit: context.yUnit,
    },
  }
}

function deterministicNoise(seed: number, index: number): number {
  const raw = Math.sin((seed + 1) * 12.9898 + (index + 1) * 78.233) * 43758.5453
  return (raw - Math.floor(raw)) - 0.5
}

function chooseSeriesProfile(context: FigureContext, seed: number): SeriesProfile {
  const signature = `${context.context} ${context.xLabel} ${context.yLabel}`.toLowerCase()

  if (/(enzyme|substrate|dose|receptor|binding|uptake|titration|michaelis)/.test(signature)) {
    return seed % 4 === 0 ? 'threshold' : 'saturating'
  }
  if (/(signal|cascade|drift|growth|stress|error|induction|expression)/.test(signature)) {
    return seed % 3 === 0 ? 'threshold' : 'accelerating'
  }
  if (/(feedback|filtration|cardiac|homeostasis|output)/.test(signature)) {
    return seed % 2 === 0 ? 'near-plateau' : 'linear'
  }

  const profileOrder: SeriesProfile[] = ['linear', 'saturating', 'accelerating', 'threshold', 'near-plateau']
  return profileOrder[seed % profileOrder.length]
}

function estimateBaseline(context: FigureContext, intercept: number, slope: number, seed: number): number {
  const unit = context.yUnit.toLowerCase()
  const jitter = deterministicNoise(seed, 0)

  if (unit.includes('%')) return 15 + intercept * 6 + slope * 2 + jitter * 4
  if (unit.includes('ph')) return 2.5 + intercept * 0.8 + slope * 0.2 + jitter * 0.2
  if (unit.includes('mv')) return 40 + intercept * 25 + slope * 8 + jitter * 8
  if (unit.includes('ma')) return 6 + intercept * 3 + slope * 2 + jitter * 2
  if (unit.includes('l/min')) return 2 + intercept * 1.2 + slope * 0.7 + jitter * 0.5
  if (unit.includes('mm')) return 2 + intercept * 1.5 + slope * 0.8 + jitter * 0.6
  if (unit.includes('fold')) return 1 + intercept * 0.8 + slope * 0.5 + jitter * 0.4

  return 4 + intercept * 2 + slope + jitter
}

function estimateStepScale(context: FigureContext): number {
  const unit = context.yUnit.toLowerCase()
  if (unit.includes('%')) return 7
  if (unit.includes('ph')) return 0.45
  if (unit.includes('mv')) return 20
  if (unit.includes('ma')) return 3
  if (unit.includes('l/min')) return 1
  if (unit.includes('mm')) return 1.2
  if (unit.includes('fold')) return 0.9
  return 2.5
}

function roundByUnit(unit: string, value: number): number {
  const lower = unit.toLowerCase()
  if (lower.includes('ph') || lower.includes('fold')) return Number(value.toFixed(1))
  return Math.round(value)
}

function clampByUnit(unit: string, value: number): number {
  const lower = unit.toLowerCase()
  if (lower.includes('%')) return Math.min(99, Math.max(1, value))
  if (lower.includes('ph')) return Math.min(14, Math.max(0, value))
  return Math.max(0, value)
}

function buildComparisonSeries(
  context: FigureContext,
  presentation: FigurePresentation,
  yValues: number[],
  seed: number,
): Array<{ label: string; yValues: number[] }> {
  const signature = `${context.context} ${context.xLabel} ${context.yLabel}`.toLowerCase()
  const include = (seed + yValues.length) % 2 === 0 || presentation.archetype === 'lineweaver-like'
  if (!include) return []

  const makeSeries = (label: string, scaler: (value: number, index: number) => number) => {
    const values = yValues.map((value, index) => {
      const jitter = deterministicNoise(seed + 31, index) * 0.06 * Math.max(1, Math.abs(value))
      const candidate = scaler(value, index) + jitter
      return clampByUnit(context.yUnit, roundByUnit(context.yUnit, candidate))
    })

    for (let i = 1; i < values.length; i += 1) {
      if (values[i] < values[i - 1]) values[i] = values[i - 1]
    }

    return { label, yValues: values }
  }

  if (presentation.archetype === 'lineweaver-like') {
    const mode = seed % 3
    if (mode === 0) {
      return [makeSeries('Competitive inhibitor', (value, index) => value * (1.08 + index * 0.14))]
    }
    if (mode === 1) {
      return [makeSeries('Noncompetitive inhibitor', (value) => value * 1.35)]
    }
    return [makeSeries('Uncompetitive inhibitor', (value, index) => value * (1.18 + index * 0.04))]
  }

  if (presentation.archetype === 'michaelis-menten-like') {
    const mode = seed % 3
    if (mode === 0) {
      return [makeSeries('Competitive inhibitor', (value, index) => value * (0.62 + index * 0.12))]
    }
    if (mode === 1) {
      return [makeSeries('Noncompetitive inhibitor', (value) => value * 0.72)]
    }
    return [makeSeries('Uncompetitive inhibitor', (value, index) => value * (0.76 - index * 0.05))]
  }

  if (presentation.archetype === 'dose-response-like' && /(stress|error|symptom|risk)/.test(signature)) {
    return [makeSeries('High-resilience subgroup', (value, index) => value * (0.74 + index * 0.02))]
  }

  if (presentation.archetype === 'dose-response-like' && /(recall|memory|learning|performance)/.test(signature)) {
    return [makeSeries('Sleep-deprived subgroup', (value, index) => value * (0.8 - index * 0.01))]
  }

  if (presentation.archetype === 'physiology-loading-like') {
    const isOutputMetric = /(output|uptake|cardiac|filtration)/.test(signature)
    return [
      makeSeries(
        isOutputMetric ? 'Trained group' : 'Post-intervention',
        (value, index) => value * (1.04 + index * 0.02),
      ),
    ]
  }

  if (presentation.archetype === 'time-course-like') {
    if (/(expression|mrna|transcript|induction)/.test(signature)) {
      return [makeSeries('No-inducer control', (value, index) => value * (0.58 - index * 0.03))]
    }
    return [makeSeries('Control', (value, index) => value * (0.9 - index * 0.02))]
  }

  if (/(receptor|ligand|occupancy|binding)/.test(signature)) {
    return [makeSeries('Low-affinity mutant', (value, index) => value * (0.7 + index * 0.03))]
  }

  return [makeSeries('Comparison cohort', (value, index) => value * (0.88 + index * 0.01))]
}

function profileMultipliers(profile: SeriesProfile): [number, number, number] {
  switch (profile) {
    case 'saturating':
      return [1.25, 0.9, 0.65]
    case 'accelerating':
      return [0.75, 1.1, 1.45]
    case 'threshold':
      return [0.4, 1.35, 1.45]
    case 'near-plateau':
      return [1.2, 0.7, 0.45]
    default:
      return [1, 1, 1]
  }
}

function buildSeriesValues(context: FigureContext, slope: number, intercept: number, seed: number): number[] {
  const profile = chooseSeriesProfile(context, seed)
  const [m1, m2, m3] = profileMultipliers(profile)
  const stepScale = estimateStepScale(context)
  const minStep = Math.max(stepScale * 0.2, 0.2)

  const d1 = Math.max(minStep, (slope * m1 + deterministicNoise(seed, 1) * 0.35) * stepScale)
  const d2 = Math.max(minStep, (slope * m2 + deterministicNoise(seed, 2) * 0.35) * stepScale)
  const d3 = Math.max(minStep, (slope * m3 + deterministicNoise(seed, 3) * 0.35) * stepScale)

  const baseline = estimateBaseline(context, intercept, slope, seed)
  const raw = [baseline, baseline + d1, baseline + d1 + d2, baseline + d1 + d2 + d3]

  const rounded = raw.map((value) => clampByUnit(context.yUnit, roundByUnit(context.yUnit, value)))

  // Keep monotonicity so trend-interpretation prompts remain valid.
  for (let i = 1; i < rounded.length; i += 1) {
    if (rounded[i] <= rounded[i - 1]) {
      const next = rounded[i - 1] + Math.max(0.1, roundByUnit(context.yUnit, minStep))
      rounded[i] = clampByUnit(context.yUnit, roundByUnit(context.yUnit, next))
    }
  }

  return rounded
}

function classifyMarginalPattern(yValues: number[]): 'linear' | 'diminishing' | 'accelerating' {
  const deltas = [
    yValues[1] - yValues[0],
    yValues[2] - yValues[1],
    yValues[3] - yValues[2],
  ]

  if (deltas[0] < deltas[1] && deltas[1] <= deltas[2]) return 'accelerating'
  if (deltas[0] > deltas[1] && deltas[1] >= deltas[2]) return 'diminishing'
  return 'linear'
}

function inferFeedbackPattern(yValues: number[]): 'positive' | 'negative' | 'neutral' {
  const pattern = classifyMarginalPattern(yValues)
  if (pattern === 'accelerating') return 'positive'
  if (pattern === 'diminishing') return 'negative'
  return 'neutral'
}

function getComparisonLabel(visual: { figure?: { comparisonSeries?: Array<{ label: string }> } }): string | null {
  const label = visual.figure?.comparisonSeries?.[0]?.label
  return label ?? null
}

function buildFigureSupplementQuestions(
  domainId: string,
  sourceSlug: string,
  contexts: FigureContext[],
): MCATDiagnosticQuestion[] {
  const questions: MCATDiagnosticQuestion[] = []

  contexts.forEach((context, ctxIdx) => {
    FIGURE_SLOPES.forEach((slope) => {
      FIGURE_INTERCEPTS.forEach((intercept) => {
        const yValues = buildSeriesValues(context, slope, intercept, ctxIdx + slope + intercept)
        const visual = buildPassageVisual(context, yValues, ctxIdx + slope + intercept)
        const comparisonLabel = getComparisonLabel(visual)
        const comparisonValues = visual.figure?.comparisonSeries?.[0]?.yValues ?? null
        const pattern = classifyMarginalPattern(yValues)
        const xLow = context.xLabel.toLowerCase()
        const yLow = context.yLabel.toLowerCase()

        // ── Q-a: Curve-shape identification (Skill 4 — data-based reasoning) ──
        // Real MCAT asks: "The shape of the curve is most consistent with..."
        const shapeCorrect =
          pattern === 'diminishing'
            ? `a saturation-type relationship in which additional increases in ${xLow} produce progressively smaller gains in ${yLow}.`
            : pattern === 'accelerating'
            ? `a cooperative or threshold-type relationship in which the response to ${xLow} increases more steeply at higher levels.`
            : `a linear relationship in which each unit increase in ${xLow} produces approximately the same change in ${yLow}.`
        const shapeDistractors =
          pattern === 'diminishing'
            ? [
                `a cooperative or threshold-type relationship in which ${yLow} rises more steeply at higher ${xLow}.`,
                `an inverse relationship in which ${yLow} decreases as ${xLow} increases.`,
                `a biphasic relationship with stimulation at low ${xLow} and inhibition at high ${xLow}.`,
              ]
            : pattern === 'accelerating'
            ? [
                `a saturation-type relationship in which gains in ${yLow} diminish at higher ${xLow}.`,
                `an inverse relationship in which ${yLow} decreases as ${xLow} increases.`,
                `a linear relationship in which every condition produces the same incremental gain in ${yLow}.`,
              ]
            : [
                `a saturation-type relationship in which ${yLow} plateaus at high ${xLow}.`,
                `a cooperative or threshold-type relationship in which ${yLow} rises more steeply at higher ${xLow}.`,
                `a biphasic relationship with stimulation at low ${xLow} and inhibition at high ${xLow}.`,
              ]
        const qaChoices = buildChoiceSet(shapeCorrect, shapeDistractors)

        questions.push({
          id: `${domainId}-fig-${ctxIdx}-${slope}-${intercept}-a`,
          question:
            domainId === 'psych-soc'
              ? `The pattern of data in Figure 1 is most consistent with which of the following descriptions of the association between ${xLow} and ${yLow}?`
              : `The shape of the curve in Figure 1 is most consistent with which of the following relationships between ${xLow} and ${yLow}?`,
          options: qaChoices.options,
          correctAnswer: qaChoices.correctAnswer,
          explanation: `Examine successive increments in ${yLow}: (${yValues[1]}−${yValues[0]}), (${yValues[2]}−${yValues[1]}), (${yValues[3]}−${yValues[2]}). ${pattern === 'diminishing' ? 'These decrease, indicating saturation.' : pattern === 'accelerating' ? 'These increase, indicating a cooperative or threshold effect.' : 'These are roughly equal, indicating a linear relationship.'}`,
          domain: domainId,
          sourceSlug,
          difficulty: 'medium',
          family: 'figure-analysis',
          promptType: 'figure',
          visual,
        })

        // ── Q-b: Prediction question (Skill 2 — scientific reasoning) ──
        // Real MCAT asks: "If a fifth condition were added..."
        const _nextX = visual.figure?.xValues?.[3] ?? 4
        const lastDelta = yValues[3] - yValues[2]
        const prevDelta = yValues[2] - yValues[1]
        const predictedCorrect =
          pattern === 'diminishing'
            ? `${yLow} would increase, but by a smaller increment than the change from condition 3 to condition 4.`
            : pattern === 'accelerating'
            ? `${yLow} would increase by a larger increment than the change from condition 3 to condition 4.`
            : `${yLow} would increase by approximately the same increment as the change from condition 3 to condition 4.`
        const predictedDistractors =
          pattern === 'diminishing'
            ? [
                `${yLow} would increase by the same increment as from condition 3 to 4, because the trend is linear.`,
                `${yLow} would decrease below the condition 4 value, because the system is saturated.`,
                `${yLow} would remain exactly at the condition 4 value, because no further change is possible.`,
              ]
            : pattern === 'accelerating'
            ? [
                `${yLow} would increase by a smaller increment than from condition 3 to 4, because saturation must occur.`,
                `${yLow} would decrease, because high ${xLow} levels are toxic.`,
                `${yLow} would remain exactly at the condition 4 value, because the axis maximum has been reached.`,
              ]
            : [
                `${yLow} would increase by a much larger increment, because cooperative effects always amplify at higher concentrations.`,
                `${yLow} would decrease, because linear systems must reverse direction after four data points.`,
                `${yLow} would remain unchanged, because all responsive capacity is used by condition 4.`,
              ]
        const qbChoices = buildChoiceSet(predictedCorrect, predictedDistractors)

        questions.push({
          id: `${domainId}-fig-${ctxIdx}-${slope}-${intercept}-b`,
          question: `If investigators measured a fifth condition at a ${xLow} level above condition 4, which outcome is most consistent with the trend shown in Figure 1?`,
          options: qbChoices.options,
          correctAnswer: qbChoices.correctAnswer,
          explanation: `The increments between successive conditions (${Number((yValues[1] - yValues[0]).toFixed(1))}, ${Number(prevDelta.toFixed(1))}, ${Number(lastDelta.toFixed(1))}) ${pattern === 'diminishing' ? 'are decreasing, so the next increment should be even smaller.' : pattern === 'accelerating' ? 'are increasing, so the next increment should be larger still.' : 'are roughly constant, so the next increment should be similar.'} This extrapolation follows the observed pattern without assuming a change in mechanism.`,
          domain: domainId,
          sourceSlug,
          difficulty: 'medium',
          family: 'figure-analysis',
          promptType: 'figure',
          visual,
        })

        // ── Q-c: Overclaim evaluation (Skill 3 — research design reasoning) ──
        // Real MCAT asks: "A student concludes X. Is this conclusion justified?"
        const overclaim =
          domainId === 'psych-soc'
            ? `increasing ${xLow} causes higher ${yLow} in all populations`
            : `increasing ${xLow} will always increase ${yLow} regardless of conditions`
        const overclaimCorrect =
          domainId === 'psych-soc'
            ? `No; the data show an association in one sample but cannot establish causation or generalizability to other populations.`
            : `No; the data demonstrate a trend within the tested range but do not rule out a plateau or reversal beyond condition 4, and the mechanism is not confirmed by a single experiment.`
        const overclaimDistractors =
          domainId === 'psych-soc'
            ? [
                `Yes; the monotonic increase across four conditions establishes a causal relationship.`,
                `Yes; four data points are sufficient to prove causation if the trend is consistent.`,
                `No; the conclusion is invalid because the data show a decrease between conditions 3 and 4.`,
              ]
            : [
                `Yes; four ascending data points confirm a universal relationship between ${xLow} and ${yLow}.`,
                `Yes; because the experiment included multiple conditions, the conclusion is generalizable.`,
                `No; the data would need to show a decrease to prove any relationship exists.`,
              ]
        const qcChoices = buildChoiceSet(overclaimCorrect, overclaimDistractors)

        questions.push({
          id: `${domainId}-fig-${ctxIdx}-${slope}-${intercept}-c`,
          question: `A student concludes from Figure 1 that ${overclaim}. Is this conclusion justified by the data?`,
          options: qcChoices.options,
          correctAnswer: qcChoices.correctAnswer,
          explanation: `The data show a trend within the measured range, but a single experiment with four conditions cannot establish universal causation. ${domainId === 'psych-soc' ? 'Observational data cannot rule out confounders or demonstrate causation without additional controls.' : 'The response could plateau, reverse, or depend on conditions not tested. Replication with controls would be needed for a causal claim.'}`,
          domain: domainId,
          sourceSlug,
          difficulty: 'hard',
          family: 'figure-analysis',
          promptType: 'figure',
          visual,
        })

        // ── Q-d: Experimental design (Skill 3) ──
        // Real MCAT asks: "Which modification would best test whether..."
        const designCorrect =
          domainId === 'psych-soc'
            ? `Randomly assign participants to ${xLow} conditions and measure ${yLow} prospectively, controlling for baseline differences.`
            : pattern === 'diminishing'
            ? `Repeat the experiment with additional conditions beyond condition 4 to determine whether ${yLow} reaches a true plateau or continues to increase.`
            : pattern === 'accelerating'
            ? `Add a specific inhibitor of the proposed mechanism and repeat the measurement to determine whether the accelerating trend is abolished.`
            : `Vary a second independent variable while holding ${xLow} constant to determine whether the linear trend depends on other experimental conditions.`
        const designDistractors =
          domainId === 'psych-soc'
            ? [
                `Collect a larger cross-sectional sample at a single time point and compare means across groups.`,
                `Remove condition 2 and condition 3 to increase the contrast between endpoints.`,
                `Ask participants whether they believe ${xLow} affects ${yLow} and use their responses as the primary outcome.`,
              ]
            : [
                `Remove condition 1 so the curve starts at a higher baseline value.`,
                `Repeat the same four conditions and average the two data sets to reduce random error.`,
                `Convert the y-axis to a logarithmic scale and re-interpret the trend without additional data.`,
              ]
        const qdChoices = buildChoiceSet(designCorrect, designDistractors)

        questions.push({
          id: `${domainId}-fig-${ctxIdx}-${slope}-${intercept}-d`,
          question:
            domainId === 'psych-soc'
              ? `Which experimental modification would most directly test whether the association shown in Figure 1 reflects a causal relationship?`
              : `Based on the trend in Figure 1, which follow-up experiment would most directly address the primary limitation of this data set?`,
          options: qdChoices.options,
          correctAnswer: qdChoices.correctAnswer,
          explanation:
            domainId === 'psych-soc'
              ? `Random assignment and prospective measurement establish temporal precedence and reduce confounding, which are necessary to infer causation from an observed association.`
              : `${pattern === 'diminishing' ? 'The main limitation is that four points cannot confirm whether a true plateau is reached. Extending the concentration range addresses this.' : pattern === 'accelerating' ? 'Adding a specific inhibitor tests whether the accelerating response depends on the proposed mechanism, distinguishing it from alternative explanations.' : 'The linear trend could be context-dependent. Varying a second factor tests whether the observed relationship is robust.'} Merely replotting or dropping conditions does not generate new information.`,
          domain: domainId,
          sourceSlug,
          difficulty: 'hard',
          family: 'figure-analysis',
          promptType: 'figure',
          visual,
        })

        // ── Q-cmp: Comparison-trace mechanistic interpretation (Skill 2) ──
        // Real MCAT asks about what the difference between traces implies about mechanism
        if (comparisonLabel && comparisonValues) {
          const _primaryGain = yValues[3] - yValues[0]
          const _compGain = comparisonValues[3] - comparisonValues[0]
          const startDiff = yValues[0] - comparisonValues[0]
          const endDiff = yValues[3] - comparisonValues[3]
          const diverges = Math.abs(endDiff) > Math.abs(startDiff) * 1.3

          const cmpCorrect = diverges
            ? `The difference between the two traces increases at higher ${xLow} levels, suggesting that ${comparisonLabel} reduces the magnitude of the response in a concentration-dependent manner.`
            : `The two traces maintain a roughly constant offset across conditions, suggesting that ${comparisonLabel} shifts the baseline level of ${yLow} without altering the dose-response relationship.`
          const cmpDistractors = diverges
            ? [
                `The two traces converge at higher ${xLow}, indicating that ${comparisonLabel} only affects baseline ${yLow}.`,
                `${comparisonLabel} has no measurable effect because both traces increase across conditions.`,
                `The traces cross between conditions 2 and 3, reversing which group has higher ${yLow}.`,
              ]
            : [
                `The traces diverge at higher ${xLow}, indicating a concentration-dependent effect of ${comparisonLabel}.`,
                `${comparisonLabel} eliminates the response entirely at condition 4.`,
                `The traces are indistinguishable at all conditions, so ${comparisonLabel} has no effect.`,
              ]
          const qcmpChoices = buildChoiceSet(cmpCorrect, cmpDistractors)

          questions.push({
            id: `${domainId}-fig-${ctxIdx}-${slope}-${intercept}-cmp`,
            question: `Based on the comparison between the primary trace and ${comparisonLabel} in Figure 1, which conclusion about the effect of ${comparisonLabel} on ${yLow} is best supported?`,
            options: qcmpChoices.options,
            correctAnswer: qcmpChoices.correctAnswer,
            explanation: `At condition 1, the difference is ${Number(Math.abs(startDiff).toFixed(1))} ${context.yUnit}; at condition 4, the difference is ${Number(Math.abs(endDiff).toFixed(1))} ${context.yUnit}. ${diverges ? 'The growing gap indicates a dose-dependent interaction, not merely a baseline shift.' : 'The roughly constant offset across conditions indicates a baseline shift without altering the slope of the response.'}`,
            domain: domainId,
            sourceSlug,
            difficulty: 'hard',
            family: 'figure-analysis',
            promptType: 'figure',
            visual,
          })
        }
      })
    })
  })

  return questions
}

function buildCarsSupplementQuestions(domainId: string, sourceSlug: string): MCATDiagnosticQuestion[] {
  const contexts: CarsContext[] = [
    {
      authorType: 'a historian of science',
      claim: 'standardized testing overweights speed relative to depth of reasoning',
      evidence: 'students who annotate and revisit passages score higher despite answering fewer total items',
      hiddenAssumption: 'higher scores in this cohort reflect stronger reasoning rather than selection bias',
    },
    {
      authorType: 'a policy analyst',
      claim: 'public trust increases when institutions publish transparent error-correction protocols',
      evidence: 'agencies with visible correction logs show faster recovery in public approval after mistakes',
      hiddenAssumption: 'the correction logs are a cause of trust recovery, not just a marker of better institutions',
    },
    {
      authorType: 'a literary critic',
      claim: 'ambiguity in narration can increase reader engagement when thematic stakes are explicit',
      evidence: 'readers report stronger recall for stories with unresolved narrators but clear thematic conflict',
      hiddenAssumption: 'reported recall corresponds to deeper engagement rather than novelty alone',
    },
    {
      authorType: 'a sociologist',
      claim: 'micro-level social norms can shift faster than formal policy language',
      evidence: 'everyday workplace language changed months before official handbook updates in several industries',
      hiddenAssumption: 'language changes indicate genuine norm shifts rather than temporary signaling behavior',
    },
    {
      authorType: 'a philosopher of education',
      claim: 'metacognitive reflection improves transfer of learning to unfamiliar problems',
      evidence: 'students who justify why an approach works outperform peers on novel variants',
      hiddenAssumption: 'the benefit comes from reflection itself rather than extra study time',
    },
  ]

  const questions: MCATDiagnosticQuestion[] = []

  for (let i = 0; i < 160; i += 1) {
    const ctx = contexts[i % contexts.length]
    const variant = i % 4

    if (variant === 0) {
      const correct = `Evidence showing the reported effect disappears after controlling for the proposed mechanism`
      const choices = buildChoiceSet(correct, [
        'A replication in a nearby population with a similar outcome',
        'A commentary that agrees with the author’s values',
        'A summary that restates the claim in simpler language',
      ])
      questions.push({
        id: `${domainId}-cars-${i}-weaken`,
        question: `Passage Excerpt: ${ctx.authorType} argues that ${ctx.claim}. The author cites that ${ctx.evidence}.\n\nWhich additional finding would MOST weaken the argument?`,
        options: choices.options,
        correctAnswer: choices.correctAnswer,
        explanation: `The strongest weakening evidence attacks the causal bridge from evidence to claim. If the effect disappears once the proposed mechanism is controlled, the argument's core inference is undermined.`,
        domain: domainId,
        sourceSlug,
        difficulty: 'hard',
        family: 'cars-reasoning',
        promptType: 'standalone',
      })
      continue
    }

    if (variant === 1) {
      const correct = ctx.hiddenAssumption
      const choices = buildChoiceSet(correct, [
        'All readers interpret evidence in exactly the same way',
        'Any policy change automatically changes behavior immediately',
        'Only quantitative evidence can support social claims',
      ])
      questions.push({
        id: `${domainId}-cars-${i}-assumption`,
        question: `Passage Excerpt: ${ctx.authorType} claims that ${ctx.claim}. The passage supports this by noting that ${ctx.evidence}.\n\nWhich assumption is MOST necessary for the author’s conclusion?`,
        options: choices.options,
        correctAnswer: choices.correctAnswer,
        explanation: `A necessary assumption links evidence to conclusion. Here, the argument requires that the observed evidence genuinely supports the claimed mechanism.`,
        domain: domainId,
        sourceSlug,
        difficulty: 'hard',
        family: 'cars-reasoning',
        promptType: 'standalone',
      })
      continue
    }

    if (variant === 2) {
      const correct = 'A result that extends the same mechanism to a harder or broader context'
      const choices = buildChoiceSet(correct, [
        'A definition of key terms taken from a dictionary',
        'A historical anecdote unrelated to the mechanism',
        'A restatement of the original claim with stronger wording',
      ])
      questions.push({
        id: `${domainId}-cars-${i}-strengthen`,
        question: `Passage Excerpt: ${ctx.authorType} argues that ${ctx.claim}, citing that ${ctx.evidence}.\n\nWhich additional evidence would MOST strengthen the author’s position?`,
        options: choices.options,
        correctAnswer: choices.correctAnswer,
        explanation: `The strongest support shows the same mechanism persists under stricter or broader conditions, reducing the chance that the original evidence was context-specific.`,
        domain: domainId,
        sourceSlug,
        difficulty: 'hard',
        family: 'cars-reasoning',
        promptType: 'standalone',
      })
      continue
    }

    const correct = 'The author is making a qualified causal claim supported by correlational evidence'
    const choices = buildChoiceSet(correct, [
      'The author is rejecting all causal reasoning as invalid',
      'The author proves the claim deductively with no empirical evidence',
      'The author is only summarizing opposing viewpoints neutrally',
    ])
    questions.push({
      id: `${domainId}-cars-${i}-reasoning`,
      question: `Passage Excerpt: ${ctx.authorType} claims that ${ctx.claim} and cites ${ctx.evidence}.\n\nWhich statement best characterizes the author’s reasoning strategy?`,
      options: choices.options,
      correctAnswer: choices.correctAnswer,
      explanation: `The argument presents a causal interpretation, but the support is observational/correlational. The strongest description captures both parts.`,
      domain: domainId,
      sourceSlug,
      difficulty: 'medium',
      family: 'cars-reasoning',
      promptType: 'standalone',
    })
  }

  return questions
}

/* ------------------------------------------------------------------ */
/*  Authored passage sourcing                                          */
/*                                                                     */
/*  The diagnostic's passage sets are drawn from the hand-authored     */
/*  banks in src/data/mcat/passages (the same content behind the CARS  */
/*  library and the full-length exam) instead of procedurally          */
/*  templated stubs. Per domain we serve ONE passage plus a CONTIGUOUS */
/*  window of its questions, sized to the domain's minPassageQuestions */
/*  quota. Policy: passages fully adversarially reviewed (no           */
/*  needsReview flag) are preferred; unreviewed drafts are used only   */
/*  when the reviewed pool has run dry (none eligible, or all their    */
/*  questions already seen by this student). Which passages a test     */
/*  drew from — and whether any were drafts — is recorded in           */
/*  MCATDiagnosticTestData.passageSources.                             */
/* ------------------------------------------------------------------ */

/** Passages whose prose embeds a markdown table can't render in the plain-text passage pane. */
const MARKDOWN_TABLE_RE = /\n\s*\|.*\|/

/** Cap on candidate passages per domain fed to the (shuffled) selector. */
const MAX_AUTHORED_CANDIDATES = 6

interface AuthoredDomainConfig {
  domainId: string
  /** Contiguous questions to serve per passage = the domain's passage quota. */
  windowSize: number
  passages: MCATPassage[]
  family: string
  sourceSlugFor: (passage: MCATPassage) => string
}

function authoredDomainConfigs(): AuthoredDomainConfig[] {
  return [
    {
      domainId: 'cars',
      windowSize: 4,
      passages: CARS_PASSAGES,
      family: 'cars-passage-reasoning',
      sourceSlugFor: () => 'mcat-cars',
    },
    {
      domainId: 'physics',
      windowSize: 2,
      passages: SECTION_PASSAGES['chem-phys'].filter((p) => p.discipline === 'physics'),
      family: 'passage-data-interpretation',
      sourceSlugFor: (p) =>
        /circuit|current|voltage|resist|electro|capacit|charge|magnet/i.test(p.passageText)
          ? 'mcat-physics-electricity'
          : 'mcat-physics-mechanics',
    },
    {
      domainId: 'cell-mol-bio',
      windowSize: 2,
      passages: SECTION_PASSAGES['bio-biochem'].filter((p) =>
        ['molecular biology', 'cell biology', 'microbiology'].includes(p.discipline),
      ),
      family: 'passage-data-interpretation',
      sourceSlugFor: () => 'mcat-biology',
    },
    {
      domainId: 'psych-soc',
      windowSize: 4,
      passages: SECTION_PASSAGES['psych-soc'],
      family: 'passage-data-interpretation',
      sourceSlugFor: () => 'mcat-psychology-sociology',
    },
  ]
}

/**
 * Map an authored structured chart onto the diagnostic's passage visual shape
 * (dataTable + figure with numeric xValues). Categorical x-axes (e.g. study
 * conditions on a bar chart) are numbered 1..N and decoded by a plain-text
 * legend appended to the passage body, so no data is lost.
 */
function chartToPassageBlocks(chart: MCATFigureSpec): {
  dataTable: NonNullable<NonNullable<MCATDiagnosticQuestion['passage']>['dataTable']>
  figure: NonNullable<NonNullable<MCATDiagnosticQuestion['passage']>['figure']>
  legend: string | null
} {
  const numericX = chart.xValues.every((x): x is number => typeof x === 'number')
  const xValues = numericX ? chart.xValues.map(Number) : chart.xValues.map((_, i) => i + 1)
  const legend = numericX
    ? null
    : `Figure key — ${chart.xLabel}: ${chart.xValues.map((x, i) => `${i + 1} = ${x}`).join('; ')}.`
  const comparisonSeries = (chart.comparisonSeries ?? []).map((s) => ({
    label: s.label,
    yValues: [...s.yValues],
  }))
  const base = {
    xLabel: chart.xLabel,
    yLabel: chart.yLabel,
    xValues,
    yValues: [...chart.yValues],
    ...(comparisonSeries.length > 0 ? { comparisonSeries } : {}),
    xUnit: chart.xUnit ?? (numericX ? '' : 'condition #'),
    yUnit: chart.yUnit ?? '',
  }
  return {
    dataTable: { title: chart.title, ...base },
    figure: { title: chart.title, seriesLabel: chart.seriesLabel, ...base },
    legend,
  }
}

/**
 * A passage is servable when its whole presentation survives the diagnostic's
 * plain-text passage pane: no prose/markdown `figure` block, no markdown table
 * embedded in the body, and enough questions to fill the domain's window.
 */
function isServablePassage(passage: MCATPassage, windowSize: number): boolean {
  return (
    !passage.figure &&
    !MARKDOWN_TABLE_RE.test(passage.passageText) &&
    passage.questions.length >= windowSize
  )
}

function authoredQuestionId(domainId: string, passage: MCATPassage, questionIndex: number): string {
  // Stable across generations (banks are static arrays), so the
  // MCAT_DIAGNOSTIC_SEEN_KEY exclusion mechanism can track them.
  return `${domainId}-authored-${passage.id}-q${questionIndex}`
}

/**
 * Pick the best contiguous question window for a passage: most unseen
 * questions first, then fewest draft-flagged questions.
 */
function chooseAuthoredWindow(
  passage: MCATPassage,
  windowSize: number,
  excludeQuestionIds: Set<string>,
  domainId: string,
): { start: number; unseen: number; flagged: number } {
  let best = { start: 0, unseen: -1, flagged: Number.MAX_SAFE_INTEGER }
  for (let start = 0; start + windowSize <= passage.questions.length; start += 1) {
    let unseen = 0
    let flagged = 0
    for (let i = start; i < start + windowSize; i += 1) {
      if (!excludeQuestionIds.has(authoredQuestionId(domainId, passage, i))) unseen += 1
      if (passage.questions[i].needsReview) flagged += 1
    }
    if (unseen > best.unseen || (unseen === best.unseen && flagged < best.flagged)) {
      best = { start, unseen, flagged }
    }
  }
  return best
}

function authoredWindowToQuestions(
  config: AuthoredDomainConfig,
  passage: MCATPassage,
  start: number,
): MCATDiagnosticQuestion[] {
  const blocks = passage.chart ? chartToPassageBlocks(passage.chart) : null
  const body = blocks?.legend ? `${passage.passageText}\n\n${blocks.legend}` : passage.passageText
  const passageBlock = {
    id: `authored-${passage.id}`,
    title: passage.title,
    body,
    ...(blocks ? { dataTable: blocks.dataTable, figure: blocks.figure } : {}),
  }

  return passage.questions.slice(start, start + config.windowSize).map((q, offset) => {
    const questionIndex = start + offset
    return {
      id: authoredQuestionId(config.domainId, passage, questionIndex),
      question: q.question,
      options: [...q.options],
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      domain: config.domainId,
      sourceSlug: config.sourceSlugFor(passage),
      difficulty: 'hard' as const,
      family: config.family,
      promptType: 'passage' as const,
      skill: q.skill,
      discipline: passage.discipline,
      passage: passageBlock,
    }
  })
}

function buildPassageQuestionBank(excludeQuestionIds: Set<string>): {
  bank: Record<string, MCATDiagnosticQuestion[]>
  passageMeta: Map<string, MCATDiagnosticPassageSource>
} {
  const bank: Record<string, MCATDiagnosticQuestion[]> = {}
  const passageMeta = new Map<string, MCATDiagnosticPassageSource>()

  for (const config of authoredDomainConfigs()) {
    const annotated = config.passages
      .filter((p) => isServablePassage(p, config.windowSize))
      .map((p) => ({
        passage: p,
        window: chooseAuthoredWindow(p, config.windowSize, excludeQuestionIds, config.domainId),
      }))

    const fullyUnseen = annotated.filter((a) => a.window.unseen === config.windowSize)
    const reviewedUnseen = fullyUnseen.filter((a) => !a.passage.needsReview)
    const draftUnseen = fullyUnseen.filter((a) => a.passage.needsReview)
    const reviewedAny = annotated.filter((a) => !a.passage.needsReview)

    // Reviewed passages first; drafts only when the reviewed pool has run dry
    // (none authored for this domain, or the student has seen them all). When
    // literally everything is seen, recycle reviewed passages before drafts.
    let pool = reviewedUnseen
    if (pool.length === 0) pool = draftUnseen
    if (pool.length === 0) pool = reviewedAny
    if (pool.length === 0) pool = annotated
    if (pool.length === 0) continue

    const candidates = pickRandom(pool, MAX_AUTHORED_CANDIDATES)
    bank[config.domainId] = candidates.flatMap((a) =>
      authoredWindowToQuestions(config, a.passage, a.window.start),
    )
    for (const a of candidates) {
      passageMeta.set(`authored-${a.passage.id}`, {
        passageId: a.passage.id,
        title: a.passage.title,
        domainId: config.domainId,
        needsReview: Boolean(a.passage.needsReview) || a.window.flagged > 0,
      })
    }
  }

  return { bank, passageMeta }
}

function buildSupplementalDomainBank(): Record<string, MCATDiagnosticQuestion[]> {
  return {
    'gen-chem': buildFigureSupplementQuestions('gen-chem', 'mcat-general-chemistry', [
      { context: 'acid-base titration checkpoints', xLabel: 'Added base volume', yLabel: 'pH', xUnit: 'mL', yUnit: 'pH units' },
      { context: 'reaction concentration experiment', xLabel: '[Reactant]0', yLabel: 'Initial rate', xUnit: 'M', yUnit: 'units/min' },
      { context: 'gas law manipulation at fixed moles', xLabel: 'Temperature', yLabel: 'Pressure', xUnit: 'K', yUnit: 'kPa' },
      { context: 'electrochem setup variation', xLabel: 'log Q', yLabel: 'Cell potential', xUnit: 'unitless', yUnit: 'mV' },
    ]),
    'org-chem': buildFigureSupplementQuestions('org-chem', 'mcat-organic-chemistry', [
      { context: 'SN1 solvent polarity series', xLabel: 'Dielectric constant', yLabel: 'Substitution yield', xUnit: 'unitless', yUnit: '%' },
      { context: 'E2 base-strength sweep', xLabel: 'Base conjugate-acid pKa', yLabel: 'Alkene fraction', xUnit: 'pKa', yUnit: '%' },
      { context: 'chromatography solvent gradient', xLabel: '% ethyl acetate in eluent', yLabel: 'Retention factor', xUnit: '%', yUnit: 'Rf units' },
      { context: 'carbonyl reduction conditions', xLabel: '[NaBH4]', yLabel: 'Product conversion', xUnit: 'equiv', yUnit: '%' },
    ]),
    physics: buildFigureSupplementQuestions('physics', 'mcat-physics-mechanics', [
      { context: 'constant-force cart experiment', xLabel: 'Time', yLabel: 'Velocity', xUnit: 's', yUnit: 'm/s' },
      { context: 'spring extension trial', xLabel: 'Applied force', yLabel: 'Extension', xUnit: 'N', yUnit: 'mm' },
      { context: 'circuit resistance sweep', xLabel: 'Resistance', yLabel: 'Current', xUnit: 'ohm', yUnit: 'mA' },
      { context: 'lens-object distance adjustments', xLabel: 'Object distance', yLabel: 'Image height', xUnit: 'cm', yUnit: 'mm' },
    ]),
    'biochem-cp': buildFigureSupplementQuestions('biochem-cp', 'mcat-biochemistry', [
      { context: 'enzyme assay substrate series', xLabel: '[S]', yLabel: 'Velocity', xUnit: 'mM', yUnit: 'umol/min' },
      { context: 'lineweaver reciprocal panel', xLabel: '1/[S]', yLabel: '1/Velocity', xUnit: '1/mM', yUnit: 'min/umol' },
      { context: 'ATP demand workload steps', xLabel: 'Workload power', yLabel: 'ATP turnover', xUnit: 'W/kg', yUnit: 'arb units' },
      { context: 'mitochondrial proton gradient states', xLabel: 'Delta p', yLabel: 'ATP output', xUnit: 'mV', yUnit: 'units' },
    ]),
    'cell-mol-bio': buildFigureSupplementQuestions('cell-mol-bio', 'mcat-biology', [
      { context: 'cell-cycle checkpoint stimulation', xLabel: 'Cyclin concentration', yLabel: 'Mitotic entry rate', xUnit: 'arb units', yUnit: '%' },
      { context: 'receptor-ligand occupancy table', xLabel: '[Ligand]', yLabel: 'Bound receptor', xUnit: 'nM', yUnit: '%' },
      { context: 'gene-expression induction trial', xLabel: 'Induction time', yLabel: 'mRNA abundance', xUnit: 'h', yUnit: 'fold' },
      { context: 'membrane transport channel counts', xLabel: 'Channel density', yLabel: 'Flux', xUnit: 'channels/um2', yUnit: 'arb units' },
    ]),
    'organ-systems': buildFigureSupplementQuestions('organ-systems', 'mcat-organ-systems', [
      { context: 'cardiac output demand protocol', xLabel: 'Workload', yLabel: 'Cardiac output', xUnit: 'METs', yUnit: 'L/min' },
      { context: 'renal filtration challenge', xLabel: 'Renal perfusion pressure', yLabel: 'Filtration rate', xUnit: 'mmHg', yUnit: 'mL/min' },
      { context: 'pulmonary ventilation loading', xLabel: 'Minute ventilation', yLabel: 'O2 uptake', xUnit: 'L/min', yUnit: 'mL/min' },
      { context: 'endocrine dose-response test', xLabel: 'Hormone dose', yLabel: 'Physiologic response', xUnit: 'ng/mL', yUnit: '%' },
    ]),
    genetics: buildFigureSupplementQuestions('genetics', 'mcat-genetics-evolution', [
      { context: 'allele frequency drift simulation', xLabel: 'Generation', yLabel: 'Allele A frequency', xUnit: 'gen', yUnit: '%' },
      { context: 'selection pressure gradient', xLabel: 'Selection coefficient', yLabel: 'Trait prevalence', xUnit: 's', yUnit: '%' },
      { context: 'linkage mapping recombination panel', xLabel: 'Genetic distance', yLabel: 'Recombinants', xUnit: 'cM', yUnit: '%' },
      { context: 'population bottleneck recovery', xLabel: 'Generations after bottleneck', yLabel: 'Heterozygosity', xUnit: 'gen', yUnit: '%' },
    ]),
    'psych-soc': buildFigureSupplementQuestions('psych-soc', 'mcat-psychology-sociology', [
      { context: 'memory recall intervention', xLabel: 'Spacing interval', yLabel: 'Recall score', xUnit: 'hours', yUnit: 'points' },
      { context: 'stress-load survey cohort', xLabel: 'Perceived stress score', yLabel: 'Error rate', xUnit: 'scale', yUnit: '%' },
      { context: 'social network density study', xLabel: 'Network density', yLabel: 'Conformity likelihood', xUnit: 'proportion', yUnit: '%' },
      { context: 'community resource access tiers', xLabel: 'Resource access score', yLabel: 'Health outcome index', xUnit: 'score', yUnit: 'score' },
    ]),
    cars: buildCarsSupplementQuestions('cars', 'mcat-cars'),
  }
}

function buildFeedbackLoopSubBank(): Record<string, MCATDiagnosticQuestion[]> {
  const contexts: Array<FigureContext & { domain: string; sourceSlug: string; system: string }> = [
    {
      domain: 'biochem-cp',
      sourceSlug: 'mcat-biochemistry',
      system: 'enzyme product inhibition pathway',
      context: 'product-feedback enzyme assay',
      xLabel: 'Substrate dose',
      yLabel: 'Product formation rate',
      xUnit: 'arb',
      yUnit: 'units/min',
    },
    {
      domain: 'cell-mol-bio',
      sourceSlug: 'mcat-biology',
      system: 'receptor-mediated signaling cascade',
      context: 'receptor pathway stimulation series',
      xLabel: 'Ligand concentration',
      yLabel: 'Signal output',
      xUnit: 'nM',
      yUnit: 'arb units',
    },
    {
      domain: 'organ-systems',
      sourceSlug: 'mcat-organ-systems',
      system: 'endocrine axis regulation',
      context: 'hormone challenge protocol',
      xLabel: 'Hormone infusion step',
      yLabel: 'Physiologic response',
      xUnit: 'step',
      yUnit: '% baseline',
    },
    {
      domain: 'physics',
      sourceSlug: 'mcat-physics-mechanics',
      system: 'sensor-amplifier control circuit',
      context: 'control-loop gain series',
      xLabel: 'Input signal step',
      yLabel: 'Output response',
      xUnit: 'step',
      yUnit: 'mV',
    },
    {
      domain: 'psych-soc',
      sourceSlug: 'mcat-psychology-sociology',
      system: 'stress-performance adaptation model',
      context: 'stress-exposure cohort',
      xLabel: 'Stress condition',
      yLabel: 'Error rate',
      xUnit: 'condition',
      yUnit: '%',
    },
    {
      domain: 'genetics',
      sourceSlug: 'mcat-genetics-evolution',
      system: 'gene-regulatory network motif',
      context: 'transcription factor titration panel',
      xLabel: 'Activator level',
      yLabel: 'Target transcript abundance',
      xUnit: 'arb',
      yUnit: 'fold',
    },
  ]

  const byDomain: Record<string, MCATDiagnosticQuestion[]> = {}

  contexts.forEach((context, ctxIdx) => {
    const questions: MCATDiagnosticQuestion[] = []

    FIGURE_SLOPES.forEach((slope) => {
      ;[1, 3].forEach((intercept) => {
        const yValues = buildSeriesValues(context, slope, intercept, ctxIdx + slope + intercept)
        const visual = buildPassageVisual(context, yValues, ctxIdx + slope + intercept)
        const comparisonLabel = getComparisonLabel(visual)
        const observedFeedback = inferFeedbackPattern(yValues)
        const claimedFeedback: 'positive' | 'negative' = (ctxIdx + slope + intercept) % 2 === 0 ? 'negative' : 'positive'

        const observationSummary =
          observedFeedback === 'positive'
            ? 'later increments are larger than earlier increments'
            : observedFeedback === 'negative'
            ? 'later increments are smaller than earlier increments'
            : 'increments are approximately constant across conditions'

        const modelEvaluation =
          observedFeedback === 'neutral'
            ? `The trend is roughly linear, so this graph alone does not strongly distinguish positive vs negative feedback in ${context.system}.`
            : observedFeedback === claimedFeedback
            ? `The data are consistent with the proposed ${claimedFeedback} feedback mechanism because ${observationSummary}.`
            : `The data challenge the proposed ${claimedFeedback} feedback model and better match ${observedFeedback} feedback because ${observationSummary}.`

        const evalChoices = buildChoiceSet(modelEvaluation, [
          `Any monotonic increase in ${context.yLabel.toLowerCase()} indicates positive feedback, regardless of how the increments change across conditions.`,
          `The data cannot distinguish positive from negative feedback because both predict an increase in ${context.yLabel.toLowerCase()} at higher ${context.xLabel.toLowerCase()}.`,
          `Feedback classification requires the curve to cross below baseline before any conclusion can be drawn.`,
        ])

        questions.push({
          id: `${context.domain}-feedback-${ctxIdx}-${slope}-${intercept}-model`,
          question: comparisonLabel
            ? `In a ${context.system}, increasing ${context.xLabel.toLowerCase()} is hypothesized to produce a ${claimedFeedback} feedback response in ${context.yLabel.toLowerCase()}. Considering both traces (primary and ${comparisonLabel}) in Figure 1, which evaluation is best supported?`
            : `In a ${context.system}, increasing ${context.xLabel.toLowerCase()} is hypothesized to produce a ${claimedFeedback} feedback response in ${context.yLabel.toLowerCase()}. Based on Figure 1, which evaluation is best supported?`,
          options: evalChoices.options,
          correctAnswer: evalChoices.correctAnswer,
          explanation: `To evaluate a feedback hypothesis, compare the successive increments across conditions rather than the overall direction. Here, ${observationSummary}. ${observedFeedback === 'neutral' ? 'A linear trend does not preferentially support either feedback type.' : observedFeedback === claimedFeedback ? `This pattern matches the predicted ${claimedFeedback} feedback.` : `This pattern contradicts the predicted ${claimedFeedback} feedback and instead matches ${observedFeedback} feedback.`}`,
          domain: context.domain,
          sourceSlug: context.sourceSlug,
          difficulty: 'hard',
          family: 'feedback-loop-reasoning',
          promptType: 'figure',
          visual,
        })

        const followupChoices = buildChoiceSet(
          `Perturb the putative feedback mediator while holding ${context.xLabel.toLowerCase()} fixed and measure whether the shape of the ${context.yLabel.toLowerCase()} curve changes as predicted by the model.`,
          [
            `Repeat the same four conditions in triplicate; if the rank order is preserved, the feedback mechanism is confirmed.`,
            `Eliminate intermediate conditions and compare only the lowest and highest ${context.xLabel.toLowerCase()} levels for statistical clarity.`,
            `Increase sample size without measuring the mediator and use a lower p-value threshold as evidence of feedback.`,
          ],
        )

        questions.push({
          id: `${context.domain}-feedback-${ctxIdx}-${slope}-${intercept}-design`,
          question: `Which follow-up experiment would most directly test whether the trend observed in Figure 1 is mediated by a feedback mechanism rather than a simple dose-dependent effect?`,
          options: followupChoices.options,
          correctAnswer: followupChoices.correctAnswer,
          explanation: `A feedback mechanism implies a mediator that closes the loop. The most direct test manipulates that mediator independently and checks whether the curve shape changes as the model predicts. Repeating the same measurement, reducing conditions, or simply increasing sample size cannot distinguish feedback from a direct effect.`,
          domain: context.domain,
          sourceSlug: context.sourceSlug,
          difficulty: 'hard',
          family: 'feedback-loop-reasoning',
          promptType: 'figure',
          visual,
        })
      })
    })

    byDomain[context.domain] = (byDomain[context.domain] ?? []).concat(questions)
  })

  return byDomain
}

function dedupeQuestions(questions: MCATDiagnosticQuestion[]): MCATDiagnosticQuestion[] {
  const byId = new Map<string, MCATDiagnosticQuestion>()
  questions.forEach((q) => {
    if (!byId.has(q.id)) byId.set(q.id, q)
  })
  return Array.from(byId.values())
}

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export async function generateMCATDiagnosticTest(
  options: MCATDiagnosticGenerationOptions = {},
): Promise<MCATDiagnosticTestData> {
  const totalQuestionTarget = DIAGNOSTIC_DOMAINS.reduce((sum, domain) => sum + domain.questionCount, 0)
  const minFeedbackLoopQuestions = 2
  const maxFigureQuestions = Math.max(1, Math.round(totalQuestionTarget * 0.15))
  const excludeQuestionIds = options.excludeQuestionIds ?? new Set<string>()
  const supplementalBank = buildSupplementalDomainBank()
  const feedbackLoopBank = buildFeedbackLoopSubBank()
  const { bank: passageBank, passageMeta } = buildPassageQuestionBank(excludeQuestionIds)
  const questions: MCATDiagnosticQuestion[] = []
  const domainPools = new Map<string, MCATDiagnosticQuestion[]>()

  for (const domain of DIAGNOSTIC_DOMAINS) {
    const questionsPerSlug = Math.max(Math.ceil((domain.questionCount + 8) / domain.slugs.length), 16)
    let domainQuestions: MCATDiagnosticQuestion[] = []

    for (const slug of domain.slugs) {
      try {
        const pool = await generateExitQuiz(slug, questionsPerSlug + 2)
        const tagged: MCATDiagnosticQuestion[] = pool.map(q => {
          const raw = q as unknown as Record<string, unknown>
          const correctAnswer = (raw.correctAnswer ?? raw.correctIndex ?? 0) as number
          const question = q.question
          const id = typeof raw.id === 'string' && raw.id.length > 0
            ? `${domain.id}-${slug}-${raw.id}`
            : `${domain.id}-${slug}-${hashString(question)}`
          return {
            id,
            question,
            options: q.options,
            correctAnswer,
            explanation: q.explanation,
            domain: domain.id,
            sourceSlug: slug,
            difficulty:
              raw.difficulty === 'easy' || raw.difficulty === 'medium' || raw.difficulty === 'hard'
                ? raw.difficulty
                : q.question.length > 180 || domain.id === 'cars'
                ? 'hard'
                : 'medium',
            family: 'core-domain-bank',
            promptType: 'standalone',
          }
        })
        domainQuestions.push(...tagged)
      } catch {
        // If a quiz isn't found, skip silently
      }
    }

    const supplemental = supplementalBank[domain.id] ?? []
    const feedbackLoopQuestions = feedbackLoopBank[domain.id] ?? []
    const passageQuestions = passageBank[domain.id] ?? []
    const merged = dedupeQuestions([...domainQuestions, ...supplemental, ...feedbackLoopQuestions, ...passageQuestions]).map((question) => ({
      ...question,
      difficulty: inferQuestionDifficulty(question),
      family: inferQuestionFamily(question),
      promptType: inferPromptType(question),
    }))

    const unseen = merged.filter((q) => !excludeQuestionIds.has(q.id))
    const poolToSample = unseen.length >= domain.questionCount ? unseen : merged
    domainPools.set(domain.id, poolToSample)

    const selectedPassageQuestions = selectPassageQuestions(poolToSample, Math.min(domain.minPassageQuestions ?? 0, domain.questionCount))
    const selectedPassageIds = new Set(selectedPassageQuestions.map((q) => q.id))
    const nonSelectedQuestions = poolToSample.filter((q) => !selectedPassageIds.has(q.id))
    const remainingCount = domain.questionCount - selectedPassageQuestions.length
    const selectedRemainder = selectQuestionsByDifficulty(nonSelectedQuestions, remainingCount, domain.difficultyMix)

    domainQuestions = shuffle([...selectedPassageQuestions, ...selectedRemainder]).slice(0, domain.questionCount).map((question) => ({
      ...question,
      difficulty: inferQuestionDifficulty(question),
      family: inferQuestionFamily(question),
      promptType: inferPromptType(question),
    }))

    questions.push(...domainQuestions)
  }

  const selectedQuestions = [...questions]
  const selectedByDomain = new Map<string, Set<string>>()
  for (const question of selectedQuestions) {
    if (!selectedByDomain.has(question.domain)) selectedByDomain.set(question.domain, new Set())
    selectedByDomain.get(question.domain)?.add(question.id)
  }

  const figureIndexes = selectedQuestions
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => (question.promptType ?? inferPromptType(question)) === 'figure')

  let excessFigureCount = figureIndexes.length - maxFigureQuestions
  if (excessFigureCount > 0) {
    for (const { question, index } of shuffle(figureIndexes)) {
      if (excessFigureCount <= 0) break
      if ((question.family ?? inferQuestionFamily(question)) === 'feedback-loop-reasoning') continue

      const domainPool = domainPools.get(question.domain) ?? []
      const usedInDomain = selectedByDomain.get(question.domain) ?? new Set<string>()
      const nonFigureCandidates = domainPool.filter(
        (candidate) =>
          (candidate.promptType ?? inferPromptType(candidate)) !== 'figure' &&
          !usedInDomain.has(candidate.id),
      )

      if (nonFigureCandidates.length === 0) continue

      const replacement = pickRandom(nonFigureCandidates, 1)[0]
      if (!replacement) continue

      usedInDomain.delete(question.id)
      usedInDomain.add(replacement.id)
      selectedQuestions[index] = replacement
      excessFigureCount -= 1
    }
  }

  const selectedFeedbackCount = selectedQuestions.filter(
    (question) => (question.family ?? inferQuestionFamily(question)) === 'feedback-loop-reasoning',
  ).length

  if (selectedFeedbackCount < minFeedbackLoopQuestions) {
    let needed = minFeedbackLoopQuestions - selectedFeedbackCount
    const usedIds = new Set(selectedQuestions.map((q) => q.id))
    const feedbackCandidates = shuffle(
      Array.from(domainPools.values())
        .flat()
        .filter(
          (candidate) =>
            (candidate.family ?? inferQuestionFamily(candidate)) === 'feedback-loop-reasoning' &&
            !usedIds.has(candidate.id),
        ),
    )

    for (const candidate of feedbackCandidates) {
      if (needed <= 0) break

      let replaceIndex = selectedQuestions.findIndex(
        (question) =>
          question.domain === candidate.domain &&
          (question.family ?? inferQuestionFamily(question)) !== 'feedback-loop-reasoning',
      )

      if (replaceIndex < 0) {
        replaceIndex = selectedQuestions.findIndex(
          (question) => (question.family ?? inferQuestionFamily(question)) !== 'feedback-loop-reasoning',
        )
      }

      if (replaceIndex < 0) break

      const replaced = selectedQuestions[replaceIndex]
      selectedQuestions[replaceIndex] = candidate

      usedIds.add(candidate.id)
      selectedByDomain.get(replaced.domain)?.delete(replaced.id)
      selectedByDomain.get(candidate.domain)?.add(candidate.id)

      needed -= 1
    }
  }

  // Record which authored passages actually made it into this test (and
  // whether any were still unreviewed drafts).
  const passageSources: MCATDiagnosticPassageSource[] = []
  const recordedPassageIds = new Set<string>()
  for (const question of selectedQuestions) {
    const passageId = question.passage?.id
    if (!passageId || recordedPassageIds.has(passageId)) continue
    recordedPassageIds.add(passageId)
    const meta = passageMeta.get(passageId)
    if (meta) passageSources.push(meta)
  }

  return {
    questions: shuffle(selectedQuestions),
    domains: DIAGNOSTIC_DOMAINS,
    totalQuestions: selectedQuestions.length,
    timeLimitMinutes: 55,
    ...(passageSources.length > 0 ? { passageSources } : {}),
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreMCATDiagnostic(
  questions: MCATDiagnosticQuestion[],
  answers: Record<number, number>,
): MCATDiagnosticResults {
  const domainResults: MCATDomainResult[] = DIAGNOSTIC_DOMAINS.map(domain => {
    const domainQs = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => q.domain === domain.id)

    const correct = domainQs.filter(({ i }) => {
      const answer = answers[i]
      return answer !== undefined && answer === questions[i].correctAnswer
    }).length

    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' =
      percentage >= 70 ? 'strong' : percentage >= 40 ? 'moderate' : 'weak'

    return {
      domainId: domain.id,
      domainName: domain.name,
      section: domain.section,
      correct,
      total,
      percentage,
      level,
    }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Score estimation per section (118-132 range) via the shared
  // percentile-anchored curve in @/lib/mcat-scoring — the same conversion the
  // full-length exam uses, so a section % maps to the same scaled score on
  // every surface.
  function sectionScore(sectionId: string): number {
    const sectionDomains = domainResults.filter(d => d.section === sectionId)
    const correct = sectionDomains.reduce((s, d) => s + d.correct, 0)
    const total = sectionDomains.reduce((s, d) => s + d.total, 0)
    return sectionScaledScore(total > 0 ? correct / total : 0)
  }

  const chemPhysScore = sectionScore('chem-phys')
  const carsScore = sectionScore('cars')
  const bioBiochemScore = sectionScore('bio-biochem')
  const psychSocScore = sectionScore('psych-soc')
  const estimatedScore = chemPhysScore + carsScore + bioBiochemScore + psychSocScore

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Prioritize by exam weight (questionCount) so highest-impact topics surface first.
  const examWeight = (id: string) => DIAGNOSTIC_DOMAINS.find(dom => dom.id === id)?.questionCount ?? 0
  // Domain slugs are category-level labels, not real Topic records — map them to
  // the canonical `-mcat` topic slugs so recommendation links resolve to live
  // lesson pages (same pattern as the SAT diagnostic's CANONICAL_SLUG_MAP).
  const CANONICAL_TOPIC_MAP: Record<string, string> = {
    'mcat-general-chemistry': 'mcat-general-chemistry-mcat',
    'mcat-organic-chemistry': 'mcat-organic-chemistry-mcat',
    'mcat-physics-mechanics': 'mcat-physics-mechanics-mcat',
    'mcat-physics-electricity': 'mcat-physics-electricity-mcat',
    'mcat-biochemistry': 'mcat-biochemistry-foundations-mcat',
    'mcat-cars': 'mcat-cars-strategy-mcat',
    'mcat-biology': 'mcat-cell-biology-mcat',
    'mcat-organ-systems': 'mcat-organ-systems-mcat',
    'mcat-genetics-evolution': 'mcat-genetics-evolution-mcat',
    'mcat-psychology-sociology': 'mcat-psychology-behavior-mcat',
  }
  const canonicalizeTopicSlug = (s: string) => CANONICAL_TOPIC_MAP[s] ?? s

  // SPECIFIC recommendations first: attribute each missed question to a
  // concrete curriculum topic ("Thermodynamics", "Membrane Transport") via
  // the per-domain concept map, so students are told exactly what to study
  // instead of just "work on Chemistry". Misses vote for their topic; topics
  // from weaker domains rank first, then by vote count.
  const missVotes = new Map<string, { slug: string; name: string; domainId: string; count: number }>()
  questions.forEach((q, i) => {
    const answer = answers[i]
    const missed = answer === undefined || answer !== q.correctAnswer
    if (!missed) return
    // Authored passage questions carry skill/discipline tags; fold them into
    // the matcher's fallback text so misses still attribute to a curriculum
    // topic (the map file's contract is unchanged).
    const fallbackText = [q.explanation, q.skill, q.discipline].filter(Boolean).join(' ')
    const rule = matchSubtopic(q.domain, q.question, q.options, fallbackText)
    if (!rule) return
    const entry = missVotes.get(rule.slug) ?? { slug: rule.slug, name: rule.title, domainId: q.domain, count: 0 }
    entry.count++
    missVotes.set(rule.slug, entry)
  })
  const levelRank = (id: string) => {
    const level = domainResults.find(d => d.domainId === id)?.level
    return level === 'weak' ? 0 : level === 'moderate' ? 1 : 2
  }
  const specificTopics = [...missVotes.values()]
    .sort((a, b) =>
      levelRank(a.domainId) - levelRank(b.domainId) ||
      b.count - a.count ||
      examWeight(b.domainId) - examWeight(a.domainId))
    .map(t => ({
      slug: t.slug,
      name: t.name,
      priority: levelRank(t.domainId) === 0 || t.count >= 2 ? 'high' as const : 'medium' as const,
    }))

  // Domain-level fallback (previous behavior) fills any remaining slots —
  // never wrong, just less specific than a direct miss attribution.
  const domainTopics = domainResults
    .filter(d => d.level === 'weak' || d.level === 'moderate')
    .sort((a, b) => {
      if (a.level !== b.level) return a.level === 'weak' ? -1 : 1
      return examWeight(b.domainId) - examWeight(a.domainId)
    })
    .flatMap(d => {
      const domain = DIAGNOSTIC_DOMAINS.find(dom => dom.id === d.domainId)
      return (domain?.slugs ?? []).map(slug => ({
        slug: canonicalizeTopicSlug(slug),
        name: d.domainName,
        priority: d.level === 'weak' ? 'high' as const : 'medium' as const,
      }))
    })

  const recommendedTopics = [...specificTopics, ...domainTopics]
    // Dedupe: multiple sources can produce the same topic.
    .filter((t, i, arr) => arr.findIndex(x => x.slug === t.slug) === i)

  const feedbackLoopQuestions = questions
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => (q.family ?? inferQuestionFamily(q)) === 'feedback-loop-reasoning')

  const missedFeedbackCount = feedbackLoopQuestions.filter(({ i }) => {
    const answer = answers[i]
    return answer === undefined || answer !== questions[i].correctAnswer
  }).length

  if (missedFeedbackCount > 0) {
    const feedbackTopicSlug = 'mcat-science-passage-strategy-mcat'
    const exists = recommendedTopics.some((topic) => topic.slug === feedbackTopicSlug)
    if (!exists) {
      recommendedTopics.unshift({
        slug: feedbackTopicSlug,
        name: 'Feedback Loop Graph Reasoning',
        priority: missedFeedbackCount >= 2 ? 'high' : 'medium',
      })
    }
  }

  // Percent-increase / quantitative-skills remediation
  const percentCalcQuestions = questions
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => q.family === 'figure-analysis' && /percent increase/.test(q.question))

  const missedPercentCalcCount = percentCalcQuestions.filter(({ i }) => {
    const answer = answers[i]
    return answer === undefined || answer !== questions[i].correctAnswer
  }).length

  if (missedPercentCalcCount > 0) {
    const mathTopicSlug = 'mcat-quantitative-skills-mcat'
    const mathExists = recommendedTopics.some((topic) => topic.slug === mathTopicSlug)
    if (!mathExists) {
      recommendedTopics.push({
        slug: mathTopicSlug,
        name: 'MCAT Quantitative Skills (Percent Change & Ratios)',
        priority: missedPercentCalcCount >= 2 ? 'high' : 'medium',
      })
    }
  }

  return {
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedScore,
    chemPhysScore,
    carsScore,
    bioBiochemScore,
    psychSocScore,
    domains: domainResults,
    weakAreas,
    moderateAreas,
    strengths,
    // Cap recommendations at 5 to maximize student engagement on the next diagnostic cycle.
    recommendedTopics: recommendedTopics.slice(0, 5),
  }
}
