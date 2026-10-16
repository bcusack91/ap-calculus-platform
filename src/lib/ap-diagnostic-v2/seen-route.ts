import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { apSeenKeysForQuestion, reviewQuestionsFromResults, validateSeenKeysBody } from '@/lib/diagnostic-seen'
import { AP_DIAG_V2_BLUEPRINTS } from './blueprints'
import type { ApDiagV2Course } from './types'

/**
 * GET/POST handlers for `/api/<course>-diagnostic/seen` on an AP diagnostic
 * v2 course — the same contract as the SAT route:
 *
 * GET  -> { keys } for every submitted v2 attempt (category
 *         `<prefix>-v2`): each served question's id AND its text fingerprint
 *         (stimulus text included), recomputed from `results.review.questions`
 *         exactly as the page records them locally. v1 attempts drew from the
 *         exit pools, which the v2 bank is disjoint from, so they are skipped.
 * POST { keys } -> 202, validated and accepted but not persisted (no schema
 *         slot for an abandoned sitting; the browser's copy covers it).
 */
const MAX_ATTEMPTS_SCANNED = 200

export function apDiagnosticSeenHandlers(course: ApDiagV2Course) {
  const category = `${AP_DIAG_V2_BLUEPRINTS[course].categoryPrefix}-v2`

  async function GET() {
    try {
      const session = await auth()
      if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      const attempts = await prisma.diagnosticTest.findMany({
        where: { userId: session.user.id, category },
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
      console.error(`${course} diagnostic seen-keys error:`, error)
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
  }

  async function POST(req: Request) {
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
      console.error(`${course} diagnostic seen-keys record error:`, error)
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
  }

  return { GET, POST }
}
