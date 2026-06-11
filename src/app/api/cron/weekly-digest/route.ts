import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendWeeklyDigest } from '@/lib/email'
import { requireCronSecret } from '@/lib/cron-auth'

/**
 * Weekly digest cron job — call every Sunday via Vercel Cron.
 * Sends a weekly study summary to users who have opted in.
 * 
 * Vercel Cron config in vercel.json:
 *   { "path": "/api/cron/weekly-digest", "schedule": "0 14 * * 0" }
 */
export async function GET(request: Request) {
  // Verify cron secret to prevent unauthorized calls
  const unauthorized = requireCronSecret(request)
  if (unauthorized) return unauthorized

  try {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    // Find users with recent activity
    const users = await prisma.user.findMany({
      where: {
        email: { not: null },
        topicProgress: {
          some: { lastAccessed: { gte: oneWeekAgo } },
        },
      },
      select: {
        email: true,
        name: true,
        topicProgress: {
          where: { lastAccessed: { gte: oneWeekAgo } },
          select: { timeSpent: true },
        },
        flashcardProgress: {
          where: { lastReviewed: { gte: oneWeekAgo } },
          select: { id: true },
        },
        quizAttempts: {
          where: { completedAt: { gte: oneWeekAgo } },
          select: { id: true },
        },
        dailyStreak: {
          select: { currentStreak: true },
        },
      },
    })

    let sent = 0
    let errors = 0

    for (const user of users) {
      if (!user.email) continue

      const stats = {
        lessonsCompleted: user.topicProgress.length,
        flashcardsReviewed: user.flashcardProgress.length,
        quizzesTaken: user.quizAttempts.length,
        streak: user.dailyStreak?.currentStreak ?? 0,
        minutesStudied: Math.round(
          user.topicProgress.reduce((sum: number, tp: { timeSpent: number }) => sum + tp.timeSpent, 0) / 60
        ),
      }

      try {
        await sendWeeklyDigest(user.email, user.name, stats)
        sent++
      } catch {
        errors++
      }
    }

    return NextResponse.json({ ok: true, sent, errors, total: users.length })
  } catch (error) {
    console.error('Weekly digest cron error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
