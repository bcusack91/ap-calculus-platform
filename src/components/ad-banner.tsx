'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useConsent } from '@/components/ConsentProvider'

interface AdBannerProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  responsive?: boolean
}

export function AdBanner({ slot, format = 'auto', responsive = true }: AdBannerProps) {
  const { data: session } = useSession()
  const { advertising: consentGiven } = useConsent()
  
  // Don't show ads to premium users
  const isPremium = session?.user?.role === 'PREMIUM'
  
  // Skip ads in development to avoid initialization errors
  const isDevelopment = process.env.NODE_ENV === 'development'

  useEffect(() => {
    if (isPremium || isDevelopment || !consentGiven) return

    // Guard against pushing to an already-filled ad slot on client-side navigation
    const adEl = document.querySelector(`ins.adsbygoogle[data-ad-slot="${slot}"]`)
    if (adEl && adEl.getAttribute('data-ad-status')) return

    try {
      // @ts-expect-error Google AdSense global is injected by the script tag
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [isPremium, isDevelopment, consentGiven, slot])

  if (isPremium) {
    return null
  }
  
  // Show placeholder in development
  if (isDevelopment) {
    return (
      <div className="my-4 flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[250px]">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">📢 Ad Space</p>
          <p className="text-xs text-gray-400">
            (Hidden in development)
          </p>
        </div>
      </div>
    )
  }

  // Don't load ads until user has consented to advertising cookies
  if (!consentGiven) {
    return null
  }

  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID

  // Show placeholder if AdSense not configured yet
  if (!adsenseClientId) {
    return (
      <div className="my-4 flex items-center justify-center bg-gray-100 rounded-lg p-8 min-h-[250px]">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Advertisement</p>
          <p className="text-xs text-gray-400">
            AdSense pending approval
          </p>
        </div>
      </div>
    )
  }

  // Real AdSense code
  return (
    <div className="my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsenseClientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  )
}

export function InArticleAd() {
  const slot = process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE
  if (!slot) return null
  return <AdBanner slot={slot} format="auto" />
}

export function SidebarAd() {
  const slot = process.env.NEXT_PUBLIC_AD_SLOT_SIDEBAR
  if (!slot) return null
  return <AdBanner slot={slot} format="vertical" responsive={false} />
}
