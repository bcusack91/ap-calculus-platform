import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'
import { satSectionScaled, projectionRange, satPercentile, type EvidenceLevel } from '@/lib/sat-scoring'

/**
 * Score Predictor API
 *
 * Gathers user activity (exit quiz attempts, diagnostic tests, practice tests)
 * and estimates projected SAT score with trend data.
 *
 * Percent-correct maps through the calibrated convex curve in
 * src/lib/sat-scoring.ts (anchored on real students' College Board scores),
 * not the old linear 200 + pct*600 map, and the prediction ships with an
 * honest ±30-50 range keyed to how much evidence backs it.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.user.id

    const getData = unstable_cache(
      async () => {
    // Fetch all relevant data in parallel
    const [exitQuizAttempts, diagnosticTests, practiceTests, topicProgress] =
      await Promise.all([
        prisma.exitQuizAttempt.findMany({
          where: { userId },
          orderBy: { completedAt: 'asc' },
          select: {
            topicSlug: true,
            score: true,
            totalQuestions: true,
            passed: true,
            completedAt: true,
          },
        }),
        prisma.diagnosticTest.findMany({
          where: { userId, category: 'sat-full-diagnostic' },
          orderBy: { createdAt: 'asc' },
          select: { results: true, createdAt: true },
        }),
        prisma.satTestAttempt.findMany({
          where: { userId },
          orderBy: { completedAt: 'asc' },
          select: {
            totalScore: true,
            rwScore: true,
            mathScore: true,
            rwCorrect: true,
            rwTotal: true,
            mathCorrect: true,
            mathTotal: true,
            completedAt: true,
          },
        }),
        prisma.topicProgress.findMany({
          where: { userId, topic: { category: { course: { slug: { startsWith: 'sat' } } } } },
          select: { status: true },
        }),
      ])

    // Calculate mastery metrics
    const satTopics = topicProgress.length
    const masteredTopics = topicProgress.filter(tp => tp.status === 'MASTERED').length
    const completedTopics = topicProgress.filter(
      tp => tp.status === 'COMPLETED' || tp.status === 'MASTERED',
    ).length
    const masteryRate = satTopics > 0 ? masteredTopics / satTopics : 0

    // Exit quiz stats
    const satExitQuizzes = exitQuizAttempts.filter(a => a.topicSlug.startsWith('sat-'))
    const totalQuizzesAttempted = satExitQuizzes.length
    const quizPassRate =
      totalQuizzesAttempted > 0
        ? satExitQuizzes.filter(a => a.passed).length / totalQuizzesAttempted
        : 0
    const avgQuizScore =
      totalQuizzesAttempted > 0
        ? satExitQuizzes.reduce((s, a) => s + a.score / a.totalQuestions, 0) / totalQuizzesAttempted
        : 0

    // RW vs Math breakdown from exit quizzes.
    // Drive attribution from an explicit topic -> section map so every quiz lands
    // in exactly one bucket. Ambiguous substring keywords previously caused some
    // slugs to match both lists (e.g. "data" / "systems") or neither. Strategy
    // topics (e.g. test strategies, time management) belong to no section and are
    // intentionally excluded from both buckets.
    const SAT_TOPIC_SECTION: Record<string, 'reading-writing' | 'math'> = {
      // Reading & Writing
      'sat-reading-comprehension': 'reading-writing',
      'sat-vocabulary-context': 'reading-writing',
      'sat-central-ideas-details': 'reading-writing',
      'sat-command-evidence': 'reading-writing',
      'sat-finding-textual-evidence': 'reading-writing',
      'sat-grammar-usage': 'reading-writing',
      'sat-grammar-conventions': 'reading-writing',
      'sat-punctuation': 'reading-writing',
      'sat-punctuation-commas-semicolons': 'reading-writing',
      'sat-sentence-structure': 'reading-writing',
      'sat-pronoun-agreement': 'reading-writing',
      'sat-effective-language-use': 'reading-writing',
      'sat-transitions-organization': 'reading-writing',
      'sat-conciseness-redundancy': 'reading-writing',
      'sat-subject-verb-agreement': 'reading-writing',
      // Math
      'sat-linear-equations-inequalities': 'math',
      'sat-quadratic-equations': 'math',
      'sat-functions': 'math',
      'sat-exponents-radicals': 'math',
      'sat-ratios-proportions-percents': 'math',
      'sat-statistics-data-interpretation': 'math',
      'sat-exponential-functions': 'math',
      'sat-circles': 'math',
      'sat-complex-numbers': 'math',
      'sat-systems-equations': 'math',
      'sat-systems-linear-equations': 'math',
      'sat-linear-inequalities-graphs': 'math',
      'sat-probability-two-way-tables': 'math',
      'sat-scatterplots-line-fit': 'math',
      'sat-data-statistics': 'math',
      'sat-polynomials-factoring': 'math',
      'sat-polynomial-rational-expressions': 'math',
      'sat-nonlinear-equations-functions': 'math',
      'sat-geometry-trigonometry': 'math',
      'sat-geometry-basics': 'math',
    }

    const rwQuizzes = satExitQuizzes.filter(a => SAT_TOPIC_SECTION[a.topicSlug] === 'reading-writing')
    const mathQuizzes = satExitQuizzes.filter(a => SAT_TOPIC_SECTION[a.topicSlug] === 'math')

    const rwAvgPct = rwQuizzes.length > 0
      ? rwQuizzes.reduce((s, a) => s + a.score / a.totalQuestions, 0) / rwQuizzes.length
      : 0.5
    const mathAvgPct = mathQuizzes.length > 0
      ? mathQuizzes.reduce((s, a) => s + a.score / a.totalQuestions, 0) / mathQuizzes.length
      : 0.5

    // Estimate section scores from percent-correct via the calibrated curve
    // (see src/lib/sat-scoring.ts — the linear 200 + pct*600 map it replaces
    // ran ~60-130 total points high through the middle of the scale).
    const estimateSection = (pct: number) => satSectionScaled(pct)

    // Recent results (informational stat)
    const recentQuizzes = satExitQuizzes.slice(-10)
    const recentAvg = recentQuizzes.length > 0
      ? recentQuizzes.reduce((s, a) => s + a.score / a.totalQuestions, 0) / recentQuizzes.length
      : avgQuizScore

    // Latest diagnostic's per-section percentages, recomputed from the stored
    // domain tallies and run through the calibrated curve. (Recomputing rather
    // than trusting the stored rwScore/mathScore also corrects history entries
    // scored under the old inflated linear map.)
    let diagRW: number | null = null
    let diagMath: number | null = null
    if (diagnosticTests.length > 0) {
      const latest = diagnosticTests[diagnosticTests.length - 1].results as Record<string, unknown> | null
      const domains = latest && Array.isArray(latest.domains)
        ? (latest.domains as { section?: string; correct?: number; total?: number }[])
        : []
      const sectionPct = (section: string): number | null => {
        const rows = domains.filter(d => d.section === section)
        const total = rows.reduce((s, d) => s + (d.total ?? 0), 0)
        const correct = rows.reduce((s, d) => s + (d.correct ?? 0), 0)
        return total > 0 ? correct / total : null
      }
      const rwPct = sectionPct('reading-writing')
      const mathPct = sectionPct('math')
      if (rwPct !== null) diagRW = estimateSection(rwPct)
      if (mathPct !== null) diagMath = estimateSection(mathPct)
    }

    /**
     * Composite prediction — weighted blend; missing sources drop out and the
     * remaining weights renormalize. Test-like evidence (timed, mixed-tier,
     * passage-based) outweighs raw exit-quiz averages because quiz pools
     * still contain meta-strategy items and untimed single-topic drills:
     *   0.40  latest practice test  (full-length, timed, own scaled curve)
     *   0.30  latest diagnostic     (36-item calibrated honest sample)
     *   0.20  exit-quiz average     (broad coverage, but noisy and untimed)
     *   0.10  mastery rate          (progress signal, weakest score proxy)
     */
    const blendSection = (parts: { weight: number; value: number | null }[]): number => {
      const present = parts.filter((p): p is { weight: number; value: number } => p.value !== null)
      const totalWeight = present.reduce((s, p) => s + p.weight, 0)
      if (totalWeight === 0) return estimateSection(0.5)
      return Math.round(present.reduce((s, p) => s + p.value * p.weight, 0) / totalWeight)
    }

    const latestPractice = practiceTests.length > 0 ? practiceTests[practiceTests.length - 1] : null
    let predictedRW = blendSection([
      { weight: 0.4, value: latestPractice ? latestPractice.rwScore : null },
      { weight: 0.3, value: diagRW },
      { weight: 0.2, value: rwQuizzes.length > 0 ? estimateSection(rwAvgPct) : null },
      { weight: 0.1, value: satTopics > 0 ? estimateSection(masteryRate) : null },
    ])
    let predictedMath = blendSection([
      { weight: 0.4, value: latestPractice ? latestPractice.mathScore : null },
      { weight: 0.3, value: diagMath },
      { weight: 0.2, value: mathQuizzes.length > 0 ? estimateSection(mathAvgPct) : null },
      { weight: 0.1, value: satTopics > 0 ? estimateSection(masteryRate) : null },
    ])

    // Clamp to valid range
    predictedRW = Math.max(200, Math.min(800, predictedRW))
    predictedMath = Math.max(200, Math.min(800, predictedMath))
    const predictedTotal = predictedRW + predictedMath

    // Build trend data (score over time)
    const trendData: { date: string; score: number; source: string }[] = []

    // From diagnostics
    for (const d of diagnosticTests) {
      try {
        const parsed = d.results as Record<string, unknown>
        if (parsed.estimatedScore) {
          trendData.push({
            date: d.createdAt.toISOString(),
            score: parsed.estimatedScore as number,
            source: 'diagnostic',
          })
        }
      } catch {}
    }

    // From practice tests
    for (const pt of practiceTests) {
      trendData.push({
        date: pt.completedAt.toISOString(),
        score: pt.totalScore,
        source: 'practice-test',
      })
    }

    // Sort by date
    trendData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    // Evidence level — drives both the confidence badge and the width of the
    // projection range (±30 high / ±40 medium / ±50 low). Test-like evidence
    // (practice tests, diagnostics) counts for more than quiz volume.
    const confidence: EvidenceLevel =
      (practiceTests.length >= 1 && totalQuizzesAttempted >= 5) ||
      practiceTests.length >= 2 ||
      totalQuizzesAttempted >= 15
        ? 'high'
        : practiceTests.length >= 1 || diagnosticTests.length >= 1 || totalQuizzesAttempted >= 3
          ? 'medium'
          : 'low'

    return ({
      prediction: {
        rwScore: predictedRW,
        mathScore: predictedMath,
        totalScore: predictedTotal,
        // Honest projection window — additive so older clients that only read
        // totalScore keep working.
        range: projectionRange(predictedTotal, confidence),
        percentile: satPercentile(predictedTotal),
        confidence,
      },
      stats: {
        satTopics,
        masteredTopics,
        completedTopics,
        masteryRate: Math.round(masteryRate * 100),
        totalQuizzesAttempted,
        quizPassRate: Math.round(quizPassRate * 100),
        avgQuizScore: Math.round(avgQuizScore * 100),
        recentAvg: Math.round(recentAvg * 100),
        practiceTestsTaken: practiceTests.length,
        diagnosticsTaken: diagnosticTests.length,
      },
      trend: trendData,
      breakdown: {
        rw: {
          avgPct: Math.round(rwAvgPct * 100),
          quizCount: rwQuizzes.length,
        },
        math: {
          avgPct: Math.round(mathAvgPct * 100),
          quizCount: mathQuizzes.length,
        },
      },
    })
  },
      [`sat-score-predictor-${userId}`],
      { revalidate: 300 }
    )

    return NextResponse.json(await getData())
  } catch (error) {
    console.error('Score predictor error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
