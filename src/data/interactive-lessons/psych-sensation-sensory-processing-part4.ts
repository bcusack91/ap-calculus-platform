export const psychSensationPart4Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensa4-intro',
      type: 'text' as const,
      content: `
# ## Chemical & Body Senses

**Part 4 of 7 — Chemical & Body Senses**

### 1. Taste

sweet, sour, salty, bitter, umami

### 2. Smell

olfactory receptors → olfactory bulb → limbic system

### 3. Touch

pressure, temperature, pain (gate-control theory)

### 4. Kinesthesia

body position; Vestibular: balance
      `
    },
    {
      id: 'sensa4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Taste?',
            options: [
              'pressure, temperature, pain (gate-control theory)',
              'body position; Vestibular: balance',
              'sweet, sour, salty, bitter, umami',
              'olfactory receptors → olfactory bulb → limbic system'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Taste: sweet, sour, salty, bitter, umami. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Touch?',
            options: [
              'body position; Vestibular: balance',
              'olfactory receptors → olfactory bulb → limbic system',
              'sweet, sour, salty, bitter, umami',
              'pressure, temperature, pain (gate-control theory)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Touch: pressure, temperature, pain (gate-control theory). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sensa4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Taste**: sweet, sour, salty, bitter, umami
- **Smell**: olfactory receptors → olfactory bulb → limbic system
- **Touch**: pressure, temperature, pain (gate-control theory)
- **Kinesthesia**: body position; Vestibular: balance
      `
    },
    {
      id: 'sensa4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to chemical & body senses?',
            options: [
              'body position; Vestibular: balance',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Kinesthesia: body position; Vestibular: balance'
          }
        ]
      }
    },
    {
      id: 'sensa4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Taste',
            options: ['pressure, temperature, pain (gate-control theory)', 'sweet, sour, salty, bitter, umami', 'body position; Vestibular: balance', 'olfactory receptors → olfactory bulb → limbic system']
          },
          {
            label: 'Smell',
            options: ['pressure, temperature, pain (gate-control theory)', 'sweet, sour, salty, bitter, umami', 'body position; Vestibular: balance', 'olfactory receptors → olfactory bulb → limbic system']
          },
          {
            label: 'Touch',
            options: ['pressure, temperature, pain (gate-control theory)', 'sweet, sour, salty, bitter, umami', 'body position; Vestibular: balance', 'olfactory receptors → olfactory bulb → limbic system']
          }
        ],
        correctAnswers: ['sweet, sour, salty, bitter, umami', 'olfactory receptors → olfactory bulb → limbic system', 'pressure, temperature, pain (gate-control theory)'],
        hint1: 'Think about what each concept specifically describes in Chemical & Body Senses.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Chemical & Body Senses describes a specific idea. Taste: sweet, sour, salty, bitter, umami. Smell: olfactory receptors → olfactory bulb → limbic system. Touch: pressure, temperature, pain (gate-control theory).'
      }
    }
  ]
}
