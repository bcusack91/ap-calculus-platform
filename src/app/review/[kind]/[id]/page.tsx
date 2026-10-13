'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ArrowLeft, Eye, ListChecks } from 'lucide-react'
import AttemptReview, { type AttemptReviewData } from '@/components/AttemptReview'
import { signInUrl } from '@/lib/auth-redirect'

const MISTAKE_LOG_COURSES = new Set(['mcat', 'sat', 'act'])

/**
 * Permanent review of one attempt: /review/<kind>/<id>, where kind is exit |
 * diagnostic | unit-test | sat-practice | mcat-fl | mcat-practice | qbank | act-fl. Owner-only
 * (the API scopes every lookup to the signed-in student), except
 * ?class=<classroomId>&student=<userId>: a teacher of that class reviewing the
 * student's attempt, read-only (the API checks the teacher's access).
 */
export default function AttemptReviewPage() {
  return (
    <Suspense fallback={null}>
      <AttemptReviewView />
    </Suspense>
  )
}

function AttemptReviewView() {
  const params = useParams<{ kind: string; id: string }>()
  const router = useRouter()
  const { status } = useSession()
  const [attempt, setAttempt] = useState<AttemptReviewData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [student, setStudent] = useState<{ id: string; name: string | null } | null>(null)
  const search = useSearchParams()
  const classParam = search.get('class')
  const studentParam = search.get('student')
  const teacherView = useMemo(
    () => (classParam && studentParam ? { classroomId: classParam, studentId: studentParam } : null),
    [classParam, studentParam],
  )
  const kind = params?.kind
  const id = params?.id

  useEffect(() => {
    if (status === 'unauthenticated' && kind && id) {
      router.push(signInUrl({ callbackUrl: `/review/${kind}/${id}${window.location.search}` }))
    }
  }, [status, router, kind, id])

  useEffect(() => {
    if (status !== 'authenticated' || !kind || !id) return
    let cancelled = false
    const qs = teacherView
      ? `?class=${encodeURIComponent(teacherView.classroomId)}&student=${encodeURIComponent(teacherView.studentId)}`
      : ''
    fetch(`/api/review/${encodeURIComponent(kind)}/${encodeURIComponent(id)}${qs}`, { cache: 'no-store' })
      .then(async (r) => {
        if (!r.ok) {
          const forbidden = r.status === 401 || r.status === 403
          throw new Error(
            teacherView && (forbidden || r.status === 404)
              ? 'This attempt was not found, or this student is not in a class you teach.'
              : r.status === 404
                ? 'This attempt was not found, or it belongs to another account.'
                : 'Could not load this attempt. Refresh to try again.',
          )
        }
        return r.json()
      })
      .then((d) => {
        if (cancelled) return
        setAttempt(d.attempt as AttemptReviewData)
        setStudent(d.student ?? null)
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Could not load this attempt.')
      })
    return () => {
      cancelled = true
    }
  }, [status, kind, id, teacherView])

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-950">
        <div className="container max-w-3xl px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8 dark:border-gray-700 dark:bg-gray-800">
            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Couldn&apos;t load this review</h1>
            <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">{error}</p>
            <Link href={teacherView ? `/teacher/classroom/${teacherView.classroomId}` : '/dashboard'} className="inline-block rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring">
              {teacherView ? 'Back to the class' : 'Back to Dashboard'}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!attempt) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-950" aria-busy="true">
        <div className="container max-w-3xl space-y-4 px-4">
          <div className="h-8 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
          <div className="h-5 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    )
  }

  const studentName = student ? student.name?.trim() || 'Student' : undefined
  const firstName = studentName?.split(/\s+/)[0]
  const hasLog = !student && MISTAKE_LOG_COURSES.has(attempt.course)
  const backHref = student && teacherView
    ? `/teacher/classroom/${teacherView.classroomId}/student/${teacherView.studentId}`
    : attempt.backHref

  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-950">
      <div className="container max-w-3xl px-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1 rounded text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> {student ? `Back to ${firstName}'s report` : 'Back'}
          </Link>
          {hasLog && (
            <Link
              href={`/${attempt.course}/mistakes`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-accent-muted hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
            >
              <ListChecks className="h-4 w-4" aria-hidden /> Your {attempt.course.toUpperCase()} mistake log
            </Link>
          )}
        </div>
        {student && (
          <p className="mb-4 flex items-start gap-2 rounded-xl border border-accent-muted bg-accent-subtle px-4 py-3 text-sm text-gray-800 dark:text-gray-100">
            <Eye className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <span>
              Teacher view: you are reviewing <span className="font-semibold">{studentName}</span>&apos;s attempt, with the answers
              they chose. Nothing here changes their work.
            </span>
          </p>
        )}
        <AttemptReview attempt={attempt} studentName={firstName} />
        {hasLog && (
          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
            Questions you missed or flagged here go to your mistake log. Answer one correctly twice and it retires.
          </p>
        )}
      </div>
    </div>
  )
}
