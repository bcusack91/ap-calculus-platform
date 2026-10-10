import {
  analyzePerformance,
  buildSatForm,
  module2Route,
  routedModule2,
  type SatRoute,
  type SatTestFormat,
  type SATTestQuestion,
  type SATTestSection,
} from '@/data/sat-practice/test-generator'
import { gradeGridIn } from '@/data/sat-grid-in'
import { satSectionScaledRouted } from '@/lib/sat-scoring'

/**
 * Server-side grading of an SAT practice test (full or mini).
 *
 * The browser used to compute the scores and the server only clamped them.
 * Now the server rebuilds the exact form with the shared buildSatForm /
 * routedModule2 (the same builders the runner uses), grades every answer by
 * question id, works out which Module 2 the student earned and actually sat,
 * and scores each section on that route's curve. Nothing the client says
 * about correctness or scores is trusted.
 */

/** One answer as the runner sends it. */
export interface SatResponse {
  /** Position of the module in the form's sections. */
  moduleIndex: number
  questionId: string
  /** Option picked, in the order shown; null = skipped (or a grid-in). */
  selectedIndex: number | null
  /** Typed grid-in answer. */
  textValue: string | null
  flagged: boolean
  seconds: number | null
}

/** One graded question, in stored order (module by module, as served). */
export interface SatGradedItem {
  itemIndex: number
  moduleIndex: number
  question: SATTestQuestion
  selectedIndex: number | null
  textValue: string | null
  flagged: boolean
  seconds: number | null
  correct: boolean
}

/** What a submitted Module 2 matched when the server rebuilt it. */
export type Module2Match = 'routed' | 'unrouted' | 'other-route' | 'mismatch'

export interface SatSectionGrade {
  m1Correct: number
  m1Total: number
  m2Correct: number
  m2Total: number
  tier: SatRoute | null
  /** Absent on a mini test (no Module 2). */
  module2?: Module2Match
  scaled: number
}

export interface SatPracticeGrade {
  format: SatTestFormat
  rw: SatSectionGrade
  math: SatSectionGrade
  rwScore: number
  mathScore: number
  totalScore: number
  items: SatGradedItem[]
  weakAreas: string[]
  strengths: string[]
}

/** A full test has 98 questions, so a payload never needs more than this. */
const MAX_RESPONSES = 200

function int(v: unknown): number | null {
  return typeof v === 'number' && Number.isInteger(v) ? v : null
}

/**
 * Normalise the submitted answers. Accepts the current `responses` list and
 * the legacy `answers` shape (sections of { questionId, selectedIndex,
 * textValue }, identified by sectionId) that an older cached bundle may send.
 */
export function normalizeSatResponses(
  body: { responses?: unknown; answers?: unknown },
  sectionIds: string[],
): SatResponse[] {
  const out: SatResponse[] = []
  const push = (raw: unknown, moduleIndex: number | null) => {
    if (!raw || typeof raw !== 'object' || moduleIndex === null || out.length >= MAX_RESPONSES) return
    const r = raw as Record<string, unknown>
    if (typeof r.questionId !== 'string' || !r.questionId) return
    const seconds = typeof r.seconds === 'number' && Number.isFinite(r.seconds) && r.seconds >= 0 ? r.seconds : null
    out.push({
      moduleIndex,
      questionId: r.questionId.slice(0, 200),
      selectedIndex: int(r.selectedIndex),
      textValue: typeof r.textValue === 'string' ? r.textValue.slice(0, 20) : null,
      flagged: r.flagged === true,
      seconds: seconds === null ? null : Math.min(seconds, 4 * 60 * 60),
    })
  }
  if (Array.isArray(body.responses)) {
    for (const raw of body.responses) {
      const m = int((raw as Record<string, unknown> | null)?.moduleIndex)
      push(raw, m !== null && m >= 0 && m < sectionIds.length ? m : null)
    }
  } else if (Array.isArray(body.answers)) {
    for (const sec of body.answers) {
      if (!sec || typeof sec !== 'object') continue
      const s = sec as Record<string, unknown>
      const idx = sectionIds.indexOf(String(s.sectionId))
      if (Array.isArray(s.answers)) for (const raw of s.answers) push(raw, idx >= 0 ? idx : null)
    }
  }
  return out
}

function gradeOne(q: SATTestQuestion, r: SatResponse | undefined): Omit<SatGradedItem, 'itemIndex' | 'moduleIndex' | 'question'> {
  if (q.gridIn) {
    const textValue = r?.textValue?.trim() ? r.textValue.trim() : null
    return {
      selectedIndex: null,
      textValue,
      flagged: !!r?.flagged,
      seconds: r?.seconds ?? null,
      correct: textValue !== null && gradeGridIn(q.gridIn, textValue),
    }
  }
  const sel = r?.selectedIndex
  const selectedIndex = typeof sel === 'number' && sel >= 0 && sel < q.options.length ? sel : null
  return {
    selectedIndex,
    textValue: null,
    flagged: !!r?.flagged,
    seconds: r?.seconds ?? null,
    correct: selectedIndex !== null && selectedIndex === q.correctIndex,
  }
}

function sameIds(section: SATTestSection, ids: Set<string>): boolean {
  return section.questions.length === ids.size && section.questions.every((q) => ids.has(q.id))
}

const other = (r: SatRoute): SatRoute => (r === 'harder' ? 'easier' : 'harder')

export async function gradeSatPractice(input: {
  testNumber: number
  format: SatTestFormat
  responses: SatResponse[]
}): Promise<SatPracticeGrade> {
  const { testNumber, format } = input
  const base = await buildSatForm(testNumber, format)

  const byModule = new Map<number, Map<string, SatResponse>>()
  for (const r of input.responses) {
    const m = byModule.get(r.moduleIndex) ?? new Map<string, SatResponse>()
    if (!m.has(r.questionId)) m.set(r.questionId, r)
    byModule.set(r.moduleIndex, m)
  }

  // Module 1s first (they decide the routes), then each Module 2 as served.
  const served: SATTestSection[] = [...base.sections]
  const graded = new Map<number, Omit<SatGradedItem, 'itemIndex'>[]>()
  const gradeModule = (idx: number, section: SATTestSection) => {
    const responses = byModule.get(idx) ?? new Map<string, SatResponse>()
    graded.set(
      idx,
      section.questions.map((q) => ({ moduleIndex: idx, question: q, ...gradeOne(q, responses.get(q.id)) })),
    )
  }
  const correctIn = (idx: number) => (graded.get(idx) ?? []).filter((g) => g.correct).length

  base.sections.forEach((s, idx) => {
    if (s.moduleNum !== 2) gradeModule(idx, s)
  })

  const sectionGrade = async (subject: 'reading-writing' | 'math'): Promise<SatSectionGrade> => {
    const m1Idx = base.sections.findIndex((s) => s.section === subject && s.moduleNum === 1)
    const m2Idx = base.sections.findIndex((s) => s.section === subject && s.moduleNum === 2)
    const m1Total = m1Idx >= 0 ? base.sections[m1Idx].questions.length : 0
    const m1Correct = m1Idx >= 0 ? correctIn(m1Idx) : 0
    if (m2Idx < 0) {
      return {
        m1Correct,
        m1Total,
        m2Correct: 0,
        m2Total: 0,
        tier: null,
        scaled: m1Total > 0 ? satSectionScaledRouted({ m1Correct, m1Total, m2Correct: 0, m2Total: 0, tier: null }) : 200,
      }
    }

    // Which Module 2 did the student actually sit? The one Module 1 earned,
    // unless the submitted ids say otherwise: the pre-built module means the
    // module started before the routed form was swapped in (scored unrouted).
    const ids = new Set(byModule.get(m2Idx)?.keys() ?? [])
    const route = module2Route(m1Correct, m1Total)
    const routed = await routedModule2(base, m2Idx, route)
    let section = routed
    let tier: SatRoute | null = route
    let match: Module2Match = 'routed'
    if (!sameIds(routed, ids)) {
      if (sameIds(base.sections[m2Idx], ids)) {
        section = base.sections[m2Idx]
        tier = null
        match = 'unrouted'
      } else {
        const alt = await routedModule2(base, m2Idx, other(route))
        if (sameIds(alt, ids)) {
          section = alt
          tier = other(route)
          match = 'other-route'
        } else {
          // Unknown ids (a tampered or broken client): grade against the
          // module Module 1 earned; answers that aren't on it score nothing.
          match = 'mismatch'
        }
      }
    }
    served[m2Idx] = section
    gradeModule(m2Idx, section)
    const m2Total = section.questions.length
    const m2Correct = correctIn(m2Idx)
    return {
      m1Correct,
      m1Total,
      m2Correct,
      m2Total,
      tier,
      module2: match,
      scaled: satSectionScaledRouted({ m1Correct, m1Total, m2Correct, m2Total, tier }),
    }
  }

  const rw = await sectionGrade('reading-writing')
  const math = await sectionGrade('math')

  let itemIndex = 0
  const items: SatGradedItem[] = served.flatMap((_, idx) => (graded.get(idx) ?? []).map((g) => ({ ...g, itemIndex: itemIndex++ })))

  const { weakAreas, strengths } = analyzePerformance(
    items
      .filter((i) => i.selectedIndex !== null || i.textValue !== null)
      .map((i) => ({ question: i.question, selectedIndex: i.selectedIndex ?? -1, correct: i.correct })),
  )

  return {
    format,
    rw,
    math,
    rwScore: rw.scaled,
    mathScore: math.scaled,
    totalScore: rw.scaled + math.scaled,
    items,
    weakAreas,
    strengths,
  }
}

/** The per-question answers stored on SatTestAttempt.answers, in item order. */
export interface StoredSatAnswer {
  itemIndex: number
  moduleIndex: number
  questionId: string
  selectedIndex: number | null
  textValue: string | null
  flagged: boolean
  seconds: number | null
  correct: boolean
}

export function storedSatAnswers(items: SatGradedItem[]): StoredSatAnswer[] {
  return items.map((i) => ({
    itemIndex: i.itemIndex,
    moduleIndex: i.moduleIndex,
    questionId: i.question.id,
    selectedIndex: i.selectedIndex,
    textValue: i.textValue,
    flagged: i.flagged,
    seconds: i.seconds === null ? null : Math.round(i.seconds),
    correct: i.correct,
  }))
}
