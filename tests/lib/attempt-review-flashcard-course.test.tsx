// @vitest-environment jsdom
/**
 * AttemptReview hands "Make a flashcard" the API's DB course deck
 * (`flashcardCourseSlug`), so AP exit-quiz and practice-exam cards file into
 * their course instead of "No course". Test-prep reviews keep their decks.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve(), renderKatexSync: (s: string) => s }))
vi.mock('@/components/MakeFlashcardButton', () => ({
  default: (p: { courseSlug?: string }) => <span data-testid="make-card" data-course={p.courseSlug ?? 'NONE'} />,
}))

import AttemptReview, { type AttemptReviewData } from '@/components/AttemptReview'

afterEach(cleanup)

const base: AttemptReviewData = {
  kind: 'exit',
  id: 'e1',
  title: 'Exit quiz · Stoichiometry',
  course: 'other',
  takenAt: '2026-10-09T15:00:00.000Z',
  score: { correct: 0, total: 1 },
  backHref: '/topics/stoichiometry/interactive',
  items: [{
    index: 0, questionKey: 'q:1', question: 'Moles?', options: ['A', 'B'], correctIndex: 1,
    explanation: 'B.', passage: null, chosenIndex: 0, flagged: false, topicSlug: 'stoichiometry',
  }],
}

describe('AttemptReview flashcard deck', () => {
  it('uses the AP course deck the API resolved', () => {
    render(<AttemptReview attempt={{ ...base, flashcardCourseSlug: 'ap-chemistry' }} />)
    expect(screen.getByTestId('make-card')).toHaveAttribute('data-course', 'ap-chemistry')
  })

  it('falls back to the test-prep map when the API sent none', () => {
    render(<AttemptReview attempt={{ ...base, kind: 'sat-practice', course: 'sat' }} />)
    expect(screen.getByTestId('make-card')).toHaveAttribute('data-course', 'sat-prep')
  })
})
