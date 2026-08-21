/**
 * Verified importer for agent-authored flashcard seed JSON files.
 * Gates (a card failing ANY gate is rejected, with reason):
 *  - topic slug exists
 *  - front 8-400 chars, back 3-700 chars
 *  - every $...$ / $$...$$ segment KaTeX-compiles (throwOnError)
 *  - no unicode superscript/subscript runs, no bare & or % inside math
 *  - cloze syntax balanced ({{c1::...}}), no nested/unclosed braces
 *  - not an exact or near duplicate (0.7 token overlap) of an existing card
 *    on the same topic, nor of an earlier card in the same import
 *   PROD=1 [DRY_RUN=1] npx tsx scripts/import-card-seeds.ts <glob-dir> <filePrefix>
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import fs from 'fs'
import { globSync } from 'glob'
import katex from 'katex'
import { PrismaClient } from '@prisma/client'

const DRY = !!process.env.DRY_RUN

function tokens(s: string): Set<string> {
  return new Set(s.toLowerCase().replace(/\{\{c\d+::|\}\}/g, ' ').replace(/\\[a-zA-Z]+/g, ' ').split(/[^a-z0-9]+/).filter(w => w.length >= 3))
}

/** Share of the shorter text's tokens that also appear in the other. */
function overlap(a: Set<string>, b: Set<string>): number {
  const smaller = Math.min(a.size, b.size)
  if (smaller < 4) return 0
  return [...a].filter((x) => b.has(x)).length / smaller
}

const FRONT_DUP_THRESHOLD = 0.7
/**
 * Backs need a higher bar than fronts. Answer text carries templated
 * scaffolding ("The 7 is being added, so undo it by subtracting 7 from both
 * sides") that two genuinely different answers still share, so 0.7 on a back
 * flags contrast pairs — add vs divide, shade above vs below, row vs column
 * total — that are the whole point of a basic-recall deck. A real duplicate
 * restates the same answer almost word for word and clears 0.85 easily.
 */
const BACK_DUP_THRESHOLD = 0.85

function validateText(text: string): string | null {
  if (/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻ₐ-ₜ₀-₉]/.test(text)) return 'unicode-super/subscript'
  for (const seg of text.match(/\$\$?[^$]+\$\$?/g) ?? []) {
    const inner = seg.replace(/^\$\$?|\$\$?$/g, '')
    if (/(?<!\\)[&%]/.test(inner)) return 'bare-&-or-%-in-math'
    try { katex.renderToString(inner, { throwOnError: true }) } catch (e) { return `katex: ${(e as Error).message.slice(0, 60)}` }
  }
  // Ordinary nested LaTeX ends in `}}` all the time (`\frac{a^{2}}{b^{3}}`),
  // so a closing run is no evidence of cloze syntax. Only a `{{` opener is —
  // gate the cloze checks on that, or every card with nested math is rejected.
  const opens = (text.match(/\{\{/g) ?? []).length
  if (opens > 0) {
    const closes = (text.match(/\}\}/g) ?? []).length
    if (opens !== closes) return 'unbalanced cloze braces'
    // Same capture as the runtime parser (src/lib/cloze-utils.ts): one level of
    // nested braces so LaTeX survives inside a deletion.
    if (!/\{\{(?:c\d+::)?(?:[^{}]|\{[^{}]*\})+\}\}/.test(text)) return 'malformed cloze'
  }
  return null
}

async function main() {
  const prisma = new PrismaClient()
  const dir = process.argv[2] ?? '.'
  const prefix = process.argv[3] ?? 'cards-'
  const files = globSync(`${dir}/${prefix}*.json`)
  console.log('files:', files.map(f => f.split('/').pop()).join(', ') || 'NONE')

  let inserted = 0, rejected = 0, cloze = 0
  const rejects: Record<string, number> = {}
  const perTopic: Record<string, number> = {}

  for (const file of files) {
    let cards: { topicSlug: string; front: string; back: string }[]
    try { cards = JSON.parse(fs.readFileSync(file, 'utf8')) } catch (e) { console.log(`PARSE FAIL ${file}: ${(e as Error).message.slice(0, 80)}`); continue }
    // group by topic for dup checks
    const byTopic = new Map<string, typeof cards>()
    for (const c of cards) byTopic.set(c.topicSlug, [...(byTopic.get(c.topicSlug) ?? []), c])
    for (const [slug, list] of byTopic) {
      const topic = await prisma.topic.findUnique({ where: { slug }, select: { id: true, flashcards: { select: { front: true, back: true } } } })
      if (!topic) { rejects['unknown-topic'] = (rejects['unknown-topic'] ?? 0) + list.length; rejected += list.length; console.log('UNKNOWN TOPIC:', slug); continue }
      const seen = topic.flashcards.map(c => ({ front: tokens(c.front), back: tokens(c.back) }))
      const exact = new Set(topic.flashcards.map(c => c.front.trim().toLowerCase()))
      const toInsert: { front: string; back: string }[] = []
      for (const c of list) {
        const front = String(c.front ?? '').trim(), back = String(c.back ?? '').trim()
        let reason: string | null = null
        if (front.length < 8 || front.length > 400) reason = 'front-length'
        else if (back.length < 3 || back.length > 700) reason = 'back-length'
        else if (exact.has(front.toLowerCase())) reason = 'exact-dup'
        else reason = validateText(front) ?? validateText(back)
        if (!reason) {
          // A real duplicate repeats the QUESTION AND THE ANSWER. Matching on
          // the front alone rejects minimal-pair cards — "when do you draw a
          // solid boundary line?" vs "...a dashed boundary line?" — whose one
          // differing word is the entire teaching point. Those share a front
          // but have opposite backs, so requiring both to match keeps them.
          const tkFront = tokens(front)
          const tkBack = tokens(back)
          for (const prev of seen) {
            if (overlap(tkFront, prev.front) >= FRONT_DUP_THRESHOLD && overlap(tkBack, prev.back) >= BACK_DUP_THRESHOLD) { reason = 'near-dup'; break }
          }
          if (!reason) { seen.push({ front: tkFront, back: tkBack }); exact.add(front.toLowerCase()) }
        }
        if (reason) { rejects[reason.split(':')[0]] = (rejects[reason.split(':')[0]] ?? 0) + 1; rejected++; if (reason.startsWith('katex')) console.log('  KATEX REJECT:', front.slice(0, 60), '|', reason) }
        else { toInsert.push({ front, back }); if (front.includes('{{')) cloze++ }
      }
      perTopic[slug] = (perTopic[slug] ?? 0) + toInsert.length
      inserted += toInsert.length
      if (!DRY && toInsert.length) {
        await prisma.flashcard.createMany({ data: toInsert.map(c => ({ topicId: topic.id, front: c.front, back: c.back, isPremium: false })) })
      }
    }
  }
  console.log(`\n${DRY ? '[DRY RUN] ' : ''}accepted: ${inserted} (cloze ${cloze}), rejected: ${rejected}`, rejects)
  for (const [slug, n] of Object.entries(perTopic).sort()) console.log(`  ${n}  ${slug}`)
  await prisma.$disconnect()
}
main()
