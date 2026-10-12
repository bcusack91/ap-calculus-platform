import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { randomUUID } from 'crypto'
import { auth } from '@/lib/auth'
import { resolveItem, type ResolvedAttempt } from '@/lib/question-resolver'
import { activeMistakesFor, filterMistakes, isMistakeCourse, type MistakeCourse } from '@/lib/mistakes-server'

export const dynamic = 'force-dynamic'

const MAX_ITEMS = 20

const bodySchema = z.object({
  course: z.string(),
  limit: z.number().int().min(1).max(MAX_ITEMS).optional(),
  source: z.string().max(40).optional(),
  topic: z.string().max(200).optional(),
  section: z.string().max(200).optional(),
  from: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  to: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
})

/**
 * POST /api/mistakes/session {course, limit?, source?, topic?, section?} — a
 * re-quiz of the student's active mistakes: up to 20 questions rebuilt from
 * the attempts they were missed in. Answer keys and explanations are NOT
 * sent; /api/mistakes/answer grades each one.
 */
export async function POST(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await req.json().catch(() => null))
  if (!parsed.success || !isMistakeCourse(parsed.data.course)) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  const { course, limit = MAX_ITEMS, source, topic, section, from, to } = parsed.data
  try {
    const mistakes = filterMistakes(await activeMistakesFor(userId, course as MistakeCourse), {
      source, topic, section,
      from: from ? new Date(`${from}T00:00:00Z`) : undefined,
      to: to ? new Date(`${to}T23:59:59.999Z`) : undefined,
    })
    const cache = new Map<string, Promise<ResolvedAttempt | null>>()
    const items: unknown[] = []
    let unavailable = 0
    for (const m of mistakes) {
      if (items.length >= limit) break
      const item = await resolveItem(m.origin, userId, cache)
      if (!item) {
        unavailable++
        continue
      }
      items.push({
        position: items.length,
        questionKey: m.questionKey,
        origin: m.origin,
        question: item.question,
        options: item.options,
        passage: item.passage ?? null,
        /** A typed-answer question: the student types a value instead of picking. */
        typed: !!item.gridIn,
        topicSlug: m.topicSlug,
        discipline: m.discipline,
        correctSince: m.correctSince,
      })
    }
    return NextResponse.json({ sessionId: randomUUID(), items, unavailable }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[POST /api/mistakes/session]', err)
    return NextResponse.json({ error: 'Could not build the re-quiz' }, { status: 500 })
  }
}
