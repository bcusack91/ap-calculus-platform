import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { touchDailyStreak, displayStreak } from '@/lib/streak'
import { getDailyQuestions, getUtcDayKey, dayKeyToDate, DAILY_CHALLENGE_SIZE } from '@/lib/daily-challenge'

export const dynamic = 'force-dynamic'

const answerSchema = z.object({
  // Indices into each question's SERVED option order, in question order.
  answers: z.array(z.number().int().min(0).max(9)).min(1).max(DAILY_CHALLENGE_SIZE),
})

/**
 * POST /api/daily-challenge/answer
 * Grades today's challenge server-side (regenerating the same deterministic
 * question set), upserts DailyChallengeResult (one per user per UTC day) and
 * advances the daily streak. A second submission on the same day is rejected
 * with the existing result.
 */
export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = session.user.id

    const parsed = answerSchema.safeParse(await request.json().catch(() => null))
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid answers payload' }, { status: 400 })
    }

    const day = getUtcDayKey()
    const dayDate = dayKeyToDate(day)
    const questions = await getDailyQuestions(day)
    const { answers } = parsed.data
    if (answers.length !== questions.length) {
      return NextResponse.json(
        { error: `Expected ${questions.length} answers, got ${answers.length}` },
        { status: 400 }
      )
    }

    const existingResponse = (existing: { score: number; total: number; completedAt: Date }) =>
      NextResponse.json(
        {
          alreadyCompleted: true,
          day,
          score: existing.score,
          total: existing.total,
          completedAt: existing.completedAt.toISOString(),
        },
        { status: 409 }
      )

    const existing = await prisma.dailyChallengeResult.findUnique({
      where: { userId_day: { userId, day: dayDate } },
      select: { score: true, total: true, completedAt: true },
    })
    if (existing) return existingResponse(existing)

    // Grade server-side against the regenerated question set.
    const correct = questions.map((q, i) => answers[i] === q.correctAnswer)
    const score = correct.filter(Boolean).length

    try {
      // Result + streak commit or roll back together.
      await prisma.$transaction(async (tx) => {
        await tx.dailyChallengeResult.create({
          data: { userId, day: dayDate, score, total: questions.length },
        })
        await touchDailyStreak(tx, userId)
      })
    } catch (err) {
      // Unique (userId, day) race: another submission won — return its result.
      if ((err as { code?: string }).code === 'P2002') {
        const raced = await prisma.dailyChallengeResult.findUnique({
          where: { userId_day: { userId, day: dayDate } },
          select: { score: true, total: true, completedAt: true },
        })
        if (raced) return existingResponse(raced)
      }
      throw err
    }

    const streakRow = await prisma.dailyStreak.findUnique({
      where: { userId },
      select: { currentStreak: true, lastActiveDate: true },
    })

    return NextResponse.json({
      day,
      score,
      total: questions.length,
      streak: displayStreak(streakRow),
      // Completed — safe to reveal grading detail for review.
      review: questions.map((q, i) => ({
        id: q.id,
        correct: correct[i],
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
      })),
    })
  } catch (error) {
    console.error('[daily-challenge/answer] POST error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
