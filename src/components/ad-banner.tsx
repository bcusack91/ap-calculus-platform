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

  useEffect(() => {
    if (isPremium) return

    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [isPremium])

  if (isPremium) {
    return null
  }

  // Placeholder for Google AdSense
  // Replace with actual AdSense code when you have a publisher ID
  return (
    <div className="my-4 flex items-center justify-center bg-gray-100 rounded-lg p-8 min-h-[250px]">
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-2">Advertisement</p>
        <p className="text-xs text-gray-400">
          AdSense placeholder - Configure NEXT_PUBLIC_ADSENSE_CLIENT_ID in .env
        </p>
        {/* Actual AdSense code will go here:
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive.toString()}
        />
        */}
      </div>
    </div>
  )
}

export function InArticleAd() {
  return <AdBanner slot="in-article" format="auto" />
}

export function SidebarAd() {
  return <AdBanner slot="sidebar" format="vertical" responsive={false} />
}
