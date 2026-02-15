export const calcBCLogisticPart4Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'logis4-intro',
      type: 'text' as const,
      content: `
# Phase Lines & Equilibria

**Part 4 of 7 — Phase Lines & Equilibria**

### 1. Phase line

one-dimensional diagram showing direction of change

### 2. Equilibria

P = 0 (unstable) and P = L (stable)

### 3. If P < L

dP/dt > 0 (population increasing)

### 4. If P > L

dP/dt < 0 (population decreasing toward L)
      `
    },
    {
      id: 'logis4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of phase lines & equilibria?',
            options: [
              'Phase line',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Phase line: one-dimensional diagram showing direction of change'
          },
          {
            question: 'In the context of phase lines & equilibria, which is accurate?',
            options: [
              'dP/dt > 0 (population increasing)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If P < L: dP/dt > 0 (population increasing)'
          }
        ]
      }
    },
    {
      id: 'logis4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Phase line**: one-dimensional diagram showing direction of change
- **Equilibria**: P = 0 (unstable) and P = L (stable)
- **If P < L**: dP/dt > 0 (population increasing)
- **If P > L**: dP/dt < 0 (population decreasing toward L)
      `
    },
    {
      id: 'logis4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to phase lines & equilibria?',
            options: [
              'dP/dt < 0 (population decreasing toward L)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'If P > L: dP/dt < 0 (population decreasing toward L)'
          }
        ]
      }
    },
    {
      id: 'logis4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phase line',
            options: ['one-dimensional diagram showing direction of chang', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Equilibria',
            options: ['P = 0 (unstable) and P = L (stable)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If P < L',
            options: ['dP/dt > 0 (population increasing)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['one-dimensional diagram showing direction of chang', 'P = 0 (unstable) and P = L (stable)', 'dP/dt > 0 (population increasing)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Phase Lines & Equilibria.'
      }
    }
  ]
}
