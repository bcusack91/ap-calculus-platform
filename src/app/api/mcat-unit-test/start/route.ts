import { unitTestStartResponse } from '@/lib/unit-test-api'

/** Start or resume a sitting of the MCAT cycle unit test. */
export function POST() {
  return unitTestStartResponse('mcat')
}
