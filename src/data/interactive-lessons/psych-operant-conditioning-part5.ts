export const psychOperantPart5Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'opera5-intro',
      type: 'text' as const,
      content: `
# ## Shaping & Chaining

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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of shaping & chaining?',
            options: [
              'Shaping',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Shaping: reinforcing successive approximations'
          },
          {
            question: 'In the context of shaping & chaining, which is accurate?',
            options: [
              'secondary reinforcers exchangeable for primary',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Token economy: secondary reinforcers exchangeable for primary'
          }
        ]
      }
    },
    {
      id: 'opera5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Shaping',
            options: ['reinforcing successive approximations', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Used to teach complex behaviors',
            options: ['Used to teach complex behaviors', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Token economy',
            options: ['secondary reinforcers exchangeable for primary', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['reinforcing successive approximations', 'Used to teach complex behaviors', 'secondary reinforcers exchangeable for primary'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Shaping & Chaining.'
      }
    }
  ]
}
