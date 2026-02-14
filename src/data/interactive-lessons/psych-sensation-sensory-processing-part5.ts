export const psychSensationPart5Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensa5-intro',
      type: 'text' as const,
      content: `
# ## Sensory Thresholds

**Part 5 of 7 — Sensory Thresholds**

### 1. Absolute threshold

minimum stimulus detected 50% of the time

### 2. Difference threshold (JND)

smallest detectable difference

### 3. Weber's Law

JND is proportional to stimulus magnitude

### 4. Signal detection theory

detection depends on sensitivity AND decision criteria
      `
    },
    {
      id: 'sensa5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of sensory thresholds?',
            options: [
              'Absolute threshold',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Absolute threshold: minimum stimulus detected 50% of the time'
          },
          {
            question: 'In the context of sensory thresholds, which is accurate?',
            options: [
              'JND is proportional to stimulus magnitude',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Weber\'s Law: JND is proportional to stimulus magnitude'
          }
        ]
      }
    },
    {
      id: 'sensa5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Absolute threshold**: minimum stimulus detected 50% of the time
- **Difference threshold (JND)**: smallest detectable difference
- **Weber's Law**: JND is proportional to stimulus magnitude
- **Signal detection theory**: detection depends on sensitivity AND decision criteria
      `
    },
    {
      id: 'sensa5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to sensory thresholds?',
            options: [
              'detection depends on sensitivity AND decision criteria',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Signal detection theory: detection depends on sensitivity AND decision criteria'
          }
        ]
      }
    },
    {
      id: 'sensa5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Absolute threshold',
            options: ['minimum stimulus detected 50% of the time', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Difference threshold (JND)',
            options: ['smallest detectable difference', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Weber\'s Law',
            options: ['JND is proportional to stimulus magnitude', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['minimum stimulus detected 50% of the time', 'smallest detectable difference', 'JND is proportional to stimulus magnitude'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Sensory Thresholds.'
      }
    }
  ]
}
