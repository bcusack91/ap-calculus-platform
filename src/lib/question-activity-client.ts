/**
 * Browser side of POST /api/activity/questions: answered questions that are
 * graded in the browser (entrance quizzes, in-lesson question sections).
 * Fire-and-forget — tracking must never block or alter the quiz flow, so
 * every failure is swallowed. Callers skip signed-out students.
 */
export type ClientQuestionRow = {
  source: 'ENTRANCE' | 'LESSON'
  topicSlug: string
  questionKey?: string
  answered: number
  correct: number
  durationMs?: number
}

export function postQuestionActivity(rows: ClientQuestionRow[]): void {
  const clean = rows.filter((r) => r.topicSlug && r.answered > 0).slice(0, 60)
  if (!clean.length || typeof fetch !== 'function') return
  try {
    fetch('/api/activity/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rows: clean }),
      keepalive: true,
    }).catch(() => {})
  } catch {
    /* best-effort */
  }
}
