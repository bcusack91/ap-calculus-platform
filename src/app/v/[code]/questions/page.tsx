import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { lookupShortLink } from '@/data/video-short-links'
import { getShotList } from '@/data/video-shot-lists'
import { shuffledQuestion } from '@/lib/video-lesson-core'
import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { PlanCheckpointQuiz } from '@/components/video/PlanCheckpointQuiz'
import { publishedLessonsForTopic } from '@/lib/video-lessons-server'
import { PlayCircle } from 'lucide-react'

/**
 * /v/<code>/questions — a clip's checkpoint questions, straight from its
 * recording plan. The short link in a YouTube video lands here until that
 * topic's video lesson is approved (afterwards it opens the lesson itself on
 * the clip). Answer keys stay on the server (plan-answer route).
 */
export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ code: string }> }

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { code } = await props.params
  const link = lookupShortLink(code)
  const plan = link ? await getShotList(link.topicSlug) : null
  const clip = link && plan ? plan.clips[link.clip - 1] : null
  return {
    title: clip ? `Check yourself: ${clip.title} | Study Mondo` : 'Study Mondo',
    robots: { index: false, follow: true },
  }
}

export default async function PlanQuestionsPage(props: Props) {
  const { code } = await props.params
  const link = lookupShortLink(code)
  const plan = link ? await getShotList(link.topicSlug) : null
  const clip = link && plan ? plan.clips[link.clip - 1] : null
  if (!link || !plan || !clip) notFound()

  const [session, topic, lessons] = await Promise.all([
    auth(),
    prisma.topic.findUnique({ where: { slug: link.topicSlug }, select: { slug: true, title: true } }),
    publishedLessonsForTopic(link.topicSlug).catch(() => []),
  ])
  const topicSlug = topic?.slug ?? link.topicSlug
  const readHref = hasInteractiveLesson(topicSlug) ? `/topics/${topicSlug}/interactive` : `/topics/${topicSlug}`
  const exitQuizHref = hasExitQuiz(topicSlug) ? `/topics/${topicSlug}/interactive?exitQuiz=1` : null
  const questions = clip.checkpoint.map((q, index) => ({ index, question: q.question, options: shuffledQuestion(q).options }))

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-2xl px-4 py-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <Link href={`/topics/${topicSlug}`} className="hover:text-accent">{topic?.title ?? plan.title}</Link>
          {' · '}Clip {link.clip} of {plan.clips.length}
        </p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Check yourself: {clip.title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {questions.length} quick questions on the video you just watched. Each answer comes with an explanation.
        </p>
        {lessons.length > 0 && (
          <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-accent-muted bg-accent-subtle p-4 dark:border-accent-hover dark:bg-accent-light/20 sm:flex-row sm:items-center">
            <p className="flex-1 text-sm text-gray-800 dark:text-gray-200">
              <span className="font-semibold">Prefer to learn it step by step?</span> The same video is on StudyMondo cut into short sections, each with its own question, and the worked examples let you type your answers before the solution plays.
            </p>
            <Link
              href={`/topics/${topicSlug}/video`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover"
            >
              <PlayCircle className="h-4 w-4" aria-hidden /> Open the video lesson
            </Link>
          </div>
        )}
        <div className="mt-6">
          <PlanCheckpointQuiz
            code={link.code}
            questions={questions}
            signedIn={!!session?.user?.id}
            readHref={readHref}
            exitQuizHref={exitQuizHref}
            signupHref={`/auth/signup?callbackUrl=${encodeURIComponent(readHref)}`}
          />
        </div>
      </div>
    </div>
  )
}
