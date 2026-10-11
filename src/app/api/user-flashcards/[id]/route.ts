import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { parseBody } from '@/lib/validations'
import { rawOwnCardId } from '@/lib/user-flashcard-ids'
import { serializeUserFlashcard, userFlashcardUpdateSchema } from '@/lib/user-flashcards'

/**
 * Edit / delete one student-made flashcard. Owner-scoped: a card that isn't
 * the signed-in user's is a 404, never a 403, so ids can't be probed.
 * Accepts the raw id or the namespaced 'u:<id>' form the review queue uses.
 * Editing the text keeps the card's review schedule.
 */
type Params = { params: Promise<{ id: string }> }

async function resolveId(params: Params['params']): Promise<string> {
  const { id } = await params
  const decoded = decodeURIComponent(id)
  return rawOwnCardId(decoded) ?? decoded
}

export async function PUT(req: NextRequest, { params }: Params) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const id = await resolveId(params)

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
  const parsed = parseBody(userFlashcardUpdateSchema, body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error }, { status: 400 })

  try {
    const existing = await prisma.userFlashcard.findFirst({ where: { id, userId }, select: { id: true } })
    if (!existing) return NextResponse.json({ error: 'Flashcard not found' }, { status: 404 })
    const { front, back, hint, courseSlug, topicSlug } = parsed.data
    const card = await prisma.userFlashcard.update({
      where: { id: existing.id },
      data: {
        ...(front !== undefined ? { front } : {}),
        ...(back !== undefined ? { back } : {}),
        ...(hint !== undefined ? { hint: hint ? hint : null } : {}),
        ...(courseSlug !== undefined ? { courseSlug } : {}),
        ...(topicSlug !== undefined ? { topicSlug } : {}),
      },
    })
    return NextResponse.json({ card: serializeUserFlashcard(card) })
  } catch (error) {
    console.error('[PUT /api/user-flashcards/:id]', error)
    return NextResponse.json({ error: 'Failed to update the flashcard' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const id = await resolveId(params)

  try {
    const { count } = await prisma.userFlashcard.deleteMany({ where: { id, userId } })
    if (count === 0) return NextResponse.json({ error: 'Flashcard not found' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[DELETE /api/user-flashcards/:id]', error)
    return NextResponse.json({ error: 'Failed to delete the flashcard' }, { status: 500 })
  }
}
