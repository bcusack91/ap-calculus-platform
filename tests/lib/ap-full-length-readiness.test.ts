/**
 * AP calendar, full-length readiness and score goal (Phase 2 gap 3).
 *
 * - Every AP class-plan course is a readiness course whose full-length is its
 *   registered practice exam (any form), 2 cycles to the next one.
 * - The calendar schedules an AP cycle (lessons, the recommended cycle test,
 *   the next diagnostic) exactly like the SAT, keeping moved tasks.
 * - Readiness replays the AP diagnostic and resets on an
 *   'ap-practice-exam:<key>' attempt.
 * - Outside AP scores are 1–5 with no sections.
 */
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it, expect, vi, beforeEach } from 'vitest'

const h = vi.hoisted(() => ({
  diagFindMany: vi.fn(),
  extFindMany: vi.fn(),
  exitFindMany: vi.fn(),
  topicFindMany: vi.fn(),
  progressFindMany: vi.fn(),
  unitFindMany: vi.fn(),
  memberFindMany: vi.fn(),
  classDiagFindMany: vi.fn(),
  planFindFirst: vi.fn(),
  planCreate: vi.fn(),
  planUpdate: vi.fn(),
  taskFindMany: vi.fn(),
  taskCreateMany: vi.fn(),
  taskUpdate: vi.fn(),
  taskDeleteMany: vi.fn(),
  transaction: vi.fn(),
  genericPlan: vi.fn(),
}))

vi.mock('@/lib/prisma', () => ({
  prisma: {
    diagnosticTest: { findMany: (...a: unknown[]) => h.diagFindMany(...a), findFirst: vi.fn().mockResolvedValue(null) },
    externalExamScore: { findMany: (...a: unknown[]) => h.extFindMany(...a) },
    exitQuizAttempt: { findMany: (...a: unknown[]) => h.exitFindMany(...a) },
    topic: { findMany: (...a: unknown[]) => h.topicFindMany(...a) },
    topicProgress: { findMany: (...a: unknown[]) => h.progressFindMany(...a) },
    mcatUnitTest: { findMany: (...a: unknown[]) => h.unitFindMany(...a) },
    satTestAttempt: { findMany: vi.fn().mockResolvedValue([]) },
    classroomMember: { findMany: (...a: unknown[]) => h.memberFindMany(...a) },
    classDiagnostic: { findMany: (...a: unknown[]) => h.classDiagFindMany(...a) },
    studyPlan: {
      findFirst: (...a: unknown[]) => h.planFindFirst(...a),
      create: (...a: unknown[]) => h.planCreate(...a),
      update: (...a: unknown[]) => h.planUpdate(...a),
    },
    studyTask: {
      findMany: (...a: unknown[]) => h.taskFindMany(...a),
      createMany: (...a: unknown[]) => h.taskCreateMany(...a),
      update: (...a: unknown[]) => h.taskUpdate(...a),
      deleteMany: (...a: unknown[]) => h.taskDeleteMany(...a),
    },
    $transaction: (...a: unknown[]) => h.transaction(...a),
  },
}))
vi.mock('@/lib/act-plan', () => ({ buildGenericPlanStatus: (...a: unknown[]) => h.genericPlan(...a) }))
vi.mock('@/lib/mcat-plan', () => ({ buildMcatPlanStatus: vi.fn() }))
vi.mock('@/lib/sat-plan', () => ({ buildSatPlan: vi.fn(), trackSlugFor: (s: string) => s }))

import {
  AP_CYCLES_REQUIRED,
  FULL_LENGTH_COURSES,
  aOrAn,
  apPracticeKeyFor,
  isApFullLengthCourse,
  isFullLengthCourse,
} from '@/lib/full-length-progress'
import { fullLengthReadiness, recommendedSlugs } from '@/lib/full-length-progress-server'
import { syncCycleSchedule } from '@/lib/cycle-scheduler-server'
import { cycleUnitsFromPlan, planSchedule } from '@/lib/cycle-scheduler'
import { AP_PRACTICE_EXAMS } from '@/lib/ap-practice-exams'
import { AP_UNIT_TEST_COURSES } from '@/lib/unit-test-courses'
import { classPlanCourse } from '@/lib/class-plan-config'
import { externalScoreConfig, isExternalScoreCourse, validateExternalScore } from '@/lib/external-score-courses'

const day = (iso: string) => new Date(`${iso}T12:00:00Z`)
const ymd = (d: Date) => d.toISOString().slice(0, 10)
const FLAGSHIPS = ['ap-chem', 'ap-bio', 'ap-physics1', 'calcab'] as const

describe('AP readiness config', () => {
  it('covers every AP class-plan course, the four flagships included', () => {
    for (const k of AP_UNIT_TEST_COURSES) {
      expect(isFullLengthCourse(k)).toBe(true)
      expect(isApFullLengthCourse(k)).toBe(true)
    }
    for (const k of FLAGSHIPS) expect(isApFullLengthCourse(k)).toBe(true)
    expect(isApFullLengthCourse('mcat')).toBe(false)
    expect(isApFullLengthCourse('sat')).toBe(false)
    expect(isFullLengthCourse('act')).toBe(false)
  })

  it.each([...AP_UNIT_TEST_COURSES])('%s: full-length = its registered practice exam, 2 cycles, cycle test recommended', (k) => {
    const cfg = FULL_LENGTH_COURSES[k]
    const exam = AP_PRACTICE_EXAMS[apPracticeKeyFor(k)]
    expect(exam, `no AP_PRACTICE_EXAMS entry for ${k}`).toBeDefined()
    expect(exam.courseSlug).toBe(classPlanCourse(k)?.courseSlug)
    expect(cfg.apPracticeKey).toBe(apPracticeKeyFor(k))
    expect(cfg.fullLengthHref).toBe(exam.path)
    expect(cfg.cyclesRequired).toBe(AP_CYCLES_REQUIRED)
    expect(AP_CYCLES_REQUIRED).toBe(2)
    expect(cfg.unitTestRequired).toBe(false)
    expect(cfg.total).toEqual({ min: 1, max: 5 })
    expect(cfg.sections).toEqual([])
    expect(cfg.diagnosticCategoryPrefix).toBe(classPlanCourse(k)?.categoryPrefix)
    expect(existsSync(join(process.cwd(), 'src/app', cfg.coursePage.slice(1), 'page.tsx')), `hub ${cfg.coursePage}`).toBe(true)
    // The practice-exam category never matches the course's diagnostic prefix.
    expect(`ap-practice-exam:${apPracticeKeyFor(k)}`.startsWith(cfg.diagnosticCategoryPrefix)).toBe(false)
  })

  it('keeps the MCAT and SAT settings', () => {
    expect(FULL_LENGTH_COURSES.mcat).toMatchObject({ cyclesRequired: 4, unitTestRequired: true, diagnosticCategoryPrefix: 'mcat-full-diagnostic', coursePage: '/mcat' })
    expect(FULL_LENGTH_COURSES.sat).toMatchObject({ cyclesRequired: 2, unitTestRequired: false, diagnosticCategoryPrefix: 'sat-full-diagnostic', coursePage: '/sat' })
    expect(FULL_LENGTH_COURSES.mcat.apPracticeKey).toBeUndefined()
  })

  it('picks the right article for every label it is used with', () => {
    expect(aOrAn('AP Chemistry practice exam')).toBe('an')
    expect(aOrAn('AP exam or released practice exam')).toBe('an')
    expect(aOrAn('AAMC full-length')).toBe('an')
    expect(aOrAn('MCAT full-length')).toBe('an')
    expect(aOrAn('College Board / Bluebook practice test')).toBe('a')
    expect(aOrAn('ACT')).toBe('an')
    expect(aOrAn('practice exam')).toBe('a')
    expect(aOrAn('outside test')).toBe('an')
  })
})

describe('AP outside scores', () => {
  it('take a 1–5 total and no sections, and count as a full-length', () => {
    expect(isExternalScoreCourse('ap-chem')).toBe(true)
    const cfg = externalScoreConfig('ap-chem')
    expect(cfg).toMatchObject({ label: 'AP Chemistry', total: { min: 1, max: 5 }, sections: [], countsAsFullLength: true })
    expect(cfg.externalSources).toContain('Official AP Exam')
    expect(validateExternalScore('calcab', 4, undefined)).toEqual({ ok: true, sections: {} })
    expect(validateExternalScore('calcab', 0, undefined).ok).toBe(false)
    expect(validateExternalScore('calcab', 6, undefined).ok).toBe(false)
    // Unknown section keys are dropped.
    expect(validateExternalScore('ap-bio', 3, { math: 700 })).toEqual({ ok: true, sections: {} })
  })
})

describe('AP cycle scheduling (pure)', () => {
  const units = cycleUnitsFromPlan({
    course: 'ap-chem',
    diagnosticId: 'd1',
    topics: [
      { slug: 'a', name: 'A', isSatisfied: true },
      { slug: 'b', name: 'B', isSatisfied: false },
      { slug: 'c', name: 'C', isSatisfied: false },
    ],
    unitTestPassed: false,
  })

  it('names the recommended cycle test and the next diagnostic', () => {
    expect(units.map((u) => [u.key, u.type, u.title])).toEqual([
      ['cycle:d1:a', 'LESSON', 'A'],
      ['cycle:d1:b', 'LESSON', 'B'],
      ['cycle:d1:c', 'LESSON', 'C'],
      ['cycle:d1:unit-test', 'UNIT_TEST', 'AP Chemistry cycle test (recommended)'],
      ['cycle:d1:diagnostic', 'DIAGNOSTIC', 'AP Chemistry diagnostic (next cycle)'],
    ])
  })

  it('lessons up to two days before the due date, cycle test the day before, diagnostic on the day', () => {
    const by = Object.fromEntries(planSchedule(units, day('2026-10-16'), day('2026-10-22')).map((u) => [u.key, ymd(u.autoDueDate)]))
    expect(by['cycle:d1:a']).toBe('2026-10-16')
    expect(by['cycle:d1:b'] < by['cycle:d1:c']).toBe(true)
    expect(by['cycle:d1:c'] <= '2026-10-20').toBe(true)
    expect(by['cycle:d1:unit-test']).toBe('2026-10-21')
    expect(by['cycle:d1:diagnostic']).toBe('2026-10-22')
  })
})

describe('AP cycle scheduling (syncCycleSchedule)', () => {
  const plan = { id: 'plan-1', examDate: null as Date | null }
  beforeEach(() => {
    vi.clearAllMocks()
    h.genericPlan.mockResolvedValue({
      hasDiagnostic: true,
      diagnosticId: 'diag-1',
      recommendedTopics: [
        { slug: 'stoichiometry', name: 'Stoichiometry', isSatisfied: false },
        { slug: 'gas-laws', name: 'Gas Laws', isSatisfied: true },
        { slug: 'equilibrium', name: 'Equilibrium', isSatisfied: false },
      ],
      pendingTopics: [],
      unitTest: { passed: false },
    })
    h.planFindFirst.mockResolvedValue(plan)
    h.planUpdate.mockResolvedValue(plan)
    h.taskFindMany.mockResolvedValue([])
    h.memberFindMany.mockResolvedValue([])
    h.transaction.mockResolvedValue([])
    h.taskCreateMany.mockImplementation((args: unknown) => args)
    h.taskUpdate.mockImplementation((args: unknown) => args)
  })

  it('builds the AP plan with the generic builder and schedules every unit to the target date', async () => {
    const res = await syncCycleSchedule('stu-1', 'ap-chem', { dueDate: day('2026-10-26'), now: day('2026-10-16') })
    expect(h.genericPlan).toHaveBeenCalledWith('stu-1', 'ap-chem')
    expect(res).toMatchObject({ planId: 'plan-1', diagnosticId: 'diag-1', created: 5, updated: 0, removed: 0 })
    // The self target is saved on the cycle plan.
    expect(h.planUpdate).toHaveBeenCalledWith({ where: { id: 'plan-1' }, data: { examDate: day('2026-10-26') } })
    const data = (h.taskCreateMany.mock.calls[0][0] as { data: { sourceKey: string; dueDate: Date; completed: boolean; planId: string }[] }).data
    const by = Object.fromEntries(data.map((t) => [t.sourceKey, t]))
    expect(by['cycle:diag-1:gas-laws'].completed).toBe(true)
    expect(ymd(by['cycle:diag-1:unit-test'].dueDate)).toBe('2026-10-25')
    expect(ymd(by['cycle:diag-1:diagnostic'].dueDate)).toBe('2026-10-26')
    expect(data.every((t) => t.planId === 'plan-1')).toBe(true)
  })

  it('a teacher due date on an AP class diagnostic beats the self target', async () => {
    h.memberFindMany.mockResolvedValue([{ classroomId: 'c1' }])
    // Oct 24 end-of-day in New York.
    h.classDiagFindMany.mockResolvedValue([{ id: 'cd1', dueDate: new Date('2026-10-25T03:59:59.999Z'), createdAt: day('2026-10-01'), testData: {}, classroom: { name: 'Period 3' }, attempts: [] }])
    h.planFindFirst.mockResolvedValue({ ...plan, examDate: day('2026-11-30') })
    await syncCycleSchedule('stu-1', 'ap-chem', { now: day('2026-10-16') })
    expect(h.classDiagFindMany.mock.calls[0][0]).toMatchObject({ where: { courseKey: 'ap-chem' } })
    const data = (h.taskCreateMany.mock.calls[0][0] as { data: { sourceKey: string; dueDate: Date }[] }).data
    expect(ymd(data.find((t) => t.sourceKey === 'cycle:diag-1:diagnostic')!.dueDate)).toBe('2026-10-24')
  })

  it('never moves a task the student moved', async () => {
    h.taskFindMany.mockResolvedValue([
      { id: 't-moved', sourceKey: 'cycle:diag-1:stoichiometry', title: 'Stoichiometry', dueDate: day('2026-10-30'), autoDueDate: day('2026-10-17'), completed: false },
    ])
    await syncCycleSchedule('stu-1', 'ap-chem', { dueDate: day('2026-10-26'), now: day('2026-10-16') })
    const updates = h.taskUpdate.mock.calls.map((c) => c[0] as { where: { id: string }; data: { dueDate?: Date } })
    const moved = updates.find((u) => u.where.id === 't-moved')
    expect(moved?.data.dueDate).toBeUndefined()
  })
})

describe('AP readiness replay', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    h.extFindMany.mockResolvedValue([])
    h.topicFindMany.mockResolvedValue([])
    h.progressFindMany.mockResolvedValue([])
    h.unitFindMany.mockResolvedValue([])
    h.exitFindMany.mockResolvedValue([])
  })

  const diag = (id: string, at: string, slugs: string[]) => ({
    id,
    createdAt: new Date(at),
    results: { recommendedTopics: slugs.map((slug) => ({ slug, name: slug, priority: 'high' })) },
  })
  const pass = (slug: string, at: string) => ({ topicSlug: slug, score: 9, totalQuestions: 10, completedAt: new Date(at) })

  /** diagnosticTest.findMany serves both the practice-exam query and the diagnostic query. */
  function serve(practice: unknown[], diagnostics: unknown[]) {
    h.diagFindMany.mockImplementation(async (args: { where: { category: unknown } }) => {
      const c = args.where.category
      if (typeof c === 'string' && c.startsWith('ap-practice-exam:')) return practice
      return diagnostics
    })
  }

  it('counts AP cycles toward the practice exam: 2 complete cycles = level 10', async () => {
    serve([], [diag('d1', '2026-09-01T00:00:00Z', ['stoichiometry']), diag('d2', '2026-09-20T00:00:00Z', ['equilibrium'])])
    h.exitFindMany.mockResolvedValue([pass('stoichiometry', '2026-09-10T00:00:00Z'), pass('equilibrium', '2026-10-01T00:00:00Z')])
    const r = await fullLengthReadiness('stu-1', 'ap-chem', { now: new Date('2026-10-16T00:00:00Z') })
    const diagWhere = h.diagFindMany.mock.calls.map((c) => (c[0] as { where: { category: unknown } }).where.category)
    expect(diagWhere).toContainEqual({ startsWith: 'ap-chem-diagnostic' })
    expect(diagWhere).toContain('ap-practice-exam:ap-chem')
    expect(r).toMatchObject({ course: 'ap-chem', label: 'AP Chemistry', cyclesRequired: 2, cyclesComplete: 2, ready: true, level: 10, fullLengthHref: '/ap-chem-practice' })
    expect(r.fullLengthLabel).toBe('AP Chemistry practice exam')
  })

  it('an ap-practice-exam attempt (any form) resets the bar and becomes the last full-length', async () => {
    serve(
      [{ id: 'pe-1', category: 'ap-practice-exam:ap-chem', createdAt: new Date('2026-10-05T00:00:00Z'), results: { form: 2, subject: 'AP Chemistry', estimatedAPScore: 4, review: { questions: [] } } }],
      [diag('d1', '2026-09-01T00:00:00Z', ['stoichiometry']), diag('d2', '2026-09-20T00:00:00Z', ['equilibrium']), diag('d3', '2026-10-10T00:00:00Z', ['kinetics'])],
    )
    h.exitFindMany.mockResolvedValue([pass('stoichiometry', '2026-09-10T00:00:00Z'), pass('equilibrium', '2026-10-01T00:00:00Z')])
    const r = await fullLengthReadiness('stu-1', 'ap-chem', { now: new Date('2026-10-16T00:00:00Z') })
    expect(r.lastFullLength).toMatchObject({ kind: 'studymondo', score: 4, href: '/review/ap-practice/pe-1' })
    expect(r.lastFullLength?.source).toContain('Form 2')
    expect(r.fullLengthsTaken).toBe(1)
    // Only the cycle started after the exam counts; it is in progress.
    expect(r.cycles.map((c) => c.diagnosticId)).toEqual(['d3'])
    expect(r.cyclesComplete).toBe(0)
    expect(r.ready).toBe(false)
    expect(r.currentCycle?.diagnosticId).toBe('d3')
  })

  it('uses the Calc AB practice-exam key and an outside AP score resets too', async () => {
    serve([], [diag('d1', '2026-09-01T00:00:00Z', ['limits'])])
    h.extFindMany.mockResolvedValue([{ takenAt: new Date('2026-09-15T12:00:00Z'), totalScore: 3, source: 'AP Classroom practice exam' }])
    const r = await fullLengthReadiness('stu-1', 'calcab', { now: new Date('2026-10-16T00:00:00Z') })
    const cats = h.diagFindMany.mock.calls.map((c) => (c[0] as { where: { category: unknown } }).where.category)
    expect(cats).toContain('ap-practice-exam:ap-calcab')
    expect(cats).toContainEqual({ startsWith: 'calcab-diagnostic' })
    expect(h.extFindMany.mock.calls[0][0]).toMatchObject({ where: { userId: 'stu-1', course: 'calcab' } })
    expect(r.lastFullLength).toMatchObject({ kind: 'external', score: 3 })
    // The unfinished cycle carries over past the outside score.
    expect(r.cycles.map((c) => c.diagnosticId)).toEqual(['d1'])
  })

  it('maps legacy AP slugs on stored attempts to the production topic', () => {
    const results = { recommendedTopics: [{ slug: 'ap-bio-chemistry-of-life' }, { slug: 'water-properties' }] }
    expect(recommendedSlugs(results, 'ap-bio')).toEqual(['water-properties'])
    expect(recommendedSlugs(results, 'mcat')).toEqual(['ap-bio-chemistry-of-life', 'water-properties'])
  })
})
