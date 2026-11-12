import { z } from 'zod'
import { shuffleOptions } from '@/lib/shuffle-options'
import { isClipWatched, mergeRanges, type WatchRange } from '@/lib/video-watch'
import { gradeNumeric } from '@/lib/numeric-answer'

/**
 * Video lessons: shapes, validation and the rules shared by the student
 * player, the progress/answer routes and the authoring tools. Client-safe.
 *
 * A lesson is an ordered list of steps; each step is one clip plus 0–3
 * checkpoint questions. A clip is either a whole short video or ONE SECTION of
 * a longer one (the website cut of a YouTube video): then its tags carry
 * `video-N` (which video it came from), `section-<id>` and a role,
 * `role-teach` | `role-problem` | `role-solution`. A problem clip ends on
 * "pause and try it" and carries a NUMERIC question whose parts the student
 * types answers to; the solution clip that follows IS the explanation, so a
 * student who got every part right may skip it.
 *
 * Questions come in two kinds: multiple choice (the lesson-exercise shape;
 * `kind` omitted or 'choice') and numeric entry (`kind: 'numeric'`, 1–4 parts).
 * LOW-yield steps and questions are hidden unless the student opted in
 * (User.lessonIncludeLowYield), exactly like the text lessons.
 */

export const MAX_STEPS = 80
export const MAX_QUESTIONS_PER_STEP = 3

/**
 * An optional picture above the question (a circuit, a graph): the lesson
 * figure shape (src/lib/lesson-figure.ts), drawn with the same renderer, so
 * the SVG is injected only after isSafeSvg and follows light/dark mode.
 */
export const questionFigureSchema = z.object({
  svg: z.string().trim().min(1).max(60_000),
  alt: z.string().trim().min(10).max(1000),
  caption: z.string().trim().max(500).optional(),
  size: z.enum(['sm', 'md', 'lg']).optional(),
})
export type QuestionFigure = z.infer<typeof questionFigureSchema>

export const choiceQuestionSchema = z.object({
  kind: z.literal('choice').optional(),
  figure: questionFigureSchema.optional(),
  question: z.string().trim().min(1).max(2000),
  options: z.array(z.string().trim().min(1).max(500)).length(4),
  correctAnswer: z.number().int().min(0).max(3),
  explanation: z.string().trim().min(1).max(3000),
  yield: z.literal('LOW').optional(),
})
export type ChoiceQuestion = z.infer<typeof choiceQuestionSchema>

export const numericPartSchema = z.object({
  /** "a", "b" … as the problem labels them. */
  label: z.string().trim().min(1).max(8),
  prompt: z.string().trim().min(1).max(500),
  answer: z.number().finite(),
  /** Relative tolerance (default 5%). */
  tolerance: z.number().min(0).max(0.5).optional(),
  unit: z.string().trim().max(40).optional(),
  /** How the key is shown after a miss, e.g. "1.6 × 10⁻² C". */
  expected: z.string().trim().min(1).max(80),
})
export type NumericPart = z.infer<typeof numericPartSchema>

export const numericQuestionSchema = z.object({
  kind: z.literal('numeric'),
  figure: questionFigureSchema.optional(),
  /** The problem as asked (shown above the entry boxes). */
  question: z.string().trim().min(1).max(2000),
  parts: z.array(numericPartSchema).min(1).max(4),
  explanation: z.string().trim().min(1).max(3000),
  yield: z.literal('LOW').optional(),
})
export type NumericQuestion = z.infer<typeof numericQuestionSchema>

export const checkpointQuestionSchema = z.union([choiceQuestionSchema, numericQuestionSchema])
export type CheckpointQuestion = z.infer<typeof checkpointQuestionSchema>

export function isNumericQuestion(q: CheckpointQuestion): q is NumericQuestion {
  return (q as NumericQuestion).kind === 'numeric'
}

export const stepDraftSchema = z.object({
  clipId: z.string().min(1).max(64),
  yield: z.literal('LOW').nullable().optional(),
  questions: z.array(checkpointQuestionSchema).max(MAX_QUESTIONS_PER_STEP),
})
export type StepDraft = z.infer<typeof stepDraftSchema>

export const lessonDraftSchema = z.object({
  title: z.string().trim().min(1).max(200),
  steps: z.array(stepDraftSchema).min(1).max(MAX_STEPS),
})
export type LessonDraft = z.infer<typeof lessonDraftSchema>

// ── Clip roles (from VideoClip.tags) ──────────────────────────────────────

export type StepRole = 'teach' | 'problem' | 'solution'
export type StepMeta = { role: StepRole; video: number | null; section: string | null }

/** What a clip's tags say about it: `role-<r>`, `video-<n>`, `section-<id>`. */
export function stepMeta(tags: readonly string[] | undefined): StepMeta {
  let role: StepRole = 'teach'
  let video: number | null = null
  let section: string | null = null
  for (const t of tags ?? []) {
    if (t === 'role-problem' || t === 'role-solution' || t === 'role-teach') role = t.slice(5) as StepRole
    else if (/^video-\d+$/.test(t)) video = Number(t.slice(6))
    else if (t.startsWith('section-')) section = t.slice(8)
  }
  return { role, video, section }
}

// ── Parts (pages of a section lesson) ─────────────────────────────────────

/**
 * A lesson cut from YouTube videos is shown a PART at a time, one page per
 * pair of source videos: a concept video and its worked-examples video (the
 * YouTube format), so videos 1–2 are part 1, 3–4 part 2, and so on. A lesson
 * of whole clips (no `video-N` tags) is a single part. Parts are display
 * only: progress, completion and credit stay per lesson.
 */
export const VIDEOS_PER_PART = 2

export type LessonPart = {
  /** Steps [start, end) of the full visible list. */
  start: number
  end: number
  /** Source video numbers in this part, in order. */
  videos: number[]
}

export function partOfVideo(video: number | null): number {
  return video === null ? 0 : Math.ceil(video / VIDEOS_PER_PART)
}

/** Consecutive runs of steps in the same part (steps are already in order). */
export function lessonParts(videos: readonly (number | null)[]): LessonPart[] {
  const out: (LessonPart & { key: number })[] = []
  videos.forEach((v, i) => {
    const key = partOfVideo(v)
    let cur = out[out.length - 1]
    if (!cur || cur.key !== key) {
      cur = { key, start: i, end: i, videos: [] }
      out.push(cur)
    }
    cur.end = i + 1
    if (v !== null && !cur.videos.includes(v)) cur.videos.push(v)
  })
  return out.map(({ start, end, videos: vs }) => ({ start, end, videos: vs }))
}

/** A part's short name from its concept video's title: "Current: Charge on the Move" → "Current". */
export function partTitle(firstVideoTitle: string | null | undefined, position: number): string {
  const t = (firstVideoTitle ?? '').split(':')[0].trim()
  return t || `Part ${position}`
}

/** Which part (0-based) holds step i of the full list. */
export function partIndexOf(parts: readonly LessonPart[], i: number): number {
  const k = parts.findIndex((p) => i >= p.start && i < p.end)
  return k === -1 ? 0 : k
}

/** A step as stored (VideoLessonStep) joined with its clip. */
export type StoredStep = {
  order: number
  clipId: string
  yield: string | null
  questions: unknown
  clip: { title: string; provider: string; providerId: string; durationSec: number; tags?: string[] }
}

/** Per-clip progress (VideoLessonProgress.steps[clipId]). */
export type AnsweredRecord = { correct: boolean; at: string; attempts?: number; parts?: boolean[] }
export type ClipProgress = {
  ranges?: WatchRange[]
  answered?: Record<string, AnsweredRecord>
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

/** Deterministic option order for a choice question (same on page and in grading). */
export function shuffledQuestion(q: ChoiceQuestion): { options: string[]; correctIndex: number } {
  return shuffleOptions(q.options, q.correctAnswer, q.question)
}

/** Grade every part of a numeric question against what the student typed. */
export function gradeNumericQuestion(q: NumericQuestion, values: readonly string[]): { correct: boolean; parts: boolean[] } {
  const parts = q.parts.map((p, i) => gradeNumeric(values[i] ?? '', p.answer, p.tolerance).correct)
  return { correct: parts.every(Boolean), parts }
}

/**
 * A question is settled once it needs no further attempt: answered right, or
 * (choice) missed twice, when the key and explanation were shown, or
 * (numeric) answered at all, since the solution clip follows a miss.
 */
export function questionSettled(q: CheckpointQuestion, a: AnsweredRecord | undefined): boolean {
  if (!a) return false
  if (a.correct) return true
  return isNumericQuestion(q) || (a.attempts ?? 1) >= 2
}

/** A visible step for one student: hidden LOW steps dropped, hidden LOW questions dropped (index kept). */
export type VisibleStep = StoredStep & { meta: StepMeta; visibleQuestions: { index: number; q: CheckpointQuestion }[] }

export function visibleSteps(steps: readonly StoredStep[], includeLowYield: boolean): VisibleStep[] {
  return [...steps]
    .sort((a, b) => a.order - b.order)
    .filter((s) => includeLowYield || s.yield !== 'LOW')
    .map((s) => ({
      ...s,
      meta: stepMeta(s.clip.tags),
      visibleQuestions: parseQuestions(s.questions)
        .map((q, index) => ({ index, q }))
        .filter(({ q }) => includeLowYield || q.yield !== 'LOW'),
    }))
}

/**
 * A solution clip may be skipped when the problem clip before it was answered
 * fully right on the first try: the student already has the answer.
 */
export function solutionSkippable(step: VisibleStep, prev: VisibleStep | undefined, progress: ProgressSteps): boolean {
  if (step.meta.role !== 'solution' || !prev || prev.meta.role !== 'problem') return false
  const p = progress[prev.clipId]?.answered ?? {}
  const numeric = prev.visibleQuestions.filter(({ q }) => isNumericQuestion(q))
  return numeric.length > 0 && numeric.every(({ index }) => {
    const a = p[String(index)]
    return !!a?.correct && (a.attempts ?? 1) === 1
  })
}

export function stepDone(step: VisibleStep, progress: ProgressSteps, prev?: VisibleStep): { watched: boolean; answered: boolean } {
  const p = progress[step.clipId] ?? {}
  const watched = isClipWatched(p.ranges ?? [], step.clip.durationSec) || solutionSkippable(step, prev, progress)
  const answered = step.visibleQuestions.every(({ index, q }) => questionSettled(q, p.answered?.[String(index)]))
  return { watched, answered }
}

/** Every visible step watched (or skippable) and every visible checkpoint settled. */
export function isLessonComplete(steps: readonly VisibleStep[], progress: ProgressSteps): boolean {
  return steps.length > 0 && steps.every((s, i) => {
    const d = stepDone(s, progress, steps[i - 1])
    return d.watched && d.answered
  })
}

/** The first step not yet finished (or the last one when all are done). */
export function resumeIndex(steps: readonly VisibleStep[], progress: ProgressSteps): number {
  const i = steps.findIndex((s, k) => {
    const d = stepDone(s, progress, steps[k - 1])
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

/** What a student's page receives for one question: no answer keys. */
export type StudentQuestion =
  | { index: number; kind: 'choice'; question: string; figure?: QuestionFigure; options: string[]; lowYield: boolean }
  | { index: number; kind: 'numeric'; question: string; figure?: QuestionFigure; parts: { label: string; prompt: string; unit: string | null }[]; lowYield: boolean }

/** What a student's page receives for one step: no answer keys. */
export type StudentStep = {
  clipId: string
  title: string
  provider: string
  providerId: string
  durationSec: number
  lowYield: boolean
  role: StepRole
  /** Which source video this section came from (1-based), with its title. */
  video: number | null
  videoTitle: string | null
  questions: StudentQuestion[]
}

export function studentSteps(steps: readonly VisibleStep[], videoTitles: Readonly<Record<number, string>> = {}): StudentStep[] {
  return steps.map((s) => ({
    clipId: s.clipId,
    title: s.clip.title,
    provider: s.clip.provider,
    providerId: s.clip.providerId,
    durationSec: s.clip.durationSec,
    lowYield: s.yield === 'LOW',
    role: s.meta.role,
    video: s.meta.video,
    videoTitle: s.meta.video !== null ? videoTitles[s.meta.video] ?? null : null,
    questions: s.visibleQuestions.map(({ index, q }) =>
      isNumericQuestion(q)
        ? { index, kind: 'numeric' as const, question: q.question, ...(q.figure ? { figure: q.figure } : {}), parts: q.parts.map((p) => ({ label: p.label, prompt: p.prompt, unit: p.unit ?? null })), lowYield: q.yield === 'LOW' }
        : { index, kind: 'choice' as const, question: q.question, ...(q.figure ? { figure: q.figure } : {}), options: shuffledQuestion(q).options, lowYield: q.yield === 'LOW' },
    ),
  }))
}
