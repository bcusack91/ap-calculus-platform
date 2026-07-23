'use client'

import { useState } from 'react'

/**
 * AI free-response grader (teacher tool). The teacher pastes their own question,
 * an optional rubric / ideal answer, and a student's response; Claude suggests a
 * score + per-criterion breakdown + feedback. Advisory only — the teacher decides
 * the final grade.
 */

interface Criterion {
  description: string
  points: number
  earned: boolean
}
interface GradeResult {
  suggestedScore: number
  maxPoints: number
  criteria: Criterion[]
  feedback: string
}

export function AIFreeResponseGrader() {
  const [question, setQuestion] = useState('')
  const [rubric, setRubric] = useState('')
  const [answer, setAnswer] = useState('')
  const [maxPoints, setMaxPoints] = useState('3')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<GradeResult | null>(null)

  const grade = async () => {
    if (!question.trim() || !answer.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('/api/teacher/ai-grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, rubric, answer, maxPoints: parseInt(maxPoints) || 1 }),
      })
      const d = await res.json().catch(() => ({}))
      if (res.ok && typeof d.suggestedScore === 'number') setResult(d)
      else setError(d.error || 'Grading failed. Please try again.')
    } catch {
      setError('Grading failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const scoreColor = (s: number, max: number) =>
    s >= max * 0.85 ? 'text-green-600' : s >= max * 0.5 ? 'text-yellow-600' : 'text-red-600'

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">✨ AI Free-Response Grader</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Paste a question, an optional rubric or ideal answer, and a student&apos;s response. Claude suggests a score and feedback — you decide the final grade.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Question / prompt *</label>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} rows={2} placeholder="e.g. Explain why f(x)=x³−6x²+9x+1 has a relative maximum at x=1." className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>

      <div className="grid sm:grid-cols-[1fr,auto] gap-3 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rubric or ideal answer (optional)</label>
          <textarea value={rubric} onChange={(e) => setRubric(e.target.value)} rows={2} placeholder="1 pt: finds f′(x). 1 pt: uses the second-derivative test. 1 pt: correct conclusion." className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Max points</label>
          <input type="number" min={1} max={100} value={maxPoints} onChange={(e) => setMaxPoints(e.target.value)} className="w-24 px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Student answer *</label>
        <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} rows={5} placeholder="Paste the student's response here…" className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>

      <button onClick={grade} disabled={loading || !question.trim() || !answer.trim()} className="px-5 py-2.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover disabled:opacity-50">
        {loading ? 'Grading…' : '✨ Grade with AI'}
      </button>

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

      {result && (
        <div className="mt-2 p-4 rounded-xl border border-accent-light dark:border-accent-light bg-accent-subtle dark:bg-accent-light/10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Suggested score</span>
            <span className={`text-2xl font-bold ${scoreColor(result.suggestedScore, result.maxPoints)}`}>
              {result.suggestedScore}/{result.maxPoints}
            </span>
            <span className="text-xs text-gray-400">(you decide the final grade)</span>
          </div>

          {result.criteria.length > 0 && (
            <div className="space-y-1">
              {result.criteria.map((c, i) => (
                <div key={i} className={`text-xs flex items-start gap-2 p-2 rounded ${c.earned ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                  <span>{c.earned ? '✅' : '❌'}</span>
                  <span className={c.earned ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
                    ({c.points} pt) {c.description}
                  </span>
                </div>
              ))}
            </div>
          )}

          {result.feedback && (
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{result.feedback}</p>
          )}
          <p className="text-[11px] text-gray-400">AI grading can make mistakes — always review before recording a grade.</p>
        </div>
      )}
    </div>
  )
}
