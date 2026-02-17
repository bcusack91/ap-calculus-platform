export const mcatGeneticsPart3Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Population Genetics

**Part 3 of 7 — Population Genetics**

Hardy-Weinberg equilibrium: p2 + 2pq + q2 = 1; p + q = 1 (allele frequencies).

Conditions: no mutation, no selection, no migration, random mating, large population.
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in population genetics?',
            options: [
              'Hardy-Weinberg equilibrium: p2 + 2pq + q2 = 1; p + q = 1 (allele frequencies)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Hardy-Weinberg equilibrium: p2 + 2pq + q2 = 1; p + q = 1 (allele frequencies)'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Genetic drift: random changes in allele frequency, stronger in small populations.

**MCAT Tip:** Bottleneck effect and founder effect: reduce genetic diversity.
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to population genetics?',
            options: [
              'Genetic drift: random changes in allele frequency, stronger in small populations',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Genetic drift: random changes in allele frequency, stronger in small populations'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hardy-Weinberg equilibrium',
            options: ['Bottleneck effect and founder effect: reduce genetic diversity.', 'no mutation, no selection, no migration, random mating, large population.', 'Genetic drift: random changes in allele frequency, stronger in small populations.', 'p2 + 2pq + q2 = 1; p + q = 1 (allele frequencies).']
          },
          {
            label: 'Conditions',
            options: ['Genetic drift: random changes in allele frequency, stronger in small populations.', 'no mutation, no selection, no migration, random mating, large population.', 'p2 + 2pq + q2 = 1; p + q = 1 (allele frequencies).', 'Bottleneck effect and founder effect: reduce genetic diversity.']
          },
          {
            label: 'Key Insight',
            options: ['Bottleneck effect and founder effect: reduce genetic diversity.', 'Genetic drift: random changes in allele frequency, stronger in small populations.', 'p2 + 2pq + q2 = 1; p + q = 1 (allele frequencies).', 'no mutation, no selection, no migration, random mating, large population.']
          }
        ],
        correctAnswers: ['p2 + 2pq + q2 = 1; p + q = 1 (allele frequencies).', 'no mutation, no selection, no migration, random mating, large population.', 'Genetic drift: random changes in allele frequency, stronger in small populations.'],
        hint1: 'Think about what each concept specifically describes in Population Genetics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Population Genetics describes a specific idea. Hardy-Weinberg equilibrium: p2 + 2pq + q2 = 1; p + q = 1 (allele frequencies). Conditions: no mutation, no selection, no migration, random mating, large population. Key Insight: Genetic drift: random changes in allele frequency, stronger in small populations.'
      }
    }
  ]
}
