import { describe, it, expect, beforeAll } from 'vitest'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'

/**
 * Guards for markdown emphasis in renderRichText.
 *
 * The renderer had no bold step, so every `**Explanation:**` / `**Figure 1.**`
 * printed its asterisks literally (954 of 1,034 strings on the MCAT
 * full-length/CARS exam). Emphasis now runs after tables/newlines and before
 * KaTeX; these tests pin the three ways that can go wrong — corrupting a math
 * span, emitting tags across a table cell or line boundary, and italicizing
 * arithmetic.
 */
describe('renderRichText emphasis', () => {
  beforeAll(async () => {
    // renderKatexSync is a no-op until KaTeX has been loaded.
    await preloadKatex()
  })

  it('renders **bold** as <strong> and leaves no asterisks', () => {
    const html = renderRichText('**Explanation:** the answer is B.')
    expect(html).toContain('<strong>Explanation:</strong>')
    expect(html).not.toContain('*')
  })

  it('renders *italic* as <em>', () => {
    expect(renderRichText('detects *Helicobacter pylori* in the stomach')).toContain(
      '<em>Helicobacter pylori</em>',
    )
  })

  it('bolds a span that wraps inline math, and the math still renders', () => {
    const html = renderRichText('**Answer: $x^2$**')
    expect(html).toContain('<strong>')
    expect(html).toContain('katex')
    expect(html).not.toContain('**')
  })

  it('never emits emphasis tags inside a math span', () => {
    const html = renderRichText('$a \\times b$ and $c \\times d$')
    expect(html).not.toContain('<strong>')
    expect(html).not.toContain('<em>')
    expect(html).toContain('katex')
  })

  it('leaves a lone asterisk inside math alone (critical values z*, t*)', () => {
    const html = renderRichText(
      'Use $z^* = 1.96$ for 95% confidence and $t^* = 2.05$ for a small sample.',
    )
    expect(html).not.toContain('<em>')
    // both spans compiled as math
    expect(html.match(/class="katex"/g)?.length).toBe(2)
  })

  it('does not italicize multiplication or compound assignment', () => {
    const arithmetic = renderRichText('x *= 2 makes x = 16, the same as x = x * 2')
    expect(arithmetic).not.toContain('<em>')
    expect(renderRichText('* first item\n* second item')).not.toContain('<em>')
  })

  it('bolds table cells without breaking the table markup', () => {
    const html = renderRichText(
      'Results:\n| Stage | **ATP** |\n| --- | --- |\n| **Glycolysis** | 2 |\n',
    )
    expect(html).toContain('<table')
    expect(html).toContain('<th><strong>ATP</strong></th>')
    expect(html).toContain('<td><strong>Glycolysis</strong></td>')
    // balanced tags: one <strong> per </strong>
    expect(html.match(/<strong>/g)?.length).toBe(html.match(/<\/strong>/g)?.length)
  })

  it('never lets a bold span cross a cell or line boundary', () => {
    // Unpaired `**` on either side of a cell/line break must stay literal
    // rather than emit a <strong> that swallows the markup between them.
    const cells = renderRichText('| **a | b** |\n| --- | --- |\n| 1 | 2 |\n')
    expect(cells).not.toContain('<strong>')
    const lines = renderRichText('**opening on this line\nand closing on the next**')
    expect(lines).not.toContain('<strong>')
  })

  it('still renders display math and markdown tables next to bold text', () => {
    const html = renderRichText('**Setup**\n$$E = mc^2$$\n| a | b |\n| --- | --- |\n| 1 | 2 |\n')
    expect(html).toContain('<strong>Setup</strong>')
    expect(html).toContain('katex-display')
    expect(html).toContain('<table')
  })

  it('bolds a span containing an inequality and math ("**$2 < t < 4$**")', () => {
    const html = renderRichText('**$2 < t < 4$**\n\nthe particle moves left there.')
    expect(html).toContain('<strong>')
    expect(html).not.toContain('**')
    expect(html).toContain('katex')
  })

  it('bolds absolute-value math when there is no table to protect', () => {
    const html = renderRichText('**$3\\ln|x| + C$**\n\nThe absolute value is needed for $x < 0$.')
    expect(html).toContain('<strong>')
    expect(html).not.toContain('**')
  })

  it('unescapes a CommonMark-escaped currency dollar in prose', () => {
    // Authored as `\\$40,000` in source; the content gate requires the escape,
    // and the renderer used to print the backslash on screen.
    const html = renderRichText('most earn between \\$40,000 and \\$80,000 a year')
    expect(html).not.toContain('\\$')
    expect(html).toContain('$40,000')
    expect(html).toContain('$80,000')
  })

  it('still renders an escaped dollar INSIDE math as KaTeX', () => {
    const html = renderRichText('If $5$ items cost $\\$12$, how much do $9$ items cost?')
    expect(html.match(/class="katex"/g)?.length).toBe(3)
    expect(html).not.toContain('\\$')
  })

  it('keeps currency prose literal (existing guard) alongside bold', () => {
    const html = renderRichText('**Cost:** the ticket is $5 and the program is $10.')
    expect(html).toContain('<strong>Cost:</strong>')
    expect(html).toContain('$5')
    expect(html).toContain('$10')
  })
})

describe('nested emphasis', () => {
  it('renders italic nested inside bold, as authored citations do', () => {
    const out = renderRichText('**Du Bois, *The Souls of Black Folk* (1903), excerpt:**')
    expect(out).toBe('<strong>Du Bois, <em>The Souls of Black Folk</em> (1903), excerpt:</strong>')
  })

  it('still renders plain bold and plain italic side by side', () => {
    expect(renderRichText('**bold** and *italic*')).toBe('<strong>bold</strong> and <em>italic</em>')
  })

  it('renders a triple-asterisk run as bold italic', () => {
    expect(renderRichText('***Tarikh al-Sudan***')).toBe('<strong><em>Tarikh al-Sudan</em></strong>')
  })

  it('renders bold that ends with an italic title', () => {
    expect(renderRichText('**2013 *Shelby County v. Holder***')).toBe('<strong>2013 <em>Shelby County v. Holder</em></strong>')
  })

  it('renders bold that starts with an italic title', () => {
    expect(renderRichText('***Souls* of Black Folk (1903)**')).toBe('<strong><em>Souls</em> of Black Folk (1903)</strong>')
  })

  it('keeps a stray asterisk pair literal when nothing pairs cleanly', () => {
    expect(renderRichText('rate ** unknown and 2 * 3 * 4')).toBe('rate ** unknown and 2 * 3 * 4')
  })

  it('bolds a title inside a table cell', () => {
    const out = renderRichText('| Event | Note |\n|---|---|\n| **2019 *1619 Project* (Hannah-Jones)** | Reframes founding. |')
    expect(out).toContain('<td><strong>2019 <em>1619 Project</em> (Hannah-Jones)</strong></td>')
  })
})
