// @vitest-environment jsdom
/**
 * The dashboard's "Your next step" card links the study calendar when the
 * student has a dated cycle (UX Phase 3, friction #8) — and only then, so the
 * card keeps its one button otherwise.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import type { ReactNode } from 'react'

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))
vi.mock('@/components/HelpLink', () => ({
  default: () => null,
  HELP_ARTICLES: new Proxy({}, { get: (_t, key) => `/help/${String(key)}` }),
}))
vi.mock('@/components/ClassDiagnosticBanner', () => ({
  dueDeadline: (d: string) => new Date(d),
  formatDueDate: (d: string) => d,
}))

import NextStepCard from '@/components/dashboard/NextStepCard'
import type { NextStep } from '@/lib/dashboard-next-step'

afterEach(cleanup)

const step: NextStep = {
  kind: 'plan-topic',
  topic: { slug: 'ap-chem-gases', name: 'Gases', isSatisfied: false, topicPath: '/topics/ap-chem-gases' },
  courseKey: 'ap-chem',
  planLabel: 'AP Chemistry',
  done: 1,
  total: 5,
}

describe('NextStepCard calendar link', () => {
  it('offers the calendar beside the one button when a schedule exists', () => {
    render(<NextStepCard step={step} hasSchedule />)
    expect(screen.getByRole('link', { name: 'Start this topic' })).toHaveAttribute('href', '/topics/ap-chem-gases/interactive')
    expect(screen.getByRole('link', { name: /See your study calendar/ })).toHaveAttribute('href', '/calendar')
  })

  it('keeps the single button when there is no schedule', () => {
    render(<NextStepCard step={step} />)
    expect(screen.getByRole('link', { name: 'Start this topic' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /calendar/i })).toBeNull()
  })
})
