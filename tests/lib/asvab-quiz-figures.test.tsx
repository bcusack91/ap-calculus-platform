// @vitest-environment jsdom
/**
 * Pictures on ASVAB quiz items (exit quiz, entrance quiz, unit tests,
 * competitive). The item types gained an optional `figure` (one inline SVG)
 * + `figureAlt`; Assembling Objects items carry the top box and four numbered
 * answer panels in that SVG with options 'Figure 1'..'Figure 4'.
 *
 * Guarded here:
 *  - the exit quiz, the entrance quiz and the live match screen draw the
 *    figure, injected only after isSafeSvg (an unsafe SVG shows its alt text);
 *  - a figure-less item renders no figure box and its options shuffle exactly
 *    as before (the pre-change shuffle is reproduced below);
 *  - 'Figure N' options keep authored order on every surface;
 *  - competitive gameData carries only `figureRef`, resolved by the figure
 *    route (never the SVG itself, never the key);
 *  - no AO exit / entrance / competitive item lacks a figure, every ASVAB
 *    figure passes isSafeSvg, and figure stems are unique (unit tests, answer
 *    logs and exit-quiz ids key on stem text).
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Suspense, type ReactNode } from 'react'

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), back: vi.fn(), prefetch: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/competitive/match/m1',
}))
// The test runner's React has no `use()` (Next ships its own React 19 build);
// the match page only uses it to unwrap params.
vi.mock('react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react')>()
  return { ...actual, use: (v: unknown) => ((v as { __value?: unknown }).__value ?? v) }
})
vi.mock('@/components/ReportProblem', () => ({ default: () => null }))
vi.mock('@/components/StudyPlanNextUp', () => ({ default: () => null }))
vi.mock('@/components/ScratchPad', () => ({ default: () => null }))
vi.mock('@/components/DesmosCalculatorLink', () => ({ default: () => null }))

import ExitQuiz from '@/components/ExitQuiz'
import TopicEntranceQuiz from '@/components/TopicEntranceQuiz'
import { MatchFigure } from '@/components/competitive/MatchFigure'
import { keepsAuthoredOrder, shuffleOptions } from '@/lib/shuffle-options'
import { isSafeSvg } from '@/lib/safe-svg'
import { questions as aoExit } from '@/data/exit-quizzes/asvab/assembling-objects'
import { questions as aoComp } from '@/data/competitive-questions/asvab/assembling-objects'
import { asvabQuestionPool, generateExitQuiz as generateAsvabExitQuiz } from '@/data/exit-quizzes/asvab'
import { asvabQuestionBank } from '@/data/competitive-questions/asvab-bank'
import { generateEntranceQuiz as aoConnectionsEntrance } from '@/data/entrance-quizzes/asvab-ao-connections'
import { generateEntranceQuiz as aoShapesEntrance } from '@/data/entrance-quizzes/asvab-ao-shapes'
import { generateMatchQuestions } from '@/lib/competitive-utils'
import { asvabFigureRef, isFigureRef, resolveFigureRef } from '@/lib/competitive-figures'
import { ASVAB_UNIT_TESTS_CONFIG } from '@/data/unit-tests/asvab'
import { generateUnitTest } from '@/lib/unit-tests/engine'

const SVG = '<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg"><polygon data-mark="safe" points="10,50 50,10 90,50" fill="currentColor"/></svg>'
const UNSAFE = '<svg viewBox="0 0 10 10" onload="alert(1)"><script>alert(1)</script></svg>'
const FIG_OPTS = ['Figure 1', 'Figure 2', 'Figure 3', 'Figure 4']

const exitProps = {
  topicSlug: 'asvab-ao-shapes',
  topicTitle: 'Fitting Shapes Together',
  onComplete: vi.fn(),
  onCancel: vi.fn(),
  previousAttempts: 0,
  lastScore: null,
  mustRedoUnit: false,
}

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

/** The shuffle every surface used before figure support (copied verbatim). */
function legacyShuffle(options: string[], correctIndex: number, seed: string) {
  if (options.length <= 1) return { options, correctIndex }
  let hash = 5381
  for (let i = 0; i < seed.length; i++) hash = ((hash << 5) + hash + seed.charCodeAt(i)) | 0
  const indices = options.map((_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    hash = (hash * 1664525 + 1013904223) | 0
    const j = ((hash >>> 0) % (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return { options: indices.map((i) => options[i]), correctIndex: indices.indexOf(correctIndex) }
}

describe('shuffleOptions with figure-panel options', () => {
  it('keeps Figure 1..4 (and Figure A..D) in authored order', () => {
    expect(keepsAuthoredOrder(FIG_OPTS)).toBe(true)
    expect(keepsAuthoredOrder(['Figure A', 'Figure B', 'Figure C', 'Figure D'])).toBe(true)
    for (const seed of ['a', 'b', 'xyz', 'asvab-ao-shapes#1']) {
      expect(shuffleOptions(FIG_OPTS, 2, seed)).toEqual({ options: FIG_OPTS, correctIndex: 2 })
    }
  })

  it('shuffles every other option list exactly as before', () => {
    expect(keepsAuthoredOrder(['Figure 2', 'Figure 1', 'Figure 3', 'Figure 4'])).toBe(false)
    expect(keepsAuthoredOrder(['Figure 1 only', 'Figure 2', 'Figure 3', 'Figure 4'])).toBe(false)
    const opts = ['12 ohms', '6 ohms', '3 ohms', '24 ohms']
    for (const seed of ['q1', 'q2', 'another seed', 'asvab-ei-circuits#k3']) {
      expect(shuffleOptions(opts, 1, seed)).toEqual(legacyShuffle(opts, 1, seed))
    }
  })
})

describe('exit quiz renders the figure', () => {
  it('draws a safe figure above the question and keeps Figure options in order', () => {
    render(
      <ExitQuiz
        {...exitProps}
        questions={[{ id: 'f1', question: 'Which figure shows the pieces fitted together?', options: FIG_OPTS, correctIndex: 2, explanation: 'Figure 3.', category: 'assembling-objects', figure: SVG, figureAlt: 'Top box: two pieces.' }]}
      />,
    )
    const fig = screen.getByTestId('lesson-figure-svg')
    expect(fig.getAttribute('aria-label')).toBe('Top box: two pieces.')
    expect(fig.querySelector('polygon[data-mark="safe"]')).not.toBeNull()
    const labels = screen.getAllByRole('radio').map((b) => b.textContent ?? '')
    labels.forEach((t, i) => expect(t).toContain(`Figure ${i + 1}`))
  })

  it('never injects an unsafe SVG (the alt text shows instead)', () => {
    const { container } = render(
      <ExitQuiz
        {...exitProps}
        questions={[{ id: 'u1', question: 'Unsafe figure item?', options: ['a', 'b', 'c', 'd'], correctIndex: 0, explanation: '', category: 'x', figure: UNSAFE, figureAlt: 'Alt words' }]}
      />,
    )
    expect(container.querySelector('script')).toBeNull()
    expect(container.innerHTML).not.toContain('onload')
    expect(screen.getByRole('img', { name: 'Alt words' }).textContent).toBe('Alt words')
  })

  it('a figure-less item renders no figure box and the same option order as before', () => {
    const q = { id: 'n1', question: 'What is the unit of resistance?', options: ['Ohm', 'Volt', 'Ampere', 'Watt'], correctIndex: 0, explanation: '', category: 'ei' }
    const { container } = render(<ExitQuiz {...exitProps} topicSlug="asvab-ei-electricity-basics" questions={[q]} />)
    expect(container.querySelector('[data-testid="question-figure"]')).toBeNull()
    expect(container.querySelector('[data-testid="lesson-figure-svg"]')).toBeNull()
    const expected = legacyShuffle(q.options, q.correctIndex, q.id + q.question).options
    const shown = screen.getAllByRole('radio').map((b) => b.textContent ?? '')
    shown.forEach((t, i) => expect(t).toContain(expected[i]))
  })
})

describe('entrance quiz renders the figure', () => {
  it('draws the figure once the quiz starts; a figure-less item has none', () => {
    const qs = aoShapesEntrance()
    const withFig = qs[0]
    render(
      <TopicEntranceQuiz
        topicTitle="Fitting Shapes Together"
        topicSlug="asvab-ao-shapes"
        questions={[withFig]}
        partTitles={[{ partNumber: withFig.partNumber, partTitle: withFig.partTitle }]}
        onComplete={vi.fn()}
        onCancel={vi.fn()}
      />,
    )
    fireEvent.click(screen.getByText('Take Entrance Quiz'))
    const fig = screen.getByTestId('lesson-figure-svg')
    expect(fig.querySelector('svg')).not.toBeNull()
    expect(fig.getAttribute('aria-label')).toBe(withFig.figureAlt)
    cleanup()

    const plain = { id: 'p1', question: 'Plain item?', options: ['a', 'b', 'c', 'd'], correctIndex: 1, explanation: '', partNumber: 1, partTitle: 'P' }
    const { container } = render(
      <TopicEntranceQuiz topicTitle="T" topicSlug="asvab-wk-word-parts" questions={[plain]} partTitles={[{ partNumber: 1, partTitle: 'P' }]} onComplete={vi.fn()} onCancel={vi.fn()} />,
    )
    fireEvent.click(screen.getByText('Take Entrance Quiz'))
    expect(container.querySelector('[data-testid="question-figure"]')).toBeNull()
  })
})

describe('competitive: figureRef in gameData, resolved by the figure route', () => {
  it('stores a reference (not the SVG) and keeps Figure options in authored order', async () => {
    const qs = await generateMatchQuestions(40, 'asvab-ao-shapes')
    expect(qs.length).toBeGreaterThan(0)
    for (const q of qs) {
      expect(q.figure).toBeUndefined()
      expect(JSON.stringify(q)).not.toContain('<svg')
      expect(isFigureRef(q.figureRef)).toBe(true)
      expect(q.options).toEqual(FIG_OPTS)
      const bank = asvabQuestionBank.find((b) => asvabFigureRef(b.id) === q.figureRef)!
      expect(q.answerIndex).toBe(bank.correctAnswer)
      expect(q.question).toBe(bank.question)
    }
  })

  it('figure-less items carry no figureRef and still shuffle', async () => {
    const qs = await generateMatchQuestions(40, 'asvab-ar-ratios-rates')
    for (const q of qs) expect(q.figureRef).toBeUndefined()
  })

  it('resolves a reference to a safe SVG and refuses unknown ones', async () => {
    const item = aoComp[0]
    const fig = await resolveFigureRef(asvabFigureRef(item.id))
    expect(fig?.svg).toBe(item.figure)
    expect(fig?.alt).toBe(item.figureAlt)
    expect(await resolveFigureRef('asvab-999999')).toBeNull()
    expect(await resolveFigureRef('../etc/passwd')).toBeNull()
    const { GET } = await import('@/app/api/competitive/figure/[ref]/route')
    const ok = await GET(new Request('http://x/api/competitive/figure/a'), { params: Promise.resolve({ ref: asvabFigureRef(item.id) }) })
    expect(ok.status).toBe(200)
    const body = await ok.json()
    expect(Object.keys(body).sort()).toEqual(['alt', 'svg'])
    const missing = await GET(new Request('http://x/api/competitive/figure/b'), { params: Promise.resolve({ ref: 'nope' }) })
    expect(missing.status).toBe(404)
  })
})

describe('match screen renders the figure', () => {
  const item = aoComp[0]
  const ref = asvabFigureRef(item.id)
  const matchPayload = {
    currentUserId: 'u1',
    match: {
      id: 'm1',
      player1Id: 'u1',
      player2Id: 'bot',
      player1Name: 'Me',
      player2Name: 'Bot',
      player2IsAI: true,
      status: 'IN_PROGRESS',
      gameMode: 'SPEED_RACE',
      topicSlug: 'asvab-ao-connections',
      player1Score: 0,
      player2Score: 0,
      player1QuestionIndex: 0,
      player2QuestionIndex: 0,
      questions: [
        { id: 0, type: 'multiple-choice', question: item.question, options: FIG_OPTS, difficulty: item.difficulty, figureRef: ref },
        { id: 1, type: 'multiple-choice', question: 'A plain follow-up question?', options: ['w', 'x', 'y', 'z'], difficulty: 'easy' },
      ],
      gameData: { player1Answers: [], player2Answers: [] },
      startedAt: new Date().toISOString(),
    },
  }

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      const json = (body: unknown, status = 200) => ({ ok: status < 400, status, json: async () => body })
      if (url === `/api/competitive/figure/${ref}`) return json({ svg: item.figure, alt: item.figureAlt })
      if (url === '/api/competitive/figure/asvab-1') return json({ svg: UNSAFE, alt: 'x' })
      if (url.startsWith('/api/competitive/match/m1')) return json(matchPayload)
      return json({}, 404)
    }))
  })

  it('the live 1v1 question card draws the fetched figure above the stem', async () => {
    const Page = (await import('@/app/competitive/match/[id]/page')).default
    const params = Object.assign(Promise.resolve({ id: 'm1' }), { __value: { id: 'm1' } })
    await act(async () => {
      render(<Suspense fallback={null}><Page params={params} /></Suspense>)
    })
    const fig = await screen.findByTestId('lesson-figure-svg', {}, { timeout: 4000 })
    expect(fig.querySelector('svg')).not.toBeNull()
    expect(fig.getAttribute('aria-label')).toBe(item.figureAlt)
    const stem = screen.getByText(item.question)
    // Figure first, then the stem.
    expect(fig.compareDocumentPosition(stem) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('MatchFigure refuses an unsafe SVG from the route and renders nothing without a ref', async () => {
    const { container } = render(<MatchFigure figureRef="asvab-1" />)
    await waitFor(() => expect(screen.getByRole('status').textContent).toBe('Figure unavailable.'))
    expect(container.querySelector('script')).toBeNull()
    cleanup()
    const empty = render(<MatchFigure />)
    expect(empty.container.innerHTML).toBe('')
  })
})

describe('ASVAB figure content', () => {
  const aoEntrance = [...aoConnectionsEntrance(), ...aoShapesEntrance()]

  it('every Assembling Objects exit, entrance and competitive item has a safe figure and Figure 1-4 options', () => {
    const all = [
      ...aoExit.map((q) => ({ where: `exit ${q.topicSlug}`, figure: q.figure, options: q.options, key: q.correctAnswer })),
      ...aoEntrance.map((q) => ({ where: `entrance ${q.id}`, figure: q.figure, options: q.options, key: q.correctIndex })),
      ...aoComp.map((q) => ({ where: `competitive ${q.id}`, figure: q.figure, options: q.options, key: q.correctAnswer })),
    ]
    expect(aoExit.length).toBeGreaterThanOrEqual(36)
    expect(aoEntrance.length).toBe(28)
    expect(aoComp.length).toBeGreaterThanOrEqual(30)
    const missing = all.filter((x) => !x.figure || !isSafeSvg(x.figure)).map((x) => x.where)
    expect(missing).toEqual([])
    for (const x of all) {
      expect(x.options).toEqual(FIG_OPTS)
      expect(x.key).toBeGreaterThanOrEqual(0)
      expect(x.key).toBeLessThan(4)
    }
  })

  it('every ASVAB figure passes isSafeSvg and has alt text', () => {
    const figs = [
      ...asvabQuestionPool.filter((q) => q.figure !== undefined).map((q) => [q.question, q.figure, q.figureAlt] as const),
      ...asvabQuestionBank.filter((q) => q.figure !== undefined).map((q) => [q.question, q.figure, q.figureAlt] as const),
    ]
    const bad = figs.filter(([, svg, alt]) => !isSafeSvg(svg) || !alt?.trim()).map(([q]) => q)
    expect(bad).toEqual([])
  })

  it('figure items have unique stems within each surface', () => {
    const dupes = (stems: string[]) => stems.filter((s, i) => stems.indexOf(s) !== i)
    expect(dupes(asvabQuestionPool.filter((q) => q.figure).map((q) => q.question))).toEqual([])
    expect(dupes(asvabQuestionBank.filter((q) => q.figure).map((q) => q.question))).toEqual([])
    expect(dupes(aoEntrance.map((q) => q.question))).toEqual([])
  })

  it('the exit generator and the unit-test engine pass the figure through', () => {
    const quiz = generateAsvabExitQuiz(10, 'asvab-ao-connections')
    expect(quiz.length).toBe(10)
    for (const q of quiz) expect(isSafeSvg(q.figure)).toBe(true)
    const ut = generateUnitTest(ASVAB_UNIT_TESTS_CONFIG, 'assembling-objects', 1)
    expect(ut.questions.length).toBeGreaterThan(0)
    for (const q of ut.questions) expect(isSafeSvg(q.figure)).toBe(true)
  })
})
