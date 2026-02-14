export const psychSocialInfluencePart5Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia5-intro',
      type: 'text' as const,
      content: `
# ## Persuasion

**Part 5 of 7 — Persuasion**

### 1. Central route

careful evaluation of arguments (high involvement)

### 2. Peripheral route

influenced by superficial cues (low involvement)

### 3. Foot-in-the-door

small request → large request

### 4. Door-in-the-face

large request → smaller request
      `
    },
    {
      id: 'socia5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of persuasion?',
            options: [
              'Central route',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Central route: careful evaluation of arguments (high involvement)'
          },
          {
            question: 'In the context of persuasion, which is accurate?',
            options: [
              'small request → large request',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Foot-in-the-door: small request → large request'
          }
        ]
      }
    },
    {
      id: 'socia5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Central route**: careful evaluation of arguments (high involvement)
- **Peripheral route**: influenced by superficial cues (low involvement)
- **Foot-in-the-door**: small request → large request
- **Door-in-the-face**: large request → smaller request
      `
    },
    {
      id: 'socia5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to persuasion?',
            options: [
              'large request → smaller request',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Door-in-the-face: large request → smaller request'
          }
        ]
      }
    },
    {
      id: 'socia5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Central route',
            options: ['careful evaluation of arguments (high involvement)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Peripheral route',
            options: ['influenced by superficial cues (low involvement)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Foot-in-the-door',
            options: ['small request → large request', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['careful evaluation of arguments (high involvement)', 'influenced by superficial cues (low involvement)', 'small request → large request'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Persuasion.'
      }
    }
  ]
}
