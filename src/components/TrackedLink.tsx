'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { trackCustomEvent, type GAEventParams } from '@/lib/analytics'

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string
  eventParams?: GAEventParams
}

export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackCustomEvent(eventName, eventParams)
        onClick?.(e)
      }}
    />
  )
}
