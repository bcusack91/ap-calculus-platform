export const psychPerceptionPart6Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying Gestalt principles in images

Identifying Gestalt principles in images

### 2. Analyzing depth cue scenarios

Analyzing depth cue scenarios

### 3. Explaining visual illusions

Explaining visual illusions

### 4. Demonstrating selective attention phenomena

Demonstrating selective attention phenomena
      `
    },
    {
      id: 'perce6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Identifying Gestalt principles in images',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Identifying Gestalt principles in images'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Explaining visual illusions',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Explaining visual illusions'
          }
        ]
      }
    },
    {
      id: 'perce6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identifying Gestalt principles in images**
- **Analyzing depth cue scenarios**
- **Explaining visual illusions**
- **Demonstrating selective attention phenomena**
      `
    },
    {
      id: 'perce6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Demonstrating selective attention phenomena',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Demonstrating selective attention phenomena'
          }
        ]
      }
    },
    {
      id: 'perce6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying Gestalt principles in images',
            options: ['Identifying Gestalt principles in images', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing depth cue scenarios',
            options: ['Analyzing depth cue scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Explaining visual illusions',
            options: ['Explaining visual illusions', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Identifying Gestalt principles in images', 'Analyzing depth cue scenarios', 'Explaining visual illusions'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
