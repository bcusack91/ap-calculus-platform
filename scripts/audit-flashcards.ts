/**
 * Complete flashcard quality audit.
 *
 * Replays the EXACT production render pipeline on every card
 * (formatFlashcardContent → escapeCurrencyMath → remark-math-style segment
 * extraction → KaTeX compile) and checks three quality dimensions:
 *
 *   1. RENDERING  — does every math segment KaTeX-compile? unbalanced `$`?
 *                   raw LaTeX commands left outside math mode (render as
 *                   literal "\frac{..}"), mojibake, literal "\n", stray HTML.
 *   2. CONCISENESS — front/back length outliers (walls of text), multi-question
 *                   fronts, empty/placeholder sides.
 *   3. ALIGNMENT   — card text vs its course (cross-subject keyword bleed),
 *                   duplicate fronts within a topic, topics with zero cards.
 *
 * Read-only. Target DB via AUDIT_DB=prod|local (default local).
 * Run: AUDIT_DB=prod npx tsx scripts/audit-flashcards.ts
 * Writes a full JSON report to scripts/_audit-flashcards-report.json
 */
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

const target = process.env.AUDIT_DB === 'prod' ? '.env' : '.env.local'
dotenv.config({ path: path.join(process.cwd(), target), override: true })

/* eslint-disable @typescript-eslint/no-require-imports */
import { PrismaClient } from '@prisma/client'
import katex from 'katex'
import { formatFlashcardContent } from '../src/lib/format-flashcard-content'
import { escapeCurrencyMath } from '../src/lib/escape-currency-math'

const prisma = new PrismaClient()

interface Issue {
  cardId: string
  course: string
  category: string
  topic: string
  side: 'front' | 'back'
  kind: string
  detail: string
  excerpt: string
}

const issues: Issue[] = []
const ex = (s: string) => (s.length > 120 ? s.slice(0, 117) + '…' : s)

/** Extract math segments the way remark-math roughly does after our escapes. */
function mathSegments(text: string): { display: string[]; inline: string[]; outside: string } {
  const display: string[] = []
  const inline: string[] = []
  let rest = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => { display.push(m); return ' ⟨M⟩ ' })
  rest = rest.replace(/(?<!\\)\$((?:\\.|[^$\n])+?)(?<!\\)\$/g, (_, m) => { inline.push(m); return ' ⟨M⟩ ' })
  return { display, inline, outside: rest }
}

function auditSide(card: { id: string }, meta: { course: string; category: string; topic: string }, side: 'front' | 'back', raw: string) {
  const push = (kind: string, detail: string, excerpt = raw) =>
    issues.push({ cardId: card.id, ...meta, side, kind, detail, excerpt: ex(excerpt) })

  if (!raw || !raw.trim()) { push('empty', 'empty side'); return }
  if (/undefined|\[object Object\]/.test(raw)) push('placeholder', 'contains "undefined"/[object Object]')
  if (raw.includes('�')) push('mojibake', 'contains U+FFFD replacement char')
  if (/\\n/.test(raw) && !/\\ne|\\nu|\\nabla|\\not|\\neq|\\newline/.test(raw)) push('literal-backslash-n', 'literal \\n in text')
  if (/<\/?(div|span|p|br|table|img|b|i)\b/i.test(raw)) push('html-tag', 'raw HTML tag in markdown card')

  // Replay the production pipeline
  let processed: string
  try {
    processed = escapeCurrencyMath(formatFlashcardContent(raw))
  } catch (e) {
    push('pipeline-crash', `format/escape threw: ${(e as Error).message}`)
    return
  }

  // Unbalanced inline delimiters (after escaping): odd count of unescaped $
  const unescapedDollars = (processed.replace(/\\\$/g, '').match(/\$/g) || []).length
  if (unescapedDollars % 2 === 1) push('unbalanced-dollars', `${unescapedDollars} unescaped $ (odd)`, processed)

  const { display, inline, outside } = mathSegments(processed)

  // KaTeX-compile every segment exactly as rehype-katex would
  for (const [i, seg] of [...display, ...inline].entries()) {
    try {
      katex.renderToString(seg, { throwOnError: true, displayMode: i < display.length })
    } catch (e) {
      push('katex-error', (e as Error).message.split('\n')[0].slice(0, 140), seg)
    }
  }

  // LaTeX commands left OUTSIDE math mode → render as literal backslash text
  const rawCmd = outside.match(/\\(frac|sqrt|int|sum|lim|vec|hat|bar|alpha|beta|gamma|delta|Delta|theta|pi|times|cdot|approx|geq?|leq?|neq|pm|infty|text|mathrm|log|ln|sin|cos|tan)\b/)
  if (rawCmd) push('latex-outside-math', `\\${rawCmd[1]} outside $…$ (renders literally)`, outside)

  // Conciseness
  if (side === 'front' && raw.length > 260) push('long-front', `${raw.length} chars`)
  if (side === 'back' && raw.length > 700) push('long-back', `${raw.length} chars`)
  if (side === 'front' && (raw.match(/\?/g) || []).length >= 3) push('multi-question-front', `${(raw.match(/\?/g) || []).length} question marks`)
}

// Cross-subject keyword bleed: a term list that should essentially never appear
// in courses OUTSIDE the named family. Conservative on purpose.
const BLEED_RULES: { pattern: RegExp; belongsTo: RegExp; label: string }[] = [
  { pattern: /\bgeographers?\b|\bhuman geography\b/i, belongsTo: /geo/i, label: 'geography term' },
  { pattern: /\bphotosynthesis\b|\bmitochondri/i, belongsTo: /bio|mcat|enviro|chem/i, label: 'biology term' },
  { pattern: /\bderivative\b|\bantiderivative\b|\bintegral\b/i, belongsTo: /calc|math|precalc|mcat|physics|stat|econ|chem/i, label: 'calculus term' },
  { pattern: /\bthe supreme court\b|\bfederalis[mt]\b/i, belongsTo: /gov|history|african/i, label: 'civics term' },
  { pattern: /\bnucleophile\b|\belectrophile\b/i, belongsTo: /chem|ochem|organic|mcat/i, label: 'ochem term' },
  { pattern: /\boperant conditioning\b|\bclassical conditioning\b/i, belongsTo: /psych|mcat/i, label: 'psychology term' },
]

async function main() {
  const dbLabel = process.env.AUDIT_DB === 'prod' ? 'PROD' : 'LOCAL'
  const cards = await prisma.flashcard.findMany({
    select: {
      id: true, front: true, back: true, topicId: true,
      topic: { select: { title: true, slug: true, category: { select: { name: true, course: { select: { name: true, slug: true } } } } } },
    },
  })
  console.log(`[${dbLabel}] auditing ${cards.length} flashcards…`)

  const perCourse = new Map<string, { cards: number; issues: number }>()
  const dupCheck = new Map<string, string[]>() // topicId+front → card ids

  for (const card of cards) {
    const course = card.topic?.category?.course?.name ?? '(no course)'
    const meta = { course, category: card.topic?.category?.name ?? '(none)', topic: card.topic?.title ?? '(none)' }
    const pc = perCourse.get(course) ?? { cards: 0, issues: 0 }
    pc.cards++
    const before = issues.length

    auditSide(card, meta, 'front', card.front)
    auditSide(card, meta, 'back', card.back)

    // Alignment: keyword bleed vs course slug
    const slug = card.topic?.category?.course?.slug ?? ''
    const text = `${card.front} ${card.back}`
    for (const rule of BLEED_RULES) {
      if (rule.pattern.test(text) && !rule.belongsTo.test(slug)) {
        issues.push({ cardId: card.id, ...meta, side: 'front', kind: 'subject-bleed', detail: `${rule.label} in ${slug}`, excerpt: ex(text) })
      }
    }

    // Duplicates within a topic
    const key = `${card.topicId}::${card.front.trim().toLowerCase()}`
    const list = dupCheck.get(key) ?? []
    list.push(card.id)
    dupCheck.set(key, list)

    pc.issues += issues.length - before
    perCourse.set(course, pc)
  }

  for (const [key, ids] of dupCheck) {
    if (ids.length > 1) {
      const c = cards.find((x) => x.id === ids[0])!
      issues.push({
        cardId: ids.join(','), course: c.topic?.category?.course?.name ?? '?', category: c.topic?.category?.name ?? '?',
        topic: c.topic?.title ?? '?', side: 'front', kind: 'duplicate-front', detail: `${ids.length} cards share this front in one topic`,
        excerpt: ex(key.split('::')[1]),
      })
    }
  }

  // Topics with zero flashcards (coverage gaps)
  const bareTopics = await prisma.topic.findMany({
    where: { flashcards: { none: {} } },
    select: { slug: true, title: true, category: { select: { course: { select: { name: true } } } } },
  })

  // ---- Report ----
  const byKind = new Map<string, number>()
  for (const i of issues) byKind.set(i.kind, (byKind.get(i.kind) ?? 0) + 1)

  console.log('\n=== ISSUES BY KIND ===')
  for (const [k, n] of [...byKind.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(5)}  ${k}`)

  console.log('\n=== PER-COURSE (cards / issue-flags) ===')
  for (const [c, v] of [...perCourse.entries()].sort((a, b) => b[1].issues - a[1].issues))
    console.log(`  ${String(v.cards).padStart(5)} cards ${String(v.issues).padStart(5)} flags  ${c}`)

  console.log(`\n=== TOPICS WITH ZERO FLASHCARDS: ${bareTopics.length} ===`)
  const byCourseBare = new Map<string, number>()
  for (const t of bareTopics) {
    const n = t.category?.course?.name ?? '?'
    byCourseBare.set(n, (byCourseBare.get(n) ?? 0) + 1)
  }
  for (const [c, n] of [...byCourseBare.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(4)}  ${c}`)

  const report = {
    db: dbLabel, totalCards: cards.length, totalIssues: issues.length,
    byKind: Object.fromEntries(byKind), perCourse: Object.fromEntries(perCourse),
    bareTopicCount: bareTopics.length, bareTopics: bareTopics.map((t) => t.slug),
    issues,
  }
  fs.writeFileSync(path.join(process.cwd(), 'scripts/_audit-flashcards-report.json'), JSON.stringify(report, null, 1))
  console.log(`\nFull report → scripts/_audit-flashcards-report.json (${issues.length} issue flags on ${cards.length} cards)`)

  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
