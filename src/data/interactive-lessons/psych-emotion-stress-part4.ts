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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of stress responses?',
            options: [
              'General Adaptation Syndrome (Selye)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'General Adaptation Syndrome (Selye): alarm → resistance → exhaustion'
          },
          {
            question: 'In the context of stress responses, which is accurate?',
            options: [
              'stress hormone (chronic elevation harmful)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cortisol: stress hormone (chronic elevation harmful)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'General Adaptation Syndrome (Selye)',
            options: ['alarm → resistance → exhaustion', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Fight-or-flight response',
            options: ['sympathetic nervous system activation', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cortisol',
            options: ['stress hormone (chronic elevation harmful)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['alarm → resistance → exhaustion', 'sympathetic nervous system activation', 'stress hormone (chronic elevation harmful)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Stress Responses.'
      }
    }
  ]
}
