'use client'

import { useEffect, useState } from 'react'

interface ImpactData {
  masteryDistribution: { status: string; count: number }[]
  weeklyCompletions: { week: string; count: number }[]
  diagnosticImprovement: {
    studentsWithRetakes: number
    avgImprovementPoints: number | null
    pctImproved: number | null
  }
  usageOutcome: { label: string; students: number; avgMastery: number }[]
}

const STATUS_LABEL: Record<string, string> = {
  NOT_STARTED: 'Not started',
  IN_PROGRESS: 'In progress',
  COMPLETED: 'Completed',
  MASTERED: 'Mastered',
}
const STATUS_COLOR: Record<string, string> = {
  NOT_STARTED: 'bg-gray-400',
  IN_PROGRESS: 'bg-yellow-500',
  COMPLETED: 'bg-blue-500',
  MASTERED: 'bg-green-500',
}

export function ImpactAnalytics() {
  const [data, setData] = useState<ImpactData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/impact')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-center py-12 text-gray-500">Loading impact analytics…</div>
  if (!data) return <div className="text-center py-12 text-gray-500">Couldn’t load impact analytics.</div>

  const masteryTotal = data.masteryDistribution.reduce((s, m) => s + m.count, 0)
  const maxWeek = Math.max(1, ...data.weeklyCompletions.map((w) => w.count))
  const di = data.diagnosticImprovement

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Evidence that students are learning on the platform — useful for district reporting and your own product
        signal. (Reads existing progress data; no extra tracking.)
      </p>

      {/* Diagnostic improvement headline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            {di.avgImprovementPoints === null ? '—' : `${di.avgImprovementPoints > 0 ? '+' : ''}${di.avgImprovementPoints} pts`}
          </p>
          <p className="text-xs text-gray-500 mt-1">Avg diagnostic improvement (first → latest)</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {di.pctImproved === null ? '—' : `${di.pctImproved}%`}
          </p>
          <p className="text-xs text-gray-500 mt-1">Students who improved on retake</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{di.studentsWithRetakes.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">Students with 2+ diagnostics (measurable)</p>
        </div>
      </div>

      {/* Usage → outcome */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Usage → mastery</h3>
        <p className="text-xs text-gray-500 mb-4">Average mastery by how many topics a student has worked — more usage should mean more mastery.</p>
        <div className="space-y-2">
          {data.usageOutcome.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <div className="w-28 text-sm text-gray-700 dark:text-gray-300">{b.label}</div>
              <div className="flex-1 h-4 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: `${b.avgMastery}%` }} />
              </div>
              <div className="w-12 text-right text-sm font-bold text-gray-700 dark:text-gray-300">{b.avgMastery}%</div>
              <div className="w-20 text-right text-xs text-gray-400">{b.students} students</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mastery distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Topic mastery distribution</h3>
          <div className="space-y-2">
            {data.masteryDistribution
              .filter((m) => m.status !== 'NOT_STARTED')
              .map((m) => {
                const pct = masteryTotal > 0 ? Math.round((m.count / masteryTotal) * 100) : 0
                return (
                  <div key={m.status} className="flex items-center gap-3">
                    <div className="w-24 text-sm text-gray-700 dark:text-gray-300">{STATUS_LABEL[m.status] ?? m.status}</div>
                    <div className="flex-1 h-4 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                      <div className={`h-full ${STATUS_COLOR[m.status] ?? 'bg-gray-400'}`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="w-16 text-right text-sm font-bold text-gray-700 dark:text-gray-300">{m.count.toLocaleString()}</div>
                  </div>
                )
              })}
          </div>
        </div>

        {/* Weekly completions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Topics completed per week (12 wk)</h3>
          {data.weeklyCompletions.length === 0 ? (
            <p className="text-sm text-gray-500">No completions in the last 12 weeks yet.</p>
          ) : (
            <div className="flex items-end gap-1 h-32">
              {data.weeklyCompletions.map((w) => (
                <div key={w.week} className="flex-1 flex flex-col items-center justify-end group" title={`${w.week}: ${w.count}`}>
                  <div className="w-full bg-blue-500 rounded-t" style={{ height: `${Math.max(2, (w.count / maxWeek) * 100)}%` }} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
