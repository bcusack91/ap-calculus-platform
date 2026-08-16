import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/progress/module-status?slugs=a,b,c
 *
 * Per-topic "cleared" status for the CALLER, using the SAME module-cleared
 * rule as the class plan / MCAT retake gate: entrance-quiz mastery
 * (masteryLevel >= 1) OR a best exit-quiz score >= 80%. Powers the dashboard
 * study-plan "Done" badges so students can see which recommended sections
 * they've already worked through.
 */

const REQUIRED_EXIT_FRACTION = 0.8
const MAX_SLUGS = 40

export async function GET(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const slugs = (req.nextUrl.searchParams.get('slugs') ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && s.length < 200)
    .slice(0, MAX_SLUGS)
  if (slugs.length === 0) return NextResponse.json({ cleared: {} })

  const [topics, exitRows] = await Promise.all([
    prisma.topic.findMany({
      where: { slug: { in: slugs } },
      select: { id: true, slug: true },
    }),
    prisma.exitQuizAttempt.findMany({
      where: { userId, topicSlug: { in: slugs } },
      select: { topicSlug: true, score: true, totalQuestions: true },
    }),
  ])

  const progressRows = topics.length === 0 ? [] : await prisma.topicProgress.findMany({
    where: { userId, topicId: { in: topics.map((t) => t.id) } },
    select: { topicId: true, masteryLevel: true },
  })
  const slugById = new Map(topics.map((t) => [t.id, t.slug]))

  const cleared: Record<string, boolean> = {}
  for (const s of slugs) cleared[s] = false
  for (const r of progressRows) {
    const slug = slugById.get(r.topicId)
    if (slug && r.masteryLevel >= 1) cleared[slug] = true
  }
  for (const r of exitRows) {
    if (r.totalQuestions > 0 && r.score / r.totalQuestions >= REQUIRED_EXIT_FRACTION) {
      cleared[r.topicSlug] = true
    }
  }

  return NextResponse.json({ cleared }, { headers: { 'Cache-Control': 'private, no-store' } })
}
