'use client'

import Script from 'next/script'
import { useConsent } from '@/components/ConsentProvider'
import { isChildClient } from '@/lib/child-safety'
import { useEffect } from 'react'

/**
 * AdSense loader.
 *
 * IMPORTANT: The AdSense JS bundle must load on every page view, including for
 * the AdSense review crawler and visitors who have not yet interacted with the
 * cookie banner. If we gate the <Script> behind consent, the reviewer simply
 * sees no ad code on the site and rejects with "low value content" /
 * "asset unavailable".
 *
 * What we DO gate on consent is *personalization*: when the visitor has not
 * opted in to advertising cookies, we tell AdSense to serve
 * non-personalized ads via `requestNonPersonalizedAds = 1`. This satisfies
 * GDPR/ePrivacy without hiding the ad code from reviewers.
 */
export default function AdSenseScript({ clientId }: { clientId: string }) {
  const { advertising } = useConsent()

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Initialise the queue and toggle non-personalized ads based on consent.
    // Under-13 (child-directed) visitors ALWAYS get non-personalized ads and are
    // tagged for child-directed treatment, regardless of the consent banner.
    const child = isChildClient()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as unknown as { adsbygoogle?: any[] & { requestNonPersonalizedAds?: number; tagForChildDirectedTreatment?: number } }
    w.adsbygoogle = w.adsbygoogle || []
    w.adsbygoogle.requestNonPersonalizedAds = advertising && !child ? 0 : 1
    if (child) w.adsbygoogle.tagForChildDirectedTreatment = 1
  }, [advertising])

  return (
    <Script
      id="adsbygoogle-loader"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
