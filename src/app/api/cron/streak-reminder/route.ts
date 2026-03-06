import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendStreakReminder } from '@/lib/email'

/**
 * Streak reminder cron job — call daily at 6 PM via Vercel Cron.
 * Sends reminders to users who haven't studied today but have an active streak.
 * 
 * Vercel Cron config in vercel.json:
 *   { "path": "/api/cron/streak-reminder", "schedule": "0 18 * * *" }
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

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

    let sent = 0
    let errors = 0

    for (const streak of streaks) {
      if (!streak.user.email) continue

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
