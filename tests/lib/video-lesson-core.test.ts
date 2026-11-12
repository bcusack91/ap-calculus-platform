import { describe, it, expect } from 'vitest'
import {
  checkpointScore,
  gradeNumericQuestion,
  isLessonComplete,
  lessonParts,
  partIndexOf,
  partTitle,
  lessonDraftSchema,
  parseQuestions,
  questionSettled,
  resumeIndex,
  shuffledQuestion,
  solutionSkippable,
  stepMeta,
  studentSteps,
  visibleSteps,
  MAX_STEPS,
  type NumericQuestion,
  type ProgressSteps,
  type StoredStep,
} from '@/lib/video-lesson-core'

const q = (question: string, extra: Record<string, unknown> = {}) => ({
  question,
  options: [`${question} A`, `${question} B`, `${question} C`, `${question} D`],
  correctAnswer: 1,
  explanation: 'because',
  ...extra,
})
const step = (order: number, clipId: string, questions: unknown[], yieldTag: string | null = null, durationSec = 100, tags?: string[]): StoredStep => ({
  order,
  clipId,
  yield: yieldTag,
  questions,
  clip: { title: clipId, provider: 'YOUTUBE', providerId: `yt-${clipId}`, durationSec, ...(tags ? { tags } : {}) },
})
const numeric: NumericQuestion = {
  kind: 'numeric',
  question: 'A wire carries 3.2 mA.',
  parts: [
    { label: 'a', prompt: 'Charge in 5.0 s?', answer: 0.016, unit: 'C', expected: '1.6 × 10⁻² C' },
    { label: 'b', prompt: 'How many electrons?', answer: 1e17, expected: '1.0 × 10¹⁷' },
  ],
  explanation: 'ΔQ = IΔt; N = ΔQ/e',
}

const steps: StoredStep[] = [
  step(2, 'c3', [q('Third')]),
  step(0, 'c1', [q('First'), q('First low', { yield: 'LOW' })]),
  step(1, 'c2', [q('Second')], 'LOW'),
]

describe('video lesson rules', () => {
  it('orders steps and hides low-yield steps and questions by default', () => {
    const v = visibleSteps(steps, false)
    expect(v.map((s) => s.clipId)).toEqual(['c1', 'c3'])
    expect(v[0].visibleQuestions.map((x) => x.index)).toEqual([0])
    const all = visibleSteps(steps, true)
    expect(all.map((s) => s.clipId)).toEqual(['c1', 'c2', 'c3'])
    expect(all[0].visibleQuestions.map((x) => x.index)).toEqual([0, 1])
  })

  it('completes only when every visible clip is watched and every visible checkpoint answered', () => {
    const v = visibleSteps(steps, false)
    const p: ProgressSteps = {
      c1: { ranges: [[0, 95]], answered: { '0': { correct: true, at: 'x' } } },
      c3: { ranges: [[0, 95]] },
    }
    expect(isLessonComplete(v, p)).toBe(false)
    expect(resumeIndex(v, p)).toBe(1)
    // One miss is not settled: the student rewatches and answers again…
    p.c3!.answered = { '0': { correct: false, at: 'x', attempts: 1 } }
    expect(isLessonComplete(v, p)).toBe(false)
    // …a second miss reveals the key and settles it.
    p.c3!.answered = { '0': { correct: false, at: 'x', attempts: 2 } }
    expect(isLessonComplete(v, p)).toBe(true)
    // The hidden low-yield step and question are not required…
    expect(isLessonComplete(visibleSteps(steps, true), p)).toBe(false)
    // …and an unwatched clip blocks completion even if answered.
    expect(isLessonComplete(v, { ...p, c3: { ranges: [[0, 50]], answered: p.c3!.answered } })).toBe(false)
  })

  it('scores checkpoints on the first attempt only', () => {
    const v = visibleSteps(steps, false)
    const p: ProgressSteps = {
      c1: { answered: { '0': { correct: true, at: 'x' } } },
      c3: { answered: { '0': { correct: true, at: 'x', attempts: 2 } } },
    }
    expect(checkpointScore(v, p)).toEqual({ correct: 1, total: 2 })
  })

  it('never sends the answer key, and shows options in the same order grading uses', () => {
    const out = studentSteps(visibleSteps(steps, false))
    expect(JSON.stringify(out)).not.toMatch(/correctAnswer|explanation|because/)
    const first = steps[1]
    const shown = shuffledQuestion(q('First'))
    const q0 = out[0].questions[0]
    expect(q0.kind === 'choice' ? q0.options : null).toEqual(shown.options)
    expect(shown.options[shown.correctIndex]).toBe('First B')
    expect(first.clipId).toBe('c1')
  })

  it('keeps a question\'s figure (the circuit drawing) for the student, choice and numeric alike', () => {
    const figure = { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><line x1="0" y1="5" x2="10" y2="5" stroke="currentColor"/></svg>', alt: 'A single wire drawn across the figure.' }
    const withFigs: StoredStep[] = [
      { ...steps[1], questions: [{ ...q('Pic'), figure }, { ...numeric, figure }] },
    ]
    const out = studentSteps(visibleSteps(withFigs, false))
    expect(out[0].questions.map((x) => x.figure)).toEqual([figure, figure])
    expect(JSON.stringify(out)).not.toMatch(/correctAnswer|explanation|because/)
    expect(lessonDraftSchema.safeParse({ title: 'T', steps: [{ clipId: 'c1', questions: [{ ...q('Pic'), figure }] }] }).success).toBe(true)
    expect(lessonDraftSchema.safeParse({ title: 'T', steps: [{ clipId: 'c1', questions: [{ ...q('Pic'), figure: { svg: '<svg/>', alt: 'short' } }] }] }).success).toBe(false)
  })

  it(`validates drafts: 1–${MAX_STEPS} steps, 0–3 questions, exactly four options`, () => {
    const good = { title: 'Bonds', steps: [{ clipId: 'c1', questions: [q('Ok')] }] }
    expect(lessonDraftSchema.safeParse(good).success).toBe(true)
    expect(lessonDraftSchema.safeParse({ ...good, steps: [] }).success).toBe(false)
    expect(lessonDraftSchema.safeParse({ ...good, steps: [{ clipId: 'c1', questions: [] }] }).success).toBe(true)
    expect(lessonDraftSchema.safeParse({ ...good, steps: Array.from({ length: MAX_STEPS + 1 }, (_, i) => ({ clipId: `c${i}`, questions: [] })) }).success).toBe(false)
    expect(lessonDraftSchema.safeParse({ ...good, steps: [{ clipId: 'c1', questions: [{ ...q('x'), options: ['a', 'b', 'c'] }] }] }).success).toBe(false)
    expect(lessonDraftSchema.safeParse({ ...good, steps: [{ clipId: 'c1', questions: [numeric] }] }).success).toBe(true)
    expect(lessonDraftSchema.safeParse({ ...good, steps: [{ clipId: 'c1', questions: [{ ...numeric, parts: [] }] }] }).success).toBe(false)
  })

  it('reads clip roles from tags', () => {
    expect(stepMeta(['lesson-mcat-circ1', 'video-2', 'section-03-ex1-solution', 'role-solution'])).toEqual({ role: 'solution', video: 2, section: '03-ex1-solution' })
    expect(stepMeta(undefined)).toEqual({ role: 'teach', video: null, section: null })
  })

  it('grades numeric parts and settles them after one attempt', () => {
    expect(gradeNumericQuestion(numeric, ['1.6e-2', '1.0 × 10¹⁷'])).toEqual({ correct: true, parts: [true, true] })
    expect(gradeNumericQuestion(numeric, ['0.016 C', '1e16'])).toEqual({ correct: false, parts: [true, false] })
    expect(questionSettled(numeric, { correct: false, at: 'x', attempts: 1 })).toBe(true)
    expect(questionSettled(q('x'), { correct: false, at: 'x', attempts: 1 })).toBe(false)
    expect(questionSettled(q('x'), { correct: true, at: 'x', attempts: 1 })).toBe(true)
    expect(parseQuestions([numeric, q('mc')]).length).toBe(2)
  })

  it('lets a student who solved the problem skip its solution clip', () => {
    const problem = step(0, 'p', [numeric], null, 30, ['video-2', 'section-02-ex1-problem', 'role-problem'])
    const solution = step(1, 's', [], null, 60, ['video-2', 'section-03-ex1-solution', 'role-solution'])
    const recap = step(2, 'r', [q('Recap')], null, 20, ['video-2', 'section-06-recap', 'role-teach'])
    const v = visibleSteps([recap, solution, problem], false)
    const right: ProgressSteps = { p: { ranges: [[0, 30]], answered: { '0': { correct: true, at: 'x', attempts: 1, parts: [true, true] } } } }
    expect(solutionSkippable(v[1], v[0], right)).toBe(true)
    expect(isLessonComplete(v, right)).toBe(false)
    expect(resumeIndex(v, right)).toBe(2)
    const wrong: ProgressSteps = { p: { ranges: [[0, 30]], answered: { '0': { correct: false, at: 'x', attempts: 1, parts: [true, false] } } } }
    expect(solutionSkippable(v[1], v[0], wrong)).toBe(false)
    expect(resumeIndex(v, wrong)).toBe(1)
    const out = studentSteps(v, { 2: 'Current: Worked Examples' })
    expect(out[0].role).toBe('problem')
    expect(out[0].videoTitle).toBe('Current: Worked Examples')
    expect(JSON.stringify(out)).not.toMatch(/answer|expected|explanation/)
    expect(out[0].questions[0]).toMatchObject({ kind: 'numeric', parts: [{ label: 'a', unit: 'C' }, { label: 'b', unit: null }] })
  })
})

describe('lesson parts (one page per concept + worked-examples pair)', () => {
  it('pairs videos 1–2, 3–4 … in step order', () => {
    const parts = lessonParts([1, 1, 2, 2, 3, 3, 4, 5])
    expect(parts).toEqual([
      { start: 0, end: 4, videos: [1, 2] },
      { start: 4, end: 7, videos: [3, 4] },
      { start: 7, end: 8, videos: [5] },
    ])
    expect(partIndexOf(parts, 0)).toBe(0)
    expect(partIndexOf(parts, 5)).toBe(1)
    expect(partIndexOf(parts, 7)).toBe(2)
  })
  it('keeps a part whose examples video is not out yet', () => {
    expect(lessonParts([1, 2, 3, 3])).toEqual([
      { start: 0, end: 2, videos: [1, 2] },
      { start: 2, end: 4, videos: [3] },
    ])
  })
  it('treats a lesson of whole clips as one part', () => {
    expect(lessonParts([null, null, null])).toEqual([{ start: 0, end: 3, videos: [] }])
    expect(lessonParts([])).toEqual([])
  })
  it('names a part from its concept video', () => {
    expect(partTitle('Current: Charge on the Move', 1)).toBe('Current')
    expect(partTitle("Resistance and Ohm's Law", 3)).toBe("Resistance and Ohm's Law")
    expect(partTitle(null, 2)).toBe('Part 2')
  })
})
