import { NextRequest, NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { calculateNextReview, buttonToQuality } from '@/lib/spaced-repetition'
import { flashcardReviewSchema, parseBody } from '@/lib/validations'
import { recordAssignmentCompletion } from '@/lib/assignment-autocomplete'

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
    const parsed = parseBody(flashcardReviewSchema, body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error },
        { status: 400 }
      )
    }
    const { flashcardId, rating } = parsed.data

    // Get current progress (may not exist yet for a brand-new card)
    const progress = await prisma.flashcardProgress.findUnique({
      where: {
        userId_flashcardId: {
          userId: session.user.id,
          flashcardId: flashcardId
        }
      }
    })

    // For a first review there is no progress row yet — treat it as a fresh card
    // with SM-2 defaults (easeFactor 2.5, interval 0, repetitions 0) and upsert
    // below, rather than 404ing and blocking the card from ever being reviewed.
    const easeFactor = progress?.easeFactor ?? 2.5
    const interval = progress?.interval ?? 0
    const repetitions = progress?.repetitions ?? 0
    const isMinuteInterval = progress?.isMinuteInterval ?? false
    const reviewCount = progress?.reviewCount ?? 0

    // Convert button rating to quality score
    const quality = buttonToQuality(rating)

    // Calculate next review using SM-2 algorithm
    const result = calculateNextReview(
      quality,
      easeFactor,
      interval,
      repetitions,
      isMinuteInterval
    )

    // Upsert progress: create the row on a first review, update it otherwise.
    const updatedProgress = await prisma.flashcardProgress.upsert({
      where: {
        userId_flashcardId: {
          userId: session.user.id,
          flashcardId: flashcardId
        }
      },
      create: {
        userId: session.user.id,
        flashcardId: flashcardId,
        easeFactor: result.easeFactor,
        interval: result.interval,
        isMinuteInterval: result.isMinuteInterval,
        repetitions: result.repetitions,
        nextReview: result.nextReview,
        lastReviewed: new Date(),
        reviewCount: 1
      },
      update: {
        easeFactor: result.easeFactor,
        interval: result.interval,
        isMinuteInterval: result.isMinuteInterval,
        repetitions: result.repetitions,
        nextReview: result.nextReview,
        lastReviewed: new Date(),
        reviewCount: reviewCount + 1
      }
    })

    // Best-effort assignment auto-completion: topic-based FLASHCARD_REVIEW
    // assignments (no teacher flashcardSetId) are studied on this surface,
    // which previously never recorded a submission. A card review actually
    // completed above, so record completion semantics (score 1 — matching
    // the set-viewer's explicit submit). Helper swallows its own failures.
    const reviewedCard = await prisma.flashcard.findUnique({
      where: { id: flashcardId },
      select: { topic: { select: { slug: true } } },
    })
    if (reviewedCard?.topic?.slug) {
      await recordAssignmentCompletion({
        userId: session.user.id,
        topicSlug: reviewedCard.topic.slug,
        types: ['FLASHCARD_REVIEW'],
        score: 1,
      })
    }

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
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(req.url)
    const topicId = searchParams.get('topicId')

    // Build query
    const now = new Date()
    const where: Prisma.FlashcardProgressWhereInput = {
      userId: session.user.id,
      nextReview: {
        lte: now // Cards due now or in the past
      }
    }

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
