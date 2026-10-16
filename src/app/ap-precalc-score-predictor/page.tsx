import { redirect } from 'next/navigation'

/**
 * Legacy URL. The live AP Precalculus score predictor is
 * /ap-precalculus-score-predictor — which is what courseScorePredictorMap
 * points at, and the two pages had drifted apart. The live one now scores on
 * the same 1-5 AP scale as every other AP predictor. Redirect rather than delete so any existing
 * bookmark or inbound link still lands somewhere correct.
 */
export default function ApPrecalcScorePredictorRedirect() {
  redirect('/ap-precalculus-score-predictor')
}
