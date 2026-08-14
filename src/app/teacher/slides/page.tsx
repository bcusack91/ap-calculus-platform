'use client'

import { Suspense, useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { MathText } from '@/components/MathText'
import { deckPalette, SlideMotionStyles, SLIDE_IN, TitleSlideView, ContentSlideView, QuizSlideView, OptionBadge } from '@/components/SlideVisuals'

/**
 * Teacher slide library — /teacher/slides[?topic=<slug>].
 *
 * Browse the pre-generated decks for every course you teach, grouped by
 * curriculum category, and preview any deck slide-by-slide (polls show the
 * correct answer highlighted — this is the teacher's prep view). Deep-linked
 * from Class Plan blocks. To present a deck live: Go Live in your classroom,
 * then pick the topic in the "Present slides" bar.
 */

type Slide =
  | { kind: 'title'; title: string; subtitle: string }
  | { kind: 'content'; title: string; blocks: string[] }
  | { kind: 'poll'; question: string; options: string[]; correctIndex: number; explanation: string }
  | { kind: 'quiz'; topicSlug: string; title: string }

interface CourseEntry { slug: string; name: string; deckCount: number }
interface TopicEntry { slug: string; title: string; slideCount: number; pollCount: number }
interface CategoryEntry { name: string; topics: TopicEntry[] }

function SlideLibrary() {
  const searchParams = useSearchParams()
  const deepLinkTopic = searchParams.get('topic')

  const [courses, setCourses] = useState<CourseEntry[] | null>(null)
  const [courseSlug, setCourseSlug] = useState<string | null>(null)
  const [categories, setCategories] = useState<CategoryEntry[] | null>(null)
  const [courseName, setCourseName] = useState('')
  const [preview, setPreview] = useState<{ title: string; slides: Slide[] } | null>(null)
  const [slideIdx, setSlideIdx] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/teacher/slide-library', { cache: 'no-store' })
      .then(r => (r.ok ? r.json() : null))
      .then(d => {
        if (!d) return
        setCourses(d.courses ?? [])
        if (d.courses?.length === 1) setCourseSlug(d.courses[0].slug)
      })
      .catch(() => setError('Could not load the slide library'))
  }, [])

  useEffect(() => {
    if (!courseSlug) return
    fetch(`/api/teacher/slide-library?course=${encodeURIComponent(courseSlug)}`, { cache: 'no-store' })
      .then(r => (r.ok ? r.json() : null))
      .then(d => { if (d) { setCategories(d.categories ?? []); setCourseName(d.courseName ?? '') } })
      .catch(() => {})
  }, [courseSlug])

  const openPreview = useCallback((slug: string) => {
    fetch(`/api/teacher/slide-library?topic=${encodeURIComponent(slug)}`, { cache: 'no-store' })
      .then(async r => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load the deck')
        setPreview({ title: d.deck.title, slides: d.deck.slides as Slide[] })
        setSlideIdx(0)
        setError(null)
      })
      .catch(e => setError(e instanceof Error ? e.message : 'Could not load the deck'))
  }, [])

  // Deep link (?topic=…) opens the preview straight away.
  useEffect(() => {
    if (deepLinkTopic) openPreview(deepLinkTopic)
  }, [deepLinkTopic, openPreview])

  const slide = preview?.slides[slideIdx]
  const palette = deckPalette(preview?.title ?? 'deck')

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Link href="/teacher" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">← Dashboard</Link>
        <h1 className="mb-1 mt-2 text-3xl font-bold text-gray-900 dark:text-white">🖥️ Slide Library</h1>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Ready-made decks for every topic — preview here, then present from a live session (Go Live → Present slides).
        </p>
        {error && <p className="mb-4 text-sm text-red-600 dark:text-red-400">{error}</p>}

        <div className="grid gap-6 lg:grid-cols-[minmax(280px,1fr)_2fr]">
          {/* Catalog */}
          <div className="space-y-4">
            {courses !== null && courses.length > 1 && (
              <select
                value={courseSlug ?? ''}
                onChange={e => { setCategories(null); setCourseSlug(e.target.value || null) }}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Choose a course…</option>
                {courses.map(c => <option key={c.slug} value={c.slug}>{c.name} ({c.deckCount} decks)</option>)}
              </select>
            )}
            {courseSlug && categories === null && <p className="text-sm text-gray-400">Loading {courseName || 'course'}…</p>}
            {categories?.map(cat => (
              <div key={cat.name} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">{cat.name}</h2>
                <div className="space-y-1">
                  {cat.topics.map(t => (
                    <button
                      key={t.slug}
                      onClick={() => openPreview(t.slug)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                    >
                      <span className="font-medium text-gray-800 dark:text-gray-200">{t.title}</span>
                      <span className="text-xs text-gray-400">{t.slideCount} slides · {t.pollCount} polls</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {courses !== null && courses.length === 0 && (
              <p className="text-sm text-gray-400">No decks generated yet.</p>
            )}
          </div>

          {/* Preview */}
          <div>
            {!preview ? (
              <div className="flex min-h-[50vh] items-center justify-center rounded-2xl border border-dashed border-gray-300 text-sm text-gray-400 dark:border-gray-600">
                Pick a topic to preview its deck
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-indigo-200 bg-white shadow-lg dark:border-indigo-800 dark:bg-gray-800">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-4 py-2.5 dark:border-gray-700">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {preview.title} <span className="ml-1 text-xs font-normal text-gray-400">preview · slide {slideIdx + 1}/{preview.slides.length}</span>
                  </span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setSlideIdx(i => Math.max(0, i - 1))}
                      disabled={slideIdx === 0}
                      className="rounded-lg border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-700 disabled:opacity-40 dark:border-gray-600 dark:text-gray-300"
                    >◀</button>
                    <button
                      onClick={() => setSlideIdx(i => Math.min(preview.slides.length - 1, i + 1))}
                      disabled={slideIdx >= preview.slides.length - 1}
                      className="rounded-lg bg-indigo-600 px-4 py-1 text-sm font-semibold text-white disabled:opacity-40"
                    >▶</button>
                  </div>
                </div>
                <SlideMotionStyles />
                <div key={slideIdx} className="min-h-[45vh] px-6 py-8 sm:px-10">
                  {slide?.kind === 'title' && (
                    <TitleSlideView title={slide.title} subtitle={slide.subtitle} palette={palette} />
                  )}
                  {slide?.kind === 'content' && (
                    <ContentSlideView title={slide.title} blocks={slide.blocks} palette={palette} />
                  )}
                  {slide?.kind === 'poll' && (
                    <div style={SLIDE_IN}>
                      <p className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${palette.chip}`}>
                        📊 Poll · answer shown (prep view)
                      </p>
                      <MathText text={slide.question} className="mb-5 text-xl font-semibold text-gray-900 dark:text-white" />
                      <div className="space-y-2">
                        {slide.options.map((opt, i) => (
                          <div key={i} className={`flex items-center gap-2.5 rounded-xl border-2 px-4 py-2.5 text-sm ${i === slide.correctIndex ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-gray-200 dark:border-gray-600'}`}>
                            <OptionBadge index={i} active={i === slide.correctIndex} palette={palette} />
                            <MathText inline text={opt} />
                            {i === slide.correctIndex && <span className="ml-1 text-xs font-semibold text-green-600 dark:text-green-400">✓ correct</span>}
                          </div>
                        ))}
                      </div>
                      {slide.explanation && (
                        <MathText text={slide.explanation} className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-700/40 dark:text-gray-300" />
                      )}
                    </div>
                  )}
                  {slide?.kind === 'quiz' && (
                    <QuizSlideView title={slide.title} palette={palette} />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeacherSlidesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SlideLibrary />
    </Suspense>
  )
}
