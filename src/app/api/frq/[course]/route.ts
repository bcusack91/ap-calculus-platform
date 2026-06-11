import { NextResponse } from 'next/server'
import { getContentItems, CONTENT_TYPES } from '@/lib/content-store'
import { apMacroFRQs } from '@/data/ap-macro-frq/questions'
import { apMicroFRQs } from '@/data/ap-micro-frq/questions'
import { apCalcABFRQs } from '@/data/ap-calc-ab-frq/questions'
import { apCalcBCFRQs } from '@/data/ap-calc-bc-frq/questions'
import { apBioFRQs } from '@/data/ap-bio-frq/questions'
import { apUSHistoryFRQs } from '@/data/ap-us-history-frq/questions'
import { apWorldHistoryFRQs } from '@/data/ap-world-history-frq/questions'
import { apEngLangFRQs } from '@/data/ap-english-lang-frq/questions'
import { apEngLitFRQs } from '@/data/ap-english-lit-frq/questions'
import { apHumanGeoFRQs } from '@/data/ap-human-geo-frq/questions'
import { apCSAFRQs } from '@/data/ap-csa-frq/questions'
import { apUSGovFRQs } from '@/data/ap-us-gov-frq/questions'
import { apAPESFRQs } from '@/data/ap-enviro-frq/questions'
import { apAASFRQs } from '@/data/ap-african-american-studies-frq/questions'
import { getAllFRQs as getChemFRQs } from '@/data/ap-chem-frq/questions'
import { getPrecalcFRQs } from '@/data/ap-precalc-frq/questions'
import { getStatsFRQs } from '@/data/ap-stats-frq/questions'
import { getAllFRQs as getPhysCEMFRQs } from '@/data/ap-physics-c-em-frq/questions'
import { getAllFRQs as getPhysCMechFRQs } from '@/data/ap-physics-c-mech-frq/questions'
import { getPhysics1FRQs } from '@/data/ap-physics-1-frq/questions'
import { getPhysics2FRQs } from '@/data/ap-physics-2-frq/questions'
import { apPsychFRQs } from '@/data/ap-psych-frq/questions'

/**
 * GET /api/frq/:course — FRQ question pool for a course (#10, Tier-2).
 *
 * Reads FRQs from the content store (DB) with a static fallback to src/data, so
 * FRQs can be edited in the admin content editor without a deploy. Add courses
 * to FRQ_FALLBACK to extend; until a course is imported it transparently serves
 * the static pool.
 */
const FRQ_FALLBACK: Record<string, unknown[]> = {
  'ap-macro': apMacroFRQs,
  'ap-micro': apMicroFRQs,
  'ap-calc-ab': apCalcABFRQs,
  'ap-calc-bc': apCalcBCFRQs,
  'ap-bio': apBioFRQs,
  'ap-us-history': apUSHistoryFRQs,
  'ap-world-history': apWorldHistoryFRQs,
  'ap-english-lang': apEngLangFRQs,
  'ap-english-lit': apEngLitFRQs,
  'ap-human-geo': apHumanGeoFRQs,
  'ap-csa': apCSAFRQs,
  'ap-us-gov': apUSGovFRQs,
  'ap-enviro': apAPESFRQs,
  'ap-african-american-studies': apAASFRQs,
  'ap-chem': getChemFRQs(),
  'ap-precalc': getPrecalcFRQs(),
  'ap-stats': getStatsFRQs(),
  'ap-physics-c-em': getPhysCEMFRQs(),
  'ap-physics-c-mech': getPhysCMechFRQs(),
  'ap-physics-1': getPhysics1FRQs(),
  'ap-physics-2': getPhysics2FRQs(),
  'ap-psych': apPsychFRQs,
}

export async function GET(_req: Request, { params }: { params: Promise<{ course: string }> }) {
  const { course } = await params
  const fallback = FRQ_FALLBACK[course]
  if (!fallback) {
    return NextResponse.json({ error: 'Unknown course' }, { status: 404 })
  }
  const frqs = await getContentItems(CONTENT_TYPES.frq, course, fallback)
  return NextResponse.json({ frqs })
}
