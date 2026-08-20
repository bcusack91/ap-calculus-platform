import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'
import { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { calculateNextReview, buttonToQuality } from '@/lib/spaced-repetition'
import { flashcardReviewSchema, parseBody } from '@/lib/validations'
import { recordAssignmentCompletion } from '@/lib/assignment-autocomplete'
import { getActiveStudyContext } from '@/lib/study-context'

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
    const { flashcardId, rating, tzOffset } = parsed.data

    // Reviews accrue to the user's ACTIVE study mode (personal / class /
    // course) — resolved server-side so each mode is an independent deck.
    const context = await getActiveStudyContext(session.user.id)

    // Get current progress (may not exist yet for a brand-new card)
    const progress = await prisma.flashcardProgress.findUnique({
      where: {
        userId_flashcardId_context: {
          userId: session.user.id,
          flashcardId: flashcardId,
          context
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

    // Calculate the next review (day-scale intervals anchor to the student's
    // 4am local day rollover when tzOffset is provided)
    const result = calculateNextReview(
      quality,
      easeFactor,
      interval,
      repetitions,
      isMinuteInterval,
      tzOffset
    )

    // Upsert progress: create the row on a first review, update it otherwise.
    const updatedProgress = await prisma.flashcardProgress.upsert({
      where: {
        userId_flashcardId_context: {
          userId: session.user.id,
          flashcardId: flashcardId,
          context
        }
      },
      create: {
        userId: session.user.id,
        flashcardId: flashcardId,
        context,
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

    // Best-effort daily-habit rollup: one row per user per UTC day, powering
    // the teacher's "did they do their flashcards this week" view.
    try {
      await prisma.$executeRaw`
        INSERT INTO "FlashcardDailyActivity" ("id", "userId", "day", "reviews")
        VALUES (${randomUUID()}, ${session.user.id}, CURRENT_DATE, 1)
        ON CONFLICT ("userId", "day") DO UPDATE SET "reviews" = "FlashcardDailyActivity"."reviews" + 1`
    } catch (rollupError) {
      console.error('flashcard daily rollup failed (non-fatal):', rollupError)
    }

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
    // Client's timezone offset in minutes (JS getTimezoneOffset convention:
    // local + offset = UTC). Used to compute "later today" in the STUDENT's
    // day, so learning-step cards due in minutes/hours count correctly.
    const tzOffsetParam = Number(searchParams.get('tzOffset'))
    const tzOffsetMs = Number.isFinite(tzOffsetParam) ? tzOffsetParam * 60000 : 0

    // The review queue shows only the ACTIVE study mode's deck.
    const context = await getActiveStudyContext(session.user.id)

    // Build query
    const now = new Date()
    const localNow = new Date(now.getTime() - tzOffsetMs)
    const localDayEnd = new Date(localNow)
    localDayEnd.setUTCHours(23, 59, 59, 999)
    const endOfStudentDay = new Date(localDayEnd.getTime() + tzOffsetMs)

    const topicFilter: Prisma.FlashcardProgressWhereInput = topicId
      ? { flashcard: { topicId } }
      : {}
    const where: Prisma.FlashcardProgressWhereInput = {
      userId: session.user.id,
      context,
      nextReview: {
        lte: now // Cards due now or in the past
      },
      ...topicFilter,
    }

    // Get due flashcards (batched — the client refetches when a batch is
    // finished) plus REAL counts: deriving stats from the capped batch made
    // "Due Now" top out at 50 and showed "All Caught Up" with thousands of
    // cards still due.
    const [dueCards, totalCards, dueCount, newCards, dueLaterToday, nextUpcoming] = await Promise.all([
      prisma.flashcardProgress.findMany({
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
        take: 50 // Batch size per fetch, not a session ceiling
      }),
      prisma.flashcardProgress.count({
        where: {
          userId: session.user.id,
          context
        }
      }),
      prisma.flashcardProgress.count({ where }),
      prisma.flashcardProgress.count({ where: { ...where, repetitions: 0 } }),
      // Cards that come back LATER TODAY (learning-step returns, mostly) —
      // students otherwise assume they're done after the first pass.
      prisma.flashcardProgress.count({
        where: {
          userId: session.user.id,
          context,
          nextReview: { gt: now, lte: endOfStudentDay },
          ...topicFilter,
        },
      }),
      // The very next card to come due, for "next card in 5 minutes" copy.
      prisma.flashcardProgress.findFirst({
        where: {
          userId: session.user.id,
          context,
          nextReview: { gt: now },
          ...topicFilter,
        },
        orderBy: { nextReview: 'asc' },
        select: { nextReview: true },
      }),
    ])

    const reviewCards = dueCount - newCards

    return NextResponse.json({
      cards: dueCards,
      stats: {
        total: totalCards,
        due: dueCount,
        new: newCards,
        review: reviewCards,
        dueLaterToday,
        nextDueAt: nextUpcoming?.nextReview ?? null
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
