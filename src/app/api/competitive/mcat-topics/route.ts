import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { MCAT_SECTIONS, mcatQuestionCount, MCAT_ALL_SLUG } from '@/data/competitive-questions/mcat-bank'

/**
 * GET /api/competitive/mcat-topics — the MCAT competitive hierarchy
 * (section → area → subtopic) with per-node question counts.
 *
 * Unlike the per-course topic APIs, MCAT has no mastery gate: it's a
 * self-study exam, so every section is immediately playable. Counts let the
 * picker hide/flag nodes whose pool is too small for a full match.
 */
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const sections = MCAT_SECTIONS.map((section) => ({
    slug: section.slug,
    title: section.title,
    short: section.short,
    emoji: section.emoji,
    gradient: section.gradient,
    questionCount: mcatQuestionCount(section.slug),
    areas: section.areas.map((area) => ({
      slug: area.slug,
      title: area.title,
      emoji: area.emoji,
      questionCount: mcatQuestionCount(area.slug),
      subtopics: area.subtopics.map((t) => ({
        slug: t.slug,
        title: t.title,
        questionCount: mcatQuestionCount(t.slug),
      })),
    })),
  }))

  return NextResponse.json({
    sections,
    allSlug: MCAT_ALL_SLUG,
    totalQuestions: mcatQuestionCount(MCAT_ALL_SLUG),
  })
}
