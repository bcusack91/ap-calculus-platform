import { describe, it, expect } from 'vitest'
import { orderCourseTopics, neighborsIn, type SequenceRow } from '@/lib/topic-sequence'

const t0 = new Date('2026-01-01T00:00:00Z')
const row = (p: Partial<SequenceRow> & { slug: string }): SequenceRow => ({
  id: p.slug,
  title: p.slug,
  order: 0,
  createdAt: t0,
  parentTopicId: null,
  categoryId: 'cat',
  categoryOrder: 1,
  categoryName: 'Category',
  ...p,
})

describe('orderCourseTopics', () => {
  it('walks categories by order, topics by order, and subtopics right after their parent', () => {
    const rows = [
      row({ slug: 'bio-cells', categoryId: 'bio', categoryOrder: 3, categoryName: 'Bio', order: 1 }),
      row({ slug: 'optics', id: 'optics', categoryId: 'cp', categoryOrder: 1, categoryName: 'C/P', order: 8, parentTopicId: 'electricity' }),
      row({ slug: 'electricity', id: 'electricity', categoryId: 'cp', categoryOrder: 1, categoryName: 'C/P', order: 4 }),
      row({ slug: 'circuits-1', categoryId: 'cp', categoryOrder: 1, categoryName: 'C/P', order: 2, parentTopicId: 'electricity' }),
      row({ slug: 'circuits-2', categoryId: 'cp', categoryOrder: 1, categoryName: 'C/P', order: 3, parentTopicId: 'electricity' }),
      row({ slug: 'kinematics', categoryId: 'cp', categoryOrder: 1, categoryName: 'C/P', order: 1, parentTopicId: 'mechanics' }),
      row({ slug: 'mechanics', id: 'mechanics', categoryId: 'cp', categoryOrder: 1, categoryName: 'C/P', order: 3 }),
      row({ slug: 'cars', categoryId: 'cars', categoryOrder: 2, categoryName: 'CARS', order: 1 }),
    ]
    expect(orderCourseTopics(rows).map((t) => t.slug)).toEqual([
      'mechanics',
      'kinematics',
      'electricity',
      'circuits-1',
      'circuits-2',
      'optics',
      'cars',
      'bio-cells',
    ])
  })

  it('breaks order ties on createdAt then title, and treats an orphaned subtopic as top-level', () => {
    const rows = [
      row({ slug: 'b-later', order: 1, createdAt: new Date('2026-02-01T00:00:00Z') }),
      row({ slug: 'a-earlier', order: 1 }),
      row({ slug: 'z-same-time', order: 1 }),
      row({ slug: 'orphan', order: 0, parentTopicId: 'not-in-course' }),
    ]
    expect(orderCourseTopics(rows).map((t) => t.slug)).toEqual(['orphan', 'a-earlier', 'z-same-time', 'b-later'])
  })

  it('follows a fixed code layout when the course has one, skipping slugs the DB lacks', () => {
    const rows = [row({ slug: 'limits', order: 9 }), row({ slug: 'derivatives', order: 1 })]
    expect(orderCourseTopics(rows, ['limits', 'retired', 'derivatives']).map((t) => t.slug)).toEqual(['limits', 'derivatives'])
  })
})

describe('neighborsIn', () => {
  const seq = [
    { slug: 'circuits-1', title: 'Circuits Part 1' },
    { slug: 'circuits-2', title: 'Circuits Part 2' },
    { slug: 'circuits-3', title: 'Circuits Part 3' },
  ]
  it('returns the previous and next topics', () => {
    expect(neighborsIn(seq, 'circuits-2')).toEqual({ prev: seq[0], next: seq[2] })
    expect(neighborsIn(seq, 'circuits-1')).toEqual({ prev: null, next: seq[1] })
    expect(neighborsIn(seq, 'circuits-3')).toEqual({ prev: seq[1], next: null })
  })
  it('returns nothing for a topic outside the sequence', () => {
    expect(neighborsIn(seq, 'elsewhere')).toEqual({ prev: null, next: null })
  })
})
