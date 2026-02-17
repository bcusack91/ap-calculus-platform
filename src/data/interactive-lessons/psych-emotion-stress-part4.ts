export const psychEmotionPart4Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emoti4-intro',
      type: 'text' as const,
      content: `
# ## Stress Responses

**Part 4 of 7 — Stress Responses**

### 1. General Adaptation Syndrome (Selye)

alarm → resistance → exhaustion

### 2. Fight-or-flight response

sympathetic nervous system activation

### 3. Cortisol

stress hormone (chronic elevation harmful)

### 4. Psychoneuroimmunology

stress weakens immune system
      `
    },
    {
      id: 'emoti4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains General Adaptation Syndrome (Selye)?',
            options: [
              'sympathetic nervous system activation',
              'stress weakens immune system',
              'stress hormone (chronic elevation harmful)',
              'alarm → resistance → exhaustion'
            ],
            correctAnswer: 3,
            explanation: 'Correct — General Adaptation Syndrome (Selye): alarm → resistance → exhaustion. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Cortisol:',
            options: [
              'alarm → resistance → exhaustion',
              'stress hormone (chronic elevation harmful)',
              'stress weakens immune system',
              'sympathetic nervous system activation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Cortisol: stress hormone (chronic elevation harmful). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'emoti4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **General Adaptation Syndrome (Selye)**: alarm → resistance → exhaustion
- **Fight-or-flight response**: sympathetic nervous system activation
- **Cortisol**: stress hormone (chronic elevation harmful)
- **Psychoneuroimmunology**: stress weakens immune system
      `
    },
    {
      id: 'emoti4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to stress responses?',
            options: [
              'stress weakens immune system',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Psychoneuroimmunology: stress weakens immune system'
          }
        ]
      }
    },
    {
      id: 'emoti4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'General Adaptation Syndrome (Selye)',
            options: ['alarm → resistance → exhaustion', 'stress weakens immune system', 'stress hormone (chronic elevation harmful)', 'sympathetic nervous system activation']
          },
          {
            label: 'Fight-or-flight response',
            options: ['stress weakens immune system', 'stress hormone (chronic elevation harmful)', 'alarm → resistance → exhaustion', 'sympathetic nervous system activation']
          },
          {
            label: 'Cortisol',
            options: ['alarm → resistance → exhaustion', 'sympathetic nervous system activation', 'stress hormone (chronic elevation harmful)', 'stress weakens immune system']
          }
        ],
        correctAnswers: ['alarm → resistance → exhaustion', 'sympathetic nervous system activation', 'stress hormone (chronic elevation harmful)'],
        hint1: 'Think about what each concept specifically describes in Stress Responses.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Stress Responses describes a specific idea. General Adaptation Syndrome (Selye): alarm → resistance → exhaustion. Fight-or-flight response: sympathetic nervous system activation. Cortisol: stress hormone (chronic elevation harmful).'
      }
    }
  ]
}
