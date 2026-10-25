/**
 * Importer: copy static full-length practice-exam configs from src/data/*-practice
 * into the ContentItem table (#10, Tier-2). The pages serve the PUBLISHED row
 * first (src/lib/content-store.ts), so data-file edits reach a database only
 * through this script.
 *
 * Each exam form is ONE row holding the whole config (exam metadata + embedded
 * MCQ/FRQ sections), which is how the page consumes it. Keys: form 1 = "exam"
 * (every course, unchanged since June 2026); AP forms 2 and 3 = "exam-2",
 * "exam-3" (every form in src/lib/ap-practice-exams.ts is imported).
 *
 * Idempotent: re-running refreshes each payload from the static source but
 * preserves any admin-set `status`. A row an admin edited (updatedBy set) is
 * skipped unless --overwrite-admin-edits is passed.
 *
 * Stale rows: afterwards, every remaining practice-exam row of a course this
 * script manages whose key it did not import this run (a removed form) is set
 * to ARCHIVED (reversible) and listed. Rows of other courses are listed and
 * left alone.
 *
 *   npx tsx prisma/import-practice.ts             # local DB (.env.local)
 *   npx tsx prisma/import-practice.ts --dry-run   # print what would change
 */
import type { Prisma } from '@prisma/client'
import { prisma } from '../src/lib/prisma'
import { CONTENT_TYPES, PRACTICE_EXAM_KEY } from '../src/lib/content-store'
import { AP_PRACTICE_EXAMS, apPracticeForms } from '../src/lib/ap-practice-exams'

// Non-AP full-length configs with the same whole-config shape (ACT splits
// MCQs by subject). One form each, key "exam".
import { config as act } from '../src/data/act-practice/config'
import { config as psat } from '../src/data/psat-practice/config'
import { config as asvab } from '../src/data/asvab-practice/config'

interface Source { courseSlug: string; key: string; label: string; load: () => Promise<unknown> }

/**
 * Courses whose practice pages were retired (their routes 308 to another
 * course, src/lib/retired-route-redirects.ts). They have no source any more,
 * but they stay "managed" so the stale-row pass ARCHIVES their rows instead
 * of listing them as unmanaged.
 *   precalculus — the non-AP Precalculus track (Oct 2026), row key "exam".
 */
const RETIRED_COURSES = ['precalculus']

/** Every row this script writes. courseSlug = the practice dir prefix (matches the read path). */
function sources(): Source[] {
  const ap = Object.keys(AP_PRACTICE_EXAMS).flatMap((examKey) =>
    apPracticeForms(examKey).map((f) => ({ courseSlug: examKey, key: f.contentKey, label: `${examKey} ${f.label}`, load: f.load as () => Promise<unknown> })),
  )
  return [
    ...ap,
    { courseSlug: 'act', key: PRACTICE_EXAM_KEY, label: 'act Form 1', load: async () => act },
    { courseSlug: 'psat', key: PRACTICE_EXAM_KEY, label: 'psat Form 1', load: async () => psat },
    { courseSlug: 'asvab', key: PRACTICE_EXAM_KEY, label: 'asvab Form 1', load: async () => asvab },
  ]
}

async function main() {
  const dryRun = process.argv.includes('--dry-run')
  const overwriteAdminEdits = process.argv.includes('--overwrite-admin-edits')
  const type = CONTENT_TYPES.practiceExam
  const list = sources()
  const imported = new Set(list.map((s) => `${s.courseSlug}/${s.key}`))
  const managedCourses = new Set([...list.map((s) => s.courseSlug), ...RETIRED_COURSES])
  const existing = await prisma.contentItem.findMany({
    where: { type },
    select: { id: true, courseSlug: true, key: true, status: true, updatedBy: true, updatedAt: true },
  })
  const existingOf = new Map(existing.map((r) => [`${r.courseSlug}/${r.key}`, r]))

  let created = 0
  let updated = 0
  const skipped: string[] = []
  for (const src of list) {
    const id = `${src.courseSlug}/${src.key}`
    const row = existingOf.get(id)
    if (row?.updatedBy && !overwriteAdminEdits) {
      skipped.push(`${id} (admin-edited by ${row.updatedBy} at ${row.updatedAt.toISOString()})`)
      continue
    }
    if (dryRun) {
      if (row) updated++
      else created++
      continue
    }
    const payload = (await src.load()) as Prisma.InputJsonValue
    await prisma.contentItem.upsert({
      where: { type_courseSlug_key: { type, courseSlug: src.courseSlug, key: src.key } },
      create: { type, courseSlug: src.courseSlug, key: src.key, payload, status: 'PUBLISHED' },
      update: { payload, version: { increment: 1 } },
      select: { id: true },
    })
    if (row) updated++
    else created++
  }

  // Stale rows: a managed course's key that is no longer imported (a removed form).
  const stale = existing.filter((r) => managedCourses.has(r.courseSlug) && !imported.has(`${r.courseSlug}/${r.key}`) && r.status !== 'ARCHIVED')
  const unmanaged = existing.filter((r) => !managedCourses.has(r.courseSlug))
  if (stale.length && !dryRun) {
    await prisma.contentItem.updateMany({ where: { id: { in: stale.map((r) => r.id) } }, data: { status: 'ARCHIVED' } })
  }

  const verb = dryRun ? 'would be ' : ''
  console.log(`${dryRun ? '[dry run] ' : ''}Practice-exam configs across ${managedCourses.size} courses (${list.length} forms) — ${verb}created: ${created}, ${verb}updated: ${updated}, skipped: ${skipped.length}`)
  for (const s of skipped) console.log(`  skipped (pass --overwrite-admin-edits to replace): ${s}`)
  console.log(`Stale rows ${verb}archived: ${stale.length}`)
  for (const r of stale) console.log(`  archived ${r.courseSlug}/${r.key} (was ${r.status}, updated ${r.updatedAt.toISOString()})`)
  if (unmanaged.length) {
    console.log(`Rows of courses this script does not manage, left alone: ${unmanaged.length}`)
    for (const r of unmanaged) console.log(`  ${r.courseSlug}/${r.key} (${r.status})`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
