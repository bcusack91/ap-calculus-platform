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

interface AsyncChallengeSummary {
  id: string
  topicSlug: string
  questionCount: number
  status: string
  challengerScore: number
  recipientScore: number | null
  expiresAt: string
  createdAt: string
  challenger?: { id: string; name: string | null; image: string | null }
  recipient?: { id: string; name: string | null; image: string | null } | null
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
  const [activeGroup, setActiveGroup] = useState<string>('all')
  const [asyncChallenges, setAsyncChallenges] = useState<{ sent: AsyncChallengeSummary[]; received: AsyncChallengeSummary[] }>({ sent: [], received: [] })
  const [creatingAsync, setCreatingAsync] = useState(false)

  // Topic groups for organized navigation
  const topicGroups = [
    {
      id: 'calculus',
      label: 'Calculus',
      icon: '∫',
      topics: [
        { id: 'ap-calculus-ab' as const, emoji: '∫', name: 'AP Calculus AB', desc: 'Limits, Derivatives & Integrals' },
        { id: 'ap-calculus-bc' as const, emoji: '∑', name: 'AP Calculus BC', desc: 'Series, Parametric & Polar' },
        { id: 'derivatives' as const, emoji: '📐', name: 'Derivatives', desc: 'Power, Chain, Product Rules' },
        { id: 'limits' as const, emoji: '♾️', name: 'Limits', desc: "L'Hôpital, Squeeze Theorem" },
        { id: 'integrals' as const, emoji: '∫', name: 'Integrals', desc: 'Antiderivatives & FTC' },
        { id: 'the-unit-circle' as const, emoji: '🔵', name: 'Unit Circle', desc: 'Angles & Coordinates' },
      ]
    },
    {
      id: 'math-foundations',
      label: 'Math Foundations',
      icon: '🔢',
      topics: [
        { id: 'algebra' as const, emoji: '🔢', name: 'Algebra 1', desc: 'Equations & Functions' },
        { id: 'algebra2' as const, emoji: '📊', name: 'Algebra 2', desc: 'Polynomials, Rationals & Logs' },
        { id: 'geometry' as const, emoji: '📐', name: 'Geometry', desc: 'Proofs, Triangles & Circles' },
        { id: 'precalc' as const, emoji: '📈', name: 'Pre-Calculus', desc: 'Functions, Series & Trig' },
        { id: 'ap-precalculus' as const, emoji: '📊', name: 'AP Precalculus', desc: 'Functions & Modeling' },
      ]
    },
    {
      id: 'science',
      label: 'AP Science',
      icon: '🔬',
      topics: [
        { id: 'ap-biology' as const, emoji: '🧬', name: 'AP Biology', desc: 'Cells, Genetics & Evolution' },
        { id: 'ap-chemistry' as const, emoji: '⚗️', name: 'AP Chemistry', desc: 'Reactions, Bonding & Equilibrium' },
        { id: 'ap-physics1' as const, emoji: '🚀', name: 'AP Physics 1', desc: 'Kinematics, Forces & Energy' },
        { id: 'ap-physics2' as const, emoji: '⚡', name: 'AP Physics 2', desc: 'Electricity, Magnetism & Optics' },
        { id: 'ap-physics-c-mech' as const, emoji: '🔧', name: 'AP Physics C: Mech', desc: 'Calculus-Based Mechanics' },
        { id: 'ap-physics-c-em' as const, emoji: '🧲', name: 'AP Physics C: E&M', desc: 'Calculus-Based E&M' },
      ]
    },
    {
      id: 'humanities',
      label: 'Humanities & Stats',
      icon: '🧠',
      topics: [
        { id: 'ap-psychology' as const, emoji: '🧠', name: 'AP Psychology', desc: 'Brain, Behavior & Cognition' },
        { id: 'ap-statistics' as const, emoji: '📊', name: 'AP Statistics', desc: 'Probability & Inference' },
      ]
    },
    {
      id: 'test-prep',
      label: 'Test Prep',
      icon: '📝',
      topics: [
        { id: 'sat-math' as const, emoji: '📐', name: 'SAT Math', desc: 'Algebra, Geometry & Data' },
        { id: 'sat-reading' as const, emoji: '📖', name: 'SAT Reading', desc: 'Comprehension & Evidence' },
        { id: 'sat-punctuation' as const, emoji: '📝', name: 'SAT Punctuation', desc: 'All Punctuation Rules' },
        { id: 'sat-punctuation-commas-semicolons' as const, emoji: '✏️', name: 'Commas & Semicolons', desc: 'SAT Punctuation Focus' },
        { id: 'act-math' as const, emoji: '🔢', name: 'ACT Math', desc: 'Pre-Algebra through Trig' },
        { id: 'act-science' as const, emoji: '🔬', name: 'ACT Science', desc: 'Data Interpretation & Research' },
      ]
    },
    {
      id: 'advanced',
      label: 'Advanced Topics',
      icon: '🧪',
      topics: [
        { id: 'ochem' as const, emoji: '🧪', name: 'Organic Chemistry', desc: 'Reactions & Mechanisms' },
        { id: 'parametric-equations' as const, emoji: '📈', name: 'Parametric Equations', desc: 'Curves & Eliminating Parameters' },
        { id: 'vectors' as const, emoji: '➡️', name: 'Vectors', desc: 'Magnitude, Dot Product & More' },
        { id: 'polar-coordinates' as const, emoji: '🌀', name: 'Polar Coordinates', desc: 'Polar Curves & Conversions' },
        { id: 'reflection-refraction' as const, emoji: '🌈', name: 'Reflection & Refraction', desc: 'Optics & Light' },
      ]
    },
  ]

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

  const fetchAsyncChallenges = useCallback(async () => {
    try {
      const res = await fetch('/api/competitive/async-challenge')
      if (res.ok) {
        const data = await res.json()
        setAsyncChallenges(data)
      }
    } catch (e) {
      console.error('Error fetching async challenges:', e)
    }
  }, [])

  const createAsyncChallenge = async () => {
    setCreatingAsync(true)
    try {
      const res = await fetch('/api/competitive/async-challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicSlug: selectedTopic,
          questionCount: 10,
          timeLimit: 300,
        }),
      })
      const data = await res.json()
      if (data.challengeId) {
        router.push(`/competitive/async/${data.challengeId}`)
      }
    } catch (e) {
      console.error('Error creating async challenge:', e)
    } finally {
      setCreatingAsync(false)
    }
  }

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
        void fetchAsyncChallenges()
      }, 0)
      return () => clearTimeout(timeoutId)
    }
  }, [session, fetchAsyncChallenges])

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
              Unlock competitive challenges by doing any ONE of the following:
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
                <h3 className="text-lg font-bold mb-4 text-center">Unlock Requirements (any one)</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${masteryPercent >= 60 ? 'bg-green-100 dark:bg-green-900 text-green-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
                      {masteryPercent >= 60 ? '✓' : '○'}
                    </div>
                    <div>
                      <p className="font-medium">Complete any interactive lesson (60%+ mastery)</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Your best progress: {masteryPercent}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-400">
                      ○
                    </div>
                    <div>
                      <p className="font-medium">Score 70%+ on any entrance quiz</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Take an entrance quiz from any course
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-400">
                      ○
                    </div>
                    <div>
                      <p className="font-medium">Score 60%+ on any diagnostic test</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Take a diagnostic test from any course
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-400">
                      ○
                    </div>
                    <div>
                      <p className="font-medium">Accept a challenge from a friend</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Have a friend send you a challenge link!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-400">
                      ○
                    </div>
                    <div>
                      <p className="font-medium">Ask your teacher for access</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Teachers can grant competitive mode access
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
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <button
              onClick={() => setActiveGroup('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeGroup === 'all'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              All Topics
            </button>
            {topicGroups.map(group => {
              const availableCount = group.topics.filter(t => competitiveCategories[t.id]).length
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveGroup(group.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    activeGroup === group.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <span>{group.icon}</span>
                  <span>{group.label}</span>
                  {availableCount > 0 && (
                    <span className={`ml-1 w-5 h-5 rounded-full text-xs flex items-center justify-center ${
                      activeGroup === group.id
                        ? 'bg-white/20 text-white'
                        : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    }`}>
                      {availableCount}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Topic Cards by Group */}
          <div className="space-y-6">
            {topicGroups
              .filter(group => activeGroup === 'all' || activeGroup === group.id)
              .map(group => (
                <div key={group.id}>
                  {activeGroup === 'all' && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{group.icon}</span>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{group.label}</h3>
                      <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2" />
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {group.topics.map(topic => {
                      const isAvailable = !!competitiveCategories[topic.id]
                      const isSelected = selectedTopic === topic.id
                      return (
                        <button
                          key={topic.id}
                          onClick={() => isAvailable && setSelectedTopic(topic.id)}
                          disabled={!isAvailable}
                          className={`relative p-4 rounded-xl transition-all text-left ${
                            isSelected
                              ? 'ring-3 ring-purple-500 bg-purple-50 dark:bg-purple-900/30 shadow-xl scale-[1.02]'
                              : isAvailable
                                ? 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-[1.01]'
                                : 'bg-gray-100 dark:bg-gray-800/50 opacity-50 cursor-not-allowed'
                          }`}
                        >
                          {isAvailable && (
                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500" />
                          )}
                          <div className="text-2xl mb-1.5">{topic.emoji}</div>
                          <h4 className="text-sm font-bold mb-0.5 leading-tight">{topic.name}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                            {topic.id === 'algebra2' && isAvailable && algebra2SubtopicDetails.length > 0
                              ? algebra2SubtopicDetails.map(s => s.label).join(', ')
                              : topic.desc
                            }
                          </p>
                          {!isAvailable && (
                            <span className="inline-block mt-1.5 text-[10px] text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-1.5 py-0.5 rounded-full font-medium">
                              🔒 Locked
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))
            }
          </div>

          {/* Cumulative Mode */}
          <div className="mt-4">
            <button
              onClick={() => setSelectedTopic('cumulative')}
              disabled={Object.values(competitiveCategories).filter(Boolean).length < 1}
              className={`w-full p-5 rounded-xl transition-all ${
                selectedTopic === 'cumulative'
                  ? 'ring-3 ring-purple-500 bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xl'
                  : 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-blue-600'
              } ${
                Object.values(competitiveCategories).filter(Boolean).length < 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h3 className="text-lg font-bold">Cumulative Mode</h3>
                  <p className="text-sm text-white/80">Mixed questions from all your unlocked topics</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Game Modes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

          <div 
            onClick={() => setSelectedMode('ASYNC_CHALLENGE')}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 cursor-pointer transition-all ${
              selectedMode === 'ASYNC_CHALLENGE' ? 'ring-4 ring-emerald-500' : ''
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">📬 Async Challenge</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Play now, share the link — your friend plays later!
            </p>
          </div>
        </div>

        {/* Queue Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
          {selectedMode === 'ASYNC_CHALLENGE' ? (
            <div className="text-center">
              <button
                onClick={createAsyncChallenge}
                disabled={creatingAsync}
                className="px-12 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-lg text-2xl transition-all shadow-lg hover:shadow-xl mb-4 disabled:opacity-50"
              >
                {creatingAsync ? 'Creating...' : '📬 Create Async Challenge'}
              </button>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                You&apos;ll answer 10 questions, then share a link for your friend to beat your score anytime.
              </p>
            </div>
          ) : !inQueue ? (
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

        {/* Async Challenges Inbox */}
        {profile && (asyncChallenges.sent.length > 0 || asyncChallenges.received.length > 0) && (
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📬 Your Async Challenges</h3>

            {asyncChallenges.received.filter(c => c.status === 'WAITING_FOR_OPPONENT').length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">Awaiting Your Response</h4>
                <div className="space-y-2">
                  {asyncChallenges.received
                    .filter(c => c.status === 'WAITING_FOR_OPPONENT')
                    .map(c => (
                      <button
                        key={c.id}
                        onClick={() => router.push(`/competitive/async/${c.id}`)}
                        className="w-full flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/50 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">⚔️</span>
                          <div className="text-left">
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">
                              {c.challenger?.name || 'Someone'} challenged you
                            </p>
                            <p className="text-xs text-gray-500">{c.topicSlug.replace(/-/g, ' ')} · {c.questionCount} questions</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">Play Now</span>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {asyncChallenges.sent.filter(c => c.status === 'WAITING_FOR_OPPONENT').length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Waiting for Opponent</h4>
                <div className="space-y-2">
                  {asyncChallenges.sent
                    .filter(c => c.status === 'WAITING_FOR_OPPONENT')
                    .map(c => (
                      <button
                        key={c.id}
                        onClick={() => router.push(`/competitive/async/${c.id}`)}
                        className="w-full flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">⏳</span>
                          <div className="text-left">
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">
                              Your {c.topicSlug.replace(/-/g, ' ')} challenge
                            </p>
                            <p className="text-xs text-gray-500">Score: {c.challengerScore}/{c.questionCount} · Waiting for opponent</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">Share Link</span>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {[...asyncChallenges.sent, ...asyncChallenges.received].filter(c => c.status === 'COMPLETED').length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Completed</h4>
                <div className="space-y-2">
                  {[...asyncChallenges.sent, ...asyncChallenges.received]
                    .filter(c => c.status === 'COMPLETED')
                    .slice(0, 5)
                    .map(c => (
                      <button
                        key={c.id}
                        onClick={() => router.push(`/competitive/async/${c.id}`)}
                        className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 border border-gray-200 dark:border-gray-600/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">✅</span>
                          <div className="text-left">
                            <p className="font-semibold text-gray-900 dark:text-white text-sm">
                              {c.topicSlug.replace(/-/g, ' ')}
                            </p>
                            <p className="text-xs text-gray-500">
                              {c.challengerScore} vs {c.recipientScore ?? '?'}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">View Results</span>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Challenge a Friend (link-based unlock) */}
        {profile && (
          <div className="mt-8">
            <ChallengeAFriend />
          </div>
        )}

        {/* Power-Up Shop */}
        {profile && (
          <div className="mt-8">
            <PowerUpShop currentXP={0} onPurchase={(_id, _cost) => { /* TODO: deduct XP via API */ }} />
          </div>
        )}
      </div>
    </div>
  )
}
