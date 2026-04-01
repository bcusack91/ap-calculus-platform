'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface DiagnosticResult {
  estimatedAPScore?: number
  percentage?: number
  recommendedTopics?: { slug: string; name: string; priority: string }[]
}

interface TopicProgressInfo {
  status: string
  masteryLevel: number
  completedAt: string | null
}

/**
 * Maps course slugs to their diagnostic API history endpoint and styling.
 */
const diagnosticConfig: Record<string, { apiPath: string; icon: string; label: string; borderColor: string; bgGradient: string; accentColor: string; pillHigh: string; pillMed: string; diagnosticHref: string }> = {
  'ap-chemistry': { apiPath: '/api/ap-chem-diagnostic/history', icon: '🧪', label: 'AP Chemistry', borderColor: 'border-orange-400 dark:border-orange-600', bgGradient: 'from-orange-50 via-amber-50 to-orange-50 dark:from-orange-900/30 dark:via-amber-900/20 dark:to-orange-900/30', accentColor: 'text-orange-600 dark:text-orange-400', pillHigh: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', pillMed: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', diagnosticHref: '/ap-chem-diagnostic' },
  'ap-calculus-ab': { apiPath: '/api/calcab-diagnostic/history', icon: '∫', label: 'AP Calculus AB', borderColor: 'border-purple-400 dark:border-purple-600', bgGradient: 'from-purple-50 via-violet-50 to-purple-50 dark:from-purple-900/30 dark:via-violet-900/20 dark:to-purple-900/30', accentColor: 'text-purple-600 dark:text-purple-400', pillHigh: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', pillMed: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', diagnosticHref: '/calcab-diagnostic' },
  'ap-calculus-bc': { apiPath: '/api/calcbc-diagnostic/history', icon: '∬', label: 'AP Calculus BC', borderColor: 'border-violet-400 dark:border-violet-600', bgGradient: 'from-violet-50 via-purple-50 to-violet-50 dark:from-violet-900/30 dark:via-purple-900/20 dark:to-violet-900/30', accentColor: 'text-violet-600 dark:text-violet-400', pillHigh: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', pillMed: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', diagnosticHref: '/calcbc-diagnostic' },
  'ap-biology': { apiPath: '/api/ap-bio-diagnostic/history', icon: '🧬', label: 'AP Biology', borderColor: 'border-green-400 dark:border-green-600', bgGradient: 'from-green-50 via-emerald-50 to-green-50 dark:from-green-900/30 dark:via-emerald-900/20 dark:to-green-900/30', accentColor: 'text-green-600 dark:text-green-400', pillHigh: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', pillMed: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', diagnosticHref: '/ap-bio-diagnostic' },
  'ap-statistics': { apiPath: '/api/ap-stats-diagnostic/history', icon: '📊', label: 'AP Statistics', borderColor: 'border-blue-400 dark:border-blue-600', bgGradient: 'from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-blue-900/30', accentColor: 'text-blue-600 dark:text-blue-400', pillHigh: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', pillMed: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', diagnosticHref: '/ap-stats-diagnostic' },
}

export default function DiagnosticStudyPlanBanner({ courseSlug }: { courseSlug: string }) {
  const { data: session, status } = useSession()
  const [result, setResult] = useState<DiagnosticResult | null>(null)
  const [topicProgress, setTopicProgress] = useState<Record<string, TopicProgressInfo>>({})

  const config = diagnosticConfig[courseSlug]

  useEffect(() => {
    if (status !== 'authenticated' || !config) return
    fetch(config.apiPath)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.attempts?.length > 0) {
          const latestResult = data.attempts[0].results as DiagnosticResult
          setResult(latestResult)

          // Fetch progress for recommended topics
          const slugs = latestResult.recommendedTopics?.map(t => t.slug)
          if (slugs?.length) {
            fetch(`/api/progress/batch?slugs=${slugs.join(',')}`)
              .then(r => r.ok ? r.json() : null)
              .then(progressData => {
                if (progressData?.progress) {
                  setTopicProgress(progressData.progress)
                }
              })
              .catch(() => {})
          }
        }
      })
      .catch(() => {})
  }, [status, config])

  if (!config || !result?.recommendedTopics?.length) return null

  // Filter out topics that are COMPLETED or MASTERED
  const remainingTopics = result.recommendedTopics.filter(topic => {
    const progress = topicProgress[topic.slug]
    if (!progress) return true
    return progress.status !== 'COMPLETED' && progress.status !== 'MASTERED'
  })

  const completedCount = result.recommendedTopics.length - remainingTopics.length

  // All recommended topics completed — show congratulations
  if (remainingTopics.length === 0 && completedCount > 0) {
    return (
      <div className={`rounded-2xl border-2 border-green-400 dark:border-green-600 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 dark:from-green-900/30 dark:via-emerald-900/20 dark:to-green-900/30 p-6 sm:p-8 mb-8 shadow-sm`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              🎉 Study Plan Complete!
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              You&apos;ve completed all {completedCount} recommended topic{completedCount !== 1 ? 's' : ''} from your diagnostic. Consider retaking the diagnostic to measure your improvement!
            </p>
          </div>
          <Link
            href={config.diagnosticHref}
            className={`text-xs font-medium ${config.accentColor} hover:underline whitespace-nowrap flex-shrink-0`}
          >
            Retake Test →
          </Link>
        </div>
      </div>
    )
  }

  // No progress data loaded yet, or no topics were completed — hide banner if no topics
  if (remainingTopics.length === 0) return null

  return (
    <div className={`rounded-2xl border-2 ${config.borderColor} bg-gradient-to-r ${config.bgGradient} p-6 sm:p-8 mb-8 shadow-sm`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            {config.icon} Continue Your Study Plan
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Based on your diagnostic (AP Score: {result.estimatedAPScore}/5, {result.percentage}%)
            {completedCount > 0 && ` — ${completedCount} topic${completedCount !== 1 ? 's' : ''} completed`}
            {completedCount > 0 ? ', focus on the remaining:' : ' — focus on these topics:'}
          </p>
        </div>
        <Link
          href={config.diagnosticHref}
          className={`text-xs font-medium ${config.accentColor} hover:underline whitespace-nowrap flex-shrink-0`}
        >
          Retake Test →
        </Link>
      </div>
      <div className="space-y-2">
        {remainingTopics.map((topic, i) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className="flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 px-4 py-3 hover:border-gray-400 dark:hover:border-gray-500 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className={`flex h-7 w-7 items-center justify-center rounded-full ${config.accentColor} bg-white dark:bg-gray-900 border border-current text-xs font-bold`}>{i + 1}</span>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">{topic.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${topic.priority === 'high' ? config.pillHigh : config.pillMed}`}>
                {topic.priority === 'high' ? 'High Priority' : 'Medium'}
              </span>
            </div>
            <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
