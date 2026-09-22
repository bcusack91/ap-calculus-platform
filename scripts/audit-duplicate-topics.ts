/**
 * Finds lesson pages inside one course that teach the same thing.
 *
 * Two parallel lesson sets for a topic split whatever ranking signal each
 * would earn and give Google a reason to index neither, so this reports
 * candidate pairs with the evidence needed to pick a survivor.
 *
 *   npx tsx scripts/audit-duplicate-topics.ts            # report
 *   npx tsx scripts/audit-duplicate-topics.ts --json     # machine-readable
 */
import { PrismaClient } from '@prisma/client'
import { hasInteractiveLesson } from '../src/data/interactive-lessons/registry'

const prisma = new PrismaClient()

/**
 * Deliberate difficulty tiers, not accidents: the SAT three-track system
 * ships a Core Skills and a 700-800 twin of a base topic on purpose.
 */
const TRACK_SUFFIX = /-(advanced|core-skills)$/
const isTrackTwin = (a: string, b: string) =>
  a.replace(TRACK_SUFFIX, '') === b.replace(TRACK_SUFFIX, '') && (TRACK_SUFFIX.test(a) || TRACK_SUFFIX.test(b))

/**
 * Level markers that say where a lesson sits in the catalog, not what it
 * teaches: "multiplying-decimals" and "multiplying-decimals-grade5" are the
 * same concept twice inside one course.
 */
const LEVEL_AFFIX = /(^|-)(grade-?\d|g\d|calcab|calcbc|precalc|prealgebra|prealg|algebra-?[12]|alg[12]|geometry|geo|ochem[12]?|sat|act|mcat|ap)(-|$)/g
const conceptKey = (slug: string) => slug.replace(LEVEL_AFFIX, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')

const STOP = new Set(['the', 'a', 'an', 'of', 'and', 'to', 'in', 'for', 'with', 'its', 'intro', 'introduction', 'basics'])
/** Course/level noise that says nothing about the subject. */
const LEVEL = /\b(calcab|calcbc|ap|bc|ab|alg1|alg2|precalc|geo|ochem[12]?|mcat|sat|act|grade\s*\d|g\d)\b/g

function tokens(title: string): Set<string> {
  return new Set(
    title
      .toLowerCase()
      .replace(/\(.*?\)/g, ' ')
      .replace(LEVEL, ' ')
      .replace(/[^a-z0-9 ]/g, ' ')
      .split(/\s+/)
      .filter((w) => w && !STOP.has(w))
      .map((w) => (w.endsWith('s') && w.length > 3 ? w.slice(0, -1) : w)), // crude singular
  )
}

/**
 * Word 5-grams of the lesson body. Titles alone are not evidence: "Volumes by
 * the Shell Method" and "Volumes by the Washer Method" share every word but
 * teach different techniques, so the body text decides.
 */
function shingles(text: string | null): Set<string> {
  const w = (text ?? '')
    .replace(/<[^>]+>/g, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
  const out = new Set<string>()
  for (let i = 0; i + 5 <= w.length; i++) out.add(w.slice(i, i + 5).join(' '))
  return out
}

/** How much of the SHORTER page's text also appears in the longer one. */
function containment(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0
  const [small, large] = a.size <= b.size ? [a, b] : [b, a]
  return [...small].filter((s) => large.has(s)).length / small.size
}

function similarity(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0
  const shared = [...a].filter((t) => b.has(t)).length
  return shared / Math.min(a.size, b.size) // containment: "Chain Rule" vs "The Chain Rule"
}

/**
 * Mirrors the indexability rule in src/app/topics/[slug]/page.tsx and
 * src/app/sitemap.ts. A noindexed page cannot compete with its twin, so
 * only pairs where BOTH sides are indexable are worth acting on.
 */
function isIndexable(t: { textContent: string | null; _count: { exampleProblems: number; subtopics: number } }): boolean {
  const len = (t.textContent ?? '').trim().length
  return !(len < 600 && t._count.exampleProblems === 0 && t._count.subtopics === 0)
}

async function main() {
  const courses = await prisma.course.findMany({
    select: {
      slug: true,
      name: true,
      categories: {
        select: {
          slug: true,
          topics: {
            where: { parentTopicId: null },
            select: {
              slug: true,
              title: true,
              textContent: true,
              _count: { select: { exampleProblems: true, flashcards: true, subtopics: true } },
            },
          },
        },
      },
    },
  })

  const pairs: Record<string, unknown>[] = []
  for (const course of courses) {
    const all = course.categories.flatMap((c) => c.topics.map((t) => ({ ...t, category: c.slug })))
    const toks = new Map(all.map((t) => [t.slug, tokens(t.title)]))
    for (let i = 0; i < all.length; i++) {
      for (let j = i + 1; j < all.length; j++) {
        const titleScore = similarity(toks.get(all[i].slug)!, toks.get(all[j].slug)!)
        // Only act on unmistakable concept duplication: the same title, or the
        // same slug once level markers are stripped. Looser title overlap
        // matched genuinely different lessons ("shell method" vs "washer
        // method"), so those are reported for review, never auto-handled.
        const sameConcept =
          conceptKey(all[i].slug) === conceptKey(all[j].slug) ||
          [...toks.get(all[i].slug)!].sort().join(' ') === [...toks.get(all[j].slug)!].sort().join(' ')
        if (!sameConcept) continue
        if (titleScore < 0.75) continue
        if (isTrackTwin(all[i].slug, all[j].slug)) continue
        // A track twin also collides with unrelated base topics by title alone
        // ("SAT Functions" vs "SAT Exponential Functions - Advanced"); those
        // belong to the track system too.
        if (TRACK_SUFFIX.test(all[i].slug) || TRACK_SUFFIX.test(all[j].slug)) continue
        // Only a pair of indexable pages can split a ranking signal.
        if (!isIndexable(all[i]) || !isIndexable(all[j])) continue
        const fmt = (t: (typeof all)[number]) => ({
          slug: t.slug,
          title: t.title,
          category: t.category,
          words: (t.textContent ?? '').split(/\s+/).filter(Boolean).length,
          chars: (t.textContent ?? '').trim().length,
          problems: t._count.exampleProblems,
          flashcards: t._count.flashcards,
          lesson: hasInteractiveLesson(t.slug),
        })
        const textScore = containment(shingles(all[i].textContent), shingles(all[j].textContent))
        pairs.push({
          course: course.slug,
          titleScore: Number(titleScore.toFixed(2)),
          textScore: Number(textScore.toFixed(2)),
          a: fmt(all[i]),
          b: fmt(all[j]),
        })
      }
    }
  }

  if (process.argv.includes('--json')) {
    console.log(JSON.stringify(pairs, null, 2))
    return
  }
  console.log(`${pairs.length} candidate duplicate pairs\n`)
  const byCourse = pairs.reduce<Record<string, typeof pairs>>((m, p) => {
    const k = p.course as string
    ;(m[k] ??= []).push(p)
    return m
  }, {})
  for (const [course, ps] of Object.entries(byCourse).sort((x, y) => y[1].length - x[1].length)) {
    console.log(`${course} (${ps.length})`)
    for (const p of ps) {
      const a = p.a as ReturnType<typeof Object>, b = p.b as ReturnType<typeof Object>
      const line = (t: Record<string, unknown>) =>
        `${t.slug} [${t.category}] ${t.words}w ${t.problems}p ${t.flashcards}f ${t.lesson ? 'LESSON' : 'no-lesson'}`
      console.log(`   title ${p.titleScore} / text ${p.textScore}  ${line(a as never)}\n          vs ${line(b as never)}`)
    }
  }
}

main().finally(() => prisma.$disconnect())
