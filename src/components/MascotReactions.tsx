'use client'

import { useState, useEffect } from 'react'

/**
 * #184: Animated Mascot Reactions
 * Study Mondo mascot (owl) that reacts to user actions
 */

type MascotMood = 'idle' | 'happy' | 'celebrating' | 'thinking' | 'encouraging' | 'sleeping' | 'excited' | 'sad'

interface MascotConfig {
  mood: MascotMood
  message?: string
  duration?: number
}

const MASCOT_FACES: Record<MascotMood, { face: string; animation: string }> = {
  idle: { face: '🦉', animation: '' },
  happy: { face: '🦉', animation: 'animate-bounce' },
  celebrating: { face: '🎉', animation: 'animate-spin' },
  thinking: { face: '🤔', animation: 'animate-pulse' },
  encouraging: { face: '💪', animation: 'animate-bounce' },
  sleeping: { face: '😴', animation: '' },
  excited: { face: '🤩', animation: 'animate-bounce' },
  sad: { face: '😢', animation: '' },
}

const MASCOT_MESSAGES: Record<MascotMood, string[]> = {
  idle: ['Ready to learn?', 'What shall we study today?', 'I believe in you!'],
  happy: ['Great job!', 'You nailed it!', 'Keep it up!', 'Brilliant!'],
  celebrating: ['PERFECT SCORE!', 'You are amazing!', 'Level up!', 'New achievement!'],
  thinking: ['Hmm, let me think...', 'Take your time!', 'You can figure this out!'],
  encouraging: ['Don\'t give up!', 'Try again, you got this!', 'Almost there!', 'Keep pushing!'],
  sleeping: ['Zzz...', 'Study break time?', 'Rest is important too!'],
  excited: ['Woah, a streak!', 'On fire today!', 'Unstoppable!'],
  sad: ['Let\'s review that one', 'Mistakes help us learn!', 'Everyone struggles sometimes'],
}

function getRandomMessage(mood: MascotMood): string {
  const messages = MASCOT_MESSAGES[mood]
  return messages[Math.floor(Math.random() * messages.length)]
}

export function MascotBubble({ mood = 'idle', message, duration = 3000, onDismiss }: MascotConfig & { onDismiss?: () => void }) {
  const [visible, setVisible] = useState(true)
  const [displayMessage] = useState(message || getRandomMessage(mood))
  const { face, animation } = MASCOT_FACES[mood]

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false)
        onDismiss?.()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onDismiss])

  if (!visible) return null

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-end gap-2">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-2 max-w-[200px]">
        <p className="text-sm text-gray-700 dark:text-gray-300">{displayMessage}</p>
      </div>
      <div className={`text-4xl ${animation} cursor-pointer select-none`} onClick={() => { setVisible(false); onDismiss?.() }}>
        {face}
      </div>
    </div>
  )
}

export function useMascot() {
  const [config, setConfig] = useState<MascotConfig | null>(null)

  const showMascot = (mood: MascotMood, message?: string, duration = 3000) => {
    setConfig({ mood, message, duration })
  }

  const onCorrectAnswer = () => showMascot('happy')
  const onWrongAnswer = () => showMascot('encouraging')
  const onPerfectScore = () => showMascot('celebrating')
  const onStreak = (days: number) => showMascot('excited', `${days}-day streak! 🔥`)
  const onLevelUp = (level: number) => showMascot('celebrating', `Level ${level}! 🎉`)

  return { config, showMascot, onCorrectAnswer, onWrongAnswer, onPerfectScore, onStreak, onLevelUp, dismiss: () => setConfig(null) }
}
