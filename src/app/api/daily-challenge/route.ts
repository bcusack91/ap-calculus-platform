import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { displayStreak } from '@/lib/streak'
import { getDailyQuestions, getUtcDayKey, dayKeyToDate, toPublicQuestion } from '@/lib/daily-challenge'

export const dynamic = 'force-dynamic'

/**
 * GET /api/daily-challenge
 * Returns today's 5 deterministic questions (answers/explanations STRIPPED)
 * plus the user's result if they already completed today, and their current
 * streak. Everyone gets the same challenge on a given UTC day.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = session.user.id

    const day = getUtcDayKey()
    const [questions, result, streakRow] = await Promise.all([
      getDailyQuestions(day),
      prisma.dailyChallengeResult.findUnique({
        where: { userId_day: { userId, day: dayKeyToDate(day) } },
        select: { score: true, total: true, completedAt: true },
      }),
      prisma.dailyStreak.findUnique({
        where: { userId },
        select: { currentStreak: true, lastActiveDate: true },
      }),
    ])

    return NextResponse.json({
      day,
      questions: questions.map(toPublicQuestion),
      result: result
        ? { score: result.score, total: result.total, completedAt: result.completedAt.toISOString() }
        : null,
      streak: displayStreak(streakRow),
    })
  } catch (error) {
    console.error('[daily-challenge] GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
