export const psychAdolescencePart7Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adole7-intro',
      type: 'text' as const,
      content: `
## Synthesis & AP Review

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Development continues throughout the…?',
            options: [
              'Multiple theories complement each other',
              'Cultural context matters in development',
              'lifespan development questions',
              'Development continues throughout the lifespan'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Development continues throughout the lifespan. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & AP Review, which explains Cultural context matters in development?',
            options: [
              'Cultural context matters in development',
              'lifespan development questions',
              'Multiple theories complement each other',
              'Development continues throughout the lifespan'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Cultural context matters in development. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'adole7-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Development continues throughout the…',
            options: ['lifespan development questions', 'Cultural context matters in development', 'Development continues throughout the lifespan', 'Multiple theories complement each other']
          },
          {
            label: 'Multiple theories complement each other',
            options: ['Cultural context matters in development', 'lifespan development questions', 'Development continues throughout the lifespan', 'Multiple theories complement each other']
          },
          {
            label: 'Cultural context matters in development',
            options: ['Development continues throughout the lifespan', 'Multiple theories complement each other', 'lifespan development questions', 'Cultural context matters in development']
          }
        ],
        correctAnswers: ['Development continues throughout the lifespan', 'Multiple theories complement each other', 'Cultural context matters in development'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Development continues throughout the lifespan. Multiple theories complement each other. Cultural context matters in development.'
      }
    }
  ]
}
