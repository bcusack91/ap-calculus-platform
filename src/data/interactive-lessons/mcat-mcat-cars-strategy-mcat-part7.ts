export const mcatCarsStratPart7Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Foundation: answer is directly stated in the passage.

Reasoning Beyond the Text: apply passage ideas to new situations.
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
            options: [
              'Foundation: answer is directly stated in the passage',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Foundation: answer is directly stated in the passage'
          }
        ]
      }
    },
    {
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Reasoning Within the Text: evaluate the logic and structure of the argument.

**MCAT Tip:** Common traps: extreme language, out of scope, opposite of the authors view, partially correct.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to review & mcat practice?',
            options: [
              'Reasoning Within the Text: evaluate the logic and structure of the argument',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Reasoning Within the Text: evaluate the logic and structure of the argument'
          }
        ]
      }
    },
    {
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Review & MCAT Practice:',
            options: ['Foundation: answer is directly stated in the passage', 'Reasoning Beyond the Text: apply passage ideas to new situat', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Reasoning Within the Text: evaluate the logic and structure ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Foundation: answer is directly stated in the passage', 'Reasoning Within the Text: evaluate the logic and structure '],
        hint1: 'Think about review & mcat practice',
        hint2: 'Consider the MCAT application',
        explanation: 'Foundation: answer is directly stated in the passage. Reasoning Within the Text: evaluate the logic and structure of the argument.'
      }
    }
  ]
}
