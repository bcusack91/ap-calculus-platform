/**
 * The MCAT retake gate now has two parts: every plan topic cleared AND the
 * cycle's unit test passed (a teacher's one-shot waiver still opens it).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const SLUGS = [
  'mcat-biochemistry-enzymes-kinetics-mcat',
  'mcat-general-chemistry-kinetics-mcat',
  'mcat-psychology-behavior-disorders-mcat',
  'mcat-sociology-mcat',
  'mcat-organ-systems-renal-mcat',
]
const DIAG_AT = new Date('2026-10-01T12:00:00Z')
const AFTER = new Date('2026-10-02T12:00:00Z')

const db = {
  diagnosticTest: { findFirst: vi.fn() },
  user: { findUnique: vi.fn() },
  topic: { findMany: vi.fn() },
  topicProgress: { findMany: vi.fn() },
  exitQuizAttempt: { findMany: vi.fn() },
  mcatUnitTest: { findMany: vi.fn() },
}
vi.mock('@/lib/prisma', () => ({ prisma: db }))

beforeEach(() => {
  vi.clearAllMocks()
  db.diagnosticTest.findFirst.mockResolvedValue({
    id: 'diag-1',
    createdAt: DIAG_AT,
    results: { recommendedTopics: SLUGS.map((slug) => ({ slug, name: slug, priority: 'high' })), domains: [] },
  })
  db.user.findUnique.mockResolvedValue({ diagnosticGateWaivedAt: null })
  db.topic.findMany.mockResolvedValue(SLUGS.map((slug, i) => ({ id: `t${i}`, slug, _count: { flashcards: 10 } })))
  db.topicProgress.findMany.mockResolvedValue([])
  // Every topic's exit quiz passed AFTER this diagnostic (this cycle's work).
  db.exitQuizAttempt.findMany.mockResolvedValue(
    SLUGS.map((topicSlug) => ({ topicSlug, score: 9, totalQuestions: 10, completedAt: AFTER })),
  )
  db.mcatUnitTest.findMany.mockResolvedValue([])
})

describe('buildMcatPlanStatus — unit test gate', () => {
  it('all topics cleared but no unit test yet: still locked, unit test available', async () => {
    const { buildMcatPlanStatus } = await import('@/lib/mcat-plan')
    const s = await buildMcatPlanStatus('u1')
    expect(s.pendingTopics).toHaveLength(0)
    expect(s.unitTest).toMatchObject({ available: true, passed: false, attempts: 0, passPercent: 75, questionCount: 25 })
    expect(s.canRetakeDiagnostic).toBe(false)
  })

  it('a failed sitting keeps it locked; a passing one unlocks it', async () => {
    const { buildMcatPlanStatus } = await import('@/lib/mcat-plan')
    db.mcatUnitTest.findMany.mockResolvedValueOnce([{ id: 'a', completedAt: AFTER, percentage: 64, passed: false }])
    const failed = await buildMcatPlanStatus('u1')
    expect(failed.canRetakeDiagnostic).toBe(false)
    expect(failed.unitTest).toMatchObject({ attempts: 1, bestPercent: 64 })

    db.mcatUnitTest.findMany.mockResolvedValueOnce([
      { id: 'a', completedAt: AFTER, percentage: 64, passed: false },
      { id: 'b', completedAt: AFTER, percentage: 80, passed: true },
    ])
    const passed = await buildMcatPlanStatus('u1')
    expect(passed.canRetakeDiagnostic).toBe(true)
    expect(passed.unitTest).toMatchObject({ passed: true, attempts: 2, bestPercent: 80 })
  })

  it('a topic still pending: unit test unavailable and the gate locked', async () => {
    const { buildMcatPlanStatus } = await import('@/lib/mcat-plan')
    db.exitQuizAttempt.findMany.mockResolvedValueOnce(
      SLUGS.slice(1).map((topicSlug) => ({ topicSlug, score: 9, totalQuestions: 10, completedAt: AFTER })),
    )
    const s = await buildMcatPlanStatus('u1')
    expect(s.pendingTopics.length).toBeGreaterThan(0)
    expect(s.unitTest?.available).toBe(false)
    expect(s.canRetakeDiagnostic).toBe(false)
  })

  it("a teacher's waiver still opens the gate without the unit test", async () => {
    const { buildMcatPlanStatus } = await import('@/lib/mcat-plan')
    db.user.findUnique.mockResolvedValueOnce({ diagnosticGateWaivedAt: AFTER })
    const s = await buildMcatPlanStatus('u1')
    expect(s.unitTest?.passed).toBe(false)
    expect(s.canRetakeDiagnostic).toBe(true)
  })
})
