// @vitest-environment jsdom
/**
 * A teacher reading a student's AP practice-exam free response (Tests to
 * review → /review/ap-practice/<id>?class=&student=): the list names the
 * student instead of "you", shows what they wrote and each rubric point.
 */
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FrqReviewList from '@/components/FrqReview'

const item = {
  s: 1, i: 0, section: 'Section II', number: 1, type: 'saq' as const, title: 'Buffer capacity', prompt: 'A buffer is prepared…',
  parts: [{ label: 'a', question: 'Explain the pH change.', response: 'The conjugate base absorbs H+.', rubric: [
    { id: 'r1', label: '1 point', description: 'Identifies the conjugate base.', earned: true },
    { id: 'r2', label: '1 point', description: 'Relates to Ka.', earned: false },
  ] }],
  earned: 1, possible: 2, selfScored: true,
}

describe('FrqReviewList in teacher view', () => {
  it('labels the response as the student’s and shows every rubric point', () => {
    render(<FrqReviewList items={[item]} studentName="Ava" />)
    expect(screen.getByText("Ava's response")).toBeInTheDocument()
    expect(screen.getByText('The conjugate base absorbs H+.')).toBeInTheDocument()
    expect(screen.getByText(/Ava's own rubric checks/)).toBeInTheDocument()
    expect(screen.getByText('Earned')).toBeInTheDocument()
    expect(screen.getByText('Not earned')).toBeInTheDocument()
    expect(screen.getByText('1 / 2 points')).toBeInTheDocument()
  })
})
