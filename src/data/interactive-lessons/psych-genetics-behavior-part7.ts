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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Genes set the range, environment…?',
            options: [
              'Genes set the range, environment determines position',
              'Evolutionary psychology on the AP exam',
              'Neither nature nor nurture alone',
              'Critical evaluation of genetic determinism'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Genes set the range, environment determines position. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Evolutionary psychology on the AP exam?',
            options: [
              'Critical evaluation of genetic determinism',
              'Neither nature nor nurture alone',
              'Evolutionary psychology on the AP exam',
              'Genes set the range, environment determines position'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Evolutionary psychology on the AP exam. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Genes set the range, environment…',
            options: ['Critical evaluation of genetic determinism', 'Neither nature nor nurture alone', 'Genes set the range, environment determines position', 'Evolutionary psychology on the AP exam']
          },
          {
            label: 'Neither nature nor nurture alone',
            options: ['Evolutionary psychology on the AP exam', 'Neither nature nor nurture alone', 'Critical evaluation of genetic determinism', 'Genes set the range, environment determines position']
          },
          {
            label: 'Evolutionary psychology on the AP exam',
            options: ['Neither nature nor nurture alone', 'Critical evaluation of genetic determinism', 'Evolutionary psychology on the AP exam', 'Genes set the range, environment determines position']
          }
        ],
        correctAnswers: ['Genes set the range, environment determines position', 'Neither nature nor nurture alone', 'Evolutionary psychology on the AP exam'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Genes set the range, environment determines position. Neither nature nor nurture alone. Evolutionary psychology on the AP exam.'
      }
    }
  ]
}
