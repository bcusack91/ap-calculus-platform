// @vitest-environment jsdom
/**
 * Review flashcards (owner, 2026-11-13): before a video's "Remember" section
 * the student is offered that video's flashcards, and before the exit quiz the
 * whole lesson's. Optional every time. This is the standard for every lesson,
 * so each recap section in a lesson spec must have a deck.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'

const push = vi.fn()
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode }) => <a href={href} {...rest}>{children}</a>,
}))
vi.mock('next/navigation', () => ({ useRouter: () => ({ push, refresh: vi.fn() }) }))
vi.mock('@/hooks/useActivitySurface', () => ({ useActivitySurface: () => undefined }))
vi.mock('@/components/MathText', () => ({ MathText: ({ text }: { text: string }) => <span>{text}</span> }))
vi.mock('@/components/video/PreferVideoToggle', () => ({ PreferVideoToggle: () => null }))
vi.mock('@/components/video/InstructorAvatar', () => ({ InstructorAvatar: () => null }))
vi.mock('@/components/video/VideoPlayer', () => ({ default: () => <div data-testid="stub-player" /> }))

import VideoLessonPlayer from '@/components/video/VideoLessonPlayer'
import { checkpointQuestionSchema, isNumericQuestion, isRecapSection, lessonReviewCards, studentSteps, visibleSteps, type StoredStep, type StudentStep } from '@/lib/video-lesson-core'
import { REVIEW_DECKS, reviewCardsFor } from '@/data/video-lesson-flashcards'
import { LESSON as CIRC1 } from '../../scripts/video-lessons/circuits1-lesson'
import { LESSON as CIRC2 } from '../../scripts/video-lessons/circuits2-lesson'

const cards = [
  { front: 'Front one', back: 'Back one' },
  { front: 'Front two', back: 'Back two' },
]
const teach: StudentStep = { clipId: 'c-teach', title: 'Current is a rate', provider: 'FILE', providerId: '/x/a.mp4', durationSec: 40, lowYield: false, role: 'teach', video: 1, videoTitle: 'Current', questions: [] }
const recap: StudentStep = { ...teach, clipId: 'c-recap', title: 'Remember', reviewCards: cards }

const base = {
  lessonId: 'L1', topicSlug: 't', topicTitle: 'Topic', title: 'Lesson', instructor: { name: 'I', headline: '', photoUrl: null },
  pickerHref: null, readHref: '/topics/t', exitQuizHref: '/topics/t/interactive?exitQuiz=1',
}

let fetchMock: ReturnType<typeof vi.fn>

beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn()
  push.mockClear()
  fetchMock = vi.fn(async () => ({ ok: true, status: 200, json: async () => ({}) }))
  vi.stubGlobal('fetch', fetchMock)
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('flashcards before a recap section', () => {
  const watchedTeach = { 'c-teach': { ranges: [[0, 40]] as [number, number][] } }
  it('are required: no skip, and the recap opens only after every card is "Got it"', async () => {
    render(<VideoLessonPlayer {...base} steps={[teach, recap]} initialProgress={watchedTeach} initialIndex={1} initiallyComplete={false} />)
    expect(screen.getByTestId('review-flashcards-offer')).toBeTruthy()
    expect(screen.queryByTestId('stub-player')).toBeNull()
    expect(screen.queryByRole('button', { name: /Skip/ })).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: /Study the flashcards/ }))
    expect(screen.queryByRole('button', { name: /Skip/ })).toBeNull()
    // "Still learning" brings the card back, so the pile is not finished by it.
    expect(screen.getByText('Front one')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /Show the answer/ }))
    expect(screen.getByText('Back one')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /Still learning/ }))
    expect(screen.getByText('Front two')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /Show the answer/ }))
    fireEvent.click(screen.getByRole('button', { name: /Got it/ }))
    expect(screen.getByText('Front one')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /Show the answer/ }))
    fireEvent.click(screen.getByRole('button', { name: /Got it/ }))
    expect(screen.getByTestId('review-flashcards-done')).toBeTruthy()
    // Finishing is saved on the recap clip, so a reload does not ask again.
    await waitFor(() => {
      const saved = fetchMock.mock.calls.map(([url, init]) => ({ url: String(url), body: JSON.parse(String((init as RequestInit).body)) }))
      expect(saved.some((c) => c.url.endsWith('/progress') && c.body.clipId === 'c-recap' && c.body.cardsDone === true)).toBe(true)
    })
    fireEvent.click(screen.getByRole('button', { name: /Continue to the recap/ }))
    expect(screen.getByTestId('stub-player')).toBeTruthy()
    // Reopened from the button they are optional.
    fireEvent.click(screen.getByRole('button', { name: /Flashcards · 2/ }))
    expect(screen.getByRole('button', { name: /Skip to the recap/ })).toBeTruthy()
  })

  it('cannot be dodged by clicking the recap in the section list', () => {
    render(<VideoLessonPlayer {...base} steps={[teach, recap]} initialProgress={watchedTeach} initialIndex={0} initiallyComplete={false} />)
    expect(screen.getByTestId('stub-player')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /2\. Remember/ }))
    expect(screen.getByTestId('review-flashcards-offer')).toBeTruthy()
    expect(screen.queryByTestId('stub-player')).toBeNull()
  })

  it('are not asked again once finished, and never on a recap started before the rule', () => {
    render(<VideoLessonPlayer {...base} steps={[teach, recap]} initialProgress={{ ...watchedTeach, 'c-recap': { cardsDone: '2026-11-13T00:00:00.000Z' } }} initialIndex={1} initiallyComplete={false} />)
    expect(screen.queryByTestId('review-flashcards-offer')).toBeNull()
    expect(screen.getByTestId('stub-player')).toBeTruthy()
    cleanup()
    render(<VideoLessonPlayer {...base} steps={[teach, recap]} initialProgress={{ ...watchedTeach, 'c-recap': { ranges: [[0, 20]] } }} initialIndex={1} initiallyComplete={false} />)
    expect(screen.queryByTestId('review-flashcards-offer')).toBeNull()
    cleanup()
    render(<VideoLessonPlayer {...base} steps={[teach, recap]} initialProgress={{}} initialIndex={0} initiallyComplete={false} />)
    expect(screen.queryByTestId('review-flashcards-offer')).toBeNull()
    expect(screen.queryByRole('button', { name: /Flashcards ·/ })).toBeNull()
  })
})

describe('moving to the next section', () => {
  it('scrolls the video back into view, but not on first load', () => {
    const scroll = vi.fn()
    Element.prototype.scrollIntoView = scroll
    const next: StudentStep = { ...teach, clipId: 'c-next', title: 'Next section' }
    render(<VideoLessonPlayer {...base} steps={[teach, next]} initialProgress={{ 'c-teach': { ranges: [[0, 40]] } }} initialIndex={0} initiallyComplete={false} />)
    expect(scroll).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole('button', { name: /2\. Next section/ }))
    const target = scroll.mock.instances.at(-1) as unknown as HTMLElement
    expect(target.querySelector('[data-testid="stub-player"]')).toBeTruthy()
    expect(scroll).toHaveBeenLastCalledWith({ behavior: 'smooth', block: 'start' })
  })
})

describe('flashcards before the exit quiz', () => {
  it('the last end screen offers the whole lesson deck, which leads on to the quiz', () => {
    const done = { 'c-teach': { ranges: [[0, 40]] as [number, number][] }, 'c-recap': { ranges: [[0, 40]] as [number, number][] } }
    render(<VideoLessonPlayer {...base} steps={[teach, recap]} initialProgress={done} initialIndex={1} initiallyComplete allReviewCards={cards} />)
    expect(screen.getByRole('link', { name: /Take the exit quiz/ })).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /Study the flashcards first · 2/ }))
    expect(screen.getByText('Front one')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: /Skip to the exit quiz/ }))
    expect(push).toHaveBeenCalledWith('/topics/t/interactive?exitQuiz=1')
  })
})

describe('review decks', () => {
  const stored = (lesson: string, video: number, section: string, order: number): StoredStep => ({
    order, clipId: `${lesson}-${video}-${section}`, yield: null, questions: [],
    clip: { title: section, provider: 'FILE', providerId: '/x.mp4', durationSec: 30, tags: [`lesson-${lesson}`, `video-${video}`, `section-${section}`, 'role-teach'] },
  })

  it('attaches a deck to the recap section only', () => {
    const steps = studentSteps(visibleSteps([stored('mcat-circ1', 1, '02-charge', 0), stored('mcat-circ1', 1, '11-recap', 1)], false), {}, reviewCardsFor)
    expect(steps[0].reviewCards).toBeUndefined()
    expect(steps[1].reviewCards?.length).toBe(REVIEW_DECKS['mcat-circ1'][1].length)
    expect(isRecapSection('06-recap')).toBe(true)
    expect(isRecapSection('02-recapture')).toBe(false)
  })

  it('builds the exit-quiz deck from every video once, without repeated fronts', () => {
    const all = lessonReviewCards(visibleSteps([stored('mcat-circ1', 1, '02-charge', 0), stored('mcat-circ1', 1, '11-recap', 1), stored('mcat-circ1', 8, '06-recap', 2)], false), reviewCardsFor)
    expect(all.length).toBe(REVIEW_DECKS['mcat-circ1'][1].length + REVIEW_DECKS['mcat-circ1'][8].length)
    expect(new Set(all.map((c) => c.front)).size).toBe(all.length)
  })

  it.each([CIRC1, CIRC2])('every video of $key that has a recap section has a deck', (lesson) => {
    for (const v of lesson.videos) {
      if (!v.sections.some((s) => isRecapSection(s.id))) continue
      const deck = reviewCardsFor(lesson.key, v.video) ?? []
      expect(deck.length, `${lesson.key} video ${v.video}`).toBeGreaterThanOrEqual(5)
      expect(deck.length).toBeLessThanOrEqual(16)
      for (const c of deck) {
        expect(c.front.trim().length).toBeGreaterThan(10)
        expect(c.back.trim().length).toBeGreaterThan(0)
        // Balanced $…$ so KaTeX never swallows prose.
        expect((c.front.match(/\$/g) ?? []).length % 2, c.front).toBe(0)
        expect((c.back.match(/\$/g) ?? []).length % 2, c.back).toBe(0)
      }
      expect(new Set(deck.map((c) => c.front)).size).toBe(deck.length)
      // Owner rule: each concept video's deck has at least one "symbol + SI unit" card.
      if (v.video % 2 === 1) expect(deck.some((c) => /SI unit|with their symbols and units|prefixes/.test(c.front)), `${lesson.key} video ${v.video} unit card`).toBe(true)
    }
  })

  it.each([CIRC1, CIRC2])('every recap of $key asks exactly three valid questions with no answer-length tell', (lesson) => {
    const stems = new Set<string>()
    for (const v of lesson.videos) {
      for (const sec of v.sections) {
        for (const q of sec.questions ?? []) {
          expect(stems.has(q.question), `repeated stem: ${q.question}`).toBe(false)
          stems.add(q.question)
        }
        if (!isRecapSection(sec.id)) continue
        const qs = sec.questions ?? []
        expect(qs.length, `${lesson.key} video ${v.video} ${sec.id}`).toBe(3)
        for (const q of qs) {
          expect(checkpointQuestionSchema.safeParse(q).success, q.question).toBe(true)
          if (isNumericQuestion(q)) continue
          expect(new Set(q.options).size).toBe(4)
          const lens = q.options.map((o) => o.length)
          const right = lens[q.correctAnswer]
          const others = lens.filter((_, i) => i !== q.correctAnswer)
          // The key is never the clearly longest or clearly shortest option.
          expect(right, `key too long: ${q.question}`).toBeLessThanOrEqual(Math.max(...others) * 1.2)
          expect(right, `key too short: ${q.question}`).toBeGreaterThanOrEqual(Math.min(...others) * 0.8)
        }
      }
    }
  })

  it.each([CIRC1, CIRC2])('the new recap questions of $key spread the key across positions', (lesson) => {
    const keys = lesson.videos.filter((v) => v.video % 2 === 1).flatMap((v) => v.sections.filter((s) => isRecapSection(s.id)).flatMap((s) => (s.questions ?? []).filter((q) => !isNumericQuestion(q)).map((q) => (q as { correctAnswer: number }).correctAnswer)))
    expect(new Set(keys).size).toBe(4)
  })
})
