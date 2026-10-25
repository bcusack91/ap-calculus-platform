import { unitTestSubmitResponse } from '@/lib/unit-test-api'

/** Grade an ASVAB cycle unit test sitting server-side. */
export function POST(req: Request) {
  return unitTestSubmitResponse('asvab', req)
}
