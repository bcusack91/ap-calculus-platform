import { unitTestSubmitResponse } from '@/lib/unit-test-api'

/** Grade an MCAT cycle unit test sitting server-side. */
export function POST(req: Request) {
  return unitTestSubmitResponse('mcat', req)
}
