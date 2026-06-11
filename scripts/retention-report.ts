import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10)
}

function addDate(map: Map<string, Set<string>>, userId: string, date: Date | null | undefined) {
  if (!date) return
  if (!map.has(userId)) map.set(userId, new Set())
  map.get(userId)!.add(toDateKey(date))
}

function pct(num: number, den: number): string {
  if (den === 0) return '0.0%'
  return `${((num / den) * 100).toFixed(1)}%`
}

async function main() {
  const daysArg = Number(process.argv[2] ?? 90)
  const excludeDomainArg = (process.argv[3] ?? '').trim().toLowerCase()
  const cohortDays = Number.isFinite(daysArg) && daysArg > 0 ? Math.floor(daysArg) : 90

  const cohortStart = new Date()
  cohortStart.setUTCHours(0, 0, 0, 0)
  cohortStart.setUTCDate(cohortStart.getUTCDate() - cohortDays)

  const cohortUsers = await prisma.user.findMany({
    where: {
      createdAt: { gte: cohortStart },
      ...(excludeDomainArg
        ? {
            OR: [
              { email: null },
              { email: { not: { endsWith: `@${excludeDomainArg}` } } },
            ],
          }
        : {}),
    },
    select: { id: true, createdAt: true, email: true, name: true },
    orderBy: { createdAt: 'asc' },
  })

  const userIds = cohortUsers.map((u) => u.id)
  const activeDatesByUser = new Map<string, Set<string>>()

  if (userIds.length > 0) {
    const [
      topicProgress,
      flashcardProgress,
      quizAttempts,
      exitQuizAttempts,
      diagnosticTests,
      satAttempts,
      mcatAttempts,
      assignmentSubmissions,
      streaks,
      comp1,
      comp2,
    ] = await Promise.all([
      prisma.topicProgress.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, lastAccessed: true },
      }),
      prisma.flashcardProgress.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, lastReviewed: true },
      }),
      prisma.quizAttempt.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, startedAt: true },
      }),
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

    for (const row of topicProgress) addDate(activeDatesByUser, row.userId, row.lastAccessed)
    for (const row of flashcardProgress) addDate(activeDatesByUser, row.userId, row.lastReviewed)
    for (const row of quizAttempts) addDate(activeDatesByUser, row.userId, row.startedAt)
    for (const row of exitQuizAttempts) {
      addDate(activeDatesByUser, row.userId, row.startedAt)
      addDate(activeDatesByUser, row.userId, row.completedAt)
    }
    for (const row of diagnosticTests) addDate(activeDatesByUser, row.userId, row.createdAt)
    for (const row of satAttempts) {
      addDate(activeDatesByUser, row.userId, row.startedAt)
      addDate(activeDatesByUser, row.userId, row.completedAt)
    }
    for (const row of mcatAttempts) {
      addDate(activeDatesByUser, row.userId, row.startedAt)
      addDate(activeDatesByUser, row.userId, row.completedAt)
    }
    for (const row of assignmentSubmissions) {
      addDate(activeDatesByUser, row.studentId, row.startedAt)
      addDate(activeDatesByUser, row.studentId, row.completedAt)
    }
    for (const row of streaks) addDate(activeDatesByUser, row.userId, row.lastActiveDate)
    for (const row of comp1) {
      addDate(activeDatesByUser, row.player1Id, row.startedAt)
      addDate(activeDatesByUser, row.player1Id, row.completedAt)
    }
    for (const row of comp2) {
      addDate(activeDatesByUser, row.player2Id, row.startedAt)
      addDate(activeDatesByUser, row.player2Id, row.completedAt)
    }
  }

  let returnedLater = 0
  let activeSameDay = 0
  let retainedD1Exact = 0
  let retainedD7By = 0
  let retainedD30By = 0
  let noActivity = 0

  const daysToReturn: number[] = []

  for (const user of cohortUsers) {
    const signup = new Date(user.createdAt)
    const signupKey = toDateKey(signup)

    const active = activeDatesByUser.get(user.id) ?? new Set<string>()
    if (active.size === 0) {
      noActivity++
      continue
    }

    if (active.has(signupKey)) activeSameDay++

    let firstReturnDays: number | null = null
    for (const dateKey of active) {
      const day = new Date(`${dateKey}T00:00:00.000Z`)
      const delta = Math.floor((day.getTime() - new Date(`${signupKey}T00:00:00.000Z`).getTime()) / 86400000)
      if (delta > 0 && (firstReturnDays === null || delta < firstReturnDays)) {
        firstReturnDays = delta
      }
    }

    if (firstReturnDays !== null) {
      returnedLater++
      daysToReturn.push(firstReturnDays)
    }

    const d1 = new Date(`${signupKey}T00:00:00.000Z`)
    d1.setUTCDate(d1.getUTCDate() + 1)
    const d1Key = toDateKey(d1)
    if (active.has(d1Key)) retainedD1Exact++

    const hasByD7 = Array.from(active).some((dateKey) => {
      const day = new Date(`${dateKey}T00:00:00.000Z`)
      const delta = Math.floor((day.getTime() - new Date(`${signupKey}T00:00:00.000Z`).getTime()) / 86400000)
      return delta >= 1 && delta <= 7
    })
    if (hasByD7) retainedD7By++

    const hasByD30 = Array.from(active).some((dateKey) => {
      const day = new Date(`${dateKey}T00:00:00.000Z`)
      const delta = Math.floor((day.getTime() - new Date(`${signupKey}T00:00:00.000Z`).getTime()) / 86400000)
      return delta >= 1 && delta <= 30
    })
    if (hasByD30) retainedD30By++
  }

  daysToReturn.sort((a, b) => a - b)
  const medianDaysToReturn =
    daysToReturn.length === 0
      ? null
      : daysToReturn.length % 2 === 1
      ? daysToReturn[(daysToReturn.length - 1) / 2]
      : (daysToReturn[daysToReturn.length / 2 - 1] + daysToReturn[daysToReturn.length / 2]) / 2

  console.log(`\nRETENTION REPORT (cohort: users created in last ${cohortDays} days)\n`)
  if (excludeDomainArg) {
    console.log(`Excluding emails ending with: @${excludeDomainArg}`)
  }
  console.log(`Cohort size: ${cohortUsers.length}`)
  console.log(`No measurable learning activity: ${noActivity} (${pct(noActivity, cohortUsers.length)})`)
  console.log(`Active on signup day: ${activeSameDay} (${pct(activeSameDay, cohortUsers.length)})`)
  console.log(`Returned on a later date (delta >= 1 day): ${returnedLater} (${pct(returnedLater, cohortUsers.length)})`)
  console.log(`D1 exact retention: ${retainedD1Exact} (${pct(retainedD1Exact, cohortUsers.length)})`)
  console.log(`Returned within 7 days: ${retainedD7By} (${pct(retainedD7By, cohortUsers.length)})`)
  console.log(`Returned within 30 days: ${retainedD30By} (${pct(retainedD30By, cohortUsers.length)})`)
  console.log(
    `Median days to first return (among returners): ${medianDaysToReturn === null ? 'n/a' : medianDaysToReturn}`
  )

  const recentNoReturn = cohortUsers
    .filter((u) => {
      const active = activeDatesByUser.get(u.id) ?? new Set<string>()
      const signupKey = toDateKey(u.createdAt)
      const hasReturn = Array.from(active).some((dateKey) => dateKey > signupKey)
      return !hasReturn
    })
    .slice(0, 10)

  if (recentNoReturn.length > 0) {
    console.log('\nSample users without a later return (first 10):')
    for (const u of recentNoReturn) {
      console.log(`- ${u.name || '(no name)'} <${u.email || 'no-email'}> signup=${u.createdAt.toISOString()}`)
    }
  }

  console.log('\nNotes:')
  console.log('- This uses user.createdAt as first-login proxy.')
  console.log('- Topic/flashcard tables store latest timestamps, so this is directionally accurate but may undercount exact day-level retention.')
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
