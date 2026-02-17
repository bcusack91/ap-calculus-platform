export const psychObservationalPart4Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser4-intro',
      type: 'text' as const,
      content: `
# ## Insight & Latent Learning

**Part 4 of 7 — Insight & Latent Learning**

### 1. Insight learning

Köhler's apes — sudden "aha!" solutions

### 2. Not trial-and-error but sudden reorganization

Not trial-and-error but sudden reorganization

### 3. Abstract learning

understanding rules and principles

### 4. Transfer of learning

applying knowledge to new situations
      `
    },
    {
      id: 'obser4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Insight learning?',
            options: [
              'applying knowledge to new situations',
              'Köhler\'s apes — sudden "aha!" solutions',
              'Not trial-and-error but sudden reorganization',
              'understanding rules and principles'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Insight learning: Köhler\'s apes — sudden "aha!" solutions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Abstract learning?',
            options: [
              'Köhler\'s apes — sudden "aha!" solutions',
              'Not trial-and-error but sudden reorganization',
              'understanding rules and principles',
              'applying knowledge to new situations'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Abstract learning: understanding rules and principles. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'obser4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Insight learning**: Köhler's apes — sudden "aha!" solutions
- **Not trial-and-error but sudden reorganization**
- **Abstract learning**: understanding rules and principles
- **Transfer of learning**: applying knowledge to new situations
      `
    },
    {
      id: 'obser4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to insight & latent learning?',
            options: [
              'applying knowledge to new situations',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Transfer of learning: applying knowledge to new situations'
          }
        ]
      }
    },
    {
      id: 'obser4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Insight learning',
            options: ['Köhler\'s apes — sudden "aha!" solutions', 'understanding rules and principles', 'applying knowledge to new situations', 'Not trial-and-error but sudden reorganization']
          },
          {
            label: 'Abstract learning',
            options: ['Köhler\'s apes — sudden "aha!" solutions', 'understanding rules and principles', 'applying knowledge to new situations', 'Not trial-and-error but sudden reorganization']
          },
          {
            label: 'Transfer of learning',
            options: ['Not trial-and-error but sudden reorganization', 'applying knowledge to new situations', 'understanding rules and principles', 'Köhler\'s apes — sudden "aha!" solutions']
          }
        ],
        correctAnswers: ['Köhler\'s apes — sudden "aha!" solutions', 'understanding rules and principles', 'applying knowledge to new situations'],
        hint1: 'Think about what each concept specifically describes in Insight & Latent Learning.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Insight & Latent Learning describes a specific idea. Insight learning: Köhler\'s apes — sudden "aha!" solutions. Abstract learning: understanding rules and principles. Transfer of learning: applying knowledge to new situations.'
      }
    }
  ]
}
