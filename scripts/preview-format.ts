import fs from 'fs'
import path from 'path'

const file = process.argv[2]
if (!file) { console.log('Usage: npx tsx scripts/preview-format.ts <filename>'); process.exit(1) }

const filePath = path.join(__dirname, '../src/data/interactive-lessons', file)
const original = fs.readFileSync(filePath, 'utf-8')
let content = original

content = content.replace(
  /(### (?:Example|Tip)[^\n]*\n\n)((?:(?!> \*\*Problem)(?!\*\*Solution)(?!\*\*Step)(?!\$\$)(?!###)(?!\*\*[A-Z]).)+?)(\n\n(?:\*\*(?:Solution|Step)|(?:\$\$)))/g,
  (match: string, header: string, problemText: string, rest: string) => {
    const trimmed = problemText.trim()
    if (trimmed.startsWith('>') || trimmed.startsWith('**Solution') || trimmed.startsWith('**Step')) return match
    if (trimmed.includes('?') || /^(?:How|What|Calculate|Find|Determine|Convert|If|A |The |For |Given)/i.test(trimmed)) {
      return `${header}> **Problem:** ${trimmed}\n\n**Solution:**${rest}`
    }
    return match
  }
)
content = content.replace(
  /(### Example \d+[^\n]*\n\n)(?!> \*\*Problem)((?:How|What|Calculate|Find|Determine|Convert|If a|A |The |Given|Suppose|Consider)[^\n]+\?)\n\n(\$\$)/g,
  (_match: string, header: string, question: string, eq: string) => `${header}> **Problem:** ${question}\n\n**Solution:**\n\n${eq}`
)
content = content.replace(/\n(\d+)\) (?!\*)/g, (_match: string, num: string) => `\n**${num})** `)
content = content.replace(/\n(Use(?:: | these)[^\n]+)\n/g, (match: string, line: string) => {
  if (line.startsWith('>')) return match
  return `\n> **Given:** ${line.replace(/^Use(?::| these[^:]*:)\s*/, '')}\n`
})

const origLines = original.split('\n')
const newLines = content.split('\n')
for (let i = 0; i < Math.max(origLines.length, newLines.length); i++) {
  if (origLines[i] !== newLines[i]) {
    console.log(`L${i+1}:`)
    console.log(`  - ${(origLines[i] ?? '').substring(0, 140)}`)
    console.log(`  + ${(newLines[i] ?? '').substring(0, 140)}`)
  }
}
