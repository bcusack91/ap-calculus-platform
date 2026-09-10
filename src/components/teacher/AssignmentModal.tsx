'use client'

import { useCallback, useEffect, useState } from 'react'
import FocusTrapDialog from '@/components/FocusTrapDialog'
import { AlertTriangle, Eye, Layers } from 'lucide-react'
import { frqRouteFor } from '@/lib/course-activity-routes'

export interface TopicOption {
  slug: string
  title: string
  category: string
}

export interface CourseGroup {
  courseSlug: string
  courseTitle: string
  /**
   * Which slug vocabulary the group's topics belong to (tagged by
   * /api/teacher/topics): 'curriculum' slugs are real DB Topics with
   * /topics/<slug> pages; 'bank' slugs exist only in a competitive question
   * bank and are assignable ONLY as COMPETITIVE_PRACTICE. Missing (older
   * cached payloads) is treated as 'curriculum'.
   */
  kind?: 'curriculum' | 'bank'
  topics: TopicOption[]
}

/** The slice of an assignment the edit flow needs. */
export interface AssignmentEditTarget {
  id: string
  title: string
  type: string
  topicSlug: string | null
  topicSlugs: string[] | null
  courseSlug?: string | null
  unitId?: string | null
  flashcardSetId?: string | null
  /** null/undefined = whole class; otherwise the target ClassroomGroup id. */
  groupId?: string | null
  dueDate: string | null
  requiredScore: number | null
  maxAttempts: number | null
}

interface GroupOption {
  id: string
  name: string
  memberCount: number
}

interface FlashcardSetOption {
  id: string
  title: string
  _count: { cards: number }
}

/** A platform topic deck (seeded Flashcards on a Topic) from /api/teacher/flashcard-decks. */
interface PlatformDeck {
  topicSlug: string
  topicTitle: string
  category: string
  cardCount: number
}

interface DeckCourseGroup {
  courseSlug: string
  courseTitle: string
  decks: PlatformDeck[]
}

interface AssignmentCreateBody {
  title: string
  type: string
  requiredScore?: number
  maxAttempts?: number
  dueDate?: string
  topicSlugs?: string[]
  topicSlug?: string
  courseSlug?: string
  unitId?: string
  flashcardSetId?: string
  /** Sent only when the "Assign to" control is shown: null = whole class. */
  groupId?: string | null
}

export const ASSIGNMENT_TYPES: { value: string; label: string; description: string }[] = [
  { value: 'INTERACTIVE_LESSON', label: 'Interactive Lesson', description: 'Students work through the guided lesson and pass the exit quiz for each topic.' },
  { value: 'FLASHCARD_REVIEW', label: 'Flashcard Review', description: 'Students study one of your flashcard sets until they know the cards.' },
  { value: 'QUIZ', label: 'Quiz', description: 'A scored practice quiz on each chosen topic.' },
  { value: 'COMPETITIVE_PRACTICE', label: 'Competitive Practice', description: 'Timed, game-style practice questions on each chosen topic.' },
  { value: 'UNIT_TEST', label: 'Unit Test', description: 'A full unit test for the chosen course and unit.' },
  { value: 'FRQ_PRACTICE', label: 'Free Response (FRQ)', description: 'Free-response practice for the chosen course.' },
]

const COURSE_SCOPED = new Set(['UNIT_TEST', 'FRQ_PRACTICE'])
const TOPIC_SCOPED = new Set(['INTERACTIVE_LESSON', 'QUIZ', 'COMPETITIVE_PRACTICE'])

const inputCls =
  'w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-accent focus:outline-none dark:bg-gray-700 dark:text-white'

// ISO timestamp -> value for a <input type="datetime-local"> (local wall clock).
const toLocalDatetimeInput = (iso: string | null) => {
  if (!iso) return ''
  const d = new Date(iso)
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16)
}

const emptyForm = {
  title: '',
  type: 'INTERACTIVE_LESSON',
  topicSlug: '',
  topicSlugs: [] as string[],
  courseSlug: '',
  unitId: '',
  flashcardSetId: '',
  // FLASHCARD_REVIEW alternative target: a platform topic deck. Mutually
  // exclusive with flashcardSetId; materialized into a teacher-owned set at
  // submit time (never on selection, so an abandoned modal creates nothing).
  platformTopicSlug: '',
  groupId: '', // '' = whole class
  dueDate: '',
  maxAttempts: '',
  requiredScore: '80',
}

/**
 * Create / edit assignment dialog. Type-aware: UNIT_TEST and FRQ_PRACTICE
 * target a course (+ optional unit), FLASHCARD_REVIEW targets one of the
 * teacher's flashcard sets, and the rest target one or more topics. Submit
 * stays disabled — with a hint saying why — until the type's target is chosen.
 */
export default function AssignmentModal({
  open,
  onClose,
  classroomId,
  courses,
  classCourses,
  editing,
  onSaved,
}: {
  open: boolean
  onClose: () => void
  classroomId: string
  courses: CourseGroup[]
  classCourses: string[] | null
  editing: AssignmentEditTarget | null
  onSaved: () => void
}) {
  const [form, setForm] = useState({ ...emptyForm })
  // Course the teacher is currently browsing in the topic picker.
  const [assignCourse, setAssignCourse] = useState('')
  const [unitOptions, setUnitOptions] = useState<{ id: string; unitNumber: number; name: string }[]>([])
  const [unitsError, setUnitsError] = useState('')
  const [flashcardSets, setFlashcardSets] = useState<FlashcardSetOption[] | null>(null)
  const [setsError, setSetsError] = useState('')
  // Platform topic decks (grouped by course) for the two-source set picker.
  const [platformDecks, setPlatformDecks] = useState<DeckCourseGroup[] | null>(null)
  const [decksError, setDecksError] = useState('')
  // Course the teacher is browsing in the platform-deck picker.
  const [deckCourse, setDeckCourse] = useState('')
  // Classroom groups for the optional "Assign to" select. null = still
  // loading; [] = feature unavailable or no groups — the control stays hidden
  // and groupId is never sent (so an edit can't accidentally retarget).
  const [groupOptions, setGroupOptions] = useState<GroupOption[] | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const loadUnits = useCallback(async (courseSlug: string) => {
    setUnitsError('')
    setUnitOptions([])
    if (!courseSlug) return
    try {
      const r = await fetch(`/api/unit-tests/units?courseSlug=${encodeURIComponent(courseSlug)}`)
      if (!r.ok) throw new Error()
      setUnitOptions((await r.json()).units ?? [])
    } catch {
      // The assignment still works scoped to "any unit" — but say so instead
      // of silently degrading.
      setUnitsError('Could not load this course’s units — the assignment will cover any unit unless you retry.')
    }
  }, [])

  // Initialize the form each time the dialog opens (create or edit).
  useEffect(() => {
    if (!open) return
    setSubmitError('')
    setUnitsError('')
    setSetsError('')
    setDecksError('')
    setDeckCourse('')
    setAssignCourse('')
    setUnitOptions([])
    if (editing) {
      setForm({
        title: editing.title,
        type: editing.type,
        topicSlug: editing.topicSlug || '',
        topicSlugs:
          editing.topicSlugs && editing.topicSlugs.length > 0
            ? editing.topicSlugs
            : editing.topicSlug
            ? [editing.topicSlug]
            : [],
        courseSlug: editing.courseSlug || '',
        unitId: editing.unitId || '',
        flashcardSetId: editing.flashcardSetId || '',
        // An edited assignment always references a real set (a platform deck
        // picked earlier was materialized at create time), so this starts empty.
        platformTopicSlug: '',
        groupId: editing.groupId || '',
        dueDate: toLocalDatetimeInput(editing.dueDate),
        maxAttempts:
          editing.maxAttempts && editing.maxAttempts < 9999 ? String(editing.maxAttempts) : '',
        requiredScore:
          editing.requiredScore != null ? String(Math.round(editing.requiredScore * 100)) : '',
      })
      if (editing.type === 'UNIT_TEST' && editing.courseSlug) void loadUnits(editing.courseSlug)
    } else {
      setForm({ ...emptyForm })
    }
  }, [open, editing, loadUnits])

  // Fetch the classroom's groups each time the dialog opens (they're edited in
  // the Roster tab, so a cached list can go stale between opens). Any failure
  // or `available: false` (groups tables not migrated yet) hides the control.
  useEffect(() => {
    if (!open) return
    let cancelled = false
    setGroupOptions(null)
    ;(async () => {
      try {
        const r = await fetch(`/api/teacher/classrooms/${classroomId}/groups`)
        if (!r.ok) throw new Error()
        const j = await r.json()
        if (cancelled) return
        if (j.available === false || !Array.isArray(j.groups)) {
          setGroupOptions([])
          return
        }
        setGroupOptions(
          (j.groups as { id: string; name: string; members?: unknown[] }[]).map((g) => ({
            id: g.id,
            name: g.name,
            memberCount: Array.isArray(g.members) ? g.members.length : 0,
          }))
        )
      } catch {
        if (!cancelled) setGroupOptions([]) // group targeting is optional — degrade silently
      }
    })()
    return () => {
      cancelled = true
    }
  }, [open, classroomId])

  // Lazily fetch the teacher's flashcard sets the first time they're needed.
  useEffect(() => {
    if (!open || form.type !== 'FLASHCARD_REVIEW' || flashcardSets !== null) return
    let cancelled = false
    ;(async () => {
      try {
        const r = await fetch('/api/teacher/flashcard-sets')
        if (!r.ok) throw new Error()
        const j = await r.json()
        if (!cancelled) setFlashcardSets(Array.isArray(j.sets) ? j.sets : [])
      } catch {
        if (!cancelled) setSetsError('Could not load your flashcard sets. Close and reopen to retry.')
      }
    })()
    return () => {
      cancelled = true
    }
  }, [open, form.type, flashcardSets])

  // Lazily fetch the platform topic decks the first time they're needed.
  // Scoped to the classroom so the list leads with (or is limited to) the
  // classroom's attached courses.
  useEffect(() => {
    if (!open || form.type !== 'FLASHCARD_REVIEW' || platformDecks !== null) return
    let cancelled = false
    ;(async () => {
      try {
        const r = await fetch(`/api/teacher/flashcard-decks?classroomId=${encodeURIComponent(classroomId)}`)
        if (!r.ok) throw new Error()
        const j = await r.json()
        if (!cancelled) setPlatformDecks(Array.isArray(j.courses) ? j.courses : [])
      } catch {
        // Platform decks are an ADDITIONAL source — the teacher's own sets
        // still work, so degrade with a note rather than blocking the form.
        if (!cancelled) setDecksError('Could not load the platform decks. Close and reopen to retry.')
      }
    })()
    return () => {
      cancelled = true
    }
  }, [open, form.type, platformDecks, classroomId])

  // Changing the type resets every branch-specific field so a leftover topic
  // or course from the previous type can't ride along invisibly.
  const changeType = (type: string) => {
    setForm((f) => ({
      ...f,
      type,
      topicSlug: '',
      topicSlugs: [],
      courseSlug: '',
      unitId: '',
      flashcardSetId: '',
      platformTopicSlug: '',
    }))
    setDeckCourse('')
    setAssignCourse('')
    setUnitOptions([])
    setUnitsError('')
    setSubmitError('')
  }

  // Resolve a topic slug to its human title using the loaded course list.
  const topicTitle = (slug: string) => {
    for (const c of courses) {
      const t = c.topics.find((tp) => tp.slug === slug)
      if (t) return t.title
    }
    return slug
  }

  const typeMeta = ASSIGNMENT_TYPES.find((t) => t.value === form.type)
  const needsCourse = COURSE_SCOPED.has(form.type)
  const needsTopics = TOPIC_SCOPED.has(form.type)
  const needsSet = form.type === 'FLASHCARD_REVIEW'
  // "Assign to" is only offered when the classroom actually has groups; while
  // hidden, groupId is never sent so the stored target can't change by accident.
  const showGroupControl = groupOptions !== null && groupOptions.length > 0
  const chosenGroup = (groupOptions ?? []).find((g) => g.id === form.groupId)

  // Type-aware course-group filtering:
  //  - 'bank' groups (competitive-only slugs, no /topics pages) are offered
  //    only for COMPETITIVE_PRACTICE — assigned as a lesson or quiz they 404.
  //  - FRQ_PRACTICE only offers courses that actually have a free-response
  //    page; anything else resolves to a dead /courses link for students.
  const offerable = courses.filter((c) => {
    if ((c.kind ?? 'curriculum') === 'bank') return form.type === 'COMPETITIVE_PRACTICE'
    if (form.type === 'FRQ_PRACTICE') return frqRouteFor(c.courseSlug) !== null
    return true
  })
  // Chips already on the form (from editing an older assignment) can carry
  // slugs the current type can't deliver — keep them visible and removable,
  // marked, and block submit until they're gone. Skip the check while the
  // course list is still loading (everything would look invalid).
  const allowedSlugs = new Set(offerable.flatMap((c) => c.topics.map((t) => t.slug)))
  const invalidChips =
    needsTopics && courses.length > 0 ? form.topicSlugs.filter((s) => !allowedSlugs.has(s)) : []

  const validationHint = !form.title.trim()
    ? 'Add a title to continue.'
    : needsCourse && !form.courseSlug
    ? 'Choose a course to continue.'
    : needsTopics && form.topicSlugs.length === 0
    ? 'Add at least one topic to continue.'
    : needsTopics && invalidChips.length > 0
    ? `Remove the marked topic${invalidChips.length !== 1 ? 's' : ''} — ${
        invalidChips.length !== 1 ? "they aren't" : "it isn't"
      } available for this assignment type.`
    : needsSet && !form.flashcardSetId && !form.platformTopicSlug
    ? 'Choose a flashcard set or platform deck to continue.'
    : null

  const submit = async () => {
    if (validationHint) return
    setSubmitting(true)
    setSubmitError('')
    try {
      // Platform deck chosen: materialize it into a teacher-owned set NOW (not
      // on selection — an abandoned modal must not leave orphan sets). The
      // endpoint is idempotent per (teacher, topic), so retries after a failed
      // assignment save reuse the same set instead of stacking duplicates.
      let materializedSetId = ''
      if (form.type === 'FLASHCARD_REVIEW' && !form.flashcardSetId && form.platformTopicSlug) {
        const r = await fetch('/api/teacher/flashcard-sets/from-topic', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topicSlug: form.platformTopicSlug }),
        })
        const j = await r.json().catch(() => ({}))
        if (!r.ok || !j?.set?.id) {
          setSubmitError(j?.error || 'Could not prepare the platform deck. Please try again.')
          setSubmitting(false)
          return
        }
        materializedSetId = j.set.id as string
      }
      const body: AssignmentCreateBody = {
        title: form.title,
        type: form.type,
        requiredScore: form.requiredScore ? parseInt(form.requiredScore) / 100 : undefined,
        maxAttempts: form.maxAttempts ? parseInt(form.maxAttempts) : undefined,
        dueDate: form.dueDate || undefined,
      }
      // Only send a target when the control was actually shown: on edit,
      // changing it makes the server reconcile submission rows (newly-covered
      // members gain NOT_STARTED rows; uncovered NOT_STARTED rows are removed).
      if (showGroupControl) body.groupId = form.groupId || null
      if (needsCourse) {
        // UNIT_TEST and FRQ_PRACTICE target a course (and optionally a unit)
        // rather than topics — a unit test is not a topic-slug thing.
        body.courseSlug = form.courseSlug || undefined
        if (form.type === 'UNIT_TEST' && form.unitId) body.unitId = form.unitId
      } else if (needsSet) {
        body.flashcardSetId = form.flashcardSetId || materializedSetId
      } else if (form.topicSlugs.length > 0) {
        body.topicSlugs = form.topicSlugs
        body.topicSlug = form.topicSlugs[0]
      } else if (form.topicSlug) {
        body.topicSlug = form.topicSlug
      }
      const res = await fetch(
        editing
          ? `/api/teacher/classrooms/${classroomId}/assignments/${editing.id}`
          : `/api/teacher/classrooms/${classroomId}/assignments`,
        {
          method: editing ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      )
      if (res.ok) {
        onSaved()
        onClose()
      } else {
        const j = await res.json().catch(() => ({}))
        setSubmitError(j.error || `Could not ${editing ? 'save' : 'create'} the assignment. Please try again.`)
      }
    } catch {
      setSubmitError(`Could not ${editing ? 'save' : 'create'} the assignment. Check your connection and try again.`)
    } finally {
      setSubmitting(false)
    }
  }

  const attachedCourses = classCourses ?? []
  const pinned = offerable.filter((c) => attachedCourses.includes(c.courseSlug))
  const rest = offerable.filter((c) => !attachedCourses.includes(c.courseSlug))
  const chosenCourse = courses.find((c) => c.courseSlug === form.courseSlug)
  const chosenUnit = unitOptions.find((u) => u.id === form.unitId)
  const chosenSet = (flashcardSets ?? []).find((s) => s.id === form.flashcardSetId)
  const chosenDeck = form.platformTopicSlug
    ? (platformDecks ?? []).flatMap((c) => c.decks).find((d) => d.topicSlug === form.platformTopicSlug)
    : undefined

  // What students will get — visible before the teacher commits.
  const preview: string[] = []
  if (needsTopics && form.topicSlugs.length > 0) {
    preview.push(
      `${form.topicSlugs.length} topic${form.topicSlugs.length !== 1 ? 's' : ''}: ${form.topicSlugs
        .map(topicTitle)
        .join(', ')}`
    )
  }
  if (needsCourse && chosenCourse) {
    preview.push(
      form.type === 'UNIT_TEST'
        ? `${chosenCourse.courseTitle} — ${chosenUnit ? chosenUnit.name : 'any unit (students choose)'}`
        : chosenCourse.courseTitle
    )
  }
  if (needsSet && chosenSet) {
    preview.push(`"${chosenSet.title}" (${chosenSet._count.cards} card${chosenSet._count.cards !== 1 ? 's' : ''})`)
  }
  if (needsSet && !chosenSet && chosenDeck) {
    preview.push(
      `"${chosenDeck.topicTitle}" platform deck (${chosenDeck.cardCount} card${
        chosenDeck.cardCount !== 1 ? 's' : ''
      }) — a copy is saved to your flashcard sets`
    )
  }
  if (chosenGroup) {
    preview.push(
      `Only the "${chosenGroup.name}" group (${chosenGroup.memberCount} student${chosenGroup.memberCount !== 1 ? 's' : ''})`
    )
  }

  return (
    <FocusTrapDialog open={open} onClose={onClose} title={editing ? 'Edit Assignment' : 'Create Assignment'}>
      <div className="p-4 sm:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {editing ? 'Edit Assignment' : 'Create Assignment'}
        </h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="assignment-title" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Title *
            </label>
            <input
              id="assignment-title"
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g., Practice Derivatives"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="assignment-type" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Type
            </label>
            <select id="assignment-type" value={form.type} onChange={(e) => changeType(e.target.value)} className={inputCls}>
              {ASSIGNMENT_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            {typeMeta && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{typeMeta.description}</p>}
          </div>

          {showGroupControl && (
            <div>
              <label htmlFor="assignment-group" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Assign to
              </label>
              <select
                id="assignment-group"
                value={form.groupId}
                onChange={(e) => setForm({ ...form, groupId: e.target.value })}
                className={inputCls}
              >
                <option value="">Whole class</option>
                {/* An edited assignment can target a group that was deleted
                    since the list loaded — keep it selectable so the dropdown
                    isn't silently wrong. */}
                {form.groupId && !groupOptions!.some((g) => g.id === form.groupId) && (
                  <option value={form.groupId}>Current group (no longer exists — pick another)</option>
                )}
                {groupOptions!.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name} ({g.memberCount} student{g.memberCount !== 1 ? 's' : ''})
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {form.groupId
                  ? 'Only students in this group see and get the assignment.'
                  : 'Every student in the class gets the assignment.'}
              </p>
            </div>
          )}

          {needsCourse && (
            <div className="space-y-4">
              <div>
                <label htmlFor="assignment-course" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Course *
                </label>
                <select
                  id="assignment-course"
                  value={form.courseSlug}
                  onChange={(e) => {
                    const courseSlug = e.target.value
                    setForm({ ...form, courseSlug, unitId: '' })
                    if (form.type === 'UNIT_TEST') void loadUnits(courseSlug)
                  }}
                  className={inputCls}
                >
                  <option value="">Select a course…</option>
                  {/* An edited assignment can hold a course this type no longer
                      offers (e.g. an FRQ course with no FRQ page) — keep it
                      selectable so the dropdown isn't silently blank. */}
                  {form.courseSlug && !offerable.some((c) => c.courseSlug === form.courseSlug) && (
                    <option value={form.courseSlug}>
                      {courses.find((c) => c.courseSlug === form.courseSlug)?.courseTitle ?? form.courseSlug} (unavailable for this type — pick another)
                    </option>
                  )}
                  {[...pinned, ...rest].map((c) => (
                    <option key={c.courseSlug} value={c.courseSlug}>
                      {c.courseTitle}
                    </option>
                  ))}
                </select>
                {unitsError && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400" role="alert">
                    {unitsError}{' '}
                    <button
                      type="button"
                      onClick={() => loadUnits(form.courseSlug)}
                      className="underline font-semibold hover:text-red-700"
                    >
                      Retry
                    </button>
                  </p>
                )}
              </div>
              {form.type === 'UNIT_TEST' && (
                <div>
                  <label htmlFor="assignment-unit" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Unit
                  </label>
                  <select
                    id="assignment-unit"
                    value={form.unitId}
                    onChange={(e) => setForm({ ...form, unitId: e.target.value })}
                    disabled={!form.courseSlug}
                    className={`${inputCls} disabled:opacity-50`}
                  >
                    <option value="">Any unit in this course</option>
                    {unitOptions.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Leave on &ldquo;any unit&rdquo; to let students choose which unit to test.
                  </p>
                </div>
              )}
            </div>
          )}

          {needsSet && (
            <div className="space-y-4">
              {/* Two-source picker: the teacher's own sets, or a platform topic
                  deck (seeded course flashcards). The two are mutually
                  exclusive — choosing from one clears the other. A platform
                  deck is materialized into a teacher-owned set on submit. */}
              <div>
                <label htmlFor="assignment-flashcard-set" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Your flashcard sets
                </label>
                {setsError ? (
                  <p className="text-sm text-red-600 dark:text-red-400" role="alert">{setsError}</p>
                ) : flashcardSets === null ? (
                  <p className="text-sm text-gray-400">Loading your flashcard sets…</p>
                ) : flashcardSets.length === 0 ? (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You don&rsquo;t have any flashcard sets yet — pick a ready-made platform deck below,
                    or create your own from the teacher dashboard&rsquo;s Flashcards section.
                  </p>
                ) : (
                  <select
                    id="assignment-flashcard-set"
                    value={form.flashcardSetId}
                    onChange={(e) => setForm({ ...form, flashcardSetId: e.target.value, platformTopicSlug: '' })}
                    className={inputCls}
                  >
                    <option value="">Select a set…</option>
                    {flashcardSets.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s._count.cards} cards)
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div>
                <label htmlFor="assignment-deck-course" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  …or a ready-made platform deck
                </label>
                {decksError ? (
                  <p className="text-sm text-red-600 dark:text-red-400" role="alert">{decksError}</p>
                ) : platformDecks === null ? (
                  <p className="text-sm text-gray-400">Loading platform decks…</p>
                ) : platformDecks.length === 0 ? (
                  <p className="text-sm text-gray-500 dark:text-gray-400">No platform decks are available.</p>
                ) : (
                  (() => {
                    // Course-first, then that course's decks grouped by unit —
                    // the same two-step pattern as the topic picker, so a long
                    // catalog stays navigable.
                    const activeDeckGroup = platformDecks.find((c) => c.courseSlug === deckCourse)
                    const byCategory = new Map<string, PlatformDeck[]>()
                    for (const d of activeDeckGroup?.decks ?? []) {
                      const list = byCategory.get(d.category) ?? []
                      list.push(d)
                      byCategory.set(d.category, list)
                    }
                    const deckInActiveCourse = activeDeckGroup?.decks.some(
                      (d) => d.topicSlug === form.platformTopicSlug
                    )
                    return (
                      <div className="space-y-2">
                        <select
                          id="assignment-deck-course"
                          value={deckCourse}
                          onChange={(e) => setDeckCourse(e.target.value)}
                          className={inputCls}
                        >
                          <option value="">Choose a course…</option>
                          {platformDecks.map((c) => (
                            <option key={c.courseSlug} value={c.courseSlug}>
                              {c.courseTitle}
                            </option>
                          ))}
                        </select>
                        {activeDeckGroup && (
                          <select
                            aria-label={`Platform decks in ${activeDeckGroup.courseTitle}`}
                            value={deckInActiveCourse ? form.platformTopicSlug : ''}
                            onChange={(e) => {
                              const slug = e.target.value
                              if (slug) setForm({ ...form, platformTopicSlug: slug, flashcardSetId: '' })
                            }}
                            className={inputCls}
                          >
                            <option value="">Select a deck from {activeDeckGroup.courseTitle}…</option>
                            {[...byCategory.entries()].map(([cat, ds]) => (
                              <optgroup key={cat} label={cat}>
                                {ds.map((d) => (
                                  <option key={d.topicSlug} value={d.topicSlug}>
                                    {d.topicTitle} ({d.cardCount} cards)
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                        )}
                      </div>
                    )
                  })()
                )}
                {chosenDeck && (
                  <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-accent-subtle dark:bg-accent-light/30 text-accent dark:text-accent-muted">
                      {chosenDeck.topicTitle} ({chosenDeck.cardCount} card{chosenDeck.cardCount !== 1 ? 's' : ''})
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, platformTopicSlug: '' })}
                        className="font-bold leading-none text-accent hover:text-accent-dark dark:hover:text-accent-light"
                        aria-label={`Remove ${chosenDeck.topicTitle}`}
                      >
                        ×
                      </button>
                    </span>
                  </p>
                )}
                <p className="mt-1 text-xs text-gray-400">
                  Platform decks are the site&rsquo;s built-in topic flashcards. Assigning one saves a copy
                  to your flashcard sets so you can reuse or edit it later.
                </p>
              </div>
            </div>
          )}

          {needsTopics && (
            <div>
              <label htmlFor="assignment-topic" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Topics *
              </label>
              {/* Two-step picker: course first, then only that course's topics.
                  Attached class courses (Settings) lead the list; the full
                  catalog stays reachable so nothing is ever unassignable. */}
              {(() => {
                const activeGroup = courses.find((c) => c.courseSlug === assignCourse)
                // Group the chosen course's topics by category for a readable list
                const byCategory = new Map<string, TopicOption[]>()
                for (const t of activeGroup?.topics ?? []) {
                  const list = byCategory.get(t.category) ?? []
                  list.push(t)
                  byCategory.set(t.category, list)
                }
                return (
                  <div className="space-y-2">
                    <select
                      id="assignment-topic"
                      value={assignCourse}
                      onChange={(e) => setAssignCourse(e.target.value)}
                      className={inputCls}
                    >
                      <option value="">Choose a course…</option>
                      {pinned.length > 0 && (
                        <optgroup label="★ Your class courses">
                          {pinned.map((c) => (
                            <option key={c.courseSlug} value={c.courseSlug}>
                              {c.courseTitle}
                            </option>
                          ))}
                        </optgroup>
                      )}
                      <optgroup label={pinned.length > 0 ? 'All courses' : 'All courses (tip: pin your class courses in Settings)'}>
                        {rest.map((c) => (
                          <option key={c.courseSlug} value={c.courseSlug}>
                            {c.courseTitle}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    {activeGroup && (
                      <select
                        aria-label={`Topics in ${activeGroup.courseTitle}`}
                        value=""
                        onChange={(e) => {
                          const slug = e.target.value
                          if (slug && !form.topicSlugs.includes(slug)) {
                            setForm({ ...form, topicSlugs: [...form.topicSlugs, slug] })
                          }
                        }}
                        className={inputCls}
                      >
                        <option value="">+ Add a topic from {activeGroup.courseTitle}…</option>
                        {[...byCategory.entries()].map(([cat, ts]) => (
                          <optgroup key={cat} label={cat}>
                            {ts.map((t) => (
                              <option key={t.slug} value={t.slug} disabled={form.topicSlugs.includes(t.slug)}>
                                {t.title}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    )}
                  </div>
                )
              })()}
              {form.topicSlugs.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {form.topicSlugs.map((slug) => {
                    const invalid = invalidChips.includes(slug)
                    return (
                      <span
                        key={slug}
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs ${
                          invalid
                            ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700'
                            : 'bg-accent-subtle dark:bg-accent-light/30 text-accent dark:text-accent-muted'
                        }`}
                        title={invalid ? 'Not available for this assignment type — remove it.' : undefined}
                      >
                        {invalid && <AlertTriangle className="w-3 h-3 shrink-0" aria-label="Not available for this assignment type" />}
                        {topicTitle(slug)}
                        <button
                          type="button"
                          onClick={() => setForm({ ...form, topicSlugs: form.topicSlugs.filter((s) => s !== slug) })}
                          className={`font-bold leading-none ${
                            invalid
                              ? 'text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100'
                              : 'text-accent hover:text-accent-dark dark:hover:text-accent-light'
                          }`}
                          aria-label={`Remove ${topicTitle(slug)}`}
                        >
                          ×
                        </button>
                      </span>
                    )
                  })}
                </div>
              )}
              {invalidChips.length > 0 && (
                <p className="mt-1 text-xs text-amber-600 dark:text-amber-400" role="alert">
                  {form.type === 'COMPETITIVE_PRACTICE'
                    ? `The marked topic${invalidChips.length !== 1 ? 's' : ''} no longer exist${invalidChips.length !== 1 ? '' : 's'} — remove ${invalidChips.length !== 1 ? 'them' : 'it'}.`
                    : `The marked topic${invalidChips.length !== 1 ? 's are' : ' is'} competitive-only (or no longer exist${invalidChips.length !== 1 ? '' : 's'}) and can't be assigned as ${
                        form.type === 'QUIZ' ? 'a quiz' : 'an interactive lesson'
                      } — remove ${invalidChips.length !== 1 ? 'them' : 'it'}, or switch the type to Competitive Practice.`}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-400">Add one or more topics — students complete all of them.</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="assignment-due-date" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Due Date
              </label>
              <input
                id="assignment-due-date"
                type="datetime-local"
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="assignment-required-score" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Required Score (%)
              </label>
              <input
                id="assignment-required-score"
                type="number"
                value={form.requiredScore}
                onChange={(e) => setForm({ ...form, requiredScore: e.target.value })}
                min="0"
                max="100"
                className={inputCls}
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Students below this score are prompted to retry.
              </p>
            </div>
          </div>
          <div>
            <label htmlFor="assignment-max-attempts" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Max Attempts
            </label>
            <input
              id="assignment-max-attempts"
              type="number"
              value={form.maxAttempts}
              onChange={(e) => setForm({ ...form, maxAttempts: e.target.value })}
              min="1"
              placeholder="Unlimited"
              className={inputCls}
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Leave blank for unlimited attempts.</p>
          </div>

          {/* Preview: what students will get */}
          {(preview.length > 0 || typeMeta) && (
            <div className="rounded-xl border border-accent-light dark:border-accent-light/40 bg-accent-subtle dark:bg-accent-light/10 p-3">
              <p className="flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-200 mb-1">
                <Eye className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                Students will get
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">{typeMeta?.description}</p>
              {preview.map((line) => (
                <p key={line} className="flex items-start gap-1.5 text-xs text-gray-700 dark:text-gray-200 mt-1">
                  <Layers className="w-3.5 h-3.5 mt-px shrink-0 text-accent" aria-hidden="true" />
                  <span>{line}</span>
                </p>
              ))}
              {preview.length === 0 && (
                <p className="text-xs text-gray-400 mt-1">Choose a target above to see it here.</p>
              )}
            </div>
          )}
        </div>

        {submitError && (
          <div className="mt-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm" role="alert">
            {submitError}
          </div>
        )}

        <div className="flex flex-col gap-2 mt-6">
          {validationHint && <p className="text-xs text-amber-600 dark:text-amber-400 text-right">{validationHint}</p>}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={submit}
              disabled={!!validationHint || submitting}
              className="flex-1 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {submitting ? (editing ? 'Saving…' : 'Creating…') : editing ? 'Save Changes' : 'Create Assignment'}
            </button>
          </div>
        </div>
      </div>
    </FocusTrapDialog>
  )
}
