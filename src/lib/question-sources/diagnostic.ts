import { questionKey } from '@/lib/question-key'
import type { ReviewItem } from './types'

/**
 * Review items for a non-SAT diagnostic (MCAT, ACT, …) from the copy every
 * diagnostic page stores at submit: `results.review = { questions, answers,
 * domainNames }`. MCAT passage questions carry their passage object, and
 * figure questions their chart/table, which the review renders.
 */

type Rec = Record<string, unknown>
const asRecord = (v: unknown): Rec | null => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : null)
const str = (v: unknown) => (typeof v === 'string' ? v : '')

function parse(results: unknown): Rec | null {
  if (typeof results === 'string') {
    try {
      return asRecord(JSON.parse(results))
    } catch {
      return null
    }
  }
  return asRecord(results)
}

export function diagnosticReviewItems(results: unknown): ReviewItem[] {
  const review = asRecord(parse(results)?.review)
  const questions = Array.isArray(review?.questions) ? review.questions : []
  const answers = Array.isArray(review?.answers) ? review.answers : []
  const domainNames = asRecord(review?.domainNames) ?? {}
  const out: ReviewItem[] = []
  questions.forEach((raw, i) => {
    const q = asRecord(raw)
    if (!q || q.gridIn) return
    const options = Array.isArray(q.options) ? q.options.map((o) => String(o)) : []
    const correctIndex = typeof q.correctAnswer === 'number' ? q.correctAnswer : typeof q.correctIndex === 'number' ? q.correctIndex : -1
    if (!str(q.question) || options.length < 2 || correctIndex < 0) return
    const p = asRecord(q.passage)
    const visual = asRecord(q.visual)
    const passageId = p ? str(p.id) : str(q.passageId)
    const chosen = answers[i]
    const domain = str(q.domain)
    out.push({
      index: i,
      questionKey: questionKey({ question: str(q.question), options, correctIndex, passageId: passageId || null }),
      question: str(q.question),
      options,
      correctIndex,
      explanation: str(q.explanation),
      passage: p
        ? { id: passageId, title: str(p.title), body: str(p.body), figure: { figureMarkdown: p.figureMarkdown, dataTable: p.dataTable, figure: p.figure } }
        : visual
          ? { id: '', title: str(asRecord(visual.study)?.title), body: str(asRecord(visual.study)?.body), figure: { dataTable: visual.dataTable, figure: visual.figure } }
          : str(q.passage)
            ? { id: passageId, title: '', body: str(q.passage) }
            : null,
      chosenIndex: typeof chosen === 'number' && chosen >= 0 ? chosen : null,
      flagged: false,
      topicSlug: str(q.topicSlug) || str(q.sourceSlug) || undefined,
      discipline: domain ? str(domainNames[domain]) || domain : undefined,
    })
  })
  return out
}
