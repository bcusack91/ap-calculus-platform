/**
 * A missing slug must be a real 404, decided in generateMetadata.
 *
 * Every content route has a loading.tsx, so the page body streams behind a
 * 200 shell and a notFound() thrown there cannot change the status: the
 * not-found UI shipped with HTTP 200 plus Next's automatic noindex — a soft
 * 404 that Search Console filed under "Excluded by noindex" for every stale,
 * renamed or mistyped URL Google had ever seen. generateMetadata runs before
 * streaming, so calling notFound() there sets the status.
 */
import { describe, it, expect, vi } from 'vitest'

const findUnique = vi.fn().mockResolvedValue(null)
vi.mock('@/lib/prisma', () => ({
  prisma: {
    topic: { findUnique: (...a: unknown[]) => findUnique(...a), findMany: vi.fn().mockResolvedValue([]) },
    category: { findUnique: (...a: unknown[]) => findUnique(...a), findMany: vi.fn().mockResolvedValue([]) },
    course: { findUnique: (...a: unknown[]) => findUnique(...a), findMany: vi.fn().mockResolvedValue([]) },
  },
}))

const params = Promise.resolve({ slug: 'no-such-slug-xyz' })
const isNotFound = (e: unknown) => /NEXT_HTTP_ERROR_FALLBACK;404|NEXT_NOT_FOUND/.test(String((e as { digest?: string })?.digest ?? e))

// Importing a page pulls its whole module graph (topic page ~2 s cold); give
// the suite headroom under load.
describe('generateMetadata on a missing slug', { timeout: 30_000 }, () => {
  it('topic page throws notFound', async () => {
    const { generateMetadata } = await import('@/app/topics/[slug]/page')
    await expect(generateMetadata({ params })).rejects.toSatisfy(isNotFound)
  })
  it('interactive lesson page throws notFound', async () => {
    const { generateMetadata } = await import('@/app/topics/[slug]/interactive/page')
    await expect(generateMetadata({ params })).rejects.toSatisfy(isNotFound)
  })
  it('category page throws notFound', async () => {
    const { generateMetadata } = await import('@/app/categories/[slug]/page')
    await expect(generateMetadata({ params })).rejects.toSatisfy(isNotFound)
  })
  it('course page throws notFound', async () => {
    const { generateMetadata } = await import('@/app/courses/[slug]/page')
    await expect(generateMetadata({ params })).rejects.toSatisfy(isNotFound)
  })
})
