'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

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
 * Loads only when NEXT_PUBLIC_CLARITY_PROJECT_ID is set (production-only by convention).
 *
 * Docs: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-setup
 */
export default function MicrosoftClarity({ projectId }: MicrosoftClarityProps) {
  const pathname = usePathname()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status !== 'authenticated' || !session?.user?.id || typeof window.clarity !== 'function') return

    window.clarity('identify', session.user.id, undefined, pathname)
    window.clarity('set', 'app_user_id', session.user.id)
    window.clarity('set', 'app_user_role', session.user.role)
  }, [pathname, session?.user?.id, session?.user?.role, status])

  if (!projectId) return null
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
