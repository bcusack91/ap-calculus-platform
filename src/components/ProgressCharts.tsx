'use client'

import { useState, useEffect, useCallback } from 'react'

interface ChartData {
  masteryTimeline: { week: string; avgMastery: number; topicsCompleted: number }[]
  studyTimeline: { week: string; minutes: number }[]
  heatmap: Record<string, number>
  subjectBreakdown: { name: string; completed: number; total: number; avgMastery: number }[]
  streak: { current: number; longest: number }
  totals: { totalTopics: number; totalReviews: number; totalTimeMinutes: number }
}

export default function ProgressCharts() {
  const [data, setData] = useState<ChartData | null>(null)
  const [activeTab, setActiveTab] = useState<'mastery' | 'time' | 'heatmap' | 'subjects'>('mastery')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadData = useCallback(() => {
    setLoading(true)
    setError(null)
    fetch('/api/progress/charts')
      .then((r) => { if (!r.ok) throw new Error('Failed to load charts'); return r.json() })
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  // eslint-disable-next-line react-hooks/set-state-in-effect -- async fetch callback, not synchronous
  useEffect(() => { loadData() }, [loadData])

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4" />
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Progress Analytics</h2>
        <div className="text-center py-8">
          <div className="text-3xl mb-2">⚠️</div>
          <p className="text-gray-600 dark:text-gray-400 mb-3">{error}</p>
          <button onClick={loadData} className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors text-sm font-medium">
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (!data) return null

  const tabs = [
    { key: 'mastery' as const, label: 'Mastery' },
    { key: 'time' as const, label: 'Study Time' },
    { key: 'heatmap' as const, label: 'Activity' },
    { key: 'subjects' as const, label: 'Subjects' },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Progress Analytics</h2>
        <div className="flex gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-accent text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'mastery' && <MasteryChart data={data.masteryTimeline} />}
      {activeTab === 'time' && <StudyTimeChart data={data.studyTimeline} />}
      {activeTab === 'heatmap' && <ActivityHeatmap data={data.heatmap} />}
      {activeTab === 'subjects' && <SubjectBreakdown data={data.subjectBreakdown} />}
    </div>
  )
}

// ─── Bar-style mastery chart (pure CSS, no charting lib) ─────────────────────

function MasteryChart({ data }: { data: ChartData['masteryTimeline'] }) {
  const maxMastery = Math.max(...data.map((d) => d.avgMastery), 1)

  return (
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Average mastery level over the last 12 weeks</p>
      <div className="flex items-end gap-1.5 h-40">
        {data.map((week, i) => {
          const height = maxMastery > 0 ? (week.avgMastery / 100) * 100 : 0
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-1" title={`Week of ${week.week}: ${week.avgMastery}% avg mastery, ${week.topicsCompleted} completed`}>
              <span className="text-xs text-gray-500 dark:text-gray-400">{week.avgMastery}%</span>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-t relative" style={{ height: '100%' }}>
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-accent to-accent-muted rounded-t transition-all duration-500"
                  style={{ height: `${height}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-400 truncate w-full text-center">
                {new Date(week.week).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function StudyTimeChart({ data }: { data: ChartData['studyTimeline'] }) {
  const maxMinutes = Math.max(...data.map((d) => d.minutes), 1)

  return (
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Study time per week (minutes)</p>
      <div className="flex items-end gap-1.5 h-40">
        {data.map((week, i) => {
          const height = maxMinutes > 0 ? (week.minutes / maxMinutes) * 100 : 0
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-1" title={`Week of ${week.week}: ${week.minutes} min`}>
              <span className="text-xs text-gray-500 dark:text-gray-400">{week.minutes}m</span>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-t relative" style={{ height: '100%' }}>
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all duration-500"
                  style={{ height: `${height}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-400 truncate w-full text-center">
                {new Date(week.week).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ActivityHeatmap({ data }: { data: Record<string, number> }) {
  // Generate 90 days of heatmap cells
  const days: { date: string; value: number }[] = []
  const now = new Date()
  for (let i = 89; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    const key = d.toISOString().split('T')[0]
    days.push({ date: key, value: data[key] ?? 0 })
  }

  const maxVal = Math.max(...days.map((d) => d.value), 1)

  function getColor(value: number) {
    if (value === 0) return 'bg-gray-100 dark:bg-gray-700'
    const intensity = value / maxVal
    if (intensity < 0.25) return 'bg-green-200 dark:bg-green-900'
    if (intensity < 0.5) return 'bg-green-400 dark:bg-green-700'
    if (intensity < 0.75) return 'bg-green-500 dark:bg-green-600'
    return 'bg-green-600 dark:bg-green-500'
  }

  return (
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Study activity over the last 90 days</p>
      <div className="flex flex-wrap gap-1">
        {days.map((day) => (
          <div
            key={day.date}
            className={`w-3 h-3 rounded-sm ${getColor(day.value)}`}
            title={`${day.date}: ${day.value > 0 ? `${day.value} activity points` : 'No activity'}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 text-xs text-gray-500 dark:text-gray-400">
        <span>Less</span>
        <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-700" />
        <div className="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900" />
        <div className="w-3 h-3 rounded-sm bg-green-400 dark:bg-green-700" />
        <div className="w-3 h-3 rounded-sm bg-green-600 dark:bg-green-500" />
        <span>More</span>
      </div>
    </div>
  )
}

function SubjectBreakdown({ data }: { data: ChartData['subjectBreakdown'] }) {
  return (
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Progress by subject</p>
      <div className="space-y-3">
        {data.slice(0, 8).map((subject) => {
          const pct = subject.total > 0 ? Math.round((subject.completed / subject.total) * 100) : 0
          return (
            <div key={subject.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">{subject.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{subject.completed}/{subject.total} topics ({subject.avgMastery}% mastery)</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent rounded-full transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
