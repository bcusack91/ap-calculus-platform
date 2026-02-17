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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Perception is an active, constructive…?',
            options: [
              'Experience shapes how we perceive',
              'Attention is limited and selective',
              'perception applications',
              'Perception is an active, constructive process'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Perception is an active, constructive process. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Attention is limited and selective?',
            options: [
              'perception applications',
              'Experience shapes how we perceive',
              'Attention is limited and selective',
              'Perception is an active, constructive process'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Attention is limited and selective. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Perception is an active, constructive…',
            options: ['Attention is limited and selective', 'Perception is an active, constructive process', 'perception applications', 'Experience shapes how we perceive']
          },
          {
            label: 'Experience shapes how we perceive',
            options: ['perception applications', 'Perception is an active, constructive process', 'Experience shapes how we perceive', 'Attention is limited and selective']
          },
          {
            label: 'Attention is limited and selective',
            options: ['Perception is an active, constructive process', 'Attention is limited and selective', 'perception applications', 'Experience shapes how we perceive']
          }
        ],
        correctAnswers: ['Perception is an active, constructive process', 'Experience shapes how we perceive', 'Attention is limited and selective'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Perception is an active, constructive process. Experience shapes how we perceive. Attention is limited and selective.'
      }
    }
  ]
}
