// @vitest-environment jsdom
/**
 * An SAT diagnostic sitting survives a refresh or a closed tab.
 *
 * The page persists the open sitting (test, answers including grid-in typed
 * values, eliminated options, position, section-break phase, clock) under
 * `sat-diagnostic-inprogress-v1`, offers Resume/Discard on the menu, ignores
 * a copy older than twelve hours, and clears it when the test is finished or
 * deliberately left. Self-serve sittings draw around the cross-device seen
 * set through the shared diagnostic-seen helper instead of touching the
 * seen key directly.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import React, { Suspense } from 'react'
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react'

const searchParams = new Map<string, string>()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => ({ get: (k: string) => searchParams.get(k) ?? null }),
}))
vi.mock('next-auth/react', () => ({ useSession: () => ({ status: 'authenticated', data: { user: { id: 'u1' } } }) }))
vi.mock('next/link', () => ({ default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a> }))
// The page code-splits the test component with next/dynamic; resolve the
// loader through React.lazy so jsdom renders the real component.
vi.mock('next/dynamic', () => ({
  default: (loader: () => Promise<unknown>) => {
    const Lazy = React.lazy(async () => {
      const loaded = await loader()
      const component = typeof loaded === 'function' ? loaded : (loaded as { default: unknown }).default
      return { default: component as React.ComponentType<Record<string, unknown>> }
    })
    return function Dynamic(props: Record<string, unknown>) {
      return <Suspense fallback={null}><Lazy {...props} /></Suspense>
    }
  },
}))
vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve(), renderKatexSync: (s: string) => s, renderKatex: async (s: string) => s }))
vi.mock('@/components/DiagnosticPlanLock', () => ({
  useDiagnosticPlanAccess: () => ({ canAccess: true, loading: false, used: 0, limit: 1 }),
  DiagnosticPlanPaywall: () => null,
}))
vi.mock('@/components/DiagnosticReview', () => ({ default: () => null }))
vi.mock('@/components/DiagnosticChallengeCard', () => ({ default: () => null }))
vi.mock('@/components/ScratchPad', () => ({ default: () => null }))

const seen = vi.hoisted(() => ({ loadSeenKeys: vi.fn(), recordSeenKeys: vi.fn() }))
vi.mock('@/lib/diagnostic-seen', () => seen)

const gen = vi.hoisted(() => ({ generateDiagnosticTest: vi.fn() }))
vi.mock('@/data/sat-practice/diagnostic-generator', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/data/sat-practice/diagnostic-generator')>()
  return { ...actual, generateDiagnosticTest: gen.generateDiagnosticTest }
})

import SATDiagnosticPage from '@/app/sat-diagnostic/page'
import SATDiagnostic from '@/components/SATDiagnostic'
import { seenKeysForQuestion, type DiagnosticTestData } from '@/data/sat-practice/diagnostic-generator'

const RESUME_KEY = 'sat-diagnostic-inprogress-v1'

/** Two Reading & Writing multiple-choice items, then one Math grid-in. */
const frozenTest: DiagnosticTestData = {
  totalQuestions: 3,
  timeLimitMinutes: 5,
  domains: [
    { id: 'grammar', name: 'Grammar', section: 'reading-writing', slugs: [], questionCount: 2 },
    { id: 'algebra', name: 'Algebra', section: 'math', slugs: [], questionCount: 1 },
  ],
  questions: [
    {
      id: 'q1', question: 'Frozen question one?', options: ['alpha', 'bravo', 'charlie', 'delta'],
      correctIndex: 1, explanation: '', category: 'grammar', difficulty: 'medium',
      domain: 'grammar', sourceSlug: 'sat-grammar-usage', section: 'reading-writing',
    },
    {
      id: 'q2', question: 'Frozen question two?', options: ['echo', 'foxtrot', 'golf', 'hotel'],
      correctIndex: 0, explanation: '', category: 'grammar', difficulty: 'medium',
      domain: 'grammar', sourceSlug: 'sat-grammar-usage', section: 'reading-writing',
    },
    {
      id: 'q3', question: 'Frozen grid-in: what is 3 times 4?', options: [],
      correctIndex: -1, explanation: '', category: 'algebra', difficulty: 'medium',
      domain: 'algebra', sourceSlug: 'sat-linear-equations-inequalities', section: 'math',
      gridIn: { correctAnswer: 12, acceptableAnswers: [12], tolerance: 0 },
    },
  ],
}

function savedSitting(overrides: Record<string, unknown> = {}) {
  return {
    testData: frozenTest,
    phase: 'testing',
    answers: [{ questionIndex: 0, selectedIndex: 1 }, { questionIndex: 1, selectedIndex: null }, { questionIndex: 2, selectedIndex: null }],
    currentIndex: 1,
    timeRemaining: 120,
    eliminated: {},
    assignedId: null,
    hardModuleNumber: null,
    coreModuleNumber: null,
    savedAt: Date.now(),
    ...overrides,
  }
}

function readSaved() {
  const raw = window.localStorage.getItem(RESUME_KEY)
  return raw ? JSON.parse(raw) : null
}

function mockFetch() {
  const calls: string[] = []
  global.fetch = vi.fn(async (input: RequestInfo | URL) => {
    const url = String(input)
    calls.push(url)
    const json = (body: unknown) => new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json' } })
    if (url.includes('/api/sat-diagnostic/history')) return json({ attempts: [] })
    if (url.includes('/api/sat-diagnostic/plan-status')) return json({ summary: { pending: 0 } })
    if (url.includes('/api/class-diagnostics/assigned-1')) return json({ diagnostic: { id: 'assigned-1', title: 'Diagnostic 2', testData: frozenTest } })
    return json({})
  }) as unknown as typeof fetch
  return calls
}

beforeEach(() => {
  searchParams.clear()
  window.localStorage.clear()
  seen.loadSeenKeys.mockReset().mockResolvedValue(new Set<string>())
  seen.recordSeenKeys.mockReset().mockResolvedValue(undefined)
  gen.generateDiagnosticTest.mockReset()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('SAT diagnostic resume after a refresh', () => {
  it('persists answers including a grid-in value, offers to resume with the counts, and restores the sitting', async () => {
    searchParams.set('assigned', 'assigned-1')
    mockFetch()
    const first = render(<SATDiagnosticPage />)
    fireEvent.click(await screen.findByRole('button', { name: /Start Diagnostic Test/i }))
    fireEvent.click(await screen.findByRole('button', { name: /^Start Diagnostic$/ }))
    await screen.findByText('Frozen question one?')

    // Q1: pick "bravo" (options are shuffled per question, so click by text).
    fireEvent.click(screen.getByText('bravo'))
    fireEvent.click(screen.getByRole('button', { name: /^Next/ }))
    await screen.findByText('Frozen question two?')
    // Skip Q2, cross the section break into Math.
    fireEvent.click(screen.getByRole('button', { name: /Continue to Math Section/ }))
    await screen.findByText(/Section 1 Complete/)
    fireEvent.click(screen.getByRole('button', { name: /Continue to Math Section/ }))
    await screen.findByText(/Frozen grid-in/)
    fireEvent.change(screen.getByPlaceholderText(/e\.g\. 12/), { target: { value: '12' } })

    await waitFor(() => expect(readSaved()?.answers?.[2]?.textValue).toBe('12'))
    const saved = readSaved()
    expect(saved.phase).toBe('testing')
    expect(saved.currentIndex).toBe(2)
    expect(saved.assignedId).toBe('assigned-1')
    expect(saved.testData.questions[0].options[saved.answers[0].selectedIndex]).toBe('bravo')
    expect(saved.timeRemaining).toBeGreaterThan(280)
    expect(saved.timeRemaining).toBeLessThanOrEqual(300)

    // The tab closes.
    first.unmount()

    render(<SATDiagnosticPage />)
    await screen.findByText(/You have a diagnostic in progress/i)
    expect(screen.getByText(/2 of 3 answered/)).toBeInTheDocument()
    expect(screen.getByText(/5 min left/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /^Resume$/ }))

    // Straight back onto the grid-in — no intro — with the typed value and
    // a clock that picked up where it left off.
    const input = await screen.findByPlaceholderText(/e\.g\. 12/) as HTMLInputElement
    expect(input.value).toBe('12')
    expect(screen.queryByRole('button', { name: /^Start Diagnostic$/ })).toBeNull()
    // The clock resumed from the saved value (a fast run leaves it at 5:00;
    // a slower one has ticked a few seconds), not restarted from the intro.
    expect(screen.getByText(/^(5:00|4:[3-5]\d)$/)).toBeInTheDocument()
    // The resumed sitting is re-persisted with the first answer intact.
    await waitFor(() => {
      const again = readSaved()
      expect(again.testData.questions[0].options[again.answers[0].selectedIndex]).toBe('bravo')
    })

    // Finishing clears the saved copy.
    fireEvent.click(screen.getByRole('button', { name: /^Submit/ }))
    await screen.findByText(/Diagnostic Results/)
    expect(readSaved()).toBeNull()
  })

  it('restores eliminated options and the clock on a resumed question', async () => {
    window.localStorage.setItem(RESUME_KEY, JSON.stringify(savedSitting({ eliminated: { 1: [2] } })))
    mockFetch()
    render(<SATDiagnosticPage />)
    await screen.findByText(/You have a diagnostic in progress/i)
    expect(screen.getByText(/1 of 3 answered/)).toBeInTheDocument()
    expect(screen.getByText(/2 min left/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /^Resume$/ }))
    await screen.findByText('Frozen question two?')
    // Option index 2 ("golf") was struck out before the refresh.
    expect(screen.getAllByTitle('Restore this answer')).toHaveLength(1)
    expect(screen.getByText(/^(2:00|1:5\d)$/)).toBeInTheDocument()
  })

  it('resumes onto the section break when that is where the student left off', async () => {
    window.localStorage.setItem(RESUME_KEY, JSON.stringify(savedSitting({ phase: 'section-break', timeRemaining: 90 })))
    mockFetch()
    render(<SATDiagnosticPage />)
    fireEvent.click(await screen.findByRole('button', { name: /^Resume$/ }))
    await screen.findByText(/Section 1 Complete/)
    expect(screen.getByText(/continue from 1:30/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /Continue to Math Section/ }))
    await screen.findByText(/Frozen grid-in/)
  })

  it('discarding removes the saved sitting', async () => {
    window.localStorage.setItem(RESUME_KEY, JSON.stringify(savedSitting()))
    mockFetch()
    render(<SATDiagnosticPage />)
    await screen.findByText(/You have a diagnostic in progress/i)
    fireEvent.click(screen.getByRole('button', { name: /^Discard$/ }))
    await waitFor(() => expect(readSaved()).toBeNull())
    expect(screen.queryByText(/You have a diagnostic in progress/i)).toBeNull()
  })

  it('ignores a sitting older than twelve hours', async () => {
    window.localStorage.setItem(RESUME_KEY, JSON.stringify(savedSitting({ savedAt: Date.now() - 13 * 60 * 60 * 1000 })))
    mockFetch()
    render(<SATDiagnosticPage />)
    await screen.findByRole('button', { name: /Start Diagnostic Test/i })
    // The microtask read has run by the time the menu settles.
    await waitFor(() => expect(readSaved()).toBeNull())
    expect(screen.queryByText(/You have a diagnostic in progress/i)).toBeNull()
  })

  it('a confirmed Exit clears the saved sitting', async () => {
    window.localStorage.setItem(RESUME_KEY, JSON.stringify(savedSitting()))
    mockFetch()
    vi.spyOn(window, 'confirm').mockReturnValue(true)
    render(<SATDiagnosticPage />)
    fireEvent.click(await screen.findByRole('button', { name: /^Resume$/ }))
    await screen.findByText('Frozen question two?')
    fireEvent.click(screen.getByRole('button', { name: /^Exit$/ }))
    await screen.findByRole('button', { name: /Start Diagnostic Test/i })
    expect(readSaved()).toBeNull()
    expect(screen.queryByText(/You have a diagnostic in progress/i)).toBeNull()
  })
})

describe('SAT diagnostic timer expiry on a resumed sitting', () => {
  it('still grades the answers the student gave', async () => {
    vi.useFakeTimers()
    const onComplete = vi.fn()
    render(
      <SATDiagnostic
        testData={frozenTest}
        onComplete={onComplete}
        onCancel={() => {}}
        initialState={{
          phase: 'testing',
          currentIndex: 2,
          timeRemaining: 3,
          answers: [{ questionIndex: 0, selectedIndex: 1 }, { questionIndex: 1, selectedIndex: null }, { questionIndex: 2, selectedIndex: null, textValue: '12' }],
          eliminated: {},
        }}
        onStateChange={() => {}}
      />,
    )
    // No intro on a resumed sitting.
    expect(screen.queryByRole('button', { name: /^Start Diagnostic$/ })).toBeNull()
    await act(async () => { vi.advanceTimersByTime(5000) })
    expect(onComplete).toHaveBeenCalledTimes(1)
    const rawAnswers = onComplete.mock.calls[0][1] as (number | null)[]
    expect(rawAnswers[0]).toBe(1)
    expect(rawAnswers[1]).toBeNull()
    // A correct grid-in maps to -1 for the review.
    expect(rawAnswers[2]).toBe(-1)
    expect((onComplete.mock.calls[0][0] as { totalCorrect: number }).totalCorrect).toBe(2)
  })
})

describe('SAT diagnostic seen-key wiring', () => {
  it('generates a self-serve test around the shared seen set and records the new keys', async () => {
    seen.loadSeenKeys.mockResolvedValue(new Set(['already-seen']))
    gen.generateDiagnosticTest.mockResolvedValue(structuredClone(frozenTest))
    mockFetch()
    render(<SATDiagnosticPage />)
    fireEvent.click(await screen.findByRole('button', { name: /Start Diagnostic Test/i }))
    await screen.findByRole('button', { name: /^Start Diagnostic$/ })

    expect(seen.loadSeenKeys).toHaveBeenCalledWith('sat')
    const opts = gen.generateDiagnosticTest.mock.calls[0][0] as { excludeQuestionIds: Set<string> }
    expect(opts.excludeQuestionIds.has('already-seen')).toBe(true)
    expect(seen.recordSeenKeys).toHaveBeenCalledWith('sat', frozenTest.questions.flatMap(q => seenKeysForQuestion(q)))
    // The page no longer writes the seen key itself — the helper owns it.
    expect(window.localStorage.getItem('sat-diagnostic-seen-v1')).toBeNull()
  })

  it('does not consult the seen set for a teacher-assigned frozen test', async () => {
    searchParams.set('assigned', 'assigned-1')
    mockFetch()
    render(<SATDiagnosticPage />)
    fireEvent.click(await screen.findByRole('button', { name: /Start Diagnostic Test/i }))
    await screen.findByRole('button', { name: /^Start Diagnostic$/ })
    expect(seen.loadSeenKeys).not.toHaveBeenCalled()
    expect(gen.generateDiagnosticTest).not.toHaveBeenCalled()
  })
})
