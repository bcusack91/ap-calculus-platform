/**
 * Server half of the AP difficulty tracks (ap-track.ts): the student's
 * placement in a course, from their latest diagnostic there.
 */
import { prisma } from '@/lib/prisma'
import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'
import { apTrackFromResults, isApTrackCourse, type ApTrackPlacement } from '@/lib/ap-track'

/** The diagnostic category prefix of a track course (v2 sittings are `<prefix>-v2`, so they match too). */
export function apTrackCategoryPrefix(courseSlug: string): string | null {
  return CLASS_PLAN_COURSES.find((c) => c.courseSlug === courseSlug)?.categoryPrefix ?? null
}

/** The student's track in a course; null when the course has no tracks. */
export async function apTrackForUser(userId: string, courseSlug: string | null | undefined): Promise<ApTrackPlacement | null> {
  if (!isApTrackCourse(courseSlug)) return null
  const prefix = apTrackCategoryPrefix(courseSlug)
  if (!prefix) return null
  const latest = await prisma.diagnosticTest.findFirst({
    where: { userId, category: { startsWith: prefix } },
    orderBy: { createdAt: 'desc' },
    select: { results: true },
  })
  return apTrackFromResults(latest?.results ?? null)
}
