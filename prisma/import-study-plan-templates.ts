/**
 * One-time importer: copy static study-plan templates from `src/data/*` into the
 * `ContentItem` table so they can be edited in the DB (#10).
 *
 * Idempotent: re-running refreshes each template's payload from the static
 * source but preserves any admin-set `status`. courseSlug MUST match the value
 * the read path uses (the adopt route's `courseSlug`).
 *
 *   npx tsx prisma/import-study-plan-templates.ts
 */
import type { Prisma } from '@prisma/client'
import { prisma } from '../src/lib/prisma'
import { CONTENT_TYPES } from '../src/lib/content-store'
import type { StudyPlanTemplate } from '../src/lib/study-plan-utils'

import { ACT_PLANS } from '../src/data/act-study-plans'
import { AP_AAS_PLANS } from '../src/data/ap-african-american-studies-study-plans'
import { AP_BIO_PLANS } from '../src/data/ap-bio-study-plans'
import { AP_CALCAB_PLANS } from '../src/data/ap-calcab-study-plans'
import { AP_CALCBC_PLANS } from '../src/data/ap-calcbc-study-plans'
import { AP_CHEM_PLANS } from '../src/data/ap-chem-study-plans'
import { AP_CSA_PLANS } from '../src/data/ap-csa-study-plans'
import { AP_CSP_PLANS } from '../src/data/ap-csp-study-plans'
import { AP_ENG_LANG_PLANS } from '../src/data/ap-english-lang-study-plans'
import { AP_ENG_LIT_PLANS } from '../src/data/ap-english-lit-study-plans'
import { AP_ENVIRO_PLANS } from '../src/data/ap-enviro-study-plans'
import { AP_HUMAN_GEO_PLANS } from '../src/data/ap-human-geo-study-plans'
import { AP_MACRO_PLANS } from '../src/data/ap-macro-study-plans'
import { AP_MICRO_PLANS } from '../src/data/ap-micro-study-plans'
import { AP_PHYSICS1_PLANS } from '../src/data/ap-physics1-study-plans'
import { AP_PHYSICS2_PLANS } from '../src/data/ap-physics2-study-plans'
import { AP_PSYCH_PLANS } from '../src/data/ap-psych-study-plans'
import { AP_STATS_PLANS } from '../src/data/ap-stats-study-plans'
import { AP_US_GOV_PLANS } from '../src/data/ap-us-gov-study-plans'
import { AP_US_HISTORY_PLANS } from '../src/data/ap-us-history-study-plans'
import { AP_WORLD_HISTORY_PLANS } from '../src/data/ap-world-history-study-plans'

// Math-ladder courses (lessons + diagnostics + flashcards, now with study plans).
import { ALGEBRA1_PLANS } from '../src/data/algebra1-study-plans'
import { ALGEBRA2_PLANS } from '../src/data/algebra2-study-plans'
import { GEOMETRY_PLANS } from '../src/data/geometry-study-plans'
import { PREALGEBRA_PLANS } from '../src/data/prealgebra-study-plans'
import { GRADE8_MATH_PLANS } from '../src/data/grade8-math-study-plans'
import { PRECALCULUS_PLANS } from '../src/data/precalculus-study-plans'

// courseSlug MUST match the adopt route's courseSlug for each course.
const SOURCES: { courseSlug: string; plans: StudyPlanTemplate[] }[] = [
  { courseSlug: 'act-prep', plans: ACT_PLANS },
  { courseSlug: 'ap-african-american-studies', plans: AP_AAS_PLANS },
  { courseSlug: 'ap-biology', plans: AP_BIO_PLANS },
  { courseSlug: 'ap-calculus-ab', plans: AP_CALCAB_PLANS },
  { courseSlug: 'ap-calculus-bc', plans: AP_CALCBC_PLANS },
  { courseSlug: 'ap-chemistry', plans: AP_CHEM_PLANS },
  { courseSlug: 'ap-computer-science-a', plans: AP_CSA_PLANS },
  { courseSlug: 'ap-computer-science-principles', plans: AP_CSP_PLANS },
  { courseSlug: 'ap-english-language', plans: AP_ENG_LANG_PLANS },
  { courseSlug: 'ap-english-literature', plans: AP_ENG_LIT_PLANS },
  { courseSlug: 'ap-environmental-science', plans: AP_ENVIRO_PLANS },
  { courseSlug: 'ap-human-geography', plans: AP_HUMAN_GEO_PLANS },
  { courseSlug: 'ap-macroeconomics', plans: AP_MACRO_PLANS },
  { courseSlug: 'ap-microeconomics', plans: AP_MICRO_PLANS },
  { courseSlug: 'ap-physics-1', plans: AP_PHYSICS1_PLANS },
  { courseSlug: 'ap-physics-2', plans: AP_PHYSICS2_PLANS },
  { courseSlug: 'ap-psychology', plans: AP_PSYCH_PLANS },
  { courseSlug: 'ap-statistics', plans: AP_STATS_PLANS },
  { courseSlug: 'ap-us-government', plans: AP_US_GOV_PLANS },
  { courseSlug: 'ap-us-history', plans: AP_US_HISTORY_PLANS },
  { courseSlug: 'ap-world-history', plans: AP_WORLD_HISTORY_PLANS },
  // Math-ladder courses (slugs match course-metadata.ts).
  { courseSlug: 'pre-algebra', plans: PREALGEBRA_PLANS },
  { courseSlug: 'algebra-1', plans: ALGEBRA1_PLANS },
  { courseSlug: 'algebra-2', plans: ALGEBRA2_PLANS },
  { courseSlug: 'geometry', plans: GEOMETRY_PLANS },
  { courseSlug: 'grade-8-math', plans: GRADE8_MATH_PLANS },
  { courseSlug: 'precalculus', plans: PRECALCULUS_PLANS },
]

async function main() {
  let created = 0
  let updated = 0
  for (const { courseSlug, plans } of SOURCES) {
    for (const plan of plans) {
      const payload = plan as unknown as Prisma.InputJsonValue
      const res = await prisma.contentItem.upsert({
        where: {
          type_courseSlug_key: { type: CONTENT_TYPES.studyPlanTemplate, courseSlug, key: plan.id },
        },
        create: {
          type: CONTENT_TYPES.studyPlanTemplate,
          courseSlug,
          key: plan.id,
          payload,
          status: 'PUBLISHED',
        },
        update: { payload, version: { increment: 1 } },
        select: { createdAt: true, updatedAt: true },
      })
      if (res.createdAt.getTime() === res.updatedAt.getTime()) created++
      else updated++
    }
  }
  console.log(`Study-plan templates imported across ${SOURCES.length} courses — created: ${created}, updated: ${updated}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
