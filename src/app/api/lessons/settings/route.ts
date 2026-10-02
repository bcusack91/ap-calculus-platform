import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * Interactive-lesson settings (owner request 2026-10-02).
 *
 * GET   /api/lessons/settings → { includeLowYield }
 * PATCH /api/lessons/settings { includeLowYield: boolean } → { includeLowYield }
 *
 * includeLowYield: show the passages and quiz questions tagged low-yield
 * (src/lib/lesson-yield.ts). Off by default, like flashcards' low tier, and
 * independent of the flashcard checkbox.
 */
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { lessonIncludeLowYield: true },
  })
  if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ includeLowYield: user.lessonIncludeLowYield })
}

export async function PATCH(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json().catch(() => null)
  if (typeof body?.includeLowYield !== 'boolean') {
    return NextResponse.json({ error: 'includeLowYield must be true or false' }, { status: 400 })
  }
  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: { lessonIncludeLowYield: body.includeLowYield },
    select: { lessonIncludeLowYield: true },
  })
  return NextResponse.json({ includeLowYield: user.lessonIncludeLowYield })
}
