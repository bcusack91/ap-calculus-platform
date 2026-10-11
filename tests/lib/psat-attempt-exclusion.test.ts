/**
 * PSAT practice tests share SatTestAttempt (format 'psat-full') but must never
 * count as SAT full-lengths (readiness) or feed the SAT score predictor, and
 * the SAT and PSAT history lists never mix.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

const { satFindMany, empty } = vi.hoisted(() => ({
  satFindMany: vi.fn(),
  empty: () => vi.fn().mockResolvedValue([]),
}))

vi.mock('@/lib/auth', () => ({ auth: () => Promise.resolve({ user: { id: 'u1' } }) }))
vi.mock('next/cache', () => ({ unstable_cache: (fn: () => unknown) => fn }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    satTestAttempt: { findMany: (...a: unknown[]) => satFindMany(...a) },
    externalExamScore: { findMany: empty() },
    diagnosticTest: { findMany: empty() },
    exitQuizAttempt: { findMany: empty() },
    topicProgress: { findMany: empty() },
    topic: { findMany: empty() },
  },
}))

import {
  PSAT_FULL_FORMAT,
  PSAT_ONLY_ATTEMPTS,
  SAT_ONLY_ATTEMPTS,
  SAT_FULL_LENGTH_ATTEMPTS,
  attemptExam,
  isPsatAttemptFormat,
} from '@/lib/sat-attempt-format'
import { fullLengthReadiness } from '@/lib/full-length-progress-server'
import { GET as predictor } from '@/app/api/sat-practice/score-predictor/route'
import { GET as history } from '@/app/api/sat-practice/history/route'

type Where = Record<string, unknown>
const lastWhere = (): Where => (satFindMany.mock.calls.at(-1)?.[0] as { where: Where }).where

/** The fragment evaluated the way SQL evaluates it (NULL != x is unknown, so NULL needs its own branch). */
function matchesSatOnly(format: string | null): boolean {
  return SAT_ONLY_ATTEMPTS.OR.some((clause) =>
    clause.format === null ? format === null : format !== null && format !== clause.format.not,
  )
}

describe('sat-attempt-format', () => {
  it('classifies stored formats', () => {
    expect(PSAT_FULL_FORMAT).toBe('psat-full')
    expect(isPsatAttemptFormat('psat-full')).toBe(true)
    for (const f of ['full', 'mini', null, undefined]) expect(isPsatAttemptFormat(f)).toBe(false)
    expect(attemptExam('psat-full')).toBe('psat')
    expect(attemptExam(null)).toBe('sat')
  })

  it('SAT-only keeps legacy NULL rows and every SAT format, and drops PSAT', () => {
    expect(matchesSatOnly(null)).toBe(true)
    expect(matchesSatOnly('full')).toBe(true)
    expect(matchesSatOnly('mini')).toBe(true)
    expect(matchesSatOnly('psat-full')).toBe(false)
    expect(PSAT_ONLY_ATTEMPTS).toEqual({ format: 'psat-full' })
  })
})

describe('SatTestAttempt readers exclude PSAT', () => {
  beforeEach(() => {
    satFindMany.mockReset()
    satFindMany.mockResolvedValue([])
  })

  it('full-length readiness counts SAT full-length attempts only (no PSAT, no minis)', async () => {
    await fullLengthReadiness('u1', 'sat')
    expect(lastWhere()).toMatchObject({ userId: 'u1', completed: true, ...SAT_FULL_LENGTH_ATTEMPTS })
    expect(SAT_FULL_LENGTH_ATTEMPTS.OR).toEqual([{ format: 'full' }, { format: null, rwTotal: { gte: 54 } }])
  })

  it('the SAT score predictor reads SAT attempts only', async () => {
    const res = await predictor()
    expect(res.status).toBe(200)
    expect(lastWhere()).toMatchObject({ userId: 'u1', ...SAT_ONLY_ATTEMPTS })
  })

  it('history lists SAT by default and PSAT with ?exam=psat', async () => {
    await history(new Request('http://localhost/api/sat-practice/history'))
    expect(lastWhere()).toMatchObject({ userId: 'u1', ...SAT_ONLY_ATTEMPTS })
    await history(new Request('http://localhost/api/sat-practice/history?exam=psat'))
    expect(lastWhere()).toMatchObject({ userId: 'u1', format: 'psat-full' })
    expect(lastWhere().OR).toBeUndefined()
  })
})
