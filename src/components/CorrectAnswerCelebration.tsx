'use client'

import { useEffect, useState } from 'react'

const PERFECT_MESSAGES = [
  'Nailed it!',
  'Excellent work!',
  'You got it!',
  'Perfect!',
  'Great job!',
  'Brilliant!',
  'Well done!',
  'Keep it up!',
]

const GOOD_MESSAGES = [
  'Almost there!',
  'Good effort!',
  'Nice try!',
  'Getting closer!',
  'Keep it up!',
  'Solid work!',
]

const NEEDS_WORK_MESSAGES = [
  'Keep practicing!',
  'You\'re learning!',
  'Don\'t give up!',
  'Review and retry!',
  'You\'ll get it!',
  'Every attempt counts!',
]

const PERFECT_EMOJIS = ['🎯', '🌟', '✨', '💪', '🎉', '🧠', '🏆', '⭐']
const GOOD_EMOJIS = ['💪', '📚', '🌱', '👍', '🔄', '📈']
const NEEDS_WORK_EMOJIS = ['📖', '💡', '🔍', '🌱', '📝', '🤔']

interface CorrectAnswerCelebrationProps {
  show: boolean
  onDone?: () => void
  score?: number
  total?: number
}

export default function CorrectAnswerCelebration({ show, onDone, score, total }: CorrectAnswerCelebrationProps) {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [emoji, setEmoji] = useState('')
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; emoji: string; delay: number }[]>([])
  const [styleType, setStyleType] = useState<'perfect' | 'good' | 'needs-work'>('perfect')

  useEffect(() => {
    if (show) {
      let hideTimer: ReturnType<typeof setTimeout> | undefined
      const showTimer = setTimeout(() => {
        // Determine score category
        let category: 'perfect' | 'good' | 'needs-work' = 'perfect'
        if (score !== undefined && total !== undefined && total > 0) {
          const ratio = score / total
          if (ratio >= 1) {
            category = 'perfect'
          } else if (ratio > 0.5) {
            category = 'good'
          } else {
            category = 'needs-work'
          }
        }
        setStyleType(category)

        const messages = category === 'perfect' ? PERFECT_MESSAGES : category === 'good' ? GOOD_MESSAGES : NEEDS_WORK_MESSAGES
        const emojis = category === 'perfect' ? PERFECT_EMOJIS : category === 'good' ? GOOD_EMOJIS : NEEDS_WORK_EMOJIS
        
        setMessage(messages[Math.floor(Math.random() * messages.length)])
        setEmoji(emojis[Math.floor(Math.random() * emojis.length)])

        const particleCount = category === 'perfect' ? 12 : category === 'good' ? 6 : 0
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
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
  }, [show, onDone, score, total])

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
        <div className={`animate-celebration-pop text-white px-10 py-5 rounded-2xl shadow-2xl ${
          styleType === 'perfect' 
            ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
            : styleType === 'good'
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
            : 'bg-gradient-to-r from-amber-500 to-orange-500'
        }`}>
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
