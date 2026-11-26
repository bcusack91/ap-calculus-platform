'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useConsent } from '@/components/ConsentProvider'
import { CHILD_COOKIE, CHILD_ROUTE_PREFIXES, isChildClient } from '@/lib/child-safety'

/**
 * Regions where analytics needs opt-in consent (EU/EEA, UK, Switzerland), as ISO 3166 codes for
 * gtag's region-specific consent defaults. Everywhere else GA measures visits by default and the
 * cookie banner lets the visitor turn it off ("Essential only").
 */
export const OPT_IN_REGIONS = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT',
  'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH',
]

/**
 * The consent defaults, set before gtag.js loads (so the first hit already obeys them):
 * 1. A visitor who chose in the banner gets exactly that choice.
 * 2. A child (self-reported under-13 cookie, or a grade 4–8 page) gets everything denied.
 * 3. Otherwise: analytics granted, except in OPT_IN_REGIONS where it waits for the banner.
 * Advertising storage stays denied until the visitor accepts.
 */
export function consentDefaultsScript(): string {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    (function () {
      var ads = { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' };
      var choice = null;
      try { choice = JSON.parse(localStorage.getItem('cookie-consent') || 'null'); } catch (e) {}
      var path = location.pathname;
      var child = document.cookie.split('; ').some(function (c) { return c.indexOf(${JSON.stringify(CHILD_COOKIE + '=1')}) === 0; })
        || ${JSON.stringify(CHILD_ROUTE_PREFIXES)}.some(function (p) { return path.indexOf(p) === 0; });
      if (child) {
        gtag('consent', 'default', Object.assign({ analytics_storage: 'denied' }, ads));
      } else if (choice) {
        var a = choice.advertising ? 'granted' : 'denied';
        gtag('consent', 'default', {
          analytics_storage: choice.analytics ? 'granted' : 'denied',
          ad_storage: a, ad_user_data: a, ad_personalization: a
        });
      } else {
        gtag('consent', 'default', Object.assign({ analytics_storage: 'denied', region: ${JSON.stringify(OPT_IN_REGIONS)}, wait_for_update: 500 }, ads));
        gtag('consent', 'default', Object.assign({ analytics_storage: 'granted' }, ads));
      }
    })();
  `
}

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const { analytics, advertising, decided } = useConsent()
  const pathname = usePathname()

  // Live changes after load: a banner choice, or moving onto a child-directed page. A visitor who
  // has not chosen keeps the region default from consentDefaultsScript().
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return
    if (isChildClient()) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
      return
    }
    if (!decided) return
    window.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: advertising ? 'granted' : 'denied',
      ad_user_data: advertising ? 'granted' : 'denied',
      ad_personalization: advertising ? 'granted' : 'denied',
    })
  }, [analytics, advertising, decided, pathname])

  return (
    <>
      {/* Set default consent before GA loads */}
      <Script id="google-consent-default" strategy="afterInteractive">
        {consentDefaultsScript()}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  )
}
