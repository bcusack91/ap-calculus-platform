/** Runtime check of the 10 MCAT area exit-quiz banks: KaTeX-compile every
 * question/option/explanation, enforce 4 options + valid correctIndex. */
import katex from 'katex'
import { globSync } from 'glob'

async function main() {
  let checked = 0, katexErrs = 0, arityErrs = 0, idxErrs = 0
  for (const f of globSync('src/data/exit-quizzes/mcat-*.ts').filter(x => !x.includes('subtopic-pool'))) {
    const mod = await import('../' + f)
    if (typeof mod.generateExitQuiz !== 'function') continue
    const qs = mod.generateExitQuiz(100000)
    for (const q of qs) {
      checked++
      if (!Array.isArray(q.options) || q.options.length !== 4) { arityErrs++; console.log(`ARITY ${f.split('/').pop()}: ${q.options?.length} options | ${q.question?.slice(0, 70)}`) }
      if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex >= (q.options?.length ?? 0)) { idxErrs++; console.log(`INDEX ${f.split('/').pop()}: ${q.correctIndex} | ${q.question?.slice(0, 70)}`) }
      for (const text of [q.question, ...(q.options ?? []), q.explanation ?? '']) {
        for (const seg of String(text).match(/\$\$?[^$]+\$\$?/g) ?? []) {
          try { katex.renderToString(seg.replace(/^\$\$?|\$\$?$/g, ''), { throwOnError: true }) }
          catch (e) { katexErrs++; console.log(`KATEX ${f.split('/').pop()}: ${seg.slice(0, 50)} :: ${(e as Error).message.slice(0, 50)}`) }
        }
      }
    }
  }
  console.log(`\nchecked ${checked} questions | katex=${katexErrs} arity=${arityErrs} index=${idxErrs}`)
}
main()
