// @vitest-environment jsdom
/**
 * StudyPlanNextUp — the post-completion router (UX Phase 3, frictions #8,
 * #9, #10, #11).
 *
 * Regressions guarded here:
 *   - #9  A finished lesson whose exit quiz the plan still owed sent the
 *         student to topic 2; the exit quiz for THIS topic must lead.
 *   - #10 "Go to Topic" used the topic ARTICLE (/topics/<slug>) while the
 *         dashboard and hub used the lesson (/interactive): one helper now.
 *   - #8  No stopping point: "Done for today — next up tomorrow" sets a
 *         default pace through the calendar target API (never over a
 *         teacher's due date or an existing target) and links /calendar.
 *   - #11 The flashcard-rating hold stays (owner rule) but is now measured.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))
const analytics = vi.hoisted(() => ({ blocked: vi.fn() }))
vi.mock('@/lib/analytics', () => ({ trackPlanNextBlockedByCards: (...a: unknown[]) => analytics.blocked(...a) }))

import StudyPlanNextUp, {
  completedTopicCleared,
  defaultCycleTargetDate,
  pickNextPendingTopic,
  studyPlanTopicHref,
  type PlanTopic,
} from '@/components/StudyPlanNextUp'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'

type Plan = { courseKey: string; label: string; topics: PlanTopic[] }
let plans: Plan[] = []
let cardsDue = 0
let cycleDue: { dueDate: string | null; source: 'class' | 'self' | null } = { dueDate: null, source: null }
let targetStatus = 200
let fetchMock: ReturnType<typeof vi.fn>

beforeEach(() => {
  plans = []
  cardsDue = 0
  cycleDue = { dueDate: null, source: null }
  targetStatus = 200
  analytics.blocked.mockReset()
  fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
    const json = (body: unknown, status = 200) => ({ ok: status < 400, status, json: async () => body })
    if (url.startsWith('/api/calendar/target')) {
      if (targetStatus !== 200) return json({ error: 'nope' }, targetStatus)
      const { date } = JSON.parse(String(init?.body))
      return json({ ok: true, dueDate: `${date}T12:00:00.000Z`, scheduled: 3 })
    }
    if (url.startsWith('/api/calendar?')) return json({ events: [], cycles: [{ course: 'ap-chem', label: 'AP Chemistry', ...cycleDue, classroomName: null, pending: 0, hasDiagnostic: true }] })
    if (url.startsWith('/api/study-plan/plan-status')) return json({ plans })
    if (url.startsWith('/api/flashcards/review?')) return json({ cards: [], stats: { due: cardsDue } })
    return json({}, 404)
  })
  vi.stubGlobal('fetch', fetchMock)
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

const moles: PlanTopic = { slug: 'ap-chem-moles', name: 'Moles', isSatisfied: false, topicPath: '/topics/ap-chem-moles', hasExitQuiz: true }
const gases: PlanTopic = { slug: 'ap-chem-gases', name: 'Gases', isSatisfied: false, topicPath: '/topics/ap-chem-gases', hasExitQuiz: true }
const chemPlan = (topics: PlanTopic[] = [moles, gases]): Plan => ({ courseKey: 'ap-chem', label: 'AP Chemistry', topics })

const putCalls = () => fetchMock.mock.calls.filter(([u, init]) => String(u) === '/api/calendar/target' && (init as RequestInit)?.method === 'PUT')

describe('#9 lesson finished, exit quiz still owed', () => {
  it('leads with "Take the exit quiz for <this topic>" (opened in place), topic 2 secondary, nothing unlocked yet', async () => {
    plans = [chemPlan()]
    const onTakeExitQuiz = vi.fn()
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="lesson" onTakeExitQuiz={onTakeExitQuiz} />)
    const quiz = await screen.findByRole('button', { name: /Take the exit quiz for Moles/ })
    expect(quiz.className).toContain('bg-gradient')
    fireEvent.click(quiz)
    expect(onTakeExitQuiz).toHaveBeenCalledTimes(1)

    const skip = screen.getByRole('link', { name: 'Skip ahead to Gases' })
    expect(skip).toHaveAttribute('href', '/topics/ap-chem-gases/interactive')
    expect(skip.className).not.toContain('bg-gradient')
    expect(screen.queryByText('Next up: Gases')).toBeNull()
    expect(screen.getByText(new RegExp(`Score ${TOPIC_CLEAR_PERCENT}% to clear this topic`))).toBeInTheDocument()
    expect(screen.getByText(/0 of 2 sections complete/)).toBeInTheDocument()
    // The lesson side alone unlocks no cards, so no card row and no card fetch.
    expect(screen.queryByText(/flashcards unlocked/i)).toBeNull()
    expect(fetchMock.mock.calls.some(([u]) => String(u).startsWith('/api/flashcards/review'))).toBe(false)
  })

  it('without an in-place opener, links the lesson deep link that opens the graded quiz', async () => {
    plans = [chemPlan()]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="lesson" />)
    const quiz = await screen.findByRole('link', { name: /Take the exit quiz for Moles/ })
    expect(quiz).toHaveAttribute('href', '/topics/ap-chem-moles/interactive?exitQuiz=1')
  })

  it('a finished lesson on a topic with NO exit quiz still clears it and moves on', async () => {
    plans = [chemPlan([{ ...moles, hasExitQuiz: false }, gases])]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="lesson" />)
    expect(await screen.findByText('Next up: Gases')).toBeInTheDocument()
    expect(screen.queryByText(/Take the exit quiz/)).toBeNull()
    expect(screen.getByText(/1 of 2 sections complete/)).toBeInTheDocument()
  })

  it('a lesson finish the snapshot already shows cleared moves on too', async () => {
    plans = [chemPlan([{ ...moles, isSatisfied: true }, gases])]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="lesson" />)
    expect(await screen.findByText('Next up: Gases')).toBeInTheDocument()
  })

  it('completedTopicCleared: the rule in one place', () => {
    expect(completedTopicCleared({ isSatisfied: false, hasExitQuiz: true }, 'lesson')).toBe(false)
    expect(completedTopicCleared({ isSatisfied: false, hasExitQuiz: false }, 'lesson')).toBe(true)
    expect(completedTopicCleared({ isSatisfied: false }, 'lesson')).toBe(true) // payloads without the flag: unchanged behaviour
    expect(completedTopicCleared({ isSatisfied: true, hasExitQuiz: true }, 'lesson')).toBe(true)
    expect(completedTopicCleared({ isSatisfied: false, hasExitQuiz: true }, 'quiz', true)).toBe(true)
    expect(completedTopicCleared({ isSatisfied: false, hasExitQuiz: true }, 'quiz', false)).toBe(false)
    expect(completedTopicCleared({ isSatisfied: false, hasExitQuiz: true }, 'entrance')).toBe(true)
    // pickNextPendingTopic still names the next OTHER topic — the panel decides whether this one is done.
    expect(pickNextPendingTopic([moles, gases], 'ap-chem-moles')?.slug).toBe('ap-chem-gases')
  })
})

describe('#10 one helper for every plan-topic link', () => {
  it('post-quiz "Go to Topic" opens the lesson, like the dashboard and hub', async () => {
    plans = [chemPlan()]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="quiz" quizPassed />)
    expect(await screen.findByText('Next up: Gases')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Go to Topic/ })).toHaveAttribute('href', studyPlanTopicHref(gases, 'ap-chem'))
    expect(studyPlanTopicHref(gases, 'ap-chem')).toBe('/topics/ap-chem-gases/interactive')
  })

  it('studyPlanTopicHref: video lesson only when the student prefers video AND the topic has one', () => {
    const t = { slug: 'types-of-chemical-bonds', name: 'B', isSatisfied: false }
    expect(studyPlanTopicHref({ ...t, hasVideoLesson: true, videoPreferred: true }, 'ap-chem')).toBe('/topics/types-of-chemical-bonds/video')
    expect(studyPlanTopicHref({ ...t, hasVideoLesson: true }, 'ap-chem')).toBe('/topics/types-of-chemical-bonds/interactive')
    expect(studyPlanTopicHref({ ...t, videoPreferred: true }, 'ap-chem')).toBe('/topics/types-of-chemical-bonds/interactive')
  })

  it('studyPlanTopicHref: lesson for every course, MCAT keeps its enriched paths', () => {
    expect(studyPlanTopicHref({ slug: 'derivatives', name: 'D', isSatisfied: false }, 'calcab')).toBe('/topics/derivatives/interactive')
    expect(studyPlanTopicHref({ slug: 'mcat-enzymes', name: 'E', isSatisfied: false }, 'mcat')).toBe('/topics/mcat-enzymes')
    expect(studyPlanTopicHref({ slug: 'enzymes', name: 'E', isSatisfied: false, hasLesson: true, lessonPath: '/mcat/lessons/enzymes' }, 'mcat')).toBe('/mcat/lessons/enzymes')
  })
})

describe('#8 "Done for today" — a reason and a way to come back', () => {
  it('after a pass with no target set: sets the default pace via the target API and links the calendar', async () => {
    plans = [chemPlan([moles, gases, { slug: 'ap-chem-acids', name: 'Acids', isSatisfied: false, hasExitQuiz: true }])]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="quiz" quizPassed />)
    const done = await screen.findByRole('button', { name: /Done for today — next up tomorrow: Gases/ })
    expect(screen.getByRole('link', { name: /Go to Topic/ })).toBeInTheDocument() // the next topic is still offered NOW
    fireEvent.click(done)
    await screen.findByText(/See you tomorrow/)
    // Checked for an existing target first, then set one: 2 topics left → today + 2 + 2.
    expect(fetchMock.mock.calls.some(([u]) => String(u).startsWith('/api/calendar?from='))).toBe(true)
    expect(putCalls()).toHaveLength(1)
    expect(JSON.parse(String((putCalls()[0][1] as RequestInit).body))).toEqual({ course: 'ap-chem', date: defaultCycleTargetDate(new Date(), 2) })
    expect(screen.getByText(/2 remaining topics are on your calendar at one a day/)).toBeInTheDocument()
    expect(screen.getByText(/the cycle test on .* then your AP Chemistry diagnostic on/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Open your calendar/ })).toHaveAttribute('href', '/calendar')
  })

  it('never overwrites a target that exists (own or teacher): just links the calendar', async () => {
    cycleDue = { dueDate: '2026-11-05T12:00:00.000Z', source: 'class' }
    plans = [chemPlan()]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="quiz" quizPassed />)
    fireEvent.click(await screen.findByRole('button', { name: /Done for today/ }))
    await screen.findByText(/already on your calendar/)
    expect(screen.getByText(/your teacher set the due date/)).toBeInTheDocument()
    expect(putCalls()).toHaveLength(0)
    expect(screen.getByRole('link', { name: /Open your calendar/ })).toHaveAttribute('href', '/calendar')
  })

  it('a refused target (teacher due date landed meanwhile) is not an error', async () => {
    targetStatus = 409
    plans = [chemPlan()]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="quiz" quizPassed />)
    fireEvent.click(await screen.findByRole('button', { name: /Done for today/ }))
    await screen.findByText(/already on your calendar/)
  })

  it('a failed save still leaves a way to the calendar', async () => {
    targetStatus = 500
    plans = [chemPlan()]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="quiz" quizPassed />)
    fireEvent.click(await screen.findByRole('button', { name: /Done for today/ }))
    expect(await screen.findByRole('link', { name: /Set one on your calendar/ })).toHaveAttribute('href', '/calendar')
  })

  it('is offered only for courses with a study-cycle calendar (MCAT, SAT, AP)', async () => {
    plans = [{ courseKey: 'act', label: 'ACT', topics: [{ slug: 'act-a', name: 'A', isSatisfied: false }, { slug: 'act-b', name: 'B', isSatisfied: false }] }]
    render(<StudyPlanNextUp topicSlug="act-a" completion="quiz" quizPassed />)
    expect(await screen.findByText('Next up: B')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Done for today/ })).toBeNull()
  })

  it('is not offered while this topic is still uncleared (exit quiz owed)', async () => {
    plans = [chemPlan()]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="lesson" />)
    await screen.findByText(/Take the exit quiz for Moles/)
    expect(screen.queryByRole('button', { name: /Done for today/ })).toBeNull()
  })

  it('defaultCycleTargetDate: one topic a day from tomorrow, then the test, then the retake', () => {
    const today = new Date(2026, 9, 20, 15, 0, 0) // local Oct 20
    expect(defaultCycleTargetDate(today, 3)).toBe('2026-10-25') // topics 21–23, test 24, diagnostic 25
    expect(defaultCycleTargetDate(today, 0)).toBe('2026-10-22') // test tomorrow, diagnostic the day after
    expect(defaultCycleTargetDate(new Date(2026, 11, 30), 1)).toBe('2027-01-02')
  })
})

describe('#11 the flashcard-rating hold is kept, and measured', () => {
  it('fires plan_next_blocked_by_cards once when "Next up" is withheld for unrated cards', async () => {
    cardsDue = 2
    plans = [chemPlan()]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="quiz" quizPassed />)
    await screen.findByRole('link', { name: /2 cards left/ })
    expect(screen.queryByText('Next up: Gases')).toBeNull()
    await waitFor(() => expect(analytics.blocked).toHaveBeenCalledTimes(1))
    expect(analytics.blocked).toHaveBeenCalledWith('ap-chem-moles', 2, 'ap-chem')
  })

  it('does not fire when nothing is withheld', async () => {
    plans = [chemPlan()]
    render(<StudyPlanNextUp topicSlug="ap-chem-moles" completion="quiz" quizPassed />)
    await screen.findByText('Next up: Gases')
    expect(analytics.blocked).not.toHaveBeenCalled()
  })
})
