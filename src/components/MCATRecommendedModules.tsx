'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

type PlanTopicStatus = {
  slug: string
  name: string
  priority: 'high' | 'medium' | 'low'
  topicPath: string
  entranceSatisfied: boolean
  bestExitScorePercent: number | null
  exitSatisfied: boolean
  isSatisfied: boolean
}

type PlanStatus = {
  hasDiagnostic: boolean
  canRetakeDiagnostic: boolean
  requiredScorePercent: number
  recommendedTopics: PlanTopicStatus[]
  pendingTopics: PlanTopicStatus[]
}

export default function MCATRecommendedModules() {
  const { status } = useSession()
  const [planStatus, setPlanStatus] = useState<PlanStatus | null>(null)

  useEffect(() => {
    if (status !== 'authenticated') return

    fetch('/api/mcat-diagnostic/plan-status')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.hasDiagnostic && data?.recommendedTopics?.length) {
          setPlanStatus(data)
        }
      })
      .catch(() => {})
  }, [status])

  if (status !== 'authenticated' || !planStatus || planStatus.recommendedTopics.length === 0) {
    return null
  }

  return (
    <section className="container pb-10">
      <div className="mx-auto max-w-5xl rounded-2xl border-2 border-emerald-300 bg-white p-6 shadow-sm dark:border-emerald-700 dark:bg-gray-800">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Your MCAT Recommended Modules
          </h2>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {planStatus.pendingTopics.length === 0
              ? 'All recommendations complete - diagnostic retake unlocked'
              : `${planStatus.pendingTopics.length} pending before retake`}
          </span>
        </div>

        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Requirement to unlock next diagnostic: score 100% on entrance quiz or at least {planStatus.requiredScorePercent}% on exit quiz for each recommended module.
        </p>

        <div className="grid gap-2 sm:grid-cols-2">
          {planStatus.recommendedTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={topic.topicPath}
              className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 transition hover:border-emerald-400 dark:border-emerald-700 dark:bg-emerald-900/20"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{topic.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                  {topic.priority === 'high' ? 'High' : 'Med'}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${topic.isSatisfied ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
                  {topic.isSatisfied ? 'Complete' : 'Pending'}
                </span>
              </div>
              <span className="text-emerald-600 dark:text-emerald-400">Open →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
