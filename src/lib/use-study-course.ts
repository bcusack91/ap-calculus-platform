'use client'

import { useEffect, useState } from 'react'
import { coursesContaining, INCLUDE_COURSE_NAMES } from '@/lib/course-includes'

/**
 * Client side of studyCourseFor (src/lib/study-course-server.ts): the course a
 * student is studying this topic FOR. An AP Calculus AB lesson opened by a BC
 * student shows "AP Calculus BC" and links back to the BC hub. The topic and
 * lesson pages are ISR, so the server HTML (and its JSON-LD) always names the
 * owning course; this swaps the labels after hydration.
 *
 * Order: a `?course=` query naming a course that contains the topic's course
 * (the BC hub adds it to its AB topic links), then /api/study-course. Courses
 * nothing includes never fetch. One request per topic course per page load.
 */

export interface StudyCourse {
  courseSlug: string
  courseName: string
}

const inflight = new Map<string, Promise<{ courseSlug: string; courseName: string | null } | null>>()

function fetchStudyCourse(topicCourse: string) {
  let p = inflight.get(topicCourse)
  if (!p) {
    p = fetch(`/api/study-course?topicCourse=${encodeURIComponent(topicCourse)}`)
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)
    inflight.set(topicCourse, p)
  }
  return p
}

function fromQuery(topicCourse: string): string | null {
  if (typeof window === 'undefined') return null
  try {
    const q = new URLSearchParams(window.location.search).get('course')
    return q && q !== topicCourse && coursesContaining(topicCourse).includes(q) ? q : null
  } catch {
    return null
  }
}

/** Pure resolution step (exported for tests). */
export function resolveStudyCourse(
  topic: StudyCourse,
  candidate: string | null | undefined,
  candidateName?: string | null,
): StudyCourse {
  if (!candidate || candidate === topic.courseSlug) return topic
  if (!coursesContaining(topic.courseSlug).includes(candidate)) return topic
  return { courseSlug: candidate, courseName: candidateName || INCLUDE_COURSE_NAMES[candidate] || topic.courseName }
}

export function useStudyCourse(courseSlug: string | null | undefined, courseName: string | null | undefined): StudyCourse | null {
  const base = courseSlug ? { courseSlug, courseName: courseName || INCLUDE_COURSE_NAMES[courseSlug] || courseSlug } : null
  const [resolved, setResolved] = useState<StudyCourse | null>(null)
  const includable = !!courseSlug && coursesContaining(courseSlug).length > 1

  useEffect(() => {
    if (!includable || !courseSlug) return
    const q = fromQuery(courseSlug)
    const topic = { courseSlug, courseName: courseName || INCLUDE_COURSE_NAMES[courseSlug] || courseSlug }
    let cancelled = false
    const lookup = q ? Promise.resolve({ courseSlug: q, courseName: null }) : fetchStudyCourse(courseSlug)
    lookup.then((res) => {
      if (!cancelled && res) setResolved(resolveStudyCourse(topic, res.courseSlug, res.courseName))
    })
    return () => {
      cancelled = true
    }
  }, [includable, courseSlug, courseName])

  if (!base) return null
  return includable && resolved && resolved.courseSlug !== base.courseSlug ? resolved : base
}
