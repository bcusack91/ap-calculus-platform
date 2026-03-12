'use client'

import { useEffect, useState } from 'react'

const MESSAGES = [
  'Nailed it!',
  'Excellent work!',
  'You got it!',
  'Perfect!',
  'Great job!',
  'Brilliant!',
  'Well done!',
  'Keep it up!',
]

const EMOJIS = ['🎯', '🌟', '✨', '💪', '🎉', '🧠', '🏆', '⭐']

interface CorrectAnswerCelebrationProps {
  show: boolean
  onDone?: () => void
}

export default function CorrectAnswerCelebration({ show, onDone }: CorrectAnswerCelebrationProps) {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [emoji, setEmoji] = useState('')
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; emoji: string; delay: number }[]>([])

  useEffect(() => {
    if (show) {
      let hideTimer: ReturnType<typeof setTimeout> | undefined
      const showTimer = setTimeout(() => {
        setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)])
        setEmoji(EMOJIS[Math.floor(Math.random() * EMOJIS.length)])

        const newParticles = Array.from({ length: 12 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          emoji: ['🎊', '✨', '⭐', '🌟', '💫', '🎉'][Math.floor(Math.random() * 6)],
          delay: Math.random() * 0.5,
        }))
        setParticles(newParticles)
        setVisible(true)

        hideTimer = setTimeout(() => {
          setVisible(false)
          onDone?.()
        }, 2200)
      }, 0)

      return () => {
        clearTimeout(showTimer)
        if (hideTimer) clearTimeout(hideTimer)
      }
    }
  }, [show, onDone])

  if (!visible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Screen reader announcement */}
      <div role="status" aria-live="assertive" className="sr-only">
        {message}
      </div>

      {/* Confetti particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute text-2xl animate-confetti"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}

      {/* Central message */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-celebration-pop bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-5 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{emoji}</span>
            <span className="text-2xl font-bold">{message}</span>
            <span className="text-3xl">{emoji}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
