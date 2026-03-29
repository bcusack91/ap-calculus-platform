import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'
import { notifyCriticalFunnelAlerts } from '@/lib/admin-alert-notifications'

type FunnelAlert = {
  key: string
  severity: 'warning' | 'critical'
  metric: string
  currentValue: number
  previousValue: number
  deltaPct: number
  message: string
}

// GET /api/admin/analytics — aggregate site analytics
export async function GET() {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "AnalyticsEvent" (
      "id" BIGSERIAL PRIMARY KEY,
      "eventName" TEXT NOT NULL,
      "pageTemplate" TEXT,
      "ctaType" TEXT,
      "location" TEXT,
      "destination" TEXT,
      "courseSlug" TEXT,
      "topicSlug" TEXT,
      "metadata" JSONB,
      "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `)

  const now = new Date()
  const today = new Date(now)
  today.setHours(0, 0, 0, 0)
  const weekAgo = new Date(today)
  weekAgo.setDate(weekAgo.getDate() - 7)
  const prevWeekAgo = new Date(today)
  prevWeekAgo.setDate(prevWeekAgo.getDate() - 14)
  const eightWeeksAgo = new Date(today)
  eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 56)
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
    activeLearnerUsersWeek,
    quizTakerUsersWeek,
    diagnosticUsersWeek,
    exitQuizUsersWeek,
    activeLearnerUsersPrevWeek,
    quizTakerUsersPrevWeek,
    diagnosticUsersPrevWeek,
    exitQuizUsersPrevWeek,
    templateBreakdownRaw,
    ctaTypeBreakdownRaw,
    ctaTypeTrendRaw,
    topDestinationsRaw,
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
    prisma.topicProgress.findMany({
      where: { lastAccessed: { gte: weekAgo } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.quizAttempt.findMany({
      where: { startedAt: { gte: weekAgo } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.diagnosticTest.findMany({
      where: { createdAt: { gte: weekAgo } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.exitQuizAttempt.findMany({
      where: { completedAt: { gte: weekAgo } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.topicProgress.findMany({
      where: { lastAccessed: { gte: prevWeekAgo, lt: weekAgo } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.quizAttempt.findMany({
      where: { startedAt: { gte: prevWeekAgo, lt: weekAgo } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.diagnosticTest.findMany({
      where: { createdAt: { gte: prevWeekAgo, lt: weekAgo } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.exitQuizAttempt.findMany({
      where: { completedAt: { gte: prevWeekAgo, lt: weekAgo } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.$queryRaw<{ pageTemplate: string | null; clicks: bigint; destinations: bigint }[]>`
      SELECT
        COALESCE("pageTemplate", 'unknown') AS "pageTemplate",
        COUNT(*) AS clicks,
        COUNT(DISTINCT COALESCE("destination", '')) AS destinations
      FROM "AnalyticsEvent"
      WHERE "createdAt" >= ${weekAgo}
        AND "eventName" IN ('homepage_cta_click', 'homepage_course_card_click', 'course_cta_click', 'daily_question_cta_click')
      GROUP BY COALESCE("pageTemplate", 'unknown')
      ORDER BY clicks DESC
      LIMIT 10
    `,
    prisma.$queryRaw<{ ctaType: string | null; clicks: bigint }[]>`
      SELECT
        COALESCE("ctaType", 'unknown') AS "ctaType",
        COUNT(*) AS clicks
      FROM "AnalyticsEvent"
      WHERE "createdAt" >= ${weekAgo}
        AND "eventName" IN ('homepage_cta_click', 'homepage_course_card_click', 'course_cta_click', 'daily_question_cta_click')
      GROUP BY COALESCE("ctaType", 'unknown')
      ORDER BY clicks DESC
      LIMIT 10
    `,
    prisma.$queryRaw<{ weekStart: string; ctaType: string | null; clicks: bigint }[]>`
      SELECT
        TO_CHAR(DATE_TRUNC('week', "createdAt"), 'YYYY-MM-DD') AS "weekStart",
        COALESCE("ctaType", 'unknown') AS "ctaType",
        COUNT(*) AS clicks
      FROM "AnalyticsEvent"
      WHERE "createdAt" >= ${eightWeeksAgo}
        AND "eventName" IN ('homepage_cta_click', 'homepage_course_card_click', 'course_cta_click', 'daily_question_cta_click')
      GROUP BY TO_CHAR(DATE_TRUNC('week', "createdAt"), 'YYYY-MM-DD'), COALESCE("ctaType", 'unknown')
      ORDER BY "weekStart" ASC, clicks DESC
    `,
    prisma.$queryRaw<{ destination: string | null; ctaType: string | null; pageTemplate: string | null; clicks: bigint }[]>`
      SELECT
        COALESCE("destination", 'unknown') AS destination,
        COALESCE("ctaType", 'unknown') AS "ctaType",
        COALESCE("pageTemplate", 'unknown') AS "pageTemplate",
        COUNT(*) AS clicks
      FROM "AnalyticsEvent"
      WHERE "createdAt" >= ${weekAgo}
        AND "eventName" IN ('homepage_cta_click', 'homepage_course_card_click', 'course_cta_click', 'daily_question_cta_click')
        AND COALESCE("destination", '') <> ''
      GROUP BY COALESCE("destination", 'unknown'), COALESCE("ctaType", 'unknown'), COALESCE("pageTemplate", 'unknown')
      ORDER BY clicks DESC
      LIMIT 12
    `,
  ])

  const roles = Object.fromEntries(roleCounts.map((r) => [r.role, r._count.id]))

  const signupTrend = signupsByDay.map((row) => ({
    date: new Date(row.date).toISOString().split('T')[0],
    count: Number(row.count),
  }))

  const activeLearners = activeLearnerUsersWeek.length
  const quizTakers = quizTakerUsersWeek.length
  const diagnosticTakers = diagnosticUsersWeek.length
  const exitQuizTakers = exitQuizUsersWeek.length

  const activeLearnersPrev = activeLearnerUsersPrevWeek.length
  const quizTakersPrev = quizTakerUsersPrevWeek.length
  const diagnosticTakersPrev = diagnosticUsersPrevWeek.length
  const exitQuizTakersPrev = exitQuizUsersPrevWeek.length

  const pct = (num: number, den: number) => (den > 0 ? Math.round((num / den) * 100) : 0)
  const deltaPct = (curr: number, prev: number) => (prev > 0 ? Math.round(((curr - prev) / prev) * 100) : 0)

  const quizFromActivePct = pct(quizTakers, activeLearners)
  const diagnosticFromQuizPct = pct(diagnosticTakers, quizTakers)
  const exitQuizFromActivePct = pct(exitQuizTakers, activeLearners)

  const quizFromActivePrevPct = pct(quizTakersPrev, activeLearnersPrev)
  const diagnosticFromQuizPrevPct = pct(diagnosticTakersPrev, quizTakersPrev)
  const exitQuizFromActivePrevPct = pct(exitQuizTakersPrev, activeLearnersPrev)

  const alerts: FunnelAlert[] = []

  const addAlertIfDrop = (
    key: string,
    metric: string,
    currentValue: number,
    previousValue: number,
    warnDrop: number,
    criticalDrop: number
  ) => {
    if (previousValue <= 0) return
    const drop = previousValue - currentValue
    if (drop < warnDrop) return
    const severity: FunnelAlert['severity'] = drop >= criticalDrop ? 'critical' : 'warning'
    alerts.push({
      key,
      severity,
      metric,
      currentValue,
      previousValue,
      deltaPct: deltaPct(currentValue, previousValue),
      message: `${metric} dropped from ${previousValue}% to ${currentValue}% week-over-week.`,
    })
  }

  addAlertIfDrop('quiz_from_active_drop', 'Quiz from Active', quizFromActivePct, quizFromActivePrevPct, 10, 20)
  addAlertIfDrop('diagnostic_from_quiz_drop', 'Diagnostic from Quiz', diagnosticFromQuizPct, diagnosticFromQuizPrevPct, 10, 20)
  addAlertIfDrop('exit_quiz_from_active_drop', 'Exit Quiz from Active', exitQuizFromActivePct, exitQuizFromActivePrevPct, 10, 20)

  const templateBreakdown = templateBreakdownRaw.map((row) => ({
    pageTemplate: row.pageTemplate ?? 'unknown',
    clicks: Number(row.clicks),
    destinations: Number(row.destinations),
  }))

  const ctaTypeBreakdown = ctaTypeBreakdownRaw.map((row) => ({
    ctaType: row.ctaType ?? 'unknown',
    clicks: Number(row.clicks),
  }))

  const ctaTypeTrend = ctaTypeTrendRaw.map((row) => ({
    weekStart: row.weekStart,
    ctaType: row.ctaType ?? 'unknown',
    clicks: Number(row.clicks),
  }))

  const topDestinations = topDestinationsRaw.map((row) => ({
    destination: row.destination ?? 'unknown',
    ctaType: row.ctaType ?? 'unknown',
    pageTemplate: row.pageTemplate ?? 'unknown',
    clicks: Number(row.clicks),
  }))

  const notificationSummary = await notifyCriticalFunnelAlerts({
    alerts,
    windowStart: weekAgo,
    windowEnd: today,
  })

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
    funnel: {
      windowDays: 7,
      activeLearners,
      quizTakers,
      diagnosticTakers,
      exitQuizTakers,
      quizFromActivePct,
      diagnosticFromQuizPct,
      exitQuizFromActivePct,
      quizFromActivePrevPct,
      diagnosticFromQuizPrevPct,
      exitQuizFromActivePrevPct,
      newUsersWeek,
      templateBreakdown,
      ctaTypeBreakdown,
      ctaTypeTrend,
      topDestinations,
      alerts,
      notificationSummary,
    },
  })
}
