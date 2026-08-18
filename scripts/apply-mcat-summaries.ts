/**
 * F4: replace boilerplate MCAT subtopic textContent with agent-authored real
 * summaries — ONLY where the current content is still the generic template.
 *   PROD=1 [DRY_RUN=1] npx tsx scripts/apply-mcat-summaries.ts <dir>
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import fs from 'fs'
import { globSync } from 'glob'
import katex from 'katex'
import { PrismaClient } from '@prisma/client'

const DRY = !!process.env.DRY_RUN
const BOILER = /Why This Matters|This subtopic breaks down one high-yield part/

async function main() {
  const prisma = new PrismaClient()
  const files = globSync(`${process.argv[2] ?? '.'}/summaries-*.json`)
  console.log('files:', files.map(f => f.split('/').pop()).join(', ') || 'NONE')
  let updated = 0, skipped = 0, invalid = 0
  for (const file of files) {
    let rows: { slug: string; textContent: string }[]
    try { rows = JSON.parse(fs.readFileSync(file, 'utf8')) } catch (e) { console.log(`PARSE FAIL ${file}`); continue }
    for (const r of rows) {
      const text = String(r.textContent ?? '')
      if (!text.startsWith('# ') || !text.includes('## ') || text.length < 400) { invalid++; console.log('INVALID SHAPE:', r.slug); continue }
      let bad = false
      for (const seg of text.match(/\$\$?[^$]+\$\$?/g) ?? []) {
        try { katex.renderToString(seg.replace(/^\$\$?|\$\$?$/g, ''), { throwOnError: true }) } catch { bad = true; break }
      }
      if (bad) { invalid++; console.log('KATEX FAIL:', r.slug); continue }
      const t = await prisma.topic.findUnique({ where: { slug: r.slug }, select: { id: true, textContent: true } })
      if (!t) { console.log('UNKNOWN TOPIC:', r.slug); invalid++; continue }
      if (!BOILER.test(t.textContent ?? '')) { skipped++; continue }
      if (!DRY) await prisma.topic.update({ where: { id: t.id }, data: { textContent: text } })
      updated++
    }
  }
  console.log(`${DRY ? '[DRY RUN] ' : ''}updated: ${updated}, skipped(non-boilerplate): ${skipped}, invalid: ${invalid}`)
  await prisma.$disconnect()
}
main()
