// @vitest-environment jsdom
/**
 * QbankRunner: tutor mode checks each answer with the server and shows the
 * explanation; timed mode navigates freely, flags, and submits the whole set
 * (confirming when questions are unanswered), then links to the review.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'

vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve(), renderKatexSync: (s: string) => s }))

import QbankRunner from '@/components/QbankRunner'
import type { QbankSessionView } from '@/lib/qbank-types'

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

function view(over: Partial<QbankSessionView> = {}): QbankSessionView {
  return {
    id: 'qs1',
    course: 'mcat',
    mode: 'tutor',
    filters: {},
    timeLimitSec: null,
    total: 2,
    startedAt: new Date().toISOString(),
    completedAt: null,
    items: [
      { index: 0, question: 'Which is a noble gas?', options: ['Neon', 'Sodium', 'Iron', 'Carbon'], passage: null, typed: false, topicSlug: 't', section: 'chem-phys', discipline: 'General Chemistry' },
      { index: 1, question: 'Pick B', options: ['A', 'B', 'C', 'D'], passage: { id: 'p', title: 'Study 1', body: 'Passage body' }, typed: false, topicSlug: 't', section: 'chem-phys', discipline: 'General Chemistry' },
    ],
    answers: [null, null],
    flags: [false, false],
    timings: [0, 0],
    feedback: [null, null],
    result: null,
    ...over,
  }
}

describe('QbankRunner', () => {
  it('tutor: checks an answer on the server and shows the verdict and explanation', async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ correct: true, correctIndex: 0, explanation: 'Neon has a full shell.', completed: false })))
    vi.stubGlobal('fetch', fetchMock)
    render(<QbankRunner initial={view()} onNew={() => {}} />)
    expect(screen.getByText('Question 1 of 2')).toBeTruthy()
    const check = screen.getByRole('button', { name: /check answer/i }) as HTMLButtonElement
    expect(check.disabled).toBe(true)
    fireEvent.click(screen.getByRole('radio', { name: /Neon/ }))
    fireEvent.click(check)
    await waitFor(() => expect(screen.getByText('Neon has a full shell.')).toBeTruthy())
    expect(screen.getByRole('status').textContent).toMatch(/Correct/)
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe('/api/qbank/qs1/answer')
    expect(JSON.parse(init.body as string)).toMatchObject({ index: 0, chosenIndex: 0, flagged: false })
    fireEvent.click(screen.getByRole('button', { name: /next question/i }))
    expect(screen.getByText('Question 2 of 2')).toBeTruthy()
    expect(screen.getAllByText('Passage body').length).toBeGreaterThan(0)
  })

  it('timed: shows the clock, flags, navigates, and confirms before submitting with blanks', async () => {
    const done = view({
      mode: 'timed',
      completedAt: new Date().toISOString(),
      answers: [{ chosenIndex: 0, chosenText: null }, null],
      flags: [true, false],
      feedback: [
        { correct: true, correctIndex: 0, explanation: 'x' },
        { correct: false, correctIndex: 1, explanation: 'y' },
      ],
      result: { correct: 1, total: 2, answered: 1 },
    })
    const fetchMock = vi.fn(async (url: string) =>
      url.endsWith('/submit') ? new Response(JSON.stringify({ session: done, attemptId: 'qs1', score: done.result })) : new Response('{}'),
    )
    vi.stubGlobal('fetch', fetchMock)
    render(<QbankRunner initial={view({ mode: 'timed', timeLimitSec: 190 })} onNew={() => {}} />)
    expect(screen.getByLabelText(/time remaining 3:10/i)).toBeTruthy()
    fireEvent.click(screen.getByRole('radio', { name: /Neon/ }))
    fireEvent.click(screen.getByRole('button', { name: 'Flag' }))
    expect(screen.getByRole('button', { name: 'Flagged' }).getAttribute('aria-pressed')).toBe('true')
    fireEvent.click(screen.getByRole('button', { name: /question 2, not answered/i }))
    expect(screen.getByText('Question 2 of 2')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /submit set/i }))
    expect(screen.getByText(/1 question is unanswered and will count as skipped/)).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /^submit$/i }))
    await waitFor(() => expect(screen.getByText('Set complete')).toBeTruthy())
    const submitCall = fetchMock.mock.calls.find((c) => String(c[0]).endsWith('/submit')) as unknown as [string, RequestInit]
    expect(JSON.parse(submitCall[1].body as string)).toMatchObject({ answers: [{ chosenIndex: 0, chosenText: null }, null], flags: [true, false] })
    expect(screen.getByRole('link', { name: /review every question/i }).getAttribute('href')).toBe('/review/qbank/qs1')
    expect(screen.getByRole('link', { name: /mistake log/i }).getAttribute('href')).toBe('/mcat/mistakes')
  })
})
