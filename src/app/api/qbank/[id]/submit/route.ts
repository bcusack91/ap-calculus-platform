import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { submitQbankSession } from '@/lib/qbank-server'

export const dynamic = 'force-dynamic'

const bodySchema = z.object({
  answers: z.array(z.unknown()).max(200).optional(),
  flags: z.array(z.unknown()).max(200).optional(),
  timings: z.array(z.unknown()).max(200).optional(),
})

/**
 * POST /api/qbank/<id>/submit {answers[], flags[], timings[]} — finish a set.
 * Timed: grade every question on the server, store and log them (unanswered
 * = skipped). Tutor: end early (answers were logged as given; the body is
 * ignored). Returns the set with keys, explanations and the score; the set's
 * id is the attempt id for /review/qbank/<id>. Idempotent.
 */
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await req.json().catch(() => ({})))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  const { id } = await params
  try {
    const r = await submitQbankSession(userId, id, parsed.data)
    if (!r.ok) return NextResponse.json({ error: r.error }, { status: r.status })
    return NextResponse.json({ session: r.value, attemptId: r.value.id, score: r.value.result }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[POST /api/qbank/submit]', err)
    return NextResponse.json({ error: 'Could not submit this set' }, { status: 500 })
  }
}
