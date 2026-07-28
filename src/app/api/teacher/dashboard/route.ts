import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/dashboard — teacher dashboard overview
 * Returns summary stats across all classrooms
 */

export async function GET() {
  try {
    const result = await requireTeacher()
    if ('error' in result && result.error) return result.error

    const teacherId = result.user!.id

  // Get all classrooms with counts — owned OR co-taught.
  const classrooms = await prisma.classroom.findMany({
    where: {
      isActive: true,
      OR: [{ teacherId }, { coTeachers: { some: { userId: teacherId } } }],
    },
    include: {
      _count: { select: { members: true, assignments: true, competitions: true } },
    },
    orderBy: { createdAt: 'desc' },
  })

  // Get all student IDs across classrooms
  const classroomIds = classrooms.map((c) => c.id)
  const allMembers = await prisma.classroomMember.findMany({
    where: { classroomId: { in: classroomIds }, isActive: true },
    select: { userId: true, classroomId: true },
  })
  const uniqueStudentIds = [...new Set(allMembers.map((m) => m.userId))]

  // Aggregate stats
  const totalStudents = uniqueStudentIds.length

  // Recent assignment submissions
  const recentSubmissions = await prisma.assignmentSubmission.findMany({
    where: {
      assignment: { classroomId: { in: classroomIds } },
      completedAt: { not: null },
    },
    include: {
      student: { select: { id: true, name: true, email: true } },
      assignment: { select: { id: true, title: true, type: true, classroomId: true } },
    },
    orderBy: { completedAt: 'desc' },
    take: 20,
  })

  // Pending assignments (due soon or overdue)
  const now = new Date()
  const upcomingAssignments = await prisma.assignment.findMany({
    where: {
      classroomId: { in: classroomIds },
      isActive: true,
      dueDate: { gte: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000) }, // last 7 days or future
    },
    include: {
      _count: { select: { submissions: true } },
      submissions: { where: { status: 'COMPLETED' }, select: { id: true } },
      classroom: { select: { id: true, name: true } },
    },
    orderBy: { dueDate: 'asc' },
    take: 10,
  })

  // Upcoming competitions — scheduled live games that haven't been launched
  // yet (launching converts them to a TeacherLobby and marks them COMPLETED).
  // The endsAt filter keeps never-launched past games from lingering here.
  const upcomingCompetitions = await prisma.scheduledCompetition.findMany({
    where: {
      classroomId: { in: classroomIds },
      status: { in: ['SCHEDULED', 'ACTIVE'] },
      endsAt: { gte: now },
    },
    include: {
      classroom: { select: { name: true } },
      _count: { select: { participants: true } },
    },
    orderBy: { scheduledAt: 'asc' },
    take: 5,
  })

  // Overall student progress snapshot
  let avgMastery = 0
  if (uniqueStudentIds.length > 0) {
    const progressAgg = await prisma.topicProgress.aggregate({
      where: { userId: { in: uniqueStudentIds } },
      _avg: { masteryLevel: true },
    })
    avgMastery = Math.round((progressAgg._avg.masteryLevel || 0) * 100)
  }

  /**
   * Students needing attention.
   *
   * A class average answers "how are we doing" — which is not a question a
   * teacher can act on, and it actively hides the students who need help. This
   * names them instead, with the reason, so the dashboard points at work.
   *
   * Three signals, cheapest first, deliberately conservative so the list stays
   * short enough to actually be worked through:
   *   failing   — a graded submission below the assignment's required score
   *   overdue   — an assignment past due with nothing submitted
   *   inactive  — no lesson activity in 14 days (only counted for students who
   *               have been active at some point, so a class that has not
   *               started yet does not light up red on day one)
   */
  const attentionSince = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
  const [failingSubs, overdueAssignments, recentActivity] = await Promise.all([
    prisma.assignmentSubmission.findMany({
      where: {
        assignment: { classroomId: { in: classroomIds } },
        status: 'COMPLETED',
        score: { not: null },
      },
      select: {
        score: true,
        student: { select: { id: true, name: true, email: true } },
        assignment: { select: { title: true, requiredScore: true, classroomId: true } },
      },
      orderBy: { completedAt: 'desc' },
      take: 200,
    }),
    prisma.assignment.findMany({
      where: { classroomId: { in: classroomIds }, isActive: true, dueDate: { lt: now } },
      select: {
        id: true,
        title: true,
        classroomId: true,
        submissions: { select: { studentId: true, status: true } },
      },
      take: 50,
    }),
    prisma.topicProgress.findMany({
      where: { userId: { in: uniqueStudentIds }, lastAccessed: { gte: attentionSince } },
      select: { userId: true },
      distinct: ['userId'],
    }),
  ])

  type Attention = {
    studentId: string; studentName: string; classroomId: string
    reasons: string[]; severity: number
  }
  const attention = new Map<string, Attention>()
  const noteAttention = (
    studentId: string, studentName: string, classroomId: string, reason: string, weight: number
  ) => {
    const prev = attention.get(studentId)
    if (prev) {
      if (!prev.reasons.includes(reason)) prev.reasons.push(reason)
      prev.severity += weight
    } else {
      attention.set(studentId, { studentId, studentName, classroomId, reasons: [reason], severity: weight })
    }
  }

  for (const sub of failingSubs) {
    // requiredScore is a percentage; submission score is a 0-1 fraction.
    const required = sub.assignment.requiredScore ?? 70
    if (sub.score !== null && sub.score * 100 < required) {
      noteAttention(
        sub.student.id, sub.student.name || sub.student.email || 'Student',
        sub.assignment.classroomId, `scored below target on "${sub.assignment.title}"`, 3
      )
    }
  }

  const membersByClassroom = new Map<string, string[]>()
  for (const m of allMembers) {
    const list = membersByClassroom.get(m.classroomId) ?? []
    list.push(m.userId)
    membersByClassroom.set(m.classroomId, list)
  }
  const studentNameById = new Map(
    (await prisma.user.findMany({
      where: { id: { in: uniqueStudentIds } },
      select: { id: true, name: true, email: true },
    })).map((u) => [u.id, u.name || u.email || 'Student'])
  )

  for (const a of overdueAssignments) {
    const submitted = new Set(a.submissions.filter((s) => s.status === 'COMPLETED').map((s) => s.studentId))
    for (const studentId of membersByClassroom.get(a.classroomId) ?? []) {
      if (!submitted.has(studentId)) {
        noteAttention(studentId, studentNameById.get(studentId) ?? 'Student', a.classroomId, `has not submitted "${a.title}"`, 2)
      }
    }
  }

  const activeRecently = new Set(recentActivity.map((r) => r.userId))
  const everActive = new Set(
    (await prisma.topicProgress.findMany({
      where: { userId: { in: uniqueStudentIds } },
      select: { userId: true },
      distinct: ['userId'],
    })).map((r) => r.userId)
  )
  for (const m of allMembers) {
    if (everActive.has(m.userId) && !activeRecently.has(m.userId)) {
      noteAttention(m.userId, studentNameById.get(m.userId) ?? 'Student', m.classroomId, 'no activity in 14 days', 1)
    }
  }

  const needsAttention = [...attention.values()]
    .sort((a, b) => b.severity - a.severity)
    .slice(0, 12)

  return NextResponse.json({
    // coTaught flag lets the UI badge classes the teacher co-teaches (vs owns).
    classrooms: classrooms.map((c) => ({ ...c, coTaught: c.teacherId !== teacherId })),
    stats: {
      totalClassrooms: classrooms.length,
      totalStudents,
      avgMastery,
      needsAttentionCount: needsAttention.length,
    },
    // IDs are included so the dashboard can link each row straight to the place
    // a teacher acts on it, rather than making them navigate back down the tree.
    recentSubmissions: recentSubmissions.map((s) => ({
      submissionId: s.id,
      studentId: s.student.id,
      studentName: s.student.name || s.student.email,
      classroomId: s.assignment.classroomId,
      assignmentId: s.assignment.id,
      assignmentTitle: s.assignment.title,
      type: s.assignment.type,
      score: s.score !== null ? Math.round((s.score || 0) * 100) : null,
      feedback: s.feedback,
      completedAt: s.completedAt,
    })),
    upcomingAssignments: upcomingAssignments.map((a) => ({
      id: a.id,
      title: a.title,
      classroomId: a.classroom.id,
      classroom: a.classroom.name,
      dueDate: a.dueDate,
      totalStudents: a._count.submissions,
      completedCount: a.submissions.length,
      isOverdue: a.dueDate ? a.dueDate < now : false,
    })),
    upcomingCompetitions,
    needsAttention,
  })
  } catch (error) {
    console.error('[GET /api/teacher/dashboard]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
