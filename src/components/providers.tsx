'use client'

import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { ToastProvider } from '@/components/ToastProvider'
import { PreferencesProvider } from '@/components/PreferencesProvider'
import { ConsentProvider } from '@/components/ConsentProvider'
import { KeyboardShortcuts } from '@/components/KeyboardShortcuts'
import BirthYearGate from '@/components/BirthYearGate'
import ActiveTimeTracker from '@/components/ActiveTimeTracker'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }))

  return (
    // No session refetch on every tab focus: next-auth beta echoes each fetch
    // over BroadcastChannel (so one focus = 2+ calls, more with tabs open),
    // and the calls count against the per-user API rate limit. Page loads
    // still fetch the session, and sign-out still broadcasts to other tabs.
    <SessionProvider refetchOnWindowFocus={false}>
      <QueryClientProvider client={queryClient}>
        <ConsentProvider>
          <ToastProvider>
            <PreferencesProvider>
              <KeyboardShortcuts />
              {children}
              <BirthYearGate />
              <ActiveTimeTracker />
            </PreferencesProvider>
          </ToastProvider>
        </ConsentProvider>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </SessionProvider>
  )
}
