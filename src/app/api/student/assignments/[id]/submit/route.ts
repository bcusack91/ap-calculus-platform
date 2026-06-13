import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

/**
 * POST /api/student/assignments/[id]/submit
 *
 * Records a student's submission for an assignment. `[id]` is the **assignment**
 * id (mirroring GET /api/student/assignments, which exposes the assignment id).
 *
 * Ownership is scoped to the logged-in student two ways:
 *   1. We only ever read/write the AssignmentSubmission whose studentId is the
 *      session user's id (the (assignmentId, studentId) pair is unique).
 *   2. We verify the student is an active member of the assignment's classroom,
 *      so a student cannot submit to an assignment in a classroom they left.
 *
 * Body: { score?: number }  // 0-1 mastery, bounded; defaults to 0 if omitted.
 *
 * On success sets status=COMPLETED, score, completedAt=now (and startedAt if it
 * was never started) and increments attempts. Enforces the assignment's
 * maxAttempts limit.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const studentId = session.user.id

    const { id: assignmentId } = await params

    // Parse + validate the score from the body. Score is a 0-1 mastery value
    // (see schema). Bound it defensively so a client cannot store junk.
    let score = 0
    try {
      const body = await req.json()
      if (body && body.score !== undefined && body.score !== null) {
        const raw = Number(body.score)
        if (!Number.isFinite(raw)) {
          return NextResponse.json(
            { error: 'score must be a number between 0 and 1' },
            { status: 400 }
          )
        }
        score = Math.min(1, Math.max(0, raw))
      }
    } catch {
      // No/invalid JSON body — treat as a submission with no score.
      score = 0
    }

    // Verify the assignment exists, is active, and the student is an active
    // member of its classroom. This is the ownership/authorization check.
    const assignment = await prisma.assignment.findFirst({
      where: {
        id: assignmentId,
        isActive: true,
        classroom: {
          members: { some: { userId: studentId, isActive: true } },
        },
      },
      select: { id: true, maxAttempts: true },
    })

    if (!assignment) {
      return NextResponse.json(
        { error: 'Assignment not found' },
        { status: 404 }
      )
    }

    // Look up this student's existing submission row (created as NOT_STARTED
    // when the assignment was assigned). Scoped by studentId — never trust a
    // submission id from the client.
    const existing = await prisma.assignmentSubmission.findUnique({
      where: {
        assignmentId_studentId: {
          assignmentId: assignment.id,
          studentId,
        },
      },
      select: { id: true, attempts: true, startedAt: true },
    })

    const priorAttempts = existing?.attempts ?? 0
    if (priorAttempts >= assignment.maxAttempts) {
      return NextResponse.json(
        { error: 'Maximum attempts reached for this assignment' },
        { status: 409 }
      )
    }

    const now = new Date()

    // Upsert the submission. A submission row normally already exists (teacher
    // create seeds NOT_STARTED rows), but upsert keeps this robust if a student
    // joined after the assignment was created.
    const submission = await prisma.assignmentSubmission.upsert({
      where: {
        assignmentId_studentId: {
          assignmentId: assignment.id,
          studentId,
        },
      },
      create: {
        assignmentId: assignment.id,
        studentId,
        status: 'COMPLETED',
        score,
        attempts: 1,
        startedAt: now,
        completedAt: now,
      },
      update: {
        status: 'COMPLETED',
        score,
        attempts: { increment: 1 },
        startedAt: existing?.startedAt ?? now,
        completedAt: now,
      },
      select: {
        id: true,
        status: true,
        score: true,
        attempts: true,
        completedAt: true,
      },
    })

    return NextResponse.json({ submission })
  } catch (error) {
    console.error('[POST /api/student/assignments/[id]/submit]', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
