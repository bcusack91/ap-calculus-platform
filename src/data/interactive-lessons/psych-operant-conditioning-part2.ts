export const psychOperantPart2Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'opera2-intro',
      type: 'text' as const,
      content: `
# ## Reinforcement Types

**Part 2 of 7 — Reinforcement Types**

### 1. Positive reinforcement

adding pleasant stimulus (+R)

### 2. Negative reinforcement

removing aversive stimulus (-R)

### 3. Both reinforcement types INCREASE behavior

Both reinforcement types INCREASE behavior

### 4. Primary reinforcers (food) vs secondary reinforcers (money, grades)

Primary reinforcers (food) vs secondary reinforcers (money, grades)
      `
    },
    {
      id: 'opera2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of reinforcement types?',
            options: [
              'Positive reinforcement',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Positive reinforcement: adding pleasant stimulus (+R)'
          },
          {
            question: 'In the context of reinforcement types, which is accurate?',
            options: [
              'Both reinforcement types INCREASE behavior',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Both reinforcement types INCREASE behavior'
          }
        ]
      }
    },
    {
      id: 'opera2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Positive reinforcement**: adding pleasant stimulus (+R)
- **Negative reinforcement**: removing aversive stimulus (-R)
- **Both reinforcement types INCREASE behavior**
- **Primary reinforcers (food) vs secondary reinforcers (money, grades)**
      `
    },
    {
      id: 'opera2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to reinforcement types?',
            options: [
              'Primary reinforcers (food) vs secondary reinforcers (money, grades)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Primary reinforcers (food) vs secondary reinforcers (money, grades)'
          }
        ]
      }
    },
    {
      id: 'opera2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Positive reinforcement',
            options: ['adding pleasant stimulus (+R)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Negative reinforcement',
            options: ['removing aversive stimulus (-R)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Both reinforcement types INCREASE behavior',
            options: ['Both reinforcement types INCREASE behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['adding pleasant stimulus (+R)', 'removing aversive stimulus (-R)', 'Both reinforcement types INCREASE behavior'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Reinforcement Types.'
      }
    }
  ]
}
