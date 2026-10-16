/**
 * "Make a flashcard" on an attempt review files the card into the attempt's
 * DB course deck. AttemptReview's own map covered only mcat/sat/act, so every
 * AP review passed courseSlug undefined and the card landed in "No course".
 * The review API now sends `flashcardCourseSlug` (src/lib/review-flashcard-course.ts).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { reviewFlashcardCourse } from '@/lib/review-flashcard-course'
import { AP_PRACTICE_EXAMS } from '@/lib/ap-practice-exams'
import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'

const mockAuth = vi.fn()
const mockResolve = vi.fn()
const mockCourses = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/teacher-auth', () => ({ requireStudentInClassroom: vi.fn() }))
vi.mock('@/lib/question-resolver', () => ({
  isReviewKind: () => true,
  resolveAttempt: (...a: unknown[]) => mockResolve(...a),
}))
vi.mock('@/lib/study-tracking', () => ({ courseSlugsForTopics: (...a: unknown[]) => mockCourses(...a) }))

const exitAttempt = (topicSlug: string) => ({
  kind: 'exit', id: 'e1', course: 'other', items: [{ topicSlug }, null, { topicSlug }],
})

describe('reviewFlashcardCourse', () => {
  it('keeps the test-prep decks', () => {
    expect(reviewFlashcardCourse({ kind: 'sat-practice', course: 'sat', items: [] })).toBe('sat-prep')
    expect(reviewFlashcardCourse({ kind: 'exit', course: 'mcat', items: [] })).toBe('mcat-prep')
    expect(reviewFlashcardCourse({ kind: 'act-fl', course: 'act', items: [] })).toBe('act-prep')
  })

  it('files an AP exit quiz under the course that owns its topic', () => {
    expect(reviewFlashcardCourse(exitAttempt('stoichiometry'), new Map([['stoichiometry', 'ap-chemistry']]))).toBe('ap-chemistry')
    // A course-level quiz slug is its own course.
    expect(reviewFlashcardCourse(exitAttempt('ap-chemistry'))).toBe('ap-chemistry')
    // Unknown topic: no deck rather than a wrong one.
    expect(reviewFlashcardCourse(exitAttempt('mystery-topic'))).toBeUndefined()
  })

  it('files every AP practice exam under its DB course', () => {
    const dbSlugs = new Set(CLASS_PLAN_COURSES.map((c) => c.courseSlug))
    for (const [key, exam] of Object.entries(AP_PRACTICE_EXAMS)) {
      // The resolver sets course = exam.courseSlug for 'ap-practice' attempts.
      expect(dbSlugs.has(exam.courseSlug), key).toBe(true)
      expect(reviewFlashcardCourse({ kind: 'ap-practice', course: exam.courseSlug, items: [] }), key).toBe(exam.courseSlug)
    }
  })
})

describe('GET /api/review/<kind>/<id> sends the deck', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockAuth.mockResolvedValue({ user: { id: 'stu-1' } })
  })

  const get = async (kind: string) => {
    const { GET } = await import('@/app/api/review/[kind]/[id]/route')
    const res = await GET(new Request(`http://localhost/api/review/${kind}/e1`), { params: Promise.resolve({ kind, id: 'e1' }) })
    return (await res.json()).attempt
  }

  it('resolves an AP exit quiz topic to its course', async () => {
    mockResolve.mockResolvedValue(exitAttempt('stoichiometry'))
    mockCourses.mockResolvedValue(new Map([['stoichiometry', 'ap-chemistry']]))
    const attempt = await get('exit')
    expect(mockCourses).toHaveBeenCalledWith(['stoichiometry'])
    expect(attempt.flashcardCourseSlug).toBe('ap-chemistry')
  })

  it('needs no topic lookup for an AP practice exam or a test-prep attempt', async () => {
    mockResolve.mockResolvedValueOnce({ kind: 'ap-practice', id: 'e1', course: 'ap-biology', items: [] })
    expect((await get('ap-practice')).flashcardCourseSlug).toBe('ap-biology')
    mockResolve.mockResolvedValueOnce({ kind: 'diagnostic', id: 'e1', course: 'sat', items: [] })
    expect((await get('diagnostic')).flashcardCourseSlug).toBe('sat-prep')
    expect(mockCourses).not.toHaveBeenCalled()
  })
})
