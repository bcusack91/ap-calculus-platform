import { renderKatexSync } from '@/lib/katex-lazy'

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
export function renderRichText(text: string): string {
  // Step 1: Convert markdown tables to HTML
  let result = renderMarkdownTables(text)

  // Step 2: Convert newlines to <br> for non-table content
  result = result.replace(/\n/g, '<br>')

  // Step 3: Render LaTeX
  result = result.replace(/\$\$((?:[^$\\]|\\.)+)\$\$/g, (_match, latex) => {
    try { return renderKatexSync(latex.trim(), { displayMode: true }) }
    catch { return latex }
  })
  result = result.replace(/\$((?:[^$\\]|\\.)+)\$/g, (_match, latex) => {
    try { return renderKatexSync(latex.trim(), { displayMode: false }) }
    catch { return latex }
  })

  return result
}
