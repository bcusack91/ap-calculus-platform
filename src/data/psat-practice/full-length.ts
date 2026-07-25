import type { MCQItem } from '@/components/FullLengthPracticeExam'
import { PSAT_UNIT_TESTS_CONFIG } from '@/data/unit-tests/psat'
import { RW_MCQS as RW_CORE, MATH_MCQS as MATH_CORE } from './mcqs'

/**
 * Full-length PSAT/NMSQT practice exam — 54 Reading & Writing + 44 Math,
 * matching the real digital test rather than the earlier 42-question
 * scaled-down version.
 *
 * The original hand-written 42 lead each section (they are the most
 * passage-like items); the remainder is drawn deterministically from the
 * domain-tagged unit-test pool, spread evenly across that section's four
 * College Board domains so the mix mirrors the real blueprint instead of
 * clustering on whichever domain happens to sort first.
 */
const RW_DOMAINS = ['information-ideas', 'craft-structure', 'expression-ideas', 'standard-conventions']
const MATH_DOMAINS = ['algebra-psat', 'advanced-math-psat', 'problem-solving-data', 'geometry-trig-psat']

function fill(domains: string[], already: MCQItem[], target: number): MCQItem[] {
  const taken = new Set(already.map(q => q.question))
  const byDomain = domains.map(d =>
    PSAT_UNIT_TESTS_CONFIG.pool.filter(q => q.domain === d && !taken.has(q.question))
  )
  const out: MCQItem[] = []
  // Round-robin across domains so the section stays balanced at any length.
  for (let i = 0; out.length < target; i++) {
    let progressed = false
    for (const list of byDomain) {
      if (out.length >= target) break
      const q = list[i]
      if (!q) continue
      progressed = true
      out.push({
        type: 'mcq',
        topic: q.topicSlug,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
      })
    }
    if (!progressed) break
  }
  return out
}

export const RW_FULL: MCQItem[] = [...RW_CORE, ...fill(RW_DOMAINS, RW_CORE, 54 - RW_CORE.length)]
export const MATH_FULL: MCQItem[] = [...MATH_CORE, ...fill(MATH_DOMAINS, MATH_CORE, 44 - MATH_CORE.length)]
