'use client'

import type { LessonStatus } from '@/lib/video-lesson-admin'

/** Shared chrome for the instructor (/teacher/videos) and owner (/admin/instructors) tools. */

export const btn = {
  primary:
    'inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50',
  secondary:
    'inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
  danger:
    'inline-flex items-center justify-center gap-1.5 rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-red-800 dark:bg-gray-800 dark:text-red-300 dark:hover:bg-red-950/40',
  icon:
    'inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700',
}

export const field =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-ring/40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100'
export const fieldError = 'border-red-500 dark:border-red-500'
export const label = 'mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400'
export const card = 'rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-5'

/** 245 → "4:05" */
export function fmtDuration(sec: number): string {
  if (!(sec > 0)) return '–:––'
  const s = Math.round(sec)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const r = String(s % 60).padStart(2, '0')
  return h ? `${h}:${String(m).padStart(2, '0')}:${r}` : `${m}:${r}`
}

/** "4:05" or "245" → 245; null when unreadable. */
export function parseDurationInput(raw: string): number | null {
  const t = raw.trim()
  if (!t) return null
  if (/^\d+(\.\d+)?$/.test(t)) return Math.round(Number(t)) || null
  const parts = t.split(':').map((p) => p.trim())
  if (parts.some((p) => !/^\d+$/.test(p)) || parts.length > 3) return null
  return parts.reduce((n, p) => n * 60 + Number(p), 0) || null
}

const BADGE: Record<LessonStatus['kind'], { text: (s: LessonStatus) => string; cls: string }> = {
  new: { text: () => 'New', cls: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200' },
  draft: { text: (s) => ('published' in s && s.published ? `Draft · v${s.version} live` : 'Draft'), cls: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200' },
  submitted: { text: () => 'Submitted', cls: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200' },
  returned: { text: () => 'Returned with note', cls: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200' },
  published: { text: (s) => `Published v${'version' in s ? s.version : ''}`, cls: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200' },
  unpublished: { text: (s) => `Unpublished v${'version' in s ? s.version : ''}`, cls: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200' },
  archived: { text: () => 'Archived', cls: 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400' },
}

export function StatusBadge({ status }: { status: LessonStatus | null }) {
  if (!status) return null
  const b = BADGE[status.kind]
  return <span className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-xs font-semibold ${b.cls}`}>{b.text(status)}</span>
}

export function ClipStatusBadge({ status }: { status: string }) {
  const cls =
    status === 'APPROVED'
      ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200'
      : status === 'ARCHIVED'
        ? 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
  const text = status === 'APPROVED' ? 'Approved' : status === 'ARCHIVED' ? 'Archived' : 'Not yet approved'
  return <span className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-xs font-semibold ${cls}`}>{text}</span>
}

/** Same embed markup as ClassRecordings (youtube-nocookie, rel=0). */
export function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  )
}

export async function jsonFetch<T = Record<string, unknown>>(url: string, init?: RequestInit): Promise<{ ok: boolean; status: number; data: T & { error?: string; issues?: { path: string; message: string }[]; code?: string } }> {
  const res = await fetch(url, {
    cache: 'no-store',
    ...init,
    headers: init?.body ? { 'Content-Type': 'application/json', ...(init.headers ?? {}) } : init?.headers,
  })
  const data = await res.json().catch(() => ({}))
  return { ok: res.ok, status: res.status, data }
}
