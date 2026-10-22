import { beforeAll, describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import { countTableCells, protectTableMathPipes } from '@/lib/table-math-pipes'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'

/** The lesson pipeline (FadeInText): currency escape → table-math protection → remark-math + GFM + KaTeX. */
function renderLessonMarkdown(md: string): string {
  return renderToStaticMarkup(
    <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
      {protectTableMathPipes(escapeCurrencyMath(md))}
    </ReactMarkdown>,
  )
}

/** Cells of the first body row, as the TeX source of their math (or their text). */
function firstBodyRowCells(html: string): string[] {
  const body = html.split('<tbody>')[1] ?? ''
  const row = body.split('</tr>')[0]
  return [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => {
    const tex = [...m[1].matchAll(/<annotation encoding="application\/x-tex">([\s\S]*?)<\/annotation>/g)].map((a) => a[1])
    return tex.length ? tex.join(' ') : m[1]
  })
}

describe('protectTableMathPipes', () => {
  it('rewrites a pipe inside table-cell math to \\vert', () => {
    const md = '| f | value |\n|---|---|\n| $|x|$ | 2 |'
    expect(protectTableMathPipes(md)).toBe('| f | value |\n|---|---|\n| $\\vert x\\vert$ | 2 |')
  })

  it('handles ln|x| + C, sums and conditional probability', () => {
    const md = [
      '| Integrand | Antiderivative | Note |',
      '| --- | --- | --- |',
      '| $\\frac{1}{x}$ | $\\ln|x| + C$ | $\\sum |a_n|$ and $P(A|B)$ |',
    ].join('\n')
    const out = protectTableMathPipes(md).split('\n')[2]
    expect(out).toBe('| $\\frac{1}{x}$ | $\\ln\\vert x\\vert + C$ | $\\sum \\vert a_n\\vert$ and $P(A\\vert B)$ |')
    expect(countTableCells(out)).toBe(3)
  })

  it('protects a header row so the table is still recognised', () => {
    const md = '| $|t|$ value | Guide |\n|---|---|\n| 2 | strong |'
    expect(protectTableMathPipes(md).split('\n')[0]).toBe('| $\\vert t\\vert$ value | Guide |')
  })

  it('leaves \\lvert…\\rvert, \\| and prose untouched', () => {
    const lvert = '| f | v |\n|---|---|\n| $\\lvert x\\rvert$ | 2 |'
    expect(protectTableMathPipes(lvert)).toBe(lvert)
    const norm = '| speed | v |\n|---|---|\n| $\\|\\vec v\\|$ | 2 |'
    expect(protectTableMathPipes(norm)).toBe(norm)
    const prose = 'Outside a table $|x|$ is fine.'
    expect(protectTableMathPipes(prose)).toBe(prose)
  })

  it('never re-pairs currency cells', () => {
    const md = '| Item | Price |\n|---|---|\n| $5 | $10 |'
    expect(protectTableMathPipes(md)).toBe(md)
  })

  it('leaves fenced code alone', () => {
    const md = '```\n| a | b |\n|---|---|\n| $|x|$ | 2 |\n```'
    expect(protectTableMathPipes(md)).toBe(md)
  })
})

describe('lesson markdown pipeline renders math with pipes inside table cells', () => {
  it('$|x|$ is one cell with the math intact', () => {
    const html = renderLessonMarkdown('| f | value |\n|---|---|\n| $|x|$ | 2 |')
    const cells = firstBodyRowCells(html)
    expect(cells).toHaveLength(2)
    expect(cells[0]).toBe('\\vert x\\vert')
    expect(cells[1]).toBe('2')
  })

  it('a row of absolute values keeps its column count', () => {
    const html = renderLessonMarkdown(
      '| Quantity | Formula |\n| --- | --- |\n| Total distance | $\\int_a^b |v(t)|\\,dt$ |',
    )
    const cells = firstBodyRowCells(html)
    expect(cells).toEqual(['Total distance', '\\int_a^b \\vert v(t)\\vert\\,dt'])
  })

  it('\\lvert…\\rvert (the hand-fixed BC tables) still renders', () => {
    const html = renderLessonMarkdown('| f | value |\n|---|---|\n| $\\lvert x\\rvert$ | 2 |')
    expect(firstBodyRowCells(html)).toEqual(['\\lvert x\\rvert', '2'])
  })
})

describe('renderRichText tables (exercise text) get the same protection', () => {
  beforeAll(async () => {
    await preloadKatex()
  })

  it('$|x|$ stays in one cell', () => {
    const html = renderRichText('| f | value |\n|---|---|\n| $|x|$ | 2 |')
    const row = html.split('<tbody>')[1].split('</tr>')[0]
    expect((row.match(/<td>/g) ?? []).length).toBe(2)
    expect(row).toContain('katex')
    expect(row).not.toMatch(/<td>\$<\/td>/)
  })
})
