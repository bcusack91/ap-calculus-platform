// @vitest-environment jsdom
/**
 * Every course hub with a diagnostic gets one "Start here" block
 * (CourseStudyPlan): the free diagnostic for a visitor, the next study-plan
 * topic for a student with a plan. It used to render only on /sat and /mcat,
 * and told every course "clear them all to unlock your next diagnostic" though
 * only the MCAT gates the retake.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import type { ReactNode } from 'react'

const session = vi.hoisted(() => ({ status: 'unauthenticated' as 'unauthenticated' | 'authenticated' | 'loading' }))
vi.mock('next-auth/react', () => ({ useSession: () => ({ status: session.status, data: null }) }))
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))

import CourseStudyPlan, { planFromGenericPayload } from '@/components/CourseStudyPlan'

function planPayload(courseKey: string, satisfied: boolean[]) {
  return {
    plans: [
      {
        courseKey,
        canRetakeDiagnostic: true,
        requiredScorePercent: 80,
        topics: satisfied.map((s, i) => ({
          slug: `t${i}`,
          name: `Topic ${i}`,
          priority: 'high',
          topicPath: `/topics/t${i}`,
          isSatisfied: s,
        })),
      },
    ],
  }
}

function mockFetch(body: unknown) {
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => body }) as unknown as Response))
}

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  session.status = 'unauthenticated'
})

describe('CourseStudyPlan — the hub "Start here" block', () => {
  it('signed out (and the static server render): take the free diagnostic', () => {
    render(<CourseStudyPlan courseKey="calcab" />)
    expect(screen.getByText('Start here')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /Take the free diagnostic/ })
    expect(link).toHaveAttribute('href', '/calcab-diagnostic')
  })

  it('signed in with a plan: the next uncleared topic, in the interactive lesson', async () => {
    session.status = 'authenticated'
    mockFetch(planPayload('calcab', [true, false, false]))
    render(<CourseStudyPlan courseKey="calcab" />)
    expect(await screen.findByText('Next topic: Topic 1')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Start this topic/ })).toHaveAttribute('href', '/topics/t1/interactive')
    // Ungated course: the retake is a suggestion, not an unlock
    expect(screen.getByText(/retake the diagnostic to see your growth/)).toBeInTheDocument()
    expect(screen.queryByText(/unlock your next diagnostic/)).toBeNull()
  })

  it('gated course (MCAT) keeps the unlock wording, from its own plan endpoint', async () => {
    session.status = 'authenticated'
    const topics = [{ slug: 'mcat-enzymes', name: 'Enzymes', priority: 'high', topicPath: '/topics/mcat-enzymes', isSatisfied: false }]
    const fetchSpy = vi.fn(async () => ({
      ok: true,
      json: async () => ({ hasDiagnostic: true, canRetakeDiagnostic: false, requiredScorePercent: 80, recommendedTopics: topics, pendingTopics: topics }),
    }) as unknown as Response)
    vi.stubGlobal('fetch', fetchSpy)
    render(<CourseStudyPlan courseKey="mcat" />)
    expect(await screen.findByText(/Clear them all to unlock your next diagnostic/)).toBeInTheDocument()
    expect(fetchSpy).toHaveBeenCalledWith('/api/mcat-diagnostic/plan-status')
    // MCAT subtopic pages, not /interactive (many have no written lesson)
    expect(screen.getByRole('link', { name: /Start this topic/ })).toHaveAttribute('href', '/topics/mcat-enzymes')
  })

  it('reads one course out of the generic plan-status payload', () => {
    expect(planFromGenericPayload(planPayload('calcab', [true, false]), 'calcab')?.pendingTopics).toHaveLength(1)
    expect(planFromGenericPayload(planPayload('calcab', [true]), 'ap-bio')).toBeNull()
    expect(planFromGenericPayload(null, 'calcab')).toBeNull()
  })

  it('every topic cleared: retake the diagnostic', async () => {
    session.status = 'authenticated'
    mockFetch(planPayload('ap-bio', [true, true]))
    render(<CourseStudyPlan courseKey="ap-bio" />)
    expect(await screen.findByRole('link', { name: /Retake the diagnostic/ })).toHaveAttribute('href', '/ap-bio-diagnostic')
  })

  it("signed in with no plan for THIS course: the diagnostic (another course's plan is ignored)", async () => {
    session.status = 'authenticated'
    mockFetch(planPayload('ap-bio', [false]))
    render(<CourseStudyPlan courseKey="calcab" />)
    expect(await screen.findByRole('link', { name: /Take the free diagnostic/ })).toHaveAttribute('href', '/calcab-diagnostic')
  })
})
