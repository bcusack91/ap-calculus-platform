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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Assumption Identification:',
            options: ['An assumption is an unstated premise the argument relies on', 'Necessary assumption: without it, the argument falls apart', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Sufficient assumption: with it, the conclusion definitely fo', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['An assumption is an unstated premise the argument relies on', 'Sufficient assumption: with it, the conclusion definitely fo'],
        hint1: 'Think about assumption identification',
        hint2: 'Consider the MCAT application',
        explanation: 'An assumption is an unstated premise the argument relies on. Sufficient assumption: with it, the conclusion definitely follows.'
      }
    }
  ]
}
