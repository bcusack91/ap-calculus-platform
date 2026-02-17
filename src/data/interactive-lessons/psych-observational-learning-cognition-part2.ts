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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Attention?',
            options: [
              'must be able to perform the behavior',
              'must want to imitate (vicarious reinforcement)',
              'must remember the behavior',
              'must observe the model'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Attention: must observe the model. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Reproduction:',
            options: [
              'must remember the behavior',
              'must observe the model',
              'must be able to perform the behavior',
              'must want to imitate (vicarious reinforcement)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Reproduction: must be able to perform the behavior. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Attention',
            options: ['must remember the behavior', 'must be able to perform the behavior', 'must want to imitate (vicarious reinforcement)', 'must observe the model']
          },
          {
            label: 'Retention',
            options: ['must want to imitate (vicarious reinforcement)', 'must remember the behavior', 'must be able to perform the behavior', 'must observe the model']
          },
          {
            label: 'Reproduction',
            options: ['must be able to perform the behavior', 'must remember the behavior', 'must want to imitate (vicarious reinforcement)', 'must observe the model']
          }
        ],
        correctAnswers: ['must observe the model', 'must remember the behavior', 'must be able to perform the behavior'],
        hint1: 'Think about what each concept specifically describes in Modeling Processes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Modeling Processes describes a specific idea. Attention: must observe the model. Retention: must remember the behavior. Reproduction: must be able to perform the behavior.'
      }
    }
  ]
}
