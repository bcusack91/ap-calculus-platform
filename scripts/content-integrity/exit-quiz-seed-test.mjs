import { fileURLToPath } from 'node:url'
import { pathToFileURL } from 'node:url'
const idx = await import(pathToFileURL(fileURLToPath(new URL('../../', import.meta.url)) + 'src/data/exit-quizzes/index.ts').href)

// 1. Determinism: same seed -> identical quiz (ids + options + correctIndex)
const slug = 'sat-quadratic-equations'
const seed = 123456789
const a = await idx.generateExitQuiz(slug, 10, undefined, seed)
const b = await idx.generateExitQuiz(slug, 10, undefined, seed)
const same = JSON.stringify(a.map(q=>[q.id,q.options,q.correctIndex])) === JSON.stringify(b.map(q=>[q.id,q.options,q.correctIndex]))
console.log('same-seed reproducible:', same)

// 2. Different seed -> (almost always) different quiz
const c = await idx.generateExitQuiz(slug, 10, undefined, 987654321)
const diff = JSON.stringify(a.map(q=>q.id)) !== JSON.stringify(c.map(q=>q.id)) || JSON.stringify(a.map(q=>q.options)) !== JSON.stringify(c.map(q=>q.options))
console.log('different-seed differs:', diff)

// 3. No-seed still random (two calls differ)
const d1 = await idx.generateExitQuiz(slug, 10)
const d2 = await idx.generateExitQuiz(slug, 10)
console.log('no-seed still randomized:', JSON.stringify(d1.map(q=>q.options)) !== JSON.stringify(d2.map(q=>q.options)))

// 4. Math.random restored after seeded call
const r1 = Math.random(), r2 = Math.random()
console.log('Math.random restored (not frozen):', r1 !== r2)

// 5. Seeded regrade catches a fabricated "all correct" submission
const reg = await import(pathToFileURL(fileURLToPath(new URL('../../', import.meta.url)) + 'src/lib/exit-quiz-regrade.ts').href)
const shuf = await import(pathToFileURL(fileURLToPath(new URL('../../', import.meta.url)) + 'src/lib/shuffle-options.ts').href)
// Build an HONEST all-correct submission: for each question compute the true shuffled index
const honest = a.map(q => {
  const { correctIndex } = shuf.shuffleOptions(q.options, q.correctIndex, q.id + q.question)
  return { questionId: q.id, selectedAnswer: correctIndex, correct: false /* server ignores this */ }
})
const honestRes = await reg.regradeExitQuizSeeded(slug, honest, seed, 10, undefined)
console.log('honest all-correct -> score', honestRes?.score, '/ resolved', honestRes?.resolvedCount, '(expect 10/10)')
// FABRICATED: claim correct:true but submit WRONG indices
const fabricated = a.map(q => {
  const { correctIndex } = shuf.shuffleOptions(q.options, q.correctIndex, q.id + q.question)
  return { questionId: q.id, selectedAnswer: (correctIndex + 1) % q.options.length, correct: true }
})
const fabRes = await reg.regradeExitQuizSeeded(slug, fabricated, seed, 10, undefined)
console.log('fabricated correct:true+wrong indices -> score', fabRes?.score, '(expect 0, NOT 10)')
