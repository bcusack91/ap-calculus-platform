// @vitest-environment jsdom
/**
 * NEXT STEP FIRST (owner rule 2026-09-28): after any study action the primary
 * button is the student's next study step; Competitive Mode is a secondary
 * link. And every "study these cards" link opens the RATED review session
 * filtered to the topic, never the flip-through viewer that cannot rate cards
 * (which made StudyPlanNextUp's "rate them now" hold loop forever).
 *
 * Regressions guarded here:
 *   - ExitQuiz's pass screen put "Go to Competitive Mode" first, BELOW the full
 *     answer review; the header promised "unlock competitive mode".
 *   - StudyPlanNextUp's flashcard link pointed at /flashcards/[slug].
 *   - An aced entrance quiz led with "Enter Competitive Mode" and only saved
 *     the test-out when a destination button was clicked.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import type { ReactNode } from 'react'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { TOPIC_CLEAR_PERCENT, EXIT_QUIZ_PASS_FRACTION } from '@/lib/mastery'

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))
vi.mock('katex/dist/katex.min.css', () => ({}))
vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve() }))
vi.mock('@/lib/render-rich-text', () => ({ renderRichText: (t: string) => t }))
vi.mock('@/lib/shuffle-options', () => ({
  shuffleOptions: (options: string[], correctIndex: number) => ({ options, correctIndex }),
}))
vi.mock('@/components/ReportProblem', () => ({ default: () => null }))
vi.mock('@/components/ReferenceSheetModal', () => ({ default: () => null }))
vi.mock('@/components/ScratchPad', () => ({ default: () => null }))
vi.mock('@/components/DesmosCalculatorLink', () => ({ default: () => null }))

import ExitQuiz from '@/components/ExitQuiz'
import TopicEntranceQuiz from '@/components/TopicEntranceQuiz'
import { pickNextPendingTopic } from '@/components/StudyPlanNextUp'
import { topicFlashcardReviewHref, topicFlashcardBrowseHref, FLASHCARD_UNLOCK_RULE } from '@/lib/flashcard-links'

type Plan = { courseKey: string; label: string; topics: { slug: string; name: string; isSatisfied: boolean; topicPath?: string }[] }
let plans: Plan[] = []
let topicCardsDue = 0
let fetchMock: ReturnType<typeof vi.fn>

beforeEach(() => {
  plans = []
  topicCardsDue = 0
  fetchMock = vi.fn(async (url: string) => {
    const json = (body: unknown) => ({ ok: true, status: 200, json: async () => body })
    if (url.startsWith('/api/exit-quiz/submit')) return json({ ok: true })
    if (url.startsWith('/api/study-plan/plan-status')) return json({ plans })
    if (url.startsWith('/api/flashcards/review?')) return json({ cards: [], stats: { due: topicCardsDue } })
    return { ok: false, status: 404, json: async () => ({}) }
  })
  vi.stubGlobal('fetch', fetchMock)
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

const QUESTIONS = Array.from({ length: 5 }, (_, i) => ({
  id: `q${i}`,
  question: `Question ${i}?`,
  options: [`right ${i}`, `wrong ${i}`],
  correctIndex: 0,
  explanation: `Because ${i}.`,
  category: 'Cat',
}))

function renderQuiz(onComplete = vi.fn()) {
  render(
    <ExitQuiz
      topicSlug="ap-chem-moles"
      topicTitle="Moles"
      courseSlug="ap-chemistry"
      questions={QUESTIONS}
      onComplete={onComplete}
      onCancel={() => {}}
      previousAttempts={0}
      lastScore={null}
      mustRedoUnit={false}
    />,
  )
  return onComplete
}

function passQuiz() {
  QUESTIONS.forEach((q, i) => {
    fireEvent.click(screen.getByText(q.options[0]))
    fireEvent.click(screen.getByText('Confirm Answer'))
    fireEvent.click(screen.getByText(i < QUESTIONS.length - 1 ? 'Next Question →' : 'See Results'))
  })
}

const isBefore = (a: Element, b: Element) =>
  (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0

describe('ExitQuiz — next step first', () => {
  it('states the pass mark from the shared constant, and why it matters', () => {
    renderQuiz()
    const need = Math.ceil(QUESTIONS.length * EXIT_QUIZ_PASS_FRACTION)
    expect(
      screen.getByText(new RegExp(`Score ${need}/${QUESTIONS.length} \\(${TOPIC_CLEAR_PERCENT}%\\)`)),
    ).toHaveTextContent('to clear this topic and unlock its flashcards')
    expect(screen.queryByText(/competitive mode/i)).toBeNull()
  })

  it('no plan, cards to rate: "Review your N flashcards" leads, above the answer review; Competitive is secondary', async () => {
    topicCardsDue = 3
    renderQuiz()
    passQuiz()
    const review = await screen.findByRole('link', { name: /Review your 3 flashcards for this topic/ })
    expect(review).toHaveAttribute('href', topicFlashcardReviewHref('ap-chem-moles'))
    expect(isBefore(review, screen.getByText('Review Your Answers'))).toBe(true)

    const course = screen.getByRole('link', { name: 'Back to course' })
    expect(course).toHaveAttribute('href', '/courses/ap-chemistry')
    expect(course.className).not.toContain('bg-gradient')

    const competitive = screen.getByRole('link', { name: /Try Competitive Mode/ })
    expect(competitive.className).not.toContain('bg-gradient')
    expect(isBefore(review, competitive)).toBe(true)
    expect(screen.queryByText(/Go to Competitive Mode/)).toBeNull()
    expect(screen.getByText('You cleared this topic!')).toBeInTheDocument()
  })

  it('no plan, no cards: "Back to course" is the primary button, above the review', async () => {
    renderQuiz()
    passQuiz()
    const course = await screen.findByRole('link', { name: 'Back to course' })
    expect(course.className).toContain('bg-gradient')
    expect(isBefore(course, screen.getByText('Review Your Answers'))).toBe(true)
  })

  it('with a study plan: the next topic leads, above the answer review', async () => {
    plans = [{
      courseKey: 'ap-chem', label: 'AP Chemistry',
      topics: [
        { slug: 'ap-chem-moles', name: 'Moles', isSatisfied: false },
        { slug: 'ap-chem-gases', name: 'Gases', isSatisfied: false, topicPath: '/topics/ap-chem-gases' },
      ],
    }]
    renderQuiz()
    passQuiz()
    expect(await screen.findByText('Next up: Gases')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Go to Topic/ })).toHaveAttribute('href', '/topics/ap-chem-gases')
    // Nothing left to rate today: the link offers browsing (the rated session
    // would be empty) and says so.
    const cards = screen.getByRole('link', { name: /cards are done for today/ })
    expect(cards).toHaveAttribute('href', topicFlashcardBrowseHref('ap-chem-moles'))
    expect(isBefore(screen.getByText('Next up: Gases'), screen.getByText('Review Your Answers'))).toBe(true)
  })

  it('holds "Next up" while this topic still has cards to rate, and links them to the rated session', async () => {
    topicCardsDue = 2
    plans = [{
      courseKey: 'ap-chem', label: 'AP Chemistry',
      topics: [
        { slug: 'ap-chem-moles', name: 'Moles', isSatisfied: false },
        { slug: 'ap-chem-gases', name: 'Gases', isSatisfied: false },
      ],
    }]
    renderQuiz()
    passQuiz()
    const rate = await screen.findByRole('link', { name: /2 cards left/ })
    expect(rate).toHaveAttribute('href', topicFlashcardReviewHref('ap-chem-moles'))
    expect(screen.queryByText('Next up: Gases')).toBeNull()
    expect(screen.getByText('Next up after that: Gases')).toBeInTheDocument()
    // the count comes from the same endpoint the rated session reads
    expect(fetchMock.mock.calls.some(([u]) => String(u).startsWith('/api/flashcards/review?topicSlug=ap-chem-moles'))).toBe(true)
  })
})

describe('TopicEntranceQuiz — aced', () => {
  it('saves the test-out once, leads with the next step, mentions the cards, keeps Competitive secondary', async () => {
    const onAllPartsMastered = vi.fn(async () => ({ saved: true }))
    const onComplete = vi.fn()
    render(
      <TopicEntranceQuiz
        topicTitle="Moles"
        topicSlug="ap-chem-moles"
        courseSlug="ap-chemistry"
        questions={[
          { id: 'e1', question: 'E1?', options: ['yes1', 'no1'], correctIndex: 0, explanation: '', partNumber: 1, partTitle: 'P1' },
          { id: 'e2', question: 'E2?', options: ['yes2', 'no2'], correctIndex: 0, explanation: '', partNumber: 2, partTitle: 'P2' },
        ]}
        partTitles={[{ partNumber: 1, partTitle: 'P1' }, { partNumber: 2, partTitle: 'P2' }]}
        onComplete={onComplete}
        onAllPartsMastered={onAllPartsMastered}
        onCancel={() => {}}
      />,
    )
    fireEvent.click(screen.getByText('Take Entrance Quiz'))
    for (const [i, opt] of ['yes1', 'yes2'].entries()) {
      fireEvent.click(screen.getByText(opt))
      fireEvent.click(screen.getByText('Confirm Answer'))
      fireEvent.click(screen.getByText(i === 0 ? 'Next Question →' : 'See Results'))
    }
    const primary = await screen.findByRole('button', { name: /Return to AP Chemistry/ })
    expect(onAllPartsMastered).toHaveBeenCalledTimes(1)
    expect(screen.getByText(/flashcards were added to your deck/)).toBeInTheDocument()
    const competitive = screen.getByRole('link', { name: /Try Competitive Mode/ })
    expect(isBefore(primary, competitive)).toBe(true)
    expect(screen.queryByText(/Enter Competitive Mode/)).toBeNull()
  })
})

describe('flashcard links', () => {
  it('study links open the rated session filtered to the topic; browse stays the flip viewer', () => {
    expect(topicFlashcardReviewHref('mcat-amino acids')).toBe('/flashcards/review/start?topic=mcat-amino%20acids')
    expect(topicFlashcardBrowseHref('ap-chem-moles')).toBe('/flashcards/ap-chem-moles')
    expect(FLASHCARD_UNLOCK_RULE).toBe("Cards join your deck when you finish a topic's lesson and take its exit quiz.")
  })

  it('pickNextPendingTopic skips the just-completed topic even if the snapshot raced it', () => {
    const topics = [
      { slug: 'a', name: 'A', isSatisfied: false },
      { slug: 'b', name: 'B', isSatisfied: true },
      { slug: 'c', name: 'C', isSatisfied: false },
    ]
    expect(pickNextPendingTopic(topics, 'a')?.slug).toBe('c')
    expect(pickNextPendingTopic(topics)?.slug).toBe('a')
    expect(pickNextPendingTopic(topics.map((t) => ({ ...t, isSatisfied: true })))).toBeNull()
  })

  it('no "study" surface links straight to the flip viewer', () => {
    // Browse links must go through topicFlashcardBrowseHref, so a raw
    // `/flashcards/${slug}` template here means a study link regressed.
    for (const file of [
      'src/app/topics/[slug]/page.tsx',
      'src/app/assignments/page.tsx',
      'src/app/flashcards/page.tsx',
      'src/components/StudyPlanNextUp.tsx',
    ]) {
      const src = readFileSync(path.join(process.cwd(), file), 'utf8')
      expect(src, file).not.toMatch(/`\/flashcards\/\$\{/)
    }
  })
})
