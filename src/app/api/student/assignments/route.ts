import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { assignmentTopics, clearedTopics } from '@/lib/assignment-autocomplete'

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
        id: true,
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
      return NextResponse.json({ assignments: [], classrooms: [], upcomingCompetitions: [] })
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

    // Per-topic progress for MULTI-TOPIC assignments, so the student can see
    // which of the assigned subtopics are done and jump to the next one. A
    // single link to assignment.topicSlug stranded them on the first topic.
    const multiSlugs = [
      ...new Set(
        assignments.flatMap((a) => (assignmentTopics(a).length > 1 ? assignmentTopics(a) : [])),
      ),
    ]
    const [clearedSet, topicTitles] = await Promise.all([
      multiSlugs.length > 0
        ? clearedTopics(session.user.id, multiSlugs, 0.8)
        : Promise.resolve(new Set<string>()),
      multiSlugs.length > 0
        ? prisma.topic.findMany({ where: { slug: { in: multiSlugs } }, select: { slug: true, title: true } })
        : Promise.resolve([] as { slug: string; title: string }[]),
    ])
    const titleOf = new Map(topicTitles.map((t) => [t.slug, t.title]))

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
        topics: assignmentTopics(a).length > 1
          ? assignmentTopics(a).map((slug) => ({
              slug,
              title: titleOf.get(slug) ?? slug.replace(/-/g, ' '),
              done: clearedSet.has(slug),
            }))
          : null,
        flashcardSetId: a.flashcardSetId,
        // UNIT_TEST / FRQ_PRACTICE are course-scoped, so the student page needs
        // these to route to the right unit-tests or free-response page.
        courseSlug: a.courseSlug,
        unitId: a.unitId,
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

    // The student's classroom groups ("Blue Table"), keyed by membership id.
    // ADDITIVE + P2021-safe: the ClassroomGroup tables may not exist yet in an
    // environment (migrations are applied manually) — then groups are just [].
    const groupsByMemberId = new Map<string, string[]>()
    try {
      const groupRows = await prisma.classroomGroupMember.findMany({
        where: { memberId: { in: memberships.map((m) => m.id) } },
        select: { memberId: true, group: { select: { name: true } } },
        orderBy: { group: { name: 'asc' } },
      })
      for (const row of groupRows) {
        const list = groupsByMemberId.get(row.memberId) ?? []
        list.push(row.group.name)
        groupsByMemberId.set(row.memberId, list)
      }
    } catch (e) {
      const code = (e as { code?: string } | null)?.code
      if (code !== 'P2021' && code !== 'P2022') throw e
    }

    const classrooms = memberships.map((m) => ({
      id: m.classroom.id,
      name: m.classroom.name,
      teacher: m.classroom.teacher?.name || 'Teacher',
      groups: groupsByMemberId.get(m.id) ?? [],
    }))

    // Upcoming scheduled live games for the student's classrooms — a read-only
    // heads-up ("be in class Friday"). The teacher launches the actual live
    // lobby at game time; no answer/question data is exposed here.
    const upcomingCompetitions = await prisma.scheduledCompetition.findMany({
      where: {
        classroomId: { in: classroomIds },
        status: 'SCHEDULED',
        endsAt: { gte: new Date() },
      },
      select: {
        id: true,
        title: true,
        scheduledAt: true,
        endsAt: true,
        duration: true,
        classroom: { select: { id: true, name: true } },
      },
      orderBy: { scheduledAt: 'asc' },
      take: 10,
    })

    return NextResponse.json({ assignments: shaped, classrooms, upcomingCompetitions })
  } catch (error) {
    console.error('[GET /api/student/assignments]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
