/**
 * Idempotent prod migration: video lessons (Instructor, VideoClip, VideoLesson,
 * VideoLessonStep, VideoLessonProgress, UserInstructorChoice), the
 * User.preferredLessonFormat column, the VIDEO activity surface and the
 * VIDEO_CHECK question source.
 *
 * Deploys do NOT migrate the production database (CI's migrate step hits a
 * throwaway DB), so this applies the same DDL as
 * prisma/migrations/20261030000000_video_lessons by hand. Safe to rerun. Each
 * statement runs on its own: ALTER TYPE … ADD VALUE can't run inside a
 * transaction. Run it BEFORE deploying code that reads these tables — every
 * User query selects preferredLessonFormat once the client is regenerated.
 *
 *   PROD=1 npx tsx scripts/apply-video-lessons-migration.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const sql = readFileSync(join(__dirname, '../prisma/migrations/20261030000000_video_lessons/migration.sql'), 'utf8')
  for (const stmt of sql.split(/\n\s*\n/).map((s) => s.replace(/^--.*$/gm, '').trim()).filter(Boolean)) {
    await prisma.$executeRawUnsafe(stmt)
  }
  const tables = await prisma.$queryRawUnsafe<{ table_name: string }[]>(
    `SELECT table_name FROM information_schema.tables WHERE table_name IN
     ('Instructor','VideoClip','VideoLesson','VideoLessonStep','VideoLessonProgress','UserInstructorChoice')`,
  )
  const col = await prisma.$queryRawUnsafe<{ n: bigint }[]>(
    `SELECT count(*) AS n FROM information_schema.columns WHERE table_name = 'User' AND column_name = 'preferredLessonFormat'`,
  )
  const enumVals = await prisma.$queryRawUnsafe<{ t: string; v: string }[]>(
    `SELECT t.typname AS t, e.enumlabel AS v FROM pg_enum e JOIN pg_type t ON t.oid = e.enumtypid
     WHERE t.typname IN ('QuestionSource','ActivitySurface')`,
  )
  const hasEnums = enumVals.some((e) => e.t === 'QuestionSource' && e.v === 'VIDEO_CHECK') && enumVals.some((e) => e.t === 'ActivitySurface' && e.v === 'VIDEO')
  console.log(`video lessons: ${tables.length}/6 tables, preferredLessonFormat ${Number(col[0]?.n ?? 0) ? 'ready' : 'MISSING'}, enum values ${hasEnums ? 'ready' : 'MISSING'} (${process.env.PROD ? 'PROD' : 'local'})`)
  await prisma.$disconnect()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
