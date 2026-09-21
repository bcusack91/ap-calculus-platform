/**
 * MCAT Diagnostic Test Generator
 *
 * A 45-question assessment that samples across all MCAT sections/domains
 * to identify student strengths and weaknesses.
 */

import { generateExitQuiz } from '../exit-quizzes'
import { matchSubtopic, MCAT_SUBTOPIC_MAP } from './subtopic-map'
import { CARS_PASSAGES, SECTION_PASSAGES } from '../mcat/passages'
import type { MCATFigureSpec, MCATPassage } from '../mcat/types'
import { sectionScaledScore } from '@/lib/mcat-scoring'
import { arrangeInPassageBlocks } from '@/lib/mcat-diagnostic-order'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

import { buildFigureAnalysisQuestions, buildFeedbackQuestions } from './figure-items'
import { FIGURE_DOMAINS, FEEDBACK_CONTEXTS } from './figure-contexts'

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
    /**
     * The study the figure comes from. On the real MCAT a figure always sits in
     * a passage describing what was done; a bare figure is not an exam format.
     * Kept on `visual` rather than `passage` on purpose: the selection logic
     * treats any question with a `passage` as an authored-passage item (skipping
     * seen-stem dedup, excluding it from top-ups), which generated items are not.
     */
    study?: { title: string; body: string }
    dataTable?: {
      title: string
      /** Column header for the x-levels ("Condition", "Group", "Time point"). */
      pointLabel?: string
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
    /** Authored markdown figure/data block (may hold a pipe table and $…$ math); render as rich text. */
    figureMarkdown?: string
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
  /** The domain's primary topic slugs: question banks AND study recommendations. */
  slugs: string[]
  /**
   * Extra exit-quiz banks drawn for questions only, never recommended as
   * domain-level topics. Recommending all of them would let one weak domain
   * fill every recommendation slot.
   */
  bankSlugs?: string[]
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
// Chem/Phys 11, CARS 12, Bio/Biochem 11, Psych/Soc 11 of 45. The old layout
// gave Chem/Phys 40% and Psych/Soc 13%, which made the CARS and Psych/Soc
// scaled-score estimates swing ~2.3 points per single item.
//
// CARS is all passages (3 × 4-question sets), like the real section. The
// standalone CARS pool was only ~43 unique questions, far short of the 105
// that 15 back-to-back attempts need, while the authored CARS bank holds 76
// passages.
//
// `bankSlugs` add every other exit-quiz bank for a domain. The organ systems
// and genetics parent banks hold only 16 and 15 questions; their subtopic banks
// bring the unique pools to ~147 and ~91, enough for 15 attempts with no
// repeats.
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
    questionCount: 12,
  },
  // Bio/Biochem
  {
    id: 'cell-mol-bio',
    name: 'Cell & Molecular Biology',
    section: 'bio-biochem',
    slugs: ['mcat-biology'],
    questionCount: 4,
    difficultyMix: { easy: 1, medium: 2, hard: 1 },
  },
  {
    id: 'organ-systems',
    name: 'Organ Systems & Physiology',
    section: 'bio-biochem',
    slugs: ['mcat-organ-systems'],
    bankSlugs: [
      'mcat-organ-systems-cardiovascular-mcat',
      'mcat-organ-systems-endocrine-nervous-mcat',
      'mcat-organ-systems-renal-mcat',
      'mcat-organ-systems-respiratory-mcat',
    ],
    questionCount: 4,
    difficultyMix: { easy: 1, medium: 2, hard: 1 },
  },
  {
    id: 'genetics',
    name: 'Genetics & Evolution',
    section: 'bio-biochem',
    slugs: ['mcat-genetics-evolution'],
    bankSlugs: [
      'mcat-genetics-evolution-mcat',
      'mcat-genetics-evolution-mendelian-mcat',
      'mcat-genetics-evolution-natural-selection-mcat',
      'mcat-genetics-evolution-population-genetics-mcat',
    ],
    questionCount: 3,
    difficultyMix: { easy: 0, medium: 2, hard: 1 },
  },
  // Psych/Soc
  {
    id: 'psych-soc',
    name: 'Psychology & Sociology',
    section: 'psych-soc',
    slugs: ['mcat-psychology-sociology'],
    questionCount: 11,
    difficultyMix: { easy: 2, medium: 5, hard: 4 },
  },
]

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

  // One question per (context, variant). This used to loop 160 times over the
  // same 20 combinations, producing identical questions under different ids:
  // they slipped past the id-based "already seen" exclusion and could appear
  // twice in one test.
  for (let i = 0; i < contexts.length * 4; i += 1) {
    const ctx = contexts[Math.floor(i / 4)]
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

/** Request size that returns an exit-quiz bank in full (largest MCAT bank is ~500). */
const FULL_EXIT_BANK = 100_000

/** Candidate passages per section fed to the block selector (tier order preserved). */
const MAX_AUTHORED_CANDIDATES = 10

/**
 * Passage sets per section, served like the real exam's passage blocks:
 * CARS 3 × 4 questions, and each science section 2 × 3. The science sections
 * used to serve a single 2–4 question set, which made them ~80% discrete; the
 * real exam is ~75% passage-based. Two short sets (6 of 11) keep a 45-question
 * diagnostic broad while moving it well toward the real balance.
 */
const SECTION_PASSAGE_BLOCKS: Record<string, number> = { cars: 3, 'chem-phys': 2, 'bio-biochem': 2, 'psych-soc': 2 }

interface AuthoredSectionConfig {
  /** Bank key: the section id. */
  key: string
  /** Contiguous questions served per passage set. */
  windowSize: number
  passages: MCATPassage[]
  family: string
  /** Diagnostic domain credited for a passage's questions, by discipline. */
  domainFor: (passage: MCATPassage) => string
  sourceSlugFor: (passage: MCATPassage) => string
}

function authoredDomainConfigs(): AuthoredSectionConfig[] {
  const chemPhysDomain = (p: MCATPassage) =>
    p.discipline === 'physics'
      ? 'physics'
      : p.discipline === 'organic chemistry'
      ? 'org-chem'
      : p.discipline === 'biochemistry'
      ? 'biochem-cp'
      : 'gen-chem'
  const bioDomain = (p: MCATPassage) =>
    p.discipline === 'physiology' || p.discipline === 'immunology'
      ? 'organ-systems'
      : p.discipline === 'genetics'
      ? 'genetics'
      : 'cell-mol-bio'
  const chemPhysSlug = (p: MCATPassage) => {
    const domain = chemPhysDomain(p)
    if (domain === 'physics') {
      return /circuit|current|voltage|resist|electro|capacit|charge|magnet/i.test(p.passageText)
        ? 'mcat-physics-electricity'
        : 'mcat-physics-mechanics'
    }
    return domain === 'org-chem' ? 'mcat-organic-chemistry' : domain === 'biochem-cp' ? 'mcat-biochemistry' : 'mcat-general-chemistry'
  }
  const bioSlug = (p: MCATPassage) => {
    const domain = bioDomain(p)
    return domain === 'organ-systems' ? 'mcat-organ-systems' : domain === 'genetics' ? 'mcat-genetics-evolution' : 'mcat-biology'
  }
  return [
    {
      key: 'cars',
      windowSize: 4,
      passages: CARS_PASSAGES,
      family: 'cars-passage-reasoning',
      domainFor: () => 'cars',
      sourceSlugFor: () => 'mcat-cars',
    },
    {
      key: 'chem-phys',
      windowSize: 3,
      passages: SECTION_PASSAGES['chem-phys'],
      family: 'passage-data-interpretation',
      domainFor: chemPhysDomain,
      sourceSlugFor: chemPhysSlug,
    },
    {
      key: 'bio-biochem',
      windowSize: 3,
      passages: SECTION_PASSAGES['bio-biochem'],
      family: 'passage-data-interpretation',
      domainFor: bioDomain,
      sourceSlugFor: bioSlug,
    },
    {
      key: 'psych-soc',
      windowSize: 3,
      passages: SECTION_PASSAGES['psych-soc'],
      family: 'passage-data-interpretation',
      domainFor: () => 'psych-soc',
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
export function chartToPassageBlocks(chart: MCATFigureSpec): {
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
 * A passage is servable when it has enough questions to fill the domain's
 * window. The diagnostic renders passage bodies and markdown `figure` blocks
 * as rich text (pipe tables and $…$ math), like the full-length exam, so
 * passages with figures or tables are no longer excluded. Excluding them used
 * to drop 4 of 10 physics and 6 of 11 cell-biology passages.
 */
function isServablePassage(passage: MCATPassage, windowSize: number): boolean {
  return passage.questions.length >= windowSize
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
  config: AuthoredSectionConfig,
  passage: MCATPassage,
  start: number,
): MCATDiagnosticQuestion[] {
  const domainId = config.domainFor(passage)
  const blocks = passage.chart ? chartToPassageBlocks(passage.chart) : null
  const body = blocks?.legend ? `${passage.passageText}\n\n${blocks.legend}` : passage.passageText
  const passageBlock = {
    id: `authored-${passage.id}`,
    title: passage.title,
    body,
    ...(passage.figure ? { figureMarkdown: passage.figure } : {}),
    ...(blocks ? { dataTable: blocks.dataTable, figure: blocks.figure } : {}),
  }

  return passage.questions.slice(start, start + config.windowSize).map((q, offset) => {
    const questionIndex = start + offset
    return {
      // Id prefix is the credited domain, so passages that were already served
      // under a domain keep the same ids and the student's seen history.
      id: authoredQuestionId(domainId, passage, questionIndex),
      question: q.question,
      options: [...q.options],
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      domain: domainId,
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
  /** Preference tier per served passage id (0 = never seen, reviewed). */
  passageTier: Map<string, number>
} {
  const bank: Record<string, MCATDiagnosticQuestion[]> = {}
  const passageMeta = new Map<string, MCATDiagnosticPassageSource>()
  const passageTier = new Map<string, number>()

  for (const config of authoredDomainConfigs()) {
    const annotated = config.passages
      .filter((p) => isServablePassage(p, config.windowSize))
      .map((p) => ({
        passage: p,
        window: chooseAuthoredWindow(p, config.windowSize, excludeQuestionIds, config.domainFor(p)),
      }))

    const fullyUnseen = annotated.filter((a) => a.window.unseen === config.windowSize)
    // A passage the student has never seen at all, not merely one with a
    // fresh window of questions. Re-serving a seen passage with its next
    // window repeats the same passage text, which reads as a repeat.
    const neverSeen = fullyUnseen.filter(
      (a) => !a.passage.questions.some((_, i) => excludeQuestionIds.has(authoredQuestionId(config.domainFor(a.passage), a.passage, i))),
    )
    const reviewed = (list: typeof annotated) => list.filter((a) => !a.passage.needsReview)
    const drafts = (list: typeof annotated) => list.filter((a) => a.passage.needsReview)

    // Order: never-seen passages, then a fresh window of an already-seen
    // passage, then anything. Within each tier, reviewed passages come before
    // drafts, so drafts are used only when the reviewed pool has run dry.
    const tiers = [
      reviewed(neverSeen),
      drafts(neverSeen),
      reviewed(fullyUnseen),
      drafts(fullyUnseen),
      reviewed(annotated),
      annotated,
    ]
    // Candidates in tier order (shuffled within a tier), so a section that
    // needs two sets can take the second from the next tier when the best tier
    // holds only one passage.
    const placed = new Set<string>()
    const ordered: Array<{ a: (typeof annotated)[number]; tier: number }> = []
    tiers.forEach((tier, t) => {
      for (const a of shuffle(tier)) {
        if (placed.has(a.passage.id)) continue
        placed.add(a.passage.id)
        ordered.push({ a, tier: t })
      }
    })
    const candidates = ordered.slice(0, MAX_AUTHORED_CANDIDATES)
    if (candidates.length === 0) continue

    bank[config.key] = candidates.flatMap(({ a }) => authoredWindowToQuestions(config, a.passage, a.window.start))
    for (const { a, tier } of candidates) {
      passageTier.set(`authored-${a.passage.id}`, tier)
      passageMeta.set(`authored-${a.passage.id}`, {
        passageId: a.passage.id,
        title: a.passage.title,
        domainId: config.domainFor(a.passage),
        needsReview: Boolean(a.passage.needsReview) || a.window.flagged > 0,
      })
    }
  }

  return { bank, passageMeta, passageTier }
}

/**
 * Pick `blockCount` whole passage sets from a section's tiered candidates.
 * Earlier (less-seen) tiers are used first; within a tier, sets from
 * different domains are preferred so one attempt covers more content areas.
 */
function selectPassageBlocks(
  candidates: MCATDiagnosticQuestion[],
  blockCount: number,
  passageTier: Map<string, number>,
): MCATDiagnosticQuestion[] {
  const groups: MCATDiagnosticQuestion[][] = []
  const indexById = new Map<string, number>()
  for (const q of candidates) {
    const id = q.passage!.id
    let index = indexById.get(id)
    if (index === undefined) {
      index = groups.length
      indexById.set(id, index)
      groups.push([])
    }
    groups[index].push(q)
  }
  const tierOf = (g: MCATDiagnosticQuestion[]) => passageTier.get(g[0].passage!.id) ?? 0
  const picked: MCATDiagnosticQuestion[][] = []
  for (const tier of [...new Set(groups.map(tierOf))].sort((a, b) => a - b)) {
    const inTier = groups.filter((g) => tierOf(g) === tier)
    const usedDomains = new Set(picked.map((g) => g[0].domain))
    for (const g of inTier) {
      if (picked.length >= blockCount) break
      if (usedDomains.has(g[0].domain)) continue
      picked.push(g)
      usedDomains.add(g[0].domain)
    }
    for (const g of inTier) {
      if (picked.length >= blockCount) break
      if (!picked.includes(g)) picked.push(g)
    }
    if (picked.length >= blockCount) break
  }
  return picked.flat()
}

/**
 * Standalone questions per domain once a section's passage sets are placed.
 * Each section still totals its domains' questionCount. A domain credited with
 * passage questions needs fewer standalones; a domain with none keeps at least
 * one, so every content area is still measured.
 */
function allocateStandaloneQuota(passageCountByDomain: Map<string, number>): Map<string, number> {
  const quota = new Map<string, number>()
  for (const section of [...new Set(DIAGNOSTIC_DOMAINS.map((d) => d.section))]) {
    const domains = DIAGNOSTIC_DOMAINS.filter((d) => d.section === section)
    const total = domains.reduce((n, d) => n + d.questionCount, 0)
    const passageQs = domains.reduce((n, d) => n + (passageCountByDomain.get(d.id) ?? 0), 0)
    const need = Math.max(0, total - passageQs)
    const floor = (id: string) => ((passageCountByDomain.get(id) ?? 0) > 0 ? 0 : Math.min(1, need))
    const alloc = new Map(
      domains.map((d) => [d.id, Math.max(floor(d.id), d.questionCount - (passageCountByDomain.get(d.id) ?? 0))]),
    )
    const sum = () => [...alloc.values()].reduce((a, b) => a + b, 0)
    while (sum() > need) {
      const over = domains
        .filter((d) => alloc.get(d.id)! > floor(d.id))
        .sort((a, b) => alloc.get(b.id)! - alloc.get(a.id)!)[0]
      if (!over) break
      alloc.set(over.id, alloc.get(over.id)! - 1)
    }
    while (sum() < need) {
      const under = [...domains].sort(
        (a, b) => b.questionCount - alloc.get(b.id)! - (a.questionCount - alloc.get(a.id)!),
      )[0]
      alloc.set(under.id, alloc.get(under.id)! + 1)
    }
    for (const [id, n] of alloc) quota.set(id, n)
  }
  return quota
}

function buildSupplementalDomainBank(): Record<string, MCATDiagnosticQuestion[]> {
  // Generated figure items: one explicit, checked study per context (see
  // figure-contexts.ts). CARS supplements are built separately.
  const bank: Record<string, MCATDiagnosticQuestion[]> = {}
  for (const { domain, sourceSlug, contexts } of FIGURE_DOMAINS) {
    bank[domain] = buildFigureAnalysisQuestions(domain, sourceSlug, contexts)
  }
  bank.cars = buildCarsSupplementQuestions('cars', 'mcat-cars')
  return bank
}

function buildFeedbackLoopSubBank(): Record<string, MCATDiagnosticQuestion[]> {
  return buildFeedbackQuestions(FEEDBACK_CONTEXTS)
}

/** Normalized question text, for spotting the same stem under different ids. */
function questionStem(question: MCATDiagnosticQuestion): string {
  return question.question.replace(/\s+/g, ' ').trim().toLowerCase()
}

/**
 * Keep one standalone question per stem. Templated figure and feedback items
 * reuse a stem across data sets, and a student reads two of them as the same
 * question. Passage questions are exempt: a generic stem ("The author's
 * primary purpose is…") under a different passage is a different question.
 */
function dedupeStandaloneByStem(questions: MCATDiagnosticQuestion[]): MCATDiagnosticQuestion[] {
  const seen = new Set<string>()
  return questions.filter((q) => {
    if (q.passage) return true
    const stem = questionStem(q)
    if (seen.has(stem)) return false
    seen.add(stem)
    return true
  })
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
  const { bank: passageBank, passageMeta, passageTier } = buildPassageQuestionBank(excludeQuestionIds)
  const questions: MCATDiagnosticQuestion[] = []
  const domainPools = new Map<string, MCATDiagnosticQuestion[]>()

  // Pass 1: build every domain's full candidate pool.
  const mergedByDomain = new Map<string, MCATDiagnosticQuestion[]>()
  for (const domain of DIAGNOSTIC_DOMAINS) {
    const domainQuestions: MCATDiagnosticQuestion[] = []

    for (const slug of [...domain.slugs, ...(domain.bankSlugs ?? [])]) {
      try {
        // Load the WHOLE bank, not a random ~18. The "already seen" exclusion
        // runs after this, so a small random sample kept re-drawing questions
        // the student had seen while most of the bank went unused.
        const pool = await generateExitQuiz(slug, FULL_EXIT_BANK)
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
    // Passage sets are chosen per section below, not from domain pools.
    const merged = dedupeQuestions([...domainQuestions, ...supplemental, ...feedbackLoopQuestions]).map((question) => ({
      ...question,
      difficulty: inferQuestionDifficulty(question),
      family: inferQuestionFamily(question),
      promptType: inferPromptType(question),
    }))
    mergedByDomain.set(domain.id, merged)
  }

  // Standalone question text the student has already seen, under any id.
  // Id-based exclusion alone let the same templated stem return on the next
  // attempt under a different id.
  const seenStems = new Set(
    [...mergedByDomain.values()]
      .flat()
      .filter((q) => !q.passage && excludeQuestionIds.has(q.id))
      .map(questionStem),
  )
  // Standalone stems already placed in THIS test, across domains.
  const usedStems = new Set<string>()

  // Passage sets per SECTION, like the real exam's blocks, credited to the
  // domain matching each passage's discipline.
  const passageCountByDomain = new Map<string, number>()
  for (const [key, blockCount] of Object.entries(SECTION_PASSAGE_BLOCKS)) {
    const candidates = (passageBank[key] ?? []).map((question) => ({
      ...question,
      difficulty: inferQuestionDifficulty(question),
      family: inferQuestionFamily(question),
      promptType: inferPromptType(question),
    }))
    for (const q of selectPassageBlocks(candidates, blockCount, passageTier)) {
      questions.push(q)
      passageCountByDomain.set(q.domain, (passageCountByDomain.get(q.domain) ?? 0) + 1)
    }
  }
  const standaloneQuota = allocateStandaloneQuota(passageCountByDomain)

  // Pass 2: select each domain's standalone questions.
  for (const domain of DIAGNOSTIC_DOMAINS) {
    // Shuffle before the stem dedupe so repeated attempts see different data
    // sets for a templated stem, not always the first one.
    const merged = dedupeStandaloneByStem(shuffle(mergedByDomain.get(domain.id) ?? []))
    const fresh = merged.filter((q) => q.passage || !usedStems.has(questionStem(q)))
    const unseen = fresh.filter(
      (q) => !excludeQuestionIds.has(q.id) && (q.passage || !seenStems.has(questionStem(q))),
    )
    domainPools.set(domain.id, unseen.some((q) => !q.passage) ? unseen : fresh)

    // Standalone questions fill the domain's quota after the section passage
    // sets. Unseen first, topped up from already-seen questions when the unseen
    // standalone pool runs short, so the test never comes up short.
    const remainingCount = standaloneQuota.get(domain.id) ?? 0
    const selectedRemainder = selectQuestionsByDifficulty(
      unseen.filter((q) => !q.passage),
      remainingCount,
      domain.difficultyMix,
    )
    if (selectedRemainder.length < remainingCount) {
      const takenIds = new Set(selectedRemainder.map((q) => q.id))
      const takenStems = new Set(selectedRemainder.map(questionStem))
      const topUp = fresh.filter((q) => !q.passage && !takenIds.has(q.id) && !takenStems.has(questionStem(q)))
      selectedRemainder.push(...pickRandom(topUp, remainingCount - selectedRemainder.length))
    }

    const domainQuestions = selectedRemainder.slice(0, remainingCount).map((question) => ({
      ...question,
      difficulty: inferQuestionDifficulty(question),
      family: inferQuestionFamily(question),
      promptType: inferPromptType(question),
    }))

    for (const q of domainQuestions) if (!q.passage) usedStems.add(questionStem(q))
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
          // A lone passage question would be a partial passage block.
          !candidate.passage &&
          !usedInDomain.has(candidate.id) &&
          !usedStems.has(questionStem(candidate)),
      )

      if (nonFigureCandidates.length === 0) continue

      const replacement = pickRandom(nonFigureCandidates, 1)[0]
      if (!replacement) continue

      usedInDomain.delete(question.id)
      usedInDomain.add(replacement.id)
      usedStems.delete(questionStem(question))
      usedStems.add(questionStem(replacement))
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
      // Two candidates can share a stem; never place the same question twice.
      if (usedStems.has(questionStem(candidate))) continue

      // Never swap out a passage question: that would shorten its passage
      // block and leave an unrelated question in its place.
      let replaceIndex = selectedQuestions.findIndex(
        (question) =>
          question.domain === candidate.domain &&
          !question.passage &&
          (question.family ?? inferQuestionFamily(question)) !== 'feedback-loop-reasoning',
      )

      if (replaceIndex < 0) {
        // Fallback swap: same SECTION only (section totals are fixed), and
        // never a domain's last question (every content area stays measured).
        const sectionOf = (domainId: string) => DIAGNOSTIC_DOMAINS.find((d) => d.id === domainId)?.section
        const domainCount = (domainId: string) => selectedQuestions.filter((q) => q.domain === domainId).length
        replaceIndex = selectedQuestions.findIndex(
          (question) =>
            sectionOf(question.domain) === sectionOf(candidate.domain) &&
            domainCount(question.domain) > 1 &&
            !question.passage &&
            (question.family ?? inferQuestionFamily(question)) !== 'feedback-loop-reasoning',
        )
      }

      if (replaceIndex < 0) break

      const replaced = selectedQuestions[replaceIndex]
      selectedQuestions[replaceIndex] = candidate

      usedIds.add(candidate.id)
      usedStems.delete(questionStem(replaced))
      usedStems.add(questionStem(candidate))
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
    // Shuffle whole units, never individual questions: each passage's
    // questions stay one consecutive block in authored order, as on the real
    // MCAT, while block and standalone positions still vary between tests.
    questions: arrangeInPassageBlocks(selectedQuestions, shuffle),
    domains: DIAGNOSTIC_DOMAINS,
    totalQuestions: selectedQuestions.length,
    timeLimitMinutes: 55,
    ...(passageSources.length > 0 ? { passageSources } : {}),
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

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

export type PlanTopicCandidate = { slug: string; name: string; priority: 'high' | 'medium' | 'low' }
/** The slice of a domain result the plan-building helpers need. */
export type PlanDomainResult = Pick<MCATDomainResult, 'domainId' | 'domainName' | 'level'>

function weakestFirst(domains: PlanDomainResult[]): PlanDomainResult[] {
  const examWeight = (id: string) => DIAGNOSTIC_DOMAINS.find(dom => dom.id === id)?.questionCount ?? 0
  return domains
    .filter(d => d.level === 'weak' || d.level === 'moderate')
    .slice()
    .sort((a, b) => {
      if (a.level !== b.level) return a.level === 'weak' ? -1 : 1
      return examWeight(b.domainId) - examWeight(a.domainId)
    })
}

/** Domain-level ("work on Chemistry") candidates, weakest domain first. */
function domainLevelTopics(domains: PlanDomainResult[]): PlanTopicCandidate[] {
  return weakestFirst(domains).flatMap(d => {
    const domain = DIAGNOSTIC_DOMAINS.find(dom => dom.id === d.domainId)
    return (domain?.slugs ?? []).map(slug => ({
      slug: canonicalizeTopicSlug(slug),
      name: d.domainName,
      priority: d.level === 'weak' ? 'high' as const : 'medium' as const,
    }))
  })
}

/**
 * Replacement study topics for a diagnostic cycle, drawn from the SAME
 * universe the scorer recommends from: the per-domain subtopic map first
 * (specific, e.g. "Thermodynamics" — every slug there is a real Topic with a
 * working exit quiz), then the broad domain-level slugs. Weakest domains
 * first. DB-free and pure, so it runs in the browser scorer or a route.
 */
export function planCandidatePool(domains: PlanDomainResult[]): PlanTopicCandidate[] {
  const weak = weakestFirst(domains)
  const subtopics: PlanTopicCandidate[] = weak.flatMap(d =>
    (MCAT_SUBTOPIC_MAP[d.domainId] ?? []).map(rule => ({
      slug: rule.slug,
      name: rule.title,
      priority: d.level === 'weak' ? 'high' as const : 'medium' as const,
    })),
  )
  const pool = [...subtopics, ...domainLevelTopics(weak)]
  return pool.filter((t, i, arr) => arr.findIndex(x => x.slug === t.slug) === i)
}

/** slug → the domain whose subtopic list it belongs to (first listing wins). */
const SUBTOPIC_DOMAIN_OF = new Map<string, string>(
  Object.entries(MCAT_SUBTOPIC_MAP).flatMap(([domainId, rules]) =>
    rules.map(rule => [rule.slug, domainId] as const),
  ),
)

/** Sibling subtopics of `slug` — same domain in the subtopic map, `slug` aside. */
function subtopicSiblings(slug: string, priority: PlanTopicCandidate['priority']): PlanTopicCandidate[] {
  const domainId = SUBTOPIC_DOMAIN_OF.get(slug)
  if (!domainId) return []
  return (MCAT_SUBTOPIC_MAP[domainId] ?? [])
    .filter(rule => rule.slug !== slug)
    .map(rule => ({ slug: rule.slug, name: rule.title, priority }))
}

/**
 * Every slug selectPlanTopics could possibly return for this cycle.
 *
 * Callers that need DB facts about the candidates (does the Topic exist? has
 * the student cleared it?) must load them for THIS list, not just the stored
 * recommendations — a substitute nobody looked up would read as a missing topic
 * and be waved through by the drift safety valve.
 */
export function planCandidateUniverse({
  recommended,
  domains,
}: {
  recommended: PlanTopicCandidate[]
  domains: PlanDomainResult[]
}): string[] {
  return Array.from(
    new Set([
      ...recommended.map(topic => topic.slug),
      ...recommended.flatMap(topic => subtopicSiblings(topic.slug, topic.priority).map(s => s.slug)),
      ...planCandidatePool(domains).map(candidate => candidate.slug),
    ]),
  )
}

/**
 * Fill a diagnostic cycle's study-plan slots, PREFERRING topics the student has
 * not already cleared.
 *
 * Why (bug, Sept 2026): the scorer rebuilds recommendations from the new
 * attempt's misses with no notion of what the student already mastered, so
 * cycle 2 could re-recommend the five topics cycle 1 had just cleared. Every
 * slot was then satisfied on arrival, pendingTopics hit 0, and the next
 * diagnostic unlocked for free without a minute of study.
 *
 * `isStale(slug)` answers "was this already cleared BEFORE this diagnostic was
 * taken?" — deliberately not "is it cleared now", so clearing a topic during
 * the cycle marks it done instead of swapping it out for a fresh one (that
 * would be a treadmill the plan could never finish).
 *
 * Guarantees: never returns fewer than `limit` while any candidate exists
 * (already-cleared recommendations are appended last rather than dropped), and
 * never empties the plan when a student has mastered everything — an all-stale
 * plan is simply satisfied, which keeps the retake gate from deadlocking.
 */
export function selectPlanTopics({
  recommended,
  domains,
  isStale,
  limit = 5,
}: {
  recommended: PlanTopicCandidate[]
  domains: PlanDomainResult[]
  isStale: (slug: string) => boolean
  limit?: number
}): PlanTopicCandidate[] {
  const seen = new Set<string>()
  const fresh: PlanTopicCandidate[] = []
  const stale: PlanTopicCandidate[] = []
  for (const topic of recommended) {
    if (!topic?.slug || seen.has(topic.slug)) continue
    seen.add(topic.slug)
    ;(isStale(topic.slug) ? stale : fresh).push(topic)
  }
  if (fresh.length >= limit) return fresh.slice(0, limit)

  const selected = [...fresh]
  const consider = (candidate: PlanTopicCandidate) => {
    if (selected.length >= limit) return
    if (seen.has(candidate.slug) || isStale(candidate.slug)) return
    seen.add(candidate.slug)
    selected.push(candidate)
  }
  // Nearest substitute first: a SIBLING subtopic of the cleared recommendation
  // (same domain, new material). This is the only backfill available when the
  // student missed a question in a domain they otherwise scored strong in —
  // no domain is weak/moderate, so the pool below is empty, and without this a
  // repeat cycle of already-cleared topics would unlock the retake for free.
  for (const topic of stale) {
    for (const sibling of subtopicSiblings(topic.slug, topic.priority)) consider(sibling)
  }
  for (const candidate of planCandidatePool(domains)) consider(candidate)
  // Last resort: rather than hand back a short plan, restore the already-
  // cleared recommendations. They read as satisfied, so they neither block the
  // student nor (on their own) unlock anything new.
  for (const topic of stale) {
    if (selected.length >= limit) break
    selected.push(topic)
  }
  return selected.slice(0, limit)
}

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
  const domainTopics = domainLevelTopics(domainResults)

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
