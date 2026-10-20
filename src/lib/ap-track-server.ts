/**
 * Server half of the AP difficulty tracks (ap-track.ts): the student's
 * placement in a course — a teacher's override (ApTrackOverride) when one is
 * set, else the track computed from their latest diagnostic there.
 */
import { prisma } from '@/lib/prisma'
import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'
import { apTrackPlacement, isApTrackCourse, parseApTrack, type ApTrack, type ApTrackPlacement } from '@/lib/ap-track'

/** The diagnostic category prefix of a track course (v2 sittings are `<prefix>-v2`, so they match too). */
export function apTrackCategoryPrefix(courseSlug: string): string | null {
  return CLASS_PLAN_COURSES.find((c) => c.courseSlug === courseSlug)?.categoryPrefix ?? null
}

/**
 * Override reads fail SOFT: the student falls back to automatic placement and
 * the error is logged. Deploys do not migrate the production database (see
 * scripts/apply-ap-track-override-migration.ts), and a missing table must not
 * take the study plan, every lesson's settings and exit-quiz submission down
 * with it.
 */
async function softly<T>(what: string, fallback: T, read: () => Promise<T>): Promise<T> {
  try {
    return await read()
  } catch (err) {
    console.error(`[ap-track] ${what} failed (automatic placement used):`, err)
    return fallback
  }
}

/**
 * Teacher overrides for a set of students in a course, as userId → track.
 * One query for a whole roster; students without a row are placed automatically.
 */
export async function apTrackOverridesFor(userIds: readonly string[], courseSlug: string): Promise<Map<string, ApTrack>> {
  const out = new Map<string, ApTrack>()
  if (userIds.length === 0 || !isApTrackCourse(courseSlug)) return out
  return softly('roster override lookup', out, async () => {
    const rows = await prisma.apTrackOverride.findMany({
      where: { userId: { in: [...userIds] }, courseSlug },
      select: { userId: true, track: true },
    })
    for (const r of rows) {
      const track = parseApTrack(r.track)
      if (track) out.set(r.userId, track)
    }
    return out
  })
}

/** One student's teacher override in one course, or null (automatic placement / not a track course). */
export async function apTrackOverrideFor(userId: string, courseSlug: string | null | undefined): Promise<ApTrack | null> {
  if (!isApTrackCourse(courseSlug)) return null
  return softly('override lookup', null, async () => {
    const row = await prisma.apTrackOverride.findUnique({
      where: { userId_courseSlug: { userId, courseSlug } },
      select: { track: true },
    })
    return parseApTrack(row?.track)
  })
}

/** One student's teacher overrides across every track course, as courseSlug → track. */
export async function apTrackOverridesForUser(userId: string): Promise<Map<string, ApTrack>> {
  const out = new Map<string, ApTrack>()
  return softly('override lookup', out, async () => {
    const rows = await prisma.apTrackOverride.findMany({ where: { userId }, select: { courseSlug: true, track: true } })
    for (const r of rows) {
      const track = parseApTrack(r.track)
      if (track && isApTrackCourse(r.courseSlug)) out.set(r.courseSlug, track)
    }
    return out
  })
}

/**
 * The student's track in a course; null when the course has no tracks. The
 * override and the latest diagnostic are read together (two cheap indexed
 * lookups in parallel); the override wins when present.
 */
export async function apTrackForUser(userId: string, courseSlug: string | null | undefined): Promise<ApTrackPlacement | null> {
  if (!isApTrackCourse(courseSlug)) return null
  const prefix = apTrackCategoryPrefix(courseSlug)
  if (!prefix) return null
  const [override, latest] = await Promise.all([
    apTrackOverrideFor(userId, courseSlug),
    prisma.diagnosticTest.findFirst({
      where: { userId, category: { startsWith: prefix } },
      orderBy: { createdAt: 'desc' },
      select: { results: true },
    }),
  ])
  return apTrackPlacement(latest?.results ?? null, override)
}

/**
 * The course a lesson topic belongs to, as the interactive lesson page derives
 * it (Topic → Category → Course), so the server and the lesson agree on which
 * track applies to an exit quiz. Null for an unknown topic.
 */
export async function courseSlugForTopic(topicSlug: string): Promise<string | null> {
  const topic = await prisma.topic.findUnique({
    where: { slug: topicSlug },
    select: { category: { select: { course: { select: { slug: true } } } } },
  })
  return topic?.category?.course?.slug ?? null
}
