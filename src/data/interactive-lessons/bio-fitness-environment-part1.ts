export const bioFitnessPart1Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn1-intro-p1',
      type: 'text' as const,
      content: `
# ## Introduction to Fitness

**Part 1 of 7 — Introduction to Fitness**

1. Biological fitness: reproductive success
2. Fitness is relative (compared to other genotypes)
3. Natural selection acts on phenotypes
4. Genotype × environment interaction
      `
    },
    {
      id: 'fitn1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Biological fitness?',
            options: [
              'Fitness is relative (compared to other genotypes)',
              'reproductive success',
              'Natural selection acts on phenotypes',
              'Genotype × environment interaction'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Biological fitness: reproductive success. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Natural selection acts on phenotypes:',
            options: [
              'reproductive success',
              'Fitness is relative (compared to other genotypes)',
              'Natural selection acts on phenotypes',
              'Genotype × environment interaction'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Natural selection acts on phenotypes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'fitn1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Biological fitness**: reproductive success
- **Fitness is relative (compared to other genotypes)**
- **Natural selection acts on phenotypes**
- **Genotype × environment interaction**
      `
    },
    {
      id: 'fitn1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Introduction to Fitness, which correctly describes Genotype × environment interaction?',
            options: [
              'Natural selection acts on phenotypes',
              'Genotype × environment interaction',
              'reproductive success',
              'Fitness is relative (compared to other genotypes)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Genotype × environment interaction. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'fitn1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological fitness',
            options: ['Natural selection acts on phenotypes', 'Genotype × environment interaction', 'reproductive success', 'Fitness is relative (compared to other genotypes)']
          },
          {
            label: 'Fitness is relative (compared to other…',
            options: ['Fitness is relative (compared to other genotypes)', 'Natural selection acts on phenotypes', 'reproductive success', 'Genotype × environment interaction']
          },
          {
            label: 'Natural selection acts on phenotypes',
            options: ['Fitness is relative (compared to other genotypes)', 'Natural selection acts on phenotypes', 'reproductive success', 'Genotype × environment interaction']
          }
        ],
        correctAnswers: ['reproductive success', 'Fitness is relative (compared to other genotypes)', 'Natural selection acts on phenotypes'],
        hint1: 'Think about what each concept specifically describes in Introduction to Fitness.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Introduction to Fitness describes a specific idea. Biological fitness: reproductive success. Fitness is relative (compared to other genotypes). Natural selection acts on phenotypes.'
      }
    }
  ]
}
