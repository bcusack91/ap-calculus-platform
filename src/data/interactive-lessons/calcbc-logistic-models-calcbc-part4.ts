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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Phase line" refer to in calculus?',
            options: [
              'dP/dt < 0 (population decreasing toward L)',
              'dP/dt > 0 (population increasing)',
              'one-dimensional diagram showing direction of change',
              'P = 0 (unstable) and P = L (stable)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Phase line: one-dimensional diagram showing direction of change. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes If P < L:',
            options: [
              'dP/dt > 0 (population increasing)',
              'P = 0 (unstable) and P = L (stable)',
              'one-dimensional diagram showing direction of change',
              'dP/dt < 0 (population decreasing toward L)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — If P < L: dP/dt > 0 (population increasing). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Phase Lines & Equilibria, which correctly describes If P > L?',
            options: [
              'one-dimensional diagram showing direction of change',
              'dP/dt > 0 (population increasing)',
              'dP/dt < 0 (population decreasing toward L)',
              'P = 0 (unstable) and P = L (stable)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If P > L: dP/dt < 0 (population decreasing toward L). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'logis4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phase line',
            options: ['one-dimensional diagram showing direction of change', 'dP/dt > 0 (population increasing)', 'P = 0 (unstable) and P = L (stable)', 'dP/dt < 0 (population decreasing toward L)']
          },
          {
            label: 'Equilibria',
            options: ['dP/dt > 0 (population increasing)', 'P = 0 (unstable) and P = L (stable)', 'dP/dt < 0 (population decreasing toward L)', 'one-dimensional diagram showing direction of change']
          },
          {
            label: 'If P < L',
            options: ['one-dimensional diagram showing direction of change', 'dP/dt > 0 (population increasing)', 'P = 0 (unstable) and P = L (stable)', 'dP/dt < 0 (population decreasing toward L)']
          }
        ],
        correctAnswers: ['one-dimensional diagram showing direction of change', 'P = 0 (unstable) and P = L (stable)', 'dP/dt > 0 (population increasing)'],
        hint1: 'Think about what each concept specifically describes in Phase Lines & Equilibria.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Phase Lines & Equilibria describes a specific idea. Phase line: one-dimensional diagram showing direction of change. Equilibria: P = 0 (unstable) and P = L (stable). If P < L: dP/dt > 0 (population increasing).'
      }
    }
  ]
}
