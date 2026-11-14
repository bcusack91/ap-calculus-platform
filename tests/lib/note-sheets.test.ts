import { describe, expect, it } from 'vitest'
import type { Slide } from '@/lib/slide-deck'
import type { VisibleStep } from '@/lib/video-lesson-core'
import { blankText, blankToken, equationSheet, liveNoteCounts, liveNoteSections, videoNoteSheets } from '@/lib/note-sheets'
import { NOTE_SHEET_TOPICS } from '@/data/note-sheets'
import { REVIEW_DECKS } from '@/data/video-lesson-flashcards'

describe('blankText', () => {
  it('blanks bold terms and capitalised emphasis, and keeps the answers in order', () => {
    const r = blankText('**Conventional current** is the direction POSITIVE charge would flow.')
    expect(r.md).toBe(`${blankToken(0)} is the direction ${blankToken(1)} charge would flow.`)
    expect(r.answers).toEqual(['Conventional current', 'positive'])
  })

  it('keeps labels, part letters, long phrases, acronyms and anything inside math', () => {
    for (const s of ['**Junction rule.** Charge is conserved.', '**(a)** How much charge?', '**Problem 1.** A battery.', '**Find what is held constant** for each element.', 'Every MCAT rule uses an ECG.', 'So $V_{TOTAL} = IR$ holds.']) {
      expect(blankText(s)).toEqual({ md: s, answers: [] })
    }
  })

  it('stops at the limit', () => {
    expect(blankText('ONE1 SAME same SAME path SAME node SAME end', 2).answers).toEqual(['same', 'same'])
  })
})

const deck: Slide[] = [
  { kind: 'title', title: 'Circuits', subtitle: 'MCAT' },
  { kind: 'content', title: "What We'll Cover", blocks: ['- Current'] },
  { kind: 'content', title: 'Current', blocks: ['**Current** is a RATE.', '$$I = \\frac{\\Delta Q}{\\Delta t}$$'], figure: { svg: '<svg viewBox="0 0 1 1"></svg>', alt: 'A wire carrying current.' } },
  { kind: 'content', title: 'Current (cont.)', blocks: ['| Circuit | Water |\n|---|---|\n| battery | pump |\n| current | flow rate |'] },
  { kind: 'poll', question: 'Which way?', options: ['Left', 'Right'], correctIndex: 1, explanation: 'Right, because…' },
  { kind: 'content', title: 'Worked Example — Counting Charge', blocks: ['**Problem 1.** A wire carries 2 A.', '**(a)** How much charge in 3 s?', '**(b)** How many electrons?', '→ Try each part before the next slide.'] },
  { kind: 'content', title: 'Counting Charge · Problem 1 (a)', blocks: ['**Problem 1.** A wire carries 2 A.', '**(a)** How much charge in 3 s?', '**(a) Charge.** $6$ C'] },
  { kind: 'content', title: 'Counting Charge · Problem 1 (b)', blocks: ['**Problem 1.** A wire carries 2 A.', '**(b)** How many electrons?', '**(b) Count.** Divide by $e$.'] },
  { kind: 'content', title: 'Counting Charge · Problem 2', blocks: ['**Problem 2.** A channel passes 2 pA.', '**(a)** How many ions?'] },
  { kind: 'content', title: 'Counting Charge · Problem 2 (a)', blocks: ['**Problem 2.** A channel passes 2 pA.', '**(a)** How many ions?', '**(a) Ions.** About 12,500.'] },
  { kind: 'content', title: 'Key Takeaways', layout: 'grid', blocks: ['- **Current is a rate.** $I = \\Delta Q/\\Delta t$.', '- **Direction.** The way positive charge moves.'] },
  { kind: 'quiz', topicSlug: 't', title: 'Circuits' },
]

describe('liveNoteSections', () => {
  const sections = liveNoteSections(deck)

  it('follows the deck: one section per unit, no title, agenda or quiz slide', () => {
    expect(sections.map((s) => s.title)).toEqual(['Current', 'Worked example: Counting Charge', 'Key Takeaways'])
  })

  it('half-writes equations, blanks table cells and prints a poll without its answer', () => {
    const items = sections[0].items
    expect(items.map((i) => i.kind)).toEqual(['figure', 'text', 'equation', 'table', 'poll'])
    expect(items[2]).toMatchObject({ kind: 'equation', lhs: 'I' })
    expect(items[3]).toMatchObject({ kind: 'table', header: ['Circuit', 'Water'], rows: [['battery', 'pump'], ['current', 'flow rate']] })
    expect(items[4]).toEqual({ kind: 'poll', number: 1, question: 'Which way?', options: ['Left', 'Right'] })
    expect(JSON.stringify(items[4])).not.toMatch(/correctIndex|explanation|because/)
  })

  it('splits a worked example into problems and parts, with each solution kept for the key', () => {
    const worked = sections[1].items[0]
    if (worked.kind !== 'worked') throw new Error('expected a worked example')
    expect(worked.problems).toHaveLength(2)
    expect(worked.problems[0].statement).toEqual(['**Problem 1.** A wire carries 2 A.'])
    expect(worked.problems[0].parts).toEqual([
      { label: 'a', prompt: 'How much charge in 3 s?', solution: '**(a) Charge.** $6$ C' },
      { label: 'b', prompt: 'How many electrons?', solution: '**(b) Count.** Divide by $e$.' },
    ])
    expect(worked.problems[1].parts).toEqual([{ label: 'a', prompt: 'How many ions?', solution: '**(a) Ions.** About 12,500.' }])
  })

  it('prints takeaway titles and leaves the sentence to the student', () => {
    expect(sections[2].items[0]).toEqual({
      kind: 'recall',
      entries: [
        { title: 'Current is a rate', body: '$I = \\Delta Q/\\Delta t$.' },
        { title: 'Direction', body: 'The way positive charge moves.' },
      ],
    })
  })

  it('counts what the student has to do', () => {
    expect(liveNoteCounts(sections)).toEqual({ blanks: 2 + 1 + 2 + 2, polls: 1, workedParts: 3 })
  })
})

describe('equationSheet', () => {
  it('lists each quantity and each equation card once', () => {
    const sheet = equationSheet([
      { front: 'What symbol stands for current, and what is its SI unit?', back: '$I$. The ampere, A.' },
      { front: 'What symbol stands for current, and what is its SI unit?', back: '$I$. The ampere, A.' },
      { front: 'Write current as an equation, with its unit.', back: '$I = \\dfrac{\\Delta Q}{\\Delta t}$. Here $I$ is the current (A).' },
      { front: 'Which way does conventional current point?', back: 'The way positive charge would move.' },
    ])
    expect(sheet.quantities).toEqual([{ quantity: 'Current', answer: '$I$. The ampere, A.' }])
    expect(sheet.equations.map((e) => e.prompt)).toEqual(['Write current as an equation, with its unit.'])
  })

  it('has rows for every topic on the rollout list', () => {
    for (const [slug, { lessonKey }] of Object.entries(NOTE_SHEET_TOPICS)) {
      const decks = REVIEW_DECKS[lessonKey]
      expect(decks, `${slug} → ${lessonKey}`).toBeTruthy()
      const sheet = equationSheet(Object.values(decks).flat())
      expect(sheet.quantities.length + sheet.equations.length, slug).toBeGreaterThan(4)
    }
  })
})

function step(order: number, title: string, tags: string[], questions: unknown[] = []): VisibleStep {
  const meta = { role: (tags.find((t) => t.startsWith('role-'))?.slice(5) ?? 'teach') as 'teach' | 'problem' | 'solution', video: Number(tags.find((t) => t.startsWith('video-'))?.slice(6)), section: tags.find((t) => t.startsWith('section-'))?.slice(8) ?? null, lesson: 'k' }
  return {
    order,
    clipId: `c${order}`,
    yield: null,
    questions,
    clip: { title, provider: 'FILE', providerId: 'x', durationSec: 65, tags },
    meta,
    visibleQuestions: questions.map((q, index) => ({ index, q })) as VisibleStep['visibleQuestions'],
  }
}

describe('videoNoteSheets', () => {
  const choice = { question: 'Why?', options: ['a', 'b', 'c', 'd'], correctAnswer: 0, explanation: 'Because.' }
  const numeric = { kind: 'numeric', question: 'A wire carries 3.2 mA.', parts: [{ label: 'a', prompt: 'Charge in 5.0 s?', answer: 0.016, unit: 'C', expected: '1.6 × 10⁻² C' }], explanation: 'ΔQ = IΔt.' }
  const sheets = videoNoteSheets(
    [
      step(1, 'Current is a rate', ['video-1', 'section-02-rate']),
      step(2, 'Why a lamp lights', ['video-1', 'section-03-lamp'], [choice]),
      step(3, 'Remember', ['video-1', 'section-04-recap'], [choice, choice, choice]),
      step(4, 'Example 1: the problem', ['video-2', 'section-02-ex1-problem', 'role-problem'], [numeric]),
      step(5, 'Example 1: the solution', ['video-2', 'section-03-ex1-solution', 'role-solution']),
      step(6, 'Remember: the method', ['video-2', 'section-04-recap'], [choice]),
    ],
    { 1: 'Current: Charge on the Move', 2: 'Current: Worked Examples' },
    (_key, video) => (video === 1 ? [{ front: 'What symbol stands for current, and what is its SI unit?', back: '$I$, in amperes.' }] : []),
  )

  it('gives a concept video the tracker and a worked-examples video the workbook', () => {
    expect(sheets.map((s) => [s.video, s.title, s.kind])).toEqual([
      [1, 'Current: Charge on the Move', 'tracker'],
      [2, 'Current: Worked Examples', 'workbook'],
    ])
  })

  it('keeps on-screen order, marks recaps and counts checkpoints', () => {
    expect(sheets[0].sections.map((s) => [s.title, s.recap, s.checkpoints])).toEqual([
      ['Current is a rate', false, 0],
      ['Why a lamp lights', false, 1],
      ['Remember', true, 3],
    ])
    expect(sheets[0].quantities).toEqual([{ quantity: 'Current', answer: '$I$, in amperes.' }])
  })

  it('prints a worked problem with its parts', () => {
    expect(sheets[1].sections[0].problems).toEqual([
      { question: 'A wire carries 3.2 mA.', parts: [{ label: 'a', prompt: 'Charge in 5.0 s?', unit: 'C', expected: '1.6 × 10⁻² C' }], explanation: 'ΔQ = IΔt.' },
    ])
  })
})
