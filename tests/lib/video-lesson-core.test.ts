import { describe, it, expect } from 'vitest'
import {
  checkpointScore,
  isLessonComplete,
  lessonDraftSchema,
  resumeIndex,
  shuffledQuestion,
  studentSteps,
  visibleSteps,
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
const step = (order: number, clipId: string, questions: unknown[], yieldTag: string | null = null, durationSec = 100): StoredStep => ({
  order,
  clipId,
  yield: yieldTag,
  questions,
  clip: { title: clipId, provider: 'YOUTUBE', providerId: `yt-${clipId}`, durationSec },
})

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
    expect(out[0].questions[0].options).toEqual(shown.options)
    expect(shown.options[shown.correctIndex]).toBe('First B')
    expect(first.clipId).toBe('c1')
  })

  it('validates drafts: 1–12 steps, 1–3 questions, exactly four options', () => {
    const good = { title: 'Bonds', steps: [{ clipId: 'c1', questions: [q('Ok')] }] }
    expect(lessonDraftSchema.safeParse(good).success).toBe(true)
    expect(lessonDraftSchema.safeParse({ ...good, steps: [] }).success).toBe(false)
    expect(lessonDraftSchema.safeParse({ ...good, steps: [{ clipId: 'c1', questions: [] }] }).success).toBe(false)
    expect(lessonDraftSchema.safeParse({ ...good, steps: [{ clipId: 'c1', questions: [{ ...q('x'), options: ['a', 'b', 'c'] }] }] }).success).toBe(false)
  })
})
