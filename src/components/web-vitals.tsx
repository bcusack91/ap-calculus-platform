'use client'

import { useEffect } from 'react'

/**
 * Reports Core Web Vitals (LCP, CLS, INP, FCP, TTFB) to Sentry and/or GA4.
 * Uses the web-vitals library built into Next.js.
 */
export function WebVitals() {
  useEffect(() => {
    // Dynamically import web-vitals to avoid bundling on initial load
    import('web-vitals').then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
      const sendMetric = (metric: { name: string; value: number; id: string; rating: string }) => {
        // Report to Google Analytics 4 (if gtag is available)
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = window.gtag as (...args: unknown[]) => void
          gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
          })
        }

        // Report to Sentry as a custom measurement
        if (typeof window !== 'undefined' && 'Sentry' in window) {
          const Sentry = window.Sentry as {
            metrics?: {
              distribution: (name: string, value: number, opts: { tags: Record<string, string>; unit: string }) => void
            }
          }
          Sentry.metrics?.distribution(`web_vital.${metric.name}`, metric.value, {
            tags: { rating: metric.rating },
            unit: metric.name === 'CLS' ? 'none' : 'millisecond',
          })
        }
      }

      onCLS(sendMetric)
      onINP(sendMetric)
      onLCP(sendMetric)
      onFCP(sendMetric)
      onTTFB(sendMetric)
    })
  }, [])

  return null
}
