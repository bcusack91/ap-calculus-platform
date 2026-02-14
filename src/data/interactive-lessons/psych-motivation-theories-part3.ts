export const psychMotivationPart3Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motiv3-intro',
      type: 'text' as const,
      content: `
# ## Maslow's Hierarchy

**Part 3 of 7 — Maslow's Hierarchy**

### 1. Hierarchy of needs

physiological → safety → belonging → esteem → self-actualization

### 2. Lower needs must be met before higher needs

Lower needs must be met before higher needs

### 3. Self-actualization

achieving full potential

### 4. Criticisms

order not rigid, cultural differences
      `
    },
    {
      id: 'motiv3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of maslow\'s hierarchy?',
            options: [
              'Hierarchy of needs',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Hierarchy of needs: physiological → safety → belonging → esteem → self-actualization'
          },
          {
            question: 'In the context of maslow\'s hierarchy, which is accurate?',
            options: [
              'achieving full potential',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Self-actualization: achieving full potential'
          }
        ]
      }
    },
    {
      id: 'motiv3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Hierarchy of needs**: physiological → safety → belonging → esteem → self-actualization
- **Lower needs must be met before higher needs**
- **Self-actualization**: achieving full potential
- **Criticisms**: order not rigid, cultural differences
      `
    },
    {
      id: 'motiv3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to maslow\'s hierarchy?',
            options: [
              'order not rigid, cultural differences',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Criticisms: order not rigid, cultural differences'
          }
        ]
      }
    },
    {
      id: 'motiv3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hierarchy of needs',
            options: ['physiological → safety → belonging → esteem → self', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Lower needs must be met before higher needs',
            options: ['Lower needs must be met before higher needs', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Self-actualization',
            options: ['achieving full potential', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['physiological → safety → belonging → esteem → self', 'Lower needs must be met before higher needs', 'achieving full potential'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Maslow\'s Hierarchy.'
      }
    }
  ]
}
