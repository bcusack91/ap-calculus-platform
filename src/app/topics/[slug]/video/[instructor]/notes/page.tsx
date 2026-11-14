import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { preloadKatex } from '@/lib/katex-lazy'
import { hasNoteSheets } from '@/data/note-sheets'
import { reviewCardsFor } from '@/data/video-lesson-flashcards'
import { videoNoteSheets } from '@/lib/note-sheets'
import { canSeeNoteKey, topicEquationSheet } from '@/lib/note-sheets-server'
import { loadStudentLesson } from '@/lib/video-lessons-server'
import { PART_NOUN, partOfVideo } from '@/lib/video-lesson-core'
import { EquationSheetPage, VideoSheetView } from '@/components/notes/NoteSheetParts'
import NoteToolbar, { type NoteToolbarLink } from '@/components/notes/NoteToolbar'

/**
 * Printable notes for a VIDEO lesson: /topics/<slug>/video/<instructor>/notes
 *
 * One sheet per source video, in lesson order: a clip-by-clip tracker for a
 * concept video and a workbook for a worked-examples video, then the topic's
 * blank equation sheet. `?part=N` prints one module (a concept video and its
 * worked examples); `?key=1` prints the answers for teachers, and for a
 * student who has passed the topic's exit quiz. Section titles and problems
 * come from the lesson itself, so the paper always matches the screen.
 */

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string; instructor: string }>; searchParams?: Promise<Record<string, string | string[] | undefined>> }

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const topic = hasNoteSheets(slug) ? await prisma.topic.findUnique({ where: { slug }, select: { title: true } }) : null
  if (!topic) notFound()
  return { title: `${topic.title} - Video Notes | Study Mondo`, robots: { index: false, follow: false } }
}

export default async function VideoNotesPage(props: Props) {
  const { slug, instructor } = await props.params
  if (!hasNoteSheets(slug)) notFound()
  const sp = (await props.searchParams) ?? {}
  const session = await auth()
  const path = `/topics/${slug}/video/${instructor}/notes`
  if (!session?.user?.id) redirect(`/auth/signin?callbackUrl=${encodeURIComponent(path)}`)

  const [topic, lesson, mayKey] = await Promise.all([
    prisma.topic.findUnique({ where: { slug }, select: { slug: true, title: true } }),
    loadStudentLesson(slug, instructor, session.user.id),
    canSeeNoteKey(session.user, slug),
    preloadKatex(),
  ])
  if (!topic || !lesson) notFound()

  const all = videoNoteSheets(lesson.steps, lesson.videoTitles, reviewCardsFor)
  const partOf = (video: number | null) => partOfVideo(video)
  const partNumbers = [...new Set(all.map((s) => partOf(s.video)))]
  const partParam = typeof sp.part === 'string' ? Number.parseInt(sp.part, 10) : NaN
  const part = Number.isInteger(partParam) && partParam >= 1 && partParam <= partNumbers.length ? partParam : null
  const sheets = part === null ? all : all.filter((s) => partOf(s.video) === partNumbers[part - 1])
  const showKey = sp.key === '1' && mayKey

  const query = (p: number | null, key: boolean) => {
    const q = new URLSearchParams()
    if (p !== null) q.set('part', String(p))
    if (key) q.set('key', '1')
    const s = q.toString()
    return s ? `${path}?${s}` : path
  }
  const links: NoteToolbarLink[] = []
  if (partNumbers.length > 1) {
    links.push({ label: `All ${partNumbers.length} ${PART_NOUN.toLowerCase()}s`, href: query(null, showKey), active: part === null })
    partNumbers.forEach((_, k) => links.push({ label: `${PART_NOUN} ${k + 1}`, href: query(k + 1, showKey), active: part === k + 1 }))
  }
  links.push({ label: 'Live class notes', href: `/topics/${slug}/notes` })

  const lessonHref = `/topics/${slug}/video/${instructor}${part !== null ? `?part=${part}` : ''}`
  const trackers = sheets.filter((s) => s.kind === 'tracker').length
  const workbooks = sheets.length - trackers

  return (
    <div className="ns-root">
      <NoteToolbar
        backHref={lessonHref}
        backLabel={`Back to the video lesson`}
        heading={showKey ? 'Video notes: answer key' : 'Printable video notes'}
        summary={`${lesson.title}${part !== null ? `, ${PART_NOUN} ${part}` : ''}: ${trackers} note sheet${trackers === 1 ? '' : 's'} that follow the concept videos section by section and ${workbooks} workbook${workbooks === 1 ? '' : 's'} for the worked examples, then a blank equation sheet. Print it before you watch, or save it as a PDF to write on a tablet.`}
        links={links}
        keyHref={mayKey ? query(part, true) : null}
        blankHref={query(part, false)}
        showKey={showKey}
        keyLockedNote="The answer key opens when you pass this topic’s exit quiz."
      />
      {sheets.map((s, i) => (
        <VideoSheetView
          key={i}
          sheet={s}
          lessonTitle={lesson.title}
          moduleLabel={partNumbers.length > 1 ? `${PART_NOUN} ${partNumbers.indexOf(partOf(s.video)) + 1}` : null}
          showKey={showKey}
        />
      ))}
      <EquationSheetPage topicTitle={lesson.title} sheet={topicEquationSheet(slug)} showKey={showKey} />
    </div>
  )
}
