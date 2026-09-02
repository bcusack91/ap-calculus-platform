import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import { Trophy, Gamepad2 } from 'lucide-react'
import { InArticleAd } from '@/components/ad-banner'
import { publicDisplayName } from '@/lib/display-name'
import YourRank from './YourRank'

export const revalidate = 300 // 5 min ISR — fresh wins show up reasonably fast

export const metadata: Metadata = {
  title: 'Competitive Leaderboard | Study Mondo',
  description: 'See the top-ranked players in Study Mondo competitive mode, ranked by MMR.',
  alternates: {
    canonical: 'https://www.studymondo.com/leaderboard',
  },
}

const rankColors: Record<string, string> = {
  Bronze: 'text-amber-700 bg-amber-100 dark:text-amber-300 dark:bg-amber-900/40',
  Silver: 'text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700',
  Gold: 'text-yellow-700 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/40',
  Platinum: 'text-cyan-700 bg-cyan-100 dark:text-cyan-300 dark:bg-cyan-900/40',
  Diamond: 'text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/40',
  Master: 'text-accent-hover bg-accent-light dark:text-accent-muted dark:bg-accent-light/30',
  Grandmaster: 'text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/40',
}

const rankEmoji: Record<string, string> = {
  Bronze: '🥉',
  Silver: '🥈',
  Gold: '🥇',
  Platinum: '💎',
  Diamond: '💠',
  Master: '👑',
  Grandmaster: '🏆',
}

// MMR ranges mirror getRankFromMMR in src/lib/competitive-utils.ts — keep in
// sync if the thresholds ever change. (Master/Grandmaster exist as legacy chip
// styles but are never assigned by getRankFromMMR, so they stay off the legend.)
const rankTiers: Array<{ name: string; range: string }> = [
  { name: 'Bronze', range: 'under 1000' },
  { name: 'Silver', range: '1000–1399' },
  { name: 'Gold', range: '1400–1799' },
  { name: 'Platinum', range: '1800–2199' },
  { name: 'Diamond', range: '2200+' },
]

interface Entry {
  position: number
  name: string
  mmr: number
  rank: string
  totalMatches: number
  wins: number
  losses: number
  winRate: number
  winStreak: number
  bestWinStreak: number
  averageAccuracy: number
}

// Per-place podium styling (1st biggest and centered via display order below).
const podiumStyles: Record<number, { wrapper: string; circle: string; name: string }> = {
  1: {
    wrapper: 'flex flex-col items-center',
    circle: 'w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-4xl font-bold text-white mb-3 shadow-xl ring-4 ring-yellow-300',
    name: 'font-bold text-xl text-center',
  },
  2: {
    wrapper: 'flex flex-col items-center pt-8',
    circle: 'w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-3xl font-bold text-white mb-3 shadow-lg',
    name: 'font-bold text-lg text-center',
  },
  3: {
    wrapper: 'flex flex-col items-center pt-12',
    circle: 'w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-2xl font-bold text-white mb-3 shadow-lg',
    name: 'font-bold text-lg text-center',
  },
}

function PodiumSpot({ entry }: { entry: Entry }) {
  const style = podiumStyles[entry.position] ?? podiumStyles[3]
  return (
    <div className={style.wrapper}>
      {entry.position === 1 && <div className="text-4xl mb-2">👑</div>}
      <div className={style.circle}>{entry.position}</div>
      <div className={style.name}>{entry.name}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{entry.mmr} MMR</div>
      <span className={`mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${rankColors[entry.rank] || ''}`}>
        {rankEmoji[entry.rank] || ''} {entry.rank}
      </span>
    </div>
  )
}

export default async function LeaderboardPage() {
  const profiles = await prisma.competitiveProfile.findMany({
    where: { totalMatches: { gte: 1 } },
    orderBy: { overallMMR: 'desc' },
    take: 100,
    select: {
      overallMMR: true,
      totalMatches: true,
      wins: true,
      losses: true,
      winStreak: true,
      bestWinStreak: true,
      averageAccuracy: true,
      rank: true,
      user: {
        select: {
          name: true,
          avatarData: true,
        },
      },
    },
  }).catch((error) => {
    console.warn('Leaderboard data unavailable at build time; rendering empty leaderboard.', error)
    return []
  })

  const entries: Entry[] = profiles.map((p, i) => ({
    position: i + 1,
    name: publicDisplayName(p.user.name),
    mmr: p.overallMMR,
    rank: p.rank,
    totalMatches: p.totalMatches,
    wins: p.wins,
    losses: p.losses,
    winRate: p.totalMatches > 0 ? Math.round((p.wins / p.totalMatches) * 100) : 0,
    winStreak: p.winStreak,
    bestWinStreak: p.bestWinStreak,
    averageAccuracy: Math.round(p.averageAccuracy),
  }))

  const podium = entries.slice(0, 3)
  // 3-up podium reads 2nd | 1st | 3rd; with fewer entries just show what exists.
  const podiumOrder = podium.length === 3 ? [podium[1], podium[0], podium[2]] : podium

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3 flex items-center justify-center gap-3">
            <Trophy className="w-9 h-9 text-accent" aria-hidden="true" />
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              Competitive Leaderboard
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Top players ranked by MMR from competitive mode matches
          </p>
          <Link
            href="/competitive"
            className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-accent to-accent-secondary text-white rounded-lg font-semibold hover:from-accent-hover hover:to-accent-secondary-hover transition-all"
          >
            <Gamepad2 className="w-5 h-5" aria-hidden="true" />
            Play Competitive
          </Link>
        </div>

        {entries.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-accent-muted" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">No Rankings Yet</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Be the first to compete and claim the top spot!
            </p>
            <Link
              href="/competitive"
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-all"
            >
              Start Competing
            </Link>
          </div>
        ) : (
          <>
            {/* Top 3 Podium (renders whatever exists — 1, 2, or 3 entries) */}
            <div
              className={`grid gap-4 mb-10 ${
                podiumOrder.length === 3
                  ? 'grid-cols-3'
                  : podiumOrder.length === 2
                  ? 'grid-cols-2 max-w-md mx-auto'
                  : 'grid-cols-1 max-w-xs mx-auto'
              }`}
            >
              {podiumOrder.map((entry) => (
                <PodiumSpot key={entry.position} entry={entry} />
              ))}
            </div>

            {/* Rank tier legend */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="font-semibold uppercase tracking-wide">Tiers:</span>
              {rankTiers.map((tier) => (
                <span
                  key={tier.name}
                  className={`px-2 py-0.5 rounded-full font-semibold ${rankColors[tier.name] || ''}`}
                  title={`${tier.name}: ${tier.range} MMR`}
                >
                  {rankEmoji[tier.name] || ''} {tier.name} {tier.range}
                </span>
              ))}
            </div>

            {/* Viewer's own rank (client-side; renders nothing when signed out) */}
            <YourRank rankColors={rankColors} rankEmoji={rankEmoji} />

            {/* Full Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-accent to-accent-secondary text-white text-sm">
                      <th className="px-4 py-3 text-left font-semibold">#</th>
                      <th className="px-4 py-3 text-left font-semibold">Player</th>
                      <th className="px-4 py-3 text-left font-semibold">Rank</th>
                      <th className="px-4 py-3 text-right font-semibold">MMR</th>
                      <th className="px-4 py-3 text-right font-semibold">W/L</th>
                      <th className="px-4 py-3 text-right font-semibold">Win %</th>
                      <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">Accuracy</th>
                      <th className="px-4 py-3 text-right font-semibold hidden md:table-cell">Best Streak</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map((entry) => (
                      <tr
                        key={entry.position}
                        className={`border-t border-gray-100 dark:border-gray-700 hover:bg-accent-subtle dark:hover:bg-accent-light/20 transition-colors ${
                          entry.position <= 3 ? 'bg-yellow-50/50 dark:bg-yellow-900/10' : ''
                        }`}
                      >
                        <td className="px-4 py-3 font-bold text-gray-500 dark:text-gray-400">
                          {entry.position <= 3 ? (
                            <span className="text-lg">
                              {entry.position === 1 ? '🥇' : entry.position === 2 ? '🥈' : '🥉'}
                            </span>
                          ) : (
                            entry.position
                          )}
                        </td>
                        <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">
                          {entry.name}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${rankColors[entry.rank] || ''}`}>
                            {rankEmoji[entry.rank] || ''} {entry.rank}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right font-mono font-semibold text-accent-hover dark:text-accent-muted">
                          {entry.mmr}
                        </td>
                        <td className="px-4 py-3 text-right text-sm">
                          <span className="text-green-600 dark:text-green-400">{entry.wins}W</span>
                          {' / '}
                          <span className="text-red-600 dark:text-red-400">{entry.losses}L</span>
                        </td>
                        <td className="px-4 py-3 text-right font-semibold">
                          {entry.winRate}%
                        </td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          {entry.averageAccuracy}%
                        </td>
                        <td className="px-4 py-3 text-right hidden md:table-cell">
                          🔥 {entry.bestWinStreak}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Ad below leaderboard */}
        <div className="mt-8">
          <InArticleAd />
        </div>
      </div>
    </div>
  )
}
