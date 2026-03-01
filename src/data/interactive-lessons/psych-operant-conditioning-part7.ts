export const psychOperantPart7Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'opera7-intro',
      type: 'text' as const,
      content: `
## Synthesis & AP Review

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Operant = voluntary behavior?',
            options: [
              'Operant = voluntary behavior',
              'Cognitive maps (Tolman) and latent learning',
              'Classical = involuntary responses',
              'reinforcement scenarios'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Operant = voluntary behavior. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Cognitive maps (Tolman) and latent…:',
            options: [
              'Classical = involuntary responses',
              'Operant = voluntary behavior',
              'reinforcement scenarios',
              'Cognitive maps (Tolman) and latent learning'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Cognitive maps (Tolman) and latent learning. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'opera7-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Operant = voluntary behavior',
            options: ['Classical = involuntary responses', 'Operant = voluntary behavior', 'reinforcement scenarios', 'Cognitive maps (Tolman) and latent learning']
          },
          {
            label: 'Classical = involuntary responses',
            options: ['Cognitive maps (Tolman) and latent learning', 'reinforcement scenarios', 'Classical = involuntary responses', 'Operant = voluntary behavior']
          },
          {
            label: 'Cognitive maps (Tolman) and latent…',
            options: ['Cognitive maps (Tolman) and latent learning', 'reinforcement scenarios', 'Classical = involuntary responses', 'Operant = voluntary behavior']
          }
        ],
        correctAnswers: ['Operant = voluntary behavior', 'Classical = involuntary responses', 'Cognitive maps (Tolman) and latent learning'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Operant = voluntary behavior. Classical = involuntary responses. Cognitive maps (Tolman) and latent learning.'
      }
    }
  ]
}
