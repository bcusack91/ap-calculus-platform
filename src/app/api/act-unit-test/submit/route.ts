import { unitTestSubmitResponse } from '@/lib/unit-test-api'

/** Grade an ACT cycle unit test sitting server-side. */
export function POST(req: Request) {
  return unitTestSubmitResponse('act', req)
}
