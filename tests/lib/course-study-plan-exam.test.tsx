// @vitest-environment jsdom
/**
 * The course hub's "Start here" block in the exam-aware AP modes (Phase 3
 * W4): the mode comes from the plan-status payload's estimatedScore /
 * scoreRange / examDaysLeft through the same function as the results screen
 * and the dashboard, and the "Exam in N days" chip sits on the block and on
 * the plan card.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup, within } from '@testing-library/react'
import type { ReactNode } from 'react'

const session = vi.hoisted(() => ({ status: 'authenticated' as 'unauthenticated' | 'authenticated' | 'loading' }))
vi.mock('next-auth/react', () => ({ useSession: () => ({ status: session.status, data: null }) }))
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))
vi.mock('@/components/FullLengthProgress', () => ({ default: () => null }))
vi.mock('@/components/ExamGoalCard', () => ({ default: () => null }))

import CourseStudyPlan, { planFromGenericPayload } from '@/components/CourseStudyPlan'

const topics = (satisfied: boolean[]) =>
  satisfied.map((s, i) => ({ slug: `t${i}`, name: `Topic ${i}`, priority: 'high', topicPath: `/topics/t${i}`, isSatisfied: s }))

function chemPlan(over: Record<string, unknown> = {}) {
  return {
    plans: [
      {
        courseKey: 'ap-chem',
        courseSlug: 'ap-chemistry',
        label: 'AP Chemistry',
        canRetakeDiagnostic: true,
        requiredScorePercent: 80,
        topics: topics([true, false, false]),
        estimatedScore: 3,
        scoreRange: { low: 2, high: 4 },
        examDaysLeft: 200,
        ...over,
      },
    ],
  }
}

function mockFetch(body: unknown) {
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: string) => {
      if (url.startsWith('/api/flashcards/review')) return { ok: true, json: async () => ({ stats: { due: 0, dueLaterToday: 0, nextDueAt: null } }) } as unknown as Response
      return { ok: true, json: async () => body } as unknown as Response
    }),
  )
}

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('CourseStudyPlan — exam-aware AP modes', () => {
  it('planFromGenericPayload carries the exam fields', () => {
    expect(planFromGenericPayload(chemPlan(), 'ap-chem')).toMatchObject({ courseSlug: 'ap-chemistry', estimatedScore: 3, scoreRange: { low: 2, high: 4 }, examDaysLeft: 200 })
    // The old payload shape (no fields) still parses, as nulls.
    const legacy = planFromGenericPayload({ plans: [{ courseKey: 'ap-chem', topics: topics([false]) }] }, 'ap-chem')
    expect(legacy).toMatchObject({ courseSlug: null, estimatedScore: null, scoreRange: null, examDaysLeft: null })
  })

  it('exam week: the three cram steps, flashcards as the one button, the plan still listed below with the chip', async () => {
    mockFetch(chemPlan({ examDaysLeft: 5 }))
    render(<CourseStudyPlan courseKey="ap-chem" courseSlug="ap-chemistry" />)
    const block = await screen.findByTestId('hub-mode-exam-week')
    expect(within(block).getByRole('heading', { level: 2 }).textContent).toBe('Exam in 5 days — do these three things')
    const button = within(block).getByRole('link', { name: /Review high-yield flashcards/ })
    expect(button).toHaveAttribute('href', '/flashcards?course=ap-chemistry')
    expect(button.className).toMatch(/bg-accent/)
    expect(within(block).getByRole('link', { name: /Take a timed AP Chemistry practice exam/ })).toHaveAttribute('href', '/ap-chem-practice')
    expect(within(block).getByRole('link', { name: /Review every mistake/ })).toHaveAttribute('href', '/ap-chemistry/mistakes')
    expect(screen.queryByText(/Next topic:/)).toBeNull()
    // Chip on the Start-here label and on the plan card.
    expect(screen.getAllByTestId('hub-exam-chip').map((c) => c.textContent)).toEqual(['Exam in 5 days', 'Exam in 5 days'])
    // The plan card still lists every topic.
    expect(screen.getByText('Your AP Chemistry study plan')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Topic 1/ })).toHaveAttribute('href', '/topics/t1/interactive')
  })

  it('confirm-5: the practice exam is the button, the next topic a text link', async () => {
    mockFetch(chemPlan({ estimatedScore: 5, scoreRange: { low: 4, high: 5 } }))
    render(<CourseStudyPlan courseKey="ap-chem" courseSlug="ap-chemistry" />)
    const block = await screen.findByTestId('hub-mode-confirm-5')
    expect(within(block).getByRole('heading', { level: 2 }).textContent).toMatch(/on track for a 5 — confirm it with a full practice exam/)
    const button = within(block).getByRole('link', { name: /Take a practice exam/ })
    expect(button).toHaveAttribute('href', '/ap-chem-practice')
    expect(button.className).toMatch(/bg-accent/)
    const topic = within(block).getByRole('link', { name: /Start Topic 1/ })
    expect(topic).toHaveAttribute('href', '/topics/t1/interactive')
    expect(topic.className).not.toMatch(/bg-accent /)
    expect(screen.getAllByTestId('hub-exam-chip')[0].textContent).toBe('Exam in 200 days')
  })

  it('plan mode: the next topic as before, with the countdown chip; no chip once the exam has passed', async () => {
    mockFetch(chemPlan())
    render(<CourseStudyPlan courseKey="ap-chem" courseSlug="ap-chemistry" />)
    expect(await screen.findByText('Next topic: Topic 1')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Start this topic/ })).toHaveAttribute('href', '/topics/t1/interactive')
    expect(screen.queryByTestId('hub-mode-exam-week')).toBeNull()
    expect(screen.getAllByTestId('hub-exam-chip')[0].textContent).toBe('Exam in 200 days')
    cleanup()
    vi.unstubAllGlobals()
    mockFetch(chemPlan({ estimatedScore: 5, examDaysLeft: -20 }))
    render(<CourseStudyPlan courseKey="ap-chem" courseSlug="ap-chemistry" />)
    expect(await screen.findByText('Next topic: Topic 1')).toBeInTheDocument()
    expect(screen.queryByTestId('hub-mode-confirm-5')).toBeNull()
    expect(screen.queryByTestId('hub-exam-chip')).toBeNull()
  })

  it('a non-AP course ignores the fields (no cram path, no chip)', async () => {
    mockFetch({ plans: [{ courseKey: 'algebra1', label: 'Algebra 1', topics: topics([false]), estimatedScore: 5, examDaysLeft: 3 }] })
    render(<CourseStudyPlan courseKey="algebra1" />)
    expect(await screen.findByText('Next topic: Topic 0')).toBeInTheDocument()
    expect(screen.queryByTestId('hub-mode-exam-week')).toBeNull()
    expect(screen.queryByTestId('hub-exam-chip')).toBeNull()
  })
})
