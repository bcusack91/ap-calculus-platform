// @vitest-environment jsdom
/**
 * Review-page enhancements in the browser: "how others answered" appears only
 * after answering and never when there are too few responses; the AI tutor
 * renders nothing until /api/ai/status says it is on; per-option explanations
 * replace the single explanation; the Report tab.
 */
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent, within, waitFor } from '@testing-library/react'

vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve(), renderKatexSync: (s: string) => s }))
vi.mock('next/link', () => ({ default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => <a href={href} {...rest}>{children}</a> }))

import AttemptReview, { type AttemptReviewData, type AttemptReviewItem } from '@/components/AttemptReview'
import MistakeQuiz from '@/components/MistakeQuiz'
import AskAboutQuestion, { resetQuestionTutorStatus } from '@/components/AskAboutQuestion'
import { AnswerStatsSummary, formatStatTime } from '@/components/AnswerStats'

type Handler = (url: string, init?: RequestInit) => unknown
function stubFetch(routes: Record<string, Handler>) {
  const spy = vi.fn(async (url: string, init?: RequestInit) => {
    const path = url.split('?')[0]
    const h = routes[path]
    if (!h) return { ok: false, status: 404, json: async () => ({}) } as unknown as Response
    const body = h(url, init)
    return { ok: true, status: 200, json: async () => body } as unknown as Response
  })
  vi.stubGlobal('fetch', spy)
  return spy
}

beforeEach(() => resetQuestionTutorStatus())
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
    chosenIndex: 2,
    chosenText: null,
    flagged: false,
    durationMs: 100_000,
    ...over,
  }
}

function attempt(items: AttemptReviewItem[], kind = 'sat-practice'): AttemptReviewData {
  return { kind, id: 'a1', title: 'Practice', course: 'sat', takenAt: '2026-10-09T15:00:00.000Z', score: null, backHref: '/', items }
}

describe('answer stats on review cards', () => {
  it('shows shares and the summary when there are enough responses, nothing when insufficient', async () => {
    const spy = stubFetch({
      '/api/questions/stats': (_u, init) => {
        const { items } = JSON.parse(init!.body as string) as { items: { questionKey: string }[] }
        return {
          items: items.map((i) =>
            i.questionKey === 'q:aaaaaaaaaaaaaaaa'
              ? { questionKey: i.questionKey, responses: 42, shares: [0.1, 0.6, 0.25, 0.05], medianSeconds: 65 }
              : { questionKey: i.questionKey, responses: 3, insufficient: true },
          ),
        }
      },
    })
    render(
      <AttemptReview
        attempt={attempt([
          item({ index: 0, questionKey: 'q:aaaaaaaaaaaaaaaa', question: 'Has stats' }),
          item({ index: 1, questionKey: 'q:bbbbbbbbbbbbbbbb', question: 'Too few', options: ['W', 'X', 'Y', 'Z'] }),
        ])}
      />,
    )
    expect(await screen.findByText('42 students answered · median 1m 05s · you took 1m 40s')).toBeInTheDocument()
    // One batched request for the page.
    expect(spy.mock.calls.filter((c) => c[0] === '/api/questions/stats')).toHaveLength(1)
    const bravo = screen.getByText('Bravo').closest('li')!
    expect(within(bravo).getByText('60%')).toBeInTheDocument()
    expect(within(bravo).getByText(/of students chose B/)).toBeInTheDocument()
    // The insufficient item shows no shares and no summary.
    const w = screen.getByText('W').closest('li')!
    expect(within(w).queryByText(/%/)).toBeNull()
    expect(screen.getAllByText(/students answered/)).toHaveLength(1)
  })

  it('summary renders nothing for insufficient stats and formats times', () => {
    const { container } = render(<AnswerStatsSummary stat={{ questionKey: 'q', responses: 5, insufficient: true }} durationMs={1000} />)
    expect(container.textContent).toBe('')
    expect(formatStatTime(45)).toBe('45s')
    expect(formatStatTime(65)).toBe('1m 05s')
  })
})

describe('stats in the mistake re-quiz', () => {
  it('asks for stats only after the answer is graded', async () => {
    const spy = stubFetch({
      '/api/mistakes/session': () => ({
        sessionId: 'sess-12345678',
        unavailable: 0,
        items: [
          { position: 0, questionKey: 'q:aaaaaaaaaaaaaaaa', origin: { attemptKind: 'exit', attemptId: 'ex1', itemIndex: 3 }, question: 'First?', options: ['One', 'Two', 'Three', 'Four'], passage: null, correctSince: 0 },
        ],
      }),
      '/api/mistakes/answer': () => ({ correct: false, correctIndex: 2, explanation: 'Three.', correctSince: 0, retireAfter: 2, retired: false }),
      '/api/questions/stats': () => ({ items: [{ questionKey: 'q:aaaaaaaaaaaaaaaa', responses: 25, shares: [0.2, 0.3, 0.4, 0.1], medianSeconds: 30 }] }),
    })
    render(<MistakeQuiz course="mcat" onDone={vi.fn()} />)
    await screen.findByText('First?')
    expect(spy.mock.calls.some((c) => c[0] === '/api/questions/stats')).toBe(false)
    expect(screen.queryByText(/students answered/)).toBeNull()

    fireEvent.click(screen.getByRole('radio', { name: /Two/ }))
    fireEvent.click(screen.getByRole('button', { name: /Check answer/ }))
    expect(await screen.findByText(/25 students answered · median 30s/)).toBeInTheDocument()
    const statsCall = spy.mock.calls.find((c) => c[0] === '/api/questions/stats') as unknown as [string, RequestInit]
    expect(JSON.parse(statsCall[1].body as string)).toEqual({ items: [{ questionKey: 'q:aaaaaaaaaaaaaaaa', options: ['One', 'Two', 'Three', 'Four'] }] })
    expect(within(screen.getByText('Three').closest('li')!).getByText('40%')).toBeInTheDocument()
  })
})

describe('AskAboutQuestion', () => {
  it('renders nothing while the tutor is off', async () => {
    const spy = stubFetch({ '/api/ai/status': () => ({ questionTutor: false }) })
    const { container } = render(<AskAboutQuestion target={{ kind: 'qbank', attemptId: 's1', itemIndex: 0 }} />)
    await waitFor(() => expect(spy).toHaveBeenCalledWith('/api/ai/status', expect.anything()))
    expect(container.innerHTML).toBe('')
    expect(screen.queryByRole('button', { name: /Ask about this question/ })).toBeNull()
  })

  it('when on: asks the server with only the target and the follow-up, and shows the answer', async () => {
    const spy = stubFetch({
      '/api/ai/status': () => ({ questionTutor: true }),
      '/api/ai/question': () => ({ answer: 'B is right because…' }),
    })
    render(<AskAboutQuestion target={{ kind: 'qbank', attemptId: 's1', itemIndex: 4 }} />)
    fireEvent.click(await screen.findByRole('button', { name: /Add a question of your own/ }))
    fireEvent.change(screen.getByLabelText(/Your question/), { target: { value: 'Why not A?' } })
    fireEvent.click(screen.getByRole('button', { name: /Ask about this question/ }))
    expect(await screen.findByText('B is right because…')).toBeInTheDocument()
    const call = spy.mock.calls.find((c) => c[0] === '/api/ai/question') as unknown as [string, RequestInit]
    expect(JSON.parse(call[1].body as string)).toEqual({ kind: 'qbank', attemptId: 's1', itemIndex: 4, followUp: 'Why not A?' })
  })
})

describe('per-option explanations', () => {
  it('shows each option’s own explanation and drops the single one', () => {
    stubFetch({})
    render(
      <AttemptReview
        attempt={attempt([
          item({ optionExplanations: ['Alpha misreads it.', 'Bravo fits the data.', 'Charlie reverses it.', 'Delta is off topic.'] }),
        ])}
      />,
    )
    const charlie = screen.getByText('Charlie').closest('li')!
    expect(within(charlie).getByText('Why it’s wrong:')).toBeInTheDocument()
    expect(within(charlie).getByText('Charlie reverses it.')).toBeInTheDocument()
    expect(within(screen.getByText('Bravo').closest('li')!).getByText('Why it’s right:')).toBeInTheDocument()
    expect(screen.queryByText('Because Bravo.')).toBeNull()
  })

  it('falls back to the single explanation without them', () => {
    stubFetch({})
    render(<AttemptReview attempt={attempt([item({})])} />)
    expect(screen.getByText('Because Bravo.')).toBeInTheDocument()
    expect(screen.queryByText(/Why it.s wrong/)).toBeNull()
  })
})

describe('Report tab', () => {
  it('appears on test reviews with accuracy by section, weakest first', () => {
    stubFetch({})
    render(
      <AttemptReview
        attempt={attempt([
          item({ index: 0, discipline: 'Math', chosenIndex: 1 }),
          item({ index: 1, questionKey: 'q:1', discipline: 'Reading and Writing', chosenIndex: 0 }),
          item({ index: 2, questionKey: 'q:2', discipline: 'Math', chosenIndex: 1, durationMs: 30_000 }),
        ])}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: /Report/ }))
    const heading = screen.getByRole('heading', { name: 'By section' })
    const list = heading.closest('section')!
    const labels = within(list).getAllByRole('listitem').map((li) => li.textContent)
    expect(labels[0]).toContain('Reading and Writing')
    expect(labels[0]).toContain('0 of 1 correct')
    expect(labels[1]).toContain('Math')
    expect(labels[1]).toContain('2 of 2 correct')
    expect(screen.getByRole('heading', { name: 'Slowest questions' })).toBeInTheDocument()
  })

  it('is absent on exit-quiz reviews', () => {
    stubFetch({})
    render(<AttemptReview attempt={attempt([item({})], 'exit')} />)
    expect(screen.queryByRole('button', { name: /Report/ })).toBeNull()
  })
})
