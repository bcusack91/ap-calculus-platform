'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface NotesPanelProps {
  topicSlug: string
  topicTitle?: string
}

export default function NotesPanel({ topicSlug, topicTitle }: NotesPanelProps) {
  const [content, setContent] = useState('')
  const [saved, setSaved] = useState(true)
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const saveTimeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    fetch(`/api/notes?topicSlug=${encodeURIComponent(topicSlug)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.note?.content) setContent(data.note.content)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [topicSlug])

  const save = useCallback(
    async (text: string) => {
      try {
        await fetch('/api/notes', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topicSlug, content: text }),
        })
        setSaved(true)
      } catch {
        console.error('Failed to save note')
      }
    },
    [topicSlug]
  )

  const handleChange = (text: string) => {
    setContent(text)
    setSaved(false)
    if (saveTimeout.current) clearTimeout(saveTimeout.current)
    saveTimeout.current = setTimeout(() => save(text), 1500)
  }

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">📝</span>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            My Notes{topicTitle ? ` — ${topicTitle}` : ''}
          </span>
          {content.length > 0 && (
            <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded-full">
              {content.split('\n').length} lines
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!saved && <span className="text-xs text-yellow-600 dark:text-yellow-400">Saving...</span>}
          {saved && content.length > 0 && <span className="text-xs text-green-600 dark:text-green-400">Saved</span>}
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="p-4 bg-white dark:bg-gray-900">
          {loading ? (
            <div className="h-32 animate-pulse bg-gray-100 dark:bg-gray-800 rounded" />
          ) : (
            <>
              <textarea
                value={content}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Take notes here... They auto-save as you type."
                className="w-full h-48 p-3 text-sm font-mono bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-gray-200 placeholder-gray-400"
              />
              <div className="flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{content.length.toLocaleString()} characters</span>
                <button
                  onClick={() => save(content)}
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Save now
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
