'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Megaphone } from 'lucide-react'
import AvatarDisplay from './AvatarDisplay'
import type { AvatarData } from '@/types/avatar'
import { publicDisplayName } from '@/lib/display-name'

interface UserLite {
  id: string
  name: string | null
  image: string | null
  avatarData: unknown
}

interface IncomingItem {
  kind: 'incoming'
  id: string
  topicSlug: string
  timestamp: string
  from: UserLite | null
}

interface CompletedItem {
  kind: 'completed'
  id: string
  topicSlug: string
  timestamp: string
  opponent: UserLite | null
  myScore: number | null
  opponentScore: number | null
  questionCount: number
  outcome: 'win' | 'loss' | 'tie'
}

/** A class announcement from the last 14 days (students in a class only). */
interface AnnouncementItem {
  kind: 'announcement'
  id: string
  classroomId: string
  classroomName: string
  authorName: string | null
  title: string
  timestamp: string
  /** Posted after the student last saw that class's announcements. */
  unread: boolean
}

interface NotificationPayload {
  incoming: IncomingItem[]
  completed: CompletedItem[]
  announcements?: AnnouncementItem[]
  latestTimestamp: number
}

const SEEN_KEY = 'challenge-notifications-last-seen'
const POLL_INTERVAL_MS = 60_000 // 1 minute

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60_000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  return `${d}d ago`
}

function avatarFor(user: UserLite | null) {
  if (!user) {
    return (
      <div className="w-9 h-9 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-500 text-xs">?</div>
    )
  }
  if (user.avatarData) {
    return <AvatarDisplay avatarData={user.avatarData as AvatarData} size={36} />
  }
  return (
    <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
      {(user.name || '?')[0]}
    </div>
  )
}

export function NotificationBell() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState<NotificationPayload | null>(null)
  const [lastSeen, setLastSeen] = useState<number>(() => {
    if (typeof window === 'undefined') return 0
    return Number(localStorage.getItem(SEEN_KEY) || 0)
  })
  const ref = useRef<HTMLDivElement>(null)

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/notifications/challenges', { cache: 'no-store' })
      if (!res.ok) return
      const json: NotificationPayload = await res.json()
      setData(json)
    } catch {
      /* silent */
    }
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => { void fetchData() }, 0)
    const id = setInterval(fetchData, POLL_INTERVAL_MS)
    return () => { clearTimeout(timeoutId); clearInterval(id) }
  }, [fetchData])

  // Close on outside click / Escape
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const items: Array<IncomingItem | CompletedItem | AnnouncementItem> = data
    ? [...data.incoming, ...data.completed, ...(data.announcements ?? [])].sort(
        (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    : []

  const unseenCount = items.filter(i => new Date(i.timestamp).getTime() > lastSeen).length
  const hasUnseen = unseenCount > 0

  const handleToggle = () => {
    const next = !open
    setOpen(next)
    if (next && data && data.latestTimestamp > lastSeen) {
      // Mark all currently visible items as seen
      const ts = data.latestTimestamp
      localStorage.setItem(SEEN_KEY, String(ts))
      setLastSeen(ts)
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={handleToggle}
        aria-label={hasUnseen ? `Notifications (${unseenCount} new)` : 'Notifications'}
        aria-haspopup="menu"
        aria-expanded={open}
        className="relative inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {hasUnseen && (
          <span className="absolute top-1 right-1 inline-flex items-center justify-center min-w-[16px] h-4 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold leading-none">
            {unseenCount > 9 ? '9+' : unseenCount}
          </span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-80 sm:w-96 max-h-[28rem] overflow-y-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl z-50"
        >
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
            <Link
              href="/competitive"
              onClick={() => setOpen(false)}
              className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              All challenges
            </Link>
          </div>

          {items.length === 0 ? (
            <div className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
              Nothing new yet.<br />
              <Link
                href="/competitive"
                onClick={() => setOpen(false)}
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Send a challenge →
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100 dark:divide-gray-800">
              {items.slice(0, 15).map(item => {
                if (item.kind === 'announcement') {
                  return (
                    <li key={`a-${item.id}`}>
                      <Link
                        href={`/assignments#class-${item.classroomId}`}
                        onClick={() => setOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="w-9 h-9 shrink-0 rounded-full bg-accent-subtle dark:bg-accent-light/20 flex items-center justify-center">
                          <Megaphone className="w-4 h-4 text-accent" aria-hidden />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900 dark:text-white">
                            <span className="font-semibold">{item.authorName || 'Your teacher'}</span> posted in {item.classroomName}
                          </p>
                          <p className="flex gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <span className="min-w-0 truncate">{item.title}</span>
                            <span className="shrink-0">· {relativeTime(item.timestamp)}</span>
                          </p>
                        </div>
                        {item.unread && (
                          <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-accent-subtle text-accent dark:bg-accent-light/20 dark:text-accent-muted">
                            New
                          </span>
                        )}
                      </Link>
                    </li>
                  )
                }
                if (item.kind === 'incoming') {
                  return (
                    <li key={`i-${item.id}`}>
                      <Link
                        href={`/competitive/async/${item.id}`}
                        onClick={() => setOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        {avatarFor(item.from)}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900 dark:text-white">
                            <span className="font-semibold">{publicDisplayName(item.from?.name, 'Someone')}</span> challenged you
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {item.topicSlug} · {relativeTime(item.timestamp)}
                          </p>
                        </div>
                        <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                          Play
                        </span>
                      </Link>
                    </li>
                  )
                }
                const badge =
                  item.outcome === 'win'
                    ? { text: 'Won', cls: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300' }
                    : item.outcome === 'loss'
                    ? { text: 'Lost', cls: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' }
                    : { text: 'Tie', cls: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' }
                return (
                  <li key={`c-${item.id}`}>
                    <Link
                      href={`/competitive/async/${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      {avatarFor(item.opponent)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 dark:text-white">
                          <span className="font-semibold">{publicDisplayName(item.opponent?.name, 'Opponent')}</span> finished your challenge
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {item.myScore}–{item.opponentScore} · {item.topicSlug} · {relativeTime(item.timestamp)}
                        </p>
                      </div>
                      <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${badge.cls}`}>
                        {badge.text}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
