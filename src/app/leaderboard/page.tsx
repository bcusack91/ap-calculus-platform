import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import { InArticleAd } from '@/components/ad-banner'

export const revalidate = 3600 // 1 hour ISR

export const metadata: Metadata = {
  title: 'Competitive Leaderboard | Study Mondo',
  description: 'See the top-ranked players in Study Mondo competitive mode, ranked by MMR.',
  alternates: {
    canonical: 'https://www.studymondo.com/leaderboard',
  },
}

const rankColors: Record<string, string> = {
  Bronze: 'text-amber-700 bg-amber-100',
  Silver: 'text-gray-600 bg-gray-100',
  Gold: 'text-yellow-700 bg-yellow-100',
  Platinum: 'text-cyan-700 bg-cyan-100',
  Diamond: 'text-blue-700 bg-blue-100',
  Master: 'text-purple-700 bg-purple-100',
  Grandmaster: 'text-red-700 bg-red-100',
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

  const entries = profiles.map((p, i) => ({
    position: i + 1,
    name: p.user.name || 'Anonymous',
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

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
            🏆 Competitive Leaderboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Top players ranked by MMR from competitive mode matches
          </p>
          <Link
            href="/competitive"
            className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            🎮 Play Competitive
          </Link>
        </div>

        {entries.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-6xl mb-4">🎮</div>
            <h2 className="text-2xl font-bold mb-2">No Rankings Yet</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Be the first to compete and claim the top spot!
            </p>
            <Link
              href="/competitive"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all"
            >
              Start Competing
            </Link>
          </div>
        ) : (
          <>
            {/* Top 3 Podium */}
            {entries.length >= 3 && (
              <div className="grid grid-cols-3 gap-4 mb-10">
                {/* 2nd Place */}
                <div className="flex flex-col items-center pt-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-3xl font-bold text-white mb-3 shadow-lg">
                    2
                  </div>
                  <div className="font-bold text-lg text-center">{entries[1].name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{entries[1].mmr} MMR</div>
                  <span className={`mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${rankColors[entries[1].rank] || ''}`}>
                    {rankEmoji[entries[1].rank] || ''} {entries[1].rank}
                  </span>
                </div>
                {/* 1st Place */}
                <div className="flex flex-col items-center">
                  <div className="text-4xl mb-2">👑</div>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-4xl font-bold text-white mb-3 shadow-xl ring-4 ring-yellow-300">
                    1
                  </div>
                  <div className="font-bold text-xl text-center">{entries[0].name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{entries[0].mmr} MMR</div>
                  <span className={`mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${rankColors[entries[0].rank] || ''}`}>
                    {rankEmoji[entries[0].rank] || ''} {entries[0].rank}
                  </span>
                </div>
                {/* 3rd Place */}
                <div className="flex flex-col items-center pt-12">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-2xl font-bold text-white mb-3 shadow-lg">
                    3
                  </div>
                  <div className="font-bold text-lg text-center">{entries[2].name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{entries[2].mmr} MMR</div>
                  <span className={`mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${rankColors[entries[2].rank] || ''}`}>
                    {rankEmoji[entries[2].rank] || ''} {entries[2].rank}
                  </span>
                </div>
              </div>
            )}

            {/* Full Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm">
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
                        className={`border-t border-gray-100 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors ${
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
                        <td className="px-4 py-3 text-right font-mono font-semibold text-purple-700 dark:text-purple-400">
                          {entry.mmr}
                        </td>
                        <td className="px-4 py-3 text-right text-sm">
                          <span className="text-green-600">{entry.wins}W</span>
                          {' / '}
                          <span className="text-red-600">{entry.losses}L</span>
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
