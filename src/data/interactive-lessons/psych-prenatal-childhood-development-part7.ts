export const psychPrenatalPart7Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prena7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Development is continuous AND stage-like

Development is continuous AND stage-like

### 2. Nature and nurture both contribute

Nature and nurture both contribute

### 3. Early experiences shape development

Early experiences shape development

### 4. AP exam

Piaget and Erikson questions
      `
    },
    {
      id: 'prena7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Development is continuous AND stage-like',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Development is continuous AND stage-like'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Early experiences shape development',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Early experiences shape development'
          }
        ]
      }
    },
    {
      id: 'prena7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Development is continuous AND stage-like**
- **Nature and nurture both contribute**
- **Early experiences shape development**
- **AP exam**: Piaget and Erikson questions
      `
    },
    {
      id: 'prena7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'Piaget and Erikson questions',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: Piaget and Erikson questions'
          }
        ]
      }
    },
    {
      id: 'prena7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Development is continuous AND stage-like',
            options: ['Development is continuous AND stage-like', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Nature and nurture both contribute',
            options: ['Nature and nurture both contribute', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Early experiences shape development',
            options: ['Early experiences shape development', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Development is continuous AND stage-like', 'Nature and nurture both contribute', 'Early experiences shape development'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
