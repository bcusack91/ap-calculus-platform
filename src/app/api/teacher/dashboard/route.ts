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

  // Get all classrooms with counts
  const classrooms = await prisma.classroom.findMany({
    where: { teacherId, isActive: true },
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
      student: { select: { name: true, email: true } },
      assignment: { select: { title: true, type: true, classroomId: true } },
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
      classroom: { select: { name: true } },
    },
    orderBy: { dueDate: 'asc' },
    take: 10,
  })

  // Upcoming competitions
  const upcomingCompetitions = await prisma.scheduledCompetition.findMany({
    where: {
      classroomId: { in: classroomIds },
      status: { in: ['SCHEDULED', 'ACTIVE'] },
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

  return NextResponse.json({
    classrooms,
    stats: {
      totalClassrooms: classrooms.length,
      totalStudents,
      avgMastery,
    },
    recentSubmissions: recentSubmissions.map((s) => ({
      studentName: s.student.name || s.student.email,
      assignmentTitle: s.assignment.title,
      type: s.assignment.type,
      score: s.score !== null ? Math.round((s.score || 0) * 100) : null,
      completedAt: s.completedAt,
    })),
    upcomingAssignments: upcomingAssignments.map((a) => ({
      id: a.id,
      title: a.title,
      classroom: a.classroom.name,
      dueDate: a.dueDate,
      totalStudents: a._count.submissions,
      completedCount: a.submissions.length,
      isOverdue: a.dueDate ? a.dueDate < now : false,
    })),
    upcomingCompetitions,
  })
  } catch (error) {
    console.error('[GET /api/teacher/dashboard]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
