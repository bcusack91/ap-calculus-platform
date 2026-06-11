import { NextRequest, NextResponse } from 'next/server'
import { SAT_PASSAGES } from '@/data/sat-passages'

/**
 * GET /api/sat-passages?id=<passageId>
 *
 * Serves a single passage from the static bank so the /sat-reading-practice
 * client never has to ship (or chunk-load) the full ~83 KB data module — an
 * average passage payload is ~1.5 KB. Chosen over a client-side dynamic
 * `import('@/data/sat-passages')` because that pattern still downloads the
 * entire bank the first time any passage is opened.
 *
 * The data is fully static, so responses are aggressively cacheable. Reading
 * the query string makes this handler dynamic per-request, so the caching is
 * done via Cache-Control (CDN + browser) rather than route-segment ISR.
 */
export const revalidate = 86400

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'Missing required "id" query parameter' }, { status: 400 })
  }

  const passage = SAT_PASSAGES.find((p) => p.id === id)
  if (!passage) {
    return NextResponse.json({ error: 'Passage not found' }, { status: 404 })
  }

  return NextResponse.json({ passage }, { headers: CACHE_HEADERS })
}
