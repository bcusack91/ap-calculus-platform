export const psychAdolescencePart6Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adole6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Applying Kohlberg's stages to moral dilemmas

Applying Kohlberg's stages to moral dilemmas

### 2. Identifying Erikson's stages throughout lifespan

Identifying Erikson's stages throughout lifespan

### 3. Analyzing adolescent behavior through developmental lens

Analyzing adolescent behavior through developmental lens

### 4. Evaluating aging stereotypes

Evaluating aging stereotypes
      `
    },
    {
      id: 'adole6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Applying Kohlberg\'s stages to moral dilemmas',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Applying Kohlberg\'s stages to moral dilemmas'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Analyzing adolescent behavior through developmental lens',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing adolescent behavior through developmental lens'
          }
        ]
      }
    },
    {
      id: 'adole6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Applying Kohlberg's stages to moral dilemmas**
- **Identifying Erikson's stages throughout lifespan**
- **Analyzing adolescent behavior through developmental lens**
- **Evaluating aging stereotypes**
      `
    },
    {
      id: 'adole6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Evaluating aging stereotypes',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating aging stereotypes'
          }
        ]
      }
    },
    {
      id: 'adole6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Applying Kohlberg\'s stages to moral dilemmas',
            options: ['Applying Kohlberg\'s stages to moral dilemmas', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Identifying Erikson\'s stages throughout lifespan',
            options: ['Identifying Erikson\'s stages throughout lifespan', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing adolescent behavior through developmental lens',
            options: ['Analyzing adolescent behavior through developmenta', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Applying Kohlberg\'s stages to moral dilemmas', 'Identifying Erikson\'s stages throughout lifespan', 'Analyzing adolescent behavior through developmenta'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
