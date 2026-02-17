export const mcatCarsReasonPart3Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Assumption Identification

**Part 3 of 7 — Assumption Identification**

An assumption is an unstated premise the argument relies on.

Necessary assumption: without it, the argument falls apart.
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in assumption identification?',
            options: [
              'An assumption is an unstated premise the argument relies on',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'An assumption is an unstated premise the argument relies on'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Sufficient assumption: with it, the conclusion definitely follows.

**MCAT Tip:** Test by negation: if negating the answer choice destroys the argument, it is a necessary assumption.
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to assumption identification?',
            options: [
              'Sufficient assumption: with it, the conclusion definitely follows',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Sufficient assumption: with it, the conclusion definitely follows'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Necessary assumption',
            options: ['Sufficient assumption: with it, the conclusion definitely follows.', 'without it, the argument falls apart.', 'An assumption is an unstated premise the argument relies on.', 'Test by negation: if negating the answer choice destroys the argument, it is a necessary assumption.']
          },
          {
            label: 'Key Insight',
            options: ['Sufficient assumption: with it, the conclusion definitely follows.', 'Test by negation: if negating the answer choice destroys the argument, it is a necessary assumption.', 'without it, the argument falls apart.', 'An assumption is an unstated premise the argument relies on.']
          },
          {
            label: 'MCAT Tip',
            options: ['Test by negation: if negating the answer choice destroys the argument, it is a necessary assumption.', 'without it, the argument falls apart.', 'Sufficient assumption: with it, the conclusion definitely follows.', 'An assumption is an unstated premise the argument relies on.']
          }
        ],
        correctAnswers: ['without it, the argument falls apart.', 'Sufficient assumption: with it, the conclusion definitely follows.', 'Test by negation: if negating the answer choice destroys the argument, it is a necessary assumption.'],
        hint1: 'Think about what each concept specifically describes in Assumption Identification.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Assumption Identification describes a specific idea. Necessary assumption: without it, the argument falls apart. Key Insight: Sufficient assumption: with it, the conclusion definitely follows. MCAT Tip: Test by negation: if negating the answer choice destroys the argument, it is a necessary assumption.'
      }
    }
  ]
}
