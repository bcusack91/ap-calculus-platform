import { z } from 'zod'
import {
  checkpointQuestionSchema,
  lessonDraftSchema,
  MAX_QUESTIONS_PER_STEP,
  MAX_STEPS,
  type CheckpointQuestion,
  type LessonDraft,
} from '@/lib/video-lesson-core'

/**
 * Video-lesson authoring and review rules (pure, client-safe). The routes
 * under /api/teacher/video-lessons and /api/admin/instructors call these; the
 * authoring page uses the same messages to show errors inline.
 *
 * Draft lifecycle: an instructor SAVES work in progress with the loose schema
 * (blank fields allowed, so nothing is lost mid-edit), SUBMITS once the draft
 * passes `lessonDraftSchema` plus the clip checks below, and an admin APPROVES,
 * which re-runs the same checks before the published steps are replaced.
 */

// ── Instructor profiles ─────────────────────────────────────────────────────

/** "Dr. Jane O'Neil" → "dr-jane-oneil". Never empty. */
export function slugifyInstructorName(name: string): string {
  const base = name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
    .replace(/-+$/g, '')
  return base || 'instructor'
}

/** First free slug: base, base-2, base-3, … */
export function uniqueSlug(base: string, taken: ReadonlySet<string>): string {
  if (!taken.has(base)) return base
  for (let i = 2; ; i++) {
    const s = `${base}-${i}`
    if (!taken.has(s)) return s
  }
}

const nameField = z.string().trim().min(2, 'Name is required.').max(120)

/** PATCH body: every field optional (no defaults, so omitted fields stay as they are). */
export const instructorPatchSchema = z.object({
  name: nameField.optional(),
  headline: z.string().trim().max(200).optional(),
  bio: z.string().trim().max(4000).optional(),
  photoUrl: z
    .string()
    .trim()
    .max(1000)
    .refine((s) => s === '' || /^https:\/\//i.test(s), 'Photo URL must start with https://')
    .optional(),
  courses: z.array(z.string().trim().min(1).max(100)).max(60).optional(),
  isActive: z.boolean().optional(),
  /** Teacher account to link: an email, '' or null to unlink, undefined to leave as is. */
  linkEmail: z.string().trim().toLowerCase().max(320).nullable().optional(),
})
/** POST body: the same fields, name required. */
export const instructorInputSchema = instructorPatchSchema.extend({ name: nameField })
export type InstructorInput = z.infer<typeof instructorInputSchema>

/** Only TEACHER and ADMIN accounts can author lessons. */
export function linkableRoleError(role: string): string | null {
  return role === 'TEACHER' || role === 'ADMIN'
    ? null
    : `That account is a ${role} account. Make it a Teacher first (Admin → Users), then link it.`
}

// ── Drafts ──────────────────────────────────────────────────────────────────

/** Work-in-progress draft: same shape as lessonDraftSchema, blanks allowed. */
const looseQuestionSchema = z.object({
  question: z.string().max(2000),
  options: z.array(z.string().max(500)).length(4),
  correctAnswer: z.number().int().min(0).max(3),
  explanation: z.string().max(3000),
  yield: z.literal('LOW').optional(),
})
export const looseDraftSchema = z.object({
  title: z.string().max(200),
  steps: z
    .array(
      z.object({
        clipId: z.string().min(1).max(64),
        yield: z.literal('LOW').nullable().optional(),
        questions: z.array(looseQuestionSchema).max(MAX_QUESTIONS_PER_STEP),
      }),
    )
    .max(MAX_STEPS),
})
export type LooseDraft = z.infer<typeof looseDraftSchema>

export type DraftIssue = { path: string; message: string }

/** zod path → "steps.0.questions.1.explanation" (the UI keys errors on this). */
function issuePath(path: readonly PropertyKey[]): string {
  return path.map(String).join('.')
}

const FIELD_MESSAGES: Record<string, string> = {
  title: 'Give the lesson a title.',
  question: 'Write the question.',
  explanation: 'Write an explanation.',
  options: 'Every question needs four answer choices.',
  steps: `A lesson needs 1–${MAX_STEPS} clips.`,
  questions: `Each clip needs 1–${MAX_QUESTIONS_PER_STEP} questions.`,
}

function friendly(issue: z.core.$ZodIssue): string {
  const p = issue.path
  const last = p[p.length - 1]
  // options.N → a blank choice
  if (typeof last === 'number' && p[p.length - 2] === 'options') return 'Fill in every answer choice.'
  if (typeof last === 'string' && FIELD_MESSAGES[last]) return FIELD_MESSAGES[last]
  return issue.message
}

export type ClipForApproval = {
  id: string
  instructorId: string
  durationSec: number
  status: string
}

/**
 * The full approval check: the draft passes lessonDraftSchema, every clip
 * exists, belongs to the lesson's instructor, is not archived, has a known
 * duration, and appears once (student progress is keyed by clip id).
 * Used by submit (instructor) and approve (admin).
 */
export function validateDraftForApproval(
  draft: unknown,
  clipsById: ReadonlyMap<string, ClipForApproval>,
  instructorId: string,
): { ok: true; draft: LessonDraft } | { ok: false; issues: DraftIssue[] } {
  if (draft == null) return { ok: false, issues: [{ path: '', message: 'There is no draft to review.' }] }
  const parsed = lessonDraftSchema.safeParse(draft)
  if (!parsed.success) {
    const seen = new Set<string>()
    const issues: DraftIssue[] = []
    for (const i of parsed.error.issues) {
      const path = issuePath(i.path)
      if (seen.has(path)) continue
      seen.add(path)
      issues.push({ path, message: friendly(i) })
    }
    return { ok: false, issues }
  }
  const issues: DraftIssue[] = []
  const used = new Set<string>()
  parsed.data.steps.forEach((step, i) => {
    const path = `steps.${i}.clipId`
    const clip = clipsById.get(step.clipId)
    if (!clip || clip.instructorId !== instructorId) {
      issues.push({ path, message: `Clip ${i + 1} is not in this instructor's library.` })
    } else if (clip.status === 'ARCHIVED') {
      issues.push({ path, message: `Clip ${i + 1} is archived. Restore it or pick another clip.` })
    } else if (!(clip.durationSec > 0)) {
      issues.push({ path, message: `Clip ${i + 1} has no duration. Open it in the clip library and set its length.` })
    }
    if (used.has(step.clipId)) issues.push({ path, message: `Clip ${i + 1} is already used earlier in this lesson.` })
    used.add(step.clipId)
  })
  return issues.length ? { ok: false, issues } : { ok: true, draft: parsed.data }
}

/** VideoLessonStep rows (minus lessonId) for an approved draft: order = index. */
export function stepRowsFromDraft(draft: LessonDraft) {
  return draft.steps.map((s, order) => ({
    order,
    clipId: s.clipId,
    yield: s.yield === 'LOW' ? ('LOW' as const) : null,
    questions: s.questions.map((q) => ({
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      ...(q.yield === 'LOW' ? { yield: 'LOW' as const } : {}),
    })),
  }))
}

/** The clip ids a draft refers to (any shape; non-strings ignored). */
export function draftClipIds(draft: unknown): string[] {
  const steps = (draft as { steps?: unknown } | null)?.steps
  if (!Array.isArray(steps)) return []
  return [...new Set(steps.map((s) => (s as { clipId?: unknown })?.clipId).filter((x): x is string => typeof x === 'string'))]
}

/** What the authoring page shows as the lesson's state. */
export type LessonStatus =
  | { kind: 'new' }
  | { kind: 'draft'; published: boolean; version: number }
  | { kind: 'submitted'; published: boolean; version: number }
  | { kind: 'returned'; published: boolean; version: number; note: string }
  | { kind: 'published'; version: number }
  | { kind: 'unpublished'; version: number }
  | { kind: 'archived'; version: number }

export function lessonStatus(l: {
  published: boolean
  archived: boolean
  version: number
  draftState: string | null
  reviewNote: string | null
}): LessonStatus {
  if (l.archived && !l.draftState) return { kind: 'archived', version: l.version }
  if (l.draftState === 'SUBMITTED') return { kind: 'submitted', published: l.published, version: l.version }
  if (l.draftState === 'EDITING') {
    return l.reviewNote
      ? { kind: 'returned', published: l.published, version: l.version, note: l.reviewNote }
      : { kind: 'draft', published: l.published, version: l.version }
  }
  if (l.published) return { kind: 'published', version: l.version }
  if (l.version > 0) return { kind: 'unpublished', version: l.version }
  return { kind: 'new' }
}

// ── Checkpoint-question suggestions ────────────────────────────────────────

export type QuestionSuggestion = CheckpointQuestion & { source: string }

type Rec = Record<string, unknown>
const isRec = (x: unknown): x is Rec => !!x && typeof x === 'object' && !Array.isArray(x)

/** One candidate → checkpoint shape, or null if it is not a 4-option MCQ with a key. */
function normalizeCandidate(raw: Rec, opts: { keyField: 'correctAnswer' | 'correctIndex'; low?: boolean }): CheckpointQuestion | null {
  const question = typeof raw.question === 'string' ? raw.question : typeof raw.text === 'string' ? raw.text : null
  if (!question) return null
  const parsed = checkpointQuestionSchema.safeParse({
    question,
    options: raw.options,
    correctAnswer: raw[opts.keyField],
    explanation: raw.explanation,
    ...(opts.low || raw.yield === 'LOW' ? { yield: 'LOW' } : {}),
  })
  return parsed.success ? parsed.data : null
}

/**
 * Candidates from one interactive-lesson part: every `exercise.questions[]`
 * item and every quiz section (question/options/correctAnswer on the section).
 * A LOW section makes its questions LOW.
 */
export function suggestionsFromLessonSections(sections: readonly unknown[], partNumber: number): QuestionSuggestion[] {
  const source = `lesson part ${partNumber}`
  const out: QuestionSuggestion[] = []
  for (const s of sections) {
    if (!isRec(s)) continue
    const low = s.yield === 'LOW'
    const ex = s.exercise
    if (isRec(ex) && Array.isArray(ex.questions)) {
      for (const q of ex.questions) {
        if (!isRec(q)) continue
        const n = normalizeCandidate(q, { keyField: 'correctAnswer', low })
        if (n) out.push({ ...n, source })
      }
    }
    if (s.type === 'quiz') {
      const n = normalizeCandidate(s, { keyField: 'correctAnswer', low })
      if (n) out.push({ ...n, source })
    }
  }
  return out
}

/** Candidates from a TopicSlideDeck's `slides` JSON: every poll slide. */
export function suggestionsFromDeckSlides(slides: unknown): QuestionSuggestion[] {
  if (!Array.isArray(slides)) return []
  const out: QuestionSuggestion[] = []
  for (const s of slides) {
    if (!isRec(s) || s.kind !== 'poll') continue
    const n = normalizeCandidate(s, { keyField: 'correctIndex' })
    if (n) out.push({ ...n, source: 'slide deck' })
  }
  return out
}

/** Collapse whitespace, case and markdown emphasis so near-identical stems dedupe. */
export function questionKey(text: string): string {
  return text.replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim().toLowerCase()
}

/** Keep the first occurrence of each question text (lesson parts come first). */
export function dedupeSuggestions(items: readonly QuestionSuggestion[]): QuestionSuggestion[] {
  const seen = new Set<string>()
  return items.filter((q) => {
    const k = questionKey(q.question)
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}

// ── Clips ───────────────────────────────────────────────────────────────────

/** Concept tags: lowercase slugs (MCAT topic slugs where content overlaps), deduped, ≤ 20. */
export function normalizeTags(raw: unknown): string[] {
  const list = Array.isArray(raw) ? raw : typeof raw === 'string' ? raw.split(',') : []
  const out: string[] = []
  for (const t of list) {
    if (typeof t !== 'string') continue
    const tag = t.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, 60)
    if (tag && !out.includes(tag)) out.push(tag)
    if (out.length >= 20) break
  }
  return out
}

/** A clip length in whole seconds (1 s – 3 h), or null. */
export function parseDurationSec(raw: unknown): number | null {
  const n = typeof raw === 'number' ? raw : typeof raw === 'string' && raw.trim() ? Number(raw) : NaN
  if (!Number.isFinite(n)) return null
  const s = Math.round(n)
  return s >= 1 && s <= 3 * 3600 ? s : null
}
