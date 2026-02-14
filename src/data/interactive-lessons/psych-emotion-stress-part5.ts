export const psychEmotionPart5Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emoti5-intro',
      type: 'text' as const,
      content: `
# ## Coping Strategies

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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of coping strategies?',
            options: [
              'Problem-focused coping',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Problem-focused coping: addressing the problem directly'
          },
          {
            question: 'In the context of coping strategies, which is accurate?',
            options: [
              'buffer against stress',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Social support: buffer against stress'
          }
        ]
      }
    },
    {
      id: 'emoti5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Problem-focused coping',
            options: ['addressing the problem directly', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Emotion-focused coping',
            options: ['managing emotional response', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Social support',
            options: ['buffer against stress', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['addressing the problem directly', 'managing emotional response', 'buffer against stress'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Coping Strategies.'
      }
    }
  ]
}
