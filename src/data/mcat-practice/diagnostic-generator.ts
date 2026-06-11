/**
 * MCAT Diagnostic Test Generator
 *
 * A 45-question assessment that samples across all MCAT sections/domains
 * to identify student strengths and weaknesses.
 */

import { generateExitQuiz } from '../exit-quizzes'

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

export interface MCATDiagnosticTestData {
  questions: MCATDiagnosticQuestion[]
  domains: MCATDiagnosticDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

type MCATDiagnosticGenerationOptions = {
  excludeQuestionIds?: Set<string>
}

type PassageBlockContext = {
  title: string
  body: string
  dataContext?: FigureContext
  domain: string
  sourceSlug: string
  positiveHypothesis?: string
  negativeHypothesis?: string
  mechanismVariable?: string
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

const DIAGNOSTIC_DOMAINS: MCATDiagnosticDomain[] = [
  // Chem/Phys
  {
    id: 'gen-chem',
    name: 'General Chemistry',
    section: 'chem-phys',
    slugs: ['mcat-general-chemistry'],
    questionCount: 5,
    difficultyMix: { easy: 1, medium: 2, hard: 2 },
  },
  {
    id: 'org-chem',
    name: 'Organic Chemistry',
    section: 'chem-phys',
    slugs: ['mcat-organic-chemistry'],
    questionCount: 4,
    difficultyMix: { easy: 0, medium: 2, hard: 2 },
  },
  {
    id: 'physics',
    name: 'Physics',
    section: 'chem-phys',
    slugs: ['mcat-physics-mechanics', 'mcat-physics-electricity'],
    questionCount: 5,
    minPassageQuestions: 3,
    difficultyMix: { easy: 1, medium: 2, hard: 2 },
  },
  {
    id: 'biochem-cp',
    name: 'Biochemistry (Chem/Phys)',
    section: 'chem-phys',
    slugs: ['mcat-biochemistry'],
    questionCount: 4,
    difficultyMix: { easy: 0, medium: 2, hard: 2 },
  },
  // CARS
  {
    id: 'cars',
    name: 'Critical Analysis & Reasoning',
    section: 'cars',
    slugs: ['mcat-cars'],
    questionCount: 7,
    minPassageQuestions: 3,
    difficultyMix: { easy: 1, medium: 3, hard: 3 },
  },
  // Bio/Biochem
  {
    id: 'cell-mol-bio',
    name: 'Cell & Molecular Biology',
    section: 'bio-biochem',
    slugs: ['mcat-biology'],
    questionCount: 5,
    minPassageQuestions: 3,
    difficultyMix: { easy: 1, medium: 2, hard: 2 },
  },
  {
    id: 'organ-systems',
    name: 'Organ Systems & Physiology',
    section: 'bio-biochem',
    slugs: ['mcat-organ-systems'],
    questionCount: 5,
    difficultyMix: { easy: 1, medium: 2, hard: 2 },
  },
  {
    id: 'genetics',
    name: 'Genetics & Evolution',
    section: 'bio-biochem',
    slugs: ['mcat-genetics-evolution'],
    questionCount: 4,
    difficultyMix: { easy: 0, medium: 2, hard: 2 },
  },
  // Psych/Soc
  {
    id: 'psych-soc',
    name: 'Psychology & Sociology',
    section: 'psych-soc',
    slugs: ['mcat-psychology-sociology'],
    questionCount: 6,
    minPassageQuestions: 3,
    difficultyMix: { easy: 1, medium: 2, hard: 3 },
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
        const nextX = visual.figure?.xValues?.[3] ?? 4
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
          const primaryGain = yValues[3] - yValues[0]
          const compGain = comparisonValues[3] - comparisonValues[0]
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

function buildSciencePassageBlocks(contexts: PassageBlockContext[]): MCATDiagnosticQuestion[] {
  const questions: MCATDiagnosticQuestion[] = []

  contexts.forEach((context, index) => {
    for (let variant = 0; variant < 12; variant += 1) {
      const slope = FIGURE_SLOPES[variant % FIGURE_SLOPES.length]
      const intercept = FIGURE_INTERCEPTS[(variant + index) % FIGURE_INTERCEPTS.length]
      const yValues = buildSeriesValues(context.dataContext ?? {
        context: context.title,
        xLabel: 'Condition',
        yLabel: 'Response',
        xUnit: 'step',
        yUnit: 'units',
      }, slope, intercept, variant + index)
      const passageId = `${context.domain}-passage-${index}-${variant}`
      const body = context.body
      const visual = context.dataContext ? buildPassageVisual(context.dataContext, yValues, variant + index) : null
      const comparisonLabel = visual?.figure?.comparisonSeries?.[0]?.label ?? null
      const comparisonValues = visual?.figure?.comparisonSeries?.[0]?.yValues ?? null
      const basePassage = {
        id: passageId,
        title: context.title,
        body,
        ...(visual ?? {}),
      }

      // ── Passage Q1: Mechanism-integration (Skill 2) ──
      // Integrates passage hypothesis with figure data pattern — core MCAT archetype
      const dataPattern = classifyMarginalPattern(yValues)
      const posHyp = context.positiveHypothesis ?? 'amplification dominates across conditions'
      const negHyp = context.negativeHypothesis ?? 'a damping mechanism limits later gains'
      const mechVar = context.mechanismVariable ?? 'the measured response'
      const xLbl = context.dataContext?.xLabel ?? 'the input'
      const yLbl = context.dataContext?.yLabel ?? 'the measured response'

      const q1Correct =
        dataPattern === 'accelerating'
          ? `The data are more consistent with the hypothesis that ${posHyp}, because successive increments in ${yLbl.toLowerCase()} grow larger at higher ${xLbl.toLowerCase()} levels.`
          : dataPattern === 'diminishing'
          ? `The data are more consistent with the hypothesis that ${negHyp}, because successive increments in ${yLbl.toLowerCase()} grow smaller at higher ${xLbl.toLowerCase()} levels.`
          : `Neither hypothesis is strongly favored; the roughly constant increments across conditions are consistent with a simple linear dose-response.`
      const q1Distractors =
        dataPattern === 'accelerating'
          ? [
              `The data support the hypothesis that ${negHyp}, because ${yLbl.toLowerCase()} increases across all four conditions.`,
              `The hypotheses cannot be distinguished because both predict that ${yLbl.toLowerCase()} will increase.`,
              `Neither hypothesis is relevant because the data show a decrease in ${yLbl.toLowerCase()} between conditions 3 and 4.`,
            ]
          : dataPattern === 'diminishing'
          ? [
              `The data support the hypothesis that ${posHyp}, because ${yLbl.toLowerCase()} is higher at condition 4 than at condition 1.`,
              `The hypotheses cannot be distinguished without error bars on each data point.`,
              `The data disprove both hypotheses because ${yLbl.toLowerCase()} never reaches zero.`,
            ]
          : [
              `The data definitively confirm that ${posHyp} because any monotonic increase indicates amplification.`,
              `The data definitively confirm that ${negHyp} because every condition is higher than the previous one.`,
              `The data are uninterpretable unless the response decreases at some condition.`,
            ]
      const q1 = buildChoiceSet(q1Correct, q1Distractors)

      questions.push({
        id: `${passageId}-q1`,
        question: `Based on the data in Figure 1 and the competing hypotheses described in the passage, which conclusion about ${mechVar} is best supported?`,
        options: q1.options,
        correctAnswer: q1.correctAnswer,
        explanation: `To distinguish the hypotheses, compare successive increments: (${yValues[1]}−${yValues[0]}), (${yValues[2]}−${yValues[1]}), (${yValues[3]}−${yValues[2]}). ${dataPattern === 'accelerating' ? 'These increase, which matches the amplification hypothesis.' : dataPattern === 'diminishing' ? 'These decrease, which matches the damping hypothesis.' : 'These are roughly constant, so neither feedback model is preferentially supported.'} A common error is to conclude that any increase supports amplification — the shape of the curve, not the overall direction, distinguishes the hypotheses.`,
        domain: context.domain,
        sourceSlug: context.sourceSlug,
        difficulty: 'hard',
        family: 'passage-data-interpretation',
        promptType: 'passage',
        passage: basePassage,
      })

      // ── Passage Q2: "What if" perturbation question (Skill 2) ──
      // Real MCAT frequently asks: "If the investigators added [intervention], what would happen to the curve?"
      const perturbationCorrect =
        dataPattern === 'diminishing'
          ? `The curve would reach its plateau at a lower ${yLbl.toLowerCase()} value, but the saturation-type shape would be preserved.`
          : dataPattern === 'accelerating'
          ? `The steepening portion of the curve would shift to higher ${xLbl.toLowerCase()} values, requiring greater input to achieve the same degree of response.`
          : `The slope of the linear relationship would decrease, producing smaller gains in ${yLbl.toLowerCase()} per unit increase in ${xLbl.toLowerCase()}.`
      const perturbationDistractors =
        dataPattern === 'diminishing'
          ? [
              `The curve would become linear because saturation kinetics cannot occur with partial inhibition.`,
              `The curve would shift upward at all conditions, increasing both baseline and maximal ${yLbl.toLowerCase()}.`,
              `The curve would reverse direction, causing ${yLbl.toLowerCase()} to decrease as ${xLbl.toLowerCase()} increases.`,
            ]
          : dataPattern === 'accelerating'
          ? [
              `The curve would become flat because any inhibition eliminates the response entirely.`,
              `The curve would shift upward, reaching higher ${yLbl.toLowerCase()} values at every condition.`,
              `The curve's shape would invert, showing diminishing returns instead of acceleration.`,
            ]
          : [
              `The linear relationship would become exponential because inhibition always introduces nonlinearity.`,
              `The line would shift upward, increasing ${yLbl.toLowerCase()} at every ${xLbl.toLowerCase()} level.`,
              `${yLbl} would drop to zero at all conditions because any inhibition abolishes the response.`,
            ]
      const q2 = buildChoiceSet(perturbationCorrect, perturbationDistractors)

      questions.push({
        id: `${passageId}-q2`,
        question: `If the investigators repeated the experiment in Figure 1 with a partial inhibitor of the pathway responsible for ${yLbl.toLowerCase()}, which effect on the dose-response curve would be most likely?`,
        options: q2.options,
        correctAnswer: q2.correctAnswer,
        explanation: `Partial inhibition reduces the maximal output of a pathway without eliminating it. ${dataPattern === 'diminishing' ? 'For a saturation-type curve, this lowers the plateau (Vmax equivalent) while preserving the overall saturating shape.' : dataPattern === 'accelerating' ? 'For a cooperative/threshold response, partial inhibition shifts the activation threshold rightward without changing the fundamental cooperativity.' : 'For a linear response, partial inhibition reduces the slope — less output per unit input — while maintaining linearity.'} The shape of the curve reflects the underlying mechanism, which partial inhibition modifies but does not abolish.`,
        domain: context.domain,
        sourceSlug: context.sourceSlug,
        difficulty: 'hard',
        family: 'passage-data-interpretation',
        promptType: 'passage',
        passage: basePassage,
      })

      // ── Passage Q3: Experimental limitation / confound identification (Skill 3) ──
      // Real MCAT asks: "Which of the following is the greatest limitation of this experimental design?"
      const limitationCorrect =
        context.domain === 'psych-soc'
          ? `The observational design cannot distinguish whether changes in ${xLbl.toLowerCase()} cause changes in ${yLbl.toLowerCase()} or whether a confounding variable drives both.`
          : `The experiment measures only one time point and cannot determine whether the observed relationship persists, reverses, or changes at later time points or higher concentrations.`
      const limitationDistractors =
        context.domain === 'psych-soc'
          ? [
              `The study used four conditions instead of two, which makes the results uninterpretable.`,
              `The investigators measured ${yLbl.toLowerCase()} directly, but should have used a proxy variable instead.`,
              `The data cannot be analyzed because no mathematical model was fit to the curve.`,
            ]
          : [
              `The experiment used four different ${xLbl.toLowerCase()} levels, which is insufficient because exactly five are needed for statistical validity.`,
              `The investigators should have measured a different dependent variable to make the results interpretable.`,
              `The experiment is invalid because both conditions show an increase in ${yLbl.toLowerCase()}.`,
            ]
      const q3 = buildChoiceSet(limitationCorrect, limitationDistractors)

      questions.push({
        id: `${passageId}-q3`,
        question: `Which of the following is the most significant limitation of the experimental approach described in the passage?`,
        options: q3.options,
        correctAnswer: q3.correctAnswer,
        explanation: `${context.domain === 'psych-soc' ? 'In observational studies, the primary limitation is the inability to establish causation. Without random assignment, confounding variables may explain the observed association.' : 'Measuring a single endpoint at one time point limits conclusions about the full dose-response relationship. The response could plateau, reverse, or change character beyond the tested range or at different time points.'} This type of limitation question is a staple of MCAT passage sets.`,
        domain: context.domain,
        sourceSlug: context.sourceSlug,
        difficulty: 'hard',
        family: 'passage-data-interpretation',
        promptType: 'passage',
        passage: basePassage,
      })

      // ── Passage Q4: Conclusion NOT supported (Skill 4 — "which is NOT") ──
      // Classic MCAT negative-stem question
      const notSupportedCorrect =
        dataPattern === 'accelerating'
          ? `${yLbl} exhibits saturation kinetics at the highest ${xLbl.toLowerCase()} level tested.`
          : dataPattern === 'diminishing'
          ? `${yLbl} increases at a faster rate between conditions 3 and 4 than between conditions 1 and 2.`
          : `The rate of increase in ${yLbl.toLowerCase()} accelerates substantially across the four conditions.`
      const notSupportedDistractors =
        dataPattern === 'accelerating'
          ? [
              `${yLbl} is higher at condition 4 than at condition 1.`,
              `The rate of change in ${yLbl.toLowerCase()} increases across successive conditions.`,
              `There is a positive relationship between ${xLbl.toLowerCase()} and ${yLbl.toLowerCase()} within the tested range.`,
            ]
          : dataPattern === 'diminishing'
          ? [
              `${yLbl} is higher at condition 4 than at condition 1.`,
              `The rate of increase in ${yLbl.toLowerCase()} slows at higher ${xLbl.toLowerCase()} levels.`,
              `There is a positive relationship between ${xLbl.toLowerCase()} and ${yLbl.toLowerCase()} within the tested range.`,
            ]
          : [
              `${yLbl} is higher at condition 4 than at condition 1.`,
              `The increments in ${yLbl.toLowerCase()} are approximately equal across successive conditions.`,
              `There is a positive relationship between ${xLbl.toLowerCase()} and ${yLbl.toLowerCase()} within the tested range.`,
            ]
      const q4 = buildChoiceSet(notSupportedCorrect, notSupportedDistractors)

      questions.push({
        id: `${passageId}-q4`,
        question: `Which of the following conclusions is NOT supported by the data in Figure 1?`,
        options: q4.options,
        correctAnswer: q4.correctAnswer,
        explanation: `The correct answer is the statement that contradicts the observed data pattern. ${dataPattern === 'accelerating' ? 'The data show accelerating gains, not saturation. Saturation would require diminishing increments at higher conditions.' : dataPattern === 'diminishing' ? 'The data show diminishing increments, which is the opposite of a faster rate at higher conditions.' : 'The roughly equal increments contradict the claim that the response accelerates.'} The other three statements are all consistent with the figure.`,
        domain: context.domain,
        sourceSlug: context.sourceSlug,
        difficulty: 'medium',
        family: 'passage-data-interpretation',
        promptType: 'passage',
        passage: basePassage,
      })

      // ── Passage Q5: Comparison-trace interpretation (Skill 2) — only when two series exist ──
      if (comparisonLabel && comparisonValues) {
        const startDiff = yValues[0] - comparisonValues[0]
        const endDiff = yValues[3] - comparisonValues[3]
        const diverges = Math.abs(endDiff) > Math.abs(startDiff) * 1.3

        const q5Correct = diverges
          ? `${comparisonLabel} attenuates the response in a ${xLbl.toLowerCase()}-dependent manner, as evidenced by the increasing gap between the two traces at higher conditions.`
          : `${comparisonLabel} reduces ${yLbl.toLowerCase()} by a similar amount at all ${xLbl.toLowerCase()} levels, consistent with a mechanism that lowers the baseline without altering the dose-response slope.`
        const q5Distractors = diverges
          ? [
              `${comparisonLabel} has no detectable effect on ${yLbl.toLowerCase()} because both traces increase across conditions.`,
              `${comparisonLabel} shifts the curve to the right without changing the maximal response.`,
              `${comparisonLabel} increases ${yLbl.toLowerCase()} at low ${xLbl.toLowerCase()} levels but decreases it at high ${xLbl.toLowerCase()} levels.`,
            ]
          : [
              `${comparisonLabel} selectively reduces ${yLbl.toLowerCase()} only at the highest ${xLbl.toLowerCase()} level tested.`,
              `${comparisonLabel} has no effect because the two traces have similar endpoints.`,
              `${comparisonLabel} reverses the direction of the response, converting the increase into a decrease.`,
            ]
        const q5 = buildChoiceSet(q5Correct, q5Distractors)

        questions.push({
          id: `${passageId}-q5`,
          question: `Based on both traces in Figure 1, which statement best describes the effect of ${comparisonLabel} on ${yLbl.toLowerCase()} across the range of ${xLbl.toLowerCase()} tested?`,
          options: q5.options,
          correctAnswer: q5.correctAnswer,
          explanation: `Compare the gap between traces at each condition. At condition 1 the difference is ${Number(Math.abs(startDiff).toFixed(1))} ${context.dataContext?.yUnit ?? 'units'}; at condition 4 it is ${Number(Math.abs(endDiff).toFixed(1))} ${context.dataContext?.yUnit ?? 'units'}. ${diverges ? 'The widening gap indicates a dose-dependent interaction, not a simple baseline shift.' : 'The roughly constant gap indicates a uniform baseline effect independent of the dose.'} This mirrors how the MCAT tests inhibitor-kinetics reasoning using passage figure data.`,
          domain: context.domain,
          sourceSlug: context.sourceSlug,
          difficulty: 'hard',
          family: 'passage-data-interpretation',
          promptType: 'passage',
          passage: basePassage,
        })
      }
    }
  })

  return questions
}

function buildCarsPassageBlocks(domainId: string, sourceSlug: string): MCATDiagnosticQuestion[] {
  const passages = [
    {
      title: 'Cultural Memory and Public Monuments',
      body: 'A cultural historian argues that public monuments do not simply preserve memory; they organize it. In the passage, the historian claims that when communities revise commemorative spaces, they are not erasing the past so much as renegotiating which obligations the past imposes on the present. The author concedes that critics fear revision because it can appear opportunistic, but maintains that static monuments are equally interpretive because they freeze one historical judgment and present it as natural.',
      claim: 'monument revision is an interpretive act, not necessarily an erasure of memory',
      assumption: 'communities can revise symbols while still engaging seriously with history',
    },
    {
      title: 'Scientific Models and Simplicity',
      body: 'A philosopher of science contends that a useful model is not the one that includes every measurable variable, but the one that preserves the relations necessary for prediction. According to the passage, critics of simplified models often mistake detail for explanatory power. The author notes that a sparse model can outperform a more elaborate one if the added variables obscure rather than clarify the dominant mechanism.',
      claim: 'simplicity can improve explanation when extra detail hides the main causal relation',
      assumption: 'the dominant mechanism can be identified without preserving every variable',
    },
    {
      title: 'Reading Speed and Comprehension',
      body: 'An essayist argues that efficiency is not the same as understanding. The passage suggests that readers trained to maximize speed can become excellent at extracting explicit claims while growing worse at noticing tonal shifts and structural qualification. The author does not reject skimming altogether; instead, the essay claims that high-level comprehension requires selective slowing at moments where the argument pivots.',
      claim: 'strong comprehension requires strategic slowing rather than uniform speed',
      assumption: 'tonal shifts and structural pivots carry meaning that fast readers might miss',
    },
  ]

  const questions: MCATDiagnosticQuestion[] = []
  passages.forEach((passage, index) => {
    for (let variant = 0; variant < 18; variant += 1) {
      const passageId = `${domainId}-cars-passage-${index}-${variant}`
      const basePassage = { id: passageId, title: passage.title, body: passage.body }

      const mainClaim = buildChoiceSet(passage.claim, [
        'all traditional interpretations should be rejected immediately',
        'evidence only matters when it is emotionally compelling',
        'complexity is always superior to clarity',
      ])
      questions.push({
        id: `${passageId}-q1`,
        question: 'Which option best states the central claim of the passage?',
        options: mainClaim.options,
        correctAnswer: mainClaim.correctAnswer,
        explanation: 'The correct answer restates the author’s main position without exaggeration.',
        domain: domainId,
        sourceSlug,
        difficulty: 'medium',
        family: 'cars-passage-reasoning',
        promptType: 'passage',
        passage: basePassage,
      })

      const assumption = buildChoiceSet(passage.assumption, [
        'all critics are motivated by bad faith',
        'only numerical evidence can justify interpretation',
        'historical debates always end in consensus',
      ])
      questions.push({
        id: `${passageId}-q2`,
        question: 'Which assumption is most necessary for the author’s argument?',
        options: assumption.options,
        correctAnswer: assumption.correctAnswer,
        explanation: 'The strongest assumption is the unstated bridge the author needs in order for the evidence to support the conclusion.',
        domain: domainId,
        sourceSlug,
        difficulty: 'hard',
        family: 'cars-passage-reasoning',
        promptType: 'passage',
        passage: basePassage,
      })

      const strengthen = buildChoiceSet(
        'An additional example showing the same reasoning works in a more demanding case',
        [
          'A summary that repeats the author’s thesis in different words',
          'A quotation from a well-known writer who agrees with the topic',
          'A finding unrelated to the relationship discussed in the passage',
        ],
      )
      questions.push({
        id: `${passageId}-q3`,
        question: 'Which new piece of evidence would most strengthen the passage’s argument?',
        options: strengthen.options,
        correctAnswer: strengthen.correctAnswer,
        explanation: 'The best strengthening evidence confirms the same mechanism under tougher conditions, making the original reasoning more credible.',
        domain: domainId,
        sourceSlug,
        difficulty: 'hard',
        family: 'cars-passage-reasoning',
        promptType: 'passage',
        passage: basePassage,
      })
    }
  })

  return questions
}

function buildPassageQuestionBank(): Record<string, MCATDiagnosticQuestion[]> {
  return {
    physics: buildSciencePassageBlocks([
      {
        title: 'Viscoelastic Response in Connective Tissue',
        body: 'Researchers investigated the mechanical behavior of porcine tendon specimens under cyclic loading at four increasing force magnitudes (conditions 1–4). Each specimen was subjected to 10 loading cycles at the given force, and the peak displacement at the 10th cycle was recorded. The investigators hypothesized two competing models: (1) a positive-feedback model in which collagen fiber recruitment at higher loads exposes additional fibers to strain, progressively increasing compliance; and (2) a negative-feedback model in which proteoglycan cross-links redistribute stress across the fiber network, limiting displacement gains at higher loads. Results are shown in Figure 1.',
        dataContext: { context: 'viscoelastic loading outcomes', xLabel: 'Load step', yLabel: 'Displacement', xUnit: 'step', yUnit: 'mm' },
        domain: 'physics',
        sourceSlug: 'mcat-physics-mechanics',
        positiveHypothesis: 'collagen fiber recruitment progressively increases compliance at higher loads',
        negativeHypothesis: 'proteoglycan cross-links redistribute stress and limit displacement gains',
        mechanismVariable: 'tendon displacement',
      },
      {
        title: 'Nonlinear Resistance in a Thermistor Circuit',
        body: 'A student measures current through a negative-temperature-coefficient (NTC) thermistor at four applied voltage levels. As voltage increases, Joule heating raises the thermistor temperature, which decreases its resistance and allows greater current. Two models are proposed: (1) a gain-amplification (positive-feedback) model in which heating reduces resistance, which increases current and produces further heating, leading to accelerating current gains; and (2) a self-limiting (negative-feedback) model in which radiative and convective heat loss grows with temperature, partially offsetting the heating contribution of each voltage step. Data are shown in Figure 1.',
        dataContext: { context: 'thermistor circuit response', xLabel: 'Voltage step', yLabel: 'Current', xUnit: 'step', yUnit: 'mA' },
        domain: 'physics',
        sourceSlug: 'mcat-physics-electricity',
        positiveHypothesis: 'Joule heating creates a runaway reduction in resistance that accelerates current gains',
        negativeHypothesis: 'convective and radiative heat loss partially offsets heating at higher voltages, limiting current gains',
        mechanismVariable: 'circuit current',
      },
    ]),
    'cell-mol-bio': buildSciencePassageBlocks([
      {
        title: 'EGFR Signaling and Receptor Internalization',
        body: 'Investigators treated HeLa cells with increasing concentrations of epidermal growth factor (EGF) and measured downstream ERK phosphorylation (p-ERK) by western blot densitometry at 15 minutes post-stimulation. EGF binds the EGF receptor (EGFR), triggering receptor dimerization, autophosphorylation, and activation of the Ras-Raf-MEK-ERK cascade. However, ligand binding also promotes clathrin-mediated endocytosis of EGFR, removing active receptors from the membrane. Two competing hypotheses were evaluated: (1) at higher EGF concentrations, increased receptor occupancy amplifies cascade activation faster than internalization can clear receptors (positive feedback on signal output); (2) at higher EGF concentrations, accelerated endocytosis and lysosomal degradation progressively dampen each additional unit of stimulus (negative feedback). The four EGF conditions and their p-ERK responses are presented in Figure 1.',
        dataContext: { context: 'EGFR signaling dose-response', xLabel: '[EGF]', yLabel: 'p-ERK level', xUnit: 'nM', yUnit: 'arb units' },
        domain: 'cell-mol-bio',
        sourceSlug: 'mcat-biology',
        positiveHypothesis: 'increased EGFR occupancy amplifies ERK phosphorylation faster than receptor internalization can compensate',
        negativeHypothesis: 'accelerated receptor endocytosis and degradation progressively dampen signal output at higher EGF doses',
        mechanismVariable: 'downstream ERK phosphorylation',
      },
      {
        title: 'Lac Operon Induction Kinetics',
        body: 'Researchers measured β-galactosidase mRNA levels in E. coli at four time points after addition of the lactose analog IPTG. In the lac operon, allolactose (mimicked by IPTG) binds the lac repressor, relieving transcriptional repression and enabling RNA polymerase to transcribe lacZ. However, the resulting β-galactosidase also metabolizes intracellular lactose, and the cAMP-CRP activator complex loses activity as glucose is regenerated from galactose metabolism. Two models were proposed: (1) sustained amplification, in which early enzyme production accelerates inducer accumulation and further de-repression; (2) self-limiting induction, in which downstream metabolism reduces inducer levels and cAMP-CRP activity declines, causing transcription gains to taper over time. Data are shown in Figure 1.',
        dataContext: { context: 'lac operon induction time course', xLabel: 'Time', yLabel: 'lacZ mRNA', xUnit: 'h', yUnit: 'fold' },
        domain: 'cell-mol-bio',
        sourceSlug: 'mcat-biology',
        positiveHypothesis: 'early enzyme production accelerates inducer accumulation and further de-repression of the operon',
        negativeHypothesis: 'downstream metabolism reduces inducer concentration and cAMP-CRP activity, causing transcription gains to taper',
        mechanismVariable: 'lacZ transcript levels',
      },
    ]),
    'psych-soc': buildSciencePassageBlocks([
      {
        title: 'Distributed Practice and Long-Term Retention',
        body: 'A cognitive psychologist compared recall performance in 200 undergraduate participants randomly assigned to four spaced-review schedules of increasing inter-session interval (conditions 1–4). Participants studied the same 60-word list and were tested 7 days after the final review session. Previous research suggests two possibilities: (1) a spacing-benefit amplification model, in which longer intervals promote deeper encoding and increasingly greater retrieval-practice gains; (2) a diminishing-returns model, in which benefits plateau once optimal consolidation intervals are reached and further spacing adds retrieval difficulty without proportional memory benefit. Data are shown in Figure 1.',
        dataContext: { context: 'distributed practice outcomes', xLabel: 'Spacing level', yLabel: 'Recall score', xUnit: 'level', yUnit: 'points' },
        domain: 'psych-soc',
        sourceSlug: 'mcat-psychology-sociology',
        positiveHypothesis: 'longer spacing intervals promote deeper encoding and produce accelerating retrieval-practice gains',
        negativeHypothesis: 'benefits plateau once optimal consolidation intervals are reached and further spacing yields diminishing returns',
        mechanismVariable: 'recall performance',
      },
      {
        title: 'Perceived Stress and Cognitive Error Rates',
        body: 'A longitudinal study tracked 350 adults across four perceived-stress-index quartiles and measured cognitive error rates on a sustained-attention task. The Yerkes-Dodson framework predicts an inverted-U relationship between arousal and performance, but within a monotonically increasing stress range, two sub-models are debated: (1) a stress-amplification (positive-feedback) model, in which each increment of perceived stress disrupts executive control and compounds attentional lapses; (2) an allostatic adaptation (negative-feedback) model, in which HPA-axis habituation and coping-strategy deployment partially buffer error-rate increases at higher stress quartiles. Data are shown in Figure 1.',
        dataContext: { context: 'stress and cognitive error outcomes', xLabel: 'Stress quartile', yLabel: 'Error rate', xUnit: 'quartile', yUnit: '%' },
        domain: 'psych-soc',
        sourceSlug: 'mcat-psychology-sociology',
        positiveHypothesis: 'each stress increment compounds attentional lapses through disrupted executive control',
        negativeHypothesis: 'HPA-axis habituation and coping strategies partially buffer error-rate increases at higher stress levels',
        mechanismVariable: 'cognitive error rates',
      },
    ]),
    cars: buildCarsPassageBlocks('cars', 'mcat-cars'),
  }
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
  const passageBank = buildPassageQuestionBank()
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

  return {
    questions: shuffle(selectedQuestions),
    domains: DIAGNOSTIC_DOMAINS,
    totalQuestions: selectedQuestions.length,
    timeLimitMinutes: 55,
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

  // Score estimation per section (118-132 range)
  function sectionScore(sectionId: string): number {
    const sectionDomains = domainResults.filter(d => d.section === sectionId)
    const correct = sectionDomains.reduce((s, d) => s + d.correct, 0)
    const total = sectionDomains.reduce((s, d) => s + d.total, 0)
    const pct = total > 0 ? correct / total : 0
    return Math.round(118 + pct * 14) // 118-132 range
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
  const recommendedTopics = domainResults
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
    // Dedupe: multiple legacy slugs can canonicalize to the same topic.
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
