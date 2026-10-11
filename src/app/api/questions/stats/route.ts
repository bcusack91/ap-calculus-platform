import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { MAX_STAT_KEYS, MIN_RESPONSES, getAnswerStats, sharesForOptions } from '@/lib/answer-stats'

export const dynamic = 'force-dynamic'

/**
 * "How others answered" (src/lib/answer-stats.ts). Signed-in only; returns
 * counts and fractions, never who answered. Stats count each student's first
 * answer only and stay hidden below MIN_RESPONSES students.
 *
 * GET /api/questions/stats?keys=q:…,q:… (≤ 120)
 *   → { minResponses, stats: AnswerStat[] } — shares keyed by optionKey().
 *
 * POST /api/questions/stats { items: [{ questionKey, options: [text…] }] } (≤ 120)
 *   → { minResponses, items: [...] } in request order, shares ALIGNED to each
 *     item's options:
 *     { questionKey, responses, shares: number[], medianSeconds: number | null }
 *     or { questionKey, responses, insufficient: true }.
 */

const bodySchema = z.object({
  items: z
    .array(
      z.object({
        questionKey: z.string().max(40),
        options: z.array(z.string().max(5000)).max(12),
      }),
    )
    .min(1)
    .max(MAX_STAT_KEYS),
})

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const keys = (req.nextUrl.searchParams.get('keys') ?? '')
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean)
  if (!keys.length || keys.length > MAX_STAT_KEYS || keys.some((k) => k.length > 40)) {
    return NextResponse.json({ error: `Pass 1-${MAX_STAT_KEYS} question keys.` }, { status: 400 })
  }
  try {
    const stats = await getAnswerStats(keys)
    return NextResponse.json({ minResponses: MIN_RESPONSES, stats })
  } catch (err) {
    console.error('[GET /api/questions/stats]', err)
    return NextResponse.json({ error: 'Could not load answer stats' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  const { items } = parsed.data
  try {
    const stats = await getAnswerStats(items.map((i) => i.questionKey))
    const byKey = new Map(stats.map((s) => [s.key, s]))
    return NextResponse.json({
      minResponses: MIN_RESPONSES,
      items: items.map(({ questionKey, options }) => {
        const stat = byKey.get(questionKey)
        const shares = stat ? sharesForOptions(stat, options) : null
        if (!stat || !shares || 'insufficient' in stat) {
          return { questionKey, responses: stat?.responses ?? 0, insufficient: true as const }
        }
        return { questionKey, responses: stat.responses, shares, medianSeconds: stat.medianSeconds }
      }),
    })
  } catch (err) {
    console.error('[POST /api/questions/stats]', err)
    return NextResponse.json({ error: 'Could not load answer stats' }, { status: 500 })
  }
}
