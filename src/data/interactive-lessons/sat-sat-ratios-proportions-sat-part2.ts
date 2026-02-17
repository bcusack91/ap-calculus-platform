export const satRatiosPart2Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-r2-intro',
      type: 'text' as const,
      content: `
# Percentages

**Part 2 of 7 — Percentages**

Percent = (part/whole) × 100.

Percent change = ((new - old)/old) × 100.
      `
    },
    {
      id: 'sat-r2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Percent = (part/whole) × 100.?',
            options: [
              'Common SAT trap: 20% increase then 20% decrease ≠ original (it is 96% of original).',
              'Percent = (part/whole) × 100.',
              'Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)....',
              'Percent change = ((new - old)/old) × 100.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Percent = (part/whole) × 100. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Percent change = ((new - old)/old) × 100.',
              'Common SAT trap: 20% increase then 20% decrease ≠ original (it is 96% of original).',
              'Percent = (part/whole) × 100.',
              'Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)....'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂).... Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)....

**SAT Tip:** Common SAT trap: 20% increase then 20% decrease ≠ original (it is 96% of original).
      `
    },
    {
      id: 'sat-r2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Percent change = ((new - old)/old) × 100.',
              'Common SAT trap: 20% increase then 20% decrease ≠ original (it is 96% of original).',
              'Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)....',
              'Percent = (part/whole) × 100.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Common SAT trap: 20% increase then 20% decrease ≠ original (it is 96% of original). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)....', 'Percent = (part/whole) × 100.', 'Percent change = ((new - old)/old) × 100.', 'Common SAT trap: 20% increase then 20% decrease ≠ original (it is 96% of original).']
          },
          {
            label: 'SAT Tip',
            options: ['Common SAT trap: 20% increase then 20% decrease ≠ original (it is 96% of original).', 'Percent = (part/whole) × 100.', 'Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)....', 'Percent change = ((new - old)/old) × 100.']
          }
        ],
        correctAnswers: ['Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)....', 'Common SAT trap: 20% increase then 20% decrease ≠ original (it is 96% of original).'],
        hint1: 'Think about what each concept specifically describes in Percentages.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Percentages describes a specific idea. Key Insight: Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂).... SAT Tip: Common SAT trap: 20% increase then 20% decrease ≠ original (it is 96% of original).'
      }
    }
  ]
}
