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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of moral development?',
            options: [
              'Kohlberg\'s stages of moral development',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Kohlberg\'s stages of moral development'
          },
          {
            question: 'In the context of moral development, which is accurate?',
            options: [
              'social norms and rules',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Conventional: social norms and rules'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Kohlberg\'s stages of moral development',
            options: ['Kohlberg\'s stages of moral development', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Preconventional',
            options: ['self-interest (punishment/reward)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Conventional',
            options: ['social norms and rules', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Kohlberg\'s stages of moral development', 'self-interest (punishment/reward)', 'social norms and rules'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Moral Development.'
      }
    }
  ]
}
