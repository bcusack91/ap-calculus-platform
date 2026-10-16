import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { recordCourseWorkCompletion } from '@/lib/assignment-autocomplete'
import { recordQuestions } from '@/lib/study-tracking'
import { loadApUnitTestCourse, type ApUnitTestCourse } from '@/lib/unit-tests/ap-unit-test-registry'
import { apUnitTestRows, gradeApUnitTest } from '@/lib/question-sources/ap-unit-test'

/**
 * Record a completed unit test.
 *
 * Every course's unit-test page renders through the shared UnitTestsClient, so
 * this one endpoint covers all of them. Before it existed a student could work
 * every unit test in a course and their teacher saw nothing at all.
 *
 * Best-effort by design: the client fires this without blocking the results
 * screen, so a failure here must never cost the student their score display.
 *
 * AP courses also get a per-question answer log (attemptKind 'unit-test',
 * attemptId = the UnitTestAttempt id) for the review page and the mistake
 * log. The page sends its choices (`answers`, shown order) and a fingerprint
 * of each stem (`stems`); the server re-draws the test, grades it itself, and
 * stores the server's count whenever it could grade every question.
 */
export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const courseSlug = typeof body.courseSlug === 'string' ? body.courseSlug.slice(0, 100) : ''
    const unitId = typeof body.unitId === 'string' ? body.unitId.slice(0, 100) : ''
    const unitTitle = typeof body.unitTitle === 'string' ? body.unitTitle.slice(0, 300) : ''
    const total = Number(body.total)
    const correct = Number(body.correct)

    if (!courseSlug || !unitId) {
      return NextResponse.json({ error: 'courseSlug and unitId are required' }, { status: 400 })
    }
    if (!Number.isFinite(total) || total <= 0 || !Number.isFinite(correct) || correct < 0 || correct > total) {
      return NextResponse.json({ error: 'correct/total out of range' }, { status: 400 })
    }

    const variant = Number.isFinite(Number(body.variant)) ? Math.max(1, Math.round(Number(body.variant))) : 1
    const rawTime = Number(body.timeSpent)
    // Clamp rather than reject: a clock the client got wrong should not lose the attempt.
    const timeSpent = Number.isFinite(rawTime) ? Math.min(Math.max(0, Math.round(rawTime)), 86_400) : 0

    // AP: grade every question against the server's own draw.
    let graded: ReturnType<typeof gradeApUnitTest> | null = null
    if (Array.isArray(body.answers)) {
      let course: ApUnitTestCourse | null = null
      try {
        course = await (loadApUnitTestCourse(courseSlug) ?? Promise.resolve(null))
      } catch (err) {
        console.warn('[Unit Test Attempt] AP pool unavailable; logging the score only:', err)
      }
      if (course) {
        graded = gradeApUnitTest(course, {
          unitId,
          variant,
          answers: body.answers.slice(0, 200),
          stems: Array.isArray(body.stems) ? body.stems.slice(0, 200) : undefined,
        })
      }
    }
    const serverScored = graded?.complete === true
    const finalTotal = serverScored ? graded!.positions.length : Math.round(total)
    const finalCorrect = serverScored ? graded!.positions.filter((p) => p.correct).length : Math.round(correct)

    const attempt = await prisma.unitTestAttempt.create({
      data: {
        userId: session.user.id,
        courseSlug,
        unitId,
        unitTitle: unitTitle || unitId,
        variant,
        correct: finalCorrect,
        total: finalTotal,
        percentage: Math.round((finalCorrect / finalTotal) * 100),
        timeSpent,
      },
      select: { id: true },
    })

    // Per-question answer log, after the attempt row (never throws).
    if (graded?.positions.length) {
      await recordQuestions(session.user.id, apUnitTestRows(graded.positions, {
        courseSlug,
        attemptId: attempt.id,
        timeSpentSeconds: timeSpent,
        total: finalTotal,
      }))
    }

    // Complete any UNIT_TEST assignment covering this course/unit. Scored
    // server-side from the stored counts, never from a client-reported score.
    await recordCourseWorkCompletion({
      userId: session.user.id,
      type: 'UNIT_TEST',
      courseSlug,
      unitId,
      score: finalCorrect / finalTotal,
    })

    return NextResponse.json({ ok: true, id: attempt.id })
  } catch (error) {
    console.error('[Unit Test Attempt Error]', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
