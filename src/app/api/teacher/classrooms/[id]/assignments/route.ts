import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

/**
 * GET  /api/teacher/classrooms/[id]/assignments — list assignments
 * POST /api/teacher/classrooms/[id]/assignments — create an assignment
 */

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

    const assignments = await prisma.assignment.findMany({
      where: { classroomId: id, isActive: true },
      include: {
        submissions: {
          include: {
            student: { select: { id: true, name: true, email: true, image: true } },
          },
        },
        _count: { select: { submissions: true } },
      },
      orderBy: { createdAt: 'desc' },
    })

    // Also get total student count for completion stats
    const memberCount = await prisma.classroomMember.count({
      where: { classroomId: id, isActive: true },
    })

    return NextResponse.json({ assignments, memberCount })
  } catch (error) {
    console.error('[GET /api/teacher/classrooms/[id]/assignments]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

  const { title, description, type, topicSlug, topicSlugs, quizId, flashcardSetId, courseSlug, unitId, dueDate, maxAttempts, requiredScore } =
    await req.json()

  if (!title || typeof title !== 'string') {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  }

  const VALID_TYPES = ['INTERACTIVE_LESSON', 'FLASHCARD_REVIEW', 'QUIZ', 'COMPETITIVE_PRACTICE', 'UNIT_TEST', 'FRQ_PRACTICE']
  if (!type || !VALID_TYPES.includes(type)) {
    return NextResponse.json({ error: 'Valid assignment type is required' }, { status: 400 })
  }

  // Coerce/validate the optional fields BEFORE Prisma so a malformed value
  // returns a clean 400 instead of an unhandled Prisma 500.
  let due: Date | null = null
  if (dueDate) {
    const d = new Date(dueDate)
    if (isNaN(d.getTime())) return NextResponse.json({ error: 'Invalid due date' }, { status: 400 })
    due = d
  }
  // Blank/invalid maxAttempts means UNLIMITED (the form's placeholder says
  // "Unlimited") — previously this collapsed to 1, silently locking students
  // out after a single attempt.
  const attemptsNum = Number(maxAttempts)
  const attempts = Number.isFinite(attemptsNum) && attemptsNum > 0 ? Math.min(Math.floor(attemptsNum), 9999) : 9999
  const reqScore = typeof requiredScore === 'number' && requiredScore >= 0 && requiredScore <= 1 ? requiredScore : null

  // If a flashcard set is attached, the teacher must own it.
  const fsid = typeof flashcardSetId === 'string' && flashcardSetId.trim() ? flashcardSetId.trim() : null
  if (fsid) {
    const ownedSet = await prisma.flashcardSet.findFirst({ where: { id: fsid, teacherId: result.user!.id } })
    if (!ownedSet) return NextResponse.json({ error: 'Not your flashcard set' }, { status: 403 })
  }

  const assignment = await prisma.assignment.create({
    data: {
      classroomId: id,
      createdById: result.user!.id,
      title: title.trim(),
      description: description?.trim() || null,
      type,
      topicSlug: topicSlug || null,
      topicSlugs: topicSlugs || null,
      quizId: quizId || null,
      // UNIT_TEST / FRQ_PRACTICE are scoped to a course rather than a topic.
      courseSlug: courseSlug || null,
      unitId: unitId || null,
      flashcardSetId: fsid,
      dueDate: due,
      maxAttempts: attempts,
      requiredScore: reqScore,
    },
  })

  // Auto-create submission records for all active members
  const members = await prisma.classroomMember.findMany({
    where: { classroomId: id, isActive: true },
  })

  if (members.length > 0) {
    await prisma.assignmentSubmission.createMany({
      data: members.map((m) => ({
        assignmentId: assignment.id,
        studentId: m.userId,
        status: 'NOT_STARTED' as const,
      })),
    })
  }

  return NextResponse.json({ assignment }, { status: 201 })
  } catch (error) {
    console.error('[POST /api/teacher/classrooms/[id]/assignments]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
