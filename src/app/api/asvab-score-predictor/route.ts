import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import {
  ASVAB_SUBTESTS,
  type AsvabSubtestId,
  type StandardScoreEstimate,
  estimateAfqtFromEstimates,
  estimateLineScores,
  estimateStandardScore,
  subtestFromLabel,
  subtestOfTopic,
} from '@/lib/asvab-scoring'
import { courseTopicWhere } from '@/lib/course-includes'

/**
 * GET /api/asvab-score-predictor — the signed-in student's AFQT and
 * line-score ESTIMATES from everything they have done (the ACT predictor
 * pattern, with ASVAB scoring from src/lib/asvab-scoring.ts).
 *
 * Evidence per subtest, pooled as right/total item counts:
 *   - the two most recent diagnostics (results.domains tallies), full weight;
 *   - saved practice-test attempts (any DiagnosticTest row whose category
 *     mentions asvab-practice, graded from results.review), full weight;
 *   - exit quizzes on that subtest's topics at HALF weight: they are taken
 *     right after the lesson, so they run higher than a cold test would.
 * Each subtest's pooled tally becomes a standard-score estimate with a
 * window, then AFQT = AR + MK + 2·VE through the official table, and the
 * service composites for every subtest with evidence.
 */

type Tally = { correct: number; total: number }
const EXIT_QUIZ_WEIGHT = 0.5
const RECENT_DIAGNOSTICS = 2

const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : null)
const rec = (v: unknown): Record<string, unknown> => (v && typeof v === 'object' ? (v as Record<string, unknown>) : {})

function parseResults(raw: unknown): Record<string, unknown> {
  if (typeof raw === 'string') {
    try {
      return rec(JSON.parse(raw))
    } catch {
      return {}
    }
  }
  return rec(raw)
}

/** Per-subtest tallies stored on a diagnostic attempt (results.domains). */
function diagnosticTallies(results: Record<string, unknown>): Partial<Record<AsvabSubtestId, Tally>> {
  const out: Partial<Record<AsvabSubtestId, Tally>> = {}
  for (const d of Array.isArray(results.domains) ? results.domains : []) {
    const o = rec(d)
    const id = subtestFromLabel(String(o.domainId ?? o.domainName ?? ''))
    const correct = num(o.correct)
    const total = num(o.total)
    if (!id || correct == null || total == null || total <= 0) continue
    const t = (out[id] ??= { correct: 0, total: 0 })
    t.correct += correct
    t.total += total
  }
  return out
}

/** Per-subtest tallies graded from a stored review (practice tests). */
function reviewTallies(results: Record<string, unknown>): Partial<Record<AsvabSubtestId, Tally>> {
  const out: Partial<Record<AsvabSubtestId, Tally>> = {}
  const review = rec(results.review)
  const questions = Array.isArray(review.questions) ? review.questions : []
  const answers = Array.isArray(review.answers) ? review.answers : []
  questions.forEach((raw, i) => {
    const q = rec(raw)
    const key = num(q.correctIndex) ?? num(q.correctAnswer)
    const id = subtestFromLabel(String(q.topicSlug ?? '')) ?? subtestFromLabel(String(q.domain ?? q.section ?? ''))
    if (key == null || !id) return
    const t = (out[id] ??= { correct: 0, total: 0 })
    t.total++
    if (answers[i] === key) t.correct++
  })
  return out
}

function add(into: Partial<Record<AsvabSubtestId, Tally>>, from: Partial<Record<AsvabSubtestId, Tally>>, weight = 1) {
  for (const [id, t] of Object.entries(from) as [AsvabSubtestId, Tally][]) {
    const x = (into[id] ??= { correct: 0, total: 0 })
    x.correct += t.correct * weight
    x.total += t.total * weight
  }
}

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const userId = session.user.id

    const [diagnostics, practice, quizzes, topicProgress] = await Promise.all([
      prisma.diagnosticTest.findMany({
        where: { userId, category: { startsWith: 'asvab-diagnostic' } },
        orderBy: { createdAt: 'asc' },
        select: { results: true, createdAt: true },
      }),
      prisma.diagnosticTest.findMany({
        where: { userId, category: { contains: 'asvab-practice' } },
        orderBy: { createdAt: 'asc' },
        select: { results: true, createdAt: true },
      }),
      prisma.exitQuizAttempt.findMany({
        where: { userId, topicSlug: { startsWith: 'asvab-' } },
        orderBy: { completedAt: 'asc' },
        select: { topicSlug: true, score: true, totalQuestions: true, passed: true },
      }),
      prisma.topicProgress.findMany({
        where: { userId, topic: courseTopicWhere('asvab') },
        select: { status: true },
      }),
    ])

    const fromDiag: Partial<Record<AsvabSubtestId, Tally>> = {}
    for (const d of diagnostics.slice(-RECENT_DIAGNOSTICS)) add(fromDiag, diagnosticTallies(parseResults(d.results)))
    const fromPractice: Partial<Record<AsvabSubtestId, Tally>> = {}
    for (const p of practice) add(fromPractice, reviewTallies(parseResults(p.results)))
    const fromQuiz: Partial<Record<AsvabSubtestId, Tally>> = {}
    for (const q of quizzes) {
      const id = subtestOfTopic(q.topicSlug)
      if (!id || q.totalQuestions <= 0) continue
      add(fromQuiz, { [id]: { correct: q.score, total: q.totalQuestions } })
    }

    const pooled: Partial<Record<AsvabSubtestId, Tally>> = {}
    add(pooled, fromDiag)
    add(pooled, fromPractice)
    add(pooled, fromQuiz, EXIT_QUIZ_WEIGHT)

    const estimates: Partial<Record<AsvabSubtestId, StandardScoreEstimate>> = {}
    const subtests = ASVAB_SUBTESTS.map((s) => {
      const t = pooled[s.id]
      const est = t && t.total > 0 ? estimateStandardScore(t.correct, t.total) : null
      if (est) estimates[s.id] = est
      return {
        id: s.id,
        name: s.name,
        afqt: s.afqt,
        items: t ? Math.round(t.total * 10) / 10 : 0,
        percentCorrect: t && t.total > 0 ? Math.round((t.correct / t.total) * 100) : null,
        score: est?.score ?? null,
        low: est?.low ?? null,
        high: est?.high ?? null,
        sources: {
          diagnostic: fromDiag[s.id]?.total ?? 0,
          practice: fromPractice[s.id]?.total ?? 0,
          quiz: fromQuiz[s.id]?.total ?? 0,
        },
      }
    })

    const afqtReady = estimates.WK && estimates.PC && estimates.AR && estimates.MK
    const afqt = afqtReady
      ? estimateAfqtFromEstimates({ WK: estimates.WK!, PC: estimates.PC!, AR: estimates.AR!, MK: estimates.MK! })
      : null
    const afqtItems = subtests.filter((s) => s.afqt).reduce((n, s) => n + s.items, 0)
    const confidence: 'high' | 'medium' | 'low' = afqtItems >= 80 ? 'high' : afqtItems >= 30 ? 'medium' : 'low'

    const trend = diagnostics.flatMap((d) => {
      const r = parseResults(d.results)
      const score = num(r.estimatedAfqt) ?? num(rec(r.afqt).percentile)
      return score == null ? [] : [{ date: d.createdAt.toISOString(), score, source: 'diagnostic' }]
    })

    const totalTopics = topicProgress.length
    const masteredTopics = topicProgress.filter((tp) => tp.status === 'MASTERED').length
    const quizzesAttempted = quizzes.length
    const recent = quizzes.slice(-10)

    return NextResponse.json(
      {
        prediction: {
          afqt: afqt
            ? {
                percentile: afqt.percentile,
                low: afqt.low,
                high: afqt.high,
                category: afqt.category,
                categoryLow: afqt.categoryRange.low,
                categoryHigh: afqt.categoryRange.high,
                ve: afqt.ve,
                raw: afqt.raw,
              }
            : null,
          // Shared ScorePredictor shape, kept for any generic consumer.
          primaryScore: afqt?.percentile ?? 0,
          maxScore: 99,
          ...(afqt ? { range: { low: afqt.low, high: afqt.high } } : {}),
          confidence,
          subtests,
          lineScores: estimateLineScores(estimates),
          evidence: { diagnostics: diagnostics.length, practiceTests: practice.length, quizzes: quizzesAttempted, afqtItems: Math.round(afqtItems) },
        },
        stats: {
          totalTopics,
          masteredTopics,
          masteryRate: totalTopics > 0 ? Math.round((masteredTopics / totalTopics) * 100) : 0,
          quizzesAttempted,
          quizPassRate: quizzesAttempted > 0 ? Math.round((quizzes.filter((q) => q.passed).length / quizzesAttempted) * 100) : 0,
          recentAvg: recent.length > 0 ? Math.round((recent.reduce((s, q) => s + q.score / Math.max(1, q.totalQuestions), 0) / recent.length) * 100) : 0,
        },
        trend,
      },
      { headers: { 'Cache-Control': 'private, no-store' } },
    )
  } catch (error) {
    console.error('ASVAB score predictor error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
