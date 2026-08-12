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

    const topicFilter = topicSlug ? { topic: { slug: topicSlug } } : {}

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
            select: { flashcardId: true, nextReview: true, repetitions: true, easeFactor: true, interval: true },
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
