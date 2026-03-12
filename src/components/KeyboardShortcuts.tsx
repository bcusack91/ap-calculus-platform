'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Global Cmd+K (Mac) / Ctrl+K (Win/Linux) keyboard shortcut
 * that navigates to the /search page. Mount once in the provider tree.
 */
export function KeyboardShortcuts() {
  const router = useRouter()

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Cmd+K / Ctrl+K → open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        router.push('/search')
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [router])

  return null
}
