'use client'

import { useState } from 'react'

/**
 * #179: "Challenge a Friend" Links
 * Generates shareable challenge links for competitive mode
 */

interface ChallengeConfig {
  subject: string
  questionCount: number
  timeLimit: number // seconds
  challengerName: string
}

export function ChallengeAFriend() {
  const [config, setConfig] = useState<ChallengeConfig>({
    subject: 'ap-calculus-ab',
    questionCount: 10,
    timeLimit: 300,
    challengerName: '',
  })
  const [link, setLink] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const subjects = [
    { id: 'ap-calculus-ab', label: 'AP Calculus AB' },
    { id: 'ap-calculus-bc', label: 'AP Calculus BC' },
    { id: 'ap-chemistry', label: 'AP Chemistry' },
    { id: 'ap-biology', label: 'AP Biology' },
    { id: 'ap-psychology', label: 'AP Psychology' },
    { id: 'ap-physics-1', label: 'AP Physics 1' },
    { id: 'ap-statistics', label: 'AP Statistics' },
    { id: 'sat-math', label: 'SAT Math' },
    { id: 'act-math', label: 'ACT Math' },
    { id: 'algebra-1', label: 'Algebra 1' },
    { id: 'geometry', label: 'Geometry' },
    { id: 'pre-calculus', label: 'Pre-Calculus' },
  ]

  const generateLink = () => {
    const params = new URLSearchParams({
      s: config.subject,
      q: config.questionCount.toString(),
      t: config.timeLimit.toString(),
      c: config.challengerName || 'A friend',
    })
    const challengeLink = `${typeof window !== 'undefined' ? window.location.origin : ''}/competitive/challenge?${params.toString()}`
    setLink(challengeLink)
  }

  const copyLink = async () => {
    if (link) {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">⚔️ Challenge a Friend</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Create a custom challenge and share the link!</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
          <input
            type="text"
            value={config.challengerName}
            onChange={e => setConfig(prev => ({ ...prev, challengerName: e.target.value }))}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            maxLength={30}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
          <select
            value={config.subject}
            onChange={e => setConfig(prev => ({ ...prev, subject: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            {subjects.map(s => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Questions</label>
            <select
              value={config.questionCount}
              onChange={e => setConfig(prev => ({ ...prev, questionCount: Number(e.target.value) }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value={5}>5 Questions</option>
              <option value={10}>10 Questions</option>
              <option value={15}>15 Questions</option>
              <option value={20}>20 Questions</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time Limit</label>
            <select
              value={config.timeLimit}
              onChange={e => setConfig(prev => ({ ...prev, timeLimit: Number(e.target.value) }))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value={120}>2 Minutes</option>
              <option value={300}>5 Minutes</option>
              <option value={600}>10 Minutes</option>
              <option value={900}>15 Minutes</option>
            </select>
          </div>
        </div>

        <button
          onClick={generateLink}
          className="w-full py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Generate Challenge Link
        </button>

        {link && (
          <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Share this link with your friend:</p>
            <div className="flex gap-2">
              <input
                readOnly
                value={link}
                className="flex-1 px-2 py-1.5 text-xs bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300"
              />
              <button
                onClick={copyLink}
                className="px-3 py-1.5 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
