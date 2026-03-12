'use client'

import Script from 'next/script'
import { useConsent } from '@/components/ConsentProvider'

export default function AdSenseScript({ clientId }: { clientId: string }) {
  const { advertising } = useConsent()

  if (!advertising) return null

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
