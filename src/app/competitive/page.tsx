'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { PowerUpShop } from '@/components/PowerUps'
import { ChallengeAFriend } from '@/components/ChallengeAFriend'

interface CompetitiveProfile {
  rank: string
  overallMMR: number
  wins: number
  losses: number
  totalMatches: number
  winStreak: number
  averageAccuracy: number
}

interface QueueStatus {
  status: string
  matchId?: string
  position?: number
  estimatedWait?: number
  [key: string]: unknown
}

interface UnlockRequirements {
  masteryLevel?: number
  currentTopic?: string
  currentTopicTitle?: string
}

interface UnlockCheckResponse {
  unlocked: boolean
  profile: CompetitiveProfile | null
  requirements: UnlockRequirements | null
  completedTopics?: string[]
  competitiveCategories?: Record<string, boolean>
  algebra2SubtopicDetails?: { key: string; label: string }[]
  justUnlocked?: boolean
}

export default function CompetitivePage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)
  const [unlocked, setUnlocked] = useState(false)
  const [profile, setProfile] = useState<CompetitiveProfile | null>(null)
  const [inQueue, setInQueue] = useState(false)
  const [queueStatus, setQueueStatus] = useState<QueueStatus | null>(null)
  const [selectedMode, setSelectedMode] = useState('SPEED_RACE')
  const [selectedTopic, setSelectedTopic] = useState<'the-unit-circle' | 'reflection-refraction' | 'derivatives' | 'limits' | 'integrals' | 'algebra' | 'algebra2' | 'sat-punctuation-commas-semicolons' | 'sat-punctuation' | 'parametric-equations' | 'vectors' | 'polar-coordinates' | 'ap-biology' | 'ap-chemistry' | 'ap-psychology' | 'ap-statistics' | 'ap-physics1' | 'ap-physics2' | 'ap-calculus-ab' | 'ap-calculus-bc' | 'ap-physics-c-mech' | 'ap-physics-c-em' | 'ap-precalculus' | 'sat-math' | 'sat-reading' | 'act-math' | 'act-science' | 'ochem' | 'precalc' | 'geometry' | 'cumulative'>('the-unit-circle')
  const [completedTopics, setCompletedTopics] = useState<string[]>([])
  const [competitiveCategories, setCompetitiveCategories] = useState<Record<string, boolean>>({})
  const [algebra2SubtopicDetails, setAlgebra2SubtopicDetails] = useState<{key: string; label: string}[]>([])
  const [requirements, setRequirements] = useState<UnlockRequirements | null>(null)
  const [showAIOptions, setShowAIOptions] = useState(false)

  async function checkUnlock() {
    try {
      const res = await fetch('/api/competitive/unlock-check')
      const data: UnlockCheckResponse = await res.json()
      
      setUnlocked(data.unlocked)
      setProfile(data.profile)
      setRequirements(data.requirements)
      setCompletedTopics(data.completedTopics || [])
      setCompetitiveCategories(data.competitiveCategories || {})
      setAlgebra2SubtopicDetails(data.algebra2SubtopicDetails || [])
      setLoading(false)

      if (data.justUnlocked) {
        // Show celebration
        alert('🎉 Competitive Mode Unlocked!')
      }
    } catch (error) {
      console.error('Error checking unlock:', error)
      setLoading(false)
    }
  }

  const joinQueue = async () => {
    try {
      // Team Battle uses separate queue endpoint and match page
      if (selectedMode === 'TEAM_BATTLE') {
        const res = await fetch('/api/competitive/team-queue', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topicSlug: selectedTopic })
        })
        const data: QueueStatus = await res.json()
        if (data.status === 'matched') {
          router.push(`/competitive/team-match/${data.matchId}`)
        } else {
          setInQueue(true)
          setQueueStatus(data)
        }
        return
      }

      const res = await fetch('/api/competitive/queue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicSlug: selectedTopic,
          gameMode: selectedMode
        })
      })
      
      const data: QueueStatus = await res.json()

      if (data.status === 'matched') {
        router.push(`/competitive/match/${data.matchId}`)
      } else {
        setInQueue(true)
        setQueueStatus(data)
      }
    } catch (error) {
      console.error('Error joining queue:', error)
    }
  }

  const leaveQueue = async () => {
    try {
      if (selectedMode === 'TEAM_BATTLE') {
        await fetch('/api/competitive/team-queue', { method: 'DELETE' })
      } else {
        await fetch('/api/competitive/queue', { method: 'DELETE' })
      }
      setInQueue(false)
      setQueueStatus(null)
    } catch (error) {
      console.error('Error leaving queue:', error)
    }
  }

  const startAIPractice = async (difficulty: 'easy' | 'medium' | 'hard') => {
    try {
      const res = await fetch('/api/competitive/practice-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicSlug: selectedTopic,
          gameMode: selectedMode,
          aiDifficulty: difficulty
        })
      })
      
      const data = await res.json()
      
      if (data.matchId) {
        if (data.isTeamMatch) {
          router.push(`/competitive/team-match/${data.matchId}`)
        } else {
          router.push(`/competitive/match/${data.matchId}`)
        }
      }
    } catch (error) {
      console.error('Error starting AI practice:', error)
    }
  }

  const checkQueue = useCallback(async () => {
    try {
      const endpoint = selectedMode === 'TEAM_BATTLE' ? '/api/competitive/team-queue' : '/api/competitive/queue'
      const res = await fetch(endpoint)
      const data: QueueStatus = await res.json()

      if (data.status === 'not_in_queue') {
        setInQueue(false)
        setQueueStatus(null)
      } else if (data.status === 'matched') {
        setInQueue(false)
        const matchUrl = selectedMode === 'TEAM_BATTLE'
          ? `/competitive/team-match/${data.matchId}`
          : `/competitive/match/${data.matchId}`
        router.push(matchUrl)
      } else {
        setQueueStatus(data)
      }
    } catch (error) {
      console.error('Error checking queue:', error)
    }
  }, [router, selectedMode])

  // Redirect to signin if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/competitive')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      const timeoutId = setTimeout(() => {
        void checkUnlock()
      }, 0)
      return () => clearTimeout(timeoutId)
    }
  }, [session])

  useEffect(() => {
    if (inQueue) {
      const interval = setInterval(checkQueue, 2000)
      return () => clearInterval(interval)
    }
  }, [inQueue, checkQueue])

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null // Will redirect in useEffect
  }

  if (!unlocked) {
    const masteryPercent = Math.round((requirements?.masteryLevel || 0) * 100)
    const currentTopic = requirements?.currentTopic || ''
    const topicTitle = requirements?.currentTopicTitle || 'a topic'
    
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🔒</div>
            <h1 className="text-4xl font-bold mb-4">Competitive Mode Locked</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Complete any topic&apos;s interactive lesson with 80%+ mastery to unlock competitive challenges!
            </p>
            <p className="text-md text-gray-500 dark:text-gray-400 mb-8">
              Finish an interactive lesson from any course to get started, or ask your teacher to grant you access.
            </p>
            
            {/* Progress Display */}
            <div className="mb-8">
              {currentTopic && (
                <>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Best Progress: {topicTitle}
                    </span>
                    <span className="text-sm font-semibold text-purple-600">{masteryPercent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${masteryPercent}%` }}
                    ></div>
                  </div>
                </>
              )}

              {/* Requirements */}
              <div className="text-left bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-4 text-center">Unlock Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${masteryPercent > 0 ? 'bg-green-100 dark:bg-green-900 text-green-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
                      {masteryPercent > 0 ? '✓' : '○'}
                    </div>
                    <div>
                      <p className="font-medium">Complete any topic&apos;s interactive lesson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Go through all sections including understanding checks
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${masteryPercent >= 80 ? 'bg-green-100 dark:bg-green-900 text-green-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
                      {masteryPercent >= 80 ? '✓' : '○'}
                    </div>
                    <div>
                      <p className="font-medium">Achieve 80%+ mastery</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Your best progress: {masteryPercent}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {currentTopic ? (
              <button
                onClick={() => router.push(`/topics/${currentTopic}/interactive`)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
              >
                Continue Learning: {topicTitle}
              </button>
            ) : (
              <button
                onClick={() => router.push('/topics')}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
              >
                Browse Topics
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 py-6 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
            <div className="hidden sm:block" /> {/* Spacer for centering */}
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Competitive Mode
            </h1>
            <button
              onClick={() => router.push('/profile')}
              className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors text-sm font-semibold"
            >
              ✏️ Customize Avatar
            </button>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Challenge other students and climb the ranks!
          </p>
        </div>

        {/* Profile Card */}
        {profile && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-5 sm:p-8 mb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h2 className="text-xl sm:text-3xl font-bold mb-1">{profile.rank}</h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Current Rank</p>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {profile.overallMMR}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">MMR Rating</p>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-green-600">
                  {profile.wins}W
                </div>
                <div className="text-xl sm:text-3xl font-bold text-red-600">
                  {profile.losses}L
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Topic Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Select Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => setSelectedTopic('the-unit-circle')}
              disabled={!completedTopics.includes('the-unit-circle')}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'the-unit-circle'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !completedTopics.includes('the-unit-circle')
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🔵</div>
              <h3 className="text-lg font-bold mb-1">Unit Circle</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Angles & Coordinates
              </p>
              {!completedTopics.includes('the-unit-circle') && (
                <span className="text-xs text-red-500 mt-1 block">Not Completed</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('reflection-refraction')}
              disabled={!completedTopics.includes('reflection-refraction')}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'reflection-refraction'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !completedTopics.includes('reflection-refraction')
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🌈</div>
              <h3 className="text-lg font-bold mb-1">Reflection & Refraction</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Optics & Light
              </p>
              {!completedTopics.includes('reflection-refraction') && (
                <span className="text-xs text-red-500 mt-1 block">Not Completed</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('derivatives')}
              disabled={!competitiveCategories['derivatives']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'derivatives'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['derivatives']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">📐</div>
              <h3 className="text-lg font-bold mb-1">Derivatives</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Power, Chain, Product Rules
              </p>
              {!competitiveCategories['derivatives'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete a Derivatives Topic</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('limits')}
              disabled={!competitiveCategories['limits']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'limits'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['limits']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">♾️</div>
              <h3 className="text-lg font-bold mb-1">Limits</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                L&apos;Hôpital, Squeeze Theorem
              </p>
              {!competitiveCategories['limits'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete a Limits Topic</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('integrals')}
              disabled={!competitiveCategories['integrals']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'integrals'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['integrals']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">∫</div>
              <h3 className="text-lg font-bold mb-1">Integrals</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Antiderivatives & FTC
              </p>
              {!competitiveCategories['integrals'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete an Integrals Topic</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('algebra')}
              disabled={!competitiveCategories['algebra']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'algebra'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['algebra']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🔢</div>
              <h3 className="text-lg font-bold mb-1">Algebra 1</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Equations & Functions
              </p>
              {!competitiveCategories['algebra'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete an Algebra 1 Topic</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('algebra2')}
              disabled={!competitiveCategories['algebra2']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'algebra2'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['algebra2']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-lg font-bold mb-1">Algebra 2</h3>
              {competitiveCategories['algebra2'] && algebra2SubtopicDetails.length > 0 ? (
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {algebra2SubtopicDetails.map(s => s.label).join(', ')}
                </p>
              ) : (
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Polynomials, Rationals & Logs
                </p>
              )}
              {!competitiveCategories['algebra2'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete an Algebra 2 Topic</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('sat-punctuation-commas-semicolons')}
              disabled={!competitiveCategories['sat-punctuation-commas-semicolons']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'sat-punctuation-commas-semicolons'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['sat-punctuation-commas-semicolons']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">✏️</div>
              <h3 className="text-lg font-bold mb-1">Commas, Semicolons & Colons</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                SAT Punctuation
              </p>
              {!competitiveCategories['sat-punctuation-commas-semicolons'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('sat-punctuation')}
              disabled={!competitiveCategories['sat-punctuation']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'sat-punctuation'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['sat-punctuation']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">📝</div>
              <h3 className="text-lg font-bold mb-1">SAT Punctuation</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                All Punctuation Rules
              </p>
              {!competitiveCategories['sat-punctuation'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('parametric-equations')}
              disabled={!competitiveCategories['parametric-equations']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'parametric-equations'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['parametric-equations']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">📈</div>
              <h3 className="text-lg font-bold mb-1">Parametric Equations</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Curves & Eliminating Parameters
              </p>
              {!competitiveCategories['parametric-equations'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('vectors')}
              disabled={!competitiveCategories['vectors']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'vectors'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['vectors']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">➡️</div>
              <h3 className="text-lg font-bold mb-1">Vectors</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Magnitude, Dot Product & More
              </p>
              {!competitiveCategories['vectors'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('polar-coordinates')}
              disabled={!competitiveCategories['polar-coordinates']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'polar-coordinates'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['polar-coordinates']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🌀</div>
              <h3 className="text-lg font-bold mb-1">Polar Coordinates</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Polar Curves & Conversions
              </p>
              {!competitiveCategories['polar-coordinates'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            {/* --- NEW SUBJECT BANKS --- */}
            <button
              onClick={() => setSelectedTopic('ap-biology')}
              disabled={!competitiveCategories['ap-biology']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-biology'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-biology']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🧬</div>
              <h3 className="text-lg font-bold mb-1">AP Biology</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Cells, Genetics & Evolution
              </p>
              {!competitiveCategories['ap-biology'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ap-chemistry')}
              disabled={!competitiveCategories['ap-chemistry']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-chemistry'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-chemistry']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">⚗️</div>
              <h3 className="text-lg font-bold mb-1">AP Chemistry</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Reactions, Bonding & Equilibrium
              </p>
              {!competitiveCategories['ap-chemistry'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ap-psychology')}
              disabled={!competitiveCategories['ap-psychology']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-psychology'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-psychology']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-lg font-bold mb-1">AP Psychology</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brain, Behavior & Cognition
              </p>
              {!competitiveCategories['ap-psychology'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ap-statistics')}
              disabled={!competitiveCategories['ap-statistics']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-statistics'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-statistics']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-lg font-bold mb-1">AP Statistics</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Probability & Inference
              </p>
              {!competitiveCategories['ap-statistics'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ap-physics1')}
              disabled={!competitiveCategories['ap-physics1']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-physics1'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-physics1']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-bold mb-1">AP Physics 1</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Kinematics, Forces & Energy
              </p>
              {!competitiveCategories['ap-physics1'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ap-physics2')}
              disabled={!competitiveCategories['ap-physics2']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-physics2'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-physics2']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-lg font-bold mb-1">AP Physics 2</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Electricity, Magnetism & Optics
              </p>
              {!competitiveCategories['ap-physics2'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ap-physics-c-mech')}
              disabled={!competitiveCategories['ap-physics-c-mech']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-physics-c-mech'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-physics-c-mech']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="text-lg font-bold mb-1">AP Physics C: Mech</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Calculus-Based Mechanics
              </p>
              {!competitiveCategories['ap-physics-c-mech'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ap-physics-c-em')}
              disabled={!competitiveCategories['ap-physics-c-em']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-physics-c-em'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-physics-c-em']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🧲</div>
              <h3 className="text-lg font-bold mb-1">AP Physics C: E&M</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Calculus-Based E&M
              </p>
              {!competitiveCategories['ap-physics-c-em'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ap-calculus-ab')}
              disabled={!competitiveCategories['ap-calculus-ab']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-calculus-ab'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-calculus-ab']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">∫</div>
              <h3 className="text-lg font-bold mb-1">AP Calculus AB</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Limits, Derivatives & Integrals
              </p>
              {!competitiveCategories['ap-calculus-ab'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ap-calculus-bc')}
              disabled={!competitiveCategories['ap-calculus-bc']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-calculus-bc'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-calculus-bc']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">∑</div>
              <h3 className="text-lg font-bold mb-1">AP Calculus BC</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Series, Parametric & Polar
              </p>
              {!competitiveCategories['ap-calculus-bc'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ap-precalculus')}
              disabled={!competitiveCategories['ap-precalculus']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ap-precalculus'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ap-precalculus']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">📊</div>
              <h3 className="text-lg font-bold mb-1">AP Precalculus</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Functions & Modeling
              </p>
              {!competitiveCategories['ap-precalculus'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('sat-math')}
              disabled={!competitiveCategories['sat-math']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'sat-math'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['sat-math']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">📐</div>
              <h3 className="text-lg font-bold mb-1">SAT Math</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Algebra, Geometry & Data
              </p>
              {!competitiveCategories['sat-math'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('sat-reading')}
              disabled={!competitiveCategories['sat-reading']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'sat-reading'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['sat-reading']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">📖</div>
              <h3 className="text-lg font-bold mb-1">SAT Reading</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Comprehension & Evidence
              </p>
              {!competitiveCategories['sat-reading'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('act-math')}
              disabled={!competitiveCategories['act-math']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'act-math'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['act-math']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🔢</div>
              <h3 className="text-lg font-bold mb-1">ACT Math</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Pre-Algebra through Trig
              </p>
              {!competitiveCategories['act-math'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('act-science')}
              disabled={!competitiveCategories['act-science']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'act-science'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['act-science']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🔬</div>
              <h3 className="text-lg font-bold mb-1">ACT Science</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Data Interpretation & Research
              </p>
              {!competitiveCategories['act-science'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('ochem')}
              disabled={!competitiveCategories['ochem']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'ochem'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['ochem']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🧪</div>
              <h3 className="text-lg font-bold mb-1">Organic Chemistry</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Reactions & Mechanisms
              </p>
              {!competitiveCategories['ochem'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('precalc')}
              disabled={!competitiveCategories['precalc']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'precalc'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['precalc']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">📈</div>
              <h3 className="text-lg font-bold mb-1">Pre-Calculus</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Functions, Series & Trig
              </p>
              {!competitiveCategories['precalc'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('geometry')}
              disabled={!competitiveCategories['geometry']}
              className={`p-5 rounded-xl transition-all ${
                selectedTopic === 'geometry'
                  ? 'ring-4 ring-purple-500 bg-white dark:bg-gray-800 shadow-xl'
                  : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
              } ${
                !competitiveCategories['geometry']
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">📐</div>
              <h3 className="text-lg font-bold mb-1">Geometry</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Proofs, Triangles & Circles
              </p>
              {!competitiveCategories['geometry'] && (
                <span className="text-xs text-red-500 mt-1 block">Complete the Topic First</span>
              )}
            </button>

            <button
              onClick={() => setSelectedTopic('cumulative')}
              disabled={Object.values(competitiveCategories).filter(Boolean).length < 1}
              className={`p-5 rounded-xl transition-all col-span-2 ${
                selectedTopic === 'cumulative'
                  ? 'ring-4 ring-purple-500 bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-xl'
                  : 'bg-gradient-to-br from-purple-400 to-blue-400 text-white shadow-lg hover:shadow-xl'
              } ${
                completedTopics.length < 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="text-lg font-bold mb-1">Cumulative</h3>
              <p className="text-xs text-white/90">
                Mixed Questions from All Topics
              </p>
              {Object.values(competitiveCategories).filter(Boolean).length < 1 && (
                <span className="text-xs text-red-200 mt-1 block">Complete 1+ Topic</span>
              )}
            </button>
          </div>
        </div>

        {/* Game Modes */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div 
            onClick={() => setSelectedMode('SPEED_RACE')}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 cursor-pointer transition-all ${
              selectedMode === 'SPEED_RACE' ? 'ring-4 ring-purple-500' : ''
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">⚡ Speed Race</h3>
            <p className="text-gray-600 dark:text-gray-400">
              First to complete 10 problems correctly wins!
            </p>
          </div>

          <div 
            onClick={() => setSelectedMode('ACCURACY_CHALLENGE')}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 cursor-pointer transition-all ${
              selectedMode === 'ACCURACY_CHALLENGE' ? 'ring-4 ring-purple-500' : ''
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">🎯 Accuracy Challenge</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Highest accuracy on 20 problems wins!
            </p>
          </div>

          <div 
            onClick={() => setSelectedMode('TEAM_BATTLE')}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 cursor-pointer transition-all ${
              selectedMode === 'TEAM_BATTLE' ? 'ring-4 ring-orange-500' : ''
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">👥 Team Battle 2v2</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Team up! First team to 15 combined points wins!
            </p>
          </div>
        </div>

        {/* Queue Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
          {!inQueue ? (
            <div className="text-center">
              <button
                onClick={joinQueue}
                className="px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg text-2xl transition-all shadow-lg hover:shadow-xl mb-4"
              >
                Find Match
              </button>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowAIOptions(!showAIOptions)}
                  className="px-8 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg transition-all"
                >
                  🤖 Practice vs AI
                </button>
                
                {showAIOptions && (
                  <div className="mt-4 flex justify-center gap-4">
                    <button
                      onClick={() => startAIPractice('easy')}
                      className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
                    >
                      Easy Bot
                    </button>
                    <button
                      onClick={() => startAIPractice('medium')}
                      className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-all"
                    >
                      Medium Bot
                    </button>
                    <button
                      onClick={() => startAIPractice('hard')}
                      className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all"
                    >
                      Hard Bot
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-4">{selectedMode === 'TEAM_BATTLE' ? '👥' : '🔍'}</div>
              <h3 className="text-2xl font-bold mb-4">
                {selectedMode === 'TEAM_BATTLE'
                  ? `Finding teammates... (${queueStatus?.playersInQueue || 1}/4 players)`
                  : 'Searching for opponent...'}
              </h3>
              <div className="text-gray-600 dark:text-gray-400 mb-6">
                {selectedMode === 'TEAM_BATTLE' ? (
                  <>Need {4 - (Number(queueStatus?.playersInQueue) || 1)} more players</>
                ) : (
                  <>
                    Queue Position: {queueStatus?.position || '...'}
                    <br />
                    Estimated Wait: ~{queueStatus?.estimatedWait || '...'}s
                  </>
                )}
              </div>
              <button
                onClick={leaveQueue}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all"
              >
                Cancel Search
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        {profile && (
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600">
                {profile.totalMatches}
              </div>
              <p className="text-gray-600 dark:text-gray-400">Total Matches</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600">
                {profile.winStreak}
              </div>
              <p className="text-gray-600 dark:text-gray-400">Win Streak</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600">
                {Math.round(profile.averageAccuracy * 100)}%
              </div>
              <p className="text-gray-600 dark:text-gray-400">Avg Accuracy</p>
            </div>
          </div>
        )}

        {/* Challenge a Friend */}
        {profile && (
          <div className="mt-8">
            <ChallengeAFriend />
          </div>
        )}

        {/* Power-Up Shop */}
        {profile && (
          <div className="mt-8">
            <PowerUpShop currentXP={0} onPurchase={(id, cost) => { /* TODO: deduct XP via API */ }} />
          </div>
        )}
      </div>
    </div>
  )
}
