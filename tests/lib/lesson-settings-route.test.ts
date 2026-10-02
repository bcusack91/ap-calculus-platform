/**
 * /api/lessons/settings — the per-student "Include low-yield details" setting
 * for interactive lessons (owner request 2026-10-02). Off by default.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

let sessionUser: string | null = 'u1'
let stored = false
vi.mock('@/lib/auth', () => ({ auth: async () => (sessionUser ? { user: { id: sessionUser } } : null) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: vi.fn(async () => ({ lessonIncludeLowYield: stored })),
      update: vi.fn(async ({ data }: { data: { lessonIncludeLowYield: boolean } }) => {
        stored = data.lessonIncludeLowYield
        return { lessonIncludeLowYield: stored }
      }),
    },
  },
}))

const patch = (body: unknown) =>
  new Request('http://localhost/api/lessons/settings', { method: 'PATCH', body: JSON.stringify(body) })

describe('/api/lessons/settings', () => {
  beforeEach(() => { sessionUser = 'u1'; stored = false })

  it('reports low-yield as off by default', async () => {
    const { GET } = await import('@/app/api/lessons/settings/route')
    const res = await GET()
    expect(await res.json()).toEqual({ includeLowYield: false })
  })

  it('saves the choice', async () => {
    const { GET, PATCH } = await import('@/app/api/lessons/settings/route')
    expect(await (await PATCH(patch({ includeLowYield: true }))).json()).toEqual({ includeLowYield: true })
    expect(await (await GET()).json()).toEqual({ includeLowYield: true })
  })

  it('rejects anything but a boolean', async () => {
    const { PATCH } = await import('@/app/api/lessons/settings/route')
    expect((await PATCH(patch({ includeLowYield: 'yes' }))).status).toBe(400)
    expect(stored).toBe(false)
  })

  it('requires sign-in', async () => {
    sessionUser = null
    const { GET, PATCH } = await import('@/app/api/lessons/settings/route')
    expect((await GET()).status).toBe(401)
    expect((await PATCH(patch({ includeLowYield: true }))).status).toBe(401)
  })
})
