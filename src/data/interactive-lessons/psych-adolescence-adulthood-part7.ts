export const psychAdolescencePart7Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adole7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Development continues throughout the lifespan

Development continues throughout the lifespan

### 2. Multiple theories complement each other

Multiple theories complement each other

### 3. Cultural context matters in development

Cultural context matters in development

### 4. AP exam

lifespan development questions
      `
    },
    {
      id: 'adole7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Development continues throughout the lifespan',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Development continues throughout the lifespan'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Cultural context matters in development',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cultural context matters in development'
          }
        ]
      }
    },
    {
      id: 'adole7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Development continues throughout the lifespan**
- **Multiple theories complement each other**
- **Cultural context matters in development**
- **AP exam**: lifespan development questions
      `
    },
    {
      id: 'adole7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'lifespan development questions',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: lifespan development questions'
          }
        ]
      }
    },
    {
      id: 'adole7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Development continues throughout the lifespan',
            options: ['Development continues throughout the lifespan', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Multiple theories complement each other',
            options: ['Multiple theories complement each other', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cultural context matters in development',
            options: ['Cultural context matters in development', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Development continues throughout the lifespan', 'Multiple theories complement each other', 'Cultural context matters in development'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
