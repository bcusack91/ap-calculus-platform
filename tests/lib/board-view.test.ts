/**
 * "Students follow my view" on the live class whiteboard (owner request
 * 2026-10-13): the view math, and the board route storing/serving the view.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { asViewState, fitView, sameView, viewFromAppState, CLASS_VIEW_KEY } from '@/lib/board-view'

describe('board view math', () => {
  it('a teacher view shown on the same-size canvas lands exactly where the teacher is', () => {
    const teacher = { scrollX: -400, scrollY: 1200, zoom: { value: 2 }, width: 1000, height: 600 }
    const view = viewFromAppState(teacher)!
    expect(view).toEqual({ x: 400, y: -1200, width: 500, height: 300 })
    const fit = fitView(view, 1000, 600)
    expect(fit.zoom).toBeCloseTo(2)
    expect(fit.scrollX).toBeCloseTo(-400)
    expect(fit.scrollY).toBeCloseTo(1200)
  })

  it('on a smaller, taller screen the whole teacher region still fits, centred', () => {
    const view = { x: 0, y: 1000, width: 800, height: 400 }
    const { zoom, scrollX, scrollY } = fitView(view, 400, 800)
    expect(zoom).toBeCloseTo(0.5) // width-limited
    // Visible scene region: x from -scrollX, width 400/zoom = 800 → exactly the view's width.
    expect(-scrollX).toBeCloseTo(0)
    const visibleH = 800 / zoom
    const top = -scrollY
    expect(top).toBeLessThanOrEqual(1000)
    expect(top + visibleH).toBeGreaterThanOrEqual(1400)
    expect(top + visibleH / 2).toBeCloseTo(1200) // centred on the view
  })

  it('ignores junk and tiny drift; follow defaults on', () => {
    expect(viewFromAppState({ scrollX: 0, scrollY: 0, zoom: { value: 0 }, width: 10, height: 10 })).toBeNull()
    expect(asViewState(null)).toEqual({ follow: true, view: null })
    expect(asViewState({ follow: false, view: { x: 'a' } })).toEqual({ follow: false, view: null })
    const a = { x: 0, y: 0, width: 1000, height: 500 }
    expect(sameView(a, { ...a, y: 3 })).toBe(true)
    expect(sameView(a, { ...a, y: 300 })).toBe(false)
  })
})

// ── Route ────────────────────────────────────────────────────────────────
const mockAuth = vi.fn()
const boards = new Map<string, { rev: number; scene: unknown; ownerName: string; updatedAt: Date }>()
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/live-session', () => ({ touchAttendance: vi.fn(async () => {}) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    liveSession: { findUnique: vi.fn(async () => ({ id: 's1', status: 'LIVE', boardMode: 'TEACHER', padsEnabled: true, classroomId: 'c1', classroom: { teacherId: 't1' } })) },
    user: { findUnique: vi.fn(async ({ where }: { where: { id: string } }) => ({ name: where.id, role: 'STUDENT' })) },
    classroomCoTeacher: { findUnique: vi.fn(async () => null) },
    classroomMember: { findUnique: vi.fn(async () => ({ isActive: true })) },
    liveBoard: {
      findUnique: vi.fn(async ({ where }: { where: { sessionId_ownerKey: { ownerKey: string } } }) => {
        const b = boards.get(where.sessionId_ownerKey.ownerKey)
        return b ? { rev: b.rev, scene: b.scene } : null
      }),
      findMany: vi.fn(async ({ where }: { where: { ownerKey: { notIn: string[] } } }) =>
        [...boards.entries()].filter(([k]) => !where.ownerKey.notIn.includes(k)).map(([ownerKey, b]) => ({ ownerKey, ...b })),
      ),
      upsert: vi.fn(async ({ where, create, update }: { where: { sessionId_ownerKey: { ownerKey: string } }; create: { scene: unknown; ownerName: string }; update: { scene: unknown } }) => {
        const k = where.sessionId_ownerKey.ownerKey
        const prev = boards.get(k)
        const rev = (prev?.rev ?? 0) + 1
        boards.set(k, { rev, scene: prev ? update.scene : create.scene, ownerName: create.ownerName, updatedAt: new Date() })
        return { rev }
      }),
    },
  },
}))

const { GET, PUT } = await import('@/app/api/live-sessions/[id]/board/route')
const ctx = { params: Promise.resolve({ id: 's1' }) }
const put = (body: unknown) => PUT(new NextRequest('http://localhost/x', { method: 'PUT', body: JSON.stringify(body) }), ctx)
const get = (qs: string) => GET(new NextRequest(`http://localhost/x${qs}`), ctx)

describe('board route: teacher view', () => {
  beforeEach(() => {
    boards.clear()
    boards.set('stu1', { rev: 3, scene: { elements: [], files: {} }, ownerName: 'Stu', updatedAt: new Date() })
  })

  it('only the teacher can set it; students get it with the class board', async () => {
    mockAuth.mockResolvedValue({ user: { id: 'stu1' } })
    expect((await put({ owner: 'view', view: { x: 0, y: 0, width: 100, height: 100 } })).status).toBe(403)

    mockAuth.mockResolvedValue({ user: { id: 't1' } })
    expect((await put({ owner: 'view', view: { x: 10, y: 900, width: 800, height: 450 } })).status).toBe(200)
    expect((await put({ owner: 'view', follow: false })).status).toBe(200)

    mockAuth.mockResolvedValue({ user: { id: 'stu1' } })
    const body = await (await get('?owner=class&rev=-1')).json()
    // Turning follow off keeps the last view (for "Jump to teacher's view").
    expect(body.view).toEqual({ rev: 2, follow: false, view: { x: 10, y: 900, width: 800, height: 450 } })
  })

  it('no view yet: follow on, nothing to show; the view row is never listed as a student pad', async () => {
    mockAuth.mockResolvedValue({ user: { id: 't1' } })
    const before = await (await get('?owner=class&rev=-1')).json()
    expect(before.view).toEqual({ rev: 0, follow: true, view: null })
    await put({ owner: 'view', view: { x: 0, y: 0, width: 100, height: 100 } })
    const pads = await (await get('?owner=all')).json()
    expect(pads.boards.map((b: { ownerKey: string }) => b.ownerKey)).toEqual(['stu1'])
    expect(boards.has(CLASS_VIEW_KEY)).toBe(true)
  })
})
