import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'
import { applyDismissals, membershipAttention, scoredBelowTarget, type AttentionEntry } from '@/lib/attention-dismissals'
import { studentActivity } from '@/lib/student-activity'
import { gettingStartedStatus } from '@/lib/teacher-getting-started'

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
      // A student who left keeps an inactive membership row, so count only
      // the active ones — the section page lists active members and the
      // two must agree.
      _count: { select: { members: { where: { isActive: true } }, assignments: true, competitions: true } },
    },
    orderBy: { createdAt: 'desc' },
  })

  // Get all student IDs across classrooms
  const classroomIds = classrooms.map((c) => c.id)
  const allMembers = await prisma.classroomMember.findMany({
    where: { classroomId: { in: classroomIds }, isActive: true },
    select: { userId: true, classroomId: true, joinedAt: true },
    orderBy: { joinedAt: 'asc' },
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

  // Overall student progress snapshot. null (not 0) when there is nothing to
  // average — no students, or students with no topic progress yet — so the
  // dashboard can say so instead of showing a red "0%".
  let avgMastery: number | null = null
  if (uniqueStudentIds.length > 0) {
    const progressAgg = await prisma.topicProgress.aggregate({
      where: { userId: { in: uniqueStudentIds } },
      _avg: { masteryLevel: true },
    })
    const avg = progressAgg._avg.masteryLevel
    avgMastery = typeof avg === 'number' ? Math.round(avg * 100) : null
  }

  /**
   * Students needing attention.
   *
   * A class average answers "how are we doing" — which is not a question a
   * teacher can act on, and it actively hides the students who need help. This
   * names them instead, with the reason, so the dashboard points at work.
   *
   * Signals, deliberately conservative so the list stays short enough to
   * actually be worked through:
   *   failing      — a graded submission below the assignment's required score
   *   overdue      — an assignment past due with nothing submitted
   *   account      — never signed in, signed in but never started, or no
   *                  study activity in 14 days (membershipAttention). The first
   *                  two wait a few days after the student was added, so a
   *                  roster imported today does not fill the list.
   */
  const [failingSubs, overdueAssignments, activity] = await Promise.all([
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
    studentActivity(uniqueStudentIds),
  ])

  const attention = new Map<string, AttentionEntry>()
  const noteAttention = (
    studentId: string, studentName: string, classroomId: string, reason: string, weight: number
  ) => {
    const prev = attention.get(studentId)
    if (prev) {
      if (!prev.items.some((i) => i.reason === reason)) prev.items.push({ reason, weight })
    } else {
      attention.set(studentId, { studentId, studentName, classroomId, items: [{ reason, weight }] })
    }
  }

  for (const sub of failingSubs) {
    if (scoredBelowTarget(sub.score, sub.assignment.requiredScore)) {
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

  for (const r of membershipAttention(allMembers, activity, now)) {
    noteAttention(r.userId, studentNameById.get(r.userId) ?? 'Student', r.classroomId, r.reason, r.weight)
  }

  // Drop what this teacher has already marked as seen (see
  // src/lib/attention-dismissals.ts). Filter BEFORE the cap, or cleared rows
  // would still use up slots and hide students behind them.
  const dismissals = await prisma.attentionDismissal.findMany({
    where: { teacherId, studentId: { in: [...attention.keys()] } },
    select: { studentId: true, reason: true, dismissedAt: true },
  })
  const lastActivityByStudent = new Map<string, Date>()
  for (const [id, a] of activity) if (a.lastActiveAt) lastActivityByStudent.set(id, a.lastActiveAt)
  const needsAttention = applyDismissals([...attention.values()], dismissals, lastActivityByStudent)
    .sort((a, b) => b.severity - a.severity)
    .slice(0, 12)

  // "Getting started" checklist signals (see src/lib/teacher-getting-started.ts).
  // Counted across every class this teacher can see, plus the games and live
  // lessons they ran themselves.
  const [diagnosticCount, lessonAssignmentCount, classGameCount, liveLessonCount] = classroomIds.length === 0
    ? [0, 0, 0, 0]
    : await Promise.all([
        prisma.classDiagnostic.count({ where: { classroomId: { in: classroomIds } } }),
        prisma.assignment.count({
          where: { classroomId: { in: classroomIds }, type: { in: ['INTERACTIVE_LESSON', 'QUIZ'] } },
        }),
        prisma.teacherLobby.count({ where: { teacherId, studentHosted: false } }),
        prisma.liveSession.count({ where: { teacherId } }),
      ])
  const signedInMemberCount = uniqueStudentIds.filter((id) => activity.get(id)?.signedIn).length
  const gettingStarted = {
    // The newest class the teacher OWNS is where the checklist deep-links.
    classroomId: classrooms.find((c) => c.teacherId === teacherId)?.id ?? classrooms[0]?.id ?? null,
    steps: gettingStartedStatus({
      classroomCount: classrooms.length,
      memberCount: allMembers.length,
      signedInMemberCount,
      diagnosticCount,
      lessonAssignmentCount,
      classGameCount,
      liveLessonCount,
    }),
  }

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
    gettingStarted,
  })
  } catch (error) {
    console.error('[GET /api/teacher/dashboard]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
