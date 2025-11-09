import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
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
    const session = await getServerSession()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        topicProgress: {
          where: {
            topicId: { in: ['the-unit-circle'] } // Add more topics as they unlock
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
    const unitCircleProgress = user.topicProgress.find(
      p => p.topicId === 'the-unit-circle'
    )

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
