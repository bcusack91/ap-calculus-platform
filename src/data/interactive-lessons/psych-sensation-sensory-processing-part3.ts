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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Sound waves → outer ear → eardrum →…?',
            options: [
              'high-pitched sounds',
              'Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells',
              'Frequency = pitch; amplitude = loudness',
              'low-pitched sounds'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Place theory?',
            options: [
              'Frequency = pitch; amplitude = loudness',
              'Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells',
              'low-pitched sounds',
              'high-pitched sounds'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Place theory: high-pitched sounds. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Place theory',
            options: ['high-pitched sounds', 'Frequency = pitch; amplitude = loudness', 'Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells', 'low-pitched sounds']
          },
          {
            label: 'Frequency theory',
            options: ['Frequency = pitch; amplitude = loudness', 'Sound waves → outer ear → eardrum → ossicles → cochlea → hair cells', 'low-pitched sounds', 'high-pitched sounds']
          }
        ],
        correctAnswers: ['high-pitched sounds', 'low-pitched sounds'],
        hint1: 'Think about what each concept specifically describes in Hearing.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Hearing describes a specific idea. Place theory: high-pitched sounds. Frequency theory: low-pitched sounds.'
      }
    }
  ]
}
