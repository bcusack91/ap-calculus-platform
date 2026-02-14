export const psychGroupPart7Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Group membership shapes identity and behavior

Group membership shapes identity and behavior

### 2. Prejudice can be reduced through structured contact

Prejudice can be reduced through structured contact

### 3. Culture influences psychological processes

Culture influences psychological processes

### 4. AP exam

social psychology research studies
      `
    },
    {
      id: 'group7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Group membership shapes identity and behavior',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Group membership shapes identity and behavior'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Culture influences psychological processes',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Culture influences psychological processes'
          }
        ]
      }
    },
    {
      id: 'group7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Group membership shapes identity and behavior**
- **Prejudice can be reduced through structured contact**
- **Culture influences psychological processes**
- **AP exam**: social psychology research studies
      `
    },
    {
      id: 'group7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'social psychology research studies',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: social psychology research studies'
          }
        ]
      }
    },
    {
      id: 'group7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Group membership shapes identity and behavior',
            options: ['Group membership shapes identity and behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Prejudice can be reduced through structured contact',
            options: ['Prejudice can be reduced through structured contac', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Culture influences psychological processes',
            options: ['Culture influences psychological processes', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Group membership shapes identity and behavior', 'Prejudice can be reduced through structured contac', 'Culture influences psychological processes'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
