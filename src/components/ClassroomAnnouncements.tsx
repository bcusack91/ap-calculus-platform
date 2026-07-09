'use client'

import { useState, useEffect, useCallback } from 'react'

interface Announcement {
  id: string
  title: string
  content: string
  isPinned: boolean
  createdAt: string
  author: { name: string | null }
}

interface ClassroomAnnouncementsProps {
  classroomId: string
  isTeacher: boolean
  /** Render nothing when there are no announcements (used on student surfaces). */
  hideWhenEmpty?: boolean
  /** Optional label shown above the list (useful when a student is in multiple classes). */
  classroomName?: string
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function ClassroomAnnouncements({
  classroomId,
  isTeacher,
  hideWhenEmpty = false,
  classroomName,
}: ClassroomAnnouncementsProps) {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Teacher compose form
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isPinned, setIsPinned] = useState(false)
  const [posting, setPosting] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const loadAnnouncements = useCallback(async () => {
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/announcements`)
      if (res.ok) {
        const data = await res.json()
        setAnnouncements(data.announcements || [])
        setError('')
      } else {
        setError('Failed to load announcements')
      }
    } catch {
      setError('Failed to load announcements')
    } finally {
      setLoading(false)
    }
  }, [classroomId])

  useEffect(() => {
    loadAnnouncements()
  }, [loadAnnouncements])

  const handlePost = async () => {
    if (!title.trim() || !content.trim() || posting) return
    setPosting(true)
    setError('')
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/announcements`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), content: content.trim(), isPinned }),
      })
      if (res.ok) {
        setTitle('')
        setContent('')
        setIsPinned(false)
        await loadAnnouncements()
      } else {
        const data = await res.json().catch(() => null)
        setError(data?.error || 'Failed to post announcement')
      }
    } catch {
      setError('Failed to post announcement')
    } finally {
      setPosting(false)
    }
  }

  const handleDelete = async (announcementId: string) => {
    if (!confirm('Delete this announcement? This cannot be undone.')) return
    setDeletingId(announcementId)
    setError('')
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/announcements`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ announcementId }),
      })
      if (res.ok) {
        setAnnouncements((prev) => prev.filter((a) => a.id !== announcementId))
      } else {
        const data = await res.json().catch(() => null)
        setError(data?.error || 'Failed to delete announcement')
      }
    } catch {
      setError('Failed to delete announcement')
    } finally {
      setDeletingId(null)
    }
  }

  if (loading) {
    if (hideWhenEmpty) return null
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    )
  }

  if (hideWhenEmpty && announcements.length === 0) return null

  return (
    <div>
      {classroomName && (
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-lg">📢</span>
          <h3 className="font-bold text-gray-900 dark:text-white">{classroomName}</h3>
        </div>
      )}

      {error && (
        <div className="mb-4 px-4 py-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300">
          {error}
        </div>
      )}

      {/* Teacher compose form */}
      {isTeacher && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            New Announcement
          </h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            maxLength={200}
            className="w-full px-4 py-3 mb-3 text-base border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your announcement..."
            rows={3}
            maxLength={5000}
            className="w-full px-4 py-3 mb-3 text-base border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-y"
          />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                checked={isPinned}
                onChange={(e) => setIsPinned(e.target.checked)}
                className="rounded"
              />
              📌 Pin to top
            </label>
            <button
              onClick={handlePost}
              disabled={posting || !title.trim() || !content.trim()}
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {posting ? 'Posting...' : 'Post Announcement'}
            </button>
          </div>
        </div>
      )}

      {/* Announcement list */}
      {announcements.length === 0 ? (
        <div className="text-center py-10">
          <div className="text-4xl mb-3">📢</div>
          <p className="text-gray-500 dark:text-gray-400 font-medium">No announcements yet</p>
          {isTeacher && (
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
              Post your first announcement to keep your class in the loop.
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {announcements.map((a) => (
            <div
              key={a.id}
              className={`p-4 rounded-xl border ${
                a.isPinned
                  ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {a.isPinned && <span title="Pinned">📌</span>}
                    <h4 className="font-bold text-gray-900 dark:text-white break-words">
                      {a.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words mb-2">
                    {a.content}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>{a.author?.name || 'Teacher'}</span>
                    <span aria-hidden="true">·</span>
                    <span>{formatDate(a.createdAt)}</span>
                  </div>
                </div>
                {isTeacher && (
                  <button
                    onClick={() => handleDelete(a.id)}
                    disabled={deletingId === a.id}
                    className="px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50 transition-colors shrink-0"
                  >
                    {deletingId === a.id ? 'Deleting...' : 'Delete'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
