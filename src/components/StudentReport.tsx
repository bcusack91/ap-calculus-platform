'use client'

import { useState, useEffect } from 'react'

interface ReportData {
  student: { id: string; name: string | null; email: string | null }
  summary: {
    completedLessons: number
    totalLessons: number
    avgQuizScore: number | null
    assignmentAvg: number | null
    flashcardTotal: number
    flashcardMastered: number
    flashcardDue: number
    totalStudyMinutes: number
    avgSessionMinutes: number
    currentStreak: number
    longestStreak: number
  }
  subjects: { name: string; completed: number; total: number; percentage: number }[]
  quizTrend: { date: string; score: number; topic: string }[]
  assignments: { title: string; score: number | null; maxScore: number | null; status: string }[]
  generatedAt: string
}

interface StudentReportProps {
  studentId: string
  classroomId: string
}

export default function StudentReport({ studentId, classroomId }: StudentReportProps) {
  const [report, setReport] = useState<ReportData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/teacher/student-report?studentId=${studentId}&classroomId=${classroomId}`)
      .then((r) => r.json())
      .then(setReport)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [studentId, classroomId])

  if (loading || !report) {
    return (
      <div className="p-6 space-y-4 print:p-0">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
        ))}
      </div>
    )
  }

  const s = report.summary
  const gradeColor = (pct: number | null) => {
    if (pct === null) return 'text-gray-400'
    if (pct >= 90) return 'text-green-600'
    if (pct >= 80) return 'text-blue-600'
    if (pct >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="max-w-3xl mx-auto print:max-w-none">
      {/* Printable header */}
      <div className="flex items-center justify-between mb-6 print:mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black">
            {report.student.name || 'Student'} — Progress Report
          </h2>
          <p className="text-sm text-gray-500 print:text-gray-600">
            Generated {new Date(report.generatedAt).toLocaleDateString()}
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 print:hidden"
        >
          🖨️ Print
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard label="Lessons" value={`${s.completedLessons}/${s.totalLessons}`} sub="completed" />
        <StatCard label="Quiz Avg" value={s.avgQuizScore !== null ? `${s.avgQuizScore}%` : '—'} sub="score" colorClass={gradeColor(s.avgQuizScore)} />
        <StatCard label="Assignment Avg" value={s.assignmentAvg !== null ? `${s.assignmentAvg}%` : '—'} sub="score" colorClass={gradeColor(s.assignmentAvg)} />
        <StatCard label="Study Time" value={`${Math.round(s.totalStudyMinutes / 60)}h`} sub={`${s.avgSessionMinutes}min avg`} />
        <StatCard label="Flashcards" value={`${s.flashcardMastered}`} sub={`of ${s.flashcardTotal} mastered`} />
        <StatCard label="Due Cards" value={`${s.flashcardDue}`} sub="need review" />
        <StatCard label="Streak" value={`${s.currentStreak}d`} sub={`${s.longestStreak}d best`} />
        <StatCard label="Sessions" value={`${s.avgSessionMinutes}m`} sub="avg per session" />
      </div>

      {/* Subject Breakdown */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6 print:shadow-none print:border">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Subject Progress</h3>
        <div className="space-y-3">
          {report.subjects.length === 0 ? (
            <p className="text-sm text-gray-400">No subject data available</p>
          ) : (
            report.subjects.map((sub) => (
              <div key={sub.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{sub.name}</span>
                  <span className="text-gray-500">{sub.completed}/{sub.total} ({sub.percentage}%)</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: `${sub.percentage}%` }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quiz Trend */}
      {report.quizTrend.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6 print:shadow-none print:border">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Recent Quiz Scores</h3>
          <div className="flex items-end gap-1 h-32">
            {report.quizTrend.map((q, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end">
                <span className="text-xs text-gray-500 mb-1">{q.score}%</span>
                <div
                  className={`w-full rounded-t ${q.score >= 80 ? 'bg-green-500' : q.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ height: `${q.score}%` }}
                  title={`${q.topic}: ${q.score}%`}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assignments */}
      {report.assignments.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 print:shadow-none print:border">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Assignment Scores</h3>
          <div className="space-y-2">
            {report.assignments.map((a, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                <span className="text-sm text-gray-700 dark:text-gray-300">{a.title}</span>
                <span className={`text-sm font-medium ${gradeColor(
                  a.score !== null && a.maxScore ? Math.round((a.score / a.maxScore) * 100) : null
                )}`}>
                  {a.score !== null ? `${a.score}/${a.maxScore}` : a.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value, sub, colorClass }: { label: string; value: string; sub: string; colorClass?: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm print:shadow-none print:border">
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className={`text-xl font-bold ${colorClass || 'text-gray-900 dark:text-white'}`}>{value}</p>
      <p className="text-xs text-gray-400">{sub}</p>
    </div>
  )
}
