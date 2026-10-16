/**
 * More than one full-length practice-exam form per AP course (Phase 2 gap 5b).
 *
 * Attempt identity: every form keeps the course's category
 * 'ap-practice-exam:<key>' and stores its form number in results.form, so the
 * review resolver, the teacher's Tests to review and the score predictor read
 * all forms unchanged. A throwaway form 2 (a copy of AP Chemistry form 1 with
 * a different key on its first question) is registered for these tests only.
 */
import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest'
import { config as chem } from '@/data/ap-chem-practice/config'
import type { FullLengthExamConfig, MCQItem } from '@/components/FullLengthPracticeExam'
import { shuffleOptions } from '@/lib/shuffle-options'
import {
  AP_PRACTICE_EXAMS,
  apPracticeAttemptTitle,
  apPracticeForm,
  apPracticeFormFromHash,
  apPracticeFormHref,
  apPracticeFormList,
  apPracticeFormOf,
  apPracticeForms,
  apPracticeSittingId,
  summarizeApPracticeAttempts,
} from '@/lib/ap-practice-exams'
import { apExamTools, apProgressKey, buildStages, examSignature, peekApExamProgress } from '@/lib/ap-practice-runner'
import { apPredictorArgs } from '@/lib/score-predictor-utils'

// ── A throwaway form 2 for AP Chemistry ─────────────────────────────────
const form2: FullLengthExamConfig = JSON.parse(JSON.stringify(chem))
const mcqSection = form2.sections.findIndex((s) => s.items.some((i) => i.type === 'mcq'))
const f2First = form2.sections[mcqSection].items[0] as MCQItem
f2First.question = `${f2First.question} (form 2)`
f2First.correctAnswer = (f2First.correctAnswer + 1) % f2First.options.length

const original = AP_PRACTICE_EXAMS['ap-chem']
AP_PRACTICE_EXAMS['ap-chem'] = { ...original, moreForms: [async () => form2] }
afterAll(() => {
  AP_PRACTICE_EXAMS['ap-chem'] = original
})

const shown = (cfg: FullLengthExamConfig, item: MCQItem) => shuffleOptions(item.options, item.correctAnswer, `${cfg.subject}|${item.question}`)

// ── Mocks: auth, answer log, one in-memory DB ───────────────────────────
const mockAuth = vi.fn()
const created: { category: string; results: Record<string, unknown> }[] = []
const stored: { category: string; results: unknown } = { category: 'ap-practice-exam:ap-chem', results: null }
const contentReads: { courseSlug: string; key: string }[] = []
const historyRows: { id: string; category: string; results: unknown; createdAt: Date }[] = []
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/study-tracking', () => ({ recordQuestions: vi.fn() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    contentItem: {
      findUnique: vi.fn(async ({ where }: { where: { type_courseSlug_key: { courseSlug: string; key: string } } }) => {
        contentReads.push(where.type_courseSlug_key)
        return null
      }),
    },
    diagnosticTest: {
      findFirst: vi.fn(async ({ where }: { where: { id?: string } }) =>
        where.id ? { category: stored.category, results: stored.results, createdAt: new Date('2026-10-16T12:00:00Z') } : null,
      ),
      findMany: vi.fn(async () => historyRows),
      create: vi.fn(async ({ data }: { data: { category: string; results: Record<string, unknown> } }) => {
        created.push(data)
        return { id: `att${created.length}` }
      }),
    },
    satTestAttempt: { findMany: vi.fn(async () => []) },
    mcatUnitTest: { findMany: vi.fn(async () => []) },
    questionActivity: { findMany: vi.fn(async () => []) },
    topic: { findMany: vi.fn(async () => []) },
  },
}))

const { POST } = await import('@/app/api/ap-practice/submit/route')
const { GET: getHistory } = await import('@/app/api/ap-practice/history/route')
const { GET: getForm } = await import('@/app/api/ap-practice/form/route')
const { resolveAttempt } = await import('@/lib/question-resolver')
const { listReviewableAttempts } = await import('@/lib/teacher-review-attempts')
const { PRACTICE_EXAM_KEY } = await import('@/lib/content-store')

const post = (body: unknown) => POST(new Request('http://localhost/x', { method: 'POST', body: JSON.stringify(body) }))

beforeEach(() => {
  created.length = 0
  contentReads.length = 0
  historyRows.length = 0
  mockAuth.mockResolvedValue({ user: { id: 'stu' } })
})

describe('form registry', () => {
  it('form 1 is the current config under the original content key; later forms are exam-N', () => {
    expect(PRACTICE_EXAM_KEY).toBe('exam')
    const forms = apPracticeForms('ap-chem')
    expect(forms.map((f) => [f.form, f.contentKey, f.label])).toEqual([[1, 'exam', 'Form 1'], [2, 'exam-2', 'Form 2']])
    expect(apPracticeFormList('ap-chem')).toEqual([{ form: 1, label: 'Form 1' }, { form: 2, label: 'Form 2' }])
    expect(apPracticeForms('ap-bio')).toHaveLength(1)
    expect(apPracticeForm('ap-bio', 2)).toBeUndefined()
    expect(apPracticeForm('ap-chem', 0)).toBeUndefined()
    expect(apPracticeForms('not-an-exam')).toEqual([])
  })

  it('attempts saved before forms existed are form 1', () => {
    expect(apPracticeFormOf({ examKey: 'ap-chem' })).toBe(1)
    expect(apPracticeFormOf({ form: 2 })).toBe(2)
    expect(apPracticeFormOf({ form: 9 })).toBe(1)
    expect(apPracticeFormOf(null)).toBe(1)
  })

  it('the score predictor reads one category for every form', () => {
    expect(apPredictorArgs('ap-chem').practiceExamCategory).toBe('ap-practice-exam:ap-chem')
  })
})

describe('POST /api/ap-practice/submit with forms', () => {
  it('grades a form-2 attempt against form 2, read from its own content row', async () => {
    const f1First = chem.sections[mcqSection].items[0] as MCQItem
    const right2 = shown(form2, f2First)
    const res = await post({ examKey: 'ap-chem', form: 2, mcq: [{ s: mcqSection, i: 0, chosen: right2.options[right2.correctIndex] }], frq: [] })
    expect(res.status).toBe(200)
    expect(contentReads).toEqual([{ type: 'practice-exam', courseSlug: 'ap-chem', key: 'exam-2' }])
    expect(created[0].category).toBe('ap-practice-exam:ap-chem')
    expect(created[0].results).toMatchObject({ examKey: 'ap-chem', form: 2, courseSlug: 'ap-chemistry' })
    expect((created[0].results.mcq as { correct: number }).correct).toBe(1)
    const review = created[0].results.review as { questions: { question: string }[] }
    expect(review.questions[0].question).toBe(f2First.question)

    // The form-1 key is wrong on form 2.
    const right1 = shown(chem, f1First)
    await post({ examKey: 'ap-chem', form: 2, mcq: [{ s: mcqSection, i: 0, chosen: right1.options[right1.correctIndex] }], frq: [] })
    expect((created[1].results.mcq as { correct: number }).correct).toBe(0)
  })

  it('form 1 stays as before (key "exam", same category), and unknown forms are refused', async () => {
    const right = shown(chem, chem.sections[mcqSection].items[0] as MCQItem)
    const res = await post({ examKey: 'ap-chem', mcq: [{ s: mcqSection, i: 0, chosen: right.options[right.correctIndex] }], frq: [] })
    expect(res.status).toBe(200)
    expect(contentReads[0].key).toBe('exam')
    expect(created[0]).toMatchObject({ category: 'ap-practice-exam:ap-chem', results: { form: 1 } })
    expect((await post({ examKey: 'ap-chem', form: 3, mcq: [], frq: [] })).status).toBe(400)
    expect((await post({ examKey: 'ap-bio', form: 2, mcq: [], frq: [] })).status).toBe(400)
  })
})

describe('reviewing and listing a form-2 attempt', () => {
  it('the review resolver names the form and links back to it', async () => {
    const right2 = shown(form2, f2First)
    await post({ examKey: 'ap-chem', form: 2, mcq: [{ s: mcqSection, i: 0, chosen: right2.options[right2.correctIndex] }], frq: [] })
    stored.results = JSON.parse(JSON.stringify(created[0].results))
    const a = await resolveAttempt('ap-practice', 'att1', 'stu')
    expect(a).not.toBeNull()
    expect(a!.title).toBe('AP Chemistry practice exam · Form 2')
    expect(a!.backHref).toBe('/ap-chem-practice#form-2')
    expect(a!.course).toBe('ap-chemistry')
    expect(a!.items[0]!.question).toBe(f2First.question)
    expect(a!.items[0]!.chosenIndex).toBe(a!.items[0]!.correctIndex)
  })

  it("the teacher's Tests to review lists both forms", async () => {
    historyRows.push(
      { id: 'f2', category: 'ap-practice-exam:ap-chem', results: { subject: 'AP Chemistry', form: 2, estimatedAPScore: 4, percentage: 70 }, createdAt: new Date('2026-10-16') },
      { id: 'f1', category: 'ap-practice-exam:ap-chem', results: { subject: 'AP Chemistry', estimatedAPScore: 3, percentage: 55 }, createdAt: new Date('2026-10-10') },
    )
    const list = await listReviewableAttempts('stu', 'cls')
    expect(list.map((x) => [x.kind, x.id, x.title, x.score])).toEqual([
      ['ap-practice', 'f2', 'AP Chemistry practice exam · Form 2', '4/5 · 70%'],
      ['ap-practice', 'f1', 'AP Chemistry practice exam · Form 1', '3/5 · 55%'],
    ])
  })

  it('a course with one form keeps its old title', () => {
    expect(apPracticeAttemptTitle('ap-practice-exam:ap-bio', { subject: 'AP Biology' })).toBe('AP Biology practice exam')
    expect(apPracticeFormHref('/ap-bio-practice', 1)).toBe('/ap-bio-practice')
  })
})

describe('form picker data', () => {
  it('history groups saved attempts by form, legacy attempts under form 1', async () => {
    historyRows.push(
      { id: 'c', category: 'ap-practice-exam:ap-chem', results: { form: 2, estimatedAPScore: 3, percentage: 58 }, createdAt: new Date('2026-10-15') },
      { id: 'b', category: 'ap-practice-exam:ap-chem', results: { form: 2, estimatedAPScore: 4, percentage: 71 }, createdAt: new Date('2026-10-12') },
      { id: 'a', category: 'ap-practice-exam:ap-chem', results: { estimatedAPScore: 2, percentage: 40 }, createdAt: new Date('2026-10-01') },
    )
    const res = await getHistory(new Request('http://localhost/api/ap-practice/history?examKey=ap-chem'))
    const d = await res.json()
    expect(d.signedIn).toBe(true)
    expect(d.forms).toEqual([
      { form: 1, attempts: 1, latest: { id: 'a', estimatedAPScore: 2, percentage: 40, takenAt: '2026-10-01T00:00:00.000Z' }, bestAPScore: 2 },
      { form: 2, attempts: 2, latest: { id: 'c', estimatedAPScore: 3, percentage: 58, takenAt: '2026-10-15T00:00:00.000Z' }, bestAPScore: 4 },
    ])
    mockAuth.mockResolvedValueOnce(null)
    expect(await (await getHistory(new Request('http://localhost/api/ap-practice/history?examKey=ap-chem'))).json()).toEqual({ signedIn: false, forms: [] })
    expect((await getHistory(new Request('http://localhost/api/ap-practice/history?examKey=nope'))).status).toBe(400)
    expect(summarizeApPracticeAttempts(1, [{ id: 'x', results: { form: 2 }, createdAt: new Date() }])[0].attempts).toBe(0)
  })

  it('serves a picked form through the content store', async () => {
    const res = await getForm(new Request('http://localhost/api/ap-practice/form?examKey=ap-chem&form=2'))
    expect(res.status).toBe(200)
    const d = await res.json()
    expect(d.form).toBe(2)
    expect(d.config.sections[mcqSection].items[0].question).toBe(f2First.question)
    expect(contentReads).toEqual([{ type: 'practice-exam', courseSlug: 'ap-chem', key: 'exam-2' }])
    expect((await getForm(new Request('http://localhost/api/ap-practice/form?examKey=ap-chem&form=3'))).status).toBe(400)
  })

  it('the URL hash names a form', () => {
    expect(apPracticeFormFromHash('#form-2')).toBe(2)
    expect(apPracticeFormFromHash('')).toBeNull()
    expect(apPracticeFormFromHash('#review')).toBeNull()
  })
})

describe('per-form resume', () => {
  const stages = buildStages(chem.sections, apExamTools('ap-chem'))

  it('form 1 keeps the device slot and signature it had before forms; form 2 gets its own', () => {
    expect(apProgressKey(apPracticeSittingId('ap-chem', 1))).toBe('ap-practice-progress-v1:ap-chem')
    expect(apProgressKey(apPracticeSittingId('ap-chem', 2))).toBe('ap-practice-progress-v1:ap-chem:form-2')
    expect(examSignature(chem.subject, chem.sections, stages, 1)).toBe(examSignature(chem.subject, chem.sections, stages))
    // Even an identical copy saved as form 2 never restores as form 1.
    expect(examSignature(chem.subject, chem.sections, stages, 2)).not.toBe(examSignature(chem.subject, chem.sections, stages))
  })

  it('the picker can tell a saved sitting is there without loading the exam', () => {
    const now = Date.now()
    const raw = (phase: string, savedAt: number) => JSON.stringify({ v: 1, sig: 'x', clientAttemptId: 'a', phase, savedAt })
    expect(peekApExamProgress(raw('section', now), now)).toEqual({ phase: 'section', savedAt: now })
    expect(peekApExamProgress(raw('final-results', now), now)?.phase).toBe('final-results')
    expect(peekApExamProgress(raw('section', now - 15 * 24 * 3600 * 1000), now)).toBeNull()
    expect(peekApExamProgress('{oops', now)).toBeNull()
    expect(peekApExamProgress(null, now)).toBeNull()
  })
})
