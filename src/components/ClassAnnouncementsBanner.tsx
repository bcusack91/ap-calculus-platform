'use client'

import { useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Megaphone, X } from 'lucide-react'

interface Item {
  id: string
  classroomId: string
  classroomName: string
  authorName: string | null
  title: string
  snippet: string
  createdAt: string
  unread: boolean
}

interface ClassGroup {
  classroomId: string
  classroomName: string
  newest: Item
  more: number
}

const MAX_CLASSES = 3

function postedAgo(iso: string): string {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60_000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const h = Math.floor(mins / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  return d === 1 ? 'yesterday' : `${d} days ago`
}

/** Unread announcements, one card per class (newest post + how many more). */
export function groupUnread(items: Item[]): ClassGroup[] {
  const groups = new Map<string, ClassGroup>()
  for (const a of items) {
    if (!a.unread) continue
    const g = groups.get(a.classroomId)
    if (!g) groups.set(a.classroomId, { classroomId: a.classroomId, classroomName: a.classroomName, newest: a, more: 0 })
    else {
      g.more++
      if (a.createdAt > g.newest.createdAt) g.newest = a
    }
  }
  return [...groups.values()].sort((a, b) => (a.newest.createdAt < b.newest.createdAt ? 1 : -1))
}

/**
 * "New announcement from your teacher" on the student dashboard. Shows each
 * class's unread posts (last 14 days) until the student reads them on the
 * Assignments page or dismisses the card; both mark the class seen on the
 * server, so it stays dismissed on every device. Renders nothing otherwise.
 */
export default function ClassAnnouncementsBanner() {
  const { status } = useSession()
  const [groups, setGroups] = useState<ClassGroup[]>([])
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (status !== 'authenticated') return
    let active = true
    fetch('/api/announcements/recent', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (active && Array.isArray(d?.announcements)) setGroups(groupUnread(d.announcements)) })
      .catch(() => {})
    return () => { active = false }
  }, [status])

  const dismiss = (group: ClassGroup) => {
    setGroups((gs) => gs.filter((g) => g.classroomId !== group.classroomId))
    // Keep keyboard focus in the banner: the next card's link, if any.
    requestAnimationFrame(() => listRef.current?.querySelector<HTMLElement>('a')?.focus())
    void fetch('/api/announcements/seen', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Only what the card showed: a post that arrived since stays unread.
      body: JSON.stringify({ classroomId: group.classroomId, upTo: group.newest.createdAt }),
    }).catch(() => {})
  }

  if (groups.length === 0) return null

  return (
    <div ref={listRef} className="mb-6 space-y-2" aria-label="New class announcements">
      {groups.slice(0, MAX_CLASSES).map((group) => {
        const { classroomId, classroomName, newest, more } = group
        return (
        <div
          key={classroomId}
          className="flex items-start gap-3 rounded-xl border border-accent-light bg-accent-subtle p-4 shadow-sm dark:border-accent-light/30 dark:bg-accent-light/10"
        >
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-800">
            <Megaphone className="h-4 w-4 text-accent" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-gray-600 dark:text-gray-300">
              New from {newest.authorName || 'your teacher'} · {classroomName} · {postedAgo(newest.createdAt)}
            </p>
            <p className="mt-0.5 font-semibold text-gray-900 dark:text-white">{newest.title}</p>
            {newest.snippet && <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{newest.snippet}</p>}
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
              <Link
                href={`/assignments#class-${classroomId}`}
                className="font-semibold text-accent hover:text-accent-hover hover:underline"
              >
                {more > 0 ? `Read all ${more + 1}` : 'Read'} →
              </Link>
              {more > 0 && <span className="text-xs text-gray-500 dark:text-gray-400">+{more} more in this class</span>}
            </div>
          </div>
          <button
            type="button"
            onClick={() => dismiss(group)}
            className="shrink-0 rounded-md p-1 text-gray-500 hover:bg-white/70 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            aria-label={`Dismiss announcements from ${classroomName}`}
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
        )
      })}
    </div>
  )
}
