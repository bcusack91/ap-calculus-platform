import { unitTestStartResponse } from '@/lib/unit-test-api'

/** Start or resume a sitting of the SAT cycle unit test. */
export function POST() {
  return unitTestStartResponse('sat')
}
