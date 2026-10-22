'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { isCurrentPlanTopic, isFromDiagnostic, type FirstSessionSource } from '@/lib/first-session'

export interface FirstSessionState {
  /** Frame this lesson as the student's first step (short session UI). */
  active: boolean
  source: FirstSessionSource | null
  /** False while the plan lookup is still in flight (the URL flag resolves immediately). */
  resolved: boolean
}

// One plan-status request per page load, shared by the header and the renderer.
let planPromise: Promise<unknown> | null = null
function loadPlans(): Promise<unknown> {
  if (!planPromise) {
    planPromise = fetch('/api/study-plan/plan-status')
      .then((r) => (r.ok ? r.json() : null))
      .then((body) => (body && Array.isArray((body as { plans?: unknown }).plans) ? (body as { plans: unknown }).plans : []))
      .catch(() => {
        planPromise = null // let a later mount retry
        return []
      })
  }
  return planPromise
}
/** Test seam. */
export function resetFirstSessionPlanCache() {
  planPromise = null
}

/**
 * Is this lesson the student's "first step"? Yes when the URL carries
 * `?from=diagnostic` (results page link), or when the topic is the current
 * (first uncleared) topic of one of the signed-in student's diagnostic plans.
 */
export function useFirstSession(topicSlug: string): FirstSessionState {
  const searchParams = useSearchParams()
  const fromDiagnostic = isFromDiagnostic(searchParams)
  const { data: session } = useSession()
  const sessionUserId = session?.user?.id
  const [plan, setPlan] = useState<{ current: boolean; resolved: boolean }>({ current: false, resolved: false })

  useEffect(() => {
    if (fromDiagnostic || !sessionUserId) return
    let active = true
    loadPlans().then((plans) => {
      if (active) setPlan({ current: isCurrentPlanTopic(plans, topicSlug), resolved: true })
    })
    return () => { active = false }
  }, [fromDiagnostic, sessionUserId, topicSlug])

  if (fromDiagnostic) return { active: true, source: 'diagnostic', resolved: true }
  if (sessionUserId && plan.current) return { active: true, source: 'plan', resolved: true }
  // Signed out (session loaded, no user): nothing to look up.
  const signedOut = session !== undefined && !sessionUserId
  return { active: false, source: null, resolved: signedOut || plan.resolved }
}
