'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader2, Plus } from 'lucide-react'
import { parseYouTubeVideoId } from '@/lib/youtube-id'
import { loadYouTubeApi, YOUTUBE_NOCOOKIE_HOST, type YTPlayer } from '@/components/video/providers/youtube-api'
import { btn, field, fieldError, fmtDuration, jsonFetch, label, parseDurationInput } from './ui'

export type AuthoringClip = {
  id: string
  title: string
  provider: string
  providerId: string
  durationSec: number
  tags: string[]
  status: string
  approvedAt: string | null
  createdAt: string
  _count: { steps: number }
}

/**
 * Add a YouTube clip: paste the link, the preview player reads the length
 * once it is ready (getDuration), give it a title and concept tags. The
 * length can be typed in if the player cannot read it.
 */
export function NewClipForm({ query, onCreated, onCancel, compact }: { query: string; onCreated: (clip: AuthoringClip) => void; onCancel?: () => void; compact?: boolean }) {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [tags, setTags] = useState('')
  const [reading, setReading] = useState(false)
  const [previewError, setPreviewError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [busy, setBusy] = useState(false)
  const holder = useRef<HTMLDivElement>(null)
  const videoId = parseYouTubeVideoId(url)

  // Preview player: created per video id, destroyed on change/unmount.
  useEffect(() => {
    if (!videoId || !holder.current) return
    let player: YTPlayer | null = null
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const mount = document.createElement('div')
    holder.current.replaceChildren(mount)
    loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return
        player = new YT.Player(mount, {
          videoId,
          host: YOUTUBE_NOCOOKIE_HOST,
          width: '100%',
          height: '100%',
          playerVars: { rel: 0, playsinline: 1, modestbranding: 1 },
          events: {
            onReady: (e) => {
              // getDuration can be 0 until metadata arrives; retry briefly.
              const read = (tries: number) => {
                if (cancelled) return
                const d = Math.round(e.target.getDuration() || 0)
                if (d > 0) {
                  setDuration((cur) => (cur.trim() ? cur : fmtDuration(d)))
                  setReading(false)
                } else if (tries > 0) timers.push(setTimeout(() => read(tries - 1), 500))
                else {
                  setReading(false)
                  setPreviewError('Could not read the length. Play the preview for a second, or type it in.')
                }
              }
              read(10)
            },
            onStateChange: (e) => {
              const d = Math.round(e.target.getDuration() || 0)
              if (d > 0) setDuration((cur) => (cur.trim() ? cur : fmtDuration(d)))
            },
            onError: () => {
              if (cancelled) return
              setReading(false)
              setPreviewError('YouTube will not play this video here. Check that it is public or unlisted and that embedding is allowed.')
            },
          },
        })
      })
      .catch(() => {
        if (cancelled) return
        setReading(false)
        setPreviewError('Could not load the YouTube player. Type the length in.')
      })
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
      try { player?.destroy() } catch { /* already gone */ }
    }
  }, [videoId])

  const submit = async () => {
    const errs: Record<string, string> = {}
    const durationSec = parseDurationInput(duration)
    if (!videoId) errs.url = 'Paste a YouTube link, e.g. https://youtu.be/…'
    if (!title.trim()) errs.title = 'Give the clip a title.'
    if (!durationSec) errs.durationSec = 'Enter the length as m:ss.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    setBusy(true)
    const r = await jsonFetch<{ clip: AuthoringClip; field?: string }>(`/api/teacher/video-lessons/clips${query}`, {
      method: 'POST',
      body: JSON.stringify({ title, url, durationSec, tags: tags.split(',') }),
    })
    setBusy(false)
    if (!r.ok) {
      setErrors({ [r.data.field ?? 'form']: r.data.error ?? 'Could not add the clip' })
      return
    }
    setUrl('')
    setTitle('')
    setDuration('')
    setTags('')
    onCreated(r.data.clip)
  }

  return (
    <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
      <div className="space-y-3">
        <div>
          <label htmlFor="clip-url" className={label}>YouTube link</label>
          <input
            id="clip-url"
            className={`${field} ${errors.url ? fieldError : ''}`}
            value={url}
            onChange={(e) => {
              const next = parseYouTubeVideoId(e.target.value)
              if (next !== videoId) {
                setDuration('')
                setPreviewError(null)
                setReading(!!next)
              }
              setUrl(e.target.value)
            }}
            placeholder="https://youtu.be/…"
            aria-invalid={!!errors.url}
          />
          {errors.url && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.url}</p>}
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Upload to YouTube as Unlisted, then paste the link. Keep clips about 3–8 minutes.</p>
        </div>
        <div>
          <label htmlFor="clip-title" className={label}>Title</label>
          <input id="clip-title" className={`${field} ${errors.title ? fieldError : ''}`} value={title} onChange={(e) => setTitle(e.target.value)} aria-invalid={!!errors.title} />
          {errors.title && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.title}</p>}
        </div>
        <div className="grid grid-cols-[8rem_minmax(0,1fr)] gap-3">
          <div>
            <label htmlFor="clip-duration" className={label}>Length</label>
            <div className="relative">
              <input
                id="clip-duration"
                className={`${field} ${errors.durationSec ? fieldError : ''}`}
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="m:ss"
                aria-invalid={!!errors.durationSec}
              />
              {reading && <Loader2 className="absolute right-2 top-2.5 h-4 w-4 animate-spin text-gray-400" aria-label="Reading length" />}
            </div>
          </div>
          <div>
            <label htmlFor="clip-tags" className={label}>Concept tags</label>
            <input id="clip-tags" className={field} value={tags} onChange={(e) => setTags(e.target.value)} placeholder="periodic-trends, zeff" />
          </div>
        </div>
        {errors.durationSec && <p className="text-xs text-red-600 dark:text-red-400">{errors.durationSec}</p>}
        {errors.form && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{errors.form}</p>}
        <div className="flex gap-2">
          <button type="button" className={btn.primary} onClick={submit} disabled={busy}>
            <Plus className="h-4 w-4" aria-hidden /> Add clip
          </button>
          {onCancel && <button type="button" className={btn.secondary} onClick={onCancel}>Cancel</button>}
        </div>
      </div>
      <div>
        {videoId ? (
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black" ref={holder} />
        ) : (
          <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-gray-300 text-sm text-gray-400 dark:border-gray-600">
            Preview appears here
          </div>
        )}
        {previewError && <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">{previewError}</p>}
      </div>
    </div>
  )
}
