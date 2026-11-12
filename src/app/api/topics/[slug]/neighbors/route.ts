/**
 * GET /api/topics/<slug>/neighbors — the topic's course and the previous /
 * next topic in that course's study order (src/lib/topic-sequence.ts).
 * Course structure, not personal data: public and cacheable, so the
 * flashcard end screen and the post-completion panel can show "Next topic:
 * Circuits Part 2" without a plan lookup.
 */
import { NextResponse } from 'next/server'
import { getTopicNeighbors } from '@/lib/topic-sequence'

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const n = await getTopicNeighbors(slug)
  if (!n) return NextResponse.json({ error: 'Topic not found' }, { status: 404 })
  const link = (t: { slug: string; title: string } | null) => (t ? { slug: t.slug, title: t.title, href: `/topics/${t.slug}` } : null)
  return NextResponse.json(
    { course: n.course, prev: link(n.prev), next: link(n.next) },
    { headers: { 'Cache-Control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400' } },
  )
}
