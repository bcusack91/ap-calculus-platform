import { prisma } from '@/lib/prisma'

export type FunnelAlert = {
  key: string
  severity: 'warning' | 'critical'
  metric: string
  currentValue: number
  previousValue: number
  deltaPct: number
  message: string
}

export type WeeklyFunnelAlertSnapshot = {
  windowDays: number
  windowStart: Date
  windowEnd: Date
  activeLearners: number
  quizTakers: number
  diagnosticTakers: number
  exitQuizTakers: number
  quizFromActivePct: number
  diagnosticFromQuizPct: number
  exitQuizFromActivePct: number
  quizFromActivePrevPct: number
  diagnosticFromQuizPrevPct: number
  exitQuizFromActivePrevPct: number
  alerts: FunnelAlert[]
}

function pct(num: number, den: number): number {
  return den > 0 ? Math.round((num / den) * 100) : 0
}

function deltaPct(curr: number, prev: number): number {
  return prev > 0 ? Math.round(((curr - prev) / prev) * 100) : 0
}

export async function calculateWeeklyFunnelAlertSnapshot(): Promise<WeeklyFunnelAlertSnapshot> {
  const now = new Date()
  const windowEnd = new Date(now)
  windowEnd.setHours(0, 0, 0, 0)

  const windowStart = new Date(windowEnd)
  windowStart.setDate(windowStart.getDate() - 7)

  const prevWindowStart = new Date(windowEnd)
  prevWindowStart.setDate(prevWindowStart.getDate() - 14)

  const [
    activeLearnerUsersWeek,
    quizTakerUsersWeek,
    diagnosticUsersWeek,
    exitQuizUsersWeek,
    activeLearnerUsersPrevWeek,
    quizTakerUsersPrevWeek,
    diagnosticUsersPrevWeek,
    exitQuizUsersPrevWeek,
  ] = await Promise.all([
    prisma.topicProgress.findMany({
      where: { lastAccessed: { gte: windowStart } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.quizAttempt.findMany({
      where: { startedAt: { gte: windowStart } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.diagnosticTest.findMany({
      where: { createdAt: { gte: windowStart } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.exitQuizAttempt.findMany({
      where: { completedAt: { gte: windowStart } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.topicProgress.findMany({
      where: { lastAccessed: { gte: prevWindowStart, lt: windowStart } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.quizAttempt.findMany({
      where: { startedAt: { gte: prevWindowStart, lt: windowStart } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.diagnosticTest.findMany({
      where: { createdAt: { gte: prevWindowStart, lt: windowStart } },
      distinct: ['userId'],
      select: { userId: true },
    }),
    prisma.exitQuizAttempt.findMany({
      where: { completedAt: { gte: prevWindowStart, lt: windowStart } },
      distinct: ['userId'],
      select: { userId: true },
    }),
  ])

  const activeLearners = activeLearnerUsersWeek.length
  const quizTakers = quizTakerUsersWeek.length
  const diagnosticTakers = diagnosticUsersWeek.length
  const exitQuizTakers = exitQuizUsersWeek.length

  const activeLearnersPrev = activeLearnerUsersPrevWeek.length
  const quizTakersPrev = quizTakerUsersPrevWeek.length
  const diagnosticTakersPrev = diagnosticUsersPrevWeek.length
  const exitQuizTakersPrev = exitQuizUsersPrevWeek.length

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

  return {
    windowDays: 7,
    windowStart,
    windowEnd,
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
    alerts,
  }
}
