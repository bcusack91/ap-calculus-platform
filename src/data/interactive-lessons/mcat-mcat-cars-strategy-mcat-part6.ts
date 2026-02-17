export const mcatCarsStratPart6Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Question Types & Traps

**Part 6 of 7 — Question Types & Traps**

Foundation: answer is directly stated in the passage.

Reasoning Beyond the Text: apply passage ideas to new situations.
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in question types & traps?',
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
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Reasoning Within the Text: evaluate the logic and structure of the argument.

**MCAT Tip:** Common traps: extreme language, out of scope, opposite of the authors view, partially correct.
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to question types & traps?',
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
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Foundation',
            options: ['answer is directly stated in the passage.', 'apply passage ideas to new situations.', 'Common traps: extreme language, out of scope, opposite of the authors view, partially correct.', 'Reasoning Within the Text: evaluate the logic and structure of the argument.']
          },
          {
            label: 'Reasoning Beyond the Text',
            options: ['answer is directly stated in the passage.', 'Common traps: extreme language, out of scope, opposite of the authors view, partially correct.', 'apply passage ideas to new situations.', 'Reasoning Within the Text: evaluate the logic and structure of the argument.']
          },
          {
            label: 'Key Insight',
            options: ['apply passage ideas to new situations.', 'Common traps: extreme language, out of scope, opposite of the authors view, partially correct.', 'Reasoning Within the Text: evaluate the logic and structure of the argument.', 'answer is directly stated in the passage.']
          }
        ],
        correctAnswers: ['answer is directly stated in the passage.', 'apply passage ideas to new situations.', 'Reasoning Within the Text: evaluate the logic and structure of the argument.'],
        hint1: 'Think about what each concept specifically describes in Question Types & Traps.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Question Types & Traps describes a specific idea. Foundation: answer is directly stated in the passage. Reasoning Beyond the Text: apply passage ideas to new situations. Key Insight: Reasoning Within the Text: evaluate the logic and structure of the argument.'
      }
    }
  ]
}
