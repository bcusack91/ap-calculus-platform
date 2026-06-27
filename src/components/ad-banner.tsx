/**
 * Ads are DISABLED site-wide — StudyMondo runs ad-free.
 *
 * These components are kept as no-ops so the many call sites that render
 * <InArticleAd />, <SidebarAd />, or <AdBanner /> don't need to change. To
 * re-enable ads later, restore the AdSense rendering from git history and re-add
 * <AdSenseScript /> in src/app/layout.tsx.
 */

interface AdBannerProps {
  slot?: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  responsive?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function AdBanner(_props: AdBannerProps) {
  return null
}

export function InArticleAd() {
  return null
}

export function SidebarAd() {
  return null
}
