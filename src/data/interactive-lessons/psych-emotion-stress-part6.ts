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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Comparing emotion theories using…?',
            options: [
              'Evaluating coping strategies',
              'Comparing emotion theories using scenarios',
              'Identifying stress responses',
              'Analyzing stress and health connections'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Comparing emotion theories using scenarios. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Evaluating coping strategies?',
            options: [
              'Analyzing stress and health connections',
              'Comparing emotion theories using scenarios',
              'Identifying stress responses',
              'Evaluating coping strategies'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Evaluating coping strategies. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Comparing emotion theories using…',
            options: ['Identifying stress responses', 'Comparing emotion theories using scenarios', 'Evaluating coping strategies', 'Analyzing stress and health connections']
          },
          {
            label: 'Identifying stress responses',
            options: ['Identifying stress responses', 'Analyzing stress and health connections', 'Comparing emotion theories using scenarios', 'Evaluating coping strategies']
          },
          {
            label: 'Evaluating coping strategies',
            options: ['Identifying stress responses', 'Evaluating coping strategies', 'Analyzing stress and health connections', 'Comparing emotion theories using scenarios']
          }
        ],
        correctAnswers: ['Comparing emotion theories using scenarios', 'Identifying stress responses', 'Evaluating coping strategies'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Comparing emotion theories using scenarios. Identifying stress responses. Evaluating coping strategies.'
      }
    }
  ]
}
