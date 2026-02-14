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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of achievement & intrinsic motivation?',
            options: [
              'Intrinsic motivation',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Intrinsic motivation: internal satisfaction'
          },
          {
            question: 'In the context of achievement & intrinsic motivation, which is accurate?',
            options: [
              'extrinsic rewards can undermine intrinsic motivation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Overjustification effect: extrinsic rewards can undermine intrinsic motivation'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Intrinsic motivation',
            options: ['internal satisfaction', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Extrinsic motivation',
            options: ['external rewards', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Overjustification effect',
            options: ['extrinsic rewards can undermine intrinsic motivati', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['internal satisfaction', 'external rewards', 'extrinsic rewards can undermine intrinsic motivati'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Achievement & Intrinsic Motivation.'
      }
    }
  ]
}
