export const psychThinkingPart2Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think2-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Strategies

**Part 2 of 7 — Problem-Solving Strategies**

### 1. Algorithms

step-by-step procedures (guaranteed solution)

### 2. Heuristics

mental shortcuts (faster but error-prone)

### 3. Insight

sudden realization of a solution

### 4. Fixation

inability to see a problem from a new perspective
      `
    },
    {
      id: 'think2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving strategies?',
            options: [
              'Algorithms',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Algorithms: step-by-step procedures (guaranteed solution)'
          },
          {
            question: 'In the context of problem-solving strategies, which is accurate?',
            options: [
              'sudden realization of a solution',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Insight: sudden realization of a solution'
          }
        ]
      }
    },
    {
      id: 'think2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Algorithms**: step-by-step procedures (guaranteed solution)
- **Heuristics**: mental shortcuts (faster but error-prone)
- **Insight**: sudden realization of a solution
- **Fixation**: inability to see a problem from a new perspective
      `
    },
    {
      id: 'think2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving strategies?',
            options: [
              'inability to see a problem from a new perspective',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Fixation: inability to see a problem from a new perspective'
          }
        ]
      }
    },
    {
      id: 'think2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Algorithms',
            options: ['step-by-step procedures (guaranteed solution)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Heuristics',
            options: ['mental shortcuts (faster but error-prone)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Insight',
            options: ['sudden realization of a solution', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['step-by-step procedures (guaranteed solution)', 'mental shortcuts (faster but error-prone)', 'sudden realization of a solution'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Strategies.'
      }
    }
  ]
}
