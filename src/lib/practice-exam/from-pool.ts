import type { MCQItem } from '@/components/FullLengthPracticeExam'
import type { UnitDef, UnitPoolQuestion } from '@/lib/unit-tests/engine'

/**
 * Assemble a full-length practice exam from a course's unit-test question pool.
 *
 * The AP courses each ship a hand-written 40-question exam. Courses whose
 * content lives in a topic-tagged bank (Algebra 1, Geometry, Precalculus) don't
 * need that duplication — a representative exam can be composed from the same
 * pool the unit tests use.
 *
 * Selection is DETERMINISTIC (no RNG): questions are allocated across units in
 * proportion to pool depth, then sampled with an even stride within each unit so
 * the exam spans the whole unit rather than clustering on its first few (easier)
 * questions. Same input always yields the same exam, which matters because the
 * page is statically rendered and students may compare answers.
 */
export function buildExamMcqs(
  pool: UnitPoolQuestion[],
  units: UnitDef[],
  total: number
): MCQItem[] {
  const byUnit = units.map((u) => ({
    unit: u,
    questions: pool.filter((q) => q.domain === u.id),
  })).filter((g) => g.questions.length > 0)

  const grandTotal = byUnit.reduce((s, g) => s + g.questions.length, 0)
  if (grandTotal === 0) return []

  // Largest-remainder allocation so the counts sum exactly to `total`.
  const exact = byUnit.map((g) => (g.questions.length / grandTotal) * total)
  const alloc = exact.map((n) => Math.max(1, Math.floor(n)))
  let remaining = total - alloc.reduce((a, b) => a + b, 0)
  const order = exact
    .map((n, i) => ({ i, frac: n - Math.floor(n) }))
    .sort((a, b) => b.frac - a.frac)
  let k = 0
  while (remaining > 0 && order.length > 0) {
    alloc[order[k % order.length].i]++
    remaining--
    k++
  }
  // If rounding overshot (many tiny units each forced to 1), trim the largest.
  while (remaining < 0) {
    const biggest = alloc.indexOf(Math.max(...alloc))
    if (alloc[biggest] <= 1) break
    alloc[biggest]--
    remaining++
  }

  const out: MCQItem[] = []
  byUnit.forEach((g, gi) => {
    const want = Math.min(alloc[gi], g.questions.length)
    // Evenly spaced DISTINCT indices: floor(n * len / want) is strictly
    // increasing for n < want <= len, so a unit can never repeat a question
    // (a modulo stride wraps around and would).
    for (let n = 0; n < want; n++) {
      const q = g.questions[Math.floor((n * g.questions.length) / want)]
      out.push({
        type: 'mcq',
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        topic: q.topicSlug,
      })
    }
  })
  return out
}
