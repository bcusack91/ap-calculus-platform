import { renderKatexSync } from '@/lib/katex-lazy'

/** An emphasis tag this renderer injected in step 1. */
const EMPHASIS_TAG = /<\/?(?:strong|em)>/

/** A markdown table's `| --- | --- |` separator line. */
const TABLE_SEPARATOR = /^\s*\|?\s*[-:]+[-:|  ]+\s*$/m

/**
 * Convert markdown pipe-table syntax to HTML <table>.
 * Handles tables embedded in longer text (table can be preceded/followed by text).
 */
function renderMarkdownTables(text: string): string {
  // Split by newlines, find table blocks, convert them
  const lines = text.split('\n')
  const result: string[] = []
  let i = 0

  while (i < lines.length) {
    // Check if this line starts a table (contains | and the next line is a separator)
    if (
      lines[i].includes('|') &&
      i + 1 < lines.length &&
      /^\s*\|?\s*[-:]+[-:|  ]+\s*$/.test(lines[i + 1])
    ) {
      // Found a table - collect all table rows
      const tableLines: string[] = []
      const headerLine = lines[i]
      tableLines.push(headerLine)
      i++ // skip header
      i++ // skip separator line

      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        tableLines.push(lines[i])
        i++
      }

      // Convert to HTML table
      const headerCells = parsePipeCells(tableLines[0])
      let html = '<table class="inline-table"><thead><tr>'
      for (const cell of headerCells) {
        html += `<th>${cell}</th>`
      }
      html += '</tr></thead><tbody>'

      for (let r = 1; r < tableLines.length; r++) {
        const cells = parsePipeCells(tableLines[r])
        html += '<tr>'
        for (const cell of cells) {
          html += `<td>${cell}</td>`
        }
        html += '</tr>'
      }
      html += '</tbody></table>'
      result.push(html)
    } else {
      result.push(lines[i])
      i++
    }
  }

  return result.join('\n')
}

function parsePipeCells(line: string): string[] {
  // Remove leading/trailing pipes and split
  let trimmed = line.trim()
  if (trimmed.startsWith('|')) trimmed = trimmed.slice(1)
  if (trimmed.endsWith('|')) trimmed = trimmed.slice(0, -1)
  return trimmed.split('|').map(c => c.trim())
}

/**
 * Render text with both markdown tables and LaTeX math.
 * Converts markdown tables to HTML, then processes $...$ and $$...$$ as KaTeX.
 */
/**
 * Reduce inline LaTeX/markdown to readable plain text for short previews and
 * excerpts (card snippets, list summaries) where rendering full KaTeX would be
 * heavy or awkward. NOT a substitute for renderRichText in the main UI.
 */
export function plainTextPreview(text: string): string {
  return text
    .replace(/\$\$([\s\S]+?)\$\$/g, '$1')
    // Inline math: only unwrap when the span actually looks like LaTeX/math.
    // A naive $...$ strip mangles currency pairs ("$5 to $10" -> "5 to 10"), so
    // require a math indicator (a LaTeX command, sub/superscript, brace, or '=')
    // or a short symbol token with no spaces; otherwise leave the literal text.
    .replace(/\$([^$\n]+?)\$/g, (m, inner) =>
      /[\\^_{}=]/.test(inner) || (!/\s/.test(inner) && inner.length <= 8) ? inner : m,
    )
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/\\mathrm\{([^}]*)\}/g, '$1')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\(?:rightarrow|to|longrightarrow)\b/g, '→')
    .replace(/\\(?:rightleftharpoons|leftrightarrow)\b/g, '⇌')
    .replace(/\\pm\b/g, '±')
    .replace(/\\leq\b/g, '≤')
    .replace(/\\geq\b/g, '≥')
    .replace(/\\Delta\b/g, 'Δ')
    .replace(/\\alpha\b/g, 'α')
    .replace(/\\beta\b/g, 'β')
    .replace(/\\mu\b/g, 'μ')
    .replace(/\\pi\b/g, 'π')
    .replace(/\^\{([^}]*)\}/g, '^$1') // superscripts keep a caret marker
    .replace(/_\{([^}]*)\}/g, '$1') // subscripts inline (CH_{3} -> CH3)
    .replace(/([A-Za-z])_(\d)/g, '$1$2') // numeric subscripts (CH_3 -> CH3); leave snake_case/prose underscores
    .replace(/\\[,;: ]/g, ' ') // LaTeX spacing commands
    .replace(/\\[a-zA-Z]+\b/g, '') // drop any remaining commands
    .replace(/[{}]/g, '')
    .replace(/[#*]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Heuristic: does a `$…$` span look like a currency/prose run rather than math?
 * Word problems write amounts like "$2 and a notebook costs $5", whose bare
 * dollar signs the inline-math regex wrongly pairs — rendering the prose between
 * them as italic math and eating the $ signs. Treat a span as currency (leave it
 * literal) when it starts with a number, contains no LaTeX command, and has a
 * word after the number (a space followed by a lowercase letter). Real math
 * (`$3x+2=11$`, `$5x$`, `$3 \text{m}$`) fails this test and still renders.
 */
function looksLikeCurrencyProse(span: string): boolean {
  // Starts with a number and has no math structure (no LaTeX command, no = ^ _ { } < >).
  if (!/^[\d.,]/.test(span) || /[\\=^_{}<>]/.test(span)) return false
  // Currency/prose when EITHER:
  //  (a) there's a word after the number — "$5 to $10", "$2 and a notebook" — or
  //  (b) it's a bare numeric run ENDING with a comma — the "$3, $7, and $12"
  //      list case, whose captured span sits between one amount and the next
  //      `$`, so it always terminates at a comma (e.g. "3, ").
  // A complete numeric LIST ending in a digit — "$6, 17, 25, 6, 6, 9$" from
  // mode/median data-set questions — is genuine math and must render (that
  // shape can't come from currency pairing, whose spans stop at the comma
  // before the next amount). Real math like $3x+2=11$, $5x$, $100$ renders too.
  return /\s[a-z]/.test(span) || (/^[\d.,\s]+$/.test(span) && /,\s*$/.test(span))
}

/**
 * Markdown emphasis → HTML, for the inline subset authored content actually
 * uses: `**bold**` and `*italic*`. Without this every `**Explanation:**` and
 * `**Figure 1.**` printed its asterisks literally — 462 of the 1,386 strings
 * each MCAT full-length form hands this renderer.
 *
 * Runs FIRST, on the raw markdown — before any tag exists — and before KaTeX,
 * so `**Answer: $x$**` bolds the whole span and no rule ever touches KaTeX's
 * own HTML. The content classes are what keep it safe:
 *
 *  - neither may contain a newline, so a span can never cross a line break and
 *    interleave with the `<br>` markup the later steps generate. When the text
 *    holds a pipe table, `|` is excluded too, so a span cannot straddle a cell
 *    boundary; elsewhere `|` is allowed, since absolute-value bold
 *    (`**$\ln|x| + C$**`) is far more common in this content than stray pipes.
 *  - bold allows `$` and `<`, so `**$2 < t < 4$**` bolds and still renders as
 *    math.
 *  - italic excludes `$`, so a lone `*` inside a math span (`z^*`, `t^*` — 171
 *    authored strings) can never pair with another asterisk across the math
 *    delimiters and swallow the text between them.
 *  - italic delimiters follow CommonMark flanking: the opener may not sit
 *    after a word character nor before whitespace, the closer may not sit
 *    after whitespace nor before a word character. That leaves multiplication
 *    (`x = x * 2`), compound assignment (`x *= 2`), critical values (`z*`) and
 *    `* ` bullet lines literal, which is what they should be.
 */
function renderEmphasis(text: string, inTable: boolean): string {
  if (!text.includes('*')) return text
  const bold = inTable ? /\*\*([^*\n|]+?)\*\*/g : /\*\*([^*\n]+?)\*\*/g
  const italic = inTable
    ? /(?<![\w*])\*(?!\s)([^*$\n|]+?)(?<!\s)\*(?![\w*])/g
    : /(?<![\w*])\*(?!\s)([^*$\n]+?)(?<!\s)\*(?![\w*])/g
  // Italic FIRST: authored citations nest it inside bold — `**Du Bois, *The
  // Souls of Black Folk* (1903)**` — and bold's content class excludes `*`, so
  // bold-first left the outer pair literal around a rendered <em>. Converting
  // the inner italic to a tag (no asterisks) lets the outer bold match. The
  // italic pattern cannot consume `**bold**` itself: its opener may not be
  // followed by `*` and its content may not contain one.
  // Runs of three asterisks are bold+italic in CommonMark, and citations put
  // the italic at either edge of a bold span — `***Tarikh al-Sudan***`,
  // `**2013 *Shelby County v. Holder***`, `***Souls* of Black Folk**`. The
  // flanking rule above cannot pair an italic closer that is immediately
  // followed by `*`, so resolve these three shapes first, innermost tag out.
  const cell = inTable ? '[^*\\n|]' : '[^*\\n]'
  const triple = new RegExp(`\\*\\*\\*(${cell}+?)\\*\\*\\*`, 'g')
  const boldEndingItalic = new RegExp(`\\*\\*(${cell}+?)\\*(${cell}+?)\\*\\*\\*`, 'g')
  const boldStartingItalic = new RegExp(`\\*\\*\\*(${cell}+?)\\*(${cell}+?)\\*\\*`, 'g')
  return text
    .replace(triple, '<strong><em>$1</em></strong>')
    .replace(boldEndingItalic, '<strong>$1<em>$2</em></strong>')
    .replace(boldStartingItalic, '<strong><em>$1</em>$2</strong>')
    .replace(italic, '<em>$1</em>')
    .replace(bold, '<strong>$1</strong>')
}

/**
 * Did the emphasis survive KaTeX intact? Every tag opened must still be closed,
 * and none may have been swallowed into a math span — KaTeX escapes what it
 * cannot parse, so a `&lt;strong&gt;` in the output means the tag became
 * visible text.
 */
function emphasisIntact(html: string): boolean {
  return (
    (html.match(/<strong>/g) || []).length === (html.match(/<\/strong>/g) || []).length &&
    (html.match(/<em>/g) || []).length === (html.match(/<\/em>/g) || []).length &&
    !/&lt;\/?(?:strong|em)&gt;/.test(html)
  )
}

export function renderRichText(text: string): string {
  const html = renderPipeline(text, true)
  // Safety net: in a handful of authored strings a bare currency `$` pairs with
  // a real math `$`, and the span between them swallows an emphasis tag into
  // the KaTeX input ("→ **\$14,450**" after "$1000 at 8%"). Rather than emit
  // half a tag, fall back to the pre-emphasis rendering for that string — it
  // shows literal asterisks, exactly as it did before bold support existed.
  return emphasisIntact(html) ? html : renderPipeline(text, false)
}

function renderPipeline(text: string, emphasis: boolean): string {
  // Step 1: Markdown emphasis (bold/italic) — on raw text, before any markup
  let result = emphasis ? renderEmphasis(text, TABLE_SEPARATOR.test(text)) : text

  // Step 2: Convert markdown tables to HTML
  result = renderMarkdownTables(result)

  // Step 3: Convert newlines to <br> for non-table content
  result = result.replace(/\n/g, '<br>')

  // Step 4: Render LaTeX
  result = result.replace(/\$\$((?:[^$\\]|\\.)+)\$\$/g, (match, latex) => {
    if (EMPHASIS_TAG.test(latex)) return match
    try { return renderKatexSync(latex.trim(), { displayMode: true }) }
    catch { return latex }
  })
  result = result.replace(/\$((?:[^$\\]|\\.)+)\$/g, (match, latex) => {
    // Leave currency/prose ("$2 and a notebook costs $5") literal — not math.
    if (looksLikeCurrencyProse(latex)) return match
    // A span that swallowed an emphasis tag is a bare currency `$` pairing with
    // a real one ("**\$10 million**" … "so $\$1$M"), not math: feeding it to
    // KaTeX would escape the tag into visible `&lt;strong&gt;` text.
    if (EMPHASIS_TAG.test(latex)) return match
    try { return renderKatexSync(latex.trim(), { displayMode: false }) }
    catch { return latex }
  })

  // Step 5: honor the CommonMark `\$` escape, the way remark does on the
  // ReactMarkdown surfaces. Authors escape prose currency (`\$40,000`) because
  // the content gate requires it — bare pairs are treated as math delimiters
  // elsewhere — and without this step the backslash printed on screen
  // ("between \$40,000 and \$80,000"). Runs AFTER the math steps, so every
  // remaining `\$` is outside a math span by construction.
  result = result.replace(/\\\$/g, '$')

  return result
}
