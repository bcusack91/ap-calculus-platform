import { describe, expect, it } from 'vitest'
import {
  dedupeSuggestions,
  draftClipIds,
  lessonStatus,
  linkableRoleError,
  looseDraftSchema,
  normalizeTags,
  parseDurationSec,
  slugifyInstructorName,
  stepRowsFromDraft,
  suggestionsFromDeckSlides,
  suggestionsFromLessonSections,
  uniqueSlug,
  validateDraftForApproval,
  type ClipForApproval,
} from '@/lib/video-lesson-admin'

const q = (over: Record<string, unknown> = {}) => ({
  question: 'Which atom is largest?',
  options: ['O', 'S', 'Se', 'Cl'],
  correctAnswer: 2,
  explanation: 'Radius grows down a group.',
  ...over,
})
const clip = (id: string, over: Partial<ClipForApproval> = {}): [string, ClipForApproval] => [
  id,
  { id, instructorId: 'ins1', durationSec: 300, status: 'DRAFT', ...over },
]
const draft = (steps: unknown[]) => ({ title: 'Periodic trends', steps })

describe('validateDraftForApproval', () => {
  const clips = new Map([clip('c1'), clip('c2')])

  it('accepts a complete draft and trims it', () => {
    const r = validateDraftForApproval(
      draft([{ clipId: 'c1', questions: [q({ question: '  Which atom is largest?  ' })] }, { clipId: 'c2', yield: 'LOW', questions: [q(), q({ yield: 'LOW' })] }]),
      clips,
      'ins1',
    )
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.draft.steps[0].questions[0].question).toBe('Which atom is largest?')
  })

  it('rejects a missing draft', () => {
    expect(validateDraftForApproval(null, clips, 'ins1').ok).toBe(false)
  })

  it('reports blank fields by path with friendly messages', () => {
    const r = validateDraftForApproval(draft([{ clipId: 'c1', questions: [q({ explanation: ' ', options: ['O', '', 'Se', 'Cl'] })] }]), clips, 'ins1')
    expect(r.ok).toBe(false)
    if (!r.ok) {
      expect(r.issues).toContainEqual({ path: 'steps.0.questions.0.explanation', message: 'Write an explanation.' })
      expect(r.issues).toContainEqual({ path: 'steps.0.questions.0.options.1', message: 'Fill in every answer choice.' })
    }
  })

  it('requires 1+ steps and 1-3 questions per step', () => {
    expect(validateDraftForApproval(draft([]), clips, 'ins1').ok).toBe(false)
    expect(validateDraftForApproval(draft([{ clipId: 'c1', questions: [] }]), clips, 'ins1').ok).toBe(false)
    expect(validateDraftForApproval(draft([{ clipId: 'c1', questions: [q(), q(), q(), q()] }]), clips, 'ins1').ok).toBe(false)
  })

  it("rejects another instructor's clip, an unknown clip, archived and zero-length clips", () => {
    const m = new Map([clip('c1', { instructorId: 'other' }), clip('c3', { status: 'ARCHIVED' }), clip('c4', { durationSec: 0 })])
    for (const id of ['c1', 'missing', 'c3', 'c4']) {
      const r = validateDraftForApproval(draft([{ clipId: id, questions: [q()] }]), m, 'ins1')
      expect(r.ok).toBe(false)
      if (!r.ok) expect(r.issues[0].path).toBe('steps.0.clipId')
    }
  })

  it('rejects the same clip twice (progress is keyed by clip id)', () => {
    const r = validateDraftForApproval(draft([{ clipId: 'c1', questions: [q()] }, { clipId: 'c1', questions: [q()] }]), clips, 'ins1')
    expect(r.ok).toBe(false)
    if (!r.ok) expect(r.issues).toEqual([{ path: 'steps.1.clipId', message: 'Clip 2 is already used earlier in this lesson.' }])
  })
})

describe('stepRowsFromDraft', () => {
  it('orders by index and keeps only LOW yield tags', () => {
    const r = validateDraftForApproval(
      draft([{ clipId: 'c2', yield: null, questions: [q()] }, { clipId: 'c1', yield: 'LOW', questions: [q({ yield: 'LOW' })] }]),
      new Map([clip('c1'), clip('c2')]),
      'ins1',
    )
    if (!r.ok) throw new Error('expected ok')
    const rows = stepRowsFromDraft(r.draft)
    expect(rows.map((x) => [x.order, x.clipId, x.yield])).toEqual([[0, 'c2', null], [1, 'c1', 'LOW']])
    expect(rows[0].questions[0]).not.toHaveProperty('yield')
    expect(rows[1].questions[0].yield).toBe('LOW')
  })
})

describe('looseDraftSchema', () => {
  it('accepts work in progress with blanks and clips without questions', () => {
    expect(looseDraftSchema.safeParse(draft([{ clipId: 'c1', questions: [] }])).success).toBe(true)
    expect(looseDraftSchema.safeParse({ title: '', steps: [{ clipId: 'c1', questions: [q({ question: '', explanation: '' })] }] }).success).toBe(true)
  })
  it('still enforces the shape', () => {
    expect(looseDraftSchema.safeParse({ title: 'x', steps: [{ clipId: 'c1', questions: [q({ options: ['a', 'b'] })] }] }).success).toBe(false)
  })
})

describe('instructor helpers', () => {
  it('slugifies names and finds a free slug', () => {
    expect(slugifyInstructorName("Dr. Zoë O'Neil")).toBe('dr-zoe-oneil')
    expect(slugifyInstructorName('!!!')).toBe('instructor')
    expect(uniqueSlug('jane', new Set(['jane', 'jane-2']))).toBe('jane-3')
    expect(uniqueSlug('jane', new Set())).toBe('jane')
  })
  it('only links teacher and admin accounts', () => {
    expect(linkableRoleError('TEACHER')).toBeNull()
    expect(linkableRoleError('ADMIN')).toBeNull()
    expect(linkableRoleError('FREE')).toMatch(/Teacher first/)
  })
  it('normalizes tags and durations', () => {
    expect(normalizeTags(['Periodic Trends', 'periodic-trends', ' Z_eff! '])).toEqual(['periodic-trends', 'zeff'])
    expect(normalizeTags('a, b')).toEqual(['a', 'b'])
    expect(parseDurationSec('245.6')).toBe(246)
    expect(parseDurationSec(0)).toBeNull()
    expect(parseDurationSec('abc')).toBeNull()
  })
  it('collects draft clip ids from any shape', () => {
    expect(draftClipIds({ steps: [{ clipId: 'a' }, { clipId: 'a' }, { clipId: 3 }, {}] })).toEqual(['a'])
    expect(draftClipIds(null)).toEqual([])
  })
})

describe('lessonStatus', () => {
  const base = { published: false, archived: false, version: 0, draftState: null as string | null, reviewNote: null as string | null }
  it('maps the lesson fields to the badge', () => {
    expect(lessonStatus(base).kind).toBe('new')
    expect(lessonStatus({ ...base, draftState: 'EDITING' }).kind).toBe('draft')
    expect(lessonStatus({ ...base, draftState: 'SUBMITTED' }).kind).toBe('submitted')
    expect(lessonStatus({ ...base, draftState: 'EDITING', reviewNote: 'Fix clip 2' })).toMatchObject({ kind: 'returned', note: 'Fix clip 2' })
    expect(lessonStatus({ ...base, published: true, version: 2 })).toEqual({ kind: 'published', version: 2 })
    expect(lessonStatus({ ...base, version: 2 }).kind).toBe('unpublished')
    expect(lessonStatus({ ...base, archived: true, version: 1 }).kind).toBe('archived')
  })
})

describe('question suggestions', () => {
  const sections = [
    { type: 'text', content: 'intro' },
    {
      type: 'multiple-choice',
      exercise: {
        questions: [
          q(),
          { text: 'Uses text instead of question', options: ['a', 'b', 'c', 'd'], correctAnswer: 0, explanation: 'Because.' },
          { question: 'Three options', options: ['a', 'b', 'c'], correctAnswer: 0, explanation: 'x' },
          { question: 'No key', options: ['a', 'b', 'c', 'd'], explanation: 'x' },
          q({ question: 'Tagged high', yield: 'HIGH' }),
        ],
      },
    },
    { type: 'input-box', exercise: { inputs: [{ label: 'K vs Ca', correctAnswer: 'K' }] } },
    { type: 'quiz', question: 'Quiz on the section?', options: ['1', '2', '3', '4'], correctAnswer: 3, explanation: 'Four.' },
    { type: 'multiple-choice', yield: 'LOW', exercise: { questions: [q({ question: 'Low section question' })] } },
  ]

  it('keeps only 4-option keyed questions, from exercises and quiz sections', () => {
    const s = suggestionsFromLessonSections(sections, 2)
    expect(s.map((x) => x.question)).toEqual([
      'Which atom is largest?',
      'Uses text instead of question',
      'Tagged high',
      'Quiz on the section?',
      'Low section question',
    ])
    expect(s.every((x) => x.source === 'lesson part 2')).toBe(true)
    expect(s[2]).not.toHaveProperty('yield')
    expect(s[4].yield).toBe('LOW')
  })

  it('reads deck polls (correctIndex) and ignores other slides', () => {
    const s = suggestionsFromDeckSlides([
      { kind: 'title', title: 't', subtitle: '' },
      { kind: 'poll', question: 'Poll?', options: ['a', 'b', 'c', 'd'], correctIndex: 1, explanation: 'b.' },
      { kind: 'poll', question: 'Bad poll', options: ['a', 'b'], correctIndex: 1, explanation: 'b.' },
    ])
    expect(s).toEqual([{ question: 'Poll?', options: ['a', 'b', 'c', 'd'], correctAnswer: 1, explanation: 'b.', source: 'slide deck' }])
    expect(suggestionsFromDeckSlides(null)).toEqual([])
  })

  it('dedupes by question text, keeping the first source', () => {
    const lesson = suggestionsFromLessonSections(sections, 1)
    const deck = suggestionsFromDeckSlides([{ kind: 'poll', question: 'which  atom is **largest**?', options: ['a', 'b', 'c', 'd'], correctIndex: 0, explanation: 'x' }])
    const out = dedupeSuggestions([...lesson, ...deck])
    expect(out.filter((x) => x.question.toLowerCase().includes('largest'))).toHaveLength(1)
    expect(out[0].source).toBe('lesson part 1')
  })
})
