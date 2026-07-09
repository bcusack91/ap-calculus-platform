'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type ColorScheme = 'default' | 'ocean' | 'forest' | 'sunset' | 'rose'

interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  colorScheme: ColorScheme
  defaultCourse: string | null
  emailNotifications: boolean
  weeklyDigest: boolean
  streakReminders: boolean
  reducedMotion: boolean
}

const defaultPreferences: UserPreferences = {
  theme: 'system',
  colorScheme: 'default',
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

  // Apply color scheme to DOM whenever it changes
  useEffect(() => {
    if (preferences.colorScheme && preferences.colorScheme !== 'default') {
      document.documentElement.setAttribute('data-scheme', preferences.colorScheme)
    } else {
      document.documentElement.removeAttribute('data-scheme')
    }
  }, [preferences.colorScheme])

  const updatePreference = useCallback(<K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
    setPreferences((prev) => {
      const next = { ...prev, [key]: value }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  return (
    <PreferencesContext.Provider value={{ preferences, updatePreference, loading }}>
      {children}
    </PreferencesContext.Provider>
  )
}
