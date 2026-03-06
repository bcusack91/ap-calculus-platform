import { describe, it, expect } from 'vitest'
import {
  createStudyPlanSchema,
  updateStudyPlanSchema,
  updateStudyTaskSchema,
  createStudyTaskSchema,
  joinChallengeSchema,
  updateChallengeProgressSchema,
  upsertNoteSchema,
  createBookmarkSchema,
  deleteBookmarkSchema,
  createCurriculumSchema,
} from '@/lib/validations'

describe('createStudyPlanSchema', () => {
  it('accepts a valid minimal study plan', () => {
    const result = createStudyPlanSchema.safeParse({
      title: 'My AP Calc Study Plan',
    })
    expect(result.success).toBe(true)
  })

  it('accepts a full study plan with tasks', () => {
    const result = createStudyPlanSchema.safeParse({
      title: 'AP Calc AB Final',
      examDate: '2026-05-15',
      goalType: 'AP_EXAM',
      courseSlug: 'ap-calculus-ab',
      targetScore: 5,
      tasks: [
        { title: 'Review derivatives', topicSlug: 'derivatives-intro', type: 'LESSON' },
        { title: 'Practice integrals', type: 'PRACTICE' },
      ],
    })
    expect(result.success).toBe(true)
  })

  it('rejects empty title', () => {
    const result = createStudyPlanSchema.safeParse({ title: '' })
    expect(result.success).toBe(false)
  })

  it('rejects title exceeding max length', () => {
    const result = createStudyPlanSchema.safeParse({ title: 'x'.repeat(201) })
    expect(result.success).toBe(false)
  })
})

describe('updateStudyPlanSchema', () => {
  it('accepts valid update with id', () => {
    const result = updateStudyPlanSchema.safeParse({
      id: 'plan-123',
      title: 'Updated Title',
      isActive: false,
    })
    expect(result.success).toBe(true)
  })

  it('rejects missing id', () => {
    const result = updateStudyPlanSchema.safeParse({ title: 'No ID' })
    expect(result.success).toBe(false)
  })
})

describe('updateStudyTaskSchema', () => {
  it('accepts marking task complete', () => {
    const result = updateStudyTaskSchema.safeParse({
      id: 'task-456',
      completed: true,
    })
    expect(result.success).toBe(true)
  })

  it('rejects empty id', () => {
    const result = updateStudyTaskSchema.safeParse({ id: '', completed: true })
    expect(result.success).toBe(false)
  })
})

describe('createStudyTaskSchema', () => {
  it('accepts valid task', () => {
    const result = createStudyTaskSchema.safeParse({
      planId: 'plan-123',
      title: 'Review chapter 4',
    })
    expect(result.success).toBe(true)
  })

  it('rejects missing planId', () => {
    const result = createStudyTaskSchema.safeParse({ title: 'Something' })
    expect(result.success).toBe(false)
  })

  it('rejects missing title', () => {
    const result = createStudyTaskSchema.safeParse({ planId: 'plan-123' })
    expect(result.success).toBe(false)
  })
})

describe('joinChallengeSchema', () => {
  it('accepts valid challengeId', () => {
    const result = joinChallengeSchema.safeParse({ challengeId: 'ch-123' })
    expect(result.success).toBe(true)
  })

  it('rejects empty challengeId', () => {
    const result = joinChallengeSchema.safeParse({ challengeId: '' })
    expect(result.success).toBe(false)
  })
})

describe('updateChallengeProgressSchema', () => {
  it('accepts valid progress update', () => {
    const result = updateChallengeProgressSchema.safeParse({
      challengeId: 'ch-456',
      increment: 3,
    })
    expect(result.success).toBe(true)
  })

  it('defaults increment to 1', () => {
    const result = updateChallengeProgressSchema.safeParse({
      challengeId: 'ch-456',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.increment).toBe(1)
    }
  })

  it('rejects zero increment', () => {
    const result = updateChallengeProgressSchema.safeParse({
      challengeId: 'ch-456',
      increment: 0,
    })
    expect(result.success).toBe(false)
  })

  it('rejects negative increment', () => {
    const result = updateChallengeProgressSchema.safeParse({
      challengeId: 'ch-456',
      increment: -1,
    })
    expect(result.success).toBe(false)
  })
})

describe('upsertNoteSchema', () => {
  it('accepts a valid note', () => {
    const result = upsertNoteSchema.safeParse({
      topicSlug: 'derivatives-intro',
      content: 'These are my notes on derivatives...',
    })
    expect(result.success).toBe(true)
  })

  it('rejects empty topicSlug', () => {
    const result = upsertNoteSchema.safeParse({
      topicSlug: '',
      content: 'some notes',
    })
    expect(result.success).toBe(false)
  })

  it('rejects content exceeding max length', () => {
    const result = upsertNoteSchema.safeParse({
      topicSlug: 'test',
      content: 'x'.repeat(50_001),
    })
    expect(result.success).toBe(false)
  })
})

describe('createBookmarkSchema', () => {
  it('accepts a valid bookmark', () => {
    const result = createBookmarkSchema.safeParse({
      topicSlug: 'limits-intro',
      title: 'Introduction to Limits',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.part).toBe(1) // default
    }
  })

  it('accepts bookmark with custom part', () => {
    const result = createBookmarkSchema.safeParse({
      topicSlug: 'limits-intro',
      title: 'Introduction to Limits',
      part: 3,
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.part).toBe(3)
    }
  })

  it('rejects missing title', () => {
    const result = createBookmarkSchema.safeParse({
      topicSlug: 'limits-intro',
    })
    expect(result.success).toBe(false)
  })
})

describe('deleteBookmarkSchema', () => {
  it('accepts valid delete', () => {
    const result = deleteBookmarkSchema.safeParse({
      topicSlug: 'limits-intro',
      part: 2,
    })
    expect(result.success).toBe(true)
  })

  it('defaults part to 1', () => {
    const result = deleteBookmarkSchema.safeParse({
      topicSlug: 'limits-intro',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.part).toBe(1)
    }
  })
})

describe('createCurriculumSchema', () => {
  it('accepts a minimal curriculum', () => {
    const result = createCurriculumSchema.safeParse({
      classroomId: 'class-1',
      title: 'Semester 1 Curriculum',
    })
    expect(result.success).toBe(true)
  })

  it('accepts a full curriculum with weeks', () => {
    const result = createCurriculumSchema.safeParse({
      classroomId: 'class-1',
      title: 'AP Calculus Curriculum',
      description: 'Full year plan',
      startDate: '2026-09-01',
      endDate: '2027-06-01',
      weeks: [
        {
          weekNum: 1,
          title: 'Limits and Continuity',
          items: [
            { title: 'Intro to Limits', topicSlug: 'limits-intro' },
          ],
        },
      ],
    })
    expect(result.success).toBe(true)
  })

  it('rejects missing classroomId', () => {
    const result = createCurriculumSchema.safeParse({
      title: 'Orphan curriculum',
    })
    expect(result.success).toBe(false)
  })

  it('rejects empty title', () => {
    const result = createCurriculumSchema.safeParse({
      classroomId: 'class-1',
      title: '',
    })
    expect(result.success).toBe(false)
  })
})
