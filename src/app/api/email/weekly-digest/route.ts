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
        // QuizAttempt is a dead table (never written); ExitQuizAttempt is the
        // only real quiz activity. score is a raw count out of totalQuestions.
        exitQuizAttempts: {
          where: {
            completedAt: {
              gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            },
          },
          select: { score: true, totalQuestions: true },
        },
      },
    })

    // Exclude addresses that have unsubscribed (CAN-SPAM). EmailSubscriber is
    // keyed by email, so build a Set of opted-out emails and filter recipients.
    const optedOut = await prisma.emailSubscriber.findMany({
      where: { unsubscribed: true },
      select: { email: true },
    })
    const optedOutEmails = new Set(optedOut.map((s) => s.email.toLowerCase()))

    const emailsSent: string[] = []

    for (const user of users) {
      if (!user.email) continue
      if (optedOutEmails.has(user.email.toLowerCase())) continue
      if (user.topicProgress.length === 0 && user.exitQuizAttempts.length === 0) continue

      const topicsStudied = user.topicProgress.length
      const topicsCompleted = user.topicProgress.filter(
        (t) => t.status === 'COMPLETED' || t.status === 'MASTERED'
      ).length
      const quizzesTaken = user.exitQuizAttempts.length
      const avgScore = quizzesTaken > 0
        ? Math.round(
            user.exitQuizAttempts.reduce((sum, q) => sum + (q.totalQuestions > 0 ? (q.score / q.totalQuestions) * 100 : 0), 0) / quizzesTaken
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
