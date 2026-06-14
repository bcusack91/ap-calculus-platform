/**
 * Renders every $...$ math span and validates structure across the authored
 * grade lessons. tsc can't check section bodies (LessonSection is loose), so
 * this catches malformed LaTeX (unbalanced braces, bad commands), bad MCQ
 * indices, and shape errors. Run after files exist:
 *   npx tsx scripts/_smoketest-grade-lessons.ts
 */
import fs from 'fs'
import path from 'path'
import katex from 'katex'

const DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons', 'grades')

interface Section { id?: string; type?: string; content?: string; exercise?: any }
interface Part { topicSlug?: string; sections?: Section[] }

function mathSpans(s: string): { tex: string; display: boolean }[] {
  // Mirror render-rich-text: pull $$...$$ display blocks FIRST, then $...$ inline
  // from the remainder. (The naive inline-only approach mis-pairs $$ delimiters.)
  const out: { tex: string; display: boolean }[] = []
  // Protect escaped currency dollars (\$) first, exactly like render-rich-text does,
  // so they aren't treated as math delimiters.
  const protectedStr = s.split(String.fromCharCode(92,36)).join(' ')
  const rest = protectedStr.replace(/\$\$([\s\S]+?)\$\$/g, (_m, tex) => { out.push({ tex, display: true }); return ' ' })
  const re = /\$((?:[^$\\]|\\.)+)\$/g
  let m: RegExpExecArray | null
  while ((m = re.exec(rest))) out.push({ tex: m[1], display: false })
  return out
}

function collectStrings(sec: Section): string[] {
  const strs: string[] = []
  if (typeof sec.content === 'string') strs.push(sec.content)
  const ex = sec.exercise
  if (ex) {
    for (const q of ex.questions ?? []) {
      if (q.question) strs.push(q.question)
      for (const o of q.options ?? []) strs.push(String(o))
      if (q.explanation) strs.push(q.explanation)
    }
    for (const k of ['correctAnswers', 'hint1', 'hint2', 'hint3', 'explanation']) {
      const v = ex[k]
      if (typeof v === 'string') strs.push(v)
      if (Array.isArray(v)) v.forEach((x) => strs.push(String(x)))
    }
    for (const d of ex.dropdowns ?? []) {
      if (d.label) strs.push(d.label)
      for (const o of d.options ?? []) strs.push(String(o))
    }
  }
  return strs
}

async function main() {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.ts')).sort()
  let mathOk = 0
  const mathErrors: string[] = []
  const shapeErrors: string[] = []
  let partCount = 0
  let sectionCount = 0

  for (const f of files) {
    const slug = f.replace(/\.ts$/, '')
    let parts: Part[]
    try {
      parts = (await import(path.join(DIR, f))).parts
    } catch (e) {
      shapeErrors.push(`${slug}: import failed — ${String((e as Error).message).slice(0, 80)}`); continue
    }
    if (!Array.isArray(parts)) { shapeErrors.push(`${slug}: parts not an array`); continue }
    parts.forEach((p, pi) => {
      partCount++
      if (p.topicSlug !== slug) shapeErrors.push(`${slug} part ${pi}: topicSlug='${p.topicSlug}'`)
      for (const sec of p.sections ?? []) {
        sectionCount++
        // validate MCQ correctAnswer indices
        for (const q of sec.exercise?.questions ?? []) {
          const n = (q.options ?? []).length
          if (typeof q.correctAnswer === 'number' && (q.correctAnswer < 0 || q.correctAnswer >= n)) {
            shapeErrors.push(`${slug} ${sec.id}: correctAnswer ${q.correctAnswer} out of range (${n} opts)`)
          }
          if (n !== 4 && sec.type === 'multiple-choice') shapeErrors.push(`${slug} ${sec.id}: MCQ has ${n} options (want 4)`)
        }
        for (const str of collectStrings(sec)) {
          for (const span of mathSpans(str)) {
            try { katex.renderToString(span.tex.trim(), { throwOnError: true, displayMode: span.display }); mathOk++ }
            catch (e) { mathErrors.push(`${slug} ${sec.id}: codepoints=${JSON.stringify([...span.tex.trim()].slice(0,6).map((c)=>c.codePointAt(0)))} — ${String((e as Error).message).slice(0, 60)}`) }
          }
        }
      }
    })
  }

  console.log(`Files: ${files.length} | parts: ${partCount} | sections: ${sectionCount} | math spans OK: ${mathOk}`)
  console.log(`Math errors: ${mathErrors.length} | shape errors: ${shapeErrors.length}`)
  if (mathErrors.length) console.log('\nMATH ERRORS:\n  ' + mathErrors.slice(0, 40).join('\n  '))
  if (shapeErrors.length) console.log('\nSHAPE ERRORS:\n  ' + shapeErrors.slice(0, 40).join('\n  '))
  if (!mathErrors.length && !shapeErrors.length) console.log('\n✅ All clean.')
}

main()
