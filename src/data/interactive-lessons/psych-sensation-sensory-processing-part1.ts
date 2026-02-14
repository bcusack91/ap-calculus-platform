export const psychSensationPart1Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensa1-intro',
      type: 'text' as const,
      content: `
# 🧠 Sensation & Sensory Processing

**Part 1 of 7 — Introduction to Sensation**

### 1. Sensation

detecting stimuli

### 2. Perception

interpreting stimuli

### 3. Transduction

converting physical energy to neural signals

### 4. Bottom-up vs top-down processing

Bottom-up vs top-down processing
      `
    },
    {
      id: 'sensa1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to sensation?',
            options: [
              'Sensation',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Sensation: detecting stimuli'
          },
          {
            question: 'In the context of introduction to sensation, which is accurate?',
            options: [
              'converting physical energy to neural signals',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Transduction: converting physical energy to neural signals'
          }
        ]
      }
    },
    {
      id: 'sensa1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Sensation**: detecting stimuli
- **Perception**: interpreting stimuli
- **Transduction**: converting physical energy to neural signals
- **Bottom-up vs top-down processing**
      `
    },
    {
      id: 'sensa1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to sensation?',
            options: [
              'Bottom-up vs top-down processing',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Bottom-up vs top-down processing'
          }
        ]
      }
    },
    {
      id: 'sensa1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sensation',
            options: ['detecting stimuli', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Perception',
            options: ['interpreting stimuli', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Transduction',
            options: ['converting physical energy to neural signals', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['detecting stimuli', 'interpreting stimuli', 'converting physical energy to neural signals'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Sensation.'
      }
    }
  ]
}
