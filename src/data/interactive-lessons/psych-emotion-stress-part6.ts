export const psychEmotionPart6Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emoti6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Comparing emotion theories using scenarios

Comparing emotion theories using scenarios

### 2. Identifying stress responses

Identifying stress responses

### 3. Evaluating coping strategies

Evaluating coping strategies

### 4. Analyzing stress and health connections

Analyzing stress and health connections
      `
    },
    {
      id: 'emoti6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Comparing emotion theories using scenarios',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Comparing emotion theories using scenarios'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Evaluating coping strategies',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating coping strategies'
          }
        ]
      }
    },
    {
      id: 'emoti6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Comparing emotion theories using scenarios**
- **Identifying stress responses**
- **Evaluating coping strategies**
- **Analyzing stress and health connections**
      `
    },
    {
      id: 'emoti6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Analyzing stress and health connections',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing stress and health connections'
          }
        ]
      }
    },
    {
      id: 'emoti6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Comparing emotion theories using scenarios',
            options: ['Comparing emotion theories using scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Identifying stress responses',
            options: ['Identifying stress responses', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evaluating coping strategies',
            options: ['Evaluating coping strategies', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Comparing emotion theories using scenarios', 'Identifying stress responses', 'Evaluating coping strategies'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
