import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { recordCourseWorkCompletion } from '@/lib/assignment-autocomplete'
import { classPlanCourse } from '@/lib/class-plan-config'

/**
 * FRQ route keys that differ from the class-plan key for the same course.
 * Everything else matches, so this covers the strays rather than restating
 * the whole catalogue.
 */
const FRQ_KEY_ALIASES: Record<string, string> = {
  'ap-calc-ab': 'calcab',
  'ap-calc-bc': 'calcbc',
  'ap-physics-1': 'ap-physics1',
  'ap-physics-2': 'ap-physics2',
  'ap-precalc': 'ap-precalculus',
  'ap-african-american-studies': 'ap-aas',
}

/**
 * Normalise an FRQ page's route key to the canonical Course.slug, so FRQ rows
 * join cleanly against Course and line up with UnitTestAttempt (which already
 * stores real course slugs). Falls back to the raw key rather than dropping
 * the attempt.
 */
function resolveCourseSlug(key: string): string {
  return classPlanCourse(FRQ_KEY_ALIASES[key] ?? key)?.courseSlug ?? key
}

/**
 * Record a completed free-response practice session.
 *
 * FRQ work used to vanish entirely: /api/frq/[course] is read-only and no page
 * ever posted a result, so a student could write a dozen responses, grade them
 * against the rubric, and leave no record for a teacher to see.
 *
 * Best-effort by design — never block the student's results screen.
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
    const mode = body.mode === 'timed' ? 'timed' : 'practice'
    const pointsPossible = Number(body.pointsPossible)
    const pointsEarned = Number(body.pointsEarned)
    const frqCount = Number(body.frqCount)

    if (!courseSlug) {
      return NextResponse.json({ error: 'courseSlug is required' }, { status: 400 })
    }
    if (
      !Number.isFinite(pointsPossible) || pointsPossible <= 0 ||
      !Number.isFinite(pointsEarned) || pointsEarned < 0 || pointsEarned > pointsPossible
    ) {
      return NextResponse.json({ error: 'points out of range' }, { status: 400 })
    }

    const rawTime = Number(body.timeSpent)
    const timeSpent = Number.isFinite(rawTime) ? Math.min(Math.max(0, Math.round(rawTime)), 86_400) : 0

    const attempt = await prisma.frqAttempt.create({
      data: {
        userId: session.user.id,
        courseSlug: resolveCourseSlug(courseSlug),
        mode,
        pointsEarned: Math.round(pointsEarned),
        pointsPossible: Math.round(pointsPossible),
        frqCount: Number.isFinite(frqCount) ? Math.max(0, Math.round(frqCount)) : 0,
        timeSpent,
      },
      select: { id: true },
    })

    // Complete any FRQ_PRACTICE assignment for this course. Scored server-side
    // from the stored rubric points, never from a client-reported score.
    await recordCourseWorkCompletion({
      userId: session.user.id,
      type: 'FRQ_PRACTICE',
      courseSlug: resolveCourseSlug(courseSlug),
      score: pointsEarned / pointsPossible,
    })

    return NextResponse.json({ ok: true, id: attempt.id })
  } catch (error) {
    console.error('[FRQ Attempt Error]', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
