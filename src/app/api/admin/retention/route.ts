import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'

const DAY_MS = 24 * 60 * 60 * 1000
const COHORT_WINDOWS = [14, 30, 90] as const
const EXCLUDED_EMAIL_DOMAINS = ['studyai.com']

type Snapshot = {
  windowDays: number
  cohortSize: number
  returnEligible: number
  noActivityCount: number
  noActivityPct: number
  activeOnSignupCount: number
  activeOnSignupPct: number
  returnedLaterCount: number
  returnedLaterPct: number
  d1Eligible: number
  d1Count: number
  d1Pct: number
  d7Eligible: number
  d7Count: number
  d7Pct: number
  d30Eligible: number
  d30Count: number
  d30Pct: number
  medianDaysToFirstReturn: number | null
}

function dateKey(date: Date): string {
  return date.toISOString().slice(0, 10)
}

function dayStartUtc(date: Date): Date {
  const d = new Date(date)
  d.setUTCHours(0, 0, 0, 0)
  return d
}

function pct(numerator: number, denominator: number): number {
  if (denominator <= 0) return 0
  return Number(((numerator / denominator) * 100).toFixed(1))
}

function addActivityDate(activityMap: Map<string, Set<string>>, userId: string, date: Date | null | undefined) {
  if (!date) return
  if (!activityMap.has(userId)) activityMap.set(userId, new Set())
  activityMap.get(userId)?.add(dateKey(date))
}

function median(values: number[]): number | null {
  if (values.length === 0) return null
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  if (sorted.length % 2 === 1) return sorted[mid]
  return Number(((sorted[mid - 1] + sorted[mid]) / 2).toFixed(1))
}

function computeSnapshot(
  users: Array<{ id: string; createdAt: Date }>,
  activityMap: Map<string, Set<string>>,
  todayStart: Date,
  windowDays: number
): Snapshot {
  let noActivityCount = 0
  let activeOnSignupCount = 0
  let returnedLaterCount = 0

  let d1Eligible = 0
  let d1Count = 0
  let d7Eligible = 0
  let d7Count = 0
  let d30Eligible = 0
  let d30Count = 0

  let returnEligible = 0
  const firstReturnDeltas: number[] = []

  for (const user of users) {
    const signupStart = dayStartUtc(user.createdAt)
    const signupKey = dateKey(signupStart)
    const ageDays = Math.floor((todayStart.getTime() - signupStart.getTime()) / DAY_MS)

    const activeDates = activityMap.get(user.id) ?? new Set<string>()

    if (activeDates.size === 0) {
      noActivityCount++
    }

    if (activeDates.has(signupKey)) {
      activeOnSignupCount++
    }

    let firstReturnDelta: number | null = null
    for (const k of activeDates) {
      const activeDay = new Date(`${k}T00:00:00.000Z`)
      const delta = Math.floor((activeDay.getTime() - signupStart.getTime()) / DAY_MS)
      if (delta > 0 && (firstReturnDelta === null || delta < firstReturnDelta)) {
        firstReturnDelta = delta
      }
    }

    if (ageDays >= 1) {
      returnEligible++
      if (firstReturnDelta !== null) {
        returnedLaterCount++
        firstReturnDeltas.push(firstReturnDelta)
      }
    }

    if (ageDays >= 1) {
      d1Eligible++
      const d1 = new Date(signupStart)
      d1.setUTCDate(d1.getUTCDate() + 1)
      if (activeDates.has(dateKey(d1))) d1Count++
    }

    if (ageDays >= 7) {
      d7Eligible++
      const hasD1toD7 = Array.from(activeDates).some((k) => {
        const day = new Date(`${k}T00:00:00.000Z`)
        const delta = Math.floor((day.getTime() - signupStart.getTime()) / DAY_MS)
        return delta >= 1 && delta <= 7
      })
      if (hasD1toD7) d7Count++
    }

    if (ageDays >= 30) {
      d30Eligible++
      const hasD1toD30 = Array.from(activeDates).some((k) => {
        const day = new Date(`${k}T00:00:00.000Z`)
        const delta = Math.floor((day.getTime() - signupStart.getTime()) / DAY_MS)
        return delta >= 1 && delta <= 30
      })
      if (hasD1toD30) d30Count++
    }
  }

  return {
    windowDays,
    cohortSize: users.length,
    returnEligible,
    noActivityCount,
    noActivityPct: pct(noActivityCount, users.length),
    activeOnSignupCount,
    activeOnSignupPct: pct(activeOnSignupCount, users.length),
    returnedLaterCount,
    returnedLaterPct: pct(returnedLaterCount, returnEligible),
    d1Eligible,
    d1Count,
    d1Pct: pct(d1Count, d1Eligible),
    d7Eligible,
    d7Count,
    d7Pct: pct(d7Count, d7Eligible),
    d30Eligible,
    d30Count,
    d30Pct: pct(d30Count, d30Eligible),
    medianDaysToFirstReturn: median(firstReturnDeltas),
  }
}

async function getRetentionData() {
  const todayStart = dayStartUtc(new Date())
  const maxWindow = Math.max(...COHORT_WINDOWS)
  const cohortStart = new Date(todayStart)
  cohortStart.setUTCDate(cohortStart.getUTCDate() - maxWindow)

  const users = await prisma.user.findMany({
    where: {
      createdAt: { gte: cohortStart },
      OR: [
        { email: null },
        {
          AND: EXCLUDED_EMAIL_DOMAINS.map((domain) => ({
            email: { not: { endsWith: `@${domain}` } },
          })),
        },
      ],
    },
    select: { id: true, createdAt: true },
    orderBy: { createdAt: 'asc' },
  })

  const userIds = users.map((u) => u.id)
  const activityMap = new Map<string, Set<string>>()

  if (userIds.length > 0) {
    const [
      topicProgress,
      flashcardProgress,
      exitQuizAttempts,
      diagnosticTests,
      satAttempts,
      mcatAttempts,
      assignmentSubmissions,
      streaks,
      compAsP1,
      compAsP2,
    ] = await Promise.all([
      prisma.topicProgress.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, lastAccessed: true },
      }),
      prisma.flashcardProgress.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, lastReviewed: true },
      }),
      // QuizAttempt is a dead table (never written); ExitQuizAttempt is the only
      // real quiz activity and is already counted below.
      prisma.exitQuizAttempt.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, startedAt: true, completedAt: true },
      }),
      prisma.diagnosticTest.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, createdAt: true },
      }),
      prisma.satTestAttempt.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, startedAt: true, completedAt: true },
      }),
      prisma.mcatTestAttempt.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, startedAt: true, completedAt: true },
      }),
      prisma.assignmentSubmission.findMany({
        where: { studentId: { in: userIds } },
        select: { studentId: true, startedAt: true, completedAt: true },
      }),
      prisma.dailyStreak.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, lastActiveDate: true },
      }),
      prisma.competitiveMatch.findMany({
        where: { player1Id: { in: userIds } },
        select: { player1Id: true, startedAt: true, completedAt: true },
      }),
      prisma.competitiveMatch.findMany({
        where: { player2Id: { in: userIds } },
        select: { player2Id: true, startedAt: true, completedAt: true },
      }),
    ])

    for (const row of topicProgress) addActivityDate(activityMap, row.userId, row.lastAccessed)
    for (const row of flashcardProgress) addActivityDate(activityMap, row.userId, row.lastReviewed)
    for (const row of exitQuizAttempts) {
      addActivityDate(activityMap, row.userId, row.startedAt)
      addActivityDate(activityMap, row.userId, row.completedAt)
    }
    for (const row of diagnosticTests) addActivityDate(activityMap, row.userId, row.createdAt)
    for (const row of satAttempts) {
      addActivityDate(activityMap, row.userId, row.startedAt)
      addActivityDate(activityMap, row.userId, row.completedAt)
    }
    for (const row of mcatAttempts) {
      addActivityDate(activityMap, row.userId, row.startedAt)
      addActivityDate(activityMap, row.userId, row.completedAt)
    }
    for (const row of assignmentSubmissions) {
      addActivityDate(activityMap, row.studentId, row.startedAt)
      addActivityDate(activityMap, row.studentId, row.completedAt)
    }
    for (const row of streaks) addActivityDate(activityMap, row.userId, row.lastActiveDate)
    for (const row of compAsP1) {
      addActivityDate(activityMap, row.player1Id, row.startedAt)
      addActivityDate(activityMap, row.player1Id, row.completedAt)
    }
    for (const row of compAsP2) {
      addActivityDate(activityMap, row.player2Id, row.startedAt)
      addActivityDate(activityMap, row.player2Id, row.completedAt)
    }
  }

  const snapshots = COHORT_WINDOWS.map((windowDays) => {
    const start = new Date(todayStart)
    start.setUTCDate(start.getUTCDate() - windowDays)
    const cohortUsers = users.filter((u) => u.createdAt >= start)
    return computeSnapshot(cohortUsers, activityMap, todayStart, windowDays)
  })

  return {
    generatedAt: new Date().toISOString(),
    excludedEmailDomains: EXCLUDED_EMAIL_DOMAINS,
    snapshots,
    latest: snapshots[snapshots.length - 1],
  }
}

const getCachedRetention = unstable_cache(getRetentionData, ['admin-retention-v1'], {
  revalidate: 300,
})

export async function GET() {
  const authResult = await requireAdmin()
  if ('error' in authResult) return authResult.error

  try {
    const data = await getCachedRetention()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[GET /api/admin/retention]', error)
    return NextResponse.json({ error: 'Failed to load retention analytics' }, { status: 500 })
  }
}
