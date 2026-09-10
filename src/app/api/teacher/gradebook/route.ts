import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/auth-guard'

// GET /api/teacher/gradebook?classroomId=xxx
export async function GET(req: NextRequest) {
  const authResult = await requireTeacher()
  if ('error' in authResult) return authResult.error
  const { user } = authResult

  const classroomId = req.nextUrl.searchParams.get('classroomId')
  if (!classroomId) {
    return NextResponse.json({ error: 'classroomId required' }, { status: 400 })
  }

  // Verify the teacher owns OR co-teaches the classroom (ADMIN: any).
  const classroom = await prisma.classroom.findFirst({
    where:
      user.role === 'ADMIN'
        ? { id: classroomId }
        : { id: classroomId, OR: [{ teacherId: user.id }, { coTeachers: { some: { userId: user.id } } }] },
    include: {
      members: {
        where: { isActive: true },
        include: {
          user: { select: { id: true, name: true, email: true, image: true } },
        },
      },
      assignments: {
        orderBy: { createdAt: 'asc' },
        select: {
          id: true,
          title: true,
          type: true,
          topicSlug: true,
          dueDate: true,
          requiredScore: true,
          // Group-targeted assignments only cover that group's members; the
          // gradebook needs the roster to distinguish "not assigned" from
          // "assigned but missing" and to average over the right denominator.
          group: {
            select: {
              id: true,
              name: true,
              members: {
                where: { member: { isActive: true } },
                select: { member: { select: { userId: true } } },
              },
            },
          },
        },
      },
    },
  })

  if (!classroom) {
    return NextResponse.json({ error: 'Classroom not found' }, { status: 404 })
  }

  const studentIds = classroom.members.map((m) => m.user.id)
  const assignmentIds = classroom.assignments.map((a) => a.id)

  // Batch fetch all submissions
  const submissions = await prisma.assignmentSubmission.findMany({
    where: {
      assignmentId: { in: assignmentIds },
      studentId: { in: studentIds },
    },
    select: {
      id: true,
      assignmentId: true,
      studentId: true,
      score: true,
      status: true,
      completedAt: true,
      feedback: true,
    },
  })

  // Index submissions by assignmentId-userId
  const submissionMap = new Map<string, typeof submissions[0]>()
  for (const s of submissions) {
    submissionMap.set(`${s.assignmentId}-${s.studentId}`, s)
  }

  // Per assignment: the set of userIds it covers, or null when it targets the
  // whole class. Non-covered students are "not assigned" — not "missing" — so
  // they are excluded from every average's denominator below.
  const coveredMap = new Map<string, Set<string> | null>()
  const assignmentsOut = classroom.assignments.map((a) => {
    const covered = a.group ? new Set(a.group.members.map((gm) => gm.member.userId)) : null
    coveredMap.set(a.id, covered)
    return {
      id: a.id,
      title: a.title,
      type: a.type,
      topicSlug: a.topicSlug,
      dueDate: a.dueDate,
      requiredScore: a.requiredScore,
      group: a.group ? { id: a.group.id, name: a.group.name } : null,
      coveredUserIds: covered ? [...covered] : null,
    }
  })

  const isCovered = (assignmentId: string, userId: string) => {
    const covered = coveredMap.get(assignmentId)
    return covered === null || covered === undefined || covered.has(userId)
  }

  // Build gradebook
  const students = classroom.members.map((m) => {
    const grades = classroom.assignments.map((a) => {
      const sub = submissionMap.get(`${a.id}-${m.user.id}`)
      return {
        assignmentId: a.id,
        // The submission id lets the UI open feedback for this exact cell.
        submissionId: sub?.id ?? null,
        score: sub?.score ?? null,
        status: sub?.status ?? 'NOT_SUBMITTED',
        completedAt: sub?.completedAt?.toISOString() ?? null,
        percentage: sub?.score != null ? Math.round(sub.score * 100) : null,
        feedback: sub?.feedback ?? null,
      }
    })

    // Only assignments that actually cover this student count toward their
    // totals — a group assignment must not drag down non-members' averages.
    const coveredGrades = grades.filter((g) => isCovered(g.assignmentId, m.user.id))
    const scoredGrades = coveredGrades.filter((g) => g.score !== null && g.percentage !== null)
    const average = scoredGrades.length > 0
      ? Math.round(scoredGrades.reduce((sum, g) => sum + (g.percentage ?? 0), 0) / scoredGrades.length)
      : null

    return {
      id: m.user.id,
      name: m.user.name,
      email: m.user.email,
      image: m.user.image,
      grades,
      average,
      submitted: coveredGrades.filter((g) => g.status !== 'NOT_SUBMITTED').length,
      total: coveredGrades.length,
    }
  })

  // Assignment averages — over covered students only.
  const assignmentStats = classroom.assignments.map((a) => {
    const coveredStudents = students.filter((s) => isCovered(a.id, s.id))
    const scores = coveredStudents
      .map((s) => s.grades.find((g) => g.assignmentId === a.id)?.percentage)
      .filter((p): p is number => p !== null)
    return {
      id: a.id,
      average: scores.length > 0 ? Math.round(scores.reduce((s, v) => s + v, 0) / scores.length) : null,
      submissionCount: scores.length,
      totalStudents: coveredStudents.length,
    }
  })

  return NextResponse.json({
    classroom: { id: classroom.id, name: classroom.name },
    assignments: assignmentsOut,
    students: students.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? '')),
    assignmentStats,
  })
}

// PUT /api/teacher/gradebook — manually set/clear one student's grade on one
// assignment. Body: { classroomId, assignmentId, studentId, score } where score
// is a 0-1 fraction, or null to clear. Upserts the submission so a grade can be
// entered even for a student who has no submission row yet (e.g. joined after
// the assignment was created).
export async function PUT(req: NextRequest) {
  const authResult = await requireTeacher()
  if ('error' in authResult) return authResult.error
  const { user } = authResult

  const { classroomId, assignmentId, studentId, score } = await req.json()
  if (!classroomId || !assignmentId || !studentId) {
    return NextResponse.json({ error: 'classroomId, assignmentId, studentId required' }, { status: 400 })
  }
  if (score !== null && (typeof score !== 'number' || score < 0 || score > 1)) {
    return NextResponse.json({ error: 'Score must be a number between 0 and 1, or null' }, { status: 400 })
  }

  // Owner/co-teacher (ADMIN: any) + that the assignment and student actually belong to this classroom.
  const classroom = await prisma.classroom.findFirst({
    where:
      user.role === 'ADMIN'
        ? { id: classroomId }
        : { id: classroomId, OR: [{ teacherId: user.id }, { coTeachers: { some: { userId: user.id } } }] },
  })
  if (!classroom) return NextResponse.json({ error: 'Classroom not found' }, { status: 404 })

  const assignment = await prisma.assignment.findFirst({ where: { id: assignmentId, classroomId } })
  if (!assignment) return NextResponse.json({ error: 'Assignment not found' }, { status: 404 })

  const member = await prisma.classroomMember.findFirst({
    where: { classroomId, userId: studentId, isActive: true },
  })
  if (!member) return NextResponse.json({ error: 'Student not in classroom' }, { status: 404 })

  // Group-targeted assignments only accept grades for covered students — the
  // gradebook UI already skips "not assigned" cells; this closes the API path.
  if (assignment.groupId) {
    const covered = await prisma.classroomGroupMember.findFirst({
      where: { groupId: assignment.groupId, memberId: member.id },
    })
    if (!covered) {
      return NextResponse.json(
        { error: 'Student is not in the group this assignment targets' },
        { status: 403 },
      )
    }
  }

  if (score === null) {
    // Clear an existing grade only — nothing to create.
    await prisma.assignmentSubmission.updateMany({
      where: { assignmentId, studentId },
      data: { score: null, gradedManually: false },
    })
  } else {
    await prisma.assignmentSubmission.upsert({
      where: { assignmentId_studentId: { assignmentId, studentId } },
      update: { score, status: 'COMPLETED', completedAt: new Date(), gradedManually: true },
      create: { assignmentId, studentId, score, status: 'COMPLETED', completedAt: new Date(), gradedManually: true },
    })
  }

  return NextResponse.json({ success: true })
}
