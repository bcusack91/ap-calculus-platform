import { unitTestStartResponse } from '@/lib/unit-test-api'

/** Start or resume a sitting of the ASVAB cycle unit test. */
export function POST() {
  return unitTestStartResponse('asvab')
}
