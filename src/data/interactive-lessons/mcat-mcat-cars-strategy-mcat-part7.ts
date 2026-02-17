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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Foundation',
            options: ['apply passage ideas to new situations.', 'answer is directly stated in the passage.', 'Reasoning Within the Text: evaluate the logic and structure of the argument.', 'Common traps: extreme language, out of scope, opposite of the authors view, partially correct.']
          },
          {
            label: 'Reasoning Beyond the Text',
            options: ['apply passage ideas to new situations.', 'Reasoning Within the Text: evaluate the logic and structure of the argument.', 'Common traps: extreme language, out of scope, opposite of the authors view, partially correct.', 'answer is directly stated in the passage.']
          },
          {
            label: 'Key Insight',
            options: ['Reasoning Within the Text: evaluate the logic and structure of the argument.', 'apply passage ideas to new situations.', 'answer is directly stated in the passage.', 'Common traps: extreme language, out of scope, opposite of the authors view, partially correct.']
          }
        ],
        correctAnswers: ['answer is directly stated in the passage.', 'apply passage ideas to new situations.', 'Reasoning Within the Text: evaluate the logic and structure of the argument.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Foundation: answer is directly stated in the passage. Reasoning Beyond the Text: apply passage ideas to new situations. Key Insight: Reasoning Within the Text: evaluate the logic and structure of the argument.'
      }
    }
  ]
}
