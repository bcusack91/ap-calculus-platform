#!/usr/bin/env node
/**
 * Shared helpers for generating interactive lessons and entrance quizzes.
 * Called by per-course data scripts (e.g. gen-human-geo.mjs).
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')
const LESSON_DIR = path.join(ROOT, 'src/data/interactive-lessons')
const QUIZ_DIR = path.join(ROOT, 'src/data/entrance-quizzes')

/* ── tiny helpers ─────────────────────────────────── */

function cc(slug) {                       // slug → CamelCase
  return slug.replace(/(^|[-])\w/g, m => m.replace('-', '').toUpperCase())
}
function e1(s) {                          // escape for single-quoted TS strings
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}
function eTpl(s) {                        // escape for template-literal TS strings
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

/* ── generate one interactive-lesson part file ────── */

function lessonFile({ prefix, courseName, emoji, slug, title, pn, p }) {
  const stem = slug.startsWith(prefix + '-') ? slug.slice(prefix.length + 1) : slug
  const exp  = prefix + cc(stem) + 'Part' + pn + 'Data'
  const id   = slug.replace(/-/g, '').slice(0, 8) + pn
  const [[t1,d1],[t2,d2],[t3,d3]] = p.terms

  const mcBlock = (arr) => arr.map(([q, opts, ci, ex]) =>
`          {
            question: '${e1(q)}',
            options: [
              '${opts.map(o => e1(o)).join("',\n              '")}'
            ],
            correctAnswer: ${ci},
            explanation: '${e1(ex)}'
          }`).join(',\n')

  return `export const ${exp} = {
  topicSlug: '${slug}',
  sections: [
    {
      id: '${id}-intro',
      type: 'text' as const,
      content: \`
# ${eTpl(emoji)} ${eTpl(title)}

**Part ${pn} of 7 — ${eTpl(p.title)}**

${eTpl(p.content)}

### Key Concepts

| Concept | Description |
|---------|-------------|
| **${eTpl(t1)}** | ${eTpl(d1)} |
| **${eTpl(t2)}** | ${eTpl(d2)} |
| **${eTpl(t3)}** | ${eTpl(d3)} |
      \`
    },
    {
      id: '${id}-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
${mcBlock(p.quiz)}
        ]
      }
    },
    {
      id: '${id}-content',
      type: 'text' as const,
      content: \`
## ${eTpl(p.title)} — Deeper Dive

### ${eTpl(t1)}
${eTpl(d1)}. Understanding this concept is essential for mastering ${eTpl(title)} in ${eTpl(courseName)}.

### ${eTpl(t2)}
${eTpl(d2)}. This builds on the previous concept and connects to broader themes in the course.

### ${eTpl(t3)}
${eTpl(d3)}. This is frequently tested on the AP exam and connects to multiple units in the curriculum.
      \`
    },
    {
      id: '${id}-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall (exact term answers)** ✍️

1) What term refers to ${eTpl(d1.charAt(0).toLowerCase() + d1.slice(1))}?

2) What concept describes ${eTpl(d2.charAt(0).toLowerCase() + d2.slice(1))}?

3) Name the term for ${eTpl(d3.charAt(0).toLowerCase() + d3.slice(1))}.

Use the exact term from this part.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['${e1(t1)}', '${e1(t2)}', '${e1(t3)}'],
        hint1: 'Starts with: ${t1.charAt(0).toUpperCase()}',
        hint2: 'Starts with: ${t2.charAt(0).toUpperCase()}',
        hint3: 'Starts with: ${t3.charAt(0).toUpperCase()}',
        explanation: 'Expected answers: ${e1(t1)} (${e1(d1)}), ${e1(t2)} (${e1(d2)}), and ${e1(t3)} (${e1(d3)}).'
      }
    },
    {
      id: '${id}-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Fill in the Blanks** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: '${e1(d1)} is called ___',
            options: ['${e1(t1)}', '${e1(t2)}', '${e1(t3)}', 'None of these']
          },
          {
            label: '${e1(d2)} describes ___',
            options: ['${e1(t1)}', '${e1(t2)}', '${e1(t3)}', 'All of these']
          },
          {
            label: '${e1(d3)} is known as ___',
            options: ['${e1(t3)}', '${e1(t1)}', '${e1(t2)}', 'None of these']
          }
        ],
        correctAnswers: ['${e1(t1)}', '${e1(t2)}', '${e1(t3)}'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: '${e1(t1)} — ${e1(d1)}. ${e1(t2)} — ${e1(d2)}. ${e1(t3)} — ${e1(d3)}.'
      }
    },
    {
      id: '${id}-strategy',
      type: 'text' as const,
      content: \`
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Don\\'\\'t confuse **${eTpl(t1)}** with **${eTpl(t2)}** — while related, they address different aspects of ${eTpl(title)}.
- **${eTpl(t3)}** is often misunderstood — remember its precise definition for the AP exam.
- Make sure to distinguish between similar-sounding terms; the AP exam tests precise knowledge.

### AP Strategy Moves
- When you see questions about ${eTpl(p.title.toLowerCase())}, start by identifying which key concept is being tested.
- For free-response questions, always define the term first, then explain with a specific example.
- Use process of elimination on multiple-choice: if two answers seem similar, identify the precise distinction.
- Connect ${eTpl(p.title.toLowerCase())} to broader themes in ${eTpl(courseName)} for higher scores.
      \`
    },
    {
      id: '${id}-applied',
      type: 'multiple-choice' as const,
      content: \`
**Applied Scenarios** 🎯
      \`,
      exercise: {
        questions: [
${mcBlock(p.applied)}
        ]
      }
    }
  ]
}
`
}

/* ── generate one entrance-quiz file ──────────────── */

function quizFile({ slug, title, courseName, parts }) {
  const px = slug.replace(/-/g, '').slice(0, 4)
  const qs = parts.map((p, pi) =>
    p.quiz.map(([q, opts, ci, ex], qi) =>
      `  { id: '${px}-ent-${pi+1}${qi===0?'a':'b'}', question: '${e1(q)}', options: ['${opts.map(o=>e1(o)).join("', '")}'], correctIndex: ${ci}, explanation: '${e1(ex)}', partNumber: ${pi+1}, partTitle: '${e1(p.title)}' }`
    ).join(',\n')
  ).join(',\n')

  const pl = parts.map((p, i) =>
    `    { partNumber: ${i+1}, partTitle: '${e1(p.title)}' }`
  ).join(',\n')

  return `/**
 * Entrance Quiz — ${title} (${courseName})
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
${qs}
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
${pl}
  ]
}
`
}

/* ── write everything for one course ──────────────── */

export function writeCourse(courseData) {
  const { prefix, name: courseName, emoji, topics } = courseData
  let lc = 0, qc = 0
  const regEntries = []
  const qiEntries  = []

  for (const topic of topics) {
    const stem = topic.slug.startsWith(prefix + '-')
      ? topic.slug.slice(prefix.length + 1)
      : topic.slug

    /* 7 interactive-lesson files */
    for (let pn = 1; pn <= 7; pn++) {
      const fname = `${prefix}-${stem}-part${pn}.ts`
      const fpath = path.join(LESSON_DIR, fname)
      if (!fs.existsSync(fpath)) {
        fs.writeFileSync(fpath, lessonFile({
          prefix, courseName, emoji,
          slug: topic.slug, title: topic.title,
          pn, p: topic.parts[pn - 1]
        }), 'utf8')
        lc++
      }
    }

    /* 1 entrance-quiz file */
    const qpath = path.join(QUIZ_DIR, `${topic.slug}.ts`)
    if (!fs.existsSync(qpath)) {
      fs.writeFileSync(qpath, quizFile({
        slug: topic.slug, title: topic.title,
        courseName, parts: topic.parts
      }), 'utf8')
      qc++
    }

    /* registry entry */
    const parts = topic.parts.map((p, i) => {
      const pn = i + 1
      const fn = `${prefix}-${stem}-part${pn}`
      const en = prefix + cc(stem) + 'Part' + pn + 'Data'
      return `      { title: '${e1(p.title)}', loader: () => import('./${fn}').then(m => m.${en}) }`
    }).join(',\n')
    regEntries.push(`  '${topic.slug}': {\n    completionDestination: 'complete',\n    parts: [\n${parts}\n    ],\n  }`)

    /* quiz-index entry */
    qiEntries.push(`  '${topic.slug}': () => import('./${topic.slug}')`)
  }

  console.log(`[${courseName}] ${lc} lesson files, ${qc} quiz files`)
  return { regEntries, qiEntries, lc, qc }
}
