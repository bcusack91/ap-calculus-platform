/**
 * The MCAT cycle's customized unit test (owner request 2026-10-03).
 *
 * After a student clears every topic their latest MCAT diagnostic recommended,
 * they take ONE 25-question test built from those topics (~5 questions each,
 * from each topic's exit-quiz pool). Passing it — 75% — unlocks the next
 * diagnostic. Failing it is not a dead end: they retake it, and every retake
 * draws questions they have not seen in an earlier sitting whenever the pools
 * allow (and, after that, questions they did not meet in the topic's exit
 * quizzes).
 *
 * Pure helpers only; the database side lives in mcat-unit-test-server.ts.
 */

/** Pass mark for the unit test (owner: 75%, distinct from the 80% topic clear). */
export const MCAT_UNIT_TEST_PASS_PERCENT = 75

/** Questions per unit test. */
export const MCAT_UNIT_TEST_QUESTIONS = 25

/** Where the test lives. */
export const MCAT_UNIT_TEST_PATH = '/mcat-unit-test'

/** True when `correct` of `total` meets the pass mark (integer-exact: 19/25 passes, 18/25 does not). */
export function unitTestPassed(correct: number, total: number): boolean {
  return total > 0 && correct * 100 >= MCAT_UNIT_TEST_PASS_PERCENT * total
}

/**
 * Split `total` questions across topics as evenly as possible, earlier topics
 * (the plan's higher priorities) taking the remainder. 5 topics → 5 each.
 */
export function allocateQuestions(topicCount: number, total: number = MCAT_UNIT_TEST_QUESTIONS): number[] {
  if (topicCount <= 0) return []
  const base = Math.floor(total / topicCount)
  const extra = total % topicCount
  return Array.from({ length: topicCount }, (_, i) => base + (i < extra ? 1 : 0))
}

export interface UnitTestCandidate {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface UnitTestQuestion extends UnitTestCandidate {
  topicSlug: string
}

function shuffled<T>(items: T[], rng: () => number): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/**
 * A topic's candidates in preference order: never seen in any sitting of this
 * unit test nor in the topic's exit quizzes, then seen only in an exit quiz,
 * then (a pool too small to avoid it) repeats from earlier sittings. Random
 * within each band. Duplicate ids are dropped.
 */
export function rankCandidates(
  pool: UnitTestCandidate[],
  seenInUnitTests: ReadonlySet<string>,
  seenInExitQuizzes: ReadonlySet<string>,
  rng: () => number = Math.random,
): UnitTestCandidate[] {
  const unique = new Map<string, UnitTestCandidate>()
  for (const q of pool) if (!unique.has(q.id)) unique.set(q.id, q)
  const fresh: UnitTestCandidate[] = []
  const exitSeen: UnitTestCandidate[] = []
  const repeat: UnitTestCandidate[] = []
  for (const q of unique.values()) {
    if (seenInUnitTests.has(q.id)) repeat.push(q)
    else if (seenInExitQuizzes.has(q.id)) exitSeen.push(q)
    else fresh.push(q)
  }
  return [...shuffled(fresh, rng), ...shuffled(exitSeen, rng), ...shuffled(repeat, rng)]
}

/**
 * Build the test: allocate the question count across topics, take each
 * topic's best-ranked candidates, and hand any shortfall (a topic whose pool
 * is smaller than its share, or a topic with no pool at all) to the topics
 * that still have candidates, so the test stays at `total` when it can.
 * Questions come out grouped by topic, in plan order.
 */
export function assembleUnitTest(
  topics: { slug: string; ranked: UnitTestCandidate[] }[],
  total: number = MCAT_UNIT_TEST_QUESTIONS,
): UnitTestQuestion[] {
  const usable = topics.filter((t) => t.ranked.length > 0)
  if (usable.length === 0) return []
  const want = allocateQuestions(usable.length, total)
  const take = want.map((n, i) => Math.min(n, usable[i].ranked.length))
  let short = total - take.reduce((a, b) => a + b, 0)
  // Round-robin the shortfall onto topics with candidates to spare.
  while (short > 0) {
    let gave = false
    for (let i = 0; i < usable.length && short > 0; i++) {
      if (take[i] < usable[i].ranked.length) {
        take[i]++
        short--
        gave = true
      }
    }
    if (!gave) break
  }
  return usable.flatMap((t, i) => t.ranked.slice(0, take[i]).map((q) => ({ ...q, topicSlug: t.slug })))
}

/** Score submitted answers against frozen questions. */
export function gradeUnitTest(
  questions: Pick<UnitTestQuestion, 'correctIndex' | 'topicSlug'>[],
  answers: (number | null)[],
): { correct: number; total: number; percentage: number; passed: boolean; byTopic: Record<string, { correct: number; total: number }> } {
  let correct = 0
  const byTopic: Record<string, { correct: number; total: number }> = {}
  questions.forEach((q, i) => {
    const t = (byTopic[q.topicSlug] ??= { correct: 0, total: 0 })
    t.total++
    if (answers[i] === q.correctIndex) {
      correct++
      t.correct++
    }
  })
  const total = questions.length
  return {
    correct,
    total,
    percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
    passed: unitTestPassed(correct, total),
    byTopic,
  }
}
