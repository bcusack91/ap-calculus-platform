import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/flashcard-sets/[id] — public read of a flashcard set for the shareable
 * study viewer. Flashcard sets are study material a teacher chooses to share with
 * students; the cuid id is the unguessable share token. Only the set's
 * title/subject and the cards (front/back) are exposed — no teacher identity,
 * classroom, or ownership data.
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const set = await prisma.flashcardSet.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      subject: true,
      topicSlug: true,
      cards: { orderBy: { order: 'asc' }, select: { id: true, front: true, back: true } },
    },
  })
  if (!set) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ set })
}
