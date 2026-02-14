export const psychSensationPart3Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensa3-intro',
      type: 'text' as const,
      content: `
# ## Hearing

**Part 3 of 7 — Hearing**

### 1. Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells

Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells

### 2. Frequency = pitch; amplitude = loudness

Frequency = pitch; amplitude = loudness

### 3. Place theory

high-pitched sounds

### 4. Frequency theory

low-pitched sounds
      `
    },
    {
      id: 'sensa3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of hearing?',
            options: [
              'Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells'
          },
          {
            question: 'In the context of hearing, which is accurate?',
            options: [
              'high-pitched sounds',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Place theory: high-pitched sounds'
          }
        ]
      }
    },
    {
      id: 'sensa3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells**
- **Frequency = pitch; amplitude = loudness**
- **Place theory**: high-pitched sounds
- **Frequency theory**: low-pitched sounds
      `
    },
    {
      id: 'sensa3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to hearing?',
            options: [
              'low-pitched sounds',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Frequency theory: low-pitched sounds'
          }
        ]
      }
    },
    {
      id: 'sensa3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells',
            options: ['Sound waves → outer ear → eardrum → ossicles → coc', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Frequency = pitch; amplitude = loudness',
            options: ['Frequency = pitch; amplitude = loudness', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Place theory',
            options: ['high-pitched sounds', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Sound waves → outer ear → eardrum → ossicles → coc', 'Frequency = pitch; amplitude = loudness', 'high-pitched sounds'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Hearing.'
      }
    }
  ]
}
