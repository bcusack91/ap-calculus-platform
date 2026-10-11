// @vitest-environment jsdom
/**
 * The runner must not start Module 2 until its routed form has landed. The
 * routing build used to be fire-and-forget: a student who clicked Continue
 * quickly sat the pre-built (unrouted) module. It also sends the per-question
 * fields the server grades from.
 */
import { describe, it, expect, vi } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import type { SATFullTest, SATTestSection } from '@/data/sat-practice/test-generator'

vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve() }))
vi.mock('@/hooks/useActivitySurface', () => ({ useActivitySurface: () => {} }))

let resolveRoute: (s: SATTestSection) => void = () => {}
const routedModule2 = vi.fn(
  () => new Promise<SATTestSection>((resolve) => { resolveRoute = resolve }),
)
vi.mock('@/data/sat-practice/test-generator', async (orig) => ({
  ...(await orig<typeof import('@/data/sat-practice/test-generator')>()),
  routedModule2: (...a: unknown[]) => (routedModule2 as (...x: unknown[]) => unknown)(...a),
}))

import SATFullTestComponent, { SATTestWrapper } from '@/components/SATFullTest'

const q = (id: string, text: string, section: 'reading-writing' | 'math') => ({
  id, question: text, options: ['no', 'yes', 'maybe', 'never'], correctIndex: 1, explanation: '',
  category: 'x', section, sourceSlug: 'sat-grammar-usage',
})
const sec = (id: string, moduleNum: number, section: 'reading-writing' | 'math', text: string): SATTestSection => ({
  id, name: `${id} name`, section, moduleNum, questionCount: 1, timeLimitSeconds: 600, questions: [q(`${id}-q`, text, section)],
})
const test: SATFullTest = {
  testNumber: 1,
  format: 'full',
  totalQuestions: 4,
  totalTimeSeconds: 2400,
  sections: [
    sec('rw-1', 1, 'reading-writing', 'Module one question'),
    sec('rw-2', 2, 'reading-writing', 'PREBUILT module two question'),
    sec('math-1', 1, 'math', 'Math one question'),
    sec('math-2', 2, 'math', 'Math two question'),
  ],
}

describe('SATFullTest Module 2 routing', () => {
  it('waits for the routed Module 2 before starting it', async () => {
    render(<SATFullTestComponent test={test} onComplete={vi.fn()} onCancel={vi.fn()} />)
    fireEvent.click(screen.getByText('Begin Test'))
    fireEvent.click(screen.getByText('yes').closest('button')!)
    fireEvent.click(screen.getByText('Review & Submit'))
    fireEvent.click(screen.getByText('Submit Section'))

    // 1/1 on Module 1 -> the harder route, built from the shared helper.
    expect(routedModule2).toHaveBeenCalledWith(expect.objectContaining({ testNumber: 1, format: 'full' }), 1, 'harder')

    // Continue before the build lands: the module does not start.
    await act(async () => { fireEvent.click(screen.getByText('Continue to Next Section')) })
    expect(screen.getByText('Preparing the next module…')).toBeTruthy()
    expect(screen.queryByText('PREBUILT module two question')).toBeNull()

    await act(async () => {
      resolveRoute({ ...sec('rw-2', 2, 'reading-writing', 'ROUTED module two question'), tier: 'hard' })
    })
    expect(screen.getByText('ROUTED module two question')).toBeTruthy()
    expect(screen.queryByText('PREBUILT module two question')).toBeNull()
  })

  it('sends per-question answers (module, id, choice, flag, seconds) and the format; shows the server score', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ attemptId: 'att9', rwScore: 610, mathScore: 590, totalScore: 1200, rwCorrect: 2, rwTotal: 2, mathCorrect: 1, mathTotal: 2 }),
    })
    vi.stubGlobal('fetch', fetchMock)
    const onComplete = vi.fn()
    render(<SATTestWrapper test={test} onComplete={onComplete} onCancel={vi.fn()} />)
    fireEvent.click(screen.getByText('Begin Test'))

    const answerAndSubmit = (option: string, flag = false) => {
      fireEvent.click(screen.getByText(option).closest('button')!)
      if (flag) fireEvent.click(screen.getByText('Flag'))
      fireEvent.click(screen.getByText('Review & Submit'))
      fireEvent.click(screen.getByText('Submit Section'))
    }
    const continueAndRoute = async (text: string, id: string, section: 'reading-writing' | 'math') => {
      await act(async () => { fireEvent.click(screen.getByText('Continue to Next Section')) })
      await act(async () => { resolveRoute({ ...sec(id, 2, section, text), tier: 'hard' }) })
    }

    answerAndSubmit('yes', true)
    await continueAndRoute('ROUTED rw two', 'rw-2', 'reading-writing')
    answerAndSubmit('yes')
    await act(async () => { fireEvent.click(screen.getByText('Continue to Next Section')) })
    answerAndSubmit('no')
    // 0/1 on Math Module 1 -> easier route.
    expect(routedModule2).toHaveBeenLastCalledWith(expect.anything(), 3, 'easier')
    await continueAndRoute('ROUTED math two', 'math-2', 'math')
    answerAndSubmit('yes')
    await act(async () => {})

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const body = JSON.parse(fetchMock.mock.calls[0][1].body)
    expect(body.format).toBe('full')
    expect(body.formVersion).toBe(1) // a form without formVersion is a v1 form
    expect(body.rwScore).toBeUndefined()
    expect(body.responses).toHaveLength(4)
    expect(body.responses[0]).toMatchObject({ moduleIndex: 0, questionId: 'rw-1-q', selectedIndex: 1, textValue: null, flagged: true })
    expect(typeof body.responses[0].seconds).toBe('number')
    expect(body.responses.map((r: { moduleIndex: number; questionId: string }) => `${r.moduleIndex}:${r.questionId}`)).toEqual([
      '0:rw-1-q', '1:rw-2-q', '2:math-1-q', '3:math-2-q',
    ])
    expect(onComplete).toHaveBeenCalledWith(expect.objectContaining({ attemptId: 'att9', totalScore: 1200 }))
    vi.unstubAllGlobals()
  })
})
