// @vitest-environment jsdom
/**
 * The course hub shows an AP track student their track with one line of
 * explanation (src/lib/ap-track.ts), from the generic plan-status payload;
 * the teacher's class plan lets them pin a track per student.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import type { ReactNode } from 'react'

vi.mock('next-auth/react', () => ({ useSession: () => ({ status: 'authenticated', data: null }) }))
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

import { fireEvent, waitFor } from '@testing-library/react'
import CourseStudyPlan from '@/components/CourseStudyPlan'
import ClassPlan from '@/components/ClassPlan'
import ExitQuiz from '@/components/ExitQuiz'

const payload = (apTrack: unknown) => ({
  plans: [{
    courseKey: 'ap-chem',
    canRetakeDiagnostic: true,
    requiredScorePercent: 80,
    topics: [{ slug: 'ideal-gas-law', name: 'Ideal Gas Law', priority: 'high', topicPath: '/topics/ideal-gas-law', isSatisfied: false }],
    apTrack,
  }],
})
const mockFetch = (body: unknown) =>
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, json: async () => body }) as unknown as Response))

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('CourseStudyPlan — AP track line', () => {
  it('shows the track and its one-line explanation on the plan', async () => {
    mockFetch(payload({
      track: 'five',
      label: '5-track',
      explanation: 'Your last diagnostic estimated a 5, so your exit quizzes lean toward medium and hard questions and your plan starts with the units the exam weights most. The pass mark is still 80%.',
    }))
    render(<CourseStudyPlan courseKey="ap-chem" />)
    expect(await screen.findByText('5-track')).toBeInTheDocument()
    expect(screen.getByText(/lean toward medium and hard questions/)).toBeInTheDocument()
  })

  it('shows nothing for a course without tracks', async () => {
    mockFetch(payload(null))
    render(<CourseStudyPlan courseKey="ap-chem" />)
    expect(await screen.findByText('Next topic: Ideal Gas Law')).toBeInTheDocument()
    expect(screen.queryByText(/track/i)).toBeNull()
  })

  it('tells a pinned student their teacher set the track', async () => {
    mockFetch(payload({
      track: 'foundation',
      label: 'Foundation track',
      explanation: 'Your teacher set your track to Foundation, so your exit quizzes lean toward easy and medium questions and your plan starts with the earliest units. The pass mark is still 80%.',
    }))
    render(<CourseStudyPlan courseKey="ap-chem" />)
    expect(await screen.findByText('Foundation track')).toBeInTheDocument()
    expect(screen.getByText(/Your teacher set your track to Foundation/)).toBeInTheDocument()
  })
})

describe('ClassPlan — AP track select', () => {
  const plan = (students: unknown[]) => ({
    course: { key: 'ap-chem', label: 'AP Chemistry', gated: false, courseSlug: 'ap-chemistry' },
    classTopics: [],
    students,
    studentsWithAttempts: 2,
    totalStudents: 2,
  })
  const roster = [
    { userId: 'a', name: 'Ann', takenAt: '2026-10-10T12:00:00Z', stale: false, scoreLabel: '4', recommendedCount: 3, pendingCount: 1, canRetake: false,
      apTrack: { track: 'five', label: '5-track', source: 'diagnostic', override: null } },
    { userId: 'b', name: 'Ben', takenAt: null, stale: false, scoreLabel: null, recommendedCount: 0, pendingCount: 0, canRetake: true,
      apTrack: { track: 'foundation', label: 'Foundation track', source: 'teacher', override: 'foundation' } },
  ]
  const routeFetch = (calls: { url: string; init?: RequestInit }[]) =>
    vi.stubGlobal('fetch', vi.fn(async (url: string, init?: RequestInit) => {
      calls.push({ url, init })
      if (url.endsWith('/class-plan')) return { ok: true, json: async () => ({ availableCourses: [{ key: 'ap-chem', label: 'AP Chemistry', gated: false, studentsWithAttempts: 2 }], totalStudents: 2 }) } as unknown as Response
      if (url.includes('/class-plan?course=')) return { ok: true, json: async () => plan(roster) } as unknown as Response
      if (url.includes('/ap-track')) return { ok: true, json: async () => ({ ok: true }) } as unknown as Response
      return { ok: false, json: async () => ({}) } as unknown as Response
    }))

  it('shows the effective track as a select (Auto names the diagnostic placement) and PATCHes a pin', async () => {
    const calls: { url: string; init?: RequestInit }[] = []
    routeFetch(calls)
    render(<ClassPlan classroomId="c1" />)
    const ann = (await screen.findByLabelText('Track for Ann')) as HTMLSelectElement
    expect(ann.value).toBe('auto')
    expect(ann.options[ann.selectedIndex].textContent).toBe('Auto (5-track)')
    const ben = screen.getByLabelText('Track for Ben') as HTMLSelectElement
    expect(ben.value).toBe('foundation')
    expect(ben.options[0].textContent).toBe('Auto')

    fireEvent.change(ann, { target: { value: 'foundation' } })
    await waitFor(() => expect(calls.some((c) => c.url.includes('/ap-track'))).toBe(true))
    const patch = calls.find((c) => c.url.includes('/ap-track'))!
    expect(patch.url).toBe('/api/teacher/classrooms/c1/students/a/ap-track')
    expect(patch.init?.method).toBe('PATCH')
    expect(JSON.parse(String(patch.init?.body))).toEqual({ courseSlug: 'ap-chemistry', track: 'foundation' })

    fireEvent.change(ben, { target: { value: 'auto' } })
    await waitFor(() => expect(calls.filter((c) => c.url.includes('/ap-track')).length).toBe(2))
    expect(JSON.parse(String(calls.filter((c) => c.url.includes('/ap-track'))[1].init?.body))).toEqual({ courseSlug: 'ap-chemistry', track: null })
    // The roster is re-read after each change.
    await waitFor(() => expect(calls.filter((c) => c.url.includes('/class-plan?course=')).length).toBeGreaterThanOrEqual(3))
  })
})

describe('ExitQuiz — the server refuses a stale track mix', () => {
  const QUESTIONS = Array.from({ length: 3 }, (_, i) => ({
    id: `q${i}`, question: `Question ${i}?`, options: [`right ${i}`, `wrong ${i}`], correctIndex: 0, explanation: `Because ${i}.`, category: 'Cat',
  }))
  const finish = () => {
    QUESTIONS.forEach((q, i) => {
      fireEvent.click(screen.getByText(q.options[0]))
      fireEvent.click(screen.getByText('Confirm Answer'))
      fireEvent.click(screen.getByText(i < QUESTIONS.length - 1 ? 'Next Question →' : 'See Results'))
    })
  }
  const submitWith = (status: number, body: unknown) =>
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      if (url.startsWith('/api/exit-quiz/submit')) return { ok: status < 400, status, json: async () => body } as unknown as Response
      return { ok: true, status: 200, json: async () => ({ plans: [] }) } as unknown as Response
    }))
  const renderQuiz = (onTrackMixRejected?: () => void) => {
    const onComplete = vi.fn()
    render(
      <ExitQuiz topicSlug="collisions" topicTitle="Collisions" courseSlug="ap-physics-1" questions={QUESTIONS}
        seed={7} difficulty="foundation-mix" onComplete={onComplete} onCancel={() => {}} previousAttempts={0} lastScore={null} mustRedoUnit={false}
        onRetake={() => {}} onTrackMixRejected={onTrackMixRejected} />,
    )
    return onComplete
  }

  it('409 TRACK_MIX_MISMATCH: tells the student, hides the results, and hands the lesson the redraw', async () => {
    submitWith(409, { error: 'reload', code: 'TRACK_MIX_MISMATCH', track: 'five', expectedMix: 'five-mix' })
    const onTrackMixRejected = vi.fn()
    const onComplete = renderQuiz(onTrackMixRejected)
    finish()
    expect(await screen.findByText('Your track changed')).toBeInTheDocument()
    expect(screen.getByText(/was not counted/)).toBeInTheDocument()
    expect(screen.queryByText(/Quiz Passed/)).toBeNull()
    expect(screen.queryByText(/Retake Quiz/)).toBeNull()
    expect(onTrackMixRejected).toHaveBeenCalledTimes(1)
    expect(onComplete).not.toHaveBeenCalled()
    const body = JSON.parse(String((fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1].body))
    expect(body).toMatchObject({ topicSlug: 'collisions', seed: 7, difficulty: 'foundation-mix' })
  })

  it('a successful submit still shows the results screen', async () => {
    submitWith(200, { ok: true, attemptId: 'att-1' })
    const onTrackMixRejected = vi.fn()
    renderQuiz(onTrackMixRejected)
    finish()
    expect(await screen.findByText('Quiz Passed!')).toBeInTheDocument()
    expect(onTrackMixRejected).not.toHaveBeenCalled()
  })

  it('any other failure leaves the results screen alone (no redraw)', async () => {
    submitWith(500, { error: 'Internal server error' })
    const onTrackMixRejected = vi.fn()
    renderQuiz(onTrackMixRejected)
    finish()
    expect(await screen.findByText('Quiz Passed!')).toBeInTheDocument()
    expect(onTrackMixRejected).not.toHaveBeenCalled()
  })
})
