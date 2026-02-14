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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of chemical & body senses?',
            options: [
              'Taste',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Taste: sweet, sour, salty, bitter, umami'
          },
          {
            question: 'In the context of chemical & body senses, which is accurate?',
            options: [
              'pressure, temperature, pain (gate-control theory)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Touch: pressure, temperature, pain (gate-control theory)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Taste',
            options: ['sweet, sour, salty, bitter, umami', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Smell',
            options: ['olfactory receptors → olfactory bulb → limbic syst', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Touch',
            options: ['pressure, temperature, pain (gate-control theory)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['sweet, sour, salty, bitter, umami', 'olfactory receptors → olfactory bulb → limbic syst', 'pressure, temperature, pain (gate-control theory)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Chemical & Body Senses.'
      }
    }
  ]
}
