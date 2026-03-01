export const psychOperantPart5Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'opera5-intro',
      type: 'text' as const,
      content: `
## Shaping & Chaining

**Part 5 of 7 — Shaping & Chaining**

### 1. Shaping

reinforcing successive approximations

### 2. Used to teach complex behaviors

Used to teach complex behaviors

### 3. Token economy

secondary reinforcers exchangeable for primary

### 4. Applied behavior analysis (ABA)

treating autism
      `
    },
    {
      id: 'opera5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Shaping?',
            options: [
              'secondary reinforcers exchangeable for primary',
              'treating autism',
              'reinforcing successive approximations',
              'Used to teach complex behaviors'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Shaping: reinforcing successive approximations. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Shaping & Chaining, which explains Token economy?',
            options: [
              'reinforcing successive approximations',
              'secondary reinforcers exchangeable for primary',
              'Used to teach complex behaviors',
              'treating autism'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Token economy: secondary reinforcers exchangeable for primary. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'opera5-detail',
      type: 'text' as const,
      content: `
### Key Points

- **Shaping**: reinforcing successive approximations
- **Used to teach complex behaviors**
- **Token economy**: secondary reinforcers exchangeable for primary
- **Applied behavior analysis (ABA)**: treating autism
      `
    },
    {
      id: 'opera5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to shaping & chaining?',
            options: [
              'treating autism',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Applied behavior analysis (ABA): treating autism'
          }
        ]
      }
    },
    {
      id: 'opera5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Shaping',
            options: ['secondary reinforcers exchangeable for primary', 'treating autism', 'Used to teach complex behaviors', 'reinforcing successive approximations']
          },
          {
            label: 'Token economy',
            options: ['Used to teach complex behaviors', 'secondary reinforcers exchangeable for primary', 'treating autism', 'reinforcing successive approximations']
          },
          {
            label: 'Applied behavior analysis (ABA)',
            options: ['reinforcing successive approximations', 'treating autism', 'secondary reinforcers exchangeable for primary', 'Used to teach complex behaviors']
          }
        ],
        correctAnswers: ['reinforcing successive approximations', 'secondary reinforcers exchangeable for primary', 'treating autism'],
        hint1: 'Think about what each concept specifically describes in Shaping & Chaining.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Shaping & Chaining describes a specific idea. Shaping: reinforcing successive approximations. Token economy: secondary reinforcers exchangeable for primary. Applied behavior analysis (ABA): treating autism.'
      }
    }
  ]
}
