export const psychGroupPart3Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group3-intro',
      type: 'text' as const,
      content: `
# ## Reducing Prejudice

**Part 3 of 7 — Reducing Prejudice**

### 1. Contact hypothesis

positive intergroup contact reduces prejudice

### 2. Conditions

equal status, common goals, cooperation, institutional support

### 3. Jigsaw classroom

cooperative learning technique

### 4. Superordinate goals

shared goals that require cooperation
      `
    },
    {
      id: 'group3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Contact hypothesis?',
            options: [
              'shared goals that require cooperation',
              'cooperative learning technique',
              'positive intergroup contact reduces prejudice',
              'equal status, common goals, cooperation, institutional support'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Contact hypothesis: positive intergroup contact reduces prejudice. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Jigsaw classroom?',
            options: [
              'shared goals that require cooperation',
              'cooperative learning technique',
              'equal status, common goals, cooperation, institutional support',
              'positive intergroup contact reduces prejudice'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Jigsaw classroom: cooperative learning technique. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'group3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Contact hypothesis**: positive intergroup contact reduces prejudice
- **Conditions**: equal status, common goals, cooperation, institutional support
- **Jigsaw classroom**: cooperative learning technique
- **Superordinate goals**: shared goals that require cooperation
      `
    },
    {
      id: 'group3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to reducing prejudice?',
            options: [
              'shared goals that require cooperation',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Superordinate goals: shared goals that require cooperation'
          }
        ]
      }
    },
    {
      id: 'group3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Contact hypothesis',
            options: ['positive intergroup contact reduces prejudice', 'equal status, common goals, cooperation, institutional support', 'shared goals that require cooperation', 'cooperative learning technique']
          },
          {
            label: 'Conditions',
            options: ['positive intergroup contact reduces prejudice', 'equal status, common goals, cooperation, institutional support', 'shared goals that require cooperation', 'cooperative learning technique']
          },
          {
            label: 'Jigsaw classroom',
            options: ['cooperative learning technique', 'shared goals that require cooperation', 'positive intergroup contact reduces prejudice', 'equal status, common goals, cooperation, institutional support']
          }
        ],
        correctAnswers: ['positive intergroup contact reduces prejudice', 'equal status, common goals, cooperation, institutional support', 'cooperative learning technique'],
        hint1: 'Think about what each concept specifically describes in Reducing Prejudice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reducing Prejudice describes a specific idea. Contact hypothesis: positive intergroup contact reduces prejudice. Conditions: equal status, common goals, cooperation, institutional support. Jigsaw classroom: cooperative learning technique.'
      }
    }
  ]
}
