import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

/**
 * GET  /api/teacher/flashcard-sets        — list the teacher's own sets
 * POST /api/teacher/flashcard-sets        — create a set with cards (manual / import / AI)
 */

const MAX_CARDS = 500

export async function GET() {
  const gate = await requireTeacher()
  if ('error' in gate && gate.error) return gate.error

  const sets = await prisma.flashcardSet.findMany({
    where: { teacherId: gate.user!.id },
    orderBy: { updatedAt: 'desc' },
    include: {
      _count: { select: { cards: true } },
      classroom: { select: { id: true, name: true } },
    },
  })
  return NextResponse.json({ sets })
}

export async function POST(req: NextRequest) {
  const gate = await requireTeacher()
  if ('error' in gate && gate.error) return gate.error
  const userId = gate.user!.id

  const body = await req.json().catch(() => ({}))
  const { title, subject, topicSlug, classroomId, source, cards } = body || {}

  if (!title || typeof title !== 'string' || !title.trim()) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  }
  if (!Array.isArray(cards) || cards.length === 0) {
    return NextResponse.json({ error: 'At least one card is required' }, { status: 400 })
  }

  const cleanCards = (cards as Array<{ front?: unknown; back?: unknown }>)
    .map((c) => ({
      front: typeof c?.front === 'string' ? c.front.trim() : '',
      back: typeof c?.back === 'string' ? c.back.trim() : '',
    }))
    .filter((c) => c.front && c.back)
    .slice(0, MAX_CARDS)

  if (cleanCards.length === 0) {
    return NextResponse.json({ error: 'No valid cards (each needs a front and back)' }, { status: 400 })
  }

  // If scoping the set to a classroom, the teacher must own it.
  if (classroomId) {
    const owned = await prisma.classroom.findFirst({ where: { id: classroomId, teacherId: userId } })
    if (!owned) return NextResponse.json({ error: 'Not your classroom' }, { status: 403 })
  }

  const allowedSources = ['MANUAL', 'IMPORT', 'AI']
  const set = await prisma.flashcardSet.create({
    data: {
      teacherId: userId,
      classroomId: classroomId || null,
      title: title.trim().slice(0, 200),
      subject: typeof subject === 'string' && subject.trim() ? subject.trim().slice(0, 120) : null,
      topicSlug: typeof topicSlug === 'string' && topicSlug.trim() ? topicSlug.trim() : null,
      source: allowedSources.includes(source) ? source : 'MANUAL',
      cards: {
        create: cleanCards.map((c, i) => ({
          front: c.front.slice(0, 500),
          back: c.back.slice(0, 1000),
          order: i,
        })),
      },
    },
    include: { _count: { select: { cards: true } } },
  })

  return NextResponse.json({ set }, { status: 201 })
}
