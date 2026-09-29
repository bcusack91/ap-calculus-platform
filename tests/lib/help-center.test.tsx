/**
 * Help center (/help): every slug other code can reference resolves to an
 * article, every article has the metadata a page needs, every in-content link
 * points somewhere real, and the pages render without throwing.
 */
import { describe, it, expect, vi } from 'vitest'
import fs from 'fs'
import path from 'path'
import type React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

vi.mock('next/link', () => ({
  default: ({ children, href, ...rest }: { children: React.ReactNode; href: string } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))

import { HELP_ARTICLE_LIST, getHelpArticle, type HelpBlock } from '@/data/help/articles'
import { HELP_ARTICLES as SLUG_MAP } from '@/data/help/slugs'
import { parseInline } from '@/data/help/inline'
import HelpLink, { HELP_ARTICLES, helpHref } from '@/components/HelpLink'
import HelpCenterPage, { metadata as landingMetadata } from '@/app/help/page'
import HelpArticlePage, { generateMetadata, generateStaticParams } from '@/app/help/[slug]/page'

/** Every piece of inline text in a block (steps, notes, FAQ answers…). */
function blockTexts(block: HelpBlock): string[] {
  switch (block.type) {
    case 'h2':
    case 'p':
    case 'note':
      return [block.text]
    case 'steps':
    case 'list':
      return block.items
    case 'faq':
      return block.items.flatMap((i) => [i.q, i.a])
    case 'terms':
      return block.items.map((i) => i.definition)
  }
}

function anchorsOf(slug: string): Set<string> {
  const article = getHelpArticle(slug)
  const ids = new Set<string>()
  for (const b of article?.blocks ?? []) {
    if (b.type === 'h2') ids.add(b.id)
    if (b.type === 'terms') b.items.forEach((t) => ids.add(t.id))
  }
  return ids
}

/** Does a site path have a page file? (Static segments only — enough for help copy.) */
function routeExists(p: string): boolean {
  const clean = p.split('#')[0].split('?')[0].replace(/\/$/, '')
  const dir = path.join(process.cwd(), 'src/app', clean)
  return fs.existsSync(path.join(dir, 'page.tsx')) || fs.existsSync(path.join(dir, 'page.ts'))
}

describe('help article registry', () => {
  it('re-exports the same slug map from HelpLink', () => {
    expect(HELP_ARTICLES).toBe(SLUG_MAP)
  })

  it('has an article for every slug in the HelpLink map', () => {
    for (const [key, slug] of Object.entries(HELP_ARTICLES)) {
      expect(getHelpArticle(slug), `${key} → ${slug}`).toBeDefined()
    }
  })

  it('has no article missing from the slug map, and no duplicate slugs', () => {
    const mapped = new Set<string>(Object.values(HELP_ARTICLES))
    const slugs = HELP_ARTICLE_LIST.map((a) => a.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const s of slugs) expect(mapped.has(s), s).toBe(true)
  })

  it('covers the required articles', () => {
    for (const slug of [
      'getting-started-students',
      'getting-started-teachers',
      'why-are-my-flashcards-locked',
      'what-does-cleared-mean',
      'study-modes-and-decks',
      'joining-a-class',
      'diagnostics-and-study-plans',
      'competitive-mode',
      'class-diagnostics',
      'class-games-and-live-lessons',
      'roster-import',
      'glossary',
    ]) {
      expect(getHelpArticle(slug), slug).toBeDefined()
    }
  })

  it('gives every article a title, a usable description and a body', () => {
    for (const a of HELP_ARTICLE_LIST) {
      expect(a.title.trim().length, a.slug).toBeGreaterThan(3)
      expect(a.description.trim().length, a.slug).toBeGreaterThan(40)
      expect(a.description.length, `${a.slug} description is too long for a meta tag`).toBeLessThanOrEqual(170)
      expect(a.blocks.length, a.slug).toBeGreaterThan(0)
    }
  })

  it('uses unique anchors within each article', () => {
    for (const a of HELP_ARTICLE_LIST) {
      const ids: string[] = []
      for (const b of a.blocks) {
        if (b.type === 'h2') ids.push(b.id)
        if (b.type === 'terms') b.items.forEach((t) => ids.push(t.id))
      }
      expect(new Set(ids).size, a.slug).toBe(ids.length)
    }
  })

  it('only relates to existing, other articles', () => {
    for (const a of HELP_ARTICLE_LIST) {
      for (const r of a.related) {
        expect(r, `${a.slug} relates to itself`).not.toBe(a.slug)
        expect(getHelpArticle(r), `${a.slug} → ${r}`).toBeDefined()
      }
    }
  })

  it('links only to real help articles, anchors and site pages', () => {
    for (const a of HELP_ARTICLE_LIST) {
      for (const text of a.blocks.flatMap(blockTexts)) {
        for (const t of parseInline(text)) {
          if (t.kind !== 'link') continue
          expect(t.href.startsWith('/'), `${a.slug}: external link ${t.href}`).toBe(true)
          const [pathname, anchor] = t.href.split('#')
          if (pathname.startsWith('/help/')) {
            const target = pathname.slice('/help/'.length)
            expect(getHelpArticle(target), `${a.slug} → ${t.href}`).toBeDefined()
            if (anchor) expect(anchorsOf(target).has(anchor), `${a.slug} → ${t.href}`).toBe(true)
          } else {
            expect(routeExists(pathname), `${a.slug} → ${t.href} has no page`).toBe(true)
          }
        }
      }
    }
  })

  it('leaves no unparsed markup behind', () => {
    for (const a of HELP_ARTICLE_LIST) {
      for (const text of a.blocks.flatMap(blockTexts)) {
        const plain = parseInline(text).map((t) => t.text).join('')
        expect(plain, a.slug).not.toMatch(/\*\*|\]\(/)
      }
    }
  })
})

describe('HelpLink', () => {
  it('builds hrefs with optional anchors', () => {
    expect(helpHref(HELP_ARTICLES.glossary)).toBe('/help/glossary')
    expect(helpHref(HELP_ARTICLES.glossary, 'exit-quiz')).toBe('/help/glossary#exit-quiz')
  })

  it('renders an accessible "?" link to the article', () => {
    const html = renderToStaticMarkup(
      <HelpLink article={HELP_ARTICLES.flashcardsLocked} label="Why are my flashcards locked?" />,
    )
    expect(html).toContain('href="/help/why-are-my-flashcards-locked"')
    expect(html).toContain('aria-label="Why are my flashcards locked?"')
    expect(html).toContain('aria-hidden="true"')
  })

  it('says when it opens a new tab', () => {
    const html = renderToStaticMarkup(
      <HelpLink article={HELP_ARTICLES.whatClearedMeans} newTab />,
    )
    expect(html).toContain('target="_blank"')
    expect(html).toContain('aria-label="Help (opens in a new tab)"')
  })
})

describe('help pages', () => {
  it('landing page has a canonical and renders both paths and every article', () => {
    expect(landingMetadata.alternates?.canonical).toBe('https://www.studymondo.com/help')
    const html = renderToStaticMarkup(<HelpCenterPage />)
    expect(html).toContain('I’m a student')
    expect(html).toContain('I’m a teacher')
    expect(html).toContain('href="/contact"')
    for (const a of HELP_ARTICLE_LIST) expect(html, a.slug).toContain(`href="/help/${a.slug}"`)
  })

  it('pre-renders exactly the known articles', () => {
    expect(generateStaticParams().map((p) => p.slug).sort()).toEqual(
      HELP_ARTICLE_LIST.map((a) => a.slug).sort(),
    )
  })

  it.each(HELP_ARTICLE_LIST.map((a) => [a.slug]))('renders /help/%s with metadata and a contact link', async (slug) => {
    const params = Promise.resolve({ slug })
    const meta = await generateMetadata({ params })
    const article = getHelpArticle(slug)!
    expect(meta.title).toBe(`${article.title} | Study Mondo Help`)
    expect(meta.description).toBe(article.description)
    expect(meta.alternates?.canonical).toBe(`https://www.studymondo.com/help/${slug}`)

    const html = renderToStaticMarkup(await HelpArticlePage({ params }))
    expect(html).toContain('Still stuck?')
    expect(html).toContain('href="/contact"')
  })

  it('404s an unknown slug in generateMetadata, before anything streams', async () => {
    await expect(generateMetadata({ params: Promise.resolve({ slug: 'nope' }) })).rejects.toThrow()
  })

  it('is listed in the sitemap', () => {
    const sitemap = fs.readFileSync('src/app/sitemap.ts', 'utf8')
    expect(sitemap).toContain('HELP_ARTICLE_LIST')
    expect(sitemap).toContain('`${baseUrl}/help`')
  })
})
