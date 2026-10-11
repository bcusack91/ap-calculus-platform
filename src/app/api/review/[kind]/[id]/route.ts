import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { isReviewKind, resolveAttempt } from '@/lib/question-resolver'

export const dynamic = 'force-dynamic'

/**
 * GET /api/review/<kind>/<id> — one of the student's own attempts rebuilt for
 * review: every question with the option they picked, the answer, the
 * explanation, time and flags. kind = exit | diagnostic | unit-test |
 * sat-practice | mcat-fl | mcat-practice | qbank.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ kind: string; id: string }> }) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { kind, id } = await params
  if (!isReviewKind(kind)) return NextResponse.json({ error: 'Unknown attempt type' }, { status: 400 })
  const attempt = await resolveAttempt(kind, id, userId)
  if (!attempt) return NextResponse.json({ error: 'Attempt not found' }, { status: 404 })
  return NextResponse.json({ attempt }, { headers: { 'Cache-Control': 'private, no-store' } })
}
