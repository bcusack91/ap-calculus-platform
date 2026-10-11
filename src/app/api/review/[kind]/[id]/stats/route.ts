import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { isReviewKind, resolveAttempt } from '@/lib/question-resolver'
import { MIN_RESPONSES, getAnswerStats, sharesForOptions } from '@/lib/answer-stats'

export const dynamic = 'force-dynamic'

/**
 * GET /api/review/<kind>/<id>/stats?index=N — "how others answered" for one
 * ANSWERED question of the student's own attempt, for surfaces whose browser
 * copy has no question key (the question-bank tutor). The resolver only
 * rebuilds questions already graded, so nothing here can be read before
 * answering. Same item shape as POST /api/questions/stats:
 *   { minResponses, item: { questionKey, responses, shares, medianSeconds } | { questionKey, responses, insufficient: true } }
 */
export async function GET(req: NextRequest, { params }: { params: Promise<{ kind: string; id: string }> }) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { kind, id } = await params
  const index = Number(req.nextUrl.searchParams.get('index'))
  if (!isReviewKind(kind) || !Number.isInteger(index) || index < 0 || index > 1000) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  try {
    const attempt = await resolveAttempt(kind, id, userId)
    const item = attempt?.items.find((i) => i?.index === index) ?? null
    if (!item) return NextResponse.json({ error: 'Question not found' }, { status: 404 })
    const [stat] = await getAnswerStats([item.questionKey])
    const shares = stat ? sharesForOptions(stat, item.options) : null
    const out =
      !stat || !shares || 'insufficient' in stat
        ? { questionKey: item.questionKey, responses: stat?.responses ?? 0, insufficient: true as const }
        : { questionKey: item.questionKey, responses: stat.responses, shares, medianSeconds: stat.medianSeconds }
    return NextResponse.json({ minResponses: MIN_RESPONSES, item: out }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[GET /api/review/stats]', err)
    return NextResponse.json({ error: 'Could not load answer stats' }, { status: 500 })
  }
}
