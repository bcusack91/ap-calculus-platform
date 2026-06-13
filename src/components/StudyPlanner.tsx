'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { InArticleAd } from '@/components/ad-banner'

interface StudyTask {
  id: string
  title: string
  type: string
  topicSlug?: string | null
  /** Server-verified link target — set only when topicSlug is a real Topic. */
  topicPath?: string | null
  dueDate?: string | null
  completed: boolean
  completedAt?: string | null
  sortOrder: number
}

interface StudyPlanData {
  id: string
  title: string
  examDate?: string | null
  goalType: string
  courseSlug?: string | null
  targetScore?: number | null
  isActive: boolean
  tasks: StudyTask[]
}

export default function StudyPlanner() {
  const [plans, setPlans] = useState<StudyPlanData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activePlan, setActivePlan] = useState<string | null>(null)
  const [showCreate, setShowCreate] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newExamDate, setNewExamDate] = useState('')
  const [newGoalType, setNewGoalType] = useState('AP_EXAM')
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 60_000)
    return () => clearInterval(interval)
  }, [])

  const loadPlans = useCallback(() => {
    setLoading(true)
    setError(null)
    fetch('/api/study-plans')
      .then((r) => { if (!r.ok) throw new Error('Failed to load plans'); return r.json() })
      .then((data) => {
        setPlans(data.plans ?? [])
        if (data.plans?.length) setActivePlan(data.plans[0].id)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  // eslint-disable-next-line react-hooks/set-state-in-effect -- async fetch callback, not synchronous
  useEffect(() => { loadPlans() }, [loadPlans])

  const createPlan = async () => {
    if (!newTitle.trim()) return
    const res = await fetch('/api/study-plans', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newTitle,
        examDate: newExamDate || null,
        goalType: newGoalType,
      }),
    })
    const { plan } = await res.json()
    if (plan) {
      setPlans((prev) => [plan, ...prev])
      setActivePlan(plan.id)
      setShowCreate(false)
      setNewTitle('')
      setNewExamDate('')
    }
  }

  const toggleTask = async (taskId: string, completed: boolean) => {
    await fetch('/api/study-plans/tasks', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: taskId, completed }),
    })
    setPlans((prev) =>
      prev.map((p) => ({
        ...p,
        tasks: p.tasks.map((t) =>
          t.id === taskId ? { ...t, completed, completedAt: completed ? new Date().toISOString() : null } : t
        ),
      }))
    )
  }

  const addTask = async (planId: string) => {
    if (!newTaskTitle.trim()) return
    const res = await fetch('/api/study-plans/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId, title: newTaskTitle }),
    })
    const { task } = await res.json()
    if (task) {
      setPlans((prev) =>
        prev.map((p) => (p.id === planId ? { ...p, tasks: [...p.tasks, task] } : p))
      )
      setNewTaskTitle('')
    }
  }

  const deleteTask = async (taskId: string) => {
    await fetch(`/api/study-plans/tasks?id=${taskId}`, { method: 'DELETE' })
    setPlans((prev) =>
      prev.map((p) => ({ ...p, tasks: p.tasks.filter((t) => t.id !== taskId) }))
    )
  }

  const deletePlan = async (planId: string) => {
    await fetch(`/api/study-plans?id=${planId}`, { method: 'DELETE' })
    setPlans((prev) => prev.filter((p) => p.id !== planId))
    if (activePlan === planId) setActivePlan(plans.find((p) => p.id !== planId)?.id ?? null)
  }

  const plan = plans.find((p) => p.id === activePlan)

  // Calculate countdown
  const getCountdown = useCallback((examDate: string) => {
    const diff = new Date(examDate).getTime() - now
    if (diff <= 0) return 'Past due'
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    if (days === 1) return '1 day left'
    if (days < 7) return `${days} days left`
    const weeks = Math.floor(days / 7)
    return `${weeks}w ${days % 7}d left`
  }, [now])

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">📋 Study Planner</h2>
        <div className="text-center py-6">
          <div className="text-3xl mb-2">⚠️</div>
          <p className="text-gray-600 dark:text-gray-400 mb-3">{error}</p>
          <button onClick={loadPlans} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          📋 Study Planner
        </h2>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="text-sm bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-700 transition-colors"
        >
          + New Plan
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border-b border-gray-200 dark:border-gray-700">
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Plan title (e.g., AP Calculus Exam Prep)"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-2"
          />
          <div className="flex gap-2">
            <input
              type="date"
              value={newExamDate}
              onChange={(e) => setNewExamDate(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
              placeholder="Exam date"
            />
            <select
              value={newGoalType}
              onChange={(e) => setNewGoalType(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
            >
              <option value="AP_EXAM">AP Exam</option>
              <option value="UNIT_TEST">Unit Test</option>
              <option value="FINAL">Final Exam</option>
              <option value="CUSTOM">Custom</option>
            </select>
            <button
              onClick={createPlan}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm font-medium"
            >
              Create
            </button>
          </div>
        </div>
      )}

      {/* Plan tabs */}
      {plans.length > 1 && (
        <div className="flex gap-1 px-4 pt-3 overflow-x-auto">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlan(p.id)}
              className={`px-3 py-1.5 text-sm rounded-lg whitespace-nowrap transition-colors ${
                activePlan === p.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      )}

      {/* Active plan */}
      {plan ? (
        <div className="p-4">
          {/* Countdown */}
          {plan.examDate && (
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-4 mb-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80">{plan.goalType.replace('_', ' ')}</p>
                  <p className="text-2xl font-bold">{getCountdown(plan.examDate)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-80">Exam Date</p>
                  <p className="font-medium">{new Date(plan.examDate).toLocaleDateString()}</p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="mt-3">
                <div className="flex justify-between text-xs opacity-80 mb-1">
                  <span>{plan.tasks.filter((t) => t.completed).length} / {plan.tasks.length} tasks</span>
                  <span>
                    {plan.tasks.length > 0
                      ? Math.round((plan.tasks.filter((t) => t.completed).length / plan.tasks.length) * 100)
                      : 0}
                    %
                  </span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all"
                    style={{
                      width: `${
                        plan.tasks.length > 0
                          ? (plan.tasks.filter((t) => t.completed).length / plan.tasks.length) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tasks */}
          <div className="space-y-2 mb-3">
            {plan.tasks
              .sort((a, b) => {
                if (a.completed !== b.completed) return a.completed ? 1 : -1
                return a.sortOrder - b.sortOrder
              })
              .map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                    task.completed
                      ? 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700'
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <button
                    onClick={() => toggleTask(task.id, !task.completed)}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      task.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 dark:border-gray-500 hover:border-purple-500'
                    }`}
                  >
                    {task.completed && (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span
                    className={`flex-1 text-sm ${
                      task.completed
                        ? 'text-gray-400 line-through'
                        : 'text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {task.topicPath ? (
                      <Link
                        href={task.topicPath}
                        className="hover:text-purple-600 dark:hover:text-purple-400 hover:underline"
                      >
                        {task.title} →
                      </Link>
                    ) : (
                      task.title
                    )}
                  </span>
                  <span className="text-xs text-gray-400 uppercase">{task.type}</span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Delete task"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
          </div>

          {/* Add task */}
          <div className="flex gap-2">
            <input
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTask(plan.id)}
              placeholder="Add a study task..."
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
            />
            <button
              onClick={() => addTask(plan.id)}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 text-sm"
            >
              Add
            </button>
          </div>

          {/* Delete plan */}
          <button
            onClick={() => deletePlan(plan.id)}
            className="mt-4 text-xs text-red-500 hover:text-red-600 transition-colors"
          >
            Delete this plan
          </button>
        </div>
      ) : (
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          <p className="text-3xl mb-2">📋</p>
          <p className="font-medium">No study plans yet</p>
          <p className="text-sm mt-1">Create a plan to organize your study schedule</p>
        </div>
      )}
    </div>

    {/* Ad — after the study plan list */}
    <InArticleAd />
    </>
  )
}
