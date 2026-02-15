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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes percent = (part/whole) × 100?',
            options: [
              'Percent = (part/whole) × 100 is a fundamental concept in SAT Math',
              'Percent change = ((new - old)/old) × 100',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Percent = (part/whole) × 100'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for percentages?',
            options: [
              'Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)...',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)...'
          }
        ]
      }
    },
    {
      id: 'sat-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Percentages:',
            options: ['Percent = (part/whole) × 100', 'Percent change = ((new - old)/old) × 100', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Successive percent changes: multiply the multiplie', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Percent = (part/whole) × 100', 'Successive percent changes: multiply the multiplie'],
        hint1: 'Think about percentages',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Percent = (part/whole) × 100. Successive percent changes: multiply the multipliers (1 + r₁)(1 + r₂)....'
      }
    }
  ]
}
