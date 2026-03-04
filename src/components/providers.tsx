'use client'

import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { ToastProvider } from '@/components/ToastProvider'
import { PreferencesProvider } from '@/components/PreferencesProvider'

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
        <ToastProvider>
          <PreferencesProvider>
            {children}
          </PreferencesProvider>
        </ToastProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
