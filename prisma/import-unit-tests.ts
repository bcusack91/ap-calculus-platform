/**
 * One-time importer: copy static unit-test UNIT DEFINITIONS from
 * src/data/unit-tests into the ContentItem table (#10).
 *
 * Stores only the editable unit metadata (names, weights, descriptions,
 * topicSlugs, colors) — NOT the question pool, which stays referenced from
 * exit-quizzes (so nothing is duplicated). One row per course (key = "units").
 *
 * Idempotent: refreshes payload from the static source, preserves admin status.
 *
 * Stale rows: afterwards, every unit-test row of a course this script no
 * longer imports (a retired course, RETIRED_COURSES) is set to ARCHIVED
 * (reversible) and listed. Rows of other courses are listed and left alone.
 *
 *   npx tsx prisma/import-unit-tests.ts
 *   npx tsx prisma/import-unit-tests.ts --dry-run   # print what would change
 */
import type { Prisma } from '@prisma/client'
import { prisma } from '../src/lib/prisma'
import { CONTENT_TYPES, UNIT_TEST_UNITS_KEY } from '../src/lib/content-store'

import { ACT_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/act'
import { ALGEBRA_1_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/algebra-1'
import { ALGEBRA_2_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/algebra-2'
import { AP_AAS_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-african-american-studies'
import { AP_BIOLOGY_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-biology'
import { AP_CALCULUS_AB_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-calculus-ab'
import { AP_CALCULUS_BC_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-calculus-bc'
import { AP_CHEMISTRY_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-chemistry'
import { AP_CSA_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-computer-science-a'
import { AP_CSP_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-cs-principles'
import { AP_ENGLISH_LANG_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-english-language'
import { AP_ENGLISH_LIT_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-english-literature'
import { AP_ENVIRO_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-environmental-science'
import { AP_HUMAN_GEO_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-human-geography'
import { AP_MACRO_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-macroeconomics'
import { AP_MICRO_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-microeconomics'
import { AP_PHYSICS1_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-physics-1'
import { AP_PHYSICS2_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-physics-2'
import { AP_PHYSICS_C_EM_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-physics-c-em'
import { AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-physics-c-mechanics'
import { AP_PRECALCULUS_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-precalculus'
import { AP_PSYCHOLOGY_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-psychology'
import { AP_STATISTICS_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-statistics'
import { AP_US_GOV_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-us-government'
import { AP_US_HISTORY_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-us-history'
import { AP_WORLD_HISTORY_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-world-history'
import { GEOMETRY_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/geometry'
import { GRADE_8_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/grade-8-math'
import { MCAT_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/mcat'
import { OCHEM_1_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/organic-chemistry-1'
import { OCHEM_2_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/organic-chemistry-2'
import { PRE_ALGEBRA_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/pre-algebra'
import { PSAT_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/psat'
import { SAT_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/sat'

const CONFIGS = [
  ACT_UNIT_TESTS_CONFIG,
  ALGEBRA_1_UNIT_TESTS_CONFIG,
  ALGEBRA_2_UNIT_TESTS_CONFIG,
  AP_AAS_UNIT_TESTS_CONFIG,
  AP_BIOLOGY_UNIT_TESTS_CONFIG,
  AP_CALCULUS_AB_UNIT_TESTS_CONFIG,
  AP_CALCULUS_BC_UNIT_TESTS_CONFIG,
  AP_CHEMISTRY_UNIT_TESTS_CONFIG,
  AP_CSA_UNIT_TESTS_CONFIG,
  AP_CSP_UNIT_TESTS_CONFIG,
  AP_ENGLISH_LANG_UNIT_TESTS_CONFIG,
  AP_ENGLISH_LIT_UNIT_TESTS_CONFIG,
  AP_ENVIRO_UNIT_TESTS_CONFIG,
  AP_HUMAN_GEO_UNIT_TESTS_CONFIG,
  AP_MACRO_UNIT_TESTS_CONFIG,
  AP_MICRO_UNIT_TESTS_CONFIG,
  AP_PHYSICS1_UNIT_TESTS_CONFIG,
  AP_PHYSICS2_UNIT_TESTS_CONFIG,
  AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG,
  AP_PHYSICS_C_EM_UNIT_TESTS_CONFIG,
  AP_PRECALCULUS_UNIT_TESTS_CONFIG,
  AP_PSYCHOLOGY_UNIT_TESTS_CONFIG,
  AP_STATISTICS_UNIT_TESTS_CONFIG,
  AP_US_GOV_UNIT_TESTS_CONFIG,
  AP_US_HISTORY_UNIT_TESTS_CONFIG,
  AP_WORLD_HISTORY_UNIT_TESTS_CONFIG,
  GEOMETRY_UNIT_TESTS_CONFIG,
  GRADE_8_UNIT_TESTS_CONFIG,
  MCAT_UNIT_TESTS_CONFIG,
  OCHEM_1_UNIT_TESTS_CONFIG,
  OCHEM_2_UNIT_TESTS_CONFIG,
  PRE_ALGEBRA_UNIT_TESTS_CONFIG,
  PSAT_UNIT_TESTS_CONFIG,
  SAT_UNIT_TESTS_CONFIG,
]

/**
 * Courses whose unit-test pages were retired (their routes 308 to another
 * course, src/lib/retired-route-redirects.ts). No config any more, but their
 * rows must be ARCHIVED rather than left PUBLISHED.
 *   precalculus — the non-AP Precalculus track (Oct 2026), row key "units".
 */
const RETIRED_COURSES = ['precalculus']

async function main() {
  const dryRun = process.argv.includes('--dry-run')
  const type = CONTENT_TYPES.unitTestUnits
  const managedCourses = new Set([...CONFIGS.map((c) => c.courseSlug), ...RETIRED_COURSES])
  const existing = await prisma.contentItem.findMany({
    where: { type },
    select: { id: true, courseSlug: true, key: true, status: true, updatedAt: true },
  })
  const existingOf = new Set(existing.map((r) => `${r.courseSlug}/${r.key}`))

  let created = 0
  let updated = 0
  for (const config of CONFIGS) {
    if (dryRun) {
      if (existingOf.has(`${config.courseSlug}/${UNIT_TEST_UNITS_KEY}`)) updated++
      else created++
      continue
    }
    const payload = config.units as unknown as Prisma.InputJsonValue
    const res = await prisma.contentItem.upsert({
      where: {
        type_courseSlug_key: {
          type: CONTENT_TYPES.unitTestUnits,
          courseSlug: config.courseSlug,
          key: UNIT_TEST_UNITS_KEY,
        },
      },
      create: {
        type: CONTENT_TYPES.unitTestUnits,
        courseSlug: config.courseSlug,
        key: UNIT_TEST_UNITS_KEY,
        payload,
        status: 'PUBLISHED',
      },
      update: { payload, version: { increment: 1 } },
      select: { createdAt: true, updatedAt: true },
    })
    if (res.createdAt.getTime() === res.updatedAt.getTime()) created++
    else updated++
  }

  // Stale rows: a managed course that is no longer imported (a retired course).
  const importedCourses = new Set(CONFIGS.map((c) => c.courseSlug))
  const stale = existing.filter((r) => managedCourses.has(r.courseSlug) && !importedCourses.has(r.courseSlug) && r.status !== 'ARCHIVED')
  const unmanaged = existing.filter((r) => !managedCourses.has(r.courseSlug))
  if (stale.length && !dryRun) {
    await prisma.contentItem.updateMany({ where: { id: { in: stale.map((r) => r.id) } }, data: { status: 'ARCHIVED' } })
  }

  const verb = dryRun ? 'would be ' : ''
  console.log(`${dryRun ? '[dry run] ' : ''}Unit-test units across ${CONFIGS.length} courses — ${verb}created: ${created}, ${verb}updated: ${updated}`)
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
