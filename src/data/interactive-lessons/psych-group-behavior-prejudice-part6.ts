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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Analyzing intergroup conflict scenarios',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing intergroup conflict scenarios'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Identifying cultural influences on behavior',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Identifying cultural influences on behavior'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing intergroup conflict scenarios',
            options: ['Analyzing intergroup conflict scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evaluating prejudice reduction strategies',
            options: ['Evaluating prejudice reduction strategies', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Identifying cultural influences on behavior',
            options: ['Identifying cultural influences on behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Analyzing intergroup conflict scenarios', 'Evaluating prejudice reduction strategies', 'Identifying cultural influences on behavior'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
