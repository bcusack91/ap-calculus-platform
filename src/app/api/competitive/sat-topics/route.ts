import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { SAT_SECTIONS, satQuestionCount, SAT_ALL_SLUG } from '@/data/competitive-questions/sat-bank'

/**
 * GET /api/competitive/sat-topics — the SAT competitive hierarchy
 * (section → domain → skill) with per-node question counts.
 *
 * Mirrors /api/competitive/mcat-topics. Like the MCAT, SAT prep has no mastery
 * gate — it is a self-study exam, so every skill is immediately playable. The
 * counts let the picker warn when a selection is too thin for a full match.
 */
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const sections = SAT_SECTIONS.map((section) => ({
    slug: section.slug,
    title: section.title,
    emoji: section.emoji,
    questionCount: satQuestionCount(section.slug),
    domains: section.domains.map((domain) => ({
      slug: domain.slug,
      title: domain.title,
      emoji: domain.emoji,
      questionCount: satQuestionCount(domain.slug),
      skills: domain.skills.map((s) => ({
        slug: s.slug,
        // `short` labels the chip; `title` is the full College Board name and
        // becomes the tooltip. See SatSkill in sat-bank.ts.
        title: s.title,
        short: s.short,
        questionCount: satQuestionCount(s.slug),
      })),
    })),
  }))

  return NextResponse.json({
    sections,
    allSlug: SAT_ALL_SLUG,
    totalQuestions: satQuestionCount(SAT_ALL_SLUG),
  })
}
