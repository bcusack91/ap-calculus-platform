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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Nature" refer to in psychology?',
            options: [
              'genetic/biological influences',
              'environmental influences',
              'environment affects gene expression',
              'genes AND environment shape behavior'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Nature: genetic/biological influences. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Interaction:',
            options: [
              'environmental influences',
              'environment affects gene expression',
              'genetic/biological influences',
              'genes AND environment shape behavior'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Interaction: genes AND environment shape behavior. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nature',
            options: ['environment affects gene expression', 'environmental influences', 'genes AND environment shape behavior', 'genetic/biological influences']
          },
          {
            label: 'Nurture',
            options: ['environment affects gene expression', 'environmental influences', 'genes AND environment shape behavior', 'genetic/biological influences']
          },
          {
            label: 'Interaction',
            options: ['genes AND environment shape behavior', 'environment affects gene expression', 'environmental influences', 'genetic/biological influences']
          }
        ],
        correctAnswers: ['genetic/biological influences', 'environmental influences', 'genes AND environment shape behavior'],
        hint1: 'Think about what each concept specifically describes in Genetics & Behavior.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Genetics & Behavior describes a specific idea. Nature: genetic/biological influences. Nurture: environmental influences. Interaction: genes AND environment shape behavior.'
      }
    }
  ]
}
