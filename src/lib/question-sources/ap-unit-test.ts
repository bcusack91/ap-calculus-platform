import type { QuestionRow } from '@/lib/study-tracking'
import { chosenOptionKey } from '@/lib/question-activity-rows'
import { diagnosticItemKey } from '@/lib/ap-topic-canonical'
import { questionKey } from '@/lib/question-key'
import type { ApPoolItem, ApUnitTestCourse } from '@/lib/unit-tests/ap-unit-test-registry'
import {
  generateShownUnitTest,
  shownUnitTestQuestion,
  type CourseUnitTestConfig,
  type UnitTestData,
} from '@/lib/unit-tests/engine'
import type { ReviewItem } from './types'

/**
 * AP per-unit tests (/ap-chem-unit-tests and friends, UnitTestAttempt rows).
 *
 * The page draws each test deterministically from (course, unit, variant) and
 * shuffles options with a seed of the same plus the stem, so nothing about the
 * questions needs storing: the attempt row keeps unit and variant, and each
 * answer's QuestionActivity row keeps its question key and the choice in the
 * shown order. Logging re-draws the test on the server (checked against stem
 * fingerprints the page sends); review looks each logged key up in the pool
 * and re-derives its shown order, falling back to the re-drawn question at
 * that position (the resolver then marks it revised) when the item has since
 * been edited.
 */

/** The re-drawn test, tolerating a unit the static config doesn't list (content-store units). */
export function redrawUnitTest(config: CourseUnitTestConfig, unitId: string, variant: number): UnitTestData | null {
  const known = config.units.some((u) => u.id === unitId)
  const cfg = known
    ? config
    : {
        ...config,
        units: [...config.units, { id: unitId, unitNumber: 0, name: unitId, shortName: unitId, description: '', topicSlugs: [], exam_weight: '', color: '', icon: '' }],
      }
  try {
    return generateShownUnitTest(cfg, unitId, variant)
  } catch {
    return null
  }
}

export interface GradedPosition {
  index: number
  item: ApPoolItem
  /** Options in the shown order. */
  options: string[]
  correctIndex: number
  chosenIndex: number | null
  correct: boolean
}

/** The pool item a re-drawn question is (keys don't depend on option order). */
function itemOfDrawn(course: ApUnitTestCourse, q: { question: string; options: string[]; correctAnswer: number }): ApPoolItem | undefined {
  return course.byKey.get(questionKey({ question: q.question, options: q.options, correctIndex: q.correctAnswer }))
}

/** A pool item by stem fingerprint, preferring the unit's own item when two units share a stem. */
function itemOfStem(course: ApUnitTestCourse, stem: string, unitId: string): ApPoolItem | undefined {
  const inUnit = course.items.find((it) => it.unitId === unitId && diagnosticItemKey(it.q.question) === stem)
  return inUnit ?? course.byStem.get(stem)
}

const asChoice = (v: unknown, n: number): number | null =>
  typeof v === 'number' && Number.isInteger(v) && v >= 0 && v < n ? v : null

/**
 * Grade a submitted per-unit test against the server's own draw. Each
 * position is matched by the stem fingerprint the page sent (a page loaded
 * before a content deploy can show a different draw); a position whose
 * question can't be found is left out. `complete` = every position graded.
 */
export function gradeApUnitTest(
  course: ApUnitTestCourse,
  input: { unitId: string; variant: number; answers: unknown[]; stems?: unknown[] },
): { positions: GradedPosition[]; complete: boolean } {
  const test = redrawUnitTest(course.config, input.unitId, input.variant)
  const stems = Array.isArray(input.stems) ? input.stems : null
  const n = stems ? stems.length : input.answers.length
  const positions: GradedPosition[] = []
  for (let i = 0; i < n; i++) {
    const drawn = test?.questions[i]
    const stem = stems ? stems[i] : null
    let item: ApPoolItem | undefined
    if (drawn && (stem === null || stem === diagnosticItemKey(drawn.question))) {
      item = itemOfDrawn(course, drawn)
    } else if (typeof stem === 'string') {
      item = itemOfStem(course, stem, input.unitId)
    }
    if (!item) continue
    const shown = shownUnitTestQuestion(course.config.courseSlug, input.unitId, input.variant, item.q)
    const chosenIndex = asChoice(input.answers[i], shown.options.length)
    positions.push({
      index: i,
      item,
      options: shown.options,
      correctIndex: shown.correctAnswer,
      chosenIndex,
      correct: chosenIndex !== null && chosenIndex === shown.correctAnswer,
    })
  }
  return { positions, complete: positions.length > 0 && positions.length === n && (!test || test.questions.length === n) }
}

/** One UNIT_TEST answer-log row per graded position (attemptKind 'unit-test', attemptId = the UnitTestAttempt id). */
export function apUnitTestRows(
  graded: GradedPosition[],
  opts: { courseSlug: string; attemptId: string; timeSpentSeconds?: number; total?: number; answeredAt?: Date },
): QuestionRow[] {
  const total = opts.total ?? graded.length
  const perQuestionMs = opts.timeSpentSeconds && opts.timeSpentSeconds > 0 && total > 0
    ? Math.round((opts.timeSpentSeconds * 1000) / total)
    : null
  return graded.map((p) => ({
    source: 'UNIT_TEST' as const,
    courseSlug: opts.courseSlug,
    topicSlug: p.item.topicSlug,
    discipline: p.item.unitLabel,
    questionKey: p.item.key,
    answered: 1,
    correct: p.correct ? 1 : 0,
    durationMs: perQuestionMs,
    attemptKind: 'unit-test' as const,
    attemptId: opts.attemptId,
    itemIndex: p.index,
    chosenIndex: p.chosenIndex,
    chosenKey: chosenOptionKey(p.options, p.chosenIndex),
    ...(opts.answeredAt ? { answeredAt: opts.answeredAt } : {}),
  }))
}

export interface LoggedUnitTestAnswer {
  itemIndex: number | null
  questionKey: string
  chosenIndex: number | null
  flagged?: boolean | null
  durationMs?: number | null
}

/** Review items for one per-unit attempt, rebuilt from its answer-log rows. */
export function apUnitTestReviewItems(
  course: ApUnitTestCourse,
  attempt: { unitId: string; variant: number },
  logged: LoggedUnitTestAnswer[],
): ReviewItem[] {
  const test = redrawUnitTest(course.config, attempt.unitId, attempt.variant)
  const byIndex = new Map<number, LoggedUnitTestAnswer>()
  for (const r of logged) if (typeof r.itemIndex === 'number' && !byIndex.has(r.itemIndex)) byIndex.set(r.itemIndex, r)
  const out: ReviewItem[] = []
  for (const [index, row] of [...byIndex.entries()].sort((a, b) => a[0] - b[0])) {
    const item = course.byKey.get(row.questionKey)
    const drawn = item ? null : test?.questions[index]
    const fallback = drawn ? itemOfDrawn(course, drawn) : undefined
    const source = item ?? fallback
    if (!source) continue
    const shown = shownUnitTestQuestion(course.config.courseSlug, attempt.unitId, attempt.variant, source.q)
    const chosen = typeof row.chosenIndex === 'number' && row.chosenIndex >= 0 && row.chosenIndex < shown.options.length ? row.chosenIndex : null
    out.push({
      index,
      questionKey: source.key,
      question: shown.question,
      options: [...shown.options],
      correctIndex: shown.correctAnswer,
      explanation: shown.explanation ?? '',
      passage: null,
      chosenIndex: chosen,
      flagged: row.flagged === true,
      durationMs: row.durationMs ?? null,
      topicSlug: source.topicSlug,
      discipline: source.unitLabel,
    })
  }
  return out
}
