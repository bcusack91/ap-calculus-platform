import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const streak = await prisma.dailyStreak.findUnique({
      where: { userId: session.user.id },
    })

    if (!streak) {
      return NextResponse.json({ currentStreak: 0, atRisk: false, milestone: false })
    }

    const now = new Date()
    const lastActive = streak.lastActiveDate ? new Date(streak.lastActiveDate) : null
    const hoursSinceActive = lastActive
      ? (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60)
      : Infinity

    // At risk if last active 16-48 hours ago (still saveable today)
    const atRisk = hoursSinceActive >= 16 && hoursSinceActive < 48 && streak.currentStreak > 0

    // Milestone at 7, 14, 30, 50, 100, 365 days
    const milestones = [7, 14, 30, 50, 100, 365]
    const milestone = milestones.includes(streak.currentStreak)

    return NextResponse.json({
      currentStreak: streak.currentStreak,
      longestStreak: streak.longestStreak,
      atRisk,
      milestone,
      lastActive: lastActive?.toISOString() ?? null,
    })
  } catch (error) {
    console.error('[streak/status] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
