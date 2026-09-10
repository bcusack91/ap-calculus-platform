import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

/**
 * POST /api/teacher/flashcard-sets/from-topic — { topicSlug }
 *
 * Materialize a teacher-owned FlashcardSet from a platform topic deck (the
 * seeded Flashcard rows attached to a Topic), so the ~5,000+ platform cards
 * are assignable as FLASHCARD_REVIEW without teachers rebuilding them. The
 * result is a normal set: assignment POST/PUT ownership checks, the public
 * /flashcard-sets/[id] viewer, and the student submit flow all work unchanged.
 *
 * COPY, not reference: FlashcardSetCard stores its own front/back rows (the
 * AI-generation path saves copies the same way), so the topic's cards are
 * copied in. If the platform deck gains/changes cards later the materialized
 * set is deliberately left as-is — a teacher's assigned material shouldn't
 * shift under an open assignment. Note: Flashcard.hint has no counterpart on
 * FlashcardSetCard, so hints are not carried over (same as every other set).
 *
 * DEDUPE: one set per (teacher, topic) — an existing set with this teacherId +
 * topicSlug + source 'PLATFORM' is returned instead of creating a duplicate,
 * so re-assigning the same deck (or retrying a failed assignment submit)
 * reuses it. There is no unique constraint backing this (schema untouched), so
 * a pathological concurrent double-click could create two sets — harmless, the
 * assignment references whichever id it got back.
 */

// Same ceiling as POST /api/teacher/flashcard-sets — the set viewer and
// review flow are built for sets of at most this size.
const MAX_CARDS = 500

export async function POST(req: NextRequest) {
  const gate = await requireTeacher()
  if ('error' in gate && gate.error) return gate.error
  const userId = gate.user!.id

  try {
    const body = await req.json().catch(() => ({}))
    const topicSlug = typeof body?.topicSlug === 'string' ? body.topicSlug.trim() : ''
    if (!topicSlug) {
      return NextResponse.json({ error: 'A topicSlug is required' }, { status: 400 })
    }

    // Already materialized for this teacher? Return it (idempotent).
    const existing = await prisma.flashcardSet.findFirst({
      where: { teacherId: userId, topicSlug, source: 'PLATFORM' },
      include: { _count: { select: { cards: true } } },
    })
    if (existing) {
      return NextResponse.json({ set: existing, existed: true })
    }

    const topic = await prisma.topic.findUnique({
      where: { slug: topicSlug },
      select: {
        slug: true,
        title: true,
        category: { select: { course: { select: { name: true } } } },
        flashcards: {
          select: { front: true, back: true },
          // Deck order: lesson-part sequence first (nulls trail), then
          // creation order — the same reading order the topic deck was
          // authored in.
          orderBy: [{ lessonPart: { sort: 'asc', nulls: 'last' } }, { createdAt: 'asc' }],
          take: MAX_CARDS,
        },
      },
    })
    if (!topic) {
      return NextResponse.json({ error: 'Topic not found' }, { status: 404 })
    }
    if (topic.flashcards.length === 0) {
      return NextResponse.json({ error: 'This topic has no flashcards to assign' }, { status: 400 })
    }

    const set = await prisma.flashcardSet.create({
      data: {
        teacherId: userId,
        title: topic.title.slice(0, 200),
        subject: topic.category.course.name.slice(0, 120),
        topicSlug: topic.slug,
        // 'PLATFORM' marks a materialized platform deck — it is the dedupe key
        // above and lets the teacher dashboard distinguish these from
        // MANUAL/IMPORT/AI sets.
        source: 'PLATFORM',
        cards: {
          create: topic.flashcards.map((c, i) => ({
            front: c.front.slice(0, 500),
            back: c.back.slice(0, 1000),
            order: i,
          })),
        },
      },
      include: { _count: { select: { cards: true } } },
    })

    return NextResponse.json({ set, existed: false }, { status: 201 })
  } catch (error) {
    console.error('[POST /api/teacher/flashcard-sets/from-topic]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
