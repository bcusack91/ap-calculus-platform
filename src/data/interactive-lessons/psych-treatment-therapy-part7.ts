export const psychTreatmentPart7Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treat7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. No single therapy is best for all disorders

No single therapy is best for all disorders

### 2. Therapeutic relationship is crucial

Therapeutic relationship is crucial

### 3. Combination treatment often most effective

Combination treatment often most effective

### 4. AP exam

therapy identification and comparison
      `
    },
    {
      id: 'treat7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "No single therapy is best for all…" refer to in psychology?',
            options: [
              'therapy identification and comparison',
              'No single therapy is best for all disorders',
              'Therapeutic relationship is crucial',
              'Combination treatment often most effective'
            ],
            correctAnswer: 1,
            explanation: 'Correct — No single therapy is best for all disorders. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & AP Review, which explains Combination treatment often most…?',
            options: [
              'Therapeutic relationship is crucial',
              'therapy identification and comparison',
              'Combination treatment often most effective',
              'No single therapy is best for all disorders'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Combination treatment often most effective. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'treat7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **No single therapy is best for all disorders**
- **Therapeutic relationship is crucial**
- **Combination treatment often most effective**
- **AP exam**: therapy identification and comparison
      `
    },
    {
      id: 'treat7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'therapy identification and comparison',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: therapy identification and comparison'
          }
        ]
      }
    },
    {
      id: 'treat7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'No single therapy is best for all…',
            options: ['therapy identification and comparison', 'Combination treatment often most effective', 'No single therapy is best for all disorders', 'Therapeutic relationship is crucial']
          },
          {
            label: 'Therapeutic relationship is crucial',
            options: ['Combination treatment often most effective', 'therapy identification and comparison', 'No single therapy is best for all disorders', 'Therapeutic relationship is crucial']
          },
          {
            label: 'Combination treatment often most…',
            options: ['Therapeutic relationship is crucial', 'No single therapy is best for all disorders', 'Combination treatment often most effective', 'therapy identification and comparison']
          }
        ],
        correctAnswers: ['No single therapy is best for all disorders', 'Therapeutic relationship is crucial', 'Combination treatment often most effective'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. No single therapy is best for all disorders. Therapeutic relationship is crucial. Combination treatment often most effective.'
      }
    }
  ]
}
