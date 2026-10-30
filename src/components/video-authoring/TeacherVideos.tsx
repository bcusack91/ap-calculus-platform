'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Clapperboard, Film, Library } from 'lucide-react'
import type { LessonStatus } from '@/lib/video-lesson-admin'
import { card, field, jsonFetch, label, StatusBadge } from './ui'
import { LessonEditor } from './LessonEditor'
import { ClipLibrary } from './ClipLibrary'

type Home = {
  instructor: { id: string; slug: string; name: string; courses: string[]; isActive: boolean } | null
  instructors?: { id: string; name: string; isActive: boolean }[]
  isAdmin?: boolean
  courses: { slug: string; name: string }[]
  lessons: { id: string; title: string; topicSlug: string; topicTitle: string; courseSlug: string; status: LessonStatus; updatedAt: string }[]
}
type TopicGroup = { name: string; topics: { slug: string; title: string; lessonId: string | null; status: LessonStatus | null }[] }

/** /teacher/videos — the instructor's video-lesson authoring tools. */
export function TeacherVideos() {
  const [home, setHome] = useState<Home | null>(null)
  const [blocked, setBlocked] = useState<string | null>(null)
  const [actingAs, setActingAs] = useState<string>('')
  const [tab, setTab] = useState<'lessons' | 'clips'>('lessons')
  const [course, setCourse] = useState('')
  const [groups, setGroups] = useState<TopicGroup[] | null>(null)
  const [editing, setEditing] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const query = actingAs ? `?instructorId=${encodeURIComponent(actingAs)}` : ''

  const loadHome = useCallback(async () => {
    const r = await jsonFetch<Home>(`/api/teacher/video-lessons${query}`)
    if (r.status === 403) {
      setBlocked(r.data.error ?? 'Ask the site owner to set up your instructor profile.')
      return
    }
    if (!r.ok) {
      setError(r.data.error ?? 'Could not load your lessons')
      return
    }
    setHome(r.data)
    setCourse((c) => c || (r.data.courses.length === 1 ? r.data.courses[0].slug : ''))
  }, [query])
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- state is set after the fetch resolves
    void loadHome()
  }, [loadHome])

  const loadTopics = useCallback(async () => {
    if (!course) return
    const sep = query ? '&' : '?'
    const r = await jsonFetch<{ groups: TopicGroup[] }>(`/api/teacher/video-lessons/topics${query}${sep}course=${encodeURIComponent(course)}`)
    setGroups(r.ok ? r.data.groups : [])
    if (!r.ok) setError(r.data.error ?? 'Could not load topics')
  }, [course, query])
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- state is set after the fetch resolves
    void loadTopics()
  }, [loadTopics])

  const openTopic = async (topicSlug: string) => {
    setError(null)
    const r = await jsonFetch<{ lesson: { id: string } }>(`/api/teacher/video-lessons/lessons${query}`, {
      method: 'POST',
      body: JSON.stringify({ courseSlug: course, topicSlug }),
    })
    if (!r.ok) return setError(r.data.error ?? 'Could not open the lesson')
    setEditing(r.data.lesson.id)
    window.scrollTo({ top: 0 })
  }

  const refresh = () => { void loadHome(); void loadTopics() }

  if (blocked) {
    return (
      <Shell>
        <div className={`${card} max-w-xl`}>
          <h2 className="font-semibold text-gray-900 dark:text-white">Video lessons are by invitation</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Ask the site owner to set up your instructor profile. Once it is linked to this account, you can build video lessons here.
          </p>
          <Link href="/teacher" className="mt-3 inline-block text-sm font-semibold text-accent hover:underline">← Teacher dashboard</Link>
        </div>
      </Shell>
    )
  }

  return (
    <Shell>
      {home?.isAdmin && home.instructors && (
        <div className="mb-4 max-w-sm">
          <label htmlFor="acting-as" className={label}>Admin: author as</label>
          <select
            id="acting-as"
            className={field}
            value={actingAs || home.instructor?.id || ''}
            onChange={(e) => { setActingAs(e.target.value); setEditing(null); setCourse(''); setGroups(null) }}
          >
            {!home.instructor && <option value="">Choose an instructor…</option>}
            {home.instructors.map((i) => <option key={i.id} value={i.id}>{i.name}{i.isActive ? '' : ' (inactive)'}</option>)}
          </select>
        </div>
      )}
      {!home ? (
        <p className="text-sm text-gray-500">{error ?? 'Loading…'}</p>
      ) : !home.instructor ? (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {home.instructors?.length ? 'Pick an instructor to author as.' : <>No instructors yet. Create one in <Link className="font-semibold text-accent hover:underline" href="/admin/instructors">Admin → Video instructors</Link>.</>}
        </p>
      ) : (
        <>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Signed in as instructor <span className="font-semibold text-gray-900 dark:text-white">{home.instructor.name}</span>.
            Every lesson is reviewed by the site owner before students see it.
          </p>
          <div role="tablist" className="mb-6 flex gap-1 border-b border-gray-200 dark:border-gray-700">
            {([['lessons', 'Lessons', Clapperboard], ['clips', 'Clip library', Library]] as const).map(([key, text, Icon]) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={`-mb-px flex items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-semibold transition ${tab === key ? 'border-accent text-accent' : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'}`}
              >
                <Icon className="h-4 w-4" aria-hidden /> {text}
              </button>
            ))}
          </div>
          {error && <p role="alert" className="mb-4 text-sm text-red-600 dark:text-red-400">{error}</p>}

          {tab === 'clips' && <ClipLibrary query={query} />}

          {tab === 'lessons' && editing && (
            <LessonEditor lessonId={editing} query={query} courseName={(slug) => home.courses.find((c) => c.slug === slug)?.name ?? slug} onBack={() => { setEditing(null); refresh() }} onChanged={refresh} />
          )}

          {tab === 'lessons' && !editing && (
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="space-y-3">
                <h2 className="font-semibold text-gray-900 dark:text-white">Build a lesson</h2>
                {home.courses.length === 0 ? (
                  <p className="text-sm text-gray-500 dark:text-gray-400">No courses are on your instructor profile yet. Ask the site owner to add them.</p>
                ) : (
                  <div>
                    <label htmlFor="vl-course" className={label}>Course</label>
                    <select id="vl-course" className={field} value={course} onChange={(e) => { setGroups(null); setCourse(e.target.value) }}>
                      <option value="">Choose a course…</option>
                      {home.courses.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                    </select>
                  </div>
                )}
                {course && groups === null && <p className="text-sm text-gray-500">Loading topics…</p>}
                {groups?.map((g) => (
                  <div key={g.name} className={card}>
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">{g.name}</h3>
                    <ul className="space-y-0.5">
                      {g.topics.map((t) => (
                        <li key={t.slug}>
                          <button
                            type="button"
                            onClick={() => openTopic(t.slug)}
                            className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-2 text-left text-sm transition hover:bg-accent-subtle dark:hover:bg-gray-700/50"
                          >
                            <span className="min-w-0 font-medium text-gray-800 dark:text-gray-200">{t.title}</span>
                            {t.status ? <StatusBadge status={t.status} /> : <span className="shrink-0 text-xs text-gray-400">Start</span>}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <h2 className="font-semibold text-gray-900 dark:text-white">Your lessons</h2>
                {home.lessons.length === 0 ? (
                  <p className="rounded-xl border border-dashed border-gray-300 p-6 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">No lessons yet. Pick a course and a topic to start one.</p>
                ) : (
                  <ul className="space-y-2">
                    {home.lessons.map((l) => (
                      <li key={l.id}>
                        <button type="button" onClick={() => { setEditing(l.id); window.scrollTo({ top: 0 }) }} className={`${card} flex w-full items-center gap-3 text-left transition hover:border-accent-muted`}>
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-semibold text-gray-900 dark:text-white">{l.title}</p>
                            <p className="truncate text-xs text-gray-500 dark:text-gray-400">{l.topicTitle} · {home.courses.find((c) => c.slug === l.courseSlug)?.name ?? l.courseSlug}</p>
                          </div>
                          <StatusBadge status={l.status} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </Shell>
  )
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Link href="/teacher" className="text-sm font-medium text-accent hover:underline">← Dashboard</Link>
        <h1 className="mb-1 mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          <Film className="-mt-1 mr-1.5 inline h-6 w-6 text-accent" aria-hidden /> Video lessons
        </h1>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Short clips with checkpoint questions after each one. Students then take the topic&apos;s exit quiz.
        </p>
        {children}
      </div>
    </div>
  )
}
