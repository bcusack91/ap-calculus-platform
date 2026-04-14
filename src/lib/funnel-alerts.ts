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

  // Use COUNT(DISTINCT) raw SQL instead of findMany + distinct to avoid full table scans
  const [funnelCounts] = await prisma.$queryRaw<[{
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
      (SELECT COUNT(DISTINCT "userId") FROM "TopicProgress" WHERE "lastAccessed" >= ${windowStart}) AS active_curr,
      (SELECT COUNT(DISTINCT "userId") FROM "QuizAttempt" WHERE "startedAt" >= ${windowStart}) AS quiz_curr,
      (SELECT COUNT(DISTINCT "userId") FROM "DiagnosticTest" WHERE "createdAt" >= ${windowStart}) AS diag_curr,
      (SELECT COUNT(DISTINCT "userId") FROM "ExitQuizAttempt" WHERE "completedAt" >= ${windowStart}) AS exit_curr,
      (SELECT COUNT(DISTINCT "userId") FROM "TopicProgress" WHERE "lastAccessed" >= ${prevWindowStart} AND "lastAccessed" < ${windowStart}) AS active_prev,
      (SELECT COUNT(DISTINCT "userId") FROM "QuizAttempt" WHERE "startedAt" >= ${prevWindowStart} AND "startedAt" < ${windowStart}) AS quiz_prev,
      (SELECT COUNT(DISTINCT "userId") FROM "DiagnosticTest" WHERE "createdAt" >= ${prevWindowStart} AND "createdAt" < ${windowStart}) AS diag_prev,
      (SELECT COUNT(DISTINCT "userId") FROM "ExitQuizAttempt" WHERE "completedAt" >= ${prevWindowStart} AND "completedAt" < ${windowStart}) AS exit_prev
  `

  const activeLearners = Number(funnelCounts.active_curr)
  const quizTakers = Number(funnelCounts.quiz_curr)
  const diagnosticTakers = Number(funnelCounts.diag_curr)
  const exitQuizTakers = Number(funnelCounts.exit_curr)

  const activeLearnersPrev = Number(funnelCounts.active_prev)
  const quizTakersPrev = Number(funnelCounts.quiz_prev)
  const diagnosticTakersPrev = Number(funnelCounts.diag_prev)
  const exitQuizTakersPrev = Number(funnelCounts.exit_prev)

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
