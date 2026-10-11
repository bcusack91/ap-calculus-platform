import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { goalBodySchema, isGoalCourse, normalizeGoalColleges, parseStoredColleges } from '@/lib/exam-goals'
import { currentScoreFor } from '@/lib/exam-goal-server'

export const dynamic = 'force-dynamic'

/**
 * A student's score goal and target colleges for one exam. Owner-scoped: every
 * read and write is keyed on the session user, never on a client-sent id.
 *
 *   GET /api/exam-goals?course=sat|mcat|act|psat → { goal | null, current }
 *   PUT /api/exam-goals { course, targetScore, colleges?: [{ name }] } → { goal }
 *
 * College ranges come from the curated list (src/data/college-score-ranges.ts);
 * anything the client sends besides the name is ignored.
 */

const NO_STORE = { 'Cache-Control': 'private, no-store' }

export async function GET(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const course = req.nextUrl.searchParams.get('course')
  if (!isGoalCourse(course)) return NextResponse.json({ error: 'Unknown course.' }, { status: 400 })

  const [row, current] = await Promise.all([
    prisma.examGoal.findUnique({
      where: { userId_course: { userId, course } },
      select: { targetScore: true, colleges: true, updatedAt: true },
    }),
    currentScoreFor(userId, course),
  ])
  const goal = row
    ? { course, targetScore: row.targetScore, colleges: parseStoredColleges(row.colleges), updatedAt: row.updatedAt.toISOString() }
    : null
  return NextResponse.json({ goal, current }, { headers: NO_STORE })
}

export async function PUT(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = goalBodySchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) {
    const message = parsed.error.issues.find((i) => i.path[0] === 'targetScore')?.message
    return NextResponse.json({ error: message && !message.startsWith('Invalid') ? message : 'Check the goal and try again.' }, { status: 400 })
  }
  const { course, targetScore } = parsed.data
  const colleges = normalizeGoalColleges(course, parsed.data.colleges)

  const row = await prisma.examGoal.upsert({
    where: { userId_course: { userId, course } },
    create: { userId, course, targetScore, colleges },
    update: { targetScore, ...(parsed.data.colleges ? { colleges } : {}) },
    select: { targetScore: true, colleges: true, updatedAt: true },
  })
  return NextResponse.json(
    { goal: { course, targetScore: row.targetScore, colleges: parseStoredColleges(row.colleges), updatedAt: row.updatedAt.toISOString() } },
    { headers: NO_STORE },
  )
}
