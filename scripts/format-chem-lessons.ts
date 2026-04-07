/**
 * Script to apply visual formatting improvements to AP Chemistry interactive lessons:
 * 1. Wrap example problem statements in blockquotes (> **Problem:** ...)
 * 2. Add **Solution:** labels before the work
 * 3. Bold question numbers in drill sections (1) → **1)**)
 * 4. Wrap "Use:" / given data lines in blockquotes
 *
 * Run: npx tsx scripts/format-chem-lessons.ts
 * Use --dry-run to preview changes without writing files
 */

import fs from 'fs'
import path from 'path'

const DRY_RUN = process.argv.includes('--dry-run')
const LESSONS_DIR = path.join(__dirname, '../src/data/interactive-lessons')

// Get all chemistry lesson files
const files = fs.readdirSync(LESSONS_DIR)
  .filter(f => f.startsWith('chemistry-') && f.endsWith('.ts'))
  .map(f => path.join(LESSONS_DIR, f))

let totalFilesChanged = 0
let totalChanges = 0

for (const filePath of files) {
  const original = fs.readFileSync(filePath, 'utf-8')
  let content = original

  // === 1. Wrap example problem statements in blockquotes ===
  // Pattern: ### Example ... \n\n<problem text>\n\n$$<solution>$$
  // Match "### Example" followed by a line that looks like a question (not already a blockquote, not **Solution:**)
  content = content.replace(
    /(### (?:Example|Tip)[^\n]*\n\n)((?:(?!> \*\*Problem)(?!\*\*Solution)(?!\*\*Step)(?!$$)(?!###)(?!\*\*[A-Z]).)+?)(\n\n(?:\*\*(?:Solution|Step)|(?:\$\$)))/g,
    (match, header, problemText, rest) => {
      // Only wrap if problem text looks like a question or problem statement
      const trimmed = problemText.trim()
      if (trimmed.startsWith('>') || trimmed.startsWith('**Solution') || trimmed.startsWith('**Step')) {
        return match // Already formatted
      }
      // Check if it's a question-like text (contains ? or starts with certain patterns)
      if (trimmed.includes('?') || /^(?:How|What|Calculate|Find|Determine|Convert|If|A |The |For |Given)/i.test(trimmed)) {
        return `${header}> **Problem:** ${trimmed}\n\n**Solution:**${rest}`
      }
      return match
    }
  )

  // === 2. Simpler pattern: ### Example N: Name\n\n<question>\n\n$$equation$$
  // Handle cases where equation follows directly (no Solution label)
  content = content.replace(
    /(### Example \d+[^\n]*\n\n)(?!> \*\*Problem)((?:How|What|Calculate|Find|Determine|Convert|If a|A |The |Given|Suppose|Consider)[^\n]+\?)\n\n(\$\$)/g,
    (_match, header, question, eq) => {
      return `${header}> **Problem:** ${question}\n\n**Solution:**\n\n${eq}`
    }
  )

  // === 3. Bold question numbers in drill sections: "1) " → "**1)** "
  content = content.replace(
    /\n(\d+)\) (?!\*)/g,
    (match, num) => `\n**${num})** `
  )

  // === 4. Wrap "Use:" / "Use these" / "Given:" lines in blockquotes (if not already)
  content = content.replace(
    /\n(Use(?:: | these)[^\n]+)\n/g,
    (match, line) => {
      if (line.startsWith('>')) return match
      return `\n> **Given:** ${line.replace(/^Use(?::| these[^:]*:)\s*/, '')}\n`
    }
  )

  if (content !== original) {
    totalFilesChanged++
    // Count number of changes (rough)
    const changes = content.split('\n').filter((line, i) => line !== original.split('\n')[i]).length
    totalChanges += changes
    
    const fileName = path.basename(filePath)
    console.log(`  ✏️  ${fileName} (${changes} lines changed)`)

    if (!DRY_RUN) {
      fs.writeFileSync(filePath, content, 'utf-8')
    }
  }
}

console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}${totalFilesChanged} files changed, ~${totalChanges} lines modified`)
if (DRY_RUN) {
  console.log('Run without --dry-run to apply changes.')
}
