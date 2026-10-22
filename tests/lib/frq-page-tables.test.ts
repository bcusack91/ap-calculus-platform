import { readdirSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { describe, expect, it } from 'vitest'

/**
 * FRQ prompts, parts and sample answers include data tables (Bio, Chem,
 * Macro, Micro, and the calculus banks). Without remark-gfm, ReactMarkdown
 * prints a pipe table as raw text, so every markdown renderer on an FRQ page
 * must load it next to remark-math (found 2026-10-22: all 22 pages lacked it).
 */
const APP = join(process.cwd(), 'src/app')
const frqPages = readdirSync(APP)
  .filter((d) => d.endsWith('-frq'))
  .map((d) => join(APP, d, 'page.tsx'))
  .filter((p) => existsSync(p))

describe('FRQ pages render markdown tables', () => {
  it('finds the FRQ pages', () => {
    expect(frqPages.length).toBeGreaterThanOrEqual(20)
  })

  it.each(frqPages)('%s loads remark-gfm wherever it loads remark-math', (page) => {
    const src = readFileSync(page, 'utf8')
    const plugins = [...src.matchAll(/remarkPlugins=\{\[([^\]]*)\]\}/g)].map((m) => m[1])
    for (const list of plugins) {
      if (list.includes('remarkMath')) expect(list, page).toContain('remarkGfm')
    }
    if (plugins.some((l) => l.includes('remarkGfm'))) expect(src).toContain("from 'remark-gfm'")
  })
})
