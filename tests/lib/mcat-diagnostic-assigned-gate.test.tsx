// @vitest-environment jsdom
/**
 * A teacher-assigned class diagnostic must open even when the student's
 * personal remediation gate is closed.
 *
 * Week 2 of a live course: nearly every student still has recommended
 * modules pending, and the gate disabled Start with "Diagnostic Locked Until
 * Remediation Complete" on the teacher's own assignment link. The gate still
 * applies to a self-serve sitting.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'

const searchParams = new Map<string, string>()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => ({ get: (k: string) => searchParams.get(k) ?? null }),
}))
vi.mock('next-auth/react', () => ({ useSession: () => ({ status: 'authenticated', data: { user: { id: 'u1' } } }) }))
vi.mock('next/link', () => ({ default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a> }))
vi.mock('@/lib/analytics', () => ({ trackCustomEvent: vi.fn() }))
vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve(), renderKatexSync: (s: string) => s, renderKatex: async (s: string) => s }))

import MCATDiagnosticPage from '@/app/mcat-diagnostic/page'

const frozenTest = {
  totalQuestions: 2,
  timeLimitMinutes: 5,
  domains: [{ id: 'gen-chem', name: 'General Chemistry', slugs: [], questionCount: 2, level: 'section' }],
  questions: [
    { id: 'q1', question: 'Frozen question one?', options: ['a', 'b', 'c', 'd'], correctAnswer: 0, explanation: '', domain: 'gen-chem', sourceSlug: 'x' },
    { id: 'q2', question: 'Frozen question two?', options: ['a', 'b', 'c', 'd'], correctAnswer: 1, explanation: '', domain: 'gen-chem', sourceSlug: 'x' },
  ],
}

const closedGate = {
  hasDiagnostic: true,
  diagnosticId: 'd0',
  canRetakeDiagnostic: false,
  gateWaived: false,
  requiredScorePercent: 80,
  recommendedTopics: [{ slug: 't1', name: 'Topic 1', priority: 'high', topicPath: '/topics/t1', isSatisfied: false, pending: true }],
  pendingTopics: [{ slug: 't1', name: 'Topic 1', priority: 'high', topicPath: '/topics/t1', isSatisfied: false }],
  summary: { totalRecommended: 1, completed: 0, pending: 1 },
}

function mockFetch() {
  const calls: string[] = []
  global.fetch = vi.fn(async (input: RequestInfo | URL) => {
    const url = String(input)
    calls.push(url)
    const json = (body: unknown) => new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json' } })
    if (url.includes('/api/mcat-diagnostic/history')) return json({ attempts: [] })
    if (url.includes('/api/mcat-diagnostic/plan-status')) return json(closedGate)
    if (url.includes('/api/class-diagnostics/assigned-1')) return json({ diagnostic: { id: 'assigned-1', title: 'Diagnostic 2', testData: frozenTest } })
    return json({})
  }) as unknown as typeof fetch
  return calls
}

beforeEach(() => {
  searchParams.clear()
  window.localStorage.clear()
})

describe('MCAT diagnostic start button vs the remediation gate', () => {
  it('stays locked for a self-serve sitting when modules are pending', async () => {
    mockFetch()
    render(<MCATDiagnosticPage />)
    const locked = await screen.findByRole('button', { name: /Diagnostic Locked Until Remediation Complete/i })
    expect(locked).toBeDisabled()
    expect(screen.queryByRole('button', { name: /Start Assigned Diagnostic/i })).toBeNull()
  })

  it('opens a teacher-assigned diagnostic despite the closed gate and loads the frozen test', async () => {
    searchParams.set('assigned', 'assigned-1')
    const calls = mockFetch()
    render(<MCATDiagnosticPage />)
    const start = await screen.findByRole('button', { name: /Start Assigned Diagnostic/i })
    expect(start).toBeEnabled()
    expect(screen.queryByRole('button', { name: /Diagnostic Locked/i })).toBeNull()
    fireEvent.click(start)
    await waitFor(() => expect(calls.some((u) => u.includes('/api/class-diagnostics/assigned-1'))).toBe(true))
    // The frozen test's own question is on screen — not a freshly generated one.
    await screen.findByText(/Frozen question (one|two)\?/)
  })
})

describe('MCAT diagnostic resume after a refresh', () => {
  it('offers to resume with the answered count and clock, and restores the sitting', async () => {
    searchParams.set('assigned', 'assigned-1')
    mockFetch()
    const first = render(<MCATDiagnosticPage />)
    fireEvent.click(await screen.findByRole('button', { name: /Start Assigned Diagnostic/i }))
    await screen.findByText(/Frozen question one\?/)
    // Answer the first question, then simulate the tab closing.
    fireEvent.click(screen.getByText('b'))
    await waitFor(() => expect(window.localStorage.getItem('mcat-diagnostic-inprogress-v1')).not.toBeNull())
    first.unmount()

    render(<MCATDiagnosticPage />)
    await screen.findByText(/You have a diagnostic in progress/i)
    expect(screen.getByText(/1 of 2 answered/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /^Resume$/ }))
    // Back on the frozen test, not a freshly generated one.
    await screen.findByText(/Frozen question (one|two)\?/)
  })

  it('discarding removes the saved sitting', async () => {
    window.localStorage.setItem('mcat-diagnostic-inprogress-v1', JSON.stringify({
      testData: frozenTest, answers: [0, null], currentIndex: 1, timeRemaining: 120, assignedId: null, savedAt: Date.now(),
    }))
    mockFetch()
    render(<MCATDiagnosticPage />)
    await screen.findByText(/You have a diagnostic in progress/i)
    fireEvent.click(screen.getByRole('button', { name: /^Discard$/ }))
    await waitFor(() => expect(window.localStorage.getItem('mcat-diagnostic-inprogress-v1')).toBeNull())
    expect(screen.queryByText(/You have a diagnostic in progress/i)).toBeNull()
  })

  it('ignores a sitting older than twelve hours', async () => {
    window.localStorage.setItem('mcat-diagnostic-inprogress-v1', JSON.stringify({
      testData: frozenTest, answers: [0, null], currentIndex: 1, timeRemaining: 120, assignedId: null, savedAt: Date.now() - 13 * 60 * 60 * 1000,
    }))
    mockFetch()
    render(<MCATDiagnosticPage />)
    await screen.findByRole('button', { name: /Diagnostic Locked Until Remediation Complete/i })
    expect(screen.queryByText(/You have a diagnostic in progress/i)).toBeNull()
  })
})
