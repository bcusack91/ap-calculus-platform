'use client'

import { useState, useEffect, useCallback, useRef, useMemo, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { GAME_MODE_CARDS } from '@/lib/competitive-modes'
import AsyncChallengeButton from '@/components/AsyncChallengeButton'
import { ChevronDown, ChevronRight, Check, Shuffle, Users, Bot } from 'lucide-react'

interface Subtopic { slug: string; title: string; questionCount: number }
interface Area { slug: string; title: string; emoji: string; questionCount: number; subtopics: Subtopic[] }
interface Section { slug: string; title: string; short: string; emoji: string; gradient: string; questionCount: number; areas: Area[] }
interface TopicsResponse { sections: Section[]; allSlug: string; totalQuestions: number }
interface QueueStatus { status: string; matchId?: string; position?: number; estimatedWait?: number; [k: string]: unknown }

const MULTI_PREFIX = 'multi:'
const MAX_TOPICS = 12

function buildSlug(selected: string[], allSlug: string): string {
  if (selected.length === 0) return allSlug
  if (selected.length === 1) return selected[0]
  const unique = [...new Set(selected)].sort().slice(0, MAX_TOPICS)
  return MULTI_PREFIX + unique.join(',')
}

function McatCompetitiveInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { data: session, status } = useSession()

  const [data, setData] = useState<TopicsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<string[]>([])
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const [selectedMode, setSelectedMode] = useState('SPEED_RACE')
  const [inQueue, setInQueue] = useState(false)
  const [queueStatus, setQueueStatus] = useState<QueueStatus | null>(null)
  const [error, setError] = useState('')
  const hasApplied = useRef(false)

  // Teachers deep-link assignments here as ?topics=a,b,c
  const topicsParam = searchParams.get('topics')

  useEffect(() => {
    if (!session) return
    // No synchronous setState in the effect body — every update happens in an
    // async promise callback (satisfies react-hooks/set-state-in-effect).
    fetch('/api/competitive/mcat-topics')
      .then((r) => { if (!r.ok) throw new Error('failed'); return r.json() })
      .then((d: TopicsResponse) => {
        setData(d)
        // Open the first section by default so the picker isn't a wall of collapsed rows.
        if (d.sections[0]) setOpenSections({ [d.sections[0].slug]: true })
        // Apply a teacher deep-link (?topics=a,b,c) once the hierarchy is known.
        if (topicsParam && !hasApplied.current) {
          hasApplied.current = true
          const valid = new Set<string>()
          for (const s of d.sections) {
            valid.add(s.slug)
            for (const a of s.areas) {
              valid.add(a.slug)
              for (const t of a.subtopics) valid.add(t.slug)
            }
          }
          const applied = topicsParam.split(',').map((s) => s.trim()).filter((s) => valid.has(s))
          if (applied.length > 0) {
            setSelected(applied.slice(0, MAX_TOPICS))
            const toOpen: Record<string, boolean> = {}
            for (const s of d.sections) {
              const has = applied.includes(s.slug)
                || s.areas.some((a) => applied.includes(a.slug) || a.subtopics.some((t) => applied.includes(t.slug)))
              if (has) toOpen[s.slug] = true
            }
            setOpenSections((prev) => ({ ...prev, ...toOpen }))
          }
        }
      })
      .catch(() => setError('Could not load MCAT topics.'))
      .finally(() => setLoading(false))
  }, [session, topicsParam])

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/signin?callbackUrl=/competitive/mcat')
  }, [status, router])

  const checkQueue = useCallback(async () => {
    try {
      const res = await fetch('/api/competitive/queue')
      const d: QueueStatus = await res.json()
      if (d.status === 'not_in_queue') { setInQueue(false); setQueueStatus(null) }
      else if (d.status === 'matched') { setInQueue(false); router.push(`/competitive/match/${d.matchId}?from=mcat`) }
      else setQueueStatus(d)
    } catch { /* transient poll failure */ }
  }, [router])

  useEffect(() => {
    if (!inQueue) return
    const i = setInterval(checkQueue, 2000)
    return () => clearInterval(i)
  }, [inQueue, checkQueue])

  const effectiveSlug = useMemo(() => buildSlug(selected, data?.allSlug ?? 'mcat'), [selected, data])

  const selectedQuestionCount = useMemo(() => {
    if (!data) return 0
    if (selected.length === 0) return data.totalQuestions
    let n = 0
    for (const s of data.sections) {
      if (selected.includes(s.slug)) { n += s.questionCount; continue }
      for (const a of s.areas) {
        if (selected.includes(a.slug)) { n += a.questionCount; continue }
        for (const t of a.subtopics) if (selected.includes(t.slug)) n += t.questionCount
      }
    }
    return n
  }, [selected, data])

  const toggle = (slug: string) => {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug)
      if (prev.length >= MAX_TOPICS) return prev
      return [...prev, slug]
    })
  }

  const joinQueue = async () => {
    setError('')
    try {
      const res = await fetch('/api/competitive/queue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug: effectiveSlug, gameMode: selectedMode }),
      })
      const d: QueueStatus = await res.json()
      if (!res.ok) { setError((d as { error?: string }).error || 'Could not join the queue.'); return }
      if (d.status === 'matched') router.push(`/competitive/match/${d.matchId}?from=mcat`)
      else { setInQueue(true); setQueueStatus(d) }
    } catch { setError('Could not join the queue.') }
  }

  const leaveQueue = async () => {
    try { await fetch('/api/competitive/queue', { method: 'DELETE' }) } catch { /* best effort */ }
    setInQueue(false); setQueueStatus(null)
  }

  const playAI = async () => {
    setError('')
    try {
      const res = await fetch('/api/competitive/practice-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug: effectiveSlug, gameMode: selectedMode }),
      })
      const d = await res.json()
      if (!res.ok) { setError(d.error || 'Could not start a practice match.'); return }
      if (d.matchId) router.push(`/competitive/match/${d.matchId}?from=mcat`)
    } catch { setError('Could not start a practice match.') }
  }

  if (loading || status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent" /></div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <button onClick={() => router.push('/competitive')} className="text-sm text-accent hover:underline mb-2">← All courses</button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">🩺 MCAT Competitive</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Pick any mix of sections, subject areas, or individual subtopics — then race an opponent.
            {data && <> <span className="font-semibold">{data.totalQuestions}</span> questions available.</>}
          </p>
        </div>

        {error && <div className="mb-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>}

        {/* Selection summary */}
        <div className="mb-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {selected.length === 0 ? 'Full MCAT (all sections)' : `${selected.length} topic${selected.length > 1 ? 's' : ''} selected`}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{selectedQuestionCount} questions in pool</p>
            </div>
            {selected.length > 0 && (
              <button onClick={() => setSelected([])} className="text-xs font-medium text-accent hover:underline">Clear · use full exam</button>
            )}
          </div>
          {selected.length >= MAX_TOPICS && (
            <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">Maximum {MAX_TOPICS} topics per match.</p>
          )}
          {selected.length > 0 && selectedQuestionCount < 10 && (
            <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">
              Only {selectedQuestionCount} question{selectedQuestionCount === 1 ? '' : 's'} in this pool — a match needs 10, so
              questions will repeat. Select more subtopics (or a whole area) for a full match.
            </p>
          )}
        </div>

        {/* Hierarchical picker: section → area → subtopic */}
        <div className="space-y-3 mb-6">
          {data?.sections.map((section) => {
            const open = !!openSections[section.slug]
            return (
              <div key={section.slug} className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="flex items-center gap-2 p-4">
                  <button
                    onClick={() => setOpenSections((p) => ({ ...p, [section.slug]: !open }))}
                    className="flex items-center gap-2 flex-1 min-w-0 text-left"
                    aria-expanded={open}
                  >
                    {open ? <ChevronDown className="w-4 h-4 flex-shrink-0 text-gray-400" aria-hidden /> : <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-400" aria-hidden />}
                    <span className="text-xl flex-shrink-0" aria-hidden>{section.emoji}</span>
                    <span className="min-w-0">
                      <span className="block font-bold text-gray-900 dark:text-white truncate">{section.short}</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400 truncate">{section.title}</span>
                    </span>
                  </button>
                  <button
                    onClick={() => toggle(section.slug)}
                    className={`flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      selected.includes(section.slug)
                        ? 'bg-accent text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-accent-subtle'
                    }`}
                    title="Add the whole section"
                  >
                    {selected.includes(section.slug) ? <><Check className="inline w-3 h-3 mr-1" aria-hidden />Whole section</> : 'Whole section'}
                  </button>
                </div>

                {open && (
                  <div className="border-t border-gray-100 dark:border-gray-700 p-4 space-y-4">
                    {section.areas.map((area) => (
                      <div key={area.slug}>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 min-w-0 truncate">
                            <span aria-hidden>{area.emoji}</span> {area.title}
                            <span className="ml-2 text-xs font-normal text-gray-400">{area.questionCount}q</span>
                          </p>
                          <button
                            onClick={() => toggle(area.slug)}
                            className={`flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                              selected.includes(area.slug)
                                ? 'bg-accent text-white'
                                : 'border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-accent-muted'
                            }`}
                          >
                            {selected.includes(area.slug) ? <><Check className="inline w-3 h-3 mr-1" aria-hidden />All</> : 'All'}
                          </button>
                        </div>
                        {area.subtopics.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {area.subtopics.map((t) => (
                              <button
                                key={t.slug}
                                onClick={() => toggle(t.slug)}
                                className={`rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
                                  selected.includes(t.slug)
                                    ? 'bg-accent text-white border-accent'
                                    : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-accent-muted hover:text-accent-hover'
                                }`}
                              >
                                {selected.includes(t.slug) && <Check className="inline w-3 h-3 mr-1" aria-hidden />}
                                {t.title}
                                <span className="ml-1.5 opacity-60">{t.questionCount}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mode picker */}
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">Game mode</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {GAME_MODE_CARDS.map((m) => (
            <button
              key={m.key}
              onClick={() => setSelectedMode(m.key)}
              className={`rounded-xl border-2 p-3 text-left transition-all ${
                selectedMode === m.key
                  ? 'border-accent bg-accent-subtle dark:bg-accent-light/20'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-accent-muted'
              }`}
            >
              <div className="text-xl mb-1" aria-hidden>{m.icon}</div>
              <div className="font-bold text-sm text-gray-900 dark:text-white">{m.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{m.desc}</div>
            </button>
          ))}
        </div>

        {/* Actions */}
        {inQueue ? (
          <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent mx-auto mb-3" />
            <p className="font-semibold text-gray-900 dark:text-white">Finding an opponent…</p>
            {queueStatus?.position !== undefined && <p className="text-sm text-gray-500 mt-1">Queue position: {queueStatus.position}</p>}
            <button onClick={leaveQueue} className="mt-4 rounded-lg border border-gray-300 dark:border-gray-600 px-5 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            <button onClick={joinQueue} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all">
              <Users className="w-4 h-4" aria-hidden /> Find opponent
            </button>
            <button onClick={playAI} className="inline-flex items-center gap-2 rounded-lg border-2 border-accent px-6 py-3 text-sm font-semibold text-accent-hover dark:text-accent-muted hover:bg-accent-subtle dark:hover:bg-accent-light/20 transition-colors">
              <Bot className="w-4 h-4" aria-hidden /> Practice vs AI
            </button>
            <AsyncChallengeButton topicSlug={effectiveSlug} />
            <button
              onClick={() => { setSelected([]); void joinQueue() }}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 px-5 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              title="Queue across the entire MCAT"
            >
              <Shuffle className="w-4 h-4" aria-hidden /> Full exam mix
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function McatCompetitivePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent" /></div>}>
      <McatCompetitiveInner />
    </Suspense>
  )
}
