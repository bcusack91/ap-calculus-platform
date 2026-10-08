/**
 * Lesson-built exit quizzes (owner request 2026-10-02).
 *
 * A lesson-built topic's exit quiz covers exactly what its interactive lesson
 * teaches. Its pool is written from the lesson, each item tagged with the
 * lesson's exam-yield tier (src/lib/lesson-yield.ts):
 *
 *   - default: ultra-high, high and medium items, answerable from what the
 *     lesson shows every student;
 *   - with { includeLowYield: true } (the student turned on "Include low-yield
 *     details"): LOW items too, each testing material inside the lesson's
 *     low-yield boxes.
 *
 * One file per topic, `lesson-built/<topic-slug>.ts`, exporting `EXIT_POOL`
 * and `generateExitQuiz = makeLessonExitQuiz(EXIT_POOL, '<topic-slug>')`, and
 * registered in index.ts and in LESSON_BUILT_EXIT_TOPICS below.
 *
 * Randomness goes through Math.random only, so the shared generator's seeded
 * override (index.ts) reproduces a draw exactly for server-side regrading.
 */
import type { LessonYield } from '@/lib/lesson-yield'

export interface LessonExitItem {
  question: string
  options: [string, string, string, string]
  /** Index into `options`. */
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  yield: LessonYield
  /** The lesson part that teaches it. */
  part: number
}

export interface LessonExitQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  category: string
  /** The lesson part that teaches it — a failed quiz sends the student back to these. */
  partNumber?: number
}

/** Topics whose exit quiz is built from their own lesson (tests iterate these). */
export const LESSON_BUILT_EXIT_TOPICS = [
  'mcat-molecular-biology-transcription-mcat',
  'mcat-molecular-biology-dna-replication-mcat',
  'mcat-molecular-biology-biotechnology-mcat',
  'mcat-molecular-biology-translation-mcat',
  'mcat-molecular-biology-mcat',
  'mcat-biochemistry-amino-acids-proteins-mcat',
  'mcat-biochemistry-bioenergetics-mcat',
  'mcat-biochemistry-lipid-metabolism-mcat',
  'mcat-biochemistry-enzymes-kinetics-mcat',
  'mcat-biochemistry-foundations-mcat',
  'mcat-biochemistry-carbohydrate-metabolism-mcat',
  'mcat-cell-biology-signaling-mcat',
  'mcat-cell-biology-membrane-transport-mcat',
  'mcat-cell-biology-organelles-mcat',
  'mcat-cell-biology-cell-cycle-mcat',
  'mcat-cell-biology-mcat',
  'mcat-genetics-evolution-natural-selection-mcat',
  'mcat-genetics-evolution-population-genetics-mcat',
  'mcat-genetics-evolution-immunology-mcat',
  'mcat-genetics-evolution-mcat',
  'mcat-genetics-evolution-mendelian-mcat',
  'mcat-organ-systems-respiratory-mcat',
  'mcat-organ-systems-renal-mcat',
  'mcat-organ-systems-cardiovascular-mcat',
  'mcat-organ-systems-endocrine-nervous-mcat',
  'mcat-organ-systems-mcat',
  'mcat-anatomy-physiology-musculoskeletal-mcat',
  'mcat-anatomy-physiology-reproductive-mcat',
  'mcat-anatomy-physiology-sensory-mcat',
  'mcat-anatomy-physiology-embryology-mcat',
  'mcat-anatomy-physiology-mcat',
  'mcat-microbiology-bacteria-mcat',
  'mcat-microbiology-mcat',
  'mcat-microbiology-antimicrobials-mcat',
  'mcat-microbiology-viruses-mcat',
  'mcat-psychology-behavior-learning-memory-mcat',
  'mcat-psychology-behavior-cognition-language-mcat',
  'mcat-psychology-behavior-sensation-perception-mcat',
  'mcat-psychology-behavior-development-mcat',
  'mcat-psychology-behavior-disorders-mcat',
  'mcat-psychology-behavior-mcat',
  'mcat-sociology-culture-socialization-mcat',
  'mcat-sociology-structure-stratification-mcat',
  'mcat-sociology-groups-interaction-mcat',
  'mcat-sociology-health-disparities-mcat',
  'mcat-sociology-mcat',
  'mcat-social-psychology-mcat',
  'mcat-biological-basis-behavior-mcat',
  'mcat-research-methods-mcat',
  'mcat-biostatistics-mcat',
  'act-english-grammar-act',
  'act-english-rhetorical-act',
  'act-coordinate-geometry-act',
  'act-intermediate-algebra-act',
  'act-english-strategy-act',
  'act-english-punctuation-act',
  'act-algebra-equations-act',
  'act-plane-geometry-act',
  'act-trigonometry-act',
  'act-pre-algebra-basics-act',
  'act-reading-main-ideas-act',
  'act-statistics-probability-act',
  'act-reading-passage-types-act',
  'act-science-experiments-act',
  'act-reading-strategy-act',
  'act-science-reasoning-act',
  'act-science-data-act',
  'act-reading-science-tips-act',
  'act-test-day-strategy-act',
  'act-math-strategy-act',
] as const

function shuffle<T>(items: T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** The items a student may be asked, given their low-yield setting. */
export function eligibleItems(pool: readonly LessonExitItem[], includeLowYield: boolean): LessonExitItem[] {
  return pool.filter((q) => includeLowYield || q.yield !== 'LOW')
}

export function makeLessonExitQuiz(pool: readonly LessonExitItem[], topicSlug: string) {
  return function generateExitQuiz(
    count: number = 10,
    _topicSlug?: string,
    _difficulty?: 'easy' | 'medium' | 'hard',
    opts?: { includeLowYield?: boolean },
  ): LessonExitQuestion[] {
    const drawn = shuffle(eligibleItems(pool, !!opts?.includeLowYield))
    return drawn.slice(0, Math.min(count, drawn.length)).map((q, i) => ({
      id: `${topicSlug}-${i}`,
      question: q.question,
      options: [...q.options],
      correctIndex: q.correctAnswer,
      explanation: q.explanation,
      category: topicSlug,
      partNumber: q.part,
    }))
  }
}
