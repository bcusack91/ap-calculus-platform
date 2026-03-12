import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// POST /api/challenges/seed — generate daily/weekly challenges (admin only)
export async function POST() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Check admin role
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  })
  if (user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Admin only' }, { status: 403 })
  }

  const now = new Date()
  const todayStart = new Date(now)
  todayStart.setHours(0, 0, 0, 0)
  const todayEnd = new Date(todayStart)
  todayEnd.setDate(todayEnd.getDate() + 1)

  const weekStart = new Date(todayStart)
  weekStart.setDate(weekStart.getDate() - weekStart.getDay()) // Sunday
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekEnd.getDate() + 7)

  // Check if daily challenges already exist for today
  const existingDaily = await prisma.challenge.count({
    where: { type: 'DAILY', startsAt: { gte: todayStart }, endsAt: { lte: todayEnd } },
  })

  const created: string[] = []

  if (existingDaily === 0) {
    const dailyChallenges = [
      { title: 'Speed Learner', description: 'Complete 5 lessons today', category: 'LESSON', requirement: 5, xpReward: 50, icon: '📚' },
      { title: 'Flash Master', description: 'Review 20 flashcards', category: 'FLASHCARD', requirement: 20, xpReward: 40, icon: '⚡' },
      { title: 'Quiz Whiz', description: 'Score 80%+ on 3 quizzes', category: 'QUIZ', requirement: 3, xpReward: 60, icon: '🧠' },
    ]

    for (const c of dailyChallenges) {
      await prisma.challenge.create({
        data: {
          title: c.title,
          description: c.description,
          type: 'DAILY',
          category: c.category,
          requirement: c.requirement,
          xpReward: c.xpReward,
          icon: c.icon,
          startsAt: todayStart,
          endsAt: todayEnd,
        },
      })
      created.push(`Daily: ${c.title}`)
    }
  }

  // Check if weekly challenges already exist
  const existingWeekly = await prisma.challenge.count({
    where: { type: 'WEEKLY', startsAt: { gte: weekStart }, endsAt: { lte: weekEnd } },
  })

  if (existingWeekly === 0) {
    const weeklyChallenges = [
      { title: 'Weekly Warrior', description: 'Complete 25 lessons this week', category: 'LESSON', requirement: 25, xpReward: 200, icon: '🏆' },
      { title: 'Streak Champion', description: 'Maintain a 7-day study streak', category: 'STREAK', requirement: 7, xpReward: 150, icon: '🔥' },
      { title: 'Competitive Spirit', description: 'Play 10 competitive matches', category: 'COMPETITIVE', requirement: 10, xpReward: 175, icon: '⚔️' },
    ]

    for (const c of weeklyChallenges) {
      await prisma.challenge.create({
        data: {
          title: c.title,
          description: c.description,
          type: 'WEEKLY',
          category: c.category,
          requirement: c.requirement,
          xpReward: c.xpReward,
          icon: c.icon,
          startsAt: weekStart,
          endsAt: weekEnd,
        },
      })
      created.push(`Weekly: ${c.title}`)
    }
  }

  return NextResponse.json({ created, message: `Created ${created.length} challenges` })
}
