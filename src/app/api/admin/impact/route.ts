import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'

/**
 * GET /api/admin/impact
 *
 * Admin-only evidence-of-impact analytics:
 *  - masteryDistribution: TopicProgress by status (in-progress / completed / mastered)
 *  - weeklyCompletions: topics completed per week (last 12 weeks)
 *  - diagnosticImprovement: first vs latest diagnostic % per student+category (pre/post)
 *  - usageOutcome: avg mastery bucketed by how many topics a student has worked
 *    (the "more usage → more mastery" correlation)
 */
export async function GET() {
  const auth = await requireAdmin()
  if ('error' in auth) return auth.error

  try {
    const twelveWeeksAgo = new Date(Date.now() - 12 * 7 * 24 * 60 * 60 * 1000)

    const [statusGroups, weeklyRaw, diags, perUser] = await Promise.all([
      prisma.topicProgress.groupBy({ by: ['status'], _count: true }),
      prisma.$queryRaw<{ week: Date; n: number }[]>`
        SELECT date_trunc('week', "completedAt") AS week, count(*)::int AS n
        FROM "TopicProgress"
        WHERE "completedAt" IS NOT NULL AND "completedAt" >= ${twelveWeeksAgo}
        GROUP BY 1 ORDER BY 1
      `,
      prisma.diagnosticTest.findMany({
        where: { createdAt: { gte: new Date(Date.now() - 270 * 24 * 60 * 60 * 1000) } }, // last ~9 months
        select: { userId: true, category: true, results: true, createdAt: true },
        orderBy: { createdAt: 'desc' }, // keep most-recent under the cap
        take: 12000,
      }),
      prisma.topicProgress.groupBy({
        by: ['userId'],
        _count: { topicId: true },
        _avg: { masteryLevel: true },
      }),
    ])

    // 1. Mastery distribution
    const masteryDistribution = statusGroups.map((g) => ({
      status: g.status,
      count: typeof g._count === 'number' ? g._count : 0,
    }))

    // 2. Weekly completions (last 12 weeks)
    const weeklyCompletions = weeklyRaw.map((r) => ({
      week: r.week instanceof Date ? r.week.toISOString().slice(0, 10) : String(r.week).slice(0, 10),
      count: Number(r.n),
    }))

    // 3. Diagnostic improvement: earliest vs latest % per (user, SUBJECT) with >=2
    // attempts. Diagnostic categories embed the form (e.g. "calcab-diagnostic-3")
    // and retakes rotate to a new form, so we group by the form-stripped subject;
    // and we track earliest/latest by timestamp (rows may arrive in any order).
    const byUserSubject = new Map<string, { first: { pct: number; t: number }; last: { pct: number; t: number }; count: number }>()
    for (const d of diags) {
      const pct = pctFromResults(d.results)
      if (pct === null) continue
      const subject = normalizeCategory(d.category)
      const key = `${d.userId}::${subject}`
      const t = d.createdAt.getTime()
      const cur = byUserSubject.get(key)
      if (!cur) byUserSubject.set(key, { first: { pct, t }, last: { pct, t }, count: 1 })
      else {
        cur.count += 1
        if (t < cur.first.t) cur.first = { pct, t }
        if (t > cur.last.t) cur.last = { pct, t }
      }
    }
    const deltas: number[] = []
    let improved = 0
    for (const v of byUserSubject.values()) {
      if (v.count < 2) continue
      const delta = v.last.pct - v.first.pct
      deltas.push(delta)
      if (delta > 0) improved += 1
    }
    const diagnosticImprovement = {
      studentsWithRetakes: deltas.length,
      avgImprovementPoints: deltas.length ? Math.round((deltas.reduce((a, b) => a + b, 0) / deltas.length) * 10) / 10 : null,
      pctImproved: deltas.length ? Math.round((improved / deltas.length) * 100) : null,
    }

    // 4. Usage → outcome: bucket students by topics worked, avg mastery per bucket
    const buckets = [
      { label: '1–2 topics', min: 1, max: 2, masteries: [] as number[] },
      { label: '3–5 topics', min: 3, max: 5, masteries: [] as number[] },
      { label: '6–10 topics', min: 6, max: 10, masteries: [] as number[] },
      { label: '11+ topics', min: 11, max: Infinity, masteries: [] as number[] },
    ]
    for (const u of perUser) {
      const n = u._count.topicId
      const avg = u._avg.masteryLevel ?? 0
      const b = buckets.find((x) => n >= x.min && n <= x.max)
      if (b) b.masteries.push(avg)
    }
    const usageOutcome = buckets.map((b) => ({
      label: b.label,
      students: b.masteries.length,
      avgMastery: b.masteries.length
        ? Math.round((b.masteries.reduce((a, c) => a + c, 0) / b.masteries.length) * 100)
        : 0,
    }))

    return NextResponse.json({
      masteryDistribution,
      weeklyCompletions,
      diagnosticImprovement,
      usageOutcome,
    })
  } catch (error) {
    console.error('[GET /api/admin/impact]', error)
    return NextResponse.json({ error: 'Failed to load impact analytics' }, { status: 500 })
  }
}

// Diagnostic categories embed the form as a trailing "-<digits>" or "-<UPPER>"
// (e.g. "calcab-diagnostic-3", "ap-bio-diagnostic-B"). Strip it so retakes on
// different forms group under the same subject. Fixed categories
// ("sat-full-diagnostic") are left unchanged.
function normalizeCategory(category: string): string {
  return category.replace(/-(\d+|[A-Z])$/, '')
}

// DiagnosticTest.results is JSON like { estimatedScore, percentage, ... }.
function pctFromResults(results: unknown): number | null {
  if (!results || typeof results !== 'object') return null
  const pct = (results as Record<string, unknown>).percentage
  return typeof pct === 'number' && Number.isFinite(pct) ? pct : null
}
