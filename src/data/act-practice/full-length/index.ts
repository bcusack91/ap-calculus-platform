/**
 * Registry of the full-length Enhanced ACT practice forms (server-side).
 *
 * Forms 1-3 are authored as four section files each (fl<N>-<section>.ts,
 * exporting ACT_FL<N>_ENGLISH / _MATH / _READING / _SCIENCE). The generated
 * manifest (forms.generated.ts, rebuilt by scripts/build-act-fl-registry.ts)
 * lists lazy loaders for whichever files exist; this module loads them and
 * offers a form only when ALL FOUR sections are present and pass the
 * blueprint checks (English 5×10, Math 45, Reading 4×9, Science 6 passages /
 * 40 questions, every question well-formed, ids unique). A form that fails is
 * "coming soon", never half-served — so forms appear on their own as the
 * writers finish them.
 *
 * Loaded forms are memoized per server instance; unavailable ones are
 * re-checked on the next call.
 */
import { ACT_FL_BLUEPRINT, type ActFLForm, type ActFLPassage, type ActFLQuestion, type ActFLSection } from './types'
import type { ActFlLoaderMap } from './loader-types'
import { ACT_FL_LOADERS } from './forms.generated'
import { ACT_FL_SKILL_META, isActFlSkill } from '@/lib/act-fl-scoring'
import { englishMarkerNumbers } from '@/lib/act-english-markers'

export const ACT_FL_FORM_NUMBERS = [1, 2, 3] as const
export type ActFlFormNumber = (typeof ACT_FL_FORM_NUMBERS)[number]

export function isActFlFormNumber(v: unknown): v is ActFlFormNumber {
  return typeof v === 'number' && (ACT_FL_FORM_NUMBERS as readonly number[]).includes(v)
}

/** Blueprint passage shapes. Science: 6 passages, 40 questions in any split. */
const PASSAGE_SHAPE: Record<'english' | 'reading' | 'science', { passages: number; perPassage?: number }> = {
  english: { passages: 5, perPassage: 10 },
  reading: { passages: 4, perPassage: 9 },
  science: { passages: 6 },
}

const SECTIONS: readonly ActFLSection[] = ['english', 'math', 'reading', 'science']

export interface ActFormCheck {
  /** Blocking problems: the form is not offered while any remain. */
  errors: string[]
  /** Non-blocking (e.g. an English question's marker missing from its passage). */
  warnings: string[]
}

function checkQuestion(q: ActFLQuestion, where: string, section: ActFLSection, ids: Set<string>, errors: string[], warnings: string[]) {
  if (!q || typeof q !== 'object') {
    errors.push(`${where}: not a question`)
    return
  }
  if (typeof q.id !== 'string' || !q.id.trim()) errors.push(`${where}: missing id`)
  else if (ids.has(q.id)) errors.push(`${where}: duplicate id ${q.id}`)
  else ids.add(q.id)
  if (typeof q.question !== 'string') errors.push(`${where}: question is not text`)
  if (!Array.isArray(q.options) || q.options.length !== 4 || !q.options.every((o) => typeof o === 'string' && o.trim())) {
    errors.push(`${where}: needs exactly 4 non-empty options`)
  }
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3) errors.push(`${where}: correctIndex must be 0-3`)
  if (!isActFlSkill(q.skill)) errors.push(`${where}: unknown skill ${String(q.skill)}`)
  else if (ACT_FL_SKILL_META[q.skill].section !== section) warnings.push(`${where}: skill ${q.skill} belongs to ${ACT_FL_SKILL_META[q.skill].section}`)
  if (typeof q.explanation !== 'string' || !q.explanation.trim()) warnings.push(`${where}: no explanation`)
  if (!Array.isArray(q.optionExplanations) || q.optionExplanations.length !== 4) warnings.push(`${where}: optionExplanations should have 4 entries`)
}

function checkPassages(list: unknown, section: 'english' | 'reading' | 'science', ids: Set<string>, errors: string[], warnings: string[]) {
  const shape = PASSAGE_SHAPE[section]
  const want = ACT_FL_BLUEPRINT[section].questions
  if (!Array.isArray(list)) {
    errors.push(`${section}: not a passage list`)
    return
  }
  if (list.length !== shape.passages) errors.push(`${section}: ${list.length} passages (need ${shape.passages})`)
  let count = 0
  list.forEach((p: ActFLPassage, pi) => {
    const where = `${section} passage ${pi + 1}`
    if (!p || typeof p !== 'object' || !Array.isArray(p.questions)) {
      errors.push(`${where}: malformed`)
      return
    }
    if (typeof p.id !== 'string' || !p.id.trim()) errors.push(`${where}: missing id`)
    else if (ids.has(p.id)) errors.push(`${where}: duplicate id ${p.id}`)
    else ids.add(p.id)
    if (typeof p.text !== 'string' || !p.text.trim()) errors.push(`${where}: no text`)
    if (shape.perPassage && p.questions.length !== shape.perPassage) {
      errors.push(`${where}: ${p.questions.length} questions (need ${shape.perPassage})`)
    }
    const markers = section === 'english' && typeof p.text === 'string' ? new Set(englishMarkerNumbers(p.text)) : null
    p.questions.forEach((q, qi) => {
      checkQuestion(q, `${where} q${qi + 1}`, section, ids, errors, warnings)
      if (markers && typeof q?.marker === 'number' && !markers.has(q.marker)) {
        warnings.push(`${where} q${qi + 1}: marker {{${q.marker}}} not in the passage`)
      }
    })
    count += p.questions.length
  })
  if (count !== want) errors.push(`${section}: ${count} questions (need ${want})`)
}

/** Blueprint + well-formedness checks for one assembled form. Pure. */
export function checkActForm(form: Partial<ActFLForm>): ActFormCheck {
  const errors: string[] = []
  const warnings: string[] = []
  const ids = new Set<string>()
  checkPassages(form.english, 'english', ids, errors, warnings)
  if (!Array.isArray(form.math)) errors.push('math: not a question list')
  else {
    if (form.math.length !== ACT_FL_BLUEPRINT.math.questions) errors.push(`math: ${form.math.length} questions (need ${ACT_FL_BLUEPRINT.math.questions})`)
    form.math.forEach((q, i) => checkQuestion(q, `math q${i + 1}`, 'math', ids, errors, warnings))
  }
  checkPassages(form.reading, 'reading', ids, errors, warnings)
  checkPassages(form.science, 'science', ids, errors, warnings)
  return { errors, warnings }
}

export interface ActFormLoad {
  form: ActFLForm | null
  /** Sections whose file is missing or whose export isn't there yet. */
  missing: ActFLSection[]
  errors: string[]
  warnings: string[]
}

const exportName = (n: number, s: ActFLSection) => `ACT_FL${n}_${s.toUpperCase()}`

/** Load and check one form from a loader map (the generated one, or a test's). */
export async function loadActFormFrom(loaders: ActFlLoaderMap, n: number): Promise<ActFormLoad> {
  const entry = loaders[n] ?? {}
  const parts: Partial<Record<ActFLSection, unknown>> = {}
  const missing: ActFLSection[] = []
  await Promise.all(
    SECTIONS.map(async (s) => {
      const load = entry[s]
      if (!load) {
        missing.push(s)
        return
      }
      try {
        const mod = await load()
        const value = mod[exportName(n, s)]
        if (value === undefined) missing.push(s)
        else parts[s] = value
      } catch {
        missing.push(s)
      }
    }),
  )
  if (missing.length) {
    return { form: null, missing: SECTIONS.filter((s) => missing.includes(s)), errors: [], warnings: [] }
  }
  const candidate = { form: n, english: parts.english, math: parts.math, reading: parts.reading, science: parts.science } as ActFLForm
  const { errors, warnings } = checkActForm(candidate)
  return { form: errors.length ? null : candidate, missing: [], errors, warnings }
}

const loaded = new Map<number, ActFLForm>()

/** A complete, checked form, or null while it is unavailable. */
export async function getActForm(n: unknown): Promise<ActFLForm | null> {
  if (!isActFlFormNumber(n)) return null
  const hit = loaded.get(n)
  if (hit) return hit
  const res = await loadActFormFrom(ACT_FL_LOADERS, n)
  if (res.form) loaded.set(n, res.form)
  else if (res.errors.length) console.warn(`[act-full-length] form ${n} not offered:`, res.errors.slice(0, 5))
  return res.form
}

export interface ActFormStatus {
  form: ActFlFormNumber
  available: boolean
}

/** Which of forms 1-3 can be taken right now. */
export async function actFormAvailability(): Promise<ActFormStatus[]> {
  return Promise.all(ACT_FL_FORM_NUMBERS.map(async (form) => ({ form, available: (await getActForm(form)) !== null })))
}
