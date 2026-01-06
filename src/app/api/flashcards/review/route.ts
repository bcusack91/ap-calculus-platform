import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { calculateNextReview, buttonToQuality } from '@/lib/spaced-repetition'

/**
 * POST /api/flashcards/review
 * Submit a flashcard review and update spaced repetition schedule
 */
export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { flashcardId, rating } = body // rating: 'again' | 'hard' | 'good' | 'easy'

    if (!flashcardId || !rating) {
      return NextResponse.json(
        { error: 'Flashcard ID and rating are required' },
        { status: 400 }
      )
    }

    // Get current progress
    const progress = await prisma.flashcardProgress.findUnique({
      where: {
        userId_flashcardId: {
          userId: session.user.id,
          flashcardId: flashcardId
        }
      }
    })

    if (!progress) {
      return NextResponse.json(
        { error: 'Flashcard progress not found' },
        { status: 404 }
      )
    }

    // Convert button rating to quality score
    const quality = buttonToQuality(rating)

    // Calculate next review using SM-2 algorithm
    const result = calculateNextReview(
      quality,
      progress.easeFactor,
      progress.interval,
      progress.repetitions
    )

    // Update progress in database
    const updatedProgress = await prisma.flashcardProgress.update({
      where: {
        userId_flashcardId: {
          userId: session.user.id,
          flashcardId: flashcardId
        }
      },
      data: {
        easeFactor: result.easeFactor,
        interval: result.interval,
        repetitions: result.repetitions,
        nextReview: result.nextReview,
        lastReviewed: new Date(),
        reviewCount: progress.reviewCount + 1
      }
    })

    return NextResponse.json({
      success: true,
      progress: updatedProgress,
      nextReviewDate: result.nextReview,
      interval: result.interval
    })

  } catch (error) {
    console.error('Error submitting flashcard review:', error)
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/flashcards/review?topicId=xxx or /api/flashcards/review (all due cards)
 * Get flashcards due for review
 */
export async function GET(req: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      console.log('❌ Unauthorized: No session')
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    console.log('🎴 Fetching flashcards for user:', session.user.email || session.user.id)
    console.log('🆔 User ID from session:', session.user.id)

    const { searchParams } = new URL(req.url)
    const topicId = searchParams.get('topicId')

    // Build query
    const now = new Date()
    const where: any = {
      userId: session.user.id,
      nextReview: {
        lte: now // Cards due now or in the past
      }
    }

    console.log('🕐 Current time:', now.toISOString())
    console.log('🔍 Query where:', JSON.stringify(where, null, 2))

    if (topicId) {
      where.flashcard = {
        topicId: topicId
      }
    }

    // Get due flashcards
    const dueCards = await prisma.flashcardProgress.findMany({
      where,
      include: {
        flashcard: {
          include: {
            topic: {
              select: {
                title: true,
                slug: true
              }
            }
          }
        }
      },
      orderBy: {
        nextReview: 'asc' // Oldest due cards first
      },
      take: 50 // Limit to 50 cards per session
    })

    // Calculate stats
    const totalCards = await prisma.flashcardProgress.count({
      where: {
        userId: session.user.id
      }
    })

    const dueCount = dueCards.length
    const newCards = dueCards.filter(c => c.repetitions === 0).length
    const reviewCards = dueCards.filter(c => c.repetitions > 0).length

    console.log('📊 Stats:', {
      total: totalCards,
      due: dueCount,
      new: newCards,
      review: reviewCards
    })

    return NextResponse.json({
      cards: dueCards,
      stats: {
        total: totalCards,
        due: dueCount,
        new: newCards,
        review: reviewCards
      }
    })

  } catch (error) {
    console.error('Error fetching due flashcards:', error)
    return NextResponse.json(
      { error: 'Failed to fetch flashcards' },
      { status: 500 }
    )
  }
}
