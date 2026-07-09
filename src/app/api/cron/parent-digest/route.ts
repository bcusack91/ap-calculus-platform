import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendParentProgressEmail } from '@/lib/email'
import { requireCronSecret } from '@/lib/cron-auth'

/**
 * Weekly parent/guardian progress digest — call every Sunday via Vercel Cron.
 * Sends a short progress summary to the guardian email of each student who set
 * one AND was active in the last week. Reuses the EmailSubscriber opt-out so a
 * guardian can unsubscribe from any email.
 *
 * Vercel Cron config in vercel.json:
 *   { "path": "/api/cron/parent-digest", "schedule": "0 15 * * 0" }
 */
export async function GET(request: Request) {
  const unauthorized = requireCronSecret(request)
  if (unauthorized) return unauthorized

  try {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

    const students = await prisma.user.findMany({
      where: {
        guardianEmail: { not: null },
        topicProgress: { some: { lastAccessed: { gte: oneWeekAgo } } },
      },
      select: {
        name: true,
        guardianEmail: true,
        topicProgress: {
          where: { lastAccessed: { gte: oneWeekAgo } },
          select: { timeSpent: true, completedAt: true, masteryLevel: true },
        },
        flashcardProgress: { where: { lastReviewed: { gte: oneWeekAgo } }, select: { id: true } },
        exitQuizAttempts: { where: { completedAt: { gte: oneWeekAgo } }, select: { id: true } },
        dailyStreak: { select: { currentStreak: true } },
      },
    })

    // Consent gate (double opt-in): only email guardians who CONFIRMED and have
    // not unsubscribed. Scope the lookup to this run's guardians.
    const guardianEmails = [
      ...new Set(
        students.map((s) => s.guardianEmail?.toLowerCase()).filter((e): e is string => !!e)
      ),
    ]
    const subs = await prisma.emailSubscriber.findMany({
      where: { email: { in: guardianEmails } },
      select: { email: true, verified: true, unsubscribed: true },
    })
    const subByEmail = new Map(subs.map((s) => [s.email.toLowerCase(), s]))

    let sent = 0
    let errors = 0
    let skipped = 0

    for (const student of students) {
      const guardian = student.guardianEmail?.toLowerCase()
      if (!guardian) continue
      const sub = subByEmail.get(guardian)
      if (!sub || !sub.verified || sub.unsubscribed) {
        skipped++ // not confirmed (or opted out) — don't send
        continue
      }

      const tp = student.topicProgress
      const masteries = tp.map((t) => t.masteryLevel)
      const stats = {
        lessonsCompleted: tp.filter((t) => t.completedAt && t.completedAt >= oneWeekAgo).length,
        avgMastery: masteries.length
          ? Math.round((masteries.reduce((a, b) => a + b, 0) / masteries.length) * 100)
          : 0,
        currentStreak: student.dailyStreak?.currentStreak ?? 0,
        minutesStudied: Math.round(tp.reduce((sum, t) => sum + t.timeSpent, 0) / 60),
        flashcardsReviewed: student.flashcardProgress.length,
        quizzesTaken: student.exitQuizAttempts.length,
      }

      try {
        await sendParentProgressEmail(guardian, student.name, stats)
        sent++
      } catch {
        errors++
      }
    }

    return NextResponse.json({ ok: true, sent, errors, skipped, total: students.length })
  } catch (error) {
    console.error('Parent digest cron error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
