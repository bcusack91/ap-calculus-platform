// @vitest-environment jsdom
/**
 * SATFullTest in PSAT mode (labels, submit payload, PSAT results with ranges
 * and the Selection Index) and its question navigator, whose states carry
 * icons and text, never color alone.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, act, cleanup, within } from '@testing-library/react'
import type { SATFullTest, SATTestSection } from '@/data/sat-practice/test-generator'

vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve() }))
vi.mock('@/hooks/useActivitySurface', () => ({ useActivitySurface: () => {} }))

import SATFullTestComponent, { SATTestWrapper, SATResultsView, satNavigatorItems } from '@/components/SATFullTest'

const q = (id: string, text: string) => ({
  id, question: text, options: ['no', 'yes', 'maybe', 'never'], correctIndex: 1, explanation: '',
  category: 'x', section: 'reading-writing' as const, sourceSlug: 'sat-grammar-usage',
})
const module1: SATTestSection = {
  id: 'rw-1', name: 'Reading & Writing — Module 1', section: 'reading-writing', moduleNum: 1, questionCount: 3, timeLimitSeconds: 600,
  questions: [q('a', 'First question'), q('b', 'Second question'), q('c', 'Third question')],
}
const oneModule = (exam?: 'psat'): SATFullTest => ({
  testNumber: 2, format: 'mini', ...(exam ? { exam } : {}), totalQuestions: 3, totalTimeSeconds: 600, sections: [module1],
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('SATFullTest question navigator', () => {
  it('builds items with answered / unanswered / flagged / current state', () => {
    const items = satNavigatorItems(
      [
        { questionIndex: 0, selectedIndex: 1, textValue: null, flagged: false },
        { questionIndex: 1, selectedIndex: null, textValue: null, flagged: true },
        { questionIndex: 2, selectedIndex: null, textValue: null, flagged: false },
      ],
      module1.questions,
      1,
    )
    expect(items.map((i) => [i.label, i.answered, i.flagged, i.current])).toEqual([
      ['1', true, false, false],
      ['2', false, true, true],
      ['3', false, false, false],
    ])
  })

  it('labels every navigator button with its state in text', () => {
    render(<SATFullTestComponent test={oneModule()} onComplete={vi.fn()} onCancel={vi.fn()} />)
    fireEvent.click(screen.getByText('Begin Test'))
    fireEvent.click(screen.getByText('yes').closest('button')!) // answer Q1
    fireEvent.click(screen.getByText('Next →'))
    fireEvent.click(screen.getByText('Flag').closest('button')!) // flag Q2 (current)
    fireEvent.click(screen.getByRole('button', { name: /Navigator/ }))

    const grid = screen.getByRole('list', { name: 'Questions' })
    const buttons = within(grid).getAllByRole('button')
    expect(buttons.map((b) => b.getAttribute('aria-label'))).toEqual([
      'Question 1, answered',
      'Question 2, unanswered, flagged for review, current question',
      'Question 3, unanswered',
    ])
    expect(buttons[1].getAttribute('aria-current')).toBe('true')
    // A visible legend names each state.
    const legend = screen.getByRole('list', { name: 'Legend' })
    for (const label of [/^\s*Answered$/, /^\s*Unanswered \(dashed\)$/, /^\s*Flagged$/, /^\s*Current \(outlined\)$/]) {
      expect(within(legend).getByText(label)).toBeTruthy()
    }
    // Jumping works and closes the navigator.
    fireEvent.click(buttons[2])
    expect(screen.getByText('Third question')).toBeTruthy()
    expect(screen.queryByRole('list', { name: 'Questions' })).toBeNull()
  })

  it('names the review screen jump buttons in text too', () => {
    render(<SATFullTestComponent test={oneModule()} onComplete={vi.fn()} onCancel={vi.fn()} />)
    fireEvent.click(screen.getByText('Begin Test'))
    fireEvent.click(screen.getByText('Flag').closest('button')!)
    fireEvent.click(screen.getByText('Next →'))
    fireEvent.click(screen.getByText('Next →'))
    fireEvent.click(screen.getByText('Review & Submit'))
    expect(screen.getByRole('button', { name: 'Question 1, unanswered, flagged for review' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Question 3, unanswered' })).toBeTruthy()
  })
})

describe('SATFullTest PSAT mode', () => {
  it('labels the intro as the PSAT/NMSQT', () => {
    render(<SATFullTestComponent test={oneModule('psat')} onComplete={vi.fn()} onCancel={vi.fn()} />)
    expect(screen.getByText('PSAT Practice Test 2')).toBeTruthy()
    expect(screen.getByText(/Digital PSAT\/NMSQT Simulation/)).toBeTruthy()
  })

  it('submits with exam psat and shows the server PSAT scores, ranges and Selection Index', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ attemptId: 'p1', rwScore: 700, mathScore: 680, totalScore: 1380, rwCorrect: 3, rwTotal: 3, mathCorrect: 0, mathTotal: 0 }),
    })
    vi.stubGlobal('fetch', fetchMock)
    render(<SATTestWrapper test={oneModule('psat')} onComplete={vi.fn()} onCancel={vi.fn()} />)
    fireEvent.click(screen.getByText('Begin Test'))
    fireEvent.click(screen.getByText('Next →'))
    fireEvent.click(screen.getByText('Next →'))
    fireEvent.click(screen.getByText('Review & Submit'))
    await act(async () => { fireEvent.click(screen.getByText('Submit Section')) })

    const body = JSON.parse(fetchMock.mock.calls[0][1].body)
    expect(body).toMatchObject({ testNumber: 2, exam: 'psat' })
    expect(await screen.findByText('1380')).toBeTruthy()
    expect(screen.getByText(/out of 1520 · likely range 1340–1420/)).toBeTruthy()
    expect(screen.getByText('208')).toBeTruthy() // (2·700 + 680) / 10
    expect(screen.getByText(/likely 202–214/)).toBeTruthy()
    expect(screen.getByRole('link', { name: /state.s cutoffs/ }).getAttribute('href')).toBe('/psat-selection-index')
    expect(screen.getByRole('link', { name: 'Review every question' }).getAttribute('href')).toBe('/review/sat-practice/p1')
  })

  it('keeps the SAT results on the SAT scale, with a range and no Selection Index', () => {
    render(
      <SATResultsView
        results={{ rwScore: 650, mathScore: 650, totalScore: 1300, rwCorrect: 40, rwTotal: 54, mathCorrect: 30, mathTotal: 44, timeSpent: 100, sections: [], weakAreas: [], strengths: [] }}
        testNumber={1}
        onCancel={vi.fn()}
      />,
    )
    expect(screen.getByText(/out of 1600 · likely range 1270–1330/)).toBeTruthy()
    expect(screen.queryByText(/Selection Index/)).toBeNull()
  })
})
