import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { apSeenKeysForQuestion, reviewQuestionsFromResults, validateSeenKeysBody } from '@/lib/diagnostic-seen'

/**
 * Server-side memory of which ASVAB diagnostic questions this student has been
 * served (same contract as /api/sat-diagnostic/seen and the AP v2 routes):
 * GET  -> { keys } for every submitted attempt (category prefix
 *         'asvab-diagnostic'): each served question's id AND its text
 *         fingerprint, recomputed from `results.review.questions`.
 * POST { keys } -> 202, validated and accepted but not persisted (no schema
 *         slot for an abandoned sitting; the browser's copy covers it).
 * The page reads/writes it through loadSeenKeys/recordSeenKeys('asvab').
 */
const CATEGORY_PREFIX = 'asvab-diagnostic'
const MAX_ATTEMPTS_SCANNED = 200

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const attempts = await prisma.diagnosticTest.findMany({
      where: { userId: session.user.id, category: { startsWith: CATEGORY_PREFIX } },
      orderBy: { createdAt: 'desc' },
      take: MAX_ATTEMPTS_SCANNED,
      select: { results: true },
    })
    const keys = new Set<string>()
    for (const a of attempts) {
      for (const q of reviewQuestionsFromResults(a.results)) {
        if (typeof q.question === 'string') {
          for (const k of apSeenKeysForQuestion({ id: q.id, question: q.question, passageBody: q.passageBody })) keys.add(k)
        } else if (q.id) {
          keys.add(q.id)
        }
      }
    }
    return NextResponse.json({ keys: [...keys] }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (error) {
    console.error('ASVAB diagnostic seen-keys error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }
    const parsed = validateSeenKeysBody(body)
    if ('error' in parsed) return NextResponse.json({ error: parsed.error }, { status: 400 })
    return NextResponse.json({ accepted: parsed.keys.length, persisted: false }, { status: 202 })
  } catch (error) {
    console.error('ASVAB diagnostic seen-keys record error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
