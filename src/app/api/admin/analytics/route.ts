import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'

// GET /api/admin/analytics — aggregate site analytics
export async function GET() {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error

  const now = new Date()
  const today = new Date(now)
  today.setHours(0, 0, 0, 0)
  const weekAgo = new Date(today)
  weekAgo.setDate(weekAgo.getDate() - 7)
  const monthAgo = new Date(today)
  monthAgo.setDate(monthAgo.getDate() - 30)

  const [
    totalUsers,
    newUsersToday,
    newUsersWeek,
    newUsersMonth,
    premiumUsers,
    teacherUsers,
    totalSessions,
    sessionsToday,
    totalTopics,
    totalFlashcards,
    totalQuizAttempts,
    quizAttemptsToday,
    roleCounts,
    signupsByDay,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { createdAt: { gte: today } } }),
    prisma.user.count({ where: { createdAt: { gte: weekAgo } } }),
    prisma.user.count({ where: { createdAt: { gte: monthAgo } } }),
    prisma.user.count({ where: { role: 'PREMIUM' } }),
    prisma.user.count({ where: { role: 'TEACHER' } }),
    prisma.topicProgress.count(),
    prisma.topicProgress.count({ where: { lastAccessed: { gte: today } } }),
    prisma.topic.count(),
    prisma.flashcard.count(),
    prisma.quizAttempt.count(),
    prisma.quizAttempt.count({ where: { startedAt: { gte: today } } }),
    prisma.user.groupBy({ by: ['role'], _count: { id: true } }),
    // Signups per day for last 30 days
    prisma.$queryRaw<{ date: Date; count: bigint }[]>`
      SELECT DATE("createdAt") as date, COUNT(*) as count
      FROM "User"
      WHERE "createdAt" >= ${monthAgo}
      GROUP BY DATE("createdAt")
      ORDER BY date ASC
    `,
  ])

  const roles = Object.fromEntries(roleCounts.map((r) => [r.role, r._count.id]))

  const signupTrend = signupsByDay.map((row) => ({
    date: new Date(row.date).toISOString().split('T')[0],
    count: Number(row.count),
  }))

  return NextResponse.json({
    users: {
      total: totalUsers,
      newToday: newUsersToday,
      newThisWeek: newUsersWeek,
      newThisMonth: newUsersMonth,
      premium: premiumUsers,
      teachers: teacherUsers,
      roles,
    },
    activity: {
      totalSessions,
      sessionsToday,
      totalQuizAttempts,
      quizAttemptsToday,
    },
    content: {
      totalTopics,
      totalFlashcards,
    },
    signupTrend,
  })
}
