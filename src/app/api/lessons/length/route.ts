import { NextRequest, NextResponse } from 'next/server'
import { getInteractiveTopicConfig } from '@/data/interactive-lessons/registry'

/**
 * GET /api/lessons/length?slugs=a,b,c → { parts: { a: 7, b: 5 } }
 *
 * Part counts of interactive lessons, for a "~N min" estimate next to a
 * topic link (ApDiagnosticResults). Slugs with no interactive lesson are left
 * out. Public and static data, so no session is needed.
 */
const MAX_SLUGS = 20

export async function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get('slugs') ?? ''
  const slugs = raw
    .split(',')
    .map((s) => s.trim())
    .filter((s) => /^[a-z0-9-]{1,120}$/.test(s))
    .slice(0, MAX_SLUGS)
  const parts: Record<string, number> = {}
  for (const slug of slugs) {
    const n = getInteractiveTopicConfig(slug)?.parts?.length ?? 0
    if (n > 0) parts[slug] = n
  }
  return NextResponse.json({ parts }, { headers: { 'Cache-Control': 'public, max-age=3600' } })
}
