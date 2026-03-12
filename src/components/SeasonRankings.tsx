'use client'

import { useState, useMemo } from 'react'

/**
 * #187: Competitive Season Rankings
 * Leaderboard with seasons, tiers, and ranking progression
 */

type Tier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'master' | 'grandmaster'

interface RankedPlayer {
  id: string
  name: string
  score: number
  wins: number
  losses: number
  tier: Tier
  rank: number
}

const TIER_META: Record<Tier, { label: string; icon: string; color: string; minScore: number }> = {
  bronze: { label: 'Bronze', icon: '🥉', color: 'text-amber-700', minScore: 0 },
  silver: { label: 'Silver', icon: '🥈', color: 'text-gray-400', minScore: 500 },
  gold: { label: 'Gold', icon: '🥇', color: 'text-yellow-500', minScore: 1000 },
  platinum: { label: 'Platinum', icon: '💠', color: 'text-cyan-400', minScore: 1800 },
  diamond: { label: 'Diamond', icon: '💎', color: 'text-blue-400', minScore: 2500 },
  master: { label: 'Master', icon: '👑', color: 'text-purple-500', minScore: 3500 },
  grandmaster: { label: 'Grandmaster', icon: '🏆', color: 'text-red-500', minScore: 5000 },
}

function getTier(score: number): Tier {
  const tiers: Tier[] = ['grandmaster', 'master', 'diamond', 'platinum', 'gold', 'silver', 'bronze']
  for (const t of tiers) {
    if (score >= TIER_META[t].minScore) return t
  }
  return 'bronze'
}

const SAMPLE_LEADERBOARD: RankedPlayer[] = [
  { id: '1', name: 'MathWhiz99', score: 5250, wins: 142, losses: 23, tier: 'grandmaster', rank: 1 },
  { id: '2', name: 'CalcMaster', score: 4800, wins: 128, losses: 31, tier: 'master', rank: 2 },
  { id: '3', name: 'ScienceNerd', score: 3900, wins: 98, losses: 27, tier: 'master', rank: 3 },
  { id: '4', name: 'PhysicsKing', score: 3200, wins: 85, losses: 35, tier: 'diamond', rank: 4 },
  { id: '5', name: 'BioAce', score: 2800, wins: 72, losses: 28, tier: 'diamond', rank: 5 },
  { id: '6', name: 'ChemGenius', score: 2400, wins: 65, losses: 30, tier: 'platinum', rank: 6 },
  { id: '7', name: 'StatsPro', score: 2100, wins: 58, losses: 33, tier: 'platinum', rank: 7 },
  { id: '8', name: 'AlgebraHero', score: 1500, wins: 42, losses: 25, tier: 'gold', rank: 8 },
  { id: '9', name: 'GeoWizard', score: 1200, wins: 38, losses: 22, tier: 'gold', rank: 9 },
  { id: '10', name: 'TrigStar', score: 800, wins: 25, losses: 18, tier: 'silver', rank: 10 },
]

export function SeasonRankings({ currentUserId }: { currentUserId?: string }) {
  const [selectedTier, setSelectedTier] = useState<Tier | 'all'>('all')

  const filtered = useMemo(() => {
    if (selectedTier === 'all') return SAMPLE_LEADERBOARD
    return SAMPLE_LEADERBOARD.filter(p => p.tier === selectedTier)
  }, [selectedTier])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">🏅 Season Rankings</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Season 1 — Spring 2025</p>
        </div>
      </div>

      {/* Tier filter */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        <button onClick={() => setSelectedTier('all')}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${selectedTier === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
          All
        </button>
        {Object.entries(TIER_META).map(([key, meta]) => (
          <button key={key} onClick={() => setSelectedTier(key as Tier)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${selectedTier === key ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
            {meta.icon} {meta.label}
          </button>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="space-y-1.5">
        {filtered.map(player => {
          const meta = TIER_META[player.tier]
          const isCurrentUser = player.id === currentUserId
          return (
            <div
              key={player.id}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                isCurrentUser ? 'bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-300 dark:border-indigo-700' : 'bg-gray-50 dark:bg-gray-700/30'
              } ${player.rank <= 3 ? 'font-semibold' : ''}`}
            >
              <span className={`w-7 text-center text-sm font-bold ${
                player.rank === 1 ? 'text-yellow-500' : player.rank === 2 ? 'text-gray-400' : player.rank === 3 ? 'text-amber-600' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {player.rank <= 3 ? ['🥇', '🥈', '🥉'][player.rank - 1] : `#${player.rank}`}
              </span>
              <span className="text-lg">{meta.icon}</span>
              <div className="flex-1 min-w-0">
                <span className="text-sm text-gray-900 dark:text-white truncate block">{player.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{player.wins}W / {player.losses}L</span>
              </div>
              <span className={`text-sm font-bold ${meta.color}`}>{player.score}</span>
            </div>
          )
        })}
      </div>

      {/* Tier breakdown */}
      <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase">Tier Thresholds</h4>
        <div className="flex flex-wrap gap-2">
          {Object.entries(TIER_META).map(([, meta]) => (
            <span key={meta.label} className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
              {meta.icon} {meta.label}: {meta.minScore}+
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
