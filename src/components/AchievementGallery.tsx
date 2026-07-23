'use client'

import { useState, useMemo } from 'react'

/**
 * #181: Achievement Badges Gallery Page
 * Displays all achievements organized by category
 */

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: 'mastery' | 'streak' | 'competitive' | 'exploration' | 'speed' | 'special'
  requirement: string
  xpReward: number
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
}

const ACHIEVEMENTS: Achievement[] = [
  // Mastery
  { id: 'first-quiz', title: 'First Steps', description: 'Complete your first quiz', icon: '📝', category: 'mastery', requirement: 'Complete 1 quiz', xpReward: 25, rarity: 'common' },
  { id: 'quiz-10', title: 'Quiz Crusher', description: 'Complete 10 quizzes', icon: '🎯', category: 'mastery', requirement: 'Complete 10 quizzes', xpReward: 100, rarity: 'uncommon' },
  { id: 'quiz-50', title: 'Quiz Master', description: 'Complete 50 quizzes', icon: '🏅', category: 'mastery', requirement: 'Complete 50 quizzes', xpReward: 300, rarity: 'rare' },
  { id: 'quiz-100', title: 'Century Club', description: 'Complete 100 quizzes', icon: '💯', category: 'mastery', requirement: 'Complete 100 quizzes', xpReward: 500, rarity: 'epic' },
  { id: 'perfect-quiz', title: 'Perfectionist', description: 'Score 100% on a quiz', icon: '✨', category: 'mastery', requirement: 'Perfect score on any quiz', xpReward: 150, rarity: 'uncommon' },
  { id: 'perfect-10', title: 'Flawless Record', description: 'Get 10 perfect scores', icon: '💎', category: 'mastery', requirement: '10 perfect scores', xpReward: 500, rarity: 'epic' },
  { id: 'mini-boss-clear', title: 'Boss Slayer', description: 'Clear a mini-boss challenge', icon: '⚔️', category: 'mastery', requirement: 'Clear 1 mini-boss', xpReward: 100, rarity: 'uncommon' },
  { id: 'all-bosses', title: 'Boss Conqueror', description: 'Clear all mini-boss challenges', icon: '👑', category: 'mastery', requirement: 'Clear all mini-bosses', xpReward: 1000, rarity: 'legendary' },

  // Streak
  { id: 'streak-3', title: 'Getting Warmed Up', description: '3-day study streak', icon: '🔥', category: 'streak', requirement: '3-day streak', xpReward: 50, rarity: 'common' },
  { id: 'streak-7', title: 'Weekly Warrior', description: '7-day study streak', icon: '🗓️', category: 'streak', requirement: '7-day streak', xpReward: 150, rarity: 'uncommon' },
  { id: 'streak-30', title: 'Monthly Maven', description: '30-day study streak', icon: '📅', category: 'streak', requirement: '30-day streak', xpReward: 500, rarity: 'rare' },
  { id: 'streak-100', title: 'Centurion', description: '100-day study streak', icon: '🏛️', category: 'streak', requirement: '100-day streak', xpReward: 2000, rarity: 'legendary' },

  // Competitive
  { id: 'first-win', title: 'First Victory', description: 'Win your first competitive match', icon: '🥇', category: 'competitive', requirement: 'Win 1 match', xpReward: 50, rarity: 'common' },
  { id: 'win-10', title: 'Veteran Fighter', description: 'Win 10 competitive matches', icon: '⚡', category: 'competitive', requirement: 'Win 10 matches', xpReward: 200, rarity: 'uncommon' },
  { id: 'win-50', title: 'Champion', description: 'Win 50 competitive matches', icon: '🏆', category: 'competitive', requirement: 'Win 50 matches', xpReward: 750, rarity: 'epic' },
  { id: 'unbeaten-5', title: 'Unstoppable', description: '5-win streak in competitive mode', icon: '💪', category: 'competitive', requirement: '5-win streak', xpReward: 300, rarity: 'rare' },
  { id: 'team-victory', title: 'Team Player', description: 'Win a team battle', icon: '🤝', category: 'competitive', requirement: 'Win 1 team battle', xpReward: 100, rarity: 'uncommon' },

  // Exploration
  { id: 'first-lesson', title: 'Explorer', description: 'Complete your first interactive lesson', icon: '🗺️', category: 'exploration', requirement: 'Complete 1 lesson', xpReward: 30, rarity: 'common' },
  { id: 'five-subjects', title: 'Renaissance Learner', description: 'Study 5 different subjects', icon: '📚', category: 'exploration', requirement: 'Study 5 subjects', xpReward: 200, rarity: 'uncommon' },
  { id: 'all-subjects', title: 'Polymath', description: 'Study every available subject', icon: '🧠', category: 'exploration', requirement: 'All subjects attempted', xpReward: 1000, rarity: 'legendary' },
  { id: 'flashcard-100', title: 'Card Collector', description: 'Review 100 flashcards', icon: '🃏', category: 'exploration', requirement: 'Review 100 flashcards', xpReward: 100, rarity: 'uncommon' },
  { id: 'flashcard-1000', title: 'Memory Palace', description: 'Review 1000 flashcards', icon: '🏰', category: 'exploration', requirement: 'Review 1000 flashcards', xpReward: 500, rarity: 'epic' },

  // Speed
  { id: 'speed-demon', title: 'Speed Demon', description: 'Complete a quiz in under 60 seconds', icon: '⏱️', category: 'speed', requirement: 'Quiz in <60s', xpReward: 100, rarity: 'rare' },
  { id: 'lightning-round', title: 'Lightning Round', description: 'Answer 5 questions correctly in under 30 seconds', icon: '⚡', category: 'speed', requirement: '5 correct in 30s', xpReward: 200, rarity: 'rare' },

  // Special
  { id: 'night-owl', title: 'Night Owl', description: 'Study after midnight', icon: '🦉', category: 'special', requirement: 'Study after 12 AM', xpReward: 50, rarity: 'uncommon' },
  { id: 'early-bird', title: 'Early Bird', description: 'Study before 6 AM', icon: '🐦', category: 'special', requirement: 'Study before 6 AM', xpReward: 50, rarity: 'uncommon' },
  { id: 'weekend-warrior', title: 'Weekend Warrior', description: 'Study on both Saturday and Sunday', icon: '🛡️', category: 'special', requirement: 'Weekend study', xpReward: 75, rarity: 'common' },
  { id: 'founding-member', title: 'Founding Member', description: 'Join during the beta period', icon: '🌟', category: 'special', requirement: 'Beta signup', xpReward: 500, rarity: 'legendary' },
]

const CATEGORY_META: Record<Achievement['category'], { label: string; icon: string }> = {
  mastery: { label: 'Mastery', icon: '🎓' },
  streak: { label: 'Streaks', icon: '🔥' },
  competitive: { label: 'Competitive', icon: '⚔️' },
  exploration: { label: 'Exploration', icon: '🗺️' },
  speed: { label: 'Speed', icon: '⏱️' },
  special: { label: 'Special', icon: '✨' },
}

const RARITY_COLORS: Record<Achievement['rarity'], string> = {
  common: 'border-gray-300 dark:border-gray-600',
  uncommon: 'border-green-400 dark:border-green-600',
  rare: 'border-blue-400 dark:border-blue-600',
  epic: 'border-accent-muted dark:border-accent',
  legendary: 'border-yellow-400 dark:border-yellow-500',
}

export function AchievementGallery({ unlockedIds = [] }: { unlockedIds?: string[] }) {
  const [selectedCategory, setSelectedCategory] = useState<Achievement['category'] | 'all'>('all')

  const filtered = useMemo(() =>
    selectedCategory === 'all' ? ACHIEVEMENTS : ACHIEVEMENTS.filter(a => a.category === selectedCategory),
  [selectedCategory])

  const totalUnlocked = ACHIEVEMENTS.filter(a => unlockedIds.includes(a.id)).length

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">🏆 Achievement Gallery</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {totalUnlocked} / {ACHIEVEMENTS.length} unlocked
        </p>
        <div className="mt-2 h-2 max-w-xs mx-auto bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all"
            style={{ width: `${(totalUnlocked / ACHIEVEMENTS.length) * 100}%` }} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            selectedCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >All ({ACHIEVEMENTS.length})</button>
        {Object.entries(CATEGORY_META).map(([key, meta]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key as Achievement['category'])}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              selectedCategory === key ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >{meta.icon} {meta.label}</button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filtered.map(achievement => {
          const unlocked = unlockedIds.includes(achievement.id)
          return (
            <div
              key={achievement.id}
              className={`p-3 rounded-xl border-2 text-center transition-all ${RARITY_COLORS[achievement.rarity]} ${
                unlocked ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/50 opacity-60 grayscale'
              }`}
            >
              <div className="text-3xl mb-1">{unlocked ? achievement.icon : '🔒'}</div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white">{achievement.title}</h4>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">{achievement.description}</p>
              <span className={`inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded-full font-medium capitalize ${
                achievement.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                achievement.rarity === 'epic' ? 'bg-accent-light text-accent-hover dark:bg-accent-light/30 dark:text-accent-muted' :
                achievement.rarity === 'rare' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                achievement.rarity === 'uncommon' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              }`}>{achievement.rarity}</span>
              <div className="text-[10px] text-yellow-600 dark:text-yellow-400 mt-1">+{achievement.xpReward} XP</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { ACHIEVEMENTS }
