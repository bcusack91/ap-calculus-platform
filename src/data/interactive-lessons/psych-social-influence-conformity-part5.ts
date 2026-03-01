export const psychSocialInfluencePart5Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia5-intro',
      type: 'text' as const,
      content: `
## Persuasion

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Central route?',
            options: [
              'large request → smaller request',
              'small request → large request',
              'influenced by superficial cues (low involvement)',
              'careful evaluation of arguments (high involvement)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Central route: careful evaluation of arguments (high involvement). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Foot-in-the-door?',
            options: [
              'influenced by superficial cues (low involvement)',
              'careful evaluation of arguments (high involvement)',
              'large request → smaller request',
              'small request → large request'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Foot-in-the-door: small request → large request. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'socia5-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Central route',
            options: ['careful evaluation of arguments (high involvement)', 'influenced by superficial cues (low involvement)', 'large request → smaller request', 'small request → large request']
          },
          {
            label: 'Peripheral route',
            options: ['large request → smaller request', 'careful evaluation of arguments (high involvement)', 'small request → large request', 'influenced by superficial cues (low involvement)']
          },
          {
            label: 'Foot-in-the-door',
            options: ['influenced by superficial cues (low involvement)', 'large request → smaller request', 'careful evaluation of arguments (high involvement)', 'small request → large request']
          }
        ],
        correctAnswers: ['careful evaluation of arguments (high involvement)', 'influenced by superficial cues (low involvement)', 'small request → large request'],
        hint1: 'Think about what each concept specifically describes in Persuasion.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Persuasion describes a specific idea. Central route: careful evaluation of arguments (high involvement). Peripheral route: influenced by superficial cues (low involvement). Foot-in-the-door: small request → large request.'
      }
    }
  ]
}
