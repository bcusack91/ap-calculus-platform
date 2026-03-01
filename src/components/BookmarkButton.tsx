'use client'

import { useState, useEffect } from 'react'

interface BookmarkButtonProps {
  lessonId: string
  lessonTitle: string
  variant?: 'icon' | 'full'
}

interface BookmarkEntry {
  id: string
  title: string
  savedAt: string
}

export default function BookmarkButton({ lessonId, lessonTitle, variant = 'full' }: BookmarkButtonProps) {
  const [saved, setSaved] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMounted(true)
      const bookmarks: BookmarkEntry[] = JSON.parse(localStorage.getItem('studymondo-bookmarks') || '[]')
      setSaved(bookmarks.some(b => b.id === lessonId))
    }, 0)
    return () => clearTimeout(timeoutId)
  }, [lessonId])

  const toggle = () => {
    const bookmarks: BookmarkEntry[] = JSON.parse(localStorage.getItem('studymondo-bookmarks') || '[]')

    if (saved) {
      const updated = bookmarks.filter(b => b.id !== lessonId)
      localStorage.setItem('studymondo-bookmarks', JSON.stringify(updated))
    } else {
      bookmarks.push({
        id: lessonId,
        title: lessonTitle,
        savedAt: new Date().toISOString(),
      })
      localStorage.setItem('studymondo-bookmarks', JSON.stringify(bookmarks))
    }

    setSaved(!saved)
  }

  if (!mounted) {
    return variant === 'icon' ? (
      <button className="p-2 rounded-lg" aria-label="Bookmark">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      </button>
    ) : (
      <button className="flex items-center gap-1.5 text-sm text-gray-400">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
        Save for later
      </button>
    )
  }

  if (variant === 'icon') {
    return (
      <button
        onClick={toggle}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
        aria-label={saved ? 'Remove bookmark' : 'Bookmark this lesson'}
        title={saved ? 'Remove bookmark' : 'Save for later'}
      >
        <svg
          className={`h-5 w-5 transition-colors ${
            saved
              ? 'text-purple-600 dark:text-purple-400 fill-current'
              : 'text-gray-400 group-hover:text-purple-500'
          }`}
          fill={saved ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      </button>
    )
  }

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 text-sm transition-colors ${
        saved
          ? 'text-purple-600 dark:text-purple-400 font-medium'
          : 'text-gray-500 hover:text-purple-600 dark:hover:text-purple-400'
      }`}
      aria-label={saved ? 'Remove bookmark' : 'Bookmark this lesson'}
    >
      <svg
        className={`h-4 w-4 ${saved ? 'fill-current' : ''}`}
        fill={saved ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
      {saved ? 'Saved' : 'Save for later'}
    </button>
  )
}

// Helper to get all bookmarks (for use in dashboard)
export function getBookmarks(): BookmarkEntry[] {
  if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem('studymondo-bookmarks') || '[]')
}

// Helper to clear all bookmarks
export function clearBookmarks() {
  if (typeof window === 'undefined') return
  localStorage.setItem('studymondo-bookmarks', JSON.stringify([]))
}
