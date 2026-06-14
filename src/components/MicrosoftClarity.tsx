'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useConsent } from '@/components/ConsentProvider'
import { isChildClient } from '@/lib/child-safety'

interface MicrosoftClarityProps {
  projectId: string
}

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void
  }
}

/**
 * Microsoft Clarity tag — session replay & heatmaps.
 *
 * Privacy: Clarity is session-replay and therefore an analytics cookie. It loads
 * ONLY after the user grants analytics consent (deny-by-default), mirroring
 * GoogleAnalytics. It is NEVER loaded for self-identified under-13 (child) users,
 * and even with consent it does not `identify()` a child account to Microsoft.
 *
 * Docs: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-setup
 */
export default function MicrosoftClarity({ projectId }: MicrosoftClarityProps) {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const { analytics } = useConsent()
  const child = isChildClient()
  const enabled = !!projectId && analytics && !child

  useEffect(() => {
    if (!enabled) return
    if (status !== 'authenticated' || !session?.user?.id || typeof window.clarity !== 'function') return
    // Identify only consented, non-child users.
    window.clarity('identify', session.user.id, undefined, pathname)
    window.clarity('set', 'app_user_id', session.user.id)
    window.clarity('set', 'app_user_role', session.user.role)
  }, [enabled, pathname, session?.user?.id, session?.user?.role, status])

  if (!enabled) return null
  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `,
      }}
    />
  )
}
