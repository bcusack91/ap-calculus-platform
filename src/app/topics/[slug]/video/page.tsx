import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BookOpen, Clock, PlayCircle, Video } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { publishedLessonsForTopic } from '@/lib/video-lessons-server'
import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'
import { InstructorAvatar } from '@/components/video/InstructorAvatar'
import { InstructorChoiceLink } from '@/components/video/InstructorChoiceLink'

/**
 * Video-lesson instructor picker: /topics/<slug>/video
 *
 * Cards for every approved instructor with a PUBLISHED lesson on this topic.
 * The student's saved instructor for the course (UserInstructorChoice) is
 * listed first and marked; choosing a card saves the choice and opens the
 * player. One instructor → straight to the player. Signed-out visitors can
 * browse; the player asks them to sign in.
 */

// Personalized (saved instructor), so never statically cached.
export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }>; searchParams?: Promise<Record<string, string | string[] | undefined>> }

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const topic = await prisma.topic.findUnique({ where: { slug }, select: { title: true } })
  if (!topic) notFound()
  return {
    title: `${topic.title} - Video Lesson | Study Mondo`,
    robots: { index: false, follow: true },
  }
}

function minutes(totalSeconds: number): number {
  return Math.max(1, Math.round(totalSeconds / 60))
}

/** Query params a short link (/v/<code>) sets, carried on to the chosen instructor's lesson. */
function carriedQuery(sp: Record<string, string | string[] | undefined>): string {
  const out = new URLSearchParams()
  for (const [k, v] of Object.entries(sp)) {
    if (typeof v === 'string' && (k === 'clip' || k.startsWith('utm_'))) out.set(k, v.slice(0, 100))
  }
  const q = out.toString()
  return q ? `?${q}` : ''
}

export default async function VideoPickerPage(props: Props) {
  const { slug } = await props.params
  const carry = carriedQuery((await props.searchParams) ?? {})
  const topic = await prisma.topic.findUnique({
    where: { slug },
    select: { slug: true, title: true, category: { select: { course: { select: { slug: true, name: true } } } } },
  })
  if (!topic) notFound()

  const lessons = await publishedLessonsForTopic(topic.slug)
  if (lessons.length === 1) redirect(`/topics/${topic.slug}/video/${lessons[0].instructor.slug}${carry}`)

  const courseSlug = topic.category.course.slug
  const readHref = hasInteractiveLesson(topic.slug) ? `/topics/${topic.slug}/interactive` : `/topics/${topic.slug}`
  const session = await auth()
  const userId = session?.user?.id ?? null
  const choice = userId
    ? await prisma.userInstructorChoice.findUnique({
        where: { userId_courseSlug: { userId, courseSlug } },
        select: { instructor: { select: { slug: true } } },
      })
    : null
  const savedSlug = choice?.instructor.slug ?? null
  const ordered = savedSlug
    ? [...lessons].sort((a, b) => Number(b.instructor.slug === savedSlug) - Number(a.instructor.slug === savedSlug))
    : lessons

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <nav className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href={`/topics/${topic.slug}`} className="hover:text-accent">{topic.title}</Link>
          {' / '}
          <span className="font-medium text-gray-900 dark:text-white">Video lesson</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          <Video className="-mt-1 mr-2 inline h-7 w-7 text-accent" aria-hidden />
          {topic.title}
        </h1>

        {ordered.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">No video lessons for this topic yet</p>
            <p className="mt-1 text-gray-600 dark:text-gray-400">The written lesson covers everything, with practice built in.</p>
            <Link
              href={readHref}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover"
            >
              <BookOpen className="h-5 w-5" aria-hidden /> Read the lesson
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Pick an instructor. You&apos;ll watch short clips, answer a quick checkpoint after each one, then take the exit quiz for credit.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {ordered.map((l) => {
                const saved = l.instructor.slug === savedSlug
                const href = `/topics/${topic.slug}/video/${l.instructor.slug}${carry}`
                return (
                  <li key={l.lessonId}>
                    <InstructorChoiceLink
                      href={href}
                      courseSlug={courseSlug}
                      instructorSlug={l.instructor.slug}
                      signedIn={!!userId}
                      className={`flex h-full flex-col rounded-2xl border-2 bg-white p-5 shadow-sm transition-colors hover:border-accent dark:bg-gray-900 ${
                        saved ? 'border-accent dark:border-accent-muted' : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <InstructorAvatar name={l.instructor.name} photoUrl={l.instructor.photoUrl} size="lg" />
                        <div className="min-w-0">
                          {saved && (
                            <span className="mb-1 inline-block rounded-full bg-accent-light px-2 py-0.5 text-xs font-semibold text-accent-dark dark:bg-accent-light/20 dark:text-accent-muted">
                              Your instructor
                            </span>
                          )}
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{l.instructor.name}</p>
                          {l.instructor.headline && <p className="text-sm text-gray-600 dark:text-gray-400">{l.instructor.headline}</p>}
                        </div>
                      </div>
                      {l.instructor.bio && <p className="mt-3 line-clamp-3 text-sm text-gray-700 dark:text-gray-300">{l.instructor.bio}</p>}
                      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                        <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="h-4 w-4" aria-hidden />
                          {l.clipCount} {l.clipCount === 1 ? 'clip' : 'clips'} · {minutes(l.totalSeconds)} min
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-accent dark:text-accent-muted">
                          <PlayCircle className="h-5 w-5" aria-hidden /> {saved ? 'Continue' : 'Watch'}
                        </span>
                      </div>
                    </InstructorChoiceLink>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 text-center text-sm">
              <Link href={readHref} className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-hover dark:text-accent-muted">
                <BookOpen className="h-4 w-4" aria-hidden /> Prefer to read? Open the written lesson
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
