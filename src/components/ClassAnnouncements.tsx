'use client'

import { useState } from 'react'

/**
 * #195: Class Announcements / Push Notifications
 * Teachers can create and manage class-wide announcements
 */

interface Announcement {
  id: string
  title: string
  message: string
  type: 'info' | 'assignment' | 'reminder' | 'celebration'
  createdAt: string
  pinned: boolean
}

const TYPE_CONFIG = {
  info: { icon: 'ℹ️', color: 'blue', label: 'Info' },
  assignment: { icon: '📝', color: 'indigo', label: 'Assignment' },
  reminder: { icon: '⏰', color: 'yellow', label: 'Reminder' },
  celebration: { icon: '🎉', color: 'green', label: 'Celebration' },
} as const

const SAMPLE_ANNOUNCEMENTS: Announcement[] = [
  { id: '1', title: 'Unit Test Friday', message: 'Chapters 4-6 on derivatives. Review sessions available Thursday after school.', type: 'reminder', createdAt: '2025-01-15T10:00:00Z', pinned: true },
  { id: '2', title: 'Homework 12 Due', message: 'Complete problems 1-20 in Section 5.3 (Integration by Parts). Show all work.', type: 'assignment', createdAt: '2025-01-14T14:30:00Z', pinned: false },
  { id: '3', title: 'Class Average Up 5%!', message: 'Great job everyone! Our class average went from 78% to 83% this month. Keep studying!', type: 'celebration', createdAt: '2025-01-13T09:00:00Z', pinned: false },
  { id: '4', title: 'New Practice Set Available', message: 'AP exam practice problems for Series and Sequences have been added to the assignments tab.', type: 'info', createdAt: '2025-01-12T11:45:00Z', pinned: false },
]

export function ClassAnnouncements({ isTeacher = true }: { isTeacher?: boolean }) {
  const [announcements, setAnnouncements] = useState<Announcement[]>(SAMPLE_ANNOUNCEMENTS)
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [type, setType] = useState<Announcement['type']>('info')

  const handleCreate = () => {
    if (!title.trim() || !message.trim()) return
    const newAnn: Announcement = {
      id: Date.now().toString(),
      title: title.trim(),
      message: message.trim(),
      type,
      createdAt: new Date().toISOString(),
      pinned: false,
    }
    setAnnouncements(prev => [newAnn, ...prev])
    setTitle('')
    setMessage('')
    setType('info')
    setShowForm(false)
  }

  const togglePin = (id: string) => {
    setAnnouncements(prev => prev.map(a => a.id === id ? { ...a, pinned: !a.pinned } : a))
  }

  const deleteAnn = (id: string) => {
    setAnnouncements(prev => prev.filter(a => a.id !== id))
  }

  const sortedAnnouncements = [...announcements].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">📢 Announcements</h2>
        {isTeacher && (
          <button onClick={() => setShowForm(!showForm)}
            className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            {showForm ? 'Cancel' : '+ New'}
          </button>
        )}
      </div>

      {showForm && isTeacher && (
        <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Announcement title"
            className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            maxLength={100}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            rows={3}
            className="w-full px-3 py-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
            maxLength={500}
          />
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">Type:</span>
            {(Object.entries(TYPE_CONFIG) as [Announcement['type'], typeof TYPE_CONFIG[keyof typeof TYPE_CONFIG]][]).map(([key, cfg]) => (
              <button key={key} onClick={() => setType(key)}
                className={`text-xs px-2 py-1 rounded-md transition-colors ${type === key ? `bg-${cfg.color}-100 dark:bg-${cfg.color}-900/30 text-${cfg.color}-600` : 'bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400'}`}>
                {cfg.icon} {cfg.label}
              </button>
            ))}
          </div>
          <button onClick={handleCreate}
            className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            disabled={!title.trim() || !message.trim()}>
            Post Announcement
          </button>
        </div>
      )}

      <div className="space-y-3">
        {sortedAnnouncements.map(ann => {
          const cfg = TYPE_CONFIG[ann.type]
          const dateStr = new Date(ann.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
          return (
            <div key={ann.id} className={`p-4 rounded-lg border ${ann.pinned ? 'border-yellow-300 dark:border-yellow-600 bg-yellow-50/50 dark:bg-yellow-900/10' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30'}`}>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {ann.pinned && <span className="text-yellow-500 text-xs">📌</span>}
                    <span className="text-xs px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">{cfg.icon} {cfg.label}</span>
                    <span className="text-[10px] text-gray-400">{dateStr}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{ann.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{ann.message}</p>
                </div>
                {isTeacher && (
                  <div className="flex gap-1 flex-shrink-0">
                    <button onClick={() => togglePin(ann.id)} className="text-xs p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded" title={ann.pinned ? 'Unpin' : 'Pin'}>📌</button>
                    <button onClick={() => deleteAnn(ann.id)} className="text-xs p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded text-red-500" title="Delete">✕</button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
        {sortedAnnouncements.length === 0 && (
          <p className="text-center text-gray-400 dark:text-gray-500 py-8 text-sm">No announcements yet</p>
        )}
      </div>
    </div>
  )
}
