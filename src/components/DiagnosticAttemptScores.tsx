import { summarizeAttemptScores } from '@/lib/diagnostic-attempt-scores'

/**
 * Score block for a past diagnostic attempt: the estimated overall score
 * (range + midpoint where the course has one), the estimated score for each
 * section, and the unit/domain breakdown. Same numbers the results screen
 * showed when the attempt was finished (see summarizeAttemptScores).
 */
export default function DiagnosticAttemptScores({
  category,
  results,
}: {
  category: string
  results: unknown
}) {
  const s = summarizeAttemptScores(category, results)
  const r = (results && typeof results === 'object' ? results : {}) as Record<string, unknown>
  const correct = typeof r.totalCorrect === 'number' ? r.totalCorrect : null
  const total = typeof r.totalQuestions === 'number' ? r.totalQuestions : null
  const pct = typeof r.percentage === 'number' ? Math.round(r.percentage) : null
  const form = r.form != null && r.form !== '' ? String(r.form) : null

  return (
    <div className="mb-6 space-y-4">
      <div className={`grid gap-3 ${form ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-xs uppercase text-gray-500 dark:text-gray-400">{s.overall?.label ?? 'Estimate'}</p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-accent-hover dark:text-accent-muted">{s.overall?.value ?? '—'}</p>
          {s.overall?.detail && <p className="text-xs text-gray-500 dark:text-gray-400">{s.overall.detail}</p>}
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Correct</p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-gray-800 dark:text-gray-200">
            {correct != null && total != null ? `${correct}/${total}` : '—'}
          </p>
          {pct != null && <p className="text-xs text-gray-500 dark:text-gray-400">{pct}%</p>}
        </div>
        {form && (
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Form</p>
            <p className="mt-1 text-2xl font-bold text-gray-800 dark:text-gray-200">{form}</p>
          </div>
        )}
      </div>

      {s.sections.length > 0 && (
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
            {s.family === 'calcbc' ? 'Subscore' : 'Section scores'}
          </h2>
          <div className={`grid gap-3 ${s.sections.length >= 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2'}`}>
            {s.sections.map((sec) => (
              <div key={sec.key} className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900/40">
                <p className="text-xs text-gray-600 dark:text-gray-400">{sec.label}</p>
                <p className="text-xl font-bold tabular-nums text-gray-900 dark:text-white">{sec.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">out of {sec.outOf}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {s.domains.length > 0 && (
        <details className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800" open={s.sections.length === 0}>
          <summary className="cursor-pointer text-sm font-semibold text-gray-900 dark:text-white">
            {s.family === 'ap' || s.family === 'calcbc' ? 'Unit breakdown' : 'Topic breakdown'}
          </summary>
          <ul className="mt-3 space-y-2">
            {s.domains.map((d) => (
              <li key={d.name} className="text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-700 dark:text-gray-300">{d.name}</span>
                  <span className="shrink-0 tabular-nums text-gray-500 dark:text-gray-400">
                    {d.correct}/{d.total} ({d.percentage}%)
                  </span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-gray-100 dark:bg-gray-700">
                  <div className="h-1.5 rounded-full bg-accent" style={{ width: `${Math.max(0, Math.min(100, d.percentage))}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  )
}
