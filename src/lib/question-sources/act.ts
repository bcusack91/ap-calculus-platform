/**
 * ACT full-length question source: rebuild a sitting's questions from the form
 * registry, so the submit route can grade by question id and the review page /
 * mistake log can show them again. Server-side (the registry loads the forms).
 *
 * DiagnosticTest (category 'act-full-length').results stores
 *   { form, includeScience, answers: {questionId: optionIndex}, flags: [questionId],
 *     questionSeconds: {questionId: seconds}, ...scores }
 * Options are shown in AUTHORED order on every ACT full-length surface, so a
 * stored index is the authored index (no remapping anywhere).
 */
import { questionKey } from '@/lib/question-key'
import { readOptionExplanations } from '@/lib/option-explanations'
import { actEnglishToRichText } from '@/lib/act-english-markers'
import { ACT_FL_SECTION_LABELS, ACT_FL_SKILL_META, actFlSections, scoreActFullLength, type ActFlScore } from '@/lib/act-fl-scoring'
import { getActForm } from '@/data/act-practice/full-length'
import type { ActFLForm, ActFLPassage, ActFLQuestion, ActFLSection, ActFLSkill } from '@/data/act-practice/full-length/types'
import type { ReviewItem, ReviewPassage } from './types'

type Rec = Record<string, unknown>

function asRecord(v: unknown): Rec | null {
  return v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : null
}

function parseJson(v: unknown): unknown {
  if (typeof v !== 'string') return v
  try {
    return JSON.parse(v)
  } catch {
    return null
  }
}

/** Longest time recorded on one question (a whole Math section). */
const MAX_QUESTION_SECONDS = 50 * 60

/** One question of a sitting in exam order, with where it sits. */
export interface ActFlSlot {
  section: ActFLSection
  passage: ActFLPassage | null
  question: ActFLQuestion
  /** 1-based number within its section (what the student saw). */
  number: number
}

/** Every question of the sitting in exam order (English → Math → Reading → Science?). Pure. */
export function actFlSlots(form: ActFLForm, includeScience: boolean): ActFlSlot[] {
  const out: ActFlSlot[] = []
  for (const section of actFlSections(includeScience)) {
    let number = 0
    if (section === 'math') {
      for (const q of form.math) out.push({ section, passage: null, question: q, number: ++number })
      continue
    }
    for (const p of form[section]) for (const q of p.questions) out.push({ section, passage: p, question: q, number: ++number })
  }
  return out
}

export interface ActFlAnswers {
  /** questionId → option index picked (authored order). */
  answers: Record<string, number>
  /** questionIds flagged for review. */
  flags: string[]
  /** questionId → seconds spent on it. */
  questionSeconds: Record<string, number>
}

/**
 * Keep only answers / flags / timings for questions in this sitting: unknown
 * ids dropped, indices bounded, seconds clamped. Never throws on hostile input.
 */
export function sanitizeActFlAnswers(
  form: ActFLForm,
  includeScience: boolean,
  raw: { answers?: unknown; flags?: unknown; questionSeconds?: unknown },
): ActFlAnswers {
  const optionCount = new Map(actFlSlots(form, includeScience).map((s) => [s.question.id, s.question.options.length]))
  const answers: Record<string, number> = {}
  for (const [id, v] of Object.entries(asRecord(raw.answers) ?? {})) {
    const n = optionCount.get(id)
    if (n !== undefined && typeof v === 'number' && Number.isInteger(v) && v >= 0 && v < n) answers[id] = v
  }
  const flags = Array.isArray(raw.flags) ? [...new Set(raw.flags.filter((x): x is string => typeof x === 'string' && optionCount.has(x)))] : []
  const questionSeconds: Record<string, number> = {}
  for (const [id, v] of Object.entries(asRecord(raw.questionSeconds) ?? {})) {
    if (optionCount.has(id) && typeof v === 'number' && Number.isFinite(v) && v > 0) {
      questionSeconds[id] = Math.min(Math.round(v), MAX_QUESTION_SECONDS)
    }
  }
  return { answers, flags, questionSeconds }
}

/** One graded question of a sitting (a ReviewItem plus what grading needs). */
export interface ActFlItem extends ReviewItem {
  questionId: string
  section: ActFLSection
  skillCode: ActFLSkill
  isCorrect: boolean
}

/** The passage as the review shows it (English markers as <sup>/<u> markup). */
export function actReviewPassage(p: ActFLPassage, section: ActFLSection): ReviewPassage {
  return { id: p.id, title: p.title, body: section === 'english' ? actEnglishToRichText(p.text) : p.text }
}

/** The questionKey of a full-length question (passage questions are keyed with their passage id). */
export function actFlQuestionKey(q: ActFLQuestion, passage: ActFLPassage | null): string {
  return questionKey({ question: q.question, options: q.options, correctIndex: q.correctIndex, passageId: passage ? passage.id : null })
}

/**
 * Every question of the sitting in exam order, graded against the stored
 * answers. Unanswered questions are included (chosenIndex null) since the
 * score counts them wrong. Pure.
 */
export function buildActFlItems(form: ActFLForm, includeScience: boolean, stored: Partial<ActFlAnswers>): ActFlItem[] {
  const answers = stored.answers ?? {}
  const flags = new Set(stored.flags ?? [])
  const seconds = stored.questionSeconds ?? {}
  const passages = new Map<string, ReviewPassage>()
  return actFlSlots(form, includeScience).map((slot, index): ActFlItem => {
    const { section, passage: p, question: q } = slot
    let passage: ReviewPassage | null = null
    if (p) {
      passage = passages.get(p.id) ?? actReviewPassage(p, section)
      passages.set(p.id, passage)
    }
    const picked = answers[q.id]
    const chosenIndex = typeof picked === 'number' ? picked : null
    const meta = ACT_FL_SKILL_META[q.skill]
    const optionExplanations = readOptionExplanations(q, q.options.length)
    const secs = seconds[q.id]
    // English underlined-portion items often have no real stem: say which portion.
    const stem = section === 'english' && typeof q.marker === 'number'
      ? `**Question ${slot.number}** (underlined portion ${q.marker})${q.question.trim() ? `: ${q.question}` : ''}`
      : q.question
    return {
      index,
      displayNumber: slot.number,
      questionId: q.id,
      section,
      skillCode: q.skill,
      questionKey: actFlQuestionKey(q, p),
      question: stem,
      options: [...q.options],
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      passage,
      chosenIndex,
      flagged: flags.has(q.id),
      durationMs: typeof secs === 'number' ? secs * 1000 : null,
      topicSlug: meta?.topicSlug,
      discipline: ACT_FL_SECTION_LABELS[section],
      ...(meta ? { skill: meta.label } : {}),
      ...(optionExplanations ? { optionExplanations } : {}),
      isCorrect: chosenIndex === q.correctIndex,
    }
  })
}

/** Score graded items (section seconds from the runner, when sent). */
export function scoreActFlItems(items: readonly ActFlItem[], includeScience: boolean, elapsed: Partial<Record<ActFLSection, number>> = {}): ActFlScore {
  return scoreActFullLength(
    items.map((i) => ({ section: i.section, skill: i.skillCode, isCorrect: i.isCorrect })),
    includeScience,
    elapsed,
  )
}

/** Strip a graded item to the shared ReviewItem shape. */
export function toReviewItem(it: ActFlItem): ReviewItem {
  return {
    index: it.index,
    questionKey: it.questionKey,
    question: it.question,
    options: it.options,
    correctIndex: it.correctIndex,
    explanation: it.explanation,
    passage: it.passage,
    chosenIndex: it.chosenIndex,
    flagged: it.flagged,
    durationMs: it.durationMs,
    topicSlug: it.topicSlug,
    discipline: it.discipline,
    ...(it.skill ? { skill: it.skill } : {}),
    ...(it.optionExplanations ? { optionExplanations: it.optionExplanations } : {}),
  }
}

/**
 * Review items for a stored sitting (DiagnosticTest.results), or null when the
 * results carry no answers or the form is no longer available.
 */
export async function actFlReviewItems(results: unknown, loadForm: (n: unknown) => Promise<ActFLForm | null> = getActForm): Promise<ReviewItem[] | null> {
  const r = asRecord(parseJson(results))
  if (!r || !asRecord(r.answers)) return null
  const form = await loadForm(r.form)
  if (!form) return null
  const includeScience = r.includeScience === true
  const stored = sanitizeActFlAnswers(form, includeScience, r)
  return buildActFlItems(form, includeScience, stored).map(toReviewItem)
}

/* ------------------------------------------------------------------ */
/*  Public (key-free) form for the runner                              */
/* ------------------------------------------------------------------ */

export interface ActFlPublicQuestion {
  id: string
  question: string
  options: string[]
  marker?: number
}

export interface ActFlPublicPassage {
  id: string
  title: string
  kind: string
  text: string
  questions: ActFlPublicQuestion[]
}

export interface ActFlPublicForm {
  form: number
  english: ActFlPublicPassage[]
  math: ActFlPublicQuestion[]
  reading: ActFlPublicPassage[]
  science: ActFlPublicPassage[]
}

const publicQuestion = (q: ActFLQuestion): ActFlPublicQuestion => ({
  id: q.id,
  question: q.question,
  options: [...q.options],
  ...(typeof q.marker === 'number' ? { marker: q.marker } : {}),
})
const publicPassage = (p: ActFLPassage): ActFlPublicPassage => ({
  id: p.id,
  title: p.title,
  kind: p.kind,
  text: p.text,
  questions: p.questions.map(publicQuestion),
})

/** What the browser gets before submitting: no keys, no explanations, no skills. */
export function publicActForm(form: ActFLForm): ActFlPublicForm {
  return {
    form: form.form,
    english: form.english.map(publicPassage),
    math: form.math.map(publicQuestion),
    reading: form.reading.map(publicPassage),
    science: form.science.map(publicPassage),
  }
}
