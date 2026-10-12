'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import QbankBuilder from '@/components/QbankBuilder'
import QbankRunner from '@/components/QbankRunner'
import type { QbankCourse, QbankSessionView } from '@/lib/qbank-types'
import { signInUrl } from '@/lib/auth-redirect'

const LABEL: Record<QbankCourse, string> = { mcat: 'MCAT', sat: 'SAT', act: 'ACT' }

/**
 * /mcat/qbank and /sat/qbank: build a practice set, then take it. Signed-in
 * only: /mcat and /sat aren't behind the middleware, so this redirects itself.
 */
export default function QbankPage({ course }: { course: QbankCourse }) {
  const { status } = useSession()
  const router = useRouter()
  const [active, setActive] = useState<QbankSessionView | null>(null)
  useEffect(() => {
    // Keep the query: deep links (?domain=…) preset the builder after sign-in.
    if (status === 'unauthenticated') router.push(signInUrl({ callbackUrl: `/${course}/qbank${window.location.search}` }))
  }, [status, router, course])

  const start = (s: QbankSessionView) => {
    setActive(s)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-950">
      <div className={`container px-4 ${active?.items.some((i) => i.passage) ? 'max-w-6xl' : 'max-w-3xl'}`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link
            href={`/${course}`}
            className="inline-flex items-center gap-1 rounded text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> {LABEL[course]} Prep
          </Link>
          {active && !active.completedAt && (
            <button
              type="button"
              onClick={() => setActive(null)}
              className="rounded text-sm font-medium text-gray-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-400"
            >
              Leave set (resume later)
            </button>
          )}
        </div>
        <h1 className="mb-4 mt-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          {active ? `${LABEL[course]} practice set` : `Build an ${LABEL[course]} practice set`}
        </h1>
        {status !== 'authenticated' ? (
          <div className="h-40 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800" aria-busy="true" />
        ) : active ? (
          <QbankRunner key={active.id} initial={active} onNew={() => setActive(null)} />
        ) : (
          <QbankBuilder course={course} onStart={start} />
        )}
      </div>
    </div>
  )
}
