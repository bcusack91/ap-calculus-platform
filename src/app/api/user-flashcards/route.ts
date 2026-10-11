import { NextRequest, NextResponse } from 'next/server'
import type { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { parseBody } from '@/lib/validations'
import { USER_CARD_CAP } from '@/lib/user-flashcard-ids'
import { serializeUserFlashcard, userFlashcardCreateSchema } from '@/lib/user-flashcards'

/**
 * Student-made flashcards — list + create. Owner-scoped: every query is
 * filtered by the signed-in user's id. Edit/delete live at
 * /api/user-flashcards/[id].
 *
 * GET  ?course=<slug>&q=<text>  → { cards, total, due, cap, courses }
 *      `total`/`due` are for the whole collection (not the filter);
 *      `courses` = per-course counts for the filter dropdown.
 * POST { front, back, hint?, courseSlug?, topicSlug?, origin? } → { card }
 *      409 once the student has USER_CARD_CAP cards.
 */
export async function GET(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const course = req.nextUrl.searchParams.get('course')?.trim() || null
    const q = req.nextUrl.searchParams.get('q')?.trim().slice(0, 200) || null
    const where: Prisma.UserFlashcardWhereInput = {
      userId,
      ...(course !== null ? { courseSlug: course === 'none' ? '' : course } : {}),
      ...(q
        ? {
            OR: [
              { front: { contains: q, mode: 'insensitive' } },
              { back: { contains: q, mode: 'insensitive' } },
            ],
          }
        : {}),
    }
    const now = new Date()
    const [cards, total, due, byCourse] = await Promise.all([
      prisma.userFlashcard.findMany({ where, orderBy: { createdAt: 'desc' }, take: USER_CARD_CAP }),
      prisma.userFlashcard.count({ where: { userId } }),
      prisma.userFlashcard.count({ where: { userId, nextReview: { lte: now } } }),
      prisma.userFlashcard.groupBy({ by: ['courseSlug'], where: { userId }, _count: { _all: true } }),
    ])
    return NextResponse.json({
      cards: cards.map(serializeUserFlashcard),
      total,
      due,
      cap: USER_CARD_CAP,
      courses: byCourse.map((c) => ({ slug: c.courseSlug, count: c._count._all })),
    })
  } catch (error) {
    console.error('[GET /api/user-flashcards]', error)
    return NextResponse.json({ error: 'Failed to load your flashcards' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
  const parsed = parseBody(userFlashcardCreateSchema, body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error }, { status: 400 })

  try {
    const count = await prisma.userFlashcard.count({ where: { userId } })
    if (count >= USER_CARD_CAP) {
      return NextResponse.json(
        { error: `You've reached the ${USER_CARD_CAP.toLocaleString()}-card limit. Delete some cards to make room.` },
        { status: 409 },
      )
    }
    const { front, back, hint, courseSlug, topicSlug, origin } = parsed.data
    const card = await prisma.userFlashcard.create({
      data: {
        userId,
        front,
        back,
        hint: hint ? hint : null,
        courseSlug: courseSlug ?? '',
        topicSlug: topicSlug ?? '',
        origin: origin ?? 'manual',
      },
    })
    return NextResponse.json({ card: serializeUserFlashcard(card) }, { status: 201 })
  } catch (error) {
    console.error('[POST /api/user-flashcards]', error)
    return NextResponse.json({ error: 'Failed to save the flashcard' }, { status: 500 })
  }
}
