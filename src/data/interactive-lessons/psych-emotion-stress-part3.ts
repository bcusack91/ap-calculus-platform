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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Stress?',
            options: [
              'relaxed, easygoing → lower health risk',
              'perceived threat or challenge',
              'catastrophes, major life changes, daily hassles',
              'competitive, hostile → higher heart disease risk'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Stress: perceived threat or challenge. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Type A personality:',
            options: [
              'perceived threat or challenge',
              'catastrophes, major life changes, daily hassles',
              'competitive, hostile → higher heart disease risk',
              'relaxed, easygoing → lower health risk'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Type A personality: competitive, hostile → higher heart disease risk. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Stress',
            options: ['perceived threat or challenge', 'catastrophes, major life changes, daily hassles', 'relaxed, easygoing → lower health risk', 'competitive, hostile → higher heart disease risk']
          },
          {
            label: 'Stressors',
            options: ['catastrophes, major life changes, daily hassles', 'perceived threat or challenge', 'competitive, hostile → higher heart disease risk', 'relaxed, easygoing → lower health risk']
          },
          {
            label: 'Type A personality',
            options: ['competitive, hostile → higher heart disease risk', 'relaxed, easygoing → lower health risk', 'catastrophes, major life changes, daily hassles', 'perceived threat or challenge']
          }
        ],
        correctAnswers: ['perceived threat or challenge', 'catastrophes, major life changes, daily hassles', 'competitive, hostile → higher heart disease risk'],
        hint1: 'Think about what each concept specifically describes in Stress & Health.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Stress & Health describes a specific idea. Stress: perceived threat or challenge. Stressors: catastrophes, major life changes, daily hassles. Type A personality: competitive, hostile → higher heart disease risk.'
      }
    }
  ]
}
