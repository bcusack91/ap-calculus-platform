import { actQuestionPool } from '@/data/exit-quizzes/act'
import { actMathQuestionBank } from '@/data/competitive-questions/act-math-bank'
import { actScienceQuestionBank } from '@/data/competitive-questions/act-science-bank'
import { ACT_SUPPLEMENT } from '@/data/unit-tests/act-supplement'
import type { CourseUnitTestConfig, UnitDef, UnitPoolQuestion } from '@/lib/unit-tests/engine'

/**
 * ACT unit tests — one "unit" per scored ACT section (English, Math, Reading,
 * Science).
 *
 * The pool is assembled from three sources because no single one covers all
 * four sections at depth:
 *   1. the 64-question ACT exit-quiz pool (domain-tagged, all four sections),
 *   2. the 201-question ACT Math and 201-question ACT Science competitive banks
 *      (untagged, but each bank is entirely one section — so the section is
 *      known from the bank itself), and
 *   3. ACT_SUPPLEMENT, English and Reading questions written for these unit
 *      tests because those two sections had only 16 questions each.
 */

export const ACT_UNITS: UnitDef[] = [
  { id: 'english', unitNumber: 1, name: 'ACT English', shortName: 'English', description: 'Punctuation, grammar and usage, sentence structure, and rhetorical skills.', topicSlugs: ['act-english-punctuation-act', 'act-english-grammar-act', 'act-english-rhetorical-act', 'act-english-strategy-act'], exam_weight: '75 questions · 45 min', color: 'from-rose-500 to-pink-500', icon: '✍️' },
  { id: 'math', unitNumber: 2, name: 'ACT Math', shortName: 'Math', description: 'Pre-algebra, elementary and intermediate algebra, coordinate and plane geometry, trigonometry.', topicSlugs: ['act-pre-algebra-basics-act', 'act-algebra-equations-act', 'act-intermediate-algebra-act', 'act-coordinate-geometry-act', 'act-plane-geometry-act', 'act-trigonometry-act', 'act-statistics-probability-act'], exam_weight: '60 questions · 60 min', color: 'from-blue-500 to-indigo-500', icon: '🔢' },
  { id: 'reading', unitNumber: 3, name: 'ACT Reading', shortName: 'Reading', description: 'Main ideas, passage types, reading strategy, and science-style passages.', topicSlugs: ['act-reading-main-ideas-act', 'act-reading-passage-types-act', 'act-reading-strategy-act', 'act-reading-science-tips-act'], exam_weight: '40 questions · 35 min', color: 'from-amber-500 to-orange-500', icon: '📖' },
  { id: 'science', unitNumber: 4, name: 'ACT Science', shortName: 'Science', description: 'Data representation, research summaries, and conflicting viewpoints.', topicSlugs: ['act-science-data-act', 'act-science-experiments-act', 'act-science-reasoning-act'], exam_weight: '40 questions · 35 min', color: 'from-emerald-500 to-teal-500', icon: '🔬' },
]

const fromExitPool: UnitPoolQuestion[] = actQuestionPool.map((q) => ({
  question: q.question,
  options: q.options,
  correctAnswer: q.correctAnswer,
  explanation: q.explanation,
  domain: q.domain,
  topicSlug: q.topicSlug,
}))

// Each competitive bank is single-section, so the domain is implied by the bank.
const fromMathBank: UnitPoolQuestion[] = actMathQuestionBank.map((q) => ({
  question: q.question,
  options: q.options,
  correctAnswer: q.correctAnswer,
  explanation: q.explanation,
  domain: 'math',
  topicSlug: 'act-algebra-equations-act',
}))

const fromScienceBank: UnitPoolQuestion[] = actScienceQuestionBank.map((q) => ({
  question: q.question,
  options: q.options,
  correctAnswer: q.correctAnswer,
  explanation: q.explanation,
  domain: 'science',
  topicSlug: 'act-science-reasoning-act',
}))

const pool: UnitPoolQuestion[] = [
  ...fromExitPool,
  ...fromMathBank,
  ...fromScienceBank,
  ...ACT_SUPPLEMENT,
]

export const ACT_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'act-prep',
  courseHubHref: '/act',
  courseTitle: 'ACT',
  unitTestRoute: '/act-unit-tests',
  units: ACT_UNITS,
  pool,
  reviewHrefBase: '/act',
}
