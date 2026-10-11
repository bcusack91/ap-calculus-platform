import type { QuestionRow } from '@/lib/study-tracking'
import { questionKey } from '@/lib/question-key'
import { SAT_DOMAIN_LABELS } from '@/data/sat-practice/test-generator'
import type { SatGradedItem } from '@/lib/sat-practice-grading'
import { chosenOptionKey } from '@/lib/question-activity-rows'

/**
 * QuestionActivity rows for one SAT practice test: one PRACTICE row per
 * question, graded by the server (sat-practice-grading.ts), in stored item
 * order. These replace the two per-section batch rows the submit route wrote
 * before, with the same totals (a skipped question still counts as answered,
 * wrong), and carry what the review page and the mistake log need: the
 * attempt, the position, the option chosen as shown (or the typed grid-in),
 * the flag, the time, and the content-addressed question key.
 */
export function satPracticeRows(
  items: SatGradedItem[],
  opts: { attemptId: string; answeredAt?: Date },
): QuestionRow[] {
  return items.map((item) => {
    const q = item.question
    const domain = q.domain ? SAT_DOMAIN_LABELS[q.domain] : ''
    return {
      source: 'PRACTICE' as const,
      courseSlug: 'sat-prep',
      // Only real topic slugs (passage and grid-in items have synthetic ones).
      ...(q.sourceSlug.startsWith('sat-') ? { topicSlug: q.sourceSlug } : {}),
      discipline: domain || (q.section === 'math' ? 'Math' : 'Reading and Writing'),
      questionKey: questionKey({
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        passageId: q.passage?.id ?? null,
      }),
      answered: 1,
      correct: item.correct ? 1 : 0,
      durationMs: item.seconds ? Math.round(item.seconds * 1000) : null,
      attemptKind: 'sat-practice' as const,
      attemptId: opts.attemptId,
      itemIndex: item.itemIndex,
      chosenIndex: item.selectedIndex,
      chosenText: item.textValue,
      // Multiple choice only: a grid-in has no options (selectedIndex null).
      chosenKey: q.gridIn ? null : chosenOptionKey(q.options, item.selectedIndex),
      flagged: item.flagged,
      ...(opts.answeredAt ? { answeredAt: opts.answeredAt } : {}),
    }
  })
}
