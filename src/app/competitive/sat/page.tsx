'use client'

import { useState, useEffect, useCallback, useRef, useMemo, Suspense } from 'react'
import { GAME_MODE_CARDS } from '@/lib/competitive-modes'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import AsyncChallengeButton from '@/components/AsyncChallengeButton'
import { useQueueElapsed, formatElapsed, QUEUE_FALLBACK_AFTER_SEC } from '@/components/competitive/QueueSearchPanel'
import { ChevronDown, Check, Users, Bot, SlidersHorizontal, Lock, X } from 'lucide-react'

interface QueueStatus { status: string; matchId?: string; position?: number; estimatedWait?: number; [key: string]: unknown }
interface UnlockCheckResponse { unlocked: boolean; competitiveCategories?: Record<string, boolean> }

interface Skill { slug: string; title: string; short: string; questionCount: number }
interface Domain { slug: string; title: string; emoji: string; questionCount: number; skills: Skill[] }
interface Section { slug: string; title: string; emoji: string; questionCount: number; domains: Domain[] }
interface TopicsResponse { sections: Section[]; allSlug: string; totalQuestions: number }

type MatchTier = 'easy' | 'medium' | 'hard'

const MULTI_PREFIX = 'multi:'
const MAX_TOPICS = 12

const TIERS: { key: MatchTier; label: string; icon: string }[] = [
  { key: 'easy', label: 'Easy', icon: '🌱' },
  { key: 'medium', label: 'Medium', icon: '⚖️' },
  { key: 'hard', label: 'Hard', icon: '🔥' },
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
  const [browsing, setBrowsing] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [openDomain, setOpenDomain] = useState<string | null>(null)
  const [showSettings, setShowSettings] = useState(false)
  const [selectedTier, setSelectedTier] = useState<MatchTier>('medium')
  const [selectedMode, setSelectedMode] = useState('SPEED_RACE')
  const [inQueue, setInQueue] = useState(false)
  const [queueStatus, setQueueStatus] = useState<QueueStatus | null>(null)
  const [showAIOptions, setShowAIOptions] = useState(false)
  const [error, setError] = useState('')
  const hasApplied = useRef(false)
  const queueElapsed = useQueueElapsed(inQueue)

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
        setActiveSection(topics.sections[0]?.slug ?? null)
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
            // A deep-linked selection is a specific one, so open the browser
            // onto the section it belongs to rather than hiding it behind a tap.
            setBrowsing(true)
            const owner = topics.sections.find(s =>
              applied.includes(s.slug) || s.domains.some(d => applied.includes(d.slug) || d.skills.some(k => applied.includes(k.slug))))
            if (owner) setActiveSection(owner.slug)
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

  const allSkills = useMemo(
    () => data?.sections.flatMap(s => s.domains.flatMap(d => d.skills.map(k => ({ ...k, domainSlug: d.slug })))) ?? [],
    [data],
  )

  /** Human label for whatever is currently selected (drives the action bar). */
  const selectionLabel = useMemo(() => {
    if (!data) return ''
    if (selected.length === 0) return 'Full SAT · both sections'
    if (selected.length === 1) {
      const s = selected[0]
      const section = data.sections.find(x => x.slug === s)
      if (section) return `${section.title} · whole section`
      const domain = data.sections.flatMap(x => x.domains).find(d => d.slug === s)
      if (domain) return domain.title
      return allSkills.find(k => k.slug === s)?.short ?? '1 topic'
    }
    return `${selected.length} topics selected`
  }, [selected, data, allSkills])

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
   * A skill inherits its domain's unlock state: unlock-check keys on the coarse
   * bank slugs, and gating each of the 37 skills separately would leave most of
   * the picker permanently locked for students who have done SAT work.
   */
  const isUnlocked = useCallback((domainSlug: string) => !!categories?.[domainSlug], [categories])

  /**
   * For any node, the set of slugs it is "family" with — itself plus its
   * ancestors and descendants across section → domain → skill.
   *
   * Selecting a node must clear its family so the selection never mixes levels.
   * Without this, tapping the "Math" quick-start card (selects `sat-math`) and
   * then a skill chip (`sat-skill-circles`) produced `multi:sat-math,
   * sat-skill-circles` — a match that drew HALF its questions from the whole
   * math section, which is exactly the "unrelated topics" a circles game showed.
   */
  const familyOf = useMemo(() => {
    const parent = new Map<string, string>()   // domain→section, skill→domain
    const children = new Map<string, string[]>() // section→domains, domain→skills
    for (const s of data?.sections ?? []) {
      children.set(s.slug, s.domains.map(d => d.slug))
      for (const d of s.domains) {
        parent.set(d.slug, s.slug)
        children.set(d.slug, d.skills.map(k => k.slug))
        for (const k of d.skills) parent.set(k.slug, d.slug)
      }
    }
    return (slug: string): Set<string> => {
      const fam = new Set<string>([slug])
      // ancestors
      let up = parent.get(slug)
      while (up) { fam.add(up); up = parent.get(up) }
      // descendants (BFS)
      const queue = [...(children.get(slug) ?? [])]
      while (queue.length) {
        const cur = queue.shift()!
        if (fam.has(cur)) continue
        fam.add(cur)
        queue.push(...(children.get(cur) ?? []))
      }
      return fam
    }
  }, [data])

  const toggle = (slug: string) => {
    setSelected(prev => {
      if (prev.includes(slug)) return prev.filter(s => s !== slug)
      // Drop any already-selected ancestor/descendant, then add — keeping the
      // selection to one coherent level and preventing redundant multi-slugs.
      const fam = familyOf(slug)
      const cleaned = prev.filter(s => !fam.has(s))
      if (cleaned.length >= MAX_TOPICS) return cleaned
      return [...cleaned, slug]
    })
  }

  /** Quick-start cards replace the selection outright rather than adding to it. */
  const pickOnly = (slug: string | null) => {
    setSelected(slug ? [slug] : [])
    setBrowsing(false)
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
  const section = data?.sections.find(s => s.slug === activeSection) ?? data?.sections[0]
  const modeCard = GAME_MODE_CARDS.find(m => m.key === selectedMode)

  if (!anyUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-10 px-4">
        <div className="max-w-md mx-auto text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          <Lock className="w-10 h-10 mx-auto mb-4 text-gray-400" aria-hidden />
          <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Complete an SAT lesson to unlock</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Finish any SAT Prep lesson, pass an SAT quiz, or score 60%+ on an SAT diagnostic to start competing.</p>
          <button onClick={() => router.push('/courses/sat-prep')} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">Browse SAT Prep lessons</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* pb leaves room for the sticky action bar */}
      <div className="max-w-3xl mx-auto px-4 py-6 pb-40">
        <button onClick={() => router.push('/competitive')} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">← All courses</button>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">📝 SAT Competitive</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Pick what to practice, then race an opponent.
          {data && <> <span className="font-semibold">{data.totalQuestions.toLocaleString()}</span> questions available.</>}
        </p>

        {error && <div className="mt-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-2 text-sm text-red-700 dark:text-red-300">{error}</div>}

        {/* ---- Step 1: quick start ---- */}
        <h2 className="mt-7 mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Practice</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { slug: null, emoji: '🎯', title: 'Full SAT', sub: 'Both sections mixed' },
            ...(data?.sections ?? []).map(s => ({ slug: s.slug, emoji: s.emoji, title: s.title, sub: `${s.questionCount.toLocaleString()} questions` })),
          ].map(card => {
            const active = !browsing && (card.slug === null ? selected.length === 0 : selected.length === 1 && selected[0] === card.slug)
            return (
              <button
                key={card.slug ?? 'all'}
                onClick={() => pickOnly(card.slug)}
                className={`rounded-2xl border-2 p-4 text-left transition-all ${
                  active
                    ? 'border-blue-600 bg-white dark:bg-gray-800 shadow-md'
                    : 'border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl" aria-hidden>{card.emoji}</span>
                  {active && <Check className="w-4 h-4 text-blue-600" aria-hidden />}
                </div>
                <div className="mt-2 font-bold text-sm text-gray-900 dark:text-white">{card.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{card.sub}</div>
              </button>
            )
          })}
        </div>

        {/* ---- Step 1b: specific skills (collapsed by default) ---- */}
        <button
          onClick={() => setBrowsing(b => !b)}
          className="mt-3 w-full flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 px-4 py-3 text-left hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
          aria-expanded={browsing}
        >
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Or choose specific skills</span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${browsing ? 'rotate-180' : ''}`} aria-hidden />
        </button>

        {browsing && data && (
          <div className="mt-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
            {/* Section tabs keep Math's 27 skills and R&W's 10 apart, so the
                picker never renders all 37 at once. */}
            <div className="flex border-b border-gray-100 dark:border-gray-700">
              {data.sections.map(s => (
                <button
                  key={s.slug}
                  onClick={() => { setActiveSection(s.slug); setOpenDomain(null) }}
                  className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                    activeSection === s.slug
                      ? 'text-blue-700 dark:text-blue-400 border-b-2 border-blue-600 -mb-px'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  <span aria-hidden>{s.emoji}</span> {s.title}
                </button>
              ))}
            </div>

            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {section?.domains.map(domain => {
                const unlocked = isUnlocked(domain.slug)
                const open = openDomain === domain.slug
                const picked = domain.skills.filter(k => selected.includes(k.slug)).length
                const wholeDomain = selected.includes(domain.slug)
                return (
                  <div key={domain.slug}>
                    <div className="flex items-center gap-2 px-4 py-3">
                      <button
                        onClick={() => unlocked && setOpenDomain(open ? null : domain.slug)}
                        disabled={!unlocked}
                        className="flex items-center gap-2.5 flex-1 min-w-0 text-left disabled:cursor-not-allowed"
                        aria-expanded={open}
                      >
                        <span className="text-lg flex-shrink-0" aria-hidden>{domain.emoji}</span>
                        <span className="min-w-0">
                          <span className={`block text-sm font-semibold truncate ${unlocked ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
                            {domain.title}
                          </span>
                          <span className="block text-xs text-gray-500 dark:text-gray-400">
                            {unlocked
                              ? <>{domain.skills.length} skills · {domain.questionCount} questions{picked > 0 && !wholeDomain && <span className="text-blue-600 dark:text-blue-400 font-semibold"> · {picked} selected</span>}</>
                              : 'Locked — complete an SAT lesson'}
                          </span>
                        </span>
                      </button>
                      <button
                        onClick={() => toggle(domain.slug)}
                        disabled={!unlocked}
                        className={`flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                          wholeDomain
                            ? 'bg-blue-600 text-white'
                            : unlocked
                              ? 'border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-400'
                              : 'border border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                        }`}
                        title="Practice this whole domain"
                      >
                        {wholeDomain ? <><Check className="inline w-3 h-3 mr-1" aria-hidden />All</> : 'All'}
                      </button>
                      {unlocked && (
                        <ChevronDown
                          className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
                          aria-hidden
                        />
                      )}
                    </div>

                    {open && unlocked && (
                      <div className="px-4 pb-4 -mt-1 flex flex-wrap gap-2">
                        {domain.skills.map(k => {
                          const on = selected.includes(k.slug)
                          return (
                            <button
                              key={k.slug}
                              onClick={() => toggle(k.slug)}
                              title={k.title}
                              className={`rounded-full px-3 py-1.5 text-xs font-medium border transition-colors ${
                                on
                                  ? 'bg-blue-600 text-white border-blue-600'
                                  : 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-400'
                              }`}
                            >
                              {on && <Check className="inline w-3 h-3 mr-1" aria-hidden />}
                              {k.short}
                              <span className="ml-1.5 opacity-60">{k.questionCount}</span>
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {selected.length >= MAX_TOPICS && (
          <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">Maximum {MAX_TOPICS} topics per match.</p>
        )}
        {selected.length > 0 && selectedQuestionCount < 10 && (
          <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">
            Only {selectedQuestionCount} question{selectedQuestionCount === 1 ? '' : 's'} in this pool — a match needs 10, so questions
            will repeat. Add more skills for a full match.
          </p>
        )}

        {/* ---- Step 2: settings (collapsed, showing current values) ---- */}
        <h2 className="mt-7 mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Match setup</h2>
        <button
          onClick={() => setShowSettings(s => !s)}
          className="w-full flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 px-4 py-3 text-left hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
          aria-expanded={showSettings}
        >
          <span className="flex items-center gap-2 min-w-0">
            <SlidersHorizontal className="w-4 h-4 flex-shrink-0 text-gray-400" aria-hidden />
            <span className="text-sm text-gray-800 dark:text-gray-200 truncate">
              <span className="font-semibold">{modeCard?.title ?? 'Speed Race'}</span>
              <span className="text-gray-500 dark:text-gray-400"> · {TIERS.find(t => t.key === selectedTier)?.label}</span>
            </span>
          </span>
          <ChevronDown className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform ${showSettings ? 'rotate-180' : ''}`} aria-hidden />
        </button>

        {showSettings && (
          <div className="mt-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Difficulty</p>
              <div className="grid grid-cols-3 gap-2">
                {TIERS.map(t => (
                  <button
                    key={t.key}
                    onClick={() => setSelectedTier(t.key)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      selectedTier === t.key
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-300'
                    }`}
                  >
                    <span aria-hidden>{t.icon}</span> {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Game mode</p>
              <div className="grid grid-cols-2 gap-2">
                {GAME_MODE_CARDS.map(m => (
                  <button
                    key={m.key}
                    onClick={() => setSelectedMode(m.key)}
                    className={`rounded-lg border px-3 py-2 text-left transition-colors ${
                      selectedMode === m.key
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30'
                        : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-sm font-semibold text-gray-900 dark:text-white"><span aria-hidden>{m.icon}</span> {m.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{m.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---- Sticky action bar: always shows what you're about to play ---- */}
      <div className="fixed bottom-0 inset-x-0 border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/70 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-3xl mx-auto px-4 py-3">
          {inQueue ? (
            <div>
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">Finding an opponent…</p>
                  <p className="text-xs text-gray-500">
                    <span className="font-mono tabular-nums">{formatElapsed(queueElapsed)}</span> elapsed
                    {queueStatus?.position !== undefined && <> · Queue position {queueStatus.position}</>}
                  </p>
                </div>
                <button onClick={leaveQueue} className="flex-shrink-0 rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Cancel</button>
              </div>
              {queueElapsed >= QUEUE_FALLBACK_AFTER_SEC && (
                <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">
                  No opponent yet — matchmaking depends on who&apos;s online. Cancel to play vs AI or send an async challenge instead.
                </p>
              )}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between gap-3 mb-2">
                <p className="text-xs text-gray-600 dark:text-gray-400 min-w-0 truncate">
                  <span className="font-semibold text-gray-900 dark:text-white">{selectionLabel}</span>
                  <span> · {selectedQuestionCount.toLocaleString()} questions</span>
                </p>
                {selected.length > 0 && (
                  <button onClick={() => pickOnly(null)} className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
                    <X className="w-3 h-3" aria-hidden /> Clear
                  </button>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button onClick={joinQueue} className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:shadow-lg transition-all">
                  <Users className="w-4 h-4" aria-hidden /> Find opponent
                </button>
                <button onClick={() => setShowAIOptions(v => !v)} className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 px-4 py-2.5 text-sm font-semibold text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  <Bot className="w-4 h-4" aria-hidden /> vs AI
                </button>
                <AsyncChallengeButton topicSlug={effectiveSlug} tier={selectedTier} />
              </div>
              {showAIOptions && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {TIERS.map(t => (
                    <button
                      key={t.key}
                      onClick={() => startAIPractice(t.key)}
                      className="flex-1 rounded-lg border border-gray-200 dark:border-gray-600 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:border-blue-400"
                    >
                      {t.icon} {t.label} bot
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
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
