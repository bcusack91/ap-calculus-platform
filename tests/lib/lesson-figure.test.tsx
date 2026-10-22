import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { renderToStaticMarkup } from 'react-dom/server'
import { LessonFigure, LessonFigures } from '@/components/lesson/LessonFigure'
import { figureProblems, sectionFigures, type LessonFigureSpec } from '@/lib/lesson-figure'

const GRAPH =
  '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">' +
  '<g stroke="currentColor"><line x1="20" y1="190" x2="305" y2="190"/><line x1="40" y1="200" x2="40" y2="10"/></g>' +
  '<g class="fig-accent"><path d="M 50 170 Q 110 80 160 60" fill="none" stroke="currentColor"/>' +
  '<circle class="fig-bg" cx="160" cy="60" r="4.5" stroke="currentColor"/><circle cx="160" cy="130" r="4.5" fill="currentColor"/></g>' +
  '<text x="160" y="206" fill="currentColor">1</text></svg>'

const FIG: LessonFigureSpec = {
  svg: GRAPH,
  alt: 'Graph of f with an open circle at (1, 4) and a filled dot at (1, 2).',
  caption: 'Figure 1. The graph of $f$.',
}

describe('lesson figure shape', () => {
  it('normalizes one figure or an array; ignores junk', () => {
    expect(sectionFigures({ figure: FIG })).toEqual([FIG])
    expect(sectionFigures({ figure: [FIG, FIG] })).toHaveLength(2)
    expect(sectionFigures({})).toEqual([])
    expect(sectionFigures({ figure: [null, { alt: 'x' }, FIG] })).toEqual([FIG])
  })

  it('accepts a currentColor graph with alt text', () => {
    expect(figureProblems(FIG)).toEqual([])
  })

  it('rejects scripts, handlers, style, external refs, missing viewBox and missing alt', () => {
    expect(figureProblems({ ...FIG, svg: GRAPH.replace('</svg>', '<script>alert(1)</script></svg>') })).toContain('tag <script> is not allowed')
    expect(figureProblems({ ...FIG, svg: GRAPH.replace('<svg ', '<svg onload="x()" ') }).length).toBeGreaterThan(0)
    expect(figureProblems({ ...FIG, svg: GRAPH.replace('<svg ', '<svg style="color:red" ') }).length).toBeGreaterThan(0)
    expect(figureProblems({ ...FIG, svg: GRAPH.replace('</svg>', '<image href="https://x/y.png"/></svg>') }).length).toBeGreaterThan(0)
    expect(figureProblems({ ...FIG, svg: GRAPH.replace(' viewBox="0 0 320 220"', '') })).toContain('needs a viewBox so it scales to the column')
    expect(figureProblems({ svg: GRAPH })).toContain('alt text is required (describe what the graph shows)')
    expect(figureProblems({ ...FIG, size: 'xl' })).toContain("size must be 'sm', 'md' or 'lg'")
  })
})

describe('<LessonFigure>', () => {
  it('draws the sanitized SVG with alt text and a KaTeX caption', () => {
    const html = renderToStaticMarkup(<LessonFigure figure={FIG} />)
    expect(html).toContain('<figure')
    expect(html).toContain('role="img"')
    expect(html).toContain(`aria-label="${FIG.alt}"`)
    expect(html).toContain('<svg viewBox="0 0 320 220"')
    expect(html).toContain('<figcaption')
    expect(html).toContain('class="katex"')
  })

  it('themes the figure for light AND dark mode (currentColor text colour + fig-* classes)', () => {
    const html = renderToStaticMarkup(<LessonFigure figure={FIG} />)
    for (const cls of [
      'bg-white', 'text-gray-800', 'dark:bg-gray-900', 'dark:text-gray-100',
      '[&amp;_.fig-accent]:text-blue-600', 'dark:[&amp;_.fig-accent]:text-blue-400',
      '[&amp;_.fig-bg]:fill-white', 'dark:[&amp;_.fig-bg]:fill-gray-900',
      '[&amp;_.fig-muted]:text-gray-400', 'dark:[&amp;_.fig-muted]:text-gray-500',
    ]) {
      expect(html, cls).toContain(cls)
    }
  })

  it('never injects an unsafe SVG; shows the alt text instead', () => {
    const bad = { ...FIG, svg: GRAPH.replace('<svg ', '<svg onload="steal()" ') }
    const html = renderToStaticMarkup(<LessonFigure figure={bad} />)
    expect(html).not.toContain('<svg')
    expect(html).not.toContain('steal')
    expect(html).toContain(FIG.alt)
  })

  it('lays several figures out as a two-column grid', () => {
    const html = renderToStaticMarkup(<LessonFigures figures={[FIG, FIG, FIG, FIG]} />)
    expect(html).toContain('sm:grid-cols-2')
    expect(html.match(/<figure/g)).toHaveLength(4)
  })
})

describe('authored lesson figures pass the checks', () => {
  it('every `figure` in src/data/interactive-lessons is a safe SVG with alt text', async () => {
    const dir = path.resolve(__dirname, '../../src/data/interactive-lessons')
    const files = readdirSync(dir).filter((f) => f.endsWith('.ts') && !f.includes(' 2') && /\bfigure\s*:/.test(readFileSync(path.join(dir, f), 'utf8')))
    const problems: string[] = []
    for (const f of files) {
      const mod = (await import(path.join(dir, f))) as Record<string, unknown>
      for (const v of Object.values(mod)) {
        const sections = (v as { sections?: unknown[] })?.sections
        if (!Array.isArray(sections)) continue
        for (const s of sections as { id?: string; type?: string; figure?: unknown; content?: unknown }[]) {
          if (s.figure === undefined && s.type !== 'figure') continue
          const figs = Array.isArray(s.figure) ? s.figure : [s.figure]
          if (s.type === 'figure' && (s.figure === undefined || figs.length === 0)) problems.push(`${f} ${s.id}: type 'figure' needs a figure`)
          for (const fig of figs) for (const p of figureProblems(fig)) problems.push(`${f} ${s.id}: ${p}`)
        }
      }
    }
    expect(problems).toEqual([])
  })
})
