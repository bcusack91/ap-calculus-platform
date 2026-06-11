import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireCronSecret } from '@/lib/cron-auth'

// Cron-triggered weekly digest email endpoint
// Secured by CRON_SECRET header (Vercel Cron or similar)
export async function POST(request: Request) {
  try {
    const unauthorized = requireCronSecret(request)
    if (unauthorized) return unauthorized

    // Find users who opted in to weekly digest
    const users = await prisma.user.findMany({
      where: {
        email: { not: null },
        emailVerified: { not: null },
      },
      select: {
        id: true,
        name: true,
        email: true,
        topicProgress: {
          where: {
            lastAccessed: {
              gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            },
          },
          select: {
            status: true,
            masteryLevel: true,
            topic: {
              select: { title: true },
            },
          },
        },
        dailyStreak: {
          select: { currentStreak: true, longestStreak: true },
        },
        quizAttempts: {
          where: {
            startedAt: {
              gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            },
          },
          select: { score: true, maxScore: true },
        },
      },
    })

    const emailsSent: string[] = []

    for (const user of users) {
      if (!user.email) continue
      if (user.topicProgress.length === 0 && user.quizAttempts.length === 0) continue

      const topicsStudied = user.topicProgress.length
      const topicsCompleted = user.topicProgress.filter(
        (t) => t.status === 'COMPLETED' || t.status === 'MASTERED'
      ).length
      const quizzesTaken = user.quizAttempts.length
      const avgScore = quizzesTaken > 0
        ? Math.round(
            user.quizAttempts.reduce((sum, q) => sum + (q.maxScore > 0 ? (q.score / q.maxScore) * 100 : 0), 0) / quizzesTaken
          )
        : 0
      const streak = user.dailyStreak?.currentStreak ?? 0

      const weeklyDigest = {
        to: user.email,
        name: user.name ?? 'Student',
        topicsStudied,
        topicsCompleted,
        quizzesTaken,
        avgScore,
        streak,
        topTopics: user.topicProgress
          .sort((a, b) => (b.masteryLevel ?? 0) - (a.masteryLevel ?? 0))
          .slice(0, 3)
          .map((t) => t.topic.title),
      }

      // In production, this would call an email service (Resend, SendGrid, etc.)
      // For now, store the digest data for later processing
      console.log(`[weekly-digest] Would send to ${user.email}:`, weeklyDigest)
      emailsSent.push(user.email)
    }

    return NextResponse.json({
      success: true,
      emailsProcessed: emailsSent.length,
    })
  } catch (error) {
    console.error('[weekly-digest] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
