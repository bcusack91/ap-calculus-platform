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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Development is continuous AND stage-like?',
            options: [
              'Piaget and Erikson questions',
              'Nature and nurture both contribute',
              'Development is continuous AND stage-like',
              'Early experiences shape development'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Development is continuous AND stage-like. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & AP Review, which explains Early experiences shape development?',
            options: [
              'Early experiences shape development',
              'Development is continuous AND stage-like',
              'Nature and nurture both contribute',
              'Piaget and Erikson questions'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Early experiences shape development. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Development is continuous AND stage-like',
            options: ['Nature and nurture both contribute', 'Piaget and Erikson questions', 'Early experiences shape development', 'Development is continuous AND stage-like']
          },
          {
            label: 'Nature and nurture both contribute',
            options: ['Nature and nurture both contribute', 'Development is continuous AND stage-like', 'Early experiences shape development', 'Piaget and Erikson questions']
          },
          {
            label: 'Early experiences shape development',
            options: ['Development is continuous AND stage-like', 'Piaget and Erikson questions', 'Early experiences shape development', 'Nature and nurture both contribute']
          }
        ],
        correctAnswers: ['Development is continuous AND stage-like', 'Nature and nurture both contribute', 'Early experiences shape development'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Development is continuous AND stage-like. Nature and nurture both contribute. Early experiences shape development.'
      }
    }
  ]
}
