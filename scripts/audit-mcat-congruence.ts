/**
 * MCAT congruence audit (owner request 2026-08-17, mirrors the SAT audit):
 * are questions MCAT-style, do flashcards align with their topics, does
 * everything render? Read-only. PROD=1 for DB surfaces.
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import fs from 'fs'
import { globSync } from 'glob'
import katex from 'katex'
import { PrismaClient } from '@prisma/client'
import { matchSubtopic } from '../src/data/mcat-practice/subtopic-map'

interface Hit { where: string; kind: string; sample: string }
const hits: Hit[] = []
const flag = (where: string, kind: string, sample: string) =>
  hits.push({ where, kind, sample: sample.replace(/\s+/g, ' ').slice(0, 110) })

// ---------- file-surface scans ----------
const STYLE_PATTERNS: { kind: string; re: RegExp }[] = [
  { kind: 'all-of-the-above', re: /'(All|None) of the above'/i },
  { kind: 'true-false', re: /question:\s*[`'"](True or False|T\/F)/i },
  { kind: 'definitional-stem', re: /question:\s*[`'"]\s*(What is the definition of|Which of the following (best )?defines|What does [A-Z]{2,6} stand for)/i },
  { kind: 'calculus-leak', re: /\\int\b|\\frac\{d[A-Za-z]?\}\{d|derivative of|integral of|\bantiderivative/i },
]

function katexCheck(where: string, text: string) {
  const segs = text.match(/\$\$?[^$]+\$\$?/g) ?? []
  for (const seg of segs) {
    const inner = seg.replace(/^\$\$?|\$\$?$/g, '')
    try {
      katex.renderToString(inner, { throwOnError: true })
    } catch (e) {
      flag(where, 'katex-error', `${inner.slice(0, 60)} :: ${(e as Error).message.slice(0, 45)}`)
    }
  }
  // unicode-run + bare-& hazards (the historical flashcard error classes)
  if (/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻][⁰¹²³⁴⁵⁶⁷⁸⁹]/.test(text)) flag(where, 'unicode-superscript-run', text)
  if (/\$[^$]*(?<!\\)&[^$]*\$/.test(text)) flag(where, 'bare-ampersand-in-math', text)
}

function scanQuestionObjects(surface: string, file: string) {
  const src = fs.readFileSync(file, 'utf8')
  const lines = src.split('\n')
  lines.forEach((line, i) => {
    const where = `${file.split('/').pop()}:${i + 1}`
    for (const p of STYLE_PATTERNS) if (p.re.test(line)) flag(where, p.kind, line.trim())
    // options array arity: count quoted items inside options: [...] on one line
    const om = line.match(/options:\s*\[([^\]]*)\]/)
    if (om) {
      const n = (om[1].match(/(['"`])(?:(?!\1).)*\1/g) ?? []).length
      if (n > 0 && n !== 4) flag(where, `options-count-${n}`, line.trim())
    }
    const qm = line.match(/question:\s*[`'"](.{10,400})/)
    if (qm) katexCheck(where, qm[1])
    const em = line.match(/explanation:\s*[`'"](.{10,400})/)
    if (em) katexCheck(where, em[1])
  })
}

async function main() {
  const groups: [string, string[]][] = [
    ['exit-quiz', globSync('src/data/exit-quizzes/mcat-*.ts').filter(f => !f.includes('subtopic-pool'))],
    ['competitive', globSync('src/data/competitive-questions/mcat-questions-*.ts')],
    ['diagnostic', globSync('src/data/mcat-practice/*.ts')],
    ['passages', globSync('src/data/mcat/passages/*.ts')],
    ['daily', ['src/data/mcat-daily-question.ts']],
    ['full-length', ['src/data/mcat/full-length.ts']],
  ]
  for (const [surface, files] of groups) for (const f of files) if (fs.existsSync(f)) scanQuestionObjects(surface, f)

  // ---------- DB: flashcard-topic alignment + render ----------
  const DOMAIN_OF: [string, string][] = [
    ['mcat-general-chemistry', 'gen-chem'], ['mcat-organic-chemistry', 'org-chem'],
    ['mcat-physics', 'physics'], ['mcat-biochemistry', 'biochem-cp'],
    ['mcat-cars', 'cars'], ['mcat-cell-biology', 'cell-mol-bio'],
    ['mcat-molecular-biology', 'cell-mol-bio'], ['mcat-microbiology', 'cell-mol-bio'],
    ['mcat-organ-systems', 'organ-systems'], ['mcat-anatomy', 'organ-systems'],
    ['mcat-genetics-evolution', 'genetics'], ['mcat-psychology', 'psych-soc'], ['mcat-sociology', 'psych-soc'],
  ]
  const p = new PrismaClient()
  const course = await p.course.findUnique({
    where: { slug: 'mcat-prep' },
    select: { categories: { select: { name: true, topics: { select: {
      slug: true, title: true,
      flashcards: { select: { front: true, back: true } },
      exampleProblems: { select: { question: true, solution: true } },
    } } } } },
  })
  let bleed = 0, thin = 0, totalCards = 0, topics = 0
  for (const cat of course!.categories) for (const t of cat.topics) {
    topics++
    totalCards += t.flashcards.length
    if (t.flashcards.length <= 3) { thin++; flag(`db:${t.slug}`, 'thin-cards', `${t.flashcards.length} cards`) }
    const domain = DOMAIN_OF.find(([pre]) => t.slug.startsWith(pre))?.[1]
    t.flashcards.forEach((c, i) => {
      katexCheck(`db-card:${t.slug}#${i}`, `${c.front} ${c.back}`)
      if (domain) {
        const cls = matchSubtopic(domain, c.front, [], c.back)
        if (cls && cls.slug !== t.slug && !t.slug.startsWith(cls.slug.replace(/-mcat$/, ''))) {
          // classified confidently to a DIFFERENT subtopic in the same domain
          const isAreaTopic = !/-(mcat)$/.test(t.slug) || t.slug.split('-').length <= 4
          if (!isAreaTopic) { bleed++; flag(`db-card:${t.slug}#${i}`, 'subtopic-bleed', `${cls.slug} <- ${c.front}`) }
        }
      }
    })
    t.exampleProblems.forEach((ex, i) => katexCheck(`db-example:${t.slug}#${i}`, `${ex.question} ${ex.solution}`))
  }
  await p.$disconnect()

  // ---------- report ----------
  const byKind = new Map<string, Hit[]>()
  for (const h of hits) byKind.set(h.kind, [...(byKind.get(h.kind) ?? []), h])
  console.log(`MCAT topics: ${topics}, cards: ${totalCards}, thin(≤3): ${thin}, bleed-suspects: ${bleed}\n`)
  for (const [kind, list] of [...byKind.entries()].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`## ${kind} (${list.length})`)
    list.slice(0, 6).forEach(h => console.log(`   [${h.where}] ${h.sample}`))
    if (list.length > 6) console.log(`   … +${list.length - 6} more`)
  }
}
main()
