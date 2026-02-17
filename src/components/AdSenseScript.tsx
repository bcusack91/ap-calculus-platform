'use client'

import Script from 'next/script'
import { useState, useEffect } from 'react'

export default function AdSenseScript({ clientId }: { clientId: string }) {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const checkConsent = () => {
      try {
        const consent = localStorage.getItem('cookie-consent')
        if (consent) {
          const parsed = JSON.parse(consent)
          setHasConsent(!!parsed.advertising)
        }
      } catch {
        // If parsing fails, don't load AdSense
      }
    }

    checkConsent()

    // Re-check when consent changes
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') {
        checkConsent()
      }
    }
    window.addEventListener('storage', handleStorage)

    const interval = setInterval(checkConsent, 2000)
    const timeout = setTimeout(() => clearInterval(interval), 30000)

    return () => {
      window.removeEventListener('storage', handleStorage)
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  if (!hasConsent) return null

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
