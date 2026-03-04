'use client'

import { useState, useEffect } from 'react'

interface CurriculumItem {
  id: string
  title: string
  topicSlug: string | null
  type: string
  sortOrder: number
  notes: string | null
}

interface CurriculumWeek {
  id: string
  weekNum: number
  title: string | null
  notes: string | null
  items: CurriculumItem[]
}

interface CurriculumPlanData {
  id: string
  title: string
  description: string | null
  startDate: string | null
  endDate: string | null
  weeks: CurriculumWeek[]
}

interface CurriculumPlannerProps {
  classroomId: string
}

export default function CurriculumPlanner({ classroomId }: CurriculumPlannerProps) {
  const [plans, setPlans] = useState<CurriculumPlanData[]>([])
  const [activePlanId, setActivePlanId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newStartDate, setNewStartDate] = useState('')
  const [newEndDate, setNewEndDate] = useState('')
  const [newItemTitle, setNewItemTitle] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch(`/api/teacher/curriculum?classroomId=${classroomId}`)
      .then((r) => r.json())
      .then((data) => {
        setPlans(data.plans ?? [])
        if (data.plans?.length) setActivePlanId(data.plans[0].id)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [classroomId])

  const createPlan = async () => {
    if (!newTitle.trim()) return
    const res = await fetch('/api/teacher/curriculum', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        classroomId,
        title: newTitle,
        startDate: newStartDate || null,
        endDate: newEndDate || null,
        weeks: [{ weekNum: 1, title: 'Week 1' }],
      }),
    })
    const { plan } = await res.json()
    if (plan) {
      setPlans((prev) => [plan, ...prev])
      setActivePlanId(plan.id)
      setShowCreate(false)
      setNewTitle('')
    }
  }

  const addWeek = async (planId: string) => {
    const res = await fetch('/api/teacher/curriculum', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId, addWeek: {} }),
    })
    const { week } = await res.json()
    if (week) {
      setPlans((prev) =>
        prev.map((p) => (p.id === planId ? { ...p, weeks: [...p.weeks, week] } : p))
      )
    }
  }

  const addItem = async (weekId: string) => {
    const title = newItemTitle[weekId]?.trim()
    if (!title) return
    const res = await fetch('/api/teacher/curriculum', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ weekId, addItem: { title } }),
    })
    const { item } = await res.json()
    if (item) {
      setPlans((prev) =>
        prev.map((p) => ({
          ...p,
          weeks: p.weeks.map((w) =>
            w.id === weekId ? { ...w, items: [...w.items, item] } : w
          ),
        }))
      )
      setNewItemTitle((prev) => ({ ...prev, [weekId]: '' }))
    }
  }

  const deleteItem = async (itemId: string) => {
    await fetch(`/api/teacher/curriculum?id=${itemId}&type=item`, { method: 'DELETE' })
    setPlans((prev) =>
      prev.map((p) => ({
        ...p,
        weeks: p.weeks.map((w) => ({
          ...w,
          items: w.items.filter((i) => i.id !== itemId),
        })),
      }))
    )
  }

  const deleteWeek = async (weekId: string) => {
    await fetch(`/api/teacher/curriculum?id=${weekId}&type=week`, { method: 'DELETE' })
    setPlans((prev) =>
      prev.map((p) => ({
        ...p,
        weeks: p.weeks.filter((w) => w.id !== weekId),
      }))
    )
  }

  const deletePlan = async (planId: string) => {
    await fetch(`/api/teacher/curriculum?id=${planId}&type=plan`, { method: 'DELETE' })
    setPlans((prev) => prev.filter((p) => p.id !== planId))
    setActivePlanId(plans.find((p) => p.id !== planId)?.id ?? null)
  }

  const activePlan = plans.find((p) => p.id === activePlanId)

  const typeIcons: Record<string, string> = {
    LESSON: '📖',
    ASSIGNMENT: '📝',
    QUIZ: '✅',
    ACTIVITY: '🎯',
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">📅 Curriculum Planner</h2>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="text-sm bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-700"
        >
          + New Plan
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 mb-4">
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Curriculum title"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-2"
          />
          <div className="flex gap-2">
            <input type="date" value={newStartDate} onChange={(e) => setNewStartDate(e.target.value)} className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white" />
            <input type="date" value={newEndDate} onChange={(e) => setNewEndDate(e.target.value)} className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white" />
            <button onClick={createPlan} className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">Create</button>
          </div>
        </div>
      )}

      {/* Plan tabs */}
      {plans.length > 1 && (
        <div className="flex gap-1 mb-4 overflow-x-auto">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlanId(p.id)}
              className={`px-3 py-1.5 text-sm rounded-lg whitespace-nowrap ${
                activePlanId === p.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      )}

      {/* Active plan weeks */}
      {activePlan ? (
        <div className="space-y-4">
          {activePlan.weeks.map((week) => (
            <div key={week.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-gray-700">
                <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                  {week.title || `Week ${week.weekNum}`}
                </h3>
                <button
                  onClick={() => deleteWeek(week.id)}
                  className="text-gray-400 hover:text-red-500 text-xs"
                >
                  Remove
                </button>
              </div>
              <div className="p-3 space-y-2">
                {week.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-2 py-1.5 px-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <span>{typeIcons[item.type] || '📄'}</span>
                    <span className="flex-1 text-sm text-gray-700 dark:text-gray-300">{item.title}</span>
                    <span className="text-xs text-gray-400 uppercase">{item.type}</span>
                    <button onClick={() => deleteItem(item.id)} className="text-gray-400 hover:text-red-500">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                ))}
                {/* Add item */}
                <div className="flex gap-2 pt-1">
                  <input
                    value={newItemTitle[week.id] || ''}
                    onChange={(e) => setNewItemTitle((prev) => ({ ...prev, [week.id]: e.target.value }))}
                    onKeyDown={(e) => e.key === 'Enter' && addItem(week.id)}
                    placeholder="Add lesson, quiz, or activity..."
                    className="flex-1 px-2 py-1.5 rounded border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white"
                  />
                  <button
                    onClick={() => addItem(week.id)}
                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1.5 rounded hover:bg-gray-200"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex gap-2">
            <button
              onClick={() => addWeek(activePlan.id)}
              className="text-sm text-purple-600 hover:text-purple-700 font-medium"
            >
              + Add Week
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => deletePlan(activePlan.id)}
              className="text-sm text-red-500 hover:text-red-600"
            >
              Delete Plan
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400">
          <p className="text-3xl mb-2">📅</p>
          <p>No curriculum plans yet</p>
        </div>
      )}
    </div>
  )
}
