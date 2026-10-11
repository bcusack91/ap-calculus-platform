/**
 * MCAT question sources: rebuild the questions of a full-length exam or a
 * section-practice set from what the attempt stored, so the submit routes can
 * grade and key each answer, and the review page / mistake log can show it
 * again later. Server-side (imports the full banks); pure apart from the
 * memoized exit-pool answer keys.
 *
 *  - Full-length: DiagnosticTest.results = { form, answers, flags,
 *    passageSeconds, ... }. `answers` is keyed by fullLengthQuestionId (a
 *    discrete's id, else `<passageId>:<position>`), values are option indices
 *    (full-length options are shown in authored order).
 *  - Section practice: McatTestAttempt.answers = [{ questionIndex, selected,
 *    correct, ref }]. `ref` is `pool:<slug>:<id>` (exit-pool item) or
 *    `mcatpsg:<passageId>:<i>` (authored passage question); options are shown
 *    through shuffleOptions(options, correct, question) — test-generator.ts.
 */
import { questionKey } from '@/lib/question-key'
import { shuffleOptions } from '@/lib/shuffle-options'
import { getAnswerKey } from '@/lib/exit-quiz-regrade'
import { passageTopicSlug } from '@/lib/mcat-fulllength-recs'
import { CARS_PASSAGES, SECTION_PASSAGES } from '@/data/mcat/passages'
import { FULL_LENGTH_FORMS, type MCATFullLength } from '@/data/mcat/full-length'
import { fullLengthQuestionId, type MCATPassage, type MCATSection } from '@/data/mcat/types'
import { toTestPassage, topicSlugForPassage } from '@/data/mcat-practice/test-generator'
import { normalizeCarsSkill } from '@/lib/cars-skills'
import { readOptionExplanations, remapOptionExplanations } from '@/lib/option-explanations'
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

/**
 * The passage id an authored MCAT passage question is keyed under — the same
 * `authored-<id>` the diagnostic and section practice show, so a passage
 * question has one questionKey on every MCAT surface.
 */
const MCAT_SECTION_LABELS: Record<string, string> = { 'chem-phys': 'Chem/Phys', cars: 'CARS', 'bio-biochem': 'Bio/Biochem', 'psych-soc': 'Psych/Soc' }

export function mcatPassageKeyId(passageId: string): string {
  return `authored-${passageId}`
}

/* ------------------------------------------------------------------ */
/*  Full-length                                                        */
/* ------------------------------------------------------------------ */

/** Longest a student can spend on one passage that we record (one section's clock). */
const MAX_PASSAGE_SECONDS = 95 * 60

export interface FullLengthAnswers {
  /** fullLengthQuestionId → option index picked. */
  answers: Record<string, number>
  /** fullLengthQuestionIds flagged for review. */
  flags: string[]
  /** Passage ids flagged with the runner's per-passage flag. */
  passageFlags: string[]
  /** passage id → seconds spent on it. */
  passageSeconds: Record<string, number>
}

/** One graded full-length question (a ReviewItem plus what grading needs). */
export interface FullLengthItem extends ReviewItem {
  questionId: string
  section: MCATSection
  passageId: string
  isCorrect: boolean
}

export function fullLengthForm(form: unknown): MCATFullLength | null {
  return typeof form === 'number' ? FULL_LENGTH_FORMS.find((f) => f.form === form) ?? null : null
}

/**
 * Keep only answers / flags / timings that belong to this form: unknown ids
 * dropped, indices bounded by the question's options, seconds clamped. Never
 * throws on hostile input.
 */
export function sanitizeFullLengthAnswers(
  fl: MCATFullLength,
  raw: { answers?: unknown; flags?: unknown; passageFlags?: unknown; passageSeconds?: unknown },
): FullLengthAnswers {
  const optionCount = new Map<string, number>()
  const passageIds = new Set<string>()
  for (const p of fl.passages) {
    passageIds.add(p.id)
    p.questions.forEach((q, qi) => optionCount.set(fullLengthQuestionId(p, q, qi), q.options.length))
  }
  const answers: Record<string, number> = {}
  for (const [id, v] of Object.entries(asRecord(raw.answers) ?? {})) {
    const n = optionCount.get(id)
    if (n !== undefined && typeof v === 'number' && Number.isInteger(v) && v >= 0 && v < n) answers[id] = v
  }
  const ids = (v: unknown, known: (id: string) => boolean) =>
    Array.isArray(v) ? [...new Set(v.filter((x): x is string => typeof x === 'string' && known(x)))] : []
  const passageSeconds: Record<string, number> = {}
  for (const [id, v] of Object.entries(asRecord(raw.passageSeconds) ?? {})) {
    if (passageIds.has(id) && typeof v === 'number' && Number.isFinite(v) && v > 0) {
      passageSeconds[id] = Math.min(Math.round(v), MAX_PASSAGE_SECONDS)
    }
  }
  return {
    answers,
    flags: ids(raw.flags, (x) => optionCount.has(x)),
    passageFlags: ids(raw.passageFlags, (x) => passageIds.has(x)),
    passageSeconds,
  }
}

function fullLengthPassage(p: MCATPassage): ReviewPassage {
  return {
    id: p.id,
    title: p.title,
    body: p.passageText,
    ...(p.chart || p.figure ? { figure: { ...(p.chart ? { chart: p.chart } : {}), ...(p.figure ? { figureMarkdown: p.figure } : {}) } } : {}),
  }
}

/**
 * Every question of a full-length form in exam order, graded against the
 * stored answers. Unanswered questions are included (chosenIndex null), as
 * the score counts them wrong. Pure.
 */
export function buildFullLengthItems(fl: MCATFullLength, stored: Partial<FullLengthAnswers>): FullLengthItem[] {
  const answers = stored.answers ?? {}
  const flags = new Set(stored.flags ?? [])
  const seconds = stored.passageSeconds ?? {}
  const items: FullLengthItem[] = []
  for (const p of fl.passages) {
    const passage = fullLengthPassage(p)
    const topicSlug = passageTopicSlug(p)
    const perQuestionMs = typeof seconds[p.id] === 'number' && p.questions.length > 0
      ? Math.round((seconds[p.id] * 1000) / p.questions.length)
      : null
    p.questions.forEach((q, qi) => {
      const questionId = fullLengthQuestionId(p, q, qi)
      // Discretes carry their own id and stand alone: no passage in the key or the review.
      const isDiscrete = typeof q.id === 'string'
      const picked = answers[questionId]
      const chosenIndex = typeof picked === 'number' ? picked : null
      // CARS items carry a reasoning-skill tag; science tags are content labels, not skills.
      const skill = p.section === 'cars' ? normalizeCarsSkill(q.skill) : undefined
      // Full-length options are shown in authored order: no remap needed.
      const optionExplanations = readOptionExplanations(q, q.options.length)
      items.push({
        index: items.length,
        questionId,
        section: p.section,
        passageId: p.id,
        questionKey: questionKey({
          question: q.question,
          options: q.options,
          correctIndex: q.correctAnswer,
          passageId: isDiscrete ? null : mcatPassageKeyId(p.id),
        }),
        question: q.question,
        options: [...q.options],
        correctIndex: q.correctAnswer,
        explanation: q.explanation,
        passage: isDiscrete ? null : passage,
        chosenIndex,
        flagged: flags.has(questionId),
        durationMs: perQuestionMs,
        topicSlug,
        discipline: MCAT_SECTION_LABELS[p.section] ?? p.section,
        ...(skill ? { skill } : {}),
        ...(optionExplanations ? { optionExplanations } : {}),
        isCorrect: chosenIndex === q.correctAnswer,
      })
    })
  }
  return items
}

/** Per-section raw tallies (what scoreMCAT takes) from graded items. */
export function fullLengthRawBySection(items: Pick<FullLengthItem, 'section' | 'isCorrect'>[]): Record<MCATSection, { correct: number; total: number }> {
  const raw: Record<MCATSection, { correct: number; total: number }> = {
    'chem-phys': { correct: 0, total: 0 },
    cars: { correct: 0, total: 0 },
    'bio-biochem': { correct: 0, total: 0 },
    'psych-soc': { correct: 0, total: 0 },
  }
  for (const it of items) {
    raw[it.section].total++
    if (it.isCorrect) raw[it.section].correct++
  }
  return raw
}

/** The runner's "passageIndex:questionIndex" answer map, for recommendFromFullLength. */
export function fullLengthPositionalAnswers(fl: MCATFullLength, answers: Record<string, number>): Record<string, number> {
  const out: Record<string, number> = {}
  fl.passages.forEach((p, pi) => p.questions.forEach((q, qi) => {
    const a = answers[fullLengthQuestionId(p, q, qi)]
    if (typeof a === 'number') out[`${pi}:${qi}`] = a
  }))
  return out
}

/**
 * Review items for a stored full-length attempt (DiagnosticTest.results), or
 * null when the attempt predates per-question answers (only section tallies
 * were stored) or its form no longer exists.
 */
export function fullLengthReviewItems(results: unknown): ReviewItem[] | null {
  const r = asRecord(parseJson(results))
  if (!r || !asRecord(r.answers)) return null
  const fl = fullLengthForm(r.form)
  if (!fl) return null
  const stored = sanitizeFullLengthAnswers(fl, r)
  return buildFullLengthItems(fl, stored).map((it): ReviewItem => ({
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
  }))
}

/* ------------------------------------------------------------------ */
/*  Section practice                                                   */
/* ------------------------------------------------------------------ */

/** One section-practice question re-resolved from its ref, as it was shown. */
export interface McatPracticeItem {
  ref: string
  question: string
  /** Options in the order shown. */
  options: string[]
  /** Correct index in the shown order. */
  correctIndex: number
  explanation: string
  questionKey: string
  topicSlug: string
  passage: ReviewPassage | null
  /** CARS reasoning skill (authored CARS passages only). */
  skill?: string
  /** Per-option explanations in the SHOWN order, when authored. */
  optionExplanations?: string[]
}

let authoredById: Map<string, MCATPassage> | null = null
function authoredPassage(id: string): MCATPassage | undefined {
  if (!authoredById) {
    authoredById = new Map()
    for (const p of [...CARS_PASSAGES, ...Object.values(SECTION_PASSAGES).flat()]) authoredById.set(p.id, p)
  }
  return authoredById.get(id)
}

function practicePassage(p: MCATPassage): ReviewPassage {
  const dp = toTestPassage(p)
  const figure = dp.figureMarkdown || dp.dataTable || dp.figure
    ? { ...(dp.figureMarkdown ? { figureMarkdown: dp.figureMarkdown } : {}), ...(dp.dataTable ? { dataTable: dp.dataTable } : {}), ...(dp.figure ? { figure: dp.figure } : {}) }
    : undefined
  return { id: dp.id, title: dp.title, body: dp.body, ...(figure ? { figure } : {}) }
}

/**
 * Re-resolve one practice ref. Null when it is malformed, the passage or pool
 * item no longer exists, or the pool's ids are not stable (generative banks
 * re-randomize their items, so a past item can't be found again).
 */
export async function resolveMcatPracticeRef(ref: unknown): Promise<McatPracticeItem | null> {
  if (typeof ref !== 'string' || ref.length > 400) return null
  try {
    if (ref.startsWith('mcatpsg:')) {
      const rest = ref.slice('mcatpsg:'.length)
      const cut = rest.lastIndexOf(':')
      if (cut <= 0) return null
      const p = authoredPassage(rest.slice(0, cut))
      const qi = Number(rest.slice(cut + 1))
      const q = p && Number.isInteger(qi) ? p.questions[qi] : undefined
      if (!p || !q) return null
      const passage = practicePassage(p)
      const shown = shuffleOptions([...q.options], q.correctAnswer, q.question)
      const skill = p.section === 'cars' ? normalizeCarsSkill(q.skill) : undefined
      const optionExplanations = remapOptionExplanations(q.options, readOptionExplanations(q, q.options.length), shown.options)
      return {
        ref,
        question: q.question,
        options: shown.options,
        correctIndex: shown.correctIndex,
        explanation: q.explanation,
        questionKey: questionKey({ question: q.question, options: q.options, correctIndex: q.correctAnswer, passageId: passage.id }),
        topicSlug: topicSlugForPassage(p),
        passage,
        ...(skill ? { skill } : {}),
        ...(optionExplanations ? { optionExplanations } : {}),
      }
    }
    if (ref.startsWith('pool:')) {
      const rest = ref.slice('pool:'.length)
      const cut = rest.indexOf(':')
      if (cut <= 0) return null
      const slug = rest.slice(0, cut)
      const id = rest.slice(cut + 1)
      const entry = (await getAnswerKey(slug))?.get(id)
      if (!entry) return null
      const shown = shuffleOptions(entry.options, entry.correctIndex, entry.question)
      const optionExplanations = remapOptionExplanations(entry.options, readOptionExplanations(entry, entry.options.length), shown.options)
      return {
        ref,
        question: entry.question,
        options: shown.options,
        correctIndex: shown.correctIndex,
        explanation: entry.explanation,
        questionKey: questionKey({ question: entry.question, options: entry.options, correctIndex: entry.correctIndex }),
        topicSlug: entry.category || slug,
        passage: null,
        ...(optionExplanations ? { optionExplanations } : {}),
      }
    }
  } catch {
    return null
  }
  return null
}

/** Resolve every ref (aligned with the input); pool keys are memoized per slug. */
export function resolveMcatPracticeRefs(refs: unknown[]): Promise<(McatPracticeItem | null)[]> {
  return Promise.all(refs.map((r) => resolveMcatPracticeRef(r)))
}

/** A stored practice answer: what the page submits per question. */
export interface McatPracticeAnswer {
  questionIndex?: unknown
  selected?: unknown
  correct?: unknown
  ref?: unknown
}

/** The stored answers list in question order (malformed entries dropped). */
export function practiceAnswerList(answers: unknown): McatPracticeAnswer[] {
  const list = parseJson(answers)
  return Array.isArray(list) ? list.filter((a): a is McatPracticeAnswer => !!asRecord(a)) : []
}

/**
 * Review items for a stored section-practice attempt (McatTestAttempt.answers),
 * aligned with the stored answers; null where the question can't be rebuilt
 * (no ref — attempts before refs were stored — or an unresolvable ref).
 */
export async function mcatPracticeReviewItems(
  answers: unknown,
  opts: { timeSpentSeconds?: number } = {},
): Promise<(ReviewItem | null)[]> {
  const list = practiceAnswerList(answers)
  const resolved = await resolveMcatPracticeRefs(list.map((a) => a.ref))
  const perQuestionMs = opts.timeSpentSeconds && opts.timeSpentSeconds > 0 && list.length
    ? Math.round((opts.timeSpentSeconds * 1000) / list.length)
    : null
  return list.map((a, i) => {
    const item = resolved[i]
    if (!item) return null
    const chosen = typeof a.selected === 'number' && Number.isInteger(a.selected) && a.selected >= 0 ? a.selected : null
    return {
      index: i,
      questionKey: item.questionKey,
      question: item.question,
      options: item.options,
      correctIndex: item.correctIndex,
      explanation: item.explanation,
      passage: item.passage,
      chosenIndex: chosen,
      flagged: false,
      durationMs: perQuestionMs,
      topicSlug: item.topicSlug,
      ...(item.skill ? { skill: item.skill } : {}),
      ...(item.optionExplanations ? { optionExplanations: item.optionExplanations } : {}),
    }
  })
}

/* ------------------------------------------------------------------ */
/*  CARS skill lookup by question key                                  */
/* ------------------------------------------------------------------ */

let carsSkillByKey: Map<string, string> | null = null

/**
 * The CARS reasoning skill of an authored CARS question, by its questionKey
 * (full-length forms and the CARS passage library share the
 * `authored-<passageId>` keying, so one key finds the skill wherever the
 * question was answered — mistake log, question bank). Memoized.
 */
export function carsSkillForKey(key: string): string | undefined {
  if (!carsSkillByKey) {
    const map = new Map<string, string>()
    const add = (p: MCATPassage) => {
      if (p.section !== 'cars') return
      for (const q of p.questions) {
        const skill = normalizeCarsSkill(q.skill)
        if (!skill) continue
        map.set(questionKey({ question: q.question, options: q.options, correctIndex: q.correctAnswer, passageId: mcatPassageKeyId(p.id) }), skill)
      }
    }
    for (const fl of FULL_LENGTH_FORMS) fl.passages.forEach(add)
    CARS_PASSAGES.forEach(add)
    carsSkillByKey = map
  }
  return carsSkillByKey.get(key)
}
