import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * Check if user has unlocked competitive mode
 * Requirements:
 * User must have completed ANY competitive-enabled topic with 80%+ mastery
 * Currently: the-unit-circle OR reflection-refraction
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
            topic: { select: { slug: true } }
          }
        },
        competitiveProfile: true
      }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Check for ANY completed topic with competitive mode support
    const competitiveTopics = ['the-unit-circle', 'reflection-refraction']
    
    const completedCompetitiveTopics = user.topicProgress.filter(tp => 
      competitiveTopics.includes(tp.topic.slug) &&
      (tp.status === 'COMPLETED' || tp.status === 'MASTERED') &&
      (tp.masteryLevel || 0) >= 0.8
    )
    
    const completedTopicSlugs = completedCompetitiveTopics.map(tp => tp.topic.slug)
    const hasCompletedAnyTopic = completedTopicSlugs.length > 0

    // Check if already unlocked
    if (user.competitiveProfile?.competitiveModeUnlocked) {
      return NextResponse.json({
        unlocked: true,
        profile: user.competitiveProfile,
        completedTopics: completedTopicSlugs
      })
    }

    // Auto-unlock if user has completed any competitive topic
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

    // Not unlocked - provide requirements info
    // Show progress on first available competitive topic
    const unitCircleProgress = user.topicProgress.find(tp => tp.topic.slug === 'the-unit-circle')
    const reflectionProgress = user.topicProgress.find(tp => tp.topic.slug === 'reflection-refraction')
    
    // Use whichever topic has higher progress
    const bestProgress = [unitCircleProgress, reflectionProgress]
      .filter(p => p)
      .sort((a, b) => (b?.masteryLevel || 0) - (a?.masteryLevel || 0))[0]
    
    const masteryLevel = bestProgress?.masteryLevel || 0
    const topicSlug = bestProgress?.topic.slug || 'the-unit-circle'

    return NextResponse.json({
      unlocked: false,
      completedTopics: [],
      requirements: {
        message: 'Complete any topic (Unit Circle or Reflection & Refraction) with 80%+ mastery',
        currentTopic: topicSlug,
        masteryLevel: masteryLevel,
        masteryRequired: 0.8,
        topicsAvailable: competitiveTopics
      }
    })

  } catch (error) {
    console.error('Error checking competitive unlock:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
