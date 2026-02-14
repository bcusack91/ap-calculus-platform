export const psychObservationalPart6Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Applying learning theories to real scenarios

Applying learning theories to real scenarios

### 2. Comparing classical, operant, and observational learning

Comparing classical, operant, and observational learning

### 3. Analyzing Bandura's research

Analyzing Bandura's research

### 4. Predicting learning outcomes

Predicting learning outcomes
      `
    },
    {
      id: 'obser6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Applying learning theories to real scenarios',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Applying learning theories to real scenarios'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Analyzing Bandura\'s research',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing Bandura\'s research'
          }
        ]
      }
    },
    {
      id: 'obser6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Applying learning theories to real scenarios**
- **Comparing classical, operant, and observational learning**
- **Analyzing Bandura's research**
- **Predicting learning outcomes**
      `
    },
    {
      id: 'obser6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Predicting learning outcomes',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting learning outcomes'
          }
        ]
      }
    },
    {
      id: 'obser6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Applying learning theories to real scenarios',
            options: ['Applying learning theories to real scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Comparing classical, operant, and observational learning',
            options: ['Comparing classical, operant, and observational le', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing Bandura\'s research',
            options: ['Analyzing Bandura\'s research', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Applying learning theories to real scenarios', 'Comparing classical, operant, and observational le', 'Analyzing Bandura\'s research'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
