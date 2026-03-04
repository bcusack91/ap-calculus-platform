'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { useSession } from 'next-auth/react'

interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  defaultCourse: string | null
  emailNotifications: boolean
  weeklyDigest: boolean
  streakReminders: boolean
  reducedMotion: boolean
}

const defaultPreferences: UserPreferences = {
  theme: 'system',
  defaultCourse: null,
  emailNotifications: true,
  weeklyDigest: true,
  streakReminders: true,
  reducedMotion: false,
}

interface PreferencesContextValue {
  preferences: UserPreferences
  updatePreference: <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => void
  loading: boolean
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null)

export function usePreferences() {
  const ctx = useContext(PreferencesContext)
  if (!ctx) throw new Error('usePreferences must be used within PreferencesProvider')
  return ctx
}

const STORAGE_KEY = 'user-preferences'

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const { status } = useSession()
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences)
  const [loading, setLoading] = useState(true)

  // Load from localStorage on mount
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Partial<UserPreferences>
        setPreferences(p => ({ ...p, ...parsed }))
      } catch { /* use defaults */ }
    }
    setLoading(false)
  }, [])
  /* eslint-enable react-hooks/set-state-in-effect */

  // Sync from server when authenticated
  useEffect(() => {
    if (status !== 'authenticated') return
    fetch('/api/user/preferences')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.preferences) {
          const merged = { ...defaultPreferences, ...data.preferences }
          setPreferences(merged)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
        }
      })
      .catch(() => {/* use local */})
  }, [status])

  const updatePreference = useCallback(<K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
    setPreferences((prev) => {
      const next = { ...prev, [key]: value }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      // Fire and forget server sync
      if (typeof window !== 'undefined') {
        fetch('/api/user/preferences', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ [key]: value }),
        }).catch(() => {/* silent */})
      }
      return next
    })
  }, [])

  return (
    <PreferencesContext.Provider value={{ preferences, updatePreference, loading }}>
      {children}
    </PreferencesContext.Provider>
  )
}
