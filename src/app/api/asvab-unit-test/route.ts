import { unitTestStatusResponse } from '@/lib/unit-test-api'

/** The ASVAB cycle unit test's state for the signed-in student (see src/lib/unit-test-api.ts). */
export function GET() {
  return unitTestStatusResponse('asvab')
}
