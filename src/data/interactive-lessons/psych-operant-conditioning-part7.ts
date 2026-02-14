export const psychOperantPart7Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'opera7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Operant = voluntary behavior

Operant = voluntary behavior

### 2. Classical = involuntary responses

Classical = involuntary responses

### 3. Cognitive maps (Tolman) and latent learning

Cognitive maps (Tolman) and latent learning

### 4. AP exam

reinforcement scenarios
      `
    },
    {
      id: 'opera7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Operant = voluntary behavior',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Operant = voluntary behavior'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Cognitive maps (Tolman) and latent learning',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cognitive maps (Tolman) and latent learning'
          }
        ]
      }
    },
    {
      id: 'opera7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Operant = voluntary behavior**
- **Classical = involuntary responses**
- **Cognitive maps (Tolman) and latent learning**
- **AP exam**: reinforcement scenarios
      `
    },
    {
      id: 'opera7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'reinforcement scenarios',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: reinforcement scenarios'
          }
        ]
      }
    },
    {
      id: 'opera7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Operant = voluntary behavior',
            options: ['Operant = voluntary behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Classical = involuntary responses',
            options: ['Classical = involuntary responses', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cognitive maps (Tolman) and latent learning',
            options: ['Cognitive maps (Tolman) and latent learning', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Operant = voluntary behavior', 'Classical = involuntary responses', 'Cognitive maps (Tolman) and latent learning'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
