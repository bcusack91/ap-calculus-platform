'use client'

import { useState } from 'react'

/**
 * #198: Student Grouping in Classrooms
 * Teachers can create and manage student groups for collaborative work
 */

interface Student {
  id: string
  name: string
  level: number
  avgScore: number
}

interface StudentGroup {
  id: string
  name: string
  color: string
  members: Student[]
}

const SAMPLE_STUDENTS: Student[] = [
  { id: 's1', name: 'Alice Chen', level: 18, avgScore: 92 },
  { id: 's2', name: 'Ben Park', level: 15, avgScore: 87 },
  { id: 's3', name: 'Caro Diaz', level: 20, avgScore: 78 },
  { id: 's4', name: 'David Kim', level: 24, avgScore: 95 },
  { id: 's5', name: 'Emma Liu', level: 10, avgScore: 71 },
  { id: 's6', name: 'Frank Wu', level: 14, avgScore: 83 },
  { id: 's7', name: 'Grace Lee', level: 17, avgScore: 89 },
  { id: 's8', name: 'Henry Zhou', level: 8, avgScore: 65 },
  { id: 's9', name: 'Iris Tan', level: 19, avgScore: 91 },
  { id: 's10', name: 'Jack Ma', level: 12, avgScore: 76 },
  { id: 's11', name: 'Kate Ng', level: 16, avgScore: 85 },
  { id: 's12', name: 'Leo Smith', level: 22, avgScore: 93 },
]

const GROUP_COLORS = ['bg-red-100 dark:bg-red-900/20 border-red-300 dark:border-red-700', 'bg-blue-100 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700', 'bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-700', 'bg-yellow-100 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700', 'bg-purple-100 dark:bg-purple-900/20 border-purple-300 dark:border-purple-700', 'bg-pink-100 dark:bg-pink-900/20 border-pink-300 dark:border-pink-700']

export function StudentGrouping({ allStudents = SAMPLE_STUDENTS }: { allStudents?: Student[] }) {
  const [groups, setGroups] = useState<StudentGroup[]>([])
  const [groupName, setGroupName] = useState('')

  const assignedIds = new Set(groups.flatMap(g => g.members.map(m => m.id)))
  const unassigned = allStudents.filter(s => !assignedIds.has(s.id))

  const createGroup = () => {
    if (!groupName.trim()) return
    setGroups(prev => [...prev, { id: Date.now().toString(), name: groupName.trim(), color: GROUP_COLORS[prev.length % GROUP_COLORS.length], members: [] }])
    setGroupName('')
  }

  const addToGroup = (groupId: string, student: Student) => {
    setGroups(prev => prev.map(g => g.id === groupId ? { ...g, members: [...g.members, student] } : g))
  }

  const removeFromGroup = (groupId: string, studentId: string) => {
    setGroups(prev => prev.map(g => g.id === groupId ? { ...g, members: g.members.filter(m => m.id !== studentId) } : g))
  }

  const deleteGroup = (groupId: string) => {
    setGroups(prev => prev.filter(g => g.id !== groupId))
  }

  const autoGroup = (strategy: 'random' | 'balanced' | 'skill') => {
    const groupCount = Math.max(2, Math.ceil(allStudents.length / 4))
    const sorted = strategy === 'skill'
      ? [...allStudents].sort((a, b) => b.avgScore - a.avgScore)
      : strategy === 'balanced'
        ? [...allStudents].sort((a, b) => b.avgScore - a.avgScore)
        : [...allStudents].sort(() => Math.random() - 0.5)

    const newGroups: StudentGroup[] = Array.from({ length: groupCount }, (_, i) => ({
      id: `auto-${i}`,
      name: `Group ${i + 1}`,
      color: GROUP_COLORS[i % GROUP_COLORS.length],
      members: [],
    }))

    if (strategy === 'balanced') {
      // Snake draft for balanced groups
      sorted.forEach((student, idx) => {
        const round = Math.floor(idx / groupCount)
        const pick = round % 2 === 0 ? idx % groupCount : groupCount - 1 - (idx % groupCount)
        newGroups[pick].members.push(student)
      })
    } else {
      sorted.forEach((student, idx) => {
        newGroups[idx % groupCount].members.push(student)
      })
    }

    setGroups(newGroups)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">👥 Student Groups</h2>

      {/* Auto-group buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs text-gray-500 dark:text-gray-400 self-center">Auto-group:</span>
        {[
          { label: '🎲 Random', strategy: 'random' as const },
          { label: '⚖️ Balanced', strategy: 'balanced' as const },
          { label: '📊 By Skill', strategy: 'skill' as const },
        ].map(opt => (
          <button key={opt.strategy} onClick={() => autoGroup(opt.strategy)}
            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            {opt.label}
          </button>
        ))}
      </div>

      {/* Create group */}
      <div className="flex gap-2 mb-4">
        <input
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="New group name..."
          className="flex-1 px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          maxLength={50}
          onKeyDown={(e) => e.key === 'Enter' && createGroup()}
        />
        <button onClick={createGroup}
          className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          disabled={!groupName.trim()}>
          Create
        </button>
      </div>

      {/* Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {groups.map(group => (
          <div key={group.id} className={`p-3 rounded-lg border ${group.color}`}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{group.name}</h3>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-500 dark:text-gray-400">{group.members.length} members</span>
                <button onClick={() => deleteGroup(group.id)} className="text-xs text-red-400 hover:text-red-600 ml-1" title="Delete group">✕</button>
              </div>
            </div>

            {/* Members */}
            <div className="space-y-1 mb-2">
              {group.members.map(m => (
                <div key={m.id} className="flex items-center justify-between text-xs py-1 px-2 bg-white/60 dark:bg-gray-800/60 rounded">
                  <span className="text-gray-700 dark:text-gray-300">{m.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Lv.{m.level} • {m.avgScore}%</span>
                    <button onClick={() => removeFromGroup(group.id, m.id)} className="text-red-400 hover:text-red-600">×</button>
                  </div>
                </div>
              ))}
              {group.members.length === 0 && <p className="text-[10px] text-gray-400 italic">No members yet</p>}
            </div>

            {/* Add student dropdown */}
            {unassigned.length > 0 && (
              <select
                onChange={(e) => {
                  const s = allStudents.find(st => st.id === e.target.value)
                  if (s) addToGroup(group.id, s)
                  e.target.value = ''
                }}
                className="w-full text-xs px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                defaultValue="">
                <option value="" disabled>+ Add student...</option>
                {unassigned.map(s => <option key={s.id} value={s.id}>{s.name} (Lv.{s.level})</option>)}
              </select>
            )}
          </div>
        ))}
      </div>

      {/* Unassigned students */}
      {unassigned.length > 0 && groups.length > 0 && (
        <div className="p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Unassigned ({unassigned.length})</p>
          <div className="flex flex-wrap gap-1">
            {unassigned.map(s => (
              <span key={s.id} className="text-xs px-2 py-1 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400">
                {s.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
