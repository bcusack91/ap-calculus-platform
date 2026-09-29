'use client'

import { Dices, Flag, Trophy, Users } from 'lucide-react'

/**
 * The options a teacher picks before a class game: Teams or Free-for-all,
 * Competitive or Chaos (with its effect intensity), and the team count.
 *
 * Shared by /teacher/lobby ("New class game") and the classroom's Work › Class
 * games "Start class game" dialog, so both entry points offer the same game.
 * The values map one-to-one onto POST /api/teacher/lobby.
 */

export interface ClassGameSettings {
  name: string
  format: 'TEAMS' | 'RACE_FFA'
  numTeams: number
  gameMode: 'competitive' | 'CHAOS'
  chaosIntensity: 'gentle' | 'full'
}

export const DEFAULT_CLASS_GAME: ClassGameSettings = {
  name: '',
  format: 'TEAMS',
  numTeams: 2,
  gameMode: 'competitive',
  chaosIntensity: 'gentle',
}

/** The POST /api/teacher/lobby body for these settings. */
export function classGameRequestBody(s: ClassGameSettings, classroomId: string | null, fallbackName = 'Class game') {
  return {
    name: s.name.trim() || fallbackName,
    format: s.format === 'RACE_FFA' ? 'RACE_FFA' : null,
    numTeams: s.numTeams,
    gameMode: s.gameMode,
    chaosIntensity: s.chaosIntensity,
    ...(classroomId ? { classroomId } : {}),
  }
}

const choiceCls = (on: boolean) =>
  `rounded-xl border p-3 text-left transition-colors ${
    on
      ? 'border-accent bg-accent-subtle ring-1 ring-accent dark:bg-accent-light/20'
      : 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'
  }`

const fieldCls =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-accent focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white'

export default function ClassGameOptions({
  value,
  onChange,
  namePlaceholder = 'Period 4 Calculus',
  idPrefix = 'class-game',
}: {
  value: ClassGameSettings
  onChange: (next: ClassGameSettings) => void
  namePlaceholder?: string
  idPrefix?: string
}) {
  const set = (patch: Partial<ClassGameSettings>) => onChange({ ...value, ...patch })
  const ffa = value.format === 'RACE_FFA'

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm" htmlFor={`${idPrefix}-name`}>
          <span className="mb-1 block text-gray-600 dark:text-gray-400">Name</span>
          <input
            id={`${idPrefix}-name`}
            className={fieldCls}
            value={value.name}
            onChange={(e) => set({ name: e.target.value })}
            placeholder={namePlaceholder}
          />
        </label>
        {!ffa && (
          <label className="text-sm" htmlFor={`${idPrefix}-teams`}>
            <span className="mb-1 block text-gray-600 dark:text-gray-400">Number of teams</span>
            <input
              id={`${idPrefix}-teams`}
              type="number"
              min={2}
              max={8}
              className={fieldCls}
              value={value.numTeams}
              onChange={(e) => set({ numTeams: Math.max(2, Math.min(8, Number(e.target.value) || 2)) })}
            />
          </label>
        )}
      </div>

      <fieldset>
        <legend className="mb-1 text-sm text-gray-600 dark:text-gray-400">Format</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {([
            { key: 'TEAMS', Icon: Users, title: 'Teams', desc: 'Split the class into MMR-balanced teams. Highest team total wins.' },
            { key: 'RACE_FFA', Icon: Flag, title: 'Free-for-all', desc: 'Everyone plays for themselves on one leaderboard. No teams to balance.' },
          ] as const).map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => set({ format: f.key })}
              aria-pressed={value.format === f.key}
              className={choiceCls(value.format === f.key)}
            >
              <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white">
                <f.Icon className="h-4 w-4 text-accent" aria-hidden="true" /> {f.title}
              </div>
              <div className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">{f.desc}</div>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-1 text-sm text-gray-600 dark:text-gray-400">Game mode</legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {([
            {
              key: 'competitive',
              Icon: Trophy,
              title: 'Competitive',
              desc: ffa ? 'Straight scoring — highest score wins.' : 'Straight scoring — highest team total wins.',
            },
            {
              key: 'CHAOS',
              Icon: Dices,
              title: 'Chaos Mode',
              desc: ffa
                ? 'Power-ups drop as students answer. Whoever falls behind draws more often.'
                : 'Power-ups drop as students answer. Teams that fall behind draw more often.',
            },
          ] as const).map((m) => (
            <button
              key={m.key}
              type="button"
              onClick={() => set({ gameMode: m.key })}
              aria-pressed={value.gameMode === m.key}
              className={choiceCls(value.gameMode === m.key)}
            >
              <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white">
                <m.Icon className="h-4 w-4 text-accent" aria-hidden="true" /> {m.title}
              </div>
              <div className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">{m.desc}</div>
            </button>
          ))}
        </div>
      </fieldset>

      {value.gameMode === 'CHAOS' && (
        <fieldset className="rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
          <legend className="px-1 text-sm font-medium text-amber-900 dark:text-amber-200">Effect intensity</legend>
          <div className="space-y-2">
            <label className="flex gap-2 text-sm text-amber-900 dark:text-amber-100">
              <input
                type="radio"
                name={`${idPrefix}-chaos-intensity`}
                className="mt-1"
                checked={value.chaosIntensity === 'gentle'}
                onChange={() => set({ chaosIntensity: 'gentle' })}
              />
              <span>
                <strong>Gentle</strong> — blur, sliding answers and a frost freeze. No screen shake, flashing or
                blackout.
              </span>
            </label>
            <label className="flex gap-2 text-sm text-amber-900 dark:text-amber-100">
              <input
                type="radio"
                name={`${idPrefix}-chaos-intensity`}
                className="mt-1"
                checked={value.chaosIntensity === 'full'}
                onChange={() => set({ chaosIntensity: 'full' })}
              />
              <span>
                <strong>Full chaos</strong> — adds screen shake, blackout, flip and the lightning storm.
              </span>
            </label>
          </div>
          <p className="mt-2 text-xs text-amber-800 dark:text-amber-300">
            Full chaos shakes and darkens the screen. If any student has photosensitivity or gets motion sick, stay on
            gentle.
          </p>
        </fieldset>
      )}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        You&apos;ll pick the course, topics and timer on the next screen.
      </p>
    </div>
  )
}
