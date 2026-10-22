// @vitest-environment jsdom
/**
 * The dashboard's "Your next step" card in the exam-aware AP modes (Phase 3
 * W4): the "Exam in N days" chip beside the label, the one filled button, and
 * the mode's other actions as text links after it.
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

const links = { flashcards: '/flashcards?course=ap-chemistry', practice: '/ap-chem-practice', mistakes: '/ap-chemistry/mistakes' }
const gases = { slug: 'ap-chem-gases', name: 'Gases', isSatisfied: false, topicPath: '/topics/ap-chem-gases' }

describe('NextStepCard — exam-aware AP modes', () => {
  it('exam week: chip, flashcards as the button, practice exam and mistake log as links', () => {
    const step: NextStep = { kind: 'ap-exam-week', planLabel: 'AP Chemistry', courseKey: 'ap-chem', days: 5, links }
    render(<NextStepCard step={step} />)
    expect(screen.getByTestId('next-step-exam-chip').textContent).toBe('Exam in 5 days')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Exam in 5 days — do these three things')
    const button = screen.getByRole('link', { name: /Review high-yield flashcards/ })
    expect(button).toHaveAttribute('href', '/flashcards?course=ap-chemistry')
    expect(button.className).toMatch(/bg-white/)
    const practice = screen.getByRole('link', { name: /Take a timed practice exam/ })
    expect(practice).toHaveAttribute('href', '/ap-chem-practice')
    expect(practice.className).not.toMatch(/bg-white/)
    expect(screen.getByRole('link', { name: /Review every mistake/ })).toHaveAttribute('href', '/ap-chemistry/mistakes')
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })

  it('confirm-5: the practice exam is the button and the next topic a text link', () => {
    const step: NextStep = { kind: 'ap-confirm-5', planLabel: 'AP Chemistry', courseKey: 'ap-chem', days: 200, href: '/ap-chem-practice', topic: gases }
    render(<NextStepCard step={step} hasSchedule />)
    expect(screen.getByTestId('next-step-exam-chip').textContent).toBe('Exam in 200 days')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe("You're on track for a 5 in AP Chemistry")
    expect(screen.getByRole('link', { name: /Take a practice exam/ })).toHaveAttribute('href', '/ap-chem-practice')
    expect(screen.getByRole('link', { name: /Start Gases/ })).toHaveAttribute('href', '/topics/ap-chem-gases/interactive')
    // The calendar link still rides along when a schedule exists.
    expect(screen.getByRole('link', { name: /See your study calendar/ })).toHaveAttribute('href', '/calendar')
  })

  it('plan mode: the topic step shows the chip only when the exam is ahead', () => {
    const step: NextStep = { kind: 'plan-topic', topic: gases, courseKey: 'ap-chem', planLabel: 'AP Chemistry', done: 1, total: 5, examDaysLeft: 40 }
    render(<NextStepCard step={step} />)
    expect(screen.getByTestId('next-step-exam-chip').textContent).toBe('Exam in 40 days')
    expect(screen.getAllByRole('link')).toHaveLength(1)
    cleanup()
    render(<NextStepCard step={{ ...step, examDaysLeft: null }} />)
    expect(screen.queryByTestId('next-step-exam-chip')).toBeNull()
    cleanup()
    render(<NextStepCard step={{ ...step, examDaysLeft: -3 }} />)
    expect(screen.queryByTestId('next-step-exam-chip')).toBeNull()
  })
})
