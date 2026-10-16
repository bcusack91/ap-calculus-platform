/**
 * AP diagnostic v2 scoring: per-unit tallies, the 1–5 estimate with its ±
 * band (apScoreRange), and recommendations by the same algorithm the v1
 * generators use — weak units first, ordered by exam weight, up to 2 missed
 * topics each; then 1 per moderate unit; at most 5. Missed topics come from
 * the served items' topicSlugs (production topics); a weak unit with nothing
 * missed (all skipped is still "missed") falls back to the unit's first
 * topics.
 */
import { apScoreRange } from '@/lib/ap-scoring'
import { AP_DIAG_V2_BLUEPRINTS, unitQuotas } from './blueprints'
import type { ApDiagV2Course, ApDiagV2DomainResult, ApDiagV2Question, ApDiagV2RecommendedTopic, ApDiagV2Results } from './types'

export const AP_DIAG_V2_MAX_RECOMMENDATIONS = 5

export function scoreApDiagnosticV2(
  course: ApDiagV2Course,
  questions: Pick<ApDiagV2Question, 'domain' | 'topicSlug' | 'correctAnswer'>[],
  answers: Record<number, number | null | undefined> | (number | null | undefined)[],
): ApDiagV2Results {
  const bp = AP_DIAG_V2_BLUEPRINTS[course]
  const answerAt = (i: number) => (answers as Record<number, number | null | undefined>)[i]
  const isCorrect = (i: number) => {
    const a = answerAt(i)
    return typeof a === 'number' && a === questions[i].correctAnswer
  }

  const domains: ApDiagV2DomainResult[] = bp.units
    .map((u) => {
      const idx = questions.map((q, i) => (q.domain === u.id ? i : -1)).filter((i) => i >= 0)
      const correct = idx.filter(isCorrect).length
      const total = idx.length
      const percentage = total ? Math.round((correct / total) * 100) : 0
      const level: ApDiagV2DomainResult['level'] = percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'
      return { domainId: u.id, domainName: `Unit ${u.number}: ${u.name}`, correct, total, percentage, level }
    })
    // A unit the sitting did not cover (only possible with a sample bank) is not scored.
    .filter((d) => d.total > 0)

  const totalCorrect = domains.reduce((n, d) => n + d.correct, 0)
  const totalQuestions = domains.reduce((n, d) => n + d.total, 0)
  const percentage = totalQuestions ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  const band = apScoreRange(totalCorrect, totalQuestions)

  const quota = unitQuotas(bp)
  const byWeight = (a: ApDiagV2DomainResult, b: ApDiagV2DomainResult) => (quota[b.domainId] ?? 0) - (quota[a.domainId] ?? 0)
  const missedIn = (unitId: string) => {
    const out: string[] = []
    questions.forEach((q, i) => {
      if (q.domain === unitId && !isCorrect(i) && q.topicSlug && !out.includes(q.topicSlug)) out.push(q.topicSlug)
    })
    return out
  }
  const fallback = (unitId: string) => bp.units.find((u) => u.id === unitId)?.topicSlugs ?? []
  const name = (slug: string) => bp.topicNames[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  const recommendedTopics: ApDiagV2RecommendedTopic[] = []
  const push = (slug: string, domainId: string, priority: 'high' | 'medium') => {
    if (recommendedTopics.length >= AP_DIAG_V2_MAX_RECOMMENDATIONS || recommendedTopics.some((t) => t.slug === slug)) return
    recommendedTopics.push({ slug, name: name(slug), domainId, priority })
  }
  for (const d of domains.filter((x) => x.level === 'weak').sort(byWeight)) {
    const missed = missedIn(d.domainId)
    for (const slug of (missed.length ? missed : fallback(d.domainId)).slice(0, 2)) push(slug, d.domainId, 'high')
  }
  for (const d of domains.filter((x) => x.level === 'moderate').sort(byWeight)) {
    const missed = missedIn(d.domainId)
    const slug = (missed.length ? missed : fallback(d.domainId))[0]
    if (slug) push(slug, d.domainId, 'medium')
  }

  return {
    version: 2,
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedAPScore: band.score,
    scoreRange: { low: band.low, high: band.high },
    percentRange: { low: band.percentLow, high: band.percentHigh },
    domains,
    weakAreas: domains.filter((d) => d.level === 'weak').map((d) => d.domainName),
    moderateAreas: domains.filter((d) => d.level === 'moderate').map((d) => d.domainName),
    strengths: domains.filter((d) => d.level === 'strong').map((d) => d.domainName),
    recommendedTopics,
  }
}
