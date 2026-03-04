import { describe, it, expect } from 'vitest'
import {
  answerSubmissionSchema,
  queueJoinSchema,
  progressSaveSchema,
  flashcardReviewSchema,
  adminUserUpdateSchema,
  parseBody,
} from '@/lib/validations'

describe('answerSubmissionSchema', () => {
  it('accepts valid answer submission', () => {
    const result = answerSubmissionSchema.safeParse({
      questionIndex: 0,
      answerIndex: 2,
    })
    expect(result.success).toBe(true)
  })

  it('rejects negative questionIndex', () => {
    const result = answerSubmissionSchema.safeParse({
      questionIndex: -1,
      answerIndex: 0,
    })
    expect(result.success).toBe(false)
  })

  it('rejects missing answerIndex', () => {
    const result = answerSubmissionSchema.safeParse({
      questionIndex: 0,
    })
    expect(result.success).toBe(false)
  })
})

describe('queueJoinSchema', () => {
  it('accepts valid queue join', () => {
    const result = queueJoinSchema.safeParse({
      topicSlug: 'derivatives-intro',
      gameMode: 'SPEED_RACE',
    })
    expect(result.success).toBe(true)
  })

  it('rejects empty topicSlug', () => {
    const result = queueJoinSchema.safeParse({ topicSlug: '' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid gameMode', () => {
    const result = queueJoinSchema.safeParse({
      topicSlug: 'test',
      gameMode: 'INVALID',
    })
    expect(result.success).toBe(false)
  })
})

describe('progressSaveSchema', () => {
  it('accepts minimal progress save', () => {
    const result = progressSaveSchema.safeParse({})
    expect(result.success).toBe(true)
  })

  it('accepts full progress save', () => {
    const result = progressSaveSchema.safeParse({
      topicSlug: 'integrals',
      lessonPart: 3,
      completedSections: ['s1', 's2'],
      masteryLevel: 0.85,
      timeSpent: 120,
    })
    expect(result.success).toBe(true)
  })

  it('rejects masteryLevel > 1', () => {
    const result = progressSaveSchema.safeParse({ masteryLevel: 1.5 })
    expect(result.success).toBe(false)
  })

  it('rejects negative timeSpent', () => {
    const result = progressSaveSchema.safeParse({ timeSpent: -10 })
    expect(result.success).toBe(false)
  })
})

describe('flashcardReviewSchema', () => {
  it('accepts valid review', () => {
    const result = flashcardReviewSchema.safeParse({
      flashcardId: 'abc123',
      rating: 'good',
    })
    expect(result.success).toBe(true)
  })

  it('rejects invalid rating', () => {
    const result = flashcardReviewSchema.safeParse({
      flashcardId: 'abc123',
      rating: 'bad',
    })
    expect(result.success).toBe(false)
  })
})

describe('adminUserUpdateSchema', () => {
  it('accepts valid admin update', () => {
    const result = adminUserUpdateSchema.safeParse({
      userId: 'user1',
      role: 'TEACHER',
    })
    expect(result.success).toBe(true)
  })

  it('rejects invalid role', () => {
    const result = adminUserUpdateSchema.safeParse({
      userId: 'user1',
      role: 'SUPERADMIN',
    })
    expect(result.success).toBe(false)
  })
})

describe('parseBody', () => {
  it('returns success with parsed data', () => {
    const result = parseBody(flashcardReviewSchema, {
      flashcardId: 'test',
      rating: 'easy',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.flashcardId).toBe('test')
      expect(result.data.rating).toBe('easy')
    }
  })

  it('returns error string on invalid data', () => {
    const result = parseBody(flashcardReviewSchema, {
      flashcardId: '',
      rating: 'invalid',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toBeTruthy()
    }
  })
})
