// @vitest-environment jsdom
/**
 * Exam-screen parity tools (batch 2, A2): question navigator states + jump,
 * passage highlighter add/remove, real-exam keyboard shortcuts, the MCAT
 * review screen, the SAT math reference sheet and the hide-timer toggle.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act, fireEvent, within, cleanup } from '@testing-library/react'
import type { ReactNode } from 'react'
import type { MCATPassage } from '@/data/mcat/types'
import type { SATFullTest, SATTestSection } from '@/data/sat-practice/test-generator'

vi.mock('@/lib/katex-lazy', () => ({
  preloadKatex: () => Promise.resolve(),
  renderKatexSync: (s: string) => s,
}))
vi.mock('@/hooks/useActivitySurface', () => ({ useActivitySurface: () => {} }))
vi.mock('next-auth/react', () => ({ useSession: () => ({ data: null }) }))
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode }) => <a href={href} {...rest}>{children}</a>,
}))

import QuestionNavigator, { type NavigatorItem } from '@/components/exam/QuestionNavigator'
import PassageHighlighter from '@/components/exam/PassageHighlighter'
import { examShortcutFor } from '@/components/exam/exam-shortcuts'
import MCATPassageRunner from '@/components/MCATPassageRunner'
import SATFullTestComponent from '@/components/SATFullTest'

afterEach(() => { cleanup(); vi.useRealTimers() })

/* ------------------------------------------------------------------ */
/*  Navigator                                                          */
/* ------------------------------------------------------------------ */

describe('QuestionNavigator', () => {
  const items: NavigatorItem[] = [
    { key: '0:0', label: '1', answered: true, flagged: false, current: false, group: 'Passage 1' },
    { key: '0:1', label: '2', answered: false, flagged: true, current: true, group: 'Passage 1' },
    { key: '1:0', label: '3', answered: false, flagged: false, current: false, group: 'Passage 2' },
  ]

  it('labels every state in text (not color alone) and marks the current question', () => {
    render(<QuestionNavigator items={items} onJump={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Question 1, Passage 1, answered' })).toBeTruthy()
    const q2 = screen.getByRole('button', { name: 'Question 2, Passage 1, unanswered, flagged for review, current question' })
    expect(q2.getAttribute('aria-current')).toBe('true')
    expect(screen.getByRole('button', { name: 'Question 3, Passage 2, unanswered' }).getAttribute('aria-current')).toBeNull()
    expect(screen.getByText('1 of 3 answered · 1 flagged')).toBeTruthy()
    // Legend spells the states out.
    const legend = screen.getByRole('list', { name: 'Legend' })
    expect(within(legend).getByText(/Answered/)).toBeTruthy()
    expect(within(legend).getByText(/Flagged/)).toBeTruthy()
  })

  it('jumps to the clicked question', () => {
    const onJump = vi.fn()
    render(<QuestionNavigator items={items} onJump={onJump} />)
    fireEvent.click(screen.getByRole('button', { name: /^Question 3,/ }))
    expect(onJump).toHaveBeenCalledWith(2)
  })
})

/* ------------------------------------------------------------------ */
/*  Highlighter                                                        */
/* ------------------------------------------------------------------ */

function selectText(region: HTMLElement, text: string) {
  const walker = document.createTreeWalker(region, NodeFilter.SHOW_TEXT)
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const i = (n.textContent ?? '').indexOf(text)
    if (i >= 0) {
      const range = document.createRange()
      range.setStart(n, i)
      range.setEnd(n, i + text.length)
      const sel = window.getSelection()!
      sel.removeAllRanges()
      sel.addRange(range)
      fireEvent.mouseUp(region)
      return
    }
  }
  throw new Error(`text not found: ${text}`)
}

describe('PassageHighlighter', () => {
  it('highlights selected text and removes it again', async () => {
    const onChange = vi.fn()
    const text = 'The **enzyme** binds its substrate tightly.'
    const { rerender } = render(<PassageHighlighter text={text} highlights={[]} onChange={onChange} label="Passage" />)
    await act(async () => {})
    const region = screen.getByRole('region', { name: 'Passage' })

    // Nothing selected: the button is reachable but inert.
    const highlightBtn = screen.getByRole('button', { name: 'Highlight' })
    expect(highlightBtn.getAttribute('aria-disabled')).toBe('true')
    fireEvent.click(highlightBtn)
    expect(onChange).not.toHaveBeenCalled()

    // "The enzyme binds" → prose offsets skip the markdown markup.
    selectText(region, 'binds its')
    expect(highlightBtn.getAttribute('aria-disabled')).toBe('false')
    fireEvent.click(highlightBtn)
    expect(onChange).toHaveBeenLastCalledWith([{ start: 11, end: 20 }])

    rerender(<PassageHighlighter text={text} highlights={[{ start: 11, end: 20 }]} onChange={onChange} label="Passage" />)
    const mark = region.querySelector('mark')!
    expect(mark.textContent).toBe('binds its')

    // Clicking the highlight targets it for removal.
    fireEvent.click(mark)
    fireEvent.click(screen.getByRole('button', { name: 'Remove highlight' }))
    expect(onChange).toHaveBeenLastCalledWith([])
  })

  it('removes just the selected part of a highlight', async () => {
    const onChange = vi.fn()
    render(<PassageHighlighter text="alpha beta gamma" highlights={[{ start: 0, end: 16 }]} onChange={onChange} />)
    await act(async () => {})
    selectText(screen.getByRole('region', { name: 'Passage' }), 'beta')
    fireEvent.click(screen.getByRole('button', { name: 'Remove highlight' }))
    expect(onChange).toHaveBeenLastCalledWith([{ start: 0, end: 6 }, { start: 10, end: 16 }])
  })
})

/* ------------------------------------------------------------------ */
/*  Shortcut matching                                                  */
/* ------------------------------------------------------------------ */

describe('examShortcutFor', () => {
  const ev = (code: string, extra: Partial<KeyboardEvent> = {}, target: EventTarget | null = document.body) =>
    ({ altKey: true, ctrlKey: false, metaKey: false, shiftKey: false, repeat: false, code, target, ...extra }) as KeyboardEvent

  it('maps Alt+N/P/F/V by physical key (works with macOS Option)', () => {
    expect(examShortcutFor(ev('KeyN'))).toBe('next')
    expect(examShortcutFor(ev('KeyP'))).toBe('prev')
    expect(examShortcutFor(ev('KeyF'))).toBe('flag')
    expect(examShortcutFor(ev('KeyV'))).toBe('navigator')
  })

  it('ignores other chords and typing targets', () => {
    expect(examShortcutFor(ev('KeyN', { altKey: false }))).toBeNull()
    expect(examShortcutFor(ev('KeyN', { ctrlKey: true }))).toBeNull()
    expect(examShortcutFor(ev('KeyX'))).toBeNull()
    expect(examShortcutFor(ev('KeyN', {}, document.createElement('input')))).toBeNull()
    expect(examShortcutFor(ev('KeyN', {}, document.createElement('textarea')))).toBeNull()
  })
})

/* ------------------------------------------------------------------ */
/*  MCAT runner integration                                            */
/* ------------------------------------------------------------------ */

const mq = (stem: string) => ({
  question: stem,
  options: ['opt A', 'opt B', 'opt C', 'opt D'] as [string, string, string, string],
  correctAnswer: 0,
  explanation: 'because',
})
const passages: MCATPassage[] = [
  { id: 'cp-1', section: 'chem-phys', discipline: 'physics', title: 'Springs', passageText: 'A spring obeys Hooke law.', questions: [mq('First stem'), mq('Second stem')] },
  { id: 'cp-2', section: 'chem-phys', discipline: 'chemistry', title: 'Buffers', passageText: 'Buffers resist pH change.', questions: [mq('Third stem')] },
]

// Settle the highlighter's async KaTeX-ready update after any passage change.
const alt = (code: string, target: Element | Window = window) => act(async () => { fireEvent.keyDown(target, { code, altKey: true }) })

describe('MCATPassageRunner exam tools', () => {
  async function renderExam() {
    render(<MCATPassageRunner passages={passages} mode="exam" title="Timed C/P" backHref="/x" timeLimitMinutes={30} />)
    await act(async () => {})
  }

  it('Alt+F flags the current question, Alt+N/P move between questions and passages', async () => {
    await renderExam()
    const flagBtn = () => screen.getAllByRole('button', { name: /Flag for review/ })
    await alt('KeyF')
    expect(flagBtn()[0].getAttribute('aria-pressed')).toBe('true')
    expect(flagBtn()[1].getAttribute('aria-pressed')).toBe('false')

    await alt('KeyN') // → question 2 (same passage)
    await alt('KeyF')
    expect(flagBtn()[1].getAttribute('aria-pressed')).toBe('true')
    expect(document.activeElement?.id).toBe('mcat-q-0-1')

    await alt('KeyN') // → passage 2, question 3
    expect(screen.getByText('Buffers')).toBeTruthy()
    expect(screen.getByLabelText('Question 3')).toBeTruthy()

    await alt('KeyP') // ← back to passage 1, question 2
    expect(screen.getByText('Springs')).toBeTruthy()
    expect(document.activeElement?.id).toBe('mcat-q-0-1')
  })

  it('does not fire shortcuts while typing in a field', async () => {
    await renderExam()
    const input = document.createElement('input')
    document.body.appendChild(input)
    await alt('KeyF', input)
    expect(screen.getAllByRole('button', { name: /Flag for review/ })[0].getAttribute('aria-pressed')).toBe('false')
    input.remove()
  })

  it('Alt+V opens the navigator; clicking a question jumps to its passage', async () => {
    await renderExam()
    await alt('KeyV')
    const dialog = screen.getByRole('dialog', { name: 'Question navigator' })
    expect(within(dialog).getByRole('button', { name: /^Question 1, Passage 1, unanswered, current question/ })).toBeTruthy()
    await act(async () => { fireEvent.click(within(dialog).getByRole('button', { name: /^Question 3, Passage 2/ })) })
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(screen.getByText('Buffers')).toBeTruthy()
    expect(document.activeElement?.id).toBe('mcat-q-1-0')
  })

  it('shows a review screen listing unanswered and flagged questions with jump links before submitting', async () => {
    await renderExam()
    fireEvent.click(screen.getAllByText('opt B')[0].closest('button')!) // answer Q1
    fireEvent.click(screen.getAllByRole('button', { name: /Flag for review/ })[1]) // flag Q2
    await act(async () => { fireEvent.click(screen.getByText('Next passage')) })
    fireEvent.click(screen.getByText('Review & submit'))

    const review = screen.getByRole('region', { name: /Section review/ })
    const unanswered = within(review).getByRole('heading', { name: /Unanswered \(2\)/ }).parentElement!
    expect(within(unanswered).getByRole('button', { name: /Go to Question 2/ })).toBeTruthy()
    expect(within(unanswered).getByRole('button', { name: /Go to Question 3/ })).toBeTruthy()
    const flagged = within(review).getByRole('heading', { name: /Flagged for review \(1\)/ }).parentElement!
    await act(async () => { fireEvent.click(within(flagged).getByRole('button', { name: /Go to Question 2/ })) })

    // Back on passage 1 with Q2 focused.
    expect(screen.getByText('Springs')).toBeTruthy()
    expect(document.activeElement?.id).toBe('mcat-q-0-1')
  })

  it('offers the periodic table in science sections; Esc closes it', async () => {
    await renderExam()
    const trigger = screen.getByRole('button', { name: 'Periodic table' })
    trigger.focus()
    fireEvent.click(trigger)
    const dialog = screen.getByRole('dialog', { name: 'Periodic table of the elements' })
    expect(within(dialog).getByTitle(/Hydrogen \(1\)/)).toBeTruthy()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(document.activeElement).toBe(trigger)
  })

  it('persists passage highlights with the sectioned resume state', async () => {
    localStorage.clear()
    const { unmount } = render(
      <MCATPassageRunner passages={passages} mode="exam" title="FL" backHref="/x" form={7} sectioned />,
    )
    await act(async () => {})
    fireEvent.click(screen.getByRole('button', { name: /^Begin Chem\/Phys/ }))
    await act(async () => {})
    selectText(screen.getByRole('region', { name: 'Passage: Springs' }), 'spring')
    fireEvent.click(screen.getByRole('button', { name: 'Highlight' }))
    const saved = JSON.parse(localStorage.getItem('mcat-fl-progress-v2:form-7')!)
    expect(saved.highlights).toEqual({ '0': [[2, 8]] })
    unmount()

    // Reload: the highlight is painted again.
    render(<MCATPassageRunner passages={passages} mode="exam" title="FL" backHref="/x" form={7} sectioned />)
    await act(async () => {})
    expect(screen.getByRole('region', { name: 'Passage: Springs' }).querySelector('mark')?.textContent).toBe('spring')
    localStorage.clear()
  })
})

/* ------------------------------------------------------------------ */
/*  SAT full test tools                                                */
/* ------------------------------------------------------------------ */

const sq = (id: string, section: 'reading-writing' | 'math', passage?: { id: string; genre: string; title: string; text: string }) => ({
  id, question: `${id} stem`, options: ['no', 'yes', 'maybe', 'never'], correctIndex: 1, explanation: '',
  category: 'x', section, sourceSlug: 'sat-grammar-usage', ...(passage ? { passage } : {}),
})
const ssec = (id: string, moduleNum: number, section: 'reading-writing' | 'math', seconds = 600): SATTestSection => ({
  id, name: `${id} name`, section, moduleNum, questionCount: 1, timeLimitSeconds: seconds,
  questions: [sq(`${id}-q`, section, section === 'reading-writing' ? { id: 'p1', genre: 'science', title: 'Text 1', text: 'Bees dance to share routes.' } : undefined)],
})
const satTest = (sections: SATTestSection[], testNumber = 3): SATFullTest => ({
  testNumber, format: 'full', totalQuestions: sections.length, totalTimeSeconds: 2400, sections,
})

describe('SATFullTest exam tools', () => {
  beforeEach(() => { localStorage.clear() })

  it('opens the math reference sheet only in Math modules; Esc closes and returns focus', async () => {
    render(<SATFullTestComponent test={satTest([ssec('math-1', 1, 'math')])} onComplete={vi.fn()} onCancel={vi.fn()} />)
    fireEvent.click(screen.getByText('Begin Test'))
    const trigger = screen.getByRole('button', { name: 'Reference' })
    trigger.focus()
    fireEvent.click(trigger)
    await act(async () => {})
    const dialog = screen.getByRole('dialog', { name: 'SAT math reference sheet' })
    expect(within(dialog).getByText('Sphere')).toBeTruthy()
    expect(within(dialog).getByText(/Special right triangle 30°-60°-90°/)).toBeTruthy()
    expect(within(dialog).getByText(/degrees of arc in a circle/)).toBeTruthy()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(document.activeElement).toBe(trigger)
  })

  it('has no reference sheet in R&W, but a passage highlighter', async () => {
    render(<SATFullTestComponent test={satTest([ssec('rw-1', 1, 'reading-writing')])} onComplete={vi.fn()} onCancel={vi.fn()} />)
    fireEvent.click(screen.getByText('Begin Test'))
    await act(async () => {})
    expect(screen.queryByRole('button', { name: 'Reference' })).toBeNull()
    const region = screen.getByRole('region', { name: 'Text 1' })
    selectText(region, 'dance')
    fireEvent.click(screen.getByRole('button', { name: 'Highlight' }))
    expect(region.querySelector('mark')?.textContent).toBe('dance')
  })

  it('hides the timer, remembers it per test, and reveals it briefly at 5:00', async () => {
    vi.useFakeTimers()
    const t = satTest([ssec('math-1', 1, 'math', 302)])
    const { unmount } = render(<SATFullTestComponent test={t} onComplete={vi.fn()} onCancel={vi.fn()} />)
    fireEvent.click(screen.getByText('Begin Test'))
    expect(screen.getByRole('timer')).toBeTruthy()
    const toggle = screen.getByRole('button', { name: 'Hide timer' })
    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-pressed')).toBe('true')
    expect(screen.queryByRole('timer')).toBeNull()
    expect(localStorage.getItem('sat-timer-hidden:full-3')).toBe('1')

    // 5:00 remaining → the timer shows with an announced warning…
    act(() => { vi.advanceTimersByTime(2000) })
    expect(screen.getByRole('timer').textContent).toBe('5:00')
    expect(screen.getByRole('status').textContent).toMatch(/5 minutes remain/)
    // …then hides again.
    act(() => { vi.advanceTimersByTime(10_000) })
    expect(screen.queryByRole('timer')).toBeNull()
    unmount()

    // Same test again: starts hidden. A different test does not.
    render(<SATFullTestComponent test={t} onComplete={vi.fn()} onCancel={vi.fn()} />)
    fireEvent.click(screen.getByText('Begin Test'))
    expect(screen.queryByRole('timer')).toBeNull()
    cleanup()
    render(<SATFullTestComponent test={satTest([ssec('math-1', 1, 'math')], 4)} onComplete={vi.fn()} onCancel={vi.fn()} />)
    fireEvent.click(screen.getByText('Begin Test'))
    expect(screen.getByRole('timer')).toBeTruthy()
  })
})
