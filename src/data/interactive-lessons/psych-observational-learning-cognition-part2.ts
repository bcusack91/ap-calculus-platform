export const psychObservationalPart2Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser2-intro',
      type: 'text' as const,
      content: `
# ## Modeling Processes

**Part 2 of 7 — Modeling Processes**

### 1. Attention

must observe the model

### 2. Retention

must remember the behavior

### 3. Reproduction

must be able to perform the behavior

### 4. Motivation

must want to imitate (vicarious reinforcement)
      `
    },
    {
      id: 'obser2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of modeling processes?',
            options: [
              'Attention',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Attention: must observe the model'
          },
          {
            question: 'In the context of modeling processes, which is accurate?',
            options: [
              'must be able to perform the behavior',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Reproduction: must be able to perform the behavior'
          }
        ]
      }
    },
    {
      id: 'obser2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Attention**: must observe the model
- **Retention**: must remember the behavior
- **Reproduction**: must be able to perform the behavior
- **Motivation**: must want to imitate (vicarious reinforcement)
      `
    },
    {
      id: 'obser2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to modeling processes?',
            options: [
              'must want to imitate (vicarious reinforcement)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Motivation: must want to imitate (vicarious reinforcement)'
          }
        ]
      }
    },
    {
      id: 'obser2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Attention',
            options: ['must observe the model', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Retention',
            options: ['must remember the behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Reproduction',
            options: ['must be able to perform the behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['must observe the model', 'must remember the behavior', 'must be able to perform the behavior'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Modeling Processes.'
      }
    }
  ]
}
