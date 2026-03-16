'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'

interface TopicInfo { id: string; slug: string; title: string; completed: boolean; masteryLevel: number; status: string }
interface UnitInfo { unitNumber: number; name: string; slug: string; topics: TopicInfo[] }
interface TopicsResponse { units: UnitInfo[]; totalTopics: number; completedCount: number; hasAnyCompleted: boolean }
interface QueueStatus { status: string; matchId?: string; position?: number; estimatedWait?: number; [key: string]: unknown }

const UNIT_COLORS = [
  { bg: 'bg-teal-500', light: 'bg-teal-50 dark:bg-teal-900/20', border: 'border-teal-200 dark:border-teal-700', text: 'text-teal-700 dark:text-teal-300' },
  { bg: 'bg-blue-500', light: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-700', text: 'text-blue-700 dark:text-blue-300' },
  { bg: 'bg-indigo-500', light: 'bg-indigo-50 dark:bg-indigo-900/20', border: 'border-indigo-200 dark:border-indigo-700', text: 'text-indigo-700 dark:text-indigo-300' },
  { bg: 'bg-purple-500', light: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-700', text: 'text-purple-700 dark:text-purple-300' },
  { bg: 'bg-violet-500', light: 'bg-violet-50 dark:bg-violet-900/20', border: 'border-violet-200 dark:border-violet-700', text: 'text-violet-700 dark:text-violet-300' },
  { bg: 'bg-rose-500', light: 'bg-rose-50 dark:bg-rose-900/20', border: 'border-rose-200 dark:border-rose-700', text: 'text-rose-700 dark:text-rose-300' },
  { bg: 'bg-green-500', light: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-700', text: 'text-green-700 dark:text-green-300' },
]
const UNIT_EMOJIS = ['🚀', '⚙️', '💪', '🔄', '🌀', '🎵', '🌍']

export default function APPhysicsCMechCompetitivePage() {
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
        const res = await fetch('/api/competitive/physics-c-mech-topics')
        if (!res.ok) throw new Error('Failed to fetch topics')
        const data: TopicsResponse = await res.json()
        setTopicsData(data)
      } catch (err) { console.error('Error loading AP Physics C: Mechanics topics:', err) } finally { setLoading(false) }
    }
    void fetchTopics()
  }, [session])

  useEffect(() => { if (status === 'unauthenticated') router.push('/auth/signin?callbackUrl=/competitive/ap-physics-c-mechanics') }, [status, router])

  const checkQueue = useCallback(async () => {
    try {
      const res = await fetch('/api/competitive/queue')
      const data: QueueStatus = await res.json()
      if (data.status === 'not_in_queue') { setInQueue(false); setQueueStatus(null) }
      else if (data.status === 'matched') { setInQueue(false); router.push(`/competitive/match/${data.matchId}?from=ap-physics-c-mechanics`) }
      else { setQueueStatus(data) }
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
      const res = await fetch('/api/competitive/queue', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topicSlug: selectedTopic || 'ap-physics-c-mech', gameMode: selectedMode }) })
      const data: QueueStatus = await res.json()
      if (data.status === 'matched') router.push(`/competitive/match/${data.matchId}?from=ap-physics-c-mechanics`)
      else { setInQueue(true); setQueueStatus(data) }
    } catch (err) { console.error('Error joining queue:', err) }
  }

  const leaveQueue = async () => { try { await fetch('/api/competitive/queue', { method: 'DELETE' }); setInQueue(false); setQueueStatus(null) } catch (err) { console.error('Error leaving queue:', err) } }

  const startAIPractice = async (difficulty: 'easy' | 'medium' | 'hard') => {
    try {
      const res = await fetch('/api/competitive/practice-ai', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topicSlug: selectedTopic || 'ap-physics-c-mech', gameMode: selectedMode, aiDifficulty: difficulty }) })
      const data = await res.json()
      if (data.matchId) router.push(`/competitive/match/${data.matchId}?from=ap-physics-c-mechanics`)
    } catch (err) { console.error('Error starting AI practice:', err) }
  }

  if (status === 'loading' || loading) return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"><div className="animate-pulse text-xl text-gray-500">Loading AP Physics C: Mechanics Competitive Mode…</div></div>)
  if (!session) return null
  if (!topicsData) return (<div className="min-h-screen flex items-center justify-center px-4"><div className="text-center"><p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Could not load AP Physics C: Mechanics topics.</p><button onClick={() => router.push('/ap-physics-c-mechanics')} className="text-emerald-600 hover:underline">← Back to AP Physics C: Mechanics</button></div></div>)

  const anyCompleted = topicsData.hasAnyCompleted
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button onClick={() => router.push('/ap-physics-c-mechanics')} className="inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline mb-6">← Back to AP Physics C: Mechanics</button>
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">AP Physics C: Mechanics{' '}<span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Competitive Mode</span></h1>
          <p className="text-gray-600 dark:text-gray-400">Select a topic you&apos;ve completed, choose your game mode, and challenge other students!</p>
          <div className="mt-4 max-w-md mx-auto">
            <div className="flex justify-between text-xs text-gray-500 mb-1"><span>{topicsData.completedCount} / {topicsData.totalTopics} topics completed</span><span>{Math.round((topicsData.completedCount / topicsData.totalTopics) * 100)}%</span></div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2.5 rounded-full transition-all" style={{ width: `${(topicsData.completedCount / topicsData.totalTopics) * 100}%` }} /></div>
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
                      <button key={topic.slug} disabled={!isCompleted} onClick={() => setSelectedTopic(isSelected ? null : topic.slug)}
                        className={`relative text-left p-4 rounded-xl border transition-all ${isSelected ? 'ring-2 ring-orange-500 border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg' : isCompleted ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md cursor-pointer' : 'border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 opacity-50 cursor-not-allowed'}`}>
                        {isRecommended && isCompleted && (<span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold rounded-full bg-orange-500 text-white shadow">⭐ Recommended</span>)}
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
                {(['SPEED_RACE', 'ACCURACY_CHALLENGE', 'TEAM_BATTLE'] as const).map(mode => (
                  <button key={mode} onClick={() => setSelectedMode(mode)} className={`p-5 rounded-xl border transition-all text-left ${selectedMode === mode ? 'ring-2 ring-orange-500 border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md'}`}>
                    <h3 className="text-lg font-bold mb-1">{mode === 'SPEED_RACE' ? '⚡ Speed Race' : mode === 'ACCURACY_CHALLENGE' ? '🎯 Accuracy' : '👥 Team 2v2'}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{mode === 'SPEED_RACE' ? 'First to 10 correct wins!' : mode === 'ACCURACY_CHALLENGE' ? 'Highest accuracy on 20 wins!' : 'First team to 15 wins!'}</p>
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
                    {showAIOptions && (<div className="mt-4 flex justify-center gap-3"><button onClick={() => startAIPractice('easy')} className="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all text-sm">Easy</button><button onClick={() => startAIPractice('medium')} className="px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-all text-sm">Medium</button><button onClick={() => startAIPractice('hard')} className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all text-sm">Hard</button></div>)}
                  </div>
                </>
              ) : (
                <div>
                  <div className="text-4xl mb-3">🔍</div>
                  <h3 className="text-xl font-bold mb-2">Searching for opponent…</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Queue Position: {queueStatus?.position || '…'} · Est. Wait: ~{queueStatus?.estimatedWait || '…'}s</p>
                  <button onClick={leaveQueue} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all">Cancel</button>
                </div>
              )}
            </div>
          </>
        )}

        {!anyCompleted && (
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
            <div className="text-5xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Complete a Lesson to Unlock</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Finish any AP Physics C: Mechanics interactive lesson with 80%+ mastery to start competing.</p>
            <button onClick={() => router.push('/courses/ap-physics-c-mechanics')} className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">Browse AP Physics C: Mechanics Lessons</button>
          </div>
        )}
      </div>
    </div>
  )
}
