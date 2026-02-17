export const psychTreatmentPart6Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treat6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Matching therapy types to disorders

Matching therapy types to disorders

### 2. Identifying therapeutic techniques in scenarios

Identifying therapeutic techniques in scenarios

### 3. Evaluating treatment effectiveness

Evaluating treatment effectiveness

### 4. Comparing biomedical and psychological approaches

Comparing biomedical and psychological approaches
      `
    },
    {
      id: 'treat6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Matching therapy types to disorders" refer to in psychology?',
            options: [
              'Matching therapy types to disorders',
              'Identifying therapeutic techniques in scenarios',
              'Comparing biomedical and psychological approaches',
              'Evaluating treatment effectiveness'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Matching therapy types to disorders. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Evaluating treatment effectiveness?',
            options: [
              'Matching therapy types to disorders',
              'Identifying therapeutic techniques in scenarios',
              'Comparing biomedical and psychological approaches',
              'Evaluating treatment effectiveness'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Evaluating treatment effectiveness. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'treat6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Matching therapy types to disorders**
- **Identifying therapeutic techniques in scenarios**
- **Evaluating treatment effectiveness**
- **Comparing biomedical and psychological approaches**
      `
    },
    {
      id: 'treat6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Comparing biomedical and psychological approaches',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Comparing biomedical and psychological approaches'
          }
        ]
      }
    },
    {
      id: 'treat6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Matching therapy types to disorders',
            options: ['Evaluating treatment effectiveness', 'Matching therapy types to disorders', 'Comparing biomedical and psychological approaches', 'Identifying therapeutic techniques in scenarios']
          },
          {
            label: 'Identifying therapeutic techniques in…',
            options: ['Comparing biomedical and psychological approaches', 'Identifying therapeutic techniques in scenarios', 'Evaluating treatment effectiveness', 'Matching therapy types to disorders']
          },
          {
            label: 'Evaluating treatment effectiveness',
            options: ['Identifying therapeutic techniques in scenarios', 'Evaluating treatment effectiveness', 'Comparing biomedical and psychological approaches', 'Matching therapy types to disorders']
          }
        ],
        correctAnswers: ['Matching therapy types to disorders', 'Identifying therapeutic techniques in scenarios', 'Evaluating treatment effectiveness'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Matching therapy types to disorders. Identifying therapeutic techniques in scenarios. Evaluating treatment effectiveness.'
      }
    }
  ]
}
