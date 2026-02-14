export const psychEmotionPart7Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emoti7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Emotion involves body, mind, and behavior

Emotion involves body, mind, and behavior

### 2. Chronic stress has serious health consequences

Chronic stress has serious health consequences

### 3. Coping strategies can be learned

Coping strategies can be learned

### 4. AP exam

emotion theory comparison
      `
    },
    {
      id: 'emoti7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Emotion involves body, mind, and behavior',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Emotion involves body, mind, and behavior'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Coping strategies can be learned',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Coping strategies can be learned'
          }
        ]
      }
    },
    {
      id: 'emoti7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Emotion involves body, mind, and behavior**
- **Chronic stress has serious health consequences**
- **Coping strategies can be learned**
- **AP exam**: emotion theory comparison
      `
    },
    {
      id: 'emoti7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'emotion theory comparison',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: emotion theory comparison'
          }
        ]
      }
    },
    {
      id: 'emoti7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Emotion involves body, mind, and behavior',
            options: ['Emotion involves body, mind, and behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Chronic stress has serious health consequences',
            options: ['Chronic stress has serious health consequences', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Coping strategies can be learned',
            options: ['Coping strategies can be learned', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Emotion involves body, mind, and behavior', 'Chronic stress has serious health consequences', 'Coping strategies can be learned'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
