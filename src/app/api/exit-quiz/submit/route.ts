import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * POST /api/exit-quiz/submit
 * Submit exit quiz results and handle unlock logic.
 */
export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { topicSlug, score, totalQuestions, passed, mustRedoUnit, answers, timeSpent } = body

    if (!topicSlug || score === undefined || !totalQuestions) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save the attempt
    const attempt = await prisma.exitQuizAttempt.create({
      data: {
        userId: session.user.id,
        topicSlug,
        score,
        totalQuestions,
        passed: !!passed,
        mustRedoUnit: !!mustRedoUnit,
        answers: answers || [],
        timeSpent: timeSpent || 0,
      }
    })

    // If passed, unlock competitive mode for the relevant category
    if (passed) {
      // Map topic slugs to competitive category slugs
      const topicToCategoryMap: Record<string, string[]> = {
        'sat-linear-equations-inequalities': ['algebra'],
      }

      const categories = topicToCategoryMap[topicSlug] || []

      // Ensure user has a CompetitiveProfile
      await prisma.competitiveProfile.upsert({
        where: { userId: session.user.id },
        update: { competitiveModeUnlocked: true },
        create: {
          userId: session.user.id,
          competitiveModeUnlocked: true,
          unitCircleMMR: 1000,
          overallMMR: 1000,
        }
      })

      // Also update topic progress to COMPLETED/MASTERED
      const topic = await prisma.topic.findUnique({
        where: { slug: topicSlug },
        select: { id: true }
      })

      if (topic) {
        await prisma.topicProgress.upsert({
          where: {
            userId_topicId: {
              userId: session.user.id,
              topicId: topic.id,
            }
          },
          update: {
            status: 'MASTERED',
            masteryLevel: 1.0,
            completedAt: new Date(),
          },
          create: {
            userId: session.user.id,
            topicId: topic.id,
            status: 'MASTERED',
            masteryLevel: 1.0,
            completedAt: new Date(),
          }
        })
      }

      return NextResponse.json({
        attempt,
        passed: true,
        unlockedCategories: categories,
        message: 'Competitive mode unlocked!'
      })
    }

    return NextResponse.json({
      attempt,
      passed: false,
      mustRedoUnit: !!mustRedoUnit,
      message: mustRedoUnit
        ? 'Score below 5/10. You must redo the unit before retaking the quiz.'
        : 'Score 5-6/10. You can retake the quiz immediately.'
    })

  } catch (error) {
    console.error('Error submitting exit quiz:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
