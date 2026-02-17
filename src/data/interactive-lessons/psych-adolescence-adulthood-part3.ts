export const psychAdolescencePart3Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adole3-intro',
      type: 'text' as const,
      content: `
# ## Moral Development

**Part 3 of 7 — Moral Development**

### 1. Kohlberg's stages of moral development

Kohlberg's stages of moral development

### 2. Preconventional

self-interest (punishment/reward)

### 3. Conventional

social norms and rules

### 4. Postconventional

universal ethical principles
      `
    },
    {
      id: 'adole3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Kohlberg\'s stages of moral development?',
            options: [
              'self-interest (punishment/reward)',
              'social norms and rules',
              'universal ethical principles',
              'Kohlberg\'s stages of moral development'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Kohlberg\'s stages of moral development. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Conventional:',
            options: [
              'Kohlberg\'s stages of moral development',
              'social norms and rules',
              'self-interest (punishment/reward)',
              'universal ethical principles'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Conventional: social norms and rules. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'adole3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Kohlberg's stages of moral development**
- **Preconventional**: self-interest (punishment/reward)
- **Conventional**: social norms and rules
- **Postconventional**: universal ethical principles
      `
    },
    {
      id: 'adole3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to moral development?',
            options: [
              'universal ethical principles',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Postconventional: universal ethical principles'
          }
        ]
      }
    },
    {
      id: 'adole3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Preconventional',
            options: ['Kohlberg\'s stages of moral development', 'universal ethical principles', 'social norms and rules', 'self-interest (punishment/reward)']
          },
          {
            label: 'Conventional',
            options: ['social norms and rules', 'Kohlberg\'s stages of moral development', 'universal ethical principles', 'self-interest (punishment/reward)']
          },
          {
            label: 'Postconventional',
            options: ['self-interest (punishment/reward)', 'universal ethical principles', 'social norms and rules', 'Kohlberg\'s stages of moral development']
          }
        ],
        correctAnswers: ['self-interest (punishment/reward)', 'social norms and rules', 'universal ethical principles'],
        hint1: 'Think about what each concept specifically describes in Moral Development.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Moral Development describes a specific idea. Preconventional: self-interest (punishment/reward). Conventional: social norms and rules. Postconventional: universal ethical principles.'
      }
    }
  ]
}
