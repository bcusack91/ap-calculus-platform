'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

interface AdBannerProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  responsive?: boolean
}

export function AdBanner({ slot, format = 'auto', responsive = true }: AdBannerProps) {
  const { data: session } = useSession()
  
  // Don't show ads to premium users
  const isPremium = session?.user?.role === 'PREMIUM'
  
  // Skip ads in development to avoid initialization errors
  const isDevelopment = process.env.NODE_ENV === 'development'

  useEffect(() => {
    if (isPremium || isDevelopment) return

    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [isPremium, isDevelopment])

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
  return <AdBanner slot="in-article" format="auto" />
}

export function SidebarAd() {
  return <AdBanner slot="sidebar" format="vertical" responsive={false} />
}
