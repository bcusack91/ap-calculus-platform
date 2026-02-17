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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Authoritative?',
            options: [
              'low warmth, high control',
              'high warmth, high control (best outcomes)',
              'high warmth, low control',
              'low warmth, low control (worst outcomes)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Authoritative: high warmth, high control (best outcomes). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Parenting Styles, which explains Permissive?',
            options: [
              'low warmth, low control (worst outcomes)',
              'low warmth, high control',
              'high warmth, low control',
              'high warmth, high control (best outcomes)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Permissive: high warmth, low control. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Authoritative',
            options: ['high warmth, high control (best outcomes)', 'low warmth, high control', 'low warmth, low control (worst outcomes)', 'high warmth, low control']
          },
          {
            label: 'Authoritarian',
            options: ['high warmth, high control (best outcomes)', 'high warmth, low control', 'low warmth, high control', 'low warmth, low control (worst outcomes)']
          },
          {
            label: 'Permissive',
            options: ['high warmth, low control', 'low warmth, high control', 'low warmth, low control (worst outcomes)', 'high warmth, high control (best outcomes)']
          }
        ],
        correctAnswers: ['high warmth, high control (best outcomes)', 'low warmth, high control', 'high warmth, low control'],
        hint1: 'Think about what each concept specifically describes in Parenting Styles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Parenting Styles describes a specific idea. Authoritative: high warmth, high control (best outcomes). Authoritarian: low warmth, high control. Permissive: high warmth, low control.'
      }
    }
  ]
}
