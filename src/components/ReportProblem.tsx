'use client'

import { useState } from 'react'

interface ReportProblemProps {
  questionId?: string
  topicSlug?: string
  context?: string
}

export default function ReportProblem({ questionId, topicSlug, context }: ReportProblemProps) {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!category || !description.trim()) return
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/report-problem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId, topicSlug, context, category, description: description.trim() }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Could not submit — please try again.')
      }
    } catch {
      setError('Could not submit — please try again.')
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="inline-flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400">
        ✅ Report submitted — thank you!
      </div>
    )
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
        aria-label="Report a problem"
      >
        🚩 Report
      </button>
    )
  }

  return (
    <div className="mt-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 space-y-2">
      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">What&apos;s wrong?</p>
      <div className="flex flex-wrap gap-1.5">
        {([
          { label: 'Wrong answer', value: 'wrong-answer' },
          { label: 'Unclear question', value: 'unclear' },
          { label: 'Typo', value: 'typo' },
          { label: 'Missing content', value: 'broken' },
          { label: 'Other', value: 'other' },
        ] as const).map(({ label, value: cat }) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
              category === cat
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Describe the issue..."
        rows={2}
        className="w-full text-xs rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1.5 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        maxLength={500}
      />
      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          disabled={!category || !description.trim() || submitting}
          className="px-3 py-1 text-xs font-medium bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 transition-colors"
        >
          {submitting ? 'Sending...' : 'Submit'}
        </button>
        <button
          onClick={() => setOpen(false)}
          className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
