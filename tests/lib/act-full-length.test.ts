/**
 * Full-length ACT: the pure pieces — English marker parsing/rendering, the
 * section/composite/STEM scoring, the form registry's availability rules and
 * generated manifest, the question source (grading by id, review items) and
 * the answer-log rows. Driven by the synthetic fixture form.
 */
import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'fs'
import path from 'path'
import {
  actEnglishToRichText,
  englishMarkerNumbers,
  parseEnglishMarkers,
  renderActEnglishHtml,
  stripEnglishMarkers,
} from '@/lib/act-english-markers'
import { actFlStudyTopics, formatActRange, scoreActFullLength, type ActFlGradedLike } from '@/lib/act-fl-scoring'
import { actSectionScaled } from '@/lib/act-scoring'
import { checkActForm, loadActFormFrom } from '@/data/act-practice/full-length'
import type { ActFlLoaderMap } from '@/data/act-practice/full-length/loader-types'
import { manifestSource } from '../../scripts/build-act-fl-registry'
import {
  actFlSlots,
  actFlReviewItems,
  buildActFlItems,
  publicActForm,
  sanitizeActFlAnswers,
  scoreActFlItems,
} from '@/lib/question-sources/act'
import { actFullLengthQuestionRows } from '@/lib/question-activity-rows'
import { isQuestionKey, optionKey } from '@/lib/question-key'
import { newActFlProgress, parseActFlProgress } from '@/lib/act-fl-progress'
import { fixtureForm, fixtureLoaders } from '../fixtures/act-fl-fixture'

describe('English markers', () => {
  const text = 'She {{1:climbed}} the stairs. {{2:However,}} it was *calm*. {{3}}'

  it('parses underlined portions and bare positions in order', () => {
    expect(parseEnglishMarkers(text)).toEqual([
      { kind: 'text', text: 'She ' },
      { kind: 'underline', marker: 1, text: 'climbed' },
      { kind: 'text', text: ' the stairs. ' },
      { kind: 'underline', marker: 2, text: 'However,' },
      { kind: 'text', text: ' it was *calm*. ' },
      { kind: 'position', marker: 3 },
    ])
    expect(englishMarkerNumbers(text)).toEqual([1, 2, 3])
    expect(stripEnglishMarkers(text)).toBe('She climbed the stairs. However, it was *calm*. ')
  })

  it('renders underlines with a superscript number and highlights only the active marker', () => {
    const html = renderActEnglishHtml(text, 2)
    expect(html).toContain('data-act-marker="1"')
    expect(html).toMatch(/<sup[^>]*>1<\/sup><u[^>]*>climbed<\/u><\/span>/)
    expect(html).toMatch(/data-act-marker="2" data-act-active="true"/)
    expect(html.match(/data-act-active/g)).toHaveLength(1)
    // A bare position marker is a superscript with no underline.
    expect(html).toMatch(/data-act-marker="3"[^>]*><sup[^>]*>3<\/sup><\/span>/)
    // Markdown inside the passage still renders; no placeholder leaks.
    expect(html).toContain('<em>calm</em>')
    expect(html).not.toMatch(/⟦|ACT[OCP]\d/)
  })

  it('keeps emphasis working inside a marker', () => {
    expect(renderActEnglishHtml('A {{4:*Hamlet*}} line')).toContain('<em>Hamlet</em>')
  })

  it('changes only markup, never the visible text, as the active marker moves', () => {
    const textOf = (h: string) => h.replace(/<[^>]+>/g, '')
    expect(textOf(renderActEnglishHtml(text, 1))).toBe(textOf(renderActEnglishHtml(text, 3)))
    expect(textOf(renderActEnglishHtml(text, null))).toBe(textOf(renderActEnglishHtml(text, 2)))
  })

  it('turns markers into <sup>/<u> markup for the review page', () => {
    expect(actEnglishToRichText(text)).toBe('She <sup>[1]</sup><u>climbed</u> the stairs. <sup>[2]</sup><u>However,</u> it was *calm*. <sup>[3]</sup>')
  })
})

describe('scoring', () => {
  const items = (section: ActFlGradedLike['section'], skill: ActFlGradedLike['skill'], total: number, correct: number): ActFlGradedLike[] =>
    Array.from({ length: total }, (_, i) => ({ section, skill, isCorrect: i < correct }))

  it('scales each section from fraction correct and averages English, Math, Reading into the composite', () => {
    const graded = [...items('english', 'CSE', 50, 40), ...items('math', 'PHM-A', 45, 36), ...items('reading', 'KID', 36, 18), ...items('science', 'IOD', 40, 30)]
    const s = scoreActFullLength(graded, true)
    const e = actSectionScaled(40 / 50)
    const m = actSectionScaled(36 / 45)
    const r = actSectionScaled(18 / 36)
    const sci = actSectionScaled(30 / 40)
    expect(s.sections.map((x) => x.scaled)).toEqual([e, m, r, sci])
    expect(s.composite).toBe(Math.round((e + m + r) / 3))
    expect(s.stem?.score).toBe(Math.round((m + sci) / 2))
    expect(s.compositeRange).toEqual({ low: s.composite - 1, high: s.composite + 1 })
    expect(s.sections[0].range).toEqual({ low: e - 2, high: e + 2 })
    expect(s.correct).toBe(124)
    expect(s.total).toBe(171)
  })

  it('leaves Science out of the composite, and has no STEM without it', () => {
    const graded = [...items('english', 'CSE', 50, 50), ...items('math', 'PHM-A', 45, 45), ...items('reading', 'KID', 36, 36), ...items('science', 'IOD', 40, 0)]
    const withSci = scoreActFullLength(graded, true)
    const noSci = scoreActFullLength(graded, false)
    expect(withSci.composite).toBe(36)
    expect(noSci.composite).toBe(36)
    expect(noSci.stem).toBeNull()
    expect(noSci.sections.map((x) => x.section)).toEqual(['english', 'math', 'reading'])
    expect(noSci.total).toBe(131)
    expect(withSci.stem?.score).toBe(Math.round((36 + 1) / 2))
  })

  it('reports skills by ACT reporting category and picks weak ones to study', () => {
    const graded = [...items('english', 'CSE', 20, 18), ...items('english', 'POW', 10, 3), ...items('math', 'PHM-G', 10, 6)]
    const s = scoreActFullLength(graded, false)
    expect(s.skills.map((k) => [k.skill, k.correct, k.total])).toEqual([['POW', 3, 10], ['CSE', 18, 20], ['PHM-G', 6, 10]])
    expect(actFlStudyTopics(s.skills)).toEqual([
      { slug: 'act-english-rhetorical-act', skill: 'POW', priority: 'high', accuracy: 0.3 },
      { slug: 'act-plane-geometry-act', skill: 'PHM-G', priority: 'medium', accuracy: 0.6 },
    ])
    expect(formatActRange(27, { low: 26, high: 28 })).toBe('27 (26–28)')
  })
})

describe('form registry', () => {
  it('accepts a complete blueprint form', () => {
    expect(checkActForm(fixtureForm(1)).errors).toEqual([])
  })

  it('rejects wrong counts, malformed questions and duplicate ids', () => {
    const f = fixtureForm(1)
    f.english[0].questions.pop()
    f.math[3] = { ...f.math[3], options: ['a', 'b', 'c'] as unknown as [string, string, string, string] }
    f.math[4] = { ...f.math[4], correctIndex: 7 as 0 }
    f.reading[1].questions[0] = { ...f.reading[1].questions[0], id: f.reading[0].questions[0].id }
    f.science.pop()
    const { errors } = checkActForm(f)
    expect(errors.join('\n')).toMatch(/english passage 1: 9 questions/)
    expect(errors.join('\n')).toMatch(/math q4: needs exactly 4/)
    expect(errors.join('\n')).toMatch(/math q5: correctIndex/)
    expect(errors.join('\n')).toMatch(/duplicate id/)
    expect(errors.join('\n')).toMatch(/science: 5 passages/)
  })

  it('warns (without blocking) when an English marker is missing from its passage', () => {
    const f = fixtureForm(1)
    f.english[0].questions[0] = { ...f.english[0].questions[0], marker: 99 }
    const res = checkActForm(f)
    expect(res.errors).toEqual([])
    expect(res.warnings.join('\n')).toMatch(/marker \{\{99\}\} not in the passage/)
  })

  it('offers a form only when all four section files load and pass', async () => {
    const one1 = fixtureLoaders(1)
    const loaders: ActFlLoaderMap = {
      1: { english: one1.english, math: one1.math }, // still being written
      2: fixtureLoaders(2),
      3: { ...fixtureLoaders(3), science: async () => ({}) }, // file exists, export not yet added
    }
    const one = await loadActFormFrom(loaders, 1)
    expect(one.form).toBeNull()
    expect(one.missing).toEqual(['reading', 'science'])
    const two = await loadActFormFrom(loaders, 2)
    expect(two.form?.form).toBe(2)
    expect(two.form?.math).toHaveLength(45)
    const three = await loadActFormFrom(loaders, 3)
    expect(three.form).toBeNull()
    expect(three.missing).toEqual(['science'])
    const broken = await loadActFormFrom({ 1: { ...fixtureLoaders(1), math: async () => ({ ACT_FL1_MATH: fixtureForm(1).math.slice(0, 40) }) } }, 1)
    expect(broken.form).toBeNull()
    expect(broken.errors.join()).toMatch(/math: 40 questions/)
    const throws = await loadActFormFrom({ 1: { ...fixtureLoaders(1), reading: async () => { throw new Error('syntax') } } }, 1)
    expect(throws.missing).toEqual(['reading'])
  })

  it('generates the manifest from the section files that exist', () => {
    const src = manifestSource(['types.ts', 'fl2-math.ts', 'fl1-english.ts', 'fl1-science.ts', 'notes.md', 'fl12-reading.ts'])
    expect(src).toContain("  1: {\n    english: () => import('./fl1-english'),\n    science: () => import('./fl1-science'),\n  },")
    expect(src).toContain("  2: {\n    math: () => import('./fl2-math'),\n  },")
    expect(src).toContain("12: {\n    reading: () => import('./fl12-reading'),")
    expect(src.indexOf('  1: {')).toBeLessThan(src.indexOf('  2: {'))
  })

  it('the committed manifest only lists section files that exist', () => {
    const dir = path.resolve(__dirname, '../../src/data/act-practice/full-length')
    const manifest = readFileSync(path.join(dir, 'forms.generated.ts'), 'utf8')
    const listed = [...manifest.matchAll(/import\('\.\/(fl\d+-\w+)'\)/g)].map((m) => m[1])
    for (const f of listed) expect(existsSync(path.join(dir, `${f}.ts`)), f).toBe(true)
    // No stray fixture registration in src/.
    expect(manifest).not.toMatch(/fixture/)
    expect(readdirSync(dir).filter((f) => /fixture/i.test(f))).toEqual([])
  })

  it('the committed manifest is exactly what the generator produces (run scripts/build-act-fl-registry.ts after adding a form)', () => {
    const dir = path.resolve(__dirname, '../../src/data/act-practice/full-length')
    const committed = readFileSync(path.join(dir, 'forms.generated.ts'), 'utf8')
    expect(committed).toBe(manifestSource(readdirSync(dir)))
  })
})

describe('question source', () => {
  const form = fixtureForm(1)

  it('lays the sitting out in exam order with per-section numbering', () => {
    const slots = actFlSlots(form, true)
    expect(slots).toHaveLength(171)
    expect(slots.map((s) => s.section).filter((s, i, a) => a.indexOf(s) === i)).toEqual(['english', 'math', 'reading', 'science'])
    expect(slots[50]).toMatchObject({ section: 'math', number: 1 })
    expect(actFlSlots(form, false)).toHaveLength(131)
  })

  it('keeps only answers, flags and timings for questions in the sitting', () => {
    const sci = form.science[0].questions[0].id
    const e1 = form.english[0].questions[0].id
    const s = sanitizeActFlAnswers(form, false, {
      answers: { [e1]: 2, [sci]: 1, nope: 0, [form.math[0].id]: 9 },
      flags: [e1, e1, sci, 42],
      questionSeconds: { [e1]: 30.4, [form.math[1].id]: 99_999, [sci]: 5 },
    })
    expect(s.answers).toEqual({ [e1]: 2 })
    expect(s.flags).toEqual([e1])
    expect(s.questionSeconds).toEqual({ [e1]: 30, [form.math[1].id]: 3000 })
  })

  it('grades by id against the authored key and keys passage questions with their passage', () => {
    const answers: Record<string, number> = {}
    for (const slot of actFlSlots(form, true)) answers[slot.question.id] = slot.question.correctIndex
    const wrong = form.reading[0].questions[0]
    answers[wrong.id] = (wrong.correctIndex + 1) % 4
    delete answers[form.math[0].id]
    const items = buildActFlItems(form, true, { answers, flags: [wrong.id], questionSeconds: { [wrong.id]: 12 } })
    expect(items.filter((i) => i.isCorrect)).toHaveLength(169)
    // Review numbers each section from 1, like the test booklet: English 1–50, Math 1–45, …
    const bySection = (sec: string) => items.filter((i) => i.discipline === sec).map((i) => i.displayNumber)
    expect(bySection('English')[0]).toBe(1)
    expect(bySection('English').at(-1)).toBe(50)
    expect(bySection('Math')[0]).toBe(1)
    expect(bySection('Math').at(-1)).toBe(45)
    expect(bySection('Reading')[0]).toBe(1)
    expect(bySection('Science').at(-1)).toBe(40)
    const w = items.find((i) => i.questionId === wrong.id)!
    expect(w).toMatchObject({ chosenIndex: (wrong.correctIndex + 1) % 4, flagged: true, durationMs: 12_000, discipline: 'Reading', skill: 'Key Ideas & Details', topicSlug: 'act-reading-main-ideas-act' })
    expect(w.passage?.id).toBe(form.reading[0].id)
    expect(items.find((i) => i.questionId === form.math[0].id)).toMatchObject({ chosenIndex: null, isCorrect: false, passage: null })
    expect(new Set(items.map((i) => i.questionKey)).size).toBe(171)
    expect(items.every((i) => isQuestionKey(i.questionKey) && i.optionExplanations?.length === 4)).toBe(true)
    // English review: markers become markup, and the stem names the portion.
    const e = items[0]
    expect(e.passage?.body).toContain('<sup>[1]</sup><u>a short entry, written in pencil</u>')
    expect(e.question).toMatch(/^\*\*Question 1\*\* \(underlined portion 1\)/)
    const score = scoreActFlItems(items, true)
    expect(score.sections.find((s) => s.section === 'math')?.correct).toBe(44)
  })

  it('rebuilds review items from stored results (null without answers or form)', async () => {
    const stored = { form: 1, includeScience: false, answers: { [form.english[0].questions[0].id]: 0 }, flags: [] }
    const items = await actFlReviewItems(stored, async (n) => (n === 1 ? form : null))
    expect(items).toHaveLength(131)
    expect(items?.[0].chosenIndex).toBe(0)
    expect(await actFlReviewItems({ form: 2, answers: {} }, async () => null)).toBeNull()
    expect(await actFlReviewItems({ form: 1 }, async () => form)).toBeNull()
  })

  it('serves the runner a form without keys, explanations or skills', () => {
    const pub = JSON.stringify(publicActForm(form))
    expect(pub).not.toMatch(/correctIndex|explanation|optionExplanations|"skill"|difficulty/)
    expect(publicActForm(form).english[0].questions[0].marker).toBe(1)
  })

  it('writes one FULL_LENGTH act-fl answer-log row per question', () => {
    const items = buildActFlItems(form, false, { answers: { [form.math[2].id]: 1 }, flags: [form.math[2].id] })
    const rows = actFullLengthQuestionRows(items, { attemptId: 'd1' })
    expect(rows).toHaveLength(131)
    const r = rows[52]
    expect(r).toMatchObject({ source: 'FULL_LENGTH', courseSlug: 'act-prep', discipline: 'Math', attemptKind: 'act-fl', attemptId: 'd1', itemIndex: 52, chosenIndex: 1, flagged: true })
    expect(r.chosenKey).toBe(optionKey(form.math[2].options[1]))
    expect(rows[0]).toMatchObject({ chosenIndex: null, chosenKey: null, correct: 0 })
  })
})

describe('progress autosave', () => {
  it('round-trips a sitting and rejects other forms or junk', () => {
    const p = { ...newActFlProgress(2, false, 'abc12345-x'), answers: { a: 1 }, phase: 'in' as const, sectionDeadline: 123 }
    const raw = JSON.stringify(p)
    expect(parseActFlProgress(raw, 2)).toMatchObject({ form: 2, includeScience: false, answers: { a: 1 }, phase: 'in', sectionDeadline: 123 })
    expect(parseActFlProgress(raw, 1)).toBeNull()
    expect(parseActFlProgress('{oops', 2)).toBeNull()
    expect(parseActFlProgress(JSON.stringify({ ...p, phase: 'weird' }), 2)).toBeNull()
  })
})
