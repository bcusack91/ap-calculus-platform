'use client'

import { useState } from 'react'

/**
 * #194: Parent/Guardian Progress View
 * Read-only dashboard for parents to monitor student progress
 */

interface ChildProgress {
  name: string
  grade: string
  courses: { name: string; progress: number; grade: string }[]
  recentActivity: { date: string; action: string; xp: number }[]
  stats: { totalXP: number; level: number; streak: number; quizzesCompleted: number; avgScore: number; studyHours: number }
}

const SAMPLE_CHILD: ChildProgress = {
  name: 'Alex',
  grade: '11th Grade',
  courses: [
    { name: 'AP Calculus AB', progress: 72, grade: 'A-' },
    { name: 'AP Chemistry', progress: 58, grade: 'B+' },
    { name: 'AP Biology', progress: 85, grade: 'A' },
    { name: 'Algebra 2', progress: 100, grade: 'A' },
  ],
  recentActivity: [
    { date: '2025-01-15', action: 'Completed Derivatives Quiz', xp: 120 },
    { date: '2025-01-15', action: 'Practiced Integration by Parts', xp: 80 },
    { date: '2025-01-14', action: 'Finished Chemistry Lab Review', xp: 150 },
    { date: '2025-01-14', action: 'Beat Mini-Boss: Limits', xp: 200 },
    { date: '2025-01-13', action: 'Daily Challenge completed', xp: 175 },
    { date: '2025-01-12', action: 'Reviewed Cell Biology flashcards', xp: 60 },
    { date: '2025-01-11', action: 'Completed Algebra 2 final review', xp: 300 },
  ],
  stats: { totalXP: 24500, level: 22, streak: 14, quizzesCompleted: 87, avgScore: 86, studyHours: 42 },
}

export function ParentGuardianView({ child = SAMPLE_CHILD }: { child?: ChildProgress }) {
  const [tab, setTab] = useState<'overview' | 'courses' | 'activity'>('overview')

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-xl">👨‍🎓</div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{child.name}&rsquo;s Progress</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{child.grade}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-5 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
        {(['overview', 'courses', 'activity'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${tab === t ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
            {t === 'overview' ? '📊 Overview' : t === 'courses' ? '📚 Courses' : '🕒 Activity'}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Level', value: child.stats.level, icon: '⭐' },
              { label: 'Total XP', value: child.stats.totalXP.toLocaleString(), icon: '✨' },
              { label: 'Streak', value: `${child.stats.streak} days`, icon: '🔥' },
              { label: 'Quizzes Done', value: child.stats.quizzesCompleted, icon: '📝' },
              { label: 'Avg Score', value: `${child.stats.avgScore}%`, icon: '📈' },
              { label: 'Study Hours', value: `${child.stats.studyHours}h`, icon: '⏱️' },
            ].map(stat => (
              <div key={stat.label} className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="text-lg">{stat.icon}</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-semibold text-green-800 dark:text-green-300 text-sm mb-1">💡 Parent Tip</h3>
            <p className="text-sm text-green-700 dark:text-green-400">
              {child.stats.streak > 7
                ? `${child.name} has been studying consistently for ${child.stats.streak} days! Encourage them to keep it up.`
                : `Help ${child.name} build a study habit by setting a regular time each day for practice.`}
            </p>
          </div>
        </div>
      )}

      {tab === 'courses' && (
        <div className="space-y-3">
          {child.courses.map(course => (
            <div key={course.name} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900 dark:text-white text-sm">{course.name}</span>
                <span className={`text-sm font-bold ${course.grade.startsWith('A') ? 'text-green-600' : course.grade.startsWith('B') ? 'text-blue-600' : 'text-yellow-600'}`}>{course.grade}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full transition-all" style={{ width: `${course.progress}%` }} />
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">{course.progress}% complete</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'activity' && (
        <div className="space-y-2">
          {child.recentActivity.map((act, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700/50 last:border-0">
              <div>
                <p className="text-sm text-gray-900 dark:text-white">{act.action}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{act.date}</p>
              </div>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">+{act.xp} XP</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
