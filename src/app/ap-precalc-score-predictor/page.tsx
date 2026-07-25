import { redirect } from 'next/navigation'

/**
 * Legacy URL. The live AP Precalculus score predictor is
 * /ap-precalculus-score-predictor — which is what courseScorePredictorMap
 * points at, and the two pages had drifted apart (this one scored out of 5,
 * the live one out of 100). Redirect rather than delete so any existing
 * bookmark or inbound link still lands somewhere correct.
 */
export default function ApPrecalcScorePredictorRedirect() {
  redirect('/ap-precalculus-score-predictor')
}
