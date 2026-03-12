import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

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

    // Find flashcards that are due or have never been reviewed
    const now = new Date()

    // Get user's existing progress
    const existingProgress = await prisma.flashcardProgress.findMany({
      where: { userId: session.user.id },
      select: { flashcardId: true, nextReview: true, repetitions: true, easeFactor: true, interval: true },
    })

    const progressMap = new Map(existingProgress.map((p) => [p.flashcardId, p]))

    // Get flashcards (optionally filtered by topic)
    const flashcards = await prisma.flashcard.findMany({
      where: topicSlug
        ? { topic: { slug: topicSlug } }
        : undefined,
      include: {
        topic: { select: { slug: true, title: true } },
      },
      take: 200, // Fetch pool
    })

    // Separate into due cards and new cards
    const dueCards: typeof flashcards = []
    const newCards: typeof flashcards = []

    for (const fc of flashcards) {
      const progress = progressMap.get(fc.id)
      if (!progress) {
        newCards.push(fc)
      } else if (progress.nextReview <= now) {
        dueCards.push(fc)
      }
    }

    // Prioritize: due cards first (sorted by overdue-ness), then new cards
    dueCards.sort((a, b) => {
      const pa = progressMap.get(a.id)!
      const pb = progressMap.get(b.id)!
      return pa.nextReview.getTime() - pb.nextReview.getTime()
    })

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
        totalInDeck: flashcards.length,
        sessionSize: sessionCards.length,
      },
    })
  } catch (error) {
    console.error('[GET /api/flashcards/session]', error)
    return NextResponse.json({ error: 'Failed to load session' }, { status: 500 })
  }
}
