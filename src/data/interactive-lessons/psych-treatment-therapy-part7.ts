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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'No single therapy is best for all disorders',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'No single therapy is best for all disorders'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Combination treatment often most effective',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Combination treatment often most effective'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'No single therapy is best for all disorders',
            options: ['No single therapy is best for all disorders', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Therapeutic relationship is crucial',
            options: ['Therapeutic relationship is crucial', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Combination treatment often most effective',
            options: ['Combination treatment often most effective', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['No single therapy is best for all disorders', 'Therapeutic relationship is crucial', 'Combination treatment often most effective'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
