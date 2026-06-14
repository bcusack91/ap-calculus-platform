import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

/**
 * Score Predictor API
 *
 * Gathers user activity (exit quiz attempts, diagnostic tests, practice tests)
 * and estimates projected SAT score with trend data.
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

    // Estimate section scores from quiz performance
    const estimateSection = (pct: number) => {
      return Math.round(200 + pct * 600)
    }

    // Weight factors for prediction
    // Recent results weighted more heavily
    const recentQuizzes = satExitQuizzes.slice(-10)
    const recentAvg = recentQuizzes.length > 0
      ? recentQuizzes.reduce((s, a) => s + a.score / a.totalQuestions, 0) / recentQuizzes.length
      : avgQuizScore

    // Composite prediction
    let predictedRW = estimateSection(rwAvgPct)
    let predictedMath = estimateSection(mathAvgPct)

    // Factor in practice test results if available
    if (practiceTests.length > 0) {
      const latestPractice = practiceTests[practiceTests.length - 1]
      // Blend: 40% practice test, 40% quiz avg, 20% mastery
      predictedRW = Math.round(
        latestPractice.rwScore * 0.4 +
          estimateSection(rwAvgPct) * 0.4 +
          estimateSection(masteryRate) * 0.2,
      )
      predictedMath = Math.round(
        latestPractice.mathScore * 0.4 +
          estimateSection(mathAvgPct) * 0.4 +
          estimateSection(masteryRate) * 0.2,
      )
    }

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

    // Percentile estimate (very rough based on mean ~1060, SD ~200)
    const zScore = (predictedTotal - 1060) / 200
    const percentile = Math.round(
      50 * (1 + (zScore >= 0 ? 1 : -1) * Math.sqrt(1 - Math.exp(-2 * zScore * zScore / Math.PI))),
    )

    return ({
      prediction: {
        rwScore: predictedRW,
        mathScore: predictedMath,
        totalScore: predictedTotal,
        percentile: Math.max(1, Math.min(99, percentile)),
        confidence: totalQuizzesAttempted >= 10 ? 'high' : totalQuizzesAttempted >= 3 ? 'medium' : 'low',
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
