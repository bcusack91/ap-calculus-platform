export const psychPrenatalPart6Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prena6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying Piaget's stages from child behavior

Identifying Piaget's stages from child behavior

### 2. Classifying attachment styles

Classifying attachment styles

### 3. Analyzing parenting scenarios

Analyzing parenting scenarios

### 4. Evaluating developmental milestones

Evaluating developmental milestones
      `
    },
    {
      id: 'prena6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Identifying Piaget\'s stages from child behavior',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Identifying Piaget\'s stages from child behavior'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Analyzing parenting scenarios',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing parenting scenarios'
          }
        ]
      }
    },
    {
      id: 'prena6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identifying Piaget's stages from child behavior**
- **Classifying attachment styles**
- **Analyzing parenting scenarios**
- **Evaluating developmental milestones**
      `
    },
    {
      id: 'prena6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Evaluating developmental milestones',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating developmental milestones'
          }
        ]
      }
    },
    {
      id: 'prena6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying Piaget\'s stages from child behavior',
            options: ['Identifying Piaget\'s stages from child behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Classifying attachment styles',
            options: ['Classifying attachment styles', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing parenting scenarios',
            options: ['Analyzing parenting scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Identifying Piaget\'s stages from child behavior', 'Classifying attachment styles', 'Analyzing parenting scenarios'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
