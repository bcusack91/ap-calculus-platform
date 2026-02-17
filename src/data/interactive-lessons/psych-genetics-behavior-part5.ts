export const psychGeneticsPart5Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genet5-intro',
      type: 'text' as const,
      content: `
# ## Gene-Environment Interaction

**Part 5 of 7 — Gene-Environment Interaction**

### 1. Diathesis-stress model

genetic predisposition + environmental trigger

### 2. Phenylketonuria (PKU)

genetic but treatable by environment

### 3. Epigenetic changes can be inherited

Epigenetic changes can be inherited

### 4. Gene × environment interaction in mental health

Gene × environment interaction in mental health
      `
    },
    {
      id: 'genet5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Diathesis-stress model" refer to in psychology?',
            options: [
              'genetic but treatable by environment',
              'Epigenetic changes can be inherited',
              'genetic predisposition + environmental trigger',
              'Gene × environment interaction in mental health'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Diathesis-stress model: genetic predisposition + environmental trigger. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Epigenetic changes can be inherited?',
            options: [
              'genetic but treatable by environment',
              'Gene × environment interaction in mental health',
              'Epigenetic changes can be inherited',
              'genetic predisposition + environmental trigger'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Epigenetic changes can be inherited. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'genet5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Diathesis-stress model**: genetic predisposition + environmental trigger
- **Phenylketonuria (PKU)**: genetic but treatable by environment
- **Epigenetic changes can be inherited**
- **Gene × environment interaction in mental health**
      `
    },
    {
      id: 'genet5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to gene-environment interaction?',
            options: [
              'Gene × environment interaction in mental health',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Gene × environment interaction in mental health'
          }
        ]
      }
    },
    {
      id: 'genet5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diathesis-stress model',
            options: ['genetic but treatable by environment', 'genetic predisposition + environmental trigger', 'Gene × environment interaction in mental health', 'Epigenetic changes can be inherited']
          },
          {
            label: 'Phenylketonuria (PKU)',
            options: ['Gene × environment interaction in mental health', 'genetic predisposition + environmental trigger', 'Epigenetic changes can be inherited', 'genetic but treatable by environment']
          }
        ],
        correctAnswers: ['genetic predisposition + environmental trigger', 'genetic but treatable by environment'],
        hint1: 'Think about what each concept specifically describes in Gene-Environment Interaction.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Gene-Environment Interaction describes a specific idea. Diathesis-stress model: genetic predisposition + environmental trigger. Phenylketonuria (PKU): genetic but treatable by environment.'
      }
    }
  ]
}
