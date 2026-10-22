// @vitest-environment jsdom
/**
 * Competitive-mode question text renders through ONE pipeline.
 *
 * The 1v1 match page used to split stems/options/explanations on `$` itself
 * and never saw a markdown table, so a pipe table printed its `|` literally
 * (owner report 2026-10-22: data rows render "as a jumble"). The page now
 * renders through CompetitiveRichText → renderRichText, the same path as the
 * async, team-match and teacher-lobby surfaces. These tests pin that path:
 * a pipe-table stem becomes a <table> with the right cell counts, KaTeX in
 * cells still typesets, an option holding a table (or a lone `|`) is fine
 * inside a button, and every table authored in the competitive banks renders
 * with a consistent column count.
 */
import { beforeAll, describe, expect, it } from 'vitest'
import { act, render as rtlRender } from '@testing-library/react'
import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import type React from 'react'
import { CompetitiveRichText, renderCompetitiveText } from '@/components/competitive/CompetitiveRichText'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'

const STEM = [
  "Selected values of $f$ and $f'$ are given.",
  '',
  '| $x$ | $-1$ | $0$ | $2$ | $3$ |',
  '|---|---|---|---|---|',
  '| $f(x)$ | 3 | 2 | 0 | $-1$ |',
  "| $f'(x)$ | $-1$ | $-2$ | $-3$ | $-4$ |",
  '',
  "What is $(f \\circ f)'(0)$?",
].join('\n')

beforeAll(async () => {
  // renderKatexSync is a passthrough until the lazy KaTeX module has loaded.
  await preloadKatex()
})

/** Render and flush the component's KaTeX-ready effect inside act(). */
async function render(ui: React.ReactElement) {
  let result!: ReturnType<typeof rtlRender>
  await act(async () => {
    result = rtlRender(ui)
  })
  return result
}

describe('CompetitiveRichText (the 1v1 match page render path)', () => {
  it('renders a pipe-table stem as a <table> with the right cell counts, KaTeX intact in cells', async () => {
    const { container } = await render(<CompetitiveRichText text={STEM} />)
    expect(container.querySelectorAll('table.inline-table')).toHaveLength(1)
    expect(container.querySelectorAll('thead th')).toHaveLength(5)
    expect(container.querySelectorAll('tbody tr')).toHaveLength(2)
    expect(container.querySelectorAll('tbody td')).toHaveLength(10)
    // The header and the first body cell are typeset math, not raw TeX.
    expect(container.querySelector('thead th .katex annotation')?.textContent).toBe('x')
    const firstTd = container.querySelector('tbody td')!
    expect(firstTd.querySelector('.katex annotation')?.textContent).toBe('f(x)')
    expect(container.querySelector('tbody tr:nth-child(2) td .katex annotation')?.textContent).toBe("f'(x)")
    // No pipe survives anywhere in the visible text; the prose around the table does.
    expect(container.textContent).not.toContain('|')
    expect(container.textContent).toContain('Selected values of')
    expect(container.textContent).toContain('What is')
    // Block wrapper for stems (a table is block content).
    expect(container.firstElementChild?.tagName).toBe('DIV')
  })

  it('renders an option holding a pipe table inside a button; a lone | is not a table', async () => {
    const opt = '| $t$ | 0 | 1 |\n|---|---|---|\n| $v(t)$ | 4 | 6 |'
    const { container } = await render(
      <button type="button">
        <CompetitiveRichText text={opt} inline />
      </button>,
    )
    expect(container.querySelector('button > span.competitive-rich')).not.toBeNull()
    expect(container.querySelectorAll('button table.inline-table')).toHaveLength(1)
    expect(container.querySelectorAll('button tbody td')).toHaveLength(3)

    const { container: plain } = await render(
      <button type="button">
        <CompetitiveRichText text="the set {x | x > 0}" inline />
      </button>,
    )
    expect(plain.querySelector('table')).toBeNull()
    expect(plain.textContent).toContain('{x | x > 0}')

    // Absolute value in prose is math, not a cell boundary.
    const { container: abs } = await render(<CompetitiveRichText text="Solve $|x - 2| = 3$." inline />)
    expect(abs.querySelector('table')).toBeNull()
    expect(abs.querySelector('.katex annotation')?.textContent).toBe('|x - 2| = 3')
  })

  it('matches renderRichText for ordinary text and keeps the bare-LaTeX legacy path', () => {
    expect(renderCompetitiveText(STEM)).toBe(renderRichText(STEM))
    const prose = '**Explanation:** $P(A \\mid B) = 0.5$ and $|x| < 1$.'
    expect(renderCompetitiveText(prose)).toBe(renderRichText(prose))
    // Unit-circle era prompts are raw LaTeX with no delimiters at all.
    expect(renderCompetitiveText('\\frac{1}{2}')).toContain('class="katex"')
    // A `\$` currency escape is prose, not the legacy path.
    expect(renderCompetitiveText('costs \\$5 each')).toBe('costs $5 each')
  })

  it('a bare currency $ in the prose before a table does not swallow the table into a math span', () => {
    const text = 'Revenue (in $1000s) by interval:\n\n| $h$ | $0.05$ | $0.5$ |\n|---|---|---|\n| Rate | 9 | 8 |\n\nEstimate the rate.'
    const host = document.createElement('div')
    host.innerHTML = renderCompetitiveText(text)
    expect(host.querySelectorAll('table.inline-table')).toHaveLength(1)
    expect(host.querySelectorAll('thead th')).toHaveLength(3)
    expect(host.querySelector('thead th .katex annotation')?.textContent).toBe('h')
    expect(host.textContent).toContain('(in $1000s)')
  })
})

/** Every string/template literal in a .ts file, via the TypeScript parser. */
function stringLiterals(file: string): string[] {
  const sf = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true)
  const out: string[] = []
  const visit = (n: ts.Node) => {
    if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) out.push(n.text)
    else if (ts.isTemplateExpression(n)) {
      out.push(n.head.text + n.templateSpans.map((s) => '${}' + s.literal.text).join(''))
    }
    ts.forEachChild(n, visit)
  }
  visit(sf)
  return out
}

/** Expected (header cells, body rows) of each markdown table in `text`, in order. */
function expectedTables(text: string): { cols: number; rows: number }[] {
  const lines = text.split('\n')
  const tables: { cols: number; rows: number }[] = []
  for (let i = 0; i + 1 < lines.length; i++) {
    if (!lines[i].includes('|') || !/^\s*\|?\s*[-:]+[-:| ]+\s*$/.test(lines[i + 1])) continue
    const cells = (l: string) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').length
    const cols = cells(lines[i])
    let rows = 0
    let j = i + 2
    while (j < lines.length && lines[j].includes('|') && lines[j].trim() !== '') {
      rows++
      j++
    }
    tables.push({ cols, rows })
    i = j - 1
  }
  return tables
}

describe('competitive bank pipe tables', () => {
  const dir = path.join(process.cwd(), 'src/data/competitive-questions')
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts'))

  it('every authored table renders as a <table> whose rows all match the header width', () => {
    const problems: string[] = []
    let tables = 0
    for (const f of files) {
      for (const text of stringLiterals(path.join(dir, f))) {
        if (!/\|\s*:?-{2,}/.test(text)) continue
        const expected = expectedTables(text)
        if (expected.length === 0) continue
        const host = document.createElement('div')
        host.innerHTML = renderCompetitiveText(text)
        const rendered = [...host.querySelectorAll('table.inline-table')]
        if (rendered.length !== expected.length) {
          problems.push(`${f}: ${expected.length} table(s) authored, ${rendered.length} rendered — ${text.slice(0, 80)}`)
          continue
        }
        rendered.forEach((table, k) => {
          tables++
          const { cols, rows } = expected[k]
          const ths = table.querySelectorAll('thead th').length
          const trs = [...table.querySelectorAll('tbody tr')]
          if (ths !== cols) problems.push(`${f}: header has ${ths} cells, expected ${cols} — ${text.slice(0, 80)}`)
          if (trs.length !== rows) problems.push(`${f}: ${trs.length} body rows, expected ${rows} — ${text.slice(0, 80)}`)
          for (const tr of trs) {
            const tds = tr.querySelectorAll('td').length
            if (tds !== cols) problems.push(`${f}: a row has ${tds} cells, header has ${cols} — ${tr.textContent?.slice(0, 60)}`)
          }
          // A `|` inside a cell means math split at a pipe (or a stray pipe survived).
          if ((table.textContent ?? '').includes('|')) problems.push(`${f}: pipe inside a cell — ${text.slice(0, 80)}`)
        })
      }
    }
    expect(problems).toEqual([])
    expect(tables).toBeGreaterThan(80)
  })
})
