// @vitest-environment jsdom
/**
 * Permanent attempt review (AttemptReview) and the mistake re-quiz
 * (MistakeQuiz). Both render what their APIs return, so these feed fixture
 * payloads (and a stubbed fetch for the re-quiz).
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup, fireEvent, within, waitFor } from '@testing-library/react'

vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve(), renderKatexSync: (s: string) => s }))

import AttemptReview, { formatDuration, itemStatus, type AttemptReviewData, type AttemptReviewItem } from '@/components/AttemptReview'
import MistakeQuiz from '@/components/MistakeQuiz'

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

function item(over: Partial<AttemptReviewItem>): AttemptReviewItem {
  return {
    index: 0,
    questionKey: 'q:0000000000000000',
    question: 'Q?',
    options: ['Alpha', 'Bravo', 'Charlie', 'Delta'],
    correctIndex: 1,
    explanation: 'Because Bravo.',
    passage: null,
    chosenIndex: 1,
    chosenText: null,
    flagged: false,
    durationMs: null,
    ...over,
  }
}

const attempt: AttemptReviewData = {
  kind: 'sat-practice',
  id: 'a1',
  title: 'SAT practice test 1',
  course: 'sat',
  takenAt: '2026-10-09T15:00:00.000Z',
  score: { correct: 2, total: 5, label: '1210' },
  backHref: '/sat-practice',
  items: [
    item({ index: 0, question: 'Which is wrong?', chosenIndex: 2, durationMs: 72_000, discipline: 'Algebra', revised: true }),
    item({ index: 1, question: 'Which is right but flagged?', chosenIndex: 1, flagged: true }),
    null,
    item({ index: 3, question: 'Grid-in left blank', options: [], correctIndex: -1, chosenIndex: null, chosenText: null }),
    item({ index: 4, question: 'Plain correct', chosenIndex: 1 }),
  ],
}

describe('AttemptReview', () => {
  it('classifies items and formats durations', () => {
    expect(itemStatus(item({ chosenIndex: 1 }))).toBe('correct')
    expect(itemStatus(item({ chosenIndex: 0 }))).toBe('wrong')
    expect(itemStatus(item({ chosenIndex: null }))).toBe('skipped')
    expect(itemStatus(item({ options: [], correctIndex: -1, chosenIndex: null, chosenText: '12' }))).toBe('typed')
    expect(itemStatus(item({ options: [], correctIndex: -1, chosenIndex: null, chosenText: '12', correct: false }))).toBe('wrong')
    expect(formatDuration(72_000)).toBe('1m 12s')
    expect(formatDuration(45_000)).toBe('45s')
  })

  it('opens on Missed with counts, missed questions expanded and marked in text', () => {
    render(<AttemptReview attempt={attempt} />)
    expect(screen.getByRole('heading', { name: 'SAT practice test 1' })).toBeInTheDocument()
    expect(screen.getByText('2 of 5 correct')).toBeInTheDocument()

    const missed = screen.getByRole('button', { name: 'Missed (2)' })
    expect(missed).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Flagged (1)' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: 'All (5)' })).toBeInTheDocument()

    // The wrong answer is open by default: both marks are labelled in text.
    const wrongOption = screen.getByText('Charlie').closest('li')!
    expect(within(wrongOption).getByText('Your answer')).toBeInTheDocument()
    const keyOption = screen.getByText('Bravo').closest('li')!
    expect(within(keyOption).getByText('Correct answer')).toBeInTheDocument()
    expect(screen.getAllByText('Because Bravo.', { exact: false }).length).toBe(2)

    // Meta: time, discipline and the revised badge.
    expect(screen.getByText('1m 12s')).toBeInTheDocument()
    expect(screen.getByText('Algebra')).toBeInTheDocument()
    expect(screen.getByText('Revised since you took it')).toBeInTheDocument()

    // Blank grid-in counts as skipped and shows the typed-answer box.
    expect(screen.getByText('Skipped')).toBeInTheDocument()
    expect(screen.getByText('no answer entered')).toBeInTheDocument()
    // Correct questions are not on the Missed tab.
    expect(screen.queryByText('Plain correct')).toBeNull()
  })

  it('filters to flagged questions, and All shows the unavailable card', () => {
    render(<AttemptReview attempt={attempt} />)
    fireEvent.click(screen.getByRole('button', { name: 'Flagged (1)' }))
    expect(screen.getByText('Which is right but flagged?')).toBeInTheDocument()
    expect(screen.queryByText('Which is wrong?')).toBeNull()
    expect(screen.getAllByText('Flagged').length).toBeGreaterThan(0)

    fireEvent.click(screen.getByRole('button', { name: 'All (5)' }))
    expect(screen.getByText(/This question is no longer available/)).toBeInTheDocument()
    expect(screen.getByText('Plain correct')).toBeInTheDocument()
    // Not-missed questions start collapsed; a click opens them.
    const card = screen.getByText('Plain correct').closest('button')!
    expect(card).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(card)
    expect(card).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows a shared passage once for consecutive questions', () => {
    const passage = { id: 'p1', title: 'Cell biology', body: 'Passage body text.' }
    render(
      <AttemptReview
        attempt={{
          ...attempt,
          items: [
            item({ index: 0, question: 'P q1', chosenIndex: 0, passage }),
            item({ index: 1, question: 'P q2', chosenIndex: 0, passage }),
          ],
        }}
      />,
    )
    expect(screen.getAllByText('Show passage')).toHaveLength(1)
    expect(screen.getByText('· Q1–2')).toBeInTheDocument()
  })
})

describe('MistakeQuiz', () => {
  const sessionItems = [
    {
      position: 0,
      questionKey: 'q:aaaaaaaaaaaaaaaa',
      origin: { attemptKind: 'exit', attemptId: 'ex1', itemIndex: 3, source: 'EXIT' },
      question: 'First question?',
      options: ['One', 'Two', 'Three', 'Four'],
      passage: null,
      topicSlug: 'mcat-enzymes',
      discipline: 'Biochemistry',
      correctSince: 0,
    },
    {
      position: 1,
      questionKey: 'q:bbbbbbbbbbbbbbbb',
      origin: { attemptKind: 'mcat-fl', attemptId: 'fl1', itemIndex: 7, source: 'FULL_LENGTH' },
      question: 'Second question?',
      options: ['Red', 'Green', 'Blue', 'Gray'],
      passage: { id: 'px', title: 'Optics', body: 'Light bends.' },
      correctSince: 1,
    },
  ]

  function stubFetch() {
    const answers = [
      { correct: false, correctIndex: 2, explanation: 'Three is the key.', correctSince: 0, retireAfter: 2, retired: false },
      { correct: true, correctIndex: 0, explanation: 'Red it is.', correctSince: 2, retireAfter: 2, retired: true },
    ]
    const spy = vi.fn(async (url: string) => {
      if (url === '/api/mistakes/session') {
        return { ok: true, status: 200, json: async () => ({ sessionId: 'sess-12345678', unavailable: 1, items: sessionItems }) } as unknown as Response
      }
      if (url === '/api/mistakes/answer') {
        return { ok: true, status: 200, json: async () => answers.shift() } as unknown as Response
      }
      // Answer stats / AI status: not under test here.
      return { ok: false, status: 404, json: async () => ({}) } as unknown as Response
    })
    vi.stubGlobal('fetch', spy)
    return spy
  }

  it('grades each answer on the server, shows retirement progress, then a summary', async () => {
    const spy = stubFetch()
    const onDone = vi.fn()
    render(<MistakeQuiz course="mcat" filters={{ section: 'Biochemistry' }} onDone={onDone} />)

    expect(await screen.findByText('First question?')).toBeInTheDocument()
    expect(screen.getByText(/1 question couldn.t be rebuilt and was skipped/)).toBeInTheDocument()
    const sessionBody = JSON.parse((spy.mock.calls[0] as unknown as [string, RequestInit])[1].body as string)
    expect(sessionBody).toEqual({ course: 'mcat', section: 'Biochemistry' })

    const check = screen.getByRole('button', { name: /Check answer/ })
    expect(check).toBeDisabled()
    fireEvent.click(screen.getByRole('radio', { name: /Two/ }))
    fireEvent.click(check)

    expect(await screen.findByText('Incorrect')).toBeInTheDocument()
    const body = JSON.parse((spy.mock.calls[1] as unknown as [string, RequestInit])[1].body as string)
    expect(body).toMatchObject({
      course: 'mcat',
      sessionId: 'sess-12345678',
      position: 0,
      questionKey: 'q:aaaaaaaaaaaaaaaa',
      origin: { attemptKind: 'exit', attemptId: 'ex1', itemIndex: 3 },
      chosenIndex: 1,
    })
    expect(typeof body.durationMs).toBe('number')
    expect(screen.getByText('Three is the key.', { exact: false })).toBeInTheDocument()
    expect(within(screen.getByText('Two').closest('li')!).getByText('Your answer')).toBeInTheDocument()
    expect(within(screen.getByText('Three').closest('li')!).getByText('Correct answer')).toBeInTheDocument()
    expect(screen.getByText(/0 of 2 correct — retires after 2/)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Next/ }))
    expect(screen.getByText('Second question?')).toBeInTheDocument()
    expect(screen.getByText('Light bends.', { exact: false })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('radio', { name: /Red/ }))
    fireEvent.click(screen.getByRole('button', { name: /Check answer/ }))
    expect(await screen.findByText(/Retired from your log/)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /See results/ }))
    expect(screen.getByRole('heading', { name: 'Re-quiz complete' })).toBeInTheDocument()
    expect(screen.getByText('1 of 2')).toBeInTheDocument()
    const retired = screen.getByText('Retired from your log').closest('div')!
    expect(within(retired).getByText('1')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Back to the log' }))
    expect(onDone).toHaveBeenCalled()
  })

  it('"I don\'t know" submits a skipped answer', async () => {
    const spy = stubFetch()
    render(<MistakeQuiz course="sat" onDone={vi.fn()} />)
    await screen.findByText('First question?')
    fireEvent.click(screen.getByRole('button', { name: /I don.t know/ }))
    await waitFor(() => expect(spy.mock.calls.some((c) => c[0] === '/api/mistakes/answer')).toBe(true))
    const answerCall = spy.mock.calls.find((c) => c[0] === '/api/mistakes/answer') as unknown as [string, RequestInit]
    const body = JSON.parse(answerCall[1].body as string)
    expect(body.chosenIndex).toBeNull()
    expect(await screen.findByText('Not answered')).toBeInTheDocument()
  })
})
