/**
 * (Re)generates stored slide decks for every topic of the given courses.
 *
 *   PROD=1 npx tsx scripts/generate-topic-slide-decks.ts mcat-prep sat-prep
 *   PROD=1 npx tsx scripts/generate-topic-slide-decks.ts mcat-prep --topic=mcat-cars-reasoning-mcat
 *
 * Idempotent — upserts by topicSlug. Rerun after lesson-content or flashcard
 * updates to refresh decks. Presenting uses the stored deck when one exists.
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'
import { generateSlideDeck, pollsInsideUnits } from '../src/lib/slide-deck'

const prisma = new PrismaClient()

async function main() {
  const courses = process.argv.slice(2).filter(a => !a.startsWith('-'))
  // --topic=<slug> (repeatable) regenerates only those topics of the course(s).
  const onlyTopics = new Set(process.argv.slice(2).filter(a => a.startsWith('--topic=')).map(a => a.slice('--topic='.length)))
  if (courses.length === 0) { console.log('usage: ... <courseSlug> [courseSlug…] [--topic=<slug>…]'); return }

  let made = 0, thin = 0, failed = 0
  for (const courseSlug of courses) {
    const course = await prisma.course.findUnique({
      where: { slug: courseSlug },
      select: { slug: true, name: true, categories: { select: { topics: { select: { slug: true, title: true } } } } },
    })
    if (!course) { console.log(`✗ no course: ${courseSlug}`); failed++; continue }
    const topics = course.categories.flatMap(c => c.topics).filter(t => onlyTopics.size === 0 || onlyTopics.has(t.slug))
    console.log(`\n${course.name}: ${topics.length} topics`)
    for (const t of topics) {
      try {
        const { title, slides } = await generateSlideDeck(t.slug)
        const pollCount = slides.filter(s => s.kind === 'poll').length
        const contentCount = slides.filter(s => s.kind === 'content').length
        if (slides[0]?.kind !== 'title' || slides[slides.length - 1]?.kind !== 'quiz' || contentCount === 0) {
          throw new Error(`malformed deck (${slides.map(s => s.kind[0]).join('')})`)
        }
        const interrupting = pollsInsideUnits(slides)
        if (interrupting.length) throw new Error(`poll inside a worked example at slide(s) ${interrupting.map(i => i + 1).join(', ')}`)
        await prisma.topicSlideDeck.upsert({
          where: { topicSlug: t.slug },
          create: { topicSlug: t.slug, courseSlug, title, slides: slides as object[], slideCount: slides.length, pollCount },
          update: { title, slides: slides as object[], slideCount: slides.length, pollCount, generatedAt: new Date() },
        })
        made++
        const marker = contentCount < 4 ? ' ⚠ thin' : ''
        if (contentCount < 4) thin++
        console.log(`  ✓ ${t.slug}: ${slides.length} slides (${contentCount} content, ${pollCount} polls)${marker}`)
      } catch (e) {
        failed++
        console.log(`  ✗ ${t.slug}: ${(e as Error).message.slice(0, 90)}`)
      }
    }
  }
  console.log(`\ndone: ${made} decks stored, ${thin} thin (<4 content slides), ${failed} failed`)
  if (failed > 0) process.exit(1)
}
main().finally(() => prisma.$disconnect())
