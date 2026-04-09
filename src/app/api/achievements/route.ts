import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { checkAndAwardAchievements } from '@/lib/achievements'
import { unstable_cache } from 'next/cache'

// Achievement definitions rarely change — cache for 1 hour
const getCachedAchievements = unstable_cache(
  () => prisma.achievement.findMany({ orderBy: { category: 'asc' } }),
  ['all-achievements'],
  { revalidate: 3600 }
)

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const [allAchievements, userAchievements] = await Promise.all([
      getCachedAchievements(),
      prisma.userAchievement.findMany({
        where: { userId: session.user.id },
        select: { achievementId: true, unlockedAt: true },
      }),
    ])

    const unlockedMap = new Map(
      userAchievements.map((ua) => [ua.achievementId, ua.unlockedAt])
    )

    const achievements = allAchievements.map((a) => ({
      id: a.id,
      name: a.name,
      description: a.description,
      icon: a.icon,
      category: a.category,
      unlocked: unlockedMap.has(a.id),
      unlockedAt: unlockedMap.get(a.id) ?? null,
    }))

    return NextResponse.json({
      achievements,
      totalUnlocked: userAchievements.length,
      totalAchievements: allAchievements.length,
    })
  } catch (error) {
    console.error('Achievements API error:', error)
    return NextResponse.json({ error: 'Failed to load achievements' }, { status: 500 })
  }
}

// POST: manually trigger achievement check (called after significant actions)
export async function POST() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const newlyUnlocked = await checkAndAwardAchievements(session.user.id)
    return NextResponse.json({ newlyUnlocked })
  } catch (error) {
    console.error('Achievement check error:', error)
    return NextResponse.json({ error: 'Failed to check achievements' }, { status: 500 })
  }
}
