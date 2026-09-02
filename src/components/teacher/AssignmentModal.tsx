'use client'

import { useCallback, useEffect, useState } from 'react'
import FocusTrapDialog from '@/components/FocusTrapDialog'
import { Eye, Layers } from 'lucide-react'

export interface TopicOption {
  slug: string
  title: string
  category: string
}

export interface CourseGroup {
  courseSlug: string
  courseTitle: string
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
  dueDate: string | null
  requiredScore: number | null
  maxAttempts: number | null
}

interface FlashcardSetOption {
  id: string
  title: string
  _count: { cards: number }
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
    }))
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

  const validationHint = !form.title.trim()
    ? 'Add a title to continue.'
    : needsCourse && !form.courseSlug
    ? 'Choose a course to continue.'
    : needsTopics && form.topicSlugs.length === 0
    ? 'Add at least one topic to continue.'
    : needsSet && !form.flashcardSetId
    ? 'Choose a flashcard set to continue.'
    : null

  const submit = async () => {
    if (validationHint) return
    setSubmitting(true)
    setSubmitError('')
    try {
      const body: AssignmentCreateBody = {
        title: form.title,
        type: form.type,
        requiredScore: form.requiredScore ? parseInt(form.requiredScore) / 100 : undefined,
        maxAttempts: form.maxAttempts ? parseInt(form.maxAttempts) : undefined,
        dueDate: form.dueDate || undefined,
      }
      if (needsCourse) {
        // UNIT_TEST and FRQ_PRACTICE target a course (and optionally a unit)
        // rather than topics — a unit test is not a topic-slug thing.
        body.courseSlug = form.courseSlug || undefined
        if (form.type === 'UNIT_TEST' && form.unitId) body.unitId = form.unitId
      } else if (needsSet) {
        body.flashcardSetId = form.flashcardSetId
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
  const pinned = courses.filter((c) => attachedCourses.includes(c.courseSlug))
  const rest = courses.filter((c) => !attachedCourses.includes(c.courseSlug))
  const chosenCourse = courses.find((c) => c.courseSlug === form.courseSlug)
  const chosenUnit = unitOptions.find((u) => u.id === form.unitId)
  const chosenSet = (flashcardSets ?? []).find((s) => s.id === form.flashcardSetId)

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
            <div>
              <label htmlFor="assignment-flashcard-set" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Flashcard set *
              </label>
              {setsError ? (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">{setsError}</p>
              ) : flashcardSets === null ? (
                <p className="text-sm text-gray-400">Loading your flashcard sets…</p>
              ) : flashcardSets.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  You don&rsquo;t have any flashcard sets yet. Create one from your teacher dashboard&rsquo;s
                  Flashcards section, then come back to assign it.
                </p>
              ) : (
                <select
                  id="assignment-flashcard-set"
                  value={form.flashcardSetId}
                  onChange={(e) => setForm({ ...form, flashcardSetId: e.target.value })}
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
                  {form.topicSlugs.map((slug) => (
                    <span
                      key={slug}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-accent-subtle dark:bg-accent-light/30 text-accent dark:text-accent-muted rounded-lg text-xs"
                    >
                      {topicTitle(slug)}
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, topicSlugs: form.topicSlugs.filter((s) => s !== slug) })}
                        className="text-accent hover:text-accent-dark dark:hover:text-accent-light font-bold leading-none"
                        aria-label={`Remove ${topicTitle(slug)}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
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
