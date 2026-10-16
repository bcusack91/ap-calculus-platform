'use client'

import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import { apDiagnosticVersion } from '@/lib/ap-diagnostic-v2/version'
import type { ApDiagV2Course } from '@/lib/ap-diagnostic-v2/types'

const ApDiagnosticV2Page = dynamic(() => import('./ApDiagnosticV2Page'), { ssr: false })

/**
 * Chooses a course diagnostic's version: v2 once the course is live (flag +
 * bank minimum, src/lib/ap-diagnostic-v2/readiness.ts), or with `?diagV2=1`
 * outside production for QA; otherwise the v1 page, unchanged. v1 attempts
 * keep rendering and scoring from their stored copies either way.
 */
export default function ApDiagnosticVersionSwitch({ course, v1 }: { course: ApDiagV2Course; v1: ReactNode }) {
  const params = useSearchParams()
  const force = params.get('diagV2')
  const live = apDiagnosticVersion(course, null) === 2
  if (live || apDiagnosticVersion(course, force) === 2) return <ApDiagnosticV2Page course={course} qaPreview={!live} />
  return <>{v1}</>
}
