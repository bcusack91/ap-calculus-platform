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
      xUnit: string
      yUnit: string
    }
    figure?: {
      title: string
      seriesLabel: string
      xValues: number[]
      yValues: number[]
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
      xUnit: string
      yUnit: string
    }
    figure?: {
      title: string
      seriesLabel: string
      xValues: number[]
      yValues: number[]
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

function buildPassageVisual(context: FigureContext, yValues: number[]) {
  return {
    dataTable: {
      title: 'Table 1',
      xLabel: context.xLabel,
      yLabel: context.yLabel,
      xValues: [...FIGURE_X_VALUES],
      yValues: [...yValues],
      xUnit: context.xUnit,
      yUnit: context.yUnit,
    },
    figure: {
      title: `Figure 1 (${context.context})`,
      seriesLabel: context.yLabel,
      xValues: [...FIGURE_X_VALUES],
      yValues: [...yValues],
      xUnit: context.xUnit,
      yUnit: context.yUnit,
    },
  }
}

function buildSeriesValues(slope: number, intercept: number, seed: number): number[] {
  const base = intercept + slope
  const patternType = seed % 3

  if (patternType === 0) {
    return [
      base,
      base + slope,
      base + 2 * slope,
      base + 3 * slope,
    ]
  }

  if (patternType === 1) {
    const d1 = slope + 1
    const d2 = slope
    const d3 = Math.max(1, slope - 1)
    return [
      base,
      base + d1,
      base + d1 + d2,
      base + d1 + d2 + d3,
    ]
  }

  const d1 = 1
  const d2 = slope + 2
  const d3 = slope + 2
  return [
    base,
    base + d1,
    base + d1 + d2,
    base + d1 + d2 + d3,
  ]
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

function buildFigureSupplementQuestions(
  domainId: string,
  sourceSlug: string,
  contexts: FigureContext[],
): MCATDiagnosticQuestion[] {
  const questions: MCATDiagnosticQuestion[] = []

  contexts.forEach((context, ctxIdx) => {
    FIGURE_SLOPES.forEach((slope) => {
      FIGURE_INTERCEPTS.forEach((intercept) => {
        const yValues = buildSeriesValues(slope, intercept, ctxIdx + slope + intercept)
        const visual = buildPassageVisual(context, yValues)

        const yDelta = yValues[3] - yValues[1]
        const changeFromFirst = yValues[3] - yValues[0]
        const percentIncrease = Math.round((changeFromFirst / yValues[0]) * 100)
        const ratio4to2 = Number((yValues[3] / yValues[1]).toFixed(2))
        const pattern = classifyMarginalPattern(yValues)
        const reasoningVariant = (ctxIdx + slope + intercept) % 3

        const q1Choices = domainId === 'psych-soc'
          ? buildChoiceSet(
              pattern === 'accelerating'
                ? `Higher ${context.xLabel.toLowerCase()} is associated with increasingly larger gains in ${context.yLabel.toLowerCase()} across the measured range.`
                : pattern === 'diminishing'
                ? `Higher ${context.xLabel.toLowerCase()} is associated with gains in ${context.yLabel.toLowerCase()} that taper across later conditions.`
                : `Higher ${context.xLabel.toLowerCase()} is associated with roughly constant incremental gains in ${context.yLabel.toLowerCase()} across the measured range.`,
              [
                `${context.xLabel} directly causes changes in ${context.yLabel.toLowerCase()} in all populations, with no plausible confounding variables.`,
                `There is no measurable association between ${context.xLabel.toLowerCase()} and ${context.yLabel.toLowerCase()} in the observed sample.`,
                `The relationship must reverse once additional unmeasured groups are included.`,
              ],
            )
          : buildChoiceSet(
              `${ratio4to2}x`,
              [
                `${Number((ratio4to2 + 0.25).toFixed(2))}x`,
                `${Number(Math.max(0.5, ratio4to2 - 0.25).toFixed(2))}x`,
                `${Number((ratio4to2 + 0.5).toFixed(2))}x`,
              ],
            )

        questions.push({
          id: `${domainId}-fig-${ctxIdx}-${slope}-${intercept}-a`,
          question:
            domainId === 'psych-soc'
              ? `Which statement is best supported by the observed association between ${context.xLabel.toLowerCase()} and ${context.yLabel.toLowerCase()}?`
              : `Relative to condition 2, condition 4 shows approximately what multiple of ${context.yLabel.toLowerCase()}?`,
          options: q1Choices.options,
          correctAnswer: q1Choices.correctAnswer,
          explanation:
            domainId === 'psych-soc'
              ? `The data support an association pattern across measured conditions, but they do not by themselves prove causation or universal generalization. The best answer matches the observed pattern (${pattern}).`
              : `Compute a ratio instead of a simple difference: condition4 / condition2 = ${yValues[3]} / ${yValues[1]} = ${ratio4to2}x.`,
          domain: domainId,
          sourceSlug,
          difficulty: 'easy',
          family: 'figure-analysis',
          promptType: 'figure',
          visual,
        })

        const q2Choices = domainId === 'psych-soc'
          ? reasoningVariant === 0
            ? buildChoiceSet(
                `The association remains similar after stratifying by a plausible confound and adjusting for baseline group differences.`,
                [
                  `The largest subgroup in condition 4 also has the highest ${context.yLabel.toLowerCase()} without adjustment for baseline differences.`,
                  `A single additional site reports a similar direction of association, but with missing data on key demographics.`,
                  `Participants in condition 4 report greater motivation after viewing their own performance outcomes.`,
                ],
              )
            : reasoningVariant === 1
            ? buildChoiceSet(
                `Prospective measurements show changes in ${context.xLabel.toLowerCase()} precede later shifts in ${context.yLabel.toLowerCase()} after controlling baseline ${context.yLabel.toLowerCase()}.`,
                [
                  `A larger cross-sectional sample shows the same trend at one time point.`,
                  `Condition 4 has the highest mean ${context.yLabel.toLowerCase()} in a post-hoc subgroup analysis.`,
                  `Participants self-report that ${context.yLabel.toLowerCase()} feels related to ${context.xLabel.toLowerCase()}.`,
                ],
              )
            : buildChoiceSet(
                `The effect size remains stable after inverse-probability weighting that corrects for differential dropout by baseline characteristics.`,
                [
                  `Participants with complete follow-up show a larger association than the full recruited sample.`,
                  `Only participants above the median ${context.xLabel.toLowerCase()} are retained for final analysis.`,
                  `A single-site replication keeps similar means but does not report attrition patterns.`,
                ],
              )
          : buildChoiceSet(
              `${percentIncrease}%`,
              [
                `${Math.max(0, percentIncrease - 10)}%`,
                `${percentIncrease + 10}%`,
                `${percentIncrease + 20}%`,
              ],
            )

        questions.push({
          id: `${domainId}-fig-${ctxIdx}-${slope}-${intercept}-b`,
          question:
            domainId === 'psych-soc'
              ? reasoningVariant === 0
                ? `Which additional result would most strengthen the claim that the observed association is not primarily driven by confounding?`
                : reasoningVariant === 1
                ? `Which additional result would most strengthen a directional interpretation from ${context.xLabel.toLowerCase()} to ${context.yLabel.toLowerCase()}?`
                : `Which additional result would most reduce concern that selection bias is driving the observed association?`
              : `Relative to condition 1, what is the approximate percent increase in ${context.yLabel.toLowerCase()} at condition 4?`,
          options: q2Choices.options,
          correctAnswer: q2Choices.correctAnswer,
          explanation:
            domainId === 'psych-soc'
              ? reasoningVariant === 0
                ? `The strongest support comes from persistence of the association after explicit control for plausible confounders and baseline differences, which improves causal interpretability without overclaiming.`
                : reasoningVariant === 1
                ? `Directional inference is stronger when temporal precedence is demonstrated and baseline outcome differences are controlled, reducing reverse-causation ambiguity.`
                : `Selection-bias concerns are best addressed when analysis corrects differential dropout and the effect remains stable after that correction.`
              : `Percent increase = (condition4 - condition1) / condition1 x 100 = (${yValues[3]} - ${yValues[0]}) / ${yValues[0]} x 100 ≈ ${percentIncrease}%.`,
          domain: domainId,
          sourceSlug,
          difficulty: 'easy',
          family: 'figure-analysis',
          promptType: 'figure',
          visual,
        })

        const hardClaim =
          domainId === 'psych-soc'
            ? pattern === 'diminishing'
              ? `The observed association appears to show diminishing marginal increases in ${context.yLabel.toLowerCase()} at higher ${context.xLabel.toLowerCase()} levels, but the data alone do not establish causality.`
              : pattern === 'accelerating'
              ? `The observed association appears to strengthen at higher ${context.xLabel.toLowerCase()} levels, but causal direction and confounding remain unresolved from these data alone.`
              : `The observed association is approximately linear across measured conditions, but causal claims and broad generalization are not justified by this dataset alone.`
            : pattern === 'diminishing'
            ? `The response shows diminishing marginal gains as ${context.xLabel.toLowerCase()} increases.`
            : pattern === 'accelerating'
            ? `The response accelerates at higher ${context.xLabel.toLowerCase()} conditions.`
            : `The response is approximately linear across measured conditions.`

        const hardDistractors =
          domainId === 'psych-soc'
            ? [
                `Because higher ${context.xLabel.toLowerCase()} levels align with higher ${context.yLabel.toLowerCase()}, the figure proves a causal effect in the sampled population.`,
                `The observed trend can be generalized to all populations because four ordered conditions were measured.`,
                `Without variability estimates (such as error bars or confidence intervals), no directional pattern can be interpreted from the figure at all.`,
              ]
            : pattern === 'diminishing'
            ? [
                `The response accelerates at higher ${context.xLabel.toLowerCase()} conditions.`,
                `The response is approximately linear across measured conditions.`,
                `The response is incompatible with any trend interpretation.`,
              ]
            : pattern === 'accelerating'
            ? [
                `The response shows diminishing marginal gains as ${context.xLabel.toLowerCase()} increases.`,
                `The response is approximately linear across measured conditions.`,
                `The response is incompatible with any trend interpretation.`,
              ]
            : [
                `The response shows diminishing marginal gains as ${context.xLabel.toLowerCase()} increases.`,
                `The response accelerates at higher ${context.xLabel.toLowerCase()} conditions.`,
                `The response is incompatible with any trend interpretation.`,
              ]

        const q3Choices = buildChoiceSet(hardClaim, hardDistractors)

        const feedbackPattern = inferFeedbackPattern(yValues)
        const feedbackPrompt = `Which feedback interpretation best matches how ${context.yLabel.toLowerCase()} changes as ${context.xLabel.toLowerCase()} increases?`
        const feedbackChoices = buildChoiceSet(
          feedbackPattern === 'positive'
            ? `A positive-feedback-like pattern, because later condition-to-condition gains are larger than earlier gains.`
            : feedbackPattern === 'negative'
            ? `A negative-feedback-like pattern, because gains dampen across later conditions.`
            : `No strong feedback signature is evident; changes are approximately linear across conditions.`,
          [
            `A positive-feedback-like pattern, because any increase across conditions proves runaway amplification.`,
            `A negative-feedback-like pattern, because any increase must imply homeostatic suppression.`,
            `No interpretation is possible from ordered-condition trends unless significance testing is shown.`,
          ],
        )

        questions.push({
          id: `${domainId}-fig-${ctxIdx}-${slope}-${intercept}-c`,
          question:
            domainId === 'psych-soc'
              ? `Which interpretation best fits the observed trend while respecting limits of observational behavioral data?`
              : `Which interpretation is best supported by the pattern of first differences across the four conditions?`,
          options: q3Choices.options,
          correctAnswer: q3Choices.correctAnswer,
          explanation:
            domainId === 'psych-soc'
              ? `First-difference pattern supports the selected association trend, but the figure alone cannot rule out confounding, establish causal direction, or justify universal generalization.`
              : `Compare stepwise changes: (${yValues[1]}-${yValues[0]}), (${yValues[2]}-${yValues[1]}), (${yValues[3]}-${yValues[2]}). Their pattern supports the selected interpretation.`,
          domain: domainId,
          sourceSlug,
          difficulty: 'hard',
          family: 'figure-analysis',
          promptType: 'figure',
          visual,
        })

        questions.push({
          id: `${domainId}-fig-${ctxIdx}-${slope}-${intercept}-fb`,
          question: feedbackPrompt,
          options: feedbackChoices.options,
          correctAnswer: feedbackChoices.correctAnswer,
          explanation:
            feedbackPattern === 'positive'
              ? `First differences increase across conditions, which is most consistent with a positive-feedback-like amplification pattern in this plotted range.`
              : feedbackPattern === 'negative'
              ? `First differences shrink across conditions, which is most consistent with a negative-feedback-like damping pattern in this plotted range.`
              : `First differences are approximately constant, so the trend is linear and does not strongly favor positive or negative feedback.`,
          domain: domainId,
          sourceSlug,
          difficulty: 'hard',
          family: 'figure-analysis',
          promptType: 'figure',
          visual,
        })

        if (domainId === 'psych-soc') {
          const q4Choices = buildChoiceSet(
            `Run a longitudinal follow-up that measures baseline ${context.yLabel.toLowerCase()}, then prospectively measures later ${context.yLabel.toLowerCase()} after changes in ${context.xLabel.toLowerCase()}.`,
            [
              `Increase sample size at one cross-sectional time point and compare updated means only.`,
              `Remove intermediate conditions so only condition 1 and 4 remain in the final plot.`,
              `Retain only participants with the most extreme ${context.xLabel.toLowerCase()} values to increase contrast.`,
            ],
          )

          questions.push({
            id: `${domainId}-fig-${ctxIdx}-${slope}-${intercept}-d`,
            question: `Which follow-up design most directly tests whether reverse causation could explain this association?`,
            options: q4Choices.options,
            correctAnswer: q4Choices.correctAnswer,
            explanation: `Reverse-causation concerns are best tested with temporal ordering: establish baseline outcome levels, then evaluate whether exposure changes precede later outcome changes.`,
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
      const yValues = buildSeriesValues(slope, intercept, variant + index)
      const passageId = `${context.domain}-passage-${index}-${variant}`
      const body = context.body
      const visual = context.dataContext ? buildPassageVisual(context.dataContext, yValues) : null
      const basePassage = {
        id: passageId,
        title: context.title,
        body,
        ...(visual ?? {}),
      }

      const rateChange = yValues[3] - yValues[1]
      const trendClaim =
        classifyMarginalPattern(yValues) === 'diminishing'
          ? 'diminishing marginal gains'
          : classifyMarginalPattern(yValues) === 'accelerating'
          ? 'accelerating response'
          : 'approximately linear response'
      const normalizedFold = Number((yValues[3] / yValues[0]).toFixed(2))

      const q1 = buildChoiceSet(
        `${normalizedFold}x`,
        [
          `${Number((normalizedFold + 0.25).toFixed(2))}x`,
          `${Number(Math.max(0.5, normalizedFold - 0.25).toFixed(2))}x`,
          `${Number((normalizedFold + 0.5).toFixed(2))}x`,
        ],
      )
      questions.push({
        id: `${passageId}-q1`,
        question: 'After normalizing to condition 1, what is the fold-change at condition 4?',
        options: q1.options,
        correctAnswer: q1.correctAnswer,
        explanation: `Fold-change at condition 4 = condition4 / condition1 = ${yValues[3]} / ${yValues[0]} = ${normalizedFold}x.`,
        domain: context.domain,
        sourceSlug: context.sourceSlug,
        difficulty: 'medium',
        family: 'passage-data-interpretation',
        promptType: 'passage',
        passage: basePassage,
      })

      // q2 — Mechanism-integration question: link data trend to passage hypothesis
      const dataPattern = classifyMarginalPattern(yValues)
      const posHyp = context.positiveHypothesis ?? 'amplification dominates across conditions'
      const negHyp = context.negativeHypothesis ?? 'a damping mechanism limits later gains'
      const mechVar = context.mechanismVariable ?? 'the measured response'
      const q2Stem = `Based on the data in Figure 1 and the competing hypotheses described in the passage, which conclusion about ${mechVar} is best supported?`
      const q2Correct =
        dataPattern === 'accelerating'
          ? `The data support the hypothesis that ${posHyp}, because condition-to-condition gains increase across later conditions.`
          : dataPattern === 'diminishing'
          ? `The data support the hypothesis that ${negHyp}, because condition-to-condition gains decrease across later conditions.`
          : `Neither hypothesis is strongly favored; the roughly constant condition-to-condition gains are consistent with a linear dose-response rather than a feedback mechanism.`
      const q2Distractors =
        dataPattern === 'accelerating'
          ? [
              `The data support the hypothesis that ${negHyp}, because ${mechVar} increases across all four conditions.`,
              `The data are inconclusive because both hypotheses predict an increase and additional control experiments are required to distinguish them.`,
              `Neither hypothesis applies because the data show a decrease in ${mechVar} between conditions 3 and 4.`,
            ]
          : dataPattern === 'diminishing'
          ? [
              `The data support the hypothesis that ${posHyp}, because ${mechVar} continues to increase at every condition.`,
              `The data are inconclusive because the total change from condition 1 to 4 is too small to distinguish the hypotheses.`,
              `Neither hypothesis applies because a damping mechanism would require ${mechVar} to decrease below baseline.`,
            ]
          : [
              `The data definitively confirm that ${posHyp} because any monotonic increase proves amplification.`,
              `The data definitively confirm that ${negHyp} because every condition shows a higher value than the previous one.`,
              `The data are uninterpretable without significance testing and therefore no conclusion can be drawn about either hypothesis.`,
            ]
      const q2 = buildChoiceSet(q2Correct, q2Distractors)
      questions.push({
        id: `${passageId}-q2`,
        question: q2Stem,
        options: q2.options,
        correctAnswer: q2.correctAnswer,
        explanation: `To distinguish the competing hypotheses, examine the first differences: (${yValues[1]}−${yValues[0]}), (${yValues[2]}−${yValues[1]}), (${yValues[3]}−${yValues[2]}). ${dataPattern === 'accelerating' ? 'These increase, supporting amplification.' : dataPattern === 'diminishing' ? 'These decrease, supporting a damping/negative-feedback mechanism.' : 'These are roughly constant, consistent with a linear response.'}`,
        domain: context.domain,
        sourceSlug: context.sourceSlug,
        difficulty: 'hard',
        family: 'passage-data-interpretation',
        promptType: 'passage',
        passage: basePassage,
      })

      const q3 = buildChoiceSet(
        'Include a matched control and randomize condition assignment before repeating the measurement.',
        [
          'Extrapolate one additional condition and treat it as causal confirmation.',
          'Average only the top two conditions to reduce noise and declare significance.',
          'Discard condition 1 because baseline values can bias trend interpretation.',
        ],
      )
      questions.push({
        id: `${passageId}-q3`,
        question: 'Which follow-up design change would most strengthen a causal inference from these data?',
        options: q3.options,
        correctAnswer: q3.correctAnswer,
        explanation: 'The strongest causal upgrade is to reduce confounding and selection bias with matched controls and randomized assignment before repeating measurements.',
        domain: context.domain,
        sourceSlug: context.sourceSlug,
        difficulty: 'hard',
        family: 'passage-data-interpretation',
        promptType: 'passage',
        passage: basePassage,
      })

      const feedbackPattern = inferFeedbackPattern(yValues)
      const expectedFeedback: 'positive' | 'negative' = (variant + index) % 2 === 0 ? 'negative' : 'positive'
      const observedDescription =
        feedbackPattern === 'positive'
          ? 'later condition-to-condition gains are larger than early gains'
          : feedbackPattern === 'negative'
          ? 'later condition-to-condition gains are smaller than early gains'
          : 'condition-to-condition gains are roughly constant'
      const q4Correct =
        feedbackPattern === 'neutral'
          ? 'The trend is roughly linear, so the figure does not strongly distinguish positive from negative feedback in this range.'
          : feedbackPattern === expectedFeedback
          ? `The figure is consistent with the proposed ${expectedFeedback}-feedback model because ${observedDescription}.`
          : `The figure challenges the proposed ${expectedFeedback}-feedback model and is more consistent with ${feedbackPattern} feedback because ${observedDescription}.`
      const q4 = buildChoiceSet(q4Correct, [
        `The figure proves a universal causal feedback law that must generalize to all populations and conditions.`,
        `Any monotonic increase is definitive evidence for positive feedback regardless of changes in first differences.`,
        `The data are uninterpretable unless the graph first decreases below baseline.`,
      ])

      questions.push({
        id: `${passageId}-q4`,
        question: `Passage claim: increasing ${context.dataContext?.xLabel ?? 'the input'} triggers a ${expectedFeedback} feedback process in ${context.dataContext?.yLabel ?? 'the measured response'}. Based on the figure trend, which evaluation is best supported?`,
        options: q4.options,
        correctAnswer: q4.correctAnswer,
        explanation: `Feedback-model checks should compare first differences across ordered conditions. Here, ${observedDescription}, so the best-supported conclusion is the one that matches this pattern without overgeneralizing causality.`,
        domain: context.domain,
        sourceSlug: context.sourceSlug,
        difficulty: 'hard',
        family: 'passage-data-interpretation',
        promptType: 'passage',
        passage: basePassage,
      })
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
      { context: 'acid-base titration checkpoints', xLabel: 'Buffer step', yLabel: 'pH', xUnit: 'step', yUnit: 'pH units' },
      { context: 'reaction concentration experiment', xLabel: '[Reactant]', yLabel: 'Initial rate', xUnit: 'mM', yUnit: 'units/min' },
      { context: 'gas law manipulation at fixed moles', xLabel: 'Temperature', yLabel: 'Pressure', xUnit: 'arb', yUnit: 'kPa' },
      { context: 'electrochem setup variation', xLabel: 'Ion gradient index', yLabel: 'Cell potential', xUnit: 'index', yUnit: 'mV' },
    ]),
    'org-chem': buildFigureSupplementQuestions('org-chem', 'mcat-organic-chemistry', [
      { context: 'SN1 solvent polarity series', xLabel: 'Polarity rank', yLabel: 'Substitution yield', xUnit: 'rank', yUnit: '%' },
      { context: 'E2 base-strength sweep', xLabel: 'Base index', yLabel: 'Alkene fraction', xUnit: 'index', yUnit: '%' },
      { context: 'chromatography solvent gradient', xLabel: 'Eluent step', yLabel: 'Retention factor', xUnit: 'step', yUnit: 'Rf units' },
      { context: 'carbonyl reduction conditions', xLabel: 'Reagent equivalents', yLabel: 'Product conversion', xUnit: 'equiv', yUnit: '%' },
    ]),
    physics: buildFigureSupplementQuestions('physics', 'mcat-physics-mechanics', [
      { context: 'constant-force cart experiment', xLabel: 'Time', yLabel: 'Velocity', xUnit: 's', yUnit: 'm/s' },
      { context: 'spring extension trial', xLabel: 'Load index', yLabel: 'Extension', xUnit: 'index', yUnit: 'mm' },
      { context: 'circuit resistance sweep', xLabel: 'Resistance step', yLabel: 'Current', xUnit: 'step', yUnit: 'mA' },
      { context: 'lens-object distance adjustments', xLabel: 'Distance setting', yLabel: 'Image height', xUnit: 'cm', yUnit: 'mm' },
    ]),
    'biochem-cp': buildFigureSupplementQuestions('biochem-cp', 'mcat-biochemistry', [
      { context: 'enzyme assay substrate series', xLabel: '[Substrate]', yLabel: 'Velocity', xUnit: 'mM', yUnit: 'umol/min' },
      { context: 'inhibitor titration panel', xLabel: '[Inhibitor]', yLabel: 'Residual activity', xUnit: 'mM', yUnit: '%' },
      { context: 'ATP demand workload steps', xLabel: 'Workload step', yLabel: 'ATP turnover', xUnit: 'step', yUnit: 'arb units' },
      { context: 'mitochondrial proton gradient states', xLabel: 'Gradient index', yLabel: 'ATP output', xUnit: 'index', yUnit: 'units' },
    ]),
    'cell-mol-bio': buildFigureSupplementQuestions('cell-mol-bio', 'mcat-biology', [
      { context: 'cell-cycle checkpoint stimulation', xLabel: 'Cyclin level', yLabel: 'Mitotic entry rate', xUnit: 'arb', yUnit: '%' },
      { context: 'receptor-ligand occupancy table', xLabel: '[Ligand]', yLabel: 'Bound receptor', xUnit: 'nM', yUnit: '%' },
      { context: 'gene-expression induction trial', xLabel: 'Stimulus duration', yLabel: 'mRNA abundance', xUnit: 'h', yUnit: 'fold' },
      { context: 'membrane transport channel counts', xLabel: 'Channel density', yLabel: 'Flux', xUnit: 'index', yUnit: 'arb units' },
    ]),
    'organ-systems': buildFigureSupplementQuestions('organ-systems', 'mcat-organ-systems', [
      { context: 'cardiac output demand protocol', xLabel: 'Exercise stage', yLabel: 'Cardiac output', xUnit: 'stage', yUnit: 'L/min' },
      { context: 'renal filtration challenge', xLabel: 'Perfusion step', yLabel: 'Filtration rate', xUnit: 'step', yUnit: 'mL/min' },
      { context: 'pulmonary ventilation loading', xLabel: 'Ventilation setting', yLabel: 'O2 uptake', xUnit: 'index', yUnit: 'mL/min' },
      { context: 'endocrine dose-response test', xLabel: 'Hormone dose', yLabel: 'Physiologic response', xUnit: 'arb', yUnit: '%' },
    ]),
    genetics: buildFigureSupplementQuestions('genetics', 'mcat-genetics-evolution', [
      { context: 'allele frequency drift simulation', xLabel: 'Generation', yLabel: 'Allele A frequency', xUnit: 'gen', yUnit: '%' },
      { context: 'selection pressure gradient', xLabel: 'Selection index', yLabel: 'Trait prevalence', xUnit: 'index', yUnit: '%' },
      { context: 'linkage mapping recombination panel', xLabel: 'Map interval', yLabel: 'Recombinants', xUnit: 'interval', yUnit: '%' },
      { context: 'population bottleneck recovery', xLabel: 'Recovery step', yLabel: 'Heterozygosity', xUnit: 'step', yUnit: '%' },
    ]),
    'psych-soc': buildFigureSupplementQuestions('psych-soc', 'mcat-psychology-sociology', [
      { context: 'memory recall intervention', xLabel: 'Spacing condition', yLabel: 'Recall score', xUnit: 'condition', yUnit: 'points' },
      { context: 'stress-load survey cohort', xLabel: 'Stress index', yLabel: 'Error rate', xUnit: 'index', yUnit: '%' },
      { context: 'social network density study', xLabel: 'Network density', yLabel: 'Conformity likelihood', xUnit: 'rank', yUnit: '%' },
      { context: 'community resource access tiers', xLabel: 'Access tier', yLabel: 'Health outcome index', xUnit: 'tier', yUnit: 'score' },
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
        const yValues = buildSeriesValues(slope, intercept, ctxIdx + slope + intercept)
        const visual = buildPassageVisual(context, yValues)
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
          'Any monotonic increase is sufficient to prove positive feedback and causal direction.',
          'Feedback classification is impossible unless the curve crosses below baseline first.',
          'The graph proves universal causality across all populations and conditions.',
        ])

        questions.push({
          id: `${context.domain}-feedback-${ctxIdx}-${slope}-${intercept}-model`,
          question: `Passage claim: In a ${context.system}, increasing ${context.xLabel.toLowerCase()} should produce a ${claimedFeedback} feedback response in ${context.yLabel.toLowerCase()}. Which evaluation is best supported by the graph?`,
          options: evalChoices.options,
          correctAnswer: evalChoices.correctAnswer,
          explanation: `Evaluate feedback hypotheses by comparing first differences across ordered conditions. Here, ${observationSummary}; choose the option that matches that pattern without over-claiming causality.`,
          domain: context.domain,
          sourceSlug: context.sourceSlug,
          difficulty: 'hard',
          family: 'feedback-loop-reasoning',
          promptType: 'figure',
          visual,
        })

        const followupChoices = buildChoiceSet(
          `Perturb the putative feedback mediator while holding ${context.xLabel.toLowerCase()} fixed, then test whether the ${context.yLabel.toLowerCase()} trend shape changes as predicted.`,
          [
            'Repeat the same four conditions once and conclude causality if the rank order is unchanged.',
            'Drop intermediate conditions to compare only baseline vs highest condition for a cleaner graph.',
            'Increase sample size without measuring any mediator and treat stronger p-values as proof of feedback sign.',
          ],
        )

        questions.push({
          id: `${context.domain}-feedback-${ctxIdx}-${slope}-${intercept}-design`,
          question: `Which follow-up experiment would most directly test whether the observed pattern is driven by the proposed feedback loop rather than a simple direct effect?`,
          options: followupChoices.options,
          correctAnswer: followupChoices.correctAnswer,
          explanation: `The strongest feedback test manipulates the mediator hypothesized to close the loop and checks whether trend shape changes in the predicted direction.`,
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

  const recommendedTopics = domainResults
    .filter(d => d.level === 'weak' || d.level === 'moderate')
    .flatMap(d => {
      const domain = DIAGNOSTIC_DOMAINS.find(dom => dom.id === d.domainId)
      return (domain?.slugs ?? []).map(slug => ({
        slug,
        name: d.domainName,
        priority: d.level === 'weak' ? 'high' as const : 'medium' as const,
      }))
    })

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
    recommendedTopics,
  }
}
