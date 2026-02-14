export const psychPerceptionPart7Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Perception is an active, constructive process

Perception is an active, constructive process

### 2. Experience shapes how we perceive

Experience shapes how we perceive

### 3. Attention is limited and selective

Attention is limited and selective

### 4. AP exam

perception applications
      `
    },
    {
      id: 'perce7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Perception is an active, constructive process',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Perception is an active, constructive process'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Attention is limited and selective',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Attention is limited and selective'
          }
        ]
      }
    },
    {
      id: 'perce7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Perception is an active, constructive process**
- **Experience shapes how we perceive**
- **Attention is limited and selective**
- **AP exam**: perception applications
      `
    },
    {
      id: 'perce7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'perception applications',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: perception applications'
          }
        ]
      }
    },
    {
      id: 'perce7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Perception is an active, constructive process',
            options: ['Perception is an active, constructive process', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Experience shapes how we perceive',
            options: ['Experience shapes how we perceive', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Attention is limited and selective',
            options: ['Attention is limited and selective', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Perception is an active, constructive process', 'Experience shapes how we perceive', 'Attention is limited and selective'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
