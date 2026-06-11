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
 *   npx tsx prisma/import-unit-tests.ts
 */
import type { Prisma } from '@prisma/client'
import { prisma } from '../src/lib/prisma'
import { CONTENT_TYPES, UNIT_TEST_UNITS_KEY } from '../src/lib/content-store'

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
import { AP_PRECALCULUS_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-precalculus'
import { AP_PSYCHOLOGY_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-psychology'
import { AP_STATISTICS_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-statistics'
import { AP_US_GOV_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-us-government'
import { AP_US_HISTORY_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-us-history'
import { AP_WORLD_HISTORY_UNIT_TESTS_CONFIG } from '../src/data/unit-tests/ap-world-history'

const CONFIGS = [
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
  AP_PRECALCULUS_UNIT_TESTS_CONFIG,
  AP_PSYCHOLOGY_UNIT_TESTS_CONFIG,
  AP_STATISTICS_UNIT_TESTS_CONFIG,
  AP_US_GOV_UNIT_TESTS_CONFIG,
  AP_US_HISTORY_UNIT_TESTS_CONFIG,
  AP_WORLD_HISTORY_UNIT_TESTS_CONFIG,
]

async function main() {
  let created = 0
  let updated = 0
  for (const config of CONFIGS) {
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
  console.log(`Unit-test units imported across ${CONFIGS.length} courses — created: ${created}, updated: ${updated}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
