import { generateExitQuiz } from '../src/data/exit-quizzes'
async function m() {
  for (const slug of process.argv.slice(2)) {
    try {
      const qs = await generateExitQuiz(slug, 10)
      console.log('===', slug, `(${qs.length} questions)`)
      qs.slice(0, 4).forEach(q => console.log('  ', q.question.slice(0, 78)))
    } catch (e) { console.log('===', slug, 'ERROR', (e as Error).message) }
  }
}
m()
