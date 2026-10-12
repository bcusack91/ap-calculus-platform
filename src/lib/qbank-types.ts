/**
 * Shared shapes and constants for the custom question bank (/mcat/qbank,
 * /sat/qbank, /act/qbank). Pure — safe to import from client components. The pools live
 * in qbank-pools.ts (server), sessions in qbank-server.ts (server).
 */

export const QBANK_COURSES = ['mcat', 'sat', 'act'] as const
export type QbankCourse = (typeof QBANK_COURSES)[number]

export function isQbankCourse(c: unknown): c is QbankCourse {
  return c === 'mcat' || c === 'sat' || c === 'act'
}

export type QbankDifficulty = 'easy' | 'medium' | 'hard'
export const QBANK_DIFFICULTIES: readonly QbankDifficulty[] = ['easy', 'medium', 'hard']

export type QbankMode = 'timed' | 'tutor'
/** Which questions are eligible: everything, never answered, or active mistakes. */
export type QbankPoolKind = 'all' | 'unused' | 'incorrect' | 'flagged'
export const QBANK_POOL_KINDS: readonly QbankPoolKind[] = ['all', 'unused', 'incorrect', 'flagged']

export const QBANK_MIN_COUNT = 5
export const QBANK_MAX_COUNT = 60

/** Exam sections per course and the timed-mode allowance per question in each. */
export const QBANK_SECTIONS: Record<QbankCourse, { id: string; label: string; secondsPerQuestion: number }[]> = {
  mcat: [
    { id: 'chem-phys', label: 'Chem/Phys', secondsPerQuestion: 95 },
    { id: 'cars', label: 'CARS', secondsPerQuestion: 95 },
    { id: 'bio-biochem', label: 'Bio/Biochem', secondsPerQuestion: 95 },
    { id: 'psych-soc', label: 'Psych/Soc', secondsPerQuestion: 95 },
  ],
  sat: [
    { id: 'reading-writing', label: 'Reading and Writing', secondsPerQuestion: 71 },
    { id: 'math', label: 'Math', secondsPerQuestion: 95 },
  ],
  // Enhanced ACT pace: English 35 min / 50, Math 50 / 45, Reading 40 / 36, Science 40 / 40.
  act: [
    { id: 'english', label: 'English', secondsPerQuestion: 42 },
    { id: 'math', label: 'Math', secondsPerQuestion: 67 },
    { id: 'reading', label: 'Reading', secondsPerQuestion: 67 },
    { id: 'science', label: 'Science', secondsPerQuestion: 60 },
  ],
}

export function sectionLabelFor(course: QbankCourse, section: string): string {
  return QBANK_SECTIONS[course].find((s) => s.id === section)?.label ?? section
}

export function secondsPerQuestion(course: QbankCourse, section: string): number {
  return QBANK_SECTIONS[course].find((s) => s.id === section)?.secondsPerQuestion ?? 95
}

export interface QbankFilters {
  sections?: string[]
  disciplines?: string[]
  topics?: string[]
  difficulties?: QbankDifficulty[]
}

export interface QbankPassage {
  id: string
  title: string
  body: string
  /** Figure payload in the shape the review page draws (figureMarkdown / dataTable / figure). */
  figure?: unknown
}

export interface GridInKey {
  correctAnswer: number
  acceptableAnswers: number[]
  tolerance: number
}

/** One question as frozen into a session (QbankSession.items). Server-side: carries the key. */
export interface QbankItem {
  index: number
  questionKey: string
  question: string
  /** Options in the order shown (empty for a grid-in). */
  options: string[]
  /** Key in the shown order; -1 for a grid-in. */
  correctIndex: number
  explanation: string
  passage: QbankPassage | null
  gridIn?: GridInKey
  topicSlug: string
  /** Section id (QBANK_SECTIONS). */
  section: string
  /** Finer label: MCAT discipline ("General Chemistry") or SAT content domain. */
  discipline: string
  difficulty: QbankDifficulty | null
}

/** One stored answer (QbankSession.answers[i]); null = not answered. */
export interface QbankAnswer {
  chosenIndex: number | null
  chosenText: string | null
}

/** What the browser sees of a question before answering it: no key, no explanation. */
export interface QbankPublicItem {
  index: number
  question: string
  options: string[]
  passage: QbankPassage | null
  /** A typed-answer (grid-in) question. */
  typed: boolean
  topicSlug: string
  section: string
  discipline: string
}

/** The verdict on one answered question. */
export interface QbankFeedback {
  correct: boolean
  correctIndex: number
  explanation: string
  /** For grid-ins: the accepted value. */
  acceptedAnswer?: number
}

export interface QbankSessionView {
  id: string
  course: QbankCourse
  mode: QbankMode
  filters: unknown
  timeLimitSec: number | null
  total: number
  startedAt: string
  completedAt: string | null
  items: QbankPublicItem[]
  answers: (QbankAnswer | null)[]
  flags: boolean[]
  /** Seconds spent per question. */
  timings: number[]
  /** Per question: the verdict, once it may be shown (tutor: after answering; timed: after submitting). */
  feedback: (QbankFeedback | null)[]
  result: { correct: number; total: number; answered: number } | null
}

export interface QbankSessionSummary {
  id: string
  mode: QbankMode
  total: number
  correct: number | null
  startedAt: string
  completedAt: string | null
  sections: string[]
}

export interface QbankCounts {
  /** Questions eligible under the current filters, per pool. */
  pools: Record<QbankPoolKind, number>
  sections: { id: string; label: string; count: number }[]
  disciplines: { id: string; section: string; count: number }[]
  topics: { slug: string; title: string; section: string; discipline: string; count: number }[]
  difficulties: Record<QbankDifficulty, number>
}
