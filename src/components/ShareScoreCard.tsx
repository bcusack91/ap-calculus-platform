'use client'

import { useState } from 'react'

interface ShareScoreCardProps {
  score: number
  total: number
  subject: string
  type: 'quiz' | 'exam' | 'competitive' | 'flashcards'
}

export default function ShareScoreCard({ score, total, subject, type }: ShareScoreCardProps) {
  const [copied, setCopied] = useState(false)
  const pct = Math.round((score / total) * 100)

  const shareText = `I scored ${pct}% (${score}/${total}) on ${subject} ${type} on Study Mondo! 🎯`
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  const share = async (platform: 'twitter' | 'copy') => {
    if (platform === 'twitter') {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
      window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=550,height=420')
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch { /* silent */ }
    }
  }

  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '💪' : '📈'

  return (
    <div className="mt-6 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-accent-subtle to-blue-50 dark:from-accent-light/20 dark:to-blue-900/20">
      <div className="text-center mb-3">
        <span className="text-3xl">{emoji}</span>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">Share your score!</p>
      </div>

      {/* Score preview card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3 text-center shadow-sm">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{subject}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">{pct}%</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{score} / {total} correct</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => share('twitter')}
          className="flex-1 px-3 py-2 text-xs font-medium rounded-lg bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] transition-colors"
        >
          Share on X
        </button>
        <button
          onClick={() => share('copy')}
          className="flex-1 px-3 py-2 text-xs font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>
      </div>
    </div>
  )
}
