/**
 * Verify seed flashcards BEFORE they touch a database.
 *
 * Replays the production render pipeline (formatFlashcardContent →
 * escapeCurrencyMath → math segmentation → KaTeX) on every card, exactly like
 * scripts/audit-flashcards.ts does for cards already in the DB — so we never
 * seed content with the rendering bugs that audit found.
 *
 * Also checks: slugs exist in the DB, targeted topics are genuinely empty,
 * duplicate fronts, and card length.
 *
 * Run: npx tsx scripts/verify-seed-flashcards.ts            (local)
 *      VERIFY_DB=prod npx tsx scripts/verify-seed-flashcards.ts
 */
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.join(process.cwd(), process.env.VERIFY_DB === 'prod' ? '.env' : '.env.local'), override: true })

import { PrismaClient } from '@prisma/client'
import katex from 'katex'
import { SEED_FLASHCARDS } from '../src/data/flashcards'
import { formatFlashcardContent } from '../src/lib/format-flashcard-content'
import { escapeCurrencyMath } from '../src/lib/escape-currency-math'

const prisma = new PrismaClient()
let errors = 0
let segments = 0

function checkSide(text: string, where: string) {
  if (!text || !text.trim()) { errors++; console.error(`  ✗ empty [${where}]`); return }
  let processed: string
  try {
    processed = escapeCurrencyMath(formatFlashcardContent(text))
  } catch (e) {
    errors++
    console.error(`  ✗ pipeline threw [${where}]: ${(e as Error).message}`)
    return
  }
  const unescaped = (processed.replace(/\\\$/g, '').match(/\$/g) ?? []).length
  if (unescaped % 2 === 1) {
    errors++
    console.error(`  ✗ unbalanced $ [${where}]: ${processed.slice(0, 90)}`)
  }
  // Display then inline math, mirroring remark-math.
  let rest = processed.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => { compile(m, where, true); return ' ' })
  rest.replace(/(?<!\\)\$((?:\\.|[^$\n])+?)(?<!\\)\$/g, (_, m) => { compile(m, where, false); return ' ' })
  // LaTeX commands surviving outside math mode render literally.
  const stray = rest.replace(/\$[^$]*\$/g, '').match(/\\(frac|sqrt|Delta|alpha|beta|pi|times|cdot|approx|leq|geq|neq|pm|infty|text|log|ln|sin|cos|tan|varepsilon|mu|lambda|omega|sigma|tau|rightleftharpoons|rightarrow|bar)\b/)
  if (stray) {
    errors++
    console.error(`  ✗ LaTeX outside math [${where}]: \\${stray[1]}`)
  }
}

function compile(seg: string, where: string, display: boolean) {
  segments++
  try {
    katex.renderToString(seg, { throwOnError: true, displayMode: display })
  } catch (e) {
    errors++
    console.error(`  ✗ KaTeX [${where}]: ${(e as Error).message.split('\n')[0].slice(0, 110)}`)
    console.error(`    ${seg.slice(0, 90)}`)
  }
}

async function main() {
  const slugs = Object.keys(SEED_FLASHCARDS)
  const totalCards = Object.values(SEED_FLASHCARDS).reduce((n, c) => n + c.length, 0)
  console.log(`Verifying ${totalCards} seed cards across ${slugs.length} topics…\n`)

  // Content checks
  const seenFronts = new Map<string, string>()
  for (const [slug, cards] of Object.entries(SEED_FLASHCARDS)) {
    if (cards.length === 0) { errors++; console.error(`  ✗ no cards for ${slug}`) }
    for (const c of cards) {
      checkSide(c.front, `${slug}/front`)
      checkSide(c.back, `${slug}/back`)
      if (c.front.length > 260) { errors++; console.error(`  ✗ front too long (${c.front.length}) [${slug}]`) }
      if (c.back.length > 700) { errors++; console.error(`  ✗ back too long (${c.back.length}) [${slug}]`) }
      const key = `${slug}::${c.front.trim().toLowerCase()}`
      if (seenFronts.has(key)) { errors++; console.error(`  ✗ duplicate front in ${slug}: ${c.front.slice(0, 60)}`) }
      seenFronts.set(key, slug)
    }
  }

  // DB checks
  const topics = await prisma.topic.findMany({
    where: { slug: { in: slugs } },
    select: { slug: true, _count: { select: { flashcards: true } } },
  })
  const found = new Set(topics.map((t) => t.slug))
  const missing = slugs.filter((s) => !found.has(s))
  if (missing.length > 0) {
    errors += missing.length
    console.error(`\n  ✗ ${missing.length} slug(s) not found in DB:`)
    for (const m of missing.slice(0, 15)) console.error(`      ${m}`)
  }
  const nonEmpty = topics.filter((t) => t._count.flashcards > 0)
  if (nonEmpty.length > 0) {
    console.log(`\n  ⚠ ${nonEmpty.length} target topic(s) already have cards (seeding will skip them):`)
    for (const t of nonEmpty.slice(0, 10)) console.log(`      ${t.slug} (${t._count.flashcards})`)
  }

  console.log(`\nMath segments KaTeX-compiled: ${segments}`)
  console.log(`Topics: ${slugs.length}  Cards: ${totalCards}  Avg/topic: ${(totalCards / slugs.length).toFixed(1)}`)
  await prisma.$disconnect()

  if (errors > 0) { console.error(`\n✗ ${errors} error(s).`); process.exit(1) }
  console.log('\n✓ All seed flashcards valid.')
}

main().catch((e) => { console.error(e); process.exit(1) })
