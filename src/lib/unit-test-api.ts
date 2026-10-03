/**
 * The cycle unit test's three endpoints (status, start, submit), shared by
 * every course in unit-test-courses.ts. Each course's route files are thin
 * wrappers: /api/mcat-unit-test, /api/sat-unit-test, /api/act-unit-test.
 */
import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { buildMcatPlanStatus } from '@/lib/mcat-plan'
import { buildSatPlan } from '@/lib/sat-plan'
import { buildActPlanStatus } from '@/lib/act-plan'
import { createUnitTest, publicQuestions, unitTestStatusFor, type McatUnitTestStatus } from '@/lib/mcat-unit-test-server'
import { gradeUnitTest, MCAT_UNIT_TEST_PASS_PERCENT, type UnitTestQuestion } from '@/lib/mcat-unit-test'
import { UNIT_TEST_COURSES, cycleUnitId, type UnitTestCourse } from '@/lib/unit-test-courses'
import { recordCourseWorkCompletion } from '@/lib/assignment-autocomplete'

interface CyclePlan {
  diagnosticId: string
  topics: { slug: string; name: string; isSatisfied: boolean }[]
  canRetakeDiagnostic: boolean
  unitTest: McatUnitTestStatus
}

/** The student's current cycle for a course, from the same builder its plan page uses. */
export async function loadCyclePlan(course: UnitTestCourse, userId: string): Promise<CyclePlan | null> {
  const pick = (t: { slug: string; name: string; isSatisfied: boolean }) => ({ slug: t.slug, name: t.name, isSatisfied: t.isSatisfied })
  if (course === 'mcat') {
    const p = await buildMcatPlanStatus(userId)
    if (!p.hasDiagnostic || !p.diagnosticId || !p.unitTest) return null
    return { diagnosticId: p.diagnosticId, topics: p.recommendedTopics.map(pick), canRetakeDiagnostic: p.canRetakeDiagnostic, unitTest: p.unitTest }
  }
  if (course === 'sat') {
    const p = await buildSatPlan(userId)
    if (!p.hasDiagnostic || p.recommendedTopics.length === 0) return null
    const unitTest = await unitTestStatusFor(userId, p.diagnosticId, p.pendingTopics.length === 0, 'sat')
    return { diagnosticId: p.diagnosticId, topics: p.recommendedTopics.map(pick), canRetakeDiagnostic: true, unitTest }
  }
  const p = await buildActPlanStatus(userId)
  if (!p.hasDiagnostic || !p.diagnosticId || !p.unitTest) return null
  return { diagnosticId: p.diagnosticId, topics: p.recommendedTopics.map(pick), canRetakeDiagnostic: true, unitTest: p.unitTest }
}

async function sessionUser(): Promise<string | null> {
  const session = await auth()
  return session?.user?.id ?? null
}

const disabled = () => NextResponse.json({ error: 'Not available' }, { status: 404 })

/** GET: topics, pass status, past sittings, and an unfinished sitting to resume (no keys). */
export async function unitTestStatusResponse(course: UnitTestCourse) {
  try {
    if (!UNIT_TEST_COURSES[course].enabled) return disabled()
    const userId = await sessionUser()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const plan = await loadCyclePlan(course, userId)
    if (!plan) return NextResponse.json({ hasPlan: false })

    const rows = await prisma.mcatUnitTest.findMany({
      where: { userId, diagnosticId: plan.diagnosticId },
      orderBy: { startedAt: 'asc' },
      select: { id: true, questions: true, total: true, percentage: true, passed: true, completedAt: true },
    })
    const open = plan.unitTest.inProgressId ? rows.find((r) => r.id === plan.unitTest.inProgressId) : undefined

    return NextResponse.json({
      hasPlan: true,
      diagnosticId: plan.diagnosticId,
      canRetakeDiagnostic: plan.canRetakeDiagnostic,
      topics: plan.topics,
      unitTest: plan.unitTest,
      inProgress: open ? { id: open.id, total: open.total, questions: publicQuestions(open.questions) } : null,
      history: rows
        .filter((r) => r.completedAt)
        .map((r) => ({ percentage: r.percentage ?? 0, passed: r.passed, completedAt: r.completedAt })),
    }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (error) {
    console.error(`[${course} unit test GET] failed:`, error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * POST start: only once every plan topic is cleared, and not after a pass. An
 * unfinished sitting is returned as-is, so a refresh can't re-roll it.
 */
export async function unitTestStartResponse(course: UnitTestCourse) {
  try {
    if (!UNIT_TEST_COURSES[course].enabled) return disabled()
    const userId = await sessionUser()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const plan = await loadCyclePlan(course, userId)
    if (!plan) {
      return NextResponse.json({ error: `Take the ${UNIT_TEST_COURSES[course].label} diagnostic first.` }, { status: 409 })
    }
    if (!plan.unitTest.available) {
      return NextResponse.json(
        { error: 'Clear every recommended topic first.', pending: plan.topics.filter((t) => !t.isSatisfied).map((t) => t.slug) },
        { status: 409 },
      )
    }
    if (plan.unitTest.passed) {
      return NextResponse.json({ error: 'You already passed this unit test.' }, { status: 409 })
    }

    if (plan.unitTest.inProgressId) {
      const open = await prisma.mcatUnitTest.findUnique({
        where: { id: plan.unitTest.inProgressId },
        select: { id: true, total: true, questions: true },
      })
      if (open) return NextResponse.json({ id: open.id, total: open.total, questions: publicQuestions(open.questions), resumed: true })
    }

    const created = await createUnitTest(userId, plan.diagnosticId, plan.topics.map((t) => t.slug))
    if (!created) {
      return NextResponse.json({ error: 'No questions are available for these topics yet.' }, { status: 503 })
    }
    return NextResponse.json({ id: created.id, total: created.total, questions: publicQuestions(created.questions), resumed: false })
  } catch (error) {
    console.error(`[${course} unit test start] failed:`, error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

/**
 * POST submit: grade against the frozen questions (the client only sends
 * choices). Also logs a UnitTestAttempt so the teacher sees the sitting and a
 * course UNIT_TEST assignment completes.
 */
export async function unitTestSubmitResponse(course: UnitTestCourse, req: Request) {
  try {
    if (!UNIT_TEST_COURSES[course].enabled) return disabled()
    const userId = await sessionUser()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    let body: { id?: unknown; answers?: unknown; timeSpent?: unknown }
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }
    const id = typeof body.id === 'string' ? body.id : ''
    if (!id || !Array.isArray(body.answers)) {
      return NextResponse.json({ error: 'id and answers are required' }, { status: 400 })
    }

    const row = await prisma.mcatUnitTest.findUnique({
      where: { id },
      select: { userId: true, questions: true, completedAt: true, startedAt: true, diagnosticId: true },
    })
    if (!row || row.userId !== userId) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    if (row.completedAt) return NextResponse.json({ error: 'This sitting was already submitted.' }, { status: 409 })

    const questions = (Array.isArray(row.questions) ? row.questions : []) as unknown as UnitTestQuestion[]
    const answers = questions.map((q, i) => {
      const a = (body.answers as unknown[])[i]
      return typeof a === 'number' && Number.isInteger(a) && a >= 0 && a < q.options.length ? a : null
    })
    const graded = gradeUnitTest(questions, answers)

    // Guarded update: a double submit can't grade the same sitting twice.
    const { count } = await prisma.mcatUnitTest.updateMany({
      where: { id, completedAt: null },
      data: { answers, correct: graded.correct, percentage: graded.percentage, passed: graded.passed, completedAt: new Date() },
    })
    if (count === 0) return NextResponse.json({ error: 'This sitting was already submitted.' }, { status: 409 })

    const cfg = UNIT_TEST_COURSES[course]
    const rawTime = Number(body.timeSpent)
    const timeSpent = Number.isFinite(rawTime)
      ? Math.min(Math.max(0, Math.round(rawTime)), 86_400)
      : Math.round((Date.now() - row.startedAt.getTime()) / 1000)
    try {
      const unitId = cycleUnitId(course, row.diagnosticId)
      await prisma.unitTestAttempt.create({
        data: {
          userId,
          courseSlug: cfg.courseSlug,
          unitId,
          unitTitle: `${cfg.label} unit test (recommended topics)`,
          correct: graded.correct,
          total: graded.total,
          percentage: graded.percentage,
          timeSpent,
        },
      })
      await recordCourseWorkCompletion({
        userId,
        type: 'UNIT_TEST',
        courseSlug: cfg.courseSlug,
        unitId,
        score: graded.total > 0 ? graded.correct / graded.total : 0,
      })
    } catch (err) {
      // Teacher-visibility side effects must never cost the student their result.
      console.warn(`[${course} unit test submit] side effects failed:`, err)
    }

    return NextResponse.json({
      correct: graded.correct,
      total: graded.total,
      percentage: graded.percentage,
      passed: graded.passed,
      passPercent: MCAT_UNIT_TEST_PASS_PERCENT,
      byTopic: graded.byTopic,
      review: questions.map((q, i) => ({
        topicSlug: q.topicSlug,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        selected: answers[i],
        explanation: q.explanation,
      })),
    })
  } catch (error) {
    console.error(`[${course} unit test submit] failed:`, error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
