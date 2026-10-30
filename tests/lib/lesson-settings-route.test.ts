/**
 * /api/lessons/settings — the per-student "Include low-yield details" setting
 * for interactive lessons (owner request 2026-10-02). Off by default.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

let sessionUser: string | null = 'u1'
let stored = false
let format = 'TEXT'
vi.mock('@/lib/auth', () => ({ auth: async () => (sessionUser ? { user: { id: sessionUser } } : null) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: vi.fn(async () => ({ lessonIncludeLowYield: stored, preferredLessonFormat: format })),
      update: vi.fn(async ({ data }: { data: { lessonIncludeLowYield?: boolean; preferredLessonFormat?: string } }) => {
        if (data.lessonIncludeLowYield !== undefined) stored = data.lessonIncludeLowYield
        if (data.preferredLessonFormat !== undefined) format = data.preferredLessonFormat
        return { lessonIncludeLowYield: stored, preferredLessonFormat: format }
      }),
    },
  },
}))

const patch = (body: unknown) =>
  new Request('http://localhost/api/lessons/settings', { method: 'PATCH', body: JSON.stringify(body) })

describe('/api/lessons/settings', () => {
  beforeEach(() => { sessionUser = 'u1'; stored = false; format = 'TEXT' })

  it('reports low-yield as off by default', async () => {
    const { GET } = await import('@/app/api/lessons/settings/route')
    const res = await GET(new Request('http://localhost/api/lessons/settings'))
    expect(await res.json()).toEqual({ includeLowYield: false, preferredFormat: 'TEXT' })
  })

  it('saves the choice', async () => {
    const { GET, PATCH } = await import('@/app/api/lessons/settings/route')
    expect(await (await PATCH(patch({ includeLowYield: true }))).json()).toEqual({ includeLowYield: true, preferredFormat: 'TEXT' })
    expect(await (await GET(new Request('http://localhost/api/lessons/settings'))).json()).toEqual({ includeLowYield: true, preferredFormat: 'TEXT' })
  })

  it('saves the video-or-reading preference on its own, and rejects other values', async () => {
    const { GET, PATCH } = await import('@/app/api/lessons/settings/route')
    expect(await (await PATCH(patch({ preferredFormat: 'VIDEO' }))).json()).toEqual({ includeLowYield: false, preferredFormat: 'VIDEO' })
    expect((await (await GET(new Request('http://localhost/api/lessons/settings'))).json()).preferredFormat).toBe('VIDEO')
    expect((await PATCH(patch({ preferredFormat: 'AUDIO' }))).status).toBe(400)
    expect(format).toBe('VIDEO')
  })

  it('rejects anything but a boolean', async () => {
    const { PATCH } = await import('@/app/api/lessons/settings/route')
    expect((await PATCH(patch({ includeLowYield: 'yes' }))).status).toBe(400)
    expect(stored).toBe(false)
  })

  it('requires sign-in', async () => {
    sessionUser = null
    const { GET, PATCH } = await import('@/app/api/lessons/settings/route')
    expect((await GET(new Request('http://localhost/api/lessons/settings'))).status).toBe(401)
    expect((await PATCH(patch({ includeLowYield: true }))).status).toBe(401)
  })
})
