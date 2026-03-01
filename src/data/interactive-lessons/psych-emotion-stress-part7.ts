export const psychEmotionPart7Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emoti7-intro',
      type: 'text' as const,
      content: `
## Synthesis & AP Review

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Emotion involves body, mind, and…?',
            options: [
              'emotion theory comparison',
              'Coping strategies can be learned',
              'Emotion involves body, mind, and behavior',
              'Chronic stress has serious health consequences'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Emotion involves body, mind, and behavior. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & AP Review, which explains Coping strategies can be learned?',
            options: [
              'Chronic stress has serious health consequences',
              'emotion theory comparison',
              'Emotion involves body, mind, and behavior',
              'Coping strategies can be learned'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Coping strategies can be learned. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'emoti7-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Emotion involves body, mind, and…',
            options: ['emotion theory comparison', 'Emotion involves body, mind, and behavior', 'Chronic stress has serious health consequences', 'Coping strategies can be learned']
          },
          {
            label: 'Chronic stress has serious health…',
            options: ['Chronic stress has serious health consequences', 'Coping strategies can be learned', 'emotion theory comparison', 'Emotion involves body, mind, and behavior']
          },
          {
            label: 'Coping strategies can be learned',
            options: ['Chronic stress has serious health consequences', 'emotion theory comparison', 'Emotion involves body, mind, and behavior', 'Coping strategies can be learned']
          }
        ],
        correctAnswers: ['Emotion involves body, mind, and behavior', 'Chronic stress has serious health consequences', 'Coping strategies can be learned'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Emotion involves body, mind, and behavior. Chronic stress has serious health consequences. Coping strategies can be learned.'
      }
    }
  ]
}
