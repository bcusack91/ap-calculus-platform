export const bioNatSelectionPart4Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu4-intro-p4',
      type: 'text' as const,
      content: `
# ## Hardy-Weinberg Equilibrium

**Part 4 of 7 — Hardy-Weinberg Equilibrium**

1. Conditions: large population, no migration, no mutation, random mating, no selection
2. Allele frequencies: p + q = 1
3. Genotype frequencies: p² + 2pq + q² = 1
4. Violations indicate evolution is occurring
      `
    },
    {
      id: 'natu4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Conditions?',
            options: [
              'Violations indicate evolution is occurring',
              'large population, no migration, no mutation, random mating, no selection',
              'p² + 2pq + q² = 1',
              'p + q = 1'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Conditions: large population, no migration, no mutation, random mating, no selection. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Genotype frequencies:',
            options: [
              'p² + 2pq + q² = 1',
              'p + q = 1',
              'large population, no migration, no mutation, random mating, no selection',
              'Violations indicate evolution is occurring'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Genotype frequencies: p² + 2pq + q² = 1. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'natu4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Conditions**: large population, no migration, no mutation, random mating, no selection
- **Allele frequencies**: p + q = 1
- **Genotype frequencies**: p² + 2pq + q² = 1
- **Violations indicate evolution is occurring**
      `
    },
    {
      id: 'natu4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Violations indicate evolution is… is correct?',
            options: [
              'large population, no migration, no mutation, random mating, no selection',
              'Violations indicate evolution is occurring',
              'p² + 2pq + q² = 1',
              'p + q = 1'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Violations indicate evolution is occurring. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'natu4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Conditions',
            options: ['p² + 2pq + q² = 1', 'p + q = 1', 'Violations indicate evolution is occurring', 'large population, no migration, no mutation, random mating, no selection']
          },
          {
            label: 'Allele frequencies',
            options: ['p² + 2pq + q² = 1', 'p + q = 1', 'Violations indicate evolution is occurring', 'large population, no migration, no mutation, random mating, no selection']
          },
          {
            label: 'Genotype frequencies',
            options: ['p + q = 1', 'p² + 2pq + q² = 1', 'Violations indicate evolution is occurring', 'large population, no migration, no mutation, random mating, no selection']
          }
        ],
        correctAnswers: ['large population, no migration, no mutation, random mating, no selection', 'p + q = 1', 'p² + 2pq + q² = 1'],
        hint1: 'Think about what each concept specifically describes in Hardy-Weinberg Equilibrium.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Hardy-Weinberg Equilibrium describes a specific idea. Conditions: large population, no migration, no mutation, random mating, no selection. Allele frequencies: p + q = 1. Genotype frequencies: p² + 2pq + q² = 1.'
      }
    }
  ]
}
