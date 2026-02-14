export const psychEmotionPart3Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emoti3-intro',
      type: 'text' as const,
      content: `
# ## Stress & Health

**Part 3 of 7 — Stress & Health**

### 1. Stress

perceived threat or challenge

### 2. Stressors

catastrophes, major life changes, daily hassles

### 3. Type A personality

competitive, hostile → higher heart disease risk

### 4. Type B personality

relaxed, easygoing → lower health risk
      `
    },
    {
      id: 'emoti3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of stress & health?',
            options: [
              'Stress',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Stress: perceived threat or challenge'
          },
          {
            question: 'In the context of stress & health, which is accurate?',
            options: [
              'competitive, hostile → higher heart disease risk',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Type A personality: competitive, hostile → higher heart disease risk'
          }
        ]
      }
    },
    {
      id: 'emoti3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Stress**: perceived threat or challenge
- **Stressors**: catastrophes, major life changes, daily hassles
- **Type A personality**: competitive, hostile → higher heart disease risk
- **Type B personality**: relaxed, easygoing → lower health risk
      `
    },
    {
      id: 'emoti3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to stress & health?',
            options: [
              'relaxed, easygoing → lower health risk',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Type B personality: relaxed, easygoing → lower health risk'
          }
        ]
      }
    },
    {
      id: 'emoti3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Stress',
            options: ['perceived threat or challenge', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Stressors',
            options: ['catastrophes, major life changes, daily hassles', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Type A personality',
            options: ['competitive, hostile → higher heart disease risk', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['perceived threat or challenge', 'catastrophes, major life changes, daily hassles', 'competitive, hostile → higher heart disease risk'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Stress & Health.'
      }
    }
  ]
}
