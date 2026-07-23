'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'

interface FlashcardNotificationProps {
  show: boolean
  newCards: number
  totalActive: number
  topicTitle: string
  onDismiss: () => void
}

export function FlashcardNotification({ show, newCards, totalActive, topicTitle, onDismiss }: FlashcardNotificationProps) {
  const [visible, setVisible] = useState(false)

  const handleDismiss = useCallback(() => {
    setVisible(false)
    setTimeout(onDismiss, 300) // Wait for animation to complete
  }, [onDismiss])

  useEffect(() => {
    if (show) {
      const showTimer = setTimeout(() => {
        setVisible(true)
      }, 0)
      // Auto-dismiss after 10 seconds
      const timer = setTimeout(() => {
        handleDismiss()
      }, 10000)
      return () => {
        clearTimeout(showTimer)
        clearTimeout(timer)
      }
    }
  }, [show, handleDismiss])

  if (!visible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md animate-slide-up">
      <div className="bg-gradient-to-r from-accent to-accent-secondary text-white rounded-lg shadow-2xl p-6 border-2 border-white">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 text-3xl">🎴</div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">
              {newCards > 0 ? 'New Flashcards Unlocked!' : 'Flashcards Available!'}
            </h3>
            <p className="text-sm mb-3 text-accent-light">
              {newCards > 0 ? (
                <>
                  <strong>{newCards}</strong> new flashcard{newCards === 1 ? '' : 's'} unlocked for <strong>{topicTitle}</strong>. 
                  You now have <strong>{totalActive}</strong> card{totalActive === 1 ? '' : 's'} to review!
                </>
              ) : (
                <>
                  You have <strong>{totalActive}</strong> flashcard{totalActive === 1 ? '' : 's'} ready to review for <strong>{topicTitle}</strong>!
                </>
              )}
            </p>
            <div className="flex gap-2">
              <Link
                href="/flashcards/review/start"
                className="px-4 py-2 bg-white text-accent rounded-lg font-semibold text-sm hover:bg-accent-subtle transition-all"
                onClick={handleDismiss}
              >
                Review Now
              </Link>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 bg-accent-hover hover:bg-accent-dark rounded-lg font-semibold text-sm transition-all"
              >
                Later
              </button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-white hover:text-accent-light transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
