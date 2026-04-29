'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

interface UserResult {
  id: string
  name: string | null
  email: string | null
  role: string
  image: string | null
  createdAt: string
}

interface AnalyticsData {
  users: { total: number; newToday: number; newThisWeek: number; newThisMonth: number; premium: number; teachers: number; roles: Record<string, number> }
  activity: { totalSessions: number; sessionsToday: number; totalQuizAttempts: number; quizAttemptsToday: number }
  content: { totalTopics: number; totalFlashcards: number }
  signupTrend: { date: string; count: number }[]
  mcatDiagnostics: {
    attempts30d: number
    avgEstimatedScore: number
    avgPercentage: number
    passageQuestionsServed: number
    passageAccuracyPct: number
    difficultyBreakdown: { difficulty: string; asked: number; answered: number; correct: number; accuracyPct: number }[]
    domainBreakdown: { domain: string; asked: number; answered: number; correct: number; accuracyPct: number }[]
    familyBreakdown: { domain: string; family: string; asked: number; answered: number; correct: number; accuracyPct: number }[]
  }
  funnel: {
    windowDays: number
    activeLearners: number
    quizTakers: number
    diagnosticTakers: number
    exitQuizTakers: number
    quizFromActivePct: number
    diagnosticFromQuizPct: number
    exitQuizFromActivePct: number
    quizFromActivePrevPct: number
    diagnosticFromQuizPrevPct: number
    exitQuizFromActivePrevPct: number
    newUsersWeek: number
    templateBreakdown: { pageTemplate: string; clicks: number; destinations: number }[]
    ctaTypeBreakdown: { ctaType: string; clicks: number }[]
    ctaTypeTrend: { weekStart: string; ctaType: string; clicks: number }[]
    topDestinations: { destination: string; ctaType: string; pageTemplate: string; clicks: number }[]
    notificationSummary?: {
      eligibleAlerts: number
      notifiedAlerts: number
      escalatedAlerts: number
      ticketsCreated: number
      runbooksIncluded: number
      opsMetrics: {
        avgAckHours: number
        avgRecoveryHours: number
        openCriticalAlerts: number
        unacknowledgedCriticalAlerts: number
        recoveredLast30Days: number
      }
      channelsUsed: string[]
      skippedReason?: string
      errors: string[]
    }
    alerts: {
      key: string
      severity: 'warning' | 'critical'
      metric: string
      currentValue: number
      previousValue: number
      deltaPct: number
      message: string
    }[]
  }
}

interface RetentionSnapshot {
  windowDays: number
  cohortSize: number
  returnEligible: number
  noActivityCount: number
  noActivityPct: number
  activeOnSignupCount: number
  activeOnSignupPct: number
  returnedLaterCount: number
  returnedLaterPct: number
  d1Eligible: number
  d1Count: number
  d1Pct: number
  d7Eligible: number
  d7Count: number
  d7Pct: number
  d30Eligible: number
  d30Count: number
  d30Pct: number
  medianDaysToFirstReturn: number | null
}

interface RetentionData {
  generatedAt: string
  excludedEmailDomains: string[]
  snapshots: RetentionSnapshot[]
  latest: RetentionSnapshot
}

interface AlertNotification {
  id: number
  alertKey: string
  metric: string
  severity: string
  windowStart: string
  windowEnd: string
  message: string | null
  channels: string[]
  notifiedAt: string
  acknowledgedAt: string | null
  acknowledgedBy: string | null
  snoozedUntil: string | null
  snoozedBy: string | null
  runbookUrl: string | null
  ticketExternalId: string | null
  ticketUrl: string | null
  ticketStatus: string | null
  ticketCreatedAt: string | null
}

interface MonthlyOpsDigest {
  windowDays: number
  totals: {
    total: number
    critical: number
    warning: number
  }
  medians: {
    ackHours: number
    recoveryHours: number
  }
  topRecurring: {
    alertKey: string
    metric: string
    count: number
  }[]
  channelMix: {
    channel: string
    count: number
  }[]
}

const ROLES = [
  { value: 'FREE', label: 'Free', color: 'bg-gray-100 text-gray-700' },
  { value: 'PREMIUM', label: 'Premium', color: 'bg-purple-100 text-purple-700' },
  { value: 'TEACHER', label: 'Teacher', color: 'bg-blue-100 text-blue-700' },
  { value: 'ADMIN', label: 'Admin', color: 'bg-red-100 text-red-700' },
]

export default function AdminPanel() {
  const router = useRouter()
  const { status } = useSession()
  const [tab, setTab] = useState<'analytics' | 'users'>('analytics')
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [analyticsLoading, setAnalyticsLoading] = useState(true)
  const [retention, setRetention] = useState<RetentionData | null>(null)
  const [retentionLoading, setRetentionLoading] = useState(true)
  const [alertNotifications, setAlertNotifications] = useState<AlertNotification[]>([])
  const [alertsLoading, setAlertsLoading] = useState(true)
  const [monthlyDigest, setMonthlyDigest] = useState<MonthlyOpsDigest | null>(null)
  const [monthlyDigestLoading, setMonthlyDigestLoading] = useState(true)
  const [alertActionKey, setAlertActionKey] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState<UserResult[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  const trendColors = ['bg-red-500', 'bg-blue-500', 'bg-emerald-500', 'bg-purple-500']

  const loadAnalytics = async () => {
    setAnalyticsLoading(true)
    try {
      const res = await fetch('/api/admin/analytics')
      setAnalytics(res.ok ? await res.json() : null)
    } catch (error) {
      console.error(error)
      setAnalytics(null)
    } finally {
      setAnalyticsLoading(false)
    }
  }

  const loadAlertNotifications = async () => {
    setAlertsLoading(true)
    try {
      const res = await fetch('/api/admin/alert-notifications?limit=30')
      if (!res.ok) {
        setAlertNotifications([])
        return
      }
      const body = await res.json() as { notifications?: AlertNotification[] }
      setAlertNotifications(body.notifications ?? [])
    } catch (error) {
      console.error(error)
      setAlertNotifications([])
    } finally {
      setAlertsLoading(false)
    }
  }

  const loadRetention = async () => {
    setRetentionLoading(true)
    try {
      const res = await fetch('/api/admin/retention')
      setRetention(res.ok ? await res.json() : null)
    } catch (error) {
      console.error(error)
      setRetention(null)
    } finally {
      setRetentionLoading(false)
    }
  }

  const loadMonthlyDigest = async () => {
    setMonthlyDigestLoading(true)
    try {
      const res = await fetch('/api/admin/alerts/monthly-digest')
      setMonthlyDigest(res.ok ? await res.json() : null)
    } catch (error) {
      console.error(error)
      setMonthlyDigest(null)
    } finally {
      setMonthlyDigestLoading(false)
    }
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/admin')
    }
  }, [status, router])

  useEffect(() => {
    void Promise.all([loadAnalytics(), loadRetention(), loadAlertNotifications(), loadMonthlyDigest()])
  }, [])

  // Load recent users when switching to users tab
  useEffect(() => {
    if (tab === 'users' && users.length === 0 && !loading) {
      void searchUsers()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])
  const acknowledgeNotification = async (notificationId: number) => {
    setAlertActionKey(`ack-${notificationId}`)
    setMessage(null)
    try {
      const res = await fetch('/api/admin/alert-notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'acknowledge', notificationId }),
      })
      if (!res.ok) {
        setMessage({ text: 'Failed to acknowledge alert', type: 'error' })
        return
      }
      await loadAlertNotifications()
      setMessage({ text: 'Alert acknowledged', type: 'success' })
    } catch {
      setMessage({ text: 'Failed to acknowledge alert', type: 'error' })
    } finally {
      setAlertActionKey(null)
    }
  }

  const snoozeAlert = async (alertKey: string, hours: number) => {
    setAlertActionKey(`snooze-${alertKey}-${hours}`)
    setMessage(null)
    try {
      const res = await fetch('/api/admin/alert-notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'snooze', alertKey, hours }),
      })
      if (!res.ok) {
        setMessage({ text: 'Failed to snooze alert', type: 'error' })
        return
      }
      await Promise.all([loadAlertNotifications(), loadAnalytics()])
      setMessage({ text: `Alert snoozed for ${hours} hours`, type: 'success' })
    } catch {
      setMessage({ text: 'Failed to snooze alert', type: 'error' })
    } finally {
      setAlertActionKey(null)
    }
  }

  const clearSnooze = async (alertKey: string) => {
    setAlertActionKey(`clear-${alertKey}`)
    setMessage(null)
    try {
      const res = await fetch('/api/admin/alert-notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'clear-snooze', alertKey }),
      })
      if (!res.ok) {
        setMessage({ text: 'Failed to clear snooze', type: 'error' })
        return
      }
      await Promise.all([loadAlertNotifications(), loadAnalytics()])
      setMessage({ text: 'Alert snooze cleared', type: 'success' })
    } catch {
      setMessage({ text: 'Failed to clear snooze', type: 'error' })
    } finally {
      setAlertActionKey(null)
    }
  }

  const searchUsers = async () => {
    setLoading(true)
    setMessage(null)
    try {
      const query = search.length >= 2 ? `?search=${encodeURIComponent(search)}` : ''
      const res = await fetch(`/api/admin/users${query}`)
      if (res.status === 403) {
        router.push('/dashboard')
        return
      }
      setUsers(await res.json())
    } catch {
      setMessage({ text: 'Failed to search users', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const changeRole = async (userId: string, newRole: string, userName: string) => {
    const roleName = ROLES.find(r => r.value === newRole)?.label || newRole
    if (!confirm(`Change ${userName}'s role to ${roleName}?`)) return

    setMessage(null)
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, role: newRole }),
      })
      if (!res.ok) {
        const err = await res.json()
        setMessage({ text: err.error || 'Failed to update role', type: 'error' })
        return
      }
      const updated = await res.json()
      setUsers(users.map(u => u.id === updated.id ? { ...u, role: updated.role } : u))
      setMessage({ text: `${userName} is now a ${roleName}`, type: 'success' })
    } catch {
      setMessage({ text: 'Failed to update role', type: 'error' })
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
          Admin Panel
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Site analytics and user management
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(['analytics', 'users'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                tab === t
                  ? 'bg-red-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100'
              }`}
            >
              {t === 'analytics' ? '📊 Analytics' : '👥 Users'}
            </button>
          ))}
        </div>

        {/* Analytics Tab */}
        {tab === 'analytics' && (
          <div>
            {analyticsLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className="h-24 bg-white dark:bg-gray-800 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : analytics ? (
              <>
                {/* User metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <MetricCard label="Total Users" value={analytics.users.total} />
                  <MetricCard label="New Today" value={analytics.users.newToday} color="green" />
                  <MetricCard label="This Week" value={analytics.users.newThisWeek} color="blue" />
                  <MetricCard label="This Month" value={analytics.users.newThisMonth} color="purple" />
                  <MetricCard label="Premium" value={analytics.users.premium} color="purple" />
                  <MetricCard label="Teachers" value={analytics.users.teachers} color="blue" />
                  <MetricCard label="Sessions Today" value={analytics.activity.sessionsToday} color="green" />
                  <MetricCard label="Quizzes Today" value={analytics.activity.quizAttemptsToday} />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Student Retention</h3>
                  {retentionLoading ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">Loading retention analytics...</p>
                  ) : retention ? (
                    <>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4 text-sm">
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                          <p className="text-gray-500 dark:text-gray-400">Cohort Size (90d)</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{retention.latest.cohortSize.toLocaleString()}</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                          <p className="text-gray-500 dark:text-gray-400">Returned Later</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{retention.latest.returnedLaterPct}%</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                          <p className="text-gray-500 dark:text-gray-400">D1 Retention</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{retention.latest.d1Pct}%</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                          <p className="text-gray-500 dark:text-gray-400">D7 Retention</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{retention.latest.d7Pct}%</p>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                          <p className="text-gray-500 dark:text-gray-400">D30 Retention</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{retention.latest.d30Pct}%</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                          <p className="text-gray-500 dark:text-gray-400">No Measurable Activity</p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {retention.latest.noActivityPct}% ({retention.latest.noActivityCount})
                          </p>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                          <p className="text-gray-500 dark:text-gray-400">Active on Signup Day</p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {retention.latest.activeOnSignupPct}% ({retention.latest.activeOnSignupCount})
                          </p>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                          <p className="text-gray-500 dark:text-gray-400">Median Days to First Return</p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {retention.latest.medianDaysToFirstReturn ?? 'n/a'}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-4">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Cohort Trend (14d / 30d / 90d)</p>
                        <div className="space-y-2 text-sm">
                          {retention.snapshots.map((snap) => (
                            <div key={snap.windowDays} className="grid grid-cols-2 md:grid-cols-6 gap-2 rounded border border-gray-200 dark:border-gray-600 px-3 py-2">
                              <span className="font-semibold text-gray-700 dark:text-gray-200">{snap.windowDays}d cohort</span>
                              <span className="text-gray-600 dark:text-gray-300">Size: {snap.cohortSize}</span>
                              <span className="text-gray-600 dark:text-gray-300">Return: {snap.returnedLaterPct}%</span>
                              <span className="text-gray-600 dark:text-gray-300">D1: {snap.d1Pct}%</span>
                              <span className="text-gray-600 dark:text-gray-300">D7: {snap.d7Pct}%</span>
                              <span className="text-gray-600 dark:text-gray-300">D30: {snap.d30Pct}%</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                          Excluding internal domains: {retention.excludedEmailDomains.join(', ')} | Generated: {new Date(retention.generatedAt).toLocaleString()}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400">Retention analytics unavailable.</p>
                  )}
                </div>

                {/* Content stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <MetricCard label="Total Topics" value={analytics.content.totalTopics} />
                  <MetricCard label="Total Flashcards" value={analytics.content.totalFlashcards} />
                  <MetricCard label="Total Sessions" value={analytics.activity.totalSessions} />
                  <MetricCard label="Total Quizzes" value={analytics.activity.totalQuizAttempts} />
                </div>

                {/* Weekly funnel summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Weekly Funnel Summary ({analytics.funnel.windowDays} days)
                  </h3>

                  {analytics.funnel.notificationSummary && (
                    <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm dark:border-gray-600 dark:bg-gray-700/40">
                      <p className="font-semibold text-gray-900 dark:text-white">Critical alert notifications</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Eligible: {analytics.funnel.notificationSummary.eligibleAlerts} | Notified: {analytics.funnel.notificationSummary.notifiedAlerts}
                        {` | Escalated: ${analytics.funnel.notificationSummary.escalatedAlerts}`}
                        {` | Tickets: ${analytics.funnel.notificationSummary.ticketsCreated}`}
                        {` | Runbooks: ${analytics.funnel.notificationSummary.runbooksIncluded}`}
                        {analytics.funnel.notificationSummary.channelsUsed.length > 0
                          ? ` | Channels: ${analytics.funnel.notificationSummary.channelsUsed.join(', ')}`
                          : ''}
                      </p>
                      {analytics.funnel.notificationSummary.skippedReason && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {analytics.funnel.notificationSummary.skippedReason}
                        </p>
                      )}
                      {analytics.funnel.notificationSummary.errors.length > 0 && (
                        <p className="text-xs text-red-600 dark:text-red-300 mt-1">
                          Errors: {analytics.funnel.notificationSummary.errors.join(' | ')}
                        </p>
                      )}

                      <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
                        <div className="rounded bg-white px-2 py-1 dark:bg-gray-800/60">
                          <p className="text-gray-500 dark:text-gray-400">Avg Ack</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{analytics.funnel.notificationSummary.opsMetrics.avgAckHours}h</p>
                        </div>
                        <div className="rounded bg-white px-2 py-1 dark:bg-gray-800/60">
                          <p className="text-gray-500 dark:text-gray-400">Avg Recovery</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{analytics.funnel.notificationSummary.opsMetrics.avgRecoveryHours}h</p>
                        </div>
                        <div className="rounded bg-white px-2 py-1 dark:bg-gray-800/60">
                          <p className="text-gray-500 dark:text-gray-400">Open Critical</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{analytics.funnel.notificationSummary.opsMetrics.openCriticalAlerts}</p>
                        </div>
                        <div className="rounded bg-white px-2 py-1 dark:bg-gray-800/60">
                          <p className="text-gray-500 dark:text-gray-400">Unacked Critical</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{analytics.funnel.notificationSummary.opsMetrics.unacknowledgedCriticalAlerts}</p>
                        </div>
                        <div className="rounded bg-white px-2 py-1 dark:bg-gray-800/60">
                          <p className="text-gray-500 dark:text-gray-400">Recovered 30d</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{analytics.funnel.notificationSummary.opsMetrics.recoveredLast30Days}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {analytics.funnel.alerts.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {analytics.funnel.alerts.map((alert) => (
                        <div
                          key={alert.key}
                          className={`rounded-lg border px-4 py-3 text-sm ${
                            alert.severity === 'critical'
                              ? 'border-red-300 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/30 dark:text-red-200'
                              : 'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                          }`}
                        >
                          <p className="font-semibold">
                            {alert.severity === 'critical' ? 'Critical' : 'Warning'}: {alert.metric}
                          </p>
                          <p>{alert.message}</p>
                          <p className="mt-1 text-xs">
                            Delta: {alert.deltaPct}% (prev {alert.previousValue}% {'->'} current {alert.currentValue}%)
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <MetricCard label="New Users" value={analytics.funnel.newUsersWeek} color="blue" />
                    <MetricCard label="Active Learners" value={analytics.funnel.activeLearners} color="green" />
                    <MetricCard label="Quiz Takers" value={analytics.funnel.quizTakers} color="purple" />
                    <MetricCard label="Diagnostic Takers" value={analytics.funnel.diagnosticTakers} />
                    <MetricCard label="Exit Quiz Takers" value={analytics.funnel.exitQuizTakers} color="green" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                      <p className="text-gray-500 dark:text-gray-400">Quiz from Active</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{analytics.funnel.quizFromActivePct}%</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Prev: {analytics.funnel.quizFromActivePrevPct}%</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                      <p className="text-gray-500 dark:text-gray-400">Diagnostic from Quiz</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{analytics.funnel.diagnosticFromQuizPct}%</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Prev: {analytics.funnel.diagnosticFromQuizPrevPct}%</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3">
                      <p className="text-gray-500 dark:text-gray-400">Exit Quiz from Active</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{analytics.funnel.exitQuizFromActivePct}%</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Prev: {analytics.funnel.exitQuizFromActivePrevPct}%</p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Clicks by Page Template</p>
                      <div className="space-y-2">
                        {analytics.funnel.templateBreakdown.length > 0 ? (
                          analytics.funnel.templateBreakdown.map((row) => (
                            <div key={row.pageTemplate} className="flex items-center justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-300">{row.pageTemplate}</span>
                              <span className="font-mono text-gray-900 dark:text-white">
                                {row.clicks} clicks / {row.destinations} dests
                              </span>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500 dark:text-gray-400">No attributed CTA events yet.</p>
                        )}
                      </div>
                    </div>

                    <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Clicks by CTA Type</p>
                      <div className="space-y-2">
                        {analytics.funnel.ctaTypeBreakdown.length > 0 ? (
                          analytics.funnel.ctaTypeBreakdown.map((row) => (
                            <div key={row.ctaType} className="flex items-center justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-300">{row.ctaType}</span>
                              <span className="font-mono text-gray-900 dark:text-white">{row.clicks}</span>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500 dark:text-gray-400">No attributed CTA events yet.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">CTA Click Trend (8 weeks)</p>
                      {(() => {
                        const weeks = Array.from(new Set(analytics.funnel.ctaTypeTrend.map((r) => r.weekStart))).sort()
                        const topTypes = analytics.funnel.ctaTypeBreakdown.slice(0, 3).map((r) => r.ctaType)
                        const weeklyTotals = weeks.map((week) =>
                          analytics.funnel.ctaTypeTrend
                            .filter((r) => r.weekStart === week)
                            .reduce((sum, r) => sum + r.clicks, 0)
                        )
                        const maxWeekly = Math.max(...weeklyTotals, 1)

                        if (weeks.length === 0) {
                          return <p className="text-sm text-gray-500 dark:text-gray-400">No trend data yet.</p>
                        }

                        return (
                          <>
                            <div className="mb-3 flex flex-wrap gap-3 text-xs">
                              {topTypes.map((type, idx) => (
                                <span key={type} className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-300">
                                  <span className={`h-2 w-2 rounded-full ${trendColors[idx % trendColors.length]}`} />
                                  {type}
                                </span>
                              ))}
                            </div>
                            <div className="space-y-2">
                              {weeks.map((week) => {
                                const rows = analytics.funnel.ctaTypeTrend.filter((r) => r.weekStart === week)
                                const total = rows.reduce((sum, r) => sum + r.clicks, 0)
                                return (
                                  <div key={week} className="text-xs">
                                    <div className="mb-1 flex items-center justify-between text-gray-600 dark:text-gray-300">
                                      <span>{week}</span>
                                      <span className="font-mono">{total}</span>
                                    </div>
                                    <div className="h-2 w-full rounded bg-gray-200 dark:bg-gray-600 overflow-hidden">
                                      <div className="h-full bg-gray-300 dark:bg-gray-500" style={{ width: `${(total / maxWeekly) * 100}%` }} />
                                    </div>
                                    <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-gray-500 dark:text-gray-400">
                                      {topTypes.map((type, tIdx) => {
                                        const clicks = rows.find((r) => r.ctaType === type)?.clicks ?? 0
                                        return (
                                          <span key={`${week}-${type}`} className="inline-flex items-center gap-1">
                                            <span className={`h-1.5 w-1.5 rounded-full ${trendColors[tIdx % trendColors.length]}`} />
                                            {type}: {clicks}
                                          </span>
                                        )
                                      })}
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </>
                        )
                      })()}
                    </div>

                    <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Top CTA Destinations (7 days)</p>
                      <div className="space-y-2">
                        {analytics.funnel.topDestinations.length > 0 ? (
                          analytics.funnel.topDestinations.map((row) => (
                            <div key={`${row.destination}-${row.ctaType}-${row.pageTemplate}`} className="rounded border border-gray-200 dark:border-gray-600 p-2 text-xs">
                              <p className="font-mono text-gray-900 dark:text-white break-all">{row.destination}</p>
                              <div className="mt-1 flex items-center justify-between text-gray-600 dark:text-gray-300">
                                <span>{row.pageTemplate} / {row.ctaType}</span>
                                <span className="font-semibold">{row.clicks} clicks</span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500 dark:text-gray-400">No destination data yet.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">MCAT Diagnostic Item Analytics (30 days)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-5">
                    <MetricCard label="Attempts" value={analytics.mcatDiagnostics.attempts30d} color="blue" />
                    <MetricCard label="Avg MCAT" value={analytics.mcatDiagnostics.avgEstimatedScore} color="green" />
                    <MetricCard label="Avg %" value={analytics.mcatDiagnostics.avgPercentage} color="purple" />
                    <MetricCard label="Passage Qs" value={analytics.mcatDiagnostics.passageQuestionsServed} />
                    <MetricCard label="Passage Acc %" value={analytics.mcatDiagnostics.passageAccuracyPct} color="green" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">By Difficulty</p>
                      <div className="space-y-2 text-sm">
                        {analytics.mcatDiagnostics.difficultyBreakdown.length > 0 ? analytics.mcatDiagnostics.difficultyBreakdown.map((row) => (
                          <div key={row.difficulty} className="flex items-center justify-between gap-2">
                            <span className="capitalize text-gray-700 dark:text-gray-200">{row.difficulty}</span>
                            <span className="font-mono text-gray-900 dark:text-white">{row.accuracyPct}% ({row.correct}/{row.asked})</span>
                          </div>
                        )) : <p className="text-gray-500 dark:text-gray-400">No MCAT item data yet.</p>}
                      </div>
                    </div>

                    <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">By Domain</p>
                      <div className="space-y-2 text-sm">
                        {analytics.mcatDiagnostics.domainBreakdown.length > 0 ? analytics.mcatDiagnostics.domainBreakdown.map((row) => (
                          <div key={row.domain} className="flex items-center justify-between gap-2">
                            <span className="text-gray-700 dark:text-gray-200">{row.domain}</span>
                            <span className="font-mono text-gray-900 dark:text-white">{row.accuracyPct}% ({row.correct}/{row.asked})</span>
                          </div>
                        )) : <p className="text-gray-500 dark:text-gray-400">No MCAT item data yet.</p>}
                      </div>
                    </div>

                    <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Question Families</p>
                      <div className="space-y-2 text-sm">
                        {analytics.mcatDiagnostics.familyBreakdown.length > 0 ? analytics.mcatDiagnostics.familyBreakdown.map((row) => (
                          <div key={`${row.domain}-${row.family}`} className="rounded border border-gray-200 dark:border-gray-600 px-3 py-2">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-gray-700 dark:text-gray-200">{row.family}</span>
                              <span className="font-mono text-gray-900 dark:text-white">{row.accuracyPct}%</span>
                            </div>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{row.domain} • {row.correct}/{row.asked} correct</p>
                          </div>
                        )) : <p className="text-gray-500 dark:text-gray-400">No MCAT family data yet.</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Alert Notification History</h3>
                  {alertsLoading ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">Loading alert history...</p>
                  ) : alertNotifications.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">No alert notifications have been sent yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {alertNotifications.map((row) => {
                        const isCritical = row.severity === 'critical'
                        const ackPending = alertActionKey === `ack-${row.id}`
                        const snooze24Pending = alertActionKey === `snooze-${row.alertKey}-24`
                        const snooze72Pending = alertActionKey === `snooze-${row.alertKey}-72`
                        const clearPending = alertActionKey === `clear-${row.alertKey}`
                        return (
                          <div
                            key={row.id}
                            className={`rounded-lg border p-3 ${
                              isCritical
                                ? 'border-red-200 bg-red-50/70 dark:border-red-900/60 dark:bg-red-900/20'
                                : 'border-amber-200 bg-amber-50/70 dark:border-amber-900/60 dark:bg-amber-900/20'
                            }`}
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <p className="font-semibold text-gray-900 dark:text-white">{row.metric}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {new Date(row.notifiedAt).toLocaleString()} | channels: {row.channels.join(', ') || 'n/a'}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">{row.message ?? 'No message provided'}</p>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                              Window: {row.windowStart} to {row.windowEnd}
                            </p>
                            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                              {row.runbookUrl ? (
                                <a
                                  href={row.runbookUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="rounded border border-indigo-300 px-2 py-0.5 font-medium text-indigo-700 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900/30"
                                >
                                  Open Runbook
                                </a>
                              ) : (
                                <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-500 dark:bg-gray-700 dark:text-gray-300">
                                  No runbook mapped
                                </span>
                              )}

                              {row.ticketUrl ? (
                                <a
                                  href={row.ticketUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="rounded border border-rose-300 px-2 py-0.5 font-medium text-rose-700 hover:bg-rose-50 dark:border-rose-700 dark:text-rose-300 dark:hover:bg-rose-900/30"
                                >
                                  Ticket {row.ticketExternalId ?? row.ticketStatus ?? 'Open'}
                                </a>
                              ) : row.ticketExternalId ? (
                                <span className="rounded bg-rose-100 px-2 py-0.5 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
                                  Ticket {row.ticketExternalId}
                                </span>
                              ) : (
                                <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-500 dark:bg-gray-700 dark:text-gray-300">
                                  No ticket yet
                                </span>
                              )}

                              {row.ticketCreatedAt && (
                                <span className="text-gray-500 dark:text-gray-400">
                                  Ticketed {new Date(row.ticketCreatedAt).toLocaleString()}
                                </span>
                              )}
                            </div>
                            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                              {row.acknowledgedAt ? (
                                <span className="rounded bg-emerald-100 px-2 py-1 font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                                  Acknowledged {new Date(row.acknowledgedAt).toLocaleString()}
                                  {row.acknowledgedBy ? ` by ${row.acknowledgedBy}` : ''}
                                </span>
                              ) : (
                                <button
                                  onClick={() => acknowledgeNotification(row.id)}
                                  disabled={!!alertActionKey}
                                  className="rounded bg-emerald-600 px-2.5 py-1 font-medium text-white disabled:opacity-50"
                                >
                                  {ackPending ? 'Acknowledging...' : 'Acknowledge'}
                                </button>
                              )}

                              {row.snoozedUntil ? (
                                <>
                                  <span className="rounded bg-blue-100 px-2 py-1 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                                    Snoozed until {new Date(row.snoozedUntil).toLocaleString()}
                                  </span>
                                  <button
                                    onClick={() => clearSnooze(row.alertKey)}
                                    disabled={!!alertActionKey}
                                    className="rounded border border-blue-300 px-2.5 py-1 font-medium text-blue-700 disabled:opacity-50 dark:border-blue-700 dark:text-blue-300"
                                  >
                                    {clearPending ? 'Clearing...' : 'Clear Snooze'}
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => snoozeAlert(row.alertKey, 24)}
                                    disabled={!!alertActionKey}
                                    className="rounded border border-gray-300 px-2.5 py-1 font-medium text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200"
                                  >
                                    {snooze24Pending ? 'Snoozing...' : 'Snooze 24h'}
                                  </button>
                                  <button
                                    onClick={() => snoozeAlert(row.alertKey, 72)}
                                    disabled={!!alertActionKey}
                                    className="rounded border border-gray-300 px-2.5 py-1 font-medium text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200"
                                  >
                                    {snooze72Pending ? 'Snoozing...' : 'Snooze 72h'}
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Monthly Ops Digest</h3>
                  {monthlyDigestLoading ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">Loading monthly digest...</p>
                  ) : monthlyDigest ? (
                    <>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4 text-sm">
                        <MetricCard label="Alerts 30d" value={monthlyDigest.totals.total} />
                        <MetricCard label="Critical 30d" value={monthlyDigest.totals.critical} color="purple" />
                        <MetricCard label="Warning 30d" value={monthlyDigest.totals.warning} color="blue" />
                        <MetricCard label="Median Ack (h)" value={monthlyDigest.medians.ackHours} color="green" />
                        <MetricCard label="Median Recovery (h)" value={monthlyDigest.medians.recoveryHours} />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-4">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Top Recurring Alerts</p>
                          <div className="space-y-2 text-sm">
                            {monthlyDigest.topRecurring.length > 0 ? monthlyDigest.topRecurring.map((row) => (
                              <div key={row.alertKey} className="flex items-center justify-between gap-2">
                                <span className="text-gray-700 dark:text-gray-200">{row.metric}</span>
                                <span className="font-mono text-gray-900 dark:text-white">{row.count}</span>
                              </div>
                            )) : <p className="text-gray-500 dark:text-gray-400">No alerts in the last 30 days.</p>}
                          </div>
                        </div>
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-4">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Channel Mix</p>
                          <div className="space-y-2 text-sm">
                            {monthlyDigest.channelMix.length > 0 ? monthlyDigest.channelMix.map((row) => (
                              <div key={row.channel} className="flex items-center justify-between gap-2">
                                <span className="text-gray-700 dark:text-gray-200">{row.channel}</span>
                                <span className="font-mono text-gray-900 dark:text-white">{row.count}</span>
                              </div>
                            )) : <p className="text-gray-500 dark:text-gray-400">No channel usage recorded.</p>}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400">Monthly digest unavailable.</p>
                  )}
                </div>

                {/* Signup trend */}
                {analytics.signupTrend.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Signups (Last 30 Days)</h3>
                    <div className="flex items-end gap-1 h-32">
                      {analytics.signupTrend.map((d) => {
                        const max = Math.max(...analytics.signupTrend.map(x => x.count), 1)
                        return (
                          <div key={d.date} className="flex-1 flex flex-col items-center justify-end" title={`${d.date}: ${d.count}`}>
                            <span className="text-[10px] text-gray-400 mb-1">{d.count > 0 ? d.count : ''}</span>
                            <div
                              className="w-full bg-red-500 rounded-t min-h-[2px]"
                              style={{ height: `${(d.count / max) * 100}%` }}
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Role breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Users by Role</h3>
                  <div className="space-y-2">
                    {Object.entries(analytics.users.roles).map(([role, count]) => (
                      <div key={role} className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${ROLES.find(r => r.value === role)?.color || 'bg-gray-100 text-gray-700'}`}>
                          {role}
                        </span>
                        <div className="flex-1 mx-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 rounded-full" style={{ width: `${(count / analytics.users.total) * 100}%` }} />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Failed to load analytics</p>
            )}
          </div>
        )}

        {/* Users Tab */}
        {tab === 'users' && (
          <div>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && searchUsers()}
            placeholder="Search by name or email..."
            className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white text-lg"
          />
          <button
            onClick={searchUsers}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-xl font-medium ${
            message.type === 'success'
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
          }`}>
            {message.text}
          </div>
        )}

        {/* Results */}
        {users.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {users.map((user) => {
                const currentRole = ROLES.find(r => r.value === user.role)
                return (
                  <div key={user.id} className="p-5 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <div className="flex items-center gap-4 min-w-0">
                      {user.image ? (
                        <Image src={user.image} alt="" width={48} height={48} className="w-12 h-12 rounded-full flex-shrink-0 object-cover" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 font-bold text-lg flex-shrink-0">
                          {(user.name || user.email || '?')[0].toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white truncate">
                          {user.name || 'No name'}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${currentRole?.color || 'bg-gray-100 text-gray-700'}`}>
                        {currentRole?.label || user.role}
                      </span>
                      <select
                        value={user.role}
                        onChange={(e) => changeRole(user.id, e.target.value, user.name || user.email || 'User')}
                        className="px-3 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:outline-none cursor-pointer"
                      >
                        {ROLES.map((r) => (
                          <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {users.length === 0 && !loading && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            {search.length >= 2 ? `No users found matching \u201c${search}\u201d` : 'No users found'}
          </div>
        )}
          </div>
        )}
      </div>
    </div>
  )
}

function MetricCard({ label, value, color }: { label: string; value: number; color?: string }) {
  const colors: Record<string, string> = {
    green: 'text-green-600 dark:text-green-400',
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
  }
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className={`text-2xl font-bold ${color ? colors[color] || '' : 'text-gray-900 dark:text-white'}`}>
        {value.toLocaleString()}
      </p>
    </div>
  )
}
