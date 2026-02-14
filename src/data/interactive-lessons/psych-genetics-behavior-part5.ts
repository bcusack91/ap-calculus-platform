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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of gene-environment interaction?',
            options: [
              'Diathesis-stress model',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Diathesis-stress model: genetic predisposition + environmental trigger'
          },
          {
            question: 'In the context of gene-environment interaction, which is accurate?',
            options: [
              'Epigenetic changes can be inherited',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Epigenetic changes can be inherited'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Diathesis-stress model',
            options: ['genetic predisposition + environmental trigger', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Phenylketonuria (PKU)',
            options: ['genetic but treatable by environment', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Epigenetic changes can be inherited',
            options: ['Epigenetic changes can be inherited', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['genetic predisposition + environmental trigger', 'genetic but treatable by environment', 'Epigenetic changes can be inherited'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Gene-Environment Interaction.'
      }
    }
  ]
}
