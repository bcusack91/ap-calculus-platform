/**
 * Exit quizzes for the SAT 700-800 advanced-track topics.
 *
 * Advanced topics (`<base-slug>-advanced`) assess straight from the hard item
 * tier — the same 700-800 pools that power the hard-track diagnostic modules —
 * so no separate assessment bank is needed. The base slug's tier is resolved
 * by stripping the `-advanced` suffix.
 */
import { hardTierFor } from './sat-hard-tier'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const base = (topicSlug ?? '').replace(/-advanced$/, '')
  const pool = hardTierFor(base)
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    ...q,
    id: `sat-adv-${base}-${i}`,
    category: topicSlug ?? base,
  }))
}
