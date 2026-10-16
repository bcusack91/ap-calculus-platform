// @vitest-environment jsdom
/**
 * The course hub shows an AP track student their track with one line of
 * explanation (src/lib/ap-track.ts), from the generic plan-status payload.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import type { ReactNode } from 'react'

vi.mock('next-auth/react', () => ({ useSession: () => ({ status: 'authenticated', data: null }) }))
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))

import CourseStudyPlan from '@/components/CourseStudyPlan'

const payload = (apTrack: unknown) => ({
  plans: [{
    courseKey: 'ap-chem',
    canRetakeDiagnostic: true,
    requiredScorePercent: 80,
    topics: [{ slug: 'ideal-gas-law', name: 'Ideal Gas Law', priority: 'high', topicPath: '/topics/ideal-gas-law', isSatisfied: false }],
    apTrack,
  }],
})
const mockFetch = (body: unknown) =>
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => body }) as unknown as Response))

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('CourseStudyPlan — AP track line', () => {
  it('shows the track and its one-line explanation on the plan', async () => {
    mockFetch(payload({
      track: 'five',
      label: '5-track',
      explanation: 'Your last diagnostic estimated a 5, so your exit quizzes lean toward medium and hard questions and your plan starts with the units the exam weights most. The pass mark is still 80%.',
    }))
    render(<CourseStudyPlan courseKey="ap-chem" />)
    expect(await screen.findByText('5-track')).toBeInTheDocument()
    expect(screen.getByText(/lean toward medium and hard questions/)).toBeInTheDocument()
  })

  it('shows nothing for a course without tracks', async () => {
    mockFetch(payload(null))
    render(<CourseStudyPlan courseKey="ap-chem" />)
    expect(await screen.findByText('Next topic: Ideal Gas Law')).toBeInTheDocument()
    expect(screen.queryByText(/track/i)).toBeNull()
  })
})
