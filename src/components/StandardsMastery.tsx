'use client'

import { useEffect, useState } from 'react'

/**
 * Standards-mastery view: class mastery grouped by official standard (AP unit /
 * SAT domain / MCAT content category), decorated with exam weighting from the
 * approved standards taxonomy. Reads the classroom analytics endpoint's new
 * `standardsMastery` aggregation.
 */
interface StandardRow {
  course: string
  courseSlug: string
  standard: string
  code?: string
  weight?: string
  mastered: number
  completed: number
  inProgress: number
  topics: number
  total: number
  masteryRate: number
}

function pctFromWeight(w?: string): string | null {
  if (!w) return null
  const m = w.match(/~?\d+\s*[–-]\s*\d+\s*%|~?\d+\s*%/)
  return m ? m[0].replace(/\s+/g, '') : null
}

function barColor(rate: number): string {
  if (rate >= 80) return 'bg-green-500'
  if (rate >= 60) return 'bg-blue-500'
  if (rate >= 40) return 'bg-yellow-500'
  if (rate >= 20) return 'bg-orange-500'
  return 'bg-red-500'
}

export function StandardsMastery({ classroomId }: { classroomId: string }) {
  const [rows, setRows] = useState<StandardRow[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/teacher/classrooms/${classroomId}/analytics`)
      .then((r) => r.json())
      .then((d) => setRows(d.standardsMastery ?? []))
      .catch(() => setRows([]))
      .finally(() => setLoading(false))
  }, [classroomId])

  if (loading) return <div className="text-center py-12 text-gray-500">Loading standards mastery…</div>
  if (!rows || rows.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-lg font-bold mb-2">No standards data yet</h3>
        <p className="text-gray-500">
          Once students work through topics, you’ll see class mastery by AP unit / SAT domain / MCAT category here.
        </p>
      </div>
    )
  }

  const byCourse = new Map<string, StandardRow[]>()
  for (const r of rows) {
    if (!byCourse.has(r.course)) byCourse.set(r.course, [])
    byCourse.get(r.course)!.push(r)
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Class mastery grouped by official standard (AP unit / SAT domain / MCAT content category), with exam weighting where published.
      </p>
      {[...byCourse.entries()].map(([course, list]) => (
        <div key={course}>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{course}</h3>
          <div className="space-y-2">
            {list.map((r) => {
              const pct = pctFromWeight(r.weight)
              return (
                <div key={(r.code || '') + r.standard} className="flex items-center gap-3">
                  <div className="w-1/3 min-w-0">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                      {r.code ? <span className="text-gray-400">{r.code} · </span> : null}
                      {r.standard}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {r.topics} topic{r.topics !== 1 ? 's' : ''}
                      {pct ? ` · ${pct} of exam` : ''}
                    </p>
                  </div>
                  <div className="flex-1 h-3 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    <div className={`h-full ${barColor(r.masteryRate)}`} style={{ width: `${r.masteryRate}%` }} />
                  </div>
                  <div className="w-12 text-right text-sm font-bold text-gray-700 dark:text-gray-300">{r.masteryRate}%</div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
