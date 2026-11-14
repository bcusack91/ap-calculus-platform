import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { preloadKatex } from '@/lib/katex-lazy'
import { hasNoteSheets } from '@/data/note-sheets'
import { liveNoteCounts, liveNoteSections } from '@/lib/note-sheets'
import { canSeeNoteKey, loadTopicDeck, topicEquationSheet } from '@/lib/note-sheets-server'
import { publishedLessonsForTopic } from '@/lib/video-lessons-server'
import { EquationSheetPage, LiveSections, SheetFrame } from '@/components/notes/NoteSheetParts'
import NoteToolbar, { type NoteToolbarLink } from '@/components/notes/NoteToolbar'

/**
 * Printable guided notes for a topic's LIVE class: /topics/<slug>/notes
 *
 * Built from the same slide deck the class presents (loadTopicDeck), so the
 * page follows the slides in order: key sentences with blanks, half-written
 * equations, polls without answers, worked examples with work space, then a
 * blank equation sheet. `?key=1` prints the filled-in key for teachers, and
 * for a student who has passed the topic's exit quiz.
 */

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }>; searchParams?: Promise<Record<string, string | string[] | undefined>> }

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const topic = hasNoteSheets(slug) ? await prisma.topic.findUnique({ where: { slug }, select: { title: true } }) : null
  if (!topic) notFound()
  return { title: `${topic.title} - Class Notes | Study Mondo`, robots: { index: false, follow: false } }
}

export default async function LiveNotesPage(props: Props) {
  const { slug } = await props.params
  if (!hasNoteSheets(slug)) notFound()
  const sp = (await props.searchParams) ?? {}
  const session = await auth()
  const path = `/topics/${slug}/notes`
  if (!session?.user?.id) redirect(`/auth/signin?callbackUrl=${encodeURIComponent(path)}`)

  const [topic, deck, mayKey, videoLessons] = await Promise.all([
    prisma.topic.findUnique({ where: { slug }, select: { slug: true, title: true } }),
    loadTopicDeck(slug),
    canSeeNoteKey(session.user, slug),
    publishedLessonsForTopic(slug).catch(() => []),
    preloadKatex(),
  ])
  if (!topic || !deck) notFound()

  const showKey = sp.key === '1' && mayKey
  const sections = liveNoteSections(deck.slides)
  const counts = liveNoteCounts(sections)
  const links: NoteToolbarLink[] = [{ label: 'Live class notes', href: path, active: true }]
  if (videoLessons[0]) links.push({ label: 'Video lesson notes', href: `/topics/${slug}/video/${videoLessons[0].instructor.slug}/notes` })

  return (
    <div className="ns-root">
      <NoteToolbar
        backHref={`/topics/${slug}`}
        backLabel={topic.title}
        heading={showKey ? 'Class notes: answer key' : 'Printable class notes'}
        summary={`Follows the live class slides in order: ${counts.blanks} blanks to fill, ${counts.polls} polls and ${counts.workedParts} worked-example parts, then a blank equation sheet. Print it before class, or save it as a PDF to write on a tablet.`}
        links={links}
        keyHref={mayKey ? `${path}?key=1` : null}
        blankHref={path}
        showKey={showKey}
        keyLockedNote="The answer key opens when you pass this topic’s exit quiz."
      />
      <SheetFrame
        eyebrow={showKey ? 'Live class · guided notes · answer key' : 'Live class · guided notes'}
        title={deck.title || topic.title}
        how={showKey ? undefined : 'Fill each blank as it comes up in class. Write equations out in full and say what every symbol stands for. Try each worked part before the answer goes up.'}
      >
        <LiveSections sections={sections} showKey={showKey} />
      </SheetFrame>
      <EquationSheetPage topicTitle={deck.title || topic.title} sheet={topicEquationSheet(slug)} showKey={showKey} />
    </div>
  )
}
