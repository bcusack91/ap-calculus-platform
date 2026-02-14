export const psychRetrievalPart6Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retri6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying forgetting mechanisms

Identifying forgetting mechanisms

### 2. Analyzing misinformation scenarios

Analyzing misinformation scenarios

### 3. Evaluating eyewitness testimony reliability

Evaluating eyewitness testimony reliability

### 4. Designing memory improvement strategies

Designing memory improvement strategies
      `
    },
    {
      id: 'retri6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Identifying forgetting mechanisms',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Identifying forgetting mechanisms'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Evaluating eyewitness testimony reliability',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating eyewitness testimony reliability'
          }
        ]
      }
    },
    {
      id: 'retri6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identifying forgetting mechanisms**
- **Analyzing misinformation scenarios**
- **Evaluating eyewitness testimony reliability**
- **Designing memory improvement strategies**
      `
    },
    {
      id: 'retri6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Designing memory improvement strategies',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Designing memory improvement strategies'
          }
        ]
      }
    },
    {
      id: 'retri6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying forgetting mechanisms',
            options: ['Identifying forgetting mechanisms', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing misinformation scenarios',
            options: ['Analyzing misinformation scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evaluating eyewitness testimony reliability',
            options: ['Evaluating eyewitness testimony reliability', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Identifying forgetting mechanisms', 'Analyzing misinformation scenarios', 'Evaluating eyewitness testimony reliability'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
