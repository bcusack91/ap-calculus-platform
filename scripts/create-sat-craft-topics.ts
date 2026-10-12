/**
 * Idempotent data fix: create the Topic rows for the two SAT Craft and
 * Structure lessons added in October 2026:
 *
 *   sat-text-structure-purpose   Text Structure and Purpose
 *   sat-cross-text-connections   Cross-Text Connections
 *
 * Their interactive lessons, entrance quizzes and lesson-built exit pools are
 * keyed to these slugs, and the SAT diagnostic and Bluebook plan recommend
 * them, but without Topic rows /topics/<slug> 404s and plan-status cannot
 * clear them. Each row goes in the SAT Craft and Structure category
 * (`sat-craft-structure`; on a database that was never reorganized, the
 * category holding sat-vocabulary-context), ordered right after Vocabulary in
 * Context. Existing rows are left untouched unless REFRESH_TEXT=1. Safe to rerun.
 *
 *   npx tsx scripts/create-sat-craft-topics.ts            # local (.env.local)
 *   PROD=1 npx tsx scripts/create-sat-craft-topics.ts     # production (.env)
 *   REFRESH_TEXT=1 …                                       # also rewrite textContent on existing rows
 *
 * Without PROD=1 it refuses any database that is not on localhost.
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readdirSync } from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'
import { PrismaClient } from '@prisma/client'

/** slug → [title, description], in lesson order. */
export const SAT_CRAFT_TOPICS: Record<string, [string, string]> = {
  'sat-text-structure-purpose': [
    'Text Structure and Purpose',
    'Main purpose, overall structure, and the function of a sentence in short informational and literary texts.',
  ],
  'sat-cross-text-connections': [
    'Cross-Text Connections',
    'Paired texts: how one author would respond to another, where the authors agree, and where they differ.',
  ],
}

const CRAFT_CATEGORY = 'sat-craft-structure'
const ANCHOR_TOPIC = 'sat-vocabulary-context'
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '::1'])

/** Each part's summary section (or its intro when it has none), as the topic page's text. */
async function textContentFor(slug: string, title: string, description: string): Promise<string> {
  const dir = path.resolve('src/data/interactive-lessons')
  const re = new RegExp(`^sat-${slug}-sat-part(\\d+)\\.ts$`)
  const files = readdirSync(dir)
    .filter((f) => re.test(f))
    .sort((a, b) => Number(a.match(re)![1]) - Number(b.match(re)![1]))
  if (files.length === 0) throw new Error(`no lesson part files for ${slug}`)
  const chunks = [`# ${title}\n\n${description}`]
  for (const f of files) {
    const mod = await import(pathToFileURL(path.join(dir, f)).href)
    const data = Object.values(mod).find((v: unknown) => !!v && Array.isArray((v as { sections?: unknown }).sections)) as {
      sections: { id: string; type: string; content?: string }[]
    }
    const summary =
      data.sections.find((s) => s.type === 'text' && /summary/i.test(s.id)) ??
      data.sections.find((s) => s.type === 'text' && s.content)
    if (summary?.content) chunks.push(summary.content.trim())
  }
  return chunks.join('\n\n')
}

async function main() {
  const host = new URL(process.env.DATABASE_URL ?? '').hostname
  if (!process.env.PROD && !LOCAL_HOSTS.has(host)) {
    throw new Error(`refusing to write to non-local database host "${host}" without PROD=1`)
  }
  console.log(`target: ${process.env.PROD ? 'PROD' : 'local'} (${host})`)
  const prisma = new PrismaClient()
  try {
    const anchor = await prisma.topic.findUnique({
      where: { slug: ANCHOR_TOPIC },
      select: { order: true, categoryId: true, category: { select: { courseId: true } } },
    })
    if (!anchor) throw new Error(`anchor topic ${ANCHOR_TOPIC} not found`)
    const craft = await prisma.category.findUnique({ where: { slug: CRAFT_CATEGORY }, select: { id: true, courseId: true } })
    const categoryId = craft && craft.courseId === anchor.category.courseId ? craft.id : anchor.categoryId
    if (!craft) console.warn(`category ${CRAFT_CATEGORY} not found; using ${ANCHOR_TOPIC}'s category instead`)

    let created = 0, kept = 0, refreshed = 0
    let order = anchor.order
    for (const [slug, [title, description]] of Object.entries(SAT_CRAFT_TOPICS)) {
      order++
      const existing = await prisma.topic.findUnique({ where: { slug }, select: { id: true } })
      if (existing) {
        if (process.env.REFRESH_TEXT) {
          await prisma.topic.update({ where: { slug }, data: { textContent: await textContentFor(slug, title, description) } })
          refreshed++
        } else kept++
        continue
      }
      await prisma.topic.create({
        data: { slug, title, description, order, categoryId, textContent: await textContentFor(slug, title, description) },
      })
      created++
    }
    console.log(`created ${created}, already present ${kept}, text refreshed ${refreshed}`)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
