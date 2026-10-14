/**
 * AP full-length practice exams are saved, graded on the server, and reviewable
 * (Phase 1, owner 2026-10-14). Uses the real AP Chemistry exam data.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { config as chem } from '@/data/ap-chem-practice/config'
import { gradeApExam, frqPossible } from '@/lib/ap-practice-grading'
import { shuffleOptions } from '@/lib/shuffle-options'
import type { MCQItem } from '@/components/FullLengthPracticeExam'

const mcqSection = chem.sections.findIndex((s) => s.items.some((i) => i.type === 'mcq'))
const mcqs = chem.sections[mcqSection].items as MCQItem[]
const shown = (item: MCQItem) => shuffleOptions(item.options, item.correctAnswer, `${chem.subject}|${item.question}`)

describe('gradeApExam', () => {
  it('grades multiple choice from the option text, in the order the student saw it', () => {
    const right = shown(mcqs[0])
    const wrong = shown(mcqs[1])
    const g = gradeApExam(chem, [
      { s: mcqSection, i: 0, chosen: right.options[right.correctIndex] },
      { s: mcqSection, i: 1, chosen: wrong.options[(wrong.correctIndex + 1) % wrong.options.length] },
      { s: mcqSection, i: 2, chosen: 'not one of the options' },
    ], [])
    expect(g.mcq).toEqual({ correct: 1, total: mcqs.length })
    expect(g.review.answers.slice(0, 3)).toEqual([right.correctIndex, (wrong.correctIndex + 1) % wrong.options.length, null])
    expect(g.review.questions[0].options).toEqual(right.options)
  })

  it('caps self-graded free response at each rubric\'s points', () => {
    const frqSection = chem.sections.findIndex((s) => s.items.some((i) => i.type !== 'mcq'))
    const item = chem.sections[frqSection].items[0]
    const max = frqPossible(item)
    expect(max).toBeGreaterThan(0)
    const g = gradeApExam(chem, [], [{ s: frqSection, i: 0, earned: max + 50 }])
    expect(g.earned).toBe(max)
    const none = gradeApExam(chem, [], [{ s: frqSection, i: 0, earned: -3 }])
    expect(none.earned).toBe(0)
  })

  it('a perfect exam is a 5 and an empty one a 1 on the shared scale', () => {
    const allRight = chem.sections.flatMap((sec, s) => sec.items.map((item, i) => {
      if (item.type !== 'mcq') return null
      const o = shown(item)
      return { s, i, chosen: o.options[o.correctIndex] }
    })).filter(Boolean)
    const frqFull = chem.sections.flatMap((sec, s) => sec.items.map((item, i) => (item.type === 'mcq' ? null : { s, i, earned: frqPossible(item) }))).filter(Boolean)
    expect(gradeApExam(chem, allRight, frqFull)).toMatchObject({ percentage: 100, estimatedAPScore: 5 })
    expect(gradeApExam(chem, [], [])).toMatchObject({ percentage: 0, estimatedAPScore: 1 })
  })
})

// ── Submit route ────────────────────────────────────────────────────────
const mockAuth = vi.fn()
const created: { category: string; results: Record<string, unknown> }[] = []
const mockRecord = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/content-store', () => ({ getPracticeExamConfig: async (_k: string, c: unknown) => c }))
vi.mock('@/lib/study-tracking', () => ({ recordQuestions: (...a: unknown[]) => mockRecord(...a) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    diagnosticTest: {
      findFirst: vi.fn(async () => null),
      create: vi.fn(async ({ data }: { data: { category: string; results: Record<string, unknown> } }) => {
        created.push(data)
        return { id: 'att1' }
      }),
    },
  },
}))

const { POST } = await import('@/app/api/ap-practice/submit/route')
const post = (body: unknown) => POST(new Request('http://localhost/x', { method: 'POST', body: JSON.stringify(body) }))

describe('POST /api/ap-practice/submit', () => {
  beforeEach(() => {
    created.length = 0
    mockRecord.mockReset()
    mockAuth.mockResolvedValue({ user: { id: 'stu' } })
  })

  it('asks a signed-out visitor to sign in, and refuses unknown exams or empty attempts', async () => {
    mockAuth.mockResolvedValueOnce(null)
    expect((await post({ examKey: 'ap-chem' })).status).toBe(401)
    expect((await post({ examKey: 'not-an-exam' })).status).toBe(400)
    expect((await post({ examKey: 'ap-chem', mcq: [], frq: [] })).status).toBe(400)
  })

  it('stores a reviewable attempt and logs each multiple-choice answer', async () => {
    const o = shown(mcqs[0])
    const res = await post({ examKey: 'ap-chem', clientAttemptId: 'ap-test-12345', mcq: [{ s: mcqSection, i: 0, chosen: o.options[o.correctIndex] }], frq: [] })
    expect(res.status).toBe(200)
    expect(created[0].category).toBe('ap-practice-exam:ap-chem')
    expect(created[0].results).toMatchObject({ subject: 'AP Chemistry', courseSlug: 'ap-chemistry', clientAttemptId: 'ap-test-12345' })
    const review = created[0].results.review as { questions: unknown[]; answers: (number | null)[] }
    expect(review.questions).toHaveLength(mcqs.length)
    expect(review.answers[0]).toBe(o.correctIndex)
    const rows = mockRecord.mock.calls[0][1] as { attemptKind: string; attemptId: string; correct: number }[]
    expect(rows).toHaveLength(mcqs.length)
    expect(rows[0]).toMatchObject({ attemptKind: 'ap-practice', attemptId: 'att1', correct: 1 })
  })
})
