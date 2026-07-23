'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

interface StudyGroup {
  id: string
  name: string
  code: string
  memberCount: number
  creatorName: string
  role: string
}

export default function StudyGroupsPage() {
  const { data: _session, status } = useSession()
  const [groups, setGroups] = useState<StudyGroup[]>([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [newName, setNewName] = useState('')
  const [joinCode, setJoinCode] = useState('')
  const [error, setError] = useState('')

  const fetchGroups = async () => {
    try {
      const res = await fetch('/api/study-groups')
      if (res.ok) {
        const data = await res.json()
        setGroups(data.groups ?? [])
      }
    } catch { /* silent */ }
    setLoading(false)
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (status === 'authenticated') fetchGroups()
  }, [status])

  const createGroup = async () => {
    if (!newName.trim()) return
    setCreating(true)
    setError('')
    try {
      const res = await fetch('/api/study-groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName.trim() }),
      })
      if (res.ok) {
        setNewName('')
        fetchGroups()
      } else {
        const d = await res.json()
        setError(d.error ?? 'Failed to create group')
      }
    } catch { setError('Something went wrong') }
    setCreating(false)
  }

  const joinGroup = async () => {
    if (!joinCode.trim()) return
    setError('')
    try {
      const res = await fetch('/api/join-class', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: joinCode.trim().toUpperCase() }),
      })
      if (res.ok) {
        setJoinCode('')
        fetchGroups()
      } else {
        const d = await res.json()
        setError(d.error ?? 'Invalid code')
      }
    } catch { setError('Something went wrong') }
  }

  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Study Groups</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Sign in to create or join study groups</p>
          <Link href="/auth/signin" className="px-6 py-2 bg-accent text-white rounded-lg font-medium">
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">📚 Study Groups</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Create or join study groups to learn together with friends.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Create Group */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="font-bold text-gray-900 dark:text-white mb-3">Create a Group</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Group name..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm dark:bg-gray-700 dark:border-gray-600"
                maxLength={100}
              />
              <button
                onClick={createGroup}
                disabled={creating || !newName.trim()}
                className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover disabled:opacity-50"
              >
                {creating ? '...' : 'Create'}
              </button>
            </div>
          </div>

          {/* Join Group */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="font-bold text-gray-900 dark:text-white mb-3">Join a Group</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={joinCode}
                onChange={e => setJoinCode(e.target.value)}
                placeholder="Enter invite code..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm dark:bg-gray-700 dark:border-gray-600 uppercase"
                maxLength={10}
              />
              <button
                onClick={joinGroup}
                disabled={!joinCode.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Groups List */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Groups</h2>
        {loading ? (
          <div className="space-y-3 animate-pulse">
            {[1, 2, 3].map(i => <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-xl" />)}
          </div>
        ) : groups.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p className="text-4xl mb-2">👋</p>
            <p>No groups yet. Create one or join with an invite code!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {groups.map(group => (
              <div key={group.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-light dark:bg-accent-light/40 flex items-center justify-center text-xl">
                  👥
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 dark:text-white">{group.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {group.memberCount} members · Code: <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">{group.code}</code>
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  group.role === 'TEACHER'
                    ? 'bg-accent-light text-accent-hover dark:bg-accent-light/30 dark:text-accent-muted'
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                }`}>
                  {group.role === 'TEACHER' ? 'Owner' : 'Member'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
