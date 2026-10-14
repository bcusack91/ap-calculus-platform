/**
 * Lesson recording (owner request 2026-10-13): the recorder's choices of what
 * to show and which file format, and the class Recordings API.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest, NextResponse } from 'next/server'
import { chooseShowing, containRect, pickMimeType } from '@/lib/lesson-recorder'

describe('lesson recorder', () => {
  it('shows the area the teacher touched last, falling back to whatever is open, then the camera', () => {
    const both = { slides: true, board: true }
    expect(chooseShowing('auto', 'board', both)).toBe('board')
    expect(chooseShowing('auto', 'slides', both)).toBe('slides')
    // A manual choice wins over the last-touched area.
    expect(chooseShowing('slides', 'board', both)).toBe('slides')
    // The wanted area isn't on the page: use the other one.
    expect(chooseShowing('auto', 'board', { slides: true, board: false })).toBe('slides')
    // Nothing presented: the teacher full-frame.
    expect(chooseShowing('auto', 'slides', { slides: false, board: false })).toBe('camera')
  })

  it('prefers MP4 (easy to upload anywhere), then WebM', () => {
    expect(pickMimeType((t) => t.startsWith('video/mp4'))).toEqual({ mimeType: 'video/mp4;codecs=avc1.42E01F,mp4a.40.2', ext: 'mp4' })
    expect(pickMimeType((t) => t === 'video/webm;codecs=vp9,opus')).toEqual({ mimeType: 'video/webm;codecs=vp9,opus', ext: 'webm' })
    expect(pickMimeType(() => false)).toEqual({ mimeType: '', ext: 'webm' })
  })

  it('fits the slide or board inside the frame without stretching', () => {
    // A wide board in a 16:9 box: full width, centred vertically.
    expect(containRect(2000, 500, { x: 0, y: 0, w: 1600, h: 900 })).toEqual({ x: 0, y: 250, w: 1600, h: 400 })
    // A tall slide: full height, centred horizontally.
    expect(containRect(900, 900, { x: 0, y: 0, w: 1600, h: 900 })).toEqual({ x: 350, y: 0, w: 900, h: 900 })
  })
})

// ── Recordings API ───────────────────────────────────────────────────────
const mockAuth = vi.fn()
const mockAccess = vi.fn()
const rows: { id: string; classroomId: string; title: string; videoId: string; authorId: string; createdAt: Date }[] = []
vi.mock('@/lib/auth', () => ({ auth: () => mockAuth() }))
vi.mock('@/lib/teacher-auth', () => ({ requireClassroomAccess: (id: string) => mockAccess(id) }))
vi.mock('@/lib/prisma', () => ({
  prisma: {
    classroomMember: {
      findUnique: vi.fn(async ({ where }: { where: { classroomId_userId: { userId: string } } }) =>
        where.classroomId_userId.userId === 'stu' ? { isActive: true } : null,
      ),
    },
    classRecording: {
      findMany: vi.fn(async ({ where }: { where: { classroomId: string } }) => rows.filter((r) => r.classroomId === where.classroomId)),
      create: vi.fn(async ({ data }: { data: Omit<(typeof rows)[number], 'id' | 'createdAt'> }) => {
        const row = { id: `r${rows.length + 1}`, createdAt: new Date(), ...data }
        rows.push(row)
        return row
      }),
      deleteMany: vi.fn(async ({ where }: { where: { id: string; classroomId: string } }) => {
        const i = rows.findIndex((r) => r.id === where.id && r.classroomId === where.classroomId)
        if (i >= 0) rows.splice(i, 1)
        return { count: i >= 0 ? 1 : 0 }
      }),
    },
  },
}))

const { GET, POST, DELETE } = await import('@/app/api/teacher/classrooms/[id]/recordings/route')
const ctx = { params: Promise.resolve({ id: 'c1' }) }
const teacher = () => {
  mockAuth.mockResolvedValue({ user: { id: 't1' } })
  mockAccess.mockResolvedValue({ user: { id: 't1' }, classroom: { id: 'c1' }, isOwner: true })
}
const student = (id = 'stu') => {
  mockAuth.mockResolvedValue({ user: { id } })
  mockAccess.mockResolvedValue({ error: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) })
}
const post = (body: unknown) => POST(new NextRequest('http://localhost/x', { method: 'POST', body: JSON.stringify(body) }), ctx)

describe('class recordings API', () => {
  beforeEach(() => { rows.length = 0 })

  it('the teacher posts a YouTube link (any common form); bad input is refused', async () => {
    teacher()
    const ok = await post({ title: 'Thermodynamics', url: 'https://youtu.be/dQw4w9WgXcQ?si=abc' })
    expect(ok.status).toBe(201)
    expect(rows[0]).toMatchObject({ title: 'Thermodynamics', videoId: 'dQw4w9WgXcQ', authorId: 't1' })
    expect((await post({ title: '', url: 'https://youtu.be/dQw4w9WgXcQ' })).status).toBe(400)
    expect((await post({ title: 'X', url: 'https://vimeo.com/123' })).status).toBe(400)
  })

  it('students in the class can watch; outsiders cannot; students cannot post or delete', async () => {
    teacher()
    await post({ title: 'Kinetics', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' })
    student()
    const list = await (await GET(new NextRequest('http://localhost/x'), ctx)).json()
    expect(list.recordings.map((r: { title: string }) => r.title)).toEqual(['Kinetics'])
    expect((await post({ title: 'Mine', url: 'https://youtu.be/dQw4w9WgXcQ' })).status).toBe(403)
    expect((await DELETE(new NextRequest(`http://localhost/x?recordingId=${rows[0].id}`, { method: 'DELETE' }), ctx)).status).toBe(403)
    student('outsider')
    expect((await GET(new NextRequest('http://localhost/x'), ctx)).status).toBe(403)
  })

  it('the teacher can remove a recording', async () => {
    teacher()
    await post({ title: 'Optics', url: 'dQw4w9WgXcQ' })
    const res = await DELETE(new NextRequest(`http://localhost/x?recordingId=${rows[0].id}`, { method: 'DELETE' }), ctx)
    expect(res.status).toBe(200)
    expect(rows).toHaveLength(0)
  })
})
