import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * Check if user has unlocked competitive mode
 * Requirements:
 * 1. Completed all 4 parts of Unit Circle module
 * 2. Achieved mastery level > 0.8
 * 3. No existing competitive profile OR profile exists and is unlocked
 */
export async function GET(req: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // First, get the Unit Circle topic
    const unitCircleTopic = await prisma.topic.findUnique({
      where: { slug: 'the-unit-circle' }
    })

    if (!unitCircleTopic) {
      return NextResponse.json({ error: 'Unit Circle topic not found' }, { status: 404 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        topicProgress: {
          where: {
            topicId: unitCircleTopic.id
          }
        },
        competitiveProfile: true
      }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Check if already unlocked
    if (user.competitiveProfile?.competitiveModeUnlocked) {
      return NextResponse.json({
        unlocked: true,
        profile: user.competitiveProfile
      })
    }

    // Check Unit Circle completion
    const unitCircleProgress = user.topicProgress[0] // Should only be one since we filtered by topicId

    const hasCompletedUnitCircle = unitCircleProgress?.status === 'COMPLETED' || 
                                    unitCircleProgress?.status === 'MASTERED'
    const hasMastery = (unitCircleProgress?.masteryLevel || 0) >= 0.8

    const meetsRequirements = hasCompletedUnitCircle && hasMastery

    if (meetsRequirements && !user.competitiveProfile) {
      // Auto-unlock and create profile
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
        profile
      })
    }

    return NextResponse.json({
      unlocked: meetsRequirements,
      requirements: {
        unitCircleCompleted: hasCompletedUnitCircle,
        masteryLevel: unitCircleProgress?.masteryLevel || 0,
        masteryRequired: 0.8
      }
    })

  } catch (error) {
    console.error('Error checking competitive unlock:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
