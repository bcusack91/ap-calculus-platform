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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of reducing prejudice?',
            options: [
              'Contact hypothesis',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Contact hypothesis: positive intergroup contact reduces prejudice'
          },
          {
            question: 'In the context of reducing prejudice, which is accurate?',
            options: [
              'cooperative learning technique',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Jigsaw classroom: cooperative learning technique'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Contact hypothesis',
            options: ['positive intergroup contact reduces prejudice', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Conditions',
            options: ['equal status, common goals, cooperation, instituti', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Jigsaw classroom',
            options: ['cooperative learning technique', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['positive intergroup contact reduces prejudice', 'equal status, common goals, cooperation, instituti', 'cooperative learning technique'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Reducing Prejudice.'
      }
    }
  ]
}
