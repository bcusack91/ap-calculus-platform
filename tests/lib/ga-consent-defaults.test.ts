import { describe, it, expect } from 'vitest'
import vm from 'node:vm'
import { consentDefaultsScript, OPT_IN_REGIONS } from '@/components/GoogleAnalytics'

/** Run the inline consent-defaults script in a fake page and return the gtag calls it queued. */
function run({ choice, cookie = '', path = '/' }: { choice?: object; cookie?: string; path?: string }) {
  const store: Record<string, string> = choice ? { 'cookie-consent': JSON.stringify(choice) } : {}
  const ctx: Record<string, unknown> = {
    localStorage: { getItem: (k: string) => store[k] ?? null },
    document: { cookie },
    location: { pathname: path },
    Object,
    JSON,
  }
  ctx.window = ctx // in a browser, window is the global object
  vm.createContext(ctx)
  vm.runInContext(consentDefaultsScript(), ctx)
  const layer = (ctx.dataLayer as IArguments[]) ?? []
  return layer.map((args) => Array.from(args) as [string, string, Record<string, unknown>])
}

describe('GA consent defaults', () => {
  it('no banner choice: denied in opt-in regions, granted elsewhere, ads denied everywhere', () => {
    const calls = run({})
    expect(calls).toHaveLength(2)
    const [regional, global] = calls.map((c) => c[2])
    expect(regional.analytics_storage).toBe('denied')
    expect(regional.region).toEqual(OPT_IN_REGIONS)
    expect(OPT_IN_REGIONS).toEqual(expect.arrayContaining(['DE', 'FR', 'GB', 'CH', 'NO']))
    expect(OPT_IN_REGIONS).not.toContain('US')
    expect(global.analytics_storage).toBe('granted')
    expect(global.region).toBeUndefined()
    for (const d of [regional, global]) expect(d.ad_storage).toBe('denied')
  })

  it('"Essential Only" choice: analytics denied with no regional override', () => {
    const calls = run({ choice: { necessary: true, analytics: false, advertising: false } })
    expect(calls).toHaveLength(1)
    expect(calls[0][2]).toMatchObject({ analytics_storage: 'denied', ad_storage: 'denied' })
  })

  it('"Accept All" choice: analytics and ads granted', () => {
    const calls = run({ choice: { necessary: true, analytics: true, advertising: true } })
    expect(calls).toHaveLength(1)
    expect(calls[0][2]).toMatchObject({ analytics_storage: 'granted', ad_storage: 'granted', ad_personalization: 'granted' })
  })

  it('child cookie or a grade 4–8 page: everything denied, even after "Accept All"', () => {
    for (const opts of [
      { cookie: 'a=1; mondo_u13=1', choice: { analytics: true, advertising: true } },
      { path: '/grade-6/fractions' },
      { path: '/grade8' },
    ]) {
      const calls = run(opts)
      expect(calls).toHaveLength(1)
      expect(calls[0][2]).toMatchObject({ analytics_storage: 'denied', ad_storage: 'denied' })
    }
  })
})
