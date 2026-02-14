export const psychMotivationPart7Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motiv7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. No single theory explains all motivation

No single theory explains all motivation

### 2. Biology and psychology both contribute

Biology and psychology both contribute

### 3. Motivation connects to emotion and personality

Motivation connects to emotion and personality

### 4. AP exam

motivation theory applications
      `
    },
    {
      id: 'motiv7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'No single theory explains all motivation',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'No single theory explains all motivation'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Motivation connects to emotion and personality',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Motivation connects to emotion and personality'
          }
        ]
      }
    },
    {
      id: 'motiv7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **No single theory explains all motivation**
- **Biology and psychology both contribute**
- **Motivation connects to emotion and personality**
- **AP exam**: motivation theory applications
      `
    },
    {
      id: 'motiv7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'motivation theory applications',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: motivation theory applications'
          }
        ]
      }
    },
    {
      id: 'motiv7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'No single theory explains all motivation',
            options: ['No single theory explains all motivation', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Biology and psychology both contribute',
            options: ['Biology and psychology both contribute', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Motivation connects to emotion and personality',
            options: ['Motivation connects to emotion and personality', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['No single theory explains all motivation', 'Biology and psychology both contribute', 'Motivation connects to emotion and personality'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
