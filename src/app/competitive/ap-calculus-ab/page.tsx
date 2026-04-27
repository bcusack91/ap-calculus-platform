'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import AsyncChallengeButton from '@/components/AsyncChallengeButton'

interface TopicInfo { id: string; slug: string; title: string; completed: boolean; masteryLevel: number; status: string }
interface UnitInfo { unitNumber: number; name: string; slug: string; topics: TopicInfo[] }
interface TopicsResponse { units: UnitInfo[]; totalTopics: number; completedCount: number; hasAnyCompleted: boolean }
interface QueueStatus { status: string; matchId?: string; position?: number; estimatedWait?: number; [key: string]: unknown }

const UNIT_COLORS = [
  { bg: 'bg-red-500', light: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-700', text: 'text-red-700 dark:text-red-300' },
  { bg: 'bg-orange-500', light: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-700', text: 'text-orange-700 dark:text-orange-300' },
  { bg: 'bg-amber-500', light: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-700', text: 'text-amber-700 dark:text-amber-300' },
  { bg: 'bg-yellow-500', light: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-700', text: 'text-yellow-700 dark:text-yellow-300' },
  { bg: 'bg-rose-500', light: 'bg-rose-50 dark:bg-rose-900/20', border: 'border-rose-200 dark:border-rose-700', text: 'text-rose-700 dark:text-rose-300' },
  { bg: 'bg-fuchsia-500', light: 'bg-fuchsia-50 dark:bg-fuchsia-900/20', border: 'border-fuchsia-200 dark:border-fuchsia-700', text: 'text-fuchsia-700 dark:text-fuchsia-300' },
  { bg: 'bg-pink-500', light: 'bg-pink-50 dark:bg-pink-900/20', border: 'border-pink-200 dark:border-pink-700', text: 'text-pink-700 dark:text-pink-300' },
  { bg: 'bg-sky-500', light: 'bg-sky-50 dark:bg-sky-900/20', border: 'border-sky-200 dark:border-sky-700', text: 'text-sky-700 dark:text-sky-300' },
]

const UNIT_EMOJIS = ['📏', '📐', '∫', '🔄', '📈', '🧮', '🔢', '📊']

export default function APCalculusABCompetitivePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const recommendedTopic = searchParams.get('topic')
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)
  const [topicsData, setTopicsData] = useState<TopicsResponse | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [selectedMode, setSelectedMode] = useState('SPEED_RACE')
  const [inQueue, setInQueue] = useState(false)
  const [queueStatus, setQueueStatus] = useState<QueueStatus | null>(null)
  const [showAIOptions, setShowAIOptions] = useState(false)
  const hasAutoSelected = useRef(false)

  useEffect(() => {
    if (!session) return
    async function fetchTopics() {
      try {
        const res = await fetch('/api/competitive/calculus-ab-topics')
        if (!res.ok) throw new Error('Failed')
        setTopicsData(await res.json())
      } catch (err) { console.error('Error loading AP Calculus AB topics:', err) }
      finally { setLoading(false) }
    }
    void fetchTopics()
  }, [session])

  useEffect(() => { if (status === 'unauthenticated') router.push('/auth/signin?callbackUrl=/competitive/ap-calculus-ab') }, [status, router])

  const checkQueue = useCallback(async () => {
    try {
      const res = await fetch('/api/competitive/queue')
      const data: QueueStatus = await res.json()
      if (data.status === 'not_in_queue') { setInQueue(false); setQueueStatus(null) }
      else if (data.status === 'matched') { setInQueue(false); router.push(`/competitive/match/${data.matchId}?from=ap-calculus-ab`) }
      else setQueueStatus(data)
    } catch (err) { console.error('Error checking queue:', err) }
  }, [router])

  useEffect(() => { if (inQueue) { const i = setInterval(checkQueue, 2000); return () => clearInterval(i) } }, [inQueue, checkQueue])

  useEffect(() => {
    if (topicsData && recommendedTopic && !hasAutoSelected.current) {
      hasAutoSelected.current = true
      const found = topicsData.units.flatMap(u => u.topics).find(t => t.slug === recommendedTopic && t.completed)
      if (found) setSelectedTopic(found.slug)
    }
  }, [topicsData, recommendedTopic])

  const joinQueue = async () => {
    try {
      const res = await fetch('/api/competitive/queue', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topicSlug: selectedTopic || 'ap-calculus-ab', gameMode: selectedMode }) })
      const data: QueueStatus = await res.json()
      if (data.status === 'matched') router.push(`/competitive/match/${data.matchId}?from=ap-calculus-ab`)
      else { setInQueue(true); setQueueStatus(data) }
    } catch (err) { console.error('Error joining queue:', err) }
  }

  const leaveQueue = async () => { try { await fetch('/api/competitive/queue', { method: 'DELETE' }); setInQueue(false); setQueueStatus(null) } catch (err) { console.error('Error:', err) } }

  const startAIPractice = async (difficulty: 'easy' | 'medium' | 'hard') => {
    try {
      const res = await fetch('/api/competitive/practice-ai', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topicSlug: selectedTopic || 'ap-calculus-ab', gameMode: selectedMode, aiDifficulty: difficulty }) })
      const data = await res.json()
      if (data.matchId) router.push(`/competitive/match/${data.matchId}?from=ap-calculus-ab`)
    } catch (err) { console.error('Error:', err) }
  }

  if (status === 'loading' || loading) return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"><div className="animate-pulse text-xl text-gray-500">Loading AP Calculus AB Competitive Mode…</div></div>)
  if (!session) return null
  if (!topicsData) return (<div className="min-h-screen flex items-center justify-center px-4"><div className="text-center"><p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Could not load AP Calculus AB topics.</p><button onClick={() => router.push('/ap-calculus-ab')} className="text-red-600 hover:underline">← Back to AP Calculus AB</button></div></div>)

  const anyCompleted = topicsData.hasAnyCompleted

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button onClick={() => router.push('/ap-calculus-ab')} className="inline-flex items-center gap-1 text-sm text-red-600 dark:text-red-400 hover:underline mb-6">← Back to AP Calculus AB</button>
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">AP Calculus AB{' '}<span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Competitive Mode</span></h1>
          <p className="text-gray-600 dark:text-gray-400">Select a topic you&apos;ve completed, choose your game mode, and challenge other students!</p>
          <div className="mt-4 max-w-md mx-auto">
            <div className="flex justify-between text-xs text-gray-500 mb-1"><span>{topicsData.completedCount} / {topicsData.totalTopics} topics completed</span><span>{Math.round((topicsData.completedCount / topicsData.totalTopics) * 100)}%</span></div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-red-500 to-orange-500 h-2.5 rounded-full transition-all" style={{ width: `${(topicsData.completedCount / topicsData.totalTopics) * 100}%` }} /></div>
          </div>
        </div>

        <div className="space-y-6 mb-10">
          {topicsData.units.map((unit, ui) => {
            const colors = UNIT_COLORS[ui % UNIT_COLORS.length]
            const emoji = UNIT_EMOJIS[ui] || '📘'
            return (
              <div key={unit.slug} className={`rounded-2xl border ${colors.border} ${colors.light} p-5`}>
                <h2 className={`font-bold text-lg mb-3 ${colors.text}`}>{emoji} Unit {unit.unitNumber}: {unit.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {unit.topics.map(topic => {
                    const isSelected = selectedTopic === topic.slug
                    const isCompleted = topic.completed
                    const isRecommended = topic.slug === recommendedTopic
                    return (
                      <button key={topic.slug} disabled={!isCompleted} onClick={() => setSelectedTopic(isSelected ? null : topic.slug)} className={`relative text-left p-4 rounded-xl border transition-all ${isSelected ? 'ring-2 ring-red-500 border-red-300 dark:border-red-600 bg-white dark:bg-gray-800 shadow-lg' : isCompleted ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md cursor-pointer' : 'border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 opacity-50 cursor-not-allowed'}`}>
                        {isRecommended && isCompleted && (<span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold rounded-full bg-red-500 text-white shadow">⭐ Recommended</span>)}
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold text-sm ${isCompleted ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>{topic.title}</h3>
                          {isCompleted ? (<span className="flex-shrink-0 ml-2 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center text-xs">✓</span>) : (<span className="flex-shrink-0 ml-2 w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-400 flex items-center justify-center text-xs">🔒</span>)}
                        </div>
                        {isCompleted && (<div className="mt-1.5 flex items-center gap-2"><div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5"><div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${Math.round(topic.masteryLevel * 100)}%` }} /></div><span className="text-xs text-gray-500">{Math.round(topic.masteryLevel * 100)}%</span></div>)}
                        {!isCompleted && (<p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Complete the interactive lesson to unlock</p>)}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {selectedTopic && anyCompleted && (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">Choose Game Mode</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[{ key: 'SPEED_RACE', icon: '⚡', title: 'Speed Race', desc: 'First to 10 correct wins!' }, { key: 'ACCURACY_CHALLENGE', icon: '🎯', title: 'Accuracy', desc: 'Highest accuracy on 20 wins!' }, { key: 'TEAM_BATTLE', icon: '👥', title: 'Team 2v2', desc: 'First team to 15 wins!' }].map(mode => (
                  <button key={mode.key} onClick={() => setSelectedMode(mode.key)} className={`p-5 rounded-xl border transition-all text-left ${selectedMode === mode.key ? 'ring-2 ring-red-500 border-red-300 dark:border-red-600 bg-white dark:bg-gray-800 shadow-lg' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md'}`}>
                    <h3 className="text-lg font-bold mb-1">{mode.icon} {mode.title}</h3><p className="text-xs text-gray-600 dark:text-gray-400">{mode.desc}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 text-center">
              {!inQueue ? (
                <>
                  <button onClick={joinQueue} className="px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-xl text-xl transition-all shadow-lg hover:shadow-xl">Find Match</button>
                  <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={() => setShowAIOptions(!showAIOptions)} className="px-6 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg transition-all text-sm">🤖 Practice vs AI</button>
                    {showAIOptions && (<div className="mt-4 flex justify-center gap-3"><button onClick={() => startAIPractice('easy')} className="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg text-sm">Easy</button><button onClick={() => startAIPractice('medium')} className="px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg text-sm">Medium</button><button onClick={() => startAIPractice('hard')} className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg text-sm">Hard</button></div>)}
                  </div>
                  <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                    <AsyncChallengeButton
                      topicSlug={selectedTopic}
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

        {!anyCompleted && (
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
            <div className="text-5xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Complete a Lesson to Unlock</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Finish any AP Calculus AB interactive lesson with 80%+ mastery to start competing.</p>
            <button onClick={() => router.push('/courses/ap-calculus-ab')} className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">Browse AP Calculus AB Lessons</button>
          </div>
        )}
      </div>
    </div>
  )
}
