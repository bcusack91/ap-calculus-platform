import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

/**
 * GET /api/student/assignments — list all assignments for the logged-in student
 * across all classrooms they belong to.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.user.id

    // Get all classrooms this student belongs to
    const memberships = await prisma.classroomMember.findMany({
      where: { userId, isActive: true },
      select: {
        classroom: {
          select: {
            id: true,
            name: true,
            teacher: { select: { name: true } },
          },
        },
      },
    })

    if (memberships.length === 0) {
      return NextResponse.json({ assignments: [], classrooms: [] })
    }

    const classroomIds = memberships.map((m) => m.classroom.id)

    // Get all active assignments for those classrooms, with this student's submission
    const assignments = await prisma.assignment.findMany({
      where: {
        classroomId: { in: classroomIds },
        isActive: true,
      },
      include: {
        classroom: {
          select: { id: true, name: true, teacher: { select: { name: true } } },
        },
        submissions: {
          where: { studentId: userId },
          take: 1,
        },
      },
      orderBy: [{ dueDate: 'asc' }, { createdAt: 'desc' }],
    })

    // Shape the response
    const shaped = assignments.map((a) => {
      const submission = a.submissions[0] || null
      const isOverdue = a.dueDate && new Date(a.dueDate) < new Date() && submission?.status !== 'COMPLETED'

      return {
        id: a.id,
        title: a.title,
        description: a.description,
        type: a.type,
        topicSlug: a.topicSlug,
        topicSlugs: a.topicSlugs,
        flashcardSetId: a.flashcardSetId,
        dueDate: a.dueDate,
        maxAttempts: a.maxAttempts,
        requiredScore: a.requiredScore,
        createdAt: a.createdAt,
        classroom: {
          id: a.classroom.id,
          name: a.classroom.name,
          teacher: a.classroom.teacher?.name || 'Teacher',
        },
        submission: submission
          ? {
              id: submission.id,
              status: isOverdue ? 'OVERDUE' : submission.status,
              score: submission.score,
              attempts: submission.attempts,
              completedAt: submission.completedAt,
            }
          : {
              id: null,
              status: isOverdue ? 'OVERDUE' : 'NOT_STARTED',
              score: null,
              attempts: 0,
              completedAt: null,
            },
      }
    })

    const classrooms = memberships.map((m) => ({
      id: m.classroom.id,
      name: m.classroom.name,
      teacher: m.classroom.teacher?.name || 'Teacher',
    }))

    return NextResponse.json({ assignments: shaped, classrooms })
  } catch (error) {
    console.error('[GET /api/student/assignments]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
