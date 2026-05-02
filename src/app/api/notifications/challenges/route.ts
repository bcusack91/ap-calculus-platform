import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/notifications/challenges
 * Lightweight notification feed derived from AsyncChallenge.
 * Returns:
 *   incoming  — challenges sent TO the current user that they haven't played yet
 *   completed — challenges the current user SENT that have just finished (recipient played)
 *
 * "Seen" state is tracked client-side via localStorage timestamp; the bell shows
 * a dot when any item's createdAt/completedAt is newer than the saved timestamp.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = session.user.id

    const [incoming, completedSent] = await Promise.all([
      // Open challenges where the current user is the (designated) recipient and hasn't played
      prisma.asyncChallenge.findMany({
        where: {
          recipientId: userId,
          status: { in: ['WAITING_FOR_OPPONENT', 'RECIPIENT_PLAYING'] },
        },
        select: {
          id: true,
          topicSlug: true,
          status: true,
          createdAt: true,
          challenger: { select: { id: true, name: true, image: true, avatarData: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 20,
      }),
      // Challenges the current user sent that just finished — show win/loss
      prisma.asyncChallenge.findMany({
        where: { challengerId: userId, status: 'COMPLETED' },
        select: {
          id: true,
          topicSlug: true,
          status: true,
          createdAt: true,
          completedAt: true,
          challengerScore: true,
          recipientScore: true,
          questionCount: true,
          winnerId: true,
          challengerId: true,
          recipient: { select: { id: true, name: true, image: true, avatarData: true } },
        },
        orderBy: { completedAt: 'desc' },
        take: 20,
      }),
    ])

    const incomingItems = incoming.map(c => ({
      kind: 'incoming' as const,
      id: c.id,
      topicSlug: c.topicSlug,
      createdAt: c.createdAt,
      timestamp: c.createdAt,
      from: c.challenger,
    }))

    const completedItems = completedSent.map(c => {
      let outcome: 'win' | 'loss' | 'tie'
      if (c.winnerId === c.challengerId) outcome = 'win'
      else if (c.winnerId === null) outcome = 'tie'
      else outcome = 'loss'
      return {
        kind: 'completed' as const,
        id: c.id,
        topicSlug: c.topicSlug,
        createdAt: c.createdAt,
        completedAt: c.completedAt,
        timestamp: c.completedAt ?? c.createdAt,
        opponent: c.recipient,
        myScore: c.challengerScore,
        opponentScore: c.recipientScore,
        questionCount: c.questionCount,
        outcome,
      }
    })

    return NextResponse.json({
      incoming: incomingItems,
      completed: completedItems,
      latestTimestamp:
        [
          ...incomingItems.map(i => new Date(i.timestamp).getTime()),
          ...completedItems.map(i => new Date(i.timestamp).getTime()),
        ].sort((a, b) => b - a)[0] ?? 0,
    }, {
      headers: { 'Cache-Control': 'private, no-store' },
    })
  } catch (error) {
    console.error('[GET /api/notifications/challenges]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
