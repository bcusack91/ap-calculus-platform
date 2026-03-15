'use client'

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

interface ConsentState {
  analytics: boolean
  advertising: boolean
}

const ConsentContext = createContext<ConsentState>({ analytics: false, advertising: false })

export function useConsent() {
  return useContext(ConsentContext)
}

function readConsent(): ConsentState {
  if (typeof window === 'undefined') return { analytics: false, advertising: false }
  try {
    const raw = localStorage.getItem('cookie-consent')
    if (!raw) return { analytics: false, advertising: false }
    const parsed = JSON.parse(raw)
    return {
      analytics: !!parsed.analytics,
      advertising: !!parsed.advertising,
    }
  } catch {
    return { analytics: false, advertising: false }
  }
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(() => readConsent())

  const refresh = useCallback(() => {
    setConsent((prev) => {
      const next = readConsent()
      if (prev.analytics === next.analytics && prev.advertising === next.advertising) return prev
      return next
    })
  }, [])

  useEffect(() => {
    // Listen for cross-tab changes
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') refresh()
    }
    window.addEventListener('storage', handleStorage)

    // Listen for same-tab consent changes (dispatched by cookie banner)
    window.addEventListener('consent-updated', refresh)

    // Fallback poll for same-tab consent changes
    // Clears itself after 30 seconds to avoid wasting resources
    const interval = setInterval(refresh, 2000)
    const timeout = setTimeout(() => clearInterval(interval), 30000)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('consent-updated', refresh)
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [refresh])

  const value = useMemo(() => consent, [consent])

  return (
    <ConsentContext.Provider value={value}>
      {children}
    </ConsentContext.Provider>
  )
}
