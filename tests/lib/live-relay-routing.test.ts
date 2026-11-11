import { describe, expect, it } from 'vitest'
import { routeMessage, DEFAULT_ROOM_STATE, type RelayPeer } from '@/lib/live-relay-routing'
import { isRelayMessage, markKnown, changedElements } from '@/lib/live-relay-messages'

const teacher: RelayPeer = { role: 'teacher', user: 't1', name: 'Ms T' }
const student: RelayPeer = { role: 'student', user: 's1', name: 'Sam' }
const other: RelayPeer = { role: 'student', user: 's2', name: 'Ola' }
const j = (o: unknown) => JSON.stringify(o)

describe('routeMessage', () => {
  it('forwards slide and view messages from teachers only', () => {
    for (const m of [{ t: 'deck', deckId: 'd', currentSlide: 1 }, { t: 'els', deckId: 'd', slide: 1, els: [] }, { t: 'laser', deckId: 'd', slide: 1, x: 1, y: 2, on: true }, { t: 'view', view: null, follow: true }]) {
      expect(routeMessage(j(m), teacher, DEFAULT_ROOM_STATE)).toEqual({ to: 'all', message: j(m) })
      expect(routeMessage(j(m), student, DEFAULT_ROOM_STATE).to).toBe('none')
    }
  })

  it('keeps the board mode a teacher broadcasts and ignores a student pretending to', () => {
    const r = routeMessage(j({ t: 'board-mode', mode: 'SHARED', pads: true }), teacher, DEFAULT_ROOM_STATE)
    expect(r.to).toBe('all')
    expect(r.state).toEqual({ boardMode: 'SHARED', pads: true })
    expect(routeMessage(j({ t: 'board-mode', mode: 'SHARED', pads: true }), student, DEFAULT_ROOM_STATE).to).toBe('none')
    expect(routeMessage(j({ t: 'board-mode', mode: 'WHATEVER', pads: true }), teacher, DEFAULT_ROOM_STATE).to).toBe('none')
  })

  it('class board: teachers always, students only while SHARED', () => {
    const m = j({ t: 'board', owner: 'class', els: [{ id: 'a', version: 1 }] })
    expect(routeMessage(m, teacher, DEFAULT_ROOM_STATE)).toEqual({ to: 'all', message: m })
    expect(routeMessage(m, student, { boardMode: 'TEACHER', pads: true }).to).toBe('none')
    expect(routeMessage(m, student, { boardMode: 'SHARED', pads: false })).toEqual({ to: 'all', message: m })
  })

  it("pads: a student's own pad reaches teachers only, while pads are on, never someone else's", () => {
    const els = [{ id: 'a', version: 1 }]
    const mine = routeMessage(j({ t: 'board', owner: 'me', els }), student, { boardMode: 'OFF', pads: true })
    expect(mine.to).toBe('teachers')
    expect(JSON.parse(mine.message!)).toEqual({ t: 'board', owner: 's1', ownerName: 'Sam', els })
    expect(routeMessage(j({ t: 'board', owner: 's1', els }), student, { boardMode: 'OFF', pads: true }).to).toBe('teachers')
    expect(routeMessage(j({ t: 'board', owner: 'me', els }), student, { boardMode: 'SHARED', pads: false }).to).toBe('none')
    expect(routeMessage(j({ t: 'board', owner: 's1', els }), other, { boardMode: 'OFF', pads: true }).to).toBe('none')
    // A teacher's own pad also goes to teachers (co-teachers), regardless of the pads switch.
    expect(routeMessage(j({ t: 'board', owner: 'me', els }), teacher, DEFAULT_ROOM_STATE).to).toBe('teachers')
  })

  it('drops junk', () => {
    expect(routeMessage('not json', teacher, DEFAULT_ROOM_STATE).to).toBe('none')
    expect(routeMessage(j([1, 2]), teacher, DEFAULT_ROOM_STATE).to).toBe('none')
    expect(routeMessage(j({ t: 'nope' }), teacher, DEFAULT_ROOM_STATE).to).toBe('none')
    expect(routeMessage(j({ t: 'board', owner: 'class' }), teacher, DEFAULT_ROOM_STATE).to).toBe('none')
  })
})

describe('board relay messages', () => {
  it('validates the new message kinds', () => {
    expect(isRelayMessage({ t: 'board', owner: 'class', els: [] })).toBe(true)
    expect(isRelayMessage({ t: 'board', owner: 's1', ownerName: 'Sam', els: [] })).toBe(true)
    expect(isRelayMessage({ t: 'board', owner: '', els: [] })).toBe(false)
    expect(isRelayMessage({ t: 'view', view: { x: 0, y: 0, width: 10, height: 5 }, follow: false })).toBe(true)
    expect(isRelayMessage({ t: 'view', follow: true })).toBe(true)
    expect(isRelayMessage({ t: 'view', view: { x: 0 } })).toBe(false)
    expect(isRelayMessage({ t: 'board-mode', mode: 'TEACHER', pads: false })).toBe(true)
    expect(isRelayMessage({ t: 'board-mode', mode: 'ON', pads: false })).toBe(false)
  })

  it('markKnown stops applied elements from being echoed back', () => {
    const known = new Map<string, number>()
    const remote = [{ id: 'r', version: 7 }]
    markKnown(known, remote)
    expect(changedElements(known, [...remote, { id: 'mine', version: 1 }])).toEqual([{ id: 'mine', version: 1 }])
  })
})
