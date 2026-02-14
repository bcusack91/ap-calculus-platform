export const psychGeneticsPart7Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genet7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Genes set the range, environment determines position

Genes set the range, environment determines position

### 2. Neither nature nor nurture alone

Neither nature nor nurture alone

### 3. Evolutionary psychology on the AP exam

Evolutionary psychology on the AP exam

### 4. Critical evaluation of genetic determinism

Critical evaluation of genetic determinism
      `
    },
    {
      id: 'genet7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Genes set the range, environment determines position',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Genes set the range, environment determines position'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Evolutionary psychology on the AP exam',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evolutionary psychology on the AP exam'
          }
        ]
      }
    },
    {
      id: 'genet7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Genes set the range, environment determines position**
- **Neither nature nor nurture alone**
- **Evolutionary psychology on the AP exam**
- **Critical evaluation of genetic determinism**
      `
    },
    {
      id: 'genet7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'Critical evaluation of genetic determinism',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Critical evaluation of genetic determinism'
          }
        ]
      }
    },
    {
      id: 'genet7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Genes set the range, environment determines position',
            options: ['Genes set the range, environment determines positi', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Neither nature nor nurture alone',
            options: ['Neither nature nor nurture alone', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Evolutionary psychology on the AP exam',
            options: ['Evolutionary psychology on the AP exam', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Genes set the range, environment determines positi', 'Neither nature nor nurture alone', 'Evolutionary psychology on the AP exam'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
