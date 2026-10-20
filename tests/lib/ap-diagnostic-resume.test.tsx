// @vitest-environment jsdom
/**
 * A v1 AP diagnostic page offers to resume a saved sitting and restores it.
 *
 * The AP Computer Science A page stands in for the 23 v1 pages (they share
 * the template and the same hook wiring). A sitting saved under the signed-in
 * user's key shows "Resume your AP Computer Science A diagnostic (n of N
 * answered, m min left)"; Resume lands on the saved question with the saved
 * clock and answers; a saved copy whose questions no longer match the form
 * offers Start over only; the in-test header has Save and exit plus a
 * confirmed Discard instead of a bare Exit.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import React from 'react'
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react'

const searchParams = new Map<string, string>()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => ({ get: (k: string) => searchParams.get(k) ?? null }),
}))
vi.mock('next-auth/react', () => ({ useSession: () => ({ status: 'authenticated', data: { user: { id: 'u1' } } }) }))
vi.mock('next/link', () => ({ default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a> }))
vi.mock('@/components/DiagnosticPlanLock', () => ({
  useDiagnosticPlanAccess: () => ({ canAccess: true, loading: false, used: 0, limit: 1 }),
  DiagnosticPlanPaywall: () => null,
}))
vi.mock('@/components/DiagnosticReview', () => ({ default: () => null }))
vi.mock('@/components/DiagnosticChallengeCard', () => ({ default: () => null }))
vi.mock('@/components/StartStudyPlanButton', () => ({ default: () => null }))
const analytics = vi.hoisted(() => ({ trackApDiagnosticResume: vi.fn(), trackApDiagnosticDiscard: vi.fn() }))
vi.mock('@/lib/analytics', async (importOriginal) => ({ ...(await importOriginal<typeof import('@/lib/analytics')>()), ...analytics }))

import APCsaDiagnosticPage from '@/app/ap-csa-diagnostic/page'
import { generateAPCsaDiagnosticTest } from '@/data/ap-csa-diagnostic'
import { diagnosticResumeKey } from '@/hooks/useDiagnosticResume'

const KEY = diagnosticResumeKey('u1', 'ap-csa', 1)

function savedSitting(mutate?: (q: { question: string }[]) => void) {
  const data = generateAPCsaDiagnosticTest(1)
  if (mutate) mutate(data.questions)
  const n = data.questions.length
  const answers: (number | null)[] = new Array(n).fill(null)
  answers[0] = 1
  answers[1] = 2
  return {
    v: 1,
    testData: data,
    answers,
    eliminated: data.questions.map(() => []),
    currentIndex: 4,
    timeRemaining: 21 * 60 + 5,
    savedAt: Date.now() - 60_000,
  }
}

beforeEach(() => {
  window.localStorage.clear()
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => ({ attempts: [] }) })))
  analytics.trackApDiagnosticResume.mockClear()
  analytics.trackApDiagnosticDiscard.mockClear()
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  window.localStorage.clear()
})

describe('AP diagnostic v1 page resume', () => {
  it('shows the resume prompt for a saved sitting and restores its index, answers and clock', async () => {
    const sitting = savedSitting()
    window.localStorage.setItem(KEY, JSON.stringify(sitting))
    const total = sitting.testData.questions.length

    render(<APCsaDiagnosticPage />)
    const prompt = await screen.findByText(`Resume your AP Computer Science A diagnostic (2 of ${total} answered, 22 min left)`)
    expect(prompt).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Resume$/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Start over/ })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /^Resume$/ }))

    // Question 5 (saved index 4), the saved clock and the saved answer count.
    expect(await screen.findByText(`5/${total}`)).toBeInTheDocument()
    expect(screen.getByText(/21:05/)).toBeInTheDocument()
    expect(screen.getByText(`2/${total} answered`)).toBeInTheDocument()
    expect(analytics.trackApDiagnosticResume).toHaveBeenCalledWith('ap-csa', 1, 2, total)

    // The header offers Save and exit, and a Discard that confirms first.
    expect(screen.getByRole('button', { name: /Save and exit/ })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /^Exit$/ })).toBeNull()
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false)
    fireEvent.click(screen.getByRole('button', { name: /^Discard$/ }))
    expect(confirmSpy).toHaveBeenCalled()
    expect(screen.getByText(`5/${total}`)).toBeInTheDocument() // still testing
    expect(window.localStorage.getItem(KEY)).not.toBeNull()
    confirmSpy.mockRestore()
  })

  it('Save and exit keeps the sitting and offers it again on the menu', async () => {
    const sitting = savedSitting()
    window.localStorage.setItem(KEY, JSON.stringify(sitting))
    const total = sitting.testData.questions.length
    render(<APCsaDiagnosticPage />)
    fireEvent.click(await screen.findByRole('button', { name: /^Resume$/ }))
    await screen.findByText(`5/${total}`)
    fireEvent.click(screen.getByRole('button', { name: /Save and exit/ }))
    expect(await screen.findByText(/Resume your AP Computer Science A diagnostic \(2 of/)).toBeInTheDocument()
    expect(window.localStorage.getItem(KEY)).not.toBeNull()
  })

  it('a saved sitting whose questions no longer match the form offers Start over only', async () => {
    window.localStorage.setItem(KEY, JSON.stringify(savedSitting((qs) => { qs[2].question = 'This stem was rewritten after the save.' })))
    render(<APCsaDiagnosticPage />)
    expect(await screen.findByText(/can't be resumed/)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /^Resume$/ })).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: /Start over/ }))
    // A fresh sitting starts at question 1 and the discard was recorded.
    expect(await screen.findByText(/^1\/\d+$/)).toBeInTheDocument()
    expect(analytics.trackApDiagnosticDiscard).toHaveBeenCalledTimes(1)
    expect(analytics.trackApDiagnosticResume).not.toHaveBeenCalled()
  })

  it('shows no prompt when nothing is saved', async () => {
    render(<APCsaDiagnosticPage />)
    await waitFor(() => expect(screen.getByRole('button', { name: /Start Diagnostic Test/ })).toBeInTheDocument())
    expect(screen.queryByTestId('diagnostic-resume-prompt')).toBeNull()
  })
})
