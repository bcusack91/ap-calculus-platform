import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'
import { notifyCriticalFunnelAlerts } from '@/lib/admin-alert-notifications'
import { unstable_cache } from 'next/cache'

type FunnelAlert = {
  key: string
  severity: 'warning' | 'critical'
  metric: string
  currentValue: number
  previousValue: number
  deltaPct: number
  message: string
}

type MCATItemAnalyticsRow = {
  questionId: string
  domain: string
  sourceSlug: string
  difficulty: string
  family: string
  promptType: string
  passageId: string | null
  isAnswered: boolean
  isCorrect: boolean
}

// Ensure the AnalyticsEvent table exists (created lazily by /api/analytics/events)
async function ensureAnalyticsEventTable() {
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
    )
  `)
}

// GET /api/admin/analytics — aggregate site analytics
export async function GET() {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error

  try {
    await ensureAnalyticsEventTable()
    const data = await getCachedAnalytics()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[GET /api/admin/analytics]', error)
    return NextResponse.json({ error: 'Failed to load analytics' }, { status: 500 })
  }
}

const getCachedAnalytics = unstable_cache(
  async () => {
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
    funnelCounts,
    templateBreakdownRaw,
    ctaTypeBreakdownRaw,
    ctaTypeTrendRaw,
    topDestinationsRaw,
    mcatDiagnosticAttempts,
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
    // ExitQuizAttempt is the source of truth for quiz activity.
    prisma.exitQuizAttempt.count(),
    prisma.exitQuizAttempt.count({ where: { completedAt: { gte: today } } }),
    prisma.user.groupBy({ by: ['role'], _count: { id: true } }),
    // Signups per day for last 30 days
    prisma.$queryRaw<{ date: Date; count: bigint }[]>`
      SELECT DATE("createdAt") as date, COUNT(*) as count
      FROM "User"
      WHERE "createdAt" >= ${monthAgo}
      GROUP BY DATE("createdAt")
      ORDER BY date ASC
    `,
    // Single raw SQL query replaces 8 separate findMany+distinct calls.
    // The "quiz takers" funnel stage is sourced from ExitQuizAttempt.
    prisma.$queryRaw<[{
      active_curr: bigint
      quiz_curr: bigint
      diag_curr: bigint
      exit_curr: bigint
      active_prev: bigint
      quiz_prev: bigint
      diag_prev: bigint
      exit_prev: bigint
    }]>`
      SELECT
        (SELECT COUNT(DISTINCT "userId") FROM "TopicProgress" WHERE "lastAccessed" >= ${weekAgo}) AS active_curr,
        (SELECT COUNT(DISTINCT "userId") FROM "ExitQuizAttempt" WHERE "completedAt" >= ${weekAgo}) AS quiz_curr,
        (SELECT COUNT(DISTINCT "userId") FROM "DiagnosticTest" WHERE "createdAt" >= ${weekAgo}) AS diag_curr,
        (SELECT COUNT(DISTINCT "userId") FROM "ExitQuizAttempt" WHERE "completedAt" >= ${weekAgo}) AS exit_curr,
        (SELECT COUNT(DISTINCT "userId") FROM "TopicProgress" WHERE "lastAccessed" >= ${prevWeekAgo} AND "lastAccessed" < ${weekAgo}) AS active_prev,
        (SELECT COUNT(DISTINCT "userId") FROM "ExitQuizAttempt" WHERE "completedAt" >= ${prevWeekAgo} AND "completedAt" < ${weekAgo}) AS quiz_prev,
        (SELECT COUNT(DISTINCT "userId") FROM "DiagnosticTest" WHERE "createdAt" >= ${prevWeekAgo} AND "createdAt" < ${weekAgo}) AS diag_prev,
        (SELECT COUNT(DISTINCT "userId") FROM "ExitQuizAttempt" WHERE "completedAt" >= ${prevWeekAgo} AND "completedAt" < ${weekAgo}) AS exit_prev
    `,
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
    prisma.diagnosticTest.findMany({
      where: {
        category: 'mcat-full-diagnostic',
        createdAt: { gte: monthAgo },
      },
      select: {
        results: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 200,
    }),
  ])

  const roles = Object.fromEntries(roleCounts.map((r) => [r.role, r._count.id]))

  const signupTrend = signupsByDay.map((row) => ({
    date: new Date(row.date).toISOString().split('T')[0],
    count: Number(row.count),
  }))

  const activeLearners = Number(funnelCounts[0].active_curr)
  const quizTakers = Number(funnelCounts[0].quiz_curr)
  const diagnosticTakers = Number(funnelCounts[0].diag_curr)
  const exitQuizTakers = Number(funnelCounts[0].exit_curr)

  const activeLearnersPrev = Number(funnelCounts[0].active_prev)
  const quizTakersPrev = Number(funnelCounts[0].quiz_prev)
  const diagnosticTakersPrev = Number(funnelCounts[0].diag_prev)
  const exitQuizTakersPrev = Number(funnelCounts[0].exit_prev)

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

  const asRecord = (value: unknown): Record<string, unknown> | null =>
    value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : null

  const itemRows: MCATItemAnalyticsRow[] = []
  const estimatedScores: number[] = []
  const percentages: number[] = []

  for (const attempt of mcatDiagnosticAttempts) {
    const results = asRecord(attempt.results)
    if (!results) continue

    const estimatedScore = typeof results.estimatedScore === 'number' ? results.estimatedScore : null
    const percentage = typeof results.percentage === 'number' ? results.percentage : null
    if (estimatedScore != null) estimatedScores.push(estimatedScore)
    if (percentage != null) percentages.push(percentage)

    const rows = Array.isArray(results.itemAnalytics) ? results.itemAnalytics : []
    for (const row of rows) {
      const item = asRecord(row)
      if (!item) continue
      itemRows.push({
        questionId: typeof item.questionId === 'string' ? item.questionId : 'unknown',
        domain: typeof item.domain === 'string' ? item.domain : 'unknown',
        sourceSlug: typeof item.sourceSlug === 'string' ? item.sourceSlug : 'unknown',
        difficulty: typeof item.difficulty === 'string' ? item.difficulty : 'unknown',
        family: typeof item.family === 'string' ? item.family : 'unknown',
        promptType: typeof item.promptType === 'string' ? item.promptType : 'unknown',
        passageId: typeof item.passageId === 'string' ? item.passageId : null,
        isAnswered: !!item.isAnswered,
        isCorrect: !!item.isCorrect,
      })
    }
  }

  const summarizeRows = <TKey extends string>(
    rows: MCATItemAnalyticsRow[],
    getKey: (row: MCATItemAnalyticsRow) => TKey,
    labelFor: (key: TKey) => Record<string, string | number>,
  ) => {
    const map = new Map<TKey, { asked: number; answered: number; correct: number }>()
    for (const row of rows) {
      const key = getKey(row)
      const current = map.get(key) ?? { asked: 0, answered: 0, correct: 0 }
      current.asked += 1
      if (row.isAnswered) current.answered += 1
      if (row.isCorrect) current.correct += 1
      map.set(key, current)
    }

    return Array.from(map.entries())
      .map(([key, stats]) => ({
        ...labelFor(key),
        asked: stats.asked,
        answered: stats.answered,
        correct: stats.correct,
        accuracyPct: stats.asked > 0 ? Math.round((stats.correct / stats.asked) * 100) : 0,
      }))
      .sort((a, b) => Number(b.asked) - Number(a.asked))
  }

  const average = (values: number[]) =>
    values.length > 0 ? Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 10) / 10 : 0

  const passageRows = itemRows.filter((row) => row.promptType === 'passage')
  const mcatDiagnostics = {
    attempts30d: mcatDiagnosticAttempts.length,
    avgEstimatedScore: average(estimatedScores),
    avgPercentage: average(percentages),
    passageQuestionsServed: passageRows.length,
    passageAccuracyPct: passageRows.length > 0 ? Math.round((passageRows.filter((row) => row.isCorrect).length / passageRows.length) * 100) : 0,
    difficultyBreakdown: summarizeRows(itemRows, (row) => row.difficulty, (difficulty) => ({ difficulty })),
    domainBreakdown: summarizeRows(itemRows, (row) => row.domain, (domain) => ({ domain })),
    familyBreakdown: summarizeRows(itemRows, (row) => `${row.domain}::${row.family}`, (compoundKey) => {
      const [domain, family] = compoundKey.split('::')
      return { domain, family }
    }).slice(0, 12),
  }

  return ({
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
    mcatDiagnostics,
  })
  },
  ['admin-analytics'],
  { revalidate: 600, tags: ['admin-analytics'] }
)
