'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { ClipboardCheck, Film, Pencil, Plus, UserRound, Users } from 'lucide-react'
import type { LessonStatus } from '@/lib/video-lesson-admin'
import { LessonReview } from './LessonReview'
import { btn, card, field, jsonFetch, label, StatusBadge } from './ui'

type Course = { slug: string; name: string }
type Instructor = {
  id: string
  slug: string
  name: string
  headline: string
  bio: string
  photoUrl: string | null
  courses: string[]
  isActive: boolean
  user: { id: string; email: string | null; name: string | null; role: string } | null
  _count: { clips: number; lessons: number }
}
type QueueLesson = {
  id: string
  title: string
  topicSlug: string
  topicTitle: string
  courseSlug: string
  instructor: { id: string; name: string; slug: string; isActive: boolean }
  draftStepCount: number
  publishedStepCount: number
  submittedAt: string | null
  publishedAt: string | null
  status: LessonStatus
  published: boolean
  archived: boolean
  version: number
}

type Tab = 'instructors' | 'review' | 'published'
type FormState = { id: string | null; name: string; headline: string; bio: string; photoUrl: string; courses: string[]; linkEmail: string; isActive: boolean }
const emptyForm: FormState = { id: null, name: '', headline: '', bio: '', photoUrl: '', courses: [], linkEmail: '', isActive: true }

/** /admin/instructors — instructor profiles, the video-lesson review queue and published lessons. */
export function InstructorsAdmin() {
  const [tab, setTab] = useState<Tab>('instructors')
  const [instructors, setInstructors] = useState<Instructor[] | null>(null)
  const [courses, setCourses] = useState<Course[]>([])
  const [queue, setQueue] = useState<QueueLesson[]>([])
  const [published, setPublished] = useState<QueueLesson[]>([])
  const [form, setForm] = useState<FormState | null>(null)
  const [reviewing, setReviewing] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const loadInstructors = useCallback(async () => {
    const r = await jsonFetch<{ instructors: Instructor[]; courses: Course[] }>('/api/admin/instructors')
    if (r.ok) {
      setInstructors(r.data.instructors)
      setCourses(r.data.courses)
    } else setError(r.data.error ?? 'Could not load instructors')
  }, [])
  const loadQueue = useCallback(async () => {
    const r = await jsonFetch<{ submitted: QueueLesson[]; lessons: QueueLesson[] }>('/api/admin/instructors/review')
    if (r.ok) {
      setQueue(r.data.submitted)
      setPublished(r.data.lessons)
    }
  }, [])
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- state is set after the fetch resolves
    void loadInstructors()
    void loadQueue()
  }, [loadInstructors, loadQueue])

  const courseName = useMemo(() => new Map(courses.map((c) => [c.slug, c.name])), [courses])

  const lessonAction = async (id: string, action: 'unpublish' | 'republish' | 'archive') => {
    if (action !== 'republish' && !confirm(action === 'archive' ? 'Archive this lesson? Students will stop seeing it.' : 'Unpublish this lesson? Students will stop seeing it.')) return
    const r = await jsonFetch(`/api/admin/instructors/lessons/${id}`, { method: 'POST', body: JSON.stringify({ action }) })
    if (!r.ok) setError(r.data.error ?? 'Action failed')
    void loadQueue()
  }

  const tabs: { key: Tab; label: string; Icon: typeof Users; count?: number }[] = [
    { key: 'instructors', label: 'Instructors', Icon: Users, count: instructors?.length },
    { key: 'review', label: 'Review queue', Icon: ClipboardCheck, count: queue.length },
    { key: 'published', label: 'Published lessons', Icon: Film, count: published.length },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          <Film className="-mt-1 mr-1.5 inline h-6 w-6 text-accent" aria-hidden /> Video instructors
        </h1>
        <p className="mb-6 mt-1 text-sm text-gray-600 dark:text-gray-400">
          Create instructor profiles, link each to a teacher account, and approve every video lesson before students see it.
        </p>

        <div role="tablist" className="mb-6 flex gap-1 overflow-x-auto border-b border-gray-200 dark:border-gray-700">
          {tabs.map(({ key, label: text, Icon, count }) => (
            <button
              key={key}
              role="tab"
              aria-selected={tab === key}
              onClick={() => { setTab(key); setReviewing(null) }}
              className={`-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-semibold transition ${tab === key ? 'border-accent text-accent' : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'}`}
            >
              <Icon className="h-4 w-4" aria-hidden /> {text}
              {count !== undefined && count > 0 && (
                <span className={`rounded-full px-1.5 text-xs ${key === 'review' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}>{count}</span>
              )}
            </button>
          ))}
        </div>

        {error && <p role="alert" className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">{error}</p>}
        {message && <p role="status" className="mb-4 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-800 dark:bg-green-950/40 dark:text-green-200">{message}</p>}

        {tab === 'instructors' && (
          <div className="space-y-4">
            {form ? (
              <InstructorForm
                initial={form}
                courses={courses}
                onCancel={() => setForm(null)}
                onSaved={(name) => {
                  setForm(null)
                  setMessage(`Saved ${name}.`)
                  void loadInstructors()
                }}
              />
            ) : (
              <button type="button" className={btn.primary} onClick={() => { setMessage(null); setForm(emptyForm) }}>
                <Plus className="h-4 w-4" aria-hidden /> New instructor
              </button>
            )}
            {instructors === null ? (
              <p className="text-sm text-gray-500">Loading…</p>
            ) : instructors.length === 0 ? (
              <p className="rounded-xl border border-dashed border-gray-300 p-6 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">No instructors yet.</p>
            ) : (
              <ul className="grid gap-3 md:grid-cols-2">
                {instructors.map((ins) => (
                  <li key={ins.id} className={card}>
                    <div className="flex items-start gap-3">
                      {ins.photoUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element -- arbitrary https host chosen by the admin
                        <img src={ins.photoUrl} alt="" className="h-12 w-12 shrink-0 rounded-full object-cover" />
                      ) : (
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent-dark dark:bg-accent-dark/40 dark:text-accent-muted">
                          <UserRound className="h-6 w-6" aria-hidden />
                        </span>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="font-semibold text-gray-900 dark:text-white">{ins.name}</h2>
                          {!ins.isActive && <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300">Inactive</span>}
                        </div>
                        {ins.headline && <p className="text-sm text-gray-600 dark:text-gray-400">{ins.headline}</p>}
                        <p className="mt-1 truncate text-xs text-gray-500 dark:text-gray-400">
                          {ins.user ? `Linked: ${ins.user.email}` : 'No teacher account linked'} · {ins._count.clips} clips · {ins._count.lessons} lessons
                        </p>
                        {ins.courses.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {ins.courses.map((c) => (
                              <span key={c} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-200">{courseName.get(c) ?? c}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        className={btn.icon}
                        aria-label={`Edit ${ins.name}`}
                        onClick={() => {
                          setMessage(null)
                          setForm({ id: ins.id, name: ins.name, headline: ins.headline, bio: ins.bio, photoUrl: ins.photoUrl ?? '', courses: ins.courses, linkEmail: ins.user?.email ?? '', isActive: ins.isActive })
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                      >
                        <Pencil className="h-4 w-4" aria-hidden />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {tab !== 'instructors' && reviewing && (
          <LessonReview lessonId={reviewing} onBack={() => setReviewing(null)} onChanged={() => void loadQueue()} />
        )}

        {tab === 'review' && !reviewing && (
          queue.length === 0 ? (
            <p className="rounded-xl border border-dashed border-gray-300 p-6 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">Nothing waiting for review.</p>
          ) : (
            <ul className="space-y-2">
              {queue.map((l) => (
                <li key={l.id}>
                  <button type="button" onClick={() => setReviewing(l.id)} className={`${card} flex w-full flex-wrap items-center gap-2 text-left transition hover:border-accent-muted`}>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">{l.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {l.instructor.name} · {l.topicTitle} · {courseName.get(l.courseSlug) ?? l.courseSlug} · {l.draftStepCount} clip{l.draftStepCount === 1 ? '' : 's'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Submitted {l.submittedAt ? new Date(l.submittedAt).toLocaleString() : '—'}{l.published ? ` · revision of live v${l.version}` : ' · first version'}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-accent">Review →</span>
                  </button>
                </li>
              ))}
            </ul>
          )
        )}

        {tab === 'published' && !reviewing && (
          published.length === 0 ? (
            <p className="rounded-xl border border-dashed border-gray-300 p-6 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">No lessons have been published yet.</p>
          ) : (
            <ul className="space-y-2">
              {published.map((l) => (
                <li key={l.id} className={`${card} flex flex-wrap items-center gap-3`}>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-gray-900 dark:text-white">{l.title}</p>
                      <StatusBadge status={l.published ? { kind: 'published', version: l.version } : l.archived ? { kind: 'archived', version: l.version } : { kind: 'unpublished', version: l.version }} />
                      {l.status.kind === 'submitted' && <StatusBadge status={l.status} />}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {l.instructor.name} · {l.topicTitle} · {courseName.get(l.courseSlug) ?? l.courseSlug} · {l.publishedStepCount} clips
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" className={btn.secondary} onClick={() => setReviewing(l.id)}>View</button>
                    {l.published ? (
                      <button type="button" className={btn.danger} onClick={() => lessonAction(l.id, 'unpublish')}>Unpublish</button>
                    ) : (
                      <button type="button" className={btn.secondary} onClick={() => lessonAction(l.id, 'republish')}>Republish</button>
                    )}
                    {!l.archived && <button type="button" className={btn.secondary} onClick={() => lessonAction(l.id, 'archive')}>Archive</button>}
                  </div>
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  )
}

function InstructorForm({ initial, courses, onCancel, onSaved }: { initial: FormState; courses: Course[]; onCancel: () => void; onSaved: (name: string) => void }) {
  const [f, setF] = useState<FormState>(initial)
  const [filter, setFilter] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setF((p) => ({ ...p, [k]: v }))
  const shown = courses.filter((c) => !filter || c.name.toLowerCase().includes(filter.toLowerCase()) || f.courses.includes(c.slug))

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError(null)
    const body = { name: f.name, headline: f.headline, bio: f.bio, photoUrl: f.photoUrl, courses: f.courses, isActive: f.isActive, linkEmail: f.linkEmail.trim() || null }
    const r = await jsonFetch(f.id ? `/api/admin/instructors/${f.id}` : '/api/admin/instructors', {
      method: f.id ? 'PATCH' : 'POST',
      body: JSON.stringify(body),
    })
    setBusy(false)
    if (!r.ok) setError(r.data.error ?? 'Could not save')
    else onSaved(f.name)
  }

  return (
    <form onSubmit={save} className={`${card} space-y-4`} aria-label={f.id ? 'Edit instructor' : 'New instructor'}>
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">{f.id ? `Edit ${initial.name}` : 'New instructor'}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ins-name" className={label}>Name</label>
          <input id="ins-name" className={field} value={f.name} onChange={(e) => set('name', e.target.value)} required minLength={2} />
        </div>
        <div>
          <label htmlFor="ins-headline" className={label}>Headline</label>
          <input id="ins-headline" className={field} value={f.headline} onChange={(e) => set('headline', e.target.value)} placeholder="AP Chemistry teacher, 12 years" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ins-bio" className={label}>Bio</label>
          <textarea id="ins-bio" rows={3} className={field} value={f.bio} onChange={(e) => set('bio', e.target.value)} />
        </div>
        <div>
          <label htmlFor="ins-photo" className={label}>Photo URL</label>
          <input id="ins-photo" className={field} value={f.photoUrl} onChange={(e) => set('photoUrl', e.target.value)} placeholder="https://…" />
        </div>
        <div>
          <label htmlFor="ins-email" className={label}>Linked teacher account (email)</label>
          <input id="ins-email" type="email" className={field} value={f.linkEmail} onChange={(e) => set('linkEmail', e.target.value)} placeholder="teacher@school.org" />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">The account must already exist and be a Teacher or Admin. Leave blank to unlink.</p>
        </div>
      </div>
      <fieldset>
        <legend className={label}>Courses ({f.courses.length} selected)</legend>
        <input className={`${field} mb-2`} value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter courses…" aria-label="Filter courses" />
        <div className="grid max-h-56 gap-1 overflow-y-auto rounded-lg border border-gray-200 p-2 sm:grid-cols-2 dark:border-gray-700">
          {shown.map((c) => (
            <label key={c.slug} className="flex items-center gap-2 rounded px-2 py-1 text-sm text-gray-800 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700/50">
              <input
                type="checkbox"
                className="accent-accent"
                checked={f.courses.includes(c.slug)}
                onChange={(e) => set('courses', e.target.checked ? [...f.courses, c.slug] : f.courses.filter((s) => s !== c.slug))}
              />
              {c.name}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
        <input type="checkbox" className="accent-accent" checked={f.isActive} onChange={(e) => set('isActive', e.target.checked)} />
        Active (inactive instructors&apos; lessons are hidden from students)
      </label>
      {error && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      <div className="flex gap-2">
        <button type="submit" className={btn.primary} disabled={busy}>{f.id ? 'Save changes' : 'Create instructor'}</button>
        <button type="button" className={btn.secondary} onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}
