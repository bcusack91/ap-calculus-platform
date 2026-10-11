import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { saveQbankProgress } from '@/lib/qbank-server'

export const dynamic = 'force-dynamic'

const bodySchema = z.object({
  answers: z.array(z.unknown()).max(200).optional(),
  flags: z.array(z.unknown()).max(200).optional(),
  timings: z.array(z.unknown()).max(200).optional(),
})

/**
 * POST /api/qbank/<id>/progress {answers[], flags[], timings[]} — timed mode:
 * save where the student is so the set can be resumed. Nothing is graded.
 */
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  const { id } = await params
  try {
    const r = await saveQbankProgress(userId, id, parsed.data)
    if (!r.ok) return NextResponse.json({ error: r.error }, { status: r.status })
    return NextResponse.json(r.value, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[POST /api/qbank/progress]', err)
    return NextResponse.json({ error: 'Could not save progress' }, { status: 500 })
  }
}
