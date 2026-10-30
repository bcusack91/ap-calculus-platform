import { z } from 'zod'
import { shuffleOptions } from '@/lib/shuffle-options'
import { isClipWatched, mergeRanges, type WatchRange } from '@/lib/video-watch'

/**
 * Video lessons: shapes, validation and the rules shared by the student
 * player, the progress/answer routes and the authoring tools. Client-safe.
 *
 * A lesson is an ordered list of steps; each step is one clip plus 1–3
 * checkpoint questions in the lesson-exercise shape. LOW-yield steps and
 * questions are hidden unless the student opted in (User.lessonIncludeLowYield),
 * exactly like the text lessons (src/lib/lesson-yield.ts).
 */

export const MAX_STEPS = 12
export const MAX_QUESTIONS_PER_STEP = 3

export const checkpointQuestionSchema = z.object({
  question: z.string().trim().min(1).max(2000),
  options: z.array(z.string().trim().min(1).max(500)).length(4),
  correctAnswer: z.number().int().min(0).max(3),
  explanation: z.string().trim().min(1).max(3000),
  yield: z.literal('LOW').optional(),
})
export type CheckpointQuestion = z.infer<typeof checkpointQuestionSchema>

export const stepDraftSchema = z.object({
  clipId: z.string().min(1).max(64),
  yield: z.literal('LOW').nullable().optional(),
  questions: z.array(checkpointQuestionSchema).min(1).max(MAX_QUESTIONS_PER_STEP),
})
export type StepDraft = z.infer<typeof stepDraftSchema>

export const lessonDraftSchema = z.object({
  title: z.string().trim().min(1).max(200),
  steps: z.array(stepDraftSchema).min(1).max(MAX_STEPS),
})
export type LessonDraft = z.infer<typeof lessonDraftSchema>

/** A step as stored (VideoLessonStep) joined with its clip. */
export type StoredStep = {
  order: number
  clipId: string
  yield: string | null
  questions: unknown
  clip: { title: string; provider: string; providerId: string; durationSec: number }
}

/** Per-clip progress (VideoLessonProgress.steps[clipId]). */
export type ClipProgress = {
  ranges?: WatchRange[]
  answered?: Record<string, { correct: boolean; at: string; attempts?: number }>
}
export type ProgressSteps = Record<string, ClipProgress>

export function parseQuestions(raw: unknown): CheckpointQuestion[] {
  const parsed = z.array(checkpointQuestionSchema).safeParse(raw)
  return parsed.success ? parsed.data : []
}

export function parseProgressSteps(raw: unknown): ProgressSteps {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {}
  return raw as ProgressSteps
}

/** Deterministic option order for a checkpoint question (same on page and in grading). */
export function shuffledQuestion(q: CheckpointQuestion): { options: string[]; correctIndex: number } {
  return shuffleOptions(q.options, q.correctAnswer, q.question)
}

/** A visible step for one student: hidden LOW steps dropped, hidden LOW questions dropped (index kept). */
export type VisibleStep = StoredStep & { visibleQuestions: { index: number; q: CheckpointQuestion }[] }

export function visibleSteps(steps: readonly StoredStep[], includeLowYield: boolean): VisibleStep[] {
  return [...steps]
    .sort((a, b) => a.order - b.order)
    .filter((s) => includeLowYield || s.yield !== 'LOW')
    .map((s) => ({
      ...s,
      visibleQuestions: parseQuestions(s.questions)
        .map((q, index) => ({ index, q }))
        .filter(({ q }) => includeLowYield || q.yield !== 'LOW'),
    }))
}

export function stepDone(step: VisibleStep, progress: ProgressSteps): { watched: boolean; answered: boolean } {
  const p = progress[step.clipId] ?? {}
  const watched = isClipWatched(p.ranges ?? [], step.clip.durationSec)
  const answered = step.visibleQuestions.every(({ index }) => !!p.answered?.[String(index)])
  return { watched, answered }
}

/** Every visible step watched and every visible checkpoint answered. */
export function isLessonComplete(steps: readonly VisibleStep[], progress: ProgressSteps): boolean {
  return steps.length > 0 && steps.every((s) => {
    const d = stepDone(s, progress)
    return d.watched && d.answered
  })
}

/** The first step not yet finished (or the last one when all are done). */
export function resumeIndex(steps: readonly VisibleStep[], progress: ProgressSteps): number {
  const i = steps.findIndex((s) => {
    const d = stepDone(s, progress)
    return !(d.watched && d.answered)
  })
  return i === -1 ? Math.max(steps.length - 1, 0) : i
}

/** Checkpoint score over visible questions: answered correctly on the FIRST attempt. */
export function checkpointScore(steps: readonly VisibleStep[], progress: ProgressSteps): { correct: number; total: number } {
  let correct = 0
  let total = 0
  for (const s of steps) {
    for (const { index } of s.visibleQuestions) {
      total++
      const a = progress[s.clipId]?.answered?.[String(index)]
      if (a?.correct && (a.attempts ?? 1) === 1) correct++
    }
  }
  return { correct, total }
}

/** Merge one clip's saved ranges (used by the progress route). */
export function mergeClipRanges(prev: ClipProgress | undefined, add: readonly unknown[], durationSec: number): WatchRange[] {
  return mergeRanges([...(prev?.ranges ?? []), ...add], durationSec)
}

/** What a student's page receives for one step: no answer keys. */
export type StudentStep = {
  clipId: string
  title: string
  provider: string
  providerId: string
  durationSec: number
  lowYield: boolean
  questions: { index: number; question: string; options: string[]; lowYield: boolean }[]
}

export function studentSteps(steps: readonly VisibleStep[]): StudentStep[] {
  return steps.map((s) => ({
    clipId: s.clipId,
    title: s.clip.title,
    provider: s.clip.provider,
    providerId: s.clip.providerId,
    durationSec: s.clip.durationSec,
    lowYield: s.yield === 'LOW',
    questions: s.visibleQuestions.map(({ index, q }) => ({
      index,
      question: q.question,
      options: shuffledQuestion(q).options,
      lowYield: q.yield === 'LOW',
    })),
  }))
}
