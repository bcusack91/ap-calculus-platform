// @vitest-environment jsdom
/**
 * The AP diagnostic resume hook (src/hooks/useDiagnosticResume.ts).
 *
 * A sitting in progress is mirrored to localStorage on every answer, move
 * and tick under a key of user + course + version; the menu reads it back
 * with the clock's saved remaining seconds (not wall-clock time away); a
 * submit clears it; a saved copy whose questions no longer match what the
 * bank would serve is offered as Start over only.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'

const analytics = vi.hoisted(() => ({ trackApDiagnosticResume: vi.fn(), trackApDiagnosticDiscard: vi.fn() }))
vi.mock('@/lib/analytics', () => analytics)

import {
  useDiagnosticResume,
  diagnosticResumeKey,
  parseSavedSitting,
  sameQuestionSet,
  type DiagnosticPhase,
  type SavedDiagnosticSitting,
} from '@/hooks/useDiagnosticResume'

interface TestData { form: number; questions: { question: string; options: string[] }[] }

const testData: TestData = {
  form: 3,
  questions: [
    { question: 'Q1?', options: ['a', 'b', 'c', 'd'] },
    { question: 'Q2?', options: ['e', 'f', 'g', 'h'] },
    { question: 'Q3?', options: ['i', 'j', 'k', 'l'] },
  ],
}

const KEY = diagnosticResumeKey('u1', 'ap-chem', 1)

interface HookProps {
  phase: DiagnosticPhase
  testData: TestData | null
  answers: (number | null)[]
  eliminated: Set<number>[]
  currentIndex: number
  timeRemaining: number
  validate?: (t: TestData) => boolean
  ready?: boolean
  userId?: string | null
}

function renderResume(initial: HookProps) {
  return renderHook(
    (p: HookProps) =>
      useDiagnosticResume<TestData>({
        userId: p.userId === undefined ? 'u1' : p.userId,
        course: 'ap-chem',
        version: 1,
        phase: p.phase,
        testData: p.testData,
        answers: p.answers,
        eliminated: p.eliminated,
        currentIndex: p.currentIndex,
        timeRemaining: p.timeRemaining,
        validate: p.validate,
        ready: p.ready,
      }),
    { initialProps: initial },
  )
}

const menuProps: HookProps = { phase: 'menu', testData: null, answers: [], eliminated: [], currentIndex: 0, timeRemaining: 0 }

/** Lets the hook's microtask read of localStorage land. */
const flush = () => act(async () => { await Promise.resolve() })

beforeEach(() => {
  window.localStorage.clear()
  analytics.trackApDiagnosticResume.mockClear()
  analytics.trackApDiagnosticDiscard.mockClear()
})
afterEach(() => { window.localStorage.clear() })

describe('diagnosticResumeKey', () => {
  it('is keyed by user, course and version', () => {
    expect(diagnosticResumeKey('u1', 'ap-chem', 1)).toBe('ap-diagnostic-inprogress-v1:u1:ap-chem:v1')
    expect(diagnosticResumeKey('u1', 'ap-chem', 2)).not.toBe(diagnosticResumeKey('u1', 'ap-chem', 1))
    expect(diagnosticResumeKey('u2', 'ap-chem', 1)).not.toBe(diagnosticResumeKey('u1', 'ap-chem', 1))
  })
})

describe('save / restore / clear', () => {
  it('writes the sitting on every answer, move and tick while testing', async () => {
    const { rerender } = renderResume({ ...menuProps, phase: 'testing', testData, answers: [null, null, null], eliminated: [new Set(), new Set(), new Set()], currentIndex: 0, timeRemaining: 2400 })
    let saved = parseSavedSitting<TestData>(window.localStorage.getItem(KEY))
    expect(saved?.answers).toEqual([null, null, null])
    expect(saved?.timeRemaining).toBe(2400)

    // an answer
    rerender({ ...menuProps, phase: 'testing', testData, answers: [2, null, null], eliminated: [new Set(), new Set([1]), new Set()], currentIndex: 0, timeRemaining: 2400 })
    saved = parseSavedSitting<TestData>(window.localStorage.getItem(KEY))
    expect(saved?.answers).toEqual([2, null, null])
    expect(saved?.eliminated).toEqual([[], [1], []])

    // a move and a tick
    rerender({ ...menuProps, phase: 'testing', testData, answers: [2, null, null], eliminated: [new Set(), new Set([1]), new Set()], currentIndex: 1, timeRemaining: 2399 })
    saved = parseSavedSitting<TestData>(window.localStorage.getItem(KEY))
    expect(saved?.currentIndex).toBe(1)
    expect(saved?.timeRemaining).toBe(2399)
    expect(saved?.testData.questions.map((q) => q.question)).toEqual(['Q1?', 'Q2?', 'Q3?'])
  })

  it('offers the saved sitting on the menu and restores it with the saved clock, not wall-clock time', async () => {
    const sitting: SavedDiagnosticSitting<TestData> = {
      v: 1, testData, answers: [1, 3, null], eliminated: [[], [0], []], currentIndex: 2, timeRemaining: 1261,
      savedAt: Date.now() - 6 * 60 * 60 * 1000, // left six hours ago
    }
    window.localStorage.setItem(KEY, JSON.stringify(sitting))
    const { result } = renderResume(menuProps)
    await flush()
    expect(result.current.resumable).toEqual({ answered: 2, total: 3, minutesLeft: 22, stale: false })

    let restored: ReturnType<typeof result.current.restore> = null
    act(() => { restored = result.current.restore() })
    expect(restored).not.toBeNull()
    expect(restored!.timeRemaining).toBe(1261)
    expect(restored!.currentIndex).toBe(2)
    expect(restored!.answers).toEqual([1, 3, null])
    expect(restored!.eliminated[1]).toEqual(new Set([0]))
    expect(restored!.testData.questions[0].question).toBe('Q1?')
    expect(analytics.trackApDiagnosticResume).toHaveBeenCalledWith('ap-chem', 1, 2, 3)
  })

  it('clears the saved sitting once the phase reaches results', async () => {
    const { rerender } = renderResume({ ...menuProps, phase: 'testing', testData, answers: [null, null, null], eliminated: [new Set(), new Set(), new Set()], currentIndex: 0, timeRemaining: 100 })
    expect(window.localStorage.getItem(KEY)).not.toBeNull()
    rerender({ ...menuProps, phase: 'results', testData, answers: [0, 1, 2], eliminated: [new Set(), new Set(), new Set()], currentIndex: 2, timeRemaining: 40 })
    expect(window.localStorage.getItem(KEY)).toBeNull()
  })

  it('discard removes the sitting and fires the discard event; a silent clear fires nothing', async () => {
    window.localStorage.setItem(KEY, JSON.stringify({ v: 1, testData, answers: [1, null, null], eliminated: [], currentIndex: 1, timeRemaining: 900, savedAt: 1 }))
    const { result } = renderResume(menuProps)
    await flush()
    expect(result.current.resumable?.answered).toBe(1)
    act(() => { result.current.discard() })
    expect(window.localStorage.getItem(KEY)).toBeNull()
    expect(result.current.resumable).toBeNull()
    expect(analytics.trackApDiagnosticDiscard).toHaveBeenCalledWith('ap-chem', 1, 1, 3)

    window.localStorage.setItem(KEY, JSON.stringify({ v: 1, testData, answers: [1, null, null], eliminated: [], currentIndex: 1, timeRemaining: 900, savedAt: 1 }))
    act(() => { result.current.clear() })
    expect(window.localStorage.getItem(KEY)).toBeNull()
    expect(analytics.trackApDiagnosticDiscard).toHaveBeenCalledTimes(1)
  })

  it('keeps the saved copy after Save and exit (phase back to menu) and offers it again', async () => {
    const live: HookProps = { ...menuProps, phase: 'testing', testData, answers: [0, null, null], eliminated: [new Set(), new Set(), new Set()], currentIndex: 1, timeRemaining: 1500 }
    const { result, rerender } = renderResume(live)
    rerender({ ...menuProps, phase: 'menu' })
    await flush()
    expect(window.localStorage.getItem(KEY)).not.toBeNull()
    expect(result.current.resumable).toEqual({ answered: 1, total: 3, minutesLeft: 25, stale: false })
  })

  it('does nothing without a user id and ignores other users and versions', async () => {
    window.localStorage.setItem(diagnosticResumeKey('u2', 'ap-chem', 1), JSON.stringify({ v: 1, testData, answers: [null, null, null], eliminated: [], currentIndex: 0, timeRemaining: 100, savedAt: 1 }))
    window.localStorage.setItem(diagnosticResumeKey('u1', 'ap-chem', 2), JSON.stringify({ v: 1, testData, answers: [null, null, null], eliminated: [], currentIndex: 0, timeRemaining: 100, savedAt: 1 }))
    const { result } = renderResume(menuProps)
    await flush()
    expect(result.current.resumable).toBeNull()

    const anon = renderResume({ ...menuProps, phase: 'testing', testData, answers: [null, null, null], eliminated: [], currentIndex: 0, timeRemaining: 100, userId: null })
    await flush()
    expect(anon.result.current.resumable).toBeNull()
    expect(window.localStorage.length).toBe(2)
  })
})

describe('stale detection', () => {
  it('a saved sitting the bank would no longer serve is Start over only', async () => {
    window.localStorage.setItem(KEY, JSON.stringify({ v: 1, testData, answers: [1, null, null], eliminated: [], currentIndex: 0, timeRemaining: 900, savedAt: 1 }))
    const fresh: TestData = { form: 3, questions: [testData.questions[0], { question: 'Q2 rewritten?', options: ['e', 'f', 'g', 'h'] }, testData.questions[2]] }
    const { result } = renderResume({ ...menuProps, validate: (t) => sameQuestionSet(t.questions, fresh.questions) })
    await flush()
    expect(result.current.resumable?.stale).toBe(true)
    let restored: unknown = 'unset'
    act(() => { restored = result.current.restore() })
    expect(restored).toBeNull()
    expect(analytics.trackApDiagnosticResume).not.toHaveBeenCalled()
  })

  it('a matching bank (same stems, options in any order) is resumable', async () => {
    window.localStorage.setItem(KEY, JSON.stringify({ v: 1, testData, answers: [1, null, null], eliminated: [], currentIndex: 0, timeRemaining: 900, savedAt: 1 }))
    const fresh: TestData = { form: 3, questions: testData.questions.map((q) => ({ question: q.question, options: [...q.options].reverse() })) }
    const { result } = renderResume({ ...menuProps, validate: (t) => sameQuestionSet(t.questions, fresh.questions) })
    await flush()
    expect(result.current.resumable?.stale).toBe(false)
  })

  it('waits for ready (e.g. a bank still loading) before offering anything, then validates', async () => {
    window.localStorage.setItem(KEY, JSON.stringify({ v: 1, testData, answers: [1, null, null], eliminated: [], currentIndex: 0, timeRemaining: 900, savedAt: 1 }))
    const { result, rerender } = renderResume({ ...menuProps, ready: false, validate: () => false })
    await flush()
    expect(result.current.resumable).toBeNull()
    rerender({ ...menuProps, ready: true, validate: () => false })
    await flush()
    expect(result.current.resumable?.stale).toBe(true)
  })

  it('a validator that throws counts as stale', async () => {
    window.localStorage.setItem(KEY, JSON.stringify({ v: 1, testData, answers: [1, null, null], eliminated: [], currentIndex: 0, timeRemaining: 900, savedAt: 1 }))
    const { result } = renderResume({ ...menuProps, validate: () => { throw new Error('bank missing') } })
    await flush()
    expect(result.current.resumable?.stale).toBe(true)
  })

  it('sameQuestionSet compares length, stems in order and option texts', () => {
    const a = testData.questions
    expect(sameQuestionSet(a, a)).toBe(true)
    expect(sameQuestionSet(a, a.slice(0, 2))).toBe(false)
    expect(sameQuestionSet(a, [a[1], a[0], a[2]])).toBe(false)
    expect(sameQuestionSet(a, [a[0], { question: 'Q2?', options: ['e', 'f', 'g', 'X'] }, a[2]])).toBe(false)
    expect(sameQuestionSet([], [])).toBe(false)
  })
})

describe('parseSavedSitting', () => {
  it('rejects malformed, mismatched or expired-clock copies', () => {
    expect(parseSavedSitting(null)).toBeNull()
    expect(parseSavedSitting('not json')).toBeNull()
    expect(parseSavedSitting(JSON.stringify({ v: 2, testData, answers: [null, null, null], currentIndex: 0, timeRemaining: 10 }))).toBeNull()
    expect(parseSavedSitting(JSON.stringify({ v: 1, testData, answers: [null], currentIndex: 0, timeRemaining: 10 }))).toBeNull()
    expect(parseSavedSitting(JSON.stringify({ v: 1, testData, answers: [null, null, null], currentIndex: 0, timeRemaining: 0 }))).toBeNull()
    expect(parseSavedSitting(JSON.stringify({ v: 1, testData: { questions: [] }, answers: [], currentIndex: 0, timeRemaining: 10 }))).toBeNull()
  })
  it('clamps the index and fills missing eliminated sets', () => {
    const p = parseSavedSitting<TestData>(JSON.stringify({ v: 1, testData, answers: [null, null, null], currentIndex: 9, timeRemaining: 10.7 }))
    expect(p?.currentIndex).toBe(2)
    expect(p?.timeRemaining).toBe(10)
    expect(p?.eliminated).toEqual([[], [], []])
  })
})
