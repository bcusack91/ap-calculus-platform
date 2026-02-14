export const psychAttitudesPart7Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attit7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Attitudes and behavior influence each other

Attitudes and behavior influence each other

### 2. Prejudice can be reduced through contact

Prejudice can be reduced through contact

### 3. Situational factors affect helping behavior

Situational factors affect helping behavior

### 4. AP exam

social psychology applications
      `
    },
    {
      id: 'attit7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Attitudes and behavior influence each other',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Attitudes and behavior influence each other'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Situational factors affect helping behavior',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Situational factors affect helping behavior'
          }
        ]
      }
    },
    {
      id: 'attit7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Attitudes and behavior influence each other**
- **Prejudice can be reduced through contact**
- **Situational factors affect helping behavior**
- **AP exam**: social psychology applications
      `
    },
    {
      id: 'attit7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'social psychology applications',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: social psychology applications'
          }
        ]
      }
    },
    {
      id: 'attit7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Attitudes and behavior influence each other',
            options: ['Attitudes and behavior influence each other', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Prejudice can be reduced through contact',
            options: ['Prejudice can be reduced through contact', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Situational factors affect helping behavior',
            options: ['Situational factors affect helping behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Attitudes and behavior influence each other', 'Prejudice can be reduced through contact', 'Situational factors affect helping behavior'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
