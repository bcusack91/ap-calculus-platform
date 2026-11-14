import { prisma } from '@/lib/prisma'
import { generateSlideDeck, type Slide } from '@/lib/slide-deck'
import { REVIEW_DECKS } from '@/data/video-lesson-flashcards'
import { NOTE_SHEET_TOPICS } from '@/data/note-sheets'
import { equationSheet, type EquationSheet } from '@/lib/note-sheets'

/**
 * The deck a live class presents for a topic: the pre-generated one when it
 * exists (what the teacher previewed and what `start` uses), else a fresh
 * generation. Same order as the live-session deck route, so the printed
 * notes match the slides on screen.
 */
export async function loadTopicDeck(topicSlug: string): Promise<{ title: string; slides: Slide[] } | null> {
  const stored = await prisma.topicSlideDeck.findUnique({ where: { topicSlug }, select: { title: true, slides: true } })
  if (stored) return { title: stored.title, slides: stored.slides as unknown as Slide[] }
  return generateSlideDeck(topicSlug).catch(() => null)
}

/**
 * Who may print the filled-in key: teachers and admins always; a student once
 * they have passed the topic's exit quiz (owner, 2026-11-13), so the key
 * rewards finishing instead of replacing the work.
 */
export async function canSeeNoteKey(user: { id: string; role?: string | null } | null | undefined, topicSlug: string): Promise<boolean> {
  if (!user?.id) return false
  if (user.role === 'TEACHER' || user.role === 'ADMIN') return true
  const pass = await prisma.exitQuizAttempt.findFirst({ where: { userId: user.id, topicSlug, passed: true }, select: { id: true } })
  return !!pass
}

/** The topic's blank formula sheet, from every review flashcard of its video lesson. */
export function topicEquationSheet(topicSlug: string): EquationSheet {
  const key = NOTE_SHEET_TOPICS[topicSlug]?.lessonKey
  const decks = key ? REVIEW_DECKS[key] : undefined
  if (!decks) return { quantities: [], equations: [] }
  const cards = Object.keys(decks).map(Number).sort((a, b) => a - b).flatMap((v) => decks[v])
  return equationSheet(cards)
}
