import { describe, it, expect, vi, beforeEach } from 'vitest'

const db = {
  classroomMember: { findMany: vi.fn(), updateMany: vi.fn() },
  announcement: { findMany: vi.fn() },
}
vi.mock('@/lib/prisma', () => ({ prisma: db }))

const { recentAnnouncementsFor, markAnnouncementsSeen, isUnread, snippetOf, ANNOUNCEMENT_NEW_DAYS } = await import(
  '@/lib/student-announcements'
)
const { groupUnread } = await import('@/components/ClassAnnouncementsBanner')

const NOW = new Date('2026-10-07T12:00:00Z')
const at = (iso: string) => new Date(iso)

beforeEach(() => vi.clearAllMocks())

describe('recentAnnouncementsFor', () => {
  it('returns nothing (and skips the announcement query) for a user in no classes', async () => {
    db.classroomMember.findMany.mockResolvedValue([])
    expect(await recentAnnouncementsFor('u1', NOW)).toEqual([])
    expect(db.announcement.findMany).not.toHaveBeenCalled()
  })

  it('flags posts newer than the class seen marker as unread; never-seen classes are all unread', async () => {
    db.classroomMember.findMany.mockResolvedValue([
      { classroomId: 'c1', announcementsSeenAt: at('2026-10-05T00:00:00Z'), classroom: { name: 'AP Bio' } },
      { classroomId: 'c2', announcementsSeenAt: null, classroom: { name: 'MCAT Prep' } },
    ])
    db.announcement.findMany.mockResolvedValue([
      { id: 'a1', classroomId: 'c1', title: 'Quiz Friday', content: 'Bring a pencil.', isPinned: false, createdAt: at('2026-10-06T00:00:00Z'), author: { name: 'Ms. Lee' } },
      { id: 'a2', classroomId: 'c1', title: 'Old news', content: 'x', isPinned: true, createdAt: at('2026-10-01T00:00:00Z'), author: { name: 'Ms. Lee' } },
      { id: 'a3', classroomId: 'c2', title: 'Welcome', content: 'Hi', isPinned: false, createdAt: at('2026-10-02T00:00:00Z'), author: { name: null } },
    ])
    const out = await recentAnnouncementsFor('u1', NOW)
    expect(out.map((a) => [a.id, a.unread, a.classroomName])).toEqual([
      ['a1', true, 'AP Bio'],
      ['a2', false, 'AP Bio'],
      ['a3', true, 'MCAT Prep'],
    ])
  })

  it('asks only for the last 14 days, active classes, and posts the student did not write', async () => {
    db.classroomMember.findMany.mockResolvedValue([{ classroomId: 'c1', announcementsSeenAt: null, classroom: { name: 'X' } }])
    db.announcement.findMany.mockResolvedValue([])
    await recentAnnouncementsFor('u1', NOW)
    expect(db.classroomMember.findMany.mock.calls[0][0].where).toEqual({ userId: 'u1', isActive: true })
    const where = db.announcement.findMany.mock.calls[0][0].where
    expect(where.authorId).toEqual({ not: 'u1' })
    expect(where.classroomId).toEqual({ in: ['c1'] })
    expect(NOW.getTime() - where.createdAt.gt.getTime()).toBe(ANNOUNCEMENT_NEW_DAYS * 24 * 60 * 60 * 1000)
  })
})

describe('markAnnouncementsSeen', () => {
  const NOW2 = at('2026-10-07T12:00:00Z')
  it('marks one class, or every active class without an id, and never moves the marker backwards', async () => {
    db.classroomMember.updateMany.mockResolvedValue({ count: 1 })
    await markAnnouncementsSeen('u1', 'c1', null, NOW2)
    const first = db.classroomMember.updateMany.mock.calls[0][0]
    expect(first.where).toMatchObject({ userId: 'u1', isActive: true, classroomId: 'c1' })
    expect(first.where.OR).toEqual([{ announcementsSeenAt: null }, { announcementsSeenAt: { lt: NOW2 } }])
    expect(first.data.announcementsSeenAt).toEqual(NOW2)
    await markAnnouncementsSeen('u1', undefined, null, NOW2)
    expect(db.classroomMember.updateMany.mock.calls[1][0].where.classroomId).toBeUndefined()
  })

  it('stamps the newest post shown, so a post that arrived while the page sat open stays unread', async () => {
    db.classroomMember.updateMany.mockResolvedValue({ count: 1 })
    const shown = at('2026-10-07T09:00:00Z')
    await markAnnouncementsSeen('u1', 'c1', shown, NOW2)
    expect(db.classroomMember.updateMany.mock.calls[0][0].data.announcementsSeenAt).toEqual(shown)
    expect(isUnread(at('2026-10-07T10:00:00Z'), shown)).toBe(true)
    expect(isUnread(shown, shown)).toBe(false)
  })

  it('never stamps a time in the future', async () => {
    db.classroomMember.updateMany.mockResolvedValue({ count: 1 })
    await markAnnouncementsSeen('u1', 'c1', at('2030-01-01T00:00:00Z'), NOW2)
    expect(db.classroomMember.updateMany.mock.calls[0][0].data.announcementsSeenAt).toEqual(NOW2)
  })
})

describe('helpers', () => {
  it('isUnread: never seen, or posted after the marker', () => {
    expect(isUnread(at('2026-10-01T00:00:00Z'), null)).toBe(true)
    expect(isUnread(at('2026-10-02T00:00:00Z'), at('2026-10-01T00:00:00Z'))).toBe(true)
    expect(isUnread(at('2026-10-01T00:00:00Z'), at('2026-10-01T00:00:00Z'))).toBe(false)
  })

  it('snippetOf flattens whitespace and trims long posts with an ellipsis', () => {
    expect(snippetOf('Line one\n\n  line two')).toBe('Line one line two')
    const long = snippetOf('word '.repeat(100))
    expect(long.length).toBeLessThanOrEqual(180)
    expect(long.endsWith('…')).toBe(true)
  })

  it('groupUnread: one card per class with its newest unread post, read posts ignored', () => {
    const item = (id: string, classroomId: string, createdAt: string, unread = true) => ({
      id, classroomId, classroomName: classroomId.toUpperCase(), authorName: 'T', title: id, snippet: '', createdAt, unread,
    })
    const groups = groupUnread([
      item('a', 'c1', '2026-10-03T00:00:00Z'),
      item('b', 'c1', '2026-10-06T00:00:00Z'),
      item('c', 'c2', '2026-10-05T00:00:00Z'),
      item('d', 'c3', '2026-10-06T00:00:00Z', false),
    ])
    expect(groups.map((g) => [g.classroomId, g.newest.id, g.more])).toEqual([
      ['c1', 'b', 1],
      ['c2', 'c', 0],
    ])
  })
})
