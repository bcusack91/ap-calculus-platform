'use client'

import { useEffect, useState } from 'react'

interface DistrictRow {
  district: string
  schools: number
  classrooms: number
  students: number
  activeLast7d: number
  avgMastery: number
  assignmentsCompleted: number
  exitQuizPassRate: number | null
}
interface RollupData {
  districts: DistrictRow[]
  totals: { districts: number; schools: number; classrooms: number; students: number }
  hasDistrictData: boolean
}

export function DistrictRollup() {
  const [data, setData] = useState<RollupData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/district-rollup')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-center py-12 text-gray-500">Loading district rollup…</div>
  if (!data || data.districts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">🏫</div>
        <h3 className="text-lg font-bold mb-2">No schools yet</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Once schools and classrooms exist, this rolls up usage and outcomes by district. Set a school&apos;s
          <span className="font-mono"> district </span> field to group it here.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Totals */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Districts', value: data.totals.districts },
          { label: 'Schools', value: data.totals.schools },
          { label: 'Classrooms', value: data.totals.classrooms },
          { label: 'Students', value: data.totals.students },
        ].map((c) => (
          <div key={c.label} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{c.value.toLocaleString()}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">{c.label}</p>
          </div>
        ))}
      </div>

      {!data.hasDistrictData && (
        <div className="rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10 p-3 text-sm text-amber-800 dark:text-amber-300">
          No schools have a <span className="font-mono">district</span> set yet, so everything is grouped under
          &quot;No district set.&quot; Populate the school <span className="font-mono">district</span> field to see a true
          per-district breakdown.
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-xs uppercase tracking-wide text-gray-500">
              <th className="py-3 px-4 font-semibold">District</th>
              <th className="py-3 px-4 font-semibold text-right">Schools</th>
              <th className="py-3 px-4 font-semibold text-right">Classes</th>
              <th className="py-3 px-4 font-semibold text-right">Students</th>
              <th className="py-3 px-4 font-semibold text-right">Active 7d</th>
              <th className="py-3 px-4 font-semibold text-right">Avg mastery</th>
              <th className="py-3 px-4 font-semibold text-right">Assignments done</th>
              <th className="py-3 px-4 font-semibold text-right">Exit-quiz pass</th>
            </tr>
          </thead>
          <tbody>
            {data.districts.map((d) => {
              const activePct = d.students > 0 ? Math.round((d.activeLast7d / d.students) * 100) : 0
              return (
                <tr key={d.district} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{d.district}</td>
                  <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{d.schools}</td>
                  <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{d.classrooms}</td>
                  <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{d.students}</td>
                  <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">
                    {d.activeLast7d} <span className="text-gray-400">({activePct}%)</span>
                  </td>
                  <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{d.avgMastery}%</td>
                  <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">{d.assignmentsCompleted}</td>
                  <td className="py-3 px-4 text-right text-gray-700 dark:text-gray-300">
                    {d.exitQuizPassRate === null ? '—' : `${d.exitQuizPassRate}%`}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
