/**
 * Pure logic behind the full-length practice-exam runner
 * (src/components/FullLengthPracticeExam.tsx), kept free of React so it can
 * be tested directly:
 *
 * - Answer state per item, and FRQ capture (the response text plus the
 *   rubric boxes ticked) for the submit route.
 * - Exam tools per AP exam: the reference sheet the real exam provides, and
 *   where a calculator is allowed.
 * - Stages: each section, or each separately timed part of a section (AP
 *   Calculus and Precalculus split Section I and Section II into a
 *   no-calculator part and a calculator part, each on its own clock).
 * - Resume: the sitting is saved to localStorage (like the MCAT and ACT
 *   full-lengths), with an absolute deadline per stage so the clock keeps
 *   running while the student is away.
 *
 * Indices stay (section, item) everywhere, so splitting a section into parts
 * never changes grading or the stored review.
 */
import type { ExamItem, FullExamSection, SAQItem } from '@/components/FullLengthPracticeExam'
import type { HighlightRange } from '@/lib/passage-highlights'
import { normalizeHighlights } from '@/lib/passage-highlights'

/* ------------------------------------------------------------------ */
/*  Answers                                                            */
/* ------------------------------------------------------------------ */

export interface MCQAnswer { type: 'mcq'; selected: number | null }
/**
 * `checked` keys are rubric ids: `<part letter>-<rubric id>` for a short-answer
 * part with an itemized rubric, `<part letter>-self` for one with a single
 * summary rubric, and `<rubric id>` for a DBQ or LEQ.
 */
export interface SAQAnswer { type: 'saq'; responses: string[]; checked: Record<string, boolean>; submitted: boolean }
export interface DBQAnswer { type: 'dbq'; chosenPromptIndex: number; response: string; checked: Record<string, boolean>; submitted: boolean }
export interface LEQAnswer { type: 'leq'; chosenPromptIndex: number; response: string; checked: Record<string, boolean>; submitted: boolean }
export type ItemAnswer = MCQAnswer | SAQAnswer | DBQAnswer | LEQAnswer

export function blankAnswer(item: ExamItem): ItemAnswer {
  if (item.type === 'mcq') return { type: 'mcq', selected: null }
  if (item.type === 'saq') return { type: 'saq', responses: item.parts.map(() => ''), checked: {}, submitted: false }
  if (item.type === 'dbq') return { type: 'dbq', chosenPromptIndex: 0, response: '', checked: {}, submitted: false }
  return { type: 'leq', chosenPromptIndex: 0, response: '', checked: {}, submitted: false }
}

/** A short-answer part's letter: authored, or 'a', 'b', 'c' … by position. */
export function saqPartLetter(part: SAQItem['parts'][number], pi: number): string {
  return part.letter ?? String.fromCharCode(97 + pi)
}

/** "(a) …" unless the authored part question already starts with its letter (plain or bold). */
export function partHeading(letter: string, question: string): string {
  const esc = letter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`^\\s*(\\*\\*)?\\s*\\(${esc}\\)`).test(question) ? question : `(${letter}) ${question}`
}

/** Every rubric box an FRQ item has, as the keys `checked` uses. */
export function rubricKeys(item: ExamItem): string[] {
  if (item.type === 'saq') {
    return item.parts.flatMap((p, pi) => {
      const letter = saqPartLetter(p, pi)
      return Array.isArray(p.rubric) ? p.rubric.map((rp) => `${letter}-${rp.id}`) : [`${letter}-self`]
    })
  }
  if (item.type === 'dbq' || item.type === 'leq') return item.rubric.map((rp) => rp.id)
  return []
}

/** True once the student has answered an item (an option picked, or any response written). */
export function isAnswered(answer: ItemAnswer | undefined): boolean {
  if (!answer) return false
  if (answer.type === 'mcq') return answer.selected !== null
  if (answer.type === 'saq') return answer.responses.some((r) => r.trim().length > 0)
  return answer.response.trim().length > 0
}

/** Longest response text sent to (and stored by) the server, per box. */
export const MAX_RESPONSE_CHARS = 20000

/** One FRQ as sent to /api/ap-practice/submit. */
export interface ApFrqSubmission {
  s: number
  i: number
  /** Rubric points ticked (the server recounts them from `ticked`). */
  earned: number
  /** One response per short-answer part; a single essay for a DBQ/LEQ. */
  responses: string[]
  /** Rubric keys ticked (see SAQAnswer.checked). */
  ticked: string[]
  /** The rubric was revealed and self-scored. */
  submitted: boolean
  /** LEQ: which prompt the student chose. */
  chosenPromptIndex?: number
}

/** The capture of one FRQ item for the submit route. */
export function frqSubmission(item: ExamItem, answer: ItemAnswer | undefined, s: number, i: number): ApFrqSubmission | null {
  if (item.type === 'mcq') return null
  const valid = new Set(rubricKeys(item))
  const a = answer && answer.type === item.type ? answer : blankAnswer(item)
  if (a.type === 'mcq') return null
  const ticked = Object.entries(a.checked).filter(([k, v]) => v && valid.has(k)).map(([k]) => k)
  const clip = (t: string) => t.slice(0, MAX_RESPONSE_CHARS)
  const responses = a.type === 'saq' ? a.responses.map(clip) : [clip(a.response)]
  return {
    s,
    i,
    earned: ticked.length,
    responses,
    ticked,
    submitted: a.submitted,
    ...(a.type === 'leq' ? { chosenPromptIndex: a.chosenPromptIndex } : {}),
  }
}

/* ------------------------------------------------------------------ */
/*  Exam tools per AP exam (keys from src/lib/ap-practice-exams.ts)    */
/* ------------------------------------------------------------------ */

export interface ExamPartSpec {
  label: string
  /** Items in this part; the last part takes whatever is left. */
  count?: number
  minutes: number
  calculator: boolean
}

export interface ApExamTools {
  /** Course slug of the reference sheet the real exam provides (ReferenceSheetModal). */
  referenceSheet?: string
  /** A calculator is allowed on every section (unless a part says otherwise). */
  calculator?: boolean
  /** Separately timed parts within a section, by section id. */
  parts?: Record<string, ExamPartSpec[]>
}

/** AP Calculus AB/BC, May 2027 (ap-phase1-pipeline/AP-2027-FORMATS.md). */
const CALCULUS_PARTS: Record<string, ExamPartSpec[]> = {
  mcq: [
    { label: 'Part A', count: 29, minutes: 62, calculator: false },
    { label: 'Part B', minutes: 38, calculator: true },
  ],
  frq: [
    { label: 'Part A', count: 2, minutes: 30, calculator: true },
    { label: 'Part B', minutes: 60, calculator: false },
  ],
}

/** AP Precalculus, May 2027. */
const PRECALCULUS_PARTS: Record<string, ExamPartSpec[]> = {
  mcq: [
    { label: 'Part A', count: 29, minutes: 65, calculator: false },
    { label: 'Part B', minutes: 40, calculator: true },
  ],
  frq: [
    { label: 'Part A', count: 2, minutes: 35, calculator: true },
    { label: 'Part B', minutes: 35, calculator: false },
  ],
}

/**
 * Only what the real exam gives students. Courses not listed get no reference
 * sheet and no calculator (Psychology, Economics, Computer Science, the
 * humanities). AP Environmental Science is left out until its calculator
 * policy is confirmed for 2027.
 */
export const AP_EXAM_TOOLS: Record<string, ApExamTools> = {
  'ap-calcab': { parts: CALCULUS_PARTS },
  'ap-calcbc': { parts: CALCULUS_PARTS },
  'ap-precalc': { parts: PRECALCULUS_PARTS },
  'ap-chem': { referenceSheet: 'ap-chemistry', calculator: true },
  'ap-bio': { referenceSheet: 'ap-biology', calculator: true },
  'ap-physics1': { referenceSheet: 'ap-physics-1', calculator: true },
  'ap-physics2': { referenceSheet: 'ap-physics-2', calculator: true },
  'ap-physics-c-mech': { referenceSheet: 'ap-physics-c-mechanics', calculator: true },
  'ap-physics-c-em': { referenceSheet: 'ap-physics-c-em', calculator: true },
  'ap-stats': { referenceSheet: 'ap-statistics', calculator: true },
}

export function apExamTools(examKey: string | undefined): ApExamTools {
  return (examKey && AP_EXAM_TOOLS[examKey]) || {}
}

/* ------------------------------------------------------------------ */
/*  Stages                                                             */
/* ------------------------------------------------------------------ */

export interface ExamStage {
  sectionIdx: number
  /** Position among the section's parts, and how many it has (1 = not split). */
  partIdx: number
  partCount: number
  /** "Part A" when the section is split. */
  partLabel?: string
  /** Item range within the section: [start, end). */
  start: number
  end: number
  seconds: number
  calculator: boolean
}

type StageSection = Pick<FullExamSection, 'id' | 'timeLimitMinutes'> & { items: readonly unknown[] }

/**
 * The timed stages of an exam, in order. A section splits into its parts only
 * when it has more items than the fixed-count parts take (a content-store copy
 * with a different item count still gets sensible parts; one too short to
 * split runs as one stage).
 */
export function buildStages(sections: readonly StageSection[], tools: ApExamTools = {}): ExamStage[] {
  const out: ExamStage[] = []
  sections.forEach((sec, sectionIdx) => {
    const total = sec.items.length
    const spec = tools.parts?.[sec.id]
    const fixed = spec ? spec.slice(0, -1).reduce((n, p) => n + (p.count ?? 0), 0) : 0
    if (!spec || spec.length < 2 || total <= fixed) {
      out.push({ sectionIdx, partIdx: 0, partCount: 1, start: 0, end: total, seconds: sec.timeLimitMinutes * 60, calculator: !!tools.calculator })
      return
    }
    let start = 0
    spec.forEach((p, partIdx) => {
      const last = partIdx === spec.length - 1
      const end = last ? total : start + (p.count ?? 0)
      out.push({ sectionIdx, partIdx, partCount: spec.length, partLabel: p.label, start, end, seconds: p.minutes * 60, calculator: p.calculator })
      start = end
    })
  })
  return out
}

/** "Section I, Part A" / "Section I". */
export function stageName(sectionName: string, stage: ExamStage): string {
  return stage.partLabel ? `${sectionName}, ${stage.partLabel}` : sectionName
}

/* ------------------------------------------------------------------ */
/*  Resume                                                             */
/* ------------------------------------------------------------------ */

export type ApExamPhase = 'section' | 'section-complete' | 'final-results'

export interface ApExamProgress {
  v: 1
  /** examSignature() of the exam this was saved on; a changed exam never restores. */
  sig: string
  clientAttemptId: string
  phase: ApExamPhase
  stageIdx: number
  /** Item index within the current section. */
  itemIdx: number
  answers: ItemAnswer[][]
  /** "s:i" keys. */
  flags: string[]
  /** "s:i" → struck-out option indices (shown order). */
  struck: Record<string, number[]>
  /** Highlight key (see highlightKey) → ranges. */
  highlights: Record<string, HighlightRange[]>
  /** Epoch ms when the current stage's clock runs out (phase 'section'). */
  deadline: number | null
  savedAt: number
}

/** A sitting older than this is dropped rather than resumed. */
export const AP_PROGRESS_MAX_AGE_MS = 14 * 24 * 60 * 60 * 1000

export function apProgressKey(examId: string): string {
  return `ap-practice-progress-v1:${examId}`
}

/** FNV-1a, 32-bit, as 8 hex characters. */
export function hashText(text: string): string {
  let h = 0x811c9dc5
  for (let k = 0; k < text.length; k++) {
    h ^= text.charCodeAt(k)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

function itemText(item: ExamItem): string {
  if (item.type === 'mcq') return `${item.stimulus ?? ''}|${item.question}|${item.options.join('|')}`
  if (item.type === 'saq') return `${item.prompt ?? item.stimulus ?? ''}|${item.parts.map((p) => p.question ?? p.prompt ?? '').join('|')}`
  if (item.type === 'dbq') return item.prompt
  return item.promptOptions.map((p) => p.prompt).join('|')
}

/**
 * Identifies the exact exam a saved sitting belongs to. The form number is
 * part of it for forms 2 and 3 (form 1 hashes as before, so sittings saved
 * before forms existed still resume).
 */
export function examSignature(
  subject: string,
  sections: readonly Pick<FullExamSection, 'id' | 'items'>[],
  stages: readonly ExamStage[],
  form = 1,
): string {
  const body = sections.map((s) => `${s.id}:${s.items.length}:${s.items.map(itemText).join('#')}`).join('||')
  const layout = stages.map((st) => `${st.sectionIdx}.${st.start}-${st.end}.${st.seconds}`).join(',')
  return `${hashText(form > 1 ? `${subject}#form-${form}` : subject)}-${hashText(body)}-${hashText(layout)}`
}

/**
 * What the form picker shows for a sitting saved on the device, without the
 * exam itself: whether one is there and still fresh enough to resume. null
 * when missing, corrupt or stale. (Resuming re-checks it against the exam.)
 */
export function peekApExamProgress(raw: string | null, now: number): { phase: ApExamPhase; savedAt: number } | null {
  if (!raw) return null
  let p: unknown
  try {
    p = JSON.parse(raw)
  } catch {
    return null
  }
  if (!isRec(p) || p.v !== 1 || typeof p.sig !== 'string') return null
  if (!['section', 'section-complete', 'final-results'].includes(String(p.phase))) return null
  const savedAt = typeof p.savedAt === 'number' ? p.savedAt : 0
  if (now - savedAt > AP_PROGRESS_MAX_AGE_MS) return null
  return { phase: p.phase as ApExamPhase, savedAt }
}

/** Key for a highlightable block: shared stimuli by their text, so a set keeps one set of marks. */
export function highlightKey(kind: 'stim' | 'prompt' | 'doc', text: string): string {
  return `${kind}:${hashText(text)}`
}

const isRec = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v)
const str = (v: unknown) => (typeof v === 'string' ? v.slice(0, MAX_RESPONSE_CHARS) : '')
const boolMap = (v: unknown): Record<string, boolean> =>
  isRec(v) ? Object.fromEntries(Object.entries(v).filter(([, x]) => x === true).map(([k]) => [k, true])) : {}
const intIn = (v: unknown, lo: number, hi: number): number | null => (Number.isInteger(v) && (v as number) >= lo && (v as number) <= hi ? (v as number) : null)

/** A stored answer, checked against the item it belongs to (blank when it doesn't fit). */
export function sanitizeAnswer(item: ExamItem, raw: unknown): ItemAnswer {
  const blank = blankAnswer(item)
  if (!isRec(raw) || raw.type !== item.type) return blank
  if (item.type === 'mcq') return { type: 'mcq', selected: intIn(raw.selected, 0, item.options.length - 1) }
  if (item.type === 'saq') {
    const rs = Array.isArray(raw.responses) ? raw.responses : []
    return { type: 'saq', responses: item.parts.map((_, pi) => str(rs[pi])), checked: boolMap(raw.checked), submitted: raw.submitted === true }
  }
  const chosen = item.type === 'leq' ? intIn(raw.chosenPromptIndex, 0, item.promptOptions.length - 1) ?? 0 : 0
  return { type: item.type, chosenPromptIndex: chosen, response: str(raw.response), checked: boolMap(raw.checked), submitted: raw.submitted === true } as DBQAnswer | LEQAnswer
}

/**
 * Parse a stored sitting; null when it is missing, corrupt, stale, or saved on
 * a different exam. Answers are re-checked item by item.
 */
export function parseApExamProgress(
  raw: string | null,
  sig: string,
  sections: readonly Pick<FullExamSection, 'items'>[],
  stageCount: number,
  now: number,
): ApExamProgress | null {
  if (!raw) return null
  let p: unknown
  try {
    p = JSON.parse(raw)
  } catch {
    return null
  }
  if (!isRec(p) || p.v !== 1 || p.sig !== sig || typeof p.clientAttemptId !== 'string') return null
  if (!['section', 'section-complete', 'final-results'].includes(String(p.phase))) return null
  const savedAt = typeof p.savedAt === 'number' ? p.savedAt : 0
  if (now - savedAt > AP_PROGRESS_MAX_AGE_MS) return null
  const stageIdx = intIn(p.stageIdx, 0, Math.max(0, stageCount - 1))
  if (stageIdx === null) return null
  const rawAnswers = Array.isArray(p.answers) ? p.answers : []
  const answers = sections.map((sec, s) => {
    const row = Array.isArray(rawAnswers[s]) ? (rawAnswers[s] as unknown[]) : []
    return sec.items.map((item, i) => sanitizeAnswer(item, row[i]))
  })
  const struck: Record<string, number[]> = {}
  if (isRec(p.struck)) {
    for (const [k, v] of Object.entries(p.struck)) {
      if (Array.isArray(v)) struck[k] = v.filter((x): x is number => Number.isInteger(x) && x >= 0)
    }
  }
  const highlights: Record<string, HighlightRange[]> = {}
  if (isRec(p.highlights)) {
    for (const [k, v] of Object.entries(p.highlights)) {
      if (!Array.isArray(v)) continue
      const ranges = normalizeHighlights(v.filter(isRec).map((r) => ({ start: Number(r.start), end: Number(r.end) })))
      if (ranges.length) highlights[k] = ranges
    }
  }
  return {
    v: 1,
    sig,
    clientAttemptId: p.clientAttemptId,
    phase: p.phase as ApExamPhase,
    stageIdx,
    itemIdx: Number.isInteger(p.itemIdx) && (p.itemIdx as number) >= 0 ? (p.itemIdx as number) : 0,
    answers,
    flags: Array.isArray(p.flags) ? [...new Set(p.flags.filter((x): x is string => typeof x === 'string'))] : [],
    struck,
    highlights,
    deadline: typeof p.deadline === 'number' && Number.isFinite(p.deadline) ? p.deadline : null,
    savedAt,
  }
}

/**
 * Where a restored sitting lands: a stage whose clock ran out while the
 * student was away is over (they arrive at its "complete" screen), and the
 * item index is clamped into the stage.
 */
export function restoreSitting(p: ApExamProgress, stages: readonly ExamStage[], now: number): ApExamProgress {
  const stage = stages[Math.min(p.stageIdx, stages.length - 1)]
  if (!stage) return p
  const itemIdx = Math.min(Math.max(stage.start, p.itemIdx), Math.max(stage.start, stage.end - 1))
  if (p.phase === 'section' && (p.deadline === null || p.deadline <= now)) {
    return { ...p, itemIdx, phase: 'section-complete', deadline: null }
  }
  return { ...p, itemIdx }
}
