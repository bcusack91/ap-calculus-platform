/**
 * Database side of the cycle unit test (see mcat-unit-test.ts) for every
 * course in unit-test-courses.ts (MCAT, SAT, ACT).
 *
 * A cycle is identified by the diagnostic attempt that produced its plan, so a
 * new diagnostic starts a new cycle with no unit test yet — nothing to clean up.
 * Diagnostic ids are unique across courses, so one table (McatUnitTest, named
 * for the first course) holds every course's sittings without a course column.
 */
import { prisma } from '@/lib/prisma'
import { generateExitQuiz, hasExitQuiz } from '@/data/exit-quizzes'
import { UNIT_TEST_COURSES, type UnitTestCourse } from '@/lib/unit-test-courses'
import {
  MCAT_UNIT_TEST_PASS_PERCENT,
  MCAT_UNIT_TEST_QUESTIONS,
  assembleUnitTest,
  rankCandidates,
  type UnitTestCandidate,
  type UnitTestQuestion,
} from '@/lib/mcat-unit-test'

export interface McatUnitTestStatus {
  course: UnitTestCourse
  /** Passing it is required before the next diagnostic (MCAT); otherwise it is the recommended last step. */
  locksDiagnostic: boolean
  /** Every plan topic is cleared, so the test can be taken. */
  available: boolean
  passed: boolean
  /** Finished sittings this cycle. */
  attempts: number
  bestPercent: number | null
  lastPercent: number | null
  /** An unfinished sitting to resume, if any. */
  inProgressId: string | null
  passPercent: number
  questionCount: number
  path: string
}

/** A cycle's unit-test state for one student. */
export async function unitTestStatusFor(
  userId: string,
  diagnosticId: string,
  topicsCleared: boolean,
  course: UnitTestCourse = 'mcat',
): Promise<McatUnitTestStatus> {
  const cfg = UNIT_TEST_COURSES[course]
  const rows = await prisma.mcatUnitTest.findMany({
    where: { userId, diagnosticId },
    orderBy: { startedAt: 'asc' },
    select: { id: true, completedAt: true, percentage: true, passed: true },
  })
  const done = rows.filter((r) => r.completedAt !== null)
  const inProgress = [...rows].reverse().find((r) => r.completedAt === null)
  return {
    course,
    locksDiagnostic: cfg.locksDiagnostic,
    available: topicsCleared,
    passed: done.some((r) => r.passed),
    attempts: done.length,
    bestPercent: done.length ? Math.max(...done.map((r) => r.percentage ?? 0)) : null,
    lastPercent: done.length ? done[done.length - 1].percentage ?? 0 : null,
    inProgressId: inProgress?.id ?? null,
    passPercent: MCAT_UNIT_TEST_PASS_PERCENT,
    questionCount: MCAT_UNIT_TEST_QUESTIONS,
    path: cfg.path,
  }
}

/** `${userId}|${diagnosticId}` for every cycle in the list whose unit test was passed. */
export async function passedUnitTestCycles(cycles: { userId: string; diagnosticId: string }[]): Promise<Set<string>> {
  if (cycles.length === 0) return new Set()
  const rows = await prisma.mcatUnitTest.findMany({
    where: {
      passed: true,
      userId: { in: [...new Set(cycles.map((c) => c.userId))] },
      diagnosticId: { in: [...new Set(cycles.map((c) => c.diagnosticId))] },
    },
    select: { userId: true, diagnosticId: true },
  })
  return new Set(rows.map((r) => `${r.userId}|${r.diagnosticId}`))
}

function questionIdsOf(json: unknown): string[] {
  if (!Array.isArray(json)) return []
  return json.flatMap((q) => (q && typeof q === 'object' && typeof (q as { id?: unknown }).id === 'string' ? [(q as { id: string }).id] : []))
}

function exitQuestionIdsOf(json: unknown): string[] {
  if (!Array.isArray(json)) return []
  return json.flatMap((a) =>
    a && typeof a === 'object' && typeof (a as { questionId?: unknown }).questionId === 'string' ? [(a as { questionId: string }).questionId] : [],
  )
}

/** Every eligible exit-quiz item for a topic (the student's low-yield setting applies, as in the exit quiz). */
async function candidatesFor(slug: string, includeLowYield: boolean): Promise<UnitTestCandidate[]> {
  if (!hasExitQuiz(slug)) return []
  try {
    const qs = await generateExitQuiz(slug, 150, undefined, undefined, { includeLowYield })
    return qs.map((q) => ({
      id: q.id,
      question: q.question,
      options: [...q.options],
      correctIndex: q.correctIndex,
      explanation: q.explanation ?? '',
    }))
  } catch (err) {
    console.warn(`[mcat unit test] no exit pool for ${slug}:`, err)
    return []
  }
}

/**
 * Build and store a new sitting for this cycle. Retakes prefer questions the
 * student has not seen in an earlier sitting, then ones they did not meet in
 * the topics' exit quizzes.
 */
export async function createUnitTest(userId: string, diagnosticId: string, topicSlugs: string[]) {
  const [prior, exitAttempts, user] = await Promise.all([
    prisma.mcatUnitTest.findMany({ where: { userId, diagnosticId }, select: { questions: true } }),
    prisma.exitQuizAttempt.findMany({ where: { userId, topicSlug: { in: topicSlugs } }, select: { answers: true } }),
    prisma.user.findUnique({ where: { id: userId }, select: { lessonIncludeLowYield: true } }),
  ])
  const seenInUnitTests = new Set(prior.flatMap((r) => questionIdsOf(r.questions)))
  const seenInExitQuizzes = new Set(exitAttempts.flatMap((a) => exitQuestionIdsOf(a.answers)))
  const includeLowYield = user?.lessonIncludeLowYield === true

  const topics = await Promise.all(
    topicSlugs.map(async (slug) => ({
      slug,
      ranked: rankCandidates(await candidatesFor(slug, includeLowYield), seenInUnitTests, seenInExitQuizzes),
    })),
  )
  // Shuffle each question's options (pools don't all randomize the key's
  // position), remapping the stored key to match.
  const questions: UnitTestQuestion[] = assembleUnitTest(topics).map((q) => {
    const order = q.options.map((_, i) => i)
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[order[i], order[j]] = [order[j], order[i]]
    }
    return { ...q, options: order.map((i) => q.options[i]), correctIndex: order.indexOf(q.correctIndex) }
  })
  if (questions.length === 0) return null

  return prisma.mcatUnitTest.create({
    data: { userId, diagnosticId, topicSlugs, questions: questions as unknown as object[], total: questions.length },
    select: { id: true, questions: true, topicSlugs: true, total: true, startedAt: true },
  })
}

/** What the client may see of a stored sitting: no keys, no explanations. */
export function publicQuestions(json: unknown): { id: string; topicSlug: string; question: string; options: string[] }[] {
  if (!Array.isArray(json)) return []
  return (json as UnitTestQuestion[]).map((q) => ({ id: q.id, topicSlug: q.topicSlug, question: q.question, options: q.options }))
}
