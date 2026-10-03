import { unitTestSubmitResponse } from '@/lib/unit-test-api'

/** Grade an SAT cycle unit test sitting server-side. */
export function POST(req: Request) {
  return unitTestSubmitResponse('sat', req)
}
