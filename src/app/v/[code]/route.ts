import { NextResponse } from 'next/server'
import { lookupShortLink, shortLinkDestination } from '@/data/video-short-links'
import { publishedLessonsForTopic } from '@/lib/video-lessons-server'

/**
 * GET /v/<code> — short addresses spoken in StudyMondo's YouTube videos
 * (src/data/video-short-links.ts). A temporary redirect, so a destination can
 * change without browsers caching the old one.
 */
export const dynamic = 'force-dynamic'

export async function GET(request: Request, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const link = lookupShortLink(code)
  const origin = new URL(request.url).origin
  if (!link) return NextResponse.redirect(new URL('/', origin), 302)
  const cards = await publishedLessonsForTopic(link.topicSlug).catch(() => [])
  return NextResponse.redirect(new URL(shortLinkDestination(link, cards.map((c) => c.instructor.slug)), origin), 302)
}
