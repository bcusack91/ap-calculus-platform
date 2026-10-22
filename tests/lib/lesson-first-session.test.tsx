// @vitest-environment jsdom
/**
 * The short first session (AP Phase 3 W5, UX friction #6).
 *
 * A recommended AP topic is ~7 parts plus a 10-question exit quiz, and most
 * lesson openers never finished a part. When the student arrives from a
 * diagnostic's results (`?from=diagnostic`) or opens their current plan
 * topic, the lesson leads with "Start with Part 1 · ~N min", shows where the
 * exit quiz is, offers a stopping point after Part 1 with the place saved,
 * and the header reads "Your first step in <course>: <topic>". Everything
 * else (gate, pass mark, track mix, content) is untouched, and a plain
 * arrival sees the lesson exactly as before.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react'
import type { ReactNode } from 'react'
import { readFileSync } from 'node:fs'
import path from 'node:path'

// Hoisted with the vi.mock factories that reference them directly.
const { Null, sendProgress } = vi.hoisted(() => ({
  Null: () => null,
  sendProgress: vi.fn(async (_payload: Record<string, unknown>) => ({ json: async () => ({}) })),
}))
let search = ''
vi.mock('next/navigation', () => ({
  useSearchParams: () => new URLSearchParams(search),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  usePathname: () => '/topics/moles-molar-mass/interactive',
}))
let mockSession: { data: unknown; status: string } = { data: { user: { id: 'u1' } }, status: 'authenticated' }
vi.mock('next-auth/react', () => ({ useSession: () => mockSession }))
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))
// eslint-disable-next-line @next/next/no-img-element
vi.mock('next/image', () => ({ default: (p: Record<string, unknown>) => <img alt="" {...(p as object)} /> }))
vi.mock('next/dynamic', () => ({ default: () => { const Lazy = () => null; return Lazy } }))
vi.mock('react-markdown', () => ({ default: ({ children }: { children: ReactNode }) => <div>{children}</div> }))
vi.mock('remark-math', () => ({ default: () => undefined }))
vi.mock('remark-gfm', () => ({ default: () => undefined }))
vi.mock('rehype-katex', () => ({ default: () => undefined }))
vi.mock('rehype-raw', () => ({ default: () => undefined }))
vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve(), renderKatexSync: (t: string) => t }))
vi.mock('@/lib/render-rich-text', () => ({ renderRichText: (t: string) => t }))
vi.mock('@/lib/question-activity-client', () => ({ postQuestionActivity: () => undefined }))
vi.mock('@/lib/sat-math-topics', () => ({ isSatMathTopic: () => false }))
vi.mock('@/lib/competitive-course-map', () => ({ competitiveHrefForCourse: () => '/competitive' }))
vi.mock('@/data/ap-reference-sheets', () => ({ hasReferenceSheet: () => false }))
vi.mock('@/data/interactive-lessons/beyond-exam', () => ({ isBeyondExam: () => false }))
vi.mock('@/data/exit-quizzes', () => ({ hasExitQuiz: () => true, generateExitQuiz: async () => [], isTrackMix: () => false }))
let hasEntranceQuiz = false
vi.mock('@/data/entrance-quizzes', () => ({ hasEntranceQuiz: () => hasEntranceQuiz, loadEntranceQuiz: async () => null }))
vi.mock('@/hooks/useLessonProgressSaver', () => ({ useLessonProgressSaver: () => ({ sendProgress }) }))
vi.mock('@/hooks/useActivitySurface', () => ({ useActivitySurface: () => undefined }))
vi.mock('@/hooks/useLessonKeyboard', () => ({ useLessonKeyboard: () => undefined }))
vi.mock('@/components/DesmosCalculatorLink', () => ({ default: Null }))
vi.mock('@/components/flashcard-notification', () => ({ FlashcardNotification: Null }))
vi.mock('@/components/CorrectAnswerCelebration', () => ({ default: Null }))
vi.mock('@/components/BookmarkButton', () => ({ default: Null }))
vi.mock('@/components/StudyNotes', () => ({ default: Null }))
vi.mock('@/components/StudyPlanNextUp', () => ({ default: Null, studyPlanTopicHref: (t: { slug: string }) => `/topics/${t.slug}/interactive` }))
vi.mock('@/components/LessonProgressBar', () => ({ default: Null }))
vi.mock('@/components/KeyboardShortcutHint', () => ({ default: Null }))
vi.mock('@/components/TextToSpeech', () => ({ default: Null }))
vi.mock('@/components/PrintButton', () => ({ default: Null }))
vi.mock('@/components/FontSizeAdjuster', () => ({ default: Null }))
vi.mock('@/components/ReadingProgressBar', () => ({ default: Null }))
vi.mock('@/components/MarkForReview', () => ({ default: Null }))
vi.mock('@/components/ScratchPad', () => ({ default: Null }))

import {
  withFromDiagnostic, isFromDiagnostic, isCurrentPlanTopic, estimatePartMinutes, startPartLabel,
  firstStepHeadline, progressLineText, checkpointText,
} from '@/lib/first-session'
import { calculatePartMastery, partFromMastery } from '@/lib/lesson-place'
import { estimateLessonMinutes, MINUTES_PER_LESSON_PART } from '@/lib/lesson-minutes'
import { trackLessonFirstSessionStart, trackLessonPartComplete } from '@/lib/analytics'
import { FirstSessionChoice, FirstSessionProgressLine, FirstSessionCheckpoint } from '@/components/lesson/FirstSession'
import LessonArrivalSubtitle, { DEFAULT_LESSON_SUBTITLE } from '@/components/lesson/LessonArrivalSubtitle'
import { resetFirstSessionPlanCache } from '@/hooks/useFirstSession'
import InteractiveLessonRenderer from '@/components/InteractiveLessonRenderer'

const ROOT = path.resolve(__dirname, '../..')
const read = (p: string) => readFileSync(path.join(ROOT, p), 'utf8')

let beacon: ReturnType<typeof vi.fn>
let fetchMock: ReturnType<typeof vi.fn>
let plans: unknown[] = []
const sentEvents = () => beacon.mock.calls.map(([, blob]) => JSON.parse((blob as { __text: string }).__text) as { eventName: string; params: Record<string, unknown> })

beforeEach(() => {
  search = ''
  plans = []
  hasEntranceQuiz = false
  mockSession = { data: { user: { id: 'u1' } }, status: 'authenticated' }
  resetFirstSessionPlanCache()
  sendProgress.mockClear()
  window.localStorage.setItem('cookie-consent', JSON.stringify({ analytics: true }))
  beacon = vi.fn(() => true)
  vi.stubGlobal('Blob', class { __text: string; constructor(parts: string[]) { this.__text = parts.join('') } })
  Object.defineProperty(navigator, 'sendBeacon', { value: beacon, configurable: true })
  window.scrollTo = vi.fn()
  fetchMock = vi.fn(async (url: string) => {
    const ok = (body: unknown) => ({ ok: true, status: 200, json: async () => body })
    if (url.startsWith('/api/progress/load')) return ok({ exists: false, topicId: 't1' })
    if (url.startsWith('/api/exit-quiz/status')) return ok({ totalAttempts: 0, hasPassed: false, lastScore: null, mustRedoUnit: false })
    if (url.startsWith('/api/lessons/settings')) return ok({ includeLowYield: false })
    if (url.startsWith('/api/study-plan/plan-status')) return ok({ plans })
    return { ok: false, status: 404, json: async () => ({}) }
  })
  vi.stubGlobal('fetch', fetchMock)
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  window.localStorage.clear()
})

describe('first-session helpers', () => {
  it('flags the results-page link and reads it back', () => {
    expect(withFromDiagnostic('/topics/x/interactive')).toBe('/topics/x/interactive?from=diagnostic')
    expect(withFromDiagnostic('/topics/x/interactive?part=2')).toBe('/topics/x/interactive?part=2&from=diagnostic')
    expect(isFromDiagnostic(new URLSearchParams('from=diagnostic'))).toBe(true)
    expect(isFromDiagnostic(new URLSearchParams('from=dashboard'))).toBe(false)
    expect(isFromDiagnostic(null)).toBe(false)
  })

  it('recognises the CURRENT plan topic only (first uncleared topic of a plan)', () => {
    const p = [{ courseKey: 'ap-chem', topics: [{ slug: 'a', isSatisfied: true }, { slug: 'b', isSatisfied: false }, { slug: 'c', isSatisfied: false }] }]
    expect(isCurrentPlanTopic(p, 'b')).toBe(true)
    expect(isCurrentPlanTopic(p, 'c')).toBe(false) // later in the plan, not the next step
    expect(isCurrentPlanTopic(p, 'a')).toBe(false) // already cleared
    expect(isCurrentPlanTopic(p, 'zzz')).toBe(false)
    expect(isCurrentPlanTopic(null, 'b')).toBe(false)
    expect(isCurrentPlanTopic([{ topics: 'nope' }, 7], 'b')).toBe(false)
  })

  it('estimates one part on the same scale as the whole-lesson estimate', () => {
    // A typical 7-section part is MINUTES_PER_LESSON_PART; 7 of them read ~45 min on the results page.
    expect(estimatePartMinutes(7)).toBe(MINUTES_PER_LESSON_PART)
    expect(estimatePartMinutes(7) * 7).toBeLessThanOrEqual(estimateLessonMinutes(7)!)
    expect(estimatePartMinutes(14)).toBe(MINUTES_PER_LESSON_PART * 2)
    expect(estimatePartMinutes(1)).toBe(3) // floor
    expect(estimatePartMinutes(0)).toBe(MINUTES_PER_LESSON_PART) // unknown → typical
    expect(startPartLabel(8)).toBe('Start with Part 1 · ~8 min')
  })

  it('writes the header, progress line and checkpoint copy', () => {
    expect(firstStepHeadline('AP Chemistry', 'Moles & Molar Mass')).toBe('Your first step in AP Chemistry: Moles & Molar Mass')
    expect(firstStepHeadline(null, 'Moles')).toBe('Your first step: Moles')
    expect(progressLineText(1, 7, { hasExitQuiz: true })).toBe('Part 1 of 7 · exit quiz after Part 7')
    expect(progressLineText(3, 7, { hasExitQuiz: true, quizPassed: true })).toBe('Part 3 of 7 · exit quiz passed')
    expect(progressLineText(2, 5, { hasExitQuiz: false })).toBe('Part 2 of 5')
    expect(checkpointText(1, 7, true)).toBe('Nice — 1 of 7 done. Keep going, or stop here; we saved your place.')
    expect(checkpointText(1, 7, false)).toBe('Nice — 1 of 7 done. Keep going, or stop here.')
  })
})

describe('saved place: a finished part reopens at the next part', () => {
  it('round-trips every part boundary for 1–8 part lessons', () => {
    for (let total = 1; total <= 8; total++) {
      for (let part = 1; part <= total; part++) {
        const sections = 7
        // Finishing `part` saves the whole part …
        const saved = calculatePartMastery(part, sections, sections, total)
        // … and reopens at the next part (or stays on the last).
        expect(partFromMastery(saved, total)).toBe(Math.min(total, part + 1))
        // A part in progress stays on that part.
        expect(partFromMastery(calculatePartMastery(part, 3, sections, total), total)).toBe(part)
      }
    }
    expect(partFromMastery(0, 7)).toBe(1)
    expect(partFromMastery(NaN, 7)).toBe(1)
    expect(partFromMastery(1, 7)).toBe(7)
  })

  it('the renderer saves a part completion as the WHOLE part (not one section short)', () => {
    const src = read('src/components/InteractiveLessonRenderer.tsx')
    expect(src).toContain('const doneCount = isPartCompletion ? sectionCount : completedSections.size')
    expect(src).toContain("import { calculatePartMastery, partFromMastery } from '@/lib/lesson-place'")
    expect(src).toContain('partFromMastery(Number(data.progress.masteryLevel ?? 0), totalParts)')
  })
})

describe('analytics', () => {
  it('sends lesson_first_session_start and lesson_part_complete with the agreed fields', () => {
    trackLessonFirstSessionStart('moles-molar-mass', 'ap-chemistry', 'part1')
    trackLessonPartComplete('moles-molar-mass', 1)
    expect(sentEvents()).toEqual([
      { eventName: 'lesson_first_session_start', params: { topic_slug: 'moles-molar-mass', course_slug: 'ap-chemistry', choice: 'part1' } },
      { eventName: 'lesson_part_complete', params: { topic_slug: 'moles-molar-mass', part: 1 } },
    ])
  })
})

describe('FirstSession components', () => {
  it('choice screen: filled Part 1 button with minutes, focused; whole lesson + exit quiz secondary; entrance quiz as a text link', () => {
    const onChoice = vi.fn()
    const onEntranceQuiz = vi.fn()
    render(
      <FirstSessionChoice topicTitle="Moles & Molar Mass" courseName="AP Chemistry" totalParts={7} partMinutes={4} hasExitQuiz hasEntranceQuiz onChoice={onChoice} onEntranceQuiz={onEntranceQuiz} />,
    )
    const part1 = screen.getByTestId('first-session-part1')
    expect(part1.textContent).toBe('Start with Part 1 · ~4 min')
    expect(part1.className).toMatch(/bg-accent/)
    expect(document.activeElement).toBe(part1)
    expect(screen.getByText('Your first step in AP Chemistry')).toBeTruthy()
    expect(screen.getByText(/This lesson has/).textContent).toContain('7 parts')
    const full = screen.getByTestId('first-session-full')
    const quiz = screen.getByTestId('first-session-quiz')
    expect(full.textContent).toBe('Read the whole lesson')
    expect(quiz.textContent).toBe('Jump to the exit quiz')
    expect(full.className).not.toMatch(/bg-accent/)
    expect(quiz.className).not.toMatch(/bg-accent/)
    fireEvent.click(part1); fireEvent.click(full); fireEvent.click(quiz)
    expect(onChoice.mock.calls.map((c) => c[0])).toEqual(['part1', 'full', 'quiz'])
    fireEvent.click(screen.getByText(/Take the entrance quiz/))
    expect(onEntranceQuiz).toHaveBeenCalledTimes(1)
  })

  it('choice screen without an exit quiz or entrance quiz offers only Part 1 and the whole lesson', () => {
    render(<FirstSessionChoice topicTitle="T" totalParts={3} partMinutes={5} hasExitQuiz={false} hasEntranceQuiz={false} onChoice={vi.fn()} />)
    expect(screen.queryByTestId('first-session-quiz')).toBeNull()
    expect(screen.queryByText(/entrance quiz/)).toBeNull()
    expect(screen.getByText('Your first step')).toBeTruthy()
  })

  it('progress line updates as parts complete', () => {
    const { rerender } = render(<FirstSessionProgressLine part={1} totalParts={7} hasExitQuiz />)
    expect(screen.getByTestId('first-session-progress').textContent).toBe('Part 1 of 7 · exit quiz after Part 7')
    rerender(<FirstSessionProgressLine part={2} totalParts={7} hasExitQuiz />)
    expect(screen.getByTestId('first-session-progress').textContent).toBe('Part 2 of 7 · exit quiz after Part 7')
    rerender(<FirstSessionProgressLine part={7} totalParts={7} hasExitQuiz quizPassed />)
    expect(screen.getByTestId('first-session-progress').textContent).toBe('Part 7 of 7 · exit quiz passed')
  })

  it('checkpoint card: Continue is primary, Stop for today goes to the course hub', () => {
    const onContinue = vi.fn()
    render(<FirstSessionCheckpoint completedParts={1} totalParts={7} placeSaved stopHref="/courses/ap-chemistry" onContinue={onContinue} />)
    expect(screen.getByText('Nice — 1 of 7 done. Keep going, or stop here; we saved your place.')).toBeTruthy()
    const cont = screen.getByText('Continue to Part 2 →')
    expect(cont.className).toMatch(/bg-accent/)
    fireEvent.click(cont)
    expect(onContinue).toHaveBeenCalledTimes(1)
    const stop = screen.getByTestId('first-session-stop') as HTMLAnchorElement
    expect(stop.getAttribute('href')).toBe('/courses/ap-chemistry')
    expect(stop.className).not.toMatch(/bg-accent/)
  })
})

describe('LessonArrivalSubtitle (header)', () => {
  const props = { topicSlug: 'moles-molar-mass', topicTitle: 'Moles & Molar Mass', courseName: 'AP Chemistry' }

  it('reads "Your first step in <course>: <topic>" when arriving from a diagnostic, with no plan lookup', () => {
    search = 'from=diagnostic'
    render(<LessonArrivalSubtitle {...props} />)
    expect(screen.getByTestId('lesson-subtitle').textContent).toBe('Your first step in AP Chemistry: Moles & Molar Mass')
    expect(fetchMock.mock.calls.some(([u]) => String(u).includes('plan-status'))).toBe(false)
  })

  it('keeps the generic line for a plain arrival that is not the current plan topic', async () => {
    plans = [{ topics: [{ slug: 'moles-molar-mass', isSatisfied: true }, { slug: 'electron-configuration', isSatisfied: false }] }]
    render(<LessonArrivalSubtitle {...props} />)
    await waitFor(() => expect(fetchMock.mock.calls.some(([u]) => String(u).includes('plan-status'))).toBe(true))
    await act(async () => {})
    expect(screen.getByTestId('lesson-subtitle').textContent).toBe(DEFAULT_LESSON_SUBTITLE)
  })

  it('switches to the first-step line when the topic is the student\'s current plan topic', async () => {
    plans = [{ topics: [{ slug: 'moles-molar-mass', isSatisfied: false }, { slug: 'electron-configuration', isSatisfied: false }] }]
    render(<LessonArrivalSubtitle {...props} />)
    await waitFor(() => expect(screen.getByTestId('lesson-subtitle').textContent).toBe('Your first step in AP Chemistry: Moles & Molar Mass'))
    expect(screen.getByTestId('lesson-subtitle').getAttribute('data-first-step')).toBe('plan')
  })

  it('signed out: generic line, no plan request', async () => {
    mockSession = { data: null, status: 'unauthenticated' }
    render(<LessonArrivalSubtitle {...props} />)
    await act(async () => {})
    expect(screen.getByTestId('lesson-subtitle').textContent).toBe(DEFAULT_LESSON_SUBTITLE)
    expect(fetchMock.mock.calls.some(([u]) => String(u).includes('plan-status'))).toBe(false)
  })

  it('the lesson page mounts it (inside Suspense) with the course name, and passes courseName to the renderer', () => {
    const page = read('src/app/topics/[slug]/interactive/page.tsx')
    expect(page).toContain('<LessonArrivalSubtitle')
    expect(page).toContain('courseName={topic.category.course.name}')
    expect(page).toMatch(/<Suspense fallback=\{<p className="text-lg text-accent-light">\{DEFAULT_LESSON_SUBTITLE\}<\/p>\}>/)
    // The page stays ISR: no searchParams read on the server.
    expect(page).not.toMatch(/searchParams/)
  })
})

/* ---------------- the renderer, end to end ---------------- */

const textPart = (title: string, n: number) => ({
  title,
  data: { topicSlug: 'moles-molar-mass', sections: Array.from({ length: n }, (_, i) => ({ type: 'text', title: `${title} ${i + 1}`, content: `${title} section ${i + 1}` })) },
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PARTS = [textPart('Counting atoms', 7), textPart('Molar mass', 7), textPart('Conversions', 7)] as any

const renderLesson = () =>
  render(<InteractiveLessonRenderer topicSlug="moles-molar-mass" courseSlug="ap-chemistry" courseName="AP Chemistry" preloadedParts={PARTS} />)

const nextButton = () => screen.getAllByRole('button').find((b) => /Next|Quiz|Done/.test(b.textContent ?? '') && !/Previous/.test(b.getAttribute('aria-label') ?? ''))!

describe('InteractiveLessonRenderer: short first session', () => {
  it('from a diagnostic: Part 1 choice (with minutes), progress line to the quiz, checkpoint after Part 1, place saved as the next part', async () => {
    search = 'from=diagnostic'
    renderLesson()

    // Choice screen leads with Part 1, even though this topic has no entrance quiz.
    await screen.findByTestId('first-session-choice')
    const part1 = screen.getByTestId('first-session-part1')
    expect(part1.textContent).toBe(`Start with Part 1 · ~${estimatePartMinutes(7)} min`)
    expect(document.activeElement).toBe(part1)
    expect(screen.getByText('Your first step in AP Chemistry')).toBeTruthy()
    expect(screen.getByText(/This lesson has/).textContent).toContain('3 parts')
    expect(screen.getByTestId('first-session-full')).toBeTruthy()
    expect(screen.getByTestId('first-session-quiz')).toBeTruthy()
    expect(screen.queryByText('Start from the Beginning')).toBeNull()

    fireEvent.click(part1)
    expect(sentEvents().map((e) => e.eventName)).toContain('lesson_first_session_start')
    expect(sentEvents().find((e) => e.eventName === 'lesson_first_session_start')!.params).toEqual({ topic_slug: 'moles-molar-mass', course_slug: 'ap-chemistry', choice: 'part1' })

    // Lesson at Part 1 with the slim progress line.
    await screen.findByTestId('first-session-progress')
    expect(screen.getByTestId('first-session-progress').textContent).toBe('Part 1 of 3 · exit quiz after Part 3')
    expect(screen.getByText('Counting atoms section 1')).toBeTruthy()
    expect(screen.queryByTestId('first-session-checkpoint')).toBeNull()

    // Walk Part 1 (7 text sections).
    for (let i = 0; i < 7; i++) {
      await act(async () => { fireEvent.click(nextButton()) })
    }

    // Part 1 done → checkpoint card, progress line on Part 2, part-complete event, whole-part save.
    const card = await screen.findByTestId('first-session-checkpoint')
    expect(card.textContent).toContain('Nice — 1 of 3 done. Keep going, or stop here; we saved your place.')
    expect((screen.getByTestId('first-session-stop') as HTMLAnchorElement).getAttribute('href')).toBe('/courses/ap-chemistry')
    expect(screen.getByTestId('first-session-progress').textContent).toBe('Part 2 of 3 · exit quiz after Part 3')
    expect(screen.getByText('Molar mass section 1')).toBeTruthy()
    const partEvents = sentEvents().filter((e) => e.eventName === 'lesson_part_complete')
    expect(partEvents).toEqual([{ eventName: 'lesson_part_complete', params: { topic_slug: 'moles-molar-mass', part: 1 } }])
    const completion = sendProgress.mock.calls.map((c) => c[0]).find((p) => p.isPartCompletion === true)!
    expect(completion).toBeTruthy()
    expect(completion.lessonPart).toBe(1)
    expect((completion.completedSections as number[]).length).toBe(7)
    // A reload resolves this saved mastery to Part 2 (the place is kept).
    expect(partFromMastery(completion.masteryLevel as number, 3)).toBe(2)

    // Continue dismisses the card; the lesson goes on.
    fireEvent.click(screen.getByText('Continue to Part 2 →'))
    expect(screen.queryByTestId('first-session-checkpoint')).toBeNull()
  })

  it('"Read the whole lesson" starts Part 1 without the stopping-point card', async () => {
    search = 'from=diagnostic'
    renderLesson()
    await screen.findByTestId('first-session-choice')
    fireEvent.click(screen.getByTestId('first-session-full'))
    expect(sentEvents().find((e) => e.eventName === 'lesson_first_session_start')!.params.choice).toBe('full')
    await screen.findByTestId('first-session-progress')
    for (let i = 0; i < 7; i++) {
      await act(async () => { fireEvent.click(nextButton()) })
    }
    await screen.findByText('Molar mass section 1')
    expect(screen.queryByTestId('first-session-checkpoint')).toBeNull()
    expect(screen.getByTestId('first-session-progress').textContent).toBe('Part 2 of 3 · exit quiz after Part 3')
  })

  it('"Jump to the exit quiz" records the choice and asks for a quiz draw', async () => {
    search = 'from=diagnostic'
    renderLesson()
    await screen.findByTestId('first-session-choice')
    await act(async () => { fireEvent.click(screen.getByTestId('first-session-quiz')) })
    expect(sentEvents().find((e) => e.eventName === 'lesson_first_session_start')!.params.choice).toBe('quiz')
    // The mocked pool draws nothing, so the student lands on Part 1 rather than a dead end.
    await screen.findByText('Counting atoms section 1')
  })

  it('a reload with saved progress reopens at the saved part (no choice screen)', async () => {
    search = 'from=diagnostic'
    fetchMock.mockImplementation(async (url: string) => {
      const ok = (body: unknown) => ({ ok: true, status: 200, json: async () => body })
      if (url.startsWith('/api/progress/load')) return ok({ exists: true, topicId: 't1', progress: { masteryLevel: calculatePartMastery(1, 7, 7, 3), variant: 1 } })
      if (url.startsWith('/api/exit-quiz/status')) return ok({ totalAttempts: 0, hasPassed: false, lastScore: null, mustRedoUnit: false })
      return ok({})
    })
    renderLesson()
    await screen.findByText('Molar mass section 1')
    expect(screen.queryByTestId('first-session-choice')).toBeNull()
    expect(screen.getByTestId('first-session-progress').textContent).toBe('Part 2 of 3 · exit quiz after Part 3')
  })

  it('a plain arrival is unchanged: the entrance-quiz choice screen, no first-step chrome', async () => {
    hasEntranceQuiz = true
    renderLesson()
    await screen.findByText('Start from the Beginning')
    expect(screen.getByText('Take Entrance Quiz')).toBeTruthy()
    expect(screen.queryByTestId('first-session-choice')).toBeNull()
    fireEvent.click(screen.getByText('Start from the Beginning'))
    await screen.findByText('Counting atoms section 1')
    expect(screen.queryByTestId('first-session-progress')).toBeNull()
    expect(sentEvents().map((e) => e.eventName)).not.toContain('lesson_first_session_start')
    for (let i = 0; i < 7; i++) {
      await act(async () => { fireEvent.click(nextButton()) })
    }
    await screen.findByText('Molar mass section 1')
    expect(screen.queryByTestId('first-session-checkpoint')).toBeNull()
    // The part-complete funnel event fires for every lesson.
    expect(sentEvents().filter((e) => e.eventName === 'lesson_part_complete')).toHaveLength(1)
  })

  it('a plain arrival at the student\'s CURRENT plan topic gets the first-step framing too', async () => {
    plans = [{ topics: [{ slug: 'moles-molar-mass', isSatisfied: false }] }]
    hasEntranceQuiz = true
    renderLesson()
    await screen.findByTestId('first-session-choice')
    expect(screen.getByTestId('first-session-part1').textContent).toMatch(/^Start with Part 1 · ~\d+ min$/)
    expect(screen.getByText(/Take the entrance quiz/)).toBeTruthy() // still reachable
  })
})
