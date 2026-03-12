export const psychOperantPart2Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'opera2-intro',
      type: 'text' as const,
      content: `
## Reinforcement Types

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Positive reinforcement?',
            options: [
              'removing aversive stimulus (-R)',
              'Primary reinforcers (food) vs secondary reinforcers (money, grades)',
              'adding pleasant stimulus (+R)',
              'Both reinforcement types INCREASE behavior'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Positive reinforcement: adding pleasant stimulus (+R). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Reinforcement Types, which explains Both reinforcement types INCREASE…?',
            options: [
              'adding pleasant stimulus (+R)',
              'Primary reinforcers (food) vs secondary reinforcers (money, grades)',
              'Both reinforcement types INCREASE behavior',
              'removing aversive stimulus (-R)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Both reinforcement types INCREASE behavior. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'opera2-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Positive reinforcement',
            options: ['Primary reinforcers (food) vs secondary reinforcers (money, grades)', 'Both reinforcement types INCREASE behavior', 'removing aversive stimulus (-R)', 'adding pleasant stimulus (+R)']
          },
          {
            label: 'Negative reinforcement',
            options: ['Both reinforcement types INCREASE behavior', 'removing aversive stimulus (-R)', 'Primary reinforcers (food) vs secondary reinforcers (money, grades)', 'adding pleasant stimulus (+R)']
          }
        ],
        correctAnswers: ['adding pleasant stimulus (+R)', 'removing aversive stimulus (-R)'],
        hint1: 'Think about what each concept specifically describes in Reinforcement Types.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reinforcement Types describes a specific idea. Positive reinforcement: adding pleasant stimulus (+R). Negative reinforcement: removing aversive stimulus (-R).'
      }
    }
  ]
}
