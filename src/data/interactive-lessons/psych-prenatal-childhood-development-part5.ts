export const psychPrenatalPart5Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prena5-intro',
      type: 'text' as const,
      content: `
# ## Parenting Styles

**Part 5 of 7 — Parenting Styles**

### 1. Authoritative

high warmth, high control (best outcomes)

### 2. Authoritarian

low warmth, high control

### 3. Permissive

high warmth, low control

### 4. Uninvolved

low warmth, low control (worst outcomes)
      `
    },
    {
      id: 'prena5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of parenting styles?',
            options: [
              'Authoritative',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Authoritative: high warmth, high control (best outcomes)'
          },
          {
            question: 'In the context of parenting styles, which is accurate?',
            options: [
              'high warmth, low control',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Permissive: high warmth, low control'
          }
        ]
      }
    },
    {
      id: 'prena5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Authoritative**: high warmth, high control (best outcomes)
- **Authoritarian**: low warmth, high control
- **Permissive**: high warmth, low control
- **Uninvolved**: low warmth, low control (worst outcomes)
      `
    },
    {
      id: 'prena5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to parenting styles?',
            options: [
              'low warmth, low control (worst outcomes)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Uninvolved: low warmth, low control (worst outcomes)'
          }
        ]
      }
    },
    {
      id: 'prena5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Authoritative',
            options: ['high warmth, high control (best outcomes)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Authoritarian',
            options: ['low warmth, high control', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Permissive',
            options: ['high warmth, low control', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['high warmth, high control (best outcomes)', 'low warmth, high control', 'high warmth, low control'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Parenting Styles.'
      }
    }
  ]
}
