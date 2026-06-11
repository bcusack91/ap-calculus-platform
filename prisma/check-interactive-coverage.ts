import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

// We can't easily import the registry from a standalone script due to
// dynamic import() paths, so we'll extract the keys directly.
// Read the registry file and parse out all topic slugs.
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

function getRegistrySlugs(): Set<string> {
  const registryPath = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons', 'registry.ts')
  const content = fs.readFileSync(registryPath, 'utf-8')

  // Extract all keys from the registry object literal
  // Pattern: lines starting with  'some-slug': {
  const slugRegex = /^\s+'([a-z0-9][a-z0-9\-]*)'\s*:\s*\{/gm
  const slugs = new Set<string>()
  let match: RegExpExecArray | null
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.add(match[1])
  }
  return slugs
}

async function main() {
  const registrySlugs = getRegistrySlugs()
  console.log(`\n📚 Interactive Lesson Registry: ${registrySlugs.size} topic slugs registered\n`)

  // Query all topics with their category and course
  const topics = await prisma.topic.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      category: {
        select: {
          name: true,
          slug: true,
          course: {
            select: {
              name: true,
              slug: true,
              order: true,
            },
          },
        },
      },
    },
    orderBy: [
      { category: { course: { order: 'asc' } } },
      { category: { order: 'asc' } },
      { order: 'asc' },
    ],
  })

  const totalTopics = topics.length
  let withLesson = 0
  let withoutLesson = 0

  // Group missing topics by course
  const missingByCourse: Record<string, { courseName: string; topics: { title: string; slug: string; category: string }[] }> = {}
  // Also track covered by course for summary
  const coveredByCourse: Record<string, number> = {}

  for (const topic of topics) {
    const courseName = topic.category.course.name
    const courseSlug = topic.category.course.slug

    if (registrySlugs.has(topic.slug)) {
      withLesson++
      coveredByCourse[courseSlug] = (coveredByCourse[courseSlug] || 0) + 1
    } else {
      withoutLesson++
      if (!missingByCourse[courseSlug]) {
        missingByCourse[courseSlug] = { courseName, topics: [] }
      }
      missingByCourse[courseSlug].topics.push({
        title: topic.title,
        slug: topic.slug,
        category: topic.category.name,
      })
    }
  }

  // ── Summary ──
  console.log('═══════════════════════════════════════════════════════')
  console.log('              INTERACTIVE LESSON COVERAGE REPORT')
  console.log('═══════════════════════════════════════════════════════')
  console.log(`  Total topics in DB:                ${totalTopics}`)
  console.log(`  Topics WITH interactive lessons:    ${withLesson}`)
  console.log(`  Topics WITHOUT interactive lessons: ${withoutLesson}`)
  console.log(`  Coverage:                           ${((withLesson / totalTopics) * 100).toFixed(1)}%`)
  console.log('═══════════════════════════════════════════════════════\n')

  // ── Per-course summary table ──
  console.log('┌─────────────────────────────────────────┬────────┬──────────┬─────────┐')
  console.log('│ Course                                  │ Total  │ Covered  │ Missing │')
  console.log('├─────────────────────────────────────────┼────────┼──────────┼─────────┤')

  // Collect all unique course slugs in order
  const courseOrder: string[] = []
  const courseNames: Record<string, string> = {}
  const totalByCourse: Record<string, number> = {}
  for (const topic of topics) {
    const cs = topic.category.course.slug
    const cn = topic.category.course.name
    if (!courseNames[cs]) {
      courseOrder.push(cs)
      courseNames[cs] = cn
    }
    totalByCourse[cs] = (totalByCourse[cs] || 0) + 1
  }

  for (const cs of courseOrder) {
    const total = totalByCourse[cs] || 0
    const covered = coveredByCourse[cs] || 0
    const missing = total - covered
    const name = courseNames[cs].padEnd(39)
    console.log(`│ ${name} │ ${String(total).padStart(6)} │ ${String(covered).padStart(8)} │ ${String(missing).padStart(7)} │`)
  }
  console.log('└─────────────────────────────────────────┴────────┴──────────┴─────────┘\n')

  // ── Detailed missing list ──
  console.log('═══════════════════════════════════════════════════════')
  console.log('       MISSING INTERACTIVE LESSONS BY COURSE')
  console.log('═══════════════════════════════════════════════════════\n')

  for (const cs of courseOrder) {
    const entry = missingByCourse[cs]
    if (!entry || entry.topics.length === 0) {
      console.log(`✅ ${courseNames[cs]} — ALL topics covered!\n`)
      continue
    }
    console.log(`❌ ${entry.courseName} (${entry.topics.length} missing):`)

    // Group by category within the course
    const byCategory: Record<string, { title: string; slug: string }[]> = {}
    for (const t of entry.topics) {
      if (!byCategory[t.category]) byCategory[t.category] = []
      byCategory[t.category].push({ title: t.title, slug: t.slug })
    }

    for (const [cat, items] of Object.entries(byCategory)) {
      console.log(`   📂 ${cat}:`)
      for (const item of items) {
        console.log(`      • ${item.title}  [${item.slug}]`)
      }
    }
    console.log()
  }

  // ── Registry slugs not found in DB (orphans) ──
  const dbSlugs = new Set(topics.map(t => t.slug))
  const orphanSlugs = [...registrySlugs].filter(s => !dbSlugs.has(s))
  if (orphanSlugs.length > 0) {
    console.log('═══════════════════════════════════════════════════════')
    console.log('  ⚠️  REGISTRY SLUGS NOT FOUND IN DATABASE (orphans)')
    console.log('═══════════════════════════════════════════════════════')
    for (const s of orphanSlugs.sort()) {
      console.log(`   • ${s}`)
    }
    console.log(`\n  Total orphan slugs: ${orphanSlugs.length}\n`)
  }
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
