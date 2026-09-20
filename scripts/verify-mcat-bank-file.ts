/**
 * Verify ONE MCAT competitive-bank file in isolation.
 *
 * verify-mcat-questions.ts loads the whole bank through mcat-bank.ts, so a
 * syntax error in any file fails the check for everyone — unusable while
 * several files are being edited in parallel. This does the same KaTeX and
 * structure checks (4 options, correctAnswer in range, non-empty strings,
 * duplicate stems and duplicate options within an item) from the AST alone.
 *
 * Usage: npx tsx scripts/verify-mcat-bank-file.ts <file>...
 * Exit code 1 on any error.
 */
import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import katex from 'katex'

type Item = { line: number; question: string; options: string[]; correct: number; explanation: string }

function itemsInFile(file: string): Item[] {
  const text = fs.readFileSync(file, 'utf8')
  const src = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true)
  const items: Item[] = []
  const visit = (node: ts.Node) => {
    if (ts.isObjectLiteralExpression(node)) {
      let options: string[] | null = null
      let correct: number | null = null
      let question = ''
      let explanation = ''
      for (const p of node.properties) {
        if (!ts.isPropertyAssignment(p)) continue
        const name = p.name.getText().replace(/['"]/g, '')
        const init = p.initializer
        const str = ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init) ? init.text : null
        if (name === 'options' && ts.isArrayLiteralExpression(init)) {
          const vals = init.elements.map((e) =>
            ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e) ? e.text : null,
          )
          if (vals.every((v) => v !== null)) options = vals as string[]
        }
        if (name === 'correctAnswer' && ts.isNumericLiteral(init)) correct = Number(init.text)
        if (name === 'question' && str !== null) question = str
        if (name === 'explanation' && str !== null) explanation = str
      }
      if (options && correct !== null) {
        const { line } = src.getLineAndCharacterOfPosition(node.getStart())
        items.push({ line: line + 1, question, options, correct, explanation })
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(src)
  return items
}

let errors = 0
const fail = (file: string, line: number, msg: string) => {
  errors++
  console.error(`  ✗ ${path.basename(file)}:${line} ${msg}`)
}

function checkMath(file: string, line: number, text: string, where: string) {
  for (const seg of text.match(/\$([^$]+)\$/g) ?? []) {
    const inner = seg.slice(1, -1)
    try {
      katex.renderToString(inner, { throwOnError: true })
    } catch (e) {
      fail(file, line, `KaTeX in ${where}: ${(e as Error).message.split('\n')[0].slice(0, 100)} — ${inner.slice(0, 60)}`)
    }
  }
  // A stray control char means a LaTeX backslash was not doubled.
  if (/[\f\t\v\b]/.test(text)) fail(file, line, `control character in ${where} (undoubled LaTeX backslash?)`)
}

for (const file of process.argv.slice(2)) {
  // createSourceFile parses leniently: an unterminated string literal still
  // yields a tree, so item checks can pass on a file tsc would reject. One
  // batch lost every `$'` sequence to shell quoting and the AST scan simply
  // saw six fewer items. Surface the parse diagnostics first.
  const program = ts.createProgram([file], { noEmit: true, allowJs: false, skipLibCheck: true })
  for (const d of program.getSyntacticDiagnostics(program.getSourceFile(file))) {
    const { line } = d.file!.getLineAndCharacterOfPosition(d.start ?? 0)
    fail(file, line + 1, `syntax: ${ts.flattenDiagnosticMessageText(d.messageText, ' ')}`)
  }
  const items = itemsInFile(file)
  const stems = new Map<string, number>()
  for (const it of items) {
    if (it.options.length !== 4) fail(file, it.line, `${it.options.length} options (need 4)`)
    if (it.correct < 0 || it.correct >= it.options.length) fail(file, it.line, `correctAnswer ${it.correct} out of range`)
    if (!it.question.trim()) fail(file, it.line, 'empty question')
    if (!it.explanation.trim()) fail(file, it.line, 'empty explanation')
    for (const [i, o] of it.options.entries()) {
      if (!o.trim()) fail(file, it.line, `empty option ${i}`)
      checkMath(file, it.line, o, `option ${i}`)
    }
    const normed = it.options.map((o) => o.trim().toLowerCase())
    if (new Set(normed).size !== normed.length) fail(file, it.line, 'duplicate options within item')
    checkMath(file, it.line, it.question, 'question')
    checkMath(file, it.line, it.explanation, 'explanation')
    if (/\b(option|choice|answer)\s+[A-D]\b|\(([A-D])\)\s|\b[A-D]\s+(is|are)\s+(wrong|incorrect|correct|right)\b/.test(it.explanation)) {
      fail(file, it.line, 'explanation references an option by letter (options shuffle at display)')
    }
    const key = it.question.trim().toLowerCase()
    if (stems.has(key)) fail(file, it.line, `duplicate stem (also line ${stems.get(key)})`)
    else stems.set(key, it.line)
  }
  console.log(`${path.basename(file)}: ${items.length} items checked`)
}
console.log(errors ? `\n${errors} error(s)` : '\nOK')
process.exit(errors ? 1 : 0)
