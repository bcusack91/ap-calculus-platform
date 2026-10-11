import PsatPracticeClient from './PsatPracticeClient'

/**
 * /psat-practice — three adaptive Digital PSAT/NMSQT practice forms run by the
 * same SATFullTest runner as the SAT (two-stage routing, server grading on the
 * 160-760 PSAT curves, per-question review at /review/sat-practice/<id>).
 *
 * The page shell is static and personalization-free (safe to cache); the form
 * list, history and runner are client-side and sign-in gated. The old
 * non-adaptive generic exam (src/data/psat-practice/config.ts) is no longer
 * routed here; its data stays for prisma/import-practice.ts.
 */
export default function Page() {
  return <PsatPracticeClient />
}
