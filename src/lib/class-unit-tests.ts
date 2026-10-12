/**
 * Cycle unit tests for the teacher's Engagement tab: the 25-question test a
 * student takes after clearing their diagnostic's recommended lessons
 * (McatUnitTest rows — the table serves MCAT, SAT and ACT).
 *
 * The class summary reads scores only. Question bodies are large, so the
 * per-lesson breakdown is loaded for one student at a time, when the teacher
 * expands that student.
 */
import { prisma } from '@/lib/prisma'
import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'
import { gradeUnitTest, type UnitTestQuestion } from '@/lib/mcat-unit-test'
import { UNIT_TEST_COURSES } from '@/lib/unit-test-courses'

const COURSES = CLASS_PLAN_COURSES.filter((c) => c.key in UNIT_TEST_COURSES)

export interface UnitTestAttemptSummary {
  id: string
  correct: number
  total: number
  percentage: number
  passed: boolean
  completedAt: string
}

export interface UnitTestCycleSummary {
  diagnosticId: string
  course: string
  /** 1 = the unit test after the student's first diagnostic in that course. */
  cycle: number
  lessons: number
  attempts: UnitTestAttemptSummary[]
  /** A sitting was started and not submitted. */
  inProgress: boolean
}

export interface UnitTestLessonScore {
  slug: string
  title: string
  correct: number
  total: number
}

/** Every student's cycles that have a unit test, newest cycle first. */
export async function loadClassUnitTests(userIds: string[]): Promise<Map<string, UnitTestCycleSummary[]>> {
  const out = new Map<string, UnitTestCycleSummary[]>()
  if (userIds.length === 0) return out
  const rows = await prisma.mcatUnitTest.findMany({
    where: { userId: { in: userIds } },
    orderBy: { startedAt: 'asc' },
    select: {
      id: true, userId: true, diagnosticId: true, topicSlugs: true,
      correct: true, total: true, percentage: true, passed: true, completedAt: true,
    },
  })
  if (rows.length === 0) return out

  // Cycle number = position of the cycle's diagnostic among the student's
  // diagnostics in the same course.
  const diagnostics = await prisma.diagnosticTest.findMany({
    where: {
      userId: { in: [...new Set(rows.map((r) => r.userId))] },
      OR: COURSES.map((c) => ({ category: { startsWith: c.categoryPrefix } })),
    },
    orderBy: { createdAt: 'asc' },
    select: { id: true, userId: true, category: true },
  })
  const cycleOf = new Map<string, { course: string; cycle: number }>()
  const seen = new Map<string, number>()
  for (const d of diagnostics) {
    const course = COURSES.find((c) => d.category.startsWith(c.categoryPrefix))
    if (!course) continue
    const k = `${d.userId}|${course.key}`
    const n = (seen.get(k) ?? 0) + 1
    seen.set(k, n)
    cycleOf.set(d.id, { course: course.label, cycle: n })
  }

  const byCycle = new Map<string, UnitTestCycleSummary & { userId: string }>()
  for (const r of rows) {
    let c = byCycle.get(r.diagnosticId)
    if (!c) {
      const where = cycleOf.get(r.diagnosticId)
      c = {
        userId: r.userId,
        diagnosticId: r.diagnosticId,
        course: where?.course ?? 'Course',
        cycle: where?.cycle ?? 0,
        lessons: Array.isArray(r.topicSlugs) ? r.topicSlugs.length : 0,
        attempts: [],
        inProgress: false,
      }
      byCycle.set(r.diagnosticId, c)
    }
    if (r.completedAt) {
      c.attempts.push({
        id: r.id,
        correct: r.correct ?? 0,
        total: r.total,
        percentage: r.percentage ?? 0,
        passed: r.passed,
        completedAt: r.completedAt.toISOString(),
      })
    } else {
      c.inProgress = true
    }
  }

  for (const { userId, ...cycle } of byCycle.values()) {
    const list = out.get(userId) ?? []
    list.push(cycle)
    out.set(userId, list)
  }
  // Newest cycle first: rows came in start order, so later cycles were pushed later.
  for (const list of out.values()) list.reverse()
  return out
}

/** Per-lesson scores for one student's submitted unit tests, keyed by attempt id. */
export async function loadUnitTestLessonScores(userId: string): Promise<Record<string, UnitTestLessonScore[]>> {
  const rows = await prisma.mcatUnitTest.findMany({
    where: { userId, completedAt: { not: null } },
    orderBy: { completedAt: 'desc' },
    take: 30,
    select: { id: true, topicSlugs: true, questions: true, answers: true },
  })
  const slugs = new Set<string>()
  for (const r of rows) if (Array.isArray(r.topicSlugs)) for (const s of r.topicSlugs) if (typeof s === 'string') slugs.add(s)
  const topics = slugs.size
    ? await prisma.topic.findMany({ where: { slug: { in: [...slugs] } }, select: { slug: true, title: true } })
    : []
  const titleOf = new Map(topics.map((t) => [t.slug, t.title]))

  const out: Record<string, UnitTestLessonScore[]> = {}
  for (const r of rows) {
    const questions = (Array.isArray(r.questions) ? r.questions : []) as Pick<UnitTestQuestion, 'correctIndex' | 'topicSlug'>[]
    const answers = (Array.isArray(r.answers) ? r.answers : []) as (number | null)[]
    const { byTopic } = gradeUnitTest(questions, answers)
    // Plan order first, then any topic that only appears in the questions.
    const order = [
      ...(Array.isArray(r.topicSlugs) ? (r.topicSlugs as string[]) : []),
      ...Object.keys(byTopic),
    ].filter((s, i, a) => byTopic[s] && a.indexOf(s) === i)
    out[r.id] = order.map((slug) => ({
      slug,
      title: titleOf.get(slug) ?? slug,
      correct: byTopic[slug].correct,
      total: byTopic[slug].total,
    }))
  }
  return out
}
