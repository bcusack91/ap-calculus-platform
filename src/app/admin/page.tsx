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
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState<UserResult[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/admin')
    }
  }, [status, router])

  useEffect(() => {
    fetch('/api/admin/analytics')
      .then((r) => r.ok ? r.json() : null)
      .then(setAnalytics)
      .catch(console.error)
      .finally(() => setAnalyticsLoading(false))
  }, [])

  const searchUsers = async () => {
    if (search.length < 2) return
    setLoading(true)
    setMessage(null)
    try {
      const res = await fetch(`/api/admin/users?search=${encodeURIComponent(search)}`)
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
        <div className="text-2xl text-gray-500">Loading...</div>
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

                {/* Content stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <MetricCard label="Total Topics" value={analytics.content.totalTopics} />
                  <MetricCard label="Total Flashcards" value={analytics.content.totalFlashcards} />
                  <MetricCard label="Total Sessions" value={analytics.activity.totalSessions} />
                  <MetricCard label="Total Quizzes" value={analytics.activity.totalQuizAttempts} />
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
              <p className="text-gray-500">Failed to load analytics</p>
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
            disabled={search.length < 2 || loading}
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
                        <p className="text-sm text-gray-500 truncate">{user.email}</p>
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

        {users.length === 0 && search.length >= 2 && !loading && (
          <div className="text-center py-12 text-gray-500">
            No users found matching &ldquo;{search}&rdquo;
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
