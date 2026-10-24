'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { UserPen, Trophy } from 'lucide-react'
import AvatarDisplay from '@/components/AvatarDisplay'
import { CosmeticNameplate } from '@/components/PowerUps'
import { readCachedNavAvatar } from '@/components/navbar'
import { rankProgress, rankTierByName } from '@/lib/competitive-ranks'
import type { AvatarData } from '@/types/avatar'

export interface PlayerCardProfile {
  rank: string
  overallMMR: number
  wins: number
  losses: number
  totalMatches: number
  winStreak: number
  bestWinStreak?: number
  averageAccuracy: number
}

/**
 * The hub's one player card: avatar, nameplate, rank emblem with progress to
 * the next rank (thresholds from competitive-ranks.ts), and the core stats.
 * The avatar comes from the navbar's session cache — no extra request.
 */
export default function PlayerCard({ profile, name, userId }: { profile: PlayerCardProfile; name: string; userId?: string }) {
  const [avatar, setAvatar] = useState<AvatarData | null>(null)

  useEffect(() => {
    // The navbar's bootstrap fetch usually lands first; retry once shortly
    // after in case this card rendered before it did.
    const read = () => { const a = readCachedNavAvatar(userId); if (a) setAvatar(a) }
    const t0 = setTimeout(read, 0)
    const t1 = setTimeout(read, 1500)
    const onUpdated = (e: Event) => setAvatar((e as CustomEvent<AvatarData>).detail ?? null)
    window.addEventListener('avatar-updated', onUpdated)
    return () => { clearTimeout(t0); clearTimeout(t1); window.removeEventListener('avatar-updated', onUpdated) }
  }, [userId])

  const tier = rankTierByName(profile.rank, profile.overallMMR)
  const progress = rankProgress(profile.overallMMR)
  const winRate = profile.totalMatches > 0 ? Math.round((profile.wins / profile.totalMatches) * 100) : null
  const initial = (name.trim()[0] || '?').toUpperCase()

  const stats = [
    {
      label: 'Record',
      value: (
        <>
          <span className="text-green-700 dark:text-green-400">{profile.wins}W</span>
          <span className="mx-1 text-gray-400 dark:text-gray-500">–</span>
          <span className="text-red-700 dark:text-red-400">{profile.losses}L</span>
        </>
      ),
      sub: winRate === null ? 'No matches yet' : `${winRate}% win rate`,
    },
    {
      label: 'Win streak',
      value: <>{profile.winStreak > 0 && <span aria-hidden className="mr-1">🔥</span>}{profile.winStreak}</>,
      sub: profile.bestWinStreak ? `Best: ${profile.bestWinStreak}` : 'Current run',
    },
    { label: 'Accuracy', value: `${Math.round(profile.averageAccuracy * 100)}%`, sub: 'Average per match' },
    { label: 'Matches', value: profile.totalMatches, sub: 'Played all-time' },
  ]

  return (
    <section aria-label="Your competitive profile" className="relative overflow-hidden rounded-3xl border border-card-border bg-card shadow-sm">
      <div className="relative h-20 bg-brand-gradient-br sm:h-24" aria-hidden>
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
      </div>
      <Link
        href="/profile"
        className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/20 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-black/30 sm:right-4 sm:top-4"
      >
        <UserPen className="h-4 w-4" aria-hidden /> Customize avatar
      </Link>
      <div className="relative px-4 pb-5 sm:px-7 sm:pb-7">
        <div className="-mt-10 flex flex-wrap items-end justify-between gap-x-4 gap-y-3 sm:-mt-12">
          <div className="flex min-w-0 items-start gap-3 sm:gap-4">
            <div className="shrink-0 rounded-full bg-card p-1 shadow-md ring-1 ring-card-border">
              {avatar ? (
                <AvatarDisplay avatarData={avatar} size={80} className="rounded-full" />
              ) : (
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-light text-3xl font-bold text-accent-dark">
                  {initial}
                </span>
              )}
            </div>
            {/* Starts just below the band (offset = the row's negative margin), so
                the name never lands on the gradient however it wraps. */}
            <div className="min-w-0 pt-11 sm:pt-[3.25rem]">
              <h2 data-qa="player-name" className="truncate text-xl font-bold text-foreground sm:text-2xl">
                <CosmeticNameplate name={name} />
              </h2>
              <span className={`mt-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-sm font-semibold ring-1 ${tier.badge}`}>
                <span aria-hidden>{tier.emoji}</span> {tier.name}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          {/* Rank + MMR, with progress to the next rank */}
          <div className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-800/60">
            <div className="flex items-baseline justify-between gap-3">
              <p data-qa="stat-label" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">MMR rating</p>
              <Trophy className="h-4 w-4 text-accent" aria-hidden />
            </div>
            <p className="mt-1 text-3xl font-black tabular-nums text-foreground">{profile.overallMMR}</p>
            <div
              className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
              role="progressbar"
              aria-label={progress.next ? `Progress to ${progress.next.name}` : 'Top rank reached'}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress.fraction * 100)}
            >
              <div className="h-full rounded-full bg-brand-gradient transition-all" style={{ width: `${Math.max(4, progress.fraction * 100)}%` }} />
            </div>
            <p data-qa="rank-next" className="mt-2 text-sm text-muted-foreground">
              {progress.next ? (
                <><span className="font-semibold text-foreground">{progress.toNext} MMR</span> to {progress.next.emoji} {progress.next.name}</>
              ) : (
                <>Top rank — {progress.current.emoji} {progress.current.name}</>
              )}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-gray-50 p-3 dark:bg-gray-800/60 sm:p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.label}</dt>
                <dd className="mt-1 text-2xl font-bold tabular-nums text-foreground">{s.value}</dd>
                <dd className="mt-0.5 text-xs text-muted-foreground">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
