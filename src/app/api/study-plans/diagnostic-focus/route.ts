import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getDiagnosticFocus } from '@/lib/adaptive-study-plan'

/**
 * GET /api/study-plans/diagnostic-focus?prefix=ap-stats-diagnostic
 *
 * Returns the signed-in user's latest diagnostic focus (weak areas +
 * recommended topics) for a course, so the study-plan page can show a
 * personalized banner. Each recommended topic is enriched with whether it maps
 * to a real /topics/ page (`exists` + `path`) so the banner only links to topics
 * that resolve — important for courses (e.g. SAT) whose recommended slugs are
 * skill areas without a dedicated topic page. Returns { focus: null } when the
 * user has no usable diagnostic.
 */
export async function GET(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    // Not signed in — no personalization, but not an error for the page.
    return NextResponse.json({ focus: null })
  }

  const prefix = request.nextUrl.searchParams.get('prefix')?.trim()
  if (!prefix) {
    return NextResponse.json({ error: 'Missing prefix' }, { status: 400 })
  }

  const focus = await getDiagnosticFocus(session.user.id, prefix)
  if (!focus) return NextResponse.json({ focus: null })

  // Resolve which recommended slugs are real topic pages.
  const slugs = focus.recommendedTopics.map((t) => t.slug)
  let existing = new Set<string>()
  if (slugs.length > 0) {
    try {
      const topics = await prisma.topic.findMany({
        where: { slug: { in: slugs } },
        select: { slug: true },
      })
      existing = new Set(topics.map((t) => t.slug))
    } catch (err) {
      console.error('[diagnostic-focus] topic existence lookup failed:', err)
    }
  }

  const recommendedTopics = focus.recommendedTopics.map((t) => ({
    ...t,
    exists: existing.has(t.slug),
    path: existing.has(t.slug) ? `/topics/${t.slug}` : null,
  }))

  return NextResponse.json({ focus: { ...focus, recommendedTopics } })
}
