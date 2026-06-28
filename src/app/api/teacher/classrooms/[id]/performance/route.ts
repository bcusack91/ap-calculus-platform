import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/classrooms/[id]/performance — get student performance data
 * Returns per-student progress across all topics and assignments
 */

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const result = await requireClassroomAccess(id)
    if ('error' in result && result.error) return result.error

  // Get all active members
  const members = await prisma.classroomMember.findMany({
    where: { classroomId: id, isActive: true },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          avatarData: true,
        },
      },
    },
  })

  const studentIds = members.map((m) => m.user.id)

  // Get topic progress for all students
  const topicProgress = await prisma.topicProgress.findMany({
    where: { userId: { in: studentIds } },
    include: {
      topic: { select: { slug: true, title: true, category: { select: { name: true, course: { select: { name: true } } } } } },
    },
  })

  // Get assignment submissions for this classroom
  const submissions = await prisma.assignmentSubmission.findMany({
    where: {
      studentId: { in: studentIds },
      assignment: { classroomId: id },
    },
    include: {
      assignment: { select: { id: true, title: true, type: true, topicSlug: true, dueDate: true } },
    },
  })

  // Get streaks
  const streaks = await prisma.dailyStreak.findMany({
    where: { userId: { in: studentIds } },
  })

  // Get exit quiz attempts for all students
  const exitQuizAttempts = await prisma.exitQuizAttempt.findMany({
    where: { userId: { in: studentIds } },
    orderBy: { completedAt: 'desc' },
  })

  // Aggregate per-student
  const studentPerformance = members.map((member) => {
    const userId = member.user.id
    const progress = topicProgress.filter((tp) => tp.userId === userId)
    const subs = submissions.filter((s) => s.studentId === userId)
    const streak = streaks.find((s) => s.userId === userId)

    const completedTopics = progress.filter(
      (tp) => tp.status === 'COMPLETED' || tp.status === 'MASTERED',
    ).length
    const avgMastery =
      progress.length > 0
        ? progress.reduce((sum, tp) => sum + (tp.masteryLevel || 0), 0) / progress.length
        : 0
    const totalTime = progress.reduce((sum, tp) => sum + (tp.timeSpent || 0), 0)

    const assignmentsDone = subs.filter((s) => s.status === 'COMPLETED').length
    const assignmentsTotal = subs.length
    const avgAssignmentScore =
      subs.filter((s) => s.score !== null).length > 0
        ? subs
            .filter((s) => s.score !== null)
            .reduce((sum, s) => sum + (s.score || 0), 0) /
          subs.filter((s) => s.score !== null).length
        : null

    return {
      userId: member.user.id,
      name: member.user.name || 'Unknown',
      email: member.user.email,
      joinedAt: member.joinedAt,
      topicStats: {
        started: progress.length,
        completed: completedTopics,
        avgMastery: Math.round(avgMastery * 100),
        totalTimeMinutes: Math.round(totalTime / 60),
      },
      assignmentStats: {
        completed: assignmentsDone,
        total: assignmentsTotal,
        avgScore: avgAssignmentScore !== null ? Math.round(avgAssignmentScore * 100) : null,
      },
      streak: {
        current: streak?.currentStreak || 0,
        longest: streak?.longestStreak || 0,
        lastActive: streak?.lastActiveDate || null,
      },
      recentProgress: progress
        .sort((a, b) => (b.lastAccessed?.getTime() || 0) - (a.lastAccessed?.getTime() || 0))
        .slice(0, 5)
        .map((tp) => ({
          topic: tp.topic.title,
          slug: tp.topic.slug,
          course: tp.topic.category?.course?.name || '',
          status: tp.status,
          mastery: Math.round((tp.masteryLevel || 0) * 100),
          lastAccessed: tp.lastAccessed,
        })),
      exitQuizzes: (() => {
        const quizzes = exitQuizAttempts.filter((a) => a.userId === userId)
        // Group by topicSlug
        const byTopic: Record<string, typeof quizzes> = {}
        for (const q of quizzes) {
          if (!byTopic[q.topicSlug]) byTopic[q.topicSlug] = []
          byTopic[q.topicSlug].push(q)
        }
        return Object.entries(byTopic).map(([topicSlug, attempts]) => ({
          topicSlug,
          totalAttempts: attempts.length,
          passed: attempts.some((a) => a.passed),
          bestScore: Math.max(...attempts.map((a) => a.score)),
          lastScore: attempts[0]?.score ?? null,
          lastAttempt: attempts[0]?.completedAt ?? null,
          mustRedoUnit: !attempts.some((a) => a.passed) && (attempts[0]?.mustRedoUnit ?? false),
        }))
      })(),
    }
  })

  // Class-level summary
  const classSummary = {
    totalStudents: members.length,
    avgMastery:
      studentPerformance.length > 0
        ? Math.round(
            (studentPerformance.reduce((s, p) => s + p.topicStats.avgMastery, 0) /
              studentPerformance.length),
          )
        : 0,
    totalTopicsCompleted: studentPerformance.reduce((s, p) => s + p.topicStats.completed, 0),
    activeStreaks: studentPerformance.filter((p) => p.streak.current > 0).length,
    avgAssignmentScore:
      studentPerformance.length > 0
        ? Math.round(
            studentPerformance
              .filter((s) => s.assignmentStats.avgScore !== null)
              .reduce((sum, s) => sum + (s.assignmentStats.avgScore || 0), 0) /
              Math.max(1, studentPerformance.filter((s) => s.assignmentStats.avgScore !== null).length),
          )
        : 0,
    avgStreak:
      studentPerformance.length > 0
        ? Math.round(
            studentPerformance.reduce((s, p) => s + p.streak.current, 0) /
              studentPerformance.length,
          )
        : 0,
  }

  return NextResponse.json({ students: studentPerformance, classSummary })
  } catch (error) {
    console.error('[GET /api/teacher/classrooms/[id]/performance]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
