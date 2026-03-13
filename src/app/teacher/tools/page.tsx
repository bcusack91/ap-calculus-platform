'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { TeacherQuizBuilder } from '@/components/TeacherQuizBuilder'
import { AssignmentTemplates } from '@/components/AssignmentTemplates'
import { ClassAnalytics } from '@/components/ClassAnalytics'
import { ParentGuardianView } from '@/components/ParentGuardianView'
import { ClassAnnouncements } from '@/components/ClassAnnouncements'
import { AutoGradedFRQ } from '@/components/AutoGradedFRQ'
import { CurriculumMapping } from '@/components/CurriculumMapping'
import { StudentGrouping } from '@/components/StudentGrouping'
import { TeacherFlashcardSets } from '@/components/TeacherFlashcardSets'

const TOOLS = [
  { key: 'quiz-builder', label: 'Quiz Builder', icon: '📝', description: 'Create custom quizzes and assessments' },
  { key: 'templates', label: 'Assignment Templates', icon: '📋', description: 'Pre-built assignment templates by subject' },
  { key: 'frq-grader', label: 'FRQ Auto-Grader', icon: '✍️', description: 'Auto-grade free-response questions' },
  { key: 'flashcards', label: 'Flashcard Sets', icon: '🃏', description: 'Create and share custom flashcard sets' },
  { key: 'analytics', label: 'Class Analytics', icon: '📊', description: 'Student performance analytics' },
  { key: 'grouping', label: 'Student Groups', icon: '👥', description: 'Create and manage student groups' },
  { key: 'announcements', label: 'Announcements', icon: '📢', description: 'Post class announcements' },
  { key: 'curriculum', label: 'Curriculum Map', icon: '🗺️', description: 'Map topics to textbook chapters' },
  { key: 'parent-view', label: 'Parent View', icon: '👨‍👩‍👧', description: 'Preview the parent/guardian dashboard' },
] as const

type ToolKey = (typeof TOOLS)[number]['key']

export default function TeacherToolsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTool, setActiveTool] = useState<ToolKey>('quiz-builder')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && TOOLS.some((t) => t.key === tab)) {
      setActiveTool(tab as ToolKey)
    }
  }, [searchParams])

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Link href="/teacher" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            ← Dashboard
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Teacher Tools
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Build quizzes, manage groups, track analytics, and more
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
          {activeTool === 'quiz-builder' && <TeacherQuizBuilder />}
          {activeTool === 'templates' && <AssignmentTemplates />}
          {activeTool === 'frq-grader' && <AutoGradedFRQ />}
          {activeTool === 'flashcards' && <TeacherFlashcardSets />}
          {activeTool === 'analytics' && <ClassAnalytics />}
          {activeTool === 'grouping' && <StudentGrouping />}
          {activeTool === 'announcements' && <ClassAnnouncements isTeacher />}
          {activeTool === 'curriculum' && <CurriculumMapping />}
          {activeTool === 'parent-view' && <ParentGuardianView />}
        </div>
      </div>
    </div>
  )
}
