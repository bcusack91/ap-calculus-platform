import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendStreakReminder } from '@/lib/email'
import { requireCronSecret } from '@/lib/cron-auth'

/**
 * Streak reminder cron job — call daily at 6 PM via Vercel Cron.
 * Sends reminders to users who haven't studied today but have an active streak.
 * 
 * Vercel Cron config in vercel.json:
 *   { "path": "/api/cron/streak-reminder", "schedule": "0 18 * * *" }
 */
export async function GET(request: Request) {
  const unauthorized = requireCronSecret(request)
  if (unauthorized) return unauthorized

  try {
    const todayStart = new Date()
    todayStart.setHours(0, 0, 0, 0)

    // Find users with active streaks who haven't studied today
    // We query DailyStreak directly and filter
    const streaks = await prisma.dailyStreak.findMany({
      where: {
        currentStreak: { gte: 3 }, // only remind users with 3+ day streaks
        lastActiveDate: { lt: todayStart }, // not active today
      },
      select: {
        currentStreak: true,
        user: {
          select: { email: true, name: true },
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

    let sent = 0
    let errors = 0

    for (const streak of streaks) {
      if (!streak.user.email) continue
      if (optedOutEmails.has(streak.user.email.toLowerCase())) continue

      try {
        await sendStreakReminder(streak.user.email, streak.user.name, streak.currentStreak)
        sent++
      } catch {
        errors++
      }
    }

    return NextResponse.json({ ok: true, sent, errors, total: streaks.length })
  } catch (error) {
    console.error('Streak reminder cron error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
