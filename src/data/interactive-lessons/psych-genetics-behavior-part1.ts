export const psychGeneticsPart1Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genet1-intro',
      type: 'text' as const,
      content: `
# 🧠 Genetics & Behavior

**Part 1 of 7 — Nature vs Nurture**

### 1. Nature

genetic/biological influences

### 2. Nurture

environmental influences

### 3. Interaction

genes AND environment shape behavior

### 4. Epigenetics

environment affects gene expression
      `
    },
    {
      id: 'genet1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of nature vs nurture?',
            options: [
              'Nature',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Nature: genetic/biological influences'
          },
          {
            question: 'In the context of nature vs nurture, which is accurate?',
            options: [
              'genes AND environment shape behavior',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Interaction: genes AND environment shape behavior'
          }
        ]
      }
    },
    {
      id: 'genet1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Nature**: genetic/biological influences
- **Nurture**: environmental influences
- **Interaction**: genes AND environment shape behavior
- **Epigenetics**: environment affects gene expression
      `
    },
    {
      id: 'genet1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nature vs nurture?',
            options: [
              'environment affects gene expression',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Epigenetics: environment affects gene expression'
          }
        ]
      }
    },
    {
      id: 'genet1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nature',
            options: ['genetic/biological influences', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Nurture',
            options: ['environmental influences', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Interaction',
            options: ['genes AND environment shape behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['genetic/biological influences', 'environmental influences', 'genes AND environment shape behavior'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Nature vs Nurture.'
      }
    }
  ]
}
