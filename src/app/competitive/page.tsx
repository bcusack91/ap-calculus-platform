'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function CompetitivePage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(true)
  const [unlocked, setUnlocked] = useState(false)
  const [profile, setProfile] = useState<any>(null)
  const [inQueue, setInQueue] = useState(false)
  const [queueStatus, setQueueStatus] = useState<any>(null)
  const [selectedMode, setSelectedMode] = useState('SPEED_RACE')
  const [requirements, setRequirements] = useState<any>(null)
  const [showAIOptions, setShowAIOptions] = useState(false)
  const [aiDifficulty, setAiDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium')

  // Redirect to signin if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/competitive')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      checkUnlock()
    }
  }, [session])

  useEffect(() => {
    if (inQueue) {
      const interval = setInterval(checkQueue, 2000)
      return () => clearInterval(interval)
    }
  }, [inQueue])

  const checkUnlock = async () => {
    try {
      const res = await fetch('/api/competitive/unlock-check')
      const data = await res.json()
      
      setUnlocked(data.unlocked)
      setProfile(data.profile)
      setRequirements(data.requirements)
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
      const res = await fetch('/api/competitive/queue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicSlug: 'the-unit-circle',
          gameMode: selectedMode
        })
      })
      
      const data = await res.json()

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
      await fetch('/api/competitive/queue', { method: 'DELETE' })
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
          topicSlug: 'the-unit-circle',
          gameMode: selectedMode,
          aiDifficulty: difficulty
        })
      })
      
      const data = await res.json()
      
      if (data.matchId) {
        router.push(`/competitive/match/${data.matchId}`)
      }
    } catch (error) {
      console.error('Error starting AI practice:', error)
    }
  }

  const checkQueue = async () => {
    try {
      const res = await fetch('/api/competitive/queue')
      const data = await res.json()

      if (data.status === 'not_in_queue') {
        setInQueue(false)
        setQueueStatus(null)
      } else {
        setQueueStatus(data)
      }
    } catch (error) {
      console.error('Error checking queue:', error)
    }
  }

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
    const partsCompleted = requirements?.partsCompleted || {}
    
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🔒</div>
            <h1 className="text-4xl font-bold mb-4">Competitive Mode Locked</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Complete the Unit Circle module with 80%+ mastery to unlock competitive challenges!
            </p>
            
            {/* Progress Display */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Overall Progress</span>
                <span className="text-sm font-semibold text-purple-600">{masteryPercent}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${masteryPercent}%` }}
                ></div>
              </div>

              {/* Part Completion Checklist */}
              <div className="text-left bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-4 text-center">Module Progress</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        partsCompleted.part1 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-300 dark:bg-gray-700 text-gray-500'
                      }`}>
                        {partsCompleted.part1 ? '✓' : '1'}
                      </div>
                      <span className="font-medium">Part 1: The Unit Circle</span>
                    </div>
                    {partsCompleted.part1 && <span className="text-green-500 font-semibold">Complete</span>}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        partsCompleted.part2 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-300 dark:bg-gray-700 text-gray-500'
                      }`}>
                        {partsCompleted.part2 ? '✓' : '2'}
                      </div>
                      <span className="font-medium">Part 2: Angles & Tables</span>
                    </div>
                    {partsCompleted.part2 && <span className="text-green-500 font-semibold">Complete</span>}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        partsCompleted.part3 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-300 dark:bg-gray-700 text-gray-500'
                      }`}>
                        {partsCompleted.part3 ? '✓' : '3'}
                      </div>
                      <span className="font-medium">Part 3: Reference Angles</span>
                    </div>
                    {partsCompleted.part3 && <span className="text-green-500 font-semibold">Complete</span>}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        partsCompleted.part4 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-300 dark:bg-gray-700 text-gray-500'
                      }`}>
                        {partsCompleted.part4 ? '✓' : '4'}
                      </div>
                      <span className="font-medium">Part 4: Practice & Mastery</span>
                    </div>
                    {partsCompleted.part4 && <span className="text-green-500 font-semibold">Complete</span>}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => router.push('/topics/the-unit-circle')}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-xl transition-all"
            >
              {masteryPercent > 0 ? 'Continue Unit Circle' : 'Start Unit Circle'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Competitive Mode
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Challenge other students and climb the ranks!
          </p>
        </div>

        {/* Profile Card */}
        {profile && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">{profile.rank}</h2>
                <p className="text-gray-600 dark:text-gray-400">Current Rank</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {profile.overallMMR}
                </div>
                <p className="text-gray-600 dark:text-gray-400">MMR Rating</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">
                  {profile.wins}W
                </div>
                <div className="text-3xl font-bold text-red-600">
                  {profile.losses}L
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Game Modes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
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
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4">Searching for opponent...</h3>
              <div className="text-gray-600 dark:text-gray-400 mb-6">
                Queue Position: {queueStatus?.position || '...'}
                <br />
                Estimated Wait: ~{queueStatus?.estimatedWait || '...'}s
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
      </div>
    </div>
  )
}
