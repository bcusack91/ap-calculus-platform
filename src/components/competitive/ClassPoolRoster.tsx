'use client'

import type { PoolMatchView, PoolPlayerView, PoolStateView } from '@/lib/class-pool-server'

/**
 * The class match pool roster — who is waiting, who is playing whom (live
 * score), and recent results. Shared by the teacher's live-class panel and
 * the students' pool page; teachers additionally see waiting players' MMR.
 */

const MODE_ICON: Record<string, string> = { SPEED_RACE: '⚡', ACCURACY_CHALLENGE: '🎯', TEAM_BATTLE: '👥', CHAOS: '🎲' }

function PlayerName({ p, viewerId }: { p: PoolPlayerView; viewerId: string }) {
  return (
    <span className={p.id === viewerId ? 'font-bold text-accent' : undefined}>
      {p.isBot && <span aria-hidden>🤖 </span>}
      {p.name}
      {p.isTeacher && <span className="ml-1 rounded bg-accent-subtle px-1 py-px text-[10px] font-bold uppercase tracking-wide text-accent">Teacher</span>}
      {p.id === viewerId && <span className="sr-only"> (you)</span>}
    </span>
  )
}

function Side({ players, viewerId, won }: { players: PoolPlayerView[]; viewerId: string; won?: boolean }) {
  return (
    <span className={`min-w-0 truncate ${won ? 'font-semibold text-foreground' : 'text-gray-700 dark:text-gray-300'}`}>
      {players.map((p, i) => (
        <span key={p.id}>
          {i > 0 && ' & '}
          <PlayerName p={p} viewerId={viewerId} />
        </span>
      ))}
    </span>
  )
}

function Delta({ n }: { n: number }) {
  if (!n) return null
  return (
    <span className={`ml-1 text-[11px] font-semibold tabular-nums ${n > 0 ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
      {n > 0 ? `+${n}` : n}
    </span>
  )
}

function MatchRow({ m, viewerId }: { m: PoolMatchView; viewerId: string }) {
  const live = m.status === 'live'
  return (
    <li className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-xl border border-card-border bg-card px-3 py-2 text-sm">
      <span className="flex min-w-0 items-center justify-end gap-1 text-right">
        <Side players={m.sides[0]} viewerId={viewerId} won={m.winnerSide === 0} />
        {m.mmrDelta && <Delta n={m.mmrDelta[0]} />}
      </span>
      <span className={`flex items-center gap-1 rounded-lg px-2 py-0.5 font-mono text-sm font-bold tabular-nums ${live ? 'bg-accent-subtle text-accent' : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'}`}>
        <span aria-hidden className="text-xs">{MODE_ICON[m.mode] ?? '⚔️'}</span>
        {m.scores[0]}–{m.scores[1]}
      </span>
      <span className="flex min-w-0 items-center gap-1">
        <Side players={m.sides[1]} viewerId={viewerId} won={m.winnerSide === 1} />
        {m.mmrDelta && <Delta n={m.mmrDelta[1]} />}
      </span>
    </li>
  )
}

export default function ClassPoolRoster({ state, viewerId, compact = false }: { state: PoolStateView; viewerId: string; compact?: boolean }) {
  const live = state.matches.filter((m) => m.status === 'live')
  const done = state.matches.filter((m) => m.status === 'done').slice(0, compact ? 6 : 12)
  return (
    <div className="space-y-4">
      <dl className="grid grid-cols-3 gap-2 text-center">
        {[
          ['Waiting', state.counts.waiting],
          ['Playing', state.counts.playing],
          ['Matches done', state.counts.finished],
        ].map(([label, n]) => (
          <div key={label as string} className="rounded-xl bg-gray-50 px-2 py-2 dark:bg-gray-800/60">
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</dt>
            <dd className="text-xl font-bold tabular-nums text-foreground">{n}</dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="pool-waiting">
        <h3 id="pool-waiting" className="mb-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Waiting for a match
        </h3>
        {state.waiting.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nobody is waiting right now.</p>
        ) : (
          <ul className="flex flex-wrap gap-1.5">
            {state.waiting.map((w) => (
              <li key={w.id} className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm ring-1 ${w.id === viewerId ? 'bg-accent-subtle ring-accent-light' : 'bg-card ring-card-border'}`}>
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500 motion-reduce:animate-none" aria-hidden />
                <PlayerName p={w} viewerId={viewerId} />
                {typeof w.mmr === 'number' && <span className="text-xs tabular-nums text-muted-foreground">{w.mmr}</span>}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section aria-labelledby="pool-live">
        <h3 id="pool-live" className="mb-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          In play {live.length > 0 && <span className="tabular-nums">({live.length})</span>}
        </h3>
        {live.length === 0 ? (
          <p className="text-sm text-muted-foreground">No matches in play.</p>
        ) : (
          <ul className="space-y-1.5">{live.map((m) => <MatchRow key={m.id} m={m} viewerId={viewerId} />)}</ul>
        )}
      </section>

      {done.length > 0 && (
        <section aria-labelledby="pool-done">
          <h3 id="pool-done" className="mb-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">Recent results</h3>
          <ul className="space-y-1.5">{done.map((m) => <MatchRow key={m.id} m={m} viewerId={viewerId} />)}</ul>
        </section>
      )}
    </div>
  )
}
