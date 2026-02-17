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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Algorithms?',
            options: [
              'sudden realization of a solution',
              'inability to see a problem from a new perspective',
              'step-by-step procedures (guaranteed solution)',
              'mental shortcuts (faster but error-prone)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Algorithms: step-by-step procedures (guaranteed solution). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Strategies, which explains Insight?',
            options: [
              'inability to see a problem from a new perspective',
              'sudden realization of a solution',
              'mental shortcuts (faster but error-prone)',
              'step-by-step procedures (guaranteed solution)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Insight: sudden realization of a solution. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Algorithms',
            options: ['inability to see a problem from a new perspective', 'step-by-step procedures (guaranteed solution)', 'mental shortcuts (faster but error-prone)', 'sudden realization of a solution']
          },
          {
            label: 'Heuristics',
            options: ['sudden realization of a solution', 'mental shortcuts (faster but error-prone)', 'step-by-step procedures (guaranteed solution)', 'inability to see a problem from a new perspective']
          },
          {
            label: 'Insight',
            options: ['inability to see a problem from a new perspective', 'sudden realization of a solution', 'step-by-step procedures (guaranteed solution)', 'mental shortcuts (faster but error-prone)']
          }
        ],
        correctAnswers: ['step-by-step procedures (guaranteed solution)', 'mental shortcuts (faster but error-prone)', 'sudden realization of a solution'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Strategies.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Strategies describes a specific idea. Algorithms: step-by-step procedures (guaranteed solution). Heuristics: mental shortcuts (faster but error-prone). Insight: sudden realization of a solution.'
      }
    }
  ]
}
