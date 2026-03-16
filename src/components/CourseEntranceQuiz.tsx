'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { ExitQuizQuestion } from '@/data/exit-quizzes'
import { generateExitQuiz, hasExitQuiz } from '@/data/exit-quizzes'

const ExitQuiz = dynamic(() => import('@/components/ExitQuiz'), { ssr: false })

interface TopicInfo {
  id: string
  slug: string
  title: string
  description: string | null
  subtopicCount: number
}

interface CategoryInfo {
  id: string
  name: string
  slug: string
  description: string | null
  icon: string | null
  topics: TopicInfo[]
}

interface CourseEntranceQuizProps {
  courseSlug: string
  courseName: string
  categories: CategoryInfo[]
}

type Phase = 'loading' | 'quiz' | 'results'

export default function CourseEntranceQuiz({ courseSlug, courseName, categories }: CourseEntranceQuizProps) {
  const [phase, setPhase] = useState<Phase>('loading')
  const [quizQuestions, setQuizQuestions] = useState<ExitQuizQuestion[]>([])
  const [weakTopicSlugs, setWeakTopicSlugs] = useState<Set<string>>(new Set())
  const [quizScore, setQuizScore] = useState<{ score: number; total: number } | null>(null)
  const [showFinalQuiz, setShowFinalQuiz] = useState(false)
  const [finalQuizQuestions, setFinalQuizQuestions] = useState<ExitQuizQuestion[]>([])

  // Generate entrance quiz on mount
  useEffect(() => {
    const loadQuiz = async () => {
      // Try course-level quiz (e.g., 'ap-chemistry')
      if (hasExitQuiz(courseSlug)) {
        const questions = await generateExitQuiz(courseSlug, 20)
        if (questions.length > 0) {
          setQuizQuestions(questions)
          setPhase('quiz')
          return
        }
      }
      // No quiz available for this course — skip to results showing all topics
      setPhase('results')
    }
    loadQuiz()
  }, [courseSlug])

  const handleQuizComplete = (score: number, total: number, _passed: boolean, _mustRedoUnit: boolean, wrongTopicSlugs?: string[]) => {
    setQuizScore({ score, total })
    setWeakTopicSlugs(new Set(wrongTopicSlugs || []))
    setPhase('results')
  }

  const handleFinalQuizStart = async () => {
    if (hasExitQuiz(courseSlug)) {
      const questions = await generateExitQuiz(courseSlug, 20)
      setFinalQuizQuestions(questions)
      setShowFinalQuiz(true)
    }
  }

  const handleFinalQuizComplete = () => {
    setShowFinalQuiz(false)
  }

  // Filter categories to only show topics the student needs
  const filteredCategories = weakTopicSlugs.size > 0
    ? categories
        .map(cat => ({
          ...cat,
          topics: cat.topics.filter(t => weakTopicSlugs.has(t.slug)),
        }))
        .filter(cat => cat.topics.length > 0)
    : categories

  const totalFilteredTopics = filteredCategories.reduce((sum, cat) => sum + cat.topics.length, 0)

  // Show final exit quiz
  if (showFinalQuiz && finalQuizQuestions.length > 0) {
    return (
      <ExitQuiz
        topicSlug={courseSlug}
        topicTitle={courseName}
        questions={finalQuizQuestions}
        onComplete={handleFinalQuizComplete}
        onCancel={() => setShowFinalQuiz(false)}
        previousAttempts={0}
        lastScore={null}
        mustRedoUnit={false}
      />
    )
  }

  // Loading state
  if (phase === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Preparing your entrance quiz...</p>
      </div>
    )
  }

  // Quiz phase
  if (phase === 'quiz' && quizQuestions.length > 0) {
    return (
      <ExitQuiz
        topicSlug={courseSlug}
        topicTitle={`${courseName} Entrance Quiz`}
        questions={quizQuestions}
        onComplete={handleQuizComplete}
        onCancel={() => setPhase('results')}
        previousAttempts={0}
        lastScore={null}
        mustRedoUnit={false}
      />
    )
  }

  // Results phase — show filtered topics
  return (
    <div className="space-y-8">
      {/* Quiz Results Summary */}
      {quizScore && (
        <div className={`rounded-2xl border-2 p-6 shadow-sm ${
          weakTopicSlugs.size === 0
            ? 'border-green-300 dark:border-green-700 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
            : 'border-amber-300 dark:border-amber-700 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20'
        }`}>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{weakTopicSlugs.size === 0 ? '🎉' : '📋'}</span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Entrance Quiz Results: {quizScore.score}/{quizScore.total} ({Math.round((quizScore.score / quizScore.total) * 100)}%)
              </h3>
              {weakTopicSlugs.size === 0 ? (
                <p className="text-gray-600 dark:text-gray-400">
                  Great job! You demonstrated mastery of all topics. You can review any topic below or take the final exit quiz.
                </p>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">
                  Based on your results, we&apos;ve identified <strong>{totalFilteredTopics} topic{totalFilteredTopics !== 1 ? 's' : ''}</strong> to focus on.
                  Complete these lessons, then take the final exit quiz to demonstrate full mastery.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Filtered Topic Categories */}
      {filteredCategories.map((category) => (
        <div key={category.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            {category.icon && <span className="text-3xl">{category.icon}</span>}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.name}
              </h2>
              {category.description && (
                <p className="text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
              )}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {category.topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.slug}/interactive`}
                className="group block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                  {topic.title}
                </h3>
                {topic.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {topic.description}
                  </p>
                )}
                {topic.subtopicCount > 0 && (
                  <p className="text-xs text-gray-500 mt-2">{topic.subtopicCount} subtopics</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Final Exit Quiz Button */}
      <div className="rounded-2xl border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 text-center shadow-sm">
        <span className="text-4xl block mb-3">🎓</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to prove your mastery?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          After reviewing the topics above, take the final exit quiz covering <strong>all</strong> {courseName} content.
        </p>
        <button
          onClick={handleFinalQuizStart}
          className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-lg transition-all"
        >
          📝 Take Final Exit Quiz
        </button>
      </div>
    </div>
  )
}
