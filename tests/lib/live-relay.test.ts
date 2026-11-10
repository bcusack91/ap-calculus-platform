import { describe, expect, it } from 'vitest'
import { signRelayToken, verifyRelayToken, RELAY_TOKEN_TTL_MS } from '@/lib/live-relay-token'
import { changedElements, isRelayMessage } from '@/lib/live-relay-messages'

describe('live relay tokens', () => {
  const secret = 'test-secret'
  const claims = { s: 'sess1', u: 'user1', r: 'teacher' as const }

  it('round-trips the claims', async () => {
    const token = await signRelayToken(claims, secret, 1_000_000)
    expect(token.startsWith('v1.')).toBe(true)
    const out = await verifyRelayToken(token, secret, 1_000_000 + 60_000)
    expect(out).toEqual({ ...claims, e: 1_000_000 + RELAY_TOKEN_TTL_MS })
  })

  it('rejects a forged signature, a wrong secret, a tampered payload and an expired token', async () => {
    const token = await signRelayToken(claims, secret, 1_000_000)
    expect(await verifyRelayToken(token, 'other-secret', 1_000_000)).toBeNull()
    const [v, payload, sig] = token.split('.')
    expect(await verifyRelayToken(`${v}.${payload}.${sig.slice(0, -2)}xx`, secret, 1_000_000)).toBeNull()
    const forgedPayload = Buffer.from(JSON.stringify({ ...claims, r: 'teacher', s: 'sess2', e: 9e12 })).toString('base64url')
    expect(await verifyRelayToken(`${v}.${forgedPayload}.${sig}`, secret, 1_000_000)).toBeNull()
    expect(await verifyRelayToken(token, secret, 1_000_000 + RELAY_TOKEN_TTL_MS + 1)).toBeNull()
    expect(await verifyRelayToken('garbage', secret)).toBeNull()
    expect(await verifyRelayToken('v1.!!.!!', secret)).toBeNull()
  })
})

describe('changedElements', () => {
  it('sends an element once per version and nothing when nothing changed', () => {
    const known = new Map<string, number>()
    const a = { id: 'a', version: 1 }
    const b = { id: 'b', version: 3 }
    expect(changedElements(known, [a, b])).toEqual([a, b])
    expect(changedElements(known, [a, b])).toEqual([])
    const a2 = { id: 'a', version: 2 }
    expect(changedElements(known, [a2, b])).toEqual([a2])
    const bDeleted = { id: 'b', version: 4, isDeleted: true }
    expect(changedElements(known, [a2, bDeleted])).toEqual([bDeleted])
  })
})

describe('isRelayMessage', () => {
  it('accepts the three message kinds and rejects anything else', () => {
    expect(isRelayMessage({ t: 'deck', deckId: 'd', currentSlide: 3 })).toBe(true)
    expect(isRelayMessage({ t: 'deck', deckId: 'd', ended: true })).toBe(true)
    expect(isRelayMessage({ t: 'els', deckId: 'd', slide: 1, els: [] })).toBe(true)
    expect(isRelayMessage({ t: 'laser', deckId: 'd', slide: 1, x: 10, y: 20, on: true })).toBe(true)
    expect(isRelayMessage({ t: 'laser', deckId: 'd', slide: 1, x: 'no', y: 20, on: true })).toBe(false)
    expect(isRelayMessage({ t: 'nope', deckId: 'd' })).toBe(false)
    expect(isRelayMessage({ t: 'deck' })).toBe(false)
    expect(isRelayMessage('ping')).toBe(false)
    expect(isRelayMessage(null)).toBe(false)
  })
})
