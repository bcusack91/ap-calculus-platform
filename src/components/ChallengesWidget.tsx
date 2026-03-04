'use client'

import { useState, useEffect, useCallback } from 'react'

interface ChallengeData {
  id: string
  title: string
  description: string
  type: 'DAILY' | 'WEEKLY'
  category: string
  requirement: number
  xpReward: number
  icon: string
  endsAt: string
  participantCount: number
  userProgress: number | null
  userCompleted: boolean
  userJoined: boolean
  xpEarned: number
}

export default function ChallengesWidget() {
  const [challenges, setChallenges] = useState<ChallengeData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<'ALL' | 'DAILY' | 'WEEKLY'>('ALL')
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 60_000)
    return () => clearInterval(interval)
  }, [])

  const loadChallenges = useCallback(() => {
    setLoading(true)
    setError(null)
    fetch('/api/challenges')
      .then((r) => { if (!r.ok) throw new Error('Failed to load challenges'); return r.json() })
      .then((data) => setChallenges(data.challenges ?? []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  // eslint-disable-next-line react-hooks/set-state-in-effect -- async fetch callback, not synchronous
  useEffect(() => { loadChallenges() }, [loadChallenges])

  const joinChallenge = async (challengeId: string) => {
    try {
      const res = await fetch('/api/challenges', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ challengeId }),
      })
      if (res.ok) {
        setChallenges((prev) =>
          prev.map((c) =>
            c.id === challengeId ? { ...c, userJoined: true, userProgress: 0 } : c
          )
        )
      }
    } catch { /* silent */ }
  }

  const getTimeLeft = useCallback((endsAt: string) => {
    const diff = new Date(endsAt).getTime() - now
    if (diff <= 0) return 'Ended'
    const hours = Math.floor(diff / (1000 * 60 * 60))
    if (hours < 24) return `${hours}h left`
    const days = Math.floor(hours / 24)
    return `${days}d ${hours % 24}h left`
  }, [now])

  const filtered = challenges.filter((c) => filter === 'ALL' || c.type === filter)

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🎯 Challenges</h2>
        <div className="text-center py-6">
          <div className="text-3xl mb-2">⚠️</div>
          <p className="text-gray-600 dark:text-gray-400 mb-3">{error}</p>
          <button onClick={loadChallenges} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            🎯 Challenges
          </h2>
          <div className="flex gap-1">
            {(['ALL', 'DAILY', 'WEEKLY'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2.5 py-1 text-xs rounded-full transition-colors ${
                  filter === f
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
              >
                {f === 'ALL' ? 'All' : f === 'DAILY' ? 'Daily' : 'Weekly'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-6 text-sm">
            No active challenges. Check back later!
          </p>
        ) : (
          filtered.map((c) => (
            <div
              key={c.id}
              className={`rounded-xl border p-4 transition-all ${
                c.userCompleted
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                  : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{c.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{c.title}</h3>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      c.type === 'DAILY'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
                        : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600'
                    }`}>
                      {c.type}
                    </span>
                    {c.userCompleted && (
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 px-1.5 py-0.5 rounded-full">
                        ✓ Done
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c.description}</p>

                  {/* Progress bar for joined challenges */}
                  {c.userJoined && c.userProgress !== null && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">
                          {c.userProgress} / {c.requirement}
                        </span>
                        <span className="text-gray-400">{getTimeLeft(c.endsAt)}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            c.userCompleted ? 'bg-green-500' : 'bg-purple-500'
                          }`}
                          style={{ width: `${Math.min((c.userProgress / c.requirement) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* XP reward & join button */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>⭐ {c.xpReward} XP</span>
                      <span>👥 {c.participantCount}</span>
                    </div>
                    {!c.userJoined && (
                      <button
                        onClick={() => joinChallenge(c.id)}
                        className="text-xs bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                      >
                        Join
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
