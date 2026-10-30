'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * A picker card's link to an instructor's lesson. Clicking remembers the
 * choice for the course (UserInstructorChoice) so the picker pre-selects them
 * next time; the save is fire-and-forget and never blocks the navigation.
 */
export function InstructorChoiceLink({
  href,
  courseSlug,
  instructorSlug,
  signedIn,
  className,
  children,
}: {
  href: string
  courseSlug: string
  instructorSlug: string
  signedIn: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (!signedIn) return
        void fetch('/api/video-lessons/choice', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ courseSlug, instructorSlug }),
          keepalive: true,
        }).catch(() => {})
      }}
    >
      {children}
    </Link>
  )
}
