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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Matching therapy types to disorders',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Matching therapy types to disorders'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Evaluating treatment effectiveness',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating treatment effectiveness'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Matching therapy types to disorders',
            options: ['Matching therapy types to disorders', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Identifying therapeutic techniques in scenarios',
            options: ['Identifying therapeutic techniques in scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evaluating treatment effectiveness',
            options: ['Evaluating treatment effectiveness', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Matching therapy types to disorders', 'Identifying therapeutic techniques in scenarios', 'Evaluating treatment effectiveness'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
