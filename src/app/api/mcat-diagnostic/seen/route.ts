import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { reviewQuestionsFromResults, validateSeenKeysBody } from '@/lib/diagnostic-seen'

/**
 * Server-side memory of which MCAT diagnostic questions this student has been
 * served, so a retake on another device never repeats items.
 *
 * GET  -> { keys: string[] }  question ids recovered from every submitted
 *         attempt (`results.review.questions[].id`; the review screen already
 *         depends on that block, so it is present on all rows).
 * POST { keys: string[] } -> 202  keys served for a sitting that may be
 *         abandoned. Validated and accepted but NOT persisted: there is no
 *         per-user slot for served-but-unsubmitted keys without a schema
 *         change, and inventing one inside an unrelated Json column would be
 *         worse than the gap. Abandoned sittings stay covered by the
 *         browser's localStorage; a submitted sitting is covered by GET.
 */

const CATEGORY_PREFIX = 'mcat-full-diagnostic'
/** More attempts than any student will sit; bounds the rows scanned per call. */
const MAX_ATTEMPTS_SCANNED = 200

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const attempts = await prisma.diagnosticTest.findMany({
      where: { userId: session.user.id, category: { startsWith: CATEGORY_PREFIX } },
      orderBy: { createdAt: 'desc' },
      take: MAX_ATTEMPTS_SCANNED,
      select: { results: true },
    })

    const keys = new Set<string>()
    for (const attempt of attempts) {
      for (const q of reviewQuestionsFromResults(attempt.results)) {
        if (q.id) keys.add(q.id)
      }
    }

    return NextResponse.json({ keys: [...keys] }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (error) {
    console.error('MCAT diagnostic seen-keys error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }
    const parsed = validateSeenKeysBody(body)
    if ('error' in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }

    // Accepted, not stored (see header comment). Submitting the attempt is
    // what makes these keys durable server-side.
    return NextResponse.json({ accepted: parsed.keys.length, persisted: false }, { status: 202 })
  } catch (error) {
    console.error('MCAT diagnostic seen-keys record error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
