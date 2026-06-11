/**
 * One-time importer: copy static full-length practice-exam configs from
 * src/data/*-practice into the ContentItem table (#10, Tier-2).
 *
 * Each course's config (exam metadata + embedded MCQ/FRQ sections) is stored as
 * ONE row (key = "exam"). Storing the whole config — which is how the page
 * consumes it — sidesteps the lack of per-question IDs entirely.
 *
 * Idempotent: re-running refreshes each config's payload from the static source
 * but preserves any admin-set `status`.
 *
 *   npx tsx prisma/import-practice.ts
 */
import type { Prisma } from '@prisma/client'
import { prisma } from '../src/lib/prisma'
import { CONTENT_TYPES, PRACTICE_EXAM_KEY } from '../src/lib/content-store'

import { config as aas } from '../src/data/ap-african-american-studies-practice/config'
import { config as bio } from '../src/data/ap-bio-practice/config'
import { config as calcab } from '../src/data/ap-calcab-practice/config'
import { config as calcbc } from '../src/data/ap-calcbc-practice/config'
import { config as chem } from '../src/data/ap-chem-practice/config'
import { config as csa } from '../src/data/ap-csa-practice/config'
import { config as englang } from '../src/data/ap-english-lang-practice/config'
import { config as englit } from '../src/data/ap-english-lit-practice/config'
import { config as enviro } from '../src/data/ap-enviro-practice/config'
import { config as humangeo } from '../src/data/ap-human-geo-practice/config'
import { config as macro } from '../src/data/ap-macro-practice/config'
import { config as micro } from '../src/data/ap-micro-practice/config'
import { config as physcem } from '../src/data/ap-physics-c-em-practice/config'
import { config as physcmech } from '../src/data/ap-physics-c-mech-practice/config'
import { config as phys1 } from '../src/data/ap-physics1-practice/config'
import { config as phys2 } from '../src/data/ap-physics2-practice/config'
import { config as precalc } from '../src/data/ap-precalc-practice/config'
import { config as psych } from '../src/data/ap-psych-practice/config'
import { config as stats } from '../src/data/ap-stats-practice/config'
// Same whole-config shape, different internal section composition (ACT splits
// MCQs by subject; history/gov use DBQ/LEQ/SAQ/argument essays).
import { config as act } from '../src/data/act-practice/config'
import { config as csp } from '../src/data/ap-csp-practice/config'
import { config as usgov } from '../src/data/ap-us-gov-practice/config'
import { config as ushistory } from '../src/data/ap-us-history-practice/config'
import { config as worldhistory } from '../src/data/ap-world-history-practice/config'
import { config as psat } from '../src/data/psat-practice/config'

// courseSlug = the practice dir prefix (matches the read path).
const SOURCES: { courseSlug: string; config: unknown }[] = [
  { courseSlug: 'ap-african-american-studies', config: aas },
  { courseSlug: 'ap-bio', config: bio },
  { courseSlug: 'ap-calcab', config: calcab },
  { courseSlug: 'ap-calcbc', config: calcbc },
  { courseSlug: 'ap-chem', config: chem },
  { courseSlug: 'ap-csa', config: csa },
  { courseSlug: 'ap-english-lang', config: englang },
  { courseSlug: 'ap-english-lit', config: englit },
  { courseSlug: 'ap-enviro', config: enviro },
  { courseSlug: 'ap-human-geo', config: humangeo },
  { courseSlug: 'ap-macro', config: macro },
  { courseSlug: 'ap-micro', config: micro },
  { courseSlug: 'ap-physics-c-em', config: physcem },
  { courseSlug: 'ap-physics-c-mech', config: physcmech },
  { courseSlug: 'ap-physics1', config: phys1 },
  { courseSlug: 'ap-physics2', config: phys2 },
  { courseSlug: 'ap-precalc', config: precalc },
  { courseSlug: 'ap-psych', config: psych },
  { courseSlug: 'ap-stats', config: stats },
  { courseSlug: 'act', config: act },
  { courseSlug: 'ap-csp', config: csp },
  { courseSlug: 'ap-us-gov', config: usgov },
  { courseSlug: 'ap-us-history', config: ushistory },
  { courseSlug: 'ap-world-history', config: worldhistory },
  { courseSlug: 'psat', config: psat },
]

async function main() {
  let created = 0
  let updated = 0
  for (const { courseSlug, config } of SOURCES) {
    const payload = config as Prisma.InputJsonValue
    const res = await prisma.contentItem.upsert({
      where: {
        type_courseSlug_key: {
          type: CONTENT_TYPES.practiceExam,
          courseSlug,
          key: PRACTICE_EXAM_KEY,
        },
      },
      create: {
        type: CONTENT_TYPES.practiceExam,
        courseSlug,
        key: PRACTICE_EXAM_KEY,
        payload,
        status: 'PUBLISHED',
      },
      update: { payload, version: { increment: 1 } },
      select: { createdAt: true, updatedAt: true },
    })
    if (res.createdAt.getTime() === res.updatedAt.getTime()) created++
    else updated++
  }
  console.log(`Practice-exam configs imported across ${SOURCES.length} courses — created: ${created}, updated: ${updated}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
