/**
 * SAT congruence audit: scan every SAT content surface for topics/notation the
 * DIGITAL SAT does not test, plus non-SAT-style (meta/definitional) questions.
 * Read-only. PROD=1 to include DB content (topics/flashcards/exampleProblems).
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import fs from 'fs'
import { globSync } from 'glob'
import { PrismaClient } from '@prisma/client'

const PATTERNS: { key: string; re: RegExp; why: string }[] = [
  { key: 'prob-notation', re: /P\s*\(\s*[A-Za-z][^)]{0,12}[|∪∩][^)]{0,12}\)|\\cup|\\cap|\\mid\b|P\(A\)|P\(B\)/, why: 'P(A|B)/set notation — SAT asks probability in words from tables' },
  { key: 'union-intersection-words', re: /\b(union|intersection) of (sets|events)|mutually exclusive|independent events/i, why: 'formal probability vocabulary beyond SAT' },
  { key: 'combinatorics', re: /\bpermutation|combination formula|\\binom|\bnCr\b|\bnPr\b|factorial/i, why: 'counting formulas not on digital SAT' },
  { key: 'logarithm', re: /\\log|\\ln\b|logarithm/i, why: 'logs not on SAT' },
  { key: 'complex-numbers', re: /imaginary (unit|number)|complex number|\bi\^2\b|\\sqrt\{-1\}/i, why: 'complex numbers dropped from digital SAT' },
  { key: 'matrix-vector', re: /\bmatrix\b|\bmatrices\b|determinant|\\vec\b/i, why: 'not on SAT' },
  { key: 'trig-overreach', re: /law of (sines|cosines)|amplitude|sinusoid|\\sin\^\{-1\}|arcsin|arctan/i, why: 'beyond right-triangle trig + basic radians' },
  { key: 'stats-overreach', re: /expected value|E\(X\)|z-?score|normal (distribution|curve)|variance|standard deviation formula|\\sigma\s*=/i, why: 'AP-Stats-level content; SAT treats SD conceptually' },
  { key: 'sequences-series', re: /\\sum|sigma notation|geometric series|arithmetic sequence formula|a_n\s*=/i, why: 'explicit sequence formulas not on SAT' },
  { key: 'calculus-leak', re: /derivative|\blimit of\b|integral|\\int\b/i, why: 'calculus leak' },
]
const META_RE = /^["“']?(What is|What are|What does|How do you|How many types|Which of the following (best )?(describes|defines)|Define|When should you use)\b/i

interface Hit { surface: string; where: string; key: string; sample: string }
const hits: Hit[] = []
const meta: Hit[] = []

function scanText(surface: string, where: string, text: string, isQuestionStem = false) {
  for (const p of PATTERNS) {
    const m = text.match(p.re)
    if (m) hits.push({ surface, where, key: p.key, sample: text.replace(/\s+/g, ' ').slice(Math.max(0, m.index! - 40), m.index! + 60) })
  }
  if (isQuestionStem && META_RE.test(text.trim())) {
    meta.push({ surface, where, key: 'meta-style', sample: text.replace(/\s+/g, ' ').slice(0, 90) })
  }
}

async function main() {
  // --- File surfaces ---
  const groups: [string, string[]][] = [
    ['exit-quiz', globSync('src/data/exit-quizzes/sat-*.ts')],
    ['lesson', globSync('src/data/interactive-lessons/sat-sat-*.ts')],
    ['competitive', globSync('src/data/competitive-questions/sat-*.ts')],
    ['unit-test', globSync('src/data/unit-tests/{psat,sat}*.ts')],
    ['entrance-quiz', globSync('src/data/entrance-quizzes/sat-*.ts')],
    ['diagnostic', globSync('src/data/sat-diagnostic*.ts').concat(globSync('src/components/SATDiagnostic.tsx'))],
  ]
  for (const [surface, files] of groups) {
    for (const f of files) {
      const lines = fs.readFileSync(f, 'utf8').split('\n')
      lines.forEach((line, i) => {
        scanText(surface, `${f.split('/').pop()}:${i + 1}`, line)
        const qm = line.match(/question:\s*[`'"](.{10,300})/)
        if (qm) scanText(surface, `${f.split('/').pop()}:${i + 1}`, qm[1], true)
      })
    }
  }
  // --- DB surfaces ---
  const p = new PrismaClient()
  const course = await p.course.findUnique({ where: { slug: 'sat-prep' }, select: { categories: { select: { topics: { select: { slug: true, textContent: true, flashcards: { select: { front: true, back: true } }, exampleProblems: { select: { question: true, solution: true } } } } } } } })
  for (const cat of course!.categories) for (const t of cat.topics) {
    scanText('db-lesson-content', t.slug, t.textContent ?? '')
    t.flashcards.forEach((c, i) => scanText('db-flashcard', `${t.slug}#${i}`, `${c.front} ${c.back}`))
    t.exampleProblems.forEach((e, i) => scanText('db-example', `${t.slug}#${i}`, `${e.question} ${e.solution}`))
  }
  await p.$disconnect()

  // --- Report ---
  const byKey = new Map<string, Hit[]>()
  for (const h of hits) byKey.set(h.key, [...(byKey.get(h.key) ?? []), h])
  console.log('=== NON-SAT CONTENT HITS ===')
  for (const [key, list] of [...byKey.entries()].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`\n## ${key} (${list.length})`)
    const bySurface = new Map<string, number>()
    for (const h of list) bySurface.set(h.surface, (bySurface.get(h.surface) ?? 0) + 1)
    console.log('   surfaces:', [...bySurface.entries()].map(([s, n]) => `${s}=${n}`).join(', '))
    list.slice(0, 5).forEach(h => console.log(`   [${h.where}] …${h.sample}…`))
  }
  console.log(`\n=== META/DEFINITIONAL QUESTION STEMS (${meta.length}) ===`)
  const metaByFile = new Map<string, number>()
  for (const h of meta) metaByFile.set(h.where.split(':')[0], (metaByFile.get(h.where.split(':')[0]) ?? 0) + 1)
  console.log([...metaByFile.entries()].sort((a, b) => b[1] - a[1]).map(([f, n]) => `${f}=${n}`).join('\n'))
  meta.slice(0, 10).forEach(h => console.log(`   [${h.where}] ${h.sample}`))
}
main()
