'use client'

import { useState } from 'react'

/**
 * #186: Collaborative Classroom Challenges
 * Class-wide challenges where students contribute to a shared goal
 */

interface ClassChallenge {
  id: string
  title: string
  description: string
  goalType: 'problems_solved' | 'minutes_studied' | 'perfect_scores' | 'streak_days'
  goal: number
  current: number
  participants: number
  deadline: string
  reward: string
  icon: string
}

const SAMPLE_CHALLENGES: ClassChallenge[] = [
  {
    id: 'cc-1',
    title: '1000 Problems Challenge',
    description: 'As a class, solve 1000 problems this week!',
    goalType: 'problems_solved',
    goal: 1000,
    current: 347,
    participants: 28,
    deadline: '2025-01-31',
    reward: '500 XP for everyone + Class Badge',
    icon: '🎯',
  },
  {
    id: 'cc-2',
    title: 'Study Marathon',
    description: 'Collectively study 500 minutes this week',
    goalType: 'minutes_studied',
    goal: 500,
    current: 210,
    participants: 22,
    deadline: '2025-02-07',
    reward: '2x XP weekend for all',
    icon: '⏱️',
  },
  {
    id: 'cc-3',
    title: 'Perfect Score Sprint',
    description: 'Get 50 perfect scores across the class',
    goalType: 'perfect_scores',
    goal: 50,
    current: 18,
    participants: 30,
    deadline: '2025-02-14',
    reward: 'Exclusive class title + 300 XP each',
    icon: '💯',
  },
]

export function ClassroomChallenges({ challenges = SAMPLE_CHALLENGES }: { challenges?: ClassChallenge[] }) {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">🏫 Classroom Challenges</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Work together as a class to reach shared goals!</p>

      <div className="space-y-3">
        {challenges.map(challenge => {
          const progress = Math.min(100, (challenge.current / challenge.goal) * 100)
          const daysLeft = Math.max(0, Math.ceil((new Date(challenge.deadline).getTime() - Date.now()) / 86400000))

          return (
            <div
              key={challenge.id}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all cursor-pointer"
              onClick={() => setExpanded(expanded === challenge.id ? null : challenge.id)}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{challenge.icon}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{challenge.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{challenge.participants} participants · {daysLeft} days left</p>
                </div>
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{Math.round(progress)}%</span>
              </div>

              <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }} />
              </div>

              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>{challenge.current.toLocaleString()} / {challenge.goal.toLocaleString()}</span>
                <span>{challenge.goalType.replace(/_/g, ' ')}</span>
              </div>

              {expanded === challenge.id && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{challenge.description}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full">
                      🏅 {challenge.reward}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
