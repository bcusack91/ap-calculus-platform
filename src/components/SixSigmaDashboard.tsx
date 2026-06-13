'use client'

import { SixSigmaAnalytics } from '@/utils/six-sigma-analytics'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useEffectiveRole } from '@/lib/use-effective-role'

interface SixSigmaDashboardProps {
  topicSlug: string
  userId: string
}

export default function SixSigmaDashboard({ topicSlug, userId }: SixSigmaDashboardProps) {
  const { isPremium: premium } = useEffectiveRole()
  const [analytics, setAnalytics] = useState<SixSigmaAnalytics | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'control-chart' | 'pareto' | 'recommendations'>('overview')

  const loadAnalytics = useCallback(async () => {
    try {
      const response = await fetch(`/api/analytics/six-sigma?topicSlug=${topicSlug}&userId=${userId}`)
      const data = await response.json()
      setAnalytics(data.analytics)
    } catch (error) {
      console.error('Failed to load Six Sigma analytics:', error)
    } finally {
      setLoading(false)
    }
  }, [topicSlug, userId])

  useEffect(() => {
    if (premium) loadAnalytics()
    else setLoading(false)
  }, [loadAnalytics, premium])

  // Premium gate: advanced (Six Sigma) analytics is a paid feature. Free users
  // see an upgrade prompt instead of the dashboard (the API enforces this too).
  if (!premium) {
    return (
      <div className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-8 text-center dark:border-purple-800 dark:from-purple-900/20 dark:to-blue-900/20">
        <span className="text-4xl">📊</span>
        <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">Advanced Analytics is a Premium feature</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-gray-600 dark:text-gray-400">
          Unlock Six Sigma performance analytics — control charts, DPMO trends, and process-capability scoring — to see exactly where to focus your practice.
        </p>
        <Link
          href="/pricing"
          className="mt-5 inline-flex rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2.5 font-semibold text-white transition hover:from-purple-700 hover:to-blue-700"
        >
          Upgrade to Premium
        </Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="animate-pulse bg-white dark:bg-gray-800 rounded-xl p-8">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
      </div>
    )
  }

  if (!analytics) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          Complete at least 10 practice problems to see your Six Sigma analytics
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">📊 Six Sigma Performance Analytics</h2>
        <p className="text-purple-100">Statistical Process Control for Your Learning Journey</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <TabButton
            active={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          >
            📈 Overview
          </TabButton>
          <TabButton
            active={activeTab === 'control-chart'}
            onClick={() => setActiveTab('control-chart')}
          >
            📉 Control Chart
          </TabButton>
          <TabButton
            active={activeTab === 'pareto'}
            onClick={() => setActiveTab('pareto')}
          >
            📊 Pareto Analysis
          </TabButton>
          <TabButton
            active={activeTab === 'recommendations'}
            onClick={() => setActiveTab('recommendations')}
          >
            💡 Recommendations
          </TabButton>
        </div>

        <div className="p-8">
          {activeTab === 'overview' && <OverviewTab analytics={analytics} />}
          {activeTab === 'control-chart' && <ControlChartTab analytics={analytics} />}
          {activeTab === 'pareto' && <ParetoTab analytics={analytics} />}
          {activeTab === 'recommendations' && <RecommendationsTab analytics={analytics} />}
        </div>
      </div>
    </div>
  )
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-6 py-4 font-semibold transition-colors ${
        active
          ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-b-4 border-purple-600'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
      }`}
    >
      {children}
    </button>
  )
}

function OverviewTab({ analytics }: { analytics: SixSigmaAnalytics }) {
  const { qualityMetrics, processCapability, typeBreakdown } = analytics

  return (
    <div className="space-y-8">
      {/* Quality Metrics Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <MetricCard
          title="Sigma Level"
          value={qualityMetrics.sigmaLevel.toFixed(1) + 'σ'}
          subtitle={qualityMetrics.qualityGrade}
          color={getSigmaColor(qualityMetrics.sigmaLevel)}
        />
        <MetricCard
          title="DPMO"
          value={Math.round(qualityMetrics.dpmo).toLocaleString()}
          subtitle="Defects Per Million"
          color="blue"
        />
        <MetricCard
          title="Process Capability"
          value={processCapability.cpk.toFixed(2)}
          subtitle={processCapability.interpretation}
          color={processCapability.isCapable ? 'green' : 'yellow'}
        />
      </div>

      {/* Performance by Problem Type */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Performance by Problem Type
        </h3>
        <div className="space-y-3">
          {Object.entries(typeBreakdown).map(([type, metrics]) => (
            <ProblemTypeRow key={type} type={type} metrics={metrics} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ControlChartTab({ analytics }: { analytics: SixSigmaAnalytics }) {
  const { controlChart } = analytics

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-300">
          📈 What is a Control Chart?
        </h3>
        <p className="text-blue-800 dark:text-blue-200">
          Control charts track your performance over time. Points within the control limits (green zone)
          indicate stable, predictable performance. Points outside the limits (red zone) suggest special
          causes that need attention.
        </p>
      </div>

      {/* Control Limits Info */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <div className="text-red-700 dark:text-red-300 font-semibold">Upper Control Limit</div>
          <div className="text-3xl font-bold text-red-800 dark:text-red-200">
            {(controlChart.upperControlLimit * 100).toFixed(1)}%
          </div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <div className="text-green-700 dark:text-green-300 font-semibold">Mean Accuracy</div>
          <div className="text-3xl font-bold text-green-800 dark:text-green-200">
            {(controlChart.accuracyMean * 100).toFixed(1)}%
          </div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <div className="text-red-700 dark:text-red-300 font-semibold">Lower Control Limit</div>
          <div className="text-3xl font-bold text-red-800 dark:text-red-200">
            {(controlChart.lowerControlLimit * 100).toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Out of Control Warning */}
      {controlChart.outOfControlPoints > 0 && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
          <div className="flex items-center">
            <span className="text-2xl mr-3">⚠️</span>
            <div>
              <div className="font-bold text-yellow-800 dark:text-yellow-200">
                {controlChart.outOfControlPoints} Out-of-Control Points Detected
              </div>
              <div className="text-yellow-700 dark:text-yellow-300">
                These represent unusual variations in your performance. Review what happened during these sessions.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Visual Chart Placeholder */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          📊 Interactive control chart visualization will render here
        </p>
        <div className="text-sm text-gray-400 dark:text-gray-400">
          (Requires chart library like Chart.js or Recharts)
        </div>
      </div>
    </div>
  )
}

function ParetoTab({ analytics }: { analytics: SixSigmaAnalytics }) {
  const { rootCauses } = analytics

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2 text-purple-900 dark:text-purple-300">
          📊 Pareto Principle (80/20 Rule)
        </h3>
        <p className="text-purple-800 dark:text-purple-200">
          Typically, 80% of your errors come from 20% of error types. Focus on fixing these critical
          errors first for maximum improvement.
        </p>
      </div>

      {rootCauses.paretoChart.top20PercentErrors.length > 0 && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
          <div className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
            🎯 Critical Error Types (Top 20%)
          </div>
          <div className="flex flex-wrap gap-2">
            {rootCauses.paretoChart.top20PercentErrors.map(errorType => (
              <span
                key={errorType}
                className="px-3 py-1 bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 rounded-full text-sm font-semibold"
              >
                {formatErrorType(errorType)}
              </span>
            ))}
          </div>
          <div className="mt-3 text-sm text-yellow-700 dark:text-yellow-300">
            These {rootCauses.paretoChart.top20PercentErrors.length} error types account for{' '}
            {rootCauses.paretoChart.percentageOfTotalImpact.toFixed(0)}% of all your errors!
          </div>
        </div>
      )}

      {/* Error Breakdown */}
      <div>
        <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Error Analysis & Recommendations
        </h4>
        <div className="space-y-3">
          {rootCauses.criticalErrors.map((error, index) => (
            <ErrorCard key={error.type} error={error} rank={index + 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

function RecommendationsTab({ analytics }: { analytics: SixSigmaAnalytics }) {
  const { improvements } = analytics

  const priorityColors = {
    critical: 'red',
    high: 'orange',
    medium: 'yellow',
    low: 'green'
  }

  const priorityEmojis = {
    critical: '🚨',
    high: '⚠️',
    medium: '📌',
    low: '✅'
  }

  return (
    <div className="space-y-6">
      {/* Priority Banner */}
      <div className={`bg-${priorityColors[improvements.priority]}-50 dark:bg-${priorityColors[improvements.priority]}-900/20 rounded-lg p-6 border-l-4 border-${priorityColors[improvements.priority]}-500`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{priorityEmojis[improvements.priority]}</span>
          <div>
            <h3 className="text-2xl font-bold capitalize text-gray-800 dark:text-gray-200">
              {improvements.priority} Priority
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Estimated practice time: <strong>{improvements.estimatedPracticeTime} minutes</strong>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Confidence:</span>
          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all"
              style={{ width: `${improvements.confidenceLevel * 100}%` }}
            />
          </div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {(improvements.confidenceLevel * 100).toFixed(0)}%
          </span>
        </div>
      </div>

      {/* Focus Areas */}
      {improvements.focusAreas.length > 0 && (
        <div>
          <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            🎯 Focus Areas
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {improvements.focusAreas.map(area => (
              <div
                key={area}
                className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700"
              >
                <div className="font-semibold text-purple-900 dark:text-purple-200">
                  {formatProblemType(area)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Steps */}
      <div>
        <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          📝 Next Steps
        </h4>
        <div className="space-y-3">
          {improvements.nextSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="flex-1 text-gray-700 dark:text-gray-300">
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Helper Components

function MetricCard({ title, value, subtitle, color }: {
  title: string
  value: string
  subtitle: string
  color: string
}) {
  const colorClasses = {
    green: 'from-green-500 to-emerald-600',
    blue: 'from-blue-500 to-cyan-600',
    yellow: 'from-yellow-500 to-orange-600',
    purple: 'from-purple-500 to-pink-600',
    red: 'from-red-500 to-rose-600'
  }

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue} rounded-xl p-6 text-white shadow-lg`}>
      <div className="text-sm opacity-90 mb-1">{title}</div>
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-sm opacity-80">{subtitle}</div>
    </div>
  )
}

function ProblemTypeRow({ type, metrics }: {
  type: string
  metrics: { accuracy: number; dpmo: number; avgTime: number; sampleSize: number; trend: string }
}) {
  const trendEmojis = {
    improving: '📈',
    stable: '➡️',
    declining: '📉'
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">
          {formatProblemType(type)}
        </h4>
        <span className="text-2xl" title={metrics.trend}>
          {trendEmojis[metrics.trend as keyof typeof trendEmojis]}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-gray-500 dark:text-gray-400">Accuracy</div>
          <div className="font-bold text-gray-800 dark:text-gray-200">
            {(metrics.accuracy * 100).toFixed(1)}%
          </div>
        </div>
        <div>
          <div className="text-gray-500 dark:text-gray-400">DPMO</div>
          <div className="font-bold text-gray-800 dark:text-gray-200">
            {Math.round(metrics.dpmo).toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-gray-500 dark:text-gray-400">Avg Time</div>
          <div className="font-bold text-gray-800 dark:text-gray-200">
            {metrics.avgTime.toFixed(1)}s
          </div>
        </div>
        <div>
          <div className="text-gray-500 dark:text-gray-400">Attempts</div>
          <div className="font-bold text-gray-800 dark:text-gray-200">
            {metrics.sampleSize}
          </div>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mt-3">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              metrics.accuracy >= 0.9 ? 'bg-green-500' :
              metrics.accuracy >= 0.7 ? 'bg-yellow-500' :
              'bg-red-500'
            }`}
            style={{ width: `${metrics.accuracy * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

function ErrorCard({ error, rank }: {
  error: {
    type: string
    frequency: number
    percentage: number
    impact: string
    recommendation: string
  }
  rank: number
}) {
  const impactColors = {
    critical: 'red',
    high: 'orange',
    medium: 'yellow',
    low: 'blue'
  }

  return (
    <div className={`bg-${impactColors[error.impact as keyof typeof impactColors]}-50 dark:bg-${impactColors[error.impact as keyof typeof impactColors]}-900/20 border border-${impactColors[error.impact as keyof typeof impactColors]}-200 dark:border-${impactColors[error.impact as keyof typeof impactColors]}-700 rounded-lg p-4`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 bg-${impactColors[error.impact as keyof typeof impactColors]}-600 text-white rounded-full flex items-center justify-center font-bold text-lg`}>
          {rank}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h5 className="font-bold text-lg text-gray-800 dark:text-gray-200">
              {formatErrorType(error.type)}
            </h5>
            <span className={`px-2 py-1 text-xs font-semibold bg-${impactColors[error.impact as keyof typeof impactColors]}-200 dark:bg-${impactColors[error.impact as keyof typeof impactColors]}-800 text-${impactColors[error.impact as keyof typeof impactColors]}-900 dark:text-${impactColors[error.impact as keyof typeof impactColors]}-100 rounded-full uppercase`}>
              {error.impact}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
            <div>
              <span className="text-gray-500 dark:text-gray-400">Frequency:</span>{' '}
              <span className="font-semibold text-gray-800 dark:text-gray-200">{error.frequency} times</span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-gray-400">Percentage:</span>{' '}
              <span className="font-semibold text-gray-800 dark:text-gray-200">{error.percentage.toFixed(1)}%</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
            <strong>💡 Recommendation:</strong> {error.recommendation}
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Functions

function getSigmaColor(sigma: number): string {
  if (sigma >= 5) return 'green'
  if (sigma >= 4) return 'blue'
  if (sigma >= 3) return 'yellow'
  return 'red'
}

function formatProblemType(type: string): string {
  return type
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function formatErrorType(type: string): string {
  return type
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
