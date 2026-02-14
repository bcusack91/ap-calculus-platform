export const psychMotivationPart6Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motiv6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Applying motivation theories to scenarios

Applying motivation theories to scenarios

### 2. Analyzing intrinsic vs extrinsic motivation

Analyzing intrinsic vs extrinsic motivation

### 3. Evaluating hunger regulation mechanisms

Evaluating hunger regulation mechanisms

### 4. Designing motivation interventions

Designing motivation interventions
      `
    },
    {
      id: 'motiv6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Applying motivation theories to scenarios',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Applying motivation theories to scenarios'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Evaluating hunger regulation mechanisms',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating hunger regulation mechanisms'
          }
        ]
      }
    },
    {
      id: 'motiv6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Applying motivation theories to scenarios**
- **Analyzing intrinsic vs extrinsic motivation**
- **Evaluating hunger regulation mechanisms**
- **Designing motivation interventions**
      `
    },
    {
      id: 'motiv6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Designing motivation interventions',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Designing motivation interventions'
          }
        ]
      }
    },
    {
      id: 'motiv6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Applying motivation theories to scenarios',
            options: ['Applying motivation theories to scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing intrinsic vs extrinsic motivation',
            options: ['Analyzing intrinsic vs extrinsic motivation', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evaluating hunger regulation mechanisms',
            options: ['Evaluating hunger regulation mechanisms', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Applying motivation theories to scenarios', 'Analyzing intrinsic vs extrinsic motivation', 'Evaluating hunger regulation mechanisms'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
