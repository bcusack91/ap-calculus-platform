import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * Record a completed unit test.
 *
 * Every course's unit-test page renders through the shared UnitTestsClient, so
 * this one endpoint covers all of them. Before it existed a student could work
 * every unit test in a course and their teacher saw nothing at all.
 *
 * Best-effort by design: the client fires this without blocking the results
 * screen, so a failure here must never cost the student their score display.
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

    const attempt = await prisma.unitTestAttempt.create({
      data: {
        userId: session.user.id,
        courseSlug,
        unitId,
        unitTitle: unitTitle || unitId,
        variant,
        correct: Math.round(correct),
        total: Math.round(total),
        percentage: Math.round((correct / total) * 100),
        timeSpent,
      },
      select: { id: true },
    })

    return NextResponse.json({ ok: true, id: attempt.id })
  } catch (error) {
    console.error('[Unit Test Attempt Error]', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
