import { NextRequest, NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { courseTopicWhere } from '@/lib/course-includes'
import { flashcardReviewSchema, parseBody } from '@/lib/validations'
import { recordAssignmentCompletion } from '@/lib/assignment-autocomplete'
import { getActiveStudyContext } from '@/lib/study-context'
import { getDailyQueueState } from '@/lib/flashcard-daily-queue'
import { servedFlashcardWhere, servedProgressWhere } from '@/lib/flashcard-yield'
import { yieldPrefsFor } from '@/lib/flashcard-yield-prefs'
import { applyFlashcardRating } from '@/lib/flashcard-rating'
import { interleaveCards } from '@/lib/user-flashcard-ids'
import { earlierDue, loadOwnQueue, ownCardAsReviewRow } from '@/lib/user-flashcards'

/**
 * POST /api/flashcards/review
 * Submit a flashcard review and update spaced repetition schedule.
 * `flashcardId` may be a site card id or a student-made card ('u:<id>'),
 * which is scheduled on UserFlashcard's own columns. The scheduling, rollup
 * and review-log logic lives in src/lib/flashcard-rating.ts, shared with the
 * offline batch sync (POST /api/flashcards/sync).
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
    const { flashcardId, rating, tzOffset, durationMs } = parsed.data

    // Reviews accrue to the user's ACTIVE study mode (personal / class /
    // course) — resolved server-side so each mode is an independent deck.
    const context = await getActiveStudyContext(session.user.id)

    const outcome = await applyFlashcardRating({
      userId: session.user.id,
      context,
      cardId: flashcardId,
      rating,
      tzOffset,
      durationMs,
    })
    if (outcome.status !== 'applied') {
      return NextResponse.json({ error: 'Flashcard not found' }, { status: 404 })
    }

    // Best-effort assignment auto-completion: topic-based FLASHCARD_REVIEW
    // assignments (no teacher flashcardSetId) are studied on this surface.
    // A card review actually completed above, so record completion semantics
    // (score 1 — matching the set-viewer's explicit submit). Helper swallows
    // its own failures. Own cards belong to no assignment.
    if (outcome.topicSlug) {
      await recordAssignmentCompletion({
        userId: session.user.id,
        topicSlug: outcome.topicSlug,
        types: ['FLASHCARD_REVIEW'],
        score: 1,
      })
    }

    return NextResponse.json({
      success: true,
      progress: outcome.progress,
      nextReviewDate: outcome.nextReview,
      interval: outcome.interval
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
 * GET /api/flashcards/review?topicId=xxx | ?topicSlug=xxx | ?courseSlug=xxx,
 * or /api/flashcards/review (all due cards)
 * Get flashcards due for review. topicSlug powers the topic-filtered rated
 * session (/flashcards/review/start?topic=…) that every "study these cards"
 * link opens.
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
    // Only the yield tiers this student opted into reach any queue query below.
    const prefs = await yieldPrefsFor(session.user.id)
    const yieldWhere = servedProgressWhere(prefs)

    // Build query
    const now = new Date()
    const localNow = new Date(now.getTime() - tzOffsetMs)
    const localDayEnd = new Date(localNow)
    localDayEnd.setUTCHours(23, 59, 59, 999)
    const endOfStudentDay = new Date(localDayEnd.getTime() + tzOffsetMs)

    // Optional narrowing: a single topic (by id or slug), or a whole course
    // (used by course pages to show "N SAT flashcards due now"-style banners).
    const courseSlug = searchParams.get('courseSlug')
    const topicSlug = searchParams.get('topicSlug')?.trim() || null
    const flashcardFilter: Prisma.FlashcardWhereInput = {
      ...servedFlashcardWhere(prefs),
      ...(topicId ? { topicId } : {}),
      ...(topicSlug
        ? { topic: { slug: topicSlug } }
        : courseSlug
          ? { topic: courseTopicWhere(courseSlug) }
          : {}),
    }
    const isFiltered = !!(topicId || topicSlug || courseSlug)
    const topicFilter: Prisma.FlashcardProgressWhereInput =
      isFiltered ? { flashcard: flashcardFilter } : {}

    const cardInclude = {
      flashcard: {
        include: {
          topic: {
            select: {
              title: true,
              slug: true,
            },
          },
        },
      },
    } satisfies Prisma.FlashcardProgressInclude
    // Batch size per fetch, not a session ceiling. `limit` (≤ 200) lets the
    // review page pull a bigger batch to cache for offline review.
    const limitParam = Number(searchParams.get('limit'))
    const BATCH_SIZE = Number.isFinite(limitParam) && limitParam >= 1 ? Math.min(Math.floor(limitParam), 200) : 50

    // Student-made cards (UserFlashcard). `own=1` interleaves the student's
    // due own cards into the main session; `own=0` reports their counts only
    // (so the page can show the "Include my own cards" toggle); absent = the
    // legacy response untouched. `ownOnly=1` is the "Review my cards" session.
    // Own cards keep their own SRS columns and never count against the daily
    // limits below — see src/lib/user-flashcards.ts.
    const ownParam = searchParams.get('own')
    const ownOnly = searchParams.get('ownOnly') === '1'
    const ownTake = Math.max(1, Math.ceil(BATCH_SIZE / 2))

    if (ownOnly) {
      const own = await loadOwnQueue(session.user.id, { now, endOfStudentDay, take: BATCH_SIZE })
      const ownNew = own.cards.filter((c) => c.reviewCount === 0).length
      return NextResponse.json({
        cards: own.cards.map(ownCardAsReviewRow),
        stats: {
          total: own.total,
          due: own.due,
          new: ownNew,
          review: Math.max(0, own.due - ownNew),
          dueLaterToday: own.dueLaterToday,
          nextDueAt: own.nextDueAt,
          ownTotal: own.total,
          ownDue: own.due,
          ownOnly: true,
        },
      })
    }

    // UNFILTERED (the main review session + dashboard stats): Anki-style
    // daily limits apply. The queue is composed as
    //   1. due REVIEW cards (reviewCount > 0, due-soonest first), capped at
    //      the remaining max-reviews-per-day allowance — overflow is
    //      reported as reviewsBeyondLimit ("M more waiting beyond today's
    //      limit"), and
    //   2. NEW cards (reviewCount === 0, scheduled-soonest first), capped at
    //      the remaining new-cards-per-day allowance. Future nextReview dates
    //      do NOT hide new cards: drip-staggered unlock backlogs are pulled
    //      forward into today's allowance.
    // Allowances shrink as reviews are logged (FlashcardDailyActivity), so
    // batch refetches naturally stop at the daily limits.
    if (!isFiltered) {
      const dailyState = await getDailyQueueState(session.user.id, context, now)

      const [reviewRows, totalCards, dueLaterToday, nextUpcoming] = await Promise.all([
        dailyState.reviewsToday > 0
          ? prisma.flashcardProgress.findMany({
              where: { userId: session.user.id, context, reviewCount: { gt: 0 }, nextReview: { lte: now }, ...yieldWhere },
              include: cardInclude,
              orderBy: { nextReview: 'asc' },
              take: Math.min(BATCH_SIZE, dailyState.reviewsToday),
            })
          : Promise.resolve([]),
        prisma.flashcardProgress.count({
          where: {
            userId: session.user.id,
            context,
            ...yieldWhere,
          },
        }),
        // Cards that come back LATER TODAY (learning-step returns). Only
        // reviewCount > 0 rows count: never-reviewed cards are handled by the
        // new-card allowance above, not by their scheduled drip date.
        prisma.flashcardProgress.count({
          where: {
            userId: session.user.id,
            context,
            reviewCount: { gt: 0 },
            nextReview: { gt: now, lte: endOfStudentDay },
            ...yieldWhere,
          },
        }),
        // The very next REVIEW card to come due, for "next card in 5 minutes"
        // copy (drip-scheduled new cards excluded for the same reason).
        prisma.flashcardProgress.findFirst({
          where: {
            userId: session.user.id,
            context,
            reviewCount: { gt: 0 },
            nextReview: { gt: now },
            ...yieldWhere,
          },
          orderBy: { nextReview: 'asc' },
          select: { nextReview: true },
        }),
      ])

      // Fill the rest of the batch with new cards (pull-forward included).
      const newTake = Math.min(BATCH_SIZE - reviewRows.length, dailyState.newToday)
      const newRows = newTake > 0
        ? await prisma.flashcardProgress.findMany({
            where: { userId: session.user.id, context, reviewCount: 0, ...yieldWhere },
            include: cardInclude,
            orderBy: { nextReview: 'asc' },
            take: newTake,
          })
        : []

      const siteRows = [...reviewRows, ...newRows]
      if (ownParam === null) {
        return NextResponse.json({
          cards: siteRows,
          stats: {
            total: totalCards,
            // "Due" is today's remaining workload under the daily limits.
            due: dailyState.dueToday,
            new: dailyState.newToday,
            review: dailyState.reviewsToday,
            reviewsBeyondLimit: dailyState.reviewsBeyondLimit,
            newBeyondLimit: dailyState.newBeyondLimit,
            limits: dailyState.limits,
            dueLaterToday,
            nextDueAt: nextUpcoming?.nextReview ?? null,
          },
        })
      }

      // Own cards: interleaved when included; `due`/`total` stay site-only
      // (they're the daily-limit numbers) and the own counts ride alongside.
      const includeOwn = ownParam === '1'
      const own = await loadOwnQueue(session.user.id, { now, endOfStudentDay, take: includeOwn ? ownTake : 0 })
      return NextResponse.json({
        cards: includeOwn ? interleaveCards<unknown>(siteRows, own.cards.map(ownCardAsReviewRow)) : siteRows,
        stats: {
          total: totalCards,
          due: dailyState.dueToday,
          new: dailyState.newToday,
          review: dailyState.reviewsToday,
          reviewsBeyondLimit: dailyState.reviewsBeyondLimit,
          newBeyondLimit: dailyState.newBeyondLimit,
          limits: dailyState.limits,
          dueLaterToday: dueLaterToday + (includeOwn ? own.dueLaterToday : 0),
          nextDueAt: includeOwn ? earlierDue(nextUpcoming?.nextReview, own.nextDueAt) : nextUpcoming?.nextReview ?? null,
          ownTotal: own.total,
          ownDue: own.due,
          ownIncluded: includeOwn,
        },
      })
    }

    // FILTERED (topic/course banners and topic drills): legacy semantics —
    // cards literally due now, no daily-limit composition (limits bound the
    // student's whole day, not one course's slice of it).
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
    const [dueCards, totalCards, dueCount, newCards, dueLaterToday, nextUpcoming, filteredTotal] = await Promise.all([
      prisma.flashcardProgress.findMany({
        where,
        include: cardInclude,
        orderBy: {
          nextReview: 'asc' // Oldest due cards first
        },
        take: BATCH_SIZE,
      }),
      prisma.flashcardProgress.count({
        where: {
          userId: session.user.id,
          context,
          ...yieldWhere,
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
      // Cards of THIS topic/course already in the student's deck. Zero means
      // "not unlocked yet" (vs. "all done for today"), so the session page can
      // state the unlock rule instead of a misleading "All Caught Up!".
      prisma.flashcardProgress.count({
        where: {
          userId: session.user.id,
          context,
          ...topicFilter,
        },
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
        nextDueAt: nextUpcoming?.nextReview ?? null,
        filteredTotal,
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
