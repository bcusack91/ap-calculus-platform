import { describe, expect, it } from 'vitest'
import { apUnitLabel, withApPracticeExtras } from '@/lib/question-sources/ap-practice'
import type { ReviewItem } from '@/lib/question-sources/types'

const authored = {
  type: 'mcq',
  question: 'Which gas effuses fastest at the same temperature?',
  options: ['He', 'Ne', 'Ar', 'Kr'],
  optionExplanations: ['Lightest, so fastest.', 'Heavier than He.', 'Heavier still.', 'Heaviest of the four.'],
}

const reviewItem = (over: Partial<ReviewItem> = {}): ReviewItem => ({
  index: 0,
  questionKey: 'q:x',
  question: 'Which gas effuses  fastest at the same temperature?',
  options: ['Ar', 'He', 'Kr', 'Ne'],
  correctIndex: 1,
  explanation: 'Graham’s law.',
  passage: null,
  chosenIndex: 0,
  flagged: false,
  discipline: 'unit-3-intermolecular-forces',
  ...over,
})

describe('AP practice review extras', () => {
  it('labels CED unit domains for the Report tab', () => {
    expect(apUnitLabel('unit-3-intermolecular-forces')).toBe('Unit 3: Intermolecular Forces')
    expect(apUnitLabel('unit-9-applications-of-thermodynamics')).toBe('Unit 9: Applications of Thermodynamics')
    expect(apUnitLabel('Kinetics')).toBe('Kinetics')
  })

  it('re-aligns authored option explanations to the order the student saw', () => {
    const [item] = withApPracticeExtras([reviewItem()], [{ items: [authored] }])
    expect(item!.discipline).toBe('Unit 3: Intermolecular Forces')
    expect(item!.optionExplanations).toEqual(['Heavier still.', 'Lightest, so fastest.', 'Heaviest of the four.', 'Heavier than He.'])
  })

  it('adds none when the form no longer has the question or its options changed', () => {
    const [gone] = withApPracticeExtras([reviewItem({ question: 'Something else?' })], [{ items: [authored] }])
    expect(gone!.optionExplanations).toBeUndefined()
    const [changed] = withApPracticeExtras([reviewItem({ options: ['Ar', 'He', 'Kr', 'Xe'] })], [{ items: [authored] }])
    expect(changed!.optionExplanations).toBeUndefined()
    const [noForm] = withApPracticeExtras([reviewItem()], null)
    expect(noForm!.optionExplanations).toBeUndefined()
    expect(withApPracticeExtras([null], [{ items: [authored] }])).toEqual([null])
  })
})
