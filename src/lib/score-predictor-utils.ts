/**
 * Shared score-predictor API helpers for AP subjects and ACT.
 * Each route imports these to avoid duplicating the scoring logic.
 */

import { prisma } from '@/lib/prisma'
import { courseTopicWhere } from '@/lib/course-includes'
import { unstable_cache } from 'next/cache'
import { sectionScaledScore } from '@/lib/mcat-scoring'
import { actSectionScaled } from '@/lib/act-scoring'
import type { MCATSection } from '@/data/mcat/types'
import { MCAT_SECTION_ORDER } from '@/data/mcat/types'
import { estimateApScore } from '@/lib/ap-scoring'
import { classPlanCourse } from '@/lib/class-plan-config'
import { apPracticeCategory } from '@/lib/ap-practice-exams'
import { RETIRED_AP_TOPICS, RETIRED_AP_UNITS } from '@/data/retired-ap-topics'

interface BasicStats {
  totalTopics: number
  masteredTopics: number
  masteryRate: number
  quizzesAttempted: number
  quizPassRate: number
  recentAvg: number
}

export interface TrendPoint {
  date: string
  score: number
  source: string
}

interface GatherOptions {
  /** DiagnosticTest.category of the course's full-length practice exam (e.g. 'ap-practice-exam:ap-chem'). */
  practiceExamCategory?: string
}

/**
 * The scaled score a diagnostic or practice-exam row stored. MCAT, SAT and ACT
 * write `estimatedScore`; every AP diagnostic and AP practice exam writes
 * `estimatedAPScore` (1–5) instead, which the trend used to miss entirely.
 */
export function storedEstimatedScore(results: unknown): number | null {
  if (!results || typeof results !== 'object') return null
  const r = results as { estimatedScore?: unknown; estimatedAPScore?: unknown }
  if (typeof r.estimatedScore === 'number' && Number.isFinite(r.estimatedScore)) return r.estimatedScore
  if (typeof r.estimatedAPScore === 'number' && Number.isFinite(r.estimatedAPScore)) return r.estimatedAPScore
  return null
}

/**
 * The course's live topics: every DB topic in the course except those retired
 * from the AP program (src/data/retired-ap-topics.ts) — including any topic
 * still sitting in a retired unit. prisma/retire-ap-topics.ts deletes those
 * rows, so in prod this is normally every topic; the filter keeps a DB that
 * has not run the retirement script from counting them.
 */
export function liveTopicSlugs(topics: { slug: string; categorySlug?: string | null }[]): Set<string> {
  return new Set(
    topics
      .filter(t => !Object.prototype.hasOwnProperty.call(RETIRED_AP_TOPICS, t.slug))
      .filter(t => !t.categorySlug || !Object.prototype.hasOwnProperty.call(RETIRED_AP_UNITS, t.categorySlug))
      .map(t => t.slug),
  )
}

/**
 * Topic mastery over the WHOLE course. The denominator is every live course
 * topic, not just the topics the student has opened: mastering the 2 topics
 * you have touched out of 40 is 5% of the course, not 100%.
 */
export function courseMastery(
  liveSlugs: Set<string>,
  progress: { topicSlug: string; status: string }[],
): { totalTopics: number; masteredTopics: number; masteryRate: number } {
  const mastered = new Set(progress.filter(p => p.status === 'MASTERED' && liveSlugs.has(p.topicSlug)).map(p => p.topicSlug))
  const totalTopics = liveSlugs.size
  const masteredTopics = mastered.size
  return { totalTopics, masteredTopics, masteryRate: totalTopics > 0 ? Math.round((masteredTopics / totalTopics) * 100) : 0 }
}

/**
 * Score history from stored attempts, oldest first. `createdAt` may arrive as
 * a string: unstable_cache JSON-serializes its result, so on a cache hit the
 * Dates are ISO strings (the old `(d.createdAt as Date).toISOString()` threw
 * there and silently dropped every point).
 */
export function buildScoreTrend(
  diagnostics: { results: unknown; createdAt: Date | string }[],
  practiceExams: { results: unknown; createdAt: Date | string }[] = [],
): TrendPoint[] {
  const points: TrendPoint[] = []
  const add = (rows: { results: unknown; createdAt: Date | string }[], source: string) => {
    for (const row of rows) {
      const score = storedEstimatedScore(row.results)
      const date = new Date(row.createdAt)
      if (score === null || Number.isNaN(date.getTime())) continue
      points.push({ date: date.toISOString(), score, source })
    }
  }
  add(diagnostics, 'diagnostic')
  // 'practice-test' is the source ScorePredictor colors as "Practice".
  add(practiceExams, 'practice-test')
  return points.sort((a, b) => a.date.localeCompare(b.date))
}

/**
 * Which exit-quiz attempts belong to the course. An attempt on a DB topic
 * counts only when that topic is in THIS course; the substring `slugPrefix`
 * match is a fallback for slugs that are not DB topics (course-level or
 * legacy slugs). Without the ownership check, AP Physics 1 ('physics') pulled
 * in Physics 2 and Physics C quizzes, and AP Bio ('bio') pulled in MCAT
 * biochemistry.
 */
export function quizBelongsToCourse(
  topicSlug: string,
  slugPrefix: string,
  courseTopicSlugs: Set<string>,
  topicCourseBySlug: Map<string, string>,
): boolean {
  if (courseTopicSlugs.has(topicSlug)) return true
  if (topicCourseBySlug.has(topicSlug)) return false
  return topicSlug.includes(slugPrefix)
}

/**
 * Query quiz + topic data for a given subject slug prefix.
 * `slugPrefix` is the fallback match on exitQuizAttempt.topicSlug (e.g. "calcab", "chem").
 * `courseSlugPattern` is the DB Course.slug (e.g. "ap-calculus-ab").
 * `diagnosticCategory` is the DiagnosticTest.category prefix the course's diagnostic writes.
 */
export async function gatherSubjectData(
  userId: string,
  slugPrefix: string,
  courseSlugPattern: string,
  diagnosticCategory?: string,
  options: GatherOptions = {},
) {
  const { practiceExamCategory } = options
  const fetchData = unstable_cache(
    async () => {
      const [exitQuizAttempts, topicProgress, courseTopics, diagnosticTests, practiceExams] = await Promise.all([
        prisma.exitQuizAttempt.findMany({
          where: { userId },
          orderBy: { completedAt: 'asc' },
          select: { topicSlug: true, score: true, totalQuestions: true, passed: true, completedAt: true },
        }),
        prisma.topicProgress.findMany({
          where: { userId, topic: courseTopicWhere(courseSlugPattern) },
          select: { status: true, topic: { select: { slug: true } } },
        }),
        prisma.topic.findMany({
          where: courseTopicWhere(courseSlugPattern),
          select: { slug: true, category: { select: { slug: true } } },
        }),
        diagnosticCategory
          ? prisma.diagnosticTest.findMany({
              where: { userId, category: { startsWith: diagnosticCategory } },
              orderBy: { createdAt: 'asc' },
              select: { results: true, createdAt: true },
            })
          : Promise.resolve([]),
        practiceExamCategory
          ? prisma.diagnosticTest.findMany({
              where: { userId, category: practiceExamCategory },
              orderBy: { createdAt: 'asc' },
              select: { results: true, createdAt: true },
            })
          : Promise.resolve([]),
      ])
      // Which course owns each quizzed topic, so another course's quizzes
      // never leak in through the prefix fallback.
      const quizSlugs = [...new Set(exitQuizAttempts.map(a => a.topicSlug))]
      const quizTopics = quizSlugs.length > 0
        ? await prisma.topic.findMany({
            where: { slug: { in: quizSlugs } },
            select: { slug: true, category: { select: { course: { select: { slug: true } } } } },
          })
        : []
      return { exitQuizAttempts, topicProgress, courseTopics, diagnosticTests, practiceExams, quizTopics }
    },
    [`score-predictor-${userId}-${courseSlugPattern}`],
    { revalidate: 300 }
  )

  const { exitQuizAttempts, topicProgress, courseTopics, diagnosticTests, practiceExams, quizTopics } = await fetchData()

  const courseTopicSlugs = new Set(courseTopics.map(t => t.slug))
  const topicCourseBySlug = new Map(quizTopics.map(t => [t.slug, t.category.course.slug]))
  const subjectQuizzes = exitQuizAttempts.filter(a =>
    quizBelongsToCourse(a.topicSlug, slugPrefix, courseTopicSlugs, topicCourseBySlug),
  )
  const quizzesAttempted = subjectQuizzes.length
  const quizPassRate = quizzesAttempted > 0
    ? Math.round((subjectQuizzes.filter(a => a.passed).length / quizzesAttempted) * 100)
    : 0
  const avgPct = quizzesAttempted > 0
    ? subjectQuizzes.reduce((s, a) => s + a.score / a.totalQuestions, 0) / quizzesAttempted
    : 0

  const recentQuizzes = subjectQuizzes.slice(-10)
  const recentAvg = recentQuizzes.length > 0
    ? Math.round((recentQuizzes.reduce((s, a) => s + a.score / a.totalQuestions, 0) / recentQuizzes.length) * 100)
    : Math.round(avgPct * 100)

  const { totalTopics, masteredTopics, masteryRate } = courseMastery(
    liveTopicSlugs(courseTopics.map(t => ({ slug: t.slug, categorySlug: t.category.slug }))),
    topicProgress.map(tp => ({ topicSlug: tp.topic.slug, status: tp.status })),
  )

  const trend = buildScoreTrend(diagnosticTests, practiceExams)

  const confidence: 'high' | 'medium' | 'low' =
    quizzesAttempted >= 10 ? 'high' : quizzesAttempted >= 3 ? 'medium' : 'low'

  return {
    subjectQuizzes,
    avgPct,
    stats: { totalTopics, masteredTopics, masteryRate, quizzesAttempted, quizPassRate, recentAvg } as BasicStats,
    trend,
    confidence,
    masteryRate: masteryRate / 100,
  }
}

/**
 * Every AP score predictor, keyed by its route name (/api/<key>-score-predictor).
 * `classPlanKey` points at CLASS_PLAN_COURSES, the registry whose diagnostic
 * category prefixes and DB course slugs are verified against each AP
 * diagnostic's submit page and history route — so the predictor can no longer
 * drift to a prefix no diagnostic writes (it had 'chem-diagnostic',
 * 'bio-diagnostic', 'physics1-diagnostic', 'psych-diagnostic', none for
 * Physics 2 or Statistics, and course slugs 'ap-united-states-*' that no DB
 * course has). `practiceExamKey` is the AP_PRACTICE_EXAMS key.
 * `quizPrefix` is only the fallback for non-topic exit-quiz slugs.
 */
export const AP_SCORE_PREDICTORS: Record<string, { classPlanKey: string; practiceExamKey: string; quizPrefix: string }> = {
  'ap-african-american-studies': { classPlanKey: 'ap-aas', practiceExamKey: 'ap-african-american-studies', quizPrefix: 'aas' },
  'ap-bio': { classPlanKey: 'ap-bio', practiceExamKey: 'ap-bio', quizPrefix: 'bio' },
  'ap-calcab': { classPlanKey: 'calcab', practiceExamKey: 'ap-calcab', quizPrefix: 'calcab' },
  'ap-calcbc': { classPlanKey: 'calcbc', practiceExamKey: 'ap-calcbc', quizPrefix: 'calcbc' },
  'ap-chem': { classPlanKey: 'ap-chem', practiceExamKey: 'ap-chem', quizPrefix: 'chem' },
  'ap-csa': { classPlanKey: 'ap-csa', practiceExamKey: 'ap-csa', quizPrefix: 'csa' },
  'ap-csp': { classPlanKey: 'ap-csp', practiceExamKey: 'ap-csp', quizPrefix: 'csp' },
  'ap-english-lang': { classPlanKey: 'ap-english-lang', practiceExamKey: 'ap-english-lang', quizPrefix: 'englang' },
  'ap-english-lit': { classPlanKey: 'ap-english-lit', practiceExamKey: 'ap-english-lit', quizPrefix: 'englit' },
  'ap-enviro': { classPlanKey: 'ap-enviro', practiceExamKey: 'ap-enviro', quizPrefix: 'apes' },
  'ap-human-geo': { classPlanKey: 'ap-human-geo', practiceExamKey: 'ap-human-geo', quizPrefix: 'hg' },
  'ap-macro': { classPlanKey: 'ap-macro', practiceExamKey: 'ap-macro', quizPrefix: 'macro' },
  'ap-micro': { classPlanKey: 'ap-micro', practiceExamKey: 'ap-micro', quizPrefix: 'micro' },
  'ap-physics-c-em': { classPlanKey: 'ap-physics-c-em', practiceExamKey: 'ap-physics-c-em', quizPrefix: 'physics-c' },
  'ap-physics-c-mech': { classPlanKey: 'ap-physics-c-mech', practiceExamKey: 'ap-physics-c-mech', quizPrefix: 'physics-c' },
  'ap-physics1': { classPlanKey: 'ap-physics1', practiceExamKey: 'ap-physics1', quizPrefix: 'physics' },
  'ap-physics2': { classPlanKey: 'ap-physics2', practiceExamKey: 'ap-physics2', quizPrefix: 'ap-physics-2' },
  'ap-precalculus': { classPlanKey: 'ap-precalculus', practiceExamKey: 'ap-precalc', quizPrefix: 'precalc' },
  'ap-psych': { classPlanKey: 'ap-psych', practiceExamKey: 'ap-psych', quizPrefix: 'psych' },
  'ap-stats': { classPlanKey: 'ap-stats', practiceExamKey: 'ap-stats', quizPrefix: 'ap-statistics' },
  'ap-us-gov': { classPlanKey: 'ap-us-gov', practiceExamKey: 'ap-us-gov', quizPrefix: 'gov' },
  'ap-us-history': { classPlanKey: 'ap-us-history', practiceExamKey: 'ap-us-history', quizPrefix: 'apush' },
  'ap-world-history': { classPlanKey: 'ap-world-history', practiceExamKey: 'ap-world-history', quizPrefix: 'wh' },
}

/** The gatherSubjectData arguments for an AP predictor key (throws on an unknown key). */
export function apPredictorArgs(key: string): { slugPrefix: string; courseSlug: string; diagnosticCategory: string; practiceExamCategory: string } {
  const entry = AP_SCORE_PREDICTORS[key]
  const course = entry ? classPlanCourse(entry.classPlanKey) : null
  if (!entry || !course?.courseSlug) throw new Error(`Unknown AP score predictor: ${key}`)
  return {
    slugPrefix: entry.quizPrefix,
    courseSlug: course.courseSlug,
    diagnosticCategory: course.categoryPrefix,
    practiceExamCategory: apPracticeCategory(entry.practiceExamKey),
  }
}

/**
 * The full AP predictor response: quiz/mastery blend mapped onto the shared
 * 1–5 AP scale, plus the diagnostic and practice-exam score history.
 */
export async function apPredictorResponse(userId: string, key: string) {
  const { slugPrefix, courseSlug, diagnosticCategory, practiceExamCategory } = apPredictorArgs(key)
  const { avgPct, stats, trend, confidence, masteryRate } = await gatherSubjectData(
    userId, slugPrefix, courseSlug, diagnosticCategory, { practiceExamCategory },
  )
  const predictedScore = mapToAPScore(avgPct, masteryRate)
  trend.push({ date: new Date().toISOString(), score: predictedScore, source: 'prediction' })
  return {
    prediction: { primaryScore: predictedScore, maxScore: 5, confidence },
    stats,
    trend,
  }
}

/** Map average quiz percentage (0–1) to an AP score (1–5). */
export function mapToAPScore(avgPct: number, masteryRate: number): number {
  // Blend 70% quiz performance + 30% mastery rate
  const blended = avgPct * 0.7 + masteryRate * 0.3
  // Same 1–5 scale as the diagnostics and practice exams (src/lib/ap-scoring.ts).
  // Rounded to 0.1 point so float noise (0.7 * 0.7 + 0.7 * 0.3) can't slip under a cutoff.
  return estimateApScore(Math.round(blended * 1000) / 10)
}

/**
 * Map average quiz percentage (0–1) to an ACT section score (1–36) through
 * the shared anchor curve in @/lib/act-scoring (the same curve behind the
 * diagnostic), replacing the old linear `round(pct * 36)` map that ran hot
 * at the top of the scale.
 */
export function mapToACTScore(avgPct: number): number {
  return actSectionScaled(avgPct)
}

/**
 * Classify an MCAT topic slug into its exam section, mirroring the diagnostic
 * generator's domain→section assignment (biochemistry counts toward
 * Chem/Phys, like the diagnostic's `biochem-cp` domain). Returns null for
 * slugs that don't clearly belong to one section (e.g. cross-cutting
 * strategy/quantitative topics).
 */
export function mcatSectionForTopicSlug(slug: string): MCATSection | null {
  if (/cars/i.test(slug)) return 'cars'
  if (/psych|sociolog/i.test(slug)) return 'psych-soc'
  if (/biolog|molecular|microbio|anatomy|physiolog|organ-systems|genetic|immuno/i.test(slug)) {
    return 'bio-biochem'
  }
  if (/biochem|chemistry|physics/i.test(slug)) return 'chem-phys'
  return null
}

/**
 * Map quiz performance to a total MCAT score (472-528) using the shared
 * percentile-anchored section curve from @/lib/mcat-scoring (the same curve
 * behind the diagnostic and full-length exam) instead of a flat linear map.
 *
 * The blend stays 75% quiz performance + 25% mastery rate. When per-section
 * quiz averages (0-1) are available, each attempted section is scaled through
 * the anchor curve individually and unattempted sections fall back to the
 * overall blend; without section data, the overall blend is pushed through
 * the same curve once and applied to all four sections.
 */
export function mapToMCATScore(
  avgPct: number,
  masteryRate: number,
  sectionAvgs?: Partial<Record<MCATSection, number>>,
): number {
  const blend = (pct: number) => Math.max(0, Math.min(1, pct * 0.75 + masteryRate * 0.25))
  const overallSectionScaled = sectionScaledScore(blend(avgPct))

  const total =
    sectionAvgs && Object.keys(sectionAvgs).length > 0
      ? MCAT_SECTION_ORDER.reduce((sum, section) => {
          const pct = sectionAvgs[section]
          return sum + (typeof pct === 'number' ? sectionScaledScore(blend(pct)) : overallSectionScaled)
        }, 0)
      : overallSectionScaled * 4

  return Math.max(472, Math.min(528, total))
}
