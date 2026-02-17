export const psychGroupPart6Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Analyzing intergroup conflict scenarios

Analyzing intergroup conflict scenarios

### 2. Evaluating prejudice reduction strategies

Evaluating prejudice reduction strategies

### 3. Identifying cultural influences on behavior

Identifying cultural influences on behavior

### 4. Applying social identity concepts

Applying social identity concepts
      `
    },
    {
      id: 'group6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Analyzing intergroup conflict scenarios?',
            options: [
              'Evaluating prejudice reduction strategies',
              'Applying social identity concepts',
              'Analyzing intergroup conflict scenarios',
              'Identifying cultural influences on behavior'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Analyzing intergroup conflict scenarios. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Identifying cultural influences on…?',
            options: [
              'Applying social identity concepts',
              'Analyzing intergroup conflict scenarios',
              'Identifying cultural influences on behavior',
              'Evaluating prejudice reduction strategies'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Identifying cultural influences on behavior. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'group6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Analyzing intergroup conflict scenarios**
- **Evaluating prejudice reduction strategies**
- **Identifying cultural influences on behavior**
- **Applying social identity concepts**
      `
    },
    {
      id: 'group6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Applying social identity concepts',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Applying social identity concepts'
          }
        ]
      }
    },
    {
      id: 'group6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing intergroup conflict scenarios',
            options: ['Evaluating prejudice reduction strategies', 'Analyzing intergroup conflict scenarios', 'Applying social identity concepts', 'Identifying cultural influences on behavior']
          },
          {
            label: 'Evaluating prejudice reduction…',
            options: ['Evaluating prejudice reduction strategies', 'Analyzing intergroup conflict scenarios', 'Applying social identity concepts', 'Identifying cultural influences on behavior']
          },
          {
            label: 'Identifying cultural influences on…',
            options: ['Analyzing intergroup conflict scenarios', 'Identifying cultural influences on behavior', 'Evaluating prejudice reduction strategies', 'Applying social identity concepts']
          }
        ],
        correctAnswers: ['Analyzing intergroup conflict scenarios', 'Evaluating prejudice reduction strategies', 'Identifying cultural influences on behavior'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Analyzing intergroup conflict scenarios. Evaluating prejudice reduction strategies. Identifying cultural influences on behavior.'
      }
    }
  ]
}
