/**
 * One-off (2026-11-13): three conceptual questions were added to the concept
 * videos' "Remember" sections of Circuits Part 1 and Part 2 (and one to Part
 * 2 video 3). Owner ruling: a student who had ALREADY passed a recap (watched
 * it) is exempt from that recap's new questions, so their later modules stay
 * open. One student, named by the owner, is not exempt and answers them all.
 *
 * Writes `{ exempt: true }` answer records (see AnsweredRecord) for the new
 * question indexes only, and never touches an index that already has a
 * record. Safe to run before the lesson sync (the indexes are simply unused
 * until the questions exist) and safe to re-run.
 *
 *   SEED_DB=prod NOT_EXEMPT=<userId> npx tsx scripts/video-lessons/exempt-recap-questions.ts            # dry run
 *   SEED_DB=prod NOT_EXEMPT=<userId> APPLY=1 npx tsx scripts/video-lessons/exempt-recap-questions.ts
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import { Prisma, PrismaClient } from '@prisma/client'
import { parseProgressSteps } from '../../src/lib/video-lesson-core'
import { isClipWatched } from '../../src/lib/video-watch'

const APPLY = process.env.APPLY === '1'
const NOT_EXEMPT = new Set((process.env.NOT_EXEMPT ?? '').split(',').map((s) => s.trim()).filter(Boolean))

/** lesson key → video → [recap section id, new question indexes]. */
const NEW: Record<string, Record<number, [string, number[]]>> = {
  'mcat-circ1': { 1: ['11-recap', [0, 1, 2]], 3: ['09-recap', [0, 1, 2]], 5: ['09-recap', [0, 1, 2]], 7: ['08-recap', [0, 1, 2]] },
  'mcat-circ2': { 1: ['08-recap', [0, 1, 2]], 3: ['08-recap', [2]], 5: ['08-recap', [0, 1, 2]], 7: ['12-recap', [0, 1, 2]] },
}

async function main() {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  console.log('DB:', process.env.SEED_DB === 'prod' ? 'PROD' : 'local', '->', host, '| mode:', APPLY ? 'APPLY' : 'dry run', '| not exempt:', [...NOT_EXEMPT].join(', ') || '(nobody)')
  const prisma = new PrismaClient()
  const at = new Date().toISOString()
  for (const [key, videos] of Object.entries(NEW)) {
    const targets: { clipId: string; durationSec: number; label: string; indexes: number[] }[] = []
    for (const [video, [section, indexes]] of Object.entries(videos)) {
      const clip = await prisma.videoClip.findFirst({ where: { tags: { hasEvery: [`lesson-${key}`, `video-${video}`, `section-${section}`] } }, select: { id: true, durationSec: true } })
      if (!clip) {
        if (process.env.SEED_DB === 'prod') throw new Error(`${key} video ${video} ${section}: clip not found`)
        console.log(`  (local: ${key} video ${video} ${section} is not in this database, skipped)`)
        continue
      }
      targets.push({ clipId: clip.id, durationSec: clip.durationSec, label: `v${video}`, indexes })
    }
    const rows = await prisma.videoLessonProgress.findMany({
      where: { lesson: { steps: { some: { clipId: { in: targets.map((t) => t.clipId) } } } } },
      select: { id: true, userId: true, steps: true, user: { select: { name: true } } },
    })
    console.log(`\n${key}: ${rows.length} students with progress`)
    for (const row of rows) {
      const steps = parseProgressSteps(row.steps)
      const first = (row.user.name ?? '?').split(' ')[0]
      if (NOT_EXEMPT.has(row.userId)) {
        console.log(`  ${first}: NOT exempt (owner ruling)`)
        continue
      }
      const done: string[] = []
      for (const t of targets) {
        const p = steps[t.clipId]
        if (!p || !isClipWatched(p.ranges ?? [], t.durationSec)) continue
        const answered = { ...(p.answered ?? {}) }
        let added = 0
        for (const i of t.indexes) {
          if (answered[String(i)]) continue
          answered[String(i)] = { correct: false, at, attempts: 2, exempt: true }
          added++
        }
        if (added) {
          steps[t.clipId] = { ...p, answered }
          done.push(`${t.label}(${added})`)
        }
      }
      console.log(`  ${first}: ${done.length ? `exempt on ${done.join(' ')}` : 'nothing to exempt'}`)
      if (APPLY && done.length) await prisma.videoLessonProgress.update({ where: { id: row.id }, data: { steps: steps as Prisma.InputJsonValue } })
    }
  }
  if (!APPLY) console.log('\nDry run: nothing written.')
  await prisma.$disconnect()
}
main().catch((e) => {
  console.error(e)
  process.exit(1)
})
