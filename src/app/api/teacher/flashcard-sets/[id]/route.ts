import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

/**
 * GET    /api/teacher/flashcard-sets/[id] — a set (owner only), with cards
 * DELETE /api/teacher/flashcard-sets/[id] — delete a set (cards cascade)
 */

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const gate = await requireTeacher()
  if ('error' in gate && gate.error) return gate.error
  const { id } = await params

  const set = await prisma.flashcardSet.findFirst({
    where: { id, teacherId: gate.user!.id },
    include: {
      cards: { orderBy: { order: 'asc' } },
      classroom: { select: { id: true, name: true } },
    },
  })
  if (!set) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ set })
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const gate = await requireTeacher()
  if ('error' in gate && gate.error) return gate.error
  const { id } = await params

  const owned = await prisma.flashcardSet.findFirst({
    where: { id, teacherId: gate.user!.id },
    select: { id: true },
  })
  if (!owned) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  await prisma.flashcardSet.delete({ where: { id } }) // cards cascade
  return NextResponse.json({ success: true })
}
