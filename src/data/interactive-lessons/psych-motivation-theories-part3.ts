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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Hierarchy of needs" refer to in psychology?',
            options: [
              'physiological → safety → belonging → esteem → self-actualization',
              'achieving full potential',
              'Lower needs must be met before higher needs',
              'order not rigid, cultural differences'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Hierarchy of needs: physiological → safety → belonging → esteem → self-actualization. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Maslow\'s Hierarchy, which explains Self-actualization?',
            options: [
              'Lower needs must be met before higher needs',
              'physiological → safety → belonging → esteem → self-actualization',
              'order not rigid, cultural differences',
              'achieving full potential'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Self-actualization: achieving full potential. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hierarchy of needs',
            options: ['achieving full potential', 'Lower needs must be met before higher needs', 'physiological → safety → belonging → esteem → self-actualization', 'order not rigid, cultural differences']
          },
          {
            label: 'Self-actualization',
            options: ['physiological → safety → belonging → esteem → self-actualization', 'Lower needs must be met before higher needs', 'order not rigid, cultural differences', 'achieving full potential']
          },
          {
            label: 'Criticisms',
            options: ['order not rigid, cultural differences', 'physiological → safety → belonging → esteem → self-actualization', 'Lower needs must be met before higher needs', 'achieving full potential']
          }
        ],
        correctAnswers: ['physiological → safety → belonging → esteem → self-actualization', 'achieving full potential', 'order not rigid, cultural differences'],
        hint1: 'Think about what each concept specifically describes in Maslow\'s Hierarchy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Maslow\'s Hierarchy describes a specific idea. Hierarchy of needs: physiological → safety → belonging → esteem → self-actualization. Self-actualization: achieving full potential. Criticisms: order not rigid, cultural differences.'
      }
    }
  ]
}
