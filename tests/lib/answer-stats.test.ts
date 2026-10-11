/**
 * "How others answered" (src/lib/answer-stats.ts, /api/questions/stats):
 * first answer per student only, nothing below 20 students, shares aligned to
 * the options as the caller shows them, and never anyone's identity.
 *
 * The aggregate SQL itself was checked against a real Postgres (PGlite): the
 * fake $queryRaw below reproduces its semantics (earliest row per
 * (userId, questionKey) among answered = 1 rows, then only rows with a
 * chosenKey, grouped per option plus a per-question total with the median of
 * positive durations) so the pipeline can be tested end to end.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { optionKey, questionKey } from '@/lib/question-key'
import type { AggregateRow } from '@/lib/answer-stats'

type ActivityRow = { id: string; userId: string; questionKey: string; answered: number; chosenKey: string | null; durationMs: number | null; answeredAt: Date }
let table: ActivityRow[] = []

function median(xs: number[]): number | null {
  if (!xs.length) return null
  const s = [...xs].sort((a, b) => a - b)
  const m = (s.length - 1) / 2
  return (s[Math.floor(m)] + s[Math.ceil(m)]) / 2
}

/** JS twin of queryAnswerAggregates' SQL. */
function fakeAggregate(keys: string[]): AggregateRow[] {
  const firsts = new Map<string, ActivityRow>()
  const ordered = table
    .filter((r) => keys.includes(r.questionKey) && r.answered === 1)
    .sort((a, b) => a.answeredAt.getTime() - b.answeredAt.getTime() || a.id.localeCompare(b.id))
  for (const r of ordered) {
    const k = `${r.userId}\u0000${r.questionKey}`
    if (!firsts.has(k)) firsts.set(k, r)
  }
  const picked = [...firsts.values()].filter((r) => r.chosenKey !== null)
  const out: AggregateRow[] = []
  for (const key of new Set(picked.map((r) => r.questionKey))) {
    const mine = picked.filter((r) => r.questionKey === key)
    const ms = (rs: ActivityRow[]) => rs.map((r) => r.durationMs).filter((d): d is number => typeof d === 'number' && d > 0)
    for (const ck of new Set(mine.map((r) => r.chosenKey as string))) {
      const g = mine.filter((r) => r.chosenKey === ck)
      out.push({ questionKey: key, chosenKey: ck, n: g.length, timed: ms(g).length, medianMs: median(ms(g)) })
    }
    out.push({ questionKey: key, chosenKey: null, n: mine.length, timed: ms(mine).length, medianMs: median(ms(mine)) })
  }
  return out
}

const mockQueryRaw = vi.fn()
const mockAuth = vi.fn()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/prisma', () => ({ prisma: { $queryRaw: (...a: unknown[]) => mockQueryRaw(...a) } }))

const stats = await import('@/lib/answer-stats')
const { MIN_RESPONSES, CACHE_TTL_MS, buildAnswerStats, getAnswerStats, sharesForOptions, clearAnswerStatsCache } = stats
const { GET, POST } = await import('@/app/api/questions/stats/route')

const OPTIONS = ['Ligase', 'Helicase', 'Primase', 'Gyrase']
const QK = questionKey({ question: 'Which enzyme unwinds DNA?', options: OPTIONS, correctIndex: 1 })
const QK2 = questionKey({ question: 'Which enzyme seals nicks?', options: OPTIONS, correctIndex: 0 })

let seq = 0
function answer(userId: string, qk: string, choice: string | null, at: string, durationMs: number | null = 30_000, answered = 1) {
  table.push({ id: String(seq++).padStart(6, '0'), userId, questionKey: qk, answered, chosenKey: choice === null ? null : optionKey(choice), durationMs, answeredAt: new Date(at) })
}

/** n students' first answers: `split` = how many picked each option, in OPTIONS order. */
function seed(qk: string, split: number[], prefix = 'u') {
  let u = 0
  split.forEach((count, oi) => {
    for (let k = 0; k < count; k++) answer(`${prefix}${u++}`, qk, OPTIONS[oi], '2026-10-01T00:00:00Z', 20_000 + u * 1000)
  })
}

beforeEach(() => {
  table = []
  seq = 0
  clearAnswerStatsCache()
  vi.clearAllMocks()
  mockAuth.mockResolvedValue({ user: { id: 'viewer' } })
  mockQueryRaw.mockImplementation(async (sql: { values: unknown[] }) => fakeAggregate(sql.values[0] as string[]))
})

describe('buildAnswerStats', () => {
  it(`hides a question below ${MIN_RESPONSES} students`, () => {
    const rows: AggregateRow[] = [
      { questionKey: QK, chosenKey: 'o:a', n: MIN_RESPONSES - 1, timed: 0, medianMs: null },
      { questionKey: QK, chosenKey: null, n: MIN_RESPONSES - 1, timed: 0, medianMs: null },
    ]
    expect(buildAnswerStats([QK, QK2], rows)).toEqual([
      { key: QK, responses: MIN_RESPONSES - 1, insufficient: true },
      { key: QK2, responses: 0, insufficient: true },
    ])
  })

  it('at the threshold returns shares by option key, and a median only with ≥5 timed answers', () => {
    const rows: AggregateRow[] = [
      { questionKey: QK, chosenKey: 'o:a', n: BigInt(15), timed: 3, medianMs: 1000 },
      { questionKey: QK, chosenKey: 'o:b', n: 5, timed: 1, medianMs: 1000 },
      { questionKey: QK, chosenKey: null, n: 20, timed: 4, medianMs: 41_234 },
    ]
    expect(buildAnswerStats([QK], rows)).toEqual([{ key: QK, responses: 20, shares: { 'o:a': 0.75, 'o:b': 0.25 }, medianSeconds: null }])
    rows[2].timed = 5
    expect(buildAnswerStats([QK], rows)[0]).toMatchObject({ medianSeconds: 41.2 })
  })
})

describe('getAnswerStats', () => {
  it("counts each student's FIRST answer only — retakes, re-quizzes and later attempts don't count", async () => {
    seed(QK, [4, 14, 2, 0]) // 20 students
    // u0 first picked Ligase; a later retake and two mistake re-quizzes pick Helicase.
    answer('u0', QK, 'Helicase', '2026-10-05T00:00:00Z')
    answer('u0', QK, 'Helicase', '2026-10-06T00:00:00Z')
    // A student whose first answer was a skip is left out, not replaced by a later pick.
    answer('skipper', QK, null, '2026-09-01T00:00:00Z')
    answer('skipper', QK, 'Gyrase', '2026-10-02T00:00:00Z')
    // Batch rows (answered > 1) never count.
    answer('batch', QK, 'Gyrase', '2026-09-01T00:00:00Z', null, 10)
    const [stat] = await getAnswerStats([QK])
    expect(stat).toMatchObject({ key: QK, responses: 20 })
    expect(sharesForOptions(stat, OPTIONS)).toEqual([0.2, 0.7, 0.1, 0])
  })

  it('a student counted once even when their earliest row came from another surface', async () => {
    seed(QK, [0, 19, 0, 0])
    answer('late', QK, 'Primase', '2026-09-30T00:00:00Z') // their first (an exit quiz)
    answer('late', QK, 'Helicase', '2026-10-09T00:00:00Z') // a later unit test
    const [stat] = await getAnswerStats([QK])
    expect(stat).toMatchObject({ responses: 20 })
    expect(sharesForOptions(stat, OPTIONS)).toEqual([0, 0.95, 0.05, 0])
  })

  it('queries with DISTINCT ON (userId, questionKey) ordered by answeredAt, over the questionKey index', async () => {
    seed(QK, [20, 0, 0, 0])
    await getAnswerStats([QK, 'not-a-key'])
    const sql = mockQueryRaw.mock.calls[0][0] as { strings: string[]; values: unknown[] }
    const text = sql.strings.join('?')
    expect(text).toContain('DISTINCT ON ("userId", "questionKey")')
    expect(text).toMatch(/ORDER BY "userId", "questionKey", "answeredAt" ASC/)
    expect(text).toContain('"questionKey" = ANY(')
    expect(text).toContain('"answered" = 1')
    expect(text).toContain('GROUPING SETS')
    expect(sql.values).toEqual([[QK]]) // free-form keys never reach the database
  })

  it('caches per key for 10 minutes and only queries keys it does not have', async () => {
    seed(QK, [20, 0, 0, 0])
    const now = Date.parse('2026-10-10T12:00:00Z')
    await getAnswerStats([QK], { now })
    await getAnswerStats([QK, QK2], { now: now + 60_000 })
    expect(mockQueryRaw).toHaveBeenCalledTimes(2)
    expect((mockQueryRaw.mock.calls[1][0] as { values: unknown[] }).values).toEqual([[QK2]])
    await getAnswerStats([QK, QK2], { now: now + 120_000 })
    expect(mockQueryRaw).toHaveBeenCalledTimes(2)
    await getAnswerStats([QK], { now: now + CACHE_TTL_MS + 1 })
    expect(mockQueryRaw).toHaveBeenCalledTimes(3)
  })
})

describe('sharesForOptions', () => {
  it('aligns to the order the caller shows, with 0 for options nobody picked; null when insufficient', () => {
    const stat = { key: QK, responses: 20, shares: { [optionKey('Helicase')]: 0.6, [optionKey('Ligase')]: 0.4 }, medianSeconds: null }
    expect(sharesForOptions(stat, ['Gyrase', 'Helicase', 'Primase', 'Ligase'])).toEqual([0, 0.6, 0, 0.4])
    // optionKey normalizes whitespace and case, like questionKey.
    expect(sharesForOptions(stat, ['  helicase '])).toEqual([0.6])
    expect(sharesForOptions({ key: QK, responses: 3, insufficient: true }, OPTIONS)).toBeNull()
  })
})

const post = (body: unknown) => new NextRequest('http://localhost/api/questions/stats', { method: 'POST', body: JSON.stringify(body) })
const get = (qs: string) => new NextRequest(`http://localhost/api/questions/stats${qs}`)

describe('/api/questions/stats', () => {
  it('requires a signed-in user', async () => {
    mockAuth.mockResolvedValue(null)
    expect((await POST(post({ items: [{ questionKey: QK, options: OPTIONS }] }))).status).toBe(401)
    expect((await GET(get(`?keys=${QK}`))).status).toBe(401)
  })

  it('POST returns shares aligned to each item’s shown option order, in request order', async () => {
    seed(QK, [2, 16, 2, 0])
    seed(QK2, [3, 0, 0, 0], 'v')
    const shown = ['Primase', 'Gyrase', 'Helicase', 'Ligase']
    const res = await POST(post({ items: [{ questionKey: QK2, options: OPTIONS }, { questionKey: QK, options: shown }] }))
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body).toEqual({
      minResponses: 20,
      items: [
        { questionKey: QK2, responses: 3, insufficient: true },
        { questionKey: QK, responses: 20, shares: [0.1, 0, 0.8, 0.1], medianSeconds: expect.any(Number) },
      ],
    })
    expect(body.items[1].medianSeconds).toBeCloseTo(30.5, 1) // median of 21s…40s
  })

  it('GET returns shares keyed by optionKey', async () => {
    seed(QK, [10, 10, 0, 0])
    const body = await (await GET(get(`?keys=${QK},${QK2}`))).json()
    expect(body.stats).toEqual([
      { key: QK, responses: 20, shares: { [optionKey('Ligase')]: 0.5, [optionKey('Helicase')]: 0.5 }, medianSeconds: expect.any(Number) },
      { key: QK2, responses: 0, insufficient: true },
    ])
  })

  it('never returns who answered', async () => {
    seed(QK, [5, 5, 5, 5], 'student-secret-')
    const text = JSON.stringify(await (await POST(post({ items: [{ questionKey: QK, options: OPTIONS }] }))).json())
    expect(text).not.toContain('student-secret-')
    expect(text).not.toMatch(/userId|answeredAt/)
  })

  it('validates the request size', async () => {
    const keys = Array.from({ length: 121 }, (_, i) => `q:${String(i).padStart(16, '0')}`)
    expect((await GET(get(`?keys=${keys.join(',')}`))).status).toBe(400)
    expect((await GET(get(''))).status).toBe(400)
    expect((await POST(post({ items: keys.map((k) => ({ questionKey: k, options: [] })) }))).status).toBe(400)
    expect((await POST(post({ items: [] }))).status).toBe(400)
  })
})
