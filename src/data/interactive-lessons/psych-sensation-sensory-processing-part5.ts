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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Absolute threshold?',
            options: [
              'minimum stimulus detected 50% of the time',
              'detection depends on sensitivity AND decision criteria',
              'JND is proportional to stimulus magnitude',
              'smallest detectable difference'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Absolute threshold: minimum stimulus detected 50% of the time. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Weber\'s Law?',
            options: [
              'smallest detectable difference',
              'JND is proportional to stimulus magnitude',
              'detection depends on sensitivity AND decision criteria',
              'minimum stimulus detected 50% of the time'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Weber\'s Law: JND is proportional to stimulus magnitude. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Absolute threshold',
            options: ['detection depends on sensitivity AND decision criteria', 'JND is proportional to stimulus magnitude', 'minimum stimulus detected 50% of the time', 'smallest detectable difference']
          },
          {
            label: 'Difference threshold (JND)',
            options: ['smallest detectable difference', 'JND is proportional to stimulus magnitude', 'minimum stimulus detected 50% of the time', 'detection depends on sensitivity AND decision criteria']
          },
          {
            label: 'Weber\'s Law',
            options: ['minimum stimulus detected 50% of the time', 'smallest detectable difference', 'detection depends on sensitivity AND decision criteria', 'JND is proportional to stimulus magnitude']
          }
        ],
        correctAnswers: ['minimum stimulus detected 50% of the time', 'smallest detectable difference', 'JND is proportional to stimulus magnitude'],
        hint1: 'Think about what each concept specifically describes in Sensory Thresholds.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sensory Thresholds describes a specific idea. Absolute threshold: minimum stimulus detected 50% of the time. Difference threshold (JND): smallest detectable difference. Weber\'s Law: JND is proportional to stimulus magnitude.'
      }
    }
  ]
}
