/**
 * Mid-exam progress for an ACT full-length, kept in localStorage per student
 * and form so a reload (or coming back later) resumes the sitting. No server
 * table: nothing is stored server-side until the exam is submitted. Section
 * clocks are absolute deadlines, so they keep running while the student is
 * away, as on test day.
 *
 * Every storage access is wrapped: private windows and blocked storage just
 * mean no resume.
 */
import type { HighlightRange } from '@/lib/passage-highlights'

export const ACT_FL_PROGRESS_EVENT = 'act-fl-progress-change'

export type ActFlPhase = 'start' | 'in' | 'break' | 'submit'

export interface ActFlProgress {
  v: 1
  form: number
  includeScience: boolean
  /** Sent with the submit so a retried POST can't store the sitting twice. */
  clientAttemptId: string
  sectionIdx: number
  phase: ActFlPhase
  /** Question index within the current section. */
  qIdx: number
  answers: Record<string, number>
  flags: string[]
  /** questionId → struck-out option indices. */
  struck: Record<string, number[]>
  /** passageId → highlighted ranges. */
  highlights: Record<string, HighlightRange[]>
  questionSeconds: Record<string, number>
  /** section → seconds used (set when the section ends). */
  sectionSeconds: Record<string, number>
  /** Epoch ms when the current section's clock runs out (phase 'in'). */
  sectionDeadline: number | null
  /** Epoch ms when the current break ends (phase 'break', after Math). */
  breakDeadline: number | null
  savedAt: number
}

export function actFlProgressKey(userId: string, form: number): string {
  return `act-fl-progress-v1:${userId}:form-${form}`
}

const isRec = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v)

/** Parse a stored value; null when it isn't a v1 progress record for this form. */
export function parseActFlProgress(raw: string | null, form: number): ActFlProgress | null {
  if (!raw) return null
  try {
    const p = JSON.parse(raw) as unknown
    if (!isRec(p) || p.v !== 1 || p.form !== form || typeof p.clientAttemptId !== 'string') return null
    if (typeof p.sectionIdx !== 'number' || typeof p.qIdx !== 'number') return null
    if (!['start', 'in', 'break', 'submit'].includes(String(p.phase))) return null
    return {
      v: 1,
      form,
      includeScience: p.includeScience === true,
      clientAttemptId: p.clientAttemptId,
      sectionIdx: p.sectionIdx,
      phase: p.phase as ActFlPhase,
      qIdx: p.qIdx,
      answers: isRec(p.answers) ? (p.answers as Record<string, number>) : {},
      flags: Array.isArray(p.flags) ? p.flags.filter((x): x is string => typeof x === 'string') : [],
      struck: isRec(p.struck) ? (p.struck as Record<string, number[]>) : {},
      highlights: isRec(p.highlights) ? (p.highlights as Record<string, HighlightRange[]>) : {},
      questionSeconds: isRec(p.questionSeconds) ? (p.questionSeconds as Record<string, number>) : {},
      sectionSeconds: isRec(p.sectionSeconds) ? (p.sectionSeconds as Record<string, number>) : {},
      sectionDeadline: typeof p.sectionDeadline === 'number' ? p.sectionDeadline : null,
      breakDeadline: typeof p.breakDeadline === 'number' ? p.breakDeadline : null,
      savedAt: typeof p.savedAt === 'number' ? p.savedAt : 0,
    }
  } catch {
    return null
  }
}

export function readActFlProgress(userId: string, form: number): ActFlProgress | null {
  try {
    return parseActFlProgress(localStorage.getItem(actFlProgressKey(userId, form)), form)
  } catch {
    return null
  }
}

export function writeActFlProgress(userId: string, p: ActFlProgress): void {
  try {
    localStorage.setItem(actFlProgressKey(userId, p.form), JSON.stringify(p))
  } catch {
    /* storage full or blocked: no resume */
  }
}

export function clearActFlProgress(userId: string, form: number): void {
  try {
    localStorage.removeItem(actFlProgressKey(userId, form))
  } catch {
    /* noop */
  }
  try {
    window.dispatchEvent(new Event(ACT_FL_PROGRESS_EVENT))
  } catch {
    /* noop */
  }
}

/** A fresh sitting. */
export function newActFlProgress(form: number, includeScience: boolean, clientAttemptId: string): ActFlProgress {
  return {
    v: 1,
    form,
    includeScience,
    clientAttemptId,
    sectionIdx: 0,
    phase: 'start',
    qIdx: 0,
    answers: {},
    flags: [],
    struck: {},
    highlights: {},
    questionSeconds: {},
    sectionSeconds: {},
    sectionDeadline: null,
    breakDeadline: null,
    savedAt: Date.now(),
  }
}
