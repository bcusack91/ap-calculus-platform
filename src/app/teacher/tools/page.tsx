'use client'

import { useState, useMemo } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { AIFreeResponseGrader } from '@/components/AIFreeResponseGrader'
import { TeacherFlashcardSets } from '@/components/TeacherFlashcardSets'

// Only genuinely-working, DB-backed tools are surfaced here. Class analytics,
// student groups, announcements, and curriculum mapping live inside a specific
// classroom (real data + context) — not in this global hub.
const TOOLS = [
  { key: 'frq-grader', label: 'FRQ Grader', icon: '✍️', description: 'AI-grade free-response answers' },
  { key: 'flashcards', label: 'Flashcard Sets', icon: '🃏', description: 'Create and share custom flashcard sets' },
] as const

type ToolKey = (typeof TOOLS)[number]['key']

export default function TeacherToolsPage() {
  const { status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()

  const initialTab = useMemo(() => {
    const tab = searchParams.get('tab')
    if (tab && TOOLS.some((t) => t.key === tab)) return tab as ToolKey
    return 'frq-grader' as ToolKey
  }, [searchParams])

  const [activeTool, setActiveTool] = useState<ToolKey>(initialTab)

  if (status === 'unauthenticated') {
    router.push('/auth/signin?callbackUrl=/teacher/tools')
    return null
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-accent-subtle dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Link href="/teacher" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            ← Dashboard
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Teacher Tools
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            AI-grade free responses and build flashcard sets for your classes
          </p>
        </div>

        {/* Tool Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {TOOLS.map((tool) => (
            <button
              key={tool.key}
              onClick={() => setActiveTool(tool.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                activeTool === tool.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow'
              }`}
            >
              <span>{tool.icon}</span>
              <span>{tool.label}</span>
            </button>
          ))}
        </div>

        {/* Active Tool */}
        <div>
          {activeTool === 'frq-grader' && <AIFreeResponseGrader />}
          {activeTool === 'flashcards' && <TeacherFlashcardSets />}
        </div>
      </div>
    </div>
  )
}
