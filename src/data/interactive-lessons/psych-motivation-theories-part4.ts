export const psychMotivationPart4Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motiv4-intro',
      type: 'text' as const,
      content: `
# ## Achievement & Intrinsic Motivation

**Part 4 of 7 — Achievement & Intrinsic Motivation**

### 1. Intrinsic motivation

internal satisfaction

### 2. Extrinsic motivation

external rewards

### 3. Overjustification effect

extrinsic rewards can undermine intrinsic motivation

### 4. Self-determination theory

autonomy, competence, relatedness
      `
    },
    {
      id: 'motiv4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Intrinsic motivation" refer to in psychology?',
            options: [
              'external rewards',
              'autonomy, competence, relatedness',
              'extrinsic rewards can undermine intrinsic motivation',
              'internal satisfaction'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Intrinsic motivation: internal satisfaction. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Overjustification effect:',
            options: [
              'internal satisfaction',
              'external rewards',
              'autonomy, competence, relatedness',
              'extrinsic rewards can undermine intrinsic motivation'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Overjustification effect: extrinsic rewards can undermine intrinsic motivation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'motiv4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Intrinsic motivation**: internal satisfaction
- **Extrinsic motivation**: external rewards
- **Overjustification effect**: extrinsic rewards can undermine intrinsic motivation
- **Self-determination theory**: autonomy, competence, relatedness
      `
    },
    {
      id: 'motiv4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to achievement & intrinsic motivation?',
            options: [
              'autonomy, competence, relatedness',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Self-determination theory: autonomy, competence, relatedness'
          }
        ]
      }
    },
    {
      id: 'motiv4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Intrinsic motivation',
            options: ['autonomy, competence, relatedness', 'extrinsic rewards can undermine intrinsic motivation', 'external rewards', 'internal satisfaction']
          },
          {
            label: 'Extrinsic motivation',
            options: ['extrinsic rewards can undermine intrinsic motivation', 'autonomy, competence, relatedness', 'external rewards', 'internal satisfaction']
          },
          {
            label: 'Overjustification effect',
            options: ['autonomy, competence, relatedness', 'internal satisfaction', 'external rewards', 'extrinsic rewards can undermine intrinsic motivation']
          }
        ],
        correctAnswers: ['internal satisfaction', 'external rewards', 'extrinsic rewards can undermine intrinsic motivation'],
        hint1: 'Think about what each concept specifically describes in Achievement & Intrinsic Motivation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Achievement & Intrinsic Motivation describes a specific idea. Intrinsic motivation: internal satisfaction. Extrinsic motivation: external rewards. Overjustification effect: extrinsic rewards can undermine intrinsic motivation.'
      }
    }
  ]
}
