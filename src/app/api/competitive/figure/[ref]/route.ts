import { NextResponse } from 'next/server'
import { resolveFigureRef } from '@/lib/competitive-figures'

/**
 * GET /api/competitive/figure/<ref> — the picture for a competitive question
 * (src/lib/competitive-figures.ts). Public and identical for every viewer: it
 * holds the stem's drawing only, never the key, so it is cached at the edge.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ ref: string }> }) {
  const { ref } = await params
  const fig = await resolveFigureRef(ref)
  if (!fig) return NextResponse.json({ error: 'Figure not found' }, { status: 404 })
  return NextResponse.json(fig, {
    headers: { 'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
  })
}
