'use client'

import { useState, useEffect } from 'react'

interface Step {
  title: string
  description: string
  target?: string
  icon: string
}

const STEPS: Step[] = [
  { icon: '📊', title: 'Your Dashboard', description: 'This is your learning hub. See your progress, streaks, and upcoming tasks at a glance.' },
  { icon: '📖', title: 'Browse Topics', description: 'Explore courses and topics. Each topic has interactive lessons with instant feedback.' },
  { icon: '🃏', title: 'Flashcards', description: 'Study with spaced repetition flashcards. Review cards that are due to maximize retention.' },
  { icon: '⚔️', title: 'Competitive Mode', description: 'Challenge other students in real-time or play against AI to test your knowledge.' },
  { icon: '🔥', title: 'Daily Streaks', description: 'Study every day to build your streak. Longer streaks unlock special achievements!' },
  { icon: '🏆', title: 'Achievements', description: 'Earn badges for milestones like completing courses, maintaining streaks, and mastering topics.' },
]

export default function DashboardTutorial() {
  const [step, setStep] = useState(-1) // -1 = not showing
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem('dashboard-tutorial-completed')
    if (!seen) setStep(0)
  }, [])

  const complete = () => {
    setStep(-1)
    setDismissed(true)
    localStorage.setItem('dashboard-tutorial-completed', 'true')
  }

  const next = () => {
    if (step >= STEPS.length - 1) {
      complete()
    } else {
      setStep(step + 1)
    }
  }

  if (step < 0 || dismissed) return null

  const current = STEPS[step]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6">
        <div className="text-center mb-4">
          <span className="text-5xl block mb-3">{current.icon}</span>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{current.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">{current.description}</p>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === step ? 'bg-purple-600' : i < step ? 'bg-purple-300' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={complete}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            Skip tutorial
          </button>
          <div className="flex gap-2">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              >
                Back
              </button>
            )}
            <button
              onClick={next}
              className="px-6 py-2 text-sm font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              {step >= STEPS.length - 1 ? 'Get Started!' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
