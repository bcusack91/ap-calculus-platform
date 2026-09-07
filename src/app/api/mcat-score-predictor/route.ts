import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { gatherSubjectData, mapToMCATScore, mcatSectionForTopicSlug } from '@/lib/score-predictor-utils'
import { sectionScaledScore } from '@/lib/mcat-scoring'
import type { MCATSection } from '@/data/mcat/types'
import { MCAT_SECTION_META, MCAT_SECTION_ORDER } from '@/data/mcat/types'

// Per-section card styles consumed by the shared ScorePredictor component
// (same shape the ACT predictor returns).
const SECTION_STYLES: Record<MCATSection, { color: string; bgLight: string; textColor: string }> = {
  'chem-phys': { color: 'cyan', bgLight: 'bg-cyan-50 dark:bg-cyan-900/20', textColor: 'text-cyan-700 dark:text-cyan-300' },
  cars: { color: 'amber', bgLight: 'bg-amber-50 dark:bg-amber-900/20', textColor: 'text-amber-700 dark:text-amber-300' },
  'bio-biochem': { color: 'green', bgLight: 'bg-green-50 dark:bg-green-900/20', textColor: 'text-green-700 dark:text-green-300' },
  'psych-soc': { color: 'purple', bgLight: 'bg-purple-50 dark:bg-purple-900/20', textColor: 'text-purple-700 dark:text-purple-300' },
}

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { subjectQuizzes, avgPct, stats, trend, confidence, masteryRate } = await gatherSubjectData(
      session.user.id,
      'mcat',
      'mcat-prep',
      'mcat-full-diagnostic',
    )

    // Per-section quiz averages (fraction correct, 0-1) from topic slugs.
    const agg: Record<MCATSection, { sum: number; n: number }> = {
      'chem-phys': { sum: 0, n: 0 },
      cars: { sum: 0, n: 0 },
      'bio-biochem': { sum: 0, n: 0 },
      'psych-soc': { sum: 0, n: 0 },
    }
    for (const attempt of subjectQuizzes) {
      const section = mcatSectionForTopicSlug(attempt.topicSlug)
      if (!section || attempt.totalQuestions <= 0) continue
      agg[section].sum += attempt.score / attempt.totalQuestions
      agg[section].n += 1
    }

    const sectionAvgs: Partial<Record<MCATSection, number>> = {}
    for (const section of MCAT_SECTION_ORDER) {
      if (agg[section].n > 0) sectionAvgs[section] = agg[section].sum / agg[section].n
    }

    const hasSectionData = Object.keys(sectionAvgs).length > 0
    const predictedScore = mapToMCATScore(avgPct, masteryRate, hasSectionData ? sectionAvgs : undefined)
    trend.push({ date: new Date().toISOString(), score: predictedScore, source: 'prediction' })

    // Section breakdown (additive): each entry carries `scaled` (118-132) and
    // a per-section confidence, plus the display fields the shared
    // ScorePredictor section grid renders. Unattempted sections fall back to
    // the overall average — matching mapToMCATScore, so the cards sum to
    // primaryScore.
    const blend = (pct: number) => Math.max(0, Math.min(1, pct * 0.75 + masteryRate * 0.25))
    const sections = MCAT_SECTION_ORDER.map((section) => {
      const attempted = agg[section].n
      const pct = sectionAvgs[section] ?? avgPct
      const scaled = sectionScaledScore(blend(pct))
      const sectionConfidence: 'high' | 'medium' | 'low' =
        attempted >= 5 ? 'high' : attempted >= 2 ? 'medium' : 'low'
      return {
        name: MCAT_SECTION_META[section].short,
        scaled,
        confidence: sectionConfidence,
        // Display fields for the shared section-breakdown grid:
        score: scaled,
        maxScore: 132,
        avgPct: Math.round(pct * 100),
        quizCount: attempted,
        ...SECTION_STYLES[section],
      }
    })

    return NextResponse.json({
      prediction: { primaryScore: predictedScore, maxScore: 528, confidence, sections },
      stats,
      trend,
    })
  } catch (error) {
    console.error('MCAT score predictor error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
