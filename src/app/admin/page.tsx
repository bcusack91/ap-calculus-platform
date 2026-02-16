'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

interface UserResult {
  id: string
  name: string | null
  email: string | null
  role: string
  image: string | null
  createdAt: string
}

const ROLES = [
  { value: 'FREE', label: 'Free', color: 'bg-gray-100 text-gray-700' },
  { value: 'PREMIUM', label: 'Premium', color: 'bg-purple-100 text-purple-700' },
  { value: 'TEACHER', label: 'Teacher', color: 'bg-blue-100 text-blue-700' },
  { value: 'ADMIN', label: 'Admin', color: 'bg-red-100 text-red-700' },
]

export default function AdminPanel() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState<UserResult[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/admin')
    }
  }, [status, router])

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
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
          Admin Panel
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Search for users by name or email, then change their role.
        </p>

        {/* Search */}
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
                        <img src={user.image} alt="" className="w-12 h-12 rounded-full flex-shrink-0" />
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
    </div>
  )
}
