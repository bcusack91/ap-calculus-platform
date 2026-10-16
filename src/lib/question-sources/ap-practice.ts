import type { ReviewFrqItem, ReviewFrqRubricLine, ReviewItem } from './types'
import { readOptionExplanations, remapOptionExplanations } from '@/lib/option-explanations'

/**
 * Free-response items of a stored AP practice exam (results.review.frq,
 * written by gradeApExam in src/lib/ap-practice-grading.ts). Multiple choice
 * in the same attempt goes through diagnosticReviewItems. Tolerant of junk:
 * anything malformed is dropped, and attempts saved before FRQ capture
 * (Oct 2026) simply have none.
 */

type Rec = Record<string, unknown>
const asRec = (v: unknown): Rec | null => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : null)
const str = (v: unknown) => (typeof v === 'string' ? v : '')
const int = (v: unknown) => (Number.isInteger(v) && (v as number) >= 0 ? (v as number) : null)
const TYPES = new Set(['saq', 'dbq', 'leq'])

function parse(results: unknown): Rec | null {
  if (typeof results === 'string') {
    try {
      return asRec(JSON.parse(results))
    } catch {
      return null
    }
  }
  return asRec(results)
}

function rubricLine(raw: unknown): ReviewFrqRubricLine | null {
  const r = asRec(raw)
  if (!r || !str(r.label)) return null
  return { id: str(r.id), label: str(r.label), description: str(r.description), earned: r.earned === true }
}

export function apPracticeFrqItems(results: unknown): ReviewFrqItem[] {
  const frq = asRec(parse(results)?.review)?.frq
  if (!Array.isArray(frq)) return []
  const out: ReviewFrqItem[] = []
  for (const raw of frq) {
    const f = asRec(raw)
    if (!f || !TYPES.has(str(f.type))) continue
    const s = int(f.s)
    const i = int(f.i)
    const possible = int(f.possible)
    if (s === null || i === null || possible === null) continue
    const parts = (Array.isArray(f.parts) ? f.parts : [])
      .map((p) => asRec(p))
      .filter((p): p is Rec => !!p)
      .map((p) => ({
        label: str(p.label),
        question: str(p.question),
        response: str(p.response),
        rubric: (Array.isArray(p.rubric) ? p.rubric : []).map(rubricLine).filter((x): x is ReviewFrqRubricLine => !!x),
      }))
    out.push({
      s,
      i,
      section: str(f.section),
      number: int(f.number) ?? i + 1,
      type: str(f.type) as ReviewFrqItem['type'],
      title: str(f.title) || `Free-response question ${i + 1}`,
      prompt: str(f.prompt),
      parts,
      earned: Math.min(possible, int(f.earned) ?? 0),
      possible,
      selfScored: f.selfScored === true,
      ...(str(f.sampleResponse) ? { sampleResponse: str(f.sampleResponse) } : {}),
    })
  }
  return out
}

/** "unit-3-intermolecular-forces" → "Unit 3: Intermolecular Forces" (practice-exam MCQs store the CED unit as their domain). */
export function apUnitLabel(domain: string): string {
  const m = /^unit-(\d+)-(.+)$/.exec(domain)
  if (!m) return domain
  const words = m[2].split('-').map((w) => (['and', 'of', 'the', 'in', 'to'].includes(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
  return `Unit ${m[1]}: ${words.join(' ')}`
}

type AuthoredMcq = { type: string; question?: string; options?: string[]; optionExplanations?: unknown }
const normQ = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase()

/**
 * Multiple-choice review items of an AP practice exam, given the form's
 * current config: each item gets its unit label (for the Report tab) and the
 * authored per-option explanations re-aligned to the order the student saw.
 * Items are matched to the form by question text; an item the form no longer
 * has, or whose options changed, keeps no option explanations.
 */
export function withApPracticeExtras(items: (ReviewItem | null)[], sections: { items: AuthoredMcq[] }[] | null | undefined): (ReviewItem | null)[] {
  const byQuestion = new Map<string, AuthoredMcq>()
  for (const sec of sections ?? []) for (const it of sec.items) if (it.type === 'mcq' && it.question) byQuestion.set(normQ(it.question), it)
  return items.map((item) => {
    if (!item) return item
    const out: ReviewItem = { ...item, ...(item.discipline ? { discipline: apUnitLabel(item.discipline) } : {}) }
    const authored = byQuestion.get(normQ(item.question))
    const options = authored?.options ?? []
    const remapped = remapOptionExplanations(options, readOptionExplanations(authored, options.length), item.options)
    return remapped ? { ...out, optionExplanations: remapped } : out
  })
}
