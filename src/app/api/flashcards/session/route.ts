import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getActiveStudyContext } from '@/lib/study-context'

/**
 * GET /api/flashcards/session?topicSlug=xxx&limit=20
 * Returns a batch of due/new flashcards for a study session
 */
export async function GET(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const topicSlug = req.nextUrl.searchParams.get('topicSlug')
    const limit = Math.min(Number(req.nextUrl.searchParams.get('limit')) || 20, 50)

    const now = new Date()
    const userId = session.user.id
    // Sessions are scoped to the active study mode: a card mastered in the
    // personal deck is NEW again inside a fresh class/course mode.
    const context = await getActiveStudyContext(userId)

    // UNSCOPED (the dashboard widget): serve only the user's own deck — cards
    // already unlocked into the active study context. The old query served
    // `progress: { none: ... }` cards from the ENTIRE platform (any course,
    // never unlocked), which both bypassed the flashcard-unlock rule and
    // polluted the deck with unrelated courses' cards. Newly unlocked cards
    // carry progress rows with reviewCount 0, so "new" cards still appear.
    if (!topicSlug) {
      // Student's timezone offset (JS getTimezoneOffset convention) for
      // computing "cards returning later today" in their local day.
      const tzOffsetParam = Number(req.nextUrl.searchParams.get('tzOffset'))
      const tzOffsetMs = Number.isFinite(tzOffsetParam) ? tzOffsetParam * 60000 : 0
      const localNow = new Date(now.getTime() - tzOffsetMs)
      const localDayEnd = new Date(localNow)
      localDayEnd.setUTCHours(23, 59, 59, 999)
      const endOfStudentDay = new Date(localDayEnd.getTime() + tzOffsetMs)

      const dueWhere = { userId, context, nextReview: { lte: now } }
      const [rows, dueCount, newCount, dueLaterToday, nextUpcoming] = await Promise.all([
        prisma.flashcardProgress.findMany({
          where: dueWhere,
          include: {
            flashcard: { include: { topic: { select: { slug: true, title: true } } } },
          },
          orderBy: { nextReview: 'asc' },
          take: limit,
        }),
        prisma.flashcardProgress.count({ where: dueWhere }),
        prisma.flashcardProgress.count({ where: { ...dueWhere, reviewCount: 0 } }),
        prisma.flashcardProgress.count({
          where: { userId, context, nextReview: { gt: now, lte: endOfStudentDay } },
        }),
        prisma.flashcardProgress.findFirst({
          where: { userId, context, nextReview: { gt: now } },
          orderBy: { nextReview: 'asc' },
          select: { nextReview: true },
        }),
      ])

      return NextResponse.json({
        cards: rows.map((r) => ({
          id: r.flashcard.id,
          front: r.flashcard.front,
          back: r.flashcard.back,
          topicSlug: r.flashcard.topic?.slug,
          topicTitle: r.flashcard.topic?.title,
          // Never-reviewed unlocks present as "new" (null progress shows the
          // New badge; the SRS preview defaults match a fresh row anyway).
          progress: r.reviewCount === 0
            ? null
            : { flashcardId: r.flashcardId, nextReview: r.nextReview, repetitions: r.repetitions, easeFactor: r.easeFactor, interval: r.interval, isMinuteInterval: r.isMinuteInterval },
        })),
        stats: {
          dueCount,
          newCount,
          totalInDeck: dueCount,
          sessionSize: rows.length,
          dueLaterToday,
          nextDueAt: nextUpcoming?.nextReview ?? null,
        },
      })
    }

    // TOPIC-SCOPED: deliberate practice of one topic — due cards first, then
    // cards never seen in this context (browse-style access to that topic).
    const topicFilter = { topic: { slug: topicSlug } }

    // Query due cards and new cards directly from DB instead of fetching all and filtering in JS
    const [dueCards, newCards] = await Promise.all([
      // Cards with existing progress that are due for review
      prisma.flashcard.findMany({
        where: {
          ...topicFilter,
          progress: {
            some: { userId, context, nextReview: { lte: now } },
          },
        },
        include: {
          topic: { select: { slug: true, title: true } },
          progress: {
            where: { userId, context },
            select: { flashcardId: true, nextReview: true, repetitions: true, easeFactor: true, interval: true, isMinuteInterval: true },
            take: 1,
          },
        },
        take: limit,
      }),
      // Cards with no progress record for this user (never seen)
      prisma.flashcard.findMany({
        where: {
          ...topicFilter,
          progress: {
            none: { userId, context },
          },
        },
        include: {
          topic: { select: { slug: true, title: true } },
        },
        take: limit,
      }),
    ])

    // Build progress map from due cards' included progress
    const progressMap = new Map(
      dueCards
        .filter((fc) => fc.progress[0])
        .map((fc) => [fc.progress[0].flashcardId, fc.progress[0]])
    )

    const sessionCards = [...dueCards, ...newCards].slice(0, limit)

    return NextResponse.json({
      cards: sessionCards.map((fc) => ({
        id: fc.id,
        front: fc.front,
        back: fc.back,
        topicSlug: fc.topic?.slug,
        topicTitle: fc.topic?.title,
        progress: progressMap.get(fc.id) ?? null,
      })),
      stats: {
        dueCount: dueCards.length,
        newCount: newCards.length,
        totalInDeck: dueCards.length + newCards.length,
        sessionSize: sessionCards.length,
      },
    })
  } catch (error) {
    console.error('[GET /api/flashcards/session]', error)
    return NextResponse.json({ error: 'Failed to load session' }, { status: 500 })
  }
}
