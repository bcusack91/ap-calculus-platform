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

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }))

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ConsentProvider>
          <ToastProvider>
            <PreferencesProvider>
              <KeyboardShortcuts />
              {children}
              <BirthYearGate />
            </PreferencesProvider>
          </ToastProvider>
        </ConsentProvider>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </SessionProvider>
  )
}
