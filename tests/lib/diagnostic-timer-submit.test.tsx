// @vitest-environment jsdom
/**
 * Running out of time must submit the answers the student actually gave.
 *
 * The countdown effect is created once per sitting. It used to call
 * handleSubmit directly, capturing the version built when every answer was
 * still blank, so a timeout graded an EMPTY sheet — 0 correct, a floor score,
 * and remediation built from nothing — while manual submits worked fine. The
 * timer now calls through a ref kept pointed at the current handler.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import SATDiagnostic from '@/components/SATDiagnostic'
import type { DiagnosticTestData } from '@/data/sat-practice/diagnostic-generator'

vi.mock('@/components/DiagnosticPlanLock', () => ({
  useDiagnosticPlanAccess: () => ({ locked: false, loading: false }),
  DiagnosticPlanPaywall: () => null,
}))
vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve() }))

const testData: DiagnosticTestData = {
  totalQuestions: 2,
  timeLimitMinutes: 1,
  domains: [
    { id: 'grammar', name: 'Grammar', section: 'reading-writing', slugs: [], questionCount: 1 },
    { id: 'algebra', name: 'Algebra', section: 'math', slugs: [], questionCount: 1 },
  ] as DiagnosticTestData['domains'],
  questions: [
    {
      id: 'q1', question: 'Pick the second option.', options: ['no', 'yes', 'maybe', 'never'],
      correctIndex: 1, explanation: '', category: 'grammar', difficulty: 'medium',
      domain: 'grammar', sourceSlug: 'sat-grammar-usage', section: 'reading-writing',
    },
    {
      id: 'q2', question: 'Pick the first option.', options: ['a', 'b', 'c', 'd'],
      correctIndex: 0, explanation: '', category: 'algebra', difficulty: 'medium',
      domain: 'algebra', sourceSlug: 'sat-linear-equations-inequalities', section: 'math',
    },
  ] as DiagnosticTestData['questions'],
}

beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())

describe('diagnostic timer expiry', () => {
  it('grades the answers the student selected, not a blank sheet', async () => {
    const onComplete = vi.fn()
    render(<SATDiagnostic testData={testData} onComplete={onComplete} onCancel={() => {}} />)

    // Enter the test, then answer the first question.
    fireEvent.click(screen.getByRole('button', { name: /start|begin/i }))
    fireEvent.click(screen.getByText('yes'))

    // Let the clock run out.
    await act(async () => {
      vi.advanceTimersByTime(testData.timeLimitMinutes * 60 * 1000 + 2000)
    })

    expect(onComplete).toHaveBeenCalledTimes(1)
    const rawAnswers = onComplete.mock.calls[0][1] as (number | null)[]
    // The selected answer must survive the timeout — this array was all-null
    // before the fix.
    expect(rawAnswers[0]).toBe(1)
    const results = onComplete.mock.calls[0][0] as { totalCorrect: number }
    expect(results.totalCorrect).toBe(1)
  })
})
