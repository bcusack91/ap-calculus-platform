import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { REVIEW_HREF, isReviewKind } from '@/lib/question-resolver'
import { CORRECT_TO_RETIRE } from '@/lib/mistake-log'
import { activeMistakesFor, filterMistakes, isMistakeCourse } from '@/lib/mistakes-server'
import { carsSkillForKey } from '@/lib/question-sources/mcat'

export const dynamic = 'force-dynamic'

const day = (s: string | null, end = false) => (s && /^\d{4}-\d{2}-\d{2}$/.test(s) ? new Date(`${s}T${end ? '23:59:59.999' : '00:00:00'}Z`) : undefined)

/**
 * GET /api/mistakes?course=mcat|sat|act[&source&topic&section&from&to] — the
 * student's active mistakes (missed or flagged, not yet answered correctly
 * twice since), newest first, plus the filter options present in the log.
 */
export async function GET(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const sp = req.nextUrl.searchParams
  const course = sp.get('course')
  if (!isMistakeCourse(course)) return NextResponse.json({ error: 'course must be mcat, sat or act' }, { status: 400 })
  try {
    const all = await activeMistakesFor(userId, course)
    const items = filterMistakes(all, {
      source: sp.get('source') || undefined,
      topic: sp.get('topic') || undefined,
      section: sp.get('section') || undefined,
      from: day(sp.get('from')),
      to: day(sp.get('to'), true),
    })
    const slugs = [...new Set(all.map((m) => m.topicSlug).filter(Boolean))]
    const topics = slugs.length ? await prisma.topic.findMany({ where: { slug: { in: slugs } }, select: { slug: true, title: true } }) : []
    const titleOf = new Map(topics.map((t) => [t.slug, t.title]))
    return NextResponse.json(
      {
        total: all.length,
        retireAfter: CORRECT_TO_RETIRE,
        items: items.map((m) => ({
          questionKey: m.questionKey,
          topicSlug: m.topicSlug,
          topicTitle: titleOf.get(m.topicSlug) ?? null,
          discipline: m.discipline,
          source: m.origin.source,
          // PRACTICE covers both practice tests and question-bank sets; the kind tells them apart.
          attemptKind: m.origin.attemptKind ?? null,
          // CARS reasoning skill, for the mistake log's skills panel (MCAT only).
          skill: course === 'mcat' ? carsSkillForKey(m.questionKey) ?? null : null,
          reason: m.reason,
          misses: m.misses,
          correctSince: m.correctSince,
          lastMissedAt: m.lastMissedAt.toISOString(),
          reviewHref: isReviewKind(m.origin.attemptKind) ? REVIEW_HREF(m.origin.attemptKind, m.origin.attemptId) : null,
        })),
        filters: {
          sources: [...new Set(all.map((m) => m.origin.source))].sort(),
          sections: [...new Set(all.map((m) => m.discipline).filter(Boolean))].sort(),
          topics: slugs.map((s) => ({ slug: s, title: titleOf.get(s) ?? s })).sort((a, b) => a.title.localeCompare(b.title)),
        },
      },
      { headers: { 'Cache-Control': 'private, no-store' } },
    )
  } catch (err) {
    console.error('[GET /api/mistakes]', err)
    return NextResponse.json({ error: 'Could not load your mistakes' }, { status: 500 })
  }
}
