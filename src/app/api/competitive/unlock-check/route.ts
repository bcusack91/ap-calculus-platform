import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * Check if user has unlocked competitive mode
 * Requirements:
 * User must have completed ANY topic with 80%+ mastery
 */
export async function GET(req: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        topicProgress: {
          include: {
            topic: { select: { slug: true, title: true } }
          }
        },
        competitiveProfile: true
      }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Check for ANY completed topic with 80%+ mastery
    const completedTopics = user.topicProgress.filter(tp => 
      (tp.status === 'COMPLETED' || tp.status === 'MASTERED') &&
      (tp.masteryLevel || 0) >= 0.8
    )
    
    const completedTopicSlugs = completedTopics.map(tp => tp.topic.slug)
    const hasCompletedAnyTopic = completedTopicSlugs.length > 0

    // Check if already unlocked
    if (user.competitiveProfile?.competitiveModeUnlocked) {
      return NextResponse.json({
        unlocked: true,
        profile: user.competitiveProfile,
        completedTopics: completedTopicSlugs
      })
    }

    // Auto-unlock if user has completed any topic with 80%+ mastery
    if (hasCompletedAnyTopic && !user.competitiveProfile) {
      const profile = await prisma.competitiveProfile.create({
        data: {
          userId: user.id,
          competitiveModeUnlocked: true,
          unitCircleMMR: 1000,
          overallMMR: 1000
        }
      })

      return NextResponse.json({
        unlocked: true,
        justUnlocked: true,
        profile,
        completedTopics: completedTopicSlugs
      })
    }

    // Also auto-unlock if profile exists but wasn't marked unlocked
    if (hasCompletedAnyTopic && user.competitiveProfile && !user.competitiveProfile.competitiveModeUnlocked) {
      const profile = await prisma.competitiveProfile.update({
        where: { userId: user.id },
        data: { competitiveModeUnlocked: true }
      })

      return NextResponse.json({
        unlocked: true,
        justUnlocked: true,
        profile,
        completedTopics: completedTopicSlugs
      })
    }

    // Not unlocked - show progress on user's best topic so far
    const bestProgress = user.topicProgress
      .sort((a, b) => (b.masteryLevel || 0) - (a.masteryLevel || 0))[0]
    
    const masteryLevel = bestProgress?.masteryLevel || 0
    const topicSlug = bestProgress?.topic.slug || ''
    const topicTitle = bestProgress?.topic.title || 'any topic'

    return NextResponse.json({
      unlocked: false,
      completedTopics: [],
      requirements: {
        message: 'Complete any topic with 80%+ mastery to unlock competitive mode',
        currentTopic: topicSlug,
        currentTopicTitle: topicTitle,
        masteryLevel: masteryLevel,
        masteryRequired: 0.8
      }
    })

  } catch (error) {
    console.error('Error checking competitive unlock:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
