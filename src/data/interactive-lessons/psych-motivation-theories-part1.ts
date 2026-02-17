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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Motivation" refer to in psychology?',
            options: [
              'need or desire that energizes and directs behavior',
              'external stimuli pull behavior',
              'innate behavioral patterns (limited in humans)',
              'Multiple theories explain different aspects of motivation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Motivation: need or desire that energizes and directs behavior. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Motivation Theories, which explains Incentive theory?',
            options: [
              'external stimuli pull behavior',
              'innate behavioral patterns (limited in humans)',
              'Multiple theories explain different aspects of motivation',
              'need or desire that energizes and directs behavior'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Incentive theory: external stimuli pull behavior. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Motivation',
            options: ['Multiple theories explain different aspects of motivation', 'external stimuli pull behavior', 'innate behavioral patterns (limited in humans)', 'need or desire that energizes and directs behavior']
          },
          {
            label: 'Instinct theory',
            options: ['innate behavioral patterns (limited in humans)', 'Multiple theories explain different aspects of motivation', 'need or desire that energizes and directs behavior', 'external stimuli pull behavior']
          },
          {
            label: 'Incentive theory',
            options: ['external stimuli pull behavior', 'innate behavioral patterns (limited in humans)', 'Multiple theories explain different aspects of motivation', 'need or desire that energizes and directs behavior']
          }
        ],
        correctAnswers: ['need or desire that energizes and directs behavior', 'innate behavioral patterns (limited in humans)', 'external stimuli pull behavior'],
        hint1: 'Think about what each concept specifically describes in Motivation Theories.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Motivation Theories describes a specific idea. Motivation: need or desire that energizes and directs behavior. Instinct theory: innate behavioral patterns (limited in humans). Incentive theory: external stimuli pull behavior.'
      }
    }
  ]
}
