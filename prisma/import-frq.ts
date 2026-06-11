/**
 * One-time importer: copy static FRQ pools from src/data into the ContentItem
 * table (#10, Tier-2). One row per FRQ question (key = frq.id) so individual
 * questions can be edited / published / A-B tested in the admin content editor.
 *
 * Idempotent: re-running refreshes each FRQ's payload from the static source but
 * preserves any admin-set `status`. Covers the FRQ courses that share the
 * long/short shape. Add courses to SOURCES to extend.
 *
 *   npx tsx prisma/import-frq.ts
 */
import type { Prisma } from '@prisma/client'
import { prisma } from '../src/lib/prisma'
import { CONTENT_TYPES } from '../src/lib/content-store'
import { apMacroFRQs } from '../src/data/ap-macro-frq/questions'
import { apMicroFRQs } from '../src/data/ap-micro-frq/questions'
import { apCalcABFRQs } from '../src/data/ap-calc-ab-frq/questions'
import { apCalcBCFRQs } from '../src/data/ap-calc-bc-frq/questions'
import { apBioFRQs } from '../src/data/ap-bio-frq/questions'
import { apUSHistoryFRQs } from '../src/data/ap-us-history-frq/questions'
import { apWorldHistoryFRQs } from '../src/data/ap-world-history-frq/questions'
import { apEngLangFRQs } from '../src/data/ap-english-lang-frq/questions'
import { apEngLitFRQs } from '../src/data/ap-english-lit-frq/questions'
import { apHumanGeoFRQs } from '../src/data/ap-human-geo-frq/questions'
import { apCSAFRQs } from '../src/data/ap-csa-frq/questions'
import { apUSGovFRQs } from '../src/data/ap-us-gov-frq/questions'
import { apAPESFRQs } from '../src/data/ap-enviro-frq/questions'
import { apAASFRQs } from '../src/data/ap-african-american-studies-frq/questions'
// Heterogeneous courses (function-getter exports; several collide on getAllFRQs).
import { getAllFRQs as getChemFRQs } from '../src/data/ap-chem-frq/questions'
import { getPrecalcFRQs } from '../src/data/ap-precalc-frq/questions'
import { getStatsFRQs } from '../src/data/ap-stats-frq/questions'
import { getAllFRQs as getPhysCEMFRQs } from '../src/data/ap-physics-c-em-frq/questions'
import { getAllFRQs as getPhysCMechFRQs } from '../src/data/ap-physics-c-mech-frq/questions'
import { getPhysics1FRQs } from '../src/data/ap-physics-1-frq/questions'
import { getPhysics2FRQs } from '../src/data/ap-physics-2-frq/questions'
import { apPsychFRQs } from '../src/data/ap-psych-frq/questions'

// courseSlug matches the FRQ read-API key (the course dir prefix).
const SOURCES: { courseSlug: string; frqs: { id: string }[] }[] = [
  { courseSlug: 'ap-macro', frqs: apMacroFRQs },
  { courseSlug: 'ap-micro', frqs: apMicroFRQs },
  { courseSlug: 'ap-calc-ab', frqs: apCalcABFRQs },
  { courseSlug: 'ap-calc-bc', frqs: apCalcBCFRQs },
  { courseSlug: 'ap-bio', frqs: apBioFRQs },
  { courseSlug: 'ap-us-history', frqs: apUSHistoryFRQs },
  { courseSlug: 'ap-world-history', frqs: apWorldHistoryFRQs },
  { courseSlug: 'ap-english-lang', frqs: apEngLangFRQs },
  { courseSlug: 'ap-english-lit', frqs: apEngLitFRQs },
  { courseSlug: 'ap-human-geo', frqs: apHumanGeoFRQs },
  { courseSlug: 'ap-csa', frqs: apCSAFRQs },
  { courseSlug: 'ap-us-gov', frqs: apUSGovFRQs },
  { courseSlug: 'ap-enviro', frqs: apAPESFRQs },
  { courseSlug: 'ap-african-american-studies', frqs: apAASFRQs },
  { courseSlug: 'ap-chem', frqs: getChemFRQs() },
  { courseSlug: 'ap-precalc', frqs: getPrecalcFRQs() },
  { courseSlug: 'ap-stats', frqs: getStatsFRQs() },
  { courseSlug: 'ap-physics-c-em', frqs: getPhysCEMFRQs() },
  { courseSlug: 'ap-physics-c-mech', frqs: getPhysCMechFRQs() },
  { courseSlug: 'ap-physics-1', frqs: getPhysics1FRQs() },
  { courseSlug: 'ap-physics-2', frqs: getPhysics2FRQs() },
  { courseSlug: 'ap-psych', frqs: apPsychFRQs },
]

async function main() {
  let created = 0
  let updated = 0
  for (const { courseSlug, frqs } of SOURCES) {
    for (const frq of frqs) {
      const payload = frq as unknown as Prisma.InputJsonValue
      const res = await prisma.contentItem.upsert({
        where: { type_courseSlug_key: { type: CONTENT_TYPES.frq, courseSlug, key: frq.id } },
        create: { type: CONTENT_TYPES.frq, courseSlug, key: frq.id, payload, status: 'PUBLISHED' },
        update: { payload, version: { increment: 1 } },
        select: { createdAt: true, updatedAt: true },
      })
      if (res.createdAt.getTime() === res.updatedAt.getTime()) created++
      else updated++
    }
  }
  console.log(`FRQs imported across ${SOURCES.length} courses — created: ${created}, updated: ${updated}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
