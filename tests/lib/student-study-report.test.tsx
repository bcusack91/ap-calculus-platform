// @vitest-environment jsdom
/**
 * Teacher study report (owner request 2026-09-29): the per-student page at
 * /teacher/classroom/[id]/student/[studentId] and the class activity table in
 * Insights › Engagement. Both only render what the metrics APIs return, so
 * these tests feed fixture payloads through a stubbed fetch.
 */
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, cleanup, waitFor, fireEvent, within } from '@testing-library/react'
import type { StudentMetrics } from '@/lib/student-metrics'

let searchParams = new URLSearchParams()
const replace = vi.fn()
vi.mock('next/navigation', () => ({
  useParams: () => ({ id: 'c1', studentId: 's1' }),
  useRouter: () => ({ push: vi.fn(), replace }),
  useSearchParams: () => ({ get: (k: string) => searchParams.get(k) }),
}))
vi.mock('next/link', () => ({
  default: ({ children, href, ...rest }: { children: React.ReactNode; href: string } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))

import StudentStudyReportPage from '@/app/teacher/classroom/[id]/student/[studentId]/page'
import ClassEngagement from '@/components/ClassEngagement'

const zeroSurfaces = {
  LESSON: 0, ENTRANCE_QUIZ: 0, EXIT_QUIZ: 0, FLASHCARDS: 0, DIAGNOSTIC: 0,
  PRACTICE_TEST: 0, FULL_LENGTH: 0, COMPETITIVE: 0, OTHER: 0,
}
const zeroTally = { answered: 0, correct: 0 }

function emptyMetrics(): StudentMetrics {
  return {
    range: '7d',
    scope: 'all',
    generatedAt: '2026-10-05T15:00:00.000Z',
    primaryCourseSlug: null,
    activeTime: { totalSeconds: 0, activeDays: 0, bySurface: { ...zeroSurfaces }, byDay: [] },
    flashcards: {
      reviews: 0, newCards: 0, totalSeconds: 0, timedReviews: 0, avgSecondsPerCard: null,
      ratings: { AGAIN: 0, HARD: 0, GOOD: 0, EASY: 0 },
      ratingShares: { AGAIN: 0, HARD: 0, GOOD: 0, EASY: 0 },
      matureReviews: 0, retention: null, overdue: 0, rushing: false, byDay: [],
    },
    questions: {
      total: { ...zeroTally },
      bySource: {
        ENTRANCE: { ...zeroTally }, LESSON: { ...zeroTally }, EXIT: { ...zeroTally }, DIAGNOSTIC: { ...zeroTally },
        PRACTICE: { ...zeroTally }, FULL_LENGTH: { ...zeroTally }, DAILY: { ...zeroTally }, COMPETITIVE: { ...zeroTally },
      },
    },
    weakAreas: [],
    lessons: [],
    exitQuizzes: { attempts: 0, passes: 0, topicsCleared: 0 },
    weekly: { since: '2026-09-28T15:00:00.000Z', activeSeconds: 0, activeDays: 0, topicsCleared: 0, target: null },
    mcat: null,
  }
}

function fullMetrics(): StudentMetrics {
  const m = emptyMetrics()
  m.primaryCourseSlug = 'mcat-prep'
  m.activeTime = {
    totalSeconds: 5400,
    activeDays: 2,
    bySurface: { ...zeroSurfaces, LESSON: 3000, FLASHCARDS: 1800, EXIT_QUIZ: 600 },
    byDay: [
      { day: '2026-10-01', seconds: 3600, bySurface: { LESSON: 2400, FLASHCARDS: 1200 } },
      { day: '2026-10-03', seconds: 1800, bySurface: { LESSON: 600, FLASHCARDS: 600, EXIT_QUIZ: 600 } },
    ],
  }
  m.flashcards = {
    ...m.flashcards,
    reviews: 40, newCards: 10, totalSeconds: 300, timedReviews: 30, avgSecondsPerCard: 10,
    ratings: { AGAIN: 8, HARD: 4, GOOD: 20, EASY: 8 },
    ratingShares: { AGAIN: 0.2, HARD: 0.1, GOOD: 0.5, EASY: 0.2 },
    matureReviews: 10, retention: 0.9, overdue: 12,
  }
  m.questions = {
    total: { answered: 30, correct: 21 },
    bySource: {
      ...m.questions.bySource,
      ENTRANCE: { answered: 10, correct: 6 },
      EXIT: { answered: 20, correct: 15 },
    },
  }
  m.weakAreas = [
    { kind: 'topic', key: 'mcat-amino-acids', answered: 10, correct: 5, accuracy: 0.5 },
    { kind: 'topic', key: 'mcat-enzyme-kinetics', answered: 6, correct: 4, accuracy: 4 / 6 },
  ]
  m.lessons = [
    {
      topicSlug: 'mcat-amino-acids', title: 'Amino Acids', courseSlug: 'mcat-prep', status: 'COMPLETED',
      timeSeconds: 1500, lastAccessed: '2026-10-03T12:00:00.000Z', clearedByExit: true,
    },
  ]
  m.exitQuizzes = { attempts: 3, passes: 2, topicsCleared: 2 }
  m.weekly = {
    since: '2026-09-28T15:00:00.000Z', activeSeconds: 5400, activeDays: 2, topicsCleared: 2,
    target: { courseSlug: 'mcat-prep', label: 'MCAT', hours: 16, topics: 5 },
  }
  m.mcat = {
    trend: [
      { at: '2026-09-30T12:00:00.000Z', kind: 'diagnostic', total: 498, sections: { 'C/P': 124, CARS: 125, 'B/B': 124, 'P/S': 125 } },
      { at: '2026-10-04T12:00:00.000Z', kind: 'full-length', total: 505, sections: { 'C/P': 126, CARS: 126, 'B/B': 126, 'P/S': 127 } },
    ],
    pacing: [
      { at: '2026-10-04T12:00:00.000Z', kind: 'full-length', label: 'C/P', secondsPerQuestion: 110 },
      { at: '2026-10-04T12:00:00.000Z', kind: 'full-length', label: 'CARS', secondsPerQuestion: 90 },
    ],
    examPace: 95,
  }
  return m
}

const json = (status: number, body: unknown) =>
  Promise.resolve(new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } }))

function stubMetrics(metrics: StudentMetrics) {
  const spy = vi.fn((url: string) => {
    void url
    return json(200, {
      student: { id: 's1', name: 'Ada Lovelace', email: 'ada@example.com' },
      classroom: { id: 'c1', name: 'MCAT Fall' },
      metrics,
    })
  })
  vi.stubGlobal('fetch', spy)
  return spy
}

beforeEach(() => {
  searchParams = new URLSearchParams()
  replace.mockReset()
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('student study report page', () => {
  it('renders every section from the metrics payload', async () => {
    const spy = stubMetrics(fullMetrics())
    render(<StudentStudyReportPage />)

    expect(await screen.findByRole('heading', { level: 1, name: 'Ada Lovelace' })).toBeInTheDocument()
    expect(spy.mock.calls[0][0]).toBe('/api/teacher/classrooms/c1/students/s1/metrics?range=7d&scope=all')
    expect(screen.getByText(/Back to MCAT Fall/)).toHaveAttribute('href', '/teacher/classroom/c1')

    for (const h of ['This week vs target', 'Active time', 'Flashcards', 'Lessons & questions', 'MCAT']) {
      expect(screen.getByRole('heading', { level: 2, name: h })).toBeInTheDocument()
    }
    // This week vs target
    expect(screen.getByText('of 16 h target')).toBeInTheDocument()
    expect(screen.getByText('2 of 7')).toBeInTheDocument()
    // Active time: total + legend with human surface names
    expect(screen.getByText('1h 30m')).toBeInTheDocument()
    expect(screen.getAllByText('Lessons').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Exit quizzes').length).toBeGreaterThan(0)
    // Flashcards: partial timing disclosed, ratings with counts and shares, retention
    expect(screen.getByText('time measured on 30 of 40 reviews')).toBeInTheDocument()
    expect(screen.getAllByText('8 · 20%')).toHaveLength(2) // Again and Easy
    expect(screen.getByText('20 · 50%')).toBeInTheDocument()
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.queryByRole('alert')).toBeNull()
    // Questions by source: zero rows hidden
    const lessons = screen.getByRole('heading', { level: 2, name: 'Lessons & questions' }).closest('section')!
    expect(within(lessons).getByText('Entrance quiz')).toBeInTheDocument()
    expect(within(lessons).getByText('Exit quiz')).toBeInTheDocument()
    expect(within(lessons).queryByText('Daily question')).toBeNull()
    expect(within(lessons).getByText('All sources')).toBeInTheDocument()
    // Weak areas: slug → lesson title when known, else un-slugged
    expect(within(lessons).getAllByText('Amino Acids').length).toBe(2)
    expect(within(lessons).getByText('Mcat enzyme kinetics')).toBeInTheDocument()
    expect(within(lessons).getByText('Cleared by exit quiz')).toBeInTheDocument()
    // MCAT: trend table and pacing
    const mcat = screen.getByRole('heading', { level: 2, name: 'MCAT' }).closest('section')!
    expect(within(mcat).getAllByText('505').length).toBeGreaterThan(0)
    expect(within(mcat).getByText('Exam pace 95 s')).toBeInTheDocument()
    expect(within(mcat).getAllByText('Full-length').length).toBeGreaterThan(0)
  })

  it('hides the MCAT section when the student has no MCAT data', async () => {
    const m = fullMetrics()
    m.mcat = null
    stubMetrics(m)
    render(<StudentStudyReportPage />)
    await screen.findByRole('heading', { level: 2, name: 'Flashcards' })
    expect(screen.queryByRole('heading', { level: 2, name: 'MCAT' })).toBeNull()
  })

  it('warns when the student is rushing through flashcards', async () => {
    const m = fullMetrics()
    m.flashcards.rushing = true
    stubMetrics(m)
    render(<StudentStudyReportPage />)
    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('Rating cards in under 2 s on average — may be tapping through')
  })

  it('says tracking just began instead of showing failing zeros', async () => {
    stubMetrics(emptyMetrics())
    render(<StudentStudyReportPage />)
    await screen.findByRole('heading', { level: 2, name: 'Active time' })
    // week, active time, flashcards, questions
    expect(screen.getAllByText('No data yet — tracking began Sept 29, 2026.')).toHaveLength(4)
    expect(screen.queryByText('0m')).toBeNull()
    expect(screen.queryByRole('heading', { level: 2, name: 'MCAT' })).toBeNull()
  })

  it('reads range and scope from the URL and writes changes back to it', async () => {
    searchParams = new URLSearchParams('range=30d&scope=class')
    const spy = stubMetrics(fullMetrics())
    render(<StudentStudyReportPage />)
    await screen.findByRole('heading', { level: 1, name: 'Ada Lovelace' })
    expect(spy.mock.calls[0][0]).toBe('/api/teacher/classrooms/c1/students/s1/metrics?range=30d&scope=class')
    expect(screen.getByText(/carry no class stamp/)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'All time' }))
    expect(replace).toHaveBeenCalledWith('/teacher/classroom/c1/student/s1?range=all&scope=class', { scroll: false })
    fireEvent.click(screen.getByRole('button', { name: 'All study' }))
    expect(replace).toHaveBeenLastCalledWith('/teacher/classroom/c1/student/s1?range=30d', { scroll: false })
  })
})

describe('class engagement activity table', () => {
  const activity = (range: string, scope: string) => ({
    range,
    scope,
    target: { courseSlug: 'mcat-prep', label: 'MCAT', hours: 16, topics: 5 },
    students: [
      {
        id: 's1', userId: 's1', name: 'Ada Lovelace', email: 'ada@example.com',
        activeSeconds: 7200, activeDays: 3, reviews: 120, flashcardSeconds: 1200, againRate: 0.25,
        answered: 40, correct: 30, accuracy: 0.75, exitPasses: 2, overdue: 140, flags: ['rushing', 'backlog'],
      },
      {
        id: 's2', userId: 's2', name: 'Blaise Pascal', email: 'bp@example.com',
        activeSeconds: 0, activeDays: 0, reviews: 0, flashcardSeconds: 0, againRate: null,
        answered: 0, correct: 0, accuracy: null, exitPasses: 0, overdue: 0, flags: ['below-target', 'inactive'],
      },
    ],
  })

  function stubClass() {
    const spy = vi.fn((url: string) => {
      if (url.includes('/activity?')) {
        const u = new URL(url, 'http://x')
        return json(200, activity(u.searchParams.get('range')!, u.searchParams.get('scope')!))
      }
      return json(200, { students: [], sessions: [], flashcards: [], flashcardDayKeys: [] })
    })
    vi.stubGlobal('fetch', spy)
    return spy
  }

  it('renders a row per student with flags, report links and the CSV export for the current filters', async () => {
    const spy = stubClass()
    render(<ClassEngagement classroomId="c1" />)

    const ada = await screen.findByRole('link', { name: 'Ada Lovelace' })
    expect(ada).toHaveAttribute('href', '/teacher/classroom/c1/student/s1')
    const row = ada.closest('tr')!
    expect(within(row).getByText('2.0h')).toBeInTheDocument()
    expect(within(row).getByText('25%')).toBeInTheDocument()
    expect(within(row).getByText('75%')).toBeInTheDocument()
    expect(within(row).getByText('Rushing')).toBeInTheDocument()
    expect(within(row).getByText('Backlog')).toBeInTheDocument()
    const blaise = screen.getByRole('link', { name: 'Blaise Pascal' }).closest('tr')!
    expect(within(blaise).getByText('Below target')).toBeInTheDocument()
    expect(within(blaise).getByText('Inactive')).toBeInTheDocument()

    const csv = screen.getByRole('link', { name: /Export activity CSV/ })
    expect(csv).toHaveAttribute('href', '/api/teacher/classrooms/c1/activity?range=7d&scope=all&format=csv')
    expect(spy).toHaveBeenCalledWith('/api/teacher/classrooms/c1/activity?range=7d&scope=all', { cache: 'no-store' })

    fireEvent.click(screen.getByRole('button', { name: 'Last 30 days' }))
    fireEvent.click(screen.getByRole('button', { name: 'This class only' }))
    await waitFor(() =>
      expect(spy).toHaveBeenCalledWith('/api/teacher/classrooms/c1/activity?range=30d&scope=class', { cache: 'no-store' }),
    )
    expect(screen.getByRole('link', { name: /Export activity CSV/ })).toHaveAttribute(
      'href',
      '/api/teacher/classrooms/c1/activity?range=30d&scope=class&format=csv',
    )
    expect(screen.getByRole('link', { name: 'Ada Lovelace' })).toHaveAttribute(
      'href',
      '/teacher/classroom/c1/student/s1?range=30d&scope=class',
    )
  })
})
