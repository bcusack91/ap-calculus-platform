export const psychEmotionPart5Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emoti5-intro',
      type: 'text' as const,
      content: `
## Coping Strategies

**Part 5 of 7 — Coping Strategies**

### 1. Problem-focused coping

addressing the problem directly

### 2. Emotion-focused coping

managing emotional response

### 3. Social support

buffer against stress

### 4. Perceived control

feeling in control reduces stress impact
      `
    },
    {
      id: 'emoti5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Problem-focused coping?',
            options: [
              'addressing the problem directly',
              'feeling in control reduces stress impact',
              'managing emotional response',
              'buffer against stress'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Problem-focused coping: addressing the problem directly. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Coping Strategies, which explains Social support?',
            options: [
              'addressing the problem directly',
              'managing emotional response',
              'buffer against stress',
              'feeling in control reduces stress impact'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Social support: buffer against stress. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'emoti5-detail',
      type: 'text' as const,
      content: `
### Key Points

- **Problem-focused coping**: addressing the problem directly
- **Emotion-focused coping**: managing emotional response
- **Social support**: buffer against stress
- **Perceived control**: feeling in control reduces stress impact
      `
    },
    {
      id: 'emoti5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to coping strategies?',
            options: [
              'feeling in control reduces stress impact',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Perceived control: feeling in control reduces stress impact'
          }
        ]
      }
    },
    {
      id: 'emoti5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Problem-focused coping',
            options: ['managing emotional response', 'feeling in control reduces stress impact', 'buffer against stress', 'addressing the problem directly']
          },
          {
            label: 'Emotion-focused coping',
            options: ['feeling in control reduces stress impact', 'addressing the problem directly', 'managing emotional response', 'buffer against stress']
          },
          {
            label: 'Social support',
            options: ['addressing the problem directly', 'feeling in control reduces stress impact', 'buffer against stress', 'managing emotional response']
          }
        ],
        correctAnswers: ['addressing the problem directly', 'managing emotional response', 'buffer against stress'],
        hint1: 'Think about what each concept specifically describes in Coping Strategies.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Coping Strategies describes a specific idea. Problem-focused coping: addressing the problem directly. Emotion-focused coping: managing emotional response. Social support: buffer against stress.'
      }
    }
  ]
}
