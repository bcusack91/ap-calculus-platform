import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { getCardCheckResult, getCardCheckState, startCardCheck, submitCardCheck } from '@/lib/flashcard-check'

/**
 * The daily card check (src/lib/flashcard-check.ts).
 *
 * GET  /api/flashcards/check              — is a check required / can it be taken / the last result
 * GET  /api/flashcards/check?result=<id>  — a finished check, graded
 * POST { action: 'start' }                — open the check; questions come without their keys
 * POST { action: 'submit', attemptId, answers, tzOffset } — grade it
 */
export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const resultId = req.nextUrl.searchParams.get('result')
    if (resultId) {
      const result = await getCardCheckResult(session.user.id, resultId)
      return result ? NextResponse.json({ result }) : NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json(await getCardCheckState(session.user.id))
  } catch (error) {
    console.error('card check state failed:', error)
    return NextResponse.json({ error: 'Failed to load the card check' }, { status: 500 })
  }
}

const bodySchema = z.discriminatedUnion('action', [
  z.object({ action: z.literal('start') }),
  z.object({
    action: z.literal('submit'),
    attemptId: z.string().min(1).max(60),
    answers: z.array(z.number().int().min(0).max(3).nullable()).max(30),
    tzOffset: z.number().min(-840).max(840).optional(),
  }),
])

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  try {
    if (parsed.data.action === 'start') {
      const check = await startCardCheck(session.user.id)
      if (!check) return NextResponse.json({ error: 'The card check is not available yet', state: await getCardCheckState(session.user.id) }, { status: 409 })
      return NextResponse.json({ check })
    }
    const result = await submitCardCheck(session.user.id, parsed.data.attemptId, parsed.data.answers, parsed.data.tzOffset)
    return result ? NextResponse.json({ result }) : NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('card check failed:', error)
    return NextResponse.json({ error: 'Something went wrong with the card check' }, { status: 500 })
  }
}
