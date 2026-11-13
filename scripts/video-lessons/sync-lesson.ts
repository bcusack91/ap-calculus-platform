/**
 * Write (or refresh) a section-based website video lesson from its spec
 * (scripts/video-lessons/<name>-lesson.ts) and the section files under
 * public/video-lessons/<key>/c0N/ (their manifest.json carries each
 * section's length). Idempotent: clips are matched by their tags
 * (lesson-<key>, video-N, section-<id>), so re-running after the voiced cut
 * replaces the placeholders only updates lengths; student progress (keyed by
 * clip id) survives.
 *
 * Run through the per-lesson wrappers, which pick the spec:
 *
 *   npx tsx scripts/video-lessons/sync-circuits2.ts                    # dry run, local
 *   APPLY=1 npx tsx scripts/video-lessons/sync-circuits2.ts            # local writes
 *   SEED_DB=prod npx tsx scripts/video-lessons/sync-circuits2.ts       # dry run, prod
 *   SEED_DB=prod APPLY=1 npx tsx scripts/video-lessons/sync-circuits2.ts
 *
 * Run it AFTER the section files are deployed (the clips point at
 * /video-lessons/<key>/c0N/<section>.mp4 on the site).
 *
 * Only VOICED videos go into the live lesson: a video whose manifest is all
 * silent placeholders (no export cut yet) is left out, so students never sit
 * through silent clips and later videos are not locked behind them. Re-running
 * after a video's export is cut adds it back in its place. Set
 * INCLUDE_PLACEHOLDERS=1 to publish the silent placeholders too (local
 * structure testing).
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { Prisma, PrismaClient } from '@prisma/client'
import type { LessonSpec } from './lesson-spec'
import { isRecapSection } from '../../src/lib/video-lesson-core'
import { reviewCardsFor } from '../../src/data/video-lesson-flashcards'

const IS_PROD = process.env.SEED_DB === 'prod'
const APPLY = process.env.APPLY === '1'

type Manifest = { video: number; clips: { section: string; file: string; seconds: number; voiced: boolean }[] }

export async function syncLesson(LESSON: LessonSpec) {
  const host = (process.env.DATABASE_URL || '').replace(/.*@/, '').split('/')[0].split('?')[0]
  const isNeon = host.endsWith('neon.tech')
  console.log('DB:   ', IS_PROD ? 'PROD (.env)' : 'local (.env.local)', '->', host || '(DATABASE_URL not set)')
  console.log('Mode: ', APPLY ? 'APPLY' : 'dry run')
  if (!host) throw new Error('DATABASE_URL is empty after loading the env file')
  if (APPLY && IS_PROD && !isNeon) throw new Error(`Refusing to write: SEED_DB=prod but host ${host} is not the Neon production host`)
  if (APPLY && !IS_PROD && isNeon) throw new Error(`Refusing to write: host ${host} is the Neon production host but SEED_DB is not "prod"`)

  const prisma = new PrismaClient()
  const topic = await prisma.topic.findUnique({ where: { slug: LESSON.topicSlug }, select: { slug: true, title: true } })
  if (!topic) throw new Error(`topic ${LESSON.topicSlug} is not in this database`)

  // Section lengths from the manifests the encoder wrote.
  const seconds = new Map<string, { seconds: number; voiced: boolean }>()
  for (const v of LESSON.videos) {
    const path = join(process.cwd(), 'public', 'video-lessons', LESSON.key, `c${String(v.video).padStart(2, '0')}`, 'manifest.json')
    if (!existsSync(path)) throw new Error(`missing ${path}: run _manim/tools/web_clips.py for video ${v.video} first`)
    const m = JSON.parse(readFileSync(path, 'utf8')) as Manifest
    for (const c of m.clips) seconds.set(`${v.video}:${c.section}`, { seconds: c.seconds, voiced: c.voiced })
    for (const s of v.sections) if (!seconds.has(`${v.video}:${s.id}`)) throw new Error(`video ${v.video}: section ${s.id} is in the lesson spec but not in ${path}`)
  }

  // Standard: every video's recap section is preceded by that video's review flashcards.
  for (const v of LESSON.videos) {
    if (!v.sections.some((sec) => isRecapSection(sec.id))) continue
    const n = reviewCardsFor(LESSON.key, v.video)?.length ?? 0
    if (n < 3) throw new Error(`video ${v.video} has a recap section but ${n} review flashcards: add its deck to src/data/video-lesson-flashcards/${LESSON.key}.ts`)
  }

  // Instructor (the owner), linked to their account when it exists.
  const user = await prisma.user.findUnique({ where: { email: LESSON.instructor.email }, select: { id: true } })
  const existing = await prisma.instructor.findUnique({ where: { slug: LESSON.instructor.slug }, select: { id: true, userId: true } })
  const takenBy = user ? await prisma.instructor.findFirst({ where: { userId: user.id, NOT: { slug: LESSON.instructor.slug } }, select: { slug: true } }) : null
  const userId = user && !takenBy ? user.id : existing?.userId ?? null
  console.log(`Instructor ${LESSON.instructor.slug}: ${existing ? 'update' : 'create'}${userId ? ` (account ${LESSON.instructor.email})` : ' (no account linked)'}`)

  // A video is live once its export has been cut (any voiced section), or always with INCLUDE_PLACEHOLDERS=1.
  const INCLUDE_PLACEHOLDERS = process.env.INCLUDE_PLACEHOLDERS === '1'
  const liveVideos = LESSON.videos.filter(
    (v) => INCLUDE_PLACEHOLDERS || v.sections.some((s) => seconds.get(`${v.video}:${s.id}`)!.voiced),
  )
  let voicedCount = 0
  let total = 0
  for (const v of LESSON.videos) {
    const live = liveVideos.includes(v)
    for (const s of v.sections) {
      const d = seconds.get(`${v.video}:${s.id}`)!
      if (live) total++
      if (live && d.voiced) voicedCount++
      console.log(`  video ${v.video} · ${s.id.padEnd(16)} ${String(Math.round(d.seconds)).padStart(3)} s  ${s.role.padEnd(8)} ${s.questions?.length ?? 0} q${d.voiced ? '' : '  (silent placeholder)'}${live ? '' : '  -- NOT LIVE'}`)
    }
  }
  console.log(`${total} live sections, ${voicedCount} voiced${liveVideos.length < LESSON.videos.length ? `; left out until exported: video ${LESSON.videos.filter((v) => !liveVideos.includes(v)).map((v) => v.video).join(', ')}` : ''}`)
  if (liveVideos.length === 0) throw new Error('no video has a voiced export yet: nothing to publish (INCLUDE_PLACEHOLDERS=1 to publish the placeholders)')
  if (!APPLY) {
    console.log('Dry run: nothing written. Set APPLY=1 to write.')
    await prisma.$disconnect()
    return
  }

  const instructorData = {
    name: LESSON.instructor.name,
    headline: LESSON.instructor.headline,
    bio: LESSON.instructor.bio,
    photoUrl: LESSON.instructor.photoUrl ?? null,
    courses: LESSON.instructor.courses,
    isActive: true,
    ...(userId ? { userId } : {}),
  }
  const instructor = await prisma.instructor.upsert({
    where: { slug: LESSON.instructor.slug },
    update: instructorData,
    create: { slug: LESSON.instructor.slug, ...instructorData },
    select: { id: true },
  })

  const steps: { clipId: string; questions: CheckpointJson }[] = []
  for (const v of liveVideos) {
    for (const s of v.sections) {
      const tags = [`lesson-${LESSON.key}`, `video-${v.video}`, `section-${s.id}`, `role-${s.role}`]
      const d = seconds.get(`${v.video}:${s.id}`)!
      const data = {
        title: s.title,
        provider: 'FILE',
        providerId: `/video-lessons/${LESSON.key}/c${String(v.video).padStart(2, '0')}/${s.id}.mp4`,
        durationSec: Math.max(1, Math.round(d.seconds)),
        tags,
        status: 'APPROVED',
        approvedById: userId,
        approvedAt: new Date(),
      }
      const found = await prisma.videoClip.findFirst({
        where: { instructorId: instructor.id, tags: { hasEvery: [`lesson-${LESSON.key}`, `video-${v.video}`, `section-${s.id}`] } },
        select: { id: true },
      })
      const clip = found
        ? await prisma.videoClip.update({ where: { id: found.id }, data, select: { id: true } })
        : await prisma.videoClip.create({ data: { instructorId: instructor.id, ...data }, select: { id: true } })
      steps.push({ clipId: clip.id, questions: (s.questions ?? []) as CheckpointJson })
    }
  }

  const lesson = await prisma.videoLesson.upsert({
    where: { instructorId_topicSlug: { instructorId: instructor.id, topicSlug: LESSON.topicSlug } },
    update: { title: LESSON.title, courseSlug: LESSON.courseSlug, published: true, archived: false, version: { increment: 1 }, draft: Prisma.DbNull, draftState: null, reviewNote: null },
    create: { instructorId: instructor.id, topicSlug: LESSON.topicSlug, courseSlug: LESSON.courseSlug, title: LESSON.title, published: true, publishedAt: new Date(), version: 1 },
    select: { id: true, publishedAt: true },
  })
  if (!lesson.publishedAt) await prisma.videoLesson.update({ where: { id: lesson.id }, data: { publishedAt: new Date() } })
  await prisma.$transaction([
    prisma.videoLessonStep.deleteMany({ where: { lessonId: lesson.id } }),
    prisma.videoLessonStep.createMany({ data: steps.map((s, order) => ({ lessonId: lesson.id, order, clipId: s.clipId, questions: s.questions as Prisma.InputJsonValue })) }),
  ])
  console.log(`Lesson ${lesson.id}: ${steps.length} steps written and published.`)
  console.log(`Open: /topics/${LESSON.topicSlug}/video/${LESSON.instructor.slug}`)
  await prisma.$disconnect()
}

type CheckpointJson = Prisma.InputJsonValue
