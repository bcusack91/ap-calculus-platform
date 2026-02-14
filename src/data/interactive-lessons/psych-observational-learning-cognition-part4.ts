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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of insight & latent learning?',
            options: [
              'Insight learning',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Insight learning: Köhler\'s apes — sudden "aha!" solutions'
          },
          {
            question: 'In the context of insight & latent learning, which is accurate?',
            options: [
              'understanding rules and principles',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Abstract learning: understanding rules and principles'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Insight learning',
            options: ['Köhler\'s apes — sudden "aha!" solutions', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Not trial-and-error but sudden reorganization',
            options: ['Not trial-and-error but sudden reorganization', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Abstract learning',
            options: ['understanding rules and principles', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Köhler\'s apes — sudden "aha!" solutions', 'Not trial-and-error but sudden reorganization', 'understanding rules and principles'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Insight & Latent Learning.'
      }
    }
  ]
}
