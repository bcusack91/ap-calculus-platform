// @vitest-environment jsdom
/**
 * Cross-device "seen question" memory for the self-serve MCAT/SAT diagnostics.
 *
 * The browser's localStorage list is merged with keys the server recovers
 * from the student's SUBMITTED attempts (`results.review.questions[]`), so a
 * retake from a new device (empty localStorage) still excludes every item the
 * student was served before. Covers: the pure result-parsing helpers, both
 * /seen routes (mocked prisma/auth), the client helper's merge/fallback/cap
 * behaviour, and an end-to-end new-device simulation through the REAL
 * generators proving zero repeats.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// --------------- Mocks ---------------
const mockAuth = vi.fn()
const mockFindMany = vi.fn()
const mockWrite = vi.fn()

vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    diagnosticTest: {
      findMany: (...args: unknown[]) => mockFindMany(...args),
      create: (...args: unknown[]) => mockWrite(...args),
      update: (...args: unknown[]) => mockWrite(...args),
      updateMany: (...args: unknown[]) => mockWrite(...args),
    },
    user: { update: (...args: unknown[]) => mockWrite(...args) },
  },
}))

import {
  loadSeenKeys,
  recordSeenKeys,
  reviewQuestionsFromResults,
  validateSeenKeysBody,
  LOCAL_CAP,
  SEEN_KEYS_MAX_PER_REQUEST,
} from '@/lib/diagnostic-seen'
import { GET as mcatGET, POST as mcatPOST } from '@/app/api/mcat-diagnostic/seen/route'
import { GET as satGET, POST as satPOST } from '@/app/api/sat-diagnostic/seen/route'
import { generateMCATDiagnosticTest } from '@/data/mcat-practice/diagnostic-generator'
import { generateDiagnosticTest, seenKeysForQuestion } from '@/data/sat-practice/diagnostic-generator'

const MCAT_LOCAL = 'mcat-diagnostic-seen-v1'
const SAT_LOCAL = 'sat-diagnostic-seen-v1'

const jsonRes = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } })

/** Prisma Json round-trip: drops `undefined` fields exactly like the DB does. */
const roundTrip = <T,>(v: T): T => JSON.parse(JSON.stringify(v))

const postReq = (body: unknown, raw = false) =>
  new Request('http://localhost/api/x/seen', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: raw ? (body as string) : JSON.stringify(body),
  })

beforeEach(() => {
  vi.clearAllMocks()
  window.localStorage.clear()
})
afterEach(() => {
  vi.unstubAllGlobals()
})

// ------------------------------------------------------------------
//  Pure helpers
// ------------------------------------------------------------------
describe('reviewQuestionsFromResults', () => {
  it('reads served questions from a stored attempt object', () => {
    const out = reviewQuestionsFromResults({
      review: { questions: [{ id: 'a', question: 'Q?', passage: 'P' }, { id: 'b', question: 'R?' }], answers: [0, 1] },
      totalCorrect: 1,
    })
    expect(out).toEqual([
      { id: 'a', question: 'Q?', passage: 'P' },
      { id: 'b', question: 'R?', passage: undefined },
    ])
  })

  it('tolerates a JSON-string results value, missing review, and junk entries', () => {
    expect(reviewQuestionsFromResults(JSON.stringify({ review: { questions: [{ id: 'x', question: 'Q' }] } }))).toEqual([
      { id: 'x', question: 'Q', passage: undefined },
    ])
    expect(reviewQuestionsFromResults({ totalCorrect: 3 })).toEqual([])
    expect(reviewQuestionsFromResults(null)).toEqual([])
    expect(reviewQuestionsFromResults('not json')).toEqual([])
    expect(reviewQuestionsFromResults({ review: { questions: [null, 5, { id: '', question: 7 }] } })).toEqual([
      { id: undefined, question: undefined, passage: undefined },
    ])
  })
})

describe('validateSeenKeysBody', () => {
  it('accepts a deduped list of strings', () => {
    expect(validateSeenKeysBody({ keys: ['a', 'b', 'a'] })).toEqual({ keys: ['a', 'b'] })
  })
  it('rejects non-arrays, non-strings, empties and oversize lists', () => {
    expect(validateSeenKeysBody({ keys: 'a' })).toHaveProperty('error')
    expect(validateSeenKeysBody({ keys: ['a', 1] })).toHaveProperty('error')
    expect(validateSeenKeysBody({ keys: [''] })).toHaveProperty('error')
    expect(validateSeenKeysBody(null)).toHaveProperty('error')
    expect(validateSeenKeysBody({ keys: Array.from({ length: SEEN_KEYS_MAX_PER_REQUEST + 1 }, (_, i) => `k${i}`) })).toHaveProperty('error')
    expect(validateSeenKeysBody({ keys: Array.from({ length: SEEN_KEYS_MAX_PER_REQUEST }, (_, i) => `k${i}`) })).not.toHaveProperty('error')
  })
})

// ------------------------------------------------------------------
//  Routes
// ------------------------------------------------------------------
describe('GET /api/mcat-diagnostic/seen', () => {
  it('returns 401 when signed out', async () => {
    mockAuth.mockResolvedValueOnce(null)
    const res = await mcatGET()
    expect(res.status).toBe(401)
    expect(mockFindMany).not.toHaveBeenCalled()
  })

  it('returns the deduped ids served in every stored attempt for this user', async () => {
    mockAuth.mockResolvedValueOnce({ user: { id: 'u1' } })
    mockFindMany.mockResolvedValueOnce([
      { results: { review: { questions: [{ id: 'q1', question: 'A' }, { id: 'q2', question: 'B' }] } } },
      // Second attempt overlaps the first; one entry is malformed.
      { results: JSON.stringify({ review: { questions: [{ id: 'q2', question: 'B' }, { id: 'q3' }, { question: 'no id' }] } }) },
      // Row without a review block contributes nothing.
      { results: { totalCorrect: 4 } },
    ])
    const res = await mcatGET()
    expect(res.status).toBe(200)
    const body = await res.json()
    expect([...body.keys].sort()).toEqual(['q1', 'q2', 'q3'])
    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { userId: 'u1', category: { startsWith: 'mcat-full-diagnostic' } },
        select: { results: true },
      }),
    )
  })
})

describe('GET /api/sat-diagnostic/seen', () => {
  it('returns ids AND passage-aware stem fingerprints, matching what the SAT page records locally', async () => {
    mockAuth.mockResolvedValueOnce({ user: { id: 'u1' } })
    const passageQ = { id: 'diag-passage-1', question: 'Which choice best states the main idea?', passage: 'Long passage text.' }
    const plainQ = { id: 'sat-grammar#abc', question: 'Which choice completes the text?' }
    mockFindMany.mockResolvedValueOnce([
      { results: { review: { questions: [passageQ, plainQ, { id: 'id-only' }] } } },
    ])
    const res = await satGET()
    expect(res.status).toBe(200)
    const body = await res.json()
    const expected = new Set([...seenKeysForQuestion(passageQ), ...seenKeysForQuestion(plainQ), 'id-only'])
    expect(new Set(body.keys)).toEqual(expected)
    // The passage fingerprint differs from the bare-stem fingerprint, so a
    // generic passage prompt does not poison every other passage's prompt.
    expect(seenKeysForQuestion(passageQ)[1]).not.toBe(seenKeysForQuestion({ question: passageQ.question })[0])
    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { userId: 'u1', category: { startsWith: 'sat-full-diagnostic' } } }),
    )
  })

  it('returns 401 when signed out', async () => {
    mockAuth.mockResolvedValueOnce(null)
    expect((await satGET()).status).toBe(401)
  })
})

describe.each([
  ['mcat', mcatPOST],
  ['sat', satPOST],
] as const)('POST /api/%s-diagnostic/seen', (_course, POST) => {
  it('returns 401 when signed out', async () => {
    mockAuth.mockResolvedValueOnce(null)
    expect((await POST(postReq({ keys: ['a'] }))).status).toBe(401)
  })

  it('validates the body: array of non-empty strings, capped per request', async () => {
    mockAuth.mockResolvedValue({ user: { id: 'u1' } })
    expect((await POST(postReq({ keys: 'a' }))).status).toBe(400)
    expect((await POST(postReq({ keys: ['a', 2] }))).status).toBe(400)
    expect((await POST(postReq({}))).status).toBe(400)
    expect((await POST(postReq('{not json', true))).status).toBe(400)
    const tooMany = Array.from({ length: SEEN_KEYS_MAX_PER_REQUEST + 1 }, (_, i) => `k${i}`)
    expect((await POST(postReq({ keys: tooMany }))).status).toBe(400)
  })

  it('accepts valid keys with 202 and never writes to the database', async () => {
    mockAuth.mockResolvedValueOnce({ user: { id: 'u1' } })
    const res = await POST(postReq({ keys: ['a', 'b', 'a'] }))
    expect(res.status).toBe(202)
    expect(await res.json()).toEqual({ accepted: 2, persisted: false })
    expect(mockWrite).not.toHaveBeenCalled()
    expect(mockFindMany).not.toHaveBeenCalled()
  })
})

// ------------------------------------------------------------------
//  Client helper
// ------------------------------------------------------------------
describe('loadSeenKeys', () => {
  it('merges the browser copy with the server copy and caches the union locally', async () => {
    window.localStorage.setItem(MCAT_LOCAL, JSON.stringify(['a', 'b']))
    const fetchMock = vi.fn(async () => jsonRes({ keys: ['b', 'c', 42, null] }))
    vi.stubGlobal('fetch', fetchMock)

    const keys = await loadSeenKeys('mcat')
    expect(keys).toEqual(new Set(['a', 'b', 'c']))
    expect(fetchMock).toHaveBeenCalledWith('/api/mcat-diagnostic/seen', expect.objectContaining({ cache: 'no-store' }))
    expect(JSON.parse(window.localStorage.getItem(MCAT_LOCAL)!)).toEqual(['a', 'b', 'c'])
  })

  it('falls back to the browser copy alone when the server is down, errors, or returns junk', async () => {
    window.localStorage.setItem(SAT_LOCAL, JSON.stringify(['x']))

    vi.stubGlobal('fetch', vi.fn(async () => { throw new Error('offline') }))
    await expect(loadSeenKeys('sat')).resolves.toEqual(new Set(['x']))

    vi.stubGlobal('fetch', vi.fn(async () => jsonRes({ error: 'Unauthorized' }, 401)))
    await expect(loadSeenKeys('sat')).resolves.toEqual(new Set(['x']))

    vi.stubGlobal('fetch', vi.fn(async () => new Response('<html>', { status: 200 })))
    await expect(loadSeenKeys('sat')).resolves.toEqual(new Set(['x']))

    vi.stubGlobal('fetch', vi.fn(async () => jsonRes({ keys: 'nope' })))
    await expect(loadSeenKeys('sat')).resolves.toEqual(new Set(['x']))
  })

  it('survives a malformed localStorage value', async () => {
    window.localStorage.setItem(MCAT_LOCAL, '{oops')
    vi.stubGlobal('fetch', vi.fn(async () => jsonRes({ keys: ['s'] })))
    await expect(loadSeenKeys('mcat')).resolves.toEqual(new Set(['s']))
  })

  it('keeps the newest keys when the local cap is exceeded', async () => {
    const old = Array.from({ length: LOCAL_CAP }, (_, i) => `old${i}`)
    window.localStorage.setItem(MCAT_LOCAL, JSON.stringify(old))
    vi.stubGlobal('fetch', vi.fn(async () => jsonRes({ keys: ['new1', 'new2'] })))
    const keys = await loadSeenKeys('mcat')
    expect(keys.size).toBe(LOCAL_CAP + 2)
    const stored = JSON.parse(window.localStorage.getItem(MCAT_LOCAL)!) as string[]
    expect(stored).toHaveLength(LOCAL_CAP)
    expect(stored.slice(-2)).toEqual(['new1', 'new2'])
    expect(stored).not.toContain('old0')
  })

  it('is SSR-safe: no window means no storage and no fetch, and it never throws', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    vi.stubGlobal('window', undefined)
    await expect(loadSeenKeys('mcat')).resolves.toEqual(new Set())
    await expect(recordSeenKeys('mcat', ['a'])).resolves.toBeUndefined()
    expect(fetchMock).not.toHaveBeenCalled()
  })
})

describe('recordSeenKeys', () => {
  it('writes the browser copy immediately and posts the keys best-effort', async () => {
    window.localStorage.setItem(SAT_LOCAL, JSON.stringify(['a']))
    const fetchMock = vi.fn(async () => jsonRes({ accepted: 2, persisted: false }, 202))
    vi.stubGlobal('fetch', fetchMock)

    await recordSeenKeys('sat', ['b', 'c', 'b'])
    expect(JSON.parse(window.localStorage.getItem(SAT_LOCAL)!)).toEqual(['a', 'b', 'c'])
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe('/api/sat-diagnostic/seen')
    expect(init.method).toBe('POST')
    expect(JSON.parse(String(init.body))).toEqual({ keys: ['b', 'c'] })
  })

  it('never throws when the network fails, and the local write still lands', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => { throw new TypeError('Failed to fetch') }))
    await expect(recordSeenKeys('mcat', ['q1'])).resolves.toBeUndefined()
    expect(JSON.parse(window.localStorage.getItem(MCAT_LOCAL)!)).toEqual(['q1'])
  })

  it('caps the posted payload to the request limit (newest keys) while keeping all of them locally', async () => {
    const fetchMock = vi.fn(async () => jsonRes({}, 202))
    vi.stubGlobal('fetch', fetchMock)
    const many = Array.from({ length: SEEN_KEYS_MAX_PER_REQUEST + 50 }, (_, i) => `k${i}`)
    await recordSeenKeys('mcat', many)
    const posted = JSON.parse(String((fetchMock.mock.calls[0] as unknown as [string, RequestInit])[1].body)).keys as string[]
    expect(posted).toHaveLength(SEEN_KEYS_MAX_PER_REQUEST)
    expect(posted[posted.length - 1]).toBe(many[many.length - 1])
    expect(JSON.parse(window.localStorage.getItem(MCAT_LOCAL)!)).toHaveLength(many.length)
  })

  it('skips the network when there is nothing to record', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    await recordSeenKeys('mcat', [])
    expect(fetchMock).not.toHaveBeenCalled()
  })
})

// ------------------------------------------------------------------
//  New-device simulation through the real generators
// ------------------------------------------------------------------
/**
 * Device A generates and submits attempt 1 (the submit stores the served
 * questions under results.review). Device B has an EMPTY localStorage; it
 * loads seen keys through the real /seen route (mock prisma returns attempt
 * 1's stored row) and generates attempt 2 with the merged set.
 */
function serveRouteAsFetch(route: () => Promise<Response>) {
  return vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input)
    if (url.endsWith('-diagnostic/seen') && (!init?.method || init.method === 'GET')) return route()
    return jsonRes({}, 202)
  })
}

describe('new-device retake through the real generators', { timeout: 180_000 }, () => {
  it('MCAT: attempt 2 on a fresh device repeats none of attempt 1\'s questions', async () => {
    // Device A, attempt 1 (nothing seen anywhere yet).
    const attempt1 = await generateMCATDiagnosticTest({ excludeQuestionIds: new Set() })
    expect(attempt1.questions.length).toBeGreaterThan(0)
    const stored = roundTrip({
      results: { review: { questions: attempt1.questions, answers: [] }, totalCorrect: 0, totalQuestions: attempt1.questions.length },
    })

    // Device B: empty browser, signed in, server holds attempt 1.
    window.localStorage.clear()
    mockAuth.mockResolvedValue({ user: { id: 'u1' } })
    mockFindMany.mockResolvedValue([stored])
    vi.stubGlobal('fetch', serveRouteAsFetch(mcatGET))

    const merged = await loadSeenKeys('mcat')
    const ids1 = new Set(attempt1.questions.map((q) => q.id))
    expect(merged).toEqual(ids1)

    const attempt2 = await generateMCATDiagnosticTest({ excludeQuestionIds: merged })
    expect(attempt2.questions).toHaveLength(attempt1.questions.length)
    const repeats = attempt2.questions.filter((q) => ids1.has(q.id)).map((q) => q.id)
    expect(repeats).toEqual([])

    // Recording attempt 2's ids seeds device B's own copy for an offline attempt 3.
    await recordSeenKeys('mcat', attempt2.questions.map((q) => q.id))
    const local = new Set(JSON.parse(window.localStorage.getItem(MCAT_LOCAL)!) as string[])
    for (const q of [...attempt1.questions, ...attempt2.questions]) expect(local.has(q.id)).toBe(true)
  })

  it('SAT: attempt 2 on a fresh device repeats none of attempt 1\'s questions (by id or stem fingerprint)', async () => {
    const attempt1 = await generateDiagnosticTest({ excludeQuestionIds: new Set() })
    expect(attempt1.questions.length).toBeGreaterThan(0)
    // The page stores the served questions verbatim (id, question, passage…).
    const stored = roundTrip({
      results: { review: { questions: attempt1.questions, answers: [] }, totalCorrect: 0 },
    })

    window.localStorage.clear()
    mockAuth.mockResolvedValue({ user: { id: 'u1' } })
    mockFindMany.mockResolvedValue([stored])
    vi.stubGlobal('fetch', serveRouteAsFetch(satGET))

    const merged = await loadSeenKeys('sat')
    const keys1 = new Set(attempt1.questions.flatMap((q) => seenKeysForQuestion(q)))
    expect(merged).toEqual(keys1)

    const attempt2 = await generateDiagnosticTest({ excludeQuestionIds: merged })
    expect(attempt2.questions).toHaveLength(attempt1.questions.length)
    const repeats = attempt2.questions
      .filter((q) => seenKeysForQuestion(q).some((k) => keys1.has(k)))
      .map((q) => q.id)
    expect(repeats).toEqual([])
  })
})
