'use client'

import { useState, useEffect, useCallback, useRef, useMemo, Suspense } from 'react'
import { GAME_MODE_CARDS } from '@/lib/competitive-modes'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import AsyncChallengeButton from '@/components/AsyncChallengeButton'
import { ChevronDown, ChevronRight, Check, Shuffle, Users, Bot } from 'lucide-react'

interface QueueStatus { status: string; matchId?: string; position?: number; estimatedWait?: number; [key: string]: unknown }
interface UnlockCheckResponse { unlocked: boolean; competitiveCategories?: Record<string, boolean> }

interface Skill { slug: string; title: string; questionCount: number }
interface Domain { slug: string; title: string; emoji: string; questionCount: number; skills: Skill[] }
interface Section { slug: string; title: string; emoji: string; questionCount: number; domains: Domain[] }
interface TopicsResponse { sections: Section[]; allSlug: string; totalQuestions: number }

type MatchTier = 'easy' | 'medium' | 'hard'

const MULTI_PREFIX = 'multi:'
const MAX_TOPICS = 12

const TIERS: { key: MatchTier; icon: string; title: string; desc: string }[] = [
  { key: 'easy', icon: '🌱', title: 'Easy', desc: 'All warm-up level questions' },
  { key: 'medium', icon: '⚖️', title: 'Medium', desc: 'Mostly medium with a light warm-up' },
  { key: 'hard', icon: '🔥', title: 'Hard', desc: 'Ramps from warm-ups into the hardest questions' },
]

function buildSlug(selected: string[], allSlug: string): string {
  if (selected.length === 0) return allSlug
  if (selected.length === 1) return selected[0]
  const unique = [...new Set(selected)].sort().slice(0, MAX_TOPICS)
  return MULTI_PREFIX + unique.join(',')
}

function SatCompetitiveInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { data: session, status } = useSession()

  const [data, setData] = useState<TopicsResponse | null>(null)
  const [categories, setCategories] = useState<Record<string, boolean> | null>(null)
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<string[]>([])
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const [selectedTier, setSelectedTier] = useState<MatchTier>('medium')
  const [selectedMode, setSelectedMode] = useState('SPEED_RACE')
  const [inQueue, setInQueue] = useState(false)
  const [queueStatus, setQueueStatus] = useState<QueueStatus | null>(null)
  const [showAIOptions, setShowAIOptions] = useState(false)
  const [error, setError] = useState('')
  const hasApplied = useRef(false)

  // Teachers deep-link assignments as ?topics=a,b,c; the older single-topic
  // ?topic= link from the SAT dashboard still works.
  const topicsParam = searchParams.get('topics') ?? searchParams.get('topic')

  useEffect(() => {
    if (!session) return
    // No synchronous setState in the effect body — every update happens inside
    // an async callback (satisfies react-hooks/set-state-in-effect).
    Promise.all([
      fetch('/api/competitive/sat-topics').then(r => { if (!r.ok) throw new Error('failed'); return r.json() as Promise<TopicsResponse> }),
      fetch('/api/competitive/unlock-check').then(async (r): Promise<UnlockCheckResponse> =>
        r.ok ? r.json() : { unlocked: false, competitiveCategories: {} }),
    ])
      .then(([topics, unlocks]) => {
        setData(topics)
        setCategories(unlocks.competitiveCategories || {})
        if (topics.sections[0]) setOpenSections({ [topics.sections[0].slug]: true })
        if (topicsParam && !hasApplied.current) {
          hasApplied.current = true
          const valid = new Set<string>()
          for (const s of topics.sections) {
            valid.add(s.slug)
            for (const d of s.domains) {
              valid.add(d.slug)
              for (const k of d.skills) valid.add(k.slug)
            }
          }
          const applied = topicsParam.split(',').map(s => s.trim()).filter(s => valid.has(s))
          if (applied.length > 0) {
            setSelected(applied.slice(0, MAX_TOPICS))
            const toOpen: Record<string, boolean> = {}
            for (const s of topics.sections) {
              const has = applied.includes(s.slug)
                || s.domains.some(d => applied.includes(d.slug) || d.skills.some(k => applied.includes(k.slug)))
              if (has) toOpen[s.slug] = true
            }
            setOpenSections(prev => ({ ...prev, ...toOpen }))
          }
        }
      })
      .catch(() => setError('Could not load SAT topics.'))
      .finally(() => setLoading(false))
  }, [session, topicsParam])

  useEffect(() => { if (status === 'unauthenticated') router.push('/auth/signin?callbackUrl=/competitive/sat') }, [status, router])

  const checkQueue = useCallback(async () => {
    try {
      const res = await fetch(selectedMode === 'TEAM_BATTLE' ? '/api/competitive/team-queue' : '/api/competitive/queue')
      const d: QueueStatus = await res.json()
      if (d.status === 'not_in_queue') { setInQueue(false); setQueueStatus(null) }
      else if (d.status === 'matched') { setInQueue(false); router.push(`/competitive/${selectedMode === 'TEAM_BATTLE' ? 'team-match' : 'match'}/${d.matchId}?from=sat`) }
      else setQueueStatus(d)
    } catch { /* transient poll failure */ }
  }, [router, selectedMode])

  useEffect(() => { if (inQueue) { const i = setInterval(checkQueue, 2000); return () => clearInterval(i) } }, [inQueue, checkQueue])

  const effectiveSlug = useMemo(() => buildSlug(selected, data?.allSlug ?? 'sat-math'), [selected, data])

  const selectedQuestionCount = useMemo(() => {
    if (!data) return 0
    if (selected.length === 0) return data.totalQuestions
    let n = 0
    for (const s of data.sections) {
      if (selected.includes(s.slug)) { n += s.questionCount; continue }
      for (const d of s.domains) {
        if (selected.includes(d.slug)) { n += d.questionCount; continue }
        for (const k of d.skills) if (selected.includes(k.slug)) n += k.questionCount
      }
    }
    return n
  }, [selected, data])

  /**
   * A skill inherits its domain's unlock state: unlock-check keys on the 10
   * coarse bank slugs, and gating each of the 29 skills separately would leave
   * most of the picker permanently locked for students who have done SAT work.
   */
  const isUnlocked = useCallback((domainSlug: string) => !!categories?.[domainSlug], [categories])

  const toggle = (slug: string) => {
    setSelected(prev => {
      if (prev.includes(slug)) return prev.filter(s => s !== slug)
      if (prev.length >= MAX_TOPICS) return prev
      return [...prev, slug]
    })
  }

  const joinQueue = async () => {
    setError('')
    try {
      const res = await fetch(selectedMode === 'TEAM_BATTLE' ? '/api/competitive/team-queue' : '/api/competitive/queue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug: effectiveSlug, gameMode: selectedMode, tier: selectedTier }),
      })
      const d: QueueStatus = await res.json()
      if (!res.ok) { setError((d as { error?: string }).error || 'Could not join the queue.'); return }
      if (d.status === 'matched') router.push(`/competitive/${selectedMode === 'TEAM_BATTLE' ? 'team-match' : 'match'}/${d.matchId}?from=sat`)
      else { setInQueue(true); setQueueStatus(d) }
    } catch { setError('Could not join the queue.') }
  }

  const leaveQueue = async () => {
    try { await fetch('/api/competitive/queue', { method: 'DELETE' }) } catch { /* best effort */ }
    setInQueue(false); setQueueStatus(null)
  }

  const startAIPractice = async (difficulty: MatchTier) => {
    setError('')
    try {
      const res = await fetch('/api/competitive/practice-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug: effectiveSlug, gameMode: selectedMode, aiDifficulty: difficulty, tier: selectedTier }),
      })
      const d = await res.json()
      if (!res.ok) { setError(d.error || 'Could not start a practice match.'); return }
      if (d.matchId) router.push(`/competitive/${selectedMode === 'TEAM_BATTLE' ? 'team-match' : 'match'}/${d.matchId}?from=sat`)
    } catch { setError('Could not start a practice match.') }
  }

  if (status === 'loading' || loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" /></div>
  }
  if (!session) return null

  const anyUnlocked = !!data?.sections.some(s => s.domains.some(d => isUnlocked(d.slug)))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <button onClick={() => router.push('/competitive')} className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-2">← All courses</button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">📝 SAT Competitive</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Pick any mix of sections, domains, or individual College Board skills — then race an opponent.
            {data && <> <span className="font-semibold">{data.totalQuestions}</span> questions available.</>}
          </p>
        </div>

        {error && <div className="mb-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>}

        {!anyUnlocked ? (
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8">
            <div className="text-5xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Complete an SAT Lesson to Unlock</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Finish any SAT Prep lesson, pass an SAT quiz, or score 60%+ on an SAT diagnostic to start competing.</p>
            <button onClick={() => router.push('/courses/sat-prep')} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">Browse SAT Prep Lessons</button>
          </div>
        ) : (
          <>
            {/* Selection summary */}
            <div className="mb-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {selected.length === 0 ? 'Full SAT (both sections)' : `${selected.length} topic${selected.length > 1 ? 's' : ''} selected`}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{selectedQuestionCount} questions in pool</p>
                </div>
                {selected.length > 0 && (
                  <button onClick={() => setSelected([])} className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">Clear · use full test</button>
                )}
              </div>
              {selected.length >= MAX_TOPICS && (
                <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">Maximum {MAX_TOPICS} topics per match.</p>
              )}
              {selected.length > 0 && selectedQuestionCount < 10 && (
                <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">
                  Only {selectedQuestionCount} question{selectedQuestionCount === 1 ? '' : 's'} in this pool — a match needs 10, so
                  questions will repeat. Select more skills (or a whole domain) for a full match.
                </p>
              )}
            </div>

            {/* Hierarchical picker: section → domain → skill */}
            <div className="space-y-3 mb-6">
              {data?.sections.map(section => {
                const open = !!openSections[section.slug]
                const sectionUnlocked = section.domains.some(d => isUnlocked(d.slug))
                return (
                  <div key={section.slug} className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="flex items-center gap-2 p-4">
                      <button
                        onClick={() => setOpenSections(p => ({ ...p, [section.slug]: !open }))}
                        className="flex items-center gap-2 flex-1 min-w-0 text-left"
                        aria-expanded={open}
                      >
                        {open ? <ChevronDown className="w-4 h-4 flex-shrink-0 text-gray-400" aria-hidden /> : <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-400" aria-hidden />}
                        <span className="text-xl flex-shrink-0" aria-hidden>{section.emoji}</span>
                        <span className="min-w-0">
                          <span className="block font-bold text-gray-900 dark:text-white truncate">{section.title}</span>
                          <span className="block text-xs text-gray-500 dark:text-gray-400 truncate">{section.questionCount} questions</span>
                        </span>
                      </button>
                      <button
                        onClick={() => toggle(section.slug)}
                        disabled={!sectionUnlocked}
                        className={`flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                          selected.includes(section.slug)
                            ? 'bg-blue-600 text-white'
                            : sectionUnlocked
                              ? 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                        }`}
                        title={sectionUnlocked ? 'Add the whole section' : 'Complete an SAT lesson to unlock'}
                      >
                        {selected.includes(section.slug) ? <><Check className="inline w-3 h-3 mr-1" aria-hidden />Whole section</> : 'Whole section'}
                      </button>
                    </div>

                    {open && (
                      <div className="border-t border-gray-100 dark:border-gray-700 p-4 space-y-4">
                        {section.domains.map(domain => {
                          const unlocked = isUnlocked(domain.slug)
                          return (
                            <div key={domain.slug} className={unlocked ? '' : 'opacity-50'}>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 min-w-0 truncate">
                                  <span aria-hidden>{domain.emoji}</span> {domain.title}
                                  <span className="ml-2 text-xs font-normal text-gray-400">{domain.questionCount}q</span>
                                  {!unlocked && <span className="ml-2 text-xs font-normal text-gray-400">🔒</span>}
                                </p>
                                <button
                                  onClick={() => toggle(domain.slug)}
                                  disabled={!unlocked}
                                  className={`flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                                    selected.includes(domain.slug)
                                      ? 'bg-blue-600 text-white'
                                      : 'border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 enabled:hover:border-blue-400 disabled:cursor-not-allowed'
                                  }`}
                                >
                                  {selected.includes(domain.slug) ? <><Check className="inline w-3 h-3 mr-1" aria-hidden />All</> : 'All'}
                                </button>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {domain.skills.map(k => (
                                  <button
                                    key={k.slug}
                                    onClick={() => toggle(k.slug)}
                                    disabled={!unlocked}
                                    className={`rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
                                      selected.includes(k.slug)
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 enabled:hover:border-blue-400 enabled:hover:text-blue-700 disabled:cursor-not-allowed'
                                    }`}
                                  >
                                    {selected.includes(k.slug) && <Check className="inline w-3 h-3 mr-1" aria-hidden />}
                                    {k.title}
                                    <span className="ml-1.5 opacity-60">{k.questionCount}</span>
                                  </button>
                                ))}
                              </div>
                              {!unlocked && <p className="mt-1 text-xs text-gray-400">Complete an SAT lesson or quiz to unlock this domain.</p>}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Difficulty */}
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">Difficulty</h2>
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {TIERS.map(tier => (
                <button
                  key={tier.key}
                  onClick={() => setSelectedTier(tier.key)}
                  className={`rounded-xl border-2 p-3 text-left transition-all ${
                    selectedTier === tier.key
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300'
                  }`}
                >
                  <div className="text-xl mb-1" aria-hidden>{tier.icon}</div>
                  <div className="font-bold text-sm text-gray-900 dark:text-white">{tier.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{tier.desc}</div>
                </button>
              ))}
            </div>

            {/* Mode picker */}
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">Game mode</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {GAME_MODE_CARDS.map(m => (
                <button
                  key={m.key}
                  onClick={() => setSelectedMode(m.key)}
                  className={`rounded-xl border-2 p-3 text-left transition-all ${
                    selectedMode === m.key
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300'
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
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 dark:text-white">Finding an opponent…</p>
                {queueStatus?.position !== undefined && <p className="text-sm text-gray-500 mt-1">Queue position: {queueStatus.position}</p>}
                <button onClick={leaveQueue} className="mt-4 rounded-lg border border-gray-300 dark:border-gray-600 px-5 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-wrap gap-3">
                  <button onClick={joinQueue} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all">
                    <Users className="w-4 h-4" aria-hidden /> Find opponent
                  </button>
                  <button onClick={() => setShowAIOptions(!showAIOptions)} className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 px-6 py-3 text-sm font-semibold text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                    <Bot className="w-4 h-4" aria-hidden /> Practice vs AI
                  </button>
                  <AsyncChallengeButton topicSlug={effectiveSlug} tier={selectedTier} />
                  <button
                    onClick={() => { setSelected([]); void joinQueue() }}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 px-5 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    title="Queue across the entire SAT"
                  >
                    <Shuffle className="w-4 h-4" aria-hidden /> Full test mix
                  </button>
                </div>
                {showAIOptions && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button onClick={() => startAIPractice('easy')} className="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg text-sm">Easy bot</button>
                    <button onClick={() => startAIPractice('medium')} className="px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg text-sm">Medium bot</button>
                    <button onClick={() => startAIPractice('hard')} className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg text-sm">Hard bot</button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default function SatCompetitivePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" /></div>}>
      <SatCompetitiveInner />
    </Suspense>
  )
}
