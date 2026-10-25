/**
 * A diagnostic submission is a study day (UX Phase 3, friction #7).
 *
 * Every diagnostic submit route writes the attempt and advances DailyStreak
 * (src/lib/streak.ts) in ONE transaction, as lesson and exit-quiz submits do.
 * Before Oct 2026 none of the 33 routes touched the streak, so the
 * streak-reminder email (streak >= 3) could never reach a student whose only
 * activity was a diagnostic. The nudge crons' own targeting is unchanged.
 *
 * ActiveTimeDaily / QuestionActivity rows already come from recordQuestions
 * (attemptKind 'diagnostic'); they are not touched here.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

const h = vi.hoisted(() => ({
  auth: vi.fn(),
  create: vi.fn(),
  streak: vi.fn(),
  record: vi.fn(),
  transactions: 0,
}))

vi.mock('@/lib/auth', () => ({ auth: () => h.auth() }))
vi.mock('@/lib/study-tracking', () => ({ recordQuestions: (...a: unknown[]) => h.record(...a) }))
vi.mock('@/lib/streak', () => ({ touchDailyStreak: (...a: unknown[]) => h.streak(...a) }))
vi.mock('@/lib/prisma', () => {
  const tx = { diagnosticTest: { create: (...a: unknown[]) => h.create(...a) }, isTx: true }
  const prisma = {
    diagnosticTest: {
      create: () => {
        throw new Error('diagnosticTest.create must run inside the transaction (tx), not on prisma')
      },
    },
    classDiagnostic: { findUnique: vi.fn().mockResolvedValue(null) },
    classroomMember: { findUnique: vi.fn().mockResolvedValue(null) },
    $transaction: async (fn: (tx: unknown) => unknown) => {
      h.transactions += 1
      return fn(tx)
    },
  }
  return { prisma }
})

const SUBMIT_ROUTES = readdirSync(path.join(process.cwd(), 'src/app/api'))
  .filter((d) => d.endsWith('-diagnostic') && existsSync(path.join(process.cwd(), 'src/app/api', d, 'submit/route.ts')))
  .sort()

const post = (body: unknown) =>
  new Request('http://localhost/api/x', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })

beforeEach(() => {
  vi.clearAllMocks()
  h.transactions = 0
  h.auth.mockResolvedValue({ user: { id: 'stu-1' } })
  h.record.mockResolvedValue(undefined)
  h.create.mockImplementation(async ({ data }: { data: Record<string, unknown> }) => ({ id: 'diag-1', ...data }))
})

describe('every diagnostic submit route counts as a study day', () => {
  it('covers all 33 diagnostic submit routes (AP, MCAT, SAT, ACT, ASVAB and the rest)', () => {
    // 32 since the non-AP /precalc-diagnostic was retired (Oct 2026; 308 to /ap-precalculus-diagnostic);
    // 33 with the ASVAB diagnostic (asvab-pipeline, Oct 2026).
    expect(SUBMIT_ROUTES).toHaveLength(33)
    expect(SUBMIT_ROUTES).not.toContain('precalc-diagnostic')
    for (const dir of ['ap-chem-diagnostic', 'ap-bio-diagnostic', 'ap-physics1-diagnostic', 'calcab-diagnostic', 'mcat-diagnostic', 'sat-diagnostic', 'act-diagnostic', 'asvab-diagnostic']) {
      expect(SUBMIT_ROUTES).toContain(dir)
    }
  })

  it.each(SUBMIT_ROUTES)('%s: the attempt and the streak commit in one transaction', (dir) => {
    const src = readFileSync(path.join(process.cwd(), 'src/app/api', dir, 'submit/route.ts'), 'utf8')
    expect(src).toContain("import { touchDailyStreak } from '@/lib/streak'")
    expect(src).toMatch(/prisma\.\$transaction\(async \(tx\) => \{/)
    expect(src).toMatch(/tx\.diagnosticTest\.create\(/)
    expect(src).toMatch(/await touchDailyStreak\(tx, studentId\)/)
    // No create left outside the transaction.
    expect(src).not.toMatch(/prisma\.diagnosticTest\.create\(/)
  })

  const body = (category: string) => ({
    category,
    results: { form: 1, totalCorrect: 1, totalQuestions: 1, recommendedTopics: [] },
    weakAreas: [],
    strengths: [],
  })

  it.each([
    ['ap-chem-diagnostic', 'ap-chem-diagnostic-1'],
    ['calcab-diagnostic', 'calcab-diagnostic-1'],
    ['ap-physics2-diagnostic', 'ap-physics2-diagnostic-1'],
    ['mcat-diagnostic', 'mcat-full-diagnostic'],
    ['sat-diagnostic', 'sat-full-diagnostic'],
    ['act-diagnostic', 'act-diagnostic-1'],
    ['algebra1-diagnostic', 'algebra1-diagnostic-1'],
  ])('%s: creates the row on the transaction client, then touches the streak for the student', async (dir, category) => {
    const { POST } = await import(`../../src/app/api/${dir}/submit/route.ts`)
    const res = await POST(post(body(category)))
    expect(res.status).toBe(200)
    expect(h.transactions).toBe(1)
    expect(h.create).toHaveBeenCalledTimes(1)
    expect(h.create.mock.calls[0][0].data).toMatchObject({ userId: 'stu-1', category })
    expect(h.streak).toHaveBeenCalledTimes(1)
    const [tx, userId] = h.streak.mock.calls[0]
    expect((tx as { isTx?: boolean }).isTx).toBe(true)
    expect(userId).toBe('stu-1')
    // Streak after the attempt, inside the same transaction.
    expect(h.streak.mock.invocationCallOrder[0]).toBeGreaterThan(h.create.mock.invocationCallOrder[0])
    // The answer log still gets its rows, tied to the stored attempt.
    expect(h.record).toHaveBeenCalledTimes(1)
  })

  it('a signed-out submit writes nothing', async () => {
    h.auth.mockResolvedValue(null)
    const { POST } = await import('@/app/api/ap-chem-diagnostic/submit/route')
    const res = await POST(post(body('ap-chem-diagnostic-1')))
    expect(res.status).toBe(401)
    expect(h.transactions).toBe(0)
    expect(h.streak).not.toHaveBeenCalled()
  })
})
