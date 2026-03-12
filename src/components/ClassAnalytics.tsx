'use client'

import { useState, useMemo } from 'react'

/**
 * #193: Class-Wide Analytics Dashboard
 * Overview of class performance for teachers
 */

interface StudentPerformance {
  id: string
  name: string
  avgScore: number
  quizzesCompleted: number
  xp: number
  streak: number
  weakTopics: string[]
  lastActive: string
}

const SAMPLE_STUDENTS: StudentPerformance[] = [
  { id: 's1', name: 'Alice Chen', avgScore: 92, quizzesCompleted: 45, xp: 8500, streak: 14, weakTopics: ['Integration by Parts'], lastActive: '2025-01-15' },
  { id: 's2', name: 'Ben Park', avgScore: 87, quizzesCompleted: 38, xp: 7200, streak: 7, weakTopics: ['Related Rates', 'Chain Rule'], lastActive: '2025-01-15' },
  { id: 's3', name: 'Caro Diaz', avgScore: 78, quizzesCompleted: 52, xp: 9100, streak: 21, weakTopics: ['Sequences and Series'], lastActive: '2025-01-14' },
  { id: 's4', name: 'David Kim', avgScore: 95, quizzesCompleted: 60, xp: 12000, streak: 30, weakTopics: [], lastActive: '2025-01-15' },
  { id: 's5', name: 'Emma Liu', avgScore: 71, quizzesCompleted: 22, xp: 3400, streak: 0, weakTopics: ['Derivatives', 'Limits', 'Continuity'], lastActive: '2025-01-10' },
  { id: 's6', name: 'Frank Wu', avgScore: 83, quizzesCompleted: 35, xp: 6500, streak: 5, weakTopics: ['FTC'], lastActive: '2025-01-14' },
  { id: 's7', name: 'Grace Lee', avgScore: 89, quizzesCompleted: 41, xp: 7800, streak: 11, weakTopics: ['Optimization'], lastActive: '2025-01-15' },
  { id: 's8', name: 'Henry Zhou', avgScore: 65, quizzesCompleted: 18, xp: 2800, streak: 0, weakTopics: ['Limits', 'Derivatives', 'Product Rule'], lastActive: '2025-01-08' },
]

type SortField = 'name' | 'avgScore' | 'quizzesCompleted' | 'xp' | 'streak'

export function ClassAnalytics({ students = SAMPLE_STUDENTS }: { students?: StudentPerformance[] }) {
  const [sortBy, setSortBy] = useState<SortField>('avgScore')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')

  const sorted = useMemo(() => {
    return [...students].sort((a, b) => {
      const aVal = a[sortBy]
      const bVal = b[sortBy]
      if (typeof aVal === 'string' && typeof bVal === 'string') return sortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
      return sortDir === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number)
    })
  }, [students, sortBy, sortDir])

  const [now] = useState(() => Date.now())
  const classAvg = Math.round(students.reduce((s, st) => s + st.avgScore, 0) / students.length)
  const activeCount = useMemo(() => students.filter(s => {
    const diff = (now - new Date(s.lastActive).getTime()) / 86400000
    return diff <= 3
  }).length, [students, now])
  const atRisk = students.filter(s => s.avgScore < 70 || s.streak === 0).length

  const toggleSort = (field: SortField) => {
    if (sortBy === field) setSortDir(prev => prev === 'asc' ? 'desc' : 'asc')
    else { setSortBy(field); setSortDir('desc') }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📊 Class Analytics</h2>

      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="text-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{students.length}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Students</div>
        </div>
        <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{classAvg}%</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Class Avg</div>
        </div>
        <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{activeCount}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Active (3d)</div>
        </div>
        <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">{atRisk}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">At Risk</div>
        </div>
      </div>

      {/* Student table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              {[
                { field: 'name' as SortField, label: 'Student' },
                { field: 'avgScore' as SortField, label: 'Avg Score' },
                { field: 'quizzesCompleted' as SortField, label: 'Quizzes' },
                { field: 'xp' as SortField, label: 'XP' },
                { field: 'streak' as SortField, label: 'Streak' },
              ].map(col => (
                <th key={col.field} onClick={() => toggleSort(col.field)}
                  className="text-left py-2 px-2 text-xs font-medium text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200">
                  {col.label} {sortBy === col.field ? (sortDir === 'desc' ? '↓' : '↑') : ''}
                </th>
              ))}
              <th className="text-left py-2 px-2 text-xs font-medium text-gray-500 dark:text-gray-400">Weak Areas</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(student => {
              const daysInactive = Math.floor((now - new Date(student.lastActive).getTime()) / 86400000)
              return (
                <tr key={student.id} className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="py-2 px-2 font-medium text-gray-900 dark:text-white">
                    {student.name}
                    {daysInactive > 5 && <span className="ml-1 text-[10px] text-red-500">({daysInactive}d inactive)</span>}
                  </td>
                  <td className="py-2 px-2">
                    <span className={`font-semibold ${student.avgScore >= 90 ? 'text-green-600' : student.avgScore >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {student.avgScore}%
                    </span>
                  </td>
                  <td className="py-2 px-2 text-gray-600 dark:text-gray-400">{student.quizzesCompleted}</td>
                  <td className="py-2 px-2 text-gray-600 dark:text-gray-400">{student.xp.toLocaleString()}</td>
                  <td className="py-2 px-2">
                    {student.streak > 0 ? <span className="text-orange-500">🔥 {student.streak}</span> : <span className="text-gray-400">—</span>}
                  </td>
                  <td className="py-2 px-2">
                    {student.weakTopics.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {student.weakTopics.map(t => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded">{t}</span>
                        ))}
                      </div>
                    ) : <span className="text-green-500 text-xs">All good ✓</span>}
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
