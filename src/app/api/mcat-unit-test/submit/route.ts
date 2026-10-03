import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { gradeUnitTest, MCAT_UNIT_TEST_PASS_PERCENT, type UnitTestQuestion } from '@/lib/mcat-unit-test'
import { recordCourseWorkCompletion } from '@/lib/assignment-autocomplete'

/**
 * Grade a unit-test sitting against its frozen questions (server-side; the
 * client only sends choices). Also logs a UnitTestAttempt so the teacher sees
 * the sitting under "Work done independently" and a course UNIT_TEST
 * assignment for the MCAT completes.
 */
export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const userId = session.user.id

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
      data: {
        answers,
        correct: graded.correct,
        percentage: graded.percentage,
        passed: graded.passed,
        completedAt: new Date(),
      },
    })
    if (count === 0) return NextResponse.json({ error: 'This sitting was already submitted.' }, { status: 409 })

    const rawTime = Number(body.timeSpent)
    const timeSpent = Number.isFinite(rawTime)
      ? Math.min(Math.max(0, Math.round(rawTime)), 86_400)
      : Math.round((Date.now() - row.startedAt.getTime()) / 1000)
    try {
      await prisma.unitTestAttempt.create({
        data: {
          userId,
          courseSlug: 'mcat-prep',
          unitId: `mcat-cycle-${row.diagnosticId}`,
          unitTitle: 'MCAT unit test (recommended topics)',
          correct: graded.correct,
          total: graded.total,
          percentage: graded.percentage,
          timeSpent,
        },
      })
      await recordCourseWorkCompletion({
        userId,
        type: 'UNIT_TEST',
        courseSlug: 'mcat-prep',
        unitId: `mcat-cycle-${row.diagnosticId}`,
        score: graded.total > 0 ? graded.correct / graded.total : 0,
      })
    } catch (err) {
      // Teacher-visibility side effects must never cost the student their result.
      console.warn('[mcat unit test submit] side effects failed:', err)
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
    console.error('[mcat unit test submit] failed:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
