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

  // Verify teacher owns classroom
  const classroom = await prisma.classroom.findFirst({
    where: { id: classroomId, teacherId: user.id },
    include: {
      members: {
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
      assignmentId: true,
      studentId: true,
      score: true,
      status: true,
      completedAt: true,
    },
  })

  // Index submissions by assignmentId-userId
  const submissionMap = new Map<string, typeof submissions[0]>()
  for (const s of submissions) {
    submissionMap.set(`${s.assignmentId}-${s.studentId}`, s)
  }

  // Build gradebook
  const students = classroom.members.map((m) => {
    const grades = classroom.assignments.map((a) => {
      const sub = submissionMap.get(`${a.id}-${m.user.id}`)
      return {
        assignmentId: a.id,
        score: sub?.score ?? null,
        status: sub?.status ?? 'NOT_SUBMITTED',
        completedAt: sub?.completedAt?.toISOString() ?? null,
        percentage: sub?.score != null ? Math.round(sub.score * 100) : null,
      }
    })

    const scoredGrades = grades.filter((g) => g.score !== null && g.percentage !== null)
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
      submitted: grades.filter((g) => g.status !== 'NOT_SUBMITTED').length,
      total: grades.length,
    }
  })

  // Assignment averages
  const assignmentStats = classroom.assignments.map((a) => {
    const scores = students
      .map((s) => s.grades.find((g) => g.assignmentId === a.id)?.percentage)
      .filter((p): p is number => p !== null)
    return {
      id: a.id,
      average: scores.length > 0 ? Math.round(scores.reduce((s, v) => s + v, 0) / scores.length) : null,
      submissionCount: scores.length,
      totalStudents: students.length,
    }
  })

  return NextResponse.json({
    classroom: { id: classroom.id, name: classroom.name },
    assignments: classroom.assignments,
    students: students.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? '')),
    assignmentStats,
  })
}
