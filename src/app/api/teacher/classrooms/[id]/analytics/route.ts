import { NextRequest, NextResponse } from 'next/server'
import { requireClassroomOwner } from '@/lib/teacher-auth'
import { prisma } from '@/lib/prisma'

// GET /api/teacher/classrooms/[id]/analytics
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: classroomId } = await params
    const teacher = await requireClassroomOwner(classroomId)
    if ('error' in teacher && teacher.error) {
      return teacher.error
    }

    // Fetch classroom with members and assignments
    const classroom = await prisma.classroom.findUnique({
      where: { id: classroomId },
      include: {
        members: {
          where: { isActive: true },
          include: {
            user: {
              select: { id: true, name: true },
            },
          },
        },
        assignments: {
          where: { isActive: true },
          include: {
            submissions: true,
          },
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    if (!classroom) {
      return NextResponse.json({ error: 'Classroom not found' }, { status: 404 })
    }

    const studentIds = classroom.members.map((m) => m.user.id)

    // === 1. Assignment Score Distribution ===
    const scoreDistribution = classroom.assignments.map((assignment) => {
      const scores = assignment.submissions
        .filter((s) => s.score !== null && s.status === 'COMPLETED')
        .map((s) => Math.round((s.score ?? 0) * 100))

      const ranges = [
        { label: '0-59%', count: scores.filter((s) => s < 60).length },
        { label: '60-69%', count: scores.filter((s) => s >= 60 && s < 70).length },
        { label: '70-79%', count: scores.filter((s) => s >= 70 && s < 80).length },
        { label: '80-89%', count: scores.filter((s) => s >= 80 && s < 90).length },
        { label: '90-100%', count: scores.filter((s) => s >= 90).length },
      ]

      const avg = scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : null

      return {
        assignmentId: assignment.id,
        title: assignment.title,
        type: assignment.type,
        average: avg,
        scoreDistribution: ranges,
        completionRate: studentIds.length > 0
          ? Math.round((assignment.submissions.filter((s) => s.status === 'COMPLETED').length / studentIds.length) * 100)
          : 0,
        totalSubmissions: assignment.submissions.length,
      }
    })

    // === 2. Class progress over time (weekly) ===
    const topicProgress = await prisma.topicProgress.findMany({
      where: { userId: { in: studentIds } },
      select: {
        status: true,
        lastAccessed: true,
        userId: true,
      },
      orderBy: { lastAccessed: 'asc' },
    })

    // Group by week
    const weeklyProgress: Record<string, { completed: number; mastered: number; started: number }> = {}
    for (const tp of topicProgress) {
      const weekStart = getWeekStart(tp.lastAccessed)
      if (!weeklyProgress[weekStart]) {
        weeklyProgress[weekStart] = { completed: 0, mastered: 0, started: 0 }
      }
      if (tp.status === 'COMPLETED') weeklyProgress[weekStart].completed++
      if (tp.status === 'MASTERED') weeklyProgress[weekStart].mastered++
      if (tp.status === 'IN_PROGRESS') weeklyProgress[weekStart].started++
    }

    // === 3. Per-student performance summary (batched — no N+1) ===
    const [allProgress, flashcardCounts, allStreaks] = await Promise.all([
      prisma.topicProgress.findMany({
        where: { userId: { in: studentIds } },
        select: { userId: true, status: true, masteryLevel: true },
      }),
      prisma.flashcardProgress.groupBy({
        by: ['userId'],
        where: { userId: { in: studentIds } },
        _count: true,
      }),
      prisma.dailyStreak.findMany({
        where: { userId: { in: studentIds } },
        select: { userId: true, currentStreak: true },
      }),
    ])

    // Index by userId for O(1) lookups
    const progressByUser = new Map<string, typeof allProgress>()
    for (const p of allProgress) {
      if (!progressByUser.has(p.userId)) progressByUser.set(p.userId, [])
      progressByUser.get(p.userId)!.push(p)
    }
    const fcCountByUser = new Map(flashcardCounts.map((f) => [f.userId, f._count]))
    const streakByUser = new Map(allStreaks.map((s) => [s.userId, s.currentStreak]))

    const studentPerformance = classroom.members.map((member) => {
      const progress = progressByUser.get(member.user.id) ?? []
      const flashcards = fcCountByUser.get(member.user.id) ?? 0
      const currentStreak = streakByUser.get(member.user.id) ?? 0

      const completed = progress.filter(
        (p) => p.status === 'COMPLETED' || p.status === 'MASTERED'
      ).length
      const mastered = progress.filter((p) => p.status === 'MASTERED').length
      const avgMastery =
        progress.length > 0
          ? Math.round(
              (progress.reduce((sum, p) => sum + p.masteryLevel, 0) /
                progress.length) *
                100
            )
          : 0

      // Assignment scores for this student
      const assignmentScores = classroom.assignments.map((a) => {
        const sub = a.submissions.find((s) => s.studentId === member.user.id)
        return sub?.score ?? null
      })
      const validScores = assignmentScores.filter(
        (s): s is number => s !== null
      )
      const assignmentAvg =
        validScores.length > 0
          ? Math.round(
              (validScores.reduce((a, b) => a + b, 0) / validScores.length) *
                100
            )
          : null

      return {
        id: member.user.id,
        name: member.user.name || 'Unknown',
        topicsCompleted: completed,
        topicsMastered: mastered,
        avgMastery,
        flashcardsStudied: flashcards,
        currentStreak,
        assignmentAverage: assignmentAvg,
      }
    })

    // === 4. Topic mastery heatmap data ===
    // Find which topics students are working on
    const topicMastery = await prisma.topicProgress.groupBy({
      by: ['topicId', 'status'],
      where: { userId: { in: studentIds } },
      _count: true,
    })

    const topicIds = [...new Set(topicMastery.map((t) => t.topicId))]
    const topics = await prisma.topic.findMany({
      where: { id: { in: topicIds } },
      select: {
        id: true,
        title: true,
        slug: true,
        category: { select: { name: true } },
      },
    })

    const topicMap = new Map(topics.map((t) => [t.id, t]))
    const heatmapData = topicIds.map((topicId) => {
      const topic = topicMap.get(topicId)
      const entries = topicMastery.filter((t) => t.topicId === topicId)
      const mastered = entries.find((e) => e.status === 'MASTERED')?._count ?? 0
      const completed =
        entries.find((e) => e.status === 'COMPLETED')?._count ?? 0
      const inProgress =
        entries.find((e) => e.status === 'IN_PROGRESS')?._count ?? 0

      return {
        topicId,
        title: topic?.title ?? 'Unknown',
        category: topic?.category.name ?? 'Unknown',
        mastered,
        completed,
        inProgress,
        total: mastered + completed + inProgress,
        masteryRate:
          mastered + completed + inProgress > 0
            ? Math.round(
                ((mastered + completed) / (mastered + completed + inProgress)) *
                  100
              )
            : 0,
      }
    })

    return NextResponse.json({
      scoreDistribution,
      weeklyProgress: Object.entries(weeklyProgress)
        .map(([week, data]) => ({ week, ...data }))
        .sort((a, b) => a.week.localeCompare(b.week)),
      studentPerformance: studentPerformance.sort(
        (a, b) => (b.assignmentAverage ?? 0) - (a.assignmentAverage ?? 0)
      ),
      topicHeatmap: heatmapData.sort((a, b) => b.total - a.total).slice(0, 30),
      summary: {
        totalStudents: studentIds.length,
        totalAssignments: classroom.assignments.length,
        avgCompletionRate:
          scoreDistribution.length > 0
            ? Math.round(
                scoreDistribution.reduce(
                  (sum, a) => sum + a.completionRate,
                  0
                ) / scoreDistribution.length
              )
            : 0,
      },
    })
  } catch (error) {
    console.error('Analytics API error:', error)
    return NextResponse.json(
      { error: 'Failed to load analytics' },
      { status: 500 }
    )
  }
}

function getWeekStart(date: Date): string {
  const d = new Date(date)
  d.setDate(d.getDate() - d.getDay())
  return d.toISOString().split('T')[0]
}
