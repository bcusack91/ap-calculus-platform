'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { GAME_MODE_CARDS } from '@/lib/competitive-modes';
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import AsyncChallengeButton from '@/components/AsyncChallengeButton'

interface QueueStatus { status: string; matchId?: string; position?: number; estimatedWait?: number; [key: string]: unknown }
interface UnlockCheckResponse { unlocked: boolean; competitiveCategories?: Record<string, boolean> }

type MatchTier = 'easy' | 'medium' | 'hard'

// The 4 SAT competitive banks, grouped like sibling pages group units.
// Slugs match competitive-utils mcqBanks / unlock-check category keys.
const SAT_SECTIONS: { name: string; emoji: string; topics: { slug: string; title: string; desc: string }[] }[] = [
  {
    name: 'Math',
    emoji: '🧮',
    topics: [
      { slug: 'sat-math', title: 'Mixed — All Areas', desc: 'A blend of all four math areas' },
      { slug: 'sat-math-algebra', title: 'Algebra', desc: 'Linear equations, inequalities & systems' },
      { slug: 'sat-math-advanced', title: 'Advanced Math', desc: 'Quadratics, polynomials, exponentials & functions' },
      { slug: 'sat-math-problem-solving', title: 'Problem-Solving & Data Analysis', desc: 'Ratios, percents, statistics & probability' },
      { slug: 'sat-math-geometry', title: 'Geometry & Trigonometry', desc: 'Angles, triangles, circles & trig' },
    ],
  },
  {
    name: 'Reading & Writing',
    emoji: '📖',
    topics: [
      { slug: 'sat-rw', title: 'Mixed — All Domains', desc: 'A blend of all four R&W domains' },
      { slug: 'sat-rw-information-ideas', title: 'Information & Ideas', desc: 'Central ideas, evidence & inferences' },
      { slug: 'sat-rw-craft-structure', title: 'Craft & Structure', desc: 'Words in context, purpose & cross-text' },
      { slug: 'sat-rw-expression', title: 'Expression of Ideas', desc: 'Transitions & rhetorical synthesis' },
      { slug: 'sat-rw-conventions', title: 'Standard English Conventions', desc: 'Punctuation, grammar & sentence structure' },
    ],
  },
]

const SECTION_COLORS = [
  { bg: 'bg-blue-500', light: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-700', text: 'text-blue-700 dark:text-blue-300' },
  { bg: 'bg-cyan-500', light: 'bg-cyan-50 dark:bg-cyan-900/20', border: 'border-cyan-200 dark:border-cyan-700', text: 'text-cyan-700 dark:text-cyan-300' },
]

const TIERS: { key: MatchTier; icon: string; title: string; desc: string }[] = [
  { key: 'easy', icon: '🌱', title: 'Easy', desc: 'All warm-up level questions' },
  { key: 'medium', icon: '⚖️', title: 'Medium', desc: 'Mostly medium with a light warm-up' },
  { key: 'hard', icon: '🔥', title: 'Hard', desc: 'Ramps from warm-ups into the hardest questions' },
]

export default function SatCompetitivePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const recommendedTopic = searchParams.get('topic')
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState<Record<string, boolean> | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [selectedTier, setSelectedTier] = useState<MatchTier>('medium')
  const [selectedMode, setSelectedMode] = useState('SPEED_RACE')
  const [inQueue, setInQueue] = useState(false)
  const [queueStatus, setQueueStatus] = useState<QueueStatus | null>(null)
  const [showAIOptions, setShowAIOptions] = useState(false)
  const hasAutoSelected = useRef(false)

  useEffect(() => {
    if (!session) return
    async function fetchUnlocks() {
      try {
        const res = await fetch('/api/competitive/unlock-check')
        if (!res.ok) throw new Error('Failed')
        const data: UnlockCheckResponse = await res.json()
        setCategories(data.competitiveCategories || {})
      } catch (err) { console.error('Error loading SAT competitive unlocks:', err) }
      finally { setLoading(false) }
    }
    void fetchUnlocks()
  }, [session])

  useEffect(() => { if (status === 'unauthenticated') router.push('/auth/signin?callbackUrl=/competitive/sat') }, [status, router])

  const checkQueue = useCallback(async () => {
    try {
      const res = await fetch(selectedMode === 'TEAM_BATTLE' ? '/api/competitive/team-queue' : '/api/competitive/queue')
      const data: QueueStatus = await res.json()
      if (data.status === 'not_in_queue') { setInQueue(false); setQueueStatus(null) }
      else if (data.status === 'matched') { setInQueue(false); router.push(`/competitive/${selectedMode === 'TEAM_BATTLE' ? 'team-match' : 'match'}/${data.matchId}?from=sat`) }
      else setQueueStatus(data)
    } catch (err) { console.error('Error checking queue:', err) }
  }, [router, selectedMode])

  useEffect(() => { if (inQueue) { const i = setInterval(checkQueue, 2000); return () => clearInterval(i) } }, [inQueue, checkQueue])

  useEffect(() => {
    if (categories && recommendedTopic && !hasAutoSelected.current) {
      hasAutoSelected.current = true
      const found = SAT_SECTIONS.flatMap(s => s.topics).find(t => t.slug === recommendedTopic && categories[t.slug])
      if (found) setSelectedTopic(found.slug)
    }
  }, [categories, recommendedTopic])

  const joinQueue = async () => {
    try {
      const res = await fetch(selectedMode === 'TEAM_BATTLE' ? '/api/competitive/team-queue' : '/api/competitive/queue', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topicSlug: selectedTopic || 'sat-math', gameMode: selectedMode, tier: selectedTier }) })
      const data: QueueStatus = await res.json()
      if (data.status === 'matched') router.push(`/competitive/${selectedMode === 'TEAM_BATTLE' ? 'team-match' : 'match'}/${data.matchId}?from=sat`)
      else { setInQueue(true); setQueueStatus(data) }
    } catch (err) { console.error('Error joining queue:', err) }
  }

  const leaveQueue = async () => { try { await fetch('/api/competitive/queue', { method: 'DELETE' }); setInQueue(false); setQueueStatus(null) } catch (err) { console.error('Error:', err) } }

  const startAIPractice = async (difficulty: 'easy' | 'medium' | 'hard') => {
    try {
      const res = await fetch('/api/competitive/practice-ai', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topicSlug: selectedTopic || 'sat-math', gameMode: selectedMode, aiDifficulty: difficulty, tier: selectedTier }) })
      const data = await res.json()
      if (data.matchId) router.push(`/competitive/${selectedMode === 'TEAM_BATTLE' ? 'team-match' : 'match'}/${data.matchId}?from=sat`)
    } catch (err) { console.error('Error:', err) }
  }

  if (status === 'loading' || loading) return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"><div className="animate-pulse text-xl text-gray-500">Loading SAT Competitive Mode…</div></div>)
  if (!session) return null
  if (!categories) return (<div className="min-h-screen flex items-center justify-center px-4"><div className="text-center"><p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Could not load SAT competitive mode.</p><button onClick={() => router.push('/sat')} className="text-blue-600 hover:underline">← Back to SAT Prep</button></div></div>)

  const allTopics = SAT_SECTIONS.flatMap(s => s.topics)
  const unlockedCount = allTopics.filter(t => categories[t.slug]).length
  const anyUnlocked = unlockedCount > 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button onClick={() => router.push('/sat')} className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline mb-6">← Back to SAT Prep</button>
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">SAT{' '}<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Competitive Mode</span></h1>
          <p className="text-gray-600 dark:text-gray-400">Pick a section, choose a difficulty and game mode, and challenge other students!</p>
          <div className="mt-4 max-w-md mx-auto">
            <div className="flex justify-between text-xs text-gray-500 mb-1"><span>{unlockedCount} / {allTopics.length} sections unlocked</span><span>{Math.round((unlockedCount / allTopics.length) * 100)}%</span></div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2.5 rounded-full transition-all" style={{ width: `${(unlockedCount / allTopics.length) * 100}%` }} /></div>
          </div>
        </div>

        <div className="space-y-6 mb-10">
          {SAT_SECTIONS.map((section, si) => {
            const colors = SECTION_COLORS[si % SECTION_COLORS.length]
            return (
              <div key={section.name} className={`rounded-2xl border ${colors.border} ${colors.light} p-5`}>
                <h2 className={`font-bold text-lg mb-3 ${colors.text}`}>{section.emoji} {section.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.topics.map(topic => {
                    const isSelected = selectedTopic === topic.slug
                    const isUnlocked = !!categories[topic.slug]
                    const isRecommended = topic.slug === recommendedTopic
                    return (
                      <button key={topic.slug} disabled={!isUnlocked} onClick={() => setSelectedTopic(isSelected ? null : topic.slug)} className={`relative text-left p-4 rounded-xl border transition-all ${isSelected ? 'ring-2 ring-orange-500 border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg' : isUnlocked ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md cursor-pointer' : 'border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 opacity-50 cursor-not-allowed'}`}>
                        {isRecommended && isUnlocked && (<span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold rounded-full bg-orange-500 text-white shadow">⭐ Recommended</span>)}
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold text-sm ${isUnlocked ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>{topic.title}</h3>
                          {isUnlocked ? (<span className="flex-shrink-0 ml-2 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center text-xs">✓</span>) : (<span className="flex-shrink-0 ml-2 w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-400 flex items-center justify-center text-xs">🔒</span>)}
                        </div>
                        <p className={`text-xs mt-1 ${isUnlocked ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500'}`}>{topic.desc}</p>
                        {!isUnlocked && (<p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Complete an SAT lesson or quiz to unlock</p>)}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {selectedTopic && anyUnlocked && (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">Choose Difficulty</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {TIERS.map(tier => (
                  <button key={tier.key} onClick={() => setSelectedTier(tier.key)} className={`p-5 rounded-xl border transition-all text-left ${selectedTier === tier.key ? 'ring-2 ring-orange-500 border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md'}`}>
                    <h3 className="text-lg font-bold mb-1">{tier.icon} {tier.title}</h3><p className="text-xs text-gray-600 dark:text-gray-400">{tier.desc}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">Choose Game Mode</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {GAME_MODE_CARDS.map(mode => (
                  <button key={mode.key} onClick={() => setSelectedMode(mode.key)} className={`p-5 rounded-xl border transition-all text-left ${selectedMode === mode.key ? 'ring-2 ring-orange-500 border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md'}`}>
                    <h3 className="text-lg font-bold mb-1">{mode.icon} {mode.title}</h3><p className="text-xs text-gray-600 dark:text-gray-400">{mode.desc}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-center">
              {!inQueue ? (
                <>
                  <button onClick={joinQueue} className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-xl text-xl transition-all shadow-lg hover:shadow-xl">Find Match</button>
                  <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => setShowAIOptions(!showAIOptions)} className="px-6 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg transition-all text-sm">🤖 Practice vs AI</button>
                    {showAIOptions && (<div className="mt-4 flex justify-center gap-3"><button onClick={() => startAIPractice('easy')} className="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg text-sm">Easy</button><button onClick={() => startAIPractice('medium')} className="px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg text-sm">Medium</button><button onClick={() => startAIPractice('hard')} className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg text-sm">Hard</button></div>)}
                  </div>
                  <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                    <AsyncChallengeButton
                      topicSlug={selectedTopic}
                      tier={selectedTier}
                      helperText="Play 10 questions now, then share a link — friends beat your score on their own time. Great when no one's online to match."
                    />
                  </div>
                </>
              ) : (
                <div><div className="text-4xl mb-3">🔍</div><h3 className="text-xl font-bold mb-2">Searching for opponent…</h3><p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Queue Position: {queueStatus?.position || '…'} · Est. Wait: ~{queueStatus?.estimatedWait || '…'}s</p><button onClick={leaveQueue} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all">Cancel</button></div>
              )}
            </div>
          </>
        )}

        {!anyUnlocked && (
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8">
            <div className="text-5xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Complete an SAT Lesson to Unlock</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Finish any SAT Prep lesson, pass an SAT quiz, or score 60%+ on an SAT diagnostic to start competing.</p>
            <button onClick={() => router.push('/courses/sat-prep')} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">Browse SAT Prep Lessons</button>
          </div>
        )}
      </div>
    </div>
  )
}
