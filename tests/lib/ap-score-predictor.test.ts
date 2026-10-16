/**
 * AP score predictors (src/lib/score-predictor-utils.ts + /api/ap-*-score-predictor).
 *
 * Regressions guarded here:
 *   - The diagnostic trend read only `results.estimatedScore`; every AP
 *     diagnostic and practice exam stores `estimatedAPScore`, so AP trends were
 *     always empty. Cached rows also arrive with string dates.
 *   - Chem, Bio, Physics 1 and Psych passed diagnostic prefixes no diagnostic
 *     writes ('chem-diagnostic' vs 'ap-chem-diagnostic-1'); Physics 2 and
 *     Statistics passed none; US Gov and APUSH named DB courses that don't exist.
 *   - Mastery divided by the topics the student had touched, not the course.
 *   - Exit quizzes from other courses leaked in through the substring prefix.
 *   - Predictor pages linked to /chem-diagnostic, /bio-diagnostic,
 *     /physics1-diagnostic, /psych-diagnostic and /calcab-practice (all 404).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'

const mock = {
  exitQuizAttempt: vi.fn(),
  topicProgress: vi.fn(),
  topicFindMany: vi.fn(),
  diagnosticTest: vi.fn(),
}

vi.mock('@/lib/prisma', () => ({
  prisma: {
    exitQuizAttempt: { findMany: (...a: unknown[]) => mock.exitQuizAttempt(...a) },
    topicProgress: { findMany: (...a: unknown[]) => mock.topicProgress(...a) },
    topic: { findMany: (...a: unknown[]) => mock.topicFindMany(...a) },
    diagnosticTest: { findMany: (...a: unknown[]) => mock.diagnosticTest(...a) },
  },
}))
vi.mock('next/cache', () => ({ unstable_cache: (fn: (...a: unknown[]) => unknown) => fn }))

import {
  AP_SCORE_PREDICTORS,
  apPredictorArgs,
  apPredictorResponse,
  buildScoreTrend,
  courseMastery,
  gatherSubjectData,
  liveTopicSlugs,
  quizBelongsToCourse,
  storedEstimatedScore,
} from '@/lib/score-predictor-utils'
import { CLASS_PLAN_COURSES, diagnosticRouteForKey } from '@/lib/class-plan-config'
import { AP_PRACTICE_EXAMS } from '@/lib/ap-practice-exams'

const ROOT = path.resolve(__dirname, '../..')
const APP = path.join(ROOT, 'src/app')

describe('trend reads the AP score', () => {
  it('reads estimatedScore or estimatedAPScore', () => {
    expect(storedEstimatedScore({ estimatedScore: 510 })).toBe(510)
    expect(storedEstimatedScore({ estimatedAPScore: 4 })).toBe(4)
    expect(storedEstimatedScore({ percentage: 60 })).toBeNull()
    expect(storedEstimatedScore(null)).toBeNull()
  })

  it('builds a dated, ordered trend from diagnostics and practice exams, string dates included', () => {
    const trend = buildScoreTrend(
      [
        { results: { estimatedAPScore: 2 }, createdAt: new Date('2026-09-01T00:00:00.000Z') },
        // unstable_cache hands back JSON: the Date is a string on a cache hit.
        { results: { estimatedAPScore: 3 }, createdAt: '2026-09-20T00:00:00.000Z' },
        { results: { percentage: 50 }, createdAt: '2026-09-21T00:00:00.000Z' },
      ],
      [{ results: { estimatedAPScore: 4 }, createdAt: '2026-09-10T00:00:00.000Z' }],
    )
    expect(trend).toEqual([
      { date: '2026-09-01T00:00:00.000Z', score: 2, source: 'diagnostic' },
      { date: '2026-09-10T00:00:00.000Z', score: 4, source: 'practice-test' },
      { date: '2026-09-20T00:00:00.000Z', score: 3, source: 'diagnostic' },
    ])
  })
})

describe('mastery is measured over the whole live course', () => {
  it('drops retired topics and topics in retired units', () => {
    const live = liveTopicSlugs([
      { slug: 'limits', categorySlug: 'calcab-limits' },
      { slug: 'newtons-method', categorySlug: 'calcab-applications' }, // retired topic
      { slug: 'some-topic', categorySlug: 'advanced-integration' }, // retired unit
    ])
    expect([...live]).toEqual(['limits'])
  })

  it('divides by every live topic, not just the touched ones', () => {
    const live = new Set(Array.from({ length: 40 }, (_, i) => `t${i}`))
    const m = courseMastery(live, [
      { topicSlug: 't0', status: 'MASTERED' },
      { topicSlug: 't1', status: 'MASTERED' },
      { topicSlug: 't2', status: 'IN_PROGRESS' },
      { topicSlug: 'retired-or-other', status: 'MASTERED' },
    ])
    expect(m).toEqual({ totalTopics: 40, masteredTopics: 2, masteryRate: 5 })
    expect(courseMastery(new Set(), [])).toEqual({ totalTopics: 0, masteredTopics: 0, masteryRate: 0 })
  })
})

describe('exit quizzes are scoped to the course', () => {
  it('keeps course topics, rejects other courses\' topics, and falls back to the prefix for non-topic slugs', () => {
    const course = new Set(['kinematics'])
    const owner = new Map([['kinematics', 'ap-physics-1'], ['electrostatics-physics-2', 'ap-physics-2'], ['biochem-enzymes', 'mcat-prep']])
    expect(quizBelongsToCourse('kinematics', 'physics', course, owner)).toBe(true)
    expect(quizBelongsToCourse('electrostatics-physics-2', 'physics', course, owner)).toBe(false)
    expect(quizBelongsToCourse('biochem-enzymes', 'bio', course, owner)).toBe(false)
    expect(quizBelongsToCourse('ap-physics-1', 'physics', course, owner)).toBe(true)
  })
})

describe('gatherSubjectData (mocked DB)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mock.exitQuizAttempt.mockResolvedValue([
      { topicSlug: 'stoichiometry', score: 8, totalQuestions: 10, passed: true, completedAt: new Date() },
      { topicSlug: 'chemistry-mcat-acids', score: 1, totalQuestions: 10, passed: false, completedAt: new Date() },
    ])
    mock.topicProgress.mockResolvedValue([{ status: 'MASTERED', topic: { slug: 'stoichiometry' } }])
    mock.topicFindMany.mockImplementation((args: { where: { slug?: unknown } }) =>
      args.where.slug
        ? Promise.resolve([
            { slug: 'stoichiometry', category: { course: { slug: 'ap-chemistry' } } },
            { slug: 'chemistry-mcat-acids', category: { course: { slug: 'mcat-prep' } } },
          ])
        : Promise.resolve(Array.from({ length: 4 }, (_, i) => ({ slug: i === 0 ? 'stoichiometry' : `chem-${i}`, category: { slug: 'chem-unit' } }))),
    )
    mock.diagnosticTest.mockImplementation((args: { where: { category: unknown } }) =>
      Promise.resolve(
        typeof args.where.category === 'string'
          ? [{ results: { estimatedAPScore: 4 }, createdAt: '2026-09-15T00:00:00.000Z' }]
          : [{ results: { estimatedAPScore: 2 }, createdAt: '2026-09-01T00:00:00.000Z' }],
      ),
    )
  })

  it('queries the real AP Chem diagnostic prefix and practice exam, and scores the trend', async () => {
    const body = await apPredictorResponse('u1', 'ap-chem')
    const categories = mock.diagnosticTest.mock.calls.map((c) => c[0].where.category)
    expect(categories).toEqual([{ startsWith: 'ap-chem-diagnostic' }, 'ap-practice-exam:ap-chem'])
    expect(mock.topicFindMany.mock.calls[0][0].where).toEqual({ category: { course: { slug: 'ap-chemistry' } } })
    expect(body.trend.slice(0, 2)).toEqual([
      { date: '2026-09-01T00:00:00.000Z', score: 2, source: 'diagnostic' },
      { date: '2026-09-15T00:00:00.000Z', score: 4, source: 'practice-test' },
    ])
    expect(body.trend[2].source).toBe('prediction')
    expect(body.prediction.maxScore).toBe(5)
    // 1 of the 4 course topics, and only the AP quiz counted (not the MCAT one).
    expect(body.stats).toMatchObject({ totalTopics: 4, masteredTopics: 1, masteryRate: 25, quizzesAttempted: 1, recentAvg: 80 })
  })

  it('skips the practice-exam query when no category is given', async () => {
    await gatherSubjectData('u1', 'chem', 'ap-chemistry', 'ap-chem-diagnostic')
    expect(mock.diagnosticTest).toHaveBeenCalledTimes(1)
  })
})

describe('every AP predictor points at real data', () => {
  const seedSource = fs
    .readdirSync(path.join(ROOT, 'prisma'))
    .filter((f) => /^seed.*\.ts$/.test(f))
    .map((f) => fs.readFileSync(path.join(ROOT, 'prisma', f), 'utf8'))
    .join('\n')

  for (const key of Object.keys(AP_SCORE_PREDICTORS)) {
    it(`${key}: diagnostic prefix, course and practice exam`, () => {
      const args = apPredictorArgs(key)
      // The prefix is exactly what the course's diagnostic page submits.
      const route = diagnosticRouteForKey(AP_SCORE_PREDICTORS[key].classPlanKey)
      const page = fs.readFileSync(path.join(APP, route, 'page.tsx'), 'utf8')
      expect(page).toContain('category: `' + args.diagnosticCategory + '-${')
      // A real, seeded DB course.
      expect(seedSource).toContain(`slug: '${args.courseSlug}'`)
      // The practice exam belongs to the same course.
      const exam = AP_PRACTICE_EXAMS[AP_SCORE_PREDICTORS[key].practiceExamKey]
      expect(exam?.courseSlug).toBe(args.courseSlug)
    })
  }

  it('covers every AP course with a diagnostic, and every AP predictor route uses the table', () => {
    const apClassKeys = CLASS_PLAN_COURSES.filter((c) => c.courseSlug?.startsWith('ap-')).map((c) => c.key).sort()
    expect(Object.values(AP_SCORE_PREDICTORS).map((e) => e.classPlanKey).sort()).toEqual(apClassKeys)

    const routeDirs = fs.readdirSync(path.join(APP, 'api')).filter((d) => /^ap-.+-score-predictor$/.test(d))
    expect(routeDirs.map((d) => d.replace(/-score-predictor$/, '')).sort()).toEqual(Object.keys(AP_SCORE_PREDICTORS).sort())
    for (const dir of routeDirs) {
      const src = fs.readFileSync(path.join(APP, 'api', dir, 'route.ts'), 'utf8')
      const key = dir.replace(/-score-predictor$/, '')
      expect(src, dir).toContain(`apPredictorResponse(session.user.id, '${key}')`)
    }
  })

  it('throws on an unknown key', () => {
    expect(() => apPredictorArgs('ap-nope')).toThrow()
  })
})

describe('AP predictor pages link to pages that exist', () => {
  const dbCourseSlugs = new Set(CLASS_PLAN_COURSES.map((c) => c.courseSlug).filter(Boolean))
  const pages = fs.readdirSync(APP).filter((d) => /^ap-.+-score-predictor$/.test(d))

  for (const dir of pages) {
    it(dir, () => {
      const src = fs.readFileSync(path.join(APP, dir, 'page.tsx'), 'utf8')
      const hrefs = [...src.matchAll(/href:\s*'([^']+)'/g)].map((m) => m[1])
      for (const href of hrefs) {
        const courses = /^\/courses\/([^/?#]+)$/.exec(href)
        if (courses) {
          expect(dbCourseSlugs.has(courses[1]), href).toBe(true)
        } else {
          expect(fs.existsSync(path.join(APP, href, 'page.tsx')), href).toBe(true)
        }
      }
    })
  }

  it('AP Precalculus scores on the 1-5 AP scale like its diagnostic', () => {
    const src = fs.readFileSync(path.join(APP, 'ap-precalculus-score-predictor/page.tsx'), 'utf8')
    expect(src).toContain('maxScore={5}')
  })
})
