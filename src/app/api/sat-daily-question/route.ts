import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getDailyQuestions, DOMAIN_TO_DAILY_SLUGS } from '@/data/sat-daily-question'

// Per-user (personalized) so it can't be a shared static cache.
export const dynamic = 'force-dynamic'

interface StoredDomain {
  domainId?: string
  level?: 'weak' | 'moderate' | 'strong'
}

/**
 * Derive the daily-question pools to bias toward, from the signed-in student's
 * latest SAT diagnostic weak/moderate domains. Returns undefined when there's no
 * usable diagnostic (then the daily question is the shared day-of-year one).
 */
async function getWeakAreaPools(userId: string) {
  const diag = await prisma.diagnosticTest.findFirst({
    where: { userId, category: { startsWith: 'sat-full-diagnostic' } },
    orderBy: { createdAt: 'desc' },
    select: { results: true },
  })
  const results = diag?.results as { domains?: StoredDomain[] } | null
  const domains = Array.isArray(results?.domains) ? results!.domains! : []
  const weak = domains.filter((d) => d.level === 'weak' || d.level === 'moderate')
  if (weak.length === 0) return undefined

  const mathSlugs: string[] = []
  const rwSlugs: string[] = []
  for (const d of weak) {
    const entry = d.domainId ? DOMAIN_TO_DAILY_SLUGS[d.domainId] : undefined
    if (!entry) continue
    ;(entry.section === 'math' ? mathSlugs : rwSlugs).push(...entry.slugs)
  }
  if (mathSlugs.length === 0 && rwSlugs.length === 0) return undefined
  return { mathSlugs, rwSlugs }
}

export async function GET() {
  try {
    const session = await auth()
    const preferred = session?.user?.id ? await getWeakAreaPools(session.user.id) : undefined
    const questions = await getDailyQuestions(preferred)
    return NextResponse.json({
      date: new Date().toISOString().slice(0, 10),
      personalized: !!preferred,
      questions,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to generate daily questions' }, { status: 500 })
  }
}
