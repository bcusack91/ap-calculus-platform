import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Lock, LogIn, UserPlus } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { loadStudentLesson, publishedLessonsForTopic } from '@/lib/video-lessons-server'
import { isLessonComplete, lessonParts, partIndexOf, partTitle, resumeIndex, studentSteps } from '@/lib/video-lesson-core'
import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'
import { hasExitQuiz } from '@/data/exit-quizzes'
import VideoLessonPlayer, { type PartNav } from '@/components/video/VideoLessonPlayer'
import { InstructorAvatar } from '@/components/video/InstructorAvatar'

/**
 * Video-lesson player: /topics/<slug>/video/<instructor>
 *
 * Server-renders one instructor's published lesson for the student: low-yield
 * steps/questions filtered by their setting, options in display order, no
 * answer keys (studentSteps). Signed-out visitors see the lesson outline and
 * a sign-in prompt — progress, checkpoints and credit need an account.
 *
 * A lesson cut from YouTube videos is shown one PART per page (?part=N): a
 * concept video and its worked-examples video (lessonParts). A part opens
 * once every part before it is finished, like the sections inside it. With
 * no ?part, the page opens the part holding the student's next unfinished
 * section.
 */

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string; instructor: string }>; searchParams?: Promise<Record<string, string | string[] | undefined>> }

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const topic = await prisma.topic.findUnique({ where: { slug }, select: { title: true } })
  if (!topic) notFound()
  return {
    title: `${topic.title} - Video Lesson | Study Mondo`,
    robots: { index: false, follow: true },
  }
}

export default async function VideoLessonPage(props: Props) {
  const { slug, instructor: instructorSlug } = await props.params
  const sp = (await props.searchParams) ?? {}
  const session = await auth()
  const userId = session?.user?.id ?? null

  const [topic, lesson, cards] = await Promise.all([
    prisma.topic.findUnique({ where: { slug }, select: { slug: true, title: true } }),
    loadStudentLesson(slug, instructorSlug, userId),
    publishedLessonsForTopic(slug),
  ])
  if (!topic || !lesson) notFound()

  const readHref = hasInteractiveLesson(topic.slug) ? `/topics/${topic.slug}/interactive` : `/topics/${topic.slug}`
  const pickerHref = cards.length > 1 ? `/topics/${topic.slug}/video` : null
  const steps = studentSteps(lesson.steps, lesson.videoTitles)
  // ?clip=N (1-based over the whole lesson): open that clip's checkpoint.
  const clipParam = typeof sp.clip === 'string' ? Number.parseInt(sp.clip, 10) : NaN
  const focusClip = Number.isInteger(clipParam) && clipParam >= 1 && clipParam <= steps.length ? clipParam : null
  const focusStep = focusClip ? steps[focusClip - 1] : null

  // One page per part (concept video + its worked examples).
  const parts = lessonParts(steps.map((s) => s.video))
  const partDone = parts.map((p) => isLessonComplete(lesson.steps.slice(p.start, p.end), lesson.progress))
  const partParam = typeof sp.part === 'string' ? Number.parseInt(sp.part, 10) : NaN
  const partIdx = focusClip
    ? partIndexOf(parts, focusClip - 1)
    : Number.isInteger(partParam) && partParam >= 1 && partParam <= parts.length
      ? partParam - 1
      : partIndexOf(parts, resumeIndex(lesson.steps, lesson.progress))
  const lessonHref = `/topics/${topic.slug}/video/${lesson.instructor.slug}`
  const partNav: PartNav[] = parts.map((p, k) => {
    const ps = steps.slice(p.start, p.end)
    return {
      title: partTitle(lesson.videoTitles[p.videos[0]], k + 1),
      videoTitles: p.videos.map((v) => lesson.videoTitles[v] ?? `Video ${v}`),
      sections: ps.length,
      minutes: Math.max(1, Math.round(ps.reduce((n, s) => n + s.durationSec, 0) / 60)),
      done: partDone[k],
      href: `${lessonHref}?part=${k + 1}`,
    }
  })
  const firstOpenPart = partDone.findIndex((d) => !d)
  const partLocked = firstOpenPart !== -1 && partIdx > firstOpenPart

  if (!userId) {
    const path = `/topics/${topic.slug}/video/${lesson.instructor.slug}${focusClip ? `?clip=${focusClip}` : ''}`
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-2xl px-4 py-10">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8">
            <div className="flex justify-center">
              <InstructorAvatar name={lesson.instructor.name} photoUrl={lesson.instructor.photoUrl} size="lg" />
            </div>
            <h1 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{lesson.title}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {lesson.instructor.name}
              {parts.length > 1 ? ` · ${parts.length} parts` : ''} · {steps.length} {steps.length === 1 ? 'clip' : 'clips'} · {Math.max(1, Math.round(steps.reduce((n, s) => n + s.durationSec, 0) / 60))} min
            </p>
            {focusStep ? (
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Answer the {focusStep.questions.length} checkpoint question{focusStep.questions.length === 1 ? '' : 's'} for clip {focusClip}, <span className="font-semibold">{focusStep.title}</span>, with a free account. Your answers and progress are saved, and the topic&apos;s exit quiz is waiting when you finish.
              </p>
            ) : (
              <p className="mt-4 text-gray-700 dark:text-gray-300">Create a free account to watch. We save your place in every clip, and your checkpoints count toward this topic.</p>
            )}
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`/auth/signup?callbackUrl=${encodeURIComponent(path)}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover"
              >
                <UserPlus className="h-5 w-5" aria-hidden /> Create a free account
              </Link>
              <Link
                href={`/auth/signin?callbackUrl=${encodeURIComponent(path)}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-6 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <LogIn className="h-5 w-5" aria-hidden /> Sign in
              </Link>
            </div>
            <p className="mt-4 text-sm">
              <Link href={readHref} className="font-medium text-accent hover:text-accent-hover dark:text-accent-muted">Or read the lesson instead</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  const part = parts[partIdx]
  if (part && partLocked) {
    const open = partNav[firstOpenPart]
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-2xl px-4 py-10">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8">
            <Lock className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-500" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {lesson.title} · Part {partIdx + 1} of {parts.length}
            </p>
            <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{partNav[partIdx].title} is locked</h1>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Finish Part {firstOpenPart + 1}, {open.title}, first. Each part opens when the one before it is done.
            </p>
            <Link href={open.href} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover">
              Go to Part {firstOpenPart + 1}: {open.title} <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    )
  }
  const partSteps = part ? steps.slice(part.start, part.end) : steps
  const partVisible = part ? lesson.steps.slice(part.start, part.end) : lesson.steps
  const partOffset = part?.start ?? 0

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <VideoLessonPlayer
          key={partIdx}
          lessonId={lesson.id}
          topicSlug={topic.slug}
          topicTitle={topic.title}
          title={lesson.title}
          instructor={{ name: lesson.instructor.name, headline: lesson.instructor.headline, photoUrl: lesson.instructor.photoUrl }}
          steps={partSteps}
          parts={partNav}
          partIndex={partIdx}
          initialProgress={lesson.progress}
          initialIndex={focusClip ? focusClip - 1 - partOffset : resumeIndex(partVisible, lesson.progress)}
          openCheckpointOnLoad={focusClip !== null}
          initiallyComplete={isLessonComplete(lesson.steps, lesson.progress)}
          partInitiallyComplete={partDone[partIdx] ?? false}
          pickerHref={pickerHref}
          readHref={readHref}
          exitQuizHref={hasExitQuiz(topic.slug) ? `/topics/${topic.slug}/interactive?exitQuiz=1` : null}
        />
      </div>
    </div>
  )
}
