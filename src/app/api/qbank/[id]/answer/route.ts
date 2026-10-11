import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { answerQbankItem } from '@/lib/qbank-server'

export const dynamic = 'force-dynamic'

const bodySchema = z.object({
  index: z.number().int().min(0).max(200),
  /** null = "I don't know". */
  chosenIndex: z.number().int().min(0).max(10).nullable().optional(),
  /** A typed answer, for grid-ins. */
  chosenText: z.string().trim().max(20).nullable().optional(),
  seconds: z.number().min(0).max(24 * 60 * 60).optional(),
  flagged: z.boolean().optional(),
})

/**
 * POST /api/qbank/<id>/answer {index, chosenIndex | chosenText, seconds,
 * flagged} — tutor mode: grade one question on the server, store and log the
 * answer, and return the key and explanation. Re-posting an answered
 * question returns the stored verdict and logs nothing.
 */
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  const { id } = await params
  try {
    const r = await answerQbankItem(userId, id, parsed.data)
    if (!r.ok) return NextResponse.json({ error: r.error }, { status: r.status })
    return NextResponse.json({ ...r.value.feedback, completed: r.value.completed, ...(r.value.view ? { session: r.value.view } : {}) }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[POST /api/qbank/answer]', err)
    return NextResponse.json({ error: 'Could not check that answer' }, { status: 500 })
  }
}
