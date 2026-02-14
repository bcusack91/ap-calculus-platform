export const psychMotivationPart1Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motiv1-intro',
      type: 'text' as const,
      content: `
# 🧠 Motivation Theories

**Part 1 of 7 — Introduction to Motivation**

### 1. Motivation

need or desire that energizes and directs behavior

### 2. Instinct theory

innate behavioral patterns (limited in humans)

### 3. Incentive theory

external stimuli pull behavior

### 4. Multiple theories explain different aspects of motivation

Multiple theories explain different aspects of motivation
      `
    },
    {
      id: 'motiv1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to motivation?',
            options: [
              'Motivation',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Motivation: need or desire that energizes and directs behavior'
          },
          {
            question: 'In the context of introduction to motivation, which is accurate?',
            options: [
              'external stimuli pull behavior',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Incentive theory: external stimuli pull behavior'
          }
        ]
      }
    },
    {
      id: 'motiv1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Motivation**: need or desire that energizes and directs behavior
- **Instinct theory**: innate behavioral patterns (limited in humans)
- **Incentive theory**: external stimuli pull behavior
- **Multiple theories explain different aspects of motivation**
      `
    },
    {
      id: 'motiv1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to motivation?',
            options: [
              'Multiple theories explain different aspects of motivation',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Multiple theories explain different aspects of motivation'
          }
        ]
      }
    },
    {
      id: 'motiv1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Motivation',
            options: ['need or desire that energizes and directs behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Instinct theory',
            options: ['innate behavioral patterns (limited in humans)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Incentive theory',
            options: ['external stimuli pull behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['need or desire that energizes and directs behavior', 'innate behavioral patterns (limited in humans)', 'external stimuli pull behavior'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Motivation.'
      }
    }
  ]
}
